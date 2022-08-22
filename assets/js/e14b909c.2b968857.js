"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[4104],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6457:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:17},s="Streaming Processing Concepts",l={unversionedId:"beyond-the-batch/streaming-processing-concepts",id:"beyond-the-batch/streaming-processing-concepts",title:"Streaming Processing Concepts",description:"two-problems-distributed-systems.png",source:"@site/docs/beyond-the-batch/streaming-processing-concepts.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/streaming-processing-concepts",permalink:"/docs/beyond-the-batch/streaming-processing-concepts",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/beyond-the-batch/streaming-processing-concepts.mdx",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Cloud Offerings: Azure",permalink:"/docs/beyond-the-batch/cloud-offerings-azure"},next:{title:"Streaming Analytics Concepts",permalink:"/docs/beyond-the-batch/streaming-analytics-concepts"}},p=[{value:"Delivery Semantics",id:"delivery-semantics",children:[],level:2},{value:"How would you decide which strategy to go with?",id:"how-would-you-decide-which-strategy-to-go-with",children:[],level:2},{value:"Advanced Considerations",id:"advanced-considerations",children:[],level:2}],d={toc:p};function u(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming-processing-concepts"},"Streaming Processing Concepts"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("figure",{class:"video-container"},(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SiOEg4HtsBo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("img",{alt:"two-problems-distributed-systems.png",src:n(5489).Z}))),(0,a.kt)("h2",{id:"delivery-semantics"},"Delivery Semantics"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Exactly-Once",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(may not be available in all frameworks)"))),(0,a.kt)("li",{parentName:"ul"},"At-Most-Once"),(0,a.kt)("li",{parentName:"ul"},"At-Least-Once")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Read:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/"},"Exactly-Once Semantics Are Possible: Here\u2019s How Kafka Does It")),(0,a.kt)("h2",{id:"how-would-you-decide-which-strategy-to-go-with"},"How would you decide which strategy to go with?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Read:")," ",(0,a.kt)("a",{parentName:"p",href:"https://keen.io/blog/demystifying-apache-kafka-message-delivery-semantics-at-most-once-at-least-once-exactly-once/"},"Concrete Example")),(0,a.kt)("h2",{id:"advanced-considerations"},"Advanced Considerations"),(0,a.kt)("p",null,"Read: ",(0,a.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster/"},"How many Partitions should I set per topic?")),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Comparing Streaming Processing Frameworks")),(0,a.kt)("figure",{class:"video-container"},(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PiEQR9AXgl4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,a.kt)("p",null,"For all intents and purposes, Apache Flink and Apache Spark are almost interchangeable in that comparison (vs Kafka Streams and Akka Streams). The only difference is that Flink can naturally run in Continuous Processing mode"))}u.isMDXComponent=!0},5489:function(e,t,n){t.Z=n.p+"assets/images/two-problems-distributed-systems-55a21cde36eea3d3631fe60274df0071.png"}}]);