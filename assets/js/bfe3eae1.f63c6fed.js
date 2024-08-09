"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[66328],{149587:(n,o,c)=>{c.r(o),c.d(o,{assets:()=>r,contentTitle:()=>t,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var e=c(785893),i=c(511151);const s={id:"common-cli-commands",title:"Common CLI Commands",pagination_label:"Common CLI Commands",sidebar_label:"Common CLI Commands",sidebar_position:3,sidebar_class_name:"commonCliCommands",keywords:["connectivity","connectors","commands","cli"],description:"These are the CLI commands most commonly used when building SaaS Connectors.",slug:"/connectivity/saas-connectivity/common-cli-commands",tags:["Connectivity"]},t=void 0,l={id:"connectivity/saas-connectivity/common-cli-commands",title:"Common CLI Commands",description:"These are the CLI commands most commonly used when building SaaS Connectors.",source:"@site/docs/connectivity/saas-connectivity/common-cli-commands.md",sourceDirName:"connectivity/saas-connectivity",slug:"/connectivity/saas-connectivity/common-cli-commands",permalink:"/docs/connectivity/saas-connectivity/common-cli-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/connectivity/saas-connectivity/common-cli-commands.md",tags:[{inline:!0,label:"Connectivity",permalink:"/docs/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,sidebarPosition:3,frontMatter:{id:"common-cli-commands",title:"Common CLI Commands",pagination_label:"Common CLI Commands",sidebar_label:"Common CLI Commands",sidebar_position:3,sidebar_class_name:"commonCliCommands",keywords:["connectivity","connectors","commands","cli"],description:"These are the CLI commands most commonly used when building SaaS Connectors.",slug:"/connectivity/saas-connectivity/common-cli-commands",tags:["Connectivity"]},sidebar:"openApiSidebar",previous:{title:"Test, Build, and Deploy",permalink:"/docs/connectivity/saas-connectivity/test-build-deploy"},next:{title:"Connector Spec File",permalink:"/docs/connectivity/saas-connectivity/connector-spec"}},r={},a=[];function d(n){const o={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(o.p,{children:"Below is a list of commands and their usages:"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"Development"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["Create a connector on your local system: ",(0,e.jsx)(o.code,{children:'sail conn init "my-project"'})]}),"\n",(0,e.jsxs)(o.li,{children:["Create a customizer on your local system ",(0,e.jsx)(o.code,{children:'sail conn customizers init "my-customizer-project"'})]}),"\n",(0,e.jsxs)(o.li,{children:["Test your connector or customizer locally: ",(0,e.jsx)(o.code,{children:"npm run debug"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"Deployment"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["Create an empty connector in your ISC Org (used to get id so you can upload): ",(0,e.jsx)(o.code,{children:'sail conn create "my-project"'})]}),"\n",(0,e.jsxs)(o.li,{children:["Create an empty customizer in your ISC Org (used to get id so you can upload): ",(0,e.jsx)(o.code,{children:'sail conn customizers create "my-customizer-project"'})]}),"\n",(0,e.jsxs)(o.li,{children:["Build a project: ",(0,e.jsx)(o.code,{children:"npm run pack-zip"})]}),"\n",(0,e.jsxs)(o.li,{children:["Upload your connector to your ISC Org: ",(0,e.jsx)(o.code,{children:"sail conn upload -c [connectorID | connectorAlias] -f dist/[connector filename].zip"})]}),"\n",(0,e.jsxs)(o.li,{children:["Upload your customizer to your ISC Org: ",(0,e.jsx)(o.code,{children:"sail conn customizers upload -c [customizerID] -f dist/[customizer filename].zip"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"Exploring"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["List connectors in your ISC Org: ",(0,e.jsx)(o.code,{children:"sail conn list"})]}),"\n",(0,e.jsxs)(o.li,{children:["List customizers in your ISC Org: ",(0,e.jsx)(o.code,{children:"sail conn customizers list"})]}),"\n",(0,e.jsxs)(o.li,{children:["List source instances in your ISC Org: ",(0,e.jsx)(o.code,{children:"sail conn instances list"})]}),"\n",(0,e.jsxs)(o.li,{children:["List your connector tags: ",(0,e.jsx)(o.code,{children:"sail conn tags list -c [connectorID | connectorAlias]"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"Testing and Debugging"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["Test your connector on the ISC Org: ",(0,e.jsx)(o.code,{children:"sail connectors invoke [action] -c [connectorID | connectorAlias] -p config.json"})]}),"\n",(0,e.jsxs)(o.li,{children:["Get a list of actions: ",(0,e.jsx)(o.code,{children:"sail conn invoke -h"})]}),"\n",(0,e.jsxs)(o.li,{children:["Run read-only integration tests against your connector: ",(0,e.jsx)(o.code,{children:"sail conn validate -p config.json -c [connectorID | connectorAlias] -r"})]}),"\n",(0,e.jsxs)(o.li,{children:["Tail ISC Org connector logs: ",(0,e.jsx)(o.code,{children:"sail conn logs tail"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"Delete"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["Delete a connector: ",(0,e.jsx)(o.code,{children:"sail conn delete -c [connectorID | connectorAlias]"})]}),"\n"]}),"\n"]}),"\n",(0,e.jsxs)(o.li,{children:[(0,e.jsx)(o.strong,{children:"Linking"}),"\n",(0,e.jsxs)(o.ul,{children:["\n",(0,e.jsxs)(o.li,{children:["Link a customizer to your source instance: ",(0,e.jsx)(o.code,{children:"sail conn customizers link -i [sourceInstanceID] -c [customizerID]"})]}),"\n"]}),"\n"]}),"\n"]})]})}function m(n={}){const{wrapper:o}={...(0,i.a)(),...n.components};return o?(0,e.jsx)(o,{...n,children:(0,e.jsx)(d,{...n})}):d(n)}}}]);