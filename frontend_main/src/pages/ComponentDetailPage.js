import React, { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import componentsData from '../data/components.json';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('xml', xml);

// Mock preview components
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
export default function ComponentDetailPage() {
  /** Detail page with preview, code and usage tabs, copy button with feedback */
  const { id } = useParams();
  const navigate = useNavigate();
  const item = useMemo(() => componentsData.find(c => String(c.id) === String(id)), [id]);

  const [tab, setTab] = useState('code');
  const [copied, setCopied] = useState(false);

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

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(item.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // silent
    }
  };

  return (
    <div className="px-0 py-2">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{item.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">{item.description}</p>
          <div className="mt-2 flex items-center gap-2">
            <span className="badge">{item.category}</span>
            {item.tags.map(tag => <span key={tag} className="text-xs text-gray-500">#{tag}</span>)}
          </div>
        </div>
        <button className="btn-ghost" onClick={() => navigate('/components')}>← Back</button>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-6">
        <div className="preview-surface p-6 flex items-center justify-center min-h-[220px]">
          <div className="preview-accent-bar" aria-hidden="true"></div>
          <div className="pt-4">
            <PreviewRenderer preview={item.preview} />
          </div>
        </div>

        <div className="card">
          <div className="px-4 pt-4 flex items-center justify-between border-b border-gray-200 dark:border-white/10">
            <div className="flex items-center gap-2">
              <TabButton active={tab==='code'} onClick={() => setTab('code')}>Code</TabButton>
              <TabButton active={tab==='usage'} onClick={() => setTab('usage')}>Usage</TabButton>
            </div>
            <div className="relative">
              <button onClick={copy} className="inline-flex items-center gap-1 h-9 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60" aria-live="polite">
                {copied ? 'Copied ✓' : 'Copy'}
              </button>
              {copied && (
                <div className="absolute right-0 mt-2 text-xs bg-neutral-900 text-white px-2 py-1 rounded shadow-soft">
                  Copied to clipboard
                </div>
              )}
            </div>
          </div>
          <div className="p-4 overflow-auto">
            {tab === 'code' ? (
              <SyntaxHighlighter
                language="javascript"
                style={document.documentElement.classList.contains('dark') ? atomOneDark : atomOneLight}
                customStyle={{ margin: 0, borderRadius: '10px', fontSize: '0.875rem', padding: '12px 14px', background: '#F8FAFC',
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace' }}
                wrapLongLines
              >
                {item.code}
              </SyntaxHighlighter>
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
