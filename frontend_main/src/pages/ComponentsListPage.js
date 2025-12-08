import React, { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import {
  GridDemo, ContainerDemo, SectionDemo, CardDemo, TypographyDemo, ListsDemo, MediaDemo,
  ButtonsDemo, BadgesDemo, AvatarsDemo, AlertsDemo, TagsDemo, ChipsDemo, TooltipsDemo,
  NavbarDemo, SidebarDemo, TabsDemo, BreadcrumbsDemo, PaginationDemo, StepsDemo,
  InputDemo, SelectDemo, CheckboxDemo, RadioDemo, TextAreaDemo, SwitchDemo,
  DatePickerDemo, FileUploadDemo, RangeSliderDemo, AutocompleteDemo, ValidationDemo,
  SimpleTableDemo, SortableTableDemo, DataTableDemo, TableFilteringDemo
} from '../demos/DemoComponents';
import CodeBlock from '../demos/CodeBlock';
import { CodeTabs, TabToggle } from '../demos/PreviewCodeToggle';
import { getDemoForItem } from '../demos/registry';

 // PUBLIC_INTERFACE
export default function ComponentsListPage() {
  /**
   * Components view (single-item mode) with Preview/Code toggle and HTML/JS sub-tabs in Code view.
   * Breadcrumbs preserved; selection via /components/:id or ?item=...
   * This page renders inside WithSidebarLayout; avoid full-width wrappers that could hide the sidebar.
   */
  const { id: routeId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Normalize selected item name from route param or query param
  const selectedItem = useMemo(() => {
    const qp = searchParams.get('item');
    if (routeId) return decodeRouteItem(routeId);
    return qp || '';
  }, [routeId, searchParams]);

  // Map item name -> Demo component
  const componentMap = {
    // Layout & Content
    'Grid': GridDemo,
    'Container': ContainerDemo,
    'Section': SectionDemo,
    'Card': CardDemo,
    'Typography': TypographyDemo,
    'Lists': ListsDemo,
    'Media': MediaDemo,
    // Base Components
    'Buttons': ButtonsDemo,
    'Badges': BadgesDemo,
    'Avatars': AvatarsDemo,
    'Alerts': AlertsDemo,
    'Tags': TagsDemo,
    'Chips': ChipsDemo,
    'Tooltips': TooltipsDemo,
    // Navigations
    'Navbar': NavbarDemo,
    'Sidebar': SidebarDemo,
    'Tabs': TabsDemo,
    'Breadcrumbs': BreadcrumbsDemo,
    'Pagination': PaginationDemo,
    'Steps': StepsDemo,
    // Basic Forms
    'Inputs': InputDemo,
    'Select': SelectDemo,
    'Checkbox': CheckboxDemo,
    'Radio': RadioDemo,
    'Text Area': TextAreaDemo,
    'Switch': SwitchDemo,
    // Advanced Forms
    'Date Picker': DatePickerDemo,
    'File Upload': FileUploadDemo,
    'Range Slider': RangeSliderDemo,
    'Autocomplete': AutocompleteDemo,
    'Validation': ValidationDemo,
    // Tables
    'Simple Table': SimpleTableDemo,
    'Sortable Table': SortableTableDemo,
    'Data Table': DataTableDemo,
    'Filtering': TableFilteringDemo,
  };

  // Breadcrumbs reflect current selection
  const Breadcrumbs = () => (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="breadcrumbs flex items-center gap-2">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li aria-hidden="true" className="text-slate-400">/</li>
        <li><Link to="/components" className="hover:underline">Components</Link></li>
        {selectedItem ? (
          <>
            <li aria-hidden="true" className="text-slate-400">/</li>
            <li className="text-slate-700 font-medium">{selectedItem}</li>
          </>
        ) : null}
      </ol>
    </nav>
  );

  // Installation content: CLI-first Tailwind setup with commands, configs, and troubleshooting
  const InstallationContent = () => (
    <div className="space-y-6">
      <p className="text-sm text-gray-700 dark:text-gray-200">
        Get identical styling by setting up Tailwind via the CLI or using your existing bundler (Vite/CRA/Next). This app already uses CRA + Tailwind, but the steps below work for any project.
      </p>

      <section aria-labelledby="cli-setup">
        <h3 id="cli-setup" className="text-base font-semibold text-gray-900 dark:text-white">Option 1 — CLI-first (standalone or any framework)</h3>
        <Step
          title="1) Initialize project and install Tailwind"
          code={`# Initialize (if needed)
npm init -y

# Install Tailwind + PostCSS + Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Create configs
npx tailwindcss init -p`}
        />
        <Step
          title="2) Tailwind config with correct content globs"
          code={`// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './*.html',
    './snippets/**/*.{html,js}',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#F59E0B',
        error: '#EF4444'
      },
      boxShadow: {
        soft: '0 10px 25px -10px rgba(0,0,0,0.15)'
      }
    }
  },
  plugins: []
};`}
        />
        <Step
          title="3) PostCSS config"
          code={`// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`}
        />
        <Step
          title="4) Create input CSS with Tailwind directives"
          code={`/* input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Optional: custom utilities used in snippets */
.bg-navbar-gradient{ background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); }
.btn-brand-45{ display:inline-flex; align-items:center; justify-content:center; font-weight:600; color:white; border-radius:0.5rem; background: linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%); padding:0.625rem 1rem; }`}
        />
        <Step
          title="5) Build CSS (watch or production)"
          code={`# Dev watch
npx tailwindcss -i ./input.css -o ./dist/output.css --watch

# Production (purged/minified)
NODE_ENV=production npx tailwindcss -i ./input.css -o ./dist/output.css --minify`}
        />
        <Step
          title="6) Reference CSS and paste HTML/JS"
          code={`<!-- index.html -->
<link href="/dist/output.css" rel="stylesheet" />

<!-- Paste snippet HTML -->
<div class="p-6">
  <button class="btn-brand-45">Action</button>
</div>

<!-- Paste snippet JS after HTML so elements exist -->
<script>
  document.querySelector('.btn-brand-45')?.addEventListener('click', () => alert('Clicked!'));
</script>`}
        />
      </section>

      <section aria-labelledby="bundler-setup">
        <h3 id="bundler-setup" className="text-base font-semibold text-gray-900 dark:text-white">Option 2 — Bundler (Vite/CRA/Next)</h3>
        <Step
          title="1) Install and init"
          code={`# Install Tailwind + PostCSS + Autoprefixer
npm install -D tailwindcss postcss autoprefixer

# Create configs
npx tailwindcss init -p`}
        />
        <Step
          title="2) tailwind.config.js (example)"
          code={`// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: { extend: {} },
  plugins: []
};`}
        />
        <Step
          title="3) postcss.config.js"
          code={`// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`}
        />
        <Step
          title="4) Add Tailwind directives to your CSS entry"
          code={`/* src/index.css (or styles/globals.css in Next) */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
        />
        <Step
          title="5) Import CSS in your app entry"
          code={`// React (Vite/CRA)
import './index.css';

// Next.js: import in pages/_app.(js|tsx)
import '../styles/globals.css';`}
        />
        <Step
          title="6) Paste snippet HTML (JSX) + tiny JS"
          code={`// Example React component
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
}`}
        />
        <Step
          title="7) Run or build"
          code={`# Vite
npm run dev
npm run build

# CRA
npm start
npm run build

# Next
npm run dev
npm run build`}
        />
      </section>

      <section aria-labelledby="troubleshooting">
        <h3 id="troubleshooting" className="text-base font-semibold text-gray-900 dark:text-white">Troubleshooting checklist</h3>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
          <ul className="list-disc pl-5 space-y-1">
            <li>Content globs include all folders where your snippets live (e.g., <code>./src/**/*.{`{`}js,jsx,ts,tsx{`}`}</code>, <code>./*.html</code>, <code>./snippets/**/*.{`{`}html,js{`}`}</code>).</li>
            <li>CSS entry has Tailwind directives: <code>@tailwind base;</code> <code>@tailwind components;</code> <code>@tailwind utilities;</code>.</li>
            <li>Built CSS is actually linked/imported (bundler import or <code>&lt;link href="/dist/output.css" rel="stylesheet" /&gt;</code>).</li>
            <li>Arbitrary utilities (e.g., <code>bg-[linear-gradient(...)]</code> or <code>bg-[#123456]</code>) exist in files matched by your content globs.</li>
            <li>For precise gradients/angles, use a small custom class (e.g., <code>.bg-navbar-gradient</code>) if arbitrary values are stripped by tooling.</li>
            <li>Dark mode: set <code>darkMode: 'class'</code> and toggle <code>document.documentElement.classList.add('dark')</code> to enable <code>dark:</code> variants.</li>
            <li>If styles work in dev but not prod, ensure <code>NODE_ENV=production</code> and verify content globs (purge may be removing classes).</li>
            <li>Avoid scanning large/unrelated folders; never include <code>node_modules</code> in content globs.</li>
          </ul>
        </div>
        <div className="text-xs text-gray-500 mt-2">
          Tip: If spacing/colors look off, copy any custom utilities (like <code>.btn-brand-45</code>) used by the snippet into your CSS entry.
        </div>
      </section>

      <div className="text-xs text-gray-500">
        For quick experiments without a build step, you can also use the Tailwind Play CDN in a standalone HTML file.
      </div>
    </div>
  );

  function Step({ title, code }) {
    const [copied, setCopied] = useState(false);
    const onCopy = async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch { /* no-op */ }
    };
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onCopy} className="inline-flex items-center gap-1 h-9 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60" aria-live="polite">
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
        </div>
        <CodeBlock code={code} language="javascript" title="Shell/JS" />
      </div>
    );
  }

  const [view, setView] = useState('Preview');

  // Render the selected item or prompt
  const renderSelected = () => {
    if (!selectedItem) {
      return (
        <div className="p-6 preview-surface">
          <div className="preview-accent-bar" aria-hidden="true"></div>
          <div className="px-2 pt-3 pb-1 text-sm text-gray-700">
            Select an item from the sidebar to view its preview and code.
          </div>
        </div>
      );
    }

    if (selectedItem === 'Installation') {
      return (
        <article className="space-y-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">{selectedItem}</h2>
          <InstallationContent />
        </article>
      );
    }

    const Comp = componentMap[selectedItem];
    const entry = getDemoForItem(selectedItem);

    if (!Comp || !entry) {
      return <div className="text-sm text-gray-500">No preview available for "{selectedItem}".</div>;
    }

    return (
      <article className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <span className="preview-accent-dot" aria-hidden="true"></span>
            <span className="text-brand-45">{selectedItem}</span>
          </h2>
          <div className="flex items-center gap-3">
            <TabToggle value={view} onChange={setView} idBase="item-view" />
          </div>
        </div>

        <DependenciesCallout entry={entry} />

        {view === 'Preview' ? (
          <div
            id="item-view-panel-preview"
            role="tabpanel"
            aria-labelledby="item-view-tab-preview"
            className="preview-surface px-5 py-6"
          >
            <div className="preview-accent-bar" aria-hidden="true"></div>
            <div className="pt-4">
              <Comp />
            </div>
          </div>
        ) : (
          <div
            id="item-view-panel-code"
            role="tabpanel"
            aria-labelledby="item-view-tab-code"
            className="space-y-2"
          >
            <CodeTabs
              html={entry.html || '<!-- No HTML available -->'}
              js={entry.js || '// No JS available'}
              renderBlock={({ code, language, title }) => (
                <CodeBlock code={code} language={language} title={title} />
              )}
              idBase="item-code-tabs"
            />
          </div>
        )}
      </article>
    );
  };

  return (
    <div className="py-2">
      <Breadcrumbs />
      {renderSelected()}
    </div>
  );
}

// Small callout panel that shows dependency requirements and install commands.
// Styled with white background, subtle border/shadow, and brand-accent heading.
function DependenciesCallout({ entry }) {
  const deps = entry?.dependencies || [];
  const note = entry?.dependencyNotes || '';
  const [copied, setCopied] = useState('');
  if (!Array.isArray(deps)) return null;

  const npmCmd = deps.length ? `npm install ${deps.join(' ')}` : 'npm install';
  const yarnCmd = deps.length ? `yarn add ${deps.join(' ')}` : 'yarn add';
  const pnpmCmd = deps.length ? `pnpm add ${deps.join(' ')}` : 'pnpm add';

  const copy = async (text, key) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(''), 1400);
    } catch {
      // no-op
    }
  };

  return (
    <section aria-labelledby="deps-title" className="bg-white border border-gray-200 rounded-xl shadow-sm">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 id="deps-title" className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full" style={{background: 'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)'}} aria-hidden="true"></span>
          {deps.length > 0 ? 'Requirements' : 'Dependencies'}
        </h3>
        {deps.length === 0 && (
          <span className="text-xs text-gray-500">No additional libraries required</span>
        )}
      </div>

      {deps.length > 0 ? (
        <div className="p-4 space-y-3">
          <div className="text-sm text-gray-700">
            This component relies on:
            <ul className="list-disc pl-5 mt-1">
              {deps.map((d) => (
                <li key={d}>
                  <code className="mono text-xs bg-slate-100 px-1.5 py-0.5 rounded border">{d}</code>
                </li>
              ))}
            </ul>
            {note ? <p className="mt-2 text-xs text-gray-600">{note}</p> : null}
          </div>

          <div className="grid sm:grid-cols-3 gap-3">
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-600">npm</div>
              <div className="flex items-center gap-2">
                <code className="mono text-[12px] bg-slate-50 border border-gray-200 rounded px-2 py-1 overflow-x-auto">{npmCmd}</code>
                <button
                  onClick={() => copy(npmCmd, 'npm')}
                  className="inline-flex items-center gap-1 h-8 px-2.5 rounded-lg text-xs text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  aria-label="Copy npm command"
                >
                  {copied === 'npm' ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-600">yarn</div>
              <div className="flex items-center gap-2">
                <code className="mono text-[12px] bg-slate-50 border border-gray-200 rounded px-2 py-1 overflow-x-auto">{yarnCmd}</code>
                <button
                  onClick={() => copy(yarnCmd, 'yarn')}
                  className="inline-flex items-center gap-1 h-8 px-2.5 rounded-lg text-xs text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  aria-label="Copy yarn command"
                >
                  {copied === 'yarn' ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>

            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-600">pnpm</div>
              <div className="flex items-center gap-2">
                <code className="mono text-[12px] bg-slate-50 border border-gray-200 rounded px-2 py-1 overflow-x-auto">{pnpmCmd}</code>
                <button
                  onClick={() => copy(pnpmCmd, 'pnpm')}
                  className="inline-flex items-center gap-1 h-8 px-2.5 rounded-lg text-xs text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  aria-label="Copy pnpm command"
                >
                  {copied === 'pnpm' ? 'Copied ✓' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function decodeRouteItem(routeId) {
  // Convert "simple-table" to "Simple Table" etc.
  const words = String(routeId).split('-').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1));
  return words.join(' ');
}
