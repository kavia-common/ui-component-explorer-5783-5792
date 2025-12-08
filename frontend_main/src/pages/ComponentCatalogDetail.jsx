import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import catalog from '../data/catalog.json';
import CodeBlock from '../demos/CodeBlock';

// PUBLIC_INTERFACE
export default function ComponentCatalogDetail() {
  /** Single component detail view for catalog items (deep link) */
  const { id } = useParams();
  const nav = useNavigate();
  const item = catalog.components.find(c => c.id === id);

  if (!item) {
    return (
      <div className="card p-6">
        <div className="text-sm text-gray-600">Component not found.</div>
        <button className="btn-primary mt-4" onClick={()=> nav('/components')}>Back to catalog</button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button className="btn-ghost" onClick={()=> nav('/components')}>← Back</button>
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <div className="preview-surface px-5 py-6">
        <div className="preview-accent-bar" aria-hidden="true" />
        <div className="pt-4" dangerouslySetInnerHTML={{ __html: item.html }} />
      </div>
      <CodeBlock code={item.html} language="html" title="HTML" />
      <CodeBlock code={item.jsx} language="javascript" title="React (JSX)" />
    </div>
  );
}
