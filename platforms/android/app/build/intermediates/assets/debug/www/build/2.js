webpackJsonp([2],{

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__(461);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* MessagesPage */]),
            ],
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.module.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, navParams, platform, ngZone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.ngZone = ngZone;
        this.chat = [];
        platform.ready().then(function () {
            ApiAIPromises.init({
                clientAccessToken: "ab8da10297044288abda5d72fc7076ed"
            }).then(function (result) { return console.log(result); });
        });
    }
    MessagesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        ApiAIPromises.requestText({
            query: "Hello"
        })
            .then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            _this.ngZone.run(function () {
                _this.chat.push(speech);
            });
        });
    };
    MessagesPage.prototype.ask = function (question) {
        var _this = this;
        this.chat.push(question);
        this.myform.nativeElement.value = '';
        ApiAIPromises.requestText({
            query: question
        })
            .then(function (_a) {
            var speech = _a.result.fulfillment.speech;
            _this.ngZone.run(function () {
                _this.chat.push(speech);
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('myform'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], MessagesPage.prototype, "myform", void 0);
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"C:\Users\Dhruva\shrihack\src\pages\messages\messages.html"*/'<ion-header no-border  >\n\n   <ion-navbar color=\'navbarColor\' >\n\n       <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n           <ion-label start>\n\n              <ion-buttons start>\n\n               <button ion-button menuToggle>\n\n                 <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n                </button>\n\n              </ion-buttons>  \n\n             </ion-label>\n\n             <ion-label start style="font-size:20px !important; margin-top: 20px !important; " text-wrap class="textt">\n\n             <img src="../../assets/imgs/amaazon1.png" style="width:40%;">\n\n           </ion-label>  \n\n             <ion-label>\n\n                 <ion-buttons end>\n\n                    <button ion-button >\n\n                       <ion-icon name="search" style="padding-right: 24px; font-size:25px"></ion-icon>\n\n                       <ion-icon name="cart" style="color: white; font-size:25px "></ion-icon>\n\n                     </button>\n\n                  </ion-buttons>  \n\n                </ion-label>\n\n           </ion-item>\n\n   </ion-navbar>\n\n </ion-header>\n\n\n\n<ion-content padding no-bounce>\n\n\n\n  <ion-grid >\n\n     <ion-row *ngFor="let cha of chat; let i = index">\n\n      <ion-col  offset-3 col-9  *ngIf="i%2!=0" class="user" text-wrap>\n\n            <span class="message">You:</span><br>\n\n            <span>{{cha}}</span>\n\n            </ion-col>\n\n       <ion-col offset  col-9 *ngIf="i%2==0" class="bot" text-wrap>\n\n            <span class="message">Srijon:</span><br>\n\n            <span>{{cha}}</span>\n\n            </ion-col>\n\n     </ion-row>     \n\n  </ion-grid>\n\n \n\n</ion-content>\n\n\n\n<ion-footer no-border no-bounce style="overflow-y: scroll;">\n\n   <ion-toolbar>\n\n      <ion-row class="bruhInput">\n\n          <ion-col col-9>\n\n            <ion-item no-lines>\n\n            \n\n          <input #myform ion-text type="text" placeholder="Message" [(ngModel)]="question" no-border style="border: none !important; width: 100%;">\n\n          </ion-item>\n\n          </ion-col>\n\n          <ion-col col-3>\n\n             <button ion-button (click)="ask(question)"  color="primary" style="float: right;  border-radius: 06px !important;" [disabled]="message === \'\'">\n\n            Send\n\n          </button>\n\n          </ion-col>\n\n        </ion-row>\n\n\n\n   </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Dhruva\shrihack\src\pages\messages\messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgZone */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ })

});
//# sourceMappingURL=2.js.map