/* eslint-disable */
if(exports.cancelAnimationFrame=void 0,exports.requestAnimationFrame=void 0,"function"==typeof requestAnimationFrame)exports.cancelAnimationFrame=cancelAnimationFrame,exports.requestAnimationFrame=requestAnimationFrame;else{var t="object"==typeof performance?performance:Date;exports.cancelAnimationFrame=clearTimeout,exports.requestAnimationFrame=function(e){return setTimeout((function(){e(t.now())}),16.6667)}}
/*@__NO_SIDE_EFFECTS__*/function e(t){return t}
/*@__NO_SIDE_EFFECTS__*/
/*@__NO_SIDE_EFFECTS__*/
function n(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375}
/*@__NO_SIDE_EFFECTS__*/function r(){}function s(t,e){return null!=t?t:e}function a(){var t={p:null,n:null};return t.p=t.n=t}function u(t,e,n){var s={p:null,n:null,f:e,c:n};return(s.p=(s.n=t).p).n=s.n.p=s,function(){s&&(s.p.n=s.n,s.n.p=s.p,s.f=r,s=null)}}function i(t,e,n){if(t)for(var r=t;(r=r.n)!==t;)r.f.call(r.c,e,n)}var o,p=!1,c={ticker(t){if(o){for(var e=o;(e=e.n)!==o;)x(e,t);(p=o.n!==o)&&exports.requestAnimationFrame(c.ticker)}},paused:!1,delay:0,duration:0,easing:e};function f(t,e,n){return{newValue:e,executor:null,delay:s(n&&n.delay,t.delay),easing:s(n&&n.easing,t.easing),duration:s(n&&n.duration,t.duration),passTime:0,lastTime:0,progress:0,started:!1,skipped:!1}}function h(t,e){if(t!==e&&t==t){var n=typeof t;if(n===typeof e)switch(n){case"number":return n=e-t,function(r,s){return r<1?s*n+t:e};case"object":if(t&&e){for(var r in n={},e)n[r]=h(t[r],e[r]);return function(e,r){for(var s in n)t[s]=n[s](e,r);return t}}}}return function(n){return n<1?t:e}}function l(t,e){if(t.tasks.length){var n=t.tasks.shift(),r=n[0],s=n[1];e.t=e.s.task=f(t,r,s)}else e.p.n=e.n,e.n.p=e.p,e.s.task=null}function x(t,e){var n=t.t,r=t.s,s=r._;if(r.paused||c.paused)n.lastTime=0;else if(n.skipped)n.started&&i(s.of,r.value,r),l(s,t);else if(n.lastTime>0){if((n.passTime-=n.lastTime-(n.lastTime=e))>=n.delay){var a=(n.passTime-n.delay)/n.duration;a<0?a=0:a>1&&(a=1),n.progress=a,n.started||(n.started=!0,i(s.os,r.value,r)),i(s.ou,r.value=(n.executor||(n.executor=h(r.value,n.newValue)))(a,n.easing(a)),r),1===a&&(i(s.of,r.value,r),l(s,t))}}else n.lastTime=e}class ReaseTween{constructor(t,e){e||(e={}),this._={tasks:[],delay:s(e.delay,c.delay),easing:s(e.easing,c.easing),duration:s(e.duration,c.duration)},this.value=t,this.task=null,this.paused=!1,o||((o={p:null,n:null}).p=o.n=o)}to(t,e){if(this.task)this._.tasks.push([t,e]);else{var n={s:this,p:null,n:null,t:this.task=f(this._,t,e)};(n.p=(n.n=o).p).n=n.n.p=n,p||(p=!0,exports.requestAnimationFrame(c.ticker))}return this}skip(){return this.task&&(this.task.skipped=!0),this}clear(){return this._.tasks.length=0,this}purge(){return this.clear().skip()}pause(){return this.paused||(this.paused=!0,i(this._.op,this.value,this)),this}resume(){return this.paused&&(this.paused=!1,i(this._.or,this.value,this)),this}onPause(t,e){return u(this._.op||(this._.op=a()),t,e)}onResume(t,e){return u(this._.or||(this._.or=a()),t,e)}onStart(t,e){return u(this._.os||(this._.os=a()),t,e)}onUpdate(t,e){return u(this._.ou||(this._.ou=a()),t,e)}onFinish(t,e){return u(this._.of||(this._.of=a()),t,e)}}
/*@__NO_SIDE_EFFECTS__*/exports.TWEEN_DEFAULTS=c,exports.easeBackIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){var e=1.70158;return t*t*((e+1)*t-e)}
/*@__NO_SIDE_EFFECTS__*/,exports.easeBackInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){var e=2.5949095;return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}
/*@__NO_SIDE_EFFECTS__*/,exports.easeBackOut=function(t){var e=1.70158;return 1+--t*t*((e+1)*t+e)},exports.easeBounceIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){return 1-n(1-t)},exports.easeBounceInOut=function(t){return(t<.5?1-n(1-2*t):1+n(2*t-1))/2},exports.easeBounceOut=n,exports.easeCircIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){return 1-Math.sqrt(1-t*t)}
/*@__NO_SIDE_EFFECTS__*/,exports.easeCircInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return((t*=2)<1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2},exports.easeCircOut=function(t){return Math.sqrt(1- --t*t)},exports.easeCubicIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t*t*t}
/*@__NO_SIDE_EFFECTS__*/,exports.easeCubicInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
/*@__NO_SIDE_EFFECTS__*/,exports.easeCubicOut=function(t){return 1+--t*t*t},exports.easeElasticIn=function(t){return 0===t||1===t?t:Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}
/*@__NO_SIDE_EFFECTS__*/,exports.easeElasticInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return 0===t||1===t?t:t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1},exports.easeElasticOut=function(t){return 0===t||1===t?t:Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1},exports.easeExpoIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){return 0===t?0:Math.pow(2,10*t-10)}
/*@__NO_SIDE_EFFECTS__*/,exports.easeExpoInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return 0===t||1===t?t:t<.5?Math.pow(2,20*t-10)/2:Math.pow(2,10-20*t)/-2+1},exports.easeExpoOut=function(t){return 1===t?1:1-Math.pow(2,-10*t)},exports.easeLinear=e,exports.easeQuadIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t*t}
/*@__NO_SIDE_EFFECTS__*/,exports.easeQuadInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2},exports.easeQuadOut=function(t){return 1- --t*t},exports.easeQuartIn=function(t){return t*t*t*t}
/*@__NO_SIDE_EFFECTS__*/,exports.easeQuartInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2}
/*@__NO_SIDE_EFFECTS__*/,exports.easeQuartOut=function(t){return 1- --t*t*t*t},exports.easeQuintIn=function(t){return t*t*t*t*t}
/*@__NO_SIDE_EFFECTS__*/,exports.easeQuintInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2},exports.easeQuintOut=function(t){return 1+--t*t*t*t*t},exports.easeSineIn=function(t){return 1-Math.cos(t*Math.PI/2)}
/*@__NO_SIDE_EFFECTS__*/,exports.easeSineInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){return(1-Math.cos(t*Math.PI))/2},exports.easeSineOut=function(t){return Math.sin(t*Math.PI/2)},exports.tween=function(t,e){return new ReaseTween(t,e)};
