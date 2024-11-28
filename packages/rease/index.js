/* eslint-disable */
const t=require("@rease/css"),e=require("@rease/listen"),r=require("@rease/signal"),n=require("@rease/tween");function i(t){return"string"==typeof t}function s(t){return"function"==typeof t}function a(t){return null!=t&&"function"==typeof t.then}function o(t){return null!=t&&"function"==typeof t.catch}function c(t){return null!=t&&"function"==typeof t.subscribe}function h(){}var l=Array,u=l.isArray;function f(t,e,r){var n=h;return t.then((function(t){n&&(n(),n=e?p(t,e,(e=null,r)):null)})),function(){n&&(n(),n=e=null)}}function p(t,e,r){return a(t)?f(t,e,r):(e.call(r,t),h)}function d(t){this[0][this[1]]=t,(this[3][0]<1||this[2]&&(this[2]=!1,--this[3][0]<1))&&this[4].call(this[5],this[0])}function v(t,e,r){var n,i=t.length;if(i>0){for(var s=[],a=[t.length],o=l(i),c=0;c<i;c++)o[c]=p(t[c],d,[s,c,!0,a,e,r]);n=function(){for(;o.length>0;)o.pop()()}}else n=h,e.call(r,[]);return n}function b(t){if(this.a){this.v=t;for(var e,r=this.a,n=0;n<r.length;n++)(e=r[n])[0](e[1].call(this.c,t));this.b=!0}}function x(t,e){var r={b:!1,v:null,c:e,a:[]},n=h;function i(){n&&(n(),r.a=n=null)}return t.call(e,(function(t){n&&(n(),n=p(t,b,r))})),i.then=function(t){return x((function(e){r.a&&t&&(r.a.push([e,t]),r.b&&e(t.call(this,r.v)))}),e)},i}function y(t,e){return function(r,n,i){var s;n||(n=h);var a=x((function(e){s=t((function(){e(n())}),0|r)}),i),o=function(){a&&(a(),e(s),a=null)};return o.then=a.then,o}}var R=y(setTimeout,clearTimeout),g=y(setInterval,clearInterval);function m(t){return{subscribe:(e,r)=>f(t,e,r)}}function _(t){if(t!==this){var e=this.s._.p;e&&e.c===this?(e.f=this.f,e.c=this.c):console.error("rease: signal fix error"),this.f.call(this.c,t)}}function w(t,e){var r=h,n=t.subscribe((function(t){var n=r;r=h,n(),c(t)||a(t)&&(t=m(t),1)?r=w(t,e):e.s.set(t)}));return function(){var t=r,e=n;r=n=h,t(),e.unsubscribe?e.unsubscribe():e()}}function O(t){r.batch(this.f,this.c,[t])}function k(t,e,n){var i;if(r.isSignal(t))i=t.subscribe(e,n);else if(c(t)){var s={f:e,c:n,s:null};s.s=r.signal(s);var o=t.subscribe((function(t){s.s.set(t)})),l=s.s.subscribe(_,s);i=function(){var t=l,e=o;l=o=h,t(),e.unsubscribe?e.unsubscribe():e()}}else a(t)?i=f(t,O,{f:e,c:n}):(i=h,r.batch(e,n,[t]));return i}function C(t,e,n){var i;if(c(t)||a(t)&&(t=m(t),1)){var s={f:e,c:n,s:null};s.s=r.signal(s);var o=w(t,s),l=s.s.subscribe(_,s);i=function(){var t=l,e=o;l=o=h,t(),e()}}else i=h,r.batch(e,n,[t]);return i}function N(t){var e=this.d;e.v[this.i]=t,e.l<1?e.s.set(e.v.slice()):this.f&&(this.f=!1,--e.l<1)&&(e.s.set(e.v.slice()),e.u.push(e.s.subscribe(e.f,e.c)))}function P(t){return function(e,n,i){var s,a=e.length;if(a>0){for(var o=l(a),c={l:a,v:l(a),u:o,s:r.signal(o),f:n,c:i},u=0;u<a;u++)o[u]=t(e[u],N,{d:c,i:u,f:!0});s=function(){for(;o.length>0;)o.pop()()}}else s=h,r.batch(n,i,[[]]);return s}}var E=P(k),S=P(C);function A(t){t===this._||this.f.call(this.c,t)}function I(t){this.s.set(t)}class ReaseWatcher{constructor(t,e,r,n){this.deep=r,this.all=n,this._={v:t,s:null,w:e}}subscribe(t,e){var n=this._;return n.s||(n.s=r.signal(n,{prepare:t=>(n.s=t,t.set(n),n.w(n.v,I,n))})),n.s.subscribe(A,{_:n,f:t,c:e})}toJSON(){}}var D=Object,j=D.getPrototypeOf,T=D.keys,F=D.getOwnPropertyDescriptor,$=D.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},M=D.prototype.hasOwnProperty,L=D.hasOwn||function(t,e){return M.call(t,e)};class W{constructor(t,e){this.c=t,this.p=e}}function q(){var t={p:null,n:null};return t.p=t.n=t}function J(t,e,r){var n={p:null,n:null,f:e,c:r};return(n.p=(n.n=t).p).n=n.n.p=n,function(){n&&(n.p.n=n.n,n.n.p=n.p,n.f=h,n=null)}}function B(t){(this.d.f=this.f).call(this.d.c=this.c,t),et(this.r)}function H(t){this.f.call(this.c,t)}function U(t,e,r,n,i){var s=h;if(t._.a0){t._.$1++;var a={f:B,c:{r:t,d:null,f:n||h,c:i}};a.c.d=a;var o=e(r,H,a);if(o!==h){var c=h;s=function(){s!==h&&(s=h,c(),o(),a.f===B&&(a.f=h,et(t)))},c=t.onDestroy(s)}}return s}function Z(t){this.r&&(this.f.call(this.c,t),et(this.r),this.r=null)}function z(t,e,r,n,i){var s=h;if(t._.a0){t._.$1++;var a={r:t,f:n||h,c:i},o=e(r,Z,a);o!==h&&(s=function(){s!==h&&(s=h,o(),a.r&&(et(a.r),a.r=null))})}return s}function G(t,e){if(e>-1){t.children.splice(e,1);for(var r,n=t._.in,i=n.length;i--;)(r=n[i]).i>e&&r.i--}}var K,Q=null;function V(t){var e=Q,r=K;if(Q=null,K=NaN,e){e._.$1++,t.root=e.root,t.parent=e;var n=e.children;r===+r&&r<n.length?((r|=0)<0&&(r=0),(t.prev=(t.next=n[r]).prev)&&(t.prev.next=t),n.splice(r,0,t),t.next.prev=t):(t.next=null,(r=n.push(t)-1)?(t.prev=n[r-1]).next=t:t.prev=null);for(var i,s=e._.in,a=s.length;a--;)(i=s[a]).i<r||i.i++}else t.root=t,t.parent=t.prev=t.next=null}function X(t,e,r,n){if(void 0!==r){var i=t._;if(u(r))for(var o=0;o<r.length&&i.a0;o++)X(t,e,r[o],n);else i.a0&&(r instanceof Rease?r._.a0&&(e.push(r),r.move(t,n.i)):e.push(function(t,e,r){var n,i;if(t instanceof W){var o=t;n=o.c,i=o.p}else s(t)?(n=t,i={}):(n=RText,i={this:t});for(var c,h=!1,l=n;l&&(l!==at&&!(h=l===Rease));l=j(l));Q=e,K=r,h?(c=new n(i)).init():((c=new Rease)._name=n.name,c._ctor=n,a(t=n.call(c,i))?f(t,st,c):st.call(c,t));return c}(r,t,n.i)))}}function Y(){--this._.$2<1&&(this._.$2=NaN,this.parent&&et(this.parent))}function tt(t,e,r){a(e=e.call(r,t))&&t._.a0&&(t._.$2++,f(e,Y,t))}function et(t){--t._.$1<1&&(t._.$1=NaN,function(t){var e=t._,r=e.c2;if(r){e.c2=null;for(var n=r;(n=n.n)!==r&&e.a0;)tt(t,n.f,n.c);Y.call(t)}}(t))}function rt(t,e,r,n){for(var i,s=t._,a=[s.m2,s.m1],o=2;o-- >0;)if(i=a[o])for(var c=i;(c=c.n)!==i&&s.a0;)c.f.call(c.c,e,r,n);var h=s.in,l={i:0};h.push(l);for(var u=t.children;l.i<u.length;l.i++)rt(u[l.i],e,r,n);h.splice(h.lastIndexOf(l),1)}function nt(t,e){for(var r=e;(r=r.n)!==e;)r.f.call(r.c,t)}function it(t,e,r){if(t)for(var n=t,i=e._;(n=n.n)!==t&&i.a0;)n.f.call(n.c,r)}function st(t){this.insert(t),this.init()}var at=Function.prototype;function ot(t,e){return"number"==typeof t&&t<=e?(t|=0)<0&&(t=e+t-1)<0?0:t:e}class Rease{constructor(){this._name=this.constructor.name,this._ctor=this.constructor,this.inited=!1,this.destroyed=!1,this.children=[],this._={a0:!0,c1:!1,$1:1,$2:1,in:[],oc:{},on:{}},V(this)}init(){this._.c1||(this._.c1=this.inited=!0,et(this))}insert(t,e){var r=[];if(this._.a0&&void 0!==t){var n=this._.in,i={i:ot(e,this.children.length)};n.push(i),X(this,r,t,i),n.splice(n.lastIndexOf(i),1)}return r}splice(t,e,r){if(this._.a0&&(void 0!==r||e)){var n=this._.in,i={i:t};n.push(i);for(var s=this.children.slice(t|=0,e+t),a=s.length;a-- >0;)s[a].destroy();return this.insert(r,n.splice(n.lastIndexOf(i),1)[0].i)}return[]}destroy(){var t=this._;if(t.a0){var e=t.$2;t.a0=!1,t.c2&&(t.c2=null),t.$1=t.$2=NaN,this.destroyed=!0,t.d1&&(nt(this,t.d1),t.d1=null),this.destroyChildren();var r=this.parent,n=this.prev,i=this.next;this.parent=this.prev=this.next=null,n&&(n.next=i),i&&(i.prev=n),r&&G(r,r.children.lastIndexOf(this)),t.d2&&(nt(this,t.d2),t.d2=null),e&&r&&et(r)}}destroyChildren(){for(var t=this.children.slice(),e=t.length;e-- >0;)t[e].destroy()}move(t,e){if(this._.a0&&(t?t._.a0:this.parent)){var r=this.parent,n=this.prev,i=this.next;if(e=t?ot(e,t.children.length):0,r){var s=r.children.indexOf(this);if(r===t){var a=r.children.length;if(e<a||(e=a-1),e===s)return!1}G(r,s)}n&&(n.next=i),i&&(i.prev=n),Q=t,K=e,V(this),this._.$1++;var o=this._.$2;return rt(this,this,r,t),this.init(),et(this),r===t?t&&et(t):(o&&r&&et(r),o||t&&et(t)),!0}return!1}on(t,e,r,n){var i=this._;return i.a0?J((n=n?i.oc:i.on)[t]||(n[t]=q()),e,r):h}emit(t,e,r){var n=this._;null!=r?it((r?n.oc:n.on)[t],this,e):(it(n.oc[t],this,e),it(n.on[t],this,e))}emitDeep(t,e){var r=this._;it(r.oc[t],this,e),this.notifyChildren(t,e),it(r.on[t],this,e)}notifyParents(t,e){for(var r=this;r=r.parent;)r.emit(t,e)}notifyChildren(t,e){var r=this._.in,n={i:0};r.push(n);for(var i=this.children;n.i<i.length;n.i++)i[n.i].emitDeep(t,e);r.splice(r.lastIndexOf(n),1)}onMoveCapture(t,e){var r=this._;return r.a0?J(r.m1||(r.m1=q()),t,e):h}onMove(t,e){var r=this._;return r.a0?J(r.m2||(r.m2=q()),t,e):h}onReady(t,e){var r=this._;return r.a0?null!==r.c2?J(r.c2||(r.c2=q()),t,e):(r.$2?tt(this,t,e):t.call(e,this),h):h}onDestroyCapture(t,e){var r=this._;return null!==r.d1?J(r.d1||(r.d1=q()),t,e):(t.call(e,this),h)}onDestroy(t,e){var r=this._;return null!==r.d2?J(r.d2||(r.d2=q()),t,e):(t.call(e,this),h)}await(t,e,r){return z(this,p,t,e,r)}awaitAll(t,e,r){return z(this,v,t,e,r)}watch(t,e,r){return U(this,k,t,e,r)}watchDeep(t,e,r){return U(this,C,t,e,r)}watchAll(t,e,r){return U(this,E,t,e,r)}watchDeepAll(t,e,r){return U(this,S,t,e,r)}findParent(t){for(var e=u(t),r=this;r=r.parent;)if(ct(e,r,t))return r;return null}findFirstChild(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this.children,o=0,c=a.length;o<c;o++)if(ct(i,n=a[o],t)||e&&(!r||!ct(s,n,r))&&(n=n.findFirstChild(t,e,r)))return n;return null}findLastChild(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this.children,o=a.length;o-- >0;)if(ct(i,n=a[o],t)||e&&(!r||!ct(s,n,r))&&(n=n.findLastChild(t,e,r)))return n;return null}findPrevSibling(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this;a=a.prev;)if(ct(i,n=a,t)||e&&(!r||!ct(s,n,r))&&(n=a.findLastChild(t,e,r)))return n;return null}findNextSibling(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this;a=a.next;)if(ct(i,n=a,t)||e&&(!r||!ct(s,n,r))&&(n=a.findFirstChild(t,e,r)))return n;return null}findParentOrPrev(t,e){var r=this.findPrevSibling(e,!0,t);if(r)return{prev:r,parent:null};for(var n,i=u(t),s=u(e),a=this;n=a,a=a.parent;){for(var o=a.children,c=o.indexOf(n);c-- >0;)if(ct(s,r=o[c],e)||!ct(i,r,t)&&(r=r.findLastChild(e,!0,t)))return{prev:r,parent:null};if(ct(i,a,t))return{prev:null,parent:a}}return{prev:null,parent:null}}findParentOrNext(t,e){var r=this.findNextSibling(e,!0,t);if(r)return{next:r,parent:null};for(var n,i=u(t),s=u(e),a=this;n=a,a=a.parent;){for(var o=a.children,c=o.lastIndexOf(n),h=o.length;++c<h;)if(ct(s,r=o[c],e)||!ct(i,r,t)&&(r=r.findFirstChild(e,!0,t)))return{next:r,parent:null};if(ct(i,a,t))return{next:null,parent:a}}return{next:null,parent:null}}}function ct(t,e,r){if(t){for(var n=r.length;n-- >0;)if(e._ctor===r||e instanceof r[n])return!0;return!1}return e._ctor===r||e instanceof r}function ht(t,e,...r){if(e||(e={}),r.length&&(e.children=r.length>1?r:r[0]),i(t))switch(t){case"r-text":t=RText;break;case"r-element":t=RElement;break;case"r-fragment":t=RFragment;break;case"r-watch":t=RWatch;break;case"r-if":t=RIf;break;case"r-else-if":t=RElseIf;break;case"r-else":t=RElse;break;case"r-switch":t=RSwitch;break;case"r-case":t=RCase;break;case"r-await":t=RAwait;break;case"r-then":t=RThen;break;case"r-catch":t=RCatch;break;case"r-for-in":t=RForIn;break;case"r-for-of":t=RForOf;break;case"r-move":t=RMove;break;default:e.this=t,t=RElement}return new W(t,e)}function lt(t,e,r,n){t.destroyed||t.insert(s(e)?e.call(r,n):e)}function ut(t,e){return t._is=("this"in e||(e=t.findPrevSibling(ft)))&&e.this}class ft extends Rease{}class RAwait extends ft{constructor(t){super();var e=this,r=ut(e,t),n=a(r);if(n){function i(){n=!1,e.destroyChildren()}o(r=r.then(i))&&r.catch(i),n&&lt(e,t.children,t.context,e._is)}}}class RThen extends ft{constructor(t){super();var e=this,r=ut(e,t);function n(r){lt(e,t.children,t.context,r)}a(r)?o(r=r.then(n))&&r.catch(h):n(r)}}class RCatch extends ft{constructor(t){super();var e=this,r=ut(e,t);o(r)&&r.catch((function(r){lt(e,t.children,t.context,r)}))}}function pt(t){var e=this[0],r=this[1],n=this[2],i={};if(this[2]=i,t=t[0]){var s,a,o=e.children,c=0;for(var h in t){if(e.destroyed)return;L(t,h)&&(s=t[h],L(n,h)&&$((a=n[h])[0],s)?(s=(i[h]=a)[1],delete n[h]):i[h]=[s,s=e.insert(r(s,h,t),c)],s.length&&(s=o.lastIndexOf(s[s.length-1]))>-1&&(c=s+1))}for(var l=T(n),u=l.length;u-- >0;)for(var f=n[l[u]][1],p=f.length;p-- >0;)f[p].destroy()}else e.destroyChildren()}class RForIn extends Rease{constructor({this:t,watch:e,children:r}){super(),this.watchDeepAll([t,e],pt,[this,r,{}])}}function dt(t,e,r){for(var n=r,i=t.length;n<i;n++)if($(t[n],e))return n;return-1}function vt(t){var e=this[0],r=this[1],n=this[2],i=this[3],s=[],a=[];if(this[2]=s,this[3]=a,t=t[0]){var o,c,h=e.children,l=0,u=0;for(var f in t){if(e.destroyed)return;L(t,f)&&(s.push(c=t[f]),(o=dt(n,c,u))>-1?(a.push(c=i[o]),i[o]=i,u=o+1):a.push(c=e.insert(r(c,""+(o=+f)===f?o:f,t),l)),c.length&&(c=h.lastIndexOf(c[c.length-1]))>-1&&(l=c+1))}for(var p,d=i.length;d-- >0;)if((p=i[d])!==i)for(var v=p.length;v-- >0;)p[v].destroy()}else e.destroyChildren()}class RForOf extends Rease{constructor({this:t,watch:e,children:r}){super(),this.watchDeepAll([t,e],vt,[this,r,[],[]])}}class RFragment extends Rease{constructor(t){super(),this.insert(t.children)}}var bt="http://www.w3.org/",xt={svg:bt+"2000/svg",math:bt+"1998/Math/MathML",xlink:bt+"1999/xlink"};var yt=function(){function r(t){switch(typeof t){case"string":return t;case"object":var e=[];if(u(t))for(var n,i=0;i<t.length;i++)(n=r(t[i]))&&e.push(n);else if(t)for(var s in t)t[s]&&e.push(s);return e.join(" ");default:return""}}var n=/([A-Z])/g,i={},s=function(e){return t._cssInit(),(s=function(e){return"-"===e[0]?e:L(t._cssProperties,e=L(i,e)?i[e]:i[e]=e.replace(n,"-$1").toLowerCase())?t._cssProperties[e]:e})(e)};function a(t){switch(typeof t){case"string":return t;case"object":var e=[];if(u(t))for(var r,n=0;n<t.length;n++)(r=a(t[n]))&&e.push(";"===r[r.length-1]?r.slice(0,-1):r);else if(t)for(var i in t)null!=t[i]&&e.push(s(i)+":"+t[i]);return e.join(";");default:return""}}function o(t){return t==t&&("string"===(t=typeof t)||"number"===t||"boolean"===t)}function c(t,e,r){t.classList[r?"add":"remove"](e)}function l(t,e,r){t.style[o(r)?"setProperty":"removeProperty"](e,r)}function f(t,e,r){t[o(r)?"setAttribute":"removeAttribute"](e,r)}function p(t){var e=this.r,n=e.node,i=e._attrs,s=e._class,a=this.k;if(i[a]=t=r(t),n&&(f(n,a,t),s))for(var o in s)c(n,o,s[o])}function d(t){var e=this.r,r=e.node,n=e._attrs,i=e._style,s=this.k;if(n[s]=t=a(t),r&&(f(r,s,t),i))for(var o in i)l(r,o,i[o])}var v=/^on-./;function b(t){var r=this.k,n=this.r,i=this.n,s=n.node,a=n._unevt;a[null==i?this.n=a.length:(a[i](),i)]=s&&t?e.listen(s,r,(function(e){t.call(n,e)})):h}var x=/^class-./;function y(t){var e=this.r,r=e.node,n=e._class,i=this.k;n[i]=t,r&&c(r,i,t)}var R=/^style-./;function g(t){var e=this.r,r=e.node,n=e._style,i=this.k;n[i]=t,r&&l(r,i,t)}var m=/^xlink-./;function _(t){var e=this.r,r=e.node,n=e._attrs,i=this.k;n[i]=t,r&&r[o(t)?"setAttributeNS":"removeAttributeNS"](xt.xlink,i,t)}function w(t){var e=this.r,r=e.node,n=e._attrs,i=this.k;n[i]=t,r&&(i in r&&function(t,e,r){if(!L(t=O[t]||(O[t]={}),e)){for(var n;(r=j(r))&&!(n=F(r,e)););t[e]=n&&n.set}return t[e]}(r.localName,i,r)?r[i]=t:f(r,i,t))}var O={};function k(t,e){return"-"===t[e]?t.slice(e+1):t[e].toLowerCase()+t.slice(e+1)}function C(t){for(var e=t._unevt;e.length>0;)e.pop()()}return function(t,e,r){var n="style"===r?d:"class"===r||"className"===r&&(r="class")?p:v.test(r)?(r=k(r,2),"_unevt"in t||(t._unevt=[],t.onDestroy(C)),b):x.test(r)?(r=k(r,5),"_class"in t||(t._class={}),y):R.test(r)?(r=s(k(r,5)),"_style"in t||(t._style={}),g):m.test(r)?(r="xlink:"+k(r,5),_):w;t.watchDeep(e,n,{r:t,k:r})}}();function Rt(){return null}var gt=function(){return{}},mt=Rt,_t=Rt,wt=h,Ot=h,kt=h,Ct=h,Nt={documentElement:null,head:null,body:null};function Pt(t){this.data=t=void 0===t?"":""+t;var e=this.node;if(e){var r=1===e.childNodes.length&&e.childNodes[0];r&&3===r.nodeType?r.data=t:e.textContent=t}}class RText extends Rease{constructor({this:t}){super(),t&&(t.subscribe||t.then)?(this.data="",this.watchDeep(t,Pt,this)):this.data=void 0===t?"":""+t;var e=gt(this),r=e.p,n=e.b;(this.node=mt(this.data,r,n))&&(wt(this.node,r,n),this.onMove(Ct,this),this.onDestroy(Ot))}}class RElement extends Rease{constructor({children:t,this:e,...r}){var n;super();var s=h;switch(i(e)?(n=e,e=null):n=e?e.localName:"",this.name=n||(n="template")){case"html":this.node=e||Nt.documentElement;break;case"head":this.node=e||Nt.head;break;case"body":this.node=e||Nt.body;break;default:if(!(this.node=e)){var a=gt(this),o=a.p,c=a.b;(this.node=_t(n,o,c))&&(wt(this.node,o,c),this.onMove(Ct,this),this.onDestroy(Ot))}s=kt}for(var l in this._attrs={},r){if(this.destroyed)break;yt(this,r[l],l)}this.insert(t),s(this)}}if("undefined"!=typeof document){Nt=document;var Et="_rease_relement_or_rtext",St={style:1,script:1},At={html:1,head:1,body:1};function Bt(t){t.parentNode&&t.parentNode.removeChild(t)}var It=[RElement,RText];function Ht(t,e){return Nt.createElementNS(xt.hasOwnProperty(t)?xt[t]:(e&&"foreignObject"!==e.localName?e:Nt.documentElement).namespaceURI,t)}gt=function(t){var e,r,n=t.findParentOrPrev(RElement,It),i=n.parent,s=n.prev;if(s){if(r=s.node,At.hasOwnProperty(r.localName))return gt(s);if(i=s.findParent(RElement)){for(e=i.node;r&&r.parentNode!==e;)r=r.parentNode;if(!r)return gt(s)}}else i&&(e=i.node);return{p:e,b:r}},mt=function(t,e,r){var n=Ht("font",e);return n.style.verticalAlign="inherit",n.appendChild((r=r?r.nextSibling:e&&e.firstChild)&&3===r.nodeType&&!(Et in r)?(r.data=t,r):Nt.createTextNode(t)),n},_t=function(t,e,r){if(r=r?r.nextSibling:e&&e.firstChild)for(var n;r&&!(Et in r);)if(n=r,r=r.nextSibling,1!==n.nodeType)Bt(n);else if(n.localName===t){for(var i=n.attributes,s=i.length;s-- >0;)n.removeAttribute(i[s].name);return n}return Ht(t,e)},wt=function(t,e,r){t[Et]=!0,e?e.insertBefore(t,(r?r.nextSibling:e.firstChild)||null):Bt(t)},Ct=function(t){if(this!==t)for(var e=this;e=e.parent;){if(e instanceof RElement)return;if(e===t)break}var r=gt(this),n=r.p,i=r.b;wt(this.node,n,i)},Ot=function(t){Bt(t.node)},kt=function(t){for(var e=t.node,r=e.childNodes,n=r.length;n-- >0&&!(Et in(e=r[n]));)1===e.nodeType&&St.hasOwnProperty(e.localName)||Bt(e)}}function Dt(t){this.b!==(this.b=t.every((function(t,e){return e>0?!t:t})))&&(this.b?this.r.insert(s(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function jt(t,e,r,n){t.watchDeepAll(n,Dt,{r:t,t:e,b:!1,c:r})}function Tt(t,e,r,n){var i=t.findPrevSibling(Ft);jt(t,r,n,t._is=i?[e].concat(i._is):[e])}class Ft extends Rease{move(){throw new Error("RIf, RElseIf and RElse is not move")}}class RIf extends Ft{constructor(t){super(),jt(this,t.context,t.children,this._is=[t.this])}}class RElseIf extends Ft{constructor(t){super(),Tt(this,t.this,t.context,t.children)}}class RElse extends Ft{constructor(t){super(),Tt(this,!0,t.context,t.children)}}function $t(t){var e=t[0],r=t[1];e||(e=this.p),this.r.move(e,r),void 0===this.c||this.r.insert(this.c,this.c=void 0)}class RMove extends Rease{constructor(t){super(),this.watchDeepAll([t.to,t.index],$t,{r:this,p:this.parent,c:t.children})}}class RSwitch extends Rease{constructor(t){super(),this._is=t.this,this.insert(t.children)}}function Mt(t){this.i=!0,this.b!==(this.b=$(t[0],t[1]))&&(this.b?this.r.insert(s(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function Lt(){var t=this._is,e=this._ctx,r=this.findParent(RSwitch);r!==this._switch&&(this._switch=r,e.i=!1,e.u(),r&&(e.u=this.watchDeepAll([r._is,t],Mt,e)),!e.i&&e.b&&(e.b=!1,this.destroyChildren()))}class RCase extends Rease{constructor(t){super(),this._is=t.this,this._ctx={r:this,t:t.context,b:!1,c:t.children,i:!1,u:h},this.onMove(Lt,this),Lt.call(this)}}function Wt(t){var e=this.r,r=this.t,n=this.c;e.destroyChildren(),e.destroyed||e.insert(s(n)?n.call(r,t):n)}class RWatch extends Rease{constructor(t){super(),this[u(t.this)?"watchDeepAll":"watchDeep"](t.this,Wt,{r:this,t:t.context,c:t.children})}}var qt={html:1,head:1,body:1,embed:1,fencedframe:1,iframe:1,object:1,portal:1,svg:1,math:1,canvas:1,script:1,button:1,datalist:1,input:1,meter:1,optgroup:1,option:1,progress:1,select:1,textarea:1,slot:1,template:1},Jt={area:1,base:1,br:1,col:1,embed:1,frame:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1};exports.RAwait=RAwait,exports.RCase=RCase,exports.RCatch=RCatch,exports.RElement=RElement,exports.RElse=RElse,exports.RElseIf=RElseIf,exports.RForIn=RForIn,exports.RForOf=RForOf,exports.RFragment=RFragment,exports.RIf=RIf,exports.RMove=RMove,exports.RSwitch=RSwitch,exports.RText=RText,exports.RThen=RThen,exports.RWatch=RWatch,exports.Rease=Rease,exports.createElement=ht,exports.h=ht,exports.hash=function(t,e){var r;if(null==t)r=Math.random();else{for(var n,i=1/(r=.9973),s=t.length,a=e&&s/99>>>1||1,o=0;o<s;o+=a)13===(n=t.charCodeAt(o))?o-=a-1:(r+=n*r*997.3/(n+r)+i,r-=0|r);r<0&&(r=(0|r)-r)}return(5e16*r+4e16).toString(36)},exports.interval=g,exports.isCatchable=o,exports.isFunction=s,exports.isString=i,exports.isSubscribable=c,exports.isThenable=a,exports.render=function(t,e){var r=new RElement({this:t,children:e});return r.init(),r},exports.then=f,exports.thenSafe=p,exports.thenSafeAll=v,exports.thenable=x,exports.timeout=R,exports.toHTMLString=function t(e){var r=[];if(e instanceof RText)r.push(e.data.replace(/["'&<>]/g,(function(t){switch(t){case'"':t="&quot;";break;case"'":t="&#39;";break;case"&":t="&amp;";break;case"<":t="&lt;";break;case">":t="&gt;"}return t})));else if(e instanceof RElement){var n=e.name;if(n&&!qt.hasOwnProperty(n)){var i,s,a=e._class,o=e._style,c=e._attrs,h=[],l=[],u=[];if(a)for(i in a)a[i]&&h.push(i);if(o)for(i in o)(s=o[i])&&l.push(i,":",s,";");if(c)for(i in c)if(s=c[i])switch(i){case"class":h.push(s);break;case"style":l.push(s);break;default:u.push(" ",i,"=",JSON.stringify(""+s))}if(h.length&&u.push(" class=",JSON.stringify(h.join(" "))),l.length&&u.push(" style=",JSON.stringify(l.join(""))),r.push("<",n,u.join("")),Jt.hasOwnProperty(n))r.push("/>");else{r.push(">");for(var f=e.children,p=0;p<f.length;p++)r.push(t(f[p]));r.push("</",n,">")}}}else for(var d=e.children,v=0;v<d.length;v++)r.push(t(d[v]));return r.join("")},exports.watch=k,exports.watchAll=E,exports.watchDeep=C,exports.watchDeepAll=S,exports.watcher=function(t){return new ReaseWatcher(t,k,!1,!1)},exports.watcherAll=function(t){return new ReaseWatcher(t,E,!1,!0)},exports.watcherDeep=function(t){return new ReaseWatcher(t,C,!0,!1)},exports.watcherDeepAll=function(t){return new ReaseWatcher(t,S,!0,!0)},Object.keys(t).forEach((function(e){"default"===e||Object.prototype.hasOwnProperty.call(exports,e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})})),Object.keys(e).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return e[t]}})})),Object.keys(r).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}})})),Object.keys(n).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return n[t]}})}));
