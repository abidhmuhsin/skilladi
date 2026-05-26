/**
 * BitBucket API helper — imported by all BitBucket tool scripts.
 * Requires BITBUCKET_TOKEN env var.
 *
 * Token formats:
 *   bearer token           -> Bearer <token>
 *   username:app_password  -> Basic base64(username:app_password)
 */

export const DEFAULT_PROJECT = 'PROJ';

function buildAuthHeader(token) {
  return token.includes(':')
    ? `Basic ${Buffer.from(token).toString('base64')}`
    : `Bearer ${token}`;
}

function getBaseUrl() {
  const bbBaseUrl = process.env.BITBUCKET_BASE_URL;
  if (!bbBaseUrl) {
    console.error('Error: BITBUCKET_BASE_URL environment variable is not set.');
    console.error('Example: BITBUCKET_BASE_URL=https://bitbucket.example.com');
    process.exit(1);
  }

  const base = bbBaseUrl.replace(/\/$/, '');
  return base.includes('/rest/api') ? base : `${base}/rest/api/1.0`;
}

export function getToken() {
  const token = process.env.BITBUCKET_TOKEN;
  if (!token) {
    console.error('Error: BITBUCKET_TOKEN environment variable is not set.');
    console.error('Example: BITBUCKET_TOKEN=your_bearer_token');
    console.error('Basic auth: BITBUCKET_TOKEN=username:app_password');
    process.exit(1);
  }
  return token;
}

export async function bbRequest(endpoint, { method = 'GET', body = undefined, textResponse = false } = {}) {
  const baseUrl = getBaseUrl();
  const token = getToken();
  const url = `${baseUrl}${endpoint}`;
  const headers = {
    Authorization: buildAuthHeader(token),
    ...(textResponse ? { Accept: 'text/plain' } : { 'Content-Type': 'application/json', Accept: 'application/json' }),
  };

  const res = await fetch(url, { method, headers, body });

  if (!res.ok) {
    const err = await res.text();
    console.error(`BitBucket API error ${res.status} ${res.statusText}: ${err}`);
    process.exit(1);
  }

  if (res.status === 204) return null;
  return textResponse ? res.text() : res.json();
}

export async function bbPaginatedRequest(endpoint, { limit = 100, maxItems = Infinity } = {}) {
  const values = [];
  let start = 0;
  let total = 0;
  let isLastPage = false;
  let nextPageStart;
  let truncated = false;

  while (!isLastPage) {
    const sep = endpoint.includes('?') ? '&' : '?';
    const page = await bbRequest(`${endpoint}${sep}limit=${limit}&start=${start}`);
    const pageValues = page.values || [];
    total += pageValues.length;

    if (values.length < maxItems) {
      const remaining = maxItems - values.length;
      values.push(...pageValues.slice(0, remaining));
      truncated = truncated || pageValues.length > remaining;
    } else {
      truncated = true;
    }

    isLastPage = page.isLastPage !== false;
    nextPageStart = page.nextPageStart;

    if (truncated || nextPageStart === undefined) {
      break;
    }

    start = nextPageStart;
  }

  return {
    values,
    total,
    isLastPage,
    nextPageStart,
    truncated,
    complete: isLastPage && !truncated,
  };
}

/**
 * Converts a Bitbucket JSON diff response into the annotated format:
 *   +<lineNum>: <content>  — added line
 *   -<lineNum>: <content>  — removed line
 *    <lineNum>: <content>  — context line
 * JSON diffs are ~3-5x larger and slower to parse than text diffs.
 */
export function jsonDiffToAnnotated(jsonDiff) {
  const out = [];
  for (const diff of jsonDiff.diffs || []) {
    const dst = typeof diff.destination?.toString === 'string' ? diff.destination.toString : 'unknown';
    const src = typeof diff.source?.toString === 'string' ? diff.source.toString : dst;
    out.push(`diff --git a/${src} b/${dst}`);
    out.push(`--- a/${src}`);
    out.push(`+++ b/${dst}`);
    for (const hunk of diff.hunks || []) {
      out.push(`@@ -${hunk.sourceLine},${hunk.sourceSpan} +${hunk.destinationLine},${hunk.destinationSpan} @@`);
      for (const segment of hunk.segments || []) {
        for (const line of segment.lines || []) {
          if (segment.type === 'ADDED') {
            out.push(`+${line.destination}: ${line.line}`);
          } else if (segment.type === 'REMOVED') {
            out.push(`-${line.source}: ${line.line}`);
          } else {
            out.push(` ${line.destination}: ${line.line}`);
          }
        }
      }
    }
  }
  return out.join('\n');
}

/**
 * Transforms raw unified diff text into annotated format:
 *   +<lineNum>: <content>  — added line
 *   -<lineNum>: <content>  — removed line
 *    <lineNum>: <content>  — context line
 */
export function annotatedDiff(diffText) {
  const lines = diffText.split('\n');
  let oldLine = 0;
  let newLine = 0;
  let inHunk = false;
  const out = [];
  const hunkRe = /@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/;

  for (const raw of lines) {
    if (raw.startsWith('@@')) {
      const m = hunkRe.exec(raw);
      if (m) { oldLine = parseInt(m[1]); newLine = parseInt(m[2]); }
      else { oldLine = 0; newLine = 0; }
      inHunk = true;
      out.push(raw);
      continue;
    }
    if (raw.startsWith('diff ') || raw.startsWith('index ') || raw.startsWith('--- ') || raw.startsWith('+++ ')) {
      inHunk = false; out.push(raw); continue;
    }
    if (!inHunk) { out.push(raw); continue; }
    if (raw.startsWith('\\')) { out.push(raw); continue; }

    if (raw.startsWith('+') && !raw.startsWith('+++')) {
      out.push(`+${newLine}: ${raw.slice(1)}`); newLine++; continue;
    }
    if (raw.startsWith('-') && !raw.startsWith('---')) {
      out.push(`-${oldLine}: ${raw.slice(1)}`); oldLine++; continue;
    }
    if (raw.startsWith(' ')) {
      out.push(` ${newLine}: ${raw.slice(1)}`); oldLine++; newLine++; continue;
    }
    out.push(` ${newLine}: ${raw}`); oldLine++; newLine++;
  }
  return out.join('\n');
}

/**
 * Parses --flag value pairs from process.argv into a plain object.
 * Also supports --flag (boolean true).
 */
export function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      const key = args[i].slice(2);
      if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
        result[key] = args[++i];
      } else {
        result[key] = true;
      }
    }
  }
  return result;
}

export function require_args(args, ...names) {
  for (const name of names) {
    if (!args[name]) {
      console.error(`Missing required argument: --${name}`);
      process.exit(1);
    }
  }
}
