import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * HomePage: Welcome page aligned to provided HTML structure and Tailwind classes.
 * Only markup/classes updated; routes/sidebar/theme remain unchanged.
 */
export default function HomePage() {
  return (
    <div className="bg-background">
      {/* Breadcrumb */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6" aria-label="Breadcrumb">
        <ol role="list" className="flex items-center gap-2 text-sm text-slate-600">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-500">Welcome</li>
        </ol>
      </nav>

      {/* Hero / Section container */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 sm:p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <span className="inline-flex items-center rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-600" aria-label="Welcome">
                Welcome
              </span>
              <h1 id="welcome-heading" className="mt-3 text-2xl sm:text-3xl font-bold text-slate-900">
                Build faster with ready-to-use UI components
              </h1>
              <p className="mt-2 text-sm sm:text-base leading-6 text-slate-600">
                Explore a curated library of React + Tailwind components. Preview, copy, and customize accessible, responsive building blocks.
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="rounded-lg border border-gray-200 bg-slate-50 p-2.5">
                <div className="flex items-center justify-end gap-2">
                  <Link
                    to="/components"
                    className="inline-flex items-center justify-center rounded-lg bg-main-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none focus:ring-2 focus-ring-main-gradient"
                    aria-label="Browse components"
                  >
                    Browse Components
                  </Link>
                  <a
                    href="#top-categories"
                    className="inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 hover:underline focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  >
                    Popular Categories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Categories */}
        <div id="top-categories" className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900" id="top-categories-heading">
              Top Categories
            </h2>
          </div>

          {/* 6 cards grid */}
          <div
            className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            role="list"
            aria-labelledby="top-categories-heading"
          >
            <CategoryCard
              href="/components?section=Base%20Components&item=Buttons"
              title="Buttons"
              count={21}
              desc="Choose actions and CTAs"
              ariaLabel="Open Buttons components"
            />
            <CategoryCard
              href="/components?section=Layout%20%26%20Content&item=Card"
              title="Cards"
              count={13}
              desc="Composable containers for grouping content"
              ariaLabel="Open Cards components"
            />
            <CategoryCard
              href="/components?section=Navigations&item=Navbar"
              title="Navigation"
              count={11}
              desc="Headers, menus, sidebars, and more"
              ariaLabel="Open Navigation components"
            />
            <CategoryCard
              href="/components?section=Basic%20Forms&item=Inputs"
              title="Forms"
              count={15}
              desc="Inputs, selects, toggles"
              ariaLabel="Open Forms components"
            />
            <CategoryCard
              href="/components?section=Tables&item=Simple%20Table"
              title="Tables"
              count={10}
              desc="Data tables with sorting, pagination"
              ariaLabel="Open Tables components"
            />
            <CategoryCard
              href="/components?section=Layout%20%26%20Content&item=Grid"
              title="Layout"
              count={9}
              desc="Grids, columns, spacing"
              ariaLabel="Open Layout components"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-3.5 w-3.5">
      <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CategoryCard({ href, title, count, desc, ariaLabel }) {
  return (
    <a
      href={href}
      className="relative block rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition card-elevate"
      aria-label={ariaLabel}
    >
      <div className="absolute top-3 right-3 inline-flex h-7 w-7 items-center justify-center rounded-lg bg-violet-600 text-white shadow">
        <ChevronRightIcon />
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{title}</h3>
        <span
          className="inline-flex min-w-[28px] h-[28px] items-center justify-center rounded-lg bg-violet-600 px-2 text-xs font-bold text-white"
          aria-label={`${count} items`}
        >
          {count}
        </span>
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {desc}
      </p>
    </a>
  );
}
