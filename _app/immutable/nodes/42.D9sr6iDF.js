import{s as S,z as g,m as V,A as k,a as y,d as H,j as p,h as c,e as $,c as v,g as T,i as h,n as E,t as L,b as D,f as P,k as q,D as B,E as I}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as z,i as A,c as d,b as u,m,t as f,a as _,d as b}from"../chunks/index.BimWP6M-.js";import{g as F,a as C}from"../chunks/spread.CgU5AtxT.js";import{M as G}from"../chunks/mdsvex-components.Bh3NtBew.js";import{p as J,C as K,a as j,r as R}from"../chunks/ClassTable.CGsA8fYh.js";import"../chunks/entry.B6QvyaZ5.js";function N(i){let e,r='<div class="mockup-browser-toolbar"><div class="input border border-base-300">https://daisyui.com</div></div> <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>';return{c(){e=$("div"),e.innerHTML=r,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-sd5d1v"&&(e.innerHTML=r),this.h()},h(){h(e,"class","border mockup-browser border-base-300 w-full")},m(s,a){p(s,e,a)},p:E,d(s){s&&c(e)}}}function O(i){let e,r=`<div class="$$mockup-browser border border-base-300">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input border border-base-300">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 border-t border-base-300">Hello!</div>
</div>`,s,a,o,n;return{c(){e=$("pre"),s=L(r),this.h()},l(t){e=v(t,"PRE",{slot:!0});var l=D(e);s=P(l,r),l.forEach(c),this.h()},h(){h(e,"slot","html")},m(t,l){p(t,e,l),q(e,s),o||(n=B(a=R.call(null,e,{to:i[0]})),o=!0)},p(t,l){a&&I(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&c(e),o=!1,n()}}}function Q(i){let e,r='<div class="mockup-browser-toolbar"><div class="input">https://daisyui.com</div></div> <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>';return{c(){e=$("div"),e.innerHTML=r,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-1qsmpip"&&(e.innerHTML=r),this.h()},h(){h(e,"class","border mockup-browser bg-base-300 w-full")},m(s,a){p(s,e,a)},p:E,d(s){s&&c(e)}}}function U(i){let e,r=`<div class="$$mockup-browser border bg-base-300">
  <div class="$$mockup-browser-toolbar">
    <div class="$$input">https://daisyui.com</div>
  </div>
  <div class="flex justify-center px-4 py-16 bg-base-200">Hello!</div>
</div>`,s,a,o,n;return{c(){e=$("pre"),s=L(r),this.h()},l(t){e=v(t,"PRE",{slot:!0});var l=D(e);s=P(l,r),l.forEach(c),this.h()},h(){h(e,"slot","html")},m(t,l){p(t,e,l),q(e,s),o||(n=B(a=R.call(null,e,{to:i[0]})),o=!0)},p(t,l){a&&I(a.update)&&l&1&&a.update.call(null,{to:t[0]})},d(t){t&&c(e),o=!1,n()}}}function W(i){let e,r,s,a,o,n;return e=new K({props:{data:[{type:"component",class:"mockup-browser",desc:"Container element"},{type:"component",class:"mockup-browser-toolbar",desc:"The toolbar that can include addressbar or other things"}]}}),s=new j({props:{title:"browser mockup with border",$$slots:{html:[O],default:[N]},$$scope:{ctx:i}}}),o=new j({props:{title:"browser mockup with background color",$$slots:{html:[U],default:[Q]},$$scope:{ctx:i}}}),{c(){d(e.$$.fragment),r=y(),d(s.$$.fragment),a=y(),d(o.$$.fragment)},l(t){u(e.$$.fragment,t),r=H(t),u(s.$$.fragment,t),a=H(t),u(o.$$.fragment,t)},m(t,l){m(e,t,l),p(t,r,l),m(s,t,l),p(t,a,l),m(o,t,l),n=!0},p(t,l){const w={};l&5&&(w.$$scope={dirty:l,ctx:t}),s.$set(w);const x={};l&5&&(x.$$scope={dirty:l,ctx:t}),o.$set(x)},i(t){n||(f(e.$$.fragment,t),f(s.$$.fragment,t),f(o.$$.fragment,t),n=!0)},o(t){_(e.$$.fragment,t),_(s.$$.fragment,t),_(o.$$.fragment,t),n=!1},d(t){t&&(c(r),c(a)),b(e,t),b(s,t),b(o,t)}}}function X(i){let e,r;const s=[i[1],M];let a={$$slots:{default:[W]},$$scope:{ctx:i}};for(let o=0;o<s.length;o+=1)a=g(a,s[o]);return e=new G({props:a}),{c(){d(e.$$.fragment)},l(o){u(e.$$.fragment,o)},m(o,n){m(e,o,n),r=!0},p(o,[n]){const t=n&2?F(s,[n&2&&C(o[1]),n&0&&C(M)]):{};n&5&&(t.$$scope={dirty:n,ctx:o}),e.$set(t)},i(o){r||(f(e.$$.fragment,o),r=!0)},o(o){_(e.$$.fragment,o),r=!1},d(o){b(e,o)}}}const M={title:"Browser mockup",desc:"Browser mockup shows a box that looks like a browser window.",published:!0,layout:"components"};function Y(i,e,r){let s;return V(i,J,a=>r(0,s=a)),i.$$set=a=>{r(1,e=g(g({},e),k(a)))},e=k(e),[s,e]}class re extends z{constructor(e){super(),A(this,e,Y,X,S,{})}}export{re as component};
