# Commenting Guide

Operational reference for accurate inline PR comments, replies, edits, and comment resolution.

## Contents

- [Line Numbers](#line-numbers)
- [Line Type Selection](#line-type-selection)
- [Severity](#severity)
- [Threading](#threading)
- [Confirmation Gate](#confirmation-gate)
- [Updating and Resolving Comments](#updating-and-resolving-comments)

## Line Numbers

Annotated diff output from `get-pr-diff.mjs` and `get-file-diff.mjs` formats each line as:

```text
+42: const result = compute(value);   # ADDED line, TO-side number is 42
-41: const result = oldCompute(x);    # REMOVED line, FROM-side number is 41
 45: return result;                   # CONTEXT line, TO-side number is 45
```

Pass the number shown in the annotated diff output to `--line`. The scripts already resolved hunk headers for you. Do not parse `@@ -old +new @@` manually.

### Hunk Headers

A hunk header like `@@ -41,6 +42,7 @@` means:

- `-41,6` starts at line 41 in the FROM file and spans 6 lines.
- `+42,7` starts at line 42 in the TO file and spans 7 lines.

ADDED lines count toward the `+` sequence. REMOVED lines count toward the `-` sequence. CONTEXT lines count toward both.

### Failure Mode

If `comment-line.mjs` returns "line X does not exist on TO side":

1. The line number is wrong, usually because a FROM-side number was used where a TO-side number was required.
2. Re-read the diff and use the number shown next to the intended `+` or space-prefixed line.
3. Do not retry with the same number.

## Line Type Selection

Match `--lineType` to the diff prefix:

| Diff prefix | `--lineType` | When to comment |
|---|---|---|
| `+<n>:` | `ADDED` | New code has an issue. This is the primary target. |
| `-<n>:` | `REMOVED` | Only when the removal itself causes a problem. |
| ` <n>:` | `CONTEXT` | Rarely, only when critical to understanding a change. |

Decision rule:

1. Starts with `+`: use `ADDED`.
2. Starts with `-`: use `REMOVED`, only if the deletion is the problem.
3. Starts with a space: use `CONTEXT`, and strongly reconsider whether the comment is necessary.

## Severity

Use `--severity BLOCKER` for must-fix issues before merge:

- Security vulnerabilities, exposed credentials, authorization bypass, or unvalidated input.
- Logic errors that change behavior incorrectly.
- Breaking API contract changes.
- Missing error handling for critical paths.

Use `--severity NORMAL` for important but non-blocking feedback:

- Style and naming issues.
- Maintainability concerns.
- Optional best practices or refactoring suggestions.
- Non-critical performance concerns.
- Missing tests for non-critical paths.

When in doubt, ask whether the PR could safely merge without the comment being addressed. If yes, use `NORMAL`. If no, use `BLOCKER`.

## Threading

Create a top-level PR comment:

```bash
comment-pr.mjs --prId <id> --repo <repo> --comment "<text>"
```

Reply to any existing comment:

```bash
comment-pr.mjs --prId <id> --repo <repo> --comment "<text>" --parentId <id>
```

Get `--parentId` from `get-activities.mjs`; it appears as `id=<number>` next to each comment.

Never use `comment-line.mjs` to reply. It creates a new standalone anchor instead of a reply.

Example `get-activities.mjs` output:

```text
[commented] Alice commented on 2024-01-15T10:30:00Z:
-> id=1234 by Alice (OPEN) [file=src/app.ts, line=42, lineType=ADDED]: "Consider validating..."
  -> id=1235 by Bob (OPEN): "Good point, I will fix this."
```

To reply to Alice's comment, pass `--parentId 1234`.

## Confirmation Gate

Recommended posting order:

1. Run all `comment-line.mjs` calls for file-specific issues.
2. Run `get-activities.mjs` to verify comments and collect IDs.
3. Draft the overall summary comment text.
4. Show the draft to the user and wait for confirmation.
5. After confirmation, run `comment-pr.mjs` for the summary.

This avoids posting an incomplete or incorrect summary.

## Updating and Resolving Comments

Use `update-comment.mjs` to correct mistakes or resolve addressed issues:

```bash
# Fix comment text
update-comment.mjs --prId <id> --repo <repo> --commentId 1234 --text "Corrected comment text"

# Resolve a comment thread
update-comment.mjs --prId <id> --repo <repo> --commentId 1234 --state resolve

# Reopen a comment thread
update-comment.mjs --prId <id> --repo <repo> --commentId 1234 --state reopen

# Edit and resolve together
update-comment.mjs --prId <id> --repo <repo> --commentId 1234 --text "Updated text" --state resolve
```

The script fetches the current comment version before updating. No version number needs to be passed manually.

For resolve and reopen, the script sends BitBucket's `threadResolved` flag and validates the returned value.
