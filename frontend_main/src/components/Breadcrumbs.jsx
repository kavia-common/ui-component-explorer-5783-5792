import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import catalog from '../data/catalog.json';

/**
 * PUBLIC_INTERFACE
 * Breadcrumbs component that derives segments from the current route.
 * - Accessible markup: <nav aria-label="Breadcrumb"><ol><li>...</li></ol></nav>
 * - Clickable intermediate crumbs; last crumb is current page (aria-current="page")
 * - Supports:
 *   "/": Home
 *   "/components": Home > Components
 *   "/components/:id": Home > Components > <Resolved Name or ID>
 *   "/catalog" (optional): Home > Catalog
 * - Styling integrates with the app's subtle breadcrumb look and gradient accent for the last crumb.
 */
export default function Breadcrumbs({ componentsIndex = [] }) {
  const location = useLocation();

  // Map of known static paths to labels
  const staticLabels = {
    '/': 'Home',
    '/components': 'Components',
    '/catalog': 'Catalog',
    '/getting-started': 'Getting Started',
    '/getting-started/installation': 'Installation',
    '/installation': 'Installation',
  };

  // Escape/sanitize plain text for rendering (e.g., names that include <hr>)
  const escapeLabel = (s) => {
    if (s == null) return '';
    return String(s).replace(/</g, '‹').replace(/>/g, '›');
  };

  // Attempt to resolve a display name for a component id if we're on /components/:id
  const resolveComponentName = (id) => {
    if (!id) return '';
    const list = Array.isArray(componentsIndex) ? componentsIndex : [];
    const foundInIndex = list.find((c) => String(c.id) === String(id));
    if (foundInIndex) return foundInIndex.name || id;

    const catList = Array.isArray(catalog?.components) ? catalog.components : [];
    const foundInCatalog = catList.find((c) => String(c.id) === String(id));
    if (foundInCatalog) return foundInCatalog.name || id;

    return id;
  };

  // Build breadcrumb segments based on current pathname
  const segments = React.useMemo(() => {
    const { pathname } = location;

    // Home
    if (pathname === '/') {
      return [{ to: '/', label: staticLabels['/'], isLast: true }];
    }

    // Components list
    if (pathname === '/components') {
      return [
        { to: '/', label: staticLabels['/'] },
        { to: '/components', label: staticLabels['/components'], isLast: true },
      ];
    }

    // Component detail
    const matchDetail = matchPath('/components/:id', pathname);
    if (matchDetail && matchDetail.params && matchDetail.params.id) {
      const id = matchDetail.params.id;
      const name = resolveComponentName(id);
      return [
        { to: '/', label: staticLabels['/'] },
        { to: '/components', label: staticLabels['/components'] },
        { to: pathname, label: escapeLabel(name), isLast: true },
      ];
    }

    // Catalog (optional page)
    if (pathname === '/catalog') {
      return [
        { to: '/', label: staticLabels['/'] },
        { to: '/catalog', label: staticLabels['/catalog'], isLast: true },
      ];
    }

    // Fallback: split path and build generic crumbs
    const parts = pathname.split('/').filter(Boolean);
    const acc = [];
    let cur = '';
    parts.forEach((p, idx) => {
      cur += '/' + p;
      const isLast = idx === parts.length - 1;
      const raw = staticLabels[cur] || titleCase(decodeURIComponent(p.replace(/-/g, ' ')));
      const label = escapeLabel(raw);
      acc.push({ to: cur, label, isLast });
    });
    // Prepend Home
    return [{ to: '/', label: staticLabels['/'] }, ...acc];
  }, [location, componentsIndex]);

  return (
    <nav aria-label="Breadcrumb" className="mb-3">
      <ol className="breadcrumbs flex items-center gap-2">
        {segments.map((seg, idx) => {
          const isLast = !!seg.isLast || idx === segments.length - 1;
          return (
            <React.Fragment key={seg.to + ':' + idx}>
              <li>
                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-medium bg-clip-text text-transparent"
                    style={{
                      backgroundImage:
                        'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)',
                    }}
                  >
                    {seg.label}
                  </span>
                ) : (
                  <Link to={seg.to} className="hover:underline">
                    {seg.label}
                  </Link>
                )}
              </li>
              {idx < segments.length - 1 && (
                <li aria-hidden="true" className="text-slate-400">
                  /
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}

// PUBLIC_INTERFACE
export function titleCase(s) {
  /** Convert a raw string to Title Case, collapsing extra spaces. */
  if (!s) return '';
  return String(s)
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}
