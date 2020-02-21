webpackJsonp([6],{

/***/ 179:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 179;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		453,
		5
	],
	"../pages/home/home.module": [
		452,
		4
	],
	"../pages/login/login.module": [
		454,
		3
	],
	"../pages/messages/messages.module": [
		455,
		2
	],
	"../pages/register/register.module": [
		456,
		1
	],
	"../pages/settings/settings.module": [
		457,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(389);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera_preview__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(266);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var firebaseConfig = {
    apiKey: "AIzaSyDnE2amm2FgH32roVibrVdoT9QjTxAYSO8",
    authDomain: "shrihack-app.firebaseapp.com",
    databaseURL: "https://shrihack-app.firebaseio.com",
    projectId: "shrihack-app",
    storageBucket: "shrihack-app.appspot.com",
    messagingSenderId: "533275225714",
    appId: "1:533275225714:web:182a490595d95587c69ceb",
    measurementId: "G-9TYQE8KQWW"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["b" /* AngularFireAuthModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = "LoginPage";
        this.declarePages();
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.declarePages = function () {
        this.pages = [
            { title: 'Home', name: "HomePage" },
            { title: 'Get Help', name: "ChatPage" },
            { title: 'Logout', name: null },
        ];
    };
    MyApp.prototype.openPage = function (page) {
        if (page) {
            this.nav.setRoot(page);
        }
        else {
            this.nav.setRoot(this.rootPage);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Dhruva\shrihack\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color=\'navbarColor\'>\n\n      <ion-title>\n\n        <div class="profile-main">\n\n          <ion-avatar left>\n\n            <img class="profile-image" src="../assets/imgs/kabir_o.jpg">\n\n          </ion-avatar>\n\n          <h1> Hello, Kabir!</h1>\n\n        </div>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content no-bounce class="scroll-content">\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.name)">\n\n        {{p.title}}\n\n      </button>\n\n      <div align=\'center\'>\n\n      </div>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer align=\'center\'>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n        <p class="love">Made with <ion-icon ios="ios-heart" md="md-heart" style="color: red;"></ion-icon> by <a\n\n            style="color: #6699ee; text-decoration:none;" href="https://minet.co"> MINET </a></p>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Dhruva\shrihack\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map