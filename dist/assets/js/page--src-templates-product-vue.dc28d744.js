(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(t,e,n){},229:function(t,e,n){"use strict";var r=n(228);n.n(r).a},230:function(t,e,n){},231:function(t,e){},235:function(t,e,n){"use strict";n(99);var r={name:"BuyButton",props:["product"],data:function(){return{excerpt:(t=this.product.content,e=125,n=t.substr(0,e).split(" "),n.slice(0,n.length-1).join(" ")+"…"),image:this.product.images[0].thumbnails?{name:this.product.title,url:this.product.images[0].thumbnails.large.url}:null};var t,e,n},computed:{itemCost:function(){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}).format(this.product.cost)}}},o=(n(229),n(47)),i=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"snipcart-add-item",attrs:{"data-item-id":t.product.id,"data-item-name":t.product.title,"data-item-description":t.excerpt,"data-item-image":t.image.url,"data-item-price":t.product.cost,"data-item-url":"https://ecommerce-gridsome.netlify.com"+t.$props.product.path}},[t._t("default",[t._v("Buy for "+t._s(t.itemCost))])],2)}),[],!1,null,"1ea7a030",null);e.a=i.exports},236:function(t,e,n){(function(t){var r=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++)n[e[r]]=Object.getOwnPropertyDescriptor(t,e[r]);return n},o=/%[sdj%]/g;e.format=function(t){if(!h(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(c(arguments[n]));return e.join(" ")}n=1;for(var r=arguments,i=r.length,u=String(t).replace(o,(function(t){if("%%"===t)return"%";if(n>=i)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}})),a=r[n];n<i;a=r[++n])g(a)||!w(a)?u+=" "+a:u+=" "+c(a);return u},e.deprecate=function(n,r){if(void 0!==t&&!0===t.noDeprecation)return n;if(void 0===t)return function(){return e.deprecate(n,r).apply(this,arguments)};var o=!1;return function(){if(!o){if(t.throwDeprecation)throw new Error(r);t.traceDeprecation?console.trace(r):console.error(r),o=!0}return n.apply(this,arguments)}};var i,u={};function c(t,n){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),d(n)?r.showHidden=n:n&&e._extend(r,n),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=a),l(r,t,r.depth)}function a(t,e){var n=c.styles[e];return n?"["+c.colors[n][0]+"m"+t+"["+c.colors[n][1]+"m":t}function s(t,e){return t}function l(t,n,r){if(t.customInspect&&n&&T(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var o=n.inspect(r,t);return h(o)||(o=l(t,o,r)),o}var i=function(t,e){if(b(e))return t.stylize("undefined","undefined");if(h(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}if(m(e))return t.stylize(""+e,"number");if(d(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,n);if(i)return i;var u=Object.keys(n),c=function(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(n)),j(n)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(n);if(0===u.length){if(T(n)){var a=n.name?": "+n.name:"";return t.stylize("[Function"+a+"]","special")}if(v(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(O(n))return t.stylize(Date.prototype.toString.call(n),"date");if(j(n))return f(n)}var s,w="",x=!1,E=["{","}"];(y(n)&&(x=!0,E=["[","]"]),T(n))&&(w=" [Function"+(n.name?": "+n.name:"")+"]");return v(n)&&(w=" "+RegExp.prototype.toString.call(n)),O(n)&&(w=" "+Date.prototype.toUTCString.call(n)),j(n)&&(w=" "+f(n)),0!==u.length||x&&0!=n.length?r<0?v(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),s=x?function(t,e,n,r,o){for(var i=[],u=0,c=e.length;u<c;++u)_(e,String(u))?i.push(p(t,e,n,r,String(u),!0)):i.push("");return o.forEach((function(o){o.match(/^\d+$/)||i.push(p(t,e,n,r,o,!0))})),i}(t,n,r,c,u):u.map((function(e){return p(t,n,r,c,e,x)})),t.seen.pop(),function(t,e,n){if(t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1];return n[0]+e+" "+t.join(", ")+" "+n[1]}(s,w,E)):E[0]+w+E[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o,i){var u,c,a;if((a=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?c=a.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):a.set&&(c=t.stylize("[Setter]","special")),_(r,o)||(u="["+o+"]"),c||(t.seen.indexOf(a.value)<0?(c=g(n)?l(t,a.value,null):l(t,a.value,n-1)).indexOf("\n")>-1&&(c=i?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),b(u)){if(i&&o.match(/^\d+$/))return c;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function y(t){return Array.isArray(t)}function d(t){return"boolean"==typeof t}function g(t){return null===t}function m(t){return"number"==typeof t}function h(t){return"string"==typeof t}function b(t){return void 0===t}function v(t){return w(t)&&"[object RegExp]"===x(t)}function w(t){return"object"==typeof t&&null!==t}function O(t){return w(t)&&"[object Date]"===x(t)}function j(t){return w(t)&&("[object Error]"===x(t)||t instanceof Error)}function T(t){return"function"==typeof t}function x(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(b(i)&&(i=t.env.NODE_DEBUG||""),n=n.toUpperCase(),!u[n])if(new RegExp("\\b"+n+"\\b","i").test(i)){var r=t.pid;u[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,r,t)}}else u[n]=function(){};return u[n]},e.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=y,e.isBoolean=d,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=h,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=b,e.isRegExp=v,e.isObject=w,e.isDate=O,e.isError=j,e.isFunction=T,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=n(238);var S=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function z(){var t=new Date,e=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":");return[t.getDate(),S[t.getMonth()],e].join(" ")}function _(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",z(),e.format.apply(e,arguments))},e.inherits=n(239),e._extend=function(t,e){if(!e||!w(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t};var D="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function P(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(D&&t[D]){var e;if("function"!=typeof(e=t[D]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,r=new Promise((function(t,r){e=t,n=r})),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push((function(t,r){t?n(t):e(r)}));try{t.apply(this,o)}catch(t){n(t)}return r}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),D&&Object.defineProperty(e,D,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,r(t))},e.promisify.custom=D,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],r=0;r<arguments.length;r++)n.push(arguments[r]);var o=n.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};e.apply(this,n).then((function(e){t.nextTick(u,null,e)}),(function(e){t.nextTick(P,e,u)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,r(e)),n}}).call(this,n(237))},237:function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:u}catch(t){r=u}}();var a,s=[],l=!1,f=-1;function p(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&y())}function y(){if(!l){var t=c(p);l=!0;for(var e=s.length;e;){for(a=s,s=[];++f<e;)a&&a[f].run();f=-1,e=s.length}a=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===u||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function g(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new d(t,e)),1!==s.length||l||c(y)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},238:function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},239:function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},240:function(t,e,n){"use strict";var r=n(230);n.n(r).a},241:function(t,e,n){"use strict";var r=n(231),o=n.n(r);e.default=o.a},246:function(t,e,n){"use strict";n.r(e);var r=n(235),o=(n(236),{components:{BuyButton:r.a},data:function(){return{selected:0}},metaInfo:function(){return{title:this.$page.product.title}},methods:{select:function(t){this.selected=t}}}),i=(n(240),n(47)),u=n(241),c=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("section",{staticClass:"main"},[n("aside",[n("figure",[n("img",{staticClass:"img-main",attrs:{src:t.$page.product.images[t.selected].thumbnails.large.url,alt:"Product Image"}})]),n("p",t._l(t.$page.product.images,(function(e,r){return n("img",{key:e.thumbnails.large.url,staticClass:"img-preview",class:{active:r===t.selected},attrs:{src:e.thumbnails.large.url,alt:"No Image Available"},on:{click:function(e){return t.select(r)}}})})),0)]),n("h1",[t._v(t._s(t.$page.product.title))]),n("buy-button",{attrs:{product:t.$page.product}}),n("p",[t._v(t._s(t.$page.product.content))])],1)])}),[],!1,null,"3cab9f23",null);"function"==typeof u.default&&Object(u.default)(c);e.default=c.exports}}]);