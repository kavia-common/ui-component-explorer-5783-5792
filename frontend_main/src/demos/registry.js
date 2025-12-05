export const demoRegistry = {
  // Getting Started
  'Introduction': {
    componentKey: 'Introduction',
    html: `<!-- Introduction: no interactive UI - see documentation -->`,
    js: `// Introduction: no interactive UI - see documentation`,
  },
  'Installation': {
    componentKey: 'Installation',
    html: `<!-- Installation: follow steps in Components > Installation -->`,
    js: `// Installation: see steps in Components > Installation`,
  },

  // Layout & Content
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
    js: `// No JS required for basic grid preview`,
  },
  'Container': {
    componentKey: 'ContainerDemo',
    html: `<div class="max-w-4xl mx-auto px-4">Responsive container</div>`,
    js: `// No JS required for container`,
  },
  'Section': {
    componentKey: 'SectionDemo',
    html: `<section class="py-6 border rounded-lg bg-white">
  <h3 class="px-4 font-semibold">Section</h3>
  <div class="px-4 text-sm text-gray-600">Content...</div>
</section>`,
    js: `// No JS required for simple section`,
  },
  'Card': {
    componentKey: 'CardDemo',
    html: `<div class="p-4 rounded-xl border bg-white">
  <h4 class="font-semibold">Card Title</h4>
  <p class="text-sm text-gray-600 mt-1">Card content...</p>
  <div class="mt-3">
    <button class="px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm hover:bg-blue-700">Action</button>
  </div>
</div>`,
    js: `// No JS required for static card`,
  },
  'Typography': {
    componentKey: 'TypographyDemo',
    html: `<div class="space-y-1">
  <h1 class="text-2xl font-bold">Heading 1</h1>
  <h2 class="text-xl font-semibold">Heading 2</h2>
  <p class="text-sm text-gray-700">Body text</p>
</div>`,
    js: `// No JS required for typography`,
  },
  'Lists': {
    componentKey: 'ListsDemo',
    html: `<ul class="list-disc ml-5 text-sm text-gray-700">
  <li>First</li>
  <li>Second</li>
</ul>`,
    js: `// No JS required for static list`,
  },
  'Media': {
    componentKey: 'MediaDemo',
    html: `<figure class="rounded-lg border overflow-hidden bg-white max-w-md">
  <img alt="placeholder" src="https://picsum.photos/400/200" class="w-full h-40 object-cover"/>
  <figcaption class="p-2 text-xs text-gray-600">Sample image</figcaption>
</figure>`,
    js: `// No JS required for media figure`,
  },

  // Base Components
  'Buttons': {
    componentKey: 'ButtonsDemo',
    html: `<div class="flex flex-wrap gap-2">
  <button class="px-3 py-2 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700">Primary</button>
  <button class="px-3 py-2 rounded-lg border text-sm">Secondary</button>
  <button class="px-3 py-2 rounded-lg bg-amber-500 text-white text-sm hover:bg-amber-600">Warning</button>
  <button class="px-3 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600">Danger</button>
</div>`,
    js: `// No JS required for static buttons`,
  },
  'Badges': {
    componentKey: 'BadgesDemo',
    html: `<div class="space-x-2">
  <span class="inline-flex px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">Info</span>
  <span class="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Success</span>
</div>`,
    js: `// No JS required for static badges`,
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
    js: `// No JS required for avatar display`,
  },
  'Alerts': {
    componentKey: 'AlertsDemo',
    html: `<div role="alert" class="rounded-lg border border-blue-200 bg-blue-50 text-blue-800 p-3 text-sm">Info alert</div>`,
    js: `// No JS required for static alert`,
  },
  'Tags': {
    componentKey: 'TagsDemo',
    html: `<div class="space-x-2">
  <span class="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">Tag</span>
  <span class="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">UI</span>
</div>`,
    js: `// No JS required for static tags`,
  },
  'Chips': {
    componentKey: 'ChipsDemo',
    html: `<div class="flex flex-wrap gap-2">
  <button class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs hover:bg-gray-50">
    React <span aria-hidden>×</span>
  </button>
  <button class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs hover:bg-gray-50">
    Tailwind <span aria-hidden>×</span>
  </button>
</div>`,
    js: `// Optional interactivity can be added in frameworks; no JS required for static preview`,
  },
  'Tooltips': {
    componentKey: 'TooltipsDemo',
    html: `<div class="relative inline-block">
  <button class="px-3 py-2 rounded-lg border text-sm">Hover me</button>
  <!-- For Playground demonstration, tooltip visibility can be toggled manually -->
  <!-- <div role="tooltip" class="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded">Tooltip text</div> -->
</div>`,
    js: `// Tailwind Playground cannot easily show hover state JS; leave JS empty`,
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
    js: `// No JS required for static navbar`,
  },
  'Sidebar': {
    componentKey: 'SidebarDemo',
    html: `<aside class="w-48 rounded-lg border p-3 bg-white">
  <a class="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#a">Item A</a>
  <a class="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#b">Item B</a>
</aside>`,
    js: `// No JS required for static sidebar`,
  },
  'Tabs': {
    componentKey: 'TabsDemo',
    html: `<div>
  <div class="flex gap-2 border-b">
    <button class="px-3 py-2 text-sm border-b-2 border-blue-600 font-semibold">One</button>
    <button class="px-3 py-2 text-sm text-gray-600">Two</button>
    <button class="px-3 py-2 text-sm text-gray-600">Three</button>
  </div>
  <div class="mt-3 text-sm text-gray-700">Tab One content</div>
</div>`,
    js: `// JS not required for static example; interactive tabs require framework or vanilla JS`,
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
    js: `// No JS required for breadcrumbs`,
  },
  'Pagination': {
    componentKey: 'PaginationDemo',
    html: `<div class="inline-flex items-center gap-2">
  <button class="px-2 py-1 rounded border text-sm">Prev</button>
  <span class="text-sm">Page 1</span>
  <button class="px-2 py-1 rounded border text-sm">Next</button>
</div>`,
    js: `// No JS required for static pagination example`,
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
    js: `// No JS required for static steps`,
  },

  // Basic Forms
  'Inputs': {
    componentKey: 'InputDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Your name</label>
  <input class="w-full px-3 py-2 rounded-lg border" placeholder="Jane Doe"/>
  <div class="text-xs text-gray-500">Typed: —</div>
</div>`,
    js: `// No JS required for static input preview`,
  },
  'Select': {
    componentKey: 'SelectDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Choose</label>
  <select class="w-full px-3 py-2 rounded-lg border">
    <option>Option A</option>
    <option>Option B</option>
  </select>
  <div class="text-xs text-gray-500">Value: a</div>
</div>`,
    js: `// No JS required for static select preview`,
  },
  'Checkbox': {
    componentKey: 'CheckboxDemo',
    html: `<label class="inline-flex items-center gap-2 text-sm">
  <input type="checkbox" class="rounded border-gray-300"/>
  Subscribe (no)
</label>`,
    js: `// No JS required for checkbox static state`,
  },
  'Radio': {
    componentKey: 'RadioDemo',
    html: `<div class="flex gap-4 text-sm">
  <label class="inline-flex items-center gap-2">
    <input type="radio" name="r" checked class="border-gray-300"/>
    A
  </label>
  <label class="inline-flex items-center gap-2">
    <input type="radio" name="r" class="border-gray-300"/>
    B
  </label>
</div>`,
    js: `// No JS required for static radio example`,
  },
  'Text Area': {
    componentKey: 'TextAreaDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Message</label>
  <textarea class="w-full px-3 py-2 rounded-lg border" rows="3" placeholder="Type..."></textarea>
</div>`,
    js: `// No JS required for static textarea`,
  },
  'Switch': {
    componentKey: 'SwitchDemo',
    html: `<button role="switch" aria-checked="false" class="w-12 h-6 rounded-full flex items-center bg-gray-300">
  <span class="w-5 h-5 bg-white rounded-full transform transition translate-x-1"></span>
</button>`,
    js: `// No JS in Playground snippet; interactivity requires script`,
  },

  // Advanced Forms
  'Date Picker': {
    componentKey: 'DatePickerDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Pick a date</label>
  <input type="date" class="px-3 py-2 rounded-lg border"/>
  <div class="text-xs text-gray-500">Value: —</div>
</div>`,
    js: `// No JS required for static date input`,
  },
  'File Upload': {
    componentKey: 'FileUploadDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Upload</label>
  <input type="file" class="block text-sm"/>
  <div class="text-xs text-gray-500">Selected: —</div>
</div>`,
    js: `// No JS required for static file input`,
  },
  'Range Slider': {
    componentKey: 'RangeSliderDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Value</label>
  <input type="range" min="0" max="100" class="w-full"/>
</div>`,
    js: `// No JS required for static range slider`,
  },
  'Autocomplete': {
    componentKey: 'AutocompleteDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Framework</label>
  <input class="w-full px-3 py-2 rounded-lg border" placeholder="Type to search"/>
</div>`,
    js: `// No JS in snippet; add your own filtering logic if needed`,
  },
  'Validation': {
    componentKey: 'ValidationDemo',
    html: `<div class="space-y-2 max-w-sm">
  <label class="text-sm font-medium">Email</label>
  <input class="w-full px-3 py-2 rounded-lg border" placeholder="you@example.com"/>
  <!-- Example state: show error when invalid -->
  <!-- <div class="text-xs text-red-600">Invalid email</div> -->
</div>`,
    js: `// No JS in snippet; validation depends on framework or vanilla JS`,
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
    js: `// No JS required for static table`,
  },
  'Sortable Table': {
    componentKey: 'SortableTableDemo',
    html: `<div>
  <button class="mb-2 px-2 py-1 rounded border text-xs">Sort ▼</button>
  <table class="w-full text-sm border rounded-lg overflow-hidden bg-white">
    <thead class="bg-gray-50">
      <tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr>
    </thead>
    <tbody>
      <tr class="border-t"><td class="p-2">Jane</td><td class="p-2">Designer</td></tr>
      <tr class="border-t"><td class="p-2">John</td><td class="p-2">Engineer</td></tr>
      <tr class="border-t"><td class="p-2">Amy</td><td class="p-2">PM</td></tr>
    </tbody>
  </table>
</div>`,
    js: `// No JS in snippet; sorting requires script/framework`,
  },
  'Data Table': {
    componentKey: 'DataTableDemo',
    html: `<div>
  <input class="mb-2 px-3 py-2 rounded-lg border" placeholder="Filter by name" />
  <table class="w-full text-sm border rounded-lg overflow-hidden bg-white">
    <thead class="bg-gray-50">
      <tr><th class="text-left p-2">Name</th><th class="text-left p-2">Role</th></tr>
    </thead>
    <tbody>
      <tr class="border-t"><td class="p-2">Jane</td><td class="p-2">Designer</td></tr>
      <tr class="border-t"><td class="p-2">John</td><td class="p-2">Engineer</td></tr>
      <tr class="border-t"><td class="p-2">Amy</td><td class="p-2">PM</td></tr>
    </tbody>
  </table>
</div>`,
    js: `// No JS in snippet; filtering requires script/framework`,
  },
  'Filtering': {
    componentKey: 'TableFilteringDemo',
    html: `<!-- See Data Table example with filter input above -->`,
    js: `// See Data Table example for filtering approach`,
  },
};

export function getDemoForItem(itemName) {
  return demoRegistry[itemName] || null;
}
