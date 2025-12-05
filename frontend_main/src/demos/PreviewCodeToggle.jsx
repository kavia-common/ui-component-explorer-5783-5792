import React from 'react';

/**
 * PUBLIC_INTERFACE
 * TabToggle: A small accessible toggle between "Preview" and "Code".
 * Provides focus-visible rings and proper aria attributes.
 */
export function TabToggle({ value, onChange, idBase = 'preview-code' }) {
  const tabs = ['Preview', 'Code'];
  return (
    <div role="tablist" aria-label="View toggle" className="inline-flex rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-0.5">
      {tabs.map((t) => {
        const selected = value === t;
        const tabId = `${idBase}-tab-${t.toLowerCase()}`;
        const panelId = `${idBase}-panel-${t.toLowerCase()}`;
        return (
          <button
            key={t}
            id={tabId}
            role="tab"
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange?.(t)}
            className={
              'px-3 py-1.5 text-sm rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors ' +
              (selected
                ? 'text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-700'
                : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5')
            }
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * CodeTabs: Accessible sub-tabs for HTML and JS inside the Code panel,
 * each with its own copy-ready CodeBlock render.
 */
export function CodeTabs({ html, js, renderBlock, idBase = 'code-tabs' }) {
  const [tab, setTab] = React.useState('HTML');
  const tabs = ['HTML', 'JS'];
  return (
    <div>
      <div role="tablist" aria-label="Code language" className="flex items-center justify-between mb-2">
        <div className="inline-flex gap-1 rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 p-0.5">
          {tabs.map((t) => {
            const selected = t === tab;
            const tabId = `${idBase}-tab-${t.toLowerCase()}`;
            const panelId = `${idBase}-panel-${t.toLowerCase()}`;
            return (
              <button
                key={t}
                id={tabId}
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setTab(t)}
                className={
                  'px-2.5 py-1.5 text-xs sm:text-sm rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors ' +
                  (selected
                    ? 'text-white bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-700'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5')
                }
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        {tab === 'HTML' ? (
          <div
            id={`${idBase}-panel-html`}
            role="tabpanel"
            aria-labelledby={`${idBase}-tab-html`}
          >
            {renderBlock({ code: html, language: 'html', title: 'HTML' })}
          </div>
        ) : (
          <div
            id={`${idBase}-panel-js`}
            role="tabpanel"
            aria-labelledby={`${idBase}-tab-js`}
          >
            {renderBlock({ code: js, language: 'javascript', title: 'JS' })}
          </div>
        )}
      </div>
    </div>
  );
}
