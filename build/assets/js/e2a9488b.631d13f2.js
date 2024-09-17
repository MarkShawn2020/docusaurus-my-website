"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36851],{35318:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},19941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>d,default:()=>g,frontMatter:()=>m,metadata:()=>h,toc:()=>k});var n=a(35318),o=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))u.call(t,a)&&p(e,a,t[a]);return e};const m={},d="vmware howto",h={unversionedId:"coding/OS/virtual-machine/vmware-howto",id:"coding/OS/virtual-machine/vmware-howto",title:"vmware howto",description:"installation",source:"@site/my-documents/docs/coding/OS/virtual-machine/vmware-howto.md",sourceDirName:"coding/OS/virtual-machine",slug:"/coding/OS/virtual-machine/vmware-howto",permalink:"/docs/coding/OS/virtual-machine/vmware-howto",draft:!1,editUrl:"https://github.com/markshawn2020/docusaurus/edit/master/my-documents/docs/coding/OS/virtual-machine/vmware-howto.md",tags:[],version:"current",lastUpdatedAt:1726564669,formattedLastUpdatedAt:"2024\u5e749\u670817\u65e5",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"virtualbox",permalink:"/docs/coding/OS/virtual-machine/virtualbox-howto"},next:{title:"vmware",permalink:"/docs/coding/OS/virtual-machine/vmware-index"}},f={},k=[{value:"installation",id:"installation",level:2},{value:"configuration",id:"configuration",level:2},{value:"cpu",id:"cpu",level:3},{value:"memories",id:"memories",level:3},{value:"disk storage",id:"disk-storage",level:3},{value:"disk type",id:"disk-type",level:3},{value:"vmware best practice",id:"vmware-best-practice",level:2},{value:"retina solution",id:"retina-solution",level:3},{value:"config keyboards",id:"config-keyboards",level:3},{value:"1. \u2728 mac host key",id:"1--mac-host-key",level:4},{value:"2. copy paste",id:"2-copy-paste",level:4},{value:"vpn proxy",id:"vpn-proxy",level:3},{value:"1. know what&#39;s your ip and vpn port of host machine",id:"1-know-whats-your-ip-and-vpn-port-of-host-machine",level:4},{value:"2. ensure the net type in vm",id:"2-ensure-the-net-type-in-vm",level:4},{value:"3. specify the vpn manually in vm",id:"3-specify-the-vpn-manually-in-vm",level:4},{value:"share files between host(mac) and guest(ubuntu)",id:"share-files-between-hostmac-and-guestubuntu",level:3},{value:"BEST-PRACTICE: use <code>vmhgfs-fuse</code> and auto-complete supported",id:"best-practice-use-vmhgfs-fuse-and-auto-complete-supported",level:4},{value:"resolution 1. use <code>/mnt/~</code>",id:"resolution-1-use-mnt",level:4},{value:"mount host user folder to guest (transfer file from guest to host)",id:"mount-host-user-folder-to-guest-transfer-file-from-guest-to-host",level:4},{value:"umount user folder in guest",id:"umount-user-folder-in-guest",level:4},{value:"TODO: transfer file from host to guest",id:"todo-transfer-file-from-host-to-guest",level:4},{value:"TODO: the <code>scp</code> resolution",id:"todo-the-scp-resolution",level:4},{value:"vmware bugfix",id:"vmware-bugfix",level:2},{value:"vmware",id:"vmware",level:3},{value:"\u2705 <code>fuse: bad mount point &#39;mnt/hgfs&#39;: Transport endpoint is not connected</code>",id:"-fuse-bad-mount-point-mnthgfs-transport-endpoint-is-not-connected",level:3},{value:"vmware ubuntu filesystem startup",id:"vmware-ubuntu-filesystem-startup",level:3},{value:"\u2705 <code>initramfs</code> problem",id:"-initramfs-problem",level:4},{value:"\u2705 <code>Stuck at fsck &quot;/dev/sda1: clean xxx/xxx files [...] &quot; after upgrade to Ubuntu 16 from 14</code>",id:"-stuck-at-fsck-devsda1-clean-xxxxxx-files---after-upgrade-to-ubuntu-16-from-14",level:4},{value:"\u2705 vmware change <code>super</code> key, so that the <code>command</code> key won&#39;t make the ubuntu react as &#39;showing all the active applications&#39;",id:"-vmware-change-super-key-so-that-the-command-key-wont-make-the-ubuntu-react-as-showing-all-the-active-applications",level:3},{value:"disk storage not enough since there are too many deleted versions",id:"disk-storage-not-enough-since-there-are-too-many-deleted-versions",level:3},{value:"Step 0.1. enable usb driver disk manage (read/write permission)",id:"step-01-enable-usb-driver-disk-manage-readwrite-permission",level:4},{value:"Step 0.2. umount driver",id:"step-02-umount-driver",level:4},{value:"Step 0.3. unplug and plug driver",id:"step-03-unplug-and-plug-driver",level:4},{value:"Step 1. find and go to target driver",id:"step-1-find-and-go-to-target-driver",level:4},{value:"Step 2. go to trash dir under driver",id:"step-2-go-to-trash-dir-under-driver",level:4},{value:"Step 3. list all the trash files and rm them (need permission)",id:"step-3-list-all-the-trash-files-and-rm-them-need-permission",level:4},{value:"run emulator on ubuntu vmware",id:"run-emulator-on-ubuntu-vmware",level:2},{value:"FIXME: unable to run <code>emulator</code> after building AOSP",id:"fixme-unable-to-run-emulator-after-building-aosp",level:3},{value:"FIXME: <code>emulator: WARNING: system partition size adjusted to match image file (3083 MB &gt; 800 MB)</code>",id:"fixme-emulator-warning-system-partition-size-adjusted-to-match-image-file-3083-mb--800-mb",level:3},{value:"FIXME: <code>Error &quot;context mismatch in svga_sampler_view_destroy&quot; running GUI programs on Ubuntu in a VM</code>",id:"fixme-error-context-mismatch-in-svga_sampler_view_destroy-running-gui-programs-on-ubuntu-in-a-vm",level:3},{value:"FIXME: <code>TSC frequency mismatch between VM and host</code>",id:"fixme-tsc-frequency-mismatch-between-vm-and-host",level:3},{value:"BEST-PRACTICE: disable side channel mitigations for performance",id:"best-practice-disable-side-channel-mitigations-for-performance",level:2}],v={toc:k};function g(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),p),r(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",c({},{id:"vmware-howto"}),"vmware howto"),(0,n.kt)("h2",c({},{id:"installation"}),"installation"),(0,n.kt)("p",null,"the storage screenshot of installation start"),(0,n.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642237022330-053e8fff5fe8f3e89ed601f005a3f5735089aee559c1e8eb86c7e2700ba30fb7.png"}),(0,n.kt)("h2",c({},{id:"configuration"}),"configuration"),(0,n.kt)("h3",c({},{id:"cpu"}),"cpu"),(0,n.kt)("p",null,"PR: 12 processors (Is it enough? And will it affect the host?)"),(0,n.kt)("h3",c({},{id:"memories"}),"memories"),(0,n.kt)("p",null,"PR: 11G for vm, 5G for host (Is it enough? And will it affect the host?)"),(0,n.kt)("h3",c({},{id:"disk-storage"}),"disk storage"),(0,n.kt)("p",null,(0,n.kt)("del",{parentName:"p"},"500G. Since the size of AOSP is about more than 200G, so 500G, which is double, is reasonable for that need.")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("del",{parentName:"p"},"\u26a0\ufe0f However, we'd better pre-allocate the disk space for speed, and if we set it later, the machine transfer time would be costly!"))),(0,n.kt)("p",null,"Update at 2022-01-24:"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/virtual-machine-howto-1642984951132-b4241a818717209d43d9773a05a29b3cf69e69eb3f79deac584fbe5060d022fa.png",alt:"picture 2"}))),(0,n.kt)("p",null,"You see, the 500G pre-allocated disk takes up more than 600G, when I just download the AOSP mirror, how could it be?"),(0,n.kt)("p",null,"The answer becomes clear: ",(0,n.kt)("strong",{parentName:"p"},"The so-called pre-allocated disk size doesn't mean the full size of the disk to be used, but to be only the core running disk size of virtual machine, so that it's unnecessary to pre-allocate a huge size (such as 500G) for it!!!")),(0,n.kt)("p",null,"Hence, I would just delete the mirror, and re-install one, with no option for pre-allocated size, since I remembered on stackoverflow or anywhere other it said there has no or slight efficiency effect on whether we enable or disable the option pre-allocate."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f And after I just did nothing to the vmware settings (i.e. 20Gb for vmware), and tried to install the AOSP, it warns me that the disk space is not enough. ",(0,n.kt)("strong",{parentName:"p"},"So We still need to allocate a big enough disk space, but not a pre-allocated one!"))),(0,n.kt)("p",null,"FIXME: Space not enough!"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/virtual-machine-howto-1642989696716-0982e10a82b7ad3869b46aea88ea67b50d9673294f97132fab2d31fc6245f4ff.png",alt:"picture 3"}))),(0,n.kt)("p",null,"\u4f46\u662f\u5c31\u5f88\u5947\u602a\uff0c\u56e0\u4e3a\u6211\u91cd\u65b0\u5206\u914d\u8fc7\u78c1\u76d8\u5927\u5c0f\uff0c\u7406\u8bba\u4e0a\u6765\u8bf4\u5e94\u8be5\u662f\u591f\u7684\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/virtual-machine-howto-1642990005066-b159502f78500f58cc060889d19e0b65fc15459c19b31b3c26a6f20bbf6a46fa.png",alt:"picture 4"}))),(0,n.kt)("p",null,"\u7b97\u4e86\uff0c\u6682\u65f6\u6ca1\u65f6\u95f4\u7814\u7a76\u8fd9\u4e2a\u95ee\u9898\u4e86\uff0c\u6211\u5148\u540c\u6b65\u518d\u521b\u5efa\u4e00\u4e2a\u66f4\u5927\u7684\u65b0\u7684\u955c\u50cf\u8bd5\u8bd5\u5427\uff0c\u987a\u5e26\u9a8c\u8bc1\u9ed8\u8ba4\u7684 shell \u652f\u6301\u4e0d\u652f\u6301",(0,n.kt)("inlineCode",{parentName:"p"},"# xxx"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"# !IMPORTANT xxx"),"."),(0,n.kt)("h3",c({},{id:"disk-type"}),"disk type"),(0,n.kt)("p",null,"I searched the difference between different bus types, and it seems that it's better for me to use the default choice of ",(0,n.kt)("inlineCode",{parentName:"p"},"scsi"),"."),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/virtual-machine-howto-1642829938828-c8242d90386b16a1658d2732575863d4953a6cbc2364f6c2685dfa6006bc6ac5.png",alt:"picture 6"}))),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-5872D173-A076-42FE-8D0B-9DB0EB0E7362.html"}),"SCSI\u3001SATA \u548c NVMe \u5b58\u50a8\u63a7\u5236\u5668\u6761\u4ef6\u3001\u9650\u5236\u548c\u517c\u5bb9\u6027"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://communities.vmware.com/t5/VMware-Fusion-Discussions/SCSI-vs-SATA-in-VM-hard-drive-settings/td-p/919991"}),"Solved: SCSI vs SATA in VM hard drive settings. - VMware Technology Network VMTN")))),(0,n.kt)("h2",c({},{id:"vmware-best-practice"}),"vmware best practice"),(0,n.kt)("h3",c({},{id:"retina-solution"}),"retina solution"),(0,n.kt)("p",null,"!!!tip 1. \u6709\u4e9b\u5e16\u5b50\u8bf4\u8981\u5b89\u88c5",(0,n.kt)("inlineCode",{parentName:"p"},"vmware tools"),"\uff0c\u4f46\u6211\u770b\u6211\u7684 vmware \u91cc\u5e94\u8be5\u662f\u5df2\u7ecf\u6709\u4e86\uff0c\u56e0\u4e3a\u5f53\u6211\u60f3\u70b9\u90a3\u4e2a\u6309\u94ae\u7684\u65f6\u5019\uff0c\u663e\u793a\u7684\u662f",(0,n.kt)("inlineCode",{parentName:"p"},"reinstall vmware tools"),"\uff0c\u6b64\u5916\uff0c\u8fd9\u4e2a\u6309\u94ae\u5fc5\u987b\u662f\u542f\u52a8\u4e86\u865a\u62df\u673a\u540e\u624d\u4f1a\u53ef\u70b9\uff0c\u800c\u4e14\u542f\u52a8\u540e\u4e5f\u4e0d\u4e00\u5b9a\u53ef\u70b9\u2026\u2026 2. \u5fd8\u4e86\u3002\u3002"),(0,n.kt)("p",null,"First, check the ",(0,n.kt)("inlineCode",{parentName:"p"},"use full solution for retina display"),", otherwise the screen is \u6a21\u7cca\u7684\uff08\u50cf\u7d20\u5316\uff09\u4e86\u3002 ",(0,n.kt)("img",{alt:"picture 2",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642246537248-83ff3fd47950c36434e088ebc1ae05b0d4ad2b6cd8c9fc1d617ae0709e396d80.png"})),(0,n.kt)("p",null,"However, the cost is that all the text or icons then look too tiny, so that can't be used."),(0,n.kt)("p",null,"The solution is to set the solution of the system and the display scale:"),(0,n.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642246691148-a206fe3f32d14b3b9140908f4ed06c95def396a34750c6c6ac3b483e32bb1fe5.png"}),(0,n.kt)("p",null,"Then the screen looks real!"),(0,n.kt)("p",null,"But there is still a drawback, that is each time switch the view, the scale would goes back. To solve this, if the virtual machine is a Mac, then adjust the solution via:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"// mac terminal\nsudo defaults write /Library/Preferences/com.apple.windowserver DisplaysolutionEnabled -bool true\n")),(0,n.kt)("p",null,"However, if it's a ubuntu, I don't know how to realize it now. PR: ubuntu solution."),(0,n.kt)("p",null,"At last, the retina solution under full-screen mode:"),(0,n.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642246913466-69d9e7e6680c20b4cb19a746694fe62c24cab09c3bf721a8e10f518a8eaa5d7d.png"}),(0,n.kt)("p",null,"FIXME: retina solution of default scale size"),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://docs.vmware.com/en/VMware-Fusion/12/com.vmware.fusion.using.doc/GUID-E142FF07-372C-4952-9AF7-B52865CCDAD1.html"}),"Enable Retina Display Support"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://communities.vmware.com/t5/VMware-Fusion-Discussions/solution-in-Ubuntu-13-04-Retina-Display/td-p/864271"}),"\u5df2\u89e3\u51b3\uff1aUbuntu 13.04\uff08Retina \u663e\u793a\u5c4f\uff09\u4e2d\u7684\u5206\u8fa8\u7387 - VMware \u6280\u672f\u7f51 VMTN"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://unix.stackexchange.com/questions/297569/guest-os-solution-text-too-small-in-vmware-workstation-12-player"}),"virtual machine - Guest OS solution (text too small) in vmware workstation 12 player - Unix & Linux Stack Exchange")))),(0,n.kt)("p",null,"explain why ubuntu conflicts with the retina since it's not for high-dpi screen."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://communities.vmware.com/t5/VMware-Fusion-Discussions/solution-in-Ubuntu-13-04-Retina-Display/td-p/864271"}),"Solved: solution in Ubuntu 13.04 (Retina Display) - VMware Technology Network VMTN"))),(0,n.kt)("p",null,"it's useful when start a mac vmware on a mac."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://macops.ca/macos-vms-hidpi/"}),"\u5728 VMware Fusion \u4e2d\u542f\u7528 HiDPI macOS \u6765\u5bbe\u865a\u62df\u673a"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://blog.csdn.net/qysh123/article/details/19128269?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522164224171816780269865282%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=164224171816780269865282&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-1-19128269.first_rank_v2_pc_rank_v29&utm_term=vmvare+retina&spm=1018.2226.3001.4187"}),"(20 \u6761\u6d88\u606f) Retina MBP \u7684 Windows \u865a\u62df\u673a\u89c6\u7f51\u819c\u5c4f\u7684\u663e\u793a\u6548\u679c\u95ee\u9898\u603b\u7ed3","_","qysh123 \u7684\u4e13\u680f-CSDN \u535a\u5ba2")))),(0,n.kt)("h3",c({},{id:"config-keyboards"}),"config keyboards"),(0,n.kt)("h4",c({},{id:"1--mac-host-key"}),"1. \u2728 mac host key"),(0,n.kt)("p",null,"We can specify whether to enable mac host keyboard shortcuts. ",(0,n.kt)("img",{alt:"picture 1",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642343093491-9df62f0afaa72f1e81ad499b0a9fe95081e71ebe79589ec795785388c6dee76f.png"})),(0,n.kt)("p",null,"However, before we do that, we should consider about it carefully that ",(0,n.kt)("strong",{parentName:"p"},"should you sacrifice your ubuntu experience for the mac multi-tasks or to sacrifice your mac experience for a pure ubuntu use"),"."),(0,n.kt)("p",null,"Although there is one option for us to specify which command key for ubuntu, I failed to let it work."),(0,n.kt)("p",null,"A possible resolution is to config file place: ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.vmware/preference.ini"),", see: 1. not found config file: ",(0,n.kt)("a",c({parentName:"p"},{href:"http://sanbarrow.com/vmx/vmx-preferences-ini.html"}),"sanbarrow.com")," 2. not found config file: ",(0,n.kt)("a",c({parentName:"p"},{href:"https://superuser.com/questions/234918/how-to-change-or-disable-hotkey-for-vmware-player"}),"How to change or disable hotkey for VMware Player? - Super User")),(0,n.kt)("p",null,"However(updated@2022-02-12):"),(0,n.kt)("p",null,"\u4e0d\u9700\u8981\u66ff\u6362\u6587\u4ef6\uff01\uff08\u4e5f\u5f88\u96be\u627e\u5230\uff09"),(0,n.kt)("p",null,"\u53ea\u8981\u5728 vmware \u7684\u952e\u76d8\u4e2d\uff0c\u6dfb\u52a0\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"Command -> Ctrl")," \u7684\u6620\u5c04\u5373\u53ef\uff01"),(0,n.kt)("p",null,"\u7136\u540e\u4e00\u5207\u90fd\u662f\u5982\u6b64\u7684\u4e1d\u6ed1\uff01"),(0,n.kt)("p",null,"\u5999\u554a\uff01\uff08\u6298\u78e8\u4e86\u6211\u4e00\u4e2a\u6708\u4e86 \ud83d\ude22\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vmware-howto-1644606761996-f3e8affdcd3913489c008f206df5b06d2905e0022f15e0e4f16f00cb1b16dec0.png",alt:"picture 5"}))),(0,n.kt)("h4",c({},{id:"2-copy-paste"}),"2. copy paste"),(0,n.kt)("p",null,"!!!warning OUTDATED: use ",(0,n.kt)("inlineCode",{parentName:"p"},"command -> ctrl")," map ! Since the copy paste in linux, are default triggered by the combined key of ",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl + shift"),", so we can specify the key map:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'<img alt="picture 2" src="https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642344159090-57a3cfb0715bd2f3e9bdc354eb4e34a77b668719d9b0a1084423e9823b10c794.png" />\n\nref to [How to Copy Paste in Terminal in Ubuntu and Other Linux](https://itsfoss.com/copy-paste-linux-terminal/#:~:text=On%20Ubuntu%20and%20many%20other,pasting%20text%20in%20the%20terminal.)\n\nAnd in fact, since the default select / copy / paste actions in ubuntu is triggered by `ctrl` by default, I can accept to use `ctrl A/C/V` in vm to avoid annoying different problems caused by command.\n')),(0,n.kt)("p",null,"Only need to map ",(0,n.kt)("inlineCode",{parentName:"p"},"Command")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl"),"! (updated@2022-02-12)"),(0,n.kt)("h3",c({},{id:"vpn-proxy"}),"vpn proxy"),(0,n.kt)("p",null,"In normal circumstance, the net is okay."),(0,n.kt)("p",null,"However, since I use clashx, I can visit outer net in my mac, which is a problem that the virtual machine can not share with the foreign net with the host."),(0,n.kt)("h4",c({},{id:"1-know-whats-your-ip-and-vpn-port-of-host-machine"}),"1. know what's your ip and vpn port of host machine"),(0,n.kt)("img",{alt:"picture 4",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642348196305-8ce3091ff233d927db350b55d3b1d7bbe085fd5b95c381e336e3ebec29f240a4.png"}),(0,n.kt)("h4",c({},{id:"2-ensure-the-net-type-in-vm"}),"2. ensure the net type in vm"),(0,n.kt)("img",{alt:"picture 5",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642348303987-40ecf1bc1c2960577d7818c30ce8e980e120734440c4159c6dd9ba68d18ba094.png"}),(0,n.kt)("h4",c({},{id:"3-specify-the-vpn-manually-in-vm"}),"3. specify the vpn manually in vm"),(0,n.kt)("img",{alt:"picture 3",src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/notes-1642348157085-5862a3e8b9c18f234019db4d87de6931b5fc9adced178b1ded73de4e5af86000.png"}),(0,n.kt)("h3",c({},{id:"share-files-between-hostmac-and-guestubuntu"}),"share files between host(mac) and guest(ubuntu)"),(0,n.kt)("h4",c({},{id:"best-practice-use-vmhgfs-fuse-and-auto-complete-supported"}),"BEST-PRACTICE: use ",(0,n.kt)("inlineCode",{parentName:"h4"},"vmhgfs-fuse")," and auto-complete supported"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"sudo mkdir -p /mnt/hgfs\nsudo vmhgfs-fuse .host:/ /mnt/hgfs -o subtype=vmhgfs-fuse,allow_other\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://superuser.com/questions/588304/no-mnt-hgfs-in-ubuntu-guest-under-vmware-fusion"}),"linux - No /mnt/hgfs in Ubuntu guest under VMWare Fusion - Super User"))),(0,n.kt)("h4",c({},{id:"resolution-1-use-mnt"}),"resolution 1. use ",(0,n.kt)("inlineCode",{parentName:"h4"},"/mnt/~")),(0,n.kt)("p",null,"there are a few of disadvantages:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Every time, it needs to re-activate using ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo vmhgfs-fuse .host:/ /mnt/")," (although we can config it in the zsh/bash rc file)"),(0,n.kt)("li",{parentName:"ol"},"It only supports to fetch the host files within the vmware, which means it's uneasy to directly operate on host (not equally designed, or maybe there is another way)"),(0,n.kt)("li",{parentName:"ol"},"FIXME: When using in the vmware, I found there is no auto-completion for files on host.")),(0,n.kt)("h4",c({},{id:"mount-host-user-folder-to-guest-transfer-file-from-guest-to-host"}),"mount host user folder to guest (transfer file from guest to host)"),(0,n.kt)("p",null,"After a little of search, I found the easiest way is:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"sudo vmhgfs-fuse .host:/ /mnt/\n")),(0,n.kt)("p",null,"After this, there is one directory (my mac user folder ",(0,n.kt)("inlineCode",{parentName:"p"},"mark"),") merging up under the ubuntu ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt")," folder."),(0,n.kt)("p",null,"And then I can easily to transfer files from vmware to mac."),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://askubuntu.com/questions/29284/how-do-i-mount-shared-folders-in-ubuntu-using-vmware-tools"}),"How do I mount shared folders in Ubuntu using VMware tools? - Ask Ubuntu"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IMPROVE: the ",(0,n.kt)("inlineCode",{parentName:"p"},"git")," resolution: ",(0,n.kt)("a",c({parentName:"p"},{href:"https://askubuntu.com/questions/591664/files-missing-in-mnt-hgfs-on-ubuntu-vm"}),"14.10 - Files missing in /mnt/hgfs on Ubuntu VM? - Ask Ubuntu")))),(0,n.kt)("h4",c({},{id:"umount-user-folder-in-guest"}),"umount user folder in guest"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"sudo umount /mnt\n")),(0,n.kt)("p",null,"Then the folders under ",(0,n.kt)("inlineCode",{parentName:"p"},"/mnt")," would go."),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://stackoverflow.com/questions/56472968/vmware-how-to-change-path-to-shared-folder-on-ubuntu-virtual-machine"}),"VMware - How to change path to shared folder on ubuntu virtual machine - Stack Overflow"))),(0,n.kt)("h4",c({},{id:"todo-transfer-file-from-host-to-guest"}),"TODO: transfer file from host to guest"),(0,n.kt)("h4",c({},{id:"todo-the-scp-resolution"}),"TODO: the ",(0,n.kt)("inlineCode",{parentName:"h4"},"scp")," resolution"),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://askubuntu.com/questions/48436/how-to-scp-a-file-from-mac-ubuntu-virtualbox"}),"How to SCP a file from Mac -> Ubuntu VirtualBox? - Ask Ubuntu"))),(0,n.kt)("h2",c({},{id:"vmware-bugfix"}),"vmware bugfix"),(0,n.kt)("h3",c({},{id:"vmware"}),"vmware"),(0,n.kt)("p",null,"\u611f\u89c9\u8fd9\u4e2a\u5b98\u65b9\u89e3\u51b3\u65b9\u6848 ",(0,n.kt)("a",c({parentName:"p"},{href:"https://kb.vmware.com/s/article/2150414"}),'"An error occurred while consolidating disks" when deleting one or more snapshots or consolidate disks (2150414)')," \u662f\u5408\u9002\u7684\uff0c\u5c31\u662f\u4e0d\u77e5\u9053\u5177\u4f53\u600e\u4e48\u5f04\uff1a"),(0,n.kt)("p",null,"resolution 1. Free up space on the datastore(s) holding the virtual machine configuration files and virtual disks."),(0,n.kt)("p",null,"resolution 2. Alternatively, increase the size of the datastore on which the virtual machine is located. For more information, see the vSphere Storage guide."),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vmware-howto-1644766564690-228334db85751f41c5ef2bd3ea4a00f8e8854d5803e5eea784bf235940c696b3.png",alt:"picture 28"}))),(0,n.kt)("hr",null),(0,n.kt)("p",null,"\u57fa\u4e8e ",(0,n.kt)("a",c({parentName:"p"},{href:"https://kb.vmware.com/s/article/2136514"}),"Reclaiming disk space from thin provisioned VMDK files on ESXi (2136514)")," \u5c1d\u8bd5\u4e86\u4e00\u4e0b\uff0c\u7ed3\u679c\u628a\u78c1\u76d8\u7ed9\u585e\u6ee1\u4e86\u2026\u2026"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vmware-howto-1644766450784-3a1b3ee342b1a2ef28f1dde5f7b4643804c087833d2abe636191d24da0d3d4b2.png",alt:"picture 27"}))),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vmware-howto-1644766445912-769a5e30f80c70f04c69b781a2d34cc63ff17af74d72c8fb54b14c20e0e68aeb.png",alt:"picture 26"}))),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u770b\u4f3c\u6709\u7528\uff0c\u4f46\u597d\u4f3c\u5b9e\u9645\u6ca1\u4ec0\u4e48\u7528\uff1a",(0,n.kt)("a",c({parentName:"li"},{href:"https://kb.vmware.com/s/article/2041556"}),"Expanding the size of the virtual disk in Workstation fails with the error: There is not enough space on the file system for the selected operation (2041556)"))),(0,n.kt)("h3",c({},{id:"-fuse-bad-mount-point-mnthgfs-transport-endpoint-is-not-connected"}),"\u2705 ",(0,n.kt)("inlineCode",{parentName:"h3"},"fuse: bad mount point 'mnt/hgfs': Transport endpoint is not connected")),(0,n.kt)("p",null,"\u53d7 ",(0,n.kt)("a",c({parentName:"p"},{href:"https://askubuntu.com/questions/1090715/fuse-bad-mount-point-mnt-transport-endpoint-is-not-connected"}),"sshfs - fuse: bad mount point `/mnt': Transport endpoint is not connected - Ask Ubuntu")," \u542f\u53d1\uff0c\u5148\u53d6\u6d88\u6302\u8f7d\uff0c\u518d\u91cd\u65b0\u6302\u8f7d\u5373\u53ef\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"sudo umount -l /mnt/hgfs\nsudo vmhgfs-fuse .host:/ /mnt/hgfs\n")),(0,n.kt)("h3",c({},{id:"vmware-ubuntu-filesystem-startup"}),"vmware ubuntu filesystem startup"),(0,n.kt)("h4",c({},{id:"-initramfs-problem"}),"\u2705 ",(0,n.kt)("inlineCode",{parentName:"h4"},"initramfs")," problem"),(0,n.kt)("p",null,"problem:"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/linux-bugfix-1643354758760-ad81de24848fdfdbcb4b14d280404f4f56a743a88becb981ea81ae7a91812dbe.png",alt:"picture 166"}))),(0,n.kt)("p",null,"resoluton:"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/linux-bugfix-1643354775857-63b6fb477a82a5fa5ff41fde21fe78f63501b7ce7e8047bc86e5a108aaf5a9c6.png",alt:"picture 167"}))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5148\u7528",(0,n.kt)("inlineCode",{parentName:"li"},"fsck -yf /dev/sda1"),"\u81ea\u52a8\u4fee\u590d\u6587\u4ef6\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ol"},"\u518d",(0,n.kt)("inlineCode",{parentName:"li"},"exit"),"\u5c31\u53ef\u4ee5\u91cd\u65b0\u767b\u5f55\u4e86")),(0,n.kt)("p",null,"oK:"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/linux-bugfix-1643354743918-a663bf57d5e3cdb6cd4747194cd0bb7b859ae4a56b5cc33b2785390b769d3f94.png",alt:"picture 165"}))),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"core ref: ",(0,n.kt)("a",c({parentName:"li"},{href:"https://askubuntu.com/questions/885062/root-file-system-requires-manual-fsck"}),"boot - Root file system requires manual fsck - Ask Ubuntu"))),(0,n.kt)("h4",c({},{id:"-stuck-at-fsck-devsda1-clean-xxxxxx-files---after-upgrade-to-ubuntu-16-from-14"}),"\u2705 ",(0,n.kt)("inlineCode",{parentName:"h4"},'Stuck at fsck "/dev/sda1: clean xxx/xxx files [...] " after upgrade to Ubuntu 16 from 14')),(0,n.kt)("p",null,"problem:"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/linux-bugfix-1643439292142-86bee800c2dbb7fe4a6ee1906d669ee86016bc2e01545c41544917c8ed28e349.png",alt:"picture 1"}))),(0,n.kt)("p",null,"reason:"),(0,n.kt)("p",null,"disk is full, and we need to free some space."),(0,n.kt)("p",null,"resolution:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"Ctrl + Alt + F1 or F2")," into ",(0,n.kt)("inlineCode",{parentName:"li"},"tty2 login")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"df -h")," says ",(0,n.kt)("inlineCode",{parentName:"li"},"/dev/sda1")," is 100% used"),(0,n.kt)("li",{parentName:"ol"},"delete some files, e.g. I deleted android-8 dir of 100+ MB size"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"reboot"),", and the problem is gone.")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://askubuntu.com/questions/923899/stuck-at-fsck-dev-sda1-clean-xxx-xxx-files-after-upgrade-to-ubuntu-16"}),'boot - Stuck at fsck "/dev/sda1: clean xxx/xxx files [...] " after upgrade to Ubuntu 16 from 14 - Ask Ubuntu'))),(0,n.kt)("h3",c({},{id:"-vmware-change-super-key-so-that-the-command-key-wont-make-the-ubuntu-react-as-showing-all-the-active-applications"}),"\u2705 vmware change ",(0,n.kt)("inlineCode",{parentName:"h3"},"super")," key, so that the ",(0,n.kt)("inlineCode",{parentName:"h3"},"command")," key won't make the ubuntu react as 'showing all the active applications'"),(0,n.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a\u76f4\u63a5\u628a",(0,n.kt)("inlineCode",{parentName:"p"},"command"),"\u952e\u6620\u5c04\u5230",(0,n.kt)("inlineCode",{parentName:"p"},"ctrl"),"\u952e\u5373\u53ef\u3002"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"ref")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.vmware.com/en/VMware-Fusion/12/com.vmware.fusion.using.doc/GUID-A50D0E3C-9549-43B5-AB57-070F805780A3.html"}),"Enable or Disable Mac Host Shortcuts on the Keyboard and Mouse Preference Pane"))),(0,n.kt)("h3",c({},{id:"disk-storage-not-enough-since-there-are-too-many-deleted-versions"}),"disk storage not enough since there are too many deleted versions"),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/virtual-machine-howto-1642825099629-aec3eeb09c30c5fc864fcb14d5644833ae1dc7a191ee4ea018a596e771e34f64.png",alt:"picture 4"}))),(0,n.kt)("h4",c({},{id:"step-01-enable-usb-driver-disk-manage-readwrite-permission"}),"Step 0.1. enable usb driver disk manage (read/write permission)"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"defaults write com.apple.Finder AppleShowAllFiles TRUE\n")),(0,n.kt)("h4",c({},{id:"step-02-umount-driver"}),"Step 0.2. umount driver"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"sudo umount /Volumes/T7\n")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://askubuntu.com/questions/1004827/how-to-fix-read-only-usb-drive"}),"How to fix read-only usb drive? - Ask Ubuntu"))),(0,n.kt)("h4",c({},{id:"step-03-unplug-and-plug-driver"}),"Step 0.3. unplug and plug driver"),(0,n.kt)("p",null,"\u91cd\u65b0\u63d2\u62d4 usb"),(0,n.kt)("h4",c({},{id:"step-1-find-and-go-to-target-driver"}),"Step 1. find and go to target driver"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"cd /Volumes/T7\n")),(0,n.kt)("h4",c({},{id:"step-2-go-to-trash-dir-under-driver"}),"Step 2. go to trash dir under driver"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"cd .Trashes/501\n")),(0,n.kt)("h4",c({},{id:"step-3-list-all-the-trash-files-and-rm-them-need-permission"}),"Step 3. list all the trash files and rm them (need permission)"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"}),"sudo ls -la\n\nsudo rm -rf ...\n")),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/virtual-machine-howto-1642828955318-c584f6745ebbfd6cda042aaf83b2bc6e991923213708127e788084b44a6136d5.png",alt:"picture 5"}))),(0,n.kt)("h2",c({},{id:"run-emulator-on-ubuntu-vmware"}),"run emulator on ubuntu vmware"),(0,n.kt)("h3",c({},{id:"fixme-unable-to-run-emulator-after-building-aosp"}),"FIXME: unable to run ",(0,n.kt)("inlineCode",{parentName:"h3"},"emulator")," after building AOSP"),(0,n.kt)("p",null,"A possible resolution may be to ",(0,n.kt)("inlineCode",{parentName:"p"},"lunch full-eng && m")," which is suggested in ",(0,n.kt)("a",c({parentName:"p"},{href:"https://groups.google.com/g/android-building/c/YZOr5YCIQgo"}),"Unable to run emulator after building AOSP"),", and now I am testing this solution."),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://groups.google.com/g/android-building/c/YZOr5YCIQgo"}),"Unable to run emulator after building AOSP"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",c({parentName:"p"},{href:"https://stackoverflow.com/questions/36787229/why-i-cant-launch-android-emulator-after-i-make-the-source-of-android-6-0"}),"Why I can't launch Android emulator after i make the source of Android 6.0? - Stack Overflow")))),(0,n.kt)("h3",c({},{id:"fixme-emulator-warning-system-partition-size-adjusted-to-match-image-file-3083-mb--800-mb"}),"FIXME: ",(0,n.kt)("inlineCode",{parentName:"h3"},"emulator: WARNING: system partition size adjusted to match image file (3083 MB > 800 MB)")),(0,n.kt)("p",null,"A possible resolution:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-sh"})," emulator -partition-size XXX # XXX is the desired size(MB)\n")),(0,n.kt)("p",null,"However, maybe my system is limited since when the size exceeds 2048MB, another problem would arise up...."),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://blog.csdn.net/luhuajcdd/article/details/8786925"}),"(23 \u6761\u6d88\u606f) \u7f16\u8bd1 android \u6e90\u7801\u56db(\u5e38\u89c1\u9519\u8bef)","_","luhuajcdd \u7684\u4e13\u680f-CSDN \u535a\u5ba2"))),(0,n.kt)("h3",c({},{id:"fixme-error-context-mismatch-in-svga_sampler_view_destroy-running-gui-programs-on-ubuntu-in-a-vm"}),"FIXME: ",(0,n.kt)("inlineCode",{parentName:"h3"},'Error "context mismatch in svga_sampler_view_destroy" running GUI programs on Ubuntu in a VM')),(0,n.kt)("p",null,"In ",(0,n.kt)("a",c({parentName:"p"},{href:"https://stackoverflow.com/questions/47150110/error-context-mismatch-in-svga-sampler-view-destroy-running-gui-programs-on-ub"}),'vmware player - Error "context mismatch in svga_sampler_view_destroy" running GUI programs on Ubuntu in a VM - Stack Overflow'),", it suggests me to set ",(0,n.kt)("inlineCode",{parentName:"p"},"SVGA_VGPU10=0")," or to uncheck the ",(0,n.kt)("inlineCode",{parentName:"p"},"Accelerate 3D Graphics"),", but all in vain..."),(0,n.kt)("h3",c({},{id:"fixme-tsc-frequency-mismatch-between-vm-and-host"}),"FIXME: ",(0,n.kt)("inlineCode",{parentName:"h3"},"TSC frequency mismatch between VM and host")),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://stackoverflow.com/questions/57677258/tsc-frequency-mismatch-between-vm-and-host"}),"android - TSC frequency mismatch between VM and host - Stack Overflow"))),(0,n.kt)("h2",c({},{id:"best-practice-disable-side-channel-mitigations-for-performance"}),"BEST-PRACTICE: disable side channel mitigations for performance"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"power off virtual machine"),(0,n.kt)("li",{parentName:"ol"},"disable side channel mitigations")),(0,n.kt)("p",null,(0,n.kt)("img",c({parentName:"p"},{src:"https://mark-vue-oss.oss-cn-hangzhou.aliyuncs.com/vmware-howto-1644888878677-624063d11f3c8f3cc0d4d1d098777847620cfc74000db104d5f59907719a7a7f.png",alt:"picture 3"}))),(0,n.kt)("p",null,"ref:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://kb.vmware.com/s/article/79832"}),"VMs with side channel mitigations enabled may exhibit performance degradation (79832)"))))}g.isMDXComponent=!0}}]);