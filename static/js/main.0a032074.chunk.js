(this.webpackJsonpemployee_directory_react=this.webpackJsonpemployee_directory_react||[]).push([[0],{13:function(e,a){},16:function(e,a,t){e.exports=t(40)},21:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(21),t(2)),s=t(15),i=function(e){var a=e.users;return r.a.createElement("tbody",null,void 0!==a[0]&&void 0!==a[0].name?a.map((function(e){var a=e.login,t=e.name,n=e.picture,l=e.phone,c=e.email,o=e.dob;return r.a.createElement("tr",{key:a.uuid},r.a.createElement("td",{"data-th":"Image",className:"align-middle"},r.a.createElement("img",{src:n.medium,alt:"profile image for "+t.first+" "+t.last,className:"img-responsive"})),r.a.createElement("td",{"data-th":"Name",className:"name-cell align-middle"},t.first," ",t.last),r.a.createElement("td",{"data-th":"Phone",className:"align-middle"},l),r.a.createElement("td",{"data-th":"Email",className:"align-middle"},r.a.createElement("a",{href:"mailto:"+c,target:"__blank"},c)),r.a.createElement("td",{"data-th":"DOB",className:"align-middle"},function(e){var a=e.split("-"),t=a[0];return[a[1],a[2].split("T")[0],t].join("-")}(o.date)))})):r.a.createElement(r.a.Fragment,null))},d=r.a.createContext({}),m=function(e){e.headings;var a=e.users,t=(e.handleSort,Object(n.useContext)(d));return r.a.createElement("div",{className:"datatable mt-5"},r.a.createElement("table",{id:"table",className:"table table-striped table-hover table-condensed"},r.a.createElement("thead",null,r.a.createElement("tr",null,t.developerState.headings.map((function(e){var a=e.name,n=e.width;return r.a.createElement("th",{className:"col",key:a,style:{width:n},onClick:function(){t.handleSort(a)}},a,r.a.createElement("span",{className:"pointer"}))})))),r.a.createElement(i,{users:a})))},u=t(13),v=t.n(u);var f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},r.a.createElement("span",{className:"collapse navbar-collapse row",id:"navbarNav"})),r.a.createElement("div",{className:"collapse navbar-collapse row",id:"navbarNav"},r.a.createElement("div",{className:"search-area col-4"},r.a.createElement(v.a,null))))},h=t(14),g=t.n(h),p=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")},E=function(){var e=Object(n.useState)({users:[],order:"descend",filteredUsers:[],headings:[{name:"Image",width:"10%",order:"descend"},{name:"name",width:"10%",order:"descend"},{name:"phone",width:"20%",order:"descend"},{name:"email",width:"20%",order:"descend"},{name:"dob",width:"10%",order:"descend"}]}),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(n.useEffect)((function(){p().then((function(e){console.log(e.data.results),l(Object(o.a)(Object(o.a)({},t),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]),r.a.createElement(d.Provider,{value:{developerState:t,handleSearchChange:function(e){var a=e.target.value,n=t.users.filter((function(e){var t=e.name.first.toLowerCase()+" "+e.name.last.toLowerCase();if(console.log(a,t),-1!==t.indexOf(a.toLowerCase()))return e}));l(Object(o.a)(Object(o.a)({},t),{},{filteredUsers:n}))},handleSort:function(e){var a=t.headings.filter((function(a){return a.name===e})).map((function(e){return e.order})).toString();a="descend"===a?"ascend":"descend";var n=t.filteredUsers.sort((function(t,n){return"ascend"===a?void 0===t[e]?1:void 0===n[e]?-1:"name"===e?t[e].first.localeCompare(n[e].first):"dob"===e?t[e].age-n[e].age:t[e].localeCompare(n[e]):void 0===t[e]?1:void 0===n[e]?-1:"name"===e?n[e].first.localeCompare(t[e].first):"dob"===e?n[e].age-t[e].age:n[e].localeCompare(t[e])})),r=t.headings.map((function(t){return t.order=t.name===e?a:t.order,t}));l(Object(o.a)(Object(o.a)({},t),{},{filteredUsers:n,headings:r}))}}},r.a.createElement(f,null),r.a.createElement("div",{className:"data-area"},t.filteredUsers.length>0?r.a.createElement(m,null):r.a.createElement("div",null)))};var b=function(){return r.a.createElement(E,null)};var N=function(e){var a=e.children;return r.a.createElement("div",{className:"wrapper"},a)};var w=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Employee Directory"))};t(39);var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,null,r.a.createElement(w,null),r.a.createElement(b,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0a032074.chunk.js.map