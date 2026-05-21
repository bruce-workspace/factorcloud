# Setup — factorcloud-website-marketing

Local setup guide for new contributors. **macOS only.**

## Assumptions

- You're on a MacBook (Apple Silicon or Intel).
- You have valid GitHub credentials and access to `Rule-1-Repository/factorcloud-website-marketing`.
- You will use **Claude Code** as your primary development tool.

---

## 1. Homebrew

If you don't have Homebrew yet:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After install, follow the on-screen instructions to add `brew` to your `PATH` (it differs on Apple Silicon vs Intel).

Verify:

```bash
brew --version
```

## 2. Core tools

```bash
brew install git node@22 yarn yq gh jq watch tree
brew link --overwrite --force node@22
```

| Tool | Why |
|------|-----|
| `git` | Version control |
| `node@22` | `package.json` pins `engines.node: 22.x`; CI/Dockerfile use Node 22 |
| `yarn` | Repo uses `yarn.lock`; standard package manager here |
| `yq` | CI parses `deploy.config.yaml` with `yq`; useful locally to inspect/reproduce |
| `gh` | GitHub CLI — PRs, Actions, secrets |
| `jq` | JSON wrangling |
| `watch`, `tree` | Dev ergonomics |

Verify Node:

```bash
node -v   # should print v22.x.x
yarn -v
```

> If `node -v` shows a different major version, run `brew link --overwrite --force node@22` again and reopen your shell.

## 3. Docker (for container builds)

Pick one:

**Docker Desktop** (easiest):

```bash
brew install --cask docker
open -a Docker          # launch once to finish setup
```

**Free alternative** (Colima):

```bash
brew install colima docker docker-compose docker-buildx
colima start
```

Verify:

```bash
docker --version
docker compose version
```

## 4. Claude Code

Install Claude Code (npm-based; uses your Node 22 from above):

```bash
npm install -g @anthropic-ai/claude-code
```

Then run it once to authenticate:

```bash
claude
```

Follow the prompts to sign in with your Anthropic account.

## 5. GitHub authentication

Log in with the GitHub CLI — this also configures git's HTTPS credential helper:

```bash
gh auth login
```

Choose:
- **GitHub.com**
- **HTTPS**
- **Authenticate Git with your GitHub credentials → Yes**
- **Login with a web browser**

Verify:

```bash
gh auth status
```

## 6. Clone the repo

```bash
cd ~
gh repo clone Rule-1-Repository/factorcloud-website-marketing
cd factorcloud-website-marketing
```

## 7. Install project dependencies

```bash
yarn install
```

If Node version warnings appear, re-check step 2 — Node 22 is required.

## 8. Run the dev server

```bash
yarn dev
```

Visit **http://localhost:3000** (or pass `--port 3001` if port 3000 is in use).

## 9. Daily workflow with Claude Code

From inside the repo:

```bash
claude
```

Typical session:

1. Pull latest: `git pull --rebase`
2. Create a branch: `git checkout -b feat/your-change`
3. Ask Claude Code to implement, test, and verify in the browser.
4. Open a PR: `gh pr create --base develop`

## Troubleshooting

| Symptom | Fix |
|---------|-----|
| `error factorcloud-website@0.1.0: The engine "node" is incompatible … Expected version "22.x"` | `brew link --overwrite --force node@22`, then reopen your terminal. |
| `EADDRINUSE` on port 3000 | Another process (often Docker Desktop) is bound to 3000. Use `yarn dev --port 3001`. |
| `docker: command not found` after install | Launch Docker Desktop once, or for Colima run `colima start`. |
| `gh: not authenticated` | Re-run `gh auth login`. |

## Out of scope

This project deploys to AWS ECR + EKS via GitHub Actions. **You do not need `awscli` or `kubectl` locally** — CI handles all deploys. See [.github/workflows/node-deployment.yaml](.github/workflows/node-deployment.yaml) and [deploy.config.yaml](deploy.config.yaml).
