"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[89575],{717579:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(785893),i=n(511151);const r={id:"go-sdk-search",title:"Search with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Search",sidebar_position:5,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","search"],description:"Learn how to search with the Golang SDK in this guide.",slug:"/tools/sdk/go/search",tags:["SDK","Software Development Kit"]},a=void 0,o={id:"tools/sdk/go/go-sdk-search",title:"Search with the Go SDK",description:"Learn how to search with the Golang SDK in this guide.",source:"@site/docs/tools/sdk/go/search.md",sourceDirName:"tools/sdk/go",slug:"/tools/sdk/go/search",permalink:"/docs/tools/sdk/go/search",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/sdk/go/search.md",tags:[{inline:!0,label:"SDK",permalink:"/docs/tags/sdk"},{inline:!0,label:"Software Development Kit",permalink:"/docs/tags/software-development-kit"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,sidebarPosition:5,frontMatter:{id:"go-sdk-search",title:"Search with the Go SDK",pagination_label:"Go SDK",sidebar_label:"Search",sidebar_position:5,sidebar_class_name:"gosdk",keywords:["go","golang","sdk","search"],description:"Learn how to search with the Golang SDK in this guide.",slug:"/tools/sdk/go/search",tags:["SDK","Software Development Kit"]},sidebar:"openApiSidebar",previous:{title:"Go SDK",permalink:"/docs/tools/sdk/go/paginate"},next:{title:"Go SDK",permalink:"/docs/tools/sdk/go/retries"}},c={},d=[{value:"Paginate search results",id:"paginate-search-results",level:3}];function h(e){const s={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["To try using the ISC ",(0,t.jsx)(s.a,{href:"/docs/api/v3/search-post",children:"search functionality"}),' along with pagination, copy this code into your "sdk.go" file, following the main code:']}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'func getSearchResults(ctx context.Context, apiClient *sailpoint.APIClient) {\n search := v3.NewSearchWithDefaults()\n search.Indices = append(search.Indices, "identities")\n searchString := []byte(`\n {\n "indices": [\n  "identities"\n ],\n "query": {\n  "query": "*"\n },\n    "sort": [\n        "-name"\n    ]\n }\n   `)\n search.UnmarshalJSON(searchString)\n resp, r, err := sailpoint.PaginateSearchApi(ctx, apiClient, *search, 0, 10, 10000)\n if err != nil {\n  fmt.Fprintf(os.Stderr, "Error when calling `PaginateSearchApi``: %v\\n", err)\n  fmt.Fprintf(os.Stderr, "Full HTTP response: %v\\n", r)\n }\n // response from `search`\n for i := 0; i < len(resp); i++ {\n  fmt.Println(resp[i]["name"])\n }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["To run the search, run this command: ",(0,t.jsx)(s.code,{children:"go run sdk.go"})," This example lists all the identities it finds in your tenant."]}),"\n",(0,t.jsx)(s.p,{children:"There are two ways to configure the search:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["You can edit the ",(0,t.jsx)(s.code,{children:"searchString"})," JSON:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",metastring:"showLineNumbers",children:' searchString := []byte(`\n {\n "indices": [\n  "identities"\n ],\n "query": {\n  "query": "*"\n },\n    "sort": [\n        "-name"\n    ]\n }\n   `)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["In this example, changing the ",(0,t.jsx)(s.code,{children:'"indices"'})," on line 3 from ",(0,t.jsx)(s.code,{children:'"identities"'})," to ",(0,t.jsx)(s.code,{children:'"access profiles"'})," makes the search return access profiles instead of identities."]}),"\n",(0,t.jsxs)(s.ol,{start:"2",children:["\n",(0,t.jsxs)(s.li,{children:["You can edit the string at the end of this ",(0,t.jsx)(s.code,{children:"search.Indices"})," line to do the same thing as a shortcut:"]}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:'search.Indices = append(search.Indices, "identities")\n'})}),"\n",(0,t.jsxs)(s.p,{children:["In this example, the ",(0,t.jsx)(s.code,{children:'"identities"'})," string represents an unmarshalled JSON. Changing ",(0,t.jsx)(s.code,{children:'append(search.Indices, "identities")'})," to ",(0,t.jsx)(s.code,{children:'append(search.Indices, "access profiles")'})," does the same thing that editing the ",(0,t.jsx)(s.code,{children:"searchString"})," JSON does."]}),"\n",(0,t.jsx)(s.h3,{id:"paginate-search-results",children:"Paginate search results"}),"\n",(0,t.jsx)(s.p,{children:"The search example includes the syntax you can use to paginate search results. Edit this line to configure the search result pagination:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-go",children:"resp, r, err := sailpoint.PaginateSearchApi(ctx, apiClient, *search, 0, 10, 10000)\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The first value refers to the ",(0,t.jsx)(s.code,{children:"initialOffset"}),", the starting number for the results, the second refers to the ",(0,t.jsx)(s.code,{children:"increment"}),", the number of records per page, and the third refers to the ",(0,t.jsx)(s.code,{children:"limit"}),", the last record that can be returned."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, changing the first number to ",(0,t.jsx)(s.code,{children:"21"}),", the second to ",(0,t.jsx)(s.code,{children:"20"}),", and the third to ",(0,t.jsx)(s.code,{children:"40"})," would configure the search to return records 21 to 40 and then stop."]})]})}function l(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);