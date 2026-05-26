/**
 * Updates (edits text and/or resolves/reopens) an existing PR comment, or deletes it.
 * Usage: node update-comment.mjs --prId <id> --repo <repo> --commentId <id> [--text "<new text>"] [--state resolve|reopen] [--delete] [--project <key>]
 *
 * At least one of --text, --state, or --delete must be provided.
 * Get comment IDs from get-activities.mjs.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo', 'commentId');

if (!args.text && !args.state && !args.delete) {
  console.error('Provide at least one of: --text, --state (resolve|reopen), or --delete');
  process.exit(1);
}

if (args.state && !['resolve', 'reopen'].includes(args.state)) {
  console.error('--state must be resolve or reopen');
  process.exit(1);
}

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const commentId = args.commentId;

const endpoint = `/projects/${project}/repos/${repo}/pull-requests/${prId}/comments/${commentId}`;

const current = await bbRequest(endpoint);

if (!current?.id) {
  console.error(`Comment ${commentId} not found on PR #${prId}`);
  process.exit(1);
}

if (args.delete) {
  await bbRequest(`${endpoint}?version=${current.version}`, { method: 'DELETE' });
  console.log(`Comment ${commentId} on PR #${prId} deleted successfully.`);
  process.exit(0);
}

const threadResolved = args.state === 'resolve' ? true : args.state === 'reopen' ? false : undefined;

const payload = {
  version: current.version,
};
if (args.text !== undefined) payload.text = args.text;
if (threadResolved !== undefined) payload.threadResolved = threadResolved;

const updated = await bbRequest(endpoint, { method: 'PUT', body: JSON.stringify(payload) });

const parts = [];
if (args.text) parts.push('text updated');
if (threadResolved !== undefined) parts.push(threadResolved ? 'resolved' : 'reopened');

if (threadResolved !== undefined && updated?.threadResolved !== threadResolved) {
  console.error(`Bitbucket accepted the update but comment ${commentId} threadResolved is ${updated?.threadResolved}; expected ${threadResolved}`);
  process.exit(1);
}

console.log(`Comment ${commentId} on PR #${prId} ${parts.join(' and ')} successfully.`);
