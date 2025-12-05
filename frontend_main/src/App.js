import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentsListPage from './pages/ComponentsListPage';
import ComponentDetailPage from './pages/ComponentDetailPage';
import Sidebar from './components/Sidebar';

// Theme utilities
const THEME_KEY = 'theme_preference';

// PUBLIC_INTERFACE
export function useTheme() {
  /** Hook to read/update theme mode with persistence */
  const [theme, setTheme] = useState(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(THEME_KEY) : null;
    if (stored) return stored;
    // respect system
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
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

// Header/Navbar with gradient background
function Header({ theme, toggleTheme, onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10">
      <div className="bg-navbar-gradient navbar-overlay">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
              onClick={onOpenSidebar}
              aria-label="Open sidebar"
            >
              ☰
            </button>
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/30 shadow-soft" />
              <div className="flex flex-col">
                <span className="font-semibold">UI Component Explorer</span>
                <span className="text-xs text-white/80">Ocean Professional</span>
              </div>
            </Link>
          </div>

          <nav className="hidden sm:flex items-center gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm ${
                  isActive ? 'bg-white/25 text-white' : 'text-white/90 hover:bg-white/15'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/components"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm ${
                  isActive ? 'bg-white/25 text-white' : 'text-white/90 hover:bg-white/15'
                }`
              }
            >
              Components
            </NavLink>
          </nav>

          <button
            onClick={toggleTheme}
            className="inline-flex items-center justify-center px-3 py-2 rounded-lg text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

// Layout with persistent sidebar
function Layout({ children, theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-neutral-950 transition-colors">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSidebar={() => setDrawerOpen(true)}
      />
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-6">
            <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
            <main className="flex-1 py-8">{children}</main>
          </div>
        </div>
      </div>
      <footer className="mt-auto border-t border-gray-200/60 dark:border-white/10 py-6 text-center text-sm text-gray-500">
        Built with React & Tailwind • Ocean Professional
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
function App() {
  /** Root application with router and theming */
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

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
