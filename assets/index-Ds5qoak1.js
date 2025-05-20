(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=n(a);fetch(a.href,c)}})();function I1(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var fu={exports:{}},Co={},hu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function F1(){if(vp)return ft;vp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function y(U,ne,Ue){this.props=U,this.context=ne,this.refs=C,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=y.prototype;function I(U,ne,Ue){this.props=U,this.context=ne,this.refs=C,this.updater=Ue||S}var D=I.prototype=new g;D.constructor=I,w(D,y.prototype),D.isPureReactComponent=!0;var b=Array.isArray,W=Object.prototype.hasOwnProperty,H={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function X(U,ne,Ue){var Q,pe={},Ee=null,xe=null;if(ne!=null)for(Q in ne.ref!==void 0&&(xe=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)W.call(ne,Q)&&!F.hasOwnProperty(Q)&&(pe[Q]=ne[Q]);var we=arguments.length-2;if(we===1)pe.children=Ue;else if(1<we){for(var Xe=Array(we),Ge=0;Ge<we;Ge++)Xe[Ge]=arguments[Ge+2];pe.children=Xe}if(U&&U.defaultProps)for(Q in we=U.defaultProps,we)pe[Q]===void 0&&(pe[Q]=we[Q]);return{$$typeof:s,type:U,key:Ee,ref:xe,props:pe,_owner:H.current}}function R(U,ne){return{$$typeof:s,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function B(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ue){return ne[Ue]})}var ae=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?B(""+U.key):ne.toString(36)}function de(U,ne,Ue,Q,pe){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var xe=!1;if(U===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(U.$$typeof){case s:case e:xe=!0}}if(xe)return xe=U,pe=pe(xe),U=Q===""?"."+te(xe,0):Q,b(pe)?(Ue="",U!=null&&(Ue=U.replace(ae,"$&/")+"/"),de(pe,ne,Ue,"",function(Ge){return Ge})):pe!=null&&(A(pe)&&(pe=R(pe,Ue+(!pe.key||xe&&xe.key===pe.key?"":(""+pe.key).replace(ae,"$&/")+"/")+U)),ne.push(pe)),1;if(xe=0,Q=Q===""?".":Q+":",b(U))for(var we=0;we<U.length;we++){Ee=U[we];var Xe=Q+te(Ee,we);xe+=de(Ee,ne,Ue,Xe,pe)}else if(Xe=x(U),typeof Xe=="function")for(U=Xe.call(U),we=0;!(Ee=U.next()).done;)Ee=Ee.value,Xe=Q+te(Ee,we++),xe+=de(Ee,ne,Ue,Xe,pe);else if(Ee==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return xe}function me(U,ne,Ue){if(U==null)return U;var Q=[],pe=0;return de(U,Q,"","",function(Ee){return ne.call(Ue,Ee,pe++)}),Q}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ue){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ue)},function(Ue){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ue)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},k={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:k,ReactCurrentOwner:H};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:me,forEach:function(U,ne,Ue){me(U,function(){ne.apply(this,arguments)},Ue)},count:function(U){var ne=0;return me(U,function(){ne++}),ne},toArray:function(U){return me(U,function(ne){return ne})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=y,ft.Fragment=n,ft.Profiler=a,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=p,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(U,ne,Ue){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Q=w({},U.props),pe=U.key,Ee=U.ref,xe=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,xe=H.current),ne.key!==void 0&&(pe=""+ne.key),U.type&&U.type.defaultProps)var we=U.type.defaultProps;for(Xe in ne)W.call(ne,Xe)&&!F.hasOwnProperty(Xe)&&(Q[Xe]=ne[Xe]===void 0&&we!==void 0?we[Xe]:ne[Xe])}var Xe=arguments.length-2;if(Xe===1)Q.children=Ue;else if(1<Xe){we=Array(Xe);for(var Ge=0;Ge<Xe;Ge++)we[Ge]=arguments[Ge+2];Q.children=we}return{$$typeof:s,type:U.type,key:pe,ref:Ee,props:Q,_owner:xe}},ft.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:c,_context:U},U.Consumer=U},ft.createElement=X,ft.createFactory=function(U){var ne=X.bind(null,U);return ne.type=U,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:f,render:U}},ft.isValidElement=A,ft.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:oe}},ft.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ft.startTransition=function(U){var ne=k.transition;k.transition={};try{U()}finally{k.transition=ne}},ft.unstable_act=se,ft.useCallback=function(U,ne){return ce.current.useCallback(U,ne)},ft.useContext=function(U){return ce.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},ft.useEffect=function(U,ne){return ce.current.useEffect(U,ne)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(U,ne,Ue){return ce.current.useImperativeHandle(U,ne,Ue)},ft.useInsertionEffect=function(U,ne){return ce.current.useInsertionEffect(U,ne)},ft.useLayoutEffect=function(U,ne){return ce.current.useLayoutEffect(U,ne)},ft.useMemo=function(U,ne){return ce.current.useMemo(U,ne)},ft.useReducer=function(U,ne,Ue){return ce.current.useReducer(U,ne,Ue)},ft.useRef=function(U){return ce.current.useRef(U)},ft.useState=function(U){return ce.current.useState(U)},ft.useSyncExternalStore=function(U,ne,Ue){return ce.current.useSyncExternalStore(U,ne,Ue)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var _p;function Id(){return _p||(_p=1,hu.exports=F1()),hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function O1(){if(xp)return Co;xp=1;var s=Id(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,_={},x=null,S=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:x,ref:S,props:_,_owner:a.current}}return Co.Fragment=n,Co.jsx=d,Co.jsxs=d,Co}var yp;function z1(){return yp||(yp=1,fu.exports=O1()),fu.exports}var N=z1(),Oi=Id();const gr=I1(Oi);var Ka={},pu={exports:{}},Pn={},mu={exports:{}},gu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function k1(){return Sp||(Sp=1,function(s){function e(k,le){var se=k.length;k.push(le);e:for(;0<se;){var U=se-1>>>1,ne=k[U];if(0<a(ne,le))k[U]=le,k[se]=ne,se=U;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var le=k[0],se=k.pop();if(se!==le){k[0]=se;e:for(var U=0,ne=k.length,Ue=ne>>>1;U<Ue;){var Q=2*(U+1)-1,pe=k[Q],Ee=Q+1,xe=k[Ee];if(0>a(pe,se))Ee<ne&&0>a(xe,pe)?(k[U]=xe,k[Ee]=se,U=Ee):(k[U]=pe,k[Q]=se,U=Q);else if(Ee<ne&&0>a(xe,se))k[U]=xe,k[Ee]=se,U=Ee;else break e}}return le}function a(k,le){var se=k.sortIndex-le.sortIndex;return se!==0?se:k.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,_=null,x=3,S=!1,w=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(k){for(var le=n(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=k)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=n(m)}}function b(k){if(C=!1,D(k),!w)if(n(p)!==null)w=!0,oe(W);else{var le=n(m);le!==null&&ce(b,le.startTime-k)}}function W(k,le){w=!1,C&&(C=!1,g(X),X=-1),S=!0;var se=x;try{for(D(le),_=n(p);_!==null&&(!(_.expirationTime>le)||k&&!B());){var U=_.callback;if(typeof U=="function"){_.callback=null,x=_.priorityLevel;var ne=U(_.expirationTime<=le);le=s.unstable_now(),typeof ne=="function"?_.callback=ne:_===n(p)&&r(p),D(le)}else r(p);_=n(p)}if(_!==null)var Ue=!0;else{var Q=n(m);Q!==null&&ce(b,Q.startTime-le),Ue=!1}return Ue}finally{_=null,x=se,S=!1}}var H=!1,F=null,X=-1,R=5,A=-1;function B(){return!(s.unstable_now()-A<R)}function ae(){if(F!==null){var k=s.unstable_now();A=k;var le=!0;try{le=F(!0,k)}finally{le?te():(H=!1,F=null)}}else H=!1}var te;if(typeof I=="function")te=function(){I(ae)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,me=de.port2;de.port1.onmessage=ae,te=function(){me.postMessage(null)}}else te=function(){y(ae,0)};function oe(k){F=k,H||(H=!0,te())}function ce(k,le){X=y(function(){k(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(k){k.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,oe(W))},s.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<k?Math.floor(1e3/k):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(k){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var se=x;x=le;try{return k()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(k,le){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=x;x=k;try{return le()}finally{x=se}},s.unstable_scheduleCallback=function(k,le,se){var U=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,k={id:v++,callback:le,priorityLevel:k,startTime:se,expirationTime:ne,sortIndex:-1},se>U?(k.sortIndex=se,e(m,k),n(p)===null&&k===n(m)&&(C?(g(X),X=-1):C=!0,ce(b,se-U))):(k.sortIndex=ne,e(p,k),w||S||(w=!0,oe(W))),k},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(k){var le=x;return function(){var se=x;x=le;try{return k.apply(this,arguments)}finally{x=se}}}}(gu)),gu}var Mp;function B1(){return Mp||(Mp=1,mu.exports=k1()),mu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ep;function H1(){if(Ep)return Pn;Ep=1;var s=Id(),e=B1();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function x(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,o,l,u,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=u,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);y[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);y[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function D(t,i,o,l){var u=y.hasOwnProperty(i)?y[i]:null;(u!==null?u.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,u,l)&&(o=null),l||u===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):u.mustUseProperty?t[u.propertyName]=o===null?u.type===3?!1:"":o:(i=u.attributeName,l=u.attributeNamespace,o===null?t.removeAttribute(i):(u=u.type,o=u===3||u===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),H=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),B=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),k=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,U;function ne(t){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var u=J.stack.split(`
`),h=l.stack.split(`
`),M=u.length-1,L=h.length-1;1<=M&&0<=L&&u[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(u[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||u[M]!==h[L]){var O=`
`+u[M].replace(" at new "," at ");return t.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",t.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?ne(t):""}function pe(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case H:return"Portal";case R:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case de:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ae:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case me:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(t){var i=Xe(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return u.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Pt(t){t._valueTracker||(t._valueTracker=Ge(t))}function Lt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Xe(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function ct(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function z(t,i){var o=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function _n(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&D(t,"checked",i,!1)}function ut(t,i){ht(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,o):i.hasOwnProperty("defaultValue")&&wt(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ye(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function wt(t,i,o){(i!=="number"||ct(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var We=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var u=0;u<o.length;u++)i["$"+o[u]]=!0;for(o=0;o<t.length;o++)u=i.hasOwnProperty("$"+t[o].value),t[o].selected!==u&&(t[o].selected=u),u&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,u=0;u<t.length;u++){if(t[u].value===o){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}i!==null||t[u].disabled||(i=t[u])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(We(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function fe(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Ke=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,u){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,u)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function $e(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(ye).forEach(function(t){Fe.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ye[i]=ye[t]})});function et(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ye.hasOwnProperty(t)&&ye[t]?(""+i).trim():i+"px"}function tt(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,u=et(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,u):t[o]=u}}var Oe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(Oe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function G(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ce=null,re=null,he=null;function Le(t){if(t=fo(t)){if(typeof Ce!="function")throw Error(n(280));var i=t.stateNode;i&&(i=da(i),Ce(t.stateNode,t.type,i))}}function Pe(t){re?he?he.push(t):he=[t]:re=t}function st(){if(re){var t=re,i=he;if(he=re=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Nt(t,i){return t(i)}function qt(){}var _t=!1;function Tn(t,i,o){if(_t)return t(i,o);_t=!0;try{return Nt(t,i,o)}finally{_t=!1,(re!==null||he!==null)&&(qt(),st())}}function xn(t,i){var o=t.stateNode;if(o===null)return null;var l=da(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var Qr=!1;if(f)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Qr=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Qr=!1}function vi(t,i,o,l,u,h,M,L,O){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ve){this.onError(ve)}}var _i=!1,Sr=null,Mr=!1,Vi=null,Go={onError:function(t){_i=!0,Sr=t}};function Jr(t,i,o,l,u,h,M,L,O){_i=!1,Sr=null,vi.apply(Go,arguments)}function Wo(t,i,o,l,u,h,M,L,O){if(Jr.apply(this,arguments),_i){if(_i){var J=Sr;_i=!1,Sr=null}else throw Error(n(198));Mr||(Mr=!0,Vi=J)}}function ai(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,i.flags&4098&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function jo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Xo(t){if(ai(t)!==t)throw Error(n(188))}function Il(t){var i=t.alternate;if(!i){if(i=ai(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var u=o.return;if(u===null)break;var h=u.alternate;if(h===null){if(l=u.return,l!==null){o=l;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===o)return Xo(u),t;if(h===l)return Xo(u),i;h=h.sibling}throw Error(n(188))}if(o.return!==l.return)o=u,l=h;else{for(var M=!1,L=u.child;L;){if(L===o){M=!0,o=u,l=h;break}if(L===l){M=!0,l=u,o=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===o){M=!0,o=h,l=u;break}if(L===l){M=!0,l=h,o=u;break}L=L.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Yo(t){return t=Il(t),t!==null?qo(t):null}function qo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=qo(t);if(i!==null)return i;t=t.sibling}return null}var $o=e.unstable_scheduleCallback,T=e.unstable_cancelCallback,j=e.unstable_shouldYield,ee=e.unstable_requestPaint,$=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,Me=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,ze=e.unstable_LowPriority,nt=e.unstable_IdlePriority,Je=null,Be=null;function mt(t){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(Je,t,void 0,(t.current.flags&128)===128)}catch{}}var ot=Math.clz32?Math.clz32:vt,Bt=Math.log,Ft=Math.LN2;function vt(t){return t>>>=0,t===0?32:31-(Bt(t)/Ft|0)|0}var qe=64,Ht=4194304;function pt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function cn(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,u=t.suspendedLanes,h=t.pingedLanes,M=o&268435455;if(M!==0){var L=M&~u;L!==0?l=pt(L):(h&=M,h!==0&&(l=pt(h)))}else M=o&~u,M!==0?l=pt(M):h!==0&&(l=pt(h));if(l===0)return 0;if(i!==0&&i!==l&&!(i&u)&&(u=l&-l,h=i&-i,u>=h||u===16&&(h&4194240)!==0))return i;if(l&4&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-ot(i),u=1<<o,l|=t[o],i&=~u;return l}function Gi(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-ot(h),L=1<<M,O=u[M];O===-1?(!(L&o)||L&l)&&(u[M]=Gi(L,i)):O<=i&&(t.expiredLanes|=L),h&=~L}}function xi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function bt(){var t=qe;return qe<<=1,!(qe&4194240)&&(qe=64),t}function un(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Jt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-ot(i),t[i]=o}function on(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var u=31-ot(o),h=1<<u;i[u]=0,l[u]=-1,t[u]=-1,o&=~h}}function en(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-ot(o),u=1<<l;u&i|t[l]&i&&(t[l]|=i),o&=~u}}var xt=0;function li(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var $d,Fl,Kd,Zd,Qd,Ol=!1,Ko=[],Wi=null,ji=null,Xi=null,$s=new Map,Ks=new Map,Yi=[],i0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(t,i){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":$s.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ks.delete(i.pointerId)}}function Zs(t,i,o,l,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:h,targetContainers:[u]},i!==null&&(i=fo(i),i!==null&&Fl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),t)}function r0(t,i,o,l,u){switch(i){case"focusin":return Wi=Zs(Wi,t,i,o,l,u),!0;case"dragenter":return ji=Zs(ji,t,i,o,l,u),!0;case"mouseover":return Xi=Zs(Xi,t,i,o,l,u),!0;case"pointerover":var h=u.pointerId;return $s.set(h,Zs($s.get(h)||null,t,i,o,l,u)),!0;case"gotpointercapture":return h=u.pointerId,Ks.set(h,Zs(Ks.get(h)||null,t,i,o,l,u)),!0}return!1}function ef(t){var i=Er(t.target);if(i!==null){var o=ai(i);if(o!==null){if(i=o.tag,i===13){if(i=jo(o),i!==null){t.blockedOn=i,Qd(t.priority,function(){Kd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=kl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Tt=l,o.target.dispatchEvent(l),Tt=null}else return i=fo(o),i!==null&&Fl(i),t.blockedOn=o,!1;i.shift()}return!0}function tf(t,i,o){Zo(t)&&o.delete(i)}function s0(){Ol=!1,Wi!==null&&Zo(Wi)&&(Wi=null),ji!==null&&Zo(ji)&&(ji=null),Xi!==null&&Zo(Xi)&&(Xi=null),$s.forEach(tf),Ks.forEach(tf)}function Qs(t,i){t.blockedOn===i&&(t.blockedOn=null,Ol||(Ol=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,s0)))}function Js(t){function i(u){return Qs(u,t)}if(0<Ko.length){Qs(Ko[0],t);for(var o=1;o<Ko.length;o++){var l=Ko[o];l.blockedOn===t&&(l.blockedOn=null)}}for(Wi!==null&&Qs(Wi,t),ji!==null&&Qs(ji,t),Xi!==null&&Qs(Xi,t),$s.forEach(i),Ks.forEach(i),o=0;o<Yi.length;o++)l=Yi[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(o=Yi[0],o.blockedOn===null);)ef(o),o.blockedOn===null&&Yi.shift()}var es=b.ReactCurrentBatchConfig,Qo=!0;function o0(t,i,o,l){var u=xt,h=es.transition;es.transition=null;try{xt=1,zl(t,i,o,l)}finally{xt=u,es.transition=h}}function a0(t,i,o,l){var u=xt,h=es.transition;es.transition=null;try{xt=4,zl(t,i,o,l)}finally{xt=u,es.transition=h}}function zl(t,i,o,l){if(Qo){var u=kl(t,i,o,l);if(u===null)nc(t,i,l,Jo,o),Jd(t,l);else if(r0(u,t,i,o,l))l.stopPropagation();else if(Jd(t,l),i&4&&-1<i0.indexOf(t)){for(;u!==null;){var h=fo(u);if(h!==null&&$d(h),h=kl(t,i,o,l),h===null&&nc(t,i,l,Jo,o),h===u)break;u=h}u!==null&&l.stopPropagation()}else nc(t,i,l,null,o)}}var Jo=null;function kl(t,i,o,l){if(Jo=null,t=G(l),t=Er(t),t!==null)if(i=ai(t),i===null)t=null;else if(o=i.tag,o===13){if(t=jo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Jo=t,null}function nf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case Me:return 1;case Re:return 4;case De:case ze:return 16;case nt:return 536870912;default:return 16}default:return 16}}var qi=null,Bl=null,ea=null;function rf(){if(ea)return ea;var t,i=Bl,o=i.length,l,u="value"in qi?qi.value:qi.textContent,h=u.length;for(t=0;t<o&&i[t]===u[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===u[h-l];l++);return ea=u.slice(t,1<l?1-l:void 0)}function ta(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function sf(){return!1}function Nn(t){function i(o,l,u,h,M){this._reactName=o,this._targetInst=u,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(o=t[L],this[L]=o?o(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?na:sf,this.isPropagationStopped=sf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),i}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hl=Nn(ts),eo=se({},ts,{view:0,detail:0}),l0=Nn(eo),Vl,Gl,to,ia=se({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Vl=t.screenX-to.screenX,Gl=t.screenY-to.screenY):Gl=Vl=0,to=t),Vl)},movementY:function(t){return"movementY"in t?t.movementY:Gl}}),of=Nn(ia),c0=se({},ia,{dataTransfer:0}),u0=Nn(c0),d0=se({},eo,{relatedTarget:0}),Wl=Nn(d0),f0=se({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),h0=Nn(f0),p0=se({},ts,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),m0=Nn(p0),g0=se({},ts,{data:0}),af=Nn(g0),v0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=x0[t])?!!i[t]:!1}function jl(){return y0}var S0=se({},eo,{key:function(t){if(t.key){var i=v0[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jl,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),M0=Nn(S0),E0=se({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lf=Nn(E0),T0=se({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jl}),w0=Nn(T0),A0=se({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),C0=Nn(A0),R0=se({},ia,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=Nn(R0),P0=[9,13,27,32],Xl=f&&"CompositionEvent"in window,no=null;f&&"documentMode"in document&&(no=document.documentMode);var L0=f&&"TextEvent"in window&&!no,cf=f&&(!Xl||no&&8<no&&11>=no),uf=" ",df=!1;function ff(t,i){switch(t){case"keyup":return P0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function D0(t,i){switch(t){case"compositionend":return hf(i);case"keypress":return i.which!==32?null:(df=!0,uf);case"textInput":return t=i.data,t===uf&&df?null:t;default:return null}}function N0(t,i){if(ns)return t==="compositionend"||!Xl&&ff(t,i)?(t=rf(),ea=Bl=qi=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return cf&&i.locale!=="ko"?null:i.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!U0[t.type]:i==="textarea"}function mf(t,i,o,l){Pe(l),i=la(i,"onChange"),0<i.length&&(o=new Hl("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var io=null,ro=null;function I0(t){Nf(t,0)}function ra(t){var i=as(t);if(Lt(i))return t}function F0(t,i){if(t==="change")return i}var gf=!1;if(f){var Yl;if(f){var ql="oninput"in document;if(!ql){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),ql=typeof vf.oninput=="function"}Yl=ql}else Yl=!1;gf=Yl&&(!document.documentMode||9<document.documentMode)}function _f(){io&&(io.detachEvent("onpropertychange",xf),ro=io=null)}function xf(t){if(t.propertyName==="value"&&ra(ro)){var i=[];mf(i,ro,t,G(t)),Tn(I0,i)}}function O0(t,i,o){t==="focusin"?(_f(),io=i,ro=o,io.attachEvent("onpropertychange",xf)):t==="focusout"&&_f()}function z0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ra(ro)}function k0(t,i){if(t==="click")return ra(i)}function B0(t,i){if(t==="input"||t==="change")return ra(i)}function H0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:H0;function so(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var u=o[l];if(!p.call(i,u)||!$n(t[u],i[u]))return!1}return!0}function yf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sf(t,i){var o=yf(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=yf(o)}}function Mf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Mf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ef(){for(var t=window,i=ct();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=ct(t.document)}return i}function $l(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function V0(t){var i=Ef(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&Mf(o.ownerDocument.documentElement,o)){if(l!==null&&$l(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var u=o.textContent.length,h=Math.min(l.start,u);l=l.end===void 0?h:Math.min(l.end,u),!t.extend&&h>l&&(u=l,l=h,h=u),u=Sf(o,h);var M=Sf(o,l);u&&M&&(t.rangeCount!==1||t.anchorNode!==u.node||t.anchorOffset!==u.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(u.node,u.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var G0=f&&"documentMode"in document&&11>=document.documentMode,is=null,Kl=null,oo=null,Zl=!1;function Tf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Zl||is==null||is!==ct(l)||(l=is,"selectionStart"in l&&$l(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),oo&&so(oo,l)||(oo=l,l=la(Kl,"onSelect"),0<l.length&&(i=new Hl("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=is)))}function sa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var rs={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},Ql={},wf={};f&&(wf=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function oa(t){if(Ql[t])return Ql[t];if(!rs[t])return t;var i=rs[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in wf)return Ql[t]=i[o];return t}var Af=oa("animationend"),Cf=oa("animationiteration"),Rf=oa("animationstart"),bf=oa("transitionend"),Pf=new Map,Lf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,i){Pf.set(t,i),c(i,[t])}for(var Jl=0;Jl<Lf.length;Jl++){var ec=Lf[Jl],W0=ec.toLowerCase(),j0=ec[0].toUpperCase()+ec.slice(1);$i(W0,"on"+j0)}$i(Af,"onAnimationEnd"),$i(Cf,"onAnimationIteration"),$i(Rf,"onAnimationStart"),$i("dblclick","onDoubleClick"),$i("focusin","onFocus"),$i("focusout","onBlur"),$i(bf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Df(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,Wo(l,i,void 0,t),t.currentTarget=null}function Nf(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],u=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],O=L.instance,J=L.currentTarget;if(L=L.listener,O!==h&&u.isPropagationStopped())break e;Df(u,L,J),h=O}else for(M=0;M<l.length;M++){if(L=l[M],O=L.instance,J=L.currentTarget,L=L.listener,O!==h&&u.isPropagationStopped())break e;Df(u,L,J),h=O}}}if(Mr)throw t=Vi,Mr=!1,Vi=null,t}function Ut(t,i){var o=i[lc];o===void 0&&(o=i[lc]=new Set);var l=t+"__bubble";o.has(l)||(Uf(i,t,2,!1),o.add(l))}function tc(t,i,o){var l=0;i&&(l|=4),Uf(o,t,l,i)}var aa="_reactListening"+Math.random().toString(36).slice(2);function lo(t){if(!t[aa]){t[aa]=!0,r.forEach(function(o){o!=="selectionchange"&&(X0.has(o)||tc(o,!1,t),tc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[aa]||(i[aa]=!0,tc("selectionchange",!1,i))}}function Uf(t,i,o,l){switch(nf(i)){case 1:var u=o0;break;case 4:u=a0;break;default:u=zl}o=u.bind(null,i,o,t),u=void 0,!Qr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(i,o,{capture:!0,passive:u}):t.addEventListener(i,o,!0):u!==void 0?t.addEventListener(i,o,{passive:u}):t.addEventListener(i,o,!1)}function nc(t,i,o,l,u){var h=l;if(!(i&1)&&!(i&2)&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===u||L.nodeType===8&&L.parentNode===u)break;if(M===4)for(M=l.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===u||O.nodeType===8&&O.parentNode===u))return;M=M.return}for(;L!==null;){if(M=Er(L),M===null)return;if(O=M.tag,O===5||O===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Tn(function(){var J=h,ve=G(o),Se=[];e:{var ge=Pf.get(t);if(ge!==void 0){var Ne=Hl,ke=t;switch(t){case"keypress":if(ta(o)===0)break e;case"keydown":case"keyup":Ne=M0;break;case"focusin":ke="focus",Ne=Wl;break;case"focusout":ke="blur",Ne=Wl;break;case"beforeblur":case"afterblur":Ne=Wl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=u0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=w0;break;case Af:case Cf:case Rf:Ne=h0;break;case bf:Ne=C0;break;case"scroll":Ne=l0;break;case"wheel":Ne=b0;break;case"copy":case"cut":case"paste":Ne=m0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=lf}var He=(i&4)!==0,Gt=!He&&t==="scroll",q=He?ge!==null?ge+"Capture":null:ge;He=[];for(var V=J,K;V!==null;){K=V;var Te=K.stateNode;if(K.tag===5&&Te!==null&&(K=Te,q!==null&&(Te=xn(V,q),Te!=null&&He.push(co(V,Te,K)))),Gt)break;V=V.return}0<He.length&&(ge=new Ne(ge,ke,null,o,ve),Se.push({event:ge,listeners:He}))}}if(!(i&7)){e:{if(ge=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",ge&&o!==Tt&&(ke=o.relatedTarget||o.fromElement)&&(Er(ke)||ke[yi]))break e;if((Ne||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(ke=o.relatedTarget||o.toElement,Ne=J,ke=ke?Er(ke):null,ke!==null&&(Gt=ai(ke),ke!==Gt||ke.tag!==5&&ke.tag!==6)&&(ke=null)):(Ne=null,ke=J),Ne!==ke)){if(He=of,Te="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=lf,Te="onPointerLeave",q="onPointerEnter",V="pointer"),Gt=Ne==null?ge:as(Ne),K=ke==null?ge:as(ke),ge=new He(Te,V+"leave",Ne,o,ve),ge.target=Gt,ge.relatedTarget=K,Te=null,Er(ve)===J&&(He=new He(q,V+"enter",ke,o,ve),He.target=K,He.relatedTarget=Gt,Te=He),Gt=Te,Ne&&ke)t:{for(He=Ne,q=ke,V=0,K=He;K;K=ss(K))V++;for(K=0,Te=q;Te;Te=ss(Te))K++;for(;0<V-K;)He=ss(He),V--;for(;0<K-V;)q=ss(q),K--;for(;V--;){if(He===q||q!==null&&He===q.alternate)break t;He=ss(He),q=ss(q)}He=null}else He=null;Ne!==null&&If(Se,ge,Ne,He,!1),ke!==null&&Gt!==null&&If(Se,Gt,ke,He,!0)}}e:{if(ge=J?as(J):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var je=F0;else if(pf(ge))if(gf)je=B0;else{je=z0;var Ze=O0}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=k0);if(je&&(je=je(t,J))){mf(Se,je,o,ve);break e}Ze&&Ze(t,ge,J),t==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ze=J?as(J):window,t){case"focusin":(pf(Ze)||Ze.contentEditable==="true")&&(is=Ze,Kl=J,oo=null);break;case"focusout":oo=Kl=is=null;break;case"mousedown":Zl=!0;break;case"contextmenu":case"mouseup":case"dragend":Zl=!1,Tf(Se,o,ve);break;case"selectionchange":if(G0)break;case"keydown":case"keyup":Tf(Se,o,ve)}var Qe;if(Xl)e:{switch(t){case"compositionstart":var it="onCompositionStart";break e;case"compositionend":it="onCompositionEnd";break e;case"compositionupdate":it="onCompositionUpdate";break e}it=void 0}else ns?ff(t,o)&&(it="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(it="onCompositionStart");it&&(cf&&o.locale!=="ko"&&(ns||it!=="onCompositionStart"?it==="onCompositionEnd"&&ns&&(Qe=rf()):(qi=ve,Bl="value"in qi?qi.value:qi.textContent,ns=!0)),Ze=la(J,it),0<Ze.length&&(it=new af(it,t,null,o,ve),Se.push({event:it,listeners:Ze}),Qe?it.data=Qe:(Qe=hf(o),Qe!==null&&(it.data=Qe)))),(Qe=L0?D0(t,o):N0(t,o))&&(J=la(J,"onBeforeInput"),0<J.length&&(ve=new af("onBeforeInput","beforeinput",null,o,ve),Se.push({event:ve,listeners:J}),ve.data=Qe))}Nf(Se,i)})}function co(t,i,o){return{instance:t,listener:i,currentTarget:o}}function la(t,i){for(var o=i+"Capture",l=[];t!==null;){var u=t,h=u.stateNode;u.tag===5&&h!==null&&(u=h,h=xn(t,o),h!=null&&l.unshift(co(t,h,u)),h=xn(t,i),h!=null&&l.push(co(t,h,u))),t=t.return}return l}function ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function If(t,i,o,l,u){for(var h=i._reactName,M=[];o!==null&&o!==l;){var L=o,O=L.alternate,J=L.stateNode;if(O!==null&&O===l)break;L.tag===5&&J!==null&&(L=J,u?(O=xn(o,h),O!=null&&M.unshift(co(o,O,L))):u||(O=xn(o,h),O!=null&&M.push(co(o,O,L)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var Y0=/\r\n?/g,q0=/\u0000|\uFFFD/g;function Ff(t){return(typeof t=="string"?t:""+t).replace(Y0,`
`).replace(q0,"")}function ca(t,i,o){if(i=Ff(i),Ff(t)!==i&&o)throw Error(n(425))}function ua(){}var ic=null,rc=null;function sc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var oc=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,Of=typeof Promise=="function"?Promise:void 0,K0=typeof queueMicrotask=="function"?queueMicrotask:typeof Of<"u"?function(t){return Of.resolve(null).then(t).catch(Z0)}:oc;function Z0(t){setTimeout(function(){throw t})}function ac(t,i){var o=i,l=0;do{var u=o.nextSibling;if(t.removeChild(o),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(l===0){t.removeChild(u),Js(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=u}while(o);Js(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function zf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var os=Math.random().toString(36).slice(2),ci="__reactFiber$"+os,uo="__reactProps$"+os,yi="__reactContainer$"+os,lc="__reactEvents$"+os,Q0="__reactListeners$"+os,J0="__reactHandles$"+os;function Er(t){var i=t[ci];if(i)return i;for(var o=t.parentNode;o;){if(i=o[yi]||o[ci]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=zf(t);t!==null;){if(o=t[ci])return o;t=zf(t)}return i}t=o,o=t.parentNode}return null}function fo(t){return t=t[ci]||t[yi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function da(t){return t[uo]||null}var cc=[],ls=-1;function Zi(t){return{current:t}}function It(t){0>ls||(t.current=cc[ls],cc[ls]=null,ls--)}function Dt(t,i){ls++,cc[ls]=t.current,t.current=i}var Qi={},dn=Zi(Qi),wn=Zi(!1),Tr=Qi;function cs(t,i){var o=t.type.contextTypes;if(!o)return Qi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var u={},h;for(h in o)u[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=u),u}function An(t){return t=t.childContextTypes,t!=null}function fa(){It(wn),It(dn)}function kf(t,i,o){if(dn.current!==Qi)throw Error(n(168));Dt(dn,i),Dt(wn,o)}function Bf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var u in l)if(!(u in i))throw Error(n(108,xe(t)||"Unknown",u));return se({},o,l)}function ha(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Qi,Tr=dn.current,Dt(dn,t),Dt(wn,wn.current),!0}function Hf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Bf(t,i,Tr),l.__reactInternalMemoizedMergedChildContext=t,It(wn),It(dn),Dt(dn,t)):It(wn),Dt(wn,o)}var Si=null,pa=!1,uc=!1;function Vf(t){Si===null?Si=[t]:Si.push(t)}function e1(t){pa=!0,Vf(t)}function Ji(){if(!uc&&Si!==null){uc=!0;var t=0,i=xt;try{var o=Si;for(xt=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Si=null,pa=!1}catch(u){throw Si!==null&&(Si=Si.slice(t+1)),$o(Me,Ji),u}finally{xt=i,uc=!1}}return null}var us=[],ds=0,ma=null,ga=0,Bn=[],Hn=0,wr=null,Mi=1,Ei="";function Ar(t,i){us[ds++]=ga,us[ds++]=ma,ma=t,ga=i}function Gf(t,i,o){Bn[Hn++]=Mi,Bn[Hn++]=Ei,Bn[Hn++]=wr,wr=t;var l=Mi;t=Ei;var u=32-ot(l)-1;l&=~(1<<u),o+=1;var h=32-ot(i)+u;if(30<h){var M=u-u%5;h=(l&(1<<M)-1).toString(32),l>>=M,u-=M,Mi=1<<32-ot(i)+u|o<<u|l,Ei=h+t}else Mi=1<<h|o<<u|l,Ei=t}function dc(t){t.return!==null&&(Ar(t,1),Gf(t,1,0))}function fc(t){for(;t===ma;)ma=us[--ds],us[ds]=null,ga=us[--ds],us[ds]=null;for(;t===wr;)wr=Bn[--Hn],Bn[Hn]=null,Ei=Bn[--Hn],Bn[Hn]=null,Mi=Bn[--Hn],Bn[Hn]=null}var Un=null,In=null,Ot=!1,Kn=null;function Wf(t,i){var o=jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function jf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Un=t,In=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Un=t,In=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=wr!==null?{id:Mi,overflow:Ei}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=jn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,Un=t,In=null,!0):!1;default:return!1}}function hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pc(t){if(Ot){var i=In;if(i){var o=i;if(!jf(t,i)){if(hc(t))throw Error(n(418));i=Ki(o.nextSibling);var l=Un;i&&jf(t,i)?Wf(l,o):(t.flags=t.flags&-4097|2,Ot=!1,Un=t)}}else{if(hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ot=!1,Un=t}}}function Xf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function va(t){if(t!==Un)return!1;if(!Ot)return Xf(t),Ot=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!sc(t.type,t.memoizedProps)),i&&(i=In)){if(hc(t))throw Yf(),Error(n(418));for(;i;)Wf(t,i),i=Ki(i.nextSibling)}if(Xf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){In=Ki(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}In=null}}else In=Un?Ki(t.stateNode.nextSibling):null;return!0}function Yf(){for(var t=In;t;)t=Ki(t.nextSibling)}function fs(){In=Un=null,Ot=!1}function mc(t){Kn===null?Kn=[t]:Kn.push(t)}var t1=b.ReactCurrentBatchConfig;function ho(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var u=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=u.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function _a(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function qf(t){var i=t._init;return i(t._payload)}function $f(t){function i(q,V){if(t){var K=q.deletions;K===null?(q.deletions=[V],q.flags|=16):K.push(V)}}function o(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function u(q,V){return q=ar(q,V),q.index=0,q.sibling=null,q}function h(q,V,K){return q.index=K,t?(K=q.alternate,K!==null?(K=K.index,K<V?(q.flags|=2,V):K):(q.flags|=2,V)):(q.flags|=1048576,V)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function L(q,V,K,Te){return V===null||V.tag!==6?(V=ou(K,q.mode,Te),V.return=q,V):(V=u(V,K),V.return=q,V)}function O(q,V,K,Te){var je=K.type;return je===F?ve(q,V,K.props.children,Te,K.key):V!==null&&(V.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&qf(je)===V.type)?(Te=u(V,K.props),Te.ref=ho(q,V,K),Te.return=q,Te):(Te=Va(K.type,K.key,K.props,null,q.mode,Te),Te.ref=ho(q,V,K),Te.return=q,Te)}function J(q,V,K,Te){return V===null||V.tag!==4||V.stateNode.containerInfo!==K.containerInfo||V.stateNode.implementation!==K.implementation?(V=au(K,q.mode,Te),V.return=q,V):(V=u(V,K.children||[]),V.return=q,V)}function ve(q,V,K,Te,je){return V===null||V.tag!==7?(V=Ur(K,q.mode,Te,je),V.return=q,V):(V=u(V,K),V.return=q,V)}function Se(q,V,K){if(typeof V=="string"&&V!==""||typeof V=="number")return V=ou(""+V,q.mode,K),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case W:return K=Va(V.type,V.key,V.props,null,q.mode,K),K.ref=ho(q,null,V),K.return=q,K;case H:return V=au(V,q.mode,K),V.return=q,V;case oe:var Te=V._init;return Se(q,Te(V._payload),K)}if(We(V)||le(V))return V=Ur(V,q.mode,K,null),V.return=q,V;_a(q,V)}return null}function ge(q,V,K,Te){var je=V!==null?V.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:L(q,V,""+K,Te);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case W:return K.key===je?O(q,V,K,Te):null;case H:return K.key===je?J(q,V,K,Te):null;case oe:return je=K._init,ge(q,V,je(K._payload),Te)}if(We(K)||le(K))return je!==null?null:ve(q,V,K,Te,null);_a(q,K)}return null}function Ne(q,V,K,Te,je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(K)||null,L(V,q,""+Te,je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return q=q.get(Te.key===null?K:Te.key)||null,O(V,q,Te,je);case H:return q=q.get(Te.key===null?K:Te.key)||null,J(V,q,Te,je);case oe:var Ze=Te._init;return Ne(q,V,K,Ze(Te._payload),je)}if(We(Te)||le(Te))return q=q.get(K)||null,ve(V,q,Te,je,null);_a(V,Te)}return null}function ke(q,V,K,Te){for(var je=null,Ze=null,Qe=V,it=V=0,rn=null;Qe!==null&&it<K.length;it++){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var St=ge(q,Qe,K[it],Te);if(St===null){Qe===null&&(Qe=rn);break}t&&Qe&&St.alternate===null&&i(q,Qe),V=h(St,V,it),Ze===null?je=St:Ze.sibling=St,Ze=St,Qe=rn}if(it===K.length)return o(q,Qe),Ot&&Ar(q,it),je;if(Qe===null){for(;it<K.length;it++)Qe=Se(q,K[it],Te),Qe!==null&&(V=h(Qe,V,it),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return Ot&&Ar(q,it),je}for(Qe=l(q,Qe);it<K.length;it++)rn=Ne(Qe,q,it,K[it],Te),rn!==null&&(t&&rn.alternate!==null&&Qe.delete(rn.key===null?it:rn.key),V=h(rn,V,it),Ze===null?je=rn:Ze.sibling=rn,Ze=rn);return t&&Qe.forEach(function(lr){return i(q,lr)}),Ot&&Ar(q,it),je}function He(q,V,K,Te){var je=le(K);if(typeof je!="function")throw Error(n(150));if(K=je.call(K),K==null)throw Error(n(151));for(var Ze=je=null,Qe=V,it=V=0,rn=null,St=K.next();Qe!==null&&!St.done;it++,St=K.next()){Qe.index>it?(rn=Qe,Qe=null):rn=Qe.sibling;var lr=ge(q,Qe,St.value,Te);if(lr===null){Qe===null&&(Qe=rn);break}t&&Qe&&lr.alternate===null&&i(q,Qe),V=h(lr,V,it),Ze===null?je=lr:Ze.sibling=lr,Ze=lr,Qe=rn}if(St.done)return o(q,Qe),Ot&&Ar(q,it),je;if(Qe===null){for(;!St.done;it++,St=K.next())St=Se(q,St.value,Te),St!==null&&(V=h(St,V,it),Ze===null?je=St:Ze.sibling=St,Ze=St);return Ot&&Ar(q,it),je}for(Qe=l(q,Qe);!St.done;it++,St=K.next())St=Ne(Qe,q,it,St.value,Te),St!==null&&(t&&St.alternate!==null&&Qe.delete(St.key===null?it:St.key),V=h(St,V,it),Ze===null?je=St:Ze.sibling=St,Ze=St);return t&&Qe.forEach(function(U1){return i(q,U1)}),Ot&&Ar(q,it),je}function Gt(q,V,K,Te){if(typeof K=="object"&&K!==null&&K.type===F&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case W:e:{for(var je=K.key,Ze=V;Ze!==null;){if(Ze.key===je){if(je=K.type,je===F){if(Ze.tag===7){o(q,Ze.sibling),V=u(Ze,K.props.children),V.return=q,q=V;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&qf(je)===Ze.type){o(q,Ze.sibling),V=u(Ze,K.props),V.ref=ho(q,Ze,K),V.return=q,q=V;break e}o(q,Ze);break}else i(q,Ze);Ze=Ze.sibling}K.type===F?(V=Ur(K.props.children,q.mode,Te,K.key),V.return=q,q=V):(Te=Va(K.type,K.key,K.props,null,q.mode,Te),Te.ref=ho(q,V,K),Te.return=q,q=Te)}return M(q);case H:e:{for(Ze=K.key;V!==null;){if(V.key===Ze)if(V.tag===4&&V.stateNode.containerInfo===K.containerInfo&&V.stateNode.implementation===K.implementation){o(q,V.sibling),V=u(V,K.children||[]),V.return=q,q=V;break e}else{o(q,V);break}else i(q,V);V=V.sibling}V=au(K,q.mode,Te),V.return=q,q=V}return M(q);case oe:return Ze=K._init,Gt(q,V,Ze(K._payload),Te)}if(We(K))return ke(q,V,K,Te);if(le(K))return He(q,V,K,Te);_a(q,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,V!==null&&V.tag===6?(o(q,V.sibling),V=u(V,K),V.return=q,q=V):(o(q,V),V=ou(K,q.mode,Te),V.return=q,q=V),M(q)):o(q,V)}return Gt}var hs=$f(!0),Kf=$f(!1),xa=Zi(null),ya=null,ps=null,gc=null;function vc(){gc=ps=ya=null}function _c(t){var i=xa.current;It(xa),t._currentValue=i}function xc(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function ms(t,i){ya=t,gc=ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&i&&(Cn=!0),t.firstContext=null)}function Vn(t){var i=t._currentValue;if(gc!==t)if(t={context:t,memoizedValue:i,next:null},ps===null){if(ya===null)throw Error(n(308));ps=t,ya.dependencies={lanes:0,firstContext:t}}else ps=ps.next=t;return i}var Cr=null;function yc(t){Cr===null?Cr=[t]:Cr.push(t)}function Zf(t,i,o,l){var u=i.interleaved;return u===null?(o.next=o,yc(i)):(o.next=u.next,u.next=o),i.interleaved=o,Ti(t,l)}function Ti(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var er=!1;function Sc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function tr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,yt&2){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,Ti(t,o)}return u=l.interleaved,u===null?(i.next=i,yc(l)):(i.next=u.next,u.next=i),l.interleaved=i,Ti(t,o)}function Sa(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}function Jf(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var u=null,h=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};h===null?u=h=M:h=h.next=M,o=o.next}while(o!==null);h===null?u=h=i:h=h.next=i}else u=h=i;o={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ma(t,i,o,l){var u=t.updateQueue;er=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,L=u.shared.pending;if(L!==null){u.shared.pending=null;var O=L,J=O.next;O.next=null,M===null?h=J:M.next=J,M=O;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,L=ve.lastBaseUpdate,L!==M&&(L===null?ve.firstBaseUpdate=J:L.next=J,ve.lastBaseUpdate=O))}if(h!==null){var Se=u.baseState;M=0,ve=J=O=null,L=h;do{var ge=L.lane,Ne=L.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ke=t,He=L;switch(ge=i,Ne=o,He.tag){case 1:if(ke=He.payload,typeof ke=="function"){Se=ke.call(Ne,Se,ge);break e}Se=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=He.payload,ge=typeof ke=="function"?ke.call(Ne,Se,ge):ke,ge==null)break e;Se=se({},Se,ge);break e;case 2:er=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,ge=u.effects,ge===null?u.effects=[L]:ge.push(L))}else Ne={eventTime:Ne,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},ve===null?(J=ve=Ne,O=Se):ve=ve.next=Ne,M|=ge;if(L=L.next,L===null){if(L=u.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);if(ve===null&&(O=Se),u.baseState=O,u.firstBaseUpdate=J,u.lastBaseUpdate=ve,i=u.shared.interleaved,i!==null){u=i;do M|=u.lane,u=u.next;while(u!==i)}else h===null&&(u.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=Se}}function eh(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],u=l.callback;if(u!==null){if(l.callback=null,l=o,typeof u!="function")throw Error(n(191,u));u.call(l)}}}var po={},ui=Zi(po),mo=Zi(po),go=Zi(po);function Rr(t){if(t===po)throw Error(n(174));return t}function Mc(t,i){switch(Dt(go,i),Dt(mo,t),Dt(ui,po),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ve(i,t)}It(ui),Dt(ui,i)}function gs(){It(ui),It(mo),It(go)}function th(t){Rr(go.current);var i=Rr(ui.current),o=Ve(i,t.type);i!==o&&(Dt(mo,t),Dt(ui,o))}function Ec(t){mo.current===t&&(It(ui),It(mo))}var zt=Zi(0);function Ea(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Tc=[];function wc(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Ta=b.ReactCurrentDispatcher,Ac=b.ReactCurrentBatchConfig,br=0,kt=null,$t=null,tn=null,wa=!1,vo=!1,_o=0,n1=0;function fn(){throw Error(n(321))}function Cc(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function Rc(t,i,o,l,u,h){if(br=h,kt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ta.current=t===null||t.memoizedState===null?o1:a1,t=o(l,u),vo){h=0;do{if(vo=!1,_o=0,25<=h)throw Error(n(301));h+=1,tn=$t=null,i.updateQueue=null,Ta.current=l1,t=o(l,u)}while(vo)}if(Ta.current=Ra,i=$t!==null&&$t.next!==null,br=0,tn=$t=kt=null,wa=!1,i)throw Error(n(300));return t}function bc(){var t=_o!==0;return _o=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=t:tn=tn.next=t,tn}function Gn(){if($t===null){var t=kt.alternate;t=t!==null?t.memoizedState:null}else t=$t.next;var i=tn===null?kt.memoizedState:tn.next;if(i!==null)tn=i,$t=t;else{if(t===null)throw Error(n(310));$t=t,t={memoizedState:$t.memoizedState,baseState:$t.baseState,baseQueue:$t.baseQueue,queue:$t.queue,next:null},tn===null?kt.memoizedState=tn=t:tn=tn.next=t}return tn}function xo(t,i){return typeof i=="function"?i(t):i}function Pc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=$t,u=l.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}l.baseQueue=u=h,o.pending=null}if(u!==null){h=u.next,l=l.baseState;var L=M=null,O=null,J=h;do{var ve=J.lane;if((br&ve)===ve)O!==null&&(O=O.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var Se={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};O===null?(L=O=Se,M=l):O=O.next=Se,kt.lanes|=ve,Pr|=ve}J=J.next}while(J!==null&&J!==h);O===null?M=l:O.next=L,$n(l,i.memoizedState)||(Cn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=O,o.lastRenderedState=l}if(t=o.interleaved,t!==null){u=t;do h=u.lane,kt.lanes|=h,Pr|=h,u=u.next;while(u!==t)}else u===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Lc(t){var i=Gn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,u=o.pending,h=i.memoizedState;if(u!==null){o.pending=null;var M=u=u.next;do h=t(h,M.action),M=M.next;while(M!==u);$n(h,i.memoizedState)||(Cn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),o.lastRenderedState=h}return[h,l]}function nh(){}function ih(t,i){var o=kt,l=Gn(),u=i(),h=!$n(l.memoizedState,u);if(h&&(l.memoizedState=u,Cn=!0),l=l.queue,Dc(oh.bind(null,o,l,t),[t]),l.getSnapshot!==i||h||tn!==null&&tn.memoizedState.tag&1){if(o.flags|=2048,yo(9,sh.bind(null,o,l,u,i),void 0,null),nn===null)throw Error(n(349));br&30||rh(o,i,u)}return u}function rh(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function sh(t,i,o,l){i.value=o,i.getSnapshot=l,ah(i)&&lh(t)}function oh(t,i,o){return o(function(){ah(i)&&lh(t)})}function ah(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function lh(t){var i=Ti(t,1);i!==null&&ei(i,t,1,-1)}function ch(t){var i=di();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},i.queue=t,t=t.dispatch=s1.bind(null,kt,t),[i.memoizedState,t]}function yo(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=kt.updateQueue,i===null?(i={lastEffect:null,stores:null},kt.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function uh(){return Gn().memoizedState}function Aa(t,i,o,l){var u=di();kt.flags|=t,u.memoizedState=yo(1|i,o,void 0,l===void 0?null:l)}function Ca(t,i,o,l){var u=Gn();l=l===void 0?null:l;var h=void 0;if($t!==null){var M=$t.memoizedState;if(h=M.destroy,l!==null&&Cc(l,M.deps)){u.memoizedState=yo(i,o,h,l);return}}kt.flags|=t,u.memoizedState=yo(1|i,o,h,l)}function dh(t,i){return Aa(8390656,8,t,i)}function Dc(t,i){return Ca(2048,8,t,i)}function fh(t,i){return Ca(4,2,t,i)}function hh(t,i){return Ca(4,4,t,i)}function ph(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function mh(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4,4,ph.bind(null,i,t),o)}function Nc(){}function gh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function vh(t,i){var o=Gn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Cc(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function _h(t,i,o){return br&21?($n(o,i)||(o=bt(),kt.lanes|=o,Pr|=o,t.baseState=!0),i):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=o)}function i1(t,i){var o=xt;xt=o!==0&&4>o?o:4,t(!0);var l=Ac.transition;Ac.transition={};try{t(!1),i()}finally{xt=o,Ac.transition=l}}function xh(){return Gn().memoizedState}function r1(t,i,o){var l=sr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},yh(t))Sh(i,o);else if(o=Zf(t,i,o,l),o!==null){var u=Mn();ei(o,t,l,u),Mh(o,i,l)}}function s1(t,i,o){var l=sr(t),u={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(yh(t))Sh(i,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,o);if(u.hasEagerState=!0,u.eagerState=L,$n(L,M)){var O=i.interleaved;O===null?(u.next=u,yc(i)):(u.next=O.next,O.next=u),i.interleaved=u;return}}catch{}finally{}o=Zf(t,i,u,l),o!==null&&(u=Mn(),ei(o,t,l,u),Mh(o,i,l))}}function yh(t){var i=t.alternate;return t===kt||i!==null&&i===kt}function Sh(t,i){vo=wa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function Mh(t,i,o){if(o&4194240){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,en(t,o)}}var Ra={readContext:Vn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},o1={readContext:Vn,useCallback:function(t,i){return di().memoizedState=[t,i===void 0?null:i],t},useContext:Vn,useEffect:dh,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Aa(4194308,4,ph.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Aa(4194308,4,t,i)},useInsertionEffect:function(t,i){return Aa(4,2,t,i)},useMemo:function(t,i){var o=di();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=di();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=r1.bind(null,kt,t),[l.memoizedState,t]},useRef:function(t){var i=di();return t={current:t},i.memoizedState=t},useState:ch,useDebugValue:Nc,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=ch(!1),i=t[0];return t=i1.bind(null,t[1]),di().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=kt,u=di();if(Ot){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),nn===null)throw Error(n(349));br&30||rh(l,i,o)}u.memoizedState=o;var h={value:o,getSnapshot:i};return u.queue=h,dh(oh.bind(null,l,h,t),[t]),l.flags|=2048,yo(9,sh.bind(null,l,h,o,i),void 0,null),o},useId:function(){var t=di(),i=nn.identifierPrefix;if(Ot){var o=Ei,l=Mi;o=(l&~(1<<32-ot(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=_o++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=n1++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},a1={readContext:Vn,useCallback:gh,useContext:Vn,useEffect:Dc,useImperativeHandle:mh,useInsertionEffect:fh,useLayoutEffect:hh,useMemo:vh,useReducer:Pc,useRef:uh,useState:function(){return Pc(xo)},useDebugValue:Nc,useDeferredValue:function(t){var i=Gn();return _h(i,$t.memoizedState,t)},useTransition:function(){var t=Pc(xo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:nh,useSyncExternalStore:ih,useId:xh,unstable_isNewReconciler:!1},l1={readContext:Vn,useCallback:gh,useContext:Vn,useEffect:Dc,useImperativeHandle:mh,useInsertionEffect:fh,useLayoutEffect:hh,useMemo:vh,useReducer:Lc,useRef:uh,useState:function(){return Lc(xo)},useDebugValue:Nc,useDeferredValue:function(t){var i=Gn();return $t===null?i.memoizedState=t:_h(i,$t.memoizedState,t)},useTransition:function(){var t=Lc(xo)[0],i=Gn().memoizedState;return[t,i]},useMutableSource:nh,useSyncExternalStore:ih,useId:xh,unstable_isNewReconciler:!1};function Zn(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Uc(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:se({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var ba={isMounted:function(t){return(t=t._reactInternals)?ai(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=Mn(),u=sr(t),h=wi(l,u);h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,u),i!==null&&(ei(i,t,u,l),Sa(i,t,u))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=Mn(),u=sr(t),h=wi(l,u);h.tag=1,h.payload=i,o!=null&&(h.callback=o),i=tr(t,h,u),i!==null&&(ei(i,t,u,l),Sa(i,t,u))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Mn(),l=sr(t),u=wi(o,l);u.tag=2,i!=null&&(u.callback=i),i=tr(t,u,l),i!==null&&(ei(i,t,l,o),Sa(i,t,l))}};function Eh(t,i,o,l,u,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!so(o,l)||!so(u,h):!0}function Th(t,i,o){var l=!1,u=Qi,h=i.contextType;return typeof h=="object"&&h!==null?h=Vn(h):(u=An(i)?Tr:dn.current,l=i.contextTypes,h=(l=l!=null)?cs(t,u):Qi),i=new i(o,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ba,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=u,t.__reactInternalMemoizedMaskedChildContext=h),i}function wh(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&ba.enqueueReplaceState(i,i.state,null)}function Ic(t,i,o,l){var u=t.stateNode;u.props=o,u.state=t.memoizedState,u.refs={},Sc(t);var h=i.contextType;typeof h=="object"&&h!==null?u.context=Vn(h):(h=An(i)?Tr:dn.current,u.context=cs(t,h)),u.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Uc(t,i,h,o),u.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&ba.enqueueReplaceState(u,u.state,null),Ma(t,o,u,l),u.state=t.memoizedState),typeof u.componentDidMount=="function"&&(t.flags|=4194308)}function vs(t,i){try{var o="",l=i;do o+=pe(l),l=l.return;while(l);var u=o}catch(h){u=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:u,digest:null}}function Fc(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Oc(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var c1=typeof WeakMap=="function"?WeakMap:Map;function Ah(t,i,o){o=wi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){Fa||(Fa=!0,Qc=l),Oc(t,i)},o}function Ch(t,i,o){o=wi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var u=i.value;o.payload=function(){return l(u)},o.callback=function(){Oc(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(o.callback=function(){Oc(t,i),typeof l!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Rh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new c1;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(o)||(u.add(o),t=E1.bind(null,t,i,o),i.then(t,t))}function bh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ph(t,i,o,l,u){return t.mode&1?(t.flags|=65536,t.lanes=u,t):(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=wi(-1,1),i.tag=2,tr(o,i,1))),o.lanes|=1),t)}var u1=b.ReactCurrentOwner,Cn=!1;function Sn(t,i,o,l){i.child=t===null?Kf(i,null,o,l):hs(i,t.child,o,l)}function Lh(t,i,o,l,u){o=o.render;var h=i.ref;return ms(i,u),l=Rc(t,i,o,l,h,u),o=bc(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ot&&o&&dc(i),i.flags|=1,Sn(t,i,l,u),i.child)}function Dh(t,i,o,l,u){if(t===null){var h=o.type;return typeof h=="function"&&!su(h)&&h.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=h,Nh(t,i,h,l,u)):(t=Va(o.type,null,l,i,i.mode,u),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,!(t.lanes&u)){var M=h.memoizedProps;if(o=o.compare,o=o!==null?o:so,o(M,l)&&t.ref===i.ref)return Ai(t,i,u)}return i.flags|=1,t=ar(h,l),t.ref=i.ref,t.return=i,i.child=t}function Nh(t,i,o,l,u){if(t!==null){var h=t.memoizedProps;if(so(h,l)&&t.ref===i.ref)if(Cn=!1,i.pendingProps=l=h,(t.lanes&u)!==0)t.flags&131072&&(Cn=!0);else return i.lanes=t.lanes,Ai(t,i,u)}return zc(t,i,o,l,u)}function Uh(t,i,o){var l=i.pendingProps,u=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(xs,Fn),Fn|=o;else{if(!(o&1073741824))return t=h!==null?h.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(xs,Fn),Fn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:o,Dt(xs,Fn),Fn|=l}else h!==null?(l=h.baseLanes|o,i.memoizedState=null):l=o,Dt(xs,Fn),Fn|=l;return Sn(t,i,u,o),i.child}function Ih(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function zc(t,i,o,l,u){var h=An(o)?Tr:dn.current;return h=cs(i,h),ms(i,u),o=Rc(t,i,o,l,h,u),l=bc(),t!==null&&!Cn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~u,Ai(t,i,u)):(Ot&&l&&dc(i),i.flags|=1,Sn(t,i,o,u),i.child)}function Fh(t,i,o,l,u){if(An(o)){var h=!0;ha(i)}else h=!1;if(ms(i,u),i.stateNode===null)La(t,i),Th(i,o,l),Ic(i,o,l,u),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=Vn(J):(J=An(o)?Tr:dn.current,J=cs(i,J));var ve=o.getDerivedStateFromProps,Se=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||O!==J)&&wh(i,M,l,J),er=!1;var ge=i.memoizedState;M.state=ge,Ma(i,l,M,u),O=i.memoizedState,L!==l||ge!==O||wn.current||er?(typeof ve=="function"&&(Uc(i,o,ve,l),O=i.memoizedState),(L=er||Eh(i,o,L,l,ge,O,J))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=O),M.props=l,M.state=O,M.context=J,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Qf(t,i),L=i.memoizedProps,J=i.type===i.elementType?L:Zn(i.type,L),M.props=J,Se=i.pendingProps,ge=M.context,O=o.contextType,typeof O=="object"&&O!==null?O=Vn(O):(O=An(o)?Tr:dn.current,O=cs(i,O));var Ne=o.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||ge!==O)&&wh(i,M,l,O),er=!1,ge=i.memoizedState,M.state=ge,Ma(i,l,M,u);var ke=i.memoizedState;L!==Se||ge!==ke||wn.current||er?(typeof Ne=="function"&&(Uc(i,o,Ne,l),ke=i.memoizedState),(J=er||Eh(i,o,J,l,ge,ke,O)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ke,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ke,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ke),M.props=l,M.state=ke,M.context=O,l=J):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return kc(t,i,o,l,h,u)}function kc(t,i,o,l,u,h){Ih(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return u&&Hf(i,o,!1),Ai(t,i,h);l=i.stateNode,u1.current=i;var L=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=hs(i,t.child,null,h),i.child=hs(i,null,L,h)):Sn(t,i,L,h),i.memoizedState=l.state,u&&Hf(i,o,!0),i.child}function Oh(t){var i=t.stateNode;i.pendingContext?kf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&kf(t,i.context,!1),Mc(t,i.containerInfo)}function zh(t,i,o,l,u){return fs(),mc(u),i.flags|=256,Sn(t,i,o,l),i.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function Hc(t){return{baseLanes:t,cachePool:null,transitions:null}}function kh(t,i,o){var l=i.pendingProps,u=zt.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(u&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(u|=1),Dt(zt,u&1),t===null)return pc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(i.mode&1?t.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},!(l&1)&&h!==null?(h.childLanes=0,h.pendingProps=M):h=Ga(M,l,0,null),t=Ur(t,l,o,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Hc(o),i.memoizedState=Bc,t):Vc(i,M));if(u=t.memoizedState,u!==null&&(L=u.dehydrated,L!==null))return d1(t,i,M,l,L,u,o);if(h){h=l.fallback,M=i.mode,u=t.child,L=u.sibling;var O={mode:"hidden",children:l.children};return!(M&1)&&i.child!==u?(l=i.child,l.childLanes=0,l.pendingProps=O,i.deletions=null):(l=ar(u,O),l.subtreeFlags=u.subtreeFlags&14680064),L!==null?h=ar(L,h):(h=Ur(h,M,o,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Hc(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~o,i.memoizedState=Bc,l}return h=t.child,t=h.sibling,l=ar(h,{mode:"visible",children:l.children}),!(i.mode&1)&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function Vc(t,i){return i=Ga({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Pa(t,i,o,l){return l!==null&&mc(l),hs(i,t.child,null,o),t=Vc(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function d1(t,i,o,l,u,h,M){if(o)return i.flags&256?(i.flags&=-257,l=Fc(Error(n(422))),Pa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,u=i.mode,l=Ga({mode:"visible",children:l.children},u,0,null),h=Ur(h,u,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,i.mode&1&&hs(i,t.child,null,M),i.child.memoizedState=Hc(M),i.memoizedState=Bc,h);if(!(i.mode&1))return Pa(t,i,M,null);if(u.data==="$!"){if(l=u.nextSibling&&u.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Fc(h,l,void 0),Pa(t,i,M,l)}if(L=(M&t.childLanes)!==0,Cn||L){if(l=nn,l!==null){switch(M&-M){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(l.suspendedLanes|M)?0:u,u!==0&&u!==h.retryLane&&(h.retryLane=u,Ti(t,u),ei(l,t,u,-1))}return ru(),l=Fc(Error(n(421))),Pa(t,i,M,l)}return u.data==="$?"?(i.flags|=128,i.child=t.child,i=T1.bind(null,t),u._reactRetry=i,null):(t=h.treeContext,In=Ki(u.nextSibling),Un=i,Ot=!0,Kn=null,t!==null&&(Bn[Hn++]=Mi,Bn[Hn++]=Ei,Bn[Hn++]=wr,Mi=t.id,Ei=t.overflow,wr=i),i=Vc(i,l.children),i.flags|=4096,i)}function Bh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),xc(t.return,i,o)}function Gc(t,i,o,l,u){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:u}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=o,h.tailMode=u)}function Hh(t,i,o){var l=i.pendingProps,u=l.revealOrder,h=l.tail;if(Sn(t,i,l.children,o),l=zt.current,l&2)l=l&1|2,i.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bh(t,o,i);else if(t.tag===19)Bh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(zt,l),!(i.mode&1))i.memoizedState=null;else switch(u){case"forwards":for(o=i.child,u=null;o!==null;)t=o.alternate,t!==null&&Ea(t)===null&&(u=o),o=o.sibling;o=u,o===null?(u=i.child,i.child=null):(u=o.sibling,o.sibling=null),Gc(i,!1,u,o,h);break;case"backwards":for(o=null,u=i.child,i.child=null;u!==null;){if(t=u.alternate,t!==null&&Ea(t)===null){i.child=u;break}t=u.sibling,u.sibling=o,o=u,u=t}Gc(i,!0,o,null,h);break;case"together":Gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){!(i.mode&1)&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ai(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,!(o&i.childLanes))return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=ar(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=ar(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function f1(t,i,o){switch(i.tag){case 3:Oh(i),fs();break;case 5:th(i);break;case 1:An(i.type)&&ha(i);break;case 4:Mc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,u=i.memoizedProps.value;Dt(xa,l._currentValue),l._currentValue=u;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(zt,zt.current&1),i.flags|=128,null):o&i.child.childLanes?kh(t,i,o):(Dt(zt,zt.current&1),t=Ai(t,i,o),t!==null?t.sibling:null);Dt(zt,zt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,t.flags&128){if(l)return Hh(t,i,o);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Dt(zt,zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Uh(t,i,o)}return Ai(t,i,o)}var Vh,Wc,Gh,Wh;Vh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Wc=function(){},Gh=function(t,i,o,l){var u=t.memoizedProps;if(u!==l){t=i.stateNode,Rr(ui.current);var h=null;switch(o){case"input":u=z(t,u),l=z(t,l),h=[];break;case"select":u=se({},u,{value:void 0}),l=se({},l,{value:void 0}),h=[];break;case"textarea":u=E(t,u),l=E(t,l),h=[];break;default:typeof u.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ua)}dt(o,l);var M;o=null;for(J in u)if(!l.hasOwnProperty(J)&&u.hasOwnProperty(J)&&u[J]!=null)if(J==="style"){var L=u[J];for(M in L)L.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var O=l[J];if(L=u!=null?u[J]:void 0,l.hasOwnProperty(J)&&O!==L&&(O!=null||L!=null))if(J==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(o||(o={}),o[M]=O[M])}else o||(h||(h=[]),h.push(J,o)),o=O;else J==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(h=h||[]).push(J,O)):J==="children"?typeof O!="string"&&typeof O!="number"||(h=h||[]).push(J,""+O):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(O!=null&&J==="onScroll"&&Ut("scroll",t),h||L===O||(h=[])):(h=h||[]).push(J,O))}o&&(h=h||[]).push("style",o);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},Wh=function(t,i,o,l){o!==l&&(i.flags|=4)};function So(t,i){if(!Ot)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function hn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags&14680064,l|=u.flags&14680064,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)o|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function h1(t,i,o){var l=i.pendingProps;switch(fc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hn(i),null;case 1:return An(i.type)&&fa(),hn(i),null;case 3:return l=i.stateNode,gs(),It(wn),It(dn),wc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Kn!==null&&(tu(Kn),Kn=null))),Wc(t,i),hn(i),null;case 5:Ec(i);var u=Rr(go.current);if(o=i.type,t!==null&&i.stateNode!=null)Gh(t,i,o,l,u),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return hn(i),null}if(t=Rr(ui.current),va(i)){l=i.stateNode,o=i.type;var h=i.memoizedProps;switch(l[ci]=i,l[uo]=h,t=(i.mode&1)!==0,o){case"dialog":Ut("cancel",l),Ut("close",l);break;case"iframe":case"object":case"embed":Ut("load",l);break;case"video":case"audio":for(u=0;u<ao.length;u++)Ut(ao[u],l);break;case"source":Ut("error",l);break;case"img":case"image":case"link":Ut("error",l),Ut("load",l);break;case"details":Ut("toggle",l);break;case"input":_n(l,h),Ut("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ut("invalid",l);break;case"textarea":Z(l,h),Ut("invalid",l)}dt(o,h),u=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,L,t),u=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&ca(l.textContent,L,t),u=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Ut("scroll",l)}switch(o){case"input":Pt(l),Ye(l,h,!0);break;case"textarea":Pt(l),_e(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=ua)}l=u,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=u.nodeType===9?u:u.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[ci]=i,t[uo]=l,Vh(t,i,!1,!1),i.stateNode=t;e:{switch(M=rt(o,l),o){case"dialog":Ut("cancel",t),Ut("close",t),u=l;break;case"iframe":case"object":case"embed":Ut("load",t),u=l;break;case"video":case"audio":for(u=0;u<ao.length;u++)Ut(ao[u],t);u=l;break;case"source":Ut("error",t),u=l;break;case"img":case"image":case"link":Ut("error",t),Ut("load",t),u=l;break;case"details":Ut("toggle",t),u=l;break;case"input":_n(t,l),u=z(t,l),Ut("invalid",t);break;case"option":u=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},u=se({},l,{value:void 0}),Ut("invalid",t);break;case"textarea":Z(t,l),u=E(t,l),Ut("invalid",t);break;default:u=l}dt(o,u),L=u;for(h in L)if(L.hasOwnProperty(h)){var O=L[h];h==="style"?tt(t,O):h==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Ke(t,O)):h==="children"?typeof O=="string"?(o!=="textarea"||O!=="")&&$e(t,O):typeof O=="number"&&$e(t,""+O):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?O!=null&&h==="onScroll"&&Ut("scroll",t):O!=null&&D(t,h,O,M))}switch(o){case"input":Pt(t),Ye(t,l,!1);break;case"textarea":Pt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?P(t,!!l.multiple,h,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof u.onClick=="function"&&(t.onclick=ua)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return hn(i),null;case 6:if(t&&i.stateNode!=null)Wh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Rr(go.current),Rr(ui.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[ci]=i,(h=l.nodeValue!==o)&&(t=Un,t!==null))switch(t.tag){case 3:ca(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,o,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[ci]=i,i.stateNode=l}return hn(i),null;case 13:if(It(zt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ot&&In!==null&&i.mode&1&&!(i.flags&128))Yf(),fs(),i.flags|=98560,h=!1;else if(h=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ci]=i}else fs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;hn(i),h=!1}else Kn!==null&&(tu(Kn),Kn=null),h=!0;if(!h)return i.flags&65536?i:null}return i.flags&128?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,i.mode&1&&(t===null||zt.current&1?Kt===0&&(Kt=3):ru())),i.updateQueue!==null&&(i.flags|=4),hn(i),null);case 4:return gs(),Wc(t,i),t===null&&lo(i.stateNode.containerInfo),hn(i),null;case 10:return _c(i.type._context),hn(i),null;case 17:return An(i.type)&&fa(),hn(i),null;case 19:if(It(zt),h=i.memoizedState,h===null)return hn(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)So(h,!1);else{if(Kt!==0||t!==null&&t.flags&128)for(t=i.child;t!==null;){if(M=Ea(t),M!==null){for(i.flags|=128,So(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)h=o,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Dt(zt,zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&$()>ys&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304)}else{if(!l)if(t=Ea(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),So(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!Ot)return hn(i),null}else 2*$()-h.renderingStartTime>ys&&o!==1073741824&&(i.flags|=128,l=!0,So(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(o=h.last,o!==null?o.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=$(),i.sibling=null,o=zt.current,Dt(zt,l?o&1|2:o&1),i):(hn(i),null);case 22:case 23:return iu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&i.mode&1?Fn&1073741824&&(hn(i),i.subtreeFlags&6&&(i.flags|=8192)):hn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function p1(t,i){switch(fc(i),i.tag){case 1:return An(i.type)&&fa(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return gs(),It(wn),It(dn),wc(),t=i.flags,t&65536&&!(t&128)?(i.flags=t&-65537|128,i):null;case 5:return Ec(i),null;case 13:if(It(zt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));fs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return It(zt),null;case 4:return gs(),null;case 10:return _c(i.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var Da=!1,pn=!1,m1=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function _s(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Vt(t,i,l)}else o.current=null}function jc(t,i,o){try{o()}catch(l){Vt(t,i,l)}}var jh=!1;function g1(t,i){if(ic=Qo,t=Ef(),$l(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var u=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{o.nodeType,h.nodeType}catch{o=null;break e}var M=0,L=-1,O=-1,J=0,ve=0,Se=t,ge=null;t:for(;;){for(var Ne;Se!==o||u!==0&&Se.nodeType!==3||(L=M+u),Se!==h||l!==0&&Se.nodeType!==3||(O=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)ge=Se,Se=Ne;for(;;){if(Se===t)break t;if(ge===o&&++J===u&&(L=M),ge===h&&++ve===l&&(O=M),(Ne=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Ne}o=L===-1||O===-1?null:{start:L,end:O}}else o=null}o=o||{start:0,end:0}}else o=null;for(rc={focusedElem:t,selectionRange:o},Qo=!1,Ie=i;Ie!==null;)if(i=Ie,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ie=t;else for(;Ie!==null;){i=Ie;try{var ke=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ke!==null){var He=ke.memoizedProps,Gt=ke.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:Zn(i.type,He),Gt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var K=i.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Vt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Ie=t;break}Ie=i.return}return ke=jh,jh=!1,ke}function Mo(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var u=l=l.next;do{if((u.tag&t)===t){var h=u.destroy;u.destroy=void 0,h!==void 0&&jc(i,o,h)}u=u.next}while(u!==l)}}function Na(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Xc(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Xh(t){var i=t.alternate;i!==null&&(t.alternate=null,Xh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ci],delete i[uo],delete i[lc],delete i[Q0],delete i[J0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yh(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=ua));else if(l!==4&&(t=t.child,t!==null))for(Yc(t,i,o),t=t.sibling;t!==null;)Yc(t,i,o),t=t.sibling}function qc(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(qc(t,i,o),t=t.sibling;t!==null;)qc(t,i,o),t=t.sibling}var an=null,Qn=!1;function nr(t,i,o){for(o=o.child;o!==null;)$h(t,i,o),o=o.sibling}function $h(t,i,o){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(Je,o)}catch{}switch(o.tag){case 5:pn||_s(o,i);case 6:var l=an,u=Qn;an=null,nr(t,i,o),an=l,Qn=u,an!==null&&(Qn?(t=an,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):an.removeChild(o.stateNode));break;case 18:an!==null&&(Qn?(t=an,o=o.stateNode,t.nodeType===8?ac(t.parentNode,o):t.nodeType===1&&ac(t,o),Js(t)):ac(an,o.stateNode));break;case 4:l=an,u=Qn,an=o.stateNode.containerInfo,Qn=!0,nr(t,i,o),an=l,Qn=u;break;case 0:case 11:case 14:case 15:if(!pn&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){u=l=l.next;do{var h=u,M=h.destroy;h=h.tag,M!==void 0&&(h&2||h&4)&&jc(o,i,M),u=u.next}while(u!==l)}nr(t,i,o);break;case 1:if(!pn&&(_s(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(L){Vt(o,i,L)}nr(t,i,o);break;case 21:nr(t,i,o);break;case 22:o.mode&1?(pn=(l=pn)||o.memoizedState!==null,nr(t,i,o),pn=l):nr(t,i,o);break;default:nr(t,i,o)}}function Kh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new m1),i.forEach(function(l){var u=w1.bind(null,t,l);o.has(l)||(o.add(l),l.then(u,u))})}}function Jn(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var u=o[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:an=L.stateNode,Qn=!1;break e;case 3:an=L.stateNode.containerInfo,Qn=!0;break e;case 4:an=L.stateNode.containerInfo,Qn=!0;break e}L=L.return}if(an===null)throw Error(n(160));$h(h,M,u),an=null,Qn=!1;var O=u.alternate;O!==null&&(O.return=null),u.return=null}catch(J){Vt(u,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zh(i,t),i=i.sibling}function Zh(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jn(i,t),fi(t),l&4){try{Mo(3,t,t.return),Na(3,t)}catch(He){Vt(t,t.return,He)}try{Mo(5,t,t.return)}catch(He){Vt(t,t.return,He)}}break;case 1:Jn(i,t),fi(t),l&512&&o!==null&&_s(o,o.return);break;case 5:if(Jn(i,t),fi(t),l&512&&o!==null&&_s(o,o.return),t.flags&32){var u=t.stateNode;try{$e(u,"")}catch(He){Vt(t,t.return,He)}}if(l&4&&(u=t.stateNode,u!=null)){var h=t.memoizedProps,M=o!==null?o.memoizedProps:h,L=t.type,O=t.updateQueue;if(t.updateQueue=null,O!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&ht(u,h),rt(L,M);var J=rt(L,h);for(M=0;M<O.length;M+=2){var ve=O[M],Se=O[M+1];ve==="style"?tt(u,Se):ve==="dangerouslySetInnerHTML"?Ke(u,Se):ve==="children"?$e(u,Se):D(u,ve,Se,J)}switch(L){case"input":ut(u,h);break;case"textarea":fe(u,h);break;case"select":var ge=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?P(u,!!h.multiple,Ne,!1):ge!==!!h.multiple&&(h.defaultValue!=null?P(u,!!h.multiple,h.defaultValue,!0):P(u,!!h.multiple,h.multiple?[]:"",!1))}u[uo]=h}catch(He){Vt(t,t.return,He)}}break;case 6:if(Jn(i,t),fi(t),l&4){if(t.stateNode===null)throw Error(n(162));u=t.stateNode,h=t.memoizedProps;try{u.nodeValue=h}catch(He){Vt(t,t.return,He)}}break;case 3:if(Jn(i,t),fi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{Js(i.containerInfo)}catch(He){Vt(t,t.return,He)}break;case 4:Jn(i,t),fi(t);break;case 13:Jn(i,t),fi(t),u=t.child,u.flags&8192&&(h=u.memoizedState!==null,u.stateNode.isHidden=h,!h||u.alternate!==null&&u.alternate.memoizedState!==null||(Zc=$())),l&4&&Kh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(pn=(J=pn)||ve,Jn(i,t),pn=J):Jn(i,t),fi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ve&&t.mode&1)for(Ie=t,ve=t.child;ve!==null;){for(Se=Ie=ve;Ie!==null;){switch(ge=Ie,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:Mo(4,ge,ge.return);break;case 1:_s(ge,ge.return);var ke=ge.stateNode;if(typeof ke.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,ke.props=i.memoizedProps,ke.state=i.memoizedState,ke.componentWillUnmount()}catch(He){Vt(l,o,He)}}break;case 5:_s(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ep(Se);continue}}Ne!==null?(Ne.return=ge,Ie=Ne):ep(Se)}ve=ve.sibling}e:for(ve=null,Se=t;;){if(Se.tag===5){if(ve===null){ve=Se;try{u=Se.stateNode,J?(h=u.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Se.stateNode,O=Se.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=et("display",M))}catch(He){Vt(t,t.return,He)}}}else if(Se.tag===6){if(ve===null)try{Se.stateNode.nodeValue=J?"":Se.memoizedProps}catch(He){Vt(t,t.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ve===Se&&(ve=null),Se=Se.return}ve===Se&&(ve=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Jn(i,t),fi(t),l&4&&Kh(t);break;case 21:break;default:Jn(i,t),fi(t)}}function fi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(Yh(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var u=l.stateNode;l.flags&32&&($e(u,""),l.flags&=-33);var h=qh(t);qc(t,h,u);break;case 3:case 4:var M=l.stateNode.containerInfo,L=qh(t);Yc(t,L,M);break;default:throw Error(n(161))}}catch(O){Vt(t,t.return,O)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function v1(t,i,o){Ie=t,Qh(t)}function Qh(t,i,o){for(var l=(t.mode&1)!==0;Ie!==null;){var u=Ie,h=u.child;if(u.tag===22&&l){var M=u.memoizedState!==null||Da;if(!M){var L=u.alternate,O=L!==null&&L.memoizedState!==null||pn;L=Da;var J=pn;if(Da=M,(pn=O)&&!J)for(Ie=u;Ie!==null;)M=Ie,O=M.child,M.tag===22&&M.memoizedState!==null?tp(u):O!==null?(O.return=M,Ie=O):tp(u);for(;h!==null;)Ie=h,Qh(h),h=h.sibling;Ie=u,Da=L,pn=J}Jh(t)}else u.subtreeFlags&8772&&h!==null?(h.return=u,Ie=h):Jh(t)}}function Jh(t){for(;Ie!==null;){var i=Ie;if(i.flags&8772){var o=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:pn||Na(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!pn)if(o===null)l.componentDidMount();else{var u=i.elementType===i.type?o.memoizedProps:Zn(i.type,o.memoizedProps);l.componentDidUpdate(u,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&eh(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}eh(i,M,o)}break;case 5:var L=i.stateNode;if(o===null&&i.flags&4){o=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&o.focus();break;case"img":O.src&&(o.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var Se=ve.dehydrated;Se!==null&&Js(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}pn||i.flags&512&&Xc(i)}catch(ge){Vt(i,i.return,ge)}}if(i===t){Ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function ep(t){for(;Ie!==null;){var i=Ie;if(i===t){Ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ie=o;break}Ie=i.return}}function tp(t){for(;Ie!==null;){var i=Ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Na(4,i)}catch(O){Vt(i,o,O)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var u=i.return;try{l.componentDidMount()}catch(O){Vt(i,u,O)}}var h=i.return;try{Xc(i)}catch(O){Vt(i,h,O)}break;case 5:var M=i.return;try{Xc(i)}catch(O){Vt(i,M,O)}}}catch(O){Vt(i,i.return,O)}if(i===t){Ie=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Ie=L;break}Ie=i.return}}var _1=Math.ceil,Ua=b.ReactCurrentDispatcher,$c=b.ReactCurrentOwner,Wn=b.ReactCurrentBatchConfig,yt=0,nn=null,Xt=null,ln=0,Fn=0,xs=Zi(0),Kt=0,Eo=null,Pr=0,Ia=0,Kc=0,To=null,Rn=null,Zc=0,ys=1/0,Ci=null,Fa=!1,Qc=null,ir=null,Oa=!1,rr=null,za=0,wo=0,Jc=null,ka=-1,Ba=0;function Mn(){return yt&6?$():ka!==-1?ka:ka=$()}function sr(t){return t.mode&1?yt&2&&ln!==0?ln&-ln:t1.transition!==null?(Ba===0&&(Ba=bt()),Ba):(t=xt,t!==0||(t=window.event,t=t===void 0?16:nf(t.type)),t):1}function ei(t,i,o,l){if(50<wo)throw wo=0,Jc=null,Error(n(185));Jt(t,o,l),(!(yt&2)||t!==nn)&&(t===nn&&(!(yt&2)&&(Ia|=o),Kt===4&&or(t,ln)),bn(t,l),o===1&&yt===0&&!(i.mode&1)&&(ys=$()+500,pa&&Ji()))}function bn(t,i){var o=t.callbackNode;yn(t,i);var l=cn(t,t===nn?ln:0);if(l===0)o!==null&&T(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&T(o),i===1)t.tag===0?e1(ip.bind(null,t)):Vf(ip.bind(null,t)),K0(function(){!(yt&6)&&Ji()}),o=null;else{switch(li(l)){case 1:o=Me;break;case 4:o=Re;break;case 16:o=De;break;case 536870912:o=nt;break;default:o=De}o=dp(o,np.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function np(t,i){if(ka=-1,Ba=0,yt&6)throw Error(n(327));var o=t.callbackNode;if(Ss()&&t.callbackNode!==o)return null;var l=cn(t,t===nn?ln:0);if(l===0)return null;if(l&30||l&t.expiredLanes||i)i=Ha(t,l);else{i=l;var u=yt;yt|=2;var h=sp();(nn!==t||ln!==i)&&(Ci=null,ys=$()+500,Dr(t,i));do try{S1();break}catch(L){rp(t,L)}while(!0);vc(),Ua.current=h,yt=u,Xt!==null?i=0:(nn=null,ln=0,i=Kt)}if(i!==0){if(i===2&&(u=xi(t),u!==0&&(l=u,i=eu(t,u))),i===1)throw o=Eo,Dr(t,0),or(t,l),bn(t,$()),o;if(i===6)or(t,l);else{if(u=t.current.alternate,!(l&30)&&!x1(u)&&(i=Ha(t,l),i===2&&(h=xi(t),h!==0&&(l=h,i=eu(t,h))),i===1))throw o=Eo,Dr(t,0),or(t,l),bn(t,$()),o;switch(t.finishedWork=u,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Nr(t,Rn,Ci);break;case 3:if(or(t,l),(l&130023424)===l&&(i=Zc+500-$(),10<i)){if(cn(t,0)!==0)break;if(u=t.suspendedLanes,(u&l)!==l){Mn(),t.pingedLanes|=t.suspendedLanes&u;break}t.timeoutHandle=oc(Nr.bind(null,t,Rn,Ci),i);break}Nr(t,Rn,Ci);break;case 4:if(or(t,l),(l&4194240)===l)break;for(i=t.eventTimes,u=-1;0<l;){var M=31-ot(l);h=1<<M,M=i[M],M>u&&(u=M),l&=~h}if(l=u,l=$()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*_1(l/1960))-l,10<l){t.timeoutHandle=oc(Nr.bind(null,t,Rn,Ci),l);break}Nr(t,Rn,Ci);break;case 5:Nr(t,Rn,Ci);break;default:throw Error(n(329))}}}return bn(t,$()),t.callbackNode===o?np.bind(null,t):null}function eu(t,i){var o=To;return t.current.memoizedState.isDehydrated&&(Dr(t,i).flags|=256),t=Ha(t,i),t!==2&&(i=Rn,Rn=o,i!==null&&tu(i)),t}function tu(t){Rn===null?Rn=t:Rn.push.apply(Rn,t)}function x1(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var u=o[l],h=u.getSnapshot;u=u.value;try{if(!$n(h(),u))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function or(t,i){for(i&=~Kc,i&=~Ia,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-ot(i),l=1<<o;t[o]=-1,i&=~l}}function ip(t){if(yt&6)throw Error(n(327));Ss();var i=cn(t,0);if(!(i&1))return bn(t,$()),null;var o=Ha(t,i);if(t.tag!==0&&o===2){var l=xi(t);l!==0&&(i=l,o=eu(t,l))}if(o===1)throw o=Eo,Dr(t,0),or(t,i),bn(t,$()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Nr(t,Rn,Ci),bn(t,$()),null}function nu(t,i){var o=yt;yt|=1;try{return t(i)}finally{yt=o,yt===0&&(ys=$()+500,pa&&Ji())}}function Lr(t){rr!==null&&rr.tag===0&&!(yt&6)&&Ss();var i=yt;yt|=1;var o=Wn.transition,l=xt;try{if(Wn.transition=null,xt=1,t)return t()}finally{xt=l,Wn.transition=o,yt=i,!(yt&6)&&Ji()}}function iu(){Fn=xs.current,It(xs)}function Dr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,$0(o)),Xt!==null)for(o=Xt.return;o!==null;){var l=o;switch(fc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&fa();break;case 3:gs(),It(wn),It(dn),wc();break;case 5:Ec(l);break;case 4:gs();break;case 13:It(zt);break;case 19:It(zt);break;case 10:_c(l.type._context);break;case 22:case 23:iu()}o=o.return}if(nn=t,Xt=t=ar(t.current,null),ln=Fn=i,Kt=0,Eo=null,Kc=Ia=Pr=0,Rn=To=null,Cr!==null){for(i=0;i<Cr.length;i++)if(o=Cr[i],l=o.interleaved,l!==null){o.interleaved=null;var u=l.next,h=o.pending;if(h!==null){var M=h.next;h.next=u,l.next=M}o.pending=l}Cr=null}return t}function rp(t,i){do{var o=Xt;try{if(vc(),Ta.current=Ra,wa){for(var l=kt.memoizedState;l!==null;){var u=l.queue;u!==null&&(u.pending=null),l=l.next}wa=!1}if(br=0,tn=$t=kt=null,vo=!1,_o=0,$c.current=null,o===null||o.return===null){Kt=1,Eo=i,Xt=null;break}e:{var h=t,M=o.return,L=o,O=i;if(i=ln,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var J=O,ve=L,Se=ve.tag;if(!(ve.mode&1)&&(Se===0||Se===11||Se===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=bh(M);if(Ne!==null){Ne.flags&=-257,Ph(Ne,M,L,h,i),Ne.mode&1&&Rh(h,J,i),i=Ne,O=J;var ke=i.updateQueue;if(ke===null){var He=new Set;He.add(O),i.updateQueue=He}else ke.add(O);break e}else{if(!(i&1)){Rh(h,J,i),ru();break e}O=Error(n(426))}}else if(Ot&&L.mode&1){var Gt=bh(M);if(Gt!==null){!(Gt.flags&65536)&&(Gt.flags|=256),Ph(Gt,M,L,h,i),mc(vs(O,L));break e}}h=O=vs(O,L),Kt!==4&&(Kt=2),To===null?To=[h]:To.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Ah(h,O,i);Jf(h,q);break e;case 1:L=O;var V=h.type,K=h.stateNode;if(!(h.flags&128)&&(typeof V.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(ir===null||!ir.has(K)))){h.flags|=65536,i&=-i,h.lanes|=i;var Te=Ch(h,L,i);Jf(h,Te);break e}}h=h.return}while(h!==null)}ap(o)}catch(je){i=je,Xt===o&&o!==null&&(Xt=o=o.return);continue}break}while(!0)}function sp(){var t=Ua.current;return Ua.current=Ra,t===null?Ra:t}function ru(){(Kt===0||Kt===3||Kt===2)&&(Kt=4),nn===null||!(Pr&268435455)&&!(Ia&268435455)||or(nn,ln)}function Ha(t,i){var o=yt;yt|=2;var l=sp();(nn!==t||ln!==i)&&(Ci=null,Dr(t,i));do try{y1();break}catch(u){rp(t,u)}while(!0);if(vc(),yt=o,Ua.current=l,Xt!==null)throw Error(n(261));return nn=null,ln=0,Kt}function y1(){for(;Xt!==null;)op(Xt)}function S1(){for(;Xt!==null&&!j();)op(Xt)}function op(t){var i=up(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,i===null?ap(t):Xt=i,$c.current=null}function ap(t){var i=t;do{var o=i.alternate;if(t=i.return,i.flags&32768){if(o=p1(o,i),o!==null){o.flags&=32767,Xt=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Kt=6,Xt=null;return}}else if(o=h1(o,i,Fn),o!==null){Xt=o;return}if(i=i.sibling,i!==null){Xt=i;return}Xt=i=t}while(i!==null);Kt===0&&(Kt=5)}function Nr(t,i,o){var l=xt,u=Wn.transition;try{Wn.transition=null,xt=1,M1(t,i,o,l)}finally{Wn.transition=u,xt=l}return null}function M1(t,i,o,l){do Ss();while(rr!==null);if(yt&6)throw Error(n(327));o=t.finishedWork;var u=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=o.lanes|o.childLanes;if(on(t,h),t===nn&&(Xt=nn=null,ln=0),!(o.subtreeFlags&2064)&&!(o.flags&2064)||Oa||(Oa=!0,dp(De,function(){return Ss(),null})),h=(o.flags&15990)!==0,o.subtreeFlags&15990||h){h=Wn.transition,Wn.transition=null;var M=xt;xt=1;var L=yt;yt|=4,$c.current=null,g1(t,o),Zh(o,t),V0(rc),Qo=!!ic,rc=ic=null,t.current=o,v1(o),ee(),yt=L,xt=M,Wn.transition=h}else t.current=o;if(Oa&&(Oa=!1,rr=t,za=u),h=t.pendingLanes,h===0&&(ir=null),mt(o.stateNode),bn(t,$()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)u=i[o],l(u.value,{componentStack:u.stack,digest:u.digest});if(Fa)throw Fa=!1,t=Qc,Qc=null,t;return za&1&&t.tag!==0&&Ss(),h=t.pendingLanes,h&1?t===Jc?wo++:(wo=0,Jc=t):wo=0,Ji(),null}function Ss(){if(rr!==null){var t=li(za),i=Wn.transition,o=xt;try{if(Wn.transition=null,xt=16>t?16:t,rr===null)var l=!1;else{if(t=rr,rr=null,za=0,yt&6)throw Error(n(331));var u=yt;for(yt|=4,Ie=t.current;Ie!==null;){var h=Ie,M=h.child;if(Ie.flags&16){var L=h.deletions;if(L!==null){for(var O=0;O<L.length;O++){var J=L[O];for(Ie=J;Ie!==null;){var ve=Ie;switch(ve.tag){case 0:case 11:case 15:Mo(8,ve,h)}var Se=ve.child;if(Se!==null)Se.return=ve,Ie=Se;else for(;Ie!==null;){ve=Ie;var ge=ve.sibling,Ne=ve.return;if(Xh(ve),ve===J){Ie=null;break}if(ge!==null){ge.return=Ne,Ie=ge;break}Ie=Ne}}}var ke=h.alternate;if(ke!==null){var He=ke.child;if(He!==null){ke.child=null;do{var Gt=He.sibling;He.sibling=null,He=Gt}while(He!==null)}}Ie=h}}if(h.subtreeFlags&2064&&M!==null)M.return=h,Ie=M;else e:for(;Ie!==null;){if(h=Ie,h.flags&2048)switch(h.tag){case 0:case 11:case 15:Mo(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,Ie=q;break e}Ie=h.return}}var V=t.current;for(Ie=V;Ie!==null;){M=Ie;var K=M.child;if(M.subtreeFlags&2064&&K!==null)K.return=M,Ie=K;else e:for(M=V;Ie!==null;){if(L=Ie,L.flags&2048)try{switch(L.tag){case 0:case 11:case 15:Na(9,L)}}catch(je){Vt(L,L.return,je)}if(L===M){Ie=null;break e}var Te=L.sibling;if(Te!==null){Te.return=L.return,Ie=Te;break e}Ie=L.return}}if(yt=u,Ji(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(Je,t)}catch{}l=!0}return l}finally{xt=o,Wn.transition=i}}return!1}function lp(t,i,o){i=vs(o,i),i=Ah(t,i,1),t=tr(t,i,1),i=Mn(),t!==null&&(Jt(t,1,i),bn(t,i))}function Vt(t,i,o){if(t.tag===3)lp(t,t,o);else for(;i!==null;){if(i.tag===3){lp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ir===null||!ir.has(l))){t=vs(o,t),t=Ch(i,t,1),i=tr(i,t,1),t=Mn(),i!==null&&(Jt(i,1,t),bn(i,t));break}}i=i.return}}function E1(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=Mn(),t.pingedLanes|=t.suspendedLanes&o,nn===t&&(ln&o)===o&&(Kt===4||Kt===3&&(ln&130023424)===ln&&500>$()-Zc?Dr(t,0):Kc|=o),bn(t,i)}function cp(t,i){i===0&&(t.mode&1?(i=Ht,Ht<<=1,!(Ht&130023424)&&(Ht=4194304)):i=1);var o=Mn();t=Ti(t,i),t!==null&&(Jt(t,i,o),bn(t,o))}function T1(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),cp(t,o)}function w1(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(o=u.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),cp(t,o)}var up;up=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||wn.current)Cn=!0;else{if(!(t.lanes&o)&&!(i.flags&128))return Cn=!1,f1(t,i,o);Cn=!!(t.flags&131072)}else Cn=!1,Ot&&i.flags&1048576&&Gf(i,ga,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var u=cs(i,dn.current);ms(i,o),u=Rc(null,i,l,t,u,o);var h=bc();return i.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,An(l)?(h=!0,ha(i)):h=!1,i.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,Sc(i),u.updater=ba,i.stateNode=u,u._reactInternals=i,Ic(i,l,t,o),i=kc(null,i,l,!0,h,o)):(i.tag=0,Ot&&h&&dc(i),Sn(null,i,u,o),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,u=l._init,l=u(l._payload),i.type=l,u=i.tag=C1(l),t=Zn(l,t),u){case 0:i=zc(null,i,l,t,o);break e;case 1:i=Fh(null,i,l,t,o);break e;case 11:i=Lh(null,i,l,t,o);break e;case 14:i=Dh(null,i,l,Zn(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),zc(t,i,l,u,o);case 1:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Fh(t,i,l,u,o);case 3:e:{if(Oh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,u=h.element,Qf(t,i),Ma(i,l,null,o);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){u=vs(Error(n(423)),i),i=zh(t,i,l,o,u);break e}else if(l!==u){u=vs(Error(n(424)),i),i=zh(t,i,l,o,u);break e}else for(In=Ki(i.stateNode.containerInfo.firstChild),Un=i,Ot=!0,Kn=null,o=Kf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(fs(),l===u){i=Ai(t,i,o);break e}Sn(t,i,l,o)}i=i.child}return i;case 5:return th(i),t===null&&pc(i),l=i.type,u=i.pendingProps,h=t!==null?t.memoizedProps:null,M=u.children,sc(l,u)?M=null:h!==null&&sc(l,h)&&(i.flags|=32),Ih(t,i),Sn(t,i,M,o),i.child;case 6:return t===null&&pc(i),null;case 13:return kh(t,i,o);case 4:return Mc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=hs(i,null,l,o):Sn(t,i,l,o),i.child;case 11:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),Lh(t,i,l,u,o);case 7:return Sn(t,i,i.pendingProps,o),i.child;case 8:return Sn(t,i,i.pendingProps.children,o),i.child;case 12:return Sn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,u=i.pendingProps,h=i.memoizedProps,M=u.value,Dt(xa,l._currentValue),l._currentValue=M,h!==null)if($n(h.value,M)){if(h.children===u.children&&!wn.current){i=Ai(t,i,o);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var O=L.firstContext;O!==null;){if(O.context===l){if(h.tag===1){O=wi(-1,o&-o),O.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?O.next=O:(O.next=ve.next,ve.next=O),J.pending=O}}h.lanes|=o,O=h.alternate,O!==null&&(O.lanes|=o),xc(h.return,o,i),L.lanes|=o;break}O=O.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=o,L=M.alternate,L!==null&&(L.lanes|=o),xc(M,o,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}Sn(t,i,u.children,o),i=i.child}return i;case 9:return u=i.type,l=i.pendingProps.children,ms(i,o),u=Vn(u),l=l(u),i.flags|=1,Sn(t,i,l,o),i.child;case 14:return l=i.type,u=Zn(l,i.pendingProps),u=Zn(l.type,u),Dh(t,i,l,u,o);case 15:return Nh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,u=i.pendingProps,u=i.elementType===l?u:Zn(l,u),La(t,i),i.tag=1,An(l)?(t=!0,ha(i)):t=!1,ms(i,o),Th(i,l,u),Ic(i,l,u,o),kc(null,i,l,!0,t,o);case 19:return Hh(t,i,o);case 22:return Uh(t,i,o)}throw Error(n(156,i.tag))};function dp(t,i){return $o(t,i)}function A1(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(t,i,o,l){return new A1(t,i,o,l)}function su(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C1(t){if(typeof t=="function")return su(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ae)return 11;if(t===me)return 14}return 2}function ar(t,i){var o=t.alternate;return o===null?(o=jn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Va(t,i,o,l,u,h){var M=2;if(l=t,typeof t=="function")su(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Ur(o.children,u,h,i);case X:M=8,u|=8;break;case R:return t=jn(12,o,i,u|2),t.elementType=R,t.lanes=h,t;case te:return t=jn(13,o,i,u),t.elementType=te,t.lanes=h,t;case de:return t=jn(19,o,i,u),t.elementType=de,t.lanes=h,t;case ce:return Ga(o,u,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case B:M=9;break e;case ae:M=11;break e;case me:M=14;break e;case oe:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=jn(M,o,i,u),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,o,l){return t=jn(7,t,l,i),t.lanes=o,t}function Ga(t,i,o,l){return t=jn(22,t,l,i),t.elementType=ce,t.lanes=o,t.stateNode={isHidden:!1},t}function ou(t,i,o){return t=jn(6,t,null,i),t.lanes=o,t}function au(t,i,o){return i=jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function R1(t,i,o,l,u){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=un(0),this.expirationTimes=un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=un(0),this.identifierPrefix=l,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function lu(t,i,o,l,u,h,M,L,O){return t=new R1(t,i,o,L,O),i===1?(i=1,h===!0&&(i|=8)):i=0,h=jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sc(h),t}function b1(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function fp(t){if(!t)return Qi;t=t._reactInternals;e:{if(ai(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(An(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(An(o))return Bf(t,o,i)}return i}function hp(t,i,o,l,u,h,M,L,O){return t=lu(o,l,!0,t,u,h,M,L,O),t.context=fp(null),o=t.current,l=Mn(),u=sr(o),h=wi(l,u),h.callback=i??null,tr(o,h,u),t.current.lanes=u,Jt(t,u,l),bn(t,l),t}function Wa(t,i,o,l){var u=i.current,h=Mn(),M=sr(u);return o=fp(o),i.context===null?i.context=o:i.pendingContext=o,i=wi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=tr(u,i,M),t!==null&&(ei(t,u,M,h),Sa(t,u,M)),M}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function pp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function cu(t,i){pp(t,i),(t=t.alternate)&&pp(t,i)}function P1(){return null}var mp=typeof reportError=="function"?reportError:function(t){console.error(t)};function uu(t){this._internalRoot=t}Xa.prototype.render=uu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Wa(t,i,null,null)},Xa.prototype.unmount=uu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Lr(function(){Wa(null,t,null,null)}),i[yi]=null}};function Xa(t){this._internalRoot=t}Xa.prototype.unstable_scheduleHydration=function(t){if(t){var i=Zd();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Yi.length&&i!==0&&i<Yi[o].priority;o++);Yi.splice(o,0,t),o===0&&ef(t)}};function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gp(){}function L1(t,i,o,l,u){if(u){if(typeof l=="function"){var h=l;l=function(){var J=ja(M);h.call(J)}}var M=hp(i,l,t,0,null,!1,!1,"",gp);return t._reactRootContainer=M,t[yi]=M.current,lo(t.nodeType===8?t.parentNode:t),Lr(),M}for(;u=t.lastChild;)t.removeChild(u);if(typeof l=="function"){var L=l;l=function(){var J=ja(O);L.call(J)}}var O=lu(t,0,!1,null,null,!1,!1,"",gp);return t._reactRootContainer=O,t[yi]=O.current,lo(t.nodeType===8?t.parentNode:t),Lr(function(){Wa(i,O,o,l)}),O}function qa(t,i,o,l,u){var h=o._reactRootContainer;if(h){var M=h;if(typeof u=="function"){var L=u;u=function(){var O=ja(M);L.call(O)}}Wa(i,M,t,u)}else M=L1(o,i,t,u,l);return ja(M)}$d=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=pt(i.pendingLanes);o!==0&&(en(i,o|1),bn(i,$()),!(yt&6)&&(ys=$()+500,Ji()))}break;case 13:Lr(function(){var l=Ti(t,1);if(l!==null){var u=Mn();ei(l,t,1,u)}}),cu(t,1)}},Fl=function(t){if(t.tag===13){var i=Ti(t,134217728);if(i!==null){var o=Mn();ei(i,t,134217728,o)}cu(t,134217728)}},Kd=function(t){if(t.tag===13){var i=sr(t),o=Ti(t,i);if(o!==null){var l=Mn();ei(o,t,i,l)}cu(t,i)}},Zd=function(){return xt},Qd=function(t,i){var o=xt;try{return xt=t,i()}finally{xt=o}},Ce=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var u=da(l);if(!u)throw Error(n(90));Lt(l),ut(l,u)}}}break;case"textarea":fe(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},Nt=nu,qt=Lr;var D1={usingClientEntryPoint:!1,Events:[fo,as,da,Pe,st,nu]},Ao={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N1={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Yo(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||P1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{Je=$a.inject(N1),Be=$a}catch{}}return Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1,Pn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!du(i))throw Error(n(200));return b1(t,i,null,o)},Pn.createRoot=function(t,i){if(!du(t))throw Error(n(299));var o=!1,l="",u=mp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(u=i.onRecoverableError)),i=lu(t,1,!1,null,null,o,!1,l,u),t[yi]=i.current,lo(t.nodeType===8?t.parentNode:t),new uu(i)},Pn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Yo(i),t=t===null?null:t.stateNode,t},Pn.flushSync=function(t){return Lr(t)},Pn.hydrate=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!0,o)},Pn.hydrateRoot=function(t,i,o){if(!du(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,u=!1,h="",M=mp;if(o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=hp(i,null,t,1,o??null,u,!1,h,M),t[yi]=i.current,lo(t),l)for(t=0;t<l.length;t++)o=l[t],u=o._getVersion,u=u(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,u]:i.mutableSourceEagerHydrationData.push(o,u);return new Xa(i)},Pn.render=function(t,i,o){if(!Ya(i))throw Error(n(200));return qa(null,t,i,!1,o)},Pn.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(Lr(function(){qa(null,null,t,!1,function(){t._reactRootContainer=null,t[yi]=null})}),!0):!1},Pn.unstable_batchedUpdates=nu,Pn.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ya(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return qa(t,i,o,!1,l)},Pn.version="18.3.1-next-f1338f8080-20240426",Pn}var Tp;function V1(){if(Tp)return pu.exports;Tp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),pu.exports=H1(),pu.exports}var wp;function G1(){if(wp)return Ka;wp=1;var s=V1();return Ka.createRoot=s.createRoot,Ka.hydrateRoot=s.hydrateRoot,Ka}var W1=G1();class j1 extends gr.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0}}componentDidCatch(e,n){console.error("ErrorBoundary caught an error",e,n),this.setState({error:e,errorInfo:n})}render(){return this.state.hasError?N.jsxs("div",{style:{padding:"20px",color:"red",backgroundColor:"#fdd"},children:[N.jsx("h2",{children:"Something went wrong."}),this.state.error&&N.jsxs("p",{children:[N.jsx("b",{children:"Error:"})," ",this.state.error.toString()]}),this.state.errorInfo&&N.jsxs("details",{style:{whiteSpace:"pre-wrap",marginTop:"10px"},children:[N.jsx("summary",{children:"Details"}),this.state.errorInfo.componentStack]})]}):this.props.children}}var Cm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ap=gr.createContext&&gr.createContext(Cm),X1=["attr","size","title"];function Y1(s,e){if(s==null)return{};var n=q1(s,e),r,a;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(s);for(a=0;a<c.length;a++)r=c[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(s,r)&&(n[r]=s[r])}return n}function q1(s,e){if(s==null)return{};var n={};for(var r in s)if(Object.prototype.hasOwnProperty.call(s,r)){if(e.indexOf(r)>=0)continue;n[r]=s[r]}return n}function Cl(){return Cl=Object.assign?Object.assign.bind():function(s){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(s[r]=n[r])}return s},Cl.apply(this,arguments)}function Cp(s,e){var n=Object.keys(s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(s,a).enumerable})),n.push.apply(n,r)}return n}function Rl(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Cp(Object(n),!0).forEach(function(r){$1(s,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(n)):Cp(Object(n)).forEach(function(r){Object.defineProperty(s,r,Object.getOwnPropertyDescriptor(n,r))})}return s}function $1(s,e,n){return e=K1(e),e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}function K1(s){var e=Z1(s,"string");return typeof e=="symbol"?e:e+""}function Z1(s,e){if(typeof s!="object"||!s)return s;var n=s[Symbol.toPrimitive];if(n!==void 0){var r=n.call(s,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(s)}function Rm(s){return s&&s.map((e,n)=>gr.createElement(e.tag,Rl({key:n},e.attr),Rm(e.child)))}function Et(s){return e=>gr.createElement(Q1,Cl({attr:Rl({},s.attr)},e),Rm(s.child))}function Q1(s){var e=n=>{var{attr:r,size:a,title:c}=s,d=Y1(s,X1),f=a||n.size||"1em",p;return n.className&&(p=n.className),s.className&&(p=(p?p+" ":"")+s.className),gr.createElement("svg",Cl({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,d,{className:p,style:Rl(Rl({color:s.color||n.color},n.style),s.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),c&&gr.createElement("title",null,c),s.children)};return Ap!==void 0?gr.createElement(Ap.Consumer,null,n=>e(n)):e(Cm)}function J1(s){return Et({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"},child:[]}]})(s)}function eg(s){return Et({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216.29 158.39H137C97 147.9 6.51 150.63 6.51 233.18c0 30.09 15 51.23 35 61-25.1 23-37 33.85-37 49.21 0 11 4.47 21.14 17.89 26.81C8.13 383.61 0 393.35 0 411.65c0 32.11 28.05 50.82 101.63 50.82 70.75 0 111.79-26.42 111.79-73.18 0-58.66-45.16-56.5-151.63-63l13.43-21.55c27.27 7.58 118.7 10 118.7-67.89 0-18.7-7.73-31.71-15-41.07l37.41-2.84zm-63.42 241.9c0 32.06-104.89 32.1-104.89 2.43 0-8.14 5.27-15 10.57-21.54 77.71 5.3 94.32 3.37 94.32 19.11zm-50.81-134.58c-52.8 0-50.46-71.16 1.2-71.16 49.54 0 50.82 71.16-1.2 71.16zm133.3 100.51v-32.1c26.75-3.66 27.24-2 27.24-11V203.61c0-8.5-2.05-7.38-27.24-16.26l4.47-32.92H324v168.71c0 6.51.4 7.32 6.51 8.14l20.73 2.84v32.1zm52.45-244.31c-23.17 0-36.59-13.43-36.59-36.61s13.42-35.77 36.59-35.77c23.58 0 37 12.62 37 35.77s-13.42 36.61-37 36.61zM512 350.46c-17.49 8.53-43.1 16.26-66.28 16.26-48.38 0-66.67-19.5-66.67-65.46V194.75c0-5.42 1.05-4.06-31.71-4.06V154.5c35.78-4.07 50-22 54.47-66.27h38.63c0 65.83-1.34 61.81 3.26 61.81H501v40.65h-60.56v97.15c0 6.92-4.92 51.41 60.57 26.84z"},child:[]}]})(s)}function Fs(s){return Et({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(s)}function tg(s){return Et({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"},child:[]}]})(s)}function ng(s){return Et({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"},child:[]}]})(s)}function ig(s){return Et({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"},child:[]}]})(s)}function rg(s){return Et({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(s)}function sg(s){return Et({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"},child:[]}]})(s)}function og(s){return Et({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"},child:[]}]})(s)}function ag(s){return Et({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"},child:[]}]})(s)}function lg(s){return Et({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"},child:[]}]})(s)}function cg(s){return Et({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(s)}function ug(s){return Et({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(s)}function Za(s){return Et({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"},child:[]}]})(s)}const dg=()=>{const[s,e]=Oi.useState(!1),[n,r]=Oi.useState("dark"),a=()=>{e(!s)},c=()=>{r(n==="light"?"dark":"light")};Oi.useEffect(()=>{document.body.className=n},[n]);const d=f=>{const p=document.getElementById(f);window.scrollTo({top:p.offsetTop-100,behavior:"smooth"}),a()};return N.jsxs("header",{className:"sticky top-0 z-10 shadow-lg w-full md:h-20 h-30",children:[N.jsxs("nav",{className:"mx-auto p-4 flex justify-between items-center",children:[N.jsxs("div",{className:"flex items-center space-x-2",children:[N.jsx("img",{src:"me.jpg",alt:"Logo",className:"h-12 w-12 rounded-full"}),N.jsx("span",{className:"text-xl font-semibold",children:"Portfolio"})]}),N.jsxs("div",{className:"hidden md:flex justify-center flex-grow space-x-2",children:[N.jsx("a",{href:"#home",className:"px-3 py-2 rounded",onClick:f=>{f.preventDefault(),d("home")},children:"Home"}),N.jsx("a",{href:"#projects",className:"px-3 py-2 rounded",onClick:f=>{f.preventDefault(),d("projects")},children:"Projects"}),N.jsx("a",{href:"#experience",className:"px-3 py-2 rounded",onClick:f=>{f.preventDefault(),d("experience")},children:"Experience"}),N.jsx("a",{href:"#skills",className:"px-3 py-2 rounded",onClick:f=>{f.preventDefault(),d("skills")},children:"Skills"}),N.jsx("a",{href:"#education",className:"px-3 py-2 rounded",onClick:f=>{f.preventDefault(),d("education")},children:"Education"}),N.jsx("a",{href:"#contact",className:"px-3 py-2 rounded",onClick:f=>{f.preventDefault(),d("contact")},children:"Contact"})]}),N.jsx("button",{onClick:c,className:"md:flex hidden",children:n==="dark"?N.jsx(Za,{className:"p-2 rounded-full text-yellow-400 text-4xl hover:bg-gray-900",title:"Light Mode"}):N.jsx(Za,{className:"p-2 rounded-full text-black text-4xl hover:bg-gray-200",title:"Dark Mode"})}),N.jsxs("div",{className:"md:hidden flex items-center space-x-4",children:[N.jsx("button",{onClick:c,children:n==="dark"?N.jsx(Za,{className:"p-2 rounded-full text-yellow-400 text-3xl hover:bg-gray-900",title:"Light Mode"}):N.jsx(Za,{className:"p-2 rounded-full text-black text-3xl hover:bg-gray-200",title:"Dark Mode"})}),N.jsx("button",{onClick:a,children:N.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),s&&N.jsxs("div",{className:"md:hidden bg-gray-800 text-white py-4 space-y-4",children:[N.jsx("a",{href:"#home",className:"block px-4 py-2",onClick:f=>{f.preventDefault(),d("home")},children:"Home"}),N.jsx("a",{href:"#projects",className:"block px-4 py-2",onClick:f=>{f.preventDefault(),d("projects")},children:"Projects"}),N.jsx("a",{href:"#experience",className:"block px-4 py-2",onClick:f=>{f.preventDefault(),d("experience")},children:"Experience"}),N.jsx("a",{href:"#skills",className:"block px-4 py-2",onClick:f=>{f.preventDefault(),d("skills")},children:"Skills"}),N.jsx("a",{href:"#education",className:"block px-4 py-2",onClick:f=>{f.preventDefault(),d("education")},children:"Education"}),N.jsx("a",{href:"#contact",className:"block px-4 py-2",onClick:f=>{f.preventDefault(),d("contact")},children:"Contact"})]})]})};function fg({children:s,className:e="",colors:n=["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:r=8,showBorder:a=!1}){const c={backgroundImage:`linear-gradient(to right, ${n.join(", ")})`,animationDuration:`${r}s`};return N.jsxs("div",{className:`animated-gradient-text ${e}`,children:[a&&N.jsx("div",{className:"gradient-overlay",style:c}),N.jsx("div",{className:"text-content",style:c,children:s})]})}const Os=({onClick:s,text:e,disabled:n=!1,speed:r=5,className:a=""})=>{const c=`${r}s`;return N.jsx("div",{className:`shiny-text ${n?"disabled":""} ${a}`,style:{animationDuration:c},onClick:s,children:e})},jr=({children:s,padding:e="1rem",className:n="",spotlightColor:r="rgba(255, 255, 255, 0.25)"})=>{const a=Oi.useRef(null),c=d=>{const f=a.current.getBoundingClientRect(),p=d.clientX-f.left,m=d.clientY-f.top;a.current.style.setProperty("--mouse-x",`${p}px`),a.current.style.setProperty("--mouse-y",`${m}px`),a.current.style.setProperty("--spotlight-color",r)};return N.jsx("div",{ref:a,onMouseMove:c,className:`card-spotlight ${n}`,style:{padding:e},children:s})},hg=()=>N.jsxs("section",{id:"home",className:"m-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center justify-around md:space-y-0 md:space-x-5",children:[N.jsxs("div",{className:"left flex-2 flex justify-center items-center p-5",children:[" ",N.jsxs("div",{className:"text-container flex flex-col items-center text-center",children:[" ",N.jsx("img",{src:"me.png",className:"w-1/3 align-middle"}),N.jsx(fg,{colors:["#40ffaa","#4079ff","#40ffaa","#4079ff","#40ffaa"],animationSpeed:3,showBorder:!1,className:"",children:"BRAMHA DESHMUKH"}),N.jsx(Os,{text:"Developer",disabled:!1,speed:1,className:"home"})]})]}),N.jsxs(jr,{className:"shadow-card p-5 right flex-1 max-w-2xl",spotlightColor:"rgba(0, 229, 255, 0.2)",padding:"none",children:[N.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Welcome to My Portfolio"}),N.jsx("p",{className:"text-base md:text-lg mb-3 leading-relaxed",children:"Hi, I'm Bramha Deshmukh. I'm a web and mobile application developer and passionate about creating impactful solutions."}),N.jsx("p",{className:"text-base md:text-lg leading-relaxed",children:"Enthusiastic student with a passion for coding and problem-solving, eager to dive into the world of software development. Excited to learn new technologies and collaborate with teams to create innovative solutions. Dedicated to growing my skills and making a positive impact in the tech community."})]})]});function pg(s){return Et({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",clipRule:"evenodd"},child:[]}]})(s)}const mg=()=>N.jsx("section",{id:"experience",className:"py-12 m-5",children:N.jsxs("div",{className:"container mx-auto px-4",children:[N.jsx("h2",{className:"text-3xl font-bold mb-8",children:"My Experience"}),N.jsxs("div",{className:"experience-item flex flex-col md:flex-row rounded-lg shadow-lg p-5 mb-6",style:{backgroundColor:"var(--bg-color)",boxShadow:"10px 10px 20px var(--shadow-color)",color:"var(--text-color)"},children:[N.jsxs("div",{className:"w-full md:w-1/3 flex flex-col justify-center items-start",children:[N.jsxs("h3",{className:"text-xl font-semibold mb-1",style:{color:"var(--main-heading)"},children:["Technical Intern",N.jsx("a",{href:"./certificates/Indicus_Internship_certificate.pdf",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center pl-2 pt-2",style:{backgroundColor:"transparent",boxShadow:"none",color:"var(--btn-color)"},title:"View Certificate",children:N.jsx(pg,{className:"text-lg"})})]}),N.jsx("p",{className:"mb-2",children:"Indicus Software Pvt Ltd."}),N.jsx("span",{className:"text-sm font-medium",children:"October 2024 - November 2024"})]}),N.jsxs("div",{className:"w-full md:w-2/3 mt-4 md:mt-0",children:[N.jsxs("ul",{className:"list-disc ml-5 leading-relaxed",children:[N.jsxs("li",{children:["Contributed to software development using the company's product, ",N.jsx("b",{children:"Contineo"}),", an industry-agnostic platform."]}),N.jsx("li",{children:"Worked on distributed data acquisition, analytics, and application enablement using AI X IoT technologies."}),N.jsx("li",{children:"Developed and integrated AI agents."}),N.jsx("li",{children:"Participated in building innovative solutions to enhance platform capabilities."})]}),N.jsx("div",{className:"mt-4"})]})]})]})});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="176",gg=0,Rp=1,vg=2,bm=1,_g=2,Ni=3,xr=0,Dn=1,Ui=2,vr=0,ks=1,bp=2,Pp=3,Lp=4,xg=5,Gr=100,yg=101,Sg=102,Mg=103,Eg=104,Tg=200,wg=201,Ag=202,Cg=203,Yu=204,qu=205,Rg=206,bg=207,Pg=208,Lg=209,Dg=210,Ng=211,Ug=212,Ig=213,Fg=214,$u=0,Ku=1,Zu=2,Hs=3,Qu=4,Ju=5,ed=6,td=7,Pm=0,Og=1,zg=2,_r=0,kg=1,Bg=2,Hg=3,Vg=4,Gg=5,Wg=6,jg=7,Lm=300,Vs=301,Gs=302,nd=303,id=304,Ll=306,rd=1e3,Xr=1001,sd=1002,oi=1003,Xg=1004,Qa=1005,pi=1006,vu=1007,Yr=1008,ki=1009,Dm=1010,Nm=1011,Uo=1012,Od=1013,$r=1014,Ii=1015,ko=1016,zd=1017,kd=1018,Io=1020,Um=35902,Im=1021,Fm=1022,si=1023,Fo=1026,Oo=1027,Om=1028,Bd=1029,zm=1030,Hd=1031,Vd=1033,yl=33776,Sl=33777,Ml=33778,El=33779,od=35840,ad=35841,ld=35842,cd=35843,ud=36196,dd=37492,fd=37496,hd=37808,pd=37809,md=37810,gd=37811,vd=37812,_d=37813,xd=37814,yd=37815,Sd=37816,Md=37817,Ed=37818,Td=37819,wd=37820,Ad=37821,Tl=36492,Cd=36494,Rd=36495,km=36283,bd=36284,Pd=36285,Ld=36286,Yg=3200,qg=3201,$g=0,Kg=1,mr="",Yn="srgb",Ws="srgb-linear",bl="linear",At="srgb",Ms=7680,Dp=519,Zg=512,Qg=513,Jg=514,Bm=515,ev=516,tv=517,nv=518,iv=519,Np=35044,Up="300 es",Fi=2e3,Pl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const c=a.indexOf(n);c!==-1&&a.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let c=0,d=a.length;c<d;c++)a[c].call(this,e);e.target=null}}}const mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_u=Math.PI/180,Dd=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[n&63|128]+mn[n>>8&255]+"-"+mn[n>>16&255]+mn[n>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function rv(s,e){return(s%e+e)%e}function xu(s,e,n){return(1-n)*s+n*e}function Ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ln(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(e=0,n=0){Rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*a+e.x,this.y=c*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,c,d,f,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m)}set(e,n,r,a,c,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=n,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],_=r[7],x=r[2],S=r[5],w=r[8],C=a[0],y=a[3],g=a[6],I=a[1],D=a[4],b=a[7],W=a[2],H=a[5],F=a[8];return c[0]=d*C+f*I+p*W,c[3]=d*y+f*D+p*H,c[6]=d*g+f*b+p*F,c[1]=m*C+v*I+_*W,c[4]=m*y+v*D+_*H,c[7]=m*g+v*b+_*F,c[2]=x*C+S*I+w*W,c[5]=x*y+S*D+w*H,c[8]=x*g+S*b+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return n*d*v-n*f*m-r*c*v+r*f*p+a*c*m-a*d*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=v*d-f*m,x=f*p-v*c,S=m*c-d*p,w=n*_+r*x+a*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(a*m-v*r)*C,e[2]=(f*r-a*d)*C,e[3]=x*C,e[4]=(v*n-a*p)*C,e[5]=(a*c-f*n)*C,e[6]=S*C,e[7]=(r*p-m*n)*C,e[8]=(d*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-a*m,a*p,-a*(-m*d+p*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new at;function Hm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function zo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function sv(){const s=zo("canvas");return s.style.display="block",s}const Ip={};function wl(s){s in Ip||(Ip[s]=!0,console.warn(s))}function ov(s,e,n){return new Promise(function(r,a){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}function av(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lv(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Fp=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Op=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cv(){const s={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(a,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===At&&(a.r=zi(a.r),a.g=zi(a.g),a.b=zi(a.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[c].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===At&&(a.r=Bs(a.r),a.g=Bs(a.g),a.b=Bs(a.b))),a},fromWorkingColorSpace:function(a,c){return this.convert(a,this.workingColorSpace,c)},toWorkingColorSpace:function(a,c){return this.convert(a,c,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mr?bl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,c=this.workingColorSpace){return a.fromArray(this.spaces[c].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,c,d){return a.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ws]:{primaries:e,whitePoint:r,transfer:bl,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Yn},outputColorSpaceConfig:{drawingBufferColorSpace:Yn}},[Yn]:{primaries:e,whitePoint:r,transfer:At,toXYZ:Fp,fromXYZ:Op,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Yn}}}),s}const Mt=cv();function zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Bs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Es;class uv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Es===void 0&&(Es=zo("canvas")),Es.width=e.width,Es.height=e.height;const a=Es.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Es}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zo("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),c=a.data;for(let d=0;d<c.length;d++)c[d]=zi(c[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(zi(n[r]/255)*255):n[r]=zi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dv=0;class Gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let c;if(Array.isArray(a)){c=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?c.push(Su(a[d].image)):c.push(Su(a[d]))}else c=Su(a);r.url=c}return n||(e.images[this.uuid]=r),r}}function Su(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uv.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fv=0;class vn extends Xs{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,r=Xr,a=Xr,c=pi,d=Yr,f=si,p=ki,m=vn.DEFAULT_ANISOTROPY,v=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fv++}),this.uuid=Bo(),this.name="",this.source=new Gd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isTextureArray=e.isTextureArray,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rd:e.x=e.x-Math.floor(e.x);break;case Xr:e.x=e.x<0?0:1;break;case sd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rd:e.y=e.y-Math.floor(e.y);break;case Xr:e.y=e.y<0?0:1;break;case sd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Lm;vn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,n=0,r=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,c;const p=e.elements,m=p[0],v=p[4],_=p[8],x=p[1],S=p[5],w=p[9],C=p[2],y=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(_-C)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(_+C)<.1&&Math.abs(w+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const D=(m+1)/2,b=(S+1)/2,W=(g+1)/2,H=(v+x)/4,F=(_+C)/4,X=(w+y)/4;return D>b&&D>W?D<.01?(r=0,a=.707106781,c=.707106781):(r=Math.sqrt(D),a=H/r,c=F/r):b>W?b<.01?(r=.707106781,a=0,c=.707106781):(a=Math.sqrt(b),r=H/a,c=X/a):W<.01?(r=.707106781,a=.707106781,c=0):(c=Math.sqrt(W),r=F/c,a=X/c),this.set(r,a,c,n),this}let I=Math.sqrt((y-w)*(y-w)+(_-C)*(_-C)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-w)/I,this.y=(_-C)/I,this.z=(x-v)/I,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends Xs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth?r.depth:1,this.scissor=new Wt(0,0,e,n),this.scissorTest=!1,this.viewport=new Wt(0,0,e,n);const a={width:e,height:n,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new vn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,c=this.textures.length;a<c;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Gd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends hv{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Vm extends vn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pv extends vn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=oi,this.minFilter=oi,this.wrapR=Xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,c,d,f){let p=r[a+0],m=r[a+1],v=r[a+2],_=r[a+3];const x=c[d+0],S=c[d+1],w=c[d+2],C=c[d+3];if(f===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=w,e[n+3]=C;return}if(_!==C||p!==x||m!==S||v!==w){let y=1-f;const g=p*x+m*S+v*w+_*C,I=g>=0?1:-1,D=1-g*g;if(D>Number.EPSILON){const W=Math.sqrt(D),H=Math.atan2(W,g*I);y=Math.sin(y*H)/W,f=Math.sin(f*H)/W}const b=f*I;if(p=p*y+x*b,m=m*y+S*b,v=v*y+w*b,_=_*y+C*b,y===1-f){const W=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=W,m*=W,v*=W,_*=W}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,a,c,d){const f=r[a],p=r[a+1],m=r[a+2],v=r[a+3],_=c[d],x=c[d+1],S=c[d+2],w=c[d+3];return e[n]=f*w+v*_+p*S-m*x,e[n+1]=p*w+v*x+m*_-f*S,e[n+2]=m*w+v*S+f*x-p*_,e[n+3]=v*w-f*_-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(a/2),_=f(c/2),x=p(r/2),S=p(a/2),w=p(c/2);switch(d){case"XYZ":this._x=x*v*_+m*S*w,this._y=m*S*_-x*v*w,this._z=m*v*w+x*S*_,this._w=m*v*_-x*S*w;break;case"YXZ":this._x=x*v*_+m*S*w,this._y=m*S*_-x*v*w,this._z=m*v*w-x*S*_,this._w=m*v*_+x*S*w;break;case"ZXY":this._x=x*v*_-m*S*w,this._y=m*S*_+x*v*w,this._z=m*v*w+x*S*_,this._w=m*v*_-x*S*w;break;case"ZYX":this._x=x*v*_-m*S*w,this._y=m*S*_+x*v*w,this._z=m*v*w-x*S*_,this._w=m*v*_+x*S*w;break;case"YZX":this._x=x*v*_+m*S*w,this._y=m*S*_+x*v*w,this._z=m*v*w-x*S*_,this._w=m*v*_-x*S*w;break;case"XZY":this._x=x*v*_-m*S*w,this._y=m*S*_-x*v*w,this._z=m*v*w+x*S*_,this._w=m*v*_+x*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],c=n[8],d=n[1],f=n[5],p=n[9],m=n[2],v=n[6],_=n[10],x=r+f+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(d-a)*S}else if(r>f&&r>_){const S=2*Math.sqrt(1+r-f-_);this._w=(v-p)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(c+m)/S}else if(f>_){const S=2*Math.sqrt(1+f-r-_);this._w=(c-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+_-r-f);this._w=(d-a)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,c=e._z,d=e._w,f=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+d*f+a*m-c*p,this._y=a*v+d*p+c*f-r*m,this._z=c*v+d*m+r*p-a*f,this._w=d*v-r*f-a*p-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=c,this;const p=1-f*f;if(p<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*c+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,f),_=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=a*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,r=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*a,this.y=c[1]*n+c[4]*r+c[7]*a,this.z=c[2]*n+c[5]*r+c[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*a+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*a+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*a+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*a+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*a-f*r),v=2*(f*n-c*a),_=2*(c*r-d*n);return this.x=n+p*m+d*_-f*v,this.y=r+p*v+f*m-c*_,this.z=a+p*_+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*a,this.y=c[1]*n+c[5]*r+c[9]*a,this.z=c[2]*n+c[6]*r+c[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=a*p-c*f,this.y=c*d-r*p,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new ie,zp=new Ho;class Vo{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(ti.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(ti.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=ti.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ti):ti.fromBufferAttribute(c,d),ti.applyMatrix4(e.matrixWorld),this.expandByPoint(ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ja.copy(r.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let c=0,d=a.length;c<d;c++)this.expandByObject(a[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ti),ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),el.subVectors(this.max,bo),Ts.subVectors(e.a,bo),ws.subVectors(e.b,bo),As.subVectors(e.c,bo),cr.subVectors(ws,Ts),ur.subVectors(As,ws),Ir.subVectors(Ts,As);let n=[0,-cr.z,cr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,cr.z,0,-cr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-cr.y,cr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!Eu(n,Ts,ws,As,el)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,Ts,ws,As,el))?!1:(tl.crossVectors(cr,ur),n=[tl.x,tl.y,tl.z],Eu(n,Ts,ws,As,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],ti=new ie,Ja=new Vo,Ts=new ie,ws=new ie,As=new ie,cr=new ie,ur=new ie,Ir=new ie,bo=new ie,el=new ie,tl=new ie,Fr=new ie;function Eu(s,e,n,r,a){for(let c=0,d=s.length-3;c<=d;c+=3){Fr.fromArray(s,c);const f=a.x*Math.abs(Fr.x)+a.y*Math.abs(Fr.y)+a.z*Math.abs(Fr.z),p=e.dot(Fr),m=n.dot(Fr),v=r.dot(Fr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const mv=new Vo,Po=new ie,Tu=new ie;class Wd{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):mv.setFromPoints(e).getCenter(r);let a=0;for(let c=0,d=e.length;c<d;c++)a=Math.max(a,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Tu)),this.expandByPoint(Po.copy(e.center).sub(Tu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new ie,wu=new ie,nl=new ie,dr=new ie,Au=new ie,il=new ie,Cu=new ie;class Gm{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){wu.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),dr.copy(this.origin).sub(wu);const c=e.distanceTo(n)*.5,d=-this.direction.dot(nl),f=dr.dot(this.direction),p=-dr.dot(nl),m=dr.lengthSq(),v=Math.abs(1-d*d);let _,x,S,w;if(v>0)if(_=d*p-f,x=d*f-p,w=c*v,_>=0)if(x>=-w)if(x<=w){const C=1/v;_*=C,x*=C,S=_*(_+d*x+2*f)+x*(d*_+x+2*p)+m}else x=c,_=Math.max(0,-(d*x+f)),S=-_*_+x*(x+2*p)+m;else x=-c,_=Math.max(0,-(d*x+f)),S=-_*_+x*(x+2*p)+m;else x<=-w?(_=Math.max(0,-(-d*c+f)),x=_>0?-c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m):x<=w?(_=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(_=Math.max(0,-(d*c+f)),x=_>0?c:Math.min(Math.max(-c,-p),c),S=-_*_+x*(x+2*p)+m);else x=d>0?-c:c,_=Math.max(0,-(d*x+f)),S=-_*_+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(wu).addScaledVector(nl,x),S}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const r=bi.dot(this.direction),a=bi.dot(bi)-r*r,c=e.radius*e.radius;if(a>c)return null;const d=Math.sqrt(c-a),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,c,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(c=(e.min.y-x.y)*v,d=(e.max.y-x.y)*v):(c=(e.max.y-x.y)*v,d=(e.min.y-x.y)*v),r>d||c>a||((c>r||isNaN(r))&&(r=c),(d<a||isNaN(a))&&(a=d),_>=0?(f=(e.min.z-x.z)*_,p=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,p=(e.min.z-x.z)*_),r>p||f>a)||((f>r||r!==r)&&(r=f),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,r,a,c){Au.subVectors(n,e),il.subVectors(r,e),Cu.crossVectors(Au,il);let d=this.direction.dot(Cu),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;dr.subVectors(this.origin,e);const p=f*this.direction.dot(il.crossVectors(dr,il));if(p<0)return null;const m=f*this.direction.dot(Au.cross(dr));if(m<0||p+m>d)return null;const v=-f*dr.dot(Cu);return v<0?null:this.at(v/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,n,r,a,c,d,f,p,m,v,_,x,S,w,C,y){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,c,d,f,p,m,v,_,x,S,w,C,y)}set(e,n,r,a,c,d,f,p,m,v,_,x,S,w,C,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=c,g[5]=d,g[9]=f,g[13]=p,g[2]=m,g[6]=v,g[10]=_,g[14]=x,g[3]=S,g[7]=w,g[11]=C,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/Cs.setFromMatrixColumn(e,0).length(),c=1/Cs.setFromMatrixColumn(e,1).length(),d=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*v,S=d*_,w=f*v,C=f*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=S+w*m,n[5]=x-C*m,n[9]=-f*p,n[2]=C-x*m,n[6]=w+S*m,n[10]=d*p}else if(e.order==="YXZ"){const x=p*v,S=p*_,w=m*v,C=m*_;n[0]=x+C*f,n[4]=w*f-S,n[8]=d*m,n[1]=d*_,n[5]=d*v,n[9]=-f,n[2]=S*f-w,n[6]=C+x*f,n[10]=d*p}else if(e.order==="ZXY"){const x=p*v,S=p*_,w=m*v,C=m*_;n[0]=x-C*f,n[4]=-d*_,n[8]=w+S*f,n[1]=S+w*f,n[5]=d*v,n[9]=C-x*f,n[2]=-d*m,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const x=d*v,S=d*_,w=f*v,C=f*_;n[0]=p*v,n[4]=w*m-S,n[8]=x*m+C,n[1]=p*_,n[5]=C*m+x,n[9]=S*m-w,n[2]=-m,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const x=d*p,S=d*m,w=f*p,C=f*m;n[0]=p*v,n[4]=C-x*_,n[8]=w*_+S,n[1]=_,n[5]=d*v,n[9]=-f*v,n[2]=-m*v,n[6]=S*_+w,n[10]=x-C*_}else if(e.order==="XZY"){const x=d*p,S=d*m,w=f*p,C=f*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=x*_+C,n[5]=d*v,n[9]=S*_-w,n[2]=w*_-S,n[6]=f*v,n[10]=C*_+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gv,e,vv)}lookAt(e,n,r){const a=this.elements;return On.subVectors(e,n),On.lengthSq()===0&&(On.z=1),On.normalize(),fr.crossVectors(r,On),fr.lengthSq()===0&&(Math.abs(r.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),fr.crossVectors(r,On)),fr.normalize(),rl.crossVectors(On,fr),a[0]=fr.x,a[4]=rl.x,a[8]=On.x,a[1]=fr.y,a[5]=rl.y,a[9]=On.y,a[2]=fr.z,a[6]=rl.z,a[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],_=r[5],x=r[9],S=r[13],w=r[2],C=r[6],y=r[10],g=r[14],I=r[3],D=r[7],b=r[11],W=r[15],H=a[0],F=a[4],X=a[8],R=a[12],A=a[1],B=a[5],ae=a[9],te=a[13],de=a[2],me=a[6],oe=a[10],ce=a[14],k=a[3],le=a[7],se=a[11],U=a[15];return c[0]=d*H+f*A+p*de+m*k,c[4]=d*F+f*B+p*me+m*le,c[8]=d*X+f*ae+p*oe+m*se,c[12]=d*R+f*te+p*ce+m*U,c[1]=v*H+_*A+x*de+S*k,c[5]=v*F+_*B+x*me+S*le,c[9]=v*X+_*ae+x*oe+S*se,c[13]=v*R+_*te+x*ce+S*U,c[2]=w*H+C*A+y*de+g*k,c[6]=w*F+C*B+y*me+g*le,c[10]=w*X+C*ae+y*oe+g*se,c[14]=w*R+C*te+y*ce+g*U,c[3]=I*H+D*A+b*de+W*k,c[7]=I*F+D*B+b*me+W*le,c[11]=I*X+D*ae+b*oe+W*se,c[15]=I*R+D*te+b*ce+W*U,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],_=e[6],x=e[10],S=e[14],w=e[3],C=e[7],y=e[11],g=e[15];return w*(+c*p*_-a*m*_-c*f*x+r*m*x+a*f*S-r*p*S)+C*(+n*p*S-n*m*x+c*d*x-a*d*S+a*m*v-c*p*v)+y*(+n*m*_-n*f*S-c*d*_+r*d*S+c*f*v-r*m*v)+g*(-a*f*v-n*p*_+n*f*x+a*d*_-r*d*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=e[9],x=e[10],S=e[11],w=e[12],C=e[13],y=e[14],g=e[15],I=_*y*m-C*x*m+C*p*S-f*y*S-_*p*g+f*x*g,D=w*x*m-v*y*m-w*p*S+d*y*S+v*p*g-d*x*g,b=v*C*m-w*_*m+w*f*S-d*C*S-v*f*g+d*_*g,W=w*_*p-v*C*p-w*f*x+d*C*x+v*f*y-d*_*y,H=n*I+r*D+a*b+c*W;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return e[0]=I*F,e[1]=(C*x*c-_*y*c-C*a*S+r*y*S+_*a*g-r*x*g)*F,e[2]=(f*y*c-C*p*c+C*a*m-r*y*m-f*a*g+r*p*g)*F,e[3]=(_*p*c-f*x*c-_*a*m+r*x*m+f*a*S-r*p*S)*F,e[4]=D*F,e[5]=(v*y*c-w*x*c+w*a*S-n*y*S-v*a*g+n*x*g)*F,e[6]=(w*p*c-d*y*c-w*a*m+n*y*m+d*a*g-n*p*g)*F,e[7]=(d*x*c-v*p*c+v*a*m-n*x*m-d*a*S+n*p*S)*F,e[8]=b*F,e[9]=(w*_*c-v*C*c-w*r*S+n*C*S+v*r*g-n*_*g)*F,e[10]=(d*C*c-w*f*c+w*r*m-n*C*m-d*r*g+n*f*g)*F,e[11]=(v*f*c-d*_*c-v*r*m+n*_*m+d*r*S-n*f*S)*F,e[12]=W*F,e[13]=(v*C*a-w*_*a+w*r*x-n*C*x-v*r*y+n*_*y)*F,e[14]=(w*f*a-d*C*a-w*r*p+n*C*p+d*r*y-n*f*y)*F,e[15]=(d*_*a-v*f*a+v*r*p-n*_*p-d*r*x+n*f*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,c=e.z;return n[0]*=r,n[4]*=a,n[8]*=c,n[1]*=r,n[5]*=a,n[9]*=c,n[2]*=r,n[6]*=a,n[10]*=c,n[3]*=r,n[7]*=a,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,v=c*f;return this.set(m*d+r,m*f-a*p,m*p+a*f,0,m*f+a*p,v*f+r,v*p-a*d,0,m*p-a*f,v*p+a*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,c,d){return this.set(1,r,c,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,m=c+c,v=d+d,_=f+f,x=c*m,S=c*v,w=c*_,C=d*v,y=d*_,g=f*_,I=p*m,D=p*v,b=p*_,W=r.x,H=r.y,F=r.z;return a[0]=(1-(C+g))*W,a[1]=(S+b)*W,a[2]=(w-D)*W,a[3]=0,a[4]=(S-b)*H,a[5]=(1-(x+g))*H,a[6]=(y+I)*H,a[7]=0,a[8]=(w+D)*F,a[9]=(y-I)*F,a[10]=(1-(x+C))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let c=Cs.set(a[0],a[1],a[2]).length();const d=Cs.set(a[4],a[5],a[6]).length(),f=Cs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(c=-c),e.x=a[12],e.y=a[13],e.z=a[14],ni.copy(this);const m=1/c,v=1/d,_=1/f;return ni.elements[0]*=m,ni.elements[1]*=m,ni.elements[2]*=m,ni.elements[4]*=v,ni.elements[5]*=v,ni.elements[6]*=v,ni.elements[8]*=_,ni.elements[9]*=_,ni.elements[10]*=_,n.setFromRotationMatrix(ni),r.x=c,r.y=d,r.z=f,this}makePerspective(e,n,r,a,c,d,f=Fi){const p=this.elements,m=2*c/(n-e),v=2*c/(r-a),_=(n+e)/(n-e),x=(r+a)/(r-a);let S,w;if(f===Fi)S=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(f===Pl)S=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=m,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,c,d,f=Fi){const p=this.elements,m=1/(n-e),v=1/(r-a),_=1/(d-c),x=(n+e)*m,S=(r+a)*v;let w,C;if(f===Fi)w=(d+c)*_,C=-2*_;else if(f===Pl)w=c*_,C=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=C,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Cs=new ie,ni=new jt,gv=new ie(0,0,0),vv=new ie(1,1,1),fr=new ie,rl=new ie,On=new ie,kp=new jt,Bp=new Ho;class Bi{constructor(e=0,n=0,r=0,a=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,c=a[0],d=a[4],f=a[8],p=a[1],m=a[5],v=a[9],_=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(gt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _v=0;const Hp=new ie,Rs=new Ho,Pi=new jt,sl=new ie,Lo=new ie,xv=new ie,yv=new Ho,Vp=new ie(1,0,0),Gp=new ie(0,1,0),Wp=new ie(0,0,1),jp={type:"added"},Sv={type:"removed"},bs={type:"childadded",child:null},Ru={type:"childremoved",child:null};class kn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new ie,n=new Bi,r=new Ho,a=new ie(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new jt},normalMatrix:{value:new at}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(Wp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(Wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Lo,sl,this.up):Pi.lookAt(sl,Lo,this.up),this.quaternion.setFromRotationMatrix(Pi),a&&(Pi.extractRotation(a.matrixWorld),Rs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jp),bs.child=e,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Sv),Ru.child=e,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jp),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,xv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,yv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let c=0,d=a.length;c<d;c++)a[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?{min:f.boundingBox.min.toArray(),max:f.boundingBox.max.toArray()}:void 0,boundingSphere:f.boundingSphere?{radius:f.boundingSphere.radius,center:f.boundingSphere.center.toArray()}:void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];c(e.shapes,_)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));a.material=f}else a.material=c(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];a.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),_=d(e.shapes),x=d(e.skeletons),S=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=a,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}kn.DEFAULT_UP=new ie(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new ie,Li=new ie,bu=new ie,Di=new ie,Ps=new ie,Ls=new ie,Xp=new ie,Pu=new ie,Lu=new ie,Du=new ie,Nu=new Wt,Uu=new Wt,Iu=new Wt;class ri{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ii.subVectors(e,n),a.cross(ii);const c=a.lengthSq();return c>0?a.multiplyScalar(1/Math.sqrt(c)):a.set(0,0,0)}static getBarycoord(e,n,r,a,c){ii.subVectors(a,n),Li.subVectors(r,n),bu.subVectors(e,n);const d=ii.dot(ii),f=ii.dot(Li),p=ii.dot(bu),m=Li.dot(Li),v=Li.dot(bu),_=d*m-f*f;if(_===0)return c.set(0,0,0),null;const x=1/_,S=(m*p-f*v)*x,w=(d*v-f*p)*x;return c.set(1-S-w,w,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,r,a,c,d,f,p){return this.getBarycoord(e,n,r,a,Di)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Di.x),p.addScaledVector(d,Di.y),p.addScaledVector(f,Di.z),p)}static getInterpolatedAttribute(e,n,r,a,c,d){return Nu.setScalar(0),Uu.setScalar(0),Iu.setScalar(0),Nu.fromBufferAttribute(e,n),Uu.fromBufferAttribute(e,r),Iu.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Nu,c.x),d.addScaledVector(Uu,c.y),d.addScaledVector(Iu,c.z),d}static isFrontFacing(e,n,r,a){return ii.subVectors(r,n),Li.subVectors(e,n),ii.cross(Li).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ii.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ii.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,c){return ri.getInterpolation(e,this.a,this.b,this.c,n,r,a,c)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,c=this.c;let d,f;Ps.subVectors(a,r),Ls.subVectors(c,r),Pu.subVectors(e,r);const p=Ps.dot(Pu),m=Ls.dot(Pu);if(p<=0&&m<=0)return n.copy(r);Lu.subVectors(e,a);const v=Ps.dot(Lu),_=Ls.dot(Lu);if(v>=0&&_<=v)return n.copy(a);const x=p*_-v*m;if(x<=0&&p>=0&&v<=0)return d=p/(p-v),n.copy(r).addScaledVector(Ps,d);Du.subVectors(e,c);const S=Ps.dot(Du),w=Ls.dot(Du);if(w>=0&&S<=w)return n.copy(c);const C=S*m-p*w;if(C<=0&&m>=0&&w<=0)return f=m/(m-w),n.copy(r).addScaledVector(Ls,f);const y=v*w-S*_;if(y<=0&&_-v>=0&&S-w>=0)return Xp.subVectors(c,a),f=(_-v)/(_-v+(S-w)),n.copy(a).addScaledVector(Xp,f);const g=1/(y+C+x);return d=C*g,f=x*g,n.copy(r).addScaledVector(Ps,d).addScaledVector(Ls,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Wm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Fu(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=rv(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=Fu(d,c,e+1/3),this.g=Fu(d,c,e),this.b=Fu(d,c,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=Yn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=a[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const r=Wm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return Mt.fromWorkingColorSpace(gn.copy(this),e),Math.round(gt(gn.r*255,0,255))*65536+Math.round(gt(gn.g*255,0,255))*256+Math.round(gt(gn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(gn.copy(this),n);const r=gn.r,a=gn.g,c=gn.b,d=Math.max(r,a,c),f=Math.min(r,a,c);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const _=d-f;switch(m=v<=.5?_/(d+f):_/(2-d-f),d){case r:p=(a-c)/_+(a<c?6:0);break;case a:p=(c-r)/_+2;break;case c:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(gn.copy(this),n),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Yn){Mt.fromWorkingColorSpace(gn.copy(this),e);const n=gn.r,r=gn.g,a=gn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(hr),this.setHSL(hr.h+e,hr.s+n,hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(hr),e.getHSL(ol);const r=xu(hr.h,ol.h,n),a=xu(hr.s,ol.s,n),c=xu(hr.l,ol.l,n);return this.setHSL(r,a,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*a,this.g=c[1]*n+c[4]*r+c[7]*a,this.b=c[2]*n+c[5]*r+c[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gn=new Ct;Ct.NAMES=Wm;let Mv=0;class Dl extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=ks,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=qu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(r.blending=this.blending),this.side!==xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Yu&&(r.blendSrc=this.blendSrc),this.blendDst!==qu&&(r.blendDst=this.blendDst),this.blendEquation!==Gr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=a(e.textures),d=a(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let c=0;c!==a;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xd extends Dl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Pm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new ie,al=new Rt;let Ev=0;class gi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ev++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,c=this.itemSize;a<c;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix3(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyMatrix4(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.applyNormalMatrix(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Yt.fromBufferAttribute(this,n),Yt.transformDirection(e),this.setXYZ(n,Yt.x,Yt.y,Yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ro(n,this.array)),n}setX(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ro(n,this.array)),n}setY(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ro(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ro(n,this.array)),n}setW(e,n){return this.normalized&&(n=Ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,c){return e*=this.itemSize,this.normalized&&(n=Ln(n,this.array),r=Ln(r,this.array),a=Ln(a,this.array),c=Ln(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class jm extends gi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Xm extends gi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class qr extends gi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let Tv=0;const Xn=new jt,Ou=new kn,Ds=new ie,zn=new Vo,Do=new Vo,sn=new ie;class Zr extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tv++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hm(e)?Xm:jm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new at().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,n,r){return Xn.makeTranslation(e,n,r),this.applyMatrix4(Xn),this}scale(e,n,r){return Xn.makeScale(e,n,r),this.applyMatrix4(Xn),this}lookAt(e){return Ou.lookAt(e),Ou.updateMatrix(),this.applyMatrix4(Ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,c=e.length;a<c;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new qr(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const c=e[a];n.setXYZ(a,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const c=n[r];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Do.setFromBufferAttribute(f),this.morphTargetsRelative?(sn.addVectors(zn.min,Do.min),zn.expandByPoint(sn),sn.addVectors(zn.max,Do.max),zn.expandByPoint(sn)):(zn.expandByPoint(Do.min),zn.expandByPoint(Do.max))}zn.getCenter(r);let a=0;for(let c=0,d=e.count;c<d;c++)sn.fromBufferAttribute(e,c),a=Math.max(a,r.distanceToSquared(sn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)sn.fromBufferAttribute(f,m),p&&(Ds.fromBufferAttribute(e,m),sn.add(Ds)),a=Math.max(a,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let X=0;X<r.count;X++)f[X]=new ie,p[X]=new ie;const m=new ie,v=new ie,_=new ie,x=new Rt,S=new Rt,w=new Rt,C=new ie,y=new ie;function g(X,R,A){m.fromBufferAttribute(r,X),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,A),x.fromBufferAttribute(c,X),S.fromBufferAttribute(c,R),w.fromBufferAttribute(c,A),v.sub(m),_.sub(m),S.sub(x),w.sub(x);const B=1/(S.x*w.y-w.x*S.y);isFinite(B)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(_,-S.y).multiplyScalar(B),y.copy(_).multiplyScalar(S.x).addScaledVector(v,-w.x).multiplyScalar(B),f[X].add(C),f[R].add(C),f[A].add(C),p[X].add(y),p[R].add(y),p[A].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,R=I.length;X<R;++X){const A=I[X],B=A.start,ae=A.count;for(let te=B,de=B+ae;te<de;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const D=new ie,b=new ie,W=new ie,H=new ie;function F(X){W.fromBufferAttribute(a,X),H.copy(W);const R=f[X];D.copy(R),D.sub(W.multiplyScalar(W.dot(R))).normalize(),b.crossVectors(H,R);const B=b.dot(p[X])<0?-1:1;d.setXYZW(X,D.x,D.y,D.z,B)}for(let X=0,R=I.length;X<R;++X){const A=I[X],B=A.start,ae=A.count;for(let te=B,de=B+ae;te<de;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ie,c=new ie,d=new ie,f=new ie,p=new ie,m=new ie,v=new ie,_=new ie;if(e)for(let x=0,S=e.count;x<S;x+=3){const w=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,w),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,y),v.subVectors(d,c),_.subVectors(a,c),v.cross(_),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),f.add(v),p.add(v),m.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),c.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),v.subVectors(d,c),_.subVectors(a,c),v.cross(_),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)sn.fromBufferAttribute(e,n),sn.normalize(),e.setXYZ(n,sn.x,sn.y,sn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,_=f.normalized,x=new m.constructor(p.length*v);let S=0,w=0;for(let C=0,y=p.length;C<y;C++){f.isInterleavedBufferAttribute?S=p[C]*f.data.stride+f.offset:S=p[C]*v;for(let g=0;g<v;g++)x[w++]=m[S++]}return new gi(x,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zr,r=this.index.array,a=this.attributes;for(const f in a){const p=a[f],m=e(p,r);n.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let v=0,_=m.length;v<_;v++){const x=m[v],S=e(x,r);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,x=m.length;_<x;_++){const S=m[_];v.push(S.toJSON(e.data))}v.length>0&&(a[p]=v,c=!0)}c&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const c=e.morphAttributes;for(const m in c){const v=[],_=c[m];for(let x=0,S=_.length;x<S;x++)v.push(_[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yp=new jt,Or=new Gm,ll=new Wd,qp=new ie,cl=new ie,ul=new ie,dl=new ie,zu=new ie,fl=new ie,$p=new ie,hl=new ie;class mi extends kn{constructor(e=new Zr,n=new Xd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=a.length;c<d;c++){const f=a[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(c&&f){fl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=f[p],_=c[p];v!==0&&(zu.fromBufferAttribute(_,e),d?fl.addScaledVector(zu,v):fl.addScaledVector(zu.sub(n),v))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,c=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(c),Or.copy(e.ray).recast(e.near),!(ll.containsPoint(Or.origin)===!1&&(Or.intersectSphere(ll,qp)===null||Or.origin.distanceToSquared(qp)>(e.far-e.near)**2))&&(Yp.copy(c).invert(),Or.copy(e.ray).applyMatrix4(Yp),!(r.boundingBox!==null&&Or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,r){let a;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,_=c.attributes.normal,x=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,C=x.length;w<C;w++){const y=x[w],g=d[y.materialIndex],I=Math.max(y.start,S.start),D=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,W=D;b<W;b+=3){const H=f.getX(b),F=f.getX(b+1),X=f.getX(b+2);a=pl(this,g,e,r,m,v,_,H,F,X),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let y=w,g=C;y<g;y+=3){const I=f.getX(y),D=f.getX(y+1),b=f.getX(y+2);a=pl(this,d,e,r,m,v,_,I,D,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,C=x.length;w<C;w++){const y=x[w],g=d[y.materialIndex],I=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let b=I,W=D;b<W;b+=3){const H=b,F=b+1,X=b+2;a=pl(this,g,e,r,m,v,_,H,F,X),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const w=Math.max(0,S.start),C=Math.min(p.count,S.start+S.count);for(let y=w,g=C;y<g;y+=3){const I=y,D=y+1,b=y+2;a=pl(this,d,e,r,m,v,_,I,D,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function wv(s,e,n,r,a,c,d,f){let p;if(e.side===Dn?p=r.intersectTriangle(d,c,a,!0,f):p=r.intersectTriangle(a,c,d,e.side===xr,f),p===null)return null;hl.copy(f),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,a,c,d,f,p,m){s.getVertexPosition(f,cl),s.getVertexPosition(p,ul),s.getVertexPosition(m,dl);const v=wv(s,e,n,r,cl,ul,dl,$p);if(v){const _=new ie;ri.getBarycoord($p,cl,ul,dl,_),a&&(v.uv=ri.getInterpolatedAttribute(a,f,p,m,_,new Rt)),c&&(v.uv1=ri.getInterpolatedAttribute(c,f,p,m,_,new Rt)),d&&(v.normal=ri.getInterpolatedAttribute(d,f,p,m,_,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const x={a:f,b:p,c:m,normal:new ie,materialIndex:0};ri.getNormal(cl,ul,dl,x.normal),v.face=x,v.barycoord=_}return v}class Ys extends Zr{constructor(e=1,n=1,r=1,a=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:c,depthSegments:d};const f=this;a=Math.floor(a),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],_=[];let x=0,S=0;w("z","y","x",-1,-1,r,n,e,d,c,0),w("z","y","x",1,-1,r,n,-e,d,c,1),w("x","z","y",1,1,e,r,n,a,d,2),w("x","z","y",1,-1,e,r,-n,a,d,3),w("x","y","z",1,-1,e,n,r,a,c,4),w("x","y","z",-1,-1,e,n,-r,a,c,5),this.setIndex(p),this.setAttribute("position",new qr(m,3)),this.setAttribute("normal",new qr(v,3)),this.setAttribute("uv",new qr(_,2));function w(C,y,g,I,D,b,W,H,F,X,R){const A=b/F,B=W/X,ae=b/2,te=W/2,de=H/2,me=F+1,oe=X+1;let ce=0,k=0;const le=new ie;for(let se=0;se<oe;se++){const U=se*B-te;for(let ne=0;ne<me;ne++){const Ue=ne*A-ae;le[C]=Ue*I,le[y]=U*D,le[g]=de,m.push(le.x,le.y,le.z),le[C]=0,le[y]=0,le[g]=H>0?1:-1,v.push(le.x,le.y,le.z),_.push(ne/F),_.push(1-se/X),ce+=1}}for(let se=0;se<X;se++)for(let U=0;U<F;U++){const ne=x+U+me*se,Ue=x+U+me*(se+1),Q=x+(U+1)+me*(se+1),pe=x+(U+1)+me*se;p.push(ne,Ue,pe),p.push(Ue,Q,pe),k+=6}f.addGroup(S,k,R),S+=k,x+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function js(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function En(s){const e={};for(let n=0;n<s.length;n++){const r=js(s[n]);for(const a in r)e[a]=r[a]}return e}function Av(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Ym(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Cv={clone:js,merge:En};var Rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yr extends Dl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rv,this.fragmentShader=bv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=Av(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class qm extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pr=new ie,Kp=new Rt,Zp=new Rt;class qn extends qm{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(_u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pr.x,pr.y).multiplyScalar(-e/pr.z),pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(pr.x,pr.y).multiplyScalar(-e/pr.z)}getViewSize(e,n){return this.getViewBounds(e,Kp,Zp),n.subVectors(Zp,Kp)}setViewOffset(e,n,r,a,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_u*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,c=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*a/p,n-=d.offsetY*r/m,a*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Us=1;class Pv extends kn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Ns,Us,e,n);a.layers=this.layers,this.add(a);const c=new qn(Ns,Us,e,n);c.layers=this.layers,this.add(c);const d=new qn(Ns,Us,e,n);d.layers=this.layers,this.add(d);const f=new qn(Ns,Us,e,n);f.layers=this.layers,this.add(f);const p=new qn(Ns,Us,e,n);p.layers=this.layers,this.add(p);const m=new qn(Ns,Us,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,c,d,f,p]=n;for(const m of n)this.remove(m);if(e===Fi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,v]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,c),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(_,x,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class $m extends vn{constructor(e=[],n=Vs,r,a,c,d,f,p,m,v){super(e,n,r,a,c,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lv extends Kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new $m(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),c=new yr({name:"CubemapFromEquirect",uniforms:js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Dn,blending:vr});c.uniforms.tEquirect.value=n;const d=new mi(a,c),f=n.minFilter;return n.minFilter===Yr&&(n.minFilter=pi),new Pv(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,a=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(c)}}class ml extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dv={type:"move"};class ku{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=n.getJointPose(C,r),g=this._getHandJoint(m,C);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=v.position.distanceTo(_.position),S=.02,w=.005;m.inputState.pinching&&x>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&c!==null&&(a=c),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return f!==null&&(f.visible=a!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Nv extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Bu=new ie,Uv=new ie,Iv=new at;class Hr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Bu.subVectors(r,n).cross(Uv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Bu),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/a;return c<0||c>1?null:n.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||Iv.getNormalMatrix(e),a=this.coplanarPoint(Bu).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zr=new Wd,gl=new ie;class Km{constructor(e=new Hr,n=new Hr,r=new Hr,a=new Hr,c=new Hr,d=new Hr){this.planes=[e,n,r,a,c,d]}set(e,n,r,a,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Fi){const r=this.planes,a=e.elements,c=a[0],d=a[1],f=a[2],p=a[3],m=a[4],v=a[5],_=a[6],x=a[7],S=a[8],w=a[9],C=a[10],y=a[11],g=a[12],I=a[13],D=a[14],b=a[15];if(r[0].setComponents(p-c,x-m,y-S,b-g).normalize(),r[1].setComponents(p+c,x+m,y+S,b+g).normalize(),r[2].setComponents(p+d,x+v,y+w,b+I).normalize(),r[3].setComponents(p-d,x-v,y-w,b-I).normalize(),r[4].setComponents(p-f,x-_,y-C,b-D).normalize(),n===Fi)r[5].setComponents(p+f,x+_,y+C,b+D).normalize();else if(n===Pl)r[5].setComponents(f,_,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zr)}intersectsSprite(e){return zr.center.set(0,0,0),zr.radius=.7071067811865476,zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(zr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(gl.x=a.normal.x>0?e.max.x:e.min.x,gl.y=a.normal.y>0?e.max.y:e.min.y,gl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fv extends vn{constructor(e,n,r,a,c,d,f,p,m){super(e,n,r,a,c,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zm extends vn{constructor(e,n,r=$r,a,c,d,f=oi,p=oi,m,v=Fo){if(v!==Fo&&v!==Oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,a,c,d,f,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nl extends Zr{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(a),m=f+1,v=p+1,_=e/f,x=n/p,S=[],w=[],C=[],y=[];for(let g=0;g<v;g++){const I=g*x-d;for(let D=0;D<m;D++){const b=D*_-c;w.push(b,-I,0),C.push(0,0,1),y.push(D/f),y.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<f;I++){const D=I+m*g,b=I+m*(g+1),W=I+1+m*(g+1),H=I+1+m*g;S.push(D,b,H),S.push(b,W,H)}this.setIndex(S),this.setAttribute("position",new qr(w,3)),this.setAttribute("normal",new qr(C,3)),this.setAttribute("uv",new qr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ov extends Dl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zv extends Dl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qp={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class kv{constructor(e,n,r){const a=this;let c=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this.itemStart=function(v){f++,c===!1&&a.onStart!==void 0&&a.onStart(v,d,f),c=!0},this.itemEnd=function(v){d++,a.onProgress!==void 0&&a.onProgress(v,d,f),d===f&&(c=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(v){a.onError!==void 0&&a.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){const _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,x=m.length;_<x;_+=2){const S=m[_],w=m[_+1];if(S.global&&(S.lastIndex=0),S.test(v))return w}return null}}}const Bv=new kv;class Yd{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(a,c){r.load(e,a,n,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yd.DEFAULT_MATERIAL_NAME="__DEFAULT";class Hv extends Yd{constructor(e){super(e)}load(e,n,r,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Qp.get(e);if(d!==void 0)return c.manager.itemStart(e),setTimeout(function(){n&&n(d),c.manager.itemEnd(e)},0),d;const f=zo("img");function p(){v(),Qp.add(e,this),n&&n(this),c.manager.itemEnd(e)}function m(_){v(),a&&a(_),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),c.manager.itemStart(e),f.src=e,f}}class Vv extends Yd{constructor(e){super(e)}load(e,n,r,a){const c=new vn,d=new Hv(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,n!==void 0&&n(c)},r,a),c}}class Gv extends qm{constructor(e=-1,n=1,r=1,a=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Wv extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Jp=new jt;class jv{constructor(e,n,r=0,a=1/0){this.ray=new Gm(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new jd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Jp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jp),this}intersectObject(e,n=!0,r=[]){return Nd(e,this,r,n),r.sort(em),r}intersectObjects(e,n=!0,r=[]){for(let a=0,c=e.length;a<c;a++)Nd(e[a],this,r,n);return r.sort(em),r}}function em(s,e){return s.distance-e.distance}function Nd(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)Nd(c[d],e,n,!0)}}function tm(s,e,n,r){const a=Xv(r);switch(n){case Im:return s*e;case Om:return s*e/a.components*a.byteLength;case Bd:return s*e/a.components*a.byteLength;case zm:return s*e*2/a.components*a.byteLength;case Hd:return s*e*2/a.components*a.byteLength;case Fm:return s*e*3/a.components*a.byteLength;case si:return s*e*4/a.components*a.byteLength;case Vd:return s*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ad:case cd:return Math.max(s,16)*Math.max(e,8)/4;case od:case ld:return Math.max(s,8)*Math.max(e,8)/2;case ud:case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case md:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Cd:case Rd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case km:case bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Pd:case Ld:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Xv(s){switch(s){case ki:case Dm:return{byteLength:1,components:1};case Uo:case Nm:case ko:return{byteLength:2,components:1};case zd:case kd:return{byteLength:2,components:4};case $r:case Od:case Ii:return{byteLength:4,components:1};case Um:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Qm(){let s=null,e=!1,n=null,r=null;function a(c,d){n(c,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Yv(s){const e=new WeakMap;function n(f,p){const m=f.array,v=f.usage,_=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,v),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,v);else{_.sort((S,w)=>S.start-w.start);let x=0;for(let S=1;S<_.length;S++){const w=_[x],C=_[S];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++x,_[x]=C)}_.length=x+1;for(let S=0,w=_.length;S<w;S++){const C=_[S];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:a,remove:c,update:d}}var qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$v=`#ifdef USE_ALPHAHASH
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
#endif`,Kv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e_=`#ifdef USE_AOMAP
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
#endif`,t_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n_=`#ifdef USE_BATCHING
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
#endif`,i_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,r_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a_=`#ifdef USE_IRIDESCENCE
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
#endif`,l_=`#ifdef USE_BUMPMAP
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
#endif`,c_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,v_=`#define PI 3.141592653589793
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
} // validated`,__=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,x_=`vec3 transformedNormal = objectNormal;
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
#endif`,y_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,S_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",w_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A_=`#ifdef USE_ENVMAP
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
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,R_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,D_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,N_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I_=`#ifdef USE_GRADIENTMAP
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
}`,F_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_=`uniform bool receiveShadow;
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
#endif`,B_=`#ifdef USE_ENVMAP
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
#endif`,H_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,j_=`PhysicalMaterial material;
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
#endif`,X_=`struct PhysicalMaterial {
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
}`,Y_=`
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
#endif`,q_=`#if defined( RE_IndirectDiffuse )
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i2=`#if defined( USE_POINTS_UV )
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
#endif`,r2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c2=`#ifdef USE_MORPHTARGETS
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
#endif`,u2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,f2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g2=`#ifdef USE_NORMALMAP
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
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,b2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D2=`float getShadowMask() {
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
}`,N2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U2=`#ifdef USE_SKINNING
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
#endif`,I2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,F2=`#ifdef USE_SKINNING
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
#endif`,O2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,H2=`#ifdef USE_TRANSMISSION
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
#endif`,V2=`#ifdef USE_TRANSMISSION
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
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q2=`uniform sampler2D t2D;
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
}`,$2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J2=`#include <common>
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
}`,ex=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tx=`#define DISTANCE
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
}`,nx=`#define DISTANCE
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
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`uniform float scale;
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#include <common>
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
}`,lx=`uniform vec3 diffuse;
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
}`,cx=`#define LAMBERT
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
}`,ux=`#define LAMBERT
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
}`,dx=`#define MATCAP
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
}`,fx=`#define MATCAP
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
}`,hx=`#define NORMAL
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
}`,px=`#define NORMAL
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
}`,mx=`#define PHONG
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
}`,gx=`#define PHONG
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
}`,vx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,xx=`#define TOON
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
}`,yx=`#define TOON
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
}`,Sx=`uniform float size;
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
}`,Mx=`uniform vec3 diffuse;
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
}`,Ex=`#include <common>
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
}`,Tx=`uniform vec3 color;
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
}`,wx=`uniform float rotation;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:qv,alphahash_pars_fragment:$v,alphamap_fragment:Kv,alphamap_pars_fragment:Zv,alphatest_fragment:Qv,alphatest_pars_fragment:Jv,aomap_fragment:e_,aomap_pars_fragment:t_,batching_pars_vertex:n_,batching_vertex:i_,begin_vertex:r_,beginnormal_vertex:s_,bsdfs:o_,iridescence_fragment:a_,bumpmap_pars_fragment:l_,clipping_planes_fragment:c_,clipping_planes_pars_fragment:u_,clipping_planes_pars_vertex:d_,clipping_planes_vertex:f_,color_fragment:h_,color_pars_fragment:p_,color_pars_vertex:m_,color_vertex:g_,common:v_,cube_uv_reflection_fragment:__,defaultnormal_vertex:x_,displacementmap_pars_vertex:y_,displacementmap_vertex:S_,emissivemap_fragment:M_,emissivemap_pars_fragment:E_,colorspace_fragment:T_,colorspace_pars_fragment:w_,envmap_fragment:A_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:B_,envmap_vertex:P_,fog_vertex:L_,fog_pars_vertex:D_,fog_fragment:N_,fog_pars_fragment:U_,gradientmap_pars_fragment:I_,lightmap_pars_fragment:F_,lights_lambert_fragment:O_,lights_lambert_pars_fragment:z_,lights_pars_begin:k_,lights_toon_fragment:H_,lights_toon_pars_fragment:V_,lights_phong_fragment:G_,lights_phong_pars_fragment:W_,lights_physical_fragment:j_,lights_physical_pars_fragment:X_,lights_fragment_begin:Y_,lights_fragment_maps:q_,lights_fragment_end:$_,logdepthbuf_fragment:K_,logdepthbuf_pars_fragment:Z_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:J_,map_fragment:e2,map_pars_fragment:t2,map_particle_fragment:n2,map_particle_pars_fragment:i2,metalnessmap_fragment:r2,metalnessmap_pars_fragment:s2,morphinstance_vertex:o2,morphcolor_vertex:a2,morphnormal_vertex:l2,morphtarget_pars_vertex:c2,morphtarget_vertex:u2,normal_fragment_begin:d2,normal_fragment_maps:f2,normal_pars_fragment:h2,normal_pars_vertex:p2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:x2,iridescence_pars_fragment:y2,opaque_fragment:S2,packing:M2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:w2,dithering_pars_fragment:A2,roughnessmap_fragment:C2,roughnessmap_pars_fragment:R2,shadowmap_pars_fragment:b2,shadowmap_pars_vertex:P2,shadowmap_vertex:L2,shadowmask_pars_fragment:D2,skinbase_vertex:N2,skinning_pars_vertex:U2,skinning_vertex:I2,skinnormal_vertex:F2,specularmap_fragment:O2,specularmap_pars_fragment:z2,tonemapping_fragment:k2,tonemapping_pars_fragment:B2,transmission_fragment:H2,transmission_pars_fragment:V2,uv_pars_fragment:G2,uv_pars_vertex:W2,uv_vertex:j2,worldpos_vertex:X2,background_vert:Y2,background_frag:q2,backgroundCube_vert:$2,backgroundCube_frag:K2,cube_vert:Z2,cube_frag:Q2,depth_vert:J2,depth_frag:ex,distanceRGBA_vert:tx,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:rx,linedashed_vert:sx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:ux,meshmatcap_vert:dx,meshmatcap_frag:fx,meshnormal_vert:hx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:gx,meshphysical_vert:vx,meshphysical_frag:_x,meshtoon_vert:xx,meshtoon_frag:yx,points_vert:Sx,points_frag:Mx,shadow_vert:Ex,shadow_frag:Tx,sprite_vert:wx,sprite_frag:Ax},be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},hi={basic:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:En([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:En([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:En([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:En([be.points,be.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:En([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:En([be.common,be.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:En([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:En([be.sprite,be.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:En([be.common,be.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:En([be.lights,be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};hi.physical={uniforms:En([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const vl={r:0,b:0,g:0},kr=new Bi,Cx=new jt;function Rx(s,e,n,r,a,c,d){const f=new Ct(0);let p=c===!0?0:1,m,v,_=null,x=0,S=null;function w(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?n:e).get(b)),b}function C(D){let b=!1;const W=w(D);W===null?g(f,p):W&&W.isColor&&(g(W,1),b=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,d):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,b){const W=w(b);W&&(W.isCubeTexture||W.mapping===Ll)?(v===void 0&&(v=new mi(new Ys(1,1,1),new yr({name:"BackgroundCubeMaterial",uniforms:js(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,F,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),kr.copy(b.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=W,v.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(kr)),v.material.toneMapped=Mt.getTransfer(W.colorSpace)!==At,(_!==W||x!==W.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,_=W,x=W.version,S=s.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new mi(new Nl(2,2),new yr({name:"BackgroundMaterial",uniforms:js(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(W.colorSpace)!==At,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||x!==W.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=W,x=W.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function g(D,b){D.getRGB(vl,Ym(s)),r.buffers.color.setClear(vl.r,vl.g,vl.b,b,d)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(D,b=1){f.set(D),p=b,g(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,g(f,p)},render:C,addToRenderList:y,dispose:I}}function bx(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let c=a,d=!1;function f(A,B,ae,te,de){let me=!1;const oe=_(te,ae,B);c!==oe&&(c=oe,m(c.object)),me=S(A,te,ae,de),me&&w(A,te,ae,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(me||d)&&(d=!1,b(A,B,ae,te),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function _(A,B,ae){const te=ae.wireframe===!0;let de=r[A.id];de===void 0&&(de={},r[A.id]=de);let me=de[B.id];me===void 0&&(me={},de[B.id]=me);let oe=me[te];return oe===void 0&&(oe=x(p()),me[te]=oe),oe}function x(A){const B=[],ae=[],te=[];for(let de=0;de<n;de++)B[de]=0,ae[de]=0,te[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ae,attributeDivisors:te,object:A,attributes:{},index:null}}function S(A,B,ae,te){const de=c.attributes,me=B.attributes;let oe=0;const ce=ae.getAttributes();for(const k in ce)if(ce[k].location>=0){const se=de[k];let U=me[k];if(U===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;oe++}return c.attributesNum!==oe||c.index!==te}function w(A,B,ae,te){const de={},me=B.attributes;let oe=0;const ce=ae.getAttributes();for(const k in ce)if(ce[k].location>=0){let se=me[k];se===void 0&&(k==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),k==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),de[k]=U,oe++}c.attributes=de,c.attributesNum=oe,c.index=te}function C(){const A=c.newAttributes;for(let B=0,ae=A.length;B<ae;B++)A[B]=0}function y(A){g(A,0)}function g(A,B){const ae=c.newAttributes,te=c.enabledAttributes,de=c.attributeDivisors;ae[A]=1,te[A]===0&&(s.enableVertexAttribArray(A),te[A]=1),de[A]!==B&&(s.vertexAttribDivisor(A,B),de[A]=B)}function I(){const A=c.newAttributes,B=c.enabledAttributes;for(let ae=0,te=B.length;ae<te;ae++)B[ae]!==A[ae]&&(s.disableVertexAttribArray(ae),B[ae]=0)}function D(A,B,ae,te,de,me,oe){oe===!0?s.vertexAttribIPointer(A,B,ae,de,me):s.vertexAttribPointer(A,B,ae,te,de,me)}function b(A,B,ae,te){C();const de=te.attributes,me=ae.getAttributes(),oe=B.defaultAttributeValues;for(const ce in me){const k=me[ce];if(k.location>=0){let le=de[ce];if(le===void 0&&(ce==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),ce==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const se=le.normalized,U=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Ue=ne.buffer,Q=ne.type,pe=ne.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||le.gpuType===Od;if(le.isInterleavedBufferAttribute){const xe=le.data,we=xe.stride,Xe=le.offset;if(xe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<k.locationSize;Ge++)g(k.location+Ge,xe.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ge=0;Ge<k.locationSize;Ge++)y(k.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ge=0;Ge<k.locationSize;Ge++)D(k.location+Ge,U/k.locationSize,Q,se,we*pe,(Xe+U/k.locationSize*Ge)*pe,Ee)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<k.locationSize;xe++)g(k.location+xe,le.meshPerAttribute);A.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<k.locationSize;xe++)y(k.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let xe=0;xe<k.locationSize;xe++)D(k.location+xe,U/k.locationSize,Q,se,U*pe,U/k.locationSize*xe*pe,Ee)}}else if(oe!==void 0){const se=oe[ce];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(k.location,se);break;case 3:s.vertexAttrib3fv(k.location,se);break;case 4:s.vertexAttrib4fv(k.location,se);break;default:s.vertexAttrib1fv(k.location,se)}}}}I()}function W(){X();for(const A in r){const B=r[A];for(const ae in B){const te=B[ae];for(const de in te)v(te[de].object),delete te[de];delete B[ae]}delete r[A]}}function H(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const ae in B){const te=B[ae];for(const de in te)v(te[de].object),delete te[de];delete B[ae]}delete r[A.id]}function F(A){for(const B in r){const ae=r[B];if(ae[A.id]===void 0)continue;const te=ae[A.id];for(const de in te)v(te[de].object),delete te[de];delete ae[A.id]}}function X(){R(),d=!0,c!==a&&(c=a,m(c.object))}function R(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:X,resetDefaultState:R,dispose:W,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function Px(s,e,n){let r;function a(m){r=m}function c(m,v){s.drawArrays(r,m,v),n.update(v,r,1)}function d(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),n.update(v,r,_))}function f(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let S=0;for(let w=0;w<_;w++)S+=v[w];n.update(S,r,1)}function p(m,v,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<m.length;w++)d(m[w],v[w],x[w]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,_);let w=0;for(let C=0;C<_;C++)w+=v[C]*x[C];n.update(w,r,1)}}this.setMode=a,this.render=c,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function Lx(s,e,n,r){let a;function c(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(F){return!(F!==si&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const X=F===ko&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ki&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!X)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=w>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:W,maxSamples:H}}function Dx(s){const e=this;let n=null,r=0,a=!1,c=!1;const d=new Hr,f=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||a;return a=x,r=_.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){n=v(_,x,0)},this.setState=function(_,x,S){const w=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,g=s.get(_);if(!a||w===null||w.length===0||c&&!y)c?v(null):m();else{const I=c?0:r,D=I*4;let b=g.clippingState||null;p.value=b,b=v(w,x,D,S);for(let W=0;W!==D;++W)b[W]=n[W];g.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,x,S,w){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,w!==!0||y===null){const g=S+C*4,I=x.matrixWorldInverse;f.getNormalMatrix(I),(y===null||y.length<g)&&(y=new Float32Array(g));for(let D=0,b=S;D!==C;++D,b+=4)d.copy(_[D]).applyMatrix4(I,f),d.normal.toArray(y,b),y[b+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function Nx(s){let e=new WeakMap;function n(d,f){return f===nd?d.mapping=Vs:f===id&&(d.mapping=Gs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===nd||f===id)if(e.has(d)){const p=e.get(d).texture;return n(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new Lv(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const zs=4,nm=[.125,.215,.35,.446,.526,.582],Wr=20,Hu=new Gv,im=new Ct;let Vu=null,Gu=0,Wu=0,ju=!1;const Vr=(1+Math.sqrt(5))/2,Is=1/Vr,rm=[new ie(-Vr,Is,0),new ie(Vr,Is,0),new ie(-Is,0,Vr),new ie(Is,0,Vr),new ie(0,Vr,-Is),new ie(0,Vr,Is),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],Ux=new ie;class sm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100,c={}){const{size:d=256,position:f=Ux}=c;Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vu,Gu,Wu),this._renderer.xr.enabled=ju,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vu=this._renderer.getRenderTarget(),Gu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:pi,minFilter:pi,generateMipmaps:!1,type:ko,format:si,colorSpace:Ws,depthBuffer:!1},a=om(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(c)),this._blurMaterial=Fx(c,e,n)}return a}_compileMaterial(e){const n=new mi(this._lodPlanes[0],e);this._renderer.compile(n,Hu)}_sceneToCubeUV(e,n,r,a,c){const p=new qn(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,S=_.toneMapping;_.getClearColor(im),_.toneMapping=_r,_.autoClear=!1;const w=new Xd({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),C=new mi(new Ys,w);let y=!1;const g=e.background;g?g.isColor&&(w.color.copy(g),e.background=null,y=!0):(w.color.copy(im),y=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[I],c.y,c.z)):D===1?(p.up.set(0,0,m[I]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[I],c.z)):(p.up.set(0,m[I],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[I]));const b=this._cubeSize;_l(a,D*b,I>2?b:0,b,b),_.setRenderTarget(a),y&&_.render(C,p),_.render(e,p)}C.geometry.dispose(),C.material.dispose(),_.toneMapping=S,_.autoClear=x,e.background=g}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Vs||e.mapping===Gs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=am());const c=a?this._cubemapMaterial:this._equirectMaterial,d=new mi(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;_l(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Hu)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let c=1;c<a;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),f=rm[(a-c-1)%rm.length];this._blur(e,c-1,c,d,f)}n.autoClear=r}_blur(e,n,r,a,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",c),this._halfBlur(d,e,r,r,a,"longitudinal",c)}_halfBlur(e,n,r,a,c,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new mi(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,w=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Wr-1),C=c/w,y=isFinite(c)?1+Math.floor(v*C):Wr;y>Wr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Wr}`);const g=[];let I=0;for(let F=0;F<Wr;++F){const X=F/C,R=Math.exp(-X*X/2);g.push(R),F===0?I+=R:F<y&&(I+=2*R)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:D}=this;x.dTheta.value=w,x.mipInt.value=D-r;const b=this._sizeLods[a],W=3*b*(a>D-zs?a-D+zs:0),H=4*(this._cubeSize-b);_l(n,W,H,3*b,2*b),p.setRenderTarget(n),p.render(_,Hu)}}function Ix(s){const e=[],n=[],r=[];let a=s;const c=s-zs+1+nm.length;for(let d=0;d<c;d++){const f=Math.pow(2,a);n.push(f);let p=1/f;d>s-zs?p=nm[d-s+zs-1]:d===0&&(p=0),r.push(p);const m=1/(f-2),v=-m,_=1+m,x=[v,v,_,v,_,_,v,v,_,_,v,_],S=6,w=6,C=3,y=2,g=1,I=new Float32Array(C*w*S),D=new Float32Array(y*w*S),b=new Float32Array(g*w*S);for(let H=0;H<S;H++){const F=H%3*2/3-1,X=H>2?0:-1,R=[F,X,0,F+2/3,X,0,F+2/3,X+1,0,F,X,0,F+2/3,X+1,0,F,X+1,0];I.set(R,C*w*H),D.set(x,y*w*H);const A=[H,H,H,H,H,H];b.set(A,g*w*H)}const W=new Zr;W.setAttribute("position",new gi(I,C)),W.setAttribute("uv",new gi(D,y)),W.setAttribute("faceIndex",new gi(b,g)),e.push(W),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function om(s,e,n){const r=new Kr(s,e,n);return r.texture.mapping=Ll,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function Fx(s,e,n){const r=new Float32Array(Wr),a=new ie(0,1,0);return new yr({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qd(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function am(){return new yr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function lm(){return new yr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function qd(){return`

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
	`}function Ox(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===nd||p===id,v=p===Vs||p===Gs;if(m||v){let _=e.get(f);const x=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new sm(s)),_=m?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return m&&S&&S.height>0||v&&S&&a(S)?(n===null&&(n=new sm(s)),_=m?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",c),_.texture):null}}}return f}function a(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function zx(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&wl("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function kx(s,e,n,r){const a={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",d),delete a[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(_,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function p(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(_){const x=[],S=_.index,w=_.attributes.position;let C=0;if(S!==null){const I=S.array;C=S.version;for(let D=0,b=I.length;D<b;D+=3){const W=I[D+0],H=I[D+1],F=I[D+2];x.push(W,H,H,F,F,W)}}else if(w!==void 0){const I=w.array;C=w.version;for(let D=0,b=I.length/3-1;D<b;D+=3){const W=D+0,H=D+1,F=D+2;x.push(W,H,H,F,F,W)}}else return;const y=new(Hm(x)?Xm:jm)(x,1);y.version=C;const g=c.get(_);g&&e.remove(g),c.set(_,y)}function v(_){const x=c.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&m(_)}else m(_);return c.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function Bx(s,e,n){let r;function a(x){r=x}let c,d;function f(x){c=x.type,d=x.bytesPerElement}function p(x,S){s.drawElements(r,S,c,x*d),n.update(S,r,1)}function m(x,S,w){w!==0&&(s.drawElementsInstanced(r,S,c,x*d,w),n.update(S,r,w))}function v(x,S,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,w);let y=0;for(let g=0;g<w;g++)y+=S[g];n.update(y,r,1)}function _(x,S,w,C){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/d,S[g],C[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,C,0,w);let g=0;for(let I=0;I<w;I++)g+=S[I]*C[I];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function Hx(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function Vx(s,e,n){const r=new WeakMap,a=new Wt;function c(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let x=r.get(f);if(x===void 0||x.count!==_){let A=function(){X.dispose(),r.delete(f),f.removeEventListener("dispose",A)};var S=A;x!==void 0&&x.texture.dispose();const w=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,g=f.morphAttributes.position||[],I=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let b=0;w===!0&&(b=1),C===!0&&(b=2),y===!0&&(b=3);let W=f.attributes.position.count*b,H=1;W>e.maxTextureSize&&(H=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const F=new Float32Array(W*H*4*_),X=new Vm(F,W,H,_);X.type=Ii,X.needsUpdate=!0;const R=b*4;for(let B=0;B<_;B++){const ae=g[B],te=I[B],de=D[B],me=W*H*4*B;for(let oe=0;oe<ae.count;oe++){const ce=oe*R;w===!0&&(a.fromBufferAttribute(ae,oe),F[me+ce+0]=a.x,F[me+ce+1]=a.y,F[me+ce+2]=a.z,F[me+ce+3]=0),C===!0&&(a.fromBufferAttribute(te,oe),F[me+ce+4]=a.x,F[me+ce+5]=a.y,F[me+ce+6]=a.z,F[me+ce+7]=0),y===!0&&(a.fromBufferAttribute(de,oe),F[me+ce+8]=a.x,F[me+ce+9]=a.y,F[me+ce+10]=a.z,F[me+ce+11]=de.itemSize===4?a.w:1)}}x={count:_,texture:X,size:new Rt(W,H)},r.set(f,x),f.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const C=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function Gx(s,e,n,r){let a=new WeakMap;function c(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(a.get(_)!==m&&(e.update(_),a.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),a.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return _}function d(){a=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:d}}const Jm=new vn,cm=new Zm(1,1),e0=new Vm,t0=new pv,n0=new $m,um=[],dm=[],fm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let c=um[a];if(c===void 0&&(c=new Float32Array(a),um[a]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function Zt(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function Qt(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ul(s,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function Wx(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function jx(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2fv(this.addr,e),Qt(n,e)}}function Xx(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;s.uniform3fv(this.addr,e),Qt(n,e)}}function Yx(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4fv(this.addr,e),Qt(n,e)}}function qx(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;pm.set(r),s.uniformMatrix2fv(this.addr,!1,pm),Qt(n,r)}}function $x(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;hm.set(r),s.uniformMatrix3fv(this.addr,!1,hm),Qt(n,r)}}function Kx(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(Zt(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(n,e)}else{if(Zt(n,r))return;fm.set(r),s.uniformMatrix4fv(this.addr,!1,fm),Qt(n,r)}}function Zx(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Qx(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2iv(this.addr,e),Qt(n,e)}}function Jx(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3iv(this.addr,e),Qt(n,e)}}function e3(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4iv(this.addr,e),Qt(n,e)}}function t3(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function n3(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;s.uniform2uiv(this.addr,e),Qt(n,e)}}function i3(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;s.uniform3uiv(this.addr,e),Qt(n,e)}}function r3(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;s.uniform4uiv(this.addr,e),Qt(n,e)}}function s3(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let c;this.type===s.SAMPLER_2D_SHADOW?(cm.compareFunction=Bm,c=cm):c=Jm,n.setTexture2D(e||c,a)}function o3(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||t0,a)}function a3(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||n0,a)}function l3(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||e0,a)}function c3(s){switch(s){case 5126:return Wx;case 35664:return jx;case 35665:return Xx;case 35666:return Yx;case 35674:return qx;case 35675:return $x;case 35676:return Kx;case 5124:case 35670:return Zx;case 35667:case 35671:return Qx;case 35668:case 35672:return Jx;case 35669:case 35673:return e3;case 5125:return t3;case 36294:return n3;case 36295:return i3;case 36296:return r3;case 35678:case 36198:case 36298:case 36306:case 35682:return s3;case 35679:case 36299:case 36307:return o3;case 35680:case 36300:case 36308:case 36293:return a3;case 36289:case 36303:case 36311:case 36292:return l3}}function u3(s,e){s.uniform1fv(this.addr,e)}function d3(s,e){const n=qs(e,this.size,2);s.uniform2fv(this.addr,n)}function f3(s,e){const n=qs(e,this.size,3);s.uniform3fv(this.addr,n)}function h3(s,e){const n=qs(e,this.size,4);s.uniform4fv(this.addr,n)}function p3(s,e){const n=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function m3(s,e){const n=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function g3(s,e){const n=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function v3(s,e){s.uniform1iv(this.addr,e)}function _3(s,e){s.uniform2iv(this.addr,e)}function x3(s,e){s.uniform3iv(this.addr,e)}function y3(s,e){s.uniform4iv(this.addr,e)}function S3(s,e){s.uniform1uiv(this.addr,e)}function M3(s,e){s.uniform2uiv(this.addr,e)}function E3(s,e){s.uniform3uiv(this.addr,e)}function T3(s,e){s.uniform4uiv(this.addr,e)}function w3(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||Jm,c[d])}function A3(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||t0,c[d])}function C3(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||n0,c[d])}function R3(s,e,n){const r=this.cache,a=e.length,c=Ul(n,a);Zt(r,c)||(s.uniform1iv(this.addr,c),Qt(r,c));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||e0,c[d])}function b3(s){switch(s){case 5126:return u3;case 35664:return d3;case 35665:return f3;case 35666:return h3;case 35674:return p3;case 35675:return m3;case 35676:return g3;case 5124:case 35670:return v3;case 35667:case 35671:return _3;case 35668:case 35672:return x3;case 35669:case 35673:return y3;case 5125:return S3;case 36294:return M3;case 36295:return E3;case 36296:return T3;case 35678:case 36198:case 36298:case 36306:case 35682:return w3;case 35679:case 36299:case 36307:return A3;case 35680:case 36300:case 36308:case 36293:return C3;case 36289:case 36303:case 36311:case 36292:return R3}}class P3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=c3(n.type)}}class L3{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=b3(n.type)}}class D3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let c=0,d=a.length;c!==d;++c){const f=a[c];f.setValue(e,n[f.id],r)}}}const Xu=/(\w+)(\])?(\[|\.)?/g;function mm(s,e){s.seq.push(e),s.map[e.id]=e}function N3(s,e,n){const r=s.name,a=r.length;for(Xu.lastIndex=0;;){const c=Xu.exec(r),d=Xu.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===a){mm(n,m===void 0?new P3(f,s,e):new L3(f,s,e));break}else{let _=n.map[f];_===void 0&&(_=new D3(f),mm(n,_)),n=_}}}class Al{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const c=e.getActiveUniform(n,a),d=e.getUniformLocation(n,c.name);N3(c,d,this)}}setValue(e,n,r,a){const c=this.map[n];c!==void 0&&c.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,c=e.length;a!==c;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function gm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const U3=37297;let I3=0;function F3(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=a;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const vm=new at;function O3(s){Mt._getMatrix(vm,Mt.workingColorSpace,s);const e=`mat3( ${vm.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case bl:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _m(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+a+`

`+F3(s.getShaderSource(e),d)}else return a}function z3(s,e){const n=O3(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function k3(s,e){let n;switch(e){case kg:n="Linear";break;case Bg:n="Reinhard";break;case Hg:n="Cineon";break;case Vg:n="ACESFilmic";break;case Wg:n="AgX";break;case jg:n="Neutral";break;case Gg:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const xl=new ie;function B3(){Mt.getLuminanceCoefficients(xl);const s=xl.x.toFixed(4),e=xl.y.toFixed(4),n=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H3(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function V3(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function G3(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const c=s.getActiveAttrib(e,a),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function No(s){return s!==""}function xm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ym(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(s){return s.replace(W3,X3)}const j3=new Map;function X3(s,e){let n=lt[e];if(n===void 0){const r=j3.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ud(n)}const Y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sm(s){return s.replace(Y3,q3)}function q3(s,e,n,r){let a="";for(let c=parseInt(e);c<parseInt(n);c++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return a}function Mm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $3(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===_g?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function K3(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Vs:case Gs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Z3(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Q3(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Pm:e="ENVMAP_BLENDING_MULTIPLY";break;case Og:e="ENVMAP_BLENDING_MIX";break;case zg:e="ENVMAP_BLENDING_ADD";break}return e}function J3(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:r,maxMip:n}}function ey(s,e,n,r){const a=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=$3(n),m=K3(n),v=Z3(n),_=Q3(n),x=J3(n),S=H3(n),w=V3(c),C=a.createProgram();let y,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(No).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(No).join(`
`),g.length>0&&(g+=`
`)):(y=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),g=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_r?"#define TONE_MAPPING":"",n.toneMapping!==_r?lt.tonemapping_pars_fragment:"",n.toneMapping!==_r?k3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,z3("linearToOutputTexel",n.outputColorSpace),B3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(No).join(`
`)),d=Ud(d),d=xm(d,n),d=ym(d,n),f=Ud(f),f=xm(f,n),f=ym(f,n),d=Sm(d),f=Sm(f),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const D=I+y+d,b=I+g+f,W=gm(a,a.VERTEX_SHADER,D),H=gm(a,a.FRAGMENT_SHADER,b);a.attachShader(C,W),a.attachShader(C,H),n.index0AttributeName!==void 0?a.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function F(B){if(s.debug.checkShaderErrors){const ae=a.getProgramInfoLog(C).trim(),te=a.getShaderInfoLog(W).trim(),de=a.getShaderInfoLog(H).trim();let me=!0,oe=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(me=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,W,H);else{const ce=_m(a,W,"vertex"),k=_m(a,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+ce+`
`+k)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||de==="")&&(oe=!1);oe&&(B.diagnostics={runnable:me,programLog:ae,vertexShader:{log:te,prefix:y},fragmentShader:{log:de,prefix:g}})}a.deleteShader(W),a.deleteShader(H),X=new Al(a,C),R=G3(a,C)}let X;this.getUniforms=function(){return X===void 0&&F(this),X};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(C,U3)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=I3++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=W,this.fragmentShader=H,this}let ty=0;class ny{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new iy(e),n.set(e,r)),r}}class iy{constructor(e){this.id=ty++,this.code=e,this.usedTimes=0}}function ry(s,e,n,r,a,c,d){const f=new jd,p=new ny,m=new Set,v=[],_=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return m.add(R),R===0?"uv":`uv${R}`}function y(R,A,B,ae,te){const de=ae.fog,me=te.geometry,oe=R.isMeshStandardMaterial?ae.environment:null,ce=(R.isMeshStandardMaterial?n:e).get(R.envMap||oe),k=ce&&ce.mapping===Ll?ce.image.height:null,le=w[R.type];R.precision!==null&&(S=a.getMaxPrecision(R.precision),S!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",S,"instead."));const se=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,U=se!==void 0?se.length:0;let ne=0;me.morphAttributes.position!==void 0&&(ne=1),me.morphAttributes.normal!==void 0&&(ne=2),me.morphAttributes.color!==void 0&&(ne=3);let Ue,Q,pe,Ee;if(le){const _t=hi[le];Ue=_t.vertexShader,Q=_t.fragmentShader}else Ue=R.vertexShader,Q=R.fragmentShader,p.update(R),pe=p.getVertexShaderID(R),Ee=p.getFragmentShaderID(R);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Xe=te.isInstancedMesh===!0,Ge=te.isBatchedMesh===!0,Pt=!!R.map,Lt=!!R.matcap,ct=!!ce,z=!!R.aoMap,_n=!!R.lightMap,ht=!!R.bumpMap,ut=!!R.normalMap,Ye=!!R.displacementMap,wt=!!R.emissiveMap,We=!!R.metalnessMap,P=!!R.roughnessMap,E=R.anisotropy>0,Z=R.clearcoat>0,fe=R.dispersion>0,_e=R.iridescence>0,ue=R.sheen>0,Ve=R.transmission>0,Ae=E&&!!R.anisotropyMap,Ke=Z&&!!R.clearcoatMap,$e=Z&&!!R.clearcoatNormalMap,ye=Z&&!!R.clearcoatRoughnessMap,Fe=_e&&!!R.iridescenceMap,et=_e&&!!R.iridescenceThicknessMap,tt=ue&&!!R.sheenColorMap,Oe=ue&&!!R.sheenRoughnessMap,dt=!!R.specularMap,rt=!!R.specularColorMap,Tt=!!R.specularIntensityMap,G=Ve&&!!R.transmissionMap,Ce=Ve&&!!R.thicknessMap,re=!!R.gradientMap,he=!!R.alphaMap,Le=R.alphaTest>0,Pe=!!R.alphaHash,st=!!R.extensions;let Nt=_r;R.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const qt={shaderID:le,shaderType:R.type,shaderName:R.name,vertexShader:Ue,fragmentShader:Q,defines:R.defines,customVertexShaderID:pe,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:S,batching:Ge,batchingColor:Ge&&te._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&te.instanceColor!==null,instancingMorph:Xe&&te.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ws,alphaToCoverage:!!R.alphaToCoverage,map:Pt,matcap:Lt,envMap:ct,envMapMode:ct&&ce.mapping,envMapCubeUVHeight:k,aoMap:z,lightMap:_n,bumpMap:ht,normalMap:ut,displacementMap:x&&Ye,emissiveMap:wt,normalMapObjectSpace:ut&&R.normalMapType===Kg,normalMapTangentSpace:ut&&R.normalMapType===$g,metalnessMap:We,roughnessMap:P,anisotropy:E,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ke,clearcoatNormalMap:$e,clearcoatRoughnessMap:ye,dispersion:fe,iridescence:_e,iridescenceMap:Fe,iridescenceThicknessMap:et,sheen:ue,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:dt,specularColorMap:rt,specularIntensityMap:Tt,transmission:Ve,transmissionMap:G,thicknessMap:Ce,gradientMap:re,opaque:R.transparent===!1&&R.blending===ks&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Pe,combine:R.combine,mapUv:Pt&&C(R.map.channel),aoMapUv:z&&C(R.aoMap.channel),lightMapUv:_n&&C(R.lightMap.channel),bumpMapUv:ht&&C(R.bumpMap.channel),normalMapUv:ut&&C(R.normalMap.channel),displacementMapUv:Ye&&C(R.displacementMap.channel),emissiveMapUv:wt&&C(R.emissiveMap.channel),metalnessMapUv:We&&C(R.metalnessMap.channel),roughnessMapUv:P&&C(R.roughnessMap.channel),anisotropyMapUv:Ae&&C(R.anisotropyMap.channel),clearcoatMapUv:Ke&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:$e&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:et&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&C(R.sheenRoughnessMap.channel),specularMapUv:dt&&C(R.specularMap.channel),specularColorMapUv:rt&&C(R.specularColorMap.channel),specularIntensityMapUv:Tt&&C(R.specularIntensityMap.channel),transmissionMapUv:G&&C(R.transmissionMap.channel),thicknessMapUv:Ce&&C(R.thicknessMap.channel),alphaMapUv:he&&C(R.alphaMap.channel),vertexTangents:!!me.attributes.tangent&&(ut||E),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!me.attributes.uv&&(Pt||he),fog:!!de,useFog:R.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:we,skinning:te.isSkinnedMesh===!0,morphTargets:me.morphAttributes.position!==void 0,morphNormals:me.morphAttributes.normal!==void 0,morphColors:me.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Pt&&R.map.isVideoTexture===!0&&Mt.getTransfer(R.map.colorSpace)===At,decodeVideoTextureEmissive:wt&&R.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(R.emissiveMap.colorSpace)===At,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Ui,flipSided:R.side===Dn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:st&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&R.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return qt.vertexUv1s=m.has(1),qt.vertexUv2s=m.has(2),qt.vertexUv3s=m.has(3),m.clear(),qt}function g(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)A.push(B),A.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(I(A,R),D(A,R),A.push(s.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function I(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function D(R,A){f.disableAll(),A.supportsVertexTextures&&f.enable(0),A.instancing&&f.enable(1),A.instancingColor&&f.enable(2),A.instancingMorph&&f.enable(3),A.matcap&&f.enable(4),A.envMap&&f.enable(5),A.normalMapObjectSpace&&f.enable(6),A.normalMapTangentSpace&&f.enable(7),A.clearcoat&&f.enable(8),A.iridescence&&f.enable(9),A.alphaTest&&f.enable(10),A.vertexColors&&f.enable(11),A.vertexAlphas&&f.enable(12),A.vertexUv1s&&f.enable(13),A.vertexUv2s&&f.enable(14),A.vertexUv3s&&f.enable(15),A.vertexTangents&&f.enable(16),A.anisotropy&&f.enable(17),A.alphaHash&&f.enable(18),A.batching&&f.enable(19),A.dispersion&&f.enable(20),A.batchingColor&&f.enable(21),R.push(f.mask),f.disableAll(),A.fog&&f.enable(0),A.useFog&&f.enable(1),A.flatShading&&f.enable(2),A.logarithmicDepthBuffer&&f.enable(3),A.reverseDepthBuffer&&f.enable(4),A.skinning&&f.enable(5),A.morphTargets&&f.enable(6),A.morphNormals&&f.enable(7),A.morphColors&&f.enable(8),A.premultipliedAlpha&&f.enable(9),A.shadowMapEnabled&&f.enable(10),A.doubleSided&&f.enable(11),A.flipSided&&f.enable(12),A.useDepthPacking&&f.enable(13),A.dithering&&f.enable(14),A.transmission&&f.enable(15),A.sheen&&f.enable(16),A.opaque&&f.enable(17),A.pointsUvs&&f.enable(18),A.decodeVideoTexture&&f.enable(19),A.decodeVideoTextureEmissive&&f.enable(20),A.alphaToCoverage&&f.enable(21),R.push(f.mask)}function b(R){const A=w[R.type];let B;if(A){const ae=hi[A];B=Cv.clone(ae.uniforms)}else B=R.uniforms;return B}function W(R,A){let B;for(let ae=0,te=v.length;ae<te;ae++){const de=v[ae];if(de.cacheKey===A){B=de,++B.usedTimes;break}}return B===void 0&&(B=new ey(s,A,R,c),v.push(B)),B}function H(R){if(--R.usedTimes===0){const A=v.indexOf(R);v[A]=v[v.length-1],v.pop(),R.destroy()}}function F(R){p.remove(R)}function X(){p.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:W,releaseProgram:H,releaseShaderCache:F,programs:v,dispose:X}}function sy(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:c}}function oy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Tm(){const s=[];let e=0;const n=[],r=[],a=[];function c(){e=0,n.length=0,r.length=0,a.length=0}function d(_,x,S,w,C,y){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:x,material:S,groupOrder:w,renderOrder:_.renderOrder,z:C,group:y},s[e]=g):(g.id=_.id,g.object=_,g.geometry=x,g.material=S,g.groupOrder=w,g.renderOrder=_.renderOrder,g.z=C,g.group=y),e++,g}function f(_,x,S,w,C,y){const g=d(_,x,S,w,C,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function p(_,x,S,w,C,y){const g=d(_,x,S,w,C,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(_,x){n.length>1&&n.sort(_||oy),r.length>1&&r.sort(x||Em),a.length>1&&a.sort(x||Em)}function v(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:c,push:f,unshift:p,finish:v,sort:m}}function ay(){let s=new WeakMap;function e(r,a){const c=s.get(r);let d;return c===void 0?(d=new Tm,s.set(r,[d])):a>=c.length?(d=new Tm,c.push(d)):d=c[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function ly(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Ct};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function cy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let uy=0;function dy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function fy(s){const e=new ly,n=cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const a=new ie,c=new jt,d=new jt;function f(m){let v=0,_=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let S=0,w=0,C=0,y=0,g=0,I=0,D=0,b=0,W=0,H=0,F=0;m.sort(dy);for(let R=0,A=m.length;R<A;R++){const B=m[R],ae=B.color,te=B.intensity,de=B.distance,me=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=ae.r*te,_+=ae.g*te,x+=ae.b*te;else if(B.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(B.sh.coefficients[oe],te);F++}else if(B.isDirectionalLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ce=B.shadow,k=n.get(B);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,r.directionalShadow[S]=k,r.directionalShadowMap[S]=me,r.directionalShadowMatrix[S]=B.shadow.matrix,I++}r.directional[S]=oe,S++}else if(B.isSpotLight){const oe=e.get(B);oe.position.setFromMatrixPosition(B.matrixWorld),oe.color.copy(ae).multiplyScalar(te),oe.distance=de,oe.coneCos=Math.cos(B.angle),oe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),oe.decay=B.decay,r.spot[C]=oe;const ce=B.shadow;if(B.map&&(r.spotLightMap[W]=B.map,W++,ce.updateMatrices(B),B.castShadow&&H++),r.spotLightMatrix[C]=ce.matrix,B.castShadow){const k=n.get(B);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,r.spotShadow[C]=k,r.spotShadowMap[C]=me,b++}C++}else if(B.isRectAreaLight){const oe=e.get(B);oe.color.copy(ae).multiplyScalar(te),oe.halfWidth.set(B.width*.5,0,0),oe.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=oe,y++}else if(B.isPointLight){const oe=e.get(B);if(oe.color.copy(B.color).multiplyScalar(B.intensity),oe.distance=B.distance,oe.decay=B.decay,B.castShadow){const ce=B.shadow,k=n.get(B);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,k.shadowCameraNear=ce.camera.near,k.shadowCameraFar=ce.camera.far,r.pointShadow[w]=k,r.pointShadowMap[w]=me,r.pointShadowMatrix[w]=B.shadow.matrix,D++}r.point[w]=oe,w++}else if(B.isHemisphereLight){const oe=e.get(B);oe.skyColor.copy(B.color).multiplyScalar(te),oe.groundColor.copy(B.groundColor).multiplyScalar(te),r.hemi[g]=oe,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=x;const X=r.hash;(X.directionalLength!==S||X.pointLength!==w||X.spotLength!==C||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==I||X.numPointShadows!==D||X.numSpotShadows!==b||X.numSpotMaps!==W||X.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=y,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=b+W-H,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,X.directionalLength=S,X.pointLength=w,X.spotLength=C,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=I,X.numPointShadows=D,X.numSpotShadows=b,X.numSpotMaps=W,X.numLightProbes=F,r.version=uy++)}function p(m,v){let _=0,x=0,S=0,w=0,C=0;const y=v.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const D=m[g];if(D.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),_++}else if(D.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(D.matrixWorld),a.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const b=r.rectArea[w];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),d.identity(),c.copy(D.matrixWorld),c.premultiply(y),d.extractRotation(c),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),w++}else if(D.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(y),C++}}}return{setup:f,setupView:p,state:r}}function wm(s){const e=new fy(s),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function c(v){n.push(v)}function d(v){r.push(v)}function f(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:d}}function hy(s){let e=new WeakMap;function n(a,c=0){const d=e.get(a);let f;return d===void 0?(f=new wm(s),e.set(a,[f])):c>=d.length?(f=new wm(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
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
}`;function gy(s,e,n){let r=new Km;const a=new Rt,c=new Rt,d=new Wt,f=new Ov({depthPacking:qg}),p=new zv,m={},v=n.maxTextureSize,_={[xr]:Dn,[Dn]:xr,[Ui]:Ui},x=new yr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:py,fragmentShader:my}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const w=new Zr;w.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mi(w,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bm;let g=this.type;this.render=function(H,F,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||H.length===0)return;const R=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending(vr),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=g!==Ni&&this.type===Ni,de=g===Ni&&this.type!==Ni;for(let me=0,oe=H.length;me<oe;me++){const ce=H[me],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const le=k.getFrameExtents();if(a.multiply(le),c.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(c.x=Math.floor(v/le.x),a.x=c.x*le.x,k.mapSize.x=c.x),a.y>v&&(c.y=Math.floor(v/le.y),a.y=c.y*le.y,k.mapSize.y=c.y)),k.map===null||te===!0||de===!0){const U=this.type!==Ni?{minFilter:oi,magFilter:oi}:{};k.map!==null&&k.map.dispose(),k.map=new Kr(a.x,a.y,U),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const se=k.getViewportCount();for(let U=0;U<se;U++){const ne=k.getViewport(U);d.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),ae.viewport(d),k.updateMatrices(ce,U),r=k.getFrustum(),b(F,X,k.camera,ce,this.type)}k.isPointLightShadow!==!0&&this.type===Ni&&I(k,X),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(R,A,B)};function I(H,F){const X=e.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Kr(a.x,a.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(F,null,X,x,C,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(F,null,X,S,C,null)}function D(H,F,X,R){let A=null;const B=X.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(B!==void 0)A=B;else if(A=X.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ae=A.uuid,te=F.uuid;let de=m[ae];de===void 0&&(de={},m[ae]=de);let me=de[te];me===void 0&&(me=A.clone(),de[te]=me,F.addEventListener("dispose",W)),A=me}if(A.visible=F.visible,A.wireframe=F.wireframe,R===Ni?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:_[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ae=s.properties.get(A);ae.light=X}return A}function b(H,F,X,R,A){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===Ni)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,H.matrixWorld);const te=e.update(H),de=H.material;if(Array.isArray(de)){const me=te.groups;for(let oe=0,ce=me.length;oe<ce;oe++){const k=me[oe],le=de[k.materialIndex];if(le&&le.visible){const se=D(H,le,R,A);H.onBeforeShadow(s,H,F,X,te,se,k),s.renderBufferDirect(X,null,te,se,H,k),H.onAfterShadow(s,H,F,X,te,se,k)}}}else if(de.visible){const me=D(H,de,R,A);H.onBeforeShadow(s,H,F,X,te,me,null),s.renderBufferDirect(X,null,te,me,H,null),H.onAfterShadow(s,H,F,X,te,me,null)}}const ae=H.children;for(let te=0,de=ae.length;te<de;te++)b(ae[te],F,X,R,A)}function W(H){H.target.removeEventListener("dispose",W);for(const X in m){const R=m[X],A=H.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const vy={[$u]:Ku,[Zu]:ed,[Qu]:td,[Hs]:Ju,[Ku]:$u,[ed]:Zu,[td]:Qu,[Ju]:Hs};function _y(s,e){function n(){let G=!1;const Ce=new Wt;let re=null;const he=new Wt(0,0,0,0);return{setMask:function(Le){re!==Le&&!G&&(s.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){G=Le},setClear:function(Le,Pe,st,Nt,qt){qt===!0&&(Le*=Nt,Pe*=Nt,st*=Nt),Ce.set(Le,Pe,st,Nt),he.equals(Ce)===!1&&(s.clearColor(Le,Pe,st,Nt),he.copy(Ce))},reset:function(){G=!1,re=null,he.set(-1,0,0,0)}}}function r(){let G=!1,Ce=!1,re=null,he=null,Le=null;return{setReversed:function(Pe){if(Ce!==Pe){const st=e.get("EXT_clip_control");Pe?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),Ce=Pe;const Nt=Le;Le=null,this.setClear(Nt)}},getReversed:function(){return Ce},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){re!==Pe&&!G&&(s.depthMask(Pe),re=Pe)},setFunc:function(Pe){if(Ce&&(Pe=vy[Pe]),he!==Pe){switch(Pe){case $u:s.depthFunc(s.NEVER);break;case Ku:s.depthFunc(s.ALWAYS);break;case Zu:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case Qu:s.depthFunc(s.EQUAL);break;case Ju:s.depthFunc(s.GEQUAL);break;case ed:s.depthFunc(s.GREATER);break;case td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){G=Pe},setClear:function(Pe){Le!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),Le=Pe)},reset:function(){G=!1,re=null,he=null,Le=null,Ce=!1}}}function a(){let G=!1,Ce=null,re=null,he=null,Le=null,Pe=null,st=null,Nt=null,qt=null;return{setTest:function(_t){G||(_t?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(_t){Ce!==_t&&!G&&(s.stencilMask(_t),Ce=_t)},setFunc:function(_t,Tn,xn){(re!==_t||he!==Tn||Le!==xn)&&(s.stencilFunc(_t,Tn,xn),re=_t,he=Tn,Le=xn)},setOp:function(_t,Tn,xn){(Pe!==_t||st!==Tn||Nt!==xn)&&(s.stencilOp(_t,Tn,xn),Pe=_t,st=Tn,Nt=xn)},setLocked:function(_t){G=_t},setClear:function(_t){qt!==_t&&(s.clearStencil(_t),qt=_t)},reset:function(){G=!1,Ce=null,re=null,he=null,Le=null,Pe=null,st=null,Nt=null,qt=null}}}const c=new n,d=new r,f=new a,p=new WeakMap,m=new WeakMap;let v={},_={},x=new WeakMap,S=[],w=null,C=!1,y=null,g=null,I=null,D=null,b=null,W=null,H=null,F=new Ct(0,0,0),X=0,R=!1,A=null,B=null,ae=null,te=null,de=null;const me=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(k)[1]),oe=ce>=1):k.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),oe=ce>=2);let le=null,se={};const U=s.getParameter(s.SCISSOR_BOX),ne=s.getParameter(s.VIEWPORT),Ue=new Wt().fromArray(U),Q=new Wt().fromArray(ne);function pe(G,Ce,re,he){const Le=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(G,Pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<re;st++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(Ce+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Pe}const Ee={};Ee[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(Hs),ht(!1),ut(Rp),xe(s.CULL_FACE),z(vr);function xe(G){v[G]!==!0&&(s.enable(G),v[G]=!0)}function we(G){v[G]!==!1&&(s.disable(G),v[G]=!1)}function Xe(G,Ce){return _[G]!==Ce?(s.bindFramebuffer(G,Ce),_[G]=Ce,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ce),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Ge(G,Ce){let re=S,he=!1;if(G){re=x.get(Ce),re===void 0&&(re=[],x.set(Ce,re));const Le=G.textures;if(re.length!==Le.length||re[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,st=Le.length;Pe<st;Pe++)re[Pe]=s.COLOR_ATTACHMENT0+Pe;re.length=Le.length,he=!0}}else re[0]!==s.BACK&&(re[0]=s.BACK,he=!0);he&&s.drawBuffers(re)}function Pt(G){return w!==G?(s.useProgram(G),w=G,!0):!1}const Lt={[Gr]:s.FUNC_ADD,[yg]:s.FUNC_SUBTRACT,[Sg]:s.FUNC_REVERSE_SUBTRACT};Lt[Mg]=s.MIN,Lt[Eg]=s.MAX;const ct={[Tg]:s.ZERO,[wg]:s.ONE,[Ag]:s.SRC_COLOR,[Yu]:s.SRC_ALPHA,[Dg]:s.SRC_ALPHA_SATURATE,[Pg]:s.DST_COLOR,[Rg]:s.DST_ALPHA,[Cg]:s.ONE_MINUS_SRC_COLOR,[qu]:s.ONE_MINUS_SRC_ALPHA,[Lg]:s.ONE_MINUS_DST_COLOR,[bg]:s.ONE_MINUS_DST_ALPHA,[Ng]:s.CONSTANT_COLOR,[Ug]:s.ONE_MINUS_CONSTANT_COLOR,[Ig]:s.CONSTANT_ALPHA,[Fg]:s.ONE_MINUS_CONSTANT_ALPHA};function z(G,Ce,re,he,Le,Pe,st,Nt,qt,_t){if(G===vr){C===!0&&(we(s.BLEND),C=!1);return}if(C===!1&&(xe(s.BLEND),C=!0),G!==xg){if(G!==y||_t!==R){if((g!==Gr||b!==Gr)&&(s.blendEquation(s.FUNC_ADD),g=Gr,b=Gr),_t)switch(G){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bp:s.blendFunc(s.ONE,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}I=null,D=null,W=null,H=null,F.set(0,0,0),X=0,y=G,R=_t}return}Le=Le||Ce,Pe=Pe||re,st=st||he,(Ce!==g||Le!==b)&&(s.blendEquationSeparate(Lt[Ce],Lt[Le]),g=Ce,b=Le),(re!==I||he!==D||Pe!==W||st!==H)&&(s.blendFuncSeparate(ct[re],ct[he],ct[Pe],ct[st]),I=re,D=he,W=Pe,H=st),(Nt.equals(F)===!1||qt!==X)&&(s.blendColor(Nt.r,Nt.g,Nt.b,qt),F.copy(Nt),X=qt),y=G,R=!1}function _n(G,Ce){G.side===Ui?we(s.CULL_FACE):xe(s.CULL_FACE);let re=G.side===Dn;Ce&&(re=!re),ht(re),G.blending===ks&&G.transparent===!1?z(vr):z(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),c.setMask(G.colorWrite);const he=G.stencilWrite;f.setTest(he),he&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),wt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){A!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),A=G)}function ut(G){G!==gg?(xe(s.CULL_FACE),G!==B&&(G===Rp?s.cullFace(s.BACK):G===vg?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),B=G}function Ye(G){G!==ae&&(oe&&s.lineWidth(G),ae=G)}function wt(G,Ce,re){G?(xe(s.POLYGON_OFFSET_FILL),(te!==Ce||de!==re)&&(s.polygonOffset(Ce,re),te=Ce,de=re)):we(s.POLYGON_OFFSET_FILL)}function We(G){G?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function P(G){G===void 0&&(G=s.TEXTURE0+me-1),le!==G&&(s.activeTexture(G),le=G)}function E(G,Ce,re){re===void 0&&(le===null?re=s.TEXTURE0+me-1:re=le);let he=se[re];he===void 0&&(he={type:void 0,texture:void 0},se[re]=he),(he.type!==G||he.texture!==Ce)&&(le!==re&&(s.activeTexture(re),le=re),s.bindTexture(G,Ce||Ee[G]),he.type=G,he.texture=Ce)}function Z(){const G=se[le];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function fe(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ue(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ve(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $e(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function et(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){Ue.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ue.copy(G))}function Oe(G){Q.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Q.copy(G))}function dt(G,Ce){let re=m.get(Ce);re===void 0&&(re=new WeakMap,m.set(Ce,re));let he=re.get(G);he===void 0&&(he=s.getUniformBlockIndex(Ce,G.name),re.set(G,he))}function rt(G,Ce){const he=m.get(Ce).get(G);p.get(Ce)!==he&&(s.uniformBlockBinding(Ce,he,G.__bindingPointIndex),p.set(Ce,he))}function Tt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,se={},_={},x=new WeakMap,S=[],w=null,C=!1,y=null,g=null,I=null,D=null,b=null,W=null,H=null,F=new Ct(0,0,0),X=0,R=!1,A=null,B=null,ae=null,te=null,de=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:xe,disable:we,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:Pt,setBlending:z,setMaterial:_n,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:We,activeTexture:P,bindTexture:E,unbindTexture:Z,compressedTexImage2D:fe,compressedTexImage3D:_e,texImage2D:Fe,texImage3D:et,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:$e,texStorage3D:ye,texSubImage2D:ue,texSubImage3D:Ve,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Ke,scissor:tt,viewport:Oe,reset:Tt}}function xy(s,e,n,r,a,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Rt,v=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(P,E){return S?new OffscreenCanvas(P,E):zo("canvas")}function C(P,E,Z){let fe=1;const _e=We(P);if((_e.width>Z||_e.height>Z)&&(fe=Z/Math.max(_e.width,_e.height)),fe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ue=Math.floor(fe*_e.width),Ve=Math.floor(fe*_e.height);_===void 0&&(_=w(ue,Ve));const Ae=E?w(ue,Ve):_;return Ae.width=ue,Ae.height=Ve,Ae.getContext("2d").drawImage(P,0,0,ue,Ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Ve+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,E,Z,fe,_e=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=E;if(E===s.RED&&(Z===s.FLOAT&&(ue=s.R32F),Z===s.HALF_FLOAT&&(ue=s.R16F),Z===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.R8UI),Z===s.UNSIGNED_SHORT&&(ue=s.R16UI),Z===s.UNSIGNED_INT&&(ue=s.R32UI),Z===s.BYTE&&(ue=s.R8I),Z===s.SHORT&&(ue=s.R16I),Z===s.INT&&(ue=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(ue=s.RG32F),Z===s.HALF_FLOAT&&(ue=s.RG16F),Z===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RG16UI),Z===s.UNSIGNED_INT&&(ue=s.RG32UI),Z===s.BYTE&&(ue=s.RG8I),Z===s.SHORT&&(ue=s.RG16I),Z===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),Z===s.UNSIGNED_INT&&(ue=s.RGB32UI),Z===s.BYTE&&(ue=s.RGB8I),Z===s.SHORT&&(ue=s.RGB16I),Z===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ue=s.RGBA32UI),Z===s.BYTE&&(ue=s.RGBA8I),Z===s.SHORT&&(ue=s.RGBA16I),Z===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),E===s.RGBA){const Ve=_e?bl:Mt.getTransfer(fe);Z===s.FLOAT&&(ue=s.RGBA32F),Z===s.HALF_FLOAT&&(ue=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ue=Ve===At?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(P,E){let Z;return P?E===null||E===$r||E===Io?Z=s.DEPTH24_STENCIL8:E===Ii?Z=s.DEPTH32F_STENCIL8:E===Uo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$r||E===Io?Z=s.DEPTH_COMPONENT24:E===Ii?Z=s.DEPTH_COMPONENT32F:E===Uo&&(Z=s.DEPTH_COMPONENT16),Z}function W(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==oi&&P.minFilter!==pi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function H(P){const E=P.target;E.removeEventListener("dispose",H),X(E),E.isVideoTexture&&v.delete(E)}function F(P){const E=P.target;E.removeEventListener("dispose",F),A(E)}function X(P){const E=r.get(P);if(E.__webglInit===void 0)return;const Z=P.source,fe=x.get(Z);if(fe){const _e=fe[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&R(P),Object.keys(fe).length===0&&x.delete(Z)}r.remove(P)}function R(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const Z=P.source,fe=x.get(Z);delete fe[E.__cacheKey],d.memory.textures--}function A(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let _e=0;_e<E.__webglFramebuffer[fe].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[fe][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=P.textures;for(let fe=0,_e=Z.length;fe<_e;fe++){const ue=r.get(Z[fe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(Z[fe])}r.remove(P)}let B=0;function ae(){B=0}function te(){const P=B;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),B+=1,P}function de(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function me(P,E){const Z=r.get(P);if(P.isVideoTexture&&Ye(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const fe=P.image;if(fe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,P,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function oe(P,E){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function ce(P,E){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function k(P,E){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){pe(Z,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const le={[rd]:s.REPEAT,[Xr]:s.CLAMP_TO_EDGE,[sd]:s.MIRRORED_REPEAT},se={[oi]:s.NEAREST,[Xg]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[pi]:s.LINEAR,[vu]:s.LINEAR_MIPMAP_NEAREST,[Yr]:s.LINEAR_MIPMAP_LINEAR},U={[Zg]:s.NEVER,[iv]:s.ALWAYS,[Qg]:s.LESS,[Bm]:s.LEQUAL,[Jg]:s.EQUAL,[nv]:s.GEQUAL,[ev]:s.GREATER,[tv]:s.NOTEQUAL};function ne(P,E){if(E.type===Ii&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===pi||E.magFilter===vu||E.magFilter===Qa||E.magFilter===Yr||E.minFilter===pi||E.minFilter===vu||E.minFilter===Qa||E.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,le[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,le[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,le[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===oi||E.minFilter!==Qa&&E.minFilter!==Yr||E.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",H));const fe=E.source;let _e=x.get(fe);_e===void 0&&(_e={},x.set(fe,_e));const ue=de(E);if(ue!==P.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),_e[ue].usedTimes++;const Ve=_e[P.__cacheKey];Ve!==void 0&&(_e[P.__cacheKey].usedTimes--,Ve.usedTimes===0&&R(E)),P.__cacheKey=ue,P.__webglTexture=_e[ue].texture}return Z}function Q(P,E,Z){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const _e=Ue(P,E),ue=E.source;n.bindTexture(fe,P.__webglTexture,s.TEXTURE0+Z);const Ve=r.get(ue);if(ue.version!==Ve.__version||_e===!0){n.activeTexture(s.TEXTURE0+Z);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Ke=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),$e=E.colorSpace===mr||Ae===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ye=C(E.image,!1,a.maxTextureSize);ye=wt(E,ye);const Fe=c.convert(E.format,E.colorSpace),et=c.convert(E.type);let tt=D(E.internalFormat,Fe,et,E.colorSpace,E.isVideoTexture);ne(fe,E);let Oe;const dt=E.mipmaps,rt=E.isVideoTexture!==!0,Tt=Ve.__version===void 0||_e===!0,G=ue.dataReady,Ce=W(E,ye);if(E.isDepthTexture)tt=b(E.format===Oo,E.type),Tt&&(rt?n.texStorage2D(s.TEXTURE_2D,1,tt,ye.width,ye.height):n.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,Fe,et,null));else if(E.isDataTexture)if(dt.length>0){rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,tt,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)Oe=dt[re],rt?G&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(s.TEXTURE_2D,re,tt,Oe.width,Oe.height,0,Fe,et,Oe.data);E.generateMipmaps=!1}else rt?(Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,tt,ye.width,ye.height),G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,et,ye.data)):n.texImage2D(s.TEXTURE_2D,0,tt,ye.width,ye.height,0,Fe,et,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){rt&&Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,tt,dt[0].width,dt[0].height,ye.depth);for(let re=0,he=dt.length;re<he;re++)if(Oe=dt[re],E.format!==si)if(Fe!==null)if(rt){if(G)if(E.layerUpdates.size>0){const Le=tm(Oe.width,Oe.height,E.format,E.type);for(const Pe of E.layerUpdates){const st=Oe.data.subarray(Pe*Le/Oe.data.BYTES_PER_ELEMENT,(Pe+1)*Le/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,Pe,Oe.width,Oe.height,1,Fe,st)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Oe.width,Oe.height,ye.depth,Fe,Oe.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,re,tt,Oe.width,Oe.height,ye.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?G&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,re,0,0,0,Oe.width,Oe.height,ye.depth,Fe,et,Oe.data):n.texImage3D(s.TEXTURE_2D_ARRAY,re,tt,Oe.width,Oe.height,ye.depth,0,Fe,et,Oe.data)}else{rt&&Tt&&n.texStorage2D(s.TEXTURE_2D,Ce,tt,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)Oe=dt[re],E.format!==si?Fe!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Fe,Oe.data):n.compressedTexImage2D(s.TEXTURE_2D,re,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?G&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Oe.width,Oe.height,Fe,et,Oe.data):n.texImage2D(s.TEXTURE_2D,re,tt,Oe.width,Oe.height,0,Fe,et,Oe.data)}else if(E.isDataArrayTexture)if(rt){if(Tt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,tt,ye.width,ye.height,ye.depth),G)if(E.layerUpdates.size>0){const re=tm(ye.width,ye.height,E.format,E.type);for(const he of E.layerUpdates){const Le=ye.data.subarray(he*re/ye.data.BYTES_PER_ELEMENT,(he+1)*re/ye.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,et,Le)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(E.isData3DTexture)rt?(Tt&&n.texStorage3D(s.TEXTURE_3D,Ce,tt,ye.width,ye.height,ye.depth),G&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,et,ye.data)):n.texImage3D(s.TEXTURE_3D,0,tt,ye.width,ye.height,ye.depth,0,Fe,et,ye.data);else if(E.isFramebufferTexture){if(Tt)if(rt)n.texStorage2D(s.TEXTURE_2D,Ce,tt,ye.width,ye.height);else{let re=ye.width,he=ye.height;for(let Le=0;Le<Ce;Le++)n.texImage2D(s.TEXTURE_2D,Le,tt,re,he,0,Fe,et,null),re>>=1,he>>=1}}else if(dt.length>0){if(rt&&Tt){const re=We(dt[0]);n.texStorage2D(s.TEXTURE_2D,Ce,tt,re.width,re.height)}for(let re=0,he=dt.length;re<he;re++)Oe=dt[re],rt?G&&n.texSubImage2D(s.TEXTURE_2D,re,0,0,Fe,et,Oe):n.texImage2D(s.TEXTURE_2D,re,tt,Fe,et,Oe);E.generateMipmaps=!1}else if(rt){if(Tt){const re=We(ye);n.texStorage2D(s.TEXTURE_2D,Ce,tt,re.width,re.height)}G&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,et,ye)}else n.texImage2D(s.TEXTURE_2D,0,tt,Fe,et,ye);y(E)&&g(fe),Ve.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function pe(P,E,Z){if(E.image.length!==6)return;const fe=Ue(P,E),_e=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);const ue=r.get(_e);if(_e.version!==ue.__version||fe===!0){n.activeTexture(s.TEXTURE0+Z);const Ve=Mt.getPrimaries(Mt.workingColorSpace),Ae=E.colorSpace===mr?null:Mt.getPrimaries(E.colorSpace),Ke=E.colorSpace===mr||Ve===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const $e=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!$e&&!ye?Fe[he]=C(E.image[he],!0,a.maxCubemapSize):Fe[he]=ye?E.image[he].image:E.image[he],Fe[he]=wt(E,Fe[he]);const et=Fe[0],tt=c.convert(E.format,E.colorSpace),Oe=c.convert(E.type),dt=D(E.internalFormat,tt,Oe,E.colorSpace),rt=E.isVideoTexture!==!0,Tt=ue.__version===void 0||fe===!0,G=_e.dataReady;let Ce=W(E,et);ne(s.TEXTURE_CUBE_MAP,E);let re;if($e){rt&&Tt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,et.width,et.height);for(let he=0;he<6;he++){re=Fe[he].mipmaps;for(let Le=0;Le<re.length;Le++){const Pe=re[Le];E.format!==si?tt!==null?rt?G&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,tt,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Pe.width,Pe.height,tt,Oe,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Pe.width,Pe.height,0,tt,Oe,Pe.data)}}}else{if(re=E.mipmaps,rt&&Tt){re.length>0&&Ce++;const he=We(Fe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,dt,he.width,he.height)}for(let he=0;he<6;he++)if(ye){rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,tt,Oe,Fe[he].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,Fe[he].width,Fe[he].height,0,tt,Oe,Fe[he].data);for(let Le=0;Le<re.length;Le++){const st=re[Le].image[he].image;rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,st.width,st.height,tt,Oe,st.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,st.width,st.height,0,tt,Oe,st.data)}}else{rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,tt,Oe,Fe[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,tt,Oe,Fe[he]);for(let Le=0;Le<re.length;Le++){const Pe=re[Le];rt?G&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,tt,Oe,Pe.image[he]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,tt,Oe,Pe.image[he])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),ue.__version=_e.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,Z,fe,_e,ue){const Ve=c.convert(Z.format,Z.colorSpace),Ae=c.convert(Z.type),Ke=D(Z.internalFormat,Ve,Ae,Z.colorSpace),$e=r.get(E),ye=r.get(Z);if(ye.__renderTarget=E,!$e.__hasExternalTextures){const Fe=Math.max(1,E.width>>ue),et=Math.max(1,E.height>>ue);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,ue,Ke,Fe,et,E.depth,0,Ve,Ae,null):n.texImage2D(_e,ue,Ke,Fe,et,0,Ve,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,_e,ye.__webglTexture,0,ht(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,_e,ye.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const fe=E.depthTexture,_e=fe&&fe.isDepthTexture?fe.type:null,ue=b(E.stencilBuffer,_e),Ve=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ht(E);ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,ue,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,P)}else{const fe=E.textures;for(let _e=0;_e<fe.length;_e++){const ue=fe[_e],Ve=c.convert(ue.format,ue.colorSpace),Ae=c.convert(ue.type),Ke=D(ue.internalFormat,Ve,Ae,ue.colorSpace),$e=ht(E);Z&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Ke,E.width,E.height):ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,Ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const fe=r.get(E.depthTexture);fe.__renderTarget=E,(!fe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),me(E.depthTexture,0);const _e=fe.__webglTexture,ue=ht(E);if(E.depthTexture.format===Fo)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===Oo)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,ue):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Xe(P){const E=r.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const fe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",_e)};fe.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=fe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const fe=P.texture.mipmaps;fe&&fe.length>0?we(E.__webglFramebuffer[0],P):we(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[fe],P,!1);else{const _e=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ue)}}else{const fe=P.texture.mipmaps;if(fe&&fe.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,P,!1);else{const _e=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Ge(P,E,Z){const fe=r.get(P);E!==void 0&&Ee(fe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Xe(P)}function Pt(P){const E=P.texture,Z=r.get(P),fe=r.get(E);P.addEventListener("dispose",F);const _e=P.textures,ue=P.isWebGLCubeRenderTarget===!0,Ve=_e.length>1;if(Ve||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,d.memory.textures++),ue){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Ke=0;Ke<E.mipmaps.length;Ke++)Z.__webglFramebuffer[Ae][Ke]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ae=0,Ke=_e.length;Ae<Ke;Ae++){const $e=r.get(_e[Ae]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&ut(P)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Ke=_e[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const $e=c.convert(Ke.format,Ke.colorSpace),ye=c.convert(Ke.type),Fe=D(Ke.internalFormat,$e,ye,Ke.colorSpace,P.isXRRenderTarget===!0),et=ht(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Fe,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ne(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ee(Z.__webglFramebuffer[Ae][Ke],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke);else Ee(Z.__webglFramebuffer[Ae],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ve){for(let Ae=0,Ke=_e.length;Ae<Ke;Ae++){const $e=_e[Ae],ye=r.get($e);n.bindTexture(s.TEXTURE_2D,ye.__webglTexture),ne(s.TEXTURE_2D,$e),Ee(Z.__webglFramebuffer,P,$e,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y($e)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,fe.__webglTexture),ne(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ke=0;Ke<E.mipmaps.length;Ke++)Ee(Z.__webglFramebuffer[Ke],P,E,s.COLOR_ATTACHMENT0,Ae,Ke);else Ee(Z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&g(Ae),n.unbindTexture()}P.depthBuffer&&Xe(P)}function Lt(P){const E=P.textures;for(let Z=0,fe=E.length;Z<fe;Z++){const _e=E[Z];if(y(_e)){const ue=I(P),Ve=r.get(_e).__webglTexture;n.bindTexture(ue,Ve),g(ue),n.unbindTexture()}}}const ct=[],z=[];function _n(P){if(P.samples>0){if(ut(P)===!1){const E=P.textures,Z=P.width,fe=P.height;let _e=s.COLOR_BUFFER_BIT;const ue=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(P),Ae=E.length>1;if(Ae)for(let $e=0;$e<E.length;$e++)n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Ke=P.texture.mipmaps;Ke&&Ke.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let $e=0;$e<E.length;$e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const ye=r.get(E[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,Z,fe,0,0,Z,fe,_e,s.NEAREST),p===!0&&(ct.length=0,z.length=0,ct.push(s.COLOR_ATTACHMENT0+$e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ct.push(ue),z.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let $e=0;$e<E.length;$e++){n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[$e]);const ye=r.get(E[$e]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ht(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ye(P){const E=d.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function wt(P,E){const Z=P.colorSpace,fe=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Ws&&Z!==mr&&(Mt.getTransfer(Z)===At?(fe!==si||_e!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function We(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=me,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=k,this.rebindTextures=Ge,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Lt,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function yy(s,e){function n(r,a=mr){let c;const d=Mt.getTransfer(a);if(r===ki)return s.UNSIGNED_BYTE;if(r===zd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===kd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Um)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dm)return s.BYTE;if(r===Nm)return s.SHORT;if(r===Uo)return s.UNSIGNED_SHORT;if(r===Od)return s.INT;if(r===$r)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===ko)return s.HALF_FLOAT;if(r===Im)return s.ALPHA;if(r===Fm)return s.RGB;if(r===si)return s.RGBA;if(r===Fo)return s.DEPTH_COMPONENT;if(r===Oo)return s.DEPTH_STENCIL;if(r===Om)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===zm)return s.RG;if(r===Hd)return s.RG_INTEGER;if(r===Vd)return s.RGBA_INTEGER;if(r===yl||r===Sl||r===Ml||r===El)if(d===At)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===yl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===yl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===od||r===ad||r===ld||r===cd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===od)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ld)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ud||r===dd||r===fd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===ud||r===dd)return d===At?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===fd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===hd||r===pd||r===md||r===gd||r===vd||r===_d||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===wd||r===Ad)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===md)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_d)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Md)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ed)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Td)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wd)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ad)return d===At?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Cd||r===Rd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Tl)return d===At?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===km||r===bd||r===Pd||r===Ld)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Tl)return c.COMPRESSED_RED_RGTC1_EXT;if(r===bd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,My=`
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

}`;class Ey{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new vn,c=e.properties.get(a);c.__webglTexture=n.texture,(n.depthNear!==r.depthNear||n.depthFar!==r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new yr({vertexShader:Sy,fragmentShader:My,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mi(new Nl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ty extends Xs{constructor(e,n){super();const r=this;let a=null,c=1,d=null,f="local-floor",p=1,m=null,v=null,_=null,x=null,S=null,w=null;const C=new Ey,y=n.getContextAttributes();let g=null,I=null;const D=[],b=[],W=new Rt;let H=null;const F=new qn;F.viewport=new Wt;const X=new qn;X.viewport=new Wt;const R=[F,X],A=new Wv;let B=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pe=D[Q];return pe===void 0&&(pe=new ku,D[Q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Q){let pe=D[Q];return pe===void 0&&(pe=new ku,D[Q]=pe),pe.getGripSpace()},this.getHand=function(Q){let pe=D[Q];return pe===void 0&&(pe=new ku,D[Q]=pe),pe.getHandSpace()};function te(Q){const pe=b.indexOf(Q.inputSource);if(pe===-1)return;const Ee=D[pe];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,m||d),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function de(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",de),a.removeEventListener("inputsourceschange",me);for(let Q=0;Q<D.length;Q++){const pe=b[Q];pe!==null&&(b[Q]=null,D[Q].disconnect(pe))}B=null,ae=null,C.reset(),e.setRenderTarget(g),S=null,x=null,_=null,a=null,I=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(H),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){c=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",de),a.addEventListener("inputsourceschange",me),y.xrCompatible!==!0&&await n.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(W),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,xe=null,we=null;y.depth&&(we=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ee=y.stencil?Oo:Fo,xe=y.stencil?Io:$r);const Xe={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:c};_=new XRWebGLBinding(a,n),x=_.createProjectionLayer(Xe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new Kr(x.textureWidth,x.textureHeight,{format:si,type:ki,depthTexture:new Zm(x.textureWidth,x.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Ee={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(a,n,Ee),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),I=new Kr(S.framebufferWidth,S.framebufferHeight,{format:si,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function me(Q){for(let pe=0;pe<Q.removed.length;pe++){const Ee=Q.removed[pe],xe=b.indexOf(Ee);xe>=0&&(b[xe]=null,D[xe].disconnect(Ee))}for(let pe=0;pe<Q.added.length;pe++){const Ee=Q.added[pe];let xe=b.indexOf(Ee);if(xe===-1){for(let Xe=0;Xe<D.length;Xe++)if(Xe>=b.length){b.push(Ee),xe=Xe;break}else if(b[Xe]===null){b[Xe]=Ee,xe=Xe;break}if(xe===-1)break}const we=D[xe];we&&we.connect(Ee)}}const oe=new ie,ce=new ie;function k(Q,pe,Ee){oe.setFromMatrixPosition(pe.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const xe=oe.distanceTo(ce),we=pe.projectionMatrix.elements,Xe=Ee.projectionMatrix.elements,Ge=we[14]/(we[10]-1),Pt=we[14]/(we[10]+1),Lt=(we[9]+1)/we[5],ct=(we[9]-1)/we[5],z=(we[8]-1)/we[0],_n=(Xe[8]+1)/Xe[0],ht=Ge*z,ut=Ge*_n,Ye=xe/(-z+_n),wt=Ye*-z;if(pe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(wt),Q.translateZ(Ye),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const We=Ge+Ye,P=Pt+Ye,E=ht-wt,Z=ut+(xe-wt),fe=Lt*Pt/P*We,_e=ct*Pt/P*We;Q.projectionMatrix.makePerspective(E,Z,fe,_e,We,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,pe){pe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let pe=Q.near,Ee=Q.far;C.texture!==null&&(C.depthNear>0&&(pe=C.depthNear),C.depthFar>0&&(Ee=C.depthFar)),A.near=X.near=F.near=pe,A.far=X.far=F.far=Ee,(B!==A.near||ae!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),B=A.near,ae=A.far),F.layers.mask=Q.layers.mask|2,X.layers.mask=Q.layers.mask|4,A.layers.mask=F.layers.mask|X.layers.mask;const xe=Q.parent,we=A.cameras;le(A,xe);for(let Xe=0;Xe<we.length;Xe++)le(we[Xe],xe);we.length===2?k(A,F,X):A.projectionMatrix.copy(F.projectionMatrix),se(Q,A,xe)};function se(Q,pe,Ee){Ee===null?Q.matrix.copy(pe.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pe.projectionMatrix),Q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Dd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(A)};let U=null;function ne(Q,pe){if(v=pe.getViewerPose(m||d),w=pe,v!==null){const Ee=v.views;S!==null&&(e.setRenderTargetFramebuffer(I,S.framebuffer),e.setRenderTarget(I));let xe=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,xe=!0);for(let Ge=0;Ge<Ee.length;Ge++){const Pt=Ee[Ge];let Lt=null;if(S!==null)Lt=S.getViewport(Pt);else{const z=_.getViewSubImage(x,Pt);Lt=z.viewport,Ge===0&&(e.setRenderTargetTextures(I,z.colorTexture,z.depthStencilTexture),e.setRenderTarget(I))}let ct=R[Ge];ct===void 0&&(ct=new qn,ct.layers.enable(Ge),ct.viewport=new Wt,R[Ge]=ct),ct.matrix.fromArray(Pt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Pt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),Ge===0&&(A.matrix.copy(ct.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),xe===!0&&A.cameras.push(ct)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){const Ge=_.getDepthInformation(Ee[0]);Ge&&Ge.isValid&&Ge.texture&&C.init(e,Ge,a.renderState)}}for(let Ee=0;Ee<D.length;Ee++){const xe=b[Ee],we=D[Ee];xe!==null&&we!==void 0&&we.update(xe,pe,m||d)}U&&U(Q,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),w=null}const Ue=new Qm;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Q){U=Q},this.dispose=function(){}}}const Br=new Bi,wy=new jt;function Ay(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Ym(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,I,D,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),v(y,g)):g.isMeshStandardMaterial?(c(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,b)):g.isMeshMatcapMaterial?(c(y,g),w(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),C(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?p(y,g,I,D):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Dn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Dn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const I=e.get(g),D=I.envMap,b=I.envMapRotation;D&&(y.envMap.value=D,Br.copy(b),Br.x*=-1,Br.y*=-1,Br.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),y.envMapRotation.value.setFromMatrix4(wy.makeRotationFromEuler(Br)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function p(y,g,I,D){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*I,y.scale.value=D*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function v(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,I){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function C(y,g){const I=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function Cy(s,e,n,r){let a={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,D){const b=D.program;r.uniformBlockBinding(I,b)}function m(I,D){let b=a[I.id];b===void 0&&(w(I),b=v(I),a[I.id]=b,I.addEventListener("dispose",y));const W=D.program;r.updateUBOMapping(I,W);const H=e.render.frame;c[I.id]!==H&&(x(I),c[I.id]=H)}function v(I){const D=_();I.__bindingPointIndex=D;const b=s.createBuffer(),W=I.__size,H=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,W,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,b),b}function _(){for(let I=0;I<f;I++)if(d.indexOf(I)===-1)return d.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const D=a[I.id],b=I.uniforms,W=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,F=b.length;H<F;H++){const X=Array.isArray(b[H])?b[H]:[b[H]];for(let R=0,A=X.length;R<A;R++){const B=X[R];if(S(B,H,R,W)===!0){const ae=B.__offset,te=Array.isArray(B.value)?B.value:[B.value];let de=0;for(let me=0;me<te.length;me++){const oe=te[me],ce=C(oe);typeof oe=="number"||typeof oe=="boolean"?(B.__data[0]=oe,s.bufferSubData(s.UNIFORM_BUFFER,ae+de,B.__data)):oe.isMatrix3?(B.__data[0]=oe.elements[0],B.__data[1]=oe.elements[1],B.__data[2]=oe.elements[2],B.__data[3]=0,B.__data[4]=oe.elements[3],B.__data[5]=oe.elements[4],B.__data[6]=oe.elements[5],B.__data[7]=0,B.__data[8]=oe.elements[6],B.__data[9]=oe.elements[7],B.__data[10]=oe.elements[8],B.__data[11]=0):(oe.toArray(B.__data,de),de+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(I,D,b,W){const H=I.value,F=D+"_"+b;if(W[F]===void 0)return typeof H=="number"||typeof H=="boolean"?W[F]=H:W[F]=H.clone(),!0;{const X=W[F];if(typeof H=="number"||typeof H=="boolean"){if(X!==H)return W[F]=H,!0}else if(X.equals(H)===!1)return X.copy(H),!0}return!1}function w(I){const D=I.uniforms;let b=0;const W=16;for(let F=0,X=D.length;F<X;F++){const R=Array.isArray(D[F])?D[F]:[D[F]];for(let A=0,B=R.length;A<B;A++){const ae=R[A],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let de=0,me=te.length;de<me;de++){const oe=te[de],ce=C(oe),k=b%W,le=k%ce.boundary,se=k+le;b+=le,se!==0&&W-se<ce.storage&&(b+=W-se),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=b,b+=ce.storage}}}const H=b%W;return H>0&&(b+=W-H),I.__size=b,I.__cache={},this}function C(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function y(I){const D=I.target;D.removeEventListener("dispose",y);const b=d.indexOf(D.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(a[D.id]),delete a[D.id],delete c[D.id]}function g(){for(const I in a)s.deleteBuffer(a[I]);d=[],a={},c={}}return{bind:p,update:m,dispose:g}}class Ry{constructor(e={}){const{canvas:n=sv(),context:r=null,depth:a=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const w=new Uint32Array(4),C=new Int32Array(4);let y=null,g=null;const I=[],D=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_r,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let W=!1;this._outputColorSpace=Yn;let H=0,F=0,X=null,R=-1,A=null;const B=new Wt,ae=new Wt;let te=null;const de=new Ct(0);let me=0,oe=n.width,ce=n.height,k=1,le=null,se=null;const U=new Wt(0,0,oe,ce),ne=new Wt(0,0,oe,ce);let Ue=!1;const Q=new Km;let pe=!1,Ee=!1;const xe=new jt,we=new jt,Xe=new ie,Ge=new Wt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function ct(){return X===null?k:1}let z=r;function _n(T,j){return n.getContext(T,j)}try{const T={alpha:!0,depth:a,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fd}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),z===null){const j="webgl2";if(z=_n(j,T),z===null)throw _n(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ht,ut,Ye,wt,We,P,E,Z,fe,_e,ue,Ve,Ae,Ke,$e,ye,Fe,et,tt,Oe,dt,rt,Tt,G;function Ce(){ht=new zx(z),ht.init(),rt=new yy(z,ht),ut=new Lx(z,ht,e,rt),Ye=new _y(z,ht),ut.reverseDepthBuffer&&x&&Ye.buffers.depth.setReversed(!0),wt=new Hx(z),We=new sy,P=new xy(z,ht,Ye,We,ut,rt,wt),E=new Nx(b),Z=new Ox(b),fe=new Yv(z),Tt=new bx(z,fe),_e=new kx(z,fe,wt,Tt),ue=new Gx(z,_e,fe,wt),tt=new Vx(z,ut,P),ye=new Dx(We),Ve=new ry(b,E,Z,ht,ut,Tt,ye),Ae=new Ay(b,We),Ke=new ay,$e=new hy(ht),et=new Rx(b,E,Z,Ye,ue,S,p),Fe=new gy(b,ue,ut),G=new Cy(z,wt,ut,Ye),Oe=new Px(z,ht,wt),dt=new Bx(z,ht,wt),wt.programs=Ve.programs,b.capabilities=ut,b.extensions=ht,b.properties=We,b.renderLists=Ke,b.shadowMap=Fe,b.state=Ye,b.info=wt}Ce();const re=new Ty(b,z);this.xr=re,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=ht.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ht.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(T){T!==void 0&&(k=T,this.setSize(oe,ce,!1))},this.getSize=function(T){return T.set(oe,ce)},this.setSize=function(T,j,ee=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=T,ce=j,n.width=Math.floor(T*k),n.height=Math.floor(j*k),ee===!0&&(n.style.width=T+"px",n.style.height=j+"px"),this.setViewport(0,0,T,j)},this.getDrawingBufferSize=function(T){return T.set(oe*k,ce*k).floor()},this.setDrawingBufferSize=function(T,j,ee){oe=T,ce=j,k=ee,n.width=Math.floor(T*ee),n.height=Math.floor(j*ee),this.setViewport(0,0,T,j)},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,j,ee,$){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,j,ee,$),Ye.viewport(B.copy(U).multiplyScalar(k).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,j,ee,$){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,j,ee,$),Ye.scissor(ae.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){Ye.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){se=T},this.getClearColor=function(T){return T.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(T=!0,j=!0,ee=!0){let $=0;if(T){let Y=!1;if(X!==null){const Me=X.texture.format;Y=Me===Vd||Me===Hd||Me===Bd}if(Y){const Me=X.texture.type,Re=Me===ki||Me===$r||Me===Uo||Me===Io||Me===zd||Me===kd,De=et.getClearColor(),ze=et.getClearAlpha(),nt=De.r,Je=De.g,Be=De.b;Re?(w[0]=nt,w[1]=Je,w[2]=Be,w[3]=ze,z.clearBufferuiv(z.COLOR,0,w)):(C[0]=nt,C[1]=Je,C[2]=Be,C[3]=ze,z.clearBufferiv(z.COLOR,0,C))}else $|=z.COLOR_BUFFER_BIT}j&&($|=z.DEPTH_BUFFER_BIT),ee&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),et.dispose(),Ke.dispose(),$e.dispose(),We.dispose(),E.dispose(),Z.dispose(),ue.dispose(),Tt.dispose(),G.dispose(),Ve.dispose(),re.dispose(),re.removeEventListener("sessionstart",Qr),re.removeEventListener("sessionend",Hi),vi.stop()};function he(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const T=wt.autoReset,j=Fe.enabled,ee=Fe.autoUpdate,$=Fe.needsUpdate,Y=Fe.type;Ce(),wt.autoReset=T,Fe.enabled=j,Fe.autoUpdate=ee,Fe.needsUpdate=$,Fe.type=Y}function Pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function st(T){const j=T.target;j.removeEventListener("dispose",st),Nt(j)}function Nt(T){qt(T),We.remove(T)}function qt(T){const j=We.get(T).programs;j!==void 0&&(j.forEach(function(ee){Ve.releaseProgram(ee)}),T.isShaderMaterial&&Ve.releaseShaderCache(T))}this.renderBufferDirect=function(T,j,ee,$,Y,Me){j===null&&(j=Pt);const Re=Y.isMesh&&Y.matrixWorld.determinant()<0,De=jo(T,j,ee,$,Y);Ye.setMaterial($,Re);let ze=ee.index,nt=1;if($.wireframe===!0){if(ze=_e.getWireframeAttribute(ee),ze===void 0)return;nt=2}const Je=ee.drawRange,Be=ee.attributes.position;let mt=Je.start*nt,ot=(Je.start+Je.count)*nt;Me!==null&&(mt=Math.max(mt,Me.start*nt),ot=Math.min(ot,(Me.start+Me.count)*nt)),ze!==null?(mt=Math.max(mt,0),ot=Math.min(ot,ze.count)):Be!=null&&(mt=Math.max(mt,0),ot=Math.min(ot,Be.count));const Bt=ot-mt;if(Bt<0||Bt===1/0)return;Tt.setup(Y,$,De,ee,ze);let Ft,vt=Oe;if(ze!==null&&(Ft=fe.get(ze),vt=dt,vt.setIndex(Ft)),Y.isMesh)$.wireframe===!0?(Ye.setLineWidth($.wireframeLinewidth*ct()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(Y.isLine){let qe=$.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*ct()),Y.isLineSegments?vt.setMode(z.LINES):Y.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else Y.isPoints?vt.setMode(z.POINTS):Y.isSprite&&vt.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)wl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))vt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const qe=Y._multiDrawStarts,Ht=Y._multiDrawCounts,pt=Y._multiDrawCount,cn=ze?fe.get(ze).bytesPerElement:1,Gi=We.get($).currentProgram.getUniforms();for(let yn=0;yn<pt;yn++)Gi.setValue(z,"_gl_DrawID",yn),vt.render(qe[yn]/cn,Ht[yn])}else if(Y.isInstancedMesh)vt.renderInstances(mt,Bt,Y.count);else if(ee.isInstancedBufferGeometry){const qe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ht=Math.min(ee.instanceCount,qe);vt.renderInstances(mt,Bt,Ht)}else vt.render(mt,Bt)};function _t(T,j,ee){T.transparent===!0&&T.side===Ui&&T.forceSinglePass===!1?(T.side=Dn,T.needsUpdate=!0,Jr(T,j,ee),T.side=xr,T.needsUpdate=!0,Jr(T,j,ee),T.side=Ui):Jr(T,j,ee)}this.compile=function(T,j,ee=null){ee===null&&(ee=T),g=$e.get(ee),g.init(j),D.push(g),ee.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),T!==ee&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(j.layers)&&(g.pushLight(Y),Y.castShadow&&g.pushShadow(Y))}),g.setupLights();const $=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Me=Y.material;if(Me)if(Array.isArray(Me))for(let Re=0;Re<Me.length;Re++){const De=Me[Re];_t(De,ee,Y),$.add(De)}else _t(Me,ee,Y),$.add(Me)}),g=D.pop(),$},this.compileAsync=function(T,j,ee=null){const $=this.compile(T,j,ee);return new Promise(Y=>{function Me(){if($.forEach(function(Re){We.get(Re).currentProgram.isReady()&&$.delete(Re)}),$.size===0){Y(T);return}setTimeout(Me,10)}ht.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Tn=null;function xn(T){Tn&&Tn(T)}function Qr(){vi.stop()}function Hi(){vi.start()}const vi=new Qm;vi.setAnimationLoop(xn),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(T){Tn=T,re.setAnimationLoop(T),T===null?vi.stop():vi.start()},re.addEventListener("sessionstart",Qr),re.addEventListener("sessionend",Hi),this.render=function(T,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(j),j=re.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,j,X),g=$e.get(T,D.length),g.init(j),D.push(g),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,pe=ye.init(this.clippingPlanes,Ee),y=Ke.get(T,I.length),y.init(),I.push(y),re.enabled===!0&&re.isPresenting===!0){const Me=b.xr.getDepthSensingMesh();Me!==null&&_i(Me,j,-1/0,b.sortObjects)}_i(T,j,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(le,se),Lt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Lt&&et.addToRenderList(y,T),this.info.render.frame++,pe===!0&&ye.beginShadows();const ee=g.state.shadowsArray;Fe.render(ee,T,j),pe===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=y.opaque,Y=y.transmissive;if(g.setupLights(),j.isArrayCamera){const Me=j.cameras;if(Y.length>0)for(let Re=0,De=Me.length;Re<De;Re++){const ze=Me[Re];Mr($,Y,T,ze)}Lt&&et.render(T);for(let Re=0,De=Me.length;Re<De;Re++){const ze=Me[Re];Sr(y,T,ze,ze.viewport)}}else Y.length>0&&Mr($,Y,T,j),Lt&&et.render(T),Sr(y,T,j);X!==null&&F===0&&(P.updateMultisampleRenderTarget(X),P.updateRenderTargetMipmap(X)),T.isScene===!0&&T.onAfterRender(b,T,j),Tt.resetDefaultState(),R=-1,A=null,D.pop(),D.length>0?(g=D[D.length-1],pe===!0&&ye.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function _i(T,j,ee,$){if(T.visible===!1)return;if(T.layers.test(j.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(j);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){$&&Ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(we);const Re=ue.update(T),De=T.material;De.visible&&y.push(T,Re,De,ee,Ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Re=ue.update(T),De=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ge.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ge.copy(Re.boundingSphere.center)),Ge.applyMatrix4(T.matrixWorld).applyMatrix4(we)),Array.isArray(De)){const ze=Re.groups;for(let nt=0,Je=ze.length;nt<Je;nt++){const Be=ze[nt],mt=De[Be.materialIndex];mt&&mt.visible&&y.push(T,Re,mt,ee,Ge.z,Be)}}else De.visible&&y.push(T,Re,De,ee,Ge.z,null)}}const Me=T.children;for(let Re=0,De=Me.length;Re<De;Re++)_i(Me[Re],j,ee,$)}function Sr(T,j,ee,$){const Y=T.opaque,Me=T.transmissive,Re=T.transparent;g.setupLightsView(ee),pe===!0&&ye.setGlobalState(b.clippingPlanes,ee),$&&Ye.viewport(B.copy($)),Y.length>0&&Vi(Y,j,ee),Me.length>0&&Vi(Me,j,ee),Re.length>0&&Vi(Re,j,ee),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Mr(T,j,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[$.id]===void 0&&(g.state.transmissionRenderTarget[$.id]=new Kr(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ko:ki,minFilter:Yr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Me=g.state.transmissionRenderTarget[$.id],Re=$.viewport||B;Me.setSize(Re.z*b.transmissionResolutionScale,Re.w*b.transmissionResolutionScale);const De=b.getRenderTarget();b.setRenderTarget(Me),b.getClearColor(de),me=b.getClearAlpha(),me<1&&b.setClearColor(16777215,.5),b.clear(),Lt&&et.render(ee);const ze=b.toneMapping;b.toneMapping=_r;const nt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),g.setupLightsView($),pe===!0&&ye.setGlobalState(b.clippingPlanes,$),Vi(T,ee,$),P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Be=0,mt=j.length;Be<mt;Be++){const ot=j[Be],Bt=ot.object,Ft=ot.geometry,vt=ot.material,qe=ot.group;if(vt.side===Ui&&Bt.layers.test($.layers)){const Ht=vt.side;vt.side=Dn,vt.needsUpdate=!0,Go(Bt,ee,$,Ft,vt,qe),vt.side=Ht,vt.needsUpdate=!0,Je=!0}}Je===!0&&(P.updateMultisampleRenderTarget(Me),P.updateRenderTargetMipmap(Me))}b.setRenderTarget(De),b.setClearColor(de,me),nt!==void 0&&($.viewport=nt),b.toneMapping=ze}function Vi(T,j,ee){const $=j.isScene===!0?j.overrideMaterial:null;for(let Y=0,Me=T.length;Y<Me;Y++){const Re=T[Y],De=Re.object,ze=Re.geometry,nt=Re.group;let Je=Re.material;Je.allowOverride===!0&&$!==null&&(Je=$),De.layers.test(ee.layers)&&Go(De,j,ee,ze,Je,nt)}}function Go(T,j,ee,$,Y,Me){T.onBeforeRender(b,j,ee,$,Y,Me),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(b,j,ee,$,T,Me),Y.transparent===!0&&Y.side===Ui&&Y.forceSinglePass===!1?(Y.side=Dn,Y.needsUpdate=!0,b.renderBufferDirect(ee,j,$,Y,T,Me),Y.side=xr,Y.needsUpdate=!0,b.renderBufferDirect(ee,j,$,Y,T,Me),Y.side=Ui):b.renderBufferDirect(ee,j,$,Y,T,Me),T.onAfterRender(b,j,ee,$,Y,Me)}function Jr(T,j,ee){j.isScene!==!0&&(j=Pt);const $=We.get(T),Y=g.state.lights,Me=g.state.shadowsArray,Re=Y.state.version,De=Ve.getParameters(T,Y.state,Me,j,ee),ze=Ve.getProgramCacheKey(De);let nt=$.programs;$.environment=T.isMeshStandardMaterial?j.environment:null,$.fog=j.fog,$.envMap=(T.isMeshStandardMaterial?Z:E).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?j.environmentRotation:T.envMapRotation,nt===void 0&&(T.addEventListener("dispose",st),nt=new Map,$.programs=nt);let Je=nt.get(ze);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Re)return ai(T,De),Je}else De.uniforms=Ve.getUniforms(T),T.onBeforeCompile(De,b),Je=Ve.acquireProgram(De,ze),nt.set(ze,Je),$.uniforms=De.uniforms;const Be=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=ye.uniform),ai(T,De),$.needsLights=Il(T),$.lightsStateVersion=Re,$.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Je,$.uniformsList=null,Je}function Wo(T){if(T.uniformsList===null){const j=T.currentProgram.getUniforms();T.uniformsList=Al.seqWithValue(j.seq,T.uniforms)}return T.uniformsList}function ai(T,j){const ee=We.get(T);ee.outputColorSpace=j.outputColorSpace,ee.batching=j.batching,ee.batchingColor=j.batchingColor,ee.instancing=j.instancing,ee.instancingColor=j.instancingColor,ee.instancingMorph=j.instancingMorph,ee.skinning=j.skinning,ee.morphTargets=j.morphTargets,ee.morphNormals=j.morphNormals,ee.morphColors=j.morphColors,ee.morphTargetsCount=j.morphTargetsCount,ee.numClippingPlanes=j.numClippingPlanes,ee.numIntersection=j.numClipIntersection,ee.vertexAlphas=j.vertexAlphas,ee.vertexTangents=j.vertexTangents,ee.toneMapping=j.toneMapping}function jo(T,j,ee,$,Y){j.isScene!==!0&&(j=Pt),P.resetTextureUnits();const Me=j.fog,Re=$.isMeshStandardMaterial?j.environment:null,De=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ws,ze=($.isMeshStandardMaterial?Z:E).get($.envMap||Re),nt=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Je=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Be=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,ot=!!ee.morphAttributes.color;let Bt=_r;$.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Bt=b.toneMapping);const Ft=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,vt=Ft!==void 0?Ft.length:0,qe=We.get($),Ht=g.state.lights;if(pe===!0&&(Ee===!0||T!==A)){const on=T===A&&$.id===R;ye.setState($,T,on)}let pt=!1;$.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ht.state.version||qe.outputColorSpace!==De||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==ze||$.fog===!0&&qe.fog!==Me||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ye.numPlanes||qe.numIntersection!==ye.numIntersection)||qe.vertexAlphas!==nt||qe.vertexTangents!==Je||qe.morphTargets!==Be||qe.morphNormals!==mt||qe.morphColors!==ot||qe.toneMapping!==Bt||qe.morphTargetsCount!==vt)&&(pt=!0):(pt=!0,qe.__version=$.version);let cn=qe.currentProgram;pt===!0&&(cn=Jr($,j,Y));let Gi=!1,yn=!1,xi=!1;const bt=cn.getUniforms(),un=qe.uniforms;if(Ye.useProgram(cn.program)&&(Gi=!0,yn=!0,xi=!0),$.id!==R&&(R=$.id,yn=!0),Gi||A!==T){Ye.buffers.depth.getReversed()?(xe.copy(T.projectionMatrix),av(xe),lv(xe),bt.setValue(z,"projectionMatrix",xe)):bt.setValue(z,"projectionMatrix",T.projectionMatrix),bt.setValue(z,"viewMatrix",T.matrixWorldInverse);const en=bt.map.cameraPosition;en!==void 0&&en.setValue(z,Xe.setFromMatrixPosition(T.matrixWorld)),ut.logarithmicDepthBuffer&&bt.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&bt.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,yn=!0,xi=!0)}if(Y.isSkinnedMesh){bt.setOptional(z,Y,"bindMatrix"),bt.setOptional(z,Y,"bindMatrixInverse");const on=Y.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),bt.setValue(z,"boneTexture",on.boneTexture,P))}Y.isBatchedMesh&&(bt.setOptional(z,Y,"batchingTexture"),bt.setValue(z,"batchingTexture",Y._matricesTexture,P),bt.setOptional(z,Y,"batchingIdTexture"),bt.setValue(z,"batchingIdTexture",Y._indirectTexture,P),bt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&bt.setValue(z,"batchingColorTexture",Y._colorsTexture,P));const Jt=ee.morphAttributes;if((Jt.position!==void 0||Jt.normal!==void 0||Jt.color!==void 0)&&tt.update(Y,ee,cn),(yn||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,bt.setValue(z,"receiveShadow",Y.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(un.envMap.value=ze,un.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&j.environment!==null&&(un.envMapIntensity.value=j.environmentIntensity),yn&&(bt.setValue(z,"toneMappingExposure",b.toneMappingExposure),qe.needsLights&&Xo(un,xi),Me&&$.fog===!0&&Ae.refreshFogUniforms(un,Me),Ae.refreshMaterialUniforms(un,$,k,ce,g.state.transmissionRenderTarget[T.id]),Al.upload(z,Wo(qe),un,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Al.upload(z,Wo(qe),un,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&bt.setValue(z,"center",Y.center),bt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),bt.setValue(z,"normalMatrix",Y.normalMatrix),bt.setValue(z,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const on=$.uniformsGroups;for(let en=0,xt=on.length;en<xt;en++){const li=on[en];G.update(li,cn),G.bind(li,cn)}}return cn}function Xo(T,j){T.ambientLightColor.needsUpdate=j,T.lightProbe.needsUpdate=j,T.directionalLights.needsUpdate=j,T.directionalLightShadows.needsUpdate=j,T.pointLights.needsUpdate=j,T.pointLightShadows.needsUpdate=j,T.spotLights.needsUpdate=j,T.spotLightShadows.needsUpdate=j,T.rectAreaLights.needsUpdate=j,T.hemisphereLights.needsUpdate=j}function Il(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,j,ee){const $=We.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),We.get(T.texture).__webglTexture=j,We.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,j){const ee=We.get(T);ee.__webglFramebuffer=j,ee.__useDefaultFramebuffer=j===void 0};const Yo=z.createFramebuffer();this.setRenderTarget=function(T,j=0,ee=0){X=T,H=j,F=ee;let $=!0,Y=null,Me=!1,Re=!1;if(T){const ze=We.get(T);if(ze.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(z.FRAMEBUFFER,null),$=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(T);else if(ze.__hasExternalTextures)P.rebindTextures(T,We.get(T.texture).__webglTexture,We.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(ze.__boundDepthTexture!==Be){if(Be!==null&&We.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(T)}}const nt=T.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Re=!0);const Je=We.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Je[j])?Y=Je[j][ee]:Y=Je[j],Me=!0):T.samples>0&&P.useMultisampledRTT(T)===!1?Y=We.get(T).__webglMultisampledFramebuffer:Array.isArray(Je)?Y=Je[ee]:Y=Je,B.copy(T.viewport),ae.copy(T.scissor),te=T.scissorTest}else B.copy(U).multiplyScalar(k).floor(),ae.copy(ne).multiplyScalar(k).floor(),te=Ue;if(ee!==0&&(Y=Yo),Ye.bindFramebuffer(z.FRAMEBUFFER,Y)&&$&&Ye.drawBuffers(T,Y),Ye.viewport(B),Ye.scissor(ae),Ye.setScissorTest(te),Me){const ze=We.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,ee)}else if(Re){const ze=We.get(T.texture),nt=j;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,ze.__webglTexture,ee,nt)}else if(T!==null&&ee!==0){const ze=We.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ze.__webglTexture,ee)}R=-1},this.readRenderTargetPixels=function(T,j,ee,$,Y,Me,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){Ye.bindFramebuffer(z.FRAMEBUFFER,De);try{const ze=T.texture,nt=ze.format,Je=ze.type;if(!ut.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=T.width-$&&ee>=0&&ee<=T.height-Y&&z.readPixels(j,ee,$,Y,rt.convert(nt),rt.convert(Je),Me)}finally{const ze=X!==null?We.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(T,j,ee,$,Y,Me,Re){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De)if(j>=0&&j<=T.width-$&&ee>=0&&ee<=T.height-Y){Ye.bindFramebuffer(z.FRAMEBUFFER,De);const ze=T.texture,nt=ze.format,Je=ze.type;if(!ut.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Be),z.bufferData(z.PIXEL_PACK_BUFFER,Me.byteLength,z.STREAM_READ),z.readPixels(j,ee,$,Y,rt.convert(nt),rt.convert(Je),0);const mt=X!==null?We.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(z.FRAMEBUFFER,mt);const ot=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ov(z,ot,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Be),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Me),z.deleteBuffer(Be),z.deleteSync(ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,j=null,ee=0){const $=Math.pow(2,-ee),Y=Math.floor(T.image.width*$),Me=Math.floor(T.image.height*$),Re=j!==null?j.x:0,De=j!==null?j.y:0;P.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,ee,0,0,Re,De,Y,Me),Ye.unbindTexture()};const qo=z.createFramebuffer(),$o=z.createFramebuffer();this.copyTextureToTexture=function(T,j,ee=null,$=null,Y=0,Me=null){Me===null&&(Y!==0?(wl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=Y,Y=0):Me=0);let Re,De,ze,nt,Je,Be,mt,ot,Bt;const Ft=T.isCompressedTexture?T.mipmaps[Me]:T.image;if(ee!==null)Re=ee.max.x-ee.min.x,De=ee.max.y-ee.min.y,ze=ee.isBox3?ee.max.z-ee.min.z:1,nt=ee.min.x,Je=ee.min.y,Be=ee.isBox3?ee.min.z:0;else{const Jt=Math.pow(2,-Y);Re=Math.floor(Ft.width*Jt),De=Math.floor(Ft.height*Jt),T.isDataArrayTexture?ze=Ft.depth:T.isData3DTexture?ze=Math.floor(Ft.depth*Jt):ze=1,nt=0,Je=0,Be=0}$!==null?(mt=$.x,ot=$.y,Bt=$.z):(mt=0,ot=0,Bt=0);const vt=rt.convert(j.format),qe=rt.convert(j.type);let Ht;j.isData3DTexture?(P.setTexture3D(j,0),Ht=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),Ht=z.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),Ht=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const pt=z.getParameter(z.UNPACK_ROW_LENGTH),cn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Gi=z.getParameter(z.UNPACK_SKIP_PIXELS),yn=z.getParameter(z.UNPACK_SKIP_ROWS),xi=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ft.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ft.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,nt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Je),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Be);const bt=T.isDataArrayTexture||T.isData3DTexture,un=j.isDataArrayTexture||j.isData3DTexture;if(T.isDepthTexture){const Jt=We.get(T),on=We.get(j),en=We.get(Jt.__renderTarget),xt=We.get(on.__renderTarget);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let li=0;li<ze;li++)bt&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(T).__webglTexture,Y,Be+li),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,We.get(j).__webglTexture,Me,Bt+li)),z.blitFramebuffer(nt,Je,Re,De,mt,ot,Re,De,z.DEPTH_BUFFER_BIT,z.NEAREST);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||We.has(T)){const Jt=We.get(T),on=We.get(j);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,qo),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,$o);for(let en=0;en<ze;en++)bt?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Jt.__webglTexture,Y,Be+en):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Jt.__webglTexture,Y),un?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,on.__webglTexture,Me,Bt+en):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,on.__webglTexture,Me),Y!==0?z.blitFramebuffer(nt,Je,Re,De,mt,ot,Re,De,z.COLOR_BUFFER_BIT,z.NEAREST):un?z.copyTexSubImage3D(Ht,Me,mt,ot,Bt+en,nt,Je,Re,De):z.copyTexSubImage2D(Ht,Me,mt,ot,nt,Je,Re,De);Ye.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else un?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Ht,Me,mt,ot,Bt,Re,De,ze,vt,qe,Ft.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(Ht,Me,mt,ot,Bt,Re,De,ze,vt,Ft.data):z.texSubImage3D(Ht,Me,mt,ot,Bt,Re,De,ze,vt,qe,Ft):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Me,mt,ot,Re,De,vt,qe,Ft.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Me,mt,ot,Ft.width,Ft.height,vt,Ft.data):z.texSubImage2D(z.TEXTURE_2D,Me,mt,ot,Re,De,vt,qe,Ft);z.pixelStorei(z.UNPACK_ROW_LENGTH,pt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,cn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Gi),z.pixelStorei(z.UNPACK_SKIP_ROWS,yn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,xi),Me===0&&j.generateMipmaps&&z.generateMipmap(Ht),Ye.unbindTexture()},this.copyTextureToTexture3D=function(T,j,ee=null,$=null,Y=0){return wl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,j,ee,$,Y)},this.initRenderTarget=function(T){We.get(T).__webglFramebuffer===void 0&&P.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),Ye.unbindTexture()},this.resetState=function(){H=0,F=0,X=null,Ye.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}const Am=[{title:"Flash Chat",image:"./projects/flash_chat.png",url:"https://github.com/bramha-deshmukh17/flash_chat",desc:`Flash Chat is a chatting app built using MERN

  It provides cloud support via MongoDB Atlas for storing user chats.

  Uses WebSocket for real‑time communication.

  Allows file and media sharing.`},{title:"Smart RTO",image:"./projects/rto.jpg",url:"https://github.com/bramha-deshmukh17/SmartRTO",desc:`Smart RTO is a mobile app designed using Flutter

  Streamlines RTO operations in India by providing citizens online access to license and fine management services.

  Manages user queries for licenses and vehicle fines.

  Integrates with payment gateways for fine payments.`},{title:"TourGuide",image:"./projects/tourguide.png",url:"https://github.com/bramha-deshmukh17/tourguide",desc:`TourGuide is a guide‑booking website built with Django

  Offers a comprehensive platform for tourists to book local guides.

  Showcases tourist attractions, restaurants, and hotels.

  Enhances the travel experience with detailed listings and easy booking.`},{title:"EduMate",image:"./projects/edumate.png",url:"https://github.com/bramha-deshmukh17/edumate",desc:`EduMate is an e-learning platform developed in PHP

  Features three modules: Student, Admin, and Discussion Forum.

  Provides a user friendly environment for course management.

  Encourages interactive discussions and collaborative learning.`}],by=s=>{const n=document.createElement("canvas");n.width=512,n.height=512;const r=n.getContext("2d");r.fillStyle="#ffffff",r.fillRect(0,0,512,512),r.fillStyle="#000000",r.font="24px Arial",r.textAlign="center",r.textBaseline="middle";const a=s.match(/.{1,30}(?:\s|$)/g);a.forEach((d,f)=>{r.fillText(d,512/2,512/2+(f-a.length/2)*30)});const c=new Fv(n);return c.needsUpdate=!0,c},Py=()=>{const s=Oi.useRef(null);return Oi.useEffect(()=>{const e=s.current;if(!e)return;const n=e.clientWidth,r=600,a=window.devicePixelRatio||1;e.width=n*a,e.height=r*a;const c=new Ry({canvas:e,antialias:!0,alpha:!0});c.setSize(n,r,!1),c.setPixelRatio(a);const d=new qn(45,n/r,.1,1e3);d.position.z=10;const f=new Nv,p=new Vv,m=[],v=4,_=3;Am.forEach((y,g)=>{const I=g/Am.length*Math.PI*2,D=Math.cos(I)*v,b=Math.sin(I)*v,W=[];for(let R=0;R<6;R++)W.push(new Xd({color:16777215}));p.load(y.image,R=>{R.encoding=void 0,W[4].map=R,W[4].needsUpdate=!0});const H=by(y.desc);W[5].map=H,W[5].needsUpdate=!0;const F=new Ys(_,_,.5),X=new mi(F,W);X.position.set(D,0,b),X.lookAt(0,0,0),X.userData.url=y.url,f.add(X),m.push(X)});const x=new jv,S=new Rt,w=y=>{const g=e.getBoundingClientRect();S.x=(y.clientX-g.left)/g.width*2-1,S.y=-((y.clientY-g.top)/g.height)*2+1,x.setFromCamera(S,d);const I=x.intersectObjects(m)[0];I&&window.open(I.object.userData.url,"_blank")};e.addEventListener("click",w);const C=()=>{requestAnimationFrame(C),f.rotation.y+=.002,c.render(f,d)};return C(),()=>{e.removeEventListener("click",w),c.dispose()}},[]),N.jsx("canvas",{ref:s,style:{width:"100%",height:"500px",display:"block"}})},Ly=()=>{const[s,e]=Oi.useState(!1),n=()=>e(r=>!r);return N.jsxs("section",{id:"projects",className:"m-5 mt-5 p-5 rounded",children:[N.jsxs("div",{className:"mb-8 flex items-center justify-between",children:[N.jsx("h2",{className:"text-3xl font-bold",children:"My Projects"}),N.jsxs("div",{className:"flex items-center",children:[N.jsx("span",{className:"mr-3",children:"2D"}),N.jsxs("label",{className:"relative inline-block w-12 h-6",children:[N.jsx("input",{type:"checkbox",checked:s,onChange:n,className:"peer opacity-0 w-0 h-0"}),N.jsx("span",{className:"absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition peer-checked:bg-blue-600"}),N.jsx("span",{className:"absolute left-0 top-0 bg-white w-6 h-6 rounded-full shadow transform transition peer-checked:translate-x-6"})]}),N.jsx("span",{className:"ml-3",children:"3D"})]})]}),s?N.jsx(Py,{}):N.jsxs("div",{className:"place-items-center m-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:[N.jsx("div",{className:"flip-card",children:N.jsxs("div",{className:"flip-card-inner rounded-lg",children:[N.jsxs("div",{className:"flip-card-front rounded-lg",children:[N.jsx("img",{src:"./projects/flash_chat.png",alt:"Flash Chat",className:"w-full h-16/9 object-fit rounded-lg"}),N.jsx("h2",{className:"project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg",children:"Flash Chat"})]}),N.jsx("div",{className:"flip-card-back rounded-lg text-justify",children:N.jsxs(jr,{className:"card",spotlightColor:"rgba(0, 229, 255, 0.2)",children:[N.jsxs("p",{children:[N.jsxs("b",{children:["Flash Chat is chatting app built using"," ",N.jsx(Os,{text:"MERN",disabled:!1,speed:1,className:"code"})]}),N.jsx("br",{}),"It provide cloud support of MongoDB Atlas to store the user chats.",N.jsx("br",{}),"Also uses web socket to have a realtime communication.",N.jsx("br",{}),"Allows files and media sharing."]}),N.jsxs("div",{className:"flex justify-center mt-4",children:[N.jsx(Fs,{size:30}),N.jsx("a",{href:"https://github.com/bramha-deshmukh17/flash_chat",target:"_blank",rel:"noopener noreferrer",className:"ml-2",children:"View"})]})]})})]})}),N.jsx("div",{className:"flip-card",children:N.jsxs("div",{className:"flip-card-inner rounded-lg",children:[N.jsxs("div",{className:"flip-card-front rounded-lg",children:[N.jsx("img",{src:"./projects/rto.jpg",alt:"Smart RTO",className:"w-full h-full object-fit rounded-lg"}),N.jsx("h2",{className:"project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg",children:"Smart RTO"})]}),N.jsx("div",{className:"flip-card-back rounded-lg text-justify",children:N.jsxs(jr,{className:"card",spotlightColor:"rgba(0, 229, 255, 0.2)",children:[N.jsxs("p",{children:[N.jsxs("b",{children:["Smart RTO is a RTO mobile app designed using"," ",N.jsx(Os,{text:"Flutter",disabled:!1,speed:1,className:"code"})]}),N.jsx("br",{}),"The Smart RTO is designed to streamline the operations of RTO in India. It aims to provide a user-friendly platform for citizens to access various RTO services online.",N.jsx("br",{}),"Management of user queries regarding licenses and vehicle fines.",N.jsx("br",{}),"Integration with payment gateways for fine payments."]}),N.jsxs("div",{className:"flex justify-center mt-2",children:[N.jsx(Fs,{size:30}),N.jsx("a",{href:"https://github.com/bramha-deshmukh17/SmartRTO",target:"_blank",rel:"noopener noreferrer",className:"ml-2",children:"View"})]})]})})]})}),N.jsx("div",{className:"flip-card",children:N.jsxs("div",{className:"flip-card-inner rounded-lg",children:[N.jsxs("div",{className:"flip-card-front rounded-lg",children:[N.jsx("img",{src:"./projects/tourguide.png",alt:"TourGuide",className:"w-full h-16/9 object-fit rounded-lg"}),N.jsx("h2",{className:"project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg",children:"TourGuide"})]}),N.jsx("div",{className:"flip-card-back rounded-lg text-justify",children:N.jsxs(jr,{className:"card",spotlightColor:"rgba(0, 229, 255, 0.2)",children:[N.jsxs("p",{children:[N.jsxs("b",{children:["TourGuide is a guide booking website designed using"," ",N.jsx(Os,{text:"Django",disabled:!1,speed:1,className:"code"})]}),N.jsx("br",{}),"The TourGuide aims to provide a comprehensive platform for tourists to book guides and explore tourist places, restaurants, and hotels."]}),N.jsxs("div",{className:"flex justify-center mt-4",children:[N.jsx(Fs,{size:30}),N.jsx("a",{href:"https://github.com/bramha-deshmukh17/tourguide",target:"_blank",rel:"noopener noreferrer",className:"ml-2",children:"View"})]})]})})]})}),N.jsx("div",{className:"flip-card",children:N.jsxs("div",{className:"flip-card-inner rounded-lg",children:[N.jsxs("div",{className:"flip-card-front rounded-lg",children:[N.jsx("img",{src:"./projects/edumate.png",alt:"EduMate",className:"w-full h-16/9 object-fit rounded-lg"}),N.jsx("h2",{className:"project-title absolute bottom-0 left-0 w-full text-xl font-bold py-2 text-center rounded-b-lg",children:"EduMate"})]}),N.jsx("div",{className:"flip-card-back rounded-lg text-justify",children:N.jsxs(jr,{className:"card",spotlightColor:"rgba(0, 229, 255, 0.2)",children:[N.jsxs("p",{children:[N.jsxs("b",{children:["EduMate is a e-learning website designed using"," ",N.jsx(Os,{text:"PHP",disabled:!1,speed:1,className:"code"})]}),N.jsx("br",{}),"With its 3 distinct modules - Student Module, Admin Module, Discussion Forum - the platform provides a comprehensive and user-friendly environment for effective learning, efficient course management, and engaging discussions."]}),N.jsxs("div",{className:"flex justify-center mt-4",children:[N.jsx(Fs,{size:30}),N.jsx("a",{href:"https://github.com/bramha-deshmukh17/edumate",target:"_blank",rel:"noopener noreferrer",className:"ml-2",children:"View"})]})]})})]})})]})]})};function Dy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.805 2.197v.066h.156v.44h.072v-.44h.156v-.066zm.9 0l-.175.353-.172-.353h-.087v.506h.067V2.3l.172.35h.045l.172-.35v.404h.066v-.506zm-4.257 1c-.204.31-.424.66-.66 1.06l-.04.062a44.457 44.457 0 00-1.265 2.29c-.187.36-.38.742-.577 1.146l2.267-.25c.66-.302.955-.578 1.242-.976a15.5 15.5 0 00.23-.342c.23-.363.46-.763.663-1.16.197-.386.37-.767.505-1.11.083-.22.15-.422.198-.6.042-.158.074-.307.1-.45-.884.15-1.965.295-2.668.33zM11.894 7.78l-.077.16c-.078.16-.157.32-.236.488-.086.18-.172.364-.26.552l-.132.287a75.265 75.265 0 00-1.427 3.3c-.163.397-.327.807-.493 1.23-.15.38-.297.765-.45 1.164l-.02.06c-.15.396-.3.802-.453 1.22l-.01.027.72-.08a.213.213 0 01-.042-.006c.863-.106 2.01-.75 2.75-1.547.342-.367.652-.8.94-1.306.213-.377.413-.795.604-1.258.168-.405.328-.843.48-1.318-.196.105-.423.18-.673.235a2.184 2.184 0 01-.273.046c.806-.31 1.314-.905 1.683-1.64a2.816 2.816 0 01-.968.428c-.06.012-.116.022-.174.03l-.043.006h.002c.278-.118.514-.248.718-.403a2.571 2.571 0 00.637-.698l.063-.104.077-.154a8.107 8.107 0 00.367-.85l.03-.088a3.04 3.04 0 00.123-.463.733.733 0 01-.094.065c-.243.145-.66.277-.996.34l.663-.074-.664.073h-.017l-.1.017c.006-.003.01-.006.017-.008l-2.265.25-.013.022zM8.27 16.45c-.117.323-.236.654-.355.992l-.005.015c-.016.046-.032.094-.05.142-.08.227-.15.432-.31.9.264.12.475.435.675.793a1.44 1.44 0 00-.466-.99c1.293.06 2.41-.27 2.99-1.217.05-.084.096-.173.14-.268-.26.333-.59.474-1.2.44 0 0-.004 0-.005.002l.004-.002c.9-.404 1.354-.79 1.754-1.433.094-.153.186-.32.28-.503-.788.81-1.702 1.04-2.664.865l-.72.078a6.43 6.43 0 00-.067.183zM15.42.112c-.376.222-1 .85-1.748 1.763l.686 1.294c.48-.687.97-1.307 1.462-1.836l.058-.062c-.02.02-.04.04-.057.062-.16.176-.644.74-1.375 1.863.703-.035 1.784-.18 2.666-.33.262-1.47-.258-2.142-.258-2.142s-.66-1.07-1.436-.61zm-3.084 6.402a40.253 40.253 0 011.306-2.26l.04-.064c.224-.352.45-.693.677-1.02l-.685-1.293-.157.192c-.197.245-.403.51-.613.79a39.853 39.853 0 00-2.016 2.97l-.022.038.893 1.763c.19-.378.38-.752.575-1.118zm-3.73 8.32c.158-.406.319-.81.483-1.225.156-.394.32-.79.484-1.19a91.133 91.133 0 011.6-3.604l.205-.424c.12-.243.237-.485.36-.724a.125.125 0 01.02-.04l-.895-1.763-.044.07c-.207.34-.414.687-.617 1.042a38.056 38.056 0 00-1.092 2.04l-.094.193a24.573 24.573 0 00-1.258 3.087 18.492 18.492 0 00-.52 1.997l.896 1.77c.117-.317.24-.638.364-.963zm-1.376-.476a13.38 13.38 0 00-.234 1.692c0 .02-.004.04-.005.06-.28-.45-1.03-.888-1.026-.884.537.778.944 1.55 1.005 2.31-.29.058-.684-.027-1.14-.195.475.436.83.556.97.588-.434.03-.89.328-1.346.67.668-.27 1.21-.38 1.596-.29-.61 1.74-1.23 3.655-1.843 5.69a.538.538 0 00.364-.354c.11-.368.84-2.786 1.978-5.965l.097-.27.028-.078c.12-.332.246-.672.374-1.02l.09-.237v-.004L7.24 14.3c-.003.02-.01.04-.012.06z"},child:[]}]})(s)}function Ny(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.77 11.24H9.956V8.202h2.152c1.17 0 1.834.522 1.834 1.466 0 1.008-.773 1.572-2.174 1.572zm.324 1.206H9.957v3.348h2.231c1.459 0 2.232-.585 2.232-1.685s-.795-1.663-2.326-1.663zM24 11.39v1.218c-1.128.108-1.817.944-2.226 2.268-.407 1.319-.463 2.937-.42 4.186.045 1.3-.968 2.5-2.337 2.5H4.985c-1.37 0-2.383-1.2-2.337-2.5.043-1.249-.013-2.867-.42-4.186-.41-1.324-1.1-2.16-2.228-2.268V11.39c1.128-.108 1.819-.944 2.227-2.268.408-1.319.464-2.937.42-4.186-.045-1.3.968-2.5 2.338-2.5h14.032c1.37 0 2.382 1.2 2.337 2.5-.043 1.249.013 2.867.42 4.186.409 1.324 1.098 2.16 2.226 2.268zm-7.927 2.817c0-1.354-.953-2.333-2.368-2.488v-.057c1.04-.169 1.856-1.135 1.856-2.213 0-1.537-1.213-2.538-3.062-2.538h-4.16v10.172h4.181c2.218 0 3.553-1.086 3.553-2.876z"},child:[]}]})(s)}function Uy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"},child:[]}]})(s)}function Iy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.105 4.105S9.158 1.58 11.684.316a3.079 3.079 0 0 1 1.481-.315c.766.047 1.677.788 1.677.788L24 9.948v9.789h-4.263V24H9.789l-9-9C.303 14.5 0 13.795 0 13.105c0-.319.18-.818.316-1.105l3.789-7.895zm.679.679v11.787c.002.543.021 1.024.498 1.508L10.204 23h8.533v-4.263L4.784 4.784zm12.055-.678c-.899-.896-1.809-1.78-2.74-2.643-.302-.267-.567-.468-1.07-.462-.37.014-.87.195-.87.195L6.341 4.105l10.498.001z"},child:[]}]})(s)}function Fy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.146 0h3.924v18.166c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.002 2.65-6.6 6.753-6.6.637 0 1.121.05 1.707.203zm0 9.143a3.894 3.894 0 00-1.325-.204c-1.988 0-3.134 1.223-3.134 3.365 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.098c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.53 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39z"},child:[]}]})(s)}function Oy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(s)}function zy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"},child:[]}]})(s)}function ky(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"},child:[]}]})(s)}function By(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"},child:[]}]})(s)}function Hy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(s)}function Vy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"},child:[]}]})(s)}function Gy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(s)}function Wy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"},child:[]}]})(s)}function jy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.9362.0137a12.1694 12.1694 0 00-2.9748.378C4.2816 1.5547.5678 5.7944.0918 10.6012c-.59 4.5488 1.7079 9.2856 5.6437 11.6345 3.8608 2.4179 9.0926 2.3199 12.8734-.223 3.3969-2.206 5.5118-6.2277 5.3858-10.2845-.058-4.0159-2.31-7.9167-5.7588-9.9796C16.354.5876 14.1431.0047 11.9362.0137zm-.063 1.696c4.9448-.007 9.7886 3.8137 10.2815 8.9245.945 5.6597-3.7528 11.4125-9.4875 11.5795-5.4538.544-10.7245-4.0798-10.8795-9.5566-.407-4.4338 2.5159-8.8346 6.6977-10.2995a9.1126 9.1126 0 013.3878-.647zm5.0908 3.2248c-2.6869 2.0849-5.2598 4.3078-7.8886 6.4567 1.2029.017 2.4118.016 3.6208.01 1.41-2.165 2.8589-4.3008 4.2678-6.4667zm-5.6647 7.6536c-1.41 2.166-2.86 4.3088-4.2699 6.4737 2.693-2.0799 5.2548-4.3198 7.9017-6.4557a255.4132 255.4132 0 00-3.6318-.018z"},child:[]}]})(s)}function Xy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.678.521c-1.032-.92-2.28-.55-3.513.544a8.71 8.71 0 0 0-.547.535c-2.109 2.237-4.066 6.38-4.674 9.544.237.48.422 1.093.544 1.561a13.044 13.044 0 0 1 .164.703s-.019-.071-.096-.296l-.05-.146a1.689 1.689 0 0 0-.033-.08c-.138-.32-.518-.995-.686-1.289-.143.423-.27.818-.376 1.176.484.884.778 2.4.778 2.4s-.025-.099-.147-.442c-.107-.303-.644-1.244-.772-1.464-.217.804-.304 1.346-.226 1.478.152.256.296.698.422 1.186.286 1.1.485 2.44.485 2.44l.017.224a22.41 22.41 0 0 0 .056 2.748c.095 1.146.273 2.13.5 2.657l.155-.084c-.334-1.038-.47-2.399-.41-3.967.09-2.398.642-5.29 1.661-8.304 1.723-4.55 4.113-8.201 6.3-9.945-1.993 1.8-4.692 7.63-5.5 9.788-.904 2.416-1.545 4.684-1.931 6.857.666-2.037 2.821-2.912 2.821-2.912s1.057-1.304 2.292-3.166c-.74.169-1.955.458-2.362.629-.6.251-.762.337-.762.337s1.945-1.184 3.613-1.72C21.695 7.9 24.195 2.767 21.678.521m-18.573.543A1.842 1.842 0 0 0 1.27 2.9v16.608a1.84 1.84 0 0 0 1.835 1.834h9.418a22.953 22.953 0 0 1-.052-2.707c-.006-.062-.011-.141-.016-.2a27.01 27.01 0 0 0-.473-2.378c-.121-.47-.275-.898-.369-1.057-.116-.197-.098-.31-.097-.432 0-.12.015-.245.037-.386a9.98 9.98 0 0 1 .234-1.045l.217-.028c-.017-.035-.014-.065-.031-.097l-.041-.381a32.8 32.8 0 0 1 .382-1.194l.2-.019c-.008-.016-.01-.038-.018-.053l-.043-.316c.63-3.28 2.587-7.443 4.8-9.791.066-.069.133-.128.198-.194Z"},child:[]}]})(s)}function Yy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(s)}function qy(s){return Et({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"},child:[]}]})(s)}const $y=()=>{const s=[{name:"React",icon:N.jsx(lg,{className:"text-blue-500 text-3xl"})},{name:"Node.js",icon:N.jsx(sg,{className:"text-green-600 text-3xl"})},{name:"Express.js",icon:N.jsx(Oy,{className:"text-3xl"})},{name:"Java",icon:N.jsx(ng,{className:"text-red-600 text-3xl"})},{name:"PHP",icon:N.jsx(og,{className:"text-purple-600 text-3xl"})},{name:"Python",icon:N.jsx(ag,{className:"text-blue-400 text-3xl"})},{name:"Django",icon:N.jsx(Fy,{className:"text-green-700 text-3xl"})},{name:"Flutter",icon:N.jsx(By,{className:"text-cyan-500 text-3xl"})},{name:"Dart",icon:N.jsx(Iy,{className:"text-blue-600 text-3xl"})},{name:"HTML5",icon:N.jsx(tg,{className:"text-orange-500 text-3xl"})},{name:"CSS3",icon:N.jsx(J1,{className:"text-blue-500 text-3xl"})},{name:"JavaScript",icon:N.jsx(ig,{className:"text-yellow-500 text-3xl"})},{name:"Tailwind CSS",icon:N.jsx(Yy,{className:"text-teal-400 text-3xl"})},{name:"Bootstrap",icon:N.jsx(Ny,{className:"text-indigo-600 text-3xl"})},{name:"MongoDB",icon:N.jsx(Hy,{className:"text-green-500 text-3xl"})},{name:"MySQL",icon:N.jsx(Vy,{className:"text-blue-500 text-3xl"})},{name:"PostgreSQL",icon:N.jsx(Gy,{className:"text-blue-700 text-3xl"})},{name:"SQLite",icon:N.jsx(Xy,{className:"text-gray-600 text-3xl"})},{name:"Firebase",icon:N.jsx(ky,{className:"text-yellow-400 text-3xl"})},{name:"Socket.io",icon:N.jsx(jy,{className:"text-3xl"})},{name:"Vite",icon:N.jsx(qy,{className:"text-purple-500 text-3xl"})},{name:"Apache",icon:N.jsx(Dy,{className:"text-red-600 text-3xl"})},{name:"Git",icon:N.jsx(eg,{className:"text-orange-500 text-3xl"})},{name:"GitHub",icon:N.jsx(Fs,{className:"text-3xl"})},{name:"Postman",icon:N.jsx(Wy,{className:"text-orange-600 text-3xl"})},{name:"Figma",icon:N.jsx(zy,{className:"text-pink-500 text-3xl"})},{name:"Canva",icon:N.jsx(Uy,{className:"text-cyan-600 text-3xl"})}];return N.jsx("section",{id:"skills",className:"py-12 m-5",children:N.jsxs("div",{className:"container mx-auto px-4",children:[N.jsx("h2",{className:"text-3xl font-bold mb-8",children:"My Skills"}),N.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",children:s.map((e,n)=>N.jsx("div",{className:"rounded-lg shadow-md flex flex-col",style:{backgroundColor:"var(--bg-color)",boxShadow:"5px 5px 15px var(--shadow-color)",color:"var(--text-color)",height:"140px"},children:N.jsxs(jr,{className:"card shadow-card",spotlightColor:"rgba(0, 229, 255, 0.2)",padding:"none",children:[N.jsx("div",{className:"flex justify-center items-center mb-4 h-16",children:e.icon}),N.jsx("h3",{className:"text-lg text-center font-semibold",style:{color:"var(--main-heading)"},children:e.name})]})},n))})]})})},Ky=()=>{const s=[{level:"Postgraduate (PG)",institution:"MES's IMCC, Pune",year:"2023 - Current",course:"MCA",score:"NA",status:"Pursuing"},{level:"Undergraduate (UG)",institution:"MGM's College of CS & IT, Nanded",year:"2020 - 2023",course:"B.Sc. C.S.",score:"9.22 CGPA"},{level:"12th",institution:"Yashwant Junior College, Nanded",year:"2020",score:"69.85%"},{level:"10th",institution:"Savitribai Phule High Schools, Nanded",year:"2018",score:"89.20%"}];return N.jsx("section",{id:"education",className:"py-12 m-5",children:N.jsxs("div",{className:"container mx-auto px-4",children:[N.jsx("h2",{className:"text-3xl font-bold mb-5",children:"Education"}),N.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6",children:s.map((e,n)=>N.jsx("div",{className:"rounded-lg shadow-md flex flex-col",style:{backgroundColor:"var(--bg-color)",boxShadow:"5px 5px 15px var(--shadow-color)",color:"var(--text-color)",height:"220px"},children:N.jsxs(jr,{className:"card shadow-card",spotlightColor:"rgba(0, 229, 255, 0.2)",children:[N.jsxs("div",{className:"flex items-center justify-center mb-4",children:[N.jsx("h3",{className:"text-lg font-semibold",style:{color:"var(--main-heading)"},children:e.level}),e.status==="Pursuing"&&N.jsx("span",{className:"ml-2 px-2 py-1 text-xs font-semibold text-white bg-red-400 rounded-full",children:"Pursuing"})]}),N.jsxs("div",{className:"flex flex-col gap-2 text-left",children:[N.jsxs("p",{className:"text-sm",children:[N.jsx("b",{children:"Institution:"})," ",e.institution]}),N.jsxs("p",{className:"text-sm",children:[N.jsx("b",{children:"Year:"})," ",e.year]}),e.course&&N.jsxs("p",{className:"text-sm",children:[N.jsx("b",{children:"Course:"})," ",e.course]}),N.jsxs("p",{className:"text-sm",children:[N.jsx("b",{children:"Score:"})," ",e.score]})]})]})},n))})]})})},Zy=()=>N.jsxs("section",{id:"contact",className:"m-5 mt-5 p-5 rounded",children:[N.jsx("h2",{className:"text-3xl font-bold mb-8",children:"Contact Me"}),N.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8",children:[N.jsxs("div",{className:"flex flex-col items-start gap-4",children:[N.jsxs("div",{className:"flex items-center",children:[N.jsx(rg,{className:"text-blue-800",size:30}),N.jsx("a",{href:"https://www.linkedin.com/in/bramha-deshmukh17/",target:"_blank",rel:"noopener noreferrer",className:"ml-2 text-lg text-blue-800 hover:underline",children:"LinkedIn"})]}),N.jsxs("div",{className:"flex items-center",children:[N.jsx(Fs,{style:{color:"var(--text-color)"},size:30}),N.jsx("a",{href:"https://github.com/bramha-deshmukh17",target:"_blank",rel:"noopener noreferrer",style:{color:"var(--text-color)"},className:"ml-2 text-lg hover:underline",children:"GitHub"})]}),N.jsxs("div",{className:"flex items-center",children:[N.jsx(ug,{className:"text-red-600",size:30}),N.jsx("a",{href:"mailto:brammhadeshmukh17@gmail.com",className:"ml-2 text-lg text-red-600 hover:underline",children:"Gmail"})]})]}),N.jsxs("div",{className:"flex flex-col items-start gap-4",children:[N.jsxs("div",{className:"flex items-center",children:[N.jsx(cg,{className:"text-blue-500",size:30}),N.jsx("a",{href:"https://x.com/deshmukh_bramha",target:"_blank",rel:"noopener noreferrer",className:"ml-2 text-lg text-blue-500 hover:underline",children:"Twitter"})]}),N.jsx("div",{className:"flex items-center",children:N.jsx(Os,{text:"Resume",disabled:!1,speed:1,className:"home",onClick:()=>window.open("./resume.pdf","_blank")})})]})]})]}),Qy=()=>{const s=new Date().getFullYear();return N.jsx("footer",{className:"bg-black text-white p-3 text-center cursor-default",children:N.jsxs("p",{children:["© ",s," Bramha Deshmukh"]})})},Jy=()=>N.jsx("div",{className:"App",children:N.jsxs(j1,{children:[N.jsx(dg,{}),N.jsx(hg,{}),N.jsx(Ly,{}),N.jsx(mg,{}),N.jsx($y,{}),N.jsx(Ky,{}),N.jsx(Zy,{}),N.jsx(Qy,{})]})});W1.createRoot(document.getElementById("root")).render(N.jsx(Oi.StrictMode,{children:N.jsx(Jy,{})}));
