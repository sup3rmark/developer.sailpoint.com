"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64986],{420560:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(785893),n=r(511151),c=r(841282),i=r(476828);const s={id:"requestable-objects",title:"Requestable Objects",description:"Requestable Objects",custom_edit_url:null},o=void 0,l={id:"api/v2024/requestable-objects",title:"Requestable Objects",description:"Requestable Objects",source:"@site/docs/api/v2024/requestable-objects.tag.mdx",sourceDirName:"api/v2024",slug:"/api/v2024/requestable-objects",permalink:"/docs/api/v2024/requestable-objects",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"requestable-objects",title:"Requestable Objects",description:"Requestable Objects",custom_edit_url:null},sidebar:"isc_2024_sidebar",previous:{title:"Get Report File",permalink:"/docs/api/v2024/get-report"},next:{title:"Requestable Objects List",permalink:"/docs/api/v2024/list-requestable-objects"}},d={},u=[];function m(e){const t={a:"a",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Use this API to implement requestable object functionality.\nWith this functionality in place, administrators can determine which access items can be requested with the ",(0,a.jsx)(t.a,{href:"https://developer.sailpoint.com/docs/api/v3/access-requests/",children:"Access Request APIs"}),", along with their statuses.\nThis can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available."]}),"\n","\n",(0,a.jsx)(c.Z,{items:(0,i.jA)().items})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},841282:(e,t,r)=>{r.d(t,{Z:()=>O});var a=r(667294),n=r(490512),c=r(476828),i=r(370393),s=r(585597),o=r(935096),l=r(633084),d=r(555199);const u={cardContainer:"cardContainer_S8oU",cardTitle:"cardTitle_HoSo",cardDescription:"cardDescription_c27F",docCardIcon:"docCardIcon_elTJ"};var m=r(799603),p=r(921702);function b({href:e,children:t}){return a.createElement(i.Z,{href:e,className:(0,n.Z)("card padding--lg",u.cardContainer)},t)}function h({href:e,icon:t,title:r,description:c}){return a.createElement(b,{href:e},a.createElement(d.default,{as:"h2",className:(0,n.Z)("text--truncate",u.cardTitle),title:r},t," ",r),c&&a.createElement("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:c},c))}function f({item:e}){var t;const r=(0,c.LM)(e),n=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?a.createElement(h,{href:r,icon:a.createElement(m.G,{icon:p.cC_,className:u.docCardIcon}),title:e.label,description:null!=(t=e.description)?t:n(e.items.length)}):null}function v({item:e}){var t,r;const n=(0,o.Z)(e.href)?a.createElement(m.G,{icon:p.FL8,className:u.docCardIcon}):a.createElement(m.G,{icon:p.wlW,className:u.docCardIcon}),i=(0,c.xz)(null!=(t=e.docId)?t:void 0);return a.createElement(h,{href:e.href,icon:n,title:e.label,description:(null!=(r=e.description)?r:"<Heading"!=(null==i?void 0:i.description)&&"<span"!=(null==i?void 0:i.description))?null==i?void 0:i.description:e.label})}function j({item:e}){switch(e.type){case"link":return a.createElement(v,{item:e});case"category":return a.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var g=Object.defineProperty,y=Object.getOwnPropertySymbols,q=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,E=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,_=(e,t)=>{for(var r in t||(t={}))q.call(t,r)&&E(e,r,t[r]);if(y)for(var r of y(t))w.call(t,r)&&E(e,r,t[r]);return e};function N({className:e}){const t=(0,c.jA)();return a.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:r}=e;if(!t)return a.createElement(N,_({},e));const i=(0,c.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(j,{item:e})))))}}}]);