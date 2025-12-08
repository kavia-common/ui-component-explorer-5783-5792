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
 * App entry setting a persistent shell:
 * - Fixed Navbar at top (h-16)
 * - Fixed Sidebar at left under the navbar, flush with left edge, gradient background
 * - Main content area scrolls independently from sidebar
 * - HomePage is reachable at '/' and content area is consistent across routes
 */
function App() {
  // Layout constants
  const NAVBAR_HEIGHT = 64; // h-16

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900">
        {/* Fixed top navbar */}
        <Navbar />

        {/* Shell: sidebar + main, padded below fixed navbar */}
        <div className="flex" style={{ paddingTop: NAVBAR_HEIGHT }}>
          {/* Fixed, flush-left sidebar with independent scroll */}
          <div
            className="fixed left-0 top-16 z-20 bg-brand-45 text-white"
            style={{
              width: 256, // w-64
              height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
            }}
          >
            {/* Sidebar content wrapper with gradient overlay readability and vertical scroll */}
            <div className="h-full overflow-y-auto">
              <Sidebar />
            </div>
          </div>

          {/* Main content: add left margin equal to sidebar width so it doesn't underneath sidebar */}
          <main
            className="flex-1"
            style={{
              marginLeft: 256,
              height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
              overflowY: 'auto',
            }}
          >
            {/* Page container: consistent paddings across routes, no left outer gap */}
            <div className="px-4 sm:px-6 lg:px-8 py-6">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/components" element={<ComponentsListPage />} />
                <Route path="/components/:id" element={<ComponentDetailPage />} />
                <Route path="/catalog" element={<CatalogPage />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
