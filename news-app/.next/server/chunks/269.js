exports.id=269,exports.ids=[269],exports.modules={8189:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,3724,23)),Promise.resolve().then(s.t.bind(s,5365,23)),Promise.resolve().then(s.t.bind(s,4900,23)),Promise.resolve().then(s.t.bind(s,4714,23)),Promise.resolve().then(s.t.bind(s,5392,23)),Promise.resolve().then(s.t.bind(s,8898,23))},5704:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,614,23)),Promise.resolve().then(s.bind(s,5821)),Promise.resolve().then(s.bind(s,9323))},5821:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>app_NavLinks});var r=s(784),a=s(7114);let n=["Business","Entertainment","General","Health","Science","Sports","Technology"];var i=s(1440),l=s.n(i);let app_NavLink=function({category:e,isActive:t}){return r.jsx(l(),{href:`/news/${e}`,className:`navLink ${t&&"underline decoration-blue-400 underline-offset-4 font-bold text-lg"}`,children:e})},app_NavLinks=function(){let e=(0,a.usePathname)(),isActive=t=>e?.split("/").pop()===t;return r.jsx("nav",{className:"grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 max-w-6xl mx-auto border-b",children:n.map(e=>r.jsx(app_NavLink,{category:e,isActive:isActive(e)},e))})}},9323:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(784),a=s(7114),n=s(9885);let __WEBPACK_DEFAULT_EXPORT__=function(){let[e,t]=(0,n.useState)(""),s=(0,a.useRouter)();return(0,r.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e&&s.push(`/search?term=${e}`)},className:"max-w-6xl mx-auto flex justify-between items-center px-5",children:[r.jsx("input",{type:"text",value:e,onChange:e=>t(e.target.value),className:"w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-blue-400",placeholder:"Search..."}),r.jsx("button",{type:"submit",disabled:!e,className:"text-blue-400 disabled:text-gray-400",children:"Search"})]})}},3799:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>RootLayout,metadata:()=>b});var r=s(4656);s(5023);var a=s(2307),n=s(4353),i=s.n(n),l=s(5153);let o=(0,l.createProxy)(String.raw`C:\Users\kckev\Projects\news-app\news-app\src\app\NavLinks.tsx`),{__esModule:d,$$typeof:c}=o,p=o.default,x=(0,l.createProxy)(String.raw`C:\Users\kckev\Projects\news-app\news-app\src\app\SearchBar.tsx`),{__esModule:u,$$typeof:h}=x,m=x.default,app_Header=function(){return(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{className:"grid grid-cols-3 p-10 items-center",children:[r.jsx(a.Z,{className:"h-8 w-8 cursor-pointer"}),r.jsx(i(),{href:"/",prefetch:!1,children:r.jsx("h1",{className:"font-bold text-6xl text-center",children:r.jsx("span",{className:"underline decoration-6 decoration-blue-400",children:"THE DAILY PLANET"})})}),r.jsx("div",{className:"flex items-center justify-end space-x-2",children:r.jsx("a",{href:"https://github.com/kevinchau03/news-app",target:"_blank",className:"hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800",children:"Github Repo"})})]}),r.jsx(p,{}),r.jsx(m,{})]})},b={title:"Kevin News App",description:"Generated by create next app"};function RootLayout({children:e}){return(0,r.jsxs)("html",{lang:"en",children:[r.jsx("head",{}),(0,r.jsxs)("body",{className:"bg-white dark:bg-zinc-900 transition-all duration-700",children:[r.jsx(app_Header,{}),r.jsx("div",{className:"max-w-6xl mx-auto",children:e})]})]})}},5023:()=>{}};