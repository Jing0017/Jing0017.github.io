var _typeof5="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof4="function"==typeof Symbol&&"symbol"==_typeof5(Symbol.iterator)?function(o){return void 0===o?"undefined":_typeof5(o)}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":void 0===o?"undefined":_typeof5(o)},_typeof3="function"==typeof Symbol&&"symbol"==_typeof4(Symbol.iterator)?function(o){return void 0===o?"undefined":_typeof4(o)}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":void 0===o?"undefined":_typeof4(o)},_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(o){return void 0===o?"undefined":_typeof3(o)}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":void 0===o?"undefined":_typeof3(o)},_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(o){return void 0===o?"undefined":_typeof2(o)}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":void 0===o?"undefined":_typeof2(o)};!function(o){var e=!1;if("function"==typeof define&&define.amd&&(define(o),e=!0),"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=o(),e=!0),!e){var t=window.Cookies,n=window.Cookies=o();n.noConflict=function(){return window.Cookies=t,n}}}(function(){function a(){for(var o=0,e={};o<arguments.length;o++){var t=arguments[o];for(var n in t)e[n]=t[n]}return e}return function o(m){function s(o,e,t){var n;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(t=a({path:"/"},s.defaults,t)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*t.expires),t.expires=r}t.expires=t.expires?t.expires.toUTCString():"";try{n=JSON.stringify(e),/^[\{\[]/.test(n)&&(e=n)}catch(o){}e=m.write?m.write(e,o):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),o=(o=(o=encodeURIComponent(String(o))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var f in t)t[f]&&(i+="; "+f,!0!==t[f]&&(i+="="+t[f]));return document.cookie=o+"="+e+i}o||(n={});for(var y=document.cookie?document.cookie.split("; "):[],c=/(%[0-9A-Z]{2})+/g,p=0;p<y.length;p++){var u=y[p].split("="),l=u.slice(1).join("=");'"'===l.charAt(0)&&(l=l.slice(1,-1));try{var d=u[0].replace(c,decodeURIComponent);if(l=m.read?m.read(l,d):m(l,d)||l.replace(c,decodeURIComponent),this.json)try{l=JSON.parse(l)}catch(o){}if(o===d){n=l;break}o||(n[d]=l)}catch(o){}}return n}}return(s.set=s).get=function(o){return s.call(s,o)},s.getJSON=function(){return s.apply({json:!0},[].slice.call(arguments))},s.defaults={},s.remove=function(o,e){s(o,"",a(e,{expires:-1}))},s.withConverter=o,s}(function(){})});