import React, { useEffect, useMemo, useState } from 'react';
import componentsData from '../data/components.json';
import { Link, useSearchParams } from 'react-router-dom';

// PUBLIC_INTERFACE
export default function ComponentsListPage() {
  /** Listing page: search, category filter, responsive grid */
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [category, setCategory] = useState(searchParams.get('cat') || 'All');

  useEffect(() => {
    const params = {};
    if (query) params.q = query;
    if (category && category !== 'All') params.cat = category;
    setSearchParams(params, { replace: true });
  }, [query, category, setSearchParams]);

  const categories = useMemo(() => ['All', ...Array.from(new Set(componentsData.map(c => c.category)))], []);
  const filtered = useMemo(() => {
    let list = componentsData;
    if (category !== 'All') list = list.filter(c => c.category === category);
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(c => c.name.toLowerCase().includes(q) || c.tags.join(' ').toLowerCase().includes(q));
    }
    return list;
  }, [query, category]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-6">
          <div className="card p-4">
            <label htmlFor="search" className="text-sm text-gray-600 dark:text-gray-300">Search</label>
            <input
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search components..."
              className="input mt-2"
            />
          </div>
          <div className="card p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white">Categories</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg border text-sm transition-colors ${
                    category === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white dark:bg-neutral-900 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Components</h2>
            <p className="text-sm text-gray-500">{filtered.length} results</p>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map(item => (
              <Link to={`/components/${item.id}`} key={item.id} className="card p-4 hover:shadow-lg transition-shadow">
                <div className="h-28 rounded-md border border-dashed border-gray-300 dark:border-white/10 bg-white dark:bg-neutral-900 flex items-center justify-center">
                  {/* Minimal mock preview icon area */}
                  <span className="text-sm text-gray-500">Preview</span>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
                  <div className="mt-2 flex items-center flex-wrap gap-2">
                    <span className="badge">{item.category}</span>
                    {item.tags.slice(0,2).map(tag => <span className="text-xs text-gray-500" key={tag}>#{tag}</span>)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
