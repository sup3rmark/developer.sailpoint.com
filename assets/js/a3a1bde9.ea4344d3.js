"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[33384],{282663:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=i(785893),r=i(511151);const s={id:"form-submitted",title:"Form Submitted",pagination_label:"Form Submitted",sidebar_label:"Form Submitted",sidebar_class_name:"formSubmitted",keywords:["event","trigger","form","submitted","available"],description:"Triggered when a form is submitted.",slug:"/extensibility/event-triggers/triggers/form-submitted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},a=void 0,d={id:"extensibility/event-triggers/available/form-submitted",title:"Form Submitted",description:"Triggered when a form is submitted.",source:"@site/docs/extensibility/event-triggers/available/form-submitted.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/form-submitted",permalink:"/docs/extensibility/event-triggers/triggers/form-submitted",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/form-submitted.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"form-submitted",title:"Form Submitted",pagination_label:"Form Submitted",sidebar_label:"Form Submitted",sidebar_class_name:"formSubmitted",keywords:["event","trigger","form","submitted","available"],description:"Triggered when a form is submitted.",slug:"/extensibility/event-triggers/triggers/form-submitted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Certification Signed Off",permalink:"/docs/extensibility/event-triggers/triggers/certification-signed-off"},next:{title:"Identity Attributes Changed",permalink:"/docs/extensibility/event-triggers/triggers/identity-attribute-changed"}},o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,n.jsxs)(t.p,{children:["The Form Submitted events occur after a user has submitted a ",(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/forms/index.html",children:"custom form"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Some uses cases for this trigger include the following:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Immediately take actions based on data submitted in the form"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "submittedAt": "2020-06-29T22:01:50.474Z",\n  "tenantId": "2c9180845d1edece015d27a9717c3e19",\n  "formInstanceId": "2c9180835d2e5168015d32f890ca1582",\n  "formDefinitionId": "2c9180835d2e5168015d32f890ca1581",\n  "name": "Open Service Request",\n  "createdBy": {\n    "type": "WORKFLOW_EXECUTION",\n    "id": "2c9180845d1edece015d27a9717c3e19"\n  },\n  "submittedBy": {\n    "type": "IDENTITY",\n    "id": "2c9180845d1edece015d27a9717c3e19",\n    "name": "Neil McGlennon"\n  },\n  "formData": {\n    "department": "IT",\n    "requestType": "New Laptop",\n    "laptop": "New Laptop type for Engineer",\n    "comments": "My laptop is running slow, and I need to get a shiny new laptop to get my work done.  Thanks!"\n  }\n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"formData"})," contains the information provided by the user who submitted the form. The attributes of ",(0,n.jsx)(t.code,{children:"formData"})," will vary depending on the form definition."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,n.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);