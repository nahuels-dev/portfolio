(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function mc(r,t){const e=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)e[n[i]]=!0;return t?i=>!!e[i.toLowerCase()]:i=>!!e[i]}function gc(r){if(Ut(r)){const t={};for(let e=0;e<r.length;e++){const n=r[e],i=Me(n)?nm(n):gc(n);if(i)for(const s in i)t[s]=i[s]}return t}else{if(Me(r))return r;if(ae(r))return r}}const Qp=/;(?![^(]*\))/g,tm=/:([^]+)/,em=/\/\*.*?\*\//gs;function nm(r){const t={};return r.replace(em,"").split(Qp).forEach(e=>{if(e){const n=e.split(tm);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Ln(r){let t="";if(Me(r))t=r;else if(Ut(r))for(let e=0;e<r.length;e++){const n=Ln(r[e]);n&&(t+=n+" ")}else if(ae(r))for(const e in r)r[e]&&(t+=e+" ");return t.trim()}const im="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rm=mc(im);function xh(r){return!!r||r===""}const sm=r=>Me(r)?r:r==null?"":Ut(r)||ae(r)&&(r.toString===bh||!zt(r.toString))?JSON.stringify(r,yh,2):String(r),yh=(r,t)=>t&&t.__v_isRef?yh(r,t.value):qr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[n,i])=>(e[`${n} =>`]=i,e),{})}:Mh(t)?{[`Set(${t.size})`]:[...t.values()]}:ae(t)&&!Ut(t)&&!wh(t)?String(t):t,ee={},Wr=[],Dn=()=>{},am=()=>!1,om=/^on[^a-z]/,fo=r=>om.test(r),_c=r=>r.startsWith("onUpdate:"),ke=Object.assign,vc=(r,t)=>{const e=r.indexOf(t);e>-1&&r.splice(e,1)},lm=Object.prototype.hasOwnProperty,qt=(r,t)=>lm.call(r,t),Ut=Array.isArray,qr=r=>ho(r)==="[object Map]",Mh=r=>ho(r)==="[object Set]",zt=r=>typeof r=="function",Me=r=>typeof r=="string",xc=r=>typeof r=="symbol",ae=r=>r!==null&&typeof r=="object",Sh=r=>ae(r)&&zt(r.then)&&zt(r.catch),bh=Object.prototype.toString,ho=r=>bh.call(r),cm=r=>ho(r).slice(8,-1),wh=r=>ho(r)==="[object Object]",yc=r=>Me(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Va=mc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=r=>{const t=Object.create(null);return e=>t[e]||(t[e]=r(e))},um=/-(\w)/g,es=po(r=>r.replace(um,(t,e)=>e?e.toUpperCase():"")),fm=/\B([A-Z])/g,gs=po(r=>r.replace(fm,"-$1").toLowerCase()),Eh=po(r=>r.charAt(0).toUpperCase()+r.slice(1)),Fo=po(r=>r?`on${Eh(r)}`:""),Bs=(r,t)=>!Object.is(r,t),zo=(r,t)=>{for(let e=0;e<r.length;e++)r[e](t)},Ja=(r,t,e)=>{Object.defineProperty(r,t,{configurable:!0,enumerable:!1,value:e})},hm=r=>{const t=parseFloat(r);return isNaN(t)?r:t};let cu;const dm=()=>cu||(cu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let En;class pm{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=En,!t&&En&&(this.index=(En.scopes||(En.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=En;try{return En=this,t()}finally{En=e}}}on(){En=this}off(){En=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function mm(r,t=En){t&&t.active&&t.effects.push(r)}function gm(){return En}const Mc=r=>{const t=new Set(r);return t.w=0,t.n=0,t},Th=r=>(r.w&Ii)>0,Ah=r=>(r.n&Ii)>0,_m=({deps:r})=>{if(r.length)for(let t=0;t<r.length;t++)r[t].w|=Ii},vm=r=>{const{deps:t}=r;if(t.length){let e=0;for(let n=0;n<t.length;n++){const i=t[n];Th(i)&&!Ah(i)?i.delete(r):t[e++]=i,i.w&=~Ii,i.n&=~Ii}t.length=e}},Rl=new WeakMap;let Ps=0,Ii=1;const Dl=30;let An;const ar=Symbol(""),Il=Symbol("");class Sc{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,mm(this,n)}run(){if(!this.active)return this.fn();let t=An,e=Ci;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=An,An=this,Ci=!0,Ii=1<<++Ps,Ps<=Dl?_m(this):uu(this),this.fn()}finally{Ps<=Dl&&vm(this),Ii=1<<--Ps,An=this.parent,Ci=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){An===this?this.deferStop=!0:this.active&&(uu(this),this.onStop&&this.onStop(),this.active=!1)}}function uu(r){const{deps:t}=r;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(r);t.length=0}}let Ci=!0;const Ch=[];function _s(){Ch.push(Ci),Ci=!1}function vs(){const r=Ch.pop();Ci=r===void 0?!0:r}function je(r,t,e){if(Ci&&An){let n=Rl.get(r);n||Rl.set(r,n=new Map);let i=n.get(e);i||n.set(e,i=Mc()),Ph(i)}}function Ph(r,t){let e=!1;Ps<=Dl?Ah(r)||(r.n|=Ii,e=!Th(r)):e=!r.has(An),e&&(r.add(An),An.deps.push(r))}function hi(r,t,e,n,i,s){const a=Rl.get(r);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(e==="length"&&Ut(r)){const l=Number(n);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(e!==void 0&&o.push(a.get(e)),t){case"add":Ut(r)?yc(e)&&o.push(a.get("length")):(o.push(a.get(ar)),qr(r)&&o.push(a.get(Il)));break;case"delete":Ut(r)||(o.push(a.get(ar)),qr(r)&&o.push(a.get(Il)));break;case"set":qr(r)&&o.push(a.get(ar));break}if(o.length===1)o[0]&&Ol(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ol(Mc(l))}}function Ol(r,t){const e=Ut(r)?r:[...r];for(const n of e)n.computed&&fu(n);for(const n of e)n.computed||fu(n)}function fu(r,t){(r!==An||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const xm=mc("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(xc)),ym=bc(),Mm=bc(!1,!0),Sm=bc(!0),hu=bm();function bm(){const r={};return["includes","indexOf","lastIndexOf"].forEach(t=>{r[t]=function(...e){const n=Yt(this);for(let s=0,a=this.length;s<a;s++)je(n,"get",s+"");const i=n[t](...e);return i===-1||i===!1?n[t](...e.map(Yt)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{r[t]=function(...e){_s();const n=Yt(this)[t].apply(this,e);return vs(),n}}),r}function wm(r){const t=Yt(this);return je(t,"has",r),t.hasOwnProperty(r)}function bc(r=!1,t=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(r?t?Bm:Uh:t?Oh:Ih).get(n))return n;const a=Ut(n);if(!r){if(a&&qt(hu,i))return Reflect.get(hu,i,s);if(i==="hasOwnProperty")return wm}const o=Reflect.get(n,i,s);return(xc(i)?Lh.has(i):xm(i))||(r||je(n,"get",i),t)?o:de(o)?a&&yc(i)?o:o.value:ae(o)?r?Nh(o):Tc(o):o}}const Em=Rh(),Tm=Rh(!0);function Rh(r=!1){return function(e,n,i,s){let a=e[n];if(ns(a)&&de(a)&&!de(i))return!1;if(!r&&(!Qa(i)&&!ns(i)&&(a=Yt(a),i=Yt(i)),!Ut(e)&&de(a)&&!de(i)))return a.value=i,!0;const o=Ut(e)&&yc(n)?Number(n)<e.length:qt(e,n),l=Reflect.set(e,n,i,s);return e===Yt(s)&&(o?Bs(i,a)&&hi(e,"set",n,i):hi(e,"add",n,i)),l}}function Am(r,t){const e=qt(r,t);r[t];const n=Reflect.deleteProperty(r,t);return n&&e&&hi(r,"delete",t,void 0),n}function Cm(r,t){const e=Reflect.has(r,t);return(!xc(t)||!Lh.has(t))&&je(r,"has",t),e}function Pm(r){return je(r,"iterate",Ut(r)?"length":ar),Reflect.ownKeys(r)}const Dh={get:ym,set:Em,deleteProperty:Am,has:Cm,ownKeys:Pm},Lm={get:Sm,set(r,t){return!0},deleteProperty(r,t){return!0}},Rm=ke({},Dh,{get:Mm,set:Tm}),wc=r=>r,mo=r=>Reflect.getPrototypeOf(r);function ha(r,t,e=!1,n=!1){r=r.__v_raw;const i=Yt(r),s=Yt(t);e||(t!==s&&je(i,"get",t),je(i,"get",s));const{has:a}=mo(i),o=n?wc:e?Cc:Hs;if(a.call(i,t))return o(r.get(t));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(t)}function da(r,t=!1){const e=this.__v_raw,n=Yt(e),i=Yt(r);return t||(r!==i&&je(n,"has",r),je(n,"has",i)),r===i?e.has(r):e.has(r)||e.has(i)}function pa(r,t=!1){return r=r.__v_raw,!t&&je(Yt(r),"iterate",ar),Reflect.get(r,"size",r)}function du(r){r=Yt(r);const t=Yt(this);return mo(t).has.call(t,r)||(t.add(r),hi(t,"add",r,r)),this}function pu(r,t){t=Yt(t);const e=Yt(this),{has:n,get:i}=mo(e);let s=n.call(e,r);s||(r=Yt(r),s=n.call(e,r));const a=i.call(e,r);return e.set(r,t),s?Bs(t,a)&&hi(e,"set",r,t):hi(e,"add",r,t),this}function mu(r){const t=Yt(this),{has:e,get:n}=mo(t);let i=e.call(t,r);i||(r=Yt(r),i=e.call(t,r)),n&&n.call(t,r);const s=t.delete(r);return i&&hi(t,"delete",r,void 0),s}function gu(){const r=Yt(this),t=r.size!==0,e=r.clear();return t&&hi(r,"clear",void 0,void 0),e}function ma(r,t){return function(n,i){const s=this,a=s.__v_raw,o=Yt(a),l=t?wc:r?Cc:Hs;return!r&&je(o,"iterate",ar),a.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function ga(r,t,e){return function(...n){const i=this.__v_raw,s=Yt(i),a=qr(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,c=i[r](...n),u=e?wc:t?Cc:Hs;return!t&&je(s,"iterate",l?Il:ar),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function xi(r){return function(...t){return r==="delete"?!1:this}}function Dm(){const r={get(s){return ha(this,s)},get size(){return pa(this)},has:da,add:du,set:pu,delete:mu,clear:gu,forEach:ma(!1,!1)},t={get(s){return ha(this,s,!1,!0)},get size(){return pa(this)},has:da,add:du,set:pu,delete:mu,clear:gu,forEach:ma(!1,!0)},e={get(s){return ha(this,s,!0)},get size(){return pa(this,!0)},has(s){return da.call(this,s,!0)},add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear"),forEach:ma(!0,!1)},n={get(s){return ha(this,s,!0,!0)},get size(){return pa(this,!0)},has(s){return da.call(this,s,!0)},add:xi("add"),set:xi("set"),delete:xi("delete"),clear:xi("clear"),forEach:ma(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=ga(s,!1,!1),e[s]=ga(s,!0,!1),t[s]=ga(s,!1,!0),n[s]=ga(s,!0,!0)}),[r,e,t,n]}const[Im,Om,Um,Nm]=Dm();function Ec(r,t){const e=t?r?Nm:Um:r?Om:Im;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(qt(e,i)&&i in n?e:n,i,s)}const Fm={get:Ec(!1,!1)},zm={get:Ec(!1,!0)},km={get:Ec(!0,!1)},Ih=new WeakMap,Oh=new WeakMap,Uh=new WeakMap,Bm=new WeakMap;function Hm(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vm(r){return r.__v_skip||!Object.isExtensible(r)?0:Hm(cm(r))}function Tc(r){return ns(r)?r:Ac(r,!1,Dh,Fm,Ih)}function Gm(r){return Ac(r,!1,Rm,zm,Oh)}function Nh(r){return Ac(r,!0,Lm,km,Uh)}function Ac(r,t,e,n,i){if(!ae(r)||r.__v_raw&&!(t&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=Vm(r);if(a===0)return r;const o=new Proxy(r,a===2?n:e);return i.set(r,o),o}function Xr(r){return ns(r)?Xr(r.__v_raw):!!(r&&r.__v_isReactive)}function ns(r){return!!(r&&r.__v_isReadonly)}function Qa(r){return!!(r&&r.__v_isShallow)}function Fh(r){return Xr(r)||ns(r)}function Yt(r){const t=r&&r.__v_raw;return t?Yt(t):r}function zh(r){return Ja(r,"__v_skip",!0),r}const Hs=r=>ae(r)?Tc(r):r,Cc=r=>ae(r)?Nh(r):r;function kh(r){Ci&&An&&(r=Yt(r),Ph(r.dep||(r.dep=Mc())))}function Bh(r,t){r=Yt(r);const e=r.dep;e&&Ol(e)}function de(r){return!!(r&&r.__v_isRef===!0)}function Wm(r){return qm(r,!1)}function qm(r,t){return de(r)?r:new Xm(r,t)}class Xm{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Yt(t),this._value=e?t:Hs(t)}get value(){return kh(this),this._value}set value(t){const e=this.__v_isShallow||Qa(t)||ns(t);t=e?t:Yt(t),Bs(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Hs(t),Bh(this))}}function ye(r){return de(r)?r.value:r}const Ym={get:(r,t,e)=>ye(Reflect.get(r,t,e)),set:(r,t,e,n)=>{const i=r[t];return de(i)&&!de(e)?(i.value=e,!0):Reflect.set(r,t,e,n)}};function Hh(r){return Xr(r)?r:new Proxy(r,Ym)}var Vh;class jm{constructor(t,e,n,i){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this[Vh]=!1,this._dirty=!0,this.effect=new Sc(t,()=>{this._dirty||(this._dirty=!0,Bh(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const t=Yt(this);return kh(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}Vh="__v_isReadonly";function $m(r,t,e=!1){let n,i;const s=zt(r);return s?(n=r,i=Dn):(n=r.get,i=r.set),new jm(n,i,s||!i,e)}function Pi(r,t,e,n){let i;try{i=n?r(...n):r()}catch(s){go(s,t,e)}return i}function In(r,t,e,n){if(zt(r)){const s=Pi(r,t,e,n);return s&&Sh(s)&&s.catch(a=>{go(a,t,e)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(In(r[s],t,e,n));return i}function go(r,t,e,n=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=e;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,a,o)===!1)return}s=s.parent}const l=t.appContext.config.errorHandler;if(l){Pi(l,null,10,[r,a,o]);return}}Km(r,e,i,n)}function Km(r,t,e,n=!0){console.error(r)}let Vs=!1,Ul=!1;const Le=[];let Wn=0;const Yr=[];let ai=null,Qi=0;const Gh=Promise.resolve();let Pc=null;function Zm(r){const t=Pc||Gh;return r?t.then(this?r.bind(this):r):t}function Jm(r){let t=Wn+1,e=Le.length;for(;t<e;){const n=t+e>>>1;Gs(Le[n])<r?t=n+1:e=n}return t}function Lc(r){(!Le.length||!Le.includes(r,Vs&&r.allowRecurse?Wn+1:Wn))&&(r.id==null?Le.push(r):Le.splice(Jm(r.id),0,r),Wh())}function Wh(){!Vs&&!Ul&&(Ul=!0,Pc=Gh.then(Xh))}function Qm(r){const t=Le.indexOf(r);t>Wn&&Le.splice(t,1)}function tg(r){Ut(r)?Yr.push(...r):(!ai||!ai.includes(r,r.allowRecurse?Qi+1:Qi))&&Yr.push(r),Wh()}function _u(r,t=Vs?Wn+1:0){for(;t<Le.length;t++){const e=Le[t];e&&e.pre&&(Le.splice(t,1),t--,e())}}function qh(r){if(Yr.length){const t=[...new Set(Yr)];if(Yr.length=0,ai){ai.push(...t);return}for(ai=t,ai.sort((e,n)=>Gs(e)-Gs(n)),Qi=0;Qi<ai.length;Qi++)ai[Qi]();ai=null,Qi=0}}const Gs=r=>r.id==null?1/0:r.id,eg=(r,t)=>{const e=Gs(r)-Gs(t);if(e===0){if(r.pre&&!t.pre)return-1;if(t.pre&&!r.pre)return 1}return e};function Xh(r){Ul=!1,Vs=!0,Le.sort(eg);const t=Dn;try{for(Wn=0;Wn<Le.length;Wn++){const e=Le[Wn];e&&e.active!==!1&&Pi(e,null,14)}}finally{Wn=0,Le.length=0,qh(),Vs=!1,Pc=null,(Le.length||Yr.length)&&Xh()}}function ng(r,t,...e){if(r.isUnmounted)return;const n=r.vnode.props||ee;let i=e;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=n[u]||ee;h&&(i=e.map(d=>Me(d)?d.trim():d)),f&&(i=e.map(hm))}let o,l=n[o=Fo(t)]||n[o=Fo(es(t))];!l&&s&&(l=n[o=Fo(gs(t))]),l&&In(l,r,6,i);const c=n[o+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,In(c,r,6,i)}}function Yh(r,t,e=!1){const n=t.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let a={},o=!1;if(!zt(r)){const l=c=>{const u=Yh(c,t,!0);u&&(o=!0,ke(a,u))};!e&&t.mixins.length&&t.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!o?(ae(r)&&n.set(r,null),null):(Ut(s)?s.forEach(l=>a[l]=null):ke(a,s),ae(r)&&n.set(r,a),a)}function _o(r,t){return!r||!fo(t)?!1:(t=t.slice(2).replace(/Once$/,""),qt(r,t[0].toLowerCase()+t.slice(1))||qt(r,gs(t))||qt(r,t))}let Xn=null,vo=null;function to(r){const t=Xn;return Xn=r,vo=r&&r.type.__scopeId||null,t}function vr(r){vo=r}function xr(){vo=null}function ig(r,t=Xn,e){if(!t||r._n)return r;const n=(...i)=>{n._d&&Eu(-1);const s=to(t);let a;try{a=r(...i)}finally{to(s),n._d&&Eu(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function ko(r){const{type:t,vnode:e,proxy:n,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=r;let m,p;const b=to(r);try{if(e.shapeFlag&4){const v=i||n;m=Vn(u.call(v,v,f,s,d,h,_)),p=l}else{const v=t;m=Vn(v.length>1?v(s,{attrs:l,slots:o,emit:c}):v(s,null)),p=t.props?l:rg(l)}}catch(v){Ns.length=0,go(v,r,1),m=we(Ws)}let y=m;if(p&&g!==!1){const v=Object.keys(p),{shapeFlag:S}=y;v.length&&S&7&&(a&&v.some(_c)&&(p=sg(p,a)),y=is(y,p))}return e.dirs&&(y=is(y),y.dirs=y.dirs?y.dirs.concat(e.dirs):e.dirs),e.transition&&(y.transition=e.transition),m=y,to(b),m}const rg=r=>{let t;for(const e in r)(e==="class"||e==="style"||fo(e))&&((t||(t={}))[e]=r[e]);return t},sg=(r,t)=>{const e={};for(const n in r)(!_c(n)||!(n.slice(9)in t))&&(e[n]=r[n]);return e};function ag(r,t,e){const{props:n,children:i,component:s}=r,{props:a,children:o,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return n?vu(n,a,c):!!a;if(l&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==n[h]&&!_o(c,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?vu(n,a,c):!0:!!a;return!1}function vu(r,t,e){const n=Object.keys(t);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(t[s]!==r[s]&&!_o(e,s))return!0}return!1}function og({vnode:r,parent:t},e){for(;t&&t.subTree===r;)(r=t.vnode).el=e,t=t.parent}const lg=r=>r.__isSuspense;function cg(r,t){t&&t.pendingBranch?Ut(r)?t.effects.push(...r):t.effects.push(r):tg(r)}function ug(r,t){if(me){let e=me.provides;const n=me.parent&&me.parent.provides;n===e&&(e=me.provides=Object.create(n)),e[r]=t}}function Ga(r,t,e=!1){const n=me||Xn;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return e&&zt(t)?t.call(n.proxy):t}}const _a={};function Wa(r,t,e){return jh(r,t,e)}function jh(r,t,{immediate:e,deep:n,flush:i,onTrack:s,onTrigger:a}=ee){const o=gm()===(me==null?void 0:me.scope)?me:null;let l,c=!1,u=!1;if(de(r)?(l=()=>r.value,c=Qa(r)):Xr(r)?(l=()=>r,n=!0):Ut(r)?(u=!0,c=r.some(y=>Xr(y)||Qa(y)),l=()=>r.map(y=>{if(de(y))return y.value;if(Xr(y))return kr(y);if(zt(y))return Pi(y,o,2)})):zt(r)?t?l=()=>Pi(r,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),In(r,o,3,[h])}:l=Dn,t&&n){const y=l;l=()=>kr(y())}let f,h=y=>{f=p.onStop=()=>{Pi(y,o,4)}},d;if(Xs)if(h=Dn,t?e&&In(t,o,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const y=i_();d=y.__watcherHandles||(y.__watcherHandles=[])}else return Dn;let _=u?new Array(r.length).fill(_a):_a;const g=()=>{if(p.active)if(t){const y=p.run();(n||c||(u?y.some((v,S)=>Bs(v,_[S])):Bs(y,_)))&&(f&&f(),In(t,o,3,[y,_===_a?void 0:u&&_[0]===_a?[]:_,h]),_=y)}else p.run()};g.allowRecurse=!!t;let m;i==="sync"?m=g:i==="post"?m=()=>Be(g,o&&o.suspense):(g.pre=!0,o&&(g.id=o.uid),m=()=>Lc(g));const p=new Sc(l,m);t?e?g():_=p.run():i==="post"?Be(p.run.bind(p),o&&o.suspense):p.run();const b=()=>{p.stop(),o&&o.scope&&vc(o.scope.effects,p)};return d&&d.push(b),b}function fg(r,t,e){const n=this.proxy,i=Me(r)?r.includes(".")?$h(n,r):()=>n[r]:r.bind(n,n);let s;zt(t)?s=t:(s=t.handler,e=t);const a=me;rs(this);const o=jh(i,s.bind(n),e);return a?rs(a):or(),o}function $h(r,t){const e=t.split(".");return()=>{let n=r;for(let i=0;i<e.length&&n;i++)n=n[e[i]];return n}}function kr(r,t){if(!ae(r)||r.__v_skip||(t=t||new Set,t.has(r)))return r;if(t.add(r),de(r))kr(r.value,t);else if(Ut(r))for(let e=0;e<r.length;e++)kr(r[e],t);else if(Mh(r)||qr(r))r.forEach(e=>{kr(e,t)});else if(wh(r))for(const e in r)kr(r[e],t);return r}function yn(r){return zt(r)?{setup:r,name:r.name}:r}const qa=r=>!!r.type.__asyncLoader,Kh=r=>r.type.__isKeepAlive;function hg(r,t){Zh(r,"a",t)}function dg(r,t){Zh(r,"da",t)}function Zh(r,t,e=me){const n=r.__wdc||(r.__wdc=()=>{let i=e;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(xo(t,n,e),e){let i=e.parent;for(;i&&i.parent;)Kh(i.parent.vnode)&&pg(n,t,e,i),i=i.parent}}function pg(r,t,e,n){const i=xo(t,r,n,!0);Jh(()=>{vc(n[t],i)},e)}function xo(r,t,e=me,n=!1){if(e){const i=e[r]||(e[r]=[]),s=t.__weh||(t.__weh=(...a)=>{if(e.isUnmounted)return;_s(),rs(e);const o=In(t,e,r,a);return or(),vs(),o});return n?i.unshift(s):i.push(s),s}}const mi=r=>(t,e=me)=>(!Xs||r==="sp")&&xo(r,(...n)=>t(...n),e),mg=mi("bm"),yo=mi("m"),gg=mi("bu"),_g=mi("u"),vg=mi("bum"),Jh=mi("um"),xg=mi("sp"),yg=mi("rtg"),Mg=mi("rtc");function Sg(r,t=me){xo("ec",r,t)}function Vi(r,t,e,n){const i=r.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(_s(),In(l,e,8,[r.el,o,r,t]),vs())}}const bg=Symbol(),Nl=r=>r?ld(r)?Uc(r)||r.proxy:Nl(r.parent):null,Us=ke(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Nl(r.parent),$root:r=>Nl(r.root),$emit:r=>r.emit,$options:r=>Rc(r),$forceUpdate:r=>r.f||(r.f=()=>Lc(r.update)),$nextTick:r=>r.n||(r.n=Zm.bind(r.proxy)),$watch:r=>fg.bind(r)}),Bo=(r,t)=>r!==ee&&!r.__isScriptSetup&&qt(r,t),wg={get({_:r},t){const{ctx:e,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=r;let c;if(t[0]!=="$"){const d=a[t];if(d!==void 0)switch(d){case 1:return n[t];case 2:return i[t];case 4:return e[t];case 3:return s[t]}else{if(Bo(n,t))return a[t]=1,n[t];if(i!==ee&&qt(i,t))return a[t]=2,i[t];if((c=r.propsOptions[0])&&qt(c,t))return a[t]=3,s[t];if(e!==ee&&qt(e,t))return a[t]=4,e[t];Fl&&(a[t]=0)}}const u=Us[t];let f,h;if(u)return t==="$attrs"&&je(r,"get",t),u(r);if((f=o.__cssModules)&&(f=f[t]))return f;if(e!==ee&&qt(e,t))return a[t]=4,e[t];if(h=l.config.globalProperties,qt(h,t))return h[t]},set({_:r},t,e){const{data:n,setupState:i,ctx:s}=r;return Bo(i,t)?(i[t]=e,!0):n!==ee&&qt(n,t)?(n[t]=e,!0):qt(r.props,t)||t[0]==="$"&&t.slice(1)in r?!1:(s[t]=e,!0)},has({_:{data:r,setupState:t,accessCache:e,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!e[a]||r!==ee&&qt(r,a)||Bo(t,a)||(o=s[0])&&qt(o,a)||qt(n,a)||qt(Us,a)||qt(i.config.globalProperties,a)},defineProperty(r,t,e){return e.get!=null?r._.accessCache[t]=0:qt(e,"value")&&this.set(r,t,e.value,null),Reflect.defineProperty(r,t,e)}};let Fl=!0;function Eg(r){const t=Rc(r),e=r.proxy,n=r.ctx;Fl=!1,t.beforeCreate&&xu(t.beforeCreate,r,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:y,unmounted:v,render:S,renderTracked:C,renderTriggered:P,errorCaptured:R,serverPrefetch:x,expose:E,inheritAttrs:q,components:Y,directives:U,filters:z}=t;if(c&&Tg(c,n,null,r.appContext.config.unwrapInjectedRef),a)for(const H in a){const V=a[H];zt(V)&&(n[H]=V.bind(e))}if(i){const H=i.call(e,e);ae(H)&&(r.data=Tc(H))}if(Fl=!0,s)for(const H in s){const V=s[H],lt=zt(V)?V.bind(e,e):zt(V.get)?V.get.bind(e,e):Dn,ot=!zt(V)&&zt(V.set)?V.set.bind(e):Dn,Et=e_({get:lt,set:ot});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>Et.value,set:ut=>Et.value=ut})}if(o)for(const H in o)Qh(o[H],n,e,H);if(l){const H=zt(l)?l.call(e):l;Reflect.ownKeys(H).forEach(V=>{ug(V,H[V])})}u&&xu(u,r,"c");function $(H,V){Ut(V)?V.forEach(lt=>H(lt.bind(e))):V&&H(V.bind(e))}if($(mg,f),$(yo,h),$(gg,d),$(_g,_),$(hg,g),$(dg,m),$(Sg,R),$(Mg,C),$(yg,P),$(vg,b),$(Jh,v),$(xg,x),Ut(E))if(E.length){const H=r.exposed||(r.exposed={});E.forEach(V=>{Object.defineProperty(H,V,{get:()=>e[V],set:lt=>e[V]=lt})})}else r.exposed||(r.exposed={});S&&r.render===Dn&&(r.render=S),q!=null&&(r.inheritAttrs=q),Y&&(r.components=Y),U&&(r.directives=U)}function Tg(r,t,e=Dn,n=!1){Ut(r)&&(r=zl(r));for(const i in r){const s=r[i];let a;ae(s)?"default"in s?a=Ga(s.from||i,s.default,!0):a=Ga(s.from||i):a=Ga(s),de(a)&&n?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):t[i]=a}}function xu(r,t,e){In(Ut(r)?r.map(n=>n.bind(t.proxy)):r.bind(t.proxy),t,e)}function Qh(r,t,e,n){const i=n.includes(".")?$h(e,n):()=>e[n];if(Me(r)){const s=t[r];zt(s)&&Wa(i,s)}else if(zt(r))Wa(i,r.bind(e));else if(ae(r))if(Ut(r))r.forEach(s=>Qh(s,t,e,n));else{const s=zt(r.handler)?r.handler.bind(e):t[r.handler];zt(s)&&Wa(i,s,r)}}function Rc(r){const t=r.type,{mixins:e,extends:n}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=r.appContext,o=s.get(t);let l;return o?l=o:!i.length&&!e&&!n?l=t:(l={},i.length&&i.forEach(c=>eo(l,c,a,!0)),eo(l,t,a)),ae(t)&&s.set(t,l),l}function eo(r,t,e,n=!1){const{mixins:i,extends:s}=t;s&&eo(r,s,e,!0),i&&i.forEach(a=>eo(r,a,e,!0));for(const a in t)if(!(n&&a==="expose")){const o=Ag[a]||e&&e[a];r[a]=o?o(r[a],t[a]):t[a]}return r}const Ag={data:yu,props:$i,emits:$i,methods:$i,computed:$i,beforeCreate:Ne,created:Ne,beforeMount:Ne,mounted:Ne,beforeUpdate:Ne,updated:Ne,beforeDestroy:Ne,beforeUnmount:Ne,destroyed:Ne,unmounted:Ne,activated:Ne,deactivated:Ne,errorCaptured:Ne,serverPrefetch:Ne,components:$i,directives:$i,watch:Pg,provide:yu,inject:Cg};function yu(r,t){return t?r?function(){return ke(zt(r)?r.call(this,this):r,zt(t)?t.call(this,this):t)}:t:r}function Cg(r,t){return $i(zl(r),zl(t))}function zl(r){if(Ut(r)){const t={};for(let e=0;e<r.length;e++)t[r[e]]=r[e];return t}return r}function Ne(r,t){return r?[...new Set([].concat(r,t))]:t}function $i(r,t){return r?ke(ke(Object.create(null),r),t):t}function Pg(r,t){if(!r)return t;if(!t)return r;const e=ke(Object.create(null),r);for(const n in t)e[n]=Ne(r[n],t[n]);return e}function Lg(r,t,e,n=!1){const i={},s={};Ja(s,So,1),r.propsDefaults=Object.create(null),td(r,t,i,s);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);e?r.props=n?i:Gm(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function Rg(r,t,e,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=r,o=Yt(i),[l]=r.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=r.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(_o(r.emitsOptions,h))continue;const d=t[h];if(l)if(qt(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=es(h);i[_]=kl(l,o,_,d,r,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{td(r,t,i,s)&&(c=!0);let u;for(const f in o)(!t||!qt(t,f)&&((u=gs(f))===f||!qt(t,u)))&&(l?e&&(e[f]!==void 0||e[u]!==void 0)&&(i[f]=kl(l,o,f,void 0,r,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!qt(t,f))&&(delete s[f],c=!0)}c&&hi(r,"set","$attrs")}function td(r,t,e,n){const[i,s]=r.propsOptions;let a=!1,o;if(t)for(let l in t){if(Va(l))continue;const c=t[l];let u;i&&qt(i,u=es(l))?!s||!s.includes(u)?e[u]=c:(o||(o={}))[u]=c:_o(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=Yt(e),c=o||ee;for(let u=0;u<s.length;u++){const f=s[u];e[f]=kl(i,l,f,c[f],r,!qt(c,f))}}return a}function kl(r,t,e,n,i,s){const a=r[e];if(a!=null){const o=qt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&zt(l)){const{propsDefaults:c}=i;e in c?n=c[e]:(rs(i),n=c[e]=l.call(null,t),or())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===gs(e))&&(n=!0))}return n}function ed(r,t,e=!1){const n=t.propsCache,i=n.get(r);if(i)return i;const s=r.props,a={},o=[];let l=!1;if(!zt(r)){const u=f=>{l=!0;const[h,d]=ed(f,t,!0);ke(a,h),d&&o.push(...d)};!e&&t.mixins.length&&t.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return ae(r)&&n.set(r,Wr),Wr;if(Ut(s))for(let u=0;u<s.length;u++){const f=es(s[u]);Mu(f)&&(a[f]=ee)}else if(s)for(const u in s){const f=es(u);if(Mu(f)){const h=s[u],d=a[f]=Ut(h)||zt(h)?{type:h}:Object.assign({},h);if(d){const _=wu(Boolean,d.type),g=wu(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||qt(d,"default"))&&o.push(f)}}}const c=[a,o];return ae(r)&&n.set(r,c),c}function Mu(r){return r[0]!=="$"}function Su(r){const t=r&&r.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:r===null?"null":""}function bu(r,t){return Su(r)===Su(t)}function wu(r,t){return Ut(t)?t.findIndex(e=>bu(e,r)):zt(t)&&bu(t,r)?0:-1}const nd=r=>r[0]==="_"||r==="$stable",Dc=r=>Ut(r)?r.map(Vn):[Vn(r)],Dg=(r,t,e)=>{if(t._n)return t;const n=ig((...i)=>Dc(t(...i)),e);return n._c=!1,n},id=(r,t,e)=>{const n=r._ctx;for(const i in r){if(nd(i))continue;const s=r[i];if(zt(s))t[i]=Dg(i,s,n);else if(s!=null){const a=Dc(s);t[i]=()=>a}}},rd=(r,t)=>{const e=Dc(t);r.slots.default=()=>e},Ig=(r,t)=>{if(r.vnode.shapeFlag&32){const e=t._;e?(r.slots=Yt(t),Ja(t,"_",e)):id(t,r.slots={})}else r.slots={},t&&rd(r,t);Ja(r.slots,So,1)},Og=(r,t,e)=>{const{vnode:n,slots:i}=r;let s=!0,a=ee;if(n.shapeFlag&32){const o=t._;o?e&&o===1?s=!1:(ke(i,t),!e&&o===1&&delete i._):(s=!t.$stable,id(t,i)),a=t}else t&&(rd(r,t),a={default:1});if(s)for(const o in i)!nd(o)&&!(o in a)&&delete i[o]};function sd(){return{app:null,config:{isNativeTag:am,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ug=0;function Ng(r,t){return function(n,i=null){zt(n)||(n=Object.assign({},n)),i!=null&&!ae(i)&&(i=null);const s=sd(),a=new Set;let o=!1;const l=s.app={_uid:Ug++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:r_,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&zt(c.install)?(a.add(c),c.install(l,...u)):zt(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=we(n,i);return h.appContext=s,u&&t?t(h,c):r(h,c,f),o=!0,l._container=c,c.__vue_app__=l,Uc(h.component)||h.component.proxy}},unmount(){o&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Bl(r,t,e,n,i=!1){if(Ut(r)){r.forEach((h,d)=>Bl(h,t&&(Ut(t)?t[d]:t),e,n,i));return}if(qa(n)&&!i)return;const s=n.shapeFlag&4?Uc(n.component)||n.component.proxy:n.el,a=i?null:s,{i:o,r:l}=r,c=t&&t.r,u=o.refs===ee?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(Me(c)?(u[c]=null,qt(f,c)&&(f[c]=null)):de(c)&&(c.value=null)),zt(l))Pi(l,o,12,[a,u]);else{const h=Me(l),d=de(l);if(h||d){const _=()=>{if(r.f){const g=h?qt(f,l)?f[l]:u[l]:l.value;i?Ut(g)&&vc(g,s):Ut(g)?g.includes(s)||g.push(s):h?(u[l]=[s],qt(f,l)&&(f[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else h?(u[l]=a,qt(f,l)&&(f[l]=a)):d&&(l.value=a,r.k&&(u[r.k]=a))};a?(_.id=-1,Be(_,e)):_()}}}const Be=cg;function Fg(r){return zg(r)}function zg(r,t){const e=dm();e.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=Dn,insertStaticContent:_}=r,g=(A,L,k,et=null,Q=null,ct=null,mt=!1,rt=null,ft=!!L.dynamicChildren)=>{if(A===L)return;A&&!Ss(A,L)&&(et=F(A),ut(A,Q,ct,!0),A=null),L.patchFlag===-2&&(ft=!1,L.dynamicChildren=null);const{type:at,ref:w,shapeFlag:M}=L;switch(at){case Mo:m(A,L,k,et);break;case Ws:p(A,L,k,et);break;case Xa:A==null&&b(L,k,et,mt);break;case Hn:Y(A,L,k,et,Q,ct,mt,rt,ft);break;default:M&1?S(A,L,k,et,Q,ct,mt,rt,ft):M&6?U(A,L,k,et,Q,ct,mt,rt,ft):(M&64||M&128)&&at.process(A,L,k,et,Q,ct,mt,rt,ft,vt)}w!=null&&Q&&Bl(w,A&&A.ref,ct,L||A,!L)},m=(A,L,k,et)=>{if(A==null)n(L.el=o(L.children),k,et);else{const Q=L.el=A.el;L.children!==A.children&&c(Q,L.children)}},p=(A,L,k,et)=>{A==null?n(L.el=l(L.children||""),k,et):L.el=A.el},b=(A,L,k,et)=>{[A.el,A.anchor]=_(A.children,L,k,et,A.el,A.anchor)},y=({el:A,anchor:L},k,et)=>{let Q;for(;A&&A!==L;)Q=h(A),n(A,k,et),A=Q;n(L,k,et)},v=({el:A,anchor:L})=>{let k;for(;A&&A!==L;)k=h(A),i(A),A=k;i(L)},S=(A,L,k,et,Q,ct,mt,rt,ft)=>{mt=mt||L.type==="svg",A==null?C(L,k,et,Q,ct,mt,rt,ft):x(A,L,Q,ct,mt,rt,ft)},C=(A,L,k,et,Q,ct,mt,rt)=>{let ft,at;const{type:w,props:M,shapeFlag:N,transition:j,dirs:J}=A;if(ft=A.el=a(A.type,ct,M&&M.is,M),N&8?u(ft,A.children):N&16&&R(A.children,ft,null,et,Q,ct&&w!=="foreignObject",mt,rt),J&&Vi(A,null,et,"created"),P(ft,A,A.scopeId,mt,et),M){for(const xt in M)xt!=="value"&&!Va(xt)&&s(ft,xt,null,M[xt],ct,A.children,et,Q,st);"value"in M&&s(ft,"value",null,M.value),(at=M.onVnodeBeforeMount)&&zn(at,et,A)}J&&Vi(A,null,et,"beforeMount");const dt=(!Q||Q&&!Q.pendingBranch)&&j&&!j.persisted;dt&&j.beforeEnter(ft),n(ft,L,k),((at=M&&M.onVnodeMounted)||dt||J)&&Be(()=>{at&&zn(at,et,A),dt&&j.enter(ft),J&&Vi(A,null,et,"mounted")},Q)},P=(A,L,k,et,Q)=>{if(k&&d(A,k),et)for(let ct=0;ct<et.length;ct++)d(A,et[ct]);if(Q){let ct=Q.subTree;if(L===ct){const mt=Q.vnode;P(A,mt,mt.scopeId,mt.slotScopeIds,Q.parent)}}},R=(A,L,k,et,Q,ct,mt,rt,ft=0)=>{for(let at=ft;at<A.length;at++){const w=A[at]=rt?wi(A[at]):Vn(A[at]);g(null,w,L,k,et,Q,ct,mt,rt)}},x=(A,L,k,et,Q,ct,mt)=>{const rt=L.el=A.el;let{patchFlag:ft,dynamicChildren:at,dirs:w}=L;ft|=A.patchFlag&16;const M=A.props||ee,N=L.props||ee;let j;k&&Gi(k,!1),(j=N.onVnodeBeforeUpdate)&&zn(j,k,L,A),w&&Vi(L,A,k,"beforeUpdate"),k&&Gi(k,!0);const J=Q&&L.type!=="foreignObject";if(at?E(A.dynamicChildren,at,rt,k,et,J,ct):mt||V(A,L,rt,null,k,et,J,ct,!1),ft>0){if(ft&16)q(rt,L,M,N,k,et,Q);else if(ft&2&&M.class!==N.class&&s(rt,"class",null,N.class,Q),ft&4&&s(rt,"style",M.style,N.style,Q),ft&8){const dt=L.dynamicProps;for(let xt=0;xt<dt.length;xt++){const gt=dt[xt],Z=M[gt],Tt=N[gt];(Tt!==Z||gt==="value")&&s(rt,gt,Z,Tt,Q,A.children,k,et,st)}}ft&1&&A.children!==L.children&&u(rt,L.children)}else!mt&&at==null&&q(rt,L,M,N,k,et,Q);((j=N.onVnodeUpdated)||w)&&Be(()=>{j&&zn(j,k,L,A),w&&Vi(L,A,k,"updated")},et)},E=(A,L,k,et,Q,ct,mt)=>{for(let rt=0;rt<L.length;rt++){const ft=A[rt],at=L[rt],w=ft.el&&(ft.type===Hn||!Ss(ft,at)||ft.shapeFlag&70)?f(ft.el):k;g(ft,at,w,null,et,Q,ct,mt,!0)}},q=(A,L,k,et,Q,ct,mt)=>{if(k!==et){if(k!==ee)for(const rt in k)!Va(rt)&&!(rt in et)&&s(A,rt,k[rt],null,mt,L.children,Q,ct,st);for(const rt in et){if(Va(rt))continue;const ft=et[rt],at=k[rt];ft!==at&&rt!=="value"&&s(A,rt,at,ft,mt,L.children,Q,ct,st)}"value"in et&&s(A,"value",k.value,et.value)}},Y=(A,L,k,et,Q,ct,mt,rt,ft)=>{const at=L.el=A?A.el:o(""),w=L.anchor=A?A.anchor:o("");let{patchFlag:M,dynamicChildren:N,slotScopeIds:j}=L;j&&(rt=rt?rt.concat(j):j),A==null?(n(at,k,et),n(w,k,et),R(L.children,k,w,Q,ct,mt,rt,ft)):M>0&&M&64&&N&&A.dynamicChildren?(E(A.dynamicChildren,N,k,Q,ct,mt,rt),(L.key!=null||Q&&L===Q.subTree)&&ad(A,L,!0)):V(A,L,k,w,Q,ct,mt,rt,ft)},U=(A,L,k,et,Q,ct,mt,rt,ft)=>{L.slotScopeIds=rt,A==null?L.shapeFlag&512?Q.ctx.activate(L,k,et,mt,ft):z(L,k,et,Q,ct,mt,ft):W(A,L,ft)},z=(A,L,k,et,Q,ct,mt)=>{const rt=A.component=$g(A,et,Q);if(Kh(A)&&(rt.ctx.renderer=vt),Kg(rt),rt.asyncDep){if(Q&&Q.registerDep(rt,$),!A.el){const ft=rt.subTree=we(Ws);p(null,ft,L,k)}return}$(rt,A,L,k,Q,ct,mt)},W=(A,L,k)=>{const et=L.component=A.component;if(ag(A,L,k))if(et.asyncDep&&!et.asyncResolved){H(et,L,k);return}else et.next=L,Qm(et.update),et.update();else L.el=A.el,et.vnode=L},$=(A,L,k,et,Q,ct,mt)=>{const rt=()=>{if(A.isMounted){let{next:w,bu:M,u:N,parent:j,vnode:J}=A,dt=w,xt;Gi(A,!1),w?(w.el=J.el,H(A,w,mt)):w=J,M&&zo(M),(xt=w.props&&w.props.onVnodeBeforeUpdate)&&zn(xt,j,w,J),Gi(A,!0);const gt=ko(A),Z=A.subTree;A.subTree=gt,g(Z,gt,f(Z.el),F(Z),A,Q,ct),w.el=gt.el,dt===null&&og(A,gt.el),N&&Be(N,Q),(xt=w.props&&w.props.onVnodeUpdated)&&Be(()=>zn(xt,j,w,J),Q)}else{let w;const{el:M,props:N}=L,{bm:j,m:J,parent:dt}=A,xt=qa(L);if(Gi(A,!1),j&&zo(j),!xt&&(w=N&&N.onVnodeBeforeMount)&&zn(w,dt,L),Gi(A,!0),M&&St){const gt=()=>{A.subTree=ko(A),St(M,A.subTree,A,Q,null)};xt?L.type.__asyncLoader().then(()=>!A.isUnmounted&&gt()):gt()}else{const gt=A.subTree=ko(A);g(null,gt,k,et,A,Q,ct),L.el=gt.el}if(J&&Be(J,Q),!xt&&(w=N&&N.onVnodeMounted)){const gt=L;Be(()=>zn(w,dt,gt),Q)}(L.shapeFlag&256||dt&&qa(dt.vnode)&&dt.vnode.shapeFlag&256)&&A.a&&Be(A.a,Q),A.isMounted=!0,L=k=et=null}},ft=A.effect=new Sc(rt,()=>Lc(at),A.scope),at=A.update=()=>ft.run();at.id=A.uid,Gi(A,!0),at()},H=(A,L,k)=>{L.component=A;const et=A.vnode.props;A.vnode=L,A.next=null,Rg(A,L.props,et,k),Og(A,L.children,k),_s(),_u(),vs()},V=(A,L,k,et,Q,ct,mt,rt,ft=!1)=>{const at=A&&A.children,w=A?A.shapeFlag:0,M=L.children,{patchFlag:N,shapeFlag:j}=L;if(N>0){if(N&128){ot(at,M,k,et,Q,ct,mt,rt,ft);return}else if(N&256){lt(at,M,k,et,Q,ct,mt,rt,ft);return}}j&8?(w&16&&st(at,Q,ct),M!==at&&u(k,M)):w&16?j&16?ot(at,M,k,et,Q,ct,mt,rt,ft):st(at,Q,ct,!0):(w&8&&u(k,""),j&16&&R(M,k,et,Q,ct,mt,rt,ft))},lt=(A,L,k,et,Q,ct,mt,rt,ft)=>{A=A||Wr,L=L||Wr;const at=A.length,w=L.length,M=Math.min(at,w);let N;for(N=0;N<M;N++){const j=L[N]=ft?wi(L[N]):Vn(L[N]);g(A[N],j,k,null,Q,ct,mt,rt,ft)}at>w?st(A,Q,ct,!0,!1,M):R(L,k,et,Q,ct,mt,rt,ft,M)},ot=(A,L,k,et,Q,ct,mt,rt,ft)=>{let at=0;const w=L.length;let M=A.length-1,N=w-1;for(;at<=M&&at<=N;){const j=A[at],J=L[at]=ft?wi(L[at]):Vn(L[at]);if(Ss(j,J))g(j,J,k,null,Q,ct,mt,rt,ft);else break;at++}for(;at<=M&&at<=N;){const j=A[M],J=L[N]=ft?wi(L[N]):Vn(L[N]);if(Ss(j,J))g(j,J,k,null,Q,ct,mt,rt,ft);else break;M--,N--}if(at>M){if(at<=N){const j=N+1,J=j<w?L[j].el:et;for(;at<=N;)g(null,L[at]=ft?wi(L[at]):Vn(L[at]),k,J,Q,ct,mt,rt,ft),at++}}else if(at>N)for(;at<=M;)ut(A[at],Q,ct,!0),at++;else{const j=at,J=at,dt=new Map;for(at=J;at<=N;at++){const Mt=L[at]=ft?wi(L[at]):Vn(L[at]);Mt.key!=null&&dt.set(Mt.key,at)}let xt,gt=0;const Z=N-J+1;let Tt=!1,At=0;const Ct=new Array(Z);for(at=0;at<Z;at++)Ct[at]=0;for(at=j;at<=M;at++){const Mt=A[at];if(gt>=Z){ut(Mt,Q,ct,!0);continue}let It;if(Mt.key!=null)It=dt.get(Mt.key);else for(xt=J;xt<=N;xt++)if(Ct[xt-J]===0&&Ss(Mt,L[xt])){It=xt;break}It===void 0?ut(Mt,Q,ct,!0):(Ct[It-J]=at+1,It>=At?At=It:Tt=!0,g(Mt,L[It],k,null,Q,ct,mt,rt,ft),gt++)}const wt=Tt?kg(Ct):Wr;for(xt=wt.length-1,at=Z-1;at>=0;at--){const Mt=J+at,It=L[Mt],Xt=Mt+1<w?L[Mt+1].el:et;Ct[at]===0?g(null,It,k,Xt,Q,ct,mt,rt,ft):Tt&&(xt<0||at!==wt[xt]?Et(It,k,Xt,2):xt--)}}},Et=(A,L,k,et,Q=null)=>{const{el:ct,type:mt,transition:rt,children:ft,shapeFlag:at}=A;if(at&6){Et(A.component.subTree,L,k,et);return}if(at&128){A.suspense.move(L,k,et);return}if(at&64){mt.move(A,L,k,vt);return}if(mt===Hn){n(ct,L,k);for(let M=0;M<ft.length;M++)Et(ft[M],L,k,et);n(A.anchor,L,k);return}if(mt===Xa){y(A,L,k);return}if(et!==2&&at&1&&rt)if(et===0)rt.beforeEnter(ct),n(ct,L,k),Be(()=>rt.enter(ct),Q);else{const{leave:M,delayLeave:N,afterLeave:j}=rt,J=()=>n(ct,L,k),dt=()=>{M(ct,()=>{J(),j&&j()})};N?N(ct,J,dt):dt()}else n(ct,L,k)},ut=(A,L,k,et=!1,Q=!1)=>{const{type:ct,props:mt,ref:rt,children:ft,dynamicChildren:at,shapeFlag:w,patchFlag:M,dirs:N}=A;if(rt!=null&&Bl(rt,null,k,A,!0),w&256){L.ctx.deactivate(A);return}const j=w&1&&N,J=!qa(A);let dt;if(J&&(dt=mt&&mt.onVnodeBeforeUnmount)&&zn(dt,L,A),w&6)K(A.component,k,et);else{if(w&128){A.suspense.unmount(k,et);return}j&&Vi(A,null,L,"beforeUnmount"),w&64?A.type.remove(A,L,k,Q,vt,et):at&&(ct!==Hn||M>0&&M&64)?st(at,L,k,!1,!0):(ct===Hn&&M&384||!Q&&w&16)&&st(ft,L,k),et&&D(A)}(J&&(dt=mt&&mt.onVnodeUnmounted)||j)&&Be(()=>{dt&&zn(dt,L,A),j&&Vi(A,null,L,"unmounted")},k)},D=A=>{const{type:L,el:k,anchor:et,transition:Q}=A;if(L===Hn){O(k,et);return}if(L===Xa){v(A);return}const ct=()=>{i(k),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(A.shapeFlag&1&&Q&&!Q.persisted){const{leave:mt,delayLeave:rt}=Q,ft=()=>mt(k,ct);rt?rt(A.el,ct,ft):ft()}else ct()},O=(A,L)=>{let k;for(;A!==L;)k=h(A),i(A),A=k;i(L)},K=(A,L,k)=>{const{bum:et,scope:Q,update:ct,subTree:mt,um:rt}=A;et&&zo(et),Q.stop(),ct&&(ct.active=!1,ut(mt,A,L,k)),rt&&Be(rt,L),Be(()=>{A.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},st=(A,L,k,et=!1,Q=!1,ct=0)=>{for(let mt=ct;mt<A.length;mt++)ut(A[mt],L,k,et,Q)},F=A=>A.shapeFlag&6?F(A.component.subTree):A.shapeFlag&128?A.suspense.next():h(A.anchor||A.el),yt=(A,L,k)=>{A==null?L._vnode&&ut(L._vnode,null,null,!0):g(L._vnode||null,A,L,null,null,null,k),_u(),qh(),L._vnode=A},vt={p:g,um:ut,m:Et,r:D,mt:z,mc:R,pc:V,pbc:E,n:F,o:r};let ht,St;return t&&([ht,St]=t(vt)),{render:yt,hydrate:ht,createApp:Ng(yt,ht)}}function Gi({effect:r,update:t},e){r.allowRecurse=t.allowRecurse=e}function ad(r,t,e=!1){const n=r.children,i=t.children;if(Ut(n)&&Ut(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=wi(i[s]),o.el=a.el),e||ad(a,o)),o.type===Mo&&(o.el=a.el)}}function kg(r){const t=r.slice(),e=[0];let n,i,s,a,o;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=e[e.length-1],r[i]<c){t[n]=i,e.push(n);continue}for(s=0,a=e.length-1;s<a;)o=s+a>>1,r[e[o]]<c?s=o+1:a=o;c<r[e[s]]&&(s>0&&(t[n]=e[s-1]),e[s]=n)}}for(s=e.length,a=e[s-1];s-- >0;)e[s]=a,a=t[a];return e}const Bg=r=>r.__isTeleport,Hn=Symbol(void 0),Mo=Symbol(void 0),Ws=Symbol(void 0),Xa=Symbol(void 0),Ns=[];let Rn=null;function gi(r=!1){Ns.push(Rn=r?null:[])}function Hg(){Ns.pop(),Rn=Ns[Ns.length-1]||null}let qs=1;function Eu(r){qs+=r}function Vg(r){return r.dynamicChildren=qs>0?Rn||Wr:null,Hg(),qs>0&&Rn&&Rn.push(r),r}function _i(r,t,e,n,i,s){return Vg(Rt(r,t,e,n,i,s,!0))}function Gg(r){return r?r.__v_isVNode===!0:!1}function Ss(r,t){return r.type===t.type&&r.key===t.key}const So="__vInternal",od=({key:r})=>r??null,Ya=({ref:r,ref_key:t,ref_for:e})=>r!=null?Me(r)||de(r)||zt(r)?{i:Xn,r,k:t,f:!!e}:r:null;function Rt(r,t=null,e=null,n=0,i=null,s=r===Hn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:t,key:t&&od(t),ref:t&&Ya(t),scopeId:vo,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Xn};return o?(Oc(l,e),s&128&&r.normalize(l)):e&&(l.shapeFlag|=Me(e)?8:16),qs>0&&!a&&Rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rn.push(l),l}const we=Wg;function Wg(r,t=null,e=null,n=0,i=null,s=!1){if((!r||r===bg)&&(r=Ws),Gg(r)){const o=is(r,t,!0);return e&&Oc(o,e),qs>0&&!s&&Rn&&(o.shapeFlag&6?Rn[Rn.indexOf(r)]=o:Rn.push(o)),o.patchFlag|=-2,o}if(t_(r)&&(r=r.__vccOpts),t){t=qg(t);let{class:o,style:l}=t;o&&!Me(o)&&(t.class=Ln(o)),ae(l)&&(Fh(l)&&!Ut(l)&&(l=ke({},l)),t.style=gc(l))}const a=Me(r)?1:lg(r)?128:Bg(r)?64:ae(r)?4:zt(r)?2:0;return Rt(r,t,e,n,i,a,s,!0)}function qg(r){return r?Fh(r)||So in r?ke({},r):r:null}function is(r,t,e=!1){const{props:n,ref:i,patchFlag:s,children:a}=r,o=t?Xg(n||{},t):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&od(o),ref:t&&t.ref?e&&i?Ut(i)?i.concat(Ya(t)):[i,Ya(t)]:Ya(t):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:t&&r.type!==Hn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&is(r.ssContent),ssFallback:r.ssFallback&&is(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function nr(r=" ",t=0){return we(Mo,null,r,t)}function Ic(r,t){const e=we(Xa,null,r);return e.staticCount=t,e}function Vn(r){return r==null||typeof r=="boolean"?we(Ws):Ut(r)?we(Hn,null,r.slice()):typeof r=="object"?wi(r):we(Mo,null,String(r))}function wi(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:is(r)}function Oc(r,t){let e=0;const{shapeFlag:n}=r;if(t==null)t=null;else if(Ut(t))e=16;else if(typeof t=="object")if(n&65){const i=t.default;i&&(i._c&&(i._d=!1),Oc(r,i()),i._c&&(i._d=!0));return}else{e=32;const i=t._;!i&&!(So in t)?t._ctx=Xn:i===3&&Xn&&(Xn.slots._===1?t._=1:(t._=2,r.patchFlag|=1024))}else zt(t)?(t={default:t,_ctx:Xn},e=32):(t=String(t),n&64?(e=16,t=[nr(t)]):e=8);r.children=t,r.shapeFlag|=e}function Xg(...r){const t={};for(let e=0;e<r.length;e++){const n=r[e];for(const i in n)if(i==="class")t.class!==n.class&&(t.class=Ln([t.class,n.class]));else if(i==="style")t.style=gc([t.style,n.style]);else if(fo(i)){const s=t[i],a=n[i];a&&s!==a&&!(Ut(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=n[i])}return t}function zn(r,t,e,n=null){In(r,t,7,[e,n])}const Yg=sd();let jg=0;function $g(r,t,e){const n=r.type,i=(t?t.appContext:r.appContext)||Yg,s={uid:jg++,vnode:r,type:n,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new pm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(n,i),emitsOptions:Yh(n,i),emit:null,emitted:null,propsDefaults:ee,inheritAttrs:n.inheritAttrs,ctx:ee,data:ee,props:ee,attrs:ee,slots:ee,refs:ee,setupState:ee,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=ng.bind(null,s),r.ce&&r.ce(s),s}let me=null;const rs=r=>{me=r,r.scope.on()},or=()=>{me&&me.scope.off(),me=null};function ld(r){return r.vnode.shapeFlag&4}let Xs=!1;function Kg(r,t=!1){Xs=t;const{props:e,children:n}=r.vnode,i=ld(r);Lg(r,e,i,t),Ig(r,n);const s=i?Zg(r,t):void 0;return Xs=!1,s}function Zg(r,t){const e=r.type;r.accessCache=Object.create(null),r.proxy=zh(new Proxy(r.ctx,wg));const{setup:n}=e;if(n){const i=r.setupContext=n.length>1?Qg(r):null;rs(r),_s();const s=Pi(n,r,0,[r.props,i]);if(vs(),or(),Sh(s)){if(s.then(or,or),t)return s.then(a=>{Tu(r,a,t)}).catch(a=>{go(a,r,0)});r.asyncDep=s}else Tu(r,s,t)}else cd(r,t)}function Tu(r,t,e){zt(t)?r.type.__ssrInlineRender?r.ssrRender=t:r.render=t:ae(t)&&(r.setupState=Hh(t)),cd(r,e)}let Au;function cd(r,t,e){const n=r.type;if(!r.render){if(!t&&Au&&!n.render){const i=n.template||Rc(r).template;if(i){const{isCustomElement:s,compilerOptions:a}=r.appContext.config,{delimiters:o,compilerOptions:l}=n,c=ke(ke({isCustomElement:s,delimiters:o},a),l);n.render=Au(i,c)}}r.render=n.render||Dn}rs(r),_s(),Eg(r),vs(),or()}function Jg(r){return new Proxy(r.attrs,{get(t,e){return je(r,"get","$attrs"),t[e]}})}function Qg(r){const t=n=>{r.exposed=n||{}};let e;return{get attrs(){return e||(e=Jg(r))},slots:r.slots,emit:r.emit,expose:t}}function Uc(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Hh(zh(r.exposed)),{get(t,e){if(e in t)return t[e];if(e in Us)return Us[e](r)},has(t,e){return e in t||e in Us}}))}function t_(r){return zt(r)&&"__vccOpts"in r}const e_=(r,t)=>$m(r,t,Xs),n_=Symbol(""),i_=()=>Ga(n_),r_="3.2.47",s_="http://www.w3.org/2000/svg",tr=typeof document<"u"?document:null,Cu=tr&&tr.createElement("template"),a_={insert:(r,t,e)=>{t.insertBefore(r,e||null)},remove:r=>{const t=r.parentNode;t&&t.removeChild(r)},createElement:(r,t,e,n)=>{const i=t?tr.createElementNS(s_,r):tr.createElement(r,e?{is:e}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>tr.createTextNode(r),createComment:r=>tr.createComment(r),setText:(r,t)=>{r.nodeValue=t},setElementText:(r,t)=>{r.textContent=t},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>tr.querySelector(r),setScopeId(r,t){r.setAttribute(t,"")},insertStaticContent(r,t,e,n,i,s){const a=e?e.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),e),!(i===s||!(i=i.nextSibling)););else{Cu.innerHTML=n?`<svg>${r}</svg>`:r;const o=Cu.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}t.insertBefore(o,e)}return[a?a.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function o_(r,t,e){const n=r._vtc;n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?r.removeAttribute("class"):e?r.setAttribute("class",t):r.className=t}function l_(r,t,e){const n=r.style,i=Me(e);if(e&&!i){if(t&&!Me(t))for(const s in t)e[s]==null&&Hl(n,s,"");for(const s in e)Hl(n,s,e[s])}else{const s=n.display;i?t!==e&&(n.cssText=e):t&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Pu=/\s*!important$/;function Hl(r,t,e){if(Ut(e))e.forEach(n=>Hl(r,t,n));else if(e==null&&(e=""),t.startsWith("--"))r.setProperty(t,e);else{const n=c_(r,t);Pu.test(e)?r.setProperty(gs(n),e.replace(Pu,""),"important"):r[n]=e}}const Lu=["Webkit","Moz","ms"],Ho={};function c_(r,t){const e=Ho[t];if(e)return e;let n=es(t);if(n!=="filter"&&n in r)return Ho[t]=n;n=Eh(n);for(let i=0;i<Lu.length;i++){const s=Lu[i]+n;if(s in r)return Ho[t]=s}return t}const Ru="http://www.w3.org/1999/xlink";function u_(r,t,e,n,i){if(n&&t.startsWith("xlink:"))e==null?r.removeAttributeNS(Ru,t.slice(6,t.length)):r.setAttributeNS(Ru,t,e);else{const s=rm(t);e==null||s&&!xh(e)?r.removeAttribute(t):r.setAttribute(t,s?"":e)}}function f_(r,t,e,n,i,s,a){if(t==="innerHTML"||t==="textContent"){n&&a(n,i,s),r[t]=e??"";return}if(t==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=e;const l=e??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),e==null&&r.removeAttribute(t);return}let o=!1;if(e===""||e==null){const l=typeof r[t];l==="boolean"?e=xh(e):e==null&&l==="string"?(e="",o=!0):l==="number"&&(e=0,o=!0)}try{r[t]=e}catch{}o&&r.removeAttribute(t)}function h_(r,t,e,n){r.addEventListener(t,e,n)}function d_(r,t,e,n){r.removeEventListener(t,e,n)}function p_(r,t,e,n,i=null){const s=r._vei||(r._vei={}),a=s[t];if(n&&a)a.value=n;else{const[o,l]=m_(t);if(n){const c=s[t]=v_(n,i);h_(r,o,c,l)}else a&&(d_(r,o,a,l),s[t]=void 0)}}const Du=/(?:Once|Passive|Capture)$/;function m_(r){let t;if(Du.test(r)){t={};let n;for(;n=r.match(Du);)r=r.slice(0,r.length-n[0].length),t[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):gs(r.slice(2)),t]}let Vo=0;const g_=Promise.resolve(),__=()=>Vo||(g_.then(()=>Vo=0),Vo=Date.now());function v_(r,t){const e=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=e.attached)return;In(x_(n,e.value),t,5,[n])};return e.value=r,e.attached=__(),e}function x_(r,t){if(Ut(t)){const e=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{e.call(r),r._stopped=!0},t.map(n=>i=>!i._stopped&&n&&n(i))}else return t}const Iu=/^on[a-z]/,y_=(r,t,e,n,i=!1,s,a,o,l)=>{t==="class"?o_(r,n,i):t==="style"?l_(r,e,n):fo(t)?_c(t)||p_(r,t,e,n,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):M_(r,t,n,i))?f_(r,t,n,s,a,o,l):(t==="true-value"?r._trueValue=n:t==="false-value"&&(r._falseValue=n),u_(r,t,n,i))};function M_(r,t,e,n){return n?!!(t==="innerHTML"||t==="textContent"||t in r&&Iu.test(t)&&zt(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&r.tagName==="INPUT"||t==="type"&&r.tagName==="TEXTAREA"||Iu.test(t)&&Me(e)?!1:t in r}const S_=ke({patchProp:y_},a_);let Ou;function b_(){return Ou||(Ou=Fg(S_))}const w_=(...r)=>{const t=b_().createApp(...r),{mount:e}=t;return t.mount=n=>{const i=E_(n);if(!i)return;const s=t._component;!zt(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=e(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function E_(r){return Me(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nc="151",T_=0,Uu=1,A_=2,ud=1,C_=2,Ls=3,Oi=0,Ge=1,ci=2,Li=0,jr=1,Nu=2,Fu=3,zu=4,P_=5,zr=100,L_=101,R_=102,ku=103,Bu=104,D_=200,I_=201,O_=202,U_=203,fd=204,hd=205,N_=206,F_=207,z_=208,k_=209,B_=210,H_=0,V_=1,G_=2,Vl=3,W_=4,q_=5,X_=6,Y_=7,dd=0,j_=1,$_=2,ui=0,K_=1,Z_=2,J_=3,Q_=4,tv=5,pd=300,ss=301,as=302,Gl=303,Wl=304,bo=306,ql=1e3,Cn=1001,Xl=1002,ze=1003,Hu=1004,Go=1005,mn=1006,ev=1007,Ys=1008,dr=1009,nv=1010,iv=1011,md=1012,rv=1013,ir=1014,rr=1015,js=1016,sv=1017,av=1018,$r=1020,ov=1021,Pn=1023,lv=1024,cv=1025,lr=1026,os=1027,uv=1028,fv=1029,hv=1030,dv=1031,pv=1033,Wo=33776,qo=33777,Xo=33778,Yo=33779,Vu=35840,Gu=35841,Wu=35842,qu=35843,mv=36196,Xu=37492,Yu=37496,ju=37808,$u=37809,Ku=37810,Zu=37811,Ju=37812,Qu=37813,tf=37814,ef=37815,nf=37816,rf=37817,sf=37818,af=37819,of=37820,lf=37821,jo=36492,gv=36283,cf=36284,uf=36285,ff=36286,pr=3e3,Jt=3001,_v=3200,vv=3201,xv=0,yv=1,Bn="srgb",$s="srgb-linear",gd="display-p3",$o=7680,Mv=519,hf=35044,df="300 es",Yl=1035;class xs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ko=Math.PI/180,jl=180/Math.PI;function ra(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function He(r,t,e){return Math.max(t,Math.min(e,r))}function Sv(r,t){return(r%t+t)%t}function Zo(r,t,e){return(1-e)*r+e*t}function pf(r){return(r&r-1)===0&&r!==0}function bv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function va(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class te{constructor(t=0,e=0){te.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],y=i[4],v=i[7],S=i[2],C=i[5],P=i[8];return s[0]=a*g+o*b+l*S,s[3]=a*m+o*y+l*C,s[6]=a*p+o*v+l*P,s[1]=c*g+u*b+f*S,s[4]=c*m+u*y+f*C,s[7]=c*p+u*v+f*P,s[2]=h*g+d*b+_*S,s[5]=h*m+d*y+_*C,s[8]=h*p+d*v+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=e*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jo=new Vt;function _d(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ks(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Kr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const wv=new Vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ev=new Vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Tv(r){return r.convertSRGBToLinear().applyMatrix3(Ev)}function Av(r){return r.applyMatrix3(wv).convertLinearToSRGB()}const Cv={[$s]:r=>r,[Bn]:r=>r.convertSRGBToLinear(),[gd]:Tv},Pv={[$s]:r=>r,[Bn]:r=>r.convertLinearToSRGB(),[gd]:Av},Je={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return $s},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Cv[t],i=Pv[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}};let Mr;class vd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Mr===void 0&&(Mr=Ks("canvas")),Mr.width=t.width,Mr.height=t.height;const n=Mr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Mr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Kr(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kr(e[n]/255)*255):e[n]=Kr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class xd{constructor(t=null){this.isSource=!0,this.uuid=ra(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(tl(i[a].image)):s.push(tl(i[a]))}else s=tl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function tl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;class We extends xs{constructor(t=We.DEFAULT_IMAGE,e=We.DEFAULT_MAPPING,n=Cn,i=Cn,s=mn,a=Ys,o=Pn,l=dr,c=We.DEFAULT_ANISOTROPY,u=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=ra(),this.name="",this.source=new xd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ql:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case Xl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ql:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case Xl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}We.DEFAULT_IMAGE=null;We.DEFAULT_MAPPING=pd;We.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,n=0,i=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(d+1)/2,S=(p+1)/2,C=(u+h)/4,P=(f+g)/4,R=(_+m)/4;return y>v&&y>S?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=C/n,s=P/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=C/i,s=R/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=P/s,i=R/s),this.set(n,i,s,e),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mr extends xs{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new We(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:mn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yd extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rv extends We{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ze,this.minFilter=ze,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sa{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-o;const p=l*h+c*d+u*_+f*g,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const S=Math.sqrt(y),C=Math.atan2(S,p*b);m=Math.sin(m*C)/S,o=Math.sin(o*C)/S}const v=o*b;if(l=l*m+h*v,c=c*m+d*v,u=u*m+_*v,f=f*m+g*v,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return t[e]=o*_+u*f+l*d-c*h,t[e+1]=l*_+u*h+c*f-o*d,t[e+2]=c*_+u*d+o*h-l*f,t[e+3]=u*_-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(t=0,e=0,n=0){X.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=l*e+a*i-o*n,u=l*n+o*e-s*i,f=l*i+s*n-a*e,h=-s*e-a*n-o*i;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return el.copy(this).projectOnVector(t),this.sub(el)}reflect(t){return this.sub(el.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const el=new X,mf=new sa;class aa{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ti.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ti.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ti.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),Sr.copy(t.boundingBox),Sr.applyMatrix4(t.matrixWorld),this.union(Sr);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)ti.fromBufferAttribute(s,a).applyMatrix4(t.matrixWorld),this.expandByPoint(ti)}else i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox),Sr.applyMatrix4(t.matrixWorld),this.union(Sr)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ti),ti.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(bs),xa.subVectors(this.max,bs),br.subVectors(t.a,bs),wr.subVectors(t.b,bs),Er.subVectors(t.c,bs),yi.subVectors(wr,br),Mi.subVectors(Er,wr),Wi.subVectors(br,Er);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Wi.z,Wi.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Wi.z,0,-Wi.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Wi.y,Wi.x,0];return!nl(e,br,wr,Er,xa)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,br,wr,Er,xa))?!1:(ya.crossVectors(yi,Mi),e=[ya.x,ya.y,ya.z],nl(e,br,wr,Er,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ti).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ti).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new X,new X,new X,new X,new X,new X,new X,new X],ti=new X,Sr=new aa,br=new X,wr=new X,Er=new X,yi=new X,Mi=new X,Wi=new X,bs=new X,xa=new X,ya=new X,qi=new X;function nl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){qi.fromArray(r,s);const o=i.x*Math.abs(qi.x)+i.y*Math.abs(qi.y)+i.z*Math.abs(qi.z),l=t.dot(qi),c=e.dot(qi),u=n.dot(qi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dv=new aa,ws=new X,il=new X;class Fc{constructor(t=new X,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Dv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ws,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(il)),this.expandByPoint(ws.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ei=new X,rl=new X,Ma=new X,Si=new X,sl=new X,Sa=new X,al=new X;class Iv{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ei)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ei.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ei.copy(this.origin).addScaledVector(this.direction,e),ei.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){rl.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(rl);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Ma),o=Si.dot(this.direction),l=-Si.dot(Ma),c=Si.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(rl).addScaledVector(Ma,h),d}intersectSphere(t,e){ei.subVectors(t.center,this.origin);const n=ei.dot(this.direction),i=ei.dot(ei)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ei)!==null}intersectTriangle(t,e,n,i,s){sl.subVectors(e,t),Sa.subVectors(n,t),al.crossVectors(sl,Sa);let a=this.direction.dot(al),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,t);const l=o*this.direction.dot(Sa.crossVectors(Si,Sa));if(l<0)return null;const c=o*this.direction.dot(sl.cross(Si));if(c<0||l+c>a)return null;const u=-o*Si.dot(al);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,a,o,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Tr.setFromMatrixColumn(t,0).length(),s=1/Tr.setFromMatrixColumn(t,1).length(),a=1/Tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+_*c,e[5]=h-g*c,e[9]=-o*l,e[2]=g-h*c,e[6]=_+d*c,e[10]=a*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h+g*o,e[4]=_*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=d*o-_,e[6]=g+h*o,e[10]=a*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;e[0]=h-g*o,e[4]=-a*f,e[8]=_+d*o,e[1]=d+_*o,e[5]=a*u,e[9]=g-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=_*c-d,e[8]=h*c+g,e[1]=l*f,e[5]=g*c+h,e[9]=d*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-h*f,e[8]=_*f+d,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=a*u,e[9]=d*f-_,e[2]=_*f-d,e[6]=o*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ov,t,Uv)}lookAt(t,e,n){const i=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),bi.crossVectors(n,Qe),bi.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),bi.crossVectors(n,Qe)),bi.normalize(),ba.crossVectors(Qe,bi),i[0]=bi.x,i[4]=ba.x,i[8]=Qe.x,i[1]=bi.y,i[5]=ba.y,i[9]=Qe.y,i[2]=bi.z,i[6]=ba.z,i[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],y=n[7],v=n[11],S=n[15],C=i[0],P=i[4],R=i[8],x=i[12],E=i[1],q=i[5],Y=i[9],U=i[13],z=i[2],W=i[6],$=i[10],H=i[14],V=i[3],lt=i[7],ot=i[11],Et=i[15];return s[0]=a*C+o*E+l*z+c*V,s[4]=a*P+o*q+l*W+c*lt,s[8]=a*R+o*Y+l*$+c*ot,s[12]=a*x+o*U+l*H+c*Et,s[1]=u*C+f*E+h*z+d*V,s[5]=u*P+f*q+h*W+d*lt,s[9]=u*R+f*Y+h*$+d*ot,s[13]=u*x+f*U+h*H+d*Et,s[2]=_*C+g*E+m*z+p*V,s[6]=_*P+g*q+m*W+p*lt,s[10]=_*R+g*Y+m*$+p*ot,s[14]=_*x+g*U+m*H+p*Et,s[3]=b*C+y*E+v*z+S*V,s[7]=b*P+y*q+v*W+S*lt,s[11]=b*R+y*Y+v*$+S*ot,s[15]=b*x+y*U+v*H+S*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+g*(+e*l*d-e*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+m*(+e*c*f-e*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+p*(-i*o*u-e*l*f+e*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],_=t[12],g=t[13],m=t[14],p=t[15],b=f*m*c-g*h*c+g*l*d-o*m*d-f*l*p+o*h*p,y=_*h*c-u*m*c-_*l*d+a*m*d+u*l*p-a*h*p,v=u*g*c-_*f*c+_*o*d-a*g*d-u*o*p+a*f*p,S=_*f*l-u*g*l-_*o*h+a*g*h+u*o*m-a*f*m,C=e*b+n*y+i*v+s*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return t[0]=b*P,t[1]=(g*h*s-f*m*s-g*i*d+n*m*d+f*i*p-n*h*p)*P,t[2]=(o*m*s-g*l*s+g*i*c-n*m*c-o*i*p+n*l*p)*P,t[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*P,t[4]=y*P,t[5]=(u*m*s-_*h*s+_*i*d-e*m*d-u*i*p+e*h*p)*P,t[6]=(_*l*s-a*m*s-_*i*c+e*m*c+a*i*p-e*l*p)*P,t[7]=(a*h*s-u*l*s+u*i*c-e*h*c-a*i*d+e*l*d)*P,t[8]=v*P,t[9]=(_*f*s-u*g*s-_*n*d+e*g*d+u*n*p-e*f*p)*P,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*p+e*o*p)*P,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*d-e*o*d)*P,t[12]=S*P,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*m+e*f*m)*P,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*m-e*o*m)*P,t[15]=(a*f*i-u*o*i+u*n*l-e*f*l-a*n*h+e*o*h)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,m=a*f,p=o*f,b=l*c,y=l*u,v=l*f,S=n.x,C=n.y,P=n.z;return i[0]=(1-(g+p))*S,i[1]=(d+v)*S,i[2]=(_-y)*S,i[3]=0,i[4]=(d-v)*C,i[5]=(1-(h+p))*C,i[6]=(m+b)*C,i[7]=0,i[8]=(_+y)*P,i[9]=(m-b)*P,i[10]=(1-(h+g))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Tr.set(i[0],i[1],i[2]).length();const a=Tr.set(i[4],i[5],i[6]).length(),o=Tr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const c=1/s,u=1/a,f=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,a){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(a-s),f=(e+t)*l,h=(n+i)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Tr=new X,Sn=new Te,Ov=new X(0,0,0),Uv=new X(1,1,1),bi=new X,ba=new X,Qe=new X,gf=new Te,_f=new sa;class wo{constructor(t=0,e=0,n=0,i=wo.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(He(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _f.setFromEuler(this),this.setFromQuaternion(_f,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wo.DEFAULT_ORDER="XYZ";class Md{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Nv=0;const vf=new X,Ar=new sa,ni=new Te,wa=new X,Es=new X,Fv=new X,zv=new sa,xf=new X(1,0,0),yf=new X(0,1,0),Mf=new X(0,0,1),kv={type:"added"},Sf={type:"removed"};class an extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nv++}),this.uuid=ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const t=new X,e=new wo,n=new sa,i=new X(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Vt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(xf,t)}rotateY(t){return this.rotateOnAxis(yf,t)}rotateZ(t){return this.rotateOnAxis(Mf,t)}translateOnAxis(t,e){return vf.copy(t).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xf,t)}translateY(t){return this.translateOnAxis(yf,t)}translateZ(t){return this.translateOnAxis(Mf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wa.copy(t):wa.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ni.lookAt(Es,wa,this.up):ni.lookAt(wa,Es,this.up),this.quaternion.setFromRotationMatrix(ni),i&&(ni.extractRotation(i.matrixWorld),Ar.setFromRotationMatrix(ni),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(kv)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sf)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Sf)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(ni),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(t,e);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,t,Fv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,zv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),h=a(t.skeletons),d=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}an.DEFAULT_UP=new X(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new X,ii=new X,ol=new X,ri=new X,Cr=new X,Pr=new X,bf=new X,ll=new X,cl=new X,ul=new X;let Ea=!1;class Tn{constructor(t=new X,e=new X,n=new X){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),ii.subVectors(n,e),ol.subVectors(t,e);const a=bn.dot(bn),o=bn.dot(ii),l=bn.dot(ol),c=ii.dot(ii),u=ii.dot(ol),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ri),ri.x>=0&&ri.y>=0&&ri.x+ri.y<=1}static getUV(t,e,n,i,s,a,o,l){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),this.getInterpolation(t,e,n,i,s,a,o,l)}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,ri),l.setScalar(0),l.addScaledVector(s,ri.x),l.addScaledVector(a,ri.y),l.addScaledVector(o,ri.z),l}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),ii.subVectors(t,e),bn.cross(ii).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),ii.subVectors(this.a,this.b),bn.cross(ii).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ea===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ea=!0),Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;Cr.subVectors(i,n),Pr.subVectors(s,n),ll.subVectors(t,n);const l=Cr.dot(ll),c=Pr.dot(ll);if(l<=0&&c<=0)return e.copy(n);cl.subVectors(t,i);const u=Cr.dot(cl),f=Pr.dot(cl);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Cr,a);ul.subVectors(t,s);const d=Cr.dot(ul),_=Pr.dot(ul);if(_>=0&&d<=_)return e.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(Pr,o);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return bf.subVectors(s,i),o=(f-u)/(f-u+(d-_)),e.copy(i).addScaledVector(bf,o);const p=1/(m+g+h);return a=g*p,o=h*p,e.copy(n).addScaledVector(Cr,a).addScaledVector(Pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Bv=0;class oa extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=ra(),this.name="",this.type="Material",this.blending=jr,this.side=Oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fd,this.blendDst=hd,this.blendEquation=zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(n.blending=this.blending),this.side!==Oi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function fl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Bn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Je.workingColorSpace){return this.r=t,this.g=e,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Je.workingColorSpace){if(t=Sv(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=fl(a,s,t+1/3),this.g=fl(a,s,t),this.b=fl(a,s,t-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(t,e=Bn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Je.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Je.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Bn){const n=Sd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kr(t.r),this.g=Kr(t.g),this.b=Kr(t.b),this}copyLinearToSRGB(t){return this.r=Qo(t.r),this.g=Qo(t.g),this.b=Qo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Bn){return Je.fromWorkingColorSpace(Pe.copy(this),t),He(Pe.r*255,0,255)<<16^He(Pe.g*255,0,255)<<8^He(Pe.b*255,0,255)<<0}getHexString(t=Bn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,s=Pe.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Bn){Je.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==Bn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(wn),wn.h+=t,wn.s+=e,wn.l+=n,this.setHSL(wn.h,wn.s,wn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Ta);const n=Zo(wn.h,Ta.h,e),i=Zo(wn.s,Ta.s,e),s=Zo(wn.l,Ta.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Qt;Qt.NAMES=Sd;class Eo extends oa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new X,Aa=new te;class On{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=hf,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Aa.fromBufferAttribute(this,e),Aa.applyMatrix3(t),this.setXY(e,Aa.x,Aa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=va(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=va(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=va(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=va(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==hf&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bd extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wd extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class $n extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Hv=0;const fn=new Te,hl=new an,Lr=new X,tn=new aa,Ts=new aa,xe=new X;class Fi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_d(t)?wd:bd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return hl.lookAt(t),hl.updateMatrix(),this.applyMatrix4(hl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $n(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new X,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(tn.min,Ts.min),tn.expandByPoint(xe),xe.addVectors(tn.max,Ts.max),tn.expandByPoint(xe)):(tn.expandByPoint(Ts.min),tn.expandByPoint(Ts.max))}tn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)xe.fromBufferAttribute(o,c),l&&(Lr.fromBufferAttribute(t,c),xe.add(Lr)),i=Math.max(i,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let E=0;E<o;E++)c[E]=new X,u[E]=new X;const f=new X,h=new X,d=new X,_=new te,g=new te,m=new te,p=new X,b=new X;function y(E,q,Y){f.fromArray(i,E*3),h.fromArray(i,q*3),d.fromArray(i,Y*3),_.fromArray(a,E*2),g.fromArray(a,q*2),m.fromArray(a,Y*2),h.sub(f),d.sub(f),g.sub(_),m.sub(_);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(U),b.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(U),c[E].add(p),c[q].add(p),c[Y].add(p),u[E].add(b),u[q].add(b),u[Y].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let E=0,q=v.length;E<q;++E){const Y=v[E],U=Y.start,z=Y.count;for(let W=U,$=U+z;W<$;W+=3)y(n[W+0],n[W+1],n[W+2])}const S=new X,C=new X,P=new X,R=new X;function x(E){P.fromArray(s,E*3),R.copy(P);const q=c[E];S.copy(q),S.sub(P.multiplyScalar(P.dot(q))).normalize(),C.crossVectors(R,q);const U=C.dot(u[E])<0?-1:1;l[E*4]=S.x,l[E*4+1]=S.y,l[E*4+2]=S.z,l[E*4+3]=U}for(let E=0,q=v.length;E<q;++E){const Y=v[E],U=Y.start,z=Y.count;for(let W=U,$=U+z;W<$;W+=3)x(n[W+0]),x(n[W+1]),x(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(t)for(let h=0,d=t.count;h<d;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new On(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fi,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wf=new Te,kn=new Iv,Ca=new Fc,Ef=new X,Rr=new X,Dr=new X,Ir=new X,dl=new X,Pa=new X,La=new te,Ra=new te,Da=new te,Tf=new X,Af=new X,Cf=new X,Ia=new X,Oa=new X;class Yn extends an{constructor(t=new Fi,e=new Eo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Pa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(dl.fromBufferAttribute(f,t),a?Pa.addScaledVector(dl,u):Pa.addScaledVector(dl.sub(e),u))}e.add(Pa)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(s),kn.copy(t.ray).recast(t.near),Ca.containsPoint(kn.origin)===!1&&(kn.intersectSphere(Ca,Ef)===null||kn.origin.distanceToSquared(Ef)>(t.far-t.near)**2))||(wf.copy(s).invert(),kn.copy(t.ray).applyMatrix4(wf),n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,h=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=i[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,S=y;v<S;v+=3){const C=o.getX(v),P=o.getX(v+1),R=o.getX(v+2);a=Ua(this,p,t,kn,c,u,f,C,P,R),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);a=Ua(this,i,t,kn,c,u,f,b,y,v),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=i[m.materialIndex],b=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,S=y;v<S;v+=3){const C=v,P=v+1,R=v+2;a=Ua(this,p,t,kn,c,u,f,C,P,R),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=m.materialIndex,e.push(a))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=m,y=m+1,v=m+2;a=Ua(this,i,t,kn,c,u,f,b,y,v),a&&(a.faceIndex=Math.floor(m/3),e.push(a))}}}}function Vv(r,t,e,n,i,s,a,o){let l;if(t.side===Ge?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===Oi,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:r}}function Ua(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,Rr),r.getVertexPosition(l,Dr),r.getVertexPosition(c,Ir);const u=Vv(r,t,e,n,Rr,Dr,Ir,Ia);if(u){i&&(La.fromBufferAttribute(i,o),Ra.fromBufferAttribute(i,l),Da.fromBufferAttribute(i,c),u.uv=Tn.getInterpolation(Ia,Rr,Dr,Ir,La,Ra,Da,new te)),s&&(La.fromBufferAttribute(s,o),Ra.fromBufferAttribute(s,l),Da.fromBufferAttribute(s,c),u.uv2=Tn.getInterpolation(Ia,Rr,Dr,Ir,La,Ra,Da,new te)),a&&(Tf.fromBufferAttribute(a,o),Af.fromBufferAttribute(a,l),Cf.fromBufferAttribute(a,c),u.normal=Tn.getInterpolation(Ia,Rr,Dr,Ir,Tf,Af,Cf,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};Tn.getNormal(Rr,Dr,Ir,f.normal),u.face=f}return u}class la extends Fi{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $n(c,3)),this.setAttribute("normal",new $n(u,3)),this.setAttribute("uv",new $n(f,2));function _(g,m,p,b,y,v,S,C,P,R,x){const E=v/P,q=S/R,Y=v/2,U=S/2,z=C/2,W=P+1,$=R+1;let H=0,V=0;const lt=new X;for(let ot=0;ot<$;ot++){const Et=ot*q-U;for(let ut=0;ut<W;ut++){const D=ut*E-Y;lt[g]=D*b,lt[m]=Et*y,lt[p]=z,c.push(lt.x,lt.y,lt.z),lt[g]=0,lt[m]=0,lt[p]=C>0?1:-1,u.push(lt.x,lt.y,lt.z),f.push(ut/P),f.push(1-ot/R),H+=1}}for(let ot=0;ot<R;ot++)for(let Et=0;Et<P;Et++){const ut=h+Et+W*ot,D=h+Et+W*(ot+1),O=h+(Et+1)+W*(ot+1),K=h+(Et+1)+W*ot;l.push(ut,D,K),l.push(D,O,K),V+=6}o.addGroup(d,V,x),d+=V,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new la(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Fe(r){const t={};for(let e=0;e<r.length;e++){const n=ls(r[e]);for(const i in n)t[i]=n[i]}return t}function Gv(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ed(r){return r.getRenderTarget()===null&&r.outputEncoding===Jt?Bn:$s}const Wv={clone:ls,merge:Fe};var qv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends oa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qv,this.fragmentShader=Xv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Gv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Td extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class nn extends Td{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jl*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Or=-90,Ur=1;class Yv extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new nn(Or,Ur,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new nn(Or,Ur,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new nn(Or,Ur,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new nn(Or,Ur,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new nn(Or,Ur,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new nn(Or,Ur,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=ui,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,a),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Ad extends We{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jv extends mr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ad(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new la(5,5,5),s=new gr({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Li});s.uniforms.tEquirect.value=e;const a=new Yn(i,s),o=e.minFilter;return e.minFilter===Ys&&(e.minFilter=mn),new Yv(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const pl=new X,$v=new X,Kv=new Vt;class Ki{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pl.subVectors(n,e).cross($v.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(pl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Kv.getNormalMatrix(t),i=this.coplanarPoint(pl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new Fc,Na=new X;class Cd{constructor(t=new Ki,e=new Ki,n=new Ki,i=new Ki,s=new Ki,a=new Ki){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],_=n[10],g=n[11],m=n[12],p=n[13],b=n[14],y=n[15];return e[0].setComponents(o-i,f-l,g-h,y-m).normalize(),e[1].setComponents(o+i,f+l,g+h,y+m).normalize(),e[2].setComponents(o+s,f+c,g+d,y+p).normalize(),e[3].setComponents(o-s,f-c,g-d,y-p).normalize(),e[4].setComponents(o-a,f-u,g-_,y-b).normalize(),e[5].setComponents(o+a,f+u,g+_,y+b).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Na.x=i.normal.x>0?t.max.x:t.min.x,Na.y=i.normal.y>0?t.max.y:t.min.y,Na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pd(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Zv(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,h):(e?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Zs extends Fi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,h=e/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*h-a;for(let y=0;y<c;y++){const v=y*f-s;_.push(v,-b,0),g.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){const y=b+c*p,v=b+c*(p+1),S=b+1+c*(p+1),C=b+1+c*p;d.push(y,v,C),d.push(v,S,C)}this.setIndex(d),this.setAttribute("position",new $n(_,3)),this.setAttribute("normal",new $n(g,3)),this.setAttribute("uv",new $n(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Jv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,e0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0="vec3 transformed = vec3( position );",s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,a0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,g0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,U0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,N0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,H0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,V0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,Y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ex=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ax=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ox=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cx=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,hx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_x=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,bx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ax=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Px=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Rx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ix=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Vx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Gx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qx=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ty=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ey=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ry=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,my=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,by=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ft={alphamap_fragment:Jv,alphamap_pars_fragment:Qv,alphatest_fragment:t0,alphatest_pars_fragment:e0,aomap_fragment:n0,aomap_pars_fragment:i0,begin_vertex:r0,beginnormal_vertex:s0,bsdfs:a0,iridescence_fragment:o0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:f0,clipping_planes_vertex:h0,color_fragment:d0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:g0,common:_0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:x0,displacementmap_pars_vertex:y0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:b0,encodings_fragment:w0,encodings_pars_fragment:E0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:C0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:H0,envmap_vertex:L0,fog_vertex:R0,fog_pars_vertex:D0,fog_fragment:I0,fog_pars_fragment:O0,gradientmap_pars_fragment:U0,lightmap_fragment:N0,lightmap_pars_fragment:F0,lights_lambert_fragment:z0,lights_lambert_pars_fragment:k0,lights_pars_begin:B0,lights_toon_fragment:V0,lights_toon_pars_fragment:G0,lights_phong_fragment:W0,lights_phong_pars_fragment:q0,lights_physical_fragment:X0,lights_physical_pars_fragment:Y0,lights_fragment_begin:j0,lights_fragment_maps:$0,lights_fragment_end:K0,logdepthbuf_fragment:Z0,logdepthbuf_pars_fragment:J0,logdepthbuf_pars_vertex:Q0,logdepthbuf_vertex:tx,map_fragment:ex,map_pars_fragment:nx,map_particle_fragment:ix,map_particle_pars_fragment:rx,metalnessmap_fragment:sx,metalnessmap_pars_fragment:ax,morphcolor_vertex:ox,morphnormal_vertex:lx,morphtarget_pars_vertex:cx,morphtarget_vertex:ux,normal_fragment_begin:fx,normal_fragment_maps:hx,normal_pars_fragment:dx,normal_pars_vertex:px,normal_vertex:mx,normalmap_pars_fragment:gx,clearcoat_normal_fragment_begin:_x,clearcoat_normal_fragment_maps:vx,clearcoat_pars_fragment:xx,iridescence_pars_fragment:yx,output_fragment:Mx,packing:Sx,premultiplied_alpha_fragment:bx,project_vertex:wx,dithering_fragment:Ex,dithering_pars_fragment:Tx,roughnessmap_fragment:Ax,roughnessmap_pars_fragment:Cx,shadowmap_pars_fragment:Px,shadowmap_pars_vertex:Lx,shadowmap_vertex:Rx,shadowmask_pars_fragment:Dx,skinbase_vertex:Ix,skinning_pars_vertex:Ox,skinning_vertex:Ux,skinnormal_vertex:Nx,specularmap_fragment:Fx,specularmap_pars_fragment:zx,tonemapping_fragment:kx,tonemapping_pars_fragment:Bx,transmission_fragment:Hx,transmission_pars_fragment:Vx,uv_pars_fragment:Gx,uv_pars_vertex:Wx,uv_vertex:qx,worldpos_vertex:Xx,background_vert:Yx,background_frag:jx,backgroundCube_vert:$x,backgroundCube_frag:Kx,cube_vert:Zx,cube_frag:Jx,depth_vert:Qx,depth_frag:ty,distanceRGBA_vert:ey,distanceRGBA_frag:ny,equirect_vert:iy,equirect_frag:ry,linedashed_vert:sy,linedashed_frag:ay,meshbasic_vert:oy,meshbasic_frag:ly,meshlambert_vert:cy,meshlambert_frag:uy,meshmatcap_vert:fy,meshmatcap_frag:hy,meshnormal_vert:dy,meshnormal_frag:py,meshphong_vert:my,meshphong_frag:gy,meshphysical_vert:_y,meshphysical_frag:vy,meshtoon_vert:xy,meshtoon_frag:yy,points_vert:My,points_frag:Sy,shadow_vert:by,shadow_frag:wy,sprite_vert:Ey,sprite_frag:Ty},_t={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaTest:{value:0}}},Gn={basic:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Fe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Fe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Fe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Fe([_t.points,_t.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Fe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Fe([_t.common,_t.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Fe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Fe([_t.sprite,_t.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Fe([_t.common,_t.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Fe([_t.lights,_t.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};Gn.physical={uniforms:Fe([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};const Fa={r:0,b:0,g:0};function Ay(r,t,e,n,i,s,a){const o=new Qt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(m,p){let b=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y));const v=r.xr,S=v.getSession&&v.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?g(o,l):y&&y.isColor&&(g(y,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===bo)?(u===void 0&&(u=new Yn(new la(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:ls(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.encoding!==Jt,(f!==y||h!==y.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Yn(new Zs(2,2),new gr({name:"BackgroundMaterial",uniforms:ls(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.encoding!==Jt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(Fa,Ed(r)),n.buffers.color.setClear(Fa.r,Fa.g,Fa.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(o,l)},render:_}}function Cy(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(z,W,$,H,V){let lt=!1;if(a){const ot=g(H,$,W);c!==ot&&(c=ot,d(c.object)),lt=p(z,H,$,V),lt&&b(z,H,$,V)}else{const ot=W.wireframe===!0;(c.geometry!==H.id||c.program!==$.id||c.wireframe!==ot)&&(c.geometry=H.id,c.program=$.id,c.wireframe=ot,lt=!0)}V!==null&&e.update(V,34963),(lt||u)&&(u=!1,R(z,W,$,H),V!==null&&r.bindBuffer(34963,e.get(V).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(z){return n.isWebGL2?r.bindVertexArray(z):s.bindVertexArrayOES(z)}function _(z){return n.isWebGL2?r.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function g(z,W,$){const H=$.wireframe===!0;let V=o[z.id];V===void 0&&(V={},o[z.id]=V);let lt=V[W.id];lt===void 0&&(lt={},V[W.id]=lt);let ot=lt[H];return ot===void 0&&(ot=m(h()),lt[H]=ot),ot}function m(z){const W=[],$=[],H=[];for(let V=0;V<i;V++)W[V]=0,$[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:$,attributeDivisors:H,object:z,attributes:{},index:null}}function p(z,W,$,H){const V=c.attributes,lt=W.attributes;let ot=0;const Et=$.getAttributes();for(const ut in Et)if(Et[ut].location>=0){const O=V[ut];let K=lt[ut];if(K===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),O===void 0||O.attribute!==K||K&&O.data!==K.data)return!0;ot++}return c.attributesNum!==ot||c.index!==H}function b(z,W,$,H){const V={},lt=W.attributes;let ot=0;const Et=$.getAttributes();for(const ut in Et)if(Et[ut].location>=0){let O=lt[ut];O===void 0&&(ut==="instanceMatrix"&&z.instanceMatrix&&(O=z.instanceMatrix),ut==="instanceColor"&&z.instanceColor&&(O=z.instanceColor));const K={};K.attribute=O,O&&O.data&&(K.data=O.data),V[ut]=K,ot++}c.attributes=V,c.attributesNum=ot,c.index=H}function y(){const z=c.newAttributes;for(let W=0,$=z.length;W<$;W++)z[W]=0}function v(z){S(z,0)}function S(z,W){const $=c.newAttributes,H=c.enabledAttributes,V=c.attributeDivisors;$[z]=1,H[z]===0&&(r.enableVertexAttribArray(z),H[z]=1),V[z]!==W&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,W),V[z]=W)}function C(){const z=c.newAttributes,W=c.enabledAttributes;for(let $=0,H=W.length;$<H;$++)W[$]!==z[$]&&(r.disableVertexAttribArray($),W[$]=0)}function P(z,W,$,H,V,lt){n.isWebGL2===!0&&($===5124||$===5125)?r.vertexAttribIPointer(z,W,$,V,lt):r.vertexAttribPointer(z,W,$,H,V,lt)}function R(z,W,$,H){if(n.isWebGL2===!1&&(z.isInstancedMesh||H.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const V=H.attributes,lt=$.getAttributes(),ot=W.defaultAttributeValues;for(const Et in lt){const ut=lt[Et];if(ut.location>=0){let D=V[Et];if(D===void 0&&(Et==="instanceMatrix"&&z.instanceMatrix&&(D=z.instanceMatrix),Et==="instanceColor"&&z.instanceColor&&(D=z.instanceColor)),D!==void 0){const O=D.normalized,K=D.itemSize,st=e.get(D);if(st===void 0)continue;const F=st.buffer,yt=st.type,vt=st.bytesPerElement;if(D.isInterleavedBufferAttribute){const ht=D.data,St=ht.stride,A=D.offset;if(ht.isInstancedInterleavedBuffer){for(let L=0;L<ut.locationSize;L++)S(ut.location+L,ht.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let L=0;L<ut.locationSize;L++)v(ut.location+L);r.bindBuffer(34962,F);for(let L=0;L<ut.locationSize;L++)P(ut.location+L,K/ut.locationSize,yt,O,St*vt,(A+K/ut.locationSize*L)*vt)}else{if(D.isInstancedBufferAttribute){for(let ht=0;ht<ut.locationSize;ht++)S(ut.location+ht,D.meshPerAttribute);z.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let ht=0;ht<ut.locationSize;ht++)v(ut.location+ht);r.bindBuffer(34962,F);for(let ht=0;ht<ut.locationSize;ht++)P(ut.location+ht,K/ut.locationSize,yt,O,K*vt,K/ut.locationSize*ht*vt)}}else if(ot!==void 0){const O=ot[Et];if(O!==void 0)switch(O.length){case 2:r.vertexAttrib2fv(ut.location,O);break;case 3:r.vertexAttrib3fv(ut.location,O);break;case 4:r.vertexAttrib4fv(ut.location,O);break;default:r.vertexAttrib1fv(ut.location,O)}}}}C()}function x(){Y();for(const z in o){const W=o[z];for(const $ in W){const H=W[$];for(const V in H)_(H[V].object),delete H[V];delete W[$]}delete o[z]}}function E(z){if(o[z.id]===void 0)return;const W=o[z.id];for(const $ in W){const H=W[$];for(const V in H)_(H[V].object),delete H[V];delete W[$]}delete o[z.id]}function q(z){for(const W in o){const $=o[W];if($[z.id]===void 0)continue;const H=$[z.id];for(const V in H)_(H[V].object),delete H[V];delete $[z.id]}}function Y(){U(),u=!0,c!==l&&(c=l,d(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:q,initAttributes:y,enableAttribute:v,disableUnusedAttributes:C}}function Py(r,t,e,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),e.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Ly(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),d=r.getParameter(3379),_=r.getParameter(34076),g=r.getParameter(34921),m=r.getParameter(36347),p=r.getParameter(36348),b=r.getParameter(36349),y=h>0,v=a||t.has("OES_texture_float"),S=y&&v,C=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:S,maxSamples:C}}function Ry(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Ki,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,y=b*4;let v=p.clippingState||null;l.value=v,v=u(_,h,y,d);for(let S=0;S!==y;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==g;++y,v+=4)a.copy(f[y]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Dy(r){let t=new WeakMap;function e(a,o){return o===Gl?a.mapping=ss:o===Wl&&(a.mapping=as),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Gl||o===Wl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new jv(l.height/2);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Iy extends Td{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Br=4,Pf=[.125,.215,.35,.446,.526,.582],er=20,ml=new Iy,Lf=new Qt;let gl=null;const Zi=(1+Math.sqrt(5))/2,Nr=1/Zi,Rf=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,Zi,Nr),new X(0,Zi,-Nr),new X(Nr,0,Zi),new X(-Nr,0,Zi),new X(Zi,Nr,0),new X(-Zi,Nr,0)];class Df{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){gl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gl),t.scissorTest=!1,za(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gl=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:js,format:Pn,encoding:pr,depthBuffer:!1},i=If(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=If(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Oy(s)),this._blurMaterial=Uy(s,t,e)}return i}_compileMaterial(t){const e=new Yn(this._lodPlanes[0],t);this._renderer.compile(e,ml)}_sceneToCubeUV(t,e,n,i){const o=new nn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lf),u.toneMapping=ui,u.autoClear=!1;const d=new Eo({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),_=new Yn(new la,d);let g=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,g=!0):(d.color.copy(Lf),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;za(i,b*y,p>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ss||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Yn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;za(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,ml)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Rf[(i-1)%Rf.length];this._blur(t,i-1,i,s,a)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Yn(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*er-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):er;m>er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${er}`);const p=[];let b=0;for(let P=0;P<er;++P){const R=P/g,x=Math.exp(-R*R/2);p.push(x),P===0?b+=x:P<m&&(b+=2*x)}for(let P=0;P<p.length;P++)p[P]=p[P]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const v=this._sizeLods[i],S=3*v*(i>y-Br?i-y+Br:0),C=4*(this._cubeSize-v);za(e,S,C,3*v,2*v),l.setRenderTarget(e),l.render(f,ml)}}function Oy(r){const t=[],e=[],n=[];let i=r;const s=r-Br+1+Pf.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Br?l=Pf[a-r+Br-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),y=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let C=0;C<d;C++){const P=C%3*2/3-1,R=C>2?0:-1,x=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];b.set(x,g*_*C),y.set(h,m*_*C);const E=[C,C,C,C,C,C];v.set(E,p*_*C)}const S=new Fi;S.setAttribute("position",new On(b,g)),S.setAttribute("uv",new On(y,m)),S.setAttribute("faceIndex",new On(v,p)),t.push(S),i>Br&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function If(r,t,e){const n=new mr(r,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Uy(r,t,e){const n=new Float32Array(er),i=new X(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:er,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Of(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Uf(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ny(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gl||l===Wl,u=l===ss||l===as;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Df(r)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new Df(r));const h=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fy(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zy(r,t,e,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)t.update(h[_],34962);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],34962)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let y=0,v=b.length;y<v;y+=3){const S=b[y+0],C=b[y+1],P=b[y+2];h.push(S,C,C,P,P,S)}}else{const b=_.array;g=_.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const S=y+0,C=y+1,P=y+2;h.push(S,C,C,P,P,S)}}const m=new(_d(h)?wd:bd)(h,1);m.version=g;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ky(r,t,e,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){r.drawElements(s,d,o,h*l),e.update(d,s,1)}function f(h,d,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,o,h*l,_),e.update(d,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function By(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Hy(r,t){return r[0]-t[0]}function Vy(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Gy(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,a=new Ee,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let W=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",W)};var d=W;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let x=0;y===!0&&(x=1),v===!0&&(x=2),S===!0&&(x=3);let E=u.attributes.position.count*x,q=1;E>t.maxTextureSize&&(q=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const Y=new Float32Array(E*q*4*g),U=new yd(Y,E,q,g);U.type=rr,U.needsUpdate=!0;const z=x*4;for(let $=0;$<g;$++){const H=C[$],V=P[$],lt=R[$],ot=E*q*4*$;for(let Et=0;Et<H.count;Et++){const ut=Et*z;y===!0&&(a.fromBufferAttribute(H,Et),Y[ot+ut+0]=a.x,Y[ot+ut+1]=a.y,Y[ot+ut+2]=a.z,Y[ot+ut+3]=0),v===!0&&(a.fromBufferAttribute(V,Et),Y[ot+ut+4]=a.x,Y[ot+ut+5]=a.y,Y[ot+ut+6]=a.z,Y[ot+ut+7]=0),S===!0&&(a.fromBufferAttribute(lt,Et),Y[ot+ut+8]=a.x,Y[ot+ut+9]=a.y,Y[ot+ut+10]=a.z,Y[ot+ut+11]=lt.itemSize===4?a.w:1)}}m={count:g,texture:U,size:new te(E,q)},s.set(u,m),u.addEventListener("dispose",W)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const b=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const S=g[v];S[0]=v,S[1]=h[v]}g.sort(Vy);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(Hy);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const S=o[v],C=S[0],P=S[1];C!==Number.MAX_SAFE_INTEGER&&P?(m&&u.getAttribute("morphTarget"+v)!==m[C]&&u.setAttribute("morphTarget"+v,m[C]),p&&u.getAttribute("morphNormal"+v)!==p[C]&&u.setAttribute("morphNormal"+v,p[C]),i[v]=P,b+=P):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const y=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",y),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Wy(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);return i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Ld=new We,Rd=new yd,Dd=new Rv,Id=new Ad,Nf=[],Ff=[],zf=new Float32Array(16),kf=new Float32Array(9),Bf=new Float32Array(4);function ys(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Nf[i];if(s===void 0&&(s=new Float32Array(i),Nf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function To(r,t){let e=Ff[t];e===void 0&&(e=new Int32Array(t),Ff[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function qy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Xy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function Yy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function jy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function $y(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;Bf.set(n),r.uniformMatrix2fv(this.addr,!1,Bf),_e(e,n)}}function Ky(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;kf.set(n),r.uniformMatrix3fv(this.addr,!1,kf),_e(e,n)}}function Zy(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(ge(e,n))return;zf.set(n),r.uniformMatrix4fv(this.addr,!1,zf),_e(e,n)}}function Jy(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Qy(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2iv(this.addr,t),_e(e,t)}}function tM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3iv(this.addr,t),_e(e,t)}}function eM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4iv(this.addr,t),_e(e,t)}}function nM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function iM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;r.uniform2uiv(this.addr,t),_e(e,t)}}function rM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;r.uniform3uiv(this.addr,t),_e(e,t)}}function sM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;r.uniform4uiv(this.addr,t),_e(e,t)}}function aM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ld,i)}function oM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Dd,i)}function lM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Id,i)}function cM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Rd,i)}function uM(r){switch(r){case 5126:return qy;case 35664:return Xy;case 35665:return Yy;case 35666:return jy;case 35674:return $y;case 35675:return Ky;case 35676:return Zy;case 5124:case 35670:return Jy;case 35667:case 35671:return Qy;case 35668:case 35672:return tM;case 35669:case 35673:return eM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return aM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}function fM(r,t){r.uniform1fv(this.addr,t)}function hM(r,t){const e=ys(t,this.size,2);r.uniform2fv(this.addr,e)}function dM(r,t){const e=ys(t,this.size,3);r.uniform3fv(this.addr,e)}function pM(r,t){const e=ys(t,this.size,4);r.uniform4fv(this.addr,e)}function mM(r,t){const e=ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function gM(r,t){const e=ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function _M(r,t){const e=ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function vM(r,t){r.uniform1iv(this.addr,t)}function xM(r,t){r.uniform2iv(this.addr,t)}function yM(r,t){r.uniform3iv(this.addr,t)}function MM(r,t){r.uniform4iv(this.addr,t)}function SM(r,t){r.uniform1uiv(this.addr,t)}function bM(r,t){r.uniform2uiv(this.addr,t)}function wM(r,t){r.uniform3uiv(this.addr,t)}function EM(r,t){r.uniform4uiv(this.addr,t)}function TM(r,t,e){const n=this.cache,i=t.length,s=To(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Ld,s[a])}function AM(r,t,e){const n=this.cache,i=t.length,s=To(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Dd,s[a])}function CM(r,t,e){const n=this.cache,i=t.length,s=To(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Id,s[a])}function PM(r,t,e){const n=this.cache,i=t.length,s=To(e,i);ge(n,s)||(r.uniform1iv(this.addr,s),_e(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Rd,s[a])}function LM(r){switch(r){case 5126:return fM;case 35664:return hM;case 35665:return dM;case 35666:return pM;case 35674:return mM;case 35675:return gM;case 35676:return _M;case 5124:case 35670:return vM;case 35667:case 35671:return xM;case 35668:case 35672:return yM;case 35669:case 35673:return MM;case 5125:return SM;case 36294:return bM;case 36295:return wM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return PM}}class RM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=uM(e.type)}}class DM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=LM(e.type)}}class IM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function Hf(r,t){r.seq.push(t),r.map[t.id]=t}function OM(r,t,e){const n=r.name,i=n.length;for(_l.lastIndex=0;;){const s=_l.exec(n),a=_l.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Hf(e,c===void 0?new RM(o,r,t):new DM(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new IM(o),Hf(e,f)),e=f}}}class ja{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);OM(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Vf(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let UM=0;function NM(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function FM(r){switch(r){case pr:return["Linear","( value )"];case Jt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Gf(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+NM(r.getShaderSource(t),a)}else return i}function zM(r,t){const e=FM(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function kM(r,t){let e;switch(t){case K_:e="Linear";break;case Z_:e="Reinhard";break;case J_:e="OptimizedCineon";break;case Q_:e="ACESFilmic";break;case tv:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function BM(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rs).join(`
`)}function HM(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function VM(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Rs(r){return r!==""}function Wf(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qf(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(r){return r.replace(GM,WM)}function WM(r,t){const e=Ft[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return $l(e)}const qM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xf(r){return r.replace(qM,XM)}function XM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yf(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function YM(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ud?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===C_?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ls&&(t="SHADOWMAP_TYPE_VSM"),t}function jM(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ss:case as:t="ENVMAP_TYPE_CUBE";break;case bo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $M(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function KM(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case dd:t="ENVMAP_BLENDING_MULTIPLY";break;case j_:t="ENVMAP_BLENDING_MIX";break;case $_:t="ENVMAP_BLENDING_ADD";break}return t}function ZM(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function JM(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=YM(e),c=jM(e),u=$M(e),f=KM(e),h=ZM(e),d=e.isWebGL2?"":BM(e),_=HM(s),g=i.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[Yf(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[d,Yf(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ui?"#define TONE_MAPPING":"",e.toneMapping!==ui?Ft.tonemapping_pars_fragment:"",e.toneMapping!==ui?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.encodings_pars_fragment,zM("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=$l(a),a=Wf(a,e),a=qf(a,e),o=$l(o),o=Wf(o,e),o=qf(o,e),a=Xf(a),o=Xf(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===df?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===df?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=b+m+a,v=b+p+o,S=Vf(i,35633,y),C=Vf(i,35632,v);if(i.attachShader(g,S),i.attachShader(g,C),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(g).trim(),E=i.getShaderInfoLog(S).trim(),q=i.getShaderInfoLog(C).trim();let Y=!0,U=!0;if(i.getProgramParameter(g,35714)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,S,C);else{const z=Gf(i,S,"vertex"),W=Gf(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+x+`
`+z+`
`+W)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(E===""||q==="")&&(U=!1);U&&(this.diagnostics={runnable:Y,programLog:x,vertexShader:{log:E,prefix:m},fragmentShader:{log:q,prefix:p}})}i.deleteShader(S),i.deleteShader(C);let P;this.getUniforms=function(){return P===void 0&&(P=new ja(i,g)),P};let R;return this.getAttributes=function(){return R===void 0&&(R=VM(i,g)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=UM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=C,this}let QM=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new eS(t),e.set(t,n)),n}}class eS{constructor(t){this.id=QM++,this.code=t,this.usedTimes=0}}function nS(r,t,e,n,i,s,a){const o=new Md,l=new tS,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return x===1?"uv2":"uv"}function m(x,E,q,Y,U){const z=Y.fog,W=U.geometry,$=x.isMeshStandardMaterial?Y.environment:null,H=(x.isMeshStandardMaterial?e:t).get(x.envMap||$),V=H&&H.mapping===bo?H.image.height:null,lt=_[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Et=ot!==void 0?ot.length:0;let ut=0;W.morphAttributes.position!==void 0&&(ut=1),W.morphAttributes.normal!==void 0&&(ut=2),W.morphAttributes.color!==void 0&&(ut=3);let D,O,K,st;if(lt){const bt=Gn[lt];D=bt.vertexShader,O=bt.fragmentShader}else D=x.vertexShader,O=x.fragmentShader,l.update(x),K=l.getVertexShaderID(x),st=l.getFragmentShaderID(x);const F=r.getRenderTarget(),yt=U.isInstancedMesh===!0,vt=!!x.map,ht=!!x.matcap,St=!!H,A=!!x.aoMap,L=!!x.lightMap,k=!!x.bumpMap,et=!!x.normalMap,Q=!!x.displacementMap,ct=!!x.emissiveMap,mt=!!x.metalnessMap,rt=!!x.roughnessMap,ft=x.clearcoat>0,at=x.iridescence>0,w=x.sheen>0,M=x.transmission>0,N=ft&&!!x.clearcoatMap,j=ft&&!!x.clearcoatNormalMap,J=ft&&!!x.clearcoatRoughnessMap,dt=at&&!!x.iridescenceMap,xt=at&&!!x.iridescenceThicknessMap,gt=w&&!!x.sheenColorMap,Z=w&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,At=!!x.specularColorMap,Ct=!!x.specularIntensityMap,wt=M&&!!x.transmissionMap,Mt=M&&!!x.thicknessMap,It=!!x.gradientMap,Xt=!!x.alphaMap,oe=x.alphaTest>0,I=!!x.extensions,nt=!!W.attributes.uv2;return{isWebGL2:u,shaderID:lt,shaderName:x.type,vertexShader:D,fragmentShader:O,defines:x.defines,customVertexShaderID:K,customFragmentShaderID:st,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,instancing:yt,instancingColor:yt&&U.instanceColor!==null,supportsVertexTextures:h,outputEncoding:F===null?r.outputEncoding:F.isXRRenderTarget===!0?F.texture.encoding:pr,map:vt,matcap:ht,envMap:St,envMapMode:St&&H.mapping,envMapCubeUVHeight:V,aoMap:A,lightMap:L,bumpMap:k,normalMap:et,displacementMap:h&&Q,emissiveMap:ct,normalMapObjectSpace:et&&x.normalMapType===yv,normalMapTangentSpace:et&&x.normalMapType===xv,decodeVideoTexture:vt&&x.map.isVideoTexture===!0&&x.map.encoding===Jt,metalnessMap:mt,roughnessMap:rt,clearcoat:ft,clearcoatMap:N,clearcoatNormalMap:j,clearcoatRoughnessMap:J,iridescence:at,iridescenceMap:dt,iridescenceThicknessMap:xt,sheen:w,sheenColorMap:gt,sheenRoughnessMap:Z,specularMap:Tt,specularColorMap:At,specularIntensityMap:Ct,transmission:M,transmissionMap:wt,thicknessMap:Mt,gradientMap:It,opaque:x.transparent===!1&&x.blending===jr,alphaMap:Xt,alphaTest:oe,combine:x.combine,mapUv:vt&&g(x.map.channel),aoMapUv:A&&g(x.aoMap.channel),lightMapUv:L&&g(x.lightMap.channel),bumpMapUv:k&&g(x.bumpMap.channel),normalMapUv:et&&g(x.normalMap.channel),displacementMapUv:Q&&g(x.displacementMap.channel),emissiveMapUv:ct&&g(x.emissiveMap.channel),metalnessMapUv:mt&&g(x.metalnessMap.channel),roughnessMapUv:rt&&g(x.roughnessMap.channel),clearcoatMapUv:N&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:j&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Z&&g(x.sheenRoughnessMap.channel),specularMapUv:Tt&&g(x.specularMap.channel),specularColorMapUv:At&&g(x.specularColorMap.channel),specularIntensityMapUv:Ct&&g(x.specularIntensityMap.channel),transmissionMapUv:wt&&g(x.transmissionMap.channel),thicknessMapUv:Mt&&g(x.thicknessMap.channel),alphaMapUv:Xt&&g(x.alphaMap.channel),vertexTangents:et&&!!W.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUvs2:nt,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(vt||Xt),fog:!!z,useFog:x.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:ui,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ci,flipSided:x.side===Ge,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:I&&x.extensions.derivatives===!0,extensionFragDepth:I&&x.extensions.fragDepth===!0,extensionDrawBuffers:I&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:I&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function p(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const q in x.defines)E.push(q),E.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(b(E,x),y(E,x),E.push(r.outputEncoding)),E.push(x.customProgramCacheKey),E.join()}function b(x,E){x.push(E.precision),x.push(E.outputEncoding),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUvs2&&o.enable(13),E.vertexTangents&&o.enable(14),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.decodeVideoTexture&&o.enable(17),E.opaque&&o.enable(18),E.pointsUvs&&o.enable(19),x.push(o.mask)}function v(x){const E=_[x.type];let q;if(E){const Y=Gn[E];q=Wv.clone(Y.uniforms)}else q=x.uniforms;return q}function S(x,E){let q;for(let Y=0,U=c.length;Y<U;Y++){const z=c[Y];if(z.cacheKey===E){q=z,++q.usedTimes;break}}return q===void 0&&(q=new JM(r,E,x,s),c.push(q)),q}function C(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:R}}function iS(){let r=new WeakMap;function t(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function e(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function rS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function jf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $f(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,h,d,_,g,m){let p=r[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),t++,p}function o(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,h,d,_,g,m){const p=a(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||rS),n.length>1&&n.sort(h||jf),i.length>1&&i.sort(h||jf)}function u(){for(let f=t,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function sS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new $f,r.set(n,[a])):i>=s.length?(a=new $f,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function aS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new X,color:new Qt};break;case"SpotLight":e={position:new X,direction:new X,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new X,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new X,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[t.id]=e,e}}}function oS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let lS=0;function cS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function uS(r,t){const e=new aS,n=oS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new X);const s=new X,a=new Te,o=new Te;function l(u,f){let h=0,d=0,_=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let g=0,m=0,p=0,b=0,y=0,v=0,S=0,C=0,P=0,R=0;u.sort(cS);const x=f===!0?Math.PI:1;for(let q=0,Y=u.length;q<Y;q++){const U=u[q],z=U.color,W=U.intensity,$=U.distance,H=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*W*x,d+=z.g*W*x,_+=z.b*W*x;else if(U.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],W);else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const lt=U.shadow,ot=n.get(U);ot.shadowBias=lt.bias,ot.shadowNormalBias=lt.normalBias,ot.shadowRadius=lt.radius,ot.shadowMapSize=lt.mapSize,i.directionalShadow[g]=ot,i.directionalShadowMap[g]=H,i.directionalShadowMatrix[g]=U.shadow.matrix,v++}i.directional[g]=V,g++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(z).multiplyScalar(W*x),V.distance=$,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[p]=V;const lt=U.shadow;if(U.map&&(i.spotLightMap[P]=U.map,P++,lt.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[p]=lt.matrix,U.castShadow){const ot=n.get(U);ot.shadowBias=lt.bias,ot.shadowNormalBias=lt.normalBias,ot.shadowRadius=lt.radius,ot.shadowMapSize=lt.mapSize,i.spotShadow[p]=ot,i.spotShadowMap[p]=H,C++}p++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(z).multiplyScalar(W),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[b]=V,b++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity*x),V.distance=U.distance,V.decay=U.decay,U.castShadow){const lt=U.shadow,ot=n.get(U);ot.shadowBias=lt.bias,ot.shadowNormalBias=lt.normalBias,ot.shadowRadius=lt.radius,ot.shadowMapSize=lt.mapSize,ot.shadowCameraNear=lt.camera.near,ot.shadowCameraFar=lt.camera.far,i.pointShadow[m]=ot,i.pointShadowMap[m]=H,i.pointShadowMatrix[m]=U.shadow.matrix,S++}i.point[m]=V,m++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(W*x),V.groundColor.copy(U.groundColor).multiplyScalar(W*x),i.hemi[y]=V,y++}}b>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_FLOAT_1,i.rectAreaLTC2=_t.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=_t.LTC_HALF_1,i.rectAreaLTC2=_t.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=_;const E=i.hash;(E.directionalLength!==g||E.pointLength!==m||E.spotLength!==p||E.rectAreaLength!==b||E.hemiLength!==y||E.numDirectionalShadows!==v||E.numPointShadows!==S||E.numSpotShadows!==C||E.numSpotMaps!==P)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=b,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=C+P-R,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=R,E.directionalLength=g,E.pointLength=m,E.spotLength=p,E.rectAreaLength=b,E.hemiLength=y,E.numDirectionalShadows=v,E.numPointShadows=S,E.numSpotShadows=C,E.numSpotMaps=P,i.version=lS++)}function c(u,f){let h=0,d=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let b=0,y=u.length;b<y;b++){const v=u[b];if(v.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(v.isSpotLight){const S=i.spot[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Kf(r,t){const e=new uS(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function fS(r,t){let e=new WeakMap;function n(s,a=0){const o=e.get(s);let l;return o===void 0?(l=new Kf(r,t),e.set(s,[l])):a>=o.length?(l=new Kf(r,t),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class hS extends oa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dS extends oa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gS(r,t,e){let n=new Cd;const i=new te,s=new te,a=new Ee,o=new hS({depthPacking:vv}),l=new dS,c={},u=e.maxTextureSize,f={[Oi]:Ge,[Ge]:Oi,[ci]:ci},h=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Fi;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Yn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ud,this.render=function(v,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const P=r.getRenderTarget(),R=r.getActiveCubeFace(),x=r.getActiveMipmapLevel(),E=r.state;E.setBlending(Li),E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);for(let q=0,Y=v.length;q<Y;q++){const U=v[q],z=U.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const W=z.getFrameExtents();if(i.multiply(W),s.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/W.x),i.x=s.x*W.x,z.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/W.y),i.y=s.y*W.y,z.mapSize.y=s.y)),z.map===null){const H=this.type!==Ls?{minFilter:ze,magFilter:ze}:{};z.map=new mr(i.x,i.y,H),z.map.texture.name=U.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const $=z.getViewportCount();for(let H=0;H<$;H++){const V=z.getViewport(H);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),E.viewport(a),z.updateMatrices(U,H),n=z.getFrustum(),y(S,C,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===Ls&&p(z,C),z.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(P,R,x)};function p(v,S){const C=t.update(g);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new mr(i.x,i.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(S,null,C,h,g,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(S,null,C,d,g,null)}function b(v,S,C,P){let R=null;const x=C.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(x!==void 0)R=x;else if(R=C.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const E=R.uuid,q=S.uuid;let Y=c[E];Y===void 0&&(Y={},c[E]=Y);let U=Y[q];U===void 0&&(U=R.clone(),Y[q]=U),R=U}if(R.visible=S.visible,R.wireframe=S.wireframe,P===Ls?R.side=S.shadowSide!==null?S.shadowSide:S.side:R.side=S.shadowSide!==null?S.shadowSide:f[S.side],R.alphaMap=S.alphaMap,R.alphaTest=S.alphaTest,R.map=S.map,R.clipShadows=S.clipShadows,R.clippingPlanes=S.clippingPlanes,R.clipIntersection=S.clipIntersection,R.displacementMap=S.displacementMap,R.displacementScale=S.displacementScale,R.displacementBias=S.displacementBias,R.wireframeLinewidth=S.wireframeLinewidth,R.linewidth=S.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const E=r.properties.get(R);E.light=C}return R}function y(v,S,C,P,R){if(v.visible===!1)return;if(v.layers.test(S.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&R===Ls)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,v.matrixWorld);const q=t.update(v),Y=v.material;if(Array.isArray(Y)){const U=q.groups;for(let z=0,W=U.length;z<W;z++){const $=U[z],H=Y[$.materialIndex];if(H&&H.visible){const V=b(v,H,P,R);r.renderBufferDirect(C,null,q,V,v,$)}}}else if(Y.visible){const U=b(v,Y,P,R);r.renderBufferDirect(C,null,q,U,v,null)}}const E=v.children;for(let q=0,Y=E.length;q<Y;q++)y(E[q],S,C,P,R)}}function _S(r,t,e){const n=e.isWebGL2;function i(){let I=!1;const nt=new Ee;let pt=null;const bt=new Ee(0,0,0,0);return{setMask:function(Pt){pt!==Pt&&!I&&(r.colorMask(Pt,Pt,Pt,Pt),pt=Pt)},setLocked:function(Pt){I=Pt},setClear:function(Pt,Zt,ne,Ae,vi){vi===!0&&(Pt*=Ae,Zt*=Ae,ne*=Ae),nt.set(Pt,Zt,ne,Ae),bt.equals(nt)===!1&&(r.clearColor(Pt,Zt,ne,Ae),bt.copy(nt))},reset:function(){I=!1,pt=null,bt.set(-1,0,0,0)}}}function s(){let I=!1,nt=null,pt=null,bt=null;return{setTest:function(Pt){Pt?F(2929):yt(2929)},setMask:function(Pt){nt!==Pt&&!I&&(r.depthMask(Pt),nt=Pt)},setFunc:function(Pt){if(pt!==Pt){switch(Pt){case H_:r.depthFunc(512);break;case V_:r.depthFunc(519);break;case G_:r.depthFunc(513);break;case Vl:r.depthFunc(515);break;case W_:r.depthFunc(514);break;case q_:r.depthFunc(518);break;case X_:r.depthFunc(516);break;case Y_:r.depthFunc(517);break;default:r.depthFunc(515)}pt=Pt}},setLocked:function(Pt){I=Pt},setClear:function(Pt){bt!==Pt&&(r.clearDepth(Pt),bt=Pt)},reset:function(){I=!1,nt=null,pt=null,bt=null}}}function a(){let I=!1,nt=null,pt=null,bt=null,Pt=null,Zt=null,ne=null,Ae=null,vi=null;return{setTest:function(le){I||(le?F(2960):yt(2960))},setMask:function(le){nt!==le&&!I&&(r.stencilMask(le),nt=le)},setFunc:function(le,un,Fn){(pt!==le||bt!==un||Pt!==Fn)&&(r.stencilFunc(le,un,Fn),pt=le,bt=un,Pt=Fn)},setOp:function(le,un,Fn){(Zt!==le||ne!==un||Ae!==Fn)&&(r.stencilOp(le,un,Fn),Zt=le,ne=un,Ae=Fn)},setLocked:function(le){I=le},setClear:function(le){vi!==le&&(r.clearStencil(le),vi=le)},reset:function(){I=!1,nt=null,pt=null,bt=null,Pt=null,Zt=null,ne=null,Ae=null,vi=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,b=null,y=null,v=null,S=null,C=null,P=null,R=null,x=!1,E=null,q=null,Y=null,U=null,z=null;const W=r.getParameter(35661);let $=!1,H=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=H>=1):V.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=H>=2);let lt=null,ot={};const Et=r.getParameter(3088),ut=r.getParameter(2978),D=new Ee().fromArray(Et),O=new Ee().fromArray(ut);function K(I,nt,pt){const bt=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(I,Pt),r.texParameteri(I,10241,9728),r.texParameteri(I,10240,9728);for(let Zt=0;Zt<pt;Zt++)r.texImage2D(nt+Zt,0,6408,1,1,0,6408,5121,bt);return Pt}const st={};st[3553]=K(3553,3553,1),st[34067]=K(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),F(2929),l.setFunc(Vl),Q(!1),ct(Uu),F(2884),k(Li);function F(I){h[I]!==!0&&(r.enable(I),h[I]=!0)}function yt(I){h[I]!==!1&&(r.disable(I),h[I]=!1)}function vt(I,nt){return d[I]!==nt?(r.bindFramebuffer(I,nt),d[I]=nt,n&&(I===36009&&(d[36160]=nt),I===36160&&(d[36009]=nt)),!0):!1}function ht(I,nt){let pt=g,bt=!1;if(I)if(pt=_.get(nt),pt===void 0&&(pt=[],_.set(nt,pt)),I.isWebGLMultipleRenderTargets){const Pt=I.texture;if(pt.length!==Pt.length||pt[0]!==36064){for(let Zt=0,ne=Pt.length;Zt<ne;Zt++)pt[Zt]=36064+Zt;pt.length=Pt.length,bt=!0}}else pt[0]!==36064&&(pt[0]=36064,bt=!0);else pt[0]!==1029&&(pt[0]=1029,bt=!0);bt&&(e.isWebGL2?r.drawBuffers(pt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(pt))}function St(I){return m!==I?(r.useProgram(I),m=I,!0):!1}const A={[zr]:32774,[L_]:32778,[R_]:32779};if(n)A[ku]=32775,A[Bu]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(A[ku]=I.MIN_EXT,A[Bu]=I.MAX_EXT)}const L={[D_]:0,[I_]:1,[O_]:768,[fd]:770,[B_]:776,[z_]:774,[N_]:772,[U_]:769,[hd]:771,[k_]:775,[F_]:773};function k(I,nt,pt,bt,Pt,Zt,ne,Ae){if(I===Li){p===!0&&(yt(3042),p=!1);return}if(p===!1&&(F(3042),p=!0),I!==P_){if(I!==b||Ae!==x){if((y!==zr||C!==zr)&&(r.blendEquation(32774),y=zr,C=zr),Ae)switch(I){case jr:r.blendFuncSeparate(1,771,1,771);break;case Nu:r.blendFunc(1,1);break;case Fu:r.blendFuncSeparate(0,769,0,1);break;case zu:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case jr:r.blendFuncSeparate(770,771,1,771);break;case Nu:r.blendFunc(770,1);break;case Fu:r.blendFuncSeparate(0,769,0,1);break;case zu:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,S=null,P=null,R=null,b=I,x=Ae}return}Pt=Pt||nt,Zt=Zt||pt,ne=ne||bt,(nt!==y||Pt!==C)&&(r.blendEquationSeparate(A[nt],A[Pt]),y=nt,C=Pt),(pt!==v||bt!==S||Zt!==P||ne!==R)&&(r.blendFuncSeparate(L[pt],L[bt],L[Zt],L[ne]),v=pt,S=bt,P=Zt,R=ne),b=I,x=!1}function et(I,nt){I.side===ci?yt(2884):F(2884);let pt=I.side===Ge;nt&&(pt=!pt),Q(pt),I.blending===jr&&I.transparent===!1?k(Li):k(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const bt=I.stencilWrite;c.setTest(bt),bt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?F(32926):yt(32926)}function Q(I){E!==I&&(I?r.frontFace(2304):r.frontFace(2305),E=I)}function ct(I){I!==T_?(F(2884),I!==q&&(I===Uu?r.cullFace(1029):I===A_?r.cullFace(1028):r.cullFace(1032))):yt(2884),q=I}function mt(I){I!==Y&&($&&r.lineWidth(I),Y=I)}function rt(I,nt,pt){I?(F(32823),(U!==nt||z!==pt)&&(r.polygonOffset(nt,pt),U=nt,z=pt)):yt(32823)}function ft(I){I?F(3089):yt(3089)}function at(I){I===void 0&&(I=33984+W-1),lt!==I&&(r.activeTexture(I),lt=I)}function w(I,nt,pt){pt===void 0&&(lt===null?pt=33984+W-1:pt=lt);let bt=ot[pt];bt===void 0&&(bt={type:void 0,texture:void 0},ot[pt]=bt),(bt.type!==I||bt.texture!==nt)&&(lt!==pt&&(r.activeTexture(pt),lt=pt),r.bindTexture(I,nt||st[I]),bt.type=I,bt.texture=nt)}function M(){const I=ot[lt];I!==void 0&&I.type!==void 0&&(r.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function N(){try{r.compressedTexImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{r.compressedTexImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{r.texSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{r.texStorage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{r.texStorage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{r.texImage2D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{r.texImage3D.apply(r,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(I){D.equals(I)===!1&&(r.scissor(I.x,I.y,I.z,I.w),D.copy(I))}function Mt(I){O.equals(I)===!1&&(r.viewport(I.x,I.y,I.z,I.w),O.copy(I))}function It(I,nt){let pt=f.get(nt);pt===void 0&&(pt=new WeakMap,f.set(nt,pt));let bt=pt.get(I);bt===void 0&&(bt=r.getUniformBlockIndex(nt,I.name),pt.set(I,bt))}function Xt(I,nt){const bt=f.get(nt).get(I);u.get(nt)!==bt&&(r.uniformBlockBinding(nt,bt,I.__bindingPointIndex),u.set(nt,bt))}function oe(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},lt=null,ot={},d={},_=new WeakMap,g=[],m=null,p=!1,b=null,y=null,v=null,S=null,C=null,P=null,R=null,x=!1,E=null,q=null,Y=null,U=null,z=null,D.set(0,0,r.canvas.width,r.canvas.height),O.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:F,disable:yt,bindFramebuffer:vt,drawBuffers:ht,useProgram:St,setBlending:k,setMaterial:et,setFlipSided:Q,setCullFace:ct,setLineWidth:mt,setPolygonOffset:rt,setScissorTest:ft,activeTexture:at,bindTexture:w,unbindTexture:M,compressedTexImage2D:N,compressedTexImage3D:j,texImage2D:At,texImage3D:Ct,updateUBOMapping:It,uniformBlockBinding:Xt,texStorage2D:Z,texStorage3D:Tt,texSubImage2D:J,texSubImage3D:dt,compressedTexSubImage2D:xt,compressedTexSubImage3D:gt,scissor:wt,viewport:Mt,reset:oe}}function vS(r,t,e,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,M){return p?new OffscreenCanvas(w,M):Ks("canvas")}function y(w,M,N,j){let J=1;if((w.width>j||w.height>j)&&(J=j/Math.max(w.width,w.height)),J<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const dt=M?bv:Math.floor,xt=dt(J*w.width),gt=dt(J*w.height);g===void 0&&(g=b(xt,gt));const Z=N?b(xt,gt):g;return Z.width=xt,Z.height=gt,Z.getContext("2d").drawImage(w,0,0,xt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+xt+"x"+gt+")."),Z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return pf(w.width)&&pf(w.height)}function S(w){return o?!1:w.wrapS!==Cn||w.wrapT!==Cn||w.minFilter!==ze&&w.minFilter!==mn}function C(w,M){return w.generateMipmaps&&M&&w.minFilter!==ze&&w.minFilter!==mn}function P(w){r.generateMipmap(w)}function R(w,M,N,j,J=!1){if(o===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let dt=M;return M===6403&&(N===5126&&(dt=33326),N===5131&&(dt=33325),N===5121&&(dt=33321)),M===33319&&(N===5126&&(dt=33328),N===5131&&(dt=33327),N===5121&&(dt=33323)),M===6408&&(N===5126&&(dt=34836),N===5131&&(dt=34842),N===5121&&(dt=j===Jt&&J===!1?35907:32856),N===32819&&(dt=32854),N===32820&&(dt=32855)),(dt===33325||dt===33326||dt===33327||dt===33328||dt===34842||dt===34836)&&t.get("EXT_color_buffer_float"),dt}function x(w,M,N){return C(w,N)===!0||w.isFramebufferTexture&&w.minFilter!==ze&&w.minFilter!==mn?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function E(w){return w===ze||w===Hu||w===Go?9728:9729}function q(w){const M=w.target;M.removeEventListener("dispose",q),U(M),M.isVideoTexture&&_.delete(M)}function Y(w){const M=w.target;M.removeEventListener("dispose",Y),W(M)}function U(w){const M=n.get(w);if(M.__webglInit===void 0)return;const N=w.source,j=m.get(N);if(j){const J=j[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&z(w),Object.keys(j).length===0&&m.delete(N)}n.remove(w)}function z(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const N=w.source,j=m.get(N);delete j[M.__cacheKey],a.memory.textures--}function W(w){const M=w.texture,N=n.get(w),j=n.get(M);if(j.__webglTexture!==void 0&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)r.deleteFramebuffer(N.__webglFramebuffer[J]),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[J]);else{if(r.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let J=0;J<N.__webglColorRenderbuffer.length;J++)N.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[J]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let J=0,dt=M.length;J<dt;J++){const xt=n.get(M[J]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),a.memory.textures--),n.remove(M[J])}n.remove(M),n.remove(w)}let $=0;function H(){$=0}function V(){const w=$;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),$+=1,w}function lt(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function ot(w,M){const N=n.get(w);if(w.isVideoTexture&&ft(w),w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){const j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(N,w,M);return}}e.bindTexture(3553,N.__webglTexture,33984+M)}function Et(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){yt(N,w,M);return}e.bindTexture(35866,N.__webglTexture,33984+M)}function ut(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){yt(N,w,M);return}e.bindTexture(32879,N.__webglTexture,33984+M)}function D(w,M){const N=n.get(w);if(w.version>0&&N.__version!==w.version){vt(N,w,M);return}e.bindTexture(34067,N.__webglTexture,33984+M)}const O={[ql]:10497,[Cn]:33071,[Xl]:33648},K={[ze]:9728,[Hu]:9984,[Go]:9986,[mn]:9729,[ev]:9985,[Ys]:9987};function st(w,M,N){if(N?(r.texParameteri(w,10242,O[M.wrapS]),r.texParameteri(w,10243,O[M.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,O[M.wrapR]),r.texParameteri(w,10240,K[M.magFilter]),r.texParameteri(w,10241,K[M.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(M.wrapS!==Cn||M.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,E(M.magFilter)),r.texParameteri(w,10241,E(M.minFilter)),M.minFilter!==ze&&M.minFilter!==mn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const j=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===ze||M.minFilter!==Go&&M.minFilter!==Ys||M.type===rr&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===js&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function F(w,M){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",q));const j=M.source;let J=m.get(j);J===void 0&&(J={},m.set(j,J));const dt=lt(M);if(dt!==w.__cacheKey){J[dt]===void 0&&(J[dt]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),J[dt].usedTimes++;const xt=J[w.__cacheKey];xt!==void 0&&(J[w.__cacheKey].usedTimes--,xt.usedTimes===0&&z(M)),w.__cacheKey=dt,w.__webglTexture=J[dt].texture}return N}function yt(w,M,N){let j=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=35866),M.isData3DTexture&&(j=32879);const J=F(w,M),dt=M.source;e.bindTexture(j,w.__webglTexture,33984+N);const xt=n.get(dt);if(dt.version!==xt.__version||J===!0){e.activeTexture(33984+N),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const gt=S(M)&&v(M.image)===!1;let Z=y(M.image,gt,!1,u);Z=at(M,Z);const Tt=v(Z)||o,At=s.convert(M.format,M.encoding);let Ct=s.convert(M.type),wt=R(M.internalFormat,At,Ct,M.encoding,M.isVideoTexture);st(j,M,Tt);let Mt;const It=M.mipmaps,Xt=o&&M.isVideoTexture!==!0,oe=xt.__version===void 0||J===!0,I=x(M,Z,Tt);if(M.isDepthTexture)wt=6402,o?M.type===rr?wt=36012:M.type===ir?wt=33190:M.type===$r?wt=35056:wt=33189:M.type===rr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===lr&&wt===6402&&M.type!==md&&M.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ir,Ct=s.convert(M.type)),M.format===os&&wt===6402&&(wt=34041,M.type!==$r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=$r,Ct=s.convert(M.type))),oe&&(Xt?e.texStorage2D(3553,1,wt,Z.width,Z.height):e.texImage2D(3553,0,wt,Z.width,Z.height,0,At,Ct,null));else if(M.isDataTexture)if(It.length>0&&Tt){Xt&&oe&&e.texStorage2D(3553,I,wt,It[0].width,It[0].height);for(let nt=0,pt=It.length;nt<pt;nt++)Mt=It[nt],Xt?e.texSubImage2D(3553,nt,0,0,Mt.width,Mt.height,At,Ct,Mt.data):e.texImage2D(3553,nt,wt,Mt.width,Mt.height,0,At,Ct,Mt.data);M.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(3553,I,wt,Z.width,Z.height),e.texSubImage2D(3553,0,0,0,Z.width,Z.height,At,Ct,Z.data)):e.texImage2D(3553,0,wt,Z.width,Z.height,0,At,Ct,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xt&&oe&&e.texStorage3D(35866,I,wt,It[0].width,It[0].height,Z.depth);for(let nt=0,pt=It.length;nt<pt;nt++)Mt=It[nt],M.format!==Pn?At!==null?Xt?e.compressedTexSubImage3D(35866,nt,0,0,0,Mt.width,Mt.height,Z.depth,At,Mt.data,0,0):e.compressedTexImage3D(35866,nt,wt,Mt.width,Mt.height,Z.depth,0,Mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage3D(35866,nt,0,0,0,Mt.width,Mt.height,Z.depth,At,Ct,Mt.data):e.texImage3D(35866,nt,wt,Mt.width,Mt.height,Z.depth,0,At,Ct,Mt.data)}else{Xt&&oe&&e.texStorage2D(3553,I,wt,It[0].width,It[0].height);for(let nt=0,pt=It.length;nt<pt;nt++)Mt=It[nt],M.format!==Pn?At!==null?Xt?e.compressedTexSubImage2D(3553,nt,0,0,Mt.width,Mt.height,At,Mt.data):e.compressedTexImage2D(3553,nt,wt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(3553,nt,0,0,Mt.width,Mt.height,At,Ct,Mt.data):e.texImage2D(3553,nt,wt,Mt.width,Mt.height,0,At,Ct,Mt.data)}else if(M.isDataArrayTexture)Xt?(oe&&e.texStorage3D(35866,I,wt,Z.width,Z.height,Z.depth),e.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,At,Ct,Z.data)):e.texImage3D(35866,0,wt,Z.width,Z.height,Z.depth,0,At,Ct,Z.data);else if(M.isData3DTexture)Xt?(oe&&e.texStorage3D(32879,I,wt,Z.width,Z.height,Z.depth),e.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,At,Ct,Z.data)):e.texImage3D(32879,0,wt,Z.width,Z.height,Z.depth,0,At,Ct,Z.data);else if(M.isFramebufferTexture){if(oe)if(Xt)e.texStorage2D(3553,I,wt,Z.width,Z.height);else{let nt=Z.width,pt=Z.height;for(let bt=0;bt<I;bt++)e.texImage2D(3553,bt,wt,nt,pt,0,At,Ct,null),nt>>=1,pt>>=1}}else if(It.length>0&&Tt){Xt&&oe&&e.texStorage2D(3553,I,wt,It[0].width,It[0].height);for(let nt=0,pt=It.length;nt<pt;nt++)Mt=It[nt],Xt?e.texSubImage2D(3553,nt,0,0,At,Ct,Mt):e.texImage2D(3553,nt,wt,At,Ct,Mt);M.generateMipmaps=!1}else Xt?(oe&&e.texStorage2D(3553,I,wt,Z.width,Z.height),e.texSubImage2D(3553,0,0,0,At,Ct,Z)):e.texImage2D(3553,0,wt,At,Ct,Z);C(M,Tt)&&P(j),xt.__version=dt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function vt(w,M,N){if(M.image.length!==6)return;const j=F(w,M),J=M.source;e.bindTexture(34067,w.__webglTexture,33984+N);const dt=n.get(J);if(J.version!==dt.__version||j===!0){e.activeTexture(33984+N),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const xt=M.isCompressedTexture||M.image[0].isCompressedTexture,gt=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let nt=0;nt<6;nt++)!xt&&!gt?Z[nt]=y(M.image[nt],!1,!0,c):Z[nt]=gt?M.image[nt].image:M.image[nt],Z[nt]=at(M,Z[nt]);const Tt=Z[0],At=v(Tt)||o,Ct=s.convert(M.format,M.encoding),wt=s.convert(M.type),Mt=R(M.internalFormat,Ct,wt,M.encoding),It=o&&M.isVideoTexture!==!0,Xt=dt.__version===void 0||j===!0;let oe=x(M,Tt,At);st(34067,M,At);let I;if(xt){It&&Xt&&e.texStorage2D(34067,oe,Mt,Tt.width,Tt.height);for(let nt=0;nt<6;nt++){I=Z[nt].mipmaps;for(let pt=0;pt<I.length;pt++){const bt=I[pt];M.format!==Pn?Ct!==null?It?e.compressedTexSubImage2D(34069+nt,pt,0,0,bt.width,bt.height,Ct,bt.data):e.compressedTexImage2D(34069+nt,pt,Mt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(34069+nt,pt,0,0,bt.width,bt.height,Ct,wt,bt.data):e.texImage2D(34069+nt,pt,Mt,bt.width,bt.height,0,Ct,wt,bt.data)}}}else{I=M.mipmaps,It&&Xt&&(I.length>0&&oe++,e.texStorage2D(34067,oe,Mt,Z[0].width,Z[0].height));for(let nt=0;nt<6;nt++)if(gt){It?e.texSubImage2D(34069+nt,0,0,0,Z[nt].width,Z[nt].height,Ct,wt,Z[nt].data):e.texImage2D(34069+nt,0,Mt,Z[nt].width,Z[nt].height,0,Ct,wt,Z[nt].data);for(let pt=0;pt<I.length;pt++){const Pt=I[pt].image[nt].image;It?e.texSubImage2D(34069+nt,pt+1,0,0,Pt.width,Pt.height,Ct,wt,Pt.data):e.texImage2D(34069+nt,pt+1,Mt,Pt.width,Pt.height,0,Ct,wt,Pt.data)}}else{It?e.texSubImage2D(34069+nt,0,0,0,Ct,wt,Z[nt]):e.texImage2D(34069+nt,0,Mt,Ct,wt,Z[nt]);for(let pt=0;pt<I.length;pt++){const bt=I[pt];It?e.texSubImage2D(34069+nt,pt+1,0,0,Ct,wt,bt.image[nt]):e.texImage2D(34069+nt,pt+1,Mt,Ct,wt,bt.image[nt])}}}C(M,At)&&P(34067),dt.__version=J.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function ht(w,M,N,j,J){const dt=s.convert(N.format,N.encoding),xt=s.convert(N.type),gt=R(N.internalFormat,dt,xt,N.encoding);n.get(M).__hasExternalTextures||(J===32879||J===35866?e.texImage3D(J,0,gt,M.width,M.height,M.depth,0,dt,xt,null):e.texImage2D(J,0,gt,M.width,M.height,0,dt,xt,null)),e.bindFramebuffer(36160,w),rt(M)?h.framebufferTexture2DMultisampleEXT(36160,j,J,n.get(N).__webglTexture,0,mt(M)):(J===3553||J>=34069&&J<=34074)&&r.framebufferTexture2D(36160,j,J,n.get(N).__webglTexture,0),e.bindFramebuffer(36160,null)}function St(w,M,N){if(r.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let j=33189;if(N||rt(M)){const J=M.depthTexture;J&&J.isDepthTexture&&(J.type===rr?j=36012:J.type===ir&&(j=33190));const dt=mt(M);rt(M)?h.renderbufferStorageMultisampleEXT(36161,dt,j,M.width,M.height):r.renderbufferStorageMultisample(36161,dt,j,M.width,M.height)}else r.renderbufferStorage(36161,j,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const j=mt(M);N&&rt(M)===!1?r.renderbufferStorageMultisample(36161,j,35056,M.width,M.height):rt(M)?h.renderbufferStorageMultisampleEXT(36161,j,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const j=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let J=0;J<j.length;J++){const dt=j[J],xt=s.convert(dt.format,dt.encoding),gt=s.convert(dt.type),Z=R(dt.internalFormat,xt,gt,dt.encoding),Tt=mt(M);N&&rt(M)===!1?r.renderbufferStorageMultisample(36161,Tt,Z,M.width,M.height):rt(M)?h.renderbufferStorageMultisampleEXT(36161,Tt,Z,M.width,M.height):r.renderbufferStorage(36161,Z,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function A(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ot(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,J=mt(M);if(M.depthTexture.format===lr)rt(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,j,0,J):r.framebufferTexture2D(36160,36096,3553,j,0);else if(M.depthTexture.format===os)rt(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,j,0,J):r.framebufferTexture2D(36160,33306,3553,j,0);else throw new Error("Unknown depthTexture format")}function L(w){const M=n.get(w),N=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");A(M.__webglFramebuffer,w)}else if(N){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(36160,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=r.createRenderbuffer(),St(M.__webglDepthbuffer[j],w,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),St(M.__webglDepthbuffer,w,!1);e.bindFramebuffer(36160,null)}function k(w,M,N){const j=n.get(w);M!==void 0&&ht(j.__webglFramebuffer,w,w.texture,36064,3553),N!==void 0&&L(w)}function et(w){const M=w.texture,N=n.get(w),j=n.get(M);w.addEventListener("dispose",Y),w.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=M.version,a.memory.textures++);const J=w.isWebGLCubeRenderTarget===!0,dt=w.isWebGLMultipleRenderTargets===!0,xt=v(w)||o;if(J){N.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)N.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(N.__webglFramebuffer=r.createFramebuffer(),dt)if(i.drawBuffers){const gt=w.texture;for(let Z=0,Tt=gt.length;Z<Tt;Z++){const At=n.get(gt[Z]);At.__webglTexture===void 0&&(At.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&rt(w)===!1){const gt=dt?M:[M];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let Z=0;Z<gt.length;Z++){const Tt=gt[Z];N.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,N.__webglColorRenderbuffer[Z]);const At=s.convert(Tt.format,Tt.encoding),Ct=s.convert(Tt.type),wt=R(Tt.internalFormat,At,Ct,Tt.encoding,w.isXRRenderTarget===!0),Mt=mt(w);r.renderbufferStorageMultisample(36161,Mt,wt,w.width,w.height),r.framebufferRenderbuffer(36160,36064+Z,36161,N.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),St(N.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(36160,null)}}if(J){e.bindTexture(34067,j.__webglTexture),st(34067,M,xt);for(let gt=0;gt<6;gt++)ht(N.__webglFramebuffer[gt],w,M,36064,34069+gt);C(M,xt)&&P(34067),e.unbindTexture()}else if(dt){const gt=w.texture;for(let Z=0,Tt=gt.length;Z<Tt;Z++){const At=gt[Z],Ct=n.get(At);e.bindTexture(3553,Ct.__webglTexture),st(3553,At,xt),ht(N.__webglFramebuffer,w,At,36064+Z,3553),C(At,xt)&&P(3553)}e.unbindTexture()}else{let gt=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?gt=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,j.__webglTexture),st(gt,M,xt),ht(N.__webglFramebuffer,w,M,36064,gt),C(M,xt)&&P(gt),e.unbindTexture()}w.depthBuffer&&L(w)}function Q(w){const M=v(w)||o,N=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let j=0,J=N.length;j<J;j++){const dt=N[j];if(C(dt,M)){const xt=w.isWebGLCubeRenderTarget?34067:3553,gt=n.get(dt).__webglTexture;e.bindTexture(xt,gt),P(xt),e.unbindTexture()}}}function ct(w){if(o&&w.samples>0&&rt(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],N=w.width,j=w.height;let J=16384;const dt=[],xt=w.stencilBuffer?33306:36096,gt=n.get(w),Z=w.isWebGLMultipleRenderTargets===!0;if(Z)for(let Tt=0;Tt<M.length;Tt++)e.bindFramebuffer(36160,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Tt,36161,null),e.bindFramebuffer(36160,gt.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Tt,3553,null,0);e.bindFramebuffer(36008,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,gt.__webglFramebuffer);for(let Tt=0;Tt<M.length;Tt++){dt.push(36064+Tt),w.depthBuffer&&dt.push(xt);const At=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(At===!1&&(w.depthBuffer&&(J|=256),w.stencilBuffer&&(J|=1024)),Z&&r.framebufferRenderbuffer(36008,36064,36161,gt.__webglColorRenderbuffer[Tt]),At===!0&&(r.invalidateFramebuffer(36008,[xt]),r.invalidateFramebuffer(36009,[xt])),Z){const Ct=n.get(M[Tt]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ct,0)}r.blitFramebuffer(0,0,N,j,0,0,N,j,J,9728),d&&r.invalidateFramebuffer(36008,dt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),Z)for(let Tt=0;Tt<M.length;Tt++){e.bindFramebuffer(36160,gt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Tt,36161,gt.__webglColorRenderbuffer[Tt]);const At=n.get(M[Tt]).__webglTexture;e.bindFramebuffer(36160,gt.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Tt,3553,At,0)}e.bindFramebuffer(36009,gt.__webglMultisampledFramebuffer)}}function mt(w){return Math.min(f,w.samples)}function rt(w){const M=n.get(w);return o&&w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(w){const M=a.render.frame;_.get(w)!==M&&(_.set(w,M),w.update())}function at(w,M){const N=w.encoding,j=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Yl||N!==pr&&(N===Jt?o===!1?t.has("EXT_sRGB")===!0&&j===Pn?(w.format=Yl,w.minFilter=mn,w.generateMipmaps=!1):M=vd.sRGBToLinear(M):(j!==Pn||J!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),M}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=ot,this.setTexture2DArray=Et,this.setTexture3D=ut,this.setTextureCube=D,this.rebindTextures=k,this.setupRenderTarget=et,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=rt}function xS(r,t,e){const n=e.isWebGL2;function i(s,a=null){let o;if(s===dr)return 5121;if(s===sv)return 32819;if(s===av)return 32820;if(s===nv)return 5120;if(s===iv)return 5122;if(s===md)return 5123;if(s===rv)return 5124;if(s===ir)return 5125;if(s===rr)return 5126;if(s===js)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ov)return 6406;if(s===Pn)return 6408;if(s===lv)return 6409;if(s===cv)return 6410;if(s===lr)return 6402;if(s===os)return 34041;if(s===Yl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===uv)return 6403;if(s===fv)return 36244;if(s===hv)return 33319;if(s===dv)return 33320;if(s===pv)return 36249;if(s===Wo||s===qo||s===Xo||s===Yo)if(a===Jt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Yo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vu||s===Gu||s===Wu||s===qu)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Vu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qu)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mv)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xu||s===Yu)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Xu)return a===Jt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Yu)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ju||s===$u||s===Ku||s===Zu||s===Ju||s===Qu||s===tf||s===ef||s===nf||s===rf||s===sf||s===af||s===of||s===lf)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ju)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$u)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ku)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Zu)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ju)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qu)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tf)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ef)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nf)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rf)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sf)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===af)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===of)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lf)return a===Jt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===jo)return a===Jt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===gv||s===cf||s===uf||s===ff)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===jo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===cf)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===uf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ff)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===$r?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class yS extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ka extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ka;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class SS extends We{constructor(t,e,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:lr,u!==lr&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=ir),n===void 0&&u===os&&(n=$r),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ze,this.minFilter=l!==void 0?l:ze,this.flipY=!1,this.generateMipmaps=!1}}class bS extends xs{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=e.getContextAttributes();let m=null,p=null;const b=[],y=[],v=new Set,S=new Map,C=new nn;C.layers.enable(1),C.viewport=new Ee;const P=new nn;P.layers.enable(2),P.viewport=new Ee;const R=[C,P],x=new yS;x.layers.enable(1),x.layers.enable(2);let E=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let O=b[D];return O===void 0&&(O=new vl,b[D]=O),O.getTargetRaySpace()},this.getControllerGrip=function(D){let O=b[D];return O===void 0&&(O=new vl,b[D]=O),O.getGripSpace()},this.getHand=function(D){let O=b[D];return O===void 0&&(O=new vl,b[D]=O),O.getHandSpace()};function Y(D){const O=y.indexOf(D.inputSource);if(O===-1)return;const K=b[O];K!==void 0&&K.dispatchEvent({type:D.type,data:D.inputSource})}function U(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",z);for(let D=0;D<b.length;D++){const O=y[D];O!==null&&(y[D]=null,b[D].disconnect(O))}E=null,q=null,t.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,ut.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){o=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(D){c=D},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",U),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const O={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,O),i.updateRenderState({baseLayer:d}),p=new mr(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:dr,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let O=null,K=null,st=null;g.depth&&(st=g.stencil?35056:33190,O=g.stencil?os:lr,K=g.stencil?$r:ir);const F={colorFormat:32856,depthFormat:st,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(F),i.updateRenderState({layers:[h]}),p=new mr(h.textureWidth,h.textureHeight,{format:Pn,type:dr,depthTexture:new SS(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const yt=t.properties.get(p);yt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(D){for(let O=0;O<D.removed.length;O++){const K=D.removed[O],st=y.indexOf(K);st>=0&&(y[st]=null,b[st].disconnect(K))}for(let O=0;O<D.added.length;O++){const K=D.added[O];let st=y.indexOf(K);if(st===-1){for(let yt=0;yt<b.length;yt++)if(yt>=y.length){y.push(K),st=yt;break}else if(y[yt]===null){y[yt]=K,st=yt;break}if(st===-1)break}const F=b[st];F&&F.connect(K)}}const W=new X,$=new X;function H(D,O,K){W.setFromMatrixPosition(O.matrixWorld),$.setFromMatrixPosition(K.matrixWorld);const st=W.distanceTo($),F=O.projectionMatrix.elements,yt=K.projectionMatrix.elements,vt=F[14]/(F[10]-1),ht=F[14]/(F[10]+1),St=(F[9]+1)/F[5],A=(F[9]-1)/F[5],L=(F[8]-1)/F[0],k=(yt[8]+1)/yt[0],et=vt*L,Q=vt*k,ct=st/(-L+k),mt=ct*-L;O.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(mt),D.translateZ(ct),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const rt=vt+ct,ft=ht+ct,at=et-mt,w=Q+(st-mt),M=St*ht/ft*rt,N=A*ht/ft*rt;D.projectionMatrix.makePerspective(at,w,M,N,rt,ft),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}function V(D,O){O===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(O.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;x.near=P.near=C.near=D.near,x.far=P.far=C.far=D.far,(E!==x.near||q!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,q=x.far);const O=D.parent,K=x.cameras;V(x,O);for(let st=0;st<K.length;st++)V(K[st],O);K.length===2?H(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),lt(D,x,O)};function lt(D,O,K){K===null?D.matrix.copy(O.matrixWorld):(D.matrix.copy(K.matrixWorld),D.matrix.invert(),D.matrix.multiply(O.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0);const st=D.children;for(let F=0,yt=st.length;F<yt;F++)st[F].updateMatrixWorld(!0);D.projectionMatrix.copy(O.projectionMatrix),D.projectionMatrixInverse.copy(O.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=jl*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(D){l=D,h!==null&&(h.fixedFoveation=D),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=D)},this.getPlanes=function(){return v};let ot=null;function Et(D,O){if(u=O.getViewerPose(c||a),_=O,u!==null){const K=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let st=!1;K.length!==x.cameras.length&&(x.cameras.length=0,st=!0);for(let F=0;F<K.length;F++){const yt=K[F];let vt=null;if(d!==null)vt=d.getViewport(yt);else{const St=f.getViewSubImage(h,yt);vt=St.viewport,F===0&&(t.setRenderTargetTextures(p,St.colorTexture,h.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(p))}let ht=R[F];ht===void 0&&(ht=new nn,ht.layers.enable(F),ht.viewport=new Ee,R[F]=ht),ht.matrix.fromArray(yt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(yt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(vt.x,vt.y,vt.width,vt.height),F===0&&(x.matrix.copy(ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),st===!0&&x.cameras.push(ht)}}for(let K=0;K<b.length;K++){const st=y[K],F=b[K];st!==null&&F!==void 0&&F.update(st,O,c||a)}if(ot&&ot(D,O),O.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let K=null;for(const st of v)O.detectedPlanes.has(st)||(K===null&&(K=[]),K.push(st));if(K!==null)for(const st of K)v.delete(st),S.delete(st),n.dispatchEvent({type:"planeremoved",data:st});for(const st of O.detectedPlanes)if(!v.has(st))v.add(st),S.set(st,O.lastChangedTime),n.dispatchEvent({type:"planeadded",data:st});else{const F=S.get(st);st.lastChangedTime>F&&(S.set(st,st.lastChangedTime),n.dispatchEvent({type:"planechanged",data:st}))}}_=null}const ut=new Pd;ut.setAnimationLoop(Et),this.setAnimationLoop=function(D){ot=D},this.dispose=function(){}}}function wS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ed(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ge&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ge&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ge&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ES(r,t,e,n){let i={},s={},a=[];const o=e.isWebGL2?r.getParameter(35375):0;function l(b,y){const v=y.program;n.uniformBlockBinding(b,v)}function c(b,y){let v=i[b.id];v===void 0&&(_(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const S=y.program;n.updateUBOMapping(b,S);const C=t.render.frame;s[b.id]!==C&&(h(b),s[b.id]=C)}function u(b){const y=f();b.__bindingPointIndex=y;const v=r.createBuffer(),S=b.__size,C=b.usage;return r.bindBuffer(35345,v),r.bufferData(35345,S,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,v),v}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const y=i[b.id],v=b.uniforms,S=b.__cache;r.bindBuffer(35345,y);for(let C=0,P=v.length;C<P;C++){const R=v[C];if(d(R,C,S)===!0){const x=R.__offset,E=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let Y=0;Y<E.length;Y++){const U=E[Y],z=g(U);typeof U=="number"?(R.__data[0]=U,r.bufferSubData(35345,x+q,R.__data)):U.isMatrix3?(R.__data[0]=U.elements[0],R.__data[1]=U.elements[1],R.__data[2]=U.elements[2],R.__data[3]=U.elements[0],R.__data[4]=U.elements[3],R.__data[5]=U.elements[4],R.__data[6]=U.elements[5],R.__data[7]=U.elements[0],R.__data[8]=U.elements[6],R.__data[9]=U.elements[7],R.__data[10]=U.elements[8],R.__data[11]=U.elements[0]):(U.toArray(R.__data,q),q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,x,R.__data)}}r.bindBuffer(35345,null)}function d(b,y,v){const S=b.value;if(v[y]===void 0){if(typeof S=="number")v[y]=S;else{const C=Array.isArray(S)?S:[S],P=[];for(let R=0;R<C.length;R++)P.push(C[R].clone());v[y]=P}return!0}else if(typeof S=="number"){if(v[y]!==S)return v[y]=S,!0}else{const C=Array.isArray(v[y])?v[y]:[v[y]],P=Array.isArray(S)?S:[S];for(let R=0;R<C.length;R++){const x=C[R];if(x.equals(P[R])===!1)return x.copy(P[R]),!0}}return!1}function _(b){const y=b.uniforms;let v=0;const S=16;let C=0;for(let P=0,R=y.length;P<R;P++){const x=y[P],E={boundary:0,storage:0},q=Array.isArray(x.value)?x.value:[x.value];for(let Y=0,U=q.length;Y<U;Y++){const z=q[Y],W=g(z);E.boundary+=W.boundary,E.storage+=W.storage}if(x.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=v,P>0){C=v%S;const Y=S-C;C!==0&&Y-E.boundary<0&&(v+=S-C,x.__offset=v)}v+=E.storage}return C=v%S,C>0&&(v+=S-C),b.__size=v,b.__cache={},this}function g(b){const y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}function TS(){const r=Ks("canvas");return r.style.display="block",r}class kc{constructor(t={}){const{canvas:e=TS(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;let d=null,_=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pr,this.useLegacyLights=!0,this.toneMapping=ui,this.toneMappingExposure=1;const p=this;let b=!1,y=0,v=0,S=null,C=-1,P=null;const R=new Ee,x=new Ee;let E=null,q=e.width,Y=e.height,U=1,z=null,W=null;const $=new Ee(0,0,q,Y),H=new Ee(0,0,q,Y);let V=!1;const lt=new Cd;let ot=!1,Et=!1,ut=null;const D=new Te,O=new X,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function st(){return S===null?U:1}let F=n;function yt(T,G){for(let tt=0;tt<T.length;tt++){const B=T[tt],it=e.getContext(B,G);if(it!==null)return it}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nc}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Xt,!1),F===null){const G=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&G.shift(),F=yt(G,T),F===null)throw yt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let vt,ht,St,A,L,k,et,Q,ct,mt,rt,ft,at,w,M,N,j,J,dt,xt,gt,Z,Tt,At;function Ct(){vt=new Fy(F),ht=new Ly(F,vt,t),vt.init(ht),Z=new xS(F,vt,ht),St=new _S(F,vt,ht),A=new By,L=new iS,k=new vS(F,vt,St,L,ht,Z,A),et=new Dy(p),Q=new Ny(p),ct=new Zv(F,ht),Tt=new Cy(F,vt,ct,ht),mt=new zy(F,ct,A,Tt),rt=new Wy(F,mt,ct,A),dt=new Gy(F,ht,k),N=new Ry(L),ft=new nS(p,et,Q,vt,ht,Tt,N),at=new wS(p,L),w=new sS,M=new fS(vt,ht),J=new Ay(p,et,Q,St,rt,h,l),j=new gS(p,rt,ht),At=new ES(F,A,ht,St),xt=new Py(F,vt,A,ht),gt=new ky(F,vt,A,ht),A.programs=ft.programs,p.capabilities=ht,p.extensions=vt,p.properties=L,p.renderLists=w,p.shadowMap=j,p.state=St,p.info=A}Ct();const wt=new bS(p,F);this.xr=wt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=vt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=vt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(q,Y,!1))},this.getSize=function(T){return T.set(q,Y)},this.setSize=function(T,G,tt=!0){if(wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,Y=G,e.width=Math.floor(T*U),e.height=Math.floor(G*U),tt===!0&&(e.style.width=T+"px",e.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(q*U,Y*U).floor()},this.setDrawingBufferSize=function(T,G,tt){q=T,Y=G,U=tt,e.width=Math.floor(T*tt),e.height=Math.floor(G*tt),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy($)},this.setViewport=function(T,G,tt,B){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,G,tt,B),St.viewport(R.copy($).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(H)},this.setScissor=function(T,G,tt,B){T.isVector4?H.set(T.x,T.y,T.z,T.w):H.set(T,G,tt,B),St.scissor(x.copy(H).multiplyScalar(U).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(T){St.setScissorTest(V=T)},this.setOpaqueSort=function(T){z=T},this.setTransparentSort=function(T){W=T},this.getClearColor=function(T){return T.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(T=!0,G=!0,tt=!0){let B=0;T&&(B|=16384),G&&(B|=256),tt&&(B|=1024),F.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Xt,!1),w.dispose(),M.dispose(),L.dispose(),et.dispose(),Q.dispose(),rt.dispose(),Tt.dispose(),At.dispose(),ft.dispose(),wt.dispose(),wt.removeEventListener("sessionstart",Pt),wt.removeEventListener("sessionend",Zt),ut&&(ut.dispose(),ut=null),ne.stop()};function Mt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=A.autoReset,G=j.enabled,tt=j.autoUpdate,B=j.needsUpdate,it=j.type;Ct(),A.autoReset=T,j.enabled=G,j.autoUpdate=tt,j.needsUpdate=B,j.type=it}function Xt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function oe(T){const G=T.target;G.removeEventListener("dispose",oe),I(G)}function I(T){nt(T),L.remove(T)}function nt(T){const G=L.get(T).programs;G!==void 0&&(G.forEach(function(tt){ft.releaseProgram(tt)}),T.isShaderMaterial&&ft.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,tt,B,it,Lt){G===null&&(G=K);const Dt=it.isMesh&&it.matrixWorld.determinant()<0,Ot=$p(T,G,tt,B,it);St.setMaterial(B,Dt);let Nt=tt.index,kt=1;B.wireframe===!0&&(Nt=mt.getWireframeAttribute(tt),kt=2);const Bt=tt.drawRange,Ht=tt.attributes.position;let jt=Bt.start*kt,Oe=(Bt.start+Bt.count)*kt;Lt!==null&&(jt=Math.max(jt,Lt.start*kt),Oe=Math.min(Oe,(Lt.start+Lt.count)*kt)),Nt!==null?(jt=Math.max(jt,0),Oe=Math.min(Oe,Nt.count)):Ht!=null&&(jt=Math.max(jt,0),Oe=Math.min(Oe,Ht.count));const Mn=Oe-jt;if(Mn<0||Mn===1/0)return;Tt.setup(it,B,Ot,tt,Nt);let ki,ue=xt;if(Nt!==null&&(ki=ct.get(Nt),ue=gt,ue.setIndex(ki)),it.isMesh)B.wireframe===!0?(St.setLineWidth(B.wireframeLinewidth*st()),ue.setMode(1)):ue.setMode(4);else if(it.isLine){let Wt=B.linewidth;Wt===void 0&&(Wt=1),St.setLineWidth(Wt*st()),it.isLineSegments?ue.setMode(1):it.isLineLoop?ue.setMode(2):ue.setMode(3)}else it.isPoints?ue.setMode(0):it.isSprite&&ue.setMode(4);if(it.isInstancedMesh)ue.renderInstances(jt,Mn,it.count);else if(tt.isInstancedBufferGeometry){const Wt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,Io=Math.min(tt.instanceCount,Wt);ue.renderInstances(jt,Mn,Io)}else ue.render(jt,Mn)},this.compile=function(T,G){function tt(B,it,Lt){B.transparent===!0&&B.side===ci&&B.forceSinglePass===!1?(B.side=Ge,B.needsUpdate=!0,fa(B,it,Lt),B.side=Oi,B.needsUpdate=!0,fa(B,it,Lt),B.side=ci):fa(B,it,Lt)}_=M.get(T),_.init(),m.push(_),T.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(p.useLegacyLights),T.traverse(function(B){const it=B.material;if(it)if(Array.isArray(it))for(let Lt=0;Lt<it.length;Lt++){const Dt=it[Lt];tt(Dt,T,B)}else tt(it,T,B)}),m.pop(),_=null};let pt=null;function bt(T){pt&&pt(T)}function Pt(){ne.stop()}function Zt(){ne.start()}const ne=new Pd;ne.setAnimationLoop(bt),typeof self<"u"&&ne.setContext(self),this.setAnimationLoop=function(T){pt=T,wt.setAnimationLoop(T),T===null?ne.stop():ne.start()},wt.addEventListener("sessionstart",Pt),wt.addEventListener("sessionend",Zt),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),wt.enabled===!0&&wt.isPresenting===!0&&(wt.cameraAutoUpdate===!0&&wt.updateCamera(G),G=wt.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,G,S),_=M.get(T,m.length),_.init(),m.push(_),D.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),lt.setFromProjectionMatrix(D),Et=this.localClippingEnabled,ot=N.init(this.clippingPlanes,Et),d=w.get(T,g.length),d.init(),g.push(d),Ae(T,G,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(z,W),ot===!0&&N.beginShadows();const tt=_.state.shadowsArray;if(j.render(tt,T,G),ot===!0&&N.endShadows(),this.info.autoReset===!0&&this.info.reset(),J.render(d,T),_.setupLights(p.useLegacyLights),G.isArrayCamera){const B=G.cameras;for(let it=0,Lt=B.length;it<Lt;it++){const Dt=B[it];vi(d,T,Dt,Dt.viewport)}}else vi(d,T,G);S!==null&&(k.updateMultisampleRenderTarget(S),k.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(p,T,G),Tt.resetDefaultState(),C=-1,P=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function Ae(T,G,tt,B){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)tt=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)_.pushLight(T),T.castShadow&&_.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||lt.intersectsSprite(T)){B&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Dt=rt.update(T),Ot=T.material;Ot.visible&&d.push(T,Dt,Ot,tt,O.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==A.render.frame&&(T.skeleton.update(),T.skeleton.frame=A.render.frame),!T.frustumCulled||lt.intersectsObject(T))){B&&O.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Dt=rt.update(T),Ot=T.material;if(Array.isArray(Ot)){const Nt=Dt.groups;for(let kt=0,Bt=Nt.length;kt<Bt;kt++){const Ht=Nt[kt],jt=Ot[Ht.materialIndex];jt&&jt.visible&&d.push(T,Dt,jt,tt,O.z,Ht)}}else Ot.visible&&d.push(T,Dt,Ot,tt,O.z,null)}}const Lt=T.children;for(let Dt=0,Ot=Lt.length;Dt<Ot;Dt++)Ae(Lt[Dt],G,tt,B)}function vi(T,G,tt,B){const it=T.opaque,Lt=T.transmissive,Dt=T.transparent;_.setupLightsView(tt),ot===!0&&N.setGlobalState(p.clippingPlanes,tt),Lt.length>0&&le(it,Lt,G,tt),B&&St.viewport(R.copy(B)),it.length>0&&un(it,G,tt),Lt.length>0&&un(Lt,G,tt),Dt.length>0&&un(Dt,G,tt),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function le(T,G,tt,B){if(ut===null){const Ot=ht.isWebGL2;ut=new mr(1024,1024,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?js:dr,minFilter:Ys,samples:Ot&&o===!0?4:0})}const it=p.getRenderTarget();p.setRenderTarget(ut),p.clear();const Lt=p.toneMapping;p.toneMapping=ui,un(T,tt,B),k.updateMultisampleRenderTarget(ut),k.updateRenderTargetMipmap(ut);let Dt=!1;for(let Ot=0,Nt=G.length;Ot<Nt;Ot++){const kt=G[Ot],Bt=kt.object,Ht=kt.geometry,jt=kt.material,Oe=kt.group;if(jt.side===ci&&Bt.layers.test(B.layers)){const Mn=jt.side;jt.side=Ge,jt.needsUpdate=!0,Fn(Bt,tt,B,Ht,jt,Oe),jt.side=Mn,jt.needsUpdate=!0,Dt=!0}}Dt===!0&&(k.updateMultisampleRenderTarget(ut),k.updateRenderTargetMipmap(ut)),p.setRenderTarget(it),p.toneMapping=Lt}function un(T,G,tt){const B=G.isScene===!0?G.overrideMaterial:null;for(let it=0,Lt=T.length;it<Lt;it++){const Dt=T[it],Ot=Dt.object,Nt=Dt.geometry,kt=B===null?Dt.material:B,Bt=Dt.group;Ot.layers.test(tt.layers)&&Fn(Ot,G,tt,Nt,kt,Bt)}}function Fn(T,G,tt,B,it,Lt){T.onBeforeRender(p,G,tt,B,it,Lt),T.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),it.onBeforeRender(p,G,tt,B,T,Lt),it.transparent===!0&&it.side===ci&&it.forceSinglePass===!1?(it.side=Ge,it.needsUpdate=!0,p.renderBufferDirect(tt,G,B,it,T,Lt),it.side=Oi,it.needsUpdate=!0,p.renderBufferDirect(tt,G,B,it,T,Lt),it.side=ci):p.renderBufferDirect(tt,G,B,it,T,Lt),T.onAfterRender(p,G,tt,B,it,Lt)}function fa(T,G,tt){G.isScene!==!0&&(G=K);const B=L.get(T),it=_.state.lights,Lt=_.state.shadowsArray,Dt=it.state.version,Ot=ft.getParameters(T,it.state,Lt,G,tt),Nt=ft.getProgramCacheKey(Ot);let kt=B.programs;B.environment=T.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(T.isMeshStandardMaterial?Q:et).get(T.envMap||B.environment),kt===void 0&&(T.addEventListener("dispose",oe),kt=new Map,B.programs=kt);let Bt=kt.get(Nt);if(Bt!==void 0){if(B.currentProgram===Bt&&B.lightsStateVersion===Dt)return au(T,Ot),Bt}else Ot.uniforms=ft.getUniforms(T),T.onBuild(tt,Ot,p),T.onBeforeCompile(Ot,p),Bt=ft.acquireProgram(Ot,Nt),kt.set(Nt,Bt),B.uniforms=Ot.uniforms;const Ht=B.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ht.clippingPlanes=N.uniform),au(T,Ot),B.needsLights=Zp(T),B.lightsStateVersion=Dt,B.needsLights&&(Ht.ambientLightColor.value=it.state.ambient,Ht.lightProbe.value=it.state.probe,Ht.directionalLights.value=it.state.directional,Ht.directionalLightShadows.value=it.state.directionalShadow,Ht.spotLights.value=it.state.spot,Ht.spotLightShadows.value=it.state.spotShadow,Ht.rectAreaLights.value=it.state.rectArea,Ht.ltc_1.value=it.state.rectAreaLTC1,Ht.ltc_2.value=it.state.rectAreaLTC2,Ht.pointLights.value=it.state.point,Ht.pointLightShadows.value=it.state.pointShadow,Ht.hemisphereLights.value=it.state.hemi,Ht.directionalShadowMap.value=it.state.directionalShadowMap,Ht.directionalShadowMatrix.value=it.state.directionalShadowMatrix,Ht.spotShadowMap.value=it.state.spotShadowMap,Ht.spotLightMatrix.value=it.state.spotLightMatrix,Ht.spotLightMap.value=it.state.spotLightMap,Ht.pointShadowMap.value=it.state.pointShadowMap,Ht.pointShadowMatrix.value=it.state.pointShadowMatrix);const jt=Bt.getUniforms(),Oe=ja.seqWithValue(jt.seq,Ht);return B.currentProgram=Bt,B.uniformsList=Oe,Bt}function au(T,G){const tt=L.get(T);tt.outputEncoding=G.outputEncoding,tt.instancing=G.instancing,tt.skinning=G.skinning,tt.morphTargets=G.morphTargets,tt.morphNormals=G.morphNormals,tt.morphColors=G.morphColors,tt.morphTargetsCount=G.morphTargetsCount,tt.numClippingPlanes=G.numClippingPlanes,tt.numIntersection=G.numClipIntersection,tt.vertexAlphas=G.vertexAlphas,tt.vertexTangents=G.vertexTangents,tt.toneMapping=G.toneMapping}function $p(T,G,tt,B,it){G.isScene!==!0&&(G=K),k.resetTextureUnits();const Lt=G.fog,Dt=B.isMeshStandardMaterial?G.environment:null,Ot=S===null?p.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:pr,Nt=(B.isMeshStandardMaterial?Q:et).get(B.envMap||Dt),kt=B.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Bt=!!B.normalMap&&!!tt.attributes.tangent,Ht=!!tt.morphAttributes.position,jt=!!tt.morphAttributes.normal,Oe=!!tt.morphAttributes.color,Mn=B.toneMapped?p.toneMapping:ui,ki=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ue=ki!==void 0?ki.length:0,Wt=L.get(B),Io=_.state.lights;if(ot===!0&&(Et===!0||T!==P)){const Ke=T===P&&B.id===C;N.setState(B,T,Ke)}let ve=!1;B.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==Io.state.version||Wt.outputEncoding!==Ot||it.isInstancedMesh&&Wt.instancing===!1||!it.isInstancedMesh&&Wt.instancing===!0||it.isSkinnedMesh&&Wt.skinning===!1||!it.isSkinnedMesh&&Wt.skinning===!0||Wt.envMap!==Nt||B.fog===!0&&Wt.fog!==Lt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==N.numPlanes||Wt.numIntersection!==N.numIntersection)||Wt.vertexAlphas!==kt||Wt.vertexTangents!==Bt||Wt.morphTargets!==Ht||Wt.morphNormals!==jt||Wt.morphColors!==Oe||Wt.toneMapping!==Mn||ht.isWebGL2===!0&&Wt.morphTargetsCount!==ue)&&(ve=!0):(ve=!0,Wt.__version=B.version);let Bi=Wt.currentProgram;ve===!0&&(Bi=fa(B,G,it));let ou=!1,Ms=!1,Oo=!1;const Ue=Bi.getUniforms(),Hi=Wt.uniforms;if(St.useProgram(Bi.program)&&(ou=!0,Ms=!0,Oo=!0),B.id!==C&&(C=B.id,Ms=!0),ou||P!==T){if(Ue.setValue(F,"projectionMatrix",T.projectionMatrix),ht.logarithmicDepthBuffer&&Ue.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),P!==T&&(P=T,Ms=!0,Oo=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Ke=Ue.map.cameraPosition;Ke!==void 0&&Ke.setValue(F,O.setFromMatrixPosition(T.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Ue.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||it.isSkinnedMesh)&&Ue.setValue(F,"viewMatrix",T.matrixWorldInverse)}if(it.isSkinnedMesh){Ue.setOptional(F,it,"bindMatrix"),Ue.setOptional(F,it,"bindMatrixInverse");const Ke=it.skeleton;Ke&&(ht.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ue.setValue(F,"boneTexture",Ke.boneTexture,k),Ue.setValue(F,"boneTextureSize",Ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Uo=tt.morphAttributes;if((Uo.position!==void 0||Uo.normal!==void 0||Uo.color!==void 0&&ht.isWebGL2===!0)&&dt.update(it,tt,Bi),(Ms||Wt.receiveShadow!==it.receiveShadow)&&(Wt.receiveShadow=it.receiveShadow,Ue.setValue(F,"receiveShadow",it.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Hi.envMap.value=Nt,Hi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Ms&&(Ue.setValue(F,"toneMappingExposure",p.toneMappingExposure),Wt.needsLights&&Kp(Hi,Oo),Lt&&B.fog===!0&&at.refreshFogUniforms(Hi,Lt),at.refreshMaterialUniforms(Hi,B,U,Y,ut),ja.upload(F,Wt.uniformsList,Hi,k)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ja.upload(F,Wt.uniformsList,Hi,k),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Ue.setValue(F,"center",it.center),Ue.setValue(F,"modelViewMatrix",it.modelViewMatrix),Ue.setValue(F,"normalMatrix",it.normalMatrix),Ue.setValue(F,"modelMatrix",it.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ke=B.uniformsGroups;for(let No=0,Jp=Ke.length;No<Jp;No++)if(ht.isWebGL2){const lu=Ke[No];At.update(lu,Bi),At.bind(lu,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}function Kp(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Zp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,G,tt){L.get(T.texture).__webglTexture=G,L.get(T.depthTexture).__webglTexture=tt;const B=L.get(T);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=tt===void 0,B.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,G){const tt=L.get(T);tt.__webglFramebuffer=G,tt.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(T,G=0,tt=0){S=T,y=G,v=tt;let B=!0,it=null,Lt=!1,Dt=!1;if(T){const Nt=L.get(T);Nt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(36160,null),B=!1):Nt.__webglFramebuffer===void 0?k.setupRenderTarget(T):Nt.__hasExternalTextures&&k.rebindTextures(T,L.get(T.texture).__webglTexture,L.get(T.depthTexture).__webglTexture);const kt=T.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Dt=!0);const Bt=L.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(it=Bt[G],Lt=!0):ht.isWebGL2&&T.samples>0&&k.useMultisampledRTT(T)===!1?it=L.get(T).__webglMultisampledFramebuffer:it=Bt,R.copy(T.viewport),x.copy(T.scissor),E=T.scissorTest}else R.copy($).multiplyScalar(U).floor(),x.copy(H).multiplyScalar(U).floor(),E=V;if(St.bindFramebuffer(36160,it)&&ht.drawBuffers&&B&&St.drawBuffers(T,it),St.viewport(R),St.scissor(x),St.setScissorTest(E),Lt){const Nt=L.get(T.texture);F.framebufferTexture2D(36160,36064,34069+G,Nt.__webglTexture,tt)}else if(Dt){const Nt=L.get(T.texture),kt=G||0;F.framebufferTextureLayer(36160,36064,Nt.__webglTexture,tt||0,kt)}C=-1},this.readRenderTargetPixels=function(T,G,tt,B,it,Lt,Dt){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=L.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Ot=Ot[Dt]),Ot){St.bindFramebuffer(36160,Ot);try{const Nt=T.texture,kt=Nt.format,Bt=Nt.type;if(kt!==Pn&&Z.convert(kt)!==F.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Bt===js&&(vt.has("EXT_color_buffer_half_float")||ht.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Bt!==dr&&Z.convert(Bt)!==F.getParameter(35738)&&!(Bt===rr&&(ht.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-B&&tt>=0&&tt<=T.height-it&&F.readPixels(G,tt,B,it,Z.convert(kt),Z.convert(Bt),Lt)}finally{const Nt=S!==null?L.get(S).__webglFramebuffer:null;St.bindFramebuffer(36160,Nt)}}},this.copyFramebufferToTexture=function(T,G,tt=0){const B=Math.pow(2,-tt),it=Math.floor(G.image.width*B),Lt=Math.floor(G.image.height*B);k.setTexture2D(G,0),F.copyTexSubImage2D(3553,tt,0,0,T.x,T.y,it,Lt),St.unbindTexture()},this.copyTextureToTexture=function(T,G,tt,B=0){const it=G.image.width,Lt=G.image.height,Dt=Z.convert(tt.format),Ot=Z.convert(tt.type);k.setTexture2D(tt,0),F.pixelStorei(37440,tt.flipY),F.pixelStorei(37441,tt.premultiplyAlpha),F.pixelStorei(3317,tt.unpackAlignment),G.isDataTexture?F.texSubImage2D(3553,B,T.x,T.y,it,Lt,Dt,Ot,G.image.data):G.isCompressedTexture?F.compressedTexSubImage2D(3553,B,T.x,T.y,G.mipmaps[0].width,G.mipmaps[0].height,Dt,G.mipmaps[0].data):F.texSubImage2D(3553,B,T.x,T.y,Dt,Ot,G.image),B===0&&tt.generateMipmaps&&F.generateMipmap(3553),St.unbindTexture()},this.copyTextureToTexture3D=function(T,G,tt,B,it=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Lt=T.max.x-T.min.x+1,Dt=T.max.y-T.min.y+1,Ot=T.max.z-T.min.z+1,Nt=Z.convert(B.format),kt=Z.convert(B.type);let Bt;if(B.isData3DTexture)k.setTexture3D(B,0),Bt=32879;else if(B.isDataArrayTexture)k.setTexture2DArray(B,0),Bt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(37440,B.flipY),F.pixelStorei(37441,B.premultiplyAlpha),F.pixelStorei(3317,B.unpackAlignment);const Ht=F.getParameter(3314),jt=F.getParameter(32878),Oe=F.getParameter(3316),Mn=F.getParameter(3315),ki=F.getParameter(32877),ue=tt.isCompressedTexture?tt.mipmaps[0]:tt.image;F.pixelStorei(3314,ue.width),F.pixelStorei(32878,ue.height),F.pixelStorei(3316,T.min.x),F.pixelStorei(3315,T.min.y),F.pixelStorei(32877,T.min.z),tt.isDataTexture||tt.isData3DTexture?F.texSubImage3D(Bt,it,G.x,G.y,G.z,Lt,Dt,Ot,Nt,kt,ue.data):tt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Bt,it,G.x,G.y,G.z,Lt,Dt,Ot,Nt,ue.data)):F.texSubImage3D(Bt,it,G.x,G.y,G.z,Lt,Dt,Ot,Nt,kt,ue),F.pixelStorei(3314,Ht),F.pixelStorei(32878,jt),F.pixelStorei(3316,Oe),F.pixelStorei(3315,Mn),F.pixelStorei(32877,ki),it===0&&B.generateMipmaps&&F.generateMipmap(Bt),St.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?k.setTextureCube(T,0):T.isData3DTexture?k.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?k.setTexture2DArray(T,0):k.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){y=0,v=0,S=null,St.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class AS extends kc{}AS.prototype.isWebGL1Renderer=!0;class Od extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class CS extends oa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}class Bc extends Fi{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new X,f=new X,h=new X;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,m=d/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(g),f.y=(t+e*Math.cos(m))*Math.sin(g),f.z=e*Math.sin(m),o.push(f.x,f.y,f.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,b=(i+1)*d+_;a.push(g,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new $n(o,3)),this.setAttribute("normal",new $n(l,3)),this.setAttribute("uv",new $n(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}const Zf={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class PS{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const LS=new PS;class Ud{constructor(t){this.manager=t!==void 0?t:LS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class RS extends Ud{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Zf.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Ks("img");function l(){u(),Zf.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class DS extends Ud{constructor(t){super(t)}load(t,e,n,i){const s=new We,a=new RS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nc);const Jf="data:image/webp;base64,UklGRuYAAABXRUJQVlA4TNkAAAAvH8AHELegqG0jyXPxWv6I9lcaCtq2YdLx5zCaf5t/A5Fk3CfwETTw+pfSQADP+1prQEq+nxiYz4sDiFSeYAoQwGBw3rXsDweHta1G0cddsygC6b9XnQhnGojo/wSgk5Z8qYheeSY4WlLpzfaFdvl8UJexOLJ1jCyuPPwwFme2F2JxZ3rsEngAMAk1oMQkNIm9aQqSqUTlGnVq1C1/r1F3jTpLVJ6itqZBhBSTAYsxACkiAUBjP6YHjL3Y8D6yD4/4bezBht6WviXCRytdmgyOtJaqIlrzQugEAA==",IS=yn({name:"HeroAnimation",mounted(){const r=this.$refs.canvas,t=new Od,e=new nn(85,this.$el.parentNode.offsetWidth/this.$el.parentNode.offsetHeight,.1,1e3);e.position.z=5.6;const n=new DS;new Zs(10,10,100,100),new CS({size:.04,map:n.load(Jf,()=>{s.opacity=1}),color:16777215,transparent:!0});const i=new Zs(10,10,80,80),s=new Eo({color:16777215,wireframe:!0,map:n.load(Jf,()=>{s.opacity=1}),transparent:!0}),a=new Yn(i,s);t.add(a);function o(){requestAnimationFrame(o);const c=Date.now()*.001,u=1.6,f=.9,h=a.geometry.attributes.position;if(h instanceof On){for(let d=0;d<h.count;d++){const _=h.getX(d),g=h.getY(d),m=f*Math.sin(u*_+c)*Math.sin(u*g+c)-1;h.setZ(d,m)}h.needsUpdate=!0}l.render(t,e)}const l=new kc({canvas:r,alpha:!0,antialias:!0});l.setClearColor(0,0),l.setSize(this.$el.parentNode.offsetWidth,this.$el.parentNode.offsetHeight),l.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",()=>{const c=this.$el.parentNode.offsetWidth,u=this.$el.parentNode.offsetHeight;e.aspect=c/u,e.updateProjectionMatrix(),l.setSize(c,u)}),o()}}),Jn=(r,t)=>{const e=r.__vccOpts||r;for(const[n,i]of t)e[n]=i;return e},OS={ref:"canvas"};function US(r,t,e,n,i,s){return gi(),_i("canvas",OS,null,512)}const NS=Jn(IS,[["render",US]]);var FS=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Kl={},zS={get exports(){return Kl},set exports(r){Kl=r}};(function(r,t){(function(e,n){r.exports=n()})(FS,function(){var e=document,n=e.createTextNode.bind(e);function i(D,O,K){D.style.setProperty(O,K)}function s(D,O){return D.appendChild(O)}function a(D,O,K,st){var F=e.createElement("span");return O&&(F.className=O),K&&(!st&&F.setAttribute("data-"+O,K),F.textContent=K),D&&s(D,F)||F}function o(D,O){return D.getAttribute("data-"+O)}function l(D,O){return!D||D.length==0?[]:D.nodeName?[D]:[].slice.call(D[0].nodeName?D:(O||e).querySelectorAll(D))}function c(D){for(var O=[];D--;)O[D]=[];return O}function u(D,O){D&&D.some(O)}function f(D){return function(O){return D[O]}}function h(D,O,K){var st="--"+O,F=st+"-index";u(K,function(yt,vt){Array.isArray(yt)?u(yt,function(ht){i(ht,F,vt)}):i(yt,F,vt)}),i(D,st+"-total",K.length)}var d={};function _(D,O,K){var st=K.indexOf(D);if(st==-1)K.unshift(D),u(d[D].depends,function(yt){_(yt,D,K)});else{var F=K.indexOf(O);K.splice(st,1),K.splice(F,0,D)}return K}function g(D,O,K,st){return{by:D,depends:O,key:K,split:st}}function m(D){return _(D,0,[]).map(f(d))}function p(D){d[D.by]=D}function b(D,O,K,st,F){D.normalize();var yt=[],vt=document.createDocumentFragment();st&&yt.push(D.previousSibling);var ht=[];return l(D.childNodes).some(function(St){if(St.tagName&&!St.hasChildNodes()){ht.push(St);return}if(St.childNodes&&St.childNodes.length){ht.push(St),yt.push.apply(yt,b(St,O,K,st,F));return}var A=St.wholeText||"",L=A.trim();L.length&&(A[0]===" "&&ht.push(n(" ")),u(L.split(K),function(k,et){et&&F&&ht.push(a(vt,"whitespace"," ",F));var Q=a(vt,O,k);yt.push(Q),ht.push(Q)}),A[A.length-1]===" "&&ht.push(n(" ")))}),u(ht,function(St){s(vt,St)}),D.innerHTML="",s(D,vt),yt}var y=0;function v(D,O){for(var K in O)D[K]=O[K];return D}var S="words",C=g(S,y,"word",function(D){return b(D,"word",/\s+/,0,1)}),P="chars",R=g(P,[S],"char",function(D,O,K){var st=[];return u(K[S],function(F,yt){st.push.apply(st,b(F,"char","",O.whitespace&&yt))}),st});function x(D){D=D||{};var O=D.key;return l(D.target||"[data-splitting]").map(function(K){var st=K["🍌"];if(!D.force&&st)return st;st=K["🍌"]={el:K};var F=m(D.by||o(K,"splitting")||P),yt=v({},D);return u(F,function(vt){if(vt.split){var ht=vt.by,St=(O?"-"+O:"")+vt.key,A=vt.split(K,yt,st);St&&h(K,St,A),st[ht]=A,K.classList.add(ht)}}),K.classList.add("splitting"),st})}function E(D){D=D||{};var O=D.target=a();return O.innerHTML=D.content,x(D),O.outerHTML}x.html=E,x.add=p;function q(D,O,K){var st=l(O.matching||D.children,D),F={};return u(st,function(yt){var vt=Math.round(yt[K]);(F[vt]||(F[vt]=[])).push(yt)}),Object.keys(F).map(Number).sort(Y).map(f(F))}function Y(D,O){return D-O}var U=g("lines",[S],"line",function(D,O,K){return q(D,{matching:K[S]},"offsetTop")}),z=g("items",y,"item",function(D,O){return l(O.matching||D.children,D)}),W=g("rows",y,"row",function(D,O){return q(D,O,"offsetTop")}),$=g("cols",y,"col",function(D,O){return q(D,O,"offsetLeft")}),H=g("grid",["rows","cols"]),V="layout",lt=g(V,y,y,function(D,O){var K=O.rows=+(O.rows||o(D,"rows")||1),st=O.columns=+(O.columns||o(D,"columns")||1);if(O.image=O.image||o(D,"image")||D.currentSrc||D.src,O.image){var F=l("img",D)[0];O.image=F&&(F.currentSrc||F.src)}O.image&&i(D,"background-image","url("+O.image+")");for(var yt=K*st,vt=[],ht=a(y,"cell-grid");yt--;){var St=a(ht,"cell");a(St,"cell-inner"),vt.push(St)}return s(D,ht),vt}),ot=g("cellRows",[V],"row",function(D,O,K){var st=O.rows,F=c(st);return u(K[V],function(yt,vt,ht){F[Math.floor(vt/(ht.length/st))].push(yt)}),F}),Et=g("cellColumns",[V],"col",function(D,O,K){var st=O.columns,F=c(st);return u(K[V],function(yt,vt){F[vt%st].push(yt)}),F}),ut=g("cells",["cellRows","cellColumns"],"cell",function(D,O,K){return K[V]});return p(C),p(R),p(U),p(z),p(W),p($),p(H),p(lt),p(ot),p(Et),p(ut),x})})(zS);const kS=Kl,Hc=r=>(vr("data-v-49d1b83f"),r=r(),xr(),r),BS={class:"hero"},HS={class:"container"},VS={class:"text"},GS=Hc(()=>Rt("span",{class:"yellow"},"responsivas",-1)),WS=Hc(()=>Rt("span",{class:"yellow"},"atractivas",-1)),qS=Hc(()=>Rt("span",{class:"yellow"},"fáciles de usar",-1)),XS=Ic('<div class="proyectos" data-v-49d1b83f><p class="cursor-scale" data-v-49d1b83f>&lt;Proyectos /&gt;</p><div class="arrow cursor-scale" data-v-49d1b83f><svg width="16" height="51" viewBox="0 0 16 51" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-49d1b83f><path d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 50.7071C7.68342 51.0976 8.31658 51.0976 8.70711 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34315 42.9289C1.95262 42.5384 1.31946 42.5384 0.928932 42.9289C0.538408 43.3195 0.538408 43.9526 0.928932 44.3431L7.29289 50.7071ZM7 1L7 50H9L9 1L7 1Z" fill="#8155FF" data-v-49d1b83f></path></svg></div></div><div class="scroll cursor-scale" data-v-49d1b83f><p data-v-49d1b83f>scroll</p><div class="line" data-v-49d1b83f></div></div>',2),YS={class:"background"},jS=yn({computed:{prcLoad(){return console.log(this.loaded),this.loaded}}}),$S=yn({...jS,__name:"Hero",setup(r){return yo(()=>{kS()}),(t,e)=>(gi(),_i("div",BS,[Rt("div",HS,[Rt("div",VS,[Rt("p",{class:Ln(["function cursor-scale",t.prcLoad.toString()=="100%"?"animateText":""]),"data-splitting":""},"Presentacion(){",2),Rt("h1",{class:Ln(["cursor-scale",t.prcLoad.toString()=="100%"?"animateText":""]),"data-splitting":""},[nr("Desarrollo sitios y aplicaciones web adaptables y "),GS,nr(". Me enfoco en crear soluciones "),WS,nr(" y "),qS,nr(".")],2),Rt("div",{class:Ln(["btn cursor-scale",t.prcLoad.toString()=="100%"?"animateButton":""])},"<Sobre mi />",2),Rt("p",{class:Ln(["function cursor-scale",t.prcLoad.toString()=="100%"?"animateText":""]),"data-splitting":""},"}",2)]),XS]),Rt("div",YS,[we(NS)])]))}});const KS=Jn($S,[["__scopeId","data-v-49d1b83f"]]),Vc=r=>(vr("data-v-b1f19b1e"),r=r(),xr(),r),ZS=Vc(()=>Rt("div",{class:"line"},null,-1)),JS=Vc(()=>Rt("div",{class:"line"},null,-1)),QS=Vc(()=>Rt("div",{class:"line"},null,-1)),tb=[ZS,JS,QS],eb=yn({__name:"Hambutton",props:{isActive:null},setup(r){return(t,e)=>(gi(),_i("div",{class:Ln(["btn",{open:r.isActive}])},tb,2))}});const nb=Jn(eb,[["__scopeId","data-v-b1f19b1e"]]);function Ao(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function Qf(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Co(r,t,e){return t&&Qf(r.prototype,t),e&&Qf(r,e),r}function ib(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function th(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),e.push.apply(e,n)}return e}function xl(r){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?th(Object(e),!0).forEach(function(n){ib(r,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):th(Object(e)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(e,n))})}return r}function Nd(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&Zl(r,t)}function Un(r){return Un=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},Un(r)}function Zl(r,t){return Zl=Object.setPrototypeOf||function(n,i){return n.__proto__=i,n},Zl(r,t)}function rb(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function Fd(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function sb(r,t){return t&&(typeof t=="object"||typeof t=="function")?t:Fd(r)}function zd(r){var t=rb();return function(){var n=Un(r),i;if(t){var s=Un(this).constructor;i=Reflect.construct(n,arguments,s)}else i=n.apply(this,arguments);return sb(this,i)}}function ab(r,t){for(;!Object.prototype.hasOwnProperty.call(r,t)&&(r=Un(r),r!==null););return r}function fi(r,t,e){return typeof Reflect<"u"&&Reflect.get?fi=Reflect.get:fi=function(i,s,a){var o=ab(i,s);if(o){var l=Object.getOwnPropertyDescriptor(o,s);return l.get?l.get.call(a):l.value}},fi(r,t,e||r)}function Hr(r,t){return cb(r)||fb(r,t)||kd(r,t)||db()}function ob(r){return lb(r)||ub(r)||kd(r)||hb()}function lb(r){if(Array.isArray(r))return Jl(r)}function cb(r){if(Array.isArray(r))return r}function ub(r){if(typeof Symbol<"u"&&Symbol.iterator in Object(r))return Array.from(r)}function fb(r,t){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(r)))){var e=[],n=!0,i=!1,s=void 0;try{for(var a=r[Symbol.iterator](),o;!(n=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));n=!0);}catch(l){i=!0,s=l}finally{try{!n&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function kd(r,t){if(r){if(typeof r=="string")return Jl(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return Jl(r,t)}}function Jl(r,t){(t==null||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function hb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function db(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Zr={el:document,name:"scroll",offset:[0,0],repeat:!1,smooth:!1,initPosition:{x:0,y:0},direction:"vertical",gestureDirection:"vertical",reloadOnContextChange:!1,lerp:.1,class:"is-inview",scrollbarContainer:!1,scrollbarClass:"c-scrollbar",scrollingClass:"has-scroll-scrolling",draggingClass:"has-scroll-dragging",smoothClass:"has-scroll-smooth",initClass:"has-scroll-init",getSpeed:!1,getDirection:!1,scrollFromAnywhere:!1,multiplier:1,firefoxMultiplier:50,touchMultiplier:2,resetNativeScroll:!0,tablet:{smooth:!1,direction:"vertical",gestureDirection:"vertical",breakpoint:1024},smartphone:{smooth:!1,direction:"vertical",gestureDirection:"vertical"}},Bd=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ao(this,r),Object.assign(this,Zr,t),this.smartphone=Zr.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=Zr.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),this.namespace="locomotive",this.html=document.documentElement,this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.els={},this.currentElements={},this.listeners={},this.hasScrollTicking=!1,this.hasCallEventSet=!1,this.checkScroll=this.checkScroll.bind(this),this.checkResize=this.checkResize.bind(this),this.checkEvent=this.checkEvent.bind(this),this.instance={scroll:{x:0,y:0},limit:{x:this.html.offsetWidth,y:this.html.offsetHeight},currentElements:this.currentElements},this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",this.isMobile&&(this.direction=this[this.context].direction),this.direction==="horizontal"?this.directionAxis="x":this.directionAxis="y",this.getDirection&&(this.instance.direction=null),this.getDirection&&(this.instance.speed=0),this.html.classList.add(this.initClass),window.addEventListener("resize",this.checkResize,!1)}return Co(r,[{key:"init",value:function(){this.initEvents()}},{key:"checkScroll",value:function(){this.dispatchScroll()}},{key:"checkResize",value:function(){var e=this;this.resizeTick||(this.resizeTick=!0,requestAnimationFrame(function(){e.resize(),e.resizeTick=!1}))}},{key:"resize",value:function(){}},{key:"checkContext",value:function(){if(this.reloadOnContextChange){this.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||this.windowWidth<this.tablet.breakpoint,this.isTablet=this.isMobile&&this.windowWidth>=this.tablet.breakpoint;var e=this.context;if(this.isMobile?this.isTablet?this.context="tablet":this.context="smartphone":this.context="desktop",e!=this.context){var n=e=="desktop"?this.smooth:this[e].smooth,i=this.context=="desktop"?this.smooth:this[this.context].smooth;n!=i&&window.location.reload()}}}},{key:"initEvents",value:function(){var e=this;this.scrollToEls=this.el.querySelectorAll("[data-".concat(this.name,"-to]")),this.setScrollTo=this.setScrollTo.bind(this),this.scrollToEls.forEach(function(n){n.addEventListener("click",e.setScrollTo,!1)})}},{key:"setScrollTo",value:function(e){e.preventDefault(),this.scrollTo(e.currentTarget.getAttribute("data-".concat(this.name,"-href"))||e.currentTarget.getAttribute("href"),{offset:e.currentTarget.getAttribute("data-".concat(this.name,"-offset"))})}},{key:"addElements",value:function(){}},{key:"detectElements",value:function(e){var n=this,i=this.instance.scroll.y,s=i+this.windowHeight,a=this.instance.scroll.x,o=a+this.windowWidth;Object.entries(this.els).forEach(function(l){var c=Hr(l,2),u=c[0],f=c[1];if(f&&(!f.inView||e)&&(n.direction==="horizontal"?o>=f.left&&a<f.right&&n.setInView(f,u):s>=f.top&&i<f.bottom&&n.setInView(f,u)),f&&f.inView)if(n.direction==="horizontal"){var h=f.right-f.left;f.progress=(n.instance.scroll.x-(f.left-n.windowWidth))/(h+n.windowWidth),(o<f.left||a>f.right)&&n.setOutOfView(f,u)}else{var d=f.bottom-f.top;f.progress=(n.instance.scroll.y-(f.top-n.windowHeight))/(d+n.windowHeight),(s<f.top||i>f.bottom)&&n.setOutOfView(f,u)}}),this.hasScrollTicking=!1}},{key:"setInView",value:function(e,n){this.els[n].inView=!0,e.el.classList.add(e.class),this.currentElements[n]=e,e.call&&this.hasCallEventSet&&(this.dispatchCall(e,"enter"),e.repeat||(this.els[n].call=!1))}},{key:"setOutOfView",value:function(e,n){var i=this;this.els[n].inView=!1,Object.keys(this.currentElements).forEach(function(s){s===n&&delete i.currentElements[s]}),e.call&&this.hasCallEventSet&&this.dispatchCall(e,"exit"),e.repeat&&e.el.classList.remove(e.class)}},{key:"dispatchCall",value:function(e,n){this.callWay=n,this.callValue=e.call.split(",").map(function(s){return s.trim()}),this.callObj=e,this.callValue.length==1&&(this.callValue=this.callValue[0]);var i=new Event(this.namespace+"call");this.el.dispatchEvent(i)}},{key:"dispatchScroll",value:function(){var e=new Event(this.namespace+"scroll");this.el.dispatchEvent(e)}},{key:"setEvents",value:function(e,n){this.listeners[e]||(this.listeners[e]=[]);var i=this.listeners[e];i.push(n),i.length===1&&this.el.addEventListener(this.namespace+e,this.checkEvent,!1),e==="call"&&(this.hasCallEventSet=!0,this.detectElements(!0))}},{key:"unsetEvents",value:function(e,n){if(this.listeners[e]){var i=this.listeners[e],s=i.indexOf(n);s<0||(i.splice(s,1),i.index===0&&this.el.removeEventListener(this.namespace+e,this.checkEvent,!1))}}},{key:"checkEvent",value:function(e){var n=this,i=e.type.replace(this.namespace,""),s=this.listeners[i];!s||s.length===0||s.forEach(function(a){switch(i){case"scroll":return a(n.instance);case"call":return a(n.callValue,n.callWay,n.callObj);default:return a()}})}},{key:"startScroll",value:function(){}},{key:"stopScroll",value:function(){}},{key:"setScroll",value:function(e,n){this.instance.scroll={x:0,y:0}}},{key:"destroy",value:function(){var e=this;window.removeEventListener("resize",this.checkResize,!1),Object.keys(this.listeners).forEach(function(n){e.el.removeEventListener(e.namespace+n,e.checkEvent,!1)}),this.listeners={},this.scrollToEls.forEach(function(n){n.removeEventListener("click",e.setScrollTo,!1)}),this.html.classList.remove(this.initClass)}}]),r}(),pb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Hd(r,t){return t={exports:{}},r(t,t.exports),t.exports}var Vd=Hd(function(r,t){(function(){function e(){var n=window,i=document;if("scrollBehavior"in i.documentElement.style&&n.__forceSmoothScrollPolyfill__!==!0)return;var s=n.HTMLElement||n.Element,a=468,o={scroll:n.scroll||n.scrollTo,scrollBy:n.scrollBy,elementScroll:s.prototype.scroll||f,scrollIntoView:s.prototype.scrollIntoView},l=n.performance&&n.performance.now?n.performance.now.bind(n.performance):Date.now;function c(v){var S=["MSIE ","Trident/","Edge/"];return new RegExp(S.join("|")).test(v)}var u=c(n.navigator.userAgent)?1:0;function f(v,S){this.scrollLeft=v,this.scrollTop=S}function h(v){return .5*(1-Math.cos(Math.PI*v))}function d(v){if(v===null||typeof v!="object"||v.behavior===void 0||v.behavior==="auto"||v.behavior==="instant")return!0;if(typeof v=="object"&&v.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+v.behavior+" is not a valid value for enumeration ScrollBehavior.")}function _(v,S){if(S==="Y")return v.clientHeight+u<v.scrollHeight;if(S==="X")return v.clientWidth+u<v.scrollWidth}function g(v,S){var C=n.getComputedStyle(v,null)["overflow"+S];return C==="auto"||C==="scroll"}function m(v){var S=_(v,"Y")&&g(v,"Y"),C=_(v,"X")&&g(v,"X");return S||C}function p(v){for(;v!==i.body&&m(v)===!1;)v=v.parentNode||v.host;return v}function b(v){var S=l(),C,P,R,x=(S-v.startTime)/a;x=x>1?1:x,C=h(x),P=v.startX+(v.x-v.startX)*C,R=v.startY+(v.y-v.startY)*C,v.method.call(v.scrollable,P,R),(P!==v.x||R!==v.y)&&n.requestAnimationFrame(b.bind(n,v))}function y(v,S,C){var P,R,x,E,q=l();v===i.body?(P=n,R=n.scrollX||n.pageXOffset,x=n.scrollY||n.pageYOffset,E=o.scroll):(P=v,R=v.scrollLeft,x=v.scrollTop,E=f),b({scrollable:P,method:E,startTime:q,startX:R,startY:x,x:S,y:C})}n.scroll=n.scrollTo=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){o.scroll.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:n.scrollY||n.pageYOffset);return}y.call(n,i.body,arguments[0].left!==void 0?~~arguments[0].left:n.scrollX||n.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:n.scrollY||n.pageYOffset)}},n.scrollBy=function(){if(arguments[0]!==void 0){if(d(arguments[0])){o.scrollBy.call(n,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}y.call(n,i.body,~~arguments[0].left+(n.scrollX||n.pageXOffset),~~arguments[0].top+(n.scrollY||n.pageYOffset))}},s.prototype.scroll=s.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var v=arguments[0].left,S=arguments[0].top;y.call(this,this,typeof v>"u"?this.scrollLeft:~~v,typeof S>"u"?this.scrollTop:~~S)}},s.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(d(arguments[0])===!0){o.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},s.prototype.scrollIntoView=function(){if(d(arguments[0])===!0){o.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var v=p(this),S=v.getBoundingClientRect(),C=this.getBoundingClientRect();v!==i.body?(y.call(this,v,v.scrollLeft+C.left-S.left,v.scrollTop+C.top-S.top),n.getComputedStyle(v).position!=="fixed"&&n.scrollBy({left:S.left,top:S.top,behavior:"smooth"})):n.scrollBy({left:C.left,top:C.top,behavior:"smooth"})}}r.exports={polyfill:e}})()});Vd.polyfill;var mb=function(r){Nd(e,r);var t=zd(e);function e(){var n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ao(this,e),n=t.call(this,i),n.resetNativeScroll&&(history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0)),window.addEventListener("scroll",n.checkScroll,!1),window.smoothscrollPolyfill===void 0&&(window.smoothscrollPolyfill=Vd,window.smoothscrollPolyfill.polyfill()),n}return Co(e,[{key:"init",value:function(){this.instance.scroll.y=window.pageYOffset,this.addElements(),this.detectElements(),fi(Un(e.prototype),"init",this).call(this)}},{key:"checkScroll",value:function(){var i=this;fi(Un(e.prototype),"checkScroll",this).call(this),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.instance.scroll.y=window.pageYOffset,Object.entries(this.els).length&&(this.hasScrollTicking||(requestAnimationFrame(function(){i.detectElements()}),this.hasScrollTicking=!0))}},{key:"addDirection",value:function(){window.pageYOffset>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):window.pageYOffset<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up")}},{key:"addSpeed",value:function(){window.pageYOffset!=this.instance.scroll.y?this.instance.speed=(window.pageYOffset-this.instance.scroll.y)/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"resize",value:function(){Object.entries(this.els).length&&(this.windowHeight=window.innerHeight,this.updateElements())}},{key:"addElements",value:function(){var i=this;this.els={};var s=this.el.querySelectorAll("[data-"+this.name+"]");s.forEach(function(a,o){a.getBoundingClientRect();var l=a.dataset[i.name+"Class"]||i.class,c=typeof a.dataset[i.name+"Id"]=="string"?a.dataset[i.name+"Id"]:o,u,f,h=typeof a.dataset[i.name+"Offset"]=="string"?a.dataset[i.name+"Offset"].split(","):i.offset,d=a.dataset[i.name+"Repeat"],_=a.dataset[i.name+"Call"],g=a.dataset[i.name+"Target"],m;g!==void 0?m=document.querySelector("".concat(g)):m=a;var p=m.getBoundingClientRect();u=p.top+i.instance.scroll.y,f=p.left+i.instance.scroll.x;var b=u+m.offsetHeight,y=f+m.offsetWidth;d=="false"?d=!1:d!=null?d=!0:d=i.repeat;var v=i.getRelativeOffset(h);u=u+v[0],b=b-v[1];var S={el:a,targetEl:m,id:c,class:l,top:u,bottom:b,left:f,right:y,offset:h,progress:0,repeat:d,inView:!1,call:_};i.els[c]=S,a.classList.contains(l)&&i.setInView(i.els[c],c)})}},{key:"updateElements",value:function(){var i=this;Object.entries(this.els).forEach(function(s){var a=Hr(s,2),o=a[0],l=a[1],c=l.targetEl.getBoundingClientRect().top+i.instance.scroll.y,u=c+l.targetEl.offsetHeight,f=i.getRelativeOffset(l.offset);i.els[o].top=c+f[0],i.els[o].bottom=u-f[1]}),this.hasScrollTicking=!1}},{key:"getRelativeOffset",value:function(i){var s=[0,0];if(i)for(var a=0;a<i.length;a++)typeof i[a]=="string"?i[a].includes("%")?s[a]=parseInt(i[a].replace("%","")*this.windowHeight/100):s[a]=parseInt(i[a]):s[a]=i[a];return s}},{key:"scrollTo",value:function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=parseInt(s.offset)||0,o=s.callback?s.callback:!1;if(typeof i=="string"){if(i==="top")i=this.html;else if(i==="bottom")i=this.html.offsetHeight-window.innerHeight;else if(i=document.querySelector(i),!i)return}else if(typeof i=="number")i=parseInt(i);else if(!(i&&i.tagName)){console.warn("`target` parameter is not valid");return}typeof i!="number"?a=i.getBoundingClientRect().top+a+this.instance.scroll.y:a=i+a;var l=function(){return parseInt(window.pageYOffset)===parseInt(a)};if(o)if(l()){o();return}else{var c=function u(){l()&&(window.removeEventListener("scroll",u),o())};window.addEventListener("scroll",c)}window.scrollTo({top:a,behavior:s.duration===0?"auto":"smooth"})}},{key:"update",value:function(){this.addElements(),this.detectElements()}},{key:"destroy",value:function(){fi(Un(e.prototype),"destroy",this).call(this),window.removeEventListener("scroll",this.checkScroll,!1)}}]),e}(Bd);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var eh=Object.getOwnPropertySymbols,gb=Object.prototype.hasOwnProperty,_b=Object.prototype.propertyIsEnumerable;function vb(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function xb(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(t).map(function(s){return t[s]});if(n.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var yb=xb()?Object.assign:function(r,t){for(var e,n=vb(r),i,s=1;s<arguments.length;s++){e=Object(arguments[s]);for(var a in e)gb.call(e,a)&&(n[a]=e[a]);if(eh){i=eh(e);for(var o=0;o<i.length;o++)_b.call(e,i[o])&&(n[i[o]]=e[i[o]])}}return n};function Gd(){}Gd.prototype={on:function(r,t,e){var n=this.e||(this.e={});return(n[r]||(n[r]=[])).push({fn:t,ctx:e}),this},once:function(r,t,e){var n=this;function i(){n.off(r,i),t.apply(e,arguments)}return i._=t,this.on(r,i,e)},emit:function(r){var t=[].slice.call(arguments,1),e=((this.e||(this.e={}))[r]||[]).slice(),n=0,i=e.length;for(n;n<i;n++)e[n].fn.apply(e[n].ctx,t);return this},off:function(r,t){var e=this.e||(this.e={}),n=e[r],i=[];if(n&&t)for(var s=0,a=n.length;s<a;s++)n[s].fn!==t&&n[s].fn._!==t&&i.push(n[s]);return i.length?e[r]=i:delete e[r],this}};var Mb=Gd,Sb=Hd(function(r,t){(function(){var e;e=t!==null?t:this,e.Lethargy=function(){function n(i,s,a,o){this.stability=i!=null?Math.abs(i):8,this.sensitivity=s!=null?1+Math.abs(s):100,this.tolerance=a!=null?1+Math.abs(a):1.1,this.delay=o??150,this.lastUpDeltas=function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}.call(this),this.lastDownDeltas=function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}.call(this),this.deltasTimestamp=function(){var l,c,u;for(u=[],l=1,c=this.stability*2;1<=c?l<=c:l>=c;1<=c?l++:l--)u.push(null);return u}.call(this)}return n.prototype.check=function(i){var s;return i=i.originalEvent||i,i.wheelDelta!=null?s=i.wheelDelta:i.deltaY!=null?s=i.deltaY*-40:(i.detail!=null||i.detail===0)&&(s=i.detail*-40),this.deltasTimestamp.push(Date.now()),this.deltasTimestamp.shift(),s>0?(this.lastUpDeltas.push(s),this.lastUpDeltas.shift(),this.isInertia(1)):(this.lastDownDeltas.push(s),this.lastDownDeltas.shift(),this.isInertia(-1))},n.prototype.isInertia=function(i){var s,a,o,l,c,u,f;return s=i===-1?this.lastDownDeltas:this.lastUpDeltas,s[0]===null?i:this.deltasTimestamp[this.stability*2-2]+this.delay>Date.now()&&s[0]===s[this.stability*2-1]?!1:(o=s.slice(0,this.stability),a=s.slice(this.stability,this.stability*2),f=o.reduce(function(h,d){return h+d}),c=a.reduce(function(h,d){return h+d}),u=f/o.length,l=c/a.length,Math.abs(u)<Math.abs(l*this.tolerance)&&this.sensitivity<Math.abs(l)?i:!1)},n.prototype.showLastUpDeltas=function(){return this.lastUpDeltas},n.prototype.showLastDownDeltas=function(){return this.lastDownDeltas},n}()}).call(pb)}),rn=function(){return{hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in window||window.TouchEvent||window.DocumentTouch&&document instanceof DocumentTouch,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}}(),bb=Object.prototype.toString,wb=Object.prototype.hasOwnProperty,Eb=function(r){if(!r)return console.warn("bindAll requires at least one argument.");var t=Array.prototype.slice.call(arguments,1);if(t.length===0)for(var e in r)wb.call(r,e)&&typeof r[e]=="function"&&bb.call(r[e])=="[object Function]"&&t.push(e);for(var n=0;n<t.length;n++){var i=t[n];r[i]=Tb(r[i],r)}};function Tb(r,t){return function(){return r.apply(t,arguments)}}var Ab=Sb.Lethargy,cr="virtualscroll",Cb=cn,As={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32};function cn(r){Eb(this,"_onWheel","_onMouseWheel","_onTouchStart","_onTouchMove","_onKeyDown"),this.el=window,r&&r.el&&(this.el=r.el,delete r.el),this.options=yb({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",limitInertia:!1,useKeyboard:!0,useTouch:!0},r),this.options.limitInertia&&(this._lethargy=new Ab),this._emitter=new Mb,this._event={y:0,x:0,deltaX:0,deltaY:0},this.touchStartX=null,this.touchStartY=null,this.bodyTouchAction=null,this.options.passive!==void 0&&(this.listenerOptions={passive:this.options.passive})}cn.prototype._notify=function(r){var t=this._event;t.x+=t.deltaX,t.y+=t.deltaY,this._emitter.emit(cr,{x:t.x,y:t.y,deltaX:t.deltaX,deltaY:t.deltaY,originalEvent:r})};cn.prototype._onWheel=function(r){var t=this.options;if(!(this._lethargy&&this._lethargy.check(r)===!1)){var e=this._event;e.deltaX=r.wheelDeltaX||r.deltaX*-1,e.deltaY=r.wheelDeltaY||r.deltaY*-1,rn.isFirefox&&r.deltaMode==1&&(e.deltaX*=t.firefoxMultiplier,e.deltaY*=t.firefoxMultiplier),e.deltaX*=t.mouseMultiplier,e.deltaY*=t.mouseMultiplier,this._notify(r)}};cn.prototype._onMouseWheel=function(r){if(!(this.options.limitInertia&&this._lethargy.check(r)===!1)){var t=this._event;t.deltaX=r.wheelDeltaX?r.wheelDeltaX:0,t.deltaY=r.wheelDeltaY?r.wheelDeltaY:r.wheelDelta,this._notify(r)}};cn.prototype._onTouchStart=function(r){var t=r.targetTouches?r.targetTouches[0]:r;this.touchStartX=t.pageX,this.touchStartY=t.pageY};cn.prototype._onTouchMove=function(r){var t=this.options;t.preventTouch&&!r.target.classList.contains(t.unpreventTouchClass)&&r.preventDefault();var e=this._event,n=r.targetTouches?r.targetTouches[0]:r;e.deltaX=(n.pageX-this.touchStartX)*t.touchMultiplier,e.deltaY=(n.pageY-this.touchStartY)*t.touchMultiplier,this.touchStartX=n.pageX,this.touchStartY=n.pageY,this._notify(r)};cn.prototype._onKeyDown=function(r){var t=this._event;t.deltaX=t.deltaY=0;var e=window.innerHeight-40;switch(r.keyCode){case As.LEFT:case As.UP:t.deltaY=this.options.keyStep;break;case As.RIGHT:case As.DOWN:t.deltaY=-this.options.keyStep;break;case r.shiftKey:t.deltaY=e;break;case As.SPACE:t.deltaY=-e;break;default:return}this._notify(r)};cn.prototype._bind=function(){rn.hasWheelEvent&&this.el.addEventListener("wheel",this._onWheel,this.listenerOptions),rn.hasMouseWheelEvent&&this.el.addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),rn.hasTouch&&this.options.useTouch&&(this.el.addEventListener("touchstart",this._onTouchStart,this.listenerOptions),this.el.addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),rn.hasPointer&&rn.hasTouchWin&&(this.bodyTouchAction=document.body.style.msTouchAction,document.body.style.msTouchAction="none",this.el.addEventListener("MSPointerDown",this._onTouchStart,!0),this.el.addEventListener("MSPointerMove",this._onTouchMove,!0)),rn.hasKeyDown&&this.options.useKeyboard&&document.addEventListener("keydown",this._onKeyDown)};cn.prototype._unbind=function(){rn.hasWheelEvent&&this.el.removeEventListener("wheel",this._onWheel),rn.hasMouseWheelEvent&&this.el.removeEventListener("mousewheel",this._onMouseWheel),rn.hasTouch&&(this.el.removeEventListener("touchstart",this._onTouchStart),this.el.removeEventListener("touchmove",this._onTouchMove)),rn.hasPointer&&rn.hasTouchWin&&(document.body.style.msTouchAction=this.bodyTouchAction,this.el.removeEventListener("MSPointerDown",this._onTouchStart,!0),this.el.removeEventListener("MSPointerMove",this._onTouchMove,!0)),rn.hasKeyDown&&this.options.useKeyboard&&document.removeEventListener("keydown",this._onKeyDown)};cn.prototype.on=function(r,t){this._emitter.on(cr,r,t);var e=this._emitter.e;e&&e[cr]&&e[cr].length===1&&this._bind()};cn.prototype.off=function(r,t){this._emitter.off(cr,r,t);var e=this._emitter.e;(!e[cr]||e[cr].length<=0)&&this._unbind()};cn.prototype.reset=function(){var r=this._event;r.x=0,r.y=0};cn.prototype.destroy=function(){this._emitter.off(),this._unbind()};function yl(r,t,e){return(1-e)*r+e*t}function hn(r){var t={};if(window.getComputedStyle){var e=getComputedStyle(r),n=e.transform||e.webkitTransform||e.mozTransform,i=n.match(/^matrix3d\((.+)\)$/);return i?(t.x=i?parseFloat(i[1].split(", ")[12]):0,t.y=i?parseFloat(i[1].split(", ")[13]):0):(i=n.match(/^matrix\((.+)\)$/),t.x=i?parseFloat(i[1].split(", ")[4]):0,t.y=i?parseFloat(i[1].split(", ")[5]):0),t}}function Ml(r){for(var t=[];r&&r!==document;r=r.parentNode)t.push(r);return t}var Pb=4,Lb=.001,Rb=1e-7,Db=10,Ds=11,Ba=1/(Ds-1),Ib=typeof Float32Array=="function";function Wd(r,t){return 1-3*t+3*r}function qd(r,t){return 3*t-6*r}function Xd(r){return 3*r}function no(r,t,e){return((Wd(t,e)*r+qd(t,e))*r+Xd(t))*r}function Yd(r,t,e){return 3*Wd(t,e)*r*r+2*qd(t,e)*r+Xd(t)}function Ob(r,t,e,n,i){var s,a,o=0;do a=t+(e-t)/2,s=no(a,n,i)-r,s>0?e=a:t=a;while(Math.abs(s)>Rb&&++o<Db);return a}function Ub(r,t,e,n){for(var i=0;i<Pb;++i){var s=Yd(t,e,n);if(s===0)return t;var a=no(t,e,n)-r;t-=a/s}return t}function Nb(r){return r}var Fb=function(t,e,n,i){if(!(0<=t&&t<=1&&0<=n&&n<=1))throw new Error("bezier x values must be in [0, 1] range");if(t===e&&n===i)return Nb;for(var s=Ib?new Float32Array(Ds):new Array(Ds),a=0;a<Ds;++a)s[a]=no(a*Ba,t,n);function o(l){for(var c=0,u=1,f=Ds-1;u!==f&&s[u]<=l;++u)c+=Ba;--u;var h=(l-s[u])/(s[u+1]-s[u]),d=c+h*Ba,_=Yd(d,t,n);return _>=Lb?Ub(l,d,t,n):_===0?d:Ob(l,c,c+Ba,t,n)}return function(c){return c===0?0:c===1?1:no(o(c),e,i)}},si={LEFT:37,UP:38,RIGHT:39,DOWN:40,SPACE:32,TAB:9,PAGEUP:33,PAGEDOWN:34,HOME:36,END:35},zb=function(r){Nd(e,r);var t=zd(e);function e(){var n,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ao(this,e),history.scrollRestoration&&(history.scrollRestoration="manual"),window.scrollTo(0,0),n=t.call(this,i),n.inertia&&(n.lerp=n.inertia*.1),n.isScrolling=!1,n.isDraggingScrollbar=!1,n.isTicking=!1,n.hasScrollTicking=!1,n.parallaxElements={},n.stop=!1,n.scrollbarContainer=i.scrollbarContainer,n.checkKey=n.checkKey.bind(Fd(n)),window.addEventListener("keydown",n.checkKey,!1),n}return Co(e,[{key:"init",value:function(){var i=this;this.html.classList.add(this.smoothClass),this.html.setAttribute("data-".concat(this.name,"-direction"),this.direction),this.instance=xl({delta:{x:this.initPosition.x,y:this.initPosition.y},scroll:{x:this.initPosition.x,y:this.initPosition.y}},this.instance),this.vs=new Cb({el:this.scrollFromAnywhere?document:this.el,mouseMultiplier:navigator.platform.indexOf("Win")>-1?1:.4,firefoxMultiplier:this.firefoxMultiplier,touchMultiplier:this.touchMultiplier,useKeyboard:!1,passive:!0}),this.vs.on(function(s){i.stop||i.isDraggingScrollbar||requestAnimationFrame(function(){i.updateDelta(s),i.isScrolling||i.startScrolling()})}),this.setScrollLimit(),this.initScrollBar(),this.addSections(),this.addElements(),this.checkScroll(!0),this.transformElements(!0,!0),fi(Un(e.prototype),"init",this).call(this)}},{key:"setScrollLimit",value:function(){if(this.instance.limit.y=this.el.offsetHeight-this.windowHeight,this.direction==="horizontal"){for(var i=0,s=this.el.children,a=0;a<s.length;a++)i+=s[a].offsetWidth;this.instance.limit.x=i-this.windowWidth}}},{key:"startScrolling",value:function(){this.startScrollTs=Date.now(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"stopScrolling",value:function(){cancelAnimationFrame(this.checkScrollRaf),this.startScrollTs=void 0,this.scrollToRaf&&(cancelAnimationFrame(this.scrollToRaf),this.scrollToRaf=null),this.isScrolling=!1,this.instance.scroll.y=Math.round(this.instance.scroll.y),this.html.classList.remove(this.scrollingClass)}},{key:"checkKey",value:function(i){var s=this;if(this.stop){i.keyCode==si.TAB&&requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0});return}switch(i.keyCode){case si.TAB:requestAnimationFrame(function(){s.html.scrollTop=0,document.body.scrollTop=0,s.html.scrollLeft=0,document.body.scrollLeft=0,s.scrollTo(document.activeElement,{offset:-window.innerHeight/2})});break;case si.UP:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]-=240);break;case si.DOWN:this.isActiveElementScrollSensitive()&&(this.instance.delta[this.directionAxis]+=240);break;case si.PAGEUP:this.instance.delta[this.directionAxis]-=window.innerHeight;break;case si.PAGEDOWN:this.instance.delta[this.directionAxis]+=window.innerHeight;break;case si.HOME:this.instance.delta[this.directionAxis]-=this.instance.limit[this.directionAxis];break;case si.END:this.instance.delta[this.directionAxis]+=this.instance.limit[this.directionAxis];break;case si.SPACE:this.isActiveElementScrollSensitive()&&(i.shiftKey?this.instance.delta[this.directionAxis]-=window.innerHeight:this.instance.delta[this.directionAxis]+=window.innerHeight);break;default:return}this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis]),this.stopScrolling(),this.isScrolling=!0,this.checkScroll(),this.html.classList.add(this.scrollingClass)}},{key:"isActiveElementScrollSensitive",value:function(){return!(document.activeElement instanceof HTMLInputElement)&&!(document.activeElement instanceof HTMLTextAreaElement)&&!(document.activeElement instanceof HTMLButtonElement)&&!(document.activeElement instanceof HTMLSelectElement)}},{key:"checkScroll",value:function(){var i=this,s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(s||this.isScrolling||this.isDraggingScrollbar){this.hasScrollTicking||(this.checkScrollRaf=requestAnimationFrame(function(){return i.checkScroll()}),this.hasScrollTicking=!0),this.updateScroll();var a=Math.abs(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis]),o=Date.now()-this.startScrollTs;if(!this.animatingScroll&&o>100&&(a<.5&&this.instance.delta[this.directionAxis]!=0||a<.5&&this.instance.delta[this.directionAxis]==0)&&this.stopScrolling(),Object.entries(this.sections).forEach(function(c){var u=Hr(c,2);u[0];var f=u[1];f.persistent||i.instance.scroll[i.directionAxis]>f.offset[i.directionAxis]&&i.instance.scroll[i.directionAxis]<f.limit[i.directionAxis]?(i.direction==="horizontal"?i.transform(f.el,-i.instance.scroll[i.directionAxis],0):i.transform(f.el,0,-i.instance.scroll[i.directionAxis]),f.inView||(f.inView=!0,f.el.style.opacity=1,f.el.style.pointerEvents="all",f.el.setAttribute("data-".concat(i.name,"-section-inview"),""))):((f.inView||s)&&(f.inView=!1,f.el.style.opacity=0,f.el.style.pointerEvents="none",f.el.removeAttribute("data-".concat(i.name,"-section-inview"))),i.transform(f.el,0,0))}),this.getDirection&&this.addDirection(),this.getSpeed&&(this.addSpeed(),this.speedTs=Date.now()),this.detectElements(),this.transformElements(),this.hasScrollbar){var l=this.instance.scroll[this.directionAxis]/this.instance.limit[this.directionAxis]*this.scrollBarLimit[this.directionAxis];this.direction==="horizontal"?this.transform(this.scrollbarThumb,l,0):this.transform(this.scrollbarThumb,0,l)}fi(Un(e.prototype),"checkScroll",this).call(this),this.hasScrollTicking=!1}}},{key:"resize",value:function(){this.windowHeight=window.innerHeight,this.windowWidth=window.innerWidth,this.checkContext(),this.windowMiddle={x:this.windowWidth/2,y:this.windowHeight/2},this.update()}},{key:"updateDelta",value:function(i){var s,a=this[this.context]&&this[this.context].gestureDirection?this[this.context].gestureDirection:this.gestureDirection;a==="both"?s=i.deltaX+i.deltaY:a==="vertical"?s=i.deltaY:a==="horizontal"?s=i.deltaX:s=i.deltaY,this.instance.delta[this.directionAxis]-=s*this.multiplier,this.instance.delta[this.directionAxis]<0&&(this.instance.delta[this.directionAxis]=0),this.instance.delta[this.directionAxis]>this.instance.limit[this.directionAxis]&&(this.instance.delta[this.directionAxis]=this.instance.limit[this.directionAxis])}},{key:"updateScroll",value:function(i){this.isScrolling||this.isDraggingScrollbar?this.instance.scroll[this.directionAxis]=yl(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis],this.lerp):this.instance.scroll[this.directionAxis]>this.instance.limit[this.directionAxis]?this.setScroll(this.instance.scroll[this.directionAxis],this.instance.limit[this.directionAxis]):this.instance.scroll.y<0?this.setScroll(this.instance.scroll[this.directionAxis],0):this.setScroll(this.instance.scroll[this.directionAxis],this.instance.delta[this.directionAxis])}},{key:"addDirection",value:function(){this.instance.delta.y>this.instance.scroll.y?this.instance.direction!=="down"&&(this.instance.direction="down"):this.instance.delta.y<this.instance.scroll.y&&this.instance.direction!=="up"&&(this.instance.direction="up"),this.instance.delta.x>this.instance.scroll.x?this.instance.direction!=="right"&&(this.instance.direction="right"):this.instance.delta.x<this.instance.scroll.x&&this.instance.direction!=="left"&&(this.instance.direction="left")}},{key:"addSpeed",value:function(){this.instance.delta[this.directionAxis]!=this.instance.scroll[this.directionAxis]?this.instance.speed=(this.instance.delta[this.directionAxis]-this.instance.scroll[this.directionAxis])/Math.max(1,Date.now()-this.speedTs):this.instance.speed=0}},{key:"initScrollBar",value:function(){if(this.scrollbar=document.createElement("span"),this.scrollbarThumb=document.createElement("span"),this.scrollbar.classList.add("".concat(this.scrollbarClass)),this.scrollbarThumb.classList.add("".concat(this.scrollbarClass,"_thumb")),this.scrollbar.append(this.scrollbarThumb),this.scrollbarContainer?this.scrollbarContainer.append(this.scrollbar):document.body.append(this.scrollbar),this.getScrollBar=this.getScrollBar.bind(this),this.releaseScrollBar=this.releaseScrollBar.bind(this),this.moveScrollBar=this.moveScrollBar.bind(this),this.scrollbarThumb.addEventListener("mousedown",this.getScrollBar),window.addEventListener("mouseup",this.releaseScrollBar),window.addEventListener("mousemove",this.moveScrollBar),this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"reinitScrollBar",value:function(){if(this.hasScrollbar=!1,this.direction=="horizontal"){if(this.instance.limit.x+this.windowWidth<=this.windowWidth)return}else if(this.instance.limit.y+this.windowHeight<=this.windowHeight)return;this.hasScrollbar=!0,this.scrollbarBCR=this.scrollbar.getBoundingClientRect(),this.scrollbarHeight=this.scrollbarBCR.height,this.scrollbarWidth=this.scrollbarBCR.width,this.direction==="horizontal"?this.scrollbarThumb.style.width="".concat(this.scrollbarWidth*this.scrollbarWidth/(this.instance.limit.x+this.scrollbarWidth),"px"):this.scrollbarThumb.style.height="".concat(this.scrollbarHeight*this.scrollbarHeight/(this.instance.limit.y+this.scrollbarHeight),"px"),this.scrollbarThumbBCR=this.scrollbarThumb.getBoundingClientRect(),this.scrollBarLimit={x:this.scrollbarWidth-this.scrollbarThumbBCR.width,y:this.scrollbarHeight-this.scrollbarThumbBCR.height}}},{key:"destroyScrollBar",value:function(){this.scrollbarThumb.removeEventListener("mousedown",this.getScrollBar),window.removeEventListener("mouseup",this.releaseScrollBar),window.removeEventListener("mousemove",this.moveScrollBar),this.scrollbar.remove()}},{key:"getScrollBar",value:function(i){this.isDraggingScrollbar=!0,this.checkScroll(),this.html.classList.remove(this.scrollingClass),this.html.classList.add(this.draggingClass)}},{key:"releaseScrollBar",value:function(i){this.isDraggingScrollbar=!1,this.isScrolling&&this.html.classList.add(this.scrollingClass),this.html.classList.remove(this.draggingClass)}},{key:"moveScrollBar",value:function(i){var s=this;this.isDraggingScrollbar&&requestAnimationFrame(function(){var a=(i.clientX-s.scrollbarBCR.left)*100/s.scrollbarWidth*s.instance.limit.x/100,o=(i.clientY-s.scrollbarBCR.top)*100/s.scrollbarHeight*s.instance.limit.y/100;o>0&&o<s.instance.limit.y&&(s.instance.delta.y=o),a>0&&a<s.instance.limit.x&&(s.instance.delta.x=a)})}},{key:"addElements",value:function(){var i=this;this.els={},this.parallaxElements={};var s=this.el.querySelectorAll("[data-".concat(this.name,"]"));s.forEach(function(a,o){var l=Ml(a),c=Object.entries(i.sections).map(function(lt){var ot=Hr(lt,2);ot[0];var Et=ot[1];return Et}).find(function(lt){return l.includes(lt.el)}),u=a.dataset[i.name+"Class"]||i.class,f=typeof a.dataset[i.name+"Id"]=="string"?a.dataset[i.name+"Id"]:"el"+o,h,d,_=a.dataset[i.name+"Repeat"],g=a.dataset[i.name+"Call"],m=a.dataset[i.name+"Position"],p=a.dataset[i.name+"Delay"],b=a.dataset[i.name+"Direction"],y=typeof a.dataset[i.name+"Sticky"]=="string",v=a.dataset[i.name+"Speed"]?parseFloat(a.dataset[i.name+"Speed"])/10:!1,S=typeof a.dataset[i.name+"Offset"]=="string"?a.dataset[i.name+"Offset"].split(","):i.offset,C=a.dataset[i.name+"Target"],P;C!==void 0?P=document.querySelector("".concat(C)):P=a;var R=P.getBoundingClientRect();c===null||c.inView?(h=R.top+i.instance.scroll.y-hn(P).y,d=R.left+i.instance.scroll.x-hn(P).x):(h=R.top-hn(c.el).y-hn(P).y,d=R.left-hn(c.el).x-hn(P).x);var x=h+P.offsetHeight,E=d+P.offsetWidth,q={x:(E-d)/2+d,y:(x-h)/2+h};if(y){var Y=a.getBoundingClientRect(),U=Y.top,z=Y.left,W={x:z-d,y:U-h};h+=window.innerHeight,d+=window.innerWidth,x=U+P.offsetHeight-a.offsetHeight-W[i.directionAxis],E=z+P.offsetWidth-a.offsetWidth-W[i.directionAxis],q={x:(E-d)/2+d,y:(x-h)/2+h}}_=="false"?_=!1:_!=null?_=!0:_=i.repeat;var $=[0,0];if(S)if(i.direction==="horizontal"){for(var H=0;H<S.length;H++)typeof S[H]=="string"?S[H].includes("%")?$[H]=parseInt(S[H].replace("%","")*i.windowWidth/100):$[H]=parseInt(S[H]):$[H]=S[H];d=d+$[0],E=E-$[1]}else{for(var H=0;H<S.length;H++)typeof S[H]=="string"?S[H].includes("%")?$[H]=parseInt(S[H].replace("%","")*i.windowHeight/100):$[H]=parseInt(S[H]):$[H]=S[H];h=h+$[0],x=x-$[1]}var V={el:a,id:f,class:u,section:c,top:h,middle:q,bottom:x,left:d,right:E,offset:S,progress:0,repeat:_,inView:!1,call:g,speed:v,delay:p,position:m,target:P,direction:b,sticky:y};i.els[f]=V,a.classList.contains(u)&&i.setInView(i.els[f],f),(v!==!1||y)&&(i.parallaxElements[f]=V)})}},{key:"addSections",value:function(){var i=this;this.sections={};var s=this.el.querySelectorAll("[data-".concat(this.name,"-section]"));s.length===0&&(s=[this.el]),s.forEach(function(a,o){var l=typeof a.dataset[i.name+"Id"]=="string"?a.dataset[i.name+"Id"]:"section"+o,c=a.getBoundingClientRect(),u={x:c.left-window.innerWidth*1.5-hn(a).x,y:c.top-window.innerHeight*1.5-hn(a).y},f={x:u.x+c.width+window.innerWidth*2,y:u.y+c.height+window.innerHeight*2},h=typeof a.dataset[i.name+"Persistent"]=="string";a.setAttribute("data-scroll-section-id",l);var d={el:a,offset:u,limit:f,inView:!1,persistent:h,id:l};i.sections[l]=d})}},{key:"transform",value:function(i,s,a,o){var l;if(!o)l="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(s,",").concat(a,",0,1)");else{var c=hn(i),u=yl(c.x,s,o),f=yl(c.y,a,o);l="matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(u,",").concat(f,",0,1)")}i.style.webkitTransform=l,i.style.msTransform=l,i.style.transform=l}},{key:"transformElements",value:function(i){var s=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=this.instance.scroll.x+this.windowWidth,l=this.instance.scroll.y+this.windowHeight,c={x:this.instance.scroll.x+this.windowMiddle.x,y:this.instance.scroll.y+this.windowMiddle.y};Object.entries(this.parallaxElements).forEach(function(u){var f=Hr(u,2);f[0];var h=f[1],d=!1;if(i&&(d=0),h.inView||a)switch(h.position){case"top":d=s.instance.scroll[s.directionAxis]*-h.speed;break;case"elementTop":d=(l-h.top)*-h.speed;break;case"bottom":d=(s.instance.limit[s.directionAxis]-l+s.windowHeight)*h.speed;break;case"left":d=s.instance.scroll[s.directionAxis]*-h.speed;break;case"elementLeft":d=(o-h.left)*-h.speed;break;case"right":d=(s.instance.limit[s.directionAxis]-o+s.windowHeight)*h.speed;break;default:d=(c[s.directionAxis]-h.middle[s.directionAxis])*-h.speed;break}h.sticky&&(h.inView?s.direction==="horizontal"?d=s.instance.scroll.x-h.left+window.innerWidth:d=s.instance.scroll.y-h.top+window.innerHeight:s.direction==="horizontal"?s.instance.scroll.x<h.left-window.innerWidth&&s.instance.scroll.x<h.left-window.innerWidth/2?d=0:s.instance.scroll.x>h.right&&s.instance.scroll.x>h.right+100?d=h.right-h.left+window.innerWidth:d=!1:s.instance.scroll.y<h.top-window.innerHeight&&s.instance.scroll.y<h.top-window.innerHeight/2?d=0:s.instance.scroll.y>h.bottom&&s.instance.scroll.y>h.bottom+100?d=h.bottom-h.top+window.innerHeight:d=!1),d!==!1&&(h.direction==="horizontal"||s.direction==="horizontal"&&h.direction!=="vertical"?s.transform(h.el,d,0,i?!1:h.delay):s.transform(h.el,0,d,i?!1:h.delay))})}},{key:"scrollTo",value:function(i){var s=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},o=parseInt(a.offset)||0,l=isNaN(parseInt(a.duration))?1e3:parseInt(a.duration),c=a.easing||[.25,0,.35,1],u=!!a.disableLerp,f=a.callback?a.callback:!1;if(c=Fb.apply(void 0,ob(c)),typeof i=="string"){if(i==="top")i=0;else if(i==="bottom")i=this.instance.limit.y;else if(i==="left")i=0;else if(i==="right")i=this.instance.limit.x;else if(i=document.querySelector(i),!i)return}else if(typeof i=="number")i=parseInt(i);else if(!(i&&i.tagName)){console.warn("`target` parameter is not valid");return}if(typeof i!="number"){var h=Ml(i).includes(this.el);if(!h)return;var d=i.getBoundingClientRect(),_=d.top,g=d.left,m=Ml(i),p=m.find(function(x){return Object.entries(s.sections).map(function(E){var q=Hr(E,2);q[0];var Y=q[1];return Y}).find(function(E){return E.el==x})}),b=0;p?b=hn(p)[this.directionAxis]:b=-this.instance.scroll[this.directionAxis],this.direction==="horizontal"?o=g+o-b:o=_+o-b}else o=i+o;var y=parseFloat(this.instance.delta[this.directionAxis]),v=Math.max(0,Math.min(o,this.instance.limit[this.directionAxis])),S=v-y,C=function(E){u?s.direction==="horizontal"?s.setScroll(y+S*E,s.instance.delta.y):s.setScroll(s.instance.delta.x,y+S*E):s.instance.delta[s.directionAxis]=y+S*E};this.animatingScroll=!0,this.stopScrolling(),this.startScrolling();var P=Date.now(),R=function x(){var E=(Date.now()-P)/l;E>1?(C(1),s.animatingScroll=!1,l==0&&s.update(),f&&f()):(s.scrollToRaf=requestAnimationFrame(x),C(c(E)))};R()}},{key:"update",value:function(){this.setScrollLimit(),this.addSections(),this.addElements(),this.detectElements(),this.updateScroll(),this.transformElements(!0),this.reinitScrollBar(),this.checkScroll(!0)}},{key:"startScroll",value:function(){this.stop=!1}},{key:"stopScroll",value:function(){this.stop=!0}},{key:"setScroll",value:function(i,s){this.instance=xl(xl({},this.instance),{},{scroll:{x:i,y:s},delta:{x:i,y:s},speed:0})}},{key:"destroy",value:function(){fi(Un(e.prototype),"destroy",this).call(this),this.stopScrolling(),this.html.classList.remove(this.smoothClass),this.vs.destroy(),this.destroyScrollBar(),window.removeEventListener("keydown",this.checkKey,!1)}}]),e}(Bd),kb=function(){function r(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ao(this,r),this.options=t,Object.assign(this,Zr,t),this.smartphone=Zr.smartphone,t.smartphone&&Object.assign(this.smartphone,t.smartphone),this.tablet=Zr.tablet,t.tablet&&Object.assign(this.tablet,t.tablet),!this.smooth&&this.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),!this.tablet.smooth&&this.tablet.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),!this.smartphone.smooth&&this.smartphone.direction=="horizontal"&&console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),this.init()}return Co(r,[{key:"init",value:function(){if(this.options.isMobile=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1||window.innerWidth<this.tablet.breakpoint,this.options.isTablet=this.options.isMobile&&window.innerWidth>=this.tablet.breakpoint,this.smooth&&!this.options.isMobile||this.tablet.smooth&&this.options.isTablet||this.smartphone.smooth&&this.options.isMobile&&!this.options.isTablet?this.scroll=new zb(this.options):this.scroll=new mb(this.options),this.scroll.init(),window.location.hash){var e=window.location.hash.slice(1,window.location.hash.length),n=document.getElementById(e);n&&this.scroll.scrollTo(n)}}},{key:"update",value:function(){this.scroll.update()}},{key:"start",value:function(){this.scroll.startScroll()}},{key:"stop",value:function(){this.scroll.stopScroll()}},{key:"scrollTo",value:function(e,n){this.scroll.scrollTo(e,n)}},{key:"setScroll",value:function(e,n){this.scroll.setScroll(e,n)}},{key:"on",value:function(e,n){this.scroll.setEvents(e,n)}},{key:"off",value:function(e,n){this.scroll.unsetEvents(e,n)}},{key:"destroy",value:function(){this.scroll.destroy()}}]),r}();const Po=r=>(vr("data-v-6979cdac"),r=r(),xr(),r),Bb={class:"container"},Hb=Po(()=>Rt("div",{class:"logo cursor-scale"},[Rt("svg",{width:"29",height:"60",viewBox:"0 0 29 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Rt("path",{d:"M27.5 5.62913L15.0983 27.2471L27.5 44.8182L27.5 5.62913Z",stroke:"#8155FF","stroke-width":"3"}),Rt("path",{d:"M1.50002 53.8656L12.4152 32.8809L1.50002 15.8244L1.50002 53.8656Z",stroke:"#8155FF","stroke-width":"3"})])],-1)),Vb=Po(()=>Rt("span",null,"<Proyectos />",-1)),Gb=[Vb],Wb=Po(()=>Rt("span",null,"<Sobre mi />",-1)),qb=[Wb],Xb=Po(()=>Rt("span",null,"<Contacto />",-1)),Yb=[Xb],jb=yn({__name:"Header",setup(r){let t;yo(()=>{const n=new kb({el:document.querySelector("[data-scroll-container]"),smooth:!0,lerp:.04});t=i=>{const s=document.querySelector(`#${i}`);n.scrollTo(s),n.update()}});let e=Wm(!1);return Wa(e,function(){e.value&&window.scrollTo(0,0),window.innerWidth<900&&(e.value?document.body.style.overflowY="hidden":document.body.style.overflowY="auto")}),(n,i)=>(gi(),_i("header",{class:Ln({open:ye(e)})},[Rt("div",Bb,[Hb,Rt("nav",null,[Rt("ul",{class:Ln([{open:ye(e)},"cursor-scale"])},[Rt("li",{onClick:i[0]||(i[0]=s=>{de(e)?e.value=!ye(e):e=!ye(e),ye(t)("portfolio")})},Gb),Rt("li",{onClick:i[1]||(i[1]=s=>{de(e)?e.value=!ye(e):e=!ye(e),ye(t)("about")})},qb),Rt("li",{onClick:i[2]||(i[2]=s=>{de(e)?e.value=!ye(e):e=!ye(e),ye(t)("contact")})},Yb)],2),we(nb,{"is-active":ye(e),onClick:i[3]||(i[3]=s=>de(e)?e.value=!ye(e):e=!ye(e))},null,8,["is-active"])])])],2))}});const $b=Jn(jb,[["__scopeId","data-v-6979cdac"]]),Kb=Ic('<div class="card cursor-scale" data-scroll data-scroll-speed="1" data-v-393d2e85><div class="index" data-v-393d2e85>00</div><div class="text" data-v-393d2e85><h2 data-v-393d2e85>Nahuel Silva portfolio</h2><p data-v-393d2e85>Sitio web desarrollado en Vue, utilizando Three.js para los efectos 3d, Greensock y ScrollMagic para el resto de animaciones, locomotiveScroll para el smoth scroll. </p><div class="btn disabled" data-v-393d2e85>Ver en github</div></div></div><div class="card cursor-scale" data-scroll data-scroll-speed="1" data-v-393d2e85><div class="index" data-v-393d2e85>01</div><div class="text" data-v-393d2e85><h2 data-v-393d2e85>Silverwolf store</h2><p data-v-393d2e85>Este ecommerce fue desarrollado en Angular el frontend y la API en NodeJs, utiliza MongoDB como BD y socket-io para algunas peticiones.</p><a class="btn" href="https://silverwolfstore.uy" target="_blank" data-v-393d2e85>Visitar sitio</a></div></div><div class="card cursor-scale" data-scroll data-scroll-speed="1" data-v-393d2e85><div class="index" data-v-393d2e85>02</div><div class="text" data-v-393d2e85><h2 data-v-393d2e85>Silverwolf motores</h2><p data-v-393d2e85>Sitio web desarrollado para un taller de bobinados de motores, Instalaciones de portones e instalaciones electricas, fue desarrollado en Vue y de conecta al ecommerce mediante su API</p><a class="btn" href="https://swmotores.com" target="_blank" data-v-393d2e85>Visitar sitio</a></div></div>',3),Zb=yn({__name:"WorkCard",setup(r){return(t,e)=>Kb}});const Jb=Jn(Zb,[["__scopeId","data-v-393d2e85"]]),nh="/portfolio/assets/logo-17f968f9.webp",jd=r=>(vr("data-v-a98a4929"),r=r(),xr(),r),Qb={class:"portfolio",id:"portfolio"},tw=["src"],ew={class:"container"},nw=jd(()=>Rt("p",{class:"function cursor-scale"},"Proyectos(){",-1)),iw=jd(()=>Rt("p",{class:"function cursor-scale"},"}",-1)),rw=["src"],sw=Ic('<div class="animation-wrapper-rotated" data-v-a98a4929><div class="horizontal-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="15" data-scroll-delay="0.05" data-scroll-target="#portfolio" data-v-a98a4929><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span><span data-v-a98a4929>_</span><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span><span data-v-a98a4929>_</span><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span></div></div><div class="horizontal-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="15" data-scroll-delay="0.05" data-scroll-target="#portfolio" data-v-a98a4929><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span><span data-v-a98a4929>_</span><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span><span data-v-a98a4929>_</span><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span></div><div class="horizontal-text bottom" data-scroll data-scroll-direction="horizontal" data-scroll-speed="15" data-scroll-delay="0.15" data-scroll-target="#portfolio" data-v-a98a4929><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span><span data-v-a98a4929>_</span><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span><span data-v-a98a4929>_</span><span data-v-a98a4929>COFFE</span><span data-v-a98a4929>_</span><span data-v-a98a4929>PROGRAMMING</span><span data-v-a98a4929>_</span><span data-v-a98a4929>!SLEEP</span></div>',3),aw=yn({__name:"Portfolio",setup(r){return(t,e)=>(gi(),_i("div",Qb,[Rt("img",{src:ye(nh),alt:"",class:"logo-bg"},null,8,tw),Rt("div",ew,[nw,we(Jb),iw]),Rt("img",{src:ye(nh),alt:"",class:"logo-bg"},null,8,rw),sw]))}});const ow=Jn(aw,[["__scopeId","data-v-a98a4929"]]),lw=yn({name:"TorusAnimation",mounted(){const r=this.$refs.canvas,t=new Od,e=new Bc(24,7,16,40),n=new Eo({color:8476159,wireframe:!0}),i=new Yn(e,n);t.add(i);const s=new nn(75,this.$el.parentNode.offsetWidth/this.$el.parentNode.offsetHeight,.1,1e3);s.position.z=50;const a=new kc({canvas:r,alpha:!0,antialias:!0});a.setClearColor(0,0),a.setSize(this.$el.parentNode.offsetWidth,this.$el.parentNode.offsetHeight);function o(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(u=>navigator.userAgent.match(u))}i.rotation.y=-.3,i.rotation.x+=-1,i.position.x=0,i.position.y=6,l();function l(){o()&&(i.rotation.z+=1e-4*9),requestAnimationFrame(l),a.render(t,s)}window.addEventListener("resize",()=>{const c=this.$el.parentNode.offsetWidth,u=this.$el.parentNode.offsetHeight;s.aspect=c/u,s.updateProjectionMatrix(),a.setSize(c,u)}),o()||window.addEventListener("mousemove",c=>{i.rotation.z=c.clientX/5e3,i.rotation.y=5.9+c.clientY/5e3,s.updateProjectionMatrix()})}}),cw={ref:"canvas"};function uw(r,t,e,n,i,s){return gi(),_i("canvas",cw,null,512)}const fw=Jn(lw,[["render",uw]]),hw="/portfolio/assets/Nahuel_Silva-5e36226c.pdf",ca=r=>(vr("data-v-f1b09ffb"),r=r(),xr(),r),dw={class:"about-me",id:"about"},pw={class:"container"},mw={class:"text cursor-scale"},gw=ca(()=>Rt("p",{class:"function"},"<>",-1)),_w=ca(()=>Rt("p",null,"¡Hola! Mi nombre es Nahuel Silva y tengo 22 años. Actualmente me desempeño como desarrollador web frontend en una multinacional, aunque siempre estoy abierto a nuevas oportunidades laborales.",-1)),vw=ca(()=>Rt("p",null,"Me considero una persona proactiva y entusiasta por aprender sobre nuevas tecnologías y profundizar en su funcionamiento. Me encanta ser autodidacta y aplicar todo lo que aprendo en la práctica. En cada aplicación que desarrollo, mi objetivo es lograr el mejor rendimiento posible en todas las plataformas. ",-1)),xw=ca(()=>Rt("p",null,[nr("Estoy comprometido con brindar soluciones creativas y eficientes a los desafíos que se presentan en mi trabajo. Me apasiona trabajar en equipo y colaborar para alcanzar los objetivos planteados. ¡Si tienes alguna propuesta interesante, no dudes en "),Rt("a",{href:"mailto:nahuel.silva008@gmail.com?Subject=Tenemos%20una%20propuesta%20para%20ti&Body=Hola%20Nahuel,%20nos%20intereso%20tu%20perfil%20y%20queremos..."},"contactarme"),nr("!")],-1)),yw=["href"],Mw=ca(()=>Rt("p",{class:"function"},"</>",-1)),Sw=yn({__name:"About",setup(r){return(t,e)=>(gi(),_i("div",dw,[Rt("div",pw,[Rt("div",mw,[gw,_w,vw,xw,Rt("a",{class:"btn",href:ye(hw),download:"Nahuel_Silva"},"Descargar CV",8,yw),Mw])]),we(fw,{class:"background"})]))}});const bw=Jn(Sw,[["__scopeId","data-v-f1b09ffb"]]),ww=r=>(vr("data-v-a93438e8"),r=r(),xr(),r),Ew=ww(()=>Rt("div",{class:"dots cursor-scale"},[Rt("div"),Rt("div"),Rt("div")],-1)),Tw={class:"percentage cursor-scale"},Aw=yn({computed:{prcLoad(){return console.log(this.loaded),this.loaded=="100%"&&(document.body.style.overflowY="auto",setTimeout(()=>{var r;(r=document.querySelector(".loader"))==null||r.remove()},1500)),this.loaded}}}),Cw=yn({...Aw,__name:"LoaderScreen",setup(r){return document.body.style.overflowY="hidden",(t,e)=>(gi(),_i("div",{class:Ln(["loader",t.prcLoad.toString()=="100%"?"fadeOut":""]),ref:"loader"},[Ew,Rt("div",Tw,sm(t.prcLoad),1)],2))}});const Pw=Jn(Cw,[["__scopeId","data-v-a93438e8"]]);function oi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function $d(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var on={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cs={duration:.5,overwrite:!1,delay:0},Gc,De,he,gn=1e8,Kt=1/gn,Ql=Math.PI*2,Lw=Ql/4,Rw=0,Kd=Math.sqrt,Dw=Math.cos,Iw=Math.sin,Se=function(t){return typeof t=="string"},se=function(t){return typeof t=="function"},di=function(t){return typeof t=="number"},Wc=function(t){return typeof t>"u"},Zn=function(t){return typeof t=="object"},qe=function(t){return t!==!1},qc=function(){return typeof window<"u"},Ha=function(t){return se(t)||Se(t)},Zd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ie=Array.isArray,tc=/(?:-?\.?\d|\.)+/gi,Jd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qd=/[+-]=-?[.\d]+/,tp=/[^,'"\[\]\s]+/gi,Ow=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ie,pn,ec,Xc,ln={},io={},ep,np=function(t){return(io=_r(t,ln))&&$e},Yc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ro=function(t,e){return!e&&console.warn(t)},ip=function(t,e){return t&&(ln[t]=e)&&io&&(io[t]=e)||ln},Js=function(){return 0},Uw={suppressEvents:!0,isStart:!0,kill:!1},$a={suppressEvents:!0,kill:!1},Nw={suppressEvents:!0},jc={},Ri=[],nc={},rp,en={},bl={},ih=30,Ka=[],$c="",Kc=function(t){var e=t[0],n,i;if(Zn(e)||se(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ka.length;i--&&!Ka[i].targetTest(e););n=Ka[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Cp(t[i],n)))||t.splice(i,1);return t},ur=function(t){return t._gsap||Kc(_n(t))[0]._gsap},sp=function(t,e,n){return(n=t[e])&&se(n)?t[e]():Wc(n)&&t.getAttribute&&t.getAttribute(e)||n},Xe=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},Jr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Fw=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},so=function(){var t=Ri.length,e=Ri.slice(0),n,i;for(nc={},Ri.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ap=function(t,e,n,i){Ri.length&&!De&&so(),t.render(e,n,i||De&&e<0&&(t._initted||t._startAt)),Ri.length&&!De&&so()},op=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(tp).length<2?e:Se(t)?t.trim():t},lp=function(t){return t},xn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},zw=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},_r=function(t,e){for(var n in e)t[n]=e[n];return t},rh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Zn(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ao=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Fs=function(t){var e=t.parent||ie,n=t.keyframes?zw(Ie(t.keyframes)):xn;if(qe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},kw=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},cp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},Lo=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ui=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},fr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Bw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ic=function(t,e,n,i){return t._startAt&&(De?t._startAt.revert($a):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Hw=function r(t){return!t||t._ts&&r(t.parent)},sh=function(t){return t._repeat?us(t._tTime,t=t.duration()+t._rDelay)*t:0},us=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},oo=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ro=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Kt)||0))},Do=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ro(t),n._dirty||fr(n,t)),t},up=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=oo(t.rawTime(),e),(!e._dur||ua(0,e.totalDuration(),n)-e._tTime>Kt)&&e.render(n,!0)),fr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Kt}},qn=function(t,e,n,i){return e.parent&&Ui(e),e._start=be((di(n)?n:n||t!==ie?dn(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),cp(t,e,"_first","_last",t._sort?"_start":0),rc(e)||(t._recent=e),i||up(t,e),t._ts<0&&Do(t,t._tTime),t},fp=function(t,e){return(ln.ScrollTrigger||Yc("scrollTrigger",e))&&ln.ScrollTrigger.create(e,t)},hp=function(t,e,n,i,s){if(Jc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!De&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&rp!==sn.frame)return Ri.push(t),t._lazy=[s,i],1},Vw=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},rc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Gw=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&Vw(t)&&!(!t._initted&&rc(t))||(t._ts<0||t._dp._ts<0)&&!rc(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=ua(0,t._tDur,e),u=us(l,o),t._yoyo&&u&1&&(a=1-a),u!==us(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||De||i||t._zTime===Kt||!e&&t._zTime){if(!t._initted&&hp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Kt:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&ic(t,e,n,!0),t._onUpdate&&!n&&vn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ui(t,1),!n&&!De&&(vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ww=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},fs=function(t,e,n,i){var s=t._repeat,a=be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:be(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Do(t,t._tTime=t._tDur*o),t.parent&&Ro(t),n||fr(t.parent,t),t},ah=function(t){return t instanceof Ve?fr(t):fs(t,t._dur)},qw={_start:0,endTime:Js,totalDuration:Js},dn=function r(t,e,n){var i=t.labels,s=t._recent||qw,a=t.duration()>=gn?s.endTime(!1):t._dur,o,l,c;return Se(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Ie(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},zs=function(t,e,n){var i=di(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=qe(l.vars.inherit)&&l.parent;a.immediateRender=qe(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new pe(e[0],a,e[s+1])},zi=function(t,e){return t||t===0?e(t):e},ua=function(t,e,n){return n<t?t:n>e?e:n},Re=function(t,e){return!Se(t)||!(e=Ow.exec(t))?"":e[1]},Xw=function(t,e,n){return zi(n,function(i){return ua(t,e,i)})},sc=[].slice,dp=function(t,e){return t&&Zn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zn(t[0]))&&!t.nodeType&&t!==pn},Yw=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||dp(i,1)?(s=n).push.apply(s,_n(i)):n.push(i)})||n},_n=function(t,e,n){return he&&!e&&he.selector?he.selector(t):Se(t)&&!n&&(ec||!hs())?sc.call((e||Xc).querySelectorAll(t),0):Ie(t)?Yw(t,n):dp(t)?sc.call(t,0):t?[t]:[]},ac=function(t){return t=_n(t)[0]||ro("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return _n(e,n.querySelectorAll?n:n===t?ro("Invalid scope")||Xc.createElement("div"):t)}},pp=function(t){return t.sort(function(){return .5-Math.random()})},mp=function(t){if(se(t))return t;var e=Zn(t)?t:{each:t},n=hr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,f=i;return Se(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||e).length,m=a[g],p,b,y,v,S,C,P,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,gn])[1],!x){for(P=-gn;P<(P=_[x++].getBoundingClientRect().left)&&x<g;);x--}for(m=a[g]=[],p=l?Math.min(x,g)*u-.5:i%x,b=x===gn?0:l?g*f/x-.5:i/x|0,P=0,R=gn,C=0;C<g;C++)y=C%x-p,v=b-(C/x|0),m[C]=S=c?Math.abs(c==="y"?v:y):Kd(y*y+v*v),S>P&&(P=S),S<R&&(R=S);i==="random"&&pp(m),m.max=P-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Re(e.amount||e.each)||0,n=n&&g<0?Ep(n):n}return g=(m[h]-m.min)/m.max||0,be(m.b+(n?n(g):g)*m.v)+m.u}},oc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(di(n)?0:Re(n))}},gp=function(t,e){var n=Ie(t),i,s;return!n&&Zn(t)&&(i=n=t.radius||gn,t.values?(t=_n(t.values),(s=!di(t[0]))&&(i*=i)):t=oc(t.increment)),zi(e,n?se(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=gn,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:a,s||u===a||di(a)?u:u+Re(a)}:oc(t))},_p=function(t,e,n,i){return zi(Ie(t)?!e:n===!0?!!(n=0):!i,function(){return Ie(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},jw=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},$w=function(t,e){return function(n){return t(parseFloat(n))+(e||Re(n))}},Kw=function(t,e,n){return xp(t,e,0,1,n)},vp=function(t,e,n){return zi(n,function(i){return t[~~e(i)]})},Zw=function r(t,e,n){var i=e-t;return Ie(t)?vp(t,r(0,t.length),e):zi(n,function(s){return(i+(s-t)%i)%i+t})},Jw=function r(t,e,n){var i=e-t,s=i*2;return Ie(t)?vp(t,r(0,t.length-1),e):zi(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Qs=function(t){for(var e=0,n="",i,s,a,o;~(i=t.indexOf("random(",e));)a=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,a-i-7).match(o?tp:tc),n+=t.substr(e,i-e)+_p(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=a+1;return n+t.substr(e,t.length-e)},xp=function(t,e,n,i,s){var a=e-t,o=i-n;return zi(s,function(l){return n+((l-t)/a*o||0)})},Qw=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var a=Se(t),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(Ie(t)&&!Ie(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=_r(Ie(t)?[]:{},t));if(!u){for(l in e)Zc.call(o,t,l,"get",e[l]);s=function(_){return eu(_,o)||(a?t.p:t)}}}return zi(n,s)},oh=function(t,e,n){var i=t.labels,s=gn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},vn=function(t,e,n){var i=t.vars,s=i[e],a=he,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ri.length&&so(),o&&(he=o),u=l?s.apply(c,l):s.call(c),he=a,u},Is=function(t){return Ui(t),t.scrollTrigger&&t.scrollTrigger.kill(!!De),t.progress()<1&&vn(t,"onInterrupt"),t},Gr,yp=[],Mp=function(t){if(!qc()){yp.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=se(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Js,render:eu,add:Zc,kill:m1,modifier:p1,rawVars:0},a={targetTest:0,get:0,getSetter:tu,aliases:{},register:0};if(hs(),t!==i){if(en[e])return;xn(i,xn(ao(t,s),a)),_r(i.prototype,_r(s,ao(t,a))),en[i.prop=e]=i,t.targetTest&&(Ka.push(i),jc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ip(e,i),t.register&&t.register($e,i,Ye)},$t=255,Os={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},wl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},Sp=function(t,e,n){var i=t?di(t)?[t>>16,t>>8&$t,t&$t]:0:Os.black,s,a,o,l,c,u,f,h,d,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Os[t])i=Os[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(tc),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=wl(l+1/3,s,a),i[1]=wl(l,s,a),i[2]=wl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(Jd),n&&i.length<4&&(i[3]=1),i}else i=t.match(tc)||Os.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/$t,a=i[1]/$t,o=i[2]/$t,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},bp=function(t){var e=[],n=[],i=-1;return t.split(Di).forEach(function(s){var a=s.match(Vr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},lh=function(t,e,n){var i="",s=(t+i).match(Di),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=Sp(h,e,1))&&a+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=bp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Di,"1").split(Vr),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Di),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Di=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Os)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),t1=/hsl[a]?\(/,wp=function(t){var e=t.join(" "),n;if(Di.lastIndex=0,Di.test(e))return n=t1.test(e),t[1]=lh(t[1],n),t[0]=lh(t[0],n,bp(t[1])),!0},ta,sn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(m){var p=r()-i,b=m===!0,y,v,S,C;if(p>t&&(n+=p-e),i+=p,S=i-n,y=S-a,(y>0||b)&&(C=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,a+=y+(y>=s?4:s-y),v=1),b||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](S,h,C,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){ep&&(!ec&&qc()&&(pn=ec=window,Xc=pn.document||{},ln.gsap=$e,(pn.gsapVersions||(pn.gsapVersions=[])).push($e.version),np(io||pn.GreenSockGlobals||!pn.gsap&&pn||{}),u=pn.requestAnimationFrame,yp.forEach(Mp)),l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},ta=1,_(2))},sleep:function(){(u?pn.cancelAnimationFrame:clearTimeout)(l),ta=0,c=Js},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,b){var y=p?function(v,S,C,P){m(v,S,C,P),f.remove(y)}:m;return f.remove(m),o[b?"unshift":"push"](y),hs(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),hs=function(){return!ta&&sn.wake()},Gt={},e1=/^[\d.\-M][\d.\-,\s]/,n1=/["']/g,i1=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(n1,"").trim():+c,i=l.substr(o+1).trim();return e},r1=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},s1=function(t){var e=(t+"").split("("),n=Gt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[i1(e[1])]:r1(t).split(",").map(op)):Gt._CE&&e1.test(t)?Gt._CE("",t):n},Ep=function(t){return function(e){return 1-t(1-e)}},Tp=function r(t,e){for(var n=t._first,i;n;)n instanceof Ve?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},hr=function(t,e){return t&&(se(t)?t:Gt[t]||s1(t))||e},yr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return Xe(t,function(o){Gt[o]=ln[o]=s,Gt[a=o.toLowerCase()]=n;for(var l in s)Gt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Gt[o+"."+l]=s[l]}),s},Ap=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},El=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Ql*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Iw((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Ap(o);return s=Ql/s,l.config=function(c,u){return r(t,c,u)},l},Tl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Ap(n);return i.config=function(s){return r(t,s)},i};Xe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;yr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Gt.Linear.easeNone=Gt.none=Gt.Linear.easeIn;yr("Elastic",El("in"),El("out"),El());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};yr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);yr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});yr("Circ",function(r){return-(Kd(1-r*r)-1)});yr("Sine",function(r){return r===1?1:-Dw(r*Lw)+1});yr("Back",Tl("in"),Tl("out"),Tl());Gt.SteppedEase=Gt.steps=ln.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Kt;return function(o){return((i*ua(0,a,o)|0)+s)*n}}};cs.ease=Gt["quad.out"];Xe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return $c+=r+","+r+"Params,"});var Cp=function(t,e){this.id=Rw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sp,this.set=e?e.getSetter:tu},ds=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,fs(this,+e.duration,1,1),this.data=e.data,he&&(this._ctx=he,he.data.push(this)),ta||sn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,fs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Do(this,n),!s._dp||s.parent||up(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Kt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ap(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+sh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+sh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?us(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Kt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?oo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Kt?0:this._rts,this.totalTime(ua(-Math.abs(this._delay),this._tDur,i),!0),Ro(this),Bw(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Kt&&(this._tTime-=Kt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(qe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?oo(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Nw);var i=De;return De=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),De=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ah(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ah(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(dn(this,n),qe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,qe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Kt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Kt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Kt)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this;return new Promise(function(s){var a=se(n)?n:lp,o=function(){var c=i.then;i.then=null,se(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Is(this)},r}();xn(ds.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Kt,_prom:0,_ps:!1,_rts:1});var Ve=function(r){$d(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=qe(n.sortChildren),ie&&qn(n.parent||ie,oi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fp(oi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return zs(0,arguments,this),this},e.from=function(i,s,a){return zs(1,arguments,this),this},e.fromTo=function(i,s,a,o){return zs(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Fs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new pe(i,s,dn(this,a),1),this},e.call=function(i,s,a){return qn(this,pe.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new pe(i,a,dn(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Fs(a).immediateRender=qe(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Fs(o).immediateRender=qe(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:be(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,m,p,b,y,v,S,C,P;if(this!==ie&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,y=this._ts,p=!y,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(C=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=be(u%m),u===l?(g=this._repeat,h=c):(g=~~(u/m),g&&g===u/m&&(h=c,g--),h>c&&(h=c)),S=us(this._tTime,m),!o&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),C&&g&1&&(h=c-h,P=1),g!==S&&!this._lock){var R=C&&S&1,x=R===(C&&g&1);if(g<S&&(R=!R),o=R?0:c,this._lock=1,this.render(o||(P?0:be(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Tp(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=Ww(this,be(o),be(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!g&&(vn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-Kt);break}}d=_}else{d=this._last;for(var E=i<0?i:h;d;){if(_=d._prev,(d._act||E<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,a||De&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=E?-Kt:Kt);break}}d=_}}if(b&&!s&&(this.pause(),b.render(h>=o?0:-Kt)._zTime=h>=o?1:-1,this._ts))return this._start=v,Ro(this),this.render(i,s,a);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(di(s)||(s=dn(this,s,i)),!(i instanceof ds)){if(Ie(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(se(i))i=pe.delayedCall(0,i);else return this}return this!==i?qn(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-gn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof pe?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Se(i)?this.removeLabel(i):se(i)?this.killTweensOf(i):(Lo(this,i),i===this._recent&&(this._recent=this._last),fr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(sn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=dn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=pe.delayedCall(0,s||Js,a);return o.data="isPause",this._hasPause=1,qn(this,o,dn(this,i))},e.removePause=function(i){var s=this._first;for(i=dn(this,i);s;)s._start===i&&s.data==="isPause"&&Ui(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Ei!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=_n(i),l=this._first,c=di(s),u;l;)l instanceof pe?Fw(l._targets,o)&&(c?(!Ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=dn(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=pe.to(a,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Kt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==m&&fs(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,xn({startAt:{time:dn(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),oh(this,dn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),oh(this,dn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Kt)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return fr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),fr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=gn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,qn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;fs(a,a===ie&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(ie._ts&&(ap(ie,oo(i,ie)),rp=sn.frame),sn.frame>=ih){ih+=on.autoSleep||120;var s=ie._first;if((!s||!s._ts)&&on.autoSleep&&sn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||sn.sleep()}}},t}(ds);xn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var a1=function(t,e,n,i,s,a,o){var l=new Ye(this._pt,t,e,0,1,Op,null,s),c=0,u=0,f,h,d,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Qs(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),h=n.match(Sl)||[];f=Sl.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?Jr(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=Sl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Qd.test(i)||p)&&(l.e=0),this._pt=l,l},Zc=function(t,e,n,i,s,a,o,l,c,u){se(i)&&(i=i(s||0,t,a));var f=t[e],h=n!=="get"?n:se(f)?c?t[e.indexOf("set")||!se(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=se(f)?c?f1:Dp:Qc,_;if(Se(i)&&(~i.indexOf("random(")&&(i=Qs(i)),i.charAt(1)==="="&&(_=Jr(h,i)+(Re(h)||0),(_||_===0)&&(i=_))),!u||h!==i||lc)return!isNaN(h*i)&&i!==""?(_=new Ye(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?d1:Ip,0,d),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&Yc(e,i),a1.call(this,t,e,h,i,d,l||on.stringFilter,c))},o1=function(t,e,n,i,s){if(se(t)&&(t=ks(t,s,e,n,i)),!Zn(t)||t.style&&t.nodeType||Ie(t)||Zd(t))return Se(t)?ks(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=ks(t[o],s,e,n,i);return a},Pp=function(t,e,n,i,s,a){var o,l,c,u;if(en[t]&&(o=new en[t]).init(s,o.rawVars?e[t]:o1(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Ye(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Gr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ei,lc,Jc=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,d=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,p=t._startAt,b=t._targets,y=t.parent,v=y&&y.data==="nested"?y.vars.targets:b,S=t._overwrite==="auto"&&!Gc,C=t.timeline,P,R,x,E,q,Y,U,z,W,$,H,V,lt;if(C&&(!_||!s)&&(s="none"),t._ease=hr(s,cs.ease),t._yEase=d?Ep(hr(d===!0?s:d,cs.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!C&&!!i.runBackwards,!C||_&&!i.stagger){if(z=b[0]?ur(b[0]).harness:0,V=z&&i[z.prop],P=ao(i,jc),p&&(p._zTime<0&&p.progress(1),e<0&&h&&o&&!g?p.render(-1,!0):p.revert(h&&m?$a:Uw),p._lazy=0),a){if(Ui(t._startAt=pe.set(b,xn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&qe(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De||!o&&!g)&&t._startAt.revert($a),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!p){if(e&&(o=!1),x=xn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&qe(l),immediateRender:o,stagger:0,parent:y},P),V&&(x[z.prop]=V),Ui(t._startAt=pe.set(b,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(De?t._startAt.revert($a):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Kt,Kt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&qe(l)||l&&!m,R=0;R<b.length;R++){if(q=b[R],U=q._gsap||Kc(b)[R]._gsap,t._ptLookup[R]=$={},nc[U.id]&&Ri.length&&so(),H=v===b?R:v.indexOf(q),z&&(W=new z).init(q,V||P,t,H,v)!==!1&&(t._pt=E=new Ye(t._pt,q,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(ot){$[ot]=E}),W.priority&&(Y=1)),!z||V)for(x in P)en[x]&&(W=Pp(x,P,t,H,q,v))?W.priority&&(Y=1):$[x]=E=Zc.call(t,q,x,"get",P[x],H,v,0,i.stringFilter);t._op&&t._op[R]&&t.kill(q,t._op[R]),S&&t._pt&&(Ei=t,ie.killTweensOf(q,$,t.globalTime(e)),lt=!t.parent,Ei=0),t._pt&&l&&(nc[U.id]=1)}Y&&Up(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!lt,_&&e<=0&&C.render(gn,!0,!0)},l1=function(t,e,n,i,s,a,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,f,h;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return lc=1,t.vars[e]="+=0",Jc(t,o),lc=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=ce(n)+Re(u.e)),u.b&&(u.b=c.s+Re(u.b))},c1=function(t,e){var n=t[0]?ur(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=_r({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},u1=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(Ie(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},ks=function(t,e,n,i,s){return se(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?Qs(t):t},Lp=$c+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Rp={};Xe(Lp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Rp[r]=1});var pe=function(r){$d(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Fs(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||ie,y=(Ie(n)||Zd(n)?di(n[0]):"length"in i)?[n]:_n(n),v,S,C,P,R,x,E,q;if(o._targets=y.length?Kc(y):ro("GSAP target "+n+" not found. https://greensock.com",!on.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||Ha(c)||Ha(u)){if(i=o.vars,v=o.timeline=new Ve({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:y}),v.kill(),v.parent=v._dp=oi(o),v._start=0,h||Ha(c)||Ha(u)){if(P=y.length,E=h&&mp(h),Zn(h))for(R in h)~Lp.indexOf(R)&&(q||(q={}),q[R]=h[R]);for(S=0;S<P;S++)C=ao(i,Rp),C.stagger=0,p&&(C.yoyoEase=p),q&&_r(C,q),x=y[S],C.duration=+ks(c,oi(o),S,x,y),C.delay=(+ks(u,oi(o),S,x,y)||0)-o._delay,!h&&P===1&&C.delay&&(o._delay=u=C.delay,o._start+=u,C.delay=0),v.to(x,C,E?E(S,x,y):0),v._ease=Gt.none;v.duration()?c=u=0:o.timeline=0}else if(_){Fs(xn(v.vars.defaults,{ease:"none"})),v._ease=hr(_.ease||i.ease||"none");var Y=0,U,z,W;if(Ie(_))_.forEach(function($){return v.to(y,$,">")}),v.duration();else{C={};for(R in _)R==="ease"||R==="easeEach"||u1(R,_[R],C,_.easeEach);for(R in C)for(U=C[R].sort(function($,H){return $.t-H.t}),Y=0,S=0;S<U.length;S++)z=U[S],W={ease:z.e,duration:(z.t-(S?U[S-1].t:0))/100*c},W[R]=z.v,v.to(y,W,Y),Y+=W.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!Gc&&(Ei=oi(o),ie.killTweensOf(y),Ei=0),qn(b,oi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===be(b._time)&&qe(f)&&Hw(oi(o))&&b.data!=="nested")&&(o._tTime=-Kt,o.render(Math.max(0,-u)||0)),m&&fp(oi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Kt&&!u?l:i<Kt?0:i,h,d,_,g,m,p,b,y,v;if(!c)Gw(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=be(f%g),f===l?(_=this._repeat,h=c):(_=~~(f/g),_&&_===f/g&&(h=c,_--),h>c&&(h=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,h=c-h),m=us(this._tTime,g),h===o&&!a&&this._initted)return this._tTime=f,this;_!==m&&(y&&this._yEase&&Tp(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=a=1,this.render(be(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(hp(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(h/c),this._from&&(this.ratio=b=1-b),h&&!o&&!s&&!_&&(vn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;y&&y.render(i<0?i:!h&&p?-Kt:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ic(this,i,s,a),vn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ic(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ui(this,1),!s&&!(u&&!o)&&(f||o||p)&&(vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o){ta||sn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Jc(this,l),c=this._ease(l/this._dur),l1(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Do(this,0),this.parent||cp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Is(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ei&&Ei.vars.overwrite!==!0)._first||Is(this),this.parent&&a!==this.timeline.totalDuration()&&fs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?_n(i):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&kw(o,l))return s==="all"&&(this._pt=0),Is(this);for(f=this._op=this._op||[],s!=="all"&&(Se(s)&&(g={},Xe(s,function(b){return g[b]=1}),s=g),s=c1(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Lo(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Is(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return zs(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return zs(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return ie.killTweensOf(i,s,a)},t}(ds);xn(pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Xe("staggerTo,staggerFrom,staggerFromTo",function(r){pe[r]=function(){var t=new Ve,e=sc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Qc=function(t,e,n){return t[e]=n},Dp=function(t,e,n){return t[e](n)},f1=function(t,e,n,i){return t[e](i.fp,n)},h1=function(t,e,n){return t.setAttribute(e,n)},tu=function(t,e){return se(t[e])?Dp:Wc(t[e])&&t.setAttribute?h1:Qc},Ip=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},d1=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Op=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},eu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},p1=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},m1=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Lo(this,e,"_pt"):e.dep||(n=1),e=i;return!n},g1=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Up=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},Ye=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Ip,this.d=l||this,this.set=c||Qc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=g1,this.m=n,this.mt=s,this.tween=i},r}();Xe($c+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return jc[r]=1});ln.TweenMax=ln.TweenLite=pe;ln.TimelineLite=ln.TimelineMax=Ve;ie=new Ve({sortChildren:!1,defaults:cs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});on.stringFilter=wp;var ps=[],Za={},_1=[],ch=0,Al=function(t){return(Za[t]||_1).map(function(e){return e()})},cc=function(){var t=Date.now(),e=[];t-ch>2&&(Al("matchMediaInit"),ps.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=pn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Al("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),ch=t,Al("matchMedia"))},Np=function(){function r(e,n){this.selector=n&&ac(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){se(n)&&(s=i,i=n,n=se);var a=this,o=function(){var c=he,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ac(s)),he=a,f=i.apply(a,arguments),se(f)&&a._r.push(f),he=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===se?o(a):n?a[n]=o:o},t.ignore=function(n){var i=he;he=null,n(this),he=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof pe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ds)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=ps.indexOf(this);~o&&ps.splice(o,1)}},t.revert=function(n){this.kill(n||{})},r}(),v1=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(n,i,s){Zn(n)||(n={matches:n});var a=new Np(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=pn.matchMedia(n[c]),l&&(ps.indexOf(a)<0&&ps.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(cc):l.addEventListener("change",cc)));return u&&i(a),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),lo={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Mp(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return ie.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=_n(t)[0]);var s=ur(t||{}).get,a=n?lp:op;return n==="native"&&(n=""),t&&(e?a((en[e]&&en[e].get||s)(t,e,n,i)):function(o,l,c){return a((en[o]&&en[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=_n(t),t.length>1){var i=t.map(function(u){return $e.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var a=en[e],o=ur(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;Gr._pt=0,f.init(t,n?u+n:u,Gr,0,[t]),f.render(1,f),Gr._pt&&eu(1,Gr)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=$e.to(t,_r((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return ie.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=hr(t.ease,cs.ease)),rh(cs,t||{})},config:function(t){return rh(on,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!en[o]&&!ln[o]&&ro(e+" effect requires "+o+" plugin.")}),bl[e]=function(o,l,c){return n(_n(o),xn(l||{},s),c)},a&&(Ve.prototype[e]=function(o,l,c){return this.add(bl[e](o,Zn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Gt[t]=hr(e)},parseEase:function(t,e){return arguments.length?hr(t,e):Gt},getById:function(t){return ie.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,s;for(n.smoothChildTiming=qe(t.smoothChildTiming),ie.remove(n),n._dp=0,n._time=n._tTime=ie._time,i=ie._first;i;)s=i._next,(e||!(!i._dur&&i instanceof pe&&i.vars.onComplete===i._targets[0]))&&qn(n,i,i._start-i._delay),i=s;return qn(ie,n,0),n},context:function(t,e){return t?new Np(t,e):he},matchMedia:function(t){return new v1(t)},matchMediaRefresh:function(){return ps.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||cc()},addEventListener:function(t,e){var n=Za[t]||(Za[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Za[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Zw,wrapYoyo:Jw,distribute:mp,random:_p,snap:gp,normalize:Kw,getUnit:Re,clamp:Xw,splitColor:Sp,toArray:_n,selector:ac,mapRange:xp,pipe:jw,unitize:$w,interpolate:Qw,shuffle:pp},install:np,effects:bl,ticker:sn,updateRoot:Ve.updateRoot,plugins:en,globalTimeline:ie,core:{PropTween:Ye,globals:ip,Tween:pe,Timeline:Ve,Animation:ds,getCache:ur,_removeLinkedListItem:Lo,reverting:function(){return De},context:function(t){return t&&he&&(he.data.push(t),t._ctx=he),he},suppressOverwrites:function(t){return Gc=t}}};Xe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return lo[r]=pe[r]});sn.add(Ve.updateRoot);Gr=lo.to({},{duration:0});var x1=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},y1=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=x1(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Cl=function(t,e){return{name:t,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Se(s)&&(l={},Xe(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}y1(o,s)}}}},$e=lo.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)De?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Cl("roundProps",oc),Cl("modifiers"),Cl("snap",gp))||lo;pe.version=Ve.version=$e.version="3.11.5";ep=1;qc()&&hs();Gt.Power0;Gt.Power1;Gt.Power2;Gt.Power3;Gt.Power4;Gt.Linear;Gt.Quad;Gt.Cubic;Gt.Quart;Gt.Quint;Gt.Strong;Gt.Elastic;Gt.Back;Gt.SteppedEase;Gt.Bounce;Gt.Sine;Gt.Expo;Gt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var uh,Ti,Qr,nu,sr,fh,iu,M1=function(){return typeof window<"u"},pi={},Ji=180/Math.PI,ts=Math.PI/180,Fr=Math.atan2,hh=1e8,ru=/([A-Z])/g,S1=/(left|right|width|margin|padding|x)/i,b1=/[\s,\(]\S/,jn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},w1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},E1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},T1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},A1=function(t,e,n){return t.style[e]=n},C1=function(t,e,n){return t.style.setProperty(e,n)},P1=function(t,e,n){return t._gsap[e]=n},L1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},R1=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},D1=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},re="transform",Nn=re+"Origin",I1=function r(t,e){var n=this,i=this.target,s=i.style;if(t in pi){if(this.tfm=this.tfm||{},t!=="transform")t=jn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=li(i,a)}):this.tfm[t]=i._gsap.x?i._gsap[t]:li(i,t);else return jn.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(re)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,e,"")),t=re}(s||e)&&this.props.push(t,e,s[t])},kp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},O1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(ru,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=iu(),(!s||!s.isStart)&&!n[re]&&(kp(n),i.uncache=1)}},Bp=function(t,e){var n={target:t,props:[],revert:O1,save:I1};return t._gsap||$e.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Hp,fc=function(t,e){var n=Ti.createElementNS?Ti.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ti.createElement(t);return n.style?n:Ti.createElement(t)},Kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ru,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ms(e)||e,1)||""},dh="O,Moz,ms,Ms,Webkit".split(","),ms=function(t,e,n){var i=e||sr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(dh[a]+t in s););return a<0?null:(a===3?"ms":a>=0?dh[a]:"")+t},hc=function(){M1()&&window.document&&(uh=window,Ti=uh.document,Qr=Ti.documentElement,sr=fc("div")||{style:{}},fc("div"),re=ms(re),Nn=re+"Origin",sr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hp=!!ms("perspective"),iu=$e.core.reverting,nu=1)},Pl=function r(t){var e=fc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(Qr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Qr.removeChild(e),this.style.cssText=s,a},ph=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Vp=function(t){var e;try{e=t.getBBox()}catch{e=Pl.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Pl||(e=Pl.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+ph(t,["x","cx","x1"])||0,y:+ph(t,["y","cy","y1"])||0,width:0,height:0}:e},Gp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Vp(t))},ea=function(t,e){if(e){var n=t.style;e in pi&&e!==Nn&&(e=re),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(ru,"-$1").toLowerCase())):n.removeAttribute(e)}},Ai=function(t,e,n,i,s,a){var o=new Ye(t._pt,e,n,0,1,a?zp:Fp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},mh={deg:1,rad:1,turn:1},U1={grid:1,flex:1},Ni=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=sr.style,l=S1.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;return i===a||!s||mh[i]||mh[a]?s:(a!=="px"&&!h&&(s=r(t,e,n,"px")),p=t.getCTM&&Gp(t),(d||a==="%")&&(pi[e]||~e.indexOf("adius"))?(_=p?t.getBBox()[l?"width":"height"]:t[u],ce(d?s/_*f:s/100*_)):(o[l?"width":"height"]=f+(h?a:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ti||!g.appendChild)&&(g=Ti.body),m=g._gsap,m&&d&&m.width&&l&&m.time===sn.time&&!m.uncache?ce(s/m.width*f):((d||a==="%")&&!U1[Kn(g,"display")]&&(o.position=Kn(t,"position")),g===t&&(o.position="static"),g.appendChild(sr),_=sr[u],g.removeChild(sr),o.position="absolute",l&&d&&(m=ur(g),m.time=sn.time,m.width=g[u]),ce(h?_*s/f:_&&s?f/_*s:0))))},li=function(t,e,n,i){var s;return nu||hc(),e in jn&&e!=="transform"&&(e=jn[e],~e.indexOf(",")&&(e=e.split(",")[0])),pi[e]&&e!=="transform"?(s=ia(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:uo(Kn(t,Nn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=co[e]&&co[e](t,e,n)||Kn(t,e)||sp(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ni(t,e,s,n)+n:s},N1=function(t,e,n,i){if(!n||n==="none"){var s=ms(e,t,1),a=s&&Kn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Kn(t,"borderTopColor"))}var o=new Ye(this._pt,t.style,e,0,1,Op),l=0,c=0,u,f,h,d,_,g,m,p,b,y,v,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Kn(t,e)||i,t.style[e]=n),u=[n,i],wp(u),n=u[0],i=u[1],h=n.match(Vr)||[],S=i.match(Vr)||[],S.length){for(;f=Vr.exec(i);)m=f[0],b=i.substring(l,f.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Jr(d,m)+v),p=parseFloat(m),y=m.substr((p+"").length),l=Vr.lastIndex-y.length,y||(y=y||on.units[e]||v,l===i.length&&(i+=y,o.e+=y)),v!==y&&(d=Ni(t,e,g,y)||0),o._pt={_next:o._pt,p:b||c===1?b:",",s:d,c:p-d,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?zp:Fp;return Qd.test(i)&&(o.e=0),this._pt=o,o},gh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},F1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=gh[n]||n,e[1]=gh[i]||i,e.join(" ")},z1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],pi[o]&&(l=1,o=o==="transformOrigin"?Nn:re),ea(n,o);l&&(ea(n,re),a&&(a.svg&&n.removeAttribute("transform"),ia(n,1),a.uncache=1,kp(i)))}},co={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new Ye(t._pt,e,n,0,0,z1);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},na=[1,0,0,1,0,0],Wp={},qp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},_h=function(t){var e=Kn(t,re);return qp(e)?na:e.substr(7).match(Jd).map(ce)},su=function(t,e){var n=t._gsap||ur(t),i=t.style,s=_h(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?na:s):(s===na&&!t.offsetParent&&t!==Qr&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Qr.appendChild(t)),s=_h(t),l?i.display=l:ea(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):Qr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dc=function(t,e,n,i,s,a){var o=t._gsap,l=s||su(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],y=e.split(" "),v=parseFloat(y[0])||0,S=parseFloat(y[1])||0,C,P,R,x;n?l!==na&&(P=d*m-_*g)&&(R=v*(m/P)+S*(-g/P)+(g*b-m*p)/P,x=v*(-_/P)+S*(d/P)-(d*b-_*p)/P,v=R,S=x):(C=Vp(t),v=C.x+(~y[0].indexOf("%")?v/100*C.width:v),S=C.y+(~(y[1]||y[0]).indexOf("%")?S/100*C.height:S)),i||i!==!1&&o.smooth?(p=v-c,b=S-u,o.xOffset=f+(p*d+b*g)-p,o.yOffset=h+(p*_+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=S,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Nn]="0px 0px",a&&(Ai(a,o,"xOrigin",c,v),Ai(a,o,"yOrigin",u,S),Ai(a,o,"xOffset",f,o.xOffset),Ai(a,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",v+" "+S)},ia=function(t,e){var n=t._gsap||new Cp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Kn(t,Nn)||"0",u,f,h,d,_,g,m,p,b,y,v,S,C,P,R,x,E,q,Y,U,z,W,$,H,V,lt,ot,Et,ut,D,O,K;return u=f=h=g=m=p=b=y=v=0,d=_=1,n.svg=!!(t.getCTM&&Gp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[re]!=="none"?l[re]:"")),i.scale=i.rotate=i.translate="none"),P=su(t,n.svg),n.svg&&(n.uncache?(V=t.getBBox(),c=n.xOrigin-V.x+"px "+(n.yOrigin-V.y)+"px",H=""):H=!e&&t.getAttribute("data-svg-origin"),dc(t,H||c,!!H||n.originIsAbsolute,n.smooth!==!1,P)),S=n.xOrigin||0,C=n.yOrigin||0,P!==na&&(q=P[0],Y=P[1],U=P[2],z=P[3],u=W=P[4],f=$=P[5],P.length===6?(d=Math.sqrt(q*q+Y*Y),_=Math.sqrt(z*z+U*U),g=q||Y?Fr(Y,q)*Ji:0,b=U||z?Fr(U,z)*Ji+g:0,b&&(_*=Math.abs(Math.cos(b*ts))),n.svg&&(u-=S-(S*q+C*U),f-=C-(S*Y+C*z))):(K=P[6],D=P[7],ot=P[8],Et=P[9],ut=P[10],O=P[11],u=P[12],f=P[13],h=P[14],R=Fr(K,ut),m=R*Ji,R&&(x=Math.cos(-R),E=Math.sin(-R),H=W*x+ot*E,V=$*x+Et*E,lt=K*x+ut*E,ot=W*-E+ot*x,Et=$*-E+Et*x,ut=K*-E+ut*x,O=D*-E+O*x,W=H,$=V,K=lt),R=Fr(-U,ut),p=R*Ji,R&&(x=Math.cos(-R),E=Math.sin(-R),H=q*x-ot*E,V=Y*x-Et*E,lt=U*x-ut*E,O=z*E+O*x,q=H,Y=V,U=lt),R=Fr(Y,q),g=R*Ji,R&&(x=Math.cos(R),E=Math.sin(R),H=q*x+Y*E,V=W*x+$*E,Y=Y*x-q*E,$=$*x-W*E,q=H,W=V),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=ce(Math.sqrt(q*q+Y*Y+U*U)),_=ce(Math.sqrt($*$+K*K)),R=Fr(W,$),b=Math.abs(R)>2e-4?R*Ji:0,v=O?1/(O<0?-O:O):0),n.svg&&(H=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!qp(Kn(t,re)),H&&t.setAttribute("transform",H))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=ce(d),n.scaleY=ce(_),n.rotation=ce(g)+o,n.rotationX=ce(m)+o,n.rotationY=ce(p)+o,n.skewX=b+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Nn]=uo(c)),n.xOffset=n.yOffset=0,n.force3D=on.force3D,n.renderTransform=n.svg?B1:Hp?Xp:k1,n.uncache=0,n},uo=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ll=function(t,e,n){var i=Re(e);return ce(parseFloat(e)+parseFloat(Ni(t,"x",n+"px",i)))+i},k1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Xp(t,e)},Yi="0deg",Cs="0px",ji=") ",Xp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,y=n.zOrigin,v="",S=p==="auto"&&t&&t!==1||p===!0;if(y&&(f!==Yi||u!==Yi)){var C=parseFloat(u)*ts,P=Math.sin(C),R=Math.cos(C),x;C=parseFloat(f)*ts,x=Math.cos(C),a=Ll(b,a,P*x*-y),o=Ll(b,o,-Math.sin(C)*-y),l=Ll(b,l,R*x*-y+y)}m!==Cs&&(v+="perspective("+m+ji),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(S||a!==Cs||o!==Cs||l!==Cs)&&(v+=l!==Cs||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ji),c!==Yi&&(v+="rotate("+c+ji),u!==Yi&&(v+="rotateY("+u+ji),f!==Yi&&(v+="rotateX("+f+ji),(h!==Yi||d!==Yi)&&(v+="skew("+h+", "+d+ji),(_!==1||g!==1)&&(v+="scale("+_+", "+g+ji),b.style[re]=v||"translate(0, 0)"},B1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,y=parseFloat(a),v=parseFloat(o),S,C,P,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ts,c*=ts,S=Math.cos(l)*f,C=Math.sin(l)*f,P=Math.sin(l-c)*-h,R=Math.cos(l-c)*h,c&&(u*=ts,x=Math.tan(c-u),x=Math.sqrt(1+x*x),P*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),S*=x,C*=x)),S=ce(S),C=ce(C),P=ce(P),R=ce(R)):(S=f,R=h,C=P=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=Ni(d,"x",a,"px"),v=Ni(d,"y",o,"px")),(_||g||m||p)&&(y=ce(y+_-(_*S+g*P)+m),v=ce(v+g-(_*C+g*R)+p)),(i||s)&&(x=d.getBBox(),y=ce(y+i/100*x.width),v=ce(v+s/100*x.height)),x="matrix("+S+","+C+","+P+","+R+","+y+","+v+")",d.setAttribute("transform",x),b&&(d.style[re]=x)},H1=function(t,e,n,i,s){var a=360,o=Se(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ji:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*hh)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*hh)%a-~~(c/a)*a)),t._pt=h=new Ye(t._pt,e,n,i,c,w1),h.e=u,h.u="deg",t._props.push(n),h},vh=function(t,e){for(var n in e)t[n]=e[n];return t},V1=function(t,e,n){var i=vh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[re]=e,o=ia(n,1),ea(n,re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[re],a[re]=e,o=ia(n,1),a[re]=c);for(l in pi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Re(c),_=Re(u),f=d!==_?Ni(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new Ye(t._pt,o,l,f,h-f,uc),t._pt.u=_||0,t._props.push(l));vh(o,i)};Xe("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});co[t>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return li(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var Yp={name:"css",register:hc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,b,y,v,S,C,P,R;nu||hc(),this.styles=this.styles||Bp(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(en[g]&&Pp(g,e,n,i,t,s)))){if(d=typeof u,_=co[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Qs(u)),_)_(this,t,g,u,n)&&(P=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Di.lastIndex=0,Di.test(c)||(m=Re(c),p=Re(u)),p?m!==p&&(c=Ni(t,g,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Se(c)&&~c.indexOf("random(")&&(c=Qs(c)),Re(c+"")||(c+=on.units[g]||Re(li(t,g))||""),(c+"").charAt(1)==="="&&(c=li(t,g))):c=li(t,g),h=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),g in jn&&(g==="autoAlpha"&&(h===1&&li(t,"visibility")==="hidden"&&f&&(h=0),R.push("visibility",0,o.visibility),Ai(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=jn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in pi,y){if(this.styles.save(g),v||(S=t._gsap,S.renderTransform&&!e.parseTransform||ia(t,e.parseTransform),C=e.smoothOrigin!==!1&&S.smooth,v=this._pt=new Ye(this._pt,o,re,0,1,S.renderTransform,S,0,-1),v.dep=1),g==="scale")this._pt=new Ye(this._pt,S,"scaleY",S.scaleY,(b?Jr(S.scaleY,b+f):f)-S.scaleY||0,uc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Nn,0,o[Nn]),u=F1(u),S.svg?dc(t,u,0,C,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==S.zOrigin&&Ai(this,S,"zOrigin",S.zOrigin,p),Ai(this,o,g,uo(c),uo(u)));continue}else if(g==="svgOrigin"){dc(t,u,1,C,0,this);continue}else if(g in Wp){H1(this,S,g,h,b?Jr(h,b+u):u);continue}else if(g==="smoothOrigin"){Ai(this,S,"smooth",S.smooth,u);continue}else if(g==="force3D"){S[g]=u;continue}else if(g==="transform"){V1(this,u,t);continue}}else g in o||(g=ms(g)||g);if(y||(f||f===0)&&(h||h===0)&&!b1.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),p=Re(u)||(g in on.units?on.units[g]:m),m!==p&&(h=Ni(t,g,c,p)),this._pt=new Ye(this._pt,y?S:o,g,h,(b?Jr(h,b+f):f)-h,!y&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?T1:uc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=E1);else if(g in o)N1.call(this,t,g,c,b?b+u:u);else if(g in t)this.add(t,g,c||t[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Yc(g,u);continue}y||(g in o?R.push(g,0,o[g]):R.push(g,1,c||t[g])),a.push(g)}}P&&Up(this)},render:function(t,e){if(e.tween._time||!iu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:li,aliases:jn,getSetter:function(t,e,n){var i=jn[e];return i&&i.indexOf(",")<0&&(e=i),e in pi&&e!==Nn&&(t._gsap.x||li(t,"x"))?n&&fh===n?e==="scale"?L1:P1:(fh=n||{})&&(e==="scale"?R1:D1):t.style&&!Wc(t.style[e])?A1:~e.indexOf("-")?C1:tu(t,e)},core:{_removeProperty:ea,_getMatrix:su}};$e.utils.checkPrefix=ms;$e.core.getStyleSaver=Bp;(function(r,t,e,n){var i=Xe(r+","+t+","+e,function(s){pi[s]=1});Xe(t,function(s){on.units[s]="deg",Wp[s]=1}),jn[i[13]]=r+","+t,Xe(n,function(s){var a=s.split(":");jn[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Xe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){on.units[r]="px"});$e.registerPlugin(Yp);var pc=$e.registerPlugin(Yp)||$e;pc.core.Tween;const G1=r=>(vr("data-v-9b9c1aba"),r=r(),xr(),r),W1=G1(()=>Rt("div",{class:"cursor"},null,-1)),q1={"data-scroll-container":""},X1=yn({__name:"App",setup(r){return yo(()=>{function t(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(l=>navigator.userAgent.match(l))}var e=document.querySelector(".cursor"),n=document.querySelectorAll(".cursor-scale"),i=document.querySelector(".c-scrollbar_thumb"),s=0,a=0;t()&&(e.style.display="none"),pc.to({},.016,{repeat:-1,onRepeat:function(){pc.set(e,{css:{left:s,top:a}})}}),window.addEventListener("mousemove",function(o){s=o.clientX,a=o.clientY}),i.addEventListener("mouseleave",()=>{e.classList.remove("smallCursor")}),i.addEventListener("mousemove",()=>{e.classList.add("smallCursor")}),n.forEach(o=>{o.addEventListener("mouseleave",()=>{e.classList.remove("grow")}),o.addEventListener("mousemove",()=>{e.classList.add("grow")})})}),(t,e)=>(gi(),_i(Hn,null,[W1,we(Pw),Rt("div",q1,[we($b),we(KS),we(ow),we(bw)])],64))}});const Y1=Jn(X1,[["__scopeId","data-v-9b9c1aba"]]),j1={created(){let r=window.performance.timing,t=Math.abs(r.loadEventEnd-r.navigationStart);this.loadTime=t/1e3%60*100,this.doProgress()},methods:{doProgress(){let r=this.loadTime/100;this.interval=setInterval(()=>{this.loadingPercent++},r)}},computed:{loaded(){return this.loadingPercent+"%"}},watch:{loadingPercent(r){r>=100&&clearInterval(this.interval)}},data(){return{loadingPercent:0,loadTime:0,interval:null}}};const jp=w_(Y1);jp.mixin(j1);jp.mount("#app");
