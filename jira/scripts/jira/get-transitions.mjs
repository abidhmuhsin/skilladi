/**
 * Gets available transitions for a Jira issue.
 * Usage: node get-transitions.mjs --issueKey <key>
 *
 * Examples:
 *   node get-transitions.mjs --issueKey PROJ-123
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey) {
  console.error('Missing required argument: --issueKey (e.g. PROJ-1234)');
  process.exit(1);
}

const data = await jiraRequest(`/issue/${args.issueKey}/transitions`);

let out = `Available transitions for ${args.issueKey}:\n`;

if (data.transitions.length === 0) {
  out += '\n(No transitions available)';
} else {
  for (const t of data.transitions) {
    out += `\n  id=${t.id}  name="${t.name}"`;
    if (t.to) out += `  -> "${t.to.name}"`;
  }
}

console.log(out);
