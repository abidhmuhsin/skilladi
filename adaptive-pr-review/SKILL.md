---
name: adaptive-pr-review
description: "Use this skill when reviewing or managing BitBucket pull requests: inspect PR metadata and diffs, post inline comments, reply to comments, edit or resolve comment threads, create pull requests, update PR title or description, check PR activities, summarize PR changes, or cross-reference Jira issues. Trigger phrases include: review PR, review pull request, check PR, comment on PR, post PR feedback, create a PR, create a pull request, what changed in PR, look at PR, summarize PR, PR activities."
---

# Adaptive BitBucket PR Review Skill

Use the Node.js scripts in this skill to review and manage BitBucket pull requests.

## Prerequisites

Set `BITBUCKET_TOKEN` before running BitBucket scripts.

- A bearer token is sent as `Bearer <token>`.
- `username:app_password` is encoded automatically as Basic auth.

Set `BITBUCKET_BASE_URL` to the BitBucket server root URL, for example `https://bitbucket.example.com`. Do not include `/rest/api/1.0`; the scripts add that path automatically.

For Jira integration, set `JIRA_TOKEN`.

Set `JIRA_BASE_URL` to the Jira server root URL, for example `https://jira.example.com`. Do not include `/rest/api/2`; the scripts add that path automatically.

Node 18+ is required. Scripts live under:

- `scripts/bitbucket/` - BitBucket API scripts
- `scripts/jira/` - Jira API scripts
- `scripts/lib/` - internal helpers; do not call these directly

Run scripts with:

```bash
node "scripts/bitbucket/<script>.mjs" --flag value
```

Default project: `PROJ`. Pass `--project <key>` only when working in another project.

## Core Workflow

Always start a PR session with:

```bash
node "scripts/bitbucket/get-pr-info.mjs" --prId <id> --repo <repo>
```

This returns PR metadata, description, and a changed-files checklist. Run it once per PR session.

Before reviewing diffs or drafting comments, load the `Current Review Patterns` section from `references/review-patterns.md`.

- Apply any current patterns in that file during the review.
- If a pattern conflicts with the current PR context, prefer the PR context and record the mismatch after the review.

If the PR description contains a Jira key such as `PROJ-1234` and `JIRA_TOKEN` is set, run:

```bash
node "scripts/jira/get-jira-issue.mjs" --issueKey PROJ-1234
```

Then choose the smallest useful diff command:

- For PRs with 20 or fewer changed files, run `get-pr-diff.mjs`.
- If output is truncated or a checklist file is missing, run `get-file-diff.mjs --file <path>`.
- Use `get-file-content.mjs --file <path> --side TO` only to verify code not visible in the diff before making a technical claim.

Before posting comments, run:

```bash
node "scripts/bitbucket/get-activities.mjs" --prId <id> --repo <repo>
```

This exposes existing comment IDs, replies, approvals, and resolved thread state.

## Review Memory Loop

This skill should evolve from actual review sessions. Treat `references/review-patterns.md` as the skill's review memory file.

Capture a note when any of these happen during a review:

- The user corrects a technical claim or severity level.
- The user rewrites comment tone or asks for a different framing style.
- The user rejects a false positive or points out missing context.
- The same kind of issue appears across multiple PRs.
- A one-off manual check proves consistently useful.

Store reusable review lessons, not raw Jira details or PR-specific business context unless they generalize into a future review pattern.

Record the note when the signal appears. Do not rely on end-of-review memory for corrections that affect accuracy or tone.

During a normal PR review, the default is capture first, update the skill later. Do not rewrite this skill mid-review unless the user explicitly asks for that change or the current guidance is actively causing incorrect review output.

After the review, append or complete the entry in `references/review-patterns.md` using this format:

```markdown
## Candidate Patterns

### 2026-05-26 | Short label
- Context: What PR or situation triggered this.
- Lesson: What was wrong, missing, or unusually effective.
- Next pass: The concrete adjustment to try in future reviews.
- State: CANDIDATE
- Tags: severity, false-positive
```

Graduation rule:

1. If the same lesson recurs twice, move it from `Candidate Patterns` to `Current Review Patterns`.
2. When a pattern proves broadly reliable, fold it into the relevant permanent guidance in this skill, usually `SKILL.md`, `references/review-workflow.md`, or `references/commenting-guide.md`.
3. Once a pattern has been folded into the permanent guidance, either keep it in `Current Review Patterns` as an active reminder or move it to `Archived Patterns` with a note such as `Codified in review-workflow.md`.
4. If a pattern becomes stale, too narrow, or misleading, move it to `Archived Patterns` with a brief reason.

### Pattern Review Trigger

Do not interrupt an active PR review to reconcile pattern notes.

After the review is complete, inspect only the `Candidate Patterns` section of `references/review-patterns.md`. Prefer a targeted text search or helper script instead of reading the whole file when possible.

Use this helper script when you want a compact summary or cleanup signal:

```bash
node "scripts/memory/review-memory.mjs"
node "scripts/memory/review-memory.mjs" --section current
node "scripts/memory/review-memory.mjs" --section candidate
```

Run a pattern cleanup pass only when one of these is true:

- `Candidate Patterns` has 5 or more pattern entries.
- The oldest pattern entry in `Candidate Patterns` is more than 14 days old.

If a cleanup pass is needed:

1. Merge duplicate or closely related candidate entries.
2. Promote repeated lessons into `Current Review Patterns`.
3. Fold broadly reliable patterns into `SKILL.md`, `references/review-workflow.md`, or `references/commenting-guide.md` when appropriate.
4. Move stale, disproven, or overly narrow entries to `Archived Patterns`.

This review is a maintenance step, not part of the active PR-review flow.

Do not frame this as model training. It is a maintained file-based memory loop: the skill carries forward review lessons in repo files and reuses them in later sessions.

## Commenting Rules

Use `comment-line.mjs` for file-specific issues:

```bash
node "scripts/bitbucket/comment-line.mjs" \
  --prId <id> --repo <repo> \
  --file <path> --line <n> \
  --lineType ADDED --comment "<text>"
```

Keep this short rule set in mind:

- Prefer `ADDED` lines for comments.
- Use the exact line number shown in annotated diff output.
- Do not post positive feedback as line comments.
- Use `--severity BLOCKER` only for security issues, logic errors, or breaking changes.
- If the script says the line does not exist on the expected side, re-read the diff and choose a new line number.

Use `comment-pr.mjs` for top-level PR comments and replies:

```bash
node "scripts/bitbucket/comment-pr.mjs" --prId <id> --repo <repo> --comment "<text>"
node "scripts/bitbucket/comment-pr.mjs" --prId <id> --repo <repo> --parentId <id> --comment "<text>"
```

Never use `comment-line.mjs` to reply to an existing comment.

Do not post an overall summary comment without user confirmation.

Use `update-comment.mjs` to edit, resolve, or reopen a comment thread:

```bash
node "scripts/bitbucket/update-comment.mjs" \
  --prId <id> --repo <repo> --commentId <id> \
  [--text "<new text>"] [--state resolve|reopen]
```

## PR Management

Create a PR:

```bash
node "scripts/bitbucket/create-pr.mjs" \
  --title "<title>" --from <branch> --to <branch> --repo <repo>
```

Defaults to draft. Pass `--draft false` for ready-for-review.

List pull requests:

```bash
node "scripts/bitbucket/list-prs.mjs" [--repo <repo>] [--project <key>] [--state OPEN|MERGED|DECLINED|ALL] [--role AUTHOR|REVIEWER|PARTICIPANT] [--limit <n>] [--start <n>]
```

Omit `--repo` to query the dashboard (all repos). Use `--start` to paginate.

Read or update PR title and description:

```bash
node "scripts/bitbucket/update-pr.mjs" --prId <id> --repo <repo>
```

Omit `--title` and `--description` to read. Provide either or both to update.

## Script Routing

| Goal | Script |
|---|---|
| Start review / get file checklist | `scripts/bitbucket/get-pr-info.mjs` |
| Full diff for all files | `scripts/bitbucket/get-pr-diff.mjs` |
| Diff for one file | `scripts/bitbucket/get-file-diff.mjs` |
| Verify dependency not in diff | `scripts/bitbucket/get-file-content.mjs` |
| See comments, IDs, approvals | `scripts/bitbucket/get-activities.mjs` |
| Post inline line comment | `scripts/bitbucket/comment-line.mjs` |
| Post summary or reply | `scripts/bitbucket/comment-pr.mjs` |
| Edit, resolve, or reopen comment | `scripts/bitbucket/update-comment.mjs` |
| Create a PR | `scripts/bitbucket/create-pr.mjs` |
| Read or update PR title/description | `scripts/bitbucket/update-pr.mjs` |
| List pull requests | `scripts/bitbucket/list-prs.mjs` |
| Fetch Jira issue | `scripts/jira/get-jira-issue.mjs` |
| Summarize review memory / cleanup signal | `scripts/memory/review-memory.mjs` |

## When to Load References

- Load the `Current Review Patterns` section from `references/review-patterns.md` at the start of every review session.
- Load `references/commenting-guide.md` before posting, replying to, editing, resolving, or reopening comments.
- Load `references/review-workflow.md` when performing a full code review or preparing review feedback.

## Pattern File Maintenance

Keep `references/review-patterns.md` structured enough for both human review and future script-based lookup.

- Add new entries as they happen; do not batch from memory if accuracy matters.
- Prefer short entries tied to a concrete review mistake, correction, or repeated win.
- Keep each pattern entry as one `###` block with the same field names.
- When a pattern is superseded, codified elsewhere, or no longer useful, move it to `Archived Patterns` instead of leaving stale guidance in the active sections.

## Compatibility Rule

Future edits to this skill must preserve compatibility with `references/review-patterns.md`.

- Do not remove the instruction to load the pattern file at review start unless the memory mechanism is being replaced in the same change.
- Do not rename `Current Review Patterns`, `Candidate Patterns`, or `Archived Patterns` without updating the related workflow guidance.
- Do not change the entry field names or heading format without updating any helper logic that depends on them.
- If the pattern file structure changes, migrate existing entries in the same update rather than resetting the file.

## Ad-hoc Queries

For one-off lookups not covered by a script, import `bbRequest` directly:

```bash
node --input-type=module <<'EOF'
import { bbRequest } from './scripts/lib/bb.mjs';
const data = await bbRequest('/projects?limit=100');
data.values.forEach(p => console.log(p.key, p.name));
EOF
```

Pass any `/rest/api/1.0` path. Run from the skill base directory.

Same pattern works for Jira using `jiraRequest` from `./scripts/lib/jira.mjs` — pass any `/rest/api/2` path, e.g. `/project?maxResults=200` to list projects.

## Extending the Skill

If an ad-hoc query proves useful or a recurring task isn't covered by an existing script, offer to:

1. Create a new script under `scripts/bitbucket/` or `scripts/jira/` so the operation is reusable.
2. Add a row for it to the Script Routing table in this file.
3. Update the `description` trigger phrases in the frontmatter if the new script covers a new category of user request.
