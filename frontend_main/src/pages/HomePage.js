import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * HomePage: Welcome hero refined to match screenshot styling (container, headline/subheadline, CTAs, badges).
 * - Preserves existing navbar/sidebar layout and avoids left outer gaps.
 * - Uses semantic headings and accessible CTA labels.
 */
export default function HomePage() {
  // Header height ~72px; layout main has top/bottom padding which we keep.
  // Ensure hero section fits nicely in viewport height remaining next to sidebar, centered vertically.
  // We avoid left gaps; container respects existing layout paddings.
  return (
    <div className="bg-white dark:bg-neutral-950">
      {/* Breadcrumb (kept subtle) */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6" aria-label="Breadcrumb">
        <ol role="list" className="breadcrumbs flex items-center gap-2">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-500">Welcome</li>
        </ol>
      </nav>

      {/* Hero: center within remaining viewport height; preserve white canvas and layout rhythm */}
      <section className="w-full">
        <div
          className="
            relative
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
            pt-6 sm:pt-8
            min-h-[calc(100vh-72px-96px)]
            flex items-center
          "
          aria-label="Welcome hero"
        >
          {/* Background gradient layer - semi-transparent at 87deg */}
          <div className="absolute inset-0 -z-10 bg-app-87-soft" aria-hidden="true" />
          {/* Surface hero card */}
          <div className="card p-6 sm:p-7 lg:p-8 relative overflow-hidden w-full">
            {/* Two-column layout at md+, stacked on small screens */}
            <div className="grid md:grid-cols-[7fr,5fr] md:items-center gap-5 sm:gap-6 md:gap-8">
              {/* Left column: Eyebrow badge, Title, Description */}
              <div>
                <span
                  aria-label="Welcome"
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-[12px] font-semibold tracking-wide"
                  style={{
                    backgroundColor: '#EEE7FF',
                    color: '#5B3ABF',
                  }}
                >
                  Welcome
                </span>

                <h1 className="mt-3 text-[28px] sm:text-[30px] font-bold leading-tight text-brand-45">
                  Build faster with ready-to-use UI components
                </h1>

                <p className="mt-2.5 text-[15px] text-slate-600">
                  Explore a curated library of React + Tailwind components with live previews,
                  copyable code, and a modern, accessible design system.
                </p>
              </div>

              {/* Right column: Action group inside light panel */}
              <div className="mt-4 md:mt-0 md:pl-6 md:border-l md:border-gray-200">
                <div className="rounded-lg border border-gray-200 bg-slate-50 p-2.5">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <Link
                      to="/components"
                      className="btn-brand-45"
                      aria-label="Browse Catalog"
                    >
                      Browse Catalog
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta row under content */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12.5px] text-slate-600">
              <MetaDot colorClass="bg-emerald-500">Live previews</MetaDot>
              <MetaDot colorClass="bg-indigo-500">Copyable code</MetaDot>
              <MetaDot colorClass="bg-amber-500">Light/Dark mode</MetaDot>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MetaDot({ colorClass, children }) {
  return (
    <div className="inline-flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${colorClass}`} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
