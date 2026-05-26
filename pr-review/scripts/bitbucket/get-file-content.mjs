/**
 * Gets the raw content of a file from a pull request.
 * Usage: node get-file-content.mjs --prId <id> --repo <repo> --file <path> --side TO|FROM [--project <key>]
 *
 * Side mapping (matches BitBucket semantics):
 *   TO   → source branch (the PR changes, uses fromRef.latestCommit)
 *   FROM → target branch (the base, uses toRef.latestCommit)
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo', 'file');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const filePath = args.file;
const side = (args.side || 'TO').toUpperCase();

if (!['FROM', 'TO'].includes(side)) {
  console.error('--side must be FROM or TO');
  process.exit(1);
}

const pr = await bbRequest(`/projects/${project}/repos/${repo}/pull-requests/${prId}`);

const commitHash = side === 'FROM' ? pr.toRef.latestCommit : pr.fromRef.latestCommit;
const sideName = side === 'FROM' ? 'FROM (target branch)' : 'TO (source branch)';

const content = await bbRequest(
  `/projects/${project}/repos/${repo}/raw/${filePath}?at=${commitHash}`,
  { textResponse: true }
);

console.log(`File: ${filePath} (from PR #${prId}, ${sideName})
Commit: ${commitHash}

--- File Content ---

${content}`);
