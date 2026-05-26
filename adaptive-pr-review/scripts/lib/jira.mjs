/**
 * Jira API helper — imported by Jira tool scripts.
 * Requires JIRA_TOKEN env var.
 *
 * Auth: always Bearer token (no Basic auth for Jira).
 * POST/PUT requests include X-Atlassian-Token: no-check header.
 */

export function getJiraToken() {
  const token = process.env.JIRA_TOKEN;
  if (!token) {
    console.error('Error: JIRA_TOKEN environment variable is not set.');
    console.error('Example: JIRA_TOKEN=your_jira_bearer_token');
    process.exit(1);
  }
  return token;
}

function getBaseUrl() {
  const jiraBaseUrl = process.env.JIRA_BASE_URL;
  if (!jiraBaseUrl) {
    console.error('Error: JIRA_BASE_URL environment variable is not set.');
    console.error('Example: JIRA_BASE_URL=https://jira.example.com');
    process.exit(1);
  }

  return `${jiraBaseUrl.replace(/\/$/, '')}/rest/api/2`;
}

export async function jiraRequest(endpoint, { method = 'GET', body = undefined } = {}) {
  const baseUrl = getBaseUrl();
  const token = getJiraToken();
  const url = `${baseUrl}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  if (method === 'POST' || method === 'PUT') {
    headers['X-Atlassian-Token'] = 'no-check';
  }

  const res = await fetch(url, { method, headers, body });

  if (!res.ok) {
    const err = await res.text();
    console.error(`Jira API error ${res.status} ${res.statusText}: ${err}`);
    process.exit(1);
  }

  return res.json();
}

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
