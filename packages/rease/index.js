/* eslint-disable */
const t=require("@rease/css"),e=require("@rease/listen"),n=require("@rease/signal"),r=require("@rease/tween");function i(t){return"string"==typeof t}function s(t){return"function"==typeof t}function a(t){return null!=t&&"function"==typeof t.then}function o(t){return null!=t&&"function"==typeof t.catch}function h(t){return null!=t&&"function"==typeof t.subscribe}function l(){}var c=Array,u=c.isArray;function f(t,e,n){var r=l;return t.then((function(t){r&&(r(),r=e?d(t,e,(e=null,n)):null)})),function(){r&&(r(),r=e=null)}}function d(t,e,n){return a(t)?f(t,e,n):(e.call(n,t),l)}function p(t){this[0][this[1]]=t,(this[3][0]<1||this[2]&&(this[2]=!1,--this[3][0]<1))&&this[4].call(this[5],this[0])}function v(t,e,n){var r,i=t.length;if(i>0){for(var s=[],a=[t.length],o=c(i),h=0;h<i;h++)o[h]=d(t[h],p,[s,h,!0,a,e,n]);r=function(){for(;o.length>0;)o.pop()()}}else r=l,e.call(n,[]);return r}function b(t){if(this.a){this.v=t;for(var e,n=this.a,r=0;r<n.length;r++)(e=n[r])[0](e[1].call(this.c,t));this.b=!0}}function x(t,e){var n={b:!1,v:null,c:e,a:[]},r=l;function i(){r&&(r(),n.a=r=null)}return t.call(e,(function(t){r&&(r(),r=d(t,b,n))})),i.then=function(t){return x((function(e){n.a&&t&&(n.a.push([e,t]),n.b&&e(t.call(this,n.v)))}),e)},i}function y(t,e){return function(n,r,i){var s;r||(r=l);var a=x((function(e){s=t((function(){e(r.call(i))}),0|n)}),i),o=function(){a&&(a(),e(s),a=null)};return o.then=a.then,o}}var g=y(setTimeout,clearTimeout),m=y(setInterval,clearInterval);function _(t){return{subscribe:(e,n)=>f(t,e,n)}}function R(t){t!==this&&this.f.call(this.c,t)}function w(t,e){var n=l,r=t.subscribe((function(t){var r=n;n=l,r(),h(t)||a(t)&&(t=_(t),1)?n=w(t,e):e.s.set(t)}));return function(){var t=n,e=r;n=r=l,t(),e.unsubscribe?e.unsubscribe():e()}}function O(t){n.batch(this.f,this.c,[t])}function k(t,e,r){var i;if(n.isSignal(t))i=t.subscribe(e,r);else if(h(t)){var s={f:e,c:r,s:null};s.s=n.signal(s);var o=t.subscribe((function(t){s.s.set(t)})),c=s.s.subscribe(R,s);i=function(){var t=c,e=o;c=o=l,t(),e.unsubscribe?e.unsubscribe():e()}}else a(t)?i=f(t,O,{f:e,c:r}):(i=l,n.batch(e,r,[t]));return i}function N(t,e,r){var i;if(h(t)||a(t)&&(t=_(t),1)){var s={f:e,c:r,s:null};s.s=n.signal(s);var o=w(t,s),c=s.s.subscribe(R,s);i=function(){var t=c,e=o;c=o=l,t(),e()}}else i=l,n.batch(e,r,[t]);return i}function C(t){var e=this.d;e.v[this.i]=t,e.l<1?e.s.set(e.v.slice()):this.f&&(this.f=!1,--e.l<1)&&(e.s.set(e.v.slice()),e.u.push(e.s.subscribe(e.f,e.c)))}function P(t){return function(e,r,i){var s,a=e.length;if(a>0){for(var o=c(a),h={l:a,v:c(a),u:o,s:n.signal(o),f:r,c:i},u=0;u<a;u++)o[u]=t(e[u],C,{d:h,i:u,f:!0});s=function(){for(;o.length>0;)o.pop()()}}else s=l,n.batch(r,i,[[]]);return s}}var E=P(k),S=P(N);function A(t){t===this._||this.f.call(this.c,t)}function D(t){this.s.set(this.m?this.m.call(this.t,t):t)}class ReaseWatcher{constructor(t,e,n,r,i,s){this.deep=i,this.all=s,this._={v:t,m:e,t:n,s:null,w:r}}subscribe(t,e){var r=this._;return r.s||(r.s=n.signal(r,{prepare:t=>(r.s=t,t.set(r),r.w(r.v,D,r))})),r.s.subscribe(A,{_:r,f:t,c:e})}toJSON(){}}var j=Object,I=j.getPrototypeOf,T=j.keys,$=j.getOwnPropertyDescriptor,M=j.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},F=j.prototype.hasOwnProperty,L=j.hasOwn||function(t,e){return F.call(t,e)};class W{constructor(t,e){this.c=t,this.p=e}}function H(){var t={p:null,n:null};return t.p=t.n=t}function q(t,e,n){var r={p:null,n:null,f:e,c:n};return(r.p=(r.n=t).p).n=r.n.p=r,function(){r&&(r.p.n=r.n,r.n.p=r.p,r.f=l,r=null)}}function J(t){(this.d.f=this.f).call(this.d.c=this.c,t),et(this.r)}function U(t){this.f.call(this.c,t)}function B(t,e,n,r,i){var s=l;if(t._.a0){t._.$1++;var a={f:J,c:{r:t,d:null,f:r||l,c:i}};a.c.d=a;var o=e(n,U,a);if(o!==l){var h=l;s=function(){s!==l&&(s=l,h(),o(),a.f===J&&(a.f=l,et(t)))},h=t.onDestroy(s)}}return s}function Z(t){this.r&&(this.f.call(this.c,t),et(this.r),this.r=null)}function z(t,e,n,r,i){var s=l;if(t._.a0){t._.$1++;var a={r:t,f:r||l,c:i},o=e(n,Z,a);o!==l&&(s=function(){s!==l&&(s=l,o(),a.r&&(et(a.r),a.r=null))})}return s}function G(t,e){if(e>-1){t.children.splice(e,1);for(var n,r=t._.in,i=r.length;i--;)(n=r[i]).i>e&&n.i--}}var K,Q=null;function V(t){var e=Q,n=K;if(Q=null,K=NaN,e){e._.$1++,t.root=e.root,t.parent=e;var r=e.children;n===+n&&n<r.length?((n|=0)<0&&(n=0),(t.prev=(t.next=r[n]).prev)&&(t.prev.next=t),r.splice(n,0,t),t.next.prev=t):(t.next=null,(n=r.push(t)-1)?(t.prev=r[n-1]).next=t:t.prev=null);for(var i,s=e._.in,a=s.length;a--;)(i=s[a]).i<n||i.i++}else t.root=t,t.parent=t.prev=t.next=null}function X(t,e,n,r){if(void 0!==n){var i=t._;if(u(n))for(var o=0;o<n.length&&i.a0;o++)X(t,e,n[o],r);else i.a0&&(n instanceof Rease?n._.a0&&(e.push(n),n.move(t,r.i)):e.push(function(t,e,n){var r,i;if(t instanceof W){var o=t;r=o.c,i=o.p}else s(t)?(r=t,i={}):(r=RText,i={this:t});for(var h,l=!1,c=r;c&&(c!==at&&!(l=c===Rease));c=I(c));Q=e,K=n,l?(h=new r(i)).init():((h=new Rease)._name=r.name,h._ctor=r,a(t=r.call(h,i))?f(t,st,h):st.call(h,t));return h}(n,t,r.i)))}}function Y(){--this._.$2<1&&(this._.$2=NaN,this.parent&&et(this.parent))}function tt(t,e,n){a(e=e.call(n,t))&&t._.a0&&(t._.$2++,f(e,Y,t))}function et(t){--t._.$1<1&&(t._.$1=NaN,function(t){var e=t._,n=e.c2;if(n){e.c2=null;for(var r=n;(r=r.n)!==n&&e.a0;)tt(t,r.f,r.c);Y.call(t)}}(t))}function nt(t,e,n,r,i){for(var s,a=t._,o=[a.m2,a.m1],h=2;h-- >0;)if(s=o[h])for(var l=s;(l=l.n)!==s&&a.a0;)l.f.call(l.c,e,n,r,i);var c=a.in,u={i:0};c.push(u);for(var f=t.children;u.i<f.length;u.i++)nt(f[u.i],e,n,r,i);c.splice(c.lastIndexOf(u),1)}function rt(t,e){for(var n=e;(n=n.n)!==e;)n.f.call(n.c,t)}function it(t,e,n){if(t)for(var r=t,i=e._;(r=r.n)!==t&&i.a0;)r.f.call(r.c,n)}function st(t){this.insert(t),this.init()}var at=Function.prototype;function ot(t,e){return"number"==typeof t&&t<=e?(t|=0)<0&&(t=e+t-1)<0?0:t:e}class Rease{constructor(){this._name=this.constructor.name,this._ctor=this.constructor,this.inited=!1,this.destroyed=!1,this.children=[],this._={a0:!0,c1:!1,$1:1,$2:1,in:[],e1:{},e2:{}},V(this)}init(){this._.c1||(this._.c1=this.inited=!0,et(this))}insert(t,e){var n=[];if(this._.a0&&void 0!==t){var r=this._.in,i={i:ot(e,this.children.length)};r.push(i),X(this,n,t,i),r.splice(r.lastIndexOf(i),1)}return n}splice(t,e,n){if(this._.a0&&(void 0!==n||e)){var r=this._.in,i={i:t};r.push(i);for(var s=this.children.slice(t|=0,e+t),a=s.length;a-- >0;)s[a].destroy();return this.insert(n,r.splice(r.lastIndexOf(i),1)[0].i)}return[]}destroy(){var t=this._;if(t.a0){var e=t.$2;t.a0=!1,t.c2&&(t.c2=null),t.$1=t.$2=NaN,this.destroyed=!0,t.d1&&(rt(this,t.d1),t.d1=null),this.destroyChildren();var n=this.parent,r=this.prev,i=this.next;this.parent=this.prev=this.next=null,r&&(r.next=i),i&&(i.prev=r),n&&G(n,n.children.lastIndexOf(this)),t.d2&&(rt(this,t.d2),t.d2=null),e&&n&&et(n)}}destroyChildren(){for(var t=this.children.slice(),e=t.length;e-- >0;)t[e].destroy()}move(t,e){if(this._.a0&&(t?t._.a0:this.parent)){var n=this.parent,r=this.prev,i=this.next;if(e=t?ot(e,t.children.length):0,n){var s=n.children.indexOf(this);if(n===t){var a=n.children.length;if(e<a||(e=a-1),e===s)return!1}G(n,s)}r&&(r.next=i),i&&(i.prev=r),Q=t,K=e,V(this),this._.$1++;var o=this._.$2;return nt(this,this,n,t,e),this.init(),et(this),n===t?t&&et(t):(o&&n&&et(n),o||t&&et(t)),!0}return!1}on(t,e,n,r){var i=this._;return i.a0?q((r=r?i.e1:i.e2)[t]||(r[t]=H()),e,n):l}emit(t,e,n){var r=this._;null!=n?it((n?r.e1:r.e2)[t],this,e):(it(r.e1[t],this,e),it(r.e2[t],this,e))}emitDeep(t,e){var n=this._;it(n.e1[t],this,e),this.notifyChildren(t,e),it(n.e2[t],this,e)}notifyParents(t,e){for(var n=this;n=n.parent;)n.emit(t,e)}notifyChildren(t,e){var n=this._.in,r={i:0};n.push(r);for(var i=this.children;r.i<i.length;r.i++)i[r.i].emitDeep(t,e);n.splice(n.lastIndexOf(r),1)}onMoveCapture(t,e){var n=this._;return n.a0?q(n.m1||(n.m1=H()),t,e):l}onMove(t,e){var n=this._;return n.a0?q(n.m2||(n.m2=H()),t,e):l}onReady(t,e){var n=this._;return n.a0?null!==n.c2?q(n.c2||(n.c2=H()),t,e):(n.$2?tt(this,t,e):t.call(e,this),l):l}onDestroyCapture(t,e){var n=this._;return null!==n.d1?q(n.d1||(n.d1=H()),t,e):(t.call(e,this),l)}onDestroy(t,e){var n=this._;return null!==n.d2?q(n.d2||(n.d2=H()),t,e):(t.call(e,this),l)}await(t,e,n){return z(this,d,t,e,n)}awaitAll(t,e,n){return z(this,v,t,e,n)}watch(t,e,n){return B(this,k,t,e,n)}watchDeep(t,e,n){return B(this,N,t,e,n)}watchAll(t,e,n){return B(this,E,t,e,n)}watchDeepAll(t,e,n){return B(this,S,t,e,n)}findParent(t){for(var e=u(t),n=this;n=n.parent;)if(ht(e,n,t))return n;return null}findFirstChild(t,e,n){for(var r,i=u(t),s=n&&u(n),a=this.children,o=0,h=a.length;o<h;o++)if(ht(i,r=a[o],t)||e&&(!n||!ht(s,r,n))&&(r=r.findFirstChild(t,e,n)))return r;return null}findLastChild(t,e,n){for(var r,i=u(t),s=n&&u(n),a=this.children,o=a.length;o-- >0;)if(ht(i,r=a[o],t)||e&&(!n||!ht(s,r,n))&&(r=r.findLastChild(t,e,n)))return r;return null}findPrevSibling(t,e,n){for(var r,i=u(t),s=n&&u(n),a=this;a=a.prev;)if(ht(i,r=a,t)||e&&(!n||!ht(s,r,n))&&(r=a.findLastChild(t,e,n)))return r;return null}findNextSibling(t,e,n){for(var r,i=u(t),s=n&&u(n),a=this;a=a.next;)if(ht(i,r=a,t)||e&&(!n||!ht(s,r,n))&&(r=a.findFirstChild(t,e,n)))return r;return null}findParentOrPrev(t,e){var n=this.findPrevSibling(e,!0,t);if(n)return{prev:n,parent:null};for(var r,i=u(t),s=u(e),a=this;r=a,a=a.parent;){for(var o=a.children,h=o.indexOf(r);h-- >0;)if(ht(s,n=o[h],e)||!ht(i,n,t)&&(n=n.findLastChild(e,!0,t)))return{prev:n,parent:null};if(ht(i,a,t))return{prev:null,parent:a}}return{prev:null,parent:null}}findParentOrNext(t,e){var n=this.findNextSibling(e,!0,t);if(n)return{next:n,parent:null};for(var r,i=u(t),s=u(e),a=this;r=a,a=a.parent;){for(var o=a.children,h=o.lastIndexOf(r),l=o.length;++h<l;)if(ht(s,n=o[h],e)||!ht(i,n,t)&&(n=n.findFirstChild(e,!0,t)))return{next:n,parent:null};if(ht(i,a,t))return{next:null,parent:a}}return{next:null,parent:null}}}function ht(t,e,n){if(t){for(var r=n.length;r-- >0;)if(e._ctor===n||e instanceof n[r])return!0;return!1}return e._ctor===n||e instanceof n}function lt(t,e,...n){return e||(e={}),n.length&&(e.children=n.length>1?n:n[0]),i(t)&&(e.this=t,t=RElement),new W(t,e)}function ct(t,e,n,r,i){t.destroyed||t.insert(n?n.call(void 0!==r?r:t,i):e)}function ut(t,e){return t._is="this"in e?e.this:(e=t.findPrevSibling(ft))&&e._is}class ft extends Rease{}function dt(t){var e=this[0],n=this[1],r=this[2],i={};if(this[2]=i,t=t[0]){var s,a,o=e.children,h=0;for(var l in t){if(e.destroyed)return;L(t,l)&&(s=t[l],L(r,l)&&M((a=r[l])[0],s)?(s=(i[l]=a)[1],delete r[l]):i[l]=[s,s=e.insert(n(s,l,t),h)],s.length&&(s=o.lastIndexOf(s[s.length-1]))>-1&&(h=s+1))}for(var c=T(r),u=c.length;u-- >0;)for(var f=r[c[u]][1],d=f.length;d-- >0;)f[d].destroy()}else e.destroyChildren()}function pt(t,e,n){for(var r=n,i=t.length;r<i;r++)if(M(t[r],e))return r;return-1}function vt(t){var e=this[0],n=this[1],r=this[2],i=this[3],s=[],a=[];if(this[2]=s,this[3]=a,t=t[0]){var o,h,l=e.children,c=0,u=0;for(var f in t){if(e.destroyed)return;L(t,f)&&(s.push(h=t[f]),(o=pt(r,h,u))>-1?(a.push(h=i[o]),i[o]=i,u=o+1):a.push(h=e.insert(n(h,""+(o=+f)===f?o:f,t),c)),h.length&&(h=l.lastIndexOf(h[h.length-1]))>-1&&(c=h+1))}for(var d,p=i.length;p-- >0;)if((d=i[p])!==i)for(var v=d.length;v-- >0;)d[v].destroy()}else e.destroyChildren()}var bt="http://www.w3.org/",xt={svg:bt+"2000/svg",math:bt+"1998/Math/MathML",xlink:bt+"1999/xlink"};var yt=function(){function n(t){switch(typeof t){case"string":return t;case"object":var e=[];if(u(t))for(var r,i=0;i<t.length;i++)(r=n(t[i]))&&e.push(r);else if(t)for(var s in t)t[s]&&e.push(s);return e.join(" ");default:return""}}var r=/([A-Z])/g,i={},s=function(e){return t._cssInit(),(s=function(e){return"-"===e[0]?e:L(t._cssProperties,e=L(i,e)?i[e]:i[e]=e.replace(r,"-$1").toLowerCase())?t._cssProperties[e]:e})(e)};function a(t){switch(typeof t){case"string":return t;case"object":var e=[];if(u(t))for(var n,r=0;r<t.length;r++)(n=a(t[r]))&&e.push(";"===n[n.length-1]?n.slice(0,-1):n);else if(t)for(var i in t)null!=t[i]&&e.push(s(i)+":"+t[i]);return e.join(";");default:return""}}function o(t){return"string"===(t=typeof t)||"number"===t||"boolean"===t}function h(t,e,n){t.classList[n?"add":"remove"](e)}function c(t,e,n){t.style[o(n)?"setProperty":"removeProperty"](e,n)}function f(t,e,n){t[o(n)?"setAttribute":"removeAttribute"](e,n)}function d(t){var e=this.r,r=e.node,i=e._attrs,s=e._class,a=this.k;if(i[a]=t=n(t),r&&(f(r,a,t),s))for(var o in s)h(r,o,s[o])}function p(t){var e=this.r,n=e.node,r=e._attrs,i=e._style,s=this.k;if(r[s]=t=a(t),n&&(f(n,s,t),i))for(var o in i)c(n,o,i[o])}var v=/^on-./;function b(t){var n=this.k,r=this.r,i=this.n,s=r.node,a=r._unevt;a[null==i?this.n=a.length:(a[i](),i)]=s&&t?e.listen(s,n,(function(e){t.call(r,e)})):l}var x=/^class-./;function y(t){var e=this.r,n=e.node,r=e._class,i=this.k;r[i]=t,n&&h(n,i,t)}var g=/^style-./;function m(t){var e=this.r,n=e.node,r=e._style,i=this.k;r[i]=t,n&&c(n,i,t)}var _=/^xlink-./;function R(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&n[o(t)?"setAttributeNS":"removeAttributeNS"](xt.xlink,i,t)}function w(t){var e=this.r,n=e.node,r=e._attrs,i=this.k;r[i]=t,n&&(i in n&&function(t,e,n){if(!L(t=O[t]||(O[t]={}),e)){for(var r;(n=I(n))&&!(r=$(n,e)););t[e]=r&&r.set}return t[e]}(n.localName,i,n)?n[i]=t:f(n,i,t))}var O={};function k(t,e){return"-"===t[e]?t.slice(e+1):t[e].toLowerCase()+t.slice(e+1)}function N(t){for(var e=t._unevt;e.length>0;)e.pop()()}return function(t,e,n){var r="style"===n?p:"class"===n||"className"===n&&(n="class")?d:v.test(n)?(n=k(n,2),"_unevt"in t||(t._unevt=[],t.onDestroy(N)),b):x.test(n)?(n=k(n,5),"_class"in t||(t._class={}),y):g.test(n)?(n=s(k(n,5)),"_style"in t||(t._style={}),m):_.test(n)?(n="xlink:"+k(n,5),R):w;t.watchDeep(e,r,{r:t,k:n})}}();function gt(){return null}var mt=function(){return{}},_t=gt,Rt=gt,wt={documentElement:null,head:null,body:null},Ot="_rease_relement_or_rtext",kt={style:1,script:1};if("undefined"!=typeof document){wt=document;var Nt={html:1,head:1,body:1};function Kt(t,e){return wt.createElementNS(xt.hasOwnProperty(t)?xt[t]:(e&&"foreignObject"!==e.localName?e:wt.documentElement).namespaceURI,t)}mt=function(t){var e,n,r=t.findParentOrPrev(RElement,Dt),i=r.parent,s=r.prev;if(s){if(!(n="node"in s?s.node:s.nodes[s.nodes.length-1])||Nt.hasOwnProperty(n.localName))return mt(s);if(i=s.findParent(RElement)){for(e=i.node;n&&n.parentNode!==e;)n=n.parentNode;if(!n)return mt(s)}}else i&&(e=i.node);return{p:e,b:(n?n.nextSibling:e&&e.firstChild)||null}},_t=function(t,e,n){var r=Kt("font",e);return r.style.verticalAlign="inherit",r.appendChild(n&&3===n.nodeType&&!(Ot in n)?(n.data=t,n):wt.createTextNode(t)),r},Rt=function(t,e,n){if(n)for(;n&&!(Ot in n);){if(n.localName===t){for(var r=n.attributes,i=r.length;i-- >0;)n.removeAttribute(r[i].name);return n}n=n.nextSibling}return Kt(t,e)}}function Ct(t){t.parentNode&&t.parentNode.removeChild(t)}function Pt(t,e){if(t!==e)for(;t=t.parent;){if(t instanceof RElement)return!1;if(t===e)break}return!0}function Et(t,e,n,r){t[Ot]=!0,e?e.insertBefore(t,n):r&&Ct(t)}function St(t){if(Pt(this,t)){var e=mt(this),n=e.p,r=e.b;Et(this.node,n,r,!0)}}function At(t){Ct(t.node)}class Dt extends Rease{}function jt(t){for(var e=t.nodes,n=e.length;n-- >0;)Ct(e[n]);t.nodes.length=0}function It(t,e,n){if(e){var r=t.nodes;if(!r.length||r[0].parentElement.namespaceURI!==e.namespaceURI){var i=e.cloneNode(!1);i.innerHTML=t.data,jt(t);for(var s=i.childNodes,a=s.length;a-- >0;)r[a]=3===s[a].nodeType?_t(s[a].data,i,s[a]):s[a]}for(var o=r.length;o-- >0;)e.insertBefore(r[o],n),(n=r[o])[Ot]=!0}else jt(t)}function Tt(t){if(this.nodes.length&&Pt(this,t)){var e=mt(this);It(this,e.p,e.b)}}function $t(t){if(this.data!==(this.data=t=void 0===t?"":""+t))if(t){var e,n,r=this.nodes;if(r.length)e=(n=r[r.length-1]).parentElement,n=n.nextSibling,jt(this);else{var i=mt(this);e=i.p,n=i.b}It(this,e,n)}else jt(this)}class RHtml extends Dt{constructor(t){super(),this.data="",this.nodes=[],this.watchDeep(t.this,$t,this),this.onMove(Tt,this),this.onDestroy(jt)}}function Mt(t){if(this.data!==(this.data=t=void 0===t?"":""+t)){var e=this.node;if(e){var n=1===e.childNodes.length&&e.childNodes[0];n&&3===n.nodeType?n.data=t:e.textContent=t}}}class RText extends Dt{constructor(t){super();var e=t.this;e&&(e.subscribe||e.then)?(this.data="",this.watchDeep(e,Mt,this)):this.data=void 0===e?"":""+e;var n=mt(this),r=n.p,i=n.b;(this.node=_t(this.data,r,i))&&(Et(this.node,r,i,!1),this.onMove(St,this),this.onDestroy(At))}}function Ft(t){for(var e=t.node,n=e.childNodes,r=n.length;r-- >0&&!(Ot in(e=n[r]));)1===e.nodeType&&kt.hasOwnProperty(e.localName)||Ct(e)}class RElement extends Dt{constructor(t){var e;super();var n=t.this,r=l;switch(i(n)?(e=n,n=null):e=n?n.localName:"",this.type=e||(e="template")){case"html":this.node=n||wt.documentElement;break;case"head":this.node=n||wt.head;break;case"body":this.node=n||wt.body;break;default:var s=mt(this),a=s.p,o=s.b;(this.node=n||Rt(e,a,o))&&(Et(this.node,a,o,!1),this.onMove(St,this),this.onDestroy(At),r=Ft)}for(var h in this._attrs={},t){if(this.destroyed)break;"this"!==h&&"children"!==h&&yt(this,t[h],h)}this.insert(t.children),r(this)}}function Lt(t){this.b!==(this.b=t.every((function(t,e){return e>0?!t:t})))&&(this.b?this.r.insert(this.f?this.f.call(void 0!==this.t?this.t:this.r,t[0]):this.c):this.r.destroyChildren())}function Wt(t,e,n,r,i){t.watchDeepAll(i,Lt,{r:t,t:e,f:n,c:r,b:!1})}function Ht(t,e,n,r,i){var s=t.findPrevSibling(qt);Wt(t,n,r,i,t._is=s?[e].concat(s._is):[e])}class qt extends Rease{move(){throw new Error("RIf, RElseIf and RElse is not move")}}function Jt(t){var e=t[0],n=t[1];e||(e=this.p),this.r.move(e,n),void 0===this.c||this.r.insert(this.c,this.c=void 0)}class RSwitch extends Rease{constructor(t){super(),this._is=t.this,this.insert(t.children)}}function Ut(t){this.i=!0,this.b!==(this.b=M(t[0],t[1]))&&(this.b?this.r.insert(this.f?this.f.call(void 0!==this.t?this.t:this.r,t[0]):this.c):this.r.destroyChildren())}function Bt(){var t=this._is,e=this._ctx,n=this.findParent(RSwitch);n!==this._switch&&(this._switch=n,e.i=!1,e.u(),n&&(e.u=this.watchDeepAll([n._is,t],Ut,e)),!e.i&&e.b&&(e.b=!1,this.destroyChildren()))}function Zt(t){this.r.destroyChildren(),this.r.destroyed||this.r.insert(this.f?this.f.call(void 0!==this.t?this.t:this.r,t):this.c)}var zt={html:1,head:1,body:1,embed:1,fencedframe:1,iframe:1,object:1,portal:1,svg:1,math:1,canvas:1,script:1,slot:1,template:1},Gt={area:1,base:1,br:1,col:1,command:1,embed:1,frame:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1};exports.RAwait=class RAwait extends ft{constructor(t){super();var e=this,n=ut(e,t),r=a(n);if(r){function i(t){return r=!1,e.destroyChildren(),t}e._is=n.then(i),r&&ct(e,t.children,t.callback,t.context,e._is)}}},exports.RCase=class RCase extends Rease{constructor(t){super(),this._is=t.this,this._ctx={r:this,t:t.context,f:t.callback,c:t.children,b:!1,i:!1,u:l},this.onMove(Bt,this),Bt.call(this)}},exports.RCatch=class RCatch extends ft{constructor(t){super();var e=this,n=ut(e,t);o(n)&&(e._is=n.catch((function(n){return ct(e,t.children,t.callback,t.context,n),n})))}},exports.RElement=RElement,exports.RElse=class RElse extends qt{constructor(t){super(),Ht(this,!0,t.context,t.callback,t.children)}},exports.RElseIf=class RElseIf extends qt{constructor(t){super(),Ht(this,t.this,t.context,t.callback,t.children)}},exports.RForIn=class RForIn extends Rease{constructor({this:t,watch:e,callback:n}){super(),this.watchDeepAll([t,e],dt,[this,n,{}])}},exports.RForOf=class RForOf extends Rease{constructor({this:t,watch:e,callback:n}){super(),this.watchDeepAll([t,e],vt,[this,n,[],[]])}},exports.RFragment=class RFragment extends Rease{constructor(t){super(),this.insert(t.children)}},exports.RHtml=RHtml,exports.RIf=class RIf extends qt{constructor(t){super(),Wt(this,t.context,t.callback,t.children,this._is=[t.this])}},exports.RMove=class RMove extends Rease{constructor(t){super(),this.watchDeepAll([t.to,t.index],Jt,{r:this,p:this.parent,c:t.children})}},exports.RSwitch=RSwitch,exports.RText=RText,exports.RThen=class RThen extends ft{constructor(t){super();var e=this,n=ut(e,t);function r(n){return ct(e,t.children,t.callback,t.context,n),n}a(n)?e._is=n.then(r):r(n)}},exports.RWatch=class RWatch extends Rease{constructor(t){super(),this[u(t.this)?"watchDeepAll":"watchDeep"](t.this,Zt,{r:this,t:t.context,f:t.callback,c:t.children})}},exports.Rease=Rease,exports.createElement=lt,exports.h=lt,exports.hash=function(t,e){var n;if(null==t)n=Math.random();else{for(var r,i=1/(n=.9973),s=t.length,a=e&&s/99>>>1||1,o=0;o<s;o+=a)13===(r=t.charCodeAt(o))?o-=a-1:(n+=r*n*997.3/(r+n)+i,n-=0|n);n<0&&(n=(0|n)-n)}return(5e16*n+4e16).toString(36)},exports.interval=m,exports.isCatchable=o,exports.isFunction=s,exports.isString=i,exports.isSubscribable=h,exports.isThenable=a,exports.render=function(t,e){var n=new RElement({this:t,children:e});return n.init(),n},exports.then=f,exports.thenSafe=d,exports.thenSafeAll=v,exports.thenable=x,exports.timeout=g,exports.toHTMLString=function t(e){var n=[];if(e instanceof RElement){var r=e.type;if(r&&!zt.hasOwnProperty(r)){var i,s,a=e._class,o=e._style,h=e._attrs,l=[],c=[],u=[];if(a)for(i in a)a[i]&&l.push(i);if(o)for(i in o)(s=o[i])&&c.push(i,":",s,";");if(h)for(i in h)if(s=h[i])switch(i){case"class":l.push(s);break;case"style":c.push(s);break;default:u.push(" ",i,"=",JSON.stringify(""+s))}if(l.length&&u.push(" class=",JSON.stringify(l.join(" "))),c.length&&u.push(" style=",JSON.stringify(c.join(""))),n.push("<",r,u.join("")),Gt.hasOwnProperty(r))n.push("/>");else{n.push(">");for(var f=e.children,d=0;d<f.length;d++)n.push(t(f[d]));n.push("</",r,">")}}}else if(e instanceof RText)n.push(e.data.replace(/["'&<>]/g,(function(t){switch(t){case'"':t="&quot;";break;case"'":t="&#39;";break;case"&":t="&amp;";break;case"<":t="&lt;";break;case">":t="&gt;"}return t})));else if(e instanceof RHtml)n.push(e.data);else for(var p=e.children,v=0;v<p.length;v++)n.push(t(p[v]));return n.join("")},exports.watch=k,exports.watchAll=E,exports.watchDeep=N,exports.watchDeepAll=S,exports.watcher=function(t,e,n){return new ReaseWatcher(t,e,n,k,!1,!1)},exports.watcherAll=function(t,e,n){return new ReaseWatcher(t,e,n,E,!1,!0)},exports.watcherDeep=function(t,e,n){return new ReaseWatcher(t,e,n,N,!0,!1)},exports.watcherDeepAll=function(t,e,n){return new ReaseWatcher(t,e,n,S,!0,!0)},Object.keys(t).forEach((function(e){"default"===e||Object.prototype.hasOwnProperty.call(exports,e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})})),Object.keys(e).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return e[t]}})})),Object.keys(n).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return n[t]}})})),Object.keys(r).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}})}));
