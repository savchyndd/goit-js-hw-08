!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var i,o,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function O(e){return l=e,f=setTimeout(h,t),d?b(e):a}function T(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=g();if(T(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&i?b(e):(i=o=void 0,a)}function S(){var e=g(),n=T(e);if(i=arguments,o=this,c=e,n){if(void 0===f)return O(c);if(s)return f=setTimeout(h,t),b(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=c=o=f=void 0},S.flush=function(){return void 0===f?a:w(g())},S}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var O="feedback-form-state",T={},h=document.querySelector(".feedback-form");h.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(O)})),h.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,i=t.value;T[n]=i,localStorage.setItem(O,JSON.stringify(T))}),500)),function(){var e=localStorage.getItem(O);if(e){var t=JSON.parse(e),n=t.email,i=void 0===n?"":n,r=t.message,o=void 0===r?"":r;h.email.value=i,h.message.value=o}}()}();
//# sourceMappingURL=03-feedback.5b7b7ee9.js.map
