/* eslint-disable */
var e={},r=!0;function t(){if(r){r=!1;try{var t=/^-[^-]+-/,a=getComputedStyle(document.documentElement);for(var n in a)+n>-1&&(n=a[n],e[n.replace(t,"")]=n)}catch(s){}}}var a=/\/\/|\/\*|\*\/|[\r\n\u2028\u2029]|[^,\r\n\u2028\u2029*/\\{}:;`'"]+|./g,n={"@container":1,"@document":1,"@layer":1,"@media":1,"@scope":1,"@starting-style":1,"@supports":1},s=/^[^`'"]/,i=/\s*([\s>+~^|=])\s*|([()[\]&])/,l=/^[^,\s>+~]/,c=/^\._/,o=/^[\s>+~]+|[\s>+~]+$/g,p=/\s+/g;class u{constructor(e,r){this.type=e,this.raw=[],this.rules=[],this.all=null,this.is=!1,this.parent=r,r.children.push(this),this.tmp=r.tmp,this.children=[]}}function h(e){if(!e.is&&(2===e.type||3===e.type)){e.is=!0;var r=e.raw;r.length&&(r.push("*/"),e.tmp.r.push("/*"+r.join("")))}}function f(r){if(!r.is&&5===r.type){r.is=!0;var t=r.raw;if(t.length){var a=t[0],n=t[1];":"!==n?n&&t.splice(1,0," "):t[0]=e.hasOwnProperty(a)?e[a]:a,t.push(";");var s=t.join(""),i=r.tmp,l=i.r,c=i.l.all,o=r.parent,p=o.all;if(!p){var u=o.raw,h=u.length>0,f=o.rules,d=f.length;p=o.all=Array(h?d+1:d);for(var v=0;v<d;v++)p[v]=f[v].join("");h&&(p[d]=u.join(","))}if(r.all=p,p!==c){for(var w=0,g=p.length;w<g&&p[w]===c[w];w++);for(var m=c.length;m-- >w;)l.push("}");for(;w<g;w++)l.push(p[w],"{")}l.push(s),i.l=r}}}function d(e){if(!e.is&&6===e.type){e.is=!0;var r=e.raw;if(r.length){for(var t,a=r.length;a-- >0;)(t=r[a]).length>1&&s.test(t)&&r.splice.apply(r,[a,1].concat(t.split(i).filter(Boolean)));for(var p,u,h=e.parent,f=r[0],d=/^@/.test(f),v=e.raw=d&&n.hasOwnProperty(f)?h.raw:[],w=h.raw,g=e.tmp.c,m="",y=0,b=!1,k=0,j=0;k<r.length;k++)if("&"===(u=r[k])?b=!0:"("===u||"["===u?y++:")"===u||"]"===u?y--:c.test(u)?u=r[k]="."+(g[u=u.slice(1)]||(g[u]=g.id+u)):"*"===u&&"="!==r[k+1]&&((u=r[k-1])&&l.test(u)&&(r.splice(k,0," "),k++),(u=r[k+1])&&l.test(u)&&(r.splice(k+1,0," "),k++),u=r[k]),0===y&&(","===u||k===r.length-1)){if((p=r.slice(j,","===u?k:k+1)).length)if(u=p[0],d)m=m?" ("+p.join("")+" or"+m+")":p.slice(1).join("");else{b||(" "===u||">"===u||"+"===u||"~"===u?p.unshift("&"):p.unshift("&"," "));for(var P=[],x=p.length;x-- >0;)"&"===p[x]&&P.push(x);for(var C=0,O=w.length||1;C<O;C++){u=w[C]||"";for(var _=P.length;_-- >0;)p[P[_]]=u;(u=p.join("").replace(o,""))&&v.push(u)}}j=k+1,b=!1}if(e.rules=h.rules.slice(),d){for(var E,I=e.rules,A=I.length;A-- >0;)if((E=I[A])[0]===f){var B=E[1];return void(I[A]=[f,B&&m?B+" and"+m:B||m])}e.rules.push([f,m])}}}}function v(e,r){var t=new u(1,{children:[]});t.all=[],t.tmp={r:[],l:t,c:r};var n,s,i=new u(5,t),l=0;for(a.lastIndex=0;n=a.exec(e);)switch(s=n[0],i.type){case 4:if(i.raw.push(s),l<1)switch(s){case"\\":l=2;break;case i.raw[0]:(i=i.parent).raw.push(i.children.pop().raw.join(""))}l>0&&l--;break;case 2:switch(s){case"\r":case"\n":case"\u2028":case"\u2029":h(i),i=i.parent;break;default:i.raw.push(s)}break;case 3:if("*/"===s)h(i),i=i.parent;else i.raw.push(s);break;default:switch(s){case"`":case"'":case'"':(i=new u(4,i)).raw.push(s);break;case"//":i=new u(2,i);break;case"/*":i=new u(3,i);break;case"{":i.type=6,d(i),i=new u(5,i);break;case"}":f(i),i=new u(5,i.parent.parent);break;case";":i.raw.length&&(f(i),i=new u(5,i.parent));break;default:(s=s.trim())&&i.raw.push(s.replace(p," "))}}f(i);for(var c=t.tmp.r,o=t.tmp.l.all.length;o-- >0;)c.push("}");return t.tmp.r.join("")}var w=function(e,r){return t(),(w=v)(e,r)},g=0,m={},y="undefined"!=typeof document?function(e){var r=document.getElementById(e.id)||document.createElement("style");return r.id=e.id,r.textContent=e.css,document.head.appendChild(r),r}:function(){return null},b="undefined"!=typeof document?function(e){var r=e.parentNode;r&&r.removeChild(e)}:function(){};function k(e,...r){for(var t=2*e.length-1,a=Array(t),n=0,s=0;a[n]=e[n++-s],n<t;n++)a[n]=r[s++];var i=a.join("");if(!m.hasOwnProperty(i)){var l={id:"rcss_"+ ++g};l.css=w(i,l),m[i]=[0,l,y(l)]}var c=!0,o={},p=m[i],u=p[1];for(var h in p[0]++,u)o[h]=u[h];return o.destroy=function(){c&&(c=!1,m.hasOwnProperty(i)&&--p[0]<1&&(b(p[2]),delete m[i]))},o}export{t as _cssInit,e as _cssProperties,k as css};
