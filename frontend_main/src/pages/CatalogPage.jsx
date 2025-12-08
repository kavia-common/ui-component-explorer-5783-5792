import React from 'react';
import { useSearchParams, Link, useParams, useNavigate } from 'react-router-dom';
import catalog from '../data/catalog.json';
import CodeBlock from '../demos/CodeBlock';

// PUBLIC_INTERFACE
export default function CatalogPage() {
  /** Catalog of copyable Tailwind components with live preview and HTML/React tabs */
  const [params, setParams] = useSearchParams();
  const { id: routeId } = useParams();
  const navigate = useNavigate();
  const q = params.get('q') || '';
  const cat = params.get('cat') || 'All';
  const sel = (routeId || params.get('id')) || '';

  const categories = React.useMemo(() => {
    const cats = Array.isArray(catalog.categories) ? catalog.categories : [];
    return ['All', ...cats];
  }, []);
  const items = React.useMemo(() => {
    const byCat = cat === 'All' ? catalog.components : catalog.components.filter(c => c.category === cat);
    if (!q) return byCat;
    const term = q.toLowerCase();
    return byCat.filter(c =>
      c.name.toLowerCase().includes(term) ||
      c.category.toLowerCase().includes(term) ||
      (c.tags || []).some(t => String(t).toLowerCase().includes(term))
    );
  }, [q, cat]);

  const selected = React.useMemo(() => catalog.components.find(c => c.id === sel) || null, [sel]);

  const setQuery = (next) => {
    const newParams = new URLSearchParams(params.toString());
    if (next.q !== undefined) next.q ? newParams.set('q', next.q) : newParams.delete('q');
    if (next.cat !== undefined) next.cat && next.cat !== 'All' ? newParams.set('cat', next.cat) : newParams.delete('cat');
    if (next.id !== undefined) next.id ? newParams.set('id', next.id) : newParams.delete('id');
    setParams(newParams);
  };

  return (
    <div className="space-y-6">
      <Breadcrumbs selected={selected} />

      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="flex gap-2 items-center">
          <label className="text-sm text-gray-600">Category</label>
          <select
            value={cat}
            onChange={(e)=> setQuery({ cat: e.target.value })}
            className="px-3 py-2 rounded-lg border text-sm"
          >
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e)=> setQuery({ q: e.target.value })}
            placeholder="Search components..."
            className="w-64 max-w-[70vw] px-3 py-2 rounded-lg border text-sm"
            aria-label="Search components"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map(item => (
          <button
            key={item.id}
            onClick={()=> setQuery({ id: item.id })}
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

      {/* Detail Drawer/Panel */}
      {selected ? (
        <Detail
          key={selected.id}
          item={selected}
          onClose={()=>{
            if (routeId) navigate('/components');
            setQuery({ id: '' });
          }}
        />
      ) : null}
    </div>
  );
}

function Breadcrumbs({ selected }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-1">
      <ol className="breadcrumbs flex items-center gap-2">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li aria-hidden="true" className="text-slate-400">/</li>
        <li><Link to="/components" className="hover:underline">Components</Link></li>
        <li aria-hidden="true" className="text-slate-400">/</li>
        <li className="text-slate-700 font-medium">{selected ? selected.name : 'Catalog'}</li>
      </ol>
    </nav>
  );
}

function Detail({ item, onClose }) {
  const [tab, setTab] = React.useState('Preview'); // Preview | HTML | React
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(()=>{ setMounted(true); }, []);
  const htmlRef = React.useRef(null);

  // Render unsafe HTML for preview in an isolated container
  const Preview = () => {
    return (
      <div className="preview-surface px-5 py-6">
        <div className="preview-accent-bar" aria-hidden="true" />
        <div className="pt-4">
          <div
            ref={htmlRef}
            dangerouslySetInnerHTML={{ __html: item.html }}
          />
        </div>
      </div>
    );
  };

  const copyExact = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        return true;
      } catch {
        return false;
      }
    }
  };

  return (
    <section className="card p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <div className="text-xs text-gray-500 mt-1">{item.category} • {(item.tags || []).join(', ')}</div>
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
          <CodeBlock code={item.html} language="html" title="HTML" />
        )}

        {tab === 'React' && (
          <CodeBlock code={item.jsx} language="javascript" title="React (JSX)" />
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
