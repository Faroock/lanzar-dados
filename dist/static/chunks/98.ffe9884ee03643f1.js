(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98],{4098:function(a,b){var c="undefined"!=typeof self?self:this,d=function(){function a(){this.fetch=!1,this.DOMException=c.DOMException}return a.prototype=c,new a}();!function(a){(function(b){var c={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch(a){return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};if(c.arrayBuffer)var d=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],e=ArrayBuffer.isView||function(a){return a&&d.indexOf(Object.prototype.toString.call(a))> -1};function f(a){if("string"!=typeof a&&(a=String(a)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(a))throw TypeError("Invalid character in header field name");return a.toLowerCase()}function g(a){return"string"!=typeof a&&(a=String(a)),a}function h(a){var b={next:function(){var b=a.shift();return{done:void 0===b,value:b}}};return c.iterable&&(b[Symbol.iterator]=function(){return b}),b}function i(a){this.map={},a instanceof i?a.forEach(function(a,b){this.append(b,a)},this):Array.isArray(a)?a.forEach(function(a){this.append(a[0],a[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(b){this.append(b,a[b])},this)}function j(a){if(a.bodyUsed)return Promise.reject(TypeError("Already read"));a.bodyUsed=!0}function k(a){return new Promise(function(b,c){a.onload=function(){b(a.result)},a.onerror=function(){c(a.error)}})}function l(a){var b=new FileReader,c=k(b);return b.readAsArrayBuffer(a),c}function m(a){if(a.slice)return a.slice(0);var b=new Uint8Array(a.byteLength);return b.set(new Uint8Array(a)),b.buffer}function n(){return this.bodyUsed=!1,this._initBody=function(a){if(this._bodyInit=a,a){if("string"==typeof a)this._bodyText=a;else if(c.blob&&Blob.prototype.isPrototypeOf(a))this._bodyBlob=a;else if(c.formData&&FormData.prototype.isPrototypeOf(a))this._bodyFormData=a;else if(c.searchParams&&URLSearchParams.prototype.isPrototypeOf(a))this._bodyText=a.toString();else{var b;c.arrayBuffer&&c.blob&&(b=a)&&DataView.prototype.isPrototypeOf(b)?(this._bodyArrayBuffer=m(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):c.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||e(a))?this._bodyArrayBuffer=m(a):this._bodyText=a=Object.prototype.toString.call(a)}}else this._bodyText="";!this.headers.get("content-type")&&("string"==typeof a?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):c.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},c.blob&&(this.blob=function(){var a=j(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(!this._bodyFormData)return Promise.resolve(new Blob([this._bodyText]));throw Error("could not read FormData body as blob")},this.arrayBuffer=function(){return this._bodyArrayBuffer?j(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var a,b,c,d=j(this);if(d)return d;if(this._bodyBlob)return a=this._bodyBlob,b=new FileReader,c=k(b),b.readAsText(a),c;if(this._bodyArrayBuffer)return Promise.resolve(function(a){for(var b=new Uint8Array(a),c=Array(b.length),d=0;d<b.length;d++)c[d]=String.fromCharCode(b[d]);return c.join("")}(this._bodyArrayBuffer));if(!this._bodyFormData)return Promise.resolve(this._bodyText);throw Error("could not read FormData body as text")},c.formData&&(this.formData=function(){return this.text().then(q)}),this.json=function(){return this.text().then(JSON.parse)},this}i.prototype.append=function(a,b){a=f(a),b=g(b);var c=this.map[a];this.map[a]=c?c+", "+b:b},i.prototype.delete=function(a){delete this.map[f(a)]},i.prototype.get=function(a){return a=f(a),this.has(a)?this.map[a]:null},i.prototype.has=function(a){return this.map.hasOwnProperty(f(a))},i.prototype.set=function(a,b){this.map[f(a)]=g(b)},i.prototype.forEach=function(a,b){for(var c in this.map)this.map.hasOwnProperty(c)&&a.call(b,this.map[c],c,this)},i.prototype.keys=function(){var a=[];return this.forEach(function(b,c){a.push(c)}),h(a)},i.prototype.values=function(){var a=[];return this.forEach(function(b){a.push(b)}),h(a)},i.prototype.entries=function(){var a=[];return this.forEach(function(b,c){a.push([c,b])}),h(a)},c.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var o=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function p(a,b){var c,d,e=(b=b||{}).body;if(a instanceof p){if(a.bodyUsed)throw TypeError("Already read");this.url=a.url,this.credentials=a.credentials,b.headers||(this.headers=new i(a.headers)),this.method=a.method,this.mode=a.mode,this.signal=a.signal,e||null==a._bodyInit||(e=a._bodyInit,a.bodyUsed=!0)}else this.url=String(a);if(this.credentials=b.credentials||this.credentials||"same-origin",(b.headers||!this.headers)&&(this.headers=new i(b.headers)),this.method=(d=(c=b.method||this.method||"GET").toUpperCase(),o.indexOf(d)> -1?d:c),this.mode=b.mode||this.mode||null,this.signal=b.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&e)throw TypeError("Body not allowed for GET or HEAD requests");this._initBody(e)}function q(a){var b=new FormData;return a.trim().split("&").forEach(function(a){if(a){var c=a.split("="),d=c.shift().replace(/\+/g," "),e=c.join("=").replace(/\+/g," ");b.append(decodeURIComponent(d),decodeURIComponent(e))}}),b}function r(a,b){b||(b={}),this.type="default",this.status=void 0===b.status?200:b.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in b?b.statusText:"OK",this.headers=new i(b.headers),this.url=b.url||"",this._initBody(a)}p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},n.call(p.prototype),n.call(r.prototype),r.prototype.clone=function(){return new r(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},r.error=function(){var a=new r(null,{status:0,statusText:""});return a.type="error",a};var s=[301,302,303,307,308];r.redirect=function(a,b){if(-1===s.indexOf(b))throw RangeError("Invalid status code");return new r(null,{status:b,headers:{location:a}})},b.DOMException=a.DOMException;try{new b.DOMException}catch(t){b.DOMException=function(a,b){this.message=a,this.name=b;var c=Error(a);this.stack=c.stack},b.DOMException.prototype=Object.create(Error.prototype),b.DOMException.prototype.constructor=b.DOMException}function u(a,d){return new Promise(function(e,f){var g=new p(a,d);if(g.signal&&g.signal.aborted)return f(new b.DOMException("Aborted","AbortError"));var h=new XMLHttpRequest;function j(){h.abort()}h.onload=function(){var a,b,c={status:h.status,statusText:h.statusText,headers:(a=h.getAllResponseHeaders()||"",b=new i,a.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(a){var c=a.split(":"),d=c.shift().trim();if(d){var e=c.join(":").trim();b.append(d,e)}}),b)};c.url="responseURL"in h?h.responseURL:c.headers.get("X-Request-URL");var d="response"in h?h.response:h.responseText;e(new r(d,c))},h.onerror=function(){f(TypeError("Network request failed"))},h.ontimeout=function(){f(TypeError("Network request failed"))},h.onabort=function(){f(new b.DOMException("Aborted","AbortError"))},h.open(g.method,g.url,!0),"include"===g.credentials?h.withCredentials=!0:"omit"===g.credentials&&(h.withCredentials=!1),"responseType"in h&&c.blob&&(h.responseType="blob"),g.headers.forEach(function(a,b){h.setRequestHeader(b,a)}),g.signal&&(g.signal.addEventListener("abort",j),h.onreadystatechange=function(){4===h.readyState&&g.signal.removeEventListener("abort",j)}),h.send(void 0===g._bodyInit?null:g._bodyInit)})}u.polyfill=!0,a.fetch||(a.fetch=u,a.Headers=i,a.Request=p,a.Response=r),b.Headers=i,b.Request=p,b.Response=r,b.fetch=u,Object.defineProperty(b,"__esModule",{value:!0})})({})}(d),d.fetch.ponyfill=!0,delete d.fetch.polyfill;var e=d;(b=e.fetch).default=e.fetch,b.fetch=e.fetch,b.Headers=e.Headers,b.Request=e.Request,b.Response=e.Response,a.exports=b}}])