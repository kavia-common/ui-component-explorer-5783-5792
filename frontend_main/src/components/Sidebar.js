import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import catalog from '../data/catalog.json';

/**
 * PUBLIC_INTERFACE
 * Sidebar
 * - STRICT whitelist rendering for sections and items.
 * - Adds a static "Installation" link under Getting Started that routes to /getting-started/installation.
 * - Filters only within the whitelist. Any dynamic catalog extras are ignored.
 */
const Sidebar = () => {
  const location = useLocation();
  const [query, setQuery] = useState('');

  const isActiveComponentsRoot =
    location.pathname === '/components' || location.pathname === '/components/';

  // Exact section whitelist and order
  const sectionsOrder = [
    'Getting Started',
    'Layout & Content',
    'Base Components',
    'Navigations',
    'Basic Forms',
    'Advanced Forms',
    'Tables',
  ];

  // Build strictly grouped list from catalog.json, constrained to whitelist
  const grouped = useMemo(() => {
    const comps = Array.isArray(catalog?.components) ? catalog.components : [];

    // Normalize items
    const items = comps.map((c) => ({
      id: String(c.id),
      name: String(c.name),
      category: String(c.category || ''),
      to: `/components/${encodeURIComponent(c.id)}`,
    }));

    // Initialize all known whitelist sections
    const map = new Map();
    sectionsOrder.forEach((sec) => map.set(sec, []));

    // Only add items whose category is exactly in the whitelist
    items.forEach((it) => {
      if (sectionsOrder.includes(it.category)) {
        map.get(it.category).push(it);
      }
    });

    // Sort within each section by name
    sectionsOrder.forEach((sec) => {
      const arr = (map.get(sec) || []).sort((a, b) => a.name.localeCompare(b.name));
      map.set(sec, arr);
    });

    return map;
  }, []); // static based on catalog

  const matchQuery = (text) =>
    !query || String(text).toLowerCase().includes(query.toLowerCase());

  // Filtered view that shows only whitelisted sections with filtered items
  const filteredGrouped = useMemo(() => {
    const res = new Map();
    sectionsOrder.forEach((sec) => {
      const items = grouped.get(sec) || [];
      res.set(sec, items.filter((it) => matchQuery(it.name)));
    });
    return res;
  }, [grouped, query]);

  // Helper to render a nav link
  const NavLink = ({ to, label, isActive }) => (
    <Link
      to={to}
      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
        isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
      }`}
      title={label}
    >
      {label}
    </Link>
  );

  // Determine active state for the static Installation item
  const installationPaths = ['/getting-started/installation', '/installation'];
  const isInstallationActive = installationPaths.includes(location.pathname);

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
          <NavLink to="/components" label="All Components" isActive={isActiveComponentsRoot} />
        </div>

        {sectionsOrder.map((section) => {
          const items = filteredGrouped.get(section) || [];
          const isGettingStarted = section === 'Getting Started';
          const filteredItems = items;

          return (
            <div key={section}>
              <div className="mb-2 flex items-center gap-2 px-3">
                <h3 className="text-xs font-medium uppercase tracking-wide text-white/80">
                  {section}
                </h3>
              </div>
              <ul className="space-y-1">
                {isGettingStarted && matchQuery('installation') && (
                  <li key="installation-static">
                    <NavLink
                      to="/getting-started/installation"
                      label="Installation"
                      isActive={isInstallationActive}
                    />
                  </li>
                )}
                {filteredItems.map((it) => {
                  const active = location.pathname === it.to;
                  return (
                    <li key={it.id}>
                      <NavLink to={it.to} label={it.name} isActive={active} />
                    </li>
                  );
                })}
                {(!isGettingStarted && filteredItems.length === 0) ||
                (isGettingStarted && filteredItems.length === 0 && !matchQuery('installation')) ? (
                  <li className="px-3 py-1 text-xs text-white/50">No matches</li>
                ) : null}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
