/**
 * Starts a PR review session by collecting PR metadata, changed files,
 * existing activities/comments, optional Jira context, and optional full diff.
 *
 * Usage: node start-pr-review.mjs --prId <id> --repo <repo> [--project <key>] [--noDiff]
 */
import { bbRequest, bbPaginatedRequest, parseArgs, require_args, DEFAULT_PROJECT, annotatedDiff } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const base = `/projects/${project}/repos/${repo}/pull-requests/${prId}`;
const includeDiff = !args.noDiff;
const includeFullContext = args.full === true || args.full === 'true';
const maxFiles = includeFullContext ? Infinity : parsePositiveInt(args.maxFiles, 50, '--maxFiles');
const maxActivities = includeFullContext ? Infinity : parsePositiveInt(args.maxActivities, 100, '--maxActivities');

function parsePositiveInt(value, fallback, name) {
  if (value === undefined) return fallback;
  const parsed = parseInt(value, 10);
  if (!Number.isInteger(parsed) || parsed <= 0) {
    console.error(`${name} must be a positive integer`);
    process.exit(1);
  }
  return parsed;
}

function pathFromChange(change) {
  return (typeof change.path?.toString === 'string' ? change.path.toString : null)
    || (change.path?.parent ? `${change.path.parent}/${change.path.name}` : change.path?.name)
    || 'unknown';
}

function jiraKeyFrom(text) {
  const match = /\b[A-Z][A-Z0-9]+-\d+\b/.exec(text || '');
  return match?.[0] || null;
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

function formatActivities(data) {
  if (!data.values || data.values.length === 0) return 'No activities found.';

  const totalLabel = data.complete ? `${data.total}` : `at least ${data.total}`;
  const lines = [`Found ${totalLabel} activities${data.truncated ? ` (showing first ${data.values.length})` : ''}:`];
  for (const activity of data.values) {
    const date = new Date(activity.createdDate).toISOString();
    const user = activity.user?.displayName || 'System';

    if (activity.action === 'COMMENTED') {
      lines.push(`[commented] ${user} commented on ${date}:`);
      lines.push(formatCommentTree(activity.comment, 0, activity.commentAnchor));
      lines.push('');
    } else {
      lines.push(`[${activity.action.toLowerCase()}] ${user} on ${date}`);
    }
  }
  return lines.join('\n');
}

function formatJira(issue) {
  const f = issue.fields;
  return `Issue: ${issue.key}
Summary: ${f.summary}
Type: ${f.issuetype?.name ?? 'Unknown'}
Status: ${f.status?.name ?? 'Unknown'}${f.priority ? `\nPriority: ${f.priority.name}` : ''}
${f.description ? `\nDescription:\n${f.description}` : '\nDescription: (No description provided)'}`;
}

async function optionalJiraRequest(endpoint) {
  if (!process.env.JIRA_BASE_URL) {
    throw new Error('JIRA_BASE_URL environment variable is not set.');
  }

  const jiraBaseUrl = process.env.JIRA_BASE_URL.replace(/\/$/, '');
  const url = `${jiraBaseUrl}/rest/api/2${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.JIRA_TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Jira API error ${res.status} ${res.statusText}: ${err}`);
  }

  return res.json();
}

const [pr, changes, activities, diffText] = await Promise.all([
  bbRequest(base),
  bbPaginatedRequest(`${base}/changes`, { maxItems: maxFiles }),
  bbPaginatedRequest(`${base}/activities`, { maxItems: maxActivities }),
  includeDiff ? bbRequest(`${base}/diff?withComments=false`, { textResponse: true }) : Promise.resolve(null),
]);

const files = (changes.values || []).map((f, i) => `${i + 1}. ${pathFromChange(f)} (${f.type || 'MODIFIED'})`);
const jiraKey = jiraKeyFrom(`${pr.title}\n${pr.description || ''}`);
let jiraSection = 'No Jira key found in PR title or description.';
const changedFilesSummary = changes.truncated
  ? `Showing first ${changes.values.length} of at least ${changes.total} changed files. Re-run with --full or a higher --maxFiles value for the complete list.`
  : `Showing all ${changes.total} changed files.`;

if (jiraKey && process.env.JIRA_TOKEN) {
  try {
    const issue = await optionalJiraRequest(`/issue/${jiraKey}`);
    jiraSection = formatJira(issue);
  } catch (error) {
    jiraSection = `Found Jira key ${jiraKey}, but Jira lookup failed: ${error.message}`;
  }
} else if (jiraKey) {
  jiraSection = `Found Jira key ${jiraKey}. Set JIRA_TOKEN to fetch issue details.`;
}

console.log(`# Pull Request Review: PR #${pr.id}

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

## Jira Context
${jiraSection}

## Changed Files Checklist
- Use this list to track which files have been reviewed.
${changedFilesSummary}
${files.join('\n')}

## Existing PR Activity
${formatActivities(activities)}

## Diff
${includeDiff ? annotatedDiff(diffText) || '(no diff content available)' : 'Skipped because --noDiff was set.'}

## Review Next Steps
1. Review the diff and changed-files checklist before commenting.
2. Use get-file-diff.mjs for any file missing from this output or needing a narrower view.
3. Use get-file-content.mjs only when the diff is insufficient to verify a technical claim.
4. Re-run with --full, --maxFiles, or --maxActivities when the review context is intentionally capped.
5. Load references/review-workflow.md for review expectations.
6. Load references/commenting-guide.md before posting, replying to, editing, resolving, or reopening comments.`);
