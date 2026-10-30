# Deploy KryptX to kryptxsolutions.com (Hostinger)

## Status check (already verified)

| Item | Status |
|---|---|
| Domain DNS | ✅ `@` → 92.249.46.25, `www` → CNAME to apex (Hostinger nameservers ns1/ns2.dns-parking.com) |
| Hosting server | ✅ Reachable (LiteSpeed, Hostinger hPanel) — currently returns **403 = no files uploaded** |
| SSL | ❌ Not installed — HTTPS fails |
| Website files | ❌ Not uploaded |

**No DNS changes are required.** DNS already points at your Hostinger hosting.

## Step 1 — Build the site (already done for you)

```
npm install
npm run build        # produces the production site in dist/
```

The build includes SEO prerendering (canonical URL, robots.txt, sitemap.xml,
JSON-LD structured data) driven by `SITE_URL` in `.env`:

```
SITE_URL=https://kryptxsolutions.com
```

## Step 2 — Confirm your Hostinger hosting plan is active

1. Log in to **hPanel** → https://hpanel.hostinger.com
2. Left sidebar → **Hosting** (or Websites → Manage)
3. Make sure the hosting plan shows **Active** (not expired/suspended)
   - If it expired: renew under **Billing → Subscriptions**
4. Next to the plan, click **File Manager** (this opens your account's files)

> If you only renewed the **domain** but the **hosting plan** is still expired,
> renew the hosting plan first — otherwise the server keeps returning 403.

## Step 3 — Upload the website files

1. In File Manager, open the **`public_html`** folder
2. Delete any default Hostinger files in it (e.g. `default.php`,
   `index.html` placeholder — if present)
3. Click **Upload → Upload files**, choose the zip (`kryptx-dist.zip`)
   prepared in this project folder
4. Select the zip → **Extract**, extract into `public_html`
5. Result must be: `public_html/index.html` exists directly (not inside a
   nested `dist/` folder)

## Step 4 — Install free SSL (fixes HTTPS)

1. hPanel → **Security → SSL**
2. Select domain **kryptxsolutions.com** → **Install** (Let's Encrypt, free)
3. Enable **Force HTTPS** (redirects http → https)
4. Wait ~5–15 minutes for the certificate to issue

## Step 5 — Verify

- https://kryptxsolutions.com loads (not 403)
- https://www.kryptxsolutions.com loads
- Certificate padlock shows in browser
- /sitemap.xml and /robots.txt are served

## Troubleshooting

- **Still 403 after upload** → files are in the wrong folder; `index.html`
  must sit directly in `public_html/`
- **SSL pending for >30 min** → the domain must resolve to this hosting
  (it does — verified). Re-check the nameservers are still
  `ns1/ns2.dns-parking.com`
- **Old cached content** → clear CDN/browser cache; Hostinger may cache the
  default page briefly
