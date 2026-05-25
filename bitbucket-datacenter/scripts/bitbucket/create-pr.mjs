/**
 * Creates a new pull request.
 * Usage: node create-pr.mjs --title <t> --from <branch> --to <branch> --repo <repo> [--description <text>] [--reviewers user1,user2] [--draft false] [--project <key>]
 *
 * Both branches must already exist on the remote.
 * Defaults to draft=true. Pass --draft false for ready-for-review.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'title', 'from', 'to', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const isDraft = args.draft !== 'false';
const reviewers = args.reviewers ? args.reviewers.split(',').map(name => ({ user: { name: name.trim() } })) : [];

const payload = {
  title: args.title,
  description: args.description ?? '',
  draft: isDraft,
  fromRef: {
    id: `refs/heads/${args.from}`,
    repository: { slug: repo, project: { key: project } },
  },
  toRef: {
    id: `refs/heads/${args.to}`,
    repository: { slug: repo, project: { key: project } },
  },
  reviewers,
};

const pr = await bbRequest(
  `/projects/${project}/repos/${repo}/pull-requests`,
  { method: 'POST', body: JSON.stringify(payload) }
);

const url = pr.links?.self?.[0]?.href ?? '(no link)';
const draftLabel = pr.draft ? 'draft ' : '';

console.log(`✅ Created ${draftLabel}PR #${pr.id}: ${pr.title}\n${url}`);
