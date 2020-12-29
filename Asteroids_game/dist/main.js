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

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module) => {

eval("\n\nfunction canvasLoad() {\n    const canvas = document.getElementById(\"game-canvas\");\n    canvas.height = 500;\n    canvas.width = 500;\n    \n\n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = \"rgb(51, 51, 204)\";\n    ctx.fillRect(0, 0, 500, 500);\n};\n\nmodule.exports = {\n    canvasLoad,\n}\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(optionsHash) { \n \n        this.pos = optionsHash[\"pos\"]; // [x,y]\n        this.vel = optionsHash[\"vel\"]; \n        this.radius = optionsHash[\"radius\"]; // integer\n        this.color = optionsHash[\"color\"];\n        \n};\n\n\nMovingObject.prototype.draw = function(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI );\n    ctx.stokeStyle = \"rgb(102, 153, 153)\";\n    // ctx.lineWidth\n    ctx.stroke();\n    ctx.fillStyle = \"rgb(102, 153, 153)\";\n    ctx.fill();\n}\n\n\nmodule.exports = {\n    MovingObject,\n}\n\nconst mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 20,\n    color: \"#00FF00\"\n  });\n\n//   console.log(mo);\n\n//# sourceURL=webpack:///./src/moving_object.js?");

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
eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\nwindow.MovingObject = MovingObject.MovingObject;\n\ndocument.addEventListener(\"DOMContentLoaded\", function(){\n    GameView.canvasLoad();\n});\n\n\nconsole.log(\"webpack is working!\")\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;