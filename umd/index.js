!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e=e||self).css=n()}(this,function(){"use strict";window.__css_bem||(window.__css_bem=1);function c(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=e[0],o=e.slice(1),r="";return"string"==typeof t?r=t:t&&t.forEach(function(e,n){r+=e,o[n]&&(r+=o[n])}),r}function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=c.apply(void 0,e);return function(e){var n=document.createElement("style");e&&(t=e(t)),n.type="text/css",n.textContent=t,document.head.appendChild(n)}}return e.bem=function(r,e){void 0===r&&(r="bem-"),e||(window.__css_bem+=1,e=window.__css_bem+"-");var i="bem"+e;return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=new RegExp(r,"g"),o=c.apply(void 0,e);return o=o.replace(t,i)}},e});
//# sourceMappingURL=index.js.map
