"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[5629],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(r),f=o,h=p["".concat(s,".").concat(f)]||p[f]||l[f]||i;return r?n.createElement(h,c(c({ref:t},d),{},{components:r})):n.createElement(h,c({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9170:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var n=r(3117),o=r(102),i=(r(7294),r(3905)),c=["components"],a={sidebar_position:3},s="Exercise: Production Code",u={unversionedId:"data-ingestion/exercise-production-code",id:"data-ingestion/exercise-production-code",title:"Exercise: Production Code",description:"Now that you've created the ingestion logic in Databricks, let's see what that logic looks like in production code (switch to the solutions branch). Follow the instructions here to see the entire project in action, including the CI/CD pipeline for the data ingestion section.",source:"@site/docs/data-ingestion/exercise-production-code.md",sourceDirName:"data-ingestion",slug:"/data-ingestion/exercise-production-code",permalink:"/docs/data-ingestion/exercise-production-code",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-ingestion/exercise-production-code.md",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Exercise: Core Logic",permalink:"/docs/data-ingestion/exercise-core-logic"},next:{title:"Exercise: Create Infrastructure in the Cloud",permalink:"/docs/data-ingestion/exercise-create-infrastructure-in-the-cloud"}},d=[{value:"Notes",id:"notes",children:[],level:2}],l={toc:d};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"exercise-production-code"},"Exercise: Production Code"),(0,i.kt)("p",null,"Now that you've created the ingestion logic in Databricks, let's see what that logic looks like in production code (switch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"solutions")," branch). Follow the instructions ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/data-derp/exercise-co2-vs-temperature-production-code#quickstart"},"here")," to see the entire project in action, including the CI/CD pipeline for the ",(0,i.kt)("strong",{parentName:"p"},"data ingestion")," section."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Switch to the ",(0,i.kt)("inlineCode",{parentName:"li"},"solutions")," branch."),(0,i.kt)("li",{parentName:"ul"},"The logic is identical to the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/data-derp/exercise-co2-vs-temperature-databricks#data-ingestion"},"previous Databricks exercise"))))}p.isMDXComponent=!0}}]);