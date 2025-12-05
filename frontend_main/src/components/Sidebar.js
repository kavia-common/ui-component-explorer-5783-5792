import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar: Persistent left sidebar (sticky on desktop, drawer on mobile) listing component sections and items.
 * - Container uses navbar gradient for background
 * - Accessible accordion with single-open policy
 * - Independent scroll area with overflow-y-auto
 * - Subtle border/shadow/scale hover/focus for items
 * - Keyboard accessible: buttons with aria-expanded/controls and unique IDs
 */
export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname + location.search);

  useEffect(() => {
    setActivePath(location.pathname + location.search);
  }, [location]);

  // Group data per requirements
  const sections = useMemo(() => ([
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
  ]), []);

  const linkFor = (section, item) =>
    `/components?section=${encodeURIComponent(section)}&item=${encodeURIComponent(item)}`;

  // Determine default open group (first or inferred from activePath)
  const inferredGroup = useMemo(() => {
    try {
      const url = new URL(activePath, window.location.origin);
      const group = url.searchParams.get('section');
      if (group && sections.find(s => s.title === group)) return group;
    } catch {
      // ignore
    }
    return sections[0]?.title || null;
  }, [activePath, sections]);

  const [activeGroup, setActiveGroup] = useState(inferredGroup);
  useEffect(() => {
    setActiveGroup(inferredGroup);
  }, [inferredGroup]);

  // Accessibility: close on Escape when drawer is open
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const headerHeight = 72; // approximate sticky header height in px
  const desktopTopOffset = headerHeight; // matches lg:top-[72px] used below

  const renderAccordion = () => (
    <nav
      aria-label="Component sections"
      role="navigation"
      className="h-full flex flex-col"
    >
      {/* Static area (non-scrolling) */}
      <div className="px-4 pt-4 pb-3 shrink-0">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white border border-white/15 hover:border-white/25 shadow-sm hover:shadow transition-colors-transform hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
        >
          <span className="text-lg">🏠</span>
          <span className="text-sm font-medium">Home</span>
        </Link>
      </div>

      {/* Scrollable content */}
      <div
        className="min-h-0 grow overflow-y-auto pb-8"
        style={{ maxHeight: `calc(100vh - ${desktopTopOffset + 16}px)` }} // safe cap on desktop
      >
        <ul className="space-y-3 px-2" role="list">
          {sections.map((section, idx) => {
            const sectionId = `accordion-section-${idx}`;
            const panelId = `accordion-panel-${idx}`;
            const open = activeGroup === section.title;

            return (
              <li key={section.title} className="rounded-lg">
                <h3 className="px-1">
                  <button
                    id={sectionId}
                    type="button"
                    className={
                      'w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-sm text-white/95 ' +
                      'border border-white/10 hover:border-white/20 shadow-sm hover:shadow transition-colors-transform ' +
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                    }
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setActiveGroup(prev => (prev === section.title ? section.title : section.title))}
                    // single-open policy: clicking any header sets that group active
                  >
                    <span className="font-medium">{section.title}</span>
                    <span
                      className={
                        'inline-block transform transition-transform ' + (open ? 'rotate-90' : 'rotate-0')
                      }
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={sectionId}
                  className={
                    'overflow-hidden transition-all ' +
                    (open ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0')
                  }
                >
                  <ul role="list" className="space-y-1">
                    {section.items.map((item) => {
                      const to = linkFor(section.title, item);
                      const isActive = activePath.includes(`item=${encodeURIComponent(item)}`);
                      return (
                        <li key={item}>
                          <Link
                            to={to}
                            className={
                              'group flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors-transform ' +
                              'border ' +
                              (isActive
                                ? 'bg-white/20 text-white border-white/20 shadow'
                                : 'text-white/90 hover:text-white hover:bg-white/10 border-white/10 hover:border-white/20 hover:shadow') +
                              ' hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
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
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );

  // Desktop: sticky sidebar
  // Mobile: slide-in drawer
  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:block lg:sticky lg:top-[72px] self-start w-72 min-w-72 h-[calc(100vh-88px)] rounded-r-xl text-white bg-navbar-gradient shadow-soft"
        aria-hidden={false}
      >
        {renderAccordion()}
      </aside>

      {/* Mobile drawer */}
      <div
        className={
          'fixed inset-0 z-50 lg:hidden transition ' +
          (isOpen ? 'opacity-100' : 'pointer-events-none opacity-0')
        }
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className={
            'absolute inset-0 bg-black/40 transition-opacity ' +
            (isOpen ? 'opacity-100' : 'opacity-0')
          }
          onClick={onClose}
        />
        {/* Panel */}
        <div
          className={
            'absolute top-0 left-0 h-full w-80 max-w-[85%] bg-navbar-gradient text-white shadow-2xl ' +
            'transform transition-transform ' +
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
              className="px-2 py-1 rounded-md hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
          <div className="h-full">{renderAccordion()}</div>
        </div>
      </div>
    </>
  );
}
