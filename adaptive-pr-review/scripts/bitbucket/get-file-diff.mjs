/**
 * Gets the annotated diff for a single file in a pull request.
 * Usage: node get-file-diff.mjs --prId <id> --repo <repo> --file <path> [--project <key>] [--json]
 *
 * --json  Use JSON diff (larger, slower). Default: text/plain (recommended).
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT, annotatedDiff, jsonDiffToAnnotated } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo', 'file');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const filePath = args.file;
const useJson = !!args.json;

const endpoint = `/projects/${project}/repos/${repo}/pull-requests/${prId}/diff/${filePath}?withComments=false`;

const raw = await bbRequest(endpoint, { textResponse: !useJson });
const diff = useJson ? jsonDiffToAnnotated(raw) : annotatedDiff(raw);

if (!diff.trim()) {
  console.error(`No diff found for file '${filePath}' in PR #${prId}`);
  process.exit(1);
}

console.log(`File Diff for: ${filePath} (PR #${prId})\n${'='.repeat(50)}\n`);
console.log(diff);
