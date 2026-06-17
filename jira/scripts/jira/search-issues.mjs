/**
 * Searches Jira issues using JQL.
 * Usage: node search-issues.mjs --jql "<query>" [--maxResults <n>] [--startAt <n>] [--fields <field1,field2>]
 *
 * Examples:
 *   node search-issues.mjs --jql "project = PROJ AND status = Open"
 *   node search-issues.mjs --jql "assignee = currentUser() ORDER BY updated DESC" --maxResults 10
 *   node search-issues.mjs --jql "project = PROJ" --maxResults 50 --startAt 50
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

const maxResults = parseInt(args.maxResults || 50, 10);
const startAt = parseInt(args.startAt || 0, 10);
const fields = args.fields || 'summary,status,assignee,priority,issuetype,created,updated';

const data = await jiraRequest('/search', {
  method: 'POST',
  body: JSON.stringify({
    jql: args.jql,
    maxResults,
    startAt,
    fields: fields.split(',').map(f => f.trim()),
  }),
});

const showing = `${startAt + 1}\u2013${startAt + data.issues.length}`;
let out = `Found ${data.total} issue(s) (showing ${showing}):\n`;

for (const issue of data.issues) {
  const f = issue.fields;
  out += `\n${issue.key}: ${f.summary}`;
  out += `\n  Type: ${f.issuetype?.name ?? 'Unknown'}`;
  out += `\n  Status: ${f.status?.name ?? 'Unknown'}`;
  if (f.priority) out += `\n  Priority: ${f.priority.name}`;
  if (f.assignee) out += `\n  Assignee: ${f.assignee.displayName}`;
  out += `\n  Updated: ${new Date(f.updated).toLocaleString()}\n`;
}

if (startAt + data.issues.length < data.total) {
  out += `\nMore results available. Use --startAt ${startAt + maxResults} to see next page.`;
}

console.log(out);
