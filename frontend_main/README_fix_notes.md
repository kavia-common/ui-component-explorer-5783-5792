# Build Fix Notes: CRA + Tailwind

This project uses Create React App with Tailwind CSS.

Changes applied:
- Ensured react-scripts is a dependency and scripts call it directly (no global/npx).
- Added CI-safe build runner (scripts/build.js) to handle environments where npm doesn’t link .bin properly.
- Verified Tailwind setup: tailwind.config.js, postcss.config.js, and src/index.css include required directives.
- Added a compatible browserslist for production and development.

Common scripts:
- npm start — Runs react-scripts start
- npm run build — Uses CI-safe runner to execute CRA build
- npm test — Runs react-scripts test (non-watch mode in CI)

If you encounter "react-scripts: not found", ensure deps are installed:
- npm ci (CI) or npm install (local)
