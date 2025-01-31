/* eslint-disable */
var t,n,e;if("function"==typeof requestAnimationFrame)t=cancelAnimationFrame,n=requestAnimationFrame;else{var r="object"==typeof performance?performance:Date;t=clearTimeout,n=function(t){return setTimeout((function(){t(r.now())}),16.6667)}}
/*@__NO_SIDE_EFFECTS__*/function u(t){return t}
/*@__NO_SIDE_EFFECTS__*/function i(t){return 1-Math.cos(t*Math.PI/2)}
/*@__NO_SIDE_EFFECTS__*/function a(t){return Math.sin(t*Math.PI/2)}
/*@__NO_SIDE_EFFECTS__*/function s(t){return(1-Math.cos(t*Math.PI))/2}
/*@__NO_SIDE_EFFECTS__*/function o(t){return t*t}
/*@__NO_SIDE_EFFECTS__*/function f(t){return 1- --t*t}
/*@__NO_SIDE_EFFECTS__*/function c(t){return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}
/*@__NO_SIDE_EFFECTS__*/function h(t){return t*t*t}
/*@__NO_SIDE_EFFECTS__*/function l(t){return 1+--t*t*t}
/*@__NO_SIDE_EFFECTS__*/function p(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2}
/*@__NO_SIDE_EFFECTS__*/function d(t){return t*t*t*t}
/*@__NO_SIDE_EFFECTS__*/function M(t){return 1- --t*t*t*t}
/*@__NO_SIDE_EFFECTS__*/function m(t){return t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2}
/*@__NO_SIDE_EFFECTS__*/function v(t){return t*t*t*t*t}
/*@__NO_SIDE_EFFECTS__*/function k(t){return 1+--t*t*t*t*t}
/*@__NO_SIDE_EFFECTS__*/function w(t){return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}
/*@__NO_SIDE_EFFECTS__*/function _(t){return 0===t?0:Math.pow(2,10*t-10)}
/*@__NO_SIDE_EFFECTS__*/function g(t){return 1===t?1:1-Math.pow(2,-10*t)}
/*@__NO_SIDE_EFFECTS__*/function y(t){return 0===t||1===t?t:t<.5?Math.pow(2,20*t-10)/2:Math.pow(2,10-20*t)/-2+1}
/*@__NO_SIDE_EFFECTS__*/function T(t){return 1-Math.sqrt(1-t*t)}
/*@__NO_SIDE_EFFECTS__*/function P(t){return Math.sqrt(1- --t*t)}
/*@__NO_SIDE_EFFECTS__*/function q(t){return((t*=2)<1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}
/*@__NO_SIDE_EFFECTS__*/function I(t){var n=1.70158;return t*t*((n+1)*t-n)}
/*@__NO_SIDE_EFFECTS__*/function F(t){var n=1.70158;return 1+--t*t*((n+1)*t+n)}
/*@__NO_SIDE_EFFECTS__*/function A(t){var n=2.5949095;return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}
/*@__NO_SIDE_EFFECTS__*/function x(t){return 0===t||1===t?t:Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}
/*@__NO_SIDE_EFFECTS__*/function b(t){return 0===t||1===t?t:Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}
/*@__NO_SIDE_EFFECTS__*/function R(t){return 0===t||1===t?t:t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}
/*@__NO_SIDE_EFFECTS__*/function j(t){return 1-V(1-t)}
/*@__NO_SIDE_EFFECTS__*/function V(t){var n=7.5625,e=2.75;return t<1/e?n*t*t:t<2/e?n*(t-=1.5/e)*t+.75:t<2.5/e?n*(t-=2.25/e)*t+.9375:n*(t-=2.625/e)*t+.984375}
/*@__NO_SIDE_EFFECTS__*/function D(t){return(t<.5?1-V(1-2*t):1+V(2*t-1))/2}function S(){}function U(t,n){return null!=t?t:n}function z(){var t={p:null,n:null};return t.p=t.n=t}function B(t,n,e){var r={p:null,n:null,f:n,c:e};return(r.p=(r.n=t).p).n=r.n.p=r,function(){r&&(r.p.n=r.n,r.n.p=r.p,r.f=S,r=null)}}function C(t,n,e){if(t)for(var r=t;(r=r.n)!==t;)r.f.call(r.c,n,e)}var E=!1,G={ticker(t){if(e){for(var r=e;(r=r.n)!==e;)L(r,t);(E=e.n!==e)&&n(G.ticker)}},paused:!1,delay:0,duration:0,easing:u};function H(t,n,e){return{newValue:n,executor:null,delay:U(e&&e.delay,t.delay),easing:U(e&&e.easing,t.easing),duration:U(e&&e.duration,t.duration),passTime:0,lastTime:0,progress:0,started:!1,skipped:!1}}function J(t,n){if(t!==n&&t==t){var e=typeof t;if(e===typeof n)switch(e){case"number":return e=n-t,function(r,u){return r<1?u*e+t:n};case"object":if(t&&n){for(var r in e={},n)e[r]=J(t[r],n[r]);return function(n,r){for(var u in e)t[u]=e[u](n,r);return t}}}}return function(e){return e<1?t:n}}function K(t,n){if(t.tasks.length){var e=t.tasks.shift(),r=e[0],u=e[1];n.t=n.s.task=H(t,r,u)}else n.p.n=n.n,n.n.p=n.p,n.s.task=null}function L(t,n){var e=t.t,r=t.s,u=r._;if(r.paused||G.paused)e.lastTime=0;else if(e.skipped)e.started&&C(u.of,r.value,r),K(u,t);else if(e.lastTime>0){if((e.passTime-=e.lastTime-(e.lastTime=n))>=e.delay){var i=(e.passTime-e.delay)/e.duration;i<0?i=0:i>1&&(i=1),e.progress=i,e.started||(e.started=!0,C(u.os,r.value,r)),C(u.ou,r.value=(e.executor||(e.executor=J(r.value,e.newValue)))(i,e.easing(i)),r),1===i&&(C(u.of,r.value,r),K(u,t))}}else e.lastTime=n}class ReaseTween{constructor(t,n){n||(n={}),this._={tasks:[],delay:U(n.delay,G.delay),easing:U(n.easing,G.easing),duration:U(n.duration,G.duration)},this.value=t,this.task=null,this.paused=!1,e||((e={p:null,n:null}).p=e.n=e)}to(t,r){if(this.task)this._.tasks.push([t,r]);else{var u={s:this,p:null,n:null,t:this.task=H(this._,t,r)};(u.p=(u.n=e).p).n=u.n.p=u,E||(E=!0,n(G.ticker))}return this}skip(){return this.task&&(this.task.skipped=!0),this}clear(){return this._.tasks.length=0,this}purge(){return this.clear().skip()}pause(){return this.paused||(this.paused=!0,C(this._.op,this.value,this)),this}resume(){return this.paused&&(this.paused=!1,C(this._.or,this.value,this)),this}onPause(t,n){return B(this._.op||(this._.op=z()),t,n)}onResume(t,n){return B(this._.or||(this._.or=z()),t,n)}onStart(t,n){return B(this._.os||(this._.os=z()),t,n)}onUpdate(t,n){return B(this._.ou||(this._.ou=z()),t,n)}onFinish(t,n){return B(this._.of||(this._.of=z()),t,n)}}
/*@__NO_SIDE_EFFECTS__*/function N(t,n){return new ReaseTween(t,n)}export{G as TWEEN_DEFAULTS,t as cancelAnimationFrame,I as easeBackIn,A as easeBackInOut,F as easeBackOut,j as easeBounceIn,D as easeBounceInOut,V as easeBounceOut,T as easeCircIn,q as easeCircInOut,P as easeCircOut,h as easeCubicIn,p as easeCubicInOut,l as easeCubicOut,x as easeElasticIn,R as easeElasticInOut,b as easeElasticOut,_ as easeExpoIn,y as easeExpoInOut,g as easeExpoOut,u as easeLinear,o as easeQuadIn,c as easeQuadInOut,f as easeQuadOut,d as easeQuartIn,m as easeQuartInOut,M as easeQuartOut,v as easeQuintIn,w as easeQuintInOut,k as easeQuintOut,i as easeSineIn,s as easeSineInOut,a as easeSineOut,n as requestAnimationFrame,N as tween};
