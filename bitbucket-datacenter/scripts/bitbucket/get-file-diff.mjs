/**
 * Gets the annotated diff for a single file in a pull request.
 * Usage: node get-file-diff.mjs --prId <id> --repo <repo> --file <path> [--project <key>] [--json]
 *
 * --json  Use JSON diff (larger, slower). Default: text/plain (recommended).
 *
 * For COPY and RENAME (MOVE) operations, diffs against the actual source file
 * instead of /dev/null, so only real changes are shown.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT, annotatedDiff, jsonDiffToAnnotated, buildCopyMoveDiff } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo', 'file');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const filePath = args.file;
const useJson = !!args.json;

console.log(`File Diff for: ${filePath} (PR #${prId})\n${'='.repeat(50)}\n`);

// Check /changes to detect COPY or MOVE (rename) before fetching diff
const changes = await bbRequest(`/projects/${project}/repos/${repo}/pull-requests/${prId}/changes?limit=500`);
const fileChange = changes.values?.find(v => v.path?.toString === filePath);
const changeType = fileChange?.type;

if ((changeType === 'COPY' || changeType === 'MOVE') && fileChange.srcPath?.toString) {
  const srcPath = fileChange.srcPath.toString;
  const label = changeType === 'COPY' ? 'COPY' : 'RENAME';
  console.log(`Note: ${label} detected. Diffing against source: ${srcPath}\n`);

  const pr = await bbRequest(`/projects/${project}/repos/${repo}/pull-requests/${prId}`);
  const diff = await buildCopyMoveDiff(project, repo, filePath, srcPath, pr.toRef.latestCommit, pr.fromRef.latestCommit);
  console.log(diff);
} else {
  const endpoint = `/projects/${project}/repos/${repo}/pull-requests/${prId}/diff/${filePath}?withComments=false`;
  const raw = await bbRequest(endpoint, { textResponse: !useJson });
  const diff = useJson ? jsonDiffToAnnotated(raw) : annotatedDiff(raw);

  if (!diff.trim()) {
    console.error(`No diff found for file '${filePath}' in PR #${prId}`);
    process.exit(1);
  }

  console.log(diff);
}
