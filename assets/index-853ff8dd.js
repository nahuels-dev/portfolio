(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function cf(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function uf(r){if(je(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=Wt(n)?S_(n):uf(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(Wt(r))return r;if(Tt(r))return r}}const v_=/;(?![^(]*\))/g,x_=/:([^]+)/,M_=/\/\*.*?\*\//gs;function S_(r){const e={};return r.replace(M_,"").split(v_).forEach(t=>{if(t){const n=t.split(x_);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function hi(r){let e="";if(Wt(r))e=r;else if(je(r))for(let t=0;t<r.length;t++){const n=hi(r[t]);n&&(e+=n+" ")}else if(Tt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const y_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b_=cf(y_);function Cp(r){return!!r||r===""}const w_=r=>Wt(r)?r:r==null?"":je(r)||Tt(r)&&(r.toString===Dp||!Ze(r.toString))?JSON.stringify(r,Pp,2):String(r),Pp=(r,e)=>e&&e.__v_isRef?Pp(r,e.value):Ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:Lp(e)?{[`Set(${e.size})`]:[...e.values()]}:Tt(e)&&!je(e)&&!Ip(e)?String(e):e,xt={},$s=[],pi=()=>{},T_=()=>!1,E_=/^on[^a-z]/,Kl=r=>E_.test(r),ff=r=>r.startsWith("onUpdate:"),mn=Object.assign,hf=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},A_=Object.prototype.hasOwnProperty,st=(r,e)=>A_.call(r,e),je=Array.isArray,Ys=r=>Zl(r)==="[object Map]",Lp=r=>Zl(r)==="[object Set]",Ze=r=>typeof r=="function",Wt=r=>typeof r=="string",df=r=>typeof r=="symbol",Tt=r=>r!==null&&typeof r=="object",Rp=r=>Tt(r)&&Ze(r.then)&&Ze(r.catch),Dp=Object.prototype.toString,Zl=r=>Dp.call(r),C_=r=>Zl(r).slice(8,-1),Ip=r=>Zl(r)==="[object Object]",pf=r=>Wt(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,_l=cf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jl=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},P_=/-(\w)/g,so=Jl(r=>r.replace(P_,(e,t)=>t?t.toUpperCase():"")),L_=/\B([A-Z])/g,yo=Jl(r=>r.replace(L_,"-$1").toLowerCase()),Up=Jl(r=>r.charAt(0).toUpperCase()+r.slice(1)),vc=Jl(r=>r?`on${Up(r)}`:""),ra=(r,e)=>!Object.is(r,e),xc=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Ul=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},R_=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let oh;const D_=()=>oh||(oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ri;class I_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ri,!e&&ri&&(this.index=(ri.scopes||(ri.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=ri;try{return ri=this,e()}finally{ri=t}}}on(){ri=this}off(){ri=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function U_(r,e=ri){e&&e.active&&e.effects.push(r)}function O_(){return ri}const mf=r=>{const e=new Set(r);return e.w=0,e.n=0,e},Op=r=>(r.w&yr)>0,Fp=r=>(r.n&yr)>0,F_=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=yr},N_=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];Op(i)&&!Fp(i)?i.delete(r):e[t++]=i,i.w&=~yr,i.n&=~yr}e.length=t}},gu=new WeakMap;let Fo=0,yr=1;const _u=30;let li;const Qr=Symbol(""),vu=Symbol("");class gf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,U_(this,n)}run(){if(!this.active)return this.fn();let e=li,t=gr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=li,li=this,gr=!0,yr=1<<++Fo,Fo<=_u?F_(this):ah(this),this.fn()}finally{Fo<=_u&&N_(this),yr=1<<--Fo,li=this.parent,gr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){li===this?this.deferStop=!0:this.active&&(ah(this),this.onStop&&this.onStop(),this.active=!1)}}function ah(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let gr=!0;const Np=[];function bo(){Np.push(gr),gr=!1}function wo(){const r=Np.pop();gr=r===void 0?!0:r}function En(r,e,t){if(gr&&li){let n=gu.get(r);n||gu.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=mf()),zp(i)}}function zp(r,e){let t=!1;Fo<=_u?Fp(r)||(r.n|=yr,t=!Op(r)):t=!r.has(li),t&&(r.add(li),li.deps.push(r))}function Qi(r,e,t,n,i,s){const o=gu.get(r);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&je(r)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":je(r)?pf(t)&&a.push(o.get("length")):(a.push(o.get(Qr)),Ys(r)&&a.push(o.get(vu)));break;case"delete":je(r)||(a.push(o.get(Qr)),Ys(r)&&a.push(o.get(vu)));break;case"set":Ys(r)&&a.push(o.get(Qr));break}if(a.length===1)a[0]&&xu(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);xu(mf(l))}}function xu(r,e){const t=je(r)?r:[...r];for(const n of t)n.computed&&lh(n);for(const n of t)n.computed||lh(n)}function lh(r,e){(r!==li||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const z_=cf("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(df)),B_=_f(),k_=_f(!1,!0),G_=_f(!0),ch=H_();function H_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=ct(this);for(let s=0,o=this.length;s<o;s++)En(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(ct)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){bo();const n=ct(this)[e].apply(this,t);return wo(),n}}),r}function V_(r){const e=ct(this);return En(e,"has",r),e.hasOwnProperty(r)}function _f(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?s0:Wp:e?Vp:Hp).get(n))return n;const o=je(n);if(!r){if(o&&st(ch,i))return Reflect.get(ch,i,s);if(i==="hasOwnProperty")return V_}const a=Reflect.get(n,i,s);return(df(i)?Bp.has(i):z_(i))||(r||En(n,"get",i),e)?a:Dt(a)?o&&pf(i)?a:a.value:Tt(a)?r?qp(a):Mf(a):a}}const W_=kp(),q_=kp(!0);function kp(r=!1){return function(t,n,i,s){let o=t[n];if(oo(o)&&Dt(o)&&!Dt(i))return!1;if(!r&&(!Ol(i)&&!oo(i)&&(o=ct(o),i=ct(i)),!je(t)&&Dt(o)&&!Dt(i)))return o.value=i,!0;const a=je(t)&&pf(n)?Number(n)<t.length:st(t,n),l=Reflect.set(t,n,i,s);return t===ct(s)&&(a?ra(i,o)&&Qi(t,"set",n,i):Qi(t,"add",n,i)),l}}function X_(r,e){const t=st(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&Qi(r,"delete",e,void 0),n}function $_(r,e){const t=Reflect.has(r,e);return(!df(e)||!Bp.has(e))&&En(r,"has",e),t}function Y_(r){return En(r,"iterate",je(r)?"length":Qr),Reflect.ownKeys(r)}const Gp={get:B_,set:W_,deleteProperty:X_,has:$_,ownKeys:Y_},j_={get:G_,set(r,e){return!0},deleteProperty(r,e){return!0}},K_=mn({},Gp,{get:k_,set:q_}),vf=r=>r,Ql=r=>Reflect.getPrototypeOf(r);function Ra(r,e,t=!1,n=!1){r=r.__v_raw;const i=ct(r),s=ct(e);t||(e!==s&&En(i,"get",e),En(i,"get",s));const{has:o}=Ql(i),a=n?vf:t?yf:sa;if(o.call(i,e))return a(r.get(e));if(o.call(i,s))return a(r.get(s));r!==i&&r.get(e)}function Da(r,e=!1){const t=this.__v_raw,n=ct(t),i=ct(r);return e||(r!==i&&En(n,"has",r),En(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function Ia(r,e=!1){return r=r.__v_raw,!e&&En(ct(r),"iterate",Qr),Reflect.get(r,"size",r)}function uh(r){r=ct(r);const e=ct(this);return Ql(e).has.call(e,r)||(e.add(r),Qi(e,"add",r,r)),this}function fh(r,e){e=ct(e);const t=ct(this),{has:n,get:i}=Ql(t);let s=n.call(t,r);s||(r=ct(r),s=n.call(t,r));const o=i.call(t,r);return t.set(r,e),s?ra(e,o)&&Qi(t,"set",r,e):Qi(t,"add",r,e),this}function hh(r){const e=ct(this),{has:t,get:n}=Ql(e);let i=t.call(e,r);i||(r=ct(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&Qi(e,"delete",r,void 0),s}function dh(){const r=ct(this),e=r.size!==0,t=r.clear();return e&&Qi(r,"clear",void 0,void 0),t}function Ua(r,e){return function(n,i){const s=this,o=s.__v_raw,a=ct(o),l=e?vf:r?yf:sa;return!r&&En(a,"iterate",Qr),o.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Oa(r,e,t){return function(...n){const i=this.__v_raw,s=ct(i),o=Ys(s),a=r==="entries"||r===Symbol.iterator&&o,l=r==="keys"&&o,c=i[r](...n),u=t?vf:e?yf:sa;return!e&&En(s,"iterate",l?vu:Qr),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function ir(r){return function(...e){return r==="delete"?!1:this}}function Z_(){const r={get(s){return Ra(this,s)},get size(){return Ia(this)},has:Da,add:uh,set:fh,delete:hh,clear:dh,forEach:Ua(!1,!1)},e={get(s){return Ra(this,s,!1,!0)},get size(){return Ia(this)},has:Da,add:uh,set:fh,delete:hh,clear:dh,forEach:Ua(!1,!0)},t={get(s){return Ra(this,s,!0)},get size(){return Ia(this,!0)},has(s){return Da.call(this,s,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:Ua(!0,!1)},n={get(s){return Ra(this,s,!0,!0)},get size(){return Ia(this,!0)},has(s){return Da.call(this,s,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:Ua(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Oa(s,!1,!1),t[s]=Oa(s,!0,!1),e[s]=Oa(s,!1,!0),n[s]=Oa(s,!0,!0)}),[r,t,e,n]}const[J_,Q_,e0,t0]=Z_();function xf(r,e){const t=e?r?t0:e0:r?Q_:J_;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(st(t,i)&&i in n?t:n,i,s)}const n0={get:xf(!1,!1)},i0={get:xf(!1,!0)},r0={get:xf(!0,!1)},Hp=new WeakMap,Vp=new WeakMap,Wp=new WeakMap,s0=new WeakMap;function o0(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a0(r){return r.__v_skip||!Object.isExtensible(r)?0:o0(C_(r))}function Mf(r){return oo(r)?r:Sf(r,!1,Gp,n0,Hp)}function l0(r){return Sf(r,!1,K_,i0,Vp)}function qp(r){return Sf(r,!0,j_,r0,Wp)}function Sf(r,e,t,n,i){if(!Tt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const o=a0(r);if(o===0)return r;const a=new Proxy(r,o===2?n:t);return i.set(r,a),a}function js(r){return oo(r)?js(r.__v_raw):!!(r&&r.__v_isReactive)}function oo(r){return!!(r&&r.__v_isReadonly)}function Ol(r){return!!(r&&r.__v_isShallow)}function Xp(r){return js(r)||oo(r)}function ct(r){const e=r&&r.__v_raw;return e?ct(e):r}function $p(r){return Ul(r,"__v_skip",!0),r}const sa=r=>Tt(r)?Mf(r):r,yf=r=>Tt(r)?qp(r):r;function Yp(r){gr&&li&&(r=ct(r),zp(r.dep||(r.dep=mf())))}function jp(r,e){r=ct(r);const t=r.dep;t&&xu(t)}function Dt(r){return!!(r&&r.__v_isRef===!0)}function ph(r){return c0(r,!1)}function c0(r,e){return Dt(r)?r:new u0(r,e)}class u0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ct(e),this._value=t?e:sa(e)}get value(){return Yp(this),this._value}set value(e){const t=this.__v_isShallow||Ol(e)||oo(e);e=t?e:ct(e),ra(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:sa(e),jp(this))}}function Lt(r){return Dt(r)?r.value:r}const f0={get:(r,e,t)=>Lt(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Dt(i)&&!Dt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function Kp(r){return js(r)?r:new Proxy(r,f0)}var Zp;class h0{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Zp]=!1,this._dirty=!0,this.effect=new gf(e,()=>{this._dirty||(this._dirty=!0,jp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=ct(this);return Yp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Zp="__v_isReadonly";function d0(r,e,t=!1){let n,i;const s=Ze(r);return s?(n=r,i=pi):(n=r.get,i=r.set),new h0(n,i,s||!i,t)}function _r(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){ec(s,e,t)}return i}function mi(r,e,t,n){if(Ze(r)){const s=_r(r,e,t,n);return s&&Rp(s)&&s.catch(o=>{ec(o,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(mi(r[s],e,t,n));return i}function ec(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){_r(l,null,10,[r,o,a]);return}}p0(r,t,i,n)}function p0(r,e,t,n=!0){console.error(r)}let oa=!1,Mu=!1;const en=[];let Ai=0;const Ks=[];let qi=null,qr=0;const Jp=Promise.resolve();let bf=null;function m0(r){const e=bf||Jp;return r?e.then(this?r.bind(this):r):e}function g0(r){let e=Ai+1,t=en.length;for(;e<t;){const n=e+t>>>1;aa(en[n])<r?e=n+1:t=n}return e}function wf(r){(!en.length||!en.includes(r,oa&&r.allowRecurse?Ai+1:Ai))&&(r.id==null?en.push(r):en.splice(g0(r.id),0,r),Qp())}function Qp(){!oa&&!Mu&&(Mu=!0,bf=Jp.then(tm))}function _0(r){const e=en.indexOf(r);e>Ai&&en.splice(e,1)}function v0(r){je(r)?Ks.push(...r):(!qi||!qi.includes(r,r.allowRecurse?qr+1:qr))&&Ks.push(r),Qp()}function mh(r,e=oa?Ai+1:0){for(;e<en.length;e++){const t=en[e];t&&t.pre&&(en.splice(e,1),e--,t())}}function em(r){if(Ks.length){const e=[...new Set(Ks)];if(Ks.length=0,qi){qi.push(...e);return}for(qi=e,qi.sort((t,n)=>aa(t)-aa(n)),qr=0;qr<qi.length;qr++)qi[qr]();qi=null,qr=0}}const aa=r=>r.id==null?1/0:r.id,x0=(r,e)=>{const t=aa(r)-aa(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function tm(r){Mu=!1,oa=!0,en.sort(x0);const e=pi;try{for(Ai=0;Ai<en.length;Ai++){const t=en[Ai];t&&t.active!==!1&&_r(t,null,14)}}finally{Ai=0,en.length=0,em(),oa=!1,bf=null,(en.length||Ks.length)&&tm()}}function M0(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||xt;let i=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:h}=n[u]||xt;h&&(i=t.map(d=>Wt(d)?d.trim():d)),f&&(i=t.map(R_))}let a,l=n[a=vc(e)]||n[a=vc(so(e))];!l&&s&&(l=n[a=vc(yo(e))]),l&&mi(l,r,6,i);const c=n[a+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[a])return;r.emitted[a]=!0,mi(c,r,6,i)}}function nm(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let o={},a=!1;if(!Ze(r)){const l=c=>{const u=nm(c,e,!0);u&&(a=!0,mn(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!a?(Tt(r)&&n.set(r,null),null):(je(s)?s.forEach(l=>o[l]=null):mn(o,s),Tt(r)&&n.set(r,o),o)}function tc(r,e){return!r||!Kl(e)?!1:(e=e.slice(2).replace(/Once$/,""),st(r,e[0].toLowerCase()+e.slice(1))||st(r,yo(e))||st(r,e))}let Pi=null,nc=null;function Fl(r){const e=Pi;return Pi=r,nc=r&&r.type.__scopeId||null,e}function Ar(r){nc=r}function Cr(){nc=null}function S0(r,e=Pi,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&bh(-1);const s=Fl(e);let o;try{o=r(...i)}finally{Fl(s),n._d&&bh(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Mc(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:d,ctx:_,inheritAttrs:g}=r;let m,p;const b=Fl(r);try{if(t.shapeFlag&4){const v=i||n;m=Ti(u.call(v,v,f,s,d,h,_)),p=l}else{const v=e;m=Ti(v.length>1?v(s,{attrs:l,slots:a,emit:c}):v(s,null)),p=e.props?l:y0(l)}}catch(v){Xo.length=0,ec(v,r,1),m=Vt(la)}let S=m;if(p&&g!==!1){const v=Object.keys(p),{shapeFlag:y}=S;v.length&&y&7&&(o&&v.some(ff)&&(p=b0(p,o)),S=ao(S,p))}return t.dirs&&(S=ao(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),m=S,Fl(b),m}const y0=r=>{let e;for(const t in r)(t==="class"||t==="style"||Kl(t))&&((e||(e={}))[t]=r[t]);return e},b0=(r,e)=>{const t={};for(const n in r)(!ff(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function w0(r,e,t){const{props:n,children:i,component:s}=r,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?gh(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==n[h]&&!tc(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?gh(n,o,c):!0:!!o;return!1}function gh(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!tc(t,s))return!0}return!1}function T0({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const E0=r=>r.__isSuspense;function A0(r,e){e&&e.pendingBranch?je(r)?e.effects.push(...r):e.effects.push(r):v0(r)}function C0(r,e){if(Ft){let t=Ft.provides;const n=Ft.parent&&Ft.parent.provides;n===t&&(t=Ft.provides=Object.create(n)),t[r]=e}}function vl(r,e,t=!1){const n=Ft||Pi;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&Ze(e)?e.call(n.proxy):e}}const Fa={};function xl(r,e,t){return im(r,e,t)}function im(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:o}=xt){const a=O_()===(Ft==null?void 0:Ft.scope)?Ft:null;let l,c=!1,u=!1;if(Dt(r)?(l=()=>r.value,c=Ol(r)):js(r)?(l=()=>r,n=!0):je(r)?(u=!0,c=r.some(S=>js(S)||Ol(S)),l=()=>r.map(S=>{if(Dt(S))return S.value;if(js(S))return Gs(S);if(Ze(S))return _r(S,a,2)})):Ze(r)?e?l=()=>_r(r,a,2):l=()=>{if(!(a&&a.isUnmounted))return f&&f(),mi(r,a,3,[h])}:l=pi,e&&n){const S=l;l=()=>Gs(S())}let f,h=S=>{f=p.onStop=()=>{_r(S,a,4)}},d;if(ua)if(h=pi,e?t&&mi(e,a,3,[l(),u?[]:void 0,h]):l(),i==="sync"){const S=Sv();d=S.__watcherHandles||(S.__watcherHandles=[])}else return pi;let _=u?new Array(r.length).fill(Fa):Fa;const g=()=>{if(p.active)if(e){const S=p.run();(n||c||(u?S.some((v,y)=>ra(v,_[y])):ra(S,_)))&&(f&&f(),mi(e,a,3,[S,_===Fa?void 0:u&&_[0]===Fa?[]:_,h]),_=S)}else p.run()};g.allowRecurse=!!e;let m;i==="sync"?m=g:i==="post"?m=()=>_n(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>wf(g));const p=new gf(l,m);e?t?g():_=p.run():i==="post"?_n(p.run.bind(p),a&&a.suspense):p.run();const b=()=>{p.stop(),a&&a.scope&&hf(a.scope.effects,p)};return d&&d.push(b),b}function P0(r,e,t){const n=this.proxy,i=Wt(r)?r.includes(".")?rm(n,r):()=>n[r]:r.bind(n,n);let s;Ze(e)?s=e:(s=e.handler,t=e);const o=Ft;lo(this);const a=im(i,s.bind(n),t);return o?lo(o):es(),a}function rm(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Gs(r,e){if(!Tt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Dt(r))Gs(r.value,e);else if(je(r))for(let t=0;t<r.length;t++)Gs(r[t],e);else if(Lp(r)||Ys(r))r.forEach(t=>{Gs(t,e)});else if(Ip(r))for(const t in r)Gs(r[t],e);return r}function Vn(r){return Ze(r)?{setup:r,name:r.name}:r}const Ml=r=>!!r.type.__asyncLoader,sm=r=>r.type.__isKeepAlive;function L0(r,e){om(r,"a",e)}function R0(r,e){om(r,"da",e)}function om(r,e,t=Ft){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(ic(e,n,t),t){let i=t.parent;for(;i&&i.parent;)sm(i.parent.vnode)&&D0(n,e,t,i),i=i.parent}}function D0(r,e,t,n){const i=ic(e,r,n,!0);am(()=>{hf(n[e],i)},t)}function ic(r,e,t=Ft,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;bo(),lo(t);const a=mi(e,t,r,o);return es(),wo(),a});return n?i.unshift(s):i.push(s),s}}const nr=r=>(e,t=Ft)=>(!ua||r==="sp")&&ic(r,(...n)=>e(...n),t),I0=nr("bm"),_s=nr("m"),U0=nr("bu"),O0=nr("u"),F0=nr("bum"),am=nr("um"),N0=nr("sp"),z0=nr("rtg"),B0=nr("rtc");function k0(r,e=Ft){ic("ec",r,e)}function Ir(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(bo(),mi(l,t,8,[r.el,a,r,e]),wo())}}const G0=Symbol(),Su=r=>r?vm(r)?Cf(r)||r.proxy:Su(r.parent):null,qo=mn(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Su(r.parent),$root:r=>Su(r.root),$emit:r=>r.emit,$options:r=>Tf(r),$forceUpdate:r=>r.f||(r.f=()=>wf(r.update)),$nextTick:r=>r.n||(r.n=m0.bind(r.proxy)),$watch:r=>P0.bind(r)}),Sc=(r,e)=>r!==xt&&!r.__isScriptSetup&&st(r,e),H0={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:o,type:a,appContext:l}=r;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Sc(n,e))return o[e]=1,n[e];if(i!==xt&&st(i,e))return o[e]=2,i[e];if((c=r.propsOptions[0])&&st(c,e))return o[e]=3,s[e];if(t!==xt&&st(t,e))return o[e]=4,t[e];yu&&(o[e]=0)}}const u=qo[e];let f,h;if(u)return e==="$attrs"&&En(r,"get",e),u(r);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==xt&&st(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,st(h,e))return h[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return Sc(i,e)?(i[e]=t,!0):n!==xt&&st(n,e)?(n[e]=t,!0):st(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},o){let a;return!!t[o]||r!==xt&&st(r,o)||Sc(e,o)||(a=s[0])&&st(a,o)||st(n,o)||st(qo,o)||st(i.config.globalProperties,o)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:st(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let yu=!0;function V0(r){const e=Tf(r),t=r.proxy,n=r.ctx;yu=!1,e.beforeCreate&&_h(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:b,destroyed:S,unmounted:v,render:y,renderTracked:L,renderTriggered:C,errorCaptured:D,serverPrefetch:M,expose:T,inheritAttrs:Y,components:G,directives:z,filters:H}=e;if(c&&W0(c,n,null,r.appContext.config.unwrapInjectedRef),o)for(const X in o){const W=o[X];Ze(W)&&(n[X]=W.bind(t))}if(i){const X=i.call(t,t);Tt(X)&&(r.data=Mf(X))}if(yu=!0,s)for(const X in s){const W=s[X],le=Ze(W)?W.bind(t,t):Ze(W.get)?W.get.bind(t,t):pi,R=!Ze(W)&&Ze(W.set)?W.set.bind(t):pi,ye=xv({get:le,set:R});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>ye.value,set:de=>ye.value=de})}if(a)for(const X in a)lm(a[X],n,t,X);if(l){const X=Ze(l)?l.call(t):l;Reflect.ownKeys(X).forEach(W=>{C0(W,X[W])})}u&&_h(u,r,"c");function Q(X,W){je(W)?W.forEach(le=>X(le.bind(t))):W&&X(W.bind(t))}if(Q(I0,f),Q(_s,h),Q(U0,d),Q(O0,_),Q(L0,g),Q(R0,m),Q(k0,D),Q(B0,L),Q(z0,C),Q(F0,b),Q(am,v),Q(N0,M),je(T))if(T.length){const X=r.exposed||(r.exposed={});T.forEach(W=>{Object.defineProperty(X,W,{get:()=>t[W],set:le=>t[W]=le})})}else r.exposed||(r.exposed={});y&&r.render===pi&&(r.render=y),Y!=null&&(r.inheritAttrs=Y),G&&(r.components=G),z&&(r.directives=z)}function W0(r,e,t=pi,n=!1){je(r)&&(r=bu(r));for(const i in r){const s=r[i];let o;Tt(s)?"default"in s?o=vl(s.from||i,s.default,!0):o=vl(s.from||i):o=vl(s),Dt(o)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[i]=o}}function _h(r,e,t){mi(je(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function lm(r,e,t,n){const i=n.includes(".")?rm(t,n):()=>t[n];if(Wt(r)){const s=e[r];Ze(s)&&xl(i,s)}else if(Ze(r))xl(i,r.bind(t));else if(Tt(r))if(je(r))r.forEach(s=>lm(s,e,t,n));else{const s=Ze(r.handler)?r.handler.bind(t):e[r.handler];Ze(s)&&xl(i,s,r)}}function Tf(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=r.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Nl(l,c,o,!0)),Nl(l,e,o)),Tt(e)&&s.set(e,l),l}function Nl(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Nl(r,s,t,!0),i&&i.forEach(o=>Nl(r,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=q0[o]||t&&t[o];r[o]=a?a(r[o],e[o]):e[o]}return r}const q0={data:vh,props:kr,emits:kr,methods:kr,computed:kr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:kr,directives:kr,watch:$0,provide:vh,inject:X0};function vh(r,e){return e?r?function(){return mn(Ze(r)?r.call(this,this):r,Ze(e)?e.call(this,this):e)}:e:r}function X0(r,e){return kr(bu(r),bu(e))}function bu(r){if(je(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function ln(r,e){return r?[...new Set([].concat(r,e))]:e}function kr(r,e){return r?mn(mn(Object.create(null),r),e):e}function $0(r,e){if(!r)return e;if(!e)return r;const t=mn(Object.create(null),r);for(const n in e)t[n]=ln(r[n],e[n]);return t}function Y0(r,e,t,n=!1){const i={},s={};Ul(s,sc,1),r.propsDefaults=Object.create(null),cm(r,e,i,s);for(const o in r.propsOptions[0])o in i||(i[o]=void 0);t?r.props=n?i:l0(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function j0(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:o}}=r,a=ct(i),[l]=r.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=r.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(tc(r.emitsOptions,h))continue;const d=e[h];if(l)if(st(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const _=so(h);i[_]=wu(l,a,_,d,r,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{cm(r,e,i,s)&&(c=!0);let u;for(const f in a)(!e||!st(e,f)&&((u=yo(f))===f||!st(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(i[f]=wu(l,a,f,void 0,r,!0)):delete i[f]);if(s!==a)for(const f in s)(!e||!st(e,f))&&(delete s[f],c=!0)}c&&Qi(r,"set","$attrs")}function cm(r,e,t,n){const[i,s]=r.propsOptions;let o=!1,a;if(e)for(let l in e){if(_l(l))continue;const c=e[l];let u;i&&st(i,u=so(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:tc(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=ct(t),c=a||xt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=wu(i,l,f,c[f],r,!st(c,f))}}return o}function wu(r,e,t,n,i,s){const o=r[t];if(o!=null){const a=st(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ze(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(lo(i),n=c[t]=l.call(null,e),es())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===yo(t))&&(n=!0))}return n}function um(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,o={},a=[];let l=!1;if(!Ze(r)){const u=f=>{l=!0;const[h,d]=um(f,e,!0);mn(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return Tt(r)&&n.set(r,$s),$s;if(je(s))for(let u=0;u<s.length;u++){const f=so(s[u]);xh(f)&&(o[f]=xt)}else if(s)for(const u in s){const f=so(u);if(xh(f)){const h=s[u],d=o[f]=je(h)||Ze(h)?{type:h}:Object.assign({},h);if(d){const _=yh(Boolean,d.type),g=yh(String,d.type);d[0]=_>-1,d[1]=g<0||_<g,(_>-1||st(d,"default"))&&a.push(f)}}}const c=[o,a];return Tt(r)&&n.set(r,c),c}function xh(r){return r[0]!=="$"}function Mh(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function Sh(r,e){return Mh(r)===Mh(e)}function yh(r,e){return je(e)?e.findIndex(t=>Sh(t,r)):Ze(e)&&Sh(e,r)?0:-1}const fm=r=>r[0]==="_"||r==="$stable",Ef=r=>je(r)?r.map(Ti):[Ti(r)],K0=(r,e,t)=>{if(e._n)return e;const n=S0((...i)=>Ef(e(...i)),t);return n._c=!1,n},hm=(r,e,t)=>{const n=r._ctx;for(const i in r){if(fm(i))continue;const s=r[i];if(Ze(s))e[i]=K0(i,s,n);else if(s!=null){const o=Ef(s);e[i]=()=>o}}},dm=(r,e)=>{const t=Ef(e);r.slots.default=()=>t},Z0=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=ct(e),Ul(e,"_",t)):hm(e,r.slots={})}else r.slots={},e&&dm(r,e);Ul(r.slots,sc,1)},J0=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,o=xt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(mn(i,e),!t&&a===1&&delete i._):(s=!e.$stable,hm(e,i)),o=e}else e&&(dm(r,e),o={default:1});if(s)for(const a in i)!fm(a)&&!(a in o)&&delete i[a]};function pm(){return{app:null,config:{isNativeTag:T_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Q0=0;function ev(r,e){return function(n,i=null){Ze(n)||(n=Object.assign({},n)),i!=null&&!Tt(i)&&(i=null);const s=pm(),o=new Set;let a=!1;const l=s.app={_uid:Q0++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:yv,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ze(c.install)?(o.add(c),c.install(l,...u)):Ze(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const h=Vt(n,i);return h.appContext=s,u&&e?e(h,c):r(h,c,f),a=!0,l._container=c,c.__vue_app__=l,Cf(h.component)||h.component.proxy}},unmount(){a&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Tu(r,e,t,n,i=!1){if(je(r)){r.forEach((h,d)=>Tu(h,e&&(je(e)?e[d]:e),t,n,i));return}if(Ml(n)&&!i)return;const s=n.shapeFlag&4?Cf(n.component)||n.component.proxy:n.el,o=i?null:s,{i:a,r:l}=r,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(Wt(c)?(u[c]=null,st(f,c)&&(f[c]=null)):Dt(c)&&(c.value=null)),Ze(l))_r(l,a,12,[o,u]);else{const h=Wt(l),d=Dt(l);if(h||d){const _=()=>{if(r.f){const g=h?st(f,l)?f[l]:u[l]:l.value;i?je(g)&&hf(g,s):je(g)?g.includes(s)||g.push(s):h?(u[l]=[s],st(f,l)&&(f[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else h?(u[l]=o,st(f,l)&&(f[l]=o)):d&&(l.value=o,r.k&&(u[r.k]=o))};o?(_.id=-1,_n(_,t)):_()}}}const _n=A0;function tv(r){return nv(r)}function nv(r,e){const t=D_();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=pi,insertStaticContent:_}=r,g=(E,P,V,oe=null,ie=null,U=null,me=!1,te=null,he=!!P.dynamicChildren)=>{if(E===P)return;E&&!Co(E,P)&&(oe=N(E),de(E,ie,U,!0),E=null),P.patchFlag===-2&&(he=!1,P.dynamicChildren=null);const{type:ce,ref:w,shapeFlag:x}=P;switch(ce){case rc:m(E,P,V,oe);break;case la:p(E,P,V,oe);break;case Sl:E==null&&b(P,V,oe,me);break;case wi:G(E,P,V,oe,ie,U,me,te,he);break;default:x&1?y(E,P,V,oe,ie,U,me,te,he):x&6?z(E,P,V,oe,ie,U,me,te,he):(x&64||x&128)&&ce.process(E,P,V,oe,ie,U,me,te,he,Me)}w!=null&&ie&&Tu(w,E&&E.ref,U,P||E,!P)},m=(E,P,V,oe)=>{if(E==null)n(P.el=a(P.children),V,oe);else{const ie=P.el=E.el;P.children!==E.children&&c(ie,P.children)}},p=(E,P,V,oe)=>{E==null?n(P.el=l(P.children||""),V,oe):P.el=E.el},b=(E,P,V,oe)=>{[E.el,E.anchor]=_(E.children,P,V,oe,E.el,E.anchor)},S=({el:E,anchor:P},V,oe)=>{let ie;for(;E&&E!==P;)ie=h(E),n(E,V,oe),E=ie;n(P,V,oe)},v=({el:E,anchor:P})=>{let V;for(;E&&E!==P;)V=h(E),i(E),E=V;i(P)},y=(E,P,V,oe,ie,U,me,te,he)=>{me=me||P.type==="svg",E==null?L(P,V,oe,ie,U,me,te,he):M(E,P,ie,U,me,te,he)},L=(E,P,V,oe,ie,U,me,te)=>{let he,ce;const{type:w,props:x,shapeFlag:B,transition:K,dirs:j}=E;if(he=E.el=o(E.type,U,x&&x.is,x),B&8?u(he,E.children):B&16&&D(E.children,he,null,oe,ie,U&&w!=="foreignObject",me,te),j&&Ir(E,null,oe,"created"),C(he,E,E.scopeId,me,oe),x){for(const _e in x)_e!=="value"&&!_l(_e)&&s(he,_e,null,x[_e],U,E.children,oe,ie,re);"value"in x&&s(he,"value",null,x.value),(ce=x.onVnodeBeforeMount)&&Mi(ce,oe,E)}j&&Ir(E,null,oe,"beforeMount");const fe=(!ie||ie&&!ie.pendingBranch)&&K&&!K.persisted;fe&&K.beforeEnter(he),n(he,P,V),((ce=x&&x.onVnodeMounted)||fe||j)&&_n(()=>{ce&&Mi(ce,oe,E),fe&&K.enter(he),j&&Ir(E,null,oe,"mounted")},ie)},C=(E,P,V,oe,ie)=>{if(V&&d(E,V),oe)for(let U=0;U<oe.length;U++)d(E,oe[U]);if(ie){let U=ie.subTree;if(P===U){const me=ie.vnode;C(E,me,me.scopeId,me.slotScopeIds,ie.parent)}}},D=(E,P,V,oe,ie,U,me,te,he=0)=>{for(let ce=he;ce<E.length;ce++){const w=E[ce]=te?cr(E[ce]):Ti(E[ce]);g(null,w,P,V,oe,ie,U,me,te)}},M=(E,P,V,oe,ie,U,me)=>{const te=P.el=E.el;let{patchFlag:he,dynamicChildren:ce,dirs:w}=P;he|=E.patchFlag&16;const x=E.props||xt,B=P.props||xt;let K;V&&Ur(V,!1),(K=B.onVnodeBeforeUpdate)&&Mi(K,V,P,E),w&&Ir(P,E,V,"beforeUpdate"),V&&Ur(V,!0);const j=ie&&P.type!=="foreignObject";if(ce?T(E.dynamicChildren,ce,te,V,oe,j,U):me||W(E,P,te,null,V,oe,j,U,!1),he>0){if(he&16)Y(te,P,x,B,V,oe,ie);else if(he&2&&x.class!==B.class&&s(te,"class",null,B.class,ie),he&4&&s(te,"style",x.style,B.style,ie),he&8){const fe=P.dynamicProps;for(let _e=0;_e<fe.length;_e++){const ve=fe[_e],Z=x[ve],Ae=B[ve];(Ae!==Z||ve==="value")&&s(te,ve,Z,Ae,ie,E.children,V,oe,re)}}he&1&&E.children!==P.children&&u(te,P.children)}else!me&&ce==null&&Y(te,P,x,B,V,oe,ie);((K=B.onVnodeUpdated)||w)&&_n(()=>{K&&Mi(K,V,P,E),w&&Ir(P,E,V,"updated")},oe)},T=(E,P,V,oe,ie,U,me)=>{for(let te=0;te<P.length;te++){const he=E[te],ce=P[te],w=he.el&&(he.type===wi||!Co(he,ce)||he.shapeFlag&70)?f(he.el):V;g(he,ce,w,null,oe,ie,U,me,!0)}},Y=(E,P,V,oe,ie,U,me)=>{if(V!==oe){if(V!==xt)for(const te in V)!_l(te)&&!(te in oe)&&s(E,te,V[te],null,me,P.children,ie,U,re);for(const te in oe){if(_l(te))continue;const he=oe[te],ce=V[te];he!==ce&&te!=="value"&&s(E,te,ce,he,me,P.children,ie,U,re)}"value"in oe&&s(E,"value",V.value,oe.value)}},G=(E,P,V,oe,ie,U,me,te,he)=>{const ce=P.el=E?E.el:a(""),w=P.anchor=E?E.anchor:a("");let{patchFlag:x,dynamicChildren:B,slotScopeIds:K}=P;K&&(te=te?te.concat(K):K),E==null?(n(ce,V,oe),n(w,V,oe),D(P.children,V,w,ie,U,me,te,he)):x>0&&x&64&&B&&E.dynamicChildren?(T(E.dynamicChildren,B,V,ie,U,me,te),(P.key!=null||ie&&P===ie.subTree)&&mm(E,P,!0)):W(E,P,V,w,ie,U,me,te,he)},z=(E,P,V,oe,ie,U,me,te,he)=>{P.slotScopeIds=te,E==null?P.shapeFlag&512?ie.ctx.activate(P,V,oe,me,he):H(P,V,oe,ie,U,me,he):$(E,P,he)},H=(E,P,V,oe,ie,U,me)=>{const te=E.component=dv(E,oe,ie);if(sm(E)&&(te.ctx.renderer=Me),pv(te),te.asyncDep){if(ie&&ie.registerDep(te,Q),!E.el){const he=te.subTree=Vt(la);p(null,he,P,V)}return}Q(te,E,P,V,ie,U,me)},$=(E,P,V)=>{const oe=P.component=E.component;if(w0(E,P,V))if(oe.asyncDep&&!oe.asyncResolved){X(oe,P,V);return}else oe.next=P,_0(oe.update),oe.update();else P.el=E.el,oe.vnode=P},Q=(E,P,V,oe,ie,U,me)=>{const te=()=>{if(E.isMounted){let{next:w,bu:x,u:B,parent:K,vnode:j}=E,fe=w,_e;Ur(E,!1),w?(w.el=j.el,X(E,w,me)):w=j,x&&xc(x),(_e=w.props&&w.props.onVnodeBeforeUpdate)&&Mi(_e,K,w,j),Ur(E,!0);const ve=Mc(E),Z=E.subTree;E.subTree=ve,g(Z,ve,f(Z.el),N(Z),E,ie,U),w.el=ve.el,fe===null&&T0(E,ve.el),B&&_n(B,ie),(_e=w.props&&w.props.onVnodeUpdated)&&_n(()=>Mi(_e,K,w,j),ie)}else{let w;const{el:x,props:B}=P,{bm:K,m:j,parent:fe}=E,_e=Ml(P);if(Ur(E,!1),K&&xc(K),!_e&&(w=B&&B.onVnodeBeforeMount)&&Mi(w,fe,P),Ur(E,!0),x&&Se){const ve=()=>{E.subTree=Mc(E),Se(x,E.subTree,E,ie,null)};_e?P.type.__asyncLoader().then(()=>!E.isUnmounted&&ve()):ve()}else{const ve=E.subTree=Mc(E);g(null,ve,V,oe,E,ie,U),P.el=ve.el}if(j&&_n(j,ie),!_e&&(w=B&&B.onVnodeMounted)){const ve=P;_n(()=>Mi(w,fe,ve),ie)}(P.shapeFlag&256||fe&&Ml(fe.vnode)&&fe.vnode.shapeFlag&256)&&E.a&&_n(E.a,ie),E.isMounted=!0,P=V=oe=null}},he=E.effect=new gf(te,()=>wf(ce),E.scope),ce=E.update=()=>he.run();ce.id=E.uid,Ur(E,!0),ce()},X=(E,P,V)=>{P.component=E;const oe=E.vnode.props;E.vnode=P,E.next=null,j0(E,P.props,oe,V),J0(E,P.children,V),bo(),mh(),wo()},W=(E,P,V,oe,ie,U,me,te,he=!1)=>{const ce=E&&E.children,w=E?E.shapeFlag:0,x=P.children,{patchFlag:B,shapeFlag:K}=P;if(B>0){if(B&128){R(ce,x,V,oe,ie,U,me,te,he);return}else if(B&256){le(ce,x,V,oe,ie,U,me,te,he);return}}K&8?(w&16&&re(ce,ie,U),x!==ce&&u(V,x)):w&16?K&16?R(ce,x,V,oe,ie,U,me,te,he):re(ce,ie,U,!0):(w&8&&u(V,""),K&16&&D(x,V,oe,ie,U,me,te,he))},le=(E,P,V,oe,ie,U,me,te,he)=>{E=E||$s,P=P||$s;const ce=E.length,w=P.length,x=Math.min(ce,w);let B;for(B=0;B<x;B++){const K=P[B]=he?cr(P[B]):Ti(P[B]);g(E[B],K,V,null,ie,U,me,te,he)}ce>w?re(E,ie,U,!0,!1,x):D(P,V,oe,ie,U,me,te,he,x)},R=(E,P,V,oe,ie,U,me,te,he)=>{let ce=0;const w=P.length;let x=E.length-1,B=w-1;for(;ce<=x&&ce<=B;){const K=E[ce],j=P[ce]=he?cr(P[ce]):Ti(P[ce]);if(Co(K,j))g(K,j,V,null,ie,U,me,te,he);else break;ce++}for(;ce<=x&&ce<=B;){const K=E[x],j=P[B]=he?cr(P[B]):Ti(P[B]);if(Co(K,j))g(K,j,V,null,ie,U,me,te,he);else break;x--,B--}if(ce>x){if(ce<=B){const K=B+1,j=K<w?P[K].el:oe;for(;ce<=B;)g(null,P[ce]=he?cr(P[ce]):Ti(P[ce]),V,j,ie,U,me,te,he),ce++}}else if(ce>B)for(;ce<=x;)de(E[ce],ie,U,!0),ce++;else{const K=ce,j=ce,fe=new Map;for(ce=j;ce<=B;ce++){const we=P[ce]=he?cr(P[ce]):Ti(P[ce]);we.key!=null&&fe.set(we.key,ce)}let _e,ve=0;const Z=B-j+1;let Ae=!1,Ne=0;const Ue=new Array(Z);for(ce=0;ce<Z;ce++)Ue[ce]=0;for(ce=K;ce<=x;ce++){const we=E[ce];if(ve>=Z){de(we,ie,U,!0);continue}let Ge;if(we.key!=null)Ge=fe.get(we.key);else for(_e=j;_e<=B;_e++)if(Ue[_e-j]===0&&Co(we,P[_e])){Ge=_e;break}Ge===void 0?de(we,ie,U,!0):(Ue[Ge-j]=ce+1,Ge>=Ne?Ne=Ge:Ae=!0,g(we,P[Ge],V,null,ie,U,me,te,he),ve++)}const Ce=Ae?iv(Ue):$s;for(_e=Ce.length-1,ce=Z-1;ce>=0;ce--){const we=j+ce,Ge=P[we],Le=we+1<w?P[we+1].el:oe;Ue[ce]===0?g(null,Ge,V,Le,ie,U,me,te,he):Ae&&(_e<0||ce!==Ce[_e]?ye(Ge,V,Le,2):_e--)}}},ye=(E,P,V,oe,ie=null)=>{const{el:U,type:me,transition:te,children:he,shapeFlag:ce}=E;if(ce&6){ye(E.component.subTree,P,V,oe);return}if(ce&128){E.suspense.move(P,V,oe);return}if(ce&64){me.move(E,P,V,Me);return}if(me===wi){n(U,P,V);for(let x=0;x<he.length;x++)ye(he[x],P,V,oe);n(E.anchor,P,V);return}if(me===Sl){S(E,P,V);return}if(oe!==2&&ce&1&&te)if(oe===0)te.beforeEnter(U),n(U,P,V),_n(()=>te.enter(U),ie);else{const{leave:x,delayLeave:B,afterLeave:K}=te,j=()=>n(U,P,V),fe=()=>{x(U,()=>{j(),K&&K()})};B?B(U,j,fe):fe()}else n(U,P,V)},de=(E,P,V,oe=!1,ie=!1)=>{const{type:U,props:me,ref:te,children:he,dynamicChildren:ce,shapeFlag:w,patchFlag:x,dirs:B}=E;if(te!=null&&Tu(te,null,V,E,!0),w&256){P.ctx.deactivate(E);return}const K=w&1&&B,j=!Ml(E);let fe;if(j&&(fe=me&&me.onVnodeBeforeUnmount)&&Mi(fe,P,E),w&6)ne(E.component,V,oe);else{if(w&128){E.suspense.unmount(V,oe);return}K&&Ir(E,null,P,"beforeUnmount"),w&64?E.type.remove(E,P,V,ie,Me,oe):ce&&(U!==wi||x>0&&x&64)?re(ce,P,V,!1,!0):(U===wi&&x&384||!ie&&w&16)&&re(he,P,V),oe&&I(E)}(j&&(fe=me&&me.onVnodeUnmounted)||K)&&_n(()=>{fe&&Mi(fe,P,E),K&&Ir(E,null,P,"unmounted")},V)},I=E=>{const{type:P,el:V,anchor:oe,transition:ie}=E;if(P===wi){F(V,oe);return}if(P===Sl){v(E);return}const U=()=>{i(V),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(E.shapeFlag&1&&ie&&!ie.persisted){const{leave:me,delayLeave:te}=ie,he=()=>me(V,U);te?te(E.el,U,he):he()}else U()},F=(E,P)=>{let V;for(;E!==P;)V=h(E),i(E),E=V;i(P)},ne=(E,P,V)=>{const{bum:oe,scope:ie,update:U,subTree:me,um:te}=E;oe&&xc(oe),ie.stop(),U&&(U.active=!1,de(me,E,P,V)),te&&_n(te,P),_n(()=>{E.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},re=(E,P,V,oe=!1,ie=!1,U=0)=>{for(let me=U;me<E.length;me++)de(E[me],P,V,oe,ie)},N=E=>E.shapeFlag&6?N(E.component.subTree):E.shapeFlag&128?E.suspense.next():h(E.anchor||E.el),xe=(E,P,V)=>{E==null?P._vnode&&de(P._vnode,null,null,!0):g(P._vnode||null,E,P,null,null,null,V),mh(),em(),P._vnode=E},Me={p:g,um:de,m:ye,r:I,mt:H,mc:D,pc:W,pbc:T,n:N,o:r};let ue,Se;return e&&([ue,Se]=e(Me)),{render:xe,hydrate:ue,createApp:ev(xe,ue)}}function Ur({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function mm(r,e,t=!1){const n=r.children,i=e.children;if(je(n)&&je(i))for(let s=0;s<n.length;s++){const o=n[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=cr(i[s]),a.el=o.el),t||mm(o,a)),a.type===rc&&(a.el=o.el)}}function iv(r){const e=r.slice(),t=[0];let n,i,s,o,a;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,r[t[a]]<c?s=a+1:o=a;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const rv=r=>r.__isTeleport,wi=Symbol(void 0),rc=Symbol(void 0),la=Symbol(void 0),Sl=Symbol(void 0),Xo=[];let di=null;function Fi(r=!1){Xo.push(di=r?null:[])}function sv(){Xo.pop(),di=Xo[Xo.length-1]||null}let ca=1;function bh(r){ca+=r}function ov(r){return r.dynamicChildren=ca>0?di||$s:null,sv(),ca>0&&di&&di.push(r),r}function Ni(r,e,t,n,i,s){return ov(Ee(r,e,t,n,i,s,!0))}function av(r){return r?r.__v_isVNode===!0:!1}function Co(r,e){return r.type===e.type&&r.key===e.key}const sc="__vInternal",gm=({key:r})=>r??null,yl=({ref:r,ref_key:e,ref_for:t})=>r!=null?Wt(r)||Dt(r)||Ze(r)?{i:Pi,r,k:e,f:!!t}:r:null;function Ee(r,e=null,t=null,n=0,i=null,s=r===wi?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&gm(e),ref:e&&yl(e),scopeId:nc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Pi};return a?(Af(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=Wt(t)?8:16),ca>0&&!o&&di&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&di.push(l),l}const Vt=lv;function lv(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===G0)&&(r=la),av(r)){const a=ao(r,e,!0);return t&&Af(a,t),ca>0&&!s&&di&&(a.shapeFlag&6?di[di.indexOf(r)]=a:di.push(a)),a.patchFlag|=-2,a}if(vv(r)&&(r=r.__vccOpts),e){e=cv(e);let{class:a,style:l}=e;a&&!Wt(a)&&(e.class=hi(a)),Tt(l)&&(Xp(l)&&!je(l)&&(l=mn({},l)),e.style=uf(l))}const o=Wt(r)?1:E0(r)?128:rv(r)?64:Tt(r)?4:Ze(r)?2:0;return Ee(r,e,t,n,i,o,s,!0)}function cv(r){return r?Xp(r)||sc in r?mn({},r):r:null}function ao(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:o}=r,a=e?uv(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:a,key:a&&gm(a),ref:e&&e.ref?t&&i?je(i)?i.concat(yl(e)):[i,yl(e)]:yl(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:o,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==wi?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&ao(r.ssContent),ssFallback:r.ssFallback&&ao(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function Yr(r=" ",e=0){return Vt(rc,null,r,e)}function _m(r,e){const t=Vt(Sl,null,r);return t.staticCount=e,t}function Ti(r){return r==null||typeof r=="boolean"?Vt(la):je(r)?Vt(wi,null,r.slice()):typeof r=="object"?cr(r):Vt(rc,null,String(r))}function cr(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:ao(r)}function Af(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(je(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Af(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(sc in e)?e._ctx=Pi:i===3&&Pi&&(Pi.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else Ze(e)?(e={default:e,_ctx:Pi},t=32):(e=String(e),n&64?(t=16,e=[Yr(e)]):t=8);r.children=e,r.shapeFlag|=t}function uv(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=hi([e.class,n.class]));else if(i==="style")e.style=uf([e.style,n.style]);else if(Kl(i)){const s=e[i],o=n[i];o&&s!==o&&!(je(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=n[i])}return e}function Mi(r,e,t,n=null){mi(r,e,7,[t,n])}const fv=pm();let hv=0;function dv(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||fv,s={uid:hv++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new I_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:um(n,i),emitsOptions:nm(n,i),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:n.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=M0.bind(null,s),r.ce&&r.ce(s),s}let Ft=null;const lo=r=>{Ft=r,r.scope.on()},es=()=>{Ft&&Ft.scope.off(),Ft=null};function vm(r){return r.vnode.shapeFlag&4}let ua=!1;function pv(r,e=!1){ua=e;const{props:t,children:n}=r.vnode,i=vm(r);Y0(r,t,i,e),Z0(r,n);const s=i?mv(r,e):void 0;return ua=!1,s}function mv(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=$p(new Proxy(r.ctx,H0));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?_v(r):null;lo(r),bo();const s=_r(n,r,0,[r.props,i]);if(wo(),es(),Rp(s)){if(s.then(es,es),e)return s.then(o=>{wh(r,o,e)}).catch(o=>{ec(o,r,0)});r.asyncDep=s}else wh(r,s,e)}else xm(r,e)}function wh(r,e,t){Ze(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:Tt(e)&&(r.setupState=Kp(e)),xm(r,t)}let Th;function xm(r,e,t){const n=r.type;if(!r.render){if(!e&&Th&&!n.render){const i=n.template||Tf(r).template;if(i){const{isCustomElement:s,compilerOptions:o}=r.appContext.config,{delimiters:a,compilerOptions:l}=n,c=mn(mn({isCustomElement:s,delimiters:a},o),l);n.render=Th(i,c)}}r.render=n.render||pi}lo(r),bo(),V0(r),wo(),es()}function gv(r){return new Proxy(r.attrs,{get(e,t){return En(r,"get","$attrs"),e[t]}})}function _v(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=gv(r))},slots:r.slots,emit:r.emit,expose:e}}function Cf(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Kp($p(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in qo)return qo[t](r)},has(e,t){return t in e||t in qo}}))}function vv(r){return Ze(r)&&"__vccOpts"in r}const xv=(r,e)=>d0(r,e,ua),Mv=Symbol(""),Sv=()=>vl(Mv),yv="3.2.47",bv="http://www.w3.org/2000/svg",Xr=typeof document<"u"?document:null,Eh=Xr&&Xr.createElement("template"),wv={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?Xr.createElementNS(bv,r):Xr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>Xr.createTextNode(r),createComment:r=>Xr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Xr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Eh.innerHTML=n?`<svg>${r}</svg>`:r;const a=Eh.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Tv(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Ev(r,e,t){const n=r.style,i=Wt(t);if(t&&!i){if(e&&!Wt(e))for(const s in e)t[s]==null&&Eu(n,s,"");for(const s in t)Eu(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Ah=/\s*!important$/;function Eu(r,e,t){if(je(t))t.forEach(n=>Eu(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=Av(r,e);Ah.test(t)?r.setProperty(yo(n),t.replace(Ah,""),"important"):r[n]=t}}const Ch=["Webkit","Moz","ms"],yc={};function Av(r,e){const t=yc[e];if(t)return t;let n=so(e);if(n!=="filter"&&n in r)return yc[e]=n;n=Up(n);for(let i=0;i<Ch.length;i++){const s=Ch[i]+n;if(s in r)return yc[e]=s}return e}const Ph="http://www.w3.org/1999/xlink";function Cv(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Ph,e.slice(6,e.length)):r.setAttributeNS(Ph,e,t);else{const s=b_(e);t==null||s&&!Cp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Pv(r,e,t,n,i,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Cp(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{r[e]=t}catch{}a&&r.removeAttribute(e)}function Lv(r,e,t,n){r.addEventListener(e,t,n)}function Rv(r,e,t,n){r.removeEventListener(e,t,n)}function Dv(r,e,t,n,i=null){const s=r._vei||(r._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Iv(e);if(n){const c=s[e]=Fv(n,i);Lv(r,a,c,l)}else o&&(Rv(r,a,o,l),s[e]=void 0)}}const Lh=/(?:Once|Passive|Capture)$/;function Iv(r){let e;if(Lh.test(r)){e={};let n;for(;n=r.match(Lh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):yo(r.slice(2)),e]}let bc=0;const Uv=Promise.resolve(),Ov=()=>bc||(Uv.then(()=>bc=0),bc=Date.now());function Fv(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;mi(Nv(n,t.value),e,5,[n])};return t.value=r,t.attached=Ov(),t}function Nv(r,e){if(je(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Rh=/^on[a-z]/,zv=(r,e,t,n,i=!1,s,o,a,l)=>{e==="class"?Tv(r,n,i):e==="style"?Ev(r,t,n):Kl(e)?ff(e)||Dv(r,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bv(r,e,n,i))?Pv(r,e,n,s,o,a,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),Cv(r,e,n,i))};function Bv(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&Rh.test(e)&&Ze(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||Rh.test(e)&&Wt(t)?!1:e in r}const kv=mn({patchProp:zv},wv);let Dh;function Gv(){return Dh||(Dh=tv(kv))}const Hv=(...r)=>{const e=Gv().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=Vv(n);if(!i)return;const s=e._component;!Ze(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Vv(r){return Wt(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pf="151",Wv=0,Ih=1,qv=2,Mm=1,Xv=2,No=3,br=0,Sn=1,Yi=2,vr=0,Zs=1,Uh=2,Oh=3,Fh=4,$v=5,zs=100,Yv=101,jv=102,Nh=103,zh=104,Kv=200,Zv=201,Jv=202,Qv=203,Sm=204,ym=205,ex=206,tx=207,nx=208,ix=209,rx=210,sx=0,ox=1,ax=2,Au=3,lx=4,cx=5,ux=6,fx=7,bm=0,hx=1,dx=2,Zi=0,px=1,mx=2,gx=3,_x=4,vx=5,wm=300,co=301,uo=302,Cu=303,Pu=304,oc=306,Lu=1e3,ci=1001,Ru=1002,fn=1003,Bh=1004,wc=1005,$n=1006,xx=1007,fa=1008,cs=1009,Mx=1010,Sx=1011,Tm=1012,yx=1013,jr=1014,Kr=1015,ha=1016,bx=1017,wx=1018,Js=1020,Tx=1021,ui=1023,Ex=1024,Ax=1025,ts=1026,fo=1027,Cx=1028,Px=1029,Lx=1030,Rx=1031,Dx=1033,Tc=33776,Ec=33777,Ac=33778,Cc=33779,kh=35840,Gh=35841,Hh=35842,Vh=35843,Ix=36196,Wh=37492,qh=37496,Xh=37808,$h=37809,Yh=37810,jh=37811,Kh=37812,Zh=37813,Jh=37814,Qh=37815,ed=37816,td=37817,nd=37818,id=37819,rd=37820,sd=37821,Pc=36492,Ux=36283,od=36284,ad=36285,ld=36286,us=3e3,mt=3001,Ox=3200,Fx=3201,Nx=0,zx=1,yi="srgb",da="srgb-linear",Em="display-p3",Lc=7680,Bx=519,cd=35044,ud="300 es",Du=1035;class To{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=Math.PI/180,Iu=180/Math.PI;function ba(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function xn(r,e,t){return Math.max(e,Math.min(t,r))}function kx(r,e){return(r%e+e)%e}function Dc(r,e,t){return(1-t)*r+t*e}function fd(r){return(r&r-1)===0&&r!==0}function Gx(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Na(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nt{constructor(){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],b=i[1],S=i[4],v=i[7],y=i[2],L=i[5],C=i[8];return s[0]=o*g+a*b+l*y,s[3]=o*m+a*S+l*L,s[6]=o*p+a*v+l*C,s[1]=c*g+u*b+f*y,s[4]=c*m+u*S+f*L,s[7]=c*p+u*v+f*C,s[2]=h*g+d*b+_*y,s[5]=h*m+d*S+_*L,s[8]=h*p+d*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,_=t*f+n*h+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ic=new nt;function Am(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Qs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Uc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Hx=new nt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Vx=new nt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Wx(r){return r.convertSRGBToLinear().applyMatrix3(Vx)}function qx(r){return r.applyMatrix3(Hx).convertLinearToSRGB()}const Xx={[da]:r=>r,[yi]:r=>r.convertSRGBToLinear(),[Em]:Wx},$x={[da]:r=>r,[yi]:r=>r.convertLinearToSRGB(),[Em]:qx},Ln={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return da},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Xx[e],i=$x[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let xs;class Cm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xs===void 0&&(xs=pa("canvas")),xs.width=e.width,xs.height=e.height;const n=xs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qs(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qs(t[n]/255)*255):t[n]=Qs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Pm{constructor(e=null){this.isSource=!0,this.uuid=ba(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Oc(i[o].image)):s.push(Oc(i[o]))}else s=Oc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Oc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Cm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yx=0;class yn extends To{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,n=ci,i=ci,s=$n,o=fa,a=ui,l=cs,c=yn.DEFAULT_ANISOTROPY,u=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yx++}),this.uuid=ba(),this.name="",this.source=new Pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lu:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Ru:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lu:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Ru:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=wm;yn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,i=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(d+1)/2,y=(p+1)/2,L=(u+h)/4,C=(f+g)/4,D=(_+m)/4;return S>v&&S>y?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=L/n,s=C/n):v>y?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=L/i,s=D/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=C/s,i=D/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(f-g)/b,this.z=(h-u)/b,this.w=Math.acos((c+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fs extends To{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new yn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Pm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Lm extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jx extends yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=fn,this.minFilter=fn,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[o+0],d=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let m=1-a;const p=l*h+c*d+u*_+f*g,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const y=Math.sqrt(S),L=Math.atan2(y,p*b);m=Math.sin(m*L)/y,a=Math.sin(a*L)/y}const v=a*b;if(l=l*m+h*v,c=c*m+d*v,u=u*m+_*v,f=f*m+g*v,m===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=y,c*=y,u*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[o],h=s[o+1],d=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-a*d,e[t+2]=c*_+u*d+a*h-l*f,e[t+3]=u*_-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),f=a(s/2),h=l(n/2),d=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,n=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,u=l*n+a*t-s*i,f=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+u*-a-f*-o,this.y=u*l+h*-o+f*-s-c*-a,this.z=f*l+h*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fc.copy(this).projectOnVector(e),this.sub(Fc)}reflect(e){return this.sub(Fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fc=new ee,hd=new wa;class Ta{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ms.copy(e.boundingBox),Ms.applyMatrix4(e.matrixWorld),this.union(Ms);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)ki.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else i.boundingBox===null&&i.computeBoundingBox(),Ms.copy(i.boundingBox),Ms.applyMatrix4(e.matrixWorld),this.union(Ms)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),za.subVectors(this.max,Po),Ss.subVectors(e.a,Po),ys.subVectors(e.b,Po),bs.subVectors(e.c,Po),rr.subVectors(ys,Ss),sr.subVectors(bs,ys),Or.subVectors(Ss,bs);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Or.z,Or.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Or.z,0,-Or.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Or.y,Or.x,0];return!Nc(t,Ss,ys,bs,za)||(t=[1,0,0,0,1,0,0,0,1],!Nc(t,Ss,ys,bs,za))?!1:(Ba.crossVectors(rr,sr),t=[Ba.x,Ba.y,Ba.z],Nc(t,Ss,ys,bs,za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ki=new ee,Ms=new Ta,Ss=new ee,ys=new ee,bs=new ee,rr=new ee,sr=new ee,Or=new ee,Po=new ee,za=new ee,Ba=new ee,Fr=new ee;function Nc(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Fr.fromArray(r,s);const a=i.x*Math.abs(Fr.x)+i.y*Math.abs(Fr.y)+i.z*Math.abs(Fr.z),l=e.dot(Fr),c=t.dot(Fr),u=n.dot(Fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Kx=new Ta,Lo=new ee,zc=new ee;class Lf{constructor(e=new ee,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const t=Lo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Lo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(zc)),this.expandByPoint(Lo.copy(e.center).sub(zc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new ee,Bc=new ee,ka=new ee,or=new ee,kc=new ee,Ga=new ee,Gc=new ee;class Zx{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bc.copy(e).add(t).multiplyScalar(.5),ka.copy(t).sub(e).normalize(),or.copy(this.origin).sub(Bc);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ka),a=or.dot(this.direction),l=-or.dot(ka),c=or.lengthSq(),u=Math.abs(1-o*o);let f,h,d,_;if(u>0)if(f=o*l-a,h=o*a-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Bc).addScaledVector(ka,h),d}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),i=Gi.dot(Gi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,i,s){kc.subVectors(t,e),Ga.subVectors(n,e),Gc.crossVectors(kc,Ga);let o=this.direction.dot(Gc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(Ga.crossVectors(or,Ga));if(l<0)return null;const c=a*this.direction.dot(kc.cross(or));if(c<0||l+c>o)return null;const u=-a*or.dot(Gc);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,u,f,h,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ws.setFromMatrixColumn(e,0).length(),s=1/ws.setFromMatrixColumn(e,1).length(),o=1/ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-a*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*a,t[4]=-o*f,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,_=a*u,g=a*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jx,e,Qx)}lookAt(e,t,n){const i=this.elements;return Rn.subVectors(e,t),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),ar.crossVectors(n,Rn),ar.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),ar.crossVectors(n,Rn)),ar.normalize(),Ha.crossVectors(Rn,ar),i[0]=ar.x,i[4]=Ha.x,i[8]=Rn.x,i[1]=ar.y,i[5]=Ha.y,i[9]=Rn.y,i[2]=ar.z,i[6]=Ha.z,i[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],b=n[3],S=n[7],v=n[11],y=n[15],L=i[0],C=i[4],D=i[8],M=i[12],T=i[1],Y=i[5],G=i[9],z=i[13],H=i[2],$=i[6],Q=i[10],X=i[14],W=i[3],le=i[7],R=i[11],ye=i[15];return s[0]=o*L+a*T+l*H+c*W,s[4]=o*C+a*Y+l*$+c*le,s[8]=o*D+a*G+l*Q+c*R,s[12]=o*M+a*z+l*X+c*ye,s[1]=u*L+f*T+h*H+d*W,s[5]=u*C+f*Y+h*$+d*le,s[9]=u*D+f*G+h*Q+d*R,s[13]=u*M+f*z+h*X+d*ye,s[2]=_*L+g*T+m*H+p*W,s[6]=_*C+g*Y+m*$+p*le,s[10]=_*D+g*G+m*Q+p*R,s[14]=_*M+g*z+m*X+p*ye,s[3]=b*L+S*T+v*H+y*W,s[7]=b*C+S*Y+v*$+y*le,s[11]=b*D+S*G+v*Q+y*R,s[15]=b*M+S*z+v*X+y*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+s*l*f-i*c*f-s*a*h+n*c*h+i*a*d-n*l*d)+g*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*u-s*l*u)+m*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+p*(-i*a*u-t*l*f+t*a*h+i*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],b=f*m*c-g*h*c+g*l*d-a*m*d-f*l*p+a*h*p,S=_*h*c-u*m*c-_*l*d+o*m*d+u*l*p-o*h*p,v=u*g*c-_*f*c+_*a*d-o*g*d-u*a*p+o*f*p,y=_*f*l-u*g*l-_*a*h+o*g*h+u*a*m-o*f*m,L=t*b+n*S+i*v+s*y;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=b*C,e[1]=(g*h*s-f*m*s-g*i*d+n*m*d+f*i*p-n*h*p)*C,e[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*C,e[3]=(f*l*s-a*h*s-f*i*c+n*h*c+a*i*d-n*l*d)*C,e[4]=S*C,e[5]=(u*m*s-_*h*s+_*i*d-t*m*d-u*i*p+t*h*p)*C,e[6]=(_*l*s-o*m*s-_*i*c+t*m*c+o*i*p-t*l*p)*C,e[7]=(o*h*s-u*l*s+u*i*c-t*h*c-o*i*d+t*l*d)*C,e[8]=v*C,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*p-t*f*p)*C,e[10]=(o*g*s-_*a*s+_*n*c-t*g*c-o*n*p+t*a*p)*C,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*C,e[12]=y*C,e[13]=(u*g*i-_*f*i+_*n*h-t*g*h-u*n*m+t*f*m)*C,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*C,e[15]=(o*f*i-u*a*i+u*n*l-t*f*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,_=s*f,g=o*u,m=o*f,p=a*f,b=l*c,S=l*u,v=l*f,y=n.x,L=n.y,C=n.z;return i[0]=(1-(g+p))*y,i[1]=(d+v)*y,i[2]=(_-S)*y,i[3]=0,i[4]=(d-v)*L,i[5]=(1-(h+p))*L,i[6]=(m+b)*L,i[7]=0,i[8]=(_+S)*C,i[9]=(m-b)*C,i[10]=(1-(h+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=ws.set(i[0],i[1],i[2]).length();const o=ws.set(i[4],i[5],i[6]).length(),a=ws.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const c=1/s,u=1/o,f=1/a;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=f,ei.elements[9]*=f,ei.elements[10]*=f,t.setFromRotationMatrix(ei),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),u=1/(o-s),f=(t+e)*l,h=(n+i)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ws=new ee,ei=new Kt,Jx=new ee(0,0,0),Qx=new ee(1,1,1),ar=new ee,Ha=new ee,Rn=new ee,dd=new Kt,pd=new wa;class ac{constructor(e=0,t=0,n=0,i=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(xn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(xn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-xn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-xn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return pd.setFromEuler(this),this.setFromQuaternion(pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ac.DEFAULT_ORDER="XYZ";class Rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eM=0;const md=new ee,Ts=new wa,Hi=new Kt,Va=new ee,Ro=new ee,tM=new ee,nM=new wa,gd=new ee(1,0,0),_d=new ee(0,1,0),vd=new ee(0,0,1),iM={type:"added"},xd={type:"removed"};class kn extends To{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ee,t=new ac,n=new wa,i=new ee(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Kt},normalMatrix:{value:new nt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,t){return Ts.setFromAxisAngle(e,t),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(gd,e)}rotateY(e){return this.rotateOnAxis(_d,e)}rotateZ(e){return this.rotateOnAxis(vd,e)}translateOnAxis(e,t){return md.copy(e).applyQuaternion(this.quaternion),this.position.add(md.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gd,e)}translateY(e){return this.translateOnAxis(_d,e)}translateZ(e){return this.translateOnAxis(vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Va.copy(e):Va.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Ro,Va,this.up):Hi.lookAt(Va,Ro,this.up),this.quaternion.setFromRotationMatrix(Hi),i&&(Hi.extractRotation(i.matrixWorld),Ts.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(iM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(xd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,tM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,nM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kn.DEFAULT_UP=new ee(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new ee,Vi=new ee,Hc=new ee,Wi=new ee,Es=new ee,As=new ee,Md=new ee,Vc=new ee,Wc=new ee,qc=new ee;let Wa=!1;class oi{constructor(e=new ee,t=new ee,n=new ee){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ti.subVectors(i,t),Vi.subVectors(n,t),Hc.subVectors(e,t);const o=ti.dot(ti),a=ti.dot(Vi),l=ti.dot(Hc),c=Vi.dot(Vi),u=Vi.dot(Hc),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Wi),Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,n,i,s,o,a,l){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),this.getInterpolation(e,t,n,i,s,o,a,l)}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Wi),l.setScalar(0),l.addScaledVector(s,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),Vi.subVectors(e,t),ti.cross(Vi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ti.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Wa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Wa=!0),oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Es.subVectors(i,n),As.subVectors(s,n),Vc.subVectors(e,n);const l=Es.dot(Vc),c=As.dot(Vc);if(l<=0&&c<=0)return t.copy(n);Wc.subVectors(e,i);const u=Es.dot(Wc),f=As.dot(Wc);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Es,o);qc.subVectors(e,s);const d=Es.dot(qc),_=As.dot(qc);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(As,a);const m=u*_-d*f;if(m<=0&&f-u>=0&&d-_>=0)return Md.subVectors(s,i),a=(f-u)/(f-u+(d-_)),t.copy(i).addScaledVector(Md,a);const p=1/(m+g+h);return o=g*p,a=h*p,t.copy(n).addScaledVector(Es,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let rM=0;class Ea extends To{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=Zs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Sm,this.blendDst=ym,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Au,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},qa={h:0,s:0,l:0};function Xc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ln.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ln.workingColorSpace){if(e=kx(e,1),t=xn(t,0,1),n=xn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Xc(o,s,e+1/3),this.g=Xc(o,s,e),this.b=Xc(o,s,e-1/3)}return Ln.toWorkingColorSpace(this,i),this}setStyle(e,t=yi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ln.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ln.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yi){const n=Dm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}copyLinearToSRGB(e){return this.r=Uc(e.r),this.g=Uc(e.g),this.b=Uc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Ln.fromWorkingColorSpace(Jt.copy(this),e),xn(Jt.r*255,0,255)<<16^xn(Jt.g*255,0,255)<<8^xn(Jt.b*255,0,255)<<0}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ln.workingColorSpace){Ln.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,i=Jt.g,s=Jt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ln.workingColorSpace){return Ln.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=yi){Ln.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,i=Jt.b;return e!==yi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(ni),ni.h+=e,ni.s+=t,ni.l+=n,this.setHSL(ni.h,ni.s,ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(qa);const n=Dc(ni.h,qa.h,t),i=Dc(ni.s,qa.s,t),s=Dc(ni.l,qa.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new gt;gt.NAMES=Dm;class lc extends Ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pt=new ee,Xa=new _t;class gi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xa.fromBufferAttribute(this,t),Xa.applyMatrix3(e),this.setXY(t,Xa.x,Xa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Im extends gi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Um extends gi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Di extends gi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sM=0;const Wn=new Kt,$c=new kn,Cs=new ee,Dn=new Ta,Do=new Ta,kt=new ee;class Pr extends To{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Am(e)?Um:Im)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Di(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ta);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new ee,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Do.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Dn.min,Do.min),Dn.expandByPoint(kt),kt.addVectors(Dn.max,Do.max),Dn.expandByPoint(kt)):(Dn.expandByPoint(Do.min),Dn.expandByPoint(Do.max))}Dn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Cs.fromBufferAttribute(e,c),kt.add(Cs)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let T=0;T<a;T++)c[T]=new ee,u[T]=new ee;const f=new ee,h=new ee,d=new ee,_=new _t,g=new _t,m=new _t,p=new ee,b=new ee;function S(T,Y,G){f.fromArray(i,T*3),h.fromArray(i,Y*3),d.fromArray(i,G*3),_.fromArray(o,T*2),g.fromArray(o,Y*2),m.fromArray(o,G*2),h.sub(f),d.sub(f),g.sub(_),m.sub(_);const z=1/(g.x*m.y-m.x*g.y);isFinite(z)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-g.y).multiplyScalar(z),b.copy(d).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(z),c[T].add(p),c[Y].add(p),c[G].add(p),u[T].add(b),u[Y].add(b),u[G].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let T=0,Y=v.length;T<Y;++T){const G=v[T],z=G.start,H=G.count;for(let $=z,Q=z+H;$<Q;$+=3)S(n[$+0],n[$+1],n[$+2])}const y=new ee,L=new ee,C=new ee,D=new ee;function M(T){C.fromArray(s,T*3),D.copy(C);const Y=c[T];y.copy(Y),y.sub(C.multiplyScalar(C.dot(Y))).normalize(),L.crossVectors(D,Y);const z=L.dot(u[T])<0?-1:1;l[T*4]=y.x,l[T*4+1]=y.y,l[T*4+2]=y.z,l[T*4+3]=z}for(let T=0,Y=v.length;T<Y;++T){const G=v[T],z=G.start,H=G.count;for(let $=z,Q=z+H;$<Q;$+=3)M(n[$+0]),M(n[$+1]),M(n[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new ee,s=new ee,o=new ee,a=new ee,l=new ee,c=new ee,u=new ee,f=new ee;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)h[_++]=c[d++]}return new gi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Sd=new Kt,Si=new Zx,$a=new Lf,yd=new ee,Ps=new ee,Ls=new ee,Rs=new ee,Yc=new ee,Ya=new ee,ja=new _t,Ka=new _t,Za=new _t,bd=new ee,wd=new ee,Td=new ee,Ja=new ee,Qa=new ee;class Li extends kn{constructor(e=new Pr,t=new lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Ya.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Yc.fromBufferAttribute(f,e),o?Ya.addScaledVector(Yc,u):Ya.addScaledVector(Yc.sub(t),u))}t.add(Ya)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(s),Si.copy(e.ray).recast(e.near),$a.containsPoint(Si.origin)===!1&&(Si.intersectSphere($a,yd)===null||Si.origin.distanceToSquared(yd)>(e.far-e.near)**2))||(Sd.copy(s).invert(),Si.copy(e.ray).applyMatrix4(Sd),n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,h=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=i[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,y=S;v<y;v+=3){const L=a.getX(v),C=a.getX(v+1),D=a.getX(v+2);o=el(this,p,e,Si,c,u,f,L,C,D),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);o=el(this,i,e,Si,c,u,f,b,S,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let _=0,g=h.length;_<g;_++){const m=h[_],p=i[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,y=S;v<y;v+=3){const L=v,C=v+1,D=v+2;o=el(this,p,e,Si,c,u,f,L,C,D),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const b=m,S=m+1,v=m+2;o=el(this,i,e,Si,c,u,f,b,S,v),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function oM(r,e,t,n,i,s,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===br,a),l===null)return null;Qa.copy(a),Qa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Qa);return c<t.near||c>t.far?null:{distance:c,point:Qa.clone(),object:r}}function el(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ps),r.getVertexPosition(l,Ls),r.getVertexPosition(c,Rs);const u=oM(r,e,t,n,Ps,Ls,Rs,Ja);if(u){i&&(ja.fromBufferAttribute(i,a),Ka.fromBufferAttribute(i,l),Za.fromBufferAttribute(i,c),u.uv=oi.getInterpolation(Ja,Ps,Ls,Rs,ja,Ka,Za,new _t)),s&&(ja.fromBufferAttribute(s,a),Ka.fromBufferAttribute(s,l),Za.fromBufferAttribute(s,c),u.uv2=oi.getInterpolation(Ja,Ps,Ls,Rs,ja,Ka,Za,new _t)),o&&(bd.fromBufferAttribute(o,a),wd.fromBufferAttribute(o,l),Td.fromBufferAttribute(o,c),u.normal=oi.getInterpolation(Ja,Ps,Ls,Rs,bd,wd,Td,new ee),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new ee,materialIndex:0};oi.getNormal(Ps,Ls,Rs,f.normal),u.face=f}return u}class Aa extends Pr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Di(c,3)),this.setAttribute("normal",new Di(u,3)),this.setAttribute("uv",new Di(f,2));function _(g,m,p,b,S,v,y,L,C,D,M){const T=v/C,Y=y/D,G=v/2,z=y/2,H=L/2,$=C+1,Q=D+1;let X=0,W=0;const le=new ee;for(let R=0;R<Q;R++){const ye=R*Y-z;for(let de=0;de<$;de++){const I=de*T-G;le[g]=I*b,le[m]=ye*S,le[p]=H,c.push(le.x,le.y,le.z),le[g]=0,le[m]=0,le[p]=L>0?1:-1,u.push(le.x,le.y,le.z),f.push(de/C),f.push(1-R/D),X+=1}}for(let R=0;R<D;R++)for(let ye=0;ye<C;ye++){const de=h+ye+$*R,I=h+ye+$*(R+1),F=h+(ye+1)+$*(R+1),ne=h+(ye+1)+$*R;l.push(de,I,ne),l.push(I,F,ne),W+=6}a.addGroup(d,W,M),d+=W,h+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function cn(r){const e={};for(let t=0;t<r.length;t++){const n=ho(r[t]);for(const i in n)e[i]=n[i]}return e}function aM(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Om(r){return r.getRenderTarget()===null&&r.outputEncoding===mt?yi:da}const lM={clone:ho,merge:cn};var cM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends Ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cM,this.fragmentShader=uM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fm extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Nn extends Fm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Iu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Iu*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Rc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Is=1;class fM extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Nn(Ds,Is,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Nn(Ds,Is,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Nn(Ds,Is,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Nn(Ds,Is,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Nn(Ds,Is,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Nn(Ds,Is,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Zi,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Nm extends yn{constructor(e,t,n,i,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:co,super(e,t,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hM extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Nm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Aa(5,5,5),s=new hs({name:"CubemapFromEquirect",uniforms:ho(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:vr});s.uniforms.tEquirect.value=t;const o=new Li(i,s),a=t.minFilter;return t.minFilter===fa&&(t.minFilter=$n),new fM(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const jc=new ee,dM=new ee,pM=new nt;class Gr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=jc.subVectors(n,t).cross(dM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(jc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pM.getNormalMatrix(e),i=this.coplanarPoint(jc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nr=new Lf,tl=new ee;class zm{constructor(e=new Gr,t=new Gr,n=new Gr,i=new Gr,s=new Gr,o=new Gr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],_=n[10],g=n[11],m=n[12],p=n[13],b=n[14],S=n[15];return t[0].setComponents(a-i,f-l,g-h,S-m).normalize(),t[1].setComponents(a+i,f+l,g+h,S+m).normalize(),t[2].setComponents(a+s,f+c,g+d,S+p).normalize(),t[3].setComponents(a-s,f-c,g-d,S-p).normalize(),t[4].setComponents(a-o,f-u,g-_,S-b).normalize(),t[5].setComponents(a+o,f+u,g+_,S+b).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){return Nr.center.set(0,0,0),Nr.radius=.7071067811865476,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(tl.x=i.normal.x>0?e.max.x:e.min.x,tl.y=i.normal.y>0?e.max.y:e.min.y,tl.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(tl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bm(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mM(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(u,d),r.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;r.bindBuffer(f,c),d.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class ma extends Pr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,f=e/a,h=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const b=p*h-o;for(let S=0;S<c;S++){const v=S*f-s;_.push(v,-b,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,v=b+c*(p+1),y=b+1+c*(p+1),L=b+1+c*p;d.push(S,v,L),d.push(v,y,L)}this.setIndex(d),this.setAttribute("position",new Di(_,3)),this.setAttribute("normal",new Di(g,3)),this.setAttribute("uv",new Di(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.width,e.height,e.widthSegments,e.heightSegments)}}var gM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_M=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,MM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,SM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM="vec3 transformed = vec3( position );",bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,TM=`#ifdef USE_IRIDESCENCE
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
#endif`,EM=`#ifdef USE_BUMPMAP
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,DM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,UM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,OM=`#define PI 3.141592653589793
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
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,NM=`vec3 transformedNormal = objectNormal;
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
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,XM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
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
}`,eS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#endif`,sS=`#if defined( USE_ENVMAP )
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
#endif`,oS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uS=`PhysicalMaterial material;
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
#endif`,fS=`struct PhysicalMaterial {
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
}`,hS=`
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
#endif`,dS=`#if defined( RE_IndirectDiffuse )
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,vS=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,MS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yS=`#if defined( USE_POINTS_UV )
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
#endif`,bS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ES=`#ifdef USE_MORPHNORMALS
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
#endif`,AS=`#ifdef USE_MORPHTARGETS
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
#endif`,CS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,US=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,FS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,HS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,XS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KS=`float getShadowMask() {
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
}`,ZS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,JS=`#ifdef USE_SKINNING
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
#endif`,QS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ey=`#ifdef USE_SKINNING
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
#endif`,ty=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ny=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ry=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sy=`#ifdef USE_TRANSMISSION
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
#endif`,oy=`#ifdef USE_TRANSMISSION
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
#endif`,ay=`#ifdef USE_UV
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
#endif`,ly=`#ifdef USE_UV
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
#endif`,cy=`#ifdef USE_UV
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
#endif`,uy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`#ifdef ENVMAP_TYPE_CUBE
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
}`,my=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_y=`#include <common>
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
}`,vy=`#if DEPTH_PACKING == 3200
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
}`,xy=`#define DISTANCE
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
}`,My=`#define DISTANCE
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
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,by=`uniform float scale;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ay=`#define LAMBERT
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
}`,Cy=`#define LAMBERT
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
}`,Py=`#define MATCAP
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
}`,Ly=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,Dy=`#define NORMAL
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
}`,Iy=`#define PHONG
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
}`,Uy=`#define PHONG
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
}`,Oy=`#define STANDARD
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
}`,Fy=`#define STANDARD
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
}`,Ny=`#define TOON
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
}`,zy=`#define TOON
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
}`,By=`uniform float size;
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
}`,ky=`uniform vec3 diffuse;
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
}`,Gy=`#include <common>
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
}`,Hy=`uniform vec3 color;
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
}`,Vy=`uniform float rotation;
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
}`,Wy=`uniform vec3 diffuse;
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
}`,Ke={alphamap_fragment:gM,alphamap_pars_fragment:_M,alphatest_fragment:vM,alphatest_pars_fragment:xM,aomap_fragment:MM,aomap_pars_fragment:SM,begin_vertex:yM,beginnormal_vertex:bM,bsdfs:wM,iridescence_fragment:TM,bumpmap_pars_fragment:EM,clipping_planes_fragment:AM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:LM,color_fragment:RM,color_pars_fragment:DM,color_pars_vertex:IM,color_vertex:UM,common:OM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:NM,displacementmap_pars_vertex:zM,displacementmap_vertex:BM,emissivemap_fragment:kM,emissivemap_pars_fragment:GM,encodings_fragment:HM,encodings_pars_fragment:VM,envmap_fragment:WM,envmap_common_pars_fragment:qM,envmap_pars_fragment:XM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:sS,envmap_vertex:YM,fog_vertex:jM,fog_pars_vertex:KM,fog_fragment:ZM,fog_pars_fragment:JM,gradientmap_pars_fragment:QM,lightmap_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:oS,lights_toon_pars_fragment:aS,lights_phong_fragment:lS,lights_phong_pars_fragment:cS,lights_physical_fragment:uS,lights_physical_pars_fragment:fS,lights_fragment_begin:hS,lights_fragment_maps:dS,lights_fragment_end:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:vS,map_fragment:xS,map_pars_fragment:MS,map_particle_fragment:SS,map_particle_pars_fragment:yS,metalnessmap_fragment:bS,metalnessmap_pars_fragment:wS,morphcolor_vertex:TS,morphnormal_vertex:ES,morphtarget_pars_vertex:AS,morphtarget_vertex:CS,normal_fragment_begin:PS,normal_fragment_maps:LS,normal_pars_fragment:RS,normal_pars_vertex:DS,normal_vertex:IS,normalmap_pars_fragment:US,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:FS,clearcoat_pars_fragment:NS,iridescence_pars_fragment:zS,output_fragment:BS,packing:kS,premultiplied_alpha_fragment:GS,project_vertex:HS,dithering_fragment:VS,dithering_pars_fragment:WS,roughnessmap_fragment:qS,roughnessmap_pars_fragment:XS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:YS,shadowmap_vertex:jS,shadowmask_pars_fragment:KS,skinbase_vertex:ZS,skinning_pars_vertex:JS,skinning_vertex:QS,skinnormal_vertex:ey,specularmap_fragment:ty,specularmap_pars_fragment:ny,tonemapping_fragment:iy,tonemapping_pars_fragment:ry,transmission_fragment:sy,transmission_pars_fragment:oy,uv_pars_fragment:ay,uv_pars_vertex:ly,uv_vertex:cy,worldpos_vertex:uy,background_vert:fy,background_frag:hy,backgroundCube_vert:dy,backgroundCube_frag:py,cube_vert:my,cube_frag:gy,depth_vert:_y,depth_frag:vy,distanceRGBA_vert:xy,distanceRGBA_frag:My,equirect_vert:Sy,equirect_frag:yy,linedashed_vert:by,linedashed_frag:wy,meshbasic_vert:Ty,meshbasic_frag:Ey,meshlambert_vert:Ay,meshlambert_frag:Cy,meshmatcap_vert:Py,meshmatcap_frag:Ly,meshnormal_vert:Ry,meshnormal_frag:Dy,meshphong_vert:Iy,meshphong_frag:Uy,meshphysical_vert:Oy,meshphysical_frag:Fy,meshtoon_vert:Ny,meshtoon_frag:zy,points_vert:By,points_frag:ky,shadow_vert:Gy,shadow_frag:Hy,sprite_vert:Vy,sprite_frag:Wy},Te={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaTest:{value:0}}},Ei={basic:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:cn([Te.points,Te.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:cn([Te.common,Te.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:cn([Te.sprite,Te.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:cn([Te.common,Te.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:cn([Te.lights,Te.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ei.physical={uniforms:cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const nl={r:0,b:0,g:0};function qy(r,e,t,n,i,s,o){const a=new gt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(m,p){let b=!1,S=p.isScene===!0?p.background:null;S&&S.isTexture&&(S=(p.backgroundBlurriness>0?t:e).get(S));const v=r.xr,y=v.getSession&&v.getSession();y&&y.environmentBlendMode==="additive"&&(S=null),S===null?g(a,l):S&&S.isColor&&(g(S,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),S&&(S.isCubeTexture||S.mapping===oc)?(u===void 0&&(u=new Li(new Aa(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:ho(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=S.encoding!==mt,(f!==S||h!==S.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=S,h=S.version,d=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Li(new ma(2,2),new hs({name:"BackgroundMaterial",uniforms:ho(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=S.encoding!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,p){m.getRGB(nl,Om(r)),n.buffers.color.setClear(nl.r,nl.g,nl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:_}}function Xy(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(H,$,Q,X,W){let le=!1;if(o){const R=g(X,Q,$);c!==R&&(c=R,d(c.object)),le=p(H,X,Q,W),le&&b(H,X,Q,W)}else{const R=$.wireframe===!0;(c.geometry!==X.id||c.program!==Q.id||c.wireframe!==R)&&(c.geometry=X.id,c.program=Q.id,c.wireframe=R,le=!0)}W!==null&&t.update(W,34963),(le||u)&&(u=!1,D(H,$,Q,X),W!==null&&r.bindBuffer(34963,t.get(W).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(H){return n.isWebGL2?r.bindVertexArray(H):s.bindVertexArrayOES(H)}function _(H){return n.isWebGL2?r.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function g(H,$,Q){const X=Q.wireframe===!0;let W=a[H.id];W===void 0&&(W={},a[H.id]=W);let le=W[$.id];le===void 0&&(le={},W[$.id]=le);let R=le[X];return R===void 0&&(R=m(h()),le[X]=R),R}function m(H){const $=[],Q=[],X=[];for(let W=0;W<i;W++)$[W]=0,Q[W]=0,X[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:Q,attributeDivisors:X,object:H,attributes:{},index:null}}function p(H,$,Q,X){const W=c.attributes,le=$.attributes;let R=0;const ye=Q.getAttributes();for(const de in ye)if(ye[de].location>=0){const F=W[de];let ne=le[de];if(ne===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(ne=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(ne=H.instanceColor)),F===void 0||F.attribute!==ne||ne&&F.data!==ne.data)return!0;R++}return c.attributesNum!==R||c.index!==X}function b(H,$,Q,X){const W={},le=$.attributes;let R=0;const ye=Q.getAttributes();for(const de in ye)if(ye[de].location>=0){let F=le[de];F===void 0&&(de==="instanceMatrix"&&H.instanceMatrix&&(F=H.instanceMatrix),de==="instanceColor"&&H.instanceColor&&(F=H.instanceColor));const ne={};ne.attribute=F,F&&F.data&&(ne.data=F.data),W[de]=ne,R++}c.attributes=W,c.attributesNum=R,c.index=X}function S(){const H=c.newAttributes;for(let $=0,Q=H.length;$<Q;$++)H[$]=0}function v(H){y(H,0)}function y(H,$){const Q=c.newAttributes,X=c.enabledAttributes,W=c.attributeDivisors;Q[H]=1,X[H]===0&&(r.enableVertexAttribArray(H),X[H]=1),W[H]!==$&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,$),W[H]=$)}function L(){const H=c.newAttributes,$=c.enabledAttributes;for(let Q=0,X=$.length;Q<X;Q++)$[Q]!==H[Q]&&(r.disableVertexAttribArray(Q),$[Q]=0)}function C(H,$,Q,X,W,le){n.isWebGL2===!0&&(Q===5124||Q===5125)?r.vertexAttribIPointer(H,$,Q,W,le):r.vertexAttribPointer(H,$,Q,X,W,le)}function D(H,$,Q,X){if(n.isWebGL2===!1&&(H.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const W=X.attributes,le=Q.getAttributes(),R=$.defaultAttributeValues;for(const ye in le){const de=le[ye];if(de.location>=0){let I=W[ye];if(I===void 0&&(ye==="instanceMatrix"&&H.instanceMatrix&&(I=H.instanceMatrix),ye==="instanceColor"&&H.instanceColor&&(I=H.instanceColor)),I!==void 0){const F=I.normalized,ne=I.itemSize,re=t.get(I);if(re===void 0)continue;const N=re.buffer,xe=re.type,Me=re.bytesPerElement;if(I.isInterleavedBufferAttribute){const ue=I.data,Se=ue.stride,E=I.offset;if(ue.isInstancedInterleavedBuffer){for(let P=0;P<de.locationSize;P++)y(de.location+P,ue.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let P=0;P<de.locationSize;P++)v(de.location+P);r.bindBuffer(34962,N);for(let P=0;P<de.locationSize;P++)C(de.location+P,ne/de.locationSize,xe,F,Se*Me,(E+ne/de.locationSize*P)*Me)}else{if(I.isInstancedBufferAttribute){for(let ue=0;ue<de.locationSize;ue++)y(de.location+ue,I.meshPerAttribute);H.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ue=0;ue<de.locationSize;ue++)v(de.location+ue);r.bindBuffer(34962,N);for(let ue=0;ue<de.locationSize;ue++)C(de.location+ue,ne/de.locationSize,xe,F,ne*Me,ne/de.locationSize*ue*Me)}}else if(R!==void 0){const F=R[ye];if(F!==void 0)switch(F.length){case 2:r.vertexAttrib2fv(de.location,F);break;case 3:r.vertexAttrib3fv(de.location,F);break;case 4:r.vertexAttrib4fv(de.location,F);break;default:r.vertexAttrib1fv(de.location,F)}}}}L()}function M(){G();for(const H in a){const $=a[H];for(const Q in $){const X=$[Q];for(const W in X)_(X[W].object),delete X[W];delete $[Q]}delete a[H]}}function T(H){if(a[H.id]===void 0)return;const $=a[H.id];for(const Q in $){const X=$[Q];for(const W in X)_(X[W].object),delete X[W];delete $[Q]}delete a[H.id]}function Y(H){for(const $ in a){const Q=a[$];if(Q[H.id]===void 0)continue;const X=Q[H.id];for(const W in X)_(X[W].object),delete X[W];delete Q[H.id]}}function G(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:G,resetDefaultState:z,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:Y,initAttributes:S,enableAttribute:v,disableUnusedAttributes:L}}function $y(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Yy(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(34930),h=r.getParameter(35660),d=r.getParameter(3379),_=r.getParameter(34076),g=r.getParameter(34921),m=r.getParameter(36347),p=r.getParameter(36348),b=r.getParameter(36349),S=h>0,v=o||e.has("OES_texture_float"),y=S&&v,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:b,vertexTextures:S,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:L}}function jy(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new Gr,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,S=b*4;let v=p.clippingState||null;l.value=v,v=u(_,h,S,d);for(let y=0;y!==S;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==g;++S,v+=4)o.copy(f[S]).applyMatrix4(b,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Ky(r){let e=new WeakMap;function t(o,a){return a===Cu?o.mapping=co:a===Pu&&(o.mapping=uo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cu||a===Pu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new hM(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Zy extends Fm{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hs=4,Ed=[.125,.215,.35,.446,.526,.582],$r=20,Kc=new Zy,Ad=new gt;let Zc=null;const Hr=(1+Math.sqrt(5))/2,Us=1/Hr,Cd=[new ee(1,1,1),new ee(-1,1,1),new ee(1,1,-1),new ee(-1,1,-1),new ee(0,Hr,Us),new ee(0,Hr,-Us),new ee(Us,0,Hr),new ee(-Us,0,Hr),new ee(Hr,Us,0),new ee(-Hr,Us,0)];class Pd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Zc=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc),e.scissorTest=!1,il(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===co||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:ha,format:ui,encoding:us,depthBuffer:!1},i=Ld(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ld(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jy(s)),this._blurMaterial=Qy(s,e,t)}return i}_compileMaterial(e){const t=new Li(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,n,i){const a=new Nn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ad),u.toneMapping=Zi,u.autoClear=!1;const d=new lc({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),_=new Li(new Aa,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Ad),g=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;il(i,b*S,p>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===co||e.mapping===uo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rd());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Li(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;il(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Kc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Cd[(i-1)%Cd.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Li(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*$r-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):$r;m>$r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$r}`);const p=[];let b=0;for(let C=0;C<$r;++C){const D=C/g,M=Math.exp(-D*D/2);p.push(M),C===0?b+=M:C<m&&(b+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=_,h.mipInt.value=S-n;const v=this._sizeLods[i],y=3*v*(i>S-Hs?i-S+Hs:0),L=4*(this._cubeSize-v);il(t,y,L,3*v,2*v),l.setRenderTarget(t),l.render(f,Kc)}}function Jy(r){const e=[],t=[],n=[];let i=r;const s=r-Hs+1+Ed.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Hs?l=Ed[o-r+Hs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,m=2,p=1,b=new Float32Array(g*_*d),S=new Float32Array(m*_*d),v=new Float32Array(p*_*d);for(let L=0;L<d;L++){const C=L%3*2/3-1,D=L>2?0:-1,M=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];b.set(M,g*_*L),S.set(h,m*_*L);const T=[L,L,L,L,L,L];v.set(T,p*_*L)}const y=new Pr;y.setAttribute("position",new gi(b,g)),y.setAttribute("uv",new gi(S,m)),y.setAttribute("faceIndex",new gi(v,p)),e.push(y),i>Hs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ld(r,e,t){const n=new fs(r,e,t);return n.texture.mapping=oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function il(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Qy(r,e,t){const n=new Float32Array($r),i=new ee(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Rd(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rf(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Dd(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Rf(){return`

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
	`}function eb(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cu||l===Pu,u=l===co||l===uo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Pd(r)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new Pd(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function tb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function nb(r,e,t,n){const i={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],34962)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const b=d.array;g=d.version;for(let S=0,v=b.length;S<v;S+=3){const y=b[S+0],L=b[S+1],C=b[S+2];h.push(y,L,L,C,C,y)}}else{const b=_.array;g=_.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const y=S+0,L=S+1,C=S+2;h.push(y,L,L,C,C,y)}}const m=new(Am(h)?Um:Im)(h,1);m.version=g;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ib(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function u(h,d){r.drawElements(s,d,a,h*l),t.update(d,s,1)}function f(h,d,_){if(_===0)return;let g,m;if(i)g=r,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,d,a,h*l,_),t.update(d,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function rb(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function sb(r,e){return r[0]-e[0]}function ob(r,e){return Math.abs(e[1])-Math.abs(r[1])}function ab(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let $=function(){z.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var d=$;m!==void 0&&m.texture.dispose();const S=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let M=0;S===!0&&(M=1),v===!0&&(M=2),y===!0&&(M=3);let T=u.attributes.position.count*M,Y=1;T>e.maxTextureSize&&(Y=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const G=new Float32Array(T*Y*4*g),z=new Lm(G,T,Y,g);z.type=Kr,z.needsUpdate=!0;const H=M*4;for(let Q=0;Q<g;Q++){const X=L[Q],W=C[Q],le=D[Q],R=T*Y*4*Q;for(let ye=0;ye<X.count;ye++){const de=ye*H;S===!0&&(o.fromBufferAttribute(X,ye),G[R+de+0]=o.x,G[R+de+1]=o.y,G[R+de+2]=o.z,G[R+de+3]=0),v===!0&&(o.fromBufferAttribute(W,ye),G[R+de+4]=o.x,G[R+de+5]=o.y,G[R+de+6]=o.z,G[R+de+7]=0),y===!0&&(o.fromBufferAttribute(le,ye),G[R+de+8]=o.x,G[R+de+9]=o.y,G[R+de+10]=o.z,G[R+de+11]=le.itemSize===4?o.w:1)}}m={count:g,texture:z,size:new _t(T,Y)},s.set(u,m),u.addEventListener("dispose",$)}let p=0;for(let S=0;S<h.length;S++)p+=h[S];const b=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(r,"morphTargetBaseInfluence",b),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const y=g[v];y[0]=v,y[1]=h[v]}g.sort(ob);for(let v=0;v<8;v++)v<_&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(sb);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const y=a[v],L=y[0],C=y[1];L!==Number.MAX_SAFE_INTEGER&&C?(m&&u.getAttribute("morphTarget"+v)!==m[L]&&u.setAttribute("morphTarget"+v,m[L]),p&&u.getAttribute("morphNormal"+v)!==p[L]&&u.setAttribute("morphNormal"+v,p[L]),i[v]=C,b+=C):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const S=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(r,"morphTargetBaseInfluence",S),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function lb(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);return i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const km=new yn,Gm=new Lm,Hm=new jx,Vm=new Nm,Id=[],Ud=[],Od=new Float32Array(16),Fd=new Float32Array(9),Nd=new Float32Array(4);function Eo(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Id[i];if(s===void 0&&(s=new Float32Array(i),Id[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function cc(r,e){let t=Ud[e];t===void 0&&(t=new Int32Array(e),Ud[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function cb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ub(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function fb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function hb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function db(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Nt(t,n))return;Nd.set(n),r.uniformMatrix2fv(this.addr,!1,Nd),zt(t,n)}}function pb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Nt(t,n))return;Fd.set(n),r.uniformMatrix3fv(this.addr,!1,Fd),zt(t,n)}}function mb(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Nt(t,n))return;Od.set(n),r.uniformMatrix4fv(this.addr,!1,Od),zt(t,n)}}function gb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function _b(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2iv(this.addr,e),zt(t,e)}}function vb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3iv(this.addr,e),zt(t,e)}}function xb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4iv(this.addr,e),zt(t,e)}}function Mb(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Sb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;r.uniform2uiv(this.addr,e),zt(t,e)}}function yb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;r.uniform3uiv(this.addr,e),zt(t,e)}}function bb(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;r.uniform4uiv(this.addr,e),zt(t,e)}}function wb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||km,i)}function Tb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Hm,i)}function Eb(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Vm,i)}function Ab(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Gm,i)}function Cb(r){switch(r){case 5126:return cb;case 35664:return ub;case 35665:return fb;case 35666:return hb;case 35674:return db;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return _b;case 35668:case 35672:return vb;case 35669:case 35673:return xb;case 5125:return Mb;case 36294:return Sb;case 36295:return yb;case 36296:return bb;case 35678:case 36198:case 36298:case 36306:case 35682:return wb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Eb;case 36289:case 36303:case 36311:case 36292:return Ab}}function Pb(r,e){r.uniform1fv(this.addr,e)}function Lb(r,e){const t=Eo(e,this.size,2);r.uniform2fv(this.addr,t)}function Rb(r,e){const t=Eo(e,this.size,3);r.uniform3fv(this.addr,t)}function Db(r,e){const t=Eo(e,this.size,4);r.uniform4fv(this.addr,t)}function Ib(r,e){const t=Eo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ub(r,e){const t=Eo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ob(r,e){const t=Eo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Fb(r,e){r.uniform1iv(this.addr,e)}function Nb(r,e){r.uniform2iv(this.addr,e)}function zb(r,e){r.uniform3iv(this.addr,e)}function Bb(r,e){r.uniform4iv(this.addr,e)}function kb(r,e){r.uniform1uiv(this.addr,e)}function Gb(r,e){r.uniform2uiv(this.addr,e)}function Hb(r,e){r.uniform3uiv(this.addr,e)}function Vb(r,e){r.uniform4uiv(this.addr,e)}function Wb(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||km,s[o])}function qb(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Hm,s[o])}function Xb(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Vm,s[o])}function $b(r,e,t){const n=this.cache,i=e.length,s=cc(t,i);Nt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Gm,s[o])}function Yb(r){switch(r){case 5126:return Pb;case 35664:return Lb;case 35665:return Rb;case 35666:return Db;case 35674:return Ib;case 35675:return Ub;case 35676:return Ob;case 5124:case 35670:return Fb;case 35667:case 35671:return Nb;case 35668:case 35672:return zb;case 35669:case 35673:return Bb;case 5125:return kb;case 36294:return Gb;case 36295:return Hb;case 36296:return Vb;case 35678:case 36198:case 36298:case 36306:case 35682:return Wb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return $b}}class jb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Cb(t.type)}}class Kb{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yb(t.type)}}class Zb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function zd(r,e){r.seq.push(e),r.map[e.id]=e}function Jb(r,e,t){const n=r.name,i=n.length;for(Jc.lastIndex=0;;){const s=Jc.exec(n),o=Jc.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){zd(t,c===void 0?new jb(a,r,e):new Kb(a,r,e));break}else{let f=t.map[a];f===void 0&&(f=new Zb(a),zd(t,f)),t=f}}}class bl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Jb(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Qb=0;function e1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function t1(r){switch(r){case us:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function kd(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+e1(r.getShaderSource(e),o)}else return i}function n1(r,e){const t=t1(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function i1(r,e){let t;switch(e){case px:t="Linear";break;case mx:t="Reinhard";break;case gx:t="OptimizedCineon";break;case _x:t="ACESFilmic";break;case vx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zo).join(`
`)}function s1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function o1(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function zo(r){return r!==""}function Gd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uu(r){return r.replace(a1,l1)}function l1(r,e){const t=Ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Uu(t)}const c1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(r){return r.replace(c1,u1)}function u1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function f1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===No&&(e="SHADOWMAP_TYPE_VSM"),e}function h1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case co:case uo:e="ENVMAP_TYPE_CUBE";break;case oc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case uo:e="ENVMAP_MODE_REFRACTION";break}return e}function p1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bm:e="ENVMAP_BLENDING_MULTIPLY";break;case hx:e="ENVMAP_BLENDING_MIX";break;case dx:e="ENVMAP_BLENDING_ADD";break}return e}function m1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function g1(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=f1(t),c=h1(t),u=d1(t),f=p1(t),h=m1(t),d=t.isWebGL2?"":r1(t),_=s1(s),g=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(zo).join(`
`),m.length>0&&(m+=`
`),p=[d,_].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(m=[Wd(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[d,Wd(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Zi?i1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,n1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),o=Uu(o),o=Gd(o,t),o=Hd(o,t),a=Uu(a),a=Gd(a,t),a=Hd(a,t),o=Vd(o),a=Vd(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+o,v=b+p+a,y=Bd(i,35633,S),L=Bd(i,35632,v);if(i.attachShader(g,y),i.attachShader(g,L),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(g).trim(),T=i.getShaderInfoLog(y).trim(),Y=i.getShaderInfoLog(L).trim();let G=!0,z=!0;if(i.getProgramParameter(g,35714)===!1)if(G=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,y,L);else{const H=kd(i,y,"vertex"),$=kd(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+M+`
`+H+`
`+$)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||Y==="")&&(z=!1);z&&(this.diagnostics={runnable:G,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(y),i.deleteShader(L);let C;this.getUniforms=function(){return C===void 0&&(C=new bl(i,g)),C};let D;return this.getAttributes=function(){return D===void 0&&(D=o1(i,g)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Qb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=L,this}let _1=0;class v1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new x1(e),t.set(e,n)),n}}class x1{constructor(e){this.id=_1++,this.code=e,this.usedTimes=0}}function M1(r,e,t,n,i,s,o){const a=new Rm,l=new v1,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===1?"uv2":"uv"}function m(M,T,Y,G,z){const H=G.fog,$=z.geometry,Q=M.isMeshStandardMaterial?G.environment:null,X=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),W=X&&X.mapping===oc?X.image.height:null,le=_[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const R=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ye=R!==void 0?R.length:0;let de=0;$.morphAttributes.position!==void 0&&(de=1),$.morphAttributes.normal!==void 0&&(de=2),$.morphAttributes.color!==void 0&&(de=3);let I,F,ne,re;if(le){const be=Ei[le];I=be.vertexShader,F=be.fragmentShader}else I=M.vertexShader,F=M.fragmentShader,l.update(M),ne=l.getVertexShaderID(M),re=l.getFragmentShaderID(M);const N=r.getRenderTarget(),xe=z.isInstancedMesh===!0,Me=!!M.map,ue=!!M.matcap,Se=!!X,E=!!M.aoMap,P=!!M.lightMap,V=!!M.bumpMap,oe=!!M.normalMap,ie=!!M.displacementMap,U=!!M.emissiveMap,me=!!M.metalnessMap,te=!!M.roughnessMap,he=M.clearcoat>0,ce=M.iridescence>0,w=M.sheen>0,x=M.transmission>0,B=he&&!!M.clearcoatMap,K=he&&!!M.clearcoatNormalMap,j=he&&!!M.clearcoatRoughnessMap,fe=ce&&!!M.iridescenceMap,_e=ce&&!!M.iridescenceThicknessMap,ve=w&&!!M.sheenColorMap,Z=w&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Ne=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Ce=x&&!!M.transmissionMap,we=x&&!!M.thicknessMap,Ge=!!M.gradientMap,Le=!!M.alphaMap,lt=M.alphaTest>0,O=!!M.extensions,se=!!$.attributes.uv2;return{isWebGL2:u,shaderID:le,shaderName:M.type,vertexShader:I,fragmentShader:F,defines:M.defines,customVertexShaderID:ne,customFragmentShaderID:re,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:xe,instancingColor:xe&&z.instanceColor!==null,supportsVertexTextures:h,outputEncoding:N===null?r.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:us,map:Me,matcap:ue,envMap:Se,envMapMode:Se&&X.mapping,envMapCubeUVHeight:W,aoMap:E,lightMap:P,bumpMap:V,normalMap:oe,displacementMap:h&&ie,emissiveMap:U,normalMapObjectSpace:oe&&M.normalMapType===zx,normalMapTangentSpace:oe&&M.normalMapType===Nx,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&M.map.encoding===mt,metalnessMap:me,roughnessMap:te,clearcoat:he,clearcoatMap:B,clearcoatNormalMap:K,clearcoatRoughnessMap:j,iridescence:ce,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:w,sheenColorMap:ve,sheenRoughnessMap:Z,specularMap:Ae,specularColorMap:Ne,specularIntensityMap:Ue,transmission:x,transmissionMap:Ce,thicknessMap:we,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===Zs,alphaMap:Le,alphaTest:lt,combine:M.combine,mapUv:Me&&g(M.map.channel),aoMapUv:E&&g(M.aoMap.channel),lightMapUv:P&&g(M.lightMap.channel),bumpMapUv:V&&g(M.bumpMap.channel),normalMapUv:oe&&g(M.normalMap.channel),displacementMapUv:ie&&g(M.displacementMap.channel),emissiveMapUv:U&&g(M.emissiveMap.channel),metalnessMapUv:me&&g(M.metalnessMap.channel),roughnessMapUv:te&&g(M.roughnessMap.channel),clearcoatMapUv:B&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:K&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Z&&g(M.sheenRoughnessMap.channel),specularMapUv:Ae&&g(M.specularMap.channel),specularColorMapUv:Ne&&g(M.specularColorMap.channel),specularIntensityMapUv:Ue&&g(M.specularIntensityMap.channel),transmissionMapUv:Ce&&g(M.transmissionMap.channel),thicknessMapUv:we&&g(M.thicknessMap.channel),alphaMapUv:Le&&g(M.alphaMap.channel),vertexTangents:oe&&!!$.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,vertexUvs2:se,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Me||Le),fog:!!H,useFog:M.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:de,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&Y.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:Zi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yi,flipSided:M.side===Sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:O&&M.extensions.derivatives===!0,extensionFragDepth:O&&M.extensions.fragDepth===!0,extensionDrawBuffers:O&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:O&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Y in M.defines)T.push(Y),T.push(M.defines[Y]);return M.isRawShaderMaterial===!1&&(b(T,M),S(T,M),T.push(r.outputEncoding)),T.push(M.customProgramCacheKey),T.join()}function b(M,T){M.push(T.precision),M.push(T.outputEncoding),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function S(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUvs2&&a.enable(13),T.vertexTangents&&a.enable(14),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.decodeVideoTexture&&a.enable(17),T.opaque&&a.enable(18),T.pointsUvs&&a.enable(19),M.push(a.mask)}function v(M){const T=_[M.type];let Y;if(T){const G=Ei[T];Y=lM.clone(G.uniforms)}else Y=M.uniforms;return Y}function y(M,T){let Y;for(let G=0,z=c.length;G<z;G++){const H=c[G];if(H.cacheKey===T){Y=H,++Y.usedTimes;break}}return Y===void 0&&(Y=new g1(r,T,M,s),c.push(Y)),Y}function L(M){if(--M.usedTimes===0){const T=c.indexOf(M);c[T]=c[c.length-1],c.pop(),M.destroy()}}function C(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:y,releaseProgram:L,releaseShaderCache:C,programs:c,dispose:D}}function S1(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function y1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function qd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(f,h,d,_,g,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=g,p.group=m),e++,p}function a(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(f,h,d,_,g,m){const p=o(f,h,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||y1),n.length>1&&n.sort(h||qd),i.length>1&&i.sort(h||qd)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function b1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Xd,r.set(n,[o])):i>=s.length?(o=new Xd,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function w1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new gt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return r[e.id]=t,t}}}function T1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let E1=0;function A1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function C1(r,e){const t=new w1,n=T1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new ee);const s=new ee,o=new Kt,a=new Kt;function l(u,f){let h=0,d=0,_=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let g=0,m=0,p=0,b=0,S=0,v=0,y=0,L=0,C=0,D=0;u.sort(A1);const M=f===!0?Math.PI:1;for(let Y=0,G=u.length;Y<G;Y++){const z=u[Y],H=z.color,$=z.intensity,Q=z.distance,X=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=H.r*$*M,d+=H.g*$*M,_+=H.b*$*M;else if(z.isLightProbe)for(let W=0;W<9;W++)i.probe[W].addScaledVector(z.sh.coefficients[W],$);else if(z.isDirectionalLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*M),z.castShadow){const le=z.shadow,R=n.get(z);R.shadowBias=le.bias,R.shadowNormalBias=le.normalBias,R.shadowRadius=le.radius,R.shadowMapSize=le.mapSize,i.directionalShadow[g]=R,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=z.shadow.matrix,v++}i.directional[g]=W,g++}else if(z.isSpotLight){const W=t.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(H).multiplyScalar($*M),W.distance=Q,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,i.spot[p]=W;const le=z.shadow;if(z.map&&(i.spotLightMap[C]=z.map,C++,le.updateMatrices(z),z.castShadow&&D++),i.spotLightMatrix[p]=le.matrix,z.castShadow){const R=n.get(z);R.shadowBias=le.bias,R.shadowNormalBias=le.normalBias,R.shadowRadius=le.radius,R.shadowMapSize=le.mapSize,i.spotShadow[p]=R,i.spotShadowMap[p]=X,L++}p++}else if(z.isRectAreaLight){const W=t.get(z);W.color.copy(H).multiplyScalar($),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),i.rectArea[b]=W,b++}else if(z.isPointLight){const W=t.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity*M),W.distance=z.distance,W.decay=z.decay,z.castShadow){const le=z.shadow,R=n.get(z);R.shadowBias=le.bias,R.shadowNormalBias=le.normalBias,R.shadowRadius=le.radius,R.shadowMapSize=le.mapSize,R.shadowCameraNear=le.camera.near,R.shadowCameraFar=le.camera.far,i.pointShadow[m]=R,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=z.shadow.matrix,y++}i.point[m]=W,m++}else if(z.isHemisphereLight){const W=t.get(z);W.skyColor.copy(z.color).multiplyScalar($*M),W.groundColor.copy(z.groundColor).multiplyScalar($*M),i.hemi[S]=W,S++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==b||T.hemiLength!==S||T.numDirectionalShadows!==v||T.numPointShadows!==y||T.numSpotShadows!==L||T.numSpotMaps!==C)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=b,i.point.length=m,i.hemi.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=L+C-D,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=D,T.directionalLength=g,T.pointLength=m,T.spotLength=p,T.rectAreaLength=b,T.hemiLength=S,T.numDirectionalShadows=v,T.numPointShadows=y,T.numSpotShadows=L,T.numSpotMaps=C,i.version=E1++)}function c(u,f){let h=0,d=0,_=0,g=0,m=0;const p=f.matrixWorldInverse;for(let b=0,S=u.length;b<S;b++){const v=u[b];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),h++}else if(v.isSpotLight){const y=i.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),a.identity(),o.copy(v.matrixWorld),o.premultiply(p),a.extractRotation(o),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const y=i.hemi[m];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function $d(r,e){const t=new C1(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function P1(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new $d(r,e),t.set(s,[l])):o>=a.length?(l=new $d(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class L1 extends Ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class R1 extends Ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const D1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,I1=`uniform sampler2D shadow_pass;
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
}`;function U1(r,e,t){let n=new zm;const i=new _t,s=new _t,o=new Yt,a=new L1({depthPacking:Fx}),l=new R1,c={},u=t.maxTextureSize,f={[br]:Sn,[Sn]:br,[Yi]:Yi},h=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:D1,fragmentShader:I1}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new Pr;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Li(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mm,this.render=function(v,y,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const C=r.getRenderTarget(),D=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),T=r.state;T.setBlending(vr),T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);for(let Y=0,G=v.length;Y<G;Y++){const z=v[Y],H=z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const $=H.getFrameExtents();if(i.multiply($),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/$.x),i.x=s.x*$.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/$.y),i.y=s.y*$.y,H.mapSize.y=s.y)),H.map===null){const X=this.type!==No?{minFilter:fn,magFilter:fn}:{};H.map=new fs(i.x,i.y,X),H.map.texture.name=z.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const Q=H.getViewportCount();for(let X=0;X<Q;X++){const W=H.getViewport(X);o.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),T.viewport(o),H.updateMatrices(z,X),n=H.getFrustum(),S(y,L,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===No&&p(H,L),H.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(C,D,M)};function p(v,y){const L=e.update(g);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new fs(i.x,i.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(y,null,L,h,g,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(y,null,L,d,g,null)}function b(v,y,L,C){let D=null;const M=L.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(M!==void 0)D=M;else if(D=L.isPointLight===!0?l:a,r.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const T=D.uuid,Y=y.uuid;let G=c[T];G===void 0&&(G={},c[T]=G);let z=G[Y];z===void 0&&(z=D.clone(),G[Y]=z),D=z}if(D.visible=y.visible,D.wireframe=y.wireframe,C===No?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:f[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.map=y.map,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,L.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const T=r.properties.get(D);T.light=L}return D}function S(v,y,L,C,D){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&D===No)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,v.matrixWorld);const Y=e.update(v),G=v.material;if(Array.isArray(G)){const z=Y.groups;for(let H=0,$=z.length;H<$;H++){const Q=z[H],X=G[Q.materialIndex];if(X&&X.visible){const W=b(v,X,C,D);r.renderBufferDirect(L,null,Y,W,v,Q)}}}else if(G.visible){const z=b(v,G,C,D);r.renderBufferDirect(L,null,Y,z,v,null)}}const T=v.children;for(let Y=0,G=T.length;Y<G;Y++)S(T[Y],y,L,C,D)}}function O1(r,e,t){const n=t.isWebGL2;function i(){let O=!1;const se=new Yt;let pe=null;const be=new Yt(0,0,0,0);return{setMask:function(Oe){pe!==Oe&&!O&&(r.colorMask(Oe,Oe,Oe,Oe),pe=Oe)},setLocked:function(Oe){O=Oe},setClear:function(Oe,ot,rt,yt,Ve){Ve===!0&&(Oe*=yt,ot*=yt,rt*=yt),se.set(Oe,ot,rt,yt),be.equals(se)===!1&&(r.clearColor(Oe,ot,rt,yt),be.copy(se))},reset:function(){O=!1,pe=null,be.set(-1,0,0,0)}}}function s(){let O=!1,se=null,pe=null,be=null;return{setTest:function(Oe){Oe?N(2929):xe(2929)},setMask:function(Oe){se!==Oe&&!O&&(r.depthMask(Oe),se=Oe)},setFunc:function(Oe){if(pe!==Oe){switch(Oe){case sx:r.depthFunc(512);break;case ox:r.depthFunc(519);break;case ax:r.depthFunc(513);break;case Au:r.depthFunc(515);break;case lx:r.depthFunc(514);break;case cx:r.depthFunc(518);break;case ux:r.depthFunc(516);break;case fx:r.depthFunc(517);break;default:r.depthFunc(515)}pe=Oe}},setLocked:function(Oe){O=Oe},setClear:function(Oe){be!==Oe&&(r.clearDepth(Oe),be=Oe)},reset:function(){O=!1,se=null,pe=null,be=null}}}function o(){let O=!1,se=null,pe=null,be=null,Oe=null,ot=null,rt=null,yt=null,Ve=null;return{setTest:function(Pe){O||(Pe?N(2960):xe(2960))},setMask:function(Pe){se!==Pe&&!O&&(r.stencilMask(Pe),se=Pe)},setFunc:function(Pe,ge,Fe){(pe!==Pe||be!==ge||Oe!==Fe)&&(r.stencilFunc(Pe,ge,Fe),pe=Pe,be=ge,Oe=Fe)},setOp:function(Pe,ge,Fe){(ot!==Pe||rt!==ge||yt!==Fe)&&(r.stencilOp(Pe,ge,Fe),ot=Pe,rt=ge,yt=Fe)},setLocked:function(Pe){O=Pe},setClear:function(Pe){Ve!==Pe&&(r.clearStencil(Pe),Ve=Pe)},reset:function(){O=!1,se=null,pe=null,be=null,Oe=null,ot=null,rt=null,yt=null,Ve=null}}}const a=new i,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],m=null,p=!1,b=null,S=null,v=null,y=null,L=null,C=null,D=null,M=!1,T=null,Y=null,G=null,z=null,H=null;const $=r.getParameter(35661);let Q=!1,X=0;const W=r.getParameter(7938);W.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(W)[1]),Q=X>=1):W.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Q=X>=2);let le=null,R={};const ye=r.getParameter(3088),de=r.getParameter(2978),I=new Yt().fromArray(ye),F=new Yt().fromArray(de);function ne(O,se,pe){const be=new Uint8Array(4),Oe=r.createTexture();r.bindTexture(O,Oe),r.texParameteri(O,10241,9728),r.texParameteri(O,10240,9728);for(let ot=0;ot<pe;ot++)r.texImage2D(se+ot,0,6408,1,1,0,6408,5121,be);return Oe}const re={};re[3553]=ne(3553,3553,1),re[34067]=ne(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),N(2929),l.setFunc(Au),ie(!1),U(Ih),N(2884),V(vr);function N(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function xe(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Me(O,se){return d[O]!==se?(r.bindFramebuffer(O,se),d[O]=se,n&&(O===36009&&(d[36160]=se),O===36160&&(d[36009]=se)),!0):!1}function ue(O,se){let pe=g,be=!1;if(O)if(pe=_.get(se),pe===void 0&&(pe=[],_.set(se,pe)),O.isWebGLMultipleRenderTargets){const Oe=O.texture;if(pe.length!==Oe.length||pe[0]!==36064){for(let ot=0,rt=Oe.length;ot<rt;ot++)pe[ot]=36064+ot;pe.length=Oe.length,be=!0}}else pe[0]!==36064&&(pe[0]=36064,be=!0);else pe[0]!==1029&&(pe[0]=1029,be=!0);be&&(t.isWebGL2?r.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function Se(O){return m!==O?(r.useProgram(O),m=O,!0):!1}const E={[zs]:32774,[Yv]:32778,[jv]:32779};if(n)E[Nh]=32775,E[zh]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(E[Nh]=O.MIN_EXT,E[zh]=O.MAX_EXT)}const P={[Kv]:0,[Zv]:1,[Jv]:768,[Sm]:770,[rx]:776,[nx]:774,[ex]:772,[Qv]:769,[ym]:771,[ix]:775,[tx]:773};function V(O,se,pe,be,Oe,ot,rt,yt){if(O===vr){p===!0&&(xe(3042),p=!1);return}if(p===!1&&(N(3042),p=!0),O!==$v){if(O!==b||yt!==M){if((S!==zs||L!==zs)&&(r.blendEquation(32774),S=zs,L=zs),yt)switch(O){case Zs:r.blendFuncSeparate(1,771,1,771);break;case Uh:r.blendFunc(1,1);break;case Oh:r.blendFuncSeparate(0,769,0,1);break;case Fh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Zs:r.blendFuncSeparate(770,771,1,771);break;case Uh:r.blendFunc(770,1);break;case Oh:r.blendFuncSeparate(0,769,0,1);break;case Fh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,y=null,C=null,D=null,b=O,M=yt}return}Oe=Oe||se,ot=ot||pe,rt=rt||be,(se!==S||Oe!==L)&&(r.blendEquationSeparate(E[se],E[Oe]),S=se,L=Oe),(pe!==v||be!==y||ot!==C||rt!==D)&&(r.blendFuncSeparate(P[pe],P[be],P[ot],P[rt]),v=pe,y=be,C=ot,D=rt),b=O,M=!1}function oe(O,se){O.side===Yi?xe(2884):N(2884);let pe=O.side===Sn;se&&(pe=!pe),ie(pe),O.blending===Zs&&O.transparent===!1?V(vr):V(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const be=O.stencilWrite;c.setTest(be),be&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(32926):xe(32926)}function ie(O){T!==O&&(O?r.frontFace(2304):r.frontFace(2305),T=O)}function U(O){O!==Wv?(N(2884),O!==Y&&(O===Ih?r.cullFace(1029):O===qv?r.cullFace(1028):r.cullFace(1032))):xe(2884),Y=O}function me(O){O!==G&&(Q&&r.lineWidth(O),G=O)}function te(O,se,pe){O?(N(32823),(z!==se||H!==pe)&&(r.polygonOffset(se,pe),z=se,H=pe)):xe(32823)}function he(O){O?N(3089):xe(3089)}function ce(O){O===void 0&&(O=33984+$-1),le!==O&&(r.activeTexture(O),le=O)}function w(O,se,pe){pe===void 0&&(le===null?pe=33984+$-1:pe=le);let be=R[pe];be===void 0&&(be={type:void 0,texture:void 0},R[pe]=be),(be.type!==O||be.texture!==se)&&(le!==pe&&(r.activeTexture(pe),le=pe),r.bindTexture(O,se||re[O]),be.type=O,be.texture=se)}function x(){const O=R[le];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function B(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ne(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ue(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(O){I.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),I.copy(O))}function we(O){F.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function Ge(O,se){let pe=f.get(se);pe===void 0&&(pe=new WeakMap,f.set(se,pe));let be=pe.get(O);be===void 0&&(be=r.getUniformBlockIndex(se,O.name),pe.set(O,be))}function Le(O,se){const be=f.get(se).get(O);u.get(se)!==be&&(r.uniformBlockBinding(se,be,O.__bindingPointIndex),u.set(se,be))}function lt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},le=null,R={},d={},_=new WeakMap,g=[],m=null,p=!1,b=null,S=null,v=null,y=null,L=null,C=null,D=null,M=!1,T=null,Y=null,G=null,z=null,H=null,I.set(0,0,r.canvas.width,r.canvas.height),F.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:N,disable:xe,bindFramebuffer:Me,drawBuffers:ue,useProgram:Se,setBlending:V,setMaterial:oe,setFlipSided:ie,setCullFace:U,setLineWidth:me,setPolygonOffset:te,setScissorTest:he,activeTexture:ce,bindTexture:w,unbindTexture:x,compressedTexImage2D:B,compressedTexImage3D:K,texImage2D:Ne,texImage3D:Ue,updateUBOMapping:Ge,uniformBlockBinding:Le,texStorage2D:Z,texStorage3D:Ae,texSubImage2D:j,texSubImage3D:fe,compressedTexSubImage2D:_e,compressedTexSubImage3D:ve,scissor:Ce,viewport:we,reset:lt}}function F1(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,x){return p?new OffscreenCanvas(w,x):pa("canvas")}function S(w,x,B,K){let j=1;if((w.width>K||w.height>K)&&(j=K/Math.max(w.width,w.height)),j<1||x===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const fe=x?Gx:Math.floor,_e=fe(j*w.width),ve=fe(j*w.height);g===void 0&&(g=b(_e,ve));const Z=B?b(_e,ve):g;return Z.width=_e,Z.height=ve,Z.getContext("2d").drawImage(w,0,0,_e,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+ve+")."),Z}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function v(w){return fd(w.width)&&fd(w.height)}function y(w){return a?!1:w.wrapS!==ci||w.wrapT!==ci||w.minFilter!==fn&&w.minFilter!==$n}function L(w,x){return w.generateMipmaps&&x&&w.minFilter!==fn&&w.minFilter!==$n}function C(w){r.generateMipmap(w)}function D(w,x,B,K,j=!1){if(a===!1)return x;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let fe=x;return x===6403&&(B===5126&&(fe=33326),B===5131&&(fe=33325),B===5121&&(fe=33321)),x===33319&&(B===5126&&(fe=33328),B===5131&&(fe=33327),B===5121&&(fe=33323)),x===6408&&(B===5126&&(fe=34836),B===5131&&(fe=34842),B===5121&&(fe=K===mt&&j===!1?35907:32856),B===32819&&(fe=32854),B===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function M(w,x,B){return L(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==fn&&w.minFilter!==$n?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function T(w){return w===fn||w===Bh||w===wc?9728:9729}function Y(w){const x=w.target;x.removeEventListener("dispose",Y),z(x),x.isVideoTexture&&_.delete(x)}function G(w){const x=w.target;x.removeEventListener("dispose",G),$(x)}function z(w){const x=n.get(w);if(x.__webglInit===void 0)return;const B=w.source,K=m.get(B);if(K){const j=K[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(w),Object.keys(K).length===0&&m.delete(B)}n.remove(w)}function H(w){const x=n.get(w);r.deleteTexture(x.__webglTexture);const B=w.source,K=m.get(B);delete K[x.__cacheKey],o.memory.textures--}function $(w){const x=w.texture,B=n.get(w),K=n.get(x);if(K.__webglTexture!==void 0&&(r.deleteTexture(K.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++)r.deleteFramebuffer(B.__webglFramebuffer[j]),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[j]);else{if(r.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let j=0;j<B.__webglColorRenderbuffer.length;j++)B.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[j]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let j=0,fe=x.length;j<fe;j++){const _e=n.get(x[j]);_e.__webglTexture&&(r.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(x[j])}n.remove(x),n.remove(w)}let Q=0;function X(){Q=0}function W(){const w=Q;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Q+=1,w}function le(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.encoding),x.join()}function R(w,x){const B=n.get(w);if(w.isVideoTexture&&he(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,w,x);return}}t.bindTexture(3553,B.__webglTexture,33984+x)}function ye(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,x);return}t.bindTexture(35866,B.__webglTexture,33984+x)}function de(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){xe(B,w,x);return}t.bindTexture(32879,B.__webglTexture,33984+x)}function I(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){Me(B,w,x);return}t.bindTexture(34067,B.__webglTexture,33984+x)}const F={[Lu]:10497,[ci]:33071,[Ru]:33648},ne={[fn]:9728,[Bh]:9984,[wc]:9986,[$n]:9729,[xx]:9985,[fa]:9987};function re(w,x,B){if(B?(r.texParameteri(w,10242,F[x.wrapS]),r.texParameteri(w,10243,F[x.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,F[x.wrapR]),r.texParameteri(w,10240,ne[x.magFilter]),r.texParameteri(w,10241,ne[x.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(x.wrapS!==ci||x.wrapT!==ci)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,T(x.magFilter)),r.texParameteri(w,10241,T(x.minFilter)),x.minFilter!==fn&&x.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const K=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===fn||x.minFilter!==wc&&x.minFilter!==fa||x.type===Kr&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===ha&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(r.texParameterf(w,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function N(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",Y));const K=x.source;let j=m.get(K);j===void 0&&(j={},m.set(K,j));const fe=le(x);if(fe!==w.__cacheKey){j[fe]===void 0&&(j[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),j[fe].usedTimes++;const _e=j[w.__cacheKey];_e!==void 0&&(j[w.__cacheKey].usedTimes--,_e.usedTimes===0&&H(x)),w.__cacheKey=fe,w.__webglTexture=j[fe].texture}return B}function xe(w,x,B){let K=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=35866),x.isData3DTexture&&(K=32879);const j=N(w,x),fe=x.source;t.bindTexture(K,w.__webglTexture,33984+B);const _e=n.get(fe);if(fe.version!==_e.__version||j===!0){t.activeTexture(33984+B),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const ve=y(x)&&v(x.image)===!1;let Z=S(x.image,ve,!1,u);Z=ce(x,Z);const Ae=v(Z)||a,Ne=s.convert(x.format,x.encoding);let Ue=s.convert(x.type),Ce=D(x.internalFormat,Ne,Ue,x.encoding,x.isVideoTexture);re(K,x,Ae);let we;const Ge=x.mipmaps,Le=a&&x.isVideoTexture!==!0,lt=_e.__version===void 0||j===!0,O=M(x,Z,Ae);if(x.isDepthTexture)Ce=6402,a?x.type===Kr?Ce=36012:x.type===jr?Ce=33190:x.type===Js?Ce=35056:Ce=33189:x.type===Kr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ts&&Ce===6402&&x.type!==Tm&&x.type!==jr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=jr,Ue=s.convert(x.type)),x.format===fo&&Ce===6402&&(Ce=34041,x.type!==Js&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Js,Ue=s.convert(x.type))),lt&&(Le?t.texStorage2D(3553,1,Ce,Z.width,Z.height):t.texImage2D(3553,0,Ce,Z.width,Z.height,0,Ne,Ue,null));else if(x.isDataTexture)if(Ge.length>0&&Ae){Le&&lt&&t.texStorage2D(3553,O,Ce,Ge[0].width,Ge[0].height);for(let se=0,pe=Ge.length;se<pe;se++)we=Ge[se],Le?t.texSubImage2D(3553,se,0,0,we.width,we.height,Ne,Ue,we.data):t.texImage2D(3553,se,Ce,we.width,we.height,0,Ne,Ue,we.data);x.generateMipmaps=!1}else Le?(lt&&t.texStorage2D(3553,O,Ce,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,Ne,Ue,Z.data)):t.texImage2D(3553,0,Ce,Z.width,Z.height,0,Ne,Ue,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Le&&lt&&t.texStorage3D(35866,O,Ce,Ge[0].width,Ge[0].height,Z.depth);for(let se=0,pe=Ge.length;se<pe;se++)we=Ge[se],x.format!==ui?Ne!==null?Le?t.compressedTexSubImage3D(35866,se,0,0,0,we.width,we.height,Z.depth,Ne,we.data,0,0):t.compressedTexImage3D(35866,se,Ce,we.width,we.height,Z.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,se,0,0,0,we.width,we.height,Z.depth,Ne,Ue,we.data):t.texImage3D(35866,se,Ce,we.width,we.height,Z.depth,0,Ne,Ue,we.data)}else{Le&&lt&&t.texStorage2D(3553,O,Ce,Ge[0].width,Ge[0].height);for(let se=0,pe=Ge.length;se<pe;se++)we=Ge[se],x.format!==ui?Ne!==null?Le?t.compressedTexSubImage2D(3553,se,0,0,we.width,we.height,Ne,we.data):t.compressedTexImage2D(3553,se,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,se,0,0,we.width,we.height,Ne,Ue,we.data):t.texImage2D(3553,se,Ce,we.width,we.height,0,Ne,Ue,we.data)}else if(x.isDataArrayTexture)Le?(lt&&t.texStorage3D(35866,O,Ce,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,Ne,Ue,Z.data)):t.texImage3D(35866,0,Ce,Z.width,Z.height,Z.depth,0,Ne,Ue,Z.data);else if(x.isData3DTexture)Le?(lt&&t.texStorage3D(32879,O,Ce,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,Ne,Ue,Z.data)):t.texImage3D(32879,0,Ce,Z.width,Z.height,Z.depth,0,Ne,Ue,Z.data);else if(x.isFramebufferTexture){if(lt)if(Le)t.texStorage2D(3553,O,Ce,Z.width,Z.height);else{let se=Z.width,pe=Z.height;for(let be=0;be<O;be++)t.texImage2D(3553,be,Ce,se,pe,0,Ne,Ue,null),se>>=1,pe>>=1}}else if(Ge.length>0&&Ae){Le&&lt&&t.texStorage2D(3553,O,Ce,Ge[0].width,Ge[0].height);for(let se=0,pe=Ge.length;se<pe;se++)we=Ge[se],Le?t.texSubImage2D(3553,se,0,0,Ne,Ue,we):t.texImage2D(3553,se,Ce,Ne,Ue,we);x.generateMipmaps=!1}else Le?(lt&&t.texStorage2D(3553,O,Ce,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Ne,Ue,Z)):t.texImage2D(3553,0,Ce,Ne,Ue,Z);L(x,Ae)&&C(K),_e.__version=fe.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Me(w,x,B){if(x.image.length!==6)return;const K=N(w,x),j=x.source;t.bindTexture(34067,w.__webglTexture,33984+B);const fe=n.get(j);if(j.version!==fe.__version||K===!0){t.activeTexture(33984+B),r.pixelStorei(37440,x.flipY),r.pixelStorei(37441,x.premultiplyAlpha),r.pixelStorei(3317,x.unpackAlignment),r.pixelStorei(37443,0);const _e=x.isCompressedTexture||x.image[0].isCompressedTexture,ve=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let se=0;se<6;se++)!_e&&!ve?Z[se]=S(x.image[se],!1,!0,c):Z[se]=ve?x.image[se].image:x.image[se],Z[se]=ce(x,Z[se]);const Ae=Z[0],Ne=v(Ae)||a,Ue=s.convert(x.format,x.encoding),Ce=s.convert(x.type),we=D(x.internalFormat,Ue,Ce,x.encoding),Ge=a&&x.isVideoTexture!==!0,Le=fe.__version===void 0||K===!0;let lt=M(x,Ae,Ne);re(34067,x,Ne);let O;if(_e){Ge&&Le&&t.texStorage2D(34067,lt,we,Ae.width,Ae.height);for(let se=0;se<6;se++){O=Z[se].mipmaps;for(let pe=0;pe<O.length;pe++){const be=O[pe];x.format!==ui?Ue!==null?Ge?t.compressedTexSubImage2D(34069+se,pe,0,0,be.width,be.height,Ue,be.data):t.compressedTexImage2D(34069+se,pe,we,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+se,pe,0,0,be.width,be.height,Ue,Ce,be.data):t.texImage2D(34069+se,pe,we,be.width,be.height,0,Ue,Ce,be.data)}}}else{O=x.mipmaps,Ge&&Le&&(O.length>0&&lt++,t.texStorage2D(34067,lt,we,Z[0].width,Z[0].height));for(let se=0;se<6;se++)if(ve){Ge?t.texSubImage2D(34069+se,0,0,0,Z[se].width,Z[se].height,Ue,Ce,Z[se].data):t.texImage2D(34069+se,0,we,Z[se].width,Z[se].height,0,Ue,Ce,Z[se].data);for(let pe=0;pe<O.length;pe++){const Oe=O[pe].image[se].image;Ge?t.texSubImage2D(34069+se,pe+1,0,0,Oe.width,Oe.height,Ue,Ce,Oe.data):t.texImage2D(34069+se,pe+1,we,Oe.width,Oe.height,0,Ue,Ce,Oe.data)}}else{Ge?t.texSubImage2D(34069+se,0,0,0,Ue,Ce,Z[se]):t.texImage2D(34069+se,0,we,Ue,Ce,Z[se]);for(let pe=0;pe<O.length;pe++){const be=O[pe];Ge?t.texSubImage2D(34069+se,pe+1,0,0,Ue,Ce,be.image[se]):t.texImage2D(34069+se,pe+1,we,Ue,Ce,be.image[se])}}}L(x,Ne)&&C(34067),fe.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ue(w,x,B,K,j){const fe=s.convert(B.format,B.encoding),_e=s.convert(B.type),ve=D(B.internalFormat,fe,_e,B.encoding);n.get(x).__hasExternalTextures||(j===32879||j===35866?t.texImage3D(j,0,ve,x.width,x.height,x.depth,0,fe,_e,null):t.texImage2D(j,0,ve,x.width,x.height,0,fe,_e,null)),t.bindFramebuffer(36160,w),te(x)?h.framebufferTexture2DMultisampleEXT(36160,K,j,n.get(B).__webglTexture,0,me(x)):(j===3553||j>=34069&&j<=34074)&&r.framebufferTexture2D(36160,K,j,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(w,x,B){if(r.bindRenderbuffer(36161,w),x.depthBuffer&&!x.stencilBuffer){let K=33189;if(B||te(x)){const j=x.depthTexture;j&&j.isDepthTexture&&(j.type===Kr?K=36012:j.type===jr&&(K=33190));const fe=me(x);te(x)?h.renderbufferStorageMultisampleEXT(36161,fe,K,x.width,x.height):r.renderbufferStorageMultisample(36161,fe,K,x.width,x.height)}else r.renderbufferStorage(36161,K,x.width,x.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(x.depthBuffer&&x.stencilBuffer){const K=me(x);B&&te(x)===!1?r.renderbufferStorageMultisample(36161,K,35056,x.width,x.height):te(x)?h.renderbufferStorageMultisampleEXT(36161,K,35056,x.width,x.height):r.renderbufferStorage(36161,34041,x.width,x.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const K=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let j=0;j<K.length;j++){const fe=K[j],_e=s.convert(fe.format,fe.encoding),ve=s.convert(fe.type),Z=D(fe.internalFormat,_e,ve,fe.encoding),Ae=me(x);B&&te(x)===!1?r.renderbufferStorageMultisample(36161,Ae,Z,x.width,x.height):te(x)?h.renderbufferStorageMultisampleEXT(36161,Ae,Z,x.width,x.height):r.renderbufferStorage(36161,Z,x.width,x.height)}}r.bindRenderbuffer(36161,null)}function E(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),R(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,j=me(x);if(x.depthTexture.format===ts)te(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,K,0,j):r.framebufferTexture2D(36160,36096,3553,K,0);else if(x.depthTexture.format===fo)te(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,K,0,j):r.framebufferTexture2D(36160,33306,3553,K,0);else throw new Error("Unknown depthTexture format")}function P(w){const x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");E(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)t.bindFramebuffer(36160,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]=r.createRenderbuffer(),Se(x.__webglDepthbuffer[K],w,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),Se(x.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function V(w,x,B){const K=n.get(w);x!==void 0&&ue(K.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&P(w)}function oe(w){const x=w.texture,B=n.get(w),K=n.get(x);w.addEventListener("dispose",G),w.isWebGLMultipleRenderTargets!==!0&&(K.__webglTexture===void 0&&(K.__webglTexture=r.createTexture()),K.__version=x.version,o.memory.textures++);const j=w.isWebGLCubeRenderTarget===!0,fe=w.isWebGLMultipleRenderTargets===!0,_e=v(w)||a;if(j){B.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)B.__webglFramebuffer[ve]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),fe)if(i.drawBuffers){const ve=w.texture;for(let Z=0,Ae=ve.length;Z<Ae;Z++){const Ne=n.get(ve[Z]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&te(w)===!1){const ve=fe?x:[x];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let Z=0;Z<ve.length;Z++){const Ae=ve[Z];B.__webglColorRenderbuffer[Z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,B.__webglColorRenderbuffer[Z]);const Ne=s.convert(Ae.format,Ae.encoding),Ue=s.convert(Ae.type),Ce=D(Ae.internalFormat,Ne,Ue,Ae.encoding,w.isXRRenderTarget===!0),we=me(w);r.renderbufferStorageMultisample(36161,we,Ce,w.width,w.height),r.framebufferRenderbuffer(36160,36064+Z,36161,B.__webglColorRenderbuffer[Z])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Se(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(j){t.bindTexture(34067,K.__webglTexture),re(34067,x,_e);for(let ve=0;ve<6;ve++)ue(B.__webglFramebuffer[ve],w,x,36064,34069+ve);L(x,_e)&&C(34067),t.unbindTexture()}else if(fe){const ve=w.texture;for(let Z=0,Ae=ve.length;Z<Ae;Z++){const Ne=ve[Z],Ue=n.get(Ne);t.bindTexture(3553,Ue.__webglTexture),re(3553,Ne,_e),ue(B.__webglFramebuffer,w,Ne,36064+Z,3553),L(Ne,_e)&&C(3553)}t.unbindTexture()}else{let ve=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ve=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,K.__webglTexture),re(ve,x,_e),ue(B.__webglFramebuffer,w,x,36064,ve),L(x,_e)&&C(ve),t.unbindTexture()}w.depthBuffer&&P(w)}function ie(w){const x=v(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let K=0,j=B.length;K<j;K++){const fe=B[K];if(L(fe,x)){const _e=w.isWebGLCubeRenderTarget?34067:3553,ve=n.get(fe).__webglTexture;t.bindTexture(_e,ve),C(_e),t.unbindTexture()}}}function U(w){if(a&&w.samples>0&&te(w)===!1){const x=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,K=w.height;let j=16384;const fe=[],_e=w.stencilBuffer?33306:36096,ve=n.get(w),Z=w.isWebGLMultipleRenderTargets===!0;if(Z)for(let Ae=0;Ae<x.length;Ae++)t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ae,36161,null),t.bindFramebuffer(36160,ve.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ae,3553,null,0);t.bindFramebuffer(36008,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ve.__webglFramebuffer);for(let Ae=0;Ae<x.length;Ae++){fe.push(36064+Ae),w.depthBuffer&&fe.push(_e);const Ne=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ne===!1&&(w.depthBuffer&&(j|=256),w.stencilBuffer&&(j|=1024)),Z&&r.framebufferRenderbuffer(36008,36064,36161,ve.__webglColorRenderbuffer[Ae]),Ne===!0&&(r.invalidateFramebuffer(36008,[_e]),r.invalidateFramebuffer(36009,[_e])),Z){const Ue=n.get(x[Ae]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ue,0)}r.blitFramebuffer(0,0,B,K,0,0,B,K,j,9728),d&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let Ae=0;Ae<x.length;Ae++){t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Ae,36161,ve.__webglColorRenderbuffer[Ae]);const Ne=n.get(x[Ae]).__webglTexture;t.bindFramebuffer(36160,ve.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Ae,3553,Ne,0)}t.bindFramebuffer(36009,ve.__webglMultisampledFramebuffer)}}function me(w){return Math.min(f,w.samples)}function te(w){const x=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function he(w){const x=o.render.frame;_.get(w)!==x&&(_.set(w,x),w.update())}function ce(w,x){const B=w.encoding,K=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Du||B!==us&&(B===mt?a===!1?e.has("EXT_sRGB")===!0&&K===ui?(w.format=Du,w.minFilter=$n,w.generateMipmaps=!1):x=Cm.sRGBToLinear(x):(K!==ui||j!==cs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),x}this.allocateTextureUnit=W,this.resetTextureUnits=X,this.setTexture2D=R,this.setTexture2DArray=ye,this.setTexture3D=de,this.setTextureCube=I,this.rebindTextures=V,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=te}function N1(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===cs)return 5121;if(s===bx)return 32819;if(s===wx)return 32820;if(s===Mx)return 5120;if(s===Sx)return 5122;if(s===Tm)return 5123;if(s===yx)return 5124;if(s===jr)return 5125;if(s===Kr)return 5126;if(s===ha)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Tx)return 6406;if(s===ui)return 6408;if(s===Ex)return 6409;if(s===Ax)return 6410;if(s===ts)return 6402;if(s===fo)return 34041;if(s===Du)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Cx)return 6403;if(s===Px)return 36244;if(s===Lx)return 33319;if(s===Rx)return 33320;if(s===Dx)return 36249;if(s===Tc||s===Ec||s===Ac||s===Cc)if(o===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Tc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Tc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Gh||s===Hh||s===Vh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Hh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ix)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wh||s===qh)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Wh)return o===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===qh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xh||s===$h||s===Yh||s===jh||s===Kh||s===Zh||s===Jh||s===Qh||s===ed||s===td||s===nd||s===id||s===rd||s===sd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Xh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$h)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===td)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nd)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===id)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sd)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Pc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Pc)return o===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ux||s===od||s===ad||s===ld)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Pc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===od)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ad)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ld)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Js?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class z1 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class rl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B1={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(B1)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new rl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class k1 extends yn{constructor(e,t,n,i,s,o,a,l,c,u){if(u=u!==void 0?u:ts,u!==ts&&u!==fo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=jr),n===void 0&&u===fo&&(n=Js),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1}}class G1 extends To{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=t.getContextAttributes();let m=null,p=null;const b=[],S=[],v=new Set,y=new Map,L=new Nn;L.layers.enable(1),L.viewport=new Yt;const C=new Nn;C.layers.enable(2),C.viewport=new Yt;const D=[L,C],M=new z1;M.layers.enable(1),M.layers.enable(2);let T=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let F=b[I];return F===void 0&&(F=new Qc,b[I]=F),F.getTargetRaySpace()},this.getControllerGrip=function(I){let F=b[I];return F===void 0&&(F=new Qc,b[I]=F),F.getGripSpace()},this.getHand=function(I){let F=b[I];return F===void 0&&(F=new Qc,b[I]=F),F.getHandSpace()};function G(I){const F=S.indexOf(I.inputSource);if(F===-1)return;const ne=b[F];ne!==void 0&&ne.dispatchEvent({type:I.type,data:I.inputSource})}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",H);for(let I=0;I<b.length;I++){const F=S[I];F!==null&&(S[I]=null,b[I].disconnect(F))}T=null,Y=null,e.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,de.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(I){if(i=I,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const F={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,F),i.updateRenderState({baseLayer:d}),p=new fs(d.framebufferWidth,d.framebufferHeight,{format:ui,type:cs,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let F=null,ne=null,re=null;g.depth&&(re=g.stencil?35056:33190,F=g.stencil?fo:ts,ne=g.stencil?Js:jr);const N={colorFormat:32856,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(N),i.updateRenderState({layers:[h]}),p=new fs(h.textureWidth,h.textureHeight,{format:ui,type:cs,depthTexture:new k1(h.textureWidth,h.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const xe=e.properties.get(p);xe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),de.setContext(i),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function H(I){for(let F=0;F<I.removed.length;F++){const ne=I.removed[F],re=S.indexOf(ne);re>=0&&(S[re]=null,b[re].disconnect(ne))}for(let F=0;F<I.added.length;F++){const ne=I.added[F];let re=S.indexOf(ne);if(re===-1){for(let xe=0;xe<b.length;xe++)if(xe>=S.length){S.push(ne),re=xe;break}else if(S[xe]===null){S[xe]=ne,re=xe;break}if(re===-1)break}const N=b[re];N&&N.connect(ne)}}const $=new ee,Q=new ee;function X(I,F,ne){$.setFromMatrixPosition(F.matrixWorld),Q.setFromMatrixPosition(ne.matrixWorld);const re=$.distanceTo(Q),N=F.projectionMatrix.elements,xe=ne.projectionMatrix.elements,Me=N[14]/(N[10]-1),ue=N[14]/(N[10]+1),Se=(N[9]+1)/N[5],E=(N[9]-1)/N[5],P=(N[8]-1)/N[0],V=(xe[8]+1)/xe[0],oe=Me*P,ie=Me*V,U=re/(-P+V),me=U*-P;F.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(me),I.translateZ(U),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const te=Me+U,he=ue+U,ce=oe-me,w=ie+(re-me),x=Se*ue/he*te,B=E*ue/he*te;I.projectionMatrix.makePerspective(ce,w,x,B,te,he),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function W(I,F){F===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(F.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(i===null)return;M.near=C.near=L.near=I.near,M.far=C.far=L.far=I.far,(T!==M.near||Y!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,Y=M.far);const F=I.parent,ne=M.cameras;W(M,F);for(let re=0;re<ne.length;re++)W(ne[re],F);ne.length===2?X(M,L,C):M.projectionMatrix.copy(L.projectionMatrix),le(I,M,F)};function le(I,F,ne){ne===null?I.matrix.copy(F.matrixWorld):(I.matrix.copy(ne.matrixWorld),I.matrix.invert(),I.matrix.multiply(F.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const re=I.children;for(let N=0,xe=re.length;N<xe;N++)re[N].updateMatrixWorld(!0);I.projectionMatrix.copy(F.projectionMatrix),I.projectionMatrixInverse.copy(F.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Iu*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(I){l=I,h!==null&&(h.fixedFoveation=I),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=I)},this.getPlanes=function(){return v};let R=null;function ye(I,F){if(u=F.getViewerPose(c||o),_=F,u!==null){const ne=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let re=!1;ne.length!==M.cameras.length&&(M.cameras.length=0,re=!0);for(let N=0;N<ne.length;N++){const xe=ne[N];let Me=null;if(d!==null)Me=d.getViewport(xe);else{const Se=f.getViewSubImage(h,xe);Me=Se.viewport,N===0&&(e.setRenderTargetTextures(p,Se.colorTexture,h.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(p))}let ue=D[N];ue===void 0&&(ue=new Nn,ue.layers.enable(N),ue.viewport=new Yt,D[N]=ue),ue.matrix.fromArray(xe.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(xe.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Me.x,Me.y,Me.width,Me.height),N===0&&(M.matrix.copy(ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),re===!0&&M.cameras.push(ue)}}for(let ne=0;ne<b.length;ne++){const re=S[ne],N=b[ne];re!==null&&N!==void 0&&N.update(re,F,c||o)}if(R&&R(I,F),F.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:F.detectedPlanes});let ne=null;for(const re of v)F.detectedPlanes.has(re)||(ne===null&&(ne=[]),ne.push(re));if(ne!==null)for(const re of ne)v.delete(re),y.delete(re),n.dispatchEvent({type:"planeremoved",data:re});for(const re of F.detectedPlanes)if(!v.has(re))v.add(re),y.set(re,F.lastChangedTime),n.dispatchEvent({type:"planeadded",data:re});else{const N=y.get(re);re.lastChangedTime>N&&(y.set(re,re.lastChangedTime),n.dispatchEvent({type:"planechanged",data:re}))}}_=null}const de=new Bm;de.setAnimationLoop(ye),this.setAnimationLoop=function(I){R=I},this.dispose=function(){}}}function H1(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Om(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p).envMap;if(b&&(m.envMap.value=b,m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const S=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function V1(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,S){const v=S.program;n.uniformBlockBinding(b,v)}function c(b,S){let v=i[b.id];v===void 0&&(_(b),v=u(b),i[b.id]=v,b.addEventListener("dispose",m));const y=S.program;n.updateUBOMapping(b,y);const L=e.render.frame;s[b.id]!==L&&(h(b),s[b.id]=L)}function u(b){const S=f();b.__bindingPointIndex=S;const v=r.createBuffer(),y=b.__size,L=b.usage;return r.bindBuffer(35345,v),r.bufferData(35345,y,L),r.bindBuffer(35345,null),r.bindBufferBase(35345,S,v),v}function f(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const S=i[b.id],v=b.uniforms,y=b.__cache;r.bindBuffer(35345,S);for(let L=0,C=v.length;L<C;L++){const D=v[L];if(d(D,L,y)===!0){const M=D.__offset,T=Array.isArray(D.value)?D.value:[D.value];let Y=0;for(let G=0;G<T.length;G++){const z=T[G],H=g(z);typeof z=="number"?(D.__data[0]=z,r.bufferSubData(35345,M+Y,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=z.elements[0],D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=z.elements[0],D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=z.elements[0]):(z.toArray(D.__data,Y),Y+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,D.__data)}}r.bindBuffer(35345,null)}function d(b,S,v){const y=b.value;if(v[S]===void 0){if(typeof y=="number")v[S]=y;else{const L=Array.isArray(y)?y:[y],C=[];for(let D=0;D<L.length;D++)C.push(L[D].clone());v[S]=C}return!0}else if(typeof y=="number"){if(v[S]!==y)return v[S]=y,!0}else{const L=Array.isArray(v[S])?v[S]:[v[S]],C=Array.isArray(y)?y:[y];for(let D=0;D<L.length;D++){const M=L[D];if(M.equals(C[D])===!1)return M.copy(C[D]),!0}}return!1}function _(b){const S=b.uniforms;let v=0;const y=16;let L=0;for(let C=0,D=S.length;C<D;C++){const M=S[C],T={boundary:0,storage:0},Y=Array.isArray(M.value)?M.value:[M.value];for(let G=0,z=Y.length;G<z;G++){const H=Y[G],$=g(H);T.boundary+=$.boundary,T.storage+=$.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,C>0){L=v%y;const G=y-L;L!==0&&G-T.boundary<0&&(v+=y-L,M.__offset=v)}v+=T.storage}return L=v%y,L>0&&(v+=y-L),b.__size=v,b.__cache={},this}function g(b){const S={boundary:0,storage:0};return typeof b=="number"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const v=o.indexOf(S.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}function W1(){const r=pa("canvas");return r.style.display="block",r}class Df{constructor(e={}){const{canvas:t=W1(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;let d=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=us,this.useLegacyLights=!0,this.toneMapping=Zi,this.toneMappingExposure=1;const p=this;let b=!1,S=0,v=0,y=null,L=-1,C=null;const D=new Yt,M=new Yt;let T=null,Y=t.width,G=t.height,z=1,H=null,$=null;const Q=new Yt(0,0,Y,G),X=new Yt(0,0,Y,G);let W=!1;const le=new zm;let R=!1,ye=!1,de=null;const I=new Kt,F=new ee,ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return y===null?z:1}let N=n;function xe(A,q){for(let J=0;J<A.length;J++){const k=A[J],ae=t.getContext(k,q);if(ae!==null)return ae}return null}try{const A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pf}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",Le,!1),N===null){const q=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&q.shift(),N=xe(q,A),N===null)throw xe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,ue,Se,E,P,V,oe,ie,U,me,te,he,ce,w,x,B,K,j,fe,_e,ve,Z,Ae,Ne;function Ue(){Me=new tb(N),ue=new Yy(N,Me,e),Me.init(ue),Z=new N1(N,Me,ue),Se=new O1(N,Me,ue),E=new rb,P=new S1,V=new F1(N,Me,Se,P,ue,Z,E),oe=new Ky(p),ie=new eb(p),U=new mM(N,ue),Ae=new Xy(N,Me,U,ue),me=new nb(N,U,E,Ae),te=new lb(N,me,U,E),fe=new ab(N,ue,V),B=new jy(P),he=new M1(p,oe,ie,Me,ue,Ae,B),ce=new H1(p,P),w=new b1,x=new P1(Me,ue),j=new qy(p,oe,ie,Se,te,h,l),K=new U1(p,te,ue),Ne=new V1(N,E,ue,Se),_e=new $y(N,Me,E,ue),ve=new ib(N,Me,E,ue),E.programs=he.programs,p.capabilities=ue,p.extensions=Me,p.properties=P,p.renderLists=w,p.shadowMap=K,p.state=Se,p.info=E}Ue();const Ce=new G1(p,N);this.xr=Ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(Y,G,!1))},this.getSize=function(A){return A.set(Y,G)},this.setSize=function(A,q,J=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,G=q,t.width=Math.floor(A*z),t.height=Math.floor(q*z),J===!0&&(t.style.width=A+"px",t.style.height=q+"px"),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(Y*z,G*z).floor()},this.setDrawingBufferSize=function(A,q,J){Y=A,G=q,z=J,t.width=Math.floor(A*J),t.height=Math.floor(q*J),this.setViewport(0,0,A,q)},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,q,J,k){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,q,J,k),Se.viewport(D.copy(Q).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(X)},this.setScissor=function(A,q,J,k){A.isVector4?X.set(A.x,A.y,A.z,A.w):X.set(A,q,J,k),Se.scissor(M.copy(X).multiplyScalar(z).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(A){Se.setScissorTest(W=A)},this.setOpaqueSort=function(A){H=A},this.setTransparentSort=function(A){$=A},this.getClearColor=function(A){return A.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(A=!0,q=!0,J=!0){let k=0;A&&(k|=16384),q&&(k|=256),J&&(k|=1024),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",Le,!1),w.dispose(),x.dispose(),P.dispose(),oe.dispose(),ie.dispose(),te.dispose(),Ae.dispose(),Ne.dispose(),he.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Oe),Ce.removeEventListener("sessionend",ot),de&&(de.dispose(),de=null),rt.stop()};function we(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Ge(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=E.autoReset,q=K.enabled,J=K.autoUpdate,k=K.needsUpdate,ae=K.type;Ue(),E.autoReset=A,K.enabled=q,K.autoUpdate=J,K.needsUpdate=k,K.type=ae}function Le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function lt(A){const q=A.target;q.removeEventListener("dispose",lt),O(q)}function O(A){se(A),P.remove(A)}function se(A){const q=P.get(A).programs;q!==void 0&&(q.forEach(function(J){he.releaseProgram(J)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,J,k,ae,Re){q===null&&(q=ne);const Ie=ae.isMesh&&ae.matrixWorld.determinant()<0,De=Ct(A,q,J,k,ae);Se.setMaterial(k,Ie);let ke=J.index,$e=1;k.wireframe===!0&&(ke=me.getWireframeAttribute(J),$e=2);const qe=J.drawRange,Be=J.attributes.position;let We=qe.start*$e,ht=(qe.start+qe.count)*$e;Re!==null&&(We=Math.max(We,Re.start*$e),ht=Math.min(ht,(Re.start+Re.count)*$e)),ke!==null?(We=Math.max(We,0),ht=Math.min(ht,ke.count)):Be!=null&&(We=Math.max(We,0),ht=Math.min(ht,Be.count));const sn=ht-We;if(sn<0||sn===1/0)return;Ae.setup(ae,k,De,J,ke);let xi,dt=_e;if(ke!==null&&(xi=U.get(ke),dt=ve,dt.setIndex(xi)),ae.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*re()),dt.setMode(1)):dt.setMode(4);else if(ae.isLine){let Xe=k.linewidth;Xe===void 0&&(Xe=1),Se.setLineWidth(Xe*re()),ae.isLineSegments?dt.setMode(1):ae.isLineLoop?dt.setMode(2):dt.setMode(3)}else ae.isPoints?dt.setMode(0):ae.isSprite&&dt.setMode(4);if(ae.isInstancedMesh)dt.renderInstances(We,sn,ae.count);else if(J.isInstancedBufferGeometry){const Xe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,zi=Math.min(J.instanceCount,Xe);dt.renderInstances(We,sn,zi)}else dt.render(We,sn)},this.compile=function(A,q){function J(k,ae,Re){k.transparent===!0&&k.side===Yi&&k.forceSinglePass===!1?(k.side=Sn,k.needsUpdate=!0,He(k,ae,Re),k.side=br,k.needsUpdate=!0,He(k,ae,Re),k.side=Yi):He(k,ae,Re)}_=x.get(A),_.init(),m.push(_),A.traverseVisible(function(k){k.isLight&&k.layers.test(q.layers)&&(_.pushLight(k),k.castShadow&&_.pushShadow(k))}),_.setupLights(p.useLegacyLights),A.traverse(function(k){const ae=k.material;if(ae)if(Array.isArray(ae))for(let Re=0;Re<ae.length;Re++){const Ie=ae[Re];J(Ie,A,k)}else J(ae,A,k)}),m.pop(),_=null};let pe=null;function be(A){pe&&pe(A)}function Oe(){rt.stop()}function ot(){rt.start()}const rt=new Bm;rt.setAnimationLoop(be),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(A){pe=A,Ce.setAnimationLoop(A),A===null?rt.stop():rt.start()},Ce.addEventListener("sessionstart",Oe),Ce.addEventListener("sessionend",ot),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,q,y),_=x.get(A,m.length),_.init(),m.push(_),I.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),le.setFromProjectionMatrix(I),ye=this.localClippingEnabled,R=B.init(this.clippingPlanes,ye),d=w.get(A,g.length),d.init(),g.push(d),yt(A,q,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(H,$),R===!0&&B.beginShadows();const J=_.state.shadowsArray;if(K.render(J,A,q),R===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(d,A),_.setupLights(p.useLegacyLights),q.isArrayCamera){const k=q.cameras;for(let ae=0,Re=k.length;ae<Re;ae++){const Ie=k[ae];Ve(d,A,Ie,Ie.viewport)}}else Ve(d,A,q);y!==null&&(V.updateMultisampleRenderTarget(y),V.updateRenderTargetMipmap(y)),A.isScene===!0&&A.onAfterRender(p,A,q),Ae.resetDefaultState(),L=-1,C=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?d=g[g.length-1]:d=null};function yt(A,q,J,k){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)_.pushLight(A),A.castShadow&&_.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||le.intersectsSprite(A)){k&&F.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);const Ie=te.update(A),De=A.material;De.visible&&d.push(A,Ie,De,J,F.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==E.render.frame&&(A.skeleton.update(),A.skeleton.frame=E.render.frame),!A.frustumCulled||le.intersectsObject(A))){k&&F.setFromMatrixPosition(A.matrixWorld).applyMatrix4(I);const Ie=te.update(A),De=A.material;if(Array.isArray(De)){const ke=Ie.groups;for(let $e=0,qe=ke.length;$e<qe;$e++){const Be=ke[$e],We=De[Be.materialIndex];We&&We.visible&&d.push(A,Ie,We,J,F.z,Be)}}else De.visible&&d.push(A,Ie,De,J,F.z,null)}}const Re=A.children;for(let Ie=0,De=Re.length;Ie<De;Ie++)yt(Re[Ie],q,J,k)}function Ve(A,q,J,k){const ae=A.opaque,Re=A.transmissive,Ie=A.transparent;_.setupLightsView(J),R===!0&&B.setGlobalState(p.clippingPlanes,J),Re.length>0&&Pe(ae,Re,q,J),k&&Se.viewport(D.copy(k)),ae.length>0&&ge(ae,q,J),Re.length>0&&ge(Re,q,J),Ie.length>0&&ge(Ie,q,J),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Pe(A,q,J,k){if(de===null){const De=ue.isWebGL2;de=new fs(1024,1024,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?ha:cs,minFilter:fa,samples:De&&a===!0?4:0})}const ae=p.getRenderTarget();p.setRenderTarget(de),p.clear();const Re=p.toneMapping;p.toneMapping=Zi,ge(A,J,k),V.updateMultisampleRenderTarget(de),V.updateRenderTargetMipmap(de);let Ie=!1;for(let De=0,ke=q.length;De<ke;De++){const $e=q[De],qe=$e.object,Be=$e.geometry,We=$e.material,ht=$e.group;if(We.side===Yi&&qe.layers.test(k.layers)){const sn=We.side;We.side=Sn,We.needsUpdate=!0,Fe(qe,J,k,Be,We,ht),We.side=sn,We.needsUpdate=!0,Ie=!0}}Ie===!0&&(V.updateMultisampleRenderTarget(de),V.updateRenderTargetMipmap(de)),p.setRenderTarget(ae),p.toneMapping=Re}function ge(A,q,J){const k=q.isScene===!0?q.overrideMaterial:null;for(let ae=0,Re=A.length;ae<Re;ae++){const Ie=A[ae],De=Ie.object,ke=Ie.geometry,$e=k===null?Ie.material:k,qe=Ie.group;De.layers.test(J.layers)&&Fe(De,q,J,ke,$e,qe)}}function Fe(A,q,J,k,ae,Re){A.onBeforeRender(p,q,J,k,ae,Re),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ae.onBeforeRender(p,q,J,k,A,Re),ae.transparent===!0&&ae.side===Yi&&ae.forceSinglePass===!1?(ae.side=Sn,ae.needsUpdate=!0,p.renderBufferDirect(J,q,k,ae,A,Re),ae.side=br,ae.needsUpdate=!0,p.renderBufferDirect(J,q,k,ae,A,Re),ae.side=Yi):p.renderBufferDirect(J,q,k,ae,A,Re),A.onAfterRender(p,q,J,k,ae,Re)}function He(A,q,J){q.isScene!==!0&&(q=ne);const k=P.get(A),ae=_.state.lights,Re=_.state.shadowsArray,Ie=ae.state.version,De=he.getParameters(A,ae.state,Re,q,J),ke=he.getProgramCacheKey(De);let $e=k.programs;k.environment=A.isMeshStandardMaterial?q.environment:null,k.fog=q.fog,k.envMap=(A.isMeshStandardMaterial?ie:oe).get(A.envMap||k.environment),$e===void 0&&(A.addEventListener("dispose",lt),$e=new Map,k.programs=$e);let qe=$e.get(ke);if(qe!==void 0){if(k.currentProgram===qe&&k.lightsStateVersion===Ie)return Ye(A,De),qe}else De.uniforms=he.getUniforms(A),A.onBuild(J,De,p),A.onBeforeCompile(De,p),qe=he.acquireProgram(De,ke),$e.set(ke,qe),k.uniforms=De.uniforms;const Be=k.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=B.uniform),Ye(A,De),k.needsLights=pt(A),k.lightsStateVersion=Ie,k.needsLights&&(Be.ambientLightColor.value=ae.state.ambient,Be.lightProbe.value=ae.state.probe,Be.directionalLights.value=ae.state.directional,Be.directionalLightShadows.value=ae.state.directionalShadow,Be.spotLights.value=ae.state.spot,Be.spotLightShadows.value=ae.state.spotShadow,Be.rectAreaLights.value=ae.state.rectArea,Be.ltc_1.value=ae.state.rectAreaLTC1,Be.ltc_2.value=ae.state.rectAreaLTC2,Be.pointLights.value=ae.state.point,Be.pointLightShadows.value=ae.state.pointShadow,Be.hemisphereLights.value=ae.state.hemi,Be.directionalShadowMap.value=ae.state.directionalShadowMap,Be.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Be.spotShadowMap.value=ae.state.spotShadowMap,Be.spotLightMatrix.value=ae.state.spotLightMatrix,Be.spotLightMap.value=ae.state.spotLightMap,Be.pointShadowMap.value=ae.state.pointShadowMap,Be.pointShadowMatrix.value=ae.state.pointShadowMatrix);const We=qe.getUniforms(),ht=bl.seqWithValue(We.seq,Be);return k.currentProgram=qe,k.uniformsList=ht,qe}function Ye(A,q){const J=P.get(A);J.outputEncoding=q.outputEncoding,J.instancing=q.instancing,J.skinning=q.skinning,J.morphTargets=q.morphTargets,J.morphNormals=q.morphNormals,J.morphColors=q.morphColors,J.morphTargetsCount=q.morphTargetsCount,J.numClippingPlanes=q.numClippingPlanes,J.numIntersection=q.numClipIntersection,J.vertexAlphas=q.vertexAlphas,J.vertexTangents=q.vertexTangents,J.toneMapping=q.toneMapping}function Ct(A,q,J,k,ae){q.isScene!==!0&&(q=ne),V.resetTextureUnits();const Re=q.fog,Ie=k.isMeshStandardMaterial?q.environment:null,De=y===null?p.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:us,ke=(k.isMeshStandardMaterial?ie:oe).get(k.envMap||Ie),$e=k.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,qe=!!k.normalMap&&!!J.attributes.tangent,Be=!!J.morphAttributes.position,We=!!J.morphAttributes.normal,ht=!!J.morphAttributes.color,sn=k.toneMapped?p.toneMapping:Zi,xi=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=xi!==void 0?xi.length:0,Xe=P.get(k),zi=_.state.lights;if(R===!0&&(ye===!0||A!==C)){const Cn=A===C&&k.id===L;B.setState(k,A,Cn)}let Bt=!1;k.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==zi.state.version||Xe.outputEncoding!==De||ae.isInstancedMesh&&Xe.instancing===!1||!ae.isInstancedMesh&&Xe.instancing===!0||ae.isSkinnedMesh&&Xe.skinning===!1||!ae.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==ke||k.fog===!0&&Xe.fog!==Re||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==B.numPlanes||Xe.numIntersection!==B.numIntersection)||Xe.vertexAlphas!==$e||Xe.vertexTangents!==qe||Xe.morphTargets!==Be||Xe.morphNormals!==We||Xe.morphColors!==ht||Xe.toneMapping!==sn||ue.isWebGL2===!0&&Xe.morphTargetsCount!==dt)&&(Bt=!0):(Bt=!0,Xe.__version=k.version);let Rr=Xe.currentProgram;Bt===!0&&(Rr=He(k,q,ae));let rh=!1,Ao=!1,mc=!1;const on=Rr.getUniforms(),Dr=Xe.uniforms;if(Se.useProgram(Rr.program)&&(rh=!0,Ao=!0,mc=!0),k.id!==L&&(L=k.id,Ao=!0),rh||C!==A){if(on.setValue(N,"projectionMatrix",A.projectionMatrix),ue.logarithmicDepthBuffer&&on.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),C!==A&&(C=A,Ao=!0,mc=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Cn=on.map.cameraPosition;Cn!==void 0&&Cn.setValue(N,F.setFromMatrixPosition(A.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&on.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ae.isSkinnedMesh)&&on.setValue(N,"viewMatrix",A.matrixWorldInverse)}if(ae.isSkinnedMesh){on.setOptional(N,ae,"bindMatrix"),on.setOptional(N,ae,"bindMatrixInverse");const Cn=ae.skeleton;Cn&&(ue.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),on.setValue(N,"boneTexture",Cn.boneTexture,V),on.setValue(N,"boneTextureSize",Cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const gc=J.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0&&ue.isWebGL2===!0)&&fe.update(ae,J,Rr),(Ao||Xe.receiveShadow!==ae.receiveShadow)&&(Xe.receiveShadow=ae.receiveShadow,on.setValue(N,"receiveShadow",ae.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Dr.envMap.value=ke,Dr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Ao&&(on.setValue(N,"toneMappingExposure",p.toneMappingExposure),Xe.needsLights&&at(Dr,mc),Re&&k.fog===!0&&ce.refreshFogUniforms(Dr,Re),ce.refreshMaterialUniforms(Dr,k,z,G,de),bl.upload(N,Xe.uniformsList,Dr,V)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(bl.upload(N,Xe.uniformsList,Dr,V),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&on.setValue(N,"center",ae.center),on.setValue(N,"modelViewMatrix",ae.modelViewMatrix),on.setValue(N,"normalMatrix",ae.normalMatrix),on.setValue(N,"modelMatrix",ae.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Cn=k.uniformsGroups;for(let _c=0,__=Cn.length;_c<__;_c++)if(ue.isWebGL2){const sh=Cn[_c];Ne.update(sh,Rr),Ne.bind(sh,Rr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Rr}function at(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function pt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(A,q,J){P.get(A.texture).__webglTexture=q,P.get(A.depthTexture).__webglTexture=J;const k=P.get(A);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=J===void 0,k.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,q){const J=P.get(A);J.__webglFramebuffer=q,J.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,J=0){y=A,S=q,v=J;let k=!0,ae=null,Re=!1,Ie=!1;if(A){const ke=P.get(A);ke.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(36160,null),k=!1):ke.__webglFramebuffer===void 0?V.setupRenderTarget(A):ke.__hasExternalTextures&&V.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);const $e=A.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const qe=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ae=qe[q],Re=!0):ue.isWebGL2&&A.samples>0&&V.useMultisampledRTT(A)===!1?ae=P.get(A).__webglMultisampledFramebuffer:ae=qe,D.copy(A.viewport),M.copy(A.scissor),T=A.scissorTest}else D.copy(Q).multiplyScalar(z).floor(),M.copy(X).multiplyScalar(z).floor(),T=W;if(Se.bindFramebuffer(36160,ae)&&ue.drawBuffers&&k&&Se.drawBuffers(A,ae),Se.viewport(D),Se.scissor(M),Se.setScissorTest(T),Re){const ke=P.get(A.texture);N.framebufferTexture2D(36160,36064,34069+q,ke.__webglTexture,J)}else if(Ie){const ke=P.get(A.texture),$e=q||0;N.framebufferTextureLayer(36160,36064,ke.__webglTexture,J||0,$e)}L=-1},this.readRenderTargetPixels=function(A,q,J,k,ae,Re,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){Se.bindFramebuffer(36160,De);try{const ke=A.texture,$e=ke.format,qe=ke.type;if($e!==ui&&Z.convert($e)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=qe===ha&&(Me.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Me.has("EXT_color_buffer_float"));if(qe!==cs&&Z.convert(qe)!==N.getParameter(35738)&&!(qe===Kr&&(ue.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-k&&J>=0&&J<=A.height-ae&&N.readPixels(q,J,k,ae,Z.convert($e),Z.convert(qe),Re)}finally{const ke=y!==null?P.get(y).__webglFramebuffer:null;Se.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(A,q,J=0){const k=Math.pow(2,-J),ae=Math.floor(q.image.width*k),Re=Math.floor(q.image.height*k);V.setTexture2D(q,0),N.copyTexSubImage2D(3553,J,0,0,A.x,A.y,ae,Re),Se.unbindTexture()},this.copyTextureToTexture=function(A,q,J,k=0){const ae=q.image.width,Re=q.image.height,Ie=Z.convert(J.format),De=Z.convert(J.type);V.setTexture2D(J,0),N.pixelStorei(37440,J.flipY),N.pixelStorei(37441,J.premultiplyAlpha),N.pixelStorei(3317,J.unpackAlignment),q.isDataTexture?N.texSubImage2D(3553,k,A.x,A.y,ae,Re,Ie,De,q.image.data):q.isCompressedTexture?N.compressedTexSubImage2D(3553,k,A.x,A.y,q.mipmaps[0].width,q.mipmaps[0].height,Ie,q.mipmaps[0].data):N.texSubImage2D(3553,k,A.x,A.y,Ie,De,q.image),k===0&&J.generateMipmaps&&N.generateMipmap(3553),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,q,J,k,ae=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,De=A.max.z-A.min.z+1,ke=Z.convert(k.format),$e=Z.convert(k.type);let qe;if(k.isData3DTexture)V.setTexture3D(k,0),qe=32879;else if(k.isDataArrayTexture)V.setTexture2DArray(k,0),qe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,k.flipY),N.pixelStorei(37441,k.premultiplyAlpha),N.pixelStorei(3317,k.unpackAlignment);const Be=N.getParameter(3314),We=N.getParameter(32878),ht=N.getParameter(3316),sn=N.getParameter(3315),xi=N.getParameter(32877),dt=J.isCompressedTexture?J.mipmaps[0]:J.image;N.pixelStorei(3314,dt.width),N.pixelStorei(32878,dt.height),N.pixelStorei(3316,A.min.x),N.pixelStorei(3315,A.min.y),N.pixelStorei(32877,A.min.z),J.isDataTexture||J.isData3DTexture?N.texSubImage3D(qe,ae,q.x,q.y,q.z,Re,Ie,De,ke,$e,dt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(qe,ae,q.x,q.y,q.z,Re,Ie,De,ke,dt.data)):N.texSubImage3D(qe,ae,q.x,q.y,q.z,Re,Ie,De,ke,$e,dt),N.pixelStorei(3314,Be),N.pixelStorei(32878,We),N.pixelStorei(3316,ht),N.pixelStorei(3315,sn),N.pixelStorei(32877,xi),ae===0&&k.generateMipmaps&&N.generateMipmap(qe),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){S=0,v=0,y=null,Se.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class q1 extends Df{}q1.prototype.isWebGL1Renderer=!0;class Wm extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class X1 extends Ea{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class If extends Pr{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new ee,f=new ee,h=new ee;for(let d=0;d<=n;d++)for(let _=0;_<=i;_++){const g=_/i*s,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(g),f.y=(e+t*Math.cos(m))*Math.sin(g),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let _=1;_<=i;_++){const g=(i+1)*d+_-1,m=(i+1)*(d-1)+_-1,p=(i+1)*(d-1)+_,b=(i+1)*d+_;o.push(g,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Di(a,3)),this.setAttribute("normal",new Di(l,3)),this.setAttribute("uv",new Di(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new If(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}const Yd={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class $1{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Y1=new $1;class qm{constructor(e){this.manager=e!==void 0?e:Y1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class j1 extends qm{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Yd.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=pa("img");function l(){u(),Yd.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class K1 extends qm{constructor(e){super(e)}load(e,t,n,i){const s=new yn,o=new j1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);const jd="data:image/webp;base64,UklGRuYAAABXRUJQVlA4TNkAAAAvH8AHELegqG0jyXPxWv6I9lcaCtq2YdLx5zCaf5t/A5Fk3CfwETTw+pfSQADP+1prQEq+nxiYz4sDiFSeYAoQwGBw3rXsDweHta1G0cddsygC6b9XnQhnGojo/wSgk5Z8qYheeSY4WlLpzfaFdvl8UJexOLJ1jCyuPPwwFme2F2JxZ3rsEngAMAk1oMQkNIm9aQqSqUTlGnVq1C1/r1F3jTpLVJ6itqZBhBSTAYsxACkiAUBjP6YHjL3Y8D6yD4/4bezBht6WviXCRytdmgyOtJaqIlrzQugEAA==",Z1=Vn({name:"HeroAnimation",mounted(){const r=this.$refs.canvas,e=new Wm,t=new Nn(85,this.$el.parentNode.offsetWidth/this.$el.parentNode.offsetHeight,.1,1e3);t.position.z=5.6;const n=new K1;new ma(10,10,100,100),new X1({size:.04,map:n.load(jd,()=>{s.opacity=1}),color:16777215,transparent:!0});const i=new ma(10,10,80,80),s=new lc({color:16777215,wireframe:!0,map:n.load(jd,()=>{s.opacity=1}),transparent:!0}),o=new Li(i,s);e.add(o);function a(){requestAnimationFrame(a);const c=Date.now()*.001,u=1.6,f=.9,h=o.geometry.attributes.position;if(h instanceof gi){for(let d=0;d<h.count;d++){const _=h.getX(d),g=h.getY(d),m=f*Math.sin(u*_+c)*Math.sin(u*g+c)-1;h.setZ(d,m)}h.needsUpdate=!0}l.render(e,t)}const l=new Df({canvas:r,alpha:!0,antialias:!0});l.setClearColor(0,0),l.setSize(this.$el.parentNode.offsetWidth,this.$el.parentNode.offsetHeight),l.setPixelRatio(window.devicePixelRatio),window.addEventListener("resize",()=>{const c=this.$el.parentNode.offsetWidth,u=this.$el.parentNode.offsetHeight;t.aspect=c/u,t.updateProjectionMatrix(),l.setSize(c,u)}),a()}}),vi=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},J1={ref:"canvas"};function Q1(r,e,t,n,i,s){return Fi(),Ni("canvas",J1,null,512)}const ew=vi(Z1,[["render",Q1]]);var tw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ou={},nw={get exports(){return Ou},set exports(r){Ou=r}};(function(r,e){(function(t,n){r.exports=n()})(tw,function(){var t=document,n=t.createTextNode.bind(t);function i(I,F,ne){I.style.setProperty(F,ne)}function s(I,F){return I.appendChild(F)}function o(I,F,ne,re){var N=t.createElement("span");return F&&(N.className=F),ne&&(!re&&N.setAttribute("data-"+F,ne),N.textContent=ne),I&&s(I,N)||N}function a(I,F){return I.getAttribute("data-"+F)}function l(I,F){return!I||I.length==0?[]:I.nodeName?[I]:[].slice.call(I[0].nodeName?I:(F||t).querySelectorAll(I))}function c(I){for(var F=[];I--;)F[I]=[];return F}function u(I,F){I&&I.some(F)}function f(I){return function(F){return I[F]}}function h(I,F,ne){var re="--"+F,N=re+"-index";u(ne,function(xe,Me){Array.isArray(xe)?u(xe,function(ue){i(ue,N,Me)}):i(xe,N,Me)}),i(I,re+"-total",ne.length)}var d={};function _(I,F,ne){var re=ne.indexOf(I);if(re==-1)ne.unshift(I),u(d[I].depends,function(xe){_(xe,I,ne)});else{var N=ne.indexOf(F);ne.splice(re,1),ne.splice(N,0,I)}return ne}function g(I,F,ne,re){return{by:I,depends:F,key:ne,split:re}}function m(I){return _(I,0,[]).map(f(d))}function p(I){d[I.by]=I}function b(I,F,ne,re,N){I.normalize();var xe=[],Me=document.createDocumentFragment();re&&xe.push(I.previousSibling);var ue=[];return l(I.childNodes).some(function(Se){if(Se.tagName&&!Se.hasChildNodes()){ue.push(Se);return}if(Se.childNodes&&Se.childNodes.length){ue.push(Se),xe.push.apply(xe,b(Se,F,ne,re,N));return}var E=Se.wholeText||"",P=E.trim();P.length&&(E[0]===" "&&ue.push(n(" ")),u(P.split(ne),function(V,oe){oe&&N&&ue.push(o(Me,"whitespace"," ",N));var ie=o(Me,F,V);xe.push(ie),ue.push(ie)}),E[E.length-1]===" "&&ue.push(n(" ")))}),u(ue,function(Se){s(Me,Se)}),I.innerHTML="",s(I,Me),xe}var S=0;function v(I,F){for(var ne in F)I[ne]=F[ne];return I}var y="words",L=g(y,S,"word",function(I){return b(I,"word",/\s+/,0,1)}),C="chars",D=g(C,[y],"char",function(I,F,ne){var re=[];return u(ne[y],function(N,xe){re.push.apply(re,b(N,"char","",F.whitespace&&xe))}),re});function M(I){I=I||{};var F=I.key;return l(I.target||"[data-splitting]").map(function(ne){var re=ne["🍌"];if(!I.force&&re)return re;re=ne["🍌"]={el:ne};var N=m(I.by||a(ne,"splitting")||C),xe=v({},I);return u(N,function(Me){if(Me.split){var ue=Me.by,Se=(F?"-"+F:"")+Me.key,E=Me.split(ne,xe,re);Se&&h(ne,Se,E),re[ue]=E,ne.classList.add(ue)}}),ne.classList.add("splitting"),re})}function T(I){I=I||{};var F=I.target=o();return F.innerHTML=I.content,M(I),F.outerHTML}M.html=T,M.add=p;function Y(I,F,ne){var re=l(F.matching||I.children,I),N={};return u(re,function(xe){var Me=Math.round(xe[ne]);(N[Me]||(N[Me]=[])).push(xe)}),Object.keys(N).map(Number).sort(G).map(f(N))}function G(I,F){return I-F}var z=g("lines",[y],"line",function(I,F,ne){return Y(I,{matching:ne[y]},"offsetTop")}),H=g("items",S,"item",function(I,F){return l(F.matching||I.children,I)}),$=g("rows",S,"row",function(I,F){return Y(I,F,"offsetTop")}),Q=g("cols",S,"col",function(I,F){return Y(I,F,"offsetLeft")}),X=g("grid",["rows","cols"]),W="layout",le=g(W,S,S,function(I,F){var ne=F.rows=+(F.rows||a(I,"rows")||1),re=F.columns=+(F.columns||a(I,"columns")||1);if(F.image=F.image||a(I,"image")||I.currentSrc||I.src,F.image){var N=l("img",I)[0];F.image=N&&(N.currentSrc||N.src)}F.image&&i(I,"background-image","url("+F.image+")");for(var xe=ne*re,Me=[],ue=o(S,"cell-grid");xe--;){var Se=o(ue,"cell");o(Se,"cell-inner"),Me.push(Se)}return s(I,ue),Me}),R=g("cellRows",[W],"row",function(I,F,ne){var re=F.rows,N=c(re);return u(ne[W],function(xe,Me,ue){N[Math.floor(Me/(ue.length/re))].push(xe)}),N}),ye=g("cellColumns",[W],"col",function(I,F,ne){var re=F.columns,N=c(re);return u(ne[W],function(xe,Me){N[Me%re].push(xe)}),N}),de=g("cells",["cellRows","cellColumns"],"cell",function(I,F,ne){return ne[W]});return p(L),p(D),p(z),p(H),p($),p(Q),p(X),p(le),p(R),p(ye),p(de),M})})(nw);const iw=Ou,Ca=r=>(Ar("data-v-346fe3d5"),r=r(),Cr(),r),rw={class:"hero"},sw={class:"container"},ow={class:"text"},aw=Ca(()=>Ee("span",{class:"yellow"},"responsivas",-1)),lw=Ca(()=>Ee("span",{class:"yellow"},"atractivas",-1)),cw=Ca(()=>Ee("span",{class:"yellow"},"fáciles de usar",-1)),uw={class:"proyectos"},fw=Ca(()=>Ee("div",{class:"arrow cursor-scale"},[Ee("svg",{width:"16",height:"51",viewBox:"0 0 16 51",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Ee("path",{d:"M9 1C9 0.447715 8.55228 0 8 0C7.44772 0 7 0.447715 7 1L9 1ZM7.29289 50.7071C7.68342 51.0976 8.31658 51.0976 8.70711 50.7071L15.0711 44.3431C15.4616 43.9526 15.4616 43.3195 15.0711 42.9289C14.6805 42.5384 14.0474 42.5384 13.6569 42.9289L8 48.5858L2.34315 42.9289C1.95262 42.5384 1.31946 42.5384 0.928932 42.9289C0.538408 43.3195 0.538408 43.9526 0.928932 44.3431L7.29289 50.7071ZM7 1L7 50H9L9 1L7 1Z",fill:"#8155FF"})])],-1)),hw=Ca(()=>Ee("div",{class:"scroll cursor-scale"},[Ee("p",null,"scroll"),Ee("div",{class:"line"})],-1)),dw={class:"background"},pw=Vn({computed:{prcLoad(){return this.loaded}}}),mw=Vn({...pw,__name:"Hero",setup(r){_s(()=>{iw()});function e(t){const n=document.querySelector(t);console.log(n),n&&n.scrollIntoView({behavior:"smooth"})}return(t,n)=>(Fi(),Ni("div",rw,[Ee("div",sw,[Ee("div",ow,[Ee("p",{class:hi(["function cursor-scale",t.prcLoad.toString()=="100%"?"animateText":""]),"data-splitting":""},"Presentacion(){",2),Ee("h1",{class:hi(["cursor-scale",t.prcLoad.toString()=="100%"?"animateText":""]),"data-splitting":""},[Yr("Desarrollo sitios y aplicaciones web adaptables y "),aw,Yr(". Me enfoco en crear soluciones "),lw,Yr(" y "),cw,Yr(".")],2),Ee("div",{class:hi(["btn cursor-scale",t.prcLoad.toString()=="100%"?"animateButton":""]),onClick:n[0]||(n[0]=i=>e("#about"))},"<Sobre mi />",2),Ee("p",{class:hi(["function cursor-scale",t.prcLoad.toString()=="100%"?"animateText":""]),"data-splitting":""},"}",2)]),Ee("div",uw,[Ee("p",{class:"cursor-scale",onClick:n[1]||(n[1]=i=>e("#portfolio"))},"<Proyectos />"),fw]),hw]),Ee("div",dw,[Vt(ew)])]))}});const gw=vi(mw,[["__scopeId","data-v-346fe3d5"]]),Uf=r=>(Ar("data-v-b1f19b1e"),r=r(),Cr(),r),_w=Uf(()=>Ee("div",{class:"line"},null,-1)),vw=Uf(()=>Ee("div",{class:"line"},null,-1)),xw=Uf(()=>Ee("div",{class:"line"},null,-1)),Mw=[_w,vw,xw],Sw=Vn({__name:"Hambutton",props:{isActive:null},setup(r){return(e,t)=>(Fi(),Ni("div",{class:hi(["btn",{open:r.isActive}])},Mw,2))}});const yw=vi(Sw,[["__scopeId","data-v-b1f19b1e"]]),uc=r=>(Ar("data-v-cac9a5ce"),r=r(),Cr(),r),bw={class:"container"},ww=uc(()=>Ee("div",{class:"logo cursor-scale"},[Ee("svg",{width:"29",height:"60",viewBox:"0 0 29 60",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[Ee("path",{d:"M27.5 5.62913L15.0983 27.2471L27.5 44.8182L27.5 5.62913Z",stroke:"#8155FF","stroke-width":"3"}),Ee("path",{d:"M1.50002 53.8656L12.4152 32.8809L1.50002 15.8244L1.50002 53.8656Z",stroke:"#8155FF","stroke-width":"3"})])],-1)),Tw=uc(()=>Ee("span",null,"<Proyectos />",-1)),Ew=[Tw],Aw=uc(()=>Ee("span",null,"<Sobre mi />",-1)),Cw=[Aw],Pw=uc(()=>Ee("span",null,"<Contacto />",-1)),Lw=[Pw],Rw=Vn({__name:"Header",setup(r){_s(()=>{});let e=ph(!1);xl(e,function(){console.log("watch"),console.log(e.value),e.value&&window.scrollTo(0,0),window.innerWidth<900&&(e.value?document.body.style.overflowY="hidden":document.body.style.overflowY="auto")});function t(n){document.querySelector(n).scrollIntoView({behavior:"smooth"}),e=ph(!e)}return(n,i)=>(Fi(),Ni("header",{class:hi({open:Lt(e)})},[Ee("div",bw,[ww,Ee("nav",null,[Ee("ul",{class:hi([{open:Lt(e)},"cursor-scale"])},[Ee("li",{onClick:i[0]||(i[0]=()=>{Dt(e)?e.value=!Lt(e):e=!Lt(e),t("#portfolio")})},Ew),Ee("li",{onClick:i[1]||(i[1]=()=>{Dt(e)?e.value=!Lt(e):e=!Lt(e),t("#about")})},Cw),Ee("li",{onClick:i[2]||(i[2]=()=>{Dt(e)?e.value=!Lt(e):e=!Lt(e),t("#contact")})},Lw)],2),Vt(yw,{"is-active":Lt(e),onClick:i[3]||(i[3]=s=>Dt(e)?e.value=!Lt(e):e=!Lt(e))},null,8,["is-active"])])])],2))}});const Dw=vi(Rw,[["__scopeId","data-v-cac9a5ce"]]);function Xi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Xm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},po={duration:.5,overwrite:!1,delay:0},Of,nn,Rt,jn=1e8,ft=1/jn,Fu=Math.PI*2,Iw=Fu/4,Uw=0,$m=Math.sqrt,Ow=Math.cos,Fw=Math.sin,qt=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},er=function(e){return typeof e=="number"},Ff=function(e){return typeof e>"u"},Oi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},Nf=function(){return typeof window<"u"},sl=function(e){return wt(e)||qt(e)},Ym=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,Nu=/(?:-?\.?\d|\.)+/gi,jm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,eu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Km=/[+-]=-?[.\d]+/,Zm=/[^,'"\[\]\s]+/gi,Nw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,Xn,zu,zf,Hn={},zl={},Jm,Qm=function(e){return(zl=ds(e,Hn))&&An},Bf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bl=function(e,t){return!t&&console.warn(e)},eg=function(e,t){return e&&(Hn[e]=t)&&zl&&(zl[e]=t)||Hn},ga=function(){return 0},zw={suppressEvents:!0,isStart:!0,kill:!1},wl={suppressEvents:!0,kill:!1},Bw={suppressEvents:!0},kf={},xr=[],Bu={},tg,On={},tu={},Kd=30,Tl=[],Gf="",Hf=function(e){var t=e[0],n,i;if(Oi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Tl.length;i--&&!Tl[i].targetTest(t););n=Tl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Tg(e[i],n)))||e.splice(i,1);return e},ns=function(e){return e._gsap||Hf(Kn(e))[0]._gsap},ng=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():Ff(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},eo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},kw=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},kl=function(){var e=xr.length,t=xr.slice(0),n,i;for(Bu={},xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ig=function(e,t,n,i){xr.length&&!nn&&kl(),e.render(t,n,i||nn&&t<0&&(e._initted||e._startAt)),xr.length&&!nn&&kl()},rg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Zm).length<2?t:qt(e)?e.trim():e},sg=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Gw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ds=function(e,t){for(var n in t)e[n]=t[n];return e},Zd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Oi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Gl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$o=function(e){var t=e.parent||Mt,n=e.keyframes?Gw(rn(e.keyframes)):Qn;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Hw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},og=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},fc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},wr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},is=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Vw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,n,i){return e._startAt&&(nn?e._startAt.revert(wl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Ww=function r(e){return!e||e._ts&&r(e.parent)},Jd=function(e){return e._repeat?mo(e._tTime,e=e.duration()+e._rDelay)*e:0},mo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Hl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hc=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},dc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hc(e),n._dirty||is(n,e)),e},ag=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Hl(e.rawTime(),t),(!t._dur||Pa(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),is(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},Ci=function(e,t,n,i){return t.parent&&wr(t),t._start=$t((er(n)?n:n||e!==Mt?qn(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),og(e,t,"_first","_last",e._sort?"_start":0),Gu(t)||(e._recent=t),i||ag(e,t),e._ts<0&&dc(e,e._tTime),e},lg=function(e,t){return(Hn.ScrollTrigger||Bf("scrollTrigger",t))&&Hn.ScrollTrigger.create(t,e)},cg=function(e,t,n,i,s){if(Wf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tg!==zn.frame)return xr.push(e),e._lazy=[s,i],1},qw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Xw=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&qw(e)&&!(!e._initted&&Gu(e))||(e._ts<0||e._dp._ts<0)&&!Gu(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=Pa(0,e._tDur,t),u=mo(l,a),e._yoyo&&u&1&&(o=1-o),u!==mo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&cg(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ku(e,t,n,!0),e._onUpdate&&!n&&Zn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Zn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&wr(e,1),!n&&!nn&&(Zn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$w=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},go=function(e,t,n,i){var s=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$t(o*(s+1)+e._rDelay*s):o,a>0&&!i&&dc(e,e._tTime=e._tDur*a),e.parent&&hc(e),n||is(e.parent,e),e},Qd=function(e){return e instanceof Mn?is(e):go(e,e._dur)},Yw={_start:0,endTime:ga,totalDuration:ga},qn=function r(e,t,n){var i=e.labels,s=e._recent||Yw,o=e.duration()>=jn?s.endTime(!1):e._dur,a,l,c;return qt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Yo=function(e,t,n){var i=er(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},Lr=function(e,t){return e||e===0?t(e):t},Pa=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!qt(e)||!(t=Nw.exec(e))?"":t[1]},jw=function(e,t,n){return Lr(n,function(i){return Pa(e,t,i)})},Hu=[].slice,ug=function(e,t){return e&&Oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Oi(e[0]))&&!e.nodeType&&e!==Xn},Kw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return qt(i)&&!t||ug(i,1)?(s=n).push.apply(s,Kn(i)):n.push(i)})||n},Kn=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):qt(e)&&!n&&(zu||!_o())?Hu.call((t||zf).querySelectorAll(e),0):rn(e)?Kw(e,n):ug(e)?Hu.call(e,0):e?[e]:[]},Vu=function(e){return e=Kn(e)[0]||Bl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Kn(t,n.querySelectorAll?n:n===e?Bl("Invalid scope")||zf.createElement("div"):e)}},fg=function(e){return e.sort(function(){return .5-Math.random()})},hg=function(e){if(wt(e))return e;var t=Oi(e)?e:{each:e},n=rs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,f=i;return qt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],f=i[1]),function(h,d,_){var g=(_||t).length,m=o[g],p,b,S,v,y,L,C,D,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,jn])[1],!M){for(C=-jn;C<(C=_[M++].getBoundingClientRect().left)&&M<g;);M--}for(m=o[g]=[],p=l?Math.min(M,g)*u-.5:i%M,b=M===jn?0:l?g*f/M-.5:i/M|0,C=0,D=jn,L=0;L<g;L++)S=L%M-p,v=b-(L/M|0),m[L]=y=c?Math.abs(c==="y"?v:S):$m(S*S+v*v),y>C&&(C=y),y<D&&(D=y);i==="random"&&fg(m),m.max=C-D,m.min=D,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:c?c==="y"?g/M:M:Math.max(M,g/M))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=tn(t.amount||t.each)||0,n=n&&g<0?yg(n):n}return g=(m[h]-m.min)/m.max||0,$t(m.b+(n?n(g):g)*m.v)+m.u}},Wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=$t(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(er(n)?0:tn(n))}},dg=function(e,t){var n=rn(e),i,s;return!n&&Oi(e)&&(i=n=e.radius||jn,e.values?(e=Kn(e.values),(s=!er(e[0]))&&(i*=i)):e=Wu(e.increment)),Lr(t,n?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=jn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:o,s||u===o||er(o)?u:u+tn(o)}:Wu(e))},pg=function(e,t,n,i){return Lr(rn(e)?!t:n===!0?!!(n=0):!i,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Zw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},Jw=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},Qw=function(e,t,n){return gg(e,t,0,1,n)},mg=function(e,t,n){return Lr(n,function(i){return e[~~t(i)]})},eT=function r(e,t,n){var i=t-e;return rn(e)?mg(e,r(0,e.length),t):Lr(n,function(s){return(i+(s-e)%i)%i+e})},tT=function r(e,t,n){var i=t-e,s=i*2;return rn(e)?mg(e,r(0,e.length-1),t):Lr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},_a=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?Zm:Nu),n+=e.substr(t,i-t)+pg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},gg=function(e,t,n,i,s){var o=t-e,a=i-n;return Lr(s,function(l){return n+((l-e)/o*a||0)})},nT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=qt(e),a={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else i||(e=ds(rn(e)?[]:{},e));if(!u){for(l in t)Vf.call(a,e,l,"get",t[l]);s=function(_){return $f(_,a)||(o?e.p:e)}}}return Lr(n,s)},ep=function(e,t,n){var i=e.labels,s=jn,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(e,t,n){var i=e.vars,s=i[t],o=Rt,a=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&xr.length&&kl(),a&&(Rt=a),u=l?s.apply(c,l):s.call(c),Rt=o,u},Bo=function(e){return wr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&Zn(e,"onInterrupt"),e},Ws,_g=[],vg=function(e){if(!Nf()){_g.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=wt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ga,render:$f,add:Vf,kill:vT,modifier:_T,rawVars:0},o={targetTest:0,get:0,getSetter:Xf,aliases:{},register:0};if(_o(),e!==i){if(On[t])return;Qn(i,Qn(Gl(e,s),o)),ds(i.prototype,ds(s,Gl(e,o))),On[i.prop=t]=i,e.targetTest&&(Tl.push(i),kf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eg(t,i),e.register&&e.register(An,i,Tn)},ut=255,ko={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},nu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},xg=function(e,t,n){var i=e?er(e)?[e>>16,e>>8&ut,e&ut]:0:ko.black,s,o,a,l,c,u,f,h,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ko[e])i=ko[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Nu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=nu(l+1/3,s,o),i[1]=nu(l,s,o),i[2]=nu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(jm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Nu)||ko.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/ut,o=i[1]/ut,a=i[2]/ut,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Mg=function(e){var t=[],n=[],i=-1;return e.split(Mr).forEach(function(s){var o=s.match(Vs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},tp=function(e,t,n){var i="",s=(e+i).match(Mr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=xg(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Mg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Mr,"1").split(Vs),f=c.length-1;a<f;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Mr),f=c.length-1;a<f;a++)i+=c[a]+s[a];return i+c[f]},Mr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ko)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),iT=/hsl[a]?\(/,Sg=function(e){var t=e.join(" "),n;if(Mr.lastIndex=0,Mr.test(t))return n=iT.test(t),e[1]=tp(e[1],n),e[0]=tp(e[0],n,Mg(e[1])),!0},va,zn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,_=function g(m){var p=r()-i,b=m===!0,S,v,y,L;if(p>e&&(n+=p-t),i+=p,y=i-n,S=y-o,(S>0||b)&&(L=++f.frame,h=y-f.time*1e3,f.time=y=y/1e3,o+=S+(S>=s?4:s-S),v=1),b||(l=c(g)),v)for(d=0;d<a.length;d++)a[d](y,h,L,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Jm&&(!zu&&Nf()&&(Xn=zu=window,zf=Xn.document||{},Hn.gsap=An,(Xn.gsapVersions||(Xn.gsapVersions=[])).push(An.version),Qm(zl||Xn.GreenSockGlobals||!Xn.gsap&&Xn||{}),u=Xn.requestAnimationFrame,_g.forEach(vg)),l&&f.sleep(),c=u||function(m){return setTimeout(m,o-f.time*1e3+1|0)},va=1,_(2))},sleep:function(){(u?Xn.cancelAnimationFrame:clearTimeout)(l),va=0,c=ga},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,p,b){var S=p?function(v,y,L,C){m(v,y,L,C),f.remove(S)}:m;return f.remove(m),a[b?"unshift":"push"](S),_o(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},f}(),_o=function(){return!va&&zn.wake()},it={},rT=/^[\d.\-M][\d.\-,\s]/,sT=/["']/g,oT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(sT,"").trim():+c,i=l.substr(a+1).trim();return t},aT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},lT=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[oT(t[1])]:aT(e).split(",").map(rg)):it._CE&&rT.test(e)?it._CE("",e):n},yg=function(e){return function(t){return 1-e(1-t)}},bg=function r(e,t){for(var n=e._first,i;n;)n instanceof Mn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},rs=function(e,t){return e&&(wt(e)?e:it[e]||lT(e))||t},vs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return wn(e,function(a){it[a]=Hn[a]=s,it[o=a.toLowerCase()]=n;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},wg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},iu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Fu*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Fw((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:wg(a);return s=Fu/s,l.config=function(c,u){return r(e,c,u)},l},ru=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:wg(n);return i.config=function(s){return r(e,s)},i};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;vs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;vs("Elastic",iu("in"),iu("out"),iu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};vs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);vs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});vs("Circ",function(r){return-($m(1-r*r)-1)});vs("Sine",function(r){return r===1?1:-Ow(r*Iw)+1});vs("Back",ru("in"),ru("out"),ru());it.SteppedEase=it.steps=Hn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-ft;return function(a){return((i*Pa(0,o,a)|0)+s)*n}}};po.ease=it["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Gf+=r+","+r+"Params,"});var Tg=function(e,t){this.id=Uw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ng,this.set=t?t.getSetter:Xf},vo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,go(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),va||zn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,go(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(_o(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(dc(this,n),!s._dp||s.parent||ag(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ci(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ig(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Jd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Jd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?mo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(Pa(-Math.abs(this._delay),this._tDur,i),!0),hc(this),Vw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ci(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Bw);var i=nn;return nn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Qd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Qd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(qn(this,n),bn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,bn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ft)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=wt(n)?n:sg,a=function(){var c=i.then;i.then=null,wt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){Bo(this)},r}();Qn(vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var Mn=function(r){Xm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),Mt&&Ci(n.parent||Mt,Xi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&lg(Xi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Yo(0,arguments,this),this},t.from=function(i,s,o){return Yo(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Yo(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,$o(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(i,s,qn(this,o),1),this},t.call=function(i,s,o){return Ci(this,Ut.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ut(i,o,qn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,$o(o).immediateRender=bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},t.staggerFromTo=function(i,s,o,a,l,c,u,f){return a.startAt=o,$o(a).immediateRender=bn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,f)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:$t(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,_,g,m,p,b,S,v,y,L,C;if(this!==Mt&&u>l&&i>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,v=this._start,S=this._ts,p=!S,f&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(L=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(h=$t(u%m),u===l?(g=this._repeat,h=c):(g=~~(u/m),g&&g===u/m&&(h=c,g--),h>c&&(h=c)),y=mo(this._tTime,m),!a&&this._tTime&&y!==g&&this._tTime-y*m-this._dur<=0&&(y=g),L&&g&1&&(h=c-h,C=1),g!==y&&!this._lock){var D=L&&y&1,M=D===(L&&g&1);if(g<y&&(D=!D),a=D?0:c,this._lock=1,this.render(a||(C?0:$t(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;bg(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=$w(this,$t(a),$t(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&!s&&!g&&(Zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=-ft);break}}d=_}else{d=this._last;for(var T=i<0?i:h;d;){if(_=d._prev,(d._act||T<=d._end)&&d._ts&&b!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(T-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(T-d._start)*d._ts,s,o||nn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){b=0,_&&(u+=this._zTime=T?-ft:ft);break}}d=_}}if(b&&!s&&(this.pause(),b.render(h>=a?0:-ft)._zTime=h>=a?1:-1,this._ts))return this._start=v,hc(this),this.render(i,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(v===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&wr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(Zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(er(s)||(s=qn(this,s,i)),!(i instanceof vo)){if(rn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(qt(i))return this.addLabel(i,s);if(wt(i))i=Ut.delayedCall(0,i);else return this}return this!==i?Ci(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ut?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return qt(i)?this.removeLabel(i):wt(i)?this.killTweensOf(i):(fc(this,i),i===this._recent&&(this._recent=this._last),is(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=qn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ut.delayedCall(0,s||ga,o);return a.data="isPause",this._hasPause=1,Ci(this,a,qn(this,i))},t.removePause=function(i){var s=this._first;for(i=qn(this,i);s;)s._start===i&&s.data==="isPause"&&wr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ur!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Kn(i),l=this._first,c=er(s),u;l;)l instanceof Ut?kw(l._targets,a)&&(c?(!ur||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=qn(o,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Ut.to(o,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ft,onStart:function(){if(o.pause(),!d){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&go(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Qn({startAt:{time:qn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),ep(this,qn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),ep(this,qn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return is(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=jn,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ci(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;go(o,o===Mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Mt._ts&&(ig(Mt,Hl(i,Mt)),tg=zn.frame),zn.frame>=Kd){Kd+=Gn.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&Gn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},e}(vo);Qn(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var cT=function(e,t,n,i,s,o,a){var l=new Tn(this._pt,e,t,0,1,Rg,null,s),c=0,u=0,f,h,d,_,g,m,p,b;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=_a(i)),o&&(b=[n,i],o(b,e,t),n=b[0],i=b[1]),h=n.match(eu)||[];f=eu.exec(i);)_=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?eo(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=eu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Km.test(i)||p)&&(l.e=0),this._pt=l,l},Vf=function(e,t,n,i,s,o,a,l,c,u){wt(i)&&(i=i(s||0,e,o));var f=e[t],h=n!=="get"?n:wt(f)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=wt(f)?c?pT:Pg:qf,_;if(qt(i)&&(~i.indexOf("random(")&&(i=_a(i)),i.charAt(1)==="="&&(_=eo(h,i)+(tn(h)||0),(_||_===0)&&(i=_))),!u||h!==i||qu)return!isNaN(h*i)&&i!==""?(_=new Tn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?gT:Lg,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&Bf(t,i),cT.call(this,e,t,h,i,d,l||Gn.stringFilter,c))},uT=function(e,t,n,i,s){if(wt(e)&&(e=jo(e,s,t,n,i)),!Oi(e)||e.style&&e.nodeType||rn(e)||Ym(e))return qt(e)?jo(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=jo(e[a],s,t,n,i);return o},Eg=function(e,t,n,i,s,o){var a,l,c,u;if(On[e]&&(a=new On[e]).init(s,a.rawVars?t[e]:uT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Tn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Ws))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},ur,qu,Wf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,d=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=e._dur,p=e._startAt,b=e._targets,S=e.parent,v=S&&S.data==="nested"?S.vars.targets:b,y=e._overwrite==="auto"&&!Of,L=e.timeline,C,D,M,T,Y,G,z,H,$,Q,X,W,le;if(L&&(!_||!s)&&(s="none"),e._ease=rs(s,po.ease),e._yEase=d?yg(rs(d===!0?s:d,po.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!L&&!!i.runBackwards,!L||_&&!i.stagger){if(H=b[0]?ns(b[0]).harness:0,W=H&&i[H.prop],C=Gl(i,kf),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!g?p.render(-1,!0):p.revert(h&&m?wl:zw),p._lazy=0),o){if(wr(e._startAt=Ut.set(b,Qn({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!p&&bn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!a&&!g)&&e._startAt.revert(wl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),M=Qn({overwrite:!1,data:"isFromStart",lazy:a&&!p&&bn(l),immediateRender:a,stagger:0,parent:S},C),W&&(M[H.prop]=W),wr(e._startAt=Ut.set(b,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(wl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&bn(l)||l&&!m,D=0;D<b.length;D++){if(Y=b[D],z=Y._gsap||Hf(b)[D]._gsap,e._ptLookup[D]=Q={},Bu[z.id]&&xr.length&&kl(),X=v===b?D:v.indexOf(Y),H&&($=new H).init(Y,W||C,e,X,v)!==!1&&(e._pt=T=new Tn(e._pt,Y,$.name,0,1,$.render,$,0,$.priority),$._props.forEach(function(R){Q[R]=T}),$.priority&&(G=1)),!H||W)for(M in C)On[M]&&($=Eg(M,C,e,X,Y,v))?$.priority&&(G=1):Q[M]=T=Vf.call(e,Y,M,"get",C[M],X,v,0,i.stringFilter);e._op&&e._op[D]&&e.kill(Y,e._op[D]),y&&e._pt&&(ur=e,Mt.killTweensOf(Y,Q,e.globalTime(t)),le=!e.parent,ur=0),e._pt&&l&&(Bu[z.id]=1)}G&&Dg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!le,_&&t<=0&&L.render(jn,!0,!0)},fT=function(e,t,n,i,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return qu=1,e.vars[t]="+=0",Wf(e,a),qu=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=At(n)+tn(u.e)),u.b&&(u.b=c.s+tn(u.b))},hT=function(e,t){var n=e[0]?ns(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=ds({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},dT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(rn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},jo=function(e,t,n,i,s){return wt(e)?e.call(t,n,i,s):qt(e)&&~e.indexOf("random(")?_a(e):e},Ag=Gf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cg={};wn(Ag+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Cg[r]=1});var Ut=function(r){Xm(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:$o(i))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,b=i.parent||Mt,S=(rn(n)||Ym(n)?er(n[0]):"length"in i)?[n]:Kn(n),v,y,L,C,D,M,T,Y;if(a._targets=S.length?Hf(S):Bl("GSAP target "+n+" not found. https://greensock.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||h||sl(c)||sl(u)){if(i=a.vars,v=a.timeline=new Mn({data:"nested",defaults:g||{},targets:b&&b.data==="nested"?b.vars.targets:S}),v.kill(),v.parent=v._dp=Xi(a),v._start=0,h||sl(c)||sl(u)){if(C=S.length,T=h&&hg(h),Oi(h))for(D in h)~Ag.indexOf(D)&&(Y||(Y={}),Y[D]=h[D]);for(y=0;y<C;y++)L=Gl(i,Cg),L.stagger=0,p&&(L.yoyoEase=p),Y&&ds(L,Y),M=S[y],L.duration=+jo(c,Xi(a),y,M,S),L.delay=(+jo(u,Xi(a),y,M,S)||0)-a._delay,!h&&C===1&&L.delay&&(a._delay=u=L.delay,a._start+=u,L.delay=0),v.to(M,L,T?T(y,M,S):0),v._ease=it.none;v.duration()?c=u=0:a.timeline=0}else if(_){$o(Qn(v.vars.defaults,{ease:"none"})),v._ease=rs(_.ease||i.ease||"none");var G=0,z,H,$;if(rn(_))_.forEach(function(Q){return v.to(S,Q,">")}),v.duration();else{L={};for(D in _)D==="ease"||D==="easeEach"||dT(D,_[D],L,_.easeEach);for(D in L)for(z=L[D].sort(function(Q,X){return Q.t-X.t}),G=0,y=0;y<z.length;y++)H=z[y],$={ease:H.e,duration:(H.t-(y?z[y-1].t:0))/100*c},$[D]=H.v,v.to(S,$,G),G+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!Of&&(ur=Xi(a),Mt.killTweensOf(S),ur=0),Ci(b,Xi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(f||!c&&!_&&a._start===$t(b._time)&&bn(f)&&Ww(Xi(a))&&b.data!=="nested")&&(a._tTime=-ft,a.render(Math.max(0,-u)||0)),m&&lg(Xi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-ft&&!u?l:i<ft?0:i,h,d,_,g,m,p,b,S,v;if(!c)Xw(this,i,s,o);else if(f!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=$t(f%g),f===l?(_=this._repeat,h=c):(_=~~(f/g),_&&_===f/g&&(h=c,_--),h>c&&(h=c)),p=this._yoyo&&_&1,p&&(v=this._yEase,h=c-h),m=mo(this._tTime,g),h===a&&!o&&this._initted)return this._tTime=f,this;_!==m&&(S&&this._yEase&&bg(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=o=1,this.render($t(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(cg(this,u?i:h,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(v||this._ease)(h/c),this._from&&(this.ratio=b=1-b),h&&!a&&!s&&!_&&(Zn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(b,d.d),d=d._next;S&&S.render(i<0?i:!h&&p?-ft:S._dur*S._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ku(this,i,s,o),Zn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ku(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&wr(this,1),!s&&!(u&&!a)&&(f||a||p)&&(Zn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a){va||zn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Wf(this,l),c=this._ease(l/this._dur),fT(this,i,s,o,a,c,l)?this.resetTo(i,s,o,a):(dc(this,0),this.parent||og(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Bo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,ur&&ur.vars.overwrite!==!0)._first||Bo(this),this.parent&&o!==this.timeline.totalDuration()&&go(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Kn(i):a,c=this._ptLookup,u=this._pt,f,h,d,_,g,m,p;if((!s||s==="all")&&Hw(a,l))return s==="all"&&(this._pt=0),Bo(this);for(f=this._op=this._op||[],s!=="all"&&(qt(s)&&(g={},wn(s,function(b){return g[b]=1}),s=g),s=hT(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){h=c[p],s==="all"?(f[p]=s,_=h,d={}):(d=f[p]=f[p]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&fc(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Bo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Yo(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Yo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Mt.killTweensOf(i,s,o)},e}(vo);Qn(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var e=new Mn,t=Hu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var qf=function(e,t,n){return e[t]=n},Pg=function(e,t,n){return e[t](n)},pT=function(e,t,n,i){return e[t](i.fp,n)},mT=function(e,t,n){return e.setAttribute(t,n)},Xf=function(e,t){return wt(e[t])?Pg:Ff(e[t])&&e.setAttribute?mT:qf},Lg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},gT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},$f=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},_T=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},vT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?fc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},xT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Dg=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Tn=function(){function r(t,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||Lg,this.d=l||this,this.set=c||qf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=xT,this.m=n,this.mt=s,this.tween=i},r}();wn(Gf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return kf[r]=1});Hn.TweenMax=Hn.TweenLite=Ut;Hn.TimelineLite=Hn.TimelineMax=Mn;Mt=new Mn({sortChildren:!1,defaults:po,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=Sg;var xo=[],El={},MT=[],np=0,su=function(e){return(El[e]||MT).map(function(t){return t()})},Xu=function(){var e=Date.now(),t=[];e-np>2&&(su("matchMediaInit"),xo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Xn.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),su("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),np=e,su("matchMedia"))},Ig=function(){function r(t,n){this.selector=n&&Vu(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wt(n)&&(s=i,i=n,n=wt);var o=this,a=function(){var c=Rt,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=Vu(s)),Rt=o,f=i.apply(o,arguments),wt(f)&&o._r.push(f),Rt=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===wt?a(o):n?o[n]=a:a},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ut&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof vo)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=xo.indexOf(this);~a&&xo.splice(a,1)}},e.revert=function(n){this.kill(n||{})},r}(),ST=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Oi(n)||(n={matches:n});var o=new Ig(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Xn.matchMedia(n[c]),l&&(xo.indexOf(o)<0&&xo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Xu):l.addEventListener("change",Xu)));return u&&i(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Vl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return vg(i)})},timeline:function(e){return new Mn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,i){qt(e)&&(e=Kn(e)[0]);var s=ns(e||{}).get,o=n?sg:rg;return n==="native"&&(n=""),e&&(t?o((On[t]&&On[t].get||s)(e,t,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Kn(e),e.length>1){var i=e.map(function(u){return An.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var o=On[t],a=ns(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;Ws._pt=0,f.init(e,n?u+n:u,Ws,0,[e]),f.render(1,f),Ws._pt&&$f(1,Ws)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,s=An.to(e,ds((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=rs(e.ease,po.ease)),Zd(po,e||{})},config:function(e){return Zd(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Hn[a]&&Bl(t+" effect requires "+a+" plugin.")}),tu[t]=function(a,l,c){return n(Kn(a),Qn(l||{},s),c)},o&&(Mn.prototype[t]=function(a,l,c){return this.add(tu[t](a,Oi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=rs(t)},parseEase:function(e,t){return arguments.length?rs(e,t):it},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Mn(e),i,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,i=Mt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ut&&i.vars.onComplete===i._targets[0]))&&Ci(n,i,i._start-i._delay),i=s;return Ci(Mt,n,0),n},context:function(e,t){return e?new Ig(e,t):Rt},matchMedia:function(e){return new ST(e)},matchMediaRefresh:function(){return xo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Xu()},addEventListener:function(e,t){var n=El[e]||(El[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=El[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:eT,wrapYoyo:tT,distribute:hg,random:pg,snap:dg,normalize:Qw,getUnit:tn,clamp:jw,splitColor:xg,toArray:Kn,selector:Vu,mapRange:gg,pipe:Zw,unitize:Jw,interpolate:nT,shuffle:fg},install:Qm,effects:tu,ticker:zn,updateRoot:Mn.updateRoot,plugins:On,globalTimeline:Mt,core:{PropTween:Tn,globals:eg,Tween:Ut,Timeline:Mn,Animation:vo,getCache:ns,_removeLinkedListItem:fc,reverting:function(){return nn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return Of=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Vl[r]=Ut[r]});zn.add(Mn.updateRoot);Ws=Vl.to({},{duration:0});var yT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},bT=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=yT(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},ou=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(qt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}bT(a,s)}}}},An=Vl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ou("roundProps",Wu),ou("modifiers"),ou("snap",dg))||Vl;Ut.version=Mn.version=An.version="3.11.5";Jm=1;Nf()&&_o();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ip,fr,to,Yf,Zr,rp,jf,wT=function(){return typeof window<"u"},tr={},Vr=180/Math.PI,no=Math.PI/180,Os=Math.atan2,sp=1e8,Kf=/([A-Z])/g,TT=/(left|right|width|margin|padding|x)/i,ET=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$u=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},AT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},CT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},PT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Ug=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Og=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},LT=function(e,t,n){return e.style[t]=n},RT=function(e,t,n){return e.style.setProperty(t,n)},DT=function(e,t,n){return e._gsap[t]=n},IT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},UT=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},OT=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},St="transform",_i=St+"Origin",FT=function r(e,t){var n=this,i=this.target,s=i.style;if(e in tr){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=$i(i,o)}):this.tfm[e]=i._gsap.x?i._gsap[e]:$i(i,e);else return Ri.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(St)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(_i,t,"")),e=St}(s||t)&&this.props.push(e,t,s[e])},Fg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},NT=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Kf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=jf(),(!s||!s.isStart)&&!n[St]&&(Fg(n),i.uncache=1)}},Ng=function(e,t){var n={target:e,props:[],revert:NT,save:FT};return e._gsap||An.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},zg,Yu=function(e,t){var n=fr.createElementNS?fr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fr.createElement(e);return n.style?n:fr.createElement(e)},Ii=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Kf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Mo(t)||t,1)||""},op="O,Moz,ms,Ms,Webkit".split(","),Mo=function(e,t,n){var i=t||Zr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(op[o]+e in s););return o<0?null:(o===3?"ms":o>=0?op[o]:"")+e},ju=function(){wT()&&window.document&&(ip=window,fr=ip.document,to=fr.documentElement,Zr=Yu("div")||{style:{}},Yu("div"),St=Mo(St),_i=St+"Origin",Zr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zg=!!Mo("perspective"),jf=An.core.reverting,Yf=1)},au=function r(e){var t=Yu("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(to.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),to.removeChild(t),this.style.cssText=s,o},ap=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Bg=function(e){var t;try{t=e.getBBox()}catch{t=au.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===au||(t=au.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+ap(e,["x","cx","x1"])||0,y:+ap(e,["y","cy","y1"])||0,width:0,height:0}:t},kg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Bg(e))},xa=function(e,t){if(t){var n=e.style;t in tr&&t!==_i&&(t=St),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Kf,"-$1").toLowerCase())):n.removeAttribute(t)}},hr=function(e,t,n,i,s,o){var a=new Tn(e._pt,t,n,0,1,o?Og:Ug);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},lp={deg:1,rad:1,turn:1},zT={grid:1,flex:1},Tr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Zr.style,l=TT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",_,g,m,p;return i===o||!s||lp[i]||lp[o]?s:(o!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&kg(e),(d||o==="%")&&(tr[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[u],At(d?s/_*f:s/100*_)):(a[l?"width":"height"]=f+(h?o:i),g=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===fr||!g.appendChild)&&(g=fr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===zn.time&&!m.uncache?At(s/m.width*f):((d||o==="%")&&!zT[Ii(g,"display")]&&(a.position=Ii(e,"position")),g===e&&(a.position="static"),g.appendChild(Zr),_=Zr[u],g.removeChild(Zr),a.position="absolute",l&&d&&(m=ns(g),m.time=zn.time,m.width=g[u]),At(h?_*s/f:_&&s?f/_*s:0))))},$i=function(e,t,n,i){var s;return Yf||ju(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),tr[t]&&t!=="transform"?(s=Sa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ql(Ii(e,_i))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Wl[t]&&Wl[t](e,t,n)||Ii(e,t)||ng(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Tr(e,t,s,n)+n:s},BT=function(e,t,n,i){if(!n||n==="none"){var s=Mo(t,e,1),o=s&&Ii(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ii(e,"borderTopColor"))}var a=new Tn(this._pt,e.style,t,0,1,Rg),l=0,c=0,u,f,h,d,_,g,m,p,b,S,v,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ii(e,t)||i,e.style[t]=n),u=[n,i],Sg(u),n=u[0],i=u[1],h=n.match(Vs)||[],y=i.match(Vs)||[],y.length){for(;f=Vs.exec(i);)m=f[0],b=i.substring(l,f.index),_?_=(_+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=eo(d,m)+v),p=parseFloat(m),S=m.substr((p+"").length),l=Vs.lastIndex-S.length,S||(S=S||Gn.units[t]||v,l===i.length&&(i+=S,a.e+=S)),v!==S&&(d=Tr(e,t,g,S)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Og:Ug;return Km.test(i)&&(a.e=0),this._pt=a,a},cp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},kT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=cp[n]||n,t[1]=cp[i]||i,t.join(" ")},GT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],tr[a]&&(l=1,a=a==="transformOrigin"?_i:St),xa(n,a);l&&(xa(n,St),o&&(o.svg&&n.removeAttribute("transform"),Sa(n,1),o.uncache=1,Fg(i)))}},Wl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Tn(e._pt,t,n,0,0,GT);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ma=[1,0,0,1,0,0],Gg={},Hg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},up=function(e){var t=Ii(e,St);return Hg(t)?Ma:t.substr(7).match(jm).map(At)},Zf=function(e,t){var n=e._gsap||ns(e),i=e.style,s=up(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ma:s):(s===Ma&&!e.offsetParent&&e!==to&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,to.appendChild(e)),s=up(e),l?i.display=l:xa(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):to.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ku=function(e,t,n,i,s,o){var a=e._gsap,l=s||Zf(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],b=l[5],S=t.split(" "),v=parseFloat(S[0])||0,y=parseFloat(S[1])||0,L,C,D,M;n?l!==Ma&&(C=d*m-_*g)&&(D=v*(m/C)+y*(-g/C)+(g*b-m*p)/C,M=v*(-_/C)+y*(d/C)-(d*b-_*p)/C,v=D,y=M):(L=Bg(e),v=L.x+(~S[0].indexOf("%")?v/100*L.width:v),y=L.y+(~(S[1]||S[0]).indexOf("%")?y/100*L.height:y)),i||i!==!1&&a.smooth?(p=v-c,b=y-u,a.xOffset=f+(p*d+b*g)-p,a.yOffset=h+(p*_+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=y,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[_i]="0px 0px",o&&(hr(o,a,"xOrigin",c,v),hr(o,a,"yOrigin",u,y),hr(o,a,"xOffset",f,a.xOffset),hr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},Sa=function(e,t){var n=e._gsap||new Tg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ii(e,_i)||"0",u,f,h,d,_,g,m,p,b,S,v,y,L,C,D,M,T,Y,G,z,H,$,Q,X,W,le,R,ye,de,I,F,ne;return u=f=h=g=m=p=b=S=v=0,d=_=1,n.svg=!!(e.getCTM&&kg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),i.scale=i.rotate=i.translate="none"),C=Zf(e,n.svg),n.svg&&(n.uncache?(W=e.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ku(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,L=n.yOrigin||0,C!==Ma&&(Y=C[0],G=C[1],z=C[2],H=C[3],u=$=C[4],f=Q=C[5],C.length===6?(d=Math.sqrt(Y*Y+G*G),_=Math.sqrt(H*H+z*z),g=Y||G?Os(G,Y)*Vr:0,b=z||H?Os(z,H)*Vr+g:0,b&&(_*=Math.abs(Math.cos(b*no))),n.svg&&(u-=y-(y*Y+L*z),f-=L-(y*G+L*H))):(ne=C[6],I=C[7],R=C[8],ye=C[9],de=C[10],F=C[11],u=C[12],f=C[13],h=C[14],D=Os(ne,de),m=D*Vr,D&&(M=Math.cos(-D),T=Math.sin(-D),X=$*M+R*T,W=Q*M+ye*T,le=ne*M+de*T,R=$*-T+R*M,ye=Q*-T+ye*M,de=ne*-T+de*M,F=I*-T+F*M,$=X,Q=W,ne=le),D=Os(-z,de),p=D*Vr,D&&(M=Math.cos(-D),T=Math.sin(-D),X=Y*M-R*T,W=G*M-ye*T,le=z*M-de*T,F=H*T+F*M,Y=X,G=W,z=le),D=Os(G,Y),g=D*Vr,D&&(M=Math.cos(D),T=Math.sin(D),X=Y*M+G*T,W=$*M+Q*T,G=G*M-Y*T,Q=Q*M-$*T,Y=X,$=W),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=At(Math.sqrt(Y*Y+G*G+z*z)),_=At(Math.sqrt(Q*Q+ne*ne)),D=Os($,Q),b=Math.abs(D)>2e-4?D*Vr:0,v=F?1/(F<0?-F:F):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Hg(Ii(e,St)),X&&e.setAttribute("transform",X))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(d*=-1,b+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=At(d),n.scaleY=At(_),n.rotation=At(g)+a,n.rotationX=At(m)+a,n.rotationY=At(p)+a,n.skewX=b+a,n.skewY=S+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[_i]=ql(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?VT:zg?Vg:HT,n.uncache=0,n},ql=function(e){return(e=e.split(" "))[0]+" "+e[1]},lu=function(e,t,n){var i=tn(t);return At(parseFloat(t)+parseFloat(Tr(e,"x",n+"px",i)))+i},HT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vg(e,t)},zr="0deg",Io="0px",Br=") ",Vg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,S=n.zOrigin,v="",y=p==="auto"&&e&&e!==1||p===!0;if(S&&(f!==zr||u!==zr)){var L=parseFloat(u)*no,C=Math.sin(L),D=Math.cos(L),M;L=parseFloat(f)*no,M=Math.cos(L),o=lu(b,o,C*M*-S),a=lu(b,a,-Math.sin(L)*-S),l=lu(b,l,D*M*-S+S)}m!==Io&&(v+="perspective("+m+Br),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(y||o!==Io||a!==Io||l!==Io)&&(v+=l!==Io||y?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Br),c!==zr&&(v+="rotate("+c+Br),u!==zr&&(v+="rotateY("+u+Br),f!==zr&&(v+="rotateX("+f+Br),(h!==zr||d!==zr)&&(v+="skew("+h+", "+d+Br),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Br),b.style[St]=v||"translate(0, 0)"},VT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,S=parseFloat(o),v=parseFloat(a),y,L,C,D,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=no,c*=no,y=Math.cos(l)*f,L=Math.sin(l)*f,C=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=no,M=Math.tan(c-u),M=Math.sqrt(1+M*M),C*=M,D*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),y*=M,L*=M)),y=At(y),L=At(L),C=At(C),D=At(D)):(y=f,D=h,L=C=0),(S&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(S=Tr(d,"x",o,"px"),v=Tr(d,"y",a,"px")),(_||g||m||p)&&(S=At(S+_-(_*y+g*C)+m),v=At(v+g-(_*L+g*D)+p)),(i||s)&&(M=d.getBBox(),S=At(S+i/100*M.width),v=At(v+s/100*M.height)),M="matrix("+y+","+L+","+C+","+D+","+S+","+v+")",d.setAttribute("transform",M),b&&(d.style[St]=M)},WT=function(e,t,n,i,s){var o=360,a=qt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Vr:1),c=l-i,u=i+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*sp)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*sp)%o-~~(c/o)*o)),e._pt=h=new Tn(e._pt,t,n,i,c,AT),h.e=u,h.u="deg",e._props.push(n),h},fp=function(e,t){for(var n in t)e[n]=t[n];return e},qT=function(e,t,n){var i=fp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[St]=t,a=Sa(n,1),xa(n,St),n.setAttribute("transform",c)):(c=getComputedStyle(n)[St],o[St]=t,a=Sa(n,1),o[St]=c);for(l in tr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=tn(c),_=tn(u),f=d!==_?Tr(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Tn(e._pt,a,l,f,h-f,$u),e._pt.u=_||0,e._props.push(l));fp(a,i)};wn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Wl[e>1?"border"+r:r]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(_){return $i(a,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,d,f)}});var Wg={name:"css",register:ju,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,m,p,b,S,v,y,L,C,D;Yf||ju(),this.styles=this.styles||Ng(e),D=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(On[g]&&Eg(g,t,n,i,e,s)))){if(d=typeof u,_=Wl[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=_a(u)),_)_(this,e,g,u,n)&&(C=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Mr.lastIndex=0,Mr.test(c)||(m=tn(c),p=tn(u)),p?m!==p&&(c=Tr(e,g,c,p)+p):m&&(u+=m),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),D.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],qt(c)&&~c.indexOf("random(")&&(c=_a(c)),tn(c+"")||(c+=Gn.units[g]||tn($i(e,g))||""),(c+"").charAt(1)==="="&&(c=$i(e,g))):c=$i(e,g),h=parseFloat(c),b=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),f=parseFloat(u),g in Ri&&(g==="autoAlpha"&&(h===1&&$i(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),hr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ri[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in tr,S){if(this.styles.save(g),v||(y=e._gsap,y.renderTransform&&!t.parseTransform||Sa(e,t.parseTransform),L=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Tn(this._pt,a,St,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Tn(this._pt,y,"scaleY",y.scaleY,(b?eo(y.scaleY,b+f):f)-y.scaleY||0,$u),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){D.push(_i,0,a[_i]),u=kT(u),y.svg?Ku(e,u,0,L,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&hr(this,y,"zOrigin",y.zOrigin,p),hr(this,a,g,ql(c),ql(u)));continue}else if(g==="svgOrigin"){Ku(e,u,1,L,0,this);continue}else if(g in Gg){WT(this,y,g,h,b?eo(h,b+u):u);continue}else if(g==="smoothOrigin"){hr(this,y,"smooth",y.smooth,u);continue}else if(g==="force3D"){y[g]=u;continue}else if(g==="transform"){qT(this,u,e);continue}}else g in a||(g=Mo(g)||g);if(S||(f||f===0)&&(h||h===0)&&!ET.test(u)&&g in a)m=(c+"").substr((h+"").length),f||(f=0),p=tn(u)||(g in Gn.units?Gn.units[g]:m),m!==p&&(h=Tr(e,g,c,p)),this._pt=new Tn(this._pt,S?y:a,g,h,(b?eo(h,b+f):f)-h,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?PT:$u),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=CT);else if(g in a)BT.call(this,e,g,c,b?b+u:u);else if(g in e)this.add(e,g,c||e[g],b?b+u:u,i,s);else if(g!=="parseTransform"){Bf(g,u);continue}S||(g in a?D.push(g,0,a[g]):D.push(g,1,c||e[g])),o.push(g)}}C&&Dg(this)},render:function(e,t){if(t.tween._time||!jf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$i,aliases:Ri,getSetter:function(e,t,n){var i=Ri[t];return i&&i.indexOf(",")<0&&(t=i),t in tr&&t!==_i&&(e._gsap.x||$i(e,"x"))?n&&rp===n?t==="scale"?IT:DT:(rp=n||{})&&(t==="scale"?UT:OT):e.style&&!Ff(e.style[t])?LT:~t.indexOf("-")?RT:Xf(e,t)},core:{_removeProperty:xa,_getMatrix:Zf}};An.utils.checkPrefix=Mo;An.core.getStyleSaver=Ng;(function(r,e,t,n){var i=wn(r+","+e+","+t,function(s){tr[s]=1});wn(e,function(s){Gn.units[s]="deg",Gg[s]=1}),Ri[i[13]]=r+","+e,wn(n,function(s){var o=s.split(":");Ri[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"});An.registerPlugin(Wg);var ss=An.registerPlugin(Wg)||An;ss.core.Tween;function hp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function XT(r,e,t){return e&&hp(r.prototype,e),t&&hp(r,t),r}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Zu,Bn,dr,pr,io,qg,Wr,Ko,Xg,Ki,ii,$g,Yg=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},jg=1,qs=[],et=[],Ui=[],Zo=Date.now,Ju=function(e,t){return t},$T=function(){var e=Ko.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,et),i.push.apply(i,Ui),et=n,Ui=i,Ju=function(o,a){return t[o](a)}},Sr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},Jo=function(e){return!!~Xg.indexOf(e)},gn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ol="scrollLeft",al="scrollTop",Qu=function(){return Ki&&Ki.isPressed||et.cache++},Xl=function(e,t){var n=function i(s){if(s||s===0){jg&&(Bn.history.scrollRestoration="manual");var o=Ki&&Ki.isPressed;s=i.v=Math.round(s)||(Ki&&Ki.iOS?1:0),e(s),i.cacheID=et.cache,o&&Ju("ss",s)}else(t||et.cache!==i.cacheID||Ju("ref"))&&(i.cacheID=et.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},dn={s:ol,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Xl(function(r){return arguments.length?Bn.scrollTo(r,Ot.sc()):Bn.pageXOffset||dr[ol]||pr[ol]||io[ol]||0})},Ot={s:al,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:Xl(function(r){return arguments.length?Bn.scrollTo(dn.sc(),r):Bn.pageYOffset||dr[al]||pr[al]||io[al]||0})},vn=function(e){return jt.utils.toArray(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Er=function(e,t){var n=t.s,i=t.sc;Jo(e)&&(e=dr.scrollingElement||pr);var s=et.indexOf(e),o=i===Ot.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||e.addEventListener("scroll",Qu);var a=et[s+o],l=a||(et[s+o]=Xl(Sr(e,n),!0)||(Jo(e)?i:Xl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},ef=function(e,t,n){var i=e,s=e,o=Zo(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=Zo();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},f=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,m=s,p=Zo();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Uo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},dp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Kg=function(){Ko=jt.core.globals().ScrollTrigger,Ko&&Ko.core&&$T()},Zg=function(e){return jt=e||Yg(),jt&&typeof document<"u"&&document.body&&(Bn=window,dr=document,pr=dr.documentElement,io=dr.body,Xg=[Bn,dr,pr,io],jt.utils.clamp,$g=jt.core.context||function(){},Wr="onpointerenter"in io?"pointer":"mouse",qg=It.isTouch=Bn.matchMedia&&Bn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Bn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=It.eventTypes=("ontouchstart"in pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return jg=0},500),Kg(),Zu=1),Zu};dn.op=Ot;et.cache=0;var It=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Zu||Zg(jt)||console.warn("Please gsap.registerPlugin(Observer)"),Ko||Kg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,b=n.onDrag,S=n.onPress,v=n.onRelease,y=n.onRight,L=n.onLeft,C=n.onUp,D=n.onDown,M=n.onChangeX,T=n.onChangeY,Y=n.onChange,G=n.onToggleX,z=n.onToggleY,H=n.onHover,$=n.onHoverEnd,Q=n.onMove,X=n.ignoreCheck,W=n.isNormalizer,le=n.onGestureStart,R=n.onGestureEnd,ye=n.onWheel,de=n.onEnable,I=n.onDisable,F=n.onClick,ne=n.scrollSpeed,re=n.capture,N=n.allowClicks,xe=n.lockAxis,Me=n.onLockAxis;this.target=a=vn(a)||pr,this.vars=n,d&&(d=jt.utils.toArray(d)),i=i||1e-9,s=s||0,_=_||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Bn.getComputedStyle(io).lineHeight)||22);var ue,Se,E,P,V,oe,ie,U=this,me=0,te=0,he=Er(a,dn),ce=Er(a,Ot),w=he(),x=ce(),B=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ii[0]==="pointerdown",K=Jo(a),j=a.ownerDocument||dr,fe=[0,0,0],_e=[0,0,0],ve=0,Z=function(){return ve=Zo()},Ae=function(Pe,ge){return(U.event=Pe)&&d&&~d.indexOf(Pe.target)||ge&&B&&Pe.pointerType!=="touch"||X&&X(Pe,ge)},Ne=function(){U._vx.reset(),U._vy.reset(),Se.pause(),f&&f(U)},Ue=function(){var Pe=U.deltaX=dp(fe),ge=U.deltaY=dp(_e),Fe=Math.abs(Pe)>=i,He=Math.abs(ge)>=i;Y&&(Fe||He)&&Y(U,Pe,ge,fe,_e),Fe&&(y&&U.deltaX>0&&y(U),L&&U.deltaX<0&&L(U),M&&M(U),G&&U.deltaX<0!=me<0&&G(U),me=U.deltaX,fe[0]=fe[1]=fe[2]=0),He&&(D&&U.deltaY>0&&D(U),C&&U.deltaY<0&&C(U),T&&T(U),z&&U.deltaY<0!=te<0&&z(U),te=U.deltaY,_e[0]=_e[1]=_e[2]=0),(P||E)&&(Q&&Q(U),E&&(b(U),E=!1),P=!1),oe&&!(oe=!1)&&Me&&Me(U),V&&(ye(U),V=!1),ue=0},Ce=function(Pe,ge,Fe){fe[Fe]+=Pe,_e[Fe]+=ge,U._vx.update(Pe),U._vy.update(ge),c?ue||(ue=requestAnimationFrame(Ue)):Ue()},we=function(Pe,ge){xe&&!ie&&(U.axis=ie=Math.abs(Pe)>Math.abs(ge)?"x":"y",oe=!0),ie!=="y"&&(fe[2]+=Pe,U._vx.update(Pe,!0)),ie!=="x"&&(_e[2]+=ge,U._vy.update(ge,!0)),c?ue||(ue=requestAnimationFrame(Ue)):Ue()},Ge=function(Pe){if(!Ae(Pe,1)){Pe=Uo(Pe,u);var ge=Pe.clientX,Fe=Pe.clientY,He=ge-U.x,Ye=Fe-U.y,Ct=U.isDragging;U.x=ge,U.y=Fe,(Ct||Math.abs(U.startX-ge)>=s||Math.abs(U.startY-Fe)>=s)&&(b&&(E=!0),Ct||(U.isDragging=!0),we(He,Ye),Ct||m&&m(U))}},Le=U.onPress=function(Ve){Ae(Ve,1)||Ve&&Ve.button||(U.axis=ie=null,Se.pause(),U.isPressed=!0,Ve=Uo(Ve),me=te=0,U.startX=U.x=Ve.clientX,U.startY=U.y=Ve.clientY,U._vx.reset(),U._vy.reset(),gn(W?a:j,ii[1],Ge,u,!0),U.deltaX=U.deltaY=0,S&&S(U))},lt=U.onRelease=function(Ve){if(!Ae(Ve,1)){an(W?a:j,ii[1],Ge,!0);var Pe=!isNaN(U.y-U.startY),ge=U.isDragging&&(Math.abs(U.x-U.startX)>3||Math.abs(U.y-U.startY)>3),Fe=Uo(Ve);!ge&&Pe&&(U._vx.reset(),U._vy.reset(),u&&N&&jt.delayedCall(.08,function(){if(Zo()-ve>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(j.createEvent){var He=j.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,Bn,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(He)}}})),U.isDragging=U.isGesturing=U.isPressed=!1,f&&!W&&Se.restart(!0),p&&ge&&p(U),v&&v(U,ge)}},O=function(Pe){return Pe.touches&&Pe.touches.length>1&&(U.isGesturing=!0)&&le(Pe,U.isDragging)},se=function(){return(U.isGesturing=!1)||R(U)},pe=function(Pe){if(!Ae(Pe)){var ge=he(),Fe=ce();Ce((ge-w)*ne,(Fe-x)*ne,1),w=ge,x=Fe,f&&Se.restart(!0)}},be=function(Pe){if(!Ae(Pe)){Pe=Uo(Pe,u),ye&&(V=!0);var ge=(Pe.deltaMode===1?l:Pe.deltaMode===2?Bn.innerHeight:1)*_;Ce(Pe.deltaX*ge,Pe.deltaY*ge,0),f&&!W&&Se.restart(!0)}},Oe=function(Pe){if(!Ae(Pe)){var ge=Pe.clientX,Fe=Pe.clientY,He=ge-U.x,Ye=Fe-U.y;U.x=ge,U.y=Fe,P=!0,(He||Ye)&&we(He,Ye)}},ot=function(Pe){U.event=Pe,H(U)},rt=function(Pe){U.event=Pe,$(U)},yt=function(Pe){return Ae(Pe)||Uo(Pe,u)&&F(U)};Se=U._dc=jt.delayedCall(h||.25,Ne).pause(),U.deltaX=U.deltaY=0,U._vx=ef(0,50,!0),U._vy=ef(0,50,!0),U.scrollX=he,U.scrollY=ce,U.isDragging=U.isGesturing=U.isPressed=!1,$g(this),U.enable=function(Ve){return U.isEnabled||(gn(K?j:a,"scroll",Qu),o.indexOf("scroll")>=0&&gn(K?j:a,"scroll",pe,u,re),o.indexOf("wheel")>=0&&gn(a,"wheel",be,u,re),(o.indexOf("touch")>=0&&qg||o.indexOf("pointer")>=0)&&(gn(a,ii[0],Le,u,re),gn(j,ii[2],lt),gn(j,ii[3],lt),N&&gn(a,"click",Z,!1,!0),F&&gn(a,"click",yt),le&&gn(j,"gesturestart",O),R&&gn(j,"gestureend",se),H&&gn(a,Wr+"enter",ot),$&&gn(a,Wr+"leave",rt),Q&&gn(a,Wr+"move",Oe)),U.isEnabled=!0,Ve&&Ve.type&&Le(Ve),de&&de(U)),U},U.disable=function(){U.isEnabled&&(qs.filter(function(Ve){return Ve!==U&&Jo(Ve.target)}).length||an(K?j:a,"scroll",Qu),U.isPressed&&(U._vx.reset(),U._vy.reset(),an(W?a:j,ii[1],Ge,!0)),an(K?j:a,"scroll",pe,re),an(a,"wheel",be,re),an(a,ii[0],Le,re),an(j,ii[2],lt),an(j,ii[3],lt),an(a,"click",Z,!0),an(a,"click",yt),an(j,"gesturestart",O),an(j,"gestureend",se),an(a,Wr+"enter",ot),an(a,Wr+"leave",rt),an(a,Wr+"move",Oe),U.isEnabled=U.isPressed=U.isDragging=!1,I&&I(U))},U.kill=U.revert=function(){U.disable();var Ve=qs.indexOf(U);Ve>=0&&qs.splice(Ve,1),Ki===U&&(Ki=0)},qs.push(U),W&&Jo(a)&&(Ki=U),U.enable(g)},XT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();It.version="3.11.5";It.create=function(r){return new It(r)};It.register=Zg;It.getAll=function(){return qs.slice()};It.getById=function(r){return qs.filter(function(e){return e.vars.id===r})[0]};Yg()&&jt.registerPlugin(It);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ze,Bs,tt,vt,ai,bt,Jg,$l,Yl,Xs,Al,ll,Qt,pc,tf,un,pp,mp,ks,Qg,cu,e_,In,t_,n_,i_,lr,nf,Jf,uu,cl=1,hn=Date.now,fu=hn(),Jn=0,Go=0,YT=function r(){return Go&&requestAnimationFrame(r)},gp=function(){return pc=1},_p=function(){return pc=0},bi=function(e){return e},Ho=function(e){return Math.round(e*1e5)/1e5||0},r_=function(){return typeof window<"u"},s_=function(){return ze||r_()&&(ze=window.gsap)&&ze.registerPlugin&&ze},ps=function(e){return!!~Jg.indexOf(e)},o_=function(e){return Sr(e,"getBoundingClientRect")||(ps(e)?function(){return Il.width=tt.innerWidth,Il.height=tt.innerHeight,Il}:function(){return ji(e)})},jT=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Sr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?tt["inner"+s]:e["client"+s])||0}},KT=function(e,t){return!t||~Ui.indexOf(e)?o_(e):function(){return Il}},mr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Sr(e,n))?o()-o_(e)()[s]:ps(e)?(ai[n]||bt[n])-(tt["inner"+i]||ai["client"+i]||bt["client"+i]):e[n]-e["offset"+i])},ul=function(e,t){for(var n=0;n<ks.length;n+=3)(!t||~t.indexOf(ks[n+1]))&&e(ks[n],ks[n+1],ks[n+2])},si=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},Vo=function(e){return typeof e=="number"},Cl=function(e){return typeof e=="object"},Oo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},hu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Fs=Math.abs,a_="left",l_="top",Qf="right",eh="bottom",os="width",as="height",Qo="Right",ea="Left",ta="Top",na="Bottom",Et="padding",Yn="margin",So="Width",th="Height",Xt="px",fi=function(e){return tt.getComputedStyle(e)},ZT=function(e){var t=fi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},vp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ji=function(e,t){var n=t&&fi(e)[tf]!=="matrix(1, 0, 0, 1, 0, 0)"&&ze.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},rf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},c_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},JT=function(e){return function(t){return ze.utils.snap(c_(e),t)}},nh=function(e){var t=ze.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},QT=function(e){return function(t,n){return nh(c_(e))(t,n.direction)}},fl=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Ht=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Gt=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},hl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},xp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},dl={toggleActions:"play",anticipatePin:0},jl={top:0,left:0,center:.5,bottom:1,right:1},Pl=function(e,t){if(si(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in jl?jl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pl=function(e,t,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=vt.createElement("div"),g=ps(n)||Sr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?bt:n,b=e.indexOf("start")!==-1,S=b?c:u,v="border-color:"+S+";font-size:"+f+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===Ot?Qf:eh)+":"+(o+parseFloat(h))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=b,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Ll(_,0,i,b),_},Ll=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+So]=1,s["border"+a+So]=0,s[n.p]=t+"px",ze.set(e,s)},Je=[],sf={},ya,Mp=function(){return hn()-Jn>34&&(ya||(ya=requestAnimationFrame(Ji)))},Ns=function(){(!In||!In.isPressed||In.startX>bt.clientWidth)&&(et.cache++,In?ya||(ya=requestAnimationFrame(Ji)):Ji(),Jn||gs("scrollStart"),Jn=hn())},du=function(){i_=tt.innerWidth,n_=tt.innerHeight},Wo=function(){et.cache++,!Qt&&!e_&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!t_||i_!==tt.innerWidth||Math.abs(tt.innerHeight-n_)>tt.innerHeight*.25)&&$l.restart(!0)},ms={},eE=[],u_=function r(){return Gt(Qe,"scrollEnd",r)||Jr(!0)},gs=function(e){return ms[e]&&ms[e].map(function(t){return t()})||eE},Un=[],f_=function(e){for(var t=0;t<Un.length;t+=5)(!e||Un[t+4]&&Un[t+4].query===e)&&(Un[t].style.cssText=Un[t+1],Un[t].getBBox&&Un[t].setAttribute("transform",Un[t+2]||""),Un[t+3].uncache=1)},ih=function(e,t){var n;for(un=0;un<Je.length;un++)n=Je[un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&f_(t),t||gs("revert")},h_=function(e,t){et.cache++,(t||!Fn)&&et.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),si(e)&&(tt.history.scrollRestoration=Jf=e)},Fn,ls=0,Sp,tE=function(){if(Sp!==ls){var e=Sp=ls;requestAnimationFrame(function(){return e===ls&&Jr(!0)})}},Jr=function(e,t){if(Jn&&!e){Ht(Qe,"scrollEnd",u_);return}Fn=Qe.isRefreshing=!0,et.forEach(function(i){return pn(i)&&i.cacheID++&&(i.rec=i())});var n=gs("refreshInit");Qg&&Qe.sort(),t||ih(),et.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Je.slice(0).forEach(function(i){return i.refresh()}),Je.forEach(function(i,s){if(i._subPinOffset&&i.pin){var o=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[o];i.revert(!0,1),i.adjustPinSpacing(i.pin[o]-a),i.refresh()}}),Je.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,mr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),et.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),h_(Jf,1),$l.pause(),ls++,Fn=2,Ji(2),Je.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Fn=Qe.isRefreshing=!1,gs("refresh")},of=0,Rl=1,ia,Ji=function(e){if(!Fn||e===2){Qe.isUpdating=!0,ia&&ia.update(0);var t=Je.length,n=hn(),i=n-fu>=50,s=t&&Je[0].scroll();if(Rl=of>s?-1:1,Fn||(of=s),i&&(Jn&&!pc&&n-Jn>200&&(Jn=0,gs("scrollEnd")),Al=fu,fu=n),Rl<0){for(un=t;un-- >0;)Je[un]&&Je[un].update(0,i);Rl=1}else for(un=0;un<t;un++)Je[un]&&Je[un].update(0,i);Qe.isUpdating=!1}ya=0},af=[a_,l_,eh,Qf,Yn+na,Yn+Qo,Yn+ta,Yn+ea,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Dl=af.concat([os,as,"boxSizing","max"+So,"max"+th,"position",Yn,Et,Et+ta,Et+Qo,Et+na,Et+ea]),nE=function(e,t,n){ro(n);var i=e._gsap;if(i.spacerIsNative)ro(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},pu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=af.length,o=t.style,a=e.style,l;s--;)l=af[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[eh]=a[Qf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[os]=rf(e,dn)+Xt,o[as]=rf(e,Ot)+Xt,o[Et]=a[Yn]=a[l_]=a[a_]="0",ro(i),a[os]=a["max"+So]=n[os],a[as]=a["max"+th]=n[as],a[Et]=n[Et],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},iE=/([A-Z])/g,ro=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||ze.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(iE,"-$1").toLowerCase())}},ml=function(e){for(var t=Dl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Dl[s],n[Dl[s]]);return i.t=e,i},rE=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Il={left:0,top:0},yp=function(e,t,n,i,s,o,a,l,c,u,f,h,d){pn(e)&&(e=e(l)),si(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Pl("0"+e.substr(3),n):0));var _=d?d.time():0,g,m,p;if(d&&d.seek(0),Vo(e))d&&(e=ze.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Ll(a,n,i,!0);else{pn(t)&&(t=t(l));var b=(e||"0").split(" "),S,v,y,L;p=vn(t)||bt,S=ji(p)||{},(!S||!S.left&&!S.top)&&fi(p).display==="none"&&(L=p.style.display,p.style.display="block",S=ji(p),L?p.style.display=L:p.style.removeProperty("display")),v=Pl(b[0],S[i.d]),y=Pl(b[1]||"0",n),e=S[i.p]-c[i.p]-u+v+s-y,a&&Ll(a,y,i,n-y<20||a._isStart&&y>20),n-=n-y}if(o){var C=e+n,D=o._isStart;g="scroll"+i.d2,Ll(o,C,i,D&&C>20||!D&&(f?Math.max(bt[g],ai[g]):o.parentNode[g])<=C+1),f&&(c=ji(a),f&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Xt))}return d&&p&&(g=ji(p),d.seek(h),m=ji(p),d._caScrollDist=g[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},sE=/(webkit|moz|length|cssText|inset)/i,bp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===bt){e._stOrig=s.cssText,a=fi(e);for(o in a)!+o&&!sE.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;ze.core.getCache(e).uncache=1,t.appendChild(e)}},d_=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},wp=function(e,t){var n=Er(e,t),i="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,_={};c=c||n();var g=d_(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[i]=a,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,Ji()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=ze.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ht(e,"wheel",n.wheelHandler),Qe.isTouch&&Ht(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){Bs||r.register(ze)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Go){this.update=this.refresh=this.kill=bi;return}n=vp(si(n)||Vo(n)||n.nodeType?{trigger:n}:n,dl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,b=s.onSnapComplete,S=s.once,v=s.snap,y=s.pinReparent,L=s.pinSpacer,C=s.containerAnimation,D=s.fastScrollEnd,M=s.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:Ot,Y=!f&&f!==0,G=vn(n.scroller||tt),z=ze.core.getCache(G),H=ps(G),$=("pinType"in n?n.pinType:Sr(G,"pinType")||H&&"fixed")==="fixed",Q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=Y&&n.toggleActions.split(" "),W="markers"in n?n.markers:dl.markers,le=H?0:parseFloat(fi(G)["border"+T.p2+So])||0,R=this,ye=n.onRefreshInit&&function(){return n.onRefreshInit(R)},de=jT(G,H,T),I=KT(G,H),F=0,ne=0,re=Er(G,T),N,xe,Me,ue,Se,E,P,V,oe,ie,U,me,te,he,ce,w,x,B,K,j,fe,_e,ve,Z,Ae,Ne,Ue,Ce,we,Ge,Le,lt,O,se,pe,be,Oe,ot,rt;if(nf(R),R._dir=T,m*=45,R.scroller=G,R.scroll=C?C.time.bind(C):re,ue=re(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Qg=1,n.refreshPriority===-9999&&(ia=R)),z.tweenScroll=z.tweenScroll||{top:wp(G,Ot),left:wp(G,dn)},R.tweenTo=N=z.tweenScroll[T.p],R.scrubDuration=function(ge){lt=Vo(ge)&&ge,lt?Le?Le.duration(ge):Le=ze.to(i,{ease:"expo",totalProgress:"+=0.001",duration:lt,paused:!0,onComplete:function(){return p&&p(R)}}):(Le&&Le.progress(1).kill(),Le=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),Le&&Le.resetTo&&Le.resetTo("totalProgress",0),we=0,l||(l=i.vars.id)),Je.push(R),v&&((!Cl(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in bt.style&&ze.set(H?[bt,ai]:G,{scrollBehavior:"auto"}),et.forEach(function(ge){return pn(ge)&&ge.target===(H?vt.scrollingElement||ai:G)&&(ge.smooth=!1)}),Me=pn(v.snapTo)?v.snapTo:v.snapTo==="labels"?JT(i):v.snapTo==="labelsDirectional"?QT(i):v.directional!==!1?function(ge,Fe){return nh(v.snapTo)(ge,hn()-ne<500?0:Fe.direction)}:ze.utils.snap(v.snapTo),O=v.duration||{min:.1,max:2},O=Cl(O)?Xs(O.min,O.max):Xs(O,O),se=ze.delayedCall(v.delay||lt/2||.1,function(){var ge=re(),Fe=hn()-ne<500,He=N.tween;if((Fe||Math.abs(R.getVelocity())<10)&&!He&&!pc&&F!==ge){var Ye=(ge-E)/te,Ct=i&&!Y?i.totalProgress():Ye,at=Fe?0:(Ct-Ge)/(hn()-Al)*1e3||0,pt=ze.utils.clamp(-Ye,1-Ye,Fs(at/2)*at/.185),A=Ye+(v.inertia===!1?0:pt),q=Xs(0,1,Me(A,R)),J=Math.round(E+q*te),k=v,ae=k.onStart,Re=k.onInterrupt,Ie=k.onComplete;if(ge<=P&&ge>=E&&J!==ge){if(He&&!He._initted&&He.data<=Fs(J-ge))return;v.inertia===!1&&(pt=q-Ye),N(J,{duration:O(Fs(Math.max(Fs(A-Ct),Fs(q-Ct))*.185/at/.05||0)),ease:v.ease||"power3",data:Fs(J-ge),onInterrupt:function(){return se.restart(!0)&&Re&&Re(R)},onComplete:function(){R.update(),F=re(),we=Ge=i&&!Y?i.totalProgress():R.progress,b&&b(R),Ie&&Ie(R)}},ge,pt*te,J-ge-pt*te),ae&&ae(R,N.tween)}}else R.isActive&&F!==ge&&se.restart(!0)}).pause()),l&&(sf[l]=R),h=R.trigger=vn(h||d),rt=h&&h._gsap&&h._gsap.stRevert,rt&&(rt=rt(R)),d=d===!0?h:vn(d),si(a)&&(a={targets:h,className:a}),d&&(_===!1||_===Yn||(_=!_&&d.parentNode&&d.parentNode.style&&fi(d.parentNode).display==="flex"?!1:Et),R.pin=d,xe=ze.core.getCache(d),xe.spacer?he=xe.pinState:(L&&(L=vn(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),xe.spacerIsNative=!!L,L&&(xe.spacerState=ml(L))),xe.spacer=x=L||vt.createElement("div"),x.classList.add("pin-spacer"),l&&x.classList.add("pin-spacer-"+l),xe.pinState=he=ml(d)),n.force3D!==!1&&ze.set(d,{force3D:!0}),R.spacer=x=xe.spacer,Ce=fi(d),ve=Ce[_+T.os2],K=ze.getProperty(d),j=ze.quickSetter(d,T.a,Xt),pu(d,x,Ce),w=ml(d)),W){me=Cl(W)?vp(W,xp):xp,ie=pl("scroller-start",l,G,T,me,0),U=pl("scroller-end",l,G,T,me,0,ie),B=ie["offset"+T.op.d2];var yt=vn(Sr(G,"content")||G);V=this.markerStart=pl("start",l,yt,T,me,B,0,C),oe=this.markerEnd=pl("end",l,yt,T,me,B,0,C),C&&(ot=ze.quickSetter([V,oe],T.a,Xt)),!$&&!(Ui.length&&Sr(G,"fixedMarkers")===!0)&&(ZT(H?bt:G),ze.set([ie,U],{force3D:!0}),Ae=ze.quickSetter(ie,T.a,Xt),Ue=ze.quickSetter(U,T.a,Xt))}if(C){var Ve=C.vars.onUpdate,Pe=C.vars.onUpdateParams;C.eventCallback("onUpdate",function(){R.update(0,0,1),Ve&&Ve.apply(C,Pe||[])})}R.previous=function(){return Je[Je.indexOf(R)-1]},R.next=function(){return Je[Je.indexOf(R)+1]},R.revert=function(ge,Fe){if(!Fe)return R.kill(!0);var He=ge!==!1||!R.enabled,Ye=Qt;He!==R.isReverted&&(He&&(be=Math.max(re(),R.scroll.rec||0),pe=R.progress,Oe=i&&i.progress()),V&&[V,oe,ie,U].forEach(function(Ct){return Ct.style.display=He?"none":"block"}),He&&(Qt=R,R.update(He)),d&&(!y||!R.isActive)&&(He?nE(d,x,he):pu(d,x,fi(d),Z)),He||R.update(He),Qt=Ye,R.isReverted=He)},R.refresh=function(ge,Fe){if(!((Qt||!R.enabled)&&!Fe)){if(d&&ge&&Jn){Ht(r,"scrollEnd",u_);return}!Fn&&ye&&ye(R),Qt=R,ne=hn(),N.tween&&(N.tween.kill(),N.tween=0),Le&&Le.pause(),g&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;for(var He=de(),Ye=I(),Ct=C?C.duration():mr(G,T),at=te<=.01,pt=0,A=0,q=n.end,J=n.endTrigger||h,k=n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),ae=R.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer),Re=h&&Math.max(0,Je.indexOf(R))||0,Ie=Re,De,ke,$e,qe,Be,We,ht,sn,xi,dt,Xe;Ie--;)We=Je[Ie],We.end||We.refresh(0,1)||(Qt=R),ht=We.pin,ht&&(ht===h||ht===d||ht===ae)&&!We.isReverted&&(dt||(dt=[]),dt.unshift(We),We.revert(!0,!0)),We!==Je[Ie]&&(Re--,Ie--);for(pn(k)&&(k=k(R)),E=yp(k,h,He,T,re(),V,ie,R,Ye,le,$,Ct,C)||(d?-.001:0),pn(q)&&(q=q(R)),si(q)&&!q.indexOf("+=")&&(~q.indexOf(" ")?q=(si(k)?k.split(" ")[0]:"")+q:(pt=Pl(q.substr(2),He),q=si(k)?k:(C?ze.utils.mapRange(0,C.duration(),C.scrollTrigger.start,C.scrollTrigger.end,E):E)+pt,J=h)),P=Math.max(E,yp(q||(J?"100% 0":Ct),J,He,T,re()+pt,oe,U,R,Ye,le,$,Ct,C))||-.001,te=P-E||(E-=.01)&&.001,pt=0,Ie=Re;Ie--;)We=Je[Ie],ht=We.pin,ht&&We.start-We._pinPush<=E&&!C&&We.end>0&&(De=We.end-We.start,(ht===h&&We.start-We._pinPush<E||ht===ae)&&!Vo(k)&&(pt+=De*(1-We.progress)),ht===d&&(A+=De));if(E+=pt,P+=pt,at&&(pe=ze.utils.clamp(0,1,ze.utils.normalize(E,P,be))),R._pinPush=A,V&&pt&&(De={},De[T.a]="+="+pt,ae&&(De[T.p]="-="+re()),ze.set([V,oe],De)),d)De=fi(d),qe=T===Ot,$e=re(),fe=parseFloat(K(T.a))+A,!Ct&&P>1&&(Xe=(H?vt.scrollingElement||ai:G).style,Xe={style:Xe,value:Xe["overflow"+T.a.toUpperCase()]},Xe.style["overflow"+T.a.toUpperCase()]="scroll"),pu(d,x,De),w=ml(d),ke=ji(d,!0),sn=$&&Er(G,qe?dn:Ot)(),_&&(Z=[_+T.os2,te+A+Xt],Z.t=x,Ie=_===Et?rf(d,T)+te+A:0,Ie&&Z.push(T.d,Ie+Xt),ro(Z),ae&&Je.forEach(function(zi){zi.pin===ae&&zi.vars.pinSpacing!==!1&&(zi._subPinOffset=!0)}),$&&re(be)),$&&(Be={top:ke.top+(qe?$e-E:sn)+Xt,left:ke.left+(qe?sn:$e-E)+Xt,boxSizing:"border-box",position:"fixed"},Be[os]=Be["max"+So]=Math.ceil(ke.width)+Xt,Be[as]=Be["max"+th]=Math.ceil(ke.height)+Xt,Be[Yn]=Be[Yn+ta]=Be[Yn+Qo]=Be[Yn+na]=Be[Yn+ea]="0",Be[Et]=De[Et],Be[Et+ta]=De[Et+ta],Be[Et+Qo]=De[Et+Qo],Be[Et+na]=De[Et+na],Be[Et+ea]=De[Et+ea],ce=rE(he,Be,y),Fn&&re(0)),i?(xi=i._initted,cu(1),i.render(i.duration(),!0,!0),_e=K(T.a)-fe+te+A,Ne=Math.abs(te-_e)>1,$&&Ne&&ce.splice(ce.length-2,2),i.render(0,!0,!0),xi||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),cu(0)):_e=te,Xe&&(Xe.value?Xe.style["overflow"+T.a.toUpperCase()]=Xe.value:Xe.style.removeProperty("overflow-"+T.a));else if(h&&re()&&!C)for(ke=h.parentNode;ke&&ke!==bt;)ke._pinOffset&&(E-=ke._pinOffset,P-=ke._pinOffset),ke=ke.parentNode;dt&&dt.forEach(function(zi){return zi.revert(!1,!0)}),R.start=E,R.end=P,ue=Se=Fn?be:re(),!C&&!Fn&&(ue<be&&re(be),R.scroll.rec=0),R.revert(!1,!0),se&&(F=-1,R.isActive&&re(E+te*pe),se.restart(!0)),Qt=0,i&&Y&&(i._initted||Oe)&&i.progress()!==Oe&&i.progress(Oe,!0).render(i.time(),!0,!0),(at||pe!==R.progress||C)&&(i&&!Y&&i.totalProgress(C&&E<-.001&&!pe?ze.utils.normalize(E,P,0):pe,!0),R.progress=(ue-E)/te===pe?0:pe),d&&_&&(x._pinOffset=Math.round(R.progress*_e)),Le&&Le.invalidate(),u&&!Fn&&u(R)}},R.getVelocity=function(){return(re()-Se)/(hn()-Al)*1e3||0},R.endAnimation=function(){Oo(R.callbackAnimation),i&&(Le?Le.progress(1):i.paused()?Y||Oo(i,R.direction<0,1):Oo(i,i.reversed()))},R.labelToScroll=function(ge){return i&&i.labels&&(E||R.refresh()||E)+i.labels[ge]/i.duration()*te||0},R.getTrailing=function(ge){var Fe=Je.indexOf(R),He=R.direction>0?Je.slice(0,Fe).reverse():Je.slice(Fe+1);return(si(ge)?He.filter(function(Ye){return Ye.vars.preventOverlaps===ge}):He).filter(function(Ye){return R.direction>0?Ye.end<=E:Ye.start>=P})},R.update=function(ge,Fe,He){if(!(C&&!He&&!ge)){var Ye=Fn===!0?be:R.scroll(),Ct=ge?0:(Ye-E)/te,at=Ct<0?0:Ct>1?1:Ct||0,pt=R.progress,A,q,J,k,ae,Re,Ie,De;if(Fe&&(Se=ue,ue=C?re():Ye,v&&(Ge=we,we=i&&!Y?i.totalProgress():at)),m&&!at&&d&&!Qt&&!cl&&Jn&&E<Ye+(Ye-Se)/(hn()-Al)*m&&(at=1e-4),at!==pt&&R.enabled){if(A=R.isActive=!!at&&at<1,q=!!pt&&pt<1,Re=A!==q,ae=Re||!!at!=!!pt,R.direction=at>pt?1:-1,R.progress=at,ae&&!Qt&&(J=at&&!pt?0:at===1?1:pt===1?2:3,Y&&(k=!Re&&X[J+1]!=="none"&&X[J+1]||X[J],De=i&&(k==="complete"||k==="reset"||k in i))),M&&(Re||De)&&(De||f||!i)&&(pn(M)?M(R):R.getTrailing(M).forEach(function(Be){return Be.endAnimation()})),Y||(Le&&!Qt&&!cl?(Le._dp._time-Le._start!==Le._time&&Le.render(Le._dp._time-Le._start),Le.resetTo?Le.resetTo("totalProgress",at,i._tTime/i._tDur):(Le.vars.totalProgress=at,Le.invalidate().restart())):i&&i.totalProgress(at,!!Qt)),d){if(ge&&_&&(x.style[_+T.os2]=ve),!$)j(Ho(fe+_e*at));else if(ae){if(Ie=!ge&&at>pt&&P+1>Ye&&Ye+1>=mr(G,T),y)if(!ge&&(A||Ie)){var ke=ji(d,!0),$e=Ye-E;bp(d,bt,ke.top+(T===Ot?$e:0)+Xt,ke.left+(T===Ot?0:$e)+Xt)}else bp(d,x);ro(A||Ie?ce:w),Ne&&at<1&&A||j(fe+(at===1&&!Ie?_e:0))}}v&&!N.tween&&!Qt&&!cl&&se.restart(!0),a&&(Re||S&&at&&(at<1||!uu))&&Yl(a.targets).forEach(function(Be){return Be.classList[A||S?"add":"remove"](a.className)}),o&&!Y&&!ge&&o(R),ae&&!Qt?(Y&&(De&&(k==="complete"?i.pause().totalProgress(1):k==="reset"?i.restart(!0).pause():k==="restart"?i.restart(!0):i[k]()),o&&o(R)),(Re||!uu)&&(c&&Re&&hu(R,c),Q[J]&&hu(R,Q[J]),S&&(at===1?R.kill(!1,1):Q[J]=0),Re||(J=at===1?1:3,Q[J]&&hu(R,Q[J]))),D&&!A&&Math.abs(R.getVelocity())>(Vo(D)?D:2500)&&(Oo(R.callbackAnimation),Le?Le.progress(1):Oo(i,k==="reverse"?1:!at,1))):Y&&o&&!Qt&&o(R)}if(Ue){var qe=C?Ye/C.duration()*(C._caScrollDist||0):Ye;Ae(qe+(ie._isFlipped?1:0)),Ue(qe)}ot&&ot(-Ye/C.duration()*(C._caScrollDist||0))}},R.enable=function(ge,Fe){R.enabled||(R.enabled=!0,Ht(G,"resize",Wo),Ht(H?vt:G,"scroll",Ns),ye&&Ht(r,"refreshInit",ye),ge!==!1&&(R.progress=pe=0,ue=Se=F=re()),Fe!==!1&&R.refresh())},R.getTween=function(ge){return ge&&N?N.tween:Le},R.setPositions=function(ge,Fe){d&&(fe+=ge-E,_e+=Fe-ge-te,_===Et&&R.adjustPinSpacing(Fe-ge-te)),R.start=E=ge,R.end=P=Fe,te=Fe-ge,R.update()},R.adjustPinSpacing=function(ge){if(Z&&ge){var Fe=Z.indexOf(T.d)+1;Z[Fe]=parseFloat(Z[Fe])+ge+Xt,Z[1]=parseFloat(Z[1])+ge+Xt,ro(Z)}},R.disable=function(ge,Fe){if(R.enabled&&(ge!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Fe||Le&&Le.pause(),be=0,xe&&(xe.uncache=1),ye&&Gt(r,"refreshInit",ye),se&&(se.pause(),N.tween&&N.tween.kill()&&(N.tween=0)),!H)){for(var He=Je.length;He--;)if(Je[He].scroller===G&&Je[He]!==R)return;Gt(G,"resize",Wo),Gt(G,"scroll",Ns)}},R.kill=function(ge,Fe){R.disable(ge,Fe),Le&&!Fe&&Le.kill(),l&&delete sf[l];var He=Je.indexOf(R);He>=0&&Je.splice(He,1),He===un&&Rl>0&&un--,He=0,Je.forEach(function(Ye){return Ye.scroller===R.scroller&&(He=1)}),He||Fn||(R.scroll.rec=0),i&&(i.scrollTrigger=null,ge&&i.revert({kill:!1}),Fe||i.kill()),V&&[V,oe,ie,U].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),ia===R&&(ia=0),d&&(xe&&(xe.uncache=1),He=0,Je.forEach(function(Ye){return Ye.pin===d&&He++}),He||(xe.spacer=0)),n.onKill&&n.onKill(R)},R.enable(!1,!1),rt&&rt(R),!i||!i.add||te?R.refresh():ze.delayedCall(.01,function(){return E||P||R.refresh()})&&(te=.01)&&(E=P=0),d&&tE()},r.register=function(n){return Bs||(ze=n||s_(),r_()&&window.document&&r.enable(),Bs=Go),Bs},r.defaults=function(n){if(n)for(var i in n)dl[i]=n[i];return dl},r.disable=function(n,i){Go=0,Je.forEach(function(o){return o[i?"kill":"disable"](n)}),Gt(tt,"wheel",Ns),Gt(vt,"scroll",Ns),clearInterval(ll),Gt(vt,"touchcancel",bi),Gt(bt,"touchstart",bi),fl(Gt,vt,"pointerdown,touchstart,mousedown",gp),fl(Gt,vt,"pointerup,touchend,mouseup",_p),$l.kill(),ul(Gt);for(var s=0;s<et.length;s+=3)hl(Gt,et[s],et[s+1]),hl(Gt,et[s],et[s+2])},r.enable=function(){if(tt=window,vt=document,ai=vt.documentElement,bt=vt.body,ze&&(Yl=ze.utils.toArray,Xs=ze.utils.clamp,nf=ze.core.context||bi,cu=ze.core.suppressOverwrites||bi,Jf=tt.history.scrollRestoration||"auto",of=tt.pageYOffset,ze.core.globals("ScrollTrigger",r),bt)){Go=1,YT(),It.register(ze),r.isTouch=It.isTouch,lr=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ht(tt,"wheel",Ns),Jg=[tt,vt,ai,bt],ze.matchMedia?(r.matchMedia=function(l){var c=ze.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},ze.addEventListener("matchMediaInit",function(){return ih()}),ze.addEventListener("matchMediaRevert",function(){return f_()}),ze.addEventListener("matchMedia",function(){Jr(0,1),gs("matchMedia")}),ze.matchMedia("(orientation: portrait)",function(){return du(),du})):console.warn("Requires GSAP 3.11.0 or later"),du(),Ht(vt,"scroll",Ns);var n=bt.style,i=n.borderTopStyle,s=ze.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=ji(bt),Ot.m=Math.round(o.top+Ot.sc())||0,dn.m=Math.round(o.left+dn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),ll=setInterval(Mp,250),ze.delayedCall(.5,function(){return cl=0}),Ht(vt,"touchcancel",bi),Ht(bt,"touchstart",bi),fl(Ht,vt,"pointerdown,touchstart,mousedown",gp),fl(Ht,vt,"pointerup,touchend,mouseup",_p),tf=ze.utils.checkPrefix("transform"),Dl.push(tf),Bs=hn(),$l=ze.delayedCall(.2,Jr).pause(),ks=[vt,"visibilitychange",function(){var l=tt.innerWidth,c=tt.innerHeight;vt.hidden?(pp=l,mp=c):(pp!==l||mp!==c)&&Wo()},vt,"DOMContentLoaded",Jr,tt,"load",Jr,tt,"resize",Wo],ul(Ht),Je.forEach(function(l){return l.enable(0,1)}),a=0;a<et.length;a+=3)hl(Gt,et[a],et[a+1]),hl(Gt,et[a],et[a+2])}},r.config=function(n){"limitCallbacks"in n&&(uu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ll)||(ll=i)&&setInterval(Mp,i),"ignoreMobileResize"in n&&(t_=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ul(Gt)||ul(Ht,n.autoRefreshEvents||"none"),e_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=et.indexOf(s),a=ps(s);~o&&et.splice(o,a?6:2),i&&(a?Ui.unshift(tt,i,bt,i,ai,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){Je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(si(n)?vn(n):n).getBoundingClientRect(),a=o[s?os:as]*i||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},r.positionInViewport=function(n,i,s){si(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?os:as],l=i==null?a/2:i in jl?jl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},r.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ms.killAll||[];ms={},i.forEach(function(s){return s()})}},r}();Qe.version="3.11.5";Qe.saveStyles=function(r){return r?Yl(r).forEach(function(e){if(e&&e.style){var t=Un.indexOf(e);t>=0&&Un.splice(t,5),Un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ze.core.getCache(e),nf())}}):Un};Qe.revert=function(r,e){return ih(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Wo():(Bs||Qe.register())&&Jr(!0)};Qe.update=function(r){return++et.cache&&Ji(r===!0?2:0)};Qe.clearScrollMemory=h_;Qe.maxScroll=function(r,e){return mr(r,e?dn:Ot)};Qe.getScrollFunc=function(r,e){return Er(vn(r),e?dn:Ot)};Qe.getById=function(r){return sf[r]};Qe.getAll=function(){return Je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Jn};Qe.snapDirectional=nh;Qe.addEventListener=function(r,e){var t=ms[r]||(ms[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=ms[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=ze.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return pn(s)&&(s=s(),Ht(Qe,"refresh",function(){return s=e.batchMax()})),Yl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var Tp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},mu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===ai&&r(bt,t)},gl={auto:1,scroll:1},oE=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||ze.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gl[(l=fi(s)).overflowY]||gl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ps(s)&&(gl[(l=fi(s)).overflowY]||gl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},p_=function(e,t,n,i){return It.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&oE,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ht(vt,It.eventTypes[0],Ap,!1,!0)},onDisable:function(){return Gt(vt,It.eventTypes[0],Ap,!0)}})},aE=/(input|label|select|textarea)/i,Ep,Ap=function(e){var t=aE.test(e.target.tagName);(t||Ep)&&(e._gsapAllow=!0,Ep=t)},lE=function(e){Cl(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=vn(e.target)||ai,u=ze.core.globals().ScrollSmoother,f=u&&u.get(),h=lr&&(e.content&&vn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Er(c,Ot),_=Er(c,dn),g=1,m=(It.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,b=pn(i)?function(){return i(a)}:function(){return i||2.8},S,v,y=p_(c,e.type,!0,s),L=function(){return v=!1},C=bi,D=bi,M=function(){l=mr(c,Ot),D=Xs(lr?1:0,l),n&&(C=Xs(0,mr(c,dn))),S=ls},T=function(){h._gsap.y=Ho(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},Y=function(){if(v){requestAnimationFrame(L);var W=Ho(a.deltaY/2),le=D(d.v-W);if(h&&le!==d.v+d.offset){d.offset=le-d.v;var R=Ho((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=et.cache,Ji()}return!0}d.offset&&T(),v=!0},G,z,H,$,Q=function(){M(),G.isActive()&&G.vars.scrollY>l&&(d()>l?G.progress(1)&&d(l):G.resetTo("scrollY",l))};return h&&ze.set(h,{y:"+=0"}),e.ignoreCheck=function(X){return lr&&X.type==="touchmove"&&Y()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){v=!1;var X=g;g=Ho((tt.visualViewport&&tt.visualViewport.scale||1)/m),G.pause(),X!==g&&mu(c,g>1.01?!0:n?!1:"x"),z=_(),H=d(),M(),S=ls},e.onRelease=e.onGestureStart=function(X,W){if(d.offset&&T(),!W)$.restart(!0);else{et.cache++;var le=b(),R,ye;n&&(R=_(),ye=R+le*.05*-X.velocityX/.227,le*=Tp(_,R,ye,mr(c,dn)),G.vars.scrollX=C(ye)),R=d(),ye=R+le*.05*-X.velocityY/.227,le*=Tp(d,R,ye,mr(c,Ot)),G.vars.scrollY=D(ye),G.invalidate().duration(le).play(.01),(lr&&G.vars.scrollY>=l||R>=l-1)&&ze.to({},{onUpdate:Q,duration:le})}o&&o(X)},e.onWheel=function(){G._ts&&G.pause(),hn()-p>1e3&&(S=0,p=hn())},e.onChange=function(X,W,le,R,ye){if(ls!==S&&M(),W&&n&&_(C(R[2]===W?z+(X.startX-X.x):_()+W-R[1])),le){d.offset&&T();var de=ye[2]===le,I=de?H+X.startY-X.y:d()+le-ye[1],F=D(I);de&&I!==F&&(H+=F-I),d(F)}(le||W)&&Ji()},e.onEnable=function(){mu(c,n?!1:"x"),Qe.addEventListener("refresh",Q),Ht(tt,"resize",Q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),y.enable()},e.onDisable=function(){mu(c,!0),Gt(tt,"resize",Q),Qe.removeEventListener("refresh",Q),y.kill()},e.lockAxis=e.lockAxis!==!1,a=new It(e),a.iOS=lr,lr&&!d()&&d(1),lr&&ze.ticker.add(bi),$=a._dc,G=ze.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:d_(d,d(),function(){return G.pause()})},onUpdate:Ji,onComplete:$.vars.onComplete}),a};Qe.sort=function(r){return Je.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new It(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return In;if(r===!0&&In)return In.enable();if(r===!1)return In&&In.kill();var e=r instanceof It?r:lE(r);return In&&In.target===e.target&&In.kill(),ps(e.target)&&(In=e),e};Qe.core={_getVelocityProp:ef,_inputObserver:p_,_scrollers:et,_proxies:Ui,bridge:{ss:function(){Jn||gs("scrollStart"),Jn=hn()},ref:function(){return Qt}}};s_()&&ze.registerPlugin(Qe);const cE=_m('<div class="card cursor-scale" data-v-8de66a26><div class="index" data-v-8de66a26>00</div><div class="text" data-v-8de66a26><h2 data-v-8de66a26>Nahuel Silva portfolio</h2><p data-v-8de66a26>Sitio web desarrollado en Vue, utilizando Three.js para los efectos 3d, Greensock y ScrollMagic para el resto de animaciones, locomotiveScroll para el smoth scroll. </p><div class="btn disabled" data-v-8de66a26>Ver en github</div></div></div><div class="card cursor-scale" data-v-8de66a26><div class="index" data-v-8de66a26>01</div><div class="text" data-v-8de66a26><h2 data-v-8de66a26>Silverwolf store</h2><p data-v-8de66a26>Este ecommerce fue desarrollado en Angular el frontend y la API en NodeJs, utiliza MongoDB como BD y socket-io para algunas peticiones.</p><a class="btn" href="https://silverwolfstore.uy" target="_blank" data-v-8de66a26>Visitar sitio</a></div></div><div class="card cursor-scale" data-v-8de66a26><div class="index" data-v-8de66a26>02</div><div class="text" data-v-8de66a26><h2 data-v-8de66a26>Silverwolf motores</h2><p data-v-8de66a26>Sitio web desarrollado para un taller de bobinados de motores, Instalaciones de portones e instalaciones electricas, fue desarrollado en Vue y de conecta al ecommerce mediante su API</p><a class="btn" href="https://swmotores.com" target="_blank" data-v-8de66a26>Visitar sitio</a></div></div>',3),uE=Vn({__name:"WorkCard",setup(r){return _s(()=>{ss.registerPlugin(Qe),Qe.batch(".card",{toggleClass:"fade",once:!1})}),(e,t)=>cE}});const fE=vi(uE,[["__scopeId","data-v-8de66a26"]]),lf="/portfolio/assets/logo-17f968f9.webp",m_=r=>(Ar("data-v-8a259662"),r=r(),Cr(),r),hE={class:"portfolio",id:"portfolio"},dE=["src"],pE={class:"container"},mE=m_(()=>Ee("p",{class:"function cursor-scale"},"Proyectos(){",-1)),gE=m_(()=>Ee("p",{class:"function cursor-scale"},"}",-1)),_E=["src"],vE=_m('<div class="animation-wrapper-rotated" data-v-8a259662><div class="horizontal-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5" data-scroll-delay="0.05" data-scroll-target="#portfolio" data-v-8a259662><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span></div></div><div class="horizontal-text" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5" data-scroll-delay="0.05" data-scroll-target="#portfolio" data-v-8a259662><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span></div><div class="horizontal-text bottom" data-scroll data-scroll-direction="horizontal" data-scroll-speed="5" data-scroll-delay="0.15" data-scroll-target="#portfolio" data-v-8a259662><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span><span data-v-8a259662>_</span><span data-v-8a259662>COFFE</span><span data-v-8a259662>_</span><span data-v-8a259662>CODING</span><span data-v-8a259662>_</span><span data-v-8a259662>!SLEEP</span></div>',3),xE=Vn({__name:"Portfolio",setup(r){return _s(()=>{ss.registerPlugin(Qe),ss.from(".horizontal-text",{x:-2e3,ease:"",scrollTrigger:{trigger:".horizontal-text",scrub:1,start:"top top",end:"+=300%"}}),ss.to(".horizontal-text",{x:0,ease:"",scrollTrigger:{trigger:".horizontal-text",scrub:1,start:"top top",end:"+=300%"}})}),(e,t)=>(Fi(),Ni("div",hE,[Ee("img",{src:Lt(lf),alt:"",class:"logo-bg"},null,8,dE),Ee("div",pE,[mE,Vt(fE),gE]),Ee("img",{src:Lt(lf),alt:"",class:"logo-bg"},null,8,_E),vE]))}});const ME=vi(xE,[["__scopeId","data-v-8a259662"]]),SE=Vn({name:"TorusAnimation",mounted(){const r=this.$refs.canvas,e=new Wm,t=new If(24,7,16,40),n=new lc({color:8476159,wireframe:!0}),i=new Li(t,n);e.add(i);const s=new Nn(75,this.$el.parentNode.offsetWidth/this.$el.parentNode.offsetHeight,.1,1e3);s.position.z=50;const o=new Df({canvas:r,alpha:!0,antialias:!0});o.setClearColor(0,0),o.setSize(this.$el.parentNode.offsetWidth,this.$el.parentNode.offsetHeight);function a(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(u=>navigator.userAgent.match(u))}i.rotation.y=-.3,i.rotation.x+=-1,i.position.x=0,i.position.y=6,l();function l(){a()&&(i.rotation.z+=1e-4*9),requestAnimationFrame(l),o.render(e,s)}window.addEventListener("resize",()=>{const c=this.$el.parentNode.offsetWidth,u=this.$el.parentNode.offsetHeight;s.aspect=c/u,s.updateProjectionMatrix(),o.setSize(c,u)}),a()||window.addEventListener("mousemove",c=>{i.rotation.z=c.clientX/5e3,i.rotation.y=5.9+c.clientY/5e3,s.updateProjectionMatrix()})}}),yE={ref:"canvas"};function bE(r,e,t,n,i,s){return Fi(),Ni("canvas",yE,null,512)}const wE=vi(SE,[["render",bE]]),TE="/portfolio/assets/Nahuel_Silva-5e36226c.pdf",La=r=>(Ar("data-v-f1b09ffb"),r=r(),Cr(),r),EE={class:"about-me",id:"about"},AE={class:"container"},CE={class:"text cursor-scale"},PE=La(()=>Ee("p",{class:"function"},"<>",-1)),LE=La(()=>Ee("p",null,"¡Hola! Mi nombre es Nahuel Silva y tengo 22 años. Actualmente me desempeño como desarrollador web frontend en una multinacional, aunque siempre estoy abierto a nuevas oportunidades laborales.",-1)),RE=La(()=>Ee("p",null,"Me considero una persona proactiva y entusiasta por aprender sobre nuevas tecnologías y profundizar en su funcionamiento. Me encanta ser autodidacta y aplicar todo lo que aprendo en la práctica. En cada aplicación que desarrollo, mi objetivo es lograr el mejor rendimiento posible en todas las plataformas. ",-1)),DE=La(()=>Ee("p",null,[Yr("Estoy comprometido con brindar soluciones creativas y eficientes a los desafíos que se presentan en mi trabajo. Me apasiona trabajar en equipo y colaborar para alcanzar los objetivos planteados. ¡Si tienes alguna propuesta interesante, no dudes en "),Ee("a",{href:"mailto:nahuel.silva008@gmail.com?Subject=Tenemos%20una%20propuesta%20para%20ti&Body=Hola%20Nahuel,%20nos%20intereso%20tu%20perfil%20y%20queremos..."},"contactarme"),Yr("!")],-1)),IE=["href"],UE=La(()=>Ee("p",{class:"function"},"</>",-1)),OE=Vn({__name:"About",setup(r){return(e,t)=>(Fi(),Ni("div",EE,[Ee("div",AE,[Ee("div",CE,[PE,LE,RE,DE,Ee("a",{class:"btn",href:Lt(TE),download:"Nahuel_Silva"},"Descargar CV",8,IE),UE])]),Vt(wE,{class:"background"})]))}});const FE=vi(OE,[["__scopeId","data-v-f1b09ffb"]]),NE="/portfolio/assets/logo-linkedin-300b09e4.svg",zE="/portfolio/assets/logo-github-f68a78c2.svg",BE="/portfolio/assets/mail-20ca94ac.svg",kE="/portfolio/assets/logo-codepen-6c7566b5.svg",GE=r=>(Ar("data-v-f2950df5"),r=r(),Cr(),r),HE={class:"contact",id:"contact"},VE={class:"container"},WE=GE(()=>Ee("a",{class:"yellow cursor-scale",href:"mailto:nahuel.silva008@gmail.com?Subject=Tenemos%20una%20propuesta%20para%20ti&Body=Hola%20Nahuel,%20nos%20intereso%20tu%20perfil%20y%20queremos..."},"mail();",-1)),qE={class:"social"},XE={class:"cursor-scale"},$E={href:"https://www.linkedin.com/in/nahuel--silva/",target:"_blank"},YE=["src"],jE={class:"cursor-scale"},KE={href:"https://github.com/nahuels-dev",target:"_blank"},ZE=["src"],JE={class:"cursor-scale"},QE={href:"mailto:nahuel.silva008@gmail.com?Subject=Tenemos%20una%20propuesta%20para%20ti&Body=Hola%20Nahuel,%20nos%20intereso%20tu%20perfil%20y%20queremos..."},eA=["src"],tA={class:"cursor-scale"},nA={href:"https://codepen.io/nahuel_s",target:"_blank"},iA=["src"],rA={class:"logo"},sA=["src"],oA=Vn({__name:"Contact",setup(r){return(e,t)=>(Fi(),Ni("div",HE,[Ee("div",VE,[WE,Ee("ul",qE,[Ee("li",XE,[Ee("a",$E,[Ee("img",{src:Lt(NE),alt:""},null,8,YE)])]),Ee("li",jE,[Ee("a",KE,[Ee("img",{src:Lt(zE),alt:""},null,8,ZE)])]),Ee("li",JE,[Ee("a",QE,[Ee("img",{src:Lt(BE),alt:""},null,8,eA)])]),Ee("li",tA,[Ee("a",nA,[Ee("img",{src:Lt(kE),alt:""},null,8,iA)])])]),Ee("div",rA,[Ee("img",{src:Lt(lf),alt:""},null,8,sA)])])]))}});const aA=vi(oA,[["__scopeId","data-v-f2950df5"]]),lA=r=>(Ar("data-v-ec17e43b"),r=r(),Cr(),r),cA=lA(()=>Ee("div",{class:"dots cursor-scale"},[Ee("div"),Ee("div"),Ee("div")],-1)),uA={class:"percentage cursor-scale"},fA=Vn({computed:{prcLoad(){return this.loaded=="100%"&&(document.body.style.overflowY="auto",setTimeout(()=>{var r;(r=document.querySelector(".loader"))==null||r.remove()},1500)),this.loaded}}}),hA=Vn({...fA,__name:"LoaderScreen",setup(r){return _s(()=>{document.body.style.overflowY="hidden"}),(e,t)=>(Fi(),Ni("div",{class:hi(["loader",e.prcLoad.toString()=="100%"?"fadeOut":""]),ref:"loader"},[cA,Ee("div",uA,w_(e.prcLoad),1)],2))}});const dA=vi(hA,[["__scopeId","data-v-ec17e43b"]]),pA=r=>(Ar("data-v-7cce4be1"),r=r(),Cr(),r),mA=pA(()=>Ee("div",{class:"cursor"},null,-1)),gA={"data-scroll-container":""},_A=Vn({__name:"App",setup(r){return _s(()=>{function e(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(a=>navigator.userAgent.match(a))}var t=document.querySelector(".cursor"),n=document.querySelectorAll(".cursor-scale"),i=0,s=0;e()&&(t.style.display="none"),ss.to({},.016,{repeat:-1,onRepeat:function(){ss.set(t,{css:{left:i,top:s}})}}),window.addEventListener("mousemove",function(o){i=o.clientX,s=o.clientY}),n.forEach(o=>{o.addEventListener("mouseleave",()=>{t.classList.remove("grow")}),o.addEventListener("mousemove",()=>{t.classList.add("grow")})})}),(e,t)=>(Fi(),Ni(wi,null,[mA,Vt(dA),Ee("div",gA,[Vt(Dw),Vt(gw),Vt(ME),Vt(FE),Vt(aA)])],64))}});const vA=vi(_A,[["__scopeId","data-v-7cce4be1"]]),xA={created(){let r=window.performance.timing,e=Math.abs(r.loadEventEnd-r.navigationStart);this.loadTime=e/1e3%60*100,this.doProgress()},methods:{doProgress(){let r=this.loadTime/100;this.interval=setInterval(()=>{this.loadingPercent++},r)}},computed:{loaded(){return this.loadingPercent+"%"}},watch:{loadingPercent(r){r>=100&&clearInterval(this.interval)}},data(){return{loadingPercent:0,loadTime:0,interval:null}}};const g_=Hv(vA);g_.mixin(xA);g_.mount("#app");
