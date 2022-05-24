"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[1374],{3905:function(e,t,o){o.d(t,{Zo:function(){return c},kt:function(){return p}});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(o),p=n,m=h["".concat(l,".").concat(p)]||h[p]||d[p]||r;return o?a.createElement(m,i(i({ref:t},c),{},{components:o})):a.createElement(m,i({ref:t},c))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},9405:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return h}});var a=o(3117),n=o(102),r=(o(7294),o(3905)),i=["components"],s={sidebar_position:9},l="Quiz",u={unversionedId:"data-transformation/quiz",id:"data-transformation/quiz",title:"Quiz",description:"Why might you generally want to transform data \u201cclose\u201d to its source?",source:"@site/docs/data-transformation/quiz.md",sourceDirName:"data-transformation",slug:"/data-transformation/quiz",permalink:"/docs/data-transformation/quiz",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/data-transformation/quiz.md",tags:[],version:"current",lastUpdatedBy:"Kelsey Mok",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Wrangling with Spark",permalink:"/docs/data-transformation/wrangling-with-spark"},next:{title:"Project Overview",permalink:"/docs/data-transformation/exercise-overview"}},c=[{value:"Why might you generally want to transform data \u201cclose\u201d to its source?",id:"why-might-you-generally-want-to-transform-data-close-to-its-source",children:[],level:2},{value:"When should you use ETL vs ELT, why?",id:"when-should-you-use-etl-vs-elt-why",children:[],level:2},{value:"What\u2019s the difference between a Join and a Union?",id:"whats-the-difference-between-a-join-and-a-union",children:[],level:2},{value:"What does a GROUP BY aggregation do?",id:"what-does-a-group-by-aggregation-do",children:[],level:2},{value:"What\u2019s one scenario where using Window functions are advantageous over GroupBy aggregations?",id:"whats-one-scenario-where-using-window-functions-are-advantageous-over-groupby-aggregations",children:[],level:2},{value:"Question: What kinds of operations often induce shuffling in your Spark job?",id:"question-what-kinds-of-operations-often-induce-shuffling-in-your-spark-job",children:[],level:2},{value:"What are some most powerful ways that you can optimise your Spark job?",id:"what-are-some-most-powerful-ways-that-you-can-optimise-your-spark-job",children:[],level:2},{value:"Joins are often important and inevitable...so how might you optimize a join to minimize shuffling?",id:"joins-are-often-important-and-inevitableso-how-might-you-optimize-a-join-to-minimize-shuffling",children:[],level:2},{value:"What\u2019s a good rule of thumb for partitioning?",id:"whats-a-good-rule-of-thumb-for-partitioning",children:[],level:2}],d={toc:c};function h(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quiz"},"Quiz"),(0,r.kt)("h2",{id:"why-might-you-generally-want-to-transform-data-close-to-its-source"},"Why might you generally want to transform data \u201cclose\u201d to its source?"),(0,r.kt)("p",null,"(e.g. if your huge dataset lies on AWS S3, why would you often/generally want to crunch it within your AWS tenant/account first rather than serving the raw data directly to consumers?)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Cost: transferring large amounts of data out of your cloud provider/data warehouse can often result in expensive egress fees \ud83d\ude24")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Performance:\nYour should deploy your Data Lake and Big Data Compute services on the same cloud provider(s) to minimize data transfer over networks and also to avoid those egress fees mentioned above!\nYou should leverage your Big Data Compute services\u2019 (e.g. Databricks, AWS Glue, AWS EMR, Azure Synapse Analytics) highly performant/scalable connectors to S3 (AWS) or ADLS Gen2 (Azure) to scan data efficiently")),(0,r.kt)("h2",{id:"when-should-you-use-etl-vs-elt-why"},"When should you use ETL vs ELT, why?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ETL is great for workloads that are reused by many consumers so it makes sense to shape the data consistently sooner rather than later ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ELT is great for consumers who need some flexibility. With respect to speed, ELT can sometimes be a bit slow and wasteful as you have to often re-process/re-transform the raw data all over again\nAt the end the day, it depends what makes the most sense for your use-case!")),(0,r.kt)("h2",{id:"whats-the-difference-between-a-join-and-a-union"},"What\u2019s the difference between a Join and a Union?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Hopefully the pictures/diagrams in ",(0,r.kt)("a",{parentName:"p",href:"https://www.essentialsql.com/what-is-the-difference-between-a-join-and-a-union/"},"this article")," provide a clear intuition.\nBoth operations are essential knowledge!")),(0,r.kt)("p",null,"Please avoid these classic mistakes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If you\u2019re using JOIN, make sure that you don\u2019t have duplicate column names on the two tables before joining (other than the joining keys themselves)"),(0,r.kt)("li",{parentName:"ol"},"If you\u2019re using UNION, make sure that the two tables/DataFrames have identical columns and column orderings")),(0,r.kt)("h2",{id:"what-does-a-group-by-aggregation-do"},"What does a GROUP BY aggregation do?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In standard SQL, it aggregates rows that share the same grouping key into a single summary row")),(0,r.kt)("h2",{id:"whats-one-scenario-where-using-window-functions-are-advantageous-over-groupby-aggregations"},"What\u2019s one scenario where using Window functions are advantageous over GroupBy aggregations?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://databricks.com/blog/2015/07/15/introducing-window-functions-in-spark-sql.html"},"this example")),(0,r.kt)("p",{parentName:"blockquote"},"Basically, Window functions allow you to maintain all of your original rows (without having to collapse/summarize them per group)"),(0,r.kt)("p",{parentName:"blockquote"},"Of course, there are times when you\u2019d want to aggregate instead of window as well, depends on the query/business question!")),(0,r.kt)("h2",{id:"question-what-kinds-of-operations-often-induce-shuffling-in-your-spark-job"},"Question: What kinds of operations often induce shuffling in your Spark job?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://databricks.com/glossary/what-are-transformations"},"\u201cWide Transformations/Dependencies\u201d")," such as joins, aggregations, window functions. Implication: they can really slow down your Spark job. ",(0,r.kt)("a",{parentName:"p",href:"https://databricks.com/glossary/what-are-transformations"},"Concise summary here."))),(0,r.kt)("h2",{id:"what-are-some-most-powerful-ways-that-you-can-optimise-your-spark-job"},"What are some most powerful ways that you can optimise your Spark job?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Partition your data smartly such that the most common filters and groupBys in your queries don\u2019t have to scan/shuffle all partitions unnecessarily")),(0,r.kt)("h2",{id:"joins-are-often-important-and-inevitableso-how-might-you-optimize-a-join-to-minimize-shuffling"},"Joins are often important and inevitable...so how might you optimize a join to minimize shuffling?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"via broadcast join (small join tables) OR partition your data such that data for the same join key isn\u2019t spread across too many different partitions")),(0,r.kt)("h2",{id:"whats-a-good-rule-of-thumb-for-partitioning"},"What\u2019s a good rule of thumb for partitioning?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Partition on columns that you would typically do a filter/groupBy "),(0,r.kt)("p",{parentName:"blockquote"},"A partition should ideally contain anywhere between 256MB - 2GB of data. Too many small partitions (each containing kilobytes means you have lots of small files - that\u2019s bad!)"),(0,r.kt)("p",{parentName:"blockquote"},"For the small file reason above, you generally shouldn\u2019t partition on high cardinality columns")))}h.isMDXComponent=!0}}]);