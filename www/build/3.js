webpackJsonp([3],{

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatentPageModule", function() { return PatentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patent__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_progress_bar__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PatentPageModule = /** @class */ (function () {
    function PatentPageModule() {
    }
    PatentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__patent__["a" /* PatentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__patent__["a" /* PatentPage */]),
            ],
        })
    ], PatentPageModule);
    return PatentPageModule;
}());

//# sourceMappingURL=patent.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentPage; });
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


var PatentPage = /** @class */ (function () {
    function PatentPage(navCtrl, navParams, toastController, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.x = 2;
    }
    PatentPage.prototype.yoyo = function () {
        var screenLoad = this.loadingController.create({
            content: "Loading",
            duration: 1500
        });
        screenLoad.present();
        if (this.text == null) {
            var toast = this.toastController.create({
                message: 'Enter Product',
                duration: 2000,
            });
            toast.present();
        }
        else {
            document.getElementById("myDIV").style.display = "block";
        }
    };
    PatentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-patent',template:/*ion-inline-start:"C:\projects\ponder\src\pages\patent\patent.html"*/'<ion-header no-border>\n\n  <ion-navbar color=\'navbarColor\'>\n\n\n\n    <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n      <ion-label start>\n\n        <ion-buttons start>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-label>\n\n      <ion-label start style="font-size:20px !important; margin-top: 25px !important; " text-wrap class="textt">\n\n        <img src="" style="width:40%">\n\n\n\n      </ion-label>\n\n    </ion-item>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding scrollY="true" align=\'center\'>\n\n\n\n    <ion-item id="input" style="background-color:white;" >\n\n      \n\n        <ion-input placeholder=\'Text\' [(ngModel)]="text" position="floating" style="color: black;"></ion-input>\n\n      </ion-item>\n\n    \n\n      <button ion-buttom full (click)="yoyo()" id="button" shape="round" block\n\n      style="color: white; background-color: #6699ee;">Submit</button>\n\n\n\n\n\n  <div class="progress" id="myDIV" align=\'center\'>\n\n   \n\n    <ion-item>\n\n        Unique:\n\n        <progress-bar [progress]="23"  [color-degraded]="{\'0\': \'#00cbcb\',  \'15\': \'#f9c3d3\', \'25\': \'#fd8c8e\'}" #prog>\n\n        </progress-bar>\n\n    </ion-item>\n\n    \n\n    \n\n    <ion-item>\n\n        Plagiarized:\n\n        <progress-bar [progress]="78"  [color-degraded]="{\'0\': \'#00cbcb\',  \'15\': \'#f9c3d3\', \'25\': \'#fd8c8e\'}" #prog>\n\n        </progress-bar>\n\n    </ion-item>\n\n    <ion-item>\n\n        Checked:\n\n         <progress-bar [progress]="70" [color-degraded]="{\'0\': \'#00cbcb\',  \'15\': \'#f9c3d3\', \'25\': \'#fd8c8e\'}">\n\n          </progress-bar>\n\n    </ion-item>\n\n  \n\n  </div>\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"C:\projects\ponder\src\pages\patent\patent.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PatentPage);
    return PatentPage;
}());

//# sourceMappingURL=patent.js.map

/***/ })

});
//# sourceMappingURL=3.js.map