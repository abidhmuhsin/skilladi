/**
 * Gets worklog entries for a Jira issue.
 * Usage: node get-issue-worklog.mjs --issueKey <key>
 *
 * Examples:
 *   node get-issue-worklog.mjs --issueKey PROJ-123
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey) {
  console.error('Missing required argument: --issueKey (e.g. PROJ-1234)');
  process.exit(1);
}

const data = await jiraRequest(`/issue/${args.issueKey}/worklog`);

let out = `Worklog for ${args.issueKey} (${data.total} entries):`;

if (data.worklogs.length === 0) {
  out += '\n\n(No worklog entries)';
} else {
  for (const w of data.worklogs) {
    out += `\n\n  ${w.author.displayName} - ${new Date(w.started).toLocaleString()}`;
    out += `\n  Time spent: ${w.timeSpent}`;
    if (w.comment) out += `\n  Comment: ${w.comment}`;
  }
}

console.log(out);
