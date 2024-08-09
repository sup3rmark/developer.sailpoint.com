"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[20591],{740623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=n(785893),r=n(511151);const i={id:"left-pad",title:"Left Pad",pagination_label:"Left Pad",sidebar_label:"Left Pad",sidebar_class_name:"leftPad",keywords:["transforms","operations","left","pad"],description:"Left pad of the input string.",slug:"/extensibility/transforms/operations/left-pad",tags:["Transforms","Transform Operations"]},a=void 0,o={id:"extensibility/transforms/operations/left-pad",title:"Left Pad",description:"Left pad of the input string.",source:"@site/docs/extensibility/transforms/operations/left-pad.md",sourceDirName:"extensibility/transforms/operations",slug:"/extensibility/transforms/operations/left-pad",permalink:"/docs/extensibility/transforms/operations/left-pad",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/extensibility/transforms/operations/left-pad.md",tags:[{inline:!0,label:"Transforms",permalink:"/docs/tags/transforms"},{inline:!0,label:"Transform Operations",permalink:"/docs/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"left-pad",title:"Left Pad",pagination_label:"Left Pad",sidebar_label:"Left Pad",sidebar_class_name:"leftPad",keywords:["transforms","operations","left","pad"],description:"Left pad of the input string.",slug:"/extensibility/transforms/operations/left-pad",tags:["Transforms","Transform Operations"]},sidebar:"openApiSidebar",previous:{title:"Last Index Of",permalink:"/docs/extensibility/transforms/operations/last-index-of"},next:{title:"Lookup",permalink:"/docs/extensibility/transforms/operations/lookup"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}];function c(e){const t={admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Use the left pad transform to pad an incoming string with a user-supplied character out to a specific number of characters. This transform is often useful for data normalization situations in which data such as employee IDs are not uniform in length but need to be for downstream systems."}),"\n",(0,s.jsx)(t.admonition,{title:"Other Considerations",type:"note",children:(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"If the input to the left pad transform is null, the transform returns a null value."}),"\n"]})}),"\n",(0,s.jsx)(t.h2,{id:"transform-structure",children:"Transform Structure"}),"\n",(0,s.jsxs)(t.p,{children:["In addition to the standard ",(0,s.jsx)(t.code,{children:"type"})," and ",(0,s.jsx)(t.code,{children:"name"})," attributes, the left pad transform requires the ",(0,s.jsx)(t.code,{children:"length"})," attribute, which tells the transform how many characters to pad the incoming string to."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "padding": "0",\n    "length": "5"\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Required Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"type"})," - This must always be set to ",(0,s.jsx)(t.code,{children:"leftPad"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"name"})," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"length"})," - This is an integer value for the final output string's desired length."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Optional Attributes"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"requiresPeriodicRefresh"})," - This ",(0,s.jsx)(t.code,{children:"true"})," or ",(0,s.jsx)(t.code,{children:"false"})," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"padding"})," - This string value represents the character the transform will pad the incoming data to to get to the desired length.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:'If no padding value is provided, the transform defaults to a single space (" ") character for padding.'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"input"})," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.p,{children:'This transform takes the incoming attribute configured in the identity profile attribute UI and ensures it is padded out to 8 characters in length by adding "0"s to the left.'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'Input: "1234"\nOutput: "00001234"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "padding": "0",\n    "length": "8"\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)("p",{children:"\xa0"}),"\n",(0,s.jsxs)(t.p,{children:["This transform takes the user's ",(0,s.jsx)(t.code,{children:"employeeID"}),' attribute from the HR source and ensures it is padded out to 7 characters in length by adding "x"s to the left.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'Input: "1234"\nOutput: "xxx1234"\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Transform Request Body"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "attributes": {\n    "padding": "x",\n    "length": "7",\n    "input": {\n      "attributes": {\n        "sourceName": "HR Source",\n        "attributeName": "employeeID"\n      },\n      "type": "accountAttribute"\n    }\n  },\n  "type": "leftPad",\n  "name": "Left Pad Transform"\n}\n'})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);