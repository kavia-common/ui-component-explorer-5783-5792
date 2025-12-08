import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar renders navigational sections and items.
 * Note: Container (position, gradient, width, scroll) is controlled by the App shell.
 * This component outputs only inner content with transparent background.
 *
 * Content rule:
 * - Keep existing visual styling intact.
 * - Only show core entries: "All Components" and "Getting Started > Installation".
 * - All other previous sidebar items are now rendered in the main content area under "Main Components".
 */
const Sidebar = () => {
  const location = useLocation();

  // Local quick filter only affects visible items in this sidebar (now minimal)
  const [query, setQuery] = useState('');

  const isActiveComponentsRoot =
    location.pathname.startsWith('/components') && location.search.length === 0;

  // Sections reduced to only Getting Started (Installation)
  const SECTIONS = useMemo(
    () => [
      {
        title: 'Getting Started',
        items: [{ id: 'installation', name: 'Installation', to: '/getting-started/installation' }],
      },
    ],
    []
  );

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

        {SECTIONS.map((section) => {
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
