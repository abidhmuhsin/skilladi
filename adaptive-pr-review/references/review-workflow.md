# PR Review Workflow Guide

Use this reference when performing a full PR review or preparing review feedback.

## Contents

- [Review Process](#review-process)
- [Comment Guidelines](#comment-guidelines)
- [Review Structure](#review-structure)
- [Review Completion](#review-completion)
- [Focus Areas](#focus-areas)
- [Output Format](#output-format)

## Review Process

### Initial Analysis

- If Jira integration is available, fetch the related Jira issue from the PR description, such as `PROJ-1234`.
- Run `get-pr-info.mjs` first to get metadata, description, and the changed-files checklist.
- Run `get-pr-diff.mjs` for a full diff when appropriate.
- If a checklist file is absent from the full diff output, run `get-file-diff.mjs --file <path>`.
- Identify the change type before detailed review: refactor, feature, bug fix, modernization, configuration change, or test-only change.
- Evaluate consistency within the changed scope. Do not use unrelated legacy code as the baseline unless directly relevant.

### Using `get-file-content.mjs`

Before fetching full file content, follow this sequence:

1. Review the diff for straightforward issues.
2. Identify imports, constants, or dependencies involved in potential comments.
3. Fetch content only for dependencies needed to support technical claims.
4. Ensure technical assertions are fact-based.
5. Write comments based on verified information.

Fetch full content only when the diff is insufficient and you need to verify code not visible in the diff.

Do not fetch extra content for:

- New files whose complete content is already in the diff.
- Small files where the diff shows most of the file.
- Complete rewrites where the replacement is visible.
- Deleted files where the diff already shows what was removed.

## Comment Guidelines

- Use `comment-line.mjs` for file-specific issues.
- Add comments only for issues that need addressing.
- Do not add positive line comments.
- Be professional and avoid emoji in comment text.
- Comment primarily on `ADDED` lines.
- Use `REMOVED` only when the deletion itself introduces a problem.
- Avoid `CONTEXT` unless necessary.
- Verify external code before making claims about safety, type compatibility, or correctness.
- Confirm with the user before running `comment-pr.mjs` for the overall PR summary.

### Tone

- Use collaborative language: "Consider...", "Please validate...", "Could this...".
- Explain the reason behind each suggestion.
- Distinguish must-fix issues from optional improvements.
- Avoid overstating risk when evidence is incomplete.

## Review Structure

Overall summary comments should:

1. Start with a neutral assessment of what changed.
2. Summarize the implementation objectively.
3. Present concerns as validation points or concrete issues.
4. End with actionable next steps.

Line-level comments should:

- Focus on correctness, security, maintainability, or tests.
- Explain why the issue matters.
- Offer an alternative when there is a clear one.
- Ask a question when intent is unclear.

## Review Completion

End full reviews with:

1. Testing validation request with specific steps.
2. Comment resolution request.
3. Constructive closing statement.

Template:

```markdown
### Next Steps

Please validate the implementation by:

1. [Specific testing step]
2. [Verification requirement]
3. [Build or deployment check]

Please review and address the line-level comments before merging.

[Constructive closing statement.]
```

## Focus Areas

### Problem-Solution Fit

- Does the solution match the PR description or linked issue?
- Are there unstated assumptions?
- Was a simpler or more robust solution overlooked?

### Correctness and Robustness

- Edge cases: null, undefined, empty input, large input, unexpected types.
- Error handling: external failures, uncaught exceptions, missing cleanup.
- Logic flaws: incorrect conditionals, off-by-one errors, race conditions.
- State management: inconsistent state, ordering issues, improper cleanup.

### Impact and Side Effects

- Could other modules or workflows be affected?
- Could the change corrupt or lose data?
- Are migrations reversible and safe?
- Do dependency changes affect security, licensing, compatibility, or performance?

### Maintainability

- Is the code unnecessarily complex?
- Are essential test cases missing?
- Is the new behavior hard to test?
- Will the approach scale with data volume or traffic?

### Security

- XSS, SQL injection, authorization bypass, insecure direct object references.
- Exposed secrets or sensitive data.
- Missing input validation or output encoding.

### Performance

- N+1 queries.
- Inefficient loops.
- Excessive fetching or processing.
- Blocking operations in critical paths.

### Observability and Operability

- Missing logs for key errors or decisions.
- Configuration risks.
- Deployment or rollback issues.

## Output Format

Structure feedback like this:

```markdown
**Overall Summary**

[Brief high-level assessment.]

**Potential Issues and Suggestions**

- Critical Concerns: [Issue, reasoning, suggested action.]
- Areas for Improvement: [Suggestion, reasoning, suggested action.]
- Questions for the Developer: [Question about ambiguity or potential oversight.]
```

Prioritize specific, actionable issues that a developer focused on the main implementation path may have missed.
