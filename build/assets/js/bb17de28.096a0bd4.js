"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39308],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>O,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var n=r(35318),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&p(e,r,t[r]);return e};const u={},f="\u9898\u89e3 Leetcode 1438. \u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4\u95ee\u9898\uff08\u53cc\u5355\u8c03\u961f\u5217\uff09",m={unversionedId:"series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4/index",id:"series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4/index",title:"\u9898\u89e3 Leetcode 1438. \u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4\u95ee\u9898\uff08\u53cc\u5355\u8c03\u961f\u5217\uff09",description:"",source:"@site/my-documents/docs/series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4/index.md",sourceDirName:"series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4",slug:"/series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4/",permalink:"/docs/series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4/",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/docs/series/algorithm/2021-02-21-Leetcode 1438. \u7edd\u5bf9\u5dee\u4e0d\u8d85\u8fc7\u9650\u5236\u7684\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4/index.md",tags:[],version:"current",lastUpdatedAt:1726564669,formattedLastUpdatedAt:"2024\u5e749\u670817\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"\u9898\u89e3 Acwing 3215. \u7f51\u7edc\u5ef6\u65f6",permalink:"/docs/series/algorithm/2021-02-20-Acwing 3215. \u7f51\u7edc\u5ef6\u65f6/"},next:{title:"\u4e8c\u5206\u67e5\u627e",permalink:"/docs/series/algorithm/2021-02-21-\u8be6\u89e3\u4e8c\u5206\u67e5\u627e\uff08\u4e00\uff09"}},y={},b=[],g={toc:b};function O(e){var t,o=e,{components:p}=o,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(o,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),u),a(t,i({components:p,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"\u9898\u89e3-leetcode-1438-\u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4\u95ee\u9898\u53cc\u5355\u8c03\u961f\u5217"}),"\u9898\u89e3 Leetcode 1438. \u6700\u957f\u8fde\u7eed\u5b50\u6570\u7ec4\u95ee\u9898\uff08\u53cc\u5355\u8c03\u961f\u5217\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(55347).Z,width:"1920",height:"1080"})," ",(0,n.kt)("img",{src:r(13455).Z,width:"1920",height:"1080"})))}O.isMDXComponent=!0},55347:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/001-7cdb5af6583b309e125f72db440cc57f.jpeg"},13455:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/002-eeedd1a3e1de4afea796080788f1d486.jpeg"}}]);