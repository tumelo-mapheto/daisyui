import{s as de,N as te,z as ce,S as se,a as v,f as h,H as pe,K as re,c as $,g as f,A as P,h as g,F as ue,d,L as ne,j as u,i as m,x as M,y as X,l as G,m as Q,X as U,E as W}from"../chunks/scheduler.5afb8bf4.js";import{S as me,i as he,b as E,d as j,m as C,a as D,t as L,e as N}from"../chunks/index.2536167e.js";import{g as fe,a as oe}from"../chunks/spread.8a54911c.js";import{M as be,p as we,C as ve,a as K,r as Z}from"../chunks/ClassTable.7f1e3387.js";import{T as $e}from"../chunks/Translate.b365cdfc.js";function ge(p){let e,n='<input id="my-drawer" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-h8sttv"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function _e(p){let e,n=`<div class="$$drawer">
  <input id="my-drawer" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer" class="$$btn $$btn-primary $$drawer-button">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
      
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function xe(p){let e,n='<input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label></div> <div class="drawer-side h-full absolute"><label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-648v18"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer lg:drawer-open h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function ye(p){let e,n=`<div class="$$drawer lg:$$drawer-open">
  <input id="my-drawer-2" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content flex flex-col items-center justify-center">
    <!-- Page content here -->
    <label for="my-drawer-2" class="$$btn $$btn-primary $$drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-2" aria-label="close sidebar" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function ke(p){let e,n='<input id="my-drawer-3" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col drawer-content"><div class="w-full navbar bg-base-300"><div class="flex-none lg:hidden"><label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label></div> <div class="flex-1 px-2 mx-2">Navbar Title</div> <div class="flex-none hidden lg:block"><ul class="menu menu-horizontal"><li><a>Navbar Item 1</a></li> <li><a>Navbar Item 2</a></li></ul></div></div> <div class="flex justify-center items-center flex-grow">Content</div></div> <div class="drawer-side h-full absolute"><label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="p-4 menu w-60 md:w-80 min-h-full bg-base-200"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-1en9eu0"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function Ie(p){let e,n=`<div class="$$drawer">
  <input id="my-drawer-3" type="checkbox" class="$$drawer-toggle" /> 
  <div class="$$drawer-content flex flex-col">
    <!-- Navbar -->
    <div class="w-full $$navbar bg-base-300">
      <div class="flex-none lg:hidden">
        <label for="my-drawer-3" aria-label="open sidebar" class="$$btn $$btn-square $$btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <div class="flex-1 px-2 mx-2">Navbar Title</div>
      <div class="flex-none hidden lg:block">
        <ul class="$$menu $$menu-horizontal">
          <!-- Navbar menu content here -->
          <li><a>Navbar Item 1</a></li>
          <li><a>Navbar Item 2</a></li>
        </ul>
      </div>
    </div>
    <!-- Page content here -->
    Content
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="$$drawer-overlay"></label> 
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function Se(p){let e,n='<input id="my-drawer-4" type="checkbox" class="drawer-toggle"/> <div class="flex flex-col items-center justify-center drawer-content"><label for="my-drawer-4" class="btn btn-primary drawer-button">Open drawer</label></div> <div class="drawer-side h-full absolute ml-[-54rem] w-[stretch]"><label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label> <ul class="menu p-4 w-60 md:w-80 min-h-full bg-base-200 text-base-content"><li><a>Sidebar Item 1</a></li> <li><a>Sidebar Item 2</a></li></ul></div>';return{c(){e=h("div"),e.innerHTML=n,this.h()},l(a){e=f(a,"DIV",{class:!0,"data-svelte-h":!0}),P(e)!=="svelte-helxmg"&&(e.innerHTML=n),this.h()},h(){u(e,"class","drawer drawer-end h-56 rounded overflow-hidden")},m(a,s){m(a,e,s)},p:X,d(a){a&&d(e)}}}function Me(p){let e,n=`<div class="$$drawer $$drawer-end">
  <input id="my-drawer-4" type="checkbox" class="$$drawer-toggle" />
  <div class="$$drawer-content">
    <!-- Page content here -->
    <label for="my-drawer-4" class="$$drawer-button $$btn $$btn-primary">Open drawer</label>
  </div> 
  <div class="$$drawer-side">
    <label for="my-drawer-4" aria-label="close sidebar" class="$$drawer-overlay"></label>
    <ul class="$$menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <!-- Sidebar content here -->
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>`,a,s,r,c;return{c(){e=h("pre"),a=G(n),this.h()},l(l){e=f(l,"PRE",{slot:!0});var o=g(e);a=Q(o,n),o.forEach(d),this.h()},h(){u(e,"slot","html")},m(l,o){m(l,e,o),M(e,a),r||(c=U(s=Z.call(null,e,{to:p[0]})),r=!0)},p(l,o){s&&W(s.update)&&o&1&&s.update.call(null,{to:l[0]})},d(l){l&&d(e),r=!1,c()}}}function Te(p){let e,n,a,s='<a aria-hidden="true" tabindex="-1" href="#drawer-tags-structure"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Drawer tags structure',r,c,l,o=`<code class="language-js"><span class="token punctuation">.</span>drawer <span class="token comment">// The root container</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>toggle <span class="token comment">// A hidden checkbox to toggle the visibility of the sidebar</span>
  ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>content <span class="token comment">// All your page content goes here</span>
  │    ├── <span class="token comment">// navbar</span>
  │    ├── <span class="token comment">// content</span>
  │    ╰── <span class="token comment">// footer</span>
  ╰── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>side <span class="token comment">// Sidebar wrapper</span>
       ├── <span class="token punctuation">.</span>drawer<span class="token operator">-</span>overlay <span class="token comment">// A dark overlay that covers the whole page when the drawer is open</span>
       ╰── <span class="token comment">// Sidebar content (menu or anything)</span></code>`,R,b,w,_,ee,V,T,B,x,ae='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div>You can check/uncheck the checkbox using JavaScript or by clicking the <code>&lt;label&gt;</code> tag which is assigned to the hidden checkbox</div>',q,y,A,k,F,I,Y,S,J;return e=new ve({props:{data:[{type:"component",class:"drawer",desc:"The root container"},{type:"component",class:"drawer-toggle",desc:"For the hidden checkbox that controls the drawer"},{type:"component",class:"drawer-content",desc:"Container for all page content"},{type:"component",class:"drawer-side",desc:"The sidebar container"},{type:"component",class:"drawer-overlay",desc:"The label covers the content when drawer is open"},{type:"modifier",class:"drawer-end",desc:"puts drawer to the right"},{type:"responsive",class:"drawer-open",desc:"Forces the drawer to be open"}]}}),T=new $e({props:{text:"Drawer sidebar is hidden by default. You can make it visible on larger screens using <code>lg:drawer-open</code> class (or using other responsive prefixes: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>)"}}),y=new K({props:{title:"Drawer",$$slots:{html:[_e],default:[ge]},$$scope:{ctx:p}}}),k=new K({props:{title:"Responsive",desc:"Sidebar is always visible on large screen, can be toggled on small screen because of lg:drawer-open class",$$slots:{html:[ye],default:[xe]},$$scope:{ctx:p}}}),I=new K({props:{title:"Navbar menu for desktop + sidebar drawer for mobile",desc:"Change screen size to show/hide menu",$$slots:{html:[Ie],default:[ke]},$$scope:{ctx:p}}}),S=new K({props:{title:"Drawer that opens from right side of page",$$slots:{html:[Me],default:[Se]},$$scope:{ctx:p}}}),{c(){E(e.$$.fragment),n=v(),a=h("h3"),a.innerHTML=s,r=v(),c=h("pre"),l=new pe(!1),R=v(),b=h("div"),w=re("svg"),_=re("path"),ee=v(),V=h("div"),E(T.$$.fragment),B=v(),x=h("div"),x.innerHTML=ae,q=v(),E(y.$$.fragment),A=v(),E(k.$$.fragment),F=v(),E(I.$$.fragment),Y=v(),E(S.$$.fragment),this.h()},l(t){j(e.$$.fragment,t),n=$(t),a=f(t,"H3",{id:!0,"data-svelte-h":!0}),P(a)!=="svelte-64q3i8"&&(a.innerHTML=s),r=$(t),c=f(t,"PRE",{class:!0});var i=g(c);l=ue(i,!1),i.forEach(d),R=$(t),b=f(t,"DIV",{class:!0});var H=g(b);w=ne(H,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var z=g(w);_=ne(z,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(_).forEach(d),z.forEach(d),ee=$(H),V=f(H,"DIV",{});var O=g(V);j(T.$$.fragment,O),O.forEach(d),H.forEach(d),B=$(t),x=f(t,"DIV",{class:!0,"data-svelte-h":!0}),P(x)!=="svelte-1gaknfc"&&(x.innerHTML=ae),q=$(t),j(y.$$.fragment,t),A=$(t),j(k.$$.fragment,t),F=$(t),j(I.$$.fragment,t),Y=$(t),j(S.$$.fragment,t),this.h()},h(){u(a,"id","drawer-tags-structure"),l.a=null,u(c,"class","language-js"),u(_,"stroke-linecap","round"),u(_,"stroke-linejoin","round"),u(_,"stroke-width","2"),u(_,"d","M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"),u(w,"xmlns","http://www.w3.org/2000/svg"),u(w,"fill","none"),u(w,"viewBox","0 0 24 24"),u(w,"class","stroke-current shrink-0 w-6 h-6"),u(b,"class","alert text-sm mt-4"),u(x,"class","alert text-sm mt-4")},m(t,i){C(e,t,i),m(t,n,i),m(t,a,i),m(t,r,i),m(t,c,i),l.m(o,c),m(t,R,i),m(t,b,i),M(b,w),M(w,_),M(b,ee),M(b,V),C(T,V,null),m(t,B,i),m(t,x,i),m(t,q,i),C(y,t,i),m(t,A,i),C(k,t,i),m(t,F,i),C(I,t,i),m(t,Y,i),C(S,t,i),J=!0},p(t,i){const H={};i&5&&(H.$$scope={dirty:i,ctx:t}),y.$set(H);const z={};i&5&&(z.$$scope={dirty:i,ctx:t}),k.$set(z);const O={};i&5&&(O.$$scope={dirty:i,ctx:t}),I.$set(O);const le={};i&5&&(le.$$scope={dirty:i,ctx:t}),S.$set(le)},i(t){J||(D(e.$$.fragment,t),D(T.$$.fragment,t),D(y.$$.fragment,t),D(k.$$.fragment,t),D(I.$$.fragment,t),D(S.$$.fragment,t),J=!0)},o(t){L(e.$$.fragment,t),L(T.$$.fragment,t),L(y.$$.fragment,t),L(k.$$.fragment,t),L(I.$$.fragment,t),L(S.$$.fragment,t),J=!1},d(t){t&&(d(n),d(a),d(r),d(c),d(R),d(b),d(B),d(x),d(q),d(A),d(F),d(Y)),N(e,t),N(T),N(y,t),N(k,t),N(I,t),N(S,t)}}}function He(p){let e,n;const a=[p[1],ie];let s={$$slots:{default:[Te]},$$scope:{ctx:p}};for(let r=0;r<a.length;r+=1)s=te(s,a[r]);return e=new be({props:s}),{c(){E(e.$$.fragment)},l(r){j(e.$$.fragment,r)},m(r,c){C(e,r,c),n=!0},p(r,[c]){const l=c&2?fe(a,[c&2&&oe(r[1]),c&0&&oe(ie)]):{};c&5&&(l.$$scope={dirty:c,ctx:r}),e.$set(l)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}const ie={title:"Drawer",desc:"Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.",published:!0,layout:"components"};function Ee(p,e,n){let a;return ce(p,we,s=>n(0,a=s)),p.$$set=s=>{n(1,e=te(te({},e),se(s)))},e=se(e),[a,e]}class Pe extends me{constructor(e){super(),he(this,e,Ee,He,de,{})}}export{Pe as component};
