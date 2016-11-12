!function t(e,r,n){function i(s,u){if(!r[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=r[s]={exports:{}};e[s][0].call(f.exports,function(t){var r=e[s][1][t];return i(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){"use strict";var n=$,i=n.extend;e.exports=function(){var t=this;this.unitClasses={},this.addUnitClass=function(e){var r=e.TYPE,n=e.SYMBOL;t.unitClasses.hasOwnProperty(r)||(t.unitClasses[r]={}),t.unitClasses[r][n]=e},this.getUnitClass=function(e,r){return t.unitClasses[e][r]},this.getUnitClasses=function(){var e={};for(var r in t.unitClasses)i(!0,e,t.unitClasses[r]);return e}}},{}],2:[function(t,e,r){"use strict";e.exports={}},{}],3:[function(t,e,r){"use strict";var n=t("./setup_main");e.exports={setupMain:n}},{"./setup_main":4}],4:[function(t,e,r){"use strict";var n=t("../../server");e.exports=function(){n.search("8.14 kg m2 / s2")}},{"../../server":6}],5:[function(t,e,r){"use strict";var n=t("rsvp"),i=t("./dom"),o=(t("./server"),t("./app")),s=t("./app/constructor"),u=t("./unit"),a=$,c=a.extend;n.on("error",function(t){console.assert(!1,t)}),c(!0,o,new s),u.register(),c(!0,window,{main:i.setupMain})},{"./app":2,"./app/constructor":1,"./dom":3,"./server":6,"./unit":11,rsvp:28}],6:[function(t,e,r){"use strict";var n=t("./search"),i=t("./simplify");e.exports={search:n,simplify:i}},{"./search":7,"./simplify":8}],7:[function(t,e,r){"use strict";var n=t("../util"),i=t("../app");e.exports=function(t){var e=1,r=["lb","m","m"],o=["s","s"],s=[],u=[];r.forEach(function(t){var e=n.identifyUnit(t);s.push([e.TYPE,e.SYMBOL])}),o.forEach(function(t){var e=n.identifyUnit(t);u.push([e.TYPE,e.SYMBOL])});var a=n.getMulAndDivClasses(s,u),c=a.mulClasses,f=a.divClasses,l=n.getUnitless(c,f),p=l.types,h=l.quantity,v=i.getUnitClasses(),y=null;for(var d in v){var g=v[d],_=g.UNITLESS;if(p.length==_.types.length){var m=!0;for(var b in p)if(p[b]!=_.types[b]){m=!1;break}if(m){y=new g(e*h/_.quantity);break}}}console.log(y)}},{"../app":2,"../util":26}],8:[function(t,e,r){"use strict";t("../app"),t("../util");e.exports=function(t,e,r){}},{"../app":2,"../util":26}],9:[function(t,e,r){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=t("../app"),u=function t(e){o(this,t),this.value=e};u.BASE=u.prototype.base=!0,u.QUANTITY=u.prototype.quantity=1,u.register=function(t,e,r){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,c=a?s.getUnitClass(t,a):u;r*=c.QUANTITY;var f=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),e}(c);f.TYPE=f.prototype.type=t,f.SYMBOL=f.prototype.symbol=e,f.QUANTITY=f.prototype.quantity=r,f.UNITLESS={types:{},quantity:r},f.UNITLESS.types[t]=1,s.addUnitClass(f)},e.exports=u},{"../app":2}],10:[function(t,e,r){"use strict";function n(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var s=t("../app"),u=t("../util"),a=function t(e){o(this,t),this.value=e};a.BASE=a.prototype.base=!1,a.register=function(t,e,r,c){var f=u.getMulAndDivClasses(r,c),l=f.mulClasses,p=f.divClasses,h=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return o(this,e),n(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return i(e,t),e}(a);h.TYPE=h.prototype.type=t,h.SYMBOL=h.prototype.symbol=e,h.MULS=h.prototype.muls=l,h.DIVS=h.prototype.divs=p,h.UNITLESS=u.getUnitless(l,p),s.addUnitClass(h)},e.exports=a},{"../app":2,"../util":26}],11:[function(t,e,r){"use strict";var n=t("./base_unit"),i=t("./derived_unit"),o=t("./register");e.exports={BaseUnit:n,DerivedUnit:i,register:o}},{"./base_unit":9,"./derived_unit":10,"./register":14}],12:[function(t,e,r){"use strict";var n=t("../base_unit"),i="angle";e.exports=function(){n.register(i,"",1),n.register(i,"rad",1),n.register(i,"°",57.2958,"")}},{"../base_unit":9}],13:[function(t,e,r){"use strict";var n=t("../base_unit"),i="current";e.exports=function(){n.register(i,"A",1),n.register(i,"cA",.01,"A"),n.register(i,"kA",1e3,"A"),n.register(i,"mA",.001,"A"),n.register(i,"µA",1e-6,"A"),n.register(i,"nA",1e-9,"A"),n.register(i,"pA",1e-12,"A")}},{"../base_unit":9}],14:[function(t,e,r){"use strict";var n=t("./length"),i=t("./mass"),o=t("./time"),s=t("./angle"),u=t("./current"),a=t("./temp"),c=t("./matter"),f=t("./intensity"),l=t("./storage"),p=t("./joule");e.exports=function(){n(),i(),o(),s(),u(),a(),c(),f(),l(),p()}},{"./angle":12,"./current":13,"./intensity":15,"./joule":16,"./length":17,"./mass":18,"./matter":19,"./storage":20,"./temp":21,"./time":22}],15:[function(t,e,r){"use strict";var n=t("../base_unit"),i="intensity";e.exports=function(){n.register(i,"cd",1)}},{"../base_unit":9}],16:[function(t,e,r){"use strict";var n=t("../derived_unit"),i="joule";e.exports=function(){n.register(i,"J",[["mass","kg"],["length","m"],["length","m"]],[["time","s"],["time","s"]])}},{"../derived_unit":10}],17:[function(t,e,r){"use strict";var n=t("../base_unit"),i="length";e.exports=function(){n.register(i,"m",1),n.register(i,"cm",.01,"m"),n.register(i,"km",1e3,"m"),n.register(i,"mm",.001,"m"),n.register(i,"µm",1e-6,"m"),n.register(i,"nm",1e-9,"m"),n.register(i,"pm",1e-12,"m"),n.register(i,"ft",.3048,"m"),n.register(i,"yd",3,"ft"),n.register(i,"mi",1760,"yd"),n.register(i,"in",15783e-9,"mi")}},{"../base_unit":9}],18:[function(t,e,r){"use strict";var n=t("../base_unit"),i="mass";e.exports=function(){n.register(i,"g",1),n.register(i,"dg",.1,"g"),n.register(i,"cg",.01,"g"),n.register(i,"kg",1e3,"g"),n.register(i,"mg",.001,"g"),n.register(i,"ng",1e-9,"g"),n.register(i,"pg",1e-12,"g"),n.register(i,"lb",453.59237,"g"),n.register(i,"oz",.0625,"lb")}},{"../base_unit":9}],19:[function(t,e,r){"use strict";var n=t("../base_unit"),i="matter";e.exports=function(){n.register(i,"mol",1),n.register(i,"atoms",6.02e23,"mol")}},{"../base_unit":9}],20:[function(t,e,r){"use strict";var n=t("../base_unit"),i="storage";e.exports=function(){n.register(i,"bit",1),n.register(i,"byte",.125,"bit"),n.register(i,"kbyte",1e3,"byte"),n.register(i,"Mbyte",1e6,"byte"),n.register(i,"Gbyte",1e9,"byte"),n.register(i,"Tbyte",1e12,"byte"),n.register(i,"Pm",1e15,"byte"),n.register(i,"Ebyte",1e18,"byte"),n.register(i,"Zbyte",1e21,"byte"),n.register(i,"Ybyte",1e24,"byte")}},{"../base_unit":9}],21:[function(t,e,r){"use strict";var n=t("../base_unit"),i="temp";e.exports=function(){n.register(i,"K",1),n.register(i,"°C",1,"K"),n.register(i,"°F",1.8,"°C")}},{"../base_unit":9}],22:[function(t,e,r){"use strict";var n=t("../base_unit"),i="time";e.exports=function(){n.register(i,"s",1),n.register(i,"ds",.1,"s"),n.register(i,"cs",.01,"s"),n.register(i,"ks",1e3,"s"),n.register(i,"ms",.001,"s"),n.register(i,"µs",1e-6,"s"),n.register(i,"ns",1e-9,"s"),n.register(i,"ps",1e-12,"s"),n.register(i,"min",60,"s"),n.register(i,"hr",60,"min"),n.register(i,"d",24,"hr"),n.register(i,"w",7,"d"),n.register(i,"mon",4,"w")}},{"../base_unit":9}],23:[function(t,e,r){"use strict";var n=t("../app");e.exports=function(t,e){var r=[],i=[],o=[];t.forEach(function(t){var e=t[0],r=t[1];o.push({cls:n.getUnitClass(e,r),inverse:!1})}),e.forEach(function(t){var e=t[0],r=t[1];o.push({cls:n.getUnitClass(e,r),inverse:!0})});for(var s=function(){var t=o.shift();t.cls.BASE?(t.inverse?i:r).push(t.cls):(t.cls.MULS.forEach(function(e){o.push({cls:e,inverse:t.inverse})}),t.cls.DIVS.forEach(function(e){o.push({cls:e,inverse:!t.inverse})}))};o.length>0;)s();return{mulClasses:r,divClasses:i}}},{"../app":2}],24:[function(t,e,r){"use strict";e.exports=function(t,e){var r=1,n={};t.forEach(function(t){r*=t.QUANTITY,n.hasOwnProperty(t.TYPE)?n[t.TYPE]++:n[t.TYPE]=1}),e.forEach(function(t){r/=t.QUANTITY,n.hasOwnProperty(t.TYPE)?n[t.TYPE]--:n[t.TYPE]=-1});var i={};for(var o in n){var s=n[o];0!=s&&(i[o]=s)}return{types:n,quantity:r}}},{}],25:[function(t,e,r){"use strict";var n=t("../app");e.exports=function(t){var e=n.getUnitClasses();for(var r in e){var i=e[r];if(i.SYMBOL==t)return i}}},{"../app":2}],26:[function(t,e,r){"use strict";var n=t("./get_mul_and_div_classes"),i=t("./identify_unit"),o=t("./get_unitless");e.exports={getMulAndDivClasses:n,identifyUnit:i,getUnitless:o}},{"./get_mul_and_div_classes":23,"./get_unitless":24,"./identify_unit":25}],27:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function s(t){if(p===clearTimeout)return clearTimeout(t);if((p===i||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function u(){d&&v&&(d=!1,v.length?y=v.concat(y):g=-1,y.length&&a())}function a(){if(!d){var t=o(u);d=!0;for(var e=y.length;e;){for(v=y,y=[];++g<e;)v&&v[g].run();g=-1,e=y.length}v=null,d=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function f(){}var l,p,h=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{p="function"==typeof clearTimeout?clearTimeout:i}catch(t){p=i}}();var v,y=[],d=!1,g=-1;h.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];y.push(new c(t,e)),1!==y.length||d||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},h.title="browser",h.browser=!0,h.env={},h.argv=[],h.version="",h.versions={},h.on=f,h.addListener=f,h.once=f,h.off=f,h.removeListener=f,h.removeAllListeners=f,h.emit=f,h.binding=function(t){throw new Error("process.binding is not supported")},h.cwd=function(){return"/"},h.chdir=function(t){throw new Error("process.chdir is not supported")},h.umask=function(){return 0}},{}],28:[function(t,e,r){(function(n,i){!function(t,n){"object"==typeof r&&"undefined"!=typeof e?n(r):"function"==typeof define&&define.amd?define(["exports"],n):n(t.RSVP=t.RSVP||{})}(this,function(e){"use strict";function r(t,e){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1}function o(t){var e=t._promiseCallbacks;return e||(e=t._promiseCallbacks={}),e}function s(t,e){return"onerror"===t?void At.on("error",e):2!==arguments.length?At[t]:void(At[t]=e)}function u(t){return"function"==typeof t||"object"==typeof t&&null!==t}function a(t){return"function"==typeof t}function c(t){return"object"==typeof t&&null!==t}function f(){}function l(){setTimeout(function(){for(var t=0;t<xt.length;t++){var e=xt[t],r=e.payload;r.guid=r.key+r.id,r.childGuid=r.key+r.childId,r.error&&(r.stack=r.error.stack),At.trigger(e.name,e.payload)}xt.length=0},50)}function p(t,e,r){1===xt.push({name:t,payload:{key:e._guidKey,id:e._id,eventName:t,detail:e._result,childId:r&&r._id,label:e._label,timeStamp:jt(),error:At["instrument-with-stack"]?new Error(e._label):null}})&&l()}function h(t,e){var r=this;if(t&&"object"==typeof t&&t.constructor===r)return t;var n=new r(y,e);return w(n,t),n}function v(){return new TypeError("A promises callback cannot return that same promise.")}function y(){}function d(t){try{return t.then}catch(t){return Mt.error=t,Mt}}function g(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function _(t,e,r){At.async(function(t){var n=!1,i=g(r,e,function(r){n||(n=!0,e!==r?w(t,r,void 0):T(t,r))},function(e){n||(n=!0,A(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&i&&(n=!0,A(t,i))},t)}function m(t,e){e._state===Ut?T(t,e._result):e._state===kt?(e._onError=null,A(t,e._result)):C(e,void 0,function(r){e!==r?w(t,r,void 0):T(t,r)},function(e){return A(t,e)})}function b(t,e,r){e.constructor===t.constructor&&r===U&&t.constructor.resolve===h?m(t,e):r===Mt?A(t,Mt.error):void 0===r?T(t,e):a(r)?_(t,e,r):T(t,e)}function w(t,e){t===e?T(t,e):u(e)?b(t,e,d(e)):T(t,e)}function E(t){t._onError&&t._onError(t._result),S(t)}function T(t,e){t._state===Pt&&(t._result=e,t._state=Ut,0===t._subscribers.length?At.instrument&&p("fulfilled",t):At.async(S,t))}function A(t,e){t._state===Pt&&(t._state=kt,t._result=e,At.async(E,t))}function C(t,e,r,n){var i=t._subscribers,o=i.length;t._onError=null,i[o]=e,i[o+Ut]=r,i[o+kt]=n,0===o&&t._state&&At.async(S,t)}function S(t){var e=t._subscribers,r=t._state;if(At.instrument&&p(r===Ut?"fulfilled":"rejected",t),0!==e.length){for(var n=void 0,i=void 0,o=t._result,s=0;s<e.length;s+=3)n=e[s],i=e[s+r],n?x(r,n,i,o):i(o);t._subscribers.length=0}}function j(){this.error=null}function O(t,e){try{return t(e)}catch(t){return Yt.error=t,Yt}}function x(t,e,r,n){var i=a(r),o=void 0,s=void 0,u=void 0,c=void 0;if(i){if(o=O(r,n),o===Yt?(c=!0,s=o.error,o=null):u=!0,e===o)return void A(e,v())}else o=n,u=!0;e._state!==Pt||(i&&u?w(e,o):c?A(e,s):t===Ut?T(e,o):t===kt&&A(e,o))}function P(t,e){var r=!1;try{e(function(e){r||(r=!0,w(t,e))},function(e){r||(r=!0,A(t,e))})}catch(e){A(t,e)}}function U(t,e,r){var n=arguments,i=this,o=i._state;if(o===Ut&&!t||o===kt&&!e)return At.instrument&&p("chained",i,i),i;i._onError=null;var s=new i.constructor(y,r),u=i._result;return At.instrument&&p("chained",i,s),o?!function(){var t=n[o-1];At.async(function(){return x(o,s,t,u)})}():C(i,s,t,e),s}function k(t,e,r){return t===Ut?{state:"fulfilled",value:r}:{state:"rejected",reason:r}}function M(t,e,r,n){this._instanceConstructor=t,this.promise=new t(y,n),this._abortOnReject=r,this._validateInput(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._init(),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&T(this.promise,this._result))):A(this.promise,this._validationError())}function Y(t,e){return new M(this,t,(!0),e).promise}function I(t,e){var r=this,n=new r(y,e);if(!St(t))return A(n,new TypeError("You must pass an array to race.")),n;for(var i=0;n._state===Pt&&i<t.length;i++)C(r.resolve(t[i]),void 0,function(t){return w(n,t)},function(t){return A(n,t)});return n}function N(t,e){var r=this,n=new r(y,e);return A(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function R(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function D(t,e){this._id=Nt++,this._label=e,this._state=void 0,this._result=void 0,this._subscribers=[],At.instrument&&p("created",this),y!==t&&("function"!=typeof t&&L(),this instanceof D?P(this,t):R())}function q(){this.value=void 0}function B(t){try{return t.then}catch(t){return Lt.value=t,Lt}}function K(t,e,r){try{t.apply(e,r)}catch(t){return Lt.value=t,Lt}}function Q(t,e){for(var r={},n=t.length,i=new Array(n),o=0;o<n;o++)i[o]=t[o];for(var s=0;s<e.length;s++){var u=e[s];r[u]=i[s+1]}return r}function V(t){for(var e=t.length,r=new Array(e-1),n=1;n<e;n++)r[n-1]=t[n];return r}function F(t,e){return{then:function(r,n){return t.call(e,r,n)}}}function $(t,e){var r=function(){for(var r=this,n=arguments.length,i=new Array(n+1),o=!1,s=0;s<n;++s){var u=arguments[s];if(!o){if(o=J(u),o===Rt){var a=new D(y);return A(a,Rt.value),a}o&&o!==!0&&(u=F(o,u))}i[s]=u}var c=new D(y);return i[n]=function(t,r){t?A(c,t):void 0===e?w(c,r):e===!0?w(c,V(arguments)):St(e)?w(c,Q(arguments,e)):w(c,r)},o?z(c,i,t,r):G(c,i,t,r)};return r.__proto__=t,r}function G(t,e,r,n){var i=K(r,n,e);return i===Lt&&A(t,i.value),t}function z(t,e,r,n){return D.all(e).then(function(e){var i=K(r,n,e);return i===Lt&&A(t,i.value),t})}function J(t){return!(!t||"object"!=typeof t)&&(t.constructor===D||B(t))}function W(t,e){return D.all(t,e)}function Z(t,e,r){this._superConstructor(t,e,!1,r)}function H(t,e){return new Z(D,t,e).promise}function X(t,e){return D.race(t,e)}function tt(t,e,r){this._superConstructor(t,e,!0,r)}function et(t,e){return new tt(D,t,e).promise}function rt(t,e,r){this._superConstructor(t,e,!1,r)}function nt(t,e){return new rt(D,t,e).promise}function it(t){throw setTimeout(function(){throw t}),t}function ot(t){var e={resolve:void 0,reject:void 0};return e.promise=new D(function(t,r){e.resolve=t,e.reject=r},t),e}function st(t,e,r){return D.all(t,r).then(function(t){if(!a(e))throw new TypeError("You must pass a function as map's second argument.");for(var n=t.length,i=new Array(n),o=0;o<n;o++)i[o]=e(t[o]);return D.all(i,r)})}function ut(t,e){return D.resolve(t,e)}function at(t,e){return D.reject(t,e)}function ct(t,e){return D.all(t,e)}function ft(t,e){return D.resolve(t,e).then(function(t){return ct(t,e)})}function lt(t,e,r){var n=St(t)?ct(t,r):ft(t,r);return n.then(function(t){if(!a(e))throw new TypeError("You must pass a function as filter's second argument.");for(var n=t.length,i=new Array(n),o=0;o<n;o++)i[o]=e(t[o]);return ct(i,r).then(function(e){for(var r=new Array(n),i=0,o=0;o<n;o++)e[o]&&(r[i]=t[o],i++);return r.length=i,r})})}function pt(t,e){$t[Dt]=t,$t[Dt+1]=e,Dt+=2,2===Dt&&Gt()}function ht(){var t=n.nextTick,e=n.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);return Array.isArray(e)&&"0"===e[1]&&"10"===e[2]&&(t=setImmediate),function(){return t(_t)}}function vt(){return"undefined"!=typeof qt?function(){qt(_t)}:gt()}function yt(){var t=0,e=new Qt(_t),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){return r.data=t=++t%2}}function dt(){var t=new MessageChannel;return t.port1.onmessage=_t,function(){return t.port2.postMessage(0)}}function gt(){return function(){return setTimeout(_t,1)}}function _t(){for(var t=0;t<Dt;t+=2){var e=$t[t],r=$t[t+1];e(r),$t[t]=void 0,$t[t+1]=void 0}Dt=0}function mt(){try{var e=t,r=e("vertx");return qt=r.runOnLoop||r.runOnContext,vt()}catch(t){return gt()}}function bt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function wt(){At.on.apply(At,arguments)}function Et(){At.off.apply(At,arguments)}var Tt={mixin:function(t){return t.on=this.on,t.off=this.off,t.trigger=this.trigger,t._promiseCallbacks=void 0,t},on:function(t,e){if("function"!=typeof e)throw new TypeError("Callback must be a function");var n=o(this),i=void 0;i=n[t],i||(i=n[t]=[]),r(i,e)===-1&&i.push(e)},off:function(t,e){var n=o(this),i=void 0,s=void 0;return e?(i=n[t],s=r(i,e),void(s!==-1&&i.splice(s,1))):void(n[t]=[])},trigger:function(t,e,r){var n=o(this),i=void 0,s=void 0;if(i=n[t])for(var u=0;u<i.length;u++)(s=i[u])(e,r)}},At={instrument:!1};Tt.mixin(At);var Ct=void 0;Ct=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var St=Ct,jt=Date.now||function(){return(new Date).getTime()},Ot=Object.create||function(t){if(arguments.length>1)throw new Error("Second argument not supported");if("object"!=typeof t)throw new TypeError("Argument must be an object");return f.prototype=t,new f},xt=[],Pt=void 0,Ut=1,kt=2,Mt=new j,Yt=new j;M.prototype._validateInput=function(t){return St(t)},M.prototype._validationError=function(){return new Error("Array Methods must be provided an Array")},M.prototype._init=function(){this._result=new Array(this.length)},M.prototype._enumerate=function(){for(var t=this.length,e=this.promise,r=this._input,n=0;e._state===Pt&&n<t;n++)this._eachEntry(r[n],n)},M.prototype._settleMaybeThenable=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===h){var i=d(t);if(i===U&&t._state!==Pt)t._onError=null,this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=this._makeResult(Ut,e,t);else if(r===D){var o=new r(y);b(o,t,i),this._willSettleAt(o,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},M.prototype._eachEntry=function(t,e){c(t)?this._settleMaybeThenable(t,e):(this._remaining--,this._result[e]=this._makeResult(Ut,e,t))},M.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===Pt&&(this._remaining--,this._abortOnReject&&t===kt?A(n,r):this._result[e]=this._makeResult(t,e,r)),0===this._remaining&&T(n,this._result)},M.prototype._makeResult=function(t,e,r){return r},M.prototype._willSettleAt=function(t,e){var r=this;C(t,void 0,function(t){return r._settledAt(Ut,e,t)},function(t){return r._settledAt(kt,e,t)})};var It="rsvp_"+jt()+"-",Nt=0;D.cast=h,D.all=Y,D.race=I,D.resolve=h,D.reject=N,D.prototype={constructor:D,_guidKey:It,_onError:function(t){var e=this;At.after(function(){e._onError&&At.trigger("error",t,e._label)})},then:U,catch:function(t,e){return this.then(void 0,t,e)},finally:function(t,e){var r=this,n=r.constructor;return r.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})},e)}};var Lt=new q,Rt=new q;Z.prototype=Ot(M.prototype),Z.prototype._superConstructor=M,Z.prototype._makeResult=k,Z.prototype._validationError=function(){return new Error("allSettled must be called with an array")},tt.prototype=Ot(M.prototype),tt.prototype._superConstructor=M,tt.prototype._init=function(){this._result={}},tt.prototype._validateInput=function(t){return t&&"object"==typeof t},tt.prototype._validationError=function(){return new Error("Promise.hash must be called with an object")},tt.prototype._enumerate=function(){var t=this,e=t.promise,r=t._input,n=[];for(var i in r)e._state===Pt&&Object.prototype.hasOwnProperty.call(r,i)&&n.push({position:i,entry:r[i]});var o=n.length;t._remaining=o;for(var s=void 0,u=0;e._state===Pt&&u<o;u++)s=n[u],t._eachEntry(s.entry,s.position)},rt.prototype=Ot(tt.prototype),rt.prototype._superConstructor=M,rt.prototype._makeResult=k,rt.prototype._validationError=function(){return new Error("hashSettled must be called with an object")};var Dt=0,qt=void 0,Bt="undefined"!=typeof window?window:void 0,Kt=Bt||{},Qt=Kt.MutationObserver||Kt.WebKitMutationObserver,Vt="undefined"==typeof self&&"undefined"!=typeof n&&"[object process]"==={}.toString.call(n),Ft="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$t=new Array(1e3),Gt=void 0;Gt=Vt?ht():Qt?yt():Ft?dt():void 0===Bt&&"function"==typeof t?mt():gt();var zt=void 0;if("object"==typeof self)zt=self;else{if("object"!=typeof i)throw new Error("no global: `self` or `global` found");zt=i}var Jt;At.async=pt,At.after=function(t){return setTimeout(t,0)};var Wt=ut,Zt=function(t,e){return At.async(t,e)};if("undefined"!=typeof window&&"object"==typeof window.__PROMISE_INSTRUMENTATION__){var Ht=window.__PROMISE_INSTRUMENTATION__;s("instrument",!0);for(var Xt in Ht)Ht.hasOwnProperty(Xt)&&wt(Xt,Ht[Xt])}var te=(Jt={cast:Wt,Promise:D,EventTarget:Tt,all:W,allSettled:H,race:X,hash:et,hashSettled:nt,rethrow:it,defer:ot,denodeify:$,configure:s,on:wt,off:Et,resolve:ut,reject:at,map:st},bt(Jt,"async",Zt),bt(Jt,"filter",lt),Jt);e.default=te,e.cast=Wt,e.Promise=D,e.EventTarget=Tt,e.all=W,e.allSettled=H,e.race=X,e.hash=et,e.hashSettled=nt,e.rethrow=it,e.defer=ot,e.denodeify=$,e.configure=s,e.on=wt,e.off=Et,e.resolve=ut,e.reject=at,e.map=st,e.async=Zt,e.filter=lt,Object.defineProperty(e,"__esModule",{value:!0})})}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:27}]},{},[5]);
//# sourceMappingURL=quantify.js.map
