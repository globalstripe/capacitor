"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[859],{859:function(t,e,o){o.r(e),o.d(e,{iosTransitionAnimation:function(){return m},shadow:function(){return l}});var a=o(8077),n=o(8538);let r=t=>document.querySelector("".concat(t,".ion-cloned-element")),l=t=>t.shadowRoot||t,c=t=>{let e="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),o="ion-content ion-header:not(.header-collapse-condense-inactive) ion-title.title-large";if(null!=e){let t=e.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");return null!=t?t.querySelector(o):null}return t.querySelector(o)},s=(t,e)=>{let o="ION-TABS"===t.tagName?t:t.querySelector("ion-tabs"),a=[];if(null!=o){let t=o.querySelector("ion-tab:not(.tab-hidden), .ion-page:not(.ion-page-hidden)");null!=t&&(a=t.querySelectorAll("ion-buttons"))}else a=t.querySelectorAll("ion-buttons");for(let t of a){let o=t.closest("ion-header"),a=o&&!o.classList.contains("header-collapse-condense-inactive"),n=t.querySelector("ion-back-button"),r=t.classList.contains("buttons-collapse"),l="start"===t.slot||""===t.slot;if(null!==n&&l&&(r&&a&&e||!r))return n}return null},i=(t,e,o,a,n)=>{let r=s(a,o),l=c(n),i=c(a),m=s(n,o),p=null!==r&&null!==l&&!o,y=null!==i&&null!==m&&o;if(p){let a=l.getBoundingClientRect(),n=r.getBoundingClientRect();f(t,e,o,l,a,n),d(t,e,o,r,a,n)}else if(y){let a=i.getBoundingClientRect(),n=m.getBoundingClientRect();f(t,e,o,i,a,n),d(t,e,o,m,a,n)}return{forward:p,backward:y}},d=(t,e,o,n,c,s)=>{let i=e?"calc(100% - ".concat(s.right+4,"px)"):"".concat(s.left-4,"px"),d=e?"7px":"-7px",f=e?"-4px":"4px",m=e?"-4px":"4px",p=e?"right":"left",y=[{offset:0,opacity:0,transform:"translate3d(".concat(d,", ").concat(c.top-40,"px, 0) scale(2.1)")},{offset:1,opacity:1,transform:"translate3d(".concat(f,", ").concat(s.top-46,"px, 0) scale(1)")}],u=[{offset:0,opacity:1,transform:"translate3d(".concat(f,", ").concat(s.top-46,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(d,", ").concat(c.top-40,"px, 0) scale(2.1)")}],b=[{offset:0,opacity:0,transform:"translate3d(".concat(m,", ").concat(s.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:1,transform:"translate3d(".concat(m,", ").concat(s.top-46,"px, 0) scale(1)")}],S=[{offset:0,opacity:1,transform:"translate3d(".concat(m,", ").concat(s.top-46,"px, 0) scale(1)")},{offset:.2,opacity:0,transform:"translate3d(".concat(m,", ").concat(s.top-41,"px, 0) scale(0.6)")},{offset:1,opacity:0,transform:"translate3d(".concat(m,", ").concat(s.top-41,"px, 0) scale(0.6)")}],g=(0,a.c)(),T=(0,a.c)(),h=r("ion-back-button"),x=l(h).querySelector(".button-text"),q=l(h).querySelector("ion-icon");h.text=n.text,h.mode=n.mode,h.icon=n.icon,h.color=n.color,h.disabled=n.disabled,h.style.setProperty("display","block"),h.style.setProperty("position","fixed"),T.addElement(q),g.addElement(x),g.beforeStyles({"transform-origin":"".concat(p," center")}).beforeAddWrite(()=>{n.style.setProperty("display","none"),h.style.setProperty(p,i)}).afterAddWrite(()=>{n.style.setProperty("display",""),h.style.setProperty("display","none"),h.style.removeProperty(p)}).keyframes(o?u:y),T.beforeStyles({"transform-origin":"".concat(e?"left":"right"," center")}).keyframes(o?S:b),t.addAnimation([g,T])},f=(t,e,o,n,l,c)=>{let s=e?"calc(100% - ".concat(l.right,"px)"):"".concat(l.left,"px"),i=e?"-18px":"18px",d=e?"right":"left",f=[{offset:0,opacity:0,transform:"translate3d(".concat(i,", ").concat(c.top-4,"px, 0) scale(0.49)")},{offset:.1,opacity:0},{offset:1,opacity:1,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")}],m=[{offset:0,opacity:.99,transform:"translate3d(0, ".concat(l.top-2,"px, 0) scale(1)")},{offset:.6,opacity:0},{offset:1,opacity:0,transform:"translate3d(".concat(i,", ").concat(c.top-4,"px, 0) scale(0.5)")}],p=r("ion-title"),y=(0,a.c)();p.innerText=n.innerText,p.size=n.size,p.color=n.color,y.addElement(p),y.beforeStyles({"transform-origin":"".concat(d," center"),height:"46px",display:"",position:"relative",[d]:s}).beforeAddWrite(()=>{n.style.setProperty("display","none")}).afterAddWrite(()=>{n.style.setProperty("display",""),p.style.setProperty("display","none")}).keyframes(o?f:m),t.addAnimation(y)},m=(t,e)=>{var o;try{let r="opacity",c="transform",s="rtl"===t.ownerDocument.dir,d=s?"-99.5%":"99.5%",f=s?"33%":"-33%",m=e.enteringEl,p=e.leavingEl,y="back"===e.direction,u=m.querySelector(":scope > ion-content"),b=m.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),S=m.querySelectorAll(":scope > ion-header > ion-toolbar"),g=(0,a.c)(),T=(0,a.c)();if(g.addElement(m).duration((null!==(o=e.duration)&&void 0!==o?o:0)||540).easing(e.easing||"cubic-bezier(0.32,0.72,0,1)").fill("both").beforeRemoveClass("ion-page-invisible"),p&&null!=t){let e=(0,a.c)();e.addElement(t),g.addAnimation(e)}if(u||0!==S.length||0!==b.length?(T.addElement(u),T.addElement(b)):T.addElement(m.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(T),y?T.beforeClearStyles([r]).fromTo("transform","translateX(".concat(f,")"),"translateX(".concat("0%",")")).fromTo(r,.8,1):T.beforeClearStyles([r]).fromTo("transform","translateX(".concat(d,")"),"translateX(".concat("0%",")")),u){let t=l(u).querySelector(".transition-effect");if(t){let e=t.querySelector(".transition-cover"),o=t.querySelector(".transition-shadow"),n=(0,a.c)(),l=(0,a.c)(),c=(0,a.c)();n.addElement(t).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),l.addElement(e).beforeClearStyles([r]).fromTo(r,0,.1),c.addElement(o).beforeClearStyles([r]).fromTo(r,.03,.7),n.addAnimation([l,c]),T.addAnimation([n])}}let h=m.querySelector("ion-header.header-collapse-condense"),{forward:x,backward:q}=i(g,s,y,m,p);if(S.forEach(t=>{let e;let o=(0,a.c)();o.addElement(t),g.addAnimation(o);let n=(0,a.c)();n.addElement(t.querySelector("ion-title"));let c=(0,a.c)(),i=Array.from(t.querySelectorAll("ion-buttons,[menuToggle]")),m=t.closest("ion-header"),p=null==m?void 0:m.classList.contains("header-collapse-condense-inactive");e=y?i.filter(t=>{let e=t.classList.contains("buttons-collapse");return e&&!p||!e}):i.filter(t=>!t.classList.contains("buttons-collapse")),c.addElement(e);let u=(0,a.c)();u.addElement(t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])"));let b=(0,a.c)();b.addElement(l(t).querySelector(".toolbar-background"));let S=(0,a.c)(),T=t.querySelector("ion-back-button");if(T&&S.addElement(T),o.addAnimation([n,c,u,b,S]),c.fromTo(r,.01,1),u.fromTo(r,.01,1),y)p||n.fromTo("transform","translateX(".concat(f,")"),"translateX(".concat("0%",")")).fromTo(r,.01,1),u.fromTo("transform","translateX(".concat(f,")"),"translateX(".concat("0%",")")),S.fromTo(r,.01,1);else{h||n.fromTo("transform","translateX(".concat(d,")"),"translateX(".concat("0%",")")).fromTo(r,.01,1),u.fromTo("transform","translateX(".concat(d,")"),"translateX(".concat("0%",")")),b.beforeClearStyles([r,"transform"]);let t=null==m?void 0:m.translucent;if(t?b.fromTo("transform",s?"translateX(-100%)":"translateX(100%)","translateX(0px)"):b.fromTo(r,.01,"var(--opacity)"),x||S.fromTo(r,.01,1),T&&!x){let t=(0,a.c)();t.addElement(l(T).querySelector(".button-text")).fromTo("transform",s?"translateX(-100px)":"translateX(100px)","translateX(0px)"),o.addAnimation(t)}}}),p){let t=(0,a.c)(),e=p.querySelector(":scope > ion-content"),o=p.querySelectorAll(":scope > ion-header > ion-toolbar"),i=p.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *");if(e||0!==o.length||0!==i.length?(t.addElement(e),t.addElement(i)):t.addElement(p.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")),g.addAnimation(t),y){t.beforeClearStyles([r]).fromTo("transform","translateX(".concat("0%",")"),s?"translateX(-100%)":"translateX(100%)");let e=(0,n.g)(p);g.afterAddWrite(()=>{"normal"===g.getDirection()&&e.style.setProperty("display","none")})}else t.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(f,")")).fromTo(r,1,.8);if(e){let o=l(e).querySelector(".transition-effect");if(o){let e=o.querySelector(".transition-cover"),n=o.querySelector(".transition-shadow"),l=(0,a.c)(),c=(0,a.c)(),s=(0,a.c)();l.addElement(o).beforeStyles({opacity:"1",display:"block"}).afterStyles({opacity:"",display:""}),c.addElement(e).beforeClearStyles([r]).fromTo(r,.1,0),s.addElement(n).beforeClearStyles([r]).fromTo(r,.7,.03),l.addAnimation([c,s]),t.addAnimation([l])}}o.forEach(t=>{let e=(0,a.c)();e.addElement(t);let o=(0,a.c)();o.addElement(t.querySelector("ion-title"));let n=(0,a.c)(),i=t.querySelectorAll("ion-buttons,[menuToggle]"),d=t.closest("ion-header"),m=null==d?void 0:d.classList.contains("header-collapse-condense-inactive"),p=Array.from(i).filter(t=>{let e=t.classList.contains("buttons-collapse");return e&&!m||!e});n.addElement(p);let u=(0,a.c)(),b=t.querySelectorAll(":scope > *:not(ion-title):not(ion-buttons):not([menuToggle])");b.length>0&&u.addElement(b);let S=(0,a.c)();S.addElement(l(t).querySelector(".toolbar-background"));let T=(0,a.c)(),h=t.querySelector("ion-back-button");if(h&&T.addElement(h),e.addAnimation([o,n,u,T,S]),g.addAnimation(e),T.fromTo(r,.99,0),n.fromTo(r,.99,0),u.fromTo(r,.99,0),y){m||o.fromTo("transform","translateX(".concat("0%",")"),s?"translateX(-100%)":"translateX(100%)").fromTo(r,.99,0),u.fromTo("transform","translateX(".concat("0%",")"),s?"translateX(-100%)":"translateX(100%)"),S.beforeClearStyles([r,"transform"]);let t=null==d?void 0:d.translucent;if(t?S.fromTo("transform","translateX(0px)",s?"translateX(-100%)":"translateX(100%)"):S.fromTo(r,"var(--opacity)",0),h&&!q){let t=(0,a.c)();t.addElement(l(h).querySelector(".button-text")).fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat((s?-124:124)+"px",")")),e.addAnimation(t)}}else m||o.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(f,")")).fromTo(r,.99,0).afterClearStyles([c,r]),u.fromTo("transform","translateX(".concat("0%",")"),"translateX(".concat(f,")")).afterClearStyles([c,r]),T.afterClearStyles([r]),o.afterClearStyles([r]),n.afterClearStyles([r])})}return g}catch(t){throw t}}}}]);