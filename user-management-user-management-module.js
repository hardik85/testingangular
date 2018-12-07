(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-management-user-management-module"],{

/***/ "./src/app/layout/user-management/user-management-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/user-management/user-management-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: UserManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementRoutingModule", function() { return UserManagementRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management.component */ "./src/app/layout/user-management/user-management.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _user_management_component__WEBPACK_IMPORTED_MODULE_2__["UserManagementComponent"] }
];
var UserManagementRoutingModule = /** @class */ (function () {
    function UserManagementRoutingModule() {
    }
    UserManagementRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserManagementRoutingModule);
    return UserManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overflowHidden\">\r\n    <div class=\"row padding10px\">\r\n        <div class=\"col-lg-10 marginTop5px\">\r\n            <input class=\"form-control floatLeft col-lg-10 width85\" [(ngModel)]=\"searchValue\" (ngModelChange)=\"searchUser()\">\r\n            <span class=\"fa fa-search faSearch\" (click)=\"searchUser()\"></span>\r\n        </div>\r\n        <div class=\"col-lg-1\"></div>\r\n        <div class=\"col-lg-1 marginTop5px\">\r\n            <a class=\"mb-sm btn floatRight backGroundDarkGreen\" [routerLink]=\"['/signup']\">\r\n                <a class=\"marginRight10px\"></a>Add User</a>\r\n        </div>\r\n    </div>\r\n    <br />\r\n    <form novalidate #myForm=\"ngForm\" class=\"padding10px\">\r\n        <kendo-grid [data]=\"view\" [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\r\n            [pageable]=\"true\" [sortable]=\"true\" (dataStateChange)=\"onStateChange($event)\" (edit)=\"editHandler($event)\"\r\n            (cancel)=\"cancelHandler($event)\" (save)=\"saveHandler($event)\">\r\n            <kendo-grid-messages pagerOf=\"of\" pagerItems=\"items\"></kendo-grid-messages>\r\n            <kendo-grid-column field=\"FirstName\" title=\"FirstName\" width=\"140\">\r\n                <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                    <input [(ngModel)]=\"dataItem.FirstName\" kendoGridFocusable max='50' name=\"FirstName\" class=\"k-textbox\"\r\n                        required />\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"LastName\" title=\"LastName\" width=\"140\">\r\n                <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                    <input [(ngModel)]=\"dataItem.LastName\" kendoGridFocusable max='50' name=\"LastName\" class=\"k-textbox\" />\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"Email\" title=\"EmailAddress\" width=\"260\">\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"Company\" title=\"Company\" width=\"120\" [style]=\"{'text-align': 'center'}\">\r\n                <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                    <input [(ngModel)]=\"dataItem.Company\" kendoGridFocusable name=\"Company\" max='50' class=\"k-textbox\" />\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"APICount\" title=\"Count\" width=\"100\" [style]=\"{'text-align': 'center'}\">\r\n                <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                    <input [(ngModel)]=\"dataItem.APICount\" (keyup)=\"dataItem.APICount&lt;0 ? dataItem.APICount = 0: dataItem.APICount\"\r\n                        type=\"number\" min=\"0\" kendoGridFocusable name=\"APICount\" class=\"k-textbox\" />\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-column field=\"Active\" editor=\"boolean\" title=\"IsActive\" width=\"100\" [style]=\"{'text-align': 'center'}\">\r\n                <ng-template kendoGridCellTemplate let-dataItem>\r\n                    <input kendoGridFocusable name=\"Active\" type=\"checkbox\" disabled *ngIf='dataItem.Active' checked />\r\n                    <input kendoGridFocusable name=\"Active\" type=\"checkbox\" disabled *ngIf='!dataItem.Active' />\r\n                </ng-template>\r\n                <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\r\n                    <input [(ngModel)]=\"dataItem.Active\" kendoGridFocusable name=\"Active\" type=\"checkbox\" />\r\n                </ng-template>\r\n            </kendo-grid-column>\r\n            <kendo-grid-command-column title=\" Action\" width=\"120\">\r\n                <ng-template kendoGridCellTemplate let-dataItem>\r\n                    <div class=\"textAlignCenter\">\r\n                        <i class=\"fa fa-pencil borderNone colorOrange\" kendoGridEditCommand aria-hidden=\"true\" (click)='dataItem.hideInfo = true'></i>\r\n                        <i class=\"fa fa-info k-button borderNone colorInfo\" aria-hidden=\"true\" (click)=\"featureAccess(dataItem)\"></i>\r\n                        <i class=\"fa fa-lock k-button borderNone colorLock\" *ngIf='!dataItem.hideInfo' aria-hidden=\"true\"\r\n                            (click)=\"resetPassword(changepwd,dataItem)\"></i>\r\n                        <i class=\"fa fa-check borderNone colorSuccess\" kendoGridSaveCommand aria-hidden=\"true\" (click)='dataItem.hideInfo = false'\r\n                            [disabled]=\"myForm.invalid\"></i>\r\n                        <i class=\"fa fa-times borderNone colorDanger\" kendoGridCancelCommand aria-hidden=\"true\" (click)='dataItem.hideInfo = false'></i>\r\n                    </div>\r\n                </ng-template>\r\n            </kendo-grid-command-column>\r\n        </kendo-grid>\r\n    </form>\r\n    <ng-template #apiPermission let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                APIManagement\r\n            </h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <kendo-grid [data]=\"APIResult\">\r\n                <kendo-grid-messages pagerOf=\"{{ labels['KendoGrid.Footer.Of']}}\" pagerItems=\"{{ labels['KendoGrid.Footer.items'] }}\"></kendo-grid-messages>\r\n                <kendo-grid-column field=\"\" width=\"35\" [filterable]=\"false\">\r\n                    <ng-template kendoGridHeaderTemplate let-dataItem>\r\n                        <div class=\"textAlignCenter\">\r\n                            <input type=\"checkbox\" name=\"checkAll\" id=\"checkAll\" [(ngModel)]=\"checkAll\" (change)=\"selectAll($event)\" />\r\n                        </div>\r\n                    </ng-template>\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        <div class=\"textAlignCenter\">\r\n                            <input #theCheckbox [(ngModel)]=\"dataItem.isSelect\" type=\"checkbox\" (ngModelChange)='changeList($event)'>\r\n                        </div>\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"APIName\" title=\"{{ labels['UserManagement.APIName'] }}\" width=\"100\">\r\n                </kendo-grid-column>\r\n            </kendo-grid>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success mb-sm\" (click)=\"save()\">{{ labels['UserManagement.Save'] }}</button>\r\n            <button type=\"button\" class=\"btn btn-danger mb-sm\" id=\"closePopup\" (click)=\"d('Cross click')\">{{\r\n                labels['UserManagement.Close'] }}</button>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <!-- Change Password -->\r\n    <ng-template #changepwd let-c=\"close\" let-d=\"dismiss\">\r\n        <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"myModalLabel\">\r\n                Change Password\r\n            </h4>\r\n            <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <div *ngIf=\"errorMessage\" style=\"color:red; text-align:left\">\r\n                <small>{{errorMessage}}</small>\r\n            </div>\r\n            <div *ngIf=\"message\" style=\"color:green; text-align:left\">\r\n                <small>{{message}}</small>\r\n            </div>\r\n            <form #passwordResetForm=\"ngForm\" role=\"form\">\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" name=\"newPass\" #newPass=\"ngModel\"\r\n                    required [(ngModel)]=\"enterPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n                <div *ngIf=\"newPass.invalid && (newPass.dirty || newPass.touched)\" style=\"color:red; text-align:left\">\r\n                    <div *ngIf=\"newPass.errors.required\">\r\n                        <small>NewPassword Is Required</small>\r\n                    </div>\r\n                </div>\r\n                <br />\r\n                <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" name=\"cnfPass\" #cnfPass=\"ngModel\"\r\n                    required [(ngModel)]=\"reenterPassword\" [ngModelOptions]=\"{standalone: true}\">\r\n                <div *ngIf=\"cnfPass.invalid && (cnfPass.dirty || cnfPass.touched)\" style=\"color:red; text-align:left\">\r\n                    <div *ngIf=\"cnfPass.errors.required\">\r\n                        <small>Confirm Password Is Required</small>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"reenterPassword != enterPassword && (cnfPass.dirty || cnfPass.touched)\" style=\"color:red; text-align:left\">\r\n                    <small>Confirm Password Not Matched With NewPassword</small>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-success mb-sm\" [disabled]=\"newPass.invalid || cnfPass.invalid || (reenterPassword != enterPassword)\"\r\n                (click)=\"confirmPwdSave()\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-danger mb-sm\" id='closePopup' (click)=\"d('Cross click')\">Close</button>\r\n        </div>\r\n    </ng-template>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".width500px {\n  width: 500px; }\n\n.floatLeft {\n  float: left;\n  border-radius: 4px 0px 0px 4px; }\n\n.floatRight {\n  float: right; }\n\n.backGroundDarkGreen {\n  color: white !important;\n  background: #398cb5; }\n\n.faSearch {\n  font-size: 18px;\n  cursor: pointer;\n  background: #ccc;\n  color: black;\n  padding: 0.64rem 0.75rem;\n  border-radius: 0px 4px 4px 0px; }\n\n.btn-success {\n  background-color: #12afe3 !important;\n  border-color: #12afe3 !important; }\n\n.btn-danger {\n  background-color: #ff0000bf !important;\n  border-color: #ff0000bf !important; }\n\n.textAlignCenter {\n  text-align: center; }\n\n.buttonWidth {\n  width: 25px; }\n\n.btn-info {\n  background-color: #595f65 !important;\n  border-color: #595f65 !important; }\n\n.borderNone {\n  background: inherit;\n  border: none; }\n\n.colorOrange {\n  color: darkorange; }\n\n.colorInfo {\n  color: #0275d8; }\n\n.colorSuccess {\n  color: green; }\n\n.colorDanger {\n  color: red; }\n\n.colorLock {\n  color: #398cb5; }\n\n@media (min-width: 476px) {\n  .col-lg-10 {\n    width: 80%; }\n  .col-lg-1 {\n    width: 10%; } }\n\n@media (max-width: 476px) {\n  .col-lg-10 {\n    width: 100%; }\n  .width85 {\n    width: 85%; }\n  .backGroundDarkGreen {\n    width: 100%; }\n  .faSearch {\n    width: 15%;\n    text-align: center; } }\n\n.marginTop5px {\n  margin-top: 5px; }\n\n.footerMain {\n  margin: 0px;\n  bottom: -1px;\n  position: fixed;\n  width: 100%;\n  z-index: 1500; }\n\n.padding10px {\n  padding: 10px; }\n\n.overflowHidden {\n  overflow-x: hidden; }\n"

/***/ }),

/***/ "./src/app/layout/user-management/user-management.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/dist/app.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @progress/kendo-data-query */ "./node_modules/@progress/kendo-data-query/dist/es/main.js");
/* harmony import */ var _services_userProfileService_user_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/userProfileService/user-profile.service */ "./src/app/services/userProfileService/user-profile.service.ts");
/* harmony import */ var _lib_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/ng2-bootstrap-modal */ "./src/app/lib/ng2-bootstrap-modal/index.js");
/* harmony import */ var _lib_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_lib_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_popupgeneral_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/popupgeneral/popup.component */ "./src/app/shared/popupgeneral/popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










// import { LanguageManagementService } from '../../shared/services/languageManagementService/languageManagement.service';
//grid related demo methods
var UserManagementComponent = /** @class */ (function () {
    function UserManagementComponent(UserProfileService, modalService, LocalStorageService, router, titleService, dialogService) {
        this.UserProfileService = UserProfileService;
        this.modalService = modalService;
        this.LocalStorageService = LocalStorageService;
        this.router = router;
        this.titleService = titleService;
        this.dialogService = dialogService;
        this.searchValue = '';
        this.intermediate = false;
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.apiGridState = {
            sort: [],
            skip: 0,
            take: 40
        };
        this.footerPass = true;
        this.superAdmin = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].SuperAdmin;
        this.labels = this.LocalStorageService.retrieve("SelectedLanguage");
        if (!this.labels) {
            this.code = this.LocalStorageService.retrieve("CurrentLanguage");
            if (this.code) {
                this.code = 'en';
            }
        }
    }
    UserManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('User Management');
        this.userData = this.LocalStorageService.retrieve('userData');
        if (this.userData) {
            if (this.userData.Role != this.superAdmin) {
                this.router.navigate(['/userManagement']);
            }
            else {
                this.UserProfileService.getUserList().then(function (success) {
                    if (success.status === 200) {
                        _this.data = success.data;
                        _this.loadItems();
                    }
                });
            }
        }
    };
    UserManagementComponent.prototype.searchUser = function () {
        this.gridState.skip = 0;
        this.gridState.filter = {
            logic: 'or',
            filters: [
                { field: 'FirstName', operator: 'contains', value: this.searchValue },
                { field: 'LastName', operator: 'contains', value: this.searchValue },
                { field: 'Email', operator: 'contains', value: this.searchValue }
            ]
        };
        this.loadItems();
    };
    UserManagementComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.loadItems();
    };
    UserManagementComponent.prototype.loadItems = function () {
        this.view = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_6__["process"])(this.data, this.gridState);
    };
    UserManagementComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedProduct = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    UserManagementComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    UserManagementComponent.prototype.saveHandler = function (_a) {
        var _this = this;
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.UserProfileService.updateUser(dataItem).then(function (success) {
            if (success.status === 200) {
                _this.data = success.data;
                _this.UserProfileService.getUserList().then(function (success) {
                    if (success.status === 200) {
                        _this.data = success.data;
                        _this.loadItems();
                    }
                });
            }
        });
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    };
    UserManagementComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.resetItem(this.editedProduct);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    };
    UserManagementComponent.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        for (var i in this.data) {
            var obj = this.data[i];
            if (obj["Id"] == dataItem.Id) {
                this.data[i] = dataItem;
            }
        }
        this.loadItems();
    };
    UserManagementComponent.prototype.open = function (modal, dataItem) {
        this.checkAll = false;
        var count = 0;
        this.currentDataItem = dataItem;
        for (var api in this.apiList) {
            this.apiList[api].isSelect = false;
            this.apiList[api].hideInfo = false;
            for (var api_modified in this.currentDataItem.APIAllowedModified) {
                if (this.apiList[api].Id == this.currentDataItem.APIAllowedModified[api_modified].APIId) {
                    this.apiList[api].isSelect = true;
                    count = count + 1;
                }
            }
        }
        if (count == this.apiList.length) {
            this.checkAll = true;
            this.intermediate = false;
        }
        else if (count > 0) {
            this.intermediate = true;
        }
        else {
            this.intermediate = false;
        }
        this.APIResult = Object(_progress_kendo_data_query__WEBPACK_IMPORTED_MODULE_6__["process"])(this.apiList, this.apiGridState);
        this.modalService.open(modal).result.then(function (result) {
        }, function (reason) { });
    };
    ///Reset Password////
    UserManagementComponent.prototype.resetPassword = function (modal, dataItem) {
        this.footerPass = false;
        this.currentDataItem = dataItem;
        this.reenterPassword = '';
        this.enterPassword = '';
        this.message = '';
        this.errorMessage = '';
        this.modalService.open(modal).result.then(function (result) {
        }, function (reason) { });
    };
    UserManagementComponent.prototype.confirmPwdSave = function () {
        var _this = this;
        var params = {
            Id: this.currentDataItem.Id,
            NewPassword: btoa(this.enterPassword)
        };
        this.message = null;
        this.errorMessage = null;
        this.UserProfileService.updatePassword(params).then(function (success) {
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
    ///Reset Password////
    UserManagementComponent.prototype.selectAll = function () {
        this.intermediate = false;
        if (this.checkAll) {
            for (var api in this.apiList) {
                this.apiList[api].isSelect = true;
            }
        }
        else {
            for (var api in this.apiList) {
                this.apiList[api].isSelect = false;
            }
        }
    };
    UserManagementComponent.prototype.changeList = function (value) {
        var count = 0;
        for (var api in this.apiList) {
            if (this.apiList[api].isSelect) {
                count = count + 1;
            }
        }
        this.checkAll = false;
        if (count == this.apiList.length) {
            this.checkAll = true;
            this.intermediate = false;
        }
        else if (count > 0) {
            this.intermediate = true;
        }
        else {
            this.intermediate = false;
        }
    };
    UserManagementComponent.prototype.save = function () {
        var _this = this;
        var apiListToEdit = [];
        for (var api in this.apiList) {
            if (this.apiList[api].isSelect) {
                apiListToEdit.push(this.apiList[api]);
            }
        }
        this.currentDataItem.APIAllowedModified = apiListToEdit;
        this.UserProfileService.editAPIList(this.currentDataItem).then(function (success) {
            _this.UserProfileService.getUserList().then(function (success) {
                if (success.status === 200) {
                    _this.data = success.data;
                    _this.loadItems();
                    document.getElementById('closePopup').click();
                }
            });
        });
    };
    UserManagementComponent.prototype.featureAccess = function (data) {
        var _this = this;
        this.UserProfileService.fetchFeatures(data.Id).then(function (success) {
            var data = success.data;
            var dataItem = {
                description: 'AccessFeature',
                title: 'Granted Features',
                data: data
            };
            _this.dialogService.addDialog(_shared_popupgeneral_popup_component__WEBPACK_IMPORTED_MODULE_9__["GeneralPopupComponent"], {
                popUpObject: dataItem
            }).subscribe(function (data) {
                if (data) {
                    _this.UserProfileService.updateUserFeature(data).then(function (success) {
                        alert(success.data);
                    });
                }
            });
        });
    };
    UserManagementComponent.prototype.ngAfterViewChecked = function () {
        if (this.intermediate) {
            var checkbox = document.getElementById('checkAll');
            if (checkbox) {
                checkbox['indeterminate'] = true;
            }
        }
        else {
            var checkbox = document.getElementById('checkAll');
            if (checkbox) {
                checkbox['indeterminate'] = false;
            }
        }
    };
    UserManagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-management',
            template: __webpack_require__(/*! ./user-management.component.html */ "./src/app/layout/user-management/user-management.component.html"),
            styles: [__webpack_require__(/*! ./user-management.component.scss */ "./src/app/layout/user-management/user-management.component.scss")],
            animations: [],
            providers: [],
        }),
        __metadata("design:paramtypes", [_services_userProfileService_user_profile_service__WEBPACK_IMPORTED_MODULE_7__["UserProfileService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"], _lib_ng2_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["DialogService"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/layout/user-management/user-management.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/user-management/user-management.module.ts ***!
  \******************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _user_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management-routing.module */ "./src/app/layout/user-management/user-management-routing.module.ts");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management.component */ "./src/app/layout/user-management/user-management.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { TranslateLoader, TranslateModule } from '@ngx-translate/core';




var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _user_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserManagementRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_3__["GridModule"]
            ],
            declarations: [_user_management_component__WEBPACK_IMPORTED_MODULE_5__["UserManagementComponent"]]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-management-user-management-module.js.map