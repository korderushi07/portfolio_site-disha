# Disha Jain — Portfolio

Personal portfolio site for Disha Jain, MSc Finance student at JBIMS, focused on
strategic finance and business consulting.

Built with **React 18 + Vite**. No backend — it deploys as a static site.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
```

## Scripts

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload           |
| `npm run build`   | Build for production into `dist/`              |
| `npm run preview` | Serve the built `dist/` locally to verify it   |

Requires Node 18 or newer.

## Project structure

```
index.html            Vite entry point (meta tags, font loading)
src/
  main.jsx            React root
  App.jsx             Composes all page sections in order
  index.css           All styles — design tokens live in :root at the top
  data/content.js     All site copy and data. Edit content here, not in JSX.
  components/         One component per page section
  hooks/              useScrolled (sticky header), useActiveSection (nav highlight)
  assets/             Images
```

## Editing content

Almost all copy — experience, projects, achievements, certifications, contact
links — lives in `src/data/content.js`. Update that file rather than the
components, which just render whatever the data file provides.

Colors, fonts, and spacing are CSS custom properties defined in the `:root`
block at the top of `src/index.css`.

## Deploying

The build output is a static `dist/` folder, so any static host works.

- **Netlify** — config is in `netlify.toml`; connect the repo and it builds automatically.
- **Vercel** — config is in `vercel.json`; import the repo and it builds automatically.
- **Anywhere else** — run `npm run build` and upload the contents of `dist/`.

Always run `npm run preview` after building to check the production bundle
before shipping.
