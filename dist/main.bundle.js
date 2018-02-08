webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__root__ = __webpack_require__("../../../../../src/app/root/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chinese__ = __webpack_require__("../../../../../src/app/chinese/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__heroes__ = __webpack_require__("../../../../../src/app/heroes/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__root__["a" /* RootComponent */],
                __WEBPACK_IMPORTED_MODULE_7__heroes__["b" /* HeroViewComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chinese__["b" /* CNPeopelViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* APP_ROUTES */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */] // <-- import the FormsModule before binding with [(ngModel)]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__heroes__["a" /* HeroService */], __WEBPACK_IMPORTED_MODULE_6__chinese__["a" /* CNPeopelService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__root__["a" /* RootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__heroes__ = __webpack_require__("../../../../../src/app/heroes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chinese__ = __webpack_require__("../../../../../src/app/chinese/index.ts");


var APP_ROUTES = [
    { path: 'heroes', component: __WEBPACK_IMPORTED_MODULE_0__heroes__["b" /* HeroViewComponent */] },
    { path: 'chinese', component: __WEBPACK_IMPORTED_MODULE_1__chinese__["b" /* CNPeopelViewComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/chinese/cn.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CNPEOPELS; });
var CNPEOPELS = [
    { id: 11, name: 'Johnny Cao' },
    { id: 12, name: 'Bill Wu' },
    { id: 13, name: 'Eric Tseng' }
];


/***/ }),

/***/ "../../../../../src/app/chinese/cn.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CNPeopelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cn_model__ = __webpack_require__("../../../../../src/app/chinese/cn.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CNPeopelService = /** @class */ (function () {
    function CNPeopelService() {
    }
    CNPeopelService.prototype.getHeroes = function () {
        return __WEBPACK_IMPORTED_MODULE_1__cn_model__["a" /* CNPEOPELS */];
    };
    CNPeopelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CNPeopelService);
    return CNPeopelService;
}());



/***/ }),

/***/ "../../../../../src/app/chinese/cn.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "   .selected {\r\n      background-color: #CFD8DC !important;\r\n      color: #ff8080;\r\n    }\r\n    .heroes {\r\n      margin: 0 0 2em 0;\r\n      list-style-type: none;\r\n      padding: 0;\r\n      width: 15em;\r\n    }\r\n    .heroes li {\r\n      cursor: pointer;\r\n      position: relative;\r\n      left: 0;\r\n      background-color: #EEE;\r\n      margin: .5em;\r\n      padding: .3em 0;\r\n      height: 1.6em;\r\n      border-radius: 4px;\r\n    }\r\n    .heroes li.selected:hover {\r\n      background-color: #BBD8DC !important;\r\n      color: white;\r\n    }\r\n    .heroes li:hover {\r\n      color: #607D8B;\r\n      background-color: #DDD;\r\n      left: .1em;\r\n    }\r\n    .heroes .text {\r\n      position: relative;\r\n      top: -3px;\r\n    }\r\n    .heroes .badge {\r\n      display: inline-block;\r\n      font-size: small;\r\n      color: white;\r\n      padding: 0.8em 0.7em 0 0.7em;\r\n      background-color: #607D8B;\r\n      line-height: 1em;\r\n      position: relative;\r\n      left: -1px;\r\n      top: -4px;\r\n      height: 1.8em;\r\n      margin-right: .8em;\r\n      border-radius: 4px 0 0 4px;\r\n    }\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chinese/cn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CNPeopel; });
var CNPeopel = /** @class */ (function () {
    function CNPeopel() {
    }
    return CNPeopel;
}());



/***/ }),

/***/ "../../../../../src/app/chinese/cn.view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CNPeopelViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cn__ = __webpack_require__("../../../../../src/app/chinese/cn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cn_service__ = __webpack_require__("../../../../../src/app/chinese/cn.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CNPeopelViewComponent = /** @class */ (function () {
    function CNPeopelViewComponent(heroService) {
        this.heroService = heroService;
    }
    CNPeopelViewComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    CNPeopelViewComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__cn__["a" /* CNPeopel */])
    ], CNPeopelViewComponent.prototype, "hero", void 0);
    CNPeopelViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cn',
            styles: [__webpack_require__("../../../../../src/app/chinese/cn.style.css")],
            template: "\n    <h2>Chinese Peopel</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div>\n         <label>id:</label>\n        {{hero.id}}\n      </div>\n       <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__cn_service__["a" /* CNPeopelService */]])
    ], CNPeopelViewComponent);
    return CNPeopelViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chinese/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cn_model__ = __webpack_require__("../../../../../src/app/chinese/cn.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cn_service__ = __webpack_require__("../../../../../src/app/chinese/cn.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__cn_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cn_view_component__ = __webpack_require__("../../../../../src/app/chinese/cn.view.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__cn_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cn__ = __webpack_require__("../../../../../src/app/chinese/cn.ts");
/* unused harmony namespace reexport */
 // re-export all of its exports
 // re-export all of its exports




/***/ }),

/***/ "../../../../../src/app/heroes/hero.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEROES; });
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];


/***/ }),

/***/ "../../../../../src/app/heroes/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_model__ = __webpack_require__("../../../../../src/app/heroes/hero.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HeroService = /** @class */ (function () {
    function HeroService() {
    }
    HeroService.prototype.getHeroes = function () {
        return __WEBPACK_IMPORTED_MODULE_1__hero_model__["a" /* HEROES */];
    };
    HeroService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/hero.style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "   .selected {\r\n      background-color: #CFD8DC !important;\r\n      color: white;\r\n    }\r\n    .heroes {\r\n      margin: 0 0 2em 0;\r\n      list-style-type: none;\r\n      padding: 0;\r\n      width: 15em;\r\n    }\r\n    .heroes li {\r\n      cursor: pointer;\r\n      position: relative;\r\n      left: 0;\r\n      background-color: #EEE;\r\n      margin: .5em;\r\n      padding: .3em 0;\r\n      height: 1.6em;\r\n      border-radius: 4px;\r\n    }\r\n    .heroes li.selected:hover {\r\n      background-color: #BBD8DC !important;\r\n      color: white;\r\n    }\r\n    .heroes li:hover {\r\n      color: #607D8B;\r\n      background-color: #DDD;\r\n      left: .1em;\r\n    }\r\n    .heroes .text {\r\n      position: relative;\r\n      top: -3px;\r\n    }\r\n    .heroes .badge {\r\n      display: inline-block;\r\n      font-size: small;\r\n      color: white;\r\n      padding: 0.8em 0.7em 0 0.7em;\r\n      background-color: #607D8B;\r\n      line-height: 1em;\r\n      position: relative;\r\n      left: -1px;\r\n      top: -4px;\r\n      height: 1.8em;\r\n      margin-right: .8em;\r\n      border-radius: 4px 0 0 4px;\r\n    }\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/heroes/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/hero.view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero__ = __webpack_require__("../../../../../src/app/heroes/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_service__ = __webpack_require__("../../../../../src/app/heroes/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroViewComponent = /** @class */ (function () {
    function HeroViewComponent(heroService) {
        this.heroService = heroService;
    }
    HeroViewComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroViewComponent.prototype.ngOnInit = function () {
        this.heroes = this.heroService.getHeroes();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__hero__["a" /* Hero */])
    ], HeroViewComponent.prototype, "hero", void 0);
    HeroViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-hero',
            styles: [__webpack_require__("../../../../../src/app/heroes/hero.style.css")],
            template: "\n    <h2>My Heroes</h2>\n    <ul class=\"heroes\">\n      <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero === selectedHero\"\n        (click)=\"onSelect(hero)\">\n        <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n      </li>\n    </ul>\n\n    <div *ngIf=\"hero\">\n      <h2>{{hero.name}} details!</h2>\n      <div>\n         <label>id:</label>\n        {{hero.id}}\n      </div>\n       <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__hero_service__["a" /* HeroService */]])
    ], HeroViewComponent);
    return HeroViewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/heroes/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hero_model__ = __webpack_require__("../../../../../src/app/heroes/hero.model.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hero_service__ = __webpack_require__("../../../../../src/app/heroes/hero.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__hero_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hero_view_component__ = __webpack_require__("../../../../../src/app/heroes/hero.view.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__hero_view_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hero__ = __webpack_require__("../../../../../src/app/heroes/hero.ts");
/* unused harmony namespace reexport */
 // re-export all of its exports
 // re-export all of its exports




/***/ }),

/***/ "../../../../../src/app/root/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_component__ = __webpack_require__("../../../../../src/app/root/root.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__root_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
        this.title = 'My Angular App';
    }
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: "\n     <h1>{{title}}</h1>\n     <a routerLink=\"/heroes\">Heroes</a>\n     <a routerLink=\"/chinese\">Chinese</a>\n     <router-outlet></router-outlet>\n   "
        })
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map