# Create React App (CRA) usage

This project uses Create React App (react-scripts v5) with Tailwind CSS.

Local scripts (no globals required):
- npm start -> react-scripts start
- npm run build -> react-scripts build
- npm test -> react-scripts test

Tailwind integration:
- tailwind.config.js scans ./src/**/*.{js,jsx}
- postcss.config.js loads tailwindcss and autoprefixer
- src/index.css includes Tailwind directives

If you ever see "react-scripts: not found", ensure dependencies are installed:
- npm ci (CI) or npm install (local)
