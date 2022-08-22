"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[177],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(h,i(i({ref:t},l),{},{components:n})):r.createElement(h,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9398:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:14},c="Cloud Offerings",u={unversionedId:"beyond-the-batch/cloud-offerings",id:"beyond-the-batch/cloud-offerings",title:"Cloud Offerings",description:"While Kafka can be run on-prem, it can be highly recommended to use cloud offerings for both distributed logs or Kafka itself. There are two very popular offerings, depending on which cloud provider that you're on is Amazon Kinesis and Azure Event Hubs. While they functionally do the same things, Kinesis is an alternative to Kafka: it's not interoperable but uses the same concepts that Kafka has but with slightly different namings. For example, partitioning in Kafka is called sharding on Kinesis. Amazon has very recently come up with Amazon MSK (managed streaming for Apache Kafka). At the time of writing, with AWS customers, Kinesis is still much more popular service so far.",source:"@site/docs/beyond-the-batch/cloud-offerings.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/cloud-offerings",permalink:"/docs/beyond-the-batch/cloud-offerings",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/beyond-the-batch/cloud-offerings.mdx",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Quiz: Apache Kafka",permalink:"/docs/beyond-the-batch/apache-kafka-quiz"},next:{title:"Cloud Offerings: AWS",permalink:"/docs/beyond-the-batch/cloud-offerings-aws"}},l=[],f={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cloud-offerings"},"Cloud Offerings"),(0,a.kt)("p",null,"While Kafka can be run on-prem, it can be highly recommended to use cloud offerings for both distributed logs or Kafka itself. There are two very popular offerings, depending on which cloud provider that you're on is ",(0,a.kt)("strong",{parentName:"p"},"Amazon Kinesis")," and ",(0,a.kt)("strong",{parentName:"p"},"Azure Event Hubs"),". While they functionally do the same things, ",(0,a.kt)("strong",{parentName:"p"},"Kinesis")," is an alternative to Kafka: it's not interoperable but uses the same concepts that Kafka has but with slightly different namings. For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"partitioning")," in Kafka is called ",(0,a.kt)("inlineCode",{parentName:"p"},"sharding")," on Kinesis. Amazon has very recently come up with ",(0,a.kt)("strong",{parentName:"p"},"Amazon MSK")," (managed streaming for Apache Kafka). At the time of writing, with AWS customers, Kinesis is still much more popular service so far."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Azure Event Hubs"),", like Kinesis, it has all the same bells and whistles. It scales automatically, which you might struggle with if you\u2019re deploying your own Kafka cluster (one key reason to go for a cloud offering) on-prem. Unlike Kinesis, the resources that you create are actually fully compatible with Kafka\u2019s APIs. If you have a streaming framework or application that you need to send messages to some kind of messaging bus, you can use the Kafka SDKs to send those messages. For example, if you\u2019re using Spark Streaming or Apache Flink to write these applications, you can pretend that you\u2019re writing your data out or reading your data from Kafka endpoints, unlike Kinesis. With Kinesis, you rely on the Streaming Framework to have a connector to Kinesis, but with Event Hub, anything that has a connector to Kafka will work."),(0,a.kt)("p",null,"In the next sections, we'll cover Cloud Offerings from both AWS and Azure."))}p.isMDXComponent=!0}}]);