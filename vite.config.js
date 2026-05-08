import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for this project. When deploying to GitHub Pages or any host
// that serves files from a subdirectory (for example, `https://username.github.io/repo/`),
// asset paths need to be relative to the current directory. Setting `base` to
// `'./'` ensures that the built JavaScript, CSS and image assets are referenced
// relatively (e.g. `./assets/index-abcd1234.js`) rather than from the root
// (`/assets/index-abcd1234.js`). Without this, GitHub Pages would load a blank
// page because it attempts to fetch resources from the root of the domain.
export default defineConfig({
  plugins: [react()],
  // When deploying to GitHub Pages under the repository `web`, assets must be
  // referenced relative to the repository path. Setting `base` to `/web/`
  // ensures that the compiled JavaScript and CSS files are loaded from
  // `https://organictarabul.github.io/web/` instead of the domain root. Without
  // this, the site will display a blank page because the browser fails to load
  // the main bundle【687005971738311†L55-L78】.
  base: '/web/'
});