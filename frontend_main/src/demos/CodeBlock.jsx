/**
 * PUBLIC_INTERFACE
 * CodeBlock: Theme-aware syntax-highlighted code with copy button, refined padding and accessible focus states.
 */
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('xml', xml);

/**
 * Props:
 * - code: string to render
 * - language: 'js' | 'javascript' | 'html' | 'xml'
 * - title: optional heading label
 */
export default function CodeBlock({ code, language = 'javascript', title = 'Code' }) {
  const [copied, setCopied] = React.useState(false);
  const [isDark, setIsDark] = React.useState(() =>
    typeof document !== 'undefined' ? document.documentElement.classList.contains('dark') : false
  );

  // Watch for theme toggles (class change on root)
  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const style = isDark ? atomOneDark : atomOneLight;
  const langKey =
    language === 'html' ? 'xml' :
    language === 'xml' ? 'xml' :
    'javascript';

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // no-op
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{title}</span>
        <button
          onClick={onCopy}
          className="inline-flex items-center gap-1 h-9 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
          aria-live="polite"
          aria-label="Copy code to clipboard"
          title="Copy code"
          style={{
            backgroundImage: copied ? 'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)' : undefined,
            color: copied ? '#fff' : undefined
          }}
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>

      <div className="overflow-auto">
        <div className="code-surface">
          <SyntaxHighlighter
            language={langKey}
            style={style}
            customStyle={{
              margin: 0,
              borderRadius: '10px',
              fontSize: '0.875rem',
              padding: '14px 16px',
              background: isDark ? undefined : '#F8FAFC',
              fontFamily:
                'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
            }}
            wrapLongLines
            showLineNumbers={false}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
}
