!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).css=t()}(this,function(){"use strict";function c(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[0],o=e.slice(1),r="";return"string"==typeof n?r=n:n&&n.forEach(function(e,t){r+=e,o[t]&&(r+=o[t])}),r}function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=c.apply(void 0,e);return function(e){var t=document.createElement("style");e&&(n=e(n)),t.type="text/css",t.textContent=n,document.head.appendChild(t)}}return e.bem=function(r){void 0===r&&(r="bem-");var i="c"+Date.now().toString(32).slice(4)+Math.random().toString(32).slice(2);return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=new RegExp(r,"g"),o=c.apply(void 0,e);return o=o.replace(n,i+"-")}},e});
//# sourceMappingURL=index.js.map
