webpackJsonp([3],{

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, menu, afAuth, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.afAuth = afAuth;
        this.toastController = toastController;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.Register = function () {
        this.navCtrl.setRoot('RegisterPage');
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email, password, c, res, err_1, toast, toast, toast;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this, email = _a.email, password = _a.password;
                        console.log(this.email);
                        console.log(this.password);
                        c = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 8]);
                        return [4 /*yield*/, this.afAuth.auth.signInWithEmailAndPassword(email, password)];
                    case 2:
                        res = _b.sent();
                        c++;
                        return [3 /*break*/, 8];
                    case 3:
                        err_1 = _b.sent();
                        console.dir(err_1);
                        if (!(err_1.code == "auth/user-not-found")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'User does not exist',
                                duration: 2000,
                            })];
                    case 4:
                        toast = _b.sent();
                        toast.present();
                        _b.label = 5;
                    case 5:
                        if (!(err_1.code == "auth/wrong-password")) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Wrong Password',
                                duration: 2000,
                            })];
                    case 6:
                        toast = _b.sent();
                        toast.present();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 8];
                    case 8:
                        if (!(c == 1)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.toastController.create({
                                message: 'Logged in successfully',
                                duration: 2000,
                            })];
                    case 9:
                        toast = _b.sent();
                        toast.present();
                        this.navCtrl.setRoot('HomePage');
                        _b.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Dhruva\shrihack\src\pages\login\login.html"*/'<ion-content padding text-center no-bounce>\n\n  <div align="center" class="center">\n\n    <img src="../../assets/icon/amaazon.png" class="logo">\n\n    <ion-list no-lines>\n\n      <ion-item id="input" style="background-color: #252f3d;">\n\n        <ion-icon name="person" item-left primary></ion-icon>\n\n        <ion-input placeholder=\'Email\' [(ngModel)]="email" position="floating" style="color: white;"></ion-input>\n\n      </ion-item>\n\n      &nbsp;\n\n      <ion-item id="input" style="background-color: #252f3d;">\n\n        <ion-icon name="key" item-left primary style="color: white;"></ion-icon>\n\n        <ion-input placeholder=\'Password\' type="password" [(ngModel)]="password" position="floating"\n\n          style="color: white;"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <button ion-buttom full (click)="login()" id="button" shape="round" block\n\n      style="color: white; background-color: #252f3d;">Log In</button>\n\n    &nbsp;\n\n    <button ion-buttom full (click)="Register()" id="button" shape="round" block\n\n      style="color: white; background-color: #252f3d;">Register</button>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Dhruva\shrihack\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=3.js.map