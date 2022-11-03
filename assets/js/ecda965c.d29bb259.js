"use strict";(self.webpackChunkjustlazzy_github_io=self.webpackChunkjustlazzy_github_io||[]).push([[297],{9613:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(9496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,p=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),f=s(n),u=i,y=f["".concat(p,".").concat(u)]||f[u]||c[u]||a;return n?r.createElement(y,o(o({ref:e},m),{},{components:n})):r.createElement(y,o({ref:e},m))}));function u(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=f;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2776:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(6600),i=(n(9496),n(9613));const a={title:"Setting up inventory"},o=void 0,l={unversionedId:"paid-scripts/jl-motel/installation/qbcore/inventory",id:"paid-scripts/jl-motel/installation/qbcore/inventory",title:"Setting up inventory",description:"qb-inventory / lj-inventory",source:"@site/docs/paid-scripts/jl-motel/installation/qbcore/inventory.md",sourceDirName:"paid-scripts/jl-motel/installation/qbcore",slug:"/paid-scripts/jl-motel/installation/qbcore/inventory",permalink:"/docs/paid-scripts/jl-motel/installation/qbcore/inventory",draft:!1,tags:[],version:"current",frontMatter:{title:"Setting up inventory"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/paid-scripts/jl-motel/installation/qbcore/installation"},next:{title:"QB Spawn setting",permalink:"/docs/paid-scripts/jl-motel/installation/qbcore/qb-spawn"}},p={},s=[{value:"qb-inventory / lj-inventory",id:"qb-inventory--lj-inventory",level:3},{value:"ox inventory",id:"ox-inventory",level:3}],m={toc:s};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"qb-inventory--lj-inventory"},"qb-inventory / lj-inventory"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Go to your")," ",(0,i.kt)("inlineCode",{parentName:"p"},"qb-inventory/html/js/app.js")," ",(0,i.kt)("strong",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"lj-inventory/html/js/app.js")," ",(0,i.kt)("strong",{parentName:"p"},"and add this snippet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'else if (itemData.name == "motel_key") {\n      $(".item-info-title").html(\n        "<p>" + itemData.label + " " + itemData.info.room.label + "</p>"\n      );\n      $(".item-info-description").html(\n        "<p>" +\n          itemData.description +\n          "</p><p>" +\n          "Motel: " +\n          itemData.info.motel.label +\n          "</p><p>" +\n          "Room: " +\n          itemData.info.room.label +\n          "</p><p>" +\n          "Owner: " +\n          itemData.info.firstname +\n          " " +\n          itemData.info.lastname +\n          "</p>" +\n          "<p>" +\n          "CID: " +\n          itemData.info.owner +\n          "</p>"\n      );\n    }\n')),(0,i.kt)("p",null,"For example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'   else if (itemData.name == "weaponlicense") {\n      $(".item-info-title").html("<p>" + itemData.label + "</p>");\n      $(".item-info-description").html(\n        "<p><strong>First Name: </strong><span>" +\n          itemData.info.firstname +\n          "</span></p><p><strong>Last Name: </strong><span>" +\n          itemData.info.lastname +\n          "</span></p><p><strong>Birth Date: </strong><span>" +\n          itemData.info.birthdate +\n          "</span></p>"\n      );\n    }\n    // I PUT THE SNIPPET HERE\n  else if (itemData.name == "motel_key") {\n      $(".item-info-title").html(\n        "<p>" + itemData.label + " " + itemData.info.room.label + "</p>"\n      );\n      $(".item-info-description").html(\n        "<p>" +\n          itemData.description +\n          "</p><p>" +\n          "Motel: " +\n          itemData.info.motel.label +\n          "</p><p>" +\n          "Room: " +\n          itemData.info.room.label +\n          "</p><p>" +\n          "Owner: " +\n          itemData.info.firstname +\n          " " +\n          itemData.info.lastname +\n          "</p>" +\n          "<p>" +\n          "CID: " +\n          itemData.info.owner +\n          "</p>"\n      );\n    }\n')),(0,i.kt)("h3",{id:"ox-inventory"},"ox inventory"))}c.isMDXComponent=!0}}]);