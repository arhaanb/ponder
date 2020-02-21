webpackJsonp([4],{

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicPageModule", function() { return MusicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__music__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MusicPageModule = /** @class */ (function () {
    function MusicPageModule() {
    }
    MusicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__music__["a" /* MusicPage */]),
            ],
        })
    ], MusicPageModule);
    return MusicPageModule;
}());

//# sourceMappingURL=music.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MusicPage; });
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


var MusicPage = /** @class */ (function () {
    function MusicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.audio1();
    }
    MusicPage.prototype.audio1 = function () {
        this.audio = new Audio("../../assets/a1.ogg");
        this.audio.play();
    };
    MusicPage.prototype.audio2 = function () {
        this.audio = new Audio("../../assets/a2.ogg");
        this.audio.play();
    };
    MusicPage.prototype.audio3 = function () {
        this.audio = new Audio("../../assets/a3.ogg");
        this.audio.play();
    };
    MusicPage.prototype.audio4 = function () {
        this.audio = new Audio("../../assets/a4.ogg");
        this.audio.play();
    };
    MusicPage.prototype.audio5 = function () {
        this.audio = new Audio("../../assets/a5.ogg");
        this.audio.play();
    };
    MusicPage.prototype.audio6 = function () {
        this.audio = new Audio("../../assets/a6.ogg");
        this.audio.play();
    };
    MusicPage.prototype.startAudio = function () {
        this.audio.play();
    };
    MusicPage.prototype.stopAudio = function () {
        this.audio.pause();
    };
    MusicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-music',template:/*ion-inline-start:"C:\projects\ponder\src\pages\music\music.html"*/'<ion-header no-border>\n\n  <ion-navbar color=\'navbarColor\'>\n\n\n\n    <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n      <ion-label start>\n\n        <ion-buttons start>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-label>\n\n      <ion-label start style="font-size:20px !important; margin-top: 25px !important; " text-wrap class="textt">\n\n        <img src="" style="width:40%">\n\n\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding scrollY="true">\n\n    <div class="headboi">\n\n        <img src="../../assets/imgs/kabir_o.jpg">\n\n        <h1>focus</h1>\n\n      </div>\n\n    \n\n    \n\n        <div class="song" (click)="audio1()">\n\n          <div class="album"><img src="../../assets/imgs/f1.png" class="albumart"></div>\n\n          <div class="texty">  \n\n            <div class="info">\n\n              <h2>Kai</h2>\n\n              <h4>Aditya Pramar</h4>\n\n            </div>\n\n              \n\n          </div>\n\n        </div>\n\n    \n\n        <div class="song" (click)="audio2()">\n\n          <div class="album"><img src="../../assets/imgs/f2.png" class="albumart"></div>\n\n          <div class="texty">  \n\n            <div class="info">\n\n              <h2>Sage</h2>\n\n              <h4>Aditya Pramar</h4>\n\n            </div>\n\n             \n\n          </div>\n\n        </div>\n\n    \n\n        <div class="song" (click)="audio3()">\n\n          <div class="album"><img src="../../assets/imgs/f3.png" class="albumart"></div>\n\n          <div class="texty"> \n\n            <div class="info">\n\n              <h2>Choosing Life</h2>\n\n              <h4>Philip Glass</h4>\n\n            </div>\n\n          \n\n          </div>\n\n        </div>\n\n    \n\n        <div class="song" (click)="audio4()">\n\n          <div class="album"><img src="../../assets/imgs/f4.png" class="albumart"></div>\n\n          <div class="texty">  \n\n            <div class="info">\n\n              <h2>As We Keep Searching</h2>\n\n              <h4>Banshee</h4>\n\n            </div>\n\n              \n\n          </div>\n\n        </div>\n\n    \n\n        <div class="song" (click)="audio5()">\n\n          <div class="album"><img src="../../assets/imgs/f5.png" class="albumart"></div>\n\n          <div class="texty">  \n\n            <div class="info">\n\n              <h2>Rick \'N Morty</h2>\n\n              <h4>Swum</h4>\n\n            </div>\n\n          \n\n          </div>\n\n        </div>\n\n    \n\n        <div class="song" (click)="audio6()">\n\n          <div class="album"><img src="../../assets/imgs/f6.jpg" class="albumart"></div>\n\n          <div class="texty">  \n\n            <div class="info">\n\n              <h2>Slow Dancing In The Dark</h2>\n\n              <h4>Joji</h4>\n\n            </div>\n\n           \n\n          </div>\n\n        </div>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n\n  <div align=\'center\'>\n\n    <button ion-button (click)="startAudio()" style="background-color: #6699ee;" id="hibutton" >\n\n      <ion-icon name="play" id="ppicon"></ion-icon>\n\n      </button>\n\n  \n\n      <button ion-button (click)="stopAudio()" style="background-color: #6699ee;" id="hibutton" >\n\n      <ion-icon name="pause" id="ppicon"></ion-icon>\n\n        </button>\n\n  </div>\n\n  \n\n</ion-footer>'/*ion-inline-end:"C:\projects\ponder\src\pages\music\music.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MusicPage);
    return MusicPage;
}());

//# sourceMappingURL=music.js.map

/***/ })

});
//# sourceMappingURL=4.js.map