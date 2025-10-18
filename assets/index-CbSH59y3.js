(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function nv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Nf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function BS(){if(Qg)return vo;Qg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return vo.Fragment=e,vo.jsx=i,vo.jsxs=i,vo}var Jg;function IS(){return Jg||(Jg=1,Nf.exports=BS()),Nf.exports}var $i=IS(),Of={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function FS(){if($g)return le;$g=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=x&&O[x]||O["@@iterator"],typeof O=="function"?O:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function _(O,et,xt){this.props=O,this.context=et,this.refs=M,this.updater=xt||A}_.prototype.isReactComponent={},_.prototype.setState=function(O,et){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,et,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function I(){}I.prototype=_.prototype;function z(O,et,xt){this.props=O,this.context=et,this.refs=M,this.updater=xt||A}var D=z.prototype=new I;D.constructor=z,C(D,_.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function H(){}var B={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function R(O,et,xt){var bt=xt.ref;return{$$typeof:o,type:O,key:et,ref:bt!==void 0?bt:null,props:xt}}function w(O,et){return R(O.type,et,O.props)}function G(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function nt(O){var et={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(xt){return et[xt]})}var lt=/\/+/g;function mt(O,et){return typeof O=="object"&&O!==null&&O.key!=null?nt(""+O.key):et.toString(36)}function ft(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(H,H):(O.status="pending",O.then(function(et){O.status==="pending"&&(O.status="fulfilled",O.value=et)},function(et){O.status==="pending"&&(O.status="rejected",O.reason=et)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function N(O,et,xt,bt,Ut){var $=typeof O;($==="undefined"||$==="boolean")&&(O=null);var ot=!1;if(O===null)ot=!0;else switch($){case"bigint":case"string":case"number":ot=!0;break;case"object":switch(O.$$typeof){case o:case e:ot=!0;break;case S:return ot=O._init,N(ot(O._payload),et,xt,bt,Ut)}}if(ot)return Ut=Ut(O),ot=bt===""?"."+mt(O,0):bt,V(Ut)?(xt="",ot!=null&&(xt=ot.replace(lt,"$&/")+"/"),N(Ut,et,xt,"",function(At){return At})):Ut!=null&&(G(Ut)&&(Ut=w(Ut,xt+(Ut.key==null||O&&O.key===Ut.key?"":(""+Ut.key).replace(lt,"$&/")+"/")+ot)),et.push(Ut)),1;ot=0;var Dt=bt===""?".":bt+":";if(V(O))for(var It=0;It<O.length;It++)bt=O[It],$=Dt+mt(bt,It),ot+=N(bt,et,xt,$,Ut);else if(It=y(O),typeof It=="function")for(O=It.call(O),It=0;!(bt=O.next()).done;)bt=bt.value,$=Dt+mt(bt,It++),ot+=N(bt,et,xt,$,Ut);else if($==="object"){if(typeof O.then=="function")return N(ft(O),et,xt,bt,Ut);throw et=String(O),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return ot}function W(O,et,xt){if(O==null)return O;var bt=[],Ut=0;return N(O,bt,"","",function($){return et.call(xt,$,Ut++)}),bt}function k(O){if(O._status===-1){var et=O._result;et=et(),et.then(function(xt){(O._status===0||O._status===-1)&&(O._status=1,O._result=xt)},function(xt){(O._status===0||O._status===-1)&&(O._status=2,O._result=xt)}),O._status===-1&&(O._status=0,O._result=et)}if(O._status===1)return O._result.default;throw O._result}var _t=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},St={map:W,forEach:function(O,et,xt){W(O,function(){et.apply(this,arguments)},xt)},count:function(O){var et=0;return W(O,function(){et++}),et},toArray:function(O){return W(O,function(et){return et})||[]},only:function(O){if(!G(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return le.Activity=v,le.Children=St,le.Component=_,le.Fragment=i,le.Profiler=l,le.PureComponent=z,le.StrictMode=r,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,le.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},le.cache=function(O){return function(){return O.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(O,et,xt){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var bt=C({},O.props),Ut=O.key;if(et!=null)for($ in et.key!==void 0&&(Ut=""+et.key),et)!j.call(et,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&et.ref===void 0||(bt[$]=et[$]);var $=arguments.length-2;if($===1)bt.children=xt;else if(1<$){for(var ot=Array($),Dt=0;Dt<$;Dt++)ot[Dt]=arguments[Dt+2];bt.children=ot}return R(O.type,Ut,bt)},le.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},le.createElement=function(O,et,xt){var bt,Ut={},$=null;if(et!=null)for(bt in et.key!==void 0&&($=""+et.key),et)j.call(et,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Ut[bt]=et[bt]);var ot=arguments.length-2;if(ot===1)Ut.children=xt;else if(1<ot){for(var Dt=Array(ot),It=0;It<ot;It++)Dt[It]=arguments[It+2];Ut.children=Dt}if(O&&O.defaultProps)for(bt in ot=O.defaultProps,ot)Ut[bt]===void 0&&(Ut[bt]=ot[bt]);return R(O,$,Ut)},le.createRef=function(){return{current:null}},le.forwardRef=function(O){return{$$typeof:d,render:O}},le.isValidElement=G,le.lazy=function(O){return{$$typeof:S,_payload:{_status:-1,_result:O},_init:k}},le.memo=function(O,et){return{$$typeof:p,type:O,compare:et===void 0?null:et}},le.startTransition=function(O){var et=B.T,xt={};B.T=xt;try{var bt=O(),Ut=B.S;Ut!==null&&Ut(xt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(H,_t)}catch($){_t($)}finally{et!==null&&xt.types!==null&&(et.types=xt.types),B.T=et}},le.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},le.use=function(O){return B.H.use(O)},le.useActionState=function(O,et,xt){return B.H.useActionState(O,et,xt)},le.useCallback=function(O,et){return B.H.useCallback(O,et)},le.useContext=function(O){return B.H.useContext(O)},le.useDebugValue=function(){},le.useDeferredValue=function(O,et){return B.H.useDeferredValue(O,et)},le.useEffect=function(O,et){return B.H.useEffect(O,et)},le.useEffectEvent=function(O){return B.H.useEffectEvent(O)},le.useId=function(){return B.H.useId()},le.useImperativeHandle=function(O,et,xt){return B.H.useImperativeHandle(O,et,xt)},le.useInsertionEffect=function(O,et){return B.H.useInsertionEffect(O,et)},le.useLayoutEffect=function(O,et){return B.H.useLayoutEffect(O,et)},le.useMemo=function(O,et){return B.H.useMemo(O,et)},le.useOptimistic=function(O,et){return B.H.useOptimistic(O,et)},le.useReducer=function(O,et,xt){return B.H.useReducer(O,et,xt)},le.useRef=function(O){return B.H.useRef(O)},le.useState=function(O){return B.H.useState(O)},le.useSyncExternalStore=function(O,et,xt){return B.H.useSyncExternalStore(O,et,xt)},le.useTransition=function(){return B.H.useTransition()},le.version="19.2.0",le}var t_;function rd(){return t_||(t_=1,Of.exports=FS()),Of.exports}var Kn=rd();const HS=nv(Kn);var zf={exports:{}},So={},Pf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e_;function GS(){return e_||(e_=1,(function(o){function e(N,W){var k=N.length;N.push(W);t:for(;0<k;){var _t=k-1>>>1,St=N[_t];if(0<l(St,W))N[_t]=W,N[k]=St,k=_t;else break t}}function i(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var W=N[0],k=N.pop();if(k!==W){N[0]=k;t:for(var _t=0,St=N.length,O=St>>>1;_t<O;){var et=2*(_t+1)-1,xt=N[et],bt=et+1,Ut=N[bt];if(0>l(xt,k))bt<St&&0>l(Ut,xt)?(N[_t]=Ut,N[bt]=k,_t=bt):(N[_t]=xt,N[et]=k,_t=et);else if(bt<St&&0>l(Ut,k))N[_t]=Ut,N[bt]=k,_t=bt;else break t}}return W}function l(N,W){var k=N.sortIndex-W.sortIndex;return k!==0?k:N.id-W.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],S=1,v=null,x=3,y=!1,A=!1,C=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var W=i(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=N)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=i(p)}}function V(N){if(C=!1,D(N),!A)if(i(m)!==null)A=!0,H||(H=!0,nt());else{var W=i(p);W!==null&&ft(V,W.startTime-N)}}var H=!1,B=-1,j=5,R=-1;function w(){return M?!0:!(o.unstable_now()-R<j)}function G(){if(M=!1,H){var N=o.unstable_now();R=N;var W=!0;try{t:{A=!1,C&&(C=!1,I(B),B=-1),y=!0;var k=x;try{e:{for(D(N),v=i(m);v!==null&&!(v.expirationTime>N&&w());){var _t=v.callback;if(typeof _t=="function"){v.callback=null,x=v.priorityLevel;var St=_t(v.expirationTime<=N);if(N=o.unstable_now(),typeof St=="function"){v.callback=St,D(N),W=!0;break e}v===i(m)&&r(m),D(N)}else r(m);v=i(m)}if(v!==null)W=!0;else{var O=i(p);O!==null&&ft(V,O.startTime-N),W=!1}}break t}finally{v=null,x=k,y=!1}W=void 0}}finally{W?nt():H=!1}}}var nt;if(typeof z=="function")nt=function(){z(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,mt=lt.port2;lt.port1.onmessage=G,nt=function(){mt.postMessage(null)}}else nt=function(){_(G,0)};function ft(N,W){B=_(function(){N(o.unstable_now())},W)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(N){switch(x){case 1:case 2:case 3:var W=3;break;default:W=x}var k=x;x=W;try{return N()}finally{x=k}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,W){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=x;x=N;try{return W()}finally{x=k}},o.unstable_scheduleCallback=function(N,W,k){var _t=o.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?_t+k:_t):k=_t,N){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=k+St,N={id:S++,callback:W,priorityLevel:N,startTime:k,expirationTime:St,sortIndex:-1},k>_t?(N.sortIndex=k,e(p,N),i(m)===null&&N===i(p)&&(C?(I(B),B=-1):C=!0,ft(V,k-_t))):(N.sortIndex=St,e(m,N),A||y||(A=!0,H||(H=!0,nt()))),N},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(N){var W=x;return function(){var k=x;x=W;try{return N.apply(this,arguments)}finally{x=k}}}})(Bf)),Bf}var n_;function VS(){return n_||(n_=1,Pf.exports=GS()),Pf.exports}var If={exports:{}},En={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i_;function XS(){if(i_)return En;i_=1;var o=rd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:S}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return En.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,En.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},En.flushSync=function(m){var p=h.T,S=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=S,r.d.f()}},En.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},En.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},En.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):S==="script"&&r.d.X(m,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},En.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},En.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,v=d(S,p.crossOrigin);r.d.L(m,S,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},En.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},En.requestFormReset=function(m){r.d.r(m)},En.unstable_batchedUpdates=function(m,p){return m(p)},En.useFormState=function(m,p,S){return h.H.useFormState(m,p,S)},En.useFormStatus=function(){return h.H.useHostTransitionStatus()},En.version="19.2.0",En}var a_;function kS(){if(a_)return If.exports;a_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=XS(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r_;function WS(){if(r_)return So;r_=1;var o=VS(),e=rd(),i=kS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var g=!1,T=u.child;T;){if(T===a){g=!0,a=u,s=f;break}if(T===s){g=!0,s=u,a=f;break}T=T.sibling}if(!g){for(T=f.child;T;){if(T===a){g=!0,a=f,s=u;break}if(T===s){g=!0,s=f,a=u;break}T=T.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),z=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function nt(t){return t===null||typeof t!="object"?null:(t=G&&t[G]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===lt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case z:return t.displayName||"Context";case I:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case j:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var ft=Array.isArray,N=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},_t=[],St=-1;function O(t){return{current:t}}function et(t){0>St||(t.current=_t[St],_t[St]=null,St--)}function xt(t,n){St++,_t[St]=t.current,t.current=n}var bt=O(null),Ut=O(null),$=O(null),ot=O(null);function Dt(t,n){switch(xt($,n),xt(Ut,t),xt(bt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?xg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=xg(n),t=Mg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}et(bt),xt(bt,t)}function It(){et(bt),et(Ut),et($)}function At(t){t.memoizedState!==null&&xt(ot,t);var n=bt.current,a=Mg(n,t.type);n!==a&&(xt(Ut,t),xt(bt,a))}function zt(t){Ut.current===t&&(et(bt),et(Ut)),ot.current===t&&(et(ot),po._currentValue=k)}var re,L;function ae(t){if(re===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);re=n&&n[1]||"",L=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+re+t+L}var te=!1;function ee(t,n){if(!t||te)return"";te=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(st){var tt=st}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(st){tt=st}t.call(pt.prototype)}}else{try{throw Error()}catch(st){tt=st}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(st){if(st&&tt&&typeof st.stack=="string")return[st.stack,tt.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],T=f[1];if(g&&T){var P=g.split(`
`),Q=T.split(`
`);for(u=s=0;s<P.length&&!P[s].includes("DetermineComponentFrameRoot");)s++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(s===P.length||u===Q.length)for(s=P.length-1,u=Q.length-1;1<=s&&0<=u&&P[s]!==Q[u];)u--;for(;1<=s&&0<=u;s--,u--)if(P[s]!==Q[u]){if(s!==1||u!==1)do if(s--,u--,0>u||P[s]!==Q[u]){var ct=`
`+P[s].replace(" at new "," at ");return t.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",t.displayName)),ct}while(1<=s&&0<=u);break}}}finally{te=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ae(a):""}function Vt(t,n){switch(t.tag){case 26:case 27:case 5:return ae(t.type);case 16:return ae("Lazy");case 13:return t.child!==n&&n!==null?ae("Suspense Fallback"):ae("Suspense");case 19:return ae("SuspenseList");case 0:case 15:return ee(t.type,!1);case 11:return ee(t.type.render,!1);case 1:return ee(t.type,!0);case 31:return ae("Activity");default:return""}}function He(t){try{var n="",a=null;do n+=Vt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Wt=Object.prototype.hasOwnProperty,oe=o.unstable_scheduleCallback,Ze=o.unstable_cancelCallback,Ye=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,Mt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,jt=o.unstable_LowPriority,Rt=o.unstable_IdlePriority,Yt=o.log,Zt=o.unstable_setDisableYieldValue,Et=null,Ct=null;function Kt(t){if(typeof Yt=="function"&&Zt(t),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Et,t)}catch{}}var Bt=Math.clz32?Math.clz32:X,Lt=Math.log,ue=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(Lt(t)/ue|0)|0}var Tt=256,wt=262144,Ft=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function gt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=yt(s):(g&=T,g!==0?u=yt(g):a||(a=T&~t,a!==0&&(u=yt(a))))):(T=s&~f,T!==0?u=yt(T):g!==0?u=yt(g):a||(a=s&~t,a!==0&&(u=yt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ht(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function se(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Le(){var t=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),t}function Ee(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function An(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Qn(t,n,a,s,u,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,P=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ct=31-Bt(a),pt=1<<ct;T[ct]=0,P[ct]=-1;var tt=Q[ct];if(tt!==null)for(Q[ct]=null,ct=0;ct<tt.length;ct++){var st=tt[ct];st!==null&&(st.lane&=-536870913)}a&=~pt}s!==0&&Rs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Rs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Bt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Si(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Bt(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Mr(t,n){var a=n&-n;return a=(a&42)!==0?1:yr(a),(a&(t.suspendedLanes|n))!==0?0:a}function yr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Er(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ha(){var t=W.p;return t!==0?t:(t=window.event,t===void 0?32:kg(t.type))}function Cs(t,n){var a=W.p;try{return W.p=t,n()}finally{W.p=a}}var Hn=Math.random().toString(36).slice(2),en="__reactFiber$"+Hn,gn="__reactProps$"+Hn,ra="__reactContainer$"+Hn,ws="__reactEvents$"+Hn,Au="__reactListeners$"+Hn,Ru="__reactHandles$"+Hn,Bo="__reactResources$"+Hn,Ga="__reactMarker$"+Hn;function b(t){delete t[en],delete t[gn],delete t[ws],delete t[Au],delete t[Ru]}function q(t){var n=t[en];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ra]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Cg(t);t!==null;){if(a=t[en])return a;t=Cg(t)}return n}t=a,a=t.parentNode}return null}function it(t){if(t=t[en]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function at(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Z(t){var n=t[Bo];return n||(n=t[Bo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function vt(t){t[Ga]=!0}var Nt=new Set,Xt={};function Pt(t,n){Qt(t,n),Qt(t+"Capture",n)}function Qt(t,n){for(Xt[t]=n,t=0;t<n.length;t++)Nt.add(n[t])}var ie=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jt={},pe={};function we(t){return Wt.call(pe,t)?!0:Wt.call(Jt,t)?!1:ie.test(t)?pe[t]=!0:(Jt[t]=!0,!1)}function Ge(t,n,a){if(we(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function De(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function me(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function kt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function _n(t){if(!t._valueTracker){var n=Xe(t)?"checked":"value";t._valueTracker=Te(t,n,""+t[n])}}function wi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Xe(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function dn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Va=/[\n"\\]/g;function ve(t){return t.replace(Va,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yn(t,n,a,s,u,f,g,T){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+kt(n)):t.value!==""+kt(n)&&(t.value=""+kt(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?ln(t,g,kt(n)):a!=null?ln(t,g,kt(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+kt(T):t.removeAttribute("name")}function Rn(t,n,a,s,u,f,g,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){_n(t);return}a=a!=null?""+kt(a):"",n=n!=null?""+kt(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),_n(t)}function ln(t,n,a){n==="number"&&dn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Qe(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+kt(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Tr(t,n,a){if(n!=null&&(n=""+kt(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+kt(a):""}function xi(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=kt(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),_n(t)}function br(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Lv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function _d(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Lv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function vd(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&_d(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&_d(t,f,n[f])}function Cu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ov=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Io(t){return Ov.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Di(){}var wu=null;function Du(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ar=null,Rr=null;function Sd(t){var n=it(t);if(n&&(t=n.stateNode)){var a=t[gn]||null;t:switch(t=n.stateNode,n.type){case"input":if(yn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[gn]||null;if(!u)throw Error(r(90));yn(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&wi(s)}break t;case"textarea":Tr(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Qe(t,!!a.multiple,n,!1)}}}var Uu=!1;function xd(t,n,a){if(Uu)return t(n,a);Uu=!0;try{var s=t(n);return s}finally{if(Uu=!1,(Ar!==null||Rr!==null)&&(bl(),Ar&&(n=Ar,t=Rr,Rr=Ar=null,Sd(n),t)))for(n=0;n<t.length;n++)Sd(t[n])}}function Ds(t,n){var a=t.stateNode;if(a===null)return null;var s=a[gn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(Ui)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Lu=!1}var sa=null,Nu=null,Fo=null;function Md(){if(Fo)return Fo;var t,n=Nu,a=n.length,s,u="value"in sa?sa.value:sa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===u[f-s];s++);return Fo=u.slice(t,1<s?1-s:void 0)}function Ho(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Go(){return!0}function yd(){return!1}function Un(t){function n(a,s,u,f,g){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Go:yd,this.isPropagationStopped=yd,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Go)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Go)},persist:function(){},isPersistent:Go}),n}var Xa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vo=Un(Xa),Ls=v({},Xa,{view:0,detail:0}),zv=Un(Ls),Ou,zu,Ns,Xo=v({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Ou=t.screenX-Ns.screenX,zu=t.screenY-Ns.screenY):zu=Ou=0,Ns=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:zu}}),Ed=Un(Xo),Pv=v({},Xo,{dataTransfer:0}),Bv=Un(Pv),Iv=v({},Ls,{relatedTarget:0}),Pu=Un(Iv),Fv=v({},Xa,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=Un(Fv),Gv=v({},Xa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Vv=Un(Gv),Xv=v({},Xa,{data:0}),Td=Un(Xv),kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=qv[t])?!!n[t]:!1}function Bu(){return Yv}var Zv=v({},Ls,{key:function(t){if(t.key){var n=kv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Wv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=Un(Zv),Kv=v({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bd=Un(Kv),Qv=v({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),Jv=Un(Qv),$v=v({},Xa,{propertyName:0,elapsedTime:0,pseudoElement:0}),t0=Un($v),e0=v({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),n0=Un(e0),i0=v({},Xa,{newState:0,oldState:0}),a0=Un(i0),r0=[9,13,27,32],Iu=Ui&&"CompositionEvent"in window,Os=null;Ui&&"documentMode"in document&&(Os=document.documentMode);var s0=Ui&&"TextEvent"in window&&!Os,Ad=Ui&&(!Iu||Os&&8<Os&&11>=Os),Rd=" ",Cd=!1;function wd(t,n){switch(t){case"keyup":return r0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cr=!1;function o0(t,n){switch(t){case"compositionend":return Dd(n);case"keypress":return n.which!==32?null:(Cd=!0,Rd);case"textInput":return t=n.data,t===Rd&&Cd?null:t;default:return null}}function l0(t,n){if(Cr)return t==="compositionend"||!Iu&&wd(t,n)?(t=Md(),Fo=Nu=sa=null,Cr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ad&&n.locale!=="ko"?null:n.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ud(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!u0[t.type]:n==="textarea"}function Ld(t,n,a,s){Ar?Rr?Rr.push(s):Rr=[s]:Ar=s,n=Ll(n,"onChange"),0<n.length&&(a=new Vo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var zs=null,Ps=null;function c0(t){pg(t,0)}function ko(t){var n=at(t);if(wi(n))return t}function Nd(t,n){if(t==="change")return n}var Od=!1;if(Ui){var Fu;if(Ui){var Hu="oninput"in document;if(!Hu){var zd=document.createElement("div");zd.setAttribute("oninput","return;"),Hu=typeof zd.oninput=="function"}Fu=Hu}else Fu=!1;Od=Fu&&(!document.documentMode||9<document.documentMode)}function Pd(){zs&&(zs.detachEvent("onpropertychange",Bd),Ps=zs=null)}function Bd(t){if(t.propertyName==="value"&&ko(Ps)){var n=[];Ld(n,Ps,t,Du(t)),xd(c0,n)}}function f0(t,n,a){t==="focusin"?(Pd(),zs=n,Ps=a,zs.attachEvent("onpropertychange",Bd)):t==="focusout"&&Pd()}function h0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ko(Ps)}function d0(t,n){if(t==="click")return ko(n)}function p0(t,n){if(t==="input"||t==="change")return ko(n)}function m0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Gn=typeof Object.is=="function"?Object.is:m0;function Bs(t,n){if(Gn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Wt.call(n,u)||!Gn(t[u],n[u]))return!1}return!0}function Id(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Fd(t,n){var a=Id(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Id(a)}}function Hd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=dn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=dn(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var g0=Ui&&"documentMode"in document&&11>=document.documentMode,wr=null,Vu=null,Is=null,Xu=!1;function Vd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||wr==null||wr!==dn(s)||(s=wr,"selectionStart"in s&&Gu(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Is&&Bs(Is,s)||(Is=s,s=Ll(Vu,"onSelect"),0<s.length&&(n=new Vo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=wr)))}function ka(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Dr={animationend:ka("Animation","AnimationEnd"),animationiteration:ka("Animation","AnimationIteration"),animationstart:ka("Animation","AnimationStart"),transitionrun:ka("Transition","TransitionRun"),transitionstart:ka("Transition","TransitionStart"),transitioncancel:ka("Transition","TransitionCancel"),transitionend:ka("Transition","TransitionEnd")},ku={},Xd={};Ui&&(Xd=document.createElement("div").style,"AnimationEvent"in window||(delete Dr.animationend.animation,delete Dr.animationiteration.animation,delete Dr.animationstart.animation),"TransitionEvent"in window||delete Dr.transitionend.transition);function Wa(t){if(ku[t])return ku[t];if(!Dr[t])return t;var n=Dr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Xd)return ku[t]=n[a];return t}var kd=Wa("animationend"),Wd=Wa("animationiteration"),qd=Wa("animationstart"),_0=Wa("transitionrun"),v0=Wa("transitionstart"),S0=Wa("transitioncancel"),Yd=Wa("transitionend"),Zd=new Map,Wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Wu.push("scrollEnd");function ci(t,n){Zd.set(t,n),Pt(n,[t])}var Wo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Jn=[],Ur=0,qu=0;function qo(){for(var t=Ur,n=qu=Ur=0;n<t;){var a=Jn[n];Jn[n++]=null;var s=Jn[n];Jn[n++]=null;var u=Jn[n];Jn[n++]=null;var f=Jn[n];if(Jn[n++]=null,s!==null&&u!==null){var g=s.pending;g===null?u.next=u:(u.next=g.next,g.next=u),s.pending=u}f!==0&&jd(a,u,f)}}function Yo(t,n,a,s){Jn[Ur++]=t,Jn[Ur++]=n,Jn[Ur++]=a,Jn[Ur++]=s,qu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Yu(t,n,a,s){return Yo(t,n,a,s),Zo(t)}function qa(t,n){return Yo(t,null,null,n),Zo(t)}function jd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Bt(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Zo(t){if(50<so)throw so=0,nf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Lr={};function x0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,a,s){return new x0(t,n,a,s)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Li(t,n){var a=t.alternate;return a===null?(a=Vn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kd(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function jo(t,n,a,s,u,f){var g=0;if(s=t,typeof t=="function")Zu(t)&&(g=1);else if(typeof t=="string")g=bS(t,a,bt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case R:return t=Vn(31,a,n,u),t.elementType=R,t.lanes=f,t;case C:return Ya(a.children,u,f,n);case M:g=8,u|=24;break;case _:return t=Vn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case V:return t=Vn(13,a,n,u),t.elementType=V,t.lanes=f,t;case H:return t=Vn(19,a,n,u),t.elementType=H,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case z:g=10;break t;case I:g=9;break t;case D:g=11;break t;case B:g=14;break t;case j:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Vn(g,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Ya(t,n,a,s){return t=Vn(7,t,s,n),t.lanes=a,t}function ju(t,n,a){return t=Vn(6,t,null,n),t.lanes=a,t}function Qd(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,a){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Jd=new WeakMap;function $n(t,n){if(typeof t=="object"&&t!==null){var a=Jd.get(t);return a!==void 0?a:(n={value:t,source:n,stack:He(n)},Jd.set(t,n),n)}return{value:t,source:n,stack:He(n)}}var Nr=[],Or=0,Ko=null,Fs=0,ti=[],ei=0,oa=null,Mi=1,yi="";function Ni(t,n){Nr[Or++]=Fs,Nr[Or++]=Ko,Ko=t,Fs=n}function $d(t,n,a){ti[ei++]=Mi,ti[ei++]=yi,ti[ei++]=oa,oa=t;var s=Mi;t=yi;var u=32-Bt(s)-1;s&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var g=u-u%5;f=(s&(1<<g)-1).toString(32),s>>=g,u-=g,Mi=1<<32-Bt(n)+u|a<<u|s,yi=f+t}else Mi=1<<f|a<<u|s,yi=t}function Qu(t){t.return!==null&&(Ni(t,1),$d(t,1,0))}function Ju(t){for(;t===Ko;)Ko=Nr[--Or],Nr[Or]=null,Fs=Nr[--Or],Nr[Or]=null;for(;t===oa;)oa=ti[--ei],ti[ei]=null,yi=ti[--ei],ti[ei]=null,Mi=ti[--ei],ti[ei]=null}function tp(t,n){ti[ei++]=Mi,ti[ei++]=yi,ti[ei++]=oa,Mi=n.id,yi=n.overflow,oa=t}var vn=null,ke=null,Me=!1,la=null,ni=!1,$u=Error(r(519));function ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hs($n(n,t)),$u}function ep(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[en]=t,n[gn]=s,a){case"dialog":_e("cancel",n),_e("close",n);break;case"iframe":case"object":case"embed":_e("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)_e(lo[a],n);break;case"source":_e("error",n);break;case"img":case"image":case"link":_e("error",n),_e("load",n);break;case"details":_e("toggle",n);break;case"input":_e("invalid",n),Rn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":_e("invalid",n);break;case"textarea":_e("invalid",n),xi(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||vg(n.textContent,a)?(s.popover!=null&&(_e("beforetoggle",n),_e("toggle",n)),s.onScroll!=null&&_e("scroll",n),s.onScrollEnd!=null&&_e("scrollend",n),s.onClick!=null&&(n.onclick=Di),n=!0):n=!1,n||ua(t,!0)}function np(t){for(vn=t.return;vn;)switch(vn.tag){case 5:case 31:case 13:ni=!1;return;case 27:case 3:ni=!0;return;default:vn=vn.return}}function zr(t){if(t!==vn)return!1;if(!Me)return np(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||vf(t.type,t.memoizedProps)),a=!a),a&&ke&&ua(t),np(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=Rg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));ke=Rg(t)}else n===27?(n=ke,Ea(t.type)?(t=Ef,Ef=null,ke=t):ke=n):ke=vn?ai(t.stateNode.nextSibling):null;return!0}function Za(){ke=vn=null,Me=!1}function tc(){var t=la;return t!==null&&(zn===null?zn=t:zn.push.apply(zn,t),la=null),t}function Hs(t){la===null?la=[t]:la.push(t)}var ec=O(null),ja=null,Oi=null;function ca(t,n,a){xt(ec,n._currentValue),n._currentValue=a}function zi(t){t._currentValue=ec.current,et(ec)}function nc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function ic(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var g=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),nc(f.return,a,t),s||(g=null);break t}f=T.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),nc(g,a,t),g=null}else g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function Pr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var T=u.type;Gn(u.pendingProps.value,g.value)||(t!==null?t.push(T):t=[T])}}else if(u===ot.current){if(g=u.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}u=u.return}t!==null&&ic(n,t,a,s),n.flags|=262144}function Qo(t){for(t=t.firstContext;t!==null;){if(!Gn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ka(t){ja=t,Oi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Sn(t){return ip(ja,t)}function Jo(t,n){return ja===null&&Ka(t),ip(t,n)}function ip(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Oi===null){if(t===null)throw Error(r(308));Oi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Oi=Oi.next=n;return a}var M0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},y0=o.unstable_scheduleCallback,E0=o.unstable_NormalPriority,nn={$$typeof:z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ac(){return{controller:new M0,data:new Map,refCount:0}}function Gs(t){t.refCount--,t.refCount===0&&y0(E0,function(){t.controller.abort()})}var Vs=null,rc=0,Br=0,Ir=null;function T0(t,n){if(Vs===null){var a=Vs=[];rc=0,Br=uf(),Ir={status:"pending",value:void 0,then:function(s){a.push(s)}}}return rc++,n.then(ap,ap),n}function ap(){if(--rc===0&&Vs!==null){Ir!==null&&(Ir.status="fulfilled");var t=Vs;Vs=null,Br=0,Ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function b0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var rp=N.S;N.S=function(t,n){Vm=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&T0(t,n),rp!==null&&rp(t,n)};var Qa=O(null);function sc(){var t=Qa.current;return t!==null?t:Ve.pooledCache}function $o(t,n){n===null?xt(Qa,Qa.current):xt(Qa,n.pool)}function sp(){var t=sc();return t===null?null:{parent:nn._currentValue,pool:t}}var Fr=Error(r(460)),oc=Error(r(474)),tl=Error(r(542)),el={then:function(){}};function op(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Di,Di),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t;default:if(typeof n.status=="string")n.then(Di,Di);else{if(t=Ve,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,cp(t),t}throw $a=n,Fr}}function Ja(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?($a=a,Fr):a}}var $a=null;function up(){if($a===null)throw Error(r(459));var t=$a;return $a=null,t}function cp(t){if(t===Fr||t===tl)throw Error(r(483))}var Hr=null,Xs=0;function nl(t){var n=Xs;return Xs+=1,Hr===null&&(Hr=[]),lp(Hr,t,n)}function ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function il(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function fp(t){function n(Y,F){if(t){var K=Y.deletions;K===null?(Y.deletions=[F],Y.flags|=16):K.push(F)}}function a(Y,F){if(!t)return null;for(;F!==null;)n(Y,F),F=F.sibling;return null}function s(Y){for(var F=new Map;Y!==null;)Y.key!==null?F.set(Y.key,Y):F.set(Y.index,Y),Y=Y.sibling;return F}function u(Y,F){return Y=Li(Y,F),Y.index=0,Y.sibling=null,Y}function f(Y,F,K){return Y.index=K,t?(K=Y.alternate,K!==null?(K=K.index,K<F?(Y.flags|=67108866,F):K):(Y.flags|=67108866,F)):(Y.flags|=1048576,F)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,F,K,dt){return F===null||F.tag!==6?(F=ju(K,Y.mode,dt),F.return=Y,F):(F=u(F,K),F.return=Y,F)}function P(Y,F,K,dt){var $t=K.type;return $t===C?ct(Y,F,K.props.children,dt,K.key):F!==null&&(F.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===j&&Ja($t)===F.type)?(F=u(F,K.props),ks(F,K),F.return=Y,F):(F=jo(K.type,K.key,K.props,null,Y.mode,dt),ks(F,K),F.return=Y,F)}function Q(Y,F,K,dt){return F===null||F.tag!==4||F.stateNode.containerInfo!==K.containerInfo||F.stateNode.implementation!==K.implementation?(F=Ku(K,Y.mode,dt),F.return=Y,F):(F=u(F,K.children||[]),F.return=Y,F)}function ct(Y,F,K,dt,$t){return F===null||F.tag!==7?(F=Ya(K,Y.mode,dt,$t),F.return=Y,F):(F=u(F,K),F.return=Y,F)}function pt(Y,F,K){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return F=ju(""+F,Y.mode,K),F.return=Y,F;if(typeof F=="object"&&F!==null){switch(F.$$typeof){case y:return K=jo(F.type,F.key,F.props,null,Y.mode,K),ks(K,F),K.return=Y,K;case A:return F=Ku(F,Y.mode,K),F.return=Y,F;case j:return F=Ja(F),pt(Y,F,K)}if(ft(F)||nt(F))return F=Ya(F,Y.mode,K,null),F.return=Y,F;if(typeof F.then=="function")return pt(Y,nl(F),K);if(F.$$typeof===z)return pt(Y,Jo(Y,F),K);il(Y,F)}return null}function tt(Y,F,K,dt){var $t=F!==null?F.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return $t!==null?null:T(Y,F,""+K,dt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case y:return K.key===$t?P(Y,F,K,dt):null;case A:return K.key===$t?Q(Y,F,K,dt):null;case j:return K=Ja(K),tt(Y,F,K,dt)}if(ft(K)||nt(K))return $t!==null?null:ct(Y,F,K,dt,null);if(typeof K.then=="function")return tt(Y,F,nl(K),dt);if(K.$$typeof===z)return tt(Y,F,Jo(Y,K),dt);il(Y,K)}return null}function st(Y,F,K,dt,$t){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return Y=Y.get(K)||null,T(F,Y,""+dt,$t);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return Y=Y.get(dt.key===null?K:dt.key)||null,P(F,Y,dt,$t);case A:return Y=Y.get(dt.key===null?K:dt.key)||null,Q(F,Y,dt,$t);case j:return dt=Ja(dt),st(Y,F,K,dt,$t)}if(ft(dt)||nt(dt))return Y=Y.get(K)||null,ct(F,Y,dt,$t,null);if(typeof dt.then=="function")return st(Y,F,K,nl(dt),$t);if(dt.$$typeof===z)return st(Y,F,K,Jo(F,dt),$t);il(F,dt)}return null}function Gt(Y,F,K,dt){for(var $t=null,be=null,qt=F,fe=F=0,xe=null;qt!==null&&fe<K.length;fe++){qt.index>fe?(xe=qt,qt=null):xe=qt.sibling;var Ae=tt(Y,qt,K[fe],dt);if(Ae===null){qt===null&&(qt=xe);break}t&&qt&&Ae.alternate===null&&n(Y,qt),F=f(Ae,F,fe),be===null?$t=Ae:be.sibling=Ae,be=Ae,qt=xe}if(fe===K.length)return a(Y,qt),Me&&Ni(Y,fe),$t;if(qt===null){for(;fe<K.length;fe++)qt=pt(Y,K[fe],dt),qt!==null&&(F=f(qt,F,fe),be===null?$t=qt:be.sibling=qt,be=qt);return Me&&Ni(Y,fe),$t}for(qt=s(qt);fe<K.length;fe++)xe=st(qt,Y,fe,K[fe],dt),xe!==null&&(t&&xe.alternate!==null&&qt.delete(xe.key===null?fe:xe.key),F=f(xe,F,fe),be===null?$t=xe:be.sibling=xe,be=xe);return t&&qt.forEach(function(Ca){return n(Y,Ca)}),Me&&Ni(Y,fe),$t}function ne(Y,F,K,dt){if(K==null)throw Error(r(151));for(var $t=null,be=null,qt=F,fe=F=0,xe=null,Ae=K.next();qt!==null&&!Ae.done;fe++,Ae=K.next()){qt.index>fe?(xe=qt,qt=null):xe=qt.sibling;var Ca=tt(Y,qt,Ae.value,dt);if(Ca===null){qt===null&&(qt=xe);break}t&&qt&&Ca.alternate===null&&n(Y,qt),F=f(Ca,F,fe),be===null?$t=Ca:be.sibling=Ca,be=Ca,qt=xe}if(Ae.done)return a(Y,qt),Me&&Ni(Y,fe),$t;if(qt===null){for(;!Ae.done;fe++,Ae=K.next())Ae=pt(Y,Ae.value,dt),Ae!==null&&(F=f(Ae,F,fe),be===null?$t=Ae:be.sibling=Ae,be=Ae);return Me&&Ni(Y,fe),$t}for(qt=s(qt);!Ae.done;fe++,Ae=K.next())Ae=st(qt,Y,fe,Ae.value,dt),Ae!==null&&(t&&Ae.alternate!==null&&qt.delete(Ae.key===null?fe:Ae.key),F=f(Ae,F,fe),be===null?$t=Ae:be.sibling=Ae,be=Ae);return t&&qt.forEach(function(PS){return n(Y,PS)}),Me&&Ni(Y,fe),$t}function Be(Y,F,K,dt){if(typeof K=="object"&&K!==null&&K.type===C&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case y:t:{for(var $t=K.key;F!==null;){if(F.key===$t){if($t=K.type,$t===C){if(F.tag===7){a(Y,F.sibling),dt=u(F,K.props.children),dt.return=Y,Y=dt;break t}}else if(F.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===j&&Ja($t)===F.type){a(Y,F.sibling),dt=u(F,K.props),ks(dt,K),dt.return=Y,Y=dt;break t}a(Y,F);break}else n(Y,F);F=F.sibling}K.type===C?(dt=Ya(K.props.children,Y.mode,dt,K.key),dt.return=Y,Y=dt):(dt=jo(K.type,K.key,K.props,null,Y.mode,dt),ks(dt,K),dt.return=Y,Y=dt)}return g(Y);case A:t:{for($t=K.key;F!==null;){if(F.key===$t)if(F.tag===4&&F.stateNode.containerInfo===K.containerInfo&&F.stateNode.implementation===K.implementation){a(Y,F.sibling),dt=u(F,K.children||[]),dt.return=Y,Y=dt;break t}else{a(Y,F);break}else n(Y,F);F=F.sibling}dt=Ku(K,Y.mode,dt),dt.return=Y,Y=dt}return g(Y);case j:return K=Ja(K),Be(Y,F,K,dt)}if(ft(K))return Gt(Y,F,K,dt);if(nt(K)){if($t=nt(K),typeof $t!="function")throw Error(r(150));return K=$t.call(K),ne(Y,F,K,dt)}if(typeof K.then=="function")return Be(Y,F,nl(K),dt);if(K.$$typeof===z)return Be(Y,F,Jo(Y,K),dt);il(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,F!==null&&F.tag===6?(a(Y,F.sibling),dt=u(F,K),dt.return=Y,Y=dt):(a(Y,F),dt=ju(K,Y.mode,dt),dt.return=Y,Y=dt),g(Y)):a(Y,F)}return function(Y,F,K,dt){try{Xs=0;var $t=Be(Y,F,K,dt);return Hr=null,$t}catch(qt){if(qt===Fr||qt===tl)throw qt;var be=Vn(29,qt,null,Y.mode);return be.lanes=dt,be.return=Y,be}finally{}}}var tr=fp(!0),hp=fp(!1),fa=!1;function lc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ha(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function da(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Ce&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Zo(t),jd(t,null,a),n}return Yo(t,s,n,a),Zo(t)}function Ws(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Si(t,a)}}function cc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var fc=!1;function qs(){if(fc){var t=Ir;if(t!==null)throw t}}function Ys(t,n,a,s){fc=!1;var u=t.updateQueue;fa=!1;var f=u.firstBaseUpdate,g=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,Q=P.next;P.next=null,g===null?f=Q:g.next=Q,g=P;var ct=t.alternate;ct!==null&&(ct=ct.updateQueue,T=ct.lastBaseUpdate,T!==g&&(T===null?ct.firstBaseUpdate=Q:T.next=Q,ct.lastBaseUpdate=P))}if(f!==null){var pt=u.baseState;g=0,ct=Q=P=null,T=f;do{var tt=T.lane&-536870913,st=tt!==T.lane;if(st?(Se&tt)===tt:(s&tt)===tt){tt!==0&&tt===Br&&(fc=!0),ct!==null&&(ct=ct.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Gt=t,ne=T;tt=n;var Be=a;switch(ne.tag){case 1:if(Gt=ne.payload,typeof Gt=="function"){pt=Gt.call(Be,pt,tt);break t}pt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=ne.payload,tt=typeof Gt=="function"?Gt.call(Be,pt,tt):Gt,tt==null)break t;pt=v({},pt,tt);break t;case 2:fa=!0}}tt=T.callback,tt!==null&&(t.flags|=64,st&&(t.flags|=8192),st=u.callbacks,st===null?u.callbacks=[tt]:st.push(tt))}else st={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ct===null?(Q=ct=st,P=pt):ct=ct.next=st,g|=tt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;st=T,T=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ct===null&&(P=pt),u.baseState=P,u.firstBaseUpdate=Q,u.lastBaseUpdate=ct,f===null&&(u.shared.lanes=0),va|=g,t.lanes=g,t.memoizedState=pt}}function dp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function pp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)dp(a[t],n)}var Gr=O(null),al=O(0);function mp(t,n){t=ki,xt(al,t),xt(Gr,n),ki=t|n.baseLanes}function hc(){xt(al,ki),xt(Gr,Gr.current)}function dc(){ki=al.current,et(Gr),et(al)}var Xn=O(null),ii=null;function pa(t){var n=t.alternate;xt(Je,Je.current&1),xt(Xn,t),ii===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(ii=t)}function pc(t){xt(Je,Je.current),xt(Xn,t),ii===null&&(ii=t)}function gp(t){t.tag===22?(xt(Je,Je.current),xt(Xn,t),ii===null&&(ii=t)):ma()}function ma(){xt(Je,Je.current),xt(Xn,Xn.current)}function kn(t){et(Xn),ii===t&&(ii=null),et(Je)}var Je=O(0);function rl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Mf(a)||yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pi=0,ce=null,ze=null,an=null,sl=!1,Vr=!1,er=!1,ol=0,Zs=0,Xr=null,A0=0;function je(){throw Error(r(321))}function mc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Gn(t[a],n[a]))return!1;return!0}function gc(t,n,a,s,u,f){return Pi=f,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=t===null||t.memoizedState===null?$p:Uc,er=!1,f=a(s,u),er=!1,Vr&&(f=vp(n,a,s,u)),_p(t),f}function _p(t){N.H=Qs;var n=ze!==null&&ze.next!==null;if(Pi=0,an=ze=ce=null,sl=!1,Zs=0,Xr=null,n)throw Error(r(300));t===null||rn||(t=t.dependencies,t!==null&&Qo(t)&&(rn=!0))}function vp(t,n,a,s){ce=t;var u=0;do{if(Vr&&(Xr=null),Zs=0,Vr=!1,25<=u)throw Error(r(301));if(u+=1,an=ze=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=tm,f=n(a,s)}while(Vr);return f}function R0(){var t=N.H,n=t.useState()[0];return n=typeof n.then=="function"?js(n):n,t=t.useState()[0],(ze!==null?ze.memoizedState:null)!==t&&(ce.flags|=1024),n}function _c(){var t=ol!==0;return ol=0,t}function vc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Sc(t){if(sl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}sl=!1}Pi=0,an=ze=ce=null,Vr=!1,Zs=ol=0,Xr=null}function Cn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ce.memoizedState=an=t:an=an.next=t,an}function $e(){if(ze===null){var t=ce.alternate;t=t!==null?t.memoizedState:null}else t=ze.next;var n=an===null?ce.memoizedState:an.next;if(n!==null)an=n,ze=t;else{if(t===null)throw ce.alternate===null?Error(r(467)):Error(r(310));ze=t,t={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},an===null?ce.memoizedState=an=t:an=an.next=t}return an}function ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function js(t){var n=Zs;return Zs+=1,Xr===null&&(Xr=[]),t=lp(Xr,t,n),n=ce,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?$p:Uc),t}function ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return js(t);if(t.$$typeof===z)return Sn(t)}throw Error(r(438,String(t)))}function xc(t){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ce.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=w;return n.index++,a}function Bi(t,n){return typeof n=="function"?n(t):n}function cl(t){var n=$e();return Mc(n,ze,t)}function Mc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var g=u.next;u.next=f.next,f.next=g}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=g=null,P=null,Q=n,ct=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(Se&pt)===pt:(Pi&pt)===pt){var tt=Q.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Br&&(ct=!0);else if((Pi&tt)===tt){Q=Q.next,tt===Br&&(ct=!0);continue}else pt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=pt,g=f):P=P.next=pt,ce.lanes|=tt,va|=tt;pt=Q.action,er&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else tt={lane:pt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=tt,g=f):P=P.next=tt,ce.lanes|=pt,va|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?g=f:P.next=T,!Gn(f,t.memoizedState)&&(rn=!0,ct&&(a=Ir,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=P,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function yc(t){var n=$e(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do f=t(f,g.action),g=g.next;while(g!==u);Gn(f,n.memoizedState)||(rn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Sp(t,n,a){var s=ce,u=$e(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Gn((ze||u).memoizedState,a);if(g&&(u.memoizedState=a,rn=!0),u=u.queue,bc(yp.bind(null,s,u,t),[t]),u.getSnapshot!==n||g||an!==null&&an.memoizedState.tag&1){if(s.flags|=2048,kr(9,{destroy:void 0},Mp.bind(null,s,u,a,n),null),Ve===null)throw Error(r(349));f||(Pi&127)!==0||xp(s,n,a)}return a}function xp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=ll(),ce.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Mp(t,n,a,s){n.value=a,n.getSnapshot=s,Ep(n)&&Tp(t)}function yp(t,n,a){return a(function(){Ep(n)&&Tp(t)})}function Ep(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Gn(t,a)}catch{return!0}}function Tp(t){var n=qa(t,2);n!==null&&Pn(n,t,2)}function Ec(t){var n=Cn();if(typeof t=="function"){var a=t;if(t=a(),er){Kt(!0);try{a()}finally{Kt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:t},n}function bp(t,n,a,s){return t.baseState=a,Mc(t,ze,typeof s=="function"?s:Bi)}function C0(t,n,a,s,u){if(dl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};N.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ap(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ap(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=N.T,g={};N.T=g;try{var T=a(u,s),P=N.S;P!==null&&P(g,T),Rp(t,n,T)}catch(Q){Tc(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),N.T=f}}else try{f=a(u,s),Rp(t,n,f)}catch(Q){Tc(t,n,Q)}}function Rp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Cp(t,n,s)},function(s){return Tc(t,n,s)}):Cp(t,n,a)}function Cp(t,n,a){n.status="fulfilled",n.value=a,wp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ap(t,a)))}function Tc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,wp(n),n=n.next;while(n!==s)}t.action=null}function wp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Dp(t,n){return n}function Up(t,n){if(Me){var a=Ve.formState;if(a!==null){t:{var s=ce;if(Me){if(ke){e:{for(var u=ke,f=ni;u.nodeType!==8;){if(!f){u=null;break e}if(u=ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){ke=ai(u.nextSibling),s=u.data==="F!";break t}}ua(s)}s=!1}s&&(n=a[0])}}return a=Cn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dp,lastRenderedState:n},a.queue=s,a=Kp.bind(null,ce,s),s.dispatch=a,s=Ec(!1),f=Dc.bind(null,ce,!1,s.queue),s=Cn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=C0.bind(null,ce,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Lp(t){var n=$e();return Np(n,ze,t)}function Np(t,n,a){if(n=Mc(t,n,Dp)[0],t=cl(Bi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=js(n)}catch(g){throw g===Fr?tl:g}else s=n;n=$e();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,kr(9,{destroy:void 0},w0.bind(null,u,a),null)),[s,f,t]}function w0(t,n){t.action=n}function Op(t){var n=$e(),a=ze;if(a!==null)return Np(n,a,t);$e(),n=n.memoizedState,a=$e();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function kr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ce.updateQueue,n===null&&(n=ll(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function zp(){return $e().memoizedState}function fl(t,n,a,s){var u=Cn();ce.flags|=t,u.memoizedState=kr(1|n,{destroy:void 0},a,s===void 0?null:s)}function hl(t,n,a,s){var u=$e();s=s===void 0?null:s;var f=u.memoizedState.inst;ze!==null&&s!==null&&mc(s,ze.memoizedState.deps)?u.memoizedState=kr(n,f,a,s):(ce.flags|=t,u.memoizedState=kr(1|n,f,a,s))}function Pp(t,n){fl(8390656,8,t,n)}function bc(t,n){hl(2048,8,t,n)}function D0(t){ce.flags|=4;var n=ce.updateQueue;if(n===null)n=ll(),ce.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Bp(t){var n=$e().memoizedState;return D0({ref:n,nextImpl:t}),function(){if((Ce&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Ip(t,n){return hl(4,2,t,n)}function Fp(t,n){return hl(4,4,t,n)}function Hp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Gp(t,n,a){a=a!=null?a.concat([t]):null,hl(4,4,Hp.bind(null,n,t),a)}function Ac(){}function Vp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&mc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Xp(t,n){var a=$e();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&mc(n,s[1]))return s[0];if(s=t(),er){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s}function Rc(t,n,a){return a===void 0||(Pi&1073741824)!==0&&(Se&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=km(),ce.lanes|=t,va|=t,a)}function kp(t,n,a,s){return Gn(a,n)?a:Gr.current!==null?(t=Rc(t,a,s),Gn(t,n)||(rn=!0),t):(Pi&42)===0||(Pi&1073741824)!==0&&(Se&261930)===0?(rn=!0,t.memoizedState=a):(t=km(),ce.lanes|=t,va|=t,n)}function Wp(t,n,a,s,u){var f=W.p;W.p=f!==0&&8>f?f:8;var g=N.T,T={};N.T=T,Dc(t,!1,n,a);try{var P=u(),Q=N.S;if(Q!==null&&Q(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ct=b0(P,s);Ks(t,n,ct,Yn(t))}else Ks(t,n,s,Yn(t))}catch(pt){Ks(t,n,{then:function(){},status:"rejected",reason:pt},Yn())}finally{W.p=f,g!==null&&T.types!==null&&(g.types=T.types),N.T=g}}function U0(){}function Cc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=qp(t).queue;Wp(t,u,n,k,a===null?U0:function(){return Yp(t),a(s)})}function qp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bi,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Yp(t){var n=qp(t);n.next===null&&(n=t.alternate.memoizedState),Ks(t,n.next.queue,{},Yn())}function wc(){return Sn(po)}function Zp(){return $e().memoizedState}function jp(){return $e().memoizedState}function L0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Yn();t=ha(a);var s=da(n,t,a);s!==null&&(Pn(s,n,a),Ws(s,n,a)),n={cache:ac()},t.payload=n;return}n=n.return}}function N0(t,n,a){var s=Yn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},dl(t)?Qp(n,a):(a=Yu(t,n,a,s),a!==null&&(Pn(a,t,s),Jp(a,n,s)))}function Kp(t,n,a){var s=Yn();Ks(t,n,a,s)}function Ks(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(t))Qp(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,T=f(g,a);if(u.hasEagerState=!0,u.eagerState=T,Gn(T,g))return Yo(t,n,u,0),Ve===null&&qo(),!1}catch{}finally{}if(a=Yu(t,n,u,s),a!==null)return Pn(a,t,s),Jp(a,n,s),!0}return!1}function Dc(t,n,a,s){if(s={lane:2,revertLane:uf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},dl(t)){if(n)throw Error(r(479))}else n=Yu(t,a,s,2),n!==null&&Pn(n,t,2)}function dl(t){var n=t.alternate;return t===ce||n!==null&&n===ce}function Qp(t,n){Vr=sl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Jp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Si(t,a)}}var Qs={readContext:Sn,use:ul,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je,useHostTransitionStatus:je,useFormState:je,useActionState:je,useOptimistic:je,useMemoCache:je,useCacheRefresh:je};Qs.useEffectEvent=je;var $p={readContext:Sn,use:ul,useCallback:function(t,n){return Cn().memoizedState=[t,n===void 0?null:n],t},useContext:Sn,useEffect:Pp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,fl(4194308,4,Hp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return fl(4194308,4,t,n)},useInsertionEffect:function(t,n){fl(4,2,t,n)},useMemo:function(t,n){var a=Cn();n=n===void 0?null:n;var s=t();if(er){Kt(!0);try{t()}finally{Kt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Cn();if(a!==void 0){var u=a(n);if(er){Kt(!0);try{a(n)}finally{Kt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=N0.bind(null,ce,t),[s.memoizedState,t]},useRef:function(t){var n=Cn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ec(t);var n=t.queue,a=Kp.bind(null,ce,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Ac,useDeferredValue:function(t,n){var a=Cn();return Rc(a,t,n)},useTransition:function(){var t=Ec(!1);return t=Wp.bind(null,ce,t.queue,!0,!1),Cn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ce,u=Cn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ve===null)throw Error(r(349));(Se&127)!==0||xp(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Pp(yp.bind(null,s,f,t),[t]),s.flags|=2048,kr(9,{destroy:void 0},Mp.bind(null,s,f,a,n),null),a},useId:function(){var t=Cn(),n=Ve.identifierPrefix;if(Me){var a=yi,s=Mi;a=(s&~(1<<32-Bt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=A0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:wc,useFormState:Up,useActionState:Up,useOptimistic:function(t){var n=Cn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dc.bind(null,ce,!0,a),a.dispatch=n,[t,n]},useMemoCache:xc,useCacheRefresh:function(){return Cn().memoizedState=L0.bind(null,ce)},useEffectEvent:function(t){var n=Cn(),a={impl:t};return n.memoizedState=a,function(){if((Ce&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Uc={readContext:Sn,use:ul,useCallback:Vp,useContext:Sn,useEffect:bc,useImperativeHandle:Gp,useInsertionEffect:Ip,useLayoutEffect:Fp,useMemo:Xp,useReducer:cl,useRef:zp,useState:function(){return cl(Bi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=$e();return kp(a,ze.memoizedState,t,n)},useTransition:function(){var t=cl(Bi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:js(t),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:wc,useFormState:Lp,useActionState:Lp,useOptimistic:function(t,n){var a=$e();return bp(a,ze,t,n)},useMemoCache:xc,useCacheRefresh:jp};Uc.useEffectEvent=Bp;var tm={readContext:Sn,use:ul,useCallback:Vp,useContext:Sn,useEffect:bc,useImperativeHandle:Gp,useInsertionEffect:Ip,useLayoutEffect:Fp,useMemo:Xp,useReducer:yc,useRef:zp,useState:function(){return yc(Bi)},useDebugValue:Ac,useDeferredValue:function(t,n){var a=$e();return ze===null?Rc(a,t,n):kp(a,ze.memoizedState,t,n)},useTransition:function(){var t=yc(Bi)[0],n=$e().memoizedState;return[typeof t=="boolean"?t:js(t),n]},useSyncExternalStore:Sp,useId:Zp,useHostTransitionStatus:wc,useFormState:Op,useActionState:Op,useOptimistic:function(t,n){var a=$e();return ze!==null?bp(a,ze,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:xc,useCacheRefresh:jp};tm.useEffectEvent=Bp;function Lc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Nc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Yn(),u=ha(s);u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(Pn(n,t,s),Ws(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Yn(),u=ha(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=da(t,u,s),n!==null&&(Pn(n,t,s),Ws(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yn(),s=ha(a);s.tag=2,n!=null&&(s.callback=n),n=da(t,s,a),n!==null&&(Pn(n,t,a),Ws(n,t,a))}};function em(t,n,a,s,u,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Bs(a,s)||!Bs(u,f):!0}function nm(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Nc.enqueueReplaceState(n,n.state,null)}function nr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function im(t){Wo(t)}function am(t){console.error(t)}function rm(t){Wo(t)}function pl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function sm(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Oc(t,n,a){return a=ha(a),a.tag=3,a.payload={element:null},a.callback=function(){pl(t,n)},a}function om(t){return t=ha(t),t.tag=3,t}function lm(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){sm(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){sm(n,a,s),typeof u!="function"&&(Sa===null?Sa=new Set([this]):Sa.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function O0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Pr(n,a,u,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ii===null?Al():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===el?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),sf(t,s,u)),!1;case 22:return a.flags|=65536,s===el?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),sf(t,s,u)),!1}throw Error(r(435,a.tag))}return sf(t,s,u),Al(),!1}if(Me)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==$u&&(t=Error(r(422),{cause:s}),Hs($n(t,a)))):(s!==$u&&(n=Error(r(423),{cause:s}),Hs($n(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=$n(s,a),u=Oc(t.stateNode,s,u),cc(t,u),Ke!==4&&(Ke=2)),!1;var f=Error(r(520),{cause:s});if(f=$n(f,a),ro===null?ro=[f]:ro.push(f),Ke!==4&&(Ke=2),n===null)return!0;s=$n(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Oc(a.stateNode,s,t),cc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Sa===null||!Sa.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=om(u),lm(u,t,a,s),cc(a,u),!1}a=a.return}while(a!==null);return!1}var zc=Error(r(461)),rn=!1;function xn(t,n,a,s){n.child=t===null?hp(n,null,a,s):tr(n,t.child,a,s)}function um(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var T in s)T!=="ref"&&(g[T]=s[T])}else g=s;return Ka(n),s=gc(t,n,a,g,f,u),T=_c(),t!==null&&!rn?(vc(t,n,u),Ii(t,n,u)):(Me&&T&&Qu(n),n.flags|=1,xn(t,n,s,u),n.child)}function cm(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,fm(t,n,f,s,u)):(t=jo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Xc(t,u)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bs,a(g,s)&&t.ref===n.ref)return Ii(t,n,u)}return n.flags|=1,t=Li(f,s),t.ref=n.ref,t.return=n,n.child=t}function fm(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Bs(f,s)&&t.ref===n.ref)if(rn=!1,n.pendingProps=s=f,Xc(t,u))(t.flags&131072)!==0&&(rn=!0);else return n.lanes=t.lanes,Ii(t,n,u)}return Pc(t,n,a,s,u)}function hm(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return dm(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&$o(n,f!==null?f.cachePool:null),f!==null?mp(n,f):hc(),gp(n);else return s=n.lanes=536870912,dm(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?($o(n,f.cachePool),mp(n,f),ma(),n.memoizedState=null):(t!==null&&$o(n,null),hc(),ma());return xn(t,n,u,a),n.child}function Js(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function dm(t,n,a,s,u){var f=sc();return f=f===null?null:{parent:nn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&$o(n,null),hc(),gp(n),t!==null&&Pr(t,n,s,!0),n.childLanes=u,null}function ml(t,n){return n=_l({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function pm(t,n,a){return tr(n,t.child,null,a),t=ml(n,n.pendingProps),t.flags|=2,kn(n),n.memoizedState=null,t}function z0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=ml(n,s),n.lanes=536870912,Js(null,t);if(pc(n),(t=ke)?(t=Ag(t,ni),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Mi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=Qd(t),a.return=n,n.child=a,vn=n,ke=null)):t=null,t===null)throw ua(n);return n.lanes=536870912,null}return ml(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(pc(n),u)if(n.flags&256)n.flags&=-257,n=pm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(rn||Pr(t,n,a,!1),u=(a&t.childLanes)!==0,rn||u){if(s=Ve,s!==null&&(g=Mr(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,qa(t,g),Pn(s,t,g),zc;Al(),n=pm(t,n,a)}else t=f.treeContext,ke=ai(g.nextSibling),vn=n,Me=!0,la=null,ni=!1,t!==null&&tp(n,t),n=ml(n,s),n.flags|=4096;return n}return t=Li(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Pc(t,n,a,s,u){return Ka(n),a=gc(t,n,a,s,void 0,u),s=_c(),t!==null&&!rn?(vc(t,n,u),Ii(t,n,u)):(Me&&s&&Qu(n),n.flags|=1,xn(t,n,a,u),n.child)}function mm(t,n,a,s,u,f){return Ka(n),n.updateQueue=null,a=vp(n,s,a,u),_p(t),s=_c(),t!==null&&!rn?(vc(t,n,f),Ii(t,n,f)):(Me&&s&&Qu(n),n.flags|=1,xn(t,n,a,f),n.child)}function gm(t,n,a,s,u){if(Ka(n),n.stateNode===null){var f=Lr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Sn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Nc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},lc(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Sn(g):Lr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Lc(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Nc.enqueueReplaceState(f,f.state,null),Ys(n,s,f,u),qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,P=nr(a,T);f.props=P;var Q=f.context,ct=a.contextType;g=Lr,typeof ct=="object"&&ct!==null&&(g=Sn(ct));var pt=a.getDerivedStateFromProps;ct=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ct||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==g)&&nm(n,f,s,g),fa=!1;var tt=n.memoizedState;f.state=tt,Ys(n,s,f,u),qs(),Q=n.memoizedState,T||tt!==Q||fa?(typeof pt=="function"&&(Lc(n,a,pt,s),Q=n.memoizedState),(P=fa||em(n,a,P,s,tt,Q,g))?(ct||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,uc(t,n),g=n.memoizedProps,ct=nr(a,g),f.props=ct,pt=n.pendingProps,tt=f.context,Q=a.contextType,P=Lr,typeof Q=="object"&&Q!==null&&(P=Sn(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==pt||tt!==P)&&nm(n,f,s,P),fa=!1,tt=n.memoizedState,f.state=tt,Ys(n,s,f,u),qs();var st=n.memoizedState;g!==pt||tt!==st||fa||t!==null&&t.dependencies!==null&&Qo(t.dependencies)?(typeof T=="function"&&(Lc(n,a,T,s),st=n.memoizedState),(ct=fa||em(n,a,ct,s,tt,st,P)||t!==null&&t.dependencies!==null&&Qo(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=P,s=ct):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&tt===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,gl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=tr(n,t.child,null,u),n.child=tr(n,null,a,u)):xn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Ii(t,n,u),t}function _m(t,n,a,s){return Za(),n.flags|=256,xn(t,n,a,s),n.child}var Bc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ic(t){return{baseLanes:t,cachePool:sp()}}function Fc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=qn),t}function vm(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(Je.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?pa(n):ma(),(t=ke)?(t=Ag(t,ni),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:oa!==null?{id:Mi,overflow:yi}:null,retryLane:536870912,hydrationErrors:null},a=Qd(t),a.return=n,n.child=a,vn=n,ke=null)):t=null,t===null)throw ua(n);return yf(t)?n.lanes=32:n.lanes=536870912,null}var T=s.children;return s=s.fallback,u?(ma(),u=n.mode,T=_l({mode:"hidden",children:T},u),s=Ya(s,u,a,null),T.return=n,s.return=n,T.sibling=s,n.child=T,s=n.child,s.memoizedState=Ic(a),s.childLanes=Fc(t,g,a),n.memoizedState=Bc,Js(null,s)):(pa(n),Hc(n,T))}var P=t.memoizedState;if(P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(pa(n),n.flags&=-257,n=Gc(t,n,a)):n.memoizedState!==null?(ma(),n.child=t.child,n.flags|=128,n=null):(ma(),T=s.fallback,u=n.mode,s=_l({mode:"visible",children:s.children},u),T=Ya(T,u,a,null),T.flags|=2,s.return=n,T.return=n,s.sibling=T,n.child=s,tr(n,t.child,null,a),s=n.child,s.memoizedState=Ic(a),s.childLanes=Fc(t,g,a),n.memoizedState=Bc,n=Js(null,s));else if(pa(n),yf(T)){if(g=T.nextSibling&&T.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Hs({value:s,source:null,stack:null}),n=Gc(t,n,a)}else if(rn||Pr(t,n,a,!1),g=(a&t.childLanes)!==0,rn||g){if(g=Ve,g!==null&&(s=Mr(g,a),s!==0&&s!==P.retryLane))throw P.retryLane=s,qa(t,s),Pn(g,t,s),zc;Mf(T)||Al(),n=Gc(t,n,a)}else Mf(T)?(n.flags|=192,n.child=t.child,n=null):(t=P.treeContext,ke=ai(T.nextSibling),vn=n,Me=!0,la=null,ni=!1,t!==null&&tp(n,t),n=Hc(n,s.children),n.flags|=4096);return n}return u?(ma(),T=s.fallback,u=n.mode,P=t.child,Q=P.sibling,s=Li(P,{mode:"hidden",children:s.children}),s.subtreeFlags=P.subtreeFlags&65011712,Q!==null?T=Li(Q,T):(T=Ya(T,u,a,null),T.flags|=2),T.return=n,s.return=n,s.sibling=T,n.child=s,Js(null,s),s=n.child,T=t.child.memoizedState,T===null?T=Ic(a):(u=T.cachePool,u!==null?(P=nn._currentValue,u=u.parent!==P?{parent:P,pool:P}:u):u=sp(),T={baseLanes:T.baseLanes|a,cachePool:u}),s.memoizedState=T,s.childLanes=Fc(t,g,a),n.memoizedState=Bc,Js(t.child,s)):(pa(n),a=t.child,t=a.sibling,a=Li(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Hc(t,n){return n=_l({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function _l(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function Gc(t,n,a){return tr(n,t.child,null,a),t=Hc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Sm(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),nc(t.return,n,a)}function Vc(t,n,a,s,u,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=u,g.treeForkCount=f)}function xm(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var g=Je.current,T=(g&2)!==0;if(T?(g=g&1|2,n.flags|=128):g&=1,xt(Je,g),xn(t,n,s,a),s=Me?Fs:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sm(t,a,n);else if(t.tag===19)Sm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&rl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Vc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&rl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Vc(n,!0,a,null,f,s);break;case"together":Vc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Ii(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Pr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Li(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Li(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Xc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Qo(t)))}function P0(t,n,a){switch(n.tag){case 3:Dt(n,n.stateNode.containerInfo),ca(n,nn,t.memoizedState.cache),Za();break;case 27:case 5:At(n);break;case 4:Dt(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,pc(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(pa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?vm(t,n,a):(pa(n),t=Ii(t,n,a),t!==null?t.sibling:null);pa(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Pr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return xm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(Je,Je.current),s)break;return null;case 22:return n.lanes=0,hm(t,n,a,n.pendingProps);case 24:ca(n,nn,t.memoizedState.cache)}return Ii(t,n,a)}function Mm(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)rn=!0;else{if(!Xc(t,a)&&(n.flags&128)===0)return rn=!1,P0(t,n,a);rn=(t.flags&131072)!==0}else rn=!1,Me&&(n.flags&1048576)!==0&&$d(n,Fs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ja(n.elementType),n.type=t,typeof t=="function")Zu(t)?(s=nr(t,s),n.tag=1,n=gm(null,n,t,s,a)):(n.tag=0,n=Pc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=um(null,n,t,s,a);break t}else if(u===B){n.tag=14,n=cm(null,n,t,s,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return Pc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=nr(s,n.pendingProps),gm(t,n,s,u,a);case 3:t:{if(Dt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,uc(t,n),Ys(n,s,null,a);var g=n.memoizedState;if(s=g.cache,ca(n,nn,s),s!==f.cache&&ic(n,[nn],a,!0),qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=_m(t,n,s,a);break t}else if(s!==u){u=$n(Error(r(424)),n),Hs(u),n=_m(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ke=ai(t.firstChild),vn=n,Me=!0,la=null,ni=!0,a=hp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Za(),s===u){n=Ii(t,n,a);break t}xn(t,n,s,a)}n=n.child}return n;case 26:return gl(t,n),t===null?(a=Lg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,t=n.pendingProps,s=Nl($.current).createElement(a),s[en]=n,s[gn]=t,Mn(s,a,t),vt(s),n.stateNode=s):n.memoizedState=Lg(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return At(n),t===null&&Me&&(s=n.stateNode=wg(n.type,n.pendingProps,$.current),vn=n,ni=!0,u=ke,Ea(n.type)?(Ef=u,ke=ai(s.firstChild)):ke=u),xn(t,n,n.pendingProps.children,a),gl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=s=ke)&&(s=hS(s,n.type,n.pendingProps,ni),s!==null?(n.stateNode=s,vn=n,ke=ai(s.firstChild),ni=!1,u=!0):u=!1),u||ua(n)),At(n),u=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,vf(u,f)?s=null:g!==null&&vf(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=gc(t,n,R0,null,null,a),po._currentValue=u),gl(t,n),xn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=ke)&&(a=dS(a,n.pendingProps,ni),a!==null?(n.stateNode=a,vn=n,ke=null,t=!0):t=!1),t||ua(n)),null;case 13:return vm(t,n,a);case 4:return Dt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=tr(n,null,s,a):xn(t,n,s,a),n.child;case 11:return um(t,n,n.type,n.pendingProps,a);case 7:return xn(t,n,n.pendingProps,a),n.child;case 8:return xn(t,n,n.pendingProps.children,a),n.child;case 12:return xn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,ca(n,n.type,s.value),xn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,Ka(n),u=Sn(u),s=s(u),n.flags|=1,xn(t,n,s,a),n.child;case 14:return cm(t,n,n.type,n.pendingProps,a);case 15:return fm(t,n,n.type,n.pendingProps,a);case 19:return xm(t,n,a);case 31:return z0(t,n,a);case 22:return hm(t,n,a,n.pendingProps);case 24:return Ka(n),s=Sn(nn),t===null?(u=sc(),u===null&&(u=Ve,f=ac(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},lc(n),ca(n,nn,u)):((t.lanes&a)!==0&&(uc(t,n),Ys(n,null,null,a),qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,nn,s)):(s=f.cache,ca(n,nn,s),s!==u.cache&&ic(n,[nn],a,!0))),xn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Fi(t){t.flags|=4}function kc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Zm())t.flags|=8192;else throw $a=el,oc}else t.flags&=-16777217}function ym(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Bg(n))if(Zm())t.flags|=8192;else throw $a=el,oc}function vl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Le():536870912,t.lanes|=n,Zr|=n)}function $s(t,n){if(!Me)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function We(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function B0(t,n,a){var s=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(n),null;case 1:return We(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),zi(nn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(zr(n)?Fi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tc())),We(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Fi(n),f!==null?(We(n),ym(n,f)):(We(n),kc(n,u,null,s,a))):f?f!==t.memoizedState?(Fi(n),We(n),ym(n,f)):(We(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Fi(n),We(n),kc(n,u,t,s,a)),null;case 27:if(zt(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}t=bt.current,zr(n)?ep(n):(t=wg(u,s,a),n.stateNode=t,Fi(n))}return We(n),null;case 5:if(zt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return We(n),null}if(f=bt.current,zr(n))ep(n);else{var g=Nl($.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(u,{is:s.is}):g.createElement(u)}}f[en]=n,f[gn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Mn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Fi(n)}}return We(n),kc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Fi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=$.current,zr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=vn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[en]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||vg(t.nodeValue,a)),t||ua(n,!0)}else t=Nl(t).createTextNode(s),t[en]=n,n.stateNode=t}return We(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=zr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[en]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),t=!1}else a=tc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return We(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=zr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[en]=n}else Za(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;We(n),u=!1}else u=tc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),vl(n,n.updateQueue),We(n),null);case 4:return It(),t===null&&df(n.stateNode.containerInfo),We(n),null;case 10:return zi(n.type),We(n),null;case 19:if(et(Je),s=n.memoizedState,s===null)return We(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)$s(s,!1);else{if(Ke!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=rl(t),f!==null){for(n.flags|=128,$s(s,!1),t=f.updateQueue,n.updateQueue=t,vl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kd(a,t),a=a.sibling;return xt(Je,Je.current&1|2),Me&&Ni(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&E()>El&&(n.flags|=128,u=!0,$s(s,!1),n.lanes=4194304)}else{if(!u)if(t=rl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,vl(n,t),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!Me)return We(n),null}else 2*E()-s.renderingStartTime>El&&a!==536870912&&(n.flags|=128,u=!0,$s(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=E(),t.sibling=null,a=Je.current,xt(Je,u?a&1|2:a&1),Me&&Ni(n,s.treeForkCount),t):(We(n),null);case 22:case 23:return kn(n),dc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(We(n),n.subtreeFlags&6&&(n.flags|=8192)):We(n),a=n.updateQueue,a!==null&&vl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&et(Qa),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(nn),We(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function I0(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return zi(nn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return zt(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(r(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(kn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Za()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return et(Je),null;case 4:return It(),null;case 10:return zi(n.type),null;case 22:case 23:return kn(n),dc(),t!==null&&et(Qa),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return zi(nn),null;case 25:return null;default:return null}}function Em(t,n){switch(Ju(n),n.tag){case 3:zi(nn),It();break;case 26:case 27:case 5:zt(n);break;case 4:It();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:et(Je);break;case 10:zi(n.type);break;case 22:case 23:kn(n),dc(),t!==null&&et(Qa);break;case 24:zi(nn)}}function to(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==u)}}catch(T){Oe(n,n.return,T)}}function ga(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var g=s.inst,T=g.destroy;if(T!==void 0){g.destroy=void 0,u=n;var P=a,Q=T;try{Q()}catch(ct){Oe(u,P,ct)}}}s=s.next}while(s!==f)}}catch(ct){Oe(n,n.return,ct)}}function Tm(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{pp(n,a)}catch(s){Oe(t,t.return,s)}}}function bm(t,n,a){a.props=nr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Oe(t,n,s)}}function eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Oe(t,n,u)}}function Ei(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Oe(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Oe(t,n,u)}else a.current=null}function Am(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Oe(t,t.return,u)}}function Wc(t,n,a){try{var s=t.stateNode;sS(s,t.type,a,n),s[gn]=n}catch(u){Oe(t,t.return,u)}}function Rm(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ea(t.type)||t.tag===4}function qc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Rm(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ea(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Di));else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Yc(t,n,a),t=t.sibling;t!==null;)Yc(t,n,a),t=t.sibling}function Sl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Ea(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Sl(t,n,a),t=t.sibling;t!==null;)Sl(t,n,a),t=t.sibling}function Cm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Mn(n,s,a),n[en]=t,n[gn]=a}catch(f){Oe(t,t.return,f)}}var Hi=!1,sn=!1,Zc=!1,wm=typeof WeakSet=="function"?WeakSet:Set,pn=null;function F0(t,n){if(t=t.containerInfo,gf=Hl,t=Gd(t),Gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,T=-1,P=-1,Q=0,ct=0,pt=t,tt=null;e:for(;;){for(var st;pt!==a||u!==0&&pt.nodeType!==3||(T=g+u),pt!==f||s!==0&&pt.nodeType!==3||(P=g+s),pt.nodeType===3&&(g+=pt.nodeValue.length),(st=pt.firstChild)!==null;)tt=pt,pt=st;for(;;){if(pt===t)break e;if(tt===a&&++Q===u&&(T=g),tt===f&&++ct===s&&(P=g),(st=pt.nextSibling)!==null)break;pt=tt,tt=pt.parentNode}pt=st}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(_f={focusedElem:t,selectionRange:a},Hl=!1,pn=n;pn!==null;)if(n=pn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,pn=t;else for(;pn!==null;){switch(n=pn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Gt=nr(a.type,u);t=s.getSnapshotBeforeUpdate(Gt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(ne){Oe(a,a.return,ne)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)xf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":xf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,pn=t;break}pn=n.return}}function Dm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(t,a),s&4&&to(5,a);break;case 1:if(Vi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Oe(a,a.return,g)}else{var u=nr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Oe(a,a.return,g)}}s&64&&Tm(a),s&512&&eo(a,a.return);break;case 3:if(Vi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pp(t,n)}catch(g){Oe(a,a.return,g)}}break;case 27:n===null&&s&4&&Cm(a);case 26:case 5:Vi(t,a),n===null&&s&4&&Am(a),s&512&&eo(a,a.return);break;case 12:Vi(t,a);break;case 31:Vi(t,a),s&4&&Nm(t,a);break;case 13:Vi(t,a),s&4&&Om(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Z0.bind(null,a),pS(t,a))));break;case 22:if(s=a.memoizedState!==null||Hi,!s){n=n!==null&&n.memoizedState!==null||sn,u=Hi;var f=sn;Hi=s,(sn=n)&&!f?Xi(t,a,(a.subtreeFlags&8772)!==0):Vi(t,a),Hi=u,sn=f}break;case 30:break;default:Vi(t,a)}}function Um(t){var n=t.alternate;n!==null&&(t.alternate=null,Um(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&b(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qe=null,Ln=!1;function Gi(t,n,a){for(a=a.child;a!==null;)Lm(t,n,a),a=a.sibling}function Lm(t,n,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:sn||Ei(a,n),Gi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:sn||Ei(a,n);var s=qe,u=Ln;Ea(a.type)&&(qe=a.stateNode,Ln=!1),Gi(t,n,a),co(a.stateNode),qe=s,Ln=u;break;case 5:sn||Ei(a,n);case 6:if(s=qe,u=Ln,qe=null,Gi(t,n,a),qe=s,Ln=u,qe!==null)if(Ln)try{(qe.nodeType===9?qe.body:qe.nodeName==="HTML"?qe.ownerDocument.body:qe).removeChild(a.stateNode)}catch(f){Oe(a,n,f)}else try{qe.removeChild(a.stateNode)}catch(f){Oe(a,n,f)}break;case 18:qe!==null&&(Ln?(t=qe,Tg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),ns(t)):Tg(qe,a.stateNode));break;case 4:s=qe,u=Ln,qe=a.stateNode.containerInfo,Ln=!0,Gi(t,n,a),qe=s,Ln=u;break;case 0:case 11:case 14:case 15:ga(2,a,n),sn||ga(4,a,n),Gi(t,n,a);break;case 1:sn||(Ei(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&bm(a,n,s)),Gi(t,n,a);break;case 21:Gi(t,n,a);break;case 22:sn=(s=sn)||a.memoizedState!==null,Gi(t,n,a),sn=s;break;default:Gi(t,n,a)}}function Nm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{ns(t)}catch(a){Oe(n,n.return,a)}}}function Om(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{ns(t)}catch(a){Oe(n,n.return,a)}}function H0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new wm),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new wm),n;default:throw Error(r(435,t.tag))}}function xl(t,n){var a=H0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=j0.bind(null,t,s);s.then(u,u)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,g=n,T=g;t:for(;T!==null;){switch(T.tag){case 27:if(Ea(T.type)){qe=T.stateNode,Ln=!1;break t}break;case 5:qe=T.stateNode,Ln=!1;break t;case 3:case 4:qe=T.stateNode.containerInfo,Ln=!0;break t}T=T.return}if(qe===null)throw Error(r(160));Lm(f,g,u),qe=null,Ln=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)zm(n,t),n=n.sibling}var fi=null;function zm(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),s&4&&(ga(3,t,t.return),to(3,t),ga(5,t,t.return));break;case 1:Nn(n,t),On(t),s&512&&(sn||a===null||Ei(a,a.return)),s&64&&Hi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=fi;if(Nn(n,t),On(t),s&512&&(sn||a===null||Ei(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ga]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),Mn(f,s,a),f[en]=t,vt(f),s=f;break t;case"link":var g=zg("link","href",u).get(s+(a.href||""));if(g){for(var T=0;T<g.length;T++)if(f=g[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(T,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;case"meta":if(g=zg("meta","content",u).get(s+(a.content||""))){for(T=0;T<g.length;T++)if(f=g[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(T,1);break e}}f=u.createElement(s),Mn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=t,vt(f),s=f}t.stateNode=s}else Pg(u,t.type,t.stateNode);else t.stateNode=Og(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Pg(u,t.type,t.stateNode):Og(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Wc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),s&512&&(sn||a===null||Ei(a,a.return)),a!==null&&s&4&&Wc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),s&512&&(sn||a===null||Ei(a,a.return)),t.flags&32){u=t.stateNode;try{br(u,"")}catch(Gt){Oe(t,t.return,Gt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,Wc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Zc=!0);break;case 6:if(Nn(n,t),On(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Gt){Oe(t,t.return,Gt)}}break;case 3:if(Pl=null,u=fi,fi=Ol(n.containerInfo),Nn(n,t),fi=u,On(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{ns(n.containerInfo)}catch(Gt){Oe(t,t.return,Gt)}Zc&&(Zc=!1,Pm(t));break;case 4:s=fi,fi=Ol(t.stateNode.containerInfo),Nn(n,t),On(t),fi=s;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yl=E()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 22:u=t.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=Hi,ct=sn;if(Hi=Q||u,sn=ct||P,Nn(n,t),sn=ct,Hi=Q,On(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||Hi||sn||ir(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{T=P.stateNode;var pt=P.memoizedProps.style,tt=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Gt){Oe(P,P.return,Gt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(Gt){Oe(P,P.return,Gt)}}}else if(n.tag===18){if(a===null){P=n;try{var st=P.stateNode;u?bg(st,!0):bg(P.stateNode,!1)}catch(Gt){Oe(P,P.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,xl(t,a))));break;case 19:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,xl(t,s)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(Rm(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=qc(t);Sl(t,f,u);break;case 5:var g=a.stateNode;a.flags&32&&(br(g,""),a.flags&=-33);var T=qc(t);Sl(t,T,g);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=qc(t);Yc(t,Q,P);break;default:throw Error(r(161))}}catch(ct){Oe(t,t.return,ct)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Pm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Pm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function Vi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Dm(t,n.alternate,n),n=n.sibling}function ir(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),ir(n);break;case 1:Ei(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&bm(n,n.return,a),ir(n);break;case 27:co(n.stateNode);case 26:case 5:Ei(n,n.return),ir(n);break;case 22:n.memoizedState===null&&ir(n);break;case 30:ir(n);break;default:ir(n)}t=t.sibling}}function Xi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Xi(u,f,a),to(4,f);break;case 1:if(Xi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Oe(s,s.return,Q)}if(s=f,u=s.updateQueue,u!==null){var T=s.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)dp(P[u],T)}catch(Q){Oe(s,s.return,Q)}}a&&g&64&&Tm(f),eo(f,f.return);break;case 27:Cm(f);case 26:case 5:Xi(u,f,a),a&&s===null&&g&4&&Am(f),eo(f,f.return);break;case 12:Xi(u,f,a);break;case 31:Xi(u,f,a),a&&g&4&&Nm(u,f);break;case 13:Xi(u,f,a),a&&g&4&&Om(u,f);break;case 22:f.memoizedState===null&&Xi(u,f,a),eo(f,f.return);break;case 30:break;default:Xi(u,f,a)}n=n.sibling}}function jc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gs(a))}function Kc(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gs(t))}function hi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Bm(t,n,a,s),n=n.sibling}function Bm(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:hi(t,n,a,s),u&2048&&to(9,n);break;case 1:hi(t,n,a,s);break;case 3:hi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gs(t)));break;case 12:if(u&2048){hi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,T=f.onPostCommit;typeof T=="function"&&T(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(P){Oe(n,n.return,P)}}else hi(t,n,a,s);break;case 31:hi(t,n,a,s);break;case 13:hi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?hi(t,n,a,s):no(t,n):f._visibility&2?hi(t,n,a,s):(f._visibility|=2,Wr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&jc(g,n);break;case 24:hi(t,n,a,s),u&2048&&Kc(n.alternate,n);break;default:hi(t,n,a,s)}}function Wr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,T=a,P=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Wr(f,g,T,P,u),to(8,g);break;case 23:break;case 22:var ct=g.stateNode;g.memoizedState!==null?ct._visibility&2?Wr(f,g,T,P,u):no(f,g):(ct._visibility|=2,Wr(f,g,T,P,u)),u&&Q&2048&&jc(g.alternate,g);break;case 24:Wr(f,g,T,P,u),u&&Q&2048&&Kc(g.alternate,g);break;default:Wr(f,g,T,P,u)}n=n.sibling}}function no(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:no(a,s),u&2048&&jc(s.alternate,s);break;case 24:no(a,s),u&2048&&Kc(s.alternate,s);break;default:no(a,s)}n=n.sibling}}var io=8192;function qr(t,n,a){if(t.subtreeFlags&io)for(t=t.child;t!==null;)Im(t,n,a),t=t.sibling}function Im(t,n,a){switch(t.tag){case 26:qr(t,n,a),t.flags&io&&t.memoizedState!==null&&AS(a,fi,t.memoizedState,t.memoizedProps);break;case 5:qr(t,n,a);break;case 3:case 4:var s=fi;fi=Ol(t.stateNode.containerInfo),qr(t,n,a),fi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=io,io=16777216,qr(t,n,a),io=s):qr(t,n,a));break;default:qr(t,n,a)}}function Fm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Gm(s,t)}Fm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hm(t),t=t.sibling}function Hm(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&ga(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ml(t)):ao(t);break;default:ao(t)}}function Ml(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];pn=s,Gm(s,t)}Fm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ga(8,n,n.return),Ml(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ml(n));break;default:Ml(n)}t=t.sibling}}function Gm(t,n){for(;pn!==null;){var a=pn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Gs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,pn=s;else t:for(a=t;pn!==null;){s=pn;var u=s.sibling,f=s.return;if(Um(s),s===a){pn=null;break t}if(u!==null){u.return=f,pn=u;break t}pn=f}}}var G0={getCacheForType:function(t){var n=Sn(nn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Sn(nn).controller.signal}},V0=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ve=null,ge=null,Se=0,Ne=0,Wn=null,_a=!1,Yr=!1,Qc=!1,ki=0,Ke=0,va=0,ar=0,Jc=0,qn=0,Zr=0,ro=null,zn=null,$c=!1,yl=0,Vm=0,El=1/0,Tl=null,Sa=null,un=0,xa=null,jr=null,Wi=0,tf=0,ef=null,Xm=null,so=0,nf=null;function Yn(){return(Ce&2)!==0&&Se!==0?Se&-Se:N.T!==null?uf():Ha()}function km(){if(qn===0)if((Se&536870912)===0||Me){var t=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),qn=t}else qn=536870912;return t=Xn.current,t!==null&&(t.flags|=32),qn}function Pn(t,n,a){(t===Ve&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)&&(Kr(t,0),Ma(t,Se,qn,!1)),An(t,a),((Ce&2)===0||t!==Ve)&&(t===Ve&&((Ce&2)===0&&(ar|=a),Ke===4&&Ma(t,Se,qn,!1)),Ti(t))}function Wm(t,n,a){if((Ce&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ht(t,n),u=s?W0(t,n):rf(t,n,!0),f=s;do{if(u===0){Yr&&!s&&Ma(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!X0(a)){u=rf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var T=t;u=ro;var P=T.current.memoizedState.isDehydrated;if(P&&(Kr(T,g).flags|=256),g=rf(T,g,!1),g!==2){if(Qc&&!P){T.errorRecoveryDisabledLanes|=f,ar|=f,u=4;break t}f=zn,zn=u,f!==null&&(zn===null?zn=f:zn.push.apply(zn,f))}u=g}if(f=!1,u!==2)continue}}if(u===1){Kr(t,0),Ma(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ma(s,n,qn,!_a);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=yl+300-E(),10<u)){if(Ma(s,n,qn,!_a),gt(s,0,!0)!==0)break t;Wi=n,s.timeoutHandle=yg(qm.bind(null,s,a,zn,Tl,$c,n,qn,ar,Zr,_a,f,"Throttled",-0,0),u);break t}qm(s,a,zn,Tl,$c,n,qn,ar,Zr,_a,f,null,-0,0)}}break}while(!0);Ti(t)}function qm(t,n,a,s,u,f,g,T,P,Q,ct,pt,tt,st){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Di},Im(n,f,pt);var Gt=(f&62914560)===f?yl-E():(f&4194048)===f?Vm-E():0;if(Gt=RS(pt,Gt),Gt!==null){Wi=f,t.cancelPendingCommit=Gt(tg.bind(null,t,n,f,a,s,u,g,T,P,ct,pt,null,tt,st)),Ma(t,f,g,!Q);return}}tg(t,n,f,a,s,u,g,T,P)}function X0(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Gn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ma(t,n,a,s){n&=~Jc,n&=~ar,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),g=1<<f;s[f]=-1,u&=~g}a!==0&&Rs(t,a,n)}function bl(){return(Ce&6)===0?(oo(0),!1):!0}function af(){if(ge!==null){if(Ne===0)var t=ge.return;else t=ge,Oi=ja=null,Sc(t),Hr=null,Xs=0,t=ge;for(;t!==null;)Em(t.alternate,t),t=t.return;ge=null}}function Kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,uS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,af(),Ve=t,ge=a=Li(t.current,null),Se=n,Ne=0,Wn=null,_a=!1,Yr=Ht(t,n),Qc=!1,Zr=qn=Jc=ar=va=Ke=0,zn=ro=null,$c=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-Bt(s),f=1<<u;n|=t[u],s&=~f}return ki=n,qo(),a}function Ym(t,n){ce=null,N.H=Qs,n===Fr||n===tl?(n=up(),Ne=3):n===oc?(n=up(),Ne=4):Ne=n===zc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Wn=n,ge===null&&(Ke=1,pl(t,$n(n,t.current)))}function Zm(){var t=Xn.current;return t===null?!0:(Se&4194048)===Se?ii===null:(Se&62914560)===Se||(Se&536870912)!==0?t===ii:!1}function jm(){var t=N.H;return N.H=Qs,t===null?Qs:t}function Km(){var t=N.A;return N.A=G0,t}function Al(){Ke=4,_a||(Se&4194048)!==Se&&Xn.current!==null||(Yr=!0),(va&134217727)===0&&(ar&134217727)===0||Ve===null||Ma(Ve,Se,qn,!1)}function rf(t,n,a){var s=Ce;Ce|=2;var u=jm(),f=Km();(Ve!==t||Se!==n)&&(Tl=null,Kr(t,n)),n=!1;var g=Ke;t:do try{if(Ne!==0&&ge!==null){var T=ge,P=Wn;switch(Ne){case 8:af(),g=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var Q=Ne;if(Ne=0,Wn=null,Qr(t,T,P,Q),a&&Yr){g=0;break t}break;default:Q=Ne,Ne=0,Wn=null,Qr(t,T,P,Q)}}k0(),g=Ke;break}catch(ct){Ym(t,ct)}while(!0);return n&&t.shellSuspendCounter++,Oi=ja=null,Ce=s,N.H=u,N.A=f,ge===null&&(Ve=null,Se=0,qo()),g}function k0(){for(;ge!==null;)Qm(ge)}function W0(t,n){var a=Ce;Ce|=2;var s=jm(),u=Km();Ve!==t||Se!==n?(Tl=null,El=E()+500,Kr(t,n)):Yr=Ht(t,n);t:do try{if(Ne!==0&&ge!==null){n=ge;var f=Wn;e:switch(Ne){case 1:Ne=0,Wn=null,Qr(t,n,f,1);break;case 2:case 9:if(op(f)){Ne=0,Wn=null,Jm(n);break}n=function(){Ne!==2&&Ne!==9||Ve!==t||(Ne=7),Ti(t)},f.then(n,n);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:op(f)?(Ne=0,Wn=null,Jm(n)):(Ne=0,Wn=null,Qr(t,n,f,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var T=ge;if(g?Bg(g):T.stateNode.complete){Ne=0,Wn=null;var P=T.sibling;if(P!==null)ge=P;else{var Q=T.return;Q!==null?(ge=Q,Rl(Q)):ge=null}break e}}Ne=0,Wn=null,Qr(t,n,f,5);break;case 6:Ne=0,Wn=null,Qr(t,n,f,6);break;case 8:af(),Ke=6;break t;default:throw Error(r(462))}}q0();break}catch(ct){Ym(t,ct)}while(!0);return Oi=ja=null,N.H=s,N.A=u,Ce=a,ge!==null?0:(Ve=null,Se=0,qo(),Ke)}function q0(){for(;ge!==null&&!Ye();)Qm(ge)}function Qm(t){var n=Mm(t.alternate,t,ki);t.memoizedProps=t.pendingProps,n===null?Rl(t):ge=n}function Jm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=mm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=mm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Sc(n);default:Em(a,n),n=ge=Kd(n,ki),n=Mm(a,n,ki)}t.memoizedProps=t.pendingProps,n===null?Rl(t):ge=n}function Qr(t,n,a,s){Oi=ja=null,Sc(n),Hr=null,Xs=0;var u=n.return;try{if(O0(t,u,n,a,Se)){Ke=1,pl(t,$n(a,t.current)),ge=null;return}}catch(f){if(u!==null)throw ge=u,f;Ke=1,pl(t,$n(a,t.current)),ge=null;return}n.flags&32768?(Me||s===1?t=!0:Yr||(Se&536870912)!==0?t=!1:(_a=t=!0,(s===2||s===9||s===3||s===6)&&(s=Xn.current,s!==null&&s.tag===13&&(s.flags|=16384))),$m(n,t)):Rl(n)}function Rl(t){var n=t;do{if((n.flags&32768)!==0){$m(n,_a);return}t=n.return;var a=B0(n.alternate,n,ki);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=t}while(n!==null);Ke===0&&(Ke=5)}function $m(t,n){do{var a=I0(t.alternate,t);if(a!==null){a.flags&=32767,ge=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){ge=t;return}ge=t=a}while(t!==null);Ke=6,ge=null}function tg(t,n,a,s,u,f,g,T,P){t.cancelPendingCommit=null;do Cl();while(un!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=qu,Qn(t,a,f,g,T,P),t===Ve&&(ge=Ve=null,Se=0),jr=n,xa=t,Wi=a,tf=f,ef=u,Xm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,K0(ut,function(){return rg(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=N.T,N.T=null,u=W.p,W.p=2,g=Ce,Ce|=4;try{F0(t,n,a)}finally{Ce=g,W.p=u,N.T=s}}un=1,eg(),ng(),ig()}}function eg(){if(un===1){un=0;var t=xa,n=jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var s=W.p;W.p=2;var u=Ce;Ce|=4;try{zm(n,t);var f=_f,g=Gd(t.containerInfo),T=f.focusedElem,P=f.selectionRange;if(g!==T&&T&&T.ownerDocument&&Hd(T.ownerDocument.documentElement,T)){if(P!==null&&Gu(T)){var Q=P.start,ct=P.end;if(ct===void 0&&(ct=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ct,T.value.length);else{var pt=T.ownerDocument||document,tt=pt&&pt.defaultView||window;if(tt.getSelection){var st=tt.getSelection(),Gt=T.textContent.length,ne=Math.min(P.start,Gt),Be=P.end===void 0?ne:Math.min(P.end,Gt);!st.extend&&ne>Be&&(g=Be,Be=ne,ne=g);var Y=Fd(T,ne),F=Fd(T,Be);if(Y&&F&&(st.rangeCount!==1||st.anchorNode!==Y.node||st.anchorOffset!==Y.offset||st.focusNode!==F.node||st.focusOffset!==F.offset)){var K=pt.createRange();K.setStart(Y.node,Y.offset),st.removeAllRanges(),ne>Be?(st.addRange(K),st.extend(F.node,F.offset)):(K.setEnd(F.node,F.offset),st.addRange(K))}}}}for(pt=[],st=T;st=st.parentNode;)st.nodeType===1&&pt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<pt.length;T++){var dt=pt[T];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Hl=!!gf,_f=gf=null}finally{Ce=u,W.p=s,N.T=a}}t.current=n,un=2}}function ng(){if(un===2){un=0;var t=xa,n=jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var s=W.p;W.p=2;var u=Ce;Ce|=4;try{Dm(t,n.alternate,n)}finally{Ce=u,W.p=s,N.T=a}}un=3}}function ig(){if(un===4||un===3){un=0,U();var t=xa,n=jr,a=Wi,s=Xm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?un=5:(un=0,jr=xa=null,ag(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Sa=null),Er(a),n=n.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=N.T,u=W.p,W.p=2,N.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var T=s[g];f(T.value,{componentStack:T.stack})}}finally{N.T=n,W.p=u}}(Wi&3)!==0&&Cl(),Ti(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===nf?so++:(so=0,nf=t):so=0,oo(0)}}function ag(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Gs(n)))}function Cl(){return eg(),ng(),ig(),rg()}function rg(){if(un!==5)return!1;var t=xa,n=tf;tf=0;var a=Er(Wi),s=N.T,u=W.p;try{W.p=32>a?32:a,N.T=null,a=ef,ef=null;var f=xa,g=Wi;if(un=0,jr=xa=null,Wi=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,Hm(f.current),Bm(f,f.current,g,a),Ce=T,oo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{W.p=u,N.T=s,ag(t,n)}}function sg(t,n,a){n=$n(a,n),n=Oc(t.stateNode,n,2),t=da(t,n,2),t!==null&&(An(t,2),Ti(t))}function Oe(t,n,a){if(t.tag===3)sg(t,t,a);else for(;n!==null;){if(n.tag===3){sg(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Sa===null||!Sa.has(s))){t=$n(a,t),a=om(2),s=da(n,a,2),s!==null&&(lm(a,s,n,t),An(s,2),Ti(s));break}}n=n.return}}function sf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new V0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Qc=!0,u.add(a),t=Y0.bind(null,t,n,a),n.then(t,t))}function Y0(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ve===t&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>E()-yl?(Ce&2)===0&&Kr(t,0):Jc|=a,Zr===Se&&(Zr=0)),Ti(t)}function og(t,n){n===0&&(n=Le()),t=qa(t,n),t!==null&&(An(t,n),Ti(t))}function Z0(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),og(t,a)}function j0(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),og(t,a)}function K0(t,n){return oe(t,n)}var wl=null,Jr=null,of=!1,Dl=!1,lf=!1,ya=0;function Ti(t){t!==Jr&&t.next===null&&(Jr===null?wl=Jr=t:Jr=Jr.next=t),Dl=!0,of||(of=!0,J0())}function oo(t,n){if(!lf&&Dl){lf=!0;do for(var a=!1,s=wl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var g=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-Bt(42|t)+1)-1,f&=u&~(g&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,fg(s,f))}else f=Se,f=gt(s,s===Ve?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Ht(s,f)||(a=!0,fg(s,f));s=s.next}while(a);lf=!1}}function Q0(){lg()}function lg(){Dl=of=!1;var t=0;ya!==0&&lS()&&(t=ya);for(var n=E(),a=null,s=wl;s!==null;){var u=s.next,f=ug(s,n);f===0?(s.next=null,a===null?wl=u:a.next=u,u===null&&(Jr=a)):(a=s,(t!==0||(f&3)!==0)&&(Dl=!0)),s=u}un!==0&&un!==5||oo(t),ya!==0&&(ya=0)}function ug(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Bt(f),T=1<<g,P=u[g];P===-1?((T&a)===0||(T&s)!==0)&&(u[g]=se(T,n)):P<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ve,a=Se,a=gt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ne===2||Ne===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&Ze(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ht(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&Ze(s),Er(a)){case 2:case 8:a=Mt;break;case 32:a=ut;break;case 268435456:a=Rt;break;default:a=ut}return s=cg.bind(null,t),a=oe(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&Ze(s),t.callbackPriority=2,t.callbackNode=null,2}function cg(t,n){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Cl()&&t.callbackNode!==a)return null;var s=Se;return s=gt(t,t===Ve?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Wm(t,s,n),ug(t,E()),t.callbackNode!=null&&t.callbackNode===a?cg.bind(null,t):null)}function fg(t,n){if(Cl())return null;Wm(t,n,!0)}function J0(){cS(function(){(Ce&6)!==0?oe(ht,Q0):lg()})}function uf(){if(ya===0){var t=Br;t===0&&(t=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),ya=t}return ya}function hg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Io(""+t)}function dg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function $0(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=hg((u[gn]||null).action),g=s.submitter;g&&(n=(n=g[gn]||null)?hg(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var T=new Vo("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ya!==0){var P=g?dg(u,g):new FormData(u);Cc(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=g?dg(u,g):new FormData(u),Cc(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var cf=0;cf<Wu.length;cf++){var ff=Wu[cf],tS=ff.toLowerCase(),eS=ff[0].toUpperCase()+ff.slice(1);ci(tS,"on"+eS)}ci(kd,"onAnimationEnd"),ci(Wd,"onAnimationIteration"),ci(qd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(_0,"onTransitionRun"),ci(v0,"onTransitionStart"),ci(S0,"onTransitionCancel"),ci(Yd,"onTransitionEnd"),Qt("onMouseEnter",["mouseout","mouseover"]),Qt("onMouseLeave",["mouseout","mouseover"]),Qt("onPointerEnter",["pointerout","pointerover"]),Qt("onPointerLeave",["pointerout","pointerover"]),Pt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function pg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var T=s[g],P=T.instance,Q=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ct){Wo(ct)}u.currentTarget=null,f=P}else for(g=0;g<s.length;g++){if(T=s[g],P=T.instance,Q=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ct){Wo(ct)}u.currentTarget=null,f=P}}}}function _e(t,n){var a=n[ws];a===void 0&&(a=n[ws]=new Set);var s=t+"__bubble";a.has(s)||(mg(n,t,2,!1),a.add(s))}function hf(t,n,a){var s=0;n&&(s|=4),mg(a,t,s,n)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function df(t){if(!t[Ul]){t[Ul]=!0,Nt.forEach(function(a){a!=="selectionchange"&&(nS.has(a)||hf(a,!1,t),hf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ul]||(n[Ul]=!0,hf("selectionchange",!1,n))}}function mg(t,n,a,s){switch(kg(n)){case 2:var u=DS;break;case 8:u=US;break;default:u=Cf}a=u.bind(null,n,a,t),u=void 0,!Lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function pf(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var T=s.stateNode.containerInfo;if(T===u)break;if(g===4)for(g=s.return;g!==null;){var P=g.tag;if((P===3||P===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;T!==null;){if(g=q(T),g===null)return;if(P=g.tag,P===5||P===6||P===26||P===27){s=f=g;continue t}T=T.parentNode}}s=s.return}xd(function(){var Q=f,ct=Du(a),pt=[];t:{var tt=Zd.get(t);if(tt!==void 0){var st=Vo,Gt=t;switch(t){case"keypress":if(Ho(a)===0)break t;case"keydown":case"keyup":st=jv;break;case"focusin":Gt="focus",st=Pu;break;case"focusout":Gt="blur",st=Pu;break;case"beforeblur":case"afterblur":st=Pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=Jv;break;case kd:case Wd:case qd:st=Hv;break;case Yd:st=t0;break;case"scroll":case"scrollend":st=zv;break;case"wheel":st=n0;break;case"copy":case"cut":case"paste":st=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=bd;break;case"toggle":case"beforetoggle":st=a0}var ne=(n&4)!==0,Be=!ne&&(t==="scroll"||t==="scrollend"),Y=ne?tt!==null?tt+"Capture":null:tt;ne=[];for(var F=Q,K;F!==null;){var dt=F;if(K=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||K===null||Y===null||(dt=Ds(F,Y),dt!=null&&ne.push(uo(F,dt,K))),Be)break;F=F.return}0<ne.length&&(tt=new st(tt,Gt,null,a,ct),pt.push({event:tt,listeners:ne}))}}if((n&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",tt&&a!==wu&&(Gt=a.relatedTarget||a.fromElement)&&(q(Gt)||Gt[ra]))break t;if((st||tt)&&(tt=ct.window===ct?ct:(tt=ct.ownerDocument)?tt.defaultView||tt.parentWindow:window,st?(Gt=a.relatedTarget||a.toElement,st=Q,Gt=Gt?q(Gt):null,Gt!==null&&(Be=c(Gt),ne=Gt.tag,Gt!==Be||ne!==5&&ne!==27&&ne!==6)&&(Gt=null)):(st=null,Gt=Q),st!==Gt)){if(ne=Ed,dt="onMouseLeave",Y="onMouseEnter",F="mouse",(t==="pointerout"||t==="pointerover")&&(ne=bd,dt="onPointerLeave",Y="onPointerEnter",F="pointer"),Be=st==null?tt:at(st),K=Gt==null?tt:at(Gt),tt=new ne(dt,F+"leave",st,a,ct),tt.target=Be,tt.relatedTarget=K,dt=null,q(ct)===Q&&(ne=new ne(Y,F+"enter",Gt,a,ct),ne.target=K,ne.relatedTarget=Be,dt=ne),Be=dt,st&&Gt)e:{for(ne=iS,Y=st,F=Gt,K=0,dt=Y;dt;dt=ne(dt))K++;dt=0;for(var $t=F;$t;$t=ne($t))dt++;for(;0<K-dt;)Y=ne(Y),K--;for(;0<dt-K;)F=ne(F),dt--;for(;K--;){if(Y===F||F!==null&&Y===F.alternate){ne=Y;break e}Y=ne(Y),F=ne(F)}ne=null}else ne=null;st!==null&&gg(pt,tt,st,ne,!1),Gt!==null&&Be!==null&&gg(pt,Be,Gt,ne,!0)}}t:{if(tt=Q?at(Q):window,st=tt.nodeName&&tt.nodeName.toLowerCase(),st==="select"||st==="input"&&tt.type==="file")var be=Nd;else if(Ud(tt))if(Od)be=p0;else{be=h0;var qt=f0}else st=tt.nodeName,!st||st.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&Cu(Q.elementType)&&(be=Nd):be=d0;if(be&&(be=be(t,Q))){Ld(pt,be,a,ct);break t}qt&&qt(t,tt,Q),t==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&ln(tt,"number",tt.value)}switch(qt=Q?at(Q):window,t){case"focusin":(Ud(qt)||qt.contentEditable==="true")&&(wr=qt,Vu=Q,Is=null);break;case"focusout":Is=Vu=wr=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Vd(pt,a,ct);break;case"selectionchange":if(g0)break;case"keydown":case"keyup":Vd(pt,a,ct)}var fe;if(Iu)t:{switch(t){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Cr?wd(t,a)&&(xe="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(xe="onCompositionStart");xe&&(Ad&&a.locale!=="ko"&&(Cr||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Cr&&(fe=Md()):(sa=ct,Nu="value"in sa?sa.value:sa.textContent,Cr=!0)),qt=Ll(Q,xe),0<qt.length&&(xe=new Td(xe,t,null,a,ct),pt.push({event:xe,listeners:qt}),fe?xe.data=fe:(fe=Dd(a),fe!==null&&(xe.data=fe)))),(fe=s0?o0(t,a):l0(t,a))&&(xe=Ll(Q,"onBeforeInput"),0<xe.length&&(qt=new Td("onBeforeInput","beforeinput",null,a,ct),pt.push({event:qt,listeners:xe}),qt.data=fe)),$0(pt,t,Q,a,ct)}pg(pt,n)})}function uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ll(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ds(t,a),u!=null&&s.unshift(uo(t,u,f)),u=Ds(t,n),u!=null&&s.push(uo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function iS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gg(t,n,a,s,u){for(var f=n._reactName,g=[];a!==null&&a!==s;){var T=a,P=T.alternate,Q=T.stateNode;if(T=T.tag,P!==null&&P===s)break;T!==5&&T!==26&&T!==27||Q===null||(P=Q,u?(Q=Ds(a,f),Q!=null&&g.unshift(uo(a,Q,P))):u||(Q=Ds(a,f),Q!=null&&g.push(uo(a,Q,P)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var aS=/\r\n?/g,rS=/\u0000|\uFFFD/g;function _g(t){return(typeof t=="string"?t:""+t).replace(aS,`
`).replace(rS,"")}function vg(t,n){return n=_g(n),_g(t)===n}function Pe(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||br(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&br(t,""+s);break;case"className":De(t,"class",s);break;case"tabIndex":De(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":De(t,a,s);break;case"style":vd(t,s,f);break;case"data":if(n!=="object"){De(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Pe(t,n,"name",u.name,u,null),Pe(t,n,"formEncType",u.formEncType,u,null),Pe(t,n,"formMethod",u.formMethod,u,null),Pe(t,n,"formTarget",u.formTarget,u,null)):(Pe(t,n,"encType",u.encType,u,null),Pe(t,n,"method",u.method,u,null),Pe(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Io(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Di);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Io(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":_e("beforetoggle",t),_e("toggle",t),Ge(t,"popover",s);break;case"xlinkActuate":me(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":me(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":me(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":me(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":me(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":me(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":me(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":me(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":me(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Ge(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nv.get(a)||a,Ge(t,a,s))}}function mf(t,n,a,s,u,f){switch(a){case"style":vd(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?br(t,s):(typeof s=="number"||typeof s=="bigint")&&br(t,""+s);break;case"onScroll":s!=null&&_e("scroll",t);break;case"onScrollEnd":s!=null&&_e("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Di);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[gn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):Ge(t,a,s)}}}function Mn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,f,g,a,null)}}u&&Pe(t,n,"srcSet",a.srcSet,a,null),s&&Pe(t,n,"src",a.src,a,null);return;case"input":_e("invalid",t);var T=f=g=u=null,P=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ct=a[s];if(ct!=null)switch(s){case"name":u=ct;break;case"type":g=ct;break;case"checked":P=ct;break;case"defaultChecked":Q=ct;break;case"value":f=ct;break;case"defaultValue":T=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:Pe(t,n,s,ct,a,null)}}Rn(t,f,T,P,Q,g,u,!1);return;case"select":_e("invalid",t),s=g=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":g=T;break;case"multiple":s=T;default:Pe(t,n,u,T,a,null)}n=f,a=g,t.multiple=!!s,n!=null?Qe(t,!!s,n,!1):a!=null&&Qe(t,!!s,a,!0);return;case"textarea":_e("invalid",t),f=u=s=null;for(g in a)if(a.hasOwnProperty(g)&&(T=a[g],T!=null))switch(g){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Pe(t,n,g,T,a,null)}xi(t,s,u,f);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(s=a[P],s!=null))switch(P){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Pe(t,n,P,s,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(s=0;s<lo.length;s++)_e(lo[s],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Pe(t,n,Q,s,a,null)}return;default:if(Cu(n)){for(ct in a)a.hasOwnProperty(ct)&&(s=a[ct],s!==void 0&&mf(t,n,ct,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&Pe(t,n,T,s,a,null))}function sS(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,g=null,T=null,P=null,Q=null,ct=null;for(st in a){var pt=a[st];if(a.hasOwnProperty(st)&&pt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":P=pt;default:s.hasOwnProperty(st)||Pe(t,n,st,null,s,pt)}}for(var tt in s){var st=s[tt];if(pt=a[tt],s.hasOwnProperty(tt)&&(st!=null||pt!=null))switch(tt){case"type":f=st;break;case"name":u=st;break;case"checked":Q=st;break;case"defaultChecked":ct=st;break;case"value":g=st;break;case"defaultValue":T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==pt&&Pe(t,n,tt,st,s,pt)}}yn(t,g,T,P,Q,ct,f,u);return;case"select":st=g=T=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":st=P;default:s.hasOwnProperty(f)||Pe(t,n,f,null,s,P)}for(u in s)if(f=s[u],P=a[u],s.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":g=f;default:f!==P&&Pe(t,n,u,f,s,P)}n=T,a=g,s=st,tt!=null?Qe(t,!!a,tt,!1):!!s!=!!a&&(n!=null?Qe(t,!!a,n,!0):Qe(t,!!a,a?[]:"",!1));return;case"textarea":st=tt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Pe(t,n,T,null,s,u)}for(g in s)if(u=s[g],f=a[g],s.hasOwnProperty(g)&&(u!=null||f!=null))switch(g){case"value":tt=u;break;case"defaultValue":st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Pe(t,n,g,u,s,f)}Tr(t,tt,st);return;case"option":for(var Gt in a)if(tt=a[Gt],a.hasOwnProperty(Gt)&&tt!=null&&!s.hasOwnProperty(Gt))switch(Gt){case"selected":t.selected=!1;break;default:Pe(t,n,Gt,null,s,tt)}for(P in s)if(tt=s[P],st=a[P],s.hasOwnProperty(P)&&tt!==st&&(tt!=null||st!=null))switch(P){case"selected":t.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Pe(t,n,P,tt,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)tt=a[ne],a.hasOwnProperty(ne)&&tt!=null&&!s.hasOwnProperty(ne)&&Pe(t,n,ne,null,s,tt);for(Q in s)if(tt=s[Q],st=a[Q],s.hasOwnProperty(Q)&&tt!==st&&(tt!=null||st!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(r(137,n));break;default:Pe(t,n,Q,tt,s,st)}return;default:if(Cu(n)){for(var Be in a)tt=a[Be],a.hasOwnProperty(Be)&&tt!==void 0&&!s.hasOwnProperty(Be)&&mf(t,n,Be,void 0,s,tt);for(ct in s)tt=s[ct],st=a[ct],!s.hasOwnProperty(ct)||tt===st||tt===void 0&&st===void 0||mf(t,n,ct,tt,s,st);return}}for(var Y in a)tt=a[Y],a.hasOwnProperty(Y)&&tt!=null&&!s.hasOwnProperty(Y)&&Pe(t,n,Y,null,s,tt);for(pt in s)tt=s[pt],st=a[pt],!s.hasOwnProperty(pt)||tt===st||tt==null&&st==null||Pe(t,n,pt,tt,s,st)}function Sg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function oS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,g=u.initiatorType,T=u.duration;if(f&&T&&Sg(g)){for(g=0,T=u.responseEnd,s+=1;s<a.length;s++){var P=a[s],Q=P.startTime;if(Q>T)break;var ct=P.transferSize,pt=P.initiatorType;ct&&Sg(pt)&&(P=P.responseEnd,g+=ct*(P<T?1:(T-Q)/(P-Q)))}if(--s,n+=8*(f+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gf=null,_f=null;function Nl(t){return t.nodeType===9?t:t.ownerDocument}function xg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Mg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function vf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sf=null;function lS(){var t=window.event;return t&&t.type==="popstate"?t===Sf?!1:(Sf=t,!0):(Sf=null,!1)}var yg=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,cS=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(fS)}:yg;function fS(t){setTimeout(function(){throw t})}function Ea(t){return t==="head"}function Tg(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),ns(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,co(a);for(var f=a.firstChild;f;){var g=f.nextSibling,T=f.nodeName;f[Ga]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&co(t.ownerDocument.body);a=u}while(a);ns(n)}function bg(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function xf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":xf(a),b(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function hS(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ga])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ai(t.nextSibling),t===null)break}return null}function dS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ai(t.nextSibling),t===null))return null;return t}function Ag(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ai(t.nextSibling),t===null))return null;return t}function Mf(t){return t.data==="$?"||t.data==="$~"}function yf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function pS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ef=null;function Rg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Cg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function wg(t,n,a){switch(n=Nl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);b(t)}var ri=new Map,Dg=new Set;function Ol(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var qi=W.d;W.d={f:mS,r:gS,D:_S,C:vS,L:SS,m:xS,X:yS,S:MS,M:ES};function mS(){var t=qi.f(),n=bl();return t||n}function gS(t){var n=it(t);n!==null&&n.tag===5&&n.type==="form"?Yp(n):qi.r(t)}var $r=typeof document>"u"?null:document;function Ug(t,n,a){var s=$r;if(s&&typeof n=="string"&&n){var u=ve(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Dg.has(u)||(Dg.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),Mn(n,"link",t),vt(n),s.head.appendChild(n)))}}function _S(t){qi.D(t),Ug("dns-prefetch",t,null)}function vS(t,n){qi.C(t,n),Ug("preconnect",t,n)}function SS(t,n,a){qi.L(t,n,a);var s=$r;if(s&&t&&n){var u='link[rel="preload"][as="'+ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ve(a.imageSizes)+'"]')):u+='[href="'+ve(t)+'"]';var f=u;switch(n){case"style":f=ts(t);break;case"script":f=es(t)}ri.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ri.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(fo(f))||n==="script"&&s.querySelector(ho(f))||(n=s.createElement("link"),Mn(n,"link",t),vt(n),s.head.appendChild(n)))}}function xS(t,n){qi.m(t,n);var a=$r;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ve(s)+'"][href="'+ve(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=es(t)}if(!ri.has(f)&&(t=v({rel:"modulepreload",href:t},n),ri.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}s=a.createElement("link"),Mn(s,"link",t),vt(s),a.head.appendChild(s)}}}function MS(t,n,a){qi.S(t,n,a);var s=$r;if(s&&t){var u=Z(s).hoistableStyles,f=ts(t);n=n||"default";var g=u.get(f);if(!g){var T={loading:0,preload:null};if(g=s.querySelector(fo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ri.get(f))&&Tf(t,a);var P=g=s.createElement("link");vt(P),Mn(P,"link",t),P._p=new Promise(function(Q,ct){P.onload=Q,P.onerror=ct}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,zl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:T},u.set(f,g)}}}function yS(t,n){qi.X(t,n);var a=$r;if(a&&t){var s=Z(a).hoistableScripts,u=es(t),f=s.get(u);f||(f=a.querySelector(ho(u)),f||(t=v({src:t,async:!0},n),(n=ri.get(u))&&bf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function ES(t,n){qi.M(t,n);var a=$r;if(a&&t){var s=Z(a).hoistableScripts,u=es(t),f=s.get(u);f||(f=a.querySelector(ho(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=ri.get(u))&&bf(t,n),f=a.createElement("script"),vt(f),Mn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Lg(t,n,a,s){var u=(u=$.current)?Ol(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ts(a.href),a=Z(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ts(a.href);var f=Z(u).hoistableStyles,g=f.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=u.querySelector(fo(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ri.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(t,a),f||TS(u,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=es(a),a=Z(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ts(t){return'href="'+ve(t)+'"'}function fo(t){return'link[rel="stylesheet"]['+t+"]"}function Ng(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function TS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Mn(n,"link",a),vt(n),t.head.appendChild(n))}function es(t){return'[src="'+ve(t)+'"]'}function ho(t){return"script[async]"+t}function Og(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+ve(a.href)+'"]');if(s)return n.instance=s,vt(s),s;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),vt(s),Mn(s,"style",u),zl(s,a.precedence,t),n.instance=s;case"stylesheet":u=ts(a.href);var f=t.querySelector(fo(u));if(f)return n.state.loading|=4,n.instance=f,vt(f),f;s=Ng(a),(u=ri.get(u))&&Tf(s,u),f=(t.ownerDocument||t).createElement("link"),vt(f);var g=f;return g._p=new Promise(function(T,P){g.onload=T,g.onerror=P}),Mn(f,"link",s),n.state.loading|=4,zl(f,a.precedence,t),n.instance=f;case"script":return f=es(a.src),(u=t.querySelector(ho(f)))?(n.instance=u,vt(u),u):(s=a,(u=ri.get(f))&&(s=v({},a),bf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),vt(u),Mn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,zl(s,a.precedence,t));return n.instance}function zl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,g=0;g<s.length;g++){var T=s[g];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Tf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function bf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Pl=null;function zg(t,n,a){if(Pl===null){var s=new Map,u=Pl=new Map;u.set(a,s)}else u=Pl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ga]||f[en]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var T=s.get(g);T?T.push(f):s.set(g,[f])}}return s}function Pg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function bS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Bg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function AS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ts(s.href),f=n.querySelector(fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Bl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,vt(f);return}f=n.ownerDocument||n,s=Ng(s),(u=ri.get(u))&&Tf(s,u),f=f.createElement("link"),vt(f);var g=f;g._p=new Promise(function(T,P){g.onload=T,g.onerror=P}),Mn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Bl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Af=0;function RS(t,n){return t.stylesheets&&t.count===0&&Fl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Af===0&&(Af=62500*oS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Fl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Af?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Bl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Fl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Il=null;function Fl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Il=new Map,n.forEach(CS,t),Il=null,Bl.call(t))}function CS(t,n){if(!(n.state.loading&4)){var a=Il.get(t);if(a)var s=a.get(null);else{a=new Map,Il.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var g=u[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}u=n.instance,g=u.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,u),a.set(g,u),this.count++,s=Bl.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var po={$$typeof:z,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function wS(t,n,a,s,u,f,g,T,P){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function Ig(t,n,a,s,u,f,g,T,P,Q,ct,pt){return t=new wS(t,n,a,g,P,Q,ct,pt,T),n=1,f===!0&&(n|=24),f=Vn(3,null,null,n),t.current=f,f.stateNode=t,n=ac(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},lc(f),t}function Fg(t){return t?(t=Lr,t):Lr}function Hg(t,n,a,s,u,f){u=Fg(u),s.context===null?s.context=u:s.pendingContext=u,s=ha(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=da(t,s,n),a!==null&&(Pn(a,t,n),Ws(a,t,n))}function Gg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rf(t,n){Gg(t,n),(t=t.alternate)&&Gg(t,n)}function Vg(t){if(t.tag===13||t.tag===31){var n=qa(t,67108864);n!==null&&Pn(n,t,67108864),Rf(t,67108864)}}function Xg(t){if(t.tag===13||t.tag===31){var n=Yn();n=yr(n);var a=qa(t,n);a!==null&&Pn(a,t,n),Rf(t,n)}}var Hl=!0;function DS(t,n,a,s){var u=N.T;N.T=null;var f=W.p;try{W.p=2,Cf(t,n,a,s)}finally{W.p=f,N.T=u}}function US(t,n,a,s){var u=N.T;N.T=null;var f=W.p;try{W.p=8,Cf(t,n,a,s)}finally{W.p=f,N.T=u}}function Cf(t,n,a,s){if(Hl){var u=wf(s);if(u===null)pf(t,n,s,Gl,a),Wg(t,s);else if(NS(u,t,n,a,s))s.stopPropagation();else if(Wg(t,s),n&4&&-1<LS.indexOf(t)){for(;u!==null;){var f=it(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;g;){var P=1<<31-Bt(g);T.entanglements[1]|=P,g&=~P}Ti(f),(Ce&6)===0&&(El=E()+500,oo(0))}}break;case 31:case 13:T=qa(f,2),T!==null&&Pn(T,f,2),bl(),Rf(f,2)}if(f=wf(s),f===null&&pf(t,n,s,Gl,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else pf(t,n,s,null,a)}}function wf(t){return t=Du(t),Df(t)}var Gl=null;function Df(t){if(Gl=null,t=q(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Gl=t,null}function kg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case ht:return 2;case Mt:return 8;case ut:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var Uf=!1,Ta=null,ba=null,Aa=null,mo=new Map,go=new Map,Ra=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Wg(t,n){switch(t){case"focusin":case"focusout":Ta=null;break;case"dragenter":case"dragleave":ba=null;break;case"mouseover":case"mouseout":Aa=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=it(n),n!==null&&Vg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function NS(t,n,a,s,u){switch(n){case"focusin":return Ta=_o(Ta,t,n,a,s,u),!0;case"dragenter":return ba=_o(ba,t,n,a,s,u),!0;case"mouseover":return Aa=_o(Aa,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return mo.set(f,_o(mo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,go.set(f,_o(go.get(f)||null,t,n,a,s,u)),!0}return!1}function qg(t){var n=q(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Cs(t.priority,function(){Xg(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Cs(t.priority,function(){Xg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Vl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);wu=s,a.target.dispatchEvent(s),wu=null}else return n=it(a),n!==null&&Vg(n),t.blockedOn=a,!1;n.shift()}return!0}function Yg(t,n,a){Vl(t)&&a.delete(n)}function OS(){Uf=!1,Ta!==null&&Vl(Ta)&&(Ta=null),ba!==null&&Vl(ba)&&(ba=null),Aa!==null&&Vl(Aa)&&(Aa=null),mo.forEach(Yg),go.forEach(Yg)}function Xl(t,n){t.blockedOn===n&&(t.blockedOn=null,Uf||(Uf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,OS)))}var kl=null;function Zg(t){kl!==t&&(kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){kl===t&&(kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Df(s||a)===null)continue;break}var f=it(a);f!==null&&(t.splice(n,3),n-=3,Cc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function ns(t){function n(P){return Xl(P,t)}Ta!==null&&Xl(Ta,t),ba!==null&&Xl(ba,t),Aa!==null&&Xl(Aa,t),mo.forEach(n),go.forEach(n);for(var a=0;a<Ra.length;a++){var s=Ra[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ra.length&&(a=Ra[0],a.blockedOn===null);)qg(a),a.blockedOn===null&&Ra.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],g=u[gn]||null;if(typeof f=="function")g||Zg(a);else if(g){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,g=f[gn]||null)T=g.formAction;else if(Df(u)!==null)continue}else T=g.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),Zg(a)}}}function jg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Lf(t){this._internalRoot=t}Wl.prototype.render=Lf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Yn();Hg(a,s,t,n,null,null)},Wl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Hg(t.current,2,null,t,null,null),bl(),n[ra]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ha();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ra.length&&n!==0&&n<Ra[a].priority;a++);Ra.splice(a,0,t),a===0&&qg(t)}};var Kg=e.version;if(Kg!=="19.2.0")throw Error(r(527,Kg,"19.2.0"));W.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var zS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{Et=ql.inject(zS),Ct=ql}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=im,f=am,g=rm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Ig(t,1,!1,null,null,a,s,null,u,f,g,jg),t[ra]=n.current,df(t),new Lf(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=im,g=am,T=rm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=Ig(t,1,!0,n,a??null,s,u,P,f,g,T,jg),n.context=Fg(null),a=n.current,s=Yn(),s=yr(s),u=ha(s),u.callback=null,da(a,u,s),a=s,n.current.lanes=a,An(n,a),Ti(n),t[ra]=n.current,df(t),new Wl(n)},So.version="19.2.0",So}var s_;function qS(){if(s_)return zf.exports;s_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),zf.exports=WS(),zf.exports}var YS=qS();const ZS=nv(YS);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="180",jS=0,o_=1,KS=2,iv=1,QS=2,Ji=3,Ia=0,In=1,ta=2,Pa=0,vs=1,l_=2,u_=3,c_=4,JS=5,dr=100,$S=101,tx=102,ex=103,nx=104,ix=200,ax=201,rx=202,sx=203,gh=204,_h=205,ox=206,lx=207,ux=208,cx=209,fx=210,hx=211,dx=212,px=213,mx=214,vh=0,Sh=1,xh=2,xs=3,Mh=4,yh=5,Eh=6,Th=7,av=0,gx=1,_x=2,Ba=0,vx=1,Sx=2,xx=3,Mx=4,yx=5,Ex=6,Tx=7,rv=300,Ms=301,ys=302,bh=303,Ah=304,Eu=306,Rh=1e3,mr=1001,Ch=1002,vi=1003,bx=1004,Yl=1005,ui=1006,Ff=1007,gr=1008,ia=1009,sv=1010,ov=1011,Ao=1012,od=1013,vr=1014,ea=1015,Uo=1016,ld=1017,ud=1018,Ro=1020,lv=35902,uv=35899,cv=1021,fv=1022,_i=1023,Co=1026,wo=1027,hv=1028,cd=1029,dv=1030,fd=1031,hd=1033,mu=33776,gu=33777,_u=33778,vu=33779,wh=35840,Dh=35841,Uh=35842,Lh=35843,Nh=36196,Oh=37492,zh=37496,Ph=37808,Bh=37809,Ih=37810,Fh=37811,Hh=37812,Gh=37813,Vh=37814,Xh=37815,kh=37816,Wh=37817,qh=37818,Yh=37819,Zh=37820,jh=37821,Kh=36492,Qh=36494,Jh=36495,$h=36283,td=36284,ed=36285,nd=36286,Ax=3200,Rx=3201,Cx=0,wx=1,za="",oi="srgb",Es="srgb-linear",xu="linear",Ie="srgb",is=7680,f_=519,Dx=512,Ux=513,Lx=514,pv=515,Nx=516,Ox=517,zx=518,Px=519,h_=35044,d_="300 es",Ai=2e3,Mu=2001;class bs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,id=180/Math.PI;function Lo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[i&63|128]+Tn[i>>8&255]+"-"+Tn[i>>16&255]+Tn[i>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function ye(o,e,i){return Math.max(e,Math.min(i,o))}function Bx(o,e){return(o%e+e)%e}function Gf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,i=0){Fe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class No{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let m=r[l+0],p=r[l+1],S=r[l+2],v=r[l+3];const x=c[h+0],y=c[h+1],A=c[h+2],C=c[h+3];if(d===0){e[i+0]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(v!==C||m!==x||p!==y||S!==A){let M=1-d;const _=m*x+p*y+S*A+v*C,I=_>=0?1:-1,z=1-_*_;if(z>Number.EPSILON){const V=Math.sqrt(z),H=Math.atan2(V,_*I);M=Math.sin(M*H)/V,d=Math.sin(d*H)/V}const D=d*I;if(m=m*M+x*D,p=p*M+y*D,S=S*M+A*D,v=v*M+C*D,M===1-d){const V=1/Math.sqrt(m*m+p*p+S*S+v*v);m*=V,p*=V,S*=V,v*=V}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],m=r[l+1],p=r[l+2],S=r[l+3],v=c[h],x=c[h+1],y=c[h+2],A=c[h+3];return e[i]=d*A+S*v+m*y-p*x,e[i+1]=m*A+S*x+p*v-d*y,e[i+2]=p*A+S*y+d*x-m*v,e[i+3]=S*A-d*v-m*x-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,m=Math.sin,p=d(r/2),S=d(l/2),v=d(c/2),x=m(r/2),y=m(l/2),A=m(c/2);switch(h){case"XYZ":this._x=x*S*v+p*y*A,this._y=p*y*v-x*S*A,this._z=p*S*A+x*y*v,this._w=p*S*v-x*y*A;break;case"YXZ":this._x=x*S*v+p*y*A,this._y=p*y*v-x*S*A,this._z=p*S*A-x*y*v,this._w=p*S*v+x*y*A;break;case"ZXY":this._x=x*S*v-p*y*A,this._y=p*y*v+x*S*A,this._z=p*S*A+x*y*v,this._w=p*S*v-x*y*A;break;case"ZYX":this._x=x*S*v-p*y*A,this._y=p*y*v+x*S*A,this._z=p*S*A-x*y*v,this._w=p*S*v+x*y*A;break;case"YZX":this._x=x*S*v+p*y*A,this._y=p*y*v+x*S*A,this._z=p*S*A-x*y*v,this._w=p*S*v-x*y*A;break;case"XZY":this._x=x*S*v-p*y*A,this._y=p*y*v-x*S*A,this._z=p*S*A+x*y*v,this._w=p*S*v+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],S=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(S-m)*y,this._y=(c-p)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(S-m)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+p)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-p)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(m+S)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+p)/y,this._y=(m+S)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ye(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,m=i._y,p=i._z,S=i._w;return this._x=r*S+h*d+l*p-c*m,this._y=l*S+h*m+c*d-r*p,this._z=c*S+h*p+r*m-l*d,this._w=h*S-r*d-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const y=1-i;return this._w=y*h+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),S=Math.atan2(p,d),v=Math.sin((1-i)*S)/p,x=Math.sin(i*S)/p;return this._w=h*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(p_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(p_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,m=e.w,p=2*(h*l-d*r),S=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+m*p+h*v-d*S,this.y=r+m*S+d*p-c*v,this.z=l+m*v+c*S-h*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-r*m,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(ye(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new rt,p_=new No;class he{constructor(e,i,r,l,c,h,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p)}set(e,i,r,l,c,h,d,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=d,S[3]=i,S[4]=c,S[5]=m,S[6]=r,S[7]=h,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],S=r[4],v=r[7],x=r[2],y=r[5],A=r[8],C=l[0],M=l[3],_=l[6],I=l[1],z=l[4],D=l[7],V=l[2],H=l[5],B=l[8];return c[0]=h*C+d*I+m*V,c[3]=h*M+d*z+m*H,c[6]=h*_+d*D+m*B,c[1]=p*C+S*I+v*V,c[4]=p*M+S*z+v*H,c[7]=p*_+S*D+v*B,c[2]=x*C+y*I+A*V,c[5]=x*M+y*z+A*H,c[8]=x*_+y*D+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8];return i*h*S-i*d*p-r*c*S+r*d*m+l*c*p-l*h*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=S*h-d*p,x=d*m-S*c,y=p*c-h*m,A=i*v+r*x+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=v*C,e[1]=(l*p-S*r)*C,e[2]=(d*r-l*h)*C,e[3]=x*C,e[4]=(S*i-l*m)*C,e[5]=(l*c-d*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(h*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*h+p*d)+h+e,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Xf.makeScale(e,i)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new he;function mv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Ix(){const o=yu("canvas");return o.style.display="block",o}const m_={};function Do(o){o in m_||(m_[o]=!0,console.warn(o))}function Fx(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const g_=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),__=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hx(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ie&&(l.r=na(l.r),l.g=na(l.g),l.b=na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ie&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===za?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Do("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Do("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:e,whitePoint:r,transfer:xu,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Ie,toXYZ:g_,fromXYZ:__,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),o}const Re=Hx();function na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let as;class Gx{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{as===void 0&&(as=yu("canvas")),as.width=e.width,as.height=e.height;const l=as.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=as}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=na(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(na(i[r]/255)*255):i[r]=na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vx=0;class dd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vx++}),this.uuid=Lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(kf(l[h].image)):c.push(kf(l[h]))}else c=kf(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Gx.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xx=0;const Wf=new rt;class Dn extends bs{constructor(e=Dn.DEFAULT_IMAGE,i=Dn.DEFAULT_MAPPING,r=mr,l=mr,c=ui,h=gr,d=_i,m=ia,p=Dn.DEFAULT_ANISOTROPY,S=za){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Lo(),this.name="",this.source=new dd(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Wf).x}get height(){return this.source.getSize(Wf).y}get depth(){return this.source.getSize(Wf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rh:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Ch:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rh:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Ch:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=rv;Dn.DEFAULT_ANISOTROPY=1;class tn{constructor(e=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],S=m[4],v=m[8],x=m[1],y=m[5],A=m[9],C=m[2],M=m[6],_=m[10];if(Math.abs(S-x)<.01&&Math.abs(v-C)<.01&&Math.abs(A-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(v+C)<.1&&Math.abs(A+M)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const z=(p+1)/2,D=(y+1)/2,V=(_+1)/2,H=(S+x)/4,B=(v+C)/4,j=(A+M)/4;return z>D&&z>V?z<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(z),l=H/r,c=B/r):D>V?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=H/l,c=j/l):V<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),r=B/c,l=j/c),this.set(r,l,c,i),this}let I=Math.sqrt((M-A)*(M-A)+(v-C)*(v-C)+(x-S)*(x-S));return Math.abs(I)<.001&&(I=1),this.x=(M-A)/I,this.y=(v-C)/I,this.z=(x-S)/I,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=ye(this.x,e.x,i.x),this.y=ye(this.y,e.y,i.y),this.z=ye(this.z,e.z,i.z),this.w=ye(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=ye(this.x,e,i),this.y=ye(this.y,e,i),this.z=ye(this.z,e,i),this.w=ye(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kx extends bs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new tn(0,0,e,i),this.scissorTest=!1,this.viewport=new tn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Dn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new dd(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sr extends kx{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class gv extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wx extends Dn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,di):di.fromBufferAttribute(c,h),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),jl.subVectors(this.max,Mo),rs.subVectors(e.a,Mo),ss.subVectors(e.b,Mo),os.subVectors(e.c,Mo),wa.subVectors(ss,rs),Da.subVectors(os,ss),rr.subVectors(rs,os);let i=[0,-wa.z,wa.y,0,-Da.z,Da.y,0,-rr.z,rr.y,wa.z,0,-wa.x,Da.z,0,-Da.x,rr.z,0,-rr.x,-wa.y,wa.x,0,-Da.y,Da.x,0,-rr.y,rr.x,0];return!qf(i,rs,ss,os,jl)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,rs,ss,os,jl))?!1:(Kl.crossVectors(wa,Da),i=[Kl.x,Kl.y,Kl.z],qf(i,rs,ss,os,jl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],di=new rt,Zl=new Oo,rs=new rt,ss=new rt,os=new rt,wa=new rt,Da=new rt,rr=new rt,Mo=new rt,jl=new rt,Kl=new rt,sr=new rt;function qf(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){sr.fromArray(o,c);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=e.dot(sr),p=i.dot(sr),S=r.dot(sr);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>d)return!1}return!0}const qx=new Oo,yo=new rt,Yf=new rt;class pd{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):qx.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const i=yo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(yo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Yf)),this.expandByPoint(yo.copy(e.center).sub(Yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Zi=new rt,Zf=new rt,Ql=new rt,Ua=new rt,jf=new rt,Jl=new rt,Kf=new rt;class Yx{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Zi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zf.copy(e).add(i).multiplyScalar(.5),Ql.copy(i).sub(e).normalize(),Ua.copy(this.origin).sub(Zf);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Ql),d=Ua.dot(this.direction),m=-Ua.dot(Ql),p=Ua.lengthSq(),S=Math.abs(1-h*h);let v,x,y,A;if(S>0)if(v=h*m-d,x=h*d-m,A=c*S,v>=0)if(x>=-A)if(x<=A){const C=1/S;v*=C,x*=C,y=v*(v+h*x+2*d)+x*(h*v+x+2*m)+p}else x=c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x=-c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;else x<=-A?(v=Math.max(0,-(-h*c+d)),x=v>0?-c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p):x<=A?(v=0,x=Math.min(Math.max(-c,-m),c),y=x*(x+2*m)+p):(v=Math.max(0,-(h*c+d)),x=v>0?c:Math.min(Math.max(-c,-m),c),y=-v*v+x*(x+2*m)+p);else x=h>0?-c:c,v=Math.max(0,-(h*x+d)),y=-v*v+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zf).addScaledVector(Ql,x),y}intersectSphere(e,i){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,m;const p=1/this.direction.x,S=1/this.direction.y,v=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),S>=0?(c=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(c=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-x.z)*v,m=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,m=(e.min.z-x.z)*v),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,i,r,l,c){jf.subVectors(i,e),Jl.subVectors(r,e),Kf.crossVectors(jf,Jl);let h=this.direction.dot(Kf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ua.subVectors(this.origin,e);const m=d*this.direction.dot(Jl.crossVectors(Ua,Jl));if(m<0)return null;const p=d*this.direction.dot(jf.cross(Ua));if(p<0||m+p>h)return null;const S=-d*Ua.dot(Kf);return S<0?null:this.at(S/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cn{constructor(e,i,r,l,c,h,d,m,p,S,v,x,y,A,C,M){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,m,p,S,v,x,y,A,C,M)}set(e,i,r,l,c,h,d,m,p,S,v,x,y,A,C,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=S,_[10]=v,_[14]=x,_[3]=y,_[7]=A,_[11]=C,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ls.setFromMatrixColumn(e,0).length(),c=1/ls.setFromMatrixColumn(e,1).length(),h=1/ls.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=h*S,y=h*v,A=d*S,C=d*v;i[0]=m*S,i[4]=-m*v,i[8]=p,i[1]=y+A*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=A+y*p,i[10]=h*m}else if(e.order==="YXZ"){const x=m*S,y=m*v,A=p*S,C=p*v;i[0]=x+C*d,i[4]=A*d-y,i[8]=h*p,i[1]=h*v,i[5]=h*S,i[9]=-d,i[2]=y*d-A,i[6]=C+x*d,i[10]=h*m}else if(e.order==="ZXY"){const x=m*S,y=m*v,A=p*S,C=p*v;i[0]=x-C*d,i[4]=-h*v,i[8]=A+y*d,i[1]=y+A*d,i[5]=h*S,i[9]=C-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(e.order==="ZYX"){const x=h*S,y=h*v,A=d*S,C=d*v;i[0]=m*S,i[4]=A*p-y,i[8]=x*p+C,i[1]=m*v,i[5]=C*p+x,i[9]=y*p-A,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(e.order==="YZX"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*S,i[4]=C-x*v,i[8]=A*v+y,i[1]=v,i[5]=h*S,i[9]=-d*S,i[2]=-p*S,i[6]=y*v+A,i[10]=x-C*v}else if(e.order==="XZY"){const x=h*m,y=h*p,A=d*m,C=d*p;i[0]=m*S,i[4]=-v,i[8]=p*S,i[1]=x*v+C,i[5]=h*S,i[9]=y*v-A,i[2]=A*v-y,i[6]=d*S,i[10]=C*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zx,e,jx)}lookAt(e,i,r){const l=this.elements;return Zn.subVectors(e,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),La.crossVectors(r,Zn),La.lengthSq()===0&&(Math.abs(r.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),La.crossVectors(r,Zn)),La.normalize(),$l.crossVectors(Zn,La),l[0]=La.x,l[4]=$l.x,l[8]=Zn.x,l[1]=La.y,l[5]=$l.y,l[9]=Zn.y,l[2]=La.z,l[6]=$l.z,l[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],S=r[1],v=r[5],x=r[9],y=r[13],A=r[2],C=r[6],M=r[10],_=r[14],I=r[3],z=r[7],D=r[11],V=r[15],H=l[0],B=l[4],j=l[8],R=l[12],w=l[1],G=l[5],nt=l[9],lt=l[13],mt=l[2],ft=l[6],N=l[10],W=l[14],k=l[3],_t=l[7],St=l[11],O=l[15];return c[0]=h*H+d*w+m*mt+p*k,c[4]=h*B+d*G+m*ft+p*_t,c[8]=h*j+d*nt+m*N+p*St,c[12]=h*R+d*lt+m*W+p*O,c[1]=S*H+v*w+x*mt+y*k,c[5]=S*B+v*G+x*ft+y*_t,c[9]=S*j+v*nt+x*N+y*St,c[13]=S*R+v*lt+x*W+y*O,c[2]=A*H+C*w+M*mt+_*k,c[6]=A*B+C*G+M*ft+_*_t,c[10]=A*j+C*nt+M*N+_*St,c[14]=A*R+C*lt+M*W+_*O,c[3]=I*H+z*w+D*mt+V*k,c[7]=I*B+z*G+D*ft+V*_t,c[11]=I*j+z*nt+D*N+V*St,c[15]=I*R+z*lt+D*W+V*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],m=e[9],p=e[13],S=e[2],v=e[6],x=e[10],y=e[14],A=e[3],C=e[7],M=e[11],_=e[15];return A*(+c*m*v-l*p*v-c*d*x+r*p*x+l*d*y-r*m*y)+C*(+i*m*y-i*p*x+c*h*x-l*h*y+l*p*S-c*m*S)+M*(+i*p*v-i*d*y-c*h*v+r*h*y+c*d*S-r*p*S)+_*(-l*d*S-i*m*v+i*d*x+l*h*v-r*h*x+r*m*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],m=e[6],p=e[7],S=e[8],v=e[9],x=e[10],y=e[11],A=e[12],C=e[13],M=e[14],_=e[15],I=v*M*p-C*x*p+C*m*y-d*M*y-v*m*_+d*x*_,z=A*x*p-S*M*p-A*m*y+h*M*y+S*m*_-h*x*_,D=S*C*p-A*v*p+A*d*y-h*C*y-S*d*_+h*v*_,V=A*v*m-S*C*m-A*d*x+h*C*x+S*d*M-h*v*M,H=i*I+r*z+l*D+c*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/H;return e[0]=I*B,e[1]=(C*x*c-v*M*c-C*l*y+r*M*y+v*l*_-r*x*_)*B,e[2]=(d*M*c-C*m*c+C*l*p-r*M*p-d*l*_+r*m*_)*B,e[3]=(v*m*c-d*x*c-v*l*p+r*x*p+d*l*y-r*m*y)*B,e[4]=z*B,e[5]=(S*M*c-A*x*c+A*l*y-i*M*y-S*l*_+i*x*_)*B,e[6]=(A*m*c-h*M*c-A*l*p+i*M*p+h*l*_-i*m*_)*B,e[7]=(h*x*c-S*m*c+S*l*p-i*x*p-h*l*y+i*m*y)*B,e[8]=D*B,e[9]=(A*v*c-S*C*c-A*r*y+i*C*y+S*r*_-i*v*_)*B,e[10]=(h*C*c-A*d*c+A*r*p-i*C*p-h*r*_+i*d*_)*B,e[11]=(S*d*c-h*v*c-S*r*p+i*v*p+h*r*y-i*d*y)*B,e[12]=V*B,e[13]=(S*C*l-A*v*l+A*r*x-i*C*x-S*r*M+i*v*M)*B,e[14]=(A*d*l-h*C*l-A*r*m+i*C*m+h*r*M-i*d*M)*B,e[15]=(h*v*l-S*d*l+S*r*m-i*v*m-h*r*x+i*d*x)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,m=e.z,p=c*h,S=c*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,S*d+r,S*m-l*h,0,p*m-l*d,S*m+l*h,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,S=h+h,v=d+d,x=c*p,y=c*S,A=c*v,C=h*S,M=h*v,_=d*v,I=m*p,z=m*S,D=m*v,V=r.x,H=r.y,B=r.z;return l[0]=(1-(C+_))*V,l[1]=(y+D)*V,l[2]=(A-z)*V,l[3]=0,l[4]=(y-D)*H,l[5]=(1-(x+_))*H,l[6]=(M+I)*H,l[7]=0,l[8]=(A+z)*B,l[9]=(M-I)*B,l[10]=(1-(x+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ls.set(l[0],l[1],l[2]).length();const h=ls.set(l[4],l[5],l[6]).length(),d=ls.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],pi.copy(this);const p=1/c,S=1/h,v=1/d;return pi.elements[0]*=p,pi.elements[1]*=p,pi.elements[2]*=p,pi.elements[4]*=S,pi.elements[5]*=S,pi.elements[6]*=S,pi.elements[8]*=v,pi.elements[9]*=v,pi.elements[10]*=v,i.setFromRotationMatrix(pi),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Ai,m=!1){const p=this.elements,S=2*c/(i-e),v=2*c/(r-l),x=(i+e)/(i-e),y=(r+l)/(r-l);let A,C;if(m)A=c/(h-c),C=h*c/(h-c);else if(d===Ai)A=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===Mu)A=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=v,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Ai,m=!1){const p=this.elements,S=2/(i-e),v=2/(r-l),x=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,C;if(m)A=1/(h-c),C=h/(h-c);else if(d===Ai)A=-2/(h-c),C=-(h+c)/(h-c);else if(d===Mu)A=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=S,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=v,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ls=new rt,pi=new cn,Zx=new rt(0,0,0),jx=new rt(1,1,1),La=new rt,$l=new rt,Zn=new rt,v_=new cn,S_=new No;class aa{constructor(e=0,i=0,r=0,l=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],S=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ye(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ye(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-S,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return v_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(v_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return S_.setFromEuler(this),this.setFromQuaternion(S_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class _v{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kx=0;const x_=new rt,us=new No,ji=new cn,tu=new rt,Eo=new rt,Qx=new rt,Jx=new No,M_=new rt(1,0,0),y_=new rt(0,1,0),E_=new rt(0,0,1),T_={type:"added"},$x={type:"removed"},cs={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Fn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fn.DEFAULT_UP.clone();const e=new rt,i=new aa,r=new No,l=new rt(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new he}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=Fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _v,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(M_,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(E_,e)}translateOnAxis(e,i){return x_.copy(e).applyQuaternion(this.quaternion),this.position.add(x_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(M_,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(E_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?tu.copy(e):tu.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Eo,tu,this.up):ji.lookAt(tu,Eo,this.up),this.quaternion.setFromRotationMatrix(ji),l&&(ji.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ji),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(T_),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent($x),Qf.child=e,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(T_),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,Qx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Jx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(e.materials,this.material[m]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(e.animations,m))}}if(i){const d=h(e.geometries),m=h(e.materials),p=h(e.textures),S=h(e.images),v=h(e.shapes),x=h(e.skeletons),y=h(e.animations),A=h(e.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),S.length>0&&(r.images=S),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function h(d){const m=[];for(const p in d){const S=d[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Fn.DEFAULT_UP=new rt(0,1,0);Fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mi=new rt,Ki=new rt,Jf=new rt,Qi=new rt,fs=new rt,hs=new rt,b_=new rt,$f=new rt,th=new rt,eh=new rt,nh=new tn,ih=new tn,ah=new tn;class gi{constructor(e=new rt,i=new rt,r=new rt){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),mi.subVectors(e,i),l.cross(mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){mi.subVectors(l,i),Ki.subVectors(r,i),Jf.subVectors(e,i);const h=mi.dot(mi),d=mi.dot(Ki),m=mi.dot(Jf),p=Ki.dot(Ki),S=Ki.dot(Jf),v=h*p-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,y=(p*m-d*S)*x,A=(h*S-d*m)*x;return c.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,i,r,l,c,h,d,m){return this.getBarycoord(e,i,r,l,Qi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Qi.x),m.addScaledVector(h,Qi.y),m.addScaledVector(d,Qi.z),m)}static getInterpolatedAttribute(e,i,r,l,c,h){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(e,i),ih.fromBufferAttribute(e,r),ah.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(nh,c.x),h.addScaledVector(ih,c.y),h.addScaledVector(ah,c.z),h}static isFrontFacing(e,i,r,l){return mi.subVectors(r,i),Ki.subVectors(e,i),mi.cross(Ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mi.subVectors(this.c,this.b),Ki.subVectors(this.a,this.b),mi.cross(Ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return gi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return gi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;fs.subVectors(l,r),hs.subVectors(c,r),$f.subVectors(e,r);const m=fs.dot($f),p=hs.dot($f);if(m<=0&&p<=0)return i.copy(r);th.subVectors(e,l);const S=fs.dot(th),v=hs.dot(th);if(S>=0&&v<=S)return i.copy(l);const x=m*v-S*p;if(x<=0&&m>=0&&S<=0)return h=m/(m-S),i.copy(r).addScaledVector(fs,h);eh.subVectors(e,c);const y=fs.dot(eh),A=hs.dot(eh);if(A>=0&&y<=A)return i.copy(c);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return d=p/(p-A),i.copy(r).addScaledVector(hs,d);const M=S*A-y*v;if(M<=0&&v-S>=0&&y-A>=0)return b_.subVectors(c,l),d=(v-S)/(v-S+(y-A)),i.copy(l).addScaledVector(b_,d);const _=1/(M+C+x);return h=C*_,d=x*_,i.copy(r).addScaledVector(fs,h).addScaledVector(hs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Na={h:0,s:0,l:0},eu={h:0,s:0,l:0};function rh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Re.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Re.workingColorSpace){return this.r=e,this.g=i,this.b=r,Re.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Re.workingColorSpace){if(e=Bx(e,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=rh(h,c,e+1/3),this.g=rh(h,c,e),this.b=rh(h,c,e-1/3)}return Re.colorSpaceToWorking(this,l),this}setStyle(e,i=oi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=oi){const r=vv[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Re.workingToColorSpace(bn.copy(this),e),Math.round(ye(bn.r*255,0,255))*65536+Math.round(ye(bn.g*255,0,255))*256+Math.round(ye(bn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Re.workingColorSpace){Re.workingToColorSpace(bn.copy(this),i);const r=bn.r,l=bn.g,c=bn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let m,p;const S=(d+h)/2;if(d===h)m=0,p=0;else{const v=h-d;switch(p=S<=.5?v/(h+d):v/(2-h-d),h){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=Re.workingColorSpace){return Re.workingToColorSpace(bn.copy(this),i),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=oi){Re.workingToColorSpace(bn.copy(this),e);const i=bn.r,r=bn.g,l=bn.b;return e!==oi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Na),this.setHSL(Na.h+e,Na.s+i,Na.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Na),e.getHSL(eu);const r=Gf(Na.h,eu.h,i),l=Gf(Na.s,eu.s,i),c=Gf(Na.l,eu.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Ue;Ue.NAMES=vv;let tM=0;class Tu extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Lo(),this.name="",this.type="Material",this.blending=vs,this.side=Ia,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gh,this.blendDst=_h,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Ia&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==gh&&(r.blendSrc=this.blendSrc),this.blendDst!==_h&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==f_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class md extends Tu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const on=new rt,nu=new Fe;let eM=0;class Ci{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=h_,this.updateRanges=[],this.gpuType=ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)nu.fromBufferAttribute(this,i),nu.applyMatrix3(e),this.setXY(i,nu.x,nu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix3(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyMatrix4(e),this.setXYZ(i,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.applyNormalMatrix(e),this.setXYZ(i,on.x,on.y,on.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)on.fromBufferAttribute(this,i),on.transformDirection(e),this.setXYZ(i,on.x,on.y,on.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==h_&&(e.usage=this.usage),e}}class Sv extends Ci{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class xv extends Ci{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class _r extends Ci{constructor(e,i,r){super(new Float32Array(e),i,r)}}let nM=0;const si=new cn,sh=new Fn,ds=new rt,jn=new Oo,To=new Oo,mn=new rt;class xr extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(mv(e)?xv:Sv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new he().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,i,r){return si.makeTranslation(e,i,r),this.applyMatrix4(si),this}scale(e,i,r){return si.makeScale(e,i,r),this.applyMatrix4(si),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new _r(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];jn.setFromBufferAttribute(c),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];To.setFromBufferAttribute(d),this.morphTargetsRelative?(mn.addVectors(jn.min,To.min),jn.expandByPoint(mn),mn.addVectors(jn.max,To.max),jn.expandByPoint(mn)):(jn.expandByPoint(To.min),jn.expandByPoint(To.max))}jn.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(mn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,S=d.count;p<S;p++)mn.fromBufferAttribute(d,p),m&&(ds.fromBufferAttribute(e,p),mn.add(ds)),l=Math.max(l,r.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<r.count;j++)d[j]=new rt,m[j]=new rt;const p=new rt,S=new rt,v=new rt,x=new Fe,y=new Fe,A=new Fe,C=new rt,M=new rt;function _(j,R,w){p.fromBufferAttribute(r,j),S.fromBufferAttribute(r,R),v.fromBufferAttribute(r,w),x.fromBufferAttribute(c,j),y.fromBufferAttribute(c,R),A.fromBufferAttribute(c,w),S.sub(p),v.sub(p),y.sub(x),A.sub(x);const G=1/(y.x*A.y-A.x*y.y);isFinite(G)&&(C.copy(S).multiplyScalar(A.y).addScaledVector(v,-y.y).multiplyScalar(G),M.copy(v).multiplyScalar(y.x).addScaledVector(S,-A.x).multiplyScalar(G),d[j].add(C),d[R].add(C),d[w].add(C),m[j].add(M),m[R].add(M),m[w].add(M))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let j=0,R=I.length;j<R;++j){const w=I[j],G=w.start,nt=w.count;for(let lt=G,mt=G+nt;lt<mt;lt+=3)_(e.getX(lt+0),e.getX(lt+1),e.getX(lt+2))}const z=new rt,D=new rt,V=new rt,H=new rt;function B(j){V.fromBufferAttribute(l,j),H.copy(V);const R=d[j];z.copy(R),z.sub(V.multiplyScalar(V.dot(R))).normalize(),D.crossVectors(H,R);const G=D.dot(m[j])<0?-1:1;h.setXYZW(j,z.x,z.y,z.z,G)}for(let j=0,R=I.length;j<R;++j){const w=I[j],G=w.start,nt=w.count;for(let lt=G,mt=G+nt;lt<mt;lt+=3)B(e.getX(lt+0)),B(e.getX(lt+1)),B(e.getX(lt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new rt,c=new rt,h=new rt,d=new rt,m=new rt,p=new rt,S=new rt,v=new rt;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),C=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,A),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,M),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),d.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),d.add(S),m.add(S),p.add(S),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,c),v.subVectors(l,c),S.cross(v),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)mn.fromBufferAttribute(e,i),mn.normalize(),e.setXYZ(i,mn.x,mn.y,mn.z)}toNonIndexed(){function e(d,m){const p=d.array,S=d.itemSize,v=d.normalized,x=new p.constructor(m.length*S);let y=0,A=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*S;for(let _=0;_<S;_++)x[A++]=p[y++]}return new Ci(x,S,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xr,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=e(m,r);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let S=0,v=p.length;S<v;S++){const x=p[S],y=e(x,r);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let v=0,x=p.length;v<x;v++){const y=p[v];S.push(y.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],v=c[p];for(let x=0,y=v.length;x<y;x++)S.push(v[x].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let p=0,S=h.length;p<S;p++){const v=h[p];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A_=new cn,or=new Yx,iu=new pd,R_=new rt,au=new rt,ru=new rt,su=new rt,oh=new rt,ou=new rt,C_=new rt,lu=new rt;class Ri extends Fn{constructor(e=new xr,i=new md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){ou.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=d[m],v=c[m];S!==0&&(oh.fromBufferAttribute(v,e),h?ou.addScaledVector(oh,S):ou.addScaledVector(oh.sub(i),S))}i.add(ou)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),iu.copy(r.boundingSphere),iu.applyMatrix4(c),or.copy(e.ray).recast(e.near),!(iu.containsPoint(or.origin)===!1&&(or.intersectSphere(iu,R_)===null||or.origin.distanceToSquared(R_)>(e.far-e.near)**2))&&(A_.copy(c).invert(),or.copy(e.ray).applyMatrix4(A_),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,or)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,v=c.attributes.normal,x=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],I=Math.max(M.start,y.start),z=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,V=z;D<V;D+=3){const H=d.getX(D),B=d.getX(D+1),j=d.getX(D+2);l=uu(this,_,e,r,p,S,v,H,B,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const I=d.getX(M),z=d.getX(M+1),D=d.getX(M+2);l=uu(this,h,e,r,p,S,v,I,z,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let A=0,C=x.length;A<C;A++){const M=x[A],_=h[M.materialIndex],I=Math.max(M.start,y.start),z=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let D=I,V=z;D<V;D+=3){const H=D,B=D+1,j=D+2;l=uu(this,_,e,r,p,S,v,H,B,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=A,_=C;M<_;M+=3){const I=M,z=M+1,D=M+2;l=uu(this,h,e,r,p,S,v,I,z,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function iM(o,e,i,r,l,c,h,d){let m;if(e.side===In?m=r.intersectTriangle(h,c,l,!0,d):m=r.intersectTriangle(l,c,h,e.side===Ia,d),m===null)return null;lu.copy(d),lu.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(lu);return p<i.near||p>i.far?null:{distance:p,point:lu.clone(),object:o}}function uu(o,e,i,r,l,c,h,d,m,p){o.getVertexPosition(d,au),o.getVertexPosition(m,ru),o.getVertexPosition(p,su);const S=iM(o,e,i,r,au,ru,su,C_);if(S){const v=new rt;gi.getBarycoord(C_,au,ru,su,v),l&&(S.uv=gi.getInterpolatedAttribute(l,d,m,p,v,new Fe)),c&&(S.uv1=gi.getInterpolatedAttribute(c,d,m,p,v,new Fe)),h&&(S.normal=gi.getInterpolatedAttribute(h,d,m,p,v,new rt),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new rt,materialIndex:0};gi.getNormal(au,ru,su,x.normal),S.face=x,S.barycoord=v}return S}class zo extends xr{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],S=[],v=[];let x=0,y=0;A("z","y","x",-1,-1,r,i,e,h,c,0),A("z","y","x",1,-1,r,i,-e,h,c,1),A("x","z","y",1,1,e,r,i,l,h,2),A("x","z","y",1,-1,e,r,-i,l,h,3),A("x","y","z",1,-1,e,i,r,l,c,4),A("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new _r(p,3)),this.setAttribute("normal",new _r(S,3)),this.setAttribute("uv",new _r(v,2));function A(C,M,_,I,z,D,V,H,B,j,R){const w=D/B,G=V/j,nt=D/2,lt=V/2,mt=H/2,ft=B+1,N=j+1;let W=0,k=0;const _t=new rt;for(let St=0;St<N;St++){const O=St*G-lt;for(let et=0;et<ft;et++){const xt=et*w-nt;_t[C]=xt*I,_t[M]=O*z,_t[_]=mt,p.push(_t.x,_t.y,_t.z),_t[C]=0,_t[M]=0,_t[_]=H>0?1:-1,S.push(_t.x,_t.y,_t.z),v.push(et/B),v.push(1-St/j),W+=1}}for(let St=0;St<j;St++)for(let O=0;O<B;O++){const et=x+O+ft*St,xt=x+O+ft*(St+1),bt=x+(O+1)+ft*(St+1),Ut=x+(O+1)+ft*St;m.push(et,xt,Ut),m.push(xt,bt,Ut),k+=6}d.addGroup(y,k,R),y+=k,x+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function wn(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function aM(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Mv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Re.workingColorSpace}const rM={clone:Ts,merge:wn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends Tu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class yv extends Fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oa=new rt,w_=new Fe,D_=new Fe;class li extends yv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Oa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z),Oa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Oa.x,Oa.y).multiplyScalar(-e/Oa.z)}getViewSize(e,i){return this.getViewBounds(e,w_,D_),i.subVectors(D_,w_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Hf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ps=-90,ms=1;class lM extends Fn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(ps,ms,e,i);l.layers=this.layers,this.add(l);const c=new li(ps,ms,e,i);c.layers=this.layers,this.add(c);const h=new li(ps,ms,e,i);h.layers=this.layers,this.add(h);const d=new li(ps,ms,e,i);d.layers=this.layers,this.add(d);const m=new li(ps,ms,e,i);m.layers=this.layers,this.add(m);const p=new li(ps,ms,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Mu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,S]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,S),e.setRenderTarget(v,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ev extends Dn{constructor(e=[],i=Ms,r,l,c,h,d,m,p,S){super(e,i,r,l,c,h,d,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uM extends Sr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new zo(5,5,5),c=new Fa({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Pa});c.uniforms.tEquirect.value=i;const h=new Ri(l,c),d=i.minFilter;return i.minFilter===gr&&(i.minFilter=ui),new lM(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class cu extends Fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cM={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){h=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,r),_=this._getHandJoint(p,C);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const S=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],x=S.position.distanceTo(v.position),y=.02,A=.005;p.inputState.pinching&&x>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(cM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new cu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class fM extends Fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const uh=new rt,hM=new rt,dM=new he;class fr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(hM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||dM.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new pd,pM=new Fe(.5,.5),fu=new rt;class Tv{constructor(e=new fr,i=new fr,r=new fr,l=new fr,c=new fr,h=new fr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ai,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],m=c[2],p=c[3],S=c[4],v=c[5],x=c[6],y=c[7],A=c[8],C=c[9],M=c[10],_=c[11],I=c[12],z=c[13],D=c[14],V=c[15];if(l[0].setComponents(p-h,y-S,_-A,V-I).normalize(),l[1].setComponents(p+h,y+S,_+A,V+I).normalize(),l[2].setComponents(p+d,y+v,_+C,V+z).normalize(),l[3].setComponents(p-d,y-v,_-C,V-z).normalize(),r)l[4].setComponents(m,x,M,D).normalize(),l[5].setComponents(p-m,y-x,_-M,V-D).normalize();else if(l[4].setComponents(p-m,y-x,_-M,V-D).normalize(),i===Ai)l[5].setComponents(p+m,y+x,_+M,V+D).normalize();else if(i===Mu)l[5].setComponents(m,x,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){lr.center.set(0,0,0);const i=pM.distanceTo(e.center);return lr.radius=.7071067811865476+i,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(fu.x=l.normal.x>0?e.max.x:e.min.x,fu.y=l.normal.y>0?e.max.y:e.min.y,fu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(fu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mM extends Dn{constructor(e,i,r,l,c,h,d,m,p){super(e,i,r,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bv extends Dn{constructor(e,i,r=vr,l,c,h,d=vi,m=vi,p,S=Co,v=1){if(S!==Co&&S!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,h,d,m,S,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Av extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Po extends xr{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,S=m+1,v=e/d,x=i/m,y=[],A=[],C=[],M=[];for(let _=0;_<S;_++){const I=_*x-h;for(let z=0;z<p;z++){const D=z*v-c;A.push(D,-I,0),C.push(0,0,1),M.push(z/d),M.push(1-_/m)}}for(let _=0;_<m;_++)for(let I=0;I<d;I++){const z=I+p*_,D=I+p*(_+1),V=I+1+p*(_+1),H=I+1+p*_;y.push(z,D,H),y.push(D,V,H)}this.setIndex(y),this.setAttribute("position",new _r(A,3)),this.setAttribute("normal",new _r(C,3)),this.setAttribute("uv",new _r(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.widthSegments,e.heightSegments)}}class gM extends Tu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _M extends Tu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class vM extends Fn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class SM extends yv{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=S*this.view.offsetY,m=d-S*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class xM extends vM{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class MM extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function U_(o,e,i,r){const l=yM(r);switch(i){case cv:return o*e;case hv:return o*e/l.components*l.byteLength;case cd:return o*e/l.components*l.byteLength;case dv:return o*e*2/l.components*l.byteLength;case fd:return o*e*2/l.components*l.byteLength;case fv:return o*e*3/l.components*l.byteLength;case _i:return o*e*4/l.components*l.byteLength;case hd:return o*e*4/l.components*l.byteLength;case mu:case gu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case _u:case vu:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dh:case Lh:return Math.max(o,16)*Math.max(e,8)/4;case wh:case Uh:return Math.max(o,8)*Math.max(e,8)/2;case Nh:case Oh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case zh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Wh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Zh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Kh:case Qh:case Jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case $h:case td:return Math.ceil(o/4)*Math.ceil(e/4)*8;case ed:case nd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function yM(o){switch(o){case ia:case sv:return{byteLength:1,components:1};case Ao:case ov:case Uo:return{byteLength:2,components:1};case ld:case ud:return{byteLength:2,components:4};case vr:case od:case ea:return{byteLength:4,components:1};case lv:case uv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rv(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function EM(o){const e=new WeakMap;function i(d,m){const p=d.array,S=d.usage,v=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,S),d.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,m,p){const S=m.array,v=m.updateRanges;if(o.bindBuffer(p,d),v.length===0)o.bufferSubData(p,0,S);else{v.sort((y,A)=>y.start-A.start);let x=0;for(let y=1;y<v.length;y++){const A=v[x],C=v[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++x,v[x]=C)}v.length=x+1;for(let y=0,A=v.length;y<A;y++){const C=v[y];o.bufferSubData(p,C.start*S.BYTES_PER_ELEMENT,S,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(o.deleteBuffer(m.buffer),e.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,RM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,CM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,UM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,OM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,BM=`#ifdef USE_IRIDESCENCE
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
#endif`,IM=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YM=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,ZM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fy=`#ifdef USE_GRADIENTMAP
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
}`,hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,gy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,_y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,My=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Ey=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ty=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,by=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ry=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ly=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ny=`#if defined( USE_POINTS_UV )
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
#endif`,Oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Py=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,By=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,Yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hE=`#ifdef USE_SKINNING
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
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vE=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TE=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,DE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,LE=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PE=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BE=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,IE=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,HE=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,VE=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,kE=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,qE=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ZE=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,KE=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QE=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$E=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,tT=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,eT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:TM,alphahash_pars_fragment:bM,alphamap_fragment:AM,alphamap_pars_fragment:RM,alphatest_fragment:CM,alphatest_pars_fragment:wM,aomap_fragment:DM,aomap_pars_fragment:UM,batching_pars_vertex:LM,batching_vertex:NM,begin_vertex:OM,beginnormal_vertex:zM,bsdfs:PM,iridescence_fragment:BM,bumpmap_pars_fragment:IM,clipping_planes_fragment:FM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:XM,color_pars_fragment:kM,color_pars_vertex:WM,color_vertex:qM,common:YM,cube_uv_reflection_fragment:ZM,defaultnormal_vertex:jM,displacementmap_pars_vertex:KM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:$M,colorspace_fragment:ty,colorspace_pars_fragment:ey,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:ay,envmap_pars_vertex:ry,envmap_physical_pars_fragment:gy,envmap_vertex:sy,fog_vertex:oy,fog_pars_vertex:ly,fog_fragment:uy,fog_pars_fragment:cy,gradientmap_pars_fragment:fy,lightmap_pars_fragment:hy,lights_lambert_fragment:dy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:_y,lights_toon_pars_fragment:vy,lights_phong_fragment:Sy,lights_phong_pars_fragment:xy,lights_physical_fragment:My,lights_physical_pars_fragment:yy,lights_fragment_begin:Ey,lights_fragment_maps:Ty,lights_fragment_end:by,logdepthbuf_fragment:Ay,logdepthbuf_pars_fragment:Ry,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:wy,map_fragment:Dy,map_pars_fragment:Uy,map_particle_fragment:Ly,map_particle_pars_fragment:Ny,metalnessmap_fragment:Oy,metalnessmap_pars_fragment:zy,morphinstance_vertex:Py,morphcolor_vertex:By,morphnormal_vertex:Iy,morphtarget_pars_vertex:Fy,morphtarget_vertex:Hy,normal_fragment_begin:Gy,normal_fragment_maps:Vy,normal_pars_fragment:Xy,normal_pars_vertex:ky,normal_vertex:Wy,normalmap_pars_fragment:qy,clearcoat_normal_fragment_begin:Yy,clearcoat_normal_fragment_maps:Zy,clearcoat_pars_fragment:jy,iridescence_pars_fragment:Ky,opaque_fragment:Qy,packing:Jy,premultiplied_alpha_fragment:$y,project_vertex:tE,dithering_fragment:eE,dithering_pars_fragment:nE,roughnessmap_fragment:iE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:lE,skinbase_vertex:uE,skinning_pars_vertex:cE,skinning_vertex:fE,skinnormal_vertex:hE,specularmap_fragment:dE,specularmap_pars_fragment:pE,tonemapping_fragment:mE,tonemapping_pars_fragment:gE,transmission_fragment:_E,transmission_pars_fragment:vE,uv_pars_fragment:SE,uv_pars_vertex:xE,uv_vertex:ME,worldpos_vertex:yE,background_vert:EE,background_frag:TE,backgroundCube_vert:bE,backgroundCube_frag:AE,cube_vert:RE,cube_frag:CE,depth_vert:wE,depth_frag:DE,distanceRGBA_vert:UE,distanceRGBA_frag:LE,equirect_vert:NE,equirect_frag:OE,linedashed_vert:zE,linedashed_frag:PE,meshbasic_vert:BE,meshbasic_frag:IE,meshlambert_vert:FE,meshlambert_frag:HE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:XE,meshnormal_frag:kE,meshphong_vert:WE,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:ZE,meshtoon_vert:jE,meshtoon_frag:KE,points_vert:QE,points_frag:JE,shadow_vert:$E,shadow_frag:tT,sprite_vert:eT,sprite_frag:nT},Ot={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},bi={basic:{uniforms:wn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:wn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:wn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:wn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:wn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ue(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:wn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:wn([Ot.points,Ot.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:wn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:wn([Ot.common,Ot.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:wn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:wn([Ot.sprite,Ot.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:wn([Ot.common,Ot.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:wn([Ot.lights,Ot.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};bi.physical={uniforms:wn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const hu={r:0,b:0,g:0},ur=new aa,iT=new cn;function aT(o,e,i,r,l,c,h){const d=new Ue(0);let m=c===!0?0:1,p,S,v=null,x=0,y=null;function A(z){let D=z.isScene===!0?z.background:null;return D&&D.isTexture&&(D=(z.backgroundBlurriness>0?i:e).get(D)),D}function C(z){let D=!1;const V=A(z);V===null?_(d,m):V&&V.isColor&&(_(V,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(z,D){const V=A(D);V&&(V.isCubeTexture||V.mapping===Eu)?(S===void 0&&(S=new Ri(new zo(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:Ts(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(H,B,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(S)),ur.copy(D.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),S.material.uniforms.envMap.value=V,S.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(iT.makeRotationFromEuler(ur)),S.material.toneMapped=Re.getTransfer(V.colorSpace)!==Ie,(v!==V||x!==V.version||y!==o.toneMapping)&&(S.material.needsUpdate=!0,v=V,x=V.version,y=o.toneMapping),S.layers.enableAll(),z.unshift(S,S.geometry,S.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ri(new Po(2,2),new Fa({name:"BackgroundMaterial",uniforms:Ts(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Ia,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(V.colorSpace)!==Ie,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||x!==V.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,v=V,x=V.version,y=o.toneMapping),p.layers.enableAll(),z.unshift(p,p.geometry,p.material,0,0,null))}function _(z,D){z.getRGB(hu,Mv(o)),r.buffers.color.setClear(hu.r,hu.g,hu.b,D,h)}function I(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(z,D=1){d.set(z),m=D,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(z){m=z,_(d,m)},render:C,addToRenderList:M,dispose:I}}function rT(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(w,G,nt,lt,mt){let ft=!1;const N=v(lt,nt,G);c!==N&&(c=N,p(c.object)),ft=y(w,lt,nt,mt),ft&&A(w,lt,nt,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ft||h)&&(h=!1,D(w,G,nt,lt),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(w){return o.bindVertexArray(w)}function S(w){return o.deleteVertexArray(w)}function v(w,G,nt){const lt=nt.wireframe===!0;let mt=r[w.id];mt===void 0&&(mt={},r[w.id]=mt);let ft=mt[G.id];ft===void 0&&(ft={},mt[G.id]=ft);let N=ft[lt];return N===void 0&&(N=x(m()),ft[lt]=N),N}function x(w){const G=[],nt=[],lt=[];for(let mt=0;mt<i;mt++)G[mt]=0,nt[mt]=0,lt[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:nt,attributeDivisors:lt,object:w,attributes:{},index:null}}function y(w,G,nt,lt){const mt=c.attributes,ft=G.attributes;let N=0;const W=nt.getAttributes();for(const k in W)if(W[k].location>=0){const St=mt[k];let O=ft[k];if(O===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(O=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(O=w.instanceColor)),St===void 0||St.attribute!==O||O&&St.data!==O.data)return!0;N++}return c.attributesNum!==N||c.index!==lt}function A(w,G,nt,lt){const mt={},ft=G.attributes;let N=0;const W=nt.getAttributes();for(const k in W)if(W[k].location>=0){let St=ft[k];St===void 0&&(k==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),k==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const O={};O.attribute=St,St&&St.data&&(O.data=St.data),mt[k]=O,N++}c.attributes=mt,c.attributesNum=N,c.index=lt}function C(){const w=c.newAttributes;for(let G=0,nt=w.length;G<nt;G++)w[G]=0}function M(w){_(w,0)}function _(w,G){const nt=c.newAttributes,lt=c.enabledAttributes,mt=c.attributeDivisors;nt[w]=1,lt[w]===0&&(o.enableVertexAttribArray(w),lt[w]=1),mt[w]!==G&&(o.vertexAttribDivisor(w,G),mt[w]=G)}function I(){const w=c.newAttributes,G=c.enabledAttributes;for(let nt=0,lt=G.length;nt<lt;nt++)G[nt]!==w[nt]&&(o.disableVertexAttribArray(nt),G[nt]=0)}function z(w,G,nt,lt,mt,ft,N){N===!0?o.vertexAttribIPointer(w,G,nt,mt,ft):o.vertexAttribPointer(w,G,nt,lt,mt,ft)}function D(w,G,nt,lt){C();const mt=lt.attributes,ft=nt.getAttributes(),N=G.defaultAttributeValues;for(const W in ft){const k=ft[W];if(k.location>=0){let _t=mt[W];if(_t===void 0&&(W==="instanceMatrix"&&w.instanceMatrix&&(_t=w.instanceMatrix),W==="instanceColor"&&w.instanceColor&&(_t=w.instanceColor)),_t!==void 0){const St=_t.normalized,O=_t.itemSize,et=e.get(_t);if(et===void 0)continue;const xt=et.buffer,bt=et.type,Ut=et.bytesPerElement,$=bt===o.INT||bt===o.UNSIGNED_INT||_t.gpuType===od;if(_t.isInterleavedBufferAttribute){const ot=_t.data,Dt=ot.stride,It=_t.offset;if(ot.isInstancedInterleavedBuffer){for(let At=0;At<k.locationSize;At++)_(k.location+At,ot.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let At=0;At<k.locationSize;At++)M(k.location+At);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let At=0;At<k.locationSize;At++)z(k.location+At,O/k.locationSize,bt,St,Dt*Ut,(It+O/k.locationSize*At)*Ut,$)}else{if(_t.isInstancedBufferAttribute){for(let ot=0;ot<k.locationSize;ot++)_(k.location+ot,_t.meshPerAttribute);w.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let ot=0;ot<k.locationSize;ot++)M(k.location+ot);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let ot=0;ot<k.locationSize;ot++)z(k.location+ot,O/k.locationSize,bt,St,O*Ut,O/k.locationSize*ot*Ut,$)}}else if(N!==void 0){const St=N[W];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(k.location,St);break;case 3:o.vertexAttrib3fv(k.location,St);break;case 4:o.vertexAttrib4fv(k.location,St);break;default:o.vertexAttrib1fv(k.location,St)}}}}I()}function V(){j();for(const w in r){const G=r[w];for(const nt in G){const lt=G[nt];for(const mt in lt)S(lt[mt].object),delete lt[mt];delete G[nt]}delete r[w]}}function H(w){if(r[w.id]===void 0)return;const G=r[w.id];for(const nt in G){const lt=G[nt];for(const mt in lt)S(lt[mt].object),delete lt[mt];delete G[nt]}delete r[w.id]}function B(w){for(const G in r){const nt=r[G];if(nt[w.id]===void 0)continue;const lt=nt[w.id];for(const mt in lt)S(lt[mt].object),delete lt[mt];delete nt[w.id]}}function j(){R(),h=!0,c!==l&&(c=l,p(c.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:R,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:M,disableUnusedAttributes:I}}function sT(o,e,i){let r;function l(p){r=p}function c(p,S){o.drawArrays(r,p,S),i.update(S,r,1)}function h(p,S,v){v!==0&&(o.drawArraysInstanced(r,p,S,v),i.update(S,r,v))}function d(p,S,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,S,0,v);let y=0;for(let A=0;A<v;A++)y+=S[A];i.update(y,r,1)}function m(p,S,v,x){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)h(p[A],S[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,S,0,x,0,v);let A=0;for(let C=0;C<v;C++)A+=S[C]*x[C];i.update(A,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function oT(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(B){return!(B!==_i&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const j=B===Uo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==ia&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ea&&!j)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),z=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=A>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:I,maxVaryings:z,maxFragmentUniforms:D,vertexTextures:V,maxSamples:H}}function lT(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new fr,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=S(v,x,0)},this.setState=function(v,x,y){const A=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,_=o.get(v);if(!l||A===null||A.length===0||c&&!M)c?S(null):p();else{const I=c?0:r,z=I*4;let D=_.clippingState||null;m.value=D,D=S(A,x,z,y);for(let V=0;V!==z;++V)D[V]=i[V];_.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function S(v,x,y,A){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=m.value,A!==!0||M===null){const _=y+C*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(M===null||M.length<_)&&(M=new Float32Array(_));for(let z=0,D=y;z!==C;++z,D+=4)h.copy(v[z]).applyMatrix4(I,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}function uT(o){let e=new WeakMap;function i(h,d){return d===bh?h.mapping=Ms:d===Ah&&(h.mapping=ys),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===bh||d===Ah)if(e.has(h)){const m=e.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new uM(m.height);return p.fromEquirectangularTexture(o,h),e.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const _s=4,L_=[.125,.215,.35,.446,.526,.582],pr=20,ch=new SM,N_=new Ue;let fh=null,hh=0,dh=0,ph=!1;const hr=(1+Math.sqrt(5))/2,gs=1/hr,O_=[new rt(-hr,gs,0),new rt(hr,gs,0),new rt(-gs,0,hr),new rt(gs,0,hr),new rt(0,hr,-gs),new rt(0,hr,gs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],cT=new rt;class z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=cT}=c;fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=B_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,hh,dh),this._renderer.xr.enabled=ph,e.scissorTest=!1,du(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),dh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Uo,format:_i,colorSpace:Es,depthBuffer:!1},l=P_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(c)),this._blurMaterial=hT(c,e,i)}return l}_compileMaterial(e){const i=new Ri(this._lodPlanes[0],e);this._renderer.compile(i,ch)}_sceneToCubeUV(e,i,r,l,c){const m=new li(90,1,i,r),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(N_),v.toneMapping=Ba,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const C=new md({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),M=new Ri(new zo,C);let _=!1;const I=e.background;I?I.isColor&&(C.color.copy(I),e.background=null,_=!0):(C.color.copy(N_),_=!0);for(let z=0;z<6;z++){const D=z%3;D===0?(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[z],c.y,c.z)):D===1?(m.up.set(0,0,p[z]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[z],c.z)):(m.up.set(0,p[z],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[z]));const V=this._cubeSize;du(l,D*V,z>2?V:0,V,V),v.setRenderTarget(l),_&&v.render(M,m),v.render(e,m)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=x,e.background=I}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===ys;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=B_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ri(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const m=this._cubeSize;du(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,ch)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=O_[(l-c-1)%O_.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,v=new Ri(this._lodPlanes[l],p),x=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*pr-1),C=c/A,M=isFinite(c)?1+Math.floor(S*C):pr;M>pr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${pr}`);const _=[];let I=0;for(let B=0;B<pr;++B){const j=B/C,R=Math.exp(-j*j/2);_.push(R),B===0?I+=R:B<M&&(I+=2*R)}for(let B=0;B<_.length;B++)_[B]=_[B]/I;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:z}=this;x.dTheta.value=A,x.mipInt.value=z-r;const D=this._sizeLods[l],V=3*D*(l>z-_s?l-z+_s:0),H=4*(this._cubeSize-D);du(i,V,H,3*D,2*D),m.setRenderTarget(i),m.render(v,ch)}}function fT(o){const e=[],i=[],r=[];let l=o;const c=o-_s+1+L_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-_s?m=L_[h-o+_s-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),S=-p,v=1+p,x=[S,S,v,S,v,v,S,S,v,v,S,v],y=6,A=6,C=3,M=2,_=1,I=new Float32Array(C*A*y),z=new Float32Array(M*A*y),D=new Float32Array(_*A*y);for(let H=0;H<y;H++){const B=H%3*2/3-1,j=H>2?0:-1,R=[B,j,0,B+2/3,j,0,B+2/3,j+1,0,B,j,0,B+2/3,j+1,0,B,j+1,0];I.set(R,C*A*H),z.set(x,M*A*H);const w=[H,H,H,H,H,H];D.set(w,_*A*H)}const V=new xr;V.setAttribute("position",new Ci(I,C)),V.setAttribute("uv",new Ci(z,M)),V.setAttribute("faceIndex",new Ci(D,_)),e.push(V),l>_s&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function P_(o,e,i){const r=new Sr(o,e,i);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function du(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function hT(o,e,i){const r=new Float32Array(pr),l=new rt(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function B_(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gd(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function I_(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function gd(){return`

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
	`}function dT(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===bh||m===Ah,S=m===Ms||m===ys;if(p||S){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new z_(o)),v=p?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return p&&y&&y.height>0||S&&y&&l(y)?(i===null&&(i=new z_(o)),v=p?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let m=0;const p=6;for(let S=0;S<p;S++)d[S]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function pT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Do("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function mT(o,e,i,r){const l={},c=new WeakMap;function h(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);x.removeEventListener("dispose",h),delete l[x.id];const y=c.get(x);y&&(e.remove(y),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(v){const x=v.attributes;for(const y in x)e.update(x[y],o.ARRAY_BUFFER)}function p(v){const x=[],y=v.index,A=v.attributes.position;let C=0;if(y!==null){const I=y.array;C=y.version;for(let z=0,D=I.length;z<D;z+=3){const V=I[z+0],H=I[z+1],B=I[z+2];x.push(V,H,H,B,B,V)}}else if(A!==void 0){const I=A.array;C=A.version;for(let z=0,D=I.length/3-1;z<D;z+=3){const V=z+0,H=z+1,B=z+2;x.push(V,H,H,B,B,V)}}else return;const M=new(mv(x)?xv:Sv)(x,1);M.version=C;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function S(v){const x=c.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&p(v)}else p(v);return c.get(v)}return{get:d,update:m,getWireframeAttribute:S}}function gT(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function m(x,y){o.drawElements(r,y,c,x*h),i.update(y,r,1)}function p(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,c,x*h,A),i.update(y,r,A))}function S(x,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,x,0,A);let M=0;for(let _=0;_<A;_++)M+=y[_];i.update(M,r,1)}function v(x,y,A,C){if(A===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)p(x[_]/h,y[_],C[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,x,0,C,0,A);let _=0;for(let I=0;I<A;I++)_+=y[I]*C[I];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=S,this.renderMultiDrawInstances=v}function _T(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function vT(o,e,i){const r=new WeakMap,l=new tn;function c(h,d,m){const p=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=S!==void 0?S.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let V=d.attributes.position.count*D,H=1;V>e.maxTextureSize&&(H=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const B=new Float32Array(V*H*4*v),j=new gv(B,V,H,v);j.type=ea,j.needsUpdate=!0;const R=D*4;for(let G=0;G<v;G++){const nt=_[G],lt=I[G],mt=z[G],ft=V*H*4*G;for(let N=0;N<nt.count;N++){const W=N*R;A===!0&&(l.fromBufferAttribute(nt,N),B[ft+W+0]=l.x,B[ft+W+1]=l.y,B[ft+W+2]=l.z,B[ft+W+3]=0),C===!0&&(l.fromBufferAttribute(lt,N),B[ft+W+4]=l.x,B[ft+W+5]=l.y,B[ft+W+6]=l.z,B[ft+W+7]=0),M===!0&&(l.fromBufferAttribute(mt,N),B[ft+W+8]=l.x,B[ft+W+9]=l.y,B[ft+W+10]=l.z,B[ft+W+11]=mt.itemSize===4?l.w:1)}}x={count:v,texture:j,size:new Fe(V,H)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let A=0;for(let M=0;M<p.length;M++)A+=p[M];const C=d.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function ST(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,S=m.geometry,v=e.get(m,S);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return v}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const Cv=new Dn,F_=new bv(1,1),wv=new gv,Dv=new Wx,Uv=new Ev,H_=[],G_=[],V_=new Float32Array(16),X_=new Float32Array(9),k_=new Float32Array(4);function As(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=H_[l];if(c===void 0&&(c=new Float32Array(l),H_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function fn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function hn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function bu(o,e){let i=G_[e];i===void 0&&(i=new Int32Array(e),G_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function xT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function MT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2fv(this.addr,e),hn(i,e)}}function yT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(fn(i,e))return;o.uniform3fv(this.addr,e),hn(i,e)}}function ET(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4fv(this.addr,e),hn(i,e)}}function TT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;k_.set(r),o.uniformMatrix2fv(this.addr,!1,k_),hn(i,r)}}function bT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;X_.set(r),o.uniformMatrix3fv(this.addr,!1,X_),hn(i,r)}}function AT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(fn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),hn(i,e)}else{if(fn(i,r))return;V_.set(r),o.uniformMatrix4fv(this.addr,!1,V_),hn(i,r)}}function RT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function CT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2iv(this.addr,e),hn(i,e)}}function wT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3iv(this.addr,e),hn(i,e)}}function DT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4iv(this.addr,e),hn(i,e)}}function UT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(fn(i,e))return;o.uniform2uiv(this.addr,e),hn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(fn(i,e))return;o.uniform3uiv(this.addr,e),hn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(fn(i,e))return;o.uniform4uiv(this.addr,e),hn(i,e)}}function zT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(F_.compareFunction=pv,c=F_):c=Cv,i.setTexture2D(e||c,l)}function PT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Dv,l)}function BT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Uv,l)}function IT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||wv,l)}function FT(o){switch(o){case 5126:return xT;case 35664:return MT;case 35665:return yT;case 35666:return ET;case 35674:return TT;case 35675:return bT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return PT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return IT}}function HT(o,e){o.uniform1fv(this.addr,e)}function GT(o,e){const i=As(e,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,e){const i=As(e,this.size,3);o.uniform3fv(this.addr,i)}function XT(o,e){const i=As(e,this.size,4);o.uniform4fv(this.addr,i)}function kT(o,e){const i=As(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,e){const i=As(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qT(o,e){const i=As(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YT(o,e){o.uniform1iv(this.addr,e)}function ZT(o,e){o.uniform2iv(this.addr,e)}function jT(o,e){o.uniform3iv(this.addr,e)}function KT(o,e){o.uniform4iv(this.addr,e)}function QT(o,e){o.uniform1uiv(this.addr,e)}function JT(o,e){o.uniform2uiv(this.addr,e)}function $T(o,e){o.uniform3uiv(this.addr,e)}function tb(o,e){o.uniform4uiv(this.addr,e)}function eb(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Cv,c[h])}function nb(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Dv,c[h])}function ib(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Uv,c[h])}function ab(o,e,i){const r=this.cache,l=e.length,c=bu(i,l);fn(r,c)||(o.uniform1iv(this.addr,c),hn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||wv,c[h])}function rb(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return XT;case 35674:return kT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return jT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return ab}}class sb{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=FT(i.type)}}class ob{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rb(i.type)}}class lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function W_(o,e){o.seq.push(e),o.map[e.id]=e}function ub(o,e,i){const r=o.name,l=r.length;for(mh.lastIndex=0;;){const c=mh.exec(r),h=mh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){W_(i,p===void 0?new sb(d,o,e):new ob(d,o,e));break}else{let v=i.map[d];v===void 0&&(v=new lb(d),W_(i,v)),i=v}}}class Su{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);ub(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=r[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function q_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const cb=37297;let fb=0;function hb(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Y_=new he;function db(o){Re._getMatrix(Y_,Re.workingColorSpace,o);const e=`mat3( ${Y_.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case xu:return[e,"LinearTransferOETF"];case Ie:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Z_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+hb(o.getShaderSource(e),d)}else return c}function pb(o,e){const i=db(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function mb(o,e){let i;switch(e){case vx:i="Linear";break;case Sx:i="Reinhard";break;case xx:i="Cineon";break;case Mx:i="ACESFilmic";break;case Ex:i="AgX";break;case Tx:i="Neutral";break;case yx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const pu=new rt;function gb(){Re.getLuminanceCoefficients(pu);const o=pu.x.toFixed(4),e=pu.y.toFixed(4),i=pu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _b(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function vb(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Sb(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function bo(o){return o!==""}function j_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function K_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ad(o){return o.replace(xb,yb)}const Mb=new Map;function yb(o,e){let i=de[e];if(i===void 0){const r=Mb.get(e);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ad(i)}const Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q_(o){return o.replace(Eb,Tb)}function Tb(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function J_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function bb(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===iv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===QS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ji&&(e="SHADOWMAP_TYPE_VSM"),e}function Ab(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case ys:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rb(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ys:e="ENVMAP_MODE_REFRACTION";break}return e}function Cb(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case av:e="ENVMAP_BLENDING_MULTIPLY";break;case gx:e="ENVMAP_BLENDING_MIX";break;case _x:e="ENVMAP_BLENDING_ADD";break}return e}function wb(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Db(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=bb(i),p=Ab(i),S=Rb(i),v=Cb(i),x=wb(i),y=_b(i),A=vb(c),C=l.createProgram();let M,_,I=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(bo).join(`
`),_.length>0&&(_+=`
`)):(M=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),_=[J_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?de.tonemapping_pars_fragment:"",i.toneMapping!==Ba?mb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,pb("linearToOutputTexel",i.outputColorSpace),gb(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(bo).join(`
`)),h=ad(h),h=j_(h,i),h=K_(h,i),d=ad(d),d=j_(d,i),d=K_(d,i),h=Q_(h),d=Q_(d),i.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===d_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===d_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const z=I+M+h,D=I+_+d,V=q_(l,l.VERTEX_SHADER,z),H=q_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,V),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(G){if(o.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C)||"",lt=l.getShaderInfoLog(V)||"",mt=l.getShaderInfoLog(H)||"",ft=nt.trim(),N=lt.trim(),W=mt.trim();let k=!0,_t=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(k=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,V,H);else{const St=Z_(l,V,"vertex"),O=Z_(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ft+`
`+St+`
`+O)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(N===""||W==="")&&(_t=!1);_t&&(G.diagnostics={runnable:k,programLog:ft,vertexShader:{log:N,prefix:M},fragmentShader:{log:W,prefix:_}})}l.deleteShader(V),l.deleteShader(H),j=new Su(l,C),R=Sb(l,C)}let j;this.getUniforms=function(){return j===void 0&&B(this),j};let R;this.getAttributes=function(){return R===void 0&&B(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,cb)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=H,this}let Ub=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new Nb(e),i.set(e,r)),r}}class Nb{constructor(e){this.id=Ub++,this.code=e,this.usedTimes=0}}function Ob(o,e,i,r,l,c,h){const d=new _v,m=new Lb,p=new Set,S=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,G,nt,lt){const mt=nt.fog,ft=lt.geometry,N=R.isMeshStandardMaterial?nt.environment:null,W=(R.isMeshStandardMaterial?i:e).get(R.envMap||N),k=W&&W.mapping===Eu?W.image.height:null,_t=A[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const St=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,O=St!==void 0?St.length:0;let et=0;ft.morphAttributes.position!==void 0&&(et=1),ft.morphAttributes.normal!==void 0&&(et=2),ft.morphAttributes.color!==void 0&&(et=3);let xt,bt,Ut,$;if(_t){const Ee=bi[_t];xt=Ee.vertexShader,bt=Ee.fragmentShader}else xt=R.vertexShader,bt=R.fragmentShader,m.update(R),Ut=m.getVertexShaderID(R),$=m.getFragmentShaderID(R);const ot=o.getRenderTarget(),Dt=o.state.buffers.depth.getReversed(),It=lt.isInstancedMesh===!0,At=lt.isBatchedMesh===!0,zt=!!R.map,re=!!R.matcap,L=!!W,ae=!!R.aoMap,te=!!R.lightMap,ee=!!R.bumpMap,Vt=!!R.normalMap,He=!!R.displacementMap,Wt=!!R.emissiveMap,oe=!!R.metalnessMap,Ze=!!R.roughnessMap,Ye=R.anisotropy>0,U=R.clearcoat>0,E=R.dispersion>0,J=R.iridescence>0,ht=R.sheen>0,Mt=R.transmission>0,ut=Ye&&!!R.anisotropyMap,jt=U&&!!R.clearcoatMap,Rt=U&&!!R.clearcoatNormalMap,Yt=U&&!!R.clearcoatRoughnessMap,Zt=J&&!!R.iridescenceMap,Et=J&&!!R.iridescenceThicknessMap,Ct=ht&&!!R.sheenColorMap,Kt=ht&&!!R.sheenRoughnessMap,Bt=!!R.specularMap,Lt=!!R.specularColorMap,ue=!!R.specularIntensityMap,X=Mt&&!!R.transmissionMap,Tt=Mt&&!!R.thicknessMap,wt=!!R.gradientMap,Ft=!!R.alphaMap,yt=R.alphaTest>0,gt=!!R.alphaHash,Ht=!!R.extensions;let se=Ba;R.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(se=o.toneMapping);const Le={shaderID:_t,shaderType:R.type,shaderName:R.name,vertexShader:xt,fragmentShader:bt,defines:R.defines,customVertexShaderID:Ut,customFragmentShaderID:$,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:At,batchingColor:At&&lt._colorsTexture!==null,instancing:It,instancingColor:It&&lt.instanceColor!==null,instancingMorph:It&&lt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ot===null?o.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Es,alphaToCoverage:!!R.alphaToCoverage,map:zt,matcap:re,envMap:L,envMapMode:L&&W.mapping,envMapCubeUVHeight:k,aoMap:ae,lightMap:te,bumpMap:ee,normalMap:Vt,displacementMap:x&&He,emissiveMap:Wt,normalMapObjectSpace:Vt&&R.normalMapType===wx,normalMapTangentSpace:Vt&&R.normalMapType===Cx,metalnessMap:oe,roughnessMap:Ze,anisotropy:Ye,anisotropyMap:ut,clearcoat:U,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:J,iridescenceMap:Zt,iridescenceThicknessMap:Et,sheen:ht,sheenColorMap:Ct,sheenRoughnessMap:Kt,specularMap:Bt,specularColorMap:Lt,specularIntensityMap:ue,transmission:Mt,transmissionMap:X,thicknessMap:Tt,gradientMap:wt,opaque:R.transparent===!1&&R.blending===vs&&R.alphaToCoverage===!1,alphaMap:Ft,alphaTest:yt,alphaHash:gt,combine:R.combine,mapUv:zt&&C(R.map.channel),aoMapUv:ae&&C(R.aoMap.channel),lightMapUv:te&&C(R.lightMap.channel),bumpMapUv:ee&&C(R.bumpMap.channel),normalMapUv:Vt&&C(R.normalMap.channel),displacementMapUv:He&&C(R.displacementMap.channel),emissiveMapUv:Wt&&C(R.emissiveMap.channel),metalnessMapUv:oe&&C(R.metalnessMap.channel),roughnessMapUv:Ze&&C(R.roughnessMap.channel),anisotropyMapUv:ut&&C(R.anisotropyMap.channel),clearcoatMapUv:jt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Zt&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&C(R.sheenRoughnessMap.channel),specularMapUv:Bt&&C(R.specularMap.channel),specularColorMapUv:Lt&&C(R.specularColorMap.channel),specularIntensityMapUv:ue&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Tt&&C(R.thicknessMap.channel),alphaMapUv:Ft&&C(R.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(Vt||Ye),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!ft.attributes.uv&&(zt||Ft),fog:!!mt,useFog:R.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Dt,skinning:lt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:et,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:se,decodeVideoTexture:zt&&R.map.isVideoTexture===!0&&Re.getTransfer(R.map.colorSpace)===Ie,decodeVideoTextureEmissive:Wt&&R.emissiveMap.isVideoTexture===!0&&Re.getTransfer(R.emissiveMap.colorSpace)===Ie,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ta,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ht&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&R.extensions.multiDraw===!0||At)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Le.vertexUv1s=p.has(1),Le.vertexUv2s=p.has(2),Le.vertexUv3s=p.has(3),p.clear(),Le}function _(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const G in R.defines)w.push(G),w.push(R.defines[G]);return R.isRawShaderMaterial===!1&&(I(w,R),z(w,R),w.push(o.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function I(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function z(R,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const w=A[R.type];let G;if(w){const nt=bi[w];G=rM.clone(nt.uniforms)}else G=R.uniforms;return G}function V(R,w){let G;for(let nt=0,lt=S.length;nt<lt;nt++){const mt=S[nt];if(mt.cacheKey===w){G=mt,++G.usedTimes;break}}return G===void 0&&(G=new Db(o,w,R,c),S.push(G)),G}function H(R){if(--R.usedTimes===0){const w=S.indexOf(R);S[w]=S[S.length-1],S.pop(),R.destroy()}}function B(R){m.remove(R)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:D,acquireProgram:V,releaseProgram:H,releaseShaderCache:B,programs:S,dispose:j}}function zb(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function Pb(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function $_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function tv(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,x,y,A,C,M){let _=o[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:A,renderOrder:v.renderOrder,z:C,group:M},o[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=A,_.renderOrder=v.renderOrder,_.z=C,_.group=M),e++,_}function d(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(v,x,y,A,C,M){const _=h(v,x,y,A,C,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,x){i.length>1&&i.sort(v||Pb),r.length>1&&r.sort(x||$_),l.length>1&&l.sort(x||$_)}function S(){for(let v=e,x=o.length;v<x;v++){const y=o[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:m,finish:S,sort:p}}function Bb(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new tv,o.set(r,[h])):l>=c.length?(h=new tv,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function Ib(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Ue};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":i={color:new Ue,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function Fb(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Hb=0;function Gb(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Vb(o){const e=new Ib,i=Fb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new rt);const l=new rt,c=new cn,h=new cn;function d(p){let S=0,v=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let y=0,A=0,C=0,M=0,_=0,I=0,z=0,D=0,V=0,H=0,B=0;p.sort(Gb);for(let R=0,w=p.length;R<w;R++){const G=p[R],nt=G.color,lt=G.intensity,mt=G.distance,ft=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=nt.r*lt,v+=nt.g*lt,x+=nt.b*lt;else if(G.isLightProbe){for(let N=0;N<9;N++)r.probe[N].addScaledVector(G.sh.coefficients[N],lt);B++}else if(G.isDirectionalLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const W=G.shadow,k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,r.directionalShadow[y]=k,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=G.shadow.matrix,I++}r.directional[y]=N,y++}else if(G.isSpotLight){const N=e.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(nt).multiplyScalar(lt),N.distance=mt,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,r.spot[C]=N;const W=G.shadow;if(G.map&&(r.spotLightMap[V]=G.map,V++,W.updateMatrices(G),G.castShadow&&H++),r.spotLightMatrix[C]=W.matrix,G.castShadow){const k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,r.spotShadow[C]=k,r.spotShadowMap[C]=ft,D++}C++}else if(G.isRectAreaLight){const N=e.get(G);N.color.copy(nt).multiplyScalar(lt),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),r.rectArea[M]=N,M++}else if(G.isPointLight){const N=e.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const W=G.shadow,k=i.get(G);k.shadowIntensity=W.intensity,k.shadowBias=W.bias,k.shadowNormalBias=W.normalBias,k.shadowRadius=W.radius,k.shadowMapSize=W.mapSize,k.shadowCameraNear=W.camera.near,k.shadowCameraFar=W.camera.far,r.pointShadow[A]=k,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=G.shadow.matrix,z++}r.point[A]=N,A++}else if(G.isHemisphereLight){const N=e.get(G);N.skyColor.copy(G.color).multiplyScalar(lt),N.groundColor.copy(G.groundColor).multiplyScalar(lt),r.hemi[_]=N,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ot.LTC_FLOAT_1,r.rectAreaLTC2=Ot.LTC_FLOAT_2):(r.rectAreaLTC1=Ot.LTC_HALF_1,r.rectAreaLTC2=Ot.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=v,r.ambient[2]=x;const j=r.hash;(j.directionalLength!==y||j.pointLength!==A||j.spotLength!==C||j.rectAreaLength!==M||j.hemiLength!==_||j.numDirectionalShadows!==I||j.numPointShadows!==z||j.numSpotShadows!==D||j.numSpotMaps!==V||j.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=M,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=z,r.pointShadowMap.length=z,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=z,r.spotLightMatrix.length=D+V-H,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=B,j.directionalLength=y,j.pointLength=A,j.spotLength=C,j.rectAreaLength=M,j.hemiLength=_,j.numDirectionalShadows=I,j.numPointShadows=z,j.numSpotShadows=D,j.numSpotMaps=V,j.numLightProbes=B,r.version=Hb++)}function m(p,S){let v=0,x=0,y=0,A=0,C=0;const M=S.matrixWorldInverse;for(let _=0,I=p.length;_<I;_++){const z=p[_];if(z.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(z.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(z.matrixWorld),l.setFromMatrixPosition(z.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),y++}else if(z.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(z.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(z.width*.5,0,0),D.halfHeight.set(0,z.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),A++}else if(z.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(z.matrixWorld),D.position.applyMatrix4(M),x++}else if(z.isHemisphereLight){const D=r.hemi[C];D.direction.setFromMatrixPosition(z.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:r}}function ev(o){const e=new Vb(o),i=[],r=[];function l(S){p.camera=S,i.length=0,r.length=0}function c(S){i.push(S)}function h(S){r.push(S)}function d(){e.setup(i)}function m(S){e.setupView(i,S)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function Xb(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new ev(o),e.set(l,[d])):c>=h.length?(d=new ev(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
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
}`;function qb(o,e,i){let r=new Tv;const l=new Fe,c=new Fe,h=new tn,d=new gM({depthPacking:Rx}),m=new _M,p={},S=i.maxTextureSize,v={[Ia]:In,[In]:Ia,[ta]:ta},x=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:kb,fragmentShader:Wb}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new xr;A.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ri(A,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iv;let _=this.type;this.render=function(H,B,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const R=o.getRenderTarget(),w=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(Pa),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const lt=_!==Ji&&this.type===Ji,mt=_===Ji&&this.type!==Ji;for(let ft=0,N=H.length;ft<N;ft++){const W=H[ft],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const _t=k.getFrameExtents();if(l.multiply(_t),c.copy(k.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/_t.x),l.x=c.x*_t.x,k.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/_t.y),l.y=c.y*_t.y,k.mapSize.y=c.y)),k.map===null||lt===!0||mt===!0){const O=this.type!==Ji?{minFilter:vi,magFilter:vi}:{};k.map!==null&&k.map.dispose(),k.map=new Sr(l.x,l.y,O),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const St=k.getViewportCount();for(let O=0;O<St;O++){const et=k.getViewport(O);h.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),nt.viewport(h),k.updateMatrices(W,O),r=k.getFrustum(),D(B,j,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===Ji&&I(k,j),k.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(R,w,G)};function I(H,B){const j=e.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Sr(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(B,null,j,x,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(B,null,j,y,C,null)}function z(H,B,j,R){let w=null;const G=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)w=G;else if(w=j.isPointLight===!0?m:d,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const nt=w.uuid,lt=B.uuid;let mt=p[nt];mt===void 0&&(mt={},p[nt]=mt);let ft=mt[lt];ft===void 0&&(ft=w.clone(),mt[lt]=ft,B.addEventListener("dispose",V)),w=ft}if(w.visible=B.visible,w.wireframe=B.wireframe,R===Ji?w.side=B.shadowSide!==null?B.shadowSide:B.side:w.side=B.shadowSide!==null?B.shadowSide:v[B.side],w.alphaMap=B.alphaMap,w.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,w.map=B.map,w.clipShadows=B.clipShadows,w.clippingPlanes=B.clippingPlanes,w.clipIntersection=B.clipIntersection,w.displacementMap=B.displacementMap,w.displacementScale=B.displacementScale,w.displacementBias=B.displacementBias,w.wireframeLinewidth=B.wireframeLinewidth,w.linewidth=B.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=o.properties.get(w);nt.light=j}return w}function D(H,B,j,R,w){if(H.visible===!1)return;if(H.layers.test(B.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===Ji)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const lt=e.update(H),mt=H.material;if(Array.isArray(mt)){const ft=lt.groups;for(let N=0,W=ft.length;N<W;N++){const k=ft[N],_t=mt[k.materialIndex];if(_t&&_t.visible){const St=z(H,_t,R,w);H.onBeforeShadow(o,H,B,j,lt,St,k),o.renderBufferDirect(j,null,lt,St,H,k),H.onAfterShadow(o,H,B,j,lt,St,k)}}}else if(mt.visible){const ft=z(H,mt,R,w);H.onBeforeShadow(o,H,B,j,lt,ft,null),o.renderBufferDirect(j,null,lt,ft,H,null),H.onAfterShadow(o,H,B,j,lt,ft,null)}}const nt=H.children;for(let lt=0,mt=nt.length;lt<mt;lt++)D(nt[lt],B,j,R,w)}function V(H){H.target.removeEventListener("dispose",V);for(const j in p){const R=p[j],w=H.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const Yb={[vh]:Sh,[xh]:Eh,[Mh]:Th,[xs]:yh,[Sh]:vh,[Eh]:xh,[Th]:Mh,[yh]:xs};function Zb(o,e){function i(){let X=!1;const Tt=new tn;let wt=null;const Ft=new tn(0,0,0,0);return{setMask:function(yt){wt!==yt&&!X&&(o.colorMask(yt,yt,yt,yt),wt=yt)},setLocked:function(yt){X=yt},setClear:function(yt,gt,Ht,se,Le){Le===!0&&(yt*=se,gt*=se,Ht*=se),Tt.set(yt,gt,Ht,se),Ft.equals(Tt)===!1&&(o.clearColor(yt,gt,Ht,se),Ft.copy(Tt))},reset:function(){X=!1,wt=null,Ft.set(-1,0,0,0)}}}function r(){let X=!1,Tt=!1,wt=null,Ft=null,yt=null;return{setReversed:function(gt){if(Tt!==gt){const Ht=e.get("EXT_clip_control");gt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Tt=gt;const se=yt;yt=null,this.setClear(se)}},getReversed:function(){return Tt},setTest:function(gt){gt?ot(o.DEPTH_TEST):Dt(o.DEPTH_TEST)},setMask:function(gt){wt!==gt&&!X&&(o.depthMask(gt),wt=gt)},setFunc:function(gt){if(Tt&&(gt=Yb[gt]),Ft!==gt){switch(gt){case vh:o.depthFunc(o.NEVER);break;case Sh:o.depthFunc(o.ALWAYS);break;case xh:o.depthFunc(o.LESS);break;case xs:o.depthFunc(o.LEQUAL);break;case Mh:o.depthFunc(o.EQUAL);break;case yh:o.depthFunc(o.GEQUAL);break;case Eh:o.depthFunc(o.GREATER);break;case Th:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=gt}},setLocked:function(gt){X=gt},setClear:function(gt){yt!==gt&&(Tt&&(gt=1-gt),o.clearDepth(gt),yt=gt)},reset:function(){X=!1,wt=null,Ft=null,yt=null,Tt=!1}}}function l(){let X=!1,Tt=null,wt=null,Ft=null,yt=null,gt=null,Ht=null,se=null,Le=null;return{setTest:function(Ee){X||(Ee?ot(o.STENCIL_TEST):Dt(o.STENCIL_TEST))},setMask:function(Ee){Tt!==Ee&&!X&&(o.stencilMask(Ee),Tt=Ee)},setFunc:function(Ee,An,Qn){(wt!==Ee||Ft!==An||yt!==Qn)&&(o.stencilFunc(Ee,An,Qn),wt=Ee,Ft=An,yt=Qn)},setOp:function(Ee,An,Qn){(gt!==Ee||Ht!==An||se!==Qn)&&(o.stencilOp(Ee,An,Qn),gt=Ee,Ht=An,se=Qn)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Le!==Ee&&(o.clearStencil(Ee),Le=Ee)},reset:function(){X=!1,Tt=null,wt=null,Ft=null,yt=null,gt=null,Ht=null,se=null,Le=null}}}const c=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let S={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,I=null,z=null,D=null,V=null,H=null,B=new Ue(0,0,0),j=0,R=!1,w=null,G=null,nt=null,lt=null,mt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,W=0;const k=o.getParameter(o.VERSION);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=W>=2);let _t=null,St={};const O=o.getParameter(o.SCISSOR_BOX),et=o.getParameter(o.VIEWPORT),xt=new tn().fromArray(O),bt=new tn().fromArray(et);function Ut(X,Tt,wt,Ft){const yt=new Uint8Array(4),gt=o.createTexture();o.bindTexture(X,gt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ht=0;Ht<wt;Ht++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(Tt+Ht,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return gt}const $={};$[o.TEXTURE_2D]=Ut(o.TEXTURE_2D,o.TEXTURE_2D,1),$[o.TEXTURE_CUBE_MAP]=Ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[o.TEXTURE_2D_ARRAY]=Ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),$[o.TEXTURE_3D]=Ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ot(o.DEPTH_TEST),h.setFunc(xs),ee(!1),Vt(o_),ot(o.CULL_FACE),ae(Pa);function ot(X){S[X]!==!0&&(o.enable(X),S[X]=!0)}function Dt(X){S[X]!==!1&&(o.disable(X),S[X]=!1)}function It(X,Tt){return v[X]!==Tt?(o.bindFramebuffer(X,Tt),v[X]=Tt,X===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Tt),X===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function At(X,Tt){let wt=y,Ft=!1;if(X){wt=x.get(Tt),wt===void 0&&(wt=[],x.set(Tt,wt));const yt=X.textures;if(wt.length!==yt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let gt=0,Ht=yt.length;gt<Ht;gt++)wt[gt]=o.COLOR_ATTACHMENT0+gt;wt.length=yt.length,Ft=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(wt)}function zt(X){return A!==X?(o.useProgram(X),A=X,!0):!1}const re={[dr]:o.FUNC_ADD,[$S]:o.FUNC_SUBTRACT,[tx]:o.FUNC_REVERSE_SUBTRACT};re[ex]=o.MIN,re[nx]=o.MAX;const L={[ix]:o.ZERO,[ax]:o.ONE,[rx]:o.SRC_COLOR,[gh]:o.SRC_ALPHA,[fx]:o.SRC_ALPHA_SATURATE,[ux]:o.DST_COLOR,[ox]:o.DST_ALPHA,[sx]:o.ONE_MINUS_SRC_COLOR,[_h]:o.ONE_MINUS_SRC_ALPHA,[cx]:o.ONE_MINUS_DST_COLOR,[lx]:o.ONE_MINUS_DST_ALPHA,[hx]:o.CONSTANT_COLOR,[dx]:o.ONE_MINUS_CONSTANT_COLOR,[px]:o.CONSTANT_ALPHA,[mx]:o.ONE_MINUS_CONSTANT_ALPHA};function ae(X,Tt,wt,Ft,yt,gt,Ht,se,Le,Ee){if(X===Pa){C===!0&&(Dt(o.BLEND),C=!1);return}if(C===!1&&(ot(o.BLEND),C=!0),X!==JS){if(X!==M||Ee!==R){if((_!==dr||D!==dr)&&(o.blendEquation(o.FUNC_ADD),_=dr,D=dr),Ee)switch(X){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case l_:o.blendFunc(o.ONE,o.ONE);break;case u_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case c_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case l_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case u_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case c_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,z=null,V=null,H=null,B.set(0,0,0),j=0,M=X,R=Ee}return}yt=yt||Tt,gt=gt||wt,Ht=Ht||Ft,(Tt!==_||yt!==D)&&(o.blendEquationSeparate(re[Tt],re[yt]),_=Tt,D=yt),(wt!==I||Ft!==z||gt!==V||Ht!==H)&&(o.blendFuncSeparate(L[wt],L[Ft],L[gt],L[Ht]),I=wt,z=Ft,V=gt,H=Ht),(se.equals(B)===!1||Le!==j)&&(o.blendColor(se.r,se.g,se.b,Le),B.copy(se),j=Le),M=X,R=!1}function te(X,Tt){X.side===ta?Dt(o.CULL_FACE):ot(o.CULL_FACE);let wt=X.side===In;Tt&&(wt=!wt),ee(wt),X.blending===vs&&X.transparent===!1?ae(Pa):ae(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Wt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ot(o.SAMPLE_ALPHA_TO_COVERAGE):Dt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ee(X){w!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),w=X)}function Vt(X){X!==jS?(ot(o.CULL_FACE),X!==G&&(X===o_?o.cullFace(o.BACK):X===KS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Dt(o.CULL_FACE),G=X}function He(X){X!==nt&&(N&&o.lineWidth(X),nt=X)}function Wt(X,Tt,wt){X?(ot(o.POLYGON_OFFSET_FILL),(lt!==Tt||mt!==wt)&&(o.polygonOffset(Tt,wt),lt=Tt,mt=wt)):Dt(o.POLYGON_OFFSET_FILL)}function oe(X){X?ot(o.SCISSOR_TEST):Dt(o.SCISSOR_TEST)}function Ze(X){X===void 0&&(X=o.TEXTURE0+ft-1),_t!==X&&(o.activeTexture(X),_t=X)}function Ye(X,Tt,wt){wt===void 0&&(_t===null?wt=o.TEXTURE0+ft-1:wt=_t);let Ft=St[wt];Ft===void 0&&(Ft={type:void 0,texture:void 0},St[wt]=Ft),(Ft.type!==X||Ft.texture!==Tt)&&(_t!==wt&&(o.activeTexture(wt),_t=wt),o.bindTexture(X,Tt||$[X]),Ft.type=X,Ft.texture=Tt)}function U(){const X=St[_t];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Et(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(X){xt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function Kt(X){bt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),bt.copy(X))}function Bt(X,Tt){let wt=p.get(Tt);wt===void 0&&(wt=new WeakMap,p.set(Tt,wt));let Ft=wt.get(X);Ft===void 0&&(Ft=o.getUniformBlockIndex(Tt,X.name),wt.set(X,Ft))}function Lt(X,Tt){const Ft=p.get(Tt).get(X);m.get(Tt)!==Ft&&(o.uniformBlockBinding(Tt,Ft,X.__bindingPointIndex),m.set(Tt,Ft))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},_t=null,St={},v={},x=new WeakMap,y=[],A=null,C=!1,M=null,_=null,I=null,z=null,D=null,V=null,H=null,B=new Ue(0,0,0),j=0,R=!1,w=null,G=null,nt=null,lt=null,mt=null,xt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ot,disable:Dt,bindFramebuffer:It,drawBuffers:At,useProgram:zt,setBlending:ae,setMaterial:te,setFlipSided:ee,setCullFace:Vt,setLineWidth:He,setPolygonOffset:Wt,setScissorTest:oe,activeTexture:Ze,bindTexture:Ye,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:Zt,texImage3D:Et,updateUBOMapping:Bt,uniformBlockBinding:Lt,texStorage2D:Rt,texStorage3D:Yt,texSubImage2D:ht,texSubImage3D:Mt,compressedTexSubImage2D:ut,compressedTexSubImage3D:jt,scissor:Ct,viewport:Kt,reset:ue}}function jb(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,S=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,E){return y?new OffscreenCanvas(U,E):yu("canvas")}function C(U,E,J){let ht=1;const Mt=Ye(U);if((Mt.width>J||Mt.height>J)&&(ht=J/Math.max(Mt.width,Mt.height)),ht<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(ht*Mt.width),jt=Math.floor(ht*Mt.height);v===void 0&&(v=A(ut,jt));const Rt=E?A(ut,jt):v;return Rt.width=ut,Rt.height=jt,Rt.getContext("2d").drawImage(U,0,0,ut,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Mt.width+"x"+Mt.height+") to ("+ut+"x"+jt+")."),Rt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Mt.width+"x"+Mt.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function z(U,E,J,ht,Mt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(J===o.FLOAT&&(ut=o.R32F),J===o.HALF_FLOAT&&(ut=o.R16F),J===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.R8UI),J===o.UNSIGNED_SHORT&&(ut=o.R16UI),J===o.UNSIGNED_INT&&(ut=o.R32UI),J===o.BYTE&&(ut=o.R8I),J===o.SHORT&&(ut=o.R16I),J===o.INT&&(ut=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ut=o.RG32F),J===o.HALF_FLOAT&&(ut=o.RG16F),J===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RG8UI),J===o.UNSIGNED_SHORT&&(ut=o.RG16UI),J===o.UNSIGNED_INT&&(ut=o.RG32UI),J===o.BYTE&&(ut=o.RG8I),J===o.SHORT&&(ut=o.RG16I),J===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),J===o.UNSIGNED_INT&&(ut=o.RGB32UI),J===o.BYTE&&(ut=o.RGB8I),J===o.SHORT&&(ut=o.RGB16I),J===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),J===o.UNSIGNED_INT&&(ut=o.RGBA32UI),J===o.BYTE&&(ut=o.RGBA8I),J===o.SHORT&&(ut=o.RGBA16I),J===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const jt=Mt?xu:Re.getTransfer(ht);J===o.FLOAT&&(ut=o.RGBA32F),J===o.HALF_FLOAT&&(ut=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ut=jt===Ie?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ut}function D(U,E){let J;return U?E===null||E===vr||E===Ro?J=o.DEPTH24_STENCIL8:E===ea?J=o.DEPTH32F_STENCIL8:E===Ao&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vr||E===Ro?J=o.DEPTH_COMPONENT24:E===ea?J=o.DEPTH_COMPONENT32F:E===Ao&&(J=o.DEPTH_COMPONENT16),J}function V(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==vi&&U.minFilter!==ui?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function H(U){const E=U.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&S.delete(E)}function B(U){const E=U.target;E.removeEventListener("dispose",B),w(E)}function j(U){const E=r.get(U);if(E.__webglInit===void 0)return;const J=U.source,ht=x.get(J);if(ht){const Mt=ht[E.__cacheKey];Mt.usedTimes--,Mt.usedTimes===0&&R(U),Object.keys(ht).length===0&&x.delete(J)}r.remove(U)}function R(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const J=U.source,ht=x.get(J);delete ht[E.__cacheKey],h.memory.textures--}function w(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(E.__webglFramebuffer[ht]))for(let Mt=0;Mt<E.__webglFramebuffer[ht].length;Mt++)o.deleteFramebuffer(E.__webglFramebuffer[ht][Mt]);else o.deleteFramebuffer(E.__webglFramebuffer[ht]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[ht])}else{if(Array.isArray(E.__webglFramebuffer))for(let ht=0;ht<E.__webglFramebuffer.length;ht++)o.deleteFramebuffer(E.__webglFramebuffer[ht]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ht=0;ht<E.__webglColorRenderbuffer.length;ht++)E.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[ht]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let ht=0,Mt=J.length;ht<Mt;ht++){const ut=r.get(J[ht]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),r.remove(J[ht])}r.remove(U)}let G=0;function nt(){G=0}function lt(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function mt(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ft(U,E){const J=r.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const ht=U.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function N(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){$(J,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function W(U,E){const J=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){$(J,U,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function k(U,E){const J=r.get(U);if(U.version>0&&J.__version!==U.version){ot(J,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const _t={[Rh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Ch]:o.MIRRORED_REPEAT},St={[vi]:o.NEAREST,[bx]:o.NEAREST_MIPMAP_NEAREST,[Yl]:o.NEAREST_MIPMAP_LINEAR,[ui]:o.LINEAR,[Ff]:o.LINEAR_MIPMAP_NEAREST,[gr]:o.LINEAR_MIPMAP_LINEAR},O={[Dx]:o.NEVER,[Px]:o.ALWAYS,[Ux]:o.LESS,[pv]:o.LEQUAL,[Lx]:o.EQUAL,[zx]:o.GEQUAL,[Nx]:o.GREATER,[Ox]:o.NOTEQUAL};function et(U,E){if(E.type===ea&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ui||E.magFilter===Ff||E.magFilter===Yl||E.magFilter===gr||E.minFilter===ui||E.minFilter===Ff||E.minFilter===Yl||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,_t[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,_t[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,_t[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,St[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,St[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===vi||E.minFilter!==Yl&&E.minFilter!==gr||E.type===ea&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function xt(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",H));const ht=E.source;let Mt=x.get(ht);Mt===void 0&&(Mt={},x.set(ht,Mt));const ut=mt(E);if(ut!==U.__cacheKey){Mt[ut]===void 0&&(Mt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),Mt[ut].usedTimes++;const jt=Mt[U.__cacheKey];jt!==void 0&&(Mt[U.__cacheKey].usedTimes--,jt.usedTimes===0&&R(E)),U.__cacheKey=ut,U.__webglTexture=Mt[ut].texture}return J}function bt(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Ut(U,E,J,ht){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,ht,E.data);else{ut.sort((Et,Ct)=>Et.start-Ct.start);let jt=0;for(let Et=1;Et<ut.length;Et++){const Ct=ut[jt],Kt=ut[Et],Bt=Ct.start+Ct.count,Lt=bt(Kt.start,E.width,4),ue=bt(Ct.start,E.width,4);Kt.start<=Bt+1&&Lt===ue&&bt(Kt.start+Kt.count-1,E.width,4)===Lt?Ct.count=Math.max(Ct.count,Kt.start+Kt.count-Ct.start):(++jt,ut[jt]=Kt)}ut.length=jt+1;const Rt=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),Zt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Ct=ut.length;Et<Ct;Et++){const Kt=ut[Et],Bt=Math.floor(Kt.start/4),Lt=Math.ceil(Kt.count/4),ue=Bt%E.width,X=Math.floor(Bt/E.width),Tt=Lt,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ue,X,Tt,wt,J,ht,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Rt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Zt)}}function $(U,E,J){let ht=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ht=o.TEXTURE_3D);const Mt=xt(U,E),ut=E.source;i.bindTexture(ht,U.__webglTexture,o.TEXTURE0+J);const jt=r.get(ut);if(ut.version!==jt.__version||Mt===!0){i.activeTexture(o.TEXTURE0+J);const Rt=Re.getPrimaries(Re.workingColorSpace),Yt=E.colorSpace===za?null:Re.getPrimaries(E.colorSpace),Zt=E.colorSpace===za||Rt===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let Et=C(E.image,!1,l.maxTextureSize);Et=Ze(E,Et);const Ct=c.convert(E.format,E.colorSpace),Kt=c.convert(E.type);let Bt=z(E.internalFormat,Ct,Kt,E.colorSpace,E.isVideoTexture);et(ht,E);let Lt;const ue=E.mipmaps,X=E.isVideoTexture!==!0,Tt=jt.__version===void 0||Mt===!0,wt=ut.dataReady,Ft=V(E,Et);if(E.isDepthTexture)Bt=D(E.format===wo,E.type),Tt&&(X?i.texStorage2D(o.TEXTURE_2D,1,Bt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Ct,Kt,null));else if(E.isDataTexture)if(ue.length>0){X&&Tt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let yt=0,gt=ue.length;yt<gt;yt++)Lt=ue[yt],X?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Lt.width,Lt.height,Ct,Kt,Lt.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Lt.width,Lt.height,0,Ct,Kt,Lt.data);E.generateMipmaps=!1}else X?(Tt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Et.width,Et.height),wt&&Ut(E,Et,Ct,Kt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Et.width,Et.height,0,Ct,Kt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Bt,ue[0].width,ue[0].height,Et.depth);for(let yt=0,gt=ue.length;yt<gt;yt++)if(Lt=ue[yt],E.format!==_i)if(Ct!==null)if(X){if(wt)if(E.layerUpdates.size>0){const Ht=U_(Lt.width,Lt.height,E.format,E.type);for(const se of E.layerUpdates){const Le=Lt.data.subarray(se*Ht/Lt.data.BYTES_PER_ELEMENT,(se+1)*Ht/Lt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,se,Lt.width,Lt.height,1,Ct,Le)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Lt.width,Lt.height,Et.depth,Ct,Lt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Lt.width,Lt.height,Et.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Lt.width,Lt.height,Et.depth,Ct,Kt,Lt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Bt,Lt.width,Lt.height,Et.depth,0,Ct,Kt,Lt.data)}else{X&&Tt&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let yt=0,gt=ue.length;yt<gt;yt++)Lt=ue[yt],E.format!==_i?Ct!==null?X?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Lt.width,Lt.height,Ct,Lt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Bt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Lt.width,Lt.height,Ct,Kt,Lt.data):i.texImage2D(o.TEXTURE_2D,yt,Bt,Lt.width,Lt.height,0,Ct,Kt,Lt.data)}else if(E.isDataArrayTexture)if(X){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Bt,Et.width,Et.height,Et.depth),wt)if(E.layerUpdates.size>0){const yt=U_(Et.width,Et.height,E.format,E.type);for(const gt of E.layerUpdates){const Ht=Et.data.subarray(gt*yt/Et.data.BYTES_PER_ELEMENT,(gt+1)*yt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,gt,Et.width,Et.height,1,Ct,Kt,Ht)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Ct,Kt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Et.width,Et.height,Et.depth,0,Ct,Kt,Et.data);else if(E.isData3DTexture)X?(Tt&&i.texStorage3D(o.TEXTURE_3D,Ft,Bt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Ct,Kt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Et.width,Et.height,Et.depth,0,Ct,Kt,Et.data);else if(E.isFramebufferTexture){if(Tt)if(X)i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Et.width,Et.height);else{let yt=Et.width,gt=Et.height;for(let Ht=0;Ht<Ft;Ht++)i.texImage2D(o.TEXTURE_2D,Ht,Bt,yt,gt,0,Ct,Kt,null),yt>>=1,gt>>=1}}else if(ue.length>0){if(X&&Tt){const yt=Ye(ue[0]);i.texStorage2D(o.TEXTURE_2D,Ft,Bt,yt.width,yt.height)}for(let yt=0,gt=ue.length;yt<gt;yt++)Lt=ue[yt],X?wt&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Ct,Kt,Lt):i.texImage2D(o.TEXTURE_2D,yt,Bt,Ct,Kt,Lt);E.generateMipmaps=!1}else if(X){if(Tt){const yt=Ye(Et);i.texStorage2D(o.TEXTURE_2D,Ft,Bt,yt.width,yt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ct,Kt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Ct,Kt,Et);M(E)&&_(ht),jt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ot(U,E,J){if(E.image.length!==6)return;const ht=xt(U,E),Mt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const ut=r.get(Mt);if(Mt.version!==ut.__version||ht===!0){i.activeTexture(o.TEXTURE0+J);const jt=Re.getPrimaries(Re.workingColorSpace),Rt=E.colorSpace===za?null:Re.getPrimaries(E.colorSpace),Yt=E.colorSpace===za||jt===Rt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const Zt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Ct=[];for(let gt=0;gt<6;gt++)!Zt&&!Et?Ct[gt]=C(E.image[gt],!0,l.maxCubemapSize):Ct[gt]=Et?E.image[gt].image:E.image[gt],Ct[gt]=Ze(E,Ct[gt]);const Kt=Ct[0],Bt=c.convert(E.format,E.colorSpace),Lt=c.convert(E.type),ue=z(E.internalFormat,Bt,Lt,E.colorSpace),X=E.isVideoTexture!==!0,Tt=ut.__version===void 0||ht===!0,wt=Mt.dataReady;let Ft=V(E,Kt);et(o.TEXTURE_CUBE_MAP,E);let yt;if(Zt){X&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ue,Kt.width,Kt.height);for(let gt=0;gt<6;gt++){yt=Ct[gt].mipmaps;for(let Ht=0;Ht<yt.length;Ht++){const se=yt[Ht];E.format!==_i?Bt!==null?X?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,se.width,se.height,Bt,se.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,0,0,se.width,se.height,Bt,Lt,se.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht,ue,se.width,se.height,0,Bt,Lt,se.data)}}}else{if(yt=E.mipmaps,X&&Tt){yt.length>0&&Ft++;const gt=Ye(Ct[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(Et){X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Ct[gt].width,Ct[gt].height,Bt,Lt,Ct[gt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Ct[gt].width,Ct[gt].height,0,Bt,Lt,Ct[gt].data);for(let Ht=0;Ht<yt.length;Ht++){const Le=yt[Ht].image[gt].image;X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Le.width,Le.height,Bt,Lt,Le.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ue,Le.width,Le.height,0,Bt,Lt,Le.data)}}else{X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Bt,Lt,Ct[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Bt,Lt,Ct[gt]);for(let Ht=0;Ht<yt.length;Ht++){const se=yt[Ht];X?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,0,0,Bt,Lt,se.image[gt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Ht+1,ue,Bt,Lt,se.image[gt])}}}M(E)&&_(o.TEXTURE_CUBE_MAP),ut.__version=Mt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Dt(U,E,J,ht,Mt,ut){const jt=c.convert(J.format,J.colorSpace),Rt=c.convert(J.type),Yt=z(J.internalFormat,jt,Rt,J.colorSpace),Zt=r.get(E),Et=r.get(J);if(Et.__renderTarget=E,!Zt.__hasExternalTextures){const Ct=Math.max(1,E.width>>ut),Kt=Math.max(1,E.height>>ut);Mt===o.TEXTURE_3D||Mt===o.TEXTURE_2D_ARRAY?i.texImage3D(Mt,ut,Yt,Ct,Kt,E.depth,0,jt,Rt,null):i.texImage2D(Mt,ut,Yt,Ct,Kt,0,jt,Rt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Wt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,Mt,Et.__webglTexture,0,He(E)):(Mt===o.TEXTURE_2D||Mt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Mt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,Mt,Et.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(U,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const ht=E.depthTexture,Mt=ht&&ht.isDepthTexture?ht.type:null,ut=D(E.stencilBuffer,Mt),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Rt=He(E);Wt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Rt,ut,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Rt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,U)}else{const ht=E.textures;for(let Mt=0;Mt<ht.length;Mt++){const ut=ht[Mt],jt=c.convert(ut.format,ut.colorSpace),Rt=c.convert(ut.type),Yt=z(ut.internalFormat,jt,Rt,ut.colorSpace),Zt=He(E);J&&Wt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Yt,E.width,E.height):Wt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function At(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(E.depthTexture);ht.__renderTarget=E,(!ht.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ft(E.depthTexture,0);const Mt=ht.__webglTexture,ut=He(E);if(E.depthTexture.format===Co)Wt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Mt,0);else if(E.depthTexture.format===wo)Wt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function zt(U){const E=r.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const ht=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ht){const Mt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ht.removeEventListener("dispose",Mt)};ht.addEventListener("dispose",Mt),E.__depthDisposeCallback=Mt}E.__boundDepthTexture=ht}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const ht=U.texture.mipmaps;ht&&ht.length>0?At(E.__webglFramebuffer[0],U):At(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[ht]),E.__webglDepthbuffer[ht]===void 0)E.__webglDepthbuffer[ht]=o.createRenderbuffer(),It(E.__webglDepthbuffer[ht],U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ut)}}else{const ht=U.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,U,!1);else{const Mt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Mt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function re(U,E,J){const ht=r.get(U);E!==void 0&&Dt(ht.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&zt(U)}function L(U){const E=U.texture,J=r.get(U),ht=r.get(E);U.addEventListener("dispose",B);const Mt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,jt=Mt.length>1;if(jt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=E.version,h.memory.textures++),ut){J.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[Rt]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)J.__webglFramebuffer[Rt][Yt]=o.createFramebuffer()}else J.__webglFramebuffer[Rt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)J.__webglFramebuffer[Rt]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(jt)for(let Rt=0,Yt=Mt.length;Rt<Yt;Rt++){const Zt=r.get(Mt[Rt]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Wt(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Mt.length;Rt++){const Yt=Mt[Rt];J.__webglColorRenderbuffer[Rt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Rt]);const Zt=c.convert(Yt.format,Yt.colorSpace),Et=c.convert(Yt.type),Ct=z(Yt.internalFormat,Zt,Et,Yt.colorSpace,U.isXRRenderTarget===!0),Kt=He(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,Ct,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Rt,o.RENDERBUFFER,J.__webglColorRenderbuffer[Rt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),It(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),et(o.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Dt(J.__webglFramebuffer[Rt][Yt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Yt);else Dt(J.__webglFramebuffer[Rt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);M(E)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,Yt=Mt.length;Rt<Yt;Rt++){const Zt=Mt[Rt],Et=r.get(Zt);let Ct=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,Et.__webglTexture),et(Ct,Zt),Dt(J.__webglFramebuffer,U,Zt,o.COLOR_ATTACHMENT0+Rt,Ct,0),M(Zt)&&_(Ct)}i.unbindTexture()}else{let Rt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,ht.__webglTexture),et(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)Dt(J.__webglFramebuffer[Yt],U,E,o.COLOR_ATTACHMENT0,Rt,Yt);else Dt(J.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Rt,0);M(E)&&_(Rt),i.unbindTexture()}U.depthBuffer&&zt(U)}function ae(U){const E=U.textures;for(let J=0,ht=E.length;J<ht;J++){const Mt=E[J];if(M(Mt)){const ut=I(U),jt=r.get(Mt).__webglTexture;i.bindTexture(ut,jt),_(ut),i.unbindTexture()}}}const te=[],ee=[];function Vt(U){if(U.samples>0){if(Wt(U)===!1){const E=U.textures,J=U.width,ht=U.height;let Mt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=r.get(U),Rt=E.length>1;if(Rt)for(let Zt=0;Zt<E.length;Zt++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Yt=U.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Zt=0;Zt<E.length;Zt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Mt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Mt|=o.STENCIL_BUFFER_BIT)),Rt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[Zt]);const Et=r.get(E[Zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,J,ht,0,0,J,ht,Mt,o.NEAREST),m===!0&&(te.length=0,ee.length=0,te.push(o.COLOR_ATTACHMENT0+Zt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(te.push(ut),ee.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ee)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,te))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Rt)for(let Zt=0;Zt<E.length;Zt++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.RENDERBUFFER,jt.__webglColorRenderbuffer[Zt]);const Et=r.get(E[Zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Zt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function He(U){return Math.min(l.maxSamples,U.samples)}function Wt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function oe(U){const E=h.render.frame;S.get(U)!==E&&(S.set(U,E),U.update())}function Ze(U,E){const J=U.colorSpace,ht=U.format,Mt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Es&&J!==za&&(Re.getTransfer(J)===Ie?(ht!==_i||Mt!==ia)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function Ye(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=nt,this.setTexture2D=ft,this.setTexture2DArray=N,this.setTexture3D=W,this.setTextureCube=k,this.rebindTextures=re,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Wt}function Kb(o,e){function i(r,l=za){let c;const h=Re.getTransfer(l);if(r===ia)return o.UNSIGNED_BYTE;if(r===ld)return o.UNSIGNED_SHORT_4_4_4_4;if(r===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(r===lv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===uv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===sv)return o.BYTE;if(r===ov)return o.SHORT;if(r===Ao)return o.UNSIGNED_SHORT;if(r===od)return o.INT;if(r===vr)return o.UNSIGNED_INT;if(r===ea)return o.FLOAT;if(r===Uo)return o.HALF_FLOAT;if(r===cv)return o.ALPHA;if(r===fv)return o.RGB;if(r===_i)return o.RGBA;if(r===Co)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===hv)return o.RED;if(r===cd)return o.RED_INTEGER;if(r===dv)return o.RG;if(r===fd)return o.RG_INTEGER;if(r===hd)return o.RGBA_INTEGER;if(r===mu||r===gu||r===_u||r===vu)if(h===Ie)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===mu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===mu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_u)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===vu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===wh||r===Dh||r===Uh||r===Lh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Lh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nh||r===Oh||r===zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Nh||r===Oh)return h===Ie?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===zh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ph||r===Bh||r===Ih||r===Fh||r===Hh||r===Gh||r===Vh||r===Xh||r===kh||r===Wh||r===qh||r===Yh||r===Zh||r===jh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ph)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Bh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ih)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Gh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Vh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===kh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Wh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===qh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Zh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===jh)return h===Ie?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Kh||r===Qh||r===Jh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Kh)return h===Ie?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Qh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$h||r===td||r===ed||r===nd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===$h)return c.COMPRESSED_RED_RGTC1_EXT;if(r===td)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ed)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ro?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Av(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Fa({vertexShader:Qb,fragmentShader:Jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Po(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends bs{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,S=null,v=null,x=null,y=null,A=null;const C=typeof XRWebGLBinding<"u",M=new $b,_={},I=i.getContextAttributes();let z=null,D=null;const V=[],H=[],B=new Fe;let j=null;const R=new li;R.viewport=new tn;const w=new li;w.viewport=new tn;const G=[R,w],nt=new MM;let lt=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ot=V[$];return ot===void 0&&(ot=new lh,V[$]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function($){let ot=V[$];return ot===void 0&&(ot=new lh,V[$]=ot),ot.getGripSpace()},this.getHand=function($){let ot=V[$];return ot===void 0&&(ot=new lh,V[$]=ot),ot.getHandSpace()};function ft($){const ot=H.indexOf($.inputSource);if(ot===-1)return;const Dt=V[ot];Dt!==void 0&&(Dt.update($.inputSource,$.frame,p||h),Dt.dispatchEvent({type:$.type,data:$.inputSource}))}function N(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",W);for(let $=0;$<V.length;$++){const ot=H[$];ot!==null&&(H[$]=null,V[$].disconnect(ot))}lt=null,mt=null,M.reset();for(const $ in _)delete _[$];e.setRenderTarget(z),y=null,x=null,v=null,l=null,D=null,Ut.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(z=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",N),l.addEventListener("inputsourceschange",W),I.xrCompatible!==!0&&await i.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,It=null,At=null;I.depth&&(At=I.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Dt=I.stencil?wo:Co,It=I.stencil?Ro:vr);const zt={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(zt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Sr(x.textureWidth,x.textureHeight,{format:_i,type:ia,depthTexture:new bv(x.textureWidth,x.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Dt={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Dt),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),D=new Sr(y.framebufferWidth,y.framebufferHeight,{format:_i,type:ia,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Ut.setContext(l),Ut.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function W($){for(let ot=0;ot<$.removed.length;ot++){const Dt=$.removed[ot],It=H.indexOf(Dt);It>=0&&(H[It]=null,V[It].disconnect(Dt))}for(let ot=0;ot<$.added.length;ot++){const Dt=$.added[ot];let It=H.indexOf(Dt);if(It===-1){for(let zt=0;zt<V.length;zt++)if(zt>=H.length){H.push(Dt),It=zt;break}else if(H[zt]===null){H[zt]=Dt,It=zt;break}if(It===-1)break}const At=V[It];At&&At.connect(Dt)}}const k=new rt,_t=new rt;function St($,ot,Dt){k.setFromMatrixPosition(ot.matrixWorld),_t.setFromMatrixPosition(Dt.matrixWorld);const It=k.distanceTo(_t),At=ot.projectionMatrix.elements,zt=Dt.projectionMatrix.elements,re=At[14]/(At[10]-1),L=At[14]/(At[10]+1),ae=(At[9]+1)/At[5],te=(At[9]-1)/At[5],ee=(At[8]-1)/At[0],Vt=(zt[8]+1)/zt[0],He=re*ee,Wt=re*Vt,oe=It/(-ee+Vt),Ze=oe*-ee;if(ot.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ze),$.translateZ(oe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Ye=re+oe,U=L+oe,E=He-Ze,J=Wt+(It-Ze),ht=ae*L/U*Ye,Mt=te*L/U*Ye;$.projectionMatrix.makePerspective(E,J,ht,Mt,Ye,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function O($,ot){ot===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ot.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let ot=$.near,Dt=$.far;M.texture!==null&&(M.depthNear>0&&(ot=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),nt.near=w.near=R.near=ot,nt.far=w.far=R.far=Dt,(lt!==nt.near||mt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),lt=nt.near,mt=nt.far),nt.layers.mask=$.layers.mask|6,R.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const It=$.parent,At=nt.cameras;O(nt,It);for(let zt=0;zt<At.length;zt++)O(At[zt],It);At.length===2?St(nt,R,w):nt.projectionMatrix.copy(R.projectionMatrix),et($,nt,It)};function et($,ot,Dt){Dt===null?$.matrix.copy(ot.matrixWorld):($.matrix.copy(Dt.matrixWorld),$.matrix.invert(),$.matrix.multiply(ot.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ot.projectionMatrix),$.projectionMatrixInverse.copy(ot.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=id*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function($){m=$,x!==null&&(x.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function($){return _[$]};let xt=null;function bt($,ot){if(S=ot.getViewerPose(p||h),A=ot,S!==null){const Dt=S.views;y!==null&&(e.setRenderTargetFramebuffer(D,y.framebuffer),e.setRenderTarget(D));let It=!1;Dt.length!==nt.cameras.length&&(nt.cameras.length=0,It=!0);for(let L=0;L<Dt.length;L++){const ae=Dt[L];let te=null;if(y!==null)te=y.getViewport(ae);else{const Vt=v.getViewSubImage(x,ae);te=Vt.viewport,L===0&&(e.setRenderTargetTextures(D,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(D))}let ee=G[L];ee===void 0&&(ee=new li,ee.layers.enable(L),ee.viewport=new tn,G[L]=ee),ee.matrix.fromArray(ae.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ae.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(te.x,te.y,te.width,te.height),L===0&&(nt.matrix.copy(ee.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),It===!0&&nt.cameras.push(ee)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const L=v.getDepthInformation(Dt[0]);L&&L.isValid&&L.texture&&M.init(L,l.renderState)}if(At&&At.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let L=0;L<Dt.length;L++){const ae=Dt[L].camera;if(ae){let te=_[ae];te||(te=new Av,_[ae]=te);const ee=v.getCameraImage(ae);te.sourceTexture=ee}}}}for(let Dt=0;Dt<V.length;Dt++){const It=H[Dt],At=V[Dt];It!==null&&At!==void 0&&At.update(It,ot,p||h)}xt&&xt($,ot),ot.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ot}),A=null}const Ut=new Rv;Ut.setAnimationLoop(bt),this.setAnimationLoop=function($){xt=$},this.dispose=function(){}}}const cr=new aa,eA=new cn;function nA(o,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,Mv(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,I,z,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),S(M,_)):_.isMeshStandardMaterial?(c(M,_),x(M,_),_.isMeshPhysicalMaterial&&y(M,_,D)):_.isMeshMatcapMaterial?(c(M,_),A(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),C(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?m(M,_,I,z):_.isSpriteMaterial?p(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===In&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===In&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const I=e.get(_),z=I.envMap,D=I.envMapRotation;z&&(M.envMap.value=z,cr.copy(D),cr.x*=-1,cr.y*=-1,cr.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),M.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(cr)),M.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function m(M,_,I,z){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*I,M.scale.value=z*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function p(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function S(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,I){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===In&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=I.texture,M.transmissionSamplerSize.value.set(I.width,I.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function A(M,_){_.matcap&&(M.matcap.value=_.matcap)}function C(M,_){const I=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(I.matrixWorld),M.nearDistance.value=I.shadow.camera.near,M.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(I,z){const D=z.program;r.uniformBlockBinding(I,D)}function p(I,z){let D=l[I.id];D===void 0&&(A(I),D=S(I),l[I.id]=D,I.addEventListener("dispose",M));const V=z.program;r.updateUBOMapping(I,V);const H=e.render.frame;c[I.id]!==H&&(x(I),c[I.id]=H)}function S(I){const z=v();I.__bindingPointIndex=z;const D=o.createBuffer(),V=I.__size,H=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,z,D),D}function v(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const z=l[I.id],D=I.uniforms,V=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,z);for(let H=0,B=D.length;H<B;H++){const j=Array.isArray(D[H])?D[H]:[D[H]];for(let R=0,w=j.length;R<w;R++){const G=j[R];if(y(G,H,R,V)===!0){const nt=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let mt=0;for(let ft=0;ft<lt.length;ft++){const N=lt[ft],W=C(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,nt+mt,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,mt),mt+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,z,D,V){const H=I.value,B=z+"_"+D;if(V[B]===void 0)return typeof H=="number"||typeof H=="boolean"?V[B]=H:V[B]=H.clone(),!0;{const j=V[B];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return V[B]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function A(I){const z=I.uniforms;let D=0;const V=16;for(let B=0,j=z.length;B<j;B++){const R=Array.isArray(z[B])?z[B]:[z[B]];for(let w=0,G=R.length;w<G;w++){const nt=R[w],lt=Array.isArray(nt.value)?nt.value:[nt.value];for(let mt=0,ft=lt.length;mt<ft;mt++){const N=lt[mt],W=C(N),k=D%V,_t=k%W.boundary,St=k+_t;D+=_t,St!==0&&V-St<W.storage&&(D+=V-St),nt.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=D,D+=W.storage}}}const H=D%V;return H>0&&(D+=V-H),I.__size=D,I.__cache={},this}function C(I){const z={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(z.boundary=4,z.storage=4):I.isVector2?(z.boundary=8,z.storage=8):I.isVector3||I.isColor?(z.boundary=16,z.storage=12):I.isVector4?(z.boundary=16,z.storage=16):I.isMatrix3?(z.boundary=48,z.storage=48):I.isMatrix4?(z.boundary=64,z.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),z}function M(I){const z=I.target;z.removeEventListener("dispose",M);const D=h.indexOf(z.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[z.id]),delete l[z.id],delete c[z.id]}function _(){for(const I in l)o.deleteBuffer(l[I]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}class aA{constructor(e={}){const{canvas:i=Ix(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=h;const A=new Uint32Array(4),C=new Int32Array(4);let M=null,_=null;const I=[],z=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=oi;let H=0,B=0,j=null,R=-1,w=null;const G=new tn,nt=new tn;let lt=null;const mt=new Ue(0);let ft=0,N=i.width,W=i.height,k=1,_t=null,St=null;const O=new tn(0,0,N,W),et=new tn(0,0,N,W);let xt=!1;const bt=new Tv;let Ut=!1,$=!1;const ot=new cn,Dt=new rt,It=new tn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function re(){return j===null?k:1}let L=r;function ae(b,q){return i.getContext(b,q)}try{const b={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${sd}`),i.addEventListener("webglcontextlost",wt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",yt,!1),L===null){const q="webgl2";if(L=ae(q,b),L===null)throw ae(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let te,ee,Vt,He,Wt,oe,Ze,Ye,U,E,J,ht,Mt,ut,jt,Rt,Yt,Zt,Et,Ct,Kt,Bt,Lt,ue;function X(){te=new pT(L),te.init(),Bt=new Kb(L,te),ee=new oT(L,te,e,Bt),Vt=new Zb(L,te),ee.reversedDepthBuffer&&x&&Vt.buffers.depth.setReversed(!0),He=new _T(L),Wt=new zb,oe=new jb(L,te,Vt,Wt,ee,Bt,He),Ze=new uT(D),Ye=new dT(D),U=new EM(L),Lt=new rT(L,U),E=new mT(L,U,He,Lt),J=new ST(L,E,U,He),Et=new vT(L,ee,oe),Rt=new lT(Wt),ht=new Ob(D,Ze,Ye,te,ee,Lt,Rt),Mt=new nA(D,Wt),ut=new Bb,jt=new Xb(te),Zt=new aT(D,Ze,Ye,Vt,J,y,m),Yt=new qb(D,J,ee),ue=new iA(L,He,ee,Vt),Ct=new sT(L,te,He),Kt=new gT(L,te,He),He.programs=ht.programs,D.capabilities=ee,D.extensions=te,D.properties=Wt,D.renderLists=ut,D.shadowMap=Yt,D.state=Vt,D.info=He}X();const Tt=new tA(D,L);this.xr=Tt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=te.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=te.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(N,W,!1))},this.getSize=function(b){return b.set(N,W)},this.setSize=function(b,q,it=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,W=q,i.width=Math.floor(b*k),i.height=Math.floor(q*k),it===!0&&(i.style.width=b+"px",i.style.height=q+"px"),this.setViewport(0,0,b,q)},this.getDrawingBufferSize=function(b){return b.set(N*k,W*k).floor()},this.setDrawingBufferSize=function(b,q,it){N=b,W=q,k=it,i.width=Math.floor(b*it),i.height=Math.floor(q*it),this.setViewport(0,0,b,q)},this.getCurrentViewport=function(b){return b.copy(G)},this.getViewport=function(b){return b.copy(O)},this.setViewport=function(b,q,it,at){b.isVector4?O.set(b.x,b.y,b.z,b.w):O.set(b,q,it,at),Vt.viewport(G.copy(O).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(et)},this.setScissor=function(b,q,it,at){b.isVector4?et.set(b.x,b.y,b.z,b.w):et.set(b,q,it,at),Vt.scissor(nt.copy(et).multiplyScalar(k).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(b){Vt.setScissorTest(xt=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){St=b},this.getClearColor=function(b){return b.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(b=!0,q=!0,it=!0){let at=0;if(b){let Z=!1;if(j!==null){const vt=j.texture.format;Z=vt===hd||vt===fd||vt===cd}if(Z){const vt=j.texture.type,Nt=vt===ia||vt===vr||vt===Ao||vt===Ro||vt===ld||vt===ud,Xt=Zt.getClearColor(),Pt=Zt.getClearAlpha(),Qt=Xt.r,ie=Xt.g,Jt=Xt.b;Nt?(A[0]=Qt,A[1]=ie,A[2]=Jt,A[3]=Pt,L.clearBufferuiv(L.COLOR,0,A)):(C[0]=Qt,C[1]=ie,C[2]=Jt,C[3]=Pt,L.clearBufferiv(L.COLOR,0,C))}else at|=L.COLOR_BUFFER_BIT}q&&(at|=L.DEPTH_BUFFER_BIT),it&&(at|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",wt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",yt,!1),Zt.dispose(),ut.dispose(),jt.dispose(),Wt.dispose(),Ze.dispose(),Ye.dispose(),J.dispose(),Lt.dispose(),ue.dispose(),ht.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Qn),Tt.removeEventListener("sessionend",Rs),Si.stop()};function wt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const b=He.autoReset,q=Yt.enabled,it=Yt.autoUpdate,at=Yt.needsUpdate,Z=Yt.type;X(),He.autoReset=b,Yt.enabled=q,Yt.autoUpdate=it,Yt.needsUpdate=at,Yt.type=Z}function yt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function gt(b){const q=b.target;q.removeEventListener("dispose",gt),Ht(q)}function Ht(b){se(b),Wt.remove(b)}function se(b){const q=Wt.get(b).programs;q!==void 0&&(q.forEach(function(it){ht.releaseProgram(it)}),b.isShaderMaterial&&ht.releaseShaderCache(b))}this.renderBufferDirect=function(b,q,it,at,Z,vt){q===null&&(q=At);const Nt=Z.isMesh&&Z.matrixWorld.determinant()<0,Xt=ra(b,q,it,at,Z);Vt.setMaterial(at,Nt);let Pt=it.index,Qt=1;if(at.wireframe===!0){if(Pt=E.getWireframeAttribute(it),Pt===void 0)return;Qt=2}const ie=it.drawRange,Jt=it.attributes.position;let pe=ie.start*Qt,we=(ie.start+ie.count)*Qt;vt!==null&&(pe=Math.max(pe,vt.start*Qt),we=Math.min(we,(vt.start+vt.count)*Qt)),Pt!==null?(pe=Math.max(pe,0),we=Math.min(we,Pt.count)):Jt!=null&&(pe=Math.max(pe,0),we=Math.min(we,Jt.count));const Ge=we-pe;if(Ge<0||Ge===1/0)return;Lt.setup(Z,at,Xt,it,Pt);let De,me=Ct;if(Pt!==null&&(De=U.get(Pt),me=Kt,me.setIndex(De)),Z.isMesh)at.wireframe===!0?(Vt.setLineWidth(at.wireframeLinewidth*re()),me.setMode(L.LINES)):me.setMode(L.TRIANGLES);else if(Z.isLine){let kt=at.linewidth;kt===void 0&&(kt=1),Vt.setLineWidth(kt*re()),Z.isLineSegments?me.setMode(L.LINES):Z.isLineLoop?me.setMode(L.LINE_LOOP):me.setMode(L.LINE_STRIP)}else Z.isPoints?me.setMode(L.POINTS):Z.isSprite&&me.setMode(L.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Do("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))me.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,Xe=Z._multiDrawCounts,Te=Z._multiDrawCount,_n=Pt?U.get(Pt).bytesPerElement:1,wi=Wt.get(at).currentProgram.getUniforms();for(let dn=0;dn<Te;dn++)wi.setValue(L,"_gl_DrawID",dn),me.render(kt[dn]/_n,Xe[dn])}else if(Z.isInstancedMesh)me.renderInstances(pe,Ge,Z.count);else if(it.isInstancedBufferGeometry){const kt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Xe=Math.min(it.instanceCount,kt);me.renderInstances(pe,Ge,Xe)}else me.render(pe,Ge)};function Le(b,q,it){b.transparent===!0&&b.side===ta&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Hn(b,q,it),b.side=Ia,b.needsUpdate=!0,Hn(b,q,it),b.side=ta):Hn(b,q,it)}this.compile=function(b,q,it=null){it===null&&(it=b),_=jt.get(it),_.init(q),z.push(_),it.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),b!==it&&b.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights();const at=new Set;return b.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const vt=Z.material;if(vt)if(Array.isArray(vt))for(let Nt=0;Nt<vt.length;Nt++){const Xt=vt[Nt];Le(Xt,it,Z),at.add(Xt)}else Le(vt,it,Z),at.add(vt)}),_=z.pop(),at},this.compileAsync=function(b,q,it=null){const at=this.compile(b,q,it);return new Promise(Z=>{function vt(){if(at.forEach(function(Nt){Wt.get(Nt).currentProgram.isReady()&&at.delete(Nt)}),at.size===0){Z(b);return}setTimeout(vt,10)}te.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Ee=null;function An(b){Ee&&Ee(b)}function Qn(){Si.stop()}function Rs(){Si.start()}const Si=new Rv;Si.setAnimationLoop(An),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(b){Ee=b,Tt.setAnimationLoop(b),b===null?Si.stop():Si.start()},Tt.addEventListener("sessionstart",Qn),Tt.addEventListener("sessionend",Rs),this.render=function(b,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(q),q=Tt.getCamera()),b.isScene===!0&&b.onBeforeRender(D,b,q,j),_=jt.get(b,z.length),_.init(q),z.push(_),ot.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),bt.setFromProjectionMatrix(ot,Ai,q.reversedDepth),$=this.localClippingEnabled,Ut=Rt.init(this.clippingPlanes,$),M=ut.get(b,I.length),M.init(),I.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const vt=D.xr.getDepthSensingMesh();vt!==null&&Mr(vt,q,-1/0,D.sortObjects)}Mr(b,q,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(_t,St),zt=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,zt&&Zt.addToRenderList(M,b),this.info.render.frame++,Ut===!0&&Rt.beginShadows();const it=_.state.shadowsArray;Yt.render(it,b,q),Ut===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=M.opaque,Z=M.transmissive;if(_.setupLights(),q.isArrayCamera){const vt=q.cameras;if(Z.length>0)for(let Nt=0,Xt=vt.length;Nt<Xt;Nt++){const Pt=vt[Nt];Er(at,Z,b,Pt)}zt&&Zt.render(b);for(let Nt=0,Xt=vt.length;Nt<Xt;Nt++){const Pt=vt[Nt];yr(M,b,Pt,Pt.viewport)}}else Z.length>0&&Er(at,Z,b,q),zt&&Zt.render(b),yr(M,b,q);j!==null&&B===0&&(oe.updateMultisampleRenderTarget(j),oe.updateRenderTargetMipmap(j)),b.isScene===!0&&b.onAfterRender(D,b,q),Lt.resetDefaultState(),R=-1,w=null,z.pop(),z.length>0?(_=z[z.length-1],Ut===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,I.pop(),I.length>0?M=I[I.length-1]:M=null};function Mr(b,q,it,at){if(b.visible===!1)return;if(b.layers.test(q.layers)){if(b.isGroup)it=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(q);else if(b.isLight)_.pushLight(b),b.castShadow&&_.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||bt.intersectsSprite(b)){at&&It.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ot);const Nt=J.update(b),Xt=b.material;Xt.visible&&M.push(b,Nt,Xt,it,It.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||bt.intersectsObject(b))){const Nt=J.update(b),Xt=b.material;if(at&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),It.copy(b.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),It.copy(Nt.boundingSphere.center)),It.applyMatrix4(b.matrixWorld).applyMatrix4(ot)),Array.isArray(Xt)){const Pt=Nt.groups;for(let Qt=0,ie=Pt.length;Qt<ie;Qt++){const Jt=Pt[Qt],pe=Xt[Jt.materialIndex];pe&&pe.visible&&M.push(b,Nt,pe,it,It.z,Jt)}}else Xt.visible&&M.push(b,Nt,Xt,it,It.z,null)}}const vt=b.children;for(let Nt=0,Xt=vt.length;Nt<Xt;Nt++)Mr(vt[Nt],q,it,at)}function yr(b,q,it,at){const Z=b.opaque,vt=b.transmissive,Nt=b.transparent;_.setupLightsView(it),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,it),at&&Vt.viewport(G.copy(at)),Z.length>0&&Ha(Z,q,it),vt.length>0&&Ha(vt,q,it),Nt.length>0&&Ha(Nt,q,it),Vt.buffers.depth.setTest(!0),Vt.buffers.depth.setMask(!0),Vt.buffers.color.setMask(!0),Vt.setPolygonOffset(!1)}function Er(b,q,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new Sr(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?Uo:ia,minFilter:gr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const vt=_.state.transmissionRenderTarget[at.id],Nt=at.viewport||G;vt.setSize(Nt.z*D.transmissionResolutionScale,Nt.w*D.transmissionResolutionScale);const Xt=D.getRenderTarget(),Pt=D.getActiveCubeFace(),Qt=D.getActiveMipmapLevel();D.setRenderTarget(vt),D.getClearColor(mt),ft=D.getClearAlpha(),ft<1&&D.setClearColor(16777215,.5),D.clear(),zt&&Zt.render(it);const ie=D.toneMapping;D.toneMapping=Ba;const Jt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),Ut===!0&&Rt.setGlobalState(D.clippingPlanes,at),Ha(b,it,at),oe.updateMultisampleRenderTarget(vt),oe.updateRenderTargetMipmap(vt),te.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let we=0,Ge=q.length;we<Ge;we++){const De=q[we],me=De.object,kt=De.geometry,Xe=De.material,Te=De.group;if(Xe.side===ta&&me.layers.test(at.layers)){const _n=Xe.side;Xe.side=In,Xe.needsUpdate=!0,Cs(me,it,at,kt,Xe,Te),Xe.side=_n,Xe.needsUpdate=!0,pe=!0}}pe===!0&&(oe.updateMultisampleRenderTarget(vt),oe.updateRenderTargetMipmap(vt))}D.setRenderTarget(Xt,Pt,Qt),D.setClearColor(mt,ft),Jt!==void 0&&(at.viewport=Jt),D.toneMapping=ie}function Ha(b,q,it){const at=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,vt=b.length;Z<vt;Z++){const Nt=b[Z],Xt=Nt.object,Pt=Nt.geometry,Qt=Nt.group;let ie=Nt.material;ie.allowOverride===!0&&at!==null&&(ie=at),Xt.layers.test(it.layers)&&Cs(Xt,q,it,Pt,ie,Qt)}}function Cs(b,q,it,at,Z,vt){b.onBeforeRender(D,q,it,at,Z,vt),b.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Z.onBeforeRender(D,q,it,at,b,vt),Z.transparent===!0&&Z.side===ta&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,D.renderBufferDirect(it,q,at,Z,b,vt),Z.side=Ia,Z.needsUpdate=!0,D.renderBufferDirect(it,q,at,Z,b,vt),Z.side=ta):D.renderBufferDirect(it,q,at,Z,b,vt),b.onAfterRender(D,q,it,at,Z,vt)}function Hn(b,q,it){q.isScene!==!0&&(q=At);const at=Wt.get(b),Z=_.state.lights,vt=_.state.shadowsArray,Nt=Z.state.version,Xt=ht.getParameters(b,Z.state,vt,q,it),Pt=ht.getProgramCacheKey(Xt);let Qt=at.programs;at.environment=b.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(b.isMeshStandardMaterial?Ye:Ze).get(b.envMap||at.environment),at.envMapRotation=at.environment!==null&&b.envMap===null?q.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",gt),Qt=new Map,at.programs=Qt);let ie=Qt.get(Pt);if(ie!==void 0){if(at.currentProgram===ie&&at.lightsStateVersion===Nt)return gn(b,Xt),ie}else Xt.uniforms=ht.getUniforms(b),b.onBeforeCompile(Xt,D),ie=ht.acquireProgram(Xt,Pt),Qt.set(Pt,ie),at.uniforms=Xt.uniforms;const Jt=at.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Jt.clippingPlanes=Rt.uniform),gn(b,Xt),at.needsLights=Au(b),at.lightsStateVersion=Nt,at.needsLights&&(Jt.ambientLightColor.value=Z.state.ambient,Jt.lightProbe.value=Z.state.probe,Jt.directionalLights.value=Z.state.directional,Jt.directionalLightShadows.value=Z.state.directionalShadow,Jt.spotLights.value=Z.state.spot,Jt.spotLightShadows.value=Z.state.spotShadow,Jt.rectAreaLights.value=Z.state.rectArea,Jt.ltc_1.value=Z.state.rectAreaLTC1,Jt.ltc_2.value=Z.state.rectAreaLTC2,Jt.pointLights.value=Z.state.point,Jt.pointLightShadows.value=Z.state.pointShadow,Jt.hemisphereLights.value=Z.state.hemi,Jt.directionalShadowMap.value=Z.state.directionalShadowMap,Jt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Jt.spotShadowMap.value=Z.state.spotShadowMap,Jt.spotLightMatrix.value=Z.state.spotLightMatrix,Jt.spotLightMap.value=Z.state.spotLightMap,Jt.pointShadowMap.value=Z.state.pointShadowMap,Jt.pointShadowMatrix.value=Z.state.pointShadowMatrix),at.currentProgram=ie,at.uniformsList=null,ie}function en(b){if(b.uniformsList===null){const q=b.currentProgram.getUniforms();b.uniformsList=Su.seqWithValue(q.seq,b.uniforms)}return b.uniformsList}function gn(b,q){const it=Wt.get(b);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function ra(b,q,it,at,Z){q.isScene!==!0&&(q=At),oe.resetTextureUnits();const vt=q.fog,Nt=at.isMeshStandardMaterial?q.environment:null,Xt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Es,Pt=(at.isMeshStandardMaterial?Ye:Ze).get(at.envMap||Nt),Qt=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ie=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Jt=!!it.morphAttributes.position,pe=!!it.morphAttributes.normal,we=!!it.morphAttributes.color;let Ge=Ba;at.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ge=D.toneMapping);const De=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,me=De!==void 0?De.length:0,kt=Wt.get(at),Xe=_.state.lights;if(Ut===!0&&($===!0||b!==w)){const ln=b===w&&at.id===R;Rt.setState(at,b,ln)}let Te=!1;at.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Xe.state.version||kt.outputColorSpace!==Xt||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==Pt||at.fog===!0&&kt.fog!==vt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==Rt.numPlanes||kt.numIntersection!==Rt.numIntersection)||kt.vertexAlphas!==Qt||kt.vertexTangents!==ie||kt.morphTargets!==Jt||kt.morphNormals!==pe||kt.morphColors!==we||kt.toneMapping!==Ge||kt.morphTargetsCount!==me)&&(Te=!0):(Te=!0,kt.__version=at.version);let _n=kt.currentProgram;Te===!0&&(_n=Hn(at,q,Z));let wi=!1,dn=!1,Va=!1;const ve=_n.getUniforms(),yn=kt.uniforms;if(Vt.useProgram(_n.program)&&(wi=!0,dn=!0,Va=!0),at.id!==R&&(R=at.id,dn=!0),wi||w!==b){Vt.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(L,"projectionMatrix",b.projectionMatrix),ve.setValue(L,"viewMatrix",b.matrixWorldInverse);const Qe=ve.map.cameraPosition;Qe!==void 0&&Qe.setValue(L,Dt.setFromMatrixPosition(b.matrixWorld)),ee.logarithmicDepthBuffer&&ve.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ve.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),w!==b&&(w=b,dn=!0,Va=!0)}if(Z.isSkinnedMesh){ve.setOptional(L,Z,"bindMatrix"),ve.setOptional(L,Z,"bindMatrixInverse");const ln=Z.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),ve.setValue(L,"boneTexture",ln.boneTexture,oe))}Z.isBatchedMesh&&(ve.setOptional(L,Z,"batchingTexture"),ve.setValue(L,"batchingTexture",Z._matricesTexture,oe),ve.setOptional(L,Z,"batchingIdTexture"),ve.setValue(L,"batchingIdTexture",Z._indirectTexture,oe),ve.setOptional(L,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ve.setValue(L,"batchingColorTexture",Z._colorsTexture,oe));const Rn=it.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&Et.update(Z,it,_n),(dn||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,ve.setValue(L,"receiveShadow",Z.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(yn.envMap.value=Pt,yn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&q.environment!==null&&(yn.envMapIntensity.value=q.environmentIntensity),dn&&(ve.setValue(L,"toneMappingExposure",D.toneMappingExposure),kt.needsLights&&ws(yn,Va),vt&&at.fog===!0&&Mt.refreshFogUniforms(yn,vt),Mt.refreshMaterialUniforms(yn,at,k,W,_.state.transmissionRenderTarget[b.id]),Su.upload(L,en(kt),yn,oe)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Su.upload(L,en(kt),yn,oe),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ve.setValue(L,"center",Z.center),ve.setValue(L,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(L,"normalMatrix",Z.normalMatrix),ve.setValue(L,"modelMatrix",Z.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const ln=at.uniformsGroups;for(let Qe=0,Tr=ln.length;Qe<Tr;Qe++){const xi=ln[Qe];ue.update(xi,_n),ue.bind(xi,_n)}}return _n}function ws(b,q){b.ambientLightColor.needsUpdate=q,b.lightProbe.needsUpdate=q,b.directionalLights.needsUpdate=q,b.directionalLightShadows.needsUpdate=q,b.pointLights.needsUpdate=q,b.pointLightShadows.needsUpdate=q,b.spotLights.needsUpdate=q,b.spotLightShadows.needsUpdate=q,b.rectAreaLights.needsUpdate=q,b.hemisphereLights.needsUpdate=q}function Au(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(b,q,it){const at=Wt.get(b);at.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Wt.get(b.texture).__webglTexture=q,Wt.get(b.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,q){const it=Wt.get(b);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const Ru=L.createFramebuffer();this.setRenderTarget=function(b,q=0,it=0){j=b,H=q,B=it;let at=!0,Z=null,vt=!1,Nt=!1;if(b){const Pt=Wt.get(b);if(Pt.__useDefaultFramebuffer!==void 0)Vt.bindFramebuffer(L.FRAMEBUFFER,null),at=!1;else if(Pt.__webglFramebuffer===void 0)oe.setupRenderTarget(b);else if(Pt.__hasExternalTextures)oe.rebindTextures(b,Wt.get(b.texture).__webglTexture,Wt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Jt=b.depthTexture;if(Pt.__boundDepthTexture!==Jt){if(Jt!==null&&Wt.has(Jt)&&(b.width!==Jt.image.width||b.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Nt=!0);const ie=Wt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ie[q])?Z=ie[q][it]:Z=ie[q],vt=!0):b.samples>0&&oe.useMultisampledRTT(b)===!1?Z=Wt.get(b).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[it]:Z=ie,G.copy(b.viewport),nt.copy(b.scissor),lt=b.scissorTest}else G.copy(O).multiplyScalar(k).floor(),nt.copy(et).multiplyScalar(k).floor(),lt=xt;if(it!==0&&(Z=Ru),Vt.bindFramebuffer(L.FRAMEBUFFER,Z)&&at&&Vt.drawBuffers(b,Z),Vt.viewport(G),Vt.scissor(nt),Vt.setScissorTest(lt),vt){const Pt=Wt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pt.__webglTexture,it)}else if(Nt){const Pt=q;for(let Qt=0;Qt<b.textures.length;Qt++){const ie=Wt.get(b.textures[Qt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Qt,ie.__webglTexture,it,Pt)}}else if(b!==null&&it!==0){const Pt=Wt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pt.__webglTexture,it)}R=-1},this.readRenderTargetPixels=function(b,q,it,at,Z,vt,Nt,Xt=0){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt){Vt.bindFramebuffer(L.FRAMEBUFFER,Pt);try{const Qt=b.textures[Xt],ie=Qt.format,Jt=Qt.type;if(!ee.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=b.width-at&&it>=0&&it<=b.height-Z&&(b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Xt),L.readPixels(q,it,at,Z,Bt.convert(ie),Bt.convert(Jt),vt))}finally{const Qt=j!==null?Wt.get(j).__webglFramebuffer:null;Vt.bindFramebuffer(L.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(b,q,it,at,Z,vt,Nt,Xt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Wt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Nt!==void 0&&(Pt=Pt[Nt]),Pt)if(q>=0&&q<=b.width-at&&it>=0&&it<=b.height-Z){Vt.bindFramebuffer(L.FRAMEBUFFER,Pt);const Qt=b.textures[Xt],ie=Qt.format,Jt=Qt.type;if(!ee.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),b.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Xt),L.readPixels(q,it,at,Z,Bt.convert(ie),Bt.convert(Jt),0);const we=j!==null?Wt.get(j).__webglFramebuffer:null;Vt.bindFramebuffer(L.FRAMEBUFFER,we);const Ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Fx(L,Ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,pe),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(pe),L.deleteSync(Ge),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,q=null,it=0){const at=Math.pow(2,-it),Z=Math.floor(b.image.width*at),vt=Math.floor(b.image.height*at),Nt=q!==null?q.x:0,Xt=q!==null?q.y:0;oe.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,it,0,0,Nt,Xt,Z,vt),Vt.unbindTexture()};const Bo=L.createFramebuffer(),Ga=L.createFramebuffer();this.copyTextureToTexture=function(b,q,it=null,at=null,Z=0,vt=null){vt===null&&(Z!==0?(Do("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),vt=Z,Z=0):vt=0);let Nt,Xt,Pt,Qt,ie,Jt,pe,we,Ge;const De=b.isCompressedTexture?b.mipmaps[vt]:b.image;if(it!==null)Nt=it.max.x-it.min.x,Xt=it.max.y-it.min.y,Pt=it.isBox3?it.max.z-it.min.z:1,Qt=it.min.x,ie=it.min.y,Jt=it.isBox3?it.min.z:0;else{const Rn=Math.pow(2,-Z);Nt=Math.floor(De.width*Rn),Xt=Math.floor(De.height*Rn),b.isDataArrayTexture?Pt=De.depth:b.isData3DTexture?Pt=Math.floor(De.depth*Rn):Pt=1,Qt=0,ie=0,Jt=0}at!==null?(pe=at.x,we=at.y,Ge=at.z):(pe=0,we=0,Ge=0);const me=Bt.convert(q.format),kt=Bt.convert(q.type);let Xe;q.isData3DTexture?(oe.setTexture3D(q,0),Xe=L.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(oe.setTexture2DArray(q,0),Xe=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(q,0),Xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,q.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,q.unpackAlignment);const Te=L.getParameter(L.UNPACK_ROW_LENGTH),_n=L.getParameter(L.UNPACK_IMAGE_HEIGHT),wi=L.getParameter(L.UNPACK_SKIP_PIXELS),dn=L.getParameter(L.UNPACK_SKIP_ROWS),Va=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,De.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,De.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ie),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Jt);const ve=b.isDataArrayTexture||b.isData3DTexture,yn=q.isDataArrayTexture||q.isData3DTexture;if(b.isDepthTexture){const Rn=Wt.get(b),ln=Wt.get(q),Qe=Wt.get(Rn.__renderTarget),Tr=Wt.get(ln.__renderTarget);Vt.bindFramebuffer(L.READ_FRAMEBUFFER,Qe.__webglFramebuffer),Vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Tr.__webglFramebuffer);for(let xi=0;xi<Pt;xi++)ve&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Wt.get(b).__webglTexture,Z,Jt+xi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Wt.get(q).__webglTexture,vt,Ge+xi)),L.blitFramebuffer(Qt,ie,Nt,Xt,pe,we,Nt,Xt,L.DEPTH_BUFFER_BIT,L.NEAREST);Vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(Z!==0||b.isRenderTargetTexture||Wt.has(b)){const Rn=Wt.get(b),ln=Wt.get(q);Vt.bindFramebuffer(L.READ_FRAMEBUFFER,Bo),Vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ga);for(let Qe=0;Qe<Pt;Qe++)ve?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Rn.__webglTexture,Z,Jt+Qe):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Rn.__webglTexture,Z),yn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,vt,Ge+Qe):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,vt),Z!==0?L.blitFramebuffer(Qt,ie,Nt,Xt,pe,we,Nt,Xt,L.COLOR_BUFFER_BIT,L.NEAREST):yn?L.copyTexSubImage3D(Xe,vt,pe,we,Ge+Qe,Qt,ie,Nt,Xt):L.copyTexSubImage2D(Xe,vt,pe,we,Qt,ie,Nt,Xt);Vt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Vt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yn?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Xe,vt,pe,we,Ge,Nt,Xt,Pt,me,kt,De.data):q.isCompressedArrayTexture?L.compressedTexSubImage3D(Xe,vt,pe,we,Ge,Nt,Xt,Pt,me,De.data):L.texSubImage3D(Xe,vt,pe,we,Ge,Nt,Xt,Pt,me,kt,De):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,pe,we,Nt,Xt,me,kt,De.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,pe,we,De.width,De.height,me,De.data):L.texSubImage2D(L.TEXTURE_2D,vt,pe,we,Nt,Xt,me,kt,De);L.pixelStorei(L.UNPACK_ROW_LENGTH,Te),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_n),L.pixelStorei(L.UNPACK_SKIP_PIXELS,wi),L.pixelStorei(L.UNPACK_SKIP_ROWS,dn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Va),vt===0&&q.generateMipmaps&&L.generateMipmap(Xe),Vt.unbindTexture()},this.initRenderTarget=function(b){Wt.get(b).__webglFramebuffer===void 0&&oe.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?oe.setTextureCube(b,0):b.isData3DTexture?oe.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?oe.setTexture2DArray(b,0):oe.setTexture2D(b,0),Vt.unbindTexture()},this.resetState=function(){H=0,B=0,j=null,Vt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Re._getDrawingBufferColorSpace(e),i.unpackColorSpace=Re._getUnpackColorSpace()}}function rA({buckets:o=[["fence","border","sky","drone","siren","distance","refuge","broken","gone","safe","aaaaaaaaaa"],["university","home","window","elderberry","hand","laundry","morning","neighbor","family","sleep"],["see","breathe","wait","hold","remember","silence","moment","space","time","near"],["alone","waiting","grief","tenderness","courage","care","loss","return","belong","pause"]],visiblePause:e=1e3,spawnInterval:i=700,betweenPause:r=500,startZ:l=-7500,stopZ:c=-1050,slowDistance:h=600,rapidSpeed:d=3500,fadeDuration:m=600,canvasWidth:p=1024,canvasHeight:S=256,viewMargin:v=.12,customEvery:x=5,customMaxSize:y=10,customMaxChars:A=11}){const C=Kn.useRef(null),M=Kn.useRef(null),_=Kn.useRef(null),[I,z]=Kn.useState([]),D=Kn.useRef([]);Kn.useEffect(()=>{D.current=I},[I]);const V=Kn.useRef(o.map(N=>[...N])),[H,B]=Kn.useState(V.current.map(N=>[...N])),j=Kn.useRef(0),R=Kn.useRef({visiblePause:e,spawnInterval:i,betweenPause:r,startZ:l,stopZ:c,slowDistance:h,rapidSpeed:d,fadeDuration:m,canvasWidth:p,canvasHeight:S,viewMargin:v,customEvery:x,customMaxSize:y,customMaxChars:A}).current,[w,G]=Kn.useState("");Kn.useEffect(()=>{const N=C.current;if(!N)return;const W=new aA({antialias:!0});W.setSize(N.clientWidth,N.clientHeight),W.setPixelRatio(window.devicePixelRatio||1),N.appendChild(W.domElement);const k=new fM;k.background=new Ue(0);const _t=new li(50,N.clientWidth/N.clientHeight,.1,1e4);k.add(new xM(16777215,1));const St=[],O={current:0},et=At=>{const zt=document.createElement("canvas");zt.width=R.canvasWidth,zt.height=R.canvasHeight;const re=zt.getContext("2d");re.clearRect(0,0,zt.width,zt.height),re.font=`bold ${Math.floor(zt.height*.6)}px sans-serif`,re.textAlign="center",re.textBaseline="middle",re.fillStyle="#fff",re.strokeStyle="#000",re.lineWidth=2,re.strokeText(At,zt.width/2,zt.height/2),re.fillText(At,zt.width/2,zt.height/2);const L=new mM(zt);return L.minFilter=ui,L.magFilter=ui,L.generateMipmaps=!1,{tex:L,canvas:zt}},xt=At=>{const{tex:zt,canvas:re}=et(At),L=200,ae=L*(re.width/re.height),te=new Po(ae,L),ee=new md({map:zt,transparent:!0,depthTest:!0,depthWrite:!1}),Vt=new Ri(te,ee);return Vt.userData={texWidth:ae,texHeight:L},Vt},bt=(At,zt,re,L)=>new rt(zt,re,L),Ut=()=>{if(O.current+=1,D.current.length>0&&O.current%R.customEvery===0)return D.current[Math.floor(Math.random()*D.current.length)];const zt=V.current,re=Math.floor(Math.random()*zt.length),L=zt[re];return L[Math.floor(Math.random()*L.length)]},$=()=>{const At=Ut(),zt=xt(At);zt.position.set((Math.random()-.5)*(N.clientWidth/2),(Math.random()-.5)*(N.clientHeight/2),R.startZ),zt.material.opacity=1,k.add(zt);const re=new rt(zt.position.x+(Math.random()-.5)*900,zt.position.y+(Math.random()-.5)*600,R.stopZ+(Math.random()-.5)*120),L=bt(zt,re.x,re.y,re.z),te=new rt().subVectors(L,zt.position).normalize().multiplyScalar(R.rapidSpeed);St.push({mesh:zt,target:L,velocity:te,state:"moving",pauseUntil:0,fadeStart:0})};_.current=setInterval($,R.spawnInterval),$();let ot=performance.now();const Dt=()=>{const At=performance.now(),zt=(At-ot)/1e3;ot=At;for(let re=St.length-1;re>=0;re--){const L=St[re],ae=L.mesh;if(L.state==="moving"&&(Math.abs(L.target.z-ae.position.z)<R.slowDistance?L.state="slowing":ae.position.add(L.velocity.clone().multiplyScalar(zt))),L.state==="slowing"&&(ae.position.lerp(L.target,1-Math.exp(-6*zt)),ae.position.distanceTo(L.target)<1&&(ae.position.copy(L.target),L.state="stopped",L.pauseUntil=At+R.visiblePause)),L.state==="stopped"&&At>=L.pauseUntil&&(L.state="fading",L.fadeStart=At),L.state==="fading"){const te=Math.min(1,(At-L.fadeStart)/R.fadeDuration);ae.material.opacity=1-te,te>=1&&(k.remove(ae),ae.material.map&&ae.material.map.dispose(),ae.geometry.dispose(),ae.material.dispose(),St.splice(re,1))}}W.render(k,_t),M.current=requestAnimationFrame(Dt)};M.current=requestAnimationFrame(Dt);const It=()=>{const At=N.clientWidth,zt=N.clientHeight;W.setSize(At,zt),_t.aspect=At/zt,_t.updateProjectionMatrix()};return window.addEventListener("resize",It),()=>{cancelAnimationFrame(M.current),clearInterval(_.current),window.removeEventListener("resize",It),St.forEach(At=>{k.remove(At.mesh),At.mesh.material.map&&At.mesh.material.map.dispose(),At.mesh.geometry.dispose(),At.mesh.material.dispose()}),W.dispose(),N.removeChild(W.domElement)}},[]);function nt(N){const W=N.trim().slice(0,R.customMaxChars);W&&z(k=>{if(k.length<R.customMaxSize)return[...k,W];const _t=1+j.current%4;return V.current[_t]=[...k],B(V.current.map(St=>[...St])),j.current+=1,[W]})}function lt(N){N.stopPropagation(),N.key==="Enter"&&(nt(w),G(""))}function mt(N){G(N.target.value.slice(0,R.customMaxChars))}function ft(N){N.stopPropagation()}return $i.jsxs("div",{style:{position:"relative",width:"100%",height:"100vh",background:"black"},children:[$i.jsx("div",{ref:C,style:{width:"100%",height:"100%"}}),$i.jsxs("div",{onMouseDown:ft,style:{position:"absolute",left:12,top:12,zIndex:20,color:"white",fontFamily:"sans-serif"},children:[$i.jsx("input",{value:w,onChange:mt,onKeyDown:lt,placeholder:`Type a word (max ${R.customMaxChars} chars) and press Enter`,style:{padding:8,borderRadius:6,border:"1px solid rgba(255,255,255,0.18)",background:"rgba(0,0,0,0.4)",color:"white"}}),$i.jsxs("div",{style:{fontSize:12,opacity:.8,marginTop:6},children:["Custom bucket used every ",R.customEvery,"th spawn. Next overwrite: #",1+j.current%4]}),$i.jsxs("div",{style:{marginTop:6,fontSize:13},children:["Custom bucket (",I.length,"/",R.customMaxSize,"): ",I.join(", ")||"empty"]})]})]})}function sA(){return $i.jsx(rA,{})}ZS.createRoot(document.getElementById("root")).render($i.jsx(HS.StrictMode,{children:$i.jsx(sA,{})}));
