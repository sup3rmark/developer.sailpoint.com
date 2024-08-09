"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77125],{936211:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(785893),c=n(511151),r=n(841282),i=n(476828);const o={id:"account-aggregations",title:"Account Aggregations",description:"Account Aggregations",custom_edit_url:null},s=void 0,l={id:"api/beta/account-aggregations",title:"Account Aggregations",description:"Account Aggregations",source:"@site/docs/api/beta/account-aggregations.tag.mdx",sourceDirName:"api/beta",slug:"/api/beta/account-aggregations",permalink:"/docs/api/beta/account-aggregations",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"account-aggregations",title:"Account Aggregations",description:"Account Aggregations",custom_edit_url:null},sidebar:"isc_beta_sidebar",previous:{title:"Get Account Activity",permalink:"/docs/api/beta/get-account-activity"},next:{title:"In-progress Account Aggregation status",permalink:"/docs/api/beta/get-account-aggregation-status"}},d={},u=[];function g(t){const e={a:"a",p:"p",...(0,c.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"Use this API to implement account aggregation progress tracking functionality.\nWith this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details."}),"\n",(0,a.jsx)(e.p,{children:"An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud."}),"\n",(0,a.jsx)(e.p,{children:"Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.\nTo view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.\nIn Account Aggregation, administrators can view the account aggregations' statuses and details in the Account Activity Log."}),"\n",(0,a.jsxs)(e.p,{children:["Refer to ",(0,a.jsx)(e.a,{href:"https://documentation.sailpoint.com/saas/help/accounts/loading_data.html",children:"Loading Account Data"})," for more information about account aggregations."]}),"\n","\n",(0,a.jsx)(r.Z,{items:(0,i.jA)().items})]})}function m(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(g,{...t})}):g(t)}},841282:(t,e,n)=>{n.d(e,{Z:()=>x});var a=n(667294),c=n(490512),r=n(476828),i=n(370393),o=n(585597),s=n(935096),l=n(633084),d=n(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var g=n(799603),m=n(921702);function p({href:t,children:e}){return a.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer)},e)}function h({href:t,icon:e,title:n,description:r}){return a.createElement(p,{href:t},a.createElement(d.default,{as:"h2",className:(0,c.Z)("text--truncate",u.cardTitle),title:n},e," ",n),r&&a.createElement("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:r},r))}function f({item:t}){var e;const n=(0,r.LM)(t),c=function(){const{selectMessage:t}=(0,o.c)();return e=>t(e,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))}();return n?a.createElement(h,{href:n,icon:a.createElement(g.G,{icon:m.cC_,className:u.docCardIcon}),title:t.label,description:null!=(e=t.description)?e:c(t.items.length)}):null}function v({item:t}){var e,n;const c=(0,s.Z)(t.href)?a.createElement(g.G,{icon:m.FL8,className:u.docCardIcon}):a.createElement(g.G,{icon:m.wlW,className:u.docCardIcon}),i=(0,r.xz)(null!=(e=t.docId)?e:void 0);return a.createElement(h,{href:t.href,icon:c,title:t.label,description:(null!=(n=t.description)?n:"<Heading"!=(null==i?void 0:i.description)&&"<span"!=(null==i?void 0:i.description))?null==i?void 0:i.description:t.label})}function y({item:t}){switch(t.type){case"link":return a.createElement(v,{item:t});case"category":return a.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}var A=Object.defineProperty,b=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,C=(t,e,n)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,_=(t,e)=>{for(var n in e||(e={}))w.call(e,n)&&C(t,n,e[n]);if(b)for(var n of b(e))E.call(e,n)&&C(t,n,e[n]);return t};function j({className:t}){const e=(0,r.jA)();return a.createElement(x,{items:e.items,className:t})}function x(t){const{items:e,className:n}=t;if(!e)return a.createElement(j,_({},t));const i=(0,r.MN)(e);return a.createElement("section",{className:(0,c.Z)("row",n)},i.map(((t,e)=>a.createElement("article",{key:e,className:"col col--6 margin-bottom--lg"},a.createElement(y,{item:t})))))}}}]);