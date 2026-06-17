/**
 * Searches Jira issues using JQL.
 * Usage: node search-issues.mjs --jql "<query>" [--maxResults <n>] [--fields <field1,field2>]
 *
 * Examples:
 *   node search-issues.mjs --jql "project = PROJ AND status = Open"
 *   node search-issues.mjs --jql "assignee = currentUser() ORDER BY updated DESC" --maxResults 10
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.jql) {
  console.error('Missing required argument: --jql "<JQL query>"');
  console.error('Example: --jql "project = PROJ AND status = Open"');
  process.exit(1);
}

const maxResults = args.maxResults || 50;
const fields = args.fields || 'summary,status,assignee,priority,issuetype,created,updated';

const data = await jiraRequest('/search', {
  method: 'POST',
  body: JSON.stringify({
    jql: args.jql,
    maxResults: parseInt(maxResults, 10),
    fields: fields.split(',').map(f => f.trim()),
  }),
});

let out = `Found ${data.total} issue(s) (showing ${data.issues.length}):\n`;

for (const issue of data.issues) {
  const f = issue.fields;
  out += `\n${issue.key}: ${f.summary}`;
  out += `\n  Type: ${f.issuetype?.name ?? 'Unknown'}`;
  out += `\n  Status: ${f.status?.name ?? 'Unknown'}`;
  if (f.priority) out += `\n  Priority: ${f.priority.name}`;
  if (f.assignee) out += `\n  Assignee: ${f.assignee.displayName}`;
  out += `\n  Updated: ${new Date(f.updated).toLocaleString()}\n`;
}

console.log(out);
