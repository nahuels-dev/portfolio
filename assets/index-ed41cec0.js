(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Po(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Ro(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?xu(i):Ro(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ht(n))return n;if(st(n))return n}}const gu=/;(?![^(]*\))/g,_u=/:([^]+)/,vu=/\/\*.*?\*\//gs;function xu(n){const e={};return n.replace(vu,"").split(gu).forEach(t=>{if(t){const i=t.split(_u);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ui(n){let e="";if(ht(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=Ui(n[t]);i&&(e+=i+" ")}else if(st(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Mu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Su=Po(Mu);function Jl(n){return!!n||n===""}const Ze={},Ci=[],Zt=()=>{},yu=()=>!1,bu=/^on[^a-z]/,cs=n=>bu.test(n),Do=n=>n.startsWith("onUpdate:"),wt=Object.assign,Io=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},wu=Object.prototype.hasOwnProperty,ke=(n,e)=>wu.call(n,e),Oe=Array.isArray,ir=n=>us(n)==="[object Map]",Eu=n=>us(n)==="[object Set]",Fe=n=>typeof n=="function",ht=n=>typeof n=="string",Uo=n=>typeof n=="symbol",st=n=>n!==null&&typeof n=="object",Ql=n=>st(n)&&Fe(n.then)&&Fe(n.catch),Tu=Object.prototype.toString,us=n=>Tu.call(n),Au=n=>us(n).slice(8,-1),Cu=n=>us(n)==="[object Object]",No=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Jr=Po(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Lu=/-(\w)/g,Ni=fs(n=>n.replace(Lu,(e,t)=>t?t.toUpperCase():"")),Pu=/\B([A-Z])/g,ki=fs(n=>n.replace(Pu,"-$1").toLowerCase()),ec=fs(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cs=fs(n=>n?`on${ec(n)}`:""),or=(n,e)=>!Object.is(n,e),Ls=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ss=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Ru=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let la;const Du=()=>la||(la=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let qt;class Iu{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qt,!e&&qt&&(this.index=(qt.scopes||(qt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=qt;try{return qt=this,e()}finally{qt=t}}}on(){qt=this}off(){qt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Uu(n,e=qt){e&&e.active&&e.effects.push(n)}function Nu(){return qt}const Fo=n=>{const e=new Set(n);return e.w=0,e.n=0,e},tc=n=>(n.w&Un)>0,nc=n=>(n.n&Un)>0,Fu=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Un},Ou=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];tc(r)&&!nc(r)?r.delete(n):e[t++]=r,r.w&=~Un,r.n&=~Un}e.length=t}},uo=new WeakMap;let er=0,Un=1;const fo=30;let jt;const ni=Symbol(""),ho=Symbol("");class Oo{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Uu(this,i)}run(){if(!this.active)return this.fn();let e=jt,t=Rn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=jt,jt=this,Rn=!0,Un=1<<++er,er<=fo?Fu(this):ca(this),this.fn()}finally{er<=fo&&Ou(this),Un=1<<--er,jt=this.parent,Rn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jt===this?this.deferStop=!0:this.active&&(ca(this),this.onStop&&this.onStop(),this.active=!1)}}function ca(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Rn=!0;const ic=[];function Wi(){ic.push(Rn),Rn=!1}function qi(){const n=ic.pop();Rn=n===void 0?!0:n}function Pt(n,e,t){if(Rn&&jt){let i=uo.get(n);i||uo.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=Fo()),rc(r)}}function rc(n,e){let t=!1;er<=fo?nc(n)||(n.n|=Un,t=!tc(n)):t=!n.has(jt),t&&(n.add(jt),jt.deps.push(n))}function Sn(n,e,t,i,r,s){const a=uo.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Oe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Oe(n)?No(t)&&o.push(a.get("length")):(o.push(a.get(ni)),ir(n)&&o.push(a.get(ho)));break;case"delete":Oe(n)||(o.push(a.get(ni)),ir(n)&&o.push(a.get(ho)));break;case"set":ir(n)&&o.push(a.get(ni));break}if(o.length===1)o[0]&&po(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);po(Fo(l))}}function po(n,e){const t=Oe(n)?n:[...n];for(const i of t)i.computed&&ua(i);for(const i of t)i.computed||ua(i)}function ua(n,e){(n!==jt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const zu=Po("__proto__,__v_isRef,__isVue"),sc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Uo)),Bu=zo(),Hu=zo(!1,!0),Gu=zo(!0),fa=Vu();function Vu(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=qe(this);for(let s=0,a=this.length;s<a;s++)Pt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Wi();const i=qe(this)[e].apply(this,t);return qi(),i}}),n}function ku(n){const e=qe(this);return Pt(e,"has",n),e.hasOwnProperty(n)}function zo(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?of:uc:e?cc:lc).get(i))return i;const a=Oe(i);if(!n){if(a&&ke(fa,r))return Reflect.get(fa,r,s);if(r==="hasOwnProperty")return ku}const o=Reflect.get(i,r,s);return(Uo(r)?sc.has(r):zu(r))||(n||Pt(i,"get",r),e)?o:rt(o)?a&&No(r)?o:o.value:st(o)?n?fc(o):Go(o):o}}const Wu=oc(),qu=oc(!0);function oc(n=!1){return function(t,i,r,s){let a=t[i];if(Fi(a)&&rt(a)&&!rt(r))return!1;if(!n&&(!os(r)&&!Fi(r)&&(a=qe(a),r=qe(r)),!Oe(t)&&rt(a)&&!rt(r)))return a.value=r,!0;const o=Oe(t)&&No(i)?Number(i)<t.length:ke(t,i),l=Reflect.set(t,i,r,s);return t===qe(s)&&(o?or(r,a)&&Sn(t,"set",i,r):Sn(t,"add",i,r)),l}}function Xu(n,e){const t=ke(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Sn(n,"delete",e,void 0),i}function ju(n,e){const t=Reflect.has(n,e);return(!Uo(e)||!sc.has(e))&&Pt(n,"has",e),t}function $u(n){return Pt(n,"iterate",Oe(n)?"length":ni),Reflect.ownKeys(n)}const ac={get:Bu,set:Wu,deleteProperty:Xu,has:ju,ownKeys:$u},Yu={get:Gu,set(n,e){return!0},deleteProperty(n,e){return!0}},Ku=wt({},ac,{get:Hu,set:qu}),Bo=n=>n,ds=n=>Reflect.getPrototypeOf(n);function wr(n,e,t=!1,i=!1){n=n.__v_raw;const r=qe(n),s=qe(e);t||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:a}=ds(r),o=i?Bo:t?ko:ar;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Er(n,e=!1){const t=this.__v_raw,i=qe(t),r=qe(n);return e||(n!==r&&Pt(i,"has",n),Pt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Tr(n,e=!1){return n=n.__v_raw,!e&&Pt(qe(n),"iterate",ni),Reflect.get(n,"size",n)}function da(n){n=qe(n);const e=qe(this);return ds(e).has.call(e,n)||(e.add(n),Sn(e,"add",n,n)),this}function ha(n,e){e=qe(e);const t=qe(this),{has:i,get:r}=ds(t);let s=i.call(t,n);s||(n=qe(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?or(e,a)&&Sn(t,"set",n,e):Sn(t,"add",n,e),this}function pa(n){const e=qe(this),{has:t,get:i}=ds(e);let r=t.call(e,n);r||(n=qe(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Sn(e,"delete",n,void 0),s}function ma(){const n=qe(this),e=n.size!==0,t=n.clear();return e&&Sn(n,"clear",void 0,void 0),t}function Ar(n,e){return function(i,r){const s=this,a=s.__v_raw,o=qe(a),l=e?Bo:n?ko:ar;return!n&&Pt(o,"iterate",ni),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Cr(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),a=ir(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?Bo:e?ko:ar;return!e&&Pt(s,"iterate",l?ho:ni),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:o?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function En(n){return function(...e){return n==="delete"?!1:this}}function Zu(){const n={get(s){return wr(this,s)},get size(){return Tr(this)},has:Er,add:da,set:ha,delete:pa,clear:ma,forEach:Ar(!1,!1)},e={get(s){return wr(this,s,!1,!0)},get size(){return Tr(this)},has:Er,add:da,set:ha,delete:pa,clear:ma,forEach:Ar(!1,!0)},t={get(s){return wr(this,s,!0)},get size(){return Tr(this,!0)},has(s){return Er.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ar(!0,!1)},i={get(s){return wr(this,s,!0,!0)},get size(){return Tr(this,!0)},has(s){return Er.call(this,s,!0)},add:En("add"),set:En("set"),delete:En("delete"),clear:En("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Cr(s,!1,!1),t[s]=Cr(s,!0,!1),e[s]=Cr(s,!1,!0),i[s]=Cr(s,!0,!0)}),[n,t,e,i]}const[Ju,Qu,ef,tf]=Zu();function Ho(n,e){const t=e?n?tf:ef:n?Qu:Ju;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(ke(t,r)&&r in i?t:i,r,s)}const nf={get:Ho(!1,!1)},rf={get:Ho(!1,!0)},sf={get:Ho(!0,!1)},lc=new WeakMap,cc=new WeakMap,uc=new WeakMap,of=new WeakMap;function af(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function lf(n){return n.__v_skip||!Object.isExtensible(n)?0:af(Au(n))}function Go(n){return Fi(n)?n:Vo(n,!1,ac,nf,lc)}function cf(n){return Vo(n,!1,Ku,rf,cc)}function fc(n){return Vo(n,!0,Yu,sf,uc)}function Vo(n,e,t,i,r){if(!st(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=lf(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Li(n){return Fi(n)?Li(n.__v_raw):!!(n&&n.__v_isReactive)}function Fi(n){return!!(n&&n.__v_isReadonly)}function os(n){return!!(n&&n.__v_isShallow)}function dc(n){return Li(n)||Fi(n)}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function hc(n){return ss(n,"__v_skip",!0),n}const ar=n=>st(n)?Go(n):n,ko=n=>st(n)?fc(n):n;function pc(n){Rn&&jt&&(n=qe(n),rc(n.dep||(n.dep=Fo())))}function mc(n,e){n=qe(n);const t=n.dep;t&&po(t)}function rt(n){return!!(n&&n.__v_isRef===!0)}function uf(n){return ff(n,!1)}function ff(n,e){return rt(n)?n:new df(n,e)}class df{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:qe(e),this._value=t?e:ar(e)}get value(){return pc(this),this._value}set value(e){const t=this.__v_isShallow||os(e)||Fi(e);e=t?e:qe(e),or(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ar(e),mc(this))}}function Et(n){return rt(n)?n.value:n}const hf={get:(n,e,t)=>Et(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return rt(r)&&!rt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function gc(n){return Li(n)?n:new Proxy(n,hf)}var _c;class pf{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[_c]=!1,this._dirty=!0,this.effect=new Oo(e,()=>{this._dirty||(this._dirty=!0,mc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=qe(this);return pc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_c="__v_isReadonly";function mf(n,e,t=!1){let i,r;const s=Fe(n);return s?(i=n,r=Zt):(i=n.get,r=n.set),new pf(i,r,s||!r,t)}function Dn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){hs(s,e,t)}return r}function Jt(n,e,t,i){if(Fe(n)){const s=Dn(n,e,t,i);return s&&Ql(s)&&s.catch(a=>{hs(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Jt(n[s],e,t,i));return r}function hs(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dn(l,null,10,[n,a,o]);return}}gf(n,t,r,i)}function gf(n,e,t,i=!0){console.error(n)}let lr=!1,mo=!1;const _t=[];let an=0;const Pi=[];let _n=null,Zn=0;const vc=Promise.resolve();let Wo=null;function _f(n){const e=Wo||vc;return n?e.then(this?n.bind(this):n):e}function vf(n){let e=an+1,t=_t.length;for(;e<t;){const i=e+t>>>1;cr(_t[i])<n?e=i+1:t=i}return e}function qo(n){(!_t.length||!_t.includes(n,lr&&n.allowRecurse?an+1:an))&&(n.id==null?_t.push(n):_t.splice(vf(n.id),0,n),xc())}function xc(){!lr&&!mo&&(mo=!0,Wo=vc.then(Sc))}function xf(n){const e=_t.indexOf(n);e>an&&_t.splice(e,1)}function Mf(n){Oe(n)?Pi.push(...n):(!_n||!_n.includes(n,n.allowRecurse?Zn+1:Zn))&&Pi.push(n),xc()}function ga(n,e=lr?an+1:0){for(;e<_t.length;e++){const t=_t[e];t&&t.pre&&(_t.splice(e,1),e--,t())}}function Mc(n){if(Pi.length){const e=[...new Set(Pi)];if(Pi.length=0,_n){_n.push(...e);return}for(_n=e,_n.sort((t,i)=>cr(t)-cr(i)),Zn=0;Zn<_n.length;Zn++)_n[Zn]();_n=null,Zn=0}}const cr=n=>n.id==null?1/0:n.id,Sf=(n,e)=>{const t=cr(n)-cr(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Sc(n){mo=!1,lr=!0,_t.sort(Sf);const e=Zt;try{for(an=0;an<_t.length;an++){const t=_t[an];t&&t.active!==!1&&Dn(t,null,14)}}finally{an=0,_t.length=0,Mc(),lr=!1,Wo=null,(_t.length||Pi.length)&&Sc()}}function yf(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:d,trim:h}=i[u]||Ze;h&&(r=t.map(p=>ht(p)?p.trim():p)),d&&(r=t.map(Ru))}let o,l=i[o=Cs(e)]||i[o=Cs(Ni(e))];!l&&s&&(l=i[o=Cs(ki(e))]),l&&Jt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Jt(c,n,6,r)}}function yc(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Fe(n)){const l=c=>{const u=yc(c,e,!0);u&&(o=!0,wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(st(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):wt(a,s),st(n)&&i.set(n,a),a)}function ps(n,e){return!n||!cs(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(n,e[0].toLowerCase()+e.slice(1))||ke(n,ki(e))||ke(n,e))}let ln=null,ms=null;function as(n){const e=ln;return ln=n,ms=n&&n.type.__scopeId||null,e}function Xo(n){ms=n}function jo(){ms=null}function bf(n,e=ln,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&wa(-1);const s=as(e);let a;try{a=n(...r)}finally{as(s),i._d&&wa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Ps(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:p,ctx:_,inheritAttrs:v}=n;let m,f;const C=as(n);try{if(t.shapeFlag&4){const S=r||i;m=sn(u.call(S,S,d,s,p,h,_)),f=l}else{const S=e;m=sn(S.length>1?S(s,{attrs:l,slots:o,emit:c}):S(s,null)),f=e.props?l:wf(l)}}catch(S){sr.length=0,hs(S,n,1),m=vt(ur)}let b=m;if(f&&v!==!1){const S=Object.keys(f),{shapeFlag:A}=b;S.length&&A&7&&(a&&S.some(Do)&&(f=Ef(f,a)),b=Oi(b,f))}return t.dirs&&(b=Oi(b),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&(b.transition=t.transition),m=b,as(C),m}const wf=n=>{let e;for(const t in n)(t==="class"||t==="style"||cs(t))&&((e||(e={}))[t]=n[t]);return e},Ef=(n,e)=>{const t={};for(const i in n)(!Do(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Tf(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?_a(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(a[h]!==i[h]&&!ps(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?_a(i,a,c):!0:!!a;return!1}function _a(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ps(t,s))return!0}return!1}function Af({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Cf=n=>n.__isSuspense;function Lf(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Mf(n)}function Pf(n,e){if(ot){let t=ot.provides;const i=ot.parent&&ot.parent.provides;i===t&&(t=ot.provides=Object.create(i)),t[n]=e}}function Qr(n,e,t=!1){const i=ot||ln;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Fe(e)?e.call(i.proxy):e}}const Lr={};function es(n,e,t){return bc(n,e,t)}function bc(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ze){const o=Nu()===(ot==null?void 0:ot.scope)?ot:null;let l,c=!1,u=!1;if(rt(n)?(l=()=>n.value,c=os(n)):Li(n)?(l=()=>n,i=!0):Oe(n)?(u=!0,c=n.some(b=>Li(b)||os(b)),l=()=>n.map(b=>{if(rt(b))return b.value;if(Li(b))return Ti(b);if(Fe(b))return Dn(b,o,2)})):Fe(n)?e?l=()=>Dn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return d&&d(),Jt(n,o,3,[h])}:l=Zt,e&&i){const b=l;l=()=>Ti(b())}let d,h=b=>{d=f.onStop=()=>{Dn(b,o,4)}},p;if(dr)if(h=Zt,e?t&&Jt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const b=Ed();p=b.__watcherHandles||(b.__watcherHandles=[])}else return Zt;let _=u?new Array(n.length).fill(Lr):Lr;const v=()=>{if(f.active)if(e){const b=f.run();(i||c||(u?b.some((S,A)=>or(S,_[A])):or(b,_)))&&(d&&d(),Jt(e,o,3,[b,_===Lr?void 0:u&&_[0]===Lr?[]:_,h]),_=b)}else f.run()};v.allowRecurse=!!e;let m;r==="sync"?m=v:r==="post"?m=()=>Tt(v,o&&o.suspense):(v.pre=!0,o&&(v.id=o.uid),m=()=>qo(v));const f=new Oo(l,m);e?t?v():_=f.run():r==="post"?Tt(f.run.bind(f),o&&o.suspense):f.run();const C=()=>{f.stop(),o&&o.scope&&Io(o.scope.effects,f)};return p&&p.push(C),C}function Rf(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?wc(i,n):()=>i[n]:n.bind(i,i);let s;Fe(e)?s=e:(s=e.handler,t=e);const a=ot;zi(this);const o=bc(r,s.bind(i),t);return a?zi(a):ii(),o}function wc(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ti(n,e){if(!st(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),rt(n))Ti(n.value,e);else if(Oe(n))for(let t=0;t<n.length;t++)Ti(n[t],e);else if(Eu(n)||ir(n))n.forEach(t=>{Ti(t,e)});else if(Cu(n))for(const t in n)Ti(n[t],e);return n}function yn(n){return Fe(n)?{setup:n,name:n.name}:n}const ts=n=>!!n.type.__asyncLoader,Ec=n=>n.type.__isKeepAlive;function Df(n,e){Tc(n,"a",e)}function If(n,e){Tc(n,"da",e)}function Tc(n,e,t=ot){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(gs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Ec(r.parent.vnode)&&Uf(i,e,t,r),r=r.parent}}function Uf(n,e,t,i){const r=gs(e,n,i,!0);Ac(()=>{Io(i[e],r)},t)}function gs(n,e,t=ot,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Wi(),zi(t);const o=Jt(e,t,n,a);return ii(),qi(),o});return i?r.unshift(s):r.push(s),s}}const bn=n=>(e,t=ot)=>(!dr||n==="sp")&&gs(n,(...i)=>e(...i),t),Nf=bn("bm"),Ff=bn("m"),Of=bn("bu"),zf=bn("u"),Bf=bn("bum"),Ac=bn("um"),Hf=bn("sp"),Gf=bn("rtg"),Vf=bn("rtc");function kf(n,e=ot){gs("ec",n,e)}function kn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Wi(),Jt(l,t,8,[n.el,o,n,e]),qi())}}const Wf=Symbol(),go=n=>n?Oc(n)?Jo(n)||n.proxy:go(n.parent):null,rr=wt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>go(n.parent),$root:n=>go(n.root),$emit:n=>n.emit,$options:n=>$o(n),$forceUpdate:n=>n.f||(n.f=()=>qo(n.update)),$nextTick:n=>n.n||(n.n=_f.bind(n.proxy)),$watch:n=>Rf.bind(n)}),Rs=(n,e)=>n!==Ze&&!n.__isScriptSetup&&ke(n,e),qf={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Rs(i,e))return a[e]=1,i[e];if(r!==Ze&&ke(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&ke(c,e))return a[e]=3,s[e];if(t!==Ze&&ke(t,e))return a[e]=4,t[e];_o&&(a[e]=0)}}const u=rr[e];let d,h;if(u)return e==="$attrs"&&Pt(n,"get",e),u(n);if((d=o.__cssModules)&&(d=d[e]))return d;if(t!==Ze&&ke(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,ke(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Rs(r,e)?(r[e]=t,!0):i!==Ze&&ke(i,e)?(i[e]=t,!0):ke(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ze&&ke(n,a)||Rs(e,a)||(o=s[0])&&ke(o,a)||ke(i,a)||ke(rr,a)||ke(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ke(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let _o=!0;function Xf(n){const e=$o(n),t=n.proxy,i=n.ctx;_o=!1,e.beforeCreate&&va(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:p,updated:_,activated:v,deactivated:m,beforeDestroy:f,beforeUnmount:C,destroyed:b,unmounted:S,render:A,renderTracked:R,renderTriggered:U,errorCaptured:z,serverPrefetch:y,expose:T,inheritAttrs:re,components:te,directives:N,filters:H}=e;if(c&&jf(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const Q in a){const V=a[Q];Fe(V)&&(i[Q]=V.bind(t))}if(r){const Q=r.call(t,t);st(Q)&&(n.data=Go(Q))}if(_o=!0,s)for(const Q in s){const V=s[Q],ue=Fe(V)?V.bind(t,t):Fe(V.get)?V.get.bind(t,t):Zt,le=!Fe(V)&&Fe(V.set)?V.set.bind(t):Zt,Te=bd({get:ue,set:le});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Te.value,set:fe=>Te.value=fe})}if(o)for(const Q in o)Cc(o[Q],i,t,Q);if(l){const Q=Fe(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(V=>{Pf(V,Q[V])})}u&&va(u,n,"c");function ie(Q,V){Oe(V)?V.forEach(ue=>Q(ue.bind(t))):V&&Q(V.bind(t))}if(ie(Nf,d),ie(Ff,h),ie(Of,p),ie(zf,_),ie(Df,v),ie(If,m),ie(kf,z),ie(Vf,R),ie(Gf,U),ie(Bf,C),ie(Ac,S),ie(Hf,y),Oe(T))if(T.length){const Q=n.exposed||(n.exposed={});T.forEach(V=>{Object.defineProperty(Q,V,{get:()=>t[V],set:ue=>t[V]=ue})})}else n.exposed||(n.exposed={});A&&n.render===Zt&&(n.render=A),re!=null&&(n.inheritAttrs=re),te&&(n.components=te),N&&(n.directives=N)}function jf(n,e,t=Zt,i=!1){Oe(n)&&(n=vo(n));for(const r in n){const s=n[r];let a;st(s)?"default"in s?a=Qr(s.from||r,s.default,!0):a=Qr(s.from||r):a=Qr(s),rt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function va(n,e,t){Jt(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Cc(n,e,t,i){const r=i.includes(".")?wc(t,i):()=>t[i];if(ht(n)){const s=e[n];Fe(s)&&es(r,s)}else if(Fe(n))es(r,n.bind(t));else if(st(n))if(Oe(n))n.forEach(s=>Cc(s,e,t,i));else{const s=Fe(n.handler)?n.handler.bind(t):e[n.handler];Fe(s)&&es(r,s,n)}}function $o(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ls(l,c,a,!0)),ls(l,e,a)),st(e)&&s.set(e,l),l}function ls(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ls(n,s,t,!0),r&&r.forEach(a=>ls(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=$f[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const $f={data:xa,props:$n,emits:$n,methods:$n,computed:$n,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:$n,directives:$n,watch:Kf,provide:xa,inject:Yf};function xa(n,e){return e?n?function(){return wt(Fe(n)?n.call(this,this):n,Fe(e)?e.call(this,this):e)}:e:n}function Yf(n,e){return $n(vo(n),vo(e))}function vo(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function St(n,e){return n?[...new Set([].concat(n,e))]:e}function $n(n,e){return n?wt(wt(Object.create(null),n),e):e}function Kf(n,e){if(!n)return e;if(!e)return n;const t=wt(Object.create(null),n);for(const i in e)t[i]=St(n[i],e[i]);return t}function Zf(n,e,t,i=!1){const r={},s={};ss(s,vs,1),n.propsDefaults=Object.create(null),Lc(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:cf(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Jf(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=qe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ps(n.emitsOptions,h))continue;const p=e[h];if(l)if(ke(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Ni(h);r[_]=xo(l,o,_,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Lc(n,e,r,s)&&(c=!0);let u;for(const d in o)(!e||!ke(e,d)&&((u=ki(d))===d||!ke(e,u)))&&(l?t&&(t[d]!==void 0||t[u]!==void 0)&&(r[d]=xo(l,o,d,void 0,n,!0)):delete r[d]);if(s!==o)for(const d in s)(!e||!ke(e,d))&&(delete s[d],c=!0)}c&&Sn(n,"set","$attrs")}function Lc(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Jr(l))continue;const c=e[l];let u;r&&ke(r,u=Ni(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ps(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=qe(t),c=o||Ze;for(let u=0;u<s.length;u++){const d=s[u];t[d]=xo(r,l,d,c[d],n,!ke(c,d))}}return a}function xo(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=ke(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Fe(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(zi(r),i=c[t]=l.call(null,e),ii())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===ki(t))&&(i=!0))}return i}function Pc(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Fe(n)){const u=d=>{l=!0;const[h,p]=Pc(d,e,!0);wt(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return st(n)&&i.set(n,Ci),Ci;if(Oe(s))for(let u=0;u<s.length;u++){const d=Ni(s[u]);Ma(d)&&(a[d]=Ze)}else if(s)for(const u in s){const d=Ni(u);if(Ma(d)){const h=s[u],p=a[d]=Oe(h)||Fe(h)?{type:h}:Object.assign({},h);if(p){const _=ba(Boolean,p.type),v=ba(String,p.type);p[0]=_>-1,p[1]=v<0||_<v,(_>-1||ke(p,"default"))&&o.push(d)}}}const c=[a,o];return st(n)&&i.set(n,c),c}function Ma(n){return n[0]!=="$"}function Sa(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function ya(n,e){return Sa(n)===Sa(e)}function ba(n,e){return Oe(e)?e.findIndex(t=>ya(t,n)):Fe(e)&&ya(e,n)?0:-1}const Rc=n=>n[0]==="_"||n==="$stable",Yo=n=>Oe(n)?n.map(sn):[sn(n)],Qf=(n,e,t)=>{if(e._n)return e;const i=bf((...r)=>Yo(e(...r)),t);return i._c=!1,i},Dc=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Rc(r))continue;const s=n[r];if(Fe(s))e[r]=Qf(r,s,i);else if(s!=null){const a=Yo(s);e[r]=()=>a}}},Ic=(n,e)=>{const t=Yo(e);n.slots.default=()=>t},ed=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=qe(e),ss(e,"_",t)):Dc(e,n.slots={})}else n.slots={},e&&Ic(n,e);ss(n.slots,vs,1)},td=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ze;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(wt(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Dc(e,r)),a=e}else e&&(Ic(n,e),a={default:1});if(s)for(const o in r)!Rc(o)&&!(o in a)&&delete r[o]};function Uc(){return{app:null,config:{isNativeTag:yu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nd=0;function id(n,e){return function(i,r=null){Fe(i)||(i=Object.assign({},i)),r!=null&&!st(r)&&(r=null);const s=Uc(),a=new Set;let o=!1;const l=s.app={_uid:nd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Td,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Fe(c.install)?(a.add(c),c.install(l,...u)):Fe(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,d){if(!o){const h=vt(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,d),o=!0,l._container=c,c.__vue_app__=l,Jo(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Mo(n,e,t,i,r=!1){if(Oe(n)){n.forEach((h,p)=>Mo(h,e&&(Oe(e)?e[p]:e),t,i,r));return}if(ts(i)&&!r)return;const s=i.shapeFlag&4?Jo(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ze?o.refs={}:o.refs,d=o.setupState;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,ke(d,c)&&(d[c]=null)):rt(c)&&(c.value=null)),Fe(l))Dn(l,o,12,[a,u]);else{const h=ht(l),p=rt(l);if(h||p){const _=()=>{if(n.f){const v=h?ke(d,l)?d[l]:u[l]:l.value;r?Oe(v)&&Io(v,s):Oe(v)?v.includes(s)||v.push(s):h?(u[l]=[s],ke(d,l)&&(d[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,ke(d,l)&&(d[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,Tt(_,t)):_()}}}const Tt=Lf;function rd(n){return sd(n)}function sd(n,e){const t=Du();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:p=Zt,insertStaticContent:_}=n,v=(w,E,D,$=null,Y=null,se=null,de=!1,J=null,oe=!!E.dynamicChildren)=>{if(w===E)return;w&&!Yi(w,E)&&($=G(w),fe(w,Y,se,!0),w=null),E.patchFlag===-2&&(oe=!1,E.dynamicChildren=null);const{type:ee,ref:x,shapeFlag:g}=E;switch(ee){case _s:m(w,E,D,$);break;case ur:f(w,E,D,$);break;case ns:w==null&&C(E,D,$,de);break;case vn:te(w,E,D,$,Y,se,de,J,oe);break;default:g&1?A(w,E,D,$,Y,se,de,J,oe):g&6?N(w,E,D,$,Y,se,de,J,oe):(g&64||g&128)&&ee.process(w,E,D,$,Y,se,de,J,oe,Ae)}x!=null&&Y&&Mo(x,w&&w.ref,se,E||w,!E)},m=(w,E,D,$)=>{if(w==null)i(E.el=o(E.children),D,$);else{const Y=E.el=w.el;E.children!==w.children&&c(Y,E.children)}},f=(w,E,D,$)=>{w==null?i(E.el=l(E.children||""),D,$):E.el=w.el},C=(w,E,D,$)=>{[w.el,w.anchor]=_(w.children,E,D,$,w.el,w.anchor)},b=({el:w,anchor:E},D,$)=>{let Y;for(;w&&w!==E;)Y=h(w),i(w,D,$),w=Y;i(E,D,$)},S=({el:w,anchor:E})=>{let D;for(;w&&w!==E;)D=h(w),r(w),w=D;r(E)},A=(w,E,D,$,Y,se,de,J,oe)=>{de=de||E.type==="svg",w==null?R(E,D,$,Y,se,de,J,oe):y(w,E,Y,se,de,J,oe)},R=(w,E,D,$,Y,se,de,J)=>{let oe,ee;const{type:x,props:g,shapeFlag:P,transition:B,dirs:W}=w;if(oe=w.el=a(w.type,se,g&&g.is,g),P&8?u(oe,w.children):P&16&&z(w.children,oe,null,$,Y,se&&x!=="foreignObject",de,J),W&&kn(w,null,$,"created"),U(oe,w,w.scopeId,de,$),g){for(const _e in g)_e!=="value"&&!Jr(_e)&&s(oe,_e,null,g[_e],se,w.children,$,Y,ge);"value"in g&&s(oe,"value",null,g.value),(ee=g.onVnodeBeforeMount)&&tn(ee,$,w)}W&&kn(w,null,$,"beforeMount");const ae=(!Y||Y&&!Y.pendingBranch)&&B&&!B.persisted;ae&&B.beforeEnter(oe),i(oe,E,D),((ee=g&&g.onVnodeMounted)||ae||W)&&Tt(()=>{ee&&tn(ee,$,w),ae&&B.enter(oe),W&&kn(w,null,$,"mounted")},Y)},U=(w,E,D,$,Y)=>{if(D&&p(w,D),$)for(let se=0;se<$.length;se++)p(w,$[se]);if(Y){let se=Y.subTree;if(E===se){const de=Y.vnode;U(w,de,de.scopeId,de.slotScopeIds,Y.parent)}}},z=(w,E,D,$,Y,se,de,J,oe=0)=>{for(let ee=oe;ee<w.length;ee++){const x=w[ee]=J?Pn(w[ee]):sn(w[ee]);v(null,x,E,D,$,Y,se,de,J)}},y=(w,E,D,$,Y,se,de)=>{const J=E.el=w.el;let{patchFlag:oe,dynamicChildren:ee,dirs:x}=E;oe|=w.patchFlag&16;const g=w.props||Ze,P=E.props||Ze;let B;D&&Wn(D,!1),(B=P.onVnodeBeforeUpdate)&&tn(B,D,E,w),x&&kn(E,w,D,"beforeUpdate"),D&&Wn(D,!0);const W=Y&&E.type!=="foreignObject";if(ee?T(w.dynamicChildren,ee,J,D,$,W,se):de||V(w,E,J,null,D,$,W,se,!1),oe>0){if(oe&16)re(J,E,g,P,D,$,Y);else if(oe&2&&g.class!==P.class&&s(J,"class",null,P.class,Y),oe&4&&s(J,"style",g.style,P.style,Y),oe&8){const ae=E.dynamicProps;for(let _e=0;_e<ae.length;_e++){const he=ae[_e],k=g[he],ye=P[he];(ye!==k||he==="value")&&s(J,he,k,ye,Y,w.children,D,$,ge)}}oe&1&&w.children!==E.children&&u(J,E.children)}else!de&&ee==null&&re(J,E,g,P,D,$,Y);((B=P.onVnodeUpdated)||x)&&Tt(()=>{B&&tn(B,D,E,w),x&&kn(E,w,D,"updated")},$)},T=(w,E,D,$,Y,se,de)=>{for(let J=0;J<E.length;J++){const oe=w[J],ee=E[J],x=oe.el&&(oe.type===vn||!Yi(oe,ee)||oe.shapeFlag&70)?d(oe.el):D;v(oe,ee,x,null,$,Y,se,de,!0)}},re=(w,E,D,$,Y,se,de)=>{if(D!==$){if(D!==Ze)for(const J in D)!Jr(J)&&!(J in $)&&s(w,J,D[J],null,de,E.children,Y,se,ge);for(const J in $){if(Jr(J))continue;const oe=$[J],ee=D[J];oe!==ee&&J!=="value"&&s(w,J,ee,oe,de,E.children,Y,se,ge)}"value"in $&&s(w,"value",D.value,$.value)}},te=(w,E,D,$,Y,se,de,J,oe)=>{const ee=E.el=w?w.el:o(""),x=E.anchor=w?w.anchor:o("");let{patchFlag:g,dynamicChildren:P,slotScopeIds:B}=E;B&&(J=J?J.concat(B):B),w==null?(i(ee,D,$),i(x,D,$),z(E.children,D,x,Y,se,de,J,oe)):g>0&&g&64&&P&&w.dynamicChildren?(T(w.dynamicChildren,P,D,Y,se,de,J),(E.key!=null||Y&&E===Y.subTree)&&Nc(w,E,!0)):V(w,E,D,x,Y,se,de,J,oe)},N=(w,E,D,$,Y,se,de,J,oe)=>{E.slotScopeIds=J,w==null?E.shapeFlag&512?Y.ctx.activate(E,D,$,de,oe):H(E,D,$,Y,se,de,oe):K(w,E,oe)},H=(w,E,D,$,Y,se,de)=>{const J=w.component=_d(w,$,Y);if(Ec(w)&&(J.ctx.renderer=Ae),vd(J),J.asyncDep){if(Y&&Y.registerDep(J,ie),!w.el){const oe=J.subTree=vt(ur);f(null,oe,E,D)}return}ie(J,w,E,D,Y,se,de)},K=(w,E,D)=>{const $=E.component=w.component;if(Tf(w,E,D))if($.asyncDep&&!$.asyncResolved){Q($,E,D);return}else $.next=E,xf($.update),$.update();else E.el=w.el,$.vnode=E},ie=(w,E,D,$,Y,se,de)=>{const J=()=>{if(w.isMounted){let{next:x,bu:g,u:P,parent:B,vnode:W}=w,ae=x,_e;Wn(w,!1),x?(x.el=W.el,Q(w,x,de)):x=W,g&&Ls(g),(_e=x.props&&x.props.onVnodeBeforeUpdate)&&tn(_e,B,x,W),Wn(w,!0);const he=Ps(w),k=w.subTree;w.subTree=he,v(k,he,d(k.el),G(k),w,Y,se),x.el=he.el,ae===null&&Af(w,he.el),P&&Tt(P,Y),(_e=x.props&&x.props.onVnodeUpdated)&&Tt(()=>tn(_e,B,x,W),Y)}else{let x;const{el:g,props:P}=E,{bm:B,m:W,parent:ae}=w,_e=ts(E);if(Wn(w,!1),B&&Ls(B),!_e&&(x=P&&P.onVnodeBeforeMount)&&tn(x,ae,E),Wn(w,!0),g&&Le){const he=()=>{w.subTree=Ps(w),Le(g,w.subTree,w,Y,null)};_e?E.type.__asyncLoader().then(()=>!w.isUnmounted&&he()):he()}else{const he=w.subTree=Ps(w);v(null,he,D,$,w,Y,se),E.el=he.el}if(W&&Tt(W,Y),!_e&&(x=P&&P.onVnodeMounted)){const he=E;Tt(()=>tn(x,ae,he),Y)}(E.shapeFlag&256||ae&&ts(ae.vnode)&&ae.vnode.shapeFlag&256)&&w.a&&Tt(w.a,Y),w.isMounted=!0,E=D=$=null}},oe=w.effect=new Oo(J,()=>qo(ee),w.scope),ee=w.update=()=>oe.run();ee.id=w.uid,Wn(w,!0),ee()},Q=(w,E,D)=>{E.component=w;const $=w.vnode.props;w.vnode=E,w.next=null,Jf(w,E.props,$,D),td(w,E.children,D),Wi(),ga(),qi()},V=(w,E,D,$,Y,se,de,J,oe=!1)=>{const ee=w&&w.children,x=w?w.shapeFlag:0,g=E.children,{patchFlag:P,shapeFlag:B}=E;if(P>0){if(P&128){le(ee,g,D,$,Y,se,de,J,oe);return}else if(P&256){ue(ee,g,D,$,Y,se,de,J,oe);return}}B&8?(x&16&&ge(ee,Y,se),g!==ee&&u(D,g)):x&16?B&16?le(ee,g,D,$,Y,se,de,J,oe):ge(ee,Y,se,!0):(x&8&&u(D,""),B&16&&z(g,D,$,Y,se,de,J,oe))},ue=(w,E,D,$,Y,se,de,J,oe)=>{w=w||Ci,E=E||Ci;const ee=w.length,x=E.length,g=Math.min(ee,x);let P;for(P=0;P<g;P++){const B=E[P]=oe?Pn(E[P]):sn(E[P]);v(w[P],B,D,null,Y,se,de,J,oe)}ee>x?ge(w,Y,se,!0,!1,g):z(E,D,$,Y,se,de,J,oe,g)},le=(w,E,D,$,Y,se,de,J,oe)=>{let ee=0;const x=E.length;let g=w.length-1,P=x-1;for(;ee<=g&&ee<=P;){const B=w[ee],W=E[ee]=oe?Pn(E[ee]):sn(E[ee]);if(Yi(B,W))v(B,W,D,null,Y,se,de,J,oe);else break;ee++}for(;ee<=g&&ee<=P;){const B=w[g],W=E[P]=oe?Pn(E[P]):sn(E[P]);if(Yi(B,W))v(B,W,D,null,Y,se,de,J,oe);else break;g--,P--}if(ee>g){if(ee<=P){const B=P+1,W=B<x?E[B].el:$;for(;ee<=P;)v(null,E[ee]=oe?Pn(E[ee]):sn(E[ee]),D,W,Y,se,de,J,oe),ee++}}else if(ee>P)for(;ee<=g;)fe(w[ee],Y,se,!0),ee++;else{const B=ee,W=ee,ae=new Map;for(ee=W;ee<=P;ee++){const xe=E[ee]=oe?Pn(E[ee]):sn(E[ee]);xe.key!=null&&ae.set(xe.key,ee)}let _e,he=0;const k=P-W+1;let ye=!1,be=0;const we=new Array(k);for(ee=0;ee<k;ee++)we[ee]=0;for(ee=B;ee<=g;ee++){const xe=w[ee];if(he>=k){fe(xe,Y,se,!0);continue}let De;if(xe.key!=null)De=ae.get(xe.key);else for(_e=W;_e<=P;_e++)if(we[_e-W]===0&&Yi(xe,E[_e])){De=_e;break}De===void 0?fe(xe,Y,se,!0):(we[De-W]=ee+1,De>=be?be=De:ye=!0,v(xe,E[De],D,null,Y,se,de,J,oe),he++)}const Se=ye?od(we):Ci;for(_e=Se.length-1,ee=k-1;ee>=0;ee--){const xe=W+ee,De=E[xe],We=xe+1<x?E[xe+1].el:$;we[ee]===0?v(null,De,D,We,Y,se,de,J,oe):ye&&(_e<0||ee!==Se[_e]?Te(De,D,We,2):_e--)}}},Te=(w,E,D,$,Y=null)=>{const{el:se,type:de,transition:J,children:oe,shapeFlag:ee}=w;if(ee&6){Te(w.component.subTree,E,D,$);return}if(ee&128){w.suspense.move(E,D,$);return}if(ee&64){de.move(w,E,D,Ae);return}if(de===vn){i(se,E,D);for(let g=0;g<oe.length;g++)Te(oe[g],E,D,$);i(w.anchor,E,D);return}if(de===ns){b(w,E,D);return}if($!==2&&ee&1&&J)if($===0)J.beforeEnter(se),i(se,E,D),Tt(()=>J.enter(se),Y);else{const{leave:g,delayLeave:P,afterLeave:B}=J,W=()=>i(se,E,D),ae=()=>{g(se,()=>{W(),B&&B()})};P?P(se,W,ae):ae()}else i(se,E,D)},fe=(w,E,D,$=!1,Y=!1)=>{const{type:se,props:de,ref:J,children:oe,dynamicChildren:ee,shapeFlag:x,patchFlag:g,dirs:P}=w;if(J!=null&&Mo(J,null,D,w,!0),x&256){E.ctx.deactivate(w);return}const B=x&1&&P,W=!ts(w);let ae;if(W&&(ae=de&&de.onVnodeBeforeUnmount)&&tn(ae,E,w),x&6)ve(w.component,D,$);else{if(x&128){w.suspense.unmount(D,$);return}B&&kn(w,null,E,"beforeUnmount"),x&64?w.type.remove(w,E,D,Y,Ae,$):ee&&(se!==vn||g>0&&g&64)?ge(ee,E,D,!1,!0):(se===vn&&g&384||!Y&&x&16)&&ge(oe,E,D),$&&q(w)}(W&&(ae=de&&de.onVnodeUnmounted)||B)&&Tt(()=>{ae&&tn(ae,E,w),B&&kn(w,null,E,"unmounted")},D)},q=w=>{const{type:E,el:D,anchor:$,transition:Y}=w;if(E===vn){ne(D,$);return}if(E===ns){S(w);return}const se=()=>{r(D),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:de,delayLeave:J}=Y,oe=()=>de(D,se);J?J(w.el,se,oe):oe()}else se()},ne=(w,E)=>{let D;for(;w!==E;)D=h(w),r(w),w=D;r(E)},ve=(w,E,D)=>{const{bum:$,scope:Y,update:se,subTree:de,um:J}=w;$&&Ls($),Y.stop(),se&&(se.active=!1,fe(de,w,E,D)),J&&Tt(J,E),Tt(()=>{w.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ge=(w,E,D,$=!1,Y=!1,se=0)=>{for(let de=se;de<w.length;de++)fe(w[de],E,D,$,Y)},G=w=>w.shapeFlag&6?G(w.component.subTree):w.shapeFlag&128?w.suspense.next():h(w.anchor||w.el),Re=(w,E,D)=>{w==null?E._vnode&&fe(E._vnode,null,null,!0):v(E._vnode||null,w,E,null,null,null,D),ga(),Mc(),E._vnode=w},Ae={p:v,um:fe,m:Te,r:q,mt:H,mc:z,pc:V,pbc:T,n:G,o:n};let pe,Le;return e&&([pe,Le]=e(Ae)),{render:Re,hydrate:pe,createApp:id(Re,pe)}}function Wn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Nc(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Pn(r[s]),o.el=a.el),t||Nc(a,o)),o.type===_s&&(o.el=a.el)}}function od(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const ad=n=>n.__isTeleport,vn=Symbol(void 0),_s=Symbol(void 0),ur=Symbol(void 0),ns=Symbol(void 0),sr=[];let Kt=null;function Fn(n=!1){sr.push(Kt=n?null:[])}function ld(){sr.pop(),Kt=sr[sr.length-1]||null}let fr=1;function wa(n){fr+=n}function cd(n){return n.dynamicChildren=fr>0?Kt||Ci:null,ld(),fr>0&&Kt&&Kt.push(n),n}function On(n,e,t,i,r,s){return cd(Je(n,e,t,i,r,s,!0))}function ud(n){return n?n.__v_isVNode===!0:!1}function Yi(n,e){return n.type===e.type&&n.key===e.key}const vs="__vInternal",Fc=({key:n})=>n??null,is=({ref:n,ref_key:e,ref_for:t})=>n!=null?ht(n)||rt(n)||Fe(n)?{i:ln,r:n,k:e,f:!!t}:n:null;function Je(n,e=null,t=null,i=0,r=null,s=n===vn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Fc(e),ref:e&&is(e),scopeId:ms,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ln};return o?(Zo(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),fr>0&&!a&&Kt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Kt.push(l),l}const vt=fd;function fd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Wf)&&(n=ur),ud(n)){const o=Oi(n,e,!0);return t&&Zo(o,t),fr>0&&!s&&Kt&&(o.shapeFlag&6?Kt[Kt.indexOf(n)]=o:Kt.push(o)),o.patchFlag|=-2,o}if(yd(n)&&(n=n.__vccOpts),e){e=dd(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Ui(o)),st(l)&&(dc(l)&&!Oe(l)&&(l=wt({},l)),e.style=Ro(l))}const a=ht(n)?1:Cf(n)?128:ad(n)?64:st(n)?4:Fe(n)?2:0;return Je(n,e,t,i,r,a,s,!0)}function dd(n){return n?dc(n)||vs in n?wt({},n):n:null}function Oi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?pd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Fc(o),ref:e&&e.ref?t&&r?Oe(r)?r.concat(is(e)):[r,is(e)]:is(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Oi(n.ssContent),ssFallback:n.ssFallback&&Oi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function hd(n=" ",e=0){return vt(_s,null,n,e)}function Ko(n,e){const t=vt(ns,null,n);return t.staticCount=e,t}function sn(n){return n==null||typeof n=="boolean"?vt(ur):Oe(n)?vt(vn,null,n.slice()):typeof n=="object"?Pn(n):vt(_s,null,String(n))}function Pn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Oi(n)}function Zo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Zo(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(vs in e)?e._ctx=ln:r===3&&ln&&(ln.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Fe(e)?(e={default:e,_ctx:ln},t=32):(e=String(e),i&64?(t=16,e=[hd(e)]):t=8);n.children=e,n.shapeFlag|=t}function pd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ui([e.class,i.class]));else if(r==="style")e.style=Ro([e.style,i.style]);else if(cs(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function tn(n,e,t,i=null){Jt(n,e,7,[t,i])}const md=Uc();let gd=0;function _d(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||md,s={uid:gd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Iu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pc(i,r),emitsOptions:yc(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yf.bind(null,s),n.ce&&n.ce(s),s}let ot=null;const zi=n=>{ot=n,n.scope.on()},ii=()=>{ot&&ot.scope.off(),ot=null};function Oc(n){return n.vnode.shapeFlag&4}let dr=!1;function vd(n,e=!1){dr=e;const{props:t,children:i}=n.vnode,r=Oc(n);Zf(n,t,r,e),ed(n,i);const s=r?xd(n,e):void 0;return dr=!1,s}function xd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=hc(new Proxy(n.ctx,qf));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Sd(n):null;zi(n),Wi();const s=Dn(i,n,0,[n.props,r]);if(qi(),ii(),Ql(s)){if(s.then(ii,ii),e)return s.then(a=>{Ea(n,a,e)}).catch(a=>{hs(a,n,0)});n.asyncDep=s}else Ea(n,s,e)}else zc(n,e)}function Ea(n,e,t){Fe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:st(e)&&(n.setupState=gc(e)),zc(n,t)}let Ta;function zc(n,e,t){const i=n.type;if(!n.render){if(!e&&Ta&&!i.render){const r=i.template||$o(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=wt(wt({isCustomElement:s,delimiters:o},a),l);i.render=Ta(r,c)}}n.render=i.render||Zt}zi(n),Wi(),Xf(n),qi(),ii()}function Md(n){return new Proxy(n.attrs,{get(e,t){return Pt(n,"get","$attrs"),e[t]}})}function Sd(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Md(n))},slots:n.slots,emit:n.emit,expose:e}}function Jo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(gc(hc(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in rr)return rr[t](n)},has(e,t){return t in e||t in rr}}))}function yd(n){return Fe(n)&&"__vccOpts"in n}const bd=(n,e)=>mf(n,e,dr),wd=Symbol(""),Ed=()=>Qr(wd),Td="3.2.47",Ad="http://www.w3.org/2000/svg",Jn=typeof document<"u"?document:null,Aa=Jn&&Jn.createElement("template"),Cd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?Jn.createElementNS(Ad,n):Jn.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Jn.createTextNode(n),createComment:n=>Jn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Aa.innerHTML=i?`<svg>${n}</svg>`:n;const o=Aa.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Ld(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Pd(n,e,t){const i=n.style,r=ht(t);if(t&&!r){if(e&&!ht(e))for(const s in e)t[s]==null&&So(i,s,"");for(const s in t)So(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Ca=/\s*!important$/;function So(n,e,t){if(Oe(t))t.forEach(i=>So(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Rd(n,e);Ca.test(t)?n.setProperty(ki(i),t.replace(Ca,""),"important"):n[i]=t}}const La=["Webkit","Moz","ms"],Ds={};function Rd(n,e){const t=Ds[e];if(t)return t;let i=Ni(e);if(i!=="filter"&&i in n)return Ds[e]=i;i=ec(i);for(let r=0;r<La.length;r++){const s=La[r]+i;if(s in n)return Ds[e]=s}return e}const Pa="http://www.w3.org/1999/xlink";function Dd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Pa,e.slice(6,e.length)):n.setAttributeNS(Pa,e,t);else{const s=Su(e);t==null||s&&!Jl(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Id(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Jl(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function Ud(n,e,t,i){n.addEventListener(e,t,i)}function Nd(n,e,t,i){n.removeEventListener(e,t,i)}function Fd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Od(e);if(i){const c=s[e]=Hd(i,r);Ud(n,o,c,l)}else a&&(Nd(n,o,a,l),s[e]=void 0)}}const Ra=/(?:Once|Passive|Capture)$/;function Od(n){let e;if(Ra.test(n)){e={};let i;for(;i=n.match(Ra);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):ki(n.slice(2)),e]}let Is=0;const zd=Promise.resolve(),Bd=()=>Is||(zd.then(()=>Is=0),Is=Date.now());function Hd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Jt(Gd(i,t.value),e,5,[i])};return t.value=n,t.attached=Bd(),t}function Gd(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Da=/^on[a-z]/,Vd=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Ld(n,i,r):e==="style"?Pd(n,t,i):cs(e)?Do(e)||Fd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kd(n,e,i,r))?Id(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Dd(n,e,i,r))};function kd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Da.test(e)&&Fe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Da.test(e)&&ht(t)?!1:e in n}const Wd=wt({patchProp:Vd},Cd);let Ia;function qd(){return Ia||(Ia=rd(Wd))}const Xd=(...n)=>{const e=qd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=jd(i);if(!r)return;const s=e._component;!Fe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function jd(n){return ht(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qo="151",$d=0,Ua=1,Yd=2,Bc=1,Kd=2,tr=3,Nn=0,Ct=1,xn=2,In=0,Ri=1,Na=2,Fa=3,Oa=4,Zd=5,Ei=100,Jd=101,Qd=102,za=103,Ba=104,eh=200,th=201,nh=202,ih=203,Hc=204,Gc=205,rh=206,sh=207,oh=208,ah=209,lh=210,ch=0,uh=1,fh=2,yo=3,dh=4,hh=5,ph=6,mh=7,Vc=0,gh=1,_h=2,Mn=0,vh=1,xh=2,Mh=3,Sh=4,yh=5,kc=300,Bi=301,Hi=302,bo=303,wo=304,xs=306,Eo=1e3,$t=1001,To=1002,bt=1003,Ha=1004,Us=1005,Ht=1006,bh=1007,hr=1008,si=1009,wh=1010,Eh=1011,Wc=1012,Th=1013,ei=1014,ti=1015,pr=1016,Ah=1017,Ch=1018,Di=1020,Lh=1021,Yt=1023,Ph=1024,Rh=1025,ri=1026,Gi=1027,Dh=1028,Ih=1029,Uh=1030,Nh=1031,Fh=1033,Ns=33776,Fs=33777,Os=33778,zs=33779,Ga=35840,Va=35841,ka=35842,Wa=35843,Oh=36196,qa=37492,Xa=37496,ja=37808,$a=37809,Ya=37810,Ka=37811,Za=37812,Ja=37813,Qa=37814,el=37815,tl=37816,nl=37817,il=37818,rl=37819,sl=37820,ol=37821,Bs=36492,zh=36283,al=36284,ll=36285,cl=36286,oi=3e3,$e=3001,Bh=3200,Hh=3201,Gh=0,Vh=1,rn="srgb",mr="srgb-linear",qc="display-p3",Hs=7680,kh=519,ul=35044,fl="300 es",Ao=1035;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,Co=180/Math.PI;function vr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[i&255]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function At(n,e,t){return Math.max(e,Math.min(t,n))}function Wh(n,e){return(n%e+e)%e}function Vs(n,e,t){return(1-t)*n+t*e}function dl(n){return(n&n-1)===0&&n!==0}function qh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],_=i[8],v=r[0],m=r[3],f=r[6],C=r[1],b=r[4],S=r[7],A=r[2],R=r[5],U=r[8];return s[0]=a*v+o*C+l*A,s[3]=a*m+o*b+l*R,s[6]=a*f+o*S+l*U,s[1]=c*v+u*C+d*A,s[4]=c*m+u*b+d*R,s[7]=c*f+u*S+d*U,s[2]=h*v+p*C+_*A,s[5]=h*m+p*b+_*R,s[8]=h*f+p*S+_*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=t*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new Ge;function Xc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function gr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ws(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Xh=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),jh=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function $h(n){return n.convertSRGBToLinear().applyMatrix3(jh)}function Yh(n){return n.applyMatrix3(Xh).convertLinearToSRGB()}const Kh={[mr]:n=>n,[rn]:n=>n.convertSRGBToLinear(),[qc]:$h},Zh={[mr]:n=>n,[rn]:n=>n.convertLinearToSRGB(),[qc]:Yh},It={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return mr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Kh[e],r=Zh[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let ci;class jc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ci===void 0&&(ci=gr("canvas")),ci.width=e.width,ci.height=e.height;const i=ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ii(t[i]/255)*255):t[i]=Ii(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class $c{constructor(e=null){this.isSource=!0,this.uuid=vr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qs(r[a].image)):s.push(qs(r[a]))}else s=qs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jh=0;class Lt extends Xi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=$t,r=$t,s=Ht,a=hr,o=Yt,l=si,c=Lt.DEFAULT_ANISOTROPY,u=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=vr(),this.name="",this.source=new $c(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Eo:e.x=e.x-Math.floor(e.x);break;case $t:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Eo:e.y=e.y-Math.floor(e.y);break;case $t:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=kc;Lt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],_=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(p+1)/2,A=(f+1)/2,R=(u+h)/4,U=(d+v)/4,z=(_+m)/4;return b>S&&b>A?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=R/i,s=U/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=R/r,s=z/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=U/s,r=z/s),this.set(i,r,s,t),this}let C=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(C)<.001&&(C=1),this.x=(m-_)/C,this.y=(d-v)/C,this.z=(h-u)/C,this.w=Math.acos((c+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ai extends Xi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ht,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $c(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yc extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qh extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=bt,this.minFilter=bt,this.wrapR=$t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(d!==v||l!==h||c!==p||u!==_){let m=1-o;const f=l*h+c*p+u*_+d*v,C=f>=0?1:-1,b=1-f*f;if(b>Number.EPSILON){const A=Math.sqrt(b),R=Math.atan2(A,f*C);m=Math.sin(m*R)/A,o=Math.sin(o*R)/A}const S=o*C;if(l=l*m+h*S,c=c*m+p*S,u=u*m+_*S,d=d*m+v*S,m===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*p-c*h,e[t+1]=l*_+u*h+c*d-o*p,e[t+2]=c*_+u*p+o*h-l*d,e[t+3]=u*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"YXZ":this._x=h*u*d+c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"ZXY":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d-h*p*_;break;case"ZYX":this._x=h*u*d-c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d+h*p*_;break;case"YZX":this._x=h*u*d+c*p*_,this._y=c*p*d+h*u*_,this._z=c*u*_-h*p*d,this._w=c*u*d-h*p*_;break;case"XZY":this._x=h*u*d-c*p*_,this._y=c*p*d-h*u*_,this._z=c*u*_+h*p*d,this._w=c*u*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,d=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-d*-a,this.y=u*l+h*-a+d*-s-c*-o,this.z=d*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xs.copy(this).projectOnVector(e),this.sub(Xs)}reflect(e){return this.sub(Xs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new O,hl=new xr;class Mr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ui.copy(e.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)dn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(dn)}else r.boundingBox===null&&r.computeBoundingBox(),ui.copy(r.boundingBox),ui.applyMatrix4(e.matrixWorld),this.union(ui)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Rr.subVectors(this.max,Ki),fi.subVectors(e.a,Ki),di.subVectors(e.b,Ki),hi.subVectors(e.c,Ki),Tn.subVectors(di,fi),An.subVectors(hi,di),qn.subVectors(fi,hi);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-qn.z,qn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,qn.z,0,-qn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-qn.y,qn.x,0];return!js(t,fi,di,hi,Rr)||(t=[1,0,0,0,1,0,0,0,1],!js(t,fi,di,hi,Rr))?!1:(Dr.crossVectors(Tn,An),t=[Dr.x,Dr.y,Dr.z],js(t,fi,di,hi,Rr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new O,new O,new O,new O,new O,new O,new O,new O],dn=new O,ui=new Mr,fi=new O,di=new O,hi=new O,Tn=new O,An=new O,qn=new O,Ki=new O,Rr=new O,Dr=new O,Xn=new O;function js(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Xn.fromArray(n,s);const o=r.x*Math.abs(Xn.x)+r.y*Math.abs(Xn.y)+r.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),u=i.dot(Xn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ep=new Mr,Zi=new O,$s=new O;class ea{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ep.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Zi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($s.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add($s)),this.expandByPoint(Zi.copy(e.center).sub($s))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hn=new O,Ys=new O,Ir=new O,Cn=new O,Ks=new O,Ur=new O,Zs=new O;class tp{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hn.copy(this.origin).addScaledVector(this.direction,t),hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ys.copy(e).add(t).multiplyScalar(.5),Ir.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(Ys);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ir),o=Cn.dot(this.direction),l=-Cn.dot(Ir),c=Cn.lengthSq(),u=Math.abs(1-a*a);let d,h,p,_;if(u>0)if(d=a*l-o,h=a*o-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const v=1/u;d*=v,h*=v,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ys).addScaledVector(Ir,h),p}intersectSphere(e,t){hn.subVectors(e.center,this.origin);const i=hn.dot(this.direction),r=hn.dot(hn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hn)!==null}intersectTriangle(e,t,i,r,s){Ks.subVectors(t,e),Ur.subVectors(i,e),Zs.crossVectors(Ks,Ur);let a=this.direction.dot(Zs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(Ur.crossVectors(Cn,Ur));if(l<0)return null;const c=o*this.direction.dot(Ks.cross(Cn));if(c<0||l+c>a)return null;const u=-o*Cn.dot(Zs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,d,h,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/pi.setFromMatrixColumn(e,0).length(),s=1/pi.setFromMatrixColumn(e,1).length(),a=1/pi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+_*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=_+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,_=c*u,v=c*d;t[0]=h+v*o,t[4]=_*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-_,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,_=c*u,v=c*d;t[0]=h-v*o,t[4]=-a*d,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,_=o*u,v=o*d;t[0]=l*u,t[4]=_*c-p,t[8]=h*c+v,t[1]=l*d,t[5]=v*c+h,t[9]=p*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=v-h*d,t[8]=_*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+_,t[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,v=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+v,t[5]=a*u,t[9]=p*d-_,t[2]=_*d-p,t[6]=o*u,t[10]=v*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(np,e,ip)}lookAt(e,t,i){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Ln.crossVectors(i,Ut),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Ln.crossVectors(i,Ut)),Ln.normalize(),Nr.crossVectors(Ut,Ln),r[0]=Ln.x,r[4]=Nr.x,r[8]=Ut.x,r[1]=Ln.y,r[5]=Nr.y,r[9]=Ut.y,r[2]=Ln.z,r[6]=Nr.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],_=i[2],v=i[6],m=i[10],f=i[14],C=i[3],b=i[7],S=i[11],A=i[15],R=r[0],U=r[4],z=r[8],y=r[12],T=r[1],re=r[5],te=r[9],N=r[13],H=r[2],K=r[6],ie=r[10],Q=r[14],V=r[3],ue=r[7],le=r[11],Te=r[15];return s[0]=a*R+o*T+l*H+c*V,s[4]=a*U+o*re+l*K+c*ue,s[8]=a*z+o*te+l*ie+c*le,s[12]=a*y+o*N+l*Q+c*Te,s[1]=u*R+d*T+h*H+p*V,s[5]=u*U+d*re+h*K+p*ue,s[9]=u*z+d*te+h*ie+p*le,s[13]=u*y+d*N+h*Q+p*Te,s[2]=_*R+v*T+m*H+f*V,s[6]=_*U+v*re+m*K+f*ue,s[10]=_*z+v*te+m*ie+f*le,s[14]=_*y+v*N+m*Q+f*Te,s[3]=C*R+b*T+S*H+A*V,s[7]=C*U+b*re+S*K+A*ue,s[11]=C*z+b*te+S*ie+A*le,s[15]=C*y+b*N+S*Q+A*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+v*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+t*c*d-t*o*p-s*a*d+i*a*p+s*o*u-i*c*u)+f*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],C=d*m*c-v*h*c+v*l*p-o*m*p-d*l*f+o*h*f,b=_*h*c-u*m*c-_*l*p+a*m*p+u*l*f-a*h*f,S=u*v*c-_*d*c+_*o*p-a*v*p-u*o*f+a*d*f,A=_*d*l-u*v*l-_*o*h+a*v*h+u*o*m-a*d*m,R=t*C+i*b+r*S+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=C*U,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*U,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*f+i*l*f)*U,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*U,e[4]=b*U,e[5]=(u*m*s-_*h*s+_*r*p-t*m*p-u*r*f+t*h*f)*U,e[6]=(_*l*s-a*m*s-_*r*c+t*m*c+a*r*f-t*l*f)*U,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*U,e[8]=S*U,e[9]=(_*d*s-u*v*s-_*i*p+t*v*p+u*i*f-t*d*f)*U,e[10]=(a*v*s-_*o*s+_*i*c-t*v*c-a*i*f+t*o*f)*U,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*p-t*o*p)*U,e[12]=A*U,e[13]=(u*v*r-_*d*r+_*i*h-t*v*h-u*i*m+t*d*m)*U,e[14]=(_*o*r-a*v*r-_*i*l+t*v*l+a*i*m-t*o*m)*U,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*U,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,_=s*d,v=a*u,m=a*d,f=o*d,C=l*c,b=l*u,S=l*d,A=i.x,R=i.y,U=i.z;return r[0]=(1-(v+f))*A,r[1]=(p+S)*A,r[2]=(_-b)*A,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(h+f))*R,r[6]=(m+C)*R,r[7]=0,r[8]=(_+b)*U,r[9]=(m-C)*U,r[10]=(1-(h+v))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=pi.set(r[0],r[1],r[2]).length();const a=pi.set(r[4],r[5],r[6]).length(),o=pi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/s,u=1/a,d=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=d,Vt.elements[9]*=d,Vt.elements[10]*=d,t.setFromRotationMatrix(Vt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),d=(i+r)/(i-r),h=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),d=(t+e)*l,h=(i+r)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const pi=new O,Vt=new dt,np=new O(0,0,0),ip=new O(1,1,1),Ln=new O,Nr=new O,Ut=new O,pl=new dt,ml=new xr;class Ms{constructor(e=0,t=0,i=0,r=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ml.setFromEuler(this),this.setFromQuaternion(ml,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rp=0;const gl=new O,mi=new xr,pn=new dt,Fr=new O,Ji=new O,sp=new O,op=new xr,_l=new O(1,0,0),vl=new O(0,1,0),xl=new O(0,0,1),ap={type:"added"},Ml={type:"removed"};class Ot extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new O,t=new Ms,i=new xr,r=new O(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new Ge}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.multiply(mi),this}rotateOnWorldAxis(e,t){return mi.setFromAxisAngle(e,t),this.quaternion.premultiply(mi),this}rotateX(e){return this.rotateOnAxis(_l,e)}rotateY(e){return this.rotateOnAxis(vl,e)}rotateZ(e){return this.rotateOnAxis(xl,e)}translateOnAxis(e,t){return gl.copy(e).applyQuaternion(this.quaternion),this.position.add(gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_l,e)}translateY(e){return this.translateOnAxis(vl,e)}translateZ(e){return this.translateOnAxis(xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ji,Fr,this.up):pn.lookAt(Fr,Ji,this.up),this.quaternion.setFromRotationMatrix(pn),r&&(pn.extractRotation(r.matrixWorld),mi.setFromRotationMatrix(pn),this.quaternion.premultiply(mi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ap)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ml)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ml)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(pn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,sp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,op,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ot.DEFAULT_UP=new O(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kt=new O,mn=new O,Js=new O,gn=new O,gi=new O,_i=new O,Sl=new O,Qs=new O,eo=new O,to=new O;let Or=!1;class Xt{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),kt.subVectors(e,t),r.cross(kt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){kt.subVectors(r,t),mn.subVectors(i,t),Js.subVectors(e,t);const a=kt.dot(kt),o=kt.dot(mn),l=kt.dot(Js),c=mn.dot(mn),u=mn.dot(Js),d=a*c-o*o;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,gn),gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(e,t,i,r,s,a,o,l){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),this.getInterpolation(e,t,i,r,s,a,o,l)}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,gn),l.setScalar(0),l.addScaledVector(s,gn.x),l.addScaledVector(a,gn.y),l.addScaledVector(o,gn.z),l}static isFrontFacing(e,t,i,r){return kt.subVectors(i,t),mn.subVectors(e,t),kt.cross(mn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kt.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),kt.cross(mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Or===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Or=!0),Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return Xt.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Xt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;gi.subVectors(r,i),_i.subVectors(s,i),Qs.subVectors(e,i);const l=gi.dot(Qs),c=_i.dot(Qs);if(l<=0&&c<=0)return t.copy(i);eo.subVectors(e,r);const u=gi.dot(eo),d=_i.dot(eo);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(gi,a);to.subVectors(e,s);const p=gi.dot(to),_=_i.dot(to);if(_>=0&&p<=_)return t.copy(s);const v=p*c-l*_;if(v<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(_i,o);const m=u*_-p*d;if(m<=0&&d-u>=0&&p-_>=0)return Sl.subVectors(s,r),o=(d-u)/(d-u+(p-_)),t.copy(r).addScaledVector(Sl,o);const f=1/(m+v+h);return a=v*f,o=h*f,t.copy(i).addScaledVector(gi,a).addScaledVector(_i,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let lp=0;class Sr extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=Ri,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hc,this.blendDst=Gc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hs,this.stencilZFail=Hs,this.stencilZPass=Hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},zr={h:0,s:0,l:0};function no(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=It.workingColorSpace){return this.r=e,this.g=t,this.b=i,It.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=It.workingColorSpace){if(e=Wh(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=no(a,s,e+1/3),this.g=no(a,s,e),this.b=no(a,s,e-1/3)}return It.toWorkingColorSpace(this,r),this}setStyle(e,t=rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,It.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,It.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const i=Zc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return It.fromWorkingColorSpace(gt.copy(this),e),At(gt.r*255,0,255)<<16^At(gt.g*255,0,255)<<8^At(gt.b*255,0,255)<<0}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.fromWorkingColorSpace(gt.copy(this),t);const i=gt.r,r=gt.g,s=gt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=rn){It.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,i=gt.g,r=gt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(zr);const i=Vs(Wt.h,zr.h,t),r=Vs(Wt.s,zr.s,t),s=Vs(Wt.l,zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new Ye;Ye.NAMES=Zc;class Ss extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new O,Br=new Ke;class Qt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ul,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Br.fromBufferAttribute(this,t),Br.applyMatrix3(e),this.setXY(t,Br.x,Br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),i=Dt(i,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Jc extends Qt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qc extends Qt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends Qt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let cp=0;const Bt=new dt,io=new Ot,vi=new O,Nt=new Mr,Qi=new Mr,ut=new O;class zn extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Qc:Jc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,i){return Bt.makeTranslation(e,t,i),this.applyMatrix4(Bt),this}scale(e,t,i){return Bt.makeScale(e,t,i),this.applyMatrix4(Bt),this}lookAt(e){return io.lookAt(e),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new un(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(ut.addVectors(Nt.min,Qi.min),Nt.expandByPoint(ut),ut.addVectors(Nt.max,Qi.max),Nt.expandByPoint(ut)):(Nt.expandByPoint(Qi.min),Nt.expandByPoint(Qi.max))}Nt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ut.fromBufferAttribute(o,c),l&&(vi.fromBufferAttribute(e,c),ut.add(vi)),r=Math.max(r,i.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<o;T++)c[T]=new O,u[T]=new O;const d=new O,h=new O,p=new O,_=new Ke,v=new Ke,m=new Ke,f=new O,C=new O;function b(T,re,te){d.fromArray(r,T*3),h.fromArray(r,re*3),p.fromArray(r,te*3),_.fromArray(a,T*2),v.fromArray(a,re*2),m.fromArray(a,te*2),h.sub(d),p.sub(d),v.sub(_),m.sub(_);const N=1/(v.x*m.y-m.x*v.y);isFinite(N)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(N),C.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(N),c[T].add(f),c[re].add(f),c[te].add(f),u[T].add(C),u[re].add(C),u[te].add(C))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let T=0,re=S.length;T<re;++T){const te=S[T],N=te.start,H=te.count;for(let K=N,ie=N+H;K<ie;K+=3)b(i[K+0],i[K+1],i[K+2])}const A=new O,R=new O,U=new O,z=new O;function y(T){U.fromArray(s,T*3),z.copy(U);const re=c[T];A.copy(re),A.sub(U.multiplyScalar(U.dot(re))).normalize(),R.crossVectors(z,re);const N=R.dot(u[T])<0?-1:1;l[T*4]=A.x,l[T*4+1]=A.y,l[T*4+2]=A.z,l[T*4+3]=N}for(let T=0,re=S.length;T<re;++T){const te=S[T],N=te.start,H=te.count;for(let K=N,ie=N+H;K<ie;K+=3)y(i[K+0]),y(i[K+1]),y(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)h[_++]=c[p++]}return new Qt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new dt,nn=new tp,Hr=new ea,bl=new O,xi=new O,Mi=new O,Si=new O,ro=new O,Gr=new O,Vr=new Ke,kr=new Ke,Wr=new Ke,wl=new O,El=new O,Tl=new O,qr=new O,Xr=new O;class cn extends Ot{constructor(e=new zn,t=new Ss){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ro.fromBufferAttribute(d,e),a?Gr.addScaledVector(ro,u):Gr.addScaledVector(ro.sub(t),u))}t.add(Gr)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),nn.copy(e.ray).recast(e.near),Hr.containsPoint(nn.origin)===!1&&(nn.intersectSphere(Hr,bl)===null||nn.origin.distanceToSquared(bl)>(e.far-e.near)**2))||(yl.copy(s).invert(),nn.copy(e.ray).applyMatrix4(yl),i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,d=i.attributes.normal,h=i.groups,p=i.drawRange;if(o!==null)if(Array.isArray(r))for(let _=0,v=h.length;_<v;_++){const m=h[_],f=r[m.materialIndex],C=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,A=b;S<A;S+=3){const R=o.getX(S),U=o.getX(S+1),z=o.getX(S+2);a=jr(this,f,e,nn,c,u,d,R,U,z),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const C=o.getX(m),b=o.getX(m+1),S=o.getX(m+2);a=jr(this,r,e,nn,c,u,d,C,b,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let _=0,v=h.length;_<v;_++){const m=h[_],f=r[m.materialIndex],C=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=C,A=b;S<A;S+=3){const R=S,U=S+1,z=S+2;a=jr(this,f,e,nn,c,u,d,R,U,z),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const C=m,b=m+1,S=m+2;a=jr(this,r,e,nn,c,u,d,C,b,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function up(n,e,t,i,r,s,a,o){let l;if(e.side===Ct?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nn,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function jr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,xi),n.getVertexPosition(l,Mi),n.getVertexPosition(c,Si);const u=up(n,e,t,i,xi,Mi,Si,qr);if(u){r&&(Vr.fromBufferAttribute(r,o),kr.fromBufferAttribute(r,l),Wr.fromBufferAttribute(r,c),u.uv=Xt.getInterpolation(qr,xi,Mi,Si,Vr,kr,Wr,new Ke)),s&&(Vr.fromBufferAttribute(s,o),kr.fromBufferAttribute(s,l),Wr.fromBufferAttribute(s,c),u.uv2=Xt.getInterpolation(qr,xi,Mi,Si,Vr,kr,Wr,new Ke)),a&&(wl.fromBufferAttribute(a,o),El.fromBufferAttribute(a,l),Tl.fromBufferAttribute(a,c),u.normal=Xt.getInterpolation(qr,xi,Mi,Si,wl,El,Tl,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Xt.getNormal(xi,Mi,Si,d.normal),u.face=d}return u}class yr extends zn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(u,3)),this.setAttribute("uv",new un(d,2));function _(v,m,f,C,b,S,A,R,U,z,y){const T=S/U,re=A/z,te=S/2,N=A/2,H=R/2,K=U+1,ie=z+1;let Q=0,V=0;const ue=new O;for(let le=0;le<ie;le++){const Te=le*re-N;for(let fe=0;fe<K;fe++){const q=fe*T-te;ue[v]=q*C,ue[m]=Te*b,ue[f]=H,c.push(ue.x,ue.y,ue.z),ue[v]=0,ue[m]=0,ue[f]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),d.push(fe/U),d.push(1-le/z),Q+=1}}for(let le=0;le<z;le++)for(let Te=0;Te<U;Te++){const fe=h+Te+K*le,q=h+Te+K*(le+1),ne=h+(Te+1)+K*(le+1),ve=h+(Te+1)+K*le;l.push(fe,q,ve),l.push(q,ne,ve),V+=6}o.addGroup(p,V,y),p+=V,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function yt(n){const e={};for(let t=0;t<n.length;t++){const i=Vi(n[t]);for(const r in i)e[r]=i[r]}return e}function fp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function eu(n){return n.getRenderTarget()===null&&n.outputEncoding===$e?rn:mr}const dp={clone:Vi,merge:yt};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vi(e.uniforms),this.uniformsGroups=fp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tu extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ft extends tu{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Co*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const yi=-90,bi=1;class mp extends Ot{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Ft(yi,bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Ft(yi,bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Ft(yi,bi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Ft(yi,bi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Ft(yi,bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Ft(yi,bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Mn,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class nu extends Lt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gp extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new yr(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Vi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:In});s.uniforms.tEquirect.value=t;const a=new cn(r,s),o=t.minFilter;return t.minFilter===hr&&(t.minFilter=Ht),new mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const so=new O,_p=new O,vp=new Ge;class Yn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=so.subVectors(i,t).cross(_p.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(so),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||vp.getNormalMatrix(e),r=this.coplanarPoint(so).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new ea,$r=new O;class iu{constructor(e=new Yn,t=new Yn,i=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],d=i[7],h=i[8],p=i[9],_=i[10],v=i[11],m=i[12],f=i[13],C=i[14],b=i[15];return t[0].setComponents(o-r,d-l,v-h,b-m).normalize(),t[1].setComponents(o+r,d+l,v+h,b+m).normalize(),t[2].setComponents(o+s,d+c,v+p,b+f).normalize(),t[3].setComponents(o-s,d-c,v-p,b-f).normalize(),t[4].setComponents(o-a,d-u,v-_,b-C).normalize(),t[5].setComponents(o+a,d+u,v+_,b+C).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(e){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(e.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xp(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const d=c.array,h=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,d,h),c.onUploadCallback();let _;if(d instanceof Float32Array)_=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(d instanceof Int16Array)_=5122;else if(d instanceof Uint32Array)_=5125;else if(d instanceof Int32Array)_=5124;else if(d instanceof Int8Array)_=5120;else if(d instanceof Uint8Array)_=5121;else if(d instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,d){const h=u.array,p=u.updateRange;n.bindBuffer(d,c),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d===void 0?i.set(c,r(c,u)):d.version<c.version&&(s(d.buffer,c,u),d.version=c.version)}return{get:a,remove:o,update:l}}class _r extends zn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],_=[],v=[],m=[];for(let f=0;f<u;f++){const C=f*h-a;for(let b=0;b<c;b++){const S=b*d-s;_.push(S,-C,0),v.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let C=0;C<o;C++){const b=C+c*f,S=C+c*(f+1),A=C+1+c*(f+1),R=C+1+c*f;p.push(b,S,R),p.push(S,A,R)}this.setIndex(p),this.setAttribute("position",new un(_,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.widthSegments,e.heightSegments)}}var Mp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tp="vec3 transformed = vec3( position );",Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Yp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,em=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,rm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,om=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lm=`uniform bool receiveShadow;
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
#endif`,cm=`#if defined( USE_ENVMAP )
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
#endif`,um=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pm=`PhysicalMaterial material;
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
#endif`,mm=`struct PhysicalMaterial {
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
}`,gm=`
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
#endif`,_m=`#if defined( RE_IndirectDiffuse )
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
#endif`,vm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ym=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Lm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pm=`#ifdef USE_MORPHNORMALS
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
#endif`,Rm=`#ifdef USE_MORPHTARGETS
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
#endif`,Dm=`#ifdef USE_MORPHTARGETS
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
#endif`,Im=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Om=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Hm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ym=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,eg=`float getShadowMask() {
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
}`,tg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ng=`#ifdef USE_SKINNING
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
#endif`,ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rg=`#ifdef USE_SKINNING
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
#endif`,sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ag=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cg=`#ifdef USE_TRANSMISSION
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
#endif`,ug=`#ifdef USE_TRANSMISSION
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
#endif`,fg=`#ifdef USE_UV
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
#endif`,dg=`#ifdef USE_UV
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
#endif`,hg=`#ifdef USE_UV
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
#endif`,pg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gg=`uniform sampler2D t2D;
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sg=`#include <common>
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
}`,yg=`#if DEPTH_PACKING == 3200
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
}`,bg=`#define DISTANCE
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
}`,wg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ag=`uniform float scale;
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Lg=`#include <common>
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
}`,Pg=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Dg=`#define LAMBERT
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
}`,Ig=`#define MATCAP
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
}`,Ug=`#define MATCAP
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
}`,Ng=`#define NORMAL
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
}`,Fg=`#define NORMAL
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
}`,Og=`#define PHONG
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
}`,zg=`#define PHONG
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
}`,Bg=`#define STANDARD
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
}`,Hg=`#define STANDARD
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
}`,Gg=`#define TOON
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
}`,Vg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Wg=`uniform vec3 diffuse;
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
}`,qg=`#include <common>
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
}`,Xg=`uniform vec3 color;
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
}`,jg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Ne={alphamap_fragment:Mp,alphamap_pars_fragment:Sp,alphatest_fragment:yp,alphatest_pars_fragment:bp,aomap_fragment:wp,aomap_pars_fragment:Ep,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:Cp,iridescence_fragment:Lp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Rp,clipping_planes_pars_fragment:Dp,clipping_planes_pars_vertex:Ip,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:Fp,color_pars_vertex:Op,color_vertex:zp,common:Bp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:kp,emissivemap_fragment:Wp,emissivemap_pars_fragment:qp,encodings_fragment:Xp,encodings_pars_fragment:jp,envmap_fragment:$p,envmap_common_pars_fragment:Yp,envmap_pars_fragment:Kp,envmap_pars_vertex:Zp,envmap_physical_pars_fragment:cm,envmap_vertex:Jp,fog_vertex:Qp,fog_pars_vertex:em,fog_fragment:tm,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_fragment:rm,lightmap_pars_fragment:sm,lights_lambert_fragment:om,lights_lambert_pars_fragment:am,lights_pars_begin:lm,lights_toon_fragment:um,lights_toon_pars_fragment:fm,lights_phong_fragment:dm,lights_phong_pars_fragment:hm,lights_physical_fragment:pm,lights_physical_pars_fragment:mm,lights_fragment_begin:gm,lights_fragment_maps:_m,lights_fragment_end:vm,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:Mm,logdepthbuf_pars_vertex:Sm,logdepthbuf_vertex:ym,map_fragment:bm,map_pars_fragment:wm,map_particle_fragment:Em,map_particle_pars_fragment:Tm,metalnessmap_fragment:Am,metalnessmap_pars_fragment:Cm,morphcolor_vertex:Lm,morphnormal_vertex:Pm,morphtarget_pars_vertex:Rm,morphtarget_vertex:Dm,normal_fragment_begin:Im,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:Fm,normal_vertex:Om,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:Hm,clearcoat_pars_fragment:Gm,iridescence_pars_fragment:Vm,output_fragment:km,packing:Wm,premultiplied_alpha_fragment:qm,project_vertex:Xm,dithering_fragment:jm,dithering_pars_fragment:$m,roughnessmap_fragment:Ym,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Zm,shadowmap_pars_vertex:Jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:eg,skinbase_vertex:tg,skinning_pars_vertex:ng,skinning_vertex:ig,skinnormal_vertex:rg,specularmap_fragment:sg,specularmap_pars_fragment:og,tonemapping_fragment:ag,tonemapping_pars_fragment:lg,transmission_fragment:cg,transmission_pars_fragment:ug,uv_pars_fragment:fg,uv_pars_vertex:dg,uv_vertex:hg,worldpos_vertex:pg,background_vert:mg,background_frag:gg,backgroundCube_vert:_g,backgroundCube_frag:vg,cube_vert:xg,cube_frag:Mg,depth_vert:Sg,depth_frag:yg,distanceRGBA_vert:bg,distanceRGBA_frag:wg,equirect_vert:Eg,equirect_frag:Tg,linedashed_vert:Ag,linedashed_frag:Cg,meshbasic_vert:Lg,meshbasic_frag:Pg,meshlambert_vert:Rg,meshlambert_frag:Dg,meshmatcap_vert:Ig,meshmatcap_frag:Ug,meshnormal_vert:Ng,meshnormal_frag:Fg,meshphong_vert:Og,meshphong_frag:zg,meshphysical_vert:Bg,meshphysical_frag:Hg,meshtoon_vert:Gg,meshtoon_frag:Vg,points_vert:kg,points_frag:Wg,shadow_vert:qg,shadow_frag:Xg,sprite_vert:jg,sprite_frag:$g},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},on={basic:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:yt([me.points,me.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:yt([me.common,me.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:yt([me.sprite,me.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:yt([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:yt([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};on.physical={uniforms:yt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const Yr={r:0,b:0,g:0};function Yg(n,e,t,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function _(m,f){let C=!1,b=f.isScene===!0?f.background:null;b&&b.isTexture&&(b=(f.backgroundBlurriness>0?t:e).get(b));const S=n.xr,A=S.getSession&&S.getSession();A&&A.environmentBlendMode==="additive"&&(b=null),b===null?v(o,l):b&&b.isColor&&(v(b,1),C=!0),(n.autoClear||C)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===xs)?(u===void 0&&(u=new cn(new yr(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Vi(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=b.encoding!==$e,(d!==b||h!==b.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=b,h=b.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new cn(new _r(2,2),new li({name:"BackgroundMaterial",uniforms:Vi(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=b.encoding!==$e,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||h!==b.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,h=b.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,f){m.getRGB(Yr,eu(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:_}}function Kg(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function d(H,K,ie,Q,V){let ue=!1;if(a){const le=v(Q,ie,K);c!==le&&(c=le,p(c.object)),ue=f(H,Q,ie,V),ue&&C(H,Q,ie,V)}else{const le=K.wireframe===!0;(c.geometry!==Q.id||c.program!==ie.id||c.wireframe!==le)&&(c.geometry=Q.id,c.program=ie.id,c.wireframe=le,ue=!0)}V!==null&&t.update(V,34963),(ue||u)&&(u=!1,z(H,K,ie,Q),V!==null&&n.bindBuffer(34963,t.get(V).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(H){return i.isWebGL2?n.bindVertexArray(H):s.bindVertexArrayOES(H)}function _(H){return i.isWebGL2?n.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function v(H,K,ie){const Q=ie.wireframe===!0;let V=o[H.id];V===void 0&&(V={},o[H.id]=V);let ue=V[K.id];ue===void 0&&(ue={},V[K.id]=ue);let le=ue[Q];return le===void 0&&(le=m(h()),ue[Q]=le),le}function m(H){const K=[],ie=[],Q=[];for(let V=0;V<r;V++)K[V]=0,ie[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:Q,object:H,attributes:{},index:null}}function f(H,K,ie,Q){const V=c.attributes,ue=K.attributes;let le=0;const Te=ie.getAttributes();for(const fe in Te)if(Te[fe].location>=0){const ne=V[fe];let ve=ue[fe];if(ve===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(ve=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(ve=H.instanceColor)),ne===void 0||ne.attribute!==ve||ve&&ne.data!==ve.data)return!0;le++}return c.attributesNum!==le||c.index!==Q}function C(H,K,ie,Q){const V={},ue=K.attributes;let le=0;const Te=ie.getAttributes();for(const fe in Te)if(Te[fe].location>=0){let ne=ue[fe];ne===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(ne=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(ne=H.instanceColor));const ve={};ve.attribute=ne,ne&&ne.data&&(ve.data=ne.data),V[fe]=ve,le++}c.attributes=V,c.attributesNum=le,c.index=Q}function b(){const H=c.newAttributes;for(let K=0,ie=H.length;K<ie;K++)H[K]=0}function S(H){A(H,0)}function A(H,K){const ie=c.newAttributes,Q=c.enabledAttributes,V=c.attributeDivisors;ie[H]=1,Q[H]===0&&(n.enableVertexAttribArray(H),Q[H]=1),V[H]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,K),V[H]=K)}function R(){const H=c.newAttributes,K=c.enabledAttributes;for(let ie=0,Q=K.length;ie<Q;ie++)K[ie]!==H[ie]&&(n.disableVertexAttribArray(ie),K[ie]=0)}function U(H,K,ie,Q,V,ue){i.isWebGL2===!0&&(ie===5124||ie===5125)?n.vertexAttribIPointer(H,K,ie,V,ue):n.vertexAttribPointer(H,K,ie,Q,V,ue)}function z(H,K,ie,Q){if(i.isWebGL2===!1&&(H.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const V=Q.attributes,ue=ie.getAttributes(),le=K.defaultAttributeValues;for(const Te in ue){const fe=ue[Te];if(fe.location>=0){let q=V[Te];if(q===void 0&&(Te==="instanceMatrix"&&H.instanceMatrix&&(q=H.instanceMatrix),Te==="instanceColor"&&H.instanceColor&&(q=H.instanceColor)),q!==void 0){const ne=q.normalized,ve=q.itemSize,ge=t.get(q);if(ge===void 0)continue;const G=ge.buffer,Re=ge.type,Ae=ge.bytesPerElement;if(q.isInterleavedBufferAttribute){const pe=q.data,Le=pe.stride,w=q.offset;if(pe.isInstancedInterleavedBuffer){for(let E=0;E<fe.locationSize;E++)A(fe.location+E,pe.meshPerAttribute);H.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let E=0;E<fe.locationSize;E++)S(fe.location+E);n.bindBuffer(34962,G);for(let E=0;E<fe.locationSize;E++)U(fe.location+E,ve/fe.locationSize,Re,ne,Le*Ae,(w+ve/fe.locationSize*E)*Ae)}else{if(q.isInstancedBufferAttribute){for(let pe=0;pe<fe.locationSize;pe++)A(fe.location+pe,q.meshPerAttribute);H.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let pe=0;pe<fe.locationSize;pe++)S(fe.location+pe);n.bindBuffer(34962,G);for(let pe=0;pe<fe.locationSize;pe++)U(fe.location+pe,ve/fe.locationSize,Re,ne,ve*Ae,ve/fe.locationSize*pe*Ae)}}else if(le!==void 0){const ne=le[Te];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(fe.location,ne);break;case 3:n.vertexAttrib3fv(fe.location,ne);break;case 4:n.vertexAttrib4fv(fe.location,ne);break;default:n.vertexAttrib1fv(fe.location,ne)}}}}R()}function y(){te();for(const H in o){const K=o[H];for(const ie in K){const Q=K[ie];for(const V in Q)_(Q[V].object),delete Q[V];delete K[ie]}delete o[H]}}function T(H){if(o[H.id]===void 0)return;const K=o[H.id];for(const ie in K){const Q=K[ie];for(const V in Q)_(Q[V].object),delete Q[V];delete K[ie]}delete o[H.id]}function re(H){for(const K in o){const ie=o[K];if(ie[H.id]===void 0)continue;const Q=ie[H.id];for(const V in Q)_(Q[V].object),delete Q[V];delete ie[H.id]}}function te(){N(),u=!0,c!==l&&(c=l,p(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:te,resetDefaultState:N,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfProgram:re,initAttributes:b,enableAttribute:S,disableUnusedAttributes:R}}function Zg(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,d),t.update(u,s,d)}this.setMode=a,this.render=o,this.renderInstances=l}function Jg(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(U){if(U==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(34930),h=n.getParameter(35660),p=n.getParameter(3379),_=n.getParameter(34076),v=n.getParameter(34921),m=n.getParameter(36347),f=n.getParameter(36348),C=n.getParameter(36349),b=h>0,S=a||e.has("OES_texture_float"),A=b&&S,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:C,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:R}}function Qg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Yn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const C=s?0:i,b=C*4;let S=f.clippingState||null;l.value=S,S=u(_,h,b,p);for(let A=0;A!==b;++A)S[A]=t[A];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,_!==!0||m===null){const f=p+v*4,C=h.matrixWorldInverse;o.getNormalMatrix(C),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,S=p;b!==v;++b,S+=4)a.copy(d[b]).applyMatrix4(C,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function e_(n){let e=new WeakMap;function t(a,o){return o===bo?a.mapping=Bi:o===wo&&(a.mapping=Hi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===bo||o===wo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new gp(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class t_ extends tu{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ai=4,Al=[.125,.215,.35,.446,.526,.582],Qn=20,oo=new t_,Cl=new Ye;let ao=null;const Kn=(1+Math.sqrt(5))/2,wi=1/Kn,Ll=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Kn,wi),new O(0,Kn,-wi),new O(wi,0,Kn),new O(-wi,0,Kn),new O(Kn,wi,0),new O(-Kn,wi,0)];class Pl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ao=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ao),e.scissorTest=!1,Kr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Hi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ao=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:pr,format:Yt,encoding:oi,depthBuffer:!1},r=Rl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n_(s)),this._blurMaterial=i_(s,e,t)}return r}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,i,r){const o=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Cl),u.toneMapping=Mn,u.autoClear=!1;const p=new Ss({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),_=new cn(new yr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Cl),v=!0);for(let f=0;f<6;f++){const C=f%3;C===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):C===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const b=this._cubeSize;Kr(r,C*b,f>2?b:0,b,b),u.setRenderTarget(r),v&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Bi||e.mapping===Hi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new cn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Kr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ll[(r-1)%Ll.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new cn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),v=s/_,m=isFinite(s)?1+Math.floor(u*v):Qn;m>Qn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const f=[];let C=0;for(let U=0;U<Qn;++U){const z=U/v,y=Math.exp(-z*z/2);f.push(y),U===0?C+=y:U<m&&(C+=2*y)}for(let U=0;U<f.length;U++)f[U]=f[U]/C;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:b}=this;h.dTheta.value=_,h.mipInt.value=b-i;const S=this._sizeLods[r],A=3*S*(r>b-Ai?r-b+Ai:0),R=4*(this._cubeSize-S);Kr(t,A,R,3*S,2*S),l.setRenderTarget(t),l.render(d,oo)}}function n_(n){const e=[],t=[],i=[];let r=n;const s=n-Ai+1+Al.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Ai?l=Al[a-n+Ai-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,_=6,v=3,m=2,f=1,C=new Float32Array(v*_*p),b=new Float32Array(m*_*p),S=new Float32Array(f*_*p);for(let R=0;R<p;R++){const U=R%3*2/3-1,z=R>2?0:-1,y=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];C.set(y,v*_*R),b.set(h,m*_*R);const T=[R,R,R,R,R,R];S.set(T,f*_*R)}const A=new zn;A.setAttribute("position",new Qt(C,v)),A.setAttribute("uv",new Qt(b,m)),A.setAttribute("faceIndex",new Qt(S,f)),e.push(A),r>Ai&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rl(n,e,t){const i=new ai(n,e,t);return i.texture.mapping=xs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function i_(n,e,t){const i=new Float32Array(Qn),r=new O(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ta(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Dl(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ta(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function Il(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ta(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ta(){return`

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
	`}function r_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bo||l===wo,u=l===Bi||l===Hi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Pl(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Pl(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function s_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function o_(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],34962);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,f=v.length;m<f;m++)e.update(v[m],34962)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const C=p.array;v=p.version;for(let b=0,S=C.length;b<S;b+=3){const A=C[b+0],R=C[b+1],U=C[b+2];h.push(A,R,R,U,U,A)}}else{const C=_.array;v=_.version;for(let b=0,S=C.length/3-1;b<S;b+=3){const A=b+0,R=b+1,U=b+2;h.push(A,R,R,U,U,A)}}const m=new(Xc(h)?Qc:Jc)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function a_(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){n.drawElements(s,p,o,h*l),t.update(p,s,1)}function d(h,p,_){if(_===0)return;let v,m;if(r)v=n,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,o,h*l,_),t.update(p,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d}function l_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function c_(n,e){return n[0]-e[0]}function u_(n,e){return Math.abs(e[1])-Math.abs(n[1])}function f_(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let K=function(){N.dispose(),s.delete(u),u.removeEventListener("dispose",K)};var p=K;m!==void 0&&m.texture.dispose();const b=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],U=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let y=0;b===!0&&(y=1),S===!0&&(y=2),A===!0&&(y=3);let T=u.attributes.position.count*y,re=1;T>e.maxTextureSize&&(re=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const te=new Float32Array(T*re*4*v),N=new Yc(te,T,re,v);N.type=ti,N.needsUpdate=!0;const H=y*4;for(let ie=0;ie<v;ie++){const Q=R[ie],V=U[ie],ue=z[ie],le=T*re*4*ie;for(let Te=0;Te<Q.count;Te++){const fe=Te*H;b===!0&&(a.fromBufferAttribute(Q,Te),te[le+fe+0]=a.x,te[le+fe+1]=a.y,te[le+fe+2]=a.z,te[le+fe+3]=0),S===!0&&(a.fromBufferAttribute(V,Te),te[le+fe+4]=a.x,te[le+fe+5]=a.y,te[le+fe+6]=a.z,te[le+fe+7]=0),A===!0&&(a.fromBufferAttribute(ue,Te),te[le+fe+8]=a.x,te[le+fe+9]=a.y,te[le+fe+10]=a.z,te[le+fe+11]=ue.itemSize===4?a.w:1)}}m={count:v,texture:N,size:new Ke(T,re)},s.set(u,m),u.addEventListener("dispose",K)}let f=0;for(let b=0;b<h.length;b++)f+=h[b];const C=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",C),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let v=i[u.id];if(v===void 0||v.length!==_){v=[];for(let S=0;S<_;S++)v[S]=[S,0];i[u.id]=v}for(let S=0;S<_;S++){const A=v[S];A[0]=S,A[1]=h[S]}v.sort(u_);for(let S=0;S<8;S++)S<_&&v[S][1]?(o[S][0]=v[S][0],o[S][1]=v[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(c_);const m=u.morphAttributes.position,f=u.morphAttributes.normal;let C=0;for(let S=0;S<8;S++){const A=o[S],R=A[0],U=A[1];R!==Number.MAX_SAFE_INTEGER&&U?(m&&u.getAttribute("morphTarget"+S)!==m[R]&&u.setAttribute("morphTarget"+S,m[R]),f&&u.getAttribute("morphNormal"+S)!==f[R]&&u.setAttribute("morphNormal"+S,f[R]),r[S]=U,C+=U):(m&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),f&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const b=u.morphTargetsRelative?1:1-C;d.getUniforms().setValue(n,"morphTargetBaseInfluence",b),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function d_(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);return r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const su=new Lt,ou=new Yc,au=new Qh,lu=new nu,Ul=[],Nl=[],Fl=new Float32Array(16),Ol=new Float32Array(9),zl=new Float32Array(4);function ji(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Ul[r];if(s===void 0&&(s=new Float32Array(r),Ul[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function at(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ys(n,e){let t=Nl[e];t===void 0&&(t=new Int32Array(e),Nl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function h_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function p_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2fv(this.addr,e),lt(t,e)}}function m_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;n.uniform3fv(this.addr,e),lt(t,e)}}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4fv(this.addr,e),lt(t,e)}}function __(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;zl.set(i),n.uniformMatrix2fv(this.addr,!1,zl),lt(t,i)}}function v_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Ol.set(i),n.uniformMatrix3fv(this.addr,!1,Ol),lt(t,i)}}function x_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),lt(t,e)}else{if(at(t,i))return;Fl.set(i),n.uniformMatrix4fv(this.addr,!1,Fl),lt(t,i)}}function M_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2iv(this.addr,e),lt(t,e)}}function y_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3iv(this.addr,e),lt(t,e)}}function b_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4iv(this.addr,e),lt(t,e)}}function w_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;n.uniform2uiv(this.addr,e),lt(t,e)}}function T_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;n.uniform3uiv(this.addr,e),lt(t,e)}}function A_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;n.uniform4uiv(this.addr,e),lt(t,e)}}function C_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||su,r)}function L_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||au,r)}function P_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||lu,r)}function R_(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ou,r)}function D_(n){switch(n){case 5126:return h_;case 35664:return p_;case 35665:return m_;case 35666:return g_;case 35674:return __;case 35675:return v_;case 35676:return x_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return y_;case 35669:case 35673:return b_;case 5125:return w_;case 36294:return E_;case 36295:return T_;case 36296:return A_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return L_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return R_}}function I_(n,e){n.uniform1fv(this.addr,e)}function U_(n,e){const t=ji(e,this.size,2);n.uniform2fv(this.addr,t)}function N_(n,e){const t=ji(e,this.size,3);n.uniform3fv(this.addr,t)}function F_(n,e){const t=ji(e,this.size,4);n.uniform4fv(this.addr,t)}function O_(n,e){const t=ji(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z_(n,e){const t=ji(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function B_(n,e){const t=ji(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function H_(n,e){n.uniform1iv(this.addr,e)}function G_(n,e){n.uniform2iv(this.addr,e)}function V_(n,e){n.uniform3iv(this.addr,e)}function k_(n,e){n.uniform4iv(this.addr,e)}function W_(n,e){n.uniform1uiv(this.addr,e)}function q_(n,e){n.uniform2uiv(this.addr,e)}function X_(n,e){n.uniform3uiv(this.addr,e)}function j_(n,e){n.uniform4uiv(this.addr,e)}function $_(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||su,s[a])}function Y_(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||au,s[a])}function K_(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||lu,s[a])}function Z_(n,e,t){const i=this.cache,r=e.length,s=ys(t,r);at(i,s)||(n.uniform1iv(this.addr,s),lt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ou,s[a])}function J_(n){switch(n){case 5126:return I_;case 35664:return U_;case 35665:return N_;case 35666:return F_;case 35674:return O_;case 35675:return z_;case 35676:return B_;case 5124:case 35670:return H_;case 35667:case 35671:return G_;case 35668:case 35672:return V_;case 35669:case 35673:return k_;case 5125:return W_;case 36294:return q_;case 36295:return X_;case 36296:return j_;case 35678:case 36198:case 36298:case 36306:case 35682:return $_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return K_;case 36289:case 36303:case 36311:case 36292:return Z_}}class Q_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=D_(t.type)}}class ev{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=J_(t.type)}}class tv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const lo=/(\w+)(\])?(\[|\.)?/g;function Bl(n,e){n.seq.push(e),n.map[e.id]=e}function nv(n,e,t){const i=n.name,r=i.length;for(lo.lastIndex=0;;){const s=lo.exec(i),a=lo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Bl(t,c===void 0?new Q_(o,n,e):new ev(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new tv(o),Bl(t,d)),t=d}}}class rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);nv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Hl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let iv=0;function rv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function sv(n){switch(n){case oi:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Gl(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+rv(n.getShaderSource(e),a)}else return r}function ov(n,e){const t=sv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function av(n,e){let t;switch(e){case vh:t="Linear";break;case xh:t="Reinhard";break;case Mh:t="OptimizedCineon";break;case Sh:t="ACESFilmic";break;case yh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function lv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(nr).join(`
`)}function cv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function nr(n){return n!==""}function Vl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(n){return n.replace(fv,dv)}function dv(n,e){const t=Ne[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Lo(t)}const hv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wl(n){return n.replace(hv,pv)}function pv(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ql(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function mv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===tr&&(e="SHADOWMAP_TYPE_VSM"),e}function gv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Bi:case Hi:e="ENVMAP_TYPE_CUBE";break;case xs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _v(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Hi:e="ENVMAP_MODE_REFRACTION";break}return e}function vv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Vc:e="ENVMAP_BLENDING_MULTIPLY";break;case gh:e="ENVMAP_BLENDING_MIX";break;case _h:e="ENVMAP_BLENDING_ADD";break}return e}function xv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Mv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=mv(t),c=gv(t),u=_v(t),d=vv(t),h=xv(t),p=t.isWebGL2?"":lv(t),_=cv(s),v=r.createProgram();let m,f,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(nr).join(`
`),m.length>0&&(m+=`
`),f=[p,_].filter(nr).join(`
`),f.length>0&&(f+=`
`)):(m=[ql(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(nr).join(`
`),f=[p,ql(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ne.tonemapping_pars_fragment:"",t.toneMapping!==Mn?av("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ne.encodings_pars_fragment,ov("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(nr).join(`
`)),a=Lo(a),a=Vl(a,t),a=kl(a,t),o=Lo(o),o=Vl(o,t),o=kl(o,t),a=Wl(a),o=Wl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=C+m+a,S=C+f+o,A=Hl(r,35633,b),R=Hl(r,35632,S);if(r.attachShader(v,A),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),n.debug.checkShaderErrors){const y=r.getProgramInfoLog(v).trim(),T=r.getShaderInfoLog(A).trim(),re=r.getShaderInfoLog(R).trim();let te=!0,N=!0;if(r.getProgramParameter(v,35714)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,R);else{const H=Gl(r,A,"vertex"),K=Gl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,35715)+`

Program Info Log: `+y+`
`+H+`
`+K)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(T===""||re==="")&&(N=!1);N&&(this.diagnostics={runnable:te,programLog:y,vertexShader:{log:T,prefix:m},fragmentShader:{log:re,prefix:f}})}r.deleteShader(A),r.deleteShader(R);let U;this.getUniforms=function(){return U===void 0&&(U=new rs(r,v)),U};let z;return this.getAttributes=function(){return z===void 0&&(z=uv(r,v)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=t.shaderName,this.id=iv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let Sv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bv(e),t.set(e,i)),i}}class bv{constructor(e){this.id=Sv++,this.code=e,this.usedTimes=0}}function wv(n,e,t,i,r,s,a){const o=new Kc,l=new yv,c=[],u=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===1?"uv2":"uv"}function m(y,T,re,te,N){const H=te.fog,K=N.geometry,ie=y.isMeshStandardMaterial?te.environment:null,Q=(y.isMeshStandardMaterial?t:e).get(y.envMap||ie),V=Q&&Q.mapping===xs?Q.image.height:null,ue=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const le=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=le!==void 0?le.length:0;let fe=0;K.morphAttributes.position!==void 0&&(fe=1),K.morphAttributes.normal!==void 0&&(fe=2),K.morphAttributes.color!==void 0&&(fe=3);let q,ne,ve,ge;if(ue){const Me=on[ue];q=Me.vertexShader,ne=Me.fragmentShader}else q=y.vertexShader,ne=y.fragmentShader,l.update(y),ve=l.getVertexShaderID(y),ge=l.getFragmentShaderID(y);const G=n.getRenderTarget(),Re=N.isInstancedMesh===!0,Ae=!!y.map,pe=!!y.matcap,Le=!!Q,w=!!y.aoMap,E=!!y.lightMap,D=!!y.bumpMap,$=!!y.normalMap,Y=!!y.displacementMap,se=!!y.emissiveMap,de=!!y.metalnessMap,J=!!y.roughnessMap,oe=y.clearcoat>0,ee=y.iridescence>0,x=y.sheen>0,g=y.transmission>0,P=oe&&!!y.clearcoatMap,B=oe&&!!y.clearcoatNormalMap,W=oe&&!!y.clearcoatRoughnessMap,ae=ee&&!!y.iridescenceMap,_e=ee&&!!y.iridescenceThicknessMap,he=x&&!!y.sheenColorMap,k=x&&!!y.sheenRoughnessMap,ye=!!y.specularMap,be=!!y.specularColorMap,we=!!y.specularIntensityMap,Se=g&&!!y.transmissionMap,xe=g&&!!y.thicknessMap,De=!!y.gradientMap,We=!!y.alphaMap,et=y.alphaTest>0,L=!!y.extensions,j=!!K.attributes.uv2;return{isWebGL2:u,shaderID:ue,shaderName:y.type,vertexShader:q,fragmentShader:ne,defines:y.defines,customVertexShaderID:ve,customFragmentShaderID:ge,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:Re,instancingColor:Re&&N.instanceColor!==null,supportsVertexTextures:h,outputEncoding:G===null?n.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:oi,map:Ae,matcap:pe,envMap:Le,envMapMode:Le&&Q.mapping,envMapCubeUVHeight:V,aoMap:w,lightMap:E,bumpMap:D,normalMap:$,displacementMap:h&&Y,emissiveMap:se,normalMapObjectSpace:$&&y.normalMapType===Vh,normalMapTangentSpace:$&&y.normalMapType===Gh,decodeVideoTexture:Ae&&y.map.isVideoTexture===!0&&y.map.encoding===$e,metalnessMap:de,roughnessMap:J,clearcoat:oe,clearcoatMap:P,clearcoatNormalMap:B,clearcoatRoughnessMap:W,iridescence:ee,iridescenceMap:ae,iridescenceThicknessMap:_e,sheen:x,sheenColorMap:he,sheenRoughnessMap:k,specularMap:ye,specularColorMap:be,specularIntensityMap:we,transmission:g,transmissionMap:Se,thicknessMap:xe,gradientMap:De,opaque:y.transparent===!1&&y.blending===Ri,alphaMap:We,alphaTest:et,combine:y.combine,mapUv:Ae&&v(y.map.channel),aoMapUv:w&&v(y.aoMap.channel),lightMapUv:E&&v(y.lightMap.channel),bumpMapUv:D&&v(y.bumpMap.channel),normalMapUv:$&&v(y.normalMap.channel),displacementMapUv:Y&&v(y.displacementMap.channel),emissiveMapUv:se&&v(y.emissiveMap.channel),metalnessMapUv:de&&v(y.metalnessMap.channel),roughnessMapUv:J&&v(y.roughnessMap.channel),clearcoatMapUv:P&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:B&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:he&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:k&&v(y.sheenRoughnessMap.channel),specularMapUv:ye&&v(y.specularMap.channel),specularColorMapUv:be&&v(y.specularColorMap.channel),specularIntensityMapUv:we&&v(y.specularIntensityMap.channel),transmissionMapUv:Se&&v(y.transmissionMap.channel),thicknessMapUv:xe&&v(y.thicknessMap.channel),alphaMapUv:We&&v(y.alphaMap.channel),vertexTangents:$&&!!K.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vertexUvs2:j,pointsUvs:N.isPoints===!0&&!!K.attributes.uv&&(Ae||We),fog:!!H,useFog:y.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&re.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Mn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===xn,flipSided:y.side===Ct,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:L&&y.extensions.derivatives===!0,extensionFragDepth:L&&y.extensions.fragDepth===!0,extensionDrawBuffers:L&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function f(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const re in y.defines)T.push(re),T.push(y.defines[re]);return y.isRawShaderMaterial===!1&&(C(T,y),b(T,y),T.push(n.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function C(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUvs2&&o.enable(13),T.vertexTangents&&o.enable(14),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.decodeVideoTexture&&o.enable(17),T.opaque&&o.enable(18),T.pointsUvs&&o.enable(19),y.push(o.mask)}function S(y){const T=_[y.type];let re;if(T){const te=on[T];re=dp.clone(te.uniforms)}else re=y.uniforms;return re}function A(y,T){let re;for(let te=0,N=c.length;te<N;te++){const H=c[te];if(H.cacheKey===T){re=H,++re.usedTimes;break}}return re===void 0&&(re=new Mv(n,T,y,s),c.push(re)),re}function R(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function U(y){l.remove(y)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:A,releaseProgram:R,releaseShaderCache:U,programs:c,dispose:z}}function Ev(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Tv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Xl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function jl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,p,_,v,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function o(d,h,p,_,v,m){const f=a(d,h,p,_,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,_,v,m){const f=a(d,h,p,_,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||Tv),i.length>1&&i.sort(h||Xl),r.length>1&&r.sort(h||Xl)}function u(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Av(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new jl,n.set(i,[a])):r>=s.length?(a=new jl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Cv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ye};break;case"SpotLight":t={position:new O,direction:new O,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Lv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Pv=0;function Rv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Dv(n,e){const t=new Cv,i=Lv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new O);const s=new O,a=new dt,o=new dt;function l(u,d){let h=0,p=0,_=0;for(let re=0;re<9;re++)r.probe[re].set(0,0,0);let v=0,m=0,f=0,C=0,b=0,S=0,A=0,R=0,U=0,z=0;u.sort(Rv);const y=d===!0?Math.PI:1;for(let re=0,te=u.length;re<te;re++){const N=u[re],H=N.color,K=N.intensity,ie=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=H.r*K*y,p+=H.g*K*y,_+=H.b*K*y;else if(N.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(N.sh.coefficients[V],K);else if(N.isDirectionalLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*y),N.castShadow){const ue=N.shadow,le=i.get(N);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,r.directionalShadow[v]=le,r.directionalShadowMap[v]=Q,r.directionalShadowMatrix[v]=N.shadow.matrix,S++}r.directional[v]=V,v++}else if(N.isSpotLight){const V=t.get(N);V.position.setFromMatrixPosition(N.matrixWorld),V.color.copy(H).multiplyScalar(K*y),V.distance=ie,V.coneCos=Math.cos(N.angle),V.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),V.decay=N.decay,r.spot[f]=V;const ue=N.shadow;if(N.map&&(r.spotLightMap[U]=N.map,U++,ue.updateMatrices(N),N.castShadow&&z++),r.spotLightMatrix[f]=ue.matrix,N.castShadow){const le=i.get(N);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,r.spotShadow[f]=le,r.spotShadowMap[f]=Q,R++}f++}else if(N.isRectAreaLight){const V=t.get(N);V.color.copy(H).multiplyScalar(K),V.halfWidth.set(N.width*.5,0,0),V.halfHeight.set(0,N.height*.5,0),r.rectArea[C]=V,C++}else if(N.isPointLight){const V=t.get(N);if(V.color.copy(N.color).multiplyScalar(N.intensity*y),V.distance=N.distance,V.decay=N.decay,N.castShadow){const ue=N.shadow,le=i.get(N);le.shadowBias=ue.bias,le.shadowNormalBias=ue.normalBias,le.shadowRadius=ue.radius,le.shadowMapSize=ue.mapSize,le.shadowCameraNear=ue.camera.near,le.shadowCameraFar=ue.camera.far,r.pointShadow[m]=le,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=N.shadow.matrix,A++}r.point[m]=V,m++}else if(N.isHemisphereLight){const V=t.get(N);V.skyColor.copy(N.color).multiplyScalar(K*y),V.groundColor.copy(N.groundColor).multiplyScalar(K*y),r.hemi[b]=V,b++}}C>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const T=r.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==C||T.hemiLength!==b||T.numDirectionalShadows!==S||T.numPointShadows!==A||T.numSpotShadows!==R||T.numSpotMaps!==U)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=C,r.point.length=m,r.hemi.length=b,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=R+U-z,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=z,T.directionalLength=v,T.pointLength=m,T.spotLength=f,T.rectAreaLength=C,T.hemiLength=b,T.numDirectionalShadows=S,T.numPointShadows=A,T.numSpotShadows=R,T.numSpotMaps=U,r.version=Pv++)}function c(u,d){let h=0,p=0,_=0,v=0,m=0;const f=d.matrixWorldInverse;for(let C=0,b=u.length;C<b;C++){const S=u[C];if(S.isDirectionalLight){const A=r.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),h++}else if(S.isSpotLight){const A=r.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(f),_++}else if(S.isRectAreaLight){const A=r.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),o.identity(),a.copy(S.matrixWorld),a.premultiply(f),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),v++}else if(S.isPointLight){const A=r.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:r}}function $l(n,e){const t=new Dv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){t.setup(i,d)}function c(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Iv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new $l(n,e),t.set(s,[l])):a>=o.length?(l=new $l(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Uv extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nv extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;function zv(n,e,t){let i=new iu;const r=new Ke,s=new Ke,a=new ft,o=new Uv({depthPacking:Hh}),l=new Nv,c={},u=t.maxTextureSize,d={[Nn]:Ct,[Ct]:Nn,[xn]:xn},h=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Fv,fragmentShader:Ov}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new zn;_.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new cn(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc,this.render=function(S,A,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const U=n.getRenderTarget(),z=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),T=n.state;T.setBlending(In),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let re=0,te=S.length;re<te;re++){const N=S[re],H=N.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const K=H.getFrameExtents();if(r.multiply(K),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,H.mapSize.y=s.y)),H.map===null){const Q=this.type!==tr?{minFilter:bt,magFilter:bt}:{};H.map=new ai(r.x,r.y,Q),H.map.texture.name=N.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ie=H.getViewportCount();for(let Q=0;Q<ie;Q++){const V=H.getViewport(Q);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),T.viewport(a),H.updateMatrices(N,Q),i=H.getFrustum(),b(A,R,H.camera,N,this.type)}H.isPointLightShadow!==!0&&this.type===tr&&f(H,R),H.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(U,z,y)};function f(S,A){const R=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ai(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,R,h,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,R,p,v,null)}function C(S,A,R,U){let z=null;const y=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(y!==void 0)z=y;else if(z=R.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const T=z.uuid,re=A.uuid;let te=c[T];te===void 0&&(te={},c[T]=te);let N=te[re];N===void 0&&(N=z.clone(),te[re]=N),z=N}if(z.visible=A.visible,z.wireframe=A.wireframe,U===tr?z.side=A.shadowSide!==null?A.shadowSide:A.side:z.side=A.shadowSide!==null?A.shadowSide:d[A.side],z.alphaMap=A.alphaMap,z.alphaTest=A.alphaTest,z.map=A.map,z.clipShadows=A.clipShadows,z.clippingPlanes=A.clippingPlanes,z.clipIntersection=A.clipIntersection,z.displacementMap=A.displacementMap,z.displacementScale=A.displacementScale,z.displacementBias=A.displacementBias,z.wireframeLinewidth=A.wireframeLinewidth,z.linewidth=A.linewidth,R.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const T=n.properties.get(z);T.light=R}return z}function b(S,A,R,U,z){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&z===tr)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const re=e.update(S),te=S.material;if(Array.isArray(te)){const N=re.groups;for(let H=0,K=N.length;H<K;H++){const ie=N[H],Q=te[ie.materialIndex];if(Q&&Q.visible){const V=C(S,Q,U,z);n.renderBufferDirect(R,null,re,V,S,ie)}}}else if(te.visible){const N=C(S,te,U,z);n.renderBufferDirect(R,null,re,N,S,null)}}const T=S.children;for(let re=0,te=T.length;re<te;re++)b(T[re],A,R,U,z)}}function Bv(n,e,t){const i=t.isWebGL2;function r(){let L=!1;const j=new ft;let ce=null;const Me=new ft(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!L&&(n.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){L=Ee},setClear:function(Ee,je,Qe,pt,wn){wn===!0&&(Ee*=pt,je*=pt,Qe*=pt),j.set(Ee,je,Qe,pt),Me.equals(j)===!1&&(n.clearColor(Ee,je,Qe,pt),Me.copy(j))},reset:function(){L=!1,ce=null,Me.set(-1,0,0,0)}}}function s(){let L=!1,j=null,ce=null,Me=null;return{setTest:function(Ee){Ee?G(2929):Re(2929)},setMask:function(Ee){j!==Ee&&!L&&(n.depthMask(Ee),j=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case ch:n.depthFunc(512);break;case uh:n.depthFunc(519);break;case fh:n.depthFunc(513);break;case yo:n.depthFunc(515);break;case dh:n.depthFunc(514);break;case hh:n.depthFunc(518);break;case ph:n.depthFunc(516);break;case mh:n.depthFunc(517);break;default:n.depthFunc(515)}ce=Ee}},setLocked:function(Ee){L=Ee},setClear:function(Ee){Me!==Ee&&(n.clearDepth(Ee),Me=Ee)},reset:function(){L=!1,j=null,ce=null,Me=null}}}function a(){let L=!1,j=null,ce=null,Me=null,Ee=null,je=null,Qe=null,pt=null,wn=null;return{setTest:function(tt){L||(tt?G(2960):Re(2960))},setMask:function(tt){j!==tt&&!L&&(n.stencilMask(tt),j=tt)},setFunc:function(tt,zt,en){(ce!==tt||Me!==zt||Ee!==en)&&(n.stencilFunc(tt,zt,en),ce=tt,Me=zt,Ee=en)},setOp:function(tt,zt,en){(je!==tt||Qe!==zt||pt!==en)&&(n.stencilOp(tt,zt,en),je=tt,Qe=zt,pt=en)},setLocked:function(tt){L=tt},setClear:function(tt){wn!==tt&&(n.clearStencil(tt),wn=tt)},reset:function(){L=!1,j=null,ce=null,Me=null,Ee=null,je=null,Qe=null,pt=null,wn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,v=[],m=null,f=!1,C=null,b=null,S=null,A=null,R=null,U=null,z=null,y=!1,T=null,re=null,te=null,N=null,H=null;const K=n.getParameter(35661);let ie=!1,Q=0;const V=n.getParameter(7938);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),ie=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ie=Q>=2);let ue=null,le={};const Te=n.getParameter(3088),fe=n.getParameter(2978),q=new ft().fromArray(Te),ne=new ft().fromArray(fe);function ve(L,j,ce){const Me=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(L,Ee),n.texParameteri(L,10241,9728),n.texParameteri(L,10240,9728);for(let je=0;je<ce;je++)n.texImage2D(j+je,0,6408,1,1,0,6408,5121,Me);return Ee}const ge={};ge[3553]=ve(3553,3553,1),ge[34067]=ve(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),G(2929),l.setFunc(yo),Y(!1),se(Ua),G(2884),D(In);function G(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function Re(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Ae(L,j){return p[L]!==j?(n.bindFramebuffer(L,j),p[L]=j,i&&(L===36009&&(p[36160]=j),L===36160&&(p[36009]=j)),!0):!1}function pe(L,j){let ce=v,Me=!1;if(L)if(ce=_.get(j),ce===void 0&&(ce=[],_.set(j,ce)),L.isWebGLMultipleRenderTargets){const Ee=L.texture;if(ce.length!==Ee.length||ce[0]!==36064){for(let je=0,Qe=Ee.length;je<Qe;je++)ce[je]=36064+je;ce.length=Ee.length,Me=!0}}else ce[0]!==36064&&(ce[0]=36064,Me=!0);else ce[0]!==1029&&(ce[0]=1029,Me=!0);Me&&(t.isWebGL2?n.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function Le(L){return m!==L?(n.useProgram(L),m=L,!0):!1}const w={[Ei]:32774,[Jd]:32778,[Qd]:32779};if(i)w[za]=32775,w[Ba]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(w[za]=L.MIN_EXT,w[Ba]=L.MAX_EXT)}const E={[eh]:0,[th]:1,[nh]:768,[Hc]:770,[lh]:776,[oh]:774,[rh]:772,[ih]:769,[Gc]:771,[ah]:775,[sh]:773};function D(L,j,ce,Me,Ee,je,Qe,pt){if(L===In){f===!0&&(Re(3042),f=!1);return}if(f===!1&&(G(3042),f=!0),L!==Zd){if(L!==C||pt!==y){if((b!==Ei||R!==Ei)&&(n.blendEquation(32774),b=Ei,R=Ei),pt)switch(L){case Ri:n.blendFuncSeparate(1,771,1,771);break;case Na:n.blendFunc(1,1);break;case Fa:n.blendFuncSeparate(0,769,0,1);break;case Oa:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ri:n.blendFuncSeparate(770,771,1,771);break;case Na:n.blendFunc(770,1);break;case Fa:n.blendFuncSeparate(0,769,0,1);break;case Oa:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,A=null,U=null,z=null,C=L,y=pt}return}Ee=Ee||j,je=je||ce,Qe=Qe||Me,(j!==b||Ee!==R)&&(n.blendEquationSeparate(w[j],w[Ee]),b=j,R=Ee),(ce!==S||Me!==A||je!==U||Qe!==z)&&(n.blendFuncSeparate(E[ce],E[Me],E[je],E[Qe]),S=ce,A=Me,U=je,z=Qe),C=L,y=!1}function $(L,j){L.side===xn?Re(2884):G(2884);let ce=L.side===Ct;j&&(ce=!ce),Y(ce),L.blending===Ri&&L.transparent===!1?D(In):D(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Me=L.stencilWrite;c.setTest(Me),Me&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),J(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?G(32926):Re(32926)}function Y(L){T!==L&&(L?n.frontFace(2304):n.frontFace(2305),T=L)}function se(L){L!==$d?(G(2884),L!==re&&(L===Ua?n.cullFace(1029):L===Yd?n.cullFace(1028):n.cullFace(1032))):Re(2884),re=L}function de(L){L!==te&&(ie&&n.lineWidth(L),te=L)}function J(L,j,ce){L?(G(32823),(N!==j||H!==ce)&&(n.polygonOffset(j,ce),N=j,H=ce)):Re(32823)}function oe(L){L?G(3089):Re(3089)}function ee(L){L===void 0&&(L=33984+K-1),ue!==L&&(n.activeTexture(L),ue=L)}function x(L,j,ce){ce===void 0&&(ue===null?ce=33984+K-1:ce=ue);let Me=le[ce];Me===void 0&&(Me={type:void 0,texture:void 0},le[ce]=Me),(Me.type!==L||Me.texture!==j)&&(ue!==ce&&(n.activeTexture(ce),ue=ce),n.bindTexture(L,j||ge[L]),Me.type=L,Me.texture=j)}function g(){const L=le[ue];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function P(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function W(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function k(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(L){q.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),q.copy(L))}function xe(L){ne.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ne.copy(L))}function De(L,j){let ce=d.get(j);ce===void 0&&(ce=new WeakMap,d.set(j,ce));let Me=ce.get(L);Me===void 0&&(Me=n.getUniformBlockIndex(j,L.name),ce.set(L,Me))}function We(L,j){const Me=d.get(j).get(L);u.get(j)!==Me&&(n.uniformBlockBinding(j,Me,L.__bindingPointIndex),u.set(j,Me))}function et(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,le={},p={},_=new WeakMap,v=[],m=null,f=!1,C=null,b=null,S=null,A=null,R=null,U=null,z=null,y=!1,T=null,re=null,te=null,N=null,H=null,q.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:G,disable:Re,bindFramebuffer:Ae,drawBuffers:pe,useProgram:Le,setBlending:D,setMaterial:$,setFlipSided:Y,setCullFace:se,setLineWidth:de,setPolygonOffset:J,setScissorTest:oe,activeTexture:ee,bindTexture:x,unbindTexture:g,compressedTexImage2D:P,compressedTexImage3D:B,texImage2D:be,texImage3D:we,updateUBOMapping:De,uniformBlockBinding:We,texStorage2D:k,texStorage3D:ye,texSubImage2D:W,texSubImage3D:ae,compressedTexSubImage2D:_e,compressedTexSubImage3D:he,scissor:Se,viewport:xe,reset:et}}function Hv(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(x,g){return f?new OffscreenCanvas(x,g):gr("canvas")}function b(x,g,P,B){let W=1;if((x.width>B||x.height>B)&&(W=B/Math.max(x.width,x.height)),W<1||g===!0)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap){const ae=g?qh:Math.floor,_e=ae(W*x.width),he=ae(W*x.height);v===void 0&&(v=C(_e,he));const k=P?C(_e,he):v;return k.width=_e,k.height=he,k.getContext("2d").drawImage(x,0,0,_e,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+_e+"x"+he+")."),k}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function S(x){return dl(x.width)&&dl(x.height)}function A(x){return o?!1:x.wrapS!==$t||x.wrapT!==$t||x.minFilter!==bt&&x.minFilter!==Ht}function R(x,g){return x.generateMipmaps&&g&&x.minFilter!==bt&&x.minFilter!==Ht}function U(x){n.generateMipmap(x)}function z(x,g,P,B,W=!1){if(o===!1)return g;if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let ae=g;return g===6403&&(P===5126&&(ae=33326),P===5131&&(ae=33325),P===5121&&(ae=33321)),g===33319&&(P===5126&&(ae=33328),P===5131&&(ae=33327),P===5121&&(ae=33323)),g===6408&&(P===5126&&(ae=34836),P===5131&&(ae=34842),P===5121&&(ae=B===$e&&W===!1?35907:32856),P===32819&&(ae=32854),P===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function y(x,g,P){return R(x,P)===!0||x.isFramebufferTexture&&x.minFilter!==bt&&x.minFilter!==Ht?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function T(x){return x===bt||x===Ha||x===Us?9728:9729}function re(x){const g=x.target;g.removeEventListener("dispose",re),N(g),g.isVideoTexture&&_.delete(g)}function te(x){const g=x.target;g.removeEventListener("dispose",te),K(g)}function N(x){const g=i.get(x);if(g.__webglInit===void 0)return;const P=x.source,B=m.get(P);if(B){const W=B[g.__cacheKey];W.usedTimes--,W.usedTimes===0&&H(x),Object.keys(B).length===0&&m.delete(P)}i.remove(x)}function H(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const P=x.source,B=m.get(P);delete B[g.__cacheKey],a.memory.textures--}function K(x){const g=x.texture,P=i.get(x),B=i.get(g);if(B.__webglTexture!==void 0&&(n.deleteTexture(B.__webglTexture),a.memory.textures--),x.depthTexture&&x.depthTexture.dispose(),x.isWebGLCubeRenderTarget)for(let W=0;W<6;W++)n.deleteFramebuffer(P.__webglFramebuffer[W]),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer[W]);else{if(n.deleteFramebuffer(P.__webglFramebuffer),P.__webglDepthbuffer&&n.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&n.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let W=0;W<P.__webglColorRenderbuffer.length;W++)P.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(P.__webglColorRenderbuffer[W]);P.__webglDepthRenderbuffer&&n.deleteRenderbuffer(P.__webglDepthRenderbuffer)}if(x.isWebGLMultipleRenderTargets)for(let W=0,ae=g.length;W<ae;W++){const _e=i.get(g[W]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[W])}i.remove(g),i.remove(x)}let ie=0;function Q(){ie=0}function V(){const x=ie;return x>=l&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+l),ie+=1,x}function ue(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.encoding),g.join()}function le(x,g){const P=i.get(x);if(x.isVideoTexture&&oe(x),x.isRenderTargetTexture===!1&&x.version>0&&P.__version!==x.version){const B=x.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(P,x,g);return}}t.bindTexture(3553,P.__webglTexture,33984+g)}function Te(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){Re(P,x,g);return}t.bindTexture(35866,P.__webglTexture,33984+g)}function fe(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){Re(P,x,g);return}t.bindTexture(32879,P.__webglTexture,33984+g)}function q(x,g){const P=i.get(x);if(x.version>0&&P.__version!==x.version){Ae(P,x,g);return}t.bindTexture(34067,P.__webglTexture,33984+g)}const ne={[Eo]:10497,[$t]:33071,[To]:33648},ve={[bt]:9728,[Ha]:9984,[Us]:9986,[Ht]:9729,[bh]:9985,[hr]:9987};function ge(x,g,P){if(P?(n.texParameteri(x,10242,ne[g.wrapS]),n.texParameteri(x,10243,ne[g.wrapT]),(x===32879||x===35866)&&n.texParameteri(x,32882,ne[g.wrapR]),n.texParameteri(x,10240,ve[g.magFilter]),n.texParameteri(x,10241,ve[g.minFilter])):(n.texParameteri(x,10242,33071),n.texParameteri(x,10243,33071),(x===32879||x===35866)&&n.texParameteri(x,32882,33071),(g.wrapS!==$t||g.wrapT!==$t)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(x,10240,T(g.magFilter)),n.texParameteri(x,10241,T(g.minFilter)),g.minFilter!==bt&&g.minFilter!==Ht&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===bt||g.minFilter!==Us&&g.minFilter!==hr||g.type===ti&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===pr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(x,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function G(x,g){let P=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",re));const B=g.source;let W=m.get(B);W===void 0&&(W={},m.set(B,W));const ae=ue(g);if(ae!==x.__cacheKey){W[ae]===void 0&&(W[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,P=!0),W[ae].usedTimes++;const _e=W[x.__cacheKey];_e!==void 0&&(W[x.__cacheKey].usedTimes--,_e.usedTimes===0&&H(g)),x.__cacheKey=ae,x.__webglTexture=W[ae].texture}return P}function Re(x,g,P){let B=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(B=35866),g.isData3DTexture&&(B=32879);const W=G(x,g),ae=g.source;t.bindTexture(B,x.__webglTexture,33984+P);const _e=i.get(ae);if(ae.version!==_e.__version||W===!0){t.activeTexture(33984+P),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const he=A(g)&&S(g.image)===!1;let k=b(g.image,he,!1,u);k=ee(g,k);const ye=S(k)||o,be=s.convert(g.format,g.encoding);let we=s.convert(g.type),Se=z(g.internalFormat,be,we,g.encoding,g.isVideoTexture);ge(B,g,ye);let xe;const De=g.mipmaps,We=o&&g.isVideoTexture!==!0,et=_e.__version===void 0||W===!0,L=y(g,k,ye);if(g.isDepthTexture)Se=6402,o?g.type===ti?Se=36012:g.type===ei?Se=33190:g.type===Di?Se=35056:Se=33189:g.type===ti&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ri&&Se===6402&&g.type!==Wc&&g.type!==ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ei,we=s.convert(g.type)),g.format===Gi&&Se===6402&&(Se=34041,g.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Di,we=s.convert(g.type))),et&&(We?t.texStorage2D(3553,1,Se,k.width,k.height):t.texImage2D(3553,0,Se,k.width,k.height,0,be,we,null));else if(g.isDataTexture)if(De.length>0&&ye){We&&et&&t.texStorage2D(3553,L,Se,De[0].width,De[0].height);for(let j=0,ce=De.length;j<ce;j++)xe=De[j],We?t.texSubImage2D(3553,j,0,0,xe.width,xe.height,be,we,xe.data):t.texImage2D(3553,j,Se,xe.width,xe.height,0,be,we,xe.data);g.generateMipmaps=!1}else We?(et&&t.texStorage2D(3553,L,Se,k.width,k.height),t.texSubImage2D(3553,0,0,0,k.width,k.height,be,we,k.data)):t.texImage2D(3553,0,Se,k.width,k.height,0,be,we,k.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){We&&et&&t.texStorage3D(35866,L,Se,De[0].width,De[0].height,k.depth);for(let j=0,ce=De.length;j<ce;j++)xe=De[j],g.format!==Yt?be!==null?We?t.compressedTexSubImage3D(35866,j,0,0,0,xe.width,xe.height,k.depth,be,xe.data,0,0):t.compressedTexImage3D(35866,j,Se,xe.width,xe.height,k.depth,0,xe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage3D(35866,j,0,0,0,xe.width,xe.height,k.depth,be,we,xe.data):t.texImage3D(35866,j,Se,xe.width,xe.height,k.depth,0,be,we,xe.data)}else{We&&et&&t.texStorage2D(3553,L,Se,De[0].width,De[0].height);for(let j=0,ce=De.length;j<ce;j++)xe=De[j],g.format!==Yt?be!==null?We?t.compressedTexSubImage2D(3553,j,0,0,xe.width,xe.height,be,xe.data):t.compressedTexImage2D(3553,j,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?t.texSubImage2D(3553,j,0,0,xe.width,xe.height,be,we,xe.data):t.texImage2D(3553,j,Se,xe.width,xe.height,0,be,we,xe.data)}else if(g.isDataArrayTexture)We?(et&&t.texStorage3D(35866,L,Se,k.width,k.height,k.depth),t.texSubImage3D(35866,0,0,0,0,k.width,k.height,k.depth,be,we,k.data)):t.texImage3D(35866,0,Se,k.width,k.height,k.depth,0,be,we,k.data);else if(g.isData3DTexture)We?(et&&t.texStorage3D(32879,L,Se,k.width,k.height,k.depth),t.texSubImage3D(32879,0,0,0,0,k.width,k.height,k.depth,be,we,k.data)):t.texImage3D(32879,0,Se,k.width,k.height,k.depth,0,be,we,k.data);else if(g.isFramebufferTexture){if(et)if(We)t.texStorage2D(3553,L,Se,k.width,k.height);else{let j=k.width,ce=k.height;for(let Me=0;Me<L;Me++)t.texImage2D(3553,Me,Se,j,ce,0,be,we,null),j>>=1,ce>>=1}}else if(De.length>0&&ye){We&&et&&t.texStorage2D(3553,L,Se,De[0].width,De[0].height);for(let j=0,ce=De.length;j<ce;j++)xe=De[j],We?t.texSubImage2D(3553,j,0,0,be,we,xe):t.texImage2D(3553,j,Se,be,we,xe);g.generateMipmaps=!1}else We?(et&&t.texStorage2D(3553,L,Se,k.width,k.height),t.texSubImage2D(3553,0,0,0,be,we,k)):t.texImage2D(3553,0,Se,be,we,k);R(g,ye)&&U(B),_e.__version=ae.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Ae(x,g,P){if(g.image.length!==6)return;const B=G(x,g),W=g.source;t.bindTexture(34067,x.__webglTexture,33984+P);const ae=i.get(W);if(W.version!==ae.__version||B===!0){t.activeTexture(33984+P),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,he=g.image[0]&&g.image[0].isDataTexture,k=[];for(let j=0;j<6;j++)!_e&&!he?k[j]=b(g.image[j],!1,!0,c):k[j]=he?g.image[j].image:g.image[j],k[j]=ee(g,k[j]);const ye=k[0],be=S(ye)||o,we=s.convert(g.format,g.encoding),Se=s.convert(g.type),xe=z(g.internalFormat,we,Se,g.encoding),De=o&&g.isVideoTexture!==!0,We=ae.__version===void 0||B===!0;let et=y(g,ye,be);ge(34067,g,be);let L;if(_e){De&&We&&t.texStorage2D(34067,et,xe,ye.width,ye.height);for(let j=0;j<6;j++){L=k[j].mipmaps;for(let ce=0;ce<L.length;ce++){const Me=L[ce];g.format!==Yt?we!==null?De?t.compressedTexSubImage2D(34069+j,ce,0,0,Me.width,Me.height,we,Me.data):t.compressedTexImage2D(34069+j,ce,xe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+j,ce,0,0,Me.width,Me.height,we,Se,Me.data):t.texImage2D(34069+j,ce,xe,Me.width,Me.height,0,we,Se,Me.data)}}}else{L=g.mipmaps,De&&We&&(L.length>0&&et++,t.texStorage2D(34067,et,xe,k[0].width,k[0].height));for(let j=0;j<6;j++)if(he){De?t.texSubImage2D(34069+j,0,0,0,k[j].width,k[j].height,we,Se,k[j].data):t.texImage2D(34069+j,0,xe,k[j].width,k[j].height,0,we,Se,k[j].data);for(let ce=0;ce<L.length;ce++){const Ee=L[ce].image[j].image;De?t.texSubImage2D(34069+j,ce+1,0,0,Ee.width,Ee.height,we,Se,Ee.data):t.texImage2D(34069+j,ce+1,xe,Ee.width,Ee.height,0,we,Se,Ee.data)}}else{De?t.texSubImage2D(34069+j,0,0,0,we,Se,k[j]):t.texImage2D(34069+j,0,xe,we,Se,k[j]);for(let ce=0;ce<L.length;ce++){const Me=L[ce];De?t.texSubImage2D(34069+j,ce+1,0,0,we,Se,Me.image[j]):t.texImage2D(34069+j,ce+1,xe,we,Se,Me.image[j])}}}R(g,be)&&U(34067),ae.__version=W.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function pe(x,g,P,B,W){const ae=s.convert(P.format,P.encoding),_e=s.convert(P.type),he=z(P.internalFormat,ae,_e,P.encoding);i.get(g).__hasExternalTextures||(W===32879||W===35866?t.texImage3D(W,0,he,g.width,g.height,g.depth,0,ae,_e,null):t.texImage2D(W,0,he,g.width,g.height,0,ae,_e,null)),t.bindFramebuffer(36160,x),J(g)?h.framebufferTexture2DMultisampleEXT(36160,B,W,i.get(P).__webglTexture,0,de(g)):(W===3553||W>=34069&&W<=34074)&&n.framebufferTexture2D(36160,B,W,i.get(P).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(x,g,P){if(n.bindRenderbuffer(36161,x),g.depthBuffer&&!g.stencilBuffer){let B=33189;if(P||J(g)){const W=g.depthTexture;W&&W.isDepthTexture&&(W.type===ti?B=36012:W.type===ei&&(B=33190));const ae=de(g);J(g)?h.renderbufferStorageMultisampleEXT(36161,ae,B,g.width,g.height):n.renderbufferStorageMultisample(36161,ae,B,g.width,g.height)}else n.renderbufferStorage(36161,B,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,x)}else if(g.depthBuffer&&g.stencilBuffer){const B=de(g);P&&J(g)===!1?n.renderbufferStorageMultisample(36161,B,35056,g.width,g.height):J(g)?h.renderbufferStorageMultisampleEXT(36161,B,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,x)}else{const B=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let W=0;W<B.length;W++){const ae=B[W],_e=s.convert(ae.format,ae.encoding),he=s.convert(ae.type),k=z(ae.internalFormat,_e,he,ae.encoding),ye=de(g);P&&J(g)===!1?n.renderbufferStorageMultisample(36161,ye,k,g.width,g.height):J(g)?h.renderbufferStorageMultisampleEXT(36161,ye,k,g.width,g.height):n.renderbufferStorage(36161,k,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function w(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),le(g.depthTexture,0);const B=i.get(g.depthTexture).__webglTexture,W=de(g);if(g.depthTexture.format===ri)J(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,W):n.framebufferTexture2D(36160,36096,3553,B,0);else if(g.depthTexture.format===Gi)J(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,W):n.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function E(x){const g=i.get(x),P=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");w(g.__webglFramebuffer,x)}else if(P){g.__webglDepthbuffer=[];for(let B=0;B<6;B++)t.bindFramebuffer(36160,g.__webglFramebuffer[B]),g.__webglDepthbuffer[B]=n.createRenderbuffer(),Le(g.__webglDepthbuffer[B],x,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),Le(g.__webglDepthbuffer,x,!1);t.bindFramebuffer(36160,null)}function D(x,g,P){const B=i.get(x);g!==void 0&&pe(B.__webglFramebuffer,x,x.texture,36064,3553),P!==void 0&&E(x)}function $(x){const g=x.texture,P=i.get(x),B=i.get(g);x.addEventListener("dispose",te),x.isWebGLMultipleRenderTargets!==!0&&(B.__webglTexture===void 0&&(B.__webglTexture=n.createTexture()),B.__version=g.version,a.memory.textures++);const W=x.isWebGLCubeRenderTarget===!0,ae=x.isWebGLMultipleRenderTargets===!0,_e=S(x)||o;if(W){P.__webglFramebuffer=[];for(let he=0;he<6;he++)P.__webglFramebuffer[he]=n.createFramebuffer()}else{if(P.__webglFramebuffer=n.createFramebuffer(),ae)if(r.drawBuffers){const he=x.texture;for(let k=0,ye=he.length;k<ye;k++){const be=i.get(he[k]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&x.samples>0&&J(x)===!1){const he=ae?g:[g];P.__webglMultisampledFramebuffer=n.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,P.__webglMultisampledFramebuffer);for(let k=0;k<he.length;k++){const ye=he[k];P.__webglColorRenderbuffer[k]=n.createRenderbuffer(),n.bindRenderbuffer(36161,P.__webglColorRenderbuffer[k]);const be=s.convert(ye.format,ye.encoding),we=s.convert(ye.type),Se=z(ye.internalFormat,be,we,ye.encoding,x.isXRRenderTarget===!0),xe=de(x);n.renderbufferStorageMultisample(36161,xe,Se,x.width,x.height),n.framebufferRenderbuffer(36160,36064+k,36161,P.__webglColorRenderbuffer[k])}n.bindRenderbuffer(36161,null),x.depthBuffer&&(P.__webglDepthRenderbuffer=n.createRenderbuffer(),Le(P.__webglDepthRenderbuffer,x,!0)),t.bindFramebuffer(36160,null)}}if(W){t.bindTexture(34067,B.__webglTexture),ge(34067,g,_e);for(let he=0;he<6;he++)pe(P.__webglFramebuffer[he],x,g,36064,34069+he);R(g,_e)&&U(34067),t.unbindTexture()}else if(ae){const he=x.texture;for(let k=0,ye=he.length;k<ye;k++){const be=he[k],we=i.get(be);t.bindTexture(3553,we.__webglTexture),ge(3553,be,_e),pe(P.__webglFramebuffer,x,be,36064+k,3553),R(be,_e)&&U(3553)}t.unbindTexture()}else{let he=3553;(x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(o?he=x.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,B.__webglTexture),ge(he,g,_e),pe(P.__webglFramebuffer,x,g,36064,he),R(g,_e)&&U(he),t.unbindTexture()}x.depthBuffer&&E(x)}function Y(x){const g=S(x)||o,P=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let B=0,W=P.length;B<W;B++){const ae=P[B];if(R(ae,g)){const _e=x.isWebGLCubeRenderTarget?34067:3553,he=i.get(ae).__webglTexture;t.bindTexture(_e,he),U(_e),t.unbindTexture()}}}function se(x){if(o&&x.samples>0&&J(x)===!1){const g=x.isWebGLMultipleRenderTargets?x.texture:[x.texture],P=x.width,B=x.height;let W=16384;const ae=[],_e=x.stencilBuffer?33306:36096,he=i.get(x),k=x.isWebGLMultipleRenderTargets===!0;if(k)for(let ye=0;ye<g.length;ye++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let ye=0;ye<g.length;ye++){ae.push(36064+ye),x.depthBuffer&&ae.push(_e);const be=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(be===!1&&(x.depthBuffer&&(W|=256),x.stencilBuffer&&(W|=1024)),k&&n.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[ye]),be===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),k){const we=i.get(g[ye]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,we,0)}n.blitFramebuffer(0,0,P,B,0,0,P,B,W,9728),p&&n.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),k)for(let ye=0;ye<g.length;ye++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ye,36161,he.__webglColorRenderbuffer[ye]);const be=i.get(g[ye]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ye,3553,be,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function de(x){return Math.min(d,x.samples)}function J(x){const g=i.get(x);return o&&x.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function oe(x){const g=a.render.frame;_.get(x)!==g&&(_.set(x,g),x.update())}function ee(x,g){const P=x.encoding,B=x.format,W=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||x.format===Ao||P!==oi&&(P===$e?o===!1?e.has("EXT_sRGB")===!0&&B===Yt?(x.format=Ao,x.minFilter=Ht,x.generateMipmaps=!1):g=jc.sRGBToLinear(g):(B!==Yt||W!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",P)),g}this.allocateTextureUnit=V,this.resetTextureUnits=Q,this.setTexture2D=le,this.setTexture2DArray=Te,this.setTexture3D=fe,this.setTextureCube=q,this.rebindTextures=D,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Y,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=E,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=J}function Gv(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===si)return 5121;if(s===Ah)return 32819;if(s===Ch)return 32820;if(s===wh)return 5120;if(s===Eh)return 5122;if(s===Wc)return 5123;if(s===Th)return 5124;if(s===ei)return 5125;if(s===ti)return 5126;if(s===pr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Lh)return 6406;if(s===Yt)return 6408;if(s===Ph)return 6409;if(s===Rh)return 6410;if(s===ri)return 6402;if(s===Gi)return 34041;if(s===Ao)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Dh)return 6403;if(s===Ih)return 36244;if(s===Uh)return 33319;if(s===Nh)return 33320;if(s===Fh)return 36249;if(s===Ns||s===Fs||s===Os||s===zs)if(a===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ns)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ns)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Os)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ga||s===Va||s===ka||s===Wa)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Ga)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Va)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ka)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Oh)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===qa||s===Xa)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===qa)return a===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xa)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ja||s===$a||s===Ya||s===Ka||s===Za||s===Ja||s===Qa||s===el||s===tl||s===nl||s===il||s===rl||s===sl||s===ol)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ja)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$a)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ya)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ka)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Za)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ja)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qa)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===el)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===tl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===il)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===sl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ol)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Bs)return a===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===zh||s===al||s===ll||s===cl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Bs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===al)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ll)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Di?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Vv extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zr extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kv={type:"move"};class co{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Wv extends Lt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ri,u!==ri&&u!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ri&&(i=ei),i===void 0&&u===Gi&&(i=Di),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:bt,this.minFilter=l!==void 0?l:bt,this.flipY=!1,this.generateMipmaps=!1}}class qv extends Xi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,_=null;const v=t.getContextAttributes();let m=null,f=null;const C=[],b=[],S=new Set,A=new Map,R=new Ft;R.layers.enable(1),R.viewport=new ft;const U=new Ft;U.layers.enable(2),U.viewport=new ft;const z=[R,U],y=new Vv;y.layers.enable(1),y.layers.enable(2);let T=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=C[q];return ne===void 0&&(ne=new co,C[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=C[q];return ne===void 0&&(ne=new co,C[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=C[q];return ne===void 0&&(ne=new co,C[q]=ne),ne.getHandSpace()};function te(q){const ne=b.indexOf(q.inputSource);if(ne===-1)return;const ve=C[ne];ve!==void 0&&ve.dispatchEvent({type:q.type,data:q.inputSource})}function N(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",H);for(let q=0;q<C.length;q++){const ne=b[q];ne!==null&&(b[q]=null,C[q].disconnect(ne))}T=null,re=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,fe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",N),r.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:v.alpha,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),f=new ai(p.framebufferWidth,p.framebufferHeight,{format:Yt,type:si,encoding:e.outputEncoding,stencilBuffer:v.stencil})}else{let ne=null,ve=null,ge=null;v.depth&&(ge=v.stencil?35056:33190,ne=v.stencil?Gi:ri,ve=v.stencil?Di:ei);const G={colorFormat:32856,depthFormat:ge,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(G),r.updateRenderState({layers:[h]}),f=new ai(h.textureWidth,h.textureHeight,{format:Yt,type:si,depthTexture:new Wv(h.textureWidth,h.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:v.stencil,encoding:e.outputEncoding,samples:v.antialias?4:0});const Re=e.properties.get(f);Re.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function H(q){for(let ne=0;ne<q.removed.length;ne++){const ve=q.removed[ne],ge=b.indexOf(ve);ge>=0&&(b[ge]=null,C[ge].disconnect(ve))}for(let ne=0;ne<q.added.length;ne++){const ve=q.added[ne];let ge=b.indexOf(ve);if(ge===-1){for(let Re=0;Re<C.length;Re++)if(Re>=b.length){b.push(ve),ge=Re;break}else if(b[Re]===null){b[Re]=ve,ge=Re;break}if(ge===-1)break}const G=C[ge];G&&G.connect(ve)}}const K=new O,ie=new O;function Q(q,ne,ve){K.setFromMatrixPosition(ne.matrixWorld),ie.setFromMatrixPosition(ve.matrixWorld);const ge=K.distanceTo(ie),G=ne.projectionMatrix.elements,Re=ve.projectionMatrix.elements,Ae=G[14]/(G[10]-1),pe=G[14]/(G[10]+1),Le=(G[9]+1)/G[5],w=(G[9]-1)/G[5],E=(G[8]-1)/G[0],D=(Re[8]+1)/Re[0],$=Ae*E,Y=Ae*D,se=ge/(-E+D),de=se*-E;ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const J=Ae+se,oe=pe+se,ee=$-de,x=Y+(ge-de),g=Le*pe/oe*J,P=w*pe/oe*J;q.projectionMatrix.makePerspective(ee,x,g,P,J,oe),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function V(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;y.near=U.near=R.near=q.near,y.far=U.far=R.far=q.far,(T!==y.near||re!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),T=y.near,re=y.far);const ne=q.parent,ve=y.cameras;V(y,ne);for(let ge=0;ge<ve.length;ge++)V(ve[ge],ne);ve.length===2?Q(y,R,U):y.projectionMatrix.copy(R.projectionMatrix),ue(q,y,ne)};function ue(q,ne,ve){ve===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0);const ge=q.children;for(let G=0,Re=ge.length;G<Re;G++)ge[G].updateMatrixWorld(!0);q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Co*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.getPlanes=function(){return S};let le=null;function Te(q,ne){if(u=ne.getViewerPose(c||a),_=ne,u!==null){const ve=u.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let ge=!1;ve.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let G=0;G<ve.length;G++){const Re=ve[G];let Ae=null;if(p!==null)Ae=p.getViewport(Re);else{const Le=d.getViewSubImage(h,Re);Ae=Le.viewport,G===0&&(e.setRenderTargetTextures(f,Le.colorTexture,h.ignoreDepthValues?void 0:Le.depthStencilTexture),e.setRenderTarget(f))}let pe=z[G];pe===void 0&&(pe=new Ft,pe.layers.enable(G),pe.viewport=new ft,z[G]=pe),pe.matrix.fromArray(Re.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(Re.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),G===0&&(y.matrix.copy(pe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(pe)}}for(let ve=0;ve<C.length;ve++){const ge=b[ve],G=C[ve];ge!==null&&G!==void 0&&G.update(ge,ne,c||a)}if(le&&le(q,ne),ne.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ne.detectedPlanes});let ve=null;for(const ge of S)ne.detectedPlanes.has(ge)||(ve===null&&(ve=[]),ve.push(ge));if(ve!==null)for(const ge of ve)S.delete(ge),A.delete(ge),i.dispatchEvent({type:"planeremoved",data:ge});for(const ge of ne.detectedPlanes)if(!S.has(ge))S.add(ge),A.set(ge,ne.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ge});else{const G=A.get(ge);ge.lastChangedTime>G&&(A.set(ge,ge.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ge}))}}_=null}const fe=new ru;fe.setAnimationLoop(Te),this.setAnimationLoop=function(q){le=q},this.dispose=function(){}}}function Xv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,eu(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,C,b,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,C,b):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const C=e.get(f).envMap;if(C&&(m.envMap.value=C,m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const b=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*b,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,C,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*C,m.scale.value=b*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,C){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=C.texture,m.transmissionSamplerSize.value.set(C.width,C.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const C=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(C.matrixWorld),m.nearDistance.value=C.shadow.camera.near,m.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function jv(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(C,b){const S=b.program;i.uniformBlockBinding(C,S)}function c(C,b){let S=r[C.id];S===void 0&&(_(C),S=u(C),r[C.id]=S,C.addEventListener("dispose",m));const A=b.program;i.updateUBOMapping(C,A);const R=e.render.frame;s[C.id]!==R&&(h(C),s[C.id]=R)}function u(C){const b=d();C.__bindingPointIndex=b;const S=n.createBuffer(),A=C.__size,R=C.usage;return n.bindBuffer(35345,S),n.bufferData(35345,A,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,b,S),S}function d(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(C){const b=r[C.id],S=C.uniforms,A=C.__cache;n.bindBuffer(35345,b);for(let R=0,U=S.length;R<U;R++){const z=S[R];if(p(z,R,A)===!0){const y=z.__offset,T=Array.isArray(z.value)?z.value:[z.value];let re=0;for(let te=0;te<T.length;te++){const N=T[te],H=v(N);typeof N=="number"?(z.__data[0]=N,n.bufferSubData(35345,y+re,z.__data)):N.isMatrix3?(z.__data[0]=N.elements[0],z.__data[1]=N.elements[1],z.__data[2]=N.elements[2],z.__data[3]=N.elements[0],z.__data[4]=N.elements[3],z.__data[5]=N.elements[4],z.__data[6]=N.elements[5],z.__data[7]=N.elements[0],z.__data[8]=N.elements[6],z.__data[9]=N.elements[7],z.__data[10]=N.elements[8],z.__data[11]=N.elements[0]):(N.toArray(z.__data,re),re+=H.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,y,z.__data)}}n.bindBuffer(35345,null)}function p(C,b,S){const A=C.value;if(S[b]===void 0){if(typeof A=="number")S[b]=A;else{const R=Array.isArray(A)?A:[A],U=[];for(let z=0;z<R.length;z++)U.push(R[z].clone());S[b]=U}return!0}else if(typeof A=="number"){if(S[b]!==A)return S[b]=A,!0}else{const R=Array.isArray(S[b])?S[b]:[S[b]],U=Array.isArray(A)?A:[A];for(let z=0;z<R.length;z++){const y=R[z];if(y.equals(U[z])===!1)return y.copy(U[z]),!0}}return!1}function _(C){const b=C.uniforms;let S=0;const A=16;let R=0;for(let U=0,z=b.length;U<z;U++){const y=b[U],T={boundary:0,storage:0},re=Array.isArray(y.value)?y.value:[y.value];for(let te=0,N=re.length;te<N;te++){const H=re[te],K=v(H);T.boundary+=K.boundary,T.storage+=K.storage}if(y.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,U>0){R=S%A;const te=A-R;R!==0&&te-T.boundary<0&&(S+=A-R,y.__offset=S)}S+=T.storage}return R=S%A,R>0&&(S+=A-R),C.__size=S,C.__cache={},this}function v(C){const b={boundary:0,storage:0};return typeof C=="number"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),b}function m(C){const b=C.target;b.removeEventListener("dispose",m);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function f(){for(const C in r)n.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}function $v(){const n=gr("canvas");return n.style.display="block",n}class na{constructor(e={}){const{canvas:t=$v(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;let p=null,_=null;const v=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=oi,this.useLegacyLights=!0,this.toneMapping=Mn,this.toneMappingExposure=1;const f=this;let C=!1,b=0,S=0,A=null,R=-1,U=null;const z=new ft,y=new ft;let T=null,re=t.width,te=t.height,N=1,H=null,K=null;const ie=new ft(0,0,re,te),Q=new ft(0,0,re,te);let V=!1;const ue=new iu;let le=!1,Te=!1,fe=null;const q=new dt,ne=new O,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return A===null?N:1}let G=i;function Re(M,F){for(let X=0;X<M.length;X++){const I=M[X],Z=t.getContext(I,F);if(Z!==null)return Z}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qo}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",We,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),G=Re(F,M),G===null)throw Re(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,pe,Le,w,E,D,$,Y,se,de,J,oe,ee,x,g,P,B,W,ae,_e,he,k,ye,be;function we(){Ae=new s_(G),pe=new Jg(G,Ae,e),Ae.init(pe),k=new Gv(G,Ae,pe),Le=new Bv(G,Ae,pe),w=new l_,E=new Ev,D=new Hv(G,Ae,Le,E,pe,k,w),$=new e_(f),Y=new r_(f),se=new xp(G,pe),ye=new Kg(G,Ae,se,pe),de=new o_(G,se,w,ye),J=new d_(G,de,se,w),ae=new f_(G,pe,D),P=new Qg(E),oe=new wv(f,$,Y,Ae,pe,ye,P),ee=new Xv(f,E),x=new Av,g=new Iv(Ae,pe),W=new Yg(f,$,Y,Le,J,h,l),B=new zv(f,J,pe),be=new jv(G,w,pe,Le),_e=new Zg(G,Ae,w,pe),he=new a_(G,Ae,w,pe),w.programs=oe.programs,f.capabilities=pe,f.extensions=Ae,f.properties=E,f.renderLists=x,f.shadowMap=B,f.state=Le,f.info=w}we();const Se=new qv(f,G);this.xr=Se,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(M){M!==void 0&&(N=M,this.setSize(re,te,!1))},this.getSize=function(M){return M.set(re,te)},this.setSize=function(M,F,X=!0){if(Se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=M,te=F,t.width=Math.floor(M*N),t.height=Math.floor(F*N),X===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(re*N,te*N).floor()},this.setDrawingBufferSize=function(M,F,X){re=M,te=F,N=X,t.width=Math.floor(M*X),t.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(z)},this.getViewport=function(M){return M.copy(ie)},this.setViewport=function(M,F,X,I){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,F,X,I),Le.viewport(z.copy(ie).multiplyScalar(N).floor())},this.getScissor=function(M){return M.copy(Q)},this.setScissor=function(M,F,X,I){M.isVector4?Q.set(M.x,M.y,M.z,M.w):Q.set(M,F,X,I),Le.scissor(y.copy(Q).multiplyScalar(N).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(M){Le.setScissorTest(V=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){K=M},this.getClearColor=function(M){return M.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor.apply(W,arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha.apply(W,arguments)},this.clear=function(M=!0,F=!0,X=!0){let I=0;M&&(I|=16384),F&&(I|=256),X&&(I|=1024),G.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",We,!1),x.dispose(),g.dispose(),E.dispose(),$.dispose(),Y.dispose(),J.dispose(),ye.dispose(),be.dispose(),oe.dispose(),Se.dispose(),Se.removeEventListener("sessionstart",Ee),Se.removeEventListener("sessionend",je),fe&&(fe.dispose(),fe=null),Qe.stop()};function xe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const M=w.autoReset,F=B.enabled,X=B.autoUpdate,I=B.needsUpdate,Z=B.type;we(),w.autoReset=M,B.enabled=F,B.autoUpdate=X,B.needsUpdate=I,B.type=Z}function We(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function et(M){const F=M.target;F.removeEventListener("dispose",et),L(F)}function L(M){j(M),E.remove(M)}function j(M){const F=E.get(M).programs;F!==void 0&&(F.forEach(function(X){oe.releaseProgram(X)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,I,Z,Ce){F===null&&(F=ve);const Pe=Z.isMesh&&Z.matrixWorld.determinant()<0,Ie=du(M,F,X,I,Z);Le.setMaterial(I,Pe);let Ue=X.index,ze=1;I.wireframe===!0&&(Ue=de.getWireframeAttribute(X),ze=2);const Be=X.drawRange,He=X.attributes.position;let Xe=Be.start*ze,xt=(Be.start+Be.count)*ze;Ce!==null&&(Xe=Math.max(Xe,Ce.start*ze),xt=Math.min(xt,(Ce.start+Ce.count)*ze)),Ue!==null?(Xe=Math.max(Xe,0),xt=Math.min(xt,Ue.count)):He!=null&&(Xe=Math.max(Xe,0),xt=Math.min(xt,He.count));const Gt=xt-Xe;if(Gt<0||Gt===1/0)return;ye.setup(Z,I,Ie,X,Ue);let Hn,nt=_e;if(Ue!==null&&(Hn=se.get(Ue),nt=he,nt.setIndex(Hn)),Z.isMesh)I.wireframe===!0?(Le.setLineWidth(I.wireframeLinewidth*ge()),nt.setMode(1)):nt.setMode(4);else if(Z.isLine){let Ve=I.linewidth;Ve===void 0&&(Ve=1),Le.setLineWidth(Ve*ge()),Z.isLineSegments?nt.setMode(1):Z.isLineLoop?nt.setMode(2):nt.setMode(3)}else Z.isPoints?nt.setMode(0):Z.isSprite&&nt.setMode(4);if(Z.isInstancedMesh)nt.renderInstances(Xe,Gt,Z.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ws=Math.min(X.instanceCount,Ve);nt.renderInstances(Xe,Gt,ws)}else nt.render(Xe,Gt)},this.compile=function(M,F){function X(I,Z,Ce){I.transparent===!0&&I.side===xn&&I.forceSinglePass===!1?(I.side=Ct,I.needsUpdate=!0,br(I,Z,Ce),I.side=Nn,I.needsUpdate=!0,br(I,Z,Ce),I.side=xn):br(I,Z,Ce)}_=g.get(M),_.init(),m.push(_),M.traverseVisible(function(I){I.isLight&&I.layers.test(F.layers)&&(_.pushLight(I),I.castShadow&&_.pushShadow(I))}),_.setupLights(f.useLegacyLights),M.traverse(function(I){const Z=I.material;if(Z)if(Array.isArray(Z))for(let Ce=0;Ce<Z.length;Ce++){const Pe=Z[Ce];X(Pe,M,I)}else X(Z,M,I)}),m.pop(),_=null};let ce=null;function Me(M){ce&&ce(M)}function Ee(){Qe.stop()}function je(){Qe.start()}const Qe=new ru;Qe.setAnimationLoop(Me),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(M){ce=M,Se.setAnimationLoop(M),M===null?Qe.stop():Qe.start()},Se.addEventListener("sessionstart",Ee),Se.addEventListener("sessionend",je),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Se.enabled===!0&&Se.isPresenting===!0&&(Se.cameraAutoUpdate===!0&&Se.updateCamera(F),F=Se.getCamera()),M.isScene===!0&&M.onBeforeRender(f,M,F,A),_=g.get(M,m.length),_.init(),m.push(_),q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ue.setFromProjectionMatrix(q),Te=this.localClippingEnabled,le=P.init(this.clippingPlanes,Te),p=x.get(M,v.length),p.init(),v.push(p),pt(M,F,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(H,K),le===!0&&P.beginShadows();const X=_.state.shadowsArray;if(B.render(X,M,F),le===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset(),W.render(p,M),_.setupLights(f.useLegacyLights),F.isArrayCamera){const I=F.cameras;for(let Z=0,Ce=I.length;Z<Ce;Z++){const Pe=I[Z];wn(p,M,Pe,Pe.viewport)}}else wn(p,M,F);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),M.isScene===!0&&M.onAfterRender(f,M,F),ye.resetDefaultState(),R=-1,U=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function pt(M,F,X,I){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)_.pushLight(M),M.castShadow&&_.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||ue.intersectsSprite(M)){I&&ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(q);const Pe=J.update(M),Ie=M.material;Ie.visible&&p.push(M,Pe,Ie,X,ne.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==w.render.frame&&(M.skeleton.update(),M.skeleton.frame=w.render.frame),!M.frustumCulled||ue.intersectsObject(M))){I&&ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(q);const Pe=J.update(M),Ie=M.material;if(Array.isArray(Ie)){const Ue=Pe.groups;for(let ze=0,Be=Ue.length;ze<Be;ze++){const He=Ue[ze],Xe=Ie[He.materialIndex];Xe&&Xe.visible&&p.push(M,Pe,Xe,X,ne.z,He)}}else Ie.visible&&p.push(M,Pe,Ie,X,ne.z,null)}}const Ce=M.children;for(let Pe=0,Ie=Ce.length;Pe<Ie;Pe++)pt(Ce[Pe],F,X,I)}function wn(M,F,X,I){const Z=M.opaque,Ce=M.transmissive,Pe=M.transparent;_.setupLightsView(X),le===!0&&P.setGlobalState(f.clippingPlanes,X),Ce.length>0&&tt(Z,Ce,F,X),I&&Le.viewport(z.copy(I)),Z.length>0&&zt(Z,F,X),Ce.length>0&&zt(Ce,F,X),Pe.length>0&&zt(Pe,F,X),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function tt(M,F,X,I){if(fe===null){const Ie=pe.isWebGL2;fe=new ai(1024,1024,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")?pr:si,minFilter:hr,samples:Ie&&o===!0?4:0})}const Z=f.getRenderTarget();f.setRenderTarget(fe),f.clear();const Ce=f.toneMapping;f.toneMapping=Mn,zt(M,X,I),D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe);let Pe=!1;for(let Ie=0,Ue=F.length;Ie<Ue;Ie++){const ze=F[Ie],Be=ze.object,He=ze.geometry,Xe=ze.material,xt=ze.group;if(Xe.side===xn&&Be.layers.test(I.layers)){const Gt=Xe.side;Xe.side=Ct,Xe.needsUpdate=!0,en(Be,X,I,He,Xe,xt),Xe.side=Gt,Xe.needsUpdate=!0,Pe=!0}}Pe===!0&&(D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe)),f.setRenderTarget(Z),f.toneMapping=Ce}function zt(M,F,X){const I=F.isScene===!0?F.overrideMaterial:null;for(let Z=0,Ce=M.length;Z<Ce;Z++){const Pe=M[Z],Ie=Pe.object,Ue=Pe.geometry,ze=I===null?Pe.material:I,Be=Pe.group;Ie.layers.test(X.layers)&&en(Ie,F,X,Ue,ze,Be)}}function en(M,F,X,I,Z,Ce){M.onBeforeRender(f,F,X,I,Z,Ce),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),Z.onBeforeRender(f,F,X,I,M,Ce),Z.transparent===!0&&Z.side===xn&&Z.forceSinglePass===!1?(Z.side=Ct,Z.needsUpdate=!0,f.renderBufferDirect(X,F,I,Z,M,Ce),Z.side=Nn,Z.needsUpdate=!0,f.renderBufferDirect(X,F,I,Z,M,Ce),Z.side=xn):f.renderBufferDirect(X,F,I,Z,M,Ce),M.onAfterRender(f,F,X,I,Z,Ce)}function br(M,F,X){F.isScene!==!0&&(F=ve);const I=E.get(M),Z=_.state.lights,Ce=_.state.shadowsArray,Pe=Z.state.version,Ie=oe.getParameters(M,Z.state,Ce,F,X),Ue=oe.getProgramCacheKey(Ie);let ze=I.programs;I.environment=M.isMeshStandardMaterial?F.environment:null,I.fog=F.fog,I.envMap=(M.isMeshStandardMaterial?Y:$).get(M.envMap||I.environment),ze===void 0&&(M.addEventListener("dispose",et),ze=new Map,I.programs=ze);let Be=ze.get(Ue);if(Be!==void 0){if(I.currentProgram===Be&&I.lightsStateVersion===Pe)return sa(M,Ie),Be}else Ie.uniforms=oe.getUniforms(M),M.onBuild(X,Ie,f),M.onBeforeCompile(Ie,f),Be=oe.acquireProgram(Ie,Ue),ze.set(Ue,Be),I.uniforms=Ie.uniforms;const He=I.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(He.clippingPlanes=P.uniform),sa(M,Ie),I.needsLights=pu(M),I.lightsStateVersion=Pe,I.needsLights&&(He.ambientLightColor.value=Z.state.ambient,He.lightProbe.value=Z.state.probe,He.directionalLights.value=Z.state.directional,He.directionalLightShadows.value=Z.state.directionalShadow,He.spotLights.value=Z.state.spot,He.spotLightShadows.value=Z.state.spotShadow,He.rectAreaLights.value=Z.state.rectArea,He.ltc_1.value=Z.state.rectAreaLTC1,He.ltc_2.value=Z.state.rectAreaLTC2,He.pointLights.value=Z.state.point,He.pointLightShadows.value=Z.state.pointShadow,He.hemisphereLights.value=Z.state.hemi,He.directionalShadowMap.value=Z.state.directionalShadowMap,He.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,He.spotShadowMap.value=Z.state.spotShadowMap,He.spotLightMatrix.value=Z.state.spotLightMatrix,He.spotLightMap.value=Z.state.spotLightMap,He.pointShadowMap.value=Z.state.pointShadowMap,He.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Xe=Be.getUniforms(),xt=rs.seqWithValue(Xe.seq,He);return I.currentProgram=Be,I.uniformsList=xt,Be}function sa(M,F){const X=E.get(M);X.outputEncoding=F.outputEncoding,X.instancing=F.instancing,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function du(M,F,X,I,Z){F.isScene!==!0&&(F=ve),D.resetTextureUnits();const Ce=F.fog,Pe=I.isMeshStandardMaterial?F.environment:null,Ie=A===null?f.outputEncoding:A.isXRRenderTarget===!0?A.texture.encoding:oi,Ue=(I.isMeshStandardMaterial?Y:$).get(I.envMap||Pe),ze=I.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Be=!!I.normalMap&&!!X.attributes.tangent,He=!!X.morphAttributes.position,Xe=!!X.morphAttributes.normal,xt=!!X.morphAttributes.color,Gt=I.toneMapped?f.toneMapping:Mn,Hn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,nt=Hn!==void 0?Hn.length:0,Ve=E.get(I),ws=_.state.lights;if(le===!0&&(Te===!0||M!==U)){const Rt=M===U&&I.id===R;P.setState(I,M,Rt)}let ct=!1;I.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==ws.state.version||Ve.outputEncoding!==Ie||Z.isInstancedMesh&&Ve.instancing===!1||!Z.isInstancedMesh&&Ve.instancing===!0||Z.isSkinnedMesh&&Ve.skinning===!1||!Z.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ue||I.fog===!0&&Ve.fog!==Ce||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==P.numPlanes||Ve.numIntersection!==P.numIntersection)||Ve.vertexAlphas!==ze||Ve.vertexTangents!==Be||Ve.morphTargets!==He||Ve.morphNormals!==Xe||Ve.morphColors!==xt||Ve.toneMapping!==Gt||pe.isWebGL2===!0&&Ve.morphTargetsCount!==nt)&&(ct=!0):(ct=!0,Ve.__version=I.version);let Gn=Ve.currentProgram;ct===!0&&(Gn=br(I,F,Z));let oa=!1,$i=!1,Es=!1;const Mt=Gn.getUniforms(),Vn=Ve.uniforms;if(Le.useProgram(Gn.program)&&(oa=!0,$i=!0,Es=!0),I.id!==R&&(R=I.id,$i=!0),oa||U!==M){if(Mt.setValue(G,"projectionMatrix",M.projectionMatrix),pe.logarithmicDepthBuffer&&Mt.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),U!==M&&(U=M,$i=!0,Es=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const Rt=Mt.map.cameraPosition;Rt!==void 0&&Rt.setValue(G,ne.setFromMatrixPosition(M.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Mt.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||Z.isSkinnedMesh)&&Mt.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(Z.isSkinnedMesh){Mt.setOptional(G,Z,"bindMatrix"),Mt.setOptional(G,Z,"bindMatrixInverse");const Rt=Z.skeleton;Rt&&(pe.floatVertexTextures?(Rt.boneTexture===null&&Rt.computeBoneTexture(),Mt.setValue(G,"boneTexture",Rt.boneTexture,D),Mt.setValue(G,"boneTextureSize",Rt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ts=X.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0&&pe.isWebGL2===!0)&&ae.update(Z,X,Gn),($i||Ve.receiveShadow!==Z.receiveShadow)&&(Ve.receiveShadow=Z.receiveShadow,Mt.setValue(G,"receiveShadow",Z.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Vn.envMap.value=Ue,Vn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),$i&&(Mt.setValue(G,"toneMappingExposure",f.toneMappingExposure),Ve.needsLights&&hu(Vn,Es),Ce&&I.fog===!0&&ee.refreshFogUniforms(Vn,Ce),ee.refreshMaterialUniforms(Vn,I,N,te,fe),rs.upload(G,Ve.uniformsList,Vn,D)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(rs.upload(G,Ve.uniformsList,Vn,D),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Mt.setValue(G,"center",Z.center),Mt.setValue(G,"modelViewMatrix",Z.modelViewMatrix),Mt.setValue(G,"normalMatrix",Z.normalMatrix),Mt.setValue(G,"modelMatrix",Z.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Rt=I.uniformsGroups;for(let As=0,mu=Rt.length;As<mu;As++)if(pe.isWebGL2){const aa=Rt[As];be.update(aa,Gn),be.bind(aa,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function hu(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function pu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(M,F,X){E.get(M.texture).__webglTexture=F,E.get(M.depthTexture).__webglTexture=X;const I=E.get(M);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=X===void 0,I.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,F){const X=E.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,X=0){A=M,b=F,S=X;let I=!0,Z=null,Ce=!1,Pe=!1;if(M){const Ue=E.get(M);Ue.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(36160,null),I=!1):Ue.__webglFramebuffer===void 0?D.setupRenderTarget(M):Ue.__hasExternalTextures&&D.rebindTextures(M,E.get(M.texture).__webglTexture,E.get(M.depthTexture).__webglTexture);const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Pe=!0);const Be=E.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Z=Be[F],Ce=!0):pe.isWebGL2&&M.samples>0&&D.useMultisampledRTT(M)===!1?Z=E.get(M).__webglMultisampledFramebuffer:Z=Be,z.copy(M.viewport),y.copy(M.scissor),T=M.scissorTest}else z.copy(ie).multiplyScalar(N).floor(),y.copy(Q).multiplyScalar(N).floor(),T=V;if(Le.bindFramebuffer(36160,Z)&&pe.drawBuffers&&I&&Le.drawBuffers(M,Z),Le.viewport(z),Le.scissor(y),Le.setScissorTest(T),Ce){const Ue=E.get(M.texture);G.framebufferTexture2D(36160,36064,34069+F,Ue.__webglTexture,X)}else if(Pe){const Ue=E.get(M.texture),ze=F||0;G.framebufferTextureLayer(36160,36064,Ue.__webglTexture,X||0,ze)}R=-1},this.readRenderTargetPixels=function(M,F,X,I,Z,Ce,Pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=E.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ie=Ie[Pe]),Ie){Le.bindFramebuffer(36160,Ie);try{const Ue=M.texture,ze=Ue.format,Be=Ue.type;if(ze!==Yt&&k.convert(ze)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Be===pr&&(Ae.has("EXT_color_buffer_half_float")||pe.isWebGL2&&Ae.has("EXT_color_buffer_float"));if(Be!==si&&k.convert(Be)!==G.getParameter(35738)&&!(Be===ti&&(pe.isWebGL2||Ae.has("OES_texture_float")||Ae.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-I&&X>=0&&X<=M.height-Z&&G.readPixels(F,X,I,Z,k.convert(ze),k.convert(Be),Ce)}finally{const Ue=A!==null?E.get(A).__webglFramebuffer:null;Le.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(M,F,X=0){const I=Math.pow(2,-X),Z=Math.floor(F.image.width*I),Ce=Math.floor(F.image.height*I);D.setTexture2D(F,0),G.copyTexSubImage2D(3553,X,0,0,M.x,M.y,Z,Ce),Le.unbindTexture()},this.copyTextureToTexture=function(M,F,X,I=0){const Z=F.image.width,Ce=F.image.height,Pe=k.convert(X.format),Ie=k.convert(X.type);D.setTexture2D(X,0),G.pixelStorei(37440,X.flipY),G.pixelStorei(37441,X.premultiplyAlpha),G.pixelStorei(3317,X.unpackAlignment),F.isDataTexture?G.texSubImage2D(3553,I,M.x,M.y,Z,Ce,Pe,Ie,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(3553,I,M.x,M.y,F.mipmaps[0].width,F.mipmaps[0].height,Pe,F.mipmaps[0].data):G.texSubImage2D(3553,I,M.x,M.y,Pe,Ie,F.image),I===0&&X.generateMipmaps&&G.generateMipmap(3553),Le.unbindTexture()},this.copyTextureToTexture3D=function(M,F,X,I,Z=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=M.max.x-M.min.x+1,Pe=M.max.y-M.min.y+1,Ie=M.max.z-M.min.z+1,Ue=k.convert(I.format),ze=k.convert(I.type);let Be;if(I.isData3DTexture)D.setTexture3D(I,0),Be=32879;else if(I.isDataArrayTexture)D.setTexture2DArray(I,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,I.flipY),G.pixelStorei(37441,I.premultiplyAlpha),G.pixelStorei(3317,I.unpackAlignment);const He=G.getParameter(3314),Xe=G.getParameter(32878),xt=G.getParameter(3316),Gt=G.getParameter(3315),Hn=G.getParameter(32877),nt=X.isCompressedTexture?X.mipmaps[0]:X.image;G.pixelStorei(3314,nt.width),G.pixelStorei(32878,nt.height),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),X.isDataTexture||X.isData3DTexture?G.texSubImage3D(Be,Z,F.x,F.y,F.z,Ce,Pe,Ie,Ue,ze,nt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Be,Z,F.x,F.y,F.z,Ce,Pe,Ie,Ue,nt.data)):G.texSubImage3D(Be,Z,F.x,F.y,F.z,Ce,Pe,Ie,Ue,ze,nt),G.pixelStorei(3314,He),G.pixelStorei(32878,Xe),G.pixelStorei(3316,xt),G.pixelStorei(3315,Gt),G.pixelStorei(32877,Hn),Z===0&&I.generateMipmaps&&G.generateMipmap(Be),Le.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?D.setTextureCube(M,0):M.isData3DTexture?D.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?D.setTexture2DArray(M,0):D.setTexture2D(M,0),Le.unbindTexture()},this.resetState=function(){b=0,S=0,A=null,Le.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class Yv extends na{}Yv.prototype.isWebGL1Renderer=!0;class cu extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Kv extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class ia extends zn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new O,d=new O,h=new O;for(let p=0;p<=i;p++)for(let _=0;_<=r;_++){const v=_/r*s,m=p/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(v),d.y=(e+t*Math.cos(m))*Math.sin(v),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let _=1;_<=r;_++){const v=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,f=(r+1)*(p-1)+_,C=(r+1)*p+_;a.push(v,m,C),a.push(m,f,C)}this.setIndex(a),this.setAttribute("position",new un(o,3)),this.setAttribute("normal",new un(l,3)),this.setAttribute("uv",new un(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const Yl={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Zv{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Jv=new Zv;class uu{constructor(e){this.manager=e!==void 0?e:Jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Qv extends uu{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Yl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=gr("img");function l(){u(),Yl.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class e0 extends uu{constructor(e){super(e)}load(e,t,i,r){const s=new Lt,a=new Qv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qo);const Kl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHbSURBVHgBzZc7UgJBEIb/mSp5GHGE5QTiCYDAKkM8AWVopidQTiAGllUm4g0gMxNPIJ7AvYFEyGIV498DLLJCueLujl+ys6/unp6enm6FmNzVTGlUQEMbVHlbMQaeUijJO46HHPscDjjuFyfoHffVMI5c9dMHN4fGo9BTGDQXCmPSofTWyYPysY0BMuMgj3MDKv8D/L9dDNDa5JG1Bsis+ecjhx6Swaem+jpv6OiD6wNTSVg5rCzKvBXZEVY8kMLMo3zzRGiArPk4j+cUlYdGFALsL2IiXAIJuAyUC977TJfFemDu+ldkiUJZlsJ6wExxgYyxuUXsuOTaF/J4Q/YMGQtlndtBA24ojahbM73W4AitUZUY2IMjmKYrYoAHR3ALevqXJ1zSlDQco6WYgDuG4gEfjmAQ2kz4AkcwCAeyBH04Qiv09eQDXVdxkBujp8/kXFa4R/Z0pCaw25C5oI2sYcUsF2uAnMuMyCtkhOhalGXLiiiwNYGP9PGLwbL+CA2Yx0I9ZSNsUfq1R1hJxeKW6RRHSMcIKzvaG/y/xkSQD8csnZMITJEhZfimHjFec8qilVu1iZjYxMbcItt76+Y0im1c2J7TmBpmVdRKe86Lz/vBVOFpd4xu3Pb8EyaAvcxebUujAAAAAElFTkSuQmCC",t0=yn({name:"HeroAnimation",mounted(){const n=this.$refs.canvas,e=new cu,t=new Ft(85,this.$el.parentNode.offsetWidth/this.$el.parentNode.offsetHeight,.1,1e3);t.position.z=5.6;const i=new e0;new _r(10,10,100,100),new Kv({size:.04,map:i.load(Kl,()=>{s.opacity=1}),color:16777215,transparent:!0});const r=new _r(10,10,80,80),s=new Ss({color:16777215,wireframe:!0,map:i.load(Kl,()=>{s.opacity=1}),transparent:!0}),a=new cn(r,s);e.add(a);function o(){requestAnimationFrame(o);const c=Date.now()*.001,u=1.6,d=.9,h=a.geometry.attributes.position;if(h instanceof Qt){for(let p=0;p<h.count;p++){const _=h.getX(p),v=h.getY(p),m=d*Math.sin(u*_+c)*Math.sin(u*v+c)-1;h.setZ(p,m)}h.needsUpdate=!0}l.render(e,t)}const l=new na({canvas:n,alpha:!0,antialias:!0});l.setClearColor(0,0),l.setSize(this.$el.parentNode.offsetWidth,this.$el.parentNode.offsetHeight),l.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",()=>{const c=this.$el.parentNode.offsetWidth,u=this.$el.parentNode.offsetHeight;t.aspect=c/u,t.updateProjectionMatrix(),l.setSize(c,u)}),o()}}),Bn=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},n0={ref:"canvas"};function i0(n,e,t,i,r,s){return Fn(),On("canvas",n0,null,512)}const r0=Bn(t0,[["render",i0]]),s0={class:"hero"},o0=Ko('<div class="container" data-v-2213d57a><div class="text" data-v-2213d57a><p class="function" data-v-2213d57a>Presentacion(){</p><h1 data-v-2213d57a> Desarrollo sitios y aplicaciones web adaptables y <span class="yellow" data-v-2213d57a>responsivas</span>. Me enfoco en crear soluciones <span class="yellow" data-v-2213d57a>atractivas</span> y <span class="yellow" data-v-2213d57a>fáciles de usar</span>.</h1><div class="btn" data-v-2213d57a>&lt;Sobre mi /&gt;</div><p class="function" data-v-2213d57a>}</p></div><div class="proyectos" data-v-2213d57a><p data-v-2213d57a>&lt;Proyectos /&gt;</p><div class="arrow" data-v-2213d57a><svg width="16" height="51" viewBox="0 0 16 51" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-2213d57a><path d="M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 50.7071C7.68342 51.0976 8.31658 51.0976 8.70711 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34315 42.9289C1.95262 42.5384 1.31946 42.5384 0.928932 42.9289C0.538408 43.3195 0.538408 43.9526 0.928932 44.3431L7.29289 50.7071ZM7 1L7 50H9L9 1L7 1Z" fill="#8155FF" data-v-2213d57a></path></svg></div></div><div class="scroll" data-v-2213d57a><p data-v-2213d57a>scroll</p><div class="line" data-v-2213d57a></div></div></div>',1),a0={class:"background"},l0=yn({__name:"Hero",setup(n){return(e,t)=>(Fn(),On("div",s0,[o0,Je("div",a0,[vt(r0)])]))}});const c0=Bn(l0,[["__scopeId","data-v-2213d57a"]]),ra=n=>(Xo("data-v-b1f19b1e"),n=n(),jo(),n),u0=ra(()=>Je("div",{class:"line"},null,-1)),f0=ra(()=>Je("div",{class:"line"},null,-1)),d0=ra(()=>Je("div",{class:"line"},null,-1)),h0=[u0,f0,d0],p0=yn({__name:"Hambutton",props:{isActive:null},setup(n){return(e,t)=>(Fn(),On("div",{class:Ui(["btn",{open:n.isActive}])},h0,2))}});const m0=Bn(p0,[["__scopeId","data-v-b1f19b1e"]]),bs=n=>(Xo("data-v-f247f649"),n=n(),jo(),n),g0={class:"container"},_0=bs(()=>Je("div",{class:"logo"},[Je("svg",{width:"29",height:"60",viewBox:"0 0 29 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Je("path",{d:"M27.5 5.62913L15.0983 27.2471L27.5 44.8182L27.5 5.62913Z",stroke:"#8155FF","stroke-width":"3"}),Je("path",{d:"M1.50002 53.8656L12.4152 32.8809L1.50002 15.8244L1.50002 53.8656Z",stroke:"#8155FF","stroke-width":"3"})])],-1)),v0=bs(()=>Je("a",{href:"#portfolio"},"<Proyectos />",-1)),x0=[v0],M0=bs(()=>Je("a",{href:"#about"},"<Sobre mi />",-1)),S0=[M0],y0=bs(()=>Je("a",{href:"#contact"},"<Contacto />",-1)),b0=[y0],w0=yn({__name:"Header",setup(n){let e=uf(!1);return es(e,function(){e.value&&window.scrollTo(0,0),e.value?document.body.style.overflowY="hidden":document.body.style.overflowY="auto"}),(t,i)=>(Fn(),On("header",{class:Ui({open:Et(e)})},[Je("div",g0,[_0,Je("nav",null,[Je("ul",{class:Ui({open:Et(e)})},[Je("li",{onClick:i[0]||(i[0]=r=>rt(e)?e.value=!Et(e):e=!Et(e))},x0),Je("li",{onClick:i[1]||(i[1]=r=>rt(e)?e.value=!Et(e):e=!Et(e))},S0),Je("li",{onClick:i[2]||(i[2]=r=>rt(e)?e.value=!Et(e):e=!Et(e))},b0)],2),vt(m0,{"is-active":Et(e),onClick:i[3]||(i[3]=r=>rt(e)?e.value=!Et(e):e=!Et(e))},null,8,["is-active"])])])],2))}});const E0=Bn(w0,[["__scopeId","data-v-f247f649"]]),T0=Ko('<div class="card" data-v-32bd2836><div class="index" data-v-32bd2836>00</div><div class="text" data-v-32bd2836><h2 data-v-32bd2836>Nahuel Silva portfolio</h2><p data-v-32bd2836>Sitio web desarrollado en Vue, utilizando Three.js para los efectos 3d, Greensock y ScrollMagic para el resto de animaciones. </p><div class="btn disabled" data-v-32bd2836>Ver en github</div></div></div><div class="card" data-v-32bd2836><div class="index" data-v-32bd2836>01</div><div class="text" data-v-32bd2836><h2 data-v-32bd2836>Silverwolf store</h2><p data-v-32bd2836>Este ecommerce fue desarrollado en Angular el frontend y la API en NodeJs, utiliza MongoDB como BD y socket-io para algunas peticiones.</p><a class="btn" href="https://silverwolfstore.uy" target="_blank" data-v-32bd2836>Visitar sitio</a></div></div><div class="card" data-v-32bd2836><div class="index" data-v-32bd2836>02</div><div class="text" data-v-32bd2836><h2 data-v-32bd2836>Silverwolf motores</h2><p data-v-32bd2836>Sitio web desarrollado para un taller de bobinados de motores, Instalaciones de portones e instalaciones electricas, fue desarrollado en Vue y de conecta al ecommerce mediante su API</p><a class="btn" href="https://swmotores.com" target="_blank" data-v-32bd2836>Visitar sitio</a></div></div>',3),A0=yn({__name:"WorkCard",setup(n){return(e,t)=>T0}});const C0=Bn(A0,[["__scopeId","data-v-32bd2836"]]),Zl="/portfolio/assets/logo-f1d56519.png",fu=n=>(Xo("data-v-115213e2"),n=n(),jo(),n),L0={class:"portfolio",id:"portfolio"},P0=["src"],R0={class:"container"},D0=fu(()=>Je("p",{class:"function"},"Proyectos(){",-1)),I0=fu(()=>Je("p",{class:"function"},"}",-1)),U0=["src"],N0=yn({__name:"Portfolio",setup(n){return(e,t)=>(Fn(),On("div",L0,[Je("img",{src:Et(Zl),alt:"",class:"logo-bg"},null,8,P0),Je("div",R0,[D0,vt(C0),I0]),Je("img",{src:Et(Zl),alt:"",class:"logo-bg"},null,8,U0)]))}});const F0=Bn(N0,[["__scopeId","data-v-115213e2"]]),O0=yn({name:"TorusAnimation",mounted(){const n=this.$refs.canvas,e=new cu,t=new ia(24,7,16,40),i=new Ss({color:8476159,wireframe:!0}),r=new cn(t,i);e.add(r);const s=new Ft(75,this.$el.parentNode.offsetWidth/this.$el.parentNode.offsetHeight,.1,1e3);s.position.z=50;const a=new na({canvas:n,alpha:!0,antialias:!0});a.setClearColor(0,0),a.setSize(this.$el.parentNode.offsetWidth,this.$el.parentNode.offsetHeight);function o(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(u=>navigator.userAgent.match(u))}r.rotation.y=-.3,r.rotation.x+=-1,r.position.x=0,r.position.y=6,l();function l(){o()&&(r.rotation.z+=1e-4*9),requestAnimationFrame(l),a.render(e,s)}window.addEventListener("resize",()=>{const c=this.$el.parentNode.offsetWidth,u=this.$el.parentNode.offsetHeight;s.aspect=c/u,s.updateProjectionMatrix(),a.setSize(c,u)}),o()||window.addEventListener("mousemove",c=>{r.rotation.z=c.clientX/5e3,r.rotation.y=5.9+c.clientY/5e3,s.updateProjectionMatrix()})}}),z0={ref:"canvas"};function B0(n,e,t,i,r,s){return Fn(),On("canvas",z0,null,512)}const H0=Bn(O0,[["render",B0]]),G0={class:"about-me",id:"about"},V0=Ko('<div class="container" data-v-0d12032c><div class="text" data-v-0d12032c><p class="function" data-v-0d12032c>&lt;&gt;</p><p data-v-0d12032c>¡Hola! Mi nombre es Nahuel Silva y tengo 22 años. Actualmente me desempeño como desarrollador web frontend en una multinacional, aunque siempre estoy abierto a nuevas oportunidades laborales.</p><p data-v-0d12032c>Me considero una persona proactiva y entusiasta por aprender sobre nuevas tecnologías y profundizar en su funcionamiento. Me encanta ser autodidacta y aplicar todo lo que aprendo en la práctica. En cada aplicación que desarrollo, mi objetivo es lograr el mejor rendimiento posible en todas las plataformas. </p><p data-v-0d12032c>Estoy comprometido con brindar soluciones creativas y eficientes a los desafíos que se presentan en mi trabajo. Me apasiona trabajar en equipo y colaborar para alcanzar los objetivos planteados. ¡Si tienes alguna propuesta interesante, no dudes en <a href="mailto:nahuel.silva008@gmail.com" data-v-0d12032c>contactarme</a>!</p><div class="btn" data-v-0d12032c>Descargar CV</div><p class="function" data-v-0d12032c>&lt;/&gt;</p></div></div>',1),k0=yn({__name:"About",setup(n){return(e,t)=>(Fn(),On("div",G0,[V0,vt(H0,{class:"background"})]))}});const W0=Bn(k0,[["__scopeId","data-v-0d12032c"]]);const q0=yn({__name:"App",setup(n){return(e,t)=>(Fn(),On("div",null,[vt(E0),vt(c0),vt(F0),vt(W0)]))}});Xd(q0).mount("#app");
