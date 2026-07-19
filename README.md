# Danny Ng — Professional Profile

This repository contains my static GitHub Pages personal profile site. It presents how I approach strategy, operations, transformation, and AI-enabled execution, alongside my experience, education, side projects, and writing.

## Site content

- `index.html` is the main profile page, with My Thought Process, experience, education, and a link to the [NTU Economics Archives](https://dannyntc.github.io/NTU-Economics-archives/) for interactive economics analyses and research materials.
- `side-projects.html` covers self-directed AI, automation, and workflow experiments.
- `musings.html` contains reflective notes on AI, work, learning, and professional judgment.
- Several root-level pages preserve older links by forwarding readers to the relevant current page or section.

For the complete page and asset map, see [docs/site-map.md](docs/site-map.md).

## Technology

The site is built with hand-authored HTML, CSS, and JavaScript. Local assets include stylesheets, JavaScript, images, webfonts, and Sass source files under `assets/` and `images/`. There is no tracked build configuration in this repository.

## Preview locally

From the repository root, start a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C` when finished.

## Deployment

This repository is intended for GitHub Pages deployment. GitHub Pages serves the publishing source selected in the repository settings, so keep root-level pages and their relative asset paths intact. The repository does not include a tracked GitHub Pages configuration or deployment workflow; confirm the active Pages source in GitHub before relying on a change being published.

## Maintenance

When updating the site, keep navigation, internal links, and forwarding pages aligned with the current content. Preview the site locally before publishing and review the resulting diff to ensure only intended content and asset changes are included.
