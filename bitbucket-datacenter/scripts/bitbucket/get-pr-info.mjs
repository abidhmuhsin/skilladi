/**
 * Gets PR metadata and changed files.
 * Usage: node get-pr-info.mjs --prId <id> --repo <repo> [--project <key>]
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;

const base = `/projects/${project}/repos/${repo}/pull-requests/${prId}`;

const [pr, changes] = await Promise.all([
  bbRequest(base),
  bbRequest(`${base}/changes?limit=100`),
]);

const files = (changes.values || []).map((f, i) => {
  const path = (typeof f.path?.toString === 'string' ? f.path.toString : null) || (f.path?.parent ? `${f.path.parent}/${f.path.name}` : f.path?.name) || 'unknown';
  return `${i + 1}. ${path} (${f.type || 'MODIFIED'})`;
});

console.log(`# Pull Request: PR #${pr.id}

## Pull Request Details
PR #${pr.id}: ${pr.title}
Author: ${pr.author.user.displayName}
State: ${pr.state}${pr.draft ? ' (draft)' : ''}
Source Branch: ${pr.fromRef.displayId}
Target Branch: ${pr.toRef.displayId}
Created: ${new Date(pr.createdDate).toISOString()}
Updated: ${new Date(pr.updatedDate).toISOString()}

Description:
${pr.description || 'No description'}

## Changes Summary
Total files changed: ${changes.isLastPage ? changes.size : 'more than ' + changes.size}

Changed Files:
${files.join('\n')}`);
