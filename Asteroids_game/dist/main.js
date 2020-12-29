/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\nfunction Asteroid(position) {\n\n    const asteroidProperties = {\n        pos: position,\n        radius: 15,\n        color: \"black\",\n        vel: Util.randomVec(500),\n    }\n\n    Util.inherits(Asteroid, MovingObject)\n\n    new MovingObject(asteroidProperties);\n}\n\nmodule.exports = Asteroid\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ ((module) => {

eval("function canvasLoad() {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 500;\n    canvas.width = 500;\n\n\n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = \"rgb(51, 51, 204)\";\n    ctx.fillRect(0, 0, 500, 500);\n};\n\nmodule.exports = {\n    canvasLoad,\n}\n\n//# sourceURL=webpack:///./src/canvas.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(optionsHash) { \n \n        this.pos = optionsHash[\"pos\"]; // [x,y]\n        this.vel = optionsHash[\"vel\"]; \n        this.radius = optionsHash[\"radius\"]; // integer\n        this.color = optionsHash[\"color\"];\n        \n};\n\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI );\n    ctx.stokeStyle = \"rgb(102, 153, 153)\";\n    // ctx.lineWidth\n    ctx.stroke();\n    ctx.fillStyle = \"rgb(102, 153, 153)\";\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function(){\n    const newPosX = this.pos[0] + this.vel[0]; \n    const newPosY = this.pos[1] + this.vel[1];\n    this.pos = [newPosX, newPosY];\n}\n\n\nmodule.exports = MovingObject\n\n\n//   console.log(mo);\n// const mo = new MovingObject({\n//     pos: [30, 30],\n//     vel: [10, 10],\n//     radius: 5,\n//     color: \"#00FF00\"\n//   });\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((module) => {

eval("function Util() {}\n\nUtil.inherits = function(childClass, parentClass) {\n            function Surroget() {};\n            Surroget.prototype = parentClass.prototype;\n            childClass.prototype = new Surroget();\n            childClass.prototype.constructor = childClass;\n    }\n\nUtil.randomVec = function(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    }\n    \nUtil.scale = function(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n\n\nmodule.exports = Util\n\n// const Util = {\n//     inherits(childClass, parentClass) {\n//         function Surroget() {};\n//         Surroget.prototype = parentClass.prototype;\n//         childClass.prototype = new Surroget();\n//         childClass.prototype.constructor = childClass;\n//     },\n\n//     randomVec(length) {\n//         const deg = 2 * Math.PI * Math.random();\n//         return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n//     },\n    \n//     scale(vec, m) {\n//         return [vec[0] * m, vec[1] * m];\n//     }\n// };\n\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst canvas = __webpack_require__(/*! ./canvas.js */ \"./src/canvas.js\");\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\n// remove after testing\n// window.MovingObject = MovingObject;\nWindow.Asteroid = Asteroid;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    canvas.canvasLoad();\n});\n\n\nconsole.log(\"webpack is working!\")\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;