/* eslint-disable */
/*@__NO_SIDE_EFFECTS__*/
function t(t){var e=7.5625,n=2.75;return t<1/n?e*t*t:t<2/n?e*(t-=1.5/n)*t+.75:t<2.5/n?e*(t-=2.25/n)*t+.9375:e*(t-=2.625/n)*t+.984375}
/*@__NO_SIDE_EFFECTS__*/exports.easeBackIn=
/*@__NO_SIDE_EFFECTS__*/
function(t){var e=1.70158;return t*t*((e+1)*t-e)}
/*@__NO_SIDE_EFFECTS__*/,exports.easeBackInOut=
/*@__NO_SIDE_EFFECTS__*/
function(t){var e=2.5949095;return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}
/*@__NO_SIDE_EFFECTS__*/,exports.easeBackOut=function(t){var e=1.70158;return 1+--t*t*((e+1)*t+e)},exports.easeBounceIn=
/*@__NO_SIDE_EFFECTS__*/
function(e){return 1-t(1-e)},exports.easeBounceInOut=function(e){return(e<.5?1-t(1-2*e):1+t(2*e-1))/2},exports.easeBounceOut=t,exports.easeCircIn=
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
function(t){return 0===t||1===t?t:t<.5?Math.pow(2,20*t-10)/2:Math.pow(2,10-20*t)/-2+1},exports.easeExpoOut=function(t){return 1===t?1:1-Math.pow(2,-10*t)},exports.easeLinear=
/*@__NO_SIDE_EFFECTS__*/
function(t){return t}
/*@__NO_SIDE_EFFECTS__*/,exports.easeQuadIn=
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
function(t){return(1-Math.cos(t*Math.PI))/2},exports.easeSineOut=function(t){return Math.sin(t*Math.PI/2)};
