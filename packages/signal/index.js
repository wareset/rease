/* eslint-disable */
function n(){}var t,u,e=1,r=function(l,c){var o=Array,a=Object,f={},v=null,p=a.is||function(n,t){return n===t?0!==n||1/n==1/t:n!=n&&t!=t};function h(n){throw"@rease/signal: "+n}function _(){var n=this;if(0===n.l&&n.g!==f&&(n.t||n.s._.h===n.s._.h.n)){var t,u=n.i,e=n.x,r=!n.g,i=v;v=null,n.l++;for(var l,s,c=0;c<e.length&&((s=(l=u[c])._.c)&&_.call(s),!(r=!p(e[c].v,l._value)));c++);if(r){t=n.c(n.o?function(n){for(var t,u=n.length,e=o(u),r=0;r<u;r++)e[r]=(t=n[r]).b?t.v.get():t.v;return e}(n.o):(v=n,null),n.s._value),v=null;for(var a,h=e.length;h-- >0;)(a=e[h]).g===n.g||n.o?a.v=u[h]._value:(u.splice(h,1),e.splice(h,1)[0].u())}if(n.g=f,n.t=!1,n.l--,v=i,r){var g=n.s,b=g._.o;J(g,b?b(t,g._value):t)}}}function g(n,t){n.l++;var u=t._.w||(t._.w=[]),e=t.subscribe(_,n);return n.l--,u.push(n),function(){u.splice(u.lastIndexOf(n),1),e()}}function b(t,u){if(t.s!==u){var e=t.i.indexOf(u);e<0?(t.i.push(u),t.x.push({g:t.g,v:b,u:t.s._.h===t.s._.h.n?n:g(t,u)})):t.x[e].g=t.g}}function x(n){if(n)for(var t,u=n.length;u-- >0;)(t=n[u]).t||(t.t=!0,x(t.s._.w))}function d(n){n.v===d&&n.f.call(n.c,n.v=this._value)}function w(t){var u=this._;u.c&&function(t){for(var u,e=t.i,r=t.x,i=0,l=t.s._.h;i<r.length&&l!==l.n;i++)(u=r[i]).u===n&&(u.u=g(t,e[i]));t.t=!0,_.call(t)}(u.c),u.f&&(u.l=u.f(this)),d.call(this,t)}function y(){var t=this._;t.l&&t.l(this),t.c&&function(t){for(var u,e,r=t.x,i=r.length,l=t.s._.h;i-- >0&&l===l.n;)u=(e=r[i]).u,e.u=n,u()}(t.c)}function S(t){var u=n;function e(n){l.set(n)}function i(){var t=u;u=n,t.unsubscribe?t.unsubscribe():t()}var l=new r(void 0,{prepare:()=>(u=t.subscribe(e),i)});return l}function O(n){this._value=this._.o(n,this._value)}function m(n){J(this,this._.o(n,this._value))}function J(n,u){p(n._value,u)||(n._value=u,f={},x(n._.w),t(n))}r=class ReaseSignal{constructor(n,t){var u=this._={v:this._value=n,c:t&&t.compute?(this.computed=!0,{s:this,g:null,t:!0,l:0,c:t.compute,i:[],x:[],o:t.observe}):null,h:{n:null,p:null},p:null,r:!0,n:null,f:t&&t.prepare?(this.prepared=!0,t.prepare):null,l:null,o:t&&t.capture?(this.captured=!0,t.capture):null,w:null};u.p=u.h.n=u.h.p=u.h,u.c&&u.c.o&&function(n){for(var t,u,e=n.o,r=e.length,i=o(r),l=0;l<r;l++)(u=null!=(t=e[l])&&"function"==typeof t.subscribe)&&(s(t)||(t=S(t)),b(n,t)),i[l]={v:t,b:u};n.o=i}(u.c),u.o&&i(O,this,[n])}get(){var t=v;v=null,t&&b(t,this);var u,e=this._,r=e.h===e.h.n&&(e.c||e.f)?this.subscribe(n):e.c&&void(0===(u=e.c).l&&u.g!==f&&u.t&&i(_,u)),l=this._value;return r&&r(),v=t,l}set(n){var t=this._;return t.c&&h("computed"),t.o?i(m,this,[n]):J(this,n),this}subscribe(t,u){var e=this,r=e._,l={n:null,p:null,v:d,f:t,c:u};return r.p=(l.p=(l.n=r.p.n).p).n=l.n.p=l,i(l.n===l.p&&(r.c||r.f)?w:d,e,[l]),function(){l&&(l.p.n=l.n,l.n.p=l.p,l.f=n,l=null,r.h===r.h.n&&(r.c||r.l)&&i(y,e))}}toString(...n){var t=this.get();return null!=t&&t.toString?t.toString.apply(t,n):""+t}valueOf(...n){var t=this.get();return null!=t&&t.valueOf?t.valueOf.apply(t,n):t}toJSON(...n){var t=this.get();return null!=t&&t.toJSON?t.toJSON.apply(t,n):t}};var N=r.prototype;a.defineProperty(N,"$",{get:N.get,set:N.set}),(u=new r({f:n})).subscribe((function(n){n.f.apply(n.c,n.a)})),e=null;var j=0;return t=function(n){var t=n._;if(t.r)if(++j>4e4&&h("looping"),t.n=null,t.r=!1,e)e=e._.n=n;else{e=n;for(var u;n;n=n._.n){if(!p((t=n._).v,t.v=u=n._value))for(var r=t.h,i=t.p=r;(i=t.p.n)!==r;)t.c&&_.call(t.c),p(u,n._value)?p((t.p=i).v,u)||i.f.call(i.c,i.v=u):(t.v=u=n._value,t.p=r);t.r=!0}e=null,j=0}},new r(l,c)};function i(n,r,i){e?n.apply(r,i):(u._value={f:n,c:r,a:i},t(u))}function l(){this[0]=this[0].apply(this[1],this[2])}function s(n){return n instanceof r}exports.batch=i,exports.batchify=function(n){return function(...t){return i(l,t=[n,this,t]),t[0]}},exports.computed=function(n,t,u){return new r(u,{compute:t,observe:n})},exports.effect=function(t,u,e){return new r(void 0,{compute:u,observe:t}).subscribe(e||n)},exports.isSignal=s,exports.isSignalComputed=function(n){return n instanceof r&&!!n._.c},exports.isSignalManually=function(n){return n instanceof r&&!n._.c},exports.signal=function(n,t){return new r(n,t)};
