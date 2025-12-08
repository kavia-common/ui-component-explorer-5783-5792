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
  const item = (catalog.components || []).find((c) => c.id === id);

  if (!item) {
    return (
      <div className="card p-6">
        <div className="text-sm text-gray-600">Component not found.</div>
        <button className="btn-primary mt-4" onClick={() => nav('/components')}>Back to catalog</button>
      </div>
    );
  }

  const [tab, setTab] = React.useState('Preview'); // Preview | HTML | React

  return (
    <div className="space-y-6">
      <nav aria-label="Breadcrumb" className="mb-1">
        <ol className="breadcrumbs flex items-center gap-2">
          <li><Link to="/components" className="hover:underline">Components</Link></li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700 font-medium">{item.name}</li>
        </ol>
      </nav>

      <div className="flex items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <div className="text-xs text-gray-500 mt-1">{item.category} • {(item.tags || []).join(', ')}</div>
        </div>
        <button className="btn-ghost" onClick={() => nav('/components')} aria-label="Back">← Back</button>
      </div>

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
            <div className="pt-4" dangerouslySetInnerHTML={{ __html: item.html }} />
          </div>
        )}
        {tab === 'HTML' && <CodeBlock code={item.html} language="html" title="HTML" />}
        {tab === 'React' && <CodeBlock code={item.jsx} language="javascript" title="React (JSX)" />}
      </div>
    </div>
  );
}
