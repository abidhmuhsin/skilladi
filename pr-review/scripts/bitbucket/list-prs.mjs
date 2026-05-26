/**
 * Lists pull requests for a repo or across all repos (dashboard).
 * Usage: node list-prs.mjs [--repo <repo>] [--project <key>] [--state OPEN|MERGED|DECLINED|ALL] [--role AUTHOR|REVIEWER|PARTICIPANT] [--limit <n>]
 *
 * --repo omitted  → dashboard (all repos you have access to)
 * --repo <repo>   → scoped to that repo
 */
import { bbRequest, parseArgs, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();

const project = args.project || DEFAULT_PROJECT;
const state = (args.state || 'OPEN').toUpperCase();
const role = args.role ? `&role=${args.role.toUpperCase()}` : '';
const limit = args.limit || 25;
const start = args.start ? `&start=${args.start}` : '';

let endpoint;
if (args.repo) {
  endpoint = `/projects/${project}/repos/${args.repo}/pull-requests?state=${state}&limit=${limit}${role}${start}`;
} else {
  endpoint = `/dashboard/pull-requests?state=${state}&limit=${limit}${role}${start}`;
}

const data = await bbRequest(endpoint);

if (!data.values?.length) {
  console.log('No pull requests found.');
  process.exit(0);
}

for (const pr of data.values) {
  const repo = pr.toRef?.repository?.slug ?? '';
  const project = pr.toRef?.repository?.project?.key ?? '';
  const label = args.repo ? `PR #${pr.id}` : `${project}/${repo} PR #${pr.id}`;
  const draft = pr.draft ? ' (draft)' : '';
  console.log(`${label} [${pr.state}${draft}] ${pr.title}`);
  console.log(`  ${pr.fromRef.displayId} → ${pr.toRef.displayId}`);
  console.log(`  Author: ${pr.author.user.displayName}`);
  console.log();
}

console.log(`Showing ${data.values.length}${data.isLastPage ? '' : '+'} pull request(s).`);
