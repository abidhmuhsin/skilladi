/**
 * Gets Jira issue details and comments.
 * Usage: node get-jira-issue.mjs --issueKey <key>   (e.g. PROJ-1234)
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey) {
  console.error('Missing required argument: --issueKey (e.g. PROJ-1234)');
  process.exit(1);
}

const key = args.issueKey;

const [issue, commentsData] = await Promise.all([
  jiraRequest(`/issue/${key}`),
  jiraRequest(`/issue/${key}/comment`).catch(() => ({ comments: [] })),
]);

const f = issue.fields;

let out = `Issue: ${issue.key}
Summary: ${f.summary}
Type: ${f.issuetype?.name ?? 'Unknown'}
Status: ${f.status?.name ?? 'Unknown'}`;

if (f.priority) out += `\nPriority: ${f.priority.name}`;
if (f.assignee) out += `\nAssignee: ${f.assignee.displayName}`;
if (f.reporter) out += `\nReporter: ${f.reporter.displayName}`;

out += `\nCreated: ${new Date(f.created).toLocaleString()}`;
out += `\nUpdated: ${new Date(f.updated).toLocaleString()}\n`;

out += f.description ? `\nDescription:\n${f.description}` : '\nDescription: (No description provided)';

const comments = commentsData.comments ?? [];
if (comments.length === 0) {
  out += '\n\nComments: (No comments)';
} else {
  out += `\n\nComments (${comments.length}):`;
  for (const c of comments) {
    out += `\n\n--- Comment by ${c.author.displayName} ---\nDate: ${new Date(c.created).toLocaleString()}\n${c.body || '(No comment body)'}`;
  }
}

console.log(out);
