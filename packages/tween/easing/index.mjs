/* eslint-disable */
/*@__NO_SIDE_EFFECTS__*/
function n(n){return n}
/*@__NO_SIDE_EFFECTS__*/function t(n){return 1-Math.cos(n*Math.PI/2)}
/*@__NO_SIDE_EFFECTS__*/function r(n){return Math.sin(n*Math.PI/2)}
/*@__NO_SIDE_EFFECTS__*/function u(n){return(1-Math.cos(n*Math.PI))/2}
/*@__NO_SIDE_EFFECTS__*/function o(n){return n*n}
/*@__NO_SIDE_EFFECTS__*/function i(n){return 1- --n*n}
/*@__NO_SIDE_EFFECTS__*/function a(n){return n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2}
/*@__NO_SIDE_EFFECTS__*/function c(n){return n*n*n}
/*@__NO_SIDE_EFFECTS__*/function e(n){return 1+--n*n*n}
/*@__NO_SIDE_EFFECTS__*/function f(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}
/*@__NO_SIDE_EFFECTS__*/function h(n){return n*n*n*n}
/*@__NO_SIDE_EFFECTS__*/function M(n){return 1- --n*n*n*n}
/*@__NO_SIDE_EFFECTS__*/function p(n){return n<.5?8*n*n*n*n:1-Math.pow(-2*n+2,4)/2}
/*@__NO_SIDE_EFFECTS__*/function w(n){return n*n*n*n*n}
/*@__NO_SIDE_EFFECTS__*/function s(n){return 1+--n*n*n*n*n}
/*@__NO_SIDE_EFFECTS__*/function I(n){return n<.5?16*n*n*n*n*n:1-Math.pow(-2*n+2,5)/2}
/*@__NO_SIDE_EFFECTS__*/function P(n){return 0===n?0:Math.pow(2,10*n-10)}
/*@__NO_SIDE_EFFECTS__*/function q(n){return 1===n?1:1-Math.pow(2,-10*n)}
/*@__NO_SIDE_EFFECTS__*/function v(n){return 0===n||1===n?n:n<.5?Math.pow(2,20*n-10)/2:Math.pow(2,10-20*n)/-2+1}
/*@__NO_SIDE_EFFECTS__*/function x(n){return 1-Math.sqrt(1-n*n)}
/*@__NO_SIDE_EFFECTS__*/function b(n){return Math.sqrt(1- --n*n)}
/*@__NO_SIDE_EFFECTS__*/function d(n){return((n*=2)<1?1-Math.sqrt(1-n*n):Math.sqrt(1-(n-=2)*n)+1)/2}
/*@__NO_SIDE_EFFECTS__*/function g(n){var t=1.70158;return n*n*((t+1)*n-t)}
/*@__NO_SIDE_EFFECTS__*/function j(n){var t=1.70158;return 1+--n*n*((t+1)*n+t)}
/*@__NO_SIDE_EFFECTS__*/function k(n){var t=2.5949095;return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}
/*@__NO_SIDE_EFFECTS__*/function l(n){return 0===n||1===n?n:Math.sin(13*n*Math.PI/2)*Math.pow(2,10*(n-1))}
/*@__NO_SIDE_EFFECTS__*/function m(n){return 0===n||1===n?n:Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-10*n)+1}
/*@__NO_SIDE_EFFECTS__*/function y(n){return 0===n||1===n?n:n<.5?.5*Math.sin(13*Math.PI/2*2*n)*Math.pow(2,10*(2*n-1)):.5*Math.sin(-13*Math.PI/2*(2*n-1+1))*Math.pow(2,-10*(2*n-1))+1}
/*@__NO_SIDE_EFFECTS__*/function z(n){return 1-A(1-n)}
/*@__NO_SIDE_EFFECTS__*/function A(n){var t=7.5625,r=2.75;return n<1/r?t*n*n:n<2/r?t*(n-=1.5/r)*n+.75:n<2.5/r?t*(n-=2.25/r)*n+.9375:t*(n-=2.625/r)*n+.984375}
/*@__NO_SIDE_EFFECTS__*/function B(n){return(n<.5?1-A(1-2*n):1+A(2*n-1))/2}export{g as easeBackIn,k as easeBackInOut,j as easeBackOut,z as easeBounceIn,B as easeBounceInOut,A as easeBounceOut,x as easeCircIn,d as easeCircInOut,b as easeCircOut,c as easeCubicIn,f as easeCubicInOut,e as easeCubicOut,l as easeElasticIn,y as easeElasticInOut,m as easeElasticOut,P as easeExpoIn,v as easeExpoInOut,q as easeExpoOut,n as easeLinear,o as easeQuadIn,a as easeQuadInOut,i as easeQuadOut,h as easeQuartIn,p as easeQuartInOut,M as easeQuartOut,w as easeQuintIn,I as easeQuintInOut,s as easeQuintOut,t as easeSineIn,u as easeSineInOut,r as easeSineOut};
