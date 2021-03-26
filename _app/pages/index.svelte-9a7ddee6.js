var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,s=(e,r,a)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[r]=a,n=(t,n)=>{for(var o in n||(n={}))e.call(n,o)&&s(t,o,n[o]);if(r)for(var o of r(n))a.call(n,o)&&s(t,o,n[o]);return t};import{S as o,i as l,s as i,a as c,e as h,t as m,f as g,c as f,b as u,d,g as p,h as v,j as b,k as $,l as w,p as y,n as k,G as I,H as E,o as j,I as x,q as D,r as P,w as V,x as M,y as O,B as A,J as B}from"../chunks/index-1610c520.js";import{t as S,f as G,d as q,u as C}from"../chunks/helpers-2a7bf7cb.js";function H(t,e,r){const a=t.slice();return a[2]=e[r].slug,a[3]=e[r].hed,a[5]=r,a}function L(t){let e;return{c(){e=m("and")},l(t){e=d(t,"and")},m(t,r){b(t,e,r)},d(t){t&&p(e)}}}function N(t){let e,r,a,s,n,o=t[3]+"",l=t[1](t[5]<t[0].length-1)+"",i=t[5]===t[0].length-1&&L();return{c(){i&&i.c(),e=c(),r=h("a"),a=m(o),n=m(l),this.h()},l(t){i&&i.l(t),e=g(t),r=f(t,"A",{class:!0,href:!0});var s=u(r);a=d(s,o),s.forEach(p),n=d(t,l),this.h()},h(){v(r,"class","post-link"),v(r,"href",s="https://www.bloomberg.com/"+t[2])},m(t,s){i&&i.m(t,s),b(t,e,s),b(t,r,s),$(r,a),b(t,n,s)},p(t,c){t[5]===t[0].length-1?i||(i=L(),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),1&c&&o!==(o=t[3]+"")&&w(a,o),1&c&&s!==(s="https://www.bloomberg.com/"+t[2])&&v(r,"href",s),1&c&&l!==(l=t[1](t[5]<t[0].length-1)+"")&&w(n,l)},d(t){i&&i.d(t),t&&p(e),t&&p(r),t&&p(n)}}}function W(t){let e,r=t[0],a=[];for(let s=0;s<r.length;s+=1)a[s]=N(H(t,r,s));return{c(){for(let t=0;t<a.length;t+=1)a[t].c();e=y()},l(t){for(let e=0;e<a.length;e+=1)a[e].l(t);e=y()},m(t,r){for(let e=0;e<a.length;e+=1)a[e].m(t,r);b(t,e,r)},p(t,[s]){if(3&s){let n;for(r=t[0],n=0;n<r.length;n+=1){const o=H(t,r,n);a[n]?a[n].p(o,s):(a[n]=N(o),a[n].c(),a[n].m(e.parentNode,e))}for(;n<a.length;n+=1)a[n].d(1);a.length=r.length}},i:k,o:k,d(t){I(a,t),t&&p(e)}}}function J(t,e,r){let{graphics:a=[]}=e;return t.$$set=t=>{"graphics"in t&&r(0,a=t.graphics)},[a,t=>t?", ":""]}class K extends o{constructor(t){super(),l(this,t,J,W,i,{graphics:0})}}const{document:T}=B;function X(t,e,r){const a=t.slice();return a[6]=e[r],a}function z(t){let e,r,a,s,n,o,l,i;return{c(){e=h("div"),r=h("a"),a=h("img"),i=c(),this.h()},l(t){e=f(t,"DIV",{class:!0,style:!0});var s=u(e);r=f(s,"A",{class:!0,href:!0,title:!0});var n=u(r);a=f(n,"IMG",{src:!0,alt:!0}),n.forEach(p),i=g(s),s.forEach(p),this.h()},h(){a.src!==(s=t[6]["thumbnail-url"])&&v(a,"src",s),v(a,"alt",n=t[6].title),v(r,"class","post-link"),v(r,"href",o=t[6].url),v(r,"title",l=t[6].title),v(e,"class","column"),E(e,"margin-bottom","1rem")},m(t,s){b(t,e,s),$(e,r),$(r,a),$(e,i)},p(t,e){1&e&&a.src!==(s=t[6]["thumbnail-url"])&&v(a,"src",s),1&e&&n!==(n=t[6].title)&&v(a,"alt",n),1&e&&o!==(o=t[6].url)&&v(r,"href",o),1&e&&l!==(l=t[6].title)&&v(r,"title",l)},d(t){t&&p(e)}}}function F(t){let e,r,a,s,n,o,l,i,w,y,k,A,B,H,L,N,W,J,F,Q,R,U,Y,Z,_,tt,et,rt,at,st,nt,ot;T.title=e=S,B=new K({props:{graphics:t[1]}}),L=new K({props:{graphics:t[2]}}),W=new K({props:{graphics:t[3]}});let lt=t[0],it=[];for(let c=0;c<lt.length;c+=1)it[c]=z(X(t,lt,c));return{c(){r=h("meta"),a=h("link"),s=c(),n=h("div"),o=h("div"),l=h("h6"),i=m("Bloomberg Graphics"),w=c(),y=h("div"),k=h("p"),A=m("My work at Bloomberg is varied and covers everything from publishing infrastructure and\n\t\t\ttemplating to breaking news graphics. I've munged data and created flexible interactive charts\n\t\t\tfor data-driven evergreens: "),j(B.$$.fragment),H=m(". I've worked on\n\t\t\thigh-pressure, high-volume dashboard for events with real-time results "),j(L.$$.fragment),N=m(". I also get to help my fantastic data journalist and reporter colleagues create standalone\n\t\t\tstories such as "),j(W.$$.fragment),J=m("."),F=c(),Q=h("p"),R=h("a"),U=m("See what I've been working on recently"),Y=m("."),Z=c(),_=h("div"),tt=h("div"),et=h("h6"),rt=m("Prior Consulting Work"),at=c(),st=h("div"),nt=h("div");for(let t=0;t<it.length;t+=1)it[t].c();this.h()},l(t){const e=x('[data-svelte="svelte-1cm83qq"]',T.head);r=f(e,"META",{name:!0,content:!0}),a=f(e,"LINK",{rel:!0,href:!0}),e.forEach(p),s=g(t),n=f(t,"DIV",{class:!0,style:!0});var c=u(n);o=f(c,"DIV",{class:!0});var h=u(o);l=f(h,"H6",{style:!0});var m=u(l);i=d(m,"Bloomberg Graphics"),m.forEach(p),h.forEach(p),w=g(c),y=f(c,"DIV",{class:!0});var v=u(y);k=f(v,"P",{});var b=u(k);A=d(b,"My work at Bloomberg is varied and covers everything from publishing infrastructure and\n\t\t\ttemplating to breaking news graphics. I've munged data and created flexible interactive charts\n\t\t\tfor data-driven evergreens: "),D(B.$$.fragment,b),H=d(b,". I've worked on\n\t\t\thigh-pressure, high-volume dashboard for events with real-time results "),D(L.$$.fragment,b),N=d(b,". I also get to help my fantastic data journalist and reporter colleagues create standalone\n\t\t\tstories such as "),D(W.$$.fragment,b),J=d(b,"."),b.forEach(p),F=g(v),Q=f(v,"P",{});var $=u(Q);R=f($,"A",{href:!0});var I=u(R);U=d(I,"See what I've been working on recently"),I.forEach(p),Y=d($,"."),$.forEach(p),v.forEach(p),c.forEach(p),Z=g(t),_=f(t,"DIV",{class:!0,style:!0});var E=u(_);tt=f(E,"DIV",{class:!0});var j=u(tt);et=f(j,"H6",{style:!0});var P=u(et);rt=d(P,"Prior Consulting Work"),P.forEach(p),j.forEach(p),at=g(E),st=f(E,"DIV",{class:!0});var V=u(st);nt=f(V,"DIV",{class:!0});var M=u(nt);for(let r=0;r<it.length;r+=1)it[r].l(M);M.forEach(p),V.forEach(p),E.forEach(p),this.h()},h(){v(r,"name","description"),v(r,"content",G(q)),v(a,"rel","canonical"),v(a,"href",C),E(l,"line-height","1"),v(o,"class","medium-2 medium-offset-1 columns medium-text-right column-label"),v(R,"href","https://www.bloomberg.com/authors/AS07h2XMulM/brittany-harris"),v(y,"class","medium-8 columns end"),v(n,"class","row"),E(n,"margin-bottom","1rem"),E(et,"line-height","1"),v(tt,"class","medium-2 medium-offset-1 columns medium-text-right column-label"),v(nt,"class","row small-up-2 large-up-3"),v(st,"class","medium-8 columns end"),v(_,"class","row"),E(_,"margin-bottom","1rem")},m(t,e){$(T.head,r),$(T.head,a),b(t,s,e),b(t,n,e),$(n,o),$(o,l),$(l,i),$(n,w),$(n,y),$(y,k),$(k,A),P(B,k,null),$(k,H),P(L,k,null),$(k,N),P(W,k,null),$(k,J),$(y,F),$(y,Q),$(Q,R),$(R,U),$(Q,Y),b(t,Z,e),b(t,_,e),$(_,tt),$(tt,et),$(et,rt),$(_,at),$(_,st),$(st,nt);for(let r=0;r<it.length;r+=1)it[r].m(nt,null);ot=!0},p(t,[r]){(!ot||0&r)&&e!==(e=S)&&(T.title=e);const a={};2&r&&(a.graphics=t[1]),B.$set(a);const s={};4&r&&(s.graphics=t[2]),L.$set(s);const n={};if(8&r&&(n.graphics=t[3]),W.$set(n),1&r){let e;for(lt=t[0],e=0;e<lt.length;e+=1){const a=X(t,lt,e);it[e]?it[e].p(a,r):(it[e]=z(a),it[e].c(),it[e].m(nt,null))}for(;e<it.length;e+=1)it[e].d(1);it.length=lt.length}},i(t){ot||(V(B.$$.fragment,t),V(L.$$.fragment,t),V(W.$$.fragment,t),ot=!0)},o(t){M(B.$$.fragment,t),M(L.$$.fragment,t),M(W.$$.fragment,t),ot=!1},d(t){p(r),p(a),t&&p(s),t&&p(n),O(B),O(L),O(W),t&&p(Z),t&&p(_),I(it,t)}}}async function Q({fetch:t}){const[e,r]=await Promise.all([t("/api/graphics.json"),t("/api/work.json")]);return e.ok&&r.ok?{props:n(n({},await e.json()),await r.json())}:{status:Math.min(e.status,r.status),error:new Error("Could not load")}}function R(t,e,r){let a,s,n,o,{graphics:l}=e,{work:i}=e;return A((()=>(document.body.classList.add("--home"),()=>{document.body.classList.remove("--home")}))),t.$$set=t=>{"graphics"in t&&r(4,l=t.graphics),"work"in t&&r(0,i=t.work)},t.$$.update=()=>{16&t.$$.dirty&&r(5,a=l.filter((t=>"1"===t.display))),32&t.$$.dirty&&r(1,s=a.filter((t=>"evergreen"===t.category))),32&t.$$.dirty&&r(2,n=a.filter((t=>"event"===t.category))),32&t.$$.dirty&&r(3,o=a.filter((t=>"story"===t.category)))},[i,s,n,o,l,a]}export default class extends o{constructor(t){super(),l(this,t,R,F,i,{graphics:4,work:0})}}export{Q as load};
