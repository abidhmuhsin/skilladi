---
name: bitbucket-datacenter
description: "Use this skill when working with Bitbucket Data Center pull requests, repositories, diffs, comments, PR metadata, PR creation or updates, PR activity, raw Bitbucket REST API queries, or related Jira issue lookups. Trigger phrases include: Bitbucket Data Center, Bitbucket PR, list PRs, create PR, update PR, PR activities, get PR diff, get file diff, comment on PR, resolve Bitbucket comment, Bitbucket REST API, fetch Jira issue."
---

# Bitbucket Data Center Skill

Use the bundled Node.js scripts for common Bitbucket Data Center and related Jira API operations.

## Prerequisites

Set `BITBUCKET_TOKEN` before running Bitbucket scripts.

- `username:apppassword` is encoded automatically as Basic auth.
- A bare token is sent as `Bearer <token>`.

Optionally set `BITBUCKET_BASE_URL` to the Bitbucket server root URL, for example `https://bitbucket.example.com`. Do not include `/rest/api/1.0`; the scripts add that path automatically.

For Jira lookups, set `JIRA_TOKEN`.

Optionally set `JIRA_BASE_URL` to the Jira server root URL, for example `https://jira.example.com`. Do not include `/rest/api/2`; the scripts add that path automatically.

Node 18+ is required. Scripts live under:

- `scripts/bitbucket/` - Bitbucket API scripts
- `scripts/jira/` - Jira API scripts
- `scripts/lib/` - internal helpers; do not call these directly

Run scripts with:

```bash
node "scripts/bitbucket/<script>.mjs" --flag value
```

Default project: `PROJ`. Pass `--project <key>` when working in another project.

## Common Operations

Read PR metadata and changed files:

```bash
node "scripts/bitbucket/get-pr-info.mjs" --prId <id> --repo <repo>
```

Read PR diffs:

```bash
node "scripts/bitbucket/get-pr-diff.mjs" --prId <id> --repo <repo>
node "scripts/bitbucket/get-file-diff.mjs" --prId <id> --repo <repo> --file <path>
```

Read file content from either side of a PR:

```bash
node "scripts/bitbucket/get-file-content.mjs" --prId <id> --repo <repo> --file <path> --side TO
node "scripts/bitbucket/get-file-content.mjs" --prId <id> --repo <repo> --file <path> --side FROM
```

Read PR activities, including comments, replies, approvals, and resolved thread state:

```bash
node "scripts/bitbucket/get-activities.mjs" --prId <id> --repo <repo>
```

Post PR comments:

```bash
node "scripts/bitbucket/comment-line.mjs" \
  --prId <id> --repo <repo> \
  --file <path> --line <n> \
  --lineType ADDED --comment "<text>"

node "scripts/bitbucket/comment-pr.mjs" --prId <id> --repo <repo> --comment "<text>"
node "scripts/bitbucket/comment-pr.mjs" --prId <id> --repo <repo> --parentId <id> --comment "<text>"
```

Use `comment-line.mjs` for file-specific comments and `comment-pr.mjs` for top-level comments or replies.

Edit, resolve, or reopen a comment thread:

```bash
node "scripts/bitbucket/update-comment.mjs" \
  --prId <id> --repo <repo> --commentId <id> \
  [--text "<new text>"] [--state resolve|reopen]
```

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

Omit `--repo` to query the dashboard across repositories. Use `--start` to paginate.

Read or update PR title and description:

```bash
node "scripts/bitbucket/update-pr.mjs" --prId <id> --repo <repo>
```

Omit `--title` and `--description` to read. Provide either or both to update.

Fetch a Jira issue:

```bash
node "scripts/jira/get-jira-issue.mjs" --issueKey PROJ-1234
```

## Script Routing

| Goal | Script |
|---|---|
| Get PR metadata and changed files | `scripts/bitbucket/get-pr-info.mjs` |
| Full diff for all files | `scripts/bitbucket/get-pr-diff.mjs` |
| Diff for one file | `scripts/bitbucket/get-file-diff.mjs` |
| File content from PR source or target side | `scripts/bitbucket/get-file-content.mjs` |
| See comments, IDs, approvals, and thread state | `scripts/bitbucket/get-activities.mjs` |
| Post inline line comment | `scripts/bitbucket/comment-line.mjs` |
| Post top-level comment or reply | `scripts/bitbucket/comment-pr.mjs` |
| Edit, resolve, or reopen comment | `scripts/bitbucket/update-comment.mjs` |
| Create a PR | `scripts/bitbucket/create-pr.mjs` |
| Read or update PR title/description | `scripts/bitbucket/update-pr.mjs` |
| List pull requests | `scripts/bitbucket/list-prs.mjs` |
| Fetch Jira issue | `scripts/jira/get-jira-issue.mjs` |

## Ad-hoc Queries

For one-off Bitbucket lookups not covered by a script, import `bbRequest` directly:

```bash
node --input-type=module <<'EOF'
import { bbRequest } from './scripts/lib/bb.mjs';
const data = await bbRequest('/projects?limit=100');
data.values.forEach(p => console.log(p.key, p.name));
EOF
```

Pass any `/rest/api/1.0` path. Run from the skill base directory.

Same pattern works for Jira using `jiraRequest` from `./scripts/lib/jira.mjs`; pass any `/rest/api/2` path, for example `/project?maxResults=200` to list projects.

## Extending the Skill

Ask user if an ad-hoc query proves useful or a recurring task is not covered by an existing script:

1. Create a new script under `scripts/bitbucket/` or `scripts/jira/`.
2. Add a row for it to the Script Routing table in this file.
3. Update the `description` trigger phrases in the frontmatter if the new script covers a new category of user request.
