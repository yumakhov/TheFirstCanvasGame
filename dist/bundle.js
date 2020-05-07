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
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](100, 300);
        this.width = 50;
        this.height = 50;
        this.isKilled = false;
        this.speed = 3;
        this.timeToRecharge = 0;
        this.drawService = drawService;
    }
    Player.prototype.getPosition = function () {
        return this.position;
    };
    Player.prototype.isAlive = function () {
        return !this.isKilled;
    };
    Player.prototype.onTargetCollision = function () {
        this.isKilled = true;
    };
    Player.prototype.draw = function () {
        if (this.timeToRecharge > 0) {
            this.timeToRecharge -= 10;
        }
        this.drawService.drawSquare(this.position.x, this.position.y, this.width);
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
        if (this.timeToRecharge > 0) {
            return;
        }
        this.timeToRecharge = 100;
        var startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](this.position.x + this.width / 2, this.position.y);
        return new _entities_rocket__WEBPACK_IMPORTED_MODULE_0__["Rocket"](startPosition, this.drawService);
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
        this.startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.width = 20;
        this.height = 20;
        this.speed = 5;
        this.isDestroyed = false;
        this.drawService = drawService;
        // let interval = setInterval(() => {
        //     if(this.position.y < 0) {
        //         clearInterval(interval);
        //     }
        //     requestAnimationFrame(() => this.moveUp());
        // }, 1000/60)
    }
    Rocket.prototype.destroy = function () {
        this.isDestroyed = true;
    };
    Rocket.prototype.draw = function () {
        if (this.isDestroyed) {
            return;
        }
        this.drawService.fillCircle(this.position.x, this.position.y, this.width / 2, 'blue');
        if (this.startPosition.y - this.position.y > 200) {
            this.isDestroyed = true;
        }
        this.moveUp();
    };
    Rocket.prototype.moveUp = function () {
        if (this.isDestroyed) {
            return;
        }
        this.position.y -= this.speed;
    };
    return Rocket;
}());



/***/ }),

/***/ "./app/entities/target.ts":
/*!********************************!*\
  !*** ./app/entities/target.ts ***!
  \********************************/
/*! exports provided: Target */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return Target; });
/* harmony import */ var _entities_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/common */ "./app/entities/common.ts");

var Target = /** @class */ (function () {
    function Target(startPosition, drawService) {
        var _this = this;
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.width = 20;
        this.height = 20;
        this.speed = 1;
        this.drawService = drawService;
        var interval = setInterval(function () {
            if (_this.position.y < 0) {
                clearInterval(interval);
            }
            requestAnimationFrame(function () { return _this.moveDown(); });
        }, 1000 / 60);
    }
    Target.prototype.getPosition = function () {
        return this.position;
    };
    Target.prototype.draw = function () {
        this.drawService.drawSquare(this.position.x, this.position.y, this.width);
    };
    Target.prototype.moveDown = function () {
        this.position.y += this.speed;
    };
    return Target;
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
/* harmony import */ var _services_game_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/game-manager */ "./app/services/game-manager.ts");
/* harmony import */ var _services_draw_draw_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/draw/draw-service */ "./app/services/draw/draw-service.ts");
/* harmony import */ var _services_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/keyboard-events-controller */ "./app/services/keyboard-events-controller.ts");



var App = (function (doc) {
    function getCanvas(canvasSize) {
        var canvas = doc.getElementById('gameAreaCanvas');
        canvas.width = canvasSize;
        canvas.height = canvasSize;
        return canvas;
    }
    var canvasSize = 500;
    var canvas = getCanvas(canvasSize);
    var drawService = new _services_draw_draw_service__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
    var keyboardEventsController = new _services_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_2__["KeyboardEventsController"]();
    doc.addEventListener('keydown', function (event) {
        keyboardEventsController.UpdateKeyState(event.keyCode, true);
    });
    doc.addEventListener('keyup', function (event) {
        keyboardEventsController.UpdateKeyState(event.keyCode, false);
    });
    var gameManager = new _services_game_manager__WEBPACK_IMPORTED_MODULE_0__["default"](drawService, keyboardEventsController);
    gameManager.start();
})(document);


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

/***/ "./app/services/game-manager.ts":
/*!**************************************!*\
  !*** ./app/services/game-manager.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entities_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/player */ "./app/entities/player.ts");
/* harmony import */ var _entities_target__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/target */ "./app/entities/target.ts");
/* harmony import */ var _entities_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/common */ "./app/entities/common.ts");
/* harmony import */ var _keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyboard-events-controller */ "./app/services/keyboard-events-controller.ts");




var GameManager = /** @class */ (function () {
    function GameManager(drawService, keyboardEventsController) {
        this.drawService = drawService;
        this.keyboardEventsController = keyboardEventsController;
        this.targets = new Array();
        this.rockets = new Array();
    }
    GameManager.prototype.start = function () {
        var _this = this;
        this.player = new _entities_player__WEBPACK_IMPORTED_MODULE_0__["Player"](this.drawService);
        this.targets.push(new _entities_target__WEBPACK_IMPORTED_MODULE_1__["Target"](new _entities_common__WEBPACK_IMPORTED_MODULE_2__["Point"](20, 0), this.drawService));
        this.targets.push(new _entities_target__WEBPACK_IMPORTED_MODULE_1__["Target"](new _entities_common__WEBPACK_IMPORTED_MODULE_2__["Point"](80, 0), this.drawService));
        this.targets.push(new _entities_target__WEBPACK_IMPORTED_MODULE_1__["Target"](new _entities_common__WEBPACK_IMPORTED_MODULE_2__["Point"](120, 0), this.drawService));
        var tactInterval = 1000 / 60;
        var intervalId = setInterval(function () {
            if (!_this.player.isAlive()) {
                alert("GAME OVER");
                clearInterval(intervalId);
                _this.drawService.clear();
                return;
            }
            window.requestAnimationFrame(function () {
                // drawService.drawCircle(circleX, circleY, 15);
                var squareSize = 50;
                // let getCoordinateValue = (value: number) => {
                //     if (value <= 0) {
                //         return 0;
                //     }
                //     if (value + squareSize >= canvasSize){
                //         return canvasSize - squareSize;
                //     }
                //     return value;
                // };
                _this.drawService.clear();
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].left)) {
                    _this.player.moveLeft();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].right)) {
                    _this.player.moveRight();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].up)) {
                    _this.player.moveUp();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].down)) {
                    _this.player.moveDown();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].space)) {
                    var rocket = _this.player.fire();
                    if (rocket) {
                        _this.rockets.push(rocket);
                    }
                }
                _this.player.draw();
                for (var _i = 0, _a = _this.targets; _i < _a.length; _i++) {
                    var target = _a[_i];
                    target.draw();
                    if (target.getPosition().y >= _this.player.getPosition().y) {
                        _this.player.onTargetCollision();
                    }
                }
                _this.rockets = _this.rockets.filter(function (rocket) { return !rocket.isDestroyed; });
                for (var _b = 0, _c = _this.rockets; _b < _c.length; _b++) {
                    var rocket = _c[_b];
                    rocket.draw();
                }
            });
        }, tactInterval);
    };
    return GameManager;
}());
/* harmony default export */ __webpack_exports__["default"] = (GameManager);


/***/ }),

/***/ "./app/services/keyboard-events-controller.ts":
/*!****************************************************!*\
  !*** ./app/services/keyboard-events-controller.ts ***!
  \****************************************************/
/*! exports provided: KeyboardButtons, KeyboardEventsController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardButtons", function() { return KeyboardButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyboardEventsController", function() { return KeyboardEventsController; });
var KeyState = /** @class */ (function () {
    function KeyState(keyCode, pressed) {
        this.keyCode = keyCode;
        this.pressed = pressed;
    }
    return KeyState;
}());
var KeyboardButtons = /** @class */ (function () {
    function KeyboardButtons() {
    }
    KeyboardButtons.left = 37;
    KeyboardButtons.up = 38;
    KeyboardButtons.right = 39;
    KeyboardButtons.down = 40;
    KeyboardButtons.space = 32;
    return KeyboardButtons;
}());

var KeyboardEventsController = /** @class */ (function () {
    function KeyboardEventsController() {
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

;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW50aXRpZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL2FwcC9lbnRpdGllcy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL3RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2RyYXcvZHJhdy1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9nYW1lLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2tleWJvYXJkLWV2ZW50cy1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7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QTZELDJFQUFlO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQkFBZ0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLDRCQUE0QixFQUFFO0FBQ3RHLG9EQUFvRCxnQkFBZ0I7QUFDcEU7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNjLDBFQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUMxRTNCO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzBCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCw4QkFBOEIsRUFBRTtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ21DO0FBQ3BDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXBwL2luZGV4LnRzXCIpO1xuIiwidmFyIFBvaW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuICAgIHJldHVybiBQb2ludDtcclxufSgpKTtcclxuZXhwb3J0IHsgUG9pbnQgfTtcclxuIiwiaW1wb3J0IHsgUm9ja2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvcm9ja2V0JztcclxuaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbnZhciBQbGF5ZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQbGF5ZXIoZHJhd1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludCgxMDAsIDMwMCk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDUwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTA7XHJcbiAgICAgICAgdGhpcy5pc0tpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMudGltZVRvUmVjaGFyZ2UgPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UgPSBkcmF3U2VydmljZTtcclxuICAgIH1cclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0tpbGxlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm9uVGFyZ2V0Q29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNLaWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lVG9SZWNoYXJnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lVG9SZWNoYXJnZSAtPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5kcmF3U3F1YXJlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoKTtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZUxlZnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVUb1JlY2hhcmdlID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZVRvUmVjaGFyZ2UgPSAxMDA7XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHJldHVybiBuZXcgUm9ja2V0KHN0YXJ0UG9zaXRpb24sIHRoaXMuZHJhd1NlcnZpY2UpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxudmFyIFJvY2tldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJvY2tldChzdGFydFBvc2l0aW9uLCBkcmF3U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gNTtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgICAgIC8vIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZVVwKCkpO1xyXG4gICAgICAgIC8vIH0sIDEwMDAvNjApXHJcbiAgICB9XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUm9ja2V0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5maWxsQ2lyY2xlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoIC8gMiwgJ2JsdWUnKTtcclxuICAgICAgICBpZiAodGhpcy5zdGFydFBvc2l0aW9uLnkgLSB0aGlzLnBvc2l0aW9uLnkgPiAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubW92ZVVwKCk7XHJcbiAgICB9O1xyXG4gICAgUm9ja2V0LnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUm9ja2V0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBSb2NrZXQgfTtcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbnZhciBUYXJnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUYXJnZXQoc3RhcnRQb3NpdGlvbiwgZHJhd1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucG9zaXRpb24ueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5tb3ZlRG93bigpOyB9KTtcclxuICAgICAgICB9LCAxMDAwIC8gNjApO1xyXG4gICAgfVxyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5kcmF3U3F1YXJlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoKTtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYXJnZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFRhcmdldCB9O1xyXG4iLCJpbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9zZXJ2aWNlcy9nYW1lLW1hbmFnZXInO1xyXG5pbXBvcnQgRHJhd1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZSc7XHJcbmltcG9ydCB7IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciB9IGZyb20gJy4vc2VydmljZXMva2V5Ym9hcmQtZXZlbnRzLWNvbnRyb2xsZXInO1xyXG52YXIgQXBwID0gKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgIGZ1bmN0aW9uIGdldENhbnZhcyhjYW52YXNTaXplKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvYy5nZXRFbGVtZW50QnlJZCgnZ2FtZUFyZWFDYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXNTaXplO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNTaXplO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FudmFzU2l6ZSA9IDUwMDtcclxuICAgIHZhciBjYW52YXMgPSBnZXRDYW52YXMoY2FudmFzU2l6ZSk7XHJcbiAgICB2YXIgZHJhd1NlcnZpY2UgPSBuZXcgRHJhd1NlcnZpY2UoY2FudmFzKTtcclxuICAgIHZhciBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKCk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5VcGRhdGVLZXlTdGF0ZShldmVudC5rZXlDb2RlLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLlVwZGF0ZUtleVN0YXRlKGV2ZW50LmtleUNvZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKGRyYXdTZXJ2aWNlLCBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIpO1xyXG4gICAgZ2FtZU1hbmFnZXIuc3RhcnQoKTtcclxufSkoZG9jdW1lbnQpO1xyXG4iLCJ2YXIgRHJhd1NlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEcmF3U2VydmljZShjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZmlsbCA9IGZ1bmN0aW9uIChjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3TGluZSA9IGZ1bmN0aW9uICh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4MSwgeTEpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4MiwgeTIpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3U3F1YXJlID0gZnVuY3Rpb24gKHgsIHksIHNpZGVTaXplKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCh4LCB5LCBzaWRlU2l6ZSwgc2lkZVNpemUpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3UmVjdCA9IGZ1bmN0aW9uICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbiAoeCwgeSwgcikge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmZpbGxDaXJjbGUgPSBmdW5jdGlvbiAoeCwgeSwgciwgY29sb3IpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHZhciBmaWxsUnVsZSA9ICdub256ZXJvJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsKGZpbGxSdWxlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRHJhd1NlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IERyYXdTZXJ2aWNlO1xyXG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuLi9lbnRpdGllcy9wbGF5ZXInO1xyXG5pbXBvcnQgeyBUYXJnZXQgfSBmcm9tICcuLi9lbnRpdGllcy90YXJnZXQnO1xyXG5pbXBvcnQgeyBQb2ludCB9IGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbmltcG9ydCB7IEtleWJvYXJkQnV0dG9ucyB9IGZyb20gJy4va2V5Ym9hcmQtZXZlbnRzLWNvbnRyb2xsZXInO1xyXG52YXIgR2FtZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lTWFuYWdlcihkcmF3U2VydmljZSwga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyID0ga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMucm9ja2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZHJhd1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQobmV3IFBvaW50KDIwLCAwKSwgdGhpcy5kcmF3U2VydmljZSkpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQobmV3IFBvaW50KDgwLCAwKSwgdGhpcy5kcmF3U2VydmljZSkpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQobmV3IFBvaW50KDEyMCwgMCksIHRoaXMuZHJhd1NlcnZpY2UpKTtcclxuICAgICAgICB2YXIgdGFjdEludGVydmFsID0gMTAwMCAvIDYwO1xyXG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnBsYXllci5pc0FsaXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYXdTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkcmF3U2VydmljZS5kcmF3Q2lyY2xlKGNpcmNsZVgsIGNpcmNsZVksIDE1KTtcclxuICAgICAgICAgICAgICAgIHZhciBzcXVhcmVTaXplID0gNTA7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZ2V0Q29vcmRpbmF0ZVZhbHVlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHZhbHVlICsgc3F1YXJlU2l6ZSA+PSBjYW52YXNTaXplKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGNhbnZhc1NpemUgLSBzcXVhcmVTaXplO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhd1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5sZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5tb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLnJpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5tb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy51cCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIubW92ZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMuZG93bikpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIubW92ZURvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5zcGFjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX3RoaXMucGxheWVyLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJvY2tldHMucHVzaChyb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gX3RoaXMudGFyZ2V0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5nZXRQb3NpdGlvbigpLnkgPj0gX3RoaXMucGxheWVyLmdldFBvc2l0aW9uKCkueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIub25UYXJnZXRDb2xsaXNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yb2NrZXRzID0gX3RoaXMucm9ja2V0cy5maWx0ZXIoZnVuY3Rpb24gKHJvY2tldCkgeyByZXR1cm4gIXJvY2tldC5pc0Rlc3Ryb3llZDsgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gX3RoaXMucm9ja2V0czsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX2NbX2JdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvY2tldC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRhY3RJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lTWFuYWdlcjtcclxuIiwidmFyIEtleVN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2V5U3RhdGUoa2V5Q29kZSwgcHJlc3NlZCkge1xyXG4gICAgICAgIHRoaXMua2V5Q29kZSA9IGtleUNvZGU7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkID0gcHJlc3NlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBLZXlTdGF0ZTtcclxufSgpKTtcclxudmFyIEtleWJvYXJkQnV0dG9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkQnV0dG9ucygpIHtcclxuICAgIH1cclxuICAgIEtleWJvYXJkQnV0dG9ucy5sZWZ0ID0gMzc7XHJcbiAgICBLZXlib2FyZEJ1dHRvbnMudXAgPSAzODtcclxuICAgIEtleWJvYXJkQnV0dG9ucy5yaWdodCA9IDM5O1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLmRvd24gPSA0MDtcclxuICAgIEtleWJvYXJkQnV0dG9ucy5zcGFjZSA9IDMyO1xyXG4gICAgcmV0dXJuIEtleWJvYXJkQnV0dG9ucztcclxufSgpKTtcclxuZXhwb3J0IHsgS2V5Ym9hcmRCdXR0b25zIH07XHJcbnZhciBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuICAgIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUuVXBkYXRlS2V5U3RhdGUgPSBmdW5jdGlvbiAoa2V5Q29kZSwgaXNQcmVzc2VkKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAga2V5U3RhdGUucHJlc3NlZCA9IGlzUHJlc3NlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGVzLnB1c2gobmV3IEtleVN0YXRlKGtleUNvZGUsIGlzUHJlc3NlZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIucHJvdG90eXBlLklzUHJlc3NlZCA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICByZXR1cm4ga2V5U3RhdGUgPyBrZXlTdGF0ZS5wcmVzc2VkIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5HZXRLZXlTdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLmtleVN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKGtzKSB7IHJldHVybiBrcy5rZXlDb2RlID09IGtleUNvZGU7IH0pO1xyXG4gICAgICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciB9O1xyXG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=