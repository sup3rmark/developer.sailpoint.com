"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[92822],{38120:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>y,contentTitle:()=>b,default:()=>N,frontMatter:()=>f,metadata:()=>v,toc:()=>_});var i=s(785893),l=s(511151),r=s(168562),n=s.n(r),t=(s(69957),s(496463)),o=(s(318438),s(998439)),p=s.n(o),d=(s(534168),s(603655)),m=s.n(d),c=s(313503),h=s.n(c),x=s(82479),u=s.n(x),j=s(555199),g=(s(645774),s(424455));const f={id:"create-profile-page",sidebar_label:"Create a profile page",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktv2zgQ/ivEnOXHpom7ELCHdDcLeIE2QeLdS2AUFDWy2FCkyocTwdB/L4b0Q7GdFr0W64Mskd+8vxlyA6ZFy700el5CDsIi93hnTSUV3vEVQgYlOmFlSxjI4c+IYJy1CcTahPJ85SB/BPp0sMzA4teAzn8wZQf5Jn5KiyXk3gbMQBjtUXva4m2rpIhOTL44srIBJ2psOL35rkXIwRRfUHjIoLXkspfoaDda/yEqyHIAct5KvTqJbFEjC7JkpmK+3seFL7xpFYnRwmfS1B9J7hV7fPGvRCiDrDKWPRv7VCnzfNboYOWV8T4DzRs85/nBxMeORSufCHlOO6k4VsutqOUah0kpjFHI9VB3xZXDY5V/oUfbSI2OPdfoa7R7zUw6ttfc9xl46VMaBnzq44/o4VqjXarPxXRKf68t3by0KDyWbAdl3jDO1lxJWovsgv+J9MsTKYPzSa+MbbiHHALlkhjFy1utut2EOY3gUBOSfRX9BU5nxe/vZ6Pq8mo2unz/rhwV5exqVMwu313htJgVF0ecjnNux+bLcwT+wEt2n3jKRixoXqjIYWHIqMfxz7DXaLytIH88ZejOo7mOrfEPifbZ27j/CBXN3FhrrIN+mYK4OhfEXHu0miv2gHaNlkUZNmIWfbAaS2Y0C7rmulRYMnwRGCXdTwX3/aZDMnnq2TVr0DmiS1ovpF7F4ib8sLoPxtqOOdOgrwn1jNqzZ2v0alvBPgPaM3QGtibOlZb7GnKYxANtsj3tPqfjLQMXs+FiQYJVkEPtfevyyWTjUXPtqY36sTYam1aZDnEsTDPhrYQM1txKIkOM7gBPIVY8KGI1Fw0Kc9qJEZ6akTsnV1QDIlVw3jRoKaAl+SeClb6LDhbILdrrQAE9LofbD1SC5McQtK8IBUXRRhg1dwRBtn35e9eCC/OEmnl6/tGZYNNrbBiq9v3hLnCzK8ph5MahepiKxxGfm31pnB3PrMM0ihOHrEtdGbJBxUrqfhtPx9NBO3y6uf/Iru/mZ2febpMJrlmBLLiUbS4EOse4LlljSll1jGpqgqPDygQr0DGpWUwF6rW0RjeoPTWFkgK1i4HvopgvYqaIeA3Xg523LltHp8a+z96+nR3OlUmruKQJkXi72RJ9d3OLzTeg+jKDmhoif4TNpuAO/7Wq72n5a0BL/FoeCB3plUGNvEQbqfeEHbmVHBwtyA2Cq0DunAwFGltJ4lrQIPkudjno2bvbhwWxcnvZbExJMpYTV+iZA2Rg0mSKt1Fa24DiehUiCyHppN83kLDSwg==",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile page' (create-profile-page)"},b=void 0,v={id:"api/nerm/v1/create-profile-page",title:"create-profile-page",description:"<Heading",source:"@site/docs/api/nerm/v1/create-profile-page.api.mdx",sourceDirName:"api/nerm/v1",slug:"/api/nerm/v1/create-profile-page",permalink:"/docs/api/nerm/v1/create-profile-page",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile page' (create-profile-page)",tags:[],version:"current",frontMatter:{id:"create-profile-page",sidebar_label:"Create a profile page",hide_title:!0,hide_table_of_contents:!0,api:"eJztVktv2zgQ/ivEnOXHpom7ELCHdDcLeIE2QeLdS2AUFDWy2FCkyocTwdB/L4b0Q7GdFr0W64Mskd+8vxlyA6ZFy700el5CDsIi93hnTSUV3vEVQgYlOmFlSxjI4c+IYJy1CcTahPJ85SB/BPp0sMzA4teAzn8wZQf5Jn5KiyXk3gbMQBjtUXva4m2rpIhOTL44srIBJ2psOL35rkXIwRRfUHjIoLXkspfoaDda/yEqyHIAct5KvTqJbFEjC7JkpmK+3seFL7xpFYnRwmfS1B9J7hV7fPGvRCiDrDKWPRv7VCnzfNboYOWV8T4DzRs85/nBxMeORSufCHlOO6k4VsutqOUah0kpjFHI9VB3xZXDY5V/oUfbSI2OPdfoa7R7zUw6ttfc9xl46VMaBnzq44/o4VqjXarPxXRKf68t3by0KDyWbAdl3jDO1lxJWovsgv+J9MsTKYPzSa+MbbiHHALlkhjFy1utut2EOY3gUBOSfRX9BU5nxe/vZ6Pq8mo2unz/rhwV5exqVMwu313htJgVF0ecjnNux+bLcwT+wEt2n3jKRixoXqjIYWHIqMfxz7DXaLytIH88ZejOo7mOrfEPifbZ27j/CBXN3FhrrIN+mYK4OhfEXHu0miv2gHaNlkUZNmIWfbAaS2Y0C7rmulRYMnwRGCXdTwX3/aZDMnnq2TVr0DmiS1ovpF7F4ib8sLoPxtqOOdOgrwn1jNqzZ2v0alvBPgPaM3QGtibOlZb7GnKYxANtsj3tPqfjLQMXs+FiQYJVkEPtfevyyWTjUXPtqY36sTYam1aZDnEsTDPhrYQM1txKIkOM7gBPIVY8KGI1Fw0Kc9qJEZ6akTsnV1QDIlVw3jRoKaAl+SeClb6LDhbILdrrQAE9LofbD1SC5McQtK8IBUXRRhg1dwRBtn35e9eCC/OEmnl6/tGZYNNrbBiq9v3hLnCzK8ph5MahepiKxxGfm31pnB3PrMM0ihOHrEtdGbJBxUrqfhtPx9NBO3y6uf/Iru/mZ2febpMJrlmBLLiUbS4EOse4LlljSll1jGpqgqPDygQr0DGpWUwF6rW0RjeoPTWFkgK1i4HvopgvYqaIeA3Xg523LltHp8a+z96+nR3OlUmruKQJkXi72RJ9d3OLzTeg+jKDmhoif4TNpuAO/7Wq72n5a0BL/FoeCB3plUGNvEQbqfeEHbmVHBwtyA2Cq0DunAwFGltJ4lrQIPkudjno2bvbhwWxcnvZbExJMpYTV+iZA2Rg0mSKt1Fa24DiehUiCyHppN83kLDSwg==",sidebar_class_name:"post api-method",info_path:"docs/api/nerm/v1/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile page' (create-profile-page)"},sidebar:"nermSideBar",previous:{title:"Delete a option based attribute value by id",permalink:"/docs/api/nerm/v1/delete-attribute-option"},next:{title:"Create a workflow page",permalink:"/docs/api/nerm/v1/create-workflow-page"}},y={},_=[];function q(e){const a={p:"p",...(0,l.a)(),...e.components},{Details:s}=a;return s||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.default,{as:"h1",className:"openapi__heading",children:"Create a profile page"}),"\n",(0,i.jsx)(t.Z,{method:"post",path:"/pages/profile_pages"}),"\n",(0,i.jsx)(a.p,{children:"Create a profile page"}),"\n",(0,i.jsx)(j.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,i.jsx)(p(),{className:"openapi-tabs__mime",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,i.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,i.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,i.jsx)(a.p,{children:"Body"})}),(0,i.jsx)("strong",{className:"openapi-schema__required",children:(0,i.jsx)(a.p,{children:"required"})})]}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"page"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The uid of the page",example:"page_uid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"description",required:!1,schemaName:"text",qualifierMessage:void 0,schema:{type:"text",example:"Page for workflow",description:"The description of the page"}}),(0,i.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"My Page Name",description:"The name of the page"}}),(0,i.jsx)(h(),{collapsible:!1,name:"archived",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"Determines whether the page is archived"}})]})]})})})]})})}),"\n",(0,i.jsx)("div",{children:(0,i.jsx)("div",{children:(0,i.jsxs)(n(),{label:void 0,id:void 0,children:[(0,i.jsxs)(g.default,{label:"200",value:"200",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Expected response to a valid request"})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(a.p,{children:"page"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(a.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(h(),{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The uid of the page",example:"page_uid"}}),(0,i.jsx)(h(),{collapsible:!1,name:"description",required:!1,schemaName:"text",qualifierMessage:void 0,schema:{type:"text",example:"Page for workflow",description:"The description of the page"}}),(0,i.jsx)(h(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"My Page Name",description:"The name of the page"}}),(0,i.jsx)(h(),{collapsible:!1,name:"archived",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:!1,description:"Determines whether the page is archived"}}),(0,i.jsx)(h(),{collapsible:!1,name:"id",required:!1,schemaName:"uuid",qualifierMessage:void 0,schema:{type:"string",format:"uuid",readOnly:!0,description:"The id of the form",example:"2e06b876-f456-473d-bd65-b6435e0b6b2d"}})]})]})})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "page": {\n    "uid": "page_uid",\n    "description": "Page for workflow",\n    "name": "My Page Name",\n    "archived": false,\n    "id": "2e06b876-f456-473d-bd65-b6435e0b6b2d"\n  }\n}',language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"400",value:"400",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Bad Request - unable to complete."})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"badge badge--info",style:{marginBottom:"1rem"},children:(0,i.jsx)(a.p,{children:"oneOf"})}),(0,i.jsxs)(u(),{children:[(0,i.jsx)(g.default,{label:"InvalidJson",value:"0-item-properties",children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."}})}),(0,i.jsxs)(g.default,{label:"ValidationErrors",value:"1-item-properties",children:[(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"}}),(0,i.jsx)(h(),{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}}})]})]})]})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:"{}",language:"json"})})]})})})})]}),(0,i.jsxs)(g.default,{label:"500",value:"500",children:[(0,i.jsx)("div",{children:(0,i.jsx)(a.p,{children:"Internal Server Error - returned on unhandled exceptions."})}),(0,i.jsx)("div",{children:(0,i.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,i.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,i.jsxs)(u(),{className:"openapi-tabs__schema",children:[(0,i.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,i.jsxs)(s,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,i.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,i.jsx)("strong",{children:(0,i.jsx)(a.p,{children:"Schema"})})}),(0,i.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,i.jsx)(h(),{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"}})})]})}),(0,i.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,i.jsx)(m(),{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json"})})]})})})})]})]})})})]})}function N(e={}){const{wrapper:a}={...(0,l.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(q,{...e})}):q(e)}}}]);