import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentsListPage from './pages/ComponentsListPage';
import ComponentDetailPage from './pages/ComponentDetailPage';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar.jsx';

/**
 * PUBLIC_INTERFACE
 * App: Root component configuring routing and the global layout shell.
 * - Renders a fixed top Navbar across routes
 * - Two-column layout (Sidebar + Content) under the navbar
 * - Sidebar flush with left edge, scrollable independently
 * - Main content scrolls independently; no horizontal scroll
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          {/* All primary routes render within the sidebar layout */}
          <Route element={<WithSidebarLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/components" element={<ComponentsListPage />} />
            <Route path="/components/:id" element={<ComponentDetailPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

/**
 * PUBLIC_INTERFACE
 * WithSidebarLayout: Two-column flex layout with a fixed top navbar.
 * - Sidebar on the left, flush at x=0 with its own scroll
 * - Content on the right, independently scrollable
 * - Uses padding-top equal to navbar height to prevent overlap
 */
function WithSidebarLayout() {
  const location = useLocation();
  const isComponents = location.pathname.startsWith('/components');

  // Navbar height is 64px (h-16); push content below it
  return (
    <div className="pt-16">
      <div className="flex min-h-[calc(100vh-4rem)] w-full overflow-hidden no-left-gutter">
        {/* Sidebar column */}
        <aside
          aria-label="Component navigation sidebar"
          className="w-[260px] flex-shrink-0 overflow-hidden"
        >
          {/* Sidebar must be flush left and scroll independently */}
          <div className="h-full max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div
              className="h-full"
            >
              {/* Keep gradient + hover/active styles from Sidebar component */}
              <Sidebar />
            </div>
          </div>
        </aside>

        {/* Main content column */}
        <section
          aria-label={isComponents ? 'Component content' : 'Content'}
          className="flex-1 min-w-0 overflow-y-auto"
        >
          {/* Internal content container; avoid outer left margins/paddings that offset the sidebar */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
