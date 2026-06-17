/**
 * Lists all accessible Jira projects.
 * Usage: node list-projects.mjs [--maxResults <n>] [--startAt <n>]
 *
 * Examples:
 *   node list-projects.mjs
 *   node list-projects.mjs --maxResults 10
 *   node list-projects.mjs --maxResults 50 --startAt 50
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
const maxResults = parseInt(args.maxResults || 200, 10);
const startAt = parseInt(args.startAt || 0, 10);

const data = await jiraRequest(`/project?maxResults=${maxResults}&startAt=${startAt}`);

let out = `Projects (${data.length}):\n`;

for (const p of data) {
  out += `\n  ${p.key}: ${p.name}`;
  if (p.projectTypeKey) out += ` (${p.projectTypeKey})`;
}

if (data.length === maxResults) {
  out += `\n\nMore results may be available. Use --startAt ${startAt + maxResults} to see next page.`;
}

console.log(out);
