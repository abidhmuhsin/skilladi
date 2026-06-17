/**
 * Updates fields on an existing Jira issue.
 * Usage: node update-issue.mjs --issueKey <key> [--summary "<text>"] [--description "<text>"] [--priority <name>] [--assignee <accountId>] [--labels <label1,label2>] [--addLabels <label>] [--removeLabels <label>]
 *
 * Examples:
 *   node update-issue.mjs --issueKey PROJ-123 --summary "Updated summary"
 *   node update-issue.mjs --issueKey PROJ-123 --priority Critical --addLabels "urgent"
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey) {
  console.error('Missing required argument: --issueKey (e.g. PROJ-1234)');
  process.exit(1);
}

const fields = {};
if (args.summary) fields.summary = args.summary;
if (args.description) fields.description = args.description;
if (args.priority) fields.priority = { name: args.priority };
if (args.assignee) fields.assignee = { accountId: args.assignee };
if (args.labels) fields.labels = args.labels.split(',').map(l => l.trim());

const update = {};
if (args.addLabels) {
  update.labels = args.addLabels.split(',').map(l => ({ add: l.trim() }));
}
if (args.removeLabels) {
  if (!update.labels) update.labels = [];
  update.labels.push(...args.removeLabels.split(',').map(l => ({ remove: l.trim() })));
}

const body = {};
if (Object.keys(fields).length > 0) body.fields = fields;
if (Object.keys(update).length > 0) body.update = update;

if (Object.keys(body).length === 0) {
  console.error('No fields to update. Use --summary, --description, --priority, --assignee, --labels, --addLabels, or --removeLabels.');
  process.exit(1);
}

await jiraRequest(`/issue/${args.issueKey}`, {
  method: 'PUT',
  body: JSON.stringify(body),
});

console.log(`Updated issue: ${args.issueKey}`);
