import React from 'react';
import CodeBlock from '../demos/CodeBlock';

/**
 * PUBLIC_INTERFACE
 * InstallationPage: Themed setup guide with copyable steps.
 * - Responsive content layout suitable for the existing shell (fixed navbar + sidebar).
 * - Uses existing gradient tokens and buttons for Ocean Professional theme.
 * - Includes prerequisites, cloning/running this project, Tailwind setup for a fresh app,
 *   and how to use the catalog snippets.
 */
export default function InstallationPage() {
  const prerequisites = `- Node.js 16+ (LTS recommended)
- npm 7+ (or yarn/pnpm)
- Git (for cloning)
- A modern browser`;

  const cloneRun = `# 1) Clone this repository
git clone https://github.com/your-org/ui-component-explorer.git
cd ui-component-explorer/frontend_main

# 2) Install dependencies
npm install

# 3) Start the dev server
npm start
# App runs on http://localhost:3000`;

  const tailwindInstall = `# Tailwind CSS, PostCSS, Autoprefixer
npm install -D tailwindcss postcss autoprefixer
# Initialize Tailwind + PostCSS (creates tailwind.config.js & postcss.config.js)
npx tailwindcss init -p`;

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#F59E0B',
        success: '#F59E0B',
        error: '#EF4444',
        background: '#f9fafb',
        surface: '#ffffff',
        text: '#111827'
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        xl: '1rem'
      },
      transitionProperty: {
        'colors-transform':
          'color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter'
      }
    }
  },
  plugins: []
};`;

  const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;

  const cssDirectives = `/* Tailwind layers */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: your custom utilities (you may copy some from this repo's src/index.css) */
/* Example brand helpers used by this app: */
.bg-navbar-gradient{ background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); }
.btn-brand-45{
  display:inline-flex; align-items:center; justify-content:center; font-weight:600; color:white; border-radius:0.5rem;
  background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); padding:0.625rem 1rem;
}`;

  const importCss = `// Vite/CRA entry file (e.g., src/main.jsx or src/index.js)
import './index.css';`;

  const snippetsUsage = `// Example React usage of copied HTML with tiny JS behavior
import React, { useEffect, useRef } from 'react';
import './index.css';

export default function ExampleCard() {
  const btnRef = useRef(null);
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const onClick = () => console.log('Clicked!');
    btn.addEventListener('click', onClick);
    return () => btn.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="card p-4">
      <button ref={btnRef} className="btn-brand-45">Action</button>
    </div>
  );
}`;

  const standaloneCdn = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Snippet Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Tailwind Play CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: { extend: { colors: { primary: '#2563EB', secondary: '#F59E0B' } } },
      };
    </script>
    <style>
      .bg-navbar-gradient { background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); }
      .btn-brand-45 {
        display:inline-flex; align-items:center; justify-content:center; font-weight:600; color:white; border-radius:0.5rem;
        background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); padding:0.625rem 1rem;
      }
    </style>
  </head>
  <body class="bg-white">
    <div class="p-6">
      <button class="btn-brand-45">Action</button>
    </div>
    <script>
      document.querySelector('.btn-brand-45')?.addEventListener('click', () => alert('Clicked!'));
    </script>
  </body>
</html>`;

  const cliBuild = `# Tailwind CLI (no framework required)
# 1) Install
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2) input.css
#  (put @tailwind base; @tailwind components; @tailwind utilities; inside)

# 3) tailwind.config.js content globs:
#  content: ['./*.html', './snippets/**/*.{html,js}']

# 4) Build
# Dev watch:
npx tailwindcss -i ./input.css -o ./dist/output.css --watch
# Production:
NODE_ENV=production npx tailwindcss -i ./input.css -o ./dist/output.css --minify`;

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-6">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold tracking-wide"
          style={{ backgroundColor: '#EEE7FF', color: '#5B3ABF' }}
        >
          Getting Started
        </span>
        <h1 className="mt-3 text-2xl font-bold text-brand-45">Installation</h1>
        <p className="mt-2 text-sm text-slate-600">
          Set up this project locally, or integrate our Tailwind-powered UI snippets into a fresh app. Copy commands and config directly.
        </p>
      </header>

      <div className="space-y-8">
        {/* Prerequisites */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Prerequisites</h2>
          <p className="mt-1 text-sm text-slate-600">Ensure the following tools are installed:</p>
          <div className="mt-3">
            <CodeBlock code={prerequisites} language="javascript" title="Checklist" />
          </div>
        </section>

        {/* Clone & run this project */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Run this project locally</h2>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            <li>Clone the repository and install dependencies.</li>
            <li>Start the development server.</li>
          </ol>
          <div className="mt-3">
            <CodeBlock code={cloneRun} language="javascript" title="Commands" />
          </div>
        </section>

        {/* Tailwind setup for a fresh app */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Tailwind CSS setup (fresh app)</h2>
          <p className="mt-1 text-sm text-slate-600">
            Add Tailwind to an existing React/Vite/Next project with PostCSS + Autoprefixer.
          </p>

          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <CodeBlock code={tailwindInstall} language="javascript" title="Install & Initialize" />
              <CodeBlock code={postcssConfig} language="javascript" title="postcss.config.js" />
            </div>
            <div className="space-y-3">
              <CodeBlock code={tailwindConfig} language="javascript" title="tailwind.config.js" />
              <CodeBlock code={cssDirectives} language="css" title="index.css (entry)" />
            </div>
          </div>

          <div className="mt-3">
            <CodeBlock code={importCss} language="javascript" title="Import CSS in app entry" />
          </div>
        </section>

        {/* Using catalog snippets */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Use the catalog snippets</h2>
          <p className="mt-1 text-sm text-slate-600">
            Copy HTML from the catalog and paste into your component. If minimal JS is included, attach it using React handlers or a useEffect.
          </p>
          <div className="mt-3">
            <CodeBlock code={snippetsUsage} language="javascript" title="Example (React)" />
          </div>
          <div className="mt-3 text-xs text-slate-600">
            Tip: Ensure your tailwind.config.js content globs include the folder where you paste the snippet (e.g., ./src/components/**/*).
          </div>
        </section>

        {/* Standalone options */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Standalone options</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Tailwind Play CDN (quick try)</h3>
              <p className="mt-1 text-sm text-slate-600">Great for prototyping (not optimized for production).</p>
              <div className="mt-3">
                <CodeBlock code={standaloneCdn} language="html" title="index.html (CDN)" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Tailwind CLI (no framework)</h3>
              <p className="mt-1 text-sm text-slate-600">Build an optimized CSS file and link it in your HTML.</p>
              <div className="mt-3">
                <CodeBlock code={cliBuild} language="javascript" title="CLI steps" />
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting pointer */}
        <section className="rounded-lg border border-gray-200 bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <span className="preview-accent-dot mt-1.5" aria-hidden="true" />
            <p className="text-sm text-slate-700">
              Having issues with missing styles in production or gradients not rendering? Double-check your tailwind.config.js content globs and consider copying the helper utilities from this app&apos;s src/index.css.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex flex-wrap gap-3">
          <a href="/components" className="btn-brand-45" aria-label="Browse Components">
            Browse Components
          </a>
          <a href="/catalog" className="btn-ghost" aria-label="Open Catalog">
            Open Catalog
          </a>
        </div>
      </div>
    </div>
  );
}
