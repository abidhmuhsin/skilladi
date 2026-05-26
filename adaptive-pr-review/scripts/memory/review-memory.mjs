#!/usr/bin/env node

/**
 * Summarizes the adaptive review memory file.
 * Usage:
 *   node scripts/memory/review-memory.mjs
 *   node scripts/memory/review-memory.mjs --section current
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SECTION_HEADERS = [
  'Current Review Patterns',
  'Candidate Patterns',
  'Archived Patterns',
];

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};
  for (let i = 0; i < args.length; i++) {
    if (!args[i].startsWith('--')) continue;
    const key = args[i].slice(2);
    if (i + 1 < args.length && !args[i + 1].startsWith('--')) {
      result[key] = args[++i];
    } else {
      result[key] = true;
    }
  }
  return result;
}

function normalizeSectionName(name) {
  return name.trim().toLowerCase();
}

function parseEntryHeading(line) {
  const match = /^###\s+(\d{4}-\d{2}-\d{2})\s*[|-]\s*(.+)$/.exec(line.trim());
  if (!match) return null;
  return { date: match[1], label: match[2].trim() };
}

function shouldSkipLine(line) {
  const trimmed = line.trim();
  return (
    trimmed === '' ||
    /^No .+ yet\.$/.test(trimmed) ||
    /^None yet\.$/.test(trimmed) ||
    trimmed === 'Archive note:'
  );
}

function parseField(line) {
  const match = /^-\s+([^:]+):\s*(.*)$/.exec(line.trim());
  if (!match) return null;
  return {
    key: match[1].trim(),
    value: match[2].trim(),
  };
}

async function loadReviewMemory(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return parseReviewMemory(raw);
}

function parseReviewMemory(raw) {
  const lines = raw.split(/\r?\n/);
  const sections = Object.fromEntries(
    SECTION_HEADERS.map((name) => [name, { name, entries: [], notes: [] }]),
  );

  let currentSection = null;
  let currentEntry = null;

  for (const line of lines) {
    if (line.startsWith('## ')) {
      const sectionName = line.slice(3).trim();
      currentSection = SECTION_HEADERS.find(
        (name) => normalizeSectionName(name) === normalizeSectionName(sectionName),
      ) || null;
      currentEntry = null;
      continue;
    }

    if (!currentSection) {
      continue;
    }

    const heading = parseEntryHeading(line);
    if (heading) {
      currentEntry = {
        date: heading.date,
        label: heading.label,
        fields: {},
      };
      sections[currentSection].entries.push(currentEntry);
      continue;
    }

    if (shouldSkipLine(line)) {
      continue;
    }

    const field = parseField(line);
    if (field && currentEntry) {
      currentEntry.fields[field.key] = field.value;
      continue;
    }

    const trimmed = line.trim();
    if (trimmed !== '') {
      sections[currentSection].notes.push(trimmed);
    }
  }

  return sections;
}

function resolveMemoryFile(customFile) {
  if (customFile) {
    return path.resolve(process.cwd(), customFile);
  }

  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  return path.resolve(scriptDir, '../../references/review-patterns.md');
}

function resolveSectionName(input) {
  if (!input) return null;
  const normalized = input.trim().toLowerCase();
  if (normalized === 'current') return 'Current Review Patterns';
  if (normalized === 'candidate') return 'Candidate Patterns';
  if (normalized === 'archived') return 'Archived Patterns';
  return null;
}

function getSection(sections, sectionName) {
  return sections[sectionName] || { name: sectionName, entries: [], notes: [] };
}

function getOldestEntry(entries) {
  if (entries.length === 0) return null;
  return [...entries].sort((a, b) => a.date.localeCompare(b.date))[0];
}

function daysSince(dateString, now = new Date()) {
  const start = new Date(`${dateString}T00:00:00Z`);
  if (Number.isNaN(start.getTime())) return null;
  const diffMs = now.getTime() - start.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function getCleanupStatus(sections, now = new Date()) {
  const candidateEntries = getSection(sections, 'Candidate Patterns').entries;
  const reasons = [];

  if (candidateEntries.length >= 5) {
    reasons.push(`candidate_count=${candidateEntries.length}`);
  }

  const oldest = getOldestEntry(candidateEntries);
  const oldestAgeDays = oldest ? daysSince(oldest.date, now) : null;
  if (oldest && oldestAgeDays !== null && oldestAgeDays > 14) {
    reasons.push(`oldest_candidate_days=${oldestAgeDays}`);
  }

  return {
    cleanupNeeded: reasons.length > 0,
    reasons,
    oldestCandidate: oldest,
    oldestCandidateAgeDays: oldestAgeDays,
  };
}

function formatEntry(entry) {
  const fields = Object.entries(entry.fields)
    .map(([key, value]) => `${key}=${value}`)
    .join(' | ');
  return `${entry.date} | ${entry.label}${fields ? ` | ${fields}` : ''}`;
}

function printSection(section) {
  console.log(`[${section.name}]`);
  if (section.entries.length === 0) {
    console.log('count=0');
    return;
  }

  console.log(`count=${section.entries.length}`);
  for (const entry of section.entries) {
    console.log(formatEntry(entry));
  }
}

const args = parseArgs();
const memoryFile = resolveMemoryFile(args.file);
const sections = await loadReviewMemory(memoryFile);
const cleanup = getCleanupStatus(sections);
const sectionName = resolveSectionName(args.section);

if (sectionName) {
  printSection(getSection(sections, sectionName));
  process.exit(0);
}

const currentCount = getSection(sections, 'Current Review Patterns').entries.length;
const candidateCount = getSection(sections, 'Candidate Patterns').entries.length;
const archivedCount = getSection(sections, 'Archived Patterns').entries.length;

console.log(`memory_file=${memoryFile}`);
console.log(`current_count=${currentCount}`);
console.log(`candidate_count=${candidateCount}`);
console.log(`archived_count=${archivedCount}`);
console.log(
  `oldest_candidate=${cleanup.oldestCandidate ? cleanup.oldestCandidate.date : ''}`,
);
console.log(
  `oldest_candidate_age_days=${
    cleanup.oldestCandidateAgeDays !== null ? cleanup.oldestCandidateAgeDays : ''
  }`,
);
console.log(`cleanup_needed=${cleanup.cleanupNeeded}`);
console.log(
  `cleanup_reasons=${cleanup.reasons.length > 0 ? cleanup.reasons.join(',') : 'none'}`,
);
