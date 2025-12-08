import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import catalog from '../data/catalog.json';

/**
 * PUBLIC_INTERFACE
 * Sidebar renders top-level component entries only (no nested sublists).
 * - Keeps search/filter behavior for the displayed top-level items.
 * - Preserves routing and layout spacing; only item set and background styles are adjusted.
 */
const Sidebar = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');

  const isActiveComponentsRoot =
    location.pathname.startsWith('/components') && location.search.length === 0;

  // Build the list of top-level entries only.
  // We derive these from catalog.components by selecting canonical items and
  // excluding variant/subitems (e.g., those with " — " in their names).
  const topLevelItems = useMemo(() => {
    const comps = Array.isArray(catalog?.components) ? catalog.components : [];
    // Top-level IDs we want to retain in the sidebar (examples given in the task).
    // We compute them by filtering: take items that don't include an em dash separator
    // and that match known top-level names like 'Layout Splitter', 'Typography', etc.
    const allowedNameSet = new Set([
      'Layout Splitter',
      'Typography',
      'Images',
      'Links',
      'Dividers and <hr>',
      'KBD',
      'Custom Scrollbar',
      // Also allow Getting Started -> Installation as a single top-level entry if present
      'Installation',
    ]);

    const isTopLevel = (name) => {
      if (!name) return false;
      // remove variants that use " — "
      if (name.includes('—') || name.includes('--')) return false;
      // keep only explicit allowed names
      return allowedNameSet.has(name);
    };

    const filtered = comps
      .filter((c) => isTopLevel(c.name))
      .map((c) => ({
        id: String(c.id),
        name: String(c.name),
        to: `/components/${encodeURIComponent(c.id)}`,
        category: c.category || 'Other',
      }));

    // Deduplicate by name (in case of duplicates)
    const byName = new Map();
    filtered.forEach((it) => {
      if (!byName.has(it.name)) byName.set(it.name, it);
    });

    // Stable sort by a curated order matching the allowedNameSet sequence
    const order = Array.from(allowedNameSet);
    const items = Array.from(byName.values()).sort((a, b) => {
      const ai = order.indexOf(a.name);
      const bi = order.indexOf(b.name);
      return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    });

    return items;
  }, []);

  const matchQuery = (text) =>
    !query || String(text).toLowerCase().includes(query.toLowerCase());

  const visibleTopLevel = topLevelItems.filter((it) => matchQuery(it.name));

  return (
    <div className="text-white">
      <div className="p-4 border-b border-white/15">
        <h2 className="text-sm font-semibold tracking-wide uppercase">Browse</h2>
        <div className="mt-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quick filter..."
            className="w-full rounded-md border border-white/20 bg-white/10 text-white placeholder:text-white/60 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40"
            aria-label="Quick filter menu items"
          />
        </div>
      </div>

      <nav className="p-3 space-y-6">
        <div>
          <Link
            to="/components"
            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
              isActiveComponentsRoot
                ? 'bg-white/15 text-white'
                : 'text-white/90 hover:bg-white/10 hover:text-white'
            }`}
          >
            All Components
          </Link>
        </div>

        {/* Top-level entries only; no nested lists rendered */}
        <div>
          <div className="mb-2 flex items-center gap-2 px-3">
            <h3 className="text-xs font-medium uppercase tracking-wide text-white/80">
              Components
            </h3>
          </div>
          <ul className="space-y-1">
            {visibleTopLevel.map((it) => (
              <li key={it.id}>
                <Link
                  to={it.to}
                  className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                  title={it.name}
                >
                  {it.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
