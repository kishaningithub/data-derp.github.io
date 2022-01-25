"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[5118],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,l(l({ref:t},p),{},{components:a})):n.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7340:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1},s="Intro to Streaming",c={unversionedId:"beyond-the-batch/overview",id:"beyond-the-batch/overview",title:"Intro to Streaming",description:"Apache Kafka",source:"@site/docs/beyond-the-batch/overview.mdx",sourceDirName:"beyond-the-batch",slug:"/beyond-the-batch/overview",permalink:"/docs/beyond-the-batch/overview",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/beyond-the-batch/overview.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Exercise",permalink:"/docs/data-science-and-interpretability/exercise"},next:{title:"Exercise: Real World Structured Streaming",permalink:"/docs/beyond-the-batch/exercise"}},p=[{value:"Apache Kafka",id:"apache-kafka",children:[],level:2},{value:"Cloud Offerings",id:"cloud-offerings",children:[{value:"Amazon Kinesis",id:"amazon-kinesis",children:[],level:3},{value:"Amazon MSK",id:"amazon-msk",children:[],level:3},{value:"Azue Event Hubs",id:"azue-event-hubs",children:[],level:3}],level:2},{value:"Bigger Picture",id:"bigger-picture",children:[],level:2},{value:"Streaming Processing Concepts",id:"streaming-processing-concepts",children:[],level:2},{value:"Advanced Considerations",id:"advanced-considerations",children:[],level:2},{value:"Streaming Analytics Concepts",id:"streaming-analytics-concepts",children:[],level:2},{value:"Stateful Streaming in a Nutshell",id:"stateful-streaming-in-a-nutshell",children:[],level:2}],u={toc:p};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro-to-streaming"},"Intro to Streaming"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5HD6rGNX2nA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("h2",{id:"apache-kafka"},"Apache Kafka"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Kafka in 5 mins")),(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PzPXRmVHMxI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("p",null,"(",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=XFqm_ILuhs0&list=PLt1SIbA8guusxiHz9bveV-UHs_biWFegU&ab_channel=StephaneMaarek"},"from Stephane Maarek's playlist"),") deeper dive, definitely worth watching the rest of\nthis playlist after the Kafka 101 playlist below"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qu96DFXtbG4&list=PLa7VYi0yPIH0KbnJQcMv5N9iW8HkZHztH"},"Kafka 101 Playlist")," (",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=qu96DFXtbG4&list=PLa7VYi0yPIH0KbnJQcMv5N9iW8HkZHztH"},"first 5 videos")," in the playlist are mandatory)\nExcellent introduction to the motivation and philosophy of Apache Kafka\nIf you\u2019re not too bored, try to watch all of the videos on the playlist (at 1.25x or 1.5x speed)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Topics ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Events are ",(0,i.kt)("strong",{parentName:"li"},"organized"),' and durably stored in topics, similar to a folder in a filesystem,\nand the events are the files in that folder. An example topic name could be "payments"'))),(0,i.kt)("li",{parentName:"ul"},"Partitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"How do you allow topics to be consumed ",(0,i.kt)("strong",{parentName:"li"},"in parallel"),"?\n*Offsets"),(0,i.kt)("li",{parentName:"ul"},"Kafka retains records in the log in ",(0,i.kt)("strong",{parentName:"li"},"incremental fashion"),",\nmaking the consumers responsible for tracking the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kelseymok/kafka-example"},"https://github.com/kelseymok/kafka-example"),", known as the ",(0,i.kt)("strong",{parentName:"li"},"\u201coffset\u201d")))),(0,i.kt)("li",{parentName:"ul"},"Consumer Groups",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What happens if two consumers use the same Consumer Group Id?")))),(0,i.kt)("p",null,"[optional - do this after reading everything]"," Walkthrough of Kafka (",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/quickstart"},"official tutorial"),") (run in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kelseymok/kafka-example"},"this docker container"),")"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"apache-kafka.png",src:a(8917).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"topic-partitions.png",src:a(7362).Z}))),(0,i.kt)("h2",{id:"cloud-offerings"},"Cloud Offerings"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kafka-vs-standard-messaging.png",src:a(9093).Z}))),(0,i.kt)("h3",{id:"amazon-kinesis"},"Amazon Kinesis"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/07iZOEl0knc",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("p",null,"Explore the ",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/kinesis/"},"main service categories of Kinesis")),(0,i.kt)("p",null,"Kinesis is a managed alternative to Kafka for AWS, supporting most of the same features + autoscaling."),(0,i.kt)("h3",{id:"amazon-msk"},"Amazon MSK"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/msk/"},"Amazon Managed Streaming for Apache Kafka (Amazon MSK)")," has also been recently launched"),(0,i.kt)("h3",{id:"azue-event-hubs"},"Azue Event Hubs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/event-hubs/event-hubs-for-kafka-ecosystem-overview"},"Azure Event Hubs")),(0,i.kt)("p",null,"Like Kinesis, Event Hubs also has auto-scaling capabilities (auto-inflate)."),(0,i.kt)("p",null,"However, unlike Amazon Kinesis, Azure Event Hubs endpoints are fully-compatible with Kafka\u2019s Producer and Consumer APIs"),(0,i.kt)("h2",{id:"bigger-picture"},"Bigger Picture"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Should I use Kafka (pub/sub) or a standard message queue (e.g. RabbitMQ)?")),(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lwMjjTT1Q-Q",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("p",null,"Read: ",(0,i.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/rabbitmq-vs-kafka-1ef22a041793"},"Comprehensive comparison")," (",(0,i.kt)("a",{parentName:"p",href:"https://betterprogramming.pub/rabbitmq-vs-kafka-1ef22a041793"},"there's also a Part 2 to this article - scroll to the bottom"),")"),(0,i.kt)("h2",{id:"streaming-processing-concepts"},"Streaming Processing Concepts"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"two-problems-distributed-systems.png",src:a(5489).Z}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/"},"Delivery Semantics")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Exactly-Once",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(may not be available in all frameworks)"))),(0,i.kt)("li",{parentName:"ul"},"At-Most-Once"),(0,i.kt)("li",{parentName:"ul"},"At-Least-Once")),(0,i.kt)("p",null,"How would you decide which strategy to go with?"),(0,i.kt)("p",null,"Read: ",(0,i.kt)("a",{parentName:"p",href:"https://keen.io/blog/demystifying-apache-kafka-message-delivery-semantics-at-most-once-at-least-once-exactly-once/"},"Concrete Example")),(0,i.kt)("h2",{id:"advanced-considerations"},"Advanced Considerations"),(0,i.kt)("p",null,"Read: ",(0,i.kt)("a",{parentName:"p",href:"https://www.confluent.io/blog/how-choose-number-topics-partitions-kafka-cluster/"},"How many Partitions should I set per topic?")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Comparing Streaming Processing Frameworks")),(0,i.kt)("figure",{class:"video-container"},(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/PiEQR9AXgl4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))),(0,i.kt)("p",null,"For all intents and purposes, Apache Flink and Apache Spark are almost interchangeable in that comparison (vs Kafka Streams and Akka Streams). The only difference is that Flink can naturally run in Continuous Processing mode"),(0,i.kt)("h2",{id:"streaming-analytics-concepts"},"Streaming Analytics Concepts"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"windowed-grouped-aggregation.png",src:a(2027).Z}))),(0,i.kt)("p",null,"Read: ",(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/windows.html"},"Windows")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Tumbling Windows"),(0,i.kt)("li",{parentName:"ul"},"Sliding Windows"),(0,i.kt)("li",{parentName:"ul"},"Session Windows",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(may not be available in all frameworks)")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/structured-streaming-programming-guide.html#handling-late-data-and-watermarking"},"Handling Lateness & Watermarking")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/operators/#keyby"},"keyBy"),"\nSplitting the stream logically for your domain"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-stable/dev/stream/state/state.html#using-keyed-state"},"State")," (using Flink as an example)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keyed State vs Operator State"),(0,i.kt)("li",{parentName:"ul"},"Managed Data Structures for State",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"ValueState"),(0,i.kt)("li",{parentName:"ul"},"ListState"),(0,i.kt)("li",{parentName:"ul"},"MapState")))),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"checkpoints.png",src:a(3306).Z}))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.13/docs/dev/datastream/fault-tolerance/checkpointing/"},"Checkpointing")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Making sure we can recover from failures seamlessly"),(0,i.kt)("li",{parentName:"ul"},"Analogous to log based recovery for database systems")),(0,i.kt)("h2",{id:"stateful-streaming-in-a-nutshell"},"Stateful Streaming in a Nutshell"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"stateful-streaming-in-a-nutshell.png",src:a(4970).Z}))))}d.isMDXComponent=!0},8917:function(e,t,a){t.Z=a.p+"assets/images/apache-kafka-a525cbf952d1ff13db37ddb655fc9d79.png"},3306:function(e,t,a){t.Z=a.p+"assets/images/checkpoints-60fc9c0a3cc68be0cae859582f9c005a.png"},9093:function(e,t,a){t.Z=a.p+"assets/images/kafka-vs-standard-messaging-f6ed7a4dffbbbcdf20d85ed52fde7a11.png"},4970:function(e,t,a){t.Z=a.p+"assets/images/stateful-streaming-in-a-nutshell-4df8b807a01ac0db4ce4b07fd3550d9d.png"},7362:function(e,t,a){t.Z=a.p+"assets/images/topic-partitions-64c4fdcc305488a0c6b260b30632142b.png"},5489:function(e,t,a){t.Z=a.p+"assets/images/two-problems-distributed-systems-55a21cde36eea3d3631fe60274df0071.png"},2027:function(e,t,a){t.Z=a.p+"assets/images/windowed-grouped-aggregation-3c443b92cbcdd27cf84fa8db241dc821.png"}}]);