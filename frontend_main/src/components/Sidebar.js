import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar: Persistent left sidebar (sticky on desktop, drawer on mobile) listing component sections and items.
 * - Background uses .bg-sidebar-gradient
 * - Accessible list semantics and keyboard navigation
 * - Items link to /components with query parameters for future filtering
 */
export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname + location.search);

  useEffect(() => {
    setActivePath(location.pathname + location.search);
  }, [location]);

  // Sidebar data grouped per requirements
  const sections = [
    {
      title: 'Getting Started',
      items: ['Introduction', 'Installation', 'Quick Start', 'Theming', 'Dark Mode'],
    },
    {
      title: 'Layout & Content',
      items: ['Grid', 'Container', 'Section', 'Card', 'Typography', 'Lists', 'Media'],
    },
    {
      title: 'Base Components',
      items: ['Buttons', 'Badges', 'Avatars', 'Alerts', 'Tags', 'Chips', 'Tooltips'],
    },
    {
      title: 'Navigations',
      items: ['Navbar', 'Sidebar', 'Tabs', 'Breadcrumbs', 'Pagination', 'Steps'],
    },
    {
      title: 'Basic Forms',
      items: ['Inputs', 'Select', 'Checkbox', 'Radio', 'Text Area', 'Switch'],
    },
    {
      title: 'Advanced Forms',
      items: ['Date Picker', 'File Upload', 'Range Slider', 'Autocomplete', 'Validation'],
    },
    {
      title: 'Tables',
      items: ['Simple Table', 'Sortable Table', 'Data Table', 'Pagination', 'Filtering'],
    },
  ];

  const linkFor = (section, item) =>
    `/components?section=${encodeURIComponent(section)}&item=${encodeURIComponent(item)}`;

  // Accessibility: close on Escape when drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Sidebar content block
  const content = (
    <nav
      aria-label="Component sections"
      className="h-full overflow-y-auto pt-4 pb-8"
      role="navigation"
    >
      <div className="px-4 pb-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/60"
        >
          <span className="text-lg">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </Link>
      </div>
      <ul className="space-y-6 px-2" role="list">
        {sections.map((section) => (
          <li key={section.title}>
            <h3 className="px-2 text-xs uppercase tracking-wide text-white/80">
              {section.title}
            </h3>
            <ul role="list" className="mt-2">
              {section.items.map((item) => {
                const to = linkFor(section.title, item);
                const isActive = activePath.includes(`item=${encodeURIComponent(item)}`);
                return (
                  <li key={item}>
                    <Link
                      to={to}
                      className={
                        'group flex items-center gap-2 px-3 py-2 rounded-md text-sm outline-none ' +
                        (isActive
                          ? 'bg-white/25 text-white'
                          : 'text-white/90 hover:bg-white/15 hover:text-white focus:bg-white/20')
                      }
                    >
                      <span
                        className={
                          'inline-block w-1.5 h-1.5 rounded-full ' +
                          (isActive ? 'bg-white' : 'bg-white/70 group-hover:bg-white')
                        }
                        aria-hidden="true"
                      />
                      <span className="truncate">{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );

  // Desktop: sticky sidebar
  // Mobile: slide-in drawer
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:block lg:sticky lg:top-[72px] self-start w-72 min-w-72 h-[calc(100vh-88px)] rounded-r-xl text-white bg-sidebar-gradient shadow-soft"
        aria-hidden={false}
      >
        {content}
      </aside>

      {/* Mobile drawer trigger space handled by Navbar hamburger in parent. Drawer itself: */}
      <div
        className={
          'fixed inset-0 z-50 lg:hidden transition ' + (isOpen ? 'opacity-100' : 'pointer-events-none opacity-0')
        }
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={'absolute inset-0 bg-black/40 transition-opacity ' + (isOpen ? 'opacity-100' : 'opacity-0')}
          onClick={onClose}
        />
        {/* Panel */}
        <div
          className={
            'absolute top-0 left-0 h-full w-80 max-w-[85%] bg-sidebar-gradient text-white shadow-2xl transform transition-transform ' +
            (isOpen ? 'translate-x-0' : '-translate-x-full')
          }
          role="dialog"
          aria-modal="true"
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/20">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/30" />
              <span className="font-medium">Components</span>
            </div>
            <button
              onClick={onClose}
              className="px-2 py-1 rounded-md hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}
