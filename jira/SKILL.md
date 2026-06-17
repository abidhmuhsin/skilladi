---
name: jira
description: "Use this skill when working with Jira issues, searching issues with JQL, creating or updating issues, adding comments, transitioning status, managing links, assigning issues, viewing worklogs, or performing raw Jira REST API queries. Trigger phrases include: Jira, Jira issue, search issues, JQL, create issue, update issue, comment on issue, transition issue, link issues, assign issue, worklog, list projects, get transitions, Jira REST API."
---

# Jira Skill

Use the bundled Node.js scripts for common Jira API operations.

## Prerequisites

Set `JIRA_TOKEN` before running scripts.

- A bearer token is sent as `Bearer <token>`.

Set `JIRA_BASE_URL` to the Jira server root URL, for example `https://jira.example.com`. Do not include `/rest/api/2`; the scripts add that path automatically.

Node 18+ is required. Scripts live under:

- `scripts/jira/` - Jira API scripts
- `scripts/lib/` - internal helpers; do not call these directly

Run scripts with:

```bash
node "scripts/jira/<script>.mjs" --flag value
```

## Common Operations

Fetch a Jira issue with details and comments:

```bash
node "scripts/jira/get-jira-issue.mjs" --issueKey PROJ-1234
```

Search issues using JQL:

```bash
node "scripts/jira/search-issues.mjs" --jql "project = PROJ AND status = Open ORDER BY updated DESC"
node "scripts/jira/search-issues.mjs" --jql "assignee = currentUser() ORDER BY updated DESC" --maxResults 10
node "scripts/jira/search-issues.mjs" --jql "project = PROJ" --maxResults 50 --startAt 50
```

Create a new issue:

```bash
node "scripts/jira/create-issue.mjs" \
  --project <key> --type <Bug|Story|Task|...> \
  --summary "<title>" [--description "<text>"] \
  [--priority <name>] [--assignee <accountId>] [--labels <label1,label2>]
```

Update issue fields:

```bash
node "scripts/jira/update-issue.mjs" --issueKey PROJ-1234 \
  [--summary "<text>"] [--description "<text>"] \
  [--priority <name>] [--assignee <accountId>] \
  [--addLabels <label>] [--removeLabels <label>]
```

Add a comment to an issue:

```bash
node "scripts/jira/add-comment.mjs" --issueKey PROJ-1234 --comment "<text>"
```

Get available status transitions:

```bash
node "scripts/jira/get-transitions.mjs" --issueKey PROJ-1234
```

Transition an issue to a new status:

```bash
node "scripts/jira/transition-issue.mjs" --issueKey PROJ-1234 --transitionId <id> [--comment "<text>"]
```

Assign or unassign an issue:

```bash
node "scripts/jira/assign-issue.mjs" --issueKey PROJ-1234 --accountId <id>
node "scripts/jira/assign-issue.mjs" --issueKey PROJ-1234 --accountId ""
```

Link two issues:

```bash
node "scripts/jira/link-issues.mjs" --type "Blocks" --inwardIssue PROJ-100 --outwardIssue PROJ-200
node "scripts/jira/link-issues.mjs" --type "Relates to" --inwardIssue PROJ-100 --outwardIssue PROJ-200 --comment "<text>"
```

Get linked issues:

```bash
node "scripts/jira/get-linked-issues.mjs" --issueKey PROJ-1234
```

Get worklog entries:

```bash
node "scripts/jira/get-issue-worklog.mjs" --issueKey PROJ-1234
```

Add a worklog entry:

```bash
node "scripts/jira/add-worklog.mjs" --issueKey PROJ-1234 --timeSpent "2h" [--comment "<text>"]
```

List all accessible projects:

```bash
node "scripts/jira/list-projects.mjs"
node "scripts/jira/list-projects.mjs" --maxResults 50 --startAt 50
```

## Script Routing

| Goal | Script |
|---|---|
| Get issue details and comments | `scripts/jira/get-jira-issue.mjs` |
| Search issues with JQL | `scripts/jira/search-issues.mjs` |
| Create a new issue | `scripts/jira/create-issue.mjs` |
| Update issue fields | `scripts/jira/update-issue.mjs` |
| Add a comment | `scripts/jira/add-comment.mjs` |
| Get available transitions | `scripts/jira/get-transitions.mjs` |
| Transition issue status | `scripts/jira/transition-issue.mjs` |
| Assign or unassign issue | `scripts/jira/assign-issue.mjs` |
| Link two issues | `scripts/jira/link-issues.mjs` |
| Get linked issues | `scripts/jira/get-linked-issues.mjs` |
| Get worklog entries | `scripts/jira/get-issue-worklog.mjs` |
| Add worklog entry | `scripts/jira/add-worklog.mjs` |
| List projects | `scripts/jira/list-projects.mjs` |

## Ad-hoc Queries

For one-off Jira lookups not covered by a script, import `jiraRequest` directly:

```bash
node --input-type=module <<'EOF'
import { jiraRequest } from './scripts/lib/jira.mjs';
const data = await jiraRequest('/project?maxResults=200');
data.forEach(p => console.log(p.key, p.name));
EOF
```

Pass any `/rest/api/2` path. Run from the skill base directory.

## Extending the Skill

Ask user if an ad-hoc query proves useful or a recurring task is not covered by an existing script:

1. Create a new script under `scripts/jira/`.
2. Add a row for it to the Script Routing table in this file.
3. Update the `description` trigger phrases in the frontmatter if the new script covers a new category of user request.
