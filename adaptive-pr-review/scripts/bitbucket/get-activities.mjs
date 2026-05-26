/**
 * Lists PR activities (comments with IDs, approvals, etc.).
 * Usage: node get-activities.mjs --prId <id> --repo <repo> [--project <key>]
 *
 * Comment IDs shown can be used with --parentId in comment-pr.mjs or update-comment.mjs.
 */
import { bbPaginatedRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;

const activities = await bbPaginatedRequest(
  `/projects/${project}/repos/${repo}/pull-requests/${prId}/activities`
);

if (activities.values.length === 0) {
  console.log('No activities found.');
  process.exit(0);
}

function formatAnchor(anchor) {
  if (!anchor) return '';
  const parts = [];
  if (anchor.path) parts.push(`file=${anchor.path}`);
  if (anchor.line !== undefined) parts.push(`line=${anchor.line}`);
  if (anchor.lineType) parts.push(`lineType=${anchor.lineType}`);
  return parts.length ? ` [${parts.join(', ')}]` : '';
}

function formatCommentTree(comment, depth, anchor) {
  if (!comment) return '';
  const indent = '  '.repeat(depth);
  const author = comment.author?.displayName || 'Unknown';
  const text = (comment.text || '').replace(/\n/g, `\n${indent}   `);
  const state = comment.state ? ` (${comment.state})` : '';
  const resolved = comment.threadResolved === true ? ' [resolved]' : '';
  const anchorStr = depth === 0 ? formatAnchor(anchor) : '';
  const head = `${indent}-> id=${comment.id} by ${author}${state}${resolved}${anchorStr}: "${text}"`;
  const replies = Array.isArray(comment.comments) ? comment.comments : [];
  const repliesStr = replies.map(c => formatCommentTree(c, depth + 1)).join('\n');
  return repliesStr ? `${head}\n${repliesStr}` : head;
}

console.log(`Found ${activities.total} activities:\n`);

for (const activity of activities.values) {
  const date = new Date(activity.createdDate).toISOString();
  const user = activity.user?.displayName || 'System';

  switch (activity.action) {
    case 'COMMENTED': {
      const tree = formatCommentTree(activity.comment, 0, activity.commentAnchor);
      console.log(`[commented] ${user} commented on ${date}:\n${tree}\n`);
      break;
    }
    case 'APPROVED':
      console.log(`[approved] ${user} approved on ${date}\n`);
      break;
    case 'UNAPPROVED':
      console.log(`[unapproved] ${user} unapproved on ${date}\n`);
      break;
    case 'OPENED':
      console.log(`[opened] ${user} opened the pull request on ${date}\n`);
      break;
    case 'UPDATED':
      console.log(`[updated] ${user} updated the pull request on ${date}\n`);
      break;
    case 'MERGED':
      console.log(`[merged] ${user} merged the pull request on ${date}\n`);
      break;
    case 'DECLINED':
      console.log(`[declined] ${user} declined the pull request on ${date}\n`);
      break;
    default:
      console.log(`[activity] ${user} performed ${activity.action} on ${date}\n`);
  }
}
