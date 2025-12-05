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

  // Installation content: concise CRA + Tailwind steps with copy buttons
  const InstallationContent = () => (
    <div className="space-y-6">
      <p className="text-sm text-gray-700 dark:text-gray-200">
        Set up a Create React App project with Tailwind CSS. This project already uses CRA + Tailwind.
      </p>

      <Step
        title="1) Install dependencies"
        code={`# Using npm
npx create-react-app my-app
cd my-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`}
      />

      <Step
        title="2) Configure tailwind.config.js"
        code={`// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx}'],
  theme: { extend: {} },
  plugins: []
};`}
      />

      <Step
        title="3) Configure postcss.config.js"
        code={`// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`}
      />

      <Step
        title="4) Import Tailwind directives in src/index.css"
        code={`/* src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;`}
      />

      <Step
        title="5) Add Tailwind classes"
        code={`// Example: src/App.js
export default function App() {
  return (
    <div className="p-6">
      <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        Hello Tailwind
      </button>
    </div>
  );
}`}
      />

      <div className="text-xs text-gray-500">
        Tip: For dark mode, toggle the "dark" class on document.documentElement.
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
            <span className="preview-accent-dot" aria-hidden="true"></span>
            {selectedItem}
          </h2>
          <div className="flex items-center gap-3">
            <TabToggle value={view} onChange={setView} idBase="item-view" />
          </div>
        </div>

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

function decodeRouteItem(routeId) {
  // Convert "simple-table" to "Simple Table" etc.
  const words = String(routeId).split('-').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1));
  return words.join(' ');
}
