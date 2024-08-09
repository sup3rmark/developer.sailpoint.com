"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[984],{638351:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(785893),o=n(511151),s=n(365332),i=n(424455);const r={id:"udk-accounts-list",title:"Implementing the Account List Page",pagination_label:"UDK",sidebar_label:"Account List Page",sidebar_position:2,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/accounts-list",tags:["UI"]},l=void 0,c={id:"tools/ui-development-kit/udk-accounts-list",title:"Implementing the Account List Page",description:"Develop custom user interfaces.",source:"@site/docs/tools/ui-development-kit/accounts-list.mdx",sourceDirName:"tools/ui-development-kit",slug:"/tools/ui-development-kit/accounts-list",permalink:"/docs/tools/ui-development-kit/accounts-list",draft:!1,unlisted:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/docs/tools/ui-development-kit/accounts-list.mdx",tags:[{inline:!0,label:"UI",permalink:"/docs/tags/ui"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1723220013e3,sidebarPosition:2,frontMatter:{id:"udk-accounts-list",title:"Implementing the Account List Page",pagination_label:"UDK",sidebar_label:"Account List Page",sidebar_position:2,sidebar_class_name:"rudk",keywords:["UI","development","kit"],description:"Develop custom user interfaces.",slug:"/tools/ui-development-kit/accounts-list",tags:["UI"]},sidebar:"openApiSidebar",previous:{title:"UDK",permalink:"/docs/tools/ui-development-kit/getting-started"},next:{title:"UDK",permalink:"/docs/tools/ui-development-kit/error-handling"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Get account data",id:"get-account-data",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Sort and filter",id:"sort-and-filter",level:2},{value:"Error Handling",id:"error-handling",level:2},{value:"Discuss",id:"discuss",level:2}];function h(t){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...t.components},{Details:n}=e;return n||function(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(e.p,{children:"This guide will walk you through the process of implementing a new page that lists all the accounts in your tenant. This serves as an example you can use to learn how to implement many different types of custom UI pages."}),"\n",(0,a.jsxs)(e.p,{children:["This guide is a continuation of ",(0,a.jsx)(e.a,{href:"./getting-started",children:"Getting Started"}),". To implement a new page, you must have already created your routes and pages. To learn how to do so, refer to the ",(0,a.jsx)(e.a,{href:"./getting-started#add-route-and-new-page",children:"Add New Route and Page section"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"At the end of this guide you will be able to do the following:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"List all accounts in your tenant"}),"\n",(0,a.jsx)(e.li,{children:"Paginate accounts by page limits of 5, 10, 50, 100, 250"}),"\n",(0,a.jsx)(e.li,{children:"Click through each page of results"}),"\n",(0,a.jsx)(e.li,{children:"View the JSON response of the account from your tenant"}),"\n",(0,a.jsxs)(e.li,{children:["Sort the results, using the sort syntax on the ",(0,a.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/v3/list-accounts",children:"List Accounts endpoint"}),"."]}),"\n",(0,a.jsxs)(e.li,{children:["Filter the results, using the filter syntax on the ",(0,a.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/v3/list-accounts",children:"List Accounts endpoint"}),"."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"get-account-data",children:"Get account data"}),"\n",(0,a.jsxs)(e.p,{children:["The first thing your new page needs to do is get the account data to show. You can implement this by using the ",(0,a.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/v3/list-accounts",children:"List Accounts endpoint"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["To do so, add this logic to the server side of the accounts list page at ",(0,a.jsx)(e.code,{children:"src/routes/accounts/account-list/+page.server.ts"}),":"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"// Import classes needed\nimport {createConfiguration} from '$lib/sailpoint/sdk.js';\nimport type {Account} from 'sailpoint-api-client';\nimport {AccountsApi} from 'sailpoint-api-client';\n\nexport const load = async ({locals}) => {\n  // Create a typescript SDK configuration object using the\n  // baseUrl and access_token pulled from the logged in user.\n  const config = createConfiguration(\n    locals.session!.baseUrl,\n    locals.idnSession!.access_token,\n  );\n  // Initialize the api client for the account api\n  const api = new AccountsApi(config);\n\n  // Call list account with count=true so that we get the header of total accounts back\n  const reportResp = api.listAccounts({count: true});\n\n  const totalCount = new Promise<number>((resolve) => {\n    reportResp.then((response) => {\n      resolve(response.headers['x-total-count']);\n    });\n  });\n\n  const accountData = new Promise<Account[]>((resolve) => {\n    reportResp.then((response) => {\n      console.log(response.data); // Logs out the account response in the console\n      resolve(response.data);\n    });\n  });\n\n  // Return the data to the UI\n  return {accountData, totalCount};\n};\n"})}),"\n",(0,a.jsx)(e.p,{children:"Return to your accounts list page. In your IDE, you will see the response containing the accounts after the page loads."}),"\n",(0,a.jsx)(e.p,{children:"Now that you have your account data, you need to display the data. You can add a table to the UI and display your results."}),"\n",(0,a.jsxs)(e.p,{children:["To do so, add this code to ",(0,a.jsx)(e.code,{children:"src/routes/accounts/account-list/+page.svelte"}),":"]}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:"Show Code"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<script lang="ts">\n\timport Progress from \'$lib/Components/Progress.svelte\';\n\timport {\n\t\tTriggerCodeModal,\n\t\tformatDate\n\t} from \'$lib/Utils.js\';\n\timport { getModalStore } from \'@skeletonlabs/skeleton\';\n\n\texport let data;\n\n\tconst modalStore = getModalStore();\n\n<\/script>\n\n<div class="flex justify-center flex-col align-middle gap-2">\n\t<div class="card p-4">\n\t\t<p class="text-2xl text-center">List of all accounts</p> \x3c!-- Page title --\x3e\n\t</div>\n\t{#await data.accountData}\n\t\t<div class="grid h-full place-content-center p-8">\n\t\t\t<Progress width="w-[100px]" />\n\t\t</div>\n\t{:then accountData}\n    \x3c!-- If there is no account data show a message to the user --\x3e\n\t\t{#if accountData.length === 0} \n\t\t\t<div class="card p-4">\n\t\t\t\t<p class=" text-center text-success-500">No Accounts found</p>\n\t\t\t</div>\n\t\t{:else}\n\t\t\t<div class="table-container">\n\t\t\t\t<table class="table">\n\t\t\t\t\t<thead class="table-head"> \x3c!-- Table headers --\x3e\n\t\t\t\t\t\t<th> Name </th>\n\t\t\t\t\t\t<th> Native Identity </th>\n\t\t\t\t\t\t<th> Source </th>\n\t\t\t\t\t\t<th> Created </th>\n\t\t\t\t\t\t<th> Modified </th>\n\t\t\t\t\t\t<th> Authoritative </th>\n\t\t\t\t\t\t<th> Features </th>\n\t\t\t\t\t\t<th> Has Entitlements </th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody class="table-body">\n\t\t\t\t\t\t{#each accountData as account} \x3c!-- Create a table row for each account --\x3e\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.name}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.nativeIdentity}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.sourceName}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{formatDate(account.created)}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{formatDate(account.modified)}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.authoritative}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.features}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.hasEntitlements}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="flex flex-col justify-center gap-1">\n                                        \x3c!-- Trigger code modal view to see raw account data --\x3e\n\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\ton:click={() => TriggerCodeModal(account, modalStore)}\n\t\t\t\t\t\t\t\t\t\t\tclass="btn btn-sm variant-filled-primary text-sm !text-white"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t{/each}\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t{/if}\n\t{/await}\n</div>\n'})})]}),"\n",(0,a.jsxs)(e.p,{children:["Save the ",(0,a.jsx)(e.code,{children:"+page.svelte"})," file and return to the accounts list page. You will see up to 250 accounts in the table."]}),"\n",(0,a.jsx)(e.h2,{id:"pagination",children:"Pagination"}),"\n",(0,a.jsx)(e.p,{children:"You will likely have more than 250 accounts in your tenant. To handle more than 250 accounts, you must implement pagination on your front end page.\nPagination is the process of paging through your records. With pagination, you can handle 1000 accounts in 4 pages of 250, for example."}),"\n",(0,a.jsx)(e.p,{children:"To implement pagination, add the following code. This code allows you to paginate accounts in groups of 5, 10, 50, 100 and 250, depending on your requirement:"}),"\n",(0,a.jsx)(e.p,{children:"The highlighted portions of the code are the changes made to the previous code to allow pagination."}),"\n","\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.default,{value:"accounts_page",label:"account-list/+page.svelte",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-html",children:'<script lang="ts">\n\t// highlight-next-line\n\timport Paginator from \'$lib/Components/Paginator.svelte\';\n    import Progress from \'$lib/Components/Progress.svelte\';\n\timport {\n\t\tTriggerCodeModal,\n\t\tformatDate,\n\t\t// highlight-start\n        createOnPageChange,\n        createOnAmountChange\n\t\t// highlight-end\n\t} from \'$lib/Utils.js\';\n\timport { getModalStore } from \'@skeletonlabs/skeleton\';\n\n\texport let data;\n\n\tconst modalStore = getModalStore();\n\n\t// highlight-start\n    $: onPageChange = createOnPageChange(\n\t\t{ ...data.params, filters: \'\', sorters: \'\'},\n\t\t\'/accounts/account-list\'\n\t);\n\t$: onAmountChange = createOnAmountChange(\n\t\t{ ...data.params, filters: \'\', sorters: \'\'},\n\t\t\'/accounts/account-list\'\n\t);\n\t// highlight-end\n\n<\/script>\n\n<div class="flex justify-center flex-col align-middle gap-2">\n\t<div class="card p-4">\n\t\t<p class="text-2xl text-center">List of all accounts</p>\n\t</div>\n\t{#await data.accountData}\n\t\t<div class="grid h-full place-content-center p-8">\n\t\t\t<Progress width="w-[100px]" />\n\t\t</div>\n\t{:then accountData}\n\t\x3c!-- highlight-start --\x3e\n        {#await data.totalCount then totalCount}\n            {#if totalCount > 250 || Number(data.params.limit) < totalCount}\n                <div class="card p-4">\n                    <Paginator\n                        {onAmountChange}\n                        {onPageChange}\n                        settings={{\n                            page: Number(data.params.page),\n                            limit: Number(data.params.limit),\n                            size: totalCount,\n                            amounts: [5, 10, 50, 100, 250]\n                        }}\n                        {totalCount}\n                    />\n                </div>\n            {/if}\n        {/await}\n\t\t\x3c!-- highlight-end --\x3e\n\t\t{#if accountData.length === 0}\n\t\t\t<div class="card p-4">\n\t\t\t\t<p class=" text-center text-success-500">No Accounts found</p>\n\t\t\t</div>\n\t\t{:else}\n\t\t\t<div class="table-container">\n\t\t\t\t<table class="table">\n\t\t\t\t\t<thead class="table-head">\n\t\t\t\t\t\t<th> Name </th>\n\t\t\t\t\t\t<th> Native Identity </th>\n\t\t\t\t\t\t<th> Source </th>\n\t\t\t\t\t\t<th> Created </th>\n\t\t\t\t\t\t<th> Modified </th>\n\t\t\t\t\t\t<th> Authoritative </th>\n\t\t\t\t\t\t<th> Features </th>\n\t\t\t\t\t\t<th> Has Entitlements </th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody class="table-body">\n\t\t\t\t\t\t{#each accountData as account}\n\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.name}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.nativeIdentity}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.sourceName}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{formatDate(account.created)}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{formatDate(account.modified)}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.authoritative}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.features}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t{account.hasEntitlements}\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t<div class="flex flex-col justify-center gap-1">\n\t\t\t\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t\t\t\ton:click={() => TriggerCodeModal(account, modalStore)}\n\t\t\t\t\t\t\t\t\t\t\tclass="btn btn-sm variant-filled-primary text-sm !text-white"\n\t\t\t\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t\t\t\tView\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t{/each}\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t{/if}\n\t{/await}\n</div>\n'})})}),(0,a.jsx)(i.default,{value:"accounts_list_server",label:"accounts-list/+page.server.ts",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { createConfiguration } from '$lib/sailpoint/sdk.js';\n// highlight-next-line\nimport { getLimit, getPage } from '$lib/Utils.js';\nimport type { Account } from 'sailpoint-api-client';\nimport { AccountsApi } from 'sailpoint-api-client';\n\nexport const load = async ({ url, locals }) => {\n    const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);\n\tconst api = new AccountsApi(config);\n\n\t// highlight-start\n    const page = getPage(url);\n\tconst limit = getLimit(url);\n\t// highlight-end\n\n\t// highlight-next-line\n    const reportResp = api.listAccounts({count: true, limit: Number(limit), offset: Number(page) * Number(limit)});\n\n\tconst totalCount = new Promise<number>((resolve) => {\n\t\treportResp.then((response) => {\n\t\t\tresolve(response.headers['x-total-count']);\n\t\t});\n\t});\n\n\tconst accountData = new Promise<Account[]>((resolve) => {\n\t\treportResp.then((response) => {\n\t\t\tresolve(response.data);\n\t\t});\n\t});\n\n\t// highlight-next-line\n\treturn { accountData, totalCount, params: {page, limit}};\n};\n\n"})})})]}),"\n",(0,a.jsx)(e.p,{children:"Return to the accounts list page. You will see the paginator at the top of the page. You can now paginate through the accounts in your tenant."}),"\n",(0,a.jsx)(e.h2,{id:"sort-and-filter",children:"Sort and filter"}),"\n",(0,a.jsx)(e.p,{children:"To better view and organize the data displayed in your accounts list page, you may want to implement sorting and filtering.\nSorting is the process of organizing the data. You may want to provide users with a way to sort the data in ascending or descending alphabetical order based on the account name, for example.\nFiltering is the process of limiting the displayed data based on specified details. You may want to provide users with a way to filter the data to only include accounts associated with one source, for example."}),"\n",(0,a.jsx)(e.p,{children:"To implement sorting and filtering, add the following highlighted code. It allows you to sort and filter the accounts in your tenant:"}),"\n",(0,a.jsxs)(e.p,{children:["With this implementation, once a user types in a filter or sorter and clicks the 'Go' button, the UI Development Kit calls the ",(0,a.jsx)(e.code,{children:"onCreateGo"})," function and reloads the page with the new sorters and filters."]}),"\n",(0,a.jsxs)(e.p,{children:["On the server side, the kit uses the ",(0,a.jsx)(e.code,{children:"getFilters"})," and ",(0,a.jsx)(e.code,{children:"getSorters"})," functions to get the filters and sorters from the URL.\nThe kit then passes these functions to the ",(0,a.jsx)(e.a,{href:"https://developer.sailpoint.com/docs/api/v3/list-accounts",children:"List Accounts endpoint"})," to filter and sort the accounts."]}),"\n",(0,a.jsxs)(s.Z,{children:[(0,a.jsx)(i.default,{value:"accounts_page",label:"account-list/+page.svelte",default:!0,children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:'<script lang="ts">\n    import Paginator from \'$lib/Components/Paginator.svelte\';\n    import Progress from \'$lib/Components/Progress.svelte\';\n    import {\n        TriggerCodeModal,\n        formatDate,\n        createOnPageChange,\n        createOnAmountChange,\n\t\t// highlight-next-line\n        createOnGo\n    } from \'$lib/Utils.js\';\n    import { getModalStore } from \'@skeletonlabs/skeleton\';\n\n    export let data;\n\n    const modalStore = getModalStore();\n\n    $: onPageChange = createOnPageChange(\n        { ...data.params, filters, sorters},\n        \'/accounts/account-list\'\n    );\n    $: onAmountChange = createOnAmountChange(\n        { ...data.params, filters, sorters},\n        \'/accounts/account-list\'\n    );\n\t// highlight-start\n    $: onGo = createOnGo(\n\t\t{ ...data.params, filters, sorters },\n\t\t\'/accounts/account-list\'\n\t);\n\n    let filters = data.params.filters || \'\';\n\tlet sorters = data.params.sorters || \'\';\n\t// highlight-end\n<\/script>\n\n<div class="flex justify-center flex-col align-middle gap-2">\n    <div class="card p-4">\n        <p class="text-2xl text-center">List of all accounts</p>\n    </div>\n    {#await data.accountData}\n        <div class="grid h-full place-content-center p-8">\n            <Progress width="w-[100px]" />\n        </div>\n    {:then accountData}\n        {#await data.totalCount then totalCount}\n            {#if totalCount > 250 || Number(data.params.limit) < totalCount}\n                <div class="card p-4">\n                    <Paginator\n                        {onAmountChange}\n\t\t\t\t\t\t// highlight-next-line\n                        {onGo}\n                        {onPageChange}\n                        settings={{\n                            page: Number(data.params.page),\n                            limit: Number(data.params.limit),\n                            size: totalCount,\n                            amounts: [5, 10, 50, 100, 250]\n                        }}\n\t\t\t\t\t\t// highlight-start\n                        bind:sorters\n                        bind:filters\n\t\t\t\t\t\t// highlight-end\n                        {totalCount}\n                    />\n                </div>\n            {/if}\n        {/await}\n        {#if accountData.length === 0}\n            <div class="card p-4">\n                <p class=" text-center text-success-500">No Accounts found</p>\n            </div>\n        {:else}\n            <div class="table-container">\n                <table class="table">\n                    <thead class="table-head">\n                        <th> Name </th>\n                        <th> Native Identity </th>\n                        <th> Source </th>\n                        <th> Created </th>\n                        <th> Modified </th>\n                        <th> Authoritative </th>\n                        <th> Features </th>\n                        <th> Has Entitlements </th>\n                        <th></th>\n                    </thead>\n                    <tbody class="table-body">\n                        {#each accountData as account}\n                            <tr>\n                                <td>\n                                    {account.name}\n                                </td>\n                                <td>\n                                    {account.nativeIdentity}\n                                </td>\n                                <td>\n                                    {account.sourceName}\n                                </td>\n                                <td>\n                                    {formatDate(account.created)}\n                                </td>\n                                <td>\n                                    {formatDate(account.modified)}\n                                </td>\n                                <td>\n                                    {account.authoritative}\n                                </td>\n                                <td>\n                                    {account.features}\n                                </td>\n                                <td>\n                                    {account.hasEntitlements}\n                                </td>\n                                <td>\n                                    <div class="flex flex-col justify-center gap-1">\n                                        <button\n                                            on:click={() => TriggerCodeModal(account, modalStore)}\n                                            class="btn btn-sm variant-filled-primary text-sm !text-white"\n                                        >\n                                            View\n                                        </button>\n                                    </div>\n                                </td>\n                            </tr>\n                        {/each}\n                    </tbody>\n                </table>\n            </div>\n        {/if}\n    {/await}\n</div>\n'})})}),(0,a.jsx)(i.default,{value:"accounts_list_server",label:"accounts-list/+page.server.ts",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { createConfiguration } from '$lib/sailpoint/sdk.js';\n// highlight-next-line\nimport { getFilters, getLimit, getPage, getSorters } from '$lib/Utils.js';\nimport type { Account } from 'sailpoint-api-client';\nimport { AccountsApi } from 'sailpoint-api-client';\n\nexport const load = async ({ url, locals }) => {\n    const config = createConfiguration(locals.session!.baseUrl, locals.idnSession!.access_token);\n    const api = new AccountsApi(config);\n\n    const page = getPage(url);\n    const limit = getLimit(url);\n\t// highlight-start\n    const sorters = getSorters(url);\n    const filters = getFilters(url);\n\t// highlight-end\n\n\t// highlight-next-line\n    const reportResp = api.listAccounts({count: true, sorters: sorters, filters: filters, limit: Number(limit), offset: Number(page) * Number(limit)});\n\n    const totalCount = new Promise<number>((resolve) => {\n        reportResp.then((response) => {\n            resolve(response.headers['x-total-count']);\n        });\n    });\n\n    const accountData = new Promise<Account[]>((resolve) => {\n        reportResp.then((response) => {\n            resolve(response.data);\n        });\n    });\n\n\t// highlight-next-line\n    return { accountData, totalCount, params: {page, limit, sorters, filters}};\n};\n"})})})]}),"\n",(0,a.jsx)(e.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,a.jsx)(e.p,{children:"You have now implemented a new page that lists all the accounts in your tenant, and you can now paginate, sort and filter the accounts in your tenant."}),"\n",(0,a.jsxs)(e.p,{children:["Ideally, everything in your custom UIs will work smoothly, but you will likely encounter errors at some point when you're implementing a page. If you provide an invalid filter or sorter, the list accounts endpoint will return a 400 error, for example.\nYou can handle this error by adding a ",(0,a.jsx)(e.code,{children:"try catch"})," block to the server side of the accounts list page."]}),"\n",(0,a.jsxs)(e.p,{children:["To learn more about handling errors in your UI, refer to ",(0,a.jsx)(e.a,{href:"./error-handling",children:"Error Handling"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"discuss",children:"Discuss"}),"\n",(0,a.jsx)(e.p,{children:"The most valuable resource for ISC developers is the SailPoint Developer Community itself, where ISC users and experts all over the world come together to ask questions and provide solutions."}),"\n",(0,a.jsxs)(e.p,{children:["To learn more about the ISC UI Development Kit and discuss it with SailPoint Developer Community members, go to the ",(0,a.jsx)(e.a,{href:"https://developer.sailpoint.com/discuss/c/identity-security-cloud/6",children:"SailPoint Developer Community Forum"}),"."]})]})}function p(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},365332:(t,e,n)=>{n.d(e,{Z:()=>w});var a=n(667294),o=n(490512),s=n(8757),i=n(873276),r=n(254939);const l={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var c=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(t,e,n)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,f=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&m(t,n,e[n]);if(h)for(var n of h(e))g.call(e,n)&&m(t,n,e[n]);return t},v=(t,e)=>d(t,u(e));function x({className:t,block:e,selectedValue:n,selectValue:i,tabValues:r}){const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),u=t=>{const e=t.currentTarget,a=c.indexOf(e),o=r[a].value;o!==n&&(d(e),i(o))},h=t=>{var e,n;let a=null;switch(t.key){case"Enter":u(t);break;case"ArrowRight":{const n=c.indexOf(t.currentTarget)+1;a=null!=(e=c[n])?e:c[0];break}case"ArrowLeft":{const e=c.indexOf(t.currentTarget)-1;a=null!=(n=c[e])?n:c[c.length-1];break}}null==a||a.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":e},t)},r.map((({value:t,label:e,attributes:s})=>a.createElement("li",v(f({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,key:t,ref:t=>c.push(t),onKeyDown:h,onClick:u},s),{className:(0,o.Z)("tabs__item",l.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t})}),null!=e?e:t))))}function b({lazy:t,children:e,selectedValue:n}){const o=(Array.isArray(e)?e:[e]).filter(Boolean);if(t){const t=o.find((t=>t.props.value===n));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function y(t){const e=(0,i.Y)(t);return a.createElement("div",{className:(0,o.Z)("tabs-container",l.tabList)},a.createElement(x,f(f({},e),t)),a.createElement(b,f(f({},e),t)))}function w(t){const e=(0,r.default)();return a.createElement(y,f({key:String(e)},t),(0,i.h)(t.children))}}}]);