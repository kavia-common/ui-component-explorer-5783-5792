import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage.js';
import ComponentsListPage from './pages/ComponentsListPage.js';
import ComponentDetailPage from './pages/ComponentDetailPage.js';
import CatalogPage from './pages/CatalogPage.jsx';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App entry that restores the previous layout: Navbar at top, Sidebar on the left,
 * and routed content on the right. Sidebar coexists with Navbar and does not get
 * conditionally hidden except on specific pages if needed (not currently).
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-6 py-6">
            <Sidebar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/components" element={<ComponentsListPage />} />
                <Route path="/components/:id" element={<ComponentDetailPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
