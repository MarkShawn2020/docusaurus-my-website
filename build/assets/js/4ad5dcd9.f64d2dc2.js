"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80199],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(27378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||s;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},49646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>h});var r=n(35318),o=Object.defineProperty,s=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&l(e,n,t[n]);return e};const p={},f=void 0,m={unversionedId:"coding/Software/Docusaurus/docusaurus-track",id:"coding/Software/Docusaurus/docusaurus-track",title:"docusaurus-track",description:"Plugin Development",source:"@site/my-documents/docs/coding/Software/Docusaurus/docusaurus-track.md",sourceDirName:"coding/Software/Docusaurus",slug:"/coding/Software/Docusaurus/docusaurus-track",permalink:"/docs/coding/Software/Docusaurus/docusaurus-track",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/docs/coding/Software/Docusaurus/docusaurus-track.md",tags:[],version:"current",lastUpdatedAt:1726564669,formattedLastUpdatedAt:"2024\u5e749\u670817\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"feat(theme-common): added interface for locale char mapping",permalink:"/docs/coding/Software/Docusaurus/PR-added-interface-for-local-char-mapping"},next:{title:"readme",permalink:"/docs/coding/Software/FCPX/my318-2021/"}},b={},h=[{value:"Plugin Development",id:"plugin-development",level:2},{value:"Todo",id:"todo",level:2},{value:"Issue",id:"issue",level:2},{value:"reference to directory",id:"reference-to-directory",level:3},{value:"SOLVED: typescript for config",id:"solved-typescript-for-config",level:3},{value:"PR",id:"pr",level:2},{value:"Howto",id:"howto",level:2},{value:"add <code>jest</code> for sub-project <code>my-website</code>",id:"add-jest-for-sub-project-my-website",level:3},{value:"how to build one specific workspace",id:"how-to-build-one-specific-workspace",level:3},{value:"vercel build using hook (api)",id:"vercel-build-using-hook-api",level:3},{value:"\ud83d\ude80 private submodules recursively fork",id:"-private-submodules-recursively-fork",level:3},{value:"\u914d\u7f6e Sidebar \u90e8\u5206\u7ae0\u8282\u6253\u5f00",id:"\u914d\u7f6e-sidebar-\u90e8\u5206\u7ae0\u8282\u6253\u5f00",level:3},{value:"Bugfix",id:"bugfix",level:2},{value:"change declaration order",id:"change-declaration-order",level:3},{value:"fixed eslint import order problem",id:"fixed-eslint-import-order-problem",level:3},{value:"check import css followed after <code>@docusaurus/types</code>",id:"check-import-css-followed-after-docusaurustypes",level:4},{value:"\u89e3\u51b3\u5728 webstorm \u4e2d\u90e8\u5206 type annotation \u4e0d\u8d77\u4f5c\u7528\uff08\u4f46 vscode \u53ef\u4ee5\uff09",id:"\u89e3\u51b3\u5728-webstorm-\u4e2d\u90e8\u5206-type-annotation-\u4e0d\u8d77\u4f5c\u7528\u4f46-vscode-\u53ef\u4ee5",level:3}],g={toc:h};function k(e){var t,o=e,{components:l}=o,p=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n})(o,["components"]);return(0,r.kt)("wrapper",(t=d(d({},g),p),s(t,a({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("h2",d({},{id:"plugin-development"}),"Plugin Development"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"doc: ",(0,r.kt)("a",d({parentName:"li"},{href:"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs"}),"https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs"))),(0,r.kt)("h2",d({},{id:"todo"}),"Todo"),(0,r.kt)("ul",d({},{className:"contains-task-list"}),(0,r.kt)("li",d({parentName:"ul"},{className:"task-list-item"}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",d({parentName:"p"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u8bbe\u7f6e\u57fa\u4e8e\u6587\u4ef6\u5939\u7684\u9ed8\u8ba4\u5217\u8868\u9875\uff0c\u5141\u8bb8\u5bf9\u6587\u4ef6\u5939\u7684\u5f15\u7528\uff08\u4f8b\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"../\u5347\u5b66"),"\uff09\uff0c\u8fdb\u884c\u5bfc\u822a"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"picture 1",src:n(81913).Z,width:"1638",height:"548"}))),(0,r.kt)("li",d({parentName:"ul"},{className:"task-list-item"}),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("input",d({parentName:"p"},{type:"checkbox",checked:!1,disabled:!0}))," ","\u8ffd\u8e2a slug\uff0c\u533a\u5206\u57fa\u4e8e mdx?\u6216\u57fa\u4e8e tsx\uff0c\u589e\u5f3a RouteConfig \u6570\u636e\u7ed3\u6784\uff0c\u4ece\u800c\u66f4\u597d\u7684\u6eaf\u6e90\uff0c\u6bd4\u5982\u5bf9 slug \u91cd\u590d\u8fdb\u884c\u62a5\u9519"))),(0,r.kt)("h2",d({},{id:"issue"}),"Issue"),(0,r.kt)("h3",d({},{id:"reference-to-directory"}),"reference to directory"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 2",src:n(31283).Z,width:"1900",height:"756"}),"  "),(0,r.kt)("h3",d({},{id:"solved-typescript-for-config"}),"SOLVED: typescript for config"),(0,r.kt)("p",null,"solution:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// docusaurus.config.js\n'use strict';\n\n\nrequire(\"tsconfig-paths\").register({\n    baseUrl: \"./\",\n    paths: require(\"./tsconfig.json\").compilerOptions.paths,\n});\n\nrequire('ts-node').register({\n    scope: true,\n    scopeDir: __dirname,\n    swc: true,\n    transpileOnly: true,\n});\n\nmodule.exports = require('./config/src/index.ts');\n")),(0,r.kt)("p",null,"see: ",(0,r.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/docusaurus/issues/7911"}),"A full typescript implementation for config \xb7 Issue #7911 \xb7 facebook/docusaurus")),(0,r.kt)("p",null,"!!!note"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{}),'## Source Code\n\n```ts\n// config/src/index.ts\n\nimport type {Config} from \'@docusaurus/types\'\n\n// here is a sample of async config, and it would be also OK to just put a Config here\nexport const configCreatorAsync = async (): Promise<Config> => ({\n  ...\n  baseUrl: \'/\',\n  docs: {...},\n  blog:{...},\n  ...\n})\n\nexport default configCreatorAsync\n```\n\n```json\n// config/tsconfig.json\n{\n  "compilerOptions": {\n    "baseUrl": ".",\n\n    "module": "commonjs", // docusaturus is based on CJS now\n    "target": "esnext",   // to make the transpiled js more readable than es5 or like\n\n    "outDir": "../..",    // directly output all the generated files under current website root dir, so **[important]**\n                          // prevent the js failing to run in case of any path problems\n    "rootDir": "../..",   // keep the project structure\n\n    "resolveJsonModule": true,   // json support\n    "esModuleInterop": true,     // esm support\n    "moduleResolution": "node",  // node support\n\n    "skipLibCheck": true,        // ensure true to avoid annoying type inspection errors\n    "skipDefaultLibCheck": true, // the same as above \n\n    "sourceMap": false,          // unnecessary to generate map\n    "declaration": false         // unnessary to genrate d.ts            \n  },\n  "include": [\n    "src/**/*.ts",\n    ...     // other files we need to be imported by src under src, e.g. my `../src/ds/tasks.ts`\n  ],\n  "exclude": [\n    "**/node_modules"\n  ]\n}\n```\n\n```json\n// package.json\n{\n  "scripts": {\n    "prestart": "cd config && tsc",\n    "start": "docusaurus start --config config/src/index.js",\n  }\n}\n```\n\n## Attention\n\n- prevent using `path alias` in our ts config file, since it would introduce troubles when transpiling into js, `tsconfig-paths` or `tsc-alias` may be helpful if you need it.\n- It\'s ok to not use `outDir` and `rootDir` in `tsconfig.json`, but it would fail if using `tsc-alias` at the same time since a `outDir` is need.\n- It\'s ok to just write one ts config file just like what the `docusaurus.config.js` did, but the config would become harder to manage as you have seen.\n\n## Other Practices\n\nI also tried to use webpack to pack all the ts files into one `docusaurus.config.webpack.js` file and almost succeded with these settings:\n\n```ts\n// webpack.config.ts\n\nimport path from "path"\n\nimport type {Configuration} from \'webpack/types\'\n\nimport nodeExternals from \'webpack-node-externals\'\n\nconst config: Configuration = {\n  resolve: {\n    extensions: [".tsx", ".ts", ".jsx", ".js"],\n    alias: {\n      // target for tsconfig.json, ref: https://webpack.js.org/configuration/resolve/#resolvealias\n      "@site": path.resolve(__dirname, "../"),\n    }\n  },\n  entry: "./src/index.ts",\n  output: {\n    filename: \'docusaurus.config.webpack.js\',\n    path: path.resolve(__dirname, ".."),\n    library: { // --\x3e IMPORTANT <--\n      type: \'commonjs-module\',\n      export: \'default\'\n    }\n  },\n  target: \'node\',             // must enable, otherwise can\'t resolve `fs|path`\n  node: {\n    __dirname: true          // /my-website/src/css/theme.css\n    // __dirname: false      // /my-website/css/theme.css (default)\n  },\n  externals: [nodeExternals()],\n\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: \'ts-loader\',\n        exclude: /node_modules/,\n      }\n    ],\n  },\n};\n\n\nconst isProduction = process.env.NODE_ENV === "production";\n\nmodule.exports = () => {\n  if (isProduction) {\n    config.mode = "production";\n  } else {\n    config.mode = "development";\n  }\n  return config;\n};\n```\n\nBut it failed with the unknown error `request argument is not a string`, which seems raised by the webpack inner docusaurus.\n\n### ACCEPTED: better-engineering: warn the broken image path\n\nproblem: there are too many errors if we import one doc library from somewhere with uncertain images.\n\n![picture 1](.imgs/docusaurus-track-1659345518937-de9581a2cb3b07f253ce8cbafd8bba0bd3bc1ebc5f25be2dfcba2209fbfb870a.png)\n')),(0,r.kt)("h2",d({},{id:"pr"}),"PR"),(0,r.kt)("h2",d({},{id:"howto"}),"Howto"),(0,r.kt)("h3",d({},{id:"add-jest-for-sub-project-my-website"}),"add ",(0,r.kt)("inlineCode",{parentName:"h3"},"jest")," for sub-project ",(0,r.kt)("inlineCode",{parentName:"h3"},"my-website")),(0,r.kt)("p",null,"ref: ",(0,r.kt)("a",d({parentName:"p"},{href:"https://bobbyhadz.com/blog/typescript-cannot-find-name-describe#:~:text=To%20solve%20the%20%22Cannot%20find,json%20file."}),"Fix - Cannot find name 'describe' Error in TypeScript | bobbyhadz")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"yarn add -D @types/jest ts-jest jest")),(0,r.kt)("li",{parentName:"ol"},"add ",(0,r.kt)("inlineCode",{parentName:"li"},"compileOptions.types.jest")," in ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"))),(0,r.kt)("h3",d({},{id:"how-to-build-one-specific-workspace"}),"how to build one specific workspace"),(0,r.kt)("p",null,"\u547d\u4ee4\u683c\u5f0f\u5c31\u662f\u8fd9\u4e2a\uff0c\u91cd\u70b9\u662f XXX \u8be5\u600e\u4e48\u5199\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-sh"}),"yarn workspace XXX build\n")),(0,r.kt)("p",null,"\u56e0\u4e3a\u8fd9\u4e2a XXX \u4e0d\u7b49\u4e8eworkspaces\u4e0b\u9762\u7684\u6587\u4ef6\u540d\uff0c\u5b9e\u9645\u4e0a\uff0c\u5b83\u4eec\u662f\u6bcf\u4e00\u4e2a workspace \u91cc ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u91cc\u7684\u540d\u5b57\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin-content-blog"),"\u3002"),(0,r.kt)("p",null,"\u6240\u4ee5\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-sh"}),"yarn workspace plugin-content-blog build\nyarn workspace my-website start\n")),(0,r.kt)("h3",d({},{id:"vercel-build-using-hook-api"}),"vercel build using hook (api)"),(0,r.kt)("p",null,"ref: ",(0,r.kt)("a",d({parentName:"p"},{href:"https://vercel.com/docs/concepts/git/deploy-hooks#"}),"https://vercel.com/docs/concepts/git/deploy-hooks#"),"\ncommand: ",(0,r.kt)("inlineCode",{parentName:"p"},"curl -X POST https://api.vercel.com/v1/integrations/deploy/prj_EFC7HzRJH3t5ENxjB5GkESOPwPAy/3SsPLXHylh")),(0,r.kt)("p",null,"but this solution would fail since the vercel cannot auto clone private repos (which is finished in Github actions via ",(0,r.kt)("inlineCode",{parentName:"p"},"action/checkout")," with an ACCESS_TOKEN key)."),(0,r.kt)("h3",d({},{id:"-private-submodules-recursively-fork"}),"\ud83d\ude80 private submodules recursively fork"),(0,r.kt)("p",null,"solution:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"discussion on vercel (but with no valid solution: ",(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/vercel/community/discussions/44"}),"https://github.com/vercel/community/discussions/44")),(0,r.kt)("li",{parentName:"ul"},"\u221a use github actions for vercel (with more info can be found): ",(0,r.kt)("a",d({parentName:"li"},{href:"https://vercel.com/support/articles/how-can-i-use-github-actions-with-vercel"}),"https://vercel.com/support/articles/how-can-i-use-github-actions-with-vercel"))),(0,r.kt)("p",null,"result:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"github action page: ",(0,r.kt)("a",d({parentName:"li"},{href:"https://github.com/MarkShawn2020/docusaurus/actions"}),"https://github.com/MarkShawn2020/docusaurus/actions"))),(0,r.kt)("p",null,"other refs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"generate ssh keys on Github: ",(0,r.kt)("a",d({parentName:"li"},{href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key"}),"https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key")),(0,r.kt)("li",{parentName:"ul"},"run ssh command when deploy (maybe helpful): ",(0,r.kt)("a",d({parentName:"li"},{href:"https://answers.netlify.com/t/support-guide-using-an-ssh-key-via-environment-variable-during-build/2457"}),"https://answers.netlify.com/t/support-guide-using-an-ssh-key-via-environment-variable-during-build/2457"))),(0,r.kt)("h3",d({},{id:"\u914d\u7f6e-sidebar-\u90e8\u5206\u7ae0\u8282\u6253\u5f00"}),"\u914d\u7f6e Sidebar \u90e8\u5206\u7ae0\u8282\u6253\u5f00"),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("a",d({parentName:"p"},{href:"https://docusaurus.io/docs/sidebar/autogenerated#category-item-metadata"}),"Autogenerated | Docusaurus")," \u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(61765).Z},"slam-sidebar-config")),(0,r.kt)("h2",d({},{id:"bugfix"}),"Bugfix"),(0,r.kt)("h3",d({},{id:"change-declaration-order"}),"change declaration order"),(0,r.kt)("p",null,"The order of types in ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," is important!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 1",src:n(5862).Z,width:"1604",height:"1124"}),"  "),(0,r.kt)("h3",d({},{id:"fixed-eslint-import-order-problem"}),"fixed eslint import order problem"),(0,r.kt)("p",null,"solution:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-sh"}),"npx eslint packages/docusaurus-theme-classic/src/theme/TagsListByLetter/index.tsx --debug 2> eslint.error.log\n")),(0,r.kt)("p",null,"Since I haven't initialized the workspace, the eslint does't work fully."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 2",src:n(25236).Z,width:"2786",height:"696"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 1",src:n(75019).Z,width:"1832",height:"660"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 3",src:n(86175).Z,width:"2460",height:"632"})),(0,r.kt)("h4",d({},{id:"check-import-css-followed-after-docusaurustypes"}),"check import css followed after ",(0,r.kt)("inlineCode",{parentName:"h4"},"@docusaurus/types")),(0,r.kt)("p",null,"run: ",(0,r.kt)("inlineCode",{parentName:"p"},'grep -irn -E \'from .@docusaurus/types.\' . --exclude-dir="__tests__" --exclude-dir="lib" -A 10 | grep -E "css[\'\\"]" -B 10')),(0,r.kt)("p",null,"result:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 1",src:n(5505).Z,width:"2858",height:"1062"})),(0,r.kt)("h3",d({},{id:"\u89e3\u51b3\u5728-webstorm-\u4e2d\u90e8\u5206-type-annotation-\u4e0d\u8d77\u4f5c\u7528\u4f46-vscode-\u53ef\u4ee5"}),"\u89e3\u51b3\u5728 webstorm \u4e2d\u90e8\u5206 type annotation \u4e0d\u8d77\u4f5c\u7528\uff08\u4f46 vscode \u53ef\u4ee5\uff09"),(0,r.kt)("p",null,"\u95ee\u9898\uff1a"),(0,r.kt)("p",null,"\u5982\u4e0b\uff0cwebstorm \u7684 Config \u7c7b\u5c31\u6ca1\u6709\u83b7\u5f97\u7c7b\u578b\u63d0\u793a\uff0c\u539f\u56e0\u5f88\u7b80\u5355\uff0c\u5c31\u662f\u56e0\u4e3a\u5bf9\u5e94\u7684\u5e93\u88ab webstorm \u9ed8\u8ba4\u7ed9 excluded \u4e86\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 1",src:n(27245).Z,width:"1820",height:"974"})),(0,r.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,r.kt)("p",null,"\u53ea\u8981\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"@docusaurus")," \u8fd9\u4e2a\u5e93\u53f3\u952e \u201ccancel exclusion\u201d \u5373\u53ef\uff08\u79d2 ok\uff09\uff0c\u53e6\u4e00\u79cd\u65b9\u6cd5\u662f\u5bf9 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," \u8fdb\u884c \u201ccancel exclusion\u201d\uff0c\u4f46\u5e76\u4e0d\u63a8\u8350\uff0c\u56e0\u4e3a\u4f1a\u62d6\u6162 ide \u7684\u8fd0\u884c\u901f\u5ea6\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"picture 2",src:n(93414).Z,width:"1762",height:"734"})))}k.isMDXComponent=!0},61765:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/files/_category_-925440fe12eda085baa72109af8b56b7.yml"},27245:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1658809363936-05019624c5547901e448b63eb3df4a7777bbb138a27754062a5c9d76b565b219-2c54620826d69f4cd1032253b9d8ea68.png"},93414:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1658809446256-0bfd428c3b927fd911cead5f3da24a86c79a9fb24d8a40a69742f91a092f55b1-eb09d5a83e69a6be054625fc438c9187.png"},75019:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659185486028-745de1c3b5dcc95b9f09b207966880fc7f8506597aed23d6d3da669c36b56704-a32fc84ce7d15c37fb133a9038399035.png"},25236:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659185557802-6e54316e3e32a7bc4fc51894137e496c540efc29203a6322483cf3773e813cd3-f73800fb973a769ab97eb1c4d70b8e07.png"},86175:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659185955928-1ed4d1332bc77ef796114e39b621ef7b73158cb5401532aefe1451b0ddee7bd3-b49f5e36764ec19b2359459a6cf28397.png"},5505:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659190587208-ebb186cd03c6118c762284cee14ce4dd92be1c4b6fa663abab9a44d18c106f9c-7b337c0ce3664b75701e57f9c0267c67.png"},81913:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659282167426-1ae1dda7dd1514c94ef5914db1e686d9e5e2ece7a12c14c01cf0d38604a864ac-f36ead0ba2fea0242d7d35b8fee81cb8.png"},31283:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659625701538-90a9935b3b833928c0309eba3a6ee57584f5664ba99297ba21e5fe52d5ce4a20-4f851a32ebb9016397c21398b599e5f3.png"},5862:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/docusaurus-track-1659784262182-a41535577ba7ce5b0358d5bae14556e413954aa857b7b2a5f16ee363b93b9550-3685a9822c809e9bcc8edef367c29852.png"}}]);