# Site Map

This document describes the site structure represented by the files currently tracked in this repository.

## Primary pages

| Path | Purpose | Main content |
| --- | --- | --- |
| `index.html` | Main personal profile | Execution roadmap; experience; education; and an interactive academic data project on religiosity and childhood vaccination rates in the United States. |
| `side-projects.html` | Self-directed work | AI agentic workflow development, the professional profile website, and AI productivity tooling. |
| `thoughts.html` | Work approach | Notes on advising, operations improvement, AI use, and technical learning. |
| `musings.html` | Reflective writing | Notes on AI model selection and the trade-offs of using AI too early in the thinking process. |

The primary navigation connects these four pages. The profile page also includes email, LinkedIn, and WhatsApp links.

## Forwarding and supporting pages

| Path | Current role |
| --- | --- |
| `profile.html` | Points readers to `index.html`. |
| `contact.html` | Points readers to the contact details on `index.html`. |
| `experience.html` | Points readers to `index.html#experience`. |
| `education.html` | Points readers to `index.html#education`. |
| `case-studies.html` | Points readers to `index.html#case-studies`. |
| `projects.html` | Points readers to `side-projects.html`. |
| `skills.html` and `capabilities.html` | Point readers to `index.html#execution-roadmap`. |
| `roadmap-hover-demo.html` | Standalone visual demo of roadmap hover treatments. |

## Assets and behaviour

- `assets/css/main.css` provides the base template styling; `assets/css/profile.css` contains site-specific styling.
- `assets/js/profile.js` handles the mobile navigation toggle, reveal effects, metric animation, academic-project tabs, expandable experience details, and copyable contact controls.
- `assets/js/` also contains local template and library scripts.
- `assets/sass/` contains Sass source files.
- `images/` contains the profile image, background image, and gallery images; `assets/webfonts/` contains local Font Awesome webfonts.

## Local preview

The site is static and can be previewed from the repository root with:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` to test the root page and linked assets.

## Deployment context

The repository is a GitHub Pages personal profile site. It has no tracked build configuration, GitHub Pages configuration, or deployment workflow. Publishing therefore depends on the GitHub Pages source selected in repository settings. Before publishing, verify that the selected source includes the root-level HTML files and their referenced relative assets.
