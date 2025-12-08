import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import catalog from '../data/catalog.json';
import CodeBlock from '../demos/CodeBlock';

/**
 * PUBLIC_INTERFACE
 * ComponentCatalogDetail
 * - Deep link detail page for catalog items: /components/:id
 * - Renders live Preview and tabs for HTML and React (JSX) with exact copy.
 * - Keeps layout consistent with Navbar/Sidebar shell and shows breadcrumbs via App.
 */
export default function ComponentCatalogDetail() {
  /** Single component detail view for catalog items (deep link) */
  const { id } = useParams();
  const nav = useNavigate();
  const list = Array.isArray(catalog?.components) ? catalog.components : [];
  const item = list.find((c) => String(c.id) === String(id));

  if (!item) {
    return (
      <div className="card p-6">
        <div className="text-sm text-gray-600">Component not found.</div>
        <button className="btn-primary mt-4" onClick={() => nav('/components')}>Back to catalog</button>
      </div>
    );
  }

  // Escape labels that may contain angle brackets to avoid any unexpected DOM issues
  const safeLabel = (s) => String(s ?? '').replace(/</g, '‹').replace(/>/g, '›');

  const [tab, setTab] = React.useState('Preview'); // Preview | HTML | React

  // Build a contextual "Sub-variants" list for quick navigation among related items
  const related = getRelatedVariants(list, item);

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="mb-1">
        <ol className="breadcrumbs flex items-center gap-2">
          <li><Link to="/components" className="hover:underline">Components</Link></li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700 font-medium">{safeLabel(item.name)}</li>
        </ol>
      </nav>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">{safeLabel(item.name)}</h1>
          <div className="text-xs text-gray-500 mt-1">{safeLabel(item.category)} • {(item.tags || []).join(', ')}</div>
        </div>
        <button className="btn-ghost" onClick={() => nav('/components')} aria-label="Back">← Back</button>
      </div>

      {related.length > 0 && (
        <div className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-800">Sub-variants</div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {related.map(r => (
              <Link
                key={r.id}
                to={`/components/${encodeURIComponent(r.id)}`}
                className={`inline-flex items-center rounded-md border px-2.5 py-1.5 text-xs sm:text-sm transition ${
                  r.id === item.id
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white hover:bg-gray-50 text-gray-800'
                }`}
              >
                {safeLabel(r.name)}
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {['Preview','HTML','React'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={'px-3 py-1.5 text-sm rounded-md border ' + (tab===t ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-50')}
            aria-pressed={tab===t}
          >
            {t}
          </button>
        ))}
      </div>

      <div>
        {tab === 'Preview' && (
          <div className="preview-surface px-5 py-6">
            <div className="preview-accent-bar" aria-hidden="true" />
            <div className="pt-4" dangerouslySetInnerHTML={{ __html: String(item.html ?? '') }} />
          </div>
        )}
        {tab === 'HTML' && <CodeBlock code={String(item.html ?? '')} language="html" title="HTML" />}
        {tab === 'React' && <CodeBlock code={String(item.jsx ?? '')} language="javascript" title="React (JSX)" />}
      </div>
    </div>
  );
}

/**
 * Derive related sub-variants based on a heuristic:
 * - Items that share the same category and whose names start with the same leading word
 *   before the first " — " or space (e.g., "Layout Splitter", "Typography", "Images", "Links", "Dividers", "KBD", "Custom Scrollbar").
 * - Keeps current item included and sorts by name.
 */
function getRelatedVariants(all, current) {
  try {
    const cat = current.category;
    const base = String(current.name || '')
      .split('—')[0]
      .split('-')[0]
      .split(':')[0]
      .trim()
      .toLowerCase();

    const sameCat = all.filter(x => x.category === cat);

    const isRelated = (name) => {
      const head = String(name || '')
        .split('—')[0]
        .split('-')[0]
        .split(':')[0]
        .trim()
        .toLowerCase();
      return head === base;
    };

    const rel = sameCat.filter(x => isRelated(x.name));
    // Deduplicate by id and sort by name
    const uniq = Array.from(new Map(rel.map(x => [x.id, x])).values());
    return uniq.sort((a, b) => String(a.name).localeCompare(String(b.name)));
  } catch {
    return [];
  }
}
