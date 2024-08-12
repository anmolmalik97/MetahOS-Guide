"use strict";(self.webpackChunkmetahos_guide=self.webpackChunkmetahos_guide||[]).push([[1613],{3905:function(e,a,t){t.d(a,{Zo:function(){return d},kt:function(){return p}});var i=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,n=function(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),c=function(e){var a=i.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return i.createElement(o.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(t),p=n,m=h["".concat(o,".").concat(p)]||h[p]||u[p]||r;return t?i.createElement(m,l(l({ref:a},d),{},{components:t})):i.createElement(m,l({ref:a},d))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,l=new Array(r);l[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=t[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7573:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var i=t(7462),n=t(3366),r=(t(7294),t(3905)),l=["components"],s={sidebar_position:11},o="Integration with MetahOS",c={unversionedId:"integration-with-metahos",id:"version-1.0.23/integration-with-metahos",title:"Integration with MetahOS",description:"This document outlines how MetahOS works with other systems when it comes to providing a single seamless delivery.",source:"@site/versioned_docs/version-1.0.23/integration-with-metahos.md",sourceDirName:".",slug:"/integration-with-metahos",permalink:"/docs/1.0.23/integration-with-metahos",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.23/integration-with-metahos.md",tags:[],version:"1.0.23",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"How to add a Vendor?",permalink:"/docs/1.0.23/facility/add-a-vendor"},next:{title:"PRM",permalink:"/docs/1.0.23/prm"}},d=[{value:"MetahOS Middleware",id:"metahos-middleware",children:[],level:2},{value:"Data Types",id:"data-types",children:[{value:"Clinical Data",id:"clinical-data",children:[{value:"Electronic health records",id:"electronic-health-records",children:[],level:4},{value:"Administrative data",id:"administrative-data",children:[],level:4},{value:"Claims data",id:"claims-data",children:[{value:"Basic Stand Alone (BSA) Medicare Claims Public Use Files (PUFs)",id:"basic-stand-alone-bsa-medicare-claims-public-use-files-pufs",children:[],level:5},{value:"Medicare Provider Utilization and Payment Data",id:"medicare-provider-utilization-and-payment-data",children:[],level:5},{value:"Medicaid Data Sources",id:"medicaid-data-sources",children:[],level:5},{value:"Medicaid Statistical Information System",id:"medicaid-statistical-information-system",children:[],level:5}],level:4},{value:"Patient / Disease registries",id:"patient--disease-registries",children:[],level:4},{value:"Health surveys",id:"health-surveys",children:[{value:"Medicare Current Beneficiary Survey",id:"medicare-current-beneficiary-survey",children:[],level:5},{value:"National Health &amp; Nutrition Examination Survey (NHANES)",id:"national-health--nutrition-examination-survey-nhanes",children:[],level:5},{value:"National Medical Expenditure Survey",id:"national-medical-expenditure-survey",children:[],level:5},{value:"National Center for Health Statistics",id:"national-center-for-health-statistics",children:[],level:5},{value:"CMS Data Navigator",id:"cms-data-navigator",children:[],level:5},{value:"National Health and Aging Trends Study (NHATS)",id:"national-health-and-aging-trends-study-nhats",children:[],level:5}],level:4},{value:"Clinical trials data",id:"clinical-trials-data",children:[{value:"ClinicalTrials.gov",id:"clinicaltrialsgov",children:[],level:5},{value:"Cochrane Library",id:"cochrane-library",children:[],level:5},{value:"WHO International Clinical Trials Registry Platform (ICTRP)",id:"who-international-clinical-trials-registry-platform-ictrp",children:[],level:5},{value:"European Union Clinical Trials Database",id:"european-union-clinical-trials-database",children:[],level:5},{value:"CenterWatch",id:"centerwatch",children:[],level:5},{value:"OpenTrials (beta)",id:"opentrials-beta",children:[],level:5}],level:4},{value:"Clinical Research Datasets",id:"clinical-research-datasets",children:[{value:"Biologic Specimen and Data Repository Information Coordinating Center (NHLBI)",id:"biologic-specimen-and-data-repository-information-coordinating-center-nhlbi",children:[],level:5},{value:"Biomedical Translational Research Information System (BTRIS)",id:"biomedical-translational-research-information-system-btris",children:[],level:5},{value:"Clinical Data Study Request",id:"clinical-data-study-request",children:[],level:5},{value:"NIMH Clinical Trials - Limited Access Datasets",id:"nimh-clinical-trials---limited-access-datasets",children:[],level:5},{value:"YODA (Yale Open Data Access)",id:"yoda-yale-open-data-access",children:[],level:5}],level:4}],level:3}],level:2}],u={toc:d};function h(e){var a=e.components,t=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integration-with-metahos"},"Integration with MetahOS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This document outlines how MetahOS works with other systems when it comes to providing a single seamless delivery.")),(0,r.kt)("h2",{id:"metahos-middleware"},"MetahOS Middleware"),(0,r.kt)("p",null,"Built-in Node.js and supported by Python and a stream of databases both SQL and NoSQL MetahOS Middleware / Integration Engine has the ability to connect disparate source & destination systems and transform data in real-time as well as for bulk back load using ETL or ELT depending on the scenario."),(0,r.kt)("p",null,"The built-in connectors can understand and transform Data Formats and Data Transport Mechanisms as well."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"HL7 2.X over TCP/IP"),(0,r.kt)("li",{parentName:"ol"},"FHIR over API"),(0,r.kt)("li",{parentName:"ol"},"CSV, TSV, PSV"),(0,r.kt)("li",{parentName:"ol"},"Custom API"),(0,r.kt)("li",{parentName:"ol"},"SFTP"),(0,r.kt)("li",{parentName:"ol"},"CCD, CCD-A"),(0,r.kt)("li",{parentName:"ol"},"X12"),(0,r.kt)("li",{parentName:"ol"},"Discrete data"),(0,r.kt)("li",{parentName:"ol"},"Diagnostic images and labs"),(0,r.kt)("li",{parentName:"ol"},"Patient/Device generated data")),(0,r.kt)("p",null,"For Example the following illustrations show various scenarios executed by MetahOS Middleware.\u200b\u200b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642252199/Guide/Integration/MetahOS_for_Hospitals_Pitch_Deck_f4hrpm.png",alt:"enter image description here"})),(0,r.kt)("p",null,"MetahOS Middleware has the ability to connect the Data Lake to various systems and not limited to a specific hospital. MetahOS Middleware can connect and acquire data from HIS, EMRs, HIEs and other systems,"),(0,r.kt)("h2",{id:"data-types"},"Data Types"),(0,r.kt)("h3",{id:"clinical-data"},"Clinical Data"),(0,r.kt)("p",null,"Clinical data falls into six major types:"),(0,r.kt)("h4",{id:"electronic-health-records"},"Electronic health records"),(0,r.kt)("p",null,"Electronic clinical data which is obtained at the point of care at a medical facility, hospital, clinic or practice. Often referred to as the electronic medical record (EMR), the EMR is generally not available to outside researchers. The data collected includes administrative and demographic information, diagnosis, treatment, prescription drugs, laboratory tests, physiologic monitoring data, hospitalization, patient insurance, etc."),(0,r.kt)("h4",{id:"administrative-data"},"Administrative data"),(0,r.kt)("p",null,"Often associated with electronic health records, these are primarily hospital discharge data"),(0,r.kt)("h4",{id:"claims-data"},"Claims data"),(0,r.kt)("p",null,"Claims data describe the billable interactions (insurance claims) between insured patients and the healthcare delivery system. Claims data falls into four general categories: inpatient, outpatient, pharmacy, and enrollment. The sources of claims data can be obtained from the government (e.g., Medicare) and/or commercial health firms (e.g., United HealthCare)."),(0,r.kt)("h5",{id:"basic-stand-alone-bsa-medicare-claims-public-use-files-pufs"},"Basic Stand Alone (BSA) Medicare Claims Public Use Files (PUFs)"),(0,r.kt)("p",null,"This is the Basic Stand Alone (BSA) Public Use Files (PUF) for Medicare claims. This is a claim-level file in which each record is a claim incurred by a 5% sample of Medicare beneficiaries. Claims include inpatient/outpatient care, prescription drugs, DME, SNF, hospice, etc. There are some demographic and claim-related variables provided in every PUF."),(0,r.kt)("h5",{id:"medicare-provider-utilization-and-payment-data"},"Medicare Provider Utilization and Payment Data"),(0,r.kt)("p",null,"Data that summarize utilization and payments for procedures, services, and prescription drugs provided to Medicare beneficiaries by specific inpatient and outpatient hospitals, physicians, and other suppliers."),(0,r.kt)("h5",{id:"medicaid-data-sources"},"Medicaid Data Sources"),(0,r.kt)("p",null,"The Medicaid Analytic eXtract data contains state-submitted data on Medicaid eligibility, service utilization and payments. The CMS-64 provides data on Medicaid and SCHIP Budget and Expenditure Systems."),(0,r.kt)("h5",{id:"medicaid-statistical-information-system"},"Medicaid Statistical Information System"),(0,r.kt)("p",null,"MSIS is the basic source of state-submitted eligibility and claims data on the Medicaid population, their characteristics, utilization, and payments and is available by clicking on the link on the left-side column."),(0,r.kt)("h4",{id:"patient--disease-registries"},"Patient / Disease registries"),(0,r.kt)("p",null,"Disease registries are clinical information systems that track a narrow range of key data for certain chronic conditions such as Alzheimer's Disease, cancer, diabetes, heart disease, and asthma. Registries often provide critical information for managing patient conditions."),(0,r.kt)("h4",{id:"health-surveys"},"Health surveys"),(0,r.kt)("p",null,"In order to provide an accurate evaluation of the population health, national surveys of the most common chronic conditions are generally conducted to provide prevalence estimates. National surveys are one of the few types of data collected specifically for research purposes, thus making it more widely accessible."),(0,r.kt)("h5",{id:"medicare-current-beneficiary-survey"},"Medicare Current Beneficiary Survey"),(0,r.kt)("p",null,"The Medicare Current Beneficiary Survey (MCBS) is a continuous, multipurpose survey of a nationally representative sample of the Medicare population. The central goals of MCBS are to determine expenditures and sources of payment for all services used by Medicare beneficiaries."),(0,r.kt)("h5",{id:"national-health--nutrition-examination-survey-nhanes"},"National Health & Nutrition Examination Survey (NHANES)"),(0,r.kt)("p",null,"The National Health and Nutrition Examination Survey (NHANES) is a program of studies designed to assess the health and nutritional status of adults and children in the United States. The survey is unique in that it combines interviews and physical examinations."),(0,r.kt)("h5",{id:"national-medical-expenditure-survey"},"National Medical Expenditure Survey"),(0,r.kt)("p",null,"The Medical Expenditure Panel Survey (MEPS) is a set of large-scale surveys of families and individuals, their medical providers, and employers across the United States. MEPS is the most complete source of data on the cost and use of health care and health insurance coverage."),(0,r.kt)("h5",{id:"national-center-for-health-statistics"},"National Center for Health Statistics"),(0,r.kt)("p",null,"A rich source of health data and statistics on a variety of topics."),(0,r.kt)("h5",{id:"cms-data-navigator"},"CMS Data Navigator"),(0,r.kt)("p",null,"Center for Medicare & Medicaid Services - Research, Statistics, Data & Systems"),(0,r.kt)("h5",{id:"national-health-and-aging-trends-study-nhats"},"National Health and Aging Trends Study (NHATS)"),(0,r.kt)("p",null,"NHATS is a study of Medicare beneficiaries age 65 years and older. The study is being conducted by the Johns Hopkins University Bloomberg School of Public Health, with data collection by Westat, and support from the National Institute on Aging. NHATS is intended to foster research that will guide efforts to reduce disability, maximize health and independent functioning, and enhance quality of life at older ages."),(0,r.kt)("h4",{id:"clinical-trials-data"},"Clinical trials data"),(0,r.kt)("h5",{id:"clinicaltrialsgov"},"ClinicalTrials.gov"),(0,r.kt)("p",null,"o Registry and results database hosted by the NIH."),(0,r.kt)("p",null,"o Information on publicly and privately supported clinical studies from around the world."),(0,r.kt)("h5",{id:"cochrane-library"},"Cochrane Library"),(0,r.kt)("p",null,"o Trials database, CENTRAL, is component of Cochrane Library"),(0,r.kt)("p",null,"o Reports of randomized and quasi-randomized clinical trials taken from Medline, Embase, and elsewhere."),(0,r.kt)("h5",{id:"who-international-clinical-trials-registry-platform-ictrp"},"WHO International Clinical Trials Registry Platform (ICTRP)"),(0,r.kt)("p",null,"o Clinical trial registration data from over 15 trial registries, including registries from the European Union, Africa, China, Japan, Brazil, and Australia."),(0,r.kt)("p",null,'o Use "standard search" to look for NCT or ISRCTN numbers cited in articles.'),(0,r.kt)("h5",{id:"european-union-clinical-trials-database"},"European Union Clinical Trials Database"),(0,r.kt)("p",null,"o Protocol and results information on interventional clinical trials conducted in the EU."),(0,r.kt)("p",null,"o Good source of pediatric drug development trials."),(0,r.kt)("h5",{id:"centerwatch"},"CenterWatch"),(0,r.kt)("p",null,"o Portal for actively recruiting pharmaceutical industry-sponsored clinical trials."),(0,r.kt)("h5",{id:"opentrials-beta"},"OpenTrials (beta)"),(0,r.kt)("p",null,"o Goal of this project is to locate, match, and share all publicly accessible data on all trials."),(0,r.kt)("p",null,"o Data sources to include trial registries, journal articles, and regulatory documents."),(0,r.kt)("p",null,"o Funded by Center for Open Science"),(0,r.kt)("h4",{id:"clinical-research-datasets"},"Clinical Research Datasets"),(0,r.kt)("p",null,"Clinical research data may be available through national or discipline-specific organizations. Level of access is likely restricted but available through proper channels."),(0,r.kt)("p",null,"Proprietary research data may also be available through individual agreements with private companies."),(0,r.kt)("h5",{id:"biologic-specimen-and-data-repository-information-coordinating-center-nhlbi"},"Biologic Specimen and Data Repository Information Coordinating Center (NHLBI)"),(0,r.kt)("p",null,"Listing of studies with resources available for searching and request via BioLINCC."),(0,r.kt)("h5",{id:"biomedical-translational-research-information-system-btris"},"Biomedical Translational Research Information System (BTRIS)"),(0,r.kt)("p",null,"Research data available to the NIH intramural community only."),(0,r.kt)("h5",{id:"clinical-data-study-request"},"Clinical Data Study Request"),(0,r.kt)("p",null,"Clinical trials data. Partners include Pharmaceutical companies."),(0,r.kt)("h5",{id:"nimh-clinical-trials---limited-access-datasets"},"NIMH Clinical Trials - Limited Access Datasets"),(0,r.kt)("p",null,"Requirements for access at the bottom of the page."),(0,r.kt)("h5",{id:"yoda-yale-open-data-access"},"YODA (Yale Open Data Access)"),(0,r.kt)("p",null,"Access to participant-level clinical research data and/or comprehensive reports of clinical research. Partners include Medtronic and Johnson & Johnson."))}h.isMDXComponent=!0}}]);