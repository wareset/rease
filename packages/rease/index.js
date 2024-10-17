/* eslint-disable */
const t=require("@rease/css"),e=require("@rease/listen"),r=require("@rease/signal"),n=require("@rease/tween");function i(t){return"string"==typeof t}function s(t){return"function"==typeof t}function a(t){return null!=t&&"function"==typeof t.then}function o(t){return null!=t&&"function"==typeof t.catch}function c(t){return null!=t&&"function"==typeof t.subscribe}function h(){}var l=Array,u=l.isArray;function f(t,e,r){var n=h;return t.then((function(t){n&&(n(),n=e?p(t,e,(e=null,r)):null)})),function(){n&&(n(),n=e=null)}}function p(t,e,r){return a(t)?f(t,e,r):(e.call(r,t),h)}function d(t){this[0][this[1]]=t,(this[3][0]<1||this[2]&&(this[2]=!1,--this[3][0]<1))&&this[4].call(this[5],this[0])}function v(t,e,r){var n,i=t.length;if(i>0){for(var s=[],a=[t.length],o=l(i),c=0;c<i;c++)o[c]=p(t[c],d,[s,c,!0,a,e,r]);n=function(){for(;o.length>0;)o.pop()()}}else n=h,e.call(r,[]);return n}function b(t){if(this.a){this.v=t;for(var e,r=this.a,n=0;n<r.length;n++)(e=r[n])[0](e[1].call(this.c,t));this.b=!0}}function x(t,e){var r={b:!1,v:null,c:e,a:[]},n=h;function i(){n&&(n(),r.a=n=null)}return t.call(e,(function(t){n&&(n(),n=p(t,b,r))})),i.then=function(t){return x((function(e){r.a&&t&&(r.a.push([e,t]),r.b&&e(t.call(this,r.v)))}),e)},i}function R(t,e){return function(r,n,i){var s;n||(n=h);var a=x((function(e){s=t((function(){e(n())}),0|r)}),i),o=function(){a&&(a(),e(s),a=null)};return o.then=a.then,o}}var g=R(setTimeout,clearTimeout),y=R(setInterval,clearInterval);function m(t){return{subscribe:(e,r)=>f(t,e,r)}}function _(t){if(t!==this){var e=this.s._.p;e&&e.c===this?(e.f=this.f,e.c=this.c):console.error("rease: signal fix error"),this.f.call(this.c,t)}}function w(t,e){var r=h,n=t.subscribe((function(t){r(),r=h,c(t)||a(t)&&(t=m(t),1)?r=w(t,e):e.s.set(t)}));return function(){r(),n.unsubscribe?n.unsubscribe():n(),r=n=h}}function k(t){r.batch(this.f,this.c,[t])}function O(t,e,n){var i;if(r.isSignal(t))i=t.subscribe(e,n);else if(c(t)){var s={f:e,c:n,s:null};s.s=r.signal(s);var o=t.subscribe((function(t){s.s.set(t)})),l=s.s.subscribe(_,s);i=function(){l(),o.unsubscribe?o.unsubscribe():o(),l=o=h}}else a(t)?i=f(t,k,{f:e,c:n}):(i=h,r.batch(e,n,[t]));return i}function C(t,e,n){var i;if(c(t)||a(t)&&(t=m(t),1)){var s={f:e,c:n,s:null};s.s=r.signal(s);var o=w(t,s),l=s.s.subscribe(_,s);i=function(){l(),o(),l=o=h}}else i=h,r.batch(e,n,[t]);return i}function E(t){var e=this.d;e.v[this.i]=t,e.l<1?e.s.set(e.v.slice()):this.f&&(this.f=!1,--e.l<1)&&(e.s.set(e.v.slice()),e.u.push(e.s.subscribe(e.f,e.c)))}function P(t){return function(e,n,i){var s,a=e.length;if(a>0){for(var o=l(a),c={l:a,v:l(a),u:o,s:r.signal(o),f:n,c:i},u=0;u<a;u++)o[u]=t(e[u],E,{d:c,i:u,f:!0});s=function(){for(;o.length>0;)o.pop()()}}else s=h,r.batch(n,i,[[]]);return s}}var N=P(O),S=P(C),A=Object,I=A.getPrototypeOf,j=A.keys,D=A.getOwnPropertyDescriptor,T=A.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e},F=A.prototype.hasOwnProperty,$=A.hasOwn||function(t,e){return F.call(t,e)};class M{constructor(t,e){this.c=t,this.p=e}}function L(){var t={p:null,n:null};return t.p=t.n=t}function q(t,e,r){var n={p:null,n:null,f:e,c:r};return(n.p=(n.n=t).p).n=n.n.p=n,function(){n&&(n.p.n=n.n,n.n.p=n.p,n.f=h,n=null)}}function W(t){(this.d.f=this.f).call(this.d.c=this.c,t),Y(this.r)}function J(t){this.f.call(this.c,t)}function B(t,e,r,n,i){var s=h;if(t._.a0){t._.$1++;var a={f:W,c:{r:t,d:null,f:n||h,c:i}};a.c.d=a;var o=e(r,J,a);if(o!==h){var c=h;s=function(){s!==h&&(s=h,c(),o(),a.f===W&&(a.f=h,Y(t)))},c=t.onDestroy(s)}}return s}function H(t){this.r&&(this.f.call(this.c,t),Y(this.r),this.r=null)}function U(t,e,r,n,i){var s=h;if(t._.a0){t._.$1++;var a={r:t,f:n||h,c:i},o=e(r,H,a);o!==h&&(s=function(){s!==h&&(s=h,o(),a.r&&(Y(a.r),a.r=null))})}return s}function Z(t,e){if(e>-1){t.children.splice(e,1);for(var r,n=t._.in,i=n.length;i--;)(r=n[i]).i>e&&r.i--}}var z,G=null;function K(t){var e=G,r=z;if(G=null,z=NaN,e){e._.$1++,t.root=e.root,t.parent=e;var n=e.children;r===+r&&r<n.length?((r|=0)<0&&(r=0),(t.prev=(t.next=n[r]).prev)&&(t.prev.next=t),n.splice(r,0,t),t.next.prev=t):(t.next=null,(r=n.push(t)-1)?(t.prev=n[r-1]).next=t:t.prev=null);for(var i,s=e._.in,a=s.length;a--;)(i=s[a]).i<r||i.i++}else t.root=t,t.parent=t.prev=t.next=null}function Q(t,e,r,n){if(void 0!==r){var i=t._;if(u(r))for(var o=0;o<r.length&&i.a0;o++)Q(t,e,r[o],n);else i.a0&&(r instanceof Rease?r._.a0&&(e.push(r),r.move(t,n.i)):e.push(function(t,e,r){var n,i;if(t instanceof M){var o=t;n=o.c,i=o.p}else s(t)?(n=t,i={}):(n=RText,i={data:t});for(var c,h=!1,l=n;l&&(l!==it&&!(h=l===Rease));l=I(l));G=e,z=r,h?(c=new n(i)).init():((c=new Rease)._name=n.name,c._ctor=n,a(t=n.call(c,i))?f(t,nt,c):nt.call(c,t));return c}(r,t,n.i)))}}function V(){--this._.$2<1&&(this._.$2=NaN,this.parent&&Y(this.parent))}function X(t,e,r){a(e=e.call(r,t))&&t._.a0&&(t._.$2++,f(e,V,t))}function Y(t){--t._.$1<1&&(t._.$1=NaN,function(t){var e=t._,r=e.c2;if(r){e.c2=null;for(var n=r;(n=n.n)!==r&&e.a0;)X(t,n.f,n.c);V.call(t)}}(t))}function tt(t,e,r,n){for(var i,s=t._,a=[s.m2,s.m1],o=2;o-- >0;)if(i=a[o])for(var c=i;(c=c.n)!==i&&s.a0;)c.f.call(c.c,e,r,n);var h=s.in,l={i:0};h.push(l);for(var u=t.children;l.i<u.length;l.i++)tt(u[l.i],e,r,n);h.splice(h.lastIndexOf(l),1)}function et(t,e){for(var r=e;(r=r.n)!==e;)r.f.call(r.c,t)}function rt(t,e,r){if(t)for(var n=t,i=e._;(n=n.n)!==t&&i.a0;)n.f.call(n.c,r)}function nt(t){this.insert(t),this.init()}var it=Function.prototype;function st(t,e){return"number"==typeof t&&t<=e?(t|=0)<0&&(t=e+t-1)<0?0:t:e}class Rease{constructor(){this._name=this.constructor.name,this._ctor=this.constructor,this.inited=!1,this.destroyed=!1,this.children=[],this._={a0:!0,c1:!1,$1:1,$2:1,in:[],oc:{},on:{}},K(this)}init(){this._.c1||(this._.c1=this.inited=!0,Y(this))}insert(t,e){var r=[];if(this._.a0&&void 0!==t){var n=this._.in,i={i:st(e,this.children.length)};n.push(i),Q(this,r,t,i),n.splice(n.lastIndexOf(i),1)}return r}splice(t,e,r){if(this._.a0&&(void 0!==r||e)){var n=this._.in,i={i:t};n.push(i);for(var s=this.children.slice(t|=0,e+t),a=s.length;a-- >0;)s[a].destroy();return this.insert(r,n.splice(n.lastIndexOf(i),1)[0].i)}return[]}destroy(){var t=this._;if(t.a0){var e=t.$2;t.a0=!1,t.c2&&(t.c2=null),t.$1=t.$2=NaN,this.destroyed=!0,t.d1&&(et(this,t.d1),t.d1=null),this.destroyChildren();var r=this.parent,n=this.prev,i=this.next;this.parent=this.prev=this.next=null,n&&(n.next=i),i&&(i.prev=n),r&&Z(r,r.children.lastIndexOf(this)),t.d2&&(et(this,t.d2),t.d2=null),e&&r&&Y(r)}}destroyChildren(){for(var t=this.children.slice(),e=t.length;e-- >0;)t[e].destroy()}move(t,e){if(this._.a0&&(t?t._.a0:this.parent)){var r=this.parent,n=this.prev,i=this.next;if(e=t?st(e,t.children.length):0,r){var s=r.children.indexOf(this);if(r===t){var a=r.children.length;if(e<a||(e=a-1),e===s)return!1}Z(r,s)}n&&(n.next=i),i&&(i.prev=n),G=t,z=e,K(this),this._.$1++;var o=this._.$2;return tt(this,this,r,t),this.init(),Y(this),r===t?t&&Y(t):(o&&r&&Y(r),o||t&&Y(t)),!0}return!1}on(t,e,r,n){var i=this._;return i.a0?q((n=n?i.oc:i.on)[t]||(n[t]=L()),e,r):h}emit(t,e,r){var n=this._;null!=r?rt((r?n.oc:n.on)[t],this,e):(rt(n.oc[t],this,e),rt(n.on[t],this,e))}emitDeep(t,e){var r=this._;rt(r.oc[t],this,e),this.notifyChildren(t,e),rt(r.on[t],this,e)}notifyParents(t,e){for(var r=this;r=r.parent;)r.emit(t,e)}notifyChildren(t,e){var r=this._.in,n={i:0};r.push(n);for(var i=this.children;n.i<i.length;n.i++)i[n.i].emitDeep(t,e);r.splice(r.lastIndexOf(n),1)}onMoveCapture(t,e){var r=this._;return r.a0?q(r.m1||(r.m1=L()),t,e):h}onMove(t,e){var r=this._;return r.a0?q(r.m2||(r.m2=L()),t,e):h}onReady(t,e){var r=this._;return r.a0?null!==r.c2?q(r.c2||(r.c2=L()),t,e):(r.$2?X(this,t,e):t.call(e,this),h):h}onDestroyCapture(t,e){var r=this._;return null!==r.d1?q(r.d1||(r.d1=L()),t,e):(t.call(e,this),h)}onDestroy(t,e){var r=this._;return null!==r.d2?q(r.d2||(r.d2=L()),t,e):(t.call(e,this),h)}await(t,e,r){return U(this,p,t,e,r)}awaitAll(t,e,r){return U(this,v,t,e,r)}watch(t,e,r){return B(this,O,t,e,r)}watchDeep(t,e,r){return B(this,C,t,e,r)}watchAll(t,e,r){return B(this,N,t,e,r)}watchDeepAll(t,e,r){return B(this,S,t,e,r)}findParent(t){for(var e=u(t),r=this;r=r.parent;)if(at(e,r,t))return r}findFirstChild(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this.children,o=0,c=a.length;o<c;o++)if(at(i,n=a[o],t)||e&&(!r||!at(s,n,r))&&(n=n.findFirstChild(t,e,r)))return n}findLastChild(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this.children,o=a.length;o-- >0;)if(at(i,n=a[o],t)||e&&(!r||!at(s,n,r))&&(n=n.findLastChild(t,e,r)))return n}findPrevSibling(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this;a=a.prev;)if(at(i,n=a,t)||e&&(!r||!at(s,n,r))&&(n=a.findLastChild(t,e,r)))return n}findNextSibling(t,e,r){for(var n,i=u(t),s=r&&u(r),a=this;a=a.next;)if(at(i,n=a,t)||e&&(!r||!at(s,n,r))&&(n=a.findFirstChild(t,e,r)))return n}findParentOrPrev(t,e){var r=this.findPrevSibling(e,!0,t);if(r)return{prev:r};for(var n,i=u(t),s=u(e),a=this;n=a,a=a.parent;){for(var o=a.children,c=o.indexOf(n);c-- >0;)if(at(s,r=o[c],e)||!at(i,r,t)&&(r=r.findLastChild(e,!0,t)))return{prev:r};if(at(i,a,t))return{parent:a}}return{}}findParentOrNext(t,e){var r=this.findNextSibling(e,!0,t);if(r)return{next:r};for(var n,i=u(t),s=u(e),a=this;n=a,a=a.parent;){for(var o=a.children,c=o.lastIndexOf(n),h=o.length;++c<h;)if(at(s,r=o[c],e)||!at(i,r,t)&&(r=r.findFirstChild(e,!0,t)))return{next:r};if(at(i,a,t))return{parent:a}}return{}}}function at(t,e,r){if(t){for(var n=r.length;n--;)if(e._ctor===r||e instanceof r[n])return!0;return!1}return e._ctor===r||e instanceof r}function ot(t,e,...r){if(e||(e={}),r.length&&(e.children=r.length>1?r:r[0]),i(t))switch(t){case"r-text":t=RText;break;case"r-element":t=RElement;break;case"r-fragment":t=RFragment;break;case"r-watch":t=RWatch;break;case"r-if":t=RIf;break;case"r-else-if":t=RElseIf;break;case"r-else":t=RElse;break;case"r-switch":t=RSwitch;break;case"r-case":t=RCase;break;case"r-await":t=RAwait;break;case"r-then":t=RThen;break;case"r-catch":t=RCatch;break;case"r-for-in":t=RForIn;break;case"r-for-of":t=RForOf;break;case"r-move":t=RMove;break;default:e.node=t,t=RElement}return new M(t,e)}function ct(t,e,r,n){t.destroyed||t.insert(s(e)?e.call(r,n):e)}class RAwait extends Rease{constructor({is:t,context:e,children:r}){super();var n=this,i=a(t);if(i){function s(){i=!1,n.destroyChildren()}o(t=t.then(s))&&t.catch(s),i&&ct(n,r,e,t)}}}class RThen extends Rease{constructor({is:t,context:e,children:r}){super();var n=this;function i(t){ct(n,r,e,t)}a(t)?o(t=t.then(i))&&t.catch(h):i(t)}}class RCatch extends Rease{constructor({is:t,context:e,children:r}){super();var n=this;o(t)&&t.catch((function(t){ct(n,r,e,t)}))}}function ht(t){var e=this[0],r=this[1],n=this[2],i={};if(this[2]=i,t=t[0]){var s,a,o=e.children,c=0;for(var h in t){if(e.destroyed)return;$(t,h)&&(s=t[h],$(n,h)&&T((a=n[h])[0],s)?(s=(i[h]=a)[1],delete n[h]):i[h]=[s,s=e.insert(r(s,h,t),c)],s.length&&(s=o.lastIndexOf(s[s.length-1]))>-1&&(c=s+1))}for(var l=j(n),u=l.length;u-- >0;)for(var f=n[l[u]][1],p=f.length;p-- >0;)f[p].destroy()}else e.destroyChildren()}class RForIn extends Rease{constructor({is:t,watch:e,children:r}){super(),this.watchDeepAll([t,e],ht,[this,r,{}])}}function lt(t,e,r){for(var n=r,i=t.length;n<i;n++)if(T(t[n],e))return n;return-1}function ut(t){var e=this[0],r=this[1],n=this[2],i=this[3],s=[],a=[];if(this[2]=s,this[3]=a,t=t[0]){var o,c,h=e.children,l=0,u=0;for(var f in t){if(e.destroyed)return;$(t,f)&&(s.push(c=t[f]),(o=lt(n,c,u))>-1?(a.push(c=i[o]),i[o]=i,u=o+1):a.push(c=e.insert(r(c,""+(o=+f)===f?o:f,t),l)),c.length&&(c=h.lastIndexOf(c[c.length-1]))>-1&&(l=c+1))}for(var p,d=i.length;d-- >0;)if((p=i[d])!==i)for(var v=p.length;v-- >0;)p[v].destroy()}else e.destroyChildren()}class RForOf extends Rease{constructor({is:t,watch:e,children:r}){super(),this.watchDeepAll([t,e],ut,[this,r,[],[]])}}class RFragment extends Rease{constructor({children:t}){super(),this.insert(t)}}var ft="http://www.w3.org/",pt={svg:ft+"2000/svg",math:ft+"1998/Math/MathML",xlink:ft+"1999/xlink"};var dt=function(){function r(t){switch(typeof t){case"string":return t;case"object":var e=[];if(u(t))for(var n,i=0;i<t.length;i++)(n=r(t[i]))&&e.push(n);else if(t)for(var s in t)t[s]&&e.push(s);return e.join(" ");default:return""}}var n=/([A-Z])/g,i={},s=function(e){return t._cssInit(),(s=function(e){return $(t._cssProperties,e=$(i,e)?i[e]:i[e]=e.replace(n,"-$1").toLowerCase())?t._cssProperties[e]:e})(e)};function a(t){switch(typeof t){case"string":return t;case"object":var e=[];if(u(t))for(var r,n=0;n<t.length;n++)(r=a(t[n]))&&e.push(";"===r[r.length-1]?r.slice(0,-1):r);else if(t)for(var i in t)null!=t[i]&&e.push(s(i)+":"+t[i]);return e.join(";");default:return""}}function o(t){return t==t&&""!==t&&("string"===(t=typeof t)||"number"===t||"boolean"===t)}function c(t,e,r){t.classList[r?"add":"remove"](e)}function l(t,e,r){t.style[o(r)?"setProperty":"removeProperty"](e,r,"important")}function f(t,e,r){t[o(r)?"setAttribute":"removeAttribute"](e,r)}function p(t){var e=this.r,n=e.node,i=e._attrs,s=e._class,a=this.k;if(i[a]=t=r(t),n&&(f(n,a,t),s))for(var o in s)c(n,o,s[o])}function d(t){var e=this.r,r=e.node,n=e._attrs,i=e._style,s=this.k;if(n[s]=t=a(t),r&&(f(r,s,t),i))for(var o in i)l(r,o,i[o])}var v=/^on-./;function b(t){var r=this.k,n=this.r,i=this.n,s=n.node,a=n._unevt;a[null==i?this.n=a.length:(a[i](),i)]=s&&t?e.listen(s,r,(function(e){t.call(n,e)})):h}var x=/^class-./;function R(t){var e=this.r,r=e.node,n=e._class,i=this.k;n[i]=t,r&&c(r,i,t)}var g=/^style-./;function y(t){var e=this.r,r=e.node,n=e._style,i=this.k;n[i]=t,r&&l(r,i,t)}var m=/^xlink-./;function _(t){var e=this.r,r=e.node,n=e._attrs,i=this.k;n[i]=t,r&&r[o(t)?"setAttributeNS":"removeAttributeNS"](pt.xlink,i,t)}function w(t){var e=this.r,r=e.node,n=e._attrs,i=this.k;n[i]=t,r&&(i in r&&function(t,e,r){if(!$(t=k[t]||(k[t]={}),e)){for(var n;(r=I(r))&&!(n=D(r,e)););t[e]=n&&n.set}return t[e]}(r.localName,i,r)?r[i]=t:f(r,i,t))}var k={};function O(t,e){return"-"===t[e]?t.slice(e+1):t[e].toLowerCase()+t.slice(e+1)}function C(t){for(var e=t._unevt;e.length>0;)e.pop()()}return function(t,e,r){var n="style"===r?d:"class"===r||"className"===r&&(r="class")?p:v.test(r)?(r=O(r,2),"_unevt"in t||(t._unevt=[],t.onDestroy(C)),b):x.test(r)?(r=O(r,5),"_class"in t||(t._class={}),R):g.test(r)?(r=s(O(r,5)),"_style"in t||(t._style={}),y):m.test(r)?(r="xlink:"+O(r,5),_):w;t.watchDeep(e,n,{r:t,k:r})}}();function vt(){return null}var bt=function(){return{}},xt=vt,Rt=vt,gt=h,yt=h,mt=h,_t=h,wt={};function kt(t){this._data=t=void 0===t?"":""+t;var e=this.text;e&&(e.data=t)}class RText extends Rease{constructor({data:t}){super(),t&&(t.subscribe||t.then)?(this._data="",this.watchDeep(t,kt,this)):this._data=void 0===t?"":""+t;var e=bt(this),r=e.p,n=e.b;(this.node=xt(this._data,r,n))?(gt(this.node,r,n),this.text=this.node.childNodes[0],this.onMove(_t,this),this.onDestroy(yt)):this.text=null}}class RElement extends Rease{constructor({children:t,node:e,...r}){var n;super();var s=h;switch(i(e)?(n=e,e=null):n=e?e.localName:"",this.name=n||(n="template")){case"html":this.node=e||wt.documentElement||null;break;case"head":this.node=e||wt.head||null;break;case"body":this.node=e||wt.body||null;break;default:var a=bt(this),o=a.p,c=a.b;(this.node=e||Rt(n,o,c))&&(gt(this.node,o,c),this.onMove(_t,this),this.onDestroy(yt),s=mt)}for(var l in this._attrs={},r){if(this.destroyed)break;dt(this,r[l],l)}this.insert(t),s(this)}}if("undefined"!=typeof document){wt=document;var Ot="_rease_relement_or_rtext",Ct={style:1,script:1};function Lt(t){t.parentNode&&t.parentNode.removeChild(t)}var Et=[RElement,RText];function qt(t,e){return wt.createElementNS(pt.hasOwnProperty(t)?pt[t]:(e&&"foreignObject"!==e.localName?e:wt.documentElement).namespaceURI,t)}bt=function(t){var e=t.findParentOrPrev(RElement,Et),r=e.parent,n=e.prev,i=n&&n.node;return{p:i&&i.parentElement||r&&r.node,b:i}},xt=function(t,e,r){return(r=r?r.nextSibling:e&&e.firstChild)&&(3!==r.nodeType||Ot in r||Lt(r)),(r=qt("font",e)).style.verticalAlign="inherit",r.appendChild(wt.createTextNode(t)),r},Rt=function(t,e,r){if(t){if(r=r?r.nextSibling:e&&e.firstChild)for(var n;r&&!(Ot in r);)if(n=r,r=r.nextSibling,1!==n.nodeType)Lt(n);else{if(n.localName===t){for(var i=n.attributes,s=i.length;s-- >0;)n.removeAttribute(i[s].name);return n}if(!Ct.hasOwnProperty(n.localName))break}return qt(t,e)}return null},gt=function(t,e,r){t[Ot]=!0,e?e.insertBefore(t,(r?r.nextSibling:e.firstChild)||null):Lt(t)},_t=function(t){var e=this.node;if(e){if(this!==t)for(var r=this;r=r.parent;){if(r instanceof RElement)return;if(r===t)break}var n=bt(this),i=n.p,s=n.b;gt(e,i,s)}},yt=function(t){var e=t.node;e&&Lt(e)},mt=function(t){var e=t.node;if(e)for(var r=e.childNodes,n=r.length;n-- >0&&!(Ot in(e=r[n]));)1===e.nodeType&&Ct.hasOwnProperty(e.localName)||Lt(e)}}function Pt(t){this.b!==(this.b=t.every((function(t,e){return e>0?!t:t})))&&(this.b?this.r.insert(s(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function Nt(t,e,r,n){t.watchDeepAll(n,Pt,{r:t,t:e,b:!1,c:r})}function St(t,e,r,n){var i=t.findPrevSibling(At);Nt(t,r,n,t._is=i?[e].concat(i._is):[e])}class At extends Rease{move(){throw new Error("RIf, RElseIf and RElse is not move")}}class RIf extends At{constructor({is:t,context:e,children:r}){super(),Nt(this,e,r,this._is=[t])}}class RElseIf extends At{constructor({is:t,context:e,children:r}){super(),St(this,t,e,r)}}class RElse extends At{constructor({context:t,children:e}){super(),St(this,!0,t,e)}}function It(t){var e=t[0],r=t[1];e||(e=this.p),this.r.move(e,r),void 0===this.c||this.r.insert(this.c,this.c=void 0)}class RMove extends Rease{constructor({to:t,index:e,children:r}){super(),this.watchDeepAll([t,e],It,{r:this,p:this.parent,c:r})}}class RSwitch extends Rease{constructor({is:t,children:e}){super(),this._is=t,this.insert(e)}}function jt(t){this.i=!0,this.b!==(this.b=T(t[0],t[1]))&&(this.b?this.r.insert(s(this.c)?this.c.call(this.t,t[0]):this.c):this.r.destroyChildren())}function Dt(){var t=this._is,e=this._ctx,r=this.findParent(RSwitch);r!==this._switch&&(this._switch=r,e.i=!1,e.u(),r&&(e.u=this.watchDeepAll([r._is,t],jt,e)),!e.i&&e.b&&(e.b=!1,this.destroyChildren()))}class RCase extends Rease{constructor({is:t,context:e,children:r}){super(),this._is=t,this._ctx={r:this,t:e,b:!1,c:r,i:!1,u:h},this.onMove(Dt,this),Dt.call(this)}}function Tt(t){var e=this.r,r=this.t,n=this.c;e.destroyChildren(),e.destroyed||e.insert(s(n)?n.call(r,t):n)}class RWatch extends Rease{constructor({is:t,context:e,children:r}){super(),this[u(t)?"watchDeepAll":"watchDeep"](t,Tt,{r:this,t:e,c:r})}}var Ft,$t={embed:1,iframe:1,object:1,portal:1,svg:1,math:1,canvas:1,script:1,button:1,datalist:1,input:1,meter:1,optgroup:1,option:1,progress:1,select:1,textarea:1,slot:1,template:1},Mt=(Ft=/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/,function(t){return Ft.test(t)});exports.RAwait=RAwait,exports.RCase=RCase,exports.RCatch=RCatch,exports.RElement=RElement,exports.RElse=RElse,exports.RElseIf=RElseIf,exports.RForIn=RForIn,exports.RForOf=RForOf,exports.RFragment=RFragment,exports.RIf=RIf,exports.RMove=RMove,exports.RSwitch=RSwitch,exports.RText=RText,exports.RThen=RThen,exports.RWatch=RWatch,exports.Rease=Rease,exports.createElement=ot,exports.h=ot,exports.hash=function(t,e){var r;if(null==t)r=Math.random();else for(var n,i=1/(r=.9973),s=(t+="").length,a=e&&s/99>>>1||1,o=0;o<s;o+=a)13===(n=t.charCodeAt(o))?o-=a-1:(r+=n*r*997.3/(n+r)+i)>0&&(r-=0|r);return(5e16*r+4e16).toString(36)},exports.interval=y,exports.isCatchable=o,exports.isFunction=s,exports.isString=i,exports.isSubscribable=c,exports.isThenable=a,exports.render=function(t,e){var r=new RElement({node:t});return r.insert(e),r.init(),r},exports.then=f,exports.thenSafe=p,exports.thenSafeAll=v,exports.thenable=x,exports.timeout=g,exports.toHTMLString=function t(e){var r=[];if(e instanceof RText)r.push(e._data.replace(/["'&<>]/g,(function(t){switch(t){case'"':t="&quot;";break;case"'":t="&#39;";break;case"&":t="&amp;";break;case"<":t="&lt;";break;case">":t="&gt;"}return t})));else if(e instanceof RElement){var n=e.name;if(n&&!$t.hasOwnProperty(n)){var i,s,a=e._class,o=e._style,c=e._attrs,h=[],l=[],u=[];if(a)for(i in a)a[i]&&h.push(i);if(o)for(i in o)(s=o[i])&&l.push(i,":",s,";");if(c)for(i in c)if(s=c[i])switch(i){case"class":h.push(s);break;case"style":l.push(s);break;default:u.push(" ",i,"=",JSON.stringify(""+s))}if(h.length&&u.push(" class=",JSON.stringify(h.join(" "))),l.length&&u.push(" style=",JSON.stringify(l.join(""))),r.push("<",n,u.join("")),Mt(n))r.push("/>");else{r.push(">");for(var f=e.children,p=0;p<f.length;p++)r.push(t(f[p]));r.push("</",n,">")}}}else for(var d=e.children,v=0;v<d.length;v++)r.push(t(d[v]));return r.join("")},exports.watch=O,exports.watchAll=N,exports.watchDeep=C,exports.watchDeepAll=S,Object.keys(t).forEach((function(e){"default"===e||Object.prototype.hasOwnProperty.call(exports,e)||Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})})),Object.keys(e).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return e[t]}})})),Object.keys(r).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return r[t]}})})),Object.keys(n).forEach((function(t){"default"===t||Object.prototype.hasOwnProperty.call(exports,t)||Object.defineProperty(exports,t,{enumerable:!0,get:function(){return n[t]}})}));
