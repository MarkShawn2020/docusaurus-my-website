"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56611],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38338:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>d,metadata:()=>f,toc:()=>g});var n=r(35318),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&p(e,r,t[r]);return e};const d={title:"When to Use Static Generation v.s. Server-side Rendering",date:"2020-01-02"},m=void 0,f={permalink:"/blog/2020/09/13/ssg-ssr",editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/blog/2020/09-13-ssg-ssr.md",source:"@site/my-documents/blog/2020/09-13-ssg-ssr.md",title:"When to Use Static Generation v.s. Server-side Rendering",description:"We recommend using Static Generation (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.",date:"2020-01-02T00:00:00.000Z",formattedDate:"2020/01/02",tags:[],readingTime:.78,hasTruncateMarker:!1,authors:[],frontMatter:{title:"When to Use Static Generation v.s. Server-side Rendering",date:"2020-01-02"},prevItem:{title:"\u6781\u5ba2\u8fd0\u8425\u624b\u518c",permalink:"/blog/\u6587\u96c6/\u6781\u5ba2\u8fd0\u8425\u624b\u518c/"},nextItem:{title:"Two Forms of Pre-rendering",permalink:"/blog/2020/09/13/pre-rendering"}},y={authorsImageUrls:[]},g=[],b={toc:g};function h(e){var t,r=e,{components:a}=r,p=((e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},b),p),o(t,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"We recommend using ",(0,n.kt)("strong",{parentName:"p"},"Static Generation")," (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request."),(0,n.kt)("p",null,"You can use Static Generation for many types of pages, including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Marketing pages"),(0,n.kt)("li",{parentName:"ul"},"Blog posts"),(0,n.kt)("li",{parentName:"ul"},"E-commerce product listings"),(0,n.kt)("li",{parentName:"ul"},"Help and documentation")),(0,n.kt)("p",null,'You should ask yourself: "Can I pre-render this page ',(0,n.kt)("strong",{parentName:"p"},"ahead")," of a user's request?\" If the answer is yes, then you should choose Static Generation."),(0,n.kt)("p",null,"On the other hand, Static Generation is ",(0,n.kt)("strong",{parentName:"p"},"not")," a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request."),(0,n.kt)("p",null,"In that case, you can use ",(0,n.kt)("strong",{parentName:"p"},"Server-Side Rendering"),". It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data."))}h.isMDXComponent=!0}}]);