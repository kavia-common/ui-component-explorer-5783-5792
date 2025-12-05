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
          <div className="rounded-xl border border-white/30 bg-white/30 backdrop-blur-[2px] shadow-sm p-6 sm:p-8">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-45">
              UI Component Explorer
            </h1>
            <p className="mt-2 text-sm sm:text-base leading-6 text-slate-700">
              Browse ready-to-use React + Tailwind components with live previews and copyable code.
            </p>
            <div className="mt-5">
              <Link
                to="/components?item=Installation"
                className="btn-brand-45"
                aria-label="Browse components"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
