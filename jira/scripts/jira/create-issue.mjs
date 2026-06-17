/**
 * Creates a new Jira issue.
 * Usage: node create-issue.mjs --project <key> --type <type> --summary "<text>" [--description "<text>"] [--assignee <accountId>] [--priority <name>] [--labels <label1,label2>]
 *
 * Examples:
 *   node create-issue.mjs --project PROJ --type Bug --summary "Login fails on Safari"
 *   node create-issue.mjs --project PROJ --type Story --summary "Add dark mode" --priority High --labels "ui,ux"
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.project || !args.type || !args.summary) {
  console.error('Missing required arguments: --project <key> --type <type> --summary "<text>"');
  process.exit(1);
}

const fields = {
  project: { key: args.project },
  issuetype: { name: args.type },
  summary: args.summary,
};

if (args.description) fields.description = args.description;
if (args.priority) fields.priority = { name: args.priority };
if (args.assignee) fields.assignee = { accountId: args.assignee };
if (args.labels) fields.labels = args.labels.split(',').map(l => l.trim());

const data = await jiraRequest('/issue', {
  method: 'POST',
  body: JSON.stringify({ fields }),
});

console.log(`Created issue: ${data.key}`);
console.log(`URL: ${process.env.JIRA_BASE_URL?.replace(/\/$/, '')}/browse/${data.key}`);
