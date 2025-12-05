import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentsListPage from './pages/ComponentsListPage';
import ComponentDetailPage from './pages/ComponentDetailPage';

// Theme utilities
const THEME_KEY = 'theme_preference';

// PUBLIC_INTERFACE
export function useTheme() {
  /** Hook to read/update theme mode with persistence */
  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_KEY) : null;
    if (stored) return stored;
    // respect system
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return useMemo(() => ({ theme, setTheme }), [theme]);
}

// Header
function Header({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-950/70 border-b border-gray-200/60 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-soft" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900 dark:text-white">UI Component Explorer</span>
            <span className="text-xs text-gray-500">Ocean Professional</span>
          </div>
        </Link>
        <nav className="flex items-center gap-1">
          <NavLink to="/" end className={({isActive}) => `px-3 py-2 rounded-lg text-sm ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}>Home</NavLink>
          <NavLink to="/components" className={({isActive}) => `px-3 py-2 rounded-lg text-sm ${isActive ? 'text-primary' : 'text-gray-600 dark:text-gray-300 hover:text-primary'}`}>Components</NavLink>
        </nav>
        <button
          onClick={toggleTheme}
          className="btn-ghost"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}

// Layout
function Layout({ children, theme, toggleTheme }) {
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-neutral-950 transition-colors">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-gray-200/60 dark:border-white/10 py-6 text-center text-sm text-gray-500">
        Built with React & Tailwind • Ocean Professional
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Root application with router and theming */
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <BrowserRouter>
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsListPage />} />
          <Route path="/components/:id" element={<ComponentDetailPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
