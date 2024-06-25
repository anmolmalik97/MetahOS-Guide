"use strict";(self.webpackChunkmetahos_guide=self.webpackChunkmetahos_guide||[]).push([[8195],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?i.createElement(h,s(s({ref:t},p),{},{components:n})):i.createElement(h,s({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1234:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var i=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],r={sidebar_position:2},l="Consultation Screen",c={unversionedId:"clinician/consultation-screen",id:"version-1.0/clinician/consultation-screen",title:"Consultation Screen",description:"There are mutiple view and options available for Clinicians and also the ability to configure the screen and widgets according to your preference.",source:"@site/versioned_docs/version-1.0/clinician/consultation-screen.md",sourceDirName:"clinician",slug:"/clinician/consultation-screen",permalink:"/docs/1.0/clinician/consultation-screen",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/clinician/consultation-screen.md",tags:[],version:"1.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Clinician Worklist",permalink:"/docs/1.0/clinician/consultant-worklist"},next:{title:"Macros & Care Plans",permalink:"/docs/1.0/clinician/macros-and-care-plans"}},p=[{value:"Consultation Screen with Care Protocols Enabled",id:"consultation-screen-with-care-protocols-enabled",children:[],level:2},{value:"Consultation Screen with Basic Notes without the Care Protocols",id:"consultation-screen-with-basic-notes-without-the-care-protocols",children:[],level:2},{value:"Header Widget",id:"header-widget",children:[],level:2},{value:"Updating Symptoms",id:"updating-symptoms",children:[],level:2},{value:"Adding Working Diagnosis",id:"adding-working-diagnosis",children:[],level:2},{value:"Action Buttons for Consultants/Clinicians",id:"action-buttons-for-consultantsclinicians",children:[],level:2},{value:"Prescribing Medications",id:"prescribing-medications",children:[],level:2},{value:"Lab/Radiology Investigations",id:"labradiology-investigations",children:[],level:2},{value:"Adding Procedures",id:"adding-procedures",children:[],level:2},{value:"Completing Consultation",id:"completing-consultation",children:[{value:"Admit Button",id:"admit-button",children:[],level:3},{value:"Order Button",id:"order-button",children:[],level:3},{value:"Print Prescription",id:"print-prescription",children:[],level:3},{value:"Send Digital Prescription",id:"send-digital-prescription",children:[],level:3},{value:"Complete Consultation",id:"complete-consultation",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"consultation-screen"},"Consultation Screen"),(0,a.kt)("p",null,"There are mutiple view and options available for Clinicians and also the ability to configure the screen and widgets according to your preference.\nThe Consultantion screen will load when the Clinician Click on ==Consult== Button on the worklist"),(0,a.kt)("h2",{id:"consultation-screen-with-care-protocols-enabled"},"Consultation Screen with Care Protocols Enabled"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131608/Guide/Consultation%20Screen/Consultation_Screen_oxrhr3.png",alt:"Consultation Screen in MetahOS"})),(0,a.kt)("p",null,"Let's take a look at the"),(0,a.kt)("h2",{id:"consultation-screen-with-basic-notes-without-the-care-protocols"},"Consultation Screen with Basic Notes without the Care Protocols"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642141731/Guide/Consultation%20Screen/Consultation_Screen_without_Care_Protocols_hdydom.png",alt:"Consultation Screen without Care Protocols"})),(0,a.kt)("p",null,"Let's go through the various sections on the screen\nOn the top the Patient Details, Referring Doctor, Symptoms, Working Diagnosis can be seen and added/modified"),(0,a.kt)("h2",{id:"header-widget"},"Header Widget"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131609/Guide/Consultation%20Screen/Pt_Details_Diagnosis_and_action_buttons_in_Consultation_Screen_ckxdll.png",alt:"Top Section"})),(0,a.kt)("h2",{id:"updating-symptoms"},"Updating Symptoms"),(0,a.kt)("p",null,"To update the symptoms of a patient click on symptoms and it will change to a text box, here you can key in the symptoms of the patient"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642134059/Guide/Consultation%20Screen/Updating-Symptoms_on_MetahOS_kahpsl.gif",alt:"Updating Symptoms"})),(0,a.kt)("h2",{id:"adding-working-diagnosis"},"Adding Working Diagnosis"),(0,a.kt)("p",null,"The Clinician can start keying in the diagnosis and MetahOS smart assistant will give you a dropdown list of International Classification of Diseases V10 (ICD10) and ICD-Oncology specific descriptions, The Providers can also key in any text and hit Return/Enter Key to save the diagnosis"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642133631/Guide/Consultation%20Screen/Entering-Diagnosis-in-MetahOS_rc29rs.gif",alt:"Entering Diagnosis with Assistant"})),(0,a.kt)("h2",{id:"action-buttons-for-consultantsclinicians"},"Action Buttons for Consultants/Clinicians"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131608/Guide/Consultation%20Screen/Action_Buttons_for_Clinicians_buzyy7.png",alt:"Doctor Action Buttons"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Voice Dictation")),"\nClicking this button will activate voice dictation mode, the consultant can start dictating the entire case notes, the platform will understand and process the data accordingly, for example when spoken to the platform ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Paracetamol 250 mg twice daily after meals"))," will load the meds into the medication section."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131607/Guide/Consultation%20Screen/Voice_Dictation_ce9x6z.png",alt:"Voice Dictation"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Lock/Unlock Screen Layout")),"\nClicking the Unlock/Lock Toggle button will let you redesign your entire UI (the consultation screen), you can move the widgets around, resize them according to your preference. Once you click the lock screen layout it will autosave the layout and this layout will be used for all your consultations."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131607/Guide/Consultation%20Screen/Screen_Layout_obwfvb.png",alt:"Lock Unlock Screen Layout"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Assessments")),"\nClicking on the Assessment button will bring up the Assessments window from which you can select the relevant assessment that you want to run on the patient. You can also view the responses for assessment here as well"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131607/Guide/Consultation%20Screen/Assessment_Button_xhnyzj.png",alt:"Assessments"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131608/Guide/Consultation%20Screen/Assessments_pzeons.png",alt:"enter image description here"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Macros")),"\nThe Macros are ready to use notes, medications, diagnostic tests templates that you had previously created or created for you. You can load multiple macros and a combination of them. The platform will prompt you if you want to Append / Replace existing meds that you have already keyed-in. To load a macro you have to trigger it."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131607/Guide/Consultation%20Screen/Macros_Button_fj4haf.png",alt:"Macros"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131608/Guide/Consultation%20Screen/Access_Macros_xg2w7u.png",alt:"enter image description here"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Care Plans")),"\nThe Care Plans button will load the available Care Plans that you had created or the ones that were created for you and your department.\nBased on the condition of the patient you can select the care, Care plans are essentially Macros but with UI, you can also have Care plans associated with Medications, Lab Tests etc. To load a Care Plan you have to trigger it, also you can have a care plan load by default based on your speciality for all the patients that you see."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131607/Guide/Consultation%20Screen/Care_Plans_Button_d30x2y.png",alt:"Care Plans"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131608/Guide/Consultation%20Screen/Access_Care_Plans_m8vctt.png",alt:"enter image description here"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Settings")),"\nThe settings button will load the settings screen, this is where you can enable the layout to use Care Plans, load default Care Plans, etc.,"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131607/Guide/Consultation%20Screen/Settings_Button_rhqsb8.png",alt:"Settings"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642131608/Guide/Consultation%20Screen/Settings_for_Clinicians_jygsnp.png",alt:"Clinician Settings"})))),(0,a.kt)("h2",{id:"prescribing-medications"},"Prescribing Medications"),(0,a.kt)("p",null,"To Prescribe Medications go to the medications widget and start keying the medication, the auto suggest will come up as you start keying in the medication name"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642137499/Guide/Consultation%20Screen/Adding-Meds-to-Notes_smmqda.gif",alt:"Adding Medications for Patients in MetahOS"})),(0,a.kt)("p",null,"You can also view and load from Previous Prescriptions, MetahOS will prompt you if they need to be Appended or Replace the current Meds"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642137499/Guide/Consultation%20Screen/Loading-Medications-from-Previous-Prescriptions_g1ympu.gif",alt:"Loading Medications from Previous Prescriptions"})),(0,a.kt)("p",null,"You can also manage the Frequencies, special instructions and create your own. If you create your own frequencies then only those frequencies will be available for selection else by default you will get almost all the frequencies and instructions on taking the medications."),(0,a.kt)("p",null,"Special instructions can be created by Clinicians as per the population that they treat in various languages"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"English\n\u0c95\u0ca8\u0ccd\u0ca8\u0ca1\n\u0939\u093f\u0928\u094d\u0926\u0940\n\u092e\u0930\u093e\u0920\u0940\n\u09ac\u09be\u0982\u09b2\u09be\n\u0ba4\u0bae\u0bbf\u0bb4\u0bcd\n")),(0,a.kt)("p",null,"and any other language that supports Unicode"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642137498/Guide/Consultation%20Screen/Manage-Frequencies_-Instructions_xopess.gif",alt:"Manage Frequencies and Instructions"})),(0,a.kt)("h2",{id:"labradiology-investigations"},"Lab/Radiology Investigations"),(0,a.kt)("p",null,"To Suggest Investigations during the consultation start typing the name of the investigation in the Suggested Investigations field, you can also type in investigations in Follow up Investigations field for Patients who need to get a test performed before coming for their next/followup consultation"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138067/Guide/Consultation%20Screen/Add-Diagnostic-Investigations_olzeco.gif",alt:"Lab Investigations"})),(0,a.kt)("h2",{id:"adding-procedures"},"Adding Procedures"),(0,a.kt)("p",null,"To have a procedure performed on the patient, key in the Procedure name in the Procedure widget"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138996/Guide/Consultation%20Screen/Adding-Procedures_ci2bel.gif",alt:"Adding Procedures"})),(0,a.kt)("h2",{id:"completing-consultation"},"Completing Consultation"),(0,a.kt)("p",null,"There are multiple options in completing the consultations before you complete the consultation, you want to key in the follow up days, Special Instructions and assuming that you have key'ed in Chief Complaints"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138996/Guide/Consultation%20Screen/Ending_the_Consultation_hhef20.png",alt:"Completing the Consultation"})),(0,a.kt)("p",null,"You as a Clinician can also select which sections of the prescription can he shared with the patient for example unchecking Diagnosis, Notes and Vitals will result in just the Medications displayed/printed/shared on the Prescriptions.\nThere are action buttons that perform specific actions"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138995/Guide/Consultation%20Screen/Multiple_Options_to_End_the_consultation_rxrrlq.png",alt:"Completing Consultation Action Buttons"})),(0,a.kt)("h3",{id:"admit-button"},"Admit Button"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138995/Guide/Consultation%20Screen/Admitting_a_Patient_juepht.png",alt:"Admit Patient"})),(0,a.kt)("p",null,"When you click the Admit button, it will bring up the screen to enter the meds, investigations and notes that need to be performed as soon as the patient is admitted. The notes will be available as soon as the Patient is admitted from the Billing/Admission Office"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642139692/Guide/Consultation%20Screen/Admit_Button_Action_rhliw0.png",alt:"Admit Patient from OP"})),(0,a.kt)("h3",{id:"order-button"},"Order Button"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138995/Guide/Consultation%20Screen/Order_Investigations_during_the_consultation_svgegh.png",alt:"Order Suggested Investigations"})),(0,a.kt)("p",null,"Will order the investigations that need to be performed without completing the consultation, this is typically used when the Clinician wants to have some tests done to determine the best care plan possible. The investigations will be sent to Lab and Rad respectively so that the patient can just walk in there and get the tests done."),(0,a.kt)("h3",{id:"print-prescription"},"Print Prescription"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138995/Guide/Consultation%20Screen/Print_Prescription_ttvjtx.png",alt:"Print Prescription"})),(0,a.kt)("p",null,"This will print the presciption without completing the consultation, this is typically used to generate a paper based presciption/notes that need to be shared with the patient."),(0,a.kt)("h3",{id:"send-digital-prescription"},"Send Digital Prescription"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138995/Guide/Consultation%20Screen/Send_Digital_Prescription_wn9l4a.png",alt:"Send Prescription"})),(0,a.kt)("p",null,"The consultant can also send a digital copy of the prescription, the digital copy will be sent via WhatsApp and also SMS. The WhatsApp version will contain the PDF file and SMS version will just have the link to the prescription"),(0,a.kt)("h3",{id:"complete-consultation"},"Complete Consultation"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642138995/Guide/Consultation%20Screen/Complete_the_Consultation_wdxvzo.png",alt:"Complete Consultation"})),(0,a.kt)("p",null,"When completing the consultation the system will ask you to Digitally signed (you can also opt for preloaded signature with your IT Team/Hospital Administrator)\nWhen you click on the Complete button, the platform will prompt you to select the print/share options, this is used when you have to share a specific care plan with the patient or education plan"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642140384/Guide/Consultation%20Screen/Prescription_Print_Options_mmoo5u.png",alt:"Print and Share Options"})),(0,a.kt)("p",null,"You can select Print All, Print Selected, Print None and Hit Next to sign the prescription."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642140384/Guide/Consultation%20Screen/Signature_c0dpfa.png",alt:"Sign"})),(0,a.kt)("p",null,"You can now preview the prescription before sending it out"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642140384/Guide/Consultation%20Screen/Prescription_Preview_vlwdnf.png",alt:"Preview Prescription"})),(0,a.kt)("p",null,"If you wish to make any changes you can click Back and modify the prescription. If everything is to your satisfaction then click on Print, Send & Complete this action will print the prescription, send a digital copy (SMS and WhatsAPP) and mark the consultation as complete."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/teleopdassets/image/upload/v1642140384/Guide/Consultation%20Screen/Sucessfully_Completed_lbgkhy.png",alt:"Success"})))}d.isMDXComponent=!0}}]);