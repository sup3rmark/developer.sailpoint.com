"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92480],{857750:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var t=n(785893),c=n(511151);const s={id:"connector-spec-select",title:"Select",pagination_label:"Select",sidebar_label:"Select",keywords:["connectivity","connectors","connector-spec","select"],description:"Details on using the select item",slug:"/connectivity/saas-connectivity/connector-spec/select",tags:["Connectivity","Connector Spec"]},i=void 0,r={id:"connectivity/saas-connectivity/connector-spec/connector-spec-select",title:"Select",description:"Details on using the select item",source:"@site/docs/connectivity/saas-connectivity/connector-spec/select.md",sourceDirName:"connectivity/saas-connectivity/connector-spec",slug:"/connectivity/saas-connectivity/connector-spec/select",permalink:"/docs/connectivity/saas-connectivity/connector-spec/select",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-spec/select.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Spec",permalink:"/docs/tags/connector-spec"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"connector-spec-select",title:"Select",pagination_label:"Select",sidebar_label:"Select",keywords:["connectivity","connectors","connector-spec","select"],description:"Details on using the select item",slug:"/connectivity/saas-connectivity/connector-spec/select",tags:["Connectivity","Connector Spec"]},sidebar:"openApiSidebar",previous:{title:"Radio",permalink:"/docs/connectivity/saas-connectivity/connector-spec/radio"},next:{title:"Example Connectors",permalink:"/docs/connectivity/saas-connectivity/example-connectors"}},a={},o=[{value:"How to use the Select type in the connector spec",id:"how-to-use-the-select-type-in-the-connector-spec",level:2},{value:"Example select item type",id:"example-select-item-type",level:3},{value:"Example dependency on earlier select field",id:"example-dependency-on-earlier-select-field",level:3}];function l(e){const A={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.h2,{id:"how-to-use-the-select-type-in-the-connector-spec",children:"How to use the Select type in the connector spec"}),"\n",(0,t.jsx)(A.p,{children:"You can use the Select type to create a dropdown for users to interact with to select from a predefined set of values."}),"\n",(0,t.jsx)(A.p,{children:"This is an example implementation:"}),"\n",(0,t.jsx)(A.h3,{id:"example-select-item-type",children:"Example select item type"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-javascript",children:'{\n    "key": "airtableURL",\n    "type": "select",\n    "label": "Airtable URL",\n    "required": true,\n    "options": [\n        {\n            "label": "Standard",\n            "value": "standard"\n        },\n        {\n            "label": "Custom",\n            "value": "custom"\n        }\n    ]\n}\n'})}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"select input type",src:n(604202).Z+"",width:"734",height:"177"})}),"\n",(0,t.jsx)(A.p,{children:"You can also create dependencies on other fields so they are hidden until the selection is made. This same type of dependency can be built into any field and linked by using the parentKey/parentValue fields."}),"\n",(0,t.jsx)(A.h3,{id:"example-dependency-on-earlier-select-field",children:"Example dependency on earlier select field"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-javascript",children:'{\n    "key": "baseUrl",\n    "type": "text",\n    "label": "Base URL",\n    "parentKey": "airtableURL",\n    "parentValue": "custom",\n    "placeholder": "https://{your domain}",\n    "required": true\n}\n'})})]})}function d(e={}){const{wrapper:A}={...(0,c.a)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},604202:(e,A,n)=>{n.d(A,{Z:()=>t});const t="data:image/png;base64,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"}}]);