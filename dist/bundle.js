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
        this.isKilled = false;
        this.size = 50;
        this.speed = 3;
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](100, 300);
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
        if (this.isKilled) {
            this.rockets = [];
            return;
        }
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
        this.speed = 1;
        this.startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
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
        this.drawService.drawSquare(this.position.x, this.position.y, 20);
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
                    _this.player.fire();
                }
                _this.player.draw();
                for (var _i = 0, _a = _this.targets; _i < _a.length; _i++) {
                    var target = _a[_i];
                    target.draw();
                    if (target.getPosition().y >= _this.player.getPosition().y) {
                        _this.player.onTargetCollision();
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW50aXRpZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL2FwcC9lbnRpdGllcy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL3RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2RyYXcvZHJhdy1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9nYW1lLW1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2tleWJvYXJkLWV2ZW50cy1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7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RTtBQUNBO0FBQ0EsNkRBQTZELDJFQUFlO0FBQzVFO0FBQ0E7QUFDQSw2REFBNkQsMkVBQWU7QUFDNUU7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGdCQUFnQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ2xFM0I7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMEI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDhCQUE4QixFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDbUM7QUFDcEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHNcIik7XG4iLCJ2YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvaW50O1xyXG59KCkpO1xyXG5leHBvcnQgeyBQb2ludCB9O1xyXG4iLCJpbXBvcnQgeyBSb2NrZXQgfSBmcm9tICcuLi9lbnRpdGllcy9yb2NrZXQnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXllcihkcmF3U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucm9ja2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaXNLaWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNpemUgPSA1MDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMztcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludCgxMDAsIDMwMCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgUGxheWVyLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmlzQWxpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzS2lsbGVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUub25UYXJnZXRDb2xsaXNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0tpbGxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzS2lsbGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9ja2V0cyA9IFtdO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UuZHJhd1NxdWFyZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy5zaXplKTtcclxuICAgICAgICB0aGlzLnJvY2tldHMgPSB0aGlzLnJvY2tldHMuZmlsdGVyKGZ1bmN0aW9uIChyb2NrZXQpIHsgcmV0dXJuICFyb2NrZXQuaXNEZXN0cm95ZWQ7IH0pO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLnJvY2tldHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciByb2NrZXQgPSBfYVtfaV07XHJcbiAgICAgICAgICAgIHJvY2tldC5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZVVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZURvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlTGVmdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggLT0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVSaWdodCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggKz0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmZpcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0UG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZSAvIDIsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5yb2NrZXRzLnB1c2gobmV3IFJvY2tldChzdGFydFBvc2l0aW9uLCB0aGlzLmRyYXdTZXJ2aWNlKSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFBsYXllcjtcclxufSgpKTtcclxuZXhwb3J0IHsgUGxheWVyIH07XHJcbiIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG52YXIgUm9ja2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUm9ja2V0KHN0YXJ0UG9zaXRpb24sIGRyYXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnNwZWVkID0gNTtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludChzdGFydFBvc2l0aW9uLngsIHN0YXJ0UG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UgPSBkcmF3U2VydmljZTtcclxuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1vdmVVcCgpOyB9KTtcclxuICAgICAgICB9LCAxMDAwIC8gNjApO1xyXG4gICAgfVxyXG4gICAgUm9ja2V0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFJvY2tldC5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UuZmlsbENpcmNsZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgMTAsICdibHVlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55ID4gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUm9ja2V0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBSb2NrZXQgfTtcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbnZhciBUYXJnZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBUYXJnZXQoc3RhcnRQb3NpdGlvbiwgZHJhd1NlcnZpY2UpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICAgICAgdmFyIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoX3RoaXMucG9zaXRpb24ueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5tb3ZlRG93bigpOyB9KTtcclxuICAgICAgICB9LCAxMDAwIC8gNjApO1xyXG4gICAgfVxyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5kcmF3U3F1YXJlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCAyMCk7XHJcbiAgICB9O1xyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFyZ2V0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBUYXJnZXQgfTtcclxuIiwiaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vc2VydmljZXMvZ2FtZS1tYW5hZ2VyJztcclxuaW1wb3J0IERyYXdTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvZHJhdy9kcmF3LXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgfSBmcm9tICcuL3NlcnZpY2VzL2tleWJvYXJkLWV2ZW50cy1jb250cm9sbGVyJztcclxudmFyIEFwcCA9IChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRDYW52YXMoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVBcmVhQ2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzU2l6ZTtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzU2l6ZTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhbnZhc1NpemUgPSA1MDA7XHJcbiAgICB2YXIgY2FudmFzID0gZ2V0Q2FudmFzKGNhbnZhc1NpemUpO1xyXG4gICAgdmFyIGRyYXdTZXJ2aWNlID0gbmV3IERyYXdTZXJ2aWNlKGNhbnZhcyk7XHJcbiAgICB2YXIga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyID0gbmV3IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcigpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuVXBkYXRlS2V5U3RhdGUoZXZlbnQua2V5Q29kZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5VcGRhdGVLZXlTdGF0ZShldmVudC5rZXlDb2RlLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBnYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcihkcmF3U2VydmljZSwga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKTtcclxuICAgIGdhbWVNYW5hZ2VyLnN0YXJ0KCk7XHJcbn0pKGRvY3VtZW50KTtcclxuIiwidmFyIERyYXdTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRHJhd1NlcnZpY2UoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd0xpbmUgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd1NxdWFyZSA9IGZ1bmN0aW9uICh4LCB5LCBzaWRlU2l6ZSkge1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoeCwgeSwgc2lkZVNpemUsIHNpZGVTaXplKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd1JlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3Q2lyY2xlID0gZnVuY3Rpb24gKHgsIHksIHIpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5maWxsQ2lyY2xlID0gZnVuY3Rpb24gKHgsIHksIHIsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB2YXIgZmlsbFJ1bGUgPSAnbm9uemVybyc7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbChmaWxsUnVsZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyYXdTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBEcmF3U2VydmljZTtcclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZW50aXRpZXMvcGxheWVyJztcclxuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvdGFyZ2V0JztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG5pbXBvcnQgeyBLZXlib2FyZEJ1dHRvbnMgfSBmcm9tICcuL2tleWJvYXJkLWV2ZW50cy1jb250cm9sbGVyJztcclxudmFyIEdhbWVNYW5hZ2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gR2FtZU1hbmFnZXIoZHJhd1NlcnZpY2UsIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlcikge1xyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UgPSBkcmF3U2VydmljZTtcclxuICAgICAgICB0aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlciA9IGtleWJvYXJkRXZlbnRzQ29udHJvbGxlcjtcclxuICAgICAgICB0aGlzLnRhcmdldHMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLnJvY2tldHMgPSBuZXcgQXJyYXkoKTtcclxuICAgIH1cclxuICAgIEdhbWVNYW5hZ2VyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmRyYXdTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KG5ldyBQb2ludCgyMCwgMCksIHRoaXMuZHJhd1NlcnZpY2UpKTtcclxuICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KG5ldyBQb2ludCg4MCwgMCksIHRoaXMuZHJhd1NlcnZpY2UpKTtcclxuICAgICAgICB0aGlzLnRhcmdldHMucHVzaChuZXcgVGFyZ2V0KG5ldyBQb2ludCgxMjAsIDApLCB0aGlzLmRyYXdTZXJ2aWNlKSk7XHJcbiAgICAgICAgdmFyIHRhY3RJbnRlcnZhbCA9IDEwMDAgLyA2MDtcclxuICAgICAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCFfdGhpcy5wbGF5ZXIuaXNBbGl2ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkdBTUUgT1ZFUlwiKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmF3U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhd1NlcnZpY2UuZHJhd0NpcmNsZShjaXJjbGVYLCBjaXJjbGVZLCAxNSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3F1YXJlU2l6ZSA9IDUwO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGdldENvb3JkaW5hdGVWYWx1ZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHZhbHVlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh2YWx1ZSArIHNxdWFyZVNpemUgPj0gY2FudmFzU2l6ZSl7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBjYW52YXNTaXplIC0gc3F1YXJlU2l6ZTtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYXdTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMubGVmdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIubW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5yaWdodCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIubW92ZVJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMudXApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLm1vdmVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLmRvd24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLm1vdmVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMuc3BhY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gX3RoaXMudGFyZ2V0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5nZXRQb3NpdGlvbigpLnkgPj0gX3RoaXMucGxheWVyLmdldFBvc2l0aW9uKCkueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIub25UYXJnZXRDb2xsaXNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRhY3RJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lTWFuYWdlcjtcclxuIiwidmFyIEtleVN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2V5U3RhdGUoa2V5Q29kZSwgcHJlc3NlZCkge1xyXG4gICAgICAgIHRoaXMua2V5Q29kZSA9IGtleUNvZGU7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkID0gcHJlc3NlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBLZXlTdGF0ZTtcclxufSgpKTtcclxudmFyIEtleWJvYXJkQnV0dG9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkQnV0dG9ucygpIHtcclxuICAgIH1cclxuICAgIEtleWJvYXJkQnV0dG9ucy5sZWZ0ID0gMzc7XHJcbiAgICBLZXlib2FyZEJ1dHRvbnMudXAgPSAzODtcclxuICAgIEtleWJvYXJkQnV0dG9ucy5yaWdodCA9IDM5O1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLmRvd24gPSA0MDtcclxuICAgIEtleWJvYXJkQnV0dG9ucy5zcGFjZSA9IDMyO1xyXG4gICAgcmV0dXJuIEtleWJvYXJkQnV0dG9ucztcclxufSgpKTtcclxuZXhwb3J0IHsgS2V5Ym9hcmRCdXR0b25zIH07XHJcbnZhciBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuICAgIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUuVXBkYXRlS2V5U3RhdGUgPSBmdW5jdGlvbiAoa2V5Q29kZSwgaXNQcmVzc2VkKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAga2V5U3RhdGUucHJlc3NlZCA9IGlzUHJlc3NlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGVzLnB1c2gobmV3IEtleVN0YXRlKGtleUNvZGUsIGlzUHJlc3NlZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIucHJvdG90eXBlLklzUHJlc3NlZCA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICByZXR1cm4ga2V5U3RhdGUgPyBrZXlTdGF0ZS5wcmVzc2VkIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5HZXRLZXlTdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLmtleVN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKGtzKSB7IHJldHVybiBrcy5rZXlDb2RlID09IGtleUNvZGU7IH0pO1xyXG4gICAgICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciB9O1xyXG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=