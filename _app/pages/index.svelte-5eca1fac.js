import{S as I,i as V,s as C,e as h,t as M,k as H,c as b,a as v,h as j,d as c,m as D,b as d,g as S,J as p,K as E,D as re,L,M as X,j as ne,n as Y,o as $,p as Z,N as G,O as ee,P as te,q as y,Q as N,R as oe,w as P,x as B,y as U,B as q,T as le,v as ie,U as ce}from"../chunks/vendor-dca0f502.js";function ue(n){let e,t,r,s,a,o,i,f,l,u;return{c(){e=h("div"),t=h("h1"),r=M("Encoded"),s=H(),a=h("h1"),o=h("span"),i=h("span"),f=h("span"),l=h("span"),u=M("SHA"),this.h()},l(m){e=b(m,"DIV",{class:!0});var _=v(e);t=b(_,"H1",{class:!0});var w=v(t);r=j(w,"Encoded"),w.forEach(c),s=D(_),a=b(_,"H1",{class:!0});var T=v(a);o=b(T,"SPAN",{class:!0});var k=v(o);i=b(k,"SPAN",{class:!0});var g=v(i);f=b(g,"SPAN",{class:!0});var x=v(f);l=b(x,"SPAN",{class:!0});var A=v(l);u=j(A,"SHA"),A.forEach(c),x.forEach(c),g.forEach(c),k.forEach(c),T.forEach(c),_.forEach(c),this.h()},h(){d(t,"class","text-3xl font-bold pt-6 text-str text-white [text-shadow:0_0_3px_black]"),d(l,"class","relative text-white"),d(f,"class","before:block before:absolute before:-inset-1 before:skew-y-6 before:bg-pink-500 relative inline-block"),d(i,"class","before:block before:absolute before:-inset-1 before:-skew-x-6 before:skew-y-12 before:bg-cyan-500 relative inline-block"),d(o,"class","before:block before:absolute before:-inset-1 before:skew-x-12 before:skew-y-6 before:bg-pink-400 relative inline-block"),d(a,"class","pl-3 text-3xl font-bold pt-6 text-str text-white [text-shadow:0_0_3px_black] "),d(e,"class","flex justify-center flex-wrap")},m(m,_){S(m,e,_),p(e,t),p(t,r),p(e,s),p(e,a),p(a,o),p(o,i),p(i,f),p(f,l),p(l,u)},p:E,i:E,o:E,d(m){m&&c(e)}}}class de extends I{constructor(e){super();V(this,e,null,ue,C,{})}}function se(n){let e;return t=>{clearTimeout(e),e=setTimeout(()=>{t()},n)}}function fe(n){let e,t,r,s;return{c(){e=h("div"),t=h("input"),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=v(e);t=b(o,"INPUT",{type:!0,placeholder:!0,maxlength:!0,class:!0}),o.forEach(c),this.h()},h(){d(t,"type","text"),d(t,"placeholder","Start Typing..."),d(t,"maxlength","256"),d(t,"class","rounded-full shadow p-1 pl-3 pr-3 lg:w-2/5 w-4/5 text-slate-900 ring-0 outline-none placeholder:italic"),d(e,"class","flex mt-5 justify-center")},m(a,o){S(a,e,o),p(e,t),L(t,n[0]),r||(s=X(t,"input",n[1]),r=!0)},p(a,[o]){o&1&&t.value!==a[0]&&L(t,a[0])},i:E,o:E,d(a){a&&c(e),r=!1,s()}}}const F=re("");function pe(n,e,t){const r=se(500);let s="";function a(){s=this.value,t(0,s)}return n.$$.update=()=>{n.$$.dirty&1&&r(()=>F.set(s))},[s,a]}class he extends I{constructor(e){super();V(this,e,pe,fe,C,{})}}const Q='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" /></svg>',be='<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>';function me(n){const e=document.createElement("textarea");e.value=n,e.style.top="0",e.style.left="0",e.style.position="fixed",document.body.appendChild(e),e.focus(),e.select();try{const r=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+r)}catch(t){console.error("Fallback: Oops, unable to copy",t)}document.body.removeChild(e)}function ve(n){if(!navigator.clipboard){me(n);return}navigator.clipboard.writeText(n).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)})}function z(n){let e,t,r,s;return{c(){e=h("div"),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=v(e);o.forEach(c),this.h()},h(){d(e,"class","w-7 absolute mt-[-11px] ml-[1px]")},m(a,o){S(a,e,o),e.innerHTML=n[1],s=!0},p(a,o){(!s||o&2)&&(e.innerHTML=a[1])},i(a){s||(G(()=>{r&&r.end(1),t=ee(e,N,{delay:200}),t.start()}),s=!0)},o(a){t&&t.invalidate(),r=te(e,N,{}),s=!1},d(a){a&&c(e),a&&r&&r.end()}}}function ge(n){let e,t,r,s,a,o,i,f,l=n[1],u,m,_,w,T,k=z(n);return{c(){e=h("div"),t=h("div"),r=h("span"),s=M(n[0]),a=H(),o=h("div"),i=h("button"),f=h("div"),k.c(),this.h()},l(g){e=b(g,"DIV",{class:!0});var x=v(e);t=b(x,"DIV",{class:!0});var A=v(t);r=b(A,"SPAN",{class:!0});var O=v(r);s=j(O,n[0]),O.forEach(c),A.forEach(c),a=D(x),o=b(x,"DIV",{class:!0});var R=v(o);i=b(R,"BUTTON",{class:!0});var J=v(i);f=b(J,"DIV",{class:!0});var K=v(f);k.l(K),K.forEach(c),J.forEach(c),R.forEach(c),x.forEach(c),this.h()},h(){d(r,"class","bg-cyan-50 dark:bg-slate-800 rounded-l-lg text-slate-400 p-1 pl-2 pr-2 max-w-[100%] text-left break-all font-mono"),d(t,"class","p-[0.1rem] bg-gradient-to-br to-cyan-200 from-purple-200 dark:bg-gradient-to-tr dark:from-cyan-700 dark:to-pink-700 rounded-l-lg flex max-w-[80%] shadow"),d(f,"class",""),d(i,"class","bg-cyan-50 dark:bg-slate-800 text-slate-900 dark:text-slate-400 hover:bg-black/0 rounded-r-lg w-7 outline-none"),d(o,"class","flex justify-center shadow p-[0.1rem] bg-gradient-to-br to-cyan-200 from-purple-200 dark:bg-gradient-to-br dark:to-cyan-700 dark:from-pink-700 rounded-r-lg ml-[-1px]"),d(e,"class","flex justify-center mt-3")},m(g,x){S(g,e,x),p(e,t),p(t,r),p(r,s),p(e,a),p(e,o),p(o,i),p(i,f),k.m(f,null),_=!0,w||(T=X(i,"click",n[2]),w=!0)},p(g,[x]){(!_||x&1)&&ne(s,g[0]),x&2&&C(l,l=g[1])?(Y(),$(k,1,1,E),Z(),k=z(g),k.c(),y(k),k.m(f,null)):k.p(g,x)},i(g){_||(y(k),G(()=>{m&&m.end(1),u=ee(e,oe,{duration:500,y:50,delay:0}),u.start()}),_=!0)},o(g){$(k),u&&u.invalidate(),m=te(e,N,{}),_=!1},d(g){g&&c(e),k.d(g),g&&m&&m.end(),w=!1,T()}}}function _e(n,e,t){let{input:r=""}=e,s=Q;const a=se(2e3);function o(){t(1,s=be),ve(r),a(()=>t(1,s=Q))}return n.$$set=i=>{"input"in i&&t(0,r=i.input)},[r,s,o]}class ke extends I{constructor(e){super();V(this,e,_e,ge,C,{input:0})}}var ae=(n=>(n.SHA256="SHA-256",n.SHA384="SHA-384",n.SHA512="SHA-512",n))(ae||{});async function we(n,e){const t=await crypto.subtle.digest(e,new TextEncoder().encode(n));return window.btoa(String.fromCharCode(...new Uint8Array(t)))}function W(n){let e,t,r;return t=new ke({props:{input:n[0]}}),{c(){e=h("div"),P(t.$$.fragment),this.h()},l(s){e=b(s,"DIV",{class:!0});var a=v(e);B(t.$$.fragment,a),a.forEach(c),this.h()},h(){d(e,"class","mt-6")},m(s,a){S(s,e,a),U(t,e,null),r=!0},p(s,a){const o={};a&1&&(o.input=s[0]),t.$set(o)},i(s){r||(y(t.$$.fragment,s),r=!0)},o(s){$(t.$$.fragment,s),r=!1},d(s){s&&c(e),q(t)}}}function xe(n){let e,t,r,s,a,o,i,f;s=new de({}),o=new he({});let l=n[1]&&W(n);return{c(){e=h("div"),t=h("div"),r=h("div"),P(s.$$.fragment),a=H(),P(o.$$.fragment),i=H(),l&&l.c(),this.h()},l(u){e=b(u,"DIV",{class:!0});var m=v(e);t=b(m,"DIV",{class:!0});var _=v(t);r=b(_,"DIV",{class:!0});var w=v(r);B(s.$$.fragment,w),a=D(w),B(o.$$.fragment,w),i=D(w),l&&l.l(w),w.forEach(c),_.forEach(c),m.forEach(c),this.h()},h(){d(r,"class","h-max justify-self-center pb-8 text-white text-center rounded-lg m-7 shadow-lg max-w-[90%] w-10/12 lg:w-1/2 bg-cyan-50/40 dark:bg-slate-800/60 border-2 dark:border-slate-800/40"),d(t,"class","flex justify-center h-screen w-screen backdrop-blur"),d(e,"class","w-screen h-screen bg-center-top bg-[url('/static/img/bg.webp')] dark:bg-[url('/static/img/bg-dark.webp')] dark:bg-slate-900")},m(u,m){S(u,e,m),p(e,t),p(t,r),U(s,r,null),p(r,a),U(o,r,null),p(r,i),l&&l.m(r,null),f=!0},p(u,[m]){u[1]?l?(l.p(u,m),m&2&&y(l,1)):(l=W(u),l.c(),y(l,1),l.m(r,null)):l&&(Y(),$(l,1,1,()=>{l=null}),Z())},i(u){f||(y(s.$$.fragment,u),y(o.$$.fragment,u),y(l),f=!0)},o(u){$(s.$$.fragment,u),$(o.$$.fragment,u),$(l),f=!1},d(u){u&&c(e),q(s),q(o),l&&l.d()}}}function ye(n,e,t){let r;le(n,F,i=>t(1,r=i));let s="",a,o=ae.SHA256;return ie(()=>{a=F.subscribe(i=>we(i,o).then(f=>t(0,s=f)))}),ce(()=>a&&a()),[s,r]}class Ee extends I{constructor(e){super();V(this,e,ye,xe,C,{})}}export{Ee as default};
