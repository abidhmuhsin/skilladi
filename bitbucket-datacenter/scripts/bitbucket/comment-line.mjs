/**
 * Posts an inline comment on a specific line in a PR.
 * Usage: node comment-line.mjs --prId <id> --repo <repo> --file <path> --line <n> --lineType ADDED|REMOVED|CONTEXT --comment "<text>" [--severity NORMAL|BLOCKER] [--project <key>]
 *
 * fileType is auto-derived: ADDED/CONTEXT → TO side, REMOVED → FROM side.
 * All comments are posted in PENDING state with EFFECTIVE diff type.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo', 'file', 'line', 'lineType', 'comment');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;

const lineType = args.lineType.toUpperCase();
if (!['ADDED', 'REMOVED', 'CONTEXT'].includes(lineType)) {
  console.error('--lineType must be ADDED, REMOVED, or CONTEXT');
  process.exit(1);
}

const severity = (args.severity || 'NORMAL').toUpperCase();
if (!['NORMAL', 'BLOCKER'].includes(severity)) {
  console.error('--severity must be NORMAL or BLOCKER');
  process.exit(1);
}

const fileType = lineType === 'REMOVED' ? 'FROM' : 'TO';
const lineNumber = parseInt(args.line);

const payload = {
  text: args.comment,
  state: 'PENDING',
  severity,
  anchor: {
    diffType: 'EFFECTIVE',
    path: args.file,
    lineType,
    line: lineNumber,
    fileType,
  },
};

const result = await bbRequest(
  `/projects/${project}/repos/${repo}/pull-requests/${prId}/comments`,
  { method: 'POST', body: JSON.stringify(payload) }
);

console.log(`✅ Comment ${result.id} posted successfully on ${args.file}:${lineNumber}
📍 Line Type: ${lineType}
📄 File Side: ${fileType}
🔧 Diff Type: EFFECTIVE
⚠️  Severity: ${severity}
📝 Status: PENDING`);
