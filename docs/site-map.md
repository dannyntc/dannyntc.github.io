# Site Map

This document describes the site structure represented by the files currently tracked in this repository.

## Primary page

| Path | Purpose | Main content |
| --- | --- | --- |
| `index.html` | Main personal portfolio | Introduction, Work, Projects, Writing, About Me, and a link to the [NTU Economics Archives](https://dannyntc.github.io/NTU-Economics-archives/). |

## Reading pages

| Path | Purpose |
| --- | --- |
| `work/hls-interiors.html` | HLS Interiors business-model transformation |
| `work/lu-strategy.html` | Lu Strategy operational transformation |
| `work/premiers-tea.html` | Premier's Tea Singapore market entry |
| `thinking/choosing-the-right-tool.html` | AI model selection and decision-making |
| `thinking/hidden-cost-of-automation.html` | AI, attention, and independent judgment |
| `thinking/good-processes.html` | Process usability, adoption, and the practical handoff |

The primary navigation connects the homepage sections. GitHub and LinkedIn are in the masthead; email and WhatsApp are available in About Me under Contact.

## Forwarding pages

| Path | Current role |
| --- | --- |
| `profile.html` | Points readers to `index.html#top`. |
| `contact.html` | Points readers to `index.html#contact`. |
| `experience.html` | Points readers to `index.html#background`. |
| `education.html` | Points readers to `index.html#education`. |
| `projects.html` and `side-projects.html` | Point readers to `index.html#workbench`. |
| `musings.html` | Points readers to `index.html#how-i-think`. |

`case-studies.html` and `roadmap-hover-demo.html` were intentionally removed during the one-page redesign.

## Assets and behaviour

- `style.css` provides the homepage and reading-page styling.
- `assets/js/site-nav.js` keeps the active homepage section in sync while scrolling; the content and ordinary anchor navigation work without JavaScript.
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
