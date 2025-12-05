import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * HomePage: Simplified landing that links to Components; promotional hero/cards removed.
 */
export default function HomePage() {
  return (
    <div className="bg-white dark:bg-neutral-950">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6" aria-label="Breadcrumb">
        <ol role="list" className="breadcrumbs flex items-center gap-2">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-500">Welcome</li>
        </ol>
      </nav>

      {/* Hero section with 87° app gradient background */}
      <section className="w-full bg-app-87">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          {/* Polished hero: subtle glass surface, divider, and action panel */}
          <div className="rounded-xl border border-white/30 bg-white/40 backdrop-blur-[2px] shadow-sm p-6 sm:p-8">
            <div className="flex flex-col md:grid md:grid-cols-[1fr,auto] md:items-center md:gap-8">
              {/* Left: title + description */}
              <div>
                <span
                  aria-label="Welcome"
                  className="inline-flex px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/70 text-slate-700 border border-white/60"
                >
                  Welcome
                </span>
                <h1 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-brand-45">
                  UI Component Explorer
                </h1>
                <p className="mt-2 text-sm sm:text-base leading-6 text-slate-700">
                  Browse ready-to-use React + Tailwind components with live previews and copyable code.
                </p>
              </div>

              {/* Right: action panel with subtle surface and separator on mobile */}
              <div className="mt-5 md:mt-0">
                <div className="md:border md:border-white/50 md:bg-white/60 md:backdrop-blur-sm md:rounded-lg md:p-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                    <Link
                      to="/components?item=Installation"
                      className="btn-brand-45"
                      aria-label="Browse components"
                    >
                      Browse Components
                    </Link>
                    <Link
                      to="/components"
                      className="btn-link"
                      aria-label="View all components"
                    >
                      View all
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle divider and meta row */}
            <div className="mt-6 pt-6 border-t border-white/60 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-700/80">
              <div className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Live previews
              </div>
              <div className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                Copyable code
              </div>
              <div className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                Light/Dark mode
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
