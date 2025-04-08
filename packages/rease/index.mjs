/* eslint-disable */
import{_cssInit as t,_cssProperties as e}from"@rease/css";export*from"@rease/css";import{listen as n}from"@rease/listen";export*from"@rease/listen";import{isSignal as r,signal as i,batch as s}from"@rease/signal";export*from"@rease/signal";export*from"@rease/tween";
/*@__NO_SIDE_EFFECTS__*/function a(t){return"string"==typeof t}
/*@__NO_SIDE_EFFECTS__*/function h(t){return"function"==typeof t}
/*@__NO_SIDE_EFFECTS__*/function l(t){return null!=t&&"function"==typeof t.then}
/*@__NO_SIDE_EFFECTS__*/function o(t){return null!=t&&"function"==typeof t.catch}
/*@__NO_SIDE_EFFECTS__*/function c(t){return null!=t&&"function"==typeof t.subscribe}
/*@__NO_SIDE_EFFECTS__*/function u(){}var f=Array,d=f.isArray;function v(t,e,n){var r=u;return t.then((function(t){r&&(r(),r=e?p(t,e,(e=null,n)):null)})),function(){r&&(r(),r=e=null)}}function p(t,e,n){return l(t)?v(t,e,n):(e.call(n,t),u)}function b(t){this[0][this[1]]=t,(this[3][0]<1||this[2]&&(this[2]=!1,--this[3][0]<1))&&this[4].call(this[5],this[0])}function m(t,e,n){var r,i=t.length;if(i>0){for(var s=[],a=[t.length],h=f(i),l=0;l<i;l++)h[l]=p(t[l],b,[s,l,!0,a,e,n]);r=function(){for(;h.length>0;)h.pop()()}}else r=u,e.call(n,[]);return r}function _(t){if(this.a){this.v=t;for(var e,n=this.a,r=0;r<n.length;r++)(e=n[r])[0](e[1].call(this.c,t));this.b=!0}}function g(t,e){var n={b:!1,v:null,c:e,a:[]},r=u;function i(){r&&(r(),n.a=r=null)}return t.call(e,(function(t){r&&(r(),r=p(t,_,n))})),i.then=function(t){return g((function(e){n.a&&t&&(n.a.push([e,t]),n.b&&e(t.call(this,n.v)))}),e)},i}function y(t,e){return function(n,r,i){var s;r||(r=u);var a=g((function(e){s=t((function(){e(r.call(i))}),0|n)}),i),h=function(){a&&(a(),e(s),a=null)};return h.then=a.then,h}}var x=y(setTimeout,clearTimeout),R=y(setInterval,clearInterval);function w(t){return{subscribe:(e,n)=>v(t,e,n)}}function k(t){t!==this&&this.f.call(this.c,t)}function N(t,e){var n=u,r=t.subscribe((function(t){var r=n;n=u,r(),c(t)||l(t)&&(t=w(t),1)?n=N(t,e):e.s.set(t)}));return function(){var t=n,e=r;n=r=u,t(),e.unsubscribe?e.unsubscribe():e()}}function C(t){s(this.f,this.c,[t])}function O(t,e,n){var a;if(r(t))a=t.subscribe(e,n);else if(c(t)){var h={f:e,c:n,s:null};h.s=i(h);var o=t.subscribe((function(t){h.s.set(t)})),f=h.s.subscribe(k,h);a=function(){var t=f,e=o;f=o=u,t(),e.unsubscribe?e.unsubscribe():e()}}else l(t)?a=v(t,C,{f:e,c:n}):(a=u,s(e,n,[t]));return a}function P(t,e,n){var r;if(c(t)||l(t)&&(t=w(t),1)){var a={f:e,c:n,s:null};a.s=i(a);var h=N(t,a),o=a.s.subscribe(k,a);r=function(){var t=o,e=h;o=h=u,t(),e()}}else r=u,s(e,n,[t]);return r}function A(t){var e=this.d;e.v[this.i]=t,e.l<1?e.s.set(e.v.slice()):this.f&&(this.f=!1,--e.l<1)&&(e.s.set(e.v.slice()),e.u.push(e.s.subscribe(e.f,e.c)))}function D(t){return function(e,n,r){var a,h=e.length;if(h>0){for(var l=f(h),o={l:h,v:f(h),u:l,s:i(l),f:n,c:r},c=0;c<h;c++)l[c]=t(e[c],A,{d:o,i:c,f:!0});a=function(){for(;l.length>0;)l.pop()()}}else a=u,s(n,r,[[]]);return a}}var E=D(O),I=D(P);function S(t){t===this._||this.f.call(this.c,t)}function $(t){this.s.set(this.m?this.m.call(this.t,t):t)}class ReaseWatcher{constructor(t,e,n,r,i,s){this.deep=i,this.all=s,this._={v:t,m:e,t:n,s:null,w:r}}subscribe(t,e){var n=this._;return n.s||(n.s=i(n,{prepare:t=>(n.s=t,t.set(n),n.w(n.v,$,n))})),n.s.subscribe(S,{_:n,f:t,c:e})}toJSON(){}}
/*@__NO_SIDE_EFFECTS__*/function T(t,e,n){return new ReaseWatcher(t,e,n,O,!1,!1)}
/*@__NO_SIDE_EFFECTS__*/function M(t,e,n){return new ReaseWatcher(t,e,n,P,!0,!1)}
/*@__NO_SIDE_EFFECTS__*/function j(t,e,n){return new ReaseWatcher(t,e,n,E,!1,!0)}
/*@__NO_SIDE_EFFECTS__*/function F(t,e,n){return new ReaseWatcher(t,e,n,I,!0,!0)}var L=Object,W=L.getPrototypeOf,H=L.keys,J=L.getOwnPropertyDescriptor,U=L.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},B=L.prototype.hasOwnProperty,q=L.hasOwn||function(t,e){return B.call(t,e)};class Z{constructor(t,e){this.c=t,this.p=e}}function z(){var t={p:null,n:null};return t.p=t.n=t}function G(t,e,n){var r={p:null,n:null,f:e,c:n};return(r.p=(r.n=t).p).n=r.n.p=r,function(){r&&(r.p.n=r.n,r.n.p=r.p,r.f=u,r=null)}}function K(t){(this.d.f=this.f).call(this.d.c=this.c,t),ht(this.r)}function Q(t){this.f.call(this.c,t)}function V(t,e,n,r,i){var s=u;if(t._.a0){t._.$1++;var a={f:K,c:{r:t,d:null,f:r||u,c:i}};a.c.d=a;var h=e(n,Q,a);if(h!==u){var l=u;s=function(){s!==u&&(s=u,l(),h(),a.f===K&&(a.f=u,ht(t)))},l=t.onDestroy(s)}}return s}function X(t){this.r&&(this.f.call(this.c,t),ht(this.r),this.r=null)}function Y(t,e,n,r,i){var s=u;if(t._.a0){t._.$1++;var a={r:t,f:r||u,c:i},h=e(n,X,a);h!==u&&(s=function(){s!==u&&(s=u,h(),a.r&&(ht(a.r),a.r=null))})}return s}function tt(t,e){if(e>-1){t.children.splice(e,1);for(var n,r=t._.in,i=r.length;i--;)(n=r[i]).i>e&&n.i--}}var et,nt=null;function rt(t){var e=nt,n=et;if(nt=null,et=NaN,e){e._.$1++,t.root=e.root,t.parent=e;var r=e.children;n===+n&&n<r.length?((n|=0)<0&&(n=0),(t.prev=(t.next=r[n]).prev)&&(t.prev.next=t),r.splice(n,0,t),t.next.prev=t):(t.next=null,(n=r.push(t)-1)?(t.prev=r[n-1]).next=t:t.prev=null);for(var i,s=e._.in,a=s.length;a--;)(i=s[a]).i<n||i.i++}else t.root=t,t.parent=t.prev=t.next=null}function it(t,e,n,r){if(void 0!==n){var i=t._;if(d(n))for(var s=0;s<n.length&&i.a0;s++)it(t,e,n[s],r);else i.a0&&(n instanceof Rease?n._.a0&&(e.push(n),n.move(t,r.i)):e.push(function(t,e,n){var r,i;if(t instanceof Z){var s=t;r=s.c,i=s.p}else h(t)?(r=t,i={}):(r=RText,i={this:t});for(var a,o=!1,c=r;c&&(c!==ft&&!(o=c===Rease));c=W(c));nt=e,et=n,o?(a=new r(i)).init():((a=new Rease)._name=r.name,a._ctor=r,l(t=r.call(a,i))?v(t,ut,a):ut.call(a,t));return a}(n,t,r.i)))}}function st(){--this._.$2<1&&(this._.$2=NaN,this.parent&&ht(this.parent))}function at(t,e,n){l(e=e.call(n,t))&&t._.a0&&(t._.$2++,v(e,st,t))}function ht(t){--t._.$1<1&&(t._.$1=NaN,function(t){var e=t._,n=e.c2;if(n){e.c2=null;for(var r=n;(r=r.n)!==n&&e.a0;)at(t,r.f,r.c);st.call(t)}}(t))}function lt(t,e,n,r,i){for(var s,a=t._,h=[a.m2,a.m1],l=2;l-- >0;)if(s=h[l])for(var o=s;(o=o.n)!==s&&a.a0;)o.f.call(o.c,e,n,r,i);var c=a.in,u={i:0};c.push(u);for(var f=t.children;u.i<f.length;u.i++)lt(f[u.i],e,n,r,i);c.splice(c.lastIndexOf(u),1)}function ot(t,e){for(var n=e;(n=n.n)!==e;)n.f.call(n.c,t)}function ct(t,e,n){if(t)for(var r=t,i=e._;(r=r.n)!==t&&i.a0;)r.f.call(r.c,n)}function ut(t){this.insert(t),this.init()}var ft=Function.prototype;function dt(t,e){return"number"==typeof t&&t<=e?(t|=0)<0&&(t=e+t)<0?0:t:e}class Rease{constructor(){this._name=this.constructor.name,this._ctor=this.constructor,this.inited=!1,this.destroyed=!1,this.children=[],this._={a0:!0,c1:!1,$1:1,$2:1,in:[],e1:{},e2:{}},rt(this)}init(){this._.c1||(this._.c1=this.inited=!0,ht(this))}insert(t,e){var n=[];if(this._.a0&&void 0!==t){var r=this._.in,i={i:dt(e,this.children.length)};r.push(i),it(this,n,t,i),r.splice(r.lastIndexOf(i),1)}return n}splice(t,e,n){if(this._.a0&&(void 0!==n||e)){var r=this._.in,i={i:t};r.push(i);for(var s=this.children.slice(t|=0,e+t),a=s.length;a-- >0;)s[a].destroy();return this.insert(n,r.splice(r.lastIndexOf(i),1)[0].i)}return[]}destroy(){var t=this._;if(t.a0){var e=t.$2;t.a0=!1,t.c2&&(t.c2=null),t.$1=t.$2=NaN,this.destroyed=!0,t.d1&&(ot(this,t.d1),t.d1=null),this.destroyChildren();var n=this.parent,r=this.prev,i=this.next;this.parent=this.prev=this.next=null,r&&(r.next=i),i&&(i.prev=r),n&&tt(n,n.children.lastIndexOf(this)),t.d2&&(ot(this,t.d2),t.d2=null),e&&n&&ht(n)}}destroyChildren(){for(var t=this.children.slice(),e=t.length;e-- >0;)t[e].destroy()}move(t,e){if(this._.a0&&(t?t._.a0:this.parent)){var n,r=this.parent,i=this.prev,s=this.next,a=r===t;if(e=t?dt(e,t.children.length):0,r&&(n=r.children.indexOf(this),a&&e>n&&e--,tt(r,n)),i&&(i.next=s),s&&(s.prev=i),nt=t,et=e,rt(this),!a||e!==n){this._.$1++;var h=this._.$2;return lt(this,this,r,t,e),this.init(),ht(this),a?t&&ht(t):(h&&r&&ht(r),h||t&&ht(t)),!0}}return!1}on(t,e,n,r){var i=this._;return i.a0?G((r=r?i.e1:i.e2)[t+="~"]||(r[t]=z()),e,n):u}onCapture(t,e,n){return this.on(t,e,n,!0)}emit(t,e,n){var r=this._;t+="~",null!=n?ct((n?r.e1:r.e2)[t],this,e):(ct(r.e1[t],this,e),ct(r.e2[t],this,e))}emitDeep(t,e){var n=this._,r=t+"~";ct(n.e1[r],this,e),this.notifyChildren(t,e),ct(n.e2[r],this,e)}notifyParents(t,e){for(var n=this;n=n.parent;)n.emit(t,e)}notifyChildren(t,e){var n=this._.in,r={i:0};n.push(r);for(var i=this.children;r.i<i.length;r.i++)i[r.i].emitDeep(t,e);n.splice(n.lastIndexOf(r),1)}onMoveCapture(t,e){var n=this._;return n.a0?G(n.m1||(n.m1=z()),t,e):u}onMove(t,e){var n=this._;return n.a0?G(n.m2||(n.m2=z()),t,e):u}onReady(t,e){var n=this._;return n.a0?null!==n.c2?G(n.c2||(n.c2=z()),t,e):(n.$2?at(this,t,e):t.call(e,this),u):u}onDestroyCapture(t,e){var n=this._;return null!==n.d1?G(n.d1||(n.d1=z()),t,e):(t.call(e,this),u)}onDestroy(t,e){var n=this._;return null!==n.d2?G(n.d2||(n.d2=z()),t,e):(t.call(e,this),u)}await(t,e,n){return Y(this,p,t,e,n)}awaitAll(t,e,n){return Y(this,m,t,e,n)}watch(t,e,n){return V(this,O,t,e,n)}watchDeep(t,e,n){return V(this,P,t,e,n)}watchAll(t,e,n){return V(this,E,t,e,n)}watchDeepAll(t,e,n){return V(this,I,t,e,n)}findParent(t){for(var e=d(t),n=this;n=n.parent;)if(vt(e,n,t))return n;return null}findFirstChild(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this.children,h=0,l=a.length;h<l;h++)if(vt(i,r=a[h],t)||e&&(!n||!vt(s,r,n))&&(r=r.findFirstChild(t,e,n)))return r;return null}findLastChild(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this.children,h=a.length;h-- >0;)if(vt(i,r=a[h],t)||e&&(!n||!vt(s,r,n))&&(r=r.findLastChild(t,e,n)))return r;return null}findPrevSibling(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this;a=a.prev;)if(vt(i,r=a,t)||e&&(!n||!vt(s,r,n))&&(r=a.findLastChild(t,e,n)))return r;return null}findNextSibling(t,e,n){for(var r,i=d(t),s=n&&d(n),a=this;a=a.next;)if(vt(i,r=a,t)||e&&(!n||!vt(s,r,n))&&(r=a.findFirstChild(t,e,n)))return r;return null}findParentOrPrev(t,e){var n=this.findPrevSibling(e,!0,t);if(n)return{prev:n,parent:null};for(var r,i=d(t),s=d(e),a=this;r=a,a=a.parent;){for(var h=a.children,l=h.indexOf(r);l-- >0;)if(vt(s,n=h[l],e)||!vt(i,n,t)&&(n=n.findLastChild(e,!0,t)))return{prev:n,parent:null};if(vt(i,a,t))return{prev:null,parent:a}}return{prev:null,parent:null}}findParentOrNext(t,e){var n=this.findNextSibling(e,!0,t);if(n)return{next:n,parent:null};for(var r,i=d(t),s=d(e),a=this;r=a,a=a.parent;){for(var h=a.children,l=h.lastIndexOf(r),o=h.length;++l<o;)if(vt(s,n=h[l],e)||!vt(i,n,t)&&(n=n.findFirstChild(e,!0,t)))return{next:n,parent:null};if(vt(i,a,t))return{next:null,parent:a}}return{next:null,parent:null}}}function vt(t,e,n){if(t){for(var r=n.length;r-- >0;)if(e._ctor===n||e instanceof n[r])return!0;return!1}return e._ctor===n||e instanceof n}
/*@__NO_SIDE_EFFECTS__*/function pt(t,e,...n){return e||(e={}),n.length&&(e.children=n.length>1?n:n[0]),a(t)&&(e.this=t,t=RElement),new Z(t,e)}function bt(t,e){var n=new RElement({this:t,children:e});return n.init(),n}function mt(t,e,n,r,i){t.destroyed||t.insert(n?n.call(void 0!==r?r:t,i):e)}function _t(t,e){return t._is="this"in e?e.this:(e=t.findPrevSibling(gt))&&e._is}class gt extends Rease{move(){throw new Error("RAwait, RThen and RCatch is not move")}}class RAwait extends gt{constructor(t){super();var e=this,n=_t(e,t),r=l(n);if(r){function i(t){return r=!1,e.destroyChildren(),t}e._is=n.then(i),r&&mt(e,t.children,t.callback,t.context,e._is)}}}class RThen extends gt{constructor(t){super();var e=this,n=_t(e,t);function r(n){return mt(e,t.children,t.callback,t.context,n),n}l(n)?e._is=n.then(r):r(n)}}class RCatch extends gt{constructor(t){super();var e=this,n=_t(e,t);o(n)&&(e._is=n.catch((function(n){return mt(e,t.children,t.callback,t.context,n),n})))}}function yt(t){var e=this[0],n=this[1],r=this[2],i={};if(this[2]=i,t=t[0]){var s,a,h=e.children,l=0;for(var o in t){if(e.destroyed)return;q(t,o)&&(s=t[o],q(r,o)&&U((a=r[o])[0],s)?(s=(i[o]=a)[1],delete r[o]):i[o]=[s,s=e.insert(n(s,o,t),l)],s.length&&(s=h.lastIndexOf(s[s.length-1]))>-1&&(l=s+1))}for(var c=H(r),u=c.length;u-- >0;)for(var f=r[c[u]][1],d=f.length;d-- >0;)f[d].destroy()}else e.destroyChildren()}class RForIn extends Rease{constructor({this:t,watch:e,callback:n}){super(),this.watchDeepAll([t,e],yt,[this,n,{}])}}function xt(t,e,n){for(var r=n,i=t.length;r<i;r++)if(U(t[r],e))return r;return-1}function Rt(t){var e=this[0],n=this[1],r=this[2],i=this[3],s=[],a=[];if(this[2]=s,this[3]=a,t=t[0]){var h,l,o=e.children,c=0,u=0;for(var f in t){if(e.destroyed)return;q(t,f)&&(s.push(l=t[f]),(h=xt(r,l,u))>-1?(a.push(l=i[h]),i[h]=i,u=h+1):a.push(l=e.insert(n(l,""+(h=+f)===f?h:f,t),c)),l.length&&(l=o.lastIndexOf(l[l.length-1]))>-1&&(c=l+1))}for(var d,v=i.length;v-- >0;)if((d=i[v])!==i)for(var p=d.length;p-- >0;)d[p].destroy()}else e.destroyChildren()}class RForOf extends Rease{constructor({this:t,watch:e,callback:n}){super(),this.watchDeepAll([t,e],Rt,[this,n,[],[]])}}class RFragment extends Rease{constructor(t){super(),this.insert(t.children)}}var wt="http://www.w3.org/",kt={svg:wt+"2000/svg",math:wt+"1998/Math/MathML",xlink:wt+"1999/xlink"};var Nt=function(){function r(t){switch(typeof t){case"string":return t;case"object":var e=[];if(d(t))for(var n,i=0;i<t.length;i++)(n=r(t[i]))&&e.push(n);else if(t)for(var s in t)t[s]&&e.push(s);return e.join(" ");default:return""}}var i=/([A-Z])/g,s={},a=function(n){return t(),(a=function(t){return"-"===t[0]?t:q(e,t=q(s,t)?s[t]:s[t]=t.replace(i,"-$1").toLowerCase())?e[t]:t})(n)};function h(t){switch(typeof t){case"string":return t;case"object":var e=[];if(d(t))for(var n,r=0;r<t.length;r++)(n=h(t[r]))&&e.push(";"===n[n.length-1]?n.slice(0,-1):n);else if(t)for(var i in t)null!=t[i]&&e.push(a(i)+":"+t[i]);return e.join(";");default:return""}}function l(t){return"string"===(t=typeof t)||"number"===t||"boolean"===t}function o(t,e,n){t.classList[n?"add":"remove"](e)}function c(t,e,n){t.style[l(n)?"setProperty":"removeProperty"](e,n)}function f(t,e,n){t[l(n)?"setAttribute":"removeAttribute"](e,n)}function v(t){var e=this.r,n=e.node,i=e._attrs,s=e._class,a=this.k;if(i[a]=t=r(t),n&&(f(n,a,t),s))for(var h in s)o(n,h,s[h])}function p(t){var e=this.r,n=e.node,r=e._attrs,i=e._style,s=this.k;if(r[s]=t=h(t),n&&(f(n,s,t),i))for(var a in i)c(n,a,i[a])}var b=/^on-./;function m(t){var e=this.k,r=this.r,i=this.n,s=r.node,a=r._unevt;a[null==i?this.n=a.length:(a[i](),i)]=s&&t?n(s,e,(function(e){t.call(r,e)})):u}var _=/^class-./;function g(t){var e=this.r,n=e.node,r=e._class,i=this.k;r[i]=t,n&&o(n,i,t)}var y=/^style-./;function x(t){var e=this.r,n=e.node,r=e._style,i=this.k;r[i]=t,n&&c(n,i,t)}var R=/^xlink-./;function w(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&n[l(t)?"setAttributeNS":"removeAttributeNS"](kt.xlink,i,t)}function k(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&(i in n&&function(t,e,n){if(!q(t=N[t]||(N[t]={}),e)){for(var r;(n=W(n))&&!(r=J(n,e)););t[e]=r&&r.set}return t[e]}(n.localName,i,n)?n[i]=t:f(n,i,t))}var N={};function C(t,e){return"-"===t[e]?t.slice(e+1):t[e].toLowerCase()+t.slice(e+1)}function O(t){for(var e=t._unevt;e.length>0;)e.pop()()}return function(t,e,n){var r="style"===n?p:"class"===n||"className"===n&&(n="class")?v:b.test(n)?(n=C(n,2),"_unevt"in t||(t._unevt=[],t.onDestroy(O)),m):_.test(n)?(n=C(n,5),"_class"in t||(t._class={}),g):y.test(n)?(n=a(C(n,5)),"_style"in t||(t._style={}),x):R.test(n)?(n="xlink:"+C(n,5),w):k;t.watchDeep(e,r,{r:t,k:n})}}();function Ct(){return null}var Ot=function(){return{}},Pt=Ct,At=Ct,Dt={documentElement:null,head:null,body:null},Et="_rease_relement_or_rtext",It={style:1,script:1};if("undefined"!=typeof document){Dt=document;var St={html:1,head:1,body:1};function ie(t,e){return Dt.createElementNS(kt.hasOwnProperty(t)?kt[t]:(e&&"foreignObject"!==e.localName?e:Dt.documentElement).namespaceURI,t)}Ot=function(t){var e,n,r=t.findParentOrPrev(RElement,Lt),i=r.parent,s=r.prev;if(s){if(!(n="node"in s?s.node:s.nodes[s.nodes.length-1])||St.hasOwnProperty(n.localName))return Ot(s);if(i=s.findParent(RElement)){for(e=i.node;n&&n.parentNode!==e;)n=n.parentNode;if(!n)return Ot(s)}}else i&&(e=i.node);return{p:e,b:(n?n.nextSibling:e&&e.firstChild)||null}},Pt=function(t,e,n){var r=ie("font",e);return r.style.verticalAlign="inherit",r.appendChild(n&&3===n.nodeType&&!(Et in n)?(n.data=t,n):Dt.createTextNode(t)),r},At=function(t,e,n){if(n)for(;n&&!(Et in n);){if(n.localName===t){for(var r=n.attributes,i=r.length;i-- >0;)n.removeAttribute(r[i].name);return n}n=n.nextSibling}return ie(t,e)}}function $t(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,e){if(t!==e)for(;t=t.parent;){if(t instanceof RElement)return!1;if(t===e)break}return!0}function Mt(t,e,n,r){t[Et]=!0,e?e.insertBefore(t,n):r&&$t(t)}function jt(t){if(Tt(this,t)){var e=Ot(this),n=e.p,r=e.b;Mt(this.node,n,r,!0)}}function Ft(t){$t(t.node)}class Lt extends Rease{}function Wt(t){for(var e=t.nodes,n=e.length;n-- >0;)$t(e[n]);t.nodes.length=0}function Ht(t,e,n){if(e){var r=t.nodes;if(!r.length||r[0].parentElement.namespaceURI!==e.namespaceURI){var i=e.cloneNode(!1);i.innerHTML=t.data,Wt(t);for(var s=i.childNodes,a=s.length;a-- >0;)r[a]=3===s[a].nodeType?Pt(s[a].data,i,s[a]):s[a]}for(var h=r.length;h-- >0;)e.insertBefore(r[h],n),(n=r[h])[Et]=!0}else Wt(t)}function Jt(t){if(this.nodes.length&&Tt(this,t)){var e=Ot(this);Ht(this,e.p,e.b)}}function Ut(t){if(this.data!==(this.data=t=void 0===t?"":""+t))if(t){var e,n,r=this.nodes;if(r.length)e=(n=r[r.length-1]).parentElement,n=n.nextSibling,Wt(this);else{var i=Ot(this);e=i.p,n=i.b}Ht(this,e,n)}else Wt(this)}class RHtml extends Lt{constructor(t){super(),this.data="",this.nodes=[],this.watchDeep(t.this,Ut,this),this.onMove(Jt,this),this.onDestroy(Wt)}}function Bt(t){if(this.data!==(this.data=t=void 0===t?"":""+t)){var e=this.node;if(e){var n=1===e.childNodes.length&&e.childNodes[0];n&&3===n.nodeType?n.data=t:e.textContent=t}}}class RText extends Lt{constructor(t){super();var e=t.this;e&&(e.subscribe||e.then)?(this.data="",this.watchDeep(e,Bt,this)):this.data=void 0===e?"":""+e;var n=Ot(this),r=n.p,i=n.b;(this.node=Pt(this.data,r,i))&&(Mt(this.node,r,i,!1),this.onMove(jt,this),this.onDestroy(Ft))}}function qt(t){for(var e=t.node,n=e.childNodes,r=n.length;r-- >0&&!(Et in(e=n[r]));)1===e.nodeType&&It.hasOwnProperty(e.localName)||$t(e)}class RElement extends Lt{constructor(t){var e;super();var n=t.this,r=u;switch(a(n)?(e=n,n=null):e=n?n.localName:"",this.type=e||(e="template")){case"html":this.node=n||Dt.documentElement;break;case"head":this.node=n||Dt.head;break;case"body":this.node=n||Dt.body;break;default:var i=Ot(this),s=i.p,h=i.b;(this.node=n||At(e,s,h))&&(Mt(this.node,s,h,!1),this.onMove(jt,this),this.onDestroy(Ft),r=qt)}for(var l in this._attrs={},t){if(this.destroyed)break;"this"!==l&&"children"!==l&&Nt(this,t[l],l)}this.insert(t.children),r(this)}}function Zt(t){this.b!==(this.b=t.every((function(t,e){return e>0?!t:t})))&&(this.b?this.r.insert(this.f?this.f.call(void 0!==this.t?this.t:this.r,t[0]):this.c):this.r.destroyChildren())}function zt(t,e,n,r,i){t.watchDeepAll(i,Zt,{r:t,t:e,f:n,c:r,b:!1})}function Gt(t,e,n,r,i){var s=t.findPrevSibling(Kt);zt(t,n,r,i,t._is=s?[e].concat(s._is):[e])}class Kt extends Rease{move(){throw new Error("RIf, RElseIf and RElse is not move")}}class RIf extends Kt{constructor(t){super(),zt(this,t.context,t.callback,t.children,this._is=[t.this])}}class RElseIf extends Kt{constructor(t){super(),Gt(this,t.this,t.context,t.callback,t.children)}}class RElse extends Kt{constructor(t){super(),Gt(this,!0,t.context,t.callback,t.children)}}function Qt(t){var e=t[0],n=t[1];e||(e=this.p),this.r.move(e,n),void 0===this.c||this.r.insert(this.c,this.c=void 0)}class RMove extends Rease{constructor(t){super(),this.watchDeepAll([t.to,t.index],Qt,{r:this,p:this.parent,c:t.children})}}class RSwitch extends Rease{constructor(t){super(),this._is=t.this,this.insert(t.children)}}function Vt(t){this.i=!0,this.b!==(this.b=U(t[0],t[1]))&&(this.b?this.r.insert(this.f?this.f.call(void 0!==this.t?this.t:this.r,t[0]):this.c):this.r.destroyChildren())}function Xt(){var t=this._is,e=this._ctx,n=this.findParent(RSwitch);n!==this._switch&&(this._switch=n,e.i=!1,e.u(),n&&(e.u=this.watchDeepAll([n._is,t],Vt,e)),!e.i&&e.b&&(e.b=!1,this.destroyChildren()))}class RCase extends Rease{constructor(t){super(),this._is=t.this,this._ctx={r:this,t:t.context,f:t.callback,c:t.children,b:!1,i:!1,u:u},this.onMove(Xt,this),Xt.call(this)}}function Yt(t){this.r.destroyChildren(),this.r.destroyed||this.r.insert(this.f?this.f.call(void 0!==this.t?this.t:this.r,t):this.c)}class RWatch extends Rease{constructor(t){super(),this[d(t.this)?"watchDeepAll":"watchDeep"](t.this,Yt,{r:this,t:t.context,f:t.callback,c:t.children})}}
/*@__NO_SIDE_EFFECTS__*/function te(t,e){var n;if(null==t)n=Math.random();else for(var r,i=1/(n=.9973),s=t.length,a=e&&s/e>>>1||1,h=0;h<s;h+=a)13===(r=t.charCodeAt(h))?h-=a-1:(n+=r*n*997.3/(r+n)+i,(n-=0|n)<0&&(n=(0|n)-n));return(6e16*n+4e16).toString(36)}var ee={html:1,head:1,body:1,embed:1,fencedframe:1,iframe:1,object:1,portal:1,svg:1,math:1,canvas:1,script:1,slot:1,template:1},ne={area:1,base:1,br:1,col:1,command:1,embed:1,frame:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1};
/*@__NO_SIDE_EFFECTS__*/
function re(t){var e=[];if(t instanceof RElement){var n=t.type;if(n&&!ee.hasOwnProperty(n)){var r,i,s=t._class,a=t._style,h=t._attrs,l=[],o=[],c=[];if(s)for(r in s)s[r]&&l.push(r);if(a)for(r in a)(i=a[r])&&o.push(r,":",i,";");if(h)for(r in h)if(i=h[r])switch(r){case"class":l.push(i);break;case"style":o.push(i);break;default:c.push(" ",r,"=",JSON.stringify(""+i))}if(l.length&&c.push(" class=",JSON.stringify(l.join(" "))),o.length&&c.push(" style=",JSON.stringify(o.join(""))),e.push("<",n,c.join("")),ne.hasOwnProperty(n))e.push("/>");else{e.push(">");for(var u=t.children,f=0;f<u.length;f++)e.push(re(u[f]));e.push("</",n,">")}}}else if(t instanceof RText)e.push(t.data.replace(/["'&<>]/g,(function(t){switch(t){case'"':t="&quot;";break;case"'":t="&#39;";break;case"&":t="&amp;";break;case"<":t="&lt;";break;case">":t="&gt;"}return t})));else if(t instanceof RHtml)e.push(t.data);else for(var d=t.children,v=0;v<d.length;v++)e.push(re(d[v]));return e.join("")}export{RAwait,RCase,RCatch,RElement,RElse,RElseIf,RForIn,RForOf,RFragment,RHtml,RIf,RMove,RSwitch,RText,RThen,RWatch,Rease,pt as createElement,pt as h,te as hash,R as interval,o as isCatchable,h as isFunction,a as isString,c as isSubscribable,l as isThenable,bt as render,v as then,p as thenSafe,m as thenSafeAll,g as thenable,x as timeout,re as toHTMLString,O as watch,E as watchAll,P as watchDeep,I as watchDeepAll,T as watcher,j as watcherAll,M as watcherDeep,F as watcherDeepAll};
