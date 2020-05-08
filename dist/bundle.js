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
        this.width = 20;
        this.height = 20;
        this.startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x - this.width / 2, startPosition.y - this.height / 2);
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
    Rocket.prototype.onTargetCollision = function () {
        this.destroy();
    };
    Rocket.prototype.destroy = function () {
        this.isDestroyed = true;
    };
    Rocket.prototype.draw = function () {
        if (this.isDestroyed) {
            return;
        }
        this.drawService.fillCircle(this.position.x + this.width / 2, this.position.y + this.height / 2, this.width / 2, 'blue');
        if (this.startPosition.y - this.position.y > 400) {
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
        this.isDestroyed = false;
        this.speed = 1;
        this.drawService = drawService;
        var interval = setInterval(function () {
            if (_this.position.y < 0) {
                clearInterval(interval);
            }
            requestAnimationFrame(function () { return _this.moveDown(); });
        }, 1000 / 60);
    }
    Target.prototype.isAlive = function () {
        return !this.isDestroyed;
    };
    Target.prototype.onRocketCollision = function () {
        this.isDestroyed = true;
    };
    Target.prototype.getPosition = function () {
        return this.position;
    };
    Target.prototype.draw = function () {
        if (this.isDestroyed) {
            return;
        }
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

/***/ "./app/services/collision-service.ts":
/*!*******************************************!*\
  !*** ./app/services/collision-service.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CollisionService = /** @class */ (function () {
    function CollisionService() {
    }
    CollisionService.intersects = function (entity1, entity2) {
        var e1x1 = entity1.position.x;
        var e1x2 = entity1.position.x + entity1.width;
        var e2x1 = entity2.position.x;
        var e2x2 = entity2.position.x + entity2.width;
        if (e1x1 > e2x2 || e1x2 < e2x1) {
            return false;
        }
        var e1y1 = entity1.position.y;
        var e1y2 = entity1.position.y + entity1.height;
        var e2y1 = entity2.position.y;
        var e2y2 = entity2.position.y + entity2.height;
        if (e1y1 > e2y2 || e1y2 < e2y1) {
            return false;
        }
        return true;
    };
    return CollisionService;
}());
/* harmony default export */ __webpack_exports__["default"] = (CollisionService);


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
/* harmony import */ var _collision_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./collision-service */ "./app/services/collision-service.ts");





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
        var tactInterval = 1000 / 60;
        var i = 0;
        var intervalId = setInterval(function () {
            if (!_this.player.isAlive()) {
                alert("GAME OVER");
                clearInterval(intervalId);
                _this.drawService.clear();
                return;
            }
            i++;
            if (i % 100 === 0) {
                _this.targets.push(new _entities_target__WEBPACK_IMPORTED_MODULE_1__["Target"](new _entities_common__WEBPACK_IMPORTED_MODULE_2__["Point"](78 + i % 187, 0), _this.drawService));
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
                _this.targets = _this.targets.filter(function (entity) { return entity.isAlive(); });
                for (var _i = 0, _a = _this.targets; _i < _a.length; _i++) {
                    var target = _a[_i];
                    target.draw();
                    if (_collision_service__WEBPACK_IMPORTED_MODULE_4__["default"].intersects(_this.player, target)) {
                        _this.player.onTargetCollision();
                    }
                    for (var _b = 0, _c = _this.rockets; _b < _c.length; _b++) {
                        var rocket = _c[_b];
                        if (_collision_service__WEBPACK_IMPORTED_MODULE_4__["default"].intersects(rocket, target)) {
                            target.onRocketCollision();
                            rocket.onTargetCollision();
                        }
                    }
                }
                _this.rockets = _this.rockets.filter(function (rocket) { return !rocket.isDestroyed; });
                for (var _d = 0, _e = _this.rockets; _d < _e.length; _d++) {
                    var rocket = _e[_d];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW50aXRpZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL2FwcC9lbnRpdGllcy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL3RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2NvbGxpc2lvbi1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvZ2FtZS1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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IGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9pbmRleC50c1wiKTtcbiIsInZhciBQb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUG9pbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBvaW50IH07XHJcbiIsImltcG9ydCB7IFJvY2tldCB9IGZyb20gJy4uL2VudGl0aWVzL3JvY2tldCc7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG52YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxheWVyKGRyYXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoMTAwLCAzMDApO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSA1MDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwO1xyXG4gICAgICAgIHRoaXMuaXNLaWxsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMztcclxuICAgICAgICB0aGlzLnRpbWVUb1JlY2hhcmdlID0gMDtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmdldFBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuaXNBbGl2ZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gIXRoaXMuaXNLaWxsZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5vblRhcmdldENvbGxpc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzS2lsbGVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZVRvUmVjaGFyZ2UgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZVRvUmVjaGFyZ2UgLT0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UuZHJhd1NxdWFyZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCk7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lVG9SZWNoYXJnZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVUb1JlY2hhcmdlID0gMTAwO1xyXG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICByZXR1cm4gbmV3IFJvY2tldChzdGFydFBvc2l0aW9uLCB0aGlzLmRyYXdTZXJ2aWNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxheWVyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBQbGF5ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbnZhciBSb2NrZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSb2NrZXQoc3RhcnRQb3NpdGlvbiwgZHJhd1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludChzdGFydFBvc2l0aW9uLnggLSB0aGlzLndpZHRoIC8gMiwgc3RhcnRQb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gNTtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgICAgIC8vIGxldCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgaWYodGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZVVwKCkpO1xyXG4gICAgICAgIC8vIH0sIDEwMDAvNjApXHJcbiAgICB9XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLm9uVGFyZ2V0Q29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIFJvY2tldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlLmZpbGxDaXJjbGUodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAvIDIsICdibHVlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55ID4gNDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgfTtcclxuICAgIFJvY2tldC5wcm90b3R5cGUubW92ZVVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJvY2tldDtcclxufSgpKTtcclxuZXhwb3J0IHsgUm9ja2V0IH07XHJcbiIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG52YXIgVGFyZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGFyZ2V0KHN0YXJ0UG9zaXRpb24sIGRyYXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludChzdGFydFBvc2l0aW9uLngsIHN0YXJ0UG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDIwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMjA7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxO1xyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UgPSBkcmF3U2VydmljZTtcclxuICAgICAgICB2YXIgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChfdGhpcy5wb3NpdGlvbi55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm1vdmVEb3duKCk7IH0pO1xyXG4gICAgICAgIH0sIDEwMDAgLyA2MCk7XHJcbiAgICB9XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLmlzQWxpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGVzdHJveWVkO1xyXG4gICAgfTtcclxuICAgIFRhcmdldC5wcm90b3R5cGUub25Sb2NrZXRDb2xsaXNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlLmRyYXdTcXVhcmUodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIHRoaXMud2lkdGgpO1xyXG4gICAgfTtcclxuICAgIFRhcmdldC5wcm90b3R5cGUubW92ZURvd24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFRhcmdldDtcclxufSgpKTtcclxuZXhwb3J0IHsgVGFyZ2V0IH07XHJcbiIsImltcG9ydCBHYW1lTWFuYWdlciBmcm9tICcuL3NlcnZpY2VzL2dhbWUtbWFuYWdlcic7XHJcbmltcG9ydCBEcmF3U2VydmljZSBmcm9tICcuL3NlcnZpY2VzL2RyYXcvZHJhdy1zZXJ2aWNlJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlcic7XHJcbnZhciBBcHAgPSAoZnVuY3Rpb24gKGRvYykge1xyXG4gICAgZnVuY3Rpb24gZ2V0Q2FudmFzKGNhbnZhc1NpemUpIHtcclxuICAgICAgICB2YXIgY2FudmFzID0gZG9jLmdldEVsZW1lbnRCeUlkKCdnYW1lQXJlYUNhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhc1NpemU7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhc1NpemU7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcclxuICAgIH1cclxuICAgIHZhciBjYW52YXNTaXplID0gNTAwO1xyXG4gICAgdmFyIGNhbnZhcyA9IGdldENhbnZhcyhjYW52YXNTaXplKTtcclxuICAgIHZhciBkcmF3U2VydmljZSA9IG5ldyBEcmF3U2VydmljZShjYW52YXMpO1xyXG4gICAgdmFyIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlciA9IG5ldyBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIoKTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLlVwZGF0ZUtleVN0YXRlKGV2ZW50LmtleUNvZGUsIHRydWUpO1xyXG4gICAgfSk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuVXBkYXRlS2V5U3RhdGUoZXZlbnQua2V5Q29kZSwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgZ2FtZU1hbmFnZXIgPSBuZXcgR2FtZU1hbmFnZXIoZHJhd1NlcnZpY2UsIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlcik7XHJcbiAgICBnYW1lTWFuYWdlci5zdGFydCgpO1xyXG59KShkb2N1bWVudCk7XHJcbiIsInZhciBDb2xsaXNpb25TZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQ29sbGlzaW9uU2VydmljZSgpIHtcclxuICAgIH1cclxuICAgIENvbGxpc2lvblNlcnZpY2UuaW50ZXJzZWN0cyA9IGZ1bmN0aW9uIChlbnRpdHkxLCBlbnRpdHkyKSB7XHJcbiAgICAgICAgdmFyIGUxeDEgPSBlbnRpdHkxLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIGUxeDIgPSBlbnRpdHkxLnBvc2l0aW9uLnggKyBlbnRpdHkxLndpZHRoO1xyXG4gICAgICAgIHZhciBlMngxID0gZW50aXR5Mi5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciBlMngyID0gZW50aXR5Mi5wb3NpdGlvbi54ICsgZW50aXR5Mi53aWR0aDtcclxuICAgICAgICBpZiAoZTF4MSA+IGUyeDIgfHwgZTF4MiA8IGUyeDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZTF5MSA9IGVudGl0eTEucG9zaXRpb24ueTtcclxuICAgICAgICB2YXIgZTF5MiA9IGVudGl0eTEucG9zaXRpb24ueSArIGVudGl0eTEuaGVpZ2h0O1xyXG4gICAgICAgIHZhciBlMnkxID0gZW50aXR5Mi5wb3NpdGlvbi55O1xyXG4gICAgICAgIHZhciBlMnkyID0gZW50aXR5Mi5wb3NpdGlvbi55ICsgZW50aXR5Mi5oZWlnaHQ7XHJcbiAgICAgICAgaWYgKGUxeTEgPiBlMnkyIHx8IGUxeTIgPCBlMnkxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIENvbGxpc2lvblNlcnZpY2U7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IENvbGxpc2lvblNlcnZpY2U7XHJcbiIsInZhciBEcmF3U2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIERyYXdTZXJ2aWNlKGNhbnZhcykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdMaW5lID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdTcXVhcmUgPSBmdW5jdGlvbiAoeCwgeSwgc2lkZVNpemUpIHtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KHgsIHksIHNpZGVTaXplLCBzaWRlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB3aWR0aCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZmlsbENpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdmFyIGZpbGxSdWxlID0gJ25vbnplcm8nO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoZmlsbFJ1bGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEcmF3U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgRHJhd1NlcnZpY2U7XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2VudGl0aWVzL3BsYXllcic7XHJcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4uL2VudGl0aWVzL3RhcmdldCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRCdXR0b25zIH0gZnJvbSAnLi9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlcic7XHJcbmltcG9ydCBDb2xsaXNpb25TZXJ2aWNlIGZyb20gJy4vY29sbGlzaW9uLXNlcnZpY2UnO1xyXG52YXIgR2FtZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lTWFuYWdlcihkcmF3U2VydmljZSwga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyID0ga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMucm9ja2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZHJhd1NlcnZpY2UpO1xyXG4gICAgICAgIHZhciB0YWN0SW50ZXJ2YWwgPSAxMDAwIC8gNjA7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnBsYXllci5pc0FsaXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYXdTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSAlIDEwMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0cy5wdXNoKG5ldyBUYXJnZXQobmV3IFBvaW50KDc4ICsgaSAlIDE4NywgMCksIF90aGlzLmRyYXdTZXJ2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkcmF3U2VydmljZS5kcmF3Q2lyY2xlKGNpcmNsZVgsIGNpcmNsZVksIDE1KTtcclxuICAgICAgICAgICAgICAgIHZhciBzcXVhcmVTaXplID0gNTA7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZ2V0Q29vcmRpbmF0ZVZhbHVlID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodmFsdWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHZhbHVlICsgc3F1YXJlU2l6ZSA+PSBjYW52YXNTaXplKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGNhbnZhc1NpemUgLSBzcXVhcmVTaXplO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhd1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5sZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5tb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLnJpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5tb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy51cCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIubW92ZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMuZG93bikpIHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIubW92ZURvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5zcGFjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX3RoaXMucGxheWVyLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJvY2tldHMucHVzaChyb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXRzID0gX3RoaXMudGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKGVudGl0eSkgeyByZXR1cm4gZW50aXR5LmlzQWxpdmUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gX3RoaXMudGFyZ2V0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbGxpc2lvblNlcnZpY2UuaW50ZXJzZWN0cyhfdGhpcy5wbGF5ZXIsIHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLm9uVGFyZ2V0Q29sbGlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBfdGhpcy5yb2NrZXRzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX2NbX2JdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29sbGlzaW9uU2VydmljZS5pbnRlcnNlY3RzKHJvY2tldCwgdGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm9uUm9ja2V0Q29sbGlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2NrZXQub25UYXJnZXRDb2xsaXNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLnJvY2tldHMgPSBfdGhpcy5yb2NrZXRzLmZpbHRlcihmdW5jdGlvbiAocm9ja2V0KSB7IHJldHVybiAhcm9ja2V0LmlzRGVzdHJveWVkOyB9KTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9kID0gMCwgX2UgPSBfdGhpcy5yb2NrZXRzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb2NrZXQgPSBfZVtfZF07XHJcbiAgICAgICAgICAgICAgICAgICAgcm9ja2V0LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgdGFjdEludGVydmFsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVNYW5hZ2VyO1xyXG4iLCJ2YXIgS2V5U3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLZXlTdGF0ZShrZXlDb2RlLCBwcmVzc2VkKSB7XHJcbiAgICAgICAgdGhpcy5rZXlDb2RlID0ga2V5Q29kZTtcclxuICAgICAgICB0aGlzLnByZXNzZWQgPSBwcmVzc2VkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEtleVN0YXRlO1xyXG59KCkpO1xyXG52YXIgS2V5Ym9hcmRCdXR0b25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2V5Ym9hcmRCdXR0b25zKCkge1xyXG4gICAgfVxyXG4gICAgS2V5Ym9hcmRCdXR0b25zLmxlZnQgPSAzNztcclxuICAgIEtleWJvYXJkQnV0dG9ucy51cCA9IDM4O1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLnJpZ2h0ID0gMzk7XHJcbiAgICBLZXlib2FyZEJ1dHRvbnMuZG93biA9IDQwO1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLnNwYWNlID0gMzI7XHJcbiAgICByZXR1cm4gS2V5Ym9hcmRCdXR0b25zO1xyXG59KCkpO1xyXG5leHBvcnQgeyBLZXlib2FyZEJ1dHRvbnMgfTtcclxudmFyIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcigpIHtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5VcGRhdGVLZXlTdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlLCBpc1ByZXNzZWQpIHtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLkdldEtleVN0YXRlKGtleUNvZGUpO1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZSkge1xyXG4gICAgICAgICAgICBrZXlTdGF0ZS5wcmVzc2VkID0gaXNQcmVzc2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZXMucHVzaChuZXcgS2V5U3RhdGUoa2V5Q29kZSwgaXNQcmVzc2VkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUuSXNQcmVzc2VkID0gZnVuY3Rpb24gKGtleUNvZGUpIHtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLkdldEtleVN0YXRlKGtleUNvZGUpO1xyXG4gICAgICAgIHJldHVybiBrZXlTdGF0ZSA/IGtleVN0YXRlLnByZXNzZWQgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIucHJvdG90eXBlLkdldEtleVN0YXRlID0gZnVuY3Rpb24gKGtleUNvZGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IHRoaXMua2V5U3RhdGVzLmZpbHRlcihmdW5jdGlvbiAoa3MpIHsgcmV0dXJuIGtzLmtleUNvZGUgPT0ga2V5Q29kZTsgfSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyIH07XHJcbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==