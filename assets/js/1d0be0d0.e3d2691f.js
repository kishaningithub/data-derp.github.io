"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[1272],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var i=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=d(r),f=a,h=s["".concat(l,".").concat(f)]||s[f]||p[f]||o;return r?i.createElement(h,n(n({ref:t},u),{},{components:r})):i.createElement(h,n({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var d=2;d<o;d++)n[d]=r[d];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9702:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var i=r(3117),a=r(102),o=(r(7294),r(3905)),n=["components"],c={sidebar_position:2},l="Apache Kafka",d={unversionedId:"beyond-the-batch/apache-kafka",id:"beyond-the-batch/apache-kafka",title:"Apache Kafka",description:"Kafka in 5 Minutes",source:"@site/docs/beyond-the-batch/apache-kafka.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/apache-kafka",permalink:"/docs/beyond-the-batch/apache-kafka",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/beyond-the-batch/apache-kafka.mdx",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/beyond-the-batch/overview"},next:{title:"Apache Kafka vs. Queue",permalink:"/docs/beyond-the-batch/kafka-vs-queue"}},u=[{value:"Kafka in 5 Minutes",id:"kafka-in-5-minutes",children:[],level:2},{value:"Kafka Deep Dive",id:"kafka-deep-dive",children:[{value:"Overview",id:"overview",children:[],level:3},{value:"Topics",id:"topics",children:[],level:3},{value:"Demo: Topics",id:"demo-topics",children:[],level:3},{value:"Partitions",id:"partitions",children:[],level:3},{value:"Demo: Partitions",id:"demo-partitions",children:[],level:3},{value:"Put it together: Topics, Partitions, Offsets",id:"put-it-together-topics-partitions-offsets",children:[],level:3},{value:"Replication",id:"replication",children:[],level:3},{value:"The machines doing the work: Brokers",id:"the-machines-doing-the-work-brokers",children:[],level:3},{value:"Getting data into Kafka: Producers",id:"getting-data-into-kafka-producers",children:[],level:3},{value:"Getting data out of Kafka: Consumer Groups",id:"getting-data-out-of-kafka-consumer-groups",children:[],level:3}],level:2}],p={toc:u};function s(e){var t=e.components,c=(0,a.Z)(e,n);return(0,o.kt)("wrapper",(0,i.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apache-kafka"},"Apache Kafka"),(0,o.kt)("h2",{id:"kafka-in-5-minutes"},"Kafka in 5 Minutes"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PzPXRmVHMxI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h2",{id:"kafka-deep-dive"},"Kafka Deep Dive"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qu96DFXtbG4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"topics"},"Topics"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/kj9JH3ZdsBQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"demo-topics"},"Demo: Topics"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/oI7VAS9KSS4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"partitions"},"Partitions"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/y9BStKvVzSs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"demo-partitions"},"Demo: Partitions"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/GvdlpbQr6jo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"put-it-together-topics-partitions-offsets"},"Put it together: Topics, Partitions, Offsets"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/_q1IjK5jjyU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"apache-kafka.png",src:r(8917).Z}))),(0,o.kt)("h3",{id:"replication"},"Replication"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Vo6Mv5YPOJU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"the-machines-doing-the-work-brokers"},"The machines doing the work: Brokers"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/jHnyBSUVcOU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"getting-data-into-kafka-producers"},"Getting data into Kafka: Producers"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lh_tjm0yPz4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,o.kt)("h3",{id:"getting-data-out-of-kafka-consumer-groups"},"Getting data out of Kafka: Consumer Groups"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("figure",{class:"video-container"},(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lAdG16KaHLs",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"topic-partitions.png",src:r(7362).Z}))))}s.isMDXComponent=!0},8917:function(e,t,r){t.Z=r.p+"assets/images/apache-kafka-a525cbf952d1ff13db37ddb655fc9d79.png"},7362:function(e,t,r){t.Z=r.p+"assets/images/topic-partitions-64c4fdcc305488a0c6b260b30632142b.png"}}]);