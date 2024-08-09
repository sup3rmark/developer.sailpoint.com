"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[73838],{423683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>r});var i=n(785893),a=n(511151);const d={id:"entitlement-read-customizer",title:"Entitlement Read",pagination_label:"Entitlement Read",sidebar_label:"Entitlement Read",keywords:["connectivity","connectors","Entitlement Read"],description:"Intercept the entitlement read command.",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-read",tags:["Connectivity","Connector Command"]},c=void 0,s={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-read-customizer",title:"Entitlement Read",description:"Intercept the entitlement read command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-read.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-read",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-read",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/entitlement-read.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"entitlement-read-customizer",title:"Entitlement Read",pagination_label:"Entitlement Read",sidebar_label:"Entitlement Read",keywords:["connectivity","connectors","Entitlement Read"],description:"Intercept the entitlement read command.",slug:"/connectivity/saas-connectivity/customizers/commands/entitlement-read",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Entitlement List",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/entitlement-list"},next:{title:"Source Data Discover",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/source-data-discover"}},o={},r=[{value:"Overview",id:"overview",level:2},{value:"Example StdEntitlementReadInput",id:"example-stdentitlementreadinput",level:3},{value:"Example StdEntitlementReadOutput",id:"example-stdentitlementreadoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before entitlement-read command",id:"before-entitlement-read-command",level:3},{value:"After entitlement-read command",id:"after-entitlement-read-command",level:3}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Use these commands to intercept the ",(0,i.jsx)(t.a,{href:"../../commands/entitlement-read",children:"entitlement-read"})," command."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Input"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"StdEntitlementReadInput"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Output"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"StdEntitlementReadOutput"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example-stdentitlementreadinput",children:"Example StdEntitlementReadInput"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "type": "group"\n}\n'})}),"\n",(0,i.jsx)(t.h3,{id:"example-stdentitlementreadoutput",children:"Example StdEntitlementReadOutput"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "administrator"\n        }\n    },\n    "type": "group",\n    "attributes": {\n        "id": "administrator",\n        "name": "Administrator"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.h2,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsx)(t.h3,{id:"before-entitlement-read-command",children:"Before entitlement-read command"}),"\n",(0,i.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"    .beforeStdEntitlementRead(async (context: Context, input: StdEntitlementReadInput) => {\n        logger.info(`Running before entitlement read for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,i.jsx)(t.h3,{id:"after-entitlement-read-command",children:"After entitlement-read command"}),"\n",(0,i.jsx)(t.p,{children:"Use this logic to implement the command:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",children:"    .afterStdEntitlementRead(async (context: Context, output: StdEntitlementReadOutput) => {\n        logger.info(`Running after entitlement read for account ${output.identity}`)\n        return output\n    })\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);