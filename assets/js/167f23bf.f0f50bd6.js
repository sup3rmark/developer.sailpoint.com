"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[99926],{363522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var c=t(785893),a=t(511151);const o={id:"account-enable-customizer",title:"Account Enable",pagination_label:"Account Enable",sidebar_label:"Account Enable",keywords:["connectivity","connectors","Account Enable"],description:"Intercept the account enable command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-enable",tags:["Connectivity","Connector Command"]},i=void 0,s={id:"connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable-customizer",title:"Account Enable",description:"Intercept the account enable command.",source:"@site/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable.md",sourceDirName:"connectivity/saas-connectivity/connector-customizers/customizer-commands",slug:"/connectivity/saas-connectivity/customizers/commands/account-enable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-enable",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/connector-customizers/customizer-commands/account-enable.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"},{inline:!0,label:"Connector Command",permalink:"/docs/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,frontMatter:{id:"account-enable-customizer",title:"Account Enable",pagination_label:"Account Enable",sidebar_label:"Account Enable",keywords:["connectivity","connectors","Account Enable"],description:"Intercept the account enable command.",slug:"/connectivity/saas-connectivity/customizers/commands/account-enable",tags:["Connectivity","Connector Command"]},sidebar:"openApiSidebar",previous:{title:"Account Disable",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-disable"},next:{title:"Account List",permalink:"/docs/connectivity/saas-connectivity/customizers/commands/account-list"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Example StdAccountEnableInput",id:"example-stdaccountenableinput",level:3},{value:"Example StdAccountEnableOutput",id:"example-stdaccountenableoutput",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Before account-enable command",id:"before-account-enable-command",level:3},{value:"After account-enable command",id:"after-account-enable-command",level:3}];function r(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,c.jsxs)(n.p,{children:["Use these commands to intercept the ",(0,c.jsx)(n.a,{href:"../../commands/account-enable",children:"account-enable"})," command."]}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{style:{textAlign:"left"},children:"Input/Output"}),(0,c.jsx)(n.th,{style:{textAlign:"center"},children:"Data Type"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"Input"}),(0,c.jsx)(n.td,{style:{textAlign:"center"},children:"StdAccountEnableInput"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{style:{textAlign:"left"},children:"Output"}),(0,c.jsx)(n.td,{style:{textAlign:"center"},children:"StdAccountEnableOutput"})]})]})]}),"\n",(0,c.jsx)(n.h3,{id:"example-stdaccountenableinput",children:"Example StdAccountEnableInput"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n'})}),"\n",(0,c.jsx)(n.h3,{id:"example-stdaccountenableoutput",children:"Example StdAccountEnableOutput"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:'{\n    "identity": "john.doe",\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n'})}),"\n",(0,c.jsx)(n.h2,{id:"implementation",children:"Implementation"}),"\n",(0,c.jsx)(n.h3,{id:"before-account-enable-command",children:"Before account-enable command"}),"\n",(0,c.jsx)(n.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"    .beforeStdAccountEnable(async (context: Context, input: StdAccountEnableInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"input"})," object can be mutated and returned, but the same data type must still be returned."]}),"\n",(0,c.jsx)(n.h3,{id:"after-account-enable-command",children:"After account-enable command"}),"\n",(0,c.jsx)(n.p,{children:"Use this logic to implement the command:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"    .afterStdAccountEnable(async (context: Context, output: StdAccountEnableOutput) => {\n        logger.info(`Running after account enable for account ${output.identity}`)\n        return output\n    })\n"})}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"output"})," object can be mutated and returned, but the same data type must still be returned."]})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(r,{...e})}):r(e)}}}]);