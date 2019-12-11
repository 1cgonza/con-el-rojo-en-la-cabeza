/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/audio/index.js":
/*!****************************!*\
  !*** ./src/audio/index.js ***!
  \****************************/
/*! exports provided: Audio */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Audio\", function() { return Audio; });\n/* harmony import */ var _http_req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/req */ \"./src/http/req.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Audio =\n/*#__PURE__*/\nfunction () {\n  function Audio(audios, cb) {\n    _classCallCheck(this, Audio);\n\n    if (!audios || Object.prototype.toString.call(audios) !== '[object Object]') {\n      return console.error('The first parameter needs to be an Object.', 'Example:', \"{audio1: 'audio1.mp3', audio2: 'audio2.mp3'}\");\n    }\n\n    window.AudioContext = window.AudioContext || window.webkitAudioContext;\n    var total = Object.keys(audios).length;\n    var loaded = 0;\n    var retAudios = {};\n    this.ctx = new AudioContext();\n\n    for (var name in audios) {\n      Object(_http_req__WEBPACK_IMPORTED_MODULE_0__[\"audio\"])(audios[name], finishedLoading.bind(this), name, document.body, 'Loading Audio');\n    }\n\n    function finishedLoading(arrayBuffer, name) {\n      var a = this;\n      this.ctx.decodeAudioData(arrayBuffer, onSucess.bind(a), onError);\n\n      function onSucess(buffer) {\n        if (!buffer) {\n          console.error('Error decoding audio file:', name);\n          return;\n        }\n\n        var src = this.ctx.createBufferSource();\n        src.buffer = buffer;\n        retAudios[name] = src;\n        checkLoaded();\n      }\n\n      function onError(err) {\n        console.error('decodeAudioData error', err);\n      }\n    }\n\n    function checkLoaded() {\n      loaded++;\n\n      if (loaded === total) {\n        cb(retAudios);\n      }\n    }\n  }\n\n  _createClass(Audio, [{\n    key: \"source\",\n    value: function source(src) {\n      var src = this.ctx.createBufferSource();\n      src.buffer = buffer;\n      src.connect(this.gainNode);\n      this.gainNode.connect(this.ctx.destination);\n      return src;\n    }\n  }]);\n\n  return Audio;\n}();\n\n//# sourceURL=webpack://dddrawings/./src/audio/index.js?");

/***/ }),

/***/ "./src/color/index.js":
/*!****************************!*\
  !*** ./src/color/index.js ***!
  \****************************/
/*! exports provided: rgbToHex, hexToRgb, convertAlpha, getRGBA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbToHex\", function() { return rgbToHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexToRgb\", function() { return hexToRgb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertAlpha\", function() { return convertAlpha; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRGBA\", function() { return getRGBA; });\nfunction rgbToHex(r, g, b) {\n  return '0x' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);\n} // http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb\n\nfunction hexToRgb(hex) {\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\n  var shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n  hex = hex.replace(shorthandRegex, function (m, r, g, b) {\n    return r + r + g + g + b + b;\n  });\n  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n  return result ? {\n    r: parseInt(result[1], 16),\n    g: parseInt(result[2], 16),\n    b: parseInt(result[3], 16)\n  } : null;\n}\nfunction convertAlpha(processingAlpha) {\n  var avg = 255 / processingAlpha;\n  var cssA = 1 / avg;\n  return cssA;\n}\nfunction getRGBA(c, a) {\n  return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + a + ')';\n}\n\n//# sourceURL=webpack://dddrawings/./src/color/index.js?");

/***/ }),

/***/ "./src/html/canvas.js":
/*!****************************!*\
  !*** ./src/html/canvas.js ***!
  \****************************/
/*! exports provided: canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return canvas; });\n/**\n * Create a canvas element, set style values and append it to the container if defined\n * Use Cases:\n * 1. DEFAULT: DDD.canvas(container);\n *\n * 2. STAGING: DDD.canvas(null, {});\n * (useful for staging canvases, render things on the side for performance optimization)\n *\n * 3. FULL:\n * DDD.canvas(container, {\n *   w: width, h: height,\n *   position: 'cssPosition',\n *   top: #css_top, left: #css_eft,\n *   zi: #css_z-index\n *   font: '12px fontName'\n * });\n *\n * @param {Element}   container          Element where canvas should be appended.\n * @param {Object}    options            Styling data:\n * @param {Number}    options.w          Width of canvas.\n * @param {Number}    options.h          Height of Canvas.\n * @param {String}    options.position   CSS position.\n * @param {Number}    options.top        CSS top.\n * @param {Number}    options.left       CSS left.\n * @param {Number}    options.zi         CSS z-index\n */\nfunction canvas(container, options) {\n  var canvas = document.createElement('canvas');\n  var ctx = canvas.getContext('2d');\n  options = options || {};\n  canvas.width = options.w || window.innerWidth;\n  canvas.height = options.h || window.innerHeight;\n  canvas.style.position = options.position || 'absolute';\n  canvas.style.top = options.top || 0;\n  canvas.style.left = options.left || 0;\n  canvas.style.zIndex = options.zi || 9;\n\n  if (options.css) {\n    for (var key in options.css) {\n      canvas.style[key] = options.css[key];\n    }\n  }\n\n  ctx.font = options.font || '12px Inconsolata';\n\n  if (container) {\n    container.appendChild(canvas);\n  }\n\n  return {\n    container: container,\n    canvas: canvas,\n    w: canvas.width,\n    h: canvas.height,\n    ctx: ctx,\n    center: {\n      x: canvas.width / 2,\n      y: canvas.height / 2\n    }\n  };\n}\n\n//# sourceURL=webpack://dddrawings/./src/html/canvas.js?");

/***/ }),

/***/ "./src/html/index.js":
/*!***************************!*\
  !*** ./src/html/index.js ***!
  \***************************/
/*! exports provided: canvas, yearsMenu, resetCurrent, base64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"yearsMenu\", function() { return yearsMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetCurrent\", function() { return resetCurrent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"base64\", function() { return base64; });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/html/canvas.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return _canvas__WEBPACK_IMPORTED_MODULE_0__[\"canvas\"]; });\n\n\n/**\n * @param {Number}    yearStart   First menu item\n * @param {Number}    yearEnd     Last menu item\n * @param {Number}    current     Default menu item to start with 'current' class\n * @param {Callback}  clickEvent  Name of the function to process the click events\n * @param {Callback}  callback    Name of the function for when the menu is ready\n */\n\nfunction yearsMenu(yearStart, yearEnd, current, clickEvent, callback) {\n  var yearsContainer = document.createElement('ul');\n  var currentYearBtn = '';\n  yearsContainer.id = 'years';\n  yearsContainer.style.zIndex = 99999;\n\n  for (var year = yearStart; year <= yearEnd; year++) {\n    var btn = document.createElement('li');\n    var label = document.createTextNode(year);\n\n    if (year === current) {\n      btn.className = 'current';\n      currentYearBtn = btn;\n    }\n\n    btn.appendChild(label);\n    yearsContainer.appendChild(btn);\n    btn.addEventListener('click', clickEvent, false);\n  }\n\n  callback(yearsContainer, currentYearBtn);\n}\nfunction resetCurrent(old, target, className) {\n  className = className || 'current';\n\n  if (old) {\n    old.classList.remove(className);\n  }\n\n  target.classList.add(className);\n} // This encoding function is from Philippe Tenenhaus's example at http://www.philten.com/us-xmlhttprequest-image/\n\nfunction base64(inputStr) {\n  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n  var outputStr = '';\n  var i = 0;\n\n  while (i < inputStr.length) {\n    //all three \"& 0xff\" added below are there to fix a known bug\n    //with bytes returned by xhr.responseText\n    var byte1 = inputStr.charCodeAt(i++) & 0xff;\n    var byte2 = inputStr.charCodeAt(i++) & 0xff;\n    var byte3 = inputStr.charCodeAt(i++) & 0xff;\n    var enc1 = byte1 >> 2;\n    var enc2 = (byte1 & 3) << 4 | byte2 >> 4;\n    var enc3;\n    var enc4;\n\n    if (isNaN(byte2)) {\n      enc3 = enc4 = 64;\n    } else {\n      enc3 = (byte2 & 15) << 2 | byte3 >> 6;\n\n      if (isNaN(byte3)) {\n        enc4 = 64;\n      } else {\n        enc4 = byte3 & 63;\n      }\n    }\n\n    outputStr += b64.charAt(enc1) + b64.charAt(enc2) + b64.charAt(enc3) + b64.charAt(enc4);\n  }\n\n  return outputStr;\n}\n\n//# sourceURL=webpack://dddrawings/./src/html/index.js?");

/***/ }),

/***/ "./src/http/index.js":
/*!***************************!*\
  !*** ./src/http/index.js ***!
  \***************************/
/*! exports provided: json, image, audio, DataRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _req__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./req */ \"./src/http/req.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"json\", function() { return _req__WEBPACK_IMPORTED_MODULE_0__[\"json\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"image\", function() { return _req__WEBPACK_IMPORTED_MODULE_0__[\"image\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"audio\", function() { return _req__WEBPACK_IMPORTED_MODULE_0__[\"audio\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DataRequest\", function() { return _req__WEBPACK_IMPORTED_MODULE_0__[\"DataRequest\"]; });\n\n\n\n//# sourceURL=webpack://dddrawings/./src/http/index.js?");

/***/ }),

/***/ "./src/http/req.js":
/*!*************************!*\
  !*** ./src/http/req.js ***!
  \*************************/
/*! exports provided: json, image, audio, DataRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"json\", function() { return json; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"image\", function() { return image; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"audio\", function() { return audio; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DataRequest\", function() { return DataRequest; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction json(options) {\n  var req = new DataRequest();\n  return req.json(options);\n}\nfunction image(options) {\n  var o = new DataRequest();\n  o.req.overrideMimeType('text/plain; charset=x-user-defined');\n  return o.getD(options).then(function (res) {\n    if (res.ret !== undefined) {\n      return res;\n    } else {\n      return res.data;\n    }\n  })[\"catch\"](function (err) {\n    console.error(err);\n  });\n}\nfunction audio(options) {\n  var o = new DataRequest();\n  o.req.responseType = 'arraybuffer';\n  return o.getD(options).then(function (res) {\n    return res;\n  })[\"catch\"](function (err) {\n    console.error('Error fetching audio file', err);\n  });\n}\nvar DataRequest =\n/*#__PURE__*/\nfunction () {\n  function DataRequest() {\n    _classCallCheck(this, DataRequest);\n\n    this.req = new XMLHttpRequest();\n  }\n\n  _createClass(DataRequest, [{\n    key: \"abort\",\n    value: function abort() {\n      this.req.abort();\n    }\n  }, {\n    key: \"json\",\n    value: function json(options) {\n      this.req.overrideMimeType('application/json');\n      return this.getD(options).then(function (res) {\n        if (res.ret !== undefined) {\n          res.data = JSON.parse(res.data);\n          return res;\n        } else {\n          return JSON.parse(res.data);\n        }\n      })[\"catch\"](function (err) {\n        console.error('Error in data request, reason:', err);\n      });\n    }\n  }, {\n    key: \"getD\",\n    value: function getD(options) {\n      if (_typeof(options) === 'object') {\n        if (!options.url) {\n          console.error('The request did not receive a url, instead got', options.url);\n          return;\n        }\n      } else if (typeof options === 'string' && options.length > 0) {\n        options = {\n          url: options\n        };\n      }\n\n      var msg;\n      var progress;\n      var progressBar = false;\n      var req = this.req;\n      var loadingMsg = options.loadingMsg || 'Loading';\n      var container = options.container || document.body;\n      var loadingWrapper = container.querySelector('.loading');\n\n      if (!loadingWrapper) {\n        loadingWrapper = document.createElement('div');\n        loadingWrapper.className = 'loading';\n        container.appendChild(loadingWrapper);\n      }\n\n      var hasLoading = !!options.loadingEle;\n      var loadingEle = hasLoading ? options.loadingEle : null;\n\n      if (!loadingEle) {\n        var firstLoadingEle = container.querySelector('.loading-ele');\n        loadingEle = document.createElement('div');\n        loadingEle.className = 'loadingEle';\n\n        if (firstLoadingEle) {\n          loadingWrapper.insertBefore(firstLoadingEle, loadingEle);\n        } else {\n          loadingWrapper.appendChild(loadingEle);\n        }\n      }\n\n      function displayProgress() {\n        loadingEle.style.opacity = 1;\n        loadingWrapper.style.zIndex = 9;\n        msg = loadingEle.querySelector('.loading-msg');\n\n        if (!msg) {\n          msg = document.createElement('p');\n          msg.className = 'loading-msg';\n          msg.innerText = loadingMsg;\n          loadingEle.appendChild(msg);\n        }\n      }\n\n      function updateProgress(event) {\n        if (event.lengthComputable) {\n          if (!progressBar) {\n            // console.log(loadingEle)\n            progress = loadingEle.querySelector('.progress');\n\n            if (!progress) {\n              progress = document.createElement('progress');\n              progress.className = 'progress';\n              progress.style.zIndex = 0;\n              progress.max = 100;\n              progress.value = 0;\n              loadingEle.insertBefore(progress, msg);\n              progressBar = true;\n            }\n          }\n\n          var value = event.loaded / event.total * 100;\n          progress.value = value;\n          msg.innerText = Math.floor(value) + '%' + '\\n' + loadingMsg;\n        } else {\n          // progress = document.createElement('div');\n          // progress.className = 'no-progress';\n          // loading.insertBefore(progress, msg);\n          req.onprogress = null;\n        }\n      }\n\n      function hideProgress() {\n        if (!hasLoading) {\n          loadingEle.style.display = 'none';\n        }\n\n        loadingWrapper.style.zIndex = 0;\n      }\n\n      return new Promise(function (resolve, reject) {\n        req.open('GET', options.url, true);\n        req.onloadstart = displayProgress;\n        req.onprogress = updateProgress;\n        req.onloadend = hideProgress;\n\n        req.onload = function () {\n          if (req.status === 200) {\n            resolve({\n              data: req.response,\n              ret: options.ret\n            });\n          } else {\n            reject(req.statusText);\n          }\n        };\n\n        req.onerror = function () {\n          reject('Network Error');\n        };\n\n        req.send(null);\n      });\n    }\n  }]);\n\n  return DataRequest;\n}();\n\n//# sourceURL=webpack://dddrawings/./src/http/req.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math */ \"./src/math/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PI\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"PI\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TWO_PI\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"TWO_PI\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HALF_PI\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"HALF_PI\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"QUARTER_PI\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"QUARTER_PI\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"toRad\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"toRad\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"random\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sizeFromPercentage\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"sizeFromPercentage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPercent\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"getPercent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isPowerOfTwo\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"isPowerOfTwo\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Transform\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"Transform\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"Point\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rectangle\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"Matrix\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vector\", function() { return _math__WEBPACK_IMPORTED_MODULE_0__[\"Vector\"]; });\n\n/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./html */ \"./src/html/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"canvas\", function() { return _html__WEBPACK_IMPORTED_MODULE_1__[\"canvas\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"yearsMenu\", function() { return _html__WEBPACK_IMPORTED_MODULE_1__[\"yearsMenu\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"resetCurrent\", function() { return _html__WEBPACK_IMPORTED_MODULE_1__[\"resetCurrent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"base64\", function() { return _html__WEBPACK_IMPORTED_MODULE_1__[\"base64\"]; });\n\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http */ \"./src/http/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"json\", function() { return _http__WEBPACK_IMPORTED_MODULE_2__[\"json\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"image\", function() { return _http__WEBPACK_IMPORTED_MODULE_2__[\"image\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"audio\", function() { return _http__WEBPACK_IMPORTED_MODULE_2__[\"audio\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DataRequest\", function() { return _http__WEBPACK_IMPORTED_MODULE_2__[\"DataRequest\"]; });\n\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ \"./src/map/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return _map__WEBPACK_IMPORTED_MODULE_3__[\"Map\"]; });\n\n/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./color */ \"./src/color/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rgbToHex\", function() { return _color__WEBPACK_IMPORTED_MODULE_4__[\"rgbToHex\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hexToRgb\", function() { return _color__WEBPACK_IMPORTED_MODULE_4__[\"hexToRgb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"convertAlpha\", function() { return _color__WEBPACK_IMPORTED_MODULE_4__[\"convertAlpha\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRGBA\", function() { return _color__WEBPACK_IMPORTED_MODULE_4__[\"getRGBA\"]; });\n\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio */ \"./src/audio/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Audio\", function() { return _audio__WEBPACK_IMPORTED_MODULE_5__[\"Audio\"]; });\n\n/* harmony import */ var _webgl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./webgl */ \"./src/webgl/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stage\", function() { return _webgl__WEBPACK_IMPORTED_MODULE_6__[\"Stage\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Webgl\", function() { return _webgl__WEBPACK_IMPORTED_MODULE_6__[\"Webgl\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://dddrawings/./src/index.js?");

/***/ }),

/***/ "./src/map/index.js":
/*!**************************!*\
  !*** ./src/map/index.js ***!
  \**************************/
/*! exports provided: Map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Map\", function() { return Map; });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ \"./src/math/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n/**\n * Create a new map instance\n *\n * USAGE: var map = new DDD.Map({zoom: #, width: #, height: #, center: {lon: #, lat: #}});\n *\n * @param {Object} config             An object with the configuration options\n * @param {Number} config.zoom        The map zoom\n * @param {Number} config.width       The width of the map container\n * @param {Number} config.height      The height of the map container\n * @param {Object} config.center      Object with the longitude and latitude options for the center of the map\n * @param {Number} config.center.lon  Map center longitude\n * @param {Number} config.center.lat  Map center latitude\n */\n\nvar Map =\n/*#__PURE__*/\nfunction () {\n  function Map(config) {\n    _classCallCheck(this, Map);\n\n    var w = config.width || window.innerWidth;\n    var h = config.height || window.innerHeight;\n    var zoom = config.zoom || 11;\n\n    if (config.center) {\n      this.center = {\n        lon: config.center.lon,\n        lat: config.center.lat\n      };\n    } else {\n      this.center = {};\n    }\n\n    this.hasCenter = null;\n    this.updateSize(w, h, zoom);\n  }\n\n  _createClass(Map, [{\n    key: \"updateSize\",\n    value: function updateSize(w, h, zoom) {\n      this.stageWidth = w;\n      this.stageCenterY = h / 2;\n      this.zoom = zoom || this.zoom;\n      this.zoomX = this.stageWidth * this.zoom;\n      this.zoomY = this.stageCenterY * this.zoom;\n      this.zoomRad = this.zoomX / 360;\n      this.newCenter(this.center.lon, this.center.lat);\n    }\n  }, {\n    key: \"newCenter\",\n    value: function newCenter(lon, lat) {\n      this.hasCenter = false;\n      this.convertCoordinates(lon, lat);\n      this.hasCenter = true;\n    }\n  }, {\n    key: \"convertCoordinates\",\n    value: function convertCoordinates(lon, lat) {\n      var latRad = +lat * _math__WEBPACK_IMPORTED_MODULE_0__[\"toRad\"];\n      var mercatorN = Math.log(Math.tan(_math__WEBPACK_IMPORTED_MODULE_0__[\"QUARTER_PI\"] + latRad / 2));\n      var x = (+lon + 180) * this.zoomRad;\n      var y = this.zoomY - this.zoomX * mercatorN / _math__WEBPACK_IMPORTED_MODULE_0__[\"TWO_PI\"];\n\n      if (this.hasCenter) {\n        x -= this.center.x;\n        y -= this.center.y;\n      } else {\n        this.center.x = x;\n        this.center.y = y;\n      }\n\n      return {\n        x: x,\n        y: y\n      };\n    }\n  }]);\n\n  return Map;\n}();\n\n//# sourceURL=webpack://dddrawings/./src/map/index.js?");

/***/ }),

/***/ "./src/math/Matrix.js":
/*!****************************!*\
  !*** ./src/math/Matrix.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Matrix; });\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/math/Point.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Matrix =\n/*#__PURE__*/\nfunction () {\n  function Matrix(a, b, c, d, tx, ty) {\n    _classCallCheck(this, Matrix);\n\n    this.a = a || 1;\n    this.b = b || 0;\n    this.c = c || 0;\n    this.d = d || 1;\n    this.tx = tx || 0;\n    this.ty = ty || 0;\n  }\n\n  _createClass(Matrix, [{\n    key: \"toArray\",\n    value: function toArray(transpose, out) {\n      if (!this.array) {\n        this.array = new Float32Array(9);\n      }\n\n      var array = out || this.array;\n\n      if (transpose) {\n        array[0] = this.a;\n        array[1] = this.b;\n        array[2] = 0;\n        array[3] = this.c;\n        array[4] = this.d;\n        array[5] = 0;\n        array[6] = this.tx;\n        array[7] = this.ty;\n        array[8] = 1;\n      } else {\n        array[0] = this.a;\n        array[1] = this.c;\n        array[2] = this.tx;\n        array[3] = this.b;\n        array[4] = this.d;\n        array[5] = this.ty;\n        array[6] = 0;\n        array[7] = 0;\n        array[8] = 1;\n      }\n\n      return array;\n    }\n  }, {\n    key: \"apply\",\n    value: function apply(pos, newPos) {\n      newPos = newPos || new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      var x = pos.x;\n      var y = pos.y;\n      newPos.x = this.a * x + this.c * y + this.tx;\n      newPos.y = this.b * x + this.d * y + this.ty;\n      return newPos;\n    }\n  }, {\n    key: \"applyInverse\",\n    value: function applyInverse(pos, newPos) {\n      newPos = newPos || new _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      var id = 1 / (this.a * this.d + this.c * -this.b);\n      var x = pos.x;\n      var y = pos.y;\n      newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;\n      newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;\n      return newPos;\n    }\n  }, {\n    key: \"translate\",\n    value: function translate(x, y) {\n      this.tx += x;\n      this.ty += y;\n      return this;\n    }\n  }, {\n    key: \"scale\",\n    value: function scale(x, y) {\n      this.a *= x;\n      this.d *= y;\n      this.c *= x;\n      this.b *= y;\n      this.tx *= x;\n      this.ty *= y;\n      return this;\n    }\n  }, {\n    key: \"rotate\",\n    value: function rotate(angle) {\n      var cos = Math.cos(angle);\n      var sin = Math.sin(angle);\n      var a1 = this.a;\n      var c1 = this.c;\n      var tx1 = this.tx;\n      this.a = a1 * cos - this.b * sin;\n      this.b = a1 * sin + this.b * cos;\n      this.c = c1 * cos - this.d * sin;\n      this.d = c1 * sin + this.d * cos;\n      this.tx = tx1 * cos - this.ty * sin;\n      this.ty = tx1 * sin + this.ty * cos;\n      return this;\n    }\n  }, {\n    key: \"append\",\n    value: function append(matrix) {\n      var a1 = this.a;\n      var b1 = this.b;\n      var c1 = this.c;\n      var d1 = this.d;\n      this.a = matrix.a * a1 + matrix.b * c1;\n      this.b = matrix.a * b1 + matrix.b * d1;\n      this.c = matrix.c * a1 + matrix.d * c1;\n      this.d = matrix.c * b1 + matrix.d * d1;\n      this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;\n      this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;\n      return this;\n    }\n  }, {\n    key: \"setTransform\",\n    value: function setTransform(x, y, pivotX, pivotY, scaleX, scaleY, rotation) {\n      var sr = Math.sin(rotation);\n      var cr = Math.cos(rotation);\n      var a = cr * scaleX;\n      var b = sr * scaleX;\n      var c = -sr * scaleY;\n      var d = cr * scaleY;\n      this.a = a + c;\n      this.b = b + d;\n      this.c = a + c;\n      this.d = b + d;\n      this.tx = x + (pivotX * a + pivotY * c);\n      this.ty = y + (pivotX * b + pivotY * d);\n      return this;\n    }\n  }, {\n    key: \"prepend\",\n    value: function prepend(matrix) {\n      var tx1 = this.tx;\n\n      if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {\n        var a1 = this.a;\n        var c1 = this.c;\n        this.a = a1 * matrix.a + this.b * matrix.c;\n        this.b = a1 * matrix.b + this.b * matrix.d;\n        this.c = c1 * matrix.a + this.d * matrix.c;\n        this.d = c1 * matrix.b + this.d * matrix.d;\n      }\n\n      this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;\n      this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;\n      return this;\n    }\n  }, {\n    key: \"invert\",\n    value: function invert() {\n      var a1 = this.a;\n      var b1 = this.b;\n      var c1 = this.c;\n      var d1 = this.d;\n      var tx1 = this.tx;\n      var n = a1 * d1 - b1 * c1;\n      this.a = d1 / n;\n      this.b = -b1 / n;\n      this.c = -c1 / n;\n      this.d = a1 / n;\n      this.tx = (c1 * this.ty - d1 * tx1) / n;\n      this.ty = -(a1 * this.ty - b1 * tx1) / n;\n      return this;\n    }\n  }, {\n    key: \"identity\",\n    value: function identity() {\n      this.a = 1;\n      this.b = 0;\n      this.c = 0;\n      this.d = 1;\n      this.tx = 0;\n      this.ty = 0;\n      return this;\n    }\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      var matrix = new Matrix();\n      matrix.a = this.a;\n      matrix.b = this.b;\n      matrix.c = this.c;\n      matrix.d = this.d;\n      matrix.tx = this.tx;\n      matrix.ty = this.ty;\n      return matrix;\n    }\n  }, {\n    key: \"copy\",\n    value: function copy(matrix) {\n      matrix.a = this.a;\n      matrix.b = this.b;\n      matrix.c = this.c;\n      matrix.d = this.d;\n      matrix.tx = this.tx;\n      matrix.ty = this.ty;\n      return matrix;\n    }\n  }]);\n\n  return Matrix;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/math/Matrix.js?");

/***/ }),

/***/ "./src/math/Point.js":
/*!***************************!*\
  !*** ./src/math/Point.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Point; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Point =\n/*#__PURE__*/\nfunction () {\n  function Point(x, y) {\n    _classCallCheck(this, Point);\n\n    this.x = x || 0;\n    this.y = y || 0;\n  }\n\n  _createClass(Point, [{\n    key: \"clone\",\n    value: function clone() {\n      return new Point(this.x, this.y);\n    }\n  }, {\n    key: \"copy\",\n    value: function copy(p) {\n      this.set(p.x, p.y);\n    }\n  }, {\n    key: \"equals\",\n    value: function equals(p) {\n      return p.x === this.x && p.y === this.y;\n    }\n  }, {\n    key: \"set\",\n    value: function set(x, y) {\n      this.x = x || 0;\n      this.y = y || y !== 0 ? this.x : 0;\n    }\n  }]);\n\n  return Point;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/math/Point.js?");

/***/ }),

/***/ "./src/math/Rectangle.js":
/*!*******************************!*\
  !*** ./src/math/Rectangle.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Rectangle; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Rectangle = function Rectangle(x, y, width, height) {\n  _classCallCheck(this, Rectangle);\n\n  this.x = x || 0;\n  this.y = y || 0;\n  this.width = width || 0;\n  this.height = height || 0;\n};\n\n\n\n//# sourceURL=webpack://dddrawings/./src/math/Rectangle.js?");

/***/ }),

/***/ "./src/math/Transform.js":
/*!*******************************!*\
  !*** ./src/math/Transform.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Transform; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// Last updated November 2011\n// By Simon Sarris\n// www.simonsarris.com\n// sarris@acm.org\n//\n// Free to use and distribute at will\n// So long as you are nice to people, etc\n// Simple class for keeping track of the current transformation matrix\n// For instance:\n//    var t = new Transform();\n//    t.rotate(5);\n//    var m = t.m;\n//    ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);\n// Is equivalent to:\n//    ctx.rotate(5);\n// But now you can retrieve it :)\n// Remember that this does not account for any CSS transforms applied to the canvas\nvar Transform =\n/*#__PURE__*/\nfunction () {\n  function Transform() {\n    _classCallCheck(this, Transform);\n\n    this.reset();\n  }\n\n  _createClass(Transform, [{\n    key: \"reset\",\n    value: function reset() {\n      this.m = [1, 0, 0, 1, 0, 0];\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(matrix) {\n      var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];\n      var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];\n      var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];\n      var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];\n      var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];\n      var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];\n      this.m[0] = m11;\n      this.m[1] = m12;\n      this.m[2] = m21;\n      this.m[3] = m22;\n      this.m[4] = dx;\n      this.m[5] = dy;\n    }\n  }, {\n    key: \"invert\",\n    value: function invert() {\n      var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);\n      var m0 = this.m[3] * d;\n      var m1 = -this.m[1] * d;\n      var m2 = -this.m[2] * d;\n      var m3 = this.m[0] * d;\n      var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);\n      var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);\n      this.m[0] = m0;\n      this.m[1] = m1;\n      this.m[2] = m2;\n      this.m[3] = m3;\n      this.m[4] = m4;\n      this.m[5] = m5;\n    }\n  }, {\n    key: \"rotate\",\n    value: function rotate(rad) {\n      var c = Math.cos(rad);\n      var s = Math.sin(rad);\n      var m11 = this.m[0] * c + this.m[2] * s;\n      var m12 = this.m[1] * c + this.m[3] * s;\n      var m21 = this.m[0] * -s + this.m[2] * c;\n      var m22 = this.m[1] * -s + this.m[3] * c;\n      this.m[0] = m11;\n      this.m[1] = m12;\n      this.m[2] = m21;\n      this.m[3] = m22;\n    }\n  }, {\n    key: \"translate\",\n    value: function translate(x, y) {\n      this.m[4] += this.m[0] * x + this.m[2] * y;\n      this.m[5] += this.m[1] * x + this.m[3] * y;\n    }\n  }, {\n    key: \"translateAndRotate\",\n    value: function translateAndRotate(x, y, rad) {\n      var c = Math.cos(rad);\n      var s = Math.sin(rad);\n      var m11 = this.m[0] * c + this.m[2] * s;\n      var m12 = this.m[1] * c + this.m[3] * s;\n      var m21 = this.m[0] * -s + this.m[2] * c;\n      var m22 = this.m[1] * -s + this.m[3] * c;\n      this.m[4] += this.m[0] * x + this.m[2] * y;\n      this.m[5] += this.m[1] * x + this.m[3] * y;\n      this.m[0] = m11;\n      this.m[1] = m12;\n      this.m[2] = m21;\n      this.m[3] = m22;\n    }\n  }, {\n    key: \"scale\",\n    value: function scale(sx, sy) {\n      this.m[0] *= sx;\n      this.m[1] *= sx;\n      this.m[2] *= sy;\n      this.m[3] *= sy;\n    }\n  }, {\n    key: \"transformPoint\",\n    value: function transformPoint(px, py) {\n      var x = px;\n      var y = py;\n      px = x * this.m[0] + y * this.m[2] + this.m[4];\n      py = x * this.m[1] + y * this.m[3] + this.m[5];\n      return [px, py];\n    }\n  }]);\n\n  return Transform;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/math/Transform.js?");

/***/ }),

/***/ "./src/math/Vector.js":
/*!****************************!*\
  !*** ./src/math/Vector.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vector; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// From Three.js Vector3\n// https://github.com/mrdoob/three.js/blob/cf584a60bdfd24c42eaa81d484533364742bda44/src/math/Vector3.js\n// All credits to them\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector(x, y, z) {\n    _classCallCheck(this, Vector);\n\n    this.x = x || 0;\n    this.y = y || 0;\n    this.z = z || 0;\n  }\n\n  _createClass(Vector, [{\n    key: \"set\",\n    value: function set(x, y, z) {\n      this.x = x;\n      this.y = y;\n      this.z = z;\n      return this;\n    }\n  }, {\n    key: \"setX\",\n    value: function setX(x) {\n      this.x = x;\n      return this;\n    }\n  }, {\n    key: \"setY\",\n    value: function setY(y) {\n      this.y = y;\n      return this;\n    }\n  }, {\n    key: \"setZ\",\n    value: function setZ(z) {\n      this.z = z;\n      return this;\n    }\n  }, {\n    key: \"add\",\n    value: function add(v) {\n      this.x += v.x;\n      this.y += v.y;\n      this.z += v.z;\n      return this;\n    }\n  }, {\n    key: \"addScalar\",\n    value: function addScalar(s) {\n      this.x += s;\n      this.y += s;\n      this.z += s;\n      return this;\n    }\n  }, {\n    key: \"sub\",\n    value: function sub(v) {\n      this.x -= v.x;\n      this.y -= v.y;\n      this.z -= v.z;\n      return this;\n    }\n  }, {\n    key: \"subScalar\",\n    value: function subScalar(s) {\n      this.x -= s;\n      this.y -= s;\n      this.z -= s;\n      return this;\n    }\n  }, {\n    key: \"subVectors\",\n    value: function subVectors(a, b) {\n      this.x = a.x - b.x;\n      this.y = a.y - b.y;\n      this.z = a.z - b.z;\n      return this;\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(v) {\n      this.x *= v.x;\n      this.y *= v.y;\n      this.z *= v.z;\n      return this;\n    }\n  }, {\n    key: \"multiplyScalar\",\n    value: function multiplyScalar(s) {\n      if (isFinite(s)) {\n        this.x *= s;\n        this.y *= s;\n        this.z *= s;\n      } else {\n        this.x = 0;\n        this.y = 0;\n        this.z = 0;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"multiplyVectors\",\n    value: function multiplyVectors(a, b) {\n      this.x = a.x * b.x;\n      this.y = a.y * b.y;\n      this.z = a.z * b.z;\n      return this;\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(v) {\n      this.x /= v.x;\n      this.y /= v.y;\n      this.z /= v.z;\n      return this;\n    }\n  }, {\n    key: \"divideScalar\",\n    value: function divideScalar(s) {\n      return this.multiplyScalar(1 / s);\n    }\n  }, {\n    key: \"lengthSq\",\n    value: function lengthSq() {\n      return this.x * this.x + this.y * this.y + this.z * this.z;\n    }\n  }, {\n    key: \"length\",\n    value: function length() {\n      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);\n    }\n  }, {\n    key: \"setLength\",\n    value: function setLength(length) {\n      return this.multiplyScalar(length / this.length());\n    }\n  }, {\n    key: \"distanceTo\",\n    value: function distanceTo(v) {\n      return Math.sqrt(this.distanceToSquared(v));\n    }\n  }, {\n    key: \"normalize\",\n    value: function normalize() {\n      return this.divideScalar(this.length());\n    }\n  }, {\n    key: \"distanceToSquared\",\n    value: function distanceToSquared(v) {\n      var dx = this.x - v.x;\n      var dy = this.y - v.y;\n      var dz = this.z - v.z;\n      return dx * dx + dy * dy + dz * dz;\n    }\n  }, {\n    key: \"limit\",\n    value: function limit(max) {\n      if (this.lengthSq() > max * max) {\n        this.normalize();\n        this.mult(max);\n      }\n\n      return this;\n    }\n  }, {\n    key: \"copy\",\n    value: function copy(v) {\n      this.x = v.x;\n      this.y = v.y;\n      this.z = v.z;\n      return this;\n    }\n  }]);\n\n  return Vector;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/math/Vector.js?");

/***/ }),

/***/ "./src/math/index.js":
/*!***************************!*\
  !*** ./src/math/index.js ***!
  \***************************/
/*! exports provided: PI, TWO_PI, HALF_PI, QUARTER_PI, toRad, random, sizeFromPercentage, getPercent, isPowerOfTwo, Transform, Point, Rectangle, Matrix, Vector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PI\", function() { return PI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TWO_PI\", function() { return TWO_PI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HALF_PI\", function() { return HALF_PI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"QUARTER_PI\", function() { return QUARTER_PI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRad\", function() { return toRad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sizeFromPercentage\", function() { return sizeFromPercentage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPercent\", function() { return getPercent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isPowerOfTwo\", function() { return isPowerOfTwo; });\n/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ \"./src/math/Point.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Point\", function() { return _Point__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rectangle */ \"./src/math/Rectangle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Rectangle\", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Matrix */ \"./src/math/Matrix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Matrix\", function() { return _Matrix__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Vector */ \"./src/math/Vector.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vector\", function() { return _Vector__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _Transform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transform */ \"./src/math/Transform.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Transform\", function() { return _Transform__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n\n\n\n\n\nvar PI = Math.PI;\nvar TWO_PI = PI * 2;\nvar HALF_PI = PI / 2;\nvar QUARTER_PI = PI / 4;\nvar toRad = PI / 180;\nfunction random(min, max, isFloat) {\n  var random = Math.floor(Math.random() * (max - min)) + min;\n\n  if (isFloat) {\n    random = Math.random() * (max - min) + min;\n  }\n\n  return random;\n}\nfunction sizeFromPercentage(percent, totalSize) {\n  return percent / 100 * totalSize;\n}\nfunction getPercent(section, total) {\n  return section / total * 100;\n}\nfunction isPowerOfTwo(width, height) {\n  return width > 0 && (width & width - 1) === 0 && height > 0 && (height & height - 1) === 0;\n}\n\n\n//# sourceURL=webpack://dddrawings/./src/math/index.js?");

/***/ }),

/***/ "./src/webgl/Renderer.js":
/*!*******************************!*\
  !*** ./src/webgl/Renderer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _utils_RenderTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/RenderTarget */ \"./src/webgl/utils/RenderTarget.js\");\n/* harmony import */ var _utils_ObjectRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ObjectRenderer */ \"./src/webgl/utils/ObjectRenderer.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Renderer =\n/*#__PURE__*/\nfunction () {\n  function Renderer(container, canvasOptions) {\n    _classCallCheck(this, Renderer);\n\n    this.container = container;\n    canvasOptions = canvasOptions || {};\n    this.width = canvasOptions.width || window.innerWidth;\n    this.height = canvasOptions.height || window.innerHeight;\n    this.canvas = document.createElement('canvas');\n    this.canvas.style.position = 'absolute';\n    container.appendChild(this.canvas);\n    var gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl', ctxOptions);\n    this.gl = gl;\n    gl.disable(gl.DEPTH_TEST);\n    gl.disable(gl.CULL_FACE);\n    gl.enable(gl.BLEND);\n    this.renderTarget = new _utils_RenderTarget__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gl, this.width, this.height);\n    this.currentRenderer = new _utils_ObjectRenderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"](gl, this);\n    this.resize(this.width, this.height);\n  }\n\n  _createClass(Renderer, [{\n    key: \"render\",\n    value: function render(object) {\n      object.renderWebGL(this);\n    }\n  }, {\n    key: \"resize\",\n    value: function resize(width, height) {\n      this.width = this.canvas.width = width;\n      this.height = this.canvas.height = height;\n      this.gl.viewport(0, 0, width, height);\n    }\n  }]);\n\n  return Renderer;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/webgl/Renderer.js?");

/***/ }),

/***/ "./src/webgl/Stage.js":
/*!****************************!*\
  !*** ./src/webgl/Stage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Stage; });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math */ \"./src/math/index.js\");\n/* harmony import */ var _math_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/Point */ \"./src/math/Point.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Stage =\n/*#__PURE__*/\nfunction () {\n  function Stage(imgData, renderer, batchSize) {\n    _classCallCheck(this, Stage);\n\n    this.children = [];\n    this.texture = {};\n    this.data = imgData;\n    this.renderer = renderer;\n    this.loadImg(imgData.url);\n    this.setBatchSize(batchSize);\n  }\n\n  _createClass(Stage, [{\n    key: \"setBatchSize\",\n    value: function setBatchSize(batchSize) {\n      var maxBatchSize = 16384;\n      var maxSize = 15000;\n\n      if (batchSize > maxBatchSize) {\n        batchSize = maxBatchSize;\n      }\n\n      if (batchSize > maxSize) {\n        batchSize = maxSize;\n      }\n\n      this.batchSize = batchSize;\n    }\n  }, {\n    key: \"renderWebGL\",\n    value: function renderWebGL(renderer) {\n      renderer.currentRenderer.render(this);\n    }\n  }, {\n    key: \"bindTexture\",\n    value: function bindTexture() {\n      var gl = this.renderer.gl;\n      var texture = this.texture;\n\n      if (!texture.glTexture) {\n        texture.glTexture = gl.createTexture();\n      }\n\n      gl.bindTexture(gl.TEXTURE_2D, texture.glTexture);\n      /*----------  SET ALPHA  ----------*/\n\n      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);\n      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);\n      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.img);\n      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);\n\n      if (texture.mipmap && texture.isPowerOfTwo) {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);\n        gl.generateMipmap(gl.TEXTURE_2D);\n      } else {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);\n      }\n\n      if (!texture.isPowerOfTwo) {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n      } else {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);\n      }\n\n      return true;\n    }\n  }, {\n    key: \"loadImg\",\n    value: function loadImg(url) {\n      this.img = new Image();\n      this.img.onload = this.imgLoaded.bind(this);\n      this.img.src = url;\n    }\n  }, {\n    key: \"imgLoaded\",\n    value: function imgLoaded() {\n      var w = this.img.naturalWidth;\n      var h = this.img.naturalHeight;\n      var texture = {\n        loaded: true,\n        isPowerOfTwo: Object(_math__WEBPACK_IMPORTED_MODULE_0__[\"isPowerOfTwo\"])(w, h)\n      };\n      var frames = [];\n\n      for (var i = 0; i < this.data.frames.length; i++) {\n        var frame = this.data.frames[i];\n        frames.push({\n          width: frame.w,\n          height: frame.h,\n          uvs: [frame.x / w, frame.y / h, (frame.x + frame.w) / w, (frame.y + frame.h) / h]\n        });\n      }\n\n      this.renderer.frames = frames;\n      this.texture = texture;\n      this.bindTexture();\n\n      if (this.data.cb) {\n        this.data.cb();\n      }\n    }\n  }, {\n    key: \"particle\",\n    value: function particle(obj) {\n      obj = obj || {};\n      obj.scale = obj.scale || new _math_Point__WEBPACK_IMPORTED_MODULE_1__[\"default\"](1, 1);\n      obj.alpha = obj.alpha || 1;\n      obj.rotation = obj.rotation || 0;\n      obj.x = obj.x || 0;\n      obj.y = obj.y || 0;\n      obj.frame = obj.frame || 0;\n      this.children.push(obj);\n\n      if (this.children.length > this.batchSize) {\n        this.setBatchSize(this.children.length);\n      }\n\n      return obj;\n    }\n  }]);\n\n  return Stage;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/webgl/Stage.js?");

/***/ }),

/***/ "./src/webgl/index.js":
/*!****************************!*\
  !*** ./src/webgl/index.js ***!
  \****************************/
/*! exports provided: Stage, Webgl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Stage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stage */ \"./src/webgl/Stage.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Stage\", function() { return _Stage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Renderer */ \"./src/webgl/Renderer.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Webgl\", function() { return _Renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n\n\n\n\n//# sourceURL=webpack://dddrawings/./src/webgl/index.js?");

/***/ }),

/***/ "./src/webgl/shaders/particles.fs":
/*!****************************************!*\
  !*** ./src/webgl/shaders/particles.fs ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"precision lowp float;\\n\\nvarying vec2 vTextureCoord;\\nvarying float vAlpha;\\n\\nuniform sampler2D uImage;\\n\\nvoid main(void){\\n  vec4 color = texture2D(uImage, vTextureCoord) * vAlpha;\\n  if (color.a == 0.0) discard;\\n  gl_FragColor = color;\\n}\"\n\n//# sourceURL=webpack://dddrawings/./src/webgl/shaders/particles.fs?");

/***/ }),

/***/ "./src/webgl/shaders/particles.vs":
/*!****************************************!*\
  !*** ./src/webgl/shaders/particles.vs ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"attribute vec2 aVertexPosition;\\nattribute vec2 aTextureCoord;\\nattribute float aAlpha;\\n\\nattribute vec2 aPositionCoord;\\nattribute float aRotation;\\n\\nuniform mat3 projectionMatrix;\\n\\nvarying vec2 vTextureCoord;\\nvarying float vAlpha;\\n\\nvoid main(void){\\n  float cosine = cos(aRotation);\\n  float sine = sin(aRotation);\\n\\n  vec3 v;\\n  v.x = aVertexPosition.x * cosine - aVertexPosition.y * sine;\\n  v.y = aVertexPosition.x * sine + aVertexPosition.y * cosine;\\n  v.z = 1.0;\\n\\n  // Move\\n  v.xy += aPositionCoord;\\n\\n  gl_Position = vec4(projectionMatrix * v, 1.0);\\n\\n  vTextureCoord = aTextureCoord;\\n  vAlpha = aAlpha;\\n}\"\n\n//# sourceURL=webpack://dddrawings/./src/webgl/shaders/particles.vs?");

/***/ }),

/***/ "./src/webgl/utils/ObjectRenderer.js":
/*!*******************************************!*\
  !*** ./src/webgl/utils/ObjectRenderer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ObjectRenderer; });\n/* harmony import */ var _Shader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shader */ \"./src/webgl/utils/Shader.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar ObjectRenderer =\n/*#__PURE__*/\nfunction () {\n  function ObjectRenderer(gl, renderer) {\n    _classCallCheck(this, ObjectRenderer);\n\n    this.renderer = renderer;\n    this.gl = gl;\n    this.start();\n  }\n\n  _createClass(ObjectRenderer, [{\n    key: \"start\",\n    value: function start() {\n      var gl = this.gl;\n      var shader = new _Shader__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gl);\n      this.properties = [// verticesData\n      {\n        attribute: shader.attributes.aVertexPosition,\n        size: 2\n      }, // positionData\n      {\n        attribute: shader.attributes.aPositionCoord,\n        size: 2\n      }, // rotationData\n      {\n        attribute: shader.attributes.aRotation,\n        size: 1\n      }, // uvsData\n      {\n        attribute: shader.attributes.aTextureCoord,\n        size: 2\n      }, // alphaData\n      {\n        attribute: shader.attributes.aAlpha,\n        size: 1\n      }];\n\n      for (var i = 0; i < this.properties.length; i++) {\n        gl.enableVertexAttribArray(i);\n      }\n\n      var m = this.renderer.renderTarget.projectionMatrix;\n      gl.uniformMatrix3fv(shader.uniforms.projectionMatrix._location, false, m.toArray(true));\n    }\n  }, {\n    key: \"render\",\n    value: function render(container) {\n      var texture = container.texture;\n      var children = container.children;\n      var total = children.length;\n      var maxSize = container.maxSize;\n      this.size = container.batchSize;\n      var gl = this.gl;\n\n      if (total === 0) {\n        return;\n      } else if (total > maxSize) {\n        total = maxSize;\n      }\n\n      if (!this.data) {\n        this.initBuffers();\n\n        for (var i = 0; i < this.properties.length; i++) {\n          var property = this.properties[i];\n          gl.vertexAttribPointer(property.attribute, property.size, gl.FLOAT, false, this.stride * 4, property.offset * 4);\n        }\n      }\n\n      this.updateData(children, total);\n      gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.data);\n      gl.drawElements(gl.TRIANGLES, total * 6, gl.UNSIGNED_SHORT, 0);\n    }\n  }, {\n    key: \"initBuffers\",\n    value: function initBuffers() {\n      var gl = this.gl;\n      var dynamicOffset = 0;\n      this.stride = 0;\n\n      for (var i = 0; i < this.properties.length; i++) {\n        var property = this.properties[i];\n        property.offset = dynamicOffset;\n        dynamicOffset += property.size;\n        this.stride += property.size;\n      }\n\n      this.data = new Float32Array(this.size * this.stride * 4);\n      gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());\n      gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);\n      var numIndices = this.size * 6;\n      var indices = new Uint16Array(numIndices);\n\n      for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {\n        indices[i] = j;\n        indices[i + 1] = j + 1;\n        indices[i + 2] = j + 2;\n        indices[i + 3] = j;\n        indices[i + 4] = j + 2;\n        indices[i + 5] = j + 3;\n      }\n\n      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());\n      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);\n    }\n  }, {\n    key: \"updateData\",\n    value: function updateData(children, amount) {\n      var stride = this.stride;\n      var n = 0;\n      var data = this.data;\n      var textures = this.renderer.frames;\n\n      for (var i = 0; i < amount; i++) {\n        var target = children[i];\n        var texture = textures[target.frame];\n        var w = texture.width * target.scale;\n        var h = texture.height * target.scale;\n        var x = target.x;\n        var y = target.y;\n        var r = target.rotation;\n        var uvs = texture.uvs;\n        var a = target.alpha;\n        /*\n          [\n            vertice   pos   rot   uvs    alpha\n            w,h,      x,y,  r,    x,y,   a\n            w,h,      x,y,  r,    x,y,   a\n            w,h,      x,y,  r,    x,y,   a\n            w,h,      x,y,  r,    x,y,   a\n          ]\n        */\n\n        /*----------  Vertex 1  ----------*/\n\n        data[n] = -w;\n        data[++n] = -h; // Size\n\n        data[++n] = x;\n        data[++n] = y; // Pos\n\n        data[++n] = r; // Rotation\n\n        data[++n] = uvs[0];\n        data[++n] = uvs[1]; // Uvs\n\n        data[++n] = a; // Alpha\n\n        /*----------  Vertex 2  ----------*/\n\n        data[++n] = w;\n        data[++n] = -h;\n        data[++n] = x;\n        data[++n] = y;\n        data[++n] = r;\n        data[++n] = uvs[2];\n        data[++n] = uvs[1];\n        data[++n] = a;\n        /*----------  Vertex 3  ----------*/\n\n        data[++n] = w;\n        data[++n] = h;\n        data[++n] = x;\n        data[++n] = y;\n        data[++n] = r;\n        data[++n] = uvs[2];\n        data[++n] = uvs[3];\n        data[++n] = a;\n        /*----------  Vertex 4  ----------*/\n\n        data[++n] = -w;\n        data[++n] = h;\n        data[++n] = x;\n        data[++n] = y;\n        data[++n] = r;\n        data[++n] = uvs[0];\n        data[++n] = uvs[3];\n        data[++n] = a;\n        n++;\n      }\n    }\n  }]);\n\n  return ObjectRenderer;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/webgl/utils/ObjectRenderer.js?");

/***/ }),

/***/ "./src/webgl/utils/RenderTarget.js":
/*!*****************************************!*\
  !*** ./src/webgl/utils/RenderTarget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return RenderTarget; });\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math */ \"./src/math/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar RenderTarget =\n/*#__PURE__*/\nfunction () {\n  function RenderTarget(gl, width, height) {\n    _classCallCheck(this, RenderTarget);\n\n    this.gl = gl;\n    this.size = new _math__WEBPACK_IMPORTED_MODULE_0__[\"Rectangle\"](0, 0, 1, 1);\n    this.projectionMatrix = new _math__WEBPACK_IMPORTED_MODULE_0__[\"Matrix\"]();\n    this.resize(width, height);\n  }\n\n  _createClass(RenderTarget, [{\n    key: \"resize\",\n    value: function resize(width, height) {\n      width = width | 0;\n      height = height | 0;\n\n      if (this.size.width === width && this.size.height === height) {\n        return;\n      }\n\n      this.size.width = width;\n      this.size.height = height;\n      var pm = this.projectionMatrix.identity();\n      pm.a = 2 / this.size.width;\n      pm.d = -2 / this.size.height;\n      pm.tx = -1;\n      pm.ty = 1;\n    }\n  }]);\n\n  return RenderTarget;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/webgl/utils/RenderTarget.js?");

/***/ }),

/***/ "./src/webgl/utils/Shader.js":
/*!***********************************!*\
  !*** ./src/webgl/utils/Shader.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Shader; });\n/* harmony import */ var _shaders_particles_vs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shaders/particles.vs */ \"./src/webgl/shaders/particles.vs\");\n/* harmony import */ var _shaders_particles_vs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_shaders_particles_vs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shaders_particles_fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shaders/particles.fs */ \"./src/webgl/shaders/particles.fs\");\n/* harmony import */ var _shaders_particles_fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shaders_particles_fs__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Shader =\n/*#__PURE__*/\nfunction () {\n  function Shader(gl) {\n    _classCallCheck(this, Shader);\n\n    this.gl = gl;\n    this.uniforms = {\n      projectionMatrix: {}\n    };\n    this.attributes = {};\n    var vertexShader = gl.createShader(gl.VERTEX_SHADER);\n    gl.shaderSource(vertexShader, _shaders_particles_vs__WEBPACK_IMPORTED_MODULE_0___default.a);\n    gl.compileShader(vertexShader);\n    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);\n    gl.shaderSource(fragmentShader, _shaders_particles_fs__WEBPACK_IMPORTED_MODULE_1___default.a);\n    gl.compileShader(fragmentShader);\n    var program = gl.createProgram();\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    gl.linkProgram(program); // clear shader from memory after linking program\n\n    gl.deleteShader(vertexShader);\n    gl.deleteShader(fragmentShader);\n    this.program = program;\n    gl.useProgram(program);\n    this.cacheUniformLocations(['projectionMatrix']);\n    this.cacheAttributeLocations(['aVertexPosition', 'aTextureCoord', 'aAlpha', 'aPositionCoord', 'aRotation']);\n  }\n\n  _createClass(Shader, [{\n    key: \"cacheUniformLocations\",\n    value: function cacheUniformLocations(keys) {\n      for (var i = 0; i < keys.length; ++i) {\n        this.uniforms[keys[i]]._location = this.gl.getUniformLocation(this.program, keys[i]);\n      }\n    }\n  }, {\n    key: \"cacheAttributeLocations\",\n    value: function cacheAttributeLocations(keys) {\n      for (var i = 0; i < keys.length; ++i) {\n        this.attributes[keys[i]] = this.gl.getAttribLocation(this.program, keys[i]);\n      }\n    }\n  }]);\n\n  return Shader;\n}();\n\n\n\n//# sourceURL=webpack://dddrawings/./src/webgl/utils/Shader.js?");

/***/ })

/******/ });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/scss/styles.scss
var styles = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/dddrawings/lib/dddrawings.js
var dddrawings = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/utils.js
var debounceTimer;
function debounce(hold) {
  hold = hold || 250;
  return new Promise(function (resolve, reject) {
    // trick for runing code only when resize ends
    // https://css-tricks.com/snippets/jquery/done-resizing-event/
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      resolve();
    }, hold);
  });
}
// CONCATENATED MODULE: ./src/js/fitText.js
/*!
 * FitText.js 1.0 jQuery free version
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 * Modified by Slawomir Kolodziej http://slawekk.info
 *
 * Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
 */
/* harmony default export */ var fitText = (function (el, kompressor) {
  var settings = {
    minFontSize: -1 / 0,
    maxFontSize: 1 / 0
  };

  function fit(el) {
    var compressor = kompressor || 1;
    el.style.fontSize = Math.max(Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)) + 'px';
  }

  if (el.length) for (var i = 0; i < el.length; i++) {
    fit(el[i]);
  } else fit(el);
  return el;
});
// CONCATENATED MODULE: ./src/js/Resizer.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Resizer_Resizer =
/*#__PURE__*/
function () {
  function Resizer(main) {
    var _this = this;

    _classCallCheck(this, Resizer);

    this.update = function () {
      if (!_this.elements.length) return;

      _this.setParams();

      _this.main.style.width = "".concat(_this.eleW * _this.boxes.length + _this.eleW * _this.elements.length, "px");
      _this.main.style.paddingLeft = "".concat(_this.eleW * 2, "px");

      _this.boxes.forEach(function (box) {
        return box.style.width = "".concat(_this.eleW, "px");
      });

      _this.boxes[1].style.left = "".concat(_this.eleW, "px");

      _this.elements.forEach(function (ele) {
        ele.container.style.width = "".concat(_this.eleW, "px");
        ele.container.style.height = "".concat(_this.eleH, "px");
        fitText(ele.container.querySelector('.descripcion'), 2);
      });

      fitText(_this.boxes[0], 0.3);
      fitText(_this.boxes[1], 2.5);
    };

    this.main = main;
    this.elements = [];
    this.boxes = [document.getElementById('titulo'), document.getElementById('descripcion')];
    this.height_k = 2048;
    this.width_k = 1367;

    window.onresize = function () {
      return debounce().then(_this.update);
    };
  }

  _createClass(Resizer, [{
    key: "bindElements",
    value: function bindElements(elements) {
      this.elements = elements;
    }
  }, {
    key: "setParams",
    value: function setParams() {
      var screenW = Math.min(window.innerWidth, window.outerWidth);
      var screenH = Math.min(window.innerHeight, window.outerHeight);
      this.eleH = screenH;
      this.eleW = Object(dddrawings["sizeFromPercentage"])(Object(dddrawings["getPercent"])(this.eleH, this.height_k), this.width_k);

      if (this.eleW > screenW) {
        this.eleW = screenW;
        this.eleH = Object(dddrawings["sizeFromPercentage"])(Object(dddrawings["getPercent"])(this.eleW, this.width_k), this.height_k);
      }
    }
  }]);

  return Resizer;
}();


// CONCATENATED MODULE: ./src/js/Zoom.js
function Zoom_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Zoom_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Zoom_createClass(Constructor, protoProps, staticProps) { if (protoProps) Zoom_defineProperties(Constructor.prototype, protoProps); if (staticProps) Zoom_defineProperties(Constructor, staticProps); return Constructor; }

var Zoom =
/*#__PURE__*/
function () {
  function Zoom(container, img) {
    var _this = this;

    Zoom_classCallCheck(this, Zoom);

    this.container = container;
    this.img = img;
    this.zooming = false;

    container.onmousemove = function (e) {
      if (!_this.zooming) return;

      _this.getPos(e);
    };

    container.onmouseenter = function () {
      if (!_this.zooming) return;
      _this.img.style.width = "".concat(_this.img.naturalWidth, "px");
      _this.img.style.height = "".concat(_this.img.naturalHeight, "px");
    };

    container.onmouseleave = function () {
      if (!_this.zooming) return;
      _this.img.style.width = "auto";
      _this.img.style.height = "100vh";
      _this.img.style.transform = "translate(".concat(0, "px, ", 0, "px)");
    };

    container.onclick = function (e) {
      _this.zooming = !_this.zooming;

      if (_this.zooming) {
        _this.container.classList.add('zooming');

        _this.img.style.width = "".concat(_this.img.naturalWidth, "px");
        _this.img.style.height = "".concat(_this.img.naturalHeight, "px");

        _this.getPos(e);
      } else {
        _this.container.classList.remove('zooming');

        _this.img.style.width = "auto";
        _this.img.style.height = "100vh";
        _this.img.style.transform = "translate(".concat(0, "px, ", 0, "px)");
      }

      document.getElementById('about').classList.remove('active');
    };
  }

  Zoom_createClass(Zoom, [{
    key: "getPos",
    value: function getPos(e) {
      var rect = this.container.getBoundingClientRect();
      var xStep = (this.img.naturalWidth - rect.width) / rect.width;
      var yStep = (this.img.naturalHeight - rect.height) / rect.height;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      this.img.style.transform = "translate(-".concat(x * xStep, "px, -").concat(y * yStep, "px)");
    }
  }]);

  return Zoom;
}();


// CONCATENATED MODULE: ./src/js/fetch.js
var url = 'https://api.flickr.com/services/rest/?';
var params = {
  method: 'flickr.people.getPublicPhotos',
  user_id: '185741681@N03',
  api_key: '2512f39372e99a27a692abc3bae34fde',
  nojsoncallback: '1',
  // per_page: '10',
  extras: 'o_dims,url_o,url_k,description',
  format: 'json'
};

function buildUrl() {
  return url += Object.keys(params).map(function (key) {
    return "".concat(key, "=").concat(params[key]);
  }).join('&');
}

/* harmony default export */ var fetch = (function (page) {
  params.page = page;
  return new Promise(function (res, rej) {
    var req = new XMLHttpRequest();
    req.overrideMimeType('application/json');
    req.open('GET', buildUrl(), true);

    req.onload = function () {
      if (req.status === 200) {
        res(JSON.parse(req.response).photos);
      } else {
        rej(req.statusText);
      }
    };

    req.send(null);
  });
});
// CONCATENATED MODULE: ./src/js/lazy.js
/* harmony default export */ var lazy = (function (images) {
  function onIntersection(imageEntites) {
    imageEntites.forEach(function (image) {
      if (image.isIntersecting) {
        observer.unobserve(image.target);

        image.target.onload = function () {
          image.target.classList.add('loaded');
        };

        image.target.src = image.target.dataset.src;
      }
    });
  }

  var observer = new IntersectionObserver(onIntersection, {
    // root: document.querySelector('#mask'),
    rootMargin: '0px 0px 0px 0px'
  });
  images.forEach(function (image) {
    return observer.observe(image);
  });
});
// CONCATENATED MODULE: ./src/index.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }






var src_main = document.getElementById('main');
var about = document.getElementById('about');
var aboutBtn = document.getElementById('aboutBtn');
var src_elements = [];
var scrolledLeft = 0;
var counters = document.querySelectorAll('.count');
var inicio = new Date('11/21/2019');
var fin = new Date();
counters.forEach(function (counter) {
  var days = ((fin.getTime() - inicio.getTime()) / (1000 * 3600 * 24) | 0) + 1;
  counter.innerText = days;
});
var resize = new Resizer_Resizer(src_main);

function init(page) {
  fetch(page).then(function (res) {
    res.photo.reverse();
    res.photo.forEach(function (photo) {
      var container = document.createElement('div');
      var img = document.createElement('img');
      var desc = document.createElement('div');
      container.className = 'img';
      img.className = 'lazy';
      desc.className = 'descripcion';
      img.dataset.src = photo.url_k;
      img.setAttribute('alt', photo.title);
      desc.innerText = photo.description._content.replace(/&quot;/g, '"');
      container.style.width = "".concat(resize.eleW, "px");
      new Zoom(container, img);
      container.appendChild(img);
      container.appendChild(desc);
      src_main.appendChild(container);
      src_elements.push({
        container: container,
        img: img
      });
    });

    if (res.page < res.pages) {
      init(++res.page);
    } else {
      var images = _toConsumableArray(document.querySelectorAll('.lazy'));

      resize.bindElements(src_elements);
      resize.update();
      lazy(images);
    }
  });
}

init(1);
src_main.addEventListener('wheel', function (ev) {
  ev.preventDefault();
  var delta = Math.sign(ev.deltaY);
  scrolledLeft += delta * 40;

  if (scrolledLeft < 0) {
    scrolledLeft = 0;
  } else if (scrolledLeft > src_main.clientWidth) {
    scrolledLeft = src_main.clientWidth;
  }

  document.body.scrollLeft = document.documentElement.scrollLeft = scrolledLeft;
}); // main.ontouchstart = e => {
//   e.preventDefault();
//   console.log('touch');
// };

aboutBtn.onclick = function () {
  about.classList.toggle('active');
};

/***/ })
/******/ ]);