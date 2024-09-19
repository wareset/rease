/* eslint-disable */
import{_cssInit as t,_cssProperties as e}from"@rease/css";export*from"@rease/css";import{listen as n}from"@rease/listen";export*from"@rease/listen";import{isSignal as r,signal as i,batch as s}from"@rease/signal";export*from"@rease/signal";export*from"@rease/tween";function a(t){return"string"==typeof t}function c(t){return"function"==typeof t}function o(t){return null!=t&&"function"==typeof t.then}function h(t){return null!=t&&"function"==typeof t.catch}function l(t){return null!=t&&"function"==typeof t.subscribe}function u(){}var f=Array,d=f.isArray;function v(t,e,n){var r=u;return t.then((function(t){r&&(r(),r=e?p(t,e,(e=null,n)):null)})),function(){r&&(r(),r=e=null)}}function p(t,e,n){return o(t)?v(t,e,n):(e.call(n,t),u)}function b(t){this[0][this[1]]=t,(this[3][0]<1||this[2]&&(this[2]=!1,--this[3][0]<1))&&this[4].call(this[5],this[0])}function m(t,e,n){var r=t.length;if(r>0){for(var i=[],s=[t.length],a=f(r),c=0;c<r;c++)a[c]=p(t[c],b,[i,c,!0,s,e,n]);return function(){for(;a.length>0;)a.pop()()}}return e.call(n,[]),u}function _(t){if(this.a){this.v=t;for(var e,n=this.a,r=0;r<n.length;r++)(e=n[r])[0](e[1].call(this.c,t));this.b=!0}}function g(t,e){var n={b:!1,v:null,c:e,a:[]},r=u;function i(){r&&(r(),n.a=r=null)}return t.call(e,(function(t){r&&(r(),r=p(t,_,n))})),i.then=function(t){return g((function(e){n.a&&t&&(n.a.push([e,t]),n.b&&e(t.call(this,n.v)))}),e)},i}function x(t,e){return function(n,r,i){var s;r||(r=u);var a=g((function(e){s=t((function(){e(r())}),0|n)}),i),c=function(){a&&(a(),e(s),a=null)};return c.then=a.then,c}}var R=x(setTimeout,clearTimeout),y=x(setInterval,clearInterval);function w(t){return{subscribe:(e,n)=>v(t,e,n)}}function k(t){if(t!==this){var e=this.s._.p;e&&e.c===this?(e.f=this.f,e.c=this.c):console.error("rease: signal fix error"),this.f.call(this.c,t)}}function C(t,e){var n=u,r=t.subscribe((function(t){n(),n=u,l(t)||o(t)&&(t=w(t),1)?n=C(t,e):e.s.set(t)}));return function(){n(),r.unsubscribe?r.unsubscribe():r(),n=r=u}}function O(t){s(this.f,this.c,[t])}function N(t,e,n){if(r(t))return t.subscribe(e,n);if(l(t)){var a={f:e,c:n,s:null};a.s=i(a);var c=t.subscribe((function(t){a.s.set(t)})),h=a.s.subscribe(k,a);return function(){h(),c.unsubscribe?c.unsubscribe():c(),h=c=u}}return o(t)?v(t,O,{f:e,c:n}):(s(e,n,[t]),u)}function A(t,e,n){if(l(t)||o(t)&&(t=w(t),1)){var r={f:e,c:n,s:null};r.s=i(r);var a=C(t,r),c=r.s.subscribe(k,r);return function(){c(),a(),c=a=u}}return s(e,n,[t]),u}function E(t){var e=this.d;e.v[this.i]=t,e.l<1?e.s&&e.s.set(e.v.slice()):this.f&&(this.f=!1,--e.l<1)&&(e.s?(e.s.set(e.v.slice()),e.u.push(e.s.subscribe(e.f,e.c))):e.f.call(e.c,e.v))}function I(t,e,n,r,s){for(var a=n.length,c={l:a,v:f(a),u:t,s:null,f:r,c:s},o=0;o<a;o++)(t[o]=e(n[o],E,{d:c,i:o,f:!0}))===u||c.s||(c.s=i(t))}function D(t){return function(e,n,r){var i=e.length;if(i>0){var a=f(i);return s(I,void 0,[a,t,e,n,r]),function(){for(;a.length>0;)a.pop()()}}return s(n,r,[[]]),u}}var P=D(N),S=D(A),$=Object,F=$.getPrototypeOf,T=$.keys,M=$.getOwnPropertyDescriptor,j=$.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},L=$.prototype.hasOwnProperty,J=$.hasOwn||function(t,e){return L.call(t,e)};class W{constructor(t,e){this.c=t,this.p=e}}function q(){var t={p:null,n:null};return t.p=t.n=t}function B(t,e,n){var r={p:null,n:null,f:e,c:n};return(r.p=(r.n=t).p).n=r.n.p=r,function(){r&&(r.p.n=r.n,r.n.p=r.p,r.f=u,r=null)}}function U(t){(this.d.f=this.f).call(this.d.c=this.c,t),nt(this.r)}function Z(t){this.f.call(this.c,t)}function z(t,e,n,r,i){var s=u;if(t._.a0){t._.$1++;var a={f:U,c:{r:t,d:null,f:r||u,c:i}};a.c.d=a;var c=e(n,Z,a);if(c!==u){var o=u;s=function(){s!==u&&(s=u,o(),c(),a.f===U&&(a.f=u,nt(t)))},o=t.onDestroy(s)}}return s}function G(t){this.r&&(this.f.call(this.c,t),nt(this.r),this.r=null)}function H(t,e,n,r,i){var s=u;if(t._.a0){t._.$1++;var a={r:t,f:r||u,c:i},c=e(n,G,a);c!==u&&(s=function(){s!==u&&(s=u,c(),a.r&&(nt(a.r),a.r=null))})}return s}function K(t,e){if(e>-1){t.children.splice(e,1);for(var n,r=t._.in,i=r.length;i--;)(n=r[i]).i>e&&n.i--}}var Q,V=null;function X(t){var e=V,n=Q;if(V=null,Q=NaN,e){e._.$1++,t.root=e.root,t.parent=e;var r=e.children;n===+n&&n<r.length?((n|=0)<0&&(n=0),(t.prev=(t.next=r[n]).prev)&&(t.prev.next=t),r.splice(n,0,t),t.next.prev=t):(t.next=null,(n=r.push(t)-1)?(t.prev=r[n-1]).next=t:t.prev=null);for(var i,s=e._.in,a=s.length;a--;)(i=s[a]).i<n||i.i++}else t.root=t,t.parent=t.prev=t.next=null}function Y(t,e,n,r){if(void 0!==n){var i=t._;if(d(n))for(var s=0;s<n.length&&i.a0;s++)Y(t,e,n[s],r);else i.a0&&(n instanceof Rease?n._.a0&&(e.push(n),n.move(t,r.i)):e.push(function(t,e,n){var r,i;if(t instanceof W){var s=t;r=s.c,i=s.p}else c(t)?(r=t,i={}):(r=RText,i={data:t});for(var a,h=!1,l=r;l&&(l!==ct&&!(h=l===Rease));l=F(l));V=e,Q=n,h?(a=new r(i)).init():((a=new Rease)._name=r.name,a._ctor=r,o(t=r.call(a,i))?v(t,at,a):at.call(a,t));return a}(n,t,r.i)))}}function tt(){--this._.$2<1&&(this._.$2=NaN,this.parent&&nt(this.parent))}function et(t,e,n){o(e=e.call(n,t))&&t._.a0&&(t._.$2++,v(e,tt,t))}function nt(t){--t._.$1<1&&(t._.$1=NaN,function(t){var e=t._,n=e.c2;if(n){e.c2=null;for(var r=n;(r=r.n)!==n&&e.a0;)et(t,r.f,r.c);tt.call(t)}}(t))}function rt(t,e,n,r){for(var i,s=t._,a=[s.m2,s.m1],c=2;c-- >0;)if(i=a[c])for(var o=i;(o=o.n)!==i&&s.a0;)o.f.call(o.c,e,n,r);var h=s.in,l={i:0};h.push(l);for(var u=t.children;l.i<u.length;l.i++)rt(u[l.i],e,n,r);h.splice(h.lastIndexOf(l),1)}function it(t,e){for(var n=e;(n=n.n)!==e;)n.f.call(n.c,t)}function st(t,e,n){if(t)for(var r=t,i=e._;(r=r.n)!==t&&i.a0;)r.f.call(r.c,e,n)}function at(t){this.insert(t),this.init()}var ct=Function.prototype;function ot(t,e){return"number"==typeof t&&t<=e?(t|=0)<0&&(t=e+t-1)<0?0:t:e}class Rease{constructor(){this._name=this.constructor.name,this._ctor=this.constructor,this.inited=!1,this.destroyed=!1,this.children=[],this._={a0:!0,c1:!1,$1:1,$2:1,in:[],oc:{},on:{}},X(this)}init(){this._.c1||(this._.c1=this.inited=!0,nt(this))}insert(t,e){var n=[];if(this._.a0&&void 0!==t){var r=this._.in,i={i:ot(e,this.children.length)};r.push(i),Y(this,n,t,i),r.splice(r.lastIndexOf(i),1)}return n}splice(t,e,n){if(this._.a0&&(void 0!==n||e)){var r=this._.in,i={i:t};r.push(i);for(var s=this.children.slice(t|=0,e+t),a=s.length;a-- >0;)s[a].destroy();return this.insert(n,r.splice(r.lastIndexOf(i),1)[0].i)}return[]}destroy(){var t=this._;if(t.a0){var e=t.$2;t.a0=!1,t.c2&&(t.c2=null),t.$1=t.$2=NaN,this.destroyed=!0,t.d1&&(it(this,t.d1),t.d1=null),this.destroyChildren();var n=this.parent,r=this.prev,i=this.next;this.parent=this.prev=this.next=null,r&&(r.next=i),i&&(i.prev=r),n&&K(n,n.children.lastIndexOf(this)),t.d2&&(it(this,t.d2),t.d2=null),e&&n&&nt(n)}}destroyChildren(){for(var t=this.children.slice(),e=t.length;e-- >0;)t[e].destroy()}move(t,e){if(this._.a0&&(t?t._.a0:this.parent)){var n=this.parent,r=this.prev,i=this.next;if(e=t?ot(e,t.children.length):0,n){var s=n.children.indexOf(this);if(n===t){var a=n.children.length;if(e<a||(e=a-1),e===s)return!1}K(n,s)}r&&(r.next=i),i&&(i.prev=r),V=t,Q=e,X(this),this._.$1++;var c=this._.$2;return rt(this,this,n,t),this.init(),nt(this),n===t?t&&nt(t):(c&&n&&nt(n),c||t&&nt(t)),!0}return!1}on(t,e,n,r){var i=this._;return i.a0?B((r=r?i.oc:i.on)[t]||(r[t]=q()),e,n):u}emit(t,e,n){var r=this._;null!=n?st((n?r.oc:r.on)[t],this,e):(st(r.oc[t],this,e),st(r.on[t],this,e))}emitDeep(t,e){var n=this._;st(n.oc[t],this,e),this.notifyChildren(t,e),st(n.on[t],this,e)}notifyParents(t,e){for(var n=this;n=n.parent;)n.emit(t,e)}notifyChildren(t,e){var n=this._.in,r={i:0};n.push(r);for(var i=this.children;r.i<i.length;r.i++)i[r.i].emitDeep(t,e);n.splice(n.lastIndexOf(r),1)}onMoveCapture(t,e){var n=this._;return n.a0?B(n.m1||(n.m1=q()),t,e):u}onMove(t,e){var n=this._;return n.a0?B(n.m2||(n.m2=q()),t,e):u}onReady(t,e){var n=this._;return n.a0?null!==n.c2?B(n.c2||(n.c2=q()),t,e):(n.$2?et(this,t,e):t.call(e,this),u):u}onDestroyCapture(t,e){var n=this._;return null!==n.d1?B(n.d1||(n.d1=q()),t,e):(t.call(e,this),u)}onDestroy(t,e){var n=this._;return null!==n.d2?B(n.d2||(n.d2=q()),t,e):(t.call(e,this),u)}await(t,e,n){return H(this,p,t,e,n)}awaitAll(t,e,n){return H(this,m,t,e,n)}watch(t,e,n){return z(this,N,t,e,n)}watchDeep(t,e,n){return z(this,A,t,e,n)}watchAll(t,e,n){return z(this,P,t,e,n)}watchDeepAll(t,e,n){return z(this,S,t,e,n)}findParent(t){for(var e=d(t),n=this;n=n.parent;)if(ht(e,n,t))return n}findFirstChild(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this.children,c=0,o=a.length;c<o;c++)if(ht(i,r=a[c],t)||e&&(!n||!ht(s,r,n))&&(r=r.findFirstChild(t,e,n)))return r}findLastChild(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this.children,c=a.length;c-- >0;)if(ht(i,r=a[c],t)||e&&(!n||!ht(s,r,n))&&(r=r.findLastChild(t,e,n)))return r}findPrevSibling(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this;a=a.prev;)if(ht(i,r=a,t)||e&&(!n||!ht(s,r,n))&&(r=a.findLastChild(t,e,n)))return r}findNextSibling(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this;a=a.next;)if(ht(i,r=a,t)||e&&(!n||!ht(s,r,n))&&(r=a.findFirstChild(t,e,n)))return r}findParentOrPrev(t,e){var n=this.findPrevSibling(e,!0,t);if(n)return{prev:n};for(var r,i=d(t),s=d(e),a=this;r=a,a=a.parent;){for(var c=a.children,o=c.indexOf(r);o-- >0;)if(ht(s,n=c[o],e)||!ht(i,n,t)&&(n=n.findLastChild(e,!0,t)))return{prev:n};if(ht(i,a,t))return{parent:a}}return{}}findParentOrNext(t,e){var n=this.findNextSibling(e,!0,t);if(n)return{next:n};for(var r,i=d(t),s=d(e),a=this;r=a,a=a.parent;){for(var c=a.children,o=c.lastIndexOf(r),h=c.length;++o<h;)if(ht(s,n=c[o],e)||!ht(i,n,t)&&(n=n.findFirstChild(e,!0,t)))return{next:n};if(ht(i,a,t))return{parent:a}}return{}}}function ht(t,e,n){if(t){for(var r=n.length;r--;)if(e._ctor===n||e instanceof n[r])return!0;return!1}return e._ctor===n||e instanceof n}function lt(t,e,...n){if(e||(e={}),n.length&&(e.children=n.length>1?n:n[0]),a(t))switch(t){case"r-text":t=RText;break;case"r-element":t=RElement;break;case"r-fragment":t=RFragment;break;case"r-watch":t=RWatch;break;case"r-if":t=RIf;break;case"r-else-if":t=RElseIf;break;case"r-else":t=RElse;break;case"r-switch":t=RSwitch;break;case"r-case":t=RCase;break;case"r-await":t=RAwait;break;case"r-then":t=RThen;break;case"r-catch":t=RCatch;break;case"r-for-in":t=RForIn;break;case"r-for-of":t=RForOf;break;case"r-move":t=RMove;break;default:e.node=t,t=RElement}return new W(t,e)}function ut(t,e){var n=new RElement({node:t});return n.insert(e),n.init(),n}function ft(t,e,n,r){t.destroyed||t.insert(c(e)?e.call(n,r):e)}class RAwait extends Rease{constructor({is:t,context:e,children:n}){super();var r=this,i=o(t);if(i){function s(){i=!1,r.destroyChildren()}h(t=t.then(s))&&t.catch(s),i&&ft(r,n,e,t)}}}class RThen extends Rease{constructor({is:t,context:e,children:n}){super();var r=this;function i(t){ft(r,n,e,t)}o(t)?h(t=t.then(i))&&t.catch(u):i(t)}}class RCatch extends Rease{constructor({is:t,context:e,children:n}){super();var r=this;h(t)&&t.catch((function(t){ft(r,n,e,t)}))}}function dt(t){var e=this[0],n=this[1],r=this[2],i={};if(this[2]=i,t=t[0]){var s,a,c=e.children,o=0;for(var h in t){if(e.destroyed)return;J(t,h)&&(s=t[h],J(r,h)&&j((a=r[h])[0],s)?(s=(i[h]=a)[1],delete r[h]):i[h]=[s,s=e.insert(n(s,h,t),o)],s.length&&(s=c.lastIndexOf(s[s.length-1]))>-1&&(o=s+1))}for(var l=T(r),u=l.length;u-- >0;)for(var f=r[l[u]][1],d=f.length;d-- >0;)f[d].destroy()}else e.destroyChildren()}class RForIn extends Rease{constructor({is:t,watch:e,children:n}){super(),this.watchDeepAll([t,e],dt,[this,n,{}])}}function vt(t,e,n){for(var r=n,i=t.length;r<i;r++)if(j(t[r],e))return r;return-1}function pt(t){var e=this[0],n=this[1],r=this[2],i=this[3],s=[],a=[];if(this[2]=s,this[3]=a,t=t[0]){var c,o,h=e.children,l=0,u=0;for(var f in t){if(e.destroyed)return;J(t,f)&&(s.push(o=t[f]),(c=vt(r,o,u))>-1?(a.push(o=i[c]),i[c]=i,u=c+1):a.push(o=e.insert(n(o,""+(c=+f)===f?c:f,t),l)),o.length&&(o=h.lastIndexOf(o[o.length-1]))>-1&&(l=o+1))}for(var d,v=i.length;v-- >0;)if((d=i[v])!==i)for(var p=d.length;p-- >0;)d[p].destroy()}else e.destroyChildren()}class RForOf extends Rease{constructor({is:t,watch:e,children:n}){super(),this.watchDeepAll([t,e],pt,[this,n,[],[]])}}class RFragment extends Rease{constructor({children:t}){super(),this.insert(t)}}var bt="http://www.w3.org/",mt={svg:bt+"2000/svg",math:bt+"1998/Math/MathML",xlink:bt+"1999/xlink"};var _t=function(){function r(t){switch(typeof t){case"string":return t;case"object":var e=[];if(d(t))for(var n,i=0;i<t.length;i++)(n=r(t[i]))&&e.push(n);else if(t)for(var s in t)t[s]&&e.push(s);return e.join(" ");default:return""}}var i=/([A-Z])/g,s={},a=function(n){return t(),(a=function(t){return J(e,t=J(s,t)?s[t]:s[t]=t.replace(i,"-$1").toLowerCase())?e[t]:t})(n)};function c(t){switch(typeof t){case"string":return t;case"object":var e=[];if(d(t))for(var n,r=0;r<t.length;r++)(n=c(t[r]))&&e.push(";"===n[n.length-1]?n.slice(0,-1):n);else if(t)for(var i in t)null!=t[i]&&e.push(a(i)+":"+t[i]);return e.join(";");default:return""}}function o(t){return t==t&&""!==t&&("string"===(t=typeof t)||"number"===t||"boolean"===t)}function h(t,e,n){t.classList[n?"add":"remove"](e)}function l(t,e,n){t.style[o(n)?"setProperty":"removeProperty"](e,n,"important")}function f(t,e,n){t[o(n)?"setAttribute":"removeAttribute"](e,n)}function v(t){var e=this.r,n=e.node,i=e._attrs,s=e._class,a=this.k;if(i[a]=t=r(t),n&&(f(n,a,t),s))for(var c in s)h(n,c,s[c])}function p(t){var e=this.r,n=e.node,r=e._attrs,i=e._style,s=this.k;if(r[s]=t=c(t),n&&(f(n,s,t),i))for(var a in i)l(n,a,i[a])}var b=/^on-./;function m(t){var e=this.k,r=this.r,i=this.n,s=r.node,a=r._unevt;a[null==i?this.n=a.length:(a[i](),i)]=s&&t?n(s,e,(function(e){t.call(r,e)})):u}var _=/^class-./;function g(t){var e=this.r,n=e.node,r=e._class,i=this.k;r[i]=t,n&&h(n,i,t)}var x=/^style-./;function R(t){var e=this.r,n=e.node,r=e._style,i=this.k;r[i]=t,n&&l(n,i,t)}var y=/^xlink-./;function w(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&n[o(t)?"setAttributeNS":"removeAttributeNS"](mt.xlink,i,t)}function k(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&(i in n&&function(t,e,n){if(!J(t=C[t]||(C[t]={}),e)){for(var r;(n=F(n))&&!(r=M(n,e)););t[e]=r&&r.set}return t[e]}(n.localName,i,n)?n[i]=t:f(n,i,t))}var C={};function O(t,e){return"-"===t[e]?t.slice(e+1):t[e].toLowerCase()+t.slice(e+1)}function N(t){for(var e=t._unevt;e.length>0;)e.pop()()}return function(t,e,n){var r="style"===n?p:"class"===n||"className"===n&&(n="class")?v:b.test(n)?(n=O(n,2),"_unevt"in t||(t._unevt=[],t.onDestroy(N)),m):_.test(n)?(n=O(n,5),"_class"in t||(t._class={}),g):x.test(n)?(n=a(O(n,5)),"_style"in t||(t._style={}),R):y.test(n)?(n="xlink:"+O(n,5),w):k;t.watchDeep(e,r,{r:t,k:n})}}();function gt(){return null}var xt=function(){return{}},Rt=gt,yt=gt,wt=u,kt=u,Ct=u,Ot={};function Nt(t){var e=this.node;if(e){if(this!==t)for(var n=this;n=n.parent;){if(n instanceof RElement)return;if(n===t)break}var r=xt(this),i=r.p,s=r.b;i?wt(e,i,s):kt(this)}}function At(t){this._data=t=void 0===t?"":""+t,this.node&&(this.node.textContent=t)}class RText extends Rease{constructor({data:t}){super(),t&&(t.subscribe||t.then)?(this._data="",this.watchDeep(t,At,this)):this._data=void 0===t?"":""+t;var e=xt(this),n=e.p,r=e.b;(this.node=Rt(this._data,n,r))&&(wt(this.node,n,r),this.onMove(Nt,this),this.onDestroy(kt))}}class RElement extends Rease{constructor({children:t,node:e,...n}){var r;super();var i=u;switch(a(e)?(r=e,e=null):r=e?e.localName:"",this.name=r||(r="template")){case"html":this.node=e||Ot.documentElement;break;case"head":this.node=e||Ot.head;break;case"body":this.node=e||Ot.body;break;default:var s=xt(this),c=s.p,o=s.b;(this.node=e||(e=yt(r,c,o)))&&(wt(e,c,o),this.onMove(Nt,this),this.onDestroy(kt),i=Ct)}for(var h in this._attrs={},n){if(this.destroyed)break;_t(this,n[h],h)}this.insert(t),i(this)}}if("undefined"!=typeof document){Ot=document;var Et="_rease_relement_or_rtext",It={style:1,script:1};function Zt(t){t.parentNode&&t.parentNode.removeChild(t)}var Dt=[RElement,RText];function zt(t,e){return Ot.createElementNS(mt.hasOwnProperty(t)?mt[t]:(e&&"foreignObject"!==e.localName?e:Ot.documentElement).namespaceURI,t)}xt=function(t){var e=t.findParentOrPrev(RElement,Dt),n=e.parent,r=e.prev,i=r&&r.node;return{p:i&&i.parentElement||n&&n.node,b:i}},Rt=function(t,e,n){return(n=n?n.nextSibling:e&&e.firstChild)&&(3!==n.nodeType||Et in n||Zt(n)),(n=zt("font",e)).style.verticalAlign="inherit",n.textContent=t,n},yt=function(t,e,n){if(t){if(n=n?n.nextSibling:e&&e.firstChild)for(var r;n&&!(Et in n);)if(r=n,n=n.nextSibling,1!==r.nodeType)Zt(r);else{if(r.localName===t){for(var i=r.attributes,s=i.length;s-- >0;)r.removeAttribute(i[s].name);return r}if(!It.hasOwnProperty(r.localName))break}return zt(t,e)}return null},wt=function(t,e,n){t[Et]=!0,e&&e.insertBefore(t,(n?n.nextSibling:e.firstChild)||null)},kt=function(t){var e=t.node;e&&Zt(e)},Ct=function(t){var e=t.node;if(e)for(var n=e.childNodes,r=n.length;r-- >0&&!(Et in(e=n[r]));)1===e.nodeType&&It.hasOwnProperty(e.localName)||Zt(e)}}function Pt(t){this.b!==(this.b=t.every((function(t,e){return e>0?!t:t})))&&(this.b?this.r.insert(c(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function St(t,e,n,r){t.watchDeepAll(r,Pt,{r:t,t:e,b:!1,c:n})}function $t(t,e,n,r){var i=t.findPrevSibling(Ft);St(t,n,r,t._is=i?[e].concat(i._is):[e])}class Ft extends Rease{move(){throw new Error("RIf, RElseIf and RElse is not move")}}class RIf extends Ft{constructor({is:t,context:e,children:n}){super(),St(this,e,n,this._is=[t])}}class RElseIf extends Ft{constructor({is:t,context:e,children:n}){super(),$t(this,t,e,n)}}class RElse extends Ft{constructor({context:t,children:e}){super(),$t(this,!0,t,e)}}function Tt(t){var e=t[0],n=t[1];e||(e=this.p),this.r.move(e,n),void 0===this.c||this.r.insert(this.c,this.c=void 0)}class RMove extends Rease{constructor({to:t,index:e,children:n}){super(),this.watchDeepAll([t,e],Tt,{r:this,p:this.parent,c:n})}}class RSwitch extends Rease{constructor({is:t,children:e}){super(),this._is=t,this.insert(e)}}function Mt(t){this.i=!0,this.b!==(this.b=j(t[0],t[1]))&&(this.b?this.r.insert(c(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function jt(){var t=this._is,e=this._ctx,n=this.findParent(RSwitch);n!==this._switch&&(this._switch=n,e.i=!1,e.u(),n&&(e.u=this.watchDeepAll([n._is,t],Mt,e)),!e.i&&e.b&&(e.b=!1,this.destroyChildren()))}class RCase extends Rease{constructor({is:t,context:e,children:n}){super(),this._is=t,this._ctx={r:this,t:e,b:!1,c:n,i:!1,u:u},this.onMove(jt,this),jt.call(this)}}function Lt(t){var e=this.r,n=this.t,r=this.c;e.destroyChildren(),e.destroyed||e.insert(c(r)?r.call(n,t):r)}class RWatch extends Rease{constructor({is:t,context:e,children:n}){super(),this[d(t)?"watchDeepAll":"watchDeep"](t,Lt,{r:this,t:e,c:n})}}function Jt(t,e){var n;if(null==t)n=Math.random();else for(var r,i=1/(n=.9973),s=(t+="").length,a=e&&s/99>>>1||1,c=0;c<s;c+=a)13===(r=t.charCodeAt(c))?c-=a-1:(n+=r*n*997.3/(r+n)+i)>0&&(n-=0|n);return(5e16*n+4e16).toString(36)}var Wt,qt={embed:1,iframe:1,object:1,portal:1,svg:1,math:1,canvas:1,script:1,button:1,datalist:1,input:1,meter:1,optgroup:1,option:1,progress:1,select:1,textarea:1,slot:1,template:1},Bt=(Wt=/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/,function(t){return Wt.test(t)});function Ut(t){var e=[];if(t instanceof RText)e.push(t._data.replace(/["'&<>]/g,(function(t){switch(t){case'"':t="&quot;";break;case"'":t="&#39;";break;case"&":t="&amp;";break;case"<":t="&lt;";break;case">":t="&gt;"}return t})));else if(t instanceof RElement){var n=t.name;if(n&&!qt.hasOwnProperty(n)){var r,i,s=t._class,a=t._style,c=t._attrs,o=[],h=[],l=[];if(s)for(r in s)s[r]&&o.push(r);if(a)for(r in a)(i=a[r])&&h.push(r,":",i,";");if(c)for(r in c)if(i=c[r])switch(r){case"class":o.push(i);break;case"style":h.push(i);break;default:l.push(" ",r,"=",JSON.stringify(""+i))}if(o.length&&l.push(" class=",JSON.stringify(o.join(" "))),h.length&&l.push(" style=",JSON.stringify(h.join(""))),e.push("<",n,l.join("")),Bt(n))e.push("/>");else{e.push(">");for(var u=t.children,f=0;f<u.length;f++)e.push(Ut(u[f]));e.push("</",n,">")}}}else for(var d=t.children,v=0;v<d.length;v++)e.push(Ut(d[v]));return e.join("")}export{RAwait,RCase,RCatch,RElement,RElse,RElseIf,RForIn,RForOf,RFragment,RIf,RMove,RSwitch,RText,RThen,RWatch,Rease,lt as createElement,lt as h,Jt as hash,y as interval,h as isCatchable,c as isFunction,a as isString,l as isSubscribable,o as isThenable,ut as render,v as then,p as thenSafe,m as thenSafeAll,g as thenable,R as timeout,Ut as toHTMLString,N as watch,P as watchAll,A as watchDeep,S as watchDeepAll};
