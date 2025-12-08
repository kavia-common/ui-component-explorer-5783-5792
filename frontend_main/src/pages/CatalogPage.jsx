import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import catalog from '../data/catalog.json';
import CodeBlock from '../demos/CodeBlock';

/**
 * PUBLIC_INTERFACE
 * CatalogPage: Standalone catalog grid with local search/filter and inline detail panel.
 * This page is independent from any persistent Sidebar shell.
 */
export default function CatalogPage() {
  const [q, setQ] = React.useState('');
  const [cat, setCat] = React.useState('All');
  const [sel, setSel] = React.useState('');
  const location = useLocation();

  const categories = React.useMemo(() => {
    const cats = Array.isArray(catalog.categories) ? catalog.categories : [];
    return ['All', ...cats];
  }, []);

  const items = React.useMemo(() => {
    const list = Array.isArray(catalog?.components) ? catalog.components : [];
    const byCat = cat === 'All' ? list : list.filter(c => c.category === cat);
    if (!q) return byCat;
    const term = q.toLowerCase();
    return byCat.filter(c =>
      String(c.name || '').toLowerCase().includes(term) ||
      String(c.category || '').toLowerCase().includes(term) ||
      (Array.isArray(c.tags) ? c.tags.some(t => String(t).toLowerCase().includes(term)) : false)
    );
  }, [q, cat]);

  React.useEffect(() => {
    const selId = location && location.state && location.state.selectId;
    const list = Array.isArray(catalog?.components) ? catalog.components : [];
    if (selId && list.some(c => String(c.id) === String(selId))) {
      setSel(String(selId));
    }
  }, [location]);

  const selected = React.useMemo(() => {
    const list = Array.isArray(catalog?.components) ? catalog.components : [];
    return list.find(c => String(c.id) === String(sel)) || null;
  }, [sel]);

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="mb-1">
        <ol className="breadcrumbs flex items-center gap-2">
          <li><Link to="/components" className="hover:underline">Components</Link></li>
          {selected ? (
            <>
              <li aria-hidden="true" className="text-slate-400">/</li>
              <li className="text-slate-700 font-medium">{String(selected.name ?? '').replace(/</g, '‹').replace(/>/g, '›')}</li>
            </>
          ) : null}
        </ol>
      </nav>

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 items-center">
          <label className="text-sm text-gray-600">Category</label>
          <select
            value={cat}
            onChange={(e)=> setCat(e.target.value)}
            className="px-3 py-2 rounded-lg border text-sm"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e)=> setQ(e.target.value)}
            placeholder="Search components..."
            className="w-64 max-w-[70vw] px-3 py-2 rounded-lg border text-sm"
            aria-label="Search components"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map(item => (
          <button
            key={item.id}
            onClick={()=> setSel(String(item.id))}
            className="text-left card p-4 card-elevate"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{item.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{item.category}</div>
              </div>
              <span className="chevron-square" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
            <div className="mt-3 text-xs text-gray-500 line-clamp-2">
              {(item.tags || []).map(t => `#${t}`).join(' ')}
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <Detail
          key={selected.id}
          item={selected}
          onClose={()=> setSel('')}
        />
      ) : null}
    </div>
  );
}

function Detail({ item, onClose }) {
  const [tab, setTab] = React.useState('Preview'); // Preview | HTML | React
  const htmlRef = React.useRef(null);

  const Preview = () => {
    return (
      <div className="preview-surface px-5 py-6">
        <div className="preview-accent-bar" aria-hidden="true" />
        <div className="pt-4">
          <div
            ref={htmlRef}
            dangerouslySetInnerHTML={{ __html: String(item.html ?? '') }}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="card p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">{String(item.name ?? '').replace(/</g, '‹').replace(/>/g, '›')}</h2>
          <div className="text-xs text-gray-500 mt-1">{String(item.category ?? '').replace(/</g, '‹').replace(/>/g, '›')} • {(item.tags || []).join(', ')}</div>
        </div>
        <button className="btn-ghost" onClick={onClose} aria-label="Close">Close</button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        {['Preview','HTML','React'].map(t => (
          <button
            key={t}
            onClick={()=> setTab(t)}
            className={'px-3 py-1.5 text-sm rounded-md border ' + (tab===t ? 'bg-blue-600 text-white border-blue-600' : 'bg-white hover:bg-gray-50')}
            aria-pressed={tab===t}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tab === 'Preview' && <Preview />}

        {tab === 'HTML' && (
          <CodeBlock code={String(item.html ?? '')} language="html" title="HTML" />
        )}

        {tab === 'React' && (
          <CodeBlock code={String(item.jsx ?? '')} language="javascript" title="React (JSX)" />
        )}
      </div>

      {tab !== 'Preview' ? (
        <div className="mt-3 text-xs text-gray-500">
          Tip: Copy and paste directly into your Tailwind project. Ensure your Tailwind content globs include the file.
        </div>
      ) : null}
    </section>
  );
}
