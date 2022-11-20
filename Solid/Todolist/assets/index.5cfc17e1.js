(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=t(l);fetch(l.href,i)}})();const A={},ie=(e,n)=>e===n,oe=Symbol("solid-track"),P={equals:ie};let re=te;const C=1,k=2,X={owned:null,cleanups:null,context:null,owner:null};var h=null;let S=null,a=null,p=null,$=null,G=0;function I(e,n){const t=a,s=h,l=e.length===0,i=l?X:{owned:null,cleanups:null,context:null,owner:n||s},r=l?e:()=>e(()=>j(()=>H(i)));h=i,a=null;try{return L(r,!0)}finally{a=t,h=s}}function R(e,n){n=n?Object.assign({},P,n):P;const t={value:e,observers:null,observerSlots:null,comparator:n.equals||void 0},s=l=>(typeof l=="function"&&(l=l(t.value)),Z(t,l));return[Y.bind(t),s]}function q(e,n,t){const s=z(e,n,!1,C);F(s)}function J(e,n,t){t=t?Object.assign({},P,t):P;const s=z(e,n,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,F(s),Y.bind(s)}function j(e){let n,t=a;return a=null,n=e(),a=t,n}function fe(e){return h===null||(h.cleanups===null?h.cleanups=[e]:h.cleanups.push(e)),e}function Y(){const e=S;if(this.sources&&(this.state||e))if(this.state===C||e)F(this);else{const n=p;p=null,L(()=>D(this),!1),p=n}if(a){const n=this.observers?this.observers.length:0;a.sources?(a.sources.push(this),a.sourceSlots.push(n)):(a.sources=[this],a.sourceSlots=[n]),this.observers?(this.observers.push(a),this.observerSlots.push(a.sources.length-1)):(this.observers=[a],this.observerSlots=[a.sources.length-1])}return this.value}function Z(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&L(()=>{for(let l=0;l<e.observers.length;l+=1){const i=e.observers[l],r=S&&S.running;r&&S.disposed.has(i),(r&&!i.tState||!r&&!i.state)&&(i.pure?p.push(i):$.push(i),i.observers&&ne(i)),r||(i.state=C)}if(p.length>1e6)throw p=[],new Error},!1)),n}function F(e){if(!e.fn)return;H(e);const n=h,t=a,s=G;a=h=e,ue(e,e.value,s),a=t,h=n}function ue(e,n,t){let s;try{s=e.fn(n)}catch(l){e.pure&&(e.state=C),se(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?Z(e,s):e.value=s,e.updatedAt=t)}function z(e,n,t,s=C,l){const i={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:h,context:null,pure:t};return h===null||h!==X&&(h.owned?h.owned.push(i):h.owned=[i]),i}function ee(e){const n=S;if(e.state===0||n)return;if(e.state===k||n)return D(e);if(e.suspense&&j(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<G);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===C||n)F(e);else if(e.state===k||n){const l=p;p=null,L(()=>D(e,t[0]),!1),p=l}}function L(e,n){if(p)return e();let t=!1;n||(p=[]),$?t=!0:$=[],G++;try{const s=e();return ce(t),s}catch(s){p||($=null),se(s)}}function ce(e){if(p&&(te(p),p=null),e)return;const n=$;$=null,n.length&&L(()=>re(n),!1)}function te(e){for(let n=0;n<e.length;n++)ee(e[n])}function D(e,n){const t=S;e.state=0;for(let s=0;s<e.sources.length;s+=1){const l=e.sources[s];l.sources&&(l.state===C||t?l!==n&&ee(l):(l.state===k||t)&&D(l,n))}}function ne(e){const n=S;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=k,s.pure?p.push(s):$.push(s),s.observers&&ne(s))}}function H(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const i=l.pop(),r=t.observerSlots.pop();s<l.length&&(i.sourceSlots[r]=s,l[s]=i,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)H(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function ae(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function se(e){throw e=ae(e),e}const de=Symbol("fallback");function V(e){for(let n=0;n<e.length;n++)e[n]()}function he(e,n,t={}){let s=[],l=[],i=[],r=0,o=n.length>1?[]:null;return fe(()=>V(i)),()=>{let c=e()||[],u,f;return c[oe],j(()=>{let d=c.length,w,x,_,O,B,y,b,m,E;if(d===0)r!==0&&(V(i),i=[],s=[],l=[],r=0,o&&(o=[])),t.fallback&&(s=[de],l[0]=I(le=>(i[0]=le,t.fallback())),r=1);else if(r===0){for(l=new Array(d),f=0;f<d;f++)s[f]=c[f],l[f]=I(g);r=d}else{for(_=new Array(d),O=new Array(d),o&&(B=new Array(d)),y=0,b=Math.min(r,d);y<b&&s[y]===c[y];y++);for(b=r-1,m=d-1;b>=y&&m>=y&&s[b]===c[m];b--,m--)_[m]=l[b],O[m]=i[b],o&&(B[m]=o[b]);for(w=new Map,x=new Array(m+1),f=m;f>=y;f--)E=c[f],u=w.get(E),x[f]=u===void 0?-1:u,w.set(E,f);for(u=y;u<=b;u++)E=s[u],f=w.get(E),f!==void 0&&f!==-1?(_[f]=l[u],O[f]=i[u],o&&(B[f]=o[u]),f=x[f],w.set(E,f)):i[u]();for(f=y;f<d;f++)f in _?(l[f]=_[f],i[f]=O[f],o&&(o[f]=B[f],o[f](f))):l[f]=I(g);l=l.slice(0,r=d),s=c.slice(0)}return l});function g(d){if(i[f]=d,o){const[w,x]=R(f);return o[f]=x,n(c[f],w)}return n(c[f])}}}function M(e,n){return j(()=>e(n||{}))}function pe(e){const n="fallback"in e&&{fallback:()=>e.fallback};return J(he(()=>e.each,e.children,n||void 0))}function ge(e,n,t){let s=t.length,l=n.length,i=s,r=0,o=0,c=n[l-1].nextSibling,u=null;for(;r<l||o<i;){if(n[r]===t[o]){r++,o++;continue}for(;n[l-1]===t[i-1];)l--,i--;if(l===r){const f=i<s?o?t[o-1].nextSibling:t[i-o]:c;for(;o<i;)e.insertBefore(t[o++],f)}else if(i===o)for(;r<l;)(!u||!u.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[i-1]&&t[o]===n[l-1]){const f=n[--l].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--i],f),n[l]=t[i]}else{if(!u){u=new Map;let g=o;for(;g<i;)u.set(t[g],g++)}const f=u.get(n[r]);if(f!=null)if(o<f&&f<i){let g=r,d=1,w;for(;++g<l&&g<i&&!((w=u.get(n[g]))==null||w!==f+d);)d++;if(d>f-o){const x=n[r];for(;o<f;)e.insertBefore(t[o++],x)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const Q="_$DX_DELEGATE";function we(e,n,t,s={}){let l;return I(i=>{l=i,n===document?e():N(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{l(),n.textContent=""}}function T(e,n,t){const s=document.createElement("template");s.innerHTML=e;let l=s.content.firstChild;return t&&(l=l.firstChild),l}function ye(e,n=window.document){const t=n[Q]||(n[Q]=new Set);for(let s=0,l=e.length;s<l;s++){const i=e[s];t.has(i)||(t.add(i),n.addEventListener(i,be))}}function N(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return U(e,n,s,t);q(l=>U(e,n(),l,t),s)}function be(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),A.registry&&!A.done&&(A.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?s.call(t,l,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function U(e,n,t,s,l){for(A.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const i=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,i==="string"||i==="number"){if(A.context)return t;if(i==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=v(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||i==="boolean"){if(A.context)return t;t=v(e,t,s)}else{if(i==="function")return q(()=>{let o=n();for(;typeof o=="function";)o=o();t=U(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],c=t&&Array.isArray(t);if(K(o,n,t,l))return q(()=>t=U(e,o,t,s,!0)),()=>t;if(A.context){if(!o.length)return t;for(let u=0;u<o.length;u++)if(o[u].parentNode)return t=o}if(o.length===0){if(t=v(e,t,s),r)return t}else c?t.length===0?W(e,o,s):ge(e,t,o):(t&&v(e),W(e,o));t=o}else if(n instanceof Node){if(A.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=v(e,t,s,n);v(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function K(e,n,t,s){let l=!1;for(let i=0,r=n.length;i<r;i++){let o=n[i],c=t&&t[i];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))l=K(e,o,c)||l;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();l=K(e,Array.isArray(o)?o:[o],Array.isArray(c)?c:[c])||l}else e.push(o),l=!0;else{const u=String(o);c&&c.nodeType===3&&c.data===u?e.push(c):e.push(document.createTextNode(u))}}return l}function W(e,n,t=null){for(let s=0,l=n.length;s<l;s++)e.insertBefore(n[s],t)}function v(e,n,t,s){if(t===void 0)return e.textContent="";const l=s||document.createTextNode("");if(n.length){let i=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(l!==o){const c=o.parentNode===e;!i&&!r?c?e.replaceChild(l,o):e.insertBefore(l,t):c&&o.remove()}else i=!0}}else e.insertBefore(l,t);return[l]}const me=T("<div><h3> </h3><i></i><hr></div>"),Ae=e=>(()=>{const n=me.cloneNode(!0),t=n.firstChild,s=t.firstChild,l=t.nextSibling;return N(t,()=>e.text,s),N(t,()=>e.i,null),N(l,()=>e.text),n})(),xe=T("<h1>Todolist </h1>"),Se=T("<input>"),$e=T("<button>Add</button>"),Ce=T("<hr>"),Ee=()=>{let[e,n]=R([]),[t,s]=R(""),l=()=>{n(i=>[...i,t()]),console.log(e()),s("")};return[(()=>{const i=xe.cloneNode(!0);return i.firstChild,N(i,()=>e().length||"",null),i})(),(()=>{const i=Se.cloneNode(!0);return i.$$input=r=>s(r.currentTarget.value),q(()=>i.value=t()),i})(),(()=>{const i=$e.cloneNode(!0);return i.$$click=l,i})(),Ce.cloneNode(!0),J(()=>e().length==0?"Add a task":""),M(pe,{get each(){return e()},children:(i,r)=>M(Ae,{text:i,i:r})})]};ye(["input","click"]);const ve=T("<div></div>");function Ne(){return(()=>{const e=ve.cloneNode(!0);return N(e,M(Ee,{})),e})()}we(()=>M(Ne,{}),document.getElementById("root"));