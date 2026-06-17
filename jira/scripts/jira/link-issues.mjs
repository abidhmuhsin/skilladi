/**
 * Creates a link between two Jira issues.
 * Usage: node link-issues.mjs --type "<linkType>" --inwardIssue <key> --outwardIssue <key> [--comment "<text>"]
 *
 * Common link types: "Blocks", "is blocked by", "Relates to", "Duplicates", "is duplicated by", "Cloners"
 *
 * Examples:
 *   node link-issues.mjs --type "Blocks" --inwardIssue PROJ-100 --outwardIssue PROJ-200
 *   node link-issues.mjs --type "Relates to" --inwardIssue PROJ-100 --outwardIssue PROJ-200 --comment "Related work"
 *
 * Requires JIRA_TOKEN environment variable.
 */
import { jiraRequest, parseArgs } from '../lib/jira.mjs';

const args = parseArgs();
if (!args.type || !args.inwardIssue || !args.outwardIssue) {
  console.error('Missing required arguments: --type "<linkType>" --inwardIssue <key> --outwardIssue <key>');
  process.exit(1);
}

const body = {
  type: { name: args.type },
  inwardIssue: { key: args.inwardIssue },
  outwardIssue: { key: args.outwardIssue },
};

if (args.comment) {
  body.comment = { body: args.comment };
}

await jiraRequest('/issueLink', {
  method: 'POST',
  body: JSON.stringify(body),
});

console.log(`Linked ${args.inwardIssue} -> ${args.outwardIssue} (${args.type})`);
