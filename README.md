# The Joyner Family — PWA prototype

This is a mobile-first Progressive Web App (PWA) starter using the approved burgundy, ivory, and antique-gold visual identity.

## Included
- Responsive homepage and section navigation
- Sample event RSVP interaction (saved only in the current browser)
- PWA manifest, service worker, and PNG app icons for Android/Chrome and an Apple touch icon
- Offline caching for the core prototype after the first successful visit

## Important limitations
This is a visual/interaction prototype, not a private production family app. It has **no real accounts, invitation approval, protected member data, cloud photo uploads, or payment processing**. The sample financial amount and announcements are illustrative. Do not publish real family contact details, private photographs, or sensitive records in this static version. Anyone who can access a static-hosted site can generally view its files.

## Preview locally
1. Unzip the project.
2. Open a terminal in the `joyner-family-pwa` folder.
3. Run `python -m http.server 8000`.
4. Visit `http://localhost:8000` in a browser.

A PWA service worker requires HTTPS or localhost.

## Free static hosting with GitHub Pages
1. Create or sign in to a GitHub account.
2. Create a new repository, for example `joyner-family-app`.
3. Upload the contents of this folder to the repository root (not the containing folder).
4. In repository Settings → Pages, choose deployment from the `main` branch and `/ (root)`.
5. Save and wait for GitHub Pages to publish the site.
6. Open the published HTTPS URL on your phone.
7. On iPhone, open the URL in Safari → Share → Add to Home Screen. On Android, open it in Chrome → menu → Install app / Add to Home screen.

GitHub Pages sites are public by default. Do not use it for private family information until real authentication and server-side authorization are implemented.

## Next step for a private family launch
Connect a backend such as Supabase (free tier subject to current limits) for:
- Admin-approved invitations and member accounts
- Row-level security on every family-data table
- Private photo/document storage policies
- Event RSVP records and audit history
- Treasurer-only financial transactions and member-safe summaries

A payment provider may charge transaction fees even when the app hosting is free. Never store card or bank credentials in this app.
