import{j as a,F as o,a as h,b as e}from"./app-1984cdd7.js";import{N as m}from"./Navbar-23ba0ded.js";function b({global:n,categories:c,results:r,keyword:t}){const s=l=>new Date(l).toLocaleDateString();function d(l){var i=document.createElement("textarea");return i.innerHTML=l,i.value}return a(o,{children:[a(h,{children:[e("title",{children:"Results of "+t}),e("meta",{name:"description",content:"Result of search about "+{keyword:t}})]}),a(m,{categories:c,global:n,children:[a("div",{className:"breadcrumbs",children:[e("div",{className:"page-header d-flex align-items-center",children:e("div",{className:"container position-relative",children:e("div",{className:"row d-flex justify-content-center",children:e("div",{className:"col-lg-6 text-center",children:e("h2",{children:"Resultat de la recherche de "+t})})})})}),e("nav",{children:e("div",{className:"container",children:a("ol",{children:[e("li",{children:e("a",{href:"/",children:"Accueil"})}),e("li",{children:"Resultat de "+t})]})})})]}),e("section",{id:"blog",className:"blog",children:e("div",{className:"container",children:a("div",{className:"row gy-4 posts-list",children:[r.data.map(l=>e("div",{className:"col-xl-4 col-md-6",children:a("article",{children:[e("div",{className:"post-img",children:e("img",{src:"/assets/img/blog/"+l.image,alt:l.title,className:"img-fluid",width:356,height:237.33})}),e("h3",{className:"title",children:e("a",{href:"/articles/"+l.id,children:l.title})}),e("p",{children:l.snippet}),e("div",{className:"d-flex align-items-center",children:e("div",{className:"post-meta",children:e("p",{className:"post-date",children:e("time",{datetime:l.date,children:s(l.date)})})})})]})})),e("div",{className:"btn-toolbar",role:"toolbar","aria-label":"Toolbar with button groups",children:e("div",{className:"btn-group me-2",role:"group",children:r.links.map(l=>{if(l.url!==null)return e("button",{type:"button",className:"btn btn-info",children:e("a",{href:l.url,children:d(l.label)})})})})})]})})})]})]})}export{b as default};