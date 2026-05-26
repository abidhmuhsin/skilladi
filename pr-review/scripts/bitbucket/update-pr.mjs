/**
 * Reads or updates a PR's title and/or description.
 * Usage: node update-pr.mjs --prId <id> --repo <repo> [--title <t>] [--description <d>] [--project <key>]
 *
 * Omit both --title and --description to read current values without making changes.
 * Provide either or both to update. Shows previous values before any update.
 */
import { bbRequest, parseArgs, require_args, DEFAULT_PROJECT } from '../lib/bb.mjs';

const args = parseArgs();
require_args(args, 'prId', 'repo');

const project = args.project || DEFAULT_PROJECT;
const repo = args.repo;
const prId = args.prId;
const endpoint = `/projects/${project}/repos/${repo}/pull-requests/${prId}`;

const pr = await bbRequest(endpoint);

if (!args.title && !args.description) {
  console.log(`PR #${pr.id}\nTitle: ${pr.title}\nDescription: ${pr.description || '(empty)'}`);
  process.exit(0);
}

const payload = { version: pr.version };
if (args.title !== undefined) payload.title = args.title;
if (args.description !== undefined) payload.description = args.description;

const updated = await bbRequest(endpoint, { method: 'PUT', body: JSON.stringify(payload) });

const fields = [args.title !== undefined ? 'title' : null, args.description !== undefined ? 'description' : null].filter(Boolean).join(', ');
console.log(`✅ Updated PR #${updated.id} (${fields}). Previous values:\nTitle: ${pr.title}\nDescription: ${pr.description || '(empty)'}`);
