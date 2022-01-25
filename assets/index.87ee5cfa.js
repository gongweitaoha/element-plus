var S=Object.defineProperty,V=Object.defineProperties;var j=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var h=(t,e,l)=>e in t?S(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,f=(t,e)=>{for(var l in e||(e={}))I.call(e,l)&&h(t,l,e[l]);if(w)for(var l of w(e))N.call(e,l)&&h(t,l,e[l]);return t},x=(t,e)=>V(t,j(e));import{Z as O,e as k,r as R,M as g,B as M,C as H,H as Z,n as _,W as A,L as $,af as q,ab as z}from"./framework.b3e0f3f4.js";import{r as y,j as m,f as B}from"./dom.9353f44c.js";import{P as D}from"./popup-manager.0315715c.js";import{g as F,v as K,T as W}from"./framework.9d618830.js";import{i as Y}from"./index.88a5b812.js";function G(t){let e;const l=k(!1),o=R(x(f({},t),{originalPosition:"",originalOverflow:"",visible:!1}));function a(n){o.text=n}function r(){const n=o.parent;if(!n.vLoadingAddClassList){let s=n.getAttribute("loading-number");s=Number.parseInt(s)-1,s?n.setAttribute("loading-number",s.toString()):(y(n,"el-loading-parent--relative"),n.removeAttribute("loading-number")),y(n,"el-loading-parent--hidden")}u()}function u(){var n,s;(s=(n=d.$el)==null?void 0:n.parentNode)==null||s.removeChild(d.$el)}function i(){var n;if(t.beforeClose&&!t.beforeClose())return;const s=o.parent;s.vLoadingAddClassList=void 0,l.value=!0,clearTimeout(e),e=window.setTimeout(()=>{l.value&&(l.value=!1,r())},400),o.visible=!1,(n=t.closed)==null||n.call(t)}function b(){!l.value||(l.value=!1,r())}const d=F({name:"ElLoading",setup(){return()=>{const n=o.spinner||o.svg,s=g("svg",f({class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"25 25 50 50"},n?{innerHTML:n}:{}),[g("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),v=o.text?g("p",{class:"el-loading-text"},[o.text]):void 0;return g(W,{name:"el-loading-fade",onAfterLeave:b},{default:M(()=>[H(Z("div",{style:{backgroundColor:o.background||""},class:["el-loading-mask",o.customClass,o.fullscreen?"is-fullscreen":""]},[g("div",{class:"el-loading-spinner"},[s,v])]),[[K,o.visible]])])})}}}).mount(document.createElement("div"));return x(f({},O(o)),{setText:a,remvoeElLoadingChild:u,close:i,handleAfterLeave:b,vm:d,get $el(){return d.$el}})}let p;const C=function(t={}){if(!Y)return;const e=J(t);e.fullscreen&&p&&(p.remvoeElLoadingChild(),p.close());const l=G(x(f({},e),{closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(p=void 0)}}));Q(e,e.parent,l),E(e,e.parent,l),e.parent.vLoadingAddClassList=()=>E(e,e.parent,l);let o=e.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",e.parent.setAttribute("loading-number",o),e.parent.appendChild(l.$el),_(()=>l.visible.value=e.visible),e.fullscreen&&(p=l),l},J=t=>{var e,l,o,a;let r;return A(t.target)?r=(e=document.querySelector(t.target))!=null?e:document.body:r=t.target||document.body,{parent:r===document.body||t.body?document.body:r,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:r===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(o=t.lock)!=null?o:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:r}},Q=async(t,e,l)=>{const o={};if(t.fullscreen)l.originalPosition.value=m(document.body,"position"),l.originalOverflow.value=m(document.body,"overflow"),o.zIndex=D.nextZIndex();else if(t.parent===document.body){l.originalPosition.value=m(document.body,"position"),await _();for(const a of["top","left"]){const r=a==="top"?"scrollTop":"scrollLeft";o[a]=`${t.target.getBoundingClientRect()[a]+document.body[r]+document.documentElement[r]-parseInt(m(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])o[a]=`${t.target.getBoundingClientRect()[a]}px`}else l.originalPosition.value=m(e,"position");for(const[a,r]of Object.entries(o))l.$el.style[a]=r},E=(t,e,l)=>{l.originalPosition.value!=="absolute"&&l.originalPosition.value!=="fixed"?B(e,"el-loading-parent--relative"):y(e,"el-loading-parent--relative"),t.fullscreen&&t.lock?B(e,"el-loading-parent--hidden"):y(e,"el-loading-parent--hidden")},L=Symbol("ElLoading"),P=(t,e)=>{var l,o,a,r;const u=e.instance,i=s=>$(e.value)?e.value[s]:void 0,b=s=>{const v=A(s)&&(u==null?void 0:u[s])||s;return v&&k(v)},c=s=>b(i(s)||t.getAttribute(`element-loading-${q(s)}`)),d=(l=i("fullscreen"))!=null?l:e.modifiers.fullscreen,n={text:c("text"),svg:c("svg"),svgViewBox:c("svgViewBox"),spinner:c("spinner"),background:c("background"),customClass:c("customClass"),fullscreen:d,target:(o=i("target"))!=null?o:d?void 0:t,body:(a=i("body"))!=null?a:e.modifiers.body,lock:(r=i("lock"))!=null?r:e.modifiers.lock};t[L]={options:n,instance:C(n)}},U=(t,e)=>{for(const l of Object.keys(e))z(e[l])&&(e[l].value=t[l])},T={mounted(t,e){e.value&&P(t,e)},updated(t,e){const l=t[L];e.oldValue!==e.value&&(e.value&&!e.oldValue?P(t,e):e.value&&e.oldValue?$(e.value)&&U(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[L])==null||e.instance.close()}},ne={install(t){t.directive("loading",T),t.config.globalProperties.$loading=C},directive:T,service:C};export{ne as E};