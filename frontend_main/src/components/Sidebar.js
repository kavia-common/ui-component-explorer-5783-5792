import React, { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import componentsData from '../data/components.json';
import catalog from '../data/catalog.json';

/**
 * PUBLIC_INTERFACE
 * Sidebar renders navigational sections and items.
 * Note: Container (position, gradient, width, scroll) is controlled by the App shell.
 * This component outputs only inner content with transparent background.
 */
const Sidebar = () => {
  const location = useLocation();

  // Fixed sections and items per specification
  const slugify = (s) => String(s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const catalogIds = useMemo(() => new Set((Array.isArray(catalog?.components) ? catalog.components : []).map(c => String(c.id))), []);
  const STRUCTURE = useMemo(() => ([
    {
      title: 'Getting Started',
      items: [
        // Explicit route to the Installation page (not a catalog detail)
        { id: 'installation', name: 'Installation', type: 'route', to: '/getting-started/installation' },
      ],
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
      items: Array.from(new Map(
        [
          'Accordion','Alerts','Avatar','Avatar Group','Badge','Blockquote','Buttons','Button Group','Card','Chat Bubbles','Carousel','Collapse','Datepicker','Devices','Lists','List Group','Legend Indicator','Progress','File Uploading Progress','Ratings','Skeleton','Spinners','Styled Icons','Toasts','Timeline','Tree View'
        ].map((name) => {
          const id = slugify(name);
          return [id, { id, name, type: 'catalog', category: 'Base Components' }];
        })
      ).values()),
    },
    {
      title: 'Navigations',
      items: Array.from(new Map(
        [
          'Navbar','Mega Menu','Navs','Tabs','Sidebar New','Scrollspy','Breadcrumb','Pagination','Stepper'
        ].map((name) => {
          const id = slugify(name);
          return [id, { id, name, type: 'catalog', category: 'Navigations' }];
        })
      ).values()),
    },
    {
      title: 'Basic Forms',
      items: Array.from(new Map(
        [
          'Input','Input Group','Textarea','File Input','Checkbox','Radio','Switch','Select','Range Slider','Color Picker','TimePicker'
        ].map((name) => {
          const id = slugify(name);
          return [id, { id, name, type: 'catalog', category: 'Basic Forms' }];
        })
      ).values()),
    },
    {
      title: 'Advanced Forms',
      items: Array.from(new Map(
        [
          'Advanced Select','ComboBox','SearchBox','Input Number','Strong Password','Toggle Password','Toggle Count','Copy Markup','PIN Input','Overlays','Dropdown','Context Menu','Modal','Offcanvas (Drawer)','Popover','Tooltip'
        ].map((name) => {
          const id = slugify(name);
          return [id, { id, name, type: 'catalog', category: 'Advanced Forms' }];
        })
      ).values()),
    },
    {
      title: 'Tables',
      items: [{ id: slugify('Tables'), name: 'Tables', type: 'catalog', category: 'Tables' }],
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
              isActiveComponentsRoot ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
            }`}
          >
            All Components
          </Link>
        </div>

        {STRUCTURE.map((section) => {
          const visibleItems = section.items.filter((it) => matchQuery(it.name));
          if (visibleItems.length === 0) return null;

          return (
            <div key={section.title}>
              <div className="mb-2 flex items-center gap-2 px-3">
                <h3 className="text-xs font-medium uppercase tracking-wide text-white/80">{section.title}</h3>
              </div>
              <ul className="space-y-1">
                {visibleItems.map((it) => {
                  // Direct route support for specific items (e.g., Installation)
                  if (it.type === 'route' && it.to) {
                    return (
                      <li key={it.id}>
                        <Link
                          to={it.to}
                          className="block rounded-md px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                          title={it.name}
                        >
                          {it.name}
                        </Link>
                      </li>
                    );
                  }

                  // Determine destination:
                  // - catalog-backed items route to /components/:id (detail view with Preview + HTML/React tabs elsewhere)
                  // - otherwise, fall back to /components with a search filter so user still lands somewhere useful
                  const sid = slugify(it.id || it.name);
                  const inCatalog = catalogIds.has(String(sid));
                  const to = inCatalog
                    ? `/components/${encodeURIComponent(sid)}`
                    : { pathname: '/components', search: `?q=${encodeURIComponent(it.name)}` };

                  const isActive =
                    (typeof to === 'string' && location.pathname === to) ||
                    (typeof to !== 'string' &&
                      location.pathname.startsWith('/components') &&
                      (to.search || '').includes('q='));

                  return (
                    <li key={it.id}>
                      <Link
                        to={to}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive ? 'bg-white/15 text-white' : 'text-white/90 hover:bg-white/10 hover:text-white'
                        }`}
                        title={it.name}
                      >
                        {it.name}
                      </Link>

                      {/* Sub-variant inline shortcuts for known groups */}
                      {['layout-splitter','typography','images','links','dividers-and-hr','kbd','custom-scrollbar'].includes(sid) && (
                        <SubVariantInlineLinks parentId={sid} catalogIds={catalogIds} locationPath={location.pathname} />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

function SubVariantInlineLinks({ parentId, catalogIds, locationPath }) {
  const map = {
    'layout-splitter': ['layout-splitter-horizontal','layout-splitter-vertical','layout-splitter-mixed'],
    'typography': ['typography-headings','typography-inline'],
    'images': ['images-thumbnails','images-fixed','images-scroll'],
    'links': ['links-opacity','links-underline-color','links-hover-variants','links-colored'],
    'dividers-and-hr': ['dividers-colored','dividers-height','dividers-with-label','dividers-vertical-group-with-label','dividers-responsive'],
    'kbd': ['kbd-types','kbd-with-icons'],
    'custom-scrollbar': ['custom-scrollbar-basic-usage','custom-scrollbar-rounded'],
  };
  const items = map[parentId] || [];
  const visible = items.filter(id => catalogIds.has(id));
  if (visible.length === 0) return null;

  return (
    <div className="pl-6 pr-3 pb-2">
      <div className="flex flex-wrap gap-1">
        {visible.map(id => {
          const active = locationPath === `/components/${id}`;
          return (
            <Link
              key={id}
              to={`/components/${id}`}
              className={`text-[11px] rounded px-2 py-1 border transition ${
                active ? 'bg-white/20 border-white/30 text-white' : 'border-white/15 text-white/80 hover:bg-white/10'
              }`}
            >
              {id.split(parentId + '-')[1]?.replaceAll('-', ' ') || id}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
