webpackJsonp([5],{

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.addd = function () {
        this.navCtrl.setRoot('MessagesPage');
        var screenLoad = this.loadingController.create({
            content: "Loading",
            duration: 1500
        });
        screenLoad.present();
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Dhruva\shrihack\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-navbar color=\'navbarColor\'>\n\n\n\n        <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n            <ion-label start>\n\n                <ion-buttons start>\n\n                    <button ion-button menuToggle>\n\n                        <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n            <ion-label start style="font-size:20px !important; margin-top: 20px !important; " text-wrap class="textt">\n\n                <img src="../../assets/imgs/amaazon1.png" style="width: 40%;">\n\n\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="search" style="padding-right: 24px; font-size:25px"></ion-icon>\n\n                        <ion-icon name="cart" style="color: white; font-size:25px "></ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n\n\n        </ion-item>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon ios="ios-aperture" md="md-aperture" style="padding-right: 10px;"></ion-icon>Camera\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button (click)="addd()">\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="laptop" style="padding-right: 10px;"></ion-icon>Laptop\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon ios="ios-american-football" md="md-american-football" style="padding-right: 10px;"></ion-icon>\n\n                Sports\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon ios="ios-headset" md="md-headset" style="padding-right: 10px;"></ion-icon>Headphones\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon ios="ios-brush" md="md-brush" style="padding-right: 10px;"></ion-icon>Art\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="build" style="padding-right: 10px;"></ion-icon>Hardware\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="phone-portrait" style="padding-right: 10px;"></ion-icon>Mobile\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="ice-cream" style="padding-right: 10px;"></ion-icon>Grocery\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="snow" style="padding-right: 10px;"></ion-icon>Air conditioner\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="logo-playstation" style="padding-right: 10px;"></ion-icon>Playstation\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="outlet" style="padding-right: 10px;"></ion-icon>Plugs,Wire,Socket..\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="shirt" style="padding-right: 10px;"></ion-icon>T-Shirts\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>\n\n                <ion-icon name="tablet-portrait" style="padding-right: 10px;"></ion-icon> Tablets\n\n            </ion-label>\n\n            <ion-label>\n\n                <ion-buttons end>\n\n                    <button ion-button>\n\n                        <ion-icon name="add" style="float:right;"> </ion-icon>\n\n                    </button>\n\n                </ion-buttons>\n\n            </ion-label>\n\n\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Dhruva\shrihack\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=5.js.map