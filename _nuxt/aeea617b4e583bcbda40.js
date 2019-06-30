/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(t,e,n){"use strict";n.d(e,"i",function(){return d}),n.d(e,"j",function(){return h}),n.d(e,"a",function(){return m}),n.d(e,"o",function(){return v}),n.d(e,"e",function(){return x}),n.d(e,"f",function(){return y}),n.d(e,"c",function(){return w}),n.d(e,"n",function(){return _}),n.d(e,"h",function(){return C}),n.d(e,"p",function(){return $}),n.d(e,"k",function(){return O}),n.d(e,"m",function(){return R}),n.d(e,"d",function(){return E}),n.d(e,"b",function(){return S}),n.d(e,"g",function(){return T}),n.d(e,"l",function(){return N});var r=n(32),o=(n(124),n(125),n(126),n(24)),c=(n(128),n(130),n(131),n(134),n(89),n(54),n(6)),l=(n(64),n(58),n(22),n(84),n(59),n(12)),f=n(0);function d(t){f.a.config.errorHandler&&f.a.config.errorHandler(t)}function h(t){return t.then(function(t){return t.default||t})}function m(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(l.a)({},data,e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function v(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=f.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function _(t){return Promise.all(w(t,function(){var t=Object(c.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=v(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,_(e);case 4:return t.abrupt("return",Object(l.a)({},e,{meta:x(e).map(function(t,n){return Object(l.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function $(t,e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(regeneratorRuntime.mark(function t(e,n){var c,l,f,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var r=Object(o.a)(path);if("number"==typeof t||"undefined"!==r&&"object"!==r||(n=path||{},path=t,r=Object(o.a)(path),t=302),"object"===r&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=D(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([C(n.route),C(n.from)]);case 3:c=t.sent,l=Object(r.a)(c,2),f=l[0],d=l[1],n.route&&(e.context.route=f),n.from&&(e.context.from=d),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=Boolean(n.isHMR),e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}},t)}))).apply(this,arguments)}function O(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():R(t[0],e).then(function(){return O(t.slice(1),e)})}function R(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function E(base,t){var path=decodeURI(window.location.pathname);return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}function S(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(o.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?P:encodeURIComponent,l=0;l<t.length;l++){var f=t[l];if("string"!=typeof f){var d=data[f.name||"pathMatch"],h=void 0;if(null==d){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<d.length;m++){if(h=c(d[m]),!e[l].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");path+=(0===m?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(d),!e[l].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');path+=f.prefix+h}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=A.exec(t));){var f=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+f.length,d)path+=d[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,$="+"===_||"*"===_,j="?"===_||"*"===_,O=n[2]||l,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:O,optional:j,repeat:$,partial:k,asterisk:Boolean(C),pattern:pattern?M(pattern):C?".*":"[^"+L(O)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function T(t,e){var n={},r=Object(l.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function N(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(l.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var A=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function L(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function M(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function D(t,e){var n,o=t.indexOf("://");-1!==o?(n=t.substring(0,o),t=t.substring(o+3)):t.startsWith("//")&&(t=t.substring(2));var c,l=t.split("/"),f=(n?n+"://":"//")+l.shift(),path=l.filter(Boolean).join("/");if(2===(l=path.split("#")).length){var d=l,h=Object(r.a)(d,2);path=h[0],c=h[1]}return f+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(f+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),f+=c?"#"+c:""}},138:function(t,e,n){"use strict";var r=n(42);n.n(r).a},139:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},140:function(t,e,n){"use strict";var r=n(43);n.n(r).a},141:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{-webkit-transition:none;transition:none}.nuxt-progress-failed{background-color:red}",""])},142:function(t,e,n){"use strict";var r=n(44);n.n(r).a},143:function(t,e,n){(t.exports=n(46)(!1)).push([t.i,"html{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}",""])},16:function(t,e,n){"use strict";n(22);var r=n(12),o=(n(54),n(6)),c=(n(59),n(0)),l=n(91),f=n.n(l),d=n(62),h=n(1),m=function(){return Object(h.j)(Promise.all([n.e(5),n.e(2)]).then(n.bind(null,1572)))},v=function(){return Object(h.j)(n.e(3).then(n.bind(null,1573)))};c.a.use(d.a),"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual",window.addEventListener("beforeunload",function(){window.history.scrollRestoration="auto"}),window.addEventListener("load",function(){window.history.scrollRestoration="manual"}));var x=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var y=n(92),w=n.n(y),_=Object(r.a)({},w.a,{name:"NoSsr"}),C={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;data.nuxtChildDepth=f;var d=c[f]||l,h={};k.forEach(function(t){void 0!==d[t]&&(h[t]=d[t])});var m={};$.forEach(function(t){"function"==typeof d[t]&&(m[t]=d[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:h,on:m},x)}},k=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],$=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],j={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},O=(n(138),n(23)),R=Object(O.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,E=(n(89),n(32)),S={name:"Nuxt",components:{NuxtChild:C,NuxtError:R},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(h.b)(this.$route.matched[0].path)(this.$route.params);var t=Object(E.a)(this.$route.matched,1)[0];if(!t)return this.$route.path;var e=t.components.default;if(e&&e.options){var n=e.options;if(n.key)return"function"==typeof n.key?n.key(this.$route):n.key}return/\/$/.test(t.path)?this.$route.path:this.$route.path.replace(/\/$/,"")}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},T={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},N=(n(140),Object(O.a)(T,void 0,void 0,!1,null,null,null).exports),A=(n(142),{_default:Object(O.a)({},function(){var t=this.$createElement;return(this._self._c||t)("nuxt")},[],!1,null,null,null).exports}),P={head:{title:"Raphcoin",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Raphcoin website"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"raphcoin"},{hid:"author",name:"author",content:"Raphcoin team"},{hid:"theme-color",name:"theme-color",content:"#fff"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"raphcoin"},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"raphcoin"},{hid:"og:description",name:"og:description",property:"og:description",content:"Raphcoin website"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"manifest",href:"/_nuxt/manifest.617b346a.json"}],style:[],script:[],htmlAttrs:{lang:"en"}},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&A["_"+t]||(t="default"),this.layoutName=t,this.layout=A["_"+t],this.layout},loadLayout:function(t){return t&&A["_"+t]||(t="default"),Promise.resolve(A["_"+t])}},components:{NuxtLoading:N}},L=n(63),M=n.n(L);n.d(e,"b",function(){return B}),n.d(e,"a",function(){return R}),c.a.component(_.name,_),c.a.component(C.name,C),c.a.component("NChild",C),c.a.component(S.name,S),c.a.use(f.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var D={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function B(t){return U.apply(this,arguments)}function U(){return(U=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,l,f,path,y;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new d.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:x,routes:[{path:"/game",component:m,name:"game"},{path:"/",component:v,name:"index"}],fallback:!1});case 2:return n=t.sent,o=Object(r.a)({router:n,nuxt:{defaultTransition:D,transitions:[D],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},D,{name:t}):Object.assign({},D,t):D}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=Boolean(t),t=t?Object(h.l)(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},P),l=e?e.next:function(t){return o.router.push(t)},e?f=n.resolve(e.url).route:(path=Object(h.d)(n.options.base),f=n.resolve(path).route),t.next=8,Object(h.p)(o,{route:f,next:l,error:o.nuxt.error.bind(o),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 8:if(y=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof M.a){t.next=12;break}return t.next=12,M()(o.context,y);case 12:t.next=15;break;case 15:return t.abrupt("return",{app:o,router:n});case 16:case"end":return t.stop()}},t)}))).apply(this,arguments)}},42:function(t,e,n){var content=n(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("b675d82e",content,!0,{sourceMap:!1})},43:function(t,e,n){var content=n(141);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("17cfdfa9",content,!0,{sourceMap:!1})},44:function(t,e,n){var content=n(143);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("822d4126",content,!0,{sourceMap:!1})},45:function(t,e,n){"use strict";n(22),n(73),n(76),n(58),n(78),n(80);var r=n(0),o=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},c=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})});e.a={name:"NuxtLink",extends:r.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||o(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(c.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){c&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),c.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){c.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,l=t[Symbol.iterator]();!(e=(o=l.next()).done);e=!0){var f=o.value,d=f();d instanceof Promise&&d.catch(function(){}),f.__prefetched=!0}}catch(t){n=!0,r=t}finally{try{e||null==l.return||l.return()}finally{if(n)throw r}}}}}}},46:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var content=function(t,e){var content=t[1]||"",n=t[3];if(!n)return content;if(e&&"function"==typeof btoa){var r=(c=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=n.sources.map(function(source){return"/*# sourceURL="+n.sourceRoot+source+" */"});return[content].concat(o).concat([r]).join("\n")}var c;return[content].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+content+"}":content}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<t.length;i++){var c=t[i];null!=c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},47:function(t,e,n){"use strict";function r(t,e){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],c=o[0],l={id:t+":"+i,css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(l):n.push(r[c]={id:c,parts:[l]})}return n}n.r(e),n.d(e,"default",function(){return y});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},head=o&&(document.head||document.getElementsByTagName("head")[0]),l=null,f=0,d=!1,h=function(){},m=null,v="data-vue-ssr-id",x="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function y(t,e,n,o){d=n,m=o||{};var l=r(t,e);return w(l),function(e){for(var n=[],i=0;i<l.length;i++){var o=l[i];(f=c[o.id]).refs--,n.push(f)}e?w(l=r(t,e)):l=[];for(i=0;i<n.length;i++){var f;if(0===(f=n[i]).refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete c[f.id]}}}}function w(t){for(var i=0;i<t.length;i++){var e=t[i],n=c[e.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](e.parts[r]);for(;r<e.parts.length;r++)n.parts.push(C(e.parts[r]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(r=0;r<e.parts.length;r++)o.push(C(e.parts[r]));c[e.id]={id:e.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",head.appendChild(t),t}function C(t){var e,n,r=document.querySelector("style["+v+'~="'+t.id+'"]');if(r){if(d)return h;r.parentNode.removeChild(r)}if(x){var o=f++;r=l||(l=_()),e=j.bind(null,r,o,!1),n=j.bind(null,r,o,!0)}else r=_(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);m.ssrId&&t.setAttribute(v,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var k,$=(k=[],function(t,e){return k[t]=e,k.filter(Boolean).join("\n")});function j(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=$(e,o);else{var c=document.createTextNode(o),l=t.childNodes;l[e]&&t.removeChild(l[e]),l.length?t.insertBefore(c,l[e]):t.appendChild(c)}}},61:function(t,e,n){"use strict";e.a={}},63:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},90:function(t,e,n){"use strict";e.a=function(t,e){return e=e||{},new Promise(function(n,r){var s=new XMLHttpRequest,o=[],u=[],i={},a=function(){return{ok:2==(s.status/100|0),statusText:s.statusText,status:s.status,url:s.responseURL,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(JSON.parse(s.responseText))},blob:function(){return Promise.resolve(new Blob([s.response]))},clone:a,headers:{keys:function(){return o},entries:function(){return u},get:function(t){return i[t.toLowerCase()]},has:function(t){return t.toLowerCase()in i}}}};for(var c in s.open(e.method||"get",t,!0),s.onload=function(){s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(t,e,n){o.push(e=e.toLowerCase()),u.push([e,n]),i[e]=i[e]?i[e]+","+n:n}),n(a())},s.onerror=r,s.withCredentials="include"==e.credentials,e.headers)s.setRequestHeader(c,e.headers[c]);s.send(e.body||null)})}},92:function(t,e,n){"use strict";var r={name:"NoSsr",functional:!0,props:{placeholder:String,placeholderTag:{type:String,default:"div"}},render:function(t,e){var n=e.parent,r=e.slots,o=e.props,c=r(),l=c.default;void 0===l&&(l=[]);var f=c.placeholder;return n._isMounted?l:(n.$once("hook:mounted",function(){n.$forceUpdate()}),o.placeholderTag&&(o.placeholder||f)?t(o.placeholderTag,{class:["no-ssr-placeholder"]},o.placeholder||f):l.length>0?l.map(function(){return t(!1)}):t(!1))}};t.exports=r},94:function(t,e,n){t.exports=n(95)},95:function(t,e,n){"use strict";n.r(e),function(t){n(64),n(73),n(76);var e=n(24),r=(n(54),n(105),n(6)),o=(n(78),n(80),n(58),n(22),n(84),n(59),n(83),n(109),n(121),n(123),n(0)),c=n(90),l=n(61),f=n(1),d=n(16),h=n(45);o.a.component(h.a.name,h.a),o.a.component("NLink",h.a),t.fetch||(t.fetch=c.a);var m,v,x=[],y=window.__NUXT__||{};Object.assign(o.a.config,{silent:!0,performance:!1});var w=o.a.config.errorHandler||console.error;function _(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function C(t,e,n){return k.apply(this,arguments)}function k(){return(k=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,d,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=Boolean(m.nuxt.err)||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?Object(f.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,Object(f.n)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,d=c.message||"",!/^Loading( CSS)? chunk (\d)+ failed\./.test(d)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:d}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function $(t,e){return y.serverRendered&&e&&Object(f.a)(t,e),t._Ctor=t,t}function j(t){var path=Object(f.d)(t.options.base,t.options.mode);return Object(f.c)(t.match(path),function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=$(Object(f.o)(e),y.data?y.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())}function O(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=Object(f.o)(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof l.a[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),l.a[t])}),!c)return Object(f.k)(o,e)}function R(t,e,n){return E.apply(this,arguments)}function E(){return(E=Object(r.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,h,v,y,w,C,k,$,j,R,E,S,T,N,A=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return e===n?x=[]:(o=[],x=Object(f.e)(n,o).map(function(t,i){return Object(f.b)(n.matched[o[i]].path)(n.params)})),c=!1,l=function(path){n.path===path.path&&A.$loading.finish&&A.$loading.finish(),n.path!==path.path&&A.$loading.pause&&A.$loading.pause(),c||(c=!0,r(path))},t.next=7,Object(f.p)(m,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=m.nuxt.dateErr,this._hadError=Boolean(m.nuxt.err),h=[],(v=Object(f.e)(e,h)).length){t.next=25;break}return t.next=14,O.call(this,v,m.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof d.a.layout?d.a.layout(m.context):d.a.layout);case 18:return y=t.sent,t.next=21,O.call(this,v,m.context,y);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return m.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return v.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(_(v,e,n)),t.prev=27,t.next=30,O.call(this,v,m.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!m.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(w=v[0].options.layout)&&(w=w(m.context)),t.next=38,this.loadLayout(w);case 38:return w=t.sent,t.next=41,O.call(this,v,m.context,w);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!m.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:C=!0,t.prev=46,k=!0,$=!1,j=void 0,t.prev=50,R=v[Symbol.iterator]();case 52:if(k=(E=R.next()).done){t.next=64;break}if("function"==typeof(S=E.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,S.options.validate(m.context);case 58:if(C=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:k=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),$=!0,j=t.t0;case 70:t.prev=70,t.prev=71,k||null==R.return||R.return();case 73:if(t.prev=73,!$){t.next=76;break}throw j;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(C){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(v.map(function(t,i){if(t._path=Object(f.b)(e.matched[h[i]].path)(e.params),t._dataRefresh=!1,A._pathChanged&&A._queryChanged||t._path!==x[i])t._dataRefresh=!0;else if(!A._pathChanged&&A._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return A._diffQuery[t]}))}if(!A._hadError&&A._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=Boolean(t.options.fetch),l=o&&c?30:45;if(o){var d=Object(f.m)(t.options.asyncData,m.context).then(function(e){Object(f.a)(t,e),A.$loading.increase&&A.$loading.increase(l)});r.push(d)}if(A.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(m.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){A.$loading.increase&&A.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(T=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,T));case 97:return x=[],Object(f.i)(T),"function"==typeof(N=d.a.layout)&&(N=N(m.context)),t.next=103,this.loadLayout(N);case 103:this.error(T),this.$nuxt.$emit("routeChanged",e,n,T),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function S(t,n){Object(f.c)(t,function(t,n,r,c){return"object"!==Object(e.a)(t)||t.options||((t=o.a.extend(t))._Ctor=t,r.components[c]=t),t})}function T(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?d.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(m.context)),this.setLayout(e)}function N(t,e){var n=this;if(!1!==this._pathChanged||!1!==this._queryChanged){var r=[],c=Object(f.f)(t,r),l=Object(f.e)(t,r);o.a.nextTick(function(){c.forEach(function(t,i){if(t&&!t._isDestroyed&&t.constructor._dataRefresh&&l[i]===t.constructor&&!0!==t.$vnode.data.keepAlive&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)o.a.set(t.$data,n,e[n]);window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}),T.call(n,t)})}}function A(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),v.afterEach(function(e,n){o.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function P(){return(P=Object(r.a)(regeneratorRuntime.mark(function t(e){var n,r,c,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m=e.app,v=e.router,t.next=4,Promise.all(j(v));case 4:if(n=t.sent,r=new o.a(m),c=function(){r.$mount("#__nuxt"),v.afterEach(S),v.afterEach(N.bind(r)),o.a.nextTick(function(){A(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(_(n,v.currentRoute)),x=v.currentRoute.matched.map(function(t){return Object(f.b)(t.path)(v.currentRoute.params)})),r.$loading={},y.error&&r.error(y.error),v.beforeEach(C.bind(r)),v.beforeEach(R.bind(r)),!y.serverRendered){t.next=16;break}return c(),t.abrupt("return");case 16:l=function(){S(v.currentRoute,v.currentRoute),T.call(r,v.currentRoute),c()},R.call(r,v.currentRoute,v.currentRoute,function(path){if(path){var t=v.afterEach(function(e,n){t(),l()});v.push(path,void 0,function(t){t&&w(t)})}else l()});case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}Object(d.b)().then(function(t){return P.apply(this,arguments)}).catch(w)}.call(this,n(25))}},[[94,4,1]]]);