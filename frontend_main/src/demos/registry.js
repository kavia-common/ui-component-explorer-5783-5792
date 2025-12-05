export const demoRegistry = {
  // Getting Started
  'Introduction': {
    componentKey: 'Introduction',
    html: `<!-- Introduction: no interactive UI - see documentation -->`,
    js: `// No JS required for this item.`,
  },
  'Installation': {
    componentKey: 'Installation',
    html: `<!-- Installation: follow steps in Components > Installation -->`,
    js: `// No JS required for this item.`,
  },

  // Layout & Content (presentational only)
  'Grid': {
    componentKey: 'GridDemo',
    html: `<div class="grid grid-cols-3 gap-3">
  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 1</div>
  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 2</div>
  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 3</div>
  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 4</div>
  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 5</div>
  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 6</div>
</div>`,
    js: `// No JS required — purely presentational grid.`,
  },
  'Container': {
    componentKey: 'ContainerDemo',
    html: `<div class="max-w-4xl mx-auto px-4">Responsive container</div>`,
    js: `// No JS required — purely presentational container.`,
  },
  'Section': {
    componentKey: 'SectionDemo',
    html: `<section class="py-6 border rounded-lg bg-white">
  <h3 class="px-4 font-semibold">Section</h3>
  <div class="px-4 text-sm text-gray-600">Content...</div>
</section>`,
    js: `// No JS required — purely presentational section.`,
  },
  'Card': {
    componentKey: 'CardDemo',
    html: `<div class="p-4 rounded-xl border bg-white">
  <h4 class="font-semibold">Card Title</h4>
  <p class="text-sm text-gray-600 mt-1">Card content...</p>
  <div class="mt-3">
    <button class="inline-flex items-center justify-center font-semibold text-white rounded-lg px-3 py-2 bg-[linear-gradient(45deg,_#af2497_10%,_#902d9a_20%,_#1840a0_100%)] hover:brightness-[.98] shadow-[0_6px_12px_rgba(16,24,40,0.10)] transition-[filter,transform,box-shadow,background-color] duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">Action</button>
  </div>
</div>`,
    js: `// No JS required — card is static.`,
  },
  'Typography': {
    componentKey: 'TypographyDemo',
    html: `<div class="space-y-1">
  <h1 class="text-2xl font-bold">Heading 1</h1>
  <h2 class="text-xl font-semibold">Heading 2</h2>
  <p class="text-sm text-gray-700">Body text</p>
</div>`,
    js: `// No JS required — text styles only.`,
  },
  'Lists': {
    componentKey: 'ListsDemo',
    html: `<ul class="list-disc ml-5 text-sm text-gray-700">
  <li>First</li>
  <li>Second</li>
</ul>`,
    js: `// No JS required — static list.`,
  },
  'Media': {
    componentKey: 'MediaDemo',
    html: `<figure class="rounded-lg border overflow-hidden bg-white max-w-md">
  <img alt="placeholder" src="https://picsum.photos/400/200" class="w-full h-40 object-cover"/>
  <figcaption class="p-2 text-xs text-gray-600">Sample image</figcaption>
</figure>`,
    js: `// No JS required — static media figure.`,
  },

  // Base Components
  'Buttons': {
    componentKey: 'ButtonsDemo',
    html: `<div class="flex flex-wrap gap-2">
  <button class="inline-flex items-center justify-center font-semibold text-white rounded-lg px-3 py-2 bg-[linear-gradient(45deg,_#af2497_10%,_#902d9a_20%,_#1840a0_100%)] hover:brightness-[.98] text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70">Primary</button>
  <button class="px-3 py-2 rounded-lg border text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Secondary</button>
  <button class="px-3 py-2 rounded-lg bg-amber-500 text-white text-sm hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Warning</button>
  <button class="px-3 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Danger</button>
</div>`,
    js: `// No JS required — buttons without behavior are presentational.`,
  },
  'Badges': {
    componentKey: 'BadgesDemo',
    html: `<div class="space-x-2">
  <span class="inline-flex px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">Info</span>
  <span class="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Success</span>
</div>`,
    js: `// No JS required — static badges.`,
  },
  'Avatars': {
    componentKey: 'AvatarsDemo',
    html: `<div class="flex items-center gap-3">
  <img class="w-10 h-10 rounded-full" alt="avatar" src="https://i.pravatar.cc/100?img=1"/>
  <div>
    <div class="text-sm font-semibold">Jane Doe</div>
    <div class="text-xs text-gray-500">Designer</div>
  </div>
</div>`,
    js: `// No JS required — static avatar.`,
  },
  'Alerts': {
    componentKey: 'AlertsDemo',
    html: `<div role="alert" class="rounded-lg border border-blue-200 bg-blue-50 text-blue-800 p-3 text-sm">Info alert</div>`,
    js: `// No JS required — static alert.`,
  },
  'Tags': {
    componentKey: 'TagsDemo',
    html: `<div class="space-x-2">
  <span class="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">Tag</span>
  <span class="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">UI</span>
</div>`,
    js: `// No JS required — static tags.`,
  },
  'Chips': {
    componentKey: 'ChipsDemo',
    html: `<div class="flex flex-wrap gap-2">
  <button data-chip class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
    React <span aria-hidden>×</span>
  </button>
  <button data-chip class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">
    Tailwind <span aria-hidden>×</span>
  </button>
</div>`,
    js: `// Optional: remove chip on click of "×"
document.querySelectorAll('[data-chip]').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const x = e.target.closest('span');
    if (x) btn.remove();
  });
});`,
  },
  'Tooltips': {
    componentKey: 'TooltipsDemo',
    html: `<div class="relative inline-block">
  <button data-tooltip-target class="px-3 py-2 rounded-lg border text-sm hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60">Hover me</button>
  <div data-tooltip class="hidden absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded">Tooltip text</div>
</div>`,
    js: `// Show tooltip on mouseenter/focus; hide on mouseleave/blur
const trigger = document.querySelector('[data-tooltip-target]');
const tip = document.querySelector('[data-tooltip]');
if (trigger && tip) {
  const show = ()=> tip.classList.remove('hidden');
  const hide = ()=> tip.classList.add('hidden');
  trigger.addEventListener('mouseenter', show);
  trigger.addEventListener('mouseleave', hide);
  trigger.addEventListener('focus', show);
  trigger.addEventListener('blur', hide);
}`,
  },

  // Navigations
  'Navbar': {
    componentKey: 'NavbarDemo',
    html: `<nav class="w-full rounded-lg border bg-white px-4 py-2 flex items-center justify-between">
  <div class="font-semibold">Brand</div>
  <div class="flex items-center gap-3 text-sm">
    <a href="#home" class="hover:underline">Home</a>
    <a href="#docs" class="hover:underline">Docs</a>
  </div>
</nav>`,
    js: `// No JS required — static navbar.`,
  },
  'Sidebar': {
    componentKey: 'SidebarDemo',
    html: `<aside class="w-48 rounded-lg border p-3 bg-white">
  <a class="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#a">Item A</a>
  <a class="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#b">Item B</a>
</aside>`,
    js: `// No JS required — static sidebar.`,
  },
  'Tabs': {
    componentKey: 'TabsDemo',
    html: `<div data-tabs>
  <div class="flex gap-2 border-b">
    <button data-tab="one" class="px-3 py-2 text-sm border-b-2 border-blue-600 font-semibold">One</button>
    <button data-tab="two" class="px-3 py-2 text-sm text-gray-600">Two</button>
    <button data-tab="three" class="px-3 py-2 text-sm text-gray-600">Three</button>
  </div>
  <div class="mt-3 text-sm text-gray-700">
    <div data-panel="one">Tab One content</div>
    <div data-panel="two" class="hidden">Tab Two content</div>
    <div data-panel="three" class="hidden">Tab Three content</div>
  </div>
</div>`,
    js: `// Minimal vanilla JS tabs using data attributes
document.querySelectorAll('[data-tabs]').forEach(root=>{
  const buttons = root.querySelectorAll('[data-tab]');
  const panels = root.querySelectorAll('[data-panel]');
  function activate(key){
    buttons.forEach(b=>{
      const on = b.getAttribute('data-tab')===key;
      b.classList.toggle('border-b-2', on);
      b.classList.toggle('border-blue-600', on);
      b.classList.toggle('font-semibold', on);
      b.classList.toggle('text-gray-600', !on);
    });
    panels.forEach(p=>{
      const on = p.getAttribute('data-panel')===key;
      p.classList.toggle('hidden', !on);
    });
  }
  buttons.forEach(b=>{
    b.addEventListener('click', ()=> activate(b.getAttribute('data-tab')));
  });
});`,
  },
  'Breadcrumbs': {
    componentKey: 'BreadcrumbsDemo',
    html: `<nav aria-label="Breadcrumb" class="text-sm">
  <ol class="flex gap-2">
    <li><a href="#" class="hover:underline">Home</a></li>
    <li>/</li>
    <li class="text-gray-700">Library</li>
  </ol>
</nav>`,
    js: `// No JS required.`,
  },
  'Pagination': {
    componentKey: 'PaginationDemo',
    html: `<div class="inline-flex items-center gap-2">
  <button data-prev class="px-2 py-1 rounded border text-sm">Prev</button>
  <span data-page class="text-sm">Page 1</span>
  <button data-next class="px-2 py-1 rounded border text-sm">Next</button>
</div>`,
    js: `// Simple pagination state (no content fetch)
let page = 1;
const span = document.querySelector('[data-page]');
const prev = document.querySelector('[data-prev]');
const next = document.querySelector('[data-next]');
function render(){ span.textContent = 'Page ' + page; prev.disabled = page===1; }
if (span && prev && next){
  render();
  prev.addEventListener('click', ()=> { page = Math.max(1, page-1); render(); });
  next.addEventListener('click', ()=> { page = page+1; render(); });
}`,
  },
  'Steps': {
    componentKey: 'StepsDemo',
    html: `<ol class="flex items-center gap-3 text-sm">
  <li class="flex items-center gap-1">
    <span class="w-5 h-5 rounded-full bg-blue-600 text-white text-xs grid place-items-center">1</span>
    Start
  </li>
  <li>—</li>
  <li class="flex items-center gap-1 text-gray-500">
    <span class="w-5 h-5 rounded-full border grid place-items-center">2</span>
    Confirm
  </li>
</ol>`,
    js: `// No JS required — static steps.`,
  },

  // Basic Forms
  'Inputs': {
    componentKey: 'InputDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Your name</label>
  <input data-echo class="w-full px-3 py-2 rounded-lg border" placeholder="Jane Doe"/>
  <div data-echo-out class="text-xs text-gray-500">Typed: —</div>
</div>`,
    js: `// Echo typed value below input
const i = document.querySelector('[data-echo]');
const out = document.querySelector('[data-echo-out]');
if (i && out){
  i.addEventListener('input', ()=> {
    out.textContent = 'Typed: ' + (i.value || '—');
  });
}`,
  },
  'Select': {
    componentKey: 'SelectDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Choose</label>
  <select data-choose class="w-full px-3 py-2 rounded-lg border">
    <option value="a">Option A</option>
    <option value="b">Option B</option>
  </select>
  <div data-choose-out class="text-xs text-gray-500">Value: a</div>
</div>`,
    js: `// Reflect selected value
const sel = document.querySelector('[data-choose]');
const out = document.querySelector('[data-choose-out]');
if (sel && out){
  const sync = ()=> out.textContent = 'Value: ' + sel.value;
  sel.addEventListener('change', sync);
  sync();
}`,
  },
  'Checkbox': {
    componentKey: 'CheckboxDemo',
    html: `<label class="inline-flex items-center gap-2 text-sm">
  <input data-check type="checkbox" class="rounded border-gray-300"/>
  <span data-check-out>Subscribe (no)</span>
</label>`,
    js: `// Toggle label based on checkbox state
const cb = document.querySelector('[data-check]');
const out = document.querySelector('[data-check-out]');
if (cb && out){
  const sync = ()=> out.textContent = 'Subscribe (' + (cb.checked? 'yes':'no') + ')';
  cb.addEventListener('change', sync);
  sync();
}`,
  },
  'Radio': {
    componentKey: 'RadioDemo',
    html: `<div class="flex gap-4 text-sm">
  <label class="inline-flex items-center gap-2">
    <input type="radio" name="r" value="a" checked class="border-gray-300"/>
    A
  </label>
  <label class="inline-flex items-center gap-2">
    <input type="radio" name="r" value="b" class="border-gray-300"/>
    B
  </label>
  <div class="text-xs text-gray-500">Selected is reflected by native checked state.</div>
</div>`,
    js: `// No extra JS required — native radio behavior.`,
  },
  'Text Area': {
    componentKey: 'TextAreaDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Message</label>
  <textarea class="w-full px-3 py-2 rounded-lg border" rows="3" placeholder="Type..."></textarea>
</div>`,
    js: `// No JS required.`,
  },
  'Switch': {
    componentKey: 'SwitchDemo',
    html: `<button data-switch role="switch" aria-checked="false" class="w-12 h-6 rounded-full flex items-center bg-gray-300 transition-colors">
  <span data-thumb class="w-5 h-5 bg-white rounded-full transform transition translate-x-1"></span>
</button>`,
    js: `// Toggle switch with aria-checked and translate
const sw = document.querySelector('[data-switch]');
const thumb = document.querySelector('[data-thumb]');
if (sw && thumb){
  sw.addEventListener('click', ()=>{
    const on = sw.getAttribute('aria-checked') === 'true';
    const next = !on;
    sw.setAttribute('aria-checked', String(next));
    sw.classList.toggle('bg-blue-600', next);
    sw.classList.toggle('bg-gray-300', !next);
    thumb.classList.toggle('translate-x-6', next);
    thumb.classList.toggle('translate-x-1', !next);
  });
}`,
  },

  // Advanced Forms
  'Date Picker': {
    componentKey: 'DatePickerDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Pick a date</label>
  <input data-date type="date" class="px-3 py-2 rounded-lg border"/>
  <div data-date-out class="text-xs text-gray-500">Value: —</div>
</div>`,
    js: `// Mirror date value below input
const d = document.querySelector('[data-date]');
const out = document.querySelector('[data-date-out]');
if (d && out){
  const sync = ()=> out.textContent = 'Value: ' + (d.value || '—');
  d.addEventListener('input', sync);
  sync();
}`,
  },
  'File Upload': {
    componentKey: 'FileUploadDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Upload</label>
  <input data-file type="file" class="block text-sm"/>
  <div data-file-out class="text-xs text-gray-500">Selected: —</div>
</div>`,
    js: `// Show selected file name
const f = document.querySelector('[data-file]');
const out = document.querySelector('[data-file-out]');
if (f && out){
  f.addEventListener('change', ()=>{
    out.textContent = 'Selected: ' + (f.files && f.files[0] ? f.files[0].name : '—');
  });
}`,
  },
  'Range Slider': {
    componentKey: 'RangeSliderDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Value: <span data-range-out>50</span></label>
  <input data-range type="range" min="0" max="100" value="50" class="w-full"/>
</div>`,
    js: `// Update label as slider moves
const r = document.querySelector('[data-range]');
const out = document.querySelector('[data-range-out]');
if (r && out){
  const sync = ()=> out.textContent = r.value;
  r.addEventListener('input', sync);
  sync();
}`,
  },
  'Autocomplete': {
    componentKey: 'AutocompleteDemo',
    html: `<div class="space-y-2 w-full max-w-sm">
  <label class="text-sm font-medium">Framework</label>
  <input data-auto class="w-full px-3 py-2 rounded-lg border" placeholder="Type to search"/>
  <ul data-auto-list class="hidden border rounded-lg bg-white max-w-sm text-sm mt-1"></ul>
</div>`,
    js: `// Minimal client-side filter (static options)
const options = ['React','Vue','Svelte','Angular'];
const input = document.querySelector('[data-auto]');
const list = document.querySelector('[data-auto-list]');
if (input && list){
  function render(items){
    list.innerHTML = items.map(x=> '<li class="px-3 py-1 hover:bg-gray-50 cursor-pointer">'+x+'</li>').join('');
    list.classList.toggle('hidden', items.length===0);
  }
  input.addEventListener('input', ()=>{
    const q = input.value.toLowerCase();
    const matches = options.filter(o=> o.toLowerCase().includes(q));
    render(q ? matches : []);
  });
  list.addEventListener('click', (e)=>{
    const li = e.target.closest('li');
    if (li){ input.value = li.textContent; render([]); }
  });
}`,
  },
  'Validation': {
    componentKey: 'ValidationDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Email</label>
  <input data-email class="w-full px-3 py-2 rounded-lg border" placeholder="you@example.com"/>
  <div data-email-err class="hidden text-xs text-red-600">Invalid email</div>
</div>`,
    js: `// Simple email validation with regex
const i = document.querySelector('[data-email]');
const err = document.querySelector('[data-email-err]');
if (i && err){
  const re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  function check(){
    const ok = !i.value || re.test(i.value);
    err.classList.toggle('hidden', ok);
  }
  i.addEventListener('input', check);
  check();
}`,
  },

  // Tables
  'Simple Table': {
    componentKey: 'SimpleTableDemo',
    html: `<table class="w-full text-sm border rounded-lg overflow-hidden bg-white">
  <thead class="bg-gray-50">
    <tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr>
  </thead>
  <tbody>
    <tr class="border-t"><td class="p-2">Jane</td><td class="p-2">Designer</td></tr>
    <tr class="border-t"><td class="p-2">John</td><td class="p-2">Engineer</td></tr>
  </tbody>
</table>`,
    js: `// No JS required — static table.`,
  },
  'Sortable Table': {
    componentKey: 'SortableTableDemo',
    html: `<div data-sorttable>
  <button data-sort class="mb-2 px-2 py-1 rounded border text-xs">Sort ▼</button>
  <table class="w-full text-sm border rounded-lg overflow-hidden bg-white">
    <thead class="bg-gray-50">
      <tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr>
    </thead>
    <tbody data-rows>
      <tr><td class="p-2">Jane</td><td class="p-2">Designer</td></tr>
      <tr><td class="p-2">John</td><td class="p-2">Engineer</td></tr>
      <tr><td class="p-2">Amy</td><td class="p-2">PM</td></tr>
    </tbody>
  </table>
</div>`,
    js: `// Sort rows by first column (Name)
document.querySelectorAll('[data-sorttable]').forEach(root=>{
  const btn = root.querySelector('[data-sort]');
  const tbody = root.querySelector('[data-rows]');
  let asc = true;
  btn.addEventListener('click', ()=>{
    const rows = Array.from(tbody.querySelectorAll('tr'));
    rows.sort((a,b)=>{
      const aN = a.children[0].textContent.trim();
      const bN = b.children[0].textContent.trim();
      return asc ? aN.localeCompare(bN) : bN.localeCompare(aN);
    });
    tbody.innerHTML = '';
    rows.forEach(r=> tbody.appendChild(r));
    asc = !asc;
    btn.textContent = 'Sort ' + (asc ? '▼' : '▲');
  });
});`,
  },
  'Data Table': {
    componentKey: 'DataTableDemo',
    html: `<div data-datatable>
  <input data-filter class="mb-2 px-3 py-2 rounded-lg border" placeholder="Filter by name" />
  <table class="w-full text-sm border rounded-lg overflow-hidden bg-white">
    <thead class="bg-gray-50">
      <tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr>
    </thead>
    <tbody>
      <tr data-row><td class="p-2">Jane</td><td class="p-2">Designer</td></tr>
      <tr data-row><td class="p-2">John</td><td class="p-2">Engineer</td></tr>
      <tr data-row><td class="p-2">Amy</td><td class="p-2">PM</td></tr>
    </tbody>
  </table>
</div>`,
    js: `// Filter rows by name based on input
document.querySelectorAll('[data-datatable]').forEach(root=>{
  const input = root.querySelector('[data-filter]');
  const rows = Array.from(root.querySelectorAll('[data-row]'));
  input.addEventListener('input', ()=>{
    const q = input.value.toLowerCase();
    rows.forEach(r=>{
      const name = r.children[0].textContent.toLowerCase();
      r.classList.toggle('hidden', q && !name.includes(q));
    });
  });
});`,
  },
  'Filtering': {
    componentKey: 'TableFilteringDemo',
    html: `<!-- See Data Table example with filter input above -->`,
    js: `// See Data Table example for filtering approach.`,
  },
};

export function getDemoForItem(itemName) {
  return demoRegistry[itemName] || null;
}
