# Website Marketing Template

Next.js 16 + Tailwind v4 marketing-site template wired to the Rule-1 / TruckerCloud
GitHub Actions CI/CD pipeline (build → ECR → EKS).

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deploy

1. Fill in `deploy.config.yaml` (AWS account, region, EKS cluster, namespace, ECR prefix, ACM cert).
2. Configure GitHub repo secrets: `<PREFIX>_ACCESS_KEY_ID` and `<PREFIX>_ACCESS_KEY`.
3. Replace `MARKETING` placeholders in `.github/workflows/node-deployment.yaml`.
4. Push to `develop` → workflow runs build → docker → deploy.

See [REPLICATE.md](./REPLICATE.md) for the full Claude Code replication recipe.
