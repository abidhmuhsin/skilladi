---
name: pr-review
description: "Use this skill when reviewing or managing BitBucket pull requests: inspect PR metadata and diffs, post inline comments, reply to comments, edit or resolve comment threads, create pull requests, update PR title or description, check PR activities, summarize PR changes, or cross-reference Jira issues. Trigger phrases include: review PR, review pull request, check PR, comment on PR, post PR feedback, create a PR, create a pull request, what changed in PR, look at PR, summarize PR, PR activities."
---

# BitBucket PR Review Skill

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

## When to Load References

- Load `references/commenting-guide.md` before posting, replying to, editing, resolving, or reopening comments.
- Load `references/review-workflow.md` when performing a full code review or preparing review feedback.

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
