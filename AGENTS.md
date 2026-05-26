# AGENTS.md

Guidance for Codex agents working in this repository.

## Repository Layout

- `bitbucket-datacenter/`: Bitbucket Data Center skill and scripts.
- `pr-review/`: PR review skill and scripts.
- `themeprompts/`: Theme prompt skill.

Keep changes scoped to the relevant skill folder unless the task explicitly requires cross-skill updates.

## New Skill Structure

New skills should live in their own top-level folder.

Recommended structure:

- `<skill-name>/SKILL.md`: primary skill instructions and workflow.
- `<skill-name>/README.md`: optional overview or local usage notes.
- `<skill-name>/references/`: supporting docs referenced by the skill.
- `<skill-name>/scripts/`: executable helpers used by the skill.
- `<skill-name>/scripts/lib/`: shared helpers for that skill's scripts.

When creating a new skill:

- keep the folder self-contained;
- prefer copying only the parts actually needed from an existing skill;
- update commit messages to use the new skill folder prefix.

## Editing Rules

- Prefer minimal, targeted changes.
- Preserve existing conventions inside each skill folder.
- When copying behavior from one skill folder to another, compare the current files first instead of overwriting blindly.

## Commit Messages

Prefix commit messages with the skill folder name, matching the existing history.

Examples:

- `bitbucket: refactor start-pr-review Jira guidance`
- `pr-review: sync helper scripts with bitbucket-datacenter`
- `themeprompts: refine custom theme workflow`

If a change touches more than one skill, either:

- split it into separate commits per skill, or
- use the primary affected skill as the prefix if the work is intentionally bundled.
