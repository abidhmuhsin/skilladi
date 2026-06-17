/**
 * Assigns a Jira issue to a user.
 * Usage: node assign-issue.mjs --issueKey <key> --accountId <id>
 *
 * To unassign, pass --accountId "" (empty string).
 *
 * Examples:
 *   node assign-issue.mjs --issueKey PROJ-123 --accountId "5b10ac8d82e05b22cc7d4ef5"
 *   node assign-issue.mjs --issueKey PROJ-123 --accountId ""
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey) {
  console.error('Missing required argument: --issueKey (e.g. PROJ-1234)');
  process.exit(1);
}
if (args.accountId === undefined) {
  console.error('Missing required argument: --accountId (pass "" to unassign)');
  process.exit(1);
}

await jiraRequest(`/issue/${args.issueKey}/assignee`, {
  method: 'PUT',
  body: JSON.stringify({ accountId: args.accountId }),
});

if (args.accountId === '') {
  console.log(`Unassigned ${args.issueKey}`);
} else {
  console.log(`Assigned ${args.issueKey} to account ${args.accountId}`);
}
