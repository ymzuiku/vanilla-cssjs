!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).css=t()}(this,function(){"use strict";function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],o=e.slice(1),r="";return"string"==typeof n?r=n:n&&n.forEach(function(e,t){r+=e,o[t]&&(r+=o[t])}),r}return function(){for(var f=[],e=0;e<arguments.length;e++)f[e]=arguments[e];return function(e){var t=c.apply(void 0,f),n=e+"-",o=new RegExp("._","g");t=t.replace(o,"."+n);function r(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n+c.apply(void 0,e)}return r.init=function(){if(!document.head.querySelector("."+n)){var e=document.createElement("style");e.textContent=t,e.type="text/css",e.className=n,document.head.append(e)}},r}}});
//# sourceMappingURL=index.js.map
