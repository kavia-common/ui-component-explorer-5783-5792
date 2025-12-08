import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Navbar: Minimal top bar displaying the app name.
 * - Fixed at the top with a subtle shadow and brand gradient background matching the sidebar.
 * - Height ~64px and full width; content below should account for this height.
 */
export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 shadow-sm"
      role="banner"
      aria-label="Application header"
    >
      {/* Gradient background wrapper to match Sidebar; add translucent overlay for readability */}
      <div className="bg-brand-45 navbar-overlay">
        <div className="h-16 flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <h1 className="text-base font-semibold tracking-tight text-white">
              UI Component Explorer
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
}
