# Implementation Plan

[Overview]
Host the Jetimworks React project on GitHub Pages at jetimworks.github.io by creating a new repository directly under the `jetimworks` GitHub organization, using GitHub Actions to build and deploy automatically.

This approach uses a GitHub Actions workflow (similar to the reference project) to build the app on GitHub's infrastructure rather than committing built files.

[Types]
No type system changes required. This is an infrastructure/deployment task.

[Files]
**New files:**
- `.github/workflows/deploy.yml` — GitHub Actions workflow to build and deploy to GitHub Pages

**Modified files:**
- `vite.config.js` — Add `base` configuration for GitHub Pages subdirectory deployment

**Files to delete:**
- None

**Configuration:**
- GitHub repo visibility: **must be PUBLIC** (GitHub Pages requires public repos)
- Git remote: Change from `git@github.com:joshuaetim/jetimworks.github.io.git` to `git@github.com:jetimworks/jetimworks.github.io.git`
- Keep `dist/` in `.gitignore` — build happens on GitHub

[Functions]
No function changes required.

[Classes]
No class changes required.

[Dependencies]
No new dependencies required. Uses existing `vite` build tool.

[Testing]
1. Verify `npm run build` completes without errors locally
2. Verify GitHub Actions workflow runs successfully
3. Verify GitHub Pages deploys at https://jetimworks.github.io

[Implementation Order]
1. **Create GitHub repository** — Create new repo `jetimworks/jetimworks.github.io` via GitHub CLI, make it public
2. **Update git remote** — Change origin to point to the new org repo
3. **Configure Vite** — Update `vite.config.js` with `base: '/jetimworks.github.io/'` for proper asset paths
4. **Create GitHub Actions workflow** — Add `.github/workflows/deploy.yml` for automated builds
5. **Commit and push** — Add all files (without dist) and push to the new remote
6. **Enable GitHub Pages** — Configure GitHub Pages in repo settings to use GitHub Actions
7. **Verify deployment** — Check that jetimworks.github.io is accessible

---
## Detailed Steps

### Step 1: Create GitHub Repository
```bash
gh repo create jetimworks/jetimworks.github.io --public --description "Personal website for Jetimworks"
```

### Step 2: Update Git Remote
```bash
git remote set-url origin git@github.com:jetimworks/jetimworks.github.io.git
```

### Step 3: Configure Vite for GitHub Pages
Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/jetimworks.github.io/',
})
```

### Step 4: Create GitHub Actions Workflow
Create `.github/workflows/deploy.yml` with automated build and deploy using the same pattern as the reference project.

### Step 5: Commit and Push
```bash
git add .
git commit -m "Configure for GitHub Pages deployment with GitHub Actions"
git push origin main
```

### Step 6: Enable GitHub Pages
GitHub Actions workflow handles deployment automatically - no manual enable steps needed.

### Step 7: Verify Deployment
Wait 2-5 minutes for GitHub Actions to build and deploy, then check https://jetimworks.github.io