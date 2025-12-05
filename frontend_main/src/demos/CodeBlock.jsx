/**
 * PUBLIC_INTERFACE
 * CodeBlock: Theme-aware syntax-highlighted code with copy button, refined padding and accessible focus states.
 * - Copies the exact code string provided (no UI artifacts).
 * - Uses Clipboard API with a safe fallback to execCommand for older browsers.
 * - Shows a temporary "Copied" feedback and an aria-live region for SR users.
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
  const [ariaMsg, setAriaMsg] = React.useState('');
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

  // Fallback copy using a hidden textarea when Clipboard API is unavailable or denied
  const fallbackCopy = (text) => {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      // Avoid showing UI or affecting layout
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '-1000px';
      ta.style.left = '-1000px';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      ta.setSelectionRange(0, ta.value.length);
      const success = document.execCommand && document.execCommand('copy');
      document.body.removeChild(ta);
      return !!success;
    } catch {
      return false;
    }
  };

  const setCopiedWithFeedback = () => {
    setCopied(true);
    setAriaMsg('Copied to clipboard');
    window.setTimeout(() => {
      setCopied(false);
      setAriaMsg('');
    }, 1500);
  };

  const onCopy = async () => {
    const text = String(code ?? '');
    // Early no-op if empty to avoid confusing feedback
    if (!text) {
      setAriaMsg('Nothing to copy');
      window.setTimeout(() => setAriaMsg(''), 1200);
      return;
    }

    // Prefer modern async Clipboard API where available and permitted
    try {
      const canUseClipboard = typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText;
      if (canUseClipboard) {
        // Some browsers require secure context or permission; we catch and fallback
        await navigator.clipboard.writeText(text);
        setCopiedWithFeedback();
        return;
      }
    } catch {
      // Will attempt fallback below
    }

    // Fallback path
    const ok = fallbackCopy(text);
    if (ok) setCopiedWithFeedback();
    else {
      setAriaMsg('Copy failed');
      window.setTimeout(() => setAriaMsg(''), 1500);
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{title}</span>
        <div className="relative flex items-center">
          {/* Live region for non-blocking a11y feedback */}
          <span
            aria-live="polite"
            className="sr-only"
          >
            {ariaMsg}
          </span>
          <button
            onClick={onCopy}
            className="inline-flex items-center gap-1 h-9 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-white/10 bg-white hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
            title={copied ? 'Copied' : 'Copy code'}
            style={{
              backgroundImage: copied ? 'linear-gradient(45deg, #af2497 10%, #902d9a 20%, #1840a0 100%)' : undefined,
              color: copied ? '#fff' : undefined
            }}
          >
            {copied ? 'Copied ✓' : 'Copy'}
          </button>
          {/* Optional small tooltip feedback near the button (non-blocking) */}
          {copied && (
            <div className="absolute right-0 top-[110%] text-xs bg-neutral-900 text-white px-2 py-1 rounded shadow-soft">
              Copied to clipboard
            </div>
          )}
        </div>
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
