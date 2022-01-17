"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[2206],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9137:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:49},u="Exercise: Create Infrastructure in the Cloud",s={unversionedId:"data-transformation/exercise-create-infrastructure-in-the-cloud",id:"data-transformation/exercise-create-infrastructure-in-the-cloud",title:"Exercise: Create Infrastructure in the Cloud",description:"project-structure-transformation-navi.png",source:"@site/docs/data-transformation/exercise-create-infrastructure-in-the-cloud.md",sourceDirName:"data-transformation",slug:"/data-transformation/exercise-create-infrastructure-in-the-cloud",permalink:"/docs/data-transformation/exercise-create-infrastructure-in-the-cloud",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-transformation/exercise-create-infrastructure-in-the-cloud.md",tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49},sidebar:"tutorialSidebar",previous:{title:"Exercise: Production Code",permalink:"/docs/data-transformation/exercise-production-code"},next:{title:"Exercise: Infrastructure as Code",permalink:"/docs/data-transformation/exercise-infra-as-code"}},p=[],l={toc:p};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"exercise-create-infrastructure-in-the-cloud"},"Exercise: Create Infrastructure in the Cloud"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"project-structure-transformation-navi.png",src:r(5946).Z})),(0,o.kt)("p",null,"Now that we've created artifacts (",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"data_transformation-0.1-py3.egg"),") in our S3 bucket, our next step is to run that logic in AWS Glue. In this exercise, we'll learn how to create AWS Glue Jobs and Crawlers and how to view the resulting data in AWS Athena."),(0,o.kt)("p",null,"Follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/data-derp/exercise-co2-vs-temperature-infrastructure/blob/master/data-transformation.md"},"here")," to get started."))}d.isMDXComponent=!0},5946:function(e,t,r){t.Z=r.p+"assets/images/project-structure-transformation-navi-512097a29bbfe9833d1cb88c896163a0.png"}}]);