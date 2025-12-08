import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import componentsData from '../data/components.json';
import CodeBlock from '../demos/CodeBlock';

/**
 * PUBLIC_INTERFACE
 * ComponentDetailPage (components.json-driven)
 * Ensures the preview renders exactly the same markup as the copyable snippet.
 * - If item.html is provided, we show that in preview and Code tab (HTML).
 * - If only item.code (JSX) is provided, we derive an HTML snippet that visually matches our preview and show that consistently.
 */
export default function ComponentDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = useMemo(() => componentsData.find((c) => String(c.id) === String(id)), [id]);

  const [tab, setTab] = useState('code');

  if (!item) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="card p-6">
          <p className="text-gray-700 dark:text-gray-200">Component not found.</p>
          <button onClick={() => navigate('/components')} className="btn-primary mt-4">Back to list</button>
        </div>
      </div>
    );
  }

  // Build a guaranteed matching preview/snippet string
  // Prefer item.html if present, else map known previews to HTML that matches the UI.
  const derivedHtml = (() => {
    if (item.html && typeof item.html === 'string') return item.html;

    // Derive minimal HTML from known preview keys or categories
    switch (item.preview) {
      case 'button':
        return `<button class="inline-flex items-center justify-center font-semibold text-white rounded-lg px-3 py-2 bg-[linear-gradient(45deg,_#af2497_10%,_#902d9a_20%,_#1840a0_100%)] hover:opacity-95 text-sm">Primary Button</button>`;
      case 'card':
        return `<div class="p-4 rounded-xl border bg-white w-full max-w-sm shadow-sm"><h4 class="font-semibold">Card Title</h4><p class="text-sm text-gray-600 mt-1">Card content goes here.</p><div class="mt-3"><button class="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Action</button></div></div>`;
      case 'badge':
        return `<span class="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-blue-50 text-blue-700">New</span>`;
      default: {
        // Fallback: if we have JSX code, try to present a readable code snippet block as plain HTML text
        if (item.code) {
          // Show a neutral preview surface explaining JSX-only component
          return `<div class="text-sm text-gray-600">Preview not available as static HTML. See code tab for JSX usage.</div>`;
        }
        return `<div class="text-sm text-gray-600">No preview available.</div>`;
      }
    }
  })();

  const codeString = (() => {
    // The snippet must match the preview; prefer HTML when available/derived.
    if (derivedHtml) return derivedHtml;
    // Fallback to code field to avoid empty copy
    return String(item.code ?? '');
  })();

  return (
    <div className="px-0 py-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{item.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="badge">{item.category}</span>
            {(item.tags || []).map((tag) => (
              <span key={tag} className="text-xs text-gray-500">#{tag}</span>
            ))}
          </div>
        </div>
        <button className="btn-ghost" onClick={() => navigate('/components')}>&larr; Back</button>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="preview-surface p-6 flex items-center justify-center min-h-[220px]">
          <div className="preview-accent-bar" aria-hidden="true"></div>
          <div className="pt-4 w-full">
            <div
              className="flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: String(derivedHtml || '') }}
            />
          </div>
        </div>

        <div className="card">
          <div className="px-4 pt-4 flex items-center justify-between border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2">
              <TabButton active={tab === 'code'} onClick={() => setTab('code')}>Code</TabButton>
              <TabButton active={tab === 'usage'} onClick={() => setTab('usage')}>Usage</TabButton>
            </div>
          </div>
          <div className="p-4 overflow-auto">
            {tab === 'code' ? (
              <CodeBlock
                code={String(codeString)}
                language="html"
                title="Code"
              />
            ) : (
              <div className="prose dark:prose-invert max-w-none">
                <h4>Usage</h4>
                <p>{item.usage || 'Import the component and use it within your React app. Customize classes as needed.'}</p>
                <ul>
                  <li>Accessible by default</li>
                  <li>Responsive styles via Tailwind utilities</li>
                  <li>Theme-aware in dark mode</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-2 text-sm border-b-2 -mb-px ${active ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-200'}`}
    >
      {children}
    </button>
  );
}
