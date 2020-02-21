webpackJsonp([2],{

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PintrestPageModule", function() { return PintrestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pintrest__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PintrestPageModule = /** @class */ (function () {
    function PintrestPageModule() {
    }
    PintrestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pintrest__["a" /* PintrestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pintrest__["a" /* PintrestPage */]),
            ],
        })
    ], PintrestPageModule);
    return PintrestPageModule;
}());

//# sourceMappingURL=pintrest.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PintrestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PintrestPage = /** @class */ (function () {
    function PintrestPage(navCtrl, navParams, http, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastController = toastController;
        this.imageList = [];
        this.nextPage = 'https://picsum.photos/v2/list';
        this.loadImages();
    }
    PintrestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PintrestPage');
    };
    PintrestPage.prototype.loadImages = function () {
        var _this = this;
        this.http.get(this.nextPage, { observe: 'response' }).subscribe(function (res) {
            console.log('res:', res);
            console.log(_this.parse_link_header(res.headers.get('link')));
            _this.nextPage = _this.parse_link_header(res.headers.get('link'))['next'];
            _this.imageList = _this.imageList.length == 0 ? res.body : _this.imageList.concat([res.body]);
        });
    };
    PintrestPage.prototype.parse_link_header = function (header) {
        if (header.length == 0) {
            return;
        }
        var parts = header.split(',');
        var links = {};
        parts.forEach(function (p) {
            var section = p.split(';');
            var url = section[0].replace(/<(.*)>/, '$1').trim();
            var name = section[1].replace(/rel="(.*)"/, '$1').trim();
            links[name] = url;
        });
        return links;
    };
    PintrestPage.prototype.pinn = function () {
        var toast = this.toastController.create({
            message: 'Image saved',
            duration: 2000,
        });
        toast.present();
    };
    PintrestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pintrest',template:/*ion-inline-start:"C:\projects\ponder\src\pages\pintrest\pintrest.html"*/'<ion-header no-border>\n\n  <ion-navbar color=\'navbarColor\'>\n\n\n\n    <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n      <ion-label start>\n\n        <ion-buttons start>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-label>\n\n      <ion-label start style="font-size:20px !important; margin-top: 25px !important; " text-wrap class="textt">\n\n        <img src="" style="width:40%">\n\n\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n<ion-content padding >\n\n\n\n<div class="collection ion-padding ">\n\n<div class="collection-item" text-center *ngFor="let img of imageList">\n\n  <button ion-button (click)="pinn()">\n\n      <ion-icon name="bookmark" slot="start"></ion-icon>\n\n  </button>\n\n  <img [src]="img.download_url"/>\n\n  {{img.author}}\n\n</div>\n\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\projects\ponder\src\pages\pintrest\pintrest.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], PintrestPage);
    return PintrestPage;
}());

//# sourceMappingURL=pintrest.js.map

/***/ })

});
//# sourceMappingURL=2.js.map