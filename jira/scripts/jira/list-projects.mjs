/**
 * Lists all accessible Jira projects.
 * Usage: node list-projects.mjs [--maxResults <n>]
 *
 * Examples:
 *   node list-projects.mjs
 *   node list-projects.mjs --maxResults 10
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
const maxResults = args.maxResults || 200;

const data = await jiraRequest(`/project?maxResults=${maxResults}`);

let out = `Projects (${data.length}):\n`;

for (const p of data) {
  out += `\n  ${p.key}: ${p.name}`;
  if (p.projectTypeKey) out += ` (${p.projectTypeKey})`;
}

console.log(out);
