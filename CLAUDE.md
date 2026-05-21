# Contributor Rules (Claude Code)

These rules are **mandatory** for every contributor working in this repo through Claude Code. They are loaded automatically into every Claude Code session. Do **not** start work, commit, or open a PR without complying with all three.

---

## Rule 1 — Always fetch the latest `develop` before starting work

Before any change, sync with remote:

```bash
git fetch origin
git checkout develop
git pull --rebase origin develop
```

If you are creating a feature branch, branch **from the freshly pulled `develop`**:

```bash
git checkout -b feat/<short-description>
```

If you are continuing an existing feature branch, rebase it onto the latest `develop` before you push:

```bash
git fetch origin
git rebase origin/develop
```

**Why:** `develop` is the integration branch deployed by CI. Starting from a stale base produces silent merge conflicts, regressions, and broken PRs.

**Claude Code expectation:** before editing any file in a new session, Claude must verify the local `develop` is up to date with `origin/develop`. If it is not, Claude must pull before proposing changes.

---

## Rule 2 — Always test locally before pushing

You may **not** push a commit or open a PR until you have verified the change runs locally without breaking the app.

Minimum verification checklist:

1. **Build runs clean**

   ```bash
   yarn install
   yarn build
   ```

   No errors. Warnings must be reviewed.

2. **Dev server starts and the affected page(s) render**

   ```bash
   yarn dev
   ```

   Open the page you changed in a browser (`http://localhost:3000` or `--port 3001` if 3000 is busy). Confirm:
   - The page loads with HTTP 200.
   - No new errors in the browser console.
   - No new errors in the Next.js terminal output.
   - The change behaves as intended.

3. **Regression check** — click through at least the home page, the nav dropdowns, and one neighboring page to confirm nothing adjacent broke.

**Why:** This codebase has no automated UI tests. Type checking and `yarn build` catch compilation errors but **not** feature correctness. The browser is the only place where rendering, hydration, and interaction bugs surface.

**Claude Code expectation:** Claude must run `yarn build` and visually verify the change in a browser before reporting a task complete. If Claude cannot run or verify in a browser (sandboxed environment, no display, etc.), it must say so **explicitly** in its final message rather than claiming success.

---

## Rule 3 — Explicitly flag any non-backward-compatible change

If a change is **not** backward compatible, you must call it out — clearly and unmistakably — in:

1. The commit message body (a `BREAKING CHANGE:` footer line).
2. The PR description (a `## Breaking changes` section at the top).
3. Any final message Claude Code sends to the user when the task is done.

A change is **not backward compatible** if any of the following are true:

- Removes or renames a public route, page path, or redirect.
- Removes or renames an exported symbol from `src/lib/*` or any other module imported elsewhere.
- Changes the shape of a content frontmatter type (`src/lib/content-types.ts`) in a way existing `content/pages/**/*.mdx` files don't already satisfy.
- Changes the shape of `config/*.json` (design tokens, SEO config) in a way existing consumers don't already satisfy.
- Renames or moves a file under `public/` that is referenced from MDX content, page code, or external links.
- Changes environment variable names, container ports, or anything in [deploy.config.yaml](deploy.config.yaml) / [Dockerfile](Dockerfile) / [docker-compose.yml](docker-compose.yml) / [nginx.conf](nginx.conf).
- Bumps a major version of `next`, `react`, `node`, or any other dependency with documented breaking changes.

**If in doubt, treat it as breaking and flag it.** It is always cheaper to over-communicate than to roll back a silent breakage in production.

**Claude Code expectation:** before finishing a task, Claude must self-check the diff against the list above. If any item matches, Claude must surface a `## Breaking changes` summary in its final message and stop for user confirmation **before** committing or pushing.

---

## Enforcement summary

| Step | Required action |
|------|-----------------|
| Start of session | Pull `develop`, rebase your branch on it |
| Before commit | `yarn build` clean + browser smoke test passes |
| Before push / PR | If anything in the diff is not backward compatible, flag it explicitly |
| Final Claude message | State which of the three rules were satisfied and how |

Violating any of these rules is grounds for the PR to be closed without review.
