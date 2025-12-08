import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import catalog from '../data/catalog.json';

/**
 * PUBLIC_INTERFACE
 * Sidebar renders navigational sections and items.
 * Note: Container (position, gradient, width, scroll) is controlled by the App shell.
 * This component outputs only inner content with transparent background.
 *
 * Behavior:
 * - Preserve visual styling exactly as before.
 * - Restore all component items back to the sidebar, grouped by categories from catalog.json.
 * - Keep quick filter working to filter visible items.
 */
const Sidebar = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');

  const isActiveComponentsRoot =
    location.pathname.startsWith('/components') && location.search.length === 0;

  // Build sections from catalog categories and components
  const sections = useMemo(() => {
    const cats = Array.isArray(catalog?.categories) ? catalog.categories : [];
    const comps = Array.isArray(catalog?.components) ? catalog.components : [];
    const byCat = new Map();
    cats.forEach((c) => byCat.set(c, []));
    comps.forEach((c) => {
      const cat = c.category || 'Other';
      if (!byCat.has(cat)) byCat.set(cat, []);
      byCat.get(cat).push(c);
    });
    // Ensure stable sort for items within category
    const result = [];
    for (const [title, items] of byCat.entries()) {
      const sorted = [...items].sort((a, b) => String(a.name).localeCompare(String(b.name)));
      result.push({
        title,
        items: sorted.map((it) => ({
          id: String(it.id),
          name: String(it.name),
          to: `/components/${encodeURIComponent(it.id)}`,
        })),
      });
    }
    // Move "Getting Started" to top if exists
    result.sort((a, b) => {
      if (a.title === 'Getting Started') return -1;
      if (b.title === 'Getting Started') return 1;
      return String(a.title).localeCompare(String(b.title));
    });
    return result;
  }, []);

  const matchQuery = (text) =>
    !query || String(text).toLowerCase().includes(query.toLowerCase());

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

        {sections.map((section) => {
          const visibleItems = section.items.filter((it) => matchQuery(it.name));
          if (visibleItems.length === 0) return null;

          return (
            <div key={section.title}>
              <div className="mb-2 flex items-center gap-2 px-3">
                <h3 className="text-xs font-medium uppercase tracking-wide text-white/80">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-1">
                {visibleItems.map((it) => (
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
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
