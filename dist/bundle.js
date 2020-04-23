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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/entities/common.ts":
/*!********************************!*\
  !*** ./app/entities/common.ts ***!
  \********************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());



/***/ }),

/***/ "./app/entities/player.ts":
/*!********************************!*\
  !*** ./app/entities/player.ts ***!
  \********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _entities_rocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/rocket */ "./app/entities/rocket.ts");
/* harmony import */ var _entities_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/common */ "./app/entities/common.ts");


var Player = /** @class */ (function () {
    function Player(drawService) {
        this.rockets = [];
        this.size = 50;
        this.speed = 3;
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](100, 300);
        this.drawService = drawService;
    }
    Player.prototype.draw = function () {
        this.drawService.drawSquare(this.position.x, this.position.y, this.size);
        this.rockets = this.rockets.filter(function (rocket) { return !rocket.isDestroyed; });
        for (var _i = 0, _a = this.rockets; _i < _a.length; _i++) {
            var rocket = _a[_i];
            rocket.draw();
        }
    };
    Player.prototype.moveUp = function () {
        this.position.y -= this.speed;
    };
    Player.prototype.moveDown = function () {
        this.position.y += this.speed;
    };
    Player.prototype.moveLeft = function () {
        this.position.x -= this.speed;
    };
    Player.prototype.moveRight = function () {
        this.position.x += this.speed;
    };
    Player.prototype.fire = function () {
        var startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](this.position.x + this.size / 2, this.position.y);
        this.rockets.push(new _entities_rocket__WEBPACK_IMPORTED_MODULE_0__["Rocket"](startPosition, this.drawService));
    };
    return Player;
}());



/***/ }),

/***/ "./app/entities/rocket.ts":
/*!********************************!*\
  !*** ./app/entities/rocket.ts ***!
  \********************************/
/*! exports provided: Rocket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rocket", function() { return Rocket; });
/* harmony import */ var _entities_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/common */ "./app/entities/common.ts");

var Rocket = /** @class */ (function () {
    function Rocket(startPosition, drawService) {
        var _this = this;
        this.speed = 5;
        this.startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.isDestroyed = false;
        this.drawService = drawService;
        var interval = setInterval(function () {
            if (_this.position.y < 0) {
                clearInterval(interval);
            }
            requestAnimationFrame(function () { return _this.moveUp(); });
        }, 1000 / 60);
    }
    Rocket.prototype.destroy = function () {
        this.isDestroyed = true;
    };
    Rocket.prototype.draw = function () {
        if (this.isDestroyed) {
            return;
        }
        this.drawService.fillCircle(this.position.x, this.position.y, 10, 'blue');
        if (this.startPosition.y - this.position.y > 200) {
            this.isDestroyed = true;
        }
    };
    Rocket.prototype.moveUp = function () {
        this.position.y -= this.speed;
    };
    return Rocket;
}());



/***/ }),

/***/ "./app/index.ts":
/*!**********************!*\
  !*** ./app/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_draw_draw_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/draw/draw-service */ "./app/services/draw/draw-service.ts");
/* harmony import */ var _services_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/keyboard-events-controller */ "./app/services/keyboard-events-controller.ts");
/* harmony import */ var _entities_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/player */ "./app/entities/player.ts");



var App = (function (doc, win) {
    var tactInterval = 1000 / 60;
    function getCanvas(canvasSize) {
        var canvas = doc.getElementById('gameAreaCanvas');
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        return canvas;
    }
    var canvasSize = 500;
    var canvas = getCanvas(canvasSize);
    var drawService = new _services_draw_draw_service__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
    var player = new _entities_player__WEBPACK_IMPORTED_MODULE_2__["Player"](drawService);
    var left = 37;
    var up = 38;
    var right = 39;
    var down = 40;
    var space = 32;
    var keyboardEventsController = new _services_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_1__["default"]();
    doc.addEventListener('keydown', function (event) {
        keyboardEventsController.UpdateKeyState(event.keyCode, true);
    });
    doc.addEventListener('keyup', function (event) {
        keyboardEventsController.UpdateKeyState(event.keyCode, false);
    });
    setInterval(function () {
        win.requestAnimationFrame(function () {
            // drawService.drawCircle(circleX, circleY, 15);
            var squareSize = 50;
            var getCoordinateValue = function (value) {
                if (value <= 0) {
                    return 0;
                }
                if (value + squareSize >= canvasSize) {
                    return canvasSize - squareSize;
                }
                return value;
            };
            drawService.clear();
            if (keyboardEventsController.IsPressed(left)) {
                player.moveLeft();
            }
            if (keyboardEventsController.IsPressed(right)) {
                player.moveRight();
            }
            if (keyboardEventsController.IsPressed(up)) {
                player.moveUp();
            }
            if (keyboardEventsController.IsPressed(down)) {
                player.moveDown();
            }
            if (keyboardEventsController.IsPressed(space)) {
                player.fire();
            }
            player.draw();
        });
    }, tactInterval);
    //     // console.log(event);
    //     switch(event.keyCode) {
    //         case right: 
    //             player.moveRight();
    //             break;
    //         case left: 
    //             player.moveLeft();
    //             break;
    //         case up: 
    //             player.moveUp();
    //             break;
    //         case down: 
    //             player.moveDown();
    //             break;
    //         case space: 
    //             player.fire();
    //             break;
    //         default:
    //             return;
    //     }
    // });
    // setInterval(() => {
    //     win.requestAnimationFrame(drawRotatedLine);
    // }, 50)
    // function drawRotatedLine(drawService){ //TODO: add params
    //     drawService.clear();
    //     ctx.translate(225, 225);
    //     ctx.rotate(0.05 * Math.PI); 
    //     ctx.translate(-225, -225);
    //     drawService.drawLine(200, 200, 250, 250);  
    // }
})(document, window);


/***/ }),

/***/ "./app/services/draw/draw-service.ts":
/*!*******************************************!*\
  !*** ./app/services/draw/draw-service.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var DrawService = /** @class */ (function () {
    function DrawService(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    DrawService.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    DrawService.prototype.fill = function (color) {
        this.ctx.fillStyle = color;
        this.drawRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fill();
    };
    DrawService.prototype.drawLine = function (x1, y1, x2, y2) {
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.closePath();
    };
    DrawService.prototype.drawSquare = function (x, y, sideSize) {
        this.drawRect(x, y, sideSize, sideSize);
        this.ctx.stroke();
    };
    DrawService.prototype.drawRect = function (x, y, width, height) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + width, y);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.lineTo(x, y + height);
        this.ctx.lineTo(x, y);
        this.ctx.closePath();
    };
    DrawService.prototype.drawCircle = function (x, y, r) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.stroke();
    };
    DrawService.prototype.fillCircle = function (x, y, r, color) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, r, 0, 2 * Math.PI);
        this.ctx.fillStyle = color;
        var fillRule = 'nonzero';
        this.ctx.fill(fillRule);
    };
    return DrawService;
}());
/* harmony default export */ __webpack_exports__["default"] = (DrawService);


/***/ }),

/***/ "./app/services/keyboard-events-controller.ts":
/*!****************************************************!*\
  !*** ./app/services/keyboard-events-controller.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var KeyState = /** @class */ (function () {
    function KeyState(keyCode, pressed) {
        this.keyCode = keyCode;
        this.pressed = pressed;
    }
    return KeyState;
}());
var KeyboardEventsController = /** @class */ (function () {
    function KeyboardEventsController() {
        this.left = 37;
        this.up = 38;
        this.right = 39;
        this.down = 40;
        this.space = 32;
        this.keyStates = [];
    }
    KeyboardEventsController.prototype.UpdateKeyState = function (keyCode, isPressed) {
        var keyState = this.GetKeyState(keyCode);
        if (keyState) {
            keyState.pressed = isPressed;
        }
        else {
            this.keyStates.push(new KeyState(keyCode, isPressed));
        }
    };
    KeyboardEventsController.prototype.IsPressed = function (keyCode) {
        var keyState = this.GetKeyState(keyCode);
        return keyState ? keyState.pressed : false;
    };
    KeyboardEventsController.prototype.GetKeyState = function (keyCode) {
        var results = this.keyStates.filter(function (ks) { return ks.keyCode == keyCode; });
        if (!results.length) {
            return null;
        }
        return results[0];
    };
    return KeyboardEventsController;
}());
/* harmony default export */ __webpack_exports__["default"] = (KeyboardEventsController);
;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW50aXRpZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL2FwcC9lbnRpdGllcy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMva2V5Ym9hcmQtZXZlbnRzLWNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNnQjs7Ozs7Ozs7Ozs7OztBQ1BqQjtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0RBQVk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsNEJBQTRCLEVBQUU7QUFDNUYsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHNEQUFZO0FBQzVDLDhCQUE4Qix1REFBTTtBQUNwQztBQUNBO0FBQ0EsQ0FBQztBQUNpQjs7Ozs7Ozs7Ozs7OztBQ3BDbEI7QUFBQTtBQUFBO0FBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNEQUFZO0FBQzdDLDRCQUE0QixzREFBWTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsdUJBQXVCLEVBQUU7QUFDeEUsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2lCOzs7Ozs7Ozs7Ozs7O0FDakNsQjtBQUFBO0FBQUE7QUFBQTtBQUF1RDtBQUNzQjtBQUNsQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtRUFBVztBQUNyQyxxQkFBcUIsdURBQU07QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qyw0RUFBd0I7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSLDZDQUE2QztBQUM3QztBQUNBO0FBQ0Esc0M7QUFDQTtBQUNBLG9EO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDMUZEO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9DM0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw4QkFBOEIsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsdUZBQXdCLEVBQUM7QUFDeEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHNcIik7XG4iLCJ2YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvaW50O1xyXG59KCkpO1xyXG5leHBvcnQgeyBQb2ludCB9O1xyXG4iLCJpbXBvcnQgeyBSb2NrZXQgfSBmcm9tICcuLi9lbnRpdGllcy9yb2NrZXQnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXllcihkcmF3U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucm9ja2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IDUwO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KDEwMCwgMzAwKTtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5kcmF3U3F1YXJlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLnNpemUpO1xyXG4gICAgICAgIHRoaXMucm9ja2V0cyA9IHRoaXMucm9ja2V0cy5maWx0ZXIoZnVuY3Rpb24gKHJvY2tldCkgeyByZXR1cm4gIXJvY2tldC5pc0Rlc3Ryb3llZDsgfSk7XHJcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRoaXMucm9ja2V0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgdmFyIHJvY2tldCA9IF9hW19pXTtcclxuICAgICAgICAgICAgcm9ja2V0LmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplIC8gMiwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLnJvY2tldHMucHVzaChuZXcgUm9ja2V0KHN0YXJ0UG9zaXRpb24sIHRoaXMuZHJhd1NlcnZpY2UpKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxheWVyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBQbGF5ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbnZhciBSb2NrZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSb2NrZXQoc3RhcnRQb3NpdGlvbiwgZHJhd1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSA1O1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgICAgIHZhciBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKF90aGlzLnBvc2l0aW9uLnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMubW92ZVVwKCk7IH0pO1xyXG4gICAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICB9XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUm9ja2V0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5maWxsQ2lyY2xlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAxMCwgJ2JsdWUnKTtcclxuICAgICAgICBpZiAodGhpcy5zdGFydFBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkgPiAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFJvY2tldC5wcm90b3R5cGUubW92ZVVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb2NrZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFJvY2tldCB9O1xyXG4iLCJpbXBvcnQgRHJhd1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZSc7XHJcbmltcG9ydCBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgZnJvbSAnLi9zZXJ2aWNlcy9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vZW50aXRpZXMvcGxheWVyJztcclxudmFyIEFwcCA9IChmdW5jdGlvbiAoZG9jLCB3aW4pIHtcclxuICAgIHZhciB0YWN0SW50ZXJ2YWwgPSAxMDAwIC8gNjA7XHJcbiAgICBmdW5jdGlvbiBnZXRDYW52YXMoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVBcmVhQ2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzU2l6ZTtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzU2l6ZTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhbnZhc1NpemUgPSA1MDA7XHJcbiAgICB2YXIgY2FudmFzID0gZ2V0Q2FudmFzKGNhbnZhc1NpemUpO1xyXG4gICAgdmFyIGRyYXdTZXJ2aWNlID0gbmV3IERyYXdTZXJ2aWNlKGNhbnZhcyk7XHJcbiAgICB2YXIgcGxheWVyID0gbmV3IFBsYXllcihkcmF3U2VydmljZSk7XHJcbiAgICB2YXIgbGVmdCA9IDM3O1xyXG4gICAgdmFyIHVwID0gMzg7XHJcbiAgICB2YXIgcmlnaHQgPSAzOTtcclxuICAgIHZhciBkb3duID0gNDA7XHJcbiAgICB2YXIgc3BhY2UgPSAzMjtcclxuICAgIHZhciBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKCk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5VcGRhdGVLZXlTdGF0ZShldmVudC5rZXlDb2RlLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLlVwZGF0ZUtleVN0YXRlKGV2ZW50LmtleUNvZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHdpbi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBkcmF3U2VydmljZS5kcmF3Q2lyY2xlKGNpcmNsZVgsIGNpcmNsZVksIDE1KTtcclxuICAgICAgICAgICAgdmFyIHNxdWFyZVNpemUgPSA1MDtcclxuICAgICAgICAgICAgdmFyIGdldENvb3JkaW5hdGVWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSArIHNxdWFyZVNpemUgPj0gY2FudmFzU2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW52YXNTaXplIC0gc3F1YXJlU2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZHJhd1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgaWYgKGtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQobGVmdCkpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5tb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKHJpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKHVwKSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLm1vdmVVcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKGRvd24pKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIubW92ZURvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoa2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChzcGFjZSkpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5maXJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheWVyLmRyYXcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sIHRhY3RJbnRlcnZhbCk7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgLy8gICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgcmlnaHQ6IFxyXG4gICAgLy8gICAgICAgICAgICAgcGxheWVyLm1vdmVSaWdodCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgbGVmdDogXHJcbiAgICAvLyAgICAgICAgICAgICBwbGF5ZXIubW92ZUxlZnQoKTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIHVwOiBcclxuICAgIC8vICAgICAgICAgICAgIHBsYXllci5tb3ZlVXAoKTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlIGRvd246IFxyXG4gICAgLy8gICAgICAgICAgICAgcGxheWVyLm1vdmVEb3duKCk7XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSBzcGFjZTogXHJcbiAgICAvLyAgICAgICAgICAgICBwbGF5ZXIuZmlyZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAvLyAgICAgd2luLnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3Um90YXRlZExpbmUpO1xyXG4gICAgLy8gfSwgNTApXHJcbiAgICAvLyBmdW5jdGlvbiBkcmF3Um90YXRlZExpbmUoZHJhd1NlcnZpY2UpeyAvL1RPRE86IGFkZCBwYXJhbXNcclxuICAgIC8vICAgICBkcmF3U2VydmljZS5jbGVhcigpO1xyXG4gICAgLy8gICAgIGN0eC50cmFuc2xhdGUoMjI1LCAyMjUpO1xyXG4gICAgLy8gICAgIGN0eC5yb3RhdGUoMC4wNSAqIE1hdGguUEkpOyBcclxuICAgIC8vICAgICBjdHgudHJhbnNsYXRlKC0yMjUsIC0yMjUpO1xyXG4gICAgLy8gICAgIGRyYXdTZXJ2aWNlLmRyYXdMaW5lKDIwMCwgMjAwLCAyNTAsIDI1MCk7ICBcclxuICAgIC8vIH1cclxufSkoZG9jdW1lbnQsIHdpbmRvdyk7XHJcbiIsInZhciBEcmF3U2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdTZXJ2aWNlKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdMaW5lID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdTcXVhcmUgPSBmdW5jdGlvbiAoeCwgeSwgc2lkZVNpemUpIHtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KHgsIHksIHNpZGVTaXplLCBzaWRlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB3aWR0aCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZmlsbENpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdmFyIGZpbGxSdWxlID0gJ25vbnplcm8nO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoZmlsbFJ1bGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEcmF3U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgRHJhd1NlcnZpY2U7XHJcbiIsInZhciBLZXlTdGF0ZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleVN0YXRlKGtleUNvZGUsIHByZXNzZWQpIHtcclxuICAgICAgICB0aGlzLmtleUNvZGUgPSBrZXlDb2RlO1xyXG4gICAgICAgIHRoaXMucHJlc3NlZCA9IHByZXNzZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gS2V5U3RhdGU7XHJcbn0oKSk7XHJcbnZhciBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gMzc7XHJcbiAgICAgICAgdGhpcy51cCA9IDM4O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSAzOTtcclxuICAgICAgICB0aGlzLmRvd24gPSA0MDtcclxuICAgICAgICB0aGlzLnNwYWNlID0gMzI7XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuICAgIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUuVXBkYXRlS2V5U3RhdGUgPSBmdW5jdGlvbiAoa2V5Q29kZSwgaXNQcmVzc2VkKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAga2V5U3RhdGUucHJlc3NlZCA9IGlzUHJlc3NlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGVzLnB1c2gobmV3IEtleVN0YXRlKGtleUNvZGUsIGlzUHJlc3NlZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIucHJvdG90eXBlLklzUHJlc3NlZCA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICByZXR1cm4ga2V5U3RhdGUgPyBrZXlTdGF0ZS5wcmVzc2VkIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5HZXRLZXlTdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLmtleVN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKGtzKSB7IHJldHVybiBrcy5rZXlDb2RlID09IGtleUNvZGU7IH0pO1xyXG4gICAgICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcjtcclxuO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9