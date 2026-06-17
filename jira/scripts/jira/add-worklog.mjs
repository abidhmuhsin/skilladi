/**
 * Adds a worklog entry to a Jira issue.
 * Usage: node add-worklog.mjs --issueKey <key> --timeSpent "<time>" [--comment "<text>"] [--started <datetime>]
 *
 * Time format: e.g. "2h 30m", "1d", "4h"
 * Started format: ISO 8601, e.g. "2024-01-15T10:00:00.000+0000"
 *
 * Examples:
 *   node add-worklog.mjs --issueKey PROJ-123 --timeSpent "2h"
 *   node add-worklog.mjs --issueKey PROJ-123 --timeSpent "4h" --comment "Debugging the issue"
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey || !args.timeSpent) {
  console.error('Missing required arguments: --issueKey <key> --timeSpent "<time>"');
  process.exit(1);
}

const body = {
  timeSpent: args.timeSpent,
};

if (args.comment) body.comment = args.comment;
if (args.started) body.started = args.started;

const data = await jiraRequest(`/issue/${args.issueKey}/worklog`, {
  method: 'POST',
  body: JSON.stringify(body),
});

console.log(`Worklog added to ${args.issueKey} (id: ${data.id}, time: ${data.timeSpent})`);
