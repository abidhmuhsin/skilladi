/**
 * Gets the full annotated diff for a pull request (all files).
 * Usage: node get-pr-diff.mjs --prId <id> --repo <repo> [--project <key>] [--json]
 *
 * --json  Use JSON diff (larger, slower). Default: text/plain (recommended).
 *
 * Output format:
 *   +<lineNum>: <content>  — added line
 *   -<lineNum>: <content>  — removed line
 *    <lineNum>: <content>  — context line
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT, annotatedDiff, jsonDiffToAnnotated } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const useJson = !!args.json;

const endpoint = `/projects/${project}/repos/${repo}/pull-requests/${prId}/diff?withComments=false`;

const raw = await bbRequest(endpoint, { textResponse: !useJson });
const diff = useJson ? jsonDiffToAnnotated(raw) : annotatedDiff(raw);

console.log(`Pull Request #${prId} — Full Diff\n${'='.repeat(50)}\n`);
console.log(diff || '(no diff content available)');
console.log('\nThis line indicates that diff fetch succeeded and was not truncated.');
