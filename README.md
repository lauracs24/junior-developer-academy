# The Junior Developer Academy

[Open the live website preview](https://lauracs24.github.io/junior-developer-academy/)

A website preview for an independent, trainee-led London developer showcase. The revised visual direction uses white, near-black and electric blue, a featured developer panel, and compact marketplace-style profiles.

## What works

- Ten explicitly fictional profiles with individual project contributions and transferable experience.
- Combined skill/name/project search and developer-focus filters, including an empty state.
- Keyboard-accessible native dialogs for profiles, enquiries and profile drafts.
- Interview and feedback enquiries with validation, prepared emails to thejuniordeveloperacademy@gmail.com, and text-file downloads.
- Volunteer profile email drafts and downloads. Visitors review and send drafts in their own email app. Forms reset when closed; nothing is submitted or stored on a server by the website.
- Responsive layouts and reduced-motion support.

## Editing

This first version uses plain HTML, CSS and JavaScript with no build or dependency installation. The served files are in `dist/`. Profile data is at the top of `dist/app.js`. Shared styling is in `dist/styles.css`.

Serve `dist/` with a local HTTP server to preview.

## GitHub and a shareable website

The repository includes `.github/workflows/deploy-pages.yml`, which publishes only the website files in `dist/` to GitHub Pages. No build command, database or paid service is required for the current preview.

To enable it after uploading the repository:

1. In the GitHub repository, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Open **Actions → Publish website to GitHub Pages → Run workflow**.
4. Once the run succeeds, open the website link shown in the deployment. Share that link for feedback; the repository link is for viewing the code.

Future changes to `dist/` on `main` or `master` will publish automatically. Asset links are relative so the site also works under a repository URL. The website continues to use fictional examples and visitor-reviewed email drafts.

GitHub Pages is available free for public repositories. This project's public repository is https://github.com/lauracs24/junior-developer-academy. Hosting from a private repository requires an eligible paid GitHub plan.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Before inviting real participants

Replace the fictional records with participant-approved profiles and real project links. Enquiries currently use the visitor's email app, with a downloadable fallback. Review incoming profiles before publishing and update the preview notices and privacy wording to match the live workflow. Keep the project's independence from CodeYourFuture clear unless an official partnership is agreed.

## Optional browser integration

Browsers implementing `document.modelContext` can use `filter_example_developers` to update the same directory filters. The site remains fully functional without it. Verified in a supporting browser: Backend + Python returns Omar, invalid categories are rejected, and resetting to all returns the ten profiles.

## Design references and images

The user supplied Clutch's development-agency matching page, Upwork's junior-developer directory and Proxify as inspiration. The design uses their emphasis on clear hiring actions and easy-to-scan people and skills; it does not reuse their branding, ratings or candidate information.

Three fictional portraits were generated with the built-in image-generation tool. They are not real participants. The original prompts and provenance are in `docs/portrait-provenance.json`. Website copies:

- `dist/assets/amina.png`
- `dist/assets/daniel.png`
- `dist/assets/priya.png`
