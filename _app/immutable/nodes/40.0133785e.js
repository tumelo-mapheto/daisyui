import{s as W,N as g,z as q,S as k,a as y,c as H,i as p,d as c,f as h,g as b,A as E,j as v,y as T,l as L,h as P,m as S,x as D,X as I,E as R}from"../chunks/scheduler.5afb8bf4.js";import{S as z,i as A,b as u,d as m,m as d,a as f,t as _,e as $}from"../chunks/index.2536167e.js";import{g as N,a as j}from"../chunks/spread.8a54911c.js";import{M as X,p as B,C as F,a as C,r as V}from"../chunks/ClassTable.7f1e3387.js";function G(i){let e,l='<div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>';return{c(){e=h("div"),e.innerHTML=l,this.h()},l(s){e=b(s,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-d9jmkr"&&(e.innerHTML=l),this.h()},h(){v(e,"class","border mockup-window border-base-300 w-full")},m(s,o){p(s,e,o)},p:T,d(s){s&&c(e)}}}function J(i){let e,l=`<div class="$$mockup-window border border-base-300">
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`,s,o,a,r;return{c(){e=h("pre"),s=L(l),this.h()},l(t){e=b(t,"PRE",{slot:!0});var n=P(e);s=S(n,l),n.forEach(c),this.h()},h(){v(e,"slot","html")},m(t,n){p(t,e,n),D(e,s),a||(r=I(o=V.call(null,e,{to:i[0]})),a=!0)},p(t,n){o&&R(o.update)&&n&1&&o.update.call(null,{to:t[0]})},d(t){t&&c(e),a=!1,r()}}}function K(i){let e,l='<div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>';return{c(){e=h("div"),e.innerHTML=l,this.h()},l(s){e=b(s,"DIV",{class:!0,"data-svelte-h":!0}),E(e)!=="svelte-41p9od"&&(e.innerHTML=l),this.h()},h(){v(e,"class","border mockup-window bg-base-300 w-full")},m(s,o){p(s,e,o)},p:T,d(s){s&&c(e)}}}function O(i){let e,l=`<div class="$$mockup-window border bg-base-300">
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`,s,o,a,r;return{c(){e=h("pre"),s=L(l),this.h()},l(t){e=b(t,"PRE",{slot:!0});var n=P(e);s=S(n,l),n.forEach(c),this.h()},h(){v(e,"slot","html")},m(t,n){p(t,e,n),D(e,s),a||(r=I(o=V.call(null,e,{to:i[0]})),a=!0)},p(t,n){o&&R(o.update)&&n&1&&o.update.call(null,{to:t[0]})},d(t){t&&c(e),a=!1,r()}}}function Q(i){let e,l,s,o,a,r;return e=new F({props:{data:[{type:"component",class:"mockup-window",desc:"Container element"}]}}),s=new C({props:{title:"window mockup with border",$$slots:{html:[J],default:[G]},$$scope:{ctx:i}}}),a=new C({props:{title:"window mockup with background color",$$slots:{html:[O],default:[K]},$$scope:{ctx:i}}}),{c(){u(e.$$.fragment),l=y(),u(s.$$.fragment),o=y(),u(a.$$.fragment)},l(t){m(e.$$.fragment,t),l=H(t),m(s.$$.fragment,t),o=H(t),m(a.$$.fragment,t)},m(t,n){d(e,t,n),p(t,l,n),d(s,t,n),p(t,o,n),d(a,t,n),r=!0},p(t,n){const w={};n&5&&(w.$$scope={dirty:n,ctx:t}),s.$set(w);const x={};n&5&&(x.$$scope={dirty:n,ctx:t}),a.$set(x)},i(t){r||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(a.$$.fragment,t),r=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(a.$$.fragment,t),r=!1},d(t){t&&(c(l),c(o)),$(e,t),$(s,t),$(a,t)}}}function U(i){let e,l;const s=[i[1],M];let o={$$slots:{default:[Q]},$$scope:{ctx:i}};for(let a=0;a<s.length;a+=1)o=g(o,s[a]);return e=new X({props:o}),{c(){u(e.$$.fragment)},l(a){m(e.$$.fragment,a)},m(a,r){d(e,a,r),l=!0},p(a,[r]){const t=r&2?N(s,[r&2&&j(a[1]),r&0&&j(M)]):{};r&5&&(t.$$scope={dirty:r,ctx:a}),e.$set(t)},i(a){l||(f(e.$$.fragment,a),l=!0)},o(a){_(e.$$.fragment,a),l=!1},d(a){$(e,a)}}}const M={title:"Window mockup",desc:"Window mockup shows a box that looks like an operating system window.",published:!0,layout:"components"};function Y(i,e,l){let s;return q(i,B,o=>l(0,s=o)),i.$$set=o=>{l(1,e=g(g({},e),k(o)))},e=k(e),[s,e]}class ae extends z{constructor(e){super(),A(this,e,Y,U,W,{})}}export{ae as component};
