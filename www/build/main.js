webpackJsonp([7],{

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

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		463,
		0
	],
	"../pages/logger/logger.module": [
		464,
		6
	],
	"../pages/login/login.module": [
		465,
		5
	],
	"../pages/music/music.module": [
		466,
		4
	],
	"../pages/patent/patent.module": [
		467,
		3
	],
	"../pages/pintrest/pintrest.module": [
		468,
		2
	],
	"../pages/register/register.module": [
		469,
		1
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera_preview__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_streaming_media_ngx__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_progress_bar__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyB8P5X8TyRAdUm1bhUGz9I4XsG3kqSGluU",
    authDomain: "shrii-finals.firebaseapp.com",
    databaseURL: "https://shrii-finals.firebaseio.com",
    projectId: "shrii-finals",
    storageBucket: "shrii-finals.appspot.com",
    messagingSenderId: "707548890228",
    appId: "1:707548890228:web:8906b8f13414e494633d21",
    measurementId: "G-GN0FS0ECQ3"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logger/logger.module#LoggerPageModule', name: 'LoggerPage', segment: 'logger', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/music/music.module#MusicPageModule', name: 'MusicPage', segment: 'music', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/patent/patent.module#PatentPageModule', name: 'PatentPage', segment: 'patent', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pintrest/pintrest.module#PintrestPageModule', name: 'PintrestPage', segment: 'pintrest', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_9__angular_fire_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular_progress_bar__["a" /* ProgressBarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_streaming_media_ngx__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera_preview__["a" /* CameraPreview */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera_ngx__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__);
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
        var _this = this;
        this.rootPage = "LoginPage";
        this.showSplash = true;
        this.declarePages();
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return _this.showSplash = false; });
        });
    }
    MyApp.prototype.declarePages = function () {
        this.pages = [
            { title: 'Home', name: "HomePage" },
            { title: 'Notes', name: "LoggerPage" },
            { title: 'Pintrest', name: "PintrestPage" },
            { title: 'Music', name: 'MusicPage' },
            { title: 'Patent', name: 'PatentPage' },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\projects\ponder\src\app\app.html"*/'\n\n <div *ngIf="showSplash" class="splash">\n\n    <div class="spinner">\n\n        <div class="cube1"></div>\n\n        <div class="cube2"></div>\n\n      </div>\n\n \n\n</div>\n\n\n\n\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color=\'navbarColor\'>\n\n      <ion-title>\n\n        <div class="profile-main">\n\n          <ion-avatar left>\n\n            <img class="profile-image" src="../assets/imgs/kabir_o.jpg">\n\n          </ion-avatar>\n\n          <h1> Hello, Kabir!</h1>\n\n        </div>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n  <ion-content no-bounce class="scroll-content">\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p.name)">\n\n        {{p.title}}\n\n      </button>\n\n      <div align=\'center\'>\n\n      </div>\n\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer align=\'center\'>\n\n    <ion-toolbar>\n\n      <ion-title>\n\n          <progress-bar [progress]="60" [color-degraded]="{\'0\': \'#00cbcb\',  \'15\': \'#f9c3d3\', \'25\': \'#fd8c8e\'}">\n\n            </progress-bar>\n\n        <p class="love">Made with <ion-icon ios="ios-heart" md="md-heart" style="color: red;"></ion-icon> by <a\n\n            style="color: #6699ee; text-decoration:none;" href="https://minet.co"> MINET </a></p>\n\n      </ion-title>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n</ion-menu>\n\n\n\n<ion-nav #content [root]="rootPage" swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\projects\ponder\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[270]);
//# sourceMappingURL=main.js.map