"use strict";(self.webpackChunkjustlazzy_github_io=self.webpackChunkjustlazzy_github_io||[]).push([[768],{9613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(6600),a=(n(9496),n(9613));const o={sidebar_positon:2,title:"Installation"},i=void 0,l={unversionedId:"paid-scripts/jl-motel/installation/qbcore/installation",id:"paid-scripts/jl-motel/installation/qbcore/installation",title:"Installation",description:"Go to your qb-core/shared/items.lua and add this snippet",source:"@site/docs/paid-scripts/jl-motel/installation/qbcore/installation.md",sourceDirName:"paid-scripts/jl-motel/installation/qbcore",slug:"/paid-scripts/jl-motel/installation/qbcore/installation",permalink:"/docs/paid-scripts/jl-motel/installation/qbcore/installation",draft:!1,tags:[],version:"current",frontMatter:{sidebar_positon:2,title:"Installation"},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/docs/paid-scripts/jl-motel/installation/qbcore/dependencies"},next:{title:"Setting up inventory",permalink:"/docs/paid-scripts/jl-motel/installation/qbcore/inventory"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Go to your")," ",(0,a.kt)("inlineCode",{parentName:"p"},"qb-core/shared/items.lua")," ",(0,a.kt)("strong",{parentName:"p"},"and add this snippet")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"title=qb-core/shared/items.lua",title:"qb-core/shared/items.lua"}," ['motel_key']                   = {['name'] = 'motel_key',                     ['label'] = 'Motel Key',                ['weight'] = 0,         ['type'] = 'item',      ['image'] = 'motel_key.png',            ['unique'] = true,      ['useable'] = true,     ['shouldClose'] = true,    ['combinable'] = nil,   ['description'] = 'Motel key'},\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Go to your")," ",(0,a.kt)("inlineCode",{parentName:"p"},"qb-core/server/player.lua"),(0,a.kt)("strong",{parentName:"p"},"and find this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"    PlayerData.metadata['inside'] = PlayerData.metadata['inside'] or {\n        house = nil,\n        apartment = {\n            apartmentType = nil,\n            apartmentId = nil,\n        },\n    }\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Replace that with this")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"    PlayerData.metadata['inside'] = PlayerData.metadata['inside'] or {\n        house = nil,\n        apartment = {\n            apartmentType = nil,\n            apartmentId = nil,\n        },\n        motel = {\n            motel = nil,\n            room = nil\n        }\n    }\n")))}u.isMDXComponent=!0}}]);