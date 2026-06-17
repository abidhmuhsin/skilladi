/**
 * Adds a comment to a Jira issue.
 * Usage: node add-comment.mjs --issueKey <key> --comment "<text>"
 *
 * Examples:
 *   node add-comment.mjs --issueKey PROJ-123 --comment "Investigating this issue now."
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey || !args.comment) {
  console.error('Missing required arguments: --issueKey <key> --comment "<text>"');
  process.exit(1);
}

const data = await jiraRequest(`/issue/${args.issueKey}/comment`, {
  method: 'POST',
  body: JSON.stringify({ body: args.comment }),
});

console.log(`Comment added to ${args.issueKey} (comment id: ${data.id})`);
