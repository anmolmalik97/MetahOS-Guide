"use strict";(self.webpackChunkmetahos_guide=self.webpackChunkmetahos_guide||[]).push([[7482],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5683:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:1},l="Reports",s={unversionedId:"analytics/reports",id:"analytics/reports",title:"Reports",description:"Date/Doctor-wise Patient List",source:"@site/docs/analytics/reports.md",sourceDirName:"analytics",slug:"/analytics/reports",permalink:"/docs/analytics/reports",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/analytics/reports.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create A New Screening",permalink:"/docs/camps/create-a-new-screening"},next:{title:"How to add a Package?",permalink:"/docs/facility/add-a-package"}},p=[{value:"Date/Doctor-wise Patient List",id:"datedoctor-wise-patient-list",children:[],level:2},{value:"Referred Patients.",id:"referred-patients",children:[],level:2},{value:"TAT",id:"tat",children:[],level:2},{value:"Procedure Count",id:"procedure-count",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reports"},"Reports"),(0,o.kt)("h2",{id:"datedoctor-wise-patient-list"},"Date/Doctor-wise Patient List"),(0,o.kt)("p",null,"Date/Doctor-wise patients can be downloaded from the resepective worklist (OP/IP/ER/OPB)"),(0,o.kt)("p",null,"Eg - How to download date/doctor-wise patients from OP worklist"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642253553/Guide/Screen_Recording_2022-01-15_at_6.20.56_PM_1_lolky4.gif",alt:"op-download"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    Similary, patient-list can be downloaded from other worklists as well.\n")),(0,o.kt)("h2",{id:"referred-patients"},"Referred Patients."),(0,o.kt)("p",null,"List of referred patients is available within Referral module"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642252254/Guide/Screenshot_2022-01-15_at_6.07.06_PM_ycrqec.jpg",alt:"referred-patient"})),(0,o.kt)("h2",{id:"tat"},"TAT"),(0,o.kt)("p",null,"TAT (Turn-Around-Time) is available in multiple dashboards like worklist,operations,IP etc."),(0,o.kt)("p",null,"Eg - TAT in Worklist Dashboard"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642252252/Guide/Screenshot_2022-01-15_at_6.06.09_PM_xfn8h8.jpg",alt:"tat"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Similarly, TAT metrics can accessed in other dashboards as well\n")),(0,o.kt)("h2",{id:"procedure-count"},"Procedure Count"),(0,o.kt)("p",null,"Procedure count is easily accessible from Procedure Dashboard"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642252253/Guide/Screenshot_2022-01-15_at_6.11.03_PM_vo3epq.jpg",alt:"procedure-count"})))}d.isMDXComponent=!0}}]);