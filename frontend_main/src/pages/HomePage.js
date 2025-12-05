import React from 'react';
import { Link } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function HomePage() {
  /** Home page with hero section and Ocean gradient */
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-ocean" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Explore ready‑to‑use React UI components
            </h1>
            <p className="mt-4 text-gray-600">
              Search, preview, and copy production‑ready building blocks. Switch themes,
              view usage notes, and move fast with confidence.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <Link to="/components" className="btn-primary">Browse Components</Link>
              <a href="#features" className="btn-ghost">Learn More</a>
            </div>
          </div>
          <div className="card p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
              <div className="h-24 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
              <div className="h-24 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
              <div className="col-span-3 h-24 rounded-lg bg-white dark:bg-neutral-800 border border-gray-200 dark:border-white/10 shadow-soft" />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Live previews show exactly how each component looks.
            </p>
          </div>
        </div>

        <div id="features" className="mt-20 grid md:grid-cols-3 gap-6">
          <Feature title="Ocean Professional" desc="Crisp visuals with blue & amber accents, subtle gradients, and modern layout." />
          <Feature title="Search & Filter" desc="Quickly find components by category or tags." />
          <Feature title="Copy Code" desc="Grab the snippet with one click and integrate instantly." />
        </div>
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="card p-6">
      <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}
