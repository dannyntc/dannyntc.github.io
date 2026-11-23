# Danny Ng — Professional Profile

This repository contains the static GitHub Pages personal portfolio for Danny Ng. The site presents documented work in strategy and operations, practical software projects, writing, professional background, and contact details.

## Site content

- `index.html` is the main portfolio: introduction, Work, Projects, Writing, and About Me.
- `work/` contains three detailed case studies covering HLS Interiors, Lu Strategy operations, and Premier's Tea market entry.
- `thinking/` contains three essays on tools, judgment, and usable processes.
- `side-projects.html` and `musings.html` preserve older links by forwarding readers to the relevant `index.html` section.
- Several root-level pages preserve older links by forwarding readers to the relevant current page or section.

For the complete page and asset map, see [docs/site-map.md](docs/site-map.md).

## Technology

The site is built with hand-authored HTML, CSS, and a small navigation script. Local assets include stylesheets, JavaScript, images, webfonts, and Sass source files under `assets/` and `images/`. There is no tracked build configuration in this repository.

## Preview locally

From the repository root, start a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser. Stop the server with `Ctrl+C` when finished.

## Deployment

This repository is intended for GitHub Pages deployment. GitHub Pages serves the publishing source selected in the repository settings, so keep root-level pages and their relative asset paths intact. The repository does not include a tracked GitHub Pages configuration or deployment workflow; confirm the active Pages source in GitHub before relying on a change being published.

## Maintenance

When updating the site, keep navigation, internal links, and forwarding pages aligned with the current content. Preserve the documented boundaries in `docs/redesign-content-audit.md`. Preview the site locally before publishing and review the resulting diff to ensure only intended content and asset changes are included.
