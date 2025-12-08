import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar: Categorized links for browsing components.
 * - Highlights active item via query param (?item=...)
 * - Compatible with /components and /components/:id
 * - Preserves original spacing and layout while applying brand gradient background
 */
export default function Sidebar() {
  const location = useLocation();
  const activePath = location.pathname + location.search;

  const sections = [
    { title: 'Getting Started', items: [{ label: 'Installation', to: '/components?item=Installation' }] },
    {
      title: 'Layout & Content',
      items: [
        { label: 'Grid', to: '/components?item=Grid' },
        { label: 'Container', to: '/components?item=Container' },
        { label: 'Section', to: '/components?item=Section' },
        { label: 'Card', to: '/components?item=Card' },
        { label: 'Typography', to: '/components?item=Typography' },
        { label: 'Lists', to: '/components?item=Lists' },
        { label: 'Media', to: '/components?item=Media' },
      ],
    },
    {
      title: 'Base Components',
      items: [
        { label: 'Buttons', to: '/components?item=Buttons' },
        { label: 'Badges', to: '/components?item=Badges' },
        { label: 'Avatars', to: '/components?item=Avatars' },
        { label: 'Alerts', to: '/components?item=Alerts' },
        { label: 'Tags', to: '/components?item=Tags' },
        { label: 'Chips', to: '/components?item=Chips' },
        { label: 'Tooltips', to: '/components?item=Tooltips' },
      ],
    },
    {
      title: 'Navigations',
      items: [
        { label: 'Navbar', to: '/components?item=Navbar' },
        { label: 'Sidebar', to: '/components?item=Sidebar' },
        { label: 'Tabs', to: '/components?item=Tabs' },
        { label: 'Breadcrumbs', to: '/components?item=Breadcrumbs' },
        { label: 'Pagination', to: '/components?item=Pagination' },
        { label: 'Steps', to: '/components?item=Steps' },
      ],
    },
    {
      title: 'Basic Forms',
      items: [
        { label: 'Inputs', to: '/components?item=Inputs' },
        { label: 'Select', to: '/components?item=Select' },
        { label: 'Checkbox', to: '/components?item=Checkbox' },
        { label: 'Radio', to: '/components?item=Radio' },
        { label: 'Text Area', to: '/components?item=Text Area' },
        { label: 'Switch', to: '/components?item=Switch' },
      ],
    },
    {
      title: 'Advanced Forms',
      items: [
        { label: 'Date Picker', to: '/components?item=Date Picker' },
        { label: 'File Upload', to: '/components?item=File Upload' },
        { label: 'Range Slider', to: '/components?item=Range Slider' },
        { label: 'Autocomplete', to: '/components?item=Autocomplete' },
        { label: 'Validation', to: '/components?item=Validation' },
      ],
    },
    {
      title: 'Tables',
      items: [
        { label: 'Simple Table', to: '/components?item=Simple Table' },
        { label: 'Sortable Table', to: '/components?item=Sortable Table' },
        { label: 'Data Table', to: '/components?item=Data Table' },
        { label: 'Filtering', to: '/components?item=Filtering' },
      ],
    },
  ];

  // Gradient background wrapper + white/translucent hover/active states for legibility
  return (
    <div
      className="text-white max-h-screen overflow-y-auto"
      style={{
        background: 'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)',
      }}
      aria-label="Sidebar"
    >
      <nav className="space-y-4 p-4">
        {sections.map((section) => (
          <section key={section.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-white/80">
              {section.title}
            </h3>
            <ul className="mt-2 space-y-1">
              {section.items.map((it) => {
                const isActive =
                  activePath.startsWith('/components') &&
                  activePath.includes(`item=${encodeURIComponent(it.label)}`);
                return (
                  <li key={it.label}>
                    <Link
                      to={it.to}
                      className={
                        'block px-3 py-1.5 rounded-md text-sm transition text-neutral-50 ' +
                        (isActive
                          ? 'bg-white/20'
                          : 'hover:bg-white/15 active:bg-white/20')
                      }
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {it.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </nav>
    </div>
  );
}
