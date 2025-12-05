import React, { useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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

// Header/Navbar with gradient background (brand + theme toggle only)
function Header({ theme, toggleTheme, onOpenSidebar }) {
  return (
    <header
      className="sticky top-0 z-40 bg-navbar-gradient navbar-overlay shadow-sm"
      role="banner"
      aria-label="Primary"
    >
      {/* Full-width flex, no outer margins/padding pushing inward */}
      <div className="w-full flex items-center justify-between text-white px-3 sm:px-4 py-3 sm:py-3.5">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            ☰
          </button>
          <Link to="/" className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 rounded-lg">
            <div className="w-10 h-10 rounded-xl bg-white/30 shadow-soft" />
            <div className="flex flex-col leading-tight">
              <span className="font-semibold tracking-tight">UI Component Explorer</span>
              <span className="text-[11px] text-white/80">Ocean Professional</span>
            </div>
          </Link>
        </div>

        {/* Spacer to keep full-width layout without inner nav items */}
        <div aria-hidden="true" />

        <button
          onClick={toggleTheme}
          className="inline-flex items-center justify-center h-10 px-3 rounded-lg text-white font-medium hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title="Toggle theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}

// Layout with persistent sidebar - no left gap, content flush to sidebar
function Layout({ children, theme, toggleTheme }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-950 transition-colors relative z-[1]">
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenSidebar={() => setDrawerOpen(true)}
      />
      {/* Two-column layout: fixed sidebar width + fluid content, no outer gutters */}
      <div className="w-full">
        <div className="grid grid-cols-[240px,1fr] lg:grid-cols-[240px,1fr] gap-0">
          <Sidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
          {/* Content column spans full remaining width; internal padding only */}
          <main className="min-w-0 py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
            <div className="container-prose">
              {children}
            </div>
          </main>
        </div>
      </div>
      <footer className="mt-auto border-t border-gray-200/60 dark:border-white/10 py-6 text-center text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-neutral-950">
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
          <Route path="/components/:id" element={<ComponentsListPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
