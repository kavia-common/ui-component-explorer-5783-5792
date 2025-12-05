import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Home page refined to match reference: bold hero with subtle overlay, CTAs, stat chips, feature cards */
  return (
    <section className="relative overflow-hidden">
      {/* Background uses app gradient at page level already; keep a subtle hero tint */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 gradient-ocean opacity-60" />
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
        {/* Hero */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-white/70 text-gray-800 backdrop-blur shadow-sm border border-white/50">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span className="text-xs font-medium tracking-wide">Ocean Professional</span>
            </div>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white">
              Explore ready‑to‑use React UI components
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300">
              Search, preview, and copy production‑ready building blocks. Switch themes,
              view usage notes, and move fast with confidence.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/components"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-white bg-primary hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300 transition-colors"
              >
                <span>Browse Components</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200/80 bg-white/80 text-gray-800 hover:bg-white focus-visible:ring-2 focus-visible:ring-blue-300 dark:bg-neutral-900/60 dark:text-gray-200 dark:border-white/10 dark:hover:bg-neutral-900 transition-colors"
              >
                Learn More
              </a>
            </div>

            {/* Supporting chips/stats */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 text-gray-800 border border-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                Accessible
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 text-gray-800 border border-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" aria-hidden="true" />
                Dark/Light
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/70 text-gray-800 border border-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" aria-hidden="true" />
                Copy-ready
              </span>
            </div>
          </div>

          {/* Preview panel styled to match reference cards/tiles */}
          <div className="card p-6 bg-white/80 dark:bg-neutral-900/70 backdrop-blur">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
              <div className="h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
              <div className="h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
              <div className="col-span-3 h-24 rounded-xl bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Live previews show exactly how each component looks.
            </p>
          </div>
        </div>

        {/* Features */}
        <div id="features" className="mt-16 md:mt-20 grid md:grid-cols-3 gap-6">
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
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc, icon }) {
  return (
    <div className="card p-6 bg-white/90 dark:bg-neutral-900/70 backdrop-blur">
      <div className="flex items-start gap-3">
        <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-lg" aria-hidden="true">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}
