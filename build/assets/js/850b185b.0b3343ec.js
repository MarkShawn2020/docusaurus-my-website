"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60809],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},33295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>k,frontMatter:()=>d,metadata:()=>f,toc:()=>h});var n=a(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&c(e,a,t[a]);return e};const d={},m="ubuntu 18.04.6 LTS \u865a\u62df\u673a\u6307\u5357",f={unversionedId:"coding/OS/virtual-machine/full-guide_ubuntu-in-vmware",id:"coding/OS/virtual-machine/full-guide_ubuntu-in-vmware",title:"ubuntu 18.04.6 LTS \u865a\u62df\u673a\u6307\u5357",description:"1. \u914d\u7f6e\u7f51\u7edc",source:"@site/my-documents/docs/coding/OS/virtual-machine/full-guide_ubuntu-in-vmware.md",sourceDirName:"coding/OS/virtual-machine",slug:"/coding/OS/virtual-machine/full-guide_ubuntu-in-vmware",permalink:"/docs/coding/OS/virtual-machine/full-guide_ubuntu-in-vmware",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/docs/coding/OS/virtual-machine/full-guide_ubuntu-in-vmware.md",tags:[],version:"current",lastUpdatedAt:1726564669,formattedLastUpdatedAt:"2024\u5e749\u670817\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"ios",permalink:"/docs/coding/OS/iOS"},next:{title:"virtualbox",permalink:"/docs/coding/OS/virtual-machine/virtualbox-howto"}},b={},h=[{value:"1. \u914d\u7f6e\u7f51\u7edc",id:"1-\u914d\u7f6e\u7f51\u7edc",level:2},{value:"vpn\u6865\u63a5",id:"vpn\u6865\u63a5",level:3},{value:"\u73af\u5883\u53d8\u91cf\u914d\u7f6e",id:"\u73af\u5883\u53d8\u91cf\u914d\u7f6e",level:3},{value:"2. \u914d\u7f6e apt",id:"2-\u914d\u7f6e-apt",level:2},{value:"2. \u914d\u7f6e\u754c\u9762",id:"2-\u914d\u7f6e\u754c\u9762",level:2},{value:"3. \u914d\u7f6e\u590d\u5236\u7c98\u8d34",id:"3-\u914d\u7f6e\u590d\u5236\u7c98\u8d34",level:2},{value:"4. \u914d\u7f6esudo\u514d\u5bc6",id:"4-\u914d\u7f6esudo\u514d\u5bc6",level:2},{value:"5. \u5b89\u88c5\u5e38\u7528\u547d\u4ee4\u884c",id:"5-\u5b89\u88c5\u5e38\u7528\u547d\u4ee4\u884c",level:2},{value:"\u914d\u7f6e <code>oh-my-zsh</code>",id:"\u914d\u7f6e-oh-my-zsh",level:3},{value:"\u914d\u7f6e <code>vim-plug</code>",id:"\u914d\u7f6e-vim-plug",level:3},{value:"6. \u78c1\u76d8\u5171\u4eab",id:"6-\u78c1\u76d8\u5171\u4eab",level:2},{value:"from host to remote",id:"from-host-to-remote",level:3},{value:"TODO: from remote to host",id:"todo-from-remote-to-host",level:3},{value:"7. \u6027\u80fd\u4f18\u5316",id:"7-\u6027\u80fd\u4f18\u5316",level:2},{value:"\u78c1\u76d8\uff1a\u5173\u95ed\u6d4b\u901a\u9053\u7f13\u51b2",id:"\u78c1\u76d8\u5173\u95ed\u6d4b\u901a\u9053\u7f13\u51b2",level:3},{value:"\u78c1\u76d8\uff1a\u5f00\u542f <code>IOMMU</code>",id:"\u78c1\u76d8\u5f00\u542f-iommu",level:3}],g={toc:h};function k(e){var t,r=e,{components:c}=r,d=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},g),d),l(t,i({components:c,mdxType:"MDXLayout"}))),(0,n.kt)("h1",p({},{id:"ubuntu-18046-lts-\u865a\u62df\u673a\u6307\u5357"}),"ubuntu 18.04.6 LTS \u865a\u62df\u673a\u6307\u5357"),(0,n.kt)("h2",p({},{id:"1-\u914d\u7f6e\u7f51\u7edc"}),"1. \u914d\u7f6e\u7f51\u7edc"),(0,n.kt)("p",null,"\u6bd4\u753b\u9762\u66f4\u8981\u5148\u914d\u7f6e\uff0c\u56e0\u4e3a\u914d\u7f6e\u5176\u4ed6\u7684\u5927\u591a\u6570\u90fd\u8981\u7f51\u7edc"),(0,n.kt)("p",null,"\u6d4b\u8bd5\u7f51\u7edc\u901a\u7545\uff1a\uff08\u4e0d\u8981\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"ping"),"\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"ping"),"\u4e0d\u7b49\u4e8e\u5b9e\u9645\u7f51\u7edc\u6548\u679c\uff0c\u76f4\u63a5\u7528\u706b\u72d0\u6253\u5f00\u767e\u5ea6\u3001\u8c37\u6b4c\u6d4b\u8bd5\uff09"),(0,n.kt)("h3",p({},{id:"vpn\u6865\u63a5"}),"vpn\u6865\u63a5"),(0,n.kt)("p",null,"\u53ea\u8981\u628a\u4e3b\u673aip\u5730\u5740\uff08",(0,n.kt)("inlineCode",{parentName:"p"},"localhost"),"\u4e0d\u884c\uff09\u4e0e\u7aef\u53e3\u914d\u7f6e\u5728http\u5373\u53ef"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 3",src:a(6029).Z,width:"1546",height:"1140"}),"  "),(0,n.kt)("p",null,"\u5982\u679c\u4e0d\u884c\u7684\u8bdd\uff0c\u8fd8\u8981\u786e\u5b9a vpn \u8f6f\u4ef6\u662f\u5426\u5f00\u542f\u4e86\u5c40\u57df\u7f51"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 4",src:a(59083).Z,width:"618",height:"1304"}),"  "),(0,n.kt)("p",null,"\u5982\u6b64\u53ef\u4ee5\u901a\u8fc7\u706b\u72d0\u4e0a\u7f51\u3002"),(0,n.kt)("h3",p({},{id:"\u73af\u5883\u53d8\u91cf\u914d\u7f6e"}),"\u73af\u5883\u53d8\u91cf\u914d\u7f6e"),(0,n.kt)("p",null,"\u914d\u7f6e\u6210 \u81ea\u52a8\uff08wifi\uff09\u6a21\u5f0f\u540e\uff0c\u518d\u914d\u7f6e\u4e00\u4e0b proxy \u548c deb source\uff0c\u5373\u53ef\u4f7f\u7528apt"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 5",src:a(1440).Z,width:"1280",height:"848"}),"  "),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),'# change apt sources to speed up apt\nsudo sed -i.bak -r  "s|deb \\S+|deb http://mirrors.yun-idc.com/ubuntu/|g" /etc/apt/sources.list\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"# change proxy envs\nexport PROXY=192.168.1.246:7890\nexport proxy=$PROXY\nexport https_proxy=$PROXY\n\nsudo apt update\nsudo apt upgrade\n")),(0,n.kt)("h2",p({},{id:"2-\u914d\u7f6e-apt"}),"2. \u914d\u7f6e apt"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),'sudo sed -i.bak -E  "s|deb \\S+|deb http://mirrors.yun-idc.com/ubuntu/|g" /etc/apt/sources.list\n\n')),(0,n.kt)("h2",p({},{id:"2-\u914d\u7f6e\u754c\u9762"}),"2. \u914d\u7f6e\u754c\u9762"),(0,n.kt)("p",null,"\u9996\u5148\u662f\u865a\u62df\u673a\u754c\u9762\uff0c\u786e\u4fdd\u5f00\u542f\u4e86 retina \u9009\u9879\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 6",src:a(38230).Z,width:"1280",height:"940"}),"  "),(0,n.kt)("p",null,"\u5176\u6b21retina\u4e00\u822c\u8981\u5bf9\u5e94\u653e\u7f29\u6bd4\u4f8b\uff08\u4e3a2\uff09\uff0c\u4f46\u542f\u7528\u8fd9\u4e2a\u9700\u8981\u91cd\u65b0\u88c5\u4e00\u4e0b ",(0,n.kt)("inlineCode",{parentName:"p"},"vm-tools"),"\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"# ref: https://askubuntu.com/a/824341/1629991\nsudo apt install open-vm-tools-desktop\n")),(0,n.kt)("admonition",p({},{type:"tip"}),(0,n.kt)("p",{parentName:"admonition"},"\u8bbe\u7f6e\u754c\u9762\u7684\u8fd9\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"(Re)Install Vmware Tools")," \u662f\u6ca1\u7528\u7684\uff0c\u53ef\u4ee5\u65e0\u89c6"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{alt:"picture 7",src:a(15947).Z,width:"798",height:"900"}),"  "),(0,n.kt)("p",{parentName:"admonition"},"\u91cd\u8981\u7684\u662f\u8981\u5728\u547d\u4ee4\u884c\u91cc\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"open-vm-tools-desktop"))),(0,n.kt)("p",null,"\u7406\u8bba\u4e0a\u65e0\u9700\u91cd\u542f\uff0c\u4e0d\u7136\u7684\u8bdd\uff0c\u518d\u914d\u7f6e\u4e00\u4e0b\u4ee5\u4e0b\uff0c\u7136\u540e\u91cd\u542f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"# ref: https://askubuntu.com/a/1313971/1629991\ngsettings set org.gnome.desktop.interface scaling-factor 2\n\n# ref: https://askubuntu.com/a/1369571/1629991\ngsettings set org.gnome.mutter experimental-features \"['scale-monitor-framebuffer']\"\n")),(0,n.kt)("h2",p({},{id:"3-\u914d\u7f6e\u590d\u5236\u7c98\u8d34"}),"3. \u914d\u7f6e\u590d\u5236\u7c98\u8d34"),(0,n.kt)("p",null,"\u5c3d\u7ba1\u6211\u4eec\u5df2\u7ecf\u5728\u8bbe\u7f6e\u91cc\u542f\u52a8\u4e86\u6c99\u7bb1\u9694\u79bb\u91cc\u590d\u5236\u7c98\u8d34\u3001\u62d6\u62fd\u9009\u9879\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 9",src:a(12825).Z,width:"1280",height:"466"}),"  "),(0,n.kt)("p",null,"\u4f46\u6211\u4eec\u5b9e\u9645\u4e0a\u8fd8\u662f\u4e0d\u80fd\u6b63\u5e38\u4f7f\u7528\u526a\u5207\u677f\u7b49\u529f\u80fd\u7684\uff08\u5373\u4f7f\u662f\u5728\u5b89\u88c5\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"open-vm-tools-desktop"),"\u4e4b\u540e\uff09\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 8",src:a(79551).Z,width:"1222",height:"448"}),"  "),(0,n.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\u662f\u5728\u5b89\u88c5\u4e86",(0,n.kt)("inlineCode",{parentName:"p"},"open-vm-tools-desktop"),"\u4e4b\u540e\uff0c\u91cd\u542f\u4e00\u4e0b\uff01\uff08\u8fd9\u4e2a\u5fc5\u987b\u91cd\u542f\u4e86\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 10",src:a(74007).Z,width:"1162",height:"486"}),"  "),(0,n.kt)("h2",p({},{id:"4-\u914d\u7f6esudo\u514d\u5bc6"}),"4. \u914d\u7f6esudo\u514d\u5bc6"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),'echo "$USER ALL=(ALL:ALL) NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/$USER\n')),(0,n.kt)("h2",p({},{id:"5-\u5b89\u88c5\u5e38\u7528\u547d\u4ee4\u884c"}),"5. \u5b89\u88c5\u5e38\u7528\u547d\u4ee4\u884c"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),"sudo apt install -Y git curl wget terminator zsh vim tmux htop\n")),(0,n.kt)("h3",p({},{id:"\u914d\u7f6e-oh-my-zsh"}),"\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"h3"},"oh-my-zsh")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-sh"}),'# `curl, git` needs\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\n')),(0,n.kt)("h3",p({},{id:"\u914d\u7f6e-vim-plug"}),"\u914d\u7f6e ",(0,n.kt)("inlineCode",{parentName:"h3"},"vim-plug")),(0,n.kt)("p",null,"TODO: "),(0,n.kt)("h2",p({},{id:"6-\u78c1\u76d8\u5171\u4eab"}),"6. \u78c1\u76d8\u5171\u4eab"),(0,n.kt)("h3",p({},{id:"from-host-to-remote"}),"from host to remote"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"best recommended: ",(0,n.kt)("a",p({parentName:"li"},{href:"https://askubuntu.com/a/1051620/1629991"}),"https://askubuntu.com/a/1051620/1629991")),(0,n.kt)("li",{parentName:"ul"},"more fundamental one: ",(0,n.kt)("a",p({parentName:"li"},{href:"https://kb.vmware.com/s/article/60262"}),"https://kb.vmware.com/s/article/60262"))),(0,n.kt)("h3",p({},{id:"todo-from-remote-to-host"}),"TODO: from remote to host"),(0,n.kt)("p",null,"see:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://superuser.com/a/1077650/1365851"}),"via ",(0,n.kt)("inlineCode",{parentName:"a"}," Disk Internal's Linux Reader (windows only)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://superuser.com/questions/67636/vmware-workstation-how-to-access-the-virtual-disk-from-the-host-system"}),"https://superuser.com/questions/67636/vmware-workstation-how-to-access-the-virtual-disk-from-the-host-system"))),(0,n.kt)("h2",p({},{id:"7-\u6027\u80fd\u4f18\u5316"}),"7. \u6027\u80fd\u4f18\u5316"),(0,n.kt)("h3",p({},{id:"\u78c1\u76d8\u5173\u95ed\u6d4b\u901a\u9053\u7f13\u51b2"}),"\u78c1\u76d8\uff1a\u5173\u95ed\u6d4b\u901a\u9053\u7f13\u51b2"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 11",src:a(4547).Z,width:"1280",height:"1220"}),"  "),(0,n.kt)("h3",p({},{id:"\u78c1\u76d8\u5f00\u542f-iommu"}),"\u78c1\u76d8\uff1a\u5f00\u542f ",(0,n.kt)("inlineCode",{parentName:"h3"},"IOMMU")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"picture 12",src:a(58442).Z,width:"1390",height:"994"})))}k.isMDXComponent=!0},6029:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663146396647-0cd496b89408bfd8ddf553bc9233d09fcd5f8e2ecc63e246910ef58d63a3ce0c-809b31372fab68c05bc6643703de2f62.png"},59083:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663146484586-64c7c7e1e95d8e889ddae155ff73fea200f9edc0cc08c8b0a0df721585c0603b-afae6b04e2a27297a83521b7b3974b52.png"},1440:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663147163153-878049e7a6ed2afef9fa8c9a70114c5089d4bf8129b3862750e9403f6f9d603b-2f50b0ecad87503dd9a6365c7b13ef9d.png"},38230:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663148898692-00b615c34a41ef0ef8ba1b8374e7f2157d7621c6b05af956f304384ceac825a0-98acf2638433723cd6e8ac1da4af4e2e.png"},15947:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663148956529-97f8f8a8252409f88f27c1b59bf149ff08ebd5f6c707e23aecc54b03f2fb811b-d6f86a939eb27703c8d2cba6b21a10c9.png"},79551:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663149059174-ce02766e69bd39fbc246729e331844381d983ca61445d2d42b20a830280019b6-a1c6fec298f240633d0f996a18db94f4.png"},12825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663149079265-d849ee71f1dfe67ff1a7104bf74b878111e68ab3981ea93556543efff5ac75ae-79e198c24a6ecf486a5f55ff943f6b6c.png"},74007:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663149214216-eebb1047ac3585c2a439ddc484647ab6bfcc00c500da671e8c2152f47d8d0c3a-2971fe774532615cc39eff485b591ed0.png"},4547:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663150798868-7fbad6712c34b901a220e3f19164c2d76ff9d5f012f696dbfd962f2a3bce72c2-aa1631ff8eee368d0e411b2e4a6c9b87.png"},58442:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/full-guide_ubuntu-in-vmware-1663150811861-9351c760199bea9ae5bfaa9a42f8a3c416261b494d5e69868a487178a4eff2e1-be24ea266775dad69ba28eb653d780b4.png"}}]);