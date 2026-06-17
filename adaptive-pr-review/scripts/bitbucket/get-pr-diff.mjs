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
 *
 * COPY and RENAME (MOVE) files are diffed against their source file rather
 * than /dev/null, so only real changes are shown for those entries.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT, annotatedDiff, jsonDiffToAnnotated, buildCopyMoveDiff } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const useJson = !!args.json;

// Fetch /changes metadata to detect COPY/MOVE files
const changesData = await bbRequest(`/projects/${project}/repos/${repo}/pull-requests/${prId}/changes?limit=500`);
const copyMoveMap = new Map(); // dstPath -> { srcPath, type }
for (const entry of changesData.values ?? []) {
  if ((entry.type === 'COPY' || entry.type === 'MOVE') && entry.srcPath?.toString) {
    copyMoveMap.set(entry.path.toString, { srcPath: entry.srcPath.toString, type: entry.type });
  }
}

// Fetch full PR diff
const endpoint = `/projects/${project}/repos/${repo}/pull-requests/${prId}/diff?withComments=false`;
const raw = await bbRequest(endpoint, { textResponse: !useJson });
const diff = useJson ? jsonDiffToAnnotated(raw) : annotatedDiff(raw);

console.log(`Pull Request #${prId} — Full Diff\n${'='.repeat(50)}\n`);

if (copyMoveMap.size === 0) {
  console.log(diff || '(no diff content available)');
} else {
  // Split annotated diff into per-file sections on `diff --git` boundaries
  const { preamble, sections } = splitDiffSections(diff);

  // Fetch proper diffs for COPY/MOVE sections in parallel
  const pr = await bbRequest(`/projects/${project}/repos/${repo}/pull-requests/${prId}`);
  const baseCommit = pr.toRef.latestCommit;
  const headCommit = pr.fromRef.latestCommit;

  await Promise.all(
    sections
      .filter(s => s.dstPath && copyMoveMap.has(s.dstPath))
      .map(async (section) => {
        const { srcPath, type } = copyMoveMap.get(section.dstPath);
        const label = type === 'COPY' ? 'COPY' : 'RENAME';
        const properDiff = await buildCopyMoveDiff(project, repo, section.dstPath, srcPath, baseCommit, headCommit);
        section.replacement = `[Note: ${label} from ${srcPath}]\n${properDiff}`;
      })
  );

  const parts = [];
  if (preamble) parts.push(preamble);
  for (const s of sections) {
    parts.push(s.replacement ?? s.lines.join('\n'));
  }
  console.log(parts.join('\n') || '(no diff content available)');
}

console.log('\nThis line indicates that diff fetch succeeded and was not truncated.');

/**
 * Splits annotated diff text into per-file sections on `diff --git` boundaries.
 * Returns { preamble: string, sections: Array<{ dstPath, lines, replacement? }> }
 */
function splitDiffSections(diffText) {
  const sections = [];
  const preambleLines = [];
  let current = null;

  for (const line of diffText.split('\n')) {
    if (line.startsWith('diff --git ')) {
      if (current) sections.push(current);
      current = { dstPath: extractDestinationPath(line), lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      preambleLines.push(line);
    }
  }
  if (current) sections.push(current);

  return { preamble: preambleLines.join('\n'), sections };
}

function extractDestinationPath(diffGitLine) {
  const dstMatch = / dst:\/\/(.+)$/.exec(diffGitLine);
  if (dstMatch) return dstMatch[1].trim();

  const standardMatch = /^diff --git\s+.+?\s+b\/(.+)$/.exec(diffGitLine);
  if (standardMatch) return standardMatch[1].trim();

  const parts = diffGitLine.split(/\s+/);
  const last = parts.at(-1);
  return last?.replace(/^dst:\/\//, '').replace(/^b\//, '').trim() || null;
}
