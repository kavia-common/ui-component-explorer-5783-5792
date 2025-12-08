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
    {
      title: 'Layout & Content',
      items: [
        { label: 'Container', to: '/components?item=Container' },
        { label: 'Columns', to: '/components?item=Columns' },
        { label: 'Grid', to: '/components?item=Grid' },
        { label: 'Layout Splitter', to: '/components?item=Layout Splitter' },
        { label: 'Typography', to: '/components?item=Typography' },
        { label: 'Images', to: '/components?item=Images' },
        { label: 'Links', to: '/components?item=Links' },
        { label: 'Dividers & <hr>', to: '/components?item=Dividers & <hr>' },
        { label: 'KBD', to: '/components?item=KBD' },
        { label: 'Custom Scrollbar', to: '/components?item=Custom Scrollbar' }
      ],
    }
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
