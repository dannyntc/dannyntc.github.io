# Site Map

This document describes the site structure represented by the files currently tracked in this repository.

## Primary page

| Path | Purpose | Main content |
| --- | --- | --- |
| `index.html` | Main personal profile | Approach, experience, side projects, education, musings, and a link to the [NTU Economics Archives](https://dannyntc.github.io/NTU-Economics-archives/) for interactive economics analyses and research materials. |

The primary navigation connects the homepage sections. The header includes GitHub, email, LinkedIn, and WhatsApp links.

## Forwarding pages

| Path | Current role |
| --- | --- |
| `profile.html` and `contact.html` | Point readers to `index.html#top`. |
| `experience.html` | Points readers to `index.html#experience`. |
| `education.html` | Points readers to `index.html#education`. |
| `projects.html` and `side-projects.html` | Point readers to `index.html#projects`. |
| `musings.html` | Points readers to `index.html#musings`. |

`case-studies.html` and `roadmap-hover-demo.html` were intentionally removed during the one-page redesign.

## Assets and behaviour

- `style.css` provides the one-page homepage styling.
- `assets/css/main.css`, `assets/css/profile.css`, JavaScript, Sass, webfonts, and gallery assets remain in the repository for prior revisions and supporting resources.
- `images/` contains the profile image, favicon, background image, and gallery images.

## Local preview

The site is static and can be previewed from the repository root with:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` to test the root page and linked assets.

## Deployment context

The repository is a GitHub Pages personal profile site. Publishing depends on the GitHub Pages source selected in repository settings. Before publishing, verify that the selected source includes the root-level HTML files and their referenced relative assets.
