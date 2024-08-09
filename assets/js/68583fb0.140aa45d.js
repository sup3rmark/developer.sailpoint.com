"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[29553],{185049:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(785893),n=i(511151);const r={id:"access-request-dynamic-approval",title:"Access Request Dynamic Approval",pagination_label:"Access Request Dynamic Approval",sidebar_label:"Access Request Dynamic Approval",sidebar_class_name:"accessRequestDynamicApproval",keywords:["event","trigger","access","request","dynamic","approval","available"],description:"Fires after an access request is submitted.",slug:"/extensibility/event-triggers/triggers/access-request-dynamic-approval",tags:["Event Triggers","Available Event Triggers","Request Response"]},a=void 0,o={id:"extensibility/event-triggers/available/access-request-dynamic-approval",title:"Access Request Dynamic Approval",description:"Fires after an access request is submitted.",source:"@site/docs/extensibility/event-triggers/available/access-request-dynamic-approval.md",sourceDirName:"extensibility/event-triggers/available",slug:"/extensibility/event-triggers/triggers/access-request-dynamic-approval",permalink:"/docs/extensibility/event-triggers/triggers/access-request-dynamic-approval",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/event-triggers/available/access-request-dynamic-approval.md",tags:[{inline:!0,label:"Event Triggers",permalink:"/docs/tags/event-triggers"},{inline:!0,label:"Available Event Triggers",permalink:"/docs/tags/available-event-triggers"},{inline:!0,label:"Request Response",permalink:"/docs/tags/request-response"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"access-request-dynamic-approval",title:"Access Request Dynamic Approval",pagination_label:"Access Request Dynamic Approval",sidebar_label:"Access Request Dynamic Approval",sidebar_class_name:"accessRequestDynamicApproval",keywords:["event","trigger","access","request","dynamic","approval","available"],description:"Fires after an access request is submitted.",slug:"/extensibility/event-triggers/triggers/access-request-dynamic-approval",tags:["Event Triggers","Available Event Triggers","Request Response"]},sidebar:"openApiSidebar",previous:{title:"Access Request Decision",permalink:"/docs/extensibility/event-triggers/triggers/access-request-decision"},next:{title:"Access Request Submitted",permalink:"/docs/extensibility/event-triggers/triggers/access-request-submitted"}},c={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"event-context",children:"Event Context"}),"\n",(0,t.jsx)(s.p,{children:"The Access Request Dynamic Approval event trigger provides a way to route a request to an additional approval step by an identity or a governance group."}),"\n",(0,t.jsx)(s.p,{children:"When an access request is submitted, the Access Request Dynamic Approval trigger does the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Sends data about the access request and expects a response including the ID of an existing identity or workgroup (i.e. governance group) to add to the approval workflow."}),"\n",(0,t.jsx)(s.li,{children:"Based on the ID received, an approval task is assigned to the identity or governance group in Identity Security Cloud for a decision as an additional step after other configured approval requirements are met."}),"\n",(0,t.jsx)(s.li,{children:"If the new approver is also the target identity for this request, the manager is assigned instead. If the identity has no manager, a random org admin is assigned."}),"\n",(0,t.jsx)(s.li,{children:"If the ID of the additional approver is wrong, then a random org admin is assigned."}),"\n",(0,t.jsxs)(s.li,{children:["You can choose to ",(0,t.jsx)(s.strong,{children:"NOT"})," add an additional approver by providing an empty object as the response to the triggered REST request."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"You can use this trigger to develop logic outside of Identity Security Cloud\u2019s out-of-the-box offerings to route an approval step to users such as the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"The recipient\u2019s department head"}),"\n",(0,t.jsx)(s.li,{children:"The recipient\u2019s cost center"}),"\n",(0,t.jsx)(s.li,{children:"A security officer"}),"\n",(0,t.jsx)(s.li,{children:"A high-risk governance group for highly sensitive roles"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["If there is an active subscription to the ",(0,t.jsx)(s.a,{href:"/docs/extensibility/event-triggers/triggers/access-request-submitted",children:"Access Request Submitted trigger"}),", this trigger is invoked ",(0,t.jsx)(s.strong,{children:"after"})," a response is submitted to the Access Request Submitted trigger, and only if that response is to approve the access request."]}),"\n",(0,t.jsx)(s.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsxs)(s.p,{children:["This is a ",(0,t.jsx)(s.code,{children:"REQUEST_RESPONSE"})," trigger type. For more information about how to respond to a ",(0,t.jsx)(s.code,{children:"REQUEST_RESPONSE"})," type trigger, see ",(0,t.jsx)(s.a,{href:"/docs/extensibility/event-triggers/responding-request-response-trigger",children:"responding to a request response type trigger"})," . This trigger intercepts newly submitted access requests and allows the subscribing service to add one additional identity or governance group as the last step in the approver list for the access request."]}),"\n",(0,t.jsx)(s.p,{children:"The subscribing service will receive the following input from the trigger service."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "accessRequestId": "4b4d982dddff4267ab12f0f1e72b5a6d",\n  "requestedFor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requestedItems": [\n    {\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "description": "Engineering Access",\n      "type": "ACCESS_PROFILE",\n      "operation": "Add",\n      "comment": "William needs this access for his day to day job activities."\n    }\n  ],\n  "requestedBy": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1314",\n    "name": "Billy Bob"\n  }\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"The subscribing service can use this information to make a decision about whether to add additional approvers to the access request."}),"\n",(0,t.jsx)(s.p,{children:"To add an identity to the approver list, the subscribing service responds to the event trigger with the following payload:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "2c91808b6ef1d43e016efba0ce470906",\n  "name": "Adam Adams",\n  "type": "IDENTITY"\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"To add a governance group to the approver list, the subscribing service responds to the event trigger with the following payload:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "2c91808b6ef1d43e016efba0ce470907",\n  "name": "Audit Committee",\n  "type": "GOVERNANCE_GROUP"\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"If no identity or group should be added to a particular access request, then the subscribing service responds with the following object:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "id": "",\n  "name": "",\n  "type": ""\n}\n'})}),"\n",(0,t.jsx)(s.h2,{id:"additional-information-and-links",children:"Additional Information and Links"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Trigger Type"}),": ",(0,t.jsx)(s.a,{href:"/docs/extensibility/event-triggers/trigger-types#request-response",children:"REQUEST_RESPONSE"})]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/extensibility/event-triggers/responding-request-response-trigger",children:"How to respond to a REQUEST_RESPONSE trigger"})}),"\n"]})]})}function g(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);