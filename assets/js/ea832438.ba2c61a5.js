"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[8018],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(k,i(i({ref:t},c),{},{components:r})):a.createElement(k,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6515:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:5},p="Apache Spark",s={unversionedId:"data-transformation/apache-spark",id:"data-transformation/apache-spark",title:"Apache Spark",description:"Introduction to Spark",source:"@site/docs/data-transformation/apache-spark.md",sourceDirName:"data-transformation",slug:"/data-transformation/apache-spark",permalink:"/docs/data-transformation/apache-spark",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-transformation/apache-spark.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"SQL: A Quick Review",permalink:"/docs/data-transformation/sql-quick-review"},next:{title:"Spark Workflow and Partitioning",permalink:"/docs/data-transformation/spark-workflow-and-partitioning"}},c=[{value:"Introduction to Spark",id:"introduction-to-spark",children:[],level:2},{value:"Reflect",id:"reflect",children:[],level:2},{value:"Useful Links",id:"useful-links",children:[],level:2},{value:"Spark Cluster Topology",id:"spark-cluster-topology",children:[],level:2}],u={toc:c};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"apache-spark"},"Apache Spark"),(0,o.kt)("h2",{id:"introduction-to-spark"},"Introduction to Spark"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=p4PkA2huzVc"},"Video from DataBricks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"First 3 minutes at least, can skim the rest"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://brookewenig.com/SparkOverview.html#/"},"slides")," from Brooke Wenig"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=Ud6luYCkkMk&ab_channel=DustinVannoy"},"Video")," from Dustin Vannoy")),(0,o.kt)("h2",{id:"reflect"},"Reflect"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Understand the difference between Transformations (lazy evaluation) and Actions"),(0,o.kt)("li",{parentName:"ul"},"Understand the difference between Driver and Worker nodes"),(0,o.kt)("li",{parentName:"ul"},"Aside: ",(0,o.kt)("a",{parentName:"li",href:"https://venturebeat.com/2021/02/01/databricks-raises-1-billion-funding-round-at-28-billion-valuation/"},"how 'hot' is Spark?"))),(0,o.kt)("h2",{id:"useful-links"},"Useful Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/3.1.1/sql-getting-started.html"},"Spark SQL Programming Guide (Python or Scala recommended)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/3.1.1/api/python/reference/pyspark.sql.html#dataframe-apis"},"DataFrame Methods")," - e.g. df.someMethod()"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/3.1.1/api/python/reference/pyspark.sql.html#column-apis"},"Column Methods"),' - e.g. F.col("myField").someMethod()'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/3.1.1/api/python/reference/pyspark.sql.html#data-types"},"The different Data Types in Spark!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/3.1.1/api/python/reference/pyspark.sql.html#functions"},"The Sacred Texts")," - pyspark.sql.functions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://spark.apache.org/docs/3.1.1/api/python/reference/pyspark.sql.html#window"},"Windows")," - you\u2019re going to want to read this carefully \ud83d\ude09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.udemy.com/course/pyspark-aws-master-big-data-with-pyspark-and-aws/"},"Campus PySpark & AWS + Spark Architectures")," (optional, when you have time)")),(0,o.kt)("h2",{id:"spark-cluster-topology"},"Spark Cluster Topology"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/cluster-overview.html"},"Overview"))),(0,o.kt)("p",null,"Working with a distributed system can be confusing to grasp. Here are the basic must-knows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Very important that you understand the difference between driver and worker nodes "),(0,o.kt)("li",{parentName:"ul"},"Variables and data in your driver program are not automatically accessible/editable in your worker nodes "),(0,o.kt)("li",{parentName:"ul"},"You\u2019ll either need to define those constants in your UDF (see Databricks exercises) or look at ",(0,o.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.2.0/rdd-programming-guide.html#broadcast-variables"},"broadcast/accumulator")," variables")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"spark-cluster-topology.png",src:r(9010).Z})))}d.isMDXComponent=!0},9010:function(e,t,r){t.Z=r.p+"assets/images/spark-cluster-topology-198b783a33dcf2bd29b4ae558f3fa287.png"}}]);