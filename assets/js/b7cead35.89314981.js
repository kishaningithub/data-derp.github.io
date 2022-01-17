"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[5818],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),f=r,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return a?n.createElement(d,o(o({ref:t},u),{},{components:a})):n.createElement(d,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7433:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(3117),r=a(102),i=(a(7294),a(3905)),o=["components"],l={sidebar_position:6},s="Spark Workflow and Partitioning",p={unversionedId:"data-transformation/spark-workflow-and-partitioning",id:"data-transformation/spark-workflow-and-partitioning",title:"Spark Workflow and Partitioning",description:"Optimisation",source:"@site/docs/data-transformation/spark-workflow-and-partitioning.md",sourceDirName:"data-transformation",slug:"/data-transformation/spark-workflow-and-partitioning",permalink:"/docs/data-transformation/spark-workflow-and-partitioning",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-transformation/spark-workflow-and-partitioning.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Apache Spark",permalink:"/docs/data-transformation/apache-spark"},next:{title:"Spark on Kubernetes",permalink:"/docs/data-transformation/spark-on-kubernetes"}},u=[{value:"Optimisation",id:"optimisation",children:[],level:2},{value:"Partitioning",id:"partitioning",children:[],level:2},{value:"Partitioning FAQs",id:"partitioning-faqs",children:[],level:2},{value:"Shuffling",id:"shuffling",children:[],level:2},{value:"Resources",id:"resources",children:[],level:2}],m={toc:u};function c(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spark-workflow-and-partitioning"},"Spark Workflow and Partitioning"),(0,i.kt)("h2",{id:"optimisation"},"Optimisation"),(0,i.kt)("p",null,"Okay...I know how to wrangle/transform my data...but how do I actually optimize my job\u2019s performance?\nGolden Rule: In the real world, make sure your dataset/table is partitioned well"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lots of small files are the enemy!",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Having lots of tiny files will result in S3 needing to do lots of ",(0,i.kt)("strong",{parentName:"li"},"file listing")," operations. These are extremely slow and can even be expensive"),(0,i.kt)("li",{parentName:"ul"},"Lots of small files means lots of data shuffling through the network. ",(0,i.kt)("strong",{parentName:"li"},"This is slow!")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"HUGE")," files are also bad",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Having too few files (all being huge) means you probably won\u2019t take advantage of all of the cores in your cluster. In other words, the data can\u2019t be easily distributed around the cluster"),(0,i.kt)("li",{parentName:"ul"},"Each node in your cluster might even have to try and break down each of these huge files in order to redistribute some data to other nodes. This is a waste of time and money (",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=982wFqC03v8&ab_channel=pyromaniack"},"must-watch"),")"))),(0,i.kt)("li",{parentName:"ul"},"So what\u2019s a suitable strategy?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"There\u2019s no \u2018best\u2019 number. Try to target each .snappy.parquet file to be somewhere ",(0,i.kt)("strong",{parentName:"li"},"roughly between 256MB to 1GB")),(0,i.kt)("li",{parentName:"ul"},"More importantly, make sure that you\u2019re partitioning on columns that you frequently ",(0,i.kt)("strong",{parentName:"li"},"filter")," or do ",(0,i.kt)("strong",{parentName:"li"},"groupBy")," on"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"DO NOT")," partition on columns with high cardinality (e.g. a userId, which has millions of distinct values)\nthis will result in lots of ",(0,i.kt)("strong",{parentName:"li"},"small files and lots of file listing operations"))))),(0,i.kt)("h2",{id:"partitioning"},"Partitioning"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"partitioning.png",src:a(6718).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Partitioning strategy is the most important decision we have to get right!")),(0,i.kt)("p",null,"If your partitioning strategy is decent, you\u2019ll most likely be fine and won\u2019t need to tweak other knobs.\nEspecially going forward in the future with Spark 3.0\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://databricks.com/blog/2020/05/29/adaptive-query-execution-speeding-up-spark-sql-at-runtime.html"},"Adaptive Query Execution (AQE)"),", a lot of optimizations will be automated for you!"),(0,i.kt)("p",null,"So how does a partitioned table look?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It would actually look like a bunch of hierarchical folders"),(0,i.kt)("li",{parentName:"ul"},"The partitioning values become their own folder (e.g. year=2018)"),(0,i.kt)("li",{parentName:"ul"},"The underlying data will be at the bottom of the hierarchy and will"),(0,i.kt)("li",{parentName:"ul"},"often have a .snappy.parquet file extension (if using Spark)")),(0,i.kt)("p",null,"Can you give me an example?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Partitioning the table based on some notion of time is a popular option\n(check if that makes sense for your project first though!)"),(0,i.kt)("li",{parentName:"ul"},"e.g. assuming each day of data for the table is of the order of 128MB - 1GB, then\nyour partitioning keys can be (\u201cyear\u201d, \u201cmonth\u201d, \u201cday\u201d)"),(0,i.kt)("li",{parentName:"ul"},"You don\u2019t need to explicitly define all the values, Spark will smartly\ncreate a new partition for each distinct combination of your partitioning values")),(0,i.kt)("h2",{id:"partitioning-faqs"},"Partitioning FAQs"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"partitioning.png",src:a(6718).Z})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Question: So...is a parquet file a file or a folder of files?\nShort Answer: either!")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With a single-node library like Pandas, you can write a single .snappy.parquet file if you want"),(0,i.kt)("li",{parentName:"ul"},"However, in the real-world they are often folders of partitions",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"This way you can read/write an entire table with just one path (the root of the table)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. s3://my-bucket/my-table/ or s3://my-bucket/my-table.parquet/ (both of these styles are still folders)"),(0,i.kt)("li",{parentName:"ul"},"Underneath all of the partitioning folders, you will find your .snappy.parquet files"))),(0,i.kt)("li",{parentName:"ul"},"The query engine (e.g. Spark or Presto) will then take care of understanding the partitioning structure of the table and will optimize your queries around that"),(0,i.kt)("li",{parentName:"ul"},"Spark will always write the output of a DataFrame as a folder at the root level rather than a single file (because it\u2019s designed for distributed/concurrent reading/writing of data, which often involves multiple files)")))),(0,i.kt)("h2",{id:"shuffling"},"Shuffling"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"shuffling.png",src:a(2386).Z})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.rockthejvm.com/spark-dags/"},"Spark DAGs and planning")," (optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Just know that bad partitioning \u2192 shuffling \u2192 pain (must-watch)"),(0,i.kt)("li",{parentName:"ul"},"You can check how \u2018shuffly\u2019 your Spark job looks by viewing the DAG"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mungingdata.com/apache-spark/partitionby/"},"Managing Partitioning"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Important: understand that repartition() and DataFrame.write.partitionBy() are ",(0,i.kt)("strong",{parentName:"li"},"not")," the same thing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Repartition can take in 2 different types of arguments:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"a number: controls the number of .snappy.parquet files"),(0,i.kt)("li",{parentName:"ul"},"a bunch of column names: it will ensure 1 .snappy.parquet file per each distinct combination of your provided columns"))),(0,i.kt)("li",{parentName:"ul"},"DataFrame.write.partitionBy defines the folder structure of the table ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"however, it does not guarantee how many .snappy.parquet files will be in each folder "))),(0,i.kt)("li",{parentName:"ul"},"Sometimes you might even need to do both e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"df.repartition(\u201cyear\u201d, \u201cmonth\u201d).write.partitionBy(\u201cyear\u201d, \u201dmonth\u201d)...")," in order to guarantee exactly 1 .snappy.parquet file per each month folder"))),(0,i.kt)("li",{parentName:"ul"},"Try to read up on the difference between repartition and coalesce ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Short Answer: ",(0,i.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/2.1.0/api/python/pyspark.sql.html#pyspark.sql.DataFrame.coalesce"},"The coalesce transformation applied to a DataFrame")," (not to be confused with ",(0,i.kt)("a",{parentName:"li",href:"https://spark.apache.org/docs/latest/api/python/reference/api/pyspark.sql.functions.coalesce.html"},"coalesce() applied to a column"),"), will try to merge partitions to reach your desired number. You only use coalesce when you want to reduce the number of partitions in your data."),(0,i.kt)("li",{parentName:"ul"},"On the other hand, repartition() will full shuffle all of the data around (more expensive)."),(0,i.kt)("li",{parentName:"ul"},"If you need to increase the number of partitions in your data, then you will need repartition()"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/data-derp/small-exercises/blob/master/databricks-repartition-vs-write-partition-by.dbc"},"Practice Repartitioning vs PartitionBy in DataBricks"))))}c.isMDXComponent=!0},6718:function(e,t,a){t.Z=a.p+"assets/images/partitioning-bc04764c0b68e766b95e45b0c5b541e8.png"},2386:function(e,t,a){t.Z=a.p+"assets/images/shuffling-c569c7dab20a17589788095db94cebd5.png"}}]);