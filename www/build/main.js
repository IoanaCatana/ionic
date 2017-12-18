webpackJsonp([6],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BalancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BalancePage = (function () {
    function BalancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BalancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BalancePage');
    };
    BalancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-balance',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\balance\balance.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Balance</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>Total Amount</h1>\n  <br>\n  <p>100 kr.</p>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\balance\balance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], BalancePage);
    return BalancePage;
}());

//# sourceMappingURL=balance.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepositPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DepositPage = (function () {
    function DepositPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DepositPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepositPage');
    };
    DepositPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-deposit',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\deposit\deposit.html"*/'<!--\n  Generated template for the DepositPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Deposit</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <h6>Please enter the amount</h6>\n    <br>\n    \n    <ion-item>\n        <ion-label>DKK</ion-label>\n        <ion-input type="text" value="" [(ngModel)]="deposit"></ion-input>\n      </ion-item>\n\n\n  <ion-row>                \n    <ion-col>\n        <button (click)="goToDeposit()" ion-button color="primary" block>Deposit</button>\n      </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\deposit\deposit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DepositPage);
    return DepositPage;
}());

//# sourceMappingURL=deposit.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryPage = (function () {
    function HistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HistoryPage');
    };
    HistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-history',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\history\history.html"*/'<!--\n  Generated template for the SalesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>History</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <h2>18.12.2017</h2>\n        <p>Cola</p>\n        <p>Jhon Doe</p>\n        <ion-thumbnail item-end>\n          <p> -10kr.</p>\n        </ion-thumbnail>\n      </ion-item>\n\n      <ion-item>\n          <h2>03.12.2017</h2>\n          <p>Water</p>\n          <p>Jhon Doe</p>\n          <ion-thumbnail item-end>\n            <p> -10kr.</p>\n          </ion-thumbnail>\n        </ion-item>\n    \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\history\history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], HistoryPage);
    return HistoryPage;
}());

//# sourceMappingURL=history.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history_history__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__balance_balance__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deposit_deposit__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardPage = (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.goToProducts = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__products_products__["a" /* ProductsPage */]);
    };
    DashboardPage.prototype.goToHistory = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__history_history__["a" /* HistoryPage */]);
    };
    DashboardPage.prototype.goToBalance = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__balance_balance__["a" /* BalancePage */]);
    };
    DashboardPage.prototype.goToDeposit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__deposit_deposit__["a" /* DepositPage */]);
    };
    DashboardPage.prototype.goToLogout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\dashboard\dashboard.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Dashboard</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <img src="assets/imgs/easjlogo.png" alt="easjlogo.png">\n    <br> \n    <br>\n\n\n      <ion-row>                \n          <ion-col>\n              <button (click)="goToProducts()" ion-button color="primary" block>Products</button>\n            </ion-col>\n        </ion-row>\n      \n        <ion-row>                \n            <ion-col>\n                <button (click)="goToHistory()" ion-button color="primary" block>History</button>\n              </ion-col>\n          </ion-row>\n\n          <ion-row>                \n              <ion-col>\n                  <button (click)="goToBalance()" ion-button color="primary" block>Balance</button>\n                </ion-col>\n            </ion-row>\n\n            <ion-row>                \n                <ion-col>\n                    <button (click)="goToDeposit()" ion-button color="primary" block>Deposit</button>\n                  </ion-col>\n              </ion-row>\n\n          <ion-row>                \n            <ion-col>\n              <button (click)="goToLogout()" ion-button color="danger" block>Log Out</button>\n            </ion-col>\n          </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_item__ = __webpack_require__(375);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsPage = (function () {
    function ProductsPage(navCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.items = new Array();
        this.items.push(new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */]("Cola", 10, "DKK"));
        this.items.push(new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */]("Juice", 12, "DKK"));
        this.items.push(new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */]("Water", 8, "DKK"));
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_2__models_item__["a" /* Item */]("", 0, "");
    }
    ProductsPage.prototype.buyDrink = function () {
        var alert = this.alertCtrl.create({
            title: 'Confirm purchase',
            message: 'Do you want to buy this drink: ' + JSON.stringify(this.selectedItem),
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Buy',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\products\products.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Products\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content padding>\n\n    <h2>Please select a Drink</h2>\n    <br>\n  <ion-item>\n    <ion-label>Pick drink</ion-label>\n    <ion-select [(ngModel)]="selectedItem">\n        <ion-option *ngFor="let item of items" [value]="item">{{item.brand}} {{item.price}} {{item.valuta}}</ion-option>\n    </ion-select>\n  </ion-item>\n \n <br>\n  <button ion-button (click)="buyDrink()">Buy Drink</button>\n \n</ion-content>'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/balance/balance.module": [
		684,
		5
	],
	"../pages/dashboard/dashboard.module": [
		688,
		4
	],
	"../pages/deposit/deposit.module": [
		685,
		3
	],
	"../pages/history/history.module": [
		686,
		2
	],
	"../pages/login/login.module": [
		687,
		1
	],
	"../pages/products/products.module": [
		689,
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
webpackAsyncContext.id = 211;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.people = [];
        this.getItem();
    }
    HomePage.prototype.getItem = function () {
        var _this = this;
        this.http.get('https://randomuser.me/api/?results=100')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            _this.people = data.results;
        }, function (err) {
            alert(err);
        });
    };
    HomePage.prototype.goToDashboard = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>\n        Home\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item *ngFor="let person of people">\n        <ion-avatar item-left>\n          <img [src]="person.picture.thumbnail">\n        </ion-avatar>\n        <h2 style="text-transform: uppercase;">{{person.name.title}} {{person.name.first}} {{person.name.last}}</h2>\n        <p>{{person.email}}</p>\n        <p>{{person.group}}</p> \n        <button (click)="goToDashboard()" ion-button color="primary" block>Select</button>\n      </ion-item>\n    </ion-list>\n  </ion-content>'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_web_animations_js_web_animations_min__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(682);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_products_products__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_history_history__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_balance_balance__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_deposit_deposit__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_balance_balance__["a" /* BalancePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_deposit_deposit__["a" /* DepositPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/balance/balance.module#BalancePageModule', name: 'BalancePage', segment: 'balance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deposit/deposit.module#DepositPageModule', name: 'DepositPage', segment: 'deposit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history/history.module#HistoryPageModule', name: 'HistoryPage', segment: 'history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_history_history__["a" /* HistoryPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_balance_balance__["a" /* BalancePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_deposit_deposit__["a" /* DepositPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase__["a" /* InAppPurchase */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item(brand, price, valuta) {
        this.brand = brand;
        this.price = price;
        this.valuta = valuta;
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <img src="assets/imgs/easjlogo.png" alt="easjlogo.png">\n\n    <h6>Please enter username/password</h6>\n    <br>\n  \n          <ion-list>\n            \n           <ion-item>\n             <ion-label>Username</ion-label>\n             <ion-input type="text" value="" [(ngModel)]="username"></ion-input>\n           </ion-item>\n  \n           <ion-item>\n             <ion-label>Password</ion-label>\n             <ion-input type="password" value="" [(ngModel)]="password"></ion-input>\n           </ion-item>\n\n          </ion-list>\n\n     <ion-row>\n       <ion-col>\n         <button (click)="goHome()" ion-button color="primary" block>Sign in</button>\n       </ion-col>\n     </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Saida\Desktop\Interdiciplinary project\BarPaymentSystem\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[350]);
//# sourceMappingURL=main.js.map