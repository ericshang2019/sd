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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let sum=__webpack_require__(/*! ./mod */ \"./src/mod.js\");\r\nlet mod2=__webpack_require__(/*! ./mod2 */ \"./src/mod2.js\");\r\nlet mod3=__webpack_require__(/*! ./mod3 */ \"./src/mod3.js\");\r\nfunction helloworld(){\r\n    console.log('helloworld');\r\n}\r\nhelloworld();\r\nsum(1,2);\r\nmod2.finn();\r\nmod3.nina();\r\n\r\nvar module = {\r\n    exports: {}\r\n}\r\nfunction test(module,exports){\r\n    module={name:'finn'};\r\n}\r\ntest(module,module.exports);\r\nconsole.log(module.exports);\r\n\r\n  \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/mod.js":
/*!********************!*\
  !*** ./src/mod.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function sum(a,b){\r\n    console.log(a+b);\r\n}\r\nmodule.exports=sum;\n\n//# sourceURL=webpack:///./src/mod.js?");

/***/ }),

/***/ "./src/mod2.js":
/*!*********************!*\
  !*** ./src/mod2.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("let mod3=__webpack_require__(/*! ./mod3 */ \"./src/mod3.js\");\r\nexports.finn=function(){\r\n    console.log('i am finn');\r\n    mod3.nina()\r\n    \r\n}\n\n//# sourceURL=webpack:///./src/mod2.js?");

/***/ }),

/***/ "./src/mod3.js":
/*!*********************!*\
  !*** ./src/mod3.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.nina=function(){\r\n    console.log('i am finn');\r\n    \r\n}\n\n//# sourceURL=webpack:///./src/mod3.js?");

/***/ })

/******/ });