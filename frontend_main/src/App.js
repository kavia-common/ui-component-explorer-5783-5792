import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import './App.css';
import HomePage from './pages/HomePage';
import ComponentsListPage from './pages/ComponentsListPage';
import ComponentDetailPage from './pages/ComponentDetailPage';

/**
 * PUBLIC_INTERFACE
 * App: Root component that defines the application routes without a persistent Sidebar shell.
 * Routes:
 * - /            -> HomePage
 * - /components  -> ComponentsListPage (browsing and previews)
 * - /components/:id -> ComponentDetailPage (detail)
 */
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-neutral-950">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/components" element={<ComponentsListPage />} />
            <Route path="/components/:id" element={<ComponentDetailPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
