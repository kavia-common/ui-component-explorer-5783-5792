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

      {/* Minimal content linking to components */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            UI Component Explorer
          </h1>
          <p className="mt-2 text-sm sm:text-base leading-6 text-slate-600">
            Browse ready-to-use React + Tailwind components with live previews and copyable code.
          </p>
          <div className="mt-5">
            <Link
              to="/components?item=Installation"
              className="inline-flex items-center justify-center rounded-lg bg-main-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus-ring-main-gradient"
              aria-label="Browse components"
            >
              Browse Components
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
