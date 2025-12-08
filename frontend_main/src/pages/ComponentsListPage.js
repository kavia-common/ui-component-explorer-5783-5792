import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import componentsData from '../data/components.json';

/**
 * PUBLIC_INTERFACE
 * ComponentsListPage renders the list of components and supports filtering via URL params:
 * - category: selected category filter
 * - q: search query
 */
const ComponentsListPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const category = params.get('category') || '';
  const q = params.get('q') || '';

  const [search, setSearch] = useState(q);

  useEffect(() => {
    // keep local input in sync with URL
    setSearch(q);
  }, [q]);

  const categories = useMemo(() => {
    const set = new Set();
    (componentsData || []).forEach((c) => {
      if (Array.isArray(c.categories)) {
        c.categories.forEach((cat) => set.add(cat));
      } else if (typeof c.category === 'string' && c.category.trim()) {
        set.add(c.category.trim());
      }
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, []);

  const filtered = useMemo(() => {
    const query = q.toLowerCase();
    return (componentsData || []).filter((item) => {
      const inCategory = category
        ? (Array.isArray(item.categories) ? item.categories.includes(category) : item.category === category)
        : true;
      const matchesQuery =
        query.length === 0
          ? true
          : (item.name || '').toLowerCase().includes(query) ||
            (item.description || '').toLowerCase().includes(query) ||
            (Array.isArray(item.tags) ? item.tags.join(' ').toLowerCase().includes(query) : false);
      return inCategory && matchesQuery;
    });
  }, [category, q]);

  const onSubmit = (e) => {
    e.preventDefault();
    const next = new URLSearchParams(location.search);
    if (search) {
      next.set('q', search);
    } else {
      next.delete('q');
    }
    navigate(`/components?${next.toString()}`);
  };

  const clearFilters = () => {
    navigate('/components');
  };

  return (
    <div>
      <header className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">Components</h1>
          <p className="mt-1 text-sm text-gray-500">
            Browse ready-to-use UI building blocks. Filter by category or search by name, description, or tags.
          </p>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          className="inline-flex items-center rounded-md border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Clear filters
        </button>
      </header>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <form onSubmit={onSubmit} className="sm:col-span-2">
          <label htmlFor="search" className="sr-only">
            Search components
          </label>
          <div className="flex">
            <input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search components..."
              className="w-full rounded-l-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-r-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>

        <div>
          <label htmlFor="category" className="sr-only">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => {
              const next = new URLSearchParams(location.search);
              if (e.target.value) {
                next.set('category', e.target.value);
              } else {
                next.delete('category');
              }
              navigate(`/components?${next.toString()}`);
            }}
            className="w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {category || q ? (
        <div className="mb-4 text-sm text-gray-600">
          Filters:
          {category && <span className="ml-2 rounded bg-gray-100 px-2 py-1">category: {category}</span>}
          {q && <span className="ml-2 rounded bg-gray-100 px-2 py-1">q: {q}</span>}
        </div>
      ) : null}

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <li key={item.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-2 flex items-start justify-between">
              <h3 className="text-base font-semibold text-gray-900">{item.name}</h3>
              <span className="text-xs text-gray-500">
                {Array.isArray(item.categories) ? item.categories[0] : item.category}
              </span>
            </div>
            <p className="mb-4 line-clamp-2 text-sm text-gray-600">{item.description}</p>
            <div className="flex items-center justify-between">
              <Link to={`/components/${item.id}`} className="text-sm font-medium text-blue-700 hover:text-blue-800">
                View details
              </Link>
              {Array.isArray(item.tags) && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-1">
                  {item.tags.slice(0, 3).map((t) => (
                    <span key={t} className="rounded bg-blue-50 px-2 py-0.5 text-[10px] text-blue-700">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {filtered.length === 0 && (
        <div className="rounded-md border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          No components match your filters.
        </div>
      )}
    </div>
  );
};

export default ComponentsListPage;
