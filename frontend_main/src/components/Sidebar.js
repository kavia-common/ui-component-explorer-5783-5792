import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import componentsData from '../data/components.json';
import catalog from '../data/catalog.json';

/**
 * PUBLIC_INTERFACE
 * Sidebar renders a fixed catalog of sections and items per requirements.
 * - Keeps gradient/flush-left/scrollable behavior and styling.
 * - Local search filters visible items without affecting global filters.
 * - Links:
 *   - Category chips point to /components?category=...
 *   - Items link to catalog details (/catalog with inline detail) using anchors via state or fallback to /components search.
 */
const Sidebar = () => {
  const location = useLocation();

  // Fixed sections and items per specification
  const STRUCTURE = useMemo(() => ([
    {
      title: 'Getting Started',
      items: [{ id: 'installation', name: 'Installation', type: 'catalog', category: 'Getting Started' }],
    },
    {
      title: 'Layout & Content',
      items: [
        { id: 'container', name: 'Container', type: 'catalog', category: 'Layout & Content' },
        { id: 'columns', name: 'Columns', type: 'catalog', category: 'Layout & Content' },
        { id: 'grid', name: 'Grid', type: 'catalog', category: 'Layout & Content' },
        { id: 'layout-splitter', name: 'Layout Splitter', type: 'catalog', category: 'Layout & Content' },
        { id: 'typography', name: 'Typography', type: 'catalog', category: 'Layout & Content' },
        { id: 'images', name: 'Images', type: 'catalog', category: 'Layout & Content' },
        { id: 'links', name: 'Links', type: 'catalog', category: 'Layout & Content' },
        { id: 'dividers', name: 'Dividers and <hr>', type: 'catalog', category: 'Layout & Content' },
        { id: 'kbd', name: 'KBD', type: 'catalog', category: 'Layout & Content' },
        { id: 'custom-scrollbar', name: 'Custom Scrollbar', type: 'catalog', category: 'Layout & Content' },
      ],
    },
    {
      title: 'Base Components',
      items: [
        'Accordion','Alerts','Avatar','Avatar Group','Badge','Blockquote','Buttons','Button Group','Card','Chat Bubbles','Carousel','Collapse','Datepicker','Devices','Lists','List Group','Legend Indicator','Progress','File Uploading Progress','Ratings','Skeleton','Spinners','Styled Icons','Toasts','Timeline','Tree View'
      ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g,'-'), name, type: 'components', category: 'Base Components' })),
    },
    {
      title: 'Navigations',
      items: [
        'Navbar','Mega Menu','Navs','Tabs','Sidebar New','Scrollspy','Breadcrumb','Pagination','Stepper'
      ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g,'-'), name, type: 'components', category: 'Navigations' })),
    },
    {
      title: 'Basic Forms',
      items: [
        'Input','Input Group','Textarea','File Input','Checkbox','Radio','Switch','Select','Range Slider','Color Picker','TimePicker'
      ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g,'-'), name, type: 'components', category: 'Basic Forms' })),
    },
    {
      title: 'Advanced Forms',
      items: [
        'Advanced Select','ComboBox','SearchBox','Input Number','Strong Password','Toggle Password','Toggle Count','Copy Markup','PIN Input','Overlays','Dropdown','Context Menu','Modal','Offcanvas (Drawer)','Popover','Tooltip'
      ].map((name) => ({ id: name.toLowerCase().replace(/[^a-z0-9]+/g,'-'), name, type: 'components', category: 'Advanced Forms' })),
    },
    {
      title: 'Tables',
      items: [{ id: 'tables', name: 'Tables', type: 'components', category: 'Tables' }],
    },
  ]), []);

  // Build a quick lookup for component counts in componentsData by category
  const componentsCountByCategory = useMemo(() => {
    const counts = {};
    (componentsData || []).forEach((c) => {
      const cat = Array.isArray(c.categories) ? c.categories[0] : c.category;
      if (!cat) return;
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, []);

  // Local query filters item names
  const [query, setQuery] = useState('');

  const isActiveComponentsRoot = location.pathname.startsWith('/components') && location.search.length === 0;

  const matchQuery = (text) => !query || String(text).toLowerCase().includes(query.toLowerCase());

  return (
    <aside className="w-64 shrink-0 border-r border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-700 tracking-wide uppercase">Browse</h2>
        <div className="mt-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Quick filter..."
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            aria-label="Quick filter menu items"
          />
        </div>
      </div>

      <nav className="p-3 space-y-6 overflow-y-auto max-h-[calc(100vh-140px)]">
        <div>
          <Link
            to="/components"
            className={`flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors ${
              isActiveComponentsRoot ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <span>All Components</span>
            <span className="text-[10px] rounded bg-gray-100 px-1.5 py-0.5 text-gray-600">
              {componentsData.length}
            </span>
          </Link>
        </div>

        {STRUCTURE.map((section) => {
          const visibleItems = section.items.filter((it) => matchQuery(it.name));
          if (visibleItems.length === 0) return null;

          // Category chip navigates to /components list for that high-level section
          const categoryChip = (
            <Link
              to={`/components?category=${encodeURIComponent(section.title)}`}
              className="ml-auto text-[10px] rounded bg-gray-100 px-2 py-0.5 text-gray-600 hover:bg-gray-200"
              title={`View ${section.title} in list`}
            >
              {componentsCountByCategory[section.title] || 0}
            </Link>
          );

          return (
            <div key={section.title}>
              <div className="mb-2 flex items-center gap-2 px-3">
                <h3 className="text-xs font-medium uppercase tracking-wide text-gray-500">{section.title}</h3>
                {categoryChip}
              </div>
              <ul className="space-y-1">
                {visibleItems.map((it) => {
                  // Determine destination: catalog-backed items go to /catalog with selected id; others fallback to list filtered search
                  const inCatalog = (catalog.components || []).some((c) => c.id === it.id);
                  const to = inCatalog
                    ? { pathname: '/catalog' }
                    : { pathname: '/components', search: `?q=${encodeURIComponent(it.name)}` };

                  return (
                    <li key={it.id}>
                      <Link
                        to={to}
                        state={inCatalog ? { selectId: it.id } : undefined}
                        className="block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        title={it.name}
                      >
                        {it.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
