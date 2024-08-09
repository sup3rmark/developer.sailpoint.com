"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[46492],{507858:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=t(785893),n=t(511151);const s={id:"plugin-xml-artifacts",title:"XML Artifacts",pagination_label:"XML Artifacts",sidebar_label:"XML Artifacts",sidebar_position:6,sidebar_class_name:"plugin_developer_guide_xml_artifacts",keywords:["plugin"],description:"IdentityIQ Plugin XML Artifacts",slug:"/iiq/plugin-developer-guide/xml-artifacts",tags:["plugin","guide","identityiq"]},r="XML Artifacts",l={id:"iiq/plugin-developer-guide/chapter-6/plugin-xml-artifacts",title:"XML Artifacts",description:"IdentityIQ Plugin XML Artifacts",source:"@site/docs/iiq/plugin-developer-guide/chapter-6/index.md",sourceDirName:"iiq/plugin-developer-guide/chapter-6",slug:"/iiq/plugin-developer-guide/xml-artifacts",permalink:"/docs/iiq/plugin-developer-guide/xml-artifacts",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/iiq/plugin-developer-guide/chapter-6/index.md",tags:[{inline:!0,label:"plugin",permalink:"/docs/tags/plugin"},{inline:!0,label:"guide",permalink:"/docs/tags/guide"},{inline:!0,label:"identityiq",permalink:"/docs/tags/identityiq"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,sidebarPosition:6,frontMatter:{id:"plugin-xml-artifacts",title:"XML Artifacts",pagination_label:"XML Artifacts",sidebar_label:"XML Artifacts",sidebar_position:6,sidebar_class_name:"plugin_developer_guide_xml_artifacts",keywords:["plugin"],description:"IdentityIQ Plugin XML Artifacts",slug:"/iiq/plugin-developer-guide/xml-artifacts",tags:["plugin","guide","identityiq"]},sidebar:"iiqSideBar",previous:{title:"UI Elements",permalink:"/docs/iiq/plugin-developer-guide/ui-elements"},next:{title:"Java Classes - Rest Resources",permalink:"/docs/iiq/plugin-developer-guide/java-classes-rest-resources"}},o={},d=[];function c(e){const i={a:"a",h1:"h1",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.h1,{id:"xml-artifacts",children:"XML Artifacts"}),"\n",(0,a.jsx)(i.p,{children:"Any IdentityIQ objects required as part of a plugin must be represented in XML artifacts. This can mean something as small as a single new SPRight object, such as the 'ViewTodoPluginIcon', or a complex workflow or rule. The mechanism used to import these artifacts during installation is the same as any other IdentityIQ object import, so the normal import actions are also available: merge, include, execute, logConfig."}),"\n",(0,a.jsx)(i.p,{children:"You can directly develop these XML artifacts in the build folder or in the IdentityIQ UI. You can then export them either by using the console or by copying and pasting them from the build's debug."}),"\n",(0,a.jsx)(i.p,{children:"When you're developing in the UI and then migrating the artifacts to your build folder, it is important to strip out some of the metadata that IdentityIQ attaches to XML objects when they're first created. First and foremost, you should remove the 'id' attribute assigned by 'Hibernate'. Then remove any other hibernate ID value references. For this reason, it is preferable to export the artifacts by using the IdentityIQ console command: './iiq export -clean'"}),"\n",(0,a.jsx)(i.p,{children:"Everything in the 'import' folder is imported - the SailPoint objects can be separated into individual files or combined into a single file. When a plugin is uninstalled, the imported XML artifacts remain in the IdentityIQ database (not deleted), but the .zip archive where the plugin files are loaded from is removed from the 'spt_file_bucket' and 'spt_persisted_file' tables."}),"\n",(0,a.jsx)(i.p,{children:"The development of regular IdentityIQ objects is beyond the scope of this document, but many helpful resources are available:"}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"https://community.sailpoint.com/space/2068",children:"Technical White Papers - IdentityIQ"})}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.a,{href:"https://community.sailpoint.com/docs/DOC-3375",children:"BeanShell Developer's Guide for IdentityIQ"})})]})}function p(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}}}]);