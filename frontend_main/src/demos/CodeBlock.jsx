/**
 * PUBLIC_INTERFACE
 * CodeBlock: Minimal syntax-highlighted code area with copy button, refined padding and focus states.
 */
import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import atomOneLight from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light';
import atomOneDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark';

SyntaxHighlighter.registerLanguage('javascript', js);

export default function CodeBlock({ code }) {
  const [copied,setCopied] = React.useState(false);
  const isDark = document.documentElement.classList.contains('dark');
  const style = isDark ? atomOneDark : atomOneLight;

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(()=> setCopied(false), 1500);
    } catch { /* no-op */ }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Code</span>
        <button
          onClick={onCopy}
          className="btn-ghost"
          aria-live="polite"
          title="Copy code"
        >
          {copied ? 'Copied ✓' : 'Copy'}
        </button>
      </div>

      <div className="overflow-auto code-surface">
        <SyntaxHighlighter
          language="javascript"
          style={style}
          customStyle={{
            margin: 0,
            borderRadius: '10px',
            fontSize: '0.875rem',
            padding: '12px 14px',
            background: isDark ? undefined : '#F8FAFC',
            fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
          }}
          wrapLongLines
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
