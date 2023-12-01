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
		const shipContainers = Array.from(
			document.getElementsByClassName("cellContainer")
		);

		shipContainers.forEach((element) => {
			element.style.visibility = "visible";
			element.style.removeProperty("border");
		});

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

	if (target.parentElement.getAttribute("class") === "cellContainer") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCO0FBQ3VCO0FBQ0U7QUFDRjtBQUNkOztBQUU5QixhQUFhLDJEQUFjO0FBQzNCLGFBQWEsMERBQWE7O0FBRTFCLGNBQWMsbURBQU07QUFDcEIsZUFBZSxtREFBTTs7QUFFckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTOztBQUVsQjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksbURBQU07QUFDbEIsYUFBYSxtREFBTTtBQUNuQjtBQUNBO0FBQ0EsRUFBRSx3REFBYztBQUNoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwREFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL0RPTWNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbEAwOzEmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcblxcdC0tYmdEYXJrOiByZ2IoMjAsIDIwLCAzNik7XFxuXFx0LS1iZ0xpZ2h0OiByZ2IoNDUsIDQ1LCA3MSk7XFxuXFx0LS1jZWxsQmc6IHJnYigxMTIsIDExMywgMTczKTtcXG5cXHQtLXVpQmdEYXJrOiByZ2IoMzAsIDMwLCA0OCk7XFxuXFx0LS11aUJnTGlnaHQ6IHJnYig0NSwgNDUsIDcxKTtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbioge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5oMSxcXG5oMiB7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5LFxcbmh0bWwsXFxuI21haW5Db250YWluZXIge1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXJnaW46IDBweDtcXG5cXHRwYWRkaW5nOiAwcHg7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHZhcigtLWJnRGFyayksXFxuXFx0XFx0dmFyKC0tYmdEYXJrKSxcXG5cXHRcXHR2YXIoLS1iZ0RhcmspLFxcblxcdFxcdHZhcigtLWJnTGlnaHQpXFxuXFx0KTtcXG59XFxuXFxuI2JvYXJkQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdMaWdodCk7XFxuXFx0cGFkZGluZzogMHB4IDUwcHggNTBweCA1MHB4O1xcbn1cXG4jdGl0bGVDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDQ0MHB4O1xcblxcdGhlaWdodDogNTBweDtcXG59XFxuI2dhbWVDb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiA1MHB4O1xcbn1cXG4jbWFpbkNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuI3BsYXllcjFCb2FyZENvbnRhaW5lcixcXG4jcGxheWVyMkJvYXJkQ29udGFpbmVyLFxcbiNtb2RhbEJvYXJkIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiA1MDBweDtcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuI3BsYXllcjFCb2FyZENvbnRhaW5lcixcXG4jcGxheWVyMkJvYXJkQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmRDZWxsIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0aGVpZ2h0OiA1MHB4O1xcblxcdHdpZHRoOiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGxCZyk7XFxuXFx0Ym9yZGVyOiByZ2IoNjEsIDYxLCA2MSkgc29saWQgMnB4O1xcbn1cXG5cXG4jZ2FtZU92ZXIge1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRwb3NpdGlvbjogZml4ZWQ7XFxuXFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR0b3A6IDUwJTtcXG5cXHRsZWZ0OiA1MCU7XFxuXFx0d2lkdGg6IDI1JTtcXG5cXHRoZWlnaHQ6IDI1JTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnRGFyayk7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuI2dhbWVPdmVySW5uZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGdhcDogMnJlbTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnTGlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRoZWlnaHQ6IDg1JTtcXG59XFxuI3VpQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA5MCU7XFxuXFx0Z2FwOiA1MHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXVpQmdMaWdodCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogN3B4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcbiNwbGFjZVNoaXBzQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnRGFyayk7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jZWxsQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHdpZHRoOiBtaW4tY29udGVudDtcXG5cXHRib3JkZXI6IHZhcigtLXVpQmdMaWdodCkgc29saWQ7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuXFxuLmNlbGxDb250YWluZXI6aG92ZXIge1xcblxcdHRyYW5zaXRpb246IDAuMjVzO1xcblxcdHNjYWxlOiAxLjE7XFxufVxcbiNzaGlwQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiA3MDBweDtcXG5cXHR3aWR0aDogMzAwcHg7XFxuXFx0Z2FwOiA1MHB4O1xcblxcdHBhZGRpbmc6IDFyZW07XFxuXFx0Ym9yZGVyOiBzb2xpZCB2YXIoLS1jZWxsQmcpIDAuNHJlbTtcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG5cXHRnYXA6IDEwcHg7XFxufVxcbmhlYWRlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcbmEge1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMTBweDtcXG59XFxuYTp2aXNpdGVkIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxufVxcbmEgaW1nIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXSB7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG59XFxuXFxuLm9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODIsIDgyLCA4Mik7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQiw0QkFBNEI7Q0FDNUIsMkJBQTJCO0NBQzNCLDRCQUE0QjtDQUM1QixZQUFZO0FBQ2I7QUFDQTtDQUNDLHNCQUFzQjtDQUN0QixpQ0FBaUM7QUFDbEM7O0FBRUE7O0NBRUMsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTs7O0NBR0MsV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEI7Ozs7O0VBS0M7QUFDRjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGtDQUFrQztDQUNsQywyQkFBMkI7QUFDNUI7QUFDQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixZQUFZO0FBQ2I7QUFDQTtDQUNDLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7QUFDQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4QjtBQUNBOzs7Q0FHQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0FBQ2hCOztBQUVBOztDQUVDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osV0FBVztDQUNYLCtCQUErQjtDQUMvQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTs7Q0FFZixzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsV0FBVztDQUNYLGdDQUFnQztDQUNoQyxpQ0FBaUM7Q0FDakMsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixTQUFTO0NBQ1QsdUJBQXVCO0NBQ3ZCLGtDQUFrQztDQUNsQyxrQkFBa0I7Q0FDbEIsV0FBVztBQUNaO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxTQUFTO0NBQ1Qsa0NBQWtDO0NBQ2xDLGtCQUFrQjtDQUNsQixhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsaUNBQWlDO0NBQ2pDLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsVUFBVTtBQUNYO0FBQ0E7Q0FDQyxhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLFlBQVk7Q0FDWixTQUFTO0NBQ1QsYUFBYTtDQUNiLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsU0FBUztBQUNWO0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCO0FBQ0E7Q0FDQyxxQkFBcUI7Q0FDckIsYUFBYTtDQUNiLFNBQVM7QUFDVjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyxZQUFZO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWxAMDsxJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbjpyb290IHtcXG5cXHQtLWJnRGFyazogcmdiKDIwLCAyMCwgMzYpO1xcblxcdC0tYmdMaWdodDogcmdiKDQ1LCA0NSwgNzEpO1xcblxcdC0tY2VsbEJnOiByZ2IoMTEyLCAxMTMsIDE3Myk7XFxuXFx0LS11aUJnRGFyazogcmdiKDMwLCAzMCwgNDgpO1xcblxcdC0tdWlCZ0xpZ2h0OiByZ2IoNDUsIDQ1LCA3MSk7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuaDEsXFxuaDIge1xcblxcdG1hcmdpbjogMHB4O1xcblxcdHBhZGRpbmc6IDBweDtcXG59XFxuXFxuYm9keSxcXG5odG1sLFxcbiNtYWluQ29udGFpbmVyIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0bWFyZ2luOiAwcHg7XFxuXFx0cGFkZGluZzogMHB4O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR2YXIoLS1iZ0RhcmspLFxcblxcdFxcdHZhcigtLWJnRGFyayksXFxuXFx0XFx0dmFyKC0tYmdEYXJrKSxcXG5cXHRcXHR2YXIoLS1iZ0xpZ2h0KVxcblxcdCk7XFxufVxcblxcbiNib2FyZENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnTGlnaHQpO1xcblxcdHBhZGRpbmc6IDBweCA1MHB4IDUwcHggNTBweDtcXG59XFxuI3RpdGxlQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Z2FwOiA0NDBweDtcXG5cXHRoZWlnaHQ6IDUwcHg7XFxufVxcbiNnYW1lQ29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogNTBweDtcXG59XFxuI21haW5Db250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiNwbGF5ZXIxQm9hcmRDb250YWluZXIsXFxuI3BsYXllcjJCb2FyZENvbnRhaW5lcixcXG4jbW9kYWxCb2FyZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogNTAwcHg7XFxuXFx0aGVpZ2h0OiA1MDBweDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbiNwbGF5ZXIxQm9hcmRDb250YWluZXIsXFxuI3BsYXllcjJCb2FyZENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkQ2VsbCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGhlaWdodDogNTBweDtcXG5cXHR3aWR0aDogNTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsQmcpO1xcblxcdGJvcmRlcjogcmdiKDYxLCA2MSwgNjEpIHNvbGlkIDJweDtcXG59XFxuXFxuI2dhbWVPdmVyIHtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0cG9zaXRpb246IGZpeGVkO1xcblxcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0dG9wOiA1MCU7XFxuXFx0bGVmdDogNTAlO1xcblxcdHdpZHRoOiAyNSU7XFxuXFx0aGVpZ2h0OiAyNSU7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlCZ0RhcmspO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcbiNnYW1lT3ZlcklubmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRnYXA6IDJyZW07XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlCZ0xpZ2h0KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0aGVpZ2h0OiA4NSU7XFxufVxcbiN1aUNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogOTAlO1xcblxcdGdhcDogNTBweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11aUJnTGlnaHQpO1xcblxcdGJvcmRlci1yYWRpdXM6IDdweDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG4jcGxhY2VTaGlwc0NvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdWlCZ0RhcmspO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uY2VsbENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHR3aWR0aDogbWluLWNvbnRlbnQ7XFxuXFx0Ym9yZGVyOiB2YXIoLS11aUJnTGlnaHQpIHNvbGlkO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dHJhbnNpdGlvbjogMC4yNXM7XFxufVxcblxcbi5jZWxsQ29udGFpbmVyOmhvdmVyIHtcXG5cXHR0cmFuc2l0aW9uOiAwLjI1cztcXG5cXHRzY2FsZTogMS4xO1xcbn1cXG4jc2hpcENvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRib3JkZXItcmFkaXVzOiA3cHg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogNzAwcHg7XFxuXFx0d2lkdGg6IDMwMHB4O1xcblxcdGdhcDogNTBweDtcXG5cXHRwYWRkaW5nOiAxcmVtO1xcblxcdGJvcmRlcjogc29saWQgdmFyKC0tY2VsbEJnKSAwLjRyZW07XFxufVxcblxcbmZvb3RlciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuXFx0Z2FwOiAxMHB4O1xcbn1cXG5oZWFkZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5hIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDEwcHg7XFxufVxcbmE6dmlzaXRlZCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcbn1cXG5hIGltZyB7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl0ge1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5vbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDgyLCA4MiwgODIpO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbiAqIExpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuICovXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIFB1YlN1YiA9IHt9O1xuXG4gICAgaWYgKHJvb3QuUHViU3ViKSB7XG4gICAgICAgIFB1YlN1YiA9IHJvb3QuUHViU3ViO1xuICAgICAgICBjb25zb2xlLndhcm4oXCJQdWJTdWIgYWxyZWFkeSBsb2FkZWQsIHVzaW5nIGV4aXN0aW5nIHZlcnNpb25cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG4gICAgLy8gQ29tbW9uSlMgYW5kIE5vZGUuanMgbW9kdWxlIHN1cHBvcnRcbiAgICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgaWYgKG1vZHVsZSAhPT0gdW5kZWZpbmVkICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgICAgICAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBQdWJTdWI7IC8vIE5vZGUuanMgc3BlY2lmaWMgYG1vZHVsZS5leHBvcnRzYFxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydHMuUHViU3ViID0gUHViU3ViOyAvLyBDb21tb25KUyBtb2R1bGUgMS4xLjEgc3BlY1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBQdWJTdWI7IC8vIENvbW1vbkpTXG4gICAgfVxuICAgIC8vIEFNRCBzdXBwb3J0XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBQdWJTdWI7IH0pO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVuZGVmICovXG4gICAgfVxuXG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG1lc3NhZ2VzID0ge30sXG4gICAgICAgIGxhc3RVaWQgPSAtMSxcbiAgICAgICAgQUxMX1NVQlNDUklCSU5HX01TRyA9ICcqJztcblxuICAgIGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcbiAgICAgICAgdmFyIGtleTtcblxuICAgICAgICBmb3IgKGtleSBpbiBvYmope1xuICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpICl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuICAgICAqIEBhbGlhcyB0aHJvd0V4Y2VwdGlvblxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuICAgICAgICAgICAgdGhyb3cgZXg7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcbiAgICAgICAgfSBjYXRjaCggZXggKXtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgc3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcbiAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcbiAgICAgICAgICAgIHM7XG5cbiAgICAgICAgaWYgKCAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKCBtZXNzYWdlcywgbWF0Y2hlZE1lc3NhZ2UgKSApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzdWJzY3JpYmVycywgcykpe1xuICAgICAgICAgICAgICAgIGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuICAgICAgICAgICAgdmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cbiAgICAgICAgICAgIC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG4gICAgICAgICAgICBkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuICAgICAgICAgICAgd2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuICAgICAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcbiAgICAgICAgICAgICAgICBkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgQUxMX1NVQlNDUklCSU5HX01TRywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoIG1lc3NhZ2UgKSB7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBCb29sZWFuKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG4gICAgICAgIHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuICAgICAgICAgICAgZm91bmQgPSBoYXNEaXJlY3RTdWJzY3JpYmVyc0Zvcih0b3BpYykgfHwgaGFzRGlyZWN0U3Vic2NyaWJlcnNGb3IoQUxMX1NVQlNDUklCSU5HX01TRyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuICAgICAgICB3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcbiAgICAgICAgICAgIHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuICAgICAgICAgICAgcG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG4gICAgICAgICAgICBmb3VuZCA9IGhhc0RpcmVjdFN1YnNjcmliZXJzRm9yKHRvcGljKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG4gICAgICAgIG1lc3NhZ2UgPSAodHlwZW9mIG1lc3NhZ2UgPT09ICdzeW1ib2wnKSA/IG1lc3NhZ2UudG9TdHJpbmcoKSA6IG1lc3NhZ2U7XG5cbiAgICAgICAgdmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG4gICAgICAgICAgICBoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG4gICAgICAgIGlmICggIWhhc1N1YnNjcmliZXJzICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIHN5bmMgPT09IHRydWUgKXtcbiAgICAgICAgICAgIGRlbGl2ZXIoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQdWJsaXNoZXMgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG4gICAgICogQHBhcmFtIHt9IGRhdGEgVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuICAgICAqIEByZXR1cm4geyBCb29sZWFuIH1cbiAgICAgKi9cbiAgICBQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG4gICAgICAgIHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHVibGlzaGVzIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBwdWJsaXNoU3luY1xuICAgICAqIEBwYXJhbSB7IFN0cmluZyB9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuICAgICAqIEBwYXJhbSB7fSBkYXRhIFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcbiAgICAgKiBAcmV0dXJuIHsgQm9vbGVhbiB9XG4gICAgICovXG4gICAgUHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcbiAgICAgICAgcmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZiB5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVcbiAgICAgKiBAcGFyYW0geyBTdHJpbmcgfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuICAgICAqIEBwYXJhbSB7IEZ1bmN0aW9uIH0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG4gICAgICogQHJldHVybiB7IFN0cmluZyB9XG4gICAgICovXG4gICAgUHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG4gICAgICAgIGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVzc2FnZSA9ICh0eXBlb2YgbWVzc2FnZSA9PT0gJ3N5bWJvbCcpID8gbWVzc2FnZS50b1N0cmluZygpIDogbWVzc2FnZTtcblxuICAgICAgICAvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuICAgICAgICBpZiAoICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoIG1lc3NhZ2VzLCBtZXNzYWdlICkgKXtcbiAgICAgICAgICAgIG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2VcbiAgICAgICAgLy8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuICAgICAgICB2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcbiAgICAgICAgbWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuICAgICAgICAvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICBQdWJTdWIuc3Vic2NyaWJlQWxsID0gZnVuY3Rpb24oIGZ1bmMgKXtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoQUxMX1NVQlNDUklCSU5HX01TRywgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2Ugb25jZVxuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIH0gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cbiAgICAgKiBAcGFyYW0geyBGdW5jdGlvbiB9IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuICAgICAqIEByZXR1cm4geyBQdWJTdWIgfVxuICAgICAqL1xuICAgIFB1YlN1Yi5zdWJzY3JpYmVPbmNlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcbiAgICAgICAgdmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8vIGJlZm9yZSBmdW5jIGFwcGx5LCB1bnN1YnNjcmliZSBtZXNzYWdlXG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoIHRva2VuICk7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQdWJTdWI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuICAgICAgICBtZXNzYWdlcyA9IHt9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuICAgICAqIEBmdW5jdGlvblxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAYWxpYXMgY2xlYXJBbGxTdWJzY3JpcHRpb25zXG4gICAgICogQHJldHVybiB7IGludCB9XG4gICAgICovXG4gICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpe1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlcywgbSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VzW21dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAgIENvdW50IHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBjb3VudFN1YnNjcmlwdGlvbnNcbiAgICAgKiBAcmV0dXJuIHsgQXJyYXkgfVxuICAgICovXG4gICAgUHViU3ViLmNvdW50U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNvdW50U3Vic2NyaXB0aW9ucyh0b3BpYyl7XG4gICAgICAgIHZhciBtO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICBmb3IgKG0gaW4gbWVzc2FnZXMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKHRva2VuIGluIG1lc3NhZ2VzW21dKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb3VudDtcbiAgICB9O1xuXG5cbiAgICAvKipcbiAgICAgICBHZXRzIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBnZXRTdWJzY3JpcHRpb25zXG4gICAgKi9cbiAgICBQdWJTdWIuZ2V0U3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGdldFN1YnNjcmlwdGlvbnModG9waWMpe1xuICAgICAgICB2YXIgbTtcbiAgICAgICAgdmFyIGxpc3QgPSBbXTtcbiAgICAgICAgZm9yIChtIGluIG1lc3NhZ2VzKXtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaChtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBzdWJzY3JpcHRpb25zXG4gICAgICpcbiAgICAgKiAtIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG4gICAgICpcblx0ICogLSBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG4gICAgICogQGZ1bmN0aW9uXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBhbGlhcyBzdWJzY3JpYmVPbmNlXG4gICAgICogQHBhcmFtIHsgU3RyaW5nIHwgRnVuY3Rpb24gfSB2YWx1ZSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZSBmcm9tXG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cbiAgICAgKiB2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuICAgICAqIEBleGFtcGxlIC8vIFVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG4gICAgICogUHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG4gICAgICogQGV4YW1wbGUgLy8gVW5zdWJzY3JpYmluZyBmcm9tIGEgdG9waWNcbiAgICAgKiBQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcbiAgICAgKi9cbiAgICBQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIHZhciBkZXNjZW5kYW50VG9waWNFeGlzdHMgPSBmdW5jdGlvbih0b3BpYykge1xuICAgICAgICAgICAgICAgIHZhciBtO1xuICAgICAgICAgICAgICAgIGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDAgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGEgZGVzY2VuZGFudCBvZiB0aGUgdG9waWMgZXhpc3RzOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgKCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobWVzc2FnZXMsIHZhbHVlKSB8fCBkZXNjZW5kYW50VG9waWNFeGlzdHModmFsdWUpICksXG4gICAgICAgICAgICBpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcbiAgICAgICAgICAgIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZSxcbiAgICAgICAgICAgIG0sIG1lc3NhZ2UsIHQ7XG5cbiAgICAgICAgaWYgKGlzVG9waWMpe1xuICAgICAgICAgICAgUHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyh2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG4gICAgICAgICAgICBpZiAoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCggbWVzc2FnZXMsIG0gKSApe1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuICAgICAgICAgICAgICAgIGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoIHQgaW4gbWVzc2FnZSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtZXNzYWdlLCB0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG1lc3NhZ2VbdF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbn0pKTtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBpY29uIGZyb20gXCIuL2ltZ3MvZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuY29uc3QgcGxheWVyMUJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5ZXIxQm9hcmRDb250YWluZXJcIik7XG5jb25zdCBwbGF5ZXIyQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXllcjJCb2FyZENvbnRhaW5lclwiKTtcbmNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2FyZENvbnRhaW5lclwiKTtcbmNvbnN0IG1vZGFsQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsQm9hcmRcIik7XG5jb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluQ29udGFpbmVyXCIpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvb3RlciBhXCIpO1xuXG5jb25zdCBnaXRodWJpY29uID0gbmV3IEltYWdlKCk7XG5naXRodWJpY29uLnNyYyA9IGljb247XG5mb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViaWNvbik7XG5cbmNvbnN0IERPTWNvbnRyb2xsZXIgPSAoKSA9PiB7XG5cdGNvbnN0IHJlbmRlckdhbWVPdmVyID0gKHdpbm5lciA9IFwiYm9iXCIpID0+IHtcblx0XHRjb25zdCBnYW1lT3Zlck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVPdmVyXCIpO1xuXHRcdGNvbnN0IHdpbm5lclRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbm5lclRleHRcIik7XG5cblx0XHRpZiAoZ2FtZU92ZXJNZW51LnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRnYW1lT3Zlck1lbnUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBgJHt3aW5uZXJ9IHdpbnMhYDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Z2FtZU92ZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cdH07XG5cdGNvbnN0IHJlbmRlclNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbW9kZWxDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYWNlU2hpcHNDb250YWluZXJcIik7XG5cdFx0Y29uc3Qgc2hpcENvbnRhaW5lcnMgPSBBcnJheS5mcm9tKFxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNlbGxDb250YWluZXJcIilcblx0XHQpO1xuXG5cdFx0c2hpcENvbnRhaW5lcnMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuXHRcdFx0ZWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cdFx0XHRlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiYm9yZGVyXCIpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKG1vZGVsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG5cdFx0XHRtb2RlbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG5cblx0XHRcdHBsYXllcjFCb2FyZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRwbGF5ZXIyQm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdFx0Ym9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRtb2RlbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0XHRwbGF5ZXIxQm9hcmRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuXHRcdFx0cGxheWVyMkJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHRcdGJvYXJkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcmVuZGVyQm9hcmRzID0gKHBsYXllckJvYXJkLCBwbGF5ZXJObykgPT4ge1xuXHRcdGlmIChwbGF5ZXJObyA9PT0gMSkge1xuXHRcdFx0cGxheWVyMUJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cdFx0fVxuXG5cdFx0aWYgKHBsYXllck5vID09PSAyKSB7XG5cdFx0XHRwbGF5ZXIyQm9hcmRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR9XG5cblx0XHRpZiAocGxheWVyTm8gPT09IDMpIHtcblx0XHRcdG1vZGFsQm9hcmQuaW5uZXJIVE1MID0gXCJcIjtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuXHRcdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRDZWxsXCIpO1xuXHRcdFx0XHRjZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtY29vcmQtWFwiLCBqKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkLVlcIiwgaSk7XG5cblx0XHRcdFx0aWYgKHBsYXllckJvYXJkW2pdW2ldLnRha2VuICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImJsYWNrXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocGxheWVyQm9hcmRbal1baV0uc3RhdHVzID09PSBcIm1pc3NcIikge1xuXHRcdFx0XHRcdGNlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJjeWFuXCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAocGxheWVyQm9hcmRbal1baV0uc3RhdHVzID09PSBcImhpdFwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBsYXllck5vID09PSAxKSB7XG5cdFx0XHRcdFx0cGxheWVyMUJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBsYXllck5vID09PSAyKSB7XG5cdFx0XHRcdFx0cGxheWVyMkJvYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHBsYXllck5vID09PSAzKSB7XG5cdFx0XHRcdFx0bW9kYWxCb2FyZC5hcHBlbmRDaGlsZChjZWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhZGRTZWxlY3RlZCA9IChzaGlwVG9QbGFjZSkgPT4ge1xuXHRcdGNvbnN0IGFsbENvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI2NlbGxDb250YWluZXJcIik7XG5cdFx0YWxsQ29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcblx0XHRcdGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIlwiO1xuXHRcdH0pO1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdHNoaXBUb1BsYWNlLnN0eWxlLmJvcmRlciA9IFwiYmx1ZSBzb2xpZFwiO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGJpbmRDbGljayhoYW5kbGVyKSB7XG5cdFx0cm9vdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRoYW5kbGVyKGV2ZW50KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4ge1xuXHRcdGJpbmRDbGljayxcblx0XHRyZW5kZXJCb2FyZHMsXG5cdFx0YWRkU2VsZWN0ZWQsXG5cdFx0cmVuZGVyU2hpcFBsYWNlbWVudCxcblx0XHRyZW5kZXJHYW1lT3Zlcixcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERPTWNvbnRyb2xsZXI7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuXG5pbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVDb250cm9sbGVyKCkge1xuXHRsZXQgX3NlbGVjdGVkU2hpcCA9IG51bGw7XG5cblx0Y29uc3Qgc2V0U2VsZWN0ZWRTaGlwID0gKHNoaXBBcnJMb2MpID0+IHtcblx0XHRfc2VsZWN0ZWRTaGlwID0gc2hpcEFyckxvYztcblx0fTtcblxuXHRjb25zdCBnZXRTZWxlY3RlZFNoaXAgPSAoKSA9PiBfc2VsZWN0ZWRTaGlwO1xuXG5cdGNvbnN0IG5ld0dhbWUgPSAocGxheWVyMSwgcGxheWVyMikgPT4ge1xuXHRcdC8vIHBsYWNlIHNoaXBzIHJhbmRvbWx5IG9uIGNvbXB1dGVyIGJvYXJkXG5cdFx0cGxheWVyMi5fcGxheWVyU2hpcHMuZm9yRWFjaCgocykgPT4ge1xuXHRcdFx0bGV0IHggPSAwO1xuXHRcdFx0bGV0IHkgPSAwO1xuXHRcdFx0Y29uc3Qgb3JpZW4gPSBNYXRoLnJhbmRvbSgpID49IDAuNTtcblx0XHRcdHMuc2V0T3JpZW50YXRpb24ob3JpZW4pO1xuXHRcdFx0aWYgKHMuZ2V0T3JpZW50YXRpb24oKSA9PT0gdHJ1ZSkge1xuXHRcdFx0XHR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gcy5nZXRMZW5ndGgoKSkpO1xuXHRcdFx0XHR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0eCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHMuZ2V0TGVuZ3RoKCkpKTtcblx0XHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRcdH1cblx0XHRcdHdoaWxlICghcGxheWVyMi5fcGxheWVyQm9hcmQuZ2V0VmFsaWRTcGFjZShzLCB4LCB5KSkge1xuXHRcdFx0XHRpZiAocy5nZXRPcmllbnRhdGlvbigpID09PSB0cnVlKSB7XG5cdFx0XHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIHMuZ2V0TGVuZ3RoKCkpKTtcblx0XHRcdFx0XHR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSBzLmdldExlbmd0aCgpKSk7XG5cdFx0XHRcdFx0eSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cGxheWVyMi5fcGxheWVyQm9hcmQucGxhY2VTaGlwKHMsIHgsIHkpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcblx0XHQvLyB3aGlsZSBhbGwgc3VuayBvbiBib3RoIGJvYXJkcyBpcyBub3QgdHJ1ZVxuXHRcdC8vIHBsYXllciAxIGNob29zZXMgYXR0YWNrXG5cdFx0Ly8gY29tcHV0ZXIgY2hvb3NlcyBhdHRhY2tcblx0fTtcblxuXHRyZXR1cm4geyBuZXdHYW1lLCBzZXRTZWxlY3RlZFNoaXAsIGdldFNlbGVjdGVkU2hpcCB9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQoKSB7XG5cdGNvbnN0IF9ib2FyZCA9IFtdO1xuXHRjb25zdCBfcGxhY2VkU2hpcHMgPSBbXTtcblxuXHQoZnVuY3Rpb24gc2V0dXBCb2FyZCgpIHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcblx0XHRcdF9ib2FyZFtpXSA9IFtdO1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG5cdFx0XHRcdF9ib2FyZFtpXVtqXSA9IHtcblx0XHRcdFx0XHRsb2NhdGlvbjogW2ksIGpdLFxuXHRcdFx0XHRcdHRha2VuOiBudWxsLFxuXHRcdFx0XHRcdHN0YXR1czogbnVsbCxcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cdH0pKCk7XG5cblx0Y29uc3QgZ2V0VmFsaWRTcGFjZSA9IChzaGlwLCB4LCB5KSA9PiB7XG5cdFx0aWYgKHNoaXAuZ2V0T3JpZW50YXRpb24oKSkge1xuXHRcdFx0aWYgKHkgKyBzaGlwLmdldExlbmd0aCgpID49IDExKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdGZvciAobGV0IGkgPSB5IC0gMTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpICsgMTsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChpID49IDAgJiYgaSA8PSA5KSB7XG5cdFx0XHRcdFx0aWYgKF9ib2FyZFt4XVtpXSAhPT0gdW5kZWZpbmVkICYmIF9ib2FyZFt4XVtpXS50YWtlbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoeCArIDEgPD0gOSkge1xuXHRcdFx0XHRcdFx0aWYgKF9ib2FyZFt4ICsgMV1baV0gIT09IHVuZGVmaW5lZCAmJiBfYm9hcmRbeCArIDFdW2ldLnRha2VuICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHggLSAxID49IDApIHtcblx0XHRcdFx0XHRcdGlmIChfYm9hcmRbeCAtIDFdW2ldICE9PSB1bmRlZmluZWQgJiYgX2JvYXJkW3ggLSAxXVtpXS50YWtlbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICh4ICsgc2hpcC5nZXRMZW5ndGgoKSA+PSAxMSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKGxldCBpID0geCAtIDE7IGkgPCB4ICsgc2hpcC5nZXRMZW5ndGgoKSArIDE7IGkgKz0gMSkge1xuXHRcdFx0XHRpZiAoaSA+PSAwICYmIGkgPD0gOSkge1xuXHRcdFx0XHRcdGlmIChfYm9hcmRbaV1beV0gIT09IHVuZGVmaW5lZCAmJiBfYm9hcmRbaV1beV0udGFrZW4gIT09IG51bGwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKF9ib2FyZFtpXVt5ICsgMV0gIT09IHVuZGVmaW5lZCAmJiBfYm9hcmRbaV1beSArIDFdLnRha2VuICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChfYm9hcmRbaV1beSAtIDFdICE9PSB1bmRlZmluZWQgJiYgX2JvYXJkW2ldW3kgLSAxXS50YWtlbiAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fTtcblxuXHRjb25zdCBnZXRCb2FyZCA9ICgpID0+IF9ib2FyZDtcblxuXHRjb25zdCBnZXRTaGlwID0gKHgsIHkpID0+IHtcblx0XHRsZXQgaW5kZXg7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBfcGxhY2VkU2hpcHMubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdGlmIChfcGxhY2VkU2hpcHNbaV0uZ2V0TmFtZSgpID09PSBfYm9hcmRbeF1beV0udGFrZW4pIHtcblx0XHRcdFx0aW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gaW5kZXg7XG5cdH07XG5cblx0Y29uc3QgZ2V0UGxhY2VkU2hpcHMgPSAoKSA9PiBfcGxhY2VkU2hpcHM7XG5cblx0Y29uc3QgcGxhY2VTaGlwID0gKHNoaXAsIHgsIHkpID0+IHtcblx0XHRpZiAoc2hpcC5nZXRPcmllbnRhdGlvbigpKSB7XG5cdFx0XHRmb3IgKGxldCBpID0geTsgaSA8IHkgKyBzaGlwLmdldExlbmd0aCgpOyBpICs9IDEpIHtcblx0XHRcdFx0X2JvYXJkW3hdW2ldLnRha2VuID0gc2hpcC5nZXROYW1lKCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAobGV0IGkgPSB4OyBpIDwgeCArIHNoaXAuZ2V0TGVuZ3RoKCk7IGkgKz0gMSkge1xuXHRcdFx0XHRfYm9hcmRbaV1beV0udGFrZW4gPSBzaGlwLmdldE5hbWUoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0X3BsYWNlZFNoaXBzLnB1c2goc2hpcCk7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJib2FyZCBVcGRhdGVkXCIpO1xuXHR9O1xuXG5cdGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoeCwgeSkgPT4ge1xuXHRcdGNvbnN0IHNoaXBBdExvYyA9IF9wbGFjZWRTaGlwc1tnZXRTaGlwKHgsIHkpXTtcblx0XHRpZiAoc2hpcEF0TG9jICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdF9ib2FyZFt4XVt5XS5zdGF0dXMgPSBcImhpdFwiO1xuXHRcdFx0c2hpcEF0TG9jLnNldEhpdHMoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2JvYXJkW3hdW3ldLnN0YXR1cyA9IFwibWlzc1wiO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBhbGxTaGlwc1N1bmsgPSAoKSA9PiBfcGxhY2VkU2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQuZ2V0U3VuaygpKTtcblxuXHRyZXR1cm4ge1xuXHRcdHBsYWNlU2hpcCxcblx0XHRnZXRCb2FyZCxcblx0XHRyZWNlaXZlQXR0YWNrLFxuXHRcdGdldFBsYWNlZFNoaXBzLFxuXHRcdGFsbFNoaXBzU3Vuayxcblx0XHRnZXRWYWxpZFNwYWNlLFxuXHR9O1xufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmltcG9ydCBQdWJTdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xuaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgcGxheWVyID0gKHBOYW1lKSA9PiB7XG5cdGNvbnN0IF9uYW1lID0gcE5hbWU7XG5cdGNvbnN0IF9zaG90c1Rha2VuID0gW107XG5cdGNvbnN0IF9wbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZCgpO1xuXHRjb25zdCBnZXRQbGF5ZXJOYW1lID0gKCkgPT4gX25hbWU7XG5cdGNvbnN0IF9wbGF5ZXJTaGlwcyA9IFtcblx0XHRzaGlwKDUsIFwiQ2FycmllclwiKSxcblx0XHRzaGlwKDQsIFwiQmF0dGxlc2hpcFwiKSxcblx0XHRzaGlwKDMsIFwiRGVzdHJveWVyXCIpLFxuXHRcdHNoaXAoMywgXCJTdWJNYXJpbmVcIiksXG5cdFx0c2hpcCgyLCBcIlBhdHJvbCBCb2F0XCIpLFxuXHRdO1xuXG5cdGNvbnN0IGNoZWNrQWxyZWFkeVBpY2tlZCA9ICh4LCB5KSA9PiB7XG5cdFx0SlNPTi5zdHJpbmdpZnkoX3Nob3RzVGFrZW4pO1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeShfc2hvdHNUYWtlbikuaW5jbHVkZXMoW3gsIHldKTtcblx0fTtcblxuXHRjb25zdCBsYXVuY2hBdHRhY2sgPSAoZW5lbXlCb2FyZCwgeCwgeSkgPT4ge1xuXHRcdGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcblx0XHRfc2hvdHNUYWtlbi5wdXNoKFt4LCB5XSk7XG5cdFx0UHViU3ViLnB1Ymxpc2goXCJib2FyZCBVcGRhdGVkXCIpO1xuXHR9O1xuXG5cdGNvbnN0IGdldFJhbmRvbUNvb3JkID0gKCkgPT4ge1xuXHRcdGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdHdoaWxlIChjaGVja0FscmVhZHlQaWNrZWQoeCwgeSkpIHtcblx0XHRcdHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cdFx0XHR5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXHRcdH1cblxuXHRcdHJldHVybiBbeCwgeV07XG5cdH07XG5cblx0Y29uc3QgZ2V0UHJldk1vdmVzID0gKCkgPT4gX3Nob3RzVGFrZW47XG5cdHJldHVybiB7XG5cdFx0Z2V0UHJldk1vdmVzLFxuXHRcdGNoZWNrQWxyZWFkeVBpY2tlZCxcblx0XHRnZXRQbGF5ZXJOYW1lLFxuXHRcdF9wbGF5ZXJCb2FyZCxcblx0XHRsYXVuY2hBdHRhY2ssXG5cdFx0Z2V0UmFuZG9tQ29vcmQsXG5cdFx0X3BsYXllclNoaXBzLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZXJzY29yZS1kYW5nbGUgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoaXAoc2hpcExlbmd0aCwgc2hpcE5hbWUsIHZlcnRpY2FsID0gZmFsc2UpIHtcblx0Y29uc3QgX2xlbmd0aCA9IHNoaXBMZW5ndGg7XG5cdGxldCBfaGl0cyA9IDA7XG5cdGxldCBfaXNTdW5rID0gZmFsc2U7XG5cdGNvbnN0IF9uYW1lID0gc2hpcE5hbWU7XG5cdGxldCBfb3JpZW50YXRpb24gPSB2ZXJ0aWNhbDtcblxuXHRjb25zdCBnZXRTdW5rID0gKCkgPT4gX2lzU3Vuaztcblx0Y29uc3QgZ2V0SGl0cyA9ICgpID0+IF9oaXRzO1xuXHRjb25zdCBnZXRMZW5ndGggPSAoKSA9PiBfbGVuZ3RoO1xuXHRjb25zdCBnZXROYW1lID0gKCkgPT4gX25hbWU7XG5cdGNvbnN0IGdldE9yaWVudGF0aW9uID0gKCkgPT4gX29yaWVudGF0aW9uO1xuXG5cdGNvbnN0IGNoZWNrU3VuayA9ICgpID0+IHtcblx0XHRpZiAoX2hpdHMgPT09IF9sZW5ndGgpIHtcblx0XHRcdF9pc1N1bmsgPSB0cnVlO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCBzZXRIaXRzID0gKCkgPT4ge1xuXHRcdGlmIChnZXRIaXRzKCkgPCBfbGVuZ3RoKSB7XG5cdFx0XHRfaGl0cyArPSAxO1xuXHRcdFx0Y2hlY2tTdW5rKCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHNldE9yaWVudGF0aW9uID0gKG9yaWVudCkgPT4ge1xuXHRcdF9vcmllbnRhdGlvbiA9IG9yaWVudDtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdGdldE5hbWUsXG5cdFx0Z2V0TGVuZ3RoLFxuXHRcdHNldEhpdHMsXG5cdFx0Z2V0SGl0cyxcblx0XHRnZXRTdW5rLFxuXHRcdGdldE9yaWVudGF0aW9uLFxuXHRcdHNldE9yaWVudGF0aW9uLFxuXHR9O1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBQdWJTdWIsIHsgcHVibGlzaCB9IGZyb20gXCJwdWJzdWItanNcIjtcbmltcG9ydCBnYW1lQ29udHJvbGxlciBmcm9tIFwiLi9nYW1lQ29udHJvbGxlclwiO1xuaW1wb3J0IERPTWNvbnRyb2xsZXIgZnJvbSBcIi4vRE9NY29udHJvbGxlclwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgZ2FtZSA9IGdhbWVDb250cm9sbGVyKCk7XG5jb25zdCB2aWV3ID0gRE9NY29udHJvbGxlcigpO1xuXG5sZXQgcGxheWVyMSA9IHBsYXllcihcIlBsYXllclwiKTtcbmxldCBjb21wdXRlciA9IHBsYXllcihcIkNvbXB1dGVyXCIpO1xuXG5nYW1lLm5ld0dhbWUocGxheWVyMSwgY29tcHV0ZXIpO1xuXG52aWV3LnJlbmRlckJvYXJkcyhwbGF5ZXIxLl9wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCAzKTtcbnZpZXcucmVuZGVyR2FtZU92ZXIoKTtcbmNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG5cdGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudDtcblxuXHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInZlcnRpY2FsUGxhY2VtZW50XCIpIHtcblx0XHRpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIm9uXCIpKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShcIm9uXCIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NMaXN0LmFkZChcIm9uXCIpO1xuXHRcdH1cblx0fVxuXG5cdGlmICh0YXJnZXQuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikgPT09IFwiYm9hcmRDZWxsXCIpIHtcblx0XHRjb25zdCBwbGF5ZXJYID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkLVhcIikpO1xuXHRcdGNvbnN0IHBsYXllclkgPSBOdW1iZXIodGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtY29vcmQtWVwiKSk7XG5cdFx0aWYgKFxuXHRcdFx0dGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwicGxheWVyMkJvYXJkQ29udGFpbmVyXCIgJiZcblx0XHRcdHBsYXllcjEuY2hlY2tBbHJlYWR5UGlja2VkKHBsYXllclgsIHBsYXllclkpID09PSBmYWxzZVxuXHRcdCkge1xuXHRcdFx0cGxheWVyMS5sYXVuY2hBdHRhY2soY29tcHV0ZXIuX3BsYXllckJvYXJkLCBwbGF5ZXJYLCBwbGF5ZXJZKTtcblxuXHRcdFx0Y29uc3QgbmV4dE1vdmUgPSBjb21wdXRlci5nZXRSYW5kb21Db29yZCgpO1xuXHRcdFx0Y29tcHV0ZXIubGF1bmNoQXR0YWNrKHBsYXllcjEuX3BsYXllckJvYXJkLCBuZXh0TW92ZVswXSwgbmV4dE1vdmVbMV0pO1xuXG5cdFx0XHRpZiAocGxheWVyMS5fcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcblx0XHRcdFx0dmlldy5yZW5kZXJHYW1lT3Zlcihjb21wdXRlci5nZXRQbGF5ZXJOYW1lKCkpO1xuXHRcdFx0fSBlbHNlIGlmIChjb21wdXRlci5fcGxheWVyQm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcblx0XHRcdFx0dmlldy5yZW5kZXJHYW1lT3ZlcihwbGF5ZXIxLmdldFBsYXllck5hbWUoKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09PSBcImNlbGxDb250YWluZXJcIikge1xuXHRcdHZpZXcuYWRkU2VsZWN0ZWQodGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuXHRcdGdhbWUuc2V0U2VsZWN0ZWRTaGlwKHRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcInNoaXBJZFwiKSk7XG5cdH1cblxuXHRpZiAodGFyZ2V0LnBhcmVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiaWRcIikgPT09IFwibW9kYWxCb2FyZFwiKSB7XG5cdFx0Y29uc3QgdmVydGljYWxUaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2ZXJ0aWNhbFBsYWNlbWVudFwiKTtcblxuXHRcdGlmIChnYW1lLmdldFNlbGVjdGVkU2hpcCgpICE9PSBudWxsKSB7XG5cdFx0XHRjb25zdCB4ID0gTnVtYmVyKHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvb3JkLXhcIikpO1xuXHRcdFx0Y29uc3QgeSA9IE51bWJlcih0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb29yZC15XCIpKTtcblxuXHRcdFx0Y29uc3Qgc2hpcEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRgW3NoaXBpZD1cIiR7Z2FtZS5nZXRTZWxlY3RlZFNoaXAoKX1cIl1gXG5cdFx0XHQpO1xuXG5cdFx0XHRpZiAodmVydGljYWxUaWNrLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpID09PSBcIm9uXCIpIHtcblx0XHRcdFx0cGxheWVyMS5fcGxheWVyU2hpcHNbZ2FtZS5nZXRTZWxlY3RlZFNoaXAoKV0uc2V0T3JpZW50YXRpb24odHJ1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwbGF5ZXIxLl9wbGF5ZXJTaGlwc1tnYW1lLmdldFNlbGVjdGVkU2hpcCgpXS5zZXRPcmllbnRhdGlvbihmYWxzZSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChcblx0XHRcdFx0cGxheWVyMS5fcGxheWVyQm9hcmQuZ2V0VmFsaWRTcGFjZShcblx0XHRcdFx0XHRwbGF5ZXIxLl9wbGF5ZXJTaGlwc1tnYW1lLmdldFNlbGVjdGVkU2hpcCgpXSxcblx0XHRcdFx0XHR4LFxuXHRcdFx0XHRcdHlcblx0XHRcdFx0KVxuXHRcdFx0KSB7XG5cdFx0XHRcdHNoaXBFbGVtZW50LnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuXHRcdFx0XHRwbGF5ZXIxLl9wbGF5ZXJCb2FyZC5wbGFjZVNoaXAoXG5cdFx0XHRcdFx0cGxheWVyMS5fcGxheWVyU2hpcHNbZ2FtZS5nZXRTZWxlY3RlZFNoaXAoKV0sXG5cdFx0XHRcdFx0eCxcblx0XHRcdFx0XHR5XG5cdFx0XHRcdCk7XG5cdFx0XHRcdHBsYXllcjEuX3BsYXllclNoaXBzW2dhbWUuZ2V0U2VsZWN0ZWRTaGlwKCldID0gbnVsbDtcblx0XHRcdFx0Z2FtZS5zZXRTZWxlY3RlZFNoaXAobnVsbCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwbGF5ZXIxLl9wbGF5ZXJTaGlwcy5ldmVyeSgodmFsKSA9PiB2YWwgPT09IHBsYXllcjEuX3BsYXllclNoaXBzWzBdKSkge1xuXHRcdFx0XHR2aWV3LnJlbmRlclNoaXBQbGFjZW1lbnQoKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBcInJlc3RhcnRCdG5cIikge1xuXHRcdHBsYXllcjEgPSBwbGF5ZXIoXCJQbGF5ZXJcIik7XG5cdFx0Y29tcHV0ZXIgPSBwbGF5ZXIoXCJDb21wdXRlclwiKTtcblx0XHR2aWV3LnJlbmRlckdhbWVPdmVyKCk7XG5cdFx0Z2FtZS5uZXdHYW1lKHBsYXllcjEsIGNvbXB1dGVyKTtcblx0XHRQdWJTdWIucHVibGlzaChcImJvYXJkIFVwZGF0ZWRcIik7XG5cdFx0dmlldy5yZW5kZXJTaGlwUGxhY2VtZW50KCk7XG5cdH1cbn07XG5cbnZpZXcuYmluZENsaWNrKGhhbmRsZUNsaWNrKTtcblB1YlN1Yi5zdWJzY3JpYmUoXCJib2FyZCBVcGRhdGVkXCIsICgpID0+IHtcblx0dmlldy5yZW5kZXJCb2FyZHMocGxheWVyMS5fcGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgMSk7XG5cdHZpZXcucmVuZGVyQm9hcmRzKGNvbXB1dGVyLl9wbGF5ZXJCb2FyZC5nZXRCb2FyZCgpLCAyKTtcblx0dmlldy5yZW5kZXJCb2FyZHMocGxheWVyMS5fcGxheWVyQm9hcmQuZ2V0Qm9hcmQoKSwgMyk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==