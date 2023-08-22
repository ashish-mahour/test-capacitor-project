"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3287],{3287:(q,O,h)=>{h.r(O),h.d(O,{startInputShims:()=>X});var y=h(5861),M=h(8360),m=h(839),K=h(7484);h(4874),h(6225);const A=new WeakMap,I=(t,e,s,o=0,r=!1)=>{A.has(t)!==s&&(s?k(t,e,o,r):H(t,e))},k=(t,e,s,o=!1)=>{const r=e.parentNode,n=e.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,o&&(n.disabled=!0),r.appendChild(n),A.set(t,n);const c="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},H=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},T="input, textarea, [no-blur], [contenteditable]",j="$ionPaddingTimer",C=(t,e,s)=>{const o=t[j];o&&clearTimeout(o),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[j]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&C(e,0,s)},{once:!0})};let g=0;const p="data-ionic-skip-scroll-assist",V=(t,e,s,o,r,n,a,c=!1)=>{const i=n&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(p)?e.removeAttribute(p):J(t,e,s,o,r,i,c)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},w=t=>{document.activeElement!==t&&(t.setAttribute(p,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,o,r,n,a,c=!1){if(!o&&!r)return;const i=((t,e,s)=>{var o;return((t,e,s,o)=>{const r=t.top,n=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,o-s)-50-n,v=i-r,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,r-a),P=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,P)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(o=t.closest("ion-item,[ion-item]"))&&void 0!==o?o:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,o||r,n);if(o&&Math.abs(i.scrollAmount)<4)return w(s),void(a&&null!==o&&(C(o,g),U(s,o,()=>g=0)));if(I(e,s,!0,i.inputSafeY,c),w(s),(0,m.r)(()=>e.click()),a&&o&&(g=i.scrollPadding,C(o,g)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,M.c)(o,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),w(s),a&&U(s,o,()=>g=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(o){const l=yield(0,M.g)(o);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,o,r,n,a,c){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const o=document,r="ios"===s,n="android"===s,a=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",r),S=e.getBoolean("inputBlurring",r),u=e.getBoolean("scrollPadding",!0),v=Array.from(o.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,N=yield K.K.getResizeMode(),P=function(){var f=(0,y.Z)(function*(d){yield new Promise(b=>(0,m.c)(d,b));const x=d.shadowRoot||d,L=x.querySelector("input")||x.querySelector("textarea"),D=(0,M.f)(d),W=D?null:d.closest("ion-footer");if(L){if(D&&i&&!l.has(d)){const b=((t,e,s)=>{if(!s||!e)return()=>{};const o=c=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,c)},r=()=>I(t,e,!1),n=()=>o(!0),a=()=>o(!1);return(0,m.a)(s,"ionScrollStart",n),(0,m.a)(s,"ionScrollEnd",a),e.addEventListener("blur",r),()=>{(0,m.b)(s,"ionScrollStart",n),(0,m.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",r)}})(d,L,D);l.set(d,b)}if("date"!==L.type&&"datetime-local"!==L.type&&(D||W)&&c&&!_.has(d)){const b=V(d,L,D,W,a,u,N,n);_.set(d,b)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,m.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const c=s.activeElement;if(!c||c.matches(T))return;const i=a.target;i!==c&&(i.matches(T)||i.closest(T)||(t=!1,setTimeout(()=>{t||c.blur()},50)))},!1)})();for(const f of v)P(f);o.addEventListener("ionInputDidLoad",f=>{P(f.detail)}),o.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,o){return t.apply(this,arguments)}}()}}]);