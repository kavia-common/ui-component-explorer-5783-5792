import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * Sidebar: Persistent left sidebar (sticky on desktop, drawer on mobile) listing component sections and items.
 * - Uses navbar gradient background for both desktop and mobile
 * - Section headers styled per reference with uppercase label and chevron
 * - Items have tighter spacing, subtle hover overlays, and clear focus states
 * - None open by default; multiple groups can be open; independent scroll
 */
export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname + location.search);

  useEffect(() => {
    setActivePath(location.pathname + location.search);
  }, [location]);

  const sections = useMemo(
    () => [
      // Getting Started simplified to keep only Installation
      { title: 'Getting Started', items: ['Installation'] },
      { title: 'Layout & Content', items: ['Grid', 'Container', 'Section', 'Card', 'Typography', 'Lists', 'Media'] },
      { title: 'Base Components', items: ['Buttons', 'Badges', 'Avatars', 'Alerts', 'Tags', 'Chips', 'Tooltips'] },
      { title: 'Navigations', items: ['Navbar', 'Sidebar', 'Tabs', 'Breadcrumbs', 'Pagination', 'Steps'] },
      { title: 'Basic Forms', items: ['Inputs', 'Select', 'Checkbox', 'Radio', 'Text Area', 'Switch'] },
      { title: 'Advanced Forms', items: ['Date Picker', 'File Upload', 'Range Slider', 'Autocomplete', 'Validation'] },
      { title: 'Tables', items: ['Simple Table', 'Sortable Table', 'Data Table', 'Pagination', 'Filtering'] },
    ],
    []
  );

  const linkFor = (_section, item) =>
    `/components/explorer?item=${encodeURIComponent(item)}`;

  // Accordion open state (multi-open). Start with none open by default.
  const [openGroups, setOpenGroups] = useState(() => new Set());
  const toggleGroup = (title) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });
  };

  // Close drawer on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => e.key === 'Escape' && onClose?.();
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const desktopTopOffset = 76;

  const renderAccordion = () => (
    <nav aria-label="Component sections" role="navigation" className="h-full flex flex-col">
      {/* Fixed header area (Home removed as requested) */}
      <div className="px-4 pt-4 pb-3 shrink-0">
        <div
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-white/10 select-none"
          aria-hidden="true"
        >
          <span className="text-[0.8rem] font-semibold tracking-wide uppercase">Browse</span>
        </div>
      </div>

      {/* Scrollable groups */}
      <div
        className="min-h-0 grow overflow-y-auto pb-8"
        style={{ maxHeight: `calc(100vh - ${desktopTopOffset + 16}px)` }}
      >
        <ul className="px-2 space-y-2 divide-y divide-white/5" role="list">
          {sections.map((section, idx) => {
            const sectionId = `accordion-section-${idx}`;
            const panelId = `accordion-panel-${idx}`;
            const open = openGroups.has(section.title);
            return (
              <li key={section.title} className="rounded-lg pt-2 first:pt-0">
                <h3 className="px-1">
                  <button
                    id={sectionId}
                    type="button"
                    className={
                      'w-full flex items-center justify-between gap-2 px-3 py-2 rounded-md text-[0.85rem] ' +
                      'text-white/90 font-semibold uppercase tracking-wide ' +
                      'bg-white/0 hover:bg-white/10 focus:bg-white/10 ' +
                      'transition-colors-transform hover:translate-x-[1px] ' +
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70'
                    }
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggleGroup(section.title)}
                  >
                    <span className="text-[0.82rem]">{section.title}</span>
                    <span
                      className={'inline-block transform transition-transform opacity-90 ' + (open ? 'rotate-90' : 'rotate-0')}
                      aria-hidden="true"
                      style={{ fontSize: 12 }}
                    >
                      ▶
                    </span>
                  </button>
                </h3>

                <div className="mt-1 px-1">
                  <div className="h-px bg-white/10" aria-hidden="true" />
                </div>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={sectionId}
                  className={'overflow-hidden transition-all ' + (open ? 'max-h-[1200px] opacity-100 mt-2' : 'max-h-0 opacity-0')}
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
                              'group sidebar-item transition-colors-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 ' +
                              (isActive ? 'sidebar-item--active' : '')
                            }
                            aria-current={isActive ? 'page' : undefined}
                          >
                            <span
                              className={'inline-block w-1.5 h-1.5 rounded-full shrink-0 ' + (isActive ? 'bg-white' : 'bg-white/70 group-hover:bg-white')}
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

  return (
    <>
      {/* Desktop sidebar with navbar gradient and subtle inner overlay for readability */}
      <aside
        className="hidden lg:block lg:sticky lg:top-[72px] self-start w-[240px] min-w-[240px] h-[calc(100vh-88px)] rounded-r-xl text-white bg-navbar-gradient shadow-soft"
        aria-hidden={false}
      >
        <div className="h-full navbar-overlay">{renderAccordion()}</div>
      </aside>

      {/* Mobile drawer with backdrop */}
      <div
        className={'fixed inset-0 z-50 lg:hidden transition ' + (isOpen ? 'opacity-100' : 'pointer-events-none opacity-0')}
        aria-hidden={!isOpen}
      >
        <div
          className={'absolute inset-0 bg-black/40 transition-opacity ' + (isOpen ? 'opacity-100' : 'opacity-0')}
          onClick={onClose}
        />
        <div
          className={
            'absolute top-0 left-0 h-full w-80 max-w-[85%] bg-navbar-gradient text-white shadow-2xl transform transition-transform ' +
            (isOpen ? 'translate-x-0' : '-translate-x-full')
          }
          role="dialog"
          aria-modal="true"
          aria-label="Sidebar"
        >
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white/30" />
              <span className="font-semibold uppercase tracking-wide text-[0.8rem]">Components</span>
            </div>
            <button
              onClick={onClose}
              className="px-2 py-1 rounded-md hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              aria-label="Close sidebar"
            >
              ✕
            </button>
          </div>
          <div className="h-full navbar-overlay">{renderAccordion()}</div>
        </div>
      </div>
    </>
  );
}
