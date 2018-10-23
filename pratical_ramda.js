!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.R={})}(this,function(t){"use strict";function n(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function r(t){return function r(e){return 0===arguments.length||n(e)?r:t.apply(this,arguments)}}function e(t){return function e(u,i){switch(arguments.length){case 0:return e;case 1:return n(u)?e:r(function(n){return t(u,n)});default:return n(u)&&n(i)?e:n(u)?r(function(n){return t(n,i)}):n(i)?r(function(n){return t(u,n)}):t(u,i)}}}function u(t,n){t=t||[],n=n||[];var r,e=t.length,u=n.length,i=[];for(r=0;e>r;)i[i.length]=t[r],r+=1;for(r=0;u>r;)i[i.length]=n[r],r+=1;return i}function i(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,i){return n.apply(this,arguments)};case 6:return function(t,r,e,u,i,o){return n.apply(this,arguments)};case 7:return function(t,r,e,u,i,o,c){return n.apply(this,arguments)};case 8:return function(t,r,e,u,i,o,c,a){return n.apply(this,arguments)};case 9:return function(t,r,e,u,i,o,c,a,s){return n.apply(this,arguments)};case 10:return function(t,r,e,u,i,o,c,a,s,f){return n.apply(this,arguments)};default:throw Error("First argument to _arity must be a non-negative integer no greater than ten")}}function o(t,r,e){return function(){for(var u=[],c=0,a=t,s=0;r.length>s||arguments.length>c;){var f;s>=r.length||n(r[s])&&arguments.length>c?(f=arguments[c],c+=1):f=r[s],u[s]=f,n(f)||(a-=1),s+=1}return a>0?i(a,o(t,u,e)):e.apply(this,u)}}function c(t){return function u(i,o,c){switch(arguments.length){case 0:return u;case 1:return n(i)?u:e(function(n,r){return t(i,n,r)});case 2:return n(i)&&n(o)?u:n(i)?e(function(n,r){return t(n,o,r)}):n(o)?e(function(n,r){return t(i,n,r)}):r(function(n){return t(i,o,n)});default:return n(i)&&n(o)&&n(c)?u:n(i)&&n(o)?e(function(n,r){return t(n,r,c)}):n(i)&&n(c)?e(function(n,r){return t(n,o,r)}):n(o)&&n(c)?e(function(n,r){return t(i,n,r)}):n(i)?r(function(n){return t(n,o,c)}):n(o)?r(function(n){return t(i,n,c)}):n(c)?r(function(n){return t(i,o,n)}):t(i,o,c)}}}function a(t){return"function"==typeof t["@@transducer/step"]}function s(t,n,r){return function(){if(0===arguments.length)return r();var e=Array.prototype.slice.call(arguments,0),u=e.pop();if(!At(u)){for(var i=0;t.length>i;){if("function"==typeof u[t[i]])return u[t[i]].apply(u,e);i+=1}if(a(u))return n.apply(null,e)(u)}return r.apply(this,arguments)}}function f(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}}function l(t,n){this.xf=n,this.f=t,this.all=!0}function p(t,n){for(var r=0,e=n.length,u=Array(e);e>r;)u[r]=t(n[r]),r+=1;return u}function h(t){return"[object String]"===Object.prototype.toString.call(t)}function y(t){this.f=t}function d(t){return new y(t)}function g(t,n,r){for(var e=0,u=r.length;u>e;){if((n=t["@@transducer/step"](n,r[e]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}function v(t,n,r){for(var e=r.next();!e.done;){if((n=t["@@transducer/step"](n,e.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function m(t,n,r,e){return t["@@transducer/result"](r[e](qt(t["@@transducer/step"],t),n))}function b(t,n,r){if("function"==typeof t&&(t=d(t)),_t(r))return g(t,n,r);if("function"==typeof r["fantasy-land/reduce"])return m(t,n,r,"fantasy-land/reduce");if(null!=r[kt])return v(t,n,r[kt]());if("function"==typeof r.next)return v(t,n,r);if("function"==typeof r.reduce)return m(t,n,r,"reduce");throw new TypeError("reduce: list must be array or iterable")}function x(t,n){this.xf=n,this.f=t}function w(t,n){return Object.prototype.hasOwnProperty.call(n,t)}function j(t,n){this.xf=n,this.f=t,this.any=!1}function A(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=Array(t)}function O(t){return"[object Function]"===Object.prototype.toString.call(t)}function S(t){return function n(r){for(var e,u,i,o=[],c=0,a=r.length;a>c;){if(_t(r[c]))for(i=0,u=(e=t?n(r[c]):r[c]).length;u>i;)o[o.length]=e[i],i+=1;else o[o.length]=r[c];c+=1}return o}}function E(t){return{"@@transducer/value":t,"@@transducer/reduced":!0}}function _(t){return RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}function q(t,n,r,e){var u=function(u){for(var i=n.length,o=0;i>o;){if(t===n[o])return r[o];o+=1}n[o+1]=t,r[o+1]=u;for(var c in t)u[c]=e?q(t[c],n,r,!0):t[c];return u};switch(mn(t)){case"Object":return u({});case"Array":return u([]);case"Date":return new Date(t.valueOf());case"RegExp":return _(t);default:return t}}function k(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function N(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return At(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,Array.prototype.slice.call(arguments,0,r-1))}}function I(){if(0===arguments.length)throw Error("pipe requires at least one argument");return i(arguments[0].length,Mt(k,arguments[0],On(arguments)))}function W(){if(0===arguments.length)throw Error("compose requires at least one argument");return I.apply(this,Sn(arguments))}function P(){if(0===arguments.length)throw Error("composeK requires at least one argument");var t=Array.prototype.slice.call(arguments),n=t.pop();return W(W.apply(this,Rt(gn,t)),n)}function C(t,n){return function(){var r=this;return t.apply(r,arguments).then(function(t){return n.call(r,t)})}}function T(){if(0===arguments.length)throw Error("pipeP requires at least one argument");return i(arguments[0].length,Mt(C,arguments[0],On(arguments)))}function B(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}function F(t,n,r){for(var e=0,u=r.length;u>e;){if(t(n,r[e]))return!0;e+=1}return!1}function R(t){var n=(t+"").match(/^function (\w*)/);return null==n?"":n[1]}function U(t,n,r,e){function u(t,n){return D(t,n,r.slice(),e.slice())}var i=B(t);return!F(function(t,n){return!F(u,n,t)},B(n),i)}function D(t,n,r,e){if(En(t,n))return!0;var u=mn(t);if(u!==mn(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(u){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===R(t.constructor))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!En(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!En(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var i=r.length-1;i>=0;){if(r[i]===t)return e[i]===n;i-=1}switch(u){case"Map":return t.size===n.size&&U(t.entries(),n.entries(),r.concat([t]),e.concat([n]));case"Set":return t.size===n.size&&U(t.values(),n.values(),r.concat([t]),e.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var o=Ft(t);if(o.length!==Ft(n).length)return!1;var c=r.concat([t]),a=e.concat([n]);for(i=o.length-1;i>=0;){var s=o[i];if(!w(s,n)||!D(n[s],t[s],c,a))return!1;i-=1}return!0}function z(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;t.length>r;){if(0===(u=t[r])&&1/u===e)return r;r+=1}return-1}if(n!==n){for(;t.length>r;){if("number"==typeof(u=t[r])&&u!==u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;t.length>r;){if(_n(t[r],n))return r;r+=1}return-1}function M(t,n){return z(n,t,0)>=0}function L(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}function K(t){return function(){return!t.apply(this,arguments)}}function V(t,n){for(var r=0,e=n.length,u=[];e>r;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u}function $(t){return"[object Object]"===Object.prototype.toString.call(t)}function H(t,n){this.xf=n,this.f=t}function J(t,n){var r=function(r){var e=n.concat([t]);return M(r,e)?"<Circular>":J(r,e)},e=function(t,n){return p(function(n){return L(n)+": "+r(t[n])},n.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+p(r,t).join(", ")+"))";case"[object Array]":return"["+p(r,t).concat(e(t,In(function(t){return/^\d+$/.test(t)},Ft(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":""+t;case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):L(kn(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t==-1/0?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":L(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var u=""+t;if("[object Object]"!==u)return u}return"{"+e(t,Ft(t)).join(", ")+"}"}}function X(t,n,r,e){this.valueFn=t,this.valueAcc=n,this.keyFn=r,this.xf=e,this.inputs={}}function Y(t,n){this.xf=n,this.n=t}function Z(t,n){this.xf=n,this.n=t,this.i=0}function G(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=Array(t)}function Q(t,n){this.f=t,this.retained=[],this.xf=n}function tt(t,n){this.xf=n,this.pred=t,this.lastValue=void 0,this.seenFirstValue=!1}function nt(t,n){this.xf=n,this.f=t}function rt(t,n){this.xf=n,this.f=t,this.found=!1}function et(t,n){this.xf=n,this.f=t,this.idx=-1,this.found=!1}function ut(t,n){this.xf=n,this.f=t}function it(t,n){this.xf=n,this.f=t,this.idx=-1,this.lastIdx=-1}function ot(t){return t}function ct(){this._nativeSet="function"==typeof Set?new Set:null,this._items={}}function at(t,n,r){var e,u=typeof t;switch(u){case"string":case"number":return 0===t&&1/t==-1/0?!!r._items["-0"]||(n&&(r._items["-0"]=!0),!1):null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?t in r._items[u]||(n&&(r._items[u][t]=!0),!1):(n&&(r._items[u]={},r._items[u][t]=!0),!1);case"boolean":if(u in r._items){var i=t?1:0;return!!r._items[u][i]||(n&&(r._items[u][i]=!0),!1)}return n&&(r._items[u]=t?[!1,!0]:[!0,!1]),!1;case"function":return null!==r._nativeSet?n?(e=r._nativeSet.size,r._nativeSet.add(t),r._nativeSet.size===e):r._nativeSet.has(t):u in r._items?!!M(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1);case"undefined":return!!r._items[u]||(n&&(r._items[u]=!0),!1);case"object":if(null===t)return!!r._items.null||(n&&(r._items.null=!0),!1);default:return(u=Object.prototype.toString.call(t))in r._items?!!M(t,r._items[u])||(n&&r._items[u].push(t),!1):(n&&(r._items[u]=[t]),!1)}}function st(t){if(a(t))return t;if(_t(t))return $r;if("string"==typeof t)return Hr;if("object"==typeof t)return Jr;throw Error("Cannot create transformer for "+t)}function ft(t){return"[object Number]"===Object.prototype.toString.call(t)}function lt(t){return e(function(n,r){return i(Math.max(0,n.length-r.length),function(){return n.apply(this,t(r,arguments))})})}function pt(t,n){this.xf=n,this.f=t}function ht(t,n){this.xf=n,this.f=t}function yt(t){return"[object RegExp]"===Object.prototype.toString.call(t)}var dt=r(function(t){return function(){return t}}),gt=dt(!1),vt=dt(!0),mt={"@@functional/placeholder":!0},bt=e(function(t,n){return+t+ +n}),xt=e(function(t,n){return 1===t?r(n):i(t,o(t,[],n))}),wt=r(function(t){return xt(t.length,function(){var n=0,r=arguments[0],e=arguments[arguments.length-1],i=Array.prototype.slice.call(arguments,0);return i[0]=function(){var t=r.apply(this,u(arguments,[n,e]));return n+=1,t},t.apply(this,i)})}),jt=c(function(t,n,r){if(n>=r.length||-r.length>n)return r;var e=(0>n?r.length:0)+n,i=u(r);return i[e]=t(r[e]),i}),At=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)},Ot={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};l.prototype["@@transducer/init"]=Ot.init,l.prototype["@@transducer/result"]=function(t){return this.all&&(t=this.xf["@@transducer/step"](t,!0)),this.xf["@@transducer/result"](t)},l.prototype["@@transducer/step"]=function(t,n){return this.f(n)||(this.all=!1,t=f(this.xf["@@transducer/step"](t,!1))),t};var St=e(s(["all"],e(function(t,n){return new l(t,n)}),function(t,n){for(var r=0;n.length>r;){if(!t(n[r]))return!1;r+=1}return!0})),Et=e(function(t,n){return n>t?n:t}),_t=r(function(t){return!!At(t)||!!t&&("object"==typeof t&&(!h(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))});y.prototype["@@transducer/init"]=function(){throw Error("init not implemented on XWrap")},y.prototype["@@transducer/result"]=function(t){return t},y.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)};var qt=e(function(t,n){return i(t.length,function(){return t.apply(n,arguments)})}),kt="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";x.prototype["@@transducer/init"]=Ot.init,x.prototype["@@transducer/result"]=Ot.result,x.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))};var Nt=e(function(t,n){return new x(t,n)}),It=Object.prototype.toString,Wt=function(){return"[object Arguments]"===It.call(arguments)?function(t){return"[object Arguments]"===It.call(t)}:function(t){return w("callee",t)}},Pt=!{toString:null}.propertyIsEnumerable("toString"),Ct=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],Tt=function(){return arguments.propertyIsEnumerable("length")}(),Bt=function(t,n){for(var r=0;t.length>r;){if(t[r]===n)return!0;r+=1}return!1},Ft=r("function"!=typeof Object.keys||Tt?function(t){if(Object(t)!==t)return[];var n,r,e=[],u=Tt&&Wt(t);for(n in t)!w(n,t)||u&&"length"===n||(e[e.length]=n);if(Pt)for(r=6;r>=0;)w(n=Ct[r],t)&&!Bt(e,n)&&(e[e.length]=n),r-=1;return e}:function(t){return Object(t)!==t?[]:Object.keys(t)}),Rt=e(s(["fantasy-land/map","map"],Nt,function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return xt(n.length,function(){return t.call(this,n.apply(this,arguments))});case"[object Object]":return b(function(r,e){return r[e]=t(n[e]),r},{},Ft(n));default:return p(t,n)}})),Ut=e(function(t,n){for(var r=n,e=0;t.length>e;){if(null==r)return;r=r[t[e]],e+=1}return r}),Dt=e(function(t,n){return Ut([t],n)}),zt=e(function(t,n){return Rt(Dt(t),n)}),Mt=c(b),Lt=r(function(t){return xt(Mt(Et,0,zt("length",t)),function(){for(var n=0,r=t.length;r>n;){if(!t[n].apply(this,arguments))return!1;n+=1}return!0})}),Kt=e(function(t,n){return t&&n});j.prototype["@@transducer/init"]=Ot.init,j.prototype["@@transducer/result"]=function(t){return this.any||(t=this.xf["@@transducer/step"](t,!1)),this.xf["@@transducer/result"](t)},j.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.any=!0,t=f(this.xf["@@transducer/step"](t,!0))),t};var Vt=e(function(t,n){return new j(t,n)}),$t=e(s(["any"],Vt,function(t,n){for(var r=0;n.length>r;){if(t(n[r]))return!0;r+=1}return!1})),Ht=r(function(t){return xt(Mt(Et,0,zt("length",t)),function(){for(var n=0,r=t.length;r>n;){if(t[n].apply(this,arguments))return!0;n+=1}return!1})}),Jt=e(function(t,n){return"function"==typeof n["fantasy-land/ap"]?n["fantasy-land/ap"](t):"function"==typeof t.ap?t.ap(n):"function"==typeof t?function(r){return t(r)(n(r))}:b(function(t,r){return u(t,Rt(r,n))},[],t)});A.prototype["@@transducer/init"]=Ot.init,A.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},A.prototype["@@transducer/step"]=function(t,n){return this.store(n),this.full?this.xf["@@transducer/step"](t,this.getCopy()):t},A.prototype.store=function(t){this.acc[this.pos]=t,(this.pos+=1)===this.acc.length&&(this.pos=0,this.full=!0)},A.prototype.getCopy=function(){return u(Array.prototype.slice.call(this.acc,this.pos),Array.prototype.slice.call(this.acc,0,this.pos))};var Xt=e(s([],e(function(t,n){return new A(t,n)}),function(t,n){for(var r=0,e=n.length-(t-1),u=Array(0>e?0:e);e>r;)u[r]=Array.prototype.slice.call(n,r,r+t),r+=1;return u})),Yt=e(function(t,n){return u(n,[t])}),Zt=e(function(t,n){return t.apply(this,n)}),Gt=r(function(t){for(var n=Ft(t),r=n.length,e=[],u=0;r>u;)e[u]=t[n[u]],u+=1;return e}),Qt=r(function t(n){return n=Rt(function(n){return"function"==typeof n?n:t(n)},n),xt(Mt(Et,0,zt("length",Gt(n))),function(){var t=arguments;return Rt(function(n){return Zt(n,t)},n)})}),tn=e(function(t,n){return n(t)}),nn=c(function(t,n,r){var e=t(n),u=t(r);return u>e?-1:e>u?1:0}),rn=c(function(t,n,r){var e={};for(var u in r)e[u]=r[u];return e[t]=n,e}),en=Number.isInteger||function(t){return t<<0===t},un=r(function(t){return null==t}),on=c(function t(n,r,e){if(0===n.length)return r;var u=n[0];if(n.length>1){var i=!un(e)&&w(u,e)?e[u]:en(n[1])?[]:{};r=t(Array.prototype.slice.call(n,1),r,i)}if(en(u)&&At(e)){var o=[].concat(e);return o[u]=r,o}return rn(u,r,e)}),cn=e(function(t,n){switch(t){case 0:return function(){return n.call(this)};case 1:return function(t){return n.call(this,t)};case 2:return function(t,r){return n.call(this,t,r)};case 3:return function(t,r,e){return n.call(this,t,r,e)};case 4:return function(t,r,e,u){return n.call(this,t,r,e,u)};case 5:return function(t,r,e,u,i){return n.call(this,t,r,e,u,i)};case 6:return function(t,r,e,u,i,o){return n.call(this,t,r,e,u,i,o)};case 7:return function(t,r,e,u,i,o,c){return n.call(this,t,r,e,u,i,o,c)};case 8:return function(t,r,e,u,i,o,c,a){return n.call(this,t,r,e,u,i,o,c,a)};case 9:return function(t,r,e,u,i,o,c,a,s){return n.call(this,t,r,e,u,i,o,c,a,s)};case 10:return function(t,r,e,u,i,o,c,a,s,f){return n.call(this,t,r,e,u,i,o,c,a,s,f)};default:throw Error("First argument to nAry must be a non-negative integer no greater than ten")}}),an=r(function(t){return cn(2,t)}),sn=e(function(t,n){var r=xt(t,n);return xt(t,function(){return b(Jt,Rt(r,arguments[0]),Array.prototype.slice.call(arguments,1))})}),fn=r(function(t){return sn(t.length,t)}),ln=e(function(t,n){return O(t)?function(){return t.apply(this,arguments)&&n.apply(this,arguments)}:fn(Kt)(t,n)}),pn=r(function(t){return xt(t.length,t)}),hn=pn(function(t){return t.apply(this,Array.prototype.slice.call(arguments,1))}),yn=function(t){return{"@@transducer/init":Ot.init,"@@transducer/result":function(n){return t["@@transducer/result"](n)},"@@transducer/step":function(n,r){var e=t["@@transducer/step"](n,r);return e["@@transducer/reduced"]?E(e):e}}},dn=function(t){var n=yn(t);return{"@@transducer/init":Ot.init,"@@transducer/result":function(t){return n["@@transducer/result"](t)},"@@transducer/step":function(t,r){return _t(r)?b(n,t,r):b(n,t,[r])}}},gn=e(s(["fantasy-land/chain","chain"],e(function(t,n){return Rt(t,dn(n))}),function(t,n){return"function"==typeof n?function(r){return t(n(r))(r)}:S(!1)(Rt(t,n))})),vn=c(function(t,n,r){if(t>n)throw Error("min must not be greater than max in clamp(min, max, value)");return t>r?t:r>n?n:r}),mn=r(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}),bn=r(function(t){return null!=t&&"function"==typeof t.clone?t.clone():q(t,[],[],!0)}),xn=r(function(t){return function(n,r){return t(n,r)?-1:t(r,n)?1:0}}),wn=r(function(t){return!t}),jn=fn(wn),An=c(N("slice",function(t,n,r){return Array.prototype.slice.call(r,t,n)})),On=r(N("tail",An(1,1/0))),Sn=r(function(t){return h(t)?t.split("").reverse().join(""):Array.prototype.slice.call(t,0).reverse()}),En=e(function(t,n){return t===n?0!==t||1/t==1/n:t!==t&&n!==n}),_n=e(function(t,n){return D(t,n,[],[])}),qn=function(t){return(10>t?"0":"")+t},kn="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+qn(t.getUTCMonth()+1)+"-"+qn(t.getUTCDate())+"T"+qn(t.getUTCHours())+":"+qn(t.getUTCMinutes())+":"+qn(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};H.prototype["@@transducer/init"]=Ot.init,H.prototype["@@transducer/result"]=Ot.result,H.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t};var Nn=e(s(["filter"],e(function(t,n){return new H(t,n)}),function(t,n){return $(n)?b(function(r,e){return t(n[e])&&(r[e]=n[e]),r},{},Ft(n)):V(t,n)})),In=e(function(t,n){return Nn(K(t),n)}),Wn=r(function(t){return J(t,[])}),Pn=e(function(t,n){if(At(t)){if(At(n))return t.concat(n);throw new TypeError(Wn(n)+" is not an array")}if(h(t)){if(h(n))return t+n;throw new TypeError(Wn(n)+" is not a string")}if(null!=t&&O(t["fantasy-land/concat"]))return t["fantasy-land/concat"](n);if(null!=t&&O(t.concat))return t.concat(n);throw new TypeError(Wn(t)+' does not have a method named "concat" or "fantasy-land/concat"')}),Cn=r(function(t){return i(Mt(Et,0,Rt(function(t){return t[0].length},t)),function(){for(var n=0;t.length>n;){if(t[n][0].apply(this,arguments))return t[n][1].apply(this,arguments);n+=1}})}),Tn=e(function(t,n){if(t>10)throw Error("Constructor with greater than ten arguments");return 0===t?function(){return new n}:pn(cn(t,function(t,r,e,u,i,o,c,a,s,f){switch(arguments.length){case 1:return new n(t);case 2:return new n(t,r);case 3:return new n(t,r,e);case 4:return new n(t,r,e,u);case 5:return new n(t,r,e,u,i);case 6:return new n(t,r,e,u,i,o);case 7:return new n(t,r,e,u,i,o,c);case 8:return new n(t,r,e,u,i,o,c,a);case 9:return new n(t,r,e,u,i,o,c,a,s);case 10:return new n(t,r,e,u,i,o,c,a,s,f)}}))}),Bn=r(function(t){return Tn(t.length,t)}),Fn=e(M),Rn=e(function(t,n){return xt(Mt(Et,0,zt("length",n)),function(){var r=arguments,e=this;return t.apply(e,p(function(t){return t.apply(e,r)},n))})});X.prototype["@@transducer/init"]=Ot.init,X.prototype["@@transducer/result"]=function(t){var n;for(n in this.inputs)if(w(n,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[n]))["@@transducer/reduced"]){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},X.prototype["@@transducer/step"]=function(t,n){var r=this.keyFn(n);return this.inputs[r]=this.inputs[r]||[r,this.valueAcc],this.inputs[r][1]=this.valueFn(this.inputs[r][1],n),t};var Un=o(4,[],s([],o(4,[],function(t,n,r,e){return new X(t,n,r,e)}),function(t,n,r,e){return b(function(e,u){var i=r(u);return e[i]=t(w(i,e)?e[i]:n,u),e},{},e)})),Dn=Un(function(t,n){return t+1},0),zn=bt(-1),Mn=e(function(t,n){return null==n||n!==n?t:n}),Ln=c(function(t,n,r){var e=t(n),u=t(r);return e>u?-1:u>e?1:0}),Kn=e(function(t,n){for(var r=[],e=0,u=t.length;u>e;)M(t[e],n)||M(t[e],r)||(r[r.length]=t[e]),e+=1;return r}),Vn=c(function(t,n,r){for(var e=[],u=0,i=n.length;i>u;)F(t,n[u],r)||F(t,n[u],e)||e.push(n[u]),u+=1;return e}),$n=e(function(t,n){var r={};for(var e in n)r[e]=n[e];return delete r[t],r}),Hn=c(function(t,n,r){var e=Array.prototype.slice.call(r,0);return e.splice(t,n),e}),Jn=c(function(t,n,r){return jt(dt(n),t,r)}),Xn=e(function t(n,r){switch(n.length){case 0:return r;case 1:return en(n[0])?Hn(n[0],1,r):$n(n[0],r);default:var e=n[0],u=Array.prototype.slice.call(n,1);return null==r[e]?r:en(n[0])?Jn(e,t(u,r[e]),r):rn(e,t(u,r[e]),r)}}),Yn=e(function(t,n){return t/n});Y.prototype["@@transducer/init"]=Ot.init,Y.prototype["@@transducer/result"]=Ot.result,Y.prototype["@@transducer/step"]=function(t,n){return this.n>0?(this.n-=1,t):this.xf["@@transducer/step"](t,n)};var Zn=e(s(["drop"],e(function(t,n){return new Y(t,n)}),function(t,n){return An(Math.max(0,t),1/0,n)}));Z.prototype["@@transducer/init"]=Ot.init,Z.prototype["@@transducer/result"]=Ot.result,Z.prototype["@@transducer/step"]=function(t,n){this.i+=1;var r=0===this.n?t:this.xf["@@transducer/step"](t,n);return 0>this.n||this.n>this.i?r:f(r)};var Gn=e(s(["take"],e(function(t,n){return new Z(t,n)}),function(t,n){return An(0,0>t?1/0:t,n)}));G.prototype["@@transducer/init"]=Ot.init,G.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},G.prototype["@@transducer/step"]=function(t,n){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(n),t},G.prototype.store=function(t){this.acc[this.pos]=t,(this.pos+=1)===this.acc.length&&(this.pos=0,this.full=!0)};var Qn=e(s([],e(function(t,n){return new G(t,n)}),function(t,n){return Gn(n.length>t?n.length-t:0,n)}));Q.prototype["@@transducer/init"]=Ot.init,Q.prototype["@@transducer/result"]=function(t){return this.retained=null,this.xf["@@transducer/result"](t)},Q.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.retain(t,n):this.flush(t,n)},Q.prototype.flush=function(t,n){return t=b(this.xf["@@transducer/step"],t,this.retained),this.retained=[],this.xf["@@transducer/step"](t,n)},Q.prototype.retain=function(t,n){return this.retained.push(n),t};var tr=e(s([],e(function(t,n){return new Q(t,n)}),function(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return An(0,r+1,n)}));tt.prototype["@@transducer/init"]=Ot.init,tt.prototype["@@transducer/result"]=Ot.result,tt.prototype["@@transducer/step"]=function(t,n){var r=!1;return this.seenFirstValue?this.pred(this.lastValue,n)&&(r=!0):this.seenFirstValue=!0,this.lastValue=n,r?t:this.xf["@@transducer/step"](t,n)};var nr=e(function(t,n){return new tt(t,n)}),rr=e(function(t,n){var r=0>t?n.length+t:t;return h(n)?n.charAt(r):n[r]}),er=rr(-1),ur=e(s([],nr,function(t,n){var r=[],e=1,u=n.length;if(0!==u)for(r[0]=n[0];u>e;)t(er(r),n[e])||(r[r.length]=n[e]),e+=1;return r})),ir=r(s([],nr(_n),ur(_n)));nt.prototype["@@transducer/init"]=Ot.init,nt.prototype["@@transducer/result"]=Ot.result,nt.prototype["@@transducer/step"]=function(t,n){if(this.f){if(this.f(n))return t;this.f=null}return this.xf["@@transducer/step"](t,n)};var or=e(s(["dropWhile"],e(function(t,n){return new nt(t,n)}),function(t,n){for(var r=0,e=n.length;e>r&&t(n[r]);)r+=1;return An(r,1/0,n)})),cr=e(function(t,n){return t||n}),ar=e(function(t,n){return O(t)?function(){return t.apply(this,arguments)||n.apply(this,arguments)}:fn(cr)(t,n)}),sr=r(function(t){return null!=t&&"function"==typeof t["fantasy-land/empty"]?t["fantasy-land/empty"]():null!=t&&null!=t.constructor&&"function"==typeof t.constructor["fantasy-land/empty"]?t.constructor["fantasy-land/empty"]():null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():At(t)?[]:h(t)?"":$(t)?{}:Wt(t)?function(){return arguments}():void 0}),fr=e(function(t,n){return Zn(0>t?0:n.length-t,n)}),lr=e(function(t,n){return _n(fr(t.length,n),t)}),pr=c(function(t,n,r){return _n(t(n),t(r))}),hr=c(function(t,n,r){return _n(n[t],r[t])}),yr=e(function t(n,r){var e,u,i,o={};for(u in r)i=typeof(e=n[u]),o[u]="function"===i?e(r[u]):e&&"object"===i?t(e,r[u]):r[u];return o});rt.prototype["@@transducer/init"]=Ot.init,rt.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},rt.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.found=!0,t=f(this.xf["@@transducer/step"](t,n))),t};var dr=e(s(["find"],e(function(t,n){return new rt(t,n)}),function(t,n){for(var r=0,e=n.length;e>r;){if(t(n[r]))return n[r];r+=1}}));et.prototype["@@transducer/init"]=Ot.init,et.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,-1)),this.xf["@@transducer/result"](t)},et.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.found=!0,t=f(this.xf["@@transducer/step"](t,this.idx))),t};var gr=e(s([],e(function(t,n){return new et(t,n)}),function(t,n){for(var r=0,e=n.length;e>r;){if(t(n[r]))return r;r+=1}return-1}));ut.prototype["@@transducer/init"]=Ot.init,ut.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.last))},ut.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.last=n),t};var vr=e(s([],e(function(t,n){return new ut(t,n)}),function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return n[r];r-=1}}));it.prototype["@@transducer/init"]=Ot.init,it.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.lastIdx))},it.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.lastIdx=this.idx),t};var mr=e(s([],e(function(t,n){return new it(t,n)}),function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return r;r-=1}return-1})),br=r(S(!0)),xr=r(function(t){return xt(t.length,function(n,r){var e=Array.prototype.slice.call(arguments,0);return e[0]=r,e[1]=n,t.apply(this,e)})}),wr=e(N("forEach",function(t,n){for(var r=n.length,e=0;r>e;)t(n[e]),e+=1;return n})),jr=e(function(t,n){for(var r=Ft(n),e=0;r.length>e;){var u=r[e];t(n[u],u,n),e+=1}return n}),Ar=r(function(t){for(var n={},r=0;t.length>r;)n[t[r][0]]=t[r][1],r+=1;return n}),Or=e(N("groupBy",Un(function(t,n){return null==t&&(t=[]),t.push(n),t},null))),Sr=e(function(t,n){for(var r=[],e=0,u=n.length;u>e;){for(var i=e+1;u>i&&t(n[i-1],n[i]);)i+=1;r.push(n.slice(e,i)),e=i}return r}),Er=e(function(t,n){return t>n}),_r=e(function(t,n){return t>=n}),qr=e(w),kr=e(function(t,n){return t in n}),Nr=rr(0),Ir=r(ot),Wr=c(function(t,n,r){return xt(Math.max(t.length,n.length,r.length),function(){return t.apply(this,arguments)?n.apply(this,arguments):r.apply(this,arguments)})}),Pr=bt(1),Cr=Un(function(t,n){return n},null),Tr=e(function(t,n){return"function"!=typeof n.indexOf||At(n)?z(n,t,0):n.indexOf(t)}),Br=An(0,-1),Fr=c(function(t,n,r){return V(function(n){return F(t,n,r)},n)}),Rr=c(function(t,n,r){t=r.length>t&&t>=0?t:r.length;var e=Array.prototype.slice.call(r,0);return e.splice(t,0,n),e}),Ur=c(function(t,n,r){return t=r.length>t&&t>=0?t:r.length,[].concat(Array.prototype.slice.call(r,0,t),n,Array.prototype.slice.call(r,t))});ct.prototype.add=function(t){return!at(t,!0,this)},ct.prototype.has=function(t){return at(t,!1,this)};var Dr=e(function(t,n){for(var r,e,u=new ct,i=[],o=0;n.length>o;)r=t(e=n[o]),u.add(r)&&i.push(e),o+=1;return i}),zr=Dr(Ir),Mr=e(function(t,n){var r,e;return t.length>n.length?(r=t,e=n):(r=n,e=t),zr(V(xr(M)(r),e))}),Lr=e(N("intersperse",function(t,n){for(var r=[],e=0,u=n.length;u>e;)e===u-1?r.push(n[e]):r.push(n[e],t),e+=1;return r})),Kr="function"==typeof Object.assign?Object.assign:function(t){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(t),r=1,e=arguments.length;e>r;){var u=arguments[r];if(null!=u)for(var i in u)w(i,u)&&(n[i]=u[i]);r+=1}return n},Vr=e(function(t,n){var r={};return r[t]=n,r}),$r={"@@transducer/init":Array,"@@transducer/step":function(t,n){return t.push(n),t},"@@transducer/result":ot},Hr={"@@transducer/init":String,"@@transducer/step":function(t,n){return t+n},"@@transducer/result":ot},Jr={"@@transducer/init":Object,"@@transducer/step":function(t,n){return Kr(t,_t(n)?Vr(n[0],n[1]):n)},"@@transducer/result":ot},Xr=c(function(t,n,r){return a(t)?b(n(t),t["@@transducer/init"](),r):b(n(st(t)),q(t,[],[],!1),r)}),Yr=r(function(t){for(var n=Ft(t),r=n.length,e=0,u={};r>e;){var i=n[e],o=t[i],c=w(o,u)?u[o]:u[o]=[];c[c.length]=i,e+=1}return u}),Zr=r(function(t){for(var n=Ft(t),r=n.length,e=0,u={};r>e;){var i=n[e];u[t[i]]=i,e+=1}return u}),Gr=e(function(t,n){return xt(t+1,function(){var r=arguments[t];if(null!=r&&O(r[n]))return r[n].apply(r,Array.prototype.slice.call(arguments,0,t));throw new TypeError(Wn(r)+' does not have a method named "'+n+'"')})}),Qr=e(function(t,n){return null!=n&&n.constructor===t||n instanceof t}),te=r(function(t){return null!=t&&_n(t,sr(t))}),ne=Gr(1,"join"),re=r(function(t){return Rn(function(){return Array.prototype.slice.call(arguments,0)},t)}),ee=r(function(t){var n,r=[];for(n in t)r[r.length]=n;return r}),ue=e(function(t,n){if("function"!=typeof n.lastIndexOf||At(n)){for(var r=n.length-1;r>=0;){if(_n(n[r],t))return r;r-=1}return-1}return n.lastIndexOf(t)}),ie=r(function(t){return null!=t&&ft(t.length)?t.length:NaN}),oe=e(function(t,n){return function(r){return function(e){return Rt(function(t){return n(t,e)},r(t(e)))}}}),ce=r(function(t){return oe(rr(t),Jn(t))}),ae=r(function(t){return oe(Ut(t),on(t))}),se=r(function(t){return oe(Dt(t),rn(t))}),fe=e(function(t,n){return n>t}),le=e(function(t,n){return n>=t}),pe=c(function(t,n,r){for(var e=0,u=r.length,i=[],o=[n];u>e;)o=t(o[0],r[e]),i[e]=o[1],e+=1;return[o[0],i]}),he=c(function(t,n,r){for(var e=r.length-1,u=[],i=[n];e>=0;)i=t(r[e],i[0]),u[e]=i[1],e-=1;return[u,i[0]]}),ye=e(function(t,n){return b(function(r,e){return r[e]=t(n[e],e,n),r},{},Ft(n))}),de=e(function(t,n){return n.match(t)||[]}),ge=e(function(t,n){return en(t)?!en(n)||1>n?NaN:(t%n+n)%n:NaN}),ve=c(function(t,n,r){return t(r)>t(n)?r:n}),me=Mt(bt,0),be=r(function(t){return me(t)/t.length}),xe=r(function(t){var n=t.length;if(0===n)return NaN;var r=2-n%2,e=(n-r)/2;return be(Array.prototype.slice.call(t,0).sort(function(t,n){return n>t?-1:t>n?1:0}).slice(e,e+r))}),we=e(function(t,n){var r={};return i(n.length,function(){var e=t.apply(this,arguments);return w(e,r)||(r[e]=n.apply(this,arguments)),r[e]})}),je=we(function(){return Wn(arguments)}),Ae=e(function(t,n){return Kr({},t,n)}),Oe=r(function(t){return Kr.apply(null,[{}].concat(t))}),Se=c(function(t,n,r){var e,u={};for(e in n)w(e,n)&&(u[e]=w(e,r)?t(e,n[e],r[e]):n[e]);for(e in r)w(e,r)&&!w(e,u)&&(u[e]=r[e]);return u}),Ee=c(function t(n,r,e){return Se(function(r,e,u){return $(e)&&$(u)?t(n,e,u):n(r,e,u)},r,e)}),_e=e(function(t,n){return Ee(function(t,n,r){return n},t,n)}),qe=e(function(t,n){return Ee(function(t,n,r){return r},t,n)}),ke=c(function(t,n,r){return Ee(function(n,r,e){return t(r,e)},n,r)}),Ne=c(function(t,n,r){return Se(function(n,r,e){return t(r,e)},n,r)}),Ie=e(function(t,n){return t>n?n:t}),We=c(function(t,n,r){return t(r)<t(n)?r:n}),Pe=e(function(t,n){return t%n}),Ce=e(function(t,n){return t*n}),Te=r(function(t){return-t}),Be=e(K(s(["any"],Vt,$t))),Fe=r(function(t){return xt(0>t?1:t+1,function(){return rr(t,arguments)})}),Re=c(function(t,n,r){return t(n(r))}),Ue=r(function(t){return[t]}),De=e(function(t,n){for(var r={},e={},u=0,i=t.length;i>u;)e[t[u]]=1,u+=1;for(var o in n)e.hasOwnProperty(o)||(r[o]=n[o]);return r}),ze=r(function(t){var n,r=!1;return i(t.length,function(){return r?n:(r=!0,n=t.apply(this,arguments))})}),Me=function(t){return{value:t,map:function(n){return Me(n(t))}}},Le=c(function(t,n,r){return t(function(t){return Me(n(t))})(r).value}),Ke=e(function(t,n){return[t,n]}),Ve=lt(u),$e=lt(xr(u)),He=re([Nn,In]),Je=c(function(t,n,r){return _n(Ut(t,r),n)}),Xe=c(function(t,n,r){return Mn(t,Ut(n,r))}),Ye=c(function(t,n,r){return n.length>0&&t(Ut(n,r))}),Ze=e(function(t,n){for(var r={},e=0;t.length>e;)t[e]in n&&(r[t[e]]=n[t[e]]),e+=1;return r}),Ge=e(function(t,n){for(var r={},e=0,u=t.length;u>e;){var i=t[e];r[i]=n[i],e+=1}return r}),Qe=e(function(t,n){var r={};for(var e in n)t(n[e],e,n)&&(r[e]=n[e]);return r}),tu=e(function(t,n){return u([t],n)}),nu=Mt(Ce,1),ru=e(function(t,n){return xt(n.length,function(){for(var r=[],e=0;n.length>e;)r.push(n[e].call(this,arguments[e])),e+=1;return t.apply(this,r.concat(Array.prototype.slice.call(arguments,n.length)))})}),eu=ru(p,[Ge,Ir]),uu=c(function(t,n,r){return _n(n,r[t])}),iu=c(function(t,n,r){return Qr(t,r[n])}),ou=c(function(t,n,r){return null!=r&&w(n,r)?r[n]:t}),cu=c(function(t,n,r){return t(r[n])}),au=e(function(t,n){for(var r=t.length,e=[],u=0;r>u;)e[u]=n[t[u]],u+=1;return e}),su=e(function(t,n){if(!ft(t)||!ft(n))throw new TypeError("Both arguments to range must be numbers");for(var r=[],e=t;n>e;)r.push(e),e+=1;return r}),fu=c(function(t,n,r){for(var e=r.length-1;e>=0;)n=t(r[e],n),e-=1;return n}),lu=o(4,[],function(t,n,r,e){return b(function(r,e){return t(r,e)?n(r,e):f(r)},r,e)}),pu=r(f),hu=e(function(t,n){var r,e=+n,u=0;if(0>e||isNaN(e))throw new RangeError("n must be a non-negative number");for(r=Array(e);e>u;)r[u]=t(u),u+=1;return r}),yu=e(function(t,n){return hu(dt(t),n)}),du=c(function(t,n,r){return r.replace(t,n)}),gu=c(function(t,n,r){for(var e=0,u=r.length,i=[n];u>e;)n=t(n,r[e]),i[e+1]=n,e+=1;return i}),vu=e(function(t,n){return"function"==typeof n.sequence?n.sequence(t):fu(function(t,n){return Jt(Rt(tu,t),n)},t([]),n)}),mu=c(function(t,n,r){return Le(t,dt(n),r)}),bu=e(function(t,n){return Array.prototype.slice.call(n,0).sort(t)}),xu=e(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,r){var e=t(n),u=t(r);return u>e?-1:e>u?1:0})}),wu=e(function(t,n){return Array.prototype.slice.call(n,0).sort(function(n,r){for(var e=0,u=0;0===e&&t.length>u;)e=t[u](n,r),u+=1;return e})}),ju=Gr(1,"split"),Au=e(function(t,n){return[An(0,t,n),An(t,ie(n),n)]}),Ou=e(function(t,n){if(0>=t)throw Error("First argument to splitEvery must be a positive integer");for(var r=[],e=0;n.length>e;)r.push(An(e,e+=t,n));return r}),Su=e(function(t,n){for(var r=0,e=n.length,u=[];e>r&&!t(n[r]);)u.push(n[r]),r+=1;return[u,Array.prototype.slice.call(n,r)]}),Eu=e(function(t,n){return _n(Gn(t.length,n),t)}),_u=e(function(t,n){return+t-+n}),qu=e(function(t,n){return Pn(Kn(t,n),Kn(n,t))}),ku=c(function(t,n,r){return Pn(Vn(t,n,r),Vn(t,r,n))}),Nu=e(function(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return An(r+1,1/0,n)});pt.prototype["@@transducer/init"]=Ot.init,pt.prototype["@@transducer/result"]=Ot.result,pt.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):f(t)};var Iu=e(s(["takeWhile"],e(function(t,n){return new pt(t,n)}),function(t,n){for(var r=0,e=n.length;e>r&&t(n[r]);)r+=1;return An(0,r,n)}));ht.prototype["@@transducer/init"]=Ot.init,ht.prototype["@@transducer/result"]=Ot.result,ht.prototype["@@transducer/step"]=function(t,n){return this.f(n),this.xf["@@transducer/step"](t,n)};var Wu=e(s([],e(function(t,n){return new ht(t,n)}),function(t,n){return t(n),n})),Pu=e(function(t,n){if(!yt(t))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+Wn(t));return _(t).test(n)}),Cu=Gr(0,"toLowerCase"),Tu=r(function(t){var n=[];for(var r in t)w(r,t)&&(n[n.length]=[r,t[r]]);return n}),Bu=r(function(t){var n=[];for(var r in t)n[n.length]=[r,t[r]];return n}),Fu=Gr(0,"toUpperCase"),Ru=xt(4,function(t,n,r,e){return b(t("function"==typeof n?d(n):n),r,e)}),Uu=r(function(t){for(var n=0,r=[];t.length>n;){for(var e=t[n],u=0;e.length>u;)void 0===r[u]&&(r[u]=[]),r[u].push(e[u]),u+=1;n+=1}return r}),Du=c(function(t,n,r){return"function"==typeof r["fantasy-land/traverse"]?r["fantasy-land/traverse"](n,t):vu(t,Rt(n,r))}),zu="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Mu=r(!("function"==typeof String.prototype.trim)||zu.trim()?function(t){var n=RegExp("^["+zu+"]["+zu+"]*"),r=RegExp("["+zu+"]["+zu+"]*$");return t.replace(n,"").replace(r,"")}:function(t){return t.trim()}),Lu=e(function(t,n){return i(t.length,function(){try{return t.apply(this,arguments)}catch(t){return n.apply(this,u([t],arguments))}})}),Ku=r(function(t){return function(){return t(Array.prototype.slice.call(arguments,0))}}),Vu=r(function(t){return cn(1,t)}),$u=e(function(t,n){return xt(t,function(){for(var r,e=1,u=n,i=0;t>=e&&"function"==typeof u;)r=e===t?arguments.length:i+u.length,u=u.apply(this,Array.prototype.slice.call(arguments,i,r)),e+=1,i=r;return u})}),Hu=e(function(t,n){for(var r=t(n),e=[];r&&r.length;)e[e.length]=r[0],r=t(r[1]);return e}),Ju=e(W(zr,u)),Xu=e(function(t,n){for(var r,e=0,u=n.length,i=[];u>e;)F(t,r=n[e],i)||(i[i.length]=r),e+=1;return i}),Yu=c(function(t,n,r){return Xu(t,u(n,r))}),Zu=c(function(t,n,r){return t(r)?r:n(r)}),Gu=gn(ot),Qu=c(function(t,n,r){for(var e=r;!t(e);)e=n(e);return e}),ti=r(function(t){var n,r=[];for(n in t)r[r.length]=t[n];return r}),ni=function(t){return{value:t,"fantasy-land/map":function(){return this}}},ri=e(function(t,n){return t(ni)(n).value}),ei=c(function(t,n,r){return t(r)?n(r):r}),ui=e(function(t,n){for(var r in t)if(w(r,t)&&!t[r](n[r]))return!1;return!0}),ii=e(function(t,n){return ui(Rt(_n,t),n)}),oi=e(function(t,n){return In(xr(M)(t),n)}),ci=e(function(t,n){for(var r,e=0,u=t.length,i=n.length,o=[];u>e;){for(r=0;i>r;)o[o.length]=[t[e],n[r]],r+=1;e+=1}return o}),ai=e(function(t,n){for(var r=[],e=0,u=Math.min(t.length,n.length);u>e;)r[e]=[t[e],n[e]],e+=1;return r}),si=e(function(t,n){for(var r=0,e=Math.min(t.length,n.length),u={};e>r;)u[t[r]]=n[r],r+=1;return u}),fi=c(function(t,n,r){for(var e=[],u=0,i=Math.min(n.length,r.length);i>u;)e[u]=t(n[u],r[u]),u+=1;return e});t.F=gt,t.T=vt,t.__=mt,t.add=bt,t.addIndex=wt,t.adjust=jt,t.all=St,t.allPass=Lt,t.always=dt,t.and=Kt,t.any=$t,t.anyPass=Ht,t.ap=Jt,t.aperture=Xt,t.append=Yt,t.apply=Zt,t.applySpec=Qt,t.applyTo=tn,t.ascend=nn,t.assoc=rn,t.assocPath=on,t.binary=an,t.bind=qt,t.both=ln,t.call=hn,t.chain=gn,t.clamp=vn,t.clone=bn,t.comparator=xn,t.complement=jn,t.compose=W,t.composeK=P,t.composeP=function(){if(0===arguments.length)throw Error("composeP requires at least one argument");return T.apply(this,Sn(arguments))},t.concat=Pn,t.cond=Cn,t.construct=Bn,t.constructN=Tn,t.contains=Fn,t.converge=Rn,t.countBy=Dn,t.curry=pn,t.curryN=xt,t.dec=zn,t.defaultTo=Mn,t.descend=Ln,t.difference=Kn,t.differenceWith=Vn,t.dissoc=$n,t.dissocPath=Xn,t.divide=Yn,t.drop=Zn,t.dropLast=Qn,t.dropLastWhile=tr,t.dropRepeats=ir,t.dropRepeatsWith=ur,t.dropWhile=or,t.either=ar,t.empty=sr,t.endsWith=lr,t.eqBy=pr,t.eqProps=hr,t.equals=_n,t.evolve=yr,t.filter=Nn,t.find=dr,t.findIndex=gr,t.findLast=vr,t.findLastIndex=mr,t.flatten=br,t.flip=xr,t.forEach=wr,t.forEachObjIndexed=jr,t.fromPairs=Ar,t.groupBy=Or,t.groupWith=Sr,t.gt=Er,t.gte=_r,t.has=qr,t.hasIn=kr,t.head=Nr,t.identical=En,t.identity=Ir,t.ifElse=Wr,t.inc=Pr,t.indexBy=Cr,t.indexOf=Tr,t.init=Br,t.innerJoin=Fr,t.insert=Rr,t.insertAll=Ur,t.intersection=Mr,t.intersperse=Lr,t.into=Xr,t.invert=Yr,t.invertObj=Zr,t.invoker=Gr,t.is=Qr,t.isEmpty=te,t.isNil=un,t.join=ne,t.juxt=re,t.keys=Ft,t.keysIn=ee,t.last=er,t.lastIndexOf=ue,t.length=ie,t.lens=oe,t.lensIndex=ce,t.lensPath=ae,t.lensProp=se,t.lift=fn,t.liftN=sn,t.lt=fe,t.lte=le,t.map=Rt,t.mapAccum=pe,t.mapAccumRight=he,t.mapObjIndexed=ye,t.match=de,t.mathMod=ge,t.max=Et,t.maxBy=ve,t.mean=be,t.median=xe,t.memoize=je,t.memoizeWith=we,t.merge=Ae,t.mergeAll=Oe,t.mergeDeepLeft=_e,t.mergeDeepRight=qe,t.mergeDeepWith=ke,t.mergeDeepWithKey=Ee,t.mergeWith=Ne,t.mergeWithKey=Se,t.min=Ie,t.minBy=We,t.modulo=Pe,t.multiply=Ce,t.nAry=cn,t.negate=Te,t.none=Be,t.not=wn,t.nth=rr,t.nthArg=Fe,t.o=Re,t.objOf=Vr,t.of=Ue,t.omit=De,t.once=ze,t.or=cr,t.over=Le,t.pair=Ke,t.partial=Ve,t.partialRight=$e,t.partition=He,t.path=Ut,t.pathEq=Je,t.pathOr=Xe,t.pathSatisfies=Ye,t.pick=Ze,t.pickAll=Ge,t.pickBy=Qe,t.pipe=I,t.pipeK=function(){if(0===arguments.length)throw Error("pipeK requires at least one argument");return P.apply(this,Sn(arguments))},t.pipeP=T,t.pluck=zt,t.prepend=tu,t.product=nu,t.project=eu,t.prop=Dt,t.propEq=uu,t.propIs=iu,t.propOr=ou,t.propSatisfies=cu,t.props=au,t.range=su,t.reduce=Mt,t.reduceBy=Un,t.reduceRight=fu,t.reduceWhile=lu,t.reduced=pu,t.reject=In,t.remove=Hn,t.repeat=yu,t.replace=du,t.reverse=Sn,t.scan=gu,t.sequence=vu,t.set=mu,t.slice=An,t.sort=bu,t.sortBy=xu,t.sortWith=wu,t.split=ju,t.splitAt=Au,t.splitEvery=Ou,t.splitWhen=Su,t.startsWith=Eu,t.subtract=_u,t.sum=me,t.symmetricDifference=qu,t.symmetricDifferenceWith=ku,t.tail=On,t.take=Gn,t.takeLast=fr,t.takeLastWhile=Nu,t.takeWhile=Iu,t.tap=Wu,t.test=Pu,t.times=hu,t.toLower=Cu,t.toPairs=Tu,t.toPairsIn=Bu,t.toString=Wn,t.toUpper=Fu,t.transduce=Ru,t.transpose=Uu,t.traverse=Du,t.trim=Mu,t.tryCatch=Lu,t.type=mn,t.unapply=Ku,t.unary=Vu,t.uncurryN=$u,t.unfold=Hu,t.union=Ju,t.unionWith=Yu,t.uniq=zr,t.uniqBy=Dr,t.uniqWith=Xu,t.unless=Zu,t.unnest=Gu,t.until=Qu,t.update=Jn,t.useWith=ru,t.values=Gt,t.valuesIn=ti,t.view=ri,t.when=ei,t.where=ui,t.whereEq=ii,t.without=oi,t.xprod=ci,t.zip=ai,t.zipObj=si,t.zipWith=fi,Object.defineProperty(t,"__esModule",{value:!0})});

// https://ramdajs.com/docs/
// Array.from(document.querySelectorAll("code.hljs.javascript"),  e =>console.log(e.textContent))
R.keys({a: 1, b: 2, c: 3}) //=> ['a', 'b', 'c']
R.trim('   xyz  '); //=> 'xyz'
R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
R.add(2, 3);       //=>  5
R.add(7)(10);      //=> 17
var mapIndexed = R.addIndex(R.map);
mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
//=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
var equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false
var isQueen = R.propEq('rank', 'Q');
var isSpade = R.propEq('suit', '♠︎');
var isQueenOfSpades = R.allPass([isQueen, isSpade]);

isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
var t = R.always('Tee');
t(); //=> 'Tee'
R.and(true, true); //=> true
R.and(true, false); //=> false
R.and(false, true); //=> false
R.and(false, false); //=> false
var lessThan0 = R.flip(R.lt)(0);
var lessThan2 = R.flip(R.lt)(2);
R.any(lessThan0)([1, 2]); //=> false
R.any(lessThan2)([1, 2]); //=> true
var isClub = R.propEq('suit', '♣');
var isSpade = R.propEq('suit', '♠');
var isBlackCard = R.anyPass([isClub, isSpade]);

isBlackCard({rank: '10', suit: '♣'}); //=> true
isBlackCard({rank: 'Q', suit: '♠'}); //=> true
isBlackCard({rank: 'Q', suit: '♦'}); //=> false
R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]

// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
R.aperture(7, [1, 2, 3, 4, 5]); //=> []
R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
var nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max, nums); //=> 42
var getMetrics = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
});
getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
var t42 = R.applyTo(42);
t42(R.identity); //=> 42
t42(R.add(1)); //=> 43
var byAge = R.ascend(R.prop('age'));
var people = [
  // ...
];
var peopleByYoungestFirst = R.sort(byAge, people);
R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}

// Any missing or non-object keys in path will be overridden
R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
var takesThreeArgs = function(a, b, c) {
  return [a, b, c];
};
takesThreeArgs.length; //=> 3
takesThreeArgs(1, 2, 3); //=> [1, 2, 3]

var takesTwoArgs = R.binary(takesThreeArgs);
takesTwoArgs.length; //=> 2
// Only 2 arguments are passed to the wrapped function
takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
var log = R.bind(console.log, console);
R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
// logs {a: 2}
var gt10 = R.gt(R.__, 10)
var lt20 = R.lt(R.__, 20)
var f = R.both(gt10, lt20);
f(15); //=> true
f(30); //=> false
R.call(R.add, 1, 2); //=> 3

var indentN = R.pipe(R.repeat(' '),
                     R.join(''),
                     R.replace(/^(?!$)/gm));

var format = R.converge(R.call, [
                            R.pipe(R.prop('indent'), indentN),
                            R.prop('value')
                        ]);

format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
var duplicate = n => [n, n];
R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]

R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
R.clamp(1, 10, -5) // => 1
R.clamp(1, 10, 15) // => 10
R.clamp(1, 10, 4)  // => 4
var objects = [{}, {}, {}];
var objectsClone = R.clone(objects);
objects === objectsClone; //=> false
objects[0] === objectsClone[0]; //=> false
var byAge = R.comparator((a, b) => a.age < b.age);
var people = [
  // ...
];
var peopleByIncreasingAge = R.sort(byAge, people);
var isNotNil = R.complement(R.isNil);
isNil(null); //=> true
isNotNil(null); //=> false
isNil(7); //=> false
isNotNil(7); //=> true
var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
var yellGreeting = R.compose(R.toUpper, classyGreeting);
yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"

R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
//  get :: String -> Object -> Maybe *
 var get = R.curry((propName, obj) => Maybe(obj[propName]))

 //  getStateCode :: Maybe String -> Maybe String
 var getStateCode = R.composeK(
   R.compose(Maybe.of, R.toUpper),
   get('state'),
   get('address'),
   get('user'),
 );
 getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 getStateCode({}); //=> Maybe.Nothing()
var db = {
  users: {
    JOE: {
      name: 'Joe',
      followers: ['STEVE', 'SUZY']
    }
  }
}

// We'll pretend to do a db lookup which returns a promise
var lookupUser = (userId) => Promise.resolve(db.users[userId])
var lookupFollowers = (user) => Promise.resolve(user.followers)
lookupUser('JOE').then(lookupFollowers)

//  followersForUser :: String -> Promise [UserId]
var followersForUser = R.composeP(lookupFollowers, lookupUser);
followersForUser('JOE').then(followers => console.log('Followers:', followers))
// Followers: ["STEVE","SUZY"]
R.concat('ABC', 'DEF'); // 'ABCDEF'
R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
R.concat([], []); //=> []
var fn = R.cond([
  [R.equals(0),   R.always('water freezes at 0°C')],
  [R.equals(100), R.always('water boils at 100°C')],
  [R.T,           temp => 'nothing special happens at ' + temp + '°C']
]);
fn(0); //=> 'water freezes at 0°C'
fn(50); //=> 'nothing special happens at 50°C'
fn(100); //=> 'water boils at 100°C'
// Constructor function
function Animal(kind) {
  this.kind = kind;
};
Animal.prototype.sighting = function() {
  return "It's a " + this.kind + "!";
}

var AnimalConstructor = R.construct(Animal)

// Notice we no longer need the 'new' keyword:
AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};

var animalTypes = ["Lion", "Tiger", "Bear"];
var animalSighting = R.invoker(0, 'sighting');
var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
// Variadic Constructor function
function Salad() {
  this.ingredients = arguments;
}

Salad.prototype.recipe = function() {
  var instructions = R.map(ingredient => 'Add a dollop of ' + ingredient, this.ingredients);
  return R.join('\n', instructions);
};

var ThreeLayerSalad = R.constructN(3, Salad);

// Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup');

console.log(salad.recipe());
// Add a dollop of Mayonnaise
// Add a dollop of Potato Chips
// Add a dollop of Ketchup
R.contains(3, [1, 2, 3]); //=> true
R.contains(4, [1, 2, 3]); //=> false
R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
R.contains([42], [[42]]); //=> true
var average = R.converge(R.divide, [R.sum, R.length])
average([1, 2, 3, 4, 5, 6, 7]) //=> 4

var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
strangeConcat("Yodel") //=> "YODELyodel"
var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}

var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
var addFourNumbers = (a, b, c, d) => a + b + c + d;

var curriedAddFourNumbers = R.curry(addFourNumbers);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
g(4); //=> 10
var sumArgs = (...args) => R.sum(args);

var curriedAddFourNumbers = R.curryN(4, sumArgs);
var f = curriedAddFourNumbers(1, 2);
var g = f(3);
g(4); //=> 10
R.dec(42); //=> 41
var defaultTo42 = R.defaultTo(42);

defaultTo42(null);  //=> 42
defaultTo42(undefined);  //=> 42
defaultTo42('Ramda');  //=> 'Ramda'
// parseInt('string') results in NaN
defaultTo42(parseInt('string')); //=> 42
var byAge = R.descend(R.prop('age'));
var people = [
  // ...
];
var peopleByOldestFirst = R.sort(byAge, people);
R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
var cmp = (x, y) => x.a === y.a;
var l1 = [{a: 1}, {a: 2}, {a: 3}];
var l2 = [{a: 3}, {a: 4}];
R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
R.divide(71, 100); //=> 0.71

var half = R.divide(R.__, 2);
half(42); //=> 21

var reciprocal = R.divide(1);
reciprocal(4);   //=> 0.25
R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
R.drop(3, ['foo', 'bar', 'baz']); //=> []
R.drop(4, ['foo', 'bar', 'baz']); //=> []
R.drop(3, 'ramda');               //=> 'da'
R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
R.dropLast(3, 'ramda');               //=> 'ra'
var lteThree = x => x <= 3;

R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]

R.dropLastWhile(x => x !== 'd' , 'Ramda'); //=> 'Ramd'
R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
var lteTwo = x => x <= 2;

R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]

R.dropWhile(x => x !== 'd' , 'Ramda'); //=> 'da'
var gt10 = x => x > 10;
var even = x => x % 2 === 0;
var f = R.either(gt10, even);
f(101); //=> true
f(8); //=> true
R.empty(Just(42));      //=> Nothing()
R.empty([1, 2, 3]);     //=> []
R.empty('unicorns');    //=> ''
R.empty({x: 1, y: 2});  //=> {}
R.endsWith('c', 'abc')                //=> true
R.endsWith('b', 'abc')                //=> false
R.endsWith(['c'], ['a', 'b', 'c'])    //=> true
R.endsWith(['b'], ['a', 'b', 'c'])    //=> false
R.eqBy(Math.abs, 5, -5); //=> true
var o1 = { a: 1, b: 2, c: 3, d: 4 };
var o2 = { a: 10, b: 20, c: 3, d: 40 };
R.eqProps('a', o1, o2); //=> false
R.eqProps('c', o1, o2); //=> true
R.equals(1, 1); //=> true
R.equals(1, '1'); //=> false
R.equals([1, 2, 3], [1, 2, 3]); //=> true

var a = {}; a.v = a;
var b = {}; b.v = b;
R.equals(a, b); //=> true
var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
var transformations = {
  firstName: R.trim,
  lastName: R.trim, // Will not get invoked.
  data: {elapsed: R.add(1), remaining: R.add(-1)}
};
R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
R.F(); //=> false
var isEven = n => n % 2 === 0;

R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]

R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.find(R.propEq('a', 2))(xs); //=> {a: 2}
R.find(R.propEq('a', 4))(xs); //=> undefined
var xs = [{a: 1}, {a: 2}, {a: 3}];
R.findIndex(R.propEq('a', 2))(xs); //=> 1
R.findIndex(R.propEq('a', 4))(xs); //=> -1
var xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
R.findLast(R.propEq('a', 4))(xs); //=> undefined
var xs = [{a: 1, b: 0}, {a:1, b: 1}];
R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
//=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var mergeThree = (a, b, c) => [].concat(a, b, c);

mergeThree(1, 2, 3); //=> [1, 2, 3]

R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
var printXPlusFive = x => console.log(x + 5);
R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
// logs 6
// logs 7
// logs 8
var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
// logs x:1
// logs y:2
R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
var byGrade = R.groupBy(function(student) {
  var score = student.score;
  return score < 65 ? 'F' :
         score < 70 ? 'D' :
         score < 80 ? 'C' :
         score < 90 ? 'B' : 'A';
});
var students = [{name: 'Abby', score: 84},
                {name: 'Eddy', score: 58},
                // ...
                {name: 'Jack', score: 69}];
byGrade(students);
// {
//   'A': [{name: 'Dianne', score: 99}],
//   'B': [{name: 'Abby', score: 84}]
//   // ...,
//   'F': [{name: 'Eddy', score: 58}]
// }
R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
//=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]

R.groupWith((a, b) => a + 1 === b, [0, 1, 1, 2, 3, 5, 8, 13, 21])
//=> [[0, 1], [1, 2, 3], [5], [8], [13], [21]]

R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
//=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

R.groupWith(R.eqBy(isVowel), 'aestiou')
//=> ['ae', 'st', 'iou']
R.gt(2, 1); //=> true
R.gt(2, 2); //=> false
R.gt(2, 3); //=> false
R.gt('a', 'z'); //=> false
R.gt('z', 'a'); //=> true
R.gte(2, 1); //=> true
R.gte(2, 2); //=> true
R.gte(2, 3); //=> false
R.gte('a', 'z'); //=> false
R.gte('z', 'a'); //=> true
var hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false

var point = {x: 0, y: 0};
var pointHas = R.has(R.__, point);
pointHas('x');  //=> true
pointHas('y');  //=> true
pointHas('z');  //=> false
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}
Rectangle.prototype.area = function() {
  return this.width * this.height;
};

var square = new Rectangle(2, 2);
R.hasIn('width', square);  //=> true
R.hasIn('area', square);  //=> true
R.head(['fi', 'fo', 'fum']); //=> 'fi'
R.head([]); //=> undefined

R.head('abc'); //=> 'a'
R.head(''); //=> ''
var o = {};
R.identical(o, o); //=> true
R.identical(1, 1); //=> true
R.identical(1, '1'); //=> false
R.identical([], []); //=> false
R.identical(0, -0); //=> false
R.identical(NaN, NaN); //=> true
R.identity(1); //=> 1

var obj = {};
R.identity(obj) === obj; //=> true
var incCount = R.ifElse(
  R.has('count'),
  R.over(R.lensProp('count'), R.inc),
  R.assoc('count', 1)
);
incCount({});           //=> { count: 1 }
incCount({ count: 1 }); //=> { count: 2 }
R.inc(42); //=> 43
var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
R.indexBy(R.prop('id'), list);
//=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
R.indexOf(3, [1,2,3,4]); //=> 2
R.indexOf(10, [1,2,3,4]); //=> -1
R.init([1, 2, 3]);  //=> [1, 2]
R.init([1, 2]);     //=> [1]
R.init([1]);        //=> []
R.init([]);         //=> []

R.init('abc');  //=> 'ab'
R.init('ab');   //=> 'a'
R.init('a');    //=> ''
R.init('');     //=> ''
R.innerJoin(
  (record, id) => record.id === id,
  [{id: 824, name: 'Richie Furay'},
   {id: 956, name: 'Dewey Martin'},
   {id: 313, name: 'Bruce Palmer'},
   {id: 456, name: 'Stephen Stills'},
   {id: 177, name: 'Neil Young'}],
  [177, 456, 999]
);
//=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
var numbers = [1, 2, 3, 4];
var transducer = R.compose(R.map(R.add(1)), R.take(2));

R.into([], transducer, numbers); //=> [2, 3]

var intoArray = R.into([]);
intoArray(transducer, numbers); //=> [2, 3]
var raceResultsByFirstName = {
  first: 'alice',
  second: 'jake',
  third: 'alice',
};
R.invert(raceResultsByFirstName);
//=> { 'alice': ['first', 'third'], 'jake':['second'] }
var raceResults = {
  first: 'alice',
  second: 'jake'
};
R.invertObj(raceResults);
//=> { 'alice': 'first', 'jake':'second' }

// Alternatively:
var raceResults = ['alice', 'jake'];
R.invertObj(raceResults);
//=> { 'alice': '0', 'jake':'1' }
var sliceFrom = R.invoker(1, 'slice');
sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
var sliceFrom6 = R.invoker(2, 'slice')(6);
sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
R.is(Object, {}); //=> true
R.is(Number, 1); //=> true
R.is(Object, 1); //=> false
R.is(String, 's'); //=> true
R.is(String, new String('')); //=> true
R.is(Object, new String('')); //=> true
R.is(Object, 's'); //=> false
R.is(Number, {}); //=> false
R.isEmpty([1, 2, 3]);   //=> false
R.isEmpty([]);          //=> true
R.isEmpty('');          //=> true
R.isEmpty(null);        //=> false
R.isEmpty({});          //=> true
R.isEmpty({length: 0}); //=> false
R.isNil(null); //=> true
R.isNil(undefined); //=> true
R.isNil(0); //=> false
R.isNil([]); //=> false
var spacer = R.join(' ');
spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
R.join('|', [1, 2, 3]);    //=> '1|2|3'
var getRange = R.juxt([Math.min, Math.max]);
getRange(3, 4, 9, -3); //=> [-3, 9]
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
R.keysIn(f); //=> ['x', 'y']
R.last(['fi', 'fo', 'fum']); //=> 'fum'
R.last([]); //=> undefined

R.last('abc'); //=> 'c'
R.last(''); //=> ''
R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
R.lastIndexOf(10, [1,2,3,4]); //=> -1
R.length([]); //=> 0
R.length([1, 2, 3]); //=> 3
var xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2});            //=> 1
R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
var headLens = R.lensIndex(0);

R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
var xHeadYLens = R.lensPath(['x', 0, 'y']);

R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
//=> 2
R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
//=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
//=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
var xLens = R.lensProp('x');

R.view(xLens, {x: 1, y: 2});            //=> 1
R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
var madd3 = R.lift((a, b, c) => a + b + c);

madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]

var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);

madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
var madd3 = R.liftN(3, (...args) => R.sum(args));
madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
R.lt(2, 1); //=> false
R.lt(2, 2); //=> false
R.lt(2, 3); //=> true
R.lt('a', 'z'); //=> true
R.lt('z', 'a'); //=> false
R.lte(2, 1); //=> false
R.lte(2, 2); //=> true
R.lte(2, 3); //=> true
R.lte('a', 'z'); //=> true
R.lte('z', 'a'); //=> false
var double = x => x * 2;

R.map(double, [1, 2, 3]); //=> [2, 4, 6]

R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
var digits = ['1', '2', '3', '4'];
var appender = (a, b) => [a + b, a + b];

R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
var digits = ['1', '2', '3', '4'];
var append = (a, b) => [a + b, a + b];

R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
var values = { x: 1, y: 2, z: 3 };
var prependKeyAndDouble = (num, key, obj) => key + (num * 2);

R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
R.match(/a/, 'b'); //=> []
R.match(/a/, null); //=> TypeError: null does not have a method named "match"
R.mathMod(-17, 5);  //=> 3
R.mathMod(17, 5);   //=> 2
R.mathMod(17, -5);  //=> NaN
R.mathMod(17, 0);   //=> NaN
R.mathMod(17.2, 5); //=> NaN
R.mathMod(17, 5.3); //=> NaN

var clock = R.mathMod(R.__, 12);
clock(15); //=> 3
clock(24); //=> 0

var seventeenMod = R.mathMod(17);
seventeenMod(3);  //=> 2
seventeenMod(4);  //=> 1
seventeenMod(10); //=> 7
R.max(789, 123); //=> 789
R.max('a', 'b'); //=> 'b'
//  square :: Number -> Number
var square = n => n * n;

R.maxBy(square, -3, 2); //=> -3

R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
R.reduce(R.maxBy(square), 0, []); //=> 0
R.mean([2, 7, 9]); //=> 6
R.mean([]); //=> NaN
R.median([2, 9, 7]); //=> 7
R.median([7, 2, 10, 9]); //=> 8
R.median([]); //=> NaN
let count = 0;
const factorial = R.memoize(n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});
factorial(5); //=> 120
factorial(5); //=> 120
factorial(5); //=> 120
count; //=> 1
let count = 0;
const factorial = R.memoizeWith(R.identity, n => {
  count += 1;
  return R.product(R.range(1, n + 1));
});
factorial(5); //=> 120
factorial(5); //=> 120
factorial(5); //=> 120
count; //=> 1
R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
//=> { 'name': 'fred', 'age': 40 }

var resetToDefault = R.merge(R.__, {x: 0});
resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
R.mergeDeepLeft({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
                { age: 40, contact: { email: 'baa@example.com' }});
//=> { name: 'fred', age: 10, contact: { email: 'moo@example.com' }}
R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
                 { age: 40, contact: { email: 'baa@example.com' }});
//=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
R.mergeDeepWith(R.concat,
                { a: true, c: { values: [10, 20] }},
                { b: true, c: { values: [15, 35] }});
//=> { a: true, b: true, c: { values: [10, 20, 15, 35] }}
let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
R.mergeDeepWithKey(concatValues,
                   { a: true, c: { thing: 'foo', values: [10, 20] }},
                   { b: true, c: { thing: 'bar', values: [15, 35] }});
//=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
R.mergeWith(R.concat,
            { a: true, values: [10, 20] },
            { b: true, values: [15, 35] });
//=> { a: true, b: true, values: [10, 20, 15, 35] }
let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
R.mergeWithKey(concatValues,
               { a: true, thing: 'foo', values: [10, 20] },
               { b: true, thing: 'bar', values: [15, 35] });
//=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
R.min(789, 123); //=> 123
R.min('a', 'b'); //=> 'a'
//  square :: Number -> Number
var square = n => n * n;

R.minBy(square, -3, 2); //=> 2

R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
R.reduce(R.minBy(square), Infinity, []); //=> Infinity
var greet = R.replace('{name}', R.__, 'Hello, {name}!');
greet('Alice'); //=> 'Hello, Alice!'
R.modulo(17, 3); //=> 2
// JS behavior:
R.modulo(-17, 3); //=> -2
R.modulo(17, -3); //=> 2

var isOdd = R.modulo(R.__, 2);
isOdd(42); //=> 0
isOdd(21); //=> 1
var double = R.multiply(2);
var triple = R.multiply(3);
double(3);       //=>  6
triple(4);       //=> 12
R.multiply(2, 5);  //=> 10
var takesTwoArgs = (a, b) => [a, b];

takesTwoArgs.length; //=> 2
takesTwoArgs(1, 2); //=> [1, 2]

var takesOneArg = R.nAry(1, takesTwoArgs);
takesOneArg.length; //=> 1
// Only `n` arguments are passed to the wrapped function
takesOneArg(1, 2); //=> [1, undefined]
R.negate(42); //=> -42
var isEven = n => n % 2 === 0;
var isOdd = n => n % 2 === 1;

R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
R.none(isOdd, [1, 3, 5, 7, 8, 11]); //=> false
R.not(true); //=> false
R.not(false); //=> true
R.not(0); //=> true
R.not(1); //=> false
var list = ['foo', 'bar', 'baz', 'quux'];
R.nth(1, list); //=> 'bar'
R.nth(-1, list); //=> 'quux'
R.nth(-99, list); //=> undefined

R.nth(2, 'abc'); //=> 'c'
R.nth(3, 'abc'); //=> ''
R.nthArg(1)('a', 'b', 'c'); //=> 'b'
R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
var classyGreeting = name => "The name's " + name.last + ", " + name.first + " " + name.last
var yellGreeting = R.o(R.toUpper, classyGreeting);
yellGreeting({first: 'James', last: 'Bond'}); //=> "THE NAME'S BOND, JAMES BOND"

R.o(R.multiply(10), R.add(10))(-4) //=> 60
var matchPhrases = R.compose(
  R.objOf('must'),
  R.map(R.objOf('match_phrase'))
);
matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
R.of(null); //=> [null]
R.of([42]); //=> [[42]]
R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
var addOneOnce = R.once(x => x + 1);
addOneOnce(10); //=> 11
addOneOnce(addOneOnce(50)); //=> 11
R.or(true, true); //=> true
R.or(true, false); //=> true
R.or(false, true); //=> true
R.or(false, false); //=> false
var headLens = R.lensIndex(0);

R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
R.pair('foo', 'bar'); //=> ['foo', 'bar']
var multiply2 = (a, b) => a * b;
var double = R.partial(multiply2, [2]);
double(2); //=> 4

var greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

var sayHello = R.partial(greet, ['Hello']);
var sayHelloToMs = R.partial(sayHello, ['Ms.']);
sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
var greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';

var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);

greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
// => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]

R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
// => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
R.path(['a', 'b'], {a: {b: 2}}); //=> 2
R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
var user1 = { address: { zipCode: 90210 } };
var user2 = { address: { zipCode: 55555 } };
var user3 = { name: 'Bob' };
var users = [ user1, user2, user3 ];
var isFamous = R.pathEq(['address', 'zipCode'], 90210);
R.filter(isFamous, users); //=> [ user1 ]
R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
var isUpperCase = (val, key) => key.toUpperCase() === key;
R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
var f = R.pipe(Math.pow, R.negate, R.inc);

f(3, 4); // -(3^4) + 1
//  parseJson :: String -> Maybe *
//  get :: String -> Object -> Maybe *

//  getStateCode :: Maybe String -> Maybe String
var getStateCode = R.pipeK(
  parseJson,
  get('user'),
  get('address'),
  get('state'),
  R.compose(Maybe.of, R.toUpper)
);

getStateCode('{"user":{"address":{"state":"ny"}}}');
//=> Just('NY')
getStateCode('[Invalid JSON]');
//=> Nothing()
//  followersForUser :: String -> Promise [User]
var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
R.pluck('val', {a: {val: 3}, b: {val: 5}}); //=> {a: 3, b: 5}
R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
R.product([2,4,6,8,100,1]); //=> 38400
var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
var kids = [abby, fred];
R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
R.prop('x', {x: 100}); //=> 100
R.prop('x', {}); //=> undefined
var abby = {name: 'Abby', age: 7, hair: 'blond'};
var fred = {name: 'Fred', age: 12, hair: 'brown'};
var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
var alois = {name: 'Alois', age: 15, disposition: 'surly'};
var kids = [abby, fred, rusty, alois];
var hasBrownHair = R.propEq('hair', 'brown');
R.filter(hasBrownHair, kids); //=> [fred, rusty]
R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
R.propIs(Number, 'x', {x: 'foo'});    //=> false
R.propIs(Number, 'x', {});            //=> false
var alice = {
  name: 'ALICE',
  age: 101
};
var favorite = R.prop('favoriteLibrary');
var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');

favorite(alice);  //=> undefined
favoriteWithDefault(alice);  //=> 'Ramda'
R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]

var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
R.range(1, 5);    //=> [1, 2, 3, 4]
R.range(50, 53);  //=> [50, 51, 52]
R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
//          -               -10
//         / \              / \
//        -   4           -6   4
//       / \              / \
//      -   3   ==>     -3   3
//     / \              / \
//    -   2           -1   2
//   / \              / \
//  0   1            0   1
var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
var namesByGrade = reduceToNamesBy(function(student) {
  var score = student.score;
  return score < 65 ? 'F' :
         score < 70 ? 'D' :
         score < 80 ? 'C' :
         score < 90 ? 'B' : 'A';
});
var students = [{name: 'Lucy', score: 92},
                {name: 'Drew', score: 85},
                // ...
                {name: 'Bart', score: 62}];
namesByGrade(students);
// {
//   'A': ['Lucy'],
//   'B': ['Drew']
//   // ...,
//   'F': ['Bart']
// }
R.reduce(
 (acc, item) => item > 3 ? R.reduced(acc) : acc.concat(item),
 [],
 [1, 2, 3, 4, 5]) // [1, 2, 3]
R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
//    -               -2
//   / \              / \
//  1   -            1   3
//     / \              / \
//    2   -     ==>    2  -1
//       / \              / \
//      3   -            3   4
//         / \              / \
//        4   0            4   0
var isOdd = (acc, x) => x % 2 === 1;
var xs = [1, 3, 5, 60, 777, 800];
R.reduceWhile(isOdd, R.add, 0, xs); //=> 9

var ys = [2, 4, 6]
R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
var isOdd = (n) => n % 2 === 1;

R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]

R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']

var obj = {};
var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
repeatedObjs[0] === repeatedObjs[1]; //=> true
R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'

// Use the "g" (global) flag to replace all occurrences:
R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
R.reverse([1, 2, 3]);  //=> [3, 2, 1]
R.reverse([1, 2]);     //=> [2, 1]
R.reverse([1]);        //=> [1]
R.reverse([]);         //=> []

R.reverse('abc');      //=> 'cba'
R.reverse('ab');       //=> 'ba'
R.reverse('a');        //=> 'a'
R.reverse('');         //=> ''
var numbers = [1, 2, 3, 4];
var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()

R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
R.sequence(R.of, Nothing());       //=> [Nothing()]
var xLens = R.lensProp('x');

R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
R.slice(0, 3, 'ramda');                     //=> 'ram'
var diff = function(a, b) { return a - b; };
R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
var sortByFirstItem = R.sortBy(R.prop(0));
var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
var pairs = [[-1, 1], [-2, 2], [-3, 3]];
sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
var alice = {
  name: 'ALICE',
  age: 101
};
var bob = {
  name: 'Bob',
  age: -10
};
var clara = {
  name: 'clara',
  age: 314.159
};
var people = [clara, bob, alice];
sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
var alice = {
  name: 'alice',
  age: 40
};
var bob = {
  name: 'bob',
  age: 30
};
var clara = {
  name: 'clara',
  age: 40
};
var people = [clara, bob, alice];
var ageNameSort = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name'))
]);
ageNameSort(people); //=> [alice, clara, bob]
var pathComponents = R.split('/');
R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']

R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
R.splitAt(5, 'hello world');      //=> ['hello', ' world']
R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
R.startsWith('a', 'abc')                //=> true
R.startsWith('b', 'abc')                //=> false
R.startsWith(['a'], ['a', 'b', 'c'])    //=> true
R.startsWith(['b'], ['a', 'b', 'c'])    //=> false
R.subtract(10, 8); //=> 2

var minus5 = R.subtract(R.__, 5);
minus5(17); //=> 12

var complementaryAngle = R.subtract(90);
complementaryAngle(30); //=> 60
complementaryAngle(72); //=> 18
R.sum([2,4,6,8,100,1]); //=> 121
R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
var eqA = R.eqBy(R.prop('a'));
var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
R.T(); //=> true
R.tail([1, 2, 3]);  //=> [2, 3]
R.tail([1, 2]);     //=> [2]
R.tail([1]);        //=> []
R.tail([]);         //=> []

R.tail('abc');  //=> 'bc'
R.tail('ab');   //=> 'b'
R.tail('a');    //=> ''
R.tail('');     //=> ''
R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.take(3, 'ramda');               //=> 'ram'

var personnel = [
  'Dave Brubeck',
  'Paul Desmond',
  'Eugene Wright',
  'Joe Morello',
  'Gerry Mulligan',
  'Bob Bates',
  'Joe Dodge',
  'Ron Crotty'
];

var takeFive = R.take(5);
takeFive(personnel);
//=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
R.takeLast(3, 'ramda');               //=> 'mda'
var isNotOne = x => x !== 1;

R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]

R.takeLastWhile(x => x !== 'R' , 'Ramda'); //=> 'amda'
var isNotFour = x => x !== 4;

R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]

R.takeWhile(x => x !== 'd' , 'Ramda'); //=> 'Ram'
var sayX = x => console.log('x is ' + x);
R.tap(sayX, 100); //=> 100
// logs 'x is 100'
R.test(/^x/, 'xyz'); //=> true
R.test(/^y/, 'xyz'); //=> false
R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
R.toLower('XYZ'); //=> 'xyz'
R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
R.toString(42); //=> '42'
R.toString('abc'); //=> '"abc"'
R.toString([1, 2, 3]); //=> '[1, 2, 3]'
R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
R.toUpper('abc'); //=> 'ABC'
var numbers = [1, 2, 3, 4];
var transducer = R.compose(R.map(R.add(1)), R.take(2));
R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]

var isOdd = (x) => x % 2 === 1;
var firstOddTransducer = R.compose(R.filter(isOdd), R.take(1));
R.transduce(firstOddTransducer, R.flip(R.append), [], R.range(0, 100)); //=> [1]
R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]

// If some of the rows are shorter than the following rows, their elements are skipped:
R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
// Returns `Nothing` if the given divisor is `0`
safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)

R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
R.tryCatch(R.prop('x'), R.F)(null);      //=> false
R.type({}); //=> "Object"
R.type(1); //=> "Number"
R.type(false); //=> "Boolean"
R.type('s'); //=> "String"
R.type(null); //=> "Null"
R.type([]); //=> "Array"
R.type(/[A-z]/); //=> "RegExp"
R.type(() => {}); //=> "Function"
R.type(undefined); //=> "Undefined"
R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
var takesTwoArgs = function(a, b) {
  return [a, b];
};
takesTwoArgs.length; //=> 2
takesTwoArgs(1, 2); //=> [1, 2]

var takesOneArg = R.unary(takesTwoArgs);
takesOneArg.length; //=> 1
// Only 1 argument is passed to the wrapped function
takesOneArg(1, 2); //=> [1, undefined]
var addFour = a => b => c => d => a + b + c + d;

var uncurriedAddFour = R.uncurryN(4, addFour);
uncurriedAddFour(1, 2, 3, 4); //=> 10
var f = n => n > 50 ? false : [-n, n + 10];
R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
var l1 = [{a: 1}, {a: 2}];
var l2 = [{a: 1}, {a: 4}];
R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
R.uniq([1, 1, 2, 1]); //=> [1, 2]
R.uniq([1, '1']);     //=> [1, '1']
R.uniq([[42], [42]]); //=> [[42]]
R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
var strEq = R.eqBy(String);
R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
R.uniqWith(strEq)([{}, {}]);       //=> [{}]
R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
let safeInc = R.unless(R.isNil, R.inc);
safeInc(null); //=> null
safeInc(1); //=> 2
R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
var F = function() { this.x = 'X'; };
F.prototype.y = 'Y';
var f = new F();
R.valuesIn(f); //=> ['X', 'Y']
var xLens = R.lensProp('x');

R.view(xLens, {x: 1, y: 2});  //=> 1
R.view(xLens, {x: 4, y: 2});  //=> 4
// truncate :: String -> String
var truncate = R.when(
  R.propSatisfies(R.gt(R.__, 10), 'length'),
  R.pipe(R.take(10), R.append('…'), R.join(''))
);
truncate('12345');         //=> '12345'
truncate('0123456789ABC'); //=> '0123456789…'
// pred :: Object -> Boolean
var pred = R.where({
  a: R.equals('foo'),
  b: R.complement(R.equals('bar')),
  x: R.gt(R.__, 10),
  y: R.lt(R.__, 20)
});

pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
// pred :: Object -> Boolean
var pred = R.whereEq({a: 1, b: 2});

pred({a: 1});              //=> false
pred({a: 1, b: 2});        //=> true
pred({a: 1, b: 2, c: 3});  //=> true
pred({a: 1, b: 1});        //=> false
R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
var f = (x, y) => {
  // ...
};
R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
//=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
