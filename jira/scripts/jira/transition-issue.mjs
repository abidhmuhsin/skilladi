/**
 * Transitions a Jira issue to a new status.
 * Usage: node transition-issue.mjs --issueKey <key> --transitionId <id> [--comment "<text>"]
 *
 * First run get-transitions.mjs to see available transition IDs.
 *
 * Examples:
 *   node transition-issue.mjs --issueKey PROJ-123 --transitionId 21
 *   node transition-issue.mjs --issueKey PROJ-123 --transitionId 21 --comment "Moving to In Progress"
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey || !args.transitionId) {
  console.error('Missing required arguments: --issueKey <key> --transitionId <id>');
  console.error('Run get-transitions.mjs first to see available transition IDs.');
  process.exit(1);
}

const body = {
  transition: { id: args.transitionId },
};

if (args.comment) {
  body.update = {
    comment: [{ add: { body: args.comment } }],
  };
}

await jiraRequest(`/issue/${args.issueKey}/transitions`, {
  method: 'POST',
  body: JSON.stringify(body),
});

console.log(`Transitioned ${args.issueKey} (transition id: ${args.transitionId})`);
