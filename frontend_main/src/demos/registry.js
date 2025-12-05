export const demoRegistry = {
  // Getting Started
  'Introduction': {
    componentKey: 'Introduction',
    html: `<!-- Introduction: no interactive UI - see documentation -->`,
    js: `// Introduction: no interactive UI - see documentation`,
  },
  'Installation': {
    componentKey: 'Installation',
    html: `<!-- Installation: use the steps shown in the page -->`,
    js: `// Installation: see steps in Components > Installation`,
  },
  'Quick Start': {
    componentKey: 'Quick Start',
    html: `<button class="px-4 py-2 rounded-lg bg-blue-600 text-white">Hello</button>`,
    js: `function App(){\n  return <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">Hello</button>\n}`,
  },
  'Theming': {
    componentKey: 'Theming',
    html: `<button class="px-3 py-2 rounded-lg border text-sm">Switch theme</button>`,
    js: `function ThemeToggle({theme,setTheme}){\n  return (\n    <button onClick={()=>setTheme(theme==='light'?'dark':'light')} className="px-3 py-2 rounded-lg border text-sm">\n      Switch to {theme==='light'?'dark':'light'}\n    </button>\n  );\n}`,
  },
  'Dark Mode': {
    componentKey: 'Dark Mode',
    html: `<div class="p-4 rounded-lg border bg-white dark:bg-neutral-900">Surface</div>`,
    js: `<div className="p-4 rounded-lg border bg-white dark:bg-neutral-900">Surface</div>`,
  },

  // Layout & Content
  'Grid': {
    componentKey: 'GridDemo',
    html: `<div class="grid grid-cols-3 gap-3">\n  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 1</div>\n  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 2</div>\n  <div class="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box 3</div>\n</div>`,
    js: `function GridDemo(){\n  return (\n    <div className="grid grid-cols-3 gap-3">\n      {[1,2,3,4,5,6].map(i=> (\n        <div key={i} className="h-16 rounded-lg border bg-white flex items-center justify-center text-sm text-gray-500">Box {i}</div>\n      ))}\n    </div>\n  );\n}`,
  },
  'Container': {
    componentKey: 'ContainerDemo',
    html: `<div class="max-w-4xl mx-auto px-4">Responsive container</div>`,
    js: `<div className="max-w-4xl mx-auto px-4">Responsive container</div>`,
  },
  'Section': {
    componentKey: 'SectionDemo',
    html: `<section class="py-6 border rounded-lg bg-white">\n  <h3 class="px-4 font-semibold">Section</h3>\n  <div class="px-4 text-sm text-gray-600">Content...</div>\n</section>`,
    js: `<section className="py-6 border rounded-lg bg-white"><h3 className="px-4 font-semibold">Section</h3><div className="px-4 text-sm text-gray-600">Content...</div></section>`,
  },
  'Card': {
    componentKey: 'CardDemo',
    html: `<div class="p-4 rounded-xl border bg-white"><h4 class="font-semibold">Card Title</h4><p class="text-sm text-gray-600 mt-1">Card content...</p><div class="mt-3"><button class="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm">Action</button></div></div>`,
    js: `function Card(){\n  return (\n    <div className="p-4 rounded-xl border bg-white">\n      <h4 className="font-semibold">Card Title</h4>\n      <p className="text-sm text-gray-600 mt-1">Card content...</p>\n      <div className="mt-3"><button className="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm">Action</button></div>\n    </div>\n  );\n}`,
  },
  'Typography': {
    componentKey: 'TypographyDemo',
    html: `<div class="space-y-1">\n  <h1 class="text-2xl font-bold">Heading 1</h1>\n  <h2 class="text-xl font-semibold">Heading 2</h2>\n  <p class="text-sm text-gray-700">Body text</p>\n</div>`,
    js: `<div className="space-y-1">\n  <h1 className="text-2xl font-bold">Heading 1</h1>\n  <h2 className="text-xl font-semibold">Heading 2</h2>\n  <p className="text-sm text-gray-700">Body text</p>\n</div>`,
  },
  'Lists': {
    componentKey: 'ListsDemo',
    html: `<ul class="list-disc ml-5 text-sm text-gray-700"><li>First</li><li>Second</li></ul>`,
    js: `<ul className="list-disc ml-5 text-sm text-gray-700"><li>First</li><li>Second</li></ul>`,
  },
  'Media': {
    componentKey: 'MediaDemo',
    html: `<figure class="rounded-lg border overflow-hidden bg-white"><img alt="placeholder" src="https://picsum.photos/400/200" class="w-full h-40 object-cover"/><figcaption class="p-2 text-xs text-gray-600">Sample image</figcaption></figure>`,
    js: `<figure className="rounded-lg border overflow-hidden bg-white"><img alt="placeholder" src="https://picsum.photos/400/200" className="w-full h-40 object-cover"/><figcaption className="p-2 text-xs text-gray-600">Sample image</figcaption></figure>`,
  },

  // Base Components
  'Buttons': {
    componentKey: 'ButtonsDemo',
    html: `<div class="flex flex-wrap gap-2"><button class="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Primary</button><button class="px-3 py-2 rounded-lg border text-sm">Secondary</button><button class="px-3 py-2 rounded-lg bg-amber-500 text-white text-sm hover:bg-amber-600">Warning</button><button class="px-3 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600">Danger</button></div>`,
    js: `function ButtonsDemo(){\n  return (\n    <div className="flex flex-wrap gap-2">\n      <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Primary</button>\n      <button className="px-3 py-2 rounded-lg border text-sm">Secondary</button>\n      <button className="px-3 py-2 rounded-lg bg-amber-500 text-white text-sm hover:bg-amber-600">Warning</button>\n      <button className="px-3 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600">Danger</button>\n    </div>\n  );\n}`,
  },
  'Badges': {
    componentKey: 'BadgesDemo',
    html: `<div class="space-x-2"><span class="inline-flex px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">Info</span><span class="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Success</span></div>`,
    js: `<div className="space-x-2"><span className="inline-flex px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">Info</span><span className="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Success</span></div>`,
  },
  'Avatars': {
    componentKey: 'AvatarsDemo',
    html: `<div class="flex items-center gap-3"><img class="w-10 h-10 rounded-full" alt="avatar" src="https://i.pravatar.cc/100?img=1"/><div><div class="text-sm font-semibold">Jane Doe</div><div class="text-xs text-gray-500">Designer</div></div></div>`,
    js: `<div className="flex items-center gap-3"><img className="w-10 h-10 rounded-full" alt="avatar" src="https://i.pravatar.cc/100?img=1"/><div><div className="text-sm font-semibold">Jane Doe</div><div className="text-xs text-gray-500">Designer</div></div></div>`,
  },
  'Alerts': {
    componentKey: 'AlertsDemo',
    html: `<div role="alert" class="rounded-lg border border-blue-200 bg-blue-50 text-blue-800 p-3 text-sm">Info alert</div>`,
    js: `<div role="alert" className="rounded-lg border border-blue-200 bg-blue-50 text-blue-800 p-3 text-sm">Info alert</div>`,
  },
  'Tags': {
    componentKey: 'TagsDemo',
    html: `<div class="space-x-2"><span class="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">Tag</span><span class="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">UI</span></div>`,
    js: `<div className="space-x-2"><span className="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">Tag</span><span className="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">UI</span></div>`,
  },
  'Chips': {
    componentKey: 'ChipsDemo',
    html: `<div class="flex flex-wrap gap-2"><button class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs">React<span aria-hidden>×</span></button><button class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs">Tailwind<span aria-hidden>×</span></button></div>`,
    js: `function Chips(){\n  const [items,setItems]=React.useState(['React','Tailwind']);\n  return (\n    <div className="flex flex-wrap gap-2">\n      {items.map(x=> (\n        <button key={x} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs hover:bg-gray-50">\n          {x}\n          <span aria-hidden>×</span>\n        </button>\n      ))}\n    </div>\n  );\n}`,
  },
  'Tooltips': {
    componentKey: 'TooltipsDemo',
    html: `<div class="relative inline-block"><button class="px-3 py-2 rounded-lg border text-sm">Hover me</button></div>`,
    js: `function Tooltip(){\n  const [show,setShow]=React.useState(false);\n  return (\n    <div className="relative inline-block">\n      <button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className="px-3 py-2 rounded-lg border text-sm">Hover me</button>\n      {show && <div role="tooltip" className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded">Tooltip text</div>}\n    </div>\n  );\n}`,
  },

  // Navigations
  'Navbar': {
    componentKey: 'NavbarDemo',
    html: `<nav class="w-full rounded-lg border bg-white px-4 py-2 flex items-center justify-between"><div class="font-semibold">Brand</div><div class="flex items-center gap-3 text-sm"><a href="#home" class="hover:underline">Home</a><a href="#docs" class="hover:underline">Docs</a></div></nav>`,
    js: `function Navbar(){\n  return (\n    <nav className="w-full rounded-lg border bg-white px-4 py-2 flex items-center justify-between">\n      <div className="font-semibold">Brand</div>\n      <div className="flex items-center gap-3 text-sm"><a href="#home" className="hover:underline">Home</a><a href="#docs" className="hover:underline">Docs</a></div>\n    </nav>\n  );\n}`,
  },
  'Sidebar': {
    componentKey: 'SidebarDemo',
    html: `<aside class="w-48 rounded-lg border p-3 bg-white"><a class="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#a">Item A</a><a class="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#b">Item B</a></aside>`,
    js: `function Sidebar(){\n  return (\n    <aside className="w-48 rounded-lg border p-3 bg-white">\n      <a className="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#a">Item A</a>\n      <a className="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#b">Item B</a>\n    </aside>\n  );\n}`,
  },
  'Tabs': {
    componentKey: 'TabsDemo',
    html: `<div><div class="flex gap-2 border-b"><button class="px-3 py-2 text-sm border-b-2 border-blue-600 font-semibold">One</button><button class="px-3 py-2 text-sm text-gray-600">Two</button></div><div class="mt-3 text-sm text-gray-700">Tab One content</div></div>`,
    js: `function TabsDemo(){\n  const [tab,setTab]=React.useState('One');\n  return (\n    <div>\n      <div className="flex gap-2 border-b">\n        {['One','Two','Three'].map(t=> (\n          <button key={t} onClick={()=>setTab(t)} className={\n            'px-3 py-2 text-sm ' + (tab===t? 'border-b-2 border-blue-600 font-semibold':'text-gray-600 hover:text-gray-800')\n          }>{t}</button>\n        ))}\n      </div>\n      <div className="mt-3 text-sm text-gray-700">Tab {tab} content</div>\n    </div>\n  );\n}`,
  },
  'Breadcrumbs': {
    componentKey: 'BreadcrumbsDemo',
    html: `<nav aria-label="Breadcrumb" class="text-sm"><ol class="flex gap-2"><li><a href="#" class="hover:underline">Home</a></li><li>/</li><li class="text-gray-700">Library</li></ol></nav>`,
    js: `<nav aria-label="Breadcrumb" className="text-sm"><ol className="flex gap-2"><li><a href="#" className="hover:underline">Home</a></li><li>/</li><li className="text-gray-700">Library</li></ol></nav>`,
  },
  'Pagination': {
    componentKey: 'PaginationDemo',
    html: `<div class="inline-flex items-center gap-2"><button class="px-2 py-1 rounded border text-sm">Prev</button><span class="text-sm">Page 1</span><button class="px-2 py-1 rounded border text-sm">Next</button></div>`,
    js: `function Pagination(){\n  const [page,setPage]=React.useState(1);\n  return (\n    <div className="inline-flex items-center gap-2">\n      <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))} className="px-2 py-1 rounded border text-sm disabled:opacity-50">Prev</button>\n      <span className="text-sm">Page {page}</span>\n      <button onClick={()=>setPage(p=>p+1)} className="px-2 py-1 rounded border text-sm">Next</button>\n    </div>\n  );\n}`,
  },
  'Steps': {
    componentKey: 'StepsDemo',
    html: `<ol class="flex items-center gap-3 text-sm"><li class="flex items-center gap-1"><span class="w-5 h-5 rounded-full bg-blue-600 text-white text-xs grid place-items-center">1</span> Start</li><li>—</li><li class="flex items-center gap-1 text-gray-500"><span class="w-5 h-5 rounded-full border grid place-items-center">2</span> Confirm</li></ol>`,
    js: `<ol className="flex items-center gap-3 text-sm"><li className="flex items-center gap-1"><span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs grid place-items-center">1</span> Start</li><li>—</li><li className="flex items-center gap-1 text-gray-500"><span className="w-5 h-5 rounded-full border grid place-items-center">2</span> Confirm</li></ol>`,
  },

  // Basic Forms
  'Inputs': {
    componentKey: 'InputDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Your name</label><input class="w-full px-3 py-2 rounded-lg border" placeholder="Jane Doe"/><div class="text-xs text-gray-500">Typed: —</div></div>`,
    js: `function InputDemo(){\n  const [v,setV]=React.useState('');\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Your name</label>\n      <input value={v} onChange={e=>setV(e.target.value)} className="w-full px-3 py-2 rounded-lg border" placeholder="Jane Doe"/>\n      <div className="text-xs text-gray-500">Typed: {v||'—'}</div>\n    </div>\n  );\n}`,
  },
  'Select': {
    componentKey: 'SelectDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Choose</label><select class="w-full px-3 py-2 rounded-lg border"><option>Option A</option><option>Option B</option></select><div class="text-xs text-gray-500">Value: a</div></div>`,
    js: `function SelectDemo(){\n  const [v,setV]=React.useState('a');\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Choose</label>\n      <select value={v} onChange={e=>setV(e.target.value)} className="w-full px-3 py-2 rounded-lg border">\n        <option value="a">Option A</option>\n        <option value="b">Option B</option>\n      </select>\n      <div className="text-xs text-gray-500">Value: {v}</div>\n    </div>\n  );\n}`,
  },
  'Checkbox': {
    componentKey: 'CheckboxDemo',
    html: `<label class="inline-flex items-center gap-2 text-sm"><input type="checkbox" class="rounded border-gray-300"/> Subscribe (no)</label>`,
    js: `function CheckboxDemo(){\n  const [c,setC]=React.useState(false);\n  return (\n    <label className="inline-flex items-center gap-2 text-sm">\n      <input type="checkbox" checked={c} onChange={e=>setC(e.target.checked)} className="rounded border-gray-300"/>\n      Subscribe ({c? 'yes':'no'})\n    </label>\n  );\n}`,
  },
  'Radio': {
    componentKey: 'RadioDemo',
    html: `<div class="flex gap-4 text-sm"><label class="inline-flex items-center gap-2"><input type="radio" name="r" checked class="border-gray-300"/>A</label><label class="inline-flex items-center gap-2"><input type="radio" name="r" class="border-gray-300"/>B</label></div>`,
    js: `function RadioDemo(){\n  const [v,setV]=React.useState('a');\n  return (\n    <div className="flex gap-4 text-sm">\n      {['a','b'].map(opt=> (\n        <label key={opt} className="inline-flex items-center gap-2">\n          <input type="radio" name="r" value={opt} checked={v===opt} onChange={()=>setV(opt)} className="border-gray-300"/>\n          {opt.toUpperCase()}\n        </label>\n      ))}\n    </div>\n  );\n}`,
  },
  'Text Area': {
    componentKey: 'TextAreaDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Message</label><textarea class="w-full px-3 py-2 rounded-lg border" rows="3" placeholder="Type..."></textarea></div>`,
    js: `<div className="space-y-2"><label className="text-sm font-medium">Message</label><textarea className="w-full px-3 py-2 rounded-lg border" rows="3" placeholder="Type..."></textarea></div>`,
  },
  'Switch': {
    componentKey: 'SwitchDemo',
    html: `<button role="switch" aria-checked="false" class="w-12 h-6 rounded-full flex items-center bg-gray-300"><span class="w-5 h-5 bg-white rounded-full transform transition translate-x-1"></span></button>`,
    js: `function SwitchDemo(){\n  const [on,setOn]=React.useState(false);\n  return (\n    <button onClick={()=>setOn(o=>!o)} role="switch" aria-checked={on} className={'w-12 h-6 rounded-full flex items-center ' + (on? 'bg-blue-600':'bg-gray-300')}>\n      <span className={'w-5 h-5 bg-white rounded-full transform transition ' + (on? 'translate-x-6':'translate-x-1')}></span>\n    </button>\n  );\n}`,
  },

  // Advanced Forms
  'Date Picker': {
    componentKey: 'DatePickerDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Pick a date</label><input type="date" class="px-3 py-2 rounded-lg border"/><div class="text-xs text-gray-500">Value: —</div></div>`,
    js: `function DatePicker(){\n  const [d,setD]=React.useState('');\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Pick a date</label>\n      <input type="date" value={d} onChange={e=>setD(e.target.value)} className="px-3 py-2 rounded-lg border"/>\n      <div className="text-xs text-gray-500">Value: {d||'—'}</div>\n    </div>\n  );\n}`,
  },
  'File Upload': {
    componentKey: 'FileUploadDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Upload</label><input type="file" class="block text-sm"/><div class="text-xs text-gray-500">Selected: —</div></div>`,
    js: `function FileUpload(){\n  const [name,setName]=React.useState('');\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Upload</label>\n      <input type="file" onChange={e=>setName(e.target.files?.[0]?.name||'')} className="block text-sm"/>\n      <div className="text-xs text-gray-500">Selected: {name||'—'}</div>\n    </div>\n  );\n}`,
  },
  'Range Slider': {
    componentKey: 'RangeSliderDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Value</label><input type="range" min="0" max="100" class="w-full"/></div>`,
    js: `function RangeSlider(){\n  const [v,setV]=React.useState(50);\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Value: {v}</label>\n      <input type="range" min="0" max="100" value={v} onChange={e=>setV(parseInt(e.target.value))} className="w-full"/>\n    </div>\n  );\n}`,
  },
  'Autocomplete': {
    componentKey: 'AutocompleteDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Framework</label><input class="w-full px-3 py-2 rounded-lg border" placeholder="Type to search"/></div>`,
    js: `function Autocomplete(){\n  const [q,setQ]=React.useState('');\n  const options=['React','Vue','Svelte','Angular'];\n  const filtered=options.filter(o=>o.toLowerCase().includes(q.toLowerCase()));\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Framework</label>\n      <input value={q} onChange={e=>setQ(e.target.value)} className="w-full px-3 py-2 rounded-lg border" placeholder="Type to search"/>\n      {q && (\n        <ul className="border rounded-lg bg-white max-w-sm text-sm">\n          {filtered.map(x=> <li key={x} className="px-3 py-1 hover:bg-gray-50 cursor-pointer">{x}</li>)}\n        </ul>\n      )}\n    </div>\n  );\n}`,
  },
  'Validation': {
    componentKey: 'ValidationDemo',
    html: `<div class="space-y-2"><label class="text-sm font-medium">Email</label><input class="w-full px-3 py-2 rounded-lg border" placeholder="you@example.com"/></div>`,
    js: `function ValidationDemo(){\n  const [email,setEmail]=React.useState('');\n  const valid=/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/.test(email);\n  return (\n    <div className="space-y-2">\n      <label className="text-sm font-medium">Email</label>\n      <input value={email} onChange={e=>setEmail(e.target.value)} className={"w-full px-3 py-2 rounded-lg border " + (email && !valid? 'border-red-400':'') } placeholder="you@example.com"/>\n      {!valid && email && <div className="text-xs text-red-600">Invalid email</div>}\n    </div>\n  );\n}`,
  },

  // Tables
  'Simple Table': {
    componentKey: 'SimpleTableDemo',
    html: `<table class="w-full text-sm border rounded-lg overflow-hidden bg-white"><thead class="bg-gray-50"><tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr></thead><tbody><tr class="border-t"><td class="p-2">Jane</td><td class="p-2">Designer</td></tr><tr class="border-t"><td class="p-2">John</td><td class="p-2">Engineer</td></tr></tbody></table>`,
    js: `function SimpleTable(){\n  return (\n    <table className="w-full text-sm border rounded-lg overflow-hidden bg-white">\n      <thead className="bg-gray-50"><tr><th className="text-left p-2">Name</th><th className="text-left p-2">Role</th></tr></thead>\n      <tbody>\n        <tr className="border-t"><td className="p-2">Jane</td><td className="p-2">Designer</td></tr>\n        <tr className="border-t"><td className="p-2">John</td><td className="p-2">Engineer</td></tr>\n      </tbody>\n    </table>\n  );\n}`,
  },
  'Sortable Table': {
    componentKey: 'SortableTableDemo',
    html: `<div><button class="mb-2 px-2 py-1 rounded border text-xs">Sort ▼</button><table class="w-full text-sm border rounded-lg overflow-hidden bg-white"><thead class="bg-gray-50"><tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr></thead><tbody><tr class="border-t"><td class="p-2">Jane</td><td class="p-2">Designer</td></tr></tbody></table></div>`,
    js: `function SortableTable(){\n  const [asc,setAsc]=React.useState(true);\n  const rows=[{n:'Jane',r:'Designer'},{n:'John',r:'Engineer'},{n:'Amy',r:'PM'}];\n  const sorted=[...rows].sort((a,b)=> asc? a.n.localeCompare(b.n): b.n.localeCompare(a.n));\n  return (\n    <div>\n      <button onClick={()=>setAsc(a=>!a)} className="mb-2 px-2 py-1 rounded border text-xs">Sort {asc? '▼':'▲'}</button>\n      <table className="w-full text-sm border rounded-lg overflow-hidden bg-white">\n        <thead className="bg-gray-50"><tr><th className="text-left p-2">Name</th><th className="text-left p-2">Role</th></tr></thead>\n        <tbody>\n          {sorted.map((r)=> (\n            <tr key={r.n} className="border-t"><td className="p-2">{r.n}</td><td className="p-2">{r.r}</td></tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}`,
  },
  'Data Table': {
    componentKey: 'DataTableDemo',
    html: `<div><input class="mb-2 px-3 py-2 rounded-lg border" placeholder="Filter by name" /><table class="w-full text-sm border rounded-lg overflow-hidden bg-white"><thead class="bg-gray-50"><tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr></thead><tbody><tr class="border-t"><td class="p-2">Jane</td><td class="p-2">Designer</td></tr></tbody></table></div>`,
    js: `function DataTable(){\n  const [q,setQ]=React.useState('');\n  const rows=[{n:'Jane',r:'Designer'},{n:'John',r:'Engineer'},{n:'Amy',r:'PM'}];\n  const filtered=rows.filter(r=> r.n.toLowerCase().includes(q.toLowerCase()));\n  return (\n    <div>\n      <input className="mb-2 px-3 py-2 rounded-lg border" placeholder="Filter by name" value={q} onChange={e=>setQ(e.target.value)} />\n      <table className="w-full text-sm border rounded-lg overflow-hidden bg-white">\n        <thead className="bg-gray-50"><tr><th className="text-left p-2">Name</th><th className="text-left p-2">Role</th></tr></thead>\n        <tbody>\n          {filtered.map((r)=> (\n            <tr key={r.n} className="border-t"><td className="p-2">{r.n}</td><td className="p-2">{r.r}</td></tr>\n          ))}\n        </tbody>\n      </table>\n    </div>\n  );\n}`,
  },
  'Filtering': {
    componentKey: 'TableFilteringDemo',
    html: `<!-- See Data Table demo with filter input above. -->`,
    js: `// See Data Table demo with filter input above.`,
  },
};

export function getDemoForItem(itemName) {
  return demoRegistry[itemName] || null;
}
