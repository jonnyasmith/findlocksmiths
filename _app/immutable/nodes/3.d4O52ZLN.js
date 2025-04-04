import{r as R,l as I}from"../chunks/Bp_RNkWT.js";import{e as k,C as q,a as z}from"../chunks/Dz3fglkd.js";import{H as E}from"../chunks/CL6cCvDU.js";import{t as y,e as M,s as b,a as g,h as N,c as T}from"../chunks/BEgkN9Jo.js";import{p as j,c as i,f as J,n as U,t as $,y as c,r,o as m,q as D,a as F}from"../chunks/BmXPhzds.js";import{b as A,c as L,i as O}from"../chunks/yneCIm_V.js";import{h as G}from"../chunks/Bkz4JHAC.js";import"../chunks/Bj0Z-XWL.js";import{C as K}from"../chunks/Cd8sTQsh.js";import{C as Q,a as V}from"../chunks/D8ShjVb2.js";import{c as W,B as X}from"../chunks/Cd341k5Y.js";import{p as S}from"../chunks/DQafQRsJ.js";import{g as Y}from"../chunks/LbXtNxYT.js";const Z=()=>R.map(n=>({region:n.slug})),ee=({params:n})=>{const e=n.region,t=R.find(a=>a.slug===e);if(!t)throw k(404,"Region not found");const f=I.filter(a=>a.region.name===t.name),l=R.filter(a=>a.slug!==t.slug),d=[{label:"Home",href:"/",icon:E},{label:t.name}];return{region:t,localities:f,otherRegions:l,breadcrumbs:d,title:`${t.name} Local Business Directory`,description:`Browse businesses in ${t.name}`}},be=Object.freeze(Object.defineProperty({__proto__:null,entries:Z,load:ee},Symbol.toStringTag,{value:"Module"}));var te=y('<p class="text-sm text-muted-foreground"> </p>'),re=y("<!> <!>",1),ae=y('<a class="block"><!></a>');function se(n,e){j(e,!0);var t=ae(),f=i(t);const l=D(()=>W("h-full transition-all duration-300","hover:-translate-y-1 hover:border-primary hover:shadow-xl"));Q(f,{get class(){return m(l)},children:(d,a)=>{var _=re(),v=J(_);q(v,{class:"px-6 pb-2 pt-6",children:(u,h)=>{z(u,{class:"text-xl transition-colors hover:text-primary",children:(s,C)=>{U();var p=M();$(()=>b(p,e.title)),g(s,p)},$$slots:{default:!0}})},$$slots:{default:!0}});var B=c(v,2);V(B,{class:"px-6 pb-6",children:(u,h)=>{var s=te(),C=i(s,!0);r(s),$(()=>b(C,e.subtitle)),g(u,s)},$$slots:{default:!0}}),g(d,_)},$$slots:{default:!0}}),r(t),$(()=>A(t,"href",e.href)),g(n,t),F()}var oe=y('<section class="container"><div class="mb-12 text-center"><h1 class="mb-3 text-4xl font-bold text-foreground"> </h1> <p class="mx-auto max-w-2xl text-xl text-muted-foreground"> </p></div> <!> <div class="mb-10"><h2 class="mb-6 text-2xl font-semibold text-foreground"> </h2> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></div></div> <div><h2 class="mb-4 text-2xl font-semibold text-foreground">Browse Other States</h2> <div class="grid grid-cols-3 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"></div></div></section>');function _e(n,e){j(e,!0);const t=[{name:"Home",url:new URL("/",S.url.href).href},{name:e.data.region.name,url:S.url.href}],f=JSON.stringify(Y(t));var l=oe();N(x=>{var o=T(),w=J(o);G(w,()=>`<script type="application/ld+json">${f}<\/script>`),g(x,o)});var d=i(l),a=i(d),_=i(a);r(a);var v=c(a,2),B=i(v);r(v),r(d);var u=c(d,2);X(u,{});var h=c(u,2),s=i(h),C=i(s);r(s);var p=c(s,2);L(p,21,()=>e.data.localities,O,(x,o)=>{const w=D(()=>`Explore businesses in ${m(o).name}`);se(x,{get title(){return m(o).name},get href(){return`/${e.data.region.slug??""}/${m(o).slug??""}`},get subtitle(){return m(w)}})}),r(p),r(h);var P=c(h,2),H=c(i(P),2);L(H,21,()=>e.data.otherRegions,O,(x,o)=>{K(x,{get label(){return m(o).name},get href(){return`/${m(o).slug??""}`}})}),r(H),r(P),r(l),$(()=>{b(_,`${e.data.region.name??""} Business Directory`),b(B,`Find and explore the best local businesses in ${e.data.region.name??""}`),b(C,`Cities in ${e.data.region.name??""}`)}),g(n,l),F()}export{_e as component,be as universal};
