import React from 'react';
import { Link } from 'react-router-dom';
import CodeBlock from '../demos/CodeBlock';
import { TabToggle, CodeTabs } from '../demos/PreviewCodeToggle';

/**
 * PUBLIC_INTERFACE
 * LayoutSplitterPage
 * A self-contained documentation/demo page for the "Layout Splitter" component.
 * It showcases seven sections with synchronized Preview and Code (HTML/JS) blocks:
 * 1) Basic usage
 * 2) Horizontal direction
 * 3) Vertical direction
 * 4) Mixed direction (nested split)
 * 5) Manually added splitters
 * 6) Limit size (min/max constraints)
 * 7) Destroy and Reinitialize controls
 *
 * Notes:
 * - This page is framework-agnostic (vanilla HTML/CSS/JS) for the Preview/Code.
 * - It preserves global shell layout and the Ocean Professional theme.
 * - No routing/sidebar changes are made; this page can be linked to from catalog if desired.
 */
export default function LayoutSplitterPage() {
  return (
    <div className="space-y-8">
      <nav aria-label="Breadcrumb" className="mb-1">
        <ol className="breadcrumbs flex items-center gap-2">
          <li><Link to="/components" className="hover:underline">Components</Link></li>
          <li aria-hidden="true" className="text-slate-400">/</li>
          <li className="text-slate-700 font-medium">Layout Splitter</li>
        </ol>
      </nav>

      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Layout Splitter</h1>
          <p className="text-gray-600 mt-1">
            Resizable panels separated by draggable splitters. Built with utility classes and minimal vanilla JS for interactivity.
          </p>
        </div>
      </header>

      <Section
        title="1) Basic usage"
        description="Two panes separated by a visual splitter (no drag)."
        html={`<div class="flex rounded-lg border bg-white overflow-hidden">
  <div class="basis-1/2 min-w-[120px] p-4 text-sm grid place-items-center text-gray-700">Left</div>
  <div class="w-1 bg-gray-200" role="separator" aria-orientation="vertical"></div>
  <div class="basis-1/2 min-w-[120px] p-4 text-sm grid place-items-center text-gray-700">Right</div>
</div>`}
      />

      <Section
        title="2) Horizontal direction"
        description="Top and Bottom panes with a horizontal splitter (visual only)."
        html={`<div class="rounded-lg border bg-white overflow-hidden">
  <div class="flex flex-col h-64">
    <div class="flex-1 min-h-[80px] grid place-items-center text-sm text-gray-700">Top</div>
    <div class="h-1 bg-gray-200" role="separator" aria-orientation="horizontal"></div>
    <div class="flex-1 min-h-[80px] grid place-items-center text-sm text-gray-700">Bottom</div>
  </div>
</div>`}
      />

      <Section
        title="3) Vertical direction"
        description="Left and Right panes with a vertical splitter (visual only)."
        html={`<div class="rounded-lg border bg-white overflow-hidden">
  <div class="flex h-64">
    <div class="basis-1/2 min-w-[120px] grid place-items-center text-sm text-gray-700">Left</div>
    <div class="w-1 bg-gray-200" role="separator" aria-orientation="vertical"></div>
    <div class="basis-1/2 min-w-[120px] grid place-items-center text-sm text-gray-700">Right</div>
  </div>
</div>`}
      />

      <Section
        title="4) Mixed direction (nested)"
        description="Top, Center, Bottom nested with Left and Right to demonstrate mixed directions (visual only)."
        html={`<div class="rounded-lg border bg-white overflow-hidden">
  <div class="flex h-72">
    <div class="basis-1/2 min-w-[140px] border-r grid place-items-center text-sm text-gray-700">Left</div>
    <div class="basis-1/2 min-w-[140px] flex flex-col">
      <div class="flex-1 grid place-items-center text-sm border-b text-gray-700">Top</div>
      <div class="h-1 bg-gray-200" role="separator" aria-orientation="horizontal"></div>
      <div class="flex-1 grid place-items-center text-sm text-gray-700">Bottom</div>
    </div>
  </div>
</div>`}
      />

      <InteractiveSection
        title="5) Manually added splitters"
        description="Adds draggable splitters manually using vanilla JS. Drag the handles to resize the panes."
        html={`<div data-split-root class="rounded-lg border bg-white overflow-hidden">
  <div class="flex h-64 relative">
    <div data-pane="left" class="min-w-[80px] w-1/3 grid place-items-center text-sm text-gray-700">Left</div>
    <div data-splitter="vertical" class="w-1 bg-gray-200 hover:bg-gray-300 cursor-col-resize" role="separator" aria-orientation="vertical"></div>
    <div class="flex-1 flex flex-col min-w-[160px]">
      <div data-pane="top" class="min-h-[80px] h-1/2 border-b grid place-items-center text-sm text-gray-700">Top</div>
      <div data-splitter="horizontal" class="h-1 bg-gray-200 hover:bg-gray-300 cursor-row-resize" role="separator" aria-orientation="horizontal"></div>
      <div data-pane="bottom" class="flex-1 grid place-items-center text-sm text-gray-700">Bottom</div>
    </div>
  </div>
</div>`}
        js={`(function(){
  const root = document.currentScript?.previousElementSibling?.querySelector?.('[data-split-root]') || document.querySelector('[data-split-root]');
  if (!root) return;

  const vSplitter = root.querySelector('[data-splitter="vertical"]');
  const hSplitter = root.querySelector('[data-splitter="horizontal"]');
  const leftPane = root.querySelector('[data-pane="left"]');
  const topPane  = root.querySelector('[data-pane="top"]');
  const bottomPane = root.querySelector('[data-pane="bottom"]');

  let dragging = null;

  function onMouseMove(e){
    if (!dragging) return;
    const rect = root.getBoundingClientRect();
    if (dragging === 'vertical') {
      const x = e.clientX - rect.left;
      const minLeft = 80; // px
      const maxLeft = rect.width - 160; // ensure right side min width
      const clamped = Math.max(minLeft, Math.min(x, maxLeft));
      leftPane.style.width = clamped + 'px';
    } else if (dragging === 'horizontal') {
      const col = hSplitter.parentElement;
      const colRect = col.getBoundingClientRect();
      const y = e.clientY - colRect.top;
      const minTop = 80; // px
      const maxTop = colRect.height - 80; // ensure bottom min height
      const clamped = Math.max(minTop, Math.min(y, maxTop));
      topPane.style.height = clamped + 'px';
    }
  }
  function stop(){
    dragging = null;
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', stop);
  }
  function start(which){
    dragging = which;
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stop);
  }

  vSplitter?.addEventListener('mousedown', ()=> start('vertical'));
  hSplitter?.addEventListener('mousedown', ()=> start('horizontal'));
})();`}
      />

      <InteractiveSection
        title="6) Limit size (min/max constraints)"
        description="Drag within allowed ranges. Constraints are enforced in JS to avoid collapsing panes."
        html={`<div data-split-limit class="rounded-lg border bg-white overflow-hidden">
  <div class="flex h-64">
    <div data-pane="left" class="min-w-[120px] w-1/2 grid place-items-center text-sm text-gray-700">Left (min 120px)</div>
    <div data-splitter="vertical" class="w-1 bg-gray-200 hover:bg-gray-300 cursor-col-resize" role="separator" aria-orientation="vertical"></div>
    <div data-pane="right" class="flex-1 min-w-[160px] grid place-items-center text-sm text-gray-700">Right (min 160px)</div>
  </div>
</div>`}
        js={`(function(){
  const root = document.currentScript?.previousElementSibling?.querySelector?.('[data-split-limit]') || document.querySelector('[data-split-limit]');
  if (!root) return;
  const splitter = root.querySelector('[data-splitter="vertical"]');
  const left = root.querySelector('[data-pane="left"]');
  const right = root.querySelector('[data-pane="right"]');

  const MIN_LEFT = 120;
  const MIN_RIGHT = 160;

  let dragging = false;
  function onMove(e){
    if (!dragging) return;
    const rect = root.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const maxLeft = rect.width - MIN_RIGHT;
    const clamped = Math.max(MIN_LEFT, Math.min(x, maxLeft));
    left.style.width = clamped + 'px';
  }
  function stop(){
    dragging = false;
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', stop);
  }
  function start(){
    dragging = true;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', stop);
  }
  splitter?.addEventListener('mousedown', start);
})();`}
      />

      <InteractiveSection
        title="7) Destroy and Reinitialize"
        description="Use the controls to destroy listeners and reset the splitter; reinitialize to attach them again."
        html={`<div class="space-y-3" data-split-destroy-root>
  <div class="flex gap-2">
    <button data-action="destroy" class="inline-flex items-center justify-center font-semibold text-white rounded-lg px-3 py-2 bg-[linear-gradient(45deg,_#af2497_10%,_#902d9a_20%,_#1840a0_100%)] hover:opacity-95 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Destroy</button>
    <button data-action="reinit" class="px-3 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Reinitialize</button>
  </div>
  <div data-split-instance class="rounded-lg border bg-white overflow-hidden">
    <div class="flex h-56">
      <div data-pane="left" class="min-w-[100px] w-1/2 grid place-items-center text-sm text-gray-700">Left</div>
      <div data-splitter="vertical" class="w-1 bg-gray-200 hover:bg-gray-300 cursor-col-resize" role="separator" aria-orientation="vertical"></div>
      <div data-pane="right" class="flex-1 min-w-[120px] grid place-items-center text-sm text-gray-700">Right</div>
    </div>
  </div>
</div>`}
        js={`(function(){
  const root = document.currentScript?.previousElementSibling?.querySelector?.('[data-split-destroy-root]') || document.querySelector('[data-split-destroy-root]');
  if (!root) return;

  const destroyBtn = root.querySelector('[data-action="destroy"]');
  const reinitBtn  = root.querySelector('[data-action="reinit"]');
  const container  = root.querySelector('[data-split-instance]');

  let dragging = false;
  let splitter = null;
  let left = null;

  function onMove(e){
    if (!dragging) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const minLeft = 100;
    const maxLeft = rect.width - 120;
    const clamped = Math.max(minLeft, Math.min(x, maxLeft));
    left.style.width = clamped + 'px';
  }
  function stop(){
    dragging = false;
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', stop);
  }
  function start(){
    dragging = true;
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', stop);
  }

  function bind(){
    splitter = container.querySelector('[data-splitter="vertical"]');
    left = container.querySelector('[data-pane="left"]');
    splitter?.addEventListener('mousedown', start);
  }
  function unbind(){
    splitter?.removeEventListener('mousedown', start);
    stop();
  }

  bind();

  destroyBtn?.addEventListener('click', ()=> {
    unbind();
    destroyBtn.disabled = true;
    reinitBtn.disabled = false;
  });

  reinitBtn?.addEventListener('click', ()=> {
    bind();
    destroyBtn.disabled = false;
    reinitBtn.disabled = true;
  });

  // Initial state: allow destroy
  destroyBtn.disabled = false;
  reinitBtn.disabled = true;
})();`}
      />
    </div>
  );
}

function Section({ title, description, html }) {
  const [tab, setTab] = React.useState('Preview');
  return (
    <section className="card p-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <TabToggle value={tab} onChange={setTab} idBase={title.replace(/\s+/g, '-').toLowerCase()} />
      </header>

      <div className="mt-3">
        {tab === 'Preview' ? (
          <div className="preview-surface px-5 py-6">
            <div className="preview-accent-bar" aria-hidden="true" />
            <div className="pt-4" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        ) : (
          <CodeTabs
            idBase={title.replace(/\s+/g, '-').toLowerCase() + '-code'}
            html={html}
            js={`// No JS required for this example.`}
            renderBlock={(props) => <CodeBlock {...props} />}
          />
        )}
      </div>
    </section>
  );
}

function InteractiveSection({ title, description, html, js }) {
  const [tab, setTab] = React.useState('Preview');
  // We render the HTML, then the JS immediately after inside Preview so it targets the instance directly above it via previousElementSibling.
  return (
    <section className="card p-4">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <TabToggle value={tab} onChange={setTab} idBase={title.replace(/\s+/g, '-').toLowerCase()} />
      </header>

      <div className="mt-3">
        {tab === 'Preview' ? (
          <div className="preview-surface px-5 py-6">
            <div className="preview-accent-bar" aria-hidden="true" />
            <div className="pt-4">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              {/* Attach behavior script immediately after the HTML block to bind to the instance above. */}
              <InlineScript code={js} />
            </div>
          </div>
        ) : (
          <CodeTabs
            idBase={title.replace(/\s+/g, '-').toLowerCase() + '-code'}
            html={html}
            js={js}
            renderBlock={(props) => <CodeBlock {...props} />}
          />
        )}
      </div>
    </section>
  );
}

/**
 * InlineScript
 * Safely injects and executes a small JS snippet after render.
 * It creates a <script> tag and sets its textContent to the provided code.
 */
function InlineScript({ code }) {
  React.useEffect(() => {
    if (!code) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.textContent = code;
    document.body.appendChild(script);
    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        // ignore if already removed
      }
    };
  }, [code]);
  return null;
}
