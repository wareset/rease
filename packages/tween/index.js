/* eslint-disable */
const e=require("./raf/index.js"),t=require("./easing/index.js");function s(){}function a(e,t){return null!=e?e:t}function n(){var e={p:null,n:null};return e.p=e.n=e}function u(e,t,a){var n={p:null,n:null,f:t,c:a};return(n.p=(n.n=e).p).n=n.n.p=n,function(){n&&(n.p.n=n.n,n.n.p=n.p,n.f=s,n=null)}}function r(e,t){if(e)for(var s=t.task,a=s?s.value:t.value,n=e;(n=n.n)!==e;)n.f.call(n.c,a,t,s)}var i,o=!1,p={ticker(t){if(i){for(var s=i;(s=s.n)!==i;)x(s,t);(o=i.n!==i)&&e.requestAnimationFrame(p.ticker)}},paused:!1,delay:0,duration:0,easing:t.easeLinear};function l(e,t,s){var n=e._;return{self:e,value:e.value,newValue:t,executor:null,delay:a(s&&s.delay,n.delay),easing:a(s&&s.easing,n.easing),duration:a(s&&s.duration,n.duration),immutable:a(s&&s.immutable,n.immutable),passTime:0,lastTime:0,progress:0,started:!1,skipped:!1}}function c(e,t,s){if(e!==t&&e==e){var a=typeof e;if(a===typeof t)switch(a){case"number":a=e;var n=0,u=0,r=t-e;return function(i,o,p,l,c){return i<1?(a===l||s||(r=t-(e=a=l)),t!==c&&(r=(t=c)-(e=a),n=1-(u=i)),a=e+r*(n?p((i-u)/n):o)):a=c,a};case"object":if(e&&t){for(var i in a={},t)a[i]=c(e[i],t[i],s);return function(n,u,r){var i=s?new t.constructor:e;for(var o in a)i[o]=a[o](n,u,r,e[o],t[o]);return i}}}}return function(e,t,s,a,n){return e<1?a:n}}function f(e,t){if(e._.tasks.length){var s=e._.tasks.shift(),a=s[0],n=s[1];t.t=e.task=l(e,a,n)}else t.p.n=t.n,t.n.p=t.p,e.task=null}function x(e,t){var s=e.t,a=s.self,n=a._;if(a.paused||p.paused)s.lastTime=0;else if(s.skipped)s.started&&r(n.of,a),f(a,e);else if(s.lastTime>0){if((s.passTime-=s.lastTime-(s.lastTime=t))>=s.delay){var u=(s.passTime-s.delay)/s.duration;u<0?u=0:u>1&&(u=1),s.progress=u,s.started||(s.started=!0,r(n.os,a)),s.value=(s.executor||(s.executor=c(s.value,s.newValue,s.immutable)))(u,s.easing(u),s.easing,s.value,s.newValue),s.immutable||(a.value=s.value),r(n.ou,a),1===u&&(r(n.of,a),f(a,e))}}else s.lastTime=t}class ReaseTween{constructor(e,t){t||(t={}),this._={tasks:[],delay:a(t.delay,p.delay),easing:a(t.easing,p.easing),duration:a(t.duration,p.duration),immutable:a(t.immutable,!1)},this.value=e,this.task=null,this.paused=!1,i||((i={p:null,n:null}).p=i.n=i)}to(t,s){if(this.task)this._.tasks.push([t,s]);else{var a={p:null,n:null,t:this.task=l(this,t,s)};(a.p=(a.n=i).p).n=a.n.p=a,o||(o=!0,e.requestAnimationFrame(p.ticker))}return this}skip(){return this.task&&(this.task.skipped=!0),this}clear(){return this._.tasks.length=0,this}purge(){return this.clear().skip()}pause(){return this.paused||(this.paused=!0,r(this._.op,this)),this}resume(){return this.paused&&(this.paused=!1,r(this._.or,this)),this}onPause(e,t){return u(this._.op||(this._.op=n()),e,t)}onResume(e,t){return u(this._.or||(this._.or=n()),e,t)}onStart(e,t){return u(this._.os||(this._.os=n()),e,t)}onUpdate(e,t){return u(this._.ou||(this._.ou=n()),e,t)}onFinish(e,t){return u(this._.of||(this._.of=n()),e,t)}}
/*@__NO_SIDE_EFFECTS__*/Object.defineProperty(exports,"cancelAnimationFrame",{enumerable:!0,get:function(){return e.cancelAnimationFrame}}),Object.defineProperty(exports,"requestAnimationFrame",{enumerable:!0,get:function(){return e.requestAnimationFrame}}),exports.easeBackIn=t.easeBackIn,exports.easeBackInOut=t.easeBackInOut,exports.easeBackOut=t.easeBackOut,exports.easeBounceIn=t.easeBounceIn,exports.easeBounceInOut=t.easeBounceInOut,exports.easeBounceOut=t.easeBounceOut,exports.easeCircIn=t.easeCircIn,exports.easeCircInOut=t.easeCircInOut,exports.easeCircOut=t.easeCircOut,exports.easeCubicIn=t.easeCubicIn,exports.easeCubicInOut=t.easeCubicInOut,exports.easeCubicOut=t.easeCubicOut,exports.easeElasticIn=t.easeElasticIn,exports.easeElasticInOut=t.easeElasticInOut,exports.easeElasticOut=t.easeElasticOut,exports.easeExpoIn=t.easeExpoIn,exports.easeExpoInOut=t.easeExpoInOut,exports.easeExpoOut=t.easeExpoOut,exports.easeLinear=t.easeLinear,exports.easeQuadIn=t.easeQuadIn,exports.easeQuadInOut=t.easeQuadInOut,exports.easeQuadOut=t.easeQuadOut,exports.easeQuartIn=t.easeQuartIn,exports.easeQuartInOut=t.easeQuartInOut,exports.easeQuartOut=t.easeQuartOut,exports.easeQuintIn=t.easeQuintIn,exports.easeQuintInOut=t.easeQuintInOut,exports.easeQuintOut=t.easeQuintOut,exports.easeSineIn=t.easeSineIn,exports.easeSineInOut=t.easeSineInOut,exports.easeSineOut=t.easeSineOut,exports.TWEEN_DEFAULTS=p,exports.tween=function(e,t){return new ReaseTween(e,t)};
