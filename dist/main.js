/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n\t--bgDark: rgb(20, 20, 36);\n\t--bgLight: rgb(45, 45, 71);\n\t--cellBg: rgb(112, 113, 173);\n\t--uiBgDark: rgb(30, 30, 48);\n\t--uiBgLight: rgb(45, 45, 71);\n\tcolor: white;\n}\n* {\n\tbox-sizing: border-box;\n\tfont-family: \"Roboto\", sans-serif;\n}\n\nh1,\nh2 {\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\nbody,\nhtml,\n#mainContainer {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\nbody {\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\tbackground-image: linear-gradient(\n\t\tvar(--bgDark),\n\t\tvar(--bgDark),\n\t\tvar(--bgDark),\n\t\tvar(--bgLight)\n\t);\n}\n\n#boardContainer {\n\tdisplay: none;\n\tflex-direction: column;\n\tborder-radius: 5px;\n\tbackground-color: var(--uiBgLight);\n\tpadding: 0px 50px 50px 50px;\n}\n#titleContainer {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 440px;\n\theight: 50px;\n}\n#gameContainer {\n\tdisplay: flex;\n\tgap: 50px;\n}\n#mainContainer {\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: center;\n\tjustify-content: center;\n}\n#player1BoardContainer,\n#player2BoardContainer,\n#modalBoard {\n\tdisplay: flex;\n\twidth: 500px;\n\theight: 500px;\n\tflex-wrap: wrap;\n}\n\n#player1BoardContainer,\n#player2BoardContainer {\n\tdisplay: none;\n}\n\n.boardCell {\n\tborder-radius: 5px;\n\theight: 50px;\n\twidth: 50px;\n\tbackground-color: var(--cellBg);\n\tborder: rgb(61, 61, 61) solid 2px;\n}\n\n#gameOver {\n\tborder-radius: 5px;\n\tposition: fixed;\n\n\tflex-direction: column;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 25%;\n\theight: 25%;\n\ttransform: translate(-50%, -50%);\n\tbackground-color: var(--uiBgDark);\n\tpadding: 10px;\n}\n#gameOverInner {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 2rem;\n\tjustify-content: center;\n\tbackground-color: var(--uiBgLight);\n\tborder-radius: 5px;\n\theight: 85%;\n}\n#uiContainer {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 90%;\n\tgap: 50px;\n\tbackground-color: var(--uiBgLight);\n\tborder-radius: 7px;\n\tpadding: 1rem;\n}\n#placeShipsContainer {\n\tdisplay: flex;\n\tborder-radius: 7px;\n\tbackground-color: var(--uiBgDark);\n\talign-items: center;\n\tflex-direction: column;\n\tpadding: 1rem;\n}\n\n.cellContainer {\n\tdisplay: flex;\n\twidth: min-content;\n\tborder: var(--uiBgLight) solid;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\ttransition: 0.25s;\n}\n\n.cellContainer:hover {\n\ttransition: 0.25s;\n\tscale: 1.1;\n}\n#shipContainer {\n\tdisplay: flex;\n\tborder-radius: 7px;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 700px;\n\twidth: 300px;\n\tgap: 50px;\n\tpadding: 1rem;\n\tborder: solid var(--cellBg) 0.4rem;\n}\n\nfooter {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 10px;\n\tbackground-color: black;\n\tgap: 10px;\n}\nheader {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 10px;\n\tbackground-color: black;\n}\na {\n\ttext-decoration: none;\n\tdisplay: flex;\n\tgap: 10px;\n}\na:visited {\n\tcolor: white;\n}\na img {\n\tvertical-align: middle;\n}\n\ninput[type=\"button\"] {\n\tborder: none;\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n\n.on {\n\tbackground-color: rgb(82, 82, 82);\n\tcolor: white;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;CACC,yBAAyB;CACzB,0BAA0B;CAC1B,4BAA4B;CAC5B,2BAA2B;CAC3B,4BAA4B;CAC5B,YAAY;AACb;AACA;CACC,sBAAsB;CACtB,iCAAiC;AAClC;;AAEA;;CAEC,WAAW;CACX,YAAY;AACb;;AAEA;;;CAGC,WAAW;CACX,YAAY;CACZ,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,sBAAsB;CACtB;;;;;EAKC;AACF;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,kBAAkB;CAClB,kCAAkC;CAClC,2BAA2B;AAC5B;AACA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,UAAU;CACV,YAAY;AACb;AACA;CACC,aAAa;CACb,SAAS;AACV;AACA;CACC,aAAa;CACb,YAAY;CACZ,mBAAmB;CACnB,uBAAuB;AACxB;AACA;;;CAGC,aAAa;CACb,YAAY;CACZ,aAAa;CACb,eAAe;AAChB;;AAEA;;CAEC,aAAa;AACd;;AAEA;CACC,kBAAkB;CAClB,YAAY;CACZ,WAAW;CACX,+BAA+B;CAC/B,iCAAiC;AAClC;;AAEA;CACC,kBAAkB;CAClB,eAAe;;CAEf,sBAAsB;CACtB,QAAQ;CACR,SAAS;CACT,UAAU;CACV,WAAW;CACX,gCAAgC;CAChC,iCAAiC;CACjC,aAAa;AACd;AACA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,uBAAuB;CACvB,kCAAkC;CAClC,kBAAkB;CAClB,WAAW;AACZ;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,WAAW;CACX,SAAS;CACT,kCAAkC;CAClC,kBAAkB;CAClB,aAAa;AACd;AACA;CACC,aAAa;CACb,kBAAkB;CAClB,iCAAiC;CACjC,mBAAmB;CACnB,sBAAsB;CACtB,aAAa;AACd;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,8BAA8B;CAC9B,kBAAkB;CAClB,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,iBAAiB;CACjB,UAAU;AACX;AACA;CACC,aAAa;CACb,kBAAkB;CAClB,sBAAsB;CACtB,mBAAmB;CACnB,aAAa;CACb,YAAY;CACZ,SAAS;CACT,aAAa;CACb,kCAAkC;AACnC;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,aAAa;CACb,uBAAuB;CACvB,SAAS;AACV;AACA;CACC,aAAa;CACb,mBAAmB;CACnB,uBAAuB;CACvB,aAAa;CACb,uBAAuB;AACxB;AACA;CACC,qBAAqB;CACrB,aAAa;CACb,SAAS;AACV;AACA;CACC,YAAY;AACb;AACA;CACC,sBAAsB;AACvB;;AAEA;CACC,YAAY;CACZ,mBAAmB;CACnB,aAAa;AACd;;AAEA;CACC,iCAAiC;CACjC,YAAY;AACb","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap\");\n\n:root {\n\t--bgDark: rgb(20, 20, 36);\n\t--bgLight: rgb(45, 45, 71);\n\t--cellBg: rgb(112, 113, 173);\n\t--uiBgDark: rgb(30, 30, 48);\n\t--uiBgLight: rgb(45, 45, 71);\n\tcolor: white;\n}\n* {\n\tbox-sizing: border-box;\n\tfont-family: \"Roboto\", sans-serif;\n}\n\nh1,\nh2 {\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\nbody,\nhtml,\n#mainContainer {\n\twidth: 100%;\n\theight: 100%;\n\tmargin: 0px;\n\tpadding: 0px;\n}\n\nbody {\n\tdisplay: flex;\n\tposition: relative;\n\tflex-direction: column;\n\tbackground-image: linear-gradient(\n\t\tvar(--bgDark),\n\t\tvar(--bgDark),\n\t\tvar(--bgDark),\n\t\tvar(--bgLight)\n\t);\n}\n\n#boardContainer {\n\tdisplay: none;\n\tflex-direction: column;\n\tborder-radius: 5px;\n\tbackground-color: var(--uiBgLight);\n\tpadding: 0px 50px 50px 50px;\n}\n#titleContainer {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 440px;\n\theight: 50px;\n}\n#gameContainer {\n\tdisplay: flex;\n\tgap: 50px;\n}\n#mainContainer {\n\tdisplay: flex;\n\theight: 100%;\n\talign-items: center;\n\tjustify-content: center;\n}\n#player1BoardContainer,\n#player2BoardContainer,\n#modalBoard {\n\tdisplay: flex;\n\twidth: 500px;\n\theight: 500px;\n\tflex-wrap: wrap;\n}\n\n#player1BoardContainer,\n#player2BoardContainer {\n\tdisplay: none;\n}\n\n.boardCell {\n\tborder-radius: 5px;\n\theight: 50px;\n\twidth: 50px;\n\tbackground-color: var(--cellBg);\n\tborder: rgb(61, 61, 61) solid 2px;\n}\n\n#gameOver {\n\tborder-radius: 5px;\n\tposition: fixed;\n\n\tflex-direction: column;\n\ttop: 50%;\n\tleft: 50%;\n\twidth: 25%;\n\theight: 25%;\n\ttransform: translate(-50%, -50%);\n\tbackground-color: var(--uiBgDark);\n\tpadding: 10px;\n}\n#gameOverInner {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 2rem;\n\tjustify-content: center;\n\tbackground-color: var(--uiBgLight);\n\tborder-radius: 5px;\n\theight: 85%;\n}\n#uiContainer {\n\tdisplay: flex;\n\talign-items: center;\n\theight: 90%;\n\tgap: 50px;\n\tbackground-color: var(--uiBgLight);\n\tborder-radius: 7px;\n\tpadding: 1rem;\n}\n#placeShipsContainer {\n\tdisplay: flex;\n\tborder-radius: 7px;\n\tbackground-color: var(--uiBgDark);\n\talign-items: center;\n\tflex-direction: column;\n\tpadding: 1rem;\n}\n\n.cellContainer {\n\tdisplay: flex;\n\twidth: min-content;\n\tborder: var(--uiBgLight) solid;\n\tborder-radius: 5px;\n\tcursor: pointer;\n\ttransition: 0.25s;\n}\n\n.cellContainer:hover {\n\ttransition: 0.25s;\n\tscale: 1.1;\n}\n#shipContainer {\n\tdisplay: flex;\n\tborder-radius: 7px;\n\tflex-direction: column;\n\talign-items: center;\n\theight: 700px;\n\twidth: 300px;\n\tgap: 50px;\n\tpadding: 1rem;\n\tborder: solid var(--cellBg) 0.4rem;\n}\n\nfooter {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 10px;\n\tbackground-color: black;\n\tgap: 10px;\n}\nheader {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 10px;\n\tbackground-color: black;\n}\na {\n\ttext-decoration: none;\n\tdisplay: flex;\n\tgap: 10px;\n}\na:visited {\n\tcolor: white;\n}\na img {\n\tvertical-align: middle;\n}\n\ninput[type=\"button\"] {\n\tborder: none;\n\tborder-radius: 10px;\n\tpadding: 10px;\n}\n\n.on {\n\tbackground-color: rgb(82, 82, 82);\n\tcolor: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMcontroller.js":
/*!******************************!*\
  !*** ./src/DOMcontroller.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _imgs_github_mark_white_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/github-mark-white.png */ "./src/imgs/github-mark-white.png");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");



/* eslint-disable no-underscore-dangle */
const player1BoardContainer = document.getElementById("player1BoardContainer");
const player2BoardContainer = document.getElementById("player2BoardContainer");
const boardContainer = document.getElementById("boardContainer");
const modalBoard = document.getElementById("modalBoard");
const root = document.getElementById("mainContainer");
const footer = document.querySelector("footer a");

const githubicon = new Image();
githubicon.src = _imgs_github_mark_white_png__WEBPACK_IMPORTED_MODULE_1__;
footer.appendChild(githubicon);

const DOMcontroller = () => {
	const renderGameOver = (winner = "bob") => {
		const gameOverMenu = document.getElementById("gameOver");
		const winnerText = document.getElementById("winnerText");

		if (gameOverMenu.style.display === "none") {
			gameOverMenu.style.display = "block";
			winnerText.textContent = `${winner} wins!`;
		} else {
			gameOverMenu.style.display = "none";
		}
	};
	const renderShipPlacement = () => {
		const modelContainer = document.getElementById("placeShipsContainer");
		const shipContainers = Array.from(document.querySelectorAll("cellContainer"));

		console.log(shipContainers);

		if (modelContainer.style.display === "none") {
			modelContainer.style.display = "flex";

			player1BoardContainer.style.display = "none";
			player2BoardContainer.style.display = "none";
			boardContainer.style.display = "none";
		} else {
			modelContainer.style.display = "none";
			player1BoardContainer.style.display = "flex";
			player2BoardContainer.style.display = "flex";
			boardContainer.style.display = "flex";
		}
	};

	const renderBoards = (playerBoard, playerNo) => {
		if (playerNo === 1) {
			player1BoardContainer.innerHTML = "";
		}

		if (playerNo === 2) {
			player2BoardContainer.innerHTML = "";
		}

		if (playerNo === 3) {
			modalBoard.innerHTML = "";
		}

		for (let i = 0; i < 10; i += 1) {
			for (let j = 0; j < 10; j += 1) {
				const cell = document.createElement("div");
				cell.classList.add("boardCell");
				cell.setAttribute("data-coord-X", j);
				cell.setAttribute("data-coord-Y", i);

				if (playerBoard[j][i].taken !== null) {
					cell.style.backgroundColor = "black";
				}

				if (playerBoard[j][i].status === "miss") {
					cell.style.backgroundColor = "cyan";
				}

				if (playerBoard[j][i].status === "hit") {
					cell.style.backgroundColor = "red";
				}

				if (playerNo === 1) {
					player1BoardContainer.appendChild(cell);
				}

				if (playerNo === 2) {
					player2BoardContainer.appendChild(cell);
				}

				if (playerNo === 3) {
					modalBoard.appendChild(cell);
				}
			}
		}
	};

	const addSelected = (shipToPlace) => {
		const allContainers = document.querySelectorAll("#cellContainer");
		allContainers.forEach((container) => {
			container.style.border = "";
		});
		// eslint-disable-next-line no-param-reassign
		shipToPlace.style.border = "blue solid";
	};

	function bindClick(handler) {
		root.addEventListener("click", (event) => {
			handler(event);
		});
	}
	return {
		bindClick,
		renderBoards,
		addSelected,
		renderShipPlacement,
		renderGameOver,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOMcontroller);


/***/ }),

/***/ "./src/gameController.js":
/*!*******************************!*\
  !*** ./src/gameController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable no-underscore-dangle */



function gameController() {
	let _selectedShip = null;

	const setSelectedShip = (shipArrLoc) => {
		_selectedShip = shipArrLoc;
	};

	const getSelectedShip = () => _selectedShip;

	const newGame = (player1, player2) => {
		// place ships randomly on computer board
		player2._playerShips.forEach((s) => {
			let x = 0;
			let y = 0;
			const orien = Math.random() >= 0.5;
			s.setOrientation(orien);
			if (s.getOrientation() === true) {
				y = Math.floor(Math.random() * (10 - s.getLength()));
				x = Math.floor(Math.random() * 10);
			} else {
				x = Math.floor(Math.random() * (10 - s.getLength()));
				y = Math.floor(Math.random() * 10);
			}
			while (!player2._playerBoard.getValidSpace(s, x, y)) {
				if (s.getOrientation() === true) {
					y = Math.floor(Math.random() * (10 - s.getLength()));
					x = Math.floor(Math.random() * 10);
				} else {
					x = Math.floor(Math.random() * (10 - s.getLength()));
					y = Math.floor(Math.random() * 10);
				}
			}
			player2._playerBoard.placeShip(s, x, y);
		});
	};

	const startGame = () => {
		// while all sunk on both boards is not true
		// player 1 chooses attack
		// computer chooses attack
	};

	return { newGame, setSelectedShip, getSelectedShip };
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable no-underscore-dangle */


function gameBoard() {
	const _board = [];
	const _placedShips = [];

	(function setupBoard() {
		for (let i = 0; i < 10; i += 1) {
			_board[i] = [];
			for (let j = 0; j < 10; j += 1) {
				_board[i][j] = {
					location: [i, j],
					taken: null,
					status: null,
				};
			}
		}
	})();

	const getValidSpace = (ship, x, y) => {
		if (ship.getOrientation()) {
			if (y + ship.getLength() >= 11) {
				return false;
			}
			for (let i = y - 1; i < y + ship.getLength() + 1; i += 1) {
				if (i >= 0 && i <= 9) {
					if (_board[x][i] !== undefined && _board[x][i].taken !== null) {
						return false;
					}
					if (x + 1 <= 9) {
						if (_board[x + 1][i] !== undefined && _board[x + 1][i].taken !== null) {
							return false;
						}
					}
					if (x - 1 >= 0) {
						if (_board[x - 1][i] !== undefined && _board[x - 1][i].taken !== null) {
							return false;
						}
					}
				}
			}
		} else {
			if (x + ship.getLength() >= 11) {
				return false;
			}
			for (let i = x - 1; i < x + ship.getLength() + 1; i += 1) {
				if (i >= 0 && i <= 9) {
					if (_board[i][y] !== undefined && _board[i][y].taken !== null) {
						return false;
					}
					if (_board[i][y + 1] !== undefined && _board[i][y + 1].taken !== null) {
						return false;
					}
					if (_board[i][y - 1] !== undefined && _board[i][y - 1].taken !== null) {
						return false;
					}
				}
			}
		}
		return true;
	};

	const getBoard = () => _board;

	const getShip = (x, y) => {
		let index;
		for (let i = 0; i < _placedShips.length; i += 1) {
			if (_placedShips[i].getName() === _board[x][y].taken) {
				index = i;
			}
		}
		return index;
	};

	const getPlacedShips = () => _placedShips;

	const placeShip = (ship, x, y) => {
		if (ship.getOrientation()) {
			for (let i = y; i < y + ship.getLength(); i += 1) {
				_board[x][i].taken = ship.getName();
			}
		} else {
			for (let i = x; i < x + ship.getLength(); i += 1) {
				_board[i][y].taken = ship.getName();
			}
		}
		_placedShips.push(ship);
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("board Updated");
	};

	const receiveAttack = (x, y) => {
		const shipAtLoc = _placedShips[getShip(x, y)];
		if (shipAtLoc !== undefined) {
			_board[x][y].status = "hit";
			shipAtLoc.setHits();
		} else {
			_board[x][y].status = "miss";
		}
	};

	const allShipsSunk = () => _placedShips.every((element) => element.getSunk());

	return {
		placeShip,
		getBoard,
		receiveAttack,
		getPlacedShips,
		allShipsSunk,
		getValidSpace,
	};
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/ship.js");
/* eslint-disable no-underscore-dangle */




const player = (pName) => {
	const _name = pName;
	const _shotsTaken = [];
	const _playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"])();
	const getPlayerName = () => _name;
	const _playerShips = [
		(0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(5, "Carrier"),
		(0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(4, "Battleship"),
		(0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(3, "Destroyer"),
		(0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(3, "SubMarine"),
		(0,_ship__WEBPACK_IMPORTED_MODULE_2__["default"])(2, "Patrol Boat"),
	];

	const checkAlreadyPicked = (x, y) => {
		JSON.stringify(_shotsTaken);
		return JSON.stringify(_shotsTaken).includes([x, y]);
	};

	const launchAttack = (enemyBoard, x, y) => {
		enemyBoard.receiveAttack(x, y);
		_shotsTaken.push([x, y]);
		pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish("board Updated");
	};

	const getRandomCoord = () => {
		let x = Math.floor(Math.random() * 10);
		let y = Math.floor(Math.random() * 10);
		while (checkAlreadyPicked(x, y)) {
			x = Math.floor(Math.random() * 10);
			y = Math.floor(Math.random() * 10);
		}

		return [x, y];
	};

	const getPrevMoves = () => _shotsTaken;
	return {
		getPrevMoves,
		checkAlreadyPicked,
		getPlayerName,
		_playerBoard,
		launchAttack,
		getRandomCoord,
		_playerShips,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
/* eslint-disable no-underscore-dangle */
function ship(shipLength, shipName, vertical = false) {
	const _length = shipLength;
	let _hits = 0;
	let _isSunk = false;
	const _name = shipName;
	let _orientation = vertical;

	const getSunk = () => _isSunk;
	const getHits = () => _hits;
	const getLength = () => _length;
	const getName = () => _name;
	const getOrientation = () => _orientation;

	const checkSunk = () => {
		if (_hits === _length) {
			_isSunk = true;
		}
	};

	const setHits = () => {
		if (getHits() < _length) {
			_hits += 1;
			checkSunk();
		}
	};

	const setOrientation = (orient) => {
		_orientation = orient;
	};

	return {
		getName,
		getLength,
		setHits,
		getHits,
		getSunk,
		getOrientation,
		setOrientation,
	};
}


/***/ }),

/***/ "./src/imgs/github-mark-white.png":
/*!****************************************!*\
  !*** ./src/imgs/github-mark-white.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "src/assets/images/github-mark-white..png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pubsub-js */ "./node_modules/pubsub-js/src/pubsub.js");
/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameController */ "./src/gameController.js");
/* harmony import */ var _DOMcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMcontroller */ "./src/DOMcontroller.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* eslint-disable no-underscore-dangle */






const game = (0,_gameController__WEBPACK_IMPORTED_MODULE_2__["default"])();
const view = (0,_DOMcontroller__WEBPACK_IMPORTED_MODULE_3__["default"])();

let player1 = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])("Player");
let computer = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])("Computer");

game.newGame(player1, computer);

view.renderBoards(player1._playerBoard.getBoard(), 3);
view.renderGameOver();
const handleClick = (event) => {
	const { target } = event;

	if (target.getAttribute("id") === "verticalPlacement") {
		if (target.classList.contains("on")) {
			target.classList.remove("on");
		} else {
			target.classList.add("on");
		}
	}

	if (target.getAttribute("class") === "boardCell") {
		const playerX = Number(target.getAttribute("data-coord-X"));
		const playerY = Number(target.getAttribute("data-coord-Y"));
		if (
			target.parentElement.getAttribute("id") === "player2BoardContainer" &&
			player1.checkAlreadyPicked(playerX, playerY) === false
		) {
			player1.launchAttack(computer._playerBoard, playerX, playerY);

			const nextMove = computer.getRandomCoord();
			computer.launchAttack(player1._playerBoard, nextMove[0], nextMove[1]);

			if (player1._playerBoard.allShipsSunk()) {
				view.renderGameOver(computer.getPlayerName());
			} else if (computer._playerBoard.allShipsSunk()) {
				view.renderGameOver(player1.getPlayerName());
			}
		}
	}

	if (target.parentElement.getAttribute("id") === "cellContainer") {
		view.addSelected(target.parentElement);
		game.setSelectedShip(target.parentElement.getAttribute("shipId"));
	}

	if (target.parentElement.getAttribute("id") === "modalBoard") {
		const verticalTick = document.getElementById("verticalPlacement");

		if (game.getSelectedShip() !== null) {
			const x = Number(target.getAttribute("data-coord-x"));
			const y = Number(target.getAttribute("data-coord-y"));

			const shipElement = document.querySelector(
				`[shipid="${game.getSelectedShip()}"]`
			);

			if (verticalTick.getAttribute("class") === "on") {
				player1._playerShips[game.getSelectedShip()].setOrientation(true);
			} else {
				player1._playerShips[game.getSelectedShip()].setOrientation(false);
			}

			if (
				player1._playerBoard.getValidSpace(
					player1._playerShips[game.getSelectedShip()],
					x,
					y
				)
			) {
				shipElement.style.visibility = "hidden";
				player1._playerBoard.placeShip(
					player1._playerShips[game.getSelectedShip()],
					x,
					y
				);
				player1._playerShips[game.getSelectedShip()] = null;
				game.setSelectedShip(null);
			}

			if (player1._playerShips.every((val) => val === player1._playerShips[0])) {
				view.renderShipPlacement();
			}
		}
	}

	if (target.getAttribute("id") === "restartBtn") {
		player1 = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])("Player");
		computer = (0,_player__WEBPACK_IMPORTED_MODULE_4__["default"])("Computer");
		console.log(player1._playerShips);
		view.renderGameOver();
		game.newGame(player1, computer);
		pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().publish("board Updated");
		view.renderShipPlacement();
	}
};

view.bindClick(handleClick);
pubsub_js__WEBPACK_IMPORTED_MODULE_1___default().subscribe("board Updated", () => {
	view.renderBoards(player1._playerBoard.getBoard(), 1);
	view.renderBoards(computer._playerBoard.getBoard(), 2);
	view.renderBoards(player1._playerBoard.getBoard(), 3);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ3VCO0FBQ0U7QUFDRjtBQUNkOztBQUU5QixhQUFhLDJEQUFjO0FBQzNCLGFBQWEsMERBQWE7O0FBRTFCLGNBQWMsbURBQU07QUFDcEIsZUFBZSxtREFBTTs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbURBQU07QUFDbEIsYUFBYSxtREFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFjO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBEQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvRE9NY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsQDA7MSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuXFx0LS1iZ0Rhcms6IHJnYigyMCwgMjAsIDM2KTtcXG5cXHQtLWJnTGlnaHQ6IHJnYig0NSwgNDUsIDcxKTtcXG5cXHQtLWNlbGxCZzogcmdiKDExMiwgMTEzLCAxNzMpO1xcblxcdC0tdWlCZ0Rhcms6IHJnYigzMCwgMzAsIDQ4KTtcXG5cXHQtLXVpQmdMaWdodDogcmdiKDQ1LCA0NSwgNzEpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmgxLFxcbmgyIHtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHksXFxuaHRtbCxcXG4jbWFpbkNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG1hcmdpbjogMHB4O1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXFxuXFx0XFx0dmFyKC0tYmdEYXJrKSxcXG5cXHRcXHR2YXIoLS1iZ0RhcmspLFxcblxcdFxcdHZhcigtLWJnRGFyayksXFxuXFx0XFx0dmFyKC0tYmdMaWdodClcXG5cXHQpO1xcbn1cXG5cXG4jYm9hcmRDb250YWluZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlCZ0xpZ2h0KTtcXG5cXHRwYWRkaW5nOiAwcHggNTBweCA1MHB4IDUwcHg7XFxufVxcbiN0aXRsZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogNDQwcHg7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcbn1cXG4jZ2FtZUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDUwcHg7XFxufVxcbiNtYWluQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4jcGxheWVyMUJvYXJkQ29udGFpbmVyLFxcbiNwbGF5ZXIyQm9hcmRDb250YWluZXIsXFxuI21vZGFsQm9hcmQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDUwMHB4O1xcblxcdGhlaWdodDogNTAwcHg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4jcGxheWVyMUJvYXJkQ29udGFpbmVyLFxcbiNwbGF5ZXIyQm9hcmRDb250YWluZXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5ib2FyZENlbGwge1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxuXFx0d2lkdGg6IDUwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbEJnKTtcXG5cXHRib3JkZXI6IHJnYig2MSwgNjEsIDYxKSBzb2xpZCAycHg7XFxufVxcblxcbiNnYW1lT3ZlciB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG5cXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHRvcDogNTAlO1xcblxcdGxlZnQ6IDUwJTtcXG5cXHR3aWR0aDogMjUlO1xcblxcdGhlaWdodDogMjUlO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdEYXJrKTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG4jZ2FtZU92ZXJJbm5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiAycmVtO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdMaWdodCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGhlaWdodDogODUlO1xcbn1cXG4jdWlDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDkwJTtcXG5cXHRnYXA6IDUwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlCZ0xpZ2h0KTtcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuI3BsYWNlU2hpcHNDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdEYXJrKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmNlbGxDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IG1pbi1jb250ZW50O1xcblxcdGJvcmRlcjogdmFyKC0tdWlCZ0xpZ2h0KSBzb2xpZDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHRyYW5zaXRpb246IDAuMjVzO1xcbn1cXG5cXG4uY2VsbENvbnRhaW5lcjpob3ZlciB7XFxuXFx0dHJhbnNpdGlvbjogMC4yNXM7XFxuXFx0c2NhbGU6IDEuMTtcXG59XFxuI3NoaXBDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDcwMHB4O1xcblxcdHdpZHRoOiAzMDBweDtcXG5cXHRnYXA6IDUwcHg7XFxuXFx0cGFkZGluZzogMXJlbTtcXG5cXHRib3JkZXI6IHNvbGlkIHZhcigtLWNlbGxCZykgMC40cmVtO1xcbn1cXG5cXG5mb290ZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcblxcdGdhcDogMTBweDtcXG59XFxuaGVhZGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuYSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5hOnZpc2l0ZWQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuYSBpbWcge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ub24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYig4MiwgODIsIDgyKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLDRCQUE0QjtDQUM1QiwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLFlBQVk7QUFDYjtBQUNBO0NBQ0Msc0JBQXNCO0NBQ3RCLGlDQUFpQztBQUNsQzs7QUFFQTs7Q0FFQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBOzs7Q0FHQyxXQUFXO0NBQ1gsWUFBWTtDQUNaLFdBQVc7Q0FDWCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0Qjs7Ozs7RUFLQztBQUNGOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixrQkFBa0I7Q0FDbEIsa0NBQWtDO0NBQ2xDLDJCQUEyQjtBQUM1QjtBQUNBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFlBQVk7QUFDYjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFNBQVM7QUFDVjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsdUJBQXVCO0FBQ3hCO0FBQ0E7OztDQUdDLGFBQWE7Q0FDYixZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7QUFDaEI7O0FBRUE7O0NBRUMsYUFBYTtBQUNkOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsK0JBQStCO0NBQy9CLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlOztDQUVmLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1IsU0FBUztDQUNULFVBQVU7Q0FDVixXQUFXO0NBQ1gsZ0NBQWdDO0NBQ2hDLGlDQUFpQztDQUNqQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsbUJBQW1CO0NBQ25CLFNBQVM7Q0FDVCx1QkFBdUI7Q0FDdkIsa0NBQWtDO0NBQ2xDLGtCQUFrQjtDQUNsQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFNBQVM7Q0FDVCxrQ0FBa0M7Q0FDbEMsa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDtBQUNBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixpQ0FBaUM7Q0FDakMsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLDhCQUE4QjtDQUM5QixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixVQUFVO0FBQ1g7QUFDQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsWUFBWTtDQUNaLFNBQVM7Q0FDVCxhQUFhO0NBQ2Isa0NBQWtDO0FBQ25DOztBQUVBO0NBQ0MsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixTQUFTO0FBQ1Y7QUFDQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixhQUFhO0NBQ2IsU0FBUztBQUNWO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsaUNBQWlDO0NBQ2pDLFlBQVk7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbEAwOzEmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcblxcdC0tYmdEYXJrOiByZ2IoMjAsIDIwLCAzNik7XFxuXFx0LS1iZ0xpZ2h0OiByZ2IoNDUsIDQ1LCA3MSk7XFxuXFx0LS1jZWxsQmc6IHJnYigxMTIsIDExMywgMTczKTtcXG5cXHQtLXVpQmdEYXJrOiByZ2IoMzAsIDMwLCA0OCk7XFxuXFx0LS11aUJnTGlnaHQ6IHJnYig0NSwgNDUsIDcxKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwsXFxuI21haW5Db250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHZhcigtLWJnRGFyayksXFxuXFx0XFx0dmFyKC0tYmdEYXJrKSxcXG5cXHRcXHR2YXIoLS1iZ0RhcmspLFxcblxcdFxcdHZhcigtLWJnTGlnaHQpXFxuXFx0KTtcXG59XFxuXFxuI2JvYXJkQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdMaWdodCk7XFxuXFx0cGFkZGluZzogMHB4IDUwcHggNTBweCA1MHB4O1xcbn1cXG4jdGl0bGVDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDQ0MHB4O1xcblxcdGhlaWdodDogNTBweDtcXG59XFxuI2dhbWVDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA1MHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3BsYXllcjFCb2FyZENvbnRhaW5lcixcXG4jcGxheWVyMkJvYXJkQ29udGFpbmVyLFxcbiNtb2RhbEJvYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI3BsYXllcjFCb2FyZENvbnRhaW5lcixcXG4jcGxheWVyMkJvYXJkQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmRDZWxsIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGxCZyk7XFxuXFx0Ym9yZGVyOiByZ2IoNjEsIDYxLCA2MSkgc29saWQgMnB4O1xcbn1cXG5cXG4jZ2FtZU92ZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0d2lkdGg6IDI1JTtcXG5cXHRoZWlnaHQ6IDI1JTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnRGFyayk7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuI2dhbWVPdmVySW5uZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnTGlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRoZWlnaHQ6IDg1JTtcXG59XFxuI3VpQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0Z2FwOiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdMaWdodCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcbiNwbGFjZVNoaXBzQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnRGFyayk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jZWxsQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXI6IHZhcigtLXVpQmdMaWdodCkgc29saWQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNlbGxDb250YWluZXI6aG92ZXIge1xcblxcdHRyYW5zaXRpb246IDAuMjVzO1xcblxcdHNjYWxlOiAxLjE7XFxufVxcbiNzaGlwQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA3MDBweDtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0Z2FwOiA1MHB4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym9yZGVyOiBzb2xpZCB2YXIoLS1jZWxsQmcpIDAuNHJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRnYXA6IDEwcHg7XFxufVxcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuYTp2aXNpdGVkIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbmEgaW1nIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuLm9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuICogTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4gKi9cblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgUHViU3ViID0ge307XG5cbiAgICBpZiAocm9vdC5QdWJTdWIpIHtcbiAgICAgICAgUHViU3ViID0gcm9vdC5QdWJTdWI7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlB1YlN1YiBhbHJlYWR5IGxvYWRlZCwgdXNpbmcgZXhpc3RpbmcgdmVyc2lvblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcbiAgICAgICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIH1cbiAgICAvLyBDb21tb25KUyBhbmQgTm9kZS5qcyBtb2R1bGUgc3VwcG9ydFxuICAgIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICBpZiAobW9kdWxlICE9PSB1bmRlZmluZWQgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFB1YlN1YjsgLy8gTm9kZS5qcyBzcGVjaWZpYyBgbW9kdWxlLmV4cG9ydHNgXG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0cy5QdWJTdWIgPSBQdWJTdWI7IC8vIENvbW1vbkpTIG1vZHVsZSAxLjEuMSBzcGVjXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IFB1YlN1YjsgLy8gQ29tbW9uSlNcbiAgICB9XG4gICAgLy8gQU1EIHN1cHBvcnRcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xuICAgIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHsgcmV0dXJuIFB1YlN1YjsgfSk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW5kZWYgKi9cbiAgICB9XG5cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbWVzc2FnZXMgPSB7fSxcbiAgICAgICAgbGFzdFVpZCA9IC0xLFxuICAgICAgICBBTExfU1VCU0NSSUJJTkdfTVNHID0gJyonO1xuXG4gICAgZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuICAgICAgICB2YXIga2V5O1xuXG4gICAgICAgIGZvciAoa2V5IGluIG9iail7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkgKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG4gICAgICogQGFsaWFzIHRocm93RXhjZXB0aW9uXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG4gICAgICovXG4gICAgZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG4gICAgICAgICAgICB0aHJvdyBleDtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgICAgICB9IGNhdGNoKCBleCApe1xuICAgICAgICAgICAgc2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICBzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgdmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuICAgICAgICAgICAgcztcblxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtYXRjaGVkTWVzc2FnZSApICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChzIGluIHN1YnNjcmliZXJzKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHN1YnNjcmliZXJzLCBzKSl7XG4gICAgICAgICAgICAgICAgY2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG4gICAgICAgICAgICB2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICAgICAgLy8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcbiAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG4gICAgICAgICAgICB3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG4gICAgICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuICAgICAgICAgICAgICAgIGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBBTExfU1VCU0NSSUJJTkdfTVNHLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvciggbWVzc2FnZSApIHtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IEJvb2xlYW4oT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcbiAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKSB8fCBoYXNEaXJlY3RTdWJzY3JpYmVyc0ZvcihBTExfU1VCU0NSSUJJTkdfTVNHKSxcbiAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG4gICAgICAgIHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgdG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcbiAgICAgICAgICAgIGZvdW5kID0gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IodG9waWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICB2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcbiAgICAgICAgICAgIGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cbiAgICAgICAgaWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICggc3luYyA9PT0gdHJ1ZSApe1xuICAgICAgICAgICAgZGVsaXZlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFB1Ymxpc2hlcyB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcbiAgICAgKiBAcGFyYW0ge30gZGF0YSBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG4gICAgICogQHJldHVybiB7IEJvb2xlYW4gfVxuICAgICAqL1xuICAgIFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHB1Ymxpc2hTeW5jXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuICAgICAgICByZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmIHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZVxuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG4gICAgICogQHBhcmFtIHsgRnVuY3Rpb24gfSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcbiAgICAgKiBAcmV0dXJuIHsgU3RyaW5nIH1cbiAgICAgKi9cbiAgICBQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgaWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBtZXNzYWdlID0gKHR5cGVvZiBtZXNzYWdlID09PSAnc3ltYm9sJykgPyBtZXNzYWdlLnRvU3RyaW5nKCkgOiBtZXNzYWdlO1xuXG4gICAgICAgIC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG4gICAgICAgIGlmICggIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG1lc3NhZ2UgKSApe1xuICAgICAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuICAgICAgICAvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG4gICAgICAgIHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuICAgICAgICBtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuXG4gICAgICAgIC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfTtcblxuICAgIFB1YlN1Yi5zdWJzY3JpYmVBbGwgPSBmdW5jdGlvbiggZnVuYyApe1xuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZShBTExfU1VCU0NSSUJJTkdfTVNHLCBmdW5jKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZSBvbmNlXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFB1YlN1YiB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZU9uY2UgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuICAgICAgICB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy8gYmVmb3JlIGZ1bmMgYXBwbHksIHVuc3Vic2NyaWJlIG1lc3NhZ2VcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSggdG9rZW4gKTtcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFB1YlN1YjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG4gICAgICAgIG1lc3NhZ2VzID0ge307XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjbGVhckFsbFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgaW50IH1cbiAgICAgKi9cbiAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcyl7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2VzLCBtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcbiAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZXNbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgQ291bnQgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGNvdW50U3Vic2NyaXB0aW9uc1xuICAgICAqIEByZXR1cm4geyBBcnJheSB9XG4gICAgKi9cbiAgICBQdWJTdWIuY291bnRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY291bnRTdWJzY3JpcHRpb25zKHRvcGljKXtcbiAgICAgICAgdmFyIG07XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAobSBpbiBtZXNzYWdlcykge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGZvciAodG9rZW4gaW4gbWVzc2FnZXNbbV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG5cblxuICAgIC8qKlxuICAgICAgIEdldHMgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIGdldFN1YnNjcmlwdGlvbnNcbiAgICAqL1xuICAgIFB1YlN1Yi5nZXRTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gZ2V0U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICB2YXIgbGlzdCA9IFtdO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKG0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHN1YnNjcmlwdGlvbnNcbiAgICAgKlxuICAgICAqIC0gV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cbiAgICAgKlxuXHQgKiAtIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcbiAgICAgKiBAZnVuY3Rpb25cbiAgICAgKiBAcHVibGljXG4gICAgICogQGFsaWFzIHN1YnNjcmliZU9uY2VcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfCBGdW5jdGlvbiB9IHZhbHVlIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb21cbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuICAgICAqIHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcbiAgICAgKiBAZXhhbXBsZSAvLyBVbnN1YnNjcmliaW5nIGZyb20gYSB0b3BpY1xuICAgICAqIFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuICAgICAqL1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgdmFyIGRlc2NlbmRhbnRUb3BpY0V4aXN0cyA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gICAgICAgICAgICAgICAgdmFyIG07XG4gICAgICAgICAgICAgICAgZm9yICggbSBpbiBtZXNzYWdlcyApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCApe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYSBkZXNjZW5kYW50IG9mIHRoZSB0b3BpYyBleGlzdHM6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgdmFsdWUpIHx8IGRlc2NlbmRhbnRUb3BpY0V4aXN0cyh2YWx1ZSkgKSxcbiAgICAgICAgICAgIGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuICAgICAgICAgICAgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlLFxuICAgICAgICAgICAgbSwgbWVzc2FnZSwgdDtcblxuICAgICAgICBpZiAoaXNUb3BpYyl7XG4gICAgICAgICAgICBQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zKHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgIGlmICggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbSApICl7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG4gICAgICAgICAgICAgICAgaWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICggdCBpbiBtZXNzYWdlICl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1lc3NhZ2UsIHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt0XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufSkpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGljb24gZnJvbSBcIi4vaW1ncy9naXRodWItbWFyay13aGl0ZS5wbmdcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlICovXG5jb25zdCBwbGF5ZXIxQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjFCb2FyZENvbnRhaW5lclwiKTtcbmNvbnN0IHBsYXllcjJCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxheWVyMkJvYXJkQ29udGFpbmVyXCIpO1xuY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvYXJkQ29udGFpbmVyXCIpO1xuY29uc3QgbW9kYWxCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWxCb2FyZFwiKTtcbmNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIik7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9vdGVyIGFcIik7XG5cbmNvbnN0IGdpdGh1Ymljb24gPSBuZXcgSW1hZ2UoKTtcbmdpdGh1Ymljb24uc3JjID0gaWNvbjtcbmZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJpY29uKTtcblxuY29uc3QgRE9NY29udHJvbGxlciA9ICgpID0+IHtcblx0Y29uc3QgcmVuZGVyR2FtZU92ZXIgPSAod2lubmVyID0gXCJib2JcIikgPT4ge1xuXHRcdGNvbnN0IGdhbWVPdmVyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZU92ZXJcIik7XG5cdFx0Y29uc3Qgd2lubmVyVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2lubmVyVGV4dFwiKTtcblxuXHRcdGlmIChnYW1lT3Zlck1lbnUuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcblx0XHRcdGdhbWVPdmVyTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0d2lubmVyVGV4dC50ZXh0Q29udGVudCA9IGAke3dpbm5lcn0gd2lucyFgO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRnYW1lT3Zlck1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH1cblx0fTtcblx0Y29uc3QgcmVuZGVyU2hpcFBsYWNlbWVudCA9ICgpID0+IHtcblx0XHRjb25zdCBtb2RlbENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhY2VTaGlwc0NvbnRhaW5lclwiKTtcblx0XHRjb25zdCBzaGlwQ29udGFpbmVycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImNlbGxDb250YWluZXJcIikpO1xuXG5cdFx0Y29uc29sZS5sb2coc2hpcENvbnRhaW5lcnMpO1xuXG5cdFx0aWYgKG1vZGVsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRtb2RlbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblx0XHRcdHBsYXllcjFCb2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRwbGF5ZXIyQm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0Ym9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtb2RlbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRwbGF5ZXIxQm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0cGxheWVyMkJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRcdGJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyQm9hcmRzID0gKHBsYXllckJvYXJkLCBwbGF5ZXJObykgPT4ge1xuXHRcdGlmIChwbGF5ZXJObyA9PT0gMSkge1xuXHRcdFx0cGxheWVyMUJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYXllck5vID09PSAyKSB7XG5cdFx0XHRwbGF5ZXIyQm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR9XG5cblx0XHRpZiAocGxheWVyTm8gPT09IDMpIHtcblx0XHRcdG1vZGFsQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuXHRcdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDZWxsXCIpO1xuXHRcdFx0XHRjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmQtWFwiLCBqKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkLVlcIiwgaSk7XG5cblx0XHRcdFx0aWYgKHBsYXllckJvYXJkW2pdW2ldLnRha2VuICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocGxheWVyQm9hcmRbal1baV0uc3RhdHVzID09PSBcIm1pc3NcIikge1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocGxheWVyQm9hcmRbal1baV0uc3RhdHVzID09PSBcImhpdFwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBsYXllck5vID09PSAxKSB7XG5cdFx0XHRcdFx0cGxheWVyMUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBsYXllck5vID09PSAyKSB7XG5cdFx0XHRcdFx0cGxheWVyMkJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBsYXllck5vID09PSAzKSB7XG5cdFx0XHRcdFx0bW9kYWxCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhZGRTZWxlY3RlZCA9IChzaGlwVG9QbGFjZSkgPT4ge1xuXHRcdGNvbnN0IGFsbENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NlbGxDb250YWluZXJcIik7XG5cdFx0YWxsQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIlwiO1xuXHRcdH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdHNoaXBUb1BsYWNlLnN0eWxlLmJvcmRlciA9IFwiYmx1ZSBzb2xpZFwiO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGJpbmRDbGljayhoYW5kbGVyKSB7XG5cdFx0cm9vdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRoYW5kbGVyKGV2ZW50KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGJpbmRDbGljayxcblx0XHRyZW5kZXJCb2FyZHMsXG5cdFx0YWRkU2VsZWN0ZWQsXG5cdFx0cmVuZGVyU2hpcFBsYWNlbWVudCxcblx0XHRyZW5kZXJHYW1lT3Zlcixcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTWNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuXHRsZXQgX3NlbGVjdGVkU2hpcCA9IG51bGw7XG5cblx0Y29uc3Qgc2V0U2VsZWN0ZWRTaGlwID0gKHNoaXBBcnJMb2MpID0+IHtcblx0XHRfc2VsZWN0ZWRTaGlwID0gc2hpcEFyckxvYztcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZFNoaXAgPSAoKSA9PiBfc2VsZWN0ZWRTaGlwO1xuXG5cdGNvbnN0IG5ld0dhbWUgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuXHRcdC8vIHBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIGNvbXB1dGVyIGJvYXJkXG5cdFx0cGxheWVyMi5fcGxheWVyU2hpcHMuZm9yRWFjaCgocykgPT4ge1xuXHRcdFx0bGV0IHggPSAwO1xuXHRcdFx0bGV0IHkgPSAwO1xuXHRcdFx0Y29uc3Qgb3JpZW4gPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcblx0XHRcdHMuc2V0T3JpZW50YXRpb24ob3JpZW4pO1xuXHRcdFx0aWYgKHMuZ2V0T3JpZW50YXRpb24oKSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gcy5nZXRMZW5ndGgoKSkpO1xuXHRcdFx0XHR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0eCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHMuZ2V0TGVuZ3RoKCkpKTtcblx0XHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRcdH1cblx0XHRcdHdoaWxlICghcGxheWVyMi5fcGxheWVyQm9hcmQuZ2V0VmFsaWRTcGFjZShzLCB4LCB5KSkge1xuXHRcdFx0XHRpZiAocy5nZXRPcmllbnRhdGlvbigpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHMuZ2V0TGVuZ3RoKCkpKTtcblx0XHRcdFx0XHR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzLmdldExlbmd0aCgpKSk7XG5cdFx0XHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cGxheWVyMi5fcGxheWVyQm9hcmQucGxhY2VTaGlwKHMsIHgsIHkpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblx0XHQvLyB3aGlsZSBhbGwgc3VuayBvbiBib3RoIGJvYXJkcyBpcyBub3QgdHJ1ZVxuXHRcdC8vIHBsYXllciAxIGNob29zZXMgYXR0YWNrXG5cdFx0Ly8gY29tcHV0ZXIgY2hvb3NlcyBhdHRhY2tcblx0fTtcblxuXHRyZXR1cm4geyBuZXdHYW1lLCBzZXRTZWxlY3RlZFNoaXAsIGdldFNlbGVjdGVkU2hpcCB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG5cdGNvbnN0IF9ib2FyZCA9IFtdO1xuXHRjb25zdCBfcGxhY2VkU2hpcHMgPSBbXTtcblxuXHQoZnVuY3Rpb24gc2V0dXBCb2FyZCgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcblx0XHRcdF9ib2FyZFtpXSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG5cdFx0XHRcdF9ib2FyZFtpXVtqXSA9IHtcblx0XHRcdFx0XHRsb2NhdGlvbjogW2ksIGpdLFxuXHRcdFx0XHRcdHRha2VuOiBudWxsLFxuXHRcdFx0XHRcdHN0YXR1czogbnVsbCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cblx0Y29uc3QgZ2V0VmFsaWRTcGFjZSA9IChzaGlwLCB4LCB5KSA9PiB7XG5cdFx0aWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSkge1xuXHRcdFx0aWYgKHkgKyBzaGlwLmdldExlbmd0aCgpID49IDExKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSB5IC0gMTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpICsgMTsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChpID49IDAgJiYgaSA8PSA5KSB7XG5cdFx0XHRcdFx0aWYgKF9ib2FyZFt4XVtpXSAhPT0gdW5kZWZpbmVkICYmIF9ib2FyZFt4XVtpXS50YWtlbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoeCArIDEgPD0gOSkge1xuXHRcdFx0XHRcdFx0aWYgKF9ib2FyZFt4ICsgMV1baV0gIT09IHVuZGVmaW5lZCAmJiBfYm9hcmRbeCArIDFdW2ldLnRha2VuICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHggLSAxID49IDApIHtcblx0XHRcdFx0XHRcdGlmIChfYm9hcmRbeCAtIDFdW2ldICE9PSB1bmRlZmluZWQgJiYgX2JvYXJkW3ggLSAxXVtpXS50YWtlbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh4ICsgc2hpcC5nZXRMZW5ndGgoKSA+PSAxMSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0geCAtIDE7IGkgPCB4ICsgc2hpcC5nZXRMZW5ndGgoKSArIDE7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoaSA+PSAwICYmIGkgPD0gOSkge1xuXHRcdFx0XHRcdGlmIChfYm9hcmRbaV1beV0gIT09IHVuZGVmaW5lZCAmJiBfYm9hcmRbaV1beV0udGFrZW4gIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKF9ib2FyZFtpXVt5ICsgMV0gIT09IHVuZGVmaW5lZCAmJiBfYm9hcmRbaV1beSArIDFdLnRha2VuICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChfYm9hcmRbaV1beSAtIDFdICE9PSB1bmRlZmluZWQgJiYgX2JvYXJkW2ldW3kgLSAxXS50YWtlbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRjb25zdCBnZXRCb2FyZCA9ICgpID0+IF9ib2FyZDtcblxuXHRjb25zdCBnZXRTaGlwID0gKHgsIHkpID0+IHtcblx0XHRsZXQgaW5kZXg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBfcGxhY2VkU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGlmIChfcGxhY2VkU2hpcHNbaV0uZ2V0TmFtZSgpID09PSBfYm9hcmRbeF1beV0udGFrZW4pIHtcblx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0Y29uc3QgZ2V0UGxhY2VkU2hpcHMgPSAoKSA9PiBfcGxhY2VkU2hpcHM7XG5cblx0Y29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcblx0XHRpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcblx0XHRcdFx0X2JvYXJkW3hdW2ldLnRha2VuID0gc2hpcC5nZXROYW1lKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuXHRcdFx0XHRfYm9hcmRbaV1beV0udGFrZW4gPSBzaGlwLmdldE5hbWUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X3BsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJib2FyZCBVcGRhdGVkXCIpO1xuXHR9O1xuXG5cdGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuXHRcdGNvbnN0IHNoaXBBdExvYyA9IF9wbGFjZWRTaGlwc1tnZXRTaGlwKHgsIHkpXTtcblx0XHRpZiAoc2hpcEF0TG9jICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdF9ib2FyZFt4XVt5XS5zdGF0dXMgPSBcImhpdFwiO1xuXHRcdFx0c2hpcEF0TG9jLnNldEhpdHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2JvYXJkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBfcGxhY2VkU2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQuZ2V0U3VuaygpKTtcblxuXHRyZXR1cm4ge1xuXHRcdHBsYWNlU2hpcCxcblx0XHRnZXRCb2FyZCxcblx0XHRyZWNlaXZlQXR0YWNrLFxuXHRcdGdldFBsYWNlZFNoaXBzLFxuXHRcdGFsbFNoaXBzU3Vuayxcblx0XHRnZXRWYWxpZFNwYWNlLFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgcGxheWVyID0gKHBOYW1lKSA9PiB7XG5cdGNvbnN0IF9uYW1lID0gcE5hbWU7XG5cdGNvbnN0IF9zaG90c1Rha2VuID0gW107XG5cdGNvbnN0IF9wbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXHRjb25zdCBnZXRQbGF5ZXJOYW1lID0gKCkgPT4gX25hbWU7XG5cdGNvbnN0IF9wbGF5ZXJTaGlwcyA9IFtcblx0XHRzaGlwKDUsIFwiQ2FycmllclwiKSxcblx0XHRzaGlwKDQsIFwiQmF0dGxlc2hpcFwiKSxcblx0XHRzaGlwKDMsIFwiRGVzdHJveWVyXCIpLFxuXHRcdHNoaXAoMywgXCJTdWJNYXJpbmVcIiksXG5cdFx0c2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpLFxuXHRdO1xuXG5cdGNvbnN0IGNoZWNrQWxyZWFkeVBpY2tlZCA9ICh4LCB5KSA9PiB7XG5cdFx0SlNPTi5zdHJpbmdpZnkoX3Nob3RzVGFrZW4pO1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShfc2hvdHNUYWtlbikuaW5jbHVkZXMoW3gsIHldKTtcblx0fTtcblxuXHRjb25zdCBsYXVuY2hBdHRhY2sgPSAoZW5lbXlCb2FyZCwgeCwgeSkgPT4ge1xuXHRcdGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcblx0XHRfc2hvdHNUYWtlbi5wdXNoKFt4LCB5XSk7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJib2FyZCBVcGRhdGVkXCIpO1xuXHR9O1xuXG5cdGNvbnN0IGdldFJhbmRvbUNvb3JkID0gKCkgPT4ge1xuXHRcdGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdHdoaWxlIChjaGVja0FscmVhZHlQaWNrZWQoeCwgeSkpIHtcblx0XHRcdHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdFx0XHR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdH1cblxuXHRcdHJldHVybiBbeCwgeV07XG5cdH07XG5cblx0Y29uc3QgZ2V0UHJldk1vdmVzID0gKCkgPT4gX3Nob3RzVGFrZW47XG5cdHJldHVybiB7XG5cdFx0Z2V0UHJldk1vdmVzLFxuXHRcdGNoZWNrQWxyZWFkeVBpY2tlZCxcblx0XHRnZXRQbGF5ZXJOYW1lLFxuXHRcdF9wbGF5ZXJCb2FyZCxcblx0XHRsYXVuY2hBdHRhY2ssXG5cdFx0Z2V0UmFuZG9tQ29vcmQsXG5cdFx0X3BsYXllclNoaXBzLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUsIHZlcnRpY2FsID0gZmFsc2UpIHtcblx0Y29uc3QgX2xlbmd0aCA9IHNoaXBMZW5ndGg7XG5cdGxldCBfaGl0cyA9IDA7XG5cdGxldCBfaXNTdW5rID0gZmFsc2U7XG5cdGNvbnN0IF9uYW1lID0gc2hpcE5hbWU7XG5cdGxldCBfb3JpZW50YXRpb24gPSB2ZXJ0aWNhbDtcblxuXHRjb25zdCBnZXRTdW5rID0gKCkgPT4gX2lzU3Vuaztcblx0Y29uc3QgZ2V0SGl0cyA9ICgpID0+IF9oaXRzO1xuXHRjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBfbGVuZ3RoO1xuXHRjb25zdCBnZXROYW1lID0gKCkgPT4gX25hbWU7XG5cdGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4gX29yaWVudGF0aW9uO1xuXG5cdGNvbnN0IGNoZWNrU3VuayA9ICgpID0+IHtcblx0XHRpZiAoX2hpdHMgPT09IF9sZW5ndGgpIHtcblx0XHRcdF9pc1N1bmsgPSB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBzZXRIaXRzID0gKCkgPT4ge1xuXHRcdGlmIChnZXRIaXRzKCkgPCBfbGVuZ3RoKSB7XG5cdFx0XHRfaGl0cyArPSAxO1xuXHRcdFx0Y2hlY2tTdW5rKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNldE9yaWVudGF0aW9uID0gKG9yaWVudCkgPT4ge1xuXHRcdF9vcmllbnRhdGlvbiA9IG9yaWVudDtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldE5hbWUsXG5cdFx0Z2V0TGVuZ3RoLFxuXHRcdHNldEhpdHMsXG5cdFx0Z2V0SGl0cyxcblx0XHRnZXRTdW5rLFxuXHRcdGdldE9yaWVudGF0aW9uLFxuXHRcdHNldE9yaWVudGF0aW9uLFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBQdWJTdWIsIHsgcHVibGlzaCB9IGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCBnYW1lQ29udHJvbGxlciBmcm9tIFwiLi9nYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IERPTWNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NY29udHJvbGxlclwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKCk7XG5jb25zdCB2aWV3ID0gRE9NY29udHJvbGxlcigpO1xuXG5sZXQgcGxheWVyMSA9IHBsYXllcihcIlBsYXllclwiKTtcbmxldCBjb21wdXRlciA9IHBsYXllcihcIkNvbXB1dGVyXCIpO1xuXG5nYW1lLm5ld0dhbWUocGxheWVyMSwgY29tcHV0ZXIpO1xuXG52aWV3LnJlbmRlckJvYXJkcyhwbGF5ZXIxLl9wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCAzKTtcbnZpZXcucmVuZGVyR2FtZU92ZXIoKTtcbmNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG5cdGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcblxuXHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInZlcnRpY2FsUGxhY2VtZW50XCIpIHtcblx0XHRpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm9uXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xuXHRcdH1cblx0fVxuXG5cdGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT09IFwiYm9hcmRDZWxsXCIpIHtcblx0XHRjb25zdCBwbGF5ZXJYID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkLVhcIikpO1xuXHRcdGNvbnN0IHBsYXllclkgPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmQtWVwiKSk7XG5cdFx0aWYgKFxuXHRcdFx0dGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwicGxheWVyMkJvYXJkQ29udGFpbmVyXCIgJiZcblx0XHRcdHBsYXllcjEuY2hlY2tBbHJlYWR5UGlja2VkKHBsYXllclgsIHBsYXllclkpID09PSBmYWxzZVxuXHRcdCkge1xuXHRcdFx0cGxheWVyMS5sYXVuY2hBdHRhY2soY29tcHV0ZXIuX3BsYXllckJvYXJkLCBwbGF5ZXJYLCBwbGF5ZXJZKTtcblxuXHRcdFx0Y29uc3QgbmV4dE1vdmUgPSBjb21wdXRlci5nZXRSYW5kb21Db29yZCgpO1xuXHRcdFx0Y29tcHV0ZXIubGF1bmNoQXR0YWNrKHBsYXllcjEuX3BsYXllckJvYXJkLCBuZXh0TW92ZVswXSwgbmV4dE1vdmVbMV0pO1xuXG5cdFx0XHRpZiAocGxheWVyMS5fcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcblx0XHRcdFx0dmlldy5yZW5kZXJHYW1lT3Zlcihjb21wdXRlci5nZXRQbGF5ZXJOYW1lKCkpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wdXRlci5fcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcblx0XHRcdFx0dmlldy5yZW5kZXJHYW1lT3ZlcihwbGF5ZXIxLmdldFBsYXllck5hbWUoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcImNlbGxDb250YWluZXJcIikge1xuXHRcdHZpZXcuYWRkU2VsZWN0ZWQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuXHRcdGdhbWUuc2V0U2VsZWN0ZWRTaGlwKHRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInNoaXBJZFwiKSk7XG5cdH1cblxuXHRpZiAodGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibW9kYWxCb2FyZFwiKSB7XG5cdFx0Y29uc3QgdmVydGljYWxUaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0aWNhbFBsYWNlbWVudFwiKTtcblxuXHRcdGlmIChnYW1lLmdldFNlbGVjdGVkU2hpcCgpICE9PSBudWxsKSB7XG5cdFx0XHRjb25zdCB4ID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkLXhcIikpO1xuXHRcdFx0Y29uc3QgeSA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZC15XCIpKTtcblxuXHRcdFx0Y29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW3NoaXBpZD1cIiR7Z2FtZS5nZXRTZWxlY3RlZFNoaXAoKX1cIl1gXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAodmVydGljYWxUaWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09PSBcIm9uXCIpIHtcblx0XHRcdFx0cGxheWVyMS5fcGxheWVyU2hpcHNbZ2FtZS5nZXRTZWxlY3RlZFNoaXAoKV0uc2V0T3JpZW50YXRpb24odHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwbGF5ZXIxLl9wbGF5ZXJTaGlwc1tnYW1lLmdldFNlbGVjdGVkU2hpcCgpXS5zZXRPcmllbnRhdGlvbihmYWxzZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0cGxheWVyMS5fcGxheWVyQm9hcmQuZ2V0VmFsaWRTcGFjZShcblx0XHRcdFx0XHRwbGF5ZXIxLl9wbGF5ZXJTaGlwc1tnYW1lLmdldFNlbGVjdGVkU2hpcCgpXSxcblx0XHRcdFx0XHR4LFxuXHRcdFx0XHRcdHlcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNoaXBFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXHRcdFx0XHRwbGF5ZXIxLl9wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG5cdFx0XHRcdFx0cGxheWVyMS5fcGxheWVyU2hpcHNbZ2FtZS5nZXRTZWxlY3RlZFNoaXAoKV0sXG5cdFx0XHRcdFx0eCxcblx0XHRcdFx0XHR5XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHBsYXllcjEuX3BsYXllclNoaXBzW2dhbWUuZ2V0U2VsZWN0ZWRTaGlwKCldID0gbnVsbDtcblx0XHRcdFx0Z2FtZS5zZXRTZWxlY3RlZFNoaXAobnVsbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwbGF5ZXIxLl9wbGF5ZXJTaGlwcy5ldmVyeSgodmFsKSA9PiB2YWwgPT09IHBsYXllcjEuX3BsYXllclNoaXBzWzBdKSkge1xuXHRcdFx0XHR2aWV3LnJlbmRlclNoaXBQbGFjZW1lbnQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInJlc3RhcnRCdG5cIikge1xuXHRcdHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXJcIik7XG5cdFx0Y29tcHV0ZXIgPSBwbGF5ZXIoXCJDb21wdXRlclwiKTtcblx0XHRjb25zb2xlLmxvZyhwbGF5ZXIxLl9wbGF5ZXJTaGlwcyk7XG5cdFx0dmlldy5yZW5kZXJHYW1lT3ZlcigpO1xuXHRcdGdhbWUubmV3R2FtZShwbGF5ZXIxLCBjb21wdXRlcik7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJib2FyZCBVcGRhdGVkXCIpO1xuXHRcdHZpZXcucmVuZGVyU2hpcFBsYWNlbWVudCgpO1xuXHR9XG59O1xuXG52aWV3LmJpbmRDbGljayhoYW5kbGVDbGljayk7XG5QdWJTdWIuc3Vic2NyaWJlKFwiYm9hcmQgVXBkYXRlZFwiLCAoKSA9PiB7XG5cdHZpZXcucmVuZGVyQm9hcmRzKHBsYXllcjEuX3BsYXllckJvYXJkLmdldEJvYXJkKCksIDEpO1xuXHR2aWV3LnJlbmRlckJvYXJkcyhjb21wdXRlci5fcGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgMik7XG5cdHZpZXcucmVuZGVyQm9hcmRzKHBsYXllcjEuX3BsYXllckJvYXJkLmdldEJvYXJkKCksIDMpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=