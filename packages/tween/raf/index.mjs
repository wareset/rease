/* eslint-disable */
var e,n;if("function"==typeof requestAnimationFrame)e=cancelAnimationFrame,n=requestAnimationFrame;else{var a="object"==typeof performance?performance:Date;e=clearTimeout,n=function(e){return setTimeout((function(){e(a.now())}),16.6667)}}export{e as cancelAnimationFrame,n as requestAnimationFrame};
