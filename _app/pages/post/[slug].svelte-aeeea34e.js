import{S as t,i as a,s as e,e as s,a as n,t as c,I as o,c as r,g as i,f as h,b as l,d,h as m,k as u,j as p,l as f,n as E,K as v}from"../../chunks/index-1610c520.js";import{p as $}from"../../chunks/stores-286a2a37.js";import{f as j,u as k}from"../../chunks/helpers-2a7bf7cb.js";function I(t){let a,e,v,$,I,b,g,x,y,A,D,L,H,K,R,S;return document.title=a=t[0],{c(){e=s("meta"),$=s("link"),b=n(),g=s("div"),x=s("header"),y=s("h1"),A=c(t[0]),D=n(),L=s("p"),H=c(t[3]),K=n(),R=s("article"),S=c(t[2]),this.h()},l(a){const s=o('[data-svelte="svelte-nwhgs0"]',document.head);e=r(s,"META",{name:!0,content:!0}),$=r(s,"LINK",{rel:!0,href:!0}),s.forEach(i),b=h(a),g=r(a,"DIV",{class:!0});var n=l(g);x=r(n,"HEADER",{class:!0});var c=l(x);y=r(c,"H1",{class:!0});var m=l(y);A=d(m,t[0]),m.forEach(i),D=h(c),L=r(c,"P",{class:!0});var u=l(L);H=d(u,t[3]),u.forEach(i),c.forEach(i),K=h(n),R=r(n,"ARTICLE",{class:!0});var p=l(R);S=d(p,t[2]),p.forEach(i),n.forEach(i),this.h()},h(){m(e,"name","description"),m(e,"content",v=j(t[1])),m($,"rel","canonical"),m($,"href",I=""+(k+t[4].path)),m(y,"class","post-title"),m(L,"class","post-meta"),m(x,"class","post-header"),m(R,"class","post-content"),m(g,"class","post")},m(t,a){u(document.head,e),u(document.head,$),p(t,b,a),p(t,g,a),u(g,x),u(x,y),u(y,A),u(x,D),u(x,L),u(L,H),u(g,K),u(g,R),u(R,S)},p(t,[s]){1&s&&a!==(a=t[0])&&(document.title=a),2&s&&v!==(v=j(t[1]))&&m(e,"content",v),16&s&&I!==(I=""+(k+t[4].path))&&m($,"href",I),1&s&&f(A,t[0]),8&s&&f(H,t[3]),4&s&&f(S,t[2])},i:E,o:E,d(t){i(e),i($),t&&i(b),t&&i(g)}}}function b(t,a,e){let s,n;v(t,$,(t=>e(4,n=t)));let{title:c}=a,{description:o}=a,{content:r}=a,{date:i}=a,{author:h}=a,{meta:l}=a;return t.$$set=t=>{"title"in t&&e(0,c=t.title),"description"in t&&e(1,o=t.description),"content"in t&&e(2,r=t.content),"date"in t&&e(5,i=t.date),"author"in t&&e(6,h=t.author),"meta"in t&&e(7,l=t.meta)},t.$$.update=()=>{var a;224&t.$$.dirty&&e(3,s=[(a=i,a.toLocaleDateString("en",{month:"short",day:"numeric",year:"numeric"})),h,l].filter((t=>t)).join(" • "))},[c,o,r,s,n,i,h,l]}export default class extends t{constructor(t){super(),a(this,t,b,I,e,{title:0,description:1,content:2,date:5,author:6,meta:7})}}
