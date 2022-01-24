"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[9689],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6573:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Data Mesh",c={unversionedId:"data-mesh/overview",id:"data-mesh/overview",title:"Data Mesh",description:"How we got to Data Mesh",source:"@site/docs/data-mesh/overview.mdx",sourceDirName:"data-mesh",slug:"/data-mesh/overview",permalink:"/docs/data-mesh/overview",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-mesh/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Exercise: Delta Lake Walkthrough",permalink:"/docs/making-big-data-work/exercise-delta-lake"},next:{title:"The Tech Behind Data Mesh",permalink:"/docs/data-mesh/data-mesh-tech"}},u=[{value:"How we got to Data Mesh",id:"how-we-got-to-data-mesh",children:[],level:2},{value:"The Theory",id:"the-theory",children:[],level:2}],h={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-mesh"},"Data Mesh"),(0,o.kt)("h2",{id:"how-we-got-to-data-mesh"},"How we got to Data Mesh"),(0,o.kt)("p",null,"TBD"),(0,o.kt)("p",null,"Read (optional): ",(0,o.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/insights/blog/curse-data-lake-monster"},"Curse of the data lake monster")),(0,o.kt)("h2",{id:"the-theory"},"The Theory"),(0,o.kt)("p",null,"Read: ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-monolith-to-mesh.html"},"The Original Data Mesh Article")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/data-mesh-principles.html"},"Newer Principles")),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,"An overview by Emily Gorcenski and Arif Wilder"),(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{src:"//fast.wistia.net/embed/iframe/7uegix6aqe",allowtransparency:"true",frameborder:"0",scrolling:"no",class:"wistia_embed",name:"wistia_embed",allowfullscreen:!0,mozallowfullscreen:!0,webkitallowfullscreen:!0,oallowfullscreen:!0,msallowfullscreen:!0,width:"620",height:"349"}))),(0,o.kt)("p",null,"Quite often, we get caught up about the tech implementation of a theory. The same follows for Data Mesh. Before we move on to talk about the technical concepts behind Data Mesh, we must stress that ",(0,o.kt)("a",{parentName:"p",href:"https://www.thoughtworks.com/en-in/insights/blog/data-mesh-its-not-about-tech-its-about-ownership-and-communication"},"it's not about tech, it's about ownership"),"`"),(0,o.kt)("p",null,"Want more? ",(0,o.kt)("a",{parentName:"p",href:"https://www.oreilly.com/library/view/data-mesh/9781492092384/"},"Read the book.")))}p.isMDXComponent=!0}}]);