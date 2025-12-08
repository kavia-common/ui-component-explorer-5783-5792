import React from 'react';
import CodeBlock from '../demos/CodeBlock';
import Breadcrumbs from '../components/Breadcrumbs';

/**
 * PUBLIC_INTERFACE
 * InstallationPage: Tailwind CSS setup guide so users can paste snippets and get identical rendering.
 * - Includes prerequisites; setup via PostCSS or Tailwind CLI; sample tailwind.config.js and postcss.config.js;
 *   index.css with @tailwind directives; brand gradient utilities used by the app; how to run the dev server;
 *   and a verification step with a sample snippet.
 * - Uses CodeBlock with copy-to-clipboard for every code sample.
 * - Preserves navbar/sidebar layout and Ocean Professional gradients.
 * - Breadcrumbs show Home > Getting Started > Installation.
 */
export default function InstallationPage() {
  // Content: prerequisites
  const prerequisites = `- Node.js 16+ (LTS recommended)
- npm 7+ (or yarn/pnpm)
- Git
- A modern browser
`;

  // Running this repository locally
  const cloneRun = `# 1) Clone this repository
git clone https://github.com/your-org/ui-component-explorer.git
cd ui-component-explorer/frontend_main

# 2) Install dependencies
npm install

# 3) Start the dev server
npm start
# App runs on http://localhost:3000
`;

  // Tailwind install (PostCSS workflow)
  const tailwindInstall = `# Install Tailwind CSS, PostCSS, and Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Initialize Tailwind and PostCSS configs
npx tailwindcss init -p
`;

  // postcss.config.js example
  const postcssConfig = `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;

  // tailwind.config.js example with content globs and theme extension hints
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
  plugins: [],
};`;

  // index.css directives and brand utilities used in this app
  const cssDirectives = `/* Tailwind layers */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Brand helpers used by this app (copy to ensure identical gradients/buttons) */
.bg-navbar-gradient { 
  background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%);
}

/* Brand background token for convenience (used by Navbar) */
.bg-brand-45 {
  background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%);
}

/* Primary gradient button used across pages */
.btn-brand-45 {
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 600; color: white; border-radius: 0.5rem;
  background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%);
  padding: 0.625rem 1rem;
}

/* Optional subtle surface and utility classes to match this app */
.card {
  background: #fff; border: 1px solid rgba(0,0,0,0.06);
  border-radius: 12px; box-shadow: 0 10px 25px -10px rgba(0,0,0,0.10);
}
.btn-ghost {
  display: inline-flex; align-items: center; justify-content: center;
  font-weight: 600; color: #111827; border-radius: 0.5rem; padding: 0.625rem 1rem;
  background: #ffffff; border: 1px solid rgba(0,0,0,0.08);
}
.preview-accent-dot {
  width: 10px; height: 10px; border-radius: 9999px;
  background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%);
}
`;

  // Entry import line
  const importCss = `// In your app entry file (e.g., src/index.js or src/main.jsx)
import './index.css';`;

  // Verification snippet to paste and compare appearance
  const verificationSnippet = `export default function VerifyTailwind() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Verification</h2>
      <div className="card p-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            If Tailwind and brand utilities are configured correctly, this card has a soft shadow, white surface, and rounded corners.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            The button on the right should display a purple-blue gradient background.
          </p>
        </div>
        <button className="btn-brand-45">Looks Good</button>
      </div>
      <div className="h-12 rounded bg-brand-45" />
    </div>
  );
}
`;

  // Tailwind CLI flow (no framework) for those who want a minimal setup
  const cliBuild = `# Tailwind CLI (no framework required)

# 1) Initialize a project and install Tailwind
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2) Create input.css with Tailwind directives
#   @tailwind base;
#   @tailwind components;
#   @tailwind utilities;

# 3) Configure content globs in tailwind.config.js
# content: ['./*.html', './snippets/**/*.{html,js}']

# 4) Build CSS
# Dev (watch):
npx tailwindcss -i ./input.css -o ./dist/output.css --watch
# Production:
NODE_ENV=production npx tailwindcss -i ./input.css -o ./dist/output.css --minify
`;

  // Quick CDN test option
  const standaloneCdn = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Snippet Playground</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- Tailwind Play CDN (for quick prototyping only) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: { extend: { colors: { primary: '#2563EB', secondary: '#F59E0B' } } },
      };
    </script>
    <style>
      .bg-brand-45 { background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); }
      .btn-brand-45 {
        display:inline-flex; align-items:center; justify-content:center; font-weight:600; color:white; border-radius:0.5rem;
        background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); padding:0.625rem 1rem;
      }
      .card { background:#fff; border:1px solid rgba(0,0,0,0.06); border-radius:12px; box-shadow:0 10px 25px -10px rgba(0,0,0,0.10); }
    </style>
  </head>
  <body class="bg-white">
    <div class="p-6 space-y-4">
      <h1 class="text-xl font-semibold text-gray-900">CDN Quick Test</h1>
      <div class="card p-4 flex items-center justify-between">
        <p class="text-sm text-gray-700">Gradient button should look branded</p>
        <button class="btn-brand-45">Action</button>
      </div>
      <div class="h-12 rounded bg-brand-45"></div>
    </div>
  </body>
</html>`;

  return (
    <div className="max-w-5xl mx-auto">
      {/* Breadcrumbs */}
      <Breadcrumbs />
      <header className="mb-6">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold tracking-wide"
          style={{ backgroundColor: '#EEE7FF', color: '#5B3ABF' }}
        >
          Getting Started
        </span>
        <h1 className="mt-3 text-2xl font-bold" style={{ backgroundImage: 'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
          Installation
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Set up Tailwind CSS so copied snippets render exactly like in this app. Choose PostCSS (recommended) or the Tailwind CLI.
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

        {/* Run this repository locally */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Run this project locally</h2>
          <ol className="mt-2 list-decimal pl-5 text-sm text-slate-700 space-y-1">
            <li>Clone the repository and install dependencies.</li>
            <li>Start the dev server.</li>
          </ol>
          <div className="mt-3">
            <CodeBlock code={cloneRun} language="javascript" title="Commands" />
          </div>
        </section>

        {/* Tailwind PostCSS setup */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Setup with PostCSS (recommended)</h2>
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
              <CodeBlock code={cssDirectives} language="css" title="index.css (Tailwind + brand utilities)" />
            </div>
          </div>
          <div className="mt-3">
            <CodeBlock code={importCss} language="javascript" title="Import CSS in app entry" />
          </div>
          <p className="mt-3 text-xs text-slate-600">
            Important: Ensure the <code>content</code> globs in <code>tailwind.config.js</code> include every folder where you paste snippets (for example <code>./src/components/**/*</code>), so Tailwind includes those classes in the build.
          </p>
        </section>

        {/* Verification */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Verification</h2>
          <p className="mt-1 text-sm text-slate-600">
            Create a component and paste the following code. You should see a white card with a soft shadow and a purple-blue gradient button, plus a gradient bar below.
          </p>
          <div className="mt-3">
            <CodeBlock code={verificationSnippet} language="javascript" title="VerifyTailwind.jsx" />
          </div>
        </section>

        {/* Standalone and CLI options */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">Alternative setups</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">Tailwind CLI (no framework)</h3>
              <p className="mt-1 text-sm text-slate-600">Build a CSS file and link it in your HTML.</p>
              <div className="mt-3">
                <CodeBlock code={cliBuild} language="javascript" title="CLI steps" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold">CDN quick test</h3>
              <p className="mt-1 text-sm text-slate-600">Use Tailwind Play CDN to prototype (not for production).</p>
              <div className="mt-3">
                <CodeBlock code={standaloneCdn} language="html" title="index.html (CDN test)" />
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="rounded-lg border border-gray-200 bg-slate-50 p-4">
          <div className="flex items-start gap-3">
            <span className="preview-accent-dot mt-1.5" aria-hidden="true" />
            <div className="text-sm text-slate-700">
              <p className="mb-1">
                Missing styles in production or gradients not rendering?
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Verify content globs in <code>tailwind.config.js</code> include all snippet locations.</li>
                <li>Copy the brand utilities from <code>index.css</code> to match gradients and buttons.</li>
                <li>If using Next.js, ensure <code>globals.css</code> includes the Tailwind directives and your utilities.</li>
              </ul>
            </div>
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
