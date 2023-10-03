import{s as xs,N as X,S as ks,f as l,a as c,H as G,g as o,A as r,c as u,h as K,F as Q,d as a,j as v,i as t,y as vs}from"../chunks/scheduler.5afb8bf4.js";import{S as ys,i as _s,b as ws,d as Ms,m as Is,a as Hs,t as bs,e as Ts}from"../chunks/index.2536167e.js";import{g as Us,a as rs}from"../chunks/spread.8a54911c.js";import{M as Cs}from"../chunks/mdsvex-blog.a86e1799.js";function Ls(L){let e,g="Headless UI is a set of completely unstyled, fully accessible UI components for React and Vue. It gives you functionality without design decisions. daisyUI is a Tailwind CSS component library that provides design decisions without functionality. That’s why it is suggested to use them together.",m,i,p='<a aria-hidden="true" tabindex="-1" href="#why-use-headless-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Why use Headless UI?',k,d,Y='As a CSS-only component library, daisyUI doesn’t include any JavaScript code. However sometimes you need JS to make interactive components or to improve keyboard navigation. That’s where <a href="https://headlessui.com/" rel="nofollow">Headless UI</a> comes in. It provides you with fully accessible UI components for React and Vue.',S,f,Z='<a aria-hidden="true" tabindex="-1" href="#how-to-install-headless-ui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>How to install Headless UI?',j,y,ss='<a href="https://headlessui.com/" rel="nofollow">Headless UI</a> is available for React and Vue. But there is an <a href="https://github.com/rgossiaux/svelte-headlessui" rel="nofollow">unofficial port of Headless UI for Svelte</a> too.',P,_,as="<li>To install Headless UI for Vue, run the following command:</li>",q,w,$,ds='<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @headlessui/vue</code>',E,M,ns="Or this command if you’re using React:",R,I,B,gs='<code class="language-bash"><span class="token function">npm</span> <span class="token function">install</span> @headlessui/react</code>',V,h,ts='<li>Now you can use any of the <a href="https://headlessui.com/" rel="nofollow">Headless UI components</a> by copy/pasting the code to your project.</li>',A,H,es="For example, according to Headless UI docs, this is how you can create a dropdown menu:",D,b,N,fs=`<code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@headlessui/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyDropDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,O,x,ps="<li>Add daisyUI</li>",F,T,ls=`After <a href="https://daisyui.com/docs/install/" rel="nofollow">installing daisyUI</a> you can use daisyUI’s styles in Headless UI components.<br/>
Simply add daisyUI class names (and Tailwind CSS utility classes) where it’s needed:`,J,U,W,hs=`<code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">&#123;</span> Menu <span class="token punctuation">&#125;</span> <span class="token keyword">from</span> <span class="token string">"@headlessui/react"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">MyDropDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Button</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Button</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Items</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu rounded-box bg-base-200 w-52<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token plain-text">Item 2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token plain-text">
          </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Item</span></span><span class="token punctuation">></span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu.Items</span></span><span class="token punctuation">></span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Menu</span></span><span class="token punctuation">></span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,z,C,os='Visit <a href="https://headlessui.com/" rel="nofollow">Headless UI docs</a> to learn more about its components.';return{c(){e=l("p"),e.textContent=g,m=c(),i=l("h2"),i.innerHTML=p,k=c(),d=l("p"),d.innerHTML=Y,S=c(),f=l("h2"),f.innerHTML=Z,j=c(),y=l("p"),y.innerHTML=ss,P=c(),_=l("ol"),_.innerHTML=as,q=c(),w=l("pre"),$=new G(!1),E=c(),M=l("p"),M.textContent=ns,R=c(),I=l("pre"),B=new G(!1),V=c(),h=l("ol"),h.innerHTML=ts,A=c(),H=l("p"),H.textContent=es,D=c(),b=l("pre"),N=new G(!1),O=c(),x=l("ol"),x.innerHTML=ps,F=c(),T=l("p"),T.innerHTML=ls,J=c(),U=l("pre"),W=new G(!1),z=c(),C=l("p"),C.innerHTML=os,this.h()},l(s){e=o(s,"P",{"data-svelte-h":!0}),r(e)!=="svelte-1evb2g8"&&(e.textContent=g),m=u(s),i=o(s,"H2",{id:!0,"data-svelte-h":!0}),r(i)!=="svelte-1opiq5u"&&(i.innerHTML=p),k=u(s),d=o(s,"P",{"data-svelte-h":!0}),r(d)!=="svelte-7ojjj2"&&(d.innerHTML=Y),S=u(s),f=o(s,"H2",{id:!0,"data-svelte-h":!0}),r(f)!=="svelte-1n2aqx9"&&(f.innerHTML=Z),j=u(s),y=o(s,"P",{"data-svelte-h":!0}),r(y)!=="svelte-d6cipj"&&(y.innerHTML=ss),P=u(s),_=o(s,"OL",{"data-svelte-h":!0}),r(_)!=="svelte-ftny3v"&&(_.innerHTML=as),q=u(s),w=o(s,"PRE",{class:!0});var n=K(w);$=Q(n,!1),n.forEach(a),E=u(s),M=o(s,"P",{"data-svelte-h":!0}),r(M)!=="svelte-scvlfp"&&(M.textContent=ns),R=u(s),I=o(s,"PRE",{class:!0});var cs=K(I);B=Q(cs,!1),cs.forEach(a),V=u(s),h=o(s,"OL",{start:!0,"data-svelte-h":!0}),r(h)!=="svelte-b099ow"&&(h.innerHTML=ts),A=u(s),H=o(s,"P",{"data-svelte-h":!0}),r(H)!=="svelte-t870xi"&&(H.textContent=es),D=u(s),b=o(s,"PRE",{class:!0});var us=K(b);N=Q(us,!1),us.forEach(a),O=u(s),x=o(s,"OL",{start:!0,"data-svelte-h":!0}),r(x)!=="svelte-1631nvk"&&(x.innerHTML=ps),F=u(s),T=o(s,"P",{"data-svelte-h":!0}),r(T)!=="svelte-17l9xda"&&(T.innerHTML=ls),J=u(s),U=o(s,"PRE",{class:!0});var is=K(U);W=Q(is,!1),is.forEach(a),z=u(s),C=o(s,"P",{"data-svelte-h":!0}),r(C)!=="svelte-9de2j"&&(C.innerHTML=os),this.h()},h(){v(i,"id","why-use-headless-ui"),v(f,"id","how-to-install-headless-ui"),$.a=null,v(w,"class","language-bash"),B.a=null,v(I,"class","language-bash"),v(h,"start","2"),N.a=null,v(b,"class","language-jsx"),v(x,"start","3"),W.a=null,v(U,"class","language-jsx")},m(s,n){t(s,e,n),t(s,m,n),t(s,i,n),t(s,k,n),t(s,d,n),t(s,S,n),t(s,f,n),t(s,j,n),t(s,y,n),t(s,P,n),t(s,_,n),t(s,q,n),t(s,w,n),$.m(ds,w),t(s,E,n),t(s,M,n),t(s,R,n),t(s,I,n),B.m(gs,I),t(s,V,n),t(s,h,n),t(s,A,n),t(s,H,n),t(s,D,n),t(s,b,n),N.m(fs,b),t(s,O,n),t(s,x,n),t(s,F,n),t(s,T,n),t(s,J,n),t(s,U,n),W.m(hs,U),t(s,z,n),t(s,C,n)},p:vs,d(s){s&&(a(e),a(m),a(i),a(k),a(d),a(S),a(f),a(j),a(y),a(P),a(_),a(q),a(w),a(E),a(M),a(R),a(I),a(V),a(h),a(A),a(H),a(D),a(b),a(O),a(x),a(F),a(T),a(J),a(U),a(z),a(C))}}}function Ss(L){let e,g;const m=[L[0],ms];let i={$$slots:{default:[Ls]},$$scope:{ctx:L}};for(let p=0;p<m.length;p+=1)i=X(i,m[p]);return e=new Cs({props:i}),{c(){ws(e.$$.fragment)},l(p){Ms(e.$$.fragment,p)},m(p,k){Is(e,p,k),g=!0},p(p,[k]){const d=k&1?Us(m,[k&1&&rs(p[0]),k&0&&rs(ms)]):{};k&2&&(d.$$scope={dirty:k,ctx:p}),e.$set(d)},i(p){g||(Hs(e.$$.fragment,p),g=!0)},o(p){bs(e.$$.fragment,p),g=!1},d(p){Ts(e,p)}}}const ms={title:"How to use Headless UI and daisyUI together?",desc:"What is Headless UI and why it is suggested to use it with daisyUI?",published:!0,date:"2023-9-28",author:"Pouya Saadeghi",thumbnail:"/images/blog/headless-ui.jpg",tags:["Headless UI","Component Library"]};function js(L,e,g){return L.$$set=m=>{g(0,e=X(X({},e),ks(m)))},e=ks(e),[e]}class Rs extends ys{constructor(e){super(),_s(this,e,js,Ss,xs,{})}}export{Rs as component};
