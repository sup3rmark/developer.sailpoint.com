"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[32685],{280813:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var n=i(785893),r=i(511151);const s={id:"outlier-detected",title:"Outlier Detected",pagination_label:"Outlier Detected",sidebar_label:"Outlier Detected",sidebar_class_name:"outlierDetected",keywords:["event","trigger","outlier","detected"],description:"Fires after an identity was detected as an outlier.",slug:"/extensibility/event-triggers/triggers/outlier-detected",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,a={id:"extensibility/event-triggers/available/outlier-detected",title:"Outlier Detected",description:"Fires after an identity was detected as an outlier.",source:"@site/docs/extensibility/event-triggers/available/outlier-detected.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/outlier-detected",permalink:"/docs/extensibility/event-triggers/triggers/outlier-detected",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/outlier-detected.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Fire and Forget",permalink:"/docs/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"outlier-detected",title:"Outlier Detected",pagination_label:"Outlier Detected",sidebar_label:"Outlier Detected",sidebar_class_name:"outlierDetected",keywords:["event","trigger","outlier","detected"],description:"Fires after an identity was detected as an outlier.",slug:"/extensibility/event-triggers/triggers/outlier-detected",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"openApiSidebar",previous:{title:"Native Change Account Updated",permalink:"/docs/extensibility/event-triggers/triggers/native-change-account-updated"},next:{title:"Provisioning Completed",permalink:"/docs/extensibility/event-triggers/triggers/provisioning-completed"}},d={},o=[{value:"Event Context",id:"event-context",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"event-context",children:"Event Context"}),"\n",(0,n.jsx)(t.p,{children:"The 'Outlier Detected' event trigger notifies subscribed applications of any identities that have unusual access when compared to their peers. Outliers are calculated daily, and any identities that are flagged as outliers will be sent to subscribers of the trigger."}),"\n",(0,n.jsx)(t.p,{children:"This is an example input from this trigger:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\n  "identity": {\n    "id": "ee769173319b41d19ccec6cea52f237b",\n    "displayName": "John Doe",\n    "type": "IDENTITY"\n  },\n  "outlierType": "LOW_SIMILARITY",\n  "score": 0.82\n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"outlierType"})," - Only ",(0,n.jsx)(t.code,{children:"LOW_SIMILARITY"})," is supported at this time."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"score"})," - The range is ",(0,n.jsx)(t.code,{children:"0.0"})," to ",(0,n.jsx)(t.code,{children:"1.0"}),". The higher the score, the more likely the identity is an outlier."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.p,{children:"Before consuming this event trigger, the following prerequesites must be met:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Your organization must have Access Insights to access Identity Outliers."}),"\n",(0,n.jsx)(t.li,{children:"Your organization must have configured a source and loaded account data."}),"\n",(0,n.jsx)(t.li,{children:"Your organization\u2019s account data must be onboarded into AI-Driven Identity Security."}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Important",type:"caution",children:(0,n.jsx)(t.p,{children:"If you don't meet the prerequisites and you subscribe to this event trigger, you will not receive any events. The prerequisites must be met in order to receive events."})}),"\n",(0,n.jsx)(t.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://documentation.sailpoint.com/saas/help/ai/access_insights/outliers.html",children:"Identity outliers documentation"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Trigger Type"}),": ",(0,n.jsx)(t.a,{href:"/docs/extensibility/event-triggers/trigger-types#fire-and-forget",children:"FIRE_AND_FORGET"})]}),"\n"]})]})}function g(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}}}]);