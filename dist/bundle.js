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
        var canvasSize = 500;
        this.width = 84;
        this.height = 84;
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](canvasSize / 2 - this.width / 2, canvasSize - this.height);
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
        if (!this._playerImg) {
            this._playerImg = this.drawService.drawImageFromFile(this.position, '../assets/img/tank.svg');
        }
        else {
            this.drawService.drawImage(this.position, this._playerImg);
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
        this.position = new _entities_common__WEBPACK_IMPORTED_MODULE_0__["Point"](startPosition.x, startPosition.y);
        this.width = 20;
        this.height = 20;
        this.isDestroyed = false;
        this.speed = 1;
        this.drawService = drawService;
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
        this.moveDown();
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
    DrawService.prototype.drawImage = function (pos, img) {
        this.ctx.drawImage(img, pos.x, pos.y);
    };
    DrawService.prototype.drawImageFromFile = function (pos, filePath) {
        var _this = this;
        var img = new Image();
        img.onload = function () {
            _this.ctx.drawImage(img, pos.x, pos.y);
        };
        img.src = filePath;
        return img;
    };
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
                var randomNumber = Math.random();
                _this.targets.push(new _entities_target__WEBPACK_IMPORTED_MODULE_1__["Target"](new _entities_common__WEBPACK_IMPORTED_MODULE_2__["Point"](97 * randomNumber + i % 187, 0), _this.drawService));
            }
            window.requestAnimationFrame(function () {
                var squareSize = 50;
                _this.drawService.clear();
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].left)) {
                    _this.player.moveLeft();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].right)) {
                    _this.player.moveRight();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].up)) {
                    //don't allow to move up
                    //this.player.moveUp();
                }
                if (_this.keyboardEventsController.IsPressed(_keyboard_events_controller__WEBPACK_IMPORTED_MODULE_3__["KeyboardButtons"].down)) {
                    //don't allow to move down
                    //this.player.moveDown();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW50aXRpZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL2FwcC9lbnRpdGllcy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL3RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2NvbGxpc2lvbi1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvZ2FtZS1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHVEQUFNLEtBQUssc0RBQUs7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsMkVBQWU7QUFDNUU7QUFDQTtBQUNBLDZEQUE2RCwyRUFBZTtBQUM1RTtBQUNBO0FBQ0EsNkRBQTZELDJFQUFlO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwyRUFBZTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQsMkVBQWU7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0VBQXdFLHlCQUF5QixFQUFFO0FBQ25HLG9EQUFvRCxnQkFBZ0I7QUFDcEU7QUFDQTtBQUNBLHdCQUF3QiwwREFBZ0I7QUFDeEM7QUFDQTtBQUNBLHdEQUF3RCxnQkFBZ0I7QUFDeEU7QUFDQSw0QkFBNEIsMERBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsNEJBQTRCLEVBQUU7QUFDdEcsb0RBQW9ELGdCQUFnQjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQzlFM0I7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDMEI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELDhCQUE4QixFQUFFO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDbUM7QUFDcEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvaW5kZXgudHNcIik7XG4iLCJ2YXIgUG9pbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBQb2ludCh4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFBvaW50O1xyXG59KCkpO1xyXG5leHBvcnQgeyBQb2ludCB9O1xyXG4iLCJpbXBvcnQgeyBSb2NrZXQgfSBmcm9tICcuLi9lbnRpdGllcy9yb2NrZXQnO1xyXG5pbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxudmFyIFBsYXllciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBsYXllcihkcmF3U2VydmljZSkge1xyXG4gICAgICAgIHZhciBjYW52YXNTaXplID0gNTAwO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSA4NDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDg0O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KGNhbnZhc1NpemUgLyAyIC0gdGhpcy53aWR0aCAvIDIsIGNhbnZhc1NpemUgLSB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5pc0tpbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMudGltZVRvUmVjaGFyZ2UgPSAwO1xyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UgPSBkcmF3U2VydmljZTtcclxuICAgIH1cclxuICAgIFBsYXllci5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0tpbGxlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm9uVGFyZ2V0Q29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNLaWxsZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lVG9SZWNoYXJnZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lVG9SZWNoYXJnZSAtPSAxMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl9wbGF5ZXJJbWcpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheWVySW1nID0gdGhpcy5kcmF3U2VydmljZS5kcmF3SW1hZ2VGcm9tRmlsZSh0aGlzLnBvc2l0aW9uLCAnLi4vYXNzZXRzL2ltZy90YW5rLnN2ZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3U2VydmljZS5kcmF3SW1hZ2UodGhpcy5wb3NpdGlvbiwgdGhpcy5fcGxheWVySW1nKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZVJpZ2h0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueCArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUuZmlyZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lVG9SZWNoYXJnZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWVUb1JlY2hhcmdlID0gMTAwO1xyXG4gICAgICAgIHZhciBzdGFydFBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludCh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLndpZHRoIC8gMiwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICByZXR1cm4gbmV3IFJvY2tldChzdGFydFBvc2l0aW9uLCB0aGlzLmRyYXdTZXJ2aWNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUGxheWVyO1xyXG59KCkpO1xyXG5leHBvcnQgeyBQbGF5ZXIgfTtcclxuIiwiaW1wb3J0ICogYXMgQ29tbW9uIGZyb20gJy4uL2VudGl0aWVzL2NvbW1vbic7XHJcbnZhciBSb2NrZXQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBSb2NrZXQoc3RhcnRQb3NpdGlvbiwgZHJhd1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IENvbW1vbi5Qb2ludChzdGFydFBvc2l0aW9uLnggLSB0aGlzLndpZHRoIC8gMiwgc3RhcnRQb3NpdGlvbi55IC0gdGhpcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gNTtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgUm9ja2V0LnByb3RvdHlwZS5vblRhcmdldENvbGxpc2lvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgIH07XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUm9ja2V0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5maWxsQ2lyY2xlKHRoaXMucG9zaXRpb24ueCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggLyAyLCAnYmx1ZScpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0UG9zaXRpb24ueSAtIHRoaXMucG9zaXRpb24ueSA+IDQwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlVXAoKTtcclxuICAgIH07XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Rlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBSb2NrZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFJvY2tldCB9O1xyXG4iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxudmFyIFRhcmdldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFRhcmdldChzdGFydFBvc2l0aW9uLCBkcmF3U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCwgc3RhcnRQb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLndpZHRoID0gMjA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAyMDtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5pc0FsaXZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5pc0Rlc3Ryb3llZDtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLm9uUm9ja2V0Q29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFRhcmdldC5wcm90b3R5cGUuZ2V0UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9O1xyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xyXG4gICAgICAgIHRoaXMuZHJhd1NlcnZpY2UuZHJhd1NxdWFyZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSwgdGhpcy53aWR0aCk7XHJcbiAgICB9O1xyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgKz0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gVGFyZ2V0O1xyXG59KCkpO1xyXG5leHBvcnQgeyBUYXJnZXQgfTtcclxuIiwiaW1wb3J0IEdhbWVNYW5hZ2VyIGZyb20gJy4vc2VydmljZXMvZ2FtZS1tYW5hZ2VyJztcclxuaW1wb3J0IERyYXdTZXJ2aWNlIGZyb20gJy4vc2VydmljZXMvZHJhdy9kcmF3LXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgfSBmcm9tICcuL3NlcnZpY2VzL2tleWJvYXJkLWV2ZW50cy1jb250cm9sbGVyJztcclxudmFyIEFwcCA9IChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICBmdW5jdGlvbiBnZXRDYW52YXMoY2FudmFzU2l6ZSkge1xyXG4gICAgICAgIHZhciBjYW52YXMgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoJ2dhbWVBcmVhQ2FudmFzJyk7XHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzU2l6ZTtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzU2l6ZTtcclxuICAgICAgICByZXR1cm4gY2FudmFzO1xyXG4gICAgfVxyXG4gICAgdmFyIGNhbnZhc1NpemUgPSA1MDA7XHJcbiAgICB2YXIgY2FudmFzID0gZ2V0Q2FudmFzKGNhbnZhc1NpemUpO1xyXG4gICAgdmFyIGRyYXdTZXJ2aWNlID0gbmV3IERyYXdTZXJ2aWNlKGNhbnZhcyk7XHJcbiAgICB2YXIga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyID0gbmV3IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcigpO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuVXBkYXRlS2V5U3RhdGUoZXZlbnQua2V5Q29kZSwgdHJ1ZSk7XHJcbiAgICB9KTtcclxuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5VcGRhdGVLZXlTdGF0ZShldmVudC5rZXlDb2RlLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHZhciBnYW1lTWFuYWdlciA9IG5ldyBHYW1lTWFuYWdlcihkcmF3U2VydmljZSwga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKTtcclxuICAgIGdhbWVNYW5hZ2VyLnN0YXJ0KCk7XHJcbn0pKGRvY3VtZW50KTtcclxuIiwidmFyIENvbGxpc2lvblNlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBDb2xsaXNpb25TZXJ2aWNlKCkge1xyXG4gICAgfVxyXG4gICAgQ29sbGlzaW9uU2VydmljZS5pbnRlcnNlY3RzID0gZnVuY3Rpb24gKGVudGl0eTEsIGVudGl0eTIpIHtcclxuICAgICAgICB2YXIgZTF4MSA9IGVudGl0eTEucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgZTF4MiA9IGVudGl0eTEucG9zaXRpb24ueCArIGVudGl0eTEud2lkdGg7XHJcbiAgICAgICAgdmFyIGUyeDEgPSBlbnRpdHkyLnBvc2l0aW9uLng7XHJcbiAgICAgICAgdmFyIGUyeDIgPSBlbnRpdHkyLnBvc2l0aW9uLnggKyBlbnRpdHkyLndpZHRoO1xyXG4gICAgICAgIGlmIChlMXgxID4gZTJ4MiB8fCBlMXgyIDwgZTJ4MSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBlMXkxID0gZW50aXR5MS5wb3NpdGlvbi55O1xyXG4gICAgICAgIHZhciBlMXkyID0gZW50aXR5MS5wb3NpdGlvbi55ICsgZW50aXR5MS5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIGUyeTEgPSBlbnRpdHkyLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgdmFyIGUyeTIgPSBlbnRpdHkyLnBvc2l0aW9uLnkgKyBlbnRpdHkyLmhlaWdodDtcclxuICAgICAgICBpZiAoZTF5MSA+IGUyeTIgfHwgZTF5MiA8IGUyeTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gQ29sbGlzaW9uU2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgQ29sbGlzaW9uU2VydmljZTtcclxuIiwidmFyIERyYXdTZXJ2aWNlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gRHJhd1NlcnZpY2UoY2FudmFzKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3SW1hZ2UgPSBmdW5jdGlvbiAocG9zLCBpbWcpIHtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UoaW1nLCBwb3MueCwgcG9zLnkpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3SW1hZ2VGcm9tRmlsZSA9IGZ1bmN0aW9uIChwb3MsIGZpbGVQYXRoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpbWcuc3JjID0gZmlsZVBhdGg7XHJcbiAgICAgICAgcmV0dXJuIGltZztcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdMaW5lID0gZnVuY3Rpb24gKHgxLCB5MSwgeDIsIHkyKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHgubW92ZVRvKHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgdGhpcy5jdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdTcXVhcmUgPSBmdW5jdGlvbiAoeCwgeSwgc2lkZVNpemUpIHtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KHgsIHksIHNpZGVTaXplLCBzaWRlU2l6ZSk7XHJcbiAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdSZWN0ID0gZnVuY3Rpb24gKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB3aWR0aCwgeSk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkgKyBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmxpbmVUbyh4LCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd0NpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZmlsbENpcmNsZSA9IGZ1bmN0aW9uICh4LCB5LCByLCBjb2xvcikge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4LmFyYyh4LCB5LCByLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdmFyIGZpbGxSdWxlID0gJ25vbnplcm8nO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoZmlsbFJ1bGUpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBEcmF3U2VydmljZTtcclxufSgpKTtcclxuZXhwb3J0IGRlZmF1bHQgRHJhd1NlcnZpY2U7XHJcbiIsImltcG9ydCB7IFBsYXllciB9IGZyb20gJy4uL2VudGl0aWVzL3BsYXllcic7XHJcbmltcG9ydCB7IFRhcmdldCB9IGZyb20gJy4uL2VudGl0aWVzL3RhcmdldCc7XHJcbmltcG9ydCB7IFBvaW50IH0gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxuaW1wb3J0IHsgS2V5Ym9hcmRCdXR0b25zIH0gZnJvbSAnLi9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlcic7XHJcbmltcG9ydCBDb2xsaXNpb25TZXJ2aWNlIGZyb20gJy4vY29sbGlzaW9uLXNlcnZpY2UnO1xyXG52YXIgR2FtZU1hbmFnZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHYW1lTWFuYWdlcihkcmF3U2VydmljZSwga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyID0ga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHRoaXMucm9ja2V0cyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgR2FtZU1hbmFnZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZHJhd1NlcnZpY2UpO1xyXG4gICAgICAgIHZhciB0YWN0SW50ZXJ2YWwgPSAxMDAwIC8gNjA7XHJcbiAgICAgICAgdmFyIGkgPSAwO1xyXG4gICAgICAgIHZhciBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIV90aGlzLnBsYXllci5pc0FsaXZlKCkpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiR0FNRSBPVkVSXCIpO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcclxuICAgICAgICAgICAgICAgIF90aGlzLmRyYXdTZXJ2aWNlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSAlIDEwMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXRzLnB1c2gobmV3IFRhcmdldChuZXcgUG9pbnQoOTcgKiByYW5kb21OdW1iZXIgKyBpICUgMTg3LCAwKSwgX3RoaXMuZHJhd1NlcnZpY2UpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzcXVhcmVTaXplID0gNTA7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5kcmF3U2VydmljZS5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLmxlZnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMucmlnaHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLnVwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vZG9uJ3QgYWxsb3cgdG8gbW92ZSB1cFxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5ZXIubW92ZVVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMuZG93bikpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2Rvbid0IGFsbG93IHRvIG1vdmUgZG93blxyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5wbGF5ZXIubW92ZURvd24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5zcGFjZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX3RoaXMucGxheWVyLmZpcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocm9ja2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJvY2tldHMucHVzaChyb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXRzID0gX3RoaXMudGFyZ2V0cy5maWx0ZXIoZnVuY3Rpb24gKGVudGl0eSkgeyByZXR1cm4gZW50aXR5LmlzQWxpdmUoKTsgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gX3RoaXMudGFyZ2V0czsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gX2FbX2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKENvbGxpc2lvblNlcnZpY2UuaW50ZXJzZWN0cyhfdGhpcy5wbGF5ZXIsIHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucGxheWVyLm9uVGFyZ2V0Q29sbGlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIF9iID0gMCwgX2MgPSBfdGhpcy5yb2NrZXRzOyBfYiA8IF9jLmxlbmd0aDsgX2IrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX2NbX2JdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQ29sbGlzaW9uU2VydmljZS5pbnRlcnNlY3RzKHJvY2tldCwgdGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm9uUm9ja2V0Q29sbGlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2NrZXQub25UYXJnZXRDb2xsaXNpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF90aGlzLnJvY2tldHMgPSBfdGhpcy5yb2NrZXRzLmZpbHRlcihmdW5jdGlvbiAocm9ja2V0KSB7IHJldHVybiAhcm9ja2V0LmlzRGVzdHJveWVkOyB9KTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9kID0gMCwgX2UgPSBfdGhpcy5yb2NrZXRzOyBfZCA8IF9lLmxlbmd0aDsgX2QrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByb2NrZXQgPSBfZVtfZF07XHJcbiAgICAgICAgICAgICAgICAgICAgcm9ja2V0LmRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgdGFjdEludGVydmFsKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gR2FtZU1hbmFnZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVNYW5hZ2VyO1xyXG4iLCJ2YXIgS2V5U3RhdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLZXlTdGF0ZShrZXlDb2RlLCBwcmVzc2VkKSB7XHJcbiAgICAgICAgdGhpcy5rZXlDb2RlID0ga2V5Q29kZTtcclxuICAgICAgICB0aGlzLnByZXNzZWQgPSBwcmVzc2VkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEtleVN0YXRlO1xyXG59KCkpO1xyXG52YXIgS2V5Ym9hcmRCdXR0b25zID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2V5Ym9hcmRCdXR0b25zKCkge1xyXG4gICAgfVxyXG4gICAgS2V5Ym9hcmRCdXR0b25zLmxlZnQgPSAzNztcclxuICAgIEtleWJvYXJkQnV0dG9ucy51cCA9IDM4O1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLnJpZ2h0ID0gMzk7XHJcbiAgICBLZXlib2FyZEJ1dHRvbnMuZG93biA9IDQwO1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLnNwYWNlID0gMzI7XHJcbiAgICByZXR1cm4gS2V5Ym9hcmRCdXR0b25zO1xyXG59KCkpO1xyXG5leHBvcnQgeyBLZXlib2FyZEJ1dHRvbnMgfTtcclxudmFyIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcigpIHtcclxuICAgICAgICB0aGlzLmtleVN0YXRlcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5VcGRhdGVLZXlTdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlLCBpc1ByZXNzZWQpIHtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLkdldEtleVN0YXRlKGtleUNvZGUpO1xyXG4gICAgICAgIGlmIChrZXlTdGF0ZSkge1xyXG4gICAgICAgICAgICBrZXlTdGF0ZS5wcmVzc2VkID0gaXNQcmVzc2VkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlTdGF0ZXMucHVzaChuZXcgS2V5U3RhdGUoa2V5Q29kZSwgaXNQcmVzc2VkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUuSXNQcmVzc2VkID0gZnVuY3Rpb24gKGtleUNvZGUpIHtcclxuICAgICAgICB2YXIga2V5U3RhdGUgPSB0aGlzLkdldEtleVN0YXRlKGtleUNvZGUpO1xyXG4gICAgICAgIHJldHVybiBrZXlTdGF0ZSA/IGtleVN0YXRlLnByZXNzZWQgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIucHJvdG90eXBlLkdldEtleVN0YXRlID0gZnVuY3Rpb24gKGtleUNvZGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0cyA9IHRoaXMua2V5U3RhdGVzLmZpbHRlcihmdW5jdGlvbiAoa3MpIHsgcmV0dXJuIGtzLmtleUNvZGUgPT0ga2V5Q29kZTsgfSk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHRzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlcjtcclxufSgpKTtcclxuZXhwb3J0IHsgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyIH07XHJcbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==