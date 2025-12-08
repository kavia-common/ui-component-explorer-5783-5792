 /**
  * PUBLIC_INTERFACE
  * Collection of small interactive demo components used in the Components list previews.
  * These are intentionally minimal and rely only on React + Tailwind.
  * Polished to align with brand gradients, consistent radii, and accessible focus-visible rings.
  */
 import React from 'react';
 
 // Shared style tokens for demos (Tailwind-only for Playground)
 const primaryBtn = 'btn-brand-45';
 const secondaryBtn = 'px-3 py-2 rounded-lg border text-sm bg-white text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors';
 const inputField = 'w-full px-3 py-2 rounded-lg border bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors';
 
 export function ColumnsDemo() {
   return (
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
       <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm">Left content</div>
       <div className="rounded-xl border bg-white p-4 text-sm text-gray-700 shadow-sm">Right content</div>
     </div>
   );
 }
 export function LayoutSplitterDemo() {
   return (
     <div className="flex rounded-xl border bg-white overflow-hidden w-full shadow-sm">
       <div className="basis-1/2 min-w-[120px] p-4 text-sm">Pane A</div>
       <div className="w-1 bg-gray-200" role="separator" aria-orientation="vertical"></div>
       <div className="basis-1/2 min-w-[120px] p-4 text-sm">Pane B</div>
     </div>
   );
 }
 export function ImagesDemo() {
   return (
     <figure className="max-w-md rounded-xl border bg-white overflow-hidden shadow-sm">
       <img src="https://picsum.photos/600/320" alt="Random" className="w-full h-44 object-cover" />
       <figcaption className="text-xs text-gray-600 p-2">Responsive image with caption</figcaption>
     </figure>
   );
 }
 export function LinksDemo() {
   return (
     <p className="text-sm text-gray-700">
       Visit the <a href="#" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">documentation</a> for details.
     </p>
   );
 }
 export function DividersDemo() {
   return (
     <div className="space-y-3 w-full">
       <div className="text-sm text-gray-600">Above</div>
       <hr className="border-gray-200" />
       <div className="text-sm text-gray-600">Below</div>
     </div>
   );
 }
 export function KBDDemo() {
   return (
     <p className="text-sm text-gray-700">
       Press <kbd className="px-1.5 py-0.5 text-xs font-semibold border rounded bg-gray-50">Ctrl</kbd> + <kbd className="px-1.5 py-0.5 text-xs font-semibold border rounded bg-gray-50">K</kbd> to search
     </p>
   );
 }
 export function CustomScrollbarDemo() {
   return (
     <div className="h-32 w-full max-w-sm overflow-y-auto rounded-xl border bg-white shadow-sm [scrollbar-width:thin] [scrollbar-color:theme(colors.gray.400)_transparent]">
       <ul className="divide-y">
         {Array.from({length: 10}).map((_,i)=>(
           <li key={i} className="p-2 text-sm">Item {i+1}</li>
         ))}
       </ul>
     </div>
   );
 }
 export function GridDemo() {
   return (
     <div className="grid grid-cols-3 gap-3 w-full">
       {[1,2,3,4,5,6].map(i=> (
         <div key={i} className="h-16 rounded-xl border bg-white flex items-center justify-center text-sm text-gray-600 shadow-sm">Box {i}</div>
       ))}
     </div>
   );
 }
 
 export function ContainerDemo() {
   return <div className="max-w-4xl mx-auto px-4 w-full">Responsive container</div>;
 }
 
 export function SectionDemo() {
   return (
     <section className="py-6 border rounded-xl bg-white w-full shadow-sm">
       <h3 className="px-4 font-semibold">Section</h3>
       <div className="px-4 text-sm text-gray-600">Content...</div>
     </section>
   );
 }
 
 export function CardDemo() {
   return (
     <div className="p-4 rounded-xl border bg-white w-full max-w-sm shadow-sm">
       <h4 className="font-semibold">Card Title</h4>
       <p className="text-sm text-gray-600 mt-1">Card content...</p>
       <div className="mt-3">
         <button className={primaryBtn}>Action</button>
       </div>
     </div>
   );
 }
 
 export function TypographyDemo() {
   return (
     <div className="space-y-1">
       <h1 className="text-2xl font-bold">Heading 1</h1>
       <h2 className="text-xl font-semibold">Heading 2</h2>
       <p className="text-sm text-gray-700">Body text</p>
     </div>
   );
 }
 
 export function ListsDemo() {
   return <ul className="list-disc ml-5 text-sm text-gray-700"><li>First</li><li>Second</li></ul>;
 }
 
 export function MediaDemo() {
   return (
     <figure className="rounded-xl border overflow-hidden bg-white w-full max-w-md shadow-sm">
       <img alt="placeholder" src="https://picsum.photos/400/200" className="w-full h-40 object-cover"/>
       <figcaption className="p-2 text-xs text-gray-600">Sample image</figcaption>
     </figure>
   );
 }
 
 // Base components
 export function ButtonsDemo() {
   return (
     <div className="flex flex-wrap gap-2">
       <button className={primaryBtn}>Primary</button>
       <button className={secondaryBtn}>Secondary</button>
       <button className="px-3 py-2 rounded-lg bg-amber-500 text-white text-sm hover:bg-amber-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors">Warning</button>
       <button className="px-3 py-2 rounded-lg bg-red-500 text-white text-sm hover:bg-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors">Danger</button>
     </div>
   );
 }
 
 export function BadgesDemo() {
   return (
     <div className="space-x-2">
       <span className="inline-flex px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">Info</span>
       <span className="inline-flex px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Success</span>
     </div>
   );
 }
 
 export function AvatarsDemo() {
   return (
     <div className="flex items-center gap-3">
       <img className="w-10 h-10 rounded-full" alt="avatar" src="https://i.pravatar.cc/100?img=1"/>
       <div>
         <div className="text-sm font-semibold">Jane Doe</div>
         <div className="text-xs text-gray-500">Designer</div>
       </div>
     </div>
   );
 }
 
 export function AlertsDemo() {
   return <div role="alert" className="rounded-lg border border-blue-200 bg-blue-50 text-blue-800 p-3 text-sm shadow-sm">Info alert</div>;
 }
 
 export function TagsDemo() {
   return <div className="space-x-2"><span className="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">Tag</span><span className="inline-flex items-center px-2 py-0.5 rounded-full border text-xs">UI</span></div>;
 }
 
 export function ChipsDemo() {
   const [items] = React.useState(['React','Tailwind']);
   return (
     <div className="flex flex-wrap gap-2">
       {items.map(x=> (
         <button key={x} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 transition-colors">
           {x}
           <span aria-hidden>×</span>
         </button>
       ))}
     </div>
   );
 }
 
 export function TooltipsDemo() {
   const [show,setShow] = React.useState(false);
   return (
     <div className="relative inline-block">
       <button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} className={secondaryBtn}>Hover me</button>
       {show && <div role="tooltip" className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap text-xs bg-black text-white px-2 py-1 rounded shadow-soft">Tooltip text</div>}
     </div>
   );
 }
 
 // Navigation
 export function NavbarDemo() {
   return (
     <nav className="w-full rounded-xl border bg-white px-4 py-2 flex items-center justify-between shadow-sm">
       <div className="font-semibold">Brand</div>
       <div className="flex items-center gap-3 text-sm">
         <a href="#home" className="hover:underline">Home</a>
         <a href="#docs" className="hover:underline">Docs</a>
       </div>
     </nav>
   );
 }
 export function SidebarDemo() {
   return (
     <aside className="w-48 rounded-xl border p-3 bg-white shadow-sm">
       <a className="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#a">Item A</a>
       <a className="block rounded px-2 py-1 text-sm hover:bg-gray-50" href="#b">Item B</a>
     </aside>
   );
 }
 export function TabsDemo() {
   const [tab,setTab]=React.useState('One');
   return (
     <div>
       <div className="flex gap-2 border-b">
         {['One','Two','Three'].map(t=> (
           <button key={t} onClick={()=>setTab(t)} className={'px-3 py-2 text-sm transition-colors ' + (tab===t? 'border-b-2 border-blue-600 font-semibold text-gray-900':'text-gray-600 hover:text-gray-800')}>
             {t}
           </button>
         ))}
       </div>
       <div className="mt-3 text-sm text-gray-700">Tab {tab} content</div>
     </div>
   );
 }
 export function BreadcrumbsDemo() {
   return <nav aria-label="Breadcrumb" className="text-sm"><ol className="flex gap-2"><li><a href="#" className="hover:underline">Home</a></li><li>/</li><li className="text-gray-700">Library</li></ol></nav>;
 }
 export function PaginationDemo() {
   const [page,setPage]=React.useState(1);
   return (
     <div className="inline-flex items-center gap-2">
       <button disabled={page===1} onClick={()=>setPage(p=>Math.max(1,p-1))} className={`${secondaryBtn} disabled:opacity-50`}>Prev</button>
       <span className="text-sm">Page {page}</span>
       <button onClick={()=>setPage(p=>p+1)} className={secondaryBtn}>Next</button>
     </div>
   );
 }
 export function StepsDemo() {
   return <ol className="flex items-center gap-3 text-sm"><li className="flex items-center gap-1"><span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs grid place-items-center">1</span> Start</li><li>—</li><li className="flex items-center gap-1 text-gray-500"><span className="w-5 h-5 rounded-full border grid place-items-center">2</span> Confirm</li></ol>;
 }
 
 // Basic Forms
 export function InputDemo() {
   const [v,setV]=React.useState('');
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Your name</label>
       <input value={v} onChange={e=>setV(e.target.value)} className={inputField} placeholder="Jane Doe"/>
       <div className="text-xs text-gray-500">Typed: {v||'—'}</div>
     </div>
   );
 }
 export function SelectDemo() {
   const [v,setV]=React.useState('a');
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Choose</label>
       <select value={v} onChange={e=>setV(e.target.value)} className={inputField}>
         <option value="a">Option A</option>
         <option value="b">Option B</option>
       </select>
       <div className="text-xs text-gray-500">Value: {v}</div>
     </div>
   );
 }
 export function CheckboxDemo() {
   const [c,setC]=React.useState(false);
   return (
     <label className="inline-flex items-center gap-2 text-sm">
       <input type="checkbox" checked={c} onChange={e=>setC(e.target.checked)} className="rounded border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"/>
       Subscribe ({c? 'yes':'no'})
     </label>
   );
 }
 export function RadioDemo() {
   const [v,setV]=React.useState('a');
   return (
     <div className="flex gap-4 text-sm">
       {['a','b'].map(opt=> (
         <label key={opt} className="inline-flex items-center gap-2">
           <input type="radio" name="r" value={opt} checked={v===opt} onChange={()=>setV(opt)} className="border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"/>
           {opt.toUpperCase()}
         </label>
       ))}
     </div>
   );
 }
 export function TextAreaDemo() {
   return <div className="space-y-2 w-full max-w-sm"><label className="text-sm font-medium">Message</label><textarea className={`${inputField}`} rows="3" placeholder="Type..."></textarea></div>;
 }
 export function SwitchDemo() {
   const [on,setOn]=React.useState(false);
   return (
     <button onClick={()=>setOn(o=>!o)} role="switch" aria-checked={on} className={'w-12 h-6 rounded-full flex items-center transition-colors ' + (on? 'bg-blue-600':'bg-gray-300')}>
       <span className={'w-5 h-5 bg-white rounded-full transform transition ' + (on? 'translate-x-6':'translate-x-1')}></span>
     </button>
   );
 }
 
 // Advanced Forms
 export function DatePickerDemo() {
   const [d,setD]=React.useState('');
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Pick a date</label>
       <input type="date" value={d} onChange={e=>setD(e.target.value)} className={inputField}/>
       <div className="text-xs text-gray-500">Value: {d||'—'}</div>
     </div>
   );
 }
 export function FileUploadDemo() {
   const [name,setName]=React.useState('');
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Upload</label>
       <input type="file" onChange={e=>setName(e.target.files?.[0]?.name||'')} className="block text-sm"/>
       <div className="text-xs text-gray-500">Selected: {name||'—'}</div>
     </div>
   );
 }
 export function RangeSliderDemo() {
   const [v,setV]=React.useState(50);
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Value: {v}</label>
       <input type="range" min="0" max="100" value={v} onChange={e=>setV(parseInt(e.target.value))} className="w-full"/>
     </div>
   );
 }
 export function AutocompleteDemo() {
   const [q,setQ]=React.useState('');
   const options=['React','Vue','Svelte','Angular'];
   const filtered=options.filter(o=>o.toLowerCase().includes(q.toLowerCase()));
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Framework</label>
       <input value={q} onChange={e=>setQ(e.target.value)} className={inputField} placeholder="Type to search"/>
       {q && (
         <ul className="border rounded-lg bg-white max-w-sm text-sm">
           {filtered.map(x=> <li key={x} className="px-3 py-1 hover:bg-gray-50 cursor-pointer">{x}</li>)}
         </ul>
       )}
     </div>
   );
 }
 export function ValidationDemo() {
   const [email,setEmail]=React.useState('');
   const valid=/^[^\@\s]+@[^\@\s]+\.[^\@\s]+$/.test(email);
   return (
     <div className="space-y-2 w-full max-w-sm">
       <label className="text-sm font-medium">Email</label>
       <input value={email} onChange={e=>setEmail(e.target.value)} className={`${inputField} ${email && !valid? 'border-red-400':''}`} placeholder="you@example.com"/>
       {!valid && email && <div className="text-xs text-red-600">Invalid email</div>}
     </div>
   );
 }
 
 // Tables
 export function SimpleTableDemo() {
   return (
     <table className="w-full text-sm border rounded-xl overflow-hidden bg-white shadow-sm">
       <thead className="bg-gray-50"><tr><th className="text-left p-2">Name</th><th className="text-left p-2">Role</th></tr></thead>
       <tbody>
         <tr className="border-t"><td className="p-2">Jane</td><td className="p-2">Designer</td></tr>
         <tr className="border-t"><td className="p-2">John</td><td className="p-2">Engineer</td></tr>
       </tbody>
     </table>
   );
 }
 export function SortableTableDemo() {
   const [asc,setAsc]=React.useState(true);
   const rows=[{n:'Jane',r:'Designer'},{n:'John',r:'Engineer'},{n:'Amy',r:'PM'}];
   const sorted=[...rows].sort((a,b)=> asc? a.n.localeCompare(b.n): b.n.localeCompare(a.n));
   return (
     <div className="w-full">
       <button onClick={()=>setAsc(a=>!a)} className="mb-2 px-2 py-1 rounded border text-xs">Sort {asc? '▼':'▲'}</button>
       <table className="w-full text-sm border rounded-xl overflow-hidden bg-white shadow-sm">
         <thead className="bg-gray-50"><tr><th className="text-left p-2">Name</th><th className="text-left p-2">Role</th></tr></thead>
         <tbody>
           {sorted.map((r)=> (
             <tr key={r.n} className="border-t"><td className="p-2">{r.n}</td><td className="p-2">{r.r}</td></tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }
 export function DataTableDemo() {
   const [q,setQ]=React.useState('');
   const rows=[{n:'Jane',r:'Designer'},{n:'John',r:'Engineer'},{n:'Amy',r:'PM'}];
   const filtered=rows.filter(r=> r.n.toLowerCase().includes(q.toLowerCase()));
   return (
     <div className="w-full">
       <input className={inputField + ' mb-2'} placeholder="Filter by name" value={q} onChange={e=>setQ(e.target.value)} />
       <table className="w-full text-sm border rounded-xl overflow-hidden bg-white shadow-sm">
         <thead className="bg-gray-50"><tr><th className="text-left p-2">Name</th><th className="text-left p-2">Role</th></tr></thead>
         <tbody>
           {filtered.map((r)=> (
             <tr key={r.n} className="border-t"><td className="p-2">{r.n}</td><td className="p-2">{r.r}</td></tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 }
 export function TableFilteringDemo() {
   return <div className="text-sm text-gray-600">See Data Table demo with filter input.</div>;
 }
 
