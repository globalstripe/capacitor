"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{487:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return D}});var o,i,r=n(9761),l=n(9389),a=n(5322);(o=i||(i={})).Body="body",o.Ionic="ionic",o.Native="native",o.None="none";let d={getEngine(){var e;return(null===(e=null===a.w||void 0===a.w?void 0:a.w.Capacitor)||void 0===e?void 0:e.isPluginAvailable("Keyboard"))&&(null===a.w||void 0===a.w?void 0:a.w.Capacitor.Plugins.Keyboard)},getResizeMode(){let e=this.getEngine();return e&&e.getResizeMode?e.getResizeMode():Promise.resolve(void 0)}},s=new WeakMap,c=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];s.has(e)!==n&&(n?v(e,t,o,i):m(e,t))},u=e=>e===e.getRootNode().activeElement,v=function(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),i.appendChild(r),s.set(e,r);let l=e.ownerDocument,a="rtl"===l.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(a,"px,").concat(n,"px,0) scale(0)")},m=(e,t)=>{let n=s.get(e);n&&(s.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f=(e,t,n)=>{if(!n||!t)return()=>{};let o=n=>{u(t)&&c(e,t,n)},i=()=>c(e,t,!1),r=()=>o(!0),a=()=>o(!1);return(0,l.a)(n,"ionScrollStart",r),(0,l.a)(n,"ionScrollEnd",a),t.addEventListener("blur",i),()=>{(0,l.b)(n,"ionScrollStart",r),(0,l.b)(n,"ionScrollEnd",a),t.removeEventListener("blur",i)}},g="input, textarea, [no-blur], [contenteditable]",w=()=>{let e=!0,t=!1,n=document,o=()=>{t=!0},i=()=>{e=!0},r=o=>{if(t){t=!1;return}let i=n.activeElement;if(!i||i.matches(g))return;let r=o.target;r===i||r.matches(g)||r.closest(g)||(e=!1,setTimeout(()=>{e||i.blur()},50))};return(0,l.a)(n,"ionScrollStart",o),n.addEventListener("focusin",i,!0),n.addEventListener("touchend",r,!1),()=>{(0,l.b)(n,"ionScrollStart",o,!0),n.removeEventListener("focusin",i,!0),n.removeEventListener("touchend",r,!1)}},h=(e,t,n)=>{var o;let i=null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e;return p(i.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},p=(e,t,n,o)=>{let i=e.top,r=e.bottom,l=t.top,a=Math.min(t.bottom,o-n),d=l+15,s=a-50-r,c=d-i,u=Math.min(Math.round(s<0?-s:c>0?-c:0),i-l);return{scrollAmount:u,scrollDuration:Math.min(400,Math.max(150,Math.abs(u)/.3)),scrollPadding:n,inputSafeY:-(i-d)+4}},y="$ionPaddingTimer",b=(e,t,n)=>{let o=e[y];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset","".concat(t,"px")):e[y]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),n&&n()},120)},E=(e,t,n)=>{let o=()=>{t&&b(t,0,n)};e.addEventListener("focusout",o,{once:!0})},S=0,L=function(e,t,n,o,r,l,a){let d=arguments.length>7&&void 0!==arguments[7]&&arguments[7],s=l&&(void 0===a||a.mode===i.None),c=async()=>{M(e,t,n,o,r,s,d)};return e.addEventListener("focusin",c,!0),()=>{e.removeEventListener("focusin",c,!0)}},M=async function(e,t,n,o,i,a){let d=arguments.length>6&&void 0!==arguments[6]&&arguments[6];if(!n&&!o)return;let s=h(e,n||o,i);if(n&&4>Math.abs(s.scrollAmount)){t.focus(),a&&null!==n&&(b(n,S+=s.scrollPadding),E(t,n,()=>S=0));return}c(e,t,!0,s.inputSafeY,d),t.focus(),(0,l.r)(()=>e.click()),a&&n&&b(n,S+=s.scrollPadding);{let o;let i=async()=>{void 0!==o&&clearTimeout(o),window.removeEventListener("ionKeyboardDidShow",l),window.removeEventListener("ionKeyboardDidShow",i),n&&await (0,r.c)(n,0,s.scrollAmount,s.scrollDuration),c(e,t,!1,s.inputSafeY),t.focus(),a&&E(t,n,()=>S=0)},l=()=>{window.removeEventListener("ionKeyboardDidShow",l),window.addEventListener("ionKeyboardDidShow",i)};if(n){let e=await (0,r.g)(n),a=e.scrollHeight-e.clientHeight;if(s.scrollAmount>a-e.scrollTop){"password"===t.type?(s.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",l)):window.addEventListener("ionKeyboardDidShow",i),o=setTimeout(i,1e3);return}}i()}},D=async(e,t)=>{let n=document,o="ios"===t,i="android"===t,a=e.getNumber("keyboardHeight",290),s=e.getBoolean("scrollAssist",!0),c=e.getBoolean("hideCaretOnScroll",o),u=e.getBoolean("inputBlurring",o),v=e.getBoolean("scrollPadding",!0),m=Array.from(n.querySelectorAll("ion-input, ion-textarea")),g=new WeakMap,h=new WeakMap,p=await d.getResizeMode(),y=async e=>{await new Promise(t=>(0,l.c)(e,t));let t=e.shadowRoot||e,n=t.querySelector("input")||t.querySelector("textarea"),o=(0,r.a)(e),d=o?null:e.closest("ion-footer");if(!n)return;if(o&&c&&!g.has(e)){let t=f(e,n,o);g.set(e,t)}let u="date"===n.type||"datetime-local"===n.type;if(!u&&(o||d)&&s&&!h.has(e)){let t=L(e,n,o,d,a,v,p,i);h.set(e,t)}},b=e=>{if(c){let t=g.get(e);t&&t(),g.delete(e)}if(s){let t=h.get(e);t&&t(),h.delete(e)}};for(let e of(u&&w(),m))y(e);n.addEventListener("ionInputDidLoad",e=>{y(e.detail)}),n.addEventListener("ionInputDidUnload",e=>{b(e.detail)})}}}]);