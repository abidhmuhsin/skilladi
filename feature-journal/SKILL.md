---
name: feature-journal
description: Generate a structured engineering journal entry for a feature. Supports two modes — Context Mode (from conversation history in Claude) and Commit Mode (from git commits, diff stats, and PR activity). Triggers on "journal this feature", "write up what we built", "document learnings", "summarize the commits", or "write up engineering notes".
---

# Feature Journal

Generates a dated journal entry for a completed or in-progress feature. Two source modes:

- **Context Mode** — mines the current conversation (or past Claude chats) for design decisions, debugging pivots, and discoveries made while building
- **Commit Mode** — analyzes git commits, diff stats, and PR description/comments

**DO NOT write the journal file until the user confirms the scope.**

---

## Step 0 — Detect or Ask the Mode

**Auto-detect first.** Look for these signals before asking:

| Signal | Infer |
|--------|-------|
| User mentions a branch name, PR number, or commit range | Commit Mode |
| User says "from our conversation" / "what we just built" / "what we discussed" | Context Mode |
| Active git repo in the shell context | Lean toward Commit Mode (confirm) |
| Long design/debugging conversation visible in context | Lean toward Context Mode (confirm) |

**If ambiguous**, ask with one question:

> "Should I journal from our conversation here, or pull from git commits/a PR?"

Offer both if the feature spans both sources (common). Combined mode = gather from both, merge into one entry.

---

## Step 1 — Confirm Scope

Ask only what isn't already clear:

**Context Mode:**
1. Which conversation(s)? Default = current chat. Mention that past chats can be searched by topic.
2. Date for the entry — default today?
3. Output filename — default `journal-<date>-<HHMM>-<feature>.md`? (e.g., `journal-2026-06-07-2359-streaming-widget.md`)

**Commit Mode:**
1. Branch name, PR number, or commit range (e.g. last N commits)?
2. Date — default today?
3. Output filename — default `journal-<date>-<HHMM>-<ticket>.md`? (e.g., `journal-2026-06-07-2359-auth-refactor.md`)

**Combined Mode:** Ask all of the above.

---

## Step 2 — Gather Raw Material

### Context Mode

Search past conversations for the feature topic using `conversation_search`. Pull the current conversation from context. Look for:

- Design decisions and the reasoning behind them ("we went with X because Y")
- Dead ends, wrong turns, and what was learned from them
- Debugging pivots (problem → investigation → fix)
- API, library, or platform discoveries ("turns out Z works differently than we expected")
- Explicit "aha" moments or surprises
- Any open questions left unresolved

Do not summarize surface-level what/how — focus on **why things changed** and **what was non-obvious**.

### Commit Mode

Run the following in sequence:

```bash
# Recent commits on current branch
git log --oneline -20

# Diff stats per commit
git log --format="%H %s" -20 | while read hash msg; do
  echo "=== $msg ==="; git diff --stat "$hash^" "$hash"; echo
done
```

If a PR number is provided, fetch:
- PR description and test plan via `mcp__pr-agent__update_pr_details` (read-only)
- Review comments and findings via `mcp__pr-agent__get_pr_activities`

### Combined Mode

Run both. Tag each piece of raw material with its source (`[chat]` / `[commit]` / `[PR]`) before synthesizing, so learnings are traceable.

---

## Step 3 — Analyze the Raw Material

**Pattern signals to watch for:**

| Pattern | What to look for |
|---------|-----------------|
| Many small fix commits after review | Security, correctness, or silent-failure learnings |
| Large deletions in a commit | Removed feature or bad pattern identified; check if it yielded a design insight |
| Repeated edits to the same file across commits | Design took multiple attempts; strong learning candidate |
| Reviewer comments marked "Critical" or "Blocking" | Always surface as a learning |
| Conversation loops (same problem revisited twice) | Ambiguity or hidden constraint; learning candidate |
| Surprise discoveries mid-conversation | "I didn't know X behaved like Y" → direct learning |
| Explicit "let's do it differently" pivots | Captures a real trade-off |

---

## Step 4 — Generate the Journal Entry

Produce a markdown file with this structure:

```markdown
# Journal Entry — DD-Mon-YYYY

## <Ticket/Feature> — <Feature Title>

<2–3 sentence plain-English summary of what was built and why.>

---

### <Section per major capability or component>

<What it does, why it matters, any non-obvious design decisions.>

---

## Learnings

### 1. <Concise principle title>

<2–4 sentences. What happened, what it revealed, what the general rule is.
No code references. Write as an engineering insight, not a bug report.>

### 2. ...
```

**Rules for the Learnings section:**

- Derive learnings **only** from actual issues, fixes, design pivots, or discoveries in the source material — do not invent generic advice
- Keep each learning at the **engineering/design principle level** — no code snippets, no implementation specifics
- Omit purely syntactic or language gotchas unless they reveal something about the platform's design
- Aim for **4–8 learnings**; fewer is better than padding
- In Combined Mode, note the source of each learning in a subtle inline tag: `*(from conversation)*` or `*(from PR review)*`

---

## Step 5 — Save the File

Write the journal to the filename confirmed in Step 1. Confirm the path and offer to open or copy it.

---

## Source Reference

| Input | Source | Mode |
|-------|--------|------|
| Conversation decisions and pivots | Current chat context + `conversation_search` | Context |
| Commit messages | `git log` | Commit |
| Diff stats | `git diff --stat` | Commit |
| PR description / test plan | `mcp__pr-agent__update_pr_details` | Commit |
| PR review comments | `mcp__pr-agent__get_pr_activities` | Commit |
