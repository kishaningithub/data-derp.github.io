"use strict";(self.webpackChunkdata_derp=self.webpackChunkdata_derp||[]).push([[577],{3905:function(a,e,t){t.d(e,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function n(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function i(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){n(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function o(a,e){if(null==a)return{};var t,r,n=function(a,e){if(null==a)return{};var t,r,n={},i=Object.keys(a);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(n[t]=a[t]);return n}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(n[t]=a[t])}return n}var l=r.createContext({}),d=function(a){var e=r.useContext(l),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},c=function(a){var e=d(a.components);return r.createElement(l.Provider,{value:e},a.children)},u={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(a,e){var t=a.components,n=a.mdxType,i=a.originalType,l=a.parentName,c=o(a,["components","mdxType","originalType","parentName"]),p=d(t),f=n,A=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return t?r.createElement(A,s(s({ref:e},c),{},{components:t})):r.createElement(A,s({ref:e},c))}));function f(a,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof a||n){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=a,o.mdxType="string"==typeof a?a:n,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1645:function(a,e,t){t.r(e),t.d(e,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return p}});var r=t(3117),n=t(102),i=(t(7294),t(3905)),s=["components"],o={sidebar_position:2},l="Paradigm Shifts",d={unversionedId:"making-big-data-work/paradigm-shifts",id:"making-big-data-work/paradigm-shifts",title:"Paradigm Shifts",description:"History of Big Data - Revisited",source:"@site/docs/making-big-data-work/paradigm-shifts.md",sourceDirName:"making-big-data-work",slug:"/making-big-data-work/paradigm-shifts",permalink:"/docs/making-big-data-work/paradigm-shifts",editUrl:"https://github.com/data-derp/data-derp.github.io/tree/master/docs/docs/making-big-data-work/paradigm-shifts.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/making-big-data-work/overview"},next:{title:"exercise-delta-lake",permalink:"/docs/making-big-data-work/exercise-delta-lake"}},c=[{value:"History of Big Data - Revisited",id:"history-of-big-data---revisited",children:[],level:2},{value:"Cloud Big Data Paradigms",id:"cloud-big-data-paradigms",children:[{value:"Cloud Data Warehouses",id:"cloud-data-warehouses",children:[],level:3},{value:"(Vanilla) Cloud Data Lakes",id:"vanilla-cloud-data-lakes",children:[],level:3},{value:"Can we get the best of both worlds?",id:"can-we-get-the-best-of-both-worlds",children:[],level:3}],level:2},{value:"Example Lakehouse Contenders",id:"example-lakehouse-contenders",children:[],level:2},{value:"Takeaways",id:"takeaways",children:[],level:2}],u={toc:c};function p(a){var e=a.components,o=(0,n.Z)(a,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"paradigm-shifts"},"Paradigm Shifts"),(0,i.kt)("h2",{id:"history-of-big-data---revisited"},"History of Big Data - Revisited"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Databases",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"single node servers, vertical scaling only"),(0,i.kt)("li",{parentName:"ul"},"mostly used for operational data, transactions"))),(0,i.kt)("li",{parentName:"ul"},"On-Prem Data Warehouses",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"horizontal scaling possible"),(0,i.kt)("li",{parentName:"ul"},"utilized massively parallel processing (MPP) to run big queries"),(0,i.kt)("li",{parentName:"ul"},"SQL-only interface, low interoperability"))),(0,i.kt)("li",{parentName:"ul"},"On-Prem Data Lakes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hadoop ecosystem"),(0,i.kt)("li",{parentName:"ul"},"Data Processing via MapReduce, Hive, Spark, etc."),(0,i.kt)("li",{parentName:"ul"},"Difficult for data governance and data integrity ")))),(0,i.kt)("h2",{id:"cloud-big-data-paradigms"},"Cloud Big Data Paradigms"),(0,i.kt)("h3",{id:"cloud-data-warehouses"},"Cloud Data Warehouses"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cloud-data-warehouses-amazon-redshift.png",src:t(1276).Z}),"\n",(0,i.kt)("img",{alt:"cloud-data-warehouses-azure-synapse-analytics.png",src:t(4834).Z}),"\n",(0,i.kt)("img",{alt:"cloud-data-warehouses-google-big-query.png",src:t(2677).Z}),"\n",(0,i.kt)("img",{alt:"cloud-data-warehouses-snowflake.png",src:t(4712).Z})),(0,i.kt)("p",null,"Pros:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decoupled storage and compute"),(0,i.kt)("li",{parentName:"ul"},"Excellent for BI, Reporting, Dashboarding")),(0,i.kt)("p",null,"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your data gets locked away in a proprietary data format"),(0,i.kt)("li",{parentName:"ul"},"SQL only, limited programmatic support (sometimes needed for ML/AI use-cases)"),(0,i.kt)("li",{parentName:"ul"},"Limited support for unstructured data (e.g. text, images, audio, video)")),(0,i.kt)("h3",{id:"vanilla-cloud-data-lakes"},"(Vanilla) Cloud Data Lakes"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cloud-data-lakes-aws-s3.png",src:t(7963).Z}),"\n",(0,i.kt)("img",{alt:"cloud-data-lakes-adls",src:t(8972).Z}),"\n",(0,i.kt)("img",{alt:"cloud-data-lakes-aws-emr.png",src:t(756).Z}),"\n",(0,i.kt)("img",{alt:"cloud-data-lakes-aws-glue.png",src:t(2813).Z})),(0,i.kt)("p",null,"Pros"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Decoupled storage, compute, and data"),(0,i.kt)("li",{parentName:"ul"},"Open, interoperable data formats (e.g. Parquet)"),(0,i.kt)("li",{parentName:"ul"},"Supports unstructured data"),(0,i.kt)("li",{parentName:"ul"},"Enables highly scalable ML/AI use-cases")),(0,i.kt)("p",null,"Cons"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can be susceptible to poor data quality/integrity"),(0,i.kt)("li",{parentName:"ul"},"Not as fast as a database/data warehouse for interactive needs (e.g. dashboards with several drilldowns/complex queries)")),(0,i.kt)("h3",{id:"can-we-get-the-best-of-both-worlds"},"Can we get the best of both worlds?"),(0,i.kt)("p",null,"Data Lakehouse\n",(0,i.kt)("img",{alt:"lakehouse-paradigm.png",src:t(229).Z}),"\nSource: ",(0,i.kt)("a",{parentName:"p",href:"https://databricks.com/blog/2020/01/30/what-is-a-data-lakehouse.html"},"Databricks")),(0,i.kt)("h2",{id:"example-lakehouse-contenders"},"Example Lakehouse Contenders"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delta-lakehouse.png",src:t(561).Z}),"\n",(0,i.kt)("img",{alt:"databricks-lakehouse.png",src:t(9043).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Cloud Providers"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://aws.amazon.com/big-data/datalakes-and-analytics/data-lake-house/"},"AWS"),": Glue Ecosystem, Athena, Lake Formation, etc.\n",(0,i.kt)("a",{parentName:"p",href:"https://techcommunity.microsoft.com/t5/analytics-on-azure/simplify-your-lakehouse-architecture-with-azure-databricks-delta/ba-p/2027272"},"Azure"),": Azure Databricks, Azure Synapse Ecosystem, etc."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Databricks"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.databricks.com/runtime/photon.html"},"Photon engine"),": shifting Spark from the JVM to C++\n",(0,i.kt)("a",{parentName:"p",href:"https://databricks.com/product/databricks-sql"},"Databricks SQL"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Takes advantage of Delta Lake for data integrity"),(0,i.kt)("li",{parentName:"ul"},"Photon for fast, interactive queries")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Dremio")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Utilizes Apache Arrow (the very same underlying technology in Vectorized UDFs (aka Pandas UDFs)! for scalable data transfer and serialization"),(0,i.kt)("li",{parentName:"ul"},"Informally, think of it as next-gen Presto/Athena")),(0,i.kt)("h2",{id:"takeaways"},"Takeaways"),(0,i.kt)("p",null,"Big Data Technology is rapidly maturing to support the needs of Data Mesh"))}p.isMDXComponent=!0},8972:function(a,e){e.Z="data:image/png;base64,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"},756:function(a,e){e.Z="data:image/png;base64,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"},2813:function(a,e,t){e.Z=t.p+"assets/images/cloud-data-lakes-aws-glue-9f76d14b3f8f276bb99aa02a58e2aa26.png"},7963:function(a,e,t){e.Z=t.p+"assets/images/cloud-data-lakes-aws-s3-f8d4d9daca0bb4696fd181bbab044fb4.png"},1276:function(a,e,t){e.Z=t.p+"assets/images/cloud-data-warehouses-amazon-redshift-c2f3e3ac45bcf6f411297cd79976d696.png"},4834:function(a,e,t){e.Z=t.p+"assets/images/cloud-data-warehouses-azure-synapse-analytics-87db76ccc53f3f5cf85167c9d58bc8bd.png"},2677:function(a,e,t){e.Z=t.p+"assets/images/cloud-data-warehouses-google-big-query-159b22a20f578dfcaaa2e2e949311147.png"},4712:function(a,e,t){e.Z=t.p+"assets/images/cloud-data-warehouses-snowflake-35cc2c0edd57936cd5ca4799388ee54f.png"},9043:function(a,e,t){e.Z=t.p+"assets/images/databricks-lakehouse-c5c39b256c1ebfde5dcfdac185f0deae.png"},561:function(a,e,t){e.Z=t.p+"assets/images/delta-lakehouse-4bbacbfc0c83f7951c26f563a69f57fa.png"},229:function(a,e,t){e.Z=t.p+"assets/images/lakehouse-paradigm-7e8279c23ee4a57ad6c6b4b18d879a52.png"}}]);