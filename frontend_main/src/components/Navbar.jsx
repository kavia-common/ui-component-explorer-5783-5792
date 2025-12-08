import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Navbar: Minimal top bar displaying the app name.
 * - Fixed at the top with a subtle shadow and brand gradient line.
 * - Height ~64px and full width; content below should account for this height.
 */
export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-30 bg-white border-b border-gray-200"
      role="banner"
      aria-label="Application header"
    >
      <div className="h-16 flex items-center">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h1 className="text-base font-semibold tracking-tight text-gray-900">
            UI Component Explorer
          </h1>
        </div>
      </div>
      <div
        className="h-0.5"
        style={{
          background:
            'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)',
        }}
        aria-hidden="true"
      />
    </header>
  );
}
