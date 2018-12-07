(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/layout/signup/signup-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/signup/signup-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SignupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupRoutingModule", function() { return SignupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component */ "./src/app/layout/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _signup_component__WEBPACK_IMPORTED_MODULE_2__["SignupComponent"] }
];
var SignupRoutingModule = /** @class */ (function () {
    function SignupRoutingModule() {
    }
    SignupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SignupRoutingModule);
    return SignupRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/signup/signup.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/signup/signup.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\" style=\"padding: 0!important; overflow-x: hidden\">\r\n    <div class=\"row\">\r\n        <div class=\"loginBox SignupBox\">\r\n            <div style=\"background-color:#f7f7f7;\">\r\n                <form #registerForm=\"ngForm\" role=\"form\">\r\n\r\n                    <h5 style=\"color:black;font-weight: bold; padding-top:20px\">Register</h5>\r\n\r\n                    <div class=\"form-content\" style=\"padding: 40px 0 0 0;margin-top: -40px\">\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\" [(ngModel)]=\"firstName\" name=\"fname\" #fname=\"ngModel\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                     placeholder=\"First Name\" required max='50'>\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-user\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"fname.invalid && (fname.dirty || fname.touched)\"  style=\"color:red; text-align:left\">\r\n                                    <div *ngIf=\"fname.errors.required\">\r\n                                        <small>First Name Is Required</small>\r\n                                    </div>\r\n                                    </div>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\" [(ngModel)]=\"lastName\" name=\"lname\" maxlength=\"50\" #lname=\"ngModel\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                     placeholder=\"Last Name\" >\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-user\"></i>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\" autocomplete=\"off\" required [(ngModel)]=\"uname\" #email=\"ngModel\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                    id=\"uname\" name=\"uname\"\r\n                                    placeholder=\"Email\" max='250'>\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-envelope\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" style=\"color:red; text-align:left\">\r\n\r\n                                    <div *ngIf=\"email.errors.required\">\r\n                                        <small> Email Is Required</small>\r\n                                    </div>\r\n                                    <div *ngIf=\"email.errors.pattern\">\r\n                                        <small> Enter Valid Email</small>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                    <input type=\"text\" autocomplete=\"off\" [(ngModel)]=\"Company\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                    id=\"Company\" name=\"Company\" placeholder= \"Company\" max='50'>\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-building-o\"></i>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n\r\n                        <!-- <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\" [(ngModel)]=\"address1\" autocomplete=\"off\" required name=\"add1\" #add1=\"ngModel\" maxlength=\"200\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                     placeholder=\"{{ 'Address 1*' | translate }}\">\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-address-book-o\"></i>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\" [(ngModel)]=\"address2\" maxlength=\"200\" name=\"add2\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                    placeholder=\"{{ 'Address 2' | translate }}\">\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-address-book-o\"></i>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\"  autocomplete=\"off\" required [(ngModel)]=\"country\" maxlength=\"100\" name=\"country\" pattern=\"[a-zA-Z ]*\" maxlength=\"100\" #count=\"ngModel\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                     placeholder=\"{{ 'Country*' | translate }}\">\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-globe\"></i>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"text\" autocomplete=\"off\" required [(ngModel)]=\"pinCode\" maxlength=\"10\" #pin=\"ngModel\" class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                    id=\"pin\" name=\"pin\" pattern=\"^[0-9]{6}$\" placeholder=\"{{ 'Postal Code*' | translate }}\">\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-map-marker\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"pin.invalid && (pin.dirty || pin.touched)\" class=\"text-danger\">\r\n                                    <div *ngIf=\"pin.errors.pattern\">\r\n                                        <small>{{ 'Enter valid PIN Code.' | translate }}</small>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </div> -->\r\n\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"password\" [(ngModel)]=\"password\" name=\"pass\" #pass=\"ngModel\" required class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                    placeholder=\"Password\">\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-lock\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"pass.invalid && (pass.dirty || pass.touched)\" style=\"color:red; text-align:left\">\r\n                                    <div *ngIf=\"pass.errors.required\">\r\n                                        <small>Password Is Required</small>\r\n                                    </div>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <span class=\"row row1\">\r\n                                <input type=\"password\" [(ngModel)]=\"confirmPass\" name=\"cnfPass\" #cnfPass=\"ngModel\" required class=\"input-underline\" style=\"padding-left:2%;height: 36px;\"\r\n                                    placeholder=\"Repeat Password\">\r\n                                <div class=\"input-icon-right\" style=\"height: 36px;padding:2%;\">\r\n                                    <i class=\"fa fa-lock\"></i>\r\n                                </div>\r\n                                <div *ngIf=\"cnfPass.invalid && (cnfPass.dirty || cnfPass.touched)\" style=\"color:red; text-align:left\">\r\n                                    <div *ngIf=\"cnfPass.errors.required\">\r\n                                        <small> Confirm Password Is Required</small>\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"confirmPass != password && (cnfPass.dirty || cnfPass.touched)\" style=\"color:red; text-align:left\">\r\n                                    <small>Confirm Password Not Matched</small>\r\n                                </div>\r\n                            </span>\r\n                        </div>\r\n                        <div *ngIf=\"message\" class=\"form-group\" style=\"color: black\">\r\n                            <span>{{message}}</span>\r\n                        </div>\r\n                    </div>\r\n                    <button (click)=\"register()\" class=\"loginButton color\" [disabled]=\"registerForm.invalid || confirmPass != password\">\r\n                        Register</button>\r\n                    <!-- <a class=\"btn rounded-btn\" [routerLink]=\"['/login']\"> Log in </a> -->\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/signup/signup.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/signup/signup.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n.login-page {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: auto;\n  text-align: center;\n  color: #fff;\n  padding: 3em; }\n\n.login-page .col-lg-4 {\n    padding: 0; }\n\n.login-page .input-lg {\n    height: 46px;\n    padding: 10px 16px;\n    font-size: 18px;\n    line-height: 1.3333333;\n    border-radius: 0; }\n\n.login-page .input-underline {\n    width: 90%;\n    box-shadow: none;\n    border: 1px solid #ccc;\n    border-right: none;\n    color: #aaa;\n    border-radius: 0;\n    font-size: small; }\n\n.login-page .row1:hover .input-underline {\n    border: 1px solid #aaa;\n    border-right: none; }\n\n.login-page .row1:hover .input-icon-right {\n    border: 1px solid #aaa;\n    border-left: none; }\n\n.login-page .loginButton {\n    background: #0275d8;\n    border: 1px solid #0275d8;\n    padding: 10px;\n    width: 100%;\n    text-align: center;\n    color: #fff;\n    border: none; }\n\n.login-page .input-icon-right {\n    float: right;\n    border: 1px solid #ccc;\n    border-left: none;\n    background: #fff;\n    color: #aaa;\n    width: 10%;\n    padding: 8px; }\n\n.login-page .input-underline:focus {\n    width: 90%;\n    box-shadow: none;\n    border: 1px solid #ccc;\n    border-right: none;\n    outline: none; }\n\n.login-page .btn-default {\n    background: #f7f7f7;\n    color: black;\n    padding: 2px; }\n\n.login-page .rounded-btn {\n    border-radius: 50px;\n    color: rgba(255, 255, 255, 0.8);\n    background: #222;\n    border: 2px solid rgba(255, 255, 255, 0.8);\n    font-size: 18px;\n    line-height: 40px;\n    padding: 0 25px; }\n\n.login-page .rounded-btn:hover, .login-page .rounded-btn:focus, .login-page .rounded-btn:active, .login-page .rounded-btn:visited {\n    color: white;\n    border: 2px solid white;\n    outline: none; }\n\n.login-page h1 {\n    font-weight: 300;\n    margin-top: 20px;\n    margin-bottom: 10px;\n    font-size: 36px; }\n\n.login-page h1 small {\n      color: rgba(255, 255, 255, 0.7); }\n\n.login-page .form-group {\n    padding: 8px 0; }\n\n.login-page .form-group input::-webkit-input-placeholder {\n      color: #aaa !important;\n      font-size: small; }\n\n.login-page .form-group input:-moz-placeholder {\n      /* Firefox 18- */\n      color: #aaa !important;\n      font-size: small; }\n\n.login-page .form-group input::-moz-placeholder {\n      /* Firefox 19+ */\n      color: #aaa !important;\n      font-size: small; }\n\n.login-page .form-group input:-ms-input-placeholder {\n      color: #aaa !important;\n      font-size: small; }\n\n.login-page .form-content {\n    padding: 40px 0; }\n\n.login-page .user-avatar {\n    border-radius: 50%;\n    border: 2px solid #FFF; }\n\n.loginBox {\n  width: 350px;\n  border: 7px solid rgba(255, 255, 255, 0.3);\n  margin: auto; }\n\n.row1 {\n  width: 85%;\n  margin: auto; }\n\n.color {\n  background-color: #398cb5 !important; }\n\n.color:disabled {\n  background-color: #bababa !important; }\n\n.SignupBox {\n  background-color: #398cb5 !important;\n  margin-top: 30px; }\n"

/***/ }),

/***/ "./src/app/layout/signup/signup.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/signup/signup.component.ts ***!
  \***************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _services_registerService_register_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/registerService/register.service */ "./src/app/services/registerService/register.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { routerTransition } from '../../router.animations';





// import { LanguageManagementService } from '../../shared/services/languageManagementService/languageManagement.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(RegisterService, LocalStorageService, router, titleService) {
        this.RegisterService = RegisterService;
        this.LocalStorageService = LocalStorageService;
        this.router = router;
        this.titleService = titleService;
        this.superAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SuperAdmin;
        this.labels = this.LocalStorageService.retrieve("SelectedLanguage");
        if (!this.labels) {
            this.code = this.LocalStorageService.retrieve("CurrentLanguage");
            if (this.code) {
                this.code = 'en';
            }
            // this.LanguageManagementService.translate(this.code)
            //   .subscribe(
            //     data => {
            //       this.labels = data;
            //       //this.sessionService.setSession('selectedLanguage', this.labels);
            //     },
            //     err => console.log('get error: ', err)
            //   );
        }
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Sign Up');
        this.userData = this.LocalStorageService.retrieve('userData');
        // if (this.userData) {
        //   if (this.userData.User[0].Role != this.superAdmin) {
        //     this.router.navigate(['/apiLookUp']);
        //   }
        // }
    };
    SignupComponent.prototype.register = function () {
        var _this = this;
        var params = {
            FirstName: this.firstName,
            LastName: this.lastName,
            Email: this.uname,
            Password: btoa(this.password),
            Company: this.Company,
        };
        this.RegisterService.registerUser(params).then(function (success) {
            if (success.status === 200) {
                _this.message = "User Created Successfully";
            }
            else {
                _this.message = success.message;
            }
        }, function (error) {
            console.log(error);
        });
    };
    ;
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/layout/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/layout/signup/signup.component.scss")],
            animations: []
        }),
        __metadata("design:paramtypes", [_services_registerService_register_service__WEBPACK_IMPORTED_MODULE_3__["RegisterService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/layout/signup/signup.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/signup/signup.module.ts ***!
  \************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/layout/signup/signup-routing.module.ts");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup.component */ "./src/app/layout/signup/signup.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';




var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _signup_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignupRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map