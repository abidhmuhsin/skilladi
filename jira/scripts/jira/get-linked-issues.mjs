/**
 * Gets linked issues for a Jira issue.
 * Usage: node get-linked-issues.mjs --issueKey <key>
 *
 * Examples:
 *   node get-linked-issues.mjs --issueKey PROJ-123
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.issueKey) {
  console.error('Missing required argument: --issueKey (e.g. PROJ-1234)');
  process.exit(1);
}

const issue = await jiraRequest(`/issue/${args.issueKey}?fields=issuelinks`);

const links = issue.fields.issuelinks ?? [];

let out = `Linked issues for ${args.issueKey}:`;

if (links.length === 0) {
  out += '\n\n(No linked issues)';
} else {
  for (const link of links) {
    if (link.inwardIssue) {
      out += `\n\n  <- ${link.type.name}: ${link.inwardIssue.key} - ${link.inwardIssue.fields.summary}`;
      out += `\n     Status: ${link.inwardIssue.fields.status?.name ?? 'Unknown'}`;
    }
    if (link.outwardIssue) {
      out += `\n\n  -> ${link.type.name}: ${link.outwardIssue.key} - ${link.outwardIssue.fields.summary}`;
      out += `\n     Status: ${link.outwardIssue.fields.status?.name ?? 'Unknown'}`;
    }
  }
}

console.log(out);
