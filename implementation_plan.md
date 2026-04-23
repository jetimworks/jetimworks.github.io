# Implementation Plan

[Overview]
Configure jetimworks.com as a custom domain for the GitHub Pages site at https://jetimworks.github.io using Namecheap as the domain registrar.

This requires adding DNS records at Namecheap and enabling the custom domain in GitHub repository settings.

[Types]
No type system changes required. This is a DNS/infrastructure task.

[Files]
**New files:**
- `public/CNAME` — Contains the custom domain for GitHub Pages to recognize

**Modified files:**
- None

**Configuration:**
- DNS: Add A records pointing to GitHub's IPs and CNAME for www redirect
- GitHub: Enable custom domain in repository settings

[Functions]
No function changes required.

[Classes]
No class changes required.

[Dependencies]
No new dependencies required.

[Testing]
1. Verify DNS propagation using `dig jetimworks.com` or `nslookup jetimworks.com`
2. Verify GitHub Pages recognizes the custom domain
3. Verify site loads at jetimworks.com with HTTPS

[Implementation Order]
1. **Add CNAME file** — Create `public/CNAME` with `jetimworks.com`
2. **Configure DNS at Namecheap** — Add A records and CNAME
3. **Enable custom domain in GitHub** — Configure via CLI or GitHub web UI
4. **Wait for DNS propagation** — Allow time for changes (typically a few hours)
5. **Verify HTTPS** — GitHub auto-provisions SSL certificate

---
## Detailed Steps

### Step 1: Add CNAME File (Automated)
Create `public/CNAME` containing:
```
jetimworks.com
```

### Step 2: Configure DNS at Namecheap
Log in to Namecheap → Dashboard → Domain List → Manage → Advanced DNS

Add these records:

**A Records (for root domain @):**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | Automatic |
| A | @ | 185.199.109.153 | Automatic |
| A | @ | 185.199.110.153 | Automatic |
| A | @ | 185.199.111.153 | Automatic |

**CNAME Record (for www subdomain):**
| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | www | jetimworks.github.io | Automatic |

**Important:** Delete any existing A records or CNAME records that conflict.

### Step 3: Enable Custom Domain in GitHub
```bash
gh repo edit jetimworks/jetimworks.github.io --custom-domain jetimworks.com
```

Or via GitHub web UI:
1. Go to https://github.com/jetimworks/jetimworks.github.io/settings/pages
2. Under "Custom domain", enter `jetimworks.com`
3. Click Save
4. Wait for DNS check to complete (may show as "Configuring" initially)

### Step 4: Wait and Verify
- DNS propagation typically takes 10 minutes to a few hours
- GitHub will auto-provision HTTPS once DNS propagates
- Enable "Enforce HTTPS" once the certificate is active