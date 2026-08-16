# Ridgeway Morris — team site

A single-page, no-build-step site. Plain HTML/CSS/JS — no npm, no framework,
so you can open it directly or preview it with any static server.

## Structure

```
morris-site/
├── index.html      All content: hero, about, team/kit, schedule, join
├── css/style.css   All styling (design tokens at the top of the file)
├── js/main.js      One small enhancement (active nav highlight); site
│                   works fully with this removed
└── images/         Empty — drop team/event photos here if you want them
```

## Preview locally

No build tools needed. Either:

- Double-click `index.html` to open it directly in a browser, or
- Run a tiny local server from this folder (recommended, avoids some
  browser file:// quirks):
  ```
  python3 -m http.server 8000
  ```
  then visit http://localhost:8000

## What to customize

- **Team name / tagline / founding year** — top of `index.html`, in
  the `.hero` section
- **About text and stats** — `#about` section
- **Kit, roles, and people** — `#team` section (`.kit-card` blocks)
- **Schedule** — `#schedule` section. Each dance-out is one
  `<li class="program__row">` block — copy/paste to add more, delete
  to remove
- **Contact email** — `#join` section
- **Colors/fonts** — CSS custom properties at the top of `css/style.css`
  (`--cream`, `--green`, `--gold`, `--ribbon`, and the three `--font-*`
  variables)

## Deploying to GitHub Pages 

1. Push this folder's contents to the root of a GitHub repo (or to a
   `/docs` folder, or a `gh-pages` branch — your choice)
2. In the repo: **Settings → Pages** → set the source to that
   branch/folder
3. GitHub will publish it at `https://<username>.github.io/<repo>/`

No Actions workflow needed since there's no build step.
