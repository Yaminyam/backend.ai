/*! For license information please see 727.7ac912e1.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[727],{42272:function(e,n,t){t.d(n,{Z:function(){return Q}});var i,a,r=t(4942),o=t(29439),c=t(4519),l=t(72842),s=t(43270),u=t.n(s),d=t(15671),h=t(43144),f=t(37762),g=Object.defineProperty,v=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,E=function(e,n,t){return n in e?g(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t},C=function(e,n){for(var t in n||(n={}))m.call(n,t)&&E(e,t,n[t]);if(v){var i,a=(0,f.Z)(v(n));try{for(a.s();!(i=a.n()).done;){t=i.value;p.call(n,t)&&E(e,t,n[t])}}catch(r){a.e(r)}finally{a.f()}}return e},w=function(e,n){var t={};for(var i in e)m.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&v){var a,r=(0,f.Z)(v(e));try{for(r.s();!(a=r.n()).done;){i=a.value;n.indexOf(i)<0&&p.call(e,i)&&(t[i]=e[i])}}catch(o){r.e(o)}finally{r.f()}}return t};!function(e){var n=function(){function n(e,t,i,a){if((0,d.Z)(this,n),this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(a<-1||a>7)throw new RangeError("Mask value out of range");this.size=4*e+17;for(var o=[],c=0;c<this.size;c++)o.push(!1);for(var l=0;l<this.size;l++)this.modules.push(o.slice()),this.isFunction.push(o.slice());this.drawFunctionPatterns();var s=this.addEccAndInterleave(i);if(this.drawCodewords(s),-1==a)for(var u=1e9,h=0;h<8;h++){this.applyMask(h),this.drawFormatBits(h);var f=this.getPenaltyScore();f<u&&(a=h,u=f),this.applyMask(h)}r(0<=a&&a<=7),this.mask=a,this.applyMask(a),this.drawFormatBits(a),this.isFunction=[]}return(0,h.Z)(n,[{key:"getModule",value:function(e,n){return 0<=e&&e<this.size&&0<=n&&n<this.size&&this.modules[n][e]}},{key:"getModules",value:function(){return this.modules}},{key:"drawFunctionPatterns",value:function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var n=this.getAlignmentPatternPositions(),t=n.length,i=0;i<t;i++)for(var a=0;a<t;a++)0==i&&0==a||0==i&&a==t-1||i==t-1&&0==a||this.drawAlignmentPattern(n[i],n[a]);this.drawFormatBits(0),this.drawVersion()}},{key:"drawFormatBits",value:function(e){for(var n=this.errorCorrectionLevel.formatBits<<3|e,t=n,i=0;i<10;i++)t=t<<1^1335*(t>>>9);var o=21522^(n<<10|t);r(o>>>15==0);for(var c=0;c<=5;c++)this.setFunctionModule(8,c,a(o,c));this.setFunctionModule(8,7,a(o,6)),this.setFunctionModule(8,8,a(o,7)),this.setFunctionModule(7,8,a(o,8));for(var l=9;l<15;l++)this.setFunctionModule(14-l,8,a(o,l));for(var s=0;s<8;s++)this.setFunctionModule(this.size-1-s,8,a(o,s));for(var u=8;u<15;u++)this.setFunctionModule(8,this.size-15+u,a(o,u));this.setFunctionModule(8,this.size-8,!0)}},{key:"drawVersion",value:function(){if(!(this.version<7)){for(var e=this.version,n=0;n<12;n++)e=e<<1^7973*(e>>>11);var t=this.version<<12|e;r(t>>>18==0);for(var i=0;i<18;i++){var o=a(t,i),c=this.size-11+i%3,l=Math.floor(i/3);this.setFunctionModule(c,l,o),this.setFunctionModule(l,c,o)}}}},{key:"drawFinderPattern",value:function(e,n){for(var t=-4;t<=4;t++)for(var i=-4;i<=4;i++){var a=Math.max(Math.abs(i),Math.abs(t)),r=e+i,o=n+t;0<=r&&r<this.size&&0<=o&&o<this.size&&this.setFunctionModule(r,o,2!=a&&4!=a)}}},{key:"drawAlignmentPattern",value:function(e,n){for(var t=-2;t<=2;t++)for(var i=-2;i<=2;i++)this.setFunctionModule(e+i,n+t,1!=Math.max(Math.abs(i),Math.abs(t)))}},{key:"setFunctionModule",value:function(e,n,t){this.modules[n][e]=t,this.isFunction[n][e]=!0}},{key:"addEccAndInterleave",value:function(e){var t=this.version,i=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,i))throw new RangeError("Invalid argument");for(var a=n.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][t],o=n.ECC_CODEWORDS_PER_BLOCK[i.ordinal][t],c=Math.floor(n.getNumRawDataModules(t)/8),l=a-c%a,s=Math.floor(c/a),u=[],d=n.reedSolomonComputeDivisor(o),h=0,f=0;h<a;h++){var g=e.slice(f,f+s-o+(h<l?0:1));f+=g.length;var v=n.reedSolomonComputeRemainder(g,d);h<l&&g.push(0),u.push(g.concat(v))}for(var m=[],p=function(e){u.forEach((function(n,t){(e!=s-o||t>=l)&&m.push(n[e])}))},E=0;E<u[0].length;E++)p(E);return r(m.length==c),m}},{key:"drawCodewords",value:function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,i=this.size-1;i>=1;i-=2){6==i&&(i=5);for(var o=0;o<this.size;o++)for(var c=0;c<2;c++){var l=i-c,s=0==(i+1&2)?this.size-1-o:o;!this.isFunction[s][l]&&t<8*e.length&&(this.modules[s][l]=a(e[t>>>3],7-(7&t)),t++)}}r(t==8*e.length)}},{key:"applyMask",value:function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var n=0;n<this.size;n++)for(var t=0;t<this.size;t++){var i=void 0;switch(e){case 0:i=(t+n)%2==0;break;case 1:i=n%2==0;break;case 2:i=t%3==0;break;case 3:i=(t+n)%3==0;break;case 4:i=(Math.floor(t/3)+Math.floor(n/2))%2==0;break;case 5:i=t*n%2+t*n%3==0;break;case 6:i=(t*n%2+t*n%3)%2==0;break;case 7:i=((t+n)%2+t*n%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[n][t]&&i&&(this.modules[n][t]=!this.modules[n][t])}}},{key:"getPenaltyScore",value:function(){for(var e=0,t=0;t<this.size;t++){for(var i=!1,a=0,o=[0,0,0,0,0,0,0],c=0;c<this.size;c++)this.modules[t][c]==i?5==++a?e+=n.PENALTY_N1:a>5&&e++:(this.finderPenaltyAddHistory(a,o),i||(e+=this.finderPenaltyCountPatterns(o)*n.PENALTY_N3),i=this.modules[t][c],a=1);e+=this.finderPenaltyTerminateAndCount(i,a,o)*n.PENALTY_N3}for(var l=0;l<this.size;l++){for(var s=!1,u=0,d=[0,0,0,0,0,0,0],h=0;h<this.size;h++)this.modules[h][l]==s?5==++u?e+=n.PENALTY_N1:u>5&&e++:(this.finderPenaltyAddHistory(u,d),s||(e+=this.finderPenaltyCountPatterns(d)*n.PENALTY_N3),s=this.modules[h][l],u=1);e+=this.finderPenaltyTerminateAndCount(s,u,d)*n.PENALTY_N3}for(var g=0;g<this.size-1;g++)for(var v=0;v<this.size-1;v++){var m=this.modules[g][v];m==this.modules[g][v+1]&&m==this.modules[g+1][v]&&m==this.modules[g+1][v+1]&&(e+=n.PENALTY_N2)}var p,E=0,C=(0,f.Z)(this.modules);try{for(C.s();!(p=C.n()).done;){E=p.value.reduce((function(e,n){return e+(n?1:0)}),E)}}catch(k){C.e(k)}finally{C.f()}var w=this.size*this.size,y=Math.ceil(Math.abs(20*E-10*w)/w)-1;return r(0<=y&&y<=9),r(0<=(e+=y*n.PENALTY_N4)&&e<=2568888),e}},{key:"getAlignmentPatternPositions",value:function(){if(1==this.version)return[];for(var e=Math.floor(this.version/7)+2,n=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),t=[6],i=this.size-7;t.length<e;i-=n)t.splice(1,0,i);return t}},{key:"finderPenaltyCountPatterns",value:function(e){var n=e[1];r(n<=3*this.size);var t=n>0&&e[2]==n&&e[3]==3*n&&e[4]==n&&e[5]==n;return(t&&e[0]>=4*n&&e[6]>=n?1:0)+(t&&e[6]>=4*n&&e[0]>=n?1:0)}},{key:"finderPenaltyTerminateAndCount",value:function(e,n,t){return e&&(this.finderPenaltyAddHistory(n,t),n=0),n+=this.size,this.finderPenaltyAddHistory(n,t),this.finderPenaltyCountPatterns(t)}},{key:"finderPenaltyAddHistory",value:function(e,n){0==n[0]&&(e+=this.size),n.pop(),n.unshift(e)}}],[{key:"encodeText",value:function(t,i){var a=e.QrSegment.makeSegments(t);return n.encodeSegments(a,i)}},{key:"encodeBinary",value:function(t,i){var a=e.QrSegment.makeBytes(t);return n.encodeSegments([a],i)}},{key:"encodeSegments",value:function(e,t){var a,c,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:40,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,d=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(!(n.MIN_VERSION<=l&&l<=s&&s<=n.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");for(a=l;;a++){var h=8*n.getNumDataCodewords(a,t),g=o.getTotalBits(e,a);if(g<=h){c=g;break}if(a>=s)throw new RangeError("Data too long")}for(var v=0,m=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];v<m.length;v++){var p=m[v];d&&c<=8*n.getNumDataCodewords(a,p)&&(t=p)}var E,C=[],w=(0,f.Z)(e);try{for(w.s();!(E=w.n()).done;){var y=E.value;i(y.mode.modeBits,4,C),i(y.numChars,y.mode.numCharCountBits(a),C);var k,M=(0,f.Z)(y.getData());try{for(M.s();!(k=M.n()).done;){var S=k.value;C.push(S)}}catch(Z){M.e(Z)}finally{M.f()}}}catch(Z){w.e(Z)}finally{w.f()}r(C.length==c);var b=8*n.getNumDataCodewords(a,t);r(C.length<=b),i(0,Math.min(4,b-C.length),C),i(0,(8-C.length%8)%8,C),r(C.length%8==0);for(var I=236;C.length<b;I^=253)i(I,8,C);for(var R=[];8*R.length<C.length;)R.push(0);return C.forEach((function(e,n){return R[n>>>3]|=e<<7-(7&n)})),new n(a,t,R,u)}},{key:"getNumRawDataModules",value:function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var i=Math.floor(e/7)+2;t-=(25*i-10)*i-55,e>=7&&(t-=36)}return r(208<=t&&t<=29648),t}},{key:"getNumDataCodewords",value:function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]}},{key:"reedSolomonComputeDivisor",value:function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],i=0;i<e-1;i++)t.push(0);t.push(1);for(var a=1,r=0;r<e;r++){for(var o=0;o<t.length;o++)t[o]=n.reedSolomonMultiply(t[o],a),o+1<t.length&&(t[o]^=t[o+1]);a=n.reedSolomonMultiply(a,2)}return t}},{key:"reedSolomonComputeRemainder",value:function(e,t){var i,a=t.map((function(e){return 0})),r=(0,f.Z)(e);try{var o=function(){var e=i.value^a.shift();a.push(0),t.forEach((function(t,i){return a[i]^=n.reedSolomonMultiply(t,e)}))};for(r.s();!(i=r.n()).done;)o()}catch(c){r.e(c)}finally{r.f()}return a}},{key:"reedSolomonMultiply",value:function(e,n){if(e>>>8!=0||n>>>8!=0)throw new RangeError("Byte out of range");for(var t=0,i=7;i>=0;i--)t=t<<1^285*(t>>>7),t^=(n>>>i&1)*e;return r(t>>>8==0),t}}]),n}(),t=n;function i(e,n,t){if(n<0||n>31||e>>>n!=0)throw new RangeError("Value out of range");for(var i=n-1;i>=0;i--)t.push(e>>>i&1)}function a(e,n){return 0!=(e>>>n&1)}function r(e){if(!e)throw new Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;var o=function(){function e(n,t,i){if((0,d.Z)(this,e),this.mode=n,this.numChars=t,this.bitData=i,t<0)throw new RangeError("Invalid argument");this.bitData=i.slice()}return(0,h.Z)(e,[{key:"getData",value:function(){return this.bitData.slice()}}],[{key:"makeBytes",value:function(n){var t,a=[],r=(0,f.Z)(n);try{for(r.s();!(t=r.n()).done;){i(t.value,8,a)}}catch(o){r.e(o)}finally{r.f()}return new e(e.Mode.BYTE,n.length,a)}},{key:"makeNumeric",value:function(n){if(!e.isNumeric(n))throw new RangeError("String contains non-numeric characters");for(var t=[],a=0;a<n.length;){var r=Math.min(n.length-a,3);i(parseInt(n.substr(a,r),10),3*r+1,t),a+=r}return new e(e.Mode.NUMERIC,n.length,t)}},{key:"makeAlphanumeric",value:function(n){if(!e.isAlphanumeric(n))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t,a=[];for(t=0;t+2<=n.length;t+=2){var r=45*e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t));i(r+=e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t+1)),11,a)}return t<n.length&&i(e.ALPHANUMERIC_CHARSET.indexOf(n.charAt(t)),6,a),new e(e.Mode.ALPHANUMERIC,n.length,a)}},{key:"makeSegments",value:function(n){return""==n?[]:e.isNumeric(n)?[e.makeNumeric(n)]:e.isAlphanumeric(n)?[e.makeAlphanumeric(n)]:[e.makeBytes(e.toUtf8ByteArray(n))]}},{key:"makeEci",value:function(n){var t=[];if(n<0)throw new RangeError("ECI assignment value out of range");if(n<128)i(n,8,t);else if(n<16384)i(2,2,t),i(n,14,t);else{if(!(n<1e6))throw new RangeError("ECI assignment value out of range");i(6,3,t),i(n,21,t)}return new e(e.Mode.ECI,0,t)}},{key:"isNumeric",value:function(n){return e.NUMERIC_REGEX.test(n)}},{key:"isAlphanumeric",value:function(n){return e.ALPHANUMERIC_REGEX.test(n)}},{key:"getTotalBits",value:function(e,n){var t,i=0,a=(0,f.Z)(e);try{for(a.s();!(t=a.n()).done;){var r=t.value,o=r.mode.numCharCountBits(n);if(r.numChars>=1<<o)return 1/0;i+=4+o+r.bitData.length}}catch(c){a.e(c)}finally{a.f()}return i}},{key:"toUtf8ByteArray",value:function(e){e=encodeURI(e);for(var n=[],t=0;t<e.length;t++)"%"!=e.charAt(t)?n.push(e.charCodeAt(t)):(n.push(parseInt(e.substr(t+1,2),16)),t+=2);return n}}]),e}();o.NUMERIC_REGEX=/^[0-9]*$/,o.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,o.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=o}(i||(i={})),function(e){var n=(0,h.Z)((function e(n,t){(0,d.Z)(this,e),this.ordinal=n,this.formatBits=t})),t=n;t.LOW=new n(0,1),t.MEDIUM=new n(1,0),t.QUARTILE=new n(2,3),t.HIGH=new n(3,2),e.Ecc=t}((a=i||(i={})).QrCode||(a.QrCode={})),function(e){!function(e){var n=function(){function e(n,t){(0,d.Z)(this,e),this.modeBits=n,this.numBitsCharCount=t}return(0,h.Z)(e,[{key:"numCharCountBits",value:function(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}}]),e}(),t=n;t.NUMERIC=new n(1,[10,12,14]),t.ALPHANUMERIC=new n(2,[9,11,13]),t.BYTE=new n(4,[8,16,16]),t.KANJI=new n(8,[8,10,12]),t.ECI=new n(7,[0,0,0]),e.Mode=t}(e.QrSegment||(e.QrSegment={}))}(i||(i={}));var y=i,k={L:y.QrCode.Ecc.LOW,M:y.QrCode.Ecc.MEDIUM,Q:y.QrCode.Ecc.QUARTILE,H:y.QrCode.Ecc.HIGH},M="#FFFFFF",S="#000000",b=4,I=.1;function R(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[];return e.forEach((function(e,i){var a=null;e.forEach((function(r,o){if(!r&&null!==a)return t.push("M".concat(a+n," ").concat(i+n,"h").concat(o-a,"v1H").concat(a+n,"z")),void(a=null);if(o!==e.length-1)r&&null===a&&(a=o);else{if(!r)return;null===a?t.push("M".concat(o+n,",").concat(i+n," h1v1H").concat(o+n,"z")):t.push("M".concat(a+n,",").concat(i+n," h").concat(o+1-a,"v1H").concat(a+n,"z"))}}))})),t.join("")}function Z(e,n){return e.slice().map((function(e,t){return t<n.y||t>=n.y+n.h?e:e.map((function(e,t){return(t<n.x||t>=n.x+n.w)&&e}))}))}function x(e,n,t,i){if(null==i)return null;var a=t?b:0,r=e.length+2*a,o=Math.floor(n*I),c=r/n,l=(i.width||o)*c,s=(i.height||o)*c,u=null==i.x?e.length/2-l/2:i.x*c,d=null==i.y?e.length/2-s/2:i.y*c,h=null;if(i.excavate){var f=Math.floor(u),g=Math.floor(d);h={x:f,y:g,w:Math.ceil(l+u-f),h:Math.ceil(s+d-g)}}return{x:u,y:d,h:s,w:l,excavation:h}}var N=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function A(e){var n=e,t=n.value,i=n.size,a=void 0===i?128:i,r=n.level,l=void 0===r?"L":r,s=n.bgColor,u=void 0===s?M:s,d=n.fgColor,h=void 0===d?S:d,f=n.includeMargin,g=void 0!==f&&f,v=n.style,m=n.imageSettings,p=w(n,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),E=null==m?void 0:m.src,I=(0,c.useRef)(null),A=(0,c.useRef)(null),P=(0,c.useState)(!1),O=(0,o.Z)(P,2),z=(O[0],O[1]);(0,c.useEffect)((function(){if(null!=I.current){var e=I.current,n=e.getContext("2d");if(!n)return;var i=y.QrCode.encodeText(t,k[l]).getModules(),r=g?b:0,o=i.length+2*r,c=x(i,a,g,m),s=A.current,d=null!=c&&null!==s&&s.complete&&0!==s.naturalHeight&&0!==s.naturalWidth;d&&null!=c.excavation&&(i=Z(i,c.excavation));var f=window.devicePixelRatio||1;e.height=e.width=a*f;var v=a/o*f;n.scale(v,v),n.fillStyle=u,n.fillRect(0,0,o,o),n.fillStyle=h,N?n.fill(new Path2D(R(i,r))):i.forEach((function(e,t){e.forEach((function(e,i){e&&n.fillRect(i+r,t+r,1,1)}))})),d&&n.drawImage(s,c.x+r,c.y+r,c.w,c.h)}})),(0,c.useEffect)((function(){z(!1)}),[E]);var _=C({height:a,width:a},v),L=null;return null!=E&&(L=c.createElement("img",{src:E,key:E,style:{display:"none"},onLoad:function(){z(!0)},ref:A})),c.createElement(c.Fragment,null,c.createElement("canvas",C({style:_,height:a,width:a,ref:I},p)),L)}function P(e){var n=e,t=n.value,i=n.size,a=void 0===i?128:i,r=n.level,o=void 0===r?"L":r,l=n.bgColor,s=void 0===l?M:l,u=n.fgColor,d=void 0===u?S:u,h=n.includeMargin,f=void 0!==h&&h,g=n.imageSettings,v=w(n,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),m=y.QrCode.encodeText(t,k[o]).getModules(),p=f?b:0,E=m.length+2*p,I=x(m,a,f,g),N=null;null!=g&&null!=I&&(null!=I.excavation&&(m=Z(m,I.excavation)),N=c.createElement("image",{xlinkHref:g.src,height:I.h,width:I.w,x:I.x+p,y:I.y+p,preserveAspectRatio:"none"}));var A=R(m,p);return c.createElement("svg",C({height:a,width:a,viewBox:"0 0 ".concat(E," ").concat(E)},v),c.createElement("path",{fill:s,d:"M0,0 h".concat(E,"v").concat(E,"H0z"),shapeRendering:"crispEdges"}),c.createElement("path",{fill:d,d:A,shapeRendering:"crispEdges"}),N)}var O=t(92171),z=t(48698),_=t(56951),L=t(39883),T=t(51267),H=t(21480),D=t(70111),F=t(41157),B=(0,D.Z)("QRCode",(function(e){return function(e){var n,t,i=e.componentCls;return t={},(0,r.Z)(t,i,Object.assign(Object.assign({},(0,H.Wf)(e)),(n={display:"flex",justifyContent:"center",alignItems:"center",padding:e.paddingSM,backgroundColor:e.colorWhite,borderRadius:e.borderRadiusLG,border:"".concat(e.lineWidth,"px ").concat(e.lineType," ").concat(e.colorSplit),position:"relative",width:"100%",height:"100%",overflow:"hidden"},(0,r.Z)(n,"& > ".concat(i,"-mask"),(0,r.Z)({position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100%",color:e.colorText,lineHeight:e.lineHeight,background:e.QRCodeMaskBackgroundColor,textAlign:"center"},"& > ".concat(i,"-expired"),{color:e.QRCodeExpiredTextColor})),(0,r.Z)(n,"&-icon",{marginBlockEnd:e.marginXS,fontSize:e.controlHeight}),n))),(0,r.Z)(t,"".concat(i,"-borderless"),{borderColor:"transparent"}),t}((0,F.TS)(e,{QRCodeExpiredTextColor:"rgba(0, 0, 0, 0.88)",QRCodeMaskBackgroundColor:"rgba(255, 255, 255, 0.96)"}))}));var Q=function(e){var n=(0,T.Z)(),t=(0,o.Z)(n,2)[1],i=e.value,a=e.type,s=void 0===a?"canvas":a,d=e.icon,h=void 0===d?"":d,f=e.size,g=void 0===f?160:f,v=e.iconSize,m=void 0===v?40:v,p=e.color,E=void 0===p?t.colorText:p,C=e.errorLevel,w=void 0===C?"M":C,y=e.status,k=void 0===y?"active":y,M=e.bordered,S=void 0===M||M,b=e.onRefresh,I=e.style,R=e.className,Z=e.rootClassName,x=e.prefixCls,N=e.bgColor,H=void 0===N?"transparent":N,D=(0,(0,c.useContext)(z.E_).getPrefixCls)("qrcode",x),F=B(D),Q=(0,o.Z)(F,2),U=Q[0],j=Q[1],W={src:h,x:void 0,y:void 0,height:m,width:m,excavate:!0},X={value:i,size:g-2*(t.paddingSM+t.lineWidth),level:w,bgColor:H,fgColor:E,imageSettings:h?W:void 0},V=(0,_.Z)("QRCode"),Y=(0,o.Z)(V,1)[0];if(!i)return null;var K=u()(D,R,Z,j,(0,r.Z)({},"".concat(D,"-borderless"),!S));return U(c.createElement("div",{style:Object.assign(Object.assign({},I),{width:g,height:g,backgroundColor:H}),className:K},"active"!==k&&c.createElement("div",{className:"".concat(D,"-mask")},"loading"===k&&c.createElement(L.Z,null),"expired"===k&&c.createElement(c.Fragment,null,c.createElement("p",{className:"".concat(D,"-expired")},null===Y||void 0===Y?void 0:Y.expired),b&&c.createElement(O.ZP,{type:"link",icon:c.createElement(l.Z,null),onClick:b},null===Y||void 0===Y?void 0:Y.refresh))),"canvas"===s?c.createElement(A,Object.assign({},X)):c.createElement(P,Object.assign({},X))))}},62708:function(e,n,t){t.d(n,{Z:function(){return P}});var i=t(4942),a=t(29439),r=t(4519),o=t(32064),c=t(43270),l=t.n(c),s=t(87462),u=t(44925),d=t(269),h=t(33714),f=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],g=r.forwardRef((function(e,n){var t,o=e.prefixCls,c=void 0===o?"rc-switch":o,g=e.className,v=e.checked,m=e.defaultChecked,p=e.disabled,E=e.loadingIcon,C=e.checkedChildren,w=e.unCheckedChildren,y=e.onClick,k=e.onChange,M=e.onKeyDown,S=(0,u.Z)(e,f),b=(0,d.Z)(!1,{value:v,defaultValue:m}),I=(0,a.Z)(b,2),R=I[0],Z=I[1];function x(e,n){var t=R;return p||(Z(t=e),null===k||void 0===k||k(t,n)),t}var N=l()(c,g,(t={},(0,i.Z)(t,"".concat(c,"-checked"),R),(0,i.Z)(t,"".concat(c,"-disabled"),p),t));return r.createElement("button",(0,s.Z)({},S,{type:"button",role:"switch","aria-checked":R,disabled:p,className:N,ref:n,onKeyDown:function(e){e.which===h.Z.LEFT?x(!1,e):e.which===h.Z.RIGHT&&x(!0,e),null===M||void 0===M||M(e)},onClick:function(e){var n=x(!R,e);null===y||void 0===y||y(n,e)}}),E,r.createElement("span",{className:"".concat(c,"-inner")},r.createElement("span",{className:"".concat(c,"-inner-checked")},C),r.createElement("span",{className:"".concat(c,"-inner-unchecked")},w)))}));g.displayName="Switch";var v=g,m=t(99495),p=t(48698),E=t(46963),C=t(76569),w=t(60989),y=t(21480),k=t(70111),M=t(41157),S=function(e){var n,t,a,r,o,c=e.componentCls,l=e.trackHeightSM,s=e.trackPadding,u=e.trackMinWidthSM,d=e.innerMinMarginSM,h=e.innerMaxMarginSM,f=e.handleSizeSM,g="".concat(c,"-inner");return(0,i.Z)({},c,(0,i.Z)({},"&".concat(c,"-small"),(o={minWidth:u,height:l,lineHeight:"".concat(l,"px")},(0,i.Z)(o,"".concat(c,"-inner"),(n={paddingInlineStart:h,paddingInlineEnd:d},(0,i.Z)(n,"".concat(g,"-checked"),{marginInlineStart:"calc(-100% + ".concat(f+2*s,"px - ").concat(2*h,"px)"),marginInlineEnd:"calc(100% - ".concat(f+2*s,"px + ").concat(2*h,"px)")}),(0,i.Z)(n,"".concat(g,"-unchecked"),{marginTop:-l,marginInlineStart:0,marginInlineEnd:0}),n)),(0,i.Z)(o,"".concat(c,"-handle"),{width:f,height:f}),(0,i.Z)(o,"".concat(c,"-loading-icon"),{top:(f-e.switchLoadingIconSize)/2,fontSize:e.switchLoadingIconSize}),(0,i.Z)(o,"&".concat(c,"-checked"),(a={},(0,i.Z)(a,"".concat(c,"-inner"),(t={paddingInlineStart:d,paddingInlineEnd:h},(0,i.Z)(t,"".concat(g,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,i.Z)(t,"".concat(g,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(f+2*s,"px + ").concat(2*h,"px)"),marginInlineEnd:"calc(-100% + ".concat(f+2*s,"px - ").concat(2*h,"px)")}),t)),(0,i.Z)(a,"".concat(c,"-handle"),{insetInlineStart:"calc(100% - ".concat(f+s,"px)")}),a)),(0,i.Z)(o,"&:not(".concat(c,"-disabled):active"),(r={},(0,i.Z)(r,"&:not(".concat(c,"-checked) ").concat(g),(0,i.Z)({},"".concat(g,"-unchecked"),{marginInlineStart:e.marginXXS/2,marginInlineEnd:-e.marginXXS/2})),(0,i.Z)(r,"&".concat(c,"-checked ").concat(g),(0,i.Z)({},"".concat(g,"-checked"),{marginInlineStart:-e.marginXXS/2,marginInlineEnd:e.marginXXS/2})),r)),o)))},b=function(e){var n,t=e.componentCls,a=e.handleSize;return(0,i.Z)({},t,(n={},(0,i.Z)(n,"".concat(t,"-loading-icon").concat(e.iconCls),{position:"relative",top:(a-e.fontSize)/2,color:e.switchLoadingIconColor,verticalAlign:"top"}),(0,i.Z)(n,"&".concat(t,"-checked ").concat(t,"-loading-icon"),{color:e.switchColor}),n))},I=function(e){var n,t,a=e.componentCls,r=e.motion,o=e.trackPadding,c=e.handleBg,l=e.handleShadow,s=e.handleSize,u="".concat(a,"-handle");return(0,i.Z)({},a,(t={},(0,i.Z)(t,u,{position:"absolute",top:o,insetInlineStart:o,width:s,height:s,transition:"all ".concat(e.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:c,borderRadius:s/2,boxShadow:l,transition:"all ".concat(e.switchDuration," ease-in-out"),content:'""'}}),(0,i.Z)(t,"&".concat(a,"-checked ").concat(u),{insetInlineStart:"calc(100% - ".concat(s+o,"px)")}),(0,i.Z)(t,"&:not(".concat(a,"-disabled):active"),r?(n={},(0,i.Z)(n,"".concat(u,"::before"),{insetInlineEnd:e.switchHandleActiveInset,insetInlineStart:0}),(0,i.Z)(n,"&".concat(a,"-checked ").concat(u,"::before"),{insetInlineEnd:0,insetInlineStart:e.switchHandleActiveInset}),n):{}),t))},R=function(e){var n,t,a,r,o=e.componentCls,c=e.trackHeight,l=e.trackPadding,s=e.innerMinMargin,u=e.innerMaxMargin,d=e.handleSize,h="".concat(o,"-inner");return(0,i.Z)({},o,(r={},(0,i.Z)(r,h,(n={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:u,paddingInlineEnd:s,transition:"padding-inline-start ".concat(e.switchDuration," ease-in-out, padding-inline-end ").concat(e.switchDuration," ease-in-out")},(0,i.Z)(n,"".concat(h,"-checked, ").concat(h,"-unchecked"),{display:"block",color:e.colorTextLightSolid,fontSize:e.fontSizeSM,transition:"margin-inline-start ".concat(e.switchDuration," ease-in-out, margin-inline-end ").concat(e.switchDuration," ease-in-out"),pointerEvents:"none"}),(0,i.Z)(n,"".concat(h,"-checked"),{marginInlineStart:"calc(-100% + ".concat(d+2*l,"px - ").concat(2*u,"px)"),marginInlineEnd:"calc(100% - ".concat(d+2*l,"px + ").concat(2*u,"px)")}),(0,i.Z)(n,"".concat(h,"-unchecked"),{marginTop:-c,marginInlineStart:0,marginInlineEnd:0}),n)),(0,i.Z)(r,"&".concat(o,"-checked ").concat(h),(t={paddingInlineStart:s,paddingInlineEnd:u},(0,i.Z)(t,"".concat(h,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,i.Z)(t,"".concat(h,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(d+2*l,"px + ").concat(2*u,"px)"),marginInlineEnd:"calc(-100% + ".concat(d+2*l,"px - ").concat(2*u,"px)")}),t)),(0,i.Z)(r,"&:not(".concat(o,"-disabled):active"),(a={},(0,i.Z)(a,"&:not(".concat(o,"-checked) ").concat(h),(0,i.Z)({},"".concat(h,"-unchecked"),{marginInlineStart:2*l,marginInlineEnd:2*-l})),(0,i.Z)(a,"&".concat(o,"-checked ").concat(h),(0,i.Z)({},"".concat(h,"-checked"),{marginInlineStart:2*-l,marginInlineEnd:2*l})),a)),r))},Z=function(e){var n,t=e.componentCls,a=e.trackHeight,r=e.trackMinWidth;return(0,i.Z)({},t,Object.assign(Object.assign(Object.assign(Object.assign({},(0,y.Wf)(e)),(0,i.Z)({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:r,height:a,lineHeight:"".concat(a,"px"),verticalAlign:"middle",background:e.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(e.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(t,"-disabled)"),{background:e.colorTextTertiary})),(0,y.Qy)(e)),(n={},(0,i.Z)(n,"&".concat(t,"-checked"),(0,i.Z)({background:e.switchColor},"&:hover:not(".concat(t,"-disabled)"),{background:e.colorPrimaryHover})),(0,i.Z)(n,"&".concat(t,"-loading, &").concat(t,"-disabled"),{cursor:"not-allowed",opacity:e.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),(0,i.Z)(n,"&".concat(t,"-rtl"),{direction:"rtl"}),n)))},x=(0,k.Z)("Switch",(function(e){var n=(0,M.TS)(e,{switchDuration:e.motionDurationMid,switchColor:e.colorPrimary,switchDisabledOpacity:e.opacityLoading,switchLoadingIconSize:.75*e.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(e.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[Z(n),R(n),I(n),b(n),S(n)]}),(function(e){var n=e.fontSize*e.lineHeight,t=e.controlHeight/2,i=n-4,a=t-4;return{trackHeight:n,trackHeightSM:t,trackMinWidth:2*i+8,trackMinWidthSM:2*a+4,trackPadding:2,handleBg:e.colorWhite,handleSize:i,handleSizeSM:a,handleShadow:"0 2px 4px 0 ".concat(new w.C("#00230b").setAlpha(.2).toRgbString()),innerMinMargin:i/2,innerMaxMargin:i+2+4,innerMinMarginSM:a/2,innerMaxMarginSM:a+2+4}})),N=function(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)n.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t},A=r.forwardRef((function(e,n){var t,c=e.prefixCls,s=e.size,u=e.disabled,d=e.loading,h=e.className,f=e.rootClassName,g=e.style,w=N(e,["prefixCls","size","disabled","loading","className","rootClassName","style"]),y=r.useContext(p.E_),k=y.getPrefixCls,M=y.direction,S=y.switch,b=r.useContext(E.Z),I=(null!==u&&void 0!==u?u:b)||d,R=k("switch",c),Z=r.createElement("div",{className:"".concat(R,"-handle")},d&&r.createElement(o.Z,{className:"".concat(R,"-loading-icon")})),A=x(R),P=(0,a.Z)(A,2),O=P[0],z=P[1],_=(0,C.Z)(s),L=l()(null===S||void 0===S?void 0:S.className,(t={},(0,i.Z)(t,"".concat(R,"-small"),"small"===_),(0,i.Z)(t,"".concat(R,"-loading"),d),(0,i.Z)(t,"".concat(R,"-rtl"),"rtl"===M),t),h,f,z),T=Object.assign(Object.assign({},null===S||void 0===S?void 0:S.style),g);return O(r.createElement(m.Z,{component:"Switch"},r.createElement(v,Object.assign({},w,{prefixCls:R,className:L,style:T,disabled:I,ref:n,loadingIcon:Z}))))}));A.__ANT_SWITCH=!0;var P=A}}]);
//# sourceMappingURL=727.7ac912e1.chunk.js.map