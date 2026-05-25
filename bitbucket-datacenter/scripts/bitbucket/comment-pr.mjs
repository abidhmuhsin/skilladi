/**
 * Posts a general PR comment or replies to an existing comment.
 * Usage: node comment-pr.mjs --prId <id> --repo <repo> --comment "<text>" [--parentId <id>] [--project <key>]
 *
 * Get comment IDs from get-activities.mjs. Use --parentId to reply to line or PR comments.
 * All comments are posted in PENDING state.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo', 'comment');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;

const payload = {
  text: `${args.comment} ..`,
  state: 'PENDING',
};

if (args.parentId) {
  payload.parent = { id: parseInt(args.parentId) };
}

const result = await bbRequest(
  `/projects/${project}/repos/${repo}/pull-requests/${prId}/comments`,
  { method: 'POST', body: JSON.stringify(payload) }
);

if (args.parentId) {
  console.log(`Reply successfully posted to comment ${args.parentId} on PR #${prId} (new comment id: ${result?.id ?? 'unknown'})`);
} else {
  console.log(`Comment successfully posted on PR #${prId} (id: ${result?.id ?? 'unknown'})`);
}
