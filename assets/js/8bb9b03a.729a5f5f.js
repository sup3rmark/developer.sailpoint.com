"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[897],{164341:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(785893),o=t(511151),s=t(365332),r=t(424455);const a={id:"python-sdk",title:"Python SDK",pagination_label:"Python SDK",sidebar_label:"Python",sidebar_position:4,sidebar_class_name:"pythonsdk",keywords:["python","sdk"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python",tags:["SDK","Software Development Kit"]},l=void 0,c={id:"tools/sdk/python/python-sdk",title:"Python SDK",description:"Learn how to use the Python SDK in this guide.",source:"@site/docs/tools/sdk/python/index.mdx",sourceDirName:"tools/sdk/python",slug:"/tools/sdk/python",permalink:"/docs/tools/sdk/python",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/python/index.mdx",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"},{inline:!0,label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,sidebarPosition:4,frontMatter:{id:"python-sdk",title:"Python SDK",pagination_label:"Python SDK",sidebar_label:"Python",sidebar_position:4,sidebar_class_name:"pythonsdk",keywords:["python","sdk"],description:"Learn how to use the Python SDK in this guide.",slug:"/tools/sdk/python",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"PowerShell SDK",permalink:"/docs/tools/sdk/powershell/error-handling"},next:{title:"Python SDK",permalink:"/docs/tools/sdk/python/getting-started"}},d={},h=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure",id:"configure",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Example &quot;config.json&quot;",id:"example-configjson",level:4},{value:"Example &quot;config.json&quot;",id:"example-configjson-1",level:4},{value:"Environment variable configuration",id:"environment-variable-configuration",level:3},{value:"Discuss",id:"discuss",level:2},{value:"Getting Started",id:"getting-started",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Read this guide to learn how to use the Python SDK. The Python SDK has some pre-built code examples you can use to learn how to build tools that can interact with Identity Security Cloud."}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsx)(n.p,{children:"You need the following to use the Python SDK:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Python version 3.7 or above. You can download it ",(0,i.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"here"}),". You can use ",(0,i.jsx)(n.code,{children:"python --version"})," to check your version."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Your tenant name in Identity Security Cloud. To learn how to find it, refer to ",(0,i.jsx)(n.a,{href:"/docs/api/getting-started#find-your-tenant-name",children:"Getting Started"}),". The SDK will use this tenant name to connect to your Identity Security Cloud instance."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A PAT with a client secret and ID. To learn how to create one in Identity Security Cloud, refer to ",(0,i.jsx)(n.a,{href:"https://documentation.sailpoint.com/saas/help/common/api_keys.html#generating-a-personal-access-token",children:"Personal Access Tokens"}),". The SDK will use this PAT to authenticate with the SailPoint APIs."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)("summary",{children:["CLI Assisted ",(0,i.jsx)("em",{children:"(Recommended)"})]}),(0,i.jsxs)(n.p,{children:["The SailPoint CLI offers a few commands that will allow you to quickly get started with the Python SDK. To learn how to install and use the SailPoint CLI, refer to ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/idn/tools/cli#get-the-cli",children:"SailPoint CLI"}),"."]}),(0,i.jsx)(n.p,{children:"Once the CLI is installed and configured, run this command to create a new Python project with the Python SDK:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init python python-example\n"})}),(0,i.jsx)(n.p,{children:"Running this command will create the structure for your project:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"|-- python-example\n|   |-- requirements.txt\n|   |-- sdk.py\n"})}),(0,i.jsx)(n.p,{children:"Navigate into your project folder and run this command to install the required dependencies:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),(0,i.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,i.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Manual Installation"}),(0,i.jsx)(n.p,{children:"To begin your Python project, you will need to create a directory for your project."}),(0,i.jsx)(n.p,{children:"To create a project directory, run this command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir python-example\n"})}),(0,i.jsx)(n.p,{children:"Then run this command to change into your project directory:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd python-example\n"})}),(0,i.jsx)(n.p,{children:'To initialize your project and install the SDK, create the "requirements.txt" file with the following line in your project directory:'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"sailpoint >= 1.0.0\n"})}),(0,i.jsx)(n.p,{children:"To install the SDK and its dependencies, run this command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip install -r requirements.txt\n"})}),(0,i.jsxs)(n.p,{children:["The SDK is now installed. To learn how to configure the SDK, refer to the ",(0,i.jsx)(n.a,{href:"#configure",children:"Configure section"}),"."]})]}),"\n",(0,i.jsx)(n.h2,{id:"configure",children:"Configure"}),"\n",(0,i.jsx)(n.p,{children:'You must provide configuration to the SDK so it can authenticate to your SailPoint tenant and make API calls. To do so, you can either use a configuration file, "config.json", or environment variables.'}),"\n",(0,i.jsx)(n.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,i.jsxs)(n.p,{children:['The SDK requires a configuration file to be named "config.json". Within the file, provide these key/value pairs: ',(0,i.jsx)(n.code,{children:"ClientId"}),", ",(0,i.jsx)(n.code,{children:"ClientSecret"}),", ",(0,i.jsx)(n.code,{children:"BaseURL"}),"."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsxs)("summary",{children:["CLI Assisted ",(0,i.jsx)("em",{children:"(Recommended)"})]}),'\nThe SailPoint CLI offers a command to generate the "config.json" file with your currently configured CLI credentials.']}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init config\n"})}),(0,i.jsx)(n.p,{children:'If you have multiple environments configured with the CLI, you can pass an additional parameter to state the environment you wish to create a "config.json" for.'}),(0,i.jsx)(n.p,{children:"To pass an additional parameter that states the environment you want to configure, run this command:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sail sdk init config --env devrel\n"})}),(0,i.jsx)(n.h4,{id:"example-configjson",children:'Example "config.json"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Manual Configuration"}),(0,i.jsxs)(n.p,{children:['Create a file named "config.json", and provide these key/value pairs: ',(0,i.jsx)(n.code,{children:"ClientID"}),", ",(0,i.jsx)(n.code,{children:"ClientSecret"}),", ",(0,i.jsx)(n.code,{children:"BaseUrl"}),"."]}),(0,i.jsx)(n.h4,{id:"example-configjson-1",children:'Example "config.json"'}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "ClientId": "g0567b766b413b22c05c66e75d532f1b",\n  "ClientSecret": "cabd0e950a7230b63c1ff45be33fb22065b382b6251a73c61177a8bb5482fcc7",\n  "BaseURL": "https://[tenant].api.identitynow.com"\n}\n'})})]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Please ensure this file is ignored in your version control system (ex. .gitignore for git)"})}),"\n",(0,i.jsx)(n.h3,{id:"environment-variable-configuration",children:"Environment variable configuration"}),"\n",(0,i.jsx)(n.p,{children:"You can also store your configuration in environment variables."}),"\n",(0,i.jsxs)(n.p,{children:["To get your environment variables to persist across terminal sessions, add these exports to your shell profile, something like ",(0,i.jsx)(n.code,{children:"~/.bash_profile"}),"."]}),"\n","\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(r.default,{value:"linux_mac",label:"Linux/Mac",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export SAIL_BASE_URL=https://[tenant].api.identitynow.com\nexport SAIL_CLIENT_ID=[clientID]\nexport SAIL_CLIENT_SECRET=[clientSecret]\n"})})}),(0,i.jsxs)(r.default,{value:"windows",label:"Windows PowerShell",children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"$env:SAIL_BASE_URL=https://[tenant].api.identitynow.com\n$env:SAIL_CLIENT_ID=[clientID]\n$env:SAIL_CLIENT_SECRET=[clientSecret]\n"})}),(0,i.jsx)(n.p,{children:"To get your environment variables to persist across PowerShell sessions, run these commands instead:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-powershell",children:"[System.Environment]::SetEnvironmentVariable('SAIL_BASE_URL','https://[tenant].api.identitynow.com')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_ID','[clientID]')\n[System.Environment]::SetEnvironmentVariable('SAIL_CLIENT_SECRET','[clientSecret]')\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"discuss",children:"Discuss"}),"\n",(0,i.jsxs)(n.p,{children:["You can use this SDK to build new tools that extend your Identity Security Cloud platform and improve experiences across your organization. Use this guide to get started, and if you have questions, don't hesitate to reach out on the SailPoint Developer Community forum at ",(0,i.jsx)(n.a,{href:"https://developer.sailpoint.com/discuss",children:"https://developer.sailpoint.com/discuss"}),"!"]}),"\n",(0,i.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,i.jsxs)(n.p,{children:["To get started using the SDK, refer to the ",(0,i.jsx)(n.a,{href:"/docs/tools/sdk/python/getting-started",children:"Getting Started Guide"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},365332:(e,n,t)=>{t.d(n,{Z:()=>v});var i=t(667294),o=t(490512),s=t(8757),r=t(873276),a=t(254939);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=Object.defineProperty,d=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,x=(e,n,t)=>n in e?c(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&x(e,t,n[t]);if(u)for(var t of u(n))m.call(n,t)&&x(e,t,n[t]);return e},f=(e,n)=>d(e,h(n));function j({className:e,block:n,selectedValue:t,selectValue:r,tabValues:a}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),h=e=>{const n=e.currentTarget,i=c.indexOf(n),o=a[i].value;o!==t&&(d(n),r(o))},u=e=>{var n,t;let i=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;i=null!=(n=c[t])?n:c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;i=null!=(t=c[n])?t:c[c.length-1];break}}null==i||i.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},e)},a.map((({value:e,label:n,attributes:s})=>i.createElement("li",f(g({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,key:e,ref:e=>c.push(e),onKeyDown:u,onClick:h},s),{className:(0,o.Z)("tabs__item",l.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===e})}),null!=n?n:e))))}function y({lazy:e,children:n,selectedValue:t}){const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=o.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function b(e){const n=(0,r.Y)(e);return i.createElement("div",{className:(0,o.Z)("tabs-container",l.tabList)},i.createElement(j,g(g({},n),e)),i.createElement(y,g(g({},n),e)))}function v(e){const n=(0,a.default)();return i.createElement(b,g({key:String(n)},e),(0,r.h)(e.children))}}}]);