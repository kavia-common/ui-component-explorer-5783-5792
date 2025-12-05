import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import {
  GridDemo, ContainerDemo, SectionDemo, CardDemo, TypographyDemo, ListsDemo, MediaDemo,
  ButtonsDemo, BadgesDemo, AvatarsDemo, AlertsDemo, TagsDemo, ChipsDemo, TooltipsDemo,
  NavbarDemo, SidebarDemo, TabsDemo, BreadcrumbsDemo, PaginationDemo, StepsDemo,
  InputDemo, SelectDemo, CheckboxDemo, RadioDemo, TextAreaDemo, SwitchDemo,
  DatePickerDemo, FileUploadDemo, RangeSliderDemo, AutocompleteDemo, ValidationDemo,
  SimpleTableDemo, SortableTableDemo, DataTableDemo, TableFilteringDemo
} from '../demos/DemoComponents';
import CodeBlock from '../demos/CodeBlock';
import { getDemoForItem } from '../demos/registry';

// PUBLIC_INTERFACE
export default function ComponentsListPage() {
  /**
   * Components view: breadcrumbs at top; clean stacked sections for each category and item,
   * each item shows interactive preview and minimal code with copy. Supports anchor/query
   * navigation (?section=...&item=...) and hash (#id). No cards—just white surfaces.
   */
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Sidebar groups and items (mirror Sidebar)
  const sidebarStructure = [
    { title: 'Getting Started', items: ['Introduction','Installation','Quick Start','Theming','Dark Mode'] },
    { title: 'Layout & Content', items: ['Grid','Container','Section','Card','Typography','Lists','Media'] },
    { title: 'Base Components', items: ['Buttons','Badges','Avatars','Alerts','Tags','Chips','Tooltips'] },
    { title: 'Navigations', items: ['Navbar','Sidebar','Tabs','Breadcrumbs','Pagination','Steps'] },
    { title: 'Basic Forms', items: ['Inputs','Select','Checkbox','Radio','Text Area','Switch'] },
    { title: 'Advanced Forms', items: ['Date Picker','File Upload','Range Slider','Autocomplete','Validation'] },
    { title: 'Tables', items: ['Simple Table','Sortable Table','Data Table','Pagination','Filtering'] },
  ];

  // Map item name -> React component renderer
  const componentMap = {
    // Getting Started minimal surfaces
    'Introduction': () => <div className="text-sm text-gray-600">Welcome to the library. Use the sidebar to explore components.</div>,
    'Installation': () => <div className="text-sm text-gray-600">Install Tailwind and React as usual. This demo uses CRA + Tailwind.</div>,
    'Quick Start': () => <div className="text-sm text-gray-600">Copy any snippet and paste into your component.</div>,
    'Theming': () => {
      const [mode,setMode] = useState(document.documentElement.classList.contains('dark')?'dark':'light');
      const toggle = () => {
        const next = mode==='light'?'dark':'light';
        setMode(next);
        const root=document.documentElement;
        if(next==='dark') root.classList.add('dark'); else root.classList.remove('dark');
      };
      return <button onClick={toggle} className="px-3 py-2 rounded-lg border text-sm">Switch to {mode==='light'?'dark':'light'}</button>;
    },
    'Dark Mode': () => <div className="p-4 rounded-lg border bg-white dark:bg-neutral-900 text-sm text-gray-700 dark:text-gray-200">Surface adapts in dark mode.</div>,

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

  // Registry for code strings
  const codeFor = (name) => {
    const entry = getDemoForItem(name);
    return entry?.code || '// No code available';
  };

  // Refs to support anchor scroll
  const itemRefs = useRef({});

  // Anchor/query navigation
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    const qpItem = searchParams.get('item');
    const qpSection = searchParams.get('section');
    let targetId = hash;

    if (!targetId && qpItem) {
      const id = makeAnchorId(qpSection || '', qpItem);
      targetId = id;
    }
    if (targetId && itemRefs.current[targetId]?.current) {
      itemRefs.current[targetId].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const el = itemRefs.current[targetId].current.querySelector('h3');
      el?.focus?.();
    }
  }, [location.hash, searchParams]);

  // Breadcrumbs at the top
  const Breadcrumbs = () => (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-slate-600">
        <li><Link to="/" className="hover:underline text-slate-600">Home</Link></li>
        <li aria-hidden="true" className="text-slate-400">/</li>
        <li className="text-slate-700 font-medium">Components</li>
      </ol>
    </nav>
  );

  return (
    <div className="py-2">
      <Breadcrumbs />
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">All Components</h1>
        <button
          className="btn-ghost"
          onClick={() => navigate('/components', { replace: true })}
          title="Reset filters"
        >
          Reset view
        </button>
      </div>

      {/* Stacked groups with section headings; no outer cards for a clean layout */}
      <div className="space-y-10">
        {sidebarStructure.map(({ title, items }) => (
          <section key={title} aria-labelledby={makeAnchorId(title, '') + '-heading'}>
            <h2 id={makeAnchorId(title, '') + '-heading'} className="text-lg font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </h2>

            <div className="space-y-8">
              {items.map((name) => {
                const anchorId = makeAnchorId(title, name);
                if (!itemRefs.current[anchorId]) itemRefs.current[anchorId] = React.createRef();

                const Comp = componentMap[name] || (() => <div className="text-sm text-gray-500">No preview available.</div>);
                const code = codeFor(name);

                return (
                  <article
                    key={anchorId}
                    ref={itemRefs.current[anchorId]}
                    id={anchorId}
                    aria-labelledby={`${anchorId}-title`}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h3
                        tabIndex={-1}
                        id={`${anchorId}-title`}
                        className="text-base font-semibold text-gray-900 dark:text-white"
                      >
                        {name}
                      </h3>
                      <a href={`#${anchorId}`} className="text-xs text-gray-500 hover:underline" aria-label={`Link to ${name}`}>
                        #{name.replace(/\s+/g,'-').toLowerCase()}
                      </a>
                    </div>

                    {/* Preview container */}
                    <div className="flex items-center justify-start min-h-[120px] rounded-lg border border-dashed border-gray-300 dark:border-white/10 bg-white dark:bg-neutral-900 px-4 py-6">
                      <Comp />
                    </div>

                    {/* Code block */}
                    <CodeBlock code={code} />
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function makeAnchorId(section, item) {
  const s = (section || '').trim().toLowerCase().replace(/\s+/g, '-');
  const i = (item || '').trim().toLowerCase().replace(/\s+/g, '-');
  return [s, i].filter(Boolean).join('__');
}
