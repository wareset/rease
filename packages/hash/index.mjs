/* eslint-disable */
/*@__NO_SIDE_EFFECTS__*/
function e(e,r){var t;if(null==e)t=Math.random();else{t=1;for(var n,o=e.length,a=r&&o/r>>>1||1,f=0;f<o;f+=a)if(13===(n=e.charCodeAt(f)))f-=a-1;else for(t+=n*t/(n+t);t>1.5;)t/=10}return(6e16*t+4e16).toString(36)}export{e as hash};
