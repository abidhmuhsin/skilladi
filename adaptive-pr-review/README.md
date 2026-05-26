# adaptive-pr-review Skill

A local Codex skill for reviewing and managing BitBucket pull requests. Scripts call the BitBucket REST API directly with Node.js. No MCP server setup is required.

## Auth Setup

BitBucket is required:

```powershell
$env:BITBUCKET_TOKEN = "your_bearer_token"
```

```bash
export BITBUCKET_TOKEN="your_bearer_token"
```

Generate an app password in BitBucket: Profile -> Personal settings -> App passwords. It needs repository read and pull-request write scopes.

Accepted token formats:

- Bearer token - sent as `Bearer <token>`
- `username:app_password` - encoded to Basic auth automatically

BitBucket server URL:

```powershell
$env:BITBUCKET_BASE_URL = "https://bitbucket.example.com"
```

```bash
export BITBUCKET_BASE_URL="https://bitbucket.example.com"
```

Do not include `/rest/api/1.0`; the scripts add that path automatically.

Jira is optional:

```powershell
$env:JIRA_TOKEN = "your_jira_api_token"
```

Jira server URL:

```powershell
$env:JIRA_BASE_URL = "https://jira.example.com"
```

```bash
export JIRA_BASE_URL="https://jira.example.com"
```

Do not include `/rest/api/2`; the scripts add that path automatically.

## Quick Start

```bash
# Get PR overview and file list
node scripts/bitbucket/get-pr-info.mjs --prId 123 --repo my-repo

# Get full diff
node scripts/bitbucket/get-pr-diff.mjs --prId 123 --repo my-repo

# Get diff for a single file
node scripts/bitbucket/get-file-diff.mjs --prId 123 --repo my-repo --file src/app.ts

# See existing comments and IDs
node scripts/bitbucket/get-activities.mjs --prId 123 --repo my-repo

# Post a line comment
node scripts/bitbucket/comment-line.mjs \
  --prId 123 --repo my-repo \
  --file src/app.ts --line 42 --lineType ADDED \
  --comment "Consider validating the input here."

# Resolve a comment thread
node scripts/bitbucket/update-comment.mjs --prId 123 --repo my-repo --commentId 456 --state resolve

# Get a Jira issue
node scripts/jira/get-jira-issue.mjs --issueKey PROJ-1234

# Summarize review memory
node scripts/memory/review-memory.mjs
```

Default project key is `PROJ`. Pass `--project <key>` to override.

## Review Memory

The skill includes a lightweight review-memory loop in [references/review-patterns.md](./references/review-patterns.md).

- Read `Current Review Patterns` before each PR review.
- Record user corrections, false positives, tone adjustments, and repeated checks in `Candidate Patterns`.
- Move repeated lessons into `Current Review Patterns`, then fold them back into `SKILL.md` or the reference guides when they become stable.
- Keep entries in a script-friendly format: `### YYYY-MM-DD | Short label` with stable field names below.

Helper script:

```bash
node scripts/memory/review-memory.mjs
node scripts/memory/review-memory.mjs --section current
```

This keeps review behavior consistent across sessions without adding new scripts or external storage.

## Directory Structure

```text
scripts/
|-- lib/           # Internal helpers, imported by scripts only
|   |-- bb.mjs     # BitBucket auth, bbRequest(), annotatedDiff(), parseArgs()
|   `-- jira.mjs   # Jira auth, jiraRequest(), parseArgs()
|-- bitbucket/     # BitBucket API scripts
|   |-- get-pr-info.mjs
|   |-- get-pr-diff.mjs
|   |-- get-file-diff.mjs
|   |-- get-file-content.mjs
|   |-- get-activities.mjs
|   |-- comment-pr.mjs
|   |-- comment-line.mjs
|   |-- update-comment.mjs
|   |-- create-pr.mjs
|   `-- update-pr.mjs
`-- jira/          # Jira API scripts
    `-- get-jira-issue.mjs
```

## Adding New Services

To add Confluence or another service:

1. Create `scripts/lib/confluence.mjs` with auth and request helpers.
2. Create `scripts/confluence/` with tool scripts.
3. Import the helper from `../lib/confluence.mjs` in each script.
4. Add the scripts to the routing table in `SKILL.md`.

## Requirements

- Node.js 18+ for built-in `fetch`
- `BITBUCKET_TOKEN`
- `BITBUCKET_BASE_URL` for the BitBucket server root URL
- `JIRA_TOKEN` for Jira scripts
- `JIRA_BASE_URL` for the Jira server root URL
