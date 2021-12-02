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
        this.SetTimeToRecharge();
        var startPosition = new _entities_common__WEBPACK_IMPORTED_MODULE_1__["Point"](this.position.x + this.width / 2, this.position.y);
        return new _entities_rocket__WEBPACK_IMPORTED_MODULE_0__["Rocket"](startPosition, this.drawService);
    };
    Player.prototype.SetTimeToRecharge = function () {
        this.timeToRecharge = 400;
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
            //Targets generation --->>>
            i++;
            if (i % 100 === 0) {
                var randomNumber = Math.random();
                _this.targets.push(new _entities_target__WEBPACK_IMPORTED_MODULE_1__["Target"](new _entities_common__WEBPACK_IMPORTED_MODULE_2__["Point"](137 * randomNumber + i % 187, 0), _this.drawService));
            }
            //<<<--- Targets generation
            window.requestAnimationFrame(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly8vLi9hcHAvZW50aXRpZXMvcGxheWVyLnRzIiwid2VicGFjazovLy8uL2FwcC9lbnRpdGllcy9yb2NrZXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2VudGl0aWVzL3RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NlcnZpY2VzL2NvbGxpc2lvbi1zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvc2VydmljZXMvZ2FtZS1tYW5hZ2VyLnRzIiwid2VicGFjazovLy8uL2FwcC9zZXJ2aWNlcy9rZXlib2FyZC1ldmVudHMtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxz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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsdURBQU0sS0FBSyxzREFBSztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwyRUFBZTtBQUM1RTtBQUNBO0FBQ0EsNkRBQTZELDJFQUFlO0FBQzVFO0FBQ0E7QUFDQSw2REFBNkQsMkVBQWU7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDJFQUFlO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwyRUFBZTtBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UseUJBQXlCLEVBQUU7QUFDbkcsb0RBQW9ELGdCQUFnQjtBQUNwRTtBQUNBO0FBQ0Esd0JBQXdCLDBEQUFnQjtBQUN4QztBQUNBO0FBQ0Esd0RBQXdELGdCQUFnQjtBQUN4RTtBQUNBLDRCQUE0QiwwREFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RSw0QkFBNEIsRUFBRTtBQUN0RyxvREFBb0QsZ0JBQWdCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDYywwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDL0UzQjtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUMwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsOEJBQThCLEVBQUU7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNtQztBQUNwQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2FwcC9pbmRleC50c1wiKTtcbiIsInZhciBQb2ludCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFBvaW50KHgsIHkpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUG9pbnQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBvaW50IH07XHJcbiIsImltcG9ydCB7IFJvY2tldCB9IGZyb20gJy4uL2VudGl0aWVzL3JvY2tldCc7XHJcbmltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG52YXIgUGxheWVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gUGxheWVyKGRyYXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhc1NpemUgPSA1MDA7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDg0O1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gODQ7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoY2FudmFzU2l6ZSAvIDIgLSB0aGlzLndpZHRoIC8gMiwgY2FudmFzU2l6ZSAtIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmlzS2lsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDM7XHJcbiAgICAgICAgdGhpcy50aW1lVG9SZWNoYXJnZSA9IDA7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZSA9IGRyYXdTZXJ2aWNlO1xyXG4gICAgfVxyXG4gICAgUGxheWVyLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLmlzQWxpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzS2lsbGVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUub25UYXJnZXRDb2xsaXNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0tpbGxlZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVUb1JlY2hhcmdlID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVUb1JlY2hhcmdlIC09IDEwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuX3BsYXllckltZykge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5ZXJJbWcgPSB0aGlzLmRyYXdTZXJ2aWNlLmRyYXdJbWFnZUZyb21GaWxlKHRoaXMucG9zaXRpb24sICcuLi9hc3NldHMvaW1nL3Rhbmsuc3ZnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlLmRyYXdJbWFnZSh0aGlzLnBvc2l0aW9uLCB0aGlzLl9wbGF5ZXJJbWcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgLT0gdGhpcy5zcGVlZDtcclxuICAgIH07XHJcbiAgICBQbGF5ZXIucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIFBsYXllci5wcm90b3R5cGUubW92ZUxlZnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5tb3ZlUmlnaHQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ICs9IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5maXJlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVUb1JlY2hhcmdlID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuU2V0VGltZVRvUmVjaGFyZ2UoKTtcclxuICAgICAgICB2YXIgc3RhcnRQb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb2NrZXQoc3RhcnRQb3NpdGlvbiwgdGhpcy5kcmF3U2VydmljZSk7XHJcbiAgICB9O1xyXG4gICAgUGxheWVyLnByb3RvdHlwZS5TZXRUaW1lVG9SZWNoYXJnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnRpbWVUb1JlY2hhcmdlID0gNDAwO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBQbGF5ZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFBsYXllciB9O1xyXG4iLCJpbXBvcnQgKiBhcyBDb21tb24gZnJvbSAnLi4vZW50aXRpZXMvY29tbW9uJztcclxudmFyIFJvY2tldCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIFJvY2tldChzdGFydFBvc2l0aW9uLCBkcmF3U2VydmljZSkge1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xyXG4gICAgICAgIHRoaXMuc3RhcnRQb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgQ29tbW9uLlBvaW50KHN0YXJ0UG9zaXRpb24ueCAtIHRoaXMud2lkdGggLyAyLCBzdGFydFBvc2l0aW9uLnkgLSB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSA1O1xyXG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLm9uVGFyZ2V0Q29sbGlzaW9uID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZGVzdHJveSgpO1xyXG4gICAgfTtcclxuICAgIFJvY2tldC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgICBSb2NrZXQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlLmZpbGxDaXJjbGUodGhpcy5wb3NpdGlvbi54ICsgdGhpcy53aWR0aCAvIDIsIHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGVpZ2h0IC8gMiwgdGhpcy53aWR0aCAvIDIsICdibHVlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRQb3NpdGlvbi55IC0gdGhpcy5wb3NpdGlvbi55ID4gNDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgfTtcclxuICAgIFJvY2tldC5wcm90b3R5cGUubW92ZVVwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55IC09IHRoaXMuc3BlZWQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIFJvY2tldDtcclxufSgpKTtcclxuZXhwb3J0IHsgUm9ja2V0IH07XHJcbiIsImltcG9ydCAqIGFzIENvbW1vbiBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG52YXIgVGFyZ2V0ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gVGFyZ2V0KHN0YXJ0UG9zaXRpb24sIGRyYXdTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBDb21tb24uUG9pbnQoc3RhcnRQb3NpdGlvbi54LCBzdGFydFBvc2l0aW9uLnkpO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSAyMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDIwO1xyXG4gICAgICAgIHRoaXMuaXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICB9XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLmlzQWxpdmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzRGVzdHJveWVkO1xyXG4gICAgfTtcclxuICAgIFRhcmdldC5wcm90b3R5cGUub25Sb2NrZXRDb2xsaXNpb24gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5pc0Rlc3Ryb3llZCA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgVGFyZ2V0LnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U2VydmljZS5kcmF3U3F1YXJlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55LCB0aGlzLndpZHRoKTtcclxuICAgIH07XHJcbiAgICBUYXJnZXQucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24ueSArPSB0aGlzLnNwZWVkO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBUYXJnZXQ7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IFRhcmdldCB9O1xyXG4iLCJpbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSAnLi9zZXJ2aWNlcy9nYW1lLW1hbmFnZXInO1xyXG5pbXBvcnQgRHJhd1NlcnZpY2UgZnJvbSAnLi9zZXJ2aWNlcy9kcmF3L2RyYXctc2VydmljZSc7XHJcbmltcG9ydCB7IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciB9IGZyb20gJy4vc2VydmljZXMva2V5Ym9hcmQtZXZlbnRzLWNvbnRyb2xsZXInO1xyXG52YXIgQXBwID0gKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgIGZ1bmN0aW9uIGdldENhbnZhcyhjYW52YXNTaXplKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvYy5nZXRFbGVtZW50QnlJZCgnZ2FtZUFyZWFDYW52YXMnKTtcclxuICAgICAgICBjYW52YXMud2lkdGggPSBjYW52YXNTaXplO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBjYW52YXNTaXplO1xyXG4gICAgICAgIHJldHVybiBjYW52YXM7XHJcbiAgICB9XHJcbiAgICB2YXIgY2FudmFzU2l6ZSA9IDUwMDtcclxuICAgIHZhciBjYW52YXMgPSBnZXRDYW52YXMoY2FudmFzU2l6ZSk7XHJcbiAgICB2YXIgZHJhd1NlcnZpY2UgPSBuZXcgRHJhd1NlcnZpY2UoY2FudmFzKTtcclxuICAgIHZhciBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSBuZXcgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyKCk7XHJcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5VcGRhdGVLZXlTdGF0ZShldmVudC5rZXlDb2RlLCB0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAga2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLlVwZGF0ZUtleVN0YXRlKGV2ZW50LmtleUNvZGUsIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGdhbWVNYW5hZ2VyID0gbmV3IEdhbWVNYW5hZ2VyKGRyYXdTZXJ2aWNlLCBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIpO1xyXG4gICAgZ2FtZU1hbmFnZXIuc3RhcnQoKTtcclxufSkoZG9jdW1lbnQpO1xyXG4iLCJ2YXIgQ29sbGlzaW9uU2VydmljZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIENvbGxpc2lvblNlcnZpY2UoKSB7XHJcbiAgICB9XHJcbiAgICBDb2xsaXNpb25TZXJ2aWNlLmludGVyc2VjdHMgPSBmdW5jdGlvbiAoZW50aXR5MSwgZW50aXR5Mikge1xyXG4gICAgICAgIHZhciBlMXgxID0gZW50aXR5MS5wb3NpdGlvbi54O1xyXG4gICAgICAgIHZhciBlMXgyID0gZW50aXR5MS5wb3NpdGlvbi54ICsgZW50aXR5MS53aWR0aDtcclxuICAgICAgICB2YXIgZTJ4MSA9IGVudGl0eTIucG9zaXRpb24ueDtcclxuICAgICAgICB2YXIgZTJ4MiA9IGVudGl0eTIucG9zaXRpb24ueCArIGVudGl0eTIud2lkdGg7XHJcbiAgICAgICAgaWYgKGUxeDEgPiBlMngyIHx8IGUxeDIgPCBlMngxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGUxeTEgPSBlbnRpdHkxLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgdmFyIGUxeTIgPSBlbnRpdHkxLnBvc2l0aW9uLnkgKyBlbnRpdHkxLmhlaWdodDtcclxuICAgICAgICB2YXIgZTJ5MSA9IGVudGl0eTIucG9zaXRpb24ueTtcclxuICAgICAgICB2YXIgZTJ5MiA9IGVudGl0eTIucG9zaXRpb24ueSArIGVudGl0eTIuaGVpZ2h0O1xyXG4gICAgICAgIGlmIChlMXkxID4gZTJ5MiB8fCBlMXkyIDwgZTJ5MSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBDb2xsaXNpb25TZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBDb2xsaXNpb25TZXJ2aWNlO1xyXG4iLCJ2YXIgRHJhd1NlcnZpY2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBEcmF3U2VydmljZShjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdJbWFnZSA9IGZ1bmN0aW9uIChwb3MsIGltZykge1xyXG4gICAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShpbWcsIHBvcy54LCBwb3MueSk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmRyYXdJbWFnZUZyb21GaWxlID0gZnVuY3Rpb24gKHBvcywgZmlsZVBhdGgpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBfdGhpcy5jdHguZHJhd0ltYWdlKGltZywgcG9zLngsIHBvcy55KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGltZy5zcmMgPSBmaWxlUGF0aDtcclxuICAgICAgICByZXR1cm4gaW1nO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmN0eC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgICB9O1xyXG4gICAgRHJhd1NlcnZpY2UucHJvdG90eXBlLmZpbGwgPSBmdW5jdGlvbiAoY29sb3IpIHtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGwoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd0xpbmUgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5tb3ZlVG8oeDEsIHkxKTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeDIsIHkyKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd1NxdWFyZSA9IGZ1bmN0aW9uICh4LCB5LCBzaWRlU2l6ZSkge1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoeCwgeSwgc2lkZVNpemUsIHNpZGVTaXplKTtcclxuICAgICAgICB0aGlzLmN0eC5zdHJva2UoKTtcclxuICAgIH07XHJcbiAgICBEcmF3U2VydmljZS5wcm90b3R5cGUuZHJhd1JlY3QgPSBmdW5jdGlvbiAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY3R4Lm1vdmVUbyh4LCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHdpZHRoLCB5KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmN0eC5saW5lVG8oeCwgeSArIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jdHgubGluZVRvKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY3R4LmNsb3NlUGF0aCgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5kcmF3Q2lyY2xlID0gZnVuY3Rpb24gKHgsIHksIHIpIHtcclxuICAgICAgICB0aGlzLmN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmN0eC5hcmMoeCwgeSwgciwgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xyXG4gICAgfTtcclxuICAgIERyYXdTZXJ2aWNlLnByb3RvdHlwZS5maWxsQ2lyY2xlID0gZnVuY3Rpb24gKHgsIHksIHIsIGNvbG9yKSB7XHJcbiAgICAgICAgdGhpcy5jdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jdHguYXJjKHgsIHksIHIsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB2YXIgZmlsbFJ1bGUgPSAnbm9uemVybyc7XHJcbiAgICAgICAgdGhpcy5jdHguZmlsbChmaWxsUnVsZSk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIERyYXdTZXJ2aWNlO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBEcmF3U2VydmljZTtcclxuIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi4vZW50aXRpZXMvcGxheWVyJztcclxuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSAnLi4vZW50aXRpZXMvdGFyZ2V0JztcclxuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICcuLi9lbnRpdGllcy9jb21tb24nO1xyXG5pbXBvcnQgeyBLZXlib2FyZEJ1dHRvbnMgfSBmcm9tICcuL2tleWJvYXJkLWV2ZW50cy1jb250cm9sbGVyJztcclxuaW1wb3J0IENvbGxpc2lvblNlcnZpY2UgZnJvbSAnLi9jb2xsaXNpb24tc2VydmljZSc7XHJcbnZhciBHYW1lTWFuYWdlciA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEdhbWVNYW5hZ2VyKGRyYXdTZXJ2aWNlLCBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLmRyYXdTZXJ2aWNlID0gZHJhd1NlcnZpY2U7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSBrZXlib2FyZEV2ZW50c0NvbnRyb2xsZXI7XHJcbiAgICAgICAgdGhpcy50YXJnZXRzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgdGhpcy5yb2NrZXRzID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcbiAgICBHYW1lTWFuYWdlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5kcmF3U2VydmljZSk7XHJcbiAgICAgICAgdmFyIHRhY3RJbnRlcnZhbCA9IDEwMDAgLyA2MDtcclxuICAgICAgICB2YXIgaSA9IDA7XHJcbiAgICAgICAgdmFyIGludGVydmFsSWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghX3RoaXMucGxheWVyLmlzQWxpdmUoKSkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJHQU1FIE9WRVJcIik7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhd1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL1RhcmdldHMgZ2VuZXJhdGlvbiAtLS0+Pj5cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICBpZiAoaSAlIDEwMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50YXJnZXRzLnB1c2gobmV3IFRhcmdldChuZXcgUG9pbnQoMTM3ICogcmFuZG9tTnVtYmVyICsgaSAlIDE4NywgMCksIF90aGlzLmRyYXdTZXJ2aWNlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy88PDwtLS0gVGFyZ2V0cyBnZW5lcmF0aW9uXHJcbiAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgX3RoaXMuZHJhd1NlcnZpY2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy5sZWZ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5tb3ZlTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLnJpZ2h0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5tb3ZlUmlnaHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5rZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIuSXNQcmVzc2VkKEtleWJvYXJkQnV0dG9ucy51cCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2Rvbid0IGFsbG93IHRvIG1vdmUgdXBcclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGxheWVyLm1vdmVVcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5Jc1ByZXNzZWQoS2V5Ym9hcmRCdXR0b25zLmRvd24pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9kb24ndCBhbGxvdyB0byBtb3ZlIGRvd25cclxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGxheWVyLm1vdmVEb3duKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMua2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLklzUHJlc3NlZChLZXlib2FyZEJ1dHRvbnMuc3BhY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvY2tldCA9IF90aGlzLnBsYXllci5maXJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvY2tldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yb2NrZXRzLnB1c2gocm9ja2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5wbGF5ZXIuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMudGFyZ2V0cyA9IF90aGlzLnRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uIChlbnRpdHkpIHsgcmV0dXJuIGVudGl0eS5pc0FsaXZlKCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IF90aGlzLnRhcmdldHM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IF9hW19pXTtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChDb2xsaXNpb25TZXJ2aWNlLmludGVyc2VjdHMoX3RoaXMucGxheWVyLCB0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnBsYXllci5vblRhcmdldENvbGxpc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gX3RoaXMucm9ja2V0czsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvY2tldCA9IF9jW19iXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENvbGxpc2lvblNlcnZpY2UuaW50ZXJzZWN0cyhyb2NrZXQsIHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5vblJvY2tldENvbGxpc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9ja2V0Lm9uVGFyZ2V0Q29sbGlzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yb2NrZXRzID0gX3RoaXMucm9ja2V0cy5maWx0ZXIoZnVuY3Rpb24gKHJvY2tldCkgeyByZXR1cm4gIXJvY2tldC5pc0Rlc3Ryb3llZDsgfSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfZCA9IDAsIF9lID0gX3RoaXMucm9ja2V0czsgX2QgPCBfZS5sZW5ndGg7IF9kKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcm9ja2V0ID0gX2VbX2RdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvY2tldC5kcmF3KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIHRhY3RJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIEdhbWVNYW5hZ2VyO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBHYW1lTWFuYWdlcjtcclxuIiwidmFyIEtleVN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gS2V5U3RhdGUoa2V5Q29kZSwgcHJlc3NlZCkge1xyXG4gICAgICAgIHRoaXMua2V5Q29kZSA9IGtleUNvZGU7XHJcbiAgICAgICAgdGhpcy5wcmVzc2VkID0gcHJlc3NlZDtcclxuICAgIH1cclxuICAgIHJldHVybiBLZXlTdGF0ZTtcclxufSgpKTtcclxudmFyIEtleWJvYXJkQnV0dG9ucyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIEtleWJvYXJkQnV0dG9ucygpIHtcclxuICAgIH1cclxuICAgIEtleWJvYXJkQnV0dG9ucy5sZWZ0ID0gMzc7XHJcbiAgICBLZXlib2FyZEJ1dHRvbnMudXAgPSAzODtcclxuICAgIEtleWJvYXJkQnV0dG9ucy5yaWdodCA9IDM5O1xyXG4gICAgS2V5Ym9hcmRCdXR0b25zLmRvd24gPSA0MDtcclxuICAgIEtleWJvYXJkQnV0dG9ucy5zcGFjZSA9IDMyO1xyXG4gICAgcmV0dXJuIEtleWJvYXJkQnV0dG9ucztcclxufSgpKTtcclxuZXhwb3J0IHsgS2V5Ym9hcmRCdXR0b25zIH07XHJcbnZhciBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIoKSB7XHJcbiAgICAgICAgdGhpcy5rZXlTdGF0ZXMgPSBbXTtcclxuICAgIH1cclxuICAgIEtleWJvYXJkRXZlbnRzQ29udHJvbGxlci5wcm90b3R5cGUuVXBkYXRlS2V5U3RhdGUgPSBmdW5jdGlvbiAoa2V5Q29kZSwgaXNQcmVzc2VkKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICBpZiAoa2V5U3RhdGUpIHtcclxuICAgICAgICAgICAga2V5U3RhdGUucHJlc3NlZCA9IGlzUHJlc3NlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5U3RhdGVzLnB1c2gobmV3IEtleVN0YXRlKGtleUNvZGUsIGlzUHJlc3NlZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXIucHJvdG90eXBlLklzUHJlc3NlZCA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIGtleVN0YXRlID0gdGhpcy5HZXRLZXlTdGF0ZShrZXlDb2RlKTtcclxuICAgICAgICByZXR1cm4ga2V5U3RhdGUgPyBrZXlTdGF0ZS5wcmVzc2VkIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgS2V5Ym9hcmRFdmVudHNDb250cm9sbGVyLnByb3RvdHlwZS5HZXRLZXlTdGF0ZSA9IGZ1bmN0aW9uIChrZXlDb2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdHMgPSB0aGlzLmtleVN0YXRlcy5maWx0ZXIoZnVuY3Rpb24gKGtzKSB7IHJldHVybiBrcy5rZXlDb2RlID09IGtleUNvZGU7IH0pO1xyXG4gICAgICAgIGlmICghcmVzdWx0cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBLZXlib2FyZEV2ZW50c0NvbnRyb2xsZXI7XHJcbn0oKSk7XHJcbmV4cG9ydCB7IEtleWJvYXJkRXZlbnRzQ29udHJvbGxlciB9O1xyXG47XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=