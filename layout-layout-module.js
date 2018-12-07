(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
            { path: 'userManagement', loadChildren: './user-management/user-management.module#UserManagementModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<app-sidebar *ngIf=\"userData.Role == 'Super Admin'\"></app-sidebar>\r\n<section class=\"main-container\" [ngStyle]=\"{'margin-left': userData.Role == 'Super Admin' ? '245px' : '0px'}\">\r\n    <!-- <section> -->\r\n    <router-outlet></router-outlet>\r\n</section>\r\n<footer class=\"app-footer footerMain\" id=\"footer\" style=\"line-height: 0px!important;\">\r\n    <div class=\"\">\r\n        <img src=\"assets/img/autodap_logo.png\" width=\"150px\" /><br>\r\n\r\n        <span style=\"margin-left: 75px;font-weight: 500;\">Powered by</span>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  margin-left: 245px;\n  margin-top: 50px;\n  -ms-overflow-x: hidden;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overflow: auto !important; }\n\n@media screen and (max-width: 992px) {\n  .main-container {\n    margin-left: 0 !important;\n    width: 100%;\n    position: relative;\n    margin-top: 50px;\n    min-height: -webkit-fill-available; } }\n\n.footerMain {\n  margin: 0px;\n  bottom: -1px;\n  position: fixed;\n  width: 100%;\n  z-index: 1000; }\n\n#loadingDiv {\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%;\n  background-image: url('loading.gif');\n  opacity: 0.7;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-color: rgba(189, 190, 197, 0.5);\n  z-index: 10000000; }\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/loader.service */ "./src/app/services/loader.service.ts");
/* harmony import */ var _services_userProfileService_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userProfileService/user-profile.service */ "./src/app/services/userProfileService/user-profile.service.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(router, loaderService, LocalStorageService, UserProfileService) {
        this.router = router;
        this.loaderService = loaderService;
        this.LocalStorageService = LocalStorageService;
        this.UserProfileService = UserProfileService;
        this.superAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].SuperAdmin;
        this.objLoaderStatus = false;
    }
    LayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userData = this.LocalStorageService.retrieve('userData');
        this.UserProfileService.fetchFeatures(this.userData.userId).then(function (success) {
            if (success.data) {
                for (var _i = 0, _a = success.data; _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.featureName == "Register Plate Save" && item.access == true) {
                        _this.LocalStorageService.store("RegisterPlateFeature", true);
                    }
                }
            }
        });
        if (this.userData) {
            // this.router.navigate(['/dashboard']);
            this.loaderService.loaderStatus.subscribe(function (val) {
                setTimeout(function () { return _this.objLoaderStatus = val; }, 0);
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _services_userProfileService_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { TranslateModule } from '@ngx-translate/core';





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownModule"].forRoot(),
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_5__["LayoutRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _shared_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-inverse bg-inverse navbar-toggleable-md\">\r\n    <div class=\"row\">\r\n        <header class=\"app-header navbar headerclass collapse navbar-collapse\">\r\n            <button class=\"navbar-toggler navbar-toggler-right\" (click)=\"toggleSidebar()\" *ngIf=\"userData.Role == 'Super Admin'\">\r\n                <span class=\"navbar-toggler-icon\"></span>\r\n            </button>\r\n            <div class=\"col titleHeader\" *ngIf=\"userData.Role == 'Super Admin'\">\r\n                <h5 class=\"fontfontColorWhite\">Vehicle Inspection System</h5>\r\n            </div>\r\n            <div class=\"col\" *ngIf=\"userData.Role != 'Super Admin'\">\r\n                <h5 class=\"fontfontColorWhite\">Vehicle Inspection System</h5>\r\n            </div>\r\n\r\n            <div class=\"floatright headerIds\">\r\n                <p class=\"margin0px\">\r\n                    <b>\r\n                        Station ID :\r\n                    </b>\r\n                    {{userData.Email}}\r\n                </p>\r\n                <p class=\"margin0px\">\r\n                    <b>\r\n                        Machine ID :\r\n                    </b>\r\n                    {{userData.MachineId}}\r\n                </p>\r\n            </div>\r\n            <ul class=\"padding0\" style=\"list-style: none;\">\r\n                <li class=\"nav-item dropdown\" ngbDropdown>\r\n                    <a href=\"javascript:void(0)\" class=\"nav-link padding0\" ngbDropdownToggle>\r\n                        <div class=\"headerLockDiv\">\r\n                            <img class=\"headerLock mousePointer\" [src]=\"lockImagePath\" onError=\"this.src='/assets/img/noimage.PNG';\">\r\n                        </div>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-user\"></i> {{ 'Profile' }}</a> -->\r\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-envelope\"></i> {{ 'Inbox' }}</a> -->\r\n                        <!-- <a class=\"dropdown-item\" href=\"javascript:void(0)\"><i class=\"fa fa-fw fa-gear\"></i> {{ 'Settings' }}</a> -->\r\n                        <a class=\"dropdown-item\" (click)=\"open(changePassword)\">\r\n                            <i class=\"fa fa-fw fa-lock\"></i>Change Password</a>\r\n                        <a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"onLoggedout()\">\r\n                            <i class=\"fa fa-fw fa-power-off\"></i>LogOut</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </header>\r\n    </div>\r\n</nav>\r\n<ng-template #changePassword let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n            Change Password\r\n        </h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div *ngIf=\"errorMessage\" style=\"color:red; text-align:left\">\r\n            <small>{{errorMessage}}</small>\r\n        </div>\r\n        <div *ngIf=\"message\" style=\"color:green; text-align:left\">\r\n            <small>{{message}}</small>\r\n        </div>\r\n        <form #passwordResetForm=\"ngForm\" role=\"form\">\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Current Password\" name=\"Pass\" #Pass=\"ngModel\"\r\n                required [(ngModel)]=\"currentPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n            <div *ngIf=\"Pass.invalid && (Pass.dirty || Pass.touched)\" style=\"color:red; text-align:left\">\r\n                <div *ngIf=\"Pass.errors.required\">\r\n                    <small>Current Password Is Required.</small>\r\n                </div>\r\n            </div>\r\n            <br />\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" name=\"newPass\" #newPass=\"ngModel\"\r\n                required [(ngModel)]=\"enterPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n            <div *ngIf=\"newPass.invalid && (newPass.dirty || newPass.touched)\" style=\"color:red; text-align:left\">\r\n                <div *ngIf=\"newPass.errors.required\">\r\n                    <small>NewPassword Is Required</small>\r\n                </div>\r\n            </div>\r\n            <br />\r\n            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"cnfPass\" #cnfPass=\"ngModel\"\r\n                required [(ngModel)]=\"reenterPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n            <div *ngIf=\"cnfPass.invalid && (cnfPass.dirty || cnfPass.touched)\" style=\"color:red; text-align:left\">\r\n                <div *ngIf=\"cnfPass.errors.required\">\r\n                    <small>Confirm Password Is Required</small>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"reenterPassword != enterPassword && (cnfPass.dirty || cnfPass.touched)\" style=\"color:red; text-align:left\">\r\n                <small>Confirm Password Not Matched With NewPassword</small>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-success mb-sm\" [disabled]=\"newPass.invalid || cnfPass.invalid || (reenterPassword != enterPassword)\"\r\n            (click)=\"save()\">Save</button>\r\n        <button type=\"button\" class=\"btn btn-danger mb-sm\" id='closePopup' (click)=\"d('Cross click')\">Close</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topnav {\n  border-radius: 0;\n  background-color: #398cb5;\n  padding: 6px;\n  z-index: 2; }\n  .topnav .text-center {\n    text-align: center;\n    padding-left: 0;\n    cursor: pointer; }\n  .topnav .top-right-nav .buy-now a {\n    color: #999; }\n  .topnav .top-right-nav .dropdown-menu {\n    top: 40px;\n    right: -5px;\n    left: auto; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body .media-heading {\n      font-size: 14px;\n      font-weight: bold;\n      margin-bottom: 0; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p {\n      margin: 0; }\n  .topnav .top-right-nav .dropdown-menu .message-preview .media .media-body p.last {\n      font-size: 13px;\n      margin-bottom: 0; }\n  .topnav .top-right-nav .dropdown-menu hr {\n      margin-top: 1px;\n      margin-bottom: 4px; }\n  .headerIds {\n  color: black; }\n  .margin0px {\n  margin: 0; }\n  .headerLockDiv {\n  width: 50px;\n  margin-top: 34px; }\n  .headerLock {\n  width: 90%; }\n  .mousePointer {\n  cursor: pointer; }\n  .dropdown-item {\n  color: black !important; }\n  .dropdown-menu {\n  margin-top: -16px; }\n  .messages {\n  width: 300px; }\n  .messages .media {\n    border-bottom: 1px solid #DDD;\n    padding: 5px 10px; }\n  .messages .media:last-child {\n      border-bottom: none; }\n  .messages .media-body h5 {\n    font-size: 13px;\n    font-weight: 600; }\n  .messages .media-body .small {\n    margin: 0; }\n  .messages .media-body .last {\n    font-size: 12px;\n    margin: 0; }\n  .header .navbar {\n  background: #398cb5 !important; }\n  .headerTitle {\n  color: white !important;\n  font-size: 20px !important;\n  cursor: default !important;\n  font-weight: lighter !important;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  text-align: center;\n  margin: auto;\n  padding-top: 10px; }\n  .navbar.navbar-inverse .navbar-header {\n  text-align: center;\n  width: 100%; }\n  .headerFont {\n  font-size: 40px;\n  margin-top: -10px; }\n  .imageIcon {\n  width: 207px;\n  height: 38px;\n  margin: 5px; }\n  .padding0 {\n  padding: 0px; }\n  a {\n  cursor: pointer; }\n  .nav-link {\n  color: rgba(255, 255, 255, 0.7) !important; }\n  @media all and (min-width: 992px) {\n  .navbar-toggleable-md .navbar-toggler {\n    display: flex; }\n  .titleHeader {\n    margin-left: 0px; }\n  .collapse {\n    display: flex; } }\n  @media all and (max-width: 991px) {\n  .collapse {\n    display: flex; }\n  .navbar-nav {\n    flex-direction: row;\n    position: absolute;\n    right: 0;\n    margin-top: 5px !important; }\n  .navbar {\n    flex-direction: row; }\n  .headerTitle {\n    display: none; }\n  .navbar-toggleable-md .navbar-nav .nav-link {\n    padding-right: .5rem;\n    padding-left: .5rem; }\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\n    position: absolute; }\n  .navbar-brand {\n    margin: auto; }\n  .titleHeader {\n    margin-left: 60px; } }\n  @media all and (max-width: 700px) {\n  .textdisplay {\n    display: none; } }\n  @media all and (max-width: 500px) {\n  .imageIcon {\n    width: 150px; }\n  .fontfontColorWhite {\n    font-size: 15px; }\n  .nav-link {\n    padding: 0; }\n  .headerIds {\n    font-size: 12px; } }\n  .headerclass {\n  position: fixed;\n  right: 0 !important;\n  flex-wrap: initial; }\n"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _services_userProfileService_user_profile_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/userProfileService/user-profile.service */ "./src/app/services/userProfileService/user-profile.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { TranslateService } from '@ngx-translate/core';
// import { LanguageManagementService } from '../../../shared/services/languageManagementService/languageManagement.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(LocalStorageService, modalService, UserProfileService, router) {
        var _this = this;
        this.LocalStorageService = LocalStorageService;
        this.modalService = modalService;
        this.UserProfileService = UserProfileService;
        this.router = router;
        this.pushRightClass = 'push-right';
        this.lockImagePath = './assets/lock.png';
        this.labels = this.LocalStorageService.retrieve("SelectedLanguage");
        if (!this.labels) {
            this.code = this.LocalStorageService.retrieve("CurrentLanguage");
            if (this.code) {
                this.code = 'en';
            }
        }
        this.router.events.subscribe(function (val) {
            _this.toggleSidebar();
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userData = this.LocalStorageService.retrieve("userData");
        this.UserProfileService.getUserDetails().then(function (success) {
            if (success.status === 200) {
                _this.userName = success.data[0].FirstName;
                _this.Id = success.data[0].Id;
                _this.language = success.data[0].Language;
                _this.languageCode = success.data[0].LanguageCode;
                _this.LocalStorageService.store("CurrentLanguage", _this.languageCode);
            }
        });
    };
    HeaderComponent.prototype.resetModel = function () {
        this.errorMessage = "";
        this.message = "";
        this.currentPassword = "";
        this.enterPassword = "";
        this.reenterPassword = "";
    };
    HeaderComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    HeaderComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    HeaderComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    HeaderComponent.prototype.onLoggedout = function () {
        this.LocalStorageService.clear();
        this.router.navigate(['/']);
        window.location.reload();
    };
    // onLoggedout() {
    //   localStorage.removeItem('isLoggedin');
    //   this.LocalStorageService.clear();
    //   this.router.navigate(['/login']);
    //   window.location.reload();
    // }
    HeaderComponent.prototype.updateLanguage = function (l) {
        var _this = this;
        var params = {
            "LanguageId": l.Id,
            "Id": this.Id
        };
        this.UserProfileService.changeLanguage(params).then(function (success) {
            if (success.status === 200) {
                _this.message = success.message;
                _this.LocalStorageService.store("CurrentLanguage", l.Code);
            }
            else {
                _this.errorMessage = success.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.save = function () {
        var _this = this;
        var params = {
            Id: this.Id,
            Password: btoa(this.currentPassword),
            NewPassword: btoa(this.enterPassword)
        };
        this.message = null;
        this.errorMessage = null;
        this.UserProfileService.changePassword(params).then(function (success) {
            if (success.status === 200) {
                _this.message = success.message;
                document.getElementById('closePopup').click();
            }
            else {
                _this.errorMessage = success.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    HeaderComponent.prototype.open = function (modal) {
        this.LocalStorageService.store("footer", false);
        this.reenterPassword = '';
        this.enterPassword = '';
        this.currentPassword = '';
        this.message = '';
        this.errorMessage = '';
        this.modalService.open(modal).result.then(function (result) {
        }, function (reason) { });
    };
    HeaderComponent.prototype.ngAfterViewChecked = function () {
        var mainDiv = document.getElementsByClassName("modal");
        if (mainDiv[0]) {
            this.innerHeight = window.innerHeight
                || document.documentElement.clientHeight
                || document.body.clientHeight;
            this.innerWidth = window.innerWidth
                || document.documentElement.clientWidth
                || document.body.clientWidth;
            var modal = document.getElementsByClassName("modal-content");
            if (modal[0]) {
                this.offset(modal[0]);
            }
        }
    };
    HeaderComponent.prototype.offset = function (el) {
        if ((this.innerHeight - el.offsetHeight) > 0) {
            el.style.top = (this.innerHeight - el.offsetHeight) / 2 + "px";
        }
        else {
            el.style.top = 0 + "px";
        }
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"],
            _services_userProfileService_user_profile_service__WEBPACK_IMPORTED_MODULE_3__["UserProfileService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar\" [ngClass]=\"{sidebarPushRight: isActive}\">\r\n    <ul class=\"list-group\">\r\n        <!-- <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-dashboard\"></i>&nbsp;{{ 'Dashboard' }}\r\n        </a> -->\r\n        <!-- <a [routerLink]=\"['/charts']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;{{ 'Charts' }}\r\n        </a>\r\n        <a [routerLink]=\"['/tables']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-table\"></i>&nbsp;{{ 'Tables' }}\r\n        </a>\r\n        <a [routerLink]=\"['/forms']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-edit\"></i>&nbsp;{{ 'Forms' }}\r\n        </a>\r\n        <a [routerLink]=\"['/bs-element']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-desktop\"></i>&nbsp;{{ 'Boostrap Element' }}\r\n        </a>\r\n        <a [routerLink]=\"['/grid']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-fw fa-wrench\"></i>&nbsp;{{ 'Boostrap Grid' }}\r\n        </a>\r\n        <a [routerLink]=\"['/components']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-th-list\"></i>&nbsp;{{ 'Component' }}\r\n        </a>\r\n        <div class=\"nested-menu\">\r\n            <a class=\"list-group-item\" (click)=\"addExpandClass('pages')\">\r\n                <span><i class=\"fa fa-plus\"></i>&nbsp; {{ 'Menu' }}</span>\r\n            </a>\r\n            <li class=\"nested\" [class.expand]=\"showMenu === 'pages'\">\r\n                <ul class=\"submenu\">\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' }}</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' }}</span></a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"javascript:void(0)\"><span>{{ 'Submenu' }}</span></a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </div> -->\r\n        <a [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n            <i class=\"fa fa-car\"></i>&nbsp;Inspection\r\n        </a>\r\n        <a [hidden]=\"userData.Role!= 'Super Admin'\" [routerLink]=\"['/userManagement']\" [routerLinkActive]=\"['router-link-active']\"\r\n            class=\"list-group-item\">\r\n            <i class=\"fa fa-users\"></i>&nbsp;User Management\r\n        </a>\r\n        <!-- <a class=\"list-group-item more-themes\" href=\"http://www.strapui.com/\" >\r\n            {{ 'More Theme' }}\r\n        </a> -->\r\n    </ul>\r\n    <div>\r\n        <div class=\"sidebarLogo\">\r\n            <img src=\"assets/img/autodap_logo.png\" width=\"150px\" /><br>\r\n\r\n            <span style=\"margin-left: 75px;font-weight: 500;\">Powered by</span>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar {\n  border-radius: 0;\n  position: fixed;\n  z-index: 1000;\n  top: 48px;\n  left: 245px;\n  width: 245px;\n  margin-left: -245px;\n  border: none;\n  border-radius: 0;\n  overflow-y: auto;\n  background-color: #eceff1;\n  bottom: 0;\n  overflow-x: hidden;\n  padding-bottom: 40px;\n  transition: all 0.2s ease-in-out; }\n  .sidebar .list-group a.list-group-item {\n    background: #eceff1;\n    border: 0;\n    border-radius: 0;\n    color: #999 !important;\n    text-decoration: none;\n    font-size: 16px; }\n  .sidebar .list-group a.list-group-item .fa {\n      margin-right: 10px; }\n  .sidebar .list-group a:hover {\n    background: #c0cad1;\n    color: #fff !important; }\n  .sidebar .list-group a.router-link-active {\n    color: #eceff1;\n    background: #3a9d67;\n    color: #fff !important; }\n  .sidebar .sidebar-dropdown *:focus {\n    border-radius: none;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-title {\n    font-size: 1rem;\n    height: 50px;\n    margin-bottom: 0; }\n  .sidebar .sidebar-dropdown .panel-title a {\n      color: #999;\n      text-decoration: none;\n      font-weight: 400;\n      background: #eceff1; }\n  .sidebar .sidebar-dropdown .panel-title a span {\n        position: relative;\n        display: block;\n        padding: .75rem 1.5rem;\n        padding-top: 1rem; }\n  .sidebar .sidebar-dropdown .panel-title a:hover, .sidebar .sidebar-dropdown .panel-title a:focus {\n      color: #fff;\n      outline: none;\n      outline-offset: -2px; }\n  .sidebar .sidebar-dropdown .panel-title:hover {\n    background: #dde3e6; }\n  .sidebar .sidebar-dropdown .panel-collapse {\n    border-radius: 0;\n    border: none; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item {\n      border-radius: 0;\n      background-color: #eceff1;\n      border: 0 solid transparent; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a {\n        color: #999; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item a:hover {\n        color: #FFF; }\n  .sidebar .sidebar-dropdown .panel-collapse .panel-body .list-group-item:hover {\n      background: #dde3e6; }\n  .nested-menu .list-group-item {\n  cursor: pointer; }\n  .nested-menu .nested {\n  list-style-type: none; }\n  .nested-menu ul.submenu {\n  display: none;\n  height: 0; }\n  .nested-menu .expand ul.submenu {\n  display: block;\n  list-style-type: none;\n  height: auto; }\n  .nested-menu .expand ul.submenu li a {\n    color: #FFF;\n    padding: 10px;\n    display: block; }\n  .sidebarLogo {\n  bottom: 0 !important;\n  /* margin-bottom: 0px!important; */\n  position: absolute;\n  margin-bottom: 60px;\n  margin-left: 20px;\n  line-height: 0; }\n  @media screen and (max-width: 992px) {\n  .sidebar {\n    top: 48px;\n    left: 0px; } }\n"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { LanguageManagementService } from '../../../shared/services/languageManagementService/languageManagement.service';
// environment settings

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(LocalStorageService, router) {
        this.LocalStorageService = LocalStorageService;
        this.router = router;
        this.isActive = false;
        this.showMenu = '';
        this.superAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].SuperAdmin;
        this.admin = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].Admin;
        this.labels = this.LocalStorageService.retrieve("SelectedLanguage");
        if (!this.labels) {
            this.code = this.LocalStorageService.retrieve("CurrentLanguage");
            if (this.code) {
                this.code = 'en';
            }
        }
    }
    SidebarComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    SidebarComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    SidebarComponent.prototype.ngOnInit = function () {
        this.userData = this.LocalStorageService.retrieve('userData');
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/shared/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map