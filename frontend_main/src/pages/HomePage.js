import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * HomePage: Welcome screen visually aligned to the provided screenshot.
 * - Preserves global gradients: navbar/sidebar share navbar gradient; page uses 87deg gradient (set on body wrapper)
 * - Implements hero/header band with headline, subheadline, CTAs, supporting chips
 * - Includes featured cards section with subtle glassy surfaces
 * - Uses semantic headings, accessible buttons/links, and focus-visible states
 */
export default function HomePage() {
  /** Visual structure mirrors the screenshot while keeping responsive behavior */
  return (
    <section className="relative overflow-hidden">
      {/* Background helpers: keep light ocean overlay and soft blobs to match screenshot depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-ocean opacity-60" />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/25 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8 md:pt-16 md:pb-12">
        {/* Top helper band to reflect screenshot label/pill and secondary hint */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/75 text-gray-900 backdrop-blur border border-white/60 shadow-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.08em]">Ocean Professional</span>
          </span>
          <span className="hidden sm:inline text-xs text-gray-800/80 bg-white/60 px-2 py-1 rounded-md border border-white/50">
            Blue & amber accents • Modern layout
          </span>
        </div>

        {/* Hero area */}
        <div className="mt-6 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Copy column */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h1 className="text-[2.25rem] leading-[1.1] sm:text-[2.75rem] md:text-[3rem] font-extrabold tracking-tight text-gray-900 dark:text-white">
              Explore ready‑to‑use React UI components
            </h1>
            <p className="mt-4 text-[1.05rem] sm:text-[1.1rem] leading-relaxed text-gray-800/90 dark:text-gray-300">
              Browse, preview, and copy production‑ready building blocks. Toggle themes, read usage notes,
              and ship faster with confidence.
            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/components"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-white bg-primary hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-0 shadow-soft transition-colors"
                role="button"
              >
                <span className="font-medium">Browse Components</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 border border-white/70 bg-white/80 text-gray-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 dark:bg-neutral-900/60 dark:text-gray-200 dark:border-white/15 dark:hover:bg-neutral-900 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Support chips */}
            <ul className="mt-6 flex flex-wrap items-center gap-2 text-sm" role="list">
              <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/75 text-gray-900 border border-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Accessible
              </li>
              <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/75 text-gray-900 border border-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                Dark/Light
              </li>
              <li className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/75 text-gray-900 border border-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                Copy‑ready
              </li>
            </ul>
          </div>

          {/* Preview/tiles column */}
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/75 dark:bg-neutral-900/70 backdrop-blur shadow-soft p-5">
              {/* Featured tile grid resembling screenshot arrangement */}
              <div className="grid grid-cols-3 gap-4">
                <div className="h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200/80 dark:border-white/10 shadow-soft" />
                <div className="h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200/80 dark:border-white/10 shadow-soft" />
                <div className="h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200/80 dark:border-white/10 shadow-soft" />

                <div className="col-span-3 h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200/80 dark:border-white/10 shadow-soft" />
              </div>
              <p className="mt-4 text-sm text-gray-700/90 dark:text-gray-400">
                Live previews showcase real component surfaces and spacing.
              </p>
            </div>
          </div>
        </div>

        {/* Divider that visually lines up with screenshot spacing */}
        <div className="mt-12 md:mt-14 h-px bg-white/50 dark:bg-white/10 rounded-full" aria-hidden="true" />

        {/* Featured cards/sections */}
        <section id="features" className="mt-10 md:mt-12 grid md:grid-cols-3 gap-6">
          <Feature
            title="Ocean Professional"
            desc="Crisp visuals with blue & amber accents, subtle gradients, and modern layout."
            icon="🌊"
          />
          <Feature
            title="Search & Filter"
            desc="Quickly find components by category or tags."
            icon="🔎"
          />
          <Feature
            title="Copy Code"
            desc="Grab the snippet with one click and integrate instantly."
            icon="📋"
          />
        </section>

        {/* Screen reference for internal comparison only (not visible to users) */}
        <span className="sr-only">
          Reference screenshot available at /assets/home-reference.png for visual QA.
        </span>
      </div>
    </section>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="card p-6 bg-white/85 dark:bg-neutral-900/70 backdrop-blur">
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg"
          aria-hidden="true"
        >
          {icon}
        </div>
        <div>
          <h3 className="text-[1.05rem] font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-[0.975rem] leading-relaxed text-gray-700 dark:text-gray-300">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
