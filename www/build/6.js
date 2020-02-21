webpackJsonp([6],{

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerPageModule", function() { return LoggerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logger__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoggerPageModule = /** @class */ (function () {
    function LoggerPageModule() {
    }
    LoggerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__logger__["a" /* LoggerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__logger__["a" /* LoggerPage */]),
            ],
        })
    ], LoggerPageModule);
    return LoggerPageModule;
}());

//# sourceMappingURL=logger.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerPage; });
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


var LoggerPage = /** @class */ (function () {
    function LoggerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.todos = [];
        this.protime = [];
    }
    LoggerPage.prototype.mode = function (arr1) {
        var mf = 1;
        var m = 0;
        var item;
        for (var i = 0; i < arr1.length; i++) {
            for (var j = i; j < arr1.length; j++) {
                if (arr1[i] == arr1[j])
                    m++;
                if (mf < m) {
                    mf = m;
                    item = arr1[i];
                }
            }
            m = 0;
        }
        return item;
    };
    LoggerPage.prototype.add = function () {
        this.todos.push(this.todo);
        this.todo = "";
        var date = new Date();
        this.protime.push(date.getHours());
        this.acttime = this.mode(this.protime);
    };
    LoggerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-logger',template:/*ion-inline-start:"C:\projects\ponder\src\pages\logger\logger.html"*/'<ion-header no-border>\n\n    <ion-navbar color=\'navbarColor\'>\n\n  \n\n      <ion-item color=\'navbarColor\' no-lines text-wrap style="padding:0px !important; ">\n\n        <ion-label start>\n\n          <ion-buttons start>\n\n            <button ion-button menuToggle>\n\n              <ion-icon name="menu" style="color: white; font-size:35px;" class="meinu"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n        </ion-label>\n\n        <ion-label start style="font-size:20px !important; margin-top: 25px !important; " text-wrap class="textt">\n\n          <img src="" style="width:40%">\n\n  \n\n        </ion-label>\n\n      </ion-item>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n\n\n<ion-content padding>\n\n    <h2 id="time">You are most productive at <span class="epictime">{{acttime}} hours</span></h2>\n\n    <h1 id="idea-text">Log your ideas!</h1>\n\n    <ion-item>\n\n        <ion-input [(ngModel)]="todo" placeholder="Enter your idea here" type="text" id="ideabro"></ion-input>\n\n    </ion-item>\n\n      <div class="center1">\n\n        <button ion-button full (click)="add()" id="add">Store your idea!</button>\n\n      </div>\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let t of todos">\n\n            <ion-item>\n\n                {{t}}\n\n            </ion-item>\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\projects\ponder\src\pages\logger\logger.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], LoggerPage);
    return LoggerPage;
}());

//# sourceMappingURL=logger.js.map

/***/ })

});
//# sourceMappingURL=6.js.map