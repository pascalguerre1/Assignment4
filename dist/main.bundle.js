webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_omdbtest_omdbtest_component__ = __webpack_require__("./src/app/components/omdbtest/omdbtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_omdb_service_client__ = __webpack_require__("./src/app/services/omdb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_user_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_user_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_page_page_new_page_new_component__["a" /* PageNewComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_page_page_list_page_list_component__["a" /* PageListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_widget_widget_edit_widget_header_widget_header_component__["a" /* WidgetHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_widget_widget_edit_widget_image_widget_image_component__["a" /* WidgetImageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_widget_widget_edit_widget_youtube_widget_youtube_component__["a" /* WidgetYoutubeComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_omdbtest_omdbtest_component__["a" /* OmdbtestComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* Routing */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_24__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_25__services_widget_service_client__["a" /* WidgetService */], __WEBPACK_IMPORTED_MODULE_26__services_omdb_service_client__["a" /* OmdbService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__ = __webpack_require__("./src/app/components/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__ = __webpack_require__("./src/app/components/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__ = __webpack_require__("./src/app/components/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_website_website_new_website_new_component__ = __webpack_require__("./src/app/components/website/website-new/website-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__ = __webpack_require__("./src/app/components/website/website-edit/website-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__ = __webpack_require__("./src/app/components/website/website-list/website-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__ = __webpack_require__("./src/app/components/page/page-new/page-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__ = __webpack_require__("./src/app/components/page/page-edit/page-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__ = __webpack_require__("./src/app/components/page/page-list/page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__ = __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__ = __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__ = __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_omdbtest_omdbtest_component__ = __webpack_require__("./src/app/components/omdbtest/omdbtest.component.ts");














// Import all other components here 
var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__components_user_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__components_user_register_register_component__["a" /* RegisterComponent */] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_3__components_user_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'user/:uid/website', component: __WEBPACK_IMPORTED_MODULE_6__components_website_website_list_website_list_component__["a" /* WebsiteListComponent */] },
    { path: 'user/:uid/website/new', component: __WEBPACK_IMPORTED_MODULE_4__components_website_website_new_website_new_component__["a" /* WebsiteNewComponent */] },
    { path: 'user/:uid/website/:wid', component: __WEBPACK_IMPORTED_MODULE_5__components_website_website_edit_website_edit_component__["a" /* WebsiteEditComponent */] },
    { path: 'user/:uid/website/:wid/page', component: __WEBPACK_IMPORTED_MODULE_9__components_page_page_list_page_list_component__["a" /* PageListComponent */] },
    { path: 'user/:uid/website/:wid/page/new', component: __WEBPACK_IMPORTED_MODULE_7__components_page_page_new_page_new_component__["a" /* PageNewComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid', component: __WEBPACK_IMPORTED_MODULE_8__components_page_page_edit_page_edit_component__["a" /* PageEditComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget', component: __WEBPACK_IMPORTED_MODULE_12__components_widget_widget_list_widget_list_component__["a" /* WidgetListComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/new', component: __WEBPACK_IMPORTED_MODULE_10__components_widget_widget_chooser_widget_chooser_component__["a" /* WidgetChooserComponent */] },
    { path: 'user/:uid/website/:wid/page/:pid/widget/:wgid', component: __WEBPACK_IMPORTED_MODULE_11__components_widget_widget_edit_widget_edit_component__["a" /* WidgetEditComponent */] },
    { path: 'omdb', component: __WEBPACK_IMPORTED_MODULE_13__components_omdbtest_omdbtest_component__["a" /* OmdbtestComponent */] },
];
// Export the routes as module providers
var Routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(APP_ROUTES);


/***/ }),

/***/ "./src/app/components/omdbtest/omdbtest.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/omdbtest/omdbtest.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"container\">\n\t\t\t\t<form (ngSubmit)=\"search()\" #f=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"title\" placeholder=\"Movie title\" class=\"form-control\" required ngModel #title=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type =\"submit\">Search</button>\n\t\t\t\t</form>\n\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li class=\"list-group-item\" *ngFor=\"let movie of movies\">\n\t\t\t\t\t\t<h5>{{movie.Title}}</h5>\n\t\t\t\t\t\t<img [src]=\"movie.Poster\">\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\n\t\t</div>"

/***/ }),

/***/ "./src/app/components/omdbtest/omdbtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmdbtestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_omdb_service_client__ = __webpack_require__("./src/app/services/omdb.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OmdbtestComponent = /** @class */ (function () {
    function OmdbtestComponent(omdbService) {
        this.omdbService = omdbService;
        this.movies = [];
    }
    OmdbtestComponent.prototype.ngOnInit = function () {
    };
    OmdbtestComponent.prototype.search = function () {
        var _this = this;
        //getting user input
        this.title = this.searchForm.value.title;
        //calling searcMovie in omdb client service
        this.omdbService.searchMovie(this.title).subscribe(function (data) {
            _this.movies = data.Search;
            console.log(_this.movies);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], OmdbtestComponent.prototype, "searchForm", void 0);
    OmdbtestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-omdbtest',
            template: __webpack_require__("./src/app/components/omdbtest/omdbtest.component.html"),
            styles: [__webpack_require__("./src/app/components/omdbtest/omdbtest.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_omdb_service_client__["a" /* OmdbService */]])
    ], OmdbtestComponent);
    return OmdbtestComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"pg-font-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}\"><b class=\"pg-text-gray pg-underline\">Edit Page</b></a>\n\t\t\t</div>\n\t\t\t<button [disabled]=\"f.invalid\" form=\"pageForm\" class=\"btn pg-button-like-a pg-font-black\" type=\"submit\"><i class=\"fas fa-check\"></i></button>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\n\t<!-- form -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<form id=\"pageForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Name\"><strong>Name</strong></label>\n\t\t\t\t\t<input type=\"text\" required ngModel=\"{{page.name}}\" #name=\"ngModel\" name=\"name\" class=\"form-control\" placeholder=\"Page Name\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name can't be empty</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"text\"><strong>Description</strong></label>\n\t\t\t\t\t<input type=\"text\" ngModel=\"{{page.description}}\" #description=\"ngModel\" name=\"description\" class=\"form-control\" placeholder=\"Page Description\">\n\t\t\t\t</div>\n\t\t\t\t<!-- buttons -->\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Update\n\t\t\t\t\t\t</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- /buttons -->\n\t\t\t</form>\n\t\t</div>\n\t<!-- /form -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark pg-gray fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/page/page-edit/page-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageEditComponent = /** @class */ (function () {
    function PageEditComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.page = {
            _id: "",
            websiteId: "",
            name: "",
            description: ""
        };
    }
    PageEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.pageService.findPageById(_this.pid).subscribe(function (page) {
                _this.page = page;
                _this.name = _this.page.name;
                _this.description = _this.page.description;
            });
        });
    };
    PageEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var updatedPage = {
            _id: this.pid,
            name: this.name,
            description: this.description,
            websiteId: this.wid
        };
        this.pageService.updatePage(this.pid, updatedPage).subscribe(function (page) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    PageEditComponent.prototype.remove = function () {
        var _this = this;
        this.pageService.deletePage(this.pid).subscribe(function (pages) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], PageEditComponent.prototype, "pageForm", void 0);
    PageEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-edit',
            template: __webpack_require__("./src/app/components/page/page-edit/page-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-edit/page-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageEditComponent);
    return PageEditComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a class=\"pg-font-black\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<!-- <div class=\"container\"> -->\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\"><b class=\"pg-text-gray pg-underline\">Pages</b></a>\n\t\t\t</div>\n\t\t\t<a class=\"pg-font-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\t\n\t<!-- Page list part -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<ul class=\"list-group\" *ngFor=\"let page of pages\">\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}/widget\">{{page.name}}</a>\n\t\t\t    <a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{page._id}}\"><i class=\"fas fa-cog\"></i>\n\t\t\t    </a>\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t</div>\n\t<!-- /Page list part -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark pg-gray fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->"

/***/ }),

/***/ "./src/app/components/page/page-list/page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageListComponent = /** @class */ (function () {
    function PageListComponent(pageService, activatedRoute) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
    }
    PageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pageService.findPageByWebsiteId(_this.wid).subscribe(function (pages) {
                _this.pages = pages;
            });
        });
    };
    PageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-list',
            template: __webpack_require__("./src/app/components/page/page-list/page-list.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-list/page-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PageListComponent);
    return PageListComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"pg-font-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/new\"><b class=\"pg-text-gray pg-underline\">New page</b></a>\n\t\t\t</div>\n\t\t\t<button [disabled]=\"f.invalid\" class=\"btn pg-font-black pg-button-like-a\" type=\"submit\" form=\"pageForm\"><i class=\"fas fa-check\"></i></button>\n\t\t</nav>\n\t\t<!-- /Top nav bar -->\n\n\t<!-- form -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<form id=\"pageForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Name\"><strong>Name</strong></label>\n\t\t\t\t\t<input type=\"text\" required ngModel #name=\"ngModel\" name=\"name\" class=\"form-control\" placeholder=\"Page Name\">\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-warning\">Name can't be empty</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"text\"><strong>Description</strong></label>\n\t\t\t\t\t<input type=\"text\" ngModel #description=\"ngModel\" name=\"description\" class=\"form-control\" placeholder=\"Page Description\">\n\t\t\t\t</div>\n\t\t\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-success btn-block\" type=\"submit\" >Submit</button>\n\t\t\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/user/{{uid}}/website/{{wid}}/page\">Cancel</a>\n\t\t\t</form>\n\t\t</div>\n\t<!-- /form -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark pg-gray fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/page/page-new/page-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_page_service_client__ = __webpack_require__("./src/app/services/page.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PageNewComponent = /** @class */ (function () {
    function PageNewComponent(pageService, activatedRoute, router) {
        this.pageService = pageService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    PageNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
        });
    };
    PageNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.pageForm.value.name;
        this.description = this.pageForm.value.description;
        var newPage = {
            _id: "",
            name: this.name,
            websiteId: this.wid,
            description: this.description,
        };
        this.pageService.createPage(this.wid, newPage).subscribe(function (page) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], PageNewComponent.prototype, "pageForm", void 0);
    PageNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-new',
            template: __webpack_require__("./src/app/components/page/page-new/page-new.component.html"),
            styles: [__webpack_require__("./src/app/components/page/page-new/page-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_page_service_client__["a" /* PageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PageNewComponent);
    return PageNewComponent;
}());



/***/ }),

/***/ "./src/app/components/user/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t<div class=\"container\">\n\t\t\t<h1>Login</h1>\n\t\t\t<div *ngIf=\"errorFlag\" class =\"alert alert-danger\">Invalid username or password</div>\n\t\t\t<!-- form -->\n\t\t\t\t<form (ngSubmit)=\"login()\" #f=\"ngForm\">\n\t\t\t\t\t<span class =\"alert alert-warning pg-small-alert\" *ngIf =\"username.invalid && username.touched\">Please enter username</span>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required ngModel #username=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class =\"alert alert-warning pg-small-alert\" *ngIf =\"password.invalid && password.touched\">Please enter password</span>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required ngModel #password=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<!-- buttons -->\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"f.invalid\" type =\"submit\">Login</button>\n\t\t\t\t\t\t<button class=\"btn btn-success btn-block\" routerLink=\"/register\">Register</button>\n\t\t\t\t\t<!-- /buttons -->\n\t\t\t\t</form>\n\t\t\t<!-- /form -->\n\t\t</div>"

/***/ }),

/***/ "./src/app/components/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.username = this.loginForm.value.username;
        this.password = this.loginForm.value.password;
        //const user: User = this.userService.findUserByCredentials(this.username, this.password);
        this.userService.findUserByCredentials(this.username, this.password).subscribe(function (user) {
            _this.errorFlag = false;
            _this.router.navigate(['/user/' + user._id]);
        }, function (error) {
            _this.errorFlag = true;
        });
        // if (user != undefined) {
        // 	//navigate to profile
        // 	this.errorFlag = false
        // 	this.router.navigate(['/user/' + user._id]);
        // } else {
        // 	this.errorFlag = true;
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/user/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/user/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- top nav bar -->\n\t\t<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n\t\t\t<a class=\"navbar-brand font-weight-bold pg-underline\" routerLink=\"/user/:uid\">Profile</a>\n\t\t\t<button class=\"btn pg-font-white pg-button-like-a\" type=\"submit\" form=\"profileForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\n\t\t</nav>\n\t<!-- /top nav bar -->\n\n\t<!-- form -->\n\t\t<div class=\"container\">\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"usernameTaken\">Username already taken, please try another one</div>\n\t\t\t<div class=\"alert alert-success\" *ngIf=\"submitSuccess\">Update Successful!</div>\n\t\t\t\t<form (ngSubmit)=\"update()\" id=\"profileForm\" #f=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"Username\"><strong>User name</strong></label>\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required ngModel=\"{{user.username}}\" #username=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"email\"><strong>Email</strong></label>\n\t\t\t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"example@email.com\" class=\"form-control\" ngModel=\"{{user.email}}\" #email=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"firstName\"><strong>First Name</strong></label>\n\t\t\t\t\t\t<input type=\"text\" name=\"firstName\" placeholder=\"First Name\" class=\"form-control\" ngModel=\"{{user.firstName}}\" #firstName=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"lastName\"><strong>Last Name</strong></label>\n\t\t\t\t\t\t<input type=\"text\" name=\"lastName\" placeholder=\"Last Name\" class=\"form-control\" ngModel=\"{{user.lastName}}\" #lastName=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- buttons -->\n\t\t\t\t\t\t<a class=\"btn btn-primary btn-block\" routerLink=\"/user/{{uid}}/website\">Websites</a>\n\t\t\t\t\t\t<a class=\"btn btn-danger btn-block\" routerLink=\"/login\">Logout</a>\n\t\t\t\t\t<!-- /buttons -->\n\t\t\t\t</form>\n\t\t</div>\n\t<!-- /form -->\n\t\n\t<!-- footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t<a class=\"pg-font-white float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, userService) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.user = {
            _id: "",
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: "",
        };
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.activatedRoute.params.subscribe(
        // 	function info(params){
        // 		this.uid = params['uid'];
        // 		this.user = this.userService.findUserById(this.uid);
        // 		this.username = this.user.username;
        // 		this.email = this.user.email;
        // 		this.firstName = this.user.firstName;
        // 		this.lastName = this.user.lastName;
        // 	}.bind(this));
        // console.log("hello")
        this.usernameTaken = false;
        this.submitSuccess = false;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.userService.findUserById(_this.uid).subscribe(function (user) {
                _this.user = user;
                _this.username = _this.user.username;
                _this.email = _this.user.email;
                _this.firstName = _this.user.firstName;
                _this.lastName = _this.user.lastName;
                _this.oldUsername = _this.user.username;
            });
            // this.uid = params['uid'];
            // this.user = this.userService.findUserById(this.uid);
            // this.username = this.user.username;
            // this.email = this.user.email;
            // this.firstName = this.user.firstName;
            // this.lastName = this.user.lastName
            // this.oldUsername = this.user.username;
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this.username = this.profileForm.value.username;
        this.email = this.profileForm.value.email;
        this.firstName = this.profileForm.value.firstName;
        this.lastName = this.profileForm.value.lastName;
        //check if new user is taken or the username was not changed
        this.userService.findUserByUsername(this.username).subscribe(function (user) {
            _this.aUser = user;
        });
        //check if new user is taken or the username was not changed
        // const aUser: User = this.userService.findUserByUsername(this.username);
        if (this.aUser != undefined && this.oldUsername !== this.username) {
            this.usernameTaken = true;
            this.submitSuccess = false;
        }
        else {
            var updatedUser = {
                _id: this.user._id,
                username: this.username,
                password: this.user.password,
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                email: this.user.email,
            };
            this.userService.updateUser(this.uid, updatedUser).subscribe(function (user2) {
                _this.usernameTaken = false;
                _this.submitSuccess = true;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], ProfileComponent.prototype, "profileForm", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/user/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Registration Page -->\n\t\t<div class=\"container\">\n\t\t\t<h1>Register</h1>\n\n\t\t\t<!-- form -->\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"usernameError\">Username already taken, please try another one</div>\n\t\t\t<div class=\"alert alert-danger\" *ngIf=\"passwordError\">Password(s) doesn't match</div>\n\t\t\t\t<form (ngSubmit)=\"register()\" #f=\"ngForm\">\n\t\t\t\t\t<span class =\"alert alert-warning pg-small-alert\" *ngIf =\"username.invalid && username.touched\">Please enter username</span>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"text\" name=\"username\" placeholder=\"Username\" class=\"form-control\" required ngModel #username=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class =\"alert alert-warning pg-small-alert\" *ngIf =\"password.invalid && password.touched\">Please enter password</span>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" required ngModel #password=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<span class =\"alert alert-warning pg-small-alert\" *ngIf =\"verifyPassword.invalid && verifyPassword.touched\">Please Re-enter password</span>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"password\" name=\"verifyPassword\" placeholder=\"Verify password\" class=\"form-control\" required ngModel #verifyPassword=\"ngModel\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- buttons -->\n\t\t\t\t\t\t<button class=\"btn btn-primary btn-block\" type=\"submit\" [disabled]=\"f.invalid\">Register</button>\n\t\t\t\t\t\t<button class=\"btn btn-danger btn-block\" routerLink=\"/login\">Cancel</button>\n\t\t\t\t\t<!-- /buttons -->\n\t\t\t\t</form>\n\t\t\t<!-- /form -->\n\t\t</div>\n\t<!-- /Registration Page -->\n"

/***/ }),

/***/ "./src/app/components/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service_client__ = __webpack_require__("./src/app/services/user.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.passwordError = false;
        this.usernameError = false;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.username = this.registerForm.value.username;
        this.password = this.registerForm.value.password;
        this.verifyPassword = this.registerForm.value.verifyPassword;
        if (this.password !== this.verifyPassword) {
            this.passwordError = true;
        }
        else {
            this.passwordError = false;
            this.userService.findUserByUsername(this.username).subscribe(function (user) {
                _this.usernameError = true;
            }, function (error) {
                var newUser = {
                    _id: "",
                    username: _this.username,
                    password: _this.password,
                    firstName: "",
                    lastName: "",
                    email: "",
                };
                _this.userService.createUser(newUser).subscribe(function (user) {
                    var id = user._id;
                    _this.router.navigate(['user', id]);
                });
            });
        }
        // if (this.password !== this.verifyPassword) {
        // 	this.passwordError = true;
        // 	this.usernameError = false;
        // } else {
        // 	this.passwordError = false;
        // 	const user: User = this.userService.findUserByUsername(this.username)
        // 	if(user){
        // 		this.usernameError = true;
        // 	} else {
        // 		this.passwordError = false;
        // 		this.usernameError = false;
        // 		const newUser: User = {
        // 		_id: "",
        // username: this.username,
        // password: this.password,
        // firstName: "",
        // lastName: "",
        // email: "",
        // 		};
        // 		this.userService.createUser(newUser).subscribe(
        //          (user: User) =>{
        //            var id: string = this.userService.findUserByUsername(this.username)._id
        //            this.router.navigate(['user', id]);
        //          },
        //          (error: Error) =>{
        //            this.usernameError = true;
        //          }
        //        )
        // this.userService.createUser(newUser);
        // var id: string = this.userService.findUserByUsername(this.username)._id
        // this.router.navigate(['user', id]);
        // 	}
        // }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], RegisterComponent.prototype, "registerForm", void 0);
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/user/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/user/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service_client__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top Nav Bars (Left & Right Part) -->\n\t\t<nav class=\"row navbar navbar-dark bg-primary fixed-top\">\t   \n\t\t\t<!-- Top left nav bar -->\n\t\t\t\t<div class=\"col-sm-4 d-none d-sm-block\">\n\t\t\t\t\t<div class=\"container-fluid\"> \n\t\t\t\t\t\t<a class=\"pg-font-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t\t\t\t<a class=\"pg-no-underline pg-left-padding\" routerLink=\"/user/{{uid}}/website\"><b class=\"pg-font-white pg-underline\">Websites</b></a>\n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/new\" class=\"pg-font-white float-right\"><i class=\"fas fa-plus\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- /Top left nav bar -->\n\n\t\t\t<!-- Top Right nav bar -->\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"container-fluid\"> \n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}\" class=\"pg-no-underline\"><b class=\"pg-font-white pg-underline\">Edit Website</b></a>\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn pg-font-white float-right pg-button-like-a\" form=\"websiteForm\"><i class=\"fas fa-check\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- /Top Right nav bar -->\n\t\t</nav>\n\t<!-- /Top Nav Bars (Left & Right Part) -->\n\n\t<!-- Left & Right part of the Page -->\n\t\t<div class=\"row\">\t\n\t\t\t<!-- left list part -->\n\t\t\t\t\t<div class=\"col-sm-4 d-none d-sm-block\">\n\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let website of websites\" >\n\t\t\t    \t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t    \t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t  \t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t<!-- /left list part -->\n\n\t\t\t<!-- right form part -->\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t\t\t\t<!-- website name -->\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"website-name\"><strong>Website Name</strong></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Type your website name\" required ngModel=\"{{website.name}}\" #name=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"alert alert-warning pg-small-alert\" *ngIf=\"name.invalid && name.touched\">Please provide a name for the website</span>\n\t\t\t\t\t\t\t<!-- website desciption -->\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"website-description\"><strong>Website Description</strong></label>\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" name=\"description\" placeholder=\"Input your description for this site\" ngModel=\"{{website.description}}\" #description=\"ngModel\"></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"delete()\" class=\"btn btn-danger\">Delete</button>\n\t\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary float-right\">Update</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- /right form part -->\n\t\t</div>\n\t<!-- Left & Right part of the Page -->\n\t\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t<a class=\"pg-font-white float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/website/website-edit/website-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteEditComponent = /** @class */ (function () {
    function WebsiteEditComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
            _this.websiteService.findWebsiteById(_this.wid).subscribe(function (website) {
                _this.website = website;
                _this.name = _this.website.name;
                _this.description = _this.website.description;
            });
            // this.name = this.website.name;
            // this.description = this.website.description;
        });
    };
    WebsiteEditComponent.prototype.update = function () {
        var _this = this;
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var updatedWeb = {
            _id: this.wid,
            name: this.name,
            developerId: this.uid,
            description: this.description
        };
        this.websiteService.updateWebsite(this.wid, updatedWeb).subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    WebsiteEditComponent.prototype.delete = function () {
        var _this = this;
        this.websiteService.deleteWebsite(this.wid).subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WebsiteEditComponent.prototype, "websiteForm", void 0);
    WebsiteEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-edit',
            template: __webpack_require__("./src/app/components/website/website-edit/website-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-edit/website-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteEditComponent);
    return WebsiteEditComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-dark bg-primary fixed-top\">\n\t\t\t<a class=\"pg-font-white\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left pg-underline\" routerLink=\"/user/{{uid}}/website\">Websites</a>\n\t\t\t</div>\n\t\t\t<a class=\"pg-font-white\" routerLink=\"/user/{{uid}}/website/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\t\n\t<!-- Web list part -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<ul class=\"list-group\">\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let website of websites\" >\n\t\t\t    <a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t    <a routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t</div>\n\t<!-- /Web list part -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"pg-font-white float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/website/website-list/website-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsiteListComponent = /** @class */ (function () {
    function WebsiteListComponent(websiteService, activatedRoute) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
    }
    WebsiteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-list',
            template: __webpack_require__("./src/app/components/website/website-list/website-list.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-list/website-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WebsiteListComponent);
    return WebsiteListComponent;
}());



/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top Nav Bars (Left & Right Part) -->\n\t\t<nav class=\"row navbar navbar-dark bg-primary fixed-top\">\t   \n\t\t\t<!-- Top left nav bar -->\n\t\t\t<div class=\"col-sm-4 d-none d-sm-block\">\n\t\t\t\t<div class=\"container-fluid\"> \n\t\t\t\t\t<a class=\"pg-font-white\" routerLink=\"/user/{{uid}}/website\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t\t\t<a class=\"pg-left-padding\" routerLink=\"/user/{{uid}}/website\"><b class=\"pg-font-white pg-underline\">Websites</b></a>\n\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/new\" class=\"pg-font-white float-right\"><i class=\"fas fa-plus\"></i></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- /Top left nav bar -->\n\t\t\t\t\n\t\t\t<!-- Top Right nav bar -->\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"container-fluid\"> \n\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/new\"><b class=\"pg-font-white pg-underline\">New Website</b></a>\n\t\t\t\t\t\t<button class=\"btn pg-font-white float-right pg-button-like-a\" type=\"submit\" form=\"websiteForm\" [disabled]=\"f.invalid\"><i class=\"fas fa-check\"></i></button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- /Top Right nav bar -->\n\t\t</nav>\n\t<!-- /Top Nav Bars (Left & Right Part)-->\n\n\t<!-- Left & Right part of the Page -->\n\t\t<div class=\"row\">\t\n\t\t\t<!-- left list part -->\n\t\t\t\t<div class=\"col-sm-4 d-none d-sm-block\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<ul class=\"list-group\">\n\t\t  \t\t\t\t\t<li class=\"list-group-item d-flex justify-content-between align-items-center\" *ngFor=\"let website of websites\" >\n\t\t\t    \t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}/page\">{{website.name}}</a>\n\t\t\t    \t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{website._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t  \t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- /left list part -->\n\n\t\t\t<!-- right form part -->\n\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t<form id=\"websiteForm\" (ngSubmit)=\"create()\" #f=\"ngForm\">\n\t\t\t\t\t\t\t<!-- website name -->\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"website-name\"><strong>Name</strong></label>\n\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"Type your website name\" required ngModel #name=\"ngModel\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<span class=\"alert alert-warning pg-small-alert\" *ngIf=\"name.invalid && name.touched\">Please provide a name for the website</span>\n\t\t\t\t\t\t\t<!-- website desciption -->\n\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t<label for=\"website-description\"><strong>Description</strong></label>\n\t\t\t\t\t\t\t\t<textarea class=\"form-control\" rows=\"5\" name=\"description\" placeholder=\"Input your description for this site\" ngModel #description=\"ngModel\"></textarea>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website\" class=\"btn btn-danger\">Cancel</a>\n\t\t\t\t\t\t\t<button [disabled]=\"f.invalid\"type=\"submit\" class=\"btn btn-success float-right\">Submit</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t<!-- right form part -->\n\t\t</div>\n\t<!-- /Left & Right part of the Page -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark bg-primary fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"pg-font-white float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/website/website-new/website-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_website_service_client__ = __webpack_require__("./src/app/services/website.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebsiteNewComponent = /** @class */ (function () {
    function WebsiteNewComponent(websiteService, activatedRoute, router) {
        this.websiteService = websiteService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WebsiteNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.websiteService.findWebsitesByUser(_this.uid).subscribe(function (websites) {
                _this.websites = websites;
            });
        });
    };
    WebsiteNewComponent.prototype.create = function () {
        var _this = this;
        this.name = this.websiteForm.value.name;
        this.description = this.websiteForm.value.description;
        var newWebsite = {
            _id: "",
            name: this.name,
            developerId: "",
            description: this.description,
        };
        this.websiteService.createWebsite(this.uid, newWebsite).subscribe(function (website) {
            _this.router.navigate(['user', _this.uid, 'website']); //will combine it to user/123/website
        });
        // console.log(this.websiteService.websites);
        // this.router.navigate(['user', this.uid, 'website']) //will combine it to user/123/website
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WebsiteNewComponent.prototype, "websiteForm", void 0);
    WebsiteNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-website-new',
            template: __webpack_require__("./src/app/components/website/website-new/website-new.component.html"),
            styles: [__webpack_require__("./src/app/components/website/website-new/website-new.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_website_service_client__["a" /* WebsiteService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], WebsiteNewComponent);
    return WebsiteNewComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a class=\"pg-font-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b class=\"pg-text-gray pg-underline\">Choose Widget</b></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\t\n\t<!-- Page list part -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<ul class=\"list-group\">\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <button type=\"button\" class=\"btn pg-button-like-a\" (click)=\"create('HEADING')\">Header</button>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Label</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">HTML</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Text Input</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Link</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Button</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <button type=\"button\" class=\"btn pg-button-like-a\" (click)=\"create('IMAGE')\">Image</button>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <button type=\"button\" class=\"btn pg-button-like-a\" (click)=\"create('YOUTUBE')\">Youtube</button>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Data Table</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n\t\t\t    <a routerLink=\"/user/:uid/website/:wid/page/:pid/widget/:wgid\">Repeater</a>\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t</div>\n\t<!-- /Page list part -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark pg-gray fixed-bottom\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/widget/widget-chooser/widget-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetChooserComponent = /** @class */ (function () {
    function WidgetChooserComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    WidgetChooserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
        });
    };
    WidgetChooserComponent.prototype.create = function (type) {
        var _this = this;
        var newWidget = {
            _id: '',
            widgetType: type,
            pageId: this.pid,
        };
        this.widgetService.createWidget(this.pid, newWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget', widget._id]);
        });
        // const wgid = this.widgetService.widgets[this.widgetService.widgets.length - 1]._id;
        // this.router.navigate(['user', this.uid, 'website', this.wid, 'page', this.pid, 'widget', wgid])
    };
    WidgetChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-chooser',
            template: __webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-chooser/widget-chooser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetChooserComponent);
    return WidgetChooserComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"widget.widgetType\">\n\t<!-- Heading -->\n\t<div *ngSwitchCase=\"'HEADING'\">\n\t\t<app-widget-header></app-widget-header>\n\t</div>\n\t<!-- Image -->\n\t<div *ngSwitchCase=\"'IMAGE'\">\n\t\t<app-widget-image></app-widget-image>\n\t</div>\n\t<!-- Youtube -->\n\t<div *ngSwitchCase=\"'YOUTUBE'\">\n\t\t<app-widget-youtube></app-widget-youtube>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetEditComponent = /** @class */ (function () {
    function WidgetEditComponent(widgetService, activatedRoute) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
        };
    }
    WidgetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-edit',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], WidgetEditComponent);
    return WidgetEditComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"pg-font-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b class=\"pg-text-gray pg-underline\">Widget Edit</b></a>\n\t\t\t</div>\n\t\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn pg-button-like-a pg-font-black\" ><i class=\"fas fa-check\"></i></button>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\n\t<!-- form -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Name\"><strong>Name</strong></label>\n\t\t\t\t\t<input type=\"text\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" name=\"name\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"text\"><strong>Text</strong></label>\n\t\t\t\t\t<input type=\"text\" required ngModel=\"{{widget.text}}\" #text=\"ngModel\" name=\"text\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"text.invalid && text.touched\">Text can't be empty</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Size\"><strong>Size</strong></label>\n\t\t\t\t\t<input type=\"number\" required ngModel=\"{{widget.size}}\" #size=\"ngModel\" name=\"size\" class=\"form-control\">\n\t\t\t\t</div>\n\n\t\t\t\t<!-- buttons -->\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"size.invalid && size.touched\">Size can't be empty</div>\n\t\t\t\t\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\" type=\"submit\">Submit</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- /buttons -->\n\t\t\t</form>\n\t\t</div>\n\t<!-- /form -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark fixed-bottom pg-gray\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/:uid\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-header/widget-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetHeaderComponent = /** @class */ (function () {
    function WidgetHeaderComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
        };
    }
    WidgetHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetHeaderComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.size = this.widgetForm.value.size;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            size: this.size,
            text: this.text,
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetHeaderComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetHeaderComponent.prototype, "widgetForm", void 0);
    WidgetHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-header',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-header/widget-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetHeaderComponent);
    return WidgetHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"pg-font-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b class=\"pg-text-gray pg-underline\">Widget Edit</b></a>\n\t\t\t</div>\n\t\t\t<button [disabled]=\"f.invalid\" type=\"submit\" form=\"widgetForm\" class=\"btn pg-button-like-a pg-font-black\" ><i class=\"fas fa-check\"></i></button>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\n\t<!-- form -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t<!-- widget name -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Name\"><strong>Name</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<!-- widget text -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"text\"><strong>Text</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<!-- widget url -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"URL\"><strong>URL</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"url\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" class=\"form-control\" placeholder=\"http://\">\n\t\t\t\t</div>\n\t\t\t\t<!-- widget Width -->\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">URL can't be empty</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Width\"><strong>Width</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"width\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\" class=\"form-control\" placeholder=\"100%\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty</div>\n\n\t\t\t\t<form ngNoForm action=\"{{baseUrl}}/api/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{wgid}}/upload\" method=\"post\" enctype=\"multipart/form-data\">\n                    <div>\n                        <label class='form-group'><strong>Uploads</strong></label>\n                            <input  name=\"myFile\"   type=\"file\" class=\"form-control\"/>\n                            <button type=\"submit\" class=\"btn btn-block btn-primary\">Upload Image</button>\n                    </div>\n                </form>\n\t\t\t\t<!-- buttons -->\n\t\t\t\t<br>\n\t\t\t\t<div>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n\t\t\t\t</div>\n\t\t\t\t<!-- /buttons -->\n\t\t\t</form>\n\t\t</div>\n\t<!-- /form -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark fixed-bottom pg-gray\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-image/widget-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WidgetImageComponent = /** @class */ (function () {
    function WidgetImageComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
        };
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
    }
    WidgetImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.baseUrl = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].baseUrl;
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetImageComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetImageComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            url: this.url,
            text: this.text,
            width: this.width,
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetImageComponent.prototype, "widgetForm", void 0);
    WidgetImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-image',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-image/widget-image.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetImageComponent);
    return WidgetImageComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Top nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\" class=\"pg-font-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><b class=\"pg-text-gray pg-underline\">Widget Edit</b></a>\n\t\t\t</div>\n\t\t\t<button [disabled]=\"f.invalid\" form=\"widgetForm\" class=\"btn pg-button-like-a pg-font-black\" type=\"submit\"><i class=\"fas fa-check\"></i></button>\n\t\t</nav>\n\t<!-- /Top nav bar -->\n\n\t<!-- form -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<form id=\"widgetForm\" (ngSubmit)=\"update()\" #f=\"ngForm\">\n\t\t\t\t<!-- widget name -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Name\"><strong>Name</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"name\" ngModel=\"{{widget.name}}\" #name=\"ngModel\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<!-- widget text -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"text\"><strong>Text</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"text\" ngModel=\"{{widget.text}}\" #text=\"ngModel\" class=\"form-control\">\n\t\t\t\t</div>\n\t\t\t\t<!-- widget url -->\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"URL\"><strong>URL</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"url\" required ngModel=\"{{widget.url}}\" #url=\"ngModel\" class=\"form-control\" placeholder=\"http://\">\n\t\t\t\t</div>\n\t\t\t\t<!-- widget Width -->\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.invalid && url.touched\">URL can't be empty</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label for=\"Width\"><strong>Width</strong></label>\n\t\t\t\t\t<input type=\"text\" name=\"width\" required ngModel=\"{{widget.width}}\" #width=\"ngModel\" class=\"form-control\" placeholder=\"100%\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"width.invalid && width.touched\">Width can't be empty</div>\n\t\t\t\t<!-- buttons -->\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<button [disabled]=\"f.invalid\" class=\"btn btn-primary btn-block\" type=\"submit\" >Submit</button>\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"remove()\">Delete</button>\n\t\t\t\t\t</div>\n\t\t\t\t<!-- /buttons -->\n\t\t\t</form>\n\t\t</div>\n\t<!-- /form -->\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark fixed-bottom pg-gray\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>\n\t<!-- /Footer nav bar -->\n"

/***/ }),

/***/ "./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetYoutubeComponent = /** @class */ (function () {
    function WidgetYoutubeComponent(widgetService, activatedRoute, router) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.widget = {
            _id: '',
            widgetType: '',
            pageId: '',
        };
    }
    WidgetYoutubeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.wgid = params['wgid'];
            _this.widgetService.findWidgetById(_this.wgid).subscribe(function (widget) {
                _this.widget = widget;
            });
        });
    };
    WidgetYoutubeComponent.prototype.remove = function () {
        var _this = this;
        this.widgetService.deleteWidget(this.wgid).subscribe(function (widgets) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    WidgetYoutubeComponent.prototype.update = function () {
        var _this = this;
        this.name = this.widgetForm.value.name;
        this.text = this.widgetForm.value.text;
        this.url = this.widgetForm.value.url;
        this.width = this.widgetForm.value.width;
        var updatedWidget = {
            _id: this.wgid,
            name: this.name,
            widgetType: this.widget.widgetType,
            pageId: this.pid,
            url: this.url,
            text: this.text,
            width: this.width,
        };
        this.widgetService.updateWidget(this.wgid, updatedWidget).subscribe(function (widget) {
            _this.router.navigate(['user', _this.uid, 'website', _this.wid, 'page', _this.pid, 'widget']);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* NgForm */])
    ], WidgetYoutubeComponent.prototype, "widgetForm", void 0);
    WidgetYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-youtube',
            template: __webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-edit/widget-youtube/widget-youtube.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], WidgetYoutubeComponent);
    return WidgetYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!-- Nav bar -->\n\t\t<nav class=\"navbar navbar-light pg-gray fixed-top\">\n\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page\" class=\"pg-font-black\"><i class=\"fas fa-chevron-left\"></i></a>\n\t\t\t<div class=\"pg-80-width\">\n\t\t\t\t<a class=\"navbar-brand font-weight-bold float-left\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget\"><b class=\"pg-text-gray pg-underline\">Widgets</b></a>\n\t\t\t</div>\n\t\t\t<a class=\"pg-font-black\" routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/new\"><i class=\"fas fa-plus\"></i></a>\n\t\t</nav>\n\t<!-- /Nav bar -->\n\n\t<!-- Widgets -->\n\t\t<div class=\"container-fluid\">\n\t\t\t<div *ngFor=\"let widget of widgets\" class=\"container-fluid\">\n\t\t\t\t<!-- icons cogs and bars for each widgets -->\n\t\t\t\t<div class=\"pg-absolute-right no-background pg-front\">\n\t\t\t\t\t<a routerLink=\"/user/{{uid}}/website/{{wid}}/page/{{pid}}/widget/{{widget._id}}\"><i class=\"fas fa-cog\"></i></a>\n\t\t\t\t\t<a class=\"pg-font-black\" routerLink=\"/#\"><i class=\"fas fa-bars\"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<!-- contents of widgets -->\n\t\t\t\t<div [ngSwitch]=\"widget.widgetType\">\n\t\t\t\t\t<!-- heading -->\n\t\t\t\t\t<div *ngSwitchCase=\"'HEADING'\">\n\t\t\t\t\t\t<div [ngSwitch]=\"widget.size\">\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"1\">\n\t\t\t\t\t\t\t\t<h1>{{widget.text}}</h1>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"2\">\n\t\t\t\t\t\t\t\t<h2>{{widget.text}}</h2>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"3\">\n\t\t\t\t\t\t\t\t<h3>{{widget.text}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"4\">\n\t\t\t\t\t\t\t\t<h4>{{widget.text}}</h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"5\">\n\t\t\t\t\t\t\t\t<h5>{{widget.text}}</h5>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngSwitchCase=\"6\">\n\t\t\t\t\t\t\t\t<h6>{{widget.text}}</h6>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- image -->\n\t\t\t\t\t<div *ngSwitchCase=\"'IMAGE'\">\n\t\t\t\t\t\t<img [src]=\"widget.url\" [style.width]=\"widget.width\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- youtube -->\n\t\t\t\t\t<div *ngSwitchCase=\"'YOUTUBE'\">\n\t\t\t\t\t\t<div class=\"embed-responsive embed-responsive-16by9\">\n\t\t\t\t\t\t\t<iframe [src]=\"this.getYoutubeURL(widget.url)\" [style.width]=\"widget.width\" frameborder=\"0\" allowfullscreen></iframe>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t<!-- Footer nav bar -->\n\t\t<nav class=\"navbar navbar-dark fixed-bottom pg-gray\">\n\t\t\t<div class=\"pg-width\">\n\t\t\t\t<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Publish\" routerLink=\"/#\"><i class=\"fas fa-upload\"></i></a>\n\t\t\t\t<a data-toggle=\"tooltip\" data-placement=\"top\" title=\"Preview\" class=\"pg-hor-space\" routerLink=\"/#\"><i class=\"fas fa-eye\"></i></a>\n\t\t\t\t<a class=\"float-right\" routerLink=\"/user/{{uid}}\"><i class=\"fas fa-user\"></i></a>\n\t\t\t</div>\n\t\t</nav>"

/***/ }),

/***/ "./src/app/components/widget/widget-list/widget-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__ = __webpack_require__("./src/app/services/widget.service.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(widgetService, activatedRoute, sanitizer) {
        this.widgetService = widgetService;
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
    }
    WidgetListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            _this.uid = params['uid'];
            _this.wid = params['wid'];
            _this.pid = params['pid'];
            _this.widgetService.findWidgetsByPageId(_this.pid).subscribe(function (widgets) {
                _this.widgets = widgets;
            });
        });
    };
    WidgetListComponent.prototype.getYoutubeURL = function (url) {
        var embedUrl = "https://www.youtube.com/embed/";
        var parsedUrl = url.split('/');
        //transfer video url into embeded video url
        embedUrl += parsedUrl[parsedUrl.length - 1];
        //tell browser this source is safe
        return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    };
    WidgetListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-widget-list',
            template: __webpack_require__("./src/app/components/widget/widget-list/widget-list.component.html"),
            styles: [__webpack_require__("./src/app/components/widget/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_widget_service_client__["a" /* WidgetService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DomSanitizer */]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



/***/ }),

/***/ "./src/app/services/omdb.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OmdbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// injecting service into module
var OmdbService = /** @class */ (function () {
    function OmdbService(http) {
        this.http = http;
    }
    OmdbService.prototype.searchMovie = function (title) {
        var url = 'http://www.omdbapi.com/?apikey=4e29c677&s=' + title;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
    };
    OmdbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], OmdbService);
    return OmdbService;
}());



/***/ }),

/***/ "./src/app/services/page.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var PageService = /** @class */ (function () {
    function PageService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // pages: Page[] = [
    //   { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
    //   { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
    //   { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
    // ]
    // adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
    PageService.prototype.createPage = function (websiteId, page) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.post(url, page).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // page._id = Math.floor(Math.random() * 10000).toString();
        // page.websiteId = websiteId;
        // this.pages.push(page);
        // return page;
    };
    // retrieves the pages in local pages array whose websiteId matches the parameter websiteId
    PageService.prototype.findPageByWebsiteId = function (websiteId) {
        var url = this.baseUrl + '/api/website/' + websiteId + '/page';
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var result = [];
        // for (let x = 0; x < this.pages.length; x++) {
        //   if (this.pages[x].websiteId === websiteId) {
        //     result.push(this.pages[x]);
        //    }
        // }
        // return result;
    };
    // retrieves the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.findPageById = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // for (let x = 0; x < this.pages.length; x++) {
        //   if (this.pages[x]._id === pageId) {
        //     return this.pages[x];
        //     }
        // }
    };
    // updates the page in local pages array whose _id matches the pageId parameter
    PageService.prototype.updatePage = function (pageId, page) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.put(url, page).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var oldPage = this.findPageById(pageId);
        // var index = this.pages.indexOf(oldPage);
        // this.pages[index].name = page.name;
        // this.pages[index].description = page.description;
    };
    // removes the page from local pages array whose _id matches the pageId parameter
    PageService.prototype.deletePage = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId;
        return this.http.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var oldPage = this.findPageById(pageId);
        // var index = this.pages.indexOf(oldPage);
        // this.pages.splice(index,1);
    };
    PageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // users: User[] = [
    // 	{_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
    // 	{_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
    // 	{_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
    // 	{_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
    // 	];
    // adds the user parameter instance to the local users array
    UserService.prototype.createUser = function (user) {
        // user._id = Math.floor(Math.random()*10000).toString();
        // this.users.push(user);
        // return user;
        var url = this.baseUrl + '/api/user';
        return this.http.post(url, user).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
    };
    // returns the user in local users array whose _id matches the userId parameter
    UserService.prototype.findUserById = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x]._id === userId) {
        //     return this.users[x]; }
        // }
    };
    // returns the user in local users array whose username matches the parameter username
    UserService.prototype.findUserByUsername = function (username) {
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x].username === username) {
        //     return this.users[x]; }
        // }
        var url = this.baseUrl + '/api/user?username=' + username;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // return this.users.find(function(user: User){
        //   return user.username === username;
        // })
    };
    // returns the user whose username and password match the username and password parameters
    UserService.prototype.findUserByCredentials = function (username, password) {
        // connecting this function with data from server
        // const url = 'http://localhost:3100/api/user?username='+ username +'&password='+ password;
        var url = this.baseUrl + '/api/user?username=' + username + '&password=' + password;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // old code to get data from client array
        // for (let x = 0; x < this.users.length; x++) {
        //   if (this.users[x].username === username && this.users[x].password === password) {
        //     return this.users[x]; }
        // }
    };
    // updates the user in local users array whose _id matches the userId parameter
    UserService.prototype.updateUser = function (userId, user) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.put(url, user).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var olduser = this.findUserById(userId);
        // var index = this.users.indexOf(olduser);
        // this.users[index].username = user.username;
        // this.users[index].password = user.password;
        // this.users[index].firstName = user.firstName;
        // this.users[index].lastName = user.lastName;
        // this.users[index].email = user.email;
    };
    // removes the user whose _id matches the userId parameter
    UserService.prototype.deleteUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId;
        return this.http.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var olduser = this.findUserById(userId);
        // var index = this.users.indexOf(olduser);
        // this.users.splice(index,1);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/website.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsiteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WebsiteService = /** @class */ (function () {
    function WebsiteService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // websites: Website[] = [
    //   { _id: "123", name: "Facebook", developerId: "456", description: "Lorem" },
    //   { _id: "234", name: "Tweeter",  developerId: "456", description: "Lorem" },
    //   { _id: "456", name: "Gizmodo",   developerId: "456", description: "Lorem" },
    //   { _id: "890", name: "Go", developerId: "123", description: "Lorem" },
    //   { _id: "567", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    //   { _id: "678", name: "Checkers", developerId: "123", description: "Lorem" },
    //   { _id: "789", name: "Chess", developerId: "234", description: "Lorem" }
    // ];
    // adds the website parameter instance to the local websites array. The new website's developerId is set to the userId parameter
    WebsiteService.prototype.createWebsite = function (userId, website) {
        // website._id = Math.floor(Math.random() * 10000).toString();
        // website.developerId = userId;
        // this.websites.push(website);
        // return website;
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.post(url, website).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
    };
    // retrieves the websites in local websites array whose developerId matches the parameter userId
    WebsiteService.prototype.findWebsitesByUser = function (userId) {
        var url = this.baseUrl + '/api/user/' + userId + '/website';
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var result = [];
        // for (let x = 0; x < this.websites.length; x++) {
        //   if (this.websites[x].developerId === userId) {
        //     result.push(this.websites[x]);
        //    }
        // }
        // return result;
    };
    // retrieves the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.findWebsiteById = function (websiteId) {
        // for (let x = 0; x < this.websites.length; x++) {
        //   if (this.websites[x]._id === websiteId) {
        //     return this.websites[x];
        //     }
        // }
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
    };
    // updates the website in local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.updateWebsite = function (websiteId, website) {
        // var oldWeb = this.findWebsiteById(websiteId);
        // var index = this.websites.indexOf(oldWeb);
        // this.websites[index].name = website.name;
        // this.websites[index].description = website.description;
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.put(url, website).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
    };
    // removes the website from local websites array whose _id matches the websiteId parameter
    WebsiteService.prototype.deleteWebsite = function (websiteId) {
        // var web = this.findWebsiteById(websiteId);
        // var index = this.websites.indexOf(web);
        // this.websites.splice(index,1);
        var url = this.baseUrl + '/api/website/' + websiteId;
        return this.http.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
    };
    WebsiteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WebsiteService);
    return WebsiteService;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WidgetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// injecting service into module
var WidgetService = /** @class */ (function () {
    function WidgetService(http) {
        this.http = http;
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].baseUrl;
    }
    // widgets: Widget[] = [
    //   { _id: "123", widgetType: "HEADING", pageId: "321", size: 2, text: "GIZMODO"},
    //   { _id: "234", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    //   { _id: "345", widgetType: "IMAGE", pageId: "321", width: "100%", url: "https://www.w3schools.com/w3css/img_lights.jpg"},
    //   { _id: "456", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
    //   { _id: "567", widgetType: "HEADING", pageId: "321", size: 4, text: "Lorem ipsum"},
    //   { _id: "678", widgetType: "YOUTUBE", pageId: "321", width: "100%", url: "https://youtu.be/AM2Ivdi9c4E" },
    //   { _id: "789", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
    // ];
    // adds the widget parameter instance to the local widgets array. The new widget's pageId is set to the pageId parameter
    WidgetService.prototype.createWidget = function (pageId, widget) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.post(url, widget).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // widget._id = Math.floor(Math.random() * 10000).toString();
        // widget.pageId = pageId;
        // this.widgets.push(widget);
        // return widget;
    };
    // retrieves the widgets in local widgets array whose pageId matches the parameter pageId
    WidgetService.prototype.findWidgetsByPageId = function (pageId) {
        var url = this.baseUrl + '/api/page/' + pageId + '/widget';
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // var result = [];
        // for (let x = 0; x < this.widgets.length; x++) {
        //   if (this.widgets[x].pageId === pageId) {
        //     result.push(this.widgets[x]);
        //    }
        // }
        // return result;
    };
    // retrieves the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.findWidgetById = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // for (let x = 0; x < this.widgets.length; x++) {
        //   if (this.widgets[x]._id === widgetId) {
        //     return this.widgets[x];
        //     }
        // }
    };
    // updates the widget in local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.updateWidget = function (widgetId, widget) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.put(url, widget).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        // const oldWidget = this.findWidgetById(widgetId);
        // const index = this.widgets.indexOf(oldWidget);
        // this.widgets[index].size = widget.size;
        // this.widgets[index].text = widget.text;
        // this.widgets[index].width = widget.width;
        // this.widgets[index].url = widget.url;
    };
    // removes the widget from local widgets array whose _id matches the widgetId parameter
    WidgetService.prototype.deleteWidget = function (widgetId) {
        var url = this.baseUrl + '/api/widget/' + widgetId;
        return this.http.delete(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* map */])(function (response) {
            return response.json();
        }));
        //   const oldWidget = this.findWidgetById(widgetId);
        //   const index = this.widgets.indexOf(oldWidget);
        //   this.widgets.splice(index,1);
    };
    WidgetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], WidgetService);
    return WidgetService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3100'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map