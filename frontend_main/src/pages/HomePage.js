import React from 'react';
import { Link } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * HomePage: Pixel-accurate Home page per extracted design specs.
 * - Keeps global gradients (navbar/sidebar gradient, 87° app background)
 * - Implements hero card, header toggle, and Top Categories grid
 * - Accessibility: semantic headings, interactive focus-visible, aria labels
 */
export default function HomePage() {
  return (
    <section className="relative">
      {/* Header toolbar aligned with content: right 'Dark' toggle */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-8">
        <header className="flex items-center justify-end pb-3">
          <button
            type="button"
            className="h-[36px] px-4 rounded-full bg-white text-[14px] font-semibold text-slate-600 border border-[var(--border)] shadow-sm hover:bg-white focus-soft"
            aria-pressed="false"
            aria-label="Toggle dark mode"
          >
            Dark
          </button>
        </header>
      </div>

      {/* Main content container */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-8 pb-10">
        {/* Hero / Welcome card */}
        <section
          className="card p-6 md:p-6"
          style={{ boxShadow: 'var(--shadow-card)' }}
          aria-labelledby="hero-title"
        >
          <div className="grid md:grid-cols-[1fr_minmax(240px,300px)] gap-6 items-center">
            <div>
              <span className="badge badge--welcome" aria-label="Welcome">Welcome</span>
              <h1
                id="hero-title"
                className="mt-3 text-[28px] md:text-[30px] leading-snug font-bold text-[var(--text-primary)]"
              >
                Build faster with ready‑to‑use UI components
              </h1>
              <p className="mt-2 text-[15px] leading-relaxed text-[var(--text-secondary)]">
                Explore a curated library of React + Tailwind components. Preview, copy, and
                customize accessible, responsive building blocks.
              </p>
            </div>

            {/* Actions inset panel */}
            <div className="w-full">
              <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] p-2.5">
                <div className="flex items-center justify-end gap-2">
                  <Link to="/components" className="btn-primary">
                    Browse Components
                  </Link>
                  <a href="#top-categories" className="btn-link">
                    Popular Categories
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section id="top-categories" className="mt-7 md:mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] md:text-[22px] font-bold text-[var(--text-primary)]">
              Top Categories
            </h2>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c) => (
              <CategoryCard key={c.title} {...c} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M7 5l6 5-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CategoryCard({ title, count, desc }) {
  return (
    <article
      className="relative card p-5 card-elevate"
      style={{ minHeight: 148 }}
    >
      {/* top-right floating chevron square */}
      <div className="absolute top-3 right-3 chevron-square" aria-hidden="true">
        <ChevronRightIcon />
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[16.5px] md:text-[17px] font-semibold text-[var(--text-primary)]">{title}</h3>
        <span
          className="inline-flex items-center justify-center min-w-[28px] h-[28px] px-2 rounded-lg text-[12.5px] font-bold text-white"
          style={{ background: 'var(--accent)' }}
          aria-label={`${count} items`}
        >
          {count}
        </span>
      </div>
      <p className="mt-2 text-[13.5px] leading-relaxed text-[var(--text-secondary)]">
        {desc}
      </p>
    </article>
  );
}

const CATEGORIES = [
  { title: 'Buttons', count: 21, desc: 'Choose actions and CTAs' },
  { title: 'Cards', count: 13, desc: 'Composable containers for grouping content' },
  { title: 'Navigation', count: 11, desc: 'Headers, menus, sidebars, and more' },
  { title: 'Forms', count: 15, desc: 'Inputs, selects, toggles' },
  { title: 'Tables', count: 10, desc: 'Data tables with sorting, pagination' },
  { title: 'Layout', count: 9, desc: 'Grids, columns, spacing' },
];
