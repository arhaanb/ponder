webpackJsonp([4],{

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(458);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingController = loadingController;
        this.slideOpts = {
            effect: 'flip'
        };
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage.prototype.imgclick = function () {
        this.navCtrl.setRoot('ChatPage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Dhruva\shrihack\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-navbar color=\'navbarColor\'>\n\n\n\n    <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n      <ion-label start>\n\n        <ion-buttons start>\n\n          <button ion-button menuToggle>\n\n            <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-label>\n\n      <ion-label start style="font-size:20px !important; margin-top: 25px !important; " text-wrap class="textt">\n\n        <img src="../../assets/imgs/amaazon1.png" style="width:40%">\n\n\n\n      </ion-label>\n\n      <ion-label>\n\n        <ion-buttons end>\n\n          <button ion-button>\n\n\n\n            <ion-icon name="cart" style="color: white; font-size:25px "></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n      </ion-label>\n\n\n\n\n\n    </ion-item>\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar color=\'navbarColor\'>\n\n    <ion-searchbar></ion-searchbar>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding scrollY="true">\n\n\n\n  <div align="center" class="card">\n\n\n\n    <button (click)=\'imgclick()\' style="border: none !important; background: none;">\n\n      <ion-card class="headcard">\n\n\n\n        <img src="../../assets/imgs/ads1.png" style="width: 100%; height: 100%;" />\n\n\n\n      </ion-card>\n\n    </button>\n\n  </div>\n\n  <div class="lesson">\n\n\n\n    <div align="center" class="card">\n\n\n\n\n\n      <ion-card class="merch">\n\n        <!--\n\n            https://www.amazon.com/PlayStation-4-Slim-1TB-Console/dp/B071CV8CG2/ref=sr_1_1?keywords=ps4&qid=1571568040&sr=8-1\n\n          -->\n\n        <ion-card-title style="color:black !important;">Blockbuster deals</ion-card-title>\n\n        <div style="height: auto;">\n\n\n\n          <ion-slides pager=\'false\' autoplay="2000" loop="true" speed="2000">\n\n            <ion-slide style="margin: 0% !important; padding: 0% !important;">\n\n              <img src="../../assets/imgs/playstation-4-slim-vertical-product-shot-01-us-07sep16.png" />\n\n\n\n            </ion-slide>\n\n            <ion-slide style="margin: 0% !important; padding: 0% !important; "><img\n\n                src="../../assets/imgs/playstation-4-dualshock-4-front-facing-02-us-14-nov16.jpeg"></ion-slide>\n\n\n\n          </ion-slides>\n\n\n\n\n\n        </div>\n\n        <ion-card-content align=\'center\'>\n\n          <div class="bottomimage">\n\n            <img src="../../assets/imgs/fifa20.jpg" />\n\n\n\n            <img src="../../assets/imgs/cod.jpg" />\n\n          </div>\n\n          <div class="bottomimage">\n\n            <img src="../../assets/imgs/spiderman.jpg" />\n\n            <img src="../../assets/imgs/tlou.jpg" />\n\n          </div>\n\n        </ion-card-content>\n\n        <ion-card-title style="color: black !important;"><a\n\n            href="https://www.amazon.com/PlayStation-4-Slim-1TB-Console/dp/B071CV8CG2/ref=sr_1_1?keywords=ps4&qid=1571568040&sr=8-1&th=1"\n\n            style="text-decoration: none;">More Deals</a></ion-card-title>\n\n      </ion-card>\n\n\n\n    </div>\n\n    <div class="twobruh">\n\n      <div align="center" class="card">\n\n\n\n\n\n\n\n        <ion-card class="merch">\n\n          <ion-card-title style="font-size: 16px;">Apple Watch</ion-card-title>\n\n          <img src="../../assets/imgs/71fp5ankbqL._AC_SL1500_.jpg">\n\n\n\n\n\n\n\n          <ion-card-content style="color: white !important;">\n\n            <a style="text-decoration: none;"\n\n              href="https://www.amazon.com/Apple-Watch-GPS-40mm-Aluminium-Sport/dp/B07HDJ95NJ/ref=sr_1_3?keywords=apple+watch&qid=1571568641&sr=8-3">\n\n              <h1>$8.99</h1>\n\n            </a>\n\n\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n      <div align="center" class="card">\n\n        <ion-card class="merch">\n\n          <ion-card-title style=" font-size: 16px;">Fitbit Versa</ion-card-title>\n\n          <img src="../../assets/imgs/71sSyaf-luL._AC_SL1500_.jpg">\n\n          <ion-card-content style="color: white !important;">\n\n            <a style="text-decoration: none;"\n\n              href="https://www.amazon.com/Fitbit-Smartwatch-Tracking-Bordeaux-Included/dp/B07TWFWJDZ/ref=sr_1_1_sspa?keywords=fitbit+versa&qid=1571568525&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEzVFEzNDhSOVdHSkwmZW5jcnlwdGVkSWQ9QTA5MjE2NTYxN01OVlVKWFc0Qks3JmVuY3J5cHRlZEFkSWQ9QTAyNTAwNTMxTDg2Q0xEM01PRlhFJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==">\n\n              <h1>$199.5</h1>\n\n            </a>\n\n\n\n\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n    <div class="threeebruh" align=\'center\'>\n\n      <ion-card class="merch">\n\n        <a style="text-decoration: none;"\n\n          href="https://www.amazon.in/Test-Exclusive-749/dp/B07DJ8K2KT/ref=sr_1_4?keywords=oneplus+7t&qid=1571568809&smid=A23AODI1X2CEAE&sr=8-4">\n\n          <ion-card-title style="color:black !important;">OnePlus 7T Pro</ion-card-title>\n\n        </a>\n\n        <div style="height: auto;">\n\n          <ion-slides pager=\'false\' autoplay="2000" loop="true" speed="2000" align=\'center\'\n\n            style="margin-left: 2px; margin-right: 2px; padding: 25px;">\n\n            <ion-slide>\n\n              <img src="../../assets/imgs/oneplus_front.jpg" style="height: 500px;" />\n\n\n\n            </ion-slide>\n\n            <ion-slide><img src="../../assets/imgs/oneplus_back.jpg" style="height: 500px;"></ion-slide>\n\n\n\n          </ion-slides>\n\n\n\n        </div>\n\n\n\n        <ion-card-title style="color: black !important;"><a></a></ion-card-title>\n\n      </ion-card>\n\n      <div align="center" class="card">\n\n        <ion-card class="merch">\n\n          <ion-card-title>Delightful decor for you</ion-card-title>\n\n          <div style="opacity: 10;">\n\n            <img src="../../assets/imgs/Dashboard_Card_2._SY260_CB463330888_.jpg" />\n\n          </div>\n\n          <ion-card-content style="color: white !important;">\n\n            <h1>$18.99</h1>\n\n          </ion-card-content>\n\n          <ion-card-title style="color: black !important;"><a style="text-decoration: none;"\n\n              href="https://www.amazon.in/s?k=decor&ref=nb_sb_noss_2">More Deals</a></ion-card-title>\n\n        </ion-card>\n\n      </div>\n\n    </div>\n\n    <ion-card class="merch" align=\'center\'>\n\n      <ion-card-title style="color:black !important;"> For the perfect breakfast.</ion-card-title>\n\n      <ion-card-content align=\'center\'>\n\n        <div class="bottomimage">\n\n          <img src="../../assets/imgs/11654636-4084642668540291.jpg" />\n\n\n\n          <img src="../../assets/imgs/6-grain-cereal-honeyville-9_1_2.jpg" />\n\n        </div>\n\n        <div class="bottomimage">\n\n          <img src="../../assets/imgs/320540_1100.jpg" />\n\n          <img src="../../assets/imgs/mix-dry-fruits-500x500.jpeg" />\n\n        </div>\n\n      </ion-card-content>\n\n      <ion-card-title style="color: black !important;" align=\'center\'><a style="text-decoration: none;"\n\n          href="https://www.amazon.in/s?k=peanut+butter+natural&crid=3RN433JLLYNXB&sprefix=peanut%2Caps%2C740&ref=nb_sb_ss_i_1_6">More\n\n          Deals</a></ion-card-title>\n\n    </ion-card>\n\n\n\n\n\n    <div align="center" class="card">\n\n\n\n\n\n\n\n      <ion-card class="merch">\n\n        <ion-card-title>Headphones</ion-card-title>\n\n        <div style="opacity: 10;">\n\n          <ion-slides pager=\'true\' autoplay="2000" loop="true" speed="2000">\n\n            <ion-slide> <img src="../../assets/imgs/61kdFKqBuXL._AC_SL1500_.jpg" /></ion-slide>\n\n            <ion-slide><img src="../../assets/imgs/61313eFmmCL._AC_SL1500_.jpg"></ion-slide>\n\n\n\n          </ion-slides>\n\n\n\n        </div>\n\n        <ion-card-content style="color: white !important;">\n\n          <a style="text-decoration: none;"\n\n            href="https://www.amazon.in/Sony-WH-1000XM3-Wireless-Cancellation-Headphones/dp/B07HZ8JWCL/ref=sr_1_1_sspa?keywords=sony+headphones&qid=1571569028&smid=A14CZOWI0VEHLG&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExOFo4V0lZQkNZQUlXJmVuY3J5cHRlZElkPUEwNDUwNDUzMlBEWjZHMjlQOU81RCZlbmNyeXB0ZWRBZElkPUEwOTI2NjQ1MjlCNFpBRUsxWkM5OSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=">\n\n            <h1>View More.</h1>\n\n          </a>\n\n\n\n        </ion-card-content>\n\n\n\n      </ion-card>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Dhruva\shrihack\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=4.js.map