/* eslint-disable */
var e={},r=!0;function t(){if(r){r=!1;try{var t=/^-[^-]+-/,a=getComputedStyle(document.documentElement);for(var n in a)+n>-1&&(n=a[n],e[n.replace(t,"")]=n)}catch(s){}}}var a,n,s,i,l=function(){var r=/\/\/|\/\*|\*\/|[\r\n\u2028\u2029]|[^,\r\n\u2028\u2029*/\\{}:;`'"]+|./g,t={"@container":1,"@document":1,"@layer":1,"@media":1,"@scope":1,"@starting-style":1,"@supports":1},a=/^[^`'"]/,n=/\s*([\s>+~^|=])\s*|([()[\]&])/,s=/^[^,\s>+~]/,i=/^\._/,l=/^[\s>+~]+|[\s>+~]+$/g,c=/\s+/g;class p{constructor(e,r){this.type=e,this.raw=[],this.rules=[],this.all=null,this.is=!1,this.parent=r,r.children.push(this),this.tmp=r.tmp,this.children=[]}}function o(e){if(!e.is&&(2===e.type||3===e.type)){e.is=!0;var r=e.raw;r.length&&(r.push("*/"),e.tmp.r.push("/*"+r.join("")))}}function u(r){if(!r.is&&5===r.type){r.is=!0;var t=r.raw;if(t.length){var a=t[0],n=t[1];":"!==n?n&&t.splice(1,0," "):t[0]=e.hasOwnProperty(a)?e[a]:a,t.push(";");var s=t.join(""),i=r.tmp,l=i.r,c=i.l.all,p=r.parent,o=p.all;if(!o){var u=p.raw,h=u.length>0,f=p.rules,d=f.length;o=p.all=Array(h?d+1:d);for(var v=0;v<d;v++)o[v]=f[v].join("");h&&(o[d]=u.join(","))}if(r.all=o,o!==c){for(var w=0,g=o.length;w<g&&o[w]===c[w];w++);for(var m=c.length;m-- >w;)l.push("}");for(;w<g;w++)l.push(o[w],"{")}l.push(s),i.l=r}}}function h(e){if(!e.is&&6===e.type){e.is=!0;var r=e.raw;if(r.length){for(var c,p=r.length;p-- >0;)(c=r[p]).length>1&&a.test(c)&&r.splice.apply(r,[p,1].concat(c.split(n).filter(Boolean)));for(var o,u,h=e.parent,f=r[0],d=/^@/.test(f),v=e.raw=d&&t.hasOwnProperty(f)?h.raw:[],w=h.raw,g=e.tmp.c,m="",y=0,b=!1,k=0,j=0;k<r.length;k++)if("&"===(u=r[k])?b=!0:"("===u||"["===u?y++:")"===u||"]"===u?y--:i.test(u)?u=r[k]="."+(g[u=u.slice(1)]||(g[u]=g.id+u)):"*"===u&&"="!==r[k+1]&&((u=r[k-1])&&s.test(u)&&(r.splice(k,0," "),k++),(u=r[k+1])&&s.test(u)&&(r.splice(k+1,0," "),k++),u=r[k]),0===y&&(","===u||k===r.length-1)){if((o=r.slice(j,","===u?k:k+1)).length)if(u=o[0],d)m=m?" ("+o.join("")+" or"+m+")":o.slice(1).join("");else{b||(" "===u||">"===u||"+"===u||"~"===u?o.unshift("&"):o.unshift("&"," "));for(var x=[],C=o.length;C-- >0;)"&"===o[C]&&x.push(C);for(var _=0,E=w.length||1;_<E;_++){u=w[_]||"";for(var I=x.length;I-- >0;)o[x[I]]=u;(u=o.join("").replace(l,""))&&v.push(u)}}j=k+1,b=!1}if(e.rules=h.rules.slice(),d){for(var P,A=e.rules,B=A.length;B-- >0;)if((P=A[B])[0]===f){var O=P[1];return void(A[B]=[f,O&&m?O+" and"+m:O||m])}e.rules.push([f,m])}}}}return function(e,t){var a=new p(1,{children:[]});a.all=[],a.tmp={r:[],l:a,c:t};var n,s,i=new p(5,a),l=0;for(r.lastIndex=0;n=r.exec(e);)switch(s=n[0],i.type){case 4:if(i.raw.push(s),l<1)switch(s){case"\\":l=2;break;case i.raw[0]:(i=i.parent).raw.push(i.children.pop().raw.join(""))}l>0&&l--;break;case 2:switch(s){case"\r":case"\n":case"\u2028":case"\u2029":o(i),i=i.parent;break;default:i.raw.push(s)}break;case 3:if("*/"===s)o(i),i=i.parent;else i.raw.push(s);break;default:switch(s){case"`":case"'":case'"':(i=new p(4,i)).raw.push(s);break;case"//":i=new p(2,i);break;case"/*":i=new p(3,i);break;case"{":i.type=6,h(i),i=new p(5,i);break;case"}":u(i),i=new p(5,i.parent.parent);break;case";":i.raw.length&&(u(i),i=new p(5,i.parent));break;default:(s=s.trim())&&i.raw.push(s.replace(c," "))}}u(i);for(var f=a.tmp.r,d=a.tmp.l.all.length;d-- >0;)f.push("}");return a.tmp.r.join("")}}(),c=(a=function(e,r){return t(),(a=l)(e,r)},n=0,s={},i="undefined"!=typeof window?function(e){var r=document.getElementById(e.id)||document.createElement("style");return r.id=e.id,r.textContent=e.text,document.head.appendChild(r),r}:function(){return null},function(e){for(var r=2*e.length-1,t=Array(r),l=0,c=0;t[l]=e[l++-c],l<r;l++)t[l]=arguments[++c];var p=t.join(""),o=s[p];if(!(p in s)){var u={id:"rs_"+ ++n};u.text=a(p,u),s[p]=o=[0,u,i(u)]}o[0]++;var h=!0,f={},d=o[1];for(var v in d)f[v]=d[v];return f.destroy=function(){if(h&&(h=!1,p in s&&--o[0]<1)){var e,r=o[2];r&&(e=r.parentNode)&&e.removeChild(r),delete s[p]}},f});exports._cssInit=t,exports._cssProperties=e,exports.css=c;