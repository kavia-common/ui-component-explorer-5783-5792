import React from 'react';
import CodeBlock from '../demos/CodeBlock';

/**
 * PUBLIC_INTERFACE
 * InstallationPage: Minimal, canonical setup guide for this app.
 * Route: /getting-started/installation (single source of truth)
 * Ocean Professional styling is preserved (brand 45deg gradient, clean cards).
 */
export default function InstallationPage() {
  const envKeys = `REACT_APP_API_BASE=
REACT_APP_BACKEND_URL=
REACT_APP_FRONTEND_URL=
REACT_APP_WS_URL=
REACT_APP_NODE_ENV=development
REACT_APP_NEXT_TELEMETRY_DISABLED=1
REACT_APP_ENABLE_SOURCE_MAPS=true
REACT_APP_PORT=3000
REACT_APP_TRUST_PROXY=false
REACT_APP_LOG_LEVEL=info
REACT_APP_HEALTHCHECK_PATH=/healthz
REACT_APP_FEATURE_FLAGS=
REACT_APP_EXPERIMENTS_ENABLED=false`;

  const prereq = `- Node.js 16+ (LTS recommended)
- npm 7+ (ships with Node)
`;

  const installDeps = `npm install`;

  const startApp = `npm start
# Runs at http://localhost:3000`;

  // Tailwind CSS CLI minimal subset for this app (only what's strictly needed)
  const twCliInstall = `npm install -D tailwindcss @tailwindcss/cli`;

  const twCssImport = `/* main CSS (already present in this app at src/index.css) */
@import "tailwindcss";`;

  const twCliWatch = `npx @tailwindcss/cli -i ./src/index.css -o ./src/index.output.css --watch
# Then include src/index.output.css if you are NOT using the built-in PostCSS setup. 
# (This project already ships with Tailwind configured via PostCSS.)`;

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-6">
        <span
          className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold tracking-wide"
          style={{ backgroundColor: '#EEE7FF', color: '#5B3ABF' }}
        >
          Getting Started
        </span>
        <h1
          className="mt-3 text-2xl font-bold"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Installation
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Follow these concise steps to set up and preview this app locally.
        </p>
      </header>

      <div className="space-y-8">
        {/* 1) Prerequisites */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">1) Prerequisites</h2>
          <p className="mt-1 text-sm text-slate-600">
            Make sure the following are installed on your machine.
          </p>
          <div className="mt-3">
            <CodeBlock language="bash" title="Checklist" code={prereq} />
          </div>
        </section>

        {/* 2) Install dependencies */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">2) Install dependencies</h2>
          <p className="mt-1 text-sm text-slate-600">From the app directory.</p>
          <div className="mt-3">
            <CodeBlock language="bash" title="Terminal" code={installDeps} />
          </div>
        </section>

        {/* 3) Environment variables overview */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">3) Environment variables</h2>
          <p className="mt-1 text-sm text-slate-600">
            Create a .env file at frontend_main with the keys below. For local
            preview, you can leave them unset (blank) or at the defaults shown unless your setup requires otherwise.
          </p>
          <div className="mt-3">
            <CodeBlock language="bash" title=".env keys" code={envKeys} />
          </div>
          <p className="mt-2 text-xs text-slate-600">
            Do not commit secrets. Map production values in your hosting
            provider.
          </p>
        </section>

        {/* 4) Start the app preview */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">4) Start the app preview</h2>
          <p className="mt-1 text-sm text-slate-600">
            Launch the development server.
          </p>
          <div className="mt-3">
            <CodeBlock language="bash" title="Terminal" code={startApp} />
          </div>
        </section>

        {/* 5) Tailwind CSS CLI minimal quick start */}
        <section className="card p-5">
          <h2 className="text-lg font-semibold">
            5) Tailwind CSS CLI quick start (minimal)
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Tailwind is already integrated in this project. If you need a bare-minimum CLI flow, use these:
          </p>
          <div className="mt-3 grid gap-4 md:grid-cols-2">
            <CodeBlock language="bash" title="Install" code={twCliInstall} />
            <CodeBlock language="css" title="Main CSS import" code={twCssImport} />
          </div>
          <div className="mt-3">
            <CodeBlock language="bash" title="Build/Watch" code={twCliWatch} />
          </div>
        </section>

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
