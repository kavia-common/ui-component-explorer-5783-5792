import React, { useMemo, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import componentsData from '../data/components.json';

/**
 * PUBLIC_INTERFACE
 * Sidebar component for listing categories and providing quick search/filter controls.
 * It renders:
 * - A compact search box (local to sidebar) that filters categories and links.
 * - A list of categories derived from the components metadata.
 * - A link to "All Components" plus category‑specific quick links to the listing.
 *
 * Behavior notes (restored):
 * - Does not control global filters; it only sets URL params and links to pages.
 * - Does not collapse into a header; Navbar remains a separate component.
 * - Category list is computed from components.json on mount and memoized.
 */
const Sidebar = () => {
  const location = useLocation();

  // Derive category list from components.json, keeping insertion order stable
  const categories = useMemo(() => {
    const set = new Set();
    (componentsData || []).forEach((c) => {
      if (Array.isArray(c.categories)) {
        c.categories.forEach((cat) => set.add(cat));
      } else if (typeof c.category === 'string' && c.category.trim()) {
        set.add(c.category.trim());
      }
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  // Local search (sidebar only) used to filter visible categories
  const [query, setQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    if (!query) {
      setFilteredCategories(categories);
      return;
    }
    const q = query.toLowerCase();
    setFilteredCategories(categories.filter((c) => c.toLowerCase().includes(q)));
  }, [categories, query]);

  const isActivePath = (pathnameStartsWith) => {
    return location.pathname.startsWith(pathnameStartsWith);
  };

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Browse</h2>
        <div className="mt-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter categories..."
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            aria-label="Filter categories"
          />
        </div>
      </div>

      <nav className="p-3">
        <ul className="space-y-1">
          <li>
            <Link
              to="/components"
              className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                isActivePath('/components') && location.search.length === 0
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span>All Components</span>
              <span className="text-[10px] rounded bg-gray-100 px-1.5 py-0.5 text-gray-600">
                {componentsData.length}
              </span>
            </Link>
          </li>
        </ul>

        <h3 className="mt-4 mb-2 px-3 text-xs font-medium uppercase tracking-wide text-gray-500">
          Categories
        </h3>

        <ul className="space-y-1">
          {filteredCategories.length === 0 && (
            <li className="px-3 py-2 text-xs text-gray-500">No matching categories</li>
          )}
          {filteredCategories.map((cat) => {
            const count = (componentsData || []).filter((c) =>
              Array.isArray(c.categories) ? c.categories.includes(cat) : c.category === cat
            ).length;

            const active = isActivePath('/components') && new URLSearchParams(location.search).get('category') === cat;

            return (
              <li key={cat}>
                <Link
                  to={`/components?category=${encodeURIComponent(cat)}`}
                  className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
                    active ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="truncate">{cat}</span>
                  <span className="text-[10px] rounded bg-gray-100 px-1.5 py-0.5 text-gray-600">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
