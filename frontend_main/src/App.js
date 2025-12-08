import React from 'react';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentsListPage from './pages/ComponentsListPage';
import ComponentDetailPage from './pages/ComponentDetailPage';
import Sidebar from './components/Sidebar';

/**
 * PUBLIC_INTERFACE
 * App: Root application component configuring routing and ensuring Sidebar displays on components-related routes.
 * Routes:
 * - /                 -> HomePage (full width, no sidebar)
 * - /components       -> ComponentsListPage (with sidebar)
 * - /components/:id   -> ComponentDetailPage (with sidebar)
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Routes>
          {/* Home route without sidebar */}
          <Route path="/" element={<HomePageLayout />}>
            <Route index element={<HomePage />} />
          </Route>

          {/* Any components-related route renders within the sidebar layout */}
          <Route element={<WithSidebarLayout />}>
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
 * HomePageLayout: Full-width container layout for the landing page without Sidebar.
 * Keeps the content centered and padded, matching design tokens.
 */
function HomePageLayout() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <Outlet />
    </main>
  );
}

/**
 * PUBLIC_INTERFACE
 * WithSidebarLayout: Two-column layout with Sidebar on the left and route content on the right.
 * - Sticky sidebar on larger screens
 * - Preserves original styling for the sidebar container
 * - Ensures visibility and avoids CSS that could hide it
 */
function WithSidebarLayout() {
  const location = useLocation();
  const isComponents = location.pathname.startsWith('/components');

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-6">
        <aside aria-label="Component navigation sidebar" className="md:sticky md:self-start top-6 z-10">
          <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
            <Sidebar />
          </div>
        </aside>
        <section aria-label={isComponents ? 'Component content' : 'Content'}>
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default App;
