import React, { useEffect, useMemo, useRef, useState } from 'react';
import componentsData from '../data/components.json';
import { Link, useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('javascript', js);

// Simple preview renderer to match items in data
function PreviewRenderer({ preview }) {
  if (preview === 'button') {
    return (
      <button className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-blue-600 transition-colors">
        Primary Button
      </button>
    );
  }
  if (preview === 'card') {
    return (
      <div className="p-4 rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 w-full max-w-sm">
        <h4 className="font-semibold">Card Title</h4>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Card content goes here.</p>
        <div className="mt-3">
          <button className="btn-primary">Action</button>
        </div>
      </div>
    );
  }
  if (preview === 'badge') {
    return <span className="badge">New</span>;
  }
  return <div className="text-gray-500">No preview available.</div>;
}

// PUBLIC_INTERFACE
export default function ComponentsListPage() {
  /** Components view: breadcrumb + grouped stacked list with preview and code, copy-to-clipboard, and anchor/query scroll support */
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Map categories from data; keep ordering by category name then item order within data
  const groups = useMemo(() => {
    const map = new Map();
    for (const item of componentsData) {
      if (!map.has(item.category)) map.set(item.category, []);
      map.get(item.category).push(item);
    }
    // preserve insertion order; optionally sort items by name
    const result = Array.from(map.entries()).map(([category, items]) => ({
      category,
      items: items,
    }));
    return result;
  }, []);

  const [copiedId, setCopiedId] = useState(null);
  const itemRefs = useRef({}); // id -> ref

  // Copy code
  const onCopy = async (code, id) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId((c) => (c === id ? null : c)), 1600);
    } catch {
      // silent
    }
  };

  // Scroll handling for anchors (/components#id) or query (?item=... or ?id=...)
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    const qpId = searchParams.get('id');
    const qpItem = searchParams.get('item'); // item name
    const qpSection = searchParams.get('section');

    let targetId = hash || qpId;

    // If item name was provided, try to locate matching data item by name and optional section
    if (!targetId && qpItem) {
      const nameLower = decodeURIComponent(qpItem).toLowerCase();
      const section = qpSection ? decodeURIComponent(qpSection) : null;
      const match = componentsData.find(
        (c) =>
          c.name.toLowerCase().includes(nameLower) &&
          (section ? c.category === section : true)
      );
      if (match) targetId = match.id;
    }

    if (targetId && itemRefs.current[targetId]?.current) {
      itemRefs.current[targetId].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Also focus the heading for a11y
      const el = itemRefs.current[targetId].current.querySelector('h3');
      if (el) el.focus?.();
    }
    // do not update deps with navigate to avoid loops
  }, [location.hash, searchParams]);

  // Breadcrumbs
  const Breadcrumbs = () => (
    <nav className="mb-6" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm text-slate-600">
        <li>
          <Link to="/" className="hover:underline text-slate-600">Home</Link>
        </li>
        <li aria-hidden="true" className="text-slate-400">/</li>
        <li className="text-slate-700 font-medium">Components</li>
      </ol>
    </nav>
  );

  // Theme-aware syntax style
  const syntaxStyle = document.documentElement.classList.contains('dark')
    ? atomOneDark
    : atomOneLight;

  return (
    <div className="py-2">
      <Breadcrumbs />
      {/* Optional quick intro row */}
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900 dark:text-white">All Components</h1>
        <button
          className="btn-ghost"
          onClick={() => {
            // clear to base /components without queries or hash
            navigate('/components', { replace: true });
          }}
          title="Reset filters"
        >
          Reset view
        </button>
      </div>

      {/* Stacked groups with section headings */}
      <div className="space-y-10">
        {groups.map(({ category, items }) => (
          <section key={category} aria-labelledby={`heading-${category}`}>
            <h2
              id={`heading-${category}`}
              className="text-lg font-bold text-gray-900 dark:text-white mb-3"
            >
              {category}
            </h2>

            <div className="space-y-6">
              {items.map((item) => {
                // prepare ref for anchor scroll
                if (!itemRefs.current[item.id]) {
                  itemRefs.current[item.id] = React.createRef();
                }

                return (
                  <article
                    key={item.id}
                    ref={itemRefs.current[item.id]}
                    id={item.id}
                    className="card overflow-hidden"
                    aria-labelledby={`item-${item.id}-title`}
                  >
                    {/* Header with name and quick meta */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-gray-200 dark:border-white/10">
                      <div className="min-w-0">
                        <h3
                          tabIndex={-1}
                          id={`item-${item.id}-title`}
                          className="text-base font-semibold text-gray-900 dark:text-white"
                        >
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                      <div className="ml-4 shrink-0">
                        <a
                          href={`/components/${item.id}`}
                          className="btn-ghost"
                          aria-label={`Open details for ${item.name}`}
                        >
                          Details →
                        </a>
                      </div>
                    </div>

                    {/* Body: preview top, code bottom */}
                    <div className="p-4 space-y-4">
                      <div className="flex items-center justify-center min-h-[180px] rounded-lg border border-dashed border-gray-300 dark:border-white/10 bg-white dark:bg-neutral-900">
                        <PreviewRenderer preview={item.preview} />
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Code</span>
                          <button
                            onClick={() => onCopy(item.code, item.id)}
                            className="btn-ghost"
                            aria-live="polite"
                            aria-label={`Copy code for ${item.name}`}
                          >
                            {copiedId === item.id ? 'Copied ✓' : 'Copy'}
                          </button>
                        </div>
                        <div className="overflow-auto rounded-lg">
                          <SyntaxHighlighter
                            language="javascript"
                            style={syntaxStyle}
                            customStyle={{ margin: 0, borderRadius: '0.5rem', fontSize: '0.85rem' }}
                            wrapLongLines
                          >
                            {item.code}
                          </SyntaxHighlighter>
                        </div>
                      </div>
                    </div>
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
