/* eslint-disable */
import{_cssInit as t,_cssProperties as e}from"@rease/css";export*from"@rease/css";import{listen as n}from"@rease/listen";export*from"@rease/listen";import{isSignal as r,signal as i,batch as s}from"@rease/signal";export*from"@rease/signal";export*from"@rease/tween";function a(t){return"string"==typeof t}function c(t){return"function"==typeof t}function h(t){return null!=t&&"function"==typeof t.then}function o(t){return null!=t&&"function"==typeof t.catch}function l(t){return null!=t&&"function"==typeof t.subscribe}function u(){}var f=Array,d=f.isArray;function v(t,e,n){var r=u;return t.then((function(t){r&&(r(),r=e?p(t,e,(e=null,n)):null)})),function(){r&&(r(),r=e=null)}}function p(t,e,n){return h(t)?v(t,e,n):(e.call(n,t),u)}function b(t){this[0][this[1]]=t,(this[3][0]<1||this[2]&&(this[2]=!1,--this[3][0]<1))&&this[4].call(this[5],this[0])}function m(t,e,n){var r,i=t.length;if(i>0){for(var s=[],a=[t.length],c=f(i),h=0;h<i;h++)c[h]=p(t[h],b,[s,h,!0,a,e,n]);r=function(){for(;c.length>0;)c.pop()()}}else r=u,e.call(n,[]);return r}function _(t){if(this.a){this.v=t;for(var e,n=this.a,r=0;r<n.length;r++)(e=n[r])[0](e[1].call(this.c,t));this.b=!0}}function g(t,e){var n={b:!1,v:null,c:e,a:[]},r=u;function i(){r&&(r(),n.a=r=null)}return t.call(e,(function(t){r&&(r(),r=p(t,_,n))})),i.then=function(t){return g((function(e){n.a&&t&&(n.a.push([e,t]),n.b&&e(t.call(this,n.v)))}),e)},i}function x(t,e){return function(n,r,i){var s;r||(r=u);var a=g((function(e){s=t((function(){e(r())}),0|n)}),i),c=function(){a&&(a(),e(s),a=null)};return c.then=a.then,c}}var y=x(setTimeout,clearTimeout),R=x(setInterval,clearInterval);function w(t){return{subscribe:(e,n)=>v(t,e,n)}}function k(t){if(t!==this){var e=this.s._.p;e&&e.c===this?(e.f=this.f,e.c=this.c):console.error("rease: signal fix error"),this.f.call(this.c,t)}}function C(t,e){var n=u,r=t.subscribe((function(t){var r=n;n=u,r(),l(t)||h(t)&&(t=w(t),1)?n=C(t,e):e.s.set(t)}));return function(){var t=n,e=r;n=r=u,t(),e.unsubscribe?e.unsubscribe():e()}}function N(t){s(this.f,this.c,[t])}function O(t,e,n){var a;if(r(t))a=t.subscribe(e,n);else if(l(t)){var c={f:e,c:n,s:null};c.s=i(c);var o=t.subscribe((function(t){c.s.set(t)})),f=c.s.subscribe(k,c);a=function(){var t=f,e=o;f=o=u,t(),e.unsubscribe?e.unsubscribe():e()}}else h(t)?a=v(t,N,{f:e,c:n}):(a=u,s(e,n,[t]));return a}function E(t,e,n){var r;if(l(t)||h(t)&&(t=w(t),1)){var a={f:e,c:n,s:null};a.s=i(a);var c=C(t,a),o=a.s.subscribe(k,a);r=function(){var t=o,e=c;o=c=u,t(),e()}}else r=u,s(e,n,[t]);return r}function P(t){var e=this.d;e.v[this.i]=t,e.l<1?e.s.set(e.v.slice()):this.f&&(this.f=!1,--e.l<1)&&(e.s.set(e.v.slice()),e.u.push(e.s.subscribe(e.f,e.c)))}function A(t){return function(e,n,r){var a,c=e.length;if(c>0){for(var h=f(c),o={l:c,v:f(c),u:h,s:i(h),f:n,c:r},l=0;l<c;l++)h[l]=t(e[l],P,{d:o,i:l,f:!0});a=function(){for(;h.length>0;)h.pop()()}}else a=u,s(n,r,[[]]);return a}}var I=A(O),S=A(E);function D(t){t===this._||this.f.call(this.c,t)}function $(t){this.s.set(t)}class ReaseWatcher{constructor(t,e,n,r){this.deep=n,this.all=r,this._={v:t,s:null,w:e}}subscribe(t,e){var n=this._;return n.s||(n.s=i(n,{prepare:t=>(n.s=t,t.set(n),n.w(n.v,$,n))})),n.s.subscribe(D,{_:n,f:t,c:e})}toJSON(){}}function T(t){return new ReaseWatcher(t,O,!1,!1)}function F(t){return new ReaseWatcher(t,E,!0,!1)}function M(t){return new ReaseWatcher(t,I,!1,!0)}function j(t){return new ReaseWatcher(t,S,!0,!0)}var L=Object,W=L.getPrototypeOf,J=L.keys,q=L.getOwnPropertyDescriptor,B=L.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},U=L.prototype.hasOwnProperty,Z=L.hasOwn||function(t,e){return U.call(t,e)};class z{constructor(t,e){this.c=t,this.p=e}}function G(){var t={p:null,n:null};return t.p=t.n=t}function H(t,e,n){var r={p:null,n:null,f:e,c:n};return(r.p=(r.n=t).p).n=r.n.p=r,function(){r&&(r.p.n=r.n,r.n.p=r.p,r.f=u,r=null)}}function K(t){(this.d.f=this.f).call(this.d.c=this.c,t),ct(this.r)}function Q(t){this.f.call(this.c,t)}function V(t,e,n,r,i){var s=u;if(t._.a0){t._.$1++;var a={f:K,c:{r:t,d:null,f:r||u,c:i}};a.c.d=a;var c=e(n,Q,a);if(c!==u){var h=u;s=function(){s!==u&&(s=u,h(),c(),a.f===K&&(a.f=u,ct(t)))},h=t.onDestroy(s)}}return s}function X(t){this.r&&(this.f.call(this.c,t),ct(this.r),this.r=null)}function Y(t,e,n,r,i){var s=u;if(t._.a0){t._.$1++;var a={r:t,f:r||u,c:i},c=e(n,X,a);c!==u&&(s=function(){s!==u&&(s=u,c(),a.r&&(ct(a.r),a.r=null))})}return s}function tt(t,e){if(e>-1){t.children.splice(e,1);for(var n,r=t._.in,i=r.length;i--;)(n=r[i]).i>e&&n.i--}}var et,nt=null;function rt(t){var e=nt,n=et;if(nt=null,et=NaN,e){e._.$1++,t.root=e.root,t.parent=e;var r=e.children;n===+n&&n<r.length?((n|=0)<0&&(n=0),(t.prev=(t.next=r[n]).prev)&&(t.prev.next=t),r.splice(n,0,t),t.next.prev=t):(t.next=null,(n=r.push(t)-1)?(t.prev=r[n-1]).next=t:t.prev=null);for(var i,s=e._.in,a=s.length;a--;)(i=s[a]).i<n||i.i++}else t.root=t,t.parent=t.prev=t.next=null}function it(t,e,n,r){if(void 0!==n){var i=t._;if(d(n))for(var s=0;s<n.length&&i.a0;s++)it(t,e,n[s],r);else i.a0&&(n instanceof Rease?n._.a0&&(e.push(n),n.move(t,r.i)):e.push(function(t,e,n){var r,i;if(t instanceof z){var s=t;r=s.c,i=s.p}else c(t)?(r=t,i={}):(r=RText,i={this:t});for(var a,o=!1,l=r;l&&(l!==ft&&!(o=l===Rease));l=W(l));nt=e,et=n,o?(a=new r(i)).init():((a=new Rease)._name=r.name,a._ctor=r,h(t=r.call(a,i))?v(t,ut,a):ut.call(a,t));return a}(n,t,r.i)))}}function st(){--this._.$2<1&&(this._.$2=NaN,this.parent&&ct(this.parent))}function at(t,e,n){h(e=e.call(n,t))&&t._.a0&&(t._.$2++,v(e,st,t))}function ct(t){--t._.$1<1&&(t._.$1=NaN,function(t){var e=t._,n=e.c2;if(n){e.c2=null;for(var r=n;(r=r.n)!==n&&e.a0;)at(t,r.f,r.c);st.call(t)}}(t))}function ht(t,e,n,r){for(var i,s=t._,a=[s.m2,s.m1],c=2;c-- >0;)if(i=a[c])for(var h=i;(h=h.n)!==i&&s.a0;)h.f.call(h.c,e,n,r);var o=s.in,l={i:0};o.push(l);for(var u=t.children;l.i<u.length;l.i++)ht(u[l.i],e,n,r);o.splice(o.lastIndexOf(l),1)}function ot(t,e){for(var n=e;(n=n.n)!==e;)n.f.call(n.c,t)}function lt(t,e,n){if(t)for(var r=t,i=e._;(r=r.n)!==t&&i.a0;)r.f.call(r.c,n)}function ut(t){this.insert(t),this.init()}var ft=Function.prototype;function dt(t,e){return"number"==typeof t&&t<=e?(t|=0)<0&&(t=e+t-1)<0?0:t:e}class Rease{constructor(){this._name=this.constructor.name,this._ctor=this.constructor,this.inited=!1,this.destroyed=!1,this.children=[],this._={a0:!0,c1:!1,$1:1,$2:1,in:[],oc:{},on:{}},rt(this)}init(){this._.c1||(this._.c1=this.inited=!0,ct(this))}insert(t,e){var n=[];if(this._.a0&&void 0!==t){var r=this._.in,i={i:dt(e,this.children.length)};r.push(i),it(this,n,t,i),r.splice(r.lastIndexOf(i),1)}return n}splice(t,e,n){if(this._.a0&&(void 0!==n||e)){var r=this._.in,i={i:t};r.push(i);for(var s=this.children.slice(t|=0,e+t),a=s.length;a-- >0;)s[a].destroy();return this.insert(n,r.splice(r.lastIndexOf(i),1)[0].i)}return[]}destroy(){var t=this._;if(t.a0){var e=t.$2;t.a0=!1,t.c2&&(t.c2=null),t.$1=t.$2=NaN,this.destroyed=!0,t.d1&&(ot(this,t.d1),t.d1=null),this.destroyChildren();var n=this.parent,r=this.prev,i=this.next;this.parent=this.prev=this.next=null,r&&(r.next=i),i&&(i.prev=r),n&&tt(n,n.children.lastIndexOf(this)),t.d2&&(ot(this,t.d2),t.d2=null),e&&n&&ct(n)}}destroyChildren(){for(var t=this.children.slice(),e=t.length;e-- >0;)t[e].destroy()}move(t,e){if(this._.a0&&(t?t._.a0:this.parent)){var n=this.parent,r=this.prev,i=this.next;if(e=t?dt(e,t.children.length):0,n){var s=n.children.indexOf(this);if(n===t){var a=n.children.length;if(e<a||(e=a-1),e===s)return!1}tt(n,s)}r&&(r.next=i),i&&(i.prev=r),nt=t,et=e,rt(this),this._.$1++;var c=this._.$2;return ht(this,this,n,t),this.init(),ct(this),n===t?t&&ct(t):(c&&n&&ct(n),c||t&&ct(t)),!0}return!1}on(t,e,n,r){var i=this._;return i.a0?H((r=r?i.oc:i.on)[t]||(r[t]=G()),e,n):u}emit(t,e,n){var r=this._;null!=n?lt((n?r.oc:r.on)[t],this,e):(lt(r.oc[t],this,e),lt(r.on[t],this,e))}emitDeep(t,e){var n=this._;lt(n.oc[t],this,e),this.notifyChildren(t,e),lt(n.on[t],this,e)}notifyParents(t,e){for(var n=this;n=n.parent;)n.emit(t,e)}notifyChildren(t,e){var n=this._.in,r={i:0};n.push(r);for(var i=this.children;r.i<i.length;r.i++)i[r.i].emitDeep(t,e);n.splice(n.lastIndexOf(r),1)}onMoveCapture(t,e){var n=this._;return n.a0?H(n.m1||(n.m1=G()),t,e):u}onMove(t,e){var n=this._;return n.a0?H(n.m2||(n.m2=G()),t,e):u}onReady(t,e){var n=this._;return n.a0?null!==n.c2?H(n.c2||(n.c2=G()),t,e):(n.$2?at(this,t,e):t.call(e,this),u):u}onDestroyCapture(t,e){var n=this._;return null!==n.d1?H(n.d1||(n.d1=G()),t,e):(t.call(e,this),u)}onDestroy(t,e){var n=this._;return null!==n.d2?H(n.d2||(n.d2=G()),t,e):(t.call(e,this),u)}await(t,e,n){return Y(this,p,t,e,n)}awaitAll(t,e,n){return Y(this,m,t,e,n)}watch(t,e,n){return V(this,O,t,e,n)}watchDeep(t,e,n){return V(this,E,t,e,n)}watchAll(t,e,n){return V(this,I,t,e,n)}watchDeepAll(t,e,n){return V(this,S,t,e,n)}findParent(t){for(var e=d(t),n=this;n=n.parent;)if(vt(e,n,t))return n;return null}findFirstChild(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this.children,c=0,h=a.length;c<h;c++)if(vt(i,r=a[c],t)||e&&(!n||!vt(s,r,n))&&(r=r.findFirstChild(t,e,n)))return r;return null}findLastChild(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this.children,c=a.length;c-- >0;)if(vt(i,r=a[c],t)||e&&(!n||!vt(s,r,n))&&(r=r.findLastChild(t,e,n)))return r;return null}findPrevSibling(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this;a=a.prev;)if(vt(i,r=a,t)||e&&(!n||!vt(s,r,n))&&(r=a.findLastChild(t,e,n)))return r;return null}findNextSibling(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this;a=a.next;)if(vt(i,r=a,t)||e&&(!n||!vt(s,r,n))&&(r=a.findFirstChild(t,e,n)))return r;return null}findParentOrPrev(t,e){var n=this.findPrevSibling(e,!0,t);if(n)return{prev:n,parent:null};for(var r,i=d(t),s=d(e),a=this;r=a,a=a.parent;){for(var c=a.children,h=c.indexOf(r);h-- >0;)if(vt(s,n=c[h],e)||!vt(i,n,t)&&(n=n.findLastChild(e,!0,t)))return{prev:n,parent:null};if(vt(i,a,t))return{prev:null,parent:a}}return{prev:null,parent:null}}findParentOrNext(t,e){var n=this.findNextSibling(e,!0,t);if(n)return{next:n,parent:null};for(var r,i=d(t),s=d(e),a=this;r=a,a=a.parent;){for(var c=a.children,h=c.lastIndexOf(r),o=c.length;++h<o;)if(vt(s,n=c[h],e)||!vt(i,n,t)&&(n=n.findFirstChild(e,!0,t)))return{next:n,parent:null};if(vt(i,a,t))return{next:null,parent:a}}return{next:null,parent:null}}}function vt(t,e,n){if(t){for(var r=n.length;r-- >0;)if(e._ctor===n||e instanceof n[r])return!0;return!1}return e._ctor===n||e instanceof n}function pt(t,e,...n){if(e||(e={}),n.length&&(e.children=n.length>1?n:n[0]),a(t))switch(t){case"r-text":t=RText;break;case"r-element":t=RElement;break;case"r-fragment":t=RFragment;break;case"r-watch":t=RWatch;break;case"r-if":t=RIf;break;case"r-else-if":t=RElseIf;break;case"r-else":t=RElse;break;case"r-switch":t=RSwitch;break;case"r-case":t=RCase;break;case"r-await":t=RAwait;break;case"r-then":t=RThen;break;case"r-catch":t=RCatch;break;case"r-for-in":t=RForIn;break;case"r-for-of":t=RForOf;break;case"r-move":t=RMove;break;default:e.this=t,t=RElement}return new z(t,e)}function bt(t,e){var n=new RElement({this:t,children:e});return n.init(),n}function mt(t,e,n,r){t.destroyed||t.insert(c(e)?e.call(n,r):e)}function _t(t,e){return t._is=("this"in e||(e=t.findPrevSibling(gt)))&&e.this}class gt extends Rease{}class RAwait extends gt{constructor(t){super();var e=this,n=_t(e,t),r=h(n);if(r){function i(){r=!1,e.destroyChildren()}o(n=n.then(i))&&n.catch(i),r&&mt(e,t.children,t.context,e._is)}}}class RThen extends gt{constructor(t){super();var e=this,n=_t(e,t);function r(n){mt(e,t.children,t.context,n)}h(n)?o(n=n.then(r))&&n.catch(u):r(n)}}class RCatch extends gt{constructor(t){super();var e=this,n=_t(e,t);o(n)&&n.catch((function(n){mt(e,t.children,t.context,n)}))}}function xt(t){var e=this[0],n=this[1],r=this[2],i={};if(this[2]=i,t=t[0]){var s,a,c=e.children,h=0;for(var o in t){if(e.destroyed)return;Z(t,o)&&(s=t[o],Z(r,o)&&B((a=r[o])[0],s)?(s=(i[o]=a)[1],delete r[o]):i[o]=[s,s=e.insert(n(s,o,t),h)],s.length&&(s=c.lastIndexOf(s[s.length-1]))>-1&&(h=s+1))}for(var l=J(r),u=l.length;u-- >0;)for(var f=r[l[u]][1],d=f.length;d-- >0;)f[d].destroy()}else e.destroyChildren()}class RForIn extends Rease{constructor({this:t,watch:e,children:n}){super(),this.watchDeepAll([t,e],xt,[this,n,{}])}}function yt(t,e,n){for(var r=n,i=t.length;r<i;r++)if(B(t[r],e))return r;return-1}function Rt(t){var e=this[0],n=this[1],r=this[2],i=this[3],s=[],a=[];if(this[2]=s,this[3]=a,t=t[0]){var c,h,o=e.children,l=0,u=0;for(var f in t){if(e.destroyed)return;Z(t,f)&&(s.push(h=t[f]),(c=yt(r,h,u))>-1?(a.push(h=i[c]),i[c]=i,u=c+1):a.push(h=e.insert(n(h,""+(c=+f)===f?c:f,t),l)),h.length&&(h=o.lastIndexOf(h[h.length-1]))>-1&&(l=h+1))}for(var d,v=i.length;v-- >0;)if((d=i[v])!==i)for(var p=d.length;p-- >0;)d[p].destroy()}else e.destroyChildren()}class RForOf extends Rease{constructor({this:t,watch:e,children:n}){super(),this.watchDeepAll([t,e],Rt,[this,n,[],[]])}}class RFragment extends Rease{constructor(t){super(),this.insert(t.children)}}var wt="http://www.w3.org/",kt={svg:wt+"2000/svg",math:wt+"1998/Math/MathML",xlink:wt+"1999/xlink"};var Ct=function(){function r(t){switch(typeof t){case"string":return t;case"object":var e=[];if(d(t))for(var n,i=0;i<t.length;i++)(n=r(t[i]))&&e.push(n);else if(t)for(var s in t)t[s]&&e.push(s);return e.join(" ");default:return""}}var i=/([A-Z])/g,s={},a=function(n){return t(),(a=function(t){return"-"===t[0]?t:Z(e,t=Z(s,t)?s[t]:s[t]=t.replace(i,"-$1").toLowerCase())?e[t]:t})(n)};function c(t){switch(typeof t){case"string":return t;case"object":var e=[];if(d(t))for(var n,r=0;r<t.length;r++)(n=c(t[r]))&&e.push(";"===n[n.length-1]?n.slice(0,-1):n);else if(t)for(var i in t)null!=t[i]&&e.push(a(i)+":"+t[i]);return e.join(";");default:return""}}function h(t){return t==t&&("string"===(t=typeof t)||"number"===t||"boolean"===t)}function o(t,e,n){t.classList[n?"add":"remove"](e)}function l(t,e,n){t.style[h(n)?"setProperty":"removeProperty"](e,n)}function f(t,e,n){t[h(n)?"setAttribute":"removeAttribute"](e,n)}function v(t){var e=this.r,n=e.node,i=e._attrs,s=e._class,a=this.k;if(i[a]=t=r(t),n&&(f(n,a,t),s))for(var c in s)o(n,c,s[c])}function p(t){var e=this.r,n=e.node,r=e._attrs,i=e._style,s=this.k;if(r[s]=t=c(t),n&&(f(n,s,t),i))for(var a in i)l(n,a,i[a])}var b=/^on-./;function m(t){var e=this.k,r=this.r,i=this.n,s=r.node,a=r._unevt;a[null==i?this.n=a.length:(a[i](),i)]=s&&t?n(s,e,(function(e){t.call(r,e)})):u}var _=/^class-./;function g(t){var e=this.r,n=e.node,r=e._class,i=this.k;r[i]=t,n&&o(n,i,t)}var x=/^style-./;function y(t){var e=this.r,n=e.node,r=e._style,i=this.k;r[i]=t,n&&l(n,i,t)}var R=/^xlink-./;function w(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&n[h(t)?"setAttributeNS":"removeAttributeNS"](kt.xlink,i,t)}function k(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&(i in n&&function(t,e,n){if(!Z(t=C[t]||(C[t]={}),e)){for(var r;(n=W(n))&&!(r=q(n,e)););t[e]=r&&r.set}return t[e]}(n.localName,i,n)?n[i]=t:f(n,i,t))}var C={};function N(t,e){return"-"===t[e]?t.slice(e+1):t[e].toLowerCase()+t.slice(e+1)}function O(t){for(var e=t._unevt;e.length>0;)e.pop()()}return function(t,e,n){var r="style"===n?p:"class"===n||"className"===n&&(n="class")?v:b.test(n)?(n=N(n,2),"_unevt"in t||(t._unevt=[],t.onDestroy(O)),m):_.test(n)?(n=N(n,5),"_class"in t||(t._class={}),g):x.test(n)?(n=a(N(n,5)),"_style"in t||(t._style={}),y):R.test(n)?(n="xlink:"+N(n,5),w):k;t.watchDeep(e,r,{r:t,k:n})}}();function Nt(){return null}var Ot=function(){return{}},Et=Nt,Pt=Nt,At=u,It=u,St=u,Dt=u,$t={documentElement:null,head:null,body:null};function Tt(t){this.data=t=void 0===t?"":""+t;var e=this.node;if(e){var n=1===e.childNodes.length&&e.childNodes[0];n&&3===n.nodeType?n.data=t:e.textContent=t}}class RText extends Rease{constructor({this:t}){super(),t&&(t.subscribe||t.then)?(this.data="",this.watchDeep(t,Tt,this)):this.data=void 0===t?"":""+t;var e=Ot(this),n=e.p,r=e.b;(this.node=Et(this.data,n,r))&&(At(this.node,n,r,!1),this.onMove(Dt,this),this.onDestroy(It))}}class RElement extends Rease{constructor({children:t,this:e,...n}){var r;super();var i=u;switch(a(e)?(r=e,e=null):r=e?e.localName:"",this.name=r||(r="template")){case"html":this.node=e||$t.documentElement;break;case"head":this.node=e||$t.head;break;case"body":this.node=e||$t.body;break;default:var s=Ot(this),c=s.p,h=s.b;(this.node=e||Pt(r,c,h))&&(At(this.node,c,h,!1),this.onMove(Dt,this),this.onDestroy(It),i=St)}for(var o in this._attrs={},n){if(this.destroyed)break;Ct(this,n[o],o)}this.insert(t),i(this)}}if("undefined"!=typeof document){$t=document;var Ft="_rease_relement_or_rtext",Mt={style:1,script:1},jt={html:1,head:1,body:1};function Xt(t){t.parentNode&&t.parentNode.removeChild(t)}var Lt=[RElement,RText];function Yt(t,e){return $t.createElementNS(kt.hasOwnProperty(t)?kt[t]:(e&&"foreignObject"!==e.localName?e:$t.documentElement).namespaceURI,t)}Ot=function(t){var e,n,r=t.findParentOrPrev(RElement,Lt),i=r.parent,s=r.prev;if(s){if(n=s.node,jt.hasOwnProperty(n.localName))return Ot(s);if(i=s.findParent(RElement)){for(e=i.node;n&&n.parentNode!==e;)n=n.parentNode;if(!n)return Ot(s)}}else i&&(e=i.node);return{p:e,b:n}},Et=function(t,e,n){var r=Yt("font",e);return r.style.verticalAlign="inherit",r.appendChild((n=n?n.nextSibling:e&&e.firstChild)&&3===n.nodeType&&!(Ft in n)?(n.data=t,n):$t.createTextNode(t)),r},Pt=function(t,e,n){if(n=n?n.nextSibling:e&&e.firstChild)for(var r;n&&!(Ft in n);)if(r=n,n=n.nextSibling,1!==r.nodeType)Xt(r);else if(r.localName===t){for(var i=r.attributes,s=i.length;s-- >0;)r.removeAttribute(i[s].name);return r}return Yt(t,e)},At=function(t,e,n,r){t[Ft]=!0,e?e.insertBefore(t,(n?n.nextSibling:e.firstChild)||null):r&&Xt(t)},Dt=function(t){if(this!==t)for(var e=this;e=e.parent;){if(e instanceof RElement)return;if(e===t)break}var n=Ot(this),r=n.p,i=n.b;At(this.node,r,i,!0)},It=function(t){Xt(t.node)},St=function(t){for(var e=t.node,n=e.childNodes,r=n.length;r-- >0&&!(Ft in(e=n[r]));)1===e.nodeType&&Mt.hasOwnProperty(e.localName)||Xt(e)}}function Wt(t){this.b!==(this.b=t.every((function(t,e){return e>0?!t:t})))&&(this.b?this.r.insert(c(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function Jt(t,e,n,r){t.watchDeepAll(r,Wt,{r:t,t:e,b:!1,c:n})}function qt(t,e,n,r){var i=t.findPrevSibling(Bt);Jt(t,n,r,t._is=i?[e].concat(i._is):[e])}class Bt extends Rease{move(){throw new Error("RIf, RElseIf and RElse is not move")}}class RIf extends Bt{constructor(t){super(),Jt(this,t.context,t.children,this._is=[t.this])}}class RElseIf extends Bt{constructor(t){super(),qt(this,t.this,t.context,t.children)}}class RElse extends Bt{constructor(t){super(),qt(this,!0,t.context,t.children)}}function Ut(t){var e=t[0],n=t[1];e||(e=this.p),this.r.move(e,n),void 0===this.c||this.r.insert(this.c,this.c=void 0)}class RMove extends Rease{constructor(t){super(),this.watchDeepAll([t.to,t.index],Ut,{r:this,p:this.parent,c:t.children})}}class RSwitch extends Rease{constructor(t){super(),this._is=t.this,this.insert(t.children)}}function Zt(t){this.i=!0,this.b!==(this.b=B(t[0],t[1]))&&(this.b?this.r.insert(c(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function zt(){var t=this._is,e=this._ctx,n=this.findParent(RSwitch);n!==this._switch&&(this._switch=n,e.i=!1,e.u(),n&&(e.u=this.watchDeepAll([n._is,t],Zt,e)),!e.i&&e.b&&(e.b=!1,this.destroyChildren()))}class RCase extends Rease{constructor(t){super(),this._is=t.this,this._ctx={r:this,t:t.context,b:!1,c:t.children,i:!1,u:u},this.onMove(zt,this),zt.call(this)}}function Gt(t){var e=this.r,n=this.t,r=this.c;e.destroyChildren(),e.destroyed||e.insert(c(r)?r.call(n,t):r)}class RWatch extends Rease{constructor(t){super(),this[d(t.this)?"watchDeepAll":"watchDeep"](t.this,Gt,{r:this,t:t.context,c:t.children})}}function Ht(t,e){var n;if(null==t)n=Math.random();else{for(var r,i=1/(n=.9973),s=t.length,a=e&&s/99>>>1||1,c=0;c<s;c+=a)13===(r=t.charCodeAt(c))?c-=a-1:(n+=r*n*997.3/(r+n)+i,n-=0|n);n<0&&(n=(0|n)-n)}return(5e16*n+4e16).toString(36)}var Kt={html:1,head:1,body:1,embed:1,fencedframe:1,iframe:1,object:1,portal:1,svg:1,math:1,canvas:1,script:1,button:1,datalist:1,input:1,meter:1,optgroup:1,option:1,progress:1,select:1,textarea:1,slot:1,template:1},Qt={area:1,base:1,br:1,col:1,embed:1,frame:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1};function Vt(t){var e=[];if(t instanceof RText)e.push(t.data.replace(/["'&<>]/g,(function(t){switch(t){case'"':t="&quot;";break;case"'":t="&#39;";break;case"&":t="&amp;";break;case"<":t="&lt;";break;case">":t="&gt;"}return t})));else if(t instanceof RElement){var n=t.name;if(n&&!Kt.hasOwnProperty(n)){var r,i,s=t._class,a=t._style,c=t._attrs,h=[],o=[],l=[];if(s)for(r in s)s[r]&&h.push(r);if(a)for(r in a)(i=a[r])&&o.push(r,":",i,";");if(c)for(r in c)if(i=c[r])switch(r){case"class":h.push(i);break;case"style":o.push(i);break;default:l.push(" ",r,"=",JSON.stringify(""+i))}if(h.length&&l.push(" class=",JSON.stringify(h.join(" "))),o.length&&l.push(" style=",JSON.stringify(o.join(""))),e.push("<",n,l.join("")),Qt.hasOwnProperty(n))e.push("/>");else{e.push(">");for(var u=t.children,f=0;f<u.length;f++)e.push(Vt(u[f]));e.push("</",n,">")}}}else for(var d=t.children,v=0;v<d.length;v++)e.push(Vt(d[v]));return e.join("")}export{RAwait,RCase,RCatch,RElement,RElse,RElseIf,RForIn,RForOf,RFragment,RIf,RMove,RSwitch,RText,RThen,RWatch,Rease,pt as createElement,pt as h,Ht as hash,R as interval,o as isCatchable,c as isFunction,a as isString,l as isSubscribable,h as isThenable,bt as render,v as then,p as thenSafe,m as thenSafeAll,g as thenable,y as timeout,Vt as toHTMLString,O as watch,I as watchAll,E as watchDeep,S as watchDeepAll,T as watcher,M as watcherAll,F as watcherDeep,j as watcherDeepAll};
