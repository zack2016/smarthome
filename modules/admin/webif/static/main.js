(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _system_system_overview_system_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system/system-overview/system.component */ "./src/app/system/system-overview/system.component.ts");
/* harmony import */ var _system_system_config_system_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system/system-config/system-config.component */ "./src/app/system/system-config/system-config.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _items_item_tree_item_tree_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./items/item-tree/item-tree.component */ "./src/app/items/item-tree/item-tree.component.ts");
/* harmony import */ var _items_item_configuration_item_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/item-configuration/item-configuration.component */ "./src/app/items/item-configuration/item-configuration.component.ts");
/* harmony import */ var _items_structs_structs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./items/structs/structs.component */ "./src/app/items/structs/structs.component.ts");
/* harmony import */ var _items_struct_configuration_struct_configuration_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items/struct-configuration/struct-configuration.component */ "./src/app/items/struct-configuration/struct-configuration.component.ts");
/* harmony import */ var _logics_logics_list_logics_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logics/logics-list/logics-list.component */ "./src/app/logics/logics-list/logics-list.component.ts");
/* harmony import */ var _schedulers_schedulers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./schedulers/schedulers.component */ "./src/app/schedulers/schedulers.component.ts");
/* harmony import */ var _plugins_plugin_list_plugins_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./plugins/plugin-list/plugins.component */ "./src/app/plugins/plugin-list/plugins.component.ts");
/* harmony import */ var _plugins_config_plugin_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./plugins/config/plugin-config.component */ "./src/app/plugins/config/plugin-config.component.ts");
/* harmony import */ var _scenes_scene_list_scenes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scenes/scene-list/scenes.component */ "./src/app/scenes/scene-list/scenes.component.ts");
/* harmony import */ var _threads_threads_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./threads/threads.component */ "./src/app/threads/threads.component.ts");
/* harmony import */ var _logs_log_display_log_display_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logs/log-display/log-display.component */ "./src/app/logs/log-display/log-display.component.ts");
/* harmony import */ var _logs_logger_list_logger_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logs/logger-list/logger-list.component */ "./src/app/logs/logger-list/logger-list.component.ts");
/* harmony import */ var _logs_logging_configuration_logging_configuration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./logs/logging-configuration/logging-configuration.component */ "./src/app/logs/logging-configuration/logging-configuration.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/services/auth-guard.service */ "./src/app/common/services/auth-guard.service.ts");
/* harmony import */ var _scenes_scene_configuration_scene_configuration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./scenes/scene-configuration/scene-configuration.component */ "./src/app/scenes/scene-configuration/scene-configuration.component.ts");
/* harmony import */ var _logics_logics_edit_logics_edit_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./logics/logics-edit/logics-edit.component */ "./src/app/logics/logics-edit/logics-edit.component.ts");
























var appRoutes = [
    //  { path: '', redirectTo: '/system', pathMatch: 'full'},
    { path: '', component: _system_system_overview_system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"], pathMatch: 'full', canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'system', component: _system_system_overview_system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'system/systemproperties', component: _system_system_overview_system_component__WEBPACK_IMPORTED_MODULE_3__["SystemComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'system/config', component: _system_system_config_system_config_component__WEBPACK_IMPORTED_MODULE_4__["SystemConfigComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'item_tree', component: _items_item_tree_item_tree_component__WEBPACK_IMPORTED_MODULE_6__["ItemTreeComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'items/config', component: _items_item_configuration_item_configuration_component__WEBPACK_IMPORTED_MODULE_7__["ItemConfigurationComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'items/structs', component: _items_structs_structs_component__WEBPACK_IMPORTED_MODULE_8__["StructsComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'items/struct_config', component: _items_struct_configuration_struct_configuration_component__WEBPACK_IMPORTED_MODULE_9__["StructConfigurationComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'items', component: _items_item_tree_item_tree_component__WEBPACK_IMPORTED_MODULE_6__["ItemTreeComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logics/edit/:logicname', component: _logics_logics_edit_logics_edit_component__WEBPACK_IMPORTED_MODULE_23__["LogicsEditComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logics', component: _logics_logics_list_logics_list_component__WEBPACK_IMPORTED_MODULE_10__["LogicsListComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'schedulers', component: _schedulers_schedulers_component__WEBPACK_IMPORTED_MODULE_11__["SchedulersComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'plugins/config', component: _plugins_config_plugin_config_component__WEBPACK_IMPORTED_MODULE_13__["PluginConfigComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'plugins', component: _plugins_plugin_list_plugins_component__WEBPACK_IMPORTED_MODULE_12__["PluginsComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'plugins_list', component: _plugins_plugin_list_plugins_component__WEBPACK_IMPORTED_MODULE_12__["PluginsComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'scenes/list', component: _scenes_scene_list_scenes_component__WEBPACK_IMPORTED_MODULE_14__["ScenesComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'scenes/config', component: _scenes_scene_configuration_scene_configuration_component__WEBPACK_IMPORTED_MODULE_22__["SceneConfigurationComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'scenes', component: _scenes_scene_list_scenes_component__WEBPACK_IMPORTED_MODULE_14__["ScenesComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'threads', component: _threads_threads_component__WEBPACK_IMPORTED_MODULE_15__["ThreadsComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logs/logger-list', component: _logs_logger_list_logger_list_component__WEBPACK_IMPORTED_MODULE_17__["LoggerListComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logs/logging-configuration', component: _logs_logging_configuration_logging_configuration_component__WEBPACK_IMPORTED_MODULE_18__["LoggingConfigurationComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logs/display/:logname', component: _logs_log_display_log_display_component__WEBPACK_IMPORTED_MODULE_16__["LogDisplayComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logs/display', component: _logs_log_display_log_display_component__WEBPACK_IMPORTED_MODULE_16__["LogDisplayComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'logs', component: _logs_log_display_log_display_component__WEBPACK_IMPORTED_MODULE_16__["LogDisplayComponent"], canActivate: [_common_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"]] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { onSameUrlNavigation: 'reload' })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: HttpLoaderFactory, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _common_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/services/shared.service */ "./src/app/common/services/shared.service.ts");








// Allow ngx-translate to find translation files on other path than /assets/i18n/...
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppComponent = /** @class */ (function () {
    function AppComponent(http, dataService, translate, shared, authService) {
        var _this = this;
        this.http = http;
        this.dataService = dataService;
        this.translate = translate;
        this.shared = shared;
        this.authService = authService;
        this.title = 'app';
        console.log('AppComponent.constructor:');
        //    translate.setDefaultLang('de');
        this.dataService.getServerBasicinfo()
            .subscribe(function (response) {
            _this.dataService.shng_serverinfo = response;
            sessionStorage.setItem('default_language', _this.dataService.shng_serverinfo.default_language);
            // sessionStorage.setItem('client_ip', this.dataService.shng_serverinfo.client_ip);
            // sessionStorage.setItem('tz', this.dataService.shng_serverinfo.tz);
            // sessionStorage.setItem('tzname', this.dataService.shng_serverinfo.tzname);
            // sessionStorage.setItem('itemtree_fullpath', this.dataService.shng_serverinfo.itemtree_fullpath.toString());
            // sessionStorage.setItem('itemtree_searchstart', this.dataService.shng_serverinfo.itemtree_searchstart.toString());
            _this.shared.setGuiLanguage();
        }, function (error) {
            console.warn('DataService: getShngServerinfo():', { error: error });
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_5__["ServerApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _common_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: translateHttpLoaderFactory, AppModule, getBaseUrl, jwtOptionsFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateHttpLoaderFactory", function() { return translateHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtOptionsFactory", function() { return jwtOptionsFactory; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm5/ngx-translate-http-loader.js");
/* harmony import */ var _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ctrl/ngx-codemirror */ "./node_modules/@ctrl/ngx-codemirror/fesm5/ctrl-ngx-codemirror.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/treetable */ "./node_modules/primeng/treetable.js");
/* harmony import */ var primeng_treetable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(primeng_treetable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tooltip */ "./node_modules/primeng/tooltip.js");
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/menubar */ "./node_modules/primeng/menubar.js");
/* harmony import */ var primeng_menubar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_menubar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/inputtext.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/togglebutton */ "./node_modules/primeng/togglebutton.js");
/* harmony import */ var primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/inputswitch.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/tabview.js");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(primeng_tabview__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/tristatecheckbox */ "./node_modules/primeng/tristatecheckbox.js");
/* harmony import */ var primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/listbox.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(primeng_listbox__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _system_system_overview_system_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./system/system-overview/system.component */ "./src/app/system/system-overview/system.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _items_item_tree_item_tree_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./items/item-tree/item-tree.component */ "./src/app/items/item-tree/item-tree.component.ts");
/* harmony import */ var _logics_logics_list_logics_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./logics/logics-list/logics-list.component */ "./src/app/logics/logics-list/logics-list.component.ts");
/* harmony import */ var _schedulers_schedulers_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./schedulers/schedulers.component */ "./src/app/schedulers/schedulers.component.ts");
/* harmony import */ var _plugins_plugin_list_plugins_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./plugins/plugin-list/plugins.component */ "./src/app/plugins/plugin-list/plugins.component.ts");
/* harmony import */ var _scenes_scene_list_scenes_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./scenes/scene-list/scenes.component */ "./src/app/scenes/scene-list/scenes.component.ts");
/* harmony import */ var _threads_threads_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./threads/threads.component */ "./src/app/threads/threads.component.ts");
/* harmony import */ var _logs_log_display_log_display_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./logs/log-display/log-display.component */ "./src/app/logs/log-display/log-display.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _plugins_config_plugin_config_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./plugins/config/plugin-config.component */ "./src/app/plugins/config/plugin-config.component.ts");
/* harmony import */ var _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./common/services/olddata.service */ "./src/app/common/services/olddata.service.ts");
/* harmony import */ var _common_services_websocket_plugin_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./common/services/websocket-plugin.service */ "./src/app/common/services/websocket-plugin.service.ts");
/* harmony import */ var _logs_logger_list_logger_list_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./logs/logger-list/logger-list.component */ "./src/app/logs/logger-list/logger-list.component.ts");
/* harmony import */ var _logs_logging_configuration_logging_configuration_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./logs/logging-configuration/logging-configuration.component */ "./src/app/logs/logging-configuration/logging-configuration.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./no-access/no-access.component */ "./src/app/no-access/no-access.component.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _system_system_config_system_config_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./system/system-config/system-config.component */ "./src/app/system/system-config/system-config.component.ts");
/* harmony import */ var _items_structs_structs_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./items/structs/structs.component */ "./src/app/items/structs/structs.component.ts");
/* harmony import */ var _items_item_configuration_item_configuration_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./items/item-configuration/item-configuration.component */ "./src/app/items/item-configuration/item-configuration.component.ts");
/* harmony import */ var _items_struct_configuration_struct_configuration_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./items/struct-configuration/struct-configuration.component */ "./src/app/items/struct-configuration/struct-configuration.component.ts");
/* harmony import */ var _scenes_scene_configuration_scene_configuration_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./scenes/scene-configuration/scene-configuration.component */ "./src/app/scenes/scene-configuration/scene-configuration.component.ts");
/* harmony import */ var _logics_logics_edit_logics_edit_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./logics/logics-edit/logics-edit.component */ "./src/app/logics/logics-edit/logics-edit.component.ts");




























































function translateHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__["TranslateHttpLoader"](http);
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"],
                _system_system_overview_system_component__WEBPACK_IMPORTED_MODULE_30__["SystemComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_31__["ServicesComponent"],
                _items_item_tree_item_tree_component__WEBPACK_IMPORTED_MODULE_32__["ItemTreeComponent"],
                _logics_logics_list_logics_list_component__WEBPACK_IMPORTED_MODULE_33__["LogicsListComponent"],
                _schedulers_schedulers_component__WEBPACK_IMPORTED_MODULE_34__["SchedulersComponent"],
                _plugins_plugin_list_plugins_component__WEBPACK_IMPORTED_MODULE_35__["PluginsComponent"],
                _scenes_scene_list_scenes_component__WEBPACK_IMPORTED_MODULE_36__["ScenesComponent"],
                _threads_threads_component__WEBPACK_IMPORTED_MODULE_37__["ThreadsComponent"],
                _logs_log_display_log_display_component__WEBPACK_IMPORTED_MODULE_38__["LogDisplayComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_39__["HeaderComponent"],
                _plugins_config_plugin_config_component__WEBPACK_IMPORTED_MODULE_42__["PluginConfigComponent"],
                _logs_logger_list_logger_list_component__WEBPACK_IMPORTED_MODULE_45__["LoggerListComponent"],
                _logs_logging_configuration_logging_configuration_component__WEBPACK_IMPORTED_MODULE_46__["LoggingConfigurationComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_47__["NotFoundComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_48__["LoginComponent"],
                _no_access_no_access_component__WEBPACK_IMPORTED_MODULE_49__["NoAccessComponent"],
                _system_system_config_system_config_component__WEBPACK_IMPORTED_MODULE_52__["SystemConfigComponent"],
                _items_structs_structs_component__WEBPACK_IMPORTED_MODULE_53__["StructsComponent"],
                _items_item_configuration_item_configuration_component__WEBPACK_IMPORTED_MODULE_54__["ItemConfigurationComponent"],
                _items_struct_configuration_struct_configuration_component__WEBPACK_IMPORTED_MODULE_55__["StructConfigurationComponent"],
                _scenes_scene_configuration_scene_configuration_component__WEBPACK_IMPORTED_MODULE_56__["SceneConfigurationComponent"],
                _logics_logics_edit_logics_edit_component__WEBPACK_IMPORTED_MODULE_57__["LogicsEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_40__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_41__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                // Jwt Token Injection
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtModule"].forRoot({
                    config: {
                        throwNoTokenError: false
                    },
                    jwtOptionsProvider: {
                        provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JWT_OPTIONS"],
                        useFactory: jwtOptionsFactory,
                        deps: [_common_services_auth_service__WEBPACK_IMPORTED_MODULE_50__["AuthService"]]
                    }
                }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_12__["TreeModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_treetable__WEBPACK_IMPORTED_MODULE_14__["TreeTableModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_15__["AccordionModule"],
                primeng_tooltip__WEBPACK_IMPORTED_MODULE_16__["TooltipModule"],
                primeng_menubar__WEBPACK_IMPORTED_MODULE_17__["MenubarModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__["InputTextModule"],
                primeng_togglebutton__WEBPACK_IMPORTED_MODULE_21__["ToggleButtonModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__["DropdownModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_23__["ChartModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_24__["InputSwitchModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_25__["TabViewModule"],
                primeng_tristatecheckbox__WEBPACK_IMPORTED_MODULE_26__["TriStateCheckboxModule"],
                primeng_progressspinner__WEBPACK_IMPORTED_MODULE_27__["ProgressSpinnerModule"],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_28__["ListboxModule"],
                _ctrl_ngx_codemirror__WEBPACK_IMPORTED_MODULE_11__["CodemirrorModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_6__["TabsModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_7__["AlertModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateLoader"],
                        useFactory: (_app_component__WEBPACK_IMPORTED_MODULE_29__["HttpLoaderFactory"]),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
                    }
                })
                //        useFactory: translateHttpLoaderFactory,
            ],
            providers: [
                { provide: 'BASE_URL', useFactory: getBaseUrl },
                _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_43__["OlddataService"],
                _common_services_websocket_plugin_service__WEBPACK_IMPORTED_MODULE_44__["WebsocketPluginService"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_51__["JwtModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_29__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());

function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
function jwtOptionsFactory(authService) {
    return {
        tokenGetter: function () {
            if (authService !== undefined) {
                return authService.getToken();
            }
            return '';
        },
    };
}


/***/ }),

/***/ "./src/app/common/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/common/services/auth.service.ts");




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (rout, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/common/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/common/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _olddata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./olddata.service */ "./src/app/common/services/olddata.service.ts");








var AuthService = /** @class */ (function () {
    function AuthService(http, dataService, jwtHelper) {
        this.http = http;
        this.dataService = dataService;
        this.jwtHelper = jwtHelper;
        this.isLoginRequired = true;
        var token = localStorage.getItem('token');
        //    if (token) {
        //      const jwt = new JwtHelperService();
        //      this.currentUser = jwt.decodeToken(token);
        //    }
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var send_hash = 'shNG0160$';
        // const hostip = this.dataService.getHostIp();
        var hostip = sessionStorage.getItem('hostIp');
        var send_credentials = {};
        send_credentials.username = '';
        if (credentials.username !== '') {
            send_credentials.username = Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(credentials.username + send_hash);
        }
        send_credentials.password = '';
        if (credentials.password !== '') {
            send_credentials.password = Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(credentials.password) + send_hash);
        }
        if (hostip === 'localhost') {
            if (credentials.username === '') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
            }
            // After login:
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQXV0b2xvZ2luIiwiYWRtaW4iOnRydWUsImV4cCI6MTU0NjIzOTAyMiwiaWF0IjoxNTE2MjM5MDIyfQ.GpSSzk5SicKgGttwiVFq5xdOK7SM8KHU9992RBDUETU');
            this.currentUser = this.jwtHelper.decodeToken(localStorage.getItem('token'));
            var decodedToken = this.currentUser;
            console.log('authService.login', { decodedToken: decodedToken });
            // if login succeeds with an empty username, no login is required
            this.isLoginRequired = !(credentials.username === '');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(true);
        }
        // if not in develop environment:
        // return this.http.post('http://smarthomeng.fritz.box:1234/api/authenticate/user', JSON.stringify(send_credentials))
        // const apiUrl = sessionStorage.getItem('apiUrl');
        var apiUrl = '/api/';
        console.log('login', apiUrl + 'authenticate/user');
        console.log({ send_credentials: send_credentials });
        return this.http.post(apiUrl + 'authenticate/user', JSON.stringify(send_credentials))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var result = response;
            var anon = '';
            if (credentials.username === '') {
                anon = 'anonymous ';
            }
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                var jwt = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
                // this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                _this.currentUser = _this.jwtHelper.decodeToken(localStorage.getItem('token'));
                // if login succeeds with an empty username, no login is required
                _this.isLoginRequired = !(credentials.username === '');
                console.log(anon + 'login:', 'success');
                return true;
            }
            else {
                console.log(anon + 'login:', 'fail');
                return false;
            }
        }));
    };
    AuthService.prototype.login2 = function (credentials) {
        var _this = this;
        return this.http.post('/api/authenticate', JSON.stringify(credentials))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var result = response;
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                var jwt = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
                _this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                return true;
            }
            else {
                return false;
            }
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.currentUser = null;
    };
    AuthService.prototype.loginRequired = function () {
        return this.isLoginRequired;
    };
    AuthService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem('token');
        if (token === null) {
            return false;
        }
        var decodedToken = this.jwtHelper.decodeToken(localStorage.getItem('token'));
        if (decodedToken.exp !== null) {
            var hostip = sessionStorage.getItem('hostIp');
            if (hostip === 'localhost') {
                return true;
            }
            this.expiredLogin = this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
            if (this.expiredLogin) {
                console.warn('Token expired', { decodedToken: decodedToken });
            }
            var expirationDate = this.jwtHelper.getTokenExpirationDate(localStorage.getItem('token'));
            return !this.jwtHelper.isTokenExpired(localStorage.getItem('token'));
        }
        if (token === null || decodedToken.iat === null) {
            return false;
        }
        return true;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.isSecuredByLogin = function () {
        return true;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _olddata_service__WEBPACK_IMPORTED_MODULE_7__["OlddataService"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/common/services/config-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/config-api.service.ts ***!
  \*******************************************************/
/*! exports provided: ConfigApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigApiService", function() { return ConfigApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ConfigApiService = /** @class */ (function () {
    function ConfigApiService(http) {
        this.http = http;
    }
    ConfigApiService.prototype.getConfig = function () {
        // console.log('ConfigApiService.getConfig');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'config/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ConfigApiService (getConfig): Could not read schedulers data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ConfigApiService.prototype.saveConfig = function (data) {
        // console.log('ConfigApiService.saveConfig');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'config/core/';
        if (apiUrl.includes('localhost')) {
            console.log('ConfigApiService.saveConfig', 'Cannot simulate saving data in dev environment');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return this.http.put(url, JSON.stringify(data))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                console.log('ConfigApiService.saveConfig', 'success', { result: result });
                return true;
            }
            else {
                console.log('ConfigApiService.saveConfig', 'fail');
                return false;
            }
        }));
    };
    ConfigApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ConfigApiService);
    return ConfigApiService;
}());



/***/ }),

/***/ "./src/app/common/services/files-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/common/services/files-api.service.ts ***!
  \******************************************************/
/*! exports provided: FilesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesApiService", function() { return FilesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var FilesApiService = /** @class */ (function () {
    function FilesApiService(http) {
        this.http = http;
    }
    FilesApiService.prototype.readFile = function (filetype, filename) {
        // console.log('FilesApiService.readFile()', {filename});
        if (filename === void 0) { filename = ''; }
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'files/' + filetype + '/';
        if (apiUrl.includes('localhost')) {
            if (filename === '') {
                url += 'default' + '.txt';
            }
            else {
                url += filename + '.txt';
            }
        }
        else {
            if (filename !== '') {
                url += '?filename=' + filename;
            }
        }
        return this.http.get(url, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error({ err: err });
            if (filename === '') {
                console.error('FilesApiService (readFile): Could not read filetype \'' + filetype + '\' - error: ' + err.error.error);
            }
            else {
                console.error('FilesApiService (readFile): Could not read filetype \'' + filetype + '\', filename \'' + filename + '\' - error: ' + err.error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('');
        }));
    };
    FilesApiService.prototype.saveFile = function (filetype, filename, content) {
        // console.log('FilesApiService.saveFile');
        if (filename === void 0) { filename = ''; }
        if (content === void 0) { content = ''; }
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'files/' + filetype + '/';
        if (apiUrl.includes('localhost')) {
            if (filename === '') {
                url += 'default' + '.txt';
            }
            else {
                url += filename + '.txt';
            }
        }
        if (filename !== '') {
            url += '?filename=' + filename;
        }
        if (apiUrl.includes('localhost')) {
            if (filename === '') {
                console.warn('FilesApiService.saveFile', 'Cannot save file in dev environment\n', '- filetype: ', filetype);
            }
            else {
                console.error('FilesApiService.saveFile: Cannot save file in dev environment filetype \'' + filetype + '\', filename \'' + filename + '\'');
            }
            return this.http.get(url, { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var result = response;
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.error('FilesApiService.saveFile: Could not read result data' + ' - ' + err.error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        }
        return this.http.put(url, content, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('ServicesApiService.CheckYamlText', '- config:', yamlText, '\nresult', {result});
                return result;
            }
            else {
                console.log('FilesApiService.saveFile', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('FilesApiService.saveFile: Could not save config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    FilesApiService.prototype.deleteFile = function (filetype, filename) {
        if (filename === void 0) { filename = ''; }
        console.log('FilesApiService.deleteFile()', { filename: filename });
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'files/' + filetype + '/';
        if (apiUrl.includes('localhost')) {
            if (filename === '') {
                url += 'default' + '.txt';
            }
            else {
                url += filename + '.txt';
            }
        }
        else {
            if (filename !== '') {
                url += '?filename=' + filename;
            }
        }
        console.log('FilesApiService.deleteFile()', { url: url });
        return this.http.delete(url, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error({ err: err });
            if (filename === '') {
                console.error('FilesApiService.deleteFile(): Could not delete filetype \'' + filetype + '\' - error: ' + err.error.error);
            }
            else {
                console.error('FilesApiService.deleteFile(): Could not delete filetype \'' + filetype + '\', filename \'' + filename + '\' - error: ' + err.error.error);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])('');
        }));
    };
    FilesApiService.prototype.getfileList = function (filetype) {
        console.log('FilesApiService.getfileList()', { filetype: filetype });
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'files/' + filetype + '/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('FilesApiService.getfileList: Could not read file list' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    FilesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FilesApiService);
    return FilesApiService;
}());



/***/ }),

/***/ "./src/app/common/services/items-api.service.ts":
/*!******************************************************!*\
  !*** ./src/app/common/services/items-api.service.ts ***!
  \******************************************************/
/*! exports provided: ItemsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsApiService", function() { return ItemsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ItemsApiService = /** @class */ (function () {
    function ItemsApiService(http) {
        this.http = http;
    }
    ItemsApiService.prototype.getItemList = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'items/list/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ItemsApiService (getItemList): Could not read itemlist data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ItemsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ItemsApiService);
    return ItemsApiService;
}());



/***/ }),

/***/ "./src/app/common/services/loggers-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/loggers-api.service.ts ***!
  \********************************************************/
/*! exports provided: LoggersApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggersApiService", function() { return LoggersApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LoggersApiService = /** @class */ (function () {
    function LoggersApiService(http) {
        this.http = http;
    }
    LoggersApiService.prototype.getLoggers = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'loggers/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('LoggersApiService (getLogs): Could not read logs data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    LoggersApiService.prototype.setLoggerLevel = function (logger, level) {
        // console.log('LoggersApiService.setLoggerLevel');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'loggers/' + logger + '?level=' + level;
        if (apiUrl.includes('localhost')) {
            url += 'default.txt';
        }
        if (apiUrl.includes('localhost')) {
            console.warn('LoggersApiService.setLoggerLevel', 'Cannot set level dev environment\n', '- logger:', logger, 'level:', level);
            return this.http.get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var result = response;
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.error('LoggersApiService.setLoggerLevel: Could not read result data' + ' - ' + err.error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        }
        return this.http.put(url, 'xxx')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('ServicesApiService.ConvertToYamlText', '- config:', confText, '\nresult', {result});
                return result;
            }
            else {
                console.log('LoggersApiService.setLoggerLevel', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('LoggersApiService.setLoggerLevel: Could not set logger level' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    LoggersApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoggersApiService);
    return LoggersApiService;
}());



/***/ }),

/***/ "./src/app/common/services/logics-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/logics-api.service.ts ***!
  \*******************************************************/
/*! exports provided: LogicsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicsApiService", function() { return LogicsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var LogicsApiService = /** @class */ (function () {
    function LogicsApiService(http) {
        this.http = http;
    }
    LogicsApiService.prototype.getLogics = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'logics/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('LogicsApiService (getLogics): Could not read logics data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    LogicsApiService.prototype.setLogicState = function (logicName, action, filename) {
        if (filename === void 0) { filename = ''; }
        // valid actions are: 'trigger', 'enable', 'disable', 'load', 'unload', 'reload', 'delete', 'create'
        action = action.toLowerCase();
        // console.warn('LogicsApiService.setLogicState', {logicName}, {action});
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'logics/' + logicName + '?action=' + action;
        if (filename !== '') {
            url += '&filename=' + filename;
        }
        if (apiUrl.includes('localhost')) {
            console.warn('LogicsApiService.setLogicState', 'Cannot simulate setting states in dev environment\n', '- logic', logicName, ', action', action);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return this.http.put(url, JSON.stringify(''))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('LogicsApiService.setLogicState', '- config', config, '\nresult', {result});
                if (result.result === 'ok') {
                    // console.log('LogicsApiService.setLogicState', 'success');
                    return true;
                }
                else {
                    console.log('LogicsApiService.setLogicState', 'fail');
                    alert('LogicsApiService.setLogicState:\n' + result.result + '\n' + result.description);
                    return false;
                }
            }
            else {
                console.log('LogicsApiService.setLogicState', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('LogicsApiService.setLogicState: Could not set logic state' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    LogicsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogicsApiService);
    return LogicsApiService;
}());



/***/ }),

/***/ "./src/app/common/services/logs-api.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/common/services/logs-api.service.ts ***!
  \*****************************************************/
/*! exports provided: LogsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsApiService", function() { return LogsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _server_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-api.service */ "./src/app/common/services/server-api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var LogsApiService = /** @class */ (function () {
    function LogsApiService(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    LogsApiService.prototype.getLogs = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'logs/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.error('LogsApiService (getLogs): Could not read logs data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({});
        }));
    };
    LogsApiService.prototype.readLogfile = function (filename, chunk) {
        if (chunk === void 0) { chunk = null; }
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'logs/' + filename;
        if (chunk === null) {
            chunk = 1;
        }
        if (chunk !== null) {
            if (apiUrl.includes('localhost')) {
                url += '_chunk' + String(chunk);
            }
            else {
                url += '?chunk=' + String(chunk);
            }
        }
        // return this.http.get(url, { responseType: 'text' })
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            console.error({ err: err });
            console.error('LogsApiService (readLogfile): Could not read logfile ' + filename + ' - ' + err.error.error);
            var result = {};
            result['file'] = filename;
            result['filesize'] = 0;
            result['chunk'] = 1;
            result['chunksize'] = 1000;
            result['lines'] = [1, 1];
            result['loglines'] = ['FILE NOT FOUND!'];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
            // return of('File not found!');
        }));
    };
    LogsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _server_api_service__WEBPACK_IMPORTED_MODULE_3__["ServerApiService"]])
    ], LogsApiService);
    return LogsApiService;
}());



/***/ }),

/***/ "./src/app/common/services/olddata.service.ts":
/*!****************************************************!*\
  !*** ./src/app/common/services/olddata.service.ts ***!
  \****************************************************/
/*! exports provided: OlddataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OlddataService", function() { return OlddataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var url_start = 'http://';
var host_ip = '';
// let shng_serverinfo: ServerInfo = <ServerInfo>{'itemtree_fullpath': true};
var OlddataService = /** @class */ (function () {
    function OlddataService(http, translate, baseUrl) {
        this.http = http;
        this.translate = translate;
        this.shng_serverinfo = { 'itemtree_fullpath': true };
        this.href = '';
        console.log('OlddataService.constructor:');
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // console.log(baseUrl);
        this.baseUrl = baseUrl;
        if (host_ip === '') {
            host_ip = location.host;
            if (host_ip === 'localhost:4200') {
                url_start = baseUrl + '/assets/testdata/';
            }
            else {
                url_start = baseUrl;
            }
            // console.log({host_ip});
        }
    }
    OlddataService.prototype.ngOnInit = function () {
        //    console.log('OlddataService.ngOnInit:');
    };
    OlddataService.prototype.getconfigDefaultLanguage = function () {
        //    console.log('getconfigDefaultLanguage: default_language=' + shng_serverinfo.default_language);
        if (this.shng_serverinfo.default_language === undefined) {
            console.warn('getconfigDefaultLanguage: is undefined! (en used)');
            return 'en';
        }
        return this.shng_serverinfo.default_language;
    };
    OlddataService.prototype.getconfig = function (key) {
        if (this.shng_serverinfo[key] === undefined) {
            console.log('getconfig: key ' + key + ' is undefined!');
        }
        return this.shng_serverinfo[key];
    };
    OlddataService.prototype.getSysteminfo = function () {
        var url = url_start + 'systeminfo.json\\';
        // console.log('getSysteminfo: url: ' + url);
        return this.http.get(url);
    };
    OlddataService.prototype.getPypiinfo = function () {
        var url = url_start + 'pypi.json\\';
        // console.log('getPypiinfo: url: ' + url);
        return this.http.get(url);
    };
    // --------------------------------------------------------------------------
    OlddataService.prototype.getItemtree = function () {
        var url = url_start + 'items.json\\';
        // console.log('getItemtree: url: ' + url);
        return this.http.get(url);
    };
    OlddataService.prototype.getItemDetails = function (itempath) {
        //    const url = this.url_start + 'item_detail_json.html?item_path=';
        //    const url = 'http://10.0.0.174:1234/admin/item_detail_json.html?item_path=beoremote';
        var url = url_start + 'item_detail_json.html?item_path=' + itempath;
        console.log('getItemDetails: url: ' + url);
        if (host_ip === 'localhost:4200') {
            if (itempath === 'beoremote.beo4command') {
            }
            else {
                console.log('getItemDetails: url: <' + itempath + '>');
                return itempath;
            }
        }
        return this.http.get(url);
    };
    // --------------------------------
    //  Change value of specified item
    //
    OlddataService.prototype.changeItemValue = function (itempath, value) {
        var url = url_start + 'item_change_value.html?item_path=' + itempath + '&value=' + value;
        console.log('changeItemValue: url: ' + url);
        if (host_ip === 'localhost:4200') {
            alert('changeItemValue ' + itempath + ': Value not set, because running on localhost');
        }
        else {
            this.http.get(url)
                .subscribe(function (response) {
                console.log('updateValue:');
                console.log({ response: response });
            }, function (error) {
                console.log('ERROR: dataService.updateValue():');
                console.log(error);
            });
        }
    };
    OlddataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], String])
    ], OlddataService);
    return OlddataService;
}());



/***/ }),

/***/ "./src/app/common/services/plugins-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/plugins-api.service.ts ***!
  \********************************************************/
/*! exports provided: PluginsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsApiService", function() { return PluginsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var PluginsApiService = /** @class */ (function () {
    function PluginsApiService(http) {
        this.http = http;
    }
    // ---------------------------------------------------------------------
    //  Get information about the plugins installed in ../plugins directory
    //
    PluginsApiService.prototype.getInstalledPlugins = function () {
        // console.log('PluginsApiService.getInstalledPlugins');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugins/installed/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (getInstalledPlugins): Could not read plugins data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // ------------------------------------------------------------
    //  Get configuration information about all configured plugins
    //  - for plugins-config.component
    //
    PluginsApiService.prototype.getPluginsConfig = function () {
        // console.log('PluginsApiService.getPluginsConfig');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugins/config/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (getPluginsConfig): Could not read plugins data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // ------------------------------------------------------------
    //  Get configuration information about all configured plugins
    //  - for plugins.component
    //
    PluginsApiService.prototype.getPluginsInfo = function () {
        // console.log('PluginsApiService.getPluginsInfo');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugins/info/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (getPluginsInfo): Could not read plugins data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // ------------------------------------------------------------
    //  Get configuration information about all configured plugins
    //  - for plugins.component
    //
    PluginsApiService.prototype.getPluginsAPI = function () {
        // console.log('PluginsApiService.getPluginsApi');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugins/api/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (getPluginsInfo): Could not read plugins data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // -----------------------------------------------------------
    //  Update config of one plugin in etc/plugin.yaml on backend
    //
    PluginsApiService.prototype.setPluginConfig = function (pluginsection, config) {
        // console.log('PluginsApiService.setPluginConfig');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugin/' + pluginsection + '/';
        if (apiUrl.includes('localhost')) {
            console.warn('PluginsApiService.setPluginConfig', 'Cannot simulate saving data in dev environment\n', '- config', config);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return this.http.put(url, JSON.stringify(config))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('PluginsApiService.setPluginConfig', '- config', config, '\nresult', {result});
                if (result.result === 'ok') {
                    // console.log('PluginsApiService.setPluginConfig', 'success');
                    return true;
                }
                else {
                    console.log('PluginsApiService.setPluginConfig', 'fail');
                    alert('PluginsApiService.setPluginConfig:\n' + result.result + '\n' + result.description);
                    return false;
                }
            }
            else {
                console.log('PluginsApiService.setPluginConfig', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (setPluginConfig): Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // -----------------------------------------------------------
    //  add a new config of one plugin in etc/plugin.yaml on backend
    //
    PluginsApiService.prototype.addPluginConfig = function (pluginsection, config) {
        // console.log('PluginsApiService.addPluginConfig');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugin/' + pluginsection + '/';
        if (apiUrl.includes('localhost')) {
            console.warn('PluginsApiService.addPluginConfig', 'Cannot simulate saving data in dev environment\n', '- config', config);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return this.http.post(url, JSON.stringify(config))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                console.log('PluginsApiService.addPluginConfig', '- config', config, '\nresult', { result: result });
                if (result.result === 'ok') {
                    console.log('PluginsApiService.addPluginConfig', 'success');
                    return true;
                    //              return result;
                }
                else {
                    console.log('PluginsApiService.addPluginConfig', 'fail');
                    alert('PluginsApiService.addPluginConfig:\n' + result.result + '\n' + result.description);
                    return false;
                    //              return result;
                }
            }
            else {
                console.log('PluginsApiService.addPluginConfig', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (addPluginConfig): Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // -----------------------------------------------------------
    //  add a new config of one plugin in etc/plugin.yaml on backend
    //
    PluginsApiService.prototype.deletePluginConfig = function (pluginsection) {
        // console.log('PluginsApiService.deletePluginConfig\n', {pluginsection});
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'plugin/' + pluginsection + '/';
        if (apiUrl.includes('localhost')) {
            console.warn('PluginsApiService.deletePluginConfig', 'Cannot simulate deleting data in dev environment\n', '- section', pluginsection);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
        return this.http.delete(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                console.log('PluginsApiService.deletePluginConfig', '- section', pluginsection, '\nresult', { result: result });
                if (result.result === 'ok') {
                    console.log('PluginsApiService.deletePluginConfig', 'success');
                    return true;
                    //              return result;
                }
                else {
                    console.log('PluginsApiService.deletePluginConfig', 'fail');
                    alert('PluginsApiService.addPluginConfig:\n' + result.result + '\n' + result.description);
                    return false;
                    //              return result;
                }
            }
            else {
                console.log('PluginsApiService.deletePluginConfig', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('PluginsApiService (deletePluginConfig): Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    PluginsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PluginsApiService);
    return PluginsApiService;
}());



/***/ }),

/***/ "./src/app/common/services/scenes-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/scenes-api.service.ts ***!
  \*******************************************************/
/*! exports provided: ScenesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenesApiService", function() { return ScenesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ScenesApiService = /** @class */ (function () {
    function ScenesApiService(http) {
        this.http = http;
    }
    ScenesApiService.prototype.getScenes = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'scenes/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ScenesApiService (getScenes): Could not read scenes data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ScenesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ScenesApiService);
    return ScenesApiService;
}());



/***/ }),

/***/ "./src/app/common/services/schedulers-api.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/common/services/schedulers-api.service.ts ***!
  \***********************************************************/
/*! exports provided: SchedulersApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulersApiService", function() { return SchedulersApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var SchedulersApiService = /** @class */ (function () {
    function SchedulersApiService(http) {
        this.http = http;
    }
    SchedulersApiService.prototype.getSchedulers = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'schedulers/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('SchedulersApiService (getSchedulers): Could not read schedulers data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    SchedulersApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SchedulersApiService);
    return SchedulersApiService;
}());



/***/ }),

/***/ "./src/app/common/services/server-api.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/services/server-api.service.ts ***!
  \*******************************************************/
/*! exports provided: ServerApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerApiService", function() { return ServerApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared.service */ "./src/app/common/services/shared.service.ts");








var dataUrl = 'http://';
var host_ip = '';
var ServerApiService = /** @class */ (function () {
    function ServerApiService(http, translate, shared, baseUrl) {
        var _this = this;
        this.http = http;
        this.translate = translate;
        this.shared = shared;
        this.shng_serverinfo = { 'itemtree_fullpath': true };
        console.log('ServerApiService.constructor:');
        this.baseUrl = baseUrl;
        var parsedUrl = Object(url__WEBPACK_IMPORTED_MODULE_6__["parse"])(baseUrl);
        var apiUrl = '/api/';
        if (host_ip === '') {
            host_ip = location.host;
            if (host_ip === 'localhost:4200') {
                dataUrl = baseUrl + 'assets/testdata/';
                apiUrl = dataUrl + 'api/';
            }
            else {
                dataUrl = baseUrl;
            }
            sessionStorage.setItem('apiUrl', apiUrl);
            sessionStorage.setItem('dataUrl', dataUrl);
            sessionStorage.setItem('hostIp', host_ip.split(':')[0]);
            // sessionStorage.setItem('wsPort', '2424');
        }
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang(this.shared.getFallbackLanguage());
        this.getServerBasicinfo()
            .subscribe(function (response) {
            _this.shng_serverinfo = response;
        }, function (error) {
            console.warn('DataService: getShngServerinfo():', { error: error });
        });
    }
    ServerApiService.prototype.getServerBasicinfo = function () {
        var _this = this;
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'server/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.shng_serverinfo = response;
            var result = response;
            sessionStorage.setItem('default_language', _this.shng_serverinfo.default_language);
            sessionStorage.setItem('client_ip', _this.shng_serverinfo.client_ip);
            // sessionStorage.setItem('tz', this.shng_serverinfo.tz);
            // sessionStorage.setItem('tzname', this.shng_serverinfo.tzname);
            // sessionStorage.setItem('itemtree_fullpath', this.shng_serverinfo.itemtree_fullpath.toString());
            // sessionStorage.setItem('itemtree_searchstart', this.shng_serverinfo.itemtree_searchstart.toString());
            // sessionStorage.setItem('core_branch', this.shng_serverinfo.core_branch);
            // sessionStorage.setItem('plugins_branch', this.shng_serverinfo.plugins_branch);
            var hostip = sessionStorage.getItem('hostIp');
            if (hostip === 'localhost') {
                // sessionStorage.setItem('wsHost', this.shng_serverinfo.websocket_host);
            }
            else {
                sessionStorage.setItem('wsHost', hostip);
            }
            // sessionStorage.setItem('wsPort', this.shng_serverinfo.websocket_port);
            _this.shared.setGuiLanguage();
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServerApiService (getServerinfo): Could not read serverinfo data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ServerApiService.prototype.getServerinfo = function () {
        var _this = this;
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'server/info/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        console.log('getServerinfo()');
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.shng_serverinfo = response;
            var result = response;
            sessionStorage.setItem('default_language', _this.shng_serverinfo.default_language);
            sessionStorage.setItem('client_ip', _this.shng_serverinfo.client_ip);
            sessionStorage.setItem('tz', _this.shng_serverinfo.tz);
            sessionStorage.setItem('tzname', _this.shng_serverinfo.tzname);
            sessionStorage.setItem('itemtree_fullpath', _this.shng_serverinfo.itemtree_fullpath.toString());
            sessionStorage.setItem('itemtree_searchstart', _this.shng_serverinfo.itemtree_searchstart.toString());
            sessionStorage.setItem('core_branch', _this.shng_serverinfo.core_branch);
            sessionStorage.setItem('plugins_branch', _this.shng_serverinfo.plugins_branch);
            var hostip = sessionStorage.getItem('hostIp');
            if (hostip === 'localhost') {
                sessionStorage.setItem('wsHost', _this.shng_serverinfo.websocket_host);
            }
            else {
                sessionStorage.setItem('wsHost', hostip);
            }
            sessionStorage.setItem('wsPort', _this.shng_serverinfo.websocket_port);
            _this.shared.setGuiLanguage();
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServerApiService (getServerinfo): Could not read serverinfo data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // get Status of shNG software
    ServerApiService.prototype.getShngServerStatus = function () {
        // console.log('getShngServerStatus')
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'server/status/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (err.error.error !== undefined) {
                console.error('ServerApiService (getShngServerStatus): Could not read server status' + ' - ' + err.error.error);
                //          } else {
                //            console.warn('ServerApiService (getShngServerStatus): SmartHomeNG is not running');
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // restart shNG software
    ServerApiService.prototype.restartShngServer = function () {
        // console.log('restartShngServer')
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'server/restart/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.put(url, JSON.stringify(''))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServerApiService (RestartShngServer): Could not restart server' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // Download config files as a zip archive
    ServerApiService.prototype.downloadConfigBackup = function () {
        // console.log('restartShngServer')
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'files/backup/';
        if (apiUrl.includes('localhost')) {
            url += 'shng_backup.zip';
        }
        return this.http.get(url, { responseType: 'blob' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServerApiService (downloadConfigBackup): Could not download backup data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ServerApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL')),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"], String])
    ], ServerApiService);
    return ServerApiService;
}());



/***/ }),

/***/ "./src/app/common/services/services-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/common/services/services-api.service.ts ***!
  \*********************************************************/
/*! exports provided: ServicesApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesApiService", function() { return ServicesApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ServicesApiService = /** @class */ (function () {
    function ServicesApiService(http) {
        this.http = http;
    }
    // -----------------------------------------------------------
    //  Send eval data to check if it is conform to Python specification
    //
    ServicesApiService.prototype.CheckEvalData = function (evalData) {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'services/evalcheck/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        if (apiUrl.includes('localhost')) {
            console.warn('ServicesApiService.CheckEvalData', 'Cannot check eval data in dev environment\n', '- yamlText: ', evalData);
            return this.http.get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var result = response;
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.error('ServicesApiService (CheckEvalData): Could not read result data' + ' - ' + err.error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        }
        return this.http.put(url, evalData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('ServicesApiService.CheckEvalData', '- config:', evalData, '\nresult', {result});
                return result;
            }
            else {
                console.log('ServicesApiService.CheckEvalData', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServicesApiService.CheckEvalData: Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // -----------------------------------------------------------
    //  Send yaml text to check if it is conform to specification
    //
    ServicesApiService.prototype.CheckYamlText = function (yamlText) {
        // console.log('ServicesApiService.CheckYamlText');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'services/yamlcheck/';
        if (apiUrl.includes('localhost')) {
            url += 'default.txt';
        }
        if (apiUrl.includes('localhost')) {
            console.warn('ServicesApiService.CheckYamlText', 'Cannot check yaml text in dev environment\n', '- yamlText: ', yamlText);
            return this.http.get(url, { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var result = response;
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.error('ServicesApiService (CheckYamlText): Could not read result data' + ' - ' + err.error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        }
        return this.http.put(url, yamlText, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('ServicesApiService.CheckYamlText', '- config:', yamlText, '\nresult', {result});
                return result;
            }
            else {
                console.log('ServicesApiService.CheckYamlText', 'fail: undefined result');
                return '';
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServicesApiService.CheckYamlText: Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    // -----------------------------------------------------------
    //  Send yaml text to check if it is conform to specification
    //
    ServicesApiService.prototype.ConvertToYamlText = function (confText) {
        // console.log('ServicesApiService.CheckYamlText');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'services/yamlconvert/';
        if (apiUrl.includes('localhost')) {
            url += 'default.txt';
        }
        if (apiUrl.includes('localhost')) {
            console.warn('ServicesApiService.ConvertToYamlText', 'Cannot convert conf text to yaml in dev environment\n', '- yamlText: ', confText);
            return this.http.get(url, { responseType: 'text' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var result = response;
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.error('ServicesApiService (ConvertToYamlText): Could not read result data' + ' - ' + err.error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        }
        return this.http.put(url, confText, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('ServicesApiService.ConvertToYamlText', '- config:', confText, '\nresult', {result});
                return result;
            }
            else {
                console.log('ServicesApiService.ConvertToYamlText', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServicesApiService.ConvertToYamlText: Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ServicesApiService.prototype.getCacheOrphans = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'services/cachecheck/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServicesApiService (getCacheOrphans): Could not read cache orphans data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ServicesApiService.prototype.deleteCacheFile = function (filename) {
        // console.log('ServicesApiService.deleteCacheFile');
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'services/cachefile_delete?filename=' + filename;
        if (apiUrl.includes('localhost')) {
            url += 'default.txt';
        }
        if (apiUrl.includes('localhost')) {
            console.warn('ServicesApiService.deleteCacheFile', 'Cannot delete cache file in dev environment\n', '- filename:', filename);
            return this.http.get(url)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                var result = response;
                return result;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
                console.error('ServicesApiService (deleteCacheFile): Could not read result data' + ' - ' + err.error.error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
            }));
        }
        return this.http.put(url, 'xxx')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            if (result) {
                // console.log('ServicesApiService.ConvertToYamlText', '- config:', confText, '\nresult', {result});
                return result;
            }
            else {
                console.log('ServicesApiService.deleteCacheFile', 'fail: undefined result');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ServicesApiService.deleteCacheFile: Could not set plugin config data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ServicesApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ServicesApiService);
    return ServicesApiService;
}());



/***/ }),

/***/ "./src/app/common/services/shared.service.ts":
/*!***************************************************!*\
  !*** ./src/app/common/services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _olddata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./olddata.service */ "./src/app/common/services/olddata.service.ts");




var SharedService = /** @class */ (function () {
    function SharedService(translate, dataService) {
        this.translate = translate;
        this.dataService = dataService;
    }
    SharedService.prototype.ageToString = function (age) {
        var days = Math.trunc(age / (24 * 3600));
        age = age - (24 * 3600 * days);
        var hours = Math.trunc(age / 3600);
        age = age - (3600 * hours);
        var minutes = Math.trunc(age / 60);
        age = age - (60 * minutes);
        var seconds = Math.round(100 * age) / 100;
        if (days !== 0) {
            seconds = Math.round(age);
        }
        var result = '';
        if (days !== 0) {
            result += String(days) + ' ';
            if (days === 1) {
                result += this.translate.instant('DAY');
            }
            else {
                result += this.translate.instant('DAYS');
            }
        }
        if (hours !== 0) {
            if (result !== '') {
                result += ', ';
            }
            result += String(hours) + ' ';
            if (hours === 1) {
                result += this.translate.instant('HOUR');
            }
            else {
                result += this.translate.instant('HOURS');
            }
        }
        if (minutes !== 0) {
            if (result !== '') {
                result += ', ';
            }
            result += String(minutes) + ' ';
            if (minutes === 1) {
                result += this.translate.instant('MINUTE');
            }
            else {
                result += this.translate.instant('MINUTES');
            }
        }
        if (seconds !== 0) {
            if (result !== '') {
                result += ', ';
            }
            result += String(seconds) + ' ';
            if (seconds === 1) {
                result += this.translate.instant('SECOND');
            }
            else {
                result += this.translate.instant('SECONDS');
            }
        }
        return result;
    };
    // ---------------------------------------------------------
    // Returns a displayable string for a given datetime
    //
    SharedService.prototype.displayDateTime = function (datetime) {
        if (datetime) {
            var datew = datetime.split(' ')[0];
            datew = datew.split('-');
            var date = datew[2] + '.' + datew[1] + '.' + datew[0];
            var time = datetime.split(' ')[1].split('.')[0];
            //      const tz = this.dataService.getconfig('tzname');
            var tz = sessionStorage.getItem('tzname');
            return date + ' ' + time + ' ' + tz;
        }
        else {
            return datetime;
        }
    };
    // ---------------------------------------------------------
    SharedService.prototype.isInt = function (value) {
        return /^-{0,1}\d+$/.test(value);
    };
    // ---------------------------------------------------------
    // Checks if the passed string is a valid knx goup address
    //
    //  The checked format is: <main group>/<middle group>/<subgroup>
    //
    //    main group (0-31 = 5 bits)
    //    middle group (0-7 = 3 bits)
    //    subgroup (0-255 = 8 bits)
    //
    SharedService.prototype.is_knx_groupaddress = function (groupaddress) {
        if (groupaddress === undefined || groupaddress === '') {
            return true;
        }
        var g = groupaddress.split('/');
        if (g.length !== 3) {
            return false;
        }
        if (!(this.isInt(g[0]) && this.isInt(g[1]) && this.isInt(g[2]))) {
            return false;
        }
        if ((Number(g[0]) < 0) || (Number(g[0]) > 31)) {
            return false;
        }
        if ((Number(g[1]) < 0) || (Number(g[1]) > 7)) {
            return false;
        }
        if ((Number(g[2]) < 0) || (Number(g[2]) > 255)) {
            return false;
        }
        return true;
    };
    // ---------------------------------------------------------
    // Checks if the passed string is a valid mac address
    //
    SharedService.prototype.is_mac = function (mac) {
        mac = String(mac);
        var MACRegex = new RegExp('"^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$');
        return MACRegex.test(mac);
    };
    // ---------------------------------------------------------
    // Checks if the passed string is a valid hostname
    //
    SharedService.prototype.is_hostname = function (str) {
        //    const pattern = new RegExp('(([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|', 'i');
        var pattern = new RegExp('^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$', 'gm');
        return pattern.test(str);
    };
    // ---------------------------------------------------------
    // Checks if the passed string is a valid ipv4 address
    //
    SharedService.prototype.is_ipv4 = function (ipaddress) {
        if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
            return true;
        }
        return false;
    };
    // ---------------------------------------------------------
    // Checks if the passed string is a valid ipv6 address
    //
    SharedService.prototype.is_ipv6 = function (value) {
        // See https://blogs.msdn.microsoft.com/oldnewthing/20060522-08/?p=31113 and
        // https://4sysops.com/archives/ipv6-tutorial-part-4-ipv6-address-syntax/
        var components = value.split(':');
        if (components.length < 2 || components.length > 8) {
            return false;
        }
        if (components[0] !== '' || components[1] !== '') {
            // Address does not begin with a zero compression ("::")
            if (!components[0].match(/^[\da-f]{1,4}/i)) {
                // Component must contain 1-4 hex characters
                return false;
            }
        }
        var numberOfZeroCompressions = 0;
        for (var i = 1; i < components.length; ++i) {
            if (components[i] === '') {
                // We're inside a zero compression ("::")
                ++numberOfZeroCompressions;
                if (numberOfZeroCompressions > 1) {
                    // Zero compression can only occur once in an address
                    return false;
                }
                continue;
            }
            if (!components[i].match(/^[\da-f]{1,4}/i)) {
                // Component must contain 1-4 hex characters
                return false;
            }
        }
        return true;
    };
    // ---------------------------------------------------------
    // getTimeStamp() gets an object with date and time strings
    // from an unix timestamp
    //
    // call: obj = getTimeStamp(new Date(timestamp_as_number))
    //
    SharedService.prototype.zFill = function (str) {
        if (Number(str) < 10) {
            str = '0' + str;
        }
        return str;
    };
    SharedService.prototype.getTimeStamp = function (timestamp) {
        var date = [String(timestamp.getDate()), String(timestamp.getMonth() + 1), String(timestamp.getFullYear())];
        // Create an array with the current hour, minute and second
        var time = [String(timestamp.getHours()), String(timestamp.getMinutes()), String(timestamp.getSeconds())];
        // If seconds and minutes are less than 10, add a zero
        time[1] = this.zFill(time[1]);
        time[2] = this.zFill(time[2]);
        // Return the formatted string
        return {
            date: date.join('.'),
            time: time.join(':')
        };
    };
    // ---------------------------------------------------------
    // getBrowser() gets an object with name and version strings
    // of the used browser
    SharedService.prototype.getBrowser = function () {
        var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
            return { name: 'IE', version: (tem[1] || '') };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR|Edge\/(\d+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/(\d+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    };
    // ---------------------------------------------------------
    // setGuiLanguage() sets the default language to one of
    // the installed languages
    SharedService.prototype.setGuiLanguage = function () {
        var installed_languages = ['en', 'de', 'fr'];
        if (installed_languages.indexOf(sessionStorage.getItem('default_language')) > -1) {
            this.translate.use(sessionStorage.getItem('default_language'));
        }
        else {
            console.warn('SharedService.setGuiLanguage', 'language ' + sessionStorage.getItem('default_language') +
                ' not installed, using ' + installed_languages[0] + ' instead');
            this.translate.use(installed_languages[0]);
            sessionStorage.setItem('default_language', installed_languages[0]);
        }
    };
    // ---------------------------------------------------------
    // getFallbackLanguage() returns the fallback language
    // (must be 'en' or 'de' (because only those translations
    // have to exist
    SharedService.prototype.getFallbackLanguage = function () {
        return 'en';
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _olddata_service__WEBPACK_IMPORTED_MODULE_3__["OlddataService"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/common/services/structs-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/structs-api.service.ts ***!
  \********************************************************/
/*! exports provided: StructsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructsApiService", function() { return StructsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var StructsApiService = /** @class */ (function () {
    function StructsApiService(http) {
        this.http = http;
    }
    StructsApiService.prototype.getStructs = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'items/structs/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('StructsApiService (getStructs): Could not read structs data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    StructsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StructsApiService);
    return StructsApiService;
}());



/***/ }),

/***/ "./src/app/common/services/threads-api.service.ts":
/*!********************************************************!*\
  !*** ./src/app/common/services/threads-api.service.ts ***!
  \********************************************************/
/*! exports provided: ThreadsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadsApiService", function() { return ThreadsApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var ThreadsApiService = /** @class */ (function () {
    function ThreadsApiService(http) {
        this.http = http;
    }
    ThreadsApiService.prototype.getThreads = function () {
        var apiUrl = sessionStorage.getItem('apiUrl');
        var url = apiUrl + 'threads/';
        if (apiUrl.includes('localhost')) {
            url += 'default.json';
        }
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var result = response;
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error('ThreadsApiService (getThreads): Could not read threads data' + ' - ' + err.error.error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
        }));
    };
    ThreadsApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ThreadsApiService);
    return ThreadsApiService;
}());



/***/ }),

/***/ "./src/app/common/services/websocket-plugin.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/services/websocket-plugin.service.ts ***!
  \*************************************************************/
/*! exports provided: WebsocketPluginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketPluginService", function() { return WebsocketPluginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./websocket.service */ "./src/app/common/services/websocket.service.ts");
/* harmony import */ var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.service */ "./src/app/common/services/shared.service.ts");
/* harmony import */ var _olddata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./olddata.service */ "./src/app/common/services/olddata.service.ts");



// import { SystemComponent } from '../system/system.component';



// ------------------------------------------------------------------
var WebsocketPluginService = /** @class */ (function () {
    function WebsocketPluginService(dataService, websocketService, shared) {
        this.dataService = dataService;
        this.websocketService = websocketService;
        this.shared = shared;
        this.msgListenSeriesLoad = {
            'cmd': 'series',
            'item': 'env.system.load',
            'series': 'avg',
            'start': '48h',
            'end': 'now',
            'count': 10
        };
        this.msgListenSeriesMemory = {
            'cmd': 'series',
            'item': 'env.core.memory',
            'series': 'avg',
            'start': '48h',
            'end': 'now',
            'count': 10
        };
        this.msgListenSeriesThreads = {
            'cmd': 'series',
            'item': 'env.core.threads',
            'series': 'avg',
            'start': '48h',
            'end': 'now',
            'count': 20
        };
        this.msgListenSeriesDisk = {
            'cmd': 'series',
            'item': 'env.system.diskusagepercent',
            'series': 'avg',
            'start': '48h',
            'end': 'now',
            'count': 10
        };
        this.systemload = {
            'series': [],
            'tsdiff': 0,
        };
        this.memory = {
            'series': [],
            'tsdiff': 0,
        };
        this.threads = {
            'series': [],
            'tsdiff': 0,
        };
        this.disk = {
            'series': [],
            'tsdiff': 0,
        };
        this.systemloadSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.systemloadUpdate$ = this.systemloadSource.asObservable();
        this.memorySource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.memoryUpdate$ = this.memorySource.asObservable();
        this.threadsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.threadsUpdate$ = this.threadsSource.asObservable();
        this.diskSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.diskUpdate$ = this.diskSource.asObservable();
        this.firstMsgSent = false;
        this.msgIdentity = {
            cmd: 'identity',
            sw: 'shngAdmin',
            ver: 'v0.2.1',
            browser: 'y',
            bver: ''
        };
    }
    WebsocketPluginService.prototype.ngOnInit = function () {
    };
    WebsocketPluginService.prototype.delay = function (ms, msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(function () { return resolve(); }, ms); }).then(function () {
                            //      console.log('fired ' + msg)
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    WebsocketPluginService.prototype.connect = function () {
        var _this = this;
        var wsHost = sessionStorage.getItem('wsHost');
        var wsPort = sessionStorage.getItem('wsPort');
        var plugin_url = 'ws://' + wsHost + ':' + wsPort;
        console.log({ plugin_url: plugin_url }, '\nFür mockup Environment in \n\'testdata/serverinfo/default.json\' anpassen');
        this.wsService = new _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]();
        this.subject = this.wsService.connect(plugin_url);
        this.subject.subscribe(function (msg) {
            var data = JSON.parse(msg.data);
            if (data.cmd === 'item') {
                _this.handleResponseItem(data);
            }
            else if (data.cmd === 'series') {
                _this.handleResponseSeries(data);
            }
            else {
                console.log('message received :');
                console.log(data);
            }
        }, function (err) { return console.log(err); });
        if (this.firstMsgSent) {
            this.wsService.sendMessage(this.msgIdentity);
        }
        else {
            this.delay(500, 'msgIdentity').then(function (any) {
                var browser = _this.shared.getBrowser();
                _this.msgIdentity.browser = browser.name;
                _this.msgIdentity.bver = browser.version;
                // task after delay.
                _this.wsService.sendMessage(_this.msgIdentity);
                _this.firstMsgSent = true;
            });
        }
    };
    WebsocketPluginService.prototype.handleResponseItem = function (data) {
        console.log('message received (item):');
        console.log(data);
    };
    WebsocketPluginService.prototype.sendMessage = function (message) {
        var _this = this;
        if (this.firstMsgSent) {
            this.wsService.sendMessage(message);
        }
        else {
            this.delay(500, message.item).then(function (any) {
                // task after delay.
                _this.wsService.sendMessage(message);
            });
        }
    };
    // ------------------------------------------------------------------
    // requests series for load, memory and threads
    //
    WebsocketPluginService.prototype.getSeriesLoad = function (period, count) {
        if (period === void 0) { period = '24h'; }
        if (count === void 0) { count = 100; }
        this.msgListenSeriesLoad.start = period;
        this.msgListenSeriesLoad.count = count;
        this.sendMessage(this.msgListenSeriesLoad);
    };
    WebsocketPluginService.prototype.getSeriesMemory = function (period, count) {
        if (period === void 0) { period = '24h'; }
        if (count === void 0) { count = 100; }
        this.msgListenSeriesMemory.start = period;
        this.msgListenSeriesMemory.count = count;
        this.sendMessage(this.msgListenSeriesMemory);
    };
    WebsocketPluginService.prototype.getSeriesThreads = function (period, count) {
        if (period === void 0) { period = '24h'; }
        if (count === void 0) { count = 100; }
        this.msgListenSeriesThreads.start = period;
        this.msgListenSeriesThreads.count = count;
        this.sendMessage(this.msgListenSeriesThreads);
    };
    WebsocketPluginService.prototype.getSeriesDisk = function (period, count) {
        if (period === void 0) { period = '24h'; }
        if (count === void 0) { count = 100; }
        // this.msgListenSeriesDisk.item = 'env.system.diskfree';
        this.msgListenSeriesDisk.start = period;
        this.msgListenSeriesDisk.count = count;
        this.sendMessage(this.msgListenSeriesDisk);
    };
    // ------------------------------------------------------------------
    // Handle responses to series requests
    //
    WebsocketPluginService.prototype.convertTimestamps = function (data) {
        // for each value pair: Create a string value for each timpestamp and append it to the array
        for (var i = 0; i < data.series.length; i++) {
            data.series[i].push(this.shared.getTimeStamp(new Date(data.series[i][0])));
            // console.log(data.series[i]);
        }
    };
    WebsocketPluginService.prototype.convertMemorysize = function (data) {
        // for each value pair: Create a string value for each timpestamp and append it to the array
        for (var i = 0; i < data.series.length; i++) {
            data.series[i][1] = data.series[i][1] / 1000 / 1000;
        }
    };
    WebsocketPluginService.prototype.updateSeries = function (graphdata, data) {
        if (graphdata.series.length === 0) {
            // calculate the difference between oldest and newest timestamp
            var tstampDiff = data.series[data.series.length - 1][0] - data.series[0][0];
            graphdata.tsdiff = tstampDiff;
        }
        else {
            var tstampNow = new Date().getTime();
            // calculate oldest valid timestamp
            var tstampOldest = tstampNow - graphdata.tsdiff;
            // remove value pairs that are older then the oldest valid timestamp
            //      console.log('Remove old value-pairs:');
            //      console.log(graphdata);
            // leave one value that is older than oldest valid timestamp
            var tmp = tstampOldest - graphdata.series[1][0];
            while (graphdata.series[1][0] < tstampOldest) {
                graphdata.series.shift();
                tmp = tstampOldest - graphdata.series[1][0];
            }
            graphdata.series[0][0] = tstampOldest;
            //      console.log(graphdata);
        }
        // append value pairs to existing series of data
        graphdata.series.push.apply(graphdata.series, data.series);
        return;
    };
    WebsocketPluginService.prototype.handleResponseSeries = function (data) {
        //    console.warn('handleResponseSeries');
        //    console.log(data);
        if (data.sid.startsWith(this.msgListenSeriesMemory.item)) {
            this.convertMemorysize(data);
        }
        this.convertTimestamps(data);
        if (data.sid.startsWith(this.msgListenSeriesLoad.item)) {
            // console.log('message received (load-series):');
            this.updateSeries(this.systemload, data);
            this.systemloadSource.next();
        }
        else if (data.sid.startsWith(this.msgListenSeriesMemory.item)) {
            // console.log('message received (memory-series):');
            this.updateSeries(this.memory, data);
            this.memorySource.next();
        }
        else if (data.sid.startsWith(this.msgListenSeriesThreads.item)) {
            // console.log('message received (threads-series):');
            this.updateSeries(this.threads, data);
            this.threadsSource.next();
        }
        else if (data.sid.startsWith(this.msgListenSeriesDisk.item)) {
            // console.log('message received (disk-series):');
            this.updateSeries(this.disk, data);
            this.diskSource.next();
        }
        else {
            console.warn('message received (UNKNOWN series):');
            console.log(data);
        }
    };
    WebsocketPluginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        // @Injectable()
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_olddata_service__WEBPACK_IMPORTED_MODULE_5__["OlddataService"],
            _websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"],
            _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], WebsocketPluginService);
    return WebsocketPluginService;
}());



/***/ }),

/***/ "./src/app/common/services/websocket.service.ts":
/*!******************************************************!*\
  !*** ./src/app/common/services/websocket.service.ts ***!
  \******************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



// @Injectable({
//   providedIn: 'root'
// })
var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
    }
    WebsocketService.prototype.connect = function (url) {
        if (!this.subject) {
            this.subject = this.create(url);
        }
        return this.subject;
    };
    WebsocketService.prototype.create = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            _this.ws.onmessage = obs.next.bind(obs);
            _this.ws.onerror = obs.error.bind(obs);
            _this.ws.onclose = obs.complete.bind(obs);
            return _this.ws.close.bind(_this.ws);
        });
        var observer = {
            next: function (data) {
                if (_this.ws.readyState === WebSocket.OPEN) {
                    _this.ws.send(JSON.stringify(data));
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
    };
    WebsocketService.prototype.sendMessage = function (message) {
        this.subject.next(message);
    };
    WebsocketService.prototype.close = function () {
        if (this.ws) {
            this.ws.close();
            this.subject = null;
            console.warn('Websocket connection closed.');
        }
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:host ::ng-deep .ui-menubar-root-list {\r\n  padding-left:145px;\r\n}\r\n\r\nimg#logo {\r\n  position:absolute;\r\n  left:0;\r\n  padding-left:20px;\r\n}\r\n\r\n/* The navigation bar */\r\n\r\n.fixednavbar {\r\n  /* overflow: hidden; */\r\n  position: fixed; /* Set the navbar to fixed position */\r\n  top: 0; /* Position the navbar at the top of the page */\r\n  width: 100%; /* Full width */\r\n  z-index: 2;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04saUJBQWlCO0FBQ25COztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZSxFQUFFLHFDQUFxQztFQUN0RCxNQUFNLEVBQUUsK0NBQStDO0VBQ3ZELFdBQVcsRUFBRSxlQUFlO0VBQzVCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLW1lbnViYXItcm9vdC1saXN0IHtcclxuICBwYWRkaW5nLWxlZnQ6MTQ1cHg7XHJcbn1cclxuXHJcbmltZyNsb2dvIHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjA7XHJcbiAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcbi8qIFRoZSBuYXZpZ2F0aW9uIGJhciAqL1xyXG4uZml4ZWRuYXZiYXIge1xyXG4gIC8qIG92ZXJmbG93OiBoaWRkZW47ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTZXQgdGhlIG5hdmJhciB0byBmaXhlZCBwb3NpdGlvbiAqL1xyXG4gIHRvcDogMDsgLyogUG9zaXRpb24gdGhlIG5hdmJhciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlICovXHJcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <div class=\"navbar-header\">\r\n    <a routerLink=\"/system\" class=\"navbar-brand\"><img src=\"assets/img/logo_long.png\" alt=\"SmartHomeNG\"></a>\r\n  </div>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/system\">{{ 'MENU.SYSTEM'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/services\">{{ 'MENU.SERVICES'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/items\">{{ 'MENU.ITEMS'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/logics\">{{ 'MENU.LOGICS'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/schedulers\">{{ 'MENU.SCHEDULERS'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/plugins\">{{ 'MENU.PLUGINS'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/scenes\">{{ 'MENU.SCENES'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/threads\">{{ 'MENU.THREADS'|translate }}</a></li>\r\n      <li routerLinkActive=\"active\"><a class=\"nav-link\" routerLink=\"/logs\">{{ 'MENU.LOGS'|translate }}</a></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n-->\r\n\r\n<!--\r\n<p-menubar [model]=\"items\">\r\n-->\r\n<div id=\"example\" style=\"position: relative; z-index: 10000;\">\r\n<p-menubar class=\"fixednavbar\" [model]=\"getMenuItems()\">\r\n  <img id=\"logo\" routerLink=\"/system\" src=\"assets/img/logo_long.png\"/>\r\n  <button pButton label=\"{{'BUTTON.LOGOUT'|translate}}\" (click)=\"logout()\" [disabled]=\"!(authService.isLoggedIn() && authService.loginRequired())\" icon=\"fa fa-sign-out-alt\" style=\"margin-left:.25em\" class=\"ui-button-success\"></button>\r\n</p-menubar>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/auth.service */ "./src/app/common/services/auth.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(appComponent, dataService, translate, router, authService) {
        this.appComponent = appComponent;
        this.dataService = dataService;
        this.translate = translate;
        this.router = router;
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log('HeaderComponent.ngOnInit:');
        var credentials = { 'username': '', 'password': '' };
        // console.log('signIn', {credentials});
        this.authService.login(credentials)
            .subscribe(function (result) {
            // console.log('Anonymous login:', {result});
            _this.buildMenu();
        });
    };
    HeaderComponent.prototype.buildMenu = function () {
        this.items = [
            {
                label: this.translate.instant('MENU.SYSTEM'),
                routerLink: ['/system'],
                items: [
                    {
                        label: this.translate.instant('MENU.SYSTEM_PROPERTIES'),
                        routerLink: ['/system/systemproperties'],
                    },
                    {
                        label: this.translate.instant('MENU.CONFIGURATION'),
                        routerLink: ['/system/config'],
                    }
                ]
            },
            {
                label: this.translate.instant('MENU.SERVICES'),
                routerLink: ['/services'],
            },
            {
                label: this.translate.instant('MENU.ITEMS'),
                routerLink: ['/items'],
                items: [
                    {
                        label: this.translate.instant('MENU.ITEM_TREE'),
                        routerLink: ['/item_tree'],
                    },
                    {
                        label: this.translate.instant('MENU.ITEM_CONFIGURATION'),
                        routerLink: ['/items/config'],
                    },
                    {
                        label: this.translate.instant('MENU.ITEM_STRUCTS'),
                        routerLink: ['/items/structs'],
                    },
                    {
                        label: this.translate.instant('MENU.ITEM_STRUCT_CONFIGURATION'),
                        routerLink: ['/items/struct_config'],
                    },
                ]
            },
            {
                label: this.translate.instant('MENU.LOGICS'),
                routerLink: ['/logics'],
            },
            {
                label: this.translate.instant('MENU.SCHEDULERS'),
                routerLink: ['/schedulers'],
            },
            {
                label: this.translate.instant('MENU.PLUGINS'),
                routerLink: ['/plugins'],
                items: [
                    {
                        label: this.translate.instant('MENU.PLUGINS_LIST'),
                        routerLink: ['/plugins_list'],
                    },
                    {
                        label: this.translate.instant('MENU.CONFIGURATION'),
                        routerLink: ['/plugins/config'],
                    }
                ]
            },
            {
                label: this.translate.instant('MENU.SCENES'),
                routerLink: ['/scenes'],
                items: [
                    {
                        label: this.translate.instant('MENU.SCENE_LIST'),
                        routerLink: ['/scenes/list'],
                    },
                    {
                        label: this.translate.instant('MENU.SCENE_CONFIGURATION'),
                        routerLink: ['/scenes/config'],
                    }
                ]
            },
            {
                label: this.translate.instant('MENU.THREADS'),
                routerLink: ['/threads']
            },
            {
                label: this.translate.instant('MENU.LOGS'),
                routerLink: ['/logs'],
                items: [
                    {
                        label: this.translate.instant('MENU.LOGS_DISPLAY'),
                        routerLink: ['/logs/display'],
                    },
                    {
                        label: this.translate.instant('MENU.LOGGER_LIST'),
                        routerLink: ['/logs/logger-list'],
                    },
                    {
                        label: this.translate.instant('MENU.CONFIGURATION'),
                        routerLink: ['/logs/logging-configuration'],
                    }
                ]
            },
            {
                label: this.translate.instant('MENU.LOGIN'),
                routerLink: ['/login'],
                disabled: false,
            },
        ];
    };
    HeaderComponent.prototype.getMenuItems = function () {
        this.translate.use(sessionStorage.getItem('default_language'));
        var isLoggedIn = this.authService.isLoggedIn();
        if (this.items) {
            this.items[0].visible = isLoggedIn;
            this.items[1].visible = isLoggedIn;
            this.items[2].visible = isLoggedIn;
            this.items[3].visible = isLoggedIn;
            this.items[4].visible = isLoggedIn;
            this.items[5].visible = isLoggedIn;
            this.items[6].visible = isLoggedIn;
            this.items[7].visible = isLoggedIn;
            this.items[8].visible = isLoggedIn;
            this.items[9].visible = !isLoggedIn;
            this.items[0].label = this.translate.instant('MENU.SYSTEM');
            this.items[0].items[0].label = this.translate.instant('MENU.SYSTEM_PROPERTIES');
            this.items[0].items[1].label = this.translate.instant('MENU.CONFIGURATION');
            this.items[1].label = this.translate.instant('MENU.SERVICES');
            this.items[2].label = this.translate.instant('MENU.ITEMS');
            this.items[2].items[0].label = this.translate.instant('MENU.ITEM_TREE');
            this.items[2].items[1].label = this.translate.instant('MENU.ITEM_CONFIGURATION');
            this.items[2].items[2].label = this.translate.instant('MENU.ITEM_STRUCTS');
            this.items[2].items[3].label = this.translate.instant('MENU.ITEM_STRUCT_CONFIGURATION');
            this.items[3].label = this.translate.instant('MENU.LOGICS');
            this.items[4].label = this.translate.instant('MENU.SCHEDULERS');
            this.items[5].label = this.translate.instant('MENU.PLUGINS');
            this.items[5].items[0].label = this.translate.instant('MENU.PLUGINS_LIST');
            this.items[5].items[1].label = this.translate.instant('MENU.CONFIGURATION');
            this.items[6].label = this.translate.instant('MENU.SCENES');
            this.items[6].items[0].label = this.translate.instant('MENU.SCENE_LIST');
            this.items[6].items[1].label = this.translate.instant('MENU.SCENE_CONFIGURATION');
            this.items[7].label = this.translate.instant('MENU.THREADS');
            this.items[8].label = this.translate.instant('MENU.LOGS');
            this.items[8].items[0].label = this.translate.instant('MENU.LOGS_DISPLAY');
            this.items[8].items[1].label = this.translate.instant('MENU.LOGGER_LIST');
            this.items[8].items[2].label = this.translate.instant('MENU.CONFIGURATION');
            this.items[9].label = this.translate.instant('MENU.LOGIN');
        }
        return this.items;
    };
    HeaderComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            providers: [],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_3__["ServerApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/items/item-configuration/item-configuration.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/items/item-configuration/item-configuration.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n\r\n.CodeMirror {\r\n  width:48vw;\r\n  height:70vh;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbS1jb25maWd1cmF0aW9uL2l0ZW0tY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCOzs7QUFHQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9pdGVtLWNvbmZpZ3VyYXRpb24vaXRlbS1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnRhYi1zaG5nID4gYXtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOnJnYigxNjAsIDE2MCwgMTYwKTtcclxufVxyXG5cclxuXHJcbi5Db2RlTWlycm9yIHtcclxuICB3aWR0aDo0OHZ3O1xyXG4gIGhlaWdodDo3MHZoO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/items/item-configuration/item-configuration.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/items/item-configuration/item-configuration.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 60px;\">\r\n\r\n  <div style=\"width: 20%; float: left; border: 1px\">\r\n    <div class=\"container-fluid\" style=\"margin-top: 60px\">\r\n      <button pButton label=\"{{ 'BUTTON.NEW_DEFINITION_FILE'|translate }}\" type=\"button\" [disabled]=\"!((myEditFilename === '') || (myTextarea === myTextareaOrig))\" icon=\"far fa-file\" style=\"margin-right: 10px;\" (click)=\"newConfig()\" class=\"float-sm-left ui-button-success\"></button>\r\n      <button pButton type=\"button\" [disabled]=\"myEditFilename === ''\" icon=\"far fa-trash-alt\" style=\"margin-right: 0px;\" (click)=\"deleteConfig()\" class=\"float-sm-left ui-button-danger\"></button>\r\n      <br>\r\n      <br>\r\n\r\n      <p-listbox [options]=\"itemFiles\" [(ngModel)]=\"selectedItemfile\" [disabled]=\"!((myEditFilename === '') || (myTextarea === myTextareaOrig))\" (onChange)=\"itemFileSelected()\" optionLabel=\"label\" [style]=\"{'min-width':'270px', 'max-width':'270px', 'width':'100%'}\" [listStyle]=\"{'height':'67vh', 'min-height':'200px'}\">\r\n      </p-listbox>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div style=\"width: 75%; float: right;\">\r\n    <div class=\"container-fluid\" style=\"margin-top: 0px; margin-left: 0px; margin-right: 0px; width: 75%;\">\r\n\r\n    <table>\r\n      <tbody>\r\n      <tr>\r\n        <td style=\"min-width: 50%\">\r\n          <div style=\"font-weight: normal; padding-top: 0px; padding-left: 10px; padding-right: 5px;\">\r\n            <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px\">\r\n              <ng-container *ngIf=\"myEditFilename !== ''\">\r\n                {{ 'ITEM_CONFIG.CONFIG_FILE'|translate }}: <strong>../items/{{ myEditFilename }}.yaml</strong>\r\n              </ng-container>\r\n              <button pButton label=\"{{ 'BUTTON.SAVE'|translate }}\" type=\"button\" [disabled]=\"(myEditFilename === '') || (myTextarea === myTextareaOrig)\" icon=\"fa fa-check\" style=\"margin-right: 0px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n              <button pButton label=\"{{ 'BUTTON.DISCARD'|translate }}\" type=\"button\" [disabled]=\"(myEditFilename === '') || (myTextarea === myTextareaOrig)\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"this.myTextarea = this.myTextareaOrig;\" class=\"float-sm-right ui-button-secondary\"></button>\r\n              <button pButton label=\"{{ 'BUTTON.HELP'|translate }}\" type=\"button\" [disabled]=\"false\" icon=\"fa fa-info\" style=\"margin-right: 10px;\" (click)=\"this.editorHelp_display = true;\" class=\"float-sm-right ui-button-success\"></button>\r\n            </div>\r\n\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <div style=\"height: 100px; margin-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n            <ngx-codemirror #codeeditor\r\n                            [options]=\"cmOptions\"\r\n                            [(ngModel)]=\"myTextarea\"\r\n                            [autoFocus]=\"true\"\r\n            ></ngx-codemirror>\r\n            <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n          </div>\r\n        </td>\r\n\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!--\r\n  -- Dialog for setting the name of the new item configuration file\r\n  -->\r\n\r\n<p-dialog\r\n  header=\"\"\r\n  [(visible)]=\"newconfig_display\"\r\n  [modal]=\"true\"\r\n  blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [maximizable]=\"false\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'minWidth':'600px', 'minHeight':'200px'}\"\r\n>\r\n\r\n  <p-header>\r\n    {{'ITEM_CONFIG.NAME_CONFIGURATION'|translate}}\r\n  </p-header>\r\n\r\n  <br>\r\n  {{ 'ITEM_CONFIG.UNIQUE_NAME'|translate }}&nbsp;\r\n  <input [(ngModel)]=\"newFilename\" type=\"text\" (input)=\"checkInput();\" pInputText placeholder=\"\" [ngStyle]=\"{'width': 20}\" autofocus/>\r\n\r\n  <br>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"pi pi-check\" (click)=\"this.addFile()\" [(disabled)]=\"!this.add_enabled\" label=\"{{'BUTTON.ADD'|translate}}\" class=\"ui-button-success\" autofocus></button>\r\n    <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"newconfig_display=false\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n<!--\r\n  -- Confirm dialog vor configuration deletion\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"error_display\" [closable]=\"false\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'ITEM_CONFIG.CONFIG_ERROR'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <pre>\r\n{{'ITEM_CONFIG.CONFIG_ERROR_TEXT'|translate}}\r\n\r\n    {{ myTextOutput }}\r\n  </pre>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"error_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<!--\r\n  -- Confirm dialog vor configuration deletion\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"confirmdelete_display\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'ITEM_CONFIG.DELETE_CONFIG'|translate}}\r\n  </p-header>\r\n  <br>\r\n  {{'ITEM_CONFIG.DELETE_CONFIG_FILE'|translate:delete_param}}\r\n  <br>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"fa fa-trash-alt\" (click)=\"DeleteConfigConfirm()\" label=\"{{'BUTTON.DELETE'|translate}}\" class=\"ui-button-danger\"></button>\r\n    <button pButton type=\"button\" icon=\"fa fa-times\" (click)=\"confirmdelete_display = false\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<!--\r\n    -- Display help dialog\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"editorHelp_display\" [closable]=\"true\" [modal]=\"true\" dynamic=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'HELP.EDITOR-KEYS'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <table>\r\n    <thead>\r\n    <th><u>{{'HELP.KEY'|translate}}</u></th>\r\n    <th style=\"width: 20px;\"></th>\r\n    <th><u>{{'HELP.DESCRIPTION'|translate}}</u></th>\r\n    </thead>\r\n    <tbody>\r\n    <tr><td>Tab</td>          <td></td> <td>{{'HELP.TAB'|translate}}</td></tr>\r\n    <tr><td>Shift-Tab</td>    <td></td> <td>{{'HELP.SHIFT-TAB'|translate}}</td></tr>\r\n    <tr><td>F11</td>          <td></td> <td>{{'HELP.F11'|translate}}</td></tr>\r\n    <tr><td>Esc</td>          <td></td> <td>{{'HELP.ESC'|translate}}</td></tr>\r\n    <tr><td>Ctrl-Q</td>       <td></td> <td>{{'HELP.CTRL-Q'|translate}}</td></tr>\r\n    <tr><td>Shift-Ctrl-Q</td> <td></td> <td>{{'HELP.SHIFT-CTRL-Q'|translate}}</td></tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"editorHelp_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/items/item-configuration/item-configuration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/items/item-configuration/item-configuration.component.ts ***!
  \**************************************************************************/
/*! exports provided: ItemConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemConfigurationComponent", function() { return ItemConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_services_files_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/files-api.service */ "./src/app/common/services/files-api.service.ts");
/* harmony import */ var _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/services-api.service */ "./src/app/common/services/services-api.service.ts");





var ItemConfigurationComponent = /** @class */ (function () {
    function ItemConfigurationComponent(translate, fileService, dataService) {
        this.translate = translate;
        this.fileService = fileService;
        this.dataService = dataService;
        // -----------------------------------------------------------------
        //  Vars for the codemirror components
        //
        this.rulers = [];
        this.myEditFilename = '';
        this.myTextarea = '';
        this.myTextareaOrig = '';
        this.cmOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess',
                'F11': function (cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                    // cm.getScrollerElement().style.maxHeight = 'none';
                },
                'Esc': function (cm, fullScreen) {
                    if (cm.getOption('fullScreen')) {
                        cm.setOption('fullScreen', false);
                    }
                },
                'Ctrl-Q': function (cm) {
                    cm.foldCode(cm.getCursor());
                },
                'Shift-Ctrl-Q': function (cm) {
                    for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
                        cm.foldCode({ line: l, ch: 0 }, null, 'unfold');
                    }
                }
            },
            fullScreen: false,
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        };
        this.editorHelp_display = false;
        this.error_display = false;
        this.myTextOutput = '';
        this.newconfig_display = false;
        this.newFilename = '';
        this.add_enabled = false;
        this.confirmdelete_display = false;
    }
    ItemConfigurationComponent.prototype.ngOnInit = function () {
        // console.log('LoggingConfigurationComponent.ngOnInit');
        var _this = this;
        for (var i = 1; i <= 100; i++) {
            this.rulers.push({ color: '#eee', column: i * 4, lineStyle: 'dashed' });
        }
        this.getItemFile('');
        this.itemFiles = [];
        this.fileService.getfileList('items')
            .subscribe(function (response) {
            _this.filelist = response;
            for (var i = 0; i < _this.filelist.length; i++) {
                //
                // I get it. The sample code here and in the docs is wrong, it should read like this:
                //
                // fails
                //   this.cities.push({name:'New York', code: 'NY'});
                //
                // correct
                //   this.cities = [...this.cities, {name:'New York', code: 'NY'}];
                //
                _this.itemFiles = _this.itemFiles.concat([{ 'label': _this.filelist[i], 'value': _this.filelist[i] }]);
            }
        });
        // this.getItemFile('q21_09Bad');
    };
    ItemConfigurationComponent.prototype.ngAfterViewChecked = function () {
        var editor1 = this.codeEditor.codeMirror;
        if (editor1.getOption('fullScreen')) {
            editor1.setSize('100vw', '100vh');
        }
        else {
            editor1.setSize('70vw', '78vh');
        }
        editor1.refresh();
    };
    ItemConfigurationComponent.prototype.newConfig = function () {
        this.newFilename = '';
        this.newconfig_display = true;
    };
    ItemConfigurationComponent.prototype.deleteConfig = function () {
        this.delete_param = { 'config': this.myEditFilename };
        this.confirmdelete_display = true;
    };
    ItemConfigurationComponent.prototype.DeleteConfigConfirm = function () {
        // console.log('ItemConfigurationComponent.DeleteConfigConfirm:');
        var _this = this;
        // close confirm dialog
        this.confirmdelete_display = false;
        // delete on backend server
        this.fileService.deleteFile('items', this.myEditFilename)
            .subscribe(function (response) {
            if (response) {
                // close configuration dialog
                _this.confirmdelete_display = false;
                console.log('ItemConfigurationComponent.DeleteConfigConfirm(): call ngOnInit()');
                _this.ngOnInit();
                //            this.restart_core_button = true;
            }
        });
        // alert('code for removal of plugin "' + this.dialog_configname + '" configurations is not yet implemented');
        return true;
    };
    ItemConfigurationComponent.prototype.checkInput = function () {
        this.add_enabled = false;
        if (this.newFilename.length > 0) {
            this.add_enabled = true;
            for (var filenno in this.filelist) {
                var fn = this.filelist[filenno].slice(0, -5);
                if (this.newFilename === fn) {
                    this.add_enabled = false;
                }
            }
        }
    };
    ItemConfigurationComponent.prototype.addFile = function () {
        var _this = this;
        this.newconfig_display = false;
        this.myTextarea = '# ' + this.newFilename + '.yaml\n';
        this.myTextareaOrig = this.myTextarea;
        this.myEditFilename = this.newFilename;
        this.cmOptions.readOnly = false;
        this.fileService.saveFile('items', this.myEditFilename, this.myTextarea)
            .subscribe(function (response2) {
            _this.myTextareaOrig = _this.myTextarea;
            _this.itemFiles = [];
            _this.fileService.getfileList('items')
                .subscribe(function (response) {
                _this.filelist = response;
                for (var i = 0; i < _this.filelist.length; i++) {
                    _this.itemFiles = _this.itemFiles.concat([{ 'label': _this.filelist[i], 'value': _this.filelist[i] }]);
                }
            });
        });
    };
    ItemConfigurationComponent.prototype.itemFileSelected = function () {
        var filename = this.selectedItemfile.value;
        if (filename.toLowerCase().endsWith('.yaml')) {
            filename = filename.slice(0, -5);
            // console.log('itemFileSelected()' , {filename});
            this.getItemFile(filename);
        }
        else {
            this.myEditFilename = '';
            this.myTextarea = '';
            this.cmOptions.readOnly = true;
            this.myTextarea = this.translate.instant('ITEM_CONFIG.FILETYPE_UNSUPPORTED');
        }
    };
    ItemConfigurationComponent.prototype.getItemFile = function (filename) {
        var _this = this;
        this.myEditFilename = '';
        this.myTextarea = '';
        this.cmOptions.readOnly = true;
        if (filename === '') {
            return;
        }
        this.fileService.readFile('items', filename)
            .subscribe(function (response) {
            _this.myTextarea = response;
            _this.myTextareaOrig = response;
            if (_this.myTextarea === '') {
                _this.myTextarea = _this.translate.instant('ITEM_CONFIG.FILE_NOT_FOUND');
            }
            else {
                _this.myEditFilename = filename;
                _this.cmOptions.readOnly = false;
            }
        });
    };
    ItemConfigurationComponent.prototype.saveConfig = function () {
        // console.log('LoggingConfigurationComponent.saveConfig');
        var _this = this;
        this.dataService.CheckYamlText(this.myTextarea)
            .subscribe(function (response) {
            _this.myTextOutput = response;
            if (_this.myTextOutput.startsWith('ERROR:')) {
                _this.error_display = true;
            }
            else {
                _this.fileService.saveFile('items', _this.myEditFilename, _this.myTextarea)
                    .subscribe(function (response2) {
                    _this.myTextareaOrig = _this.myTextarea;
                });
            }
            if (_this.codeEditor !== undefined) {
                var editor = _this.codeEditor.codeMirror;
                editor.refresh();
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ItemConfigurationComponent.prototype, "codeEditor", void 0);
    ItemConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-configuration',
            template: __webpack_require__(/*! ./item-configuration.component.html */ "./src/app/items/item-configuration/item-configuration.component.html"),
            styles: [__webpack_require__(/*! ./item-configuration.component.css */ "./src/app/items/item-configuration/item-configuration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _common_services_files_api_service__WEBPACK_IMPORTED_MODULE_3__["FilesApiService"],
            _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ServicesApiService"]])
    ], ItemConfigurationComponent);
    return ItemConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/items/item-tree/item-tree.component.css":
/*!*********************************************************!*\
  !*** ./src/app/items/item-tree/item-tree.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n\r\n/*\r\n    Styling for PrimeNG <p-tee>\r\n*/\r\n\r\n\r\n:host ::ng-deep .ui-tree {\r\n  border: none;\r\n  width: auto;\r\n}\r\n\r\n\r\n:host ::ng-deep .ui-treenode-content-selected {\r\n  background-color: #709cc2;\r\n}\r\n\r\n\r\n:host ::ng-deep .ui-tree-container {\r\n  background: #ffffff;\r\n  overflow: visible;\r\n}\r\n\r\n\r\n:host ::ng-deep .ui-state-highlight {\r\n  border-color: #709cc2;\r\n  background-color: #709cc2;\r\n  color: #ffffff;\r\n}\r\n\r\n\r\n/*\r\n:host ::ng-deep .ui-treenode-content {\r\n  color: blue;\r\n}\r\n*/\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbS10cmVlL2l0ZW0tdHJlZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7OztBQUdBOztDQUVDOzs7QUFFRDtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOzs7QUFHQTs7OztDQUlDIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbS10cmVlL2l0ZW0tdHJlZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4gICAgU3R5bGluZyBmb3IgUHJpbWVORyA8cC10ZWU+XHJcbiovXHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnVpLXRyZWUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10cmVlbm9kZS1jb250ZW50LXNlbGVjdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA5Y2MyO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC51aS10cmVlLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxufVxyXG5cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudWktc3RhdGUtaGlnaGxpZ2h0IHtcclxuICBib3JkZXItY29sb3I6ICM3MDljYzI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwOWNjMjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuXHJcbi8qXHJcbjpob3N0IDo6bmctZGVlcCAudWktdHJlZW5vZGUtY29udGVudCB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuKi9cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/items/item-tree/item-tree.component.html":
/*!**********************************************************!*\
  !*** ./src/app/items/item-tree/item-tree.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'ITEMS.ITEMS'|translate }} ({{ 'ITEMS.TOTAL'|translate }}: {{itemcount}})\">\r\n\r\n\r\n      <!--\r\n            <bs-alert *ngIf=\"alertText !== ''\" type=\"warning\"  [dismissible]=\"true\" >\r\n              <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n            </bs-alert>\r\n      -->\r\n\r\n      <!------------------------------------------>\r\n      <!--   Modal dialog with details   -->\r\n      <!------------------------------------------>\r\n\r\n      <div bsModal #myalert=\"bs-modal\" class=\"modal fade\" tabindex=\"1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n        <div class=\"modal-dialog\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">\r\n                <a [translate]=\"'Ungültiger Wert'\"></a>\r\n              </h5>\r\n              <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"closeAlert(myalert, itemdetails.value)\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n\r\n            <div class=\"modal-body\">\r\n              <ng-container *ngIf=\"item_val\">\r\n                <p>{{alertText}}</p>\r\n                <p></p>\r\n                <a [translate]=\"'Eingegebener Wert'\"></a>: '{{item_val.value}}'\r\n              </ng-container>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" tabindex=\"1\" autofocus=\"autofocus\" class=\"btn btn-primary btn-sm btn-shng\" (click)=\"closeAlert(myalert, itemdetails.value)\">{{'CLOSE'|translate}}</button>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n        <div class=\"container-fluid navBorder\" style=\"overflow: hidden; border-top: 0;\">\r\n          <div>\r\n            <div class=\"row\">\r\n              <div class=\"col shng_headline\">\r\n\r\n                  <div class=\"form-group\">\r\n\r\n                    <input type=\"input\" pTooltip=\"{{'ITEMS.TOOLTIP SEARCH'|translate:searchStart_param}}\" tooltipPosition=\"top\" class=\"form-control\" id=\"filter\" #filter (keyup)=\"filterTree($event, filter.value)\" placeholder=\"{{ 'ITEMS.SEARCH ITEMPATH'|translate }}...\" value=\"{{ '' }}\"/>\r\n\r\n                  </div>\r\n              </div>\r\n              <div class=\"col shng_headline\">\r\n                <button type=\"button\" class=\"btn btn-shng btn-sm\" style=\"margin-right: 5px\" id=\"btn-clear-search\" [disabled]=\"!treeIsFiltered\" (click)=\"clearFilter($event, filter)\"><fa-icon [icon]=\"faCircleNotch\"></fa-icon> {{ 'ITEMS.RESET'|translate }}</button>\r\n                <button type=\"button\" class=\"btn btn-shng btn-sm\" style=\"margin-right: 5px; background-color: var(--shng-secondary-button)\" id=\"btn-expand-all\" (click)=\"expandAll()\"><fa-icon [icon]=\"faFolderOpen\"></fa-icon>&nbsp;{{ 'ITEMS.EXPAND ALL'|translate }}</button>\r\n                <button type=\"button\" class=\"btn btn-shng btn-sm\" style=\"margin-right: 5px; background-color: var(--shng-secondary-button)\" id=\"btn-collapse-all\" (click)=\"collapseAll()\"><fa-icon [icon]=\"faFolder\"></fa-icon> {{ 'ITEMS.REDUCE ALL'|translate }}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col\" style=\"max-width: 50%;\">\r\n              <div class=\"card\">\r\n                <div class=\"card-body p-1\">\r\n                  <div id=\"tree\" style=\"overflow-y: scroll;\">\r\n                    <div class=\"col-sm-12\">\r\n\r\n                        <p-tree [value]=\"filteredTree\"\r\n                                (onNodeSelect)=\"nodeSelect($event)\"\r\n                                selectionMode=\"single\"\r\n                                [(selection)]=\"selectedFile\"\r\n                                emptyMessage=\"{{'ITEMS.NO ITEMS'|translate}}\">\r\n                          <ng-template let-node  pTemplate=\"default\">\r\n                            <ng-container *ngIf=\"node.tags[0] > 0 && !this.treeIsFiltered\">\r\n                              {{node.label}} &nbsp;\r\n                              <span style=\"background:#dadada;\">\r\n                                &nbsp; {{node.tags[0]}} &nbsp;\r\n                              </span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"node.tags[0] === 0 || this.treeIsFiltered\">\r\n                              <span style=\"float: left;\">{{node.label}}</span>\r\n                            </ng-container>\r\n                          </ng-template>\r\n\r\n\r\n                        </p-tree>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\" style=\"max-width: 50%;\">\r\n              <div class=\"card\" >\r\n                <div class=\"card-header p-1 shng_heading\">\r\n                  <button type=\"button\" class=\"float-sm-right btn btn-shng btn-sm\" style=\"margin-left: 5px; background-color: var(--shng-secondary-button)\" id=\"btn-reload\" (click)=\"getDetails(itemdetails.path);\"><fa-icon [icon]=\"faSync\"></fa-icon> {{ 'ITEMS.RELOAD'|translate }}</button>\r\n                  <ng-container *ngIf=\"monitoredItems.indexOf(itemdetails.path) === -1\">\r\n                    <button type=\"button\" class=\"float-sm-right btn btn-shng btn-sm\" style=\"margin-left: 5px\" id=\"btn-monitor\" [disabled]=\"(itemdetails.path === undefined)\" (click)=\"monitorItem(itemdetails.path, true);\"><fa-icon [icon]=\"faThumbtack\"></fa-icon> {{ 'ITEMS.MONITOR'|translate }}</button>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"monitoredItems.indexOf(itemdetails.path) !== -1\">\r\n                    <button type=\"button\" class=\"float-sm-right btn-shng-outline-secondary btn-sm\" style=\"margin-left: 5px;\" id=\"btn-monitor\" [disabled]=\"(itemdetails.path === undefined)\" (click)=\"monitorItem(itemdetails.path, false);\"><i style=\"color: #c40808;\" class=\"far fa-trash-alt\"></i> {{ 'ITEMS.MONITOR'|translate }}</button>\r\n                  </ng-container>\r\n                  <strong>{{ 'ITEMS.ITEM DETAILS'|translate }}</strong>\r\n                </div>\r\n                <div class=\"card-body p-1\" style=\"position: relative;\">\r\n                  <div class=\"card-text\" style=\"\">\r\n                    <div id=\"cardOverlay\" class=\"cardOverlay\">\r\n                      <style=\"position: relative; top: 45%; left:45%;\">\r\n                        <span id=\"reload-element\" class=\"fas fa-sync fa-4x\"></span>\r\n                    </div>\r\n                    <div id=\"tree_detail\" class=\"data-container refresh-data pre-scrollable\" style=\"overflow-x: auto;\">\r\n                      <span *ngIf=\"itemdetailsloaded === false\">\r\n                        {{ 'ITEMS.CHOOSE ITEM IN TREE'|translate }}<br>\r\n                      </span>\r\n                      <table *ngIf=\"itemdetailsloaded\" class=\"table table-striped table-hover\">\r\n                        <thead><tr class=\"shng_heading\"><th class=\"py-1\" style=\"min-width: 190px;\">{{ 'ITEMS.ATTRIBUTE'|translate }}</th><th class=\"py-1\">{{ 'ITEMS.VALUE'|translate }}</th></tr></thead>\r\n                        <tbody>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.PATH'|translate}}</td><td class=\"py-1\">{{itemdetails.path}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.NAME'|translate}}</td><td class=\"py-1\">{{itemdetails.name}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.TYPE'|translate}}</td><td class=\"py-1\">{{itemdetails.type}}</td></tr>\r\n                          <ng-container *ngIf=\"itemdetails.struct !== undefined\">\r\n                            <tr><td class=\"py-1\">{{'ITEMS.STRUCT'|translate}}</td><td class=\"py-1\">{{itemdetails.struct}}</td></tr>\r\n                          </ng-container>\r\n<!--\r\n                          <tr><td class=\"py-1\">{{'value'|translate}}</td><td class=\"py-1\">{{itemdetails.input}}</td></tr>\r\n-->\r\n\r\n                          <tr [ngSwitch]=\"itemdetails.type\">\r\n                            <td class=\"py-1\">{{'ITEMS.VALUE'|translate}}</td>\r\n                            <td class=\"py-1\">\r\n                              <ng-container *ngSwitchCase=\"'bool'\">\r\n                                <select class=\"form-control\" #item_value (blur)=\"updateValue(itemdetails.path, item_value, itemdetails.type, '#myalert')\" id=\"item_value\">\r\n                                  <ng-container *ngIf=\"itemdetails.value === true\">\r\n                                    <option selected>true</option><option>false</option>\r\n                                  </ng-container>\r\n                                  <ng-container *ngIf=\"itemdetails.value === false\">\r\n                                    <option>true</option><option selected>false</option>\r\n                                  </ng-container>\r\n                                </select>\r\n                              </ng-container>\r\n                              <ng-container *ngSwitchCase=\"itemdetails.type === 'str' || itemdetails.type === 'list' || itemdetails.type === 'dict' ? itemdetails.type : '' \">\r\n                                <textarea type=\"text\" class=\"form-control\" #item_value (blur)=\"updateValue(itemdetails.path, item_value, itemdetails.type)\" id=\"item_value\">{{itemdetails.value}}</textarea>\r\n                              </ng-container>\r\n                              <ng-container *ngSwitchCase=\"itemdetails.type === 'num' || itemdetails.type === 'scene' ? itemdetails.type : '' \">\r\n                                <input type=\"text\" class=\"form-control\" #item_value (blur)=\"updateValue(itemdetails.path, item_value, itemdetails.type, itemdetails.value, myalert)\" id=\"item_value\" value=\"{{itemdetails.value}}\"/>\r\n                              </ng-container>\r\n<!--\r\n                              <ng-container *ngSwitchCase=\"itemdetails.type === 'num' || itemdetails.type === 'scene' ? itemdetails.type : '' \">\r\n                                <input type=\"text\" class=\"form-control\" #item_value (blur)=\"myalert.show()\" id=\"item_value\" value=\"{{itemdetails.value}}\"/>\r\n                              </ng-container>\r\n-->\r\n                              <ng-container *ngSwitchDefault>\r\n                                {{itemdetails.value}}\r\n                              </ng-container>\r\n                            </td>\r\n                          </tr>\r\n\r\n                          <tr></tr>\r\n                          <tr class=\"shng_heading\"><th class=\"py-1\" colspan=\"2\" style=\"height: 45px; vertical-align: bottom\">{{ 'ITEMS.UPDATE INFORMATION'|translate }}:</th></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.LAST UPDATE'|translate}}</td><td class=\"py-1\">{{shared.displayDateTime(itemdetails.last_update)}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.LAST CHANGE'|translate}}</td><td class=\"py-1\">{{shared.displayDateTime(itemdetails.last_change)}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.UPDATE AGE'|translate}}</td><td class=\"py-1\">{{this.update_age}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.CHANGE AGE'|translate}}</td><td class=\"py-1\">{{this.change_age}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.UPDATE BY'|translate}}</td><td class=\"py-1\">{{itemdetails.updated_by}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.CHANGE BY'|translate}}</td><td class=\"py-1\">{{itemdetails.changed_by}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.PREVIOUS VALUE'|translate}}</td><td class=\"py-1\">{{itemdetails.previous_value}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.PREVIOUS UPDATE'|translate}}</td><td class=\"py-1\">{{shared.displayDateTime(itemdetails.previous_update)}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.PREVIOUS CHANGE'|translate}}</td><td class=\"py-1\">{{shared.displayDateTime(itemdetails.previous_change)}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.PREVIOUS UPDATE AGE'|translate}}</td><td class=\"py-1\">{{this.previous_update_age}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'ITEMS.PREVIOUS CHANGE AGE'|translate}}</td><td class=\"py-1\">{{this.previous_change_age}}</td></tr>\r\n\r\n                          <tr class=\"shng_heading\"><th class=\"py-1\" colspan=\"2\" style=\"height: 45px; vertical-align: bottom\">{{'ITEMS.EVALUATION AND TRIGGER'|translate}}:</th></tr>\r\n                          <tr><td class=\"py-1\">{{'cache'|translate}}</td><td class=\"py-1\">{{itemdetails.cache}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'enforce_updates'|translate}}</td><td class=\"py-1\">{{itemdetails.enforce_updates}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'eval_trigger'|translate}}</td><td class=\"py-1\">{{itemdetails.trigger}}</td></tr>\r\n                          <tr *ngIf=\"itemdetails.trigger_condition !== '-'\"><td class=\"py-1\">{{'trigger_condition'|translate}}</td><td class=\"py-1\">{{itemdetails.trigger_condition}}</td></tr>\r\n                          <tr *ngIf=\"itemdetails.trigger_condition_raw !== ''\"><td class=\"py-1\">{{'trigger_condition raw'|translate}}</td><td class=\"py-1\">{{itemdetails.trigger_condition_raw}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'eval'|translate}}</td><td class=\"py-1\">{{itemdetails.eval}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'on_update'|translate}}</td><td class=\"py-1\">{{itemdetails.on_update}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'on_change'|translate}}</td><td class=\"py-1\">{{itemdetails.on_change}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'log_change'|translate}}</td><td class=\"py-1\">{{itemdetails.log_change}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'cycle'|translate}}</td><td class=\"py-1\">{{itemdetails.cycle}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'crontab'|translate}}</td><td class=\"py-1\">{{itemdetails.crontab}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'autotimer'|translate }}</td><td class=\"py-1\">{{itemdetails.autotimer}}</td></tr>\r\n                          <tr><td class=\"py-1\">{{'threshold'|translate}}</td><td class=\"py-1\">{{itemdetails.threshold}}</td></tr>\r\n\r\n                          <ng-container *ngIf=\"itemdetails.threshold_crossed !== ''\">\r\n                            <tr><td class=\"py-1\">{{'threshold crossed'|translate}}</td><td class=\"py-1\">{{itemdetails.threshold_crossed}}</td></tr>\r\n                          </ng-container>\r\n\r\n                          <ng-container *ngIf=\"JSON.stringify(itemdetails.config) !== '{}'\">\r\n                            <tr class=\"shng_heading\"><th class=\"py-1\" colspan=\"2\" style=\"height: 45px; vertical-align: bottom\">{{ 'ITEMS.PLUGIN SPECIFIC CONFIGURATION'|translate }}:</th></tr>\r\n                            <ng-container *ngFor=\"let key of Object.keys(itemdetails.config)\">\r\n                              <tr><td class=\"py-1\">{{key}}</td><td class=\"py-1\">{{itemdetails.config[key]}}</td></tr>\r\n                            </ng-container>\r\n                          </ng-container>\r\n\r\n                          <ng-container *ngIf=\"itemdetails.logics && itemdetails.logics.length > 0\">\r\n                            <tr class=\"shng_heading\"><th class=\"py-1\" colspan=\"2\" style=\"height: 45px; vertical-align: bottom\">{{ 'ITEMS.CONNECTED LOGICS'|translate }}:</th></tr>\r\n                            <ng-container *ngFor=\"let logic of itemdetails.logics\">\r\n                              <tr><td class=\"py-1\" colspan=\"2\">{{logic}}</td></tr>\r\n                            </ng-container>\r\n                          </ng-container>\r\n\r\n                          <ng-container *ngIf=\"itemdetails.triggers && itemdetails.triggers.length > 0\">\r\n                            <tr class=\"shng_heading\"><th class=\"py-1\" colspan=\"2\" style=\"height: 45px; vertical-align: bottom\">{{ 'ITEMS.CONNECTED TRIGGERS'|translate }}:</th></tr>\r\n                            <ng-container *ngFor=\"let trigger of itemdetails.triggers\">\r\n                              <tr><td class=\"py-1\" colspan=\"2\">{{trigger}}</td></tr>\r\n                            </ng-container>\r\n                          </ng-container>\r\n\r\n\r\n                          <tr *ngIf=\"itemdetails.filename !== 'None'\"><td class=\"py-1\" style=\"height: 45px; vertical-align: bottom\">{{'ITEMS.DEFINED IN'|translate}}</td><td class=\"py-1\" style=\"height: 45px; vertical-align: bottom\">{{itemdetails.filename}}</td></tr>\r\n\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </tab>\r\n\r\n\r\n    <!-------------------------------------------------->\r\n    <!--   List with monitored items and their data   -->\r\n    <!-------------------------------------------------->\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'ITEMS.MONITORED ITEMS'|translate }}\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th style=\"min-width: 250px; border-top: 0\">{{ 'ITEMS.PATH'|translate }}</th>\r\n          <th style=\"width: 150px; border-top: 0\">{{ 'ITEMS.VALUE'|translate }}</th>\r\n          <th style=\"min-width: 100px; border-top: 0\">{{ 'ITEMS.LAST CHANGE'|translate }}</th>\r\n          <th style=\"min-width: 100px; border-top: 0\">{{ 'ITEMS.CHANGE BY'|translate }}</th>\r\n          <th style=\"min-width: 100px; border-top: 0\">{{ 'ITEMS.LAST UPDATE'|translate }}</th>\r\n          <th style=\"min-width: 100px; border-top: 0\">{{ 'ITEMS.UPDATE BY'|translate }}</th>\r\n          <th style=\"width: 30px; border-top: 0\">{{ 'ITEMS.ACTIONS'|translate }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          <ng-container *ngFor=\"let itempath of monitoredItems\">\r\n            <tr>\r\n              <td class=\"py-1\">{{ itempath }}</td>\r\n              <td class=\"py-1\"></td>\r\n              <td class=\"py-1\">-</td>\r\n              <td class=\"py-1\">-</td>\r\n              <td class=\"py-1\">-</td>\r\n              <td class=\"py-1\">-</td>\r\n              <td class=\"py-1\">\r\n                <button type=\"button\" class=\"float-sm-right btn-outline btn-sm\" style=\"margin-left: 5px\" id=\"btn-monitor2\" (click)=\"monitorItem(itempath, false);\"><i style=\"color: #c40808;\" class=\"far fa-trash-alt\"></i></button>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n\r\n          <tr>\r\n            <td colspan=\"7\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"7\">Diese Funktion wartet auf die vollständige Implementierung der Websockets</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n<!--\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'ITEMS.TO COME'|translate }}\">\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'ITEMS.TO COME'|translate }}\">\r\n    </tab>\r\n-->\r\n  </tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/items/item-tree/item-tree.component.ts":
/*!********************************************************!*\
  !*** ./src/app/items/item-tree/item-tree.component.ts ***!
  \********************************************************/
/*! exports provided: ItemTreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTreeComponent", function() { return ItemTreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/olddata.service */ "./src/app/common/services/olddata.service.ts");
/* harmony import */ var _common_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/shared.service */ "./src/app/common/services/shared.service.ts");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");











var ItemTreeComponent = /** @class */ (function () {
    function ItemTreeComponent(dataService, dataServiceServer, appComponent, translate, modalService, shared) {
        this.dataService = dataService;
        this.dataServiceServer = dataServiceServer;
        this.appComponent = appComponent;
        this.translate = translate;
        this.modalService = modalService;
        this.shared = shared;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSearch"];
        this.faCircleNotch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCircleNotch"];
        this.faFolder = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFolder"];
        this.faFolderOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFolderOpen"];
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSync"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faList"];
        this.faStop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStop"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrashAlt"];
        this.faThumbtack = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faThumbtack"];
        this.itemcount = 0;
        this.itemdetails = {};
        this.itemdetailsloaded = false;
        this.monitoredItems = [];
        this.searchStart_param = {};
        this.treeIsFiltered = false;
        this.alertText = '';
        this.Object = Object;
        this.JSON = JSON;
        this.update_age = '';
        this.change_age = '';
        this.previous_update_age = '';
        this.previous_change_age = '';
    }
    ItemTreeComponent_1 = ItemTreeComponent;
    ItemTreeComponent.resizeItemTree = function () {
        var browserHeight = window.innerHeight;
        //    console.log({browserHeight});
        var tree = jquery__WEBPACK_IMPORTED_MODULE_5__('#tree');
        var treeDetail = jquery__WEBPACK_IMPORTED_MODULE_5__('#tree_detail');
        // const offsetTopDetail = treeDetail.offset().top;
        // initially offsetTop is off by a number of pixels. Correction: a fixed offset
        var offsetTop = 167;
        var offsetTopDetail = 200;
        var height = String(Math.round((-1) * (offsetTop) - 35 + browserHeight) + 'px');
        var heightDetail = String(Math.round((-1) * (offsetTopDetail) - 35 + browserHeight) + 'px');
        tree.css('height', height);
        tree.css('maxHeight', height);
        treeDetail.css('height', heightDetail);
        treeDetail.css('maxHeight', heightDetail);
    };
    ItemTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ItemTreeComponent.ngOnInit:');
        this.dataServiceServer.getServerinfo()
            .subscribe(function (response) {
            _this.getItemtree();
        });
        window.addEventListener('resize', ItemTreeComponent_1.resizeItemTree, false);
        ItemTreeComponent_1.resizeItemTree();
    };
    ItemTreeComponent.prototype.closeAlert = function (myalert, item_oldvalue) {
        this.item_val.value = item_oldvalue;
        myalert.hide();
    };
    ItemTreeComponent.prototype.getItemtree = function () {
        var _this = this;
        this.dataService.getItemtree()
            .subscribe(function (response) {
            //          console.log('ItemsComponent: dataService.getItemtree()');
            //          console.log(response);
            _this.itemcount = response[0];
            _this.filesTree0 = response[1];
            _this.filterNodes('');
            // this.plugininfo.sort(function (a, b) {return (a.pluginname > b.pluginname) ? 1 : ((b.pluginname > a.pluginname) ? -1 : 0)});
            //          this.searchStart_param = {'number': sessionStorage.getItem('itemtree_searchstart')};
            _this.searchStart_param = { 'number': sessionStorage.getItem('itemtree_searchstart') };
        }, function (error) {
            console.log('ERROR: ItemsComponent: dataService.getItemtree():');
            console.log(error);
        });
    };
    ItemTreeComponent.prototype.updateValue = function (item_path, item_value, item_type, item_oldvalue, dialog) {
        console.log('ItemTreeComponent.updateValue:');
        if (item_type === 'num' || item_type === 'scene') {
            if (isNaN(item_value.value)) {
                this.item_val = item_value;
                this.alertText = this.translate.instant('ITEMS.ALERT.NOT NUMERIC');
                dialog.show();
                return;
            }
            if (item_type === 'scene' && (item_value.value < 0 || item_value.value > 63)) {
                this.item_val = item_value;
                this.alertText = this.translate.instant('ITEMS.ALERT.INVALID SCENE NUMBER');
                dialog.show();
                return;
            }
        }
        console.log('--> updateValue: ' + item_value.value);
        this.dataService.changeItemValue(item_path, item_value.value);
    };
    /*
    
          $("#item_value" ).on('blur change', function() {
            $.ajax({
              url: 'item_change_value.html',
              type: 'POST',
              data: {
                'item_path': element.path,
                'value': $("#item_value").val()
              },
              success: function (response) {
                $( ".fa-sync" ).trigger( "click" );
              },
              error: function () {
                //your error code
              }
            });
          });
      */
    ItemTreeComponent.prototype.monitorItem = function (path, monitorIt) {
        // console.log('monitorItem: path=' + path + ', monitorIt=' + String(monitorIt));
        if (monitorIt) {
            this.monitoredItems.push(path);
        }
        else {
            for (var i = this.monitoredItems.length - 1; i >= 0; i--) {
                if (this.monitoredItems[i] === path) {
                    this.monitoredItems.splice(i, 1);
                    // break;       //<-- Uncomment  if only the first term has to be removed
                }
            }
        }
        // console.log(this.monitoredItems);
    };
    ItemTreeComponent.prototype.getDetails = function (path) {
        var _this = this;
        console.log('ItemTreeComponent.getDetails: ' + path);
        if ((path !== undefined)) {
            this.dataService.getItemDetails(path)
                .subscribe(function (response) {
                _this.showDetails(response[0]);
            }, function (error) {
                console.log('ERROR: ItemsComponent: dataService.getItemDetails():');
                console.log(error);
            });
        }
        else {
            this.showDetails();
        }
    };
    ItemTreeComponent.prototype.showDetails = function (response) {
        console.log('showDetails:');
        console.log({ response: response });
        if (response === undefined) {
            this.itemdetails = {};
            this.itemdetails.config = {};
            // this.itemdetails.value = item_value.value;
            this.update_age = this.shared.ageToString(0);
            this.change_age = this.shared.ageToString(0);
            this.previous_update_age = this.shared.ageToString(0);
            this.previous_change_age = this.shared.ageToString(0);
        }
        else {
            this.itemdetails = response;
            this.update_age = this.shared.ageToString(this.itemdetails.update_age);
            this.change_age = this.shared.ageToString(this.itemdetails.change_age);
            this.previous_update_age = this.shared.ageToString(this.itemdetails.previous_update_age);
            this.previous_change_age = this.shared.ageToString(this.itemdetails.previous_change_age);
        }
        this.itemdetailsloaded = true;
    };
    /* ----------------------------------------------
      * For PrimeNG Tree:
    */
    ItemTreeComponent.prototype.filterTree = function (treeModel, value) {
        if (value.length >= sessionStorage.getItem('itemtree_searchstart')) {
            this.filterNodes(value);
        }
        else {
            this.filterNodes('');
        }
    };
    ItemTreeComponent.prototype.filterNodes = function (value) {
        //    console.log('ItemsComponent.filterTree: >' + value + '<')
        value = value.toLowerCase();
        this.filteredTree = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.filesTree0);
        this.treeIsFiltered = false;
        if (value && value !== '') {
            this.treeIsFiltered = true;
            this.prune(this.filteredTree, value);
            this.expandAll();
        }
    };
    ItemTreeComponent.prototype.clearFilter = function (event, filter) {
        filter.value = '';
        this.filterTree(event, filter.value);
        this.itemdetailsloaded = false;
    };
    ItemTreeComponent.prototype.prune = function (array, filter) {
        for (var i = array.length - 1; i >= 0; i--) {
            var obj = array[i];
            if (obj.children) {
                if (this.prune(obj.children, filter)) {
                    if (obj.children.length === 0) {
                        array.splice(i, 1);
                    }
                    return true;
                }
            }
            if (obj.label.toLowerCase().indexOf(filter) === -1) {
                if (obj.children.length === 0) {
                    array.splice(i, 1);
                }
            }
        }
    };
    ItemTreeComponent.prototype.filterTreeY = function (event, value) {
        var _this = this;
        //    console.log('ItemsComponent.filterTree: >' + value + '<')
        this.filteredTree = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["cloneDeep"])(this.filesTree0);
        if (value && value !== '') {
            this.filteredTree.forEach(function (node) {
                _this.filterRecursive(node, value, 0);
            });
        }
    };
    ItemTreeComponent.prototype.filterRecursive = function (node, filter, index) {
        var _this = this;
        if (node.children) {
            node.children.forEach(function (childNode, index) {
                _this.filterRecursive(childNode, filter, index);
                if (!childNode) {
                    console.log({ index: index });
                }
            });
        }
        if (node.label.indexOf(filter) === -1) {
            console.log('filtered node: ' + node.label + ', index: ' + index + ', children: ' + node.children);
            //      node.label = '( ' + node.label + ' )';
            node.label = '';
        }
        else {
            console.log('active node: ' + node.label + ', index: ' + index + ', children: ' + node.children);
        }
    };
    ItemTreeComponent.prototype.nodeSelect = function (event) {
        console.log('Node Selected: ' + event.node.label);
        this.itemdetailsloaded = false;
        this.getDetails(event.node.path);
    };
    ItemTreeComponent.prototype.expandAll = function () {
        var _this = this;
        this.filteredTree.forEach(function (node) {
            _this.expandRecursive(node, true);
        });
    };
    ItemTreeComponent.prototype.collapseAll = function () {
        var _this = this;
        this.filteredTree.forEach(function (node) {
            _this.expandRecursive(node, false);
        });
    };
    ItemTreeComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    var ItemTreeComponent_1;
    ItemTreeComponent = ItemTreeComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./item-tree.component.html */ "./src/app/items/item-tree/item-tree.component.html"),
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            styles: [__webpack_require__(/*! ./item-tree.component.css */ "./src/app/items/item-tree/item-tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_olddata_service__WEBPACK_IMPORTED_MODULE_8__["OlddataService"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_10__["ServerApiService"],
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalService"],
            _common_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]])
    ], ItemTreeComponent);
    return ItemTreeComponent;
}());

function fuzzysearch(needle, haystack) {
    var haystackLC = haystack.toLowerCase();
    var needleLC = needle.toLowerCase();
    var hlen = haystack.length;
    var nlen = needleLC.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needleLC === haystackLC;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needleLC.charCodeAt(i);
        while (j < hlen) {
            if (haystackLC.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}


/***/ }),

/***/ "./src/app/items/struct-configuration/struct-configuration.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/items/struct-configuration/struct-configuration.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL3N0cnVjdC1jb25maWd1cmF0aW9uL3N0cnVjdC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/items/struct-configuration/struct-configuration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/items/struct-configuration/struct-configuration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 60px;\">\r\n\r\n  <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n\r\n    <table>\r\n      <tbody>\r\n      <tr>\r\n        <td>\r\n          <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px\">\r\n            {{ 'ITEMS.STRUCT_CONFIGFILE'|translate }}: <strong>../etc/{{ myEditFilename }}.yaml</strong>\r\n            <button pButton label=\"{{ 'BUTTON.SAVE'|translate }}\" type=\"button\" [disabled]=\"myTextarea === myTextareaOrig\" icon=\"fa fa-check\" style=\"margin-right: 0px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n            <button pButton label=\"{{ 'BUTTON.DISCARD'|translate }}\" type=\"button\" [disabled]=\"(myEditFilename === '') || (myTextarea === myTextareaOrig)\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"this.myTextarea = this.myTextareaOrig;\" class=\"float-sm-right ui-button-secondary\"></button>\r\n            <button pButton label=\"{{ 'BUTTON.HELP'|translate }}\" type=\"button\" [disabled]=\"false\" icon=\"fa fa-info\" style=\"margin-right: 10px;\" (click)=\"this.editorHelp_display = true;\" class=\"float-sm-right ui-button-success\"></button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <div style=\"margin-top: 10px; padding-left: 10px; padding-right: 5px\">\r\n            <ngx-codemirror #codeeditor\r\n                            [options]=\"cmOptions\"\r\n                            [(ngModel)]=\"myTextarea\"\r\n                            [autoFocus]=\"true\"\r\n            ></ngx-codemirror>\r\n            <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n          </div>\r\n        </td>\r\n\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n  -- Confirm dialog vor configuration deletion\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"error_display\" [closable]=\"false\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'ITEMS.STRUCT_CONFIG_ERROR'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <pre>\r\n{{'ITEMS.STRUCT_CONFIG_ERROR_TEXT'|translate}}\r\n\r\n    {{ myTextOutput }}\r\n  </pre>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"error_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<!--\r\n    -- Display help dialog\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"editorHelp_display\" [closable]=\"true\" [modal]=\"true\" dynamic=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'HELP.EDITOR-KEYS'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <table>\r\n    <thead>\r\n      <th><u>{{'HELP.KEY'|translate}}</u></th>\r\n      <th style=\"width: 20px;\"></th>\r\n      <th><u>{{'HELP.DESCRIPTION'|translate}}</u></th>\r\n    </thead>\r\n    <tbody>\r\n      <tr><td>Tab</td>          <td></td> <td>{{'HELP.TAB'|translate}}</td></tr>\r\n      <tr><td>Shift-Tab</td>    <td></td> <td>{{'HELP.SHIFT-TAB'|translate}}</td></tr>\r\n      <tr><td>F11</td>          <td></td> <td>{{'HELP.F11'|translate}}</td></tr>\r\n      <tr><td>Esc</td>          <td></td> <td>{{'HELP.ESC'|translate}}</td></tr>\r\n      <tr><td>Ctrl-Q</td>       <td></td> <td>{{'HELP.CTRL-Q'|translate}}</td></tr>\r\n      <tr><td>Shift-Ctrl-Q</td> <td></td> <td>{{'HELP.SHIFT-CTRL-Q'|translate}}</td></tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"editorHelp_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/items/struct-configuration/struct-configuration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/items/struct-configuration/struct-configuration.component.ts ***!
  \******************************************************************************/
/*! exports provided: StructConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructConfigurationComponent", function() { return StructConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_files_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/files-api.service */ "./src/app/common/services/files-api.service.ts");
/* harmony import */ var _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/services-api.service */ "./src/app/common/services/services-api.service.ts");




var StructConfigurationComponent = /** @class */ (function () {
    function StructConfigurationComponent(fileService, dataService) {
        this.fileService = fileService;
        this.dataService = dataService;
        // -----------------------------------------------------------------
        //  Vars for the codemirror components
        //
        this.rulers = [];
        this.myTextarea = '';
        this.myTextareaOrig = '';
        this.cmOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'F1': function (cm) {
                    this.editorHelp_display = true;
                },
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess',
                'F11': function (cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                    // cm.getScrollerElement().style.maxHeight = 'none';
                },
                'Esc': function (cm, fullScreen) {
                    if (cm.getOption('fullScreen')) {
                        cm.setOption('fullScreen', false);
                    }
                },
                'Ctrl-Q': function (cm) {
                    cm.foldCode(cm.getCursor());
                },
                'Shift-Ctrl-Q': function (cm) {
                    for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
                        cm.foldCode({ line: l, ch: 0 }, null, 'unfold');
                    }
                }
            },
            fullScreen: false,
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        };
        this.editorHelp_display = false;
        this.error_display = false;
        this.myTextOutput = '';
    }
    StructConfigurationComponent.prototype.ngOnInit = function () {
        // console.log('LoggingConfigurationComponent.ngOnInit');
        var _this = this;
        this.myEditFilename = 'struct';
        for (var i = 1; i <= 100; i++) {
            this.rulers.push({ color: '#eee', column: i * 4, lineStyle: 'dashed' });
        }
        this.fileService.readFile('structs')
            .subscribe(function (response) {
            _this.myTextarea = response;
            _this.myTextareaOrig = response;
        });
    };
    StructConfigurationComponent.prototype.ngAfterViewChecked = function () {
        var editor1 = this.codeEditor.codeMirror;
        if (editor1.getOption('fullScreen')) {
            editor1.setSize('100vw', '100vh');
        }
        else {
            editor1.setSize('93vw', '78vh');
            1;
        }
        editor1.refresh();
    };
    StructConfigurationComponent.prototype.saveConfig = function () {
        // console.log('LoggingConfigurationComponent.saveConfig');
        var _this = this;
        this.dataService.CheckYamlText(this.myTextarea)
            .subscribe(function (response) {
            _this.myTextOutput = response;
            if ((_this.myTextarea !== '') && (_this.myTextOutput.startsWith('ERROR:'))) {
                _this.error_display = true;
            }
            else {
                _this.fileService.saveFile('structs', '', _this.myTextarea)
                    .subscribe(function (response2) {
                    _this.myTextareaOrig = _this.myTextarea;
                });
            }
            var editor = _this.codeEditor.codeMirror;
            editor.refresh();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StructConfigurationComponent.prototype, "codeEditor", void 0);
    StructConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-struct-configuration',
            template: __webpack_require__(/*! ./struct-configuration.component.html */ "./src/app/items/struct-configuration/struct-configuration.component.html"),
            styles: [__webpack_require__(/*! ./struct-configuration.component.css */ "./src/app/items/struct-configuration/struct-configuration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_files_api_service__WEBPACK_IMPORTED_MODULE_2__["FilesApiService"],
            _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ServicesApiService"]])
    ], StructConfigurationComponent);
    return StructConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/items/structs/structs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/items/structs/structs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL3N0cnVjdHMvc3RydWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/items/structs/structs.component.html":
/*!******************************************************!*\
  !*** ./src/app/items/structs/structs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <h4 style=\"margin-left: 15px; margin-top: 65px;\">{{ 'ITEMS.STRUCT_TEMPLATES'|translate }}</h4>\r\n  <p-accordion [multiple]=\"true\" (onOpen)=\"structExpanded[structsList[$event.index]]=true\"  (onClose)=\"structExpanded[structsList[$event.index]]=false\">\r\n    <ng-container *ngFor=\"let struct of structsList\">\r\n      <p-accordionTab>\r\n        <p-header>\r\n          <ng-container *ngIf=\"structsDict[struct]['name'] === undefined\">\r\n            <span style=\"font-size: large; font-weight: bold; \">{{struct}}</span>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"structsDict[struct]['name'] !== undefined\">\r\n            <span style=\"font-size: large; font-weight: bold; \">{{struct}}</span> &nbsp; &nbsp; ({{structsDict[struct]['name']}})\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"structExpanded[struct] === true\">\r\n            <button pButton label=\"{{ 'ITEMS.REDUCE ALL'|translate }}\" type=\"button\" style=\"margin-right: 5px\" icon=\"fa fa-folder\" (click)=\"$event.stopPropagation(); collapseAll(displayTrees[struct])\" class=\"float-sm-right ui-button-success\"></button>\r\n            <button pButton label=\"{{ 'ITEMS.EXPAND ALL'|translate }}\" type=\"button\" style=\"margin-right: 5px\" icon=\"fa fa-folder-open\" (click)=\"$event.stopPropagation(); expandAll(displayTrees[struct])\" class=\"float-sm-right ui-button-success\"></button>\r\n          </ng-container>\r\n\r\n        </p-header>\r\n\r\n        <div style=\"margin-left: 17px;\">\r\n\r\n          <p-tree [value]=\"displayTrees[struct]\"\r\n                  selectionMode=\"single\"\r\n                  [(selection)]=\"selectedItem\"\r\n                  emptyMessage=\"{{'ITEMS.NO ITEMS'|translate}}\"\r\n                  [style]=\"{width: '100%'}\">\r\n            <ng-template let-node  pTemplate=\"default\">\r\n              {{node.label}} &nbsp;\r\n            </ng-template>\r\n\r\n          </p-tree>\r\n\r\n        </div>\r\n      </p-accordionTab>\r\n    </ng-container>\r\n  </p-accordion>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/items/structs/structs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/items/structs/structs.component.ts ***!
  \****************************************************/
/*! exports provided: StructsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructsComponent", function() { return StructsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_services_structs_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/structs-api.service */ "./src/app/common/services/structs-api.service.ts");





var StructsComponent = /** @class */ (function () {
    // systeminfo: SystemInfo = <SystemInfo>{};
    function StructsComponent(http, translate, dataService) {
        this.http = http;
        this.translate = translate;
        this.dataService = dataService;
    }
    StructsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('StructsComponent.ngOnInit');
        this.displayTrees = {};
        this.structExpanded = {};
        this.dataService.getStructs()
            .subscribe(function (response) {
            _this.structsDict = response;
            //          this.schedulerinfo.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)});
            _this.structsList = [];
            for (var k in _this.structsDict) {
                if (k in _this.structsDict) {
                    _this.structsList.push(k);
                    _this.displayTree = _this.buildDisplayTree(_this.structsDict[k]);
                    _this.displayTrees[k] = _this.displayTree;
                }
            }
            console.log('getStructs', { response: response });
        });
    };
    // -------------------------------------------------------------------------------------------
    // build a display tree for the PrimeNG component from the itemtree received from the backend
    //
    StructsComponent.prototype.buildDisplayTree = function (subtree) {
        var displayTreeList = [];
        for (var key in subtree) {
            if (key in subtree) {
                var displayNode = {};
                if (Array.isArray(subtree)) {
                    displayNode['label'] = '- ' + subtree[key];
                }
                else {
                    if (typeof subtree[key] === 'string') {
                        displayNode['label'] = key + ': ' + subtree[key];
                    }
                    else {
                        displayNode['label'] = key;
                    }
                }
                if (typeof subtree[key] === 'object') {
                    displayNode['children'] = this.buildDisplayTree(subtree[key]);
                }
                displayTreeList.push(displayNode);
            }
        }
        return displayTreeList;
    };
    StructsComponent.prototype.expandAll = function (tree) {
        var _this = this;
        tree.forEach(function (node) {
            _this.expandRecursive(node, true);
        });
    };
    StructsComponent.prototype.collapseAll = function (tree) {
        var _this = this;
        tree.forEach(function (node) {
            _this.expandRecursive(node, false);
        });
    };
    StructsComponent.prototype.expandRecursive = function (node, isExpand) {
        var _this = this;
        node.expanded = isExpand;
        if (node.children) {
            node.children.forEach(function (childNode) {
                _this.expandRecursive(childNode, isExpand);
            });
        }
    };
    StructsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-structs',
            template: __webpack_require__(/*! ./structs.component.html */ "./src/app/items/structs/structs.component.html"),
            styles: [__webpack_require__(/*! ./structs.component.css */ "./src/app/items/structs/structs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _common_services_structs_api_service__WEBPACK_IMPORTED_MODULE_4__["StructsApiService"]])
    ], StructsComponent);
    return StructsComponent;
}());



/***/ }),

/***/ "./src/app/logics/logics-edit/logics-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/logics/logics-edit/logics-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWNzL2xvZ2ljcy1lZGl0L2xvZ2ljcy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljcy9sb2dpY3MtZWRpdC9sb2dpY3MtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/logics/logics-edit/logics-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/logics/logics-edit/logics-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'LOGIC_EDIT.CODE'|translate }}\">\r\n\r\n      <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n\r\n        <table>\r\n          <tbody>\r\n          <tr>\r\n            <td>\r\n              <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px\">\r\n                {{ 'LOGIC_EDIT.FILENAME'|translate }}: <strong>../logics/{{ myEditFilename }}</strong>\r\n                <button pButton label=\"{{ 'BUTTON.SAVE_LOAD'|translate }}\" type=\"button\" [disabled]=\"true\" icon=\"fa fa-check\" style=\"margin-right: 0px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n                <button pButton label=\"{{ 'BUTTON.SAVE'|translate }}\" type=\"button\" [disabled]=\"myTextarea === myTextareaOrig\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n                <button pButton label=\"{{ 'BUTTON.DISCARD'|translate }}\" type=\"button\" [disabled]=\"(myEditFilename === '') || (myTextarea === myTextareaOrig)\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"this.myTextarea = this.myTextareaOrig;\" class=\"float-sm-right ui-button-secondary\"></button>\r\n                <button pButton label=\"{{ 'BUTTON.HELP'|translate }}\" type=\"button\" [disabled]=\"false\" icon=\"fa fa-info\" style=\"margin-right: 10px;\" (click)=\"editorHelp_display = true;\" class=\"float-sm-right ui-button-success\"></button>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>\r\n              <div style=\"margin-top: 10px; padding-left: 10px; padding-right: 5px\">\r\n                <ngx-codemirror #codeeditor\r\n                                [options]=\"cmOptions\"\r\n                                [(ngModel)]=\"myTextarea\"\r\n                                [autoFocus]=\"true\"\r\n                ></ngx-codemirror>\r\n                <a style=\"font-size: small\">{{ 'RESTART LOGIC FOR CHANGES'|translate }}</a>\r\n              </div>\r\n            </td>\r\n\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </tab>\r\n\r\n\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'LOGIC_EDIT.ATTRIBUTES'|translate }}\">\r\n\r\n      <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n\r\n        <h5 hidden=\"true\" style=\"; margin-top: 10px; margin-left: 10px;\">\r\n          <p style=\"color: var(--shng-blue)\">\r\n            <strong>Yet to be implemented (for logic '{{myEditFilename}}')</strong>\r\n          </p>\r\n        </h5>\r\n        <div style=\"margin-left: 10px; padding-bottom: 15px;\">\r\n          <strong>Logik \"Testlogik\"</strong>\r\n          <button pButton label=\"{{ 'BUTTON.SAVE_LOAD'|translate }}\" type=\"button\" [disabled]=\"true\" icon=\"fa fa-check\" style=\"margin-right: 0px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n          <button pButton label=\"{{ 'BUTTON.SAVE'|translate }}\" type=\"button\" [disabled]=\"myTextarea === myTextareaOrig\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n          <button pButton label=\"{{ 'BUTTON.DISCARD'|translate }}\" type=\"button\" [disabled]=\"(myEditFilename === '') || (myTextarea === myTextareaOrig)\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"this.myTextarea = this.myTextareaOrig;\" class=\"float-sm-right ui-button-secondary\"></button>\r\n          <button pButton label=\"{{ 'BUTTON.HELP'|translate }}\" type=\"button\" [disabled]=\"false\" icon=\"fa fa-info\" style=\"margin-right: 10px;\" (click)=\"editorHelp_display = true;\" class=\"float-sm-right ui-button-success\"></button>\r\n        </div>\r\n\r\n        <table id=\"1\" class=\"table table-striped\">\r\n          <tr>\r\n            <td width=\"15%\">Status</td>\r\n            <td width=\"35%\"><span style=\"color: var(--shng-green);  vertical-align: middle\" class=\"fas fa-play-circle\"></span> Aktiv</td>\r\n            <td width=\"15%\"></td>\r\n            <td width=\"35%\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Letzte Ausführung</td>\r\n            <td>2019-04-09 18:01:13+0200</td>\r\n            <td>Nächste Ausführung</td>\r\n            <td>2019-04-09 18:16:13+0200</td>\r\n          </tr>\r\n\r\n          <tr><td colspan=\"4\"></td></tr>\r\n          <tr>\r\n            <td><strong>Parameter</strong></td>\r\n            <td colspan=\"3\"><strong>Wert</strong></td>\r\n          </tr>\r\n          <tr>\r\n            <td>Cycle</td>\r\n            <td colspan=\"3\">\r\n              <input type=\"text\" autocomplete=\"off\" id=\"cycle\" style=\"width: 200px; border: 1px solid #ddd;\" name=\"cycle\"/>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Crontab(s)</td>\r\n            <td colspan=\"3\">\r\n              <input type=\"text\" autocomplete=\"off\" id=\"crontab\" style=\"width: 200px; border: 1px solid #ddd;\" name=\"crontab\"/>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td>Watch Item(s)</td>\r\n            <td colspan=\"3\">\r\n              <ngx-codemirror #watchitems\r\n                              [options]=\"cmOptionsWatchItems\"\r\n                              [(ngModel)]=\"myTextareaWatchItems\"\r\n                              [autoFocus]=\"false\"\r\n              ></ngx-codemirror>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n       <div style=\"margin-left: 10px; padding-top: 20px; padding-bottom: 10px;\"><strong>Plugin spezifische Logik Parameter</strong></div>\r\n        <table id=\"3\" class=\"table table-striped\">\r\n          <th width=\"15%\">Parameter</th>\r\n          <th>Wert</th>\r\n          <th>Typ</th>\r\n          <th>Beschreibung</th>\r\n          <tr>\r\n            <td>visu_acl</td>\r\n            <td>\r\n              <input type=\"text\" autocomplete=\"off\" id=\"visu_acl\" style=\"width: 200px; border: 1px solid #ddd;\" name=\"visu_acl\"/>\r\n            </td>\r\n            <td>bool</td>\r\n            <td>Logik darf durch Visu getriggert werden</td>\r\n          </tr>\r\n          <tr>\r\n            <td>test_acl</td>\r\n            <td>\r\n              <input type=\"text\" autocomplete=\"off\" id=\"test_acl\" style=\"width: 200px; border: 1px solid #ddd;\" name=\"test_acl\"/>\r\n            </td>\r\n            <td>bool</td>\r\n            <td>Logik darf durch Test-Plugin getriggert werden</td>\r\n          </tr>\r\n          <tr>\r\n            <td>test2_acl</td>\r\n            <td>\r\n              <input type=\"text\" autocomplete=\"off\" id=\"test2_acl\" style=\"width: 200px; border: 1px solid #ddd;\" name=\"test2_acl\"/>\r\n            </td>\r\n            <td>bool</td>\r\n            <td>Logik darf durch Plugin test2 getriggert werden</td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n    </tab>\r\n\r\n  </tabset>\r\n</div>\r\n\r\n\r\n<!--\r\n    -- Display help dialog\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"editorHelp_display\" [closable]=\"true\" [modal]=\"true\" dynamic=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'HELP.EDITOR-KEYS'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <table>\r\n    <thead>\r\n    <th><u>{{'HELP.KEY'|translate}}</u></th>\r\n    <th style=\"width: 20px;\"></th>\r\n    <th><u>{{'HELP.DESCRIPTION'|translate}}</u></th>\r\n    </thead>\r\n    <tbody>\r\n    <tr><td>Tab</td>          <td></td> <td>{{'HELP.TAB'|translate}}</td></tr>\r\n    <tr><td>Shift-Tab</td>    <td></td> <td>{{'HELP.SHIFT-TAB'|translate}}</td></tr>\r\n    <tr><td>F11</td>          <td></td> <td>{{'HELP.F11'|translate}}</td></tr>\r\n    <tr><td>Esc</td>          <td></td> <td>{{'HELP.ESC'|translate}}</td></tr>\r\n    <tr><td>Ctrl-Q</td>       <td></td> <td>{{'HELP.CTRL-Q'|translate}}</td></tr>\r\n    <tr><td>Shift-Ctrl-Q</td> <td></td> <td>{{'HELP.SHIFT-CTRL-Q'|translate}}</td></tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"editorHelp_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/logics/logics-edit/logics-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/logics/logics-edit/logics-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: LogicsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicsEditComponent", function() { return LogicsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_files_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/files-api.service */ "./src/app/common/services/files-api.service.ts");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_services_plugins_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/plugins-api.service */ "./src/app/common/services/plugins-api.service.ts");
/* harmony import */ var _common_services_items_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/items-api.service */ "./src/app/common/services/items-api.service.ts");







var LogicsEditComponent = /** @class */ (function () {
    function LogicsEditComponent(route, fileService, pluginsapiService, itemsapiService) {
        this.route = route;
        this.fileService = fileService;
        this.pluginsapiService = pluginsapiService;
        this.itemsapiService = itemsapiService;
        // -----------------------------------------------------------------
        //  Vars for the codemirror components
        //
        this.rulers = [];
        this.autocomplete_list = [];
        this.item_list = [];
        this.myTextarea = '';
        this.myTextareaOrig = '';
        this.myTextareaWatchItems = '';
        this.myTextareaWatchItemsOrig = '';
        this.cmOptionsWatchItems = {
            autorefresh: true,
            lineWrapping: false
        };
        this.cmOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'F1': function (cm) {
                    this.editorHelp_display = true;
                },
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess',
                'F11': function (cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                    // cm.getScrollerElement().style.maxHeight = 'none';
                },
                'Esc': function (cm, fullScreen) {
                    if (cm.getOption('fullScreen')) {
                        cm.setOption('fullScreen', false);
                    }
                },
                'Ctrl-Space': 'autocomplete',
                'Ctrl-I': 'autocomplete_item',
                'Ctrl-Q': function (cm) {
                    cm.foldCode(cm.getCursor());
                },
                'Shift-Ctrl-Q': function (cm) {
                    for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
                        cm.foldCode({ line: l, ch: 0 }, null, 'unfold');
                    }
                }
            },
            fullScreen: false,
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'python',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        };
        this.editorHelp_display = false;
        this.error_display = false;
    }
    LogicsEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var logicName = this.route.snapshot.paramMap['params']['logicname'];
        if (logicName !== undefined) {
            if (logicName.endsWith('.log')) {
                logicName = logicName.slice(0, -4);
            }
        }
        this.myEditFilename = logicName;
        for (var i = 1; i <= 100; i++) {
            this.rulers.push({ color: '#eee', column: i * 4, lineStyle: 'dashed' });
        }
        this.pluginsapiService.getPluginsAPI()
            .subscribe(function (response) {
            var result = response;
            for (var i = 0; i < result.length; i++) {
                _this.autocomplete_list.push({ text: 'sh.' + result[i], displayText: 'sh.' + result[i] + ' | Plugin' });
            }
        });
        this.itemsapiService.getItemList()
            .subscribe(function (response) {
            var result = response;
            for (var i = 0; i < result.length; i++) {
                _this.item_list.push({ text: result[i], displayText: result[i] });
                _this.item_list.push({ text: result[i], displayText: 'sh.' + result[i] });
                _this.autocomplete_list.push({ text: 'sh.' + result[i] + '()', displayText: 'sh.' + result[i] + '() | Item' });
            }
        });
        this.fileService.readFile('logics', this.myEditFilename)
            .subscribe(function (response) {
            _this.myTextarea = response;
            console.log('ngOnInit', 'read', { response: response });
            var editor = _this.codeEditor.codeMirror;
            editor.setOption('lineSeparator', '\n');
            if (_this.myTextarea.indexOf('\r\n') >= 0) {
                editor.setOption('lineSeparator', '\r\n');
            }
            _this.myTextareaOrig = _this.myTextarea;
        });
        this.registerAutocompleteHelper('autocompleteHint', this.autocomplete_list);
        this.registerAutocompleteHelper('autocompleteWatchItemsHint', this.item_list);
        // @ts-ignore
        codemirror__WEBPACK_IMPORTED_MODULE_4__["commands"].autocomplete_shng = function (cm) {
            // @ts-ignore
            codemirror__WEBPACK_IMPORTED_MODULE_4__["showHint"](cm, codemirror__WEBPACK_IMPORTED_MODULE_4__["hint"].autocompleteHint);
        };
        // @ts-ignore
        codemirror__WEBPACK_IMPORTED_MODULE_4__["commands"].autocomplete_shng_watch_items = function (cm) {
            // @ts-ignore
            codemirror__WEBPACK_IMPORTED_MODULE_4__["showHint"](cm, codemirror__WEBPACK_IMPORTED_MODULE_4__["hint"].autocompleteWatchItemsHint);
        };
    };
    LogicsEditComponent.prototype.registerAutocompleteHelper = function (name, curDict) {
        codemirror__WEBPACK_IMPORTED_MODULE_4__["registerHelper"]('hint', name, function (editor) {
            var cur = editor.getCursor();
            var curLine = editor.getLine(cur.line);
            var start = cur.ch;
            var end = start;
            var charexp = /[\w\.$]+/;
            while (end < curLine.length && charexp.test(curLine.charAt(end))) {
                end++;
            }
            while (start && charexp.test(curLine.charAt(start - 1))) {
                start--;
            }
            var curWord = start !== end && curLine.slice(start, end);
            if (curWord.length > 1) {
                curWord = curWord.trim();
            }
            var regex = new RegExp('^' + curWord, 'i');
            if (curWord.length >= 3) {
                var oCompletions = {
                    list: (!curWord ? [] : curDict.filter(function (item) {
                        return item['displayText'].match(regex);
                    })).sort(function (a, b) {
                        var nameA = a.text.toLowerCase();
                        var nameB = b.text.toLowerCase();
                        if (nameA < nameB) { // sort string ascending
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        return 0; // default return value (no sorting)
                    }),
                    from: codemirror__WEBPACK_IMPORTED_MODULE_4__["Pos"](cur.line, start),
                    to: codemirror__WEBPACK_IMPORTED_MODULE_4__["Pos"](cur.line, end)
                };
                return oCompletions;
            }
        });
    };
    LogicsEditComponent.prototype.ngAfterViewChecked = function () {
        var editor1 = this.codeEditor.codeMirror;
        var editor2 = this.codeEditorWatchItems.codeMirror;
        editor2.refresh();
        if (editor1.getOption('fullScreen')) {
            editor1.setSize('100vw', '100vh');
        }
        else {
            editor1.setSize('93vw', '74vh');
        }
        editor1.refresh();
        editor1.on('keyup', function (cm, event) {
            if (!cm.state.completionActive && /*Enables keyboard navigation in autocomplete list*/
                (event.keyCode !== 8 &&
                    event.keyCode !== 9 &&
                    event.keyCode !== 13 &&
                    event.keyCode !== 27 &&
                    event.keyCode !== 37 &&
                    event.keyCode !== 38 &&
                    event.keyCode !== 39 &&
                    event.keyCode !== 40 &&
                    event.keyCode !== 46)) {
                // @ts-ignore
                codemirror__WEBPACK_IMPORTED_MODULE_4__["commands"].autocomplete_shng(cm, null, { completeSingle: false });
            }
            ;
        });
        editor2.on('keyup', function (cm, event) {
            if (!cm.state.completionActive && /*Enables keyboard navigation in autocomplete list*/
                (event.keyCode !== 8 &&
                    event.keyCode !== 9 &&
                    event.keyCode !== 13 &&
                    event.keyCode !== 27 &&
                    event.keyCode !== 37 &&
                    event.keyCode !== 38 &&
                    event.keyCode !== 39 &&
                    event.keyCode !== 40 &&
                    event.keyCode !== 46)) {
                // @ts-ignore
                codemirror__WEBPACK_IMPORTED_MODULE_4__["commands"].autocomplete_shng_watch_items(cm, null, { completeSingle: false });
            }
            ;
        });
        /* prohibit new lines for watch items input field */
        editor2.on('beforeChange', function (cm, changeObj) {
            console.log(changeObj);
            var typedNewLine = changeObj.origin === '+input' && typeof changeObj.text === 'object' && changeObj.text.join('') === '';
            if (typedNewLine) {
                return changeObj.cancel();
            }
            var pastedNewLine = changeObj.origin === 'paste' && typeof changeObj.text === 'object' && changeObj.text.length > 1;
            if (pastedNewLine) {
                var newText = changeObj.text.join(' ');
                return changeObj.update(null, null, [newText]);
            }
            return null;
        });
    };
    LogicsEditComponent.prototype.saveConfig = function () {
        // console.log('LoggingConfigurationComponent.saveConfig');
        var _this = this;
        this.fileService.saveFile('logics', this.myEditFilename, this.myTextarea)
            .subscribe(function (response) {
            _this.myTextareaOrig = _this.myTextarea;
        });
        var editor = this.codeEditor.codeMirror;
        editor.refresh();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LogicsEditComponent.prototype, "codeEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('watchitems'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LogicsEditComponent.prototype, "codeEditorWatchItems", void 0);
    LogicsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logics-edit',
            template: __webpack_require__(/*! ./logics-edit.component.html */ "./src/app/logics/logics-edit/logics-edit.component.html"),
            styles: [__webpack_require__(/*! ./logics-edit.component.css */ "./src/app/logics/logics-edit/logics-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_services_files_api_service__WEBPACK_IMPORTED_MODULE_3__["FilesApiService"],
            _common_services_plugins_api_service__WEBPACK_IMPORTED_MODULE_5__["PluginsApiService"],
            _common_services_items_api_service__WEBPACK_IMPORTED_MODULE_6__["ItemsApiService"]])
    ], LogicsEditComponent);
    return LogicsEditComponent;
}());



/***/ }),

/***/ "./src/app/logics/logics-list/logics-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/logics/logics-list/logics-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naWNzL2xvZ2ljcy1saXN0L2xvZ2ljcy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ljcy9sb2dpY3MtbGlzdC9sb2dpY3MtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/logics/logics-list/logics-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/logics/logics-list/logics-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'LOGICS.USERLOGICS'|translate }}\">\r\n      <p style=\"margin-left: 10px; margin-right: 10px;\">\r\n        <p></p>\r\n        <table id=\"1\" class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th style=\"width: 30px; border-top:0;\"></th>\r\n          <th class=\"p-1\" style=\"width: 320px; border-top: 0;\">{{ 'LOGICS.LOGIC'|translate }}</th>\r\n          <th class=\"p-1\" style=\"width: 220px; border-top: 0;\">{{ 'LOGICS.NEXT_EXEC'|translate }}</th>\r\n          <th class=\"p-1\" style=\"width: 70px;  border-top: 0;\">{{ 'LOGICS.CYCLE'|translate }}</th>\r\n          <th class=\"p-1\" style=\"width: 150px; border-top: 0;\">{{ 'LOGICS.CRONTAB'|translate }}</th>\r\n          <th class=\"p-1\" style=\"width: 120px; border-top: 0;\">{{ 'LOGICS.WATCH_ITEMS'|translate }}</th>\r\n          <th class=\"p-1\" style=\"width: 250px; border-top: 0;\">{{ 'LOGICS.FILENAME'|translate }}</th>\r\n          <th class=\"p-1\" style=\"width: 260px; border-top: 0;\">\r\n            <div style=\"width: 200px\">\r\n              <button pButton type=\"button\" style=\"margin-left: 0px; margin-top: 5px; font-size: medium;\" id=\"btn-monitor\" [disabled]=\"false\" (click)=\"newLogic();\" icon=\"fa fa-plus\" label=\"{{ 'BUTTON.NEW_LOGIC'|translate }}\" class=\"ui-button-success float-sm-left\"></button>\r\n              {{ 'LOGICS.ACTIONS'|translate }}\r\n            </div>\r\n          </th>\r\n        </tr>\r\n\r\n        </thead>\r\n        <tbody>\r\n        <ng-container *ngIf=\"userlogics?.length > 0\">\r\n          <ng-container *ngFor=\"let logic of userlogics\">\r\n            <ng-container *ngIf=\"logic.userlogic === true\">\r\n              <tr>\r\n                <ng-container *ngIf=\"logic.enabled === true, then logicEnabled; else logicDisabled\"></ng-container>\r\n                <ng-template #logicEnabled>\r\n                  <td class=\"p-1 pl-2\"><span style=\"color: var(--shng-green);\" class=\"fas fa-play-circle\"></span></td>\r\n                  <td class=\"p-1\">{{ logic.name }}</td>\r\n                  <td class=\"p-1\">{{ logic.next_exec }}</td>\r\n                  <td class=\"p-1\">{{ logic.cycle }}</td>\r\n                  <td class=\"p-1\">{{ logic.crontab }}</td>\r\n                </ng-template>\r\n                <ng-template #logicDisabled>\r\n                  <td class=\"p-1 pl-2\"><span style=\"color: var(--shng-red)\" class=\"fas fa-pause-circle\"></span></td>\r\n                  <td class=\"p-1\">{{ logic.name }}</td>\r\n                  <td class=\"p-1\" style=\"color: var(--shng-disabled)\">{{ logic.next_exec }}</td>\r\n                  <td class=\"p-1\" style=\"color: var(--shng-disabled)\">{{ logic.cycle }}</td>\r\n                  <td class=\"p-1\" style=\"color: var(--shng-disabled)\">{{ logic.crontab }}</td>\r\n                </ng-template>\r\n\r\n                <ng-container *ngIf=\"logic.watch_item_list?.length > 0\">\r\n                  <td style=\"cursor: pointer;\" (click)=\"details.show()\">\r\n                    <ng-container *ngIf=\"logic.enabled; then watchItemSizeEnabled; else watchItemSizeDisabled\"></ng-container>\r\n                      <ng-template #watchItemSizeEnabled>\r\n                        <span>\r\n                          {{ logic.watch_item_list?.length }}\r\n                          <span class=\"fas fa-search\"></span>\r\n                        </span>\r\n                      </ng-template>\r\n                      <ng-template #watchItemSizeDisabled>\r\n                        <span style=\"color:var(--shng-disabled);\">\r\n                          {{ logic.watch_item_list?.length }}\r\n                          <span class=\"fas fa-search\" style=\"color: var(--shng-disabled);\"></span>\r\n                        </span>\r\n                      </ng-template>\r\n                  </td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"logic.watch_item_list?.length === 0\">\r\n                  <td class=\"p-1\">-</td>\r\n                </ng-container>\r\n\r\n                <td class=\"p-1\">\r\n                  <ng-container *ngIf=\"logic.logictype === 'Blockly'; then blocklyLink; else noBlocklyLink\">\r\n                  </ng-container>\r\n                  <ng-template #blocklyLink></ng-template>\r\n                  <ng-template #noBlocklyLink>\r\n                    <!--\r\n                    <a class=\"text-shng\" [routerLink]=\"['/logics/edit', this.baseName(fn)]\">{{ this.baseName(fn) }}</a>\r\n                    <a class=\"text-shng\" href=\"../backend/logics_view.html?file_path={{ logic.pathname }}&logicname={{ logic.name }}\">{{ logic.filename }}</a>\r\n                    -->\r\n                    <a class=\"text-shng\" [routerLink]=\"['/logics/edit', logic.filename]\">{{ logic.filename }}</a>\r\n                  </ng-template>\r\n                </td>\r\n                <td class=\"p-1\">\r\n                  <ng-container *ngIf=\"logic.enabled; then logicEnabledActions; else logicDisabledActions\"></ng-container>\r\n                    <ng-template #logicEnabledActions>\r\n                      <button name=\"trigger\" title=\"{{ 'LOGICS.TRIGGER'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"triggerLogic(logic.name);\"><i class=\"fas fa-hand-pointer\"></i></button>\r\n                      <button name=\"reload\"  title=\"{{ 'LOGICS.RELOAD'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"reloadLogic(logic.name);\"><i class=\"fas fa-sync\"></i></button>\r\n                      <button name=\"disable\" title=\"{{ 'LOGICS.DISABLE'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"disableLogic(logic.name);\"><i class=\"fas fa-pause\"></i></button>\r\n                    </ng-template>\r\n                    <ng-template #logicDisabledActions>\r\n                      <button disabled=\"true\" name=\"trigger\" title=\"{{ 'LOGICS.TRIGGER'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\"><i class=\"fas fa-hand-pointer\"></i></button>\r\n                      <button name=\"reload\"  title=\"{{ 'LOGICS.RELOAD'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"reloadLogic(logic.name);\"><i class=\"fas fa-sync\"></i></button>\r\n                      <button name=\"enable\"  title=\"{{ 'LOGICS.ENABLE'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"enableLogic(logic.name);\"><i class=\"fas fa-play\"></i></button>\r\n                    </ng-template>\r\n                    <button name=\"unload\" title=\"{{ 'LOGICS.UNLOAD'|translate }}\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"unloadLogic(logic.name);\"><i class=\"fas fa-eject\"></i></button>\r\n                    <button name=\"delete\" title=\"{{ 'LOGICS.DELETE'|translate }}\" class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteLogic(logic.name, logic.filename);\"><i class=\"far fa-trash-alt\" aria-hidden=\"true\" style=\"color: var(--shng-red);\"></i></button>\r\n                </td>\r\n              </tr>\r\n              <div bsModal #details=\"bs-modal\" class=\"modal fade\" tabindex=\"1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n                <div class=\"modal-dialog modal-lg\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <h5 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">\r\n                        {{ 'LOGICS.WATCH_ITEMS'|translate }}\r\n                      </h5>\r\n                      <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"details.hide()\">\r\n                        <span aria-hidden=\"true\">&times;</span>\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <div class=\"card\" style=\"margin-bottom: 5px;\">\r\n                        <div class=\"card-body p-1\">\r\n                          <ng-container *ngFor=\"let watch_item of logic.watch_item_list\">\r\n                          <div class=\"item-box m-1 p-1\">{{ watch_item }}</div>\r\n                          </ng-container>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n          </ng-container>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"userlogics?.length == 0\">\r\n          <tr><td colspan=\"8\">{{ 'LOGICS.NO_DATA'|translate }}</td></tr>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"newlogics?.length >0\">\r\n          <tr><th colspan=\"8\">{{ 'LOGICS.NEW_LOGICS'|translate }}</th><tr>\r\n        </ng-container>\r\n        <ng-container *ngFor=\"let logic of newlogics\">\r\n          <ng-container *ngIf=\"logic.userlogic === true\">\r\n            <tr>\r\n              <td class=\"p-1 pl-2\">\r\n                <ng-container *ngIf=\"logic.enabled === true, then logicEnabled; else logicDisabled\"></ng-container>\r\n                <ng-template #logicEnabled>\r\n                  <span style=\"color: var(--shng-green);\" class=\"fas fa-play-circle\"></span>\r\n                </ng-template>\r\n                <ng-template #logicDisabled>\r\n                  <span style=\"color: var(--shng-red)\" class=\"fas fa-pause-circle\"></span>\r\n                </ng-template>\r\n              </td>\r\n              <td class=\"p-1\">{{ logic.name }}</td>\r\n              <td class=\"p-1\"></td>\r\n              <td class=\"p-1\"></td>\r\n              <td class=\"p-1\"></td>\r\n              <td class=\"p-1\"></td>\r\n              <td class=\"p-1\">\r\n                <ng-container *ngIf=\"logic.logictype === 'Blockly'; then blocklyLink; else noBlocklyLink\">\r\n                </ng-container>\r\n                <ng-template #blocklyLink></ng-template>\r\n                <ng-template #noBlocklyLink>\r\n                  <a class=\"text-shng\" href=\"logics_view.html?file_path={{ logic.pathname }}&logicname={{ logic.name }}\">{{ logic.filename }}</a>\r\n                </ng-template>\r\n              </td>\r\n              <td class=\"p-1\">\r\n                <ng-container *ngIf=\"logic.filename != ''\">\r\n                  <button name=\"add\" title=\"{{ 'LOGICS.ADD'|translate }}\" type=\"submit\" class=\"btn btn-outline-dark btn-sm mr-1\" (click)=\"loadLogic(logic.name);\"><i class=\"fas fa-plus\"></i></button>\r\n                </ng-container>\r\n                <button name=\"delete\" title=\"{{ 'LOGICS.DELETE'|translate }}\" class=\"btn btn-outline-danger btn-sm\" (click)=\"deleteLogic(logic.name);\"><i class=\"far fa-trash-alt\" aria-hidden=\"true\" style=\"color: var(--shng-red);\"></i></button>\r\n              </td>\r\n            </tr>\r\n          </ng-container>\r\n        </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'LOGICS.SYSTEMLOGICS'|translate }}\">\r\n      <div style=\"margin-left: 10px; margin-right: 10px;\">\r\n        <p></p>\r\n        <table id=\"2\" class=\"table table-striped table-hover\">\r\n          <thead>\r\n          <tr class=\"shng_heading\">\r\n            <th style=\"width: 30px; border-top: 0\"></th>\r\n            <th class=\"p-1\" style=\"width: 150px; border-top: 0\">{{ 'LOGICS.LOGIC'|translate }}</th>\r\n            <th class=\"p-1\" style=\"width: 200px; border-top: 0\">{{ 'LOGICS.NEXT_EXEC'|translate }}</th>\r\n            <th class=\"p-1\" style=\"width: 250px; border-top: 0\">{{ 'LOGICS.CYCLE'|translate }}</th>\r\n            <th class=\"p-1\" style=\"width: 160px; border-top: 0\">{{ 'LOGICS.CRONTAB'|translate }}</th>\r\n            <th class=\"p-1\" style=\"width: 150px; border-top: 0\">{{ 'LOGICS.WATCH_ITEMS'|translate }}</th>\r\n            <th class=\"p-1\" style=\"width: 120px; border-top: 0\">{{ 'LOGICS.FILENAME'|translate }}</th>\r\n            <th class=\"p-1\" style=\"width: 40px;  border-top: 0;\" >{{ 'LOGICS.ACTIONS'|translate }}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <ng-container *ngIf=\"systemlogics?.length > 0\">\r\n            <ng-container *ngFor=\"let logic of systemlogics\">\r\n              <ng-container *ngIf=\"logic.userlogic === false\">\r\n                <tr>\r\n                  <td class=\"p-1 pl-2\">\r\n                    <ng-container *ngIf=\"logic.enabled === true, then logicEnabled; else logicDisabled\"></ng-container>\r\n                    <ng-template #logicEnabled>\r\n                      <span style=\"color: green;\" class=\"fas fa-play-circle\"></span>\r\n                    </ng-template>\r\n                    <ng-template #logicDisabled>\r\n                      <span style=\"color: red\" class=\"fas fa-pause-circle\"></span>\r\n                    </ng-template>\r\n                  </td>\r\n                  <td class=\"p-1\">{{ logic.name }}</td>\r\n                  <td class=\"p-1\">{{ logic.next_exec }}</td>\r\n                  <td class=\"p-1\">{{ logic.cycle }}</td>\r\n                  <td class=\"p-1\">{{ logic.crontab }}</td>\r\n                  <td class=\"p-1\"></td>\r\n                  <td class=\"p-1\">{{ logic.filename }}</td>\r\n                  <td></td>\r\n                </tr>\r\n              </ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"systemlogics?.length == 0\">\r\n            <tr><td colspan=\"8\">{{ 'LOGICS.NO_DATA'|translate }}</td></tr>\r\n          </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </tab>\r\n  </tabset>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n  -- Confirm dialog vor configuration deletion\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"confirmdelete_display\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'LOGICS.DELETE_LOGIC'|translate}}\r\n  </p-header>\r\n  <br>\r\n  {{'LOGICS.DELETE_LOGIC_TEXT'|translate:delete_param}}\r\n  <br>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"fa fa-trash-alt\" (click)=\"deleteLogicConfirm()\" label=\"{{'BUTTON.DELETE'|translate}}\" class=\"ui-button-danger\"></button>\r\n    <button pButton type=\"button\" icon=\"fa fa-times\" (click)=\"deleteLogicAbort()\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<!--\r\n  -- Dialog for entering logic name and logic filename of a new logic\r\n  -->\r\n\r\n<p-dialog\r\n  header=\"\"\r\n  [(visible)]=\"newlogic_display\"\r\n  [modal]=\"true\"\r\n  blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [maximizable]=\"false\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'width':'600px', 'minWidth':'600px', 'minHeight':'200px'}\"\r\n>\r\n\r\n  <p-header>\r\n    {{'LOGICS.CREATE_LOGIC'|translate}}\r\n  </p-header>\r\n\r\n  {{'LOGICS.CREATE_LOGIC_TEXT'|translate}}\r\n    <br>\r\n  <br>\r\n    <label style=\"display: block;\">\r\n      <span style=\"display: inline-block; width: 80px;\">{{ 'LOGICS.LOGIC'|translate }}:</span>\r\n\r\n     <input [(ngModel)]=\"newlogic_name\" id=\"nlog\" type=\"text\" (input)=\"checkNewLogicInput();\" pInputText placeholder=\"\" style=\"position: absolute; margin-left: 100px\" [ngStyle]=\"{'width': 30}\" autofocus/>\r\n    </label>\r\n\r\n  <label style=\"display: block;\">\r\n    <span style=\"display: inline-block; width: 80px;\">{{ 'LOGICS.FILENAME'|translate }}:</span>\r\n    <input [(ngModel)]=\"newlogic_filename\" id=\"nfn\" type=\"text\" (input)=\"checkNewLogicInput();\" pInputText placeholder=\"\" style=\"position: absolute; margin-left: 100px\" [ngStyle]=\"{'width': 30}\" autofocus/>\r\n  </label>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"pi pi-check\" (click)=\"this.createLogic()\" [(disabled)]=\"!newlogic_add_enabled\" label=\"{{'BUTTON.CREATE'|translate}}\" class=\"ui-button-success\" autofocus></button>\r\n    <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"newlogic_display=false\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/logics/logics-list/logics-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/logics/logics-list/logics-list.component.ts ***!
  \*************************************************************/
/*! exports provided: LogicsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicsListComponent", function() { return LogicsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _common_services_logics_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/logics-api.service */ "./src/app/common/services/logics-api.service.ts");
/* harmony import */ var _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/olddata.service */ "./src/app/common/services/olddata.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var LogicsListComponent = /** @class */ (function () {
    function LogicsListComponent(http, dataService, modalService, router, route) {
        this.http = http;
        this.dataService = dataService;
        this.modalService = modalService;
        this.router = router;
        this.route = route;
        this.newlogic_display = false;
        this.newlogic_name = '';
        this.newlogic_filename = '';
        this.newlogic_add_enabled = true;
        this.confirmdelete_display = false;
        this.logicToDelete = '';
        this.userlogics = [];
        this.systemlogics = [];
    }
    LogicsListComponent.prototype.ngOnInit = function () {
        console.log('LogicsListComponent.ngOnInit');
        this.getLogics();
        /*
            this.dataService.getLogics()
              .subscribe(
                (response) => {
                    this.logics = <LogicsinfoType[]>response['logics'];
                    this.logics.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
                    this.userlogics = [];
                    this.systemlogics = [];
                    for (const logic of this.logics) {
                      if (logic.userlogic === true) {
                        this.userlogics.push(logic);
                      } else {
                        this.systemlogics.push(logic);
                      }
                    }
                    this.newlogics = <LogicsinfoType[]>response['logics_new'];
                    this.newlogics.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
                }
              );
        */
    };
    LogicsListComponent.prototype.baseName = function (str, withExtension) {
        if (withExtension === void 0) { withExtension = true; }
        var base = str;
        base = base.substring(base.lastIndexOf('/') + 1);
        if (!withExtension && base.lastIndexOf('.') !== -1) {
            base = base.substring(0, base.lastIndexOf('.'));
        }
        return base;
    };
    LogicsListComponent.prototype.getLogics = function () {
        var _this = this;
        this.dataService.getLogics()
            .subscribe(function (response) {
            _this.logics = response['logics'];
            _this.logics.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
            _this.userlogics = [];
            _this.systemlogics = [];
            for (var _i = 0, _a = _this.logics; _i < _a.length; _i++) {
                var logic = _a[_i];
                if (logic.userlogic === true) {
                    _this.userlogics.push(logic);
                }
                else {
                    _this.systemlogics.push(logic);
                }
            }
            _this.newlogics = response['logics_new'];
            _this.newlogics.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        });
    };
    LogicsListComponent.prototype.triggerLogic = function (logicName) {
        var _this = this;
        // console.log('triggerLogic', {logicName});
        this.dataService.setLogicState(logicName, 'trigger')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.reloadLogic = function (logicName) {
        var _this = this;
        // console.log('reloadLogic', {logicName});
        this.dataService.setLogicState(logicName, 'reload')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.disableLogic = function (logicName) {
        var _this = this;
        // console.log('disableLogic', {logicName});
        this.dataService.setLogicState(logicName, 'disable')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.enableLogic = function (logicName) {
        var _this = this;
        // console.log('enableLogic', {logicName});
        this.dataService.setLogicState(logicName, 'enable')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.unloadLogic = function (logicName) {
        var _this = this;
        // console.log('unloadLogic', {logicName});
        this.dataService.setLogicState(logicName, 'unload')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.loadLogic = function (logicName) {
        var _this = this;
        // console.log('loadLogic', {logicName});
        this.dataService.setLogicState(logicName, 'load')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.newLogic = function () {
        console.log('newLogic');
        this.newlogic_name = '';
        this.newlogic_filename = '';
        this.newlogic_add_enabled = false;
        this.newlogic_display = true;
    };
    LogicsListComponent.prototype.checkNewLogicInput = function () {
        this.newlogic_add_enabled = true;
        if (this.newlogic_name === '' || this.newlogic_filename === '') {
            this.newlogic_add_enabled = false;
            return;
        }
        for (var i = 0; i < this.logics.length; i++) {
            // console.log({i}, this.logics[i].name);
            if (this.newlogic_name === this.logics[i].name) {
                this.newlogic_add_enabled = false;
            }
        }
        for (var i = 0; i < this.logics.length; i++) {
            // console.log({i}, this.baseName(this.logics[i].pathname, false));
            if (this.newlogic_filename === this.baseName(this.logics[i].pathname, false)) {
                this.newlogic_add_enabled = false;
            }
        }
    };
    LogicsListComponent.prototype.createLogic = function () {
        var _this = this;
        console.warn('createLogic', this.newlogic_name, this.newlogic_filename);
        this.newlogic_display = false;
        this.dataService.setLogicState(this.newlogic_name, 'create', this.newlogic_filename)
            .subscribe(function (response) {
            _this.getLogics();
            _this.router.navigate(['/logics/edit', _this.newlogic_filename + '.py']);
        });
    };
    LogicsListComponent.prototype.deleteLogic = function (logicName, fileName) {
        // console.log('deleteLogic', {logicName});
        this.logicToDelete = logicName;
        this.delete_param = { 'config': logicName, 'filename': fileName };
        this.confirmdelete_display = true;
    };
    LogicsListComponent.prototype.deleteLogicConfirm = function () {
        var _this = this;
        // console.log('deleteLogicConfirm', this.logicToDelete);
        this.confirmdelete_display = false;
        this.dataService.setLogicState(this.logicToDelete, 'delete')
            .subscribe(function (response) {
            _this.getLogics();
        });
    };
    LogicsListComponent.prototype.deleteLogicAbort = function () {
        this.confirmdelete_display = false;
        this.logicToDelete = '';
    };
    LogicsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logics',
            template: __webpack_require__(/*! ./logics-list.component.html */ "./src/app/logics/logics-list/logics-list.component.html"),
            providers: [_common_services_olddata_service__WEBPACK_IMPORTED_MODULE_5__["OlddataService"]],
            styles: [__webpack_require__(/*! ./logics-list.component.css */ "./src/app/logics/logics-list/logics-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _common_services_logics_api_service__WEBPACK_IMPORTED_MODULE_4__["LogicsApiService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LogicsListComponent);
    return LogicsListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n\r\n<div style=\"margin: 0 auto; margin-top: 100px; width: 400px;\">\r\n\r\n  <form class=\"form-signin\" #f=\"ngForm\" (ngSubmit)=\"signIn(f.value)\">\r\n    <h2 class=\"form-signin-heading\">{{ 'LOGIN.PLEASE_SIGN_IN'|translate }}</h2>\r\n\r\n    <div *ngIf=\"invalidLogin\" class=\"alert alert-danger\">{{ 'LOGIN.INVALID_SIGNIN'|translate }}</div>\r\n    <div *ngIf=\"authService.expiredLogin\" class=\"alert alert-warning\">{{ 'LOGIN.EXPIRED_SIGNIN'|translate }}</div>\r\n\r\n    <label for=\"inputUsername\" class=\"sr-only\">{{ 'LOGIN.USERNAME'|translate }}</label>\r\n    <input type=\"text\" autocomplete=\"off\" id=\"inputUsername\" name=\"username\" ngModel class=\"form-control\" placeholder=\"{{ 'LOGIN.USERNAME'|translate }}\" required autofocus>\r\n    <label for=\"inputPassword\" class=\"sr-only\">{{ 'LOGIN.PASSWORD'|translate }}</label>\r\n    <input type=\"password\" id=\"inputPassword\" name=\"password\" ngModel class=\"form-control\" placeholder=\"{{ 'LOGIN.PASSWORD'|translate }}\" required>\r\n\r\n    <br>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">{{ 'LOGIN.SIGN_IN'|translate }}</button>\r\n  </form>\r\n\r\n</div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/services/auth.service */ "./src/app/common/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
    }
    LoginComponent.prototype.signIn = function (credentials) {
        var _this = this;
        this.authService.login(credentials)
            .subscribe(function (result) {
            if (result) {
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/']);
            }
            else {
                _this.invalidLogin = true;
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logs/log-display/log-display.component.css":
/*!************************************************************!*\
  !*** ./src/app/logs/log-display/log-display.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.CodeMirror {\r\n  width:100%;\r\n  height:75vh;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy9sb2ctZGlzcGxheS9sb2ctZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9sb2dzL2xvZy1kaXNwbGF5L2xvZy1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLkNvZGVNaXJyb3Ige1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0Ojc1dmg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/logs/log-display/log-display.component.html":
/*!*************************************************************!*\
  !*** ./src/app/logs/log-display/log-display.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 60px;\">\r\n  <h6>SmartHomeNG {{ 'LOGS.LOGFILE'|translate }}:\r\n    <p-dropdown [style]=\"{'width':'300px'}\" [options]=\"logs\" [(ngModel)]=\"selectedLog\" placeholder=\"{{ 'LOGS.SELECT_LOG'|translate }}\" (onChange)=\"fillTimeframe()\" [showClear]=\"true\"></p-dropdown>\r\n    &nbsp; {{ 'LOGS.TIMEFRAME'|translate }}:\r\n    <p-dropdown [style]=\"{'width':'210px'}\" [(options)]=\"files\" [(ngModel)]=\"selectedFile\" placeholder=\"{{ 'LOGS.SELECT_FILE'|translate }}\" (onChange)=\"changedTimeframe()\" [showClear]=\"true\"></p-dropdown>\r\n    &nbsp; &nbsp; <button pButton type=\"button\" (click)=\"this.readLogfile()\" [disabled]=\"(selectedLog === null) || (selectedFile === null)\" label=\"{{'BUTTON.RELOAD_LOG'|translate}}\" class=\"ui-button-success\"></button>\r\n  </h6>\r\n\r\n\r\n  <div class=\"form-group\" style=\"display:inline; width: 98%\">\r\n    <div style=\"margin-top: 2px; float:left; font-size: 20px;\">{{ 'LOGS.FILTER'|translate }}:</div>\r\n    <input type=\"text\" class=\"form-control form-control-sm\" id=\"text_filter\" pInputText [(ngModel)]=\"text_filter\" style= \"margin-top: 2px; margin-left: 10px; width: 395px; float:left;\" (ngModelChange)=\"filterLogChunk()\">\r\n    <!--\r\n    <button pButton label=\"{{ 'BUTTON.APPLY_FILTER'|translate }}\" type=\"button\" style=\"margin-top: 2px; margin-left: 12px; margin-right: 10px\" icon=\"fa fa-filter\" (click)=\"filterLogChunk()\" class=\"float-sm-left ui-button-success\"></button>\r\n    -->\r\n    <p-dropdown [style]=\"{'margin-left': '10px', 'width':'120px'}\" [options]=\"loglevels\" [(ngModel)]=\"level_filter\" (onChange)=\"filterLogChunk()\" [showClear]=\"false\"></p-dropdown>\r\n    <button pButton label=\"{{ 'BUTTON.CLEAR_FILTER'|translate }}\" type=\"button\" style=\"margin-top: 2px; margin-left: 12px; margin-right: 10px\" icon=\"fa fa-filter\" (click)=\"text_filter = ''; level_filter = 'ALL'; filterLogChunk()\" class=\"ui-button-success\"></button>\r\n\r\n    <button pButton type=\"button\" style=\"margin-top: 2px; margin-left: 31px\" [disabled]=\"first_chunk\" icon=\"fa fa-fast-backward\" (click)=\"readLogfile(1)\" class=\"ui-button-success\"></button>\r\n    <button pButton type=\"button\" style=\"margin-top: 2px; margin-left: 2px; margin-right: 5px\" [disabled]=\"first_chunk\" icon=\"fa fa-step-backward\" (click)=\"readLogfile(chunk_no - 1)\" class=\"ui-button-success\"></button>\r\n    {{ chunk_no }}\r\n    <button pButton type=\"button\" style=\"margin-top: 2px; margin-left: 5px\" [disabled]=\"last_chunk\" icon=\"fa fa-step-forward\" (click)=\"readLogfile(chunk_no + 1)\" class=\"ui-button-success\"></button>\r\n    <button pButton type=\"button\" style=\"margin-top: 2px; margin-left: 2px\" [disabled]=\"last_chunk\" icon=\"fa fa-fast-forward\" (click)=\"readLogfile(0)\" class=\"ui-button-success\"></button>\r\n    <button pButton type=\"button\" style=\"margin-top: 2px; margin-left: 10px;\" title=\"{{ 'LOGS.SCROLL_DOWN'|translate }}\" icon=\"fa fa-arrow-circle-down\" (click)=\"scrollDown()\" class=\"ui-button-success\"></button>\r\n\r\n<!--\r\n    <ng-container *ngIf=\"cmOptions.lineWrapping === true\">\r\n      <button pButton label=\"{{ 'LINEBREAK'|translate }}\" type=\"button\" style=\"margin-right: 0px\" icon=\"fa fa-check-square\" (click)=\"cmOptions.lineWrapping = !cmOptions.lineWrapping\" class=\"float-sm-right ui-button-success\"></button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"cmOptions.lineWrapping === false\">\r\n      <button pButton label=\"{{ 'LINEBREAK'|translate }}\" type=\"button\" style=\"margin-right: 0px\" icon=\"fa fa-square\" (click)=\"cmOptions.lineWrapping = !cmOptions.lineWrapping\" class=\"float-sm-right ui-button-success\"></button>\r\n    </ng-container>\r\n-->\r\n    <button pButton type=\"button\" [disabled]=\"false\" icon=\"fa fa-info\" style=\"margin-right: 10px;\" (click)=\"this.editorHelp_display = true;\" class=\"float-sm-right ui-button-success\"></button>\r\n\r\n  </div>\r\n\r\n  <div style=\"height: 100px; margin-left: 0px; margin-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n    <ngx-codemirror #codeeditor\r\n                    [options]=\"cmOptions\"\r\n                    [(ngModel)]=\"logfile_content\"\r\n                    [autoFocus]=\"true\"\r\n    ></ngx-codemirror>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n<!--\r\n  -- Progress spinner\r\n  -->\r\n\r\n<p-dialog\r\n  #logspinner\r\n  header=\"{{'LOGS.LOADCHUNK'|translate}}...\"\r\n  [ngStyle]=\"{'align': 'center'}\"\r\n  [(visible)]=\"spinner_display\"\r\n  [modal]=\"true\" blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n  [maximizable]=\"false\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'minWidth':'200px', 'minHeight':'100px'}\"\r\n>\r\n\r\n  <div align=\"center\">\r\n    <p-progressSpinner></p-progressSpinner>\r\n  </div>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n<div class=\"container-fluid\" style=\"overflow: none;\">\r\n  <div style=\"margin-bottom: 10px;\">\r\n    {% if log_lines %}\r\n      <textarea autocomplete=\"off\" id=\"log_file\" name=\"log_file\">\r\n        {% for line in log_lines %}{% if not loop.last %}{{ line }}{% else %}{{ line  | replace('\\n', '') }}{% endif %}{% endfor %}\r\n      </textarea>\r\n    {% else %}\r\n      {{ _('no data available') }}\r\n    {% endif %}\r\n  </div>\r\n</div>\r\n-->\r\n\r\n\r\n\r\n<!--\r\n<div class=\"container-fluid\">\r\n  <table>\r\n    <tr>\r\n      <td style=\"width: 300px; text-align: right;\">\r\n        <button type=\"button\" class=\"btn btn-shng btn-sm\" onclick=\"window.open('log_dump.html?logfile={{ logfile }}')\">{{ _('Logfile speichern','button') }}</button>\r\n      </td>\r\n    </tr>\r\n  </table>\r\n</div>\r\n\r\n<script type=\"text/javascript\" language=\"javascript\">\r\n  var logCodeMirror = CodeMirror.fromTextArea(document.getElementById(\"log_file\"), {\r\n    lineNumbers: true,\r\n    mode: \"{{ mode }}\",\r\n    readOnly: true,\r\n    indentUnit: 4,\r\n    lineSeparator: '\\n',\r\n    mode: 'ttcn',\r\n    lineWrapping: false,\r\n    firstLineNumber: {% if current_page > 1 %}{{ (current_page-1) * 1000 +1}}{% else %}1{% endif %},\r\n  indentWithTabs: false\r\n  });\r\n\r\n  window.addEventListener(\"resize\", function(){resizeCodeMirror(logCodeMirror, 75)}, false);\r\n  resizeCodeMirror(logCodeMirror, 75);\r\n\r\n  $('#linewrapping').click(function(e) {\r\n    switchLineWrapping(logCodeMirror)\r\n  });\r\n\r\n  {% if current_page <= 1 %}$('#fast-backward').prop('disabled', true);$('#step-backward').prop('disabled', true);{% endif %}\r\n  {% if current_page >= pages %}$('#fast-forward').prop('disabled', true);$('#step-forward').prop('disabled', true);{% endif %}\r\n</script>\r\n-->\r\n\r\n\r\n<!--\r\n    -- Display help dialog\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"editorHelp_display\" [closable]=\"true\" [modal]=\"true\" dynamic=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'HELP.EDITOR-KEYS'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <table>\r\n    <thead>\r\n    <th><u>{{'HELP.KEY'|translate}}</u></th>\r\n    <th style=\"width: 20px;\"></th>\r\n    <th><u>{{'HELP.DESCRIPTION'|translate}}</u></th>\r\n    </thead>\r\n    <tbody>\r\n    <!--\r\n    <tr><td>Tab</td>          <td></td> <td>{{'HELP.TAB'|translate}}</td></tr>\r\n    <tr><td>Shift-Tab</td>    <td></td> <td>{{'HELP.SHIFT-TAB'|translate}}</td></tr>\r\n    -->\r\n    <tr><td>F11</td>          <td></td> <td>{{'HELP.F11'|translate}}</td></tr>\r\n    <tr><td>Esc</td>          <td></td> <td>{{'HELP.ESC'|translate}}</td></tr>\r\n    <!--\r\n    <tr><td>Ctrl-Q</td>       <td></td> <td>{{'HELP.CTRL-Q'|translate}}</td></tr>\r\n    <tr><td>Shift-Ctrl-Q</td> <td></td> <td>{{'HELP.SHIFT-CTRL-Q'|translate}}</td></tr>\r\n    -->\r\n    <tr><td>Ctrl-W</td>       <td></td> <td>{{'HELP.CTRL-W'|translate}}</td></tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"editorHelp_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/logs/log-display/log-display.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/logs/log-display/log-display.component.ts ***!
  \***********************************************************/
/*! exports provided: LogDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogDisplayComponent", function() { return LogDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_logs_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/logs-api.service */ "./src/app/common/services/logs-api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var LogDisplayComponent = /** @class */ (function () {
    function LogDisplayComponent(route, dataService, translate) {
        this.route = route;
        this.dataService = dataService;
        this.translate = translate;
        this.loglevels = [];
        this.logs_info = {};
        this.default_log = '';
        this.logs = [];
        this.selectedLog = null;
        this.files = [];
        this.selectedFile = null;
        this.displayLogfile = '';
        this.text_filter = '';
        this.level_filter = 'ALL';
        this.nbsp = String.fromCharCode(160);
        this.logfile_chunk = {};
        this.first_chunk = true;
        this.last_chunk = true;
        this.chunk_no = 1;
        this.logfile_content = '';
        this.cmOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'F11': function (cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                    // cm.getScrollerElement().style.maxHeight = 'none';
                },
                'Ctrl-W': function (cm) {
                    cm.setOption('lineWrapping', !cm.getOption('lineWrapping'));
                },
                'Esc': function (cm, fullScreen) {
                    if (cm.getOption('fullScreen')) {
                        cm.setOption('fullScreen', false);
                    }
                }
            },
            fullScreen: false,
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            // rulers: this.rulers,
            mode: 'ttcn',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        };
        this.editorHelp_display = false;
        this.spinner_display = false;
    }
    LogDisplayComponent.prototype.ngOnInit = function () {
        // console.log('LogDisplayComponent.ngOnInit');
        var _this = this;
        // test if component is called with a parameter and remove '.log' from the parameter
        var logParam = this.route.snapshot.paramMap['params']['logname'];
        if (logParam !== undefined) {
            if (logParam.endsWith('.log')) {
                logParam = logParam.slice(0, -4);
            }
        }
        console.log({ logParam: logParam });
        this.loglevels.push({ label: 'ALL', value: 'ALL' });
        this.loglevels.push({ label: 'DEBUG', value: ' DEBUG ' });
        this.loglevels.push({ label: 'INFO', value: ' INFO ' });
        this.loglevels.push({ label: 'WARNING', value: ' WARNING ' });
        this.loglevels.push({ label: 'ERROR', value: ' ERROR ' });
        this.loglevels.push({ label: 'CRITICAL', value: ' CRITICAL ' });
        this.dataService.getLogs()
            .subscribe(function (response) {
            _this.logs_info = response['logs'];
            _this.default_log = response['default'];
            _this.logs = [];
            for (var log in _this.logs_info) {
                if (_this.logs_info.hasOwnProperty(log)) {
                    _this.logs.push({ label: log, value: log });
                }
            }
            _this.selectedLog = null;
            if (logParam !== undefined) {
                if (logParam in _this.logs_info) {
                    _this.selectedLog = logParam;
                    _this.fillTimeframe(true);
                }
            }
            if (_this.selectedLog == null && _this.default_log in _this.logs_info) {
                _this.selectedLog = _this.default_log;
                _this.fillTimeframe(true);
            }
            // this.selectedFile = this.translate.instant('LOGS.ACTUAL');
            // console.log('getLogs', {response});
        });
    };
    LogDisplayComponent.prototype.ngAfterViewChecked = function () {
        var editor1 = this.codeEditor.codeMirror;
        if (editor1.getOption('fullScreen')) {
            editor1.setSize('100vw', '100vh');
        }
        else {
            editor1.setSize('97vw', '78vh');
        }
        editor1.refresh();
    };
    LogDisplayComponent.prototype.fillTimeframe = function (useActual) {
        if (useActual === void 0) { useActual = false; }
        if (this.selectedLog === null) {
            this.files = [];
            this.selectedFile = null;
            this.readLogfile();
        }
        else {
            this.files = [];
            // console.log('selectedLog:', this.selectedLog);
            this.logs_info[this.selectedLog].sort();
            this.logs_info[this.selectedLog].push(this.logs_info[this.selectedLog][0]);
            this.logs_info[this.selectedLog].splice(0, 1);
            this.logs_info[this.selectedLog].reverse();
            for (var i = 0; i < (this.logs_info[this.selectedLog]).length; i++) {
                var tf = this.logs_info[this.selectedLog][i][0];
                var tfsize = this.logs_info[this.selectedLog][i][1];
                var tfunit = 'KB';
                tf = tf.substr(String(this.selectedLog).length + 4);
                if (tf === '') {
                    tf = '.' + this.translate.instant('LOGS.ACTUAL');
                }
                if (Number(tfsize) > 1024) {
                    tfsize = (Number(tfsize) / 1024).toFixed(1);
                    tfunit = 'MB';
                }
                var wrk = { label: tf.substr(1) + ' (' + tfsize + tfunit + ')', value: this.logs_info[this.selectedLog][i][0] };
                this.files.push(wrk);
            }
            if (this.files.length === 1 || useActual) {
                this.selectedFile = this.files[0].value;
                this.readLogfile();
            }
            else {
                // use other preset?
                this.selectedFile = this.files[0].value;
                this.readLogfile();
            }
        }
        // console.log('files: ', this.files);
        // console.log('selectedFile: ', this.selectedFile);
    };
    LogDisplayComponent.prototype.changedTimeframe = function () {
        if (this.selectedFile === null) {
            this.readLogfile();
        }
        else {
            this.readLogfile();
        }
    };
    LogDisplayComponent.prototype.filterLogChunk = function () {
        this.logfile_content = this.logfile_chunk['loglines'].join('');
        this.logfile_content = '';
        this.cmOptions.lineNumbers = ((this.level_filter === 'ALL') && (this.text_filter === ''));
        // const filter = this.text_filter.replace(/ /g, this.nbsp);
        var filter = this.text_filter;
        for (var i = 0; i < this.logfile_chunk['loglines'].length; i++) {
            if (this.level_filter === 'ALL' || this.logfile_chunk['loglines'][i].indexOf(this.level_filter) > -1) {
                if (filter === '' || this.logfile_chunk['loglines'][i].indexOf(filter) > -1) {
                    this.logfile_content += this.logfile_chunk['loglines'][i];
                }
            }
        }
    };
    LogDisplayComponent.prototype.scrollDown = function () {
        this.codeEditor.codeMirror.execCommand('goDocEnd');
    };
    LogDisplayComponent.prototype.readLogfile = function (chunk) {
        var _this = this;
        if (chunk === void 0) { chunk = 1; }
        // console.log('selectedFile:', this.selectedFile);
        if (this.selectedLog === null || this.selectedFile === null) {
            this.displayLogfile = '';
            this.logfile_content = '';
        }
        else {
            this.spinner_display = true;
            this.displayLogfile = String(this.selectedFile);
            this.dataService.readLogfile(this.displayLogfile, chunk)
                .subscribe(function (response) {
                // console.log({response});
                _this.logfile_chunk = response;
                _this.first_chunk = (_this.logfile_chunk['lines'][0] === 1);
                _this.last_chunk = _this.logfile_chunk['lastchunk'];
                _this.chunk_no = _this.logfile_chunk['chunk'];
                _this.cmOptions.lineNumbers = true;
                _this.cmOptions.firstLineNumber = _this.logfile_chunk['lines'][0];
                if (_this.cmOptions.firstLineNumber !== undefined) {
                    for (var i = 0; i < _this.logfile_chunk['loglines'].length; i++) {
                        var wrk2 = '';
                        for (var c = 0; c < _this.logfile_chunk['loglines'][i].length; c++) {
                            if (_this.logfile_chunk['loglines'][i][c].charCodeAt(0) === 160) {
                                wrk2 += ' ';
                            }
                            else {
                                wrk2 += _this.logfile_chunk['loglines'][i][c];
                            }
                        }
                        _this.logfile_chunk['loglines'][i] = wrk2;
                    }
                }
                _this.filterLogChunk();
                _this.spinner_display = false;
            });
        }
        // console.log('displayLogfile: ', this.displayLogfile);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LogDisplayComponent.prototype, "codeEditor", void 0);
    LogDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logs',
            template: __webpack_require__(/*! ./log-display.component.html */ "./src/app/logs/log-display/log-display.component.html"),
            //  styles: ['.CodeMirror { width: 100%; height: 50vh; }' ],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./log-display.component.css */ "./src/app/logs/log-display/log-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _common_services_logs_api_service__WEBPACK_IMPORTED_MODULE_3__["LogsApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LogDisplayComponent);
    return LogDisplayComponent;
}());



/***/ }),

/***/ "./src/app/logs/logger-list/logger-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/logs/logger-list/logger-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy9sb2dnZXItbGlzdC9sb2dnZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9sb2dzL2xvZ2dlci1saXN0L2xvZ2dlci1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRhYi1zaG5nID4gYXtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOnJnYigxNjAsIDE2MCwgMTYwKTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/logs/logger-list/logger-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/logs/logger-list/logger-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <div class=\"table-responsive\">\r\n    <tabset #staticTabs>\r\n      <tab customClass=\"tab-shng\" heading=\"{{ 'LOGGERS.STANDARD'|translate }}\">\r\n        <table class=\"table table-striped table-hover loggerList\">\r\n          <thead>\r\n            <tr class=\"shng_heading\">\r\n              <th>{{ 'LOGGERS.LOGGER_NAME'|translate }}</th>\r\n              <th>{{ 'LOGGERS.LEVEL'|translate }}</th>\r\n              <th>{{ 'LOGGERS.HANDLERS'|translate }}</th>\r\n              <th>{{ 'LOGGERS.HANDLER_TYPES'|translate }}</th>\r\n              <th>{{ 'LOGGERS.LOGFILES'|translate }}</th>\r\n            </tr>\r\n            </thead>\r\n          <tbody>\r\n            <ng-container *ngFor=\"let l of loggersList\">\r\n              <ng-container *ngIf=\"l.startsWith('items.') || l.startsWith('logics.') || l === 'items' || l === 'logics'\">\r\n                <ng-container *ngIf=\"loggers[l].level !== undefined\">\r\n                  <tr>\r\n                    <td class=\"py-1\">{{ l }}</td>\r\n                    <td class=\"py-1\">\r\n                      <p-dropdown [options]=\"levelOptions\" [showClear]=\"false\" placeholder=\"{{levelDefault}}\" [(ngModel)]=\"loggers[l].active.level\" (ngModelChange)=\"levelChanged(l, $event)\"></p-dropdown>\r\n                    </td>\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngIf=\"loggers[l].handlers !== undefined\">\r\n                        <ng-container *ngFor=\"let h of loggers[l].handlers; let i = index\">\r\n                          <a>{{ h }}</a>\r\n                          <ng-container *ngIf=\"h !== '' && i < loggers[l].handlers.length - 1\">,<br></ng-container>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"loggers[l].handlers === undefined\">\r\n                        <a>( --> {{ l.split('.')[0] }} )</a>\r\n                      </ng-container>\r\n                    </td>\r\n\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngFor=\"let ah of loggers[l].active.handlers; let i = index\">\r\n                        <a>{{ ah }}</a>\r\n                        <ng-container *ngIf=\"h !== '' && i < loggers[l].active.handlers.length - 1\">,<br></ng-container>\r\n                      </ng-container>\r\n                    </td>\r\n\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngFor=\"let fn of loggers[l].active.logfiles; let i = index\">\r\n                        <a class=\"text-shng\" [routerLink]=\"['/logs/display', this.baseName(fn)]\">{{ this.baseName(fn) }}</a>\r\n                        <ng-container *ngIf=\"fn !== '' && i < loggers[l].active.logfiles.length - 1\">,<br></ng-container>\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n          </tbody>\r\n          <tfoot>\r\n            <br><br><br><br><br>\r\n          </tfoot>\r\n        </table>\r\n      </tab>\r\n\r\n      <tab customClass=\"tab-shng\" heading=\"{{ 'LOGGERS.PLUGINS'|translate }}\">\r\n        <table class=\"table table-striped table-hover loggerList\">\r\n          <thead>\r\n            <tr class=\"shng_heading\">\r\n              <th>{{ 'LOGGERS.LOGGER_NAME'|translate }}</th>\r\n              <th>{{ 'LOGGERS.LEVEL'|translate }}</th>\r\n              <th>{{ 'LOGGERS.HANDLERS'|translate }}</th>\r\n              <th>{{ 'LOGGERS.HANDLER_TYPES'|translate }}</th>\r\n              <th>{{ 'LOGGERS.LOGFILES'|translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngFor=\"let l of loggersList\">\r\n              <ng-container *ngIf=\"l.startsWith('plugins.') || l === 'plugins'\">\r\n                <ng-container *ngIf=\"loggers[l].level !== undefined\">\r\n                  <tr>\r\n                    <td class=\"py-1\">{{ l }}</td>\r\n                    <td class=\"py-1\">\r\n                      <p-dropdown [options]=\"levelOptions\" [showClear]=\"false\" placeholder=\"{{levelDefault}}\" [(ngModel)]=\"loggers[l].active.level\" (ngModelChange)=\"levelChanged(l, $event)\"></p-dropdown>\r\n                    </td>\r\n\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngFor=\"let h of loggers[l].handlers; let i = index\">\r\n                        <a>{{ h }}</a>\r\n                        <ng-container *ngIf=\"h !== '' && i < loggers[l].handlers.length - 1\">,<br></ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"loggers[l].handlers === undefined\">\r\n                        <a>( --> {{ l.split('.')[0] }} )</a>\r\n                      </ng-container>\r\n                    </td>\r\n\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngFor=\"let ah of loggers[l].active.handlers; let i = index\">\r\n                        <a>{{ ah }}</a>\r\n                        <ng-container *ngIf=\"h !== '' && i < loggers[l].active.handlers.length - 1\">,<br></ng-container>\r\n                      </ng-container>\r\n                    </td>\r\n\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngFor=\"let fn of loggers[l].active.logfiles; let i = index\">\r\n                        <a class=\"text-shng\" [routerLink]=\"['/logs/display', this.baseName(fn)]\">{{ this.baseName(fn) }}</a>\r\n                        <ng-container *ngIf=\"fn !== '' && i < loggers[l].active.logfiles.length - 1\">,<br></ng-container>\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n          </tbody>\r\n          <tfoot>\r\n            <br><br><br><br><br>\r\n          </tfoot>\r\n        </table>\r\n      </tab>\r\n\r\n      <tab customClass=\"tab-shng\" heading=\"{{ 'LOGGERS.ADVANCED'|translate }}\">\r\n        <table class=\"table table-striped table-hover loggerList\">\r\n          <thead>\r\n            <tr class=\"shng_heading\">\r\n              <th>{{ 'LOGGERS.LOGGER_NAME'|translate }}</th>\r\n              <th>{{ 'LOGGERS.LEVEL'|translate }}</th>\r\n              <th>{{ 'LOGGERS.HANDLERS'|translate }}</th>\r\n              <th>{{ 'LOGGERS.HANDLER_TYPES'|translate }}</th>\r\n              <th>{{ 'LOGGERS.LOGFILES'|translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n           <ng-container *ngIf=\"loggers !== undefined\">\r\n              <tr>\r\n                <td class=\"py-1\"><strong>root</strong></td>\r\n                <td class=\"py-1\"><strong>{{ loggers['root'].active.level }}</strong></td>\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngIf=\"loggers['root'].handlers\">\r\n                    <ng-container *ngFor=\"let h of loggers['root'].handlers; let i = index\">\r\n                      <a>{{ h }}</a>\r\n                      <ng-container *ngIf=\"h !== '' && i < loggers['root'].handlers.length - 1\">,<br></ng-container>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </td>\r\n\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngFor=\"let ah of loggers['root'].active.handlers; let i = index\">\r\n                    <a>{{ ah }}</a>\r\n                    <ng-container *ngIf=\"h !== '' && i < loggers['root'].active.handlers.length - 1\">,<br></ng-container>\r\n                  </ng-container>\r\n                </td>\r\n\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngFor=\"let fn of loggers['root'].active.logfiles; let i = index\">\r\n                    <a class=\"text-shng\" [routerLink]=\"['/logs/display', this.baseName(fn)]\">{{ this.baseName(fn) }}</a>\r\n                    <ng-container *ngIf=\"fn !== '' && i < loggers['root'].active.logfiles.length - 1\">,<br></ng-container>\r\n                  </ng-container>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngFor=\"let l of loggersList\">\r\n              <ng-container *ngIf=\"l.startsWith('lib.') || l.startsWith('modules.') || l === 'lib' || l === 'modules' || l === '__main__'\">\r\n                <ng-container *ngIf=\"loggers[l].level !== undefined\">\r\n                  <tr>\r\n                    <td class=\"py-1\">{{ l }}</td>\r\n                    <ng-container *ngIf=\"l !== '__main__'\">\r\n                      <td class=\"py-1\">\r\n                        <p-dropdown [options]=\"levelOptions\" [showClear]=\"false\" placeholder=\"{{levelDefault}}\" [(ngModel)]=\"loggers[l].active.level\" (ngModelChange)=\"levelChanged(l, $event)\"></p-dropdown>\r\n                      </td>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"l === '__main__'\">\r\n                      <td class=\"py-1\">{{ loggers[l].active.level }}</td>\r\n                    </ng-container>\r\n\r\n                    <td class=\"py-1\">\r\n                      <ng-container *ngIf=\"loggers[l].handlers\">\r\n                        <ng-container *ngFor=\"let h of loggers[l].handlers; let i = index\">\r\n                          <a>{{ h }}</a>\r\n                          <ng-container *ngIf=\"h !== '' && i < loggers[l].handlers.length - 1\">,<br></ng-container>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"loggers[l].handlers === undefined\">\r\n                        <a>( --> {{ l.split('.')[0] }} )</a>\r\n                      </ng-container>\r\n                    </td>\r\n\r\n                  <td class=\"py-1\">\r\n                    <ng-container *ngIf=\"loggers[l].active !== undefined\">\r\n                      <ng-container *ngFor=\"let ah of loggers[l].active.handlers; let i = index\">\r\n                        <a>{{ ah }}</a>\r\n                        <ng-container *ngIf=\"h !== '' && i < loggers[l].active.handlers.length - 1\">,<br></ng-container>\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </td>\r\n\r\n                  <td class=\"py-1\">\r\n                    <ng-container *ngIf=\"loggers[l].active !== undefined\">\r\n                      <ng-container *ngFor=\"let fn of loggers[l].active.logfiles; let i = index\">\r\n                        <a class=\"text-shng\" [routerLink]=\"['/logs/display', this.baseName(fn)]\">{{ this.baseName(fn) }}</a>\r\n                        <ng-container *ngIf=\"fn !== '' && i < loggers[l].active.logfiles.length - 1\">,<br></ng-container>\r\n                        <!--        <a class=\"text-shng\" href=\"log_view.html?logfile={{ get_basename(fn) }}\">{{ fn }}</a>  -->\r\n                      </ng-container>\r\n                    </ng-container>\r\n                  </td>\r\n                </tr>\r\n                </ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n          </tbody>\r\n          <tfoot>\r\n            <br><br><br><br><br>\r\n          </tfoot>\r\n        </table>\r\n      </tab>\r\n\r\n      <tab customClass=\"tab-shng\" heading=\"{{ 'LOGGERS.CUSTOM'|translate }}\">\r\n        <table class=\"table table-striped table-hover loggerList\">\r\n          <thead>\r\n          <tr class=\"shng_heading\">\r\n            <th>{{ 'LOGGERS.LOGGER_NAME'|translate }}</th>\r\n            <th>{{ 'LOGGERS.LEVEL'|translate }}</th>\r\n            <th>{{ 'LOGGERS.HANDLERS'|translate }}</th>\r\n            <th>{{ 'LOGGERS.HANDLER_TYPES'|translate }}</th>\r\n            <th>{{ 'LOGGERS.LOGFILES'|translate }}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <ng-container *ngFor=\"let l of loggersList\">\r\n            <ng-container *ngIf=\"!(l.startsWith('items.') || l.startsWith('logics.') || l === 'items' || l === 'logics' || l.startsWith('plugins.') || l === 'plugins' || l.startsWith('lib.') || l.startsWith('modules.') || l === 'lib' || l === 'modules' || l === 'root' || l === '__main__' )\">\r\n              <ng-container *ngIf=\"loggers[l].level !== undefined\">\r\n              <tr>\r\n                <td class=\"py-1\">{{ l }}</td>\r\n                <td class=\"py-1\">\r\n                  <p-dropdown [options]=\"levelOptions\" [showClear]=\"false\" placeholder=\"{{levelDefault}}\" [(ngModel)]=\"loggers[l].active.level\" (ngModelChange)=\"levelChanged(l, $event)\"></p-dropdown>\r\n                </td>\r\n<!--\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngFor=\"let f of loggers[l].filters; let i = index\">\r\n                    <a>{{ f }}</a>\r\n                    <ng-container *ngIf=\"h !== '' && i < loggers[l].filters.length - 1\">,<br></ng-container>\r\n                  </ng-container>\r\n                </td>\r\n-->\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngFor=\"let h of loggers[l].handlers; let i = index\">\r\n                    <a>{{ h }}</a>\r\n                    <ng-container *ngIf=\"h !== '' && i < loggers[l].handlers.length - 1\">,<br></ng-container>\r\n                  </ng-container>\r\n                </td>\r\n\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngFor=\"let ah of loggers[l].active.handlers; let i = index\">\r\n                    <a>{{ ah }}</a>\r\n                    <ng-container *ngIf=\"h !== '' && i < loggers[l].active.handlers.length - 1\">,<br></ng-container>\r\n                  </ng-container>\r\n                </td>\r\n\r\n                <td class=\"py-1\">\r\n                  <ng-container *ngFor=\"let fn of loggers[l].active.logfiles; let i = index\">\r\n                    <a class=\"text-shng\" [routerLink]=\"['/logs/display', this.baseName(fn)]\">{{ this.baseName(fn) }}</a>\r\n                    <ng-container *ngIf=\"fn !== '' && i < loggers[l].active.logfiles.length - 1\">,<br></ng-container>\r\n                  </ng-container>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          </tbody>\r\n          <tfoot>\r\n            <br><br><br><br><br>\r\n          </tfoot>\r\n        </table>\r\n      </tab>\r\n\r\n    </tabset>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/logs/logger-list/logger-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/logs/logger-list/logger-list.component.ts ***!
  \***********************************************************/
/*! exports provided: LoggerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerListComponent", function() { return LoggerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_services_loggers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/loggers-api.service */ "./src/app/common/services/loggers-api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var LoggerListComponent = /** @class */ (function () {
    function LoggerListComponent(dataService, router, translate) {
        this.dataService = dataService;
        this.router = router;
        this.translate = translate;
        this.levelOptions = [{ label: 'ERROR', value: 'ERROR' },
            { label: 'WARNING', value: 'WARNING' },
            { label: 'INFO', value: 'INFO' },
            { label: 'DEBUG', value: 'DEBUG' }
        ];
        this.levelDefault = 'WARNING';
    }
    LoggerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('LoggerListComponent.ngOnInit');
        this.dataService.getLoggers()
            .subscribe(function (response) {
            _this.loggers = response;
            _this.loggersList = Object.keys(_this.loggers);
            _this.loggersList = _this.loggersList.sort();
            console.log('getLoggers', { response: response });
        });
    };
    LoggerListComponent.prototype.baseName = function (str, withExtension) {
        if (withExtension === void 0) { withExtension = true; }
        var base = str;
        base = base.substring(base.lastIndexOf('/') + 1);
        if (!withExtension && base.lastIndexOf('.') !== -1) {
            base = base.substring(0, base.lastIndexOf('.'));
        }
        return base;
    };
    LoggerListComponent.prototype.levelChanged = function (logger, level) {
        if (level === null) {
            // console.log('Setting to default');
            this.loggers[logger].active.level = this.levelDefault;
        }
        console.log({ logger: logger }, { level: level }, this.loggers[logger]);
        this.dataService.setLoggerLevel(logger, level)
            .subscribe(function (response) {
        });
        this.loggers[logger].level = this.loggers[logger].active.level;
    };
    LoggerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logger-list',
            template: __webpack_require__(/*! ./logger-list.component.html */ "./src/app/logs/logger-list/logger-list.component.html"),
            styles: [__webpack_require__(/*! ./logger-list.component.css */ "./src/app/logs/logger-list/logger-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_loggers_api_service__WEBPACK_IMPORTED_MODULE_3__["LoggersApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], LoggerListComponent);
    return LoggerListComponent;
}());



/***/ }),

/***/ "./src/app/logs/logging-configuration/logging-configuration.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/logs/logging-configuration/logging-configuration.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n\r\n.CodeMirror {\r\n  width:48vw;\r\n  height:70vh;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9ncy9sb2dnaW5nLWNvbmZpZ3VyYXRpb24vbG9nZ2luZy1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUI7OztBQUdBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2xvZ3MvbG9nZ2luZy1jb25maWd1cmF0aW9uL2xvZ2dpbmctY29uZmlndXJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuXHJcblxyXG4uQ29kZU1pcnJvciB7XHJcbiAgd2lkdGg6NDh2dztcclxuICBoZWlnaHQ6NzB2aDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/logs/logging-configuration/logging-configuration.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/logs/logging-configuration/logging-configuration.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 60px;\">\r\n\r\n  <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <td>\r\n          <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px\">\r\n            {{ 'LOGGING.CONFIG_FILE'|translate }}: <strong>../etc/{{ myEditFilename }}.yaml</strong>\r\n            <button pButton label=\"{{ 'BUTTON.SAVE'|translate }}\" type=\"button\" [disabled]=\"myTextarea === myTextareaOrig\" icon=\"fa fa-check\" style=\"margin-right: 0px;\" (click)=\"saveConfig()\" class=\"float-sm-right ui-button-success\"></button>\r\n            <button pButton label=\"{{ 'BUTTON.DISCARD'|translate }}\" type=\"button\" [disabled]=\"(myEditFilename === '') || (myTextarea === myTextareaOrig)\" icon=\"fa fa-check\" style=\"margin-right: 10px;\" (click)=\"this.myTextarea = this.myTextareaOrig;\" class=\"float-sm-right ui-button-secondary\"></button>\r\n            <button pButton label=\"{{ 'BUTTON.HELP'|translate }}\" type=\"button\" [disabled]=\"false\" icon=\"fa fa-info\" style=\"margin-right: 10px;\" (click)=\"this.editorHelp_display = true;\" class=\"float-sm-right ui-button-success\"></button>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <div style=\"height: 100px; margin-top: 10px; padding-left: 10px; padding-right: 5px; width: 95%\">\r\n            <ngx-codemirror #codeeditor\r\n\r\n                            [options]=\"cmOptions\"\r\n                            [(ngModel)]=\"myTextarea\"\r\n                            [autoFocus]=\"true\"\r\n            ></ngx-codemirror>\r\n            <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n          </div>\r\n        </td>\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  </div>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n  -- Confirm dialog vor configuration deletion\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"error_display\" [closable]=\"false\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'LOGGING.CONFIG_ERROR'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <pre>\r\n{{'LOGGING.CONFIG_ERROR_TEXT'|translate}}\r\n\r\n{{ myTextOutput }}\r\n  </pre>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"error_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<!--\r\n    -- Display help dialog\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"editorHelp_display\" [closable]=\"true\" [modal]=\"true\" dynamic=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'HELP.EDITOR-KEYS'|translate}}\r\n  </p-header>\r\n  <br>\r\n  <table>\r\n    <thead>\r\n    <th><u>{{'HELP.KEY'|translate}}</u></th>\r\n    <th style=\"width: 20px;\"></th>\r\n    <th><u>{{'HELP.DESCRIPTION'|translate}}</u></th>\r\n    </thead>\r\n    <tbody>\r\n    <tr><td>Tab</td>          <td></td> <td>{{'HELP.TAB'|translate}}</td></tr>\r\n    <tr><td>Shift-Tab</td>    <td></td> <td>{{'HELP.SHIFT-TAB'|translate}}</td></tr>\r\n    <tr><td>F11</td>          <td></td> <td>{{'HELP.F11'|translate}}</td></tr>\r\n    <tr><td>Esc</td>          <td></td> <td>{{'HELP.ESC'|translate}}</td></tr>\r\n    <tr><td>Ctrl-Q</td>       <td></td> <td>{{'HELP.CTRL-Q'|translate}}</td></tr>\r\n    <tr><td>Shift-Ctrl-Q</td> <td></td> <td>{{'HELP.SHIFT-CTRL-Q'|translate}}</td></tr>\r\n    </tbody>\r\n  </table>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" (click)=\"editorHelp_display = false;\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/logs/logging-configuration/logging-configuration.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/logs/logging-configuration/logging-configuration.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LoggingConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingConfigurationComponent", function() { return LoggingConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_files_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/files-api.service */ "./src/app/common/services/files-api.service.ts");
/* harmony import */ var _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/services-api.service */ "./src/app/common/services/services-api.service.ts");




var LoggingConfigurationComponent = /** @class */ (function () {
    function LoggingConfigurationComponent(fileService, dataService) {
        this.fileService = fileService;
        this.dataService = dataService;
        // -----------------------------------------------------------------
        //  Vars for the codemirror components
        //
        this.rulers = [];
        this.myTextarea = '';
        this.myTextareaOrig = '';
        this.cmOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess',
                'F11': function (cm) {
                    cm.setOption('fullScreen', !cm.getOption('fullScreen'));
                    // cm.getScrollerElement().style.maxHeight = 'none';
                },
                'Esc': function (cm, fullScreen) {
                    if (cm.getOption('fullScreen')) {
                        cm.setOption('fullScreen', false);
                    }
                },
                'Ctrl-Q': function (cm) {
                    cm.foldCode(cm.getCursor());
                },
                'Shift-Ctrl-Q': function (cm) {
                    for (var l = cm.firstLine(); l <= cm.lastLine(); ++l) {
                        cm.foldCode({ line: l, ch: 0 }, null, 'unfold');
                    }
                }
            },
            fullScreen: false,
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
            foldGutter: true,
            gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter']
        };
        this.editorHelp_display = false;
        this.error_display = false;
        this.myTextOutput = '';
    }
    LoggingConfigurationComponent.prototype.ngOnInit = function () {
        // console.log('LoggingConfigurationComponent.ngOnInit');
        var _this = this;
        this.myEditFilename = 'logging';
        for (var i = 1; i <= 100; i++) {
            this.rulers.push({ color: '#eee', column: i * 4, lineStyle: 'dashed' });
        }
        this.fileService.readFile('logging')
            .subscribe(function (response) {
            _this.myTextarea = response;
            _this.myTextareaOrig = response;
        });
    };
    LoggingConfigurationComponent.prototype.ngAfterViewChecked = function () {
        var editor1 = this.codeEditor.codeMirror;
        if (editor1.getOption('fullScreen')) {
            editor1.setSize('100vw', '100vh');
        }
        else {
            editor1.setSize('93vw', '78vh');
            1;
        }
        editor1.refresh();
    };
    LoggingConfigurationComponent.prototype.saveConfig = function () {
        // console.log('LoggingConfigurationComponent.saveConfig');
        var _this = this;
        this.dataService.CheckYamlText(this.myTextarea)
            .subscribe(function (response) {
            _this.myTextOutput = response;
            if (_this.myTextOutput.startsWith('ERROR:')) {
                _this.error_display = true;
            }
            else {
                _this.fileService.saveFile('logging', '', _this.myTextarea)
                    .subscribe(function (response2) {
                    _this.myTextareaOrig = _this.myTextarea;
                });
            }
            var editor = _this.codeEditor.codeMirror;
            editor.refresh();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoggingConfigurationComponent.prototype, "codeEditor", void 0);
    LoggingConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logging-configuration',
            template: __webpack_require__(/*! ./logging-configuration.component.html */ "./src/app/logs/logging-configuration/logging-configuration.component.html"),
            styles: [__webpack_require__(/*! ./logging-configuration.component.css */ "./src/app/logs/logging-configuration/logging-configuration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_files_api_service__WEBPACK_IMPORTED_MODULE_2__["FilesApiService"],
            _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ServicesApiService"]])
    ], LoggingConfigurationComponent);
    return LoggingConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/no-access/no-access.component.css":
/*!***************************************************!*\
  !*** ./src/app/no-access/no-access.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLWFjY2Vzcy9uby1hY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/no-access/no-access.component.html":
/*!****************************************************!*\
  !*** ./src/app/no-access/no-access.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  no-access works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/no-access/no-access.component.ts":
/*!**************************************************!*\
  !*** ./src/app/no-access/no-access.component.ts ***!
  \**************************************************/
/*! exports provided: NoAccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAccessComponent", function() { return NoAccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoAccessComponent = /** @class */ (function () {
    function NoAccessComponent() {
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__(/*! ./no-access.component.html */ "./src/app/no-access/no-access.component.html"),
            styles: [__webpack_require__(/*! ./no-access.component.css */ "./src/app/no-access/no-access.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 60px;\">\r\n\r\n  <div class=\"container mt-4 ml-0\">\r\n    <h1 class=\"margin-base-vertical\">\r\n      <img src=\"assets/img/logo_small_120x120.png\" width=\"40\" height=\"40\" style=\"vertical-align:top\">\r\n      Oops, {{ 'ERROR.ERROR'|translate }} 404:\r\n    </h1>\r\n    <br/>\r\n    <h3>{{ 'ERROR.PAGE_NOT_FOUND'|translate }}</h3>\r\n    <br/>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!--\r\n<div class=\"container mt-4 ml-0\">\r\n\r\n  {% if traceback %}\r\n  <div class=\"card\">\r\n    <div class=\"card-header\"><strong>Traceback</strong></div>\r\n    <div class=\"card-body text-shng\">\r\n      {{ traceback }}\r\n    </div>\r\n  </div>\r\n  {% endif %}\r\n</div>\r\n-->\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/plugins/config/plugin-config.component.css":
/*!************************************************************!*\
  !*** ./src/app/plugins/config/plugin-config.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvY29uZmlnL3BsdWdpbi1jb25maWcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/plugins/config/plugin-config.component.html":
/*!*************************************************************!*\
  !*** ./src/app/plugins/config/plugin-config.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--\r\n  -- List of configured plugins\r\n  -->\r\n\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px\">\r\n  <div class=\"shng_headline\" style=\"margin-top: 20px; margin-left: 8px;\">\r\n    <h3>\r\n      {{'PLUGIN.PLUGIN_CONFIGURATION'|translate}}\r\n      <button pButton type=\"button\" style=\"margin-left: 0px; margin-top: 5px; font-size: medium;\" id=\"btn-monitor\" [disabled]=\"false\" (click)=\"addPluginDialog();\" icon=\"fa fa-plus\" label=\"{{ 'BUTTON.ADD_PLUGIN'|translate }}\" class=\"ui-button-success float-sm-right\"></button>\r\n    </h3>\r\n  </div>\r\n  <p-table [columns]=\"cols\" [value]=\"configuredplugins\" selectionMode=\"single\">\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.sfield\" [ngStyle]=\"{'width': col.width}\">\r\n          {{col.header|translate}}\r\n          <p-sortIcon *ngIf=\"col.sfield !== ''\" [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n      <tr (click)=\"rowClicked($event, rowData)\">\r\n        <td *ngFor=\"let col of columns\">\r\n          <ng-container *ngIf=\"col.field === 'enabled'\">\r\n            <ng-container *ngIf=\"rowData[col.field] === 'true'\">\r\n              <i style=\"color: var(--shng-blue);\" class=\"fa fa-toggle-on\"></i>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"rowData[col.field] === 'false'\">\r\n              <i style=\"color: var(--shng-toggle-off);\" class=\"fa fa-toggle-off\"></i>\r\n            </ng-container>\r\n          </ng-container>\r\n\r\n          <!-- icon for plugin-type -->\r\n          <ng-container *ngIf=\"col.field === 'type' && ['web','protocol','interface','gateway','system'].includes(rowData[col.field])\">\r\n            <img src=\"assets/img/plugin_{{ rowData[col.field] }}.svg\" style=\"width: 25px;\"/>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"col.field === 'type' && ['classic'].includes(rowData[col.field])\">\r\n            &nbsp; -\r\n          </ng-container>\r\n          <ng-container *ngIf=\"col.field === 'type' && !['web','protocol','interface','gateway','system','classic'].includes(rowData[col.field])\">\r\n            <img src=\"assets/img/plugin_defaultlogo.png\" style=\"width: 25px;\"/>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"col.field !== 'enabled' && col.field !== 'type'\">\r\n            <ng-container *ngIf=\"col.field === 'plugin'\">\r\n              {{rowData[col.field].substr(1)}}\r\n              <ng-container *ngIf=\"rowData[col.field].charAt(0) === '+'\">\r\n                &nbsp; <fa-icon style=\"color: var(--shng-warning);\" [icon]=\"faExclamationTriangle\"></fa-icon>\r\n              </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"col.field !== 'plugin'\">\r\n              {{rowData[col.field]}}\r\n            </ng-container>\r\n          </ng-container>\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n  <ng-container *ngIf=\"dialog_readonly === false && restart_core_button\">\r\n    <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"dialog_readonly === false && !restart_core_button\">\r\n    <a style=\"font-size: small\">&nbsp;</a>\r\n  </ng-container>\r\n  <br>\r\n  <button pButton type=\"button\" class=\"float-sm-right btn-shng btn btn-sm\" style=\"float: left; margin-left: 0px; margin-top: 5px; margin-bottom: 10px; font-size: medium;\" [disabled]=\"!restart_core_button\" (click)=\"restartShng()\" icon=\"fa fa-circle-notch\" label=\"{{'BUTTON.RESTART_SHNG'|translate}}\" class=\"ui-button-success\"></button>\r\n</div>\r\n\r\n\r\n\r\n<!-- ---------------------------------------------------------------------------------------\r\n  -- Dialog for configuring the parameters of a plugin\r\n  -->\r\n\r\n<p-dialog\r\n  header=\"\"\r\n  [(visible)]=\"dialog_display\"\r\n  [modal]=\"true\"\r\n  blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [maximizable]=\"true\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'minWidth':'600px', 'minHeight':'300px'}\"\r\n>\r\n\r\n  <p-header>\r\n    {{'CONFIGURATION'|translate}} <strong>{{ this.dialog_configname }}</strong> &nbsp; (Plugin <strong>{{ this.dialog_pluginname }}</strong>)\r\n    <ng-container *ngIf=\"plugin_enabled === false\">\r\n      &nbsp; - &nbsp;<strong>{{'PLUGIN.PLUGIN_DISABLED'|translate}}</strong>\r\n    </ng-container>\r\n  </p-header>\r\n\r\n  <table>\r\n    <tr>\r\n      <td width=\"75px\">\r\n        <p-inputSwitch [(ngModel)]=\"plugin_enabled\"></p-inputSwitch>\r\n      </td>\r\n      <td>\r\n        {{ this.dialog_description }}\r\n      </td>\r\n    </tr>\r\n    <ng-container *ngIf=\"this.state && this.state.toLowerCase() === 'deprecated'\">\r\n      <tr>\r\n        <td></td>\r\n      </tr>\r\n      <tr>\r\n        <td align=\"right\">\r\n          <fa-icon style=\"color: var(--shng-warning);\" [icon]=\"faExclamationTriangle\"></fa-icon> &nbsp;\r\n        </td>\r\n        <td colspan=\"3\">\r\n          <a style=\"width: 50%; padding:0px; background-color: #ffffff; border:0;\"><strong>{{'PLUGIN.DEPRECATED'|translate}}:</strong></a>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td></td>\r\n        <td colspan=\"3\">\r\n          <p style=\"padding:0px; background-color: #f2f2f2; border:0;\">{{'PLUGIN.DEPRECATED_TEXT'|translate}}</p>\r\n        </td>\r\n      </tr>\r\n    </ng-container>\r\n  </table>\r\n  <br>\r\n\r\n  <ng-container *ngIf=\"!this.classic\">\r\n    <p-table [columns]=\"parameter_cols\" [value]=\"parameters\" selectionMode=\"single\">\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngStyle]=\"{'width': col.width}\">\r\n            {{col.header|translate}}\r\n            <p-sortIcon *ngIf=\"col.sfield !== ''\" [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr>\r\n          <td *ngFor=\"let col of columns\">\r\n\r\n            <ng-container *ngIf=\"dialog_readonly === false && col.field === 'value'\">\r\n              <ng-container *ngIf=\"rowData.valid_list.length > 0\">\r\n                <p-dropdown [options]=\"rowData.valid_list\" [showClear]=\"true\" placeholder=\"{{rowData.q21_09Bad}}\" [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"rowData[col.field] = $event\"></p-dropdown>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"(['int','num','float','scene'].indexOf(rowData.type) > -1) && rowData.valid_list.length === 0\">\r\n                <input [(ngModel)]=\"rowData[col.field]\" type=\"number\" min=\"{{rowData.valid_min}}\" max=\"{{rowData.valid_max}}\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" pInputText name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"rowData.type === 'hide-int' && rowData.valid_list.length === 0\">\r\n                <input [(ngModel)]=\"rowData[col.field]\" type=\"number\" min=\"{{rowData.valid_min}}\" max=\"{{rowData.valid_max}}\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" pInputText name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"rowData.type === 'hide-str' && rowData.valid_list.length === 0\">\r\n                <input [(ngModel)]=\"rowData[col.field]\" type=\"password\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"rowData.type !== 'bool' && ['int','num','float','scene','hide-str', 'hide-int'].indexOf(rowData.type) === -1 && rowData.valid_list.length === 0\">\r\n                <input [(ngModel)]=\"rowData[col.field]\" type=\"text\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n              </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"dialog_readonly === true || col.field !== 'value'\">\r\n              <ng-container *ngIf=\"dialog_readonly === true || col.field !== 'desc'\">\r\n                {{rowData[col.field]}}\r\n              </ng-container>\r\n              <ng-container *ngIf=\"dialog_readonly === true || col.field === 'desc'\">\r\n                <ng-container *ngFor=\"let bl of rowData[col.field].split('\\n')\">\r\n                  {{ bl }}<br>\r\n                </ng-container>\r\n              </ng-container>\r\n<!--\r\n              <ng-container *ngIf=\"typeof rowData[col.field]  !== 'string'\">\r\n                <ng-container *ngFor=\"let bl of col.field\">\r\n                  {{ bl }}}\r\n                </ng-container>\r\n              </ng-container>\r\n-->\r\n            </ng-container>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"this.classic\">\r\n    <h4>\r\n      {{'PLUGIN.CLASSIC_NOT_CONFIGURABLE'|translate}}\r\n    </h4><br>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"dialog_readonly === false\">\r\n    <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n  </ng-container>\r\n  <p-footer>\r\n    <ng-container *ngIf=\"dialog_readonly === false\">\r\n<!--\r\n      <button pButton type=\"button\" icon=\"fa fa-trash-alt\" (click)=\"deleteConfigComponent.delete(dialog_configname)\" label=\"{{'BUTTON.DELETE'|translate}}\" class=\"ui-button-danger float-sm-left\"></button>\r\n-->\r\n      <button pButton type=\"button\" icon=\"fa fa-trash-alt\" (click)=\"DeleteConfig()\" label=\"{{'BUTTON.DELETE'|translate}}\" class=\"ui-button-danger float-sm-left\"></button>\r\n      <button pButton type=\"button\" icon=\"fa fa-check\" (click)=\"saveConfig()\" label=\"{{'BUTTON.SAVE'|translate}}\" class=\"ui-button-success\"></button>\r\n      <button pButton type=\"button\" icon=\"fa fa-times\" (click)=\"dialog_display=false\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"dialog_readonly === true\">\r\n      <button pButton type=\"button\" icon=\"fa fa-times\" (click)=\"dialog_display=false\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n    </ng-container>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n<!--\r\n  -- Validation dialog, showing information about the error, if from validation fails\r\n  -->\r\n\r\n<p-dialog header=\"\" [(visible)]=\"validation_dialog_display\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'PLUGIN.CONFIGURATION_ERRORS'|translate}}\r\n  </p-header>\r\n\r\n  <ng-container *ngFor=\"let l of this.validation_dialog_text\">\r\n    <li>\r\n      {{ l }}\r\n    </li>\r\n  </ng-container>\r\n\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"validation_dialog_display=false\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- ---------------------------------------------------------------------------------------\r\n  -- Dialog for selecting a plugin to add to the configured plugins\r\n  -->\r\n\r\n<p-dialog\r\n  #pluginadd\r\n  header=\"\"\r\n  [(visible)]=\"add_display\"\r\n  (onShow)=\"pluginadd.maximize()\"\r\n  [modal]=\"true\"\r\n  blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"true\"\r\n  [maximizable]=\"false\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'minWidth':'600px', 'minHeight':'300px'}\"\r\n>\r\n\r\n  <p-header>\r\n    {{'PLUGIN.ADD'|translate}}\r\n    <ng-container *ngIf=\"plugin_enabled === false\">\r\n      &nbsp; - &nbsp;<strong>{{'PLUGIN.PLUGIN_DISABLED'|translate}}</strong>\r\n    </ng-container>\r\n  </p-header>\r\n\r\n  <p-accordion [multiple]=\"true\">\r\n    <ng-container *ngFor=\"let plugintype of plugintypes; let i = index\">\r\n      <p-accordionTab [(selected)]=\"plugintypes_expanded[i]\" (click)=\"pluginadd.maximize()\">\r\n        <p-header style=\"font-size: larger;\">\r\n          <img src=\"assets/img/plugin_{{ plugintype }}.svg\" style=\"width: 30px; cursor: pointer;\"/> {{plugintype.charAt(0).toUpperCase() + plugintype.substring(1)}} Plugins\r\n        </p-header>\r\n        <!--\r\n          <table class=\"table table-striped table-hover\" [columns]=\"cols\" [value]=\"configuredplugins\" selectionMode=\"single\">\r\n        -->\r\n          <table class=\"table table-striped table-hover\">\r\n            <colgroup>\r\n              <col width=\"140px\">\r\n              <col width=\"25px\">\r\n              <col minwidth=\"400px\">\r\n            </colgroup>\r\n            <thead>\r\n              <th>Plugin</th>\r\n              <th>Multi-Instance</th>\r\n              <th>Description</th>\r\n            </thead>\r\n            <ng-container *ngFor=\"let iplugin of plugins_installed_list\">\r\n              <ng-container *ngIf=\"(plugins_installed[iplugin].type === plugintype) || (plugintype === 'unclassified' && plugintypes.indexOf(plugins_installed[iplugin].type) === -1 )\">\r\n                <tr style=\"cursor: pointer\" (click)=\"selectPlugin(iplugin)\">\r\n                  <td style=\"padding-left: 15px;\">\r\n                    {{iplugin}}\r\n                    <ng-container *ngIf=\"plugins_installed[iplugin].state && (plugins_installed[iplugin].state.toLowerCase() === 'deprecated')\">\r\n                      &nbsp; <fa-icon style=\"color: var(--shng-warning);\" [icon]=\"faExclamationTriangle\"></fa-icon>\r\n                    </ng-container>\r\n                  </td>\r\n                  <td>&nbsp; &nbsp;\r\n                    <ng-container *ngIf=\"plugins_installed[iplugin].multi_instance\">\r\n                      <i style=\"color: var(--shng-blue);\" class=\"fa fa-check\"></i>\r\n                    </ng-container>\r\n\r\n                  </td>\r\n                  <td>\r\n                    {{plugins_installed[iplugin].description}}\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </ng-container>\r\n          </table>\r\n      </p-accordionTab>\r\n    </ng-container>\r\n  </p-accordion>\r\n\r\n  <ng-container *ngIf=\"dialog_readonly === false\">\r\n    <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n  </ng-container>\r\n\r\n  <p-footer>\r\n    <ng-container *ngIf=\"dialog_readonly === false\">\r\n<!--\r\n      <button pButton type=\"button\" icon=\"pi pi-check\" (click)=\"this.saveConfig()\" label=\"{{'BUTTON.SAVE'|translate}}\" class=\"ui-button-success\"></button>\r\n-->\r\n      <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"add_display=false\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-secondary\"></button>\r\n    </ng-container>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<!--\r\n  -- Progress spinner\r\n  -->\r\n\r\n<p-dialog\r\n  #pluginspinner\r\n  header=\"{{'PLUGIN.LOADLIST'|translate}}...\"\r\n  [ngStyle]=\"{'align': 'center'}\"\r\n  [(visible)]=\"spinner_display\"\r\n  [modal]=\"true\" blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [resizable]=\"false\"\r\n  [maximizable]=\"false\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'minWidth':'200px', 'minHeight':'100px'}\"\r\n>\r\n\r\n  <div align=\"center\">\r\n    <p-progressSpinner></p-progressSpinner>\r\n  </div>\r\n</p-dialog>\r\n\r\n\r\n\r\n<!--\r\n  -- Dialog for setting the configuration name of a plugin(-instance)\r\n  -->\r\n\r\n<p-dialog\r\n  header=\"\"\r\n  [(visible)]=\"setconfig_display\"\r\n  [modal]=\"true\"\r\n  blockScroll=\"true\"\r\n  [closable]=\"false\"\r\n  [maximizable]=\"false\"\r\n  [minY]=\"100\"\r\n  [style]=\"{'minWidth':'600px', 'minHeight':'200px'}\"\r\n>\r\n\r\n  <p-header>\r\n    {{'PLUGIN.NAME_CONFIGURATION'|translate:translate_params}}\r\n    <ng-container *ngIf=\"plugin_enabled === false\">\r\n      &nbsp; - &nbsp;<strong>{{'PLUGIN.PLUGIN_DISABLED'|translate}}</strong>\r\n    </ng-container>\r\n  </p-header>\r\n\r\n  <br>\r\n  {{ 'PLUGIN.UNIQUE_NAME'|translate }}&nbsp;\r\n  <input [(ngModel)]=\"pluginconfig_name\" type=\"text\" (input)=\"checkInput();\" pInputText placeholder=\"\" [ngStyle]=\"{'width': 20}\" autofocus/>\r\n\r\n  <br>\r\n  <br>\r\n  <ng-container *ngIf=\"dialog_readonly === false\">\r\n    <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n  </ng-container>\r\n  <p-footer>\r\n    <ng-container *ngIf=\"dialog_readonly === false\">\r\n      <button pButton type=\"button\" icon=\"pi pi-check\" (click)=\"this.addPlugin()\" [(disabled)]=\"!this.add_enabled\" label=\"{{'BUTTON.ADD'|translate}}\" class=\"ui-button-success\" autofocus></button>\r\n      <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"setconfig_display=false\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n    </ng-container>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<!--\r\n  -- Confirm dialog vor configuration deletion\r\n  -->\r\n<p-dialog header=\"\" [(visible)]=\"confirmdelete_display\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'PLUGIN.DELETE_CONFIG'|translate}}\r\n  </p-header>\r\n  <br>\r\n  {{'PLUGIN.DELETE_CONFIG_TEXT'|translate:delete_param}}\r\n  <br>\r\n  <br>\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"fa fa-trash-alt\" (click)=\"DeleteConfigConfirm()\" label=\"{{'BUTTON.DELETE'|translate}}\" class=\"ui-button-danger\"></button>\r\n    <button pButton type=\"button\" icon=\"fa fa-times\" (click)=\"DeleteConfigAbort()\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- --------------------------------------------------------------------------------------------------- -->\r\n\r\n"

/***/ }),

/***/ "./src/app/plugins/config/plugin-config.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/plugins/config/plugin-config.component.ts ***!
  \***********************************************************/
/*! exports provided: PluginConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginConfigComponent", function() { return PluginConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");
/* harmony import */ var _common_services_plugins_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/plugins-api.service */ "./src/app/common/services/plugins-api.service.ts");
/* harmony import */ var _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/olddata.service */ "./src/app/common/services/olddata.service.ts");
/* harmony import */ var _common_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/shared.service */ "./src/app/common/services/shared.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");






// import { DeleteConfigComponent } from './delete-config/delete-config.component';





var PluginConfigComponent = /** @class */ (function () {
    function PluginConfigComponent(cdRef, 
    //              private deleteConfigComponent: DeleteConfigComponent,
    serverdataService, pluginsdataService, dataService, translate, shared, router) {
        this.cdRef = cdRef;
        this.serverdataService = serverdataService;
        this.pluginsdataService = pluginsdataService;
        this.dataService = dataService;
        this.translate = translate;
        this.shared = shared;
        this.router = router;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"];
        this.faPlusCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"];
        this.faPlusSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusSquare"];
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExclamationTriangle"];
        this.classic = false;
        this.state = '';
        this.rowclicked_foredit = false;
        // for list of installed plugins dialog
        this.dialog_display = false;
        this.dialog_readonly = false;
        // for add dialog
        this.add_display = false;
        this.plugintypes = ['system', 'gateway', 'interface', 'protocol', 'web', 'unclassified'];
        this.plugintypes_expanded = [];
        this.spinner_display = false;
        this.add_firstrun = true;
        // set configuration name dialog
        this.setconfig_display = false;
        this.translate_params = {};
        this.validation_dialog_display = false;
        // confirm delete dialog
        this.confirmdelete_display = false;
    }
    PluginConfigComponent.prototype.ngOnInit = function () {
        // console.log('PluginConfigComponent.ngOnInit');
        var _this = this;
        // this.translate.use(this.lang);
        this.shared.setGuiLanguage();
        this.lang = sessionStorage.getItem('default_language');
        this.pluginsdataService.getPluginsConfig()
            .subscribe(function (response) {
            _this.pluginconflist = response;
            // console.log(this.pluginconflist);
            for (var plg in _this.pluginconflist.plugin_config) {
                if (_this.pluginconflist.plugin_config.hasOwnProperty(plg)) {
                    var confname = plg;
                    var plgname = _this.pluginconflist.plugin_config[plg]['plugin_name'];
                    if (plgname === undefined) {
                        plgname = _this.pluginconflist.plugin_config[plg]['class_path'];
                    }
                    var instance = _this.pluginconflist.plugin_config[plg]['instance'];
                    // get logo for plugin type
                    var meta = _this.pluginconflist.plugin_config[confname]['_meta'];
                    var deprecated = '-';
                    if (meta.plugin.state && meta.plugin.state.toLowerCase() === 'deprecated') {
                        deprecated = '+';
                    }
                    else {
                        deprecated = '-';
                    }
                    var conf = { 'confname': confname, 'instance': instance, 'plugin': deprecated + plgname, 'desc': '' };
                    var enabled = 'true';
                    if (_this.pluginconflist.plugin_config[plg]['plugin_enabled'] === 'False') {
                        enabled = 'false';
                    }
                    // is plugin enabled?
                    conf['enabled'] = enabled;
                    if (meta === undefined) {
                        conf['type'] = 'classic';
                    }
                    else {
                        conf['type'] = meta.plugin.type;
                    }
                    // get description from plugin_config (faster)
                    var desc = _this.pluginconflist.plugin_config[plg]['_description'];
                    if (conf['type'] === undefined || conf['type'] === 'classic') {
                        conf['type'] = 'classic';
                        desc = _this.pluginconflist.plugin_config[plg]['_meta']['plugin']['description'];
                    }
                    if (desc !== undefined) {
                        // if a description is defined
                        conf['desc'] = desc[_this.lang];
                        if (conf['desc'] === undefined) {
                            // if description in selected language is undefined, use fallbak language
                            conf['desc'] = desc[_this.shared.getFallbackLanguage()];
                        }
                    }
                    // add to the table of configured plugins
                    _this.configuredplugins.push(conf);
                }
            }
        });
        this.cols = [
            { field: 'enabled', sfield: '', header: '', width: '30px' },
            { field: 'confname', sfield: 'confname', header: 'PLUGIN.CONFIGNAME', width: '150px' },
            { field: 'plugin', sfield: 'plugin', header: 'PLUGIN.PLUGINNAME', width: '200px' },
            { field: 'instance', sfield: 'instance', header: 'PLUGIN.INSTANCE', width: '150px' },
            { field: 'desc', sfield: '', header: 'PLUGIN.DESCRIPTION', width: '' }
        ];
        this.configuredplugins = [];
    };
    // ---------------------------------------------------------
    // Handle the click event on the list of installed plugins
    //
    //  - Get the configuration data for the selected plugin
    //    for the modal dialog
    //
    PluginConfigComponent.prototype.rowClicked = function (event, rowdata) {
        // console.warn('rowClicked')
        // console.log({rowdata})
        this.dialog_configname = rowdata.confname;
        this.dialog_pluginname = rowdata.plugin;
        this.rowclicked_foredit = rowdata;
        var conf = this.pluginconflist.plugin_config[rowdata.confname];
        var meta = this.pluginconflist.plugin_config[rowdata.confname]['_meta'];
        var desc = null;
        this.classic = true;
        if (meta !== undefined && meta.plugin !== undefined) {
            if (meta.plugin.type !== undefined && meta.plugin.type !== 'classic') {
                this.classic = false;
            }
            this.state = '';
            if (meta.plugin.state !== undefined) {
                this.state = meta.plugin.state;
            }
            desc = meta['plugin']['description'];
        }
        this.dialog_readonly = this.pluginconflist.readonly;
        if (desc !== null && desc !== undefined) {
            this.dialog_description = desc[this.lang];
        }
        this.plugin_enabled = true;
        if (conf.plugin_enabled !== undefined) {
            if (typeof conf.plugin_enabled === 'string' && conf.plugin_enabled.toLowerCase() === 'false') {
                this.plugin_enabled = false;
            }
        }
        this.parameter_cols = [
            { field: 'name', sfield: 'confname', header: 'PLUGIN.PARAMETER', width: '150px', iwidth: '146px' },
            { field: 'value', sfield: 'paramvalue', header: 'PLUGIN.VALUE', width: '200px', iwidth: '196px' },
            { field: 'type', sfield: 'conftype', header: 'PLUGIN.TYPE', width: '100px', iwidth: '96px' },
            { field: 'desc', sfield: '', header: 'PLUGIN.DESCRIPTION', width: '', iwidth: '' }
        ];
        this.parameters = [];
        if (meta !== undefined && meta['parameters'] !== 'NONE') {
            for (var param in meta['parameters']) {
                if (meta['parameters'].hasOwnProperty(param)) {
                    var vl = [];
                    if (meta['parameters'][param]['valid_list'] !== undefined) {
                        for (var i = 0; i < meta['parameters'][param]['valid_list'].length; i++) {
                            var wrk = { label: String(meta['parameters'][param]['valid_list'][i]), value: meta['parameters'][param]['valid_list'][i] };
                            vl.push(wrk);
                        }
                    }
                    // generate a valid_list for bool parameters
                    if (meta['parameters'][param]['type'] === 'bool') {
                        var wrk = {};
                        wrk = { label: 'true', value: true };
                        vl.push(wrk);
                        wrk = { label: 'false', value: false };
                        vl.push(wrk);
                    }
                    // fill description with active language
                    var paramdesc = '';
                    if (meta['parameters'][param]['description'] !== undefined) {
                        paramdesc = meta['parameters'][param]['description'][this.lang];
                        if (paramdesc === '' || paramdesc === undefined) {
                            paramdesc = meta['parameters'][param]['description']['en'];
                        }
                    }
                    var paramdescBlocks = [];
                    paramdescBlocks.push(paramdesc);
                    var paramdata = {
                        'name': param,
                        'type': meta['parameters'][param]['type'],
                        'valid_list': vl,
                        'valid_min': meta['parameters'][param]['valid_min'],
                        'valid_max': meta['parameters'][param]['valid_max'],
                        'default': meta['parameters'][param]['q21_09Bad.txt'],
                        'mandatory': meta['parameters'][param]['mandatory'],
                        'value': conf[param],
                        'desc': paramdesc
                    };
                    if (meta['parameters'][param]['hide'] && (['str', 'int'].indexOf(meta['parameters'][param]['type']) !== -1)) {
                        paramdata['type'] = 'hide' + '-' + meta['parameters'][param]['type'];
                    }
                    if (paramdata.type === 'bool') {
                        if (conf[param] === undefined) {
                            paramdata.value = null;
                        }
                        else if (typeof conf[param] === 'boolean') {
                            paramdata.value = conf[param];
                        }
                        else {
                            if (conf[param] === null) {
                                paramdata.value = null;
                            }
                            else {
                                paramdata.value = (conf[param].toLowerCase() === 'true');
                            }
                        }
                    }
                    else {
                        paramdata.value = conf[param];
                    }
                    // add to the table of configured plugins
                    this.parameters.push(paramdata);
                }
            }
            // Add an entry for the 'instance' attribute at the end, if it is a multi-instance plugin
            var multiinstance = meta['plugin']['multi_instance'];
            if (multiinstance) {
                var instance = rowdata.instance;
                var paramdata = {
                    'name': 'instance',
                    'type': 'str',
                    'valid_list': [],
                    'default': '',
                    'mandatory': false,
                    'value': instance,
                    'desc': this.translate.instant('PLUGIN.DESCRIPTION_INSTANCE_ATTRIBUTE')
                };
                this.parameters.push(paramdata);
            }
        }
        /*
            // find out, if instance parameter is defined
            let instance_defined = false;
            for (const i in this.parameters) {
              if (this.parameters.hasOwnProperty(i) ) {
                if (this.parameters[i].name === 'instance') {
                  instance_defined = true;
                }
              }
            }
            console.log({instance_defined});
        */
        this.dialog_display = true;
    };
    PluginConfigComponent.prototype.saveConfig = function () {
        var conf = this.pluginconflist.plugin_config[this.dialog_configname];
        var errors_found = false;
        this.validation_dialog_text = [];
        for (var i = 0; i < this.parameters.length; i++) {
            var error_found = false;
            var error_text = '';
            if (this.parameters[i]['value'] === '') {
                conf[this.parameters[i]['name']] = undefined;
            }
            else {
                conf[this.parameters[i]['name']] = this.parameters[i]['value'];
            }
            if (this.parameters[i]['value'] === undefined) {
                this.parameters[i]['value'] = null;
            }
            // checking data types
            if (this.parameters[i]['value'] !== null && this.parameters[i]['value'] !== '') {
                error_text = '\'' + this.parameters[i]['value'] + '\' ';
                if (this.parameters[i]['type'].toLowerCase() === 'knx_ga' && !this.shared.is_knx_groupaddress(this.parameters[i]['value'])) {
                    error_found = true;
                    error_text += this.translate.instant('PLUGIN.INVALID_KNX_ADDRESS');
                }
                if (this.parameters[i]['type'].toLowerCase() === 'mac' && !this.shared.is_mac(this.parameters[i]['value'])) {
                    error_found = true;
                    error_text += this.translate.instant('PLUGIN.INVALID_MAC_ADDRESS');
                }
                if (this.parameters[i]['type'].toLowerCase() === 'ipv4' && !this.shared.is_ipv4(this.parameters[i]['value'])) {
                    error_found = true;
                    error_text += this.translate.instant('PLUGIN.INVALID_IP_ADDRESS') + ' (v4)';
                }
                if (this.parameters[i]['type'].toLowerCase() === 'ipv6' && !this.shared.is_ipv6(this.parameters[i]['value'])) {
                    error_found = true;
                    error_text += this.translate.instant('PLUGIN.INVALID_IP_ADDRESS') + ' (v6)';
                }
                if (this.parameters[i]['type'].toLowerCase() === 'ip') {
                    if (!this.shared.is_ipv4(this.parameters[i]['value']) && !this.shared.is_ipv6(this.parameters[i]['value'])) {
                        if (!this.shared.is_hostname(this.parameters[i]['value'])) {
                            error_found = true;
                            error_text += this.translate.instant('PLUGIN.INVALID_HOSTNAME');
                        }
                    }
                }
            }
            // check valid minimum and maximum value
            if ((this.parameters[i]['value'] !== null) && (this.parameters[i]['value'] < this.parameters[i]['valid_min'])) {
                error_found = true;
                error_text = this.translate.instant('PLUGIN.DEFINED_MIN') + ' \'' + this.parameters[i]['valid_min'] + '\'';
                error_text += ', ' + this.translate.instant('PLUGIN.ACTUAL_VALUE') + ' \'' + this.parameters[i]['value'] + '\'';
            }
            if ((this.parameters[i]['value'] !== null) && (this.parameters[i]['value'] > this.parameters[i]['valid_max'])) {
                error_found = true;
                error_text = this.translate.instant('PLUGIN.DEFINED_MAX') + ' \'' + this.parameters[i]['valid_max'] + '\'';
                error_text += ', ' + this.translate.instant('PLUGIN.ACTUAL_VALUE') + ' \'' + this.parameters[i]['value'] + '\'';
            }
            // check if value is mandantory
            if ((this.parameters[i]['value'] === undefined || this.parameters[i]['value'] === null || this.parameters[i]['value'] === '') && this.parameters[i]['mandatory']) {
                error_found = true;
                error_text = this.translate.instant('PLUGIN.MANDATORY_VALUE');
            }
            if (error_found) {
                errors_found = true;
                error_found = false;
                this.validation_dialog_text.push(this.translate.instant('PLUGIN.PARAMETER') + ' \'' + this.parameters[i]['name'] + '\': ' + error_text);
                this.validation_dialog_parameter = this.parameters[i]['name'];
                this.validation_dialog_display = true;
            }
        }
        // if validation did not find errors
        if (!errors_found) {
            // hide configuration dialog
            this.dialog_display = false;
            if (this.plugin_enabled === false) {
                this.pluginconflist.plugin_config[this.dialog_configname]['plugin_enabled'] = false;
                this.rowclicked_foredit.enabled = 'false';
            }
            else {
                this.pluginconflist.plugin_config[this.dialog_configname]['plugin_enabled'] = true;
                this.rowclicked_foredit.enabled = 'true';
            }
            this.rowclicked_foredit.instance = this.pluginconflist.plugin_config[this.dialog_configname]['instance'];
            // save configuration of the edited plugin to the backend to section <this.dialog_configname>
            // console.log('save configuration of "' + this.dialog_configname + '" to Backend');
            var config = JSON.parse(JSON.stringify(this.pluginconflist.plugin_config[this.dialog_configname]));
            delete config['_meta'];
            delete config['_description'];
            // console.log({config});
            for (var conf_1 in config) {
                if (config.hasOwnProperty(conf_1)) {
                    if (config[conf_1] === null) {
                        delete config[conf_1];
                    }
                    // console.log({conf}, config[conf]);
                }
            }
            this.restart_core_button = true;
            // transfer to backend server
            this.pluginsdataService.setPluginConfig(this.dialog_configname, { 'config': config })
                .subscribe(function (response) {
                if (response.result !== 'ok') {
                    // display error dialog, if save failed?
                }
            });
        }
    };
    PluginConfigComponent.prototype.restartShng = function () {
        this.serverdataService.restartShngServer()
            .subscribe(function (response) {
            var res = response;
            console.log('restartShng', res.result);
        });
        this.restart_core_button = false;
    };
    // -------------------------------------------------------------------
    //  Add configuration
    //
    PluginConfigComponent.prototype.addPluginDialog = function () {
        var _this = this;
        console.log('PluginConfigComponent.addPluginDialog:');
        for (var i = 0; i < this.plugintypes.length; i++) {
            this.plugintypes_expanded[i] = !this.add_firstrun;
        }
        this.add_firstrun = false;
        this.spinner_display = true;
        this.pluginsdataService.getInstalledPlugins()
            .subscribe(function (response) {
            _this.plugins_installed = response;
            _this.plugins_installed_list = Object.keys(response);
            //          this.schedulerinfo.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)});
            console.log('addPluginDialog', { response: response });
            _this.spinner_display = false;
            _this.add_display = true;
            for (var i = 0; i < _this.plugintypes.length; i++) {
                _this.plugintypes_expanded[i] = false;
            }
        });
    };
    PluginConfigComponent.prototype.selectPlugin = function (iplugin) {
        console.warn({ iplugin: iplugin });
        this.selected_plugin = iplugin;
        this.pluginconfig_name = '';
        this.translate_params = { 'selected_plugin': this.selected_plugin };
        this.add_enabled = false;
        this.setconfig_display = true;
        // alert('code for selecting plugin "' + iplugin + '" is not yet implemented!');
    };
    PluginConfigComponent.prototype.checkInput = function () {
        this.add_enabled = false;
        if (this.pluginconfig_name.length > 0) {
            this.add_enabled = true;
            for (var conf in this.configuredplugins) {
                if (this.configuredplugins[conf].confname === this.pluginconfig_name) {
                    this.add_enabled = false;
                }
            }
        }
        console.warn(this.add_enabled);
    };
    PluginConfigComponent.prototype.addPlugin = function () {
        var _this = this;
        console.warn(this.selected_plugin, this.pluginconfig_name);
        this.setconfig_display = false;
        this.add_display = false;
        var config = { 'plugin_name': this.selected_plugin, 'plugin_enabled': false };
        // transfer to backend server
        this.pluginsdataService.addPluginConfig(this.pluginconfig_name, { 'config': config })
            .subscribe(function (response) {
            if (response) {
                console.log('PluginConfigComponent.addPlugin(): call ngOnInit()');
                _this.ngOnInit();
            }
        });
    };
    // -------------------------------------------------------------------
    //  Delete configuration
    //
    PluginConfigComponent.prototype.DeleteConfig = function () {
        console.log('PluginConfigComponent.DeleteConfig:');
        console.warn(this.dialog_configname);
        this.delete_param = { 'config': this.dialog_configname };
        this.confirmdelete_display = true;
    };
    PluginConfigComponent.prototype.DeleteConfigConfirm = function () {
        var _this = this;
        console.log('PluginConfigComponent.DeleteConfigConfirm:');
        console.warn(this.dialog_configname);
        // close confirm dialog
        this.confirmdelete_display = false;
        // delete on backend server
        this.pluginsdataService.deletePluginConfig(this.dialog_configname)
            .subscribe(function (response) {
            if (response) {
                // close configuration dialog
                _this.dialog_display = false;
                console.log('PluginConfigComponent.DeleteConfigConfirm(): call ngOnInit()');
                _this.ngOnInit();
                _this.restart_core_button = true;
            }
        });
        // alert('code for removal of plugin "' + this.dialog_configname + '" configurations is not yet implemented');
        return true;
    };
    PluginConfigComponent.prototype.DeleteConfigAbort = function () {
        console.log('PluginConfigComponent.DeleteConfigAbort:');
        // close confim dialog
        this.confirmdelete_display = false;
        return false;
    };
    PluginConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! ./plugin-config.component.html */ "./src/app/plugins/config/plugin-config.component.html"),
            providers: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
            styles: [__webpack_require__(/*! ./plugin-config.component.css */ "./src/app/plugins/config/plugin-config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_5__["ServerApiService"],
            _common_services_plugins_api_service__WEBPACK_IMPORTED_MODULE_6__["PluginsApiService"],
            _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_7__["OlddataService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _common_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PluginConfigComponent);
    return PluginConfigComponent;
}());



/***/ }),

/***/ "./src/app/plugins/plugin-list/plugins.component.css":
/*!***********************************************************!*\
  !*** ./src/app/plugins/plugin-list/plugins.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsdWdpbnMvcGx1Z2luLWxpc3QvcGx1Z2lucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/plugins/plugin-list/plugins.component.html":
/*!************************************************************!*\
  !*** ./src/app/plugins/plugin-list/plugins.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <table id=\"1\" class=\"table table-striped table-hover\">\r\n    <thead>\r\n    <tr class=\"shng_heading\">\r\n      <th style=\"width: 30px; border-top: 0\"></th>\r\n      <th style=\"width: 30px; border-top: 0\"></th>\r\n      <th style=\"width: 150px; border-top: 0\">{{ 'PLUGIN.TYPE'|translate }}</th>\r\n      <th style=\"width: 200px; border-top: 0\">{{ 'PLUGIN.CONFIGNAME'|translate }}</th>\r\n      <th style=\"width: 250px; border-top: 0\">{{ 'PLUGIN.PLUGINNAME'|translate }}</th>\r\n      <th style=\"width: 160px; border-top: 0\">{{ 'PLUGIN.INSTANCE'|translate }}</th>\r\n      <th style=\"width: 150px; border-top: 0\">{{ 'PLUGIN.VERSION'|translate }}</th>\r\n      <th style=\"width: 120px; border-top: 0\">{{ 'PLUGIN.MULTI  INSTANCE'|translate }}</th>\r\n      <th style=\"width: 40px;  border-top: 0;\" >{{ 'PLUGIN.WEBIF'|translate }}</th>\r\n      <th style=\"width: 260px; border-top: 0;\" >{{ 'PLUGIN.HELP'|translate }}</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <ng-container *ngFor=\"let plugin of plugininfo\">\r\n        <tr>\r\n          <td class=\"py-1\">\r\n            <ng-container *ngIf=\"plugin.stopped === true\">\r\n              <fa-icon style=\"color: red\" [icon]=\"faPauseCircle\"></fa-icon>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"plugin.stopped !== true\">\r\n              <fa-icon style=\"color: green\" [icon]=\"faPlayCircle\"></fa-icon>\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td class=\"py-1\" (click)=\"details.show()\">\r\n            <ng-container *ngIf=\"['web','protocol','interface','gateway','system'].includes(plugin.metadata.type)\">\r\n              <img src=\"assets/img/plugin_{{ plugin.metadata.type }}.svg\" style=\"width: 25px; cursor: pointer;\"/>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"plugin.smartplugin !== true\">\r\n              -\r\n            </ng-container>\r\n            <ng-container *ngIf=\"(plugin.smartplugin === true) && !['web','protocol','interface','gateway','system', 'classic'].includes(plugin.metadata.type)\">\r\n              <img src=\"assets/img/plugin_defaultlogo.png\" style=\"width: 25px; cursor: pointer;\"/>\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td class=\"py-1\" (click)=\"details.show()\">\r\n            <ng-container *ngIf=\"plugin.smartplugin === true\">\r\n              SmartPlugin\r\n            </ng-container>\r\n            <ng-container *ngIf=\"plugin.smartplugin !== true\">\r\n             Classic\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td class=\"py-1\" (click)=\"details.show()\">\r\n            {{ plugin.configname }}\r\n          </td>\r\n          <td class=\"py-1\" (click)=\"details.show()\">\r\n            {{ plugin.pluginname }} &nbsp;\r\n            <ng-container *ngIf=\"plugin.metadata.state && plugin.metadata.state.toLowerCase() === 'deprecated'\">\r\n              <fa-icon style=\"color: var(--shng-warning);\" [icon]=\"faExclamationTriangle\"></fa-icon>\r\n            </ng-container>\r\n          </td>\r\n          <td class=\"py-1\" (click)=\"details.show()\">{{ plugin.instancename }}</td>\r\n          <td class=\"py-1\" (click)=\"details.show()\">{{ plugin.version }}</td>\r\n          <td class=\"py-1\" (click)=\"details.show()\">\r\n            <ng-container *ngIf=\"plugin.multiinstance\">\r\n              {{ 'YES'|translate }}\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!plugin.multiinstance\">\r\n              {{ 'NO'|translate }}\r\n            </ng-container>\r\n          </td>\r\n          <td class=\"py-1\">\r\n            <ng-container *ngIf=\"plugin.webif_url !== ''\">\r\n              <a href=\"{{ plugin.webif_url }}\" target=\"_blank\">\r\n                <img src=\"assets/img/html.svg\" style=\"width: 35px; padding-right: 10px; cursor: pointer;\"/>\r\n              </a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"plugin.webif_url === ''\">\r\n              <a style=\"padding-right: 35px;\"></a>\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td class=\"py-1\">\r\n            <ng-container *ngIf=\"plugin.smartplugin === true\">\r\n              <a href=\"https://www.smarthomeng.de/user/plugins_doc/config/{{plugin.pluginname}}.html\" target=\"_blank\">\r\n                <img src=\"assets/img/info-button.svg\" style=\"width: 35px; padding-right: 10px; cursor: pointer;\"/>\r\n              </a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"plugin.metadata.documentation !== undefined && plugin.metadata.documentation !== ''\">\r\n              <a href=\"{{plugin.metadata.documentation}}\" target=\"_blank\">\r\n                <img src=\"assets/img/read-manual.svg\" style=\"width: 35px; padding-right: 10px; cursor: pointer;\"/>\r\n              </a>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"plugin.metadata.support !== undefined && plugin.metadata.support !== ''\">\r\n              <a href=\"{{plugin.metadata.support}}\" target=\"_blank\">\r\n                <img src=\"assets/img/forum_chat2.svg\" style=\"width: 25px; cursor: pointer;\"/>\r\n              </a>\r\n            </ng-container>\r\n          </td>\r\n        </tr>\r\n\r\n\r\n        <!------------------------------------------>\r\n        <!--   Modal dialog with plugin details   -->\r\n        <!------------------------------------------>\r\n\r\n        <div bsModal #details=\"bs-modal\" class=\"modal fade\" tabindex=\"1\" role=\"dialog\" aria-labelledby=\"dialog-sizes-name2\">\r\n          <div class=\"modal-dialog modal-lg\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n<!--\r\n                <h5 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">{{'PLUGIN.DETAILS OF CONFIGURATION'|translate}} '<strong>{{ plugin.configname }}</strong>' ({{'PLUGIN.PLUGIN'|translate}} '<strong>{{ plugin.pluginname }}</strong>')</h5>\r\n-->\r\n                <h5 id=\"dialog-sizes-name2\" class=\"modal-title pull-left\">\r\n                  <p [translate]=\"'PLUGIN.DETAILS OF CONFIGURATION'\" [translateParams]=\"{configname: plugin.configname, pluginname: plugin.pluginname }\"></p>\r\n                </h5>\r\n<!--\r\n                <p style=\"padding-top: 0px; padding-left: 2px;\" [translate]=\"'PLUGIN.UPDATES TRIGGERED BY'\" [translateParams]=\"{count: 42}\"></p>\r\n-->\r\n                <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"details.hide()\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n                <ng-container *ngIf=\"plugin.metadata.state && plugin.metadata.state.toLowerCase() === 'deprecated'\">\r\n                  <fa-icon style=\"color: var(--shng-warning);\" [icon]=\"faExclamationTriangle\"></fa-icon>\r\n                  <a style=\"width: 50%; padding:0px; background-color: #ffffff; border:0;\"><strong>&nbsp; {{'PLUGIN.DEPRECATED'|translate}}:</strong></a>\r\n                  <br>\r\n                  <p style=\"padding:0px; background-color: #f2f2f2; border:0;\">{{'PLUGIN.DEPRECATED_TEXT'|translate}}</p>\r\n\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"plugin.parameters && plugin.parameters.length !== 0\">\r\n                  <table class=\"table\" style=\"padding: 0px;\">\r\n                  <tr>\r\n                    <td style=\"width: 50%; padding:0px; background-color: #ffffff; border:0;\"><strong>{{'PLUGIN.PARAMETERS'|translate}}:</strong></td>\r\n                    <td style=\"width: 50%; padding:0px; background-color: #ffffff; border:0;\"></td>\r\n                  </tr>\r\n                  <tr>\r\n                    <!-- Parameters: left column -->\r\n                    <td style=\"padding-left:5px; padding-right:5px; padding-bottom:0px;\">\r\n                      <table class=\"table\">\r\n                        <tbody>\r\n                        <ng-container *ngFor=\"let param of plugin.parameters; index as i\">\r\n                          <tr *ngIf=\"i+1 <= parameterLines(plugin.parameters.length)\">\r\n                            <td style=\"padding:0px;\">{{param.name}} ( {{param.type}} ):&nbsp;</td>\r\n                            <td style=\"padding:0px;\">\r\n                              <strong>{{param.value}}</strong>\r\n                              <ng-container *ngIf=\"param.value === param.default\">&nbsp;[default]</ng-container>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                        </tbody>\r\n                      </table>\r\n                    </td>\r\n                    <!-- Parameters: right column -->\r\n                    <td style=\"padding-left:5px; padding-right:5px; padding-bottom:0px;\">\r\n                      <table class=\"table\">\r\n                        <tbody>\r\n                        <ng-container *ngFor=\"let param of plugin.parameters; index as i\">\r\n                          <tr *ngIf=\"i+1 > parameterLines(plugin.parameters.length)\">\r\n                            <td style=\"padding:0px;\">{{param.name}} ( {{param.type}} ):&nbsp;</td>\r\n                            <td style=\"padding:0px;\">\r\n                              <strong>{{param.value}}</strong>\r\n                              <ng-container *ngIf=\"param.value === param.default\">&nbsp;[default]</ng-container>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                        </tbody>\r\n                      </table>\r\n                    </td>\r\n                  </tr>\r\n                  </table>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"plugin.attributes && plugin.attributes.length !== 0\">\r\n                  <table class=\"table\">\r\n                    <tr>\r\n                      <td style=\"width: 33%; padding:0px; background-color: #ffffff; border:0;\"><strong>{{'PLUGIN.ITEM ATTRIBUTES'|translate}}:</strong></td>\r\n                      <td style=\"width: 33%; padding:0px; background-color: #ffffff; border:0;\"></td>\r\n                      <td style=\"width: 33%; padding:0px; background-color: #ffffff; border:0;\"></td>\r\n                    </tr>\r\n                    <tr>\r\n                      <!-- Item Attributes: left column -->\r\n                      <td style=\"padding-left:5px; padding-right:5px; padding-bottom:0px;\">\r\n                      <table class=\"table\">\r\n                        <tbody>\r\n                        <ng-container *ngFor=\"let attr of plugin.attributes; index as i\">\r\n                          <tr *ngIf=\"i+1 <= attributeLines(plugin.attributes.length)\">\r\n                            <td style=\"padding:0px;\">{{attr.name}}:&nbsp;</td>\r\n                            <td style=\"padding:0px;\"><strong>{{attr.type}}</strong></td>\r\n                          </tr>\r\n                        </ng-container>\r\n                        </tbody>\r\n                      </table>\r\n                      </td>\r\n                      <!-- Item Attributes: middle column -->\r\n                      <td style=\"padding-left:5px; padding-right:5px; padding-bottom:0px;\">\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                          <ng-container *ngFor=\"let attr of plugin.attributes; index as i\">\r\n                            <tr *ngIf=\"i+1 > attributeLines(plugin.attributes.length) && i+1 <= 2*attributeLines(plugin.attributes.length)\">\r\n                              <td style=\"padding:0px;\">{{attr.name}}:&nbsp;</td>\r\n                              <td style=\"padding:0px;\"><strong>{{attr.type}}</strong></td>\r\n                            </tr>\r\n                          </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </td>\r\n                      <!-- Item Attributes: right column -->\r\n                      <td style=\"padding-left:5px; padding-right:5px; padding-bottom:0px;\">\r\n                        <table class=\"table\">\r\n                          <tbody>\r\n                          <ng-container *ngFor=\"let attr of plugin.attributes; index as i\">\r\n                            <tr *ngIf=\"i+1 > 2*attributeLines(plugin.attributes.length)\">\r\n                              <td style=\"padding:0px;\">{{attr.name}}:&nbsp;</td>\r\n                              <td style=\"padding:0px;\"><strong>{{attr.type}}</strong></td>\r\n                            </tr>\r\n                          </ng-container>\r\n                          </tbody>\r\n                        </table>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"plugin.triggers && plugin.triggers.length !== 0\">\r\n                  <p style=\"padding-top: 0px; padding-left: 2px;\" [translate]=\"'PLUGIN.UPDATES TRIGGERED BY'\" [translateParams]=\"{count: plugin.triggers.length}\"></p>\r\n                </ng-container>\r\n\r\n                <strong>{{'PLUGIN.PLUGIN METADATA'|translate}}:</strong>\r\n                <table class=\"table\">\r\n                  <tr>\r\n                    <td style=\"padding:0px; width:25%;\">{{'PLUGIN.DESCRIPTION'|translate}}:&nbsp;</td>\r\n                    <ng-container *ngIf=\"plugin.metadata.description_long !==''\">\r\n                      <td style=\"padding:0px; width:75%;\">\r\n                        <div *ngFor=\"let s of plugin.metadata.description_long.split('\\n')\">\r\n                          {{s}} <br/>\r\n                        </div>\r\n                      </td>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"plugin.metadata.description_long ===''\">\r\n                      <td style=\"padding:0px; width:75%;\">{{plugin.metadata.description}}</td>\r\n                    </ng-container>\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"padding:0px;\">{{'PLUGIN.KEYWORDS'|translate}}:&nbsp;</td>\r\n                    <td style=\"padding:0px;\">{{plugin.metadata.keywords}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"padding:0px;\">{{'PLUGIN.MAINTAINER'|translate}}:&nbsp;</td>\r\n                    <td style=\"padding:0px;\">{{plugin.metadata.maintainer}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"padding:0px;\">{{'PLUGIN.TESTER'|translate}}:&nbsp;</td>\r\n                    <td style=\"padding:0px;\">{{plugin.metadata.tester}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"padding:0px;\">{{'PLUGIN.SUPPORT'|translate}}:&nbsp;</td>\r\n                    <td style=\"padding:0px;\">\r\n                      <ng-container *ngIf=\"plugin.metadata.support && plugin.metadata.support.startsWith('http')\">\r\n                        <a href=\"{{plugin.metadata.support}}\" target=\"_blank\">{{plugin.metadata.support}}</a>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"plugin.metadata.support && !plugin.metadata.support.startsWith('http')\">\r\n                        {{plugin.metadata.support}}\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td style=\"padding:0px;\">{{'PLUGIN.DOCUMENTATION'|translate}}:&nbsp;</td>\r\n                    <td style=\"padding:0px;\">\r\n                      <ng-container *ngIf=\"plugin.metadata.documentation && plugin.metadata.documentation.startsWith('http')\">\r\n                        <a href=\"{{plugin.metadata.documentation}}\" target=\"_blank\">{{plugin.metadata.documentation}}</a>\r\n                      </ng-container>\r\n                      <ng-container *ngIf=\"plugin.metadata.documentation && !plugin.metadata.documentation.startsWith('http')\">\r\n                        {{plugin.metadata.documentation}}\r\n                      </ng-container>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" tabindex=\"1\" autofocus=\"autofocus\" class=\"btn btn-primary btn-sm btn-shng\" (click)=\"details.hide()\">{{'BUTTON.CLOSE'|translate}}</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </ng-container>\r\n\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/plugins/plugin-list/plugins.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/plugins/plugin-list/plugins.component.ts ***!
  \**********************************************************/
/*! exports provided: PluginsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginsComponent", function() { return PluginsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _common_services_plugins_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/plugins-api.service */ "./src/app/common/services/plugins-api.service.ts");
/* harmony import */ var _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/services/olddata.service */ "./src/app/common/services/olddata.service.ts");







var PluginsComponent = /** @class */ (function () {
    function PluginsComponent(http, pluginsdataService, modalService) {
        this.http = http;
        this.pluginsdataService = pluginsdataService;
        this.modalService = modalService;
        this.faPlayCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlayCircle"];
        this.faPauseCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPauseCircle"];
        this.faExclamationTriangle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faExclamationTriangle"];
    }
    PluginsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('PluginsComponent.ngOnInit');
        this.pluginsdataService.getPluginsInfo()
            .subscribe(function (response) {
            _this.plugininfo = response;
            _this.plugininfo.sort(function (a, b) {
                return (a.pluginname + a.configname.toLowerCase() > b.pluginname + b.configname.
                    toLowerCase()) ? 1 : ((b.pluginname + b.configname.toLowerCase() > a.pluginname + a.configname.toLowerCase()) ? -1 : 0);
            });
        });
    };
    PluginsComponent.prototype.parameterLines = function (parameters) {
        var result = Math.round(parameters / 2);
        if (result < 3) {
            result = 3;
        }
        return result;
    };
    PluginsComponent.prototype.attributeLines = function (parameters) {
        var result = Math.round(parameters / 3);
        if (result < 2) {
            result = 2;
        }
        return result;
    };
    PluginsComponent.prototype.openModal = function (template, parm) {
        this.modalRef = this.modalService.show(template, { animated: false });
        console.log('openModal: ' + parm);
    };
    PluginsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plugins',
            template: __webpack_require__(/*! ./plugins.component.html */ "./src/app/plugins/plugin-list/plugins.component.html"),
            providers: [_common_services_olddata_service__WEBPACK_IMPORTED_MODULE_6__["OlddataService"]],
            styles: [__webpack_require__(/*! ./plugins.component.css */ "./src/app/plugins/plugin-list/plugins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_plugins_api_service__WEBPACK_IMPORTED_MODULE_5__["PluginsApiService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], PluginsComponent);
    return PluginsComponent;
}());



/***/ }),

/***/ "./src/app/scenes/scene-configuration/scene-configuration.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/scenes/scene-configuration/scene-configuration.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NjZW5lcy9zY2VuZS1jb25maWd1cmF0aW9uL3NjZW5lLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/scenes/scene-configuration/scene-configuration.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/scenes/scene-configuration/scene-configuration.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 60px;\">\r\n  <p>\r\n    scene-configuration works!\r\n  </p>\r\n\r\n  <h5>\r\n    <p style=\"color: var(--shng-blue)\">\r\n      <strong>Yet to be implemented</strong>\r\n    </p>\r\n  </h5>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/scenes/scene-configuration/scene-configuration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/scenes/scene-configuration/scene-configuration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SceneConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneConfigurationComponent", function() { return SceneConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SceneConfigurationComponent = /** @class */ (function () {
    function SceneConfigurationComponent() {
    }
    SceneConfigurationComponent.prototype.ngOnInit = function () {
    };
    SceneConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scene-configuration',
            template: __webpack_require__(/*! ./scene-configuration.component.html */ "./src/app/scenes/scene-configuration/scene-configuration.component.html"),
            styles: [__webpack_require__(/*! ./scene-configuration.component.css */ "./src/app/scenes/scene-configuration/scene-configuration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SceneConfigurationComponent);
    return SceneConfigurationComponent;
}());



/***/ }),

/***/ "./src/app/scenes/scene-list/scenes.component.css":
/*!********************************************************!*\
  !*** ./src/app/scenes/scene-list/scenes.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n:host /deep/ .ui-accordion .ui-accordion-header:hover a{\r\n  text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NlbmVzL3NjZW5lLWxpc3Qvc2NlbmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL3NjZW5lcy9zY2VuZS1saXN0L3NjZW5lcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAudWktYWNjb3JkaW9uIC51aS1hY2NvcmRpb24taGVhZGVyOmhvdmVyIGF7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/scenes/scene-list/scenes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/scenes/scene-list/scenes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <p-accordion [multiple]=\"true\">\r\n    <ng-container *ngFor=\"let scene of sceneList\">\r\n      <p-accordionTab>\r\n        <p-header>\r\n          <span style=\"font-size: large; font-weight: bold; \">{{scene['path']}}</span>\r\n          <ng-container *ngIf=\"scene['name'] && scene['name'] !== ''\">\r\n            &nbsp;  &nbsp; ({{scene['name']}})\r\n          </ng-container>\r\n        </p-header>\r\n        <div style=\"margin-left: 17px;\">\r\n          <table class=\"table table-striped table-hover\" style=\"border: 1px solid #ddd; \">\r\n          <colgroup>\r\n            <col width=\"15px\">\r\n            <col width=\"50px\">\r\n            <col width=\"80px\">\r\n            <col width=\"400px\">\r\n            <col minwidth=\"300px\">\r\n          </colgroup>\r\n          <thead>\r\n          <tr class=\"shng_heading\">\r\n            <th colspan=\"2\">{{ 'SCENES.SCENE'|translate }}</th>\r\n            <th style=\"padding-left: 0px;\">{{ 'SCENES.LEARN'|translate }}</th>\r\n            <th style=\"padding-left: 0px;\">{{ 'SCENES.ITEM'|translate }}</th>\r\n            <th style=\"padding-left: 0px;\">{{ 'SCENES.VALUE'|translate }}</th>\r\n            <th></th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n          <ng-container *ngFor=\"let value of scene['values']\">\r\n          <ng-container *ngFor=\"let action of value['action_list']\">\r\n\r\n            <ng-container *ngIf=\"(action === value['action_list'][0]) && (value['action_name'] !== '')\">\r\n              <tr>\r\n                <td class=\"p-1\"></td>\r\n                <td class=\"p-1\" colspan=\"3\"><strong>{{ value['action'] }}</strong>: {{ value['action_name'] }}</td>\r\n                <td class=\"p-1\"></td>\r\n                <td class=\"p-1\"></td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <tr>\r\n              <td class=\"p-1\"></td>\r\n              <td class=\"p-1\">\r\n                <ng-container *ngIf=\"action === value['action_list'][0] && value['action_name'] === ''\" >\r\n                  <strong>{{ value['action'] }}</strong>:\r\n                </ng-container>\r\n              </td>\r\n\r\n              <td class=\"p-1\">\r\n                <ng-container *ngIf=\"action[2]\" >\r\n                  {{ 'ja'|translate }}\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!action[2]\" >\r\n                  {{ 'nein'|translate }}\r\n                </ng-container>\r\n              </td>\r\n\r\n              <td class=\"p-1\">{{ action[0] }}</td>\r\n\r\n              <td class=\"p-1\">\r\n                <ng-container *ngIf=\"!action[3] || action[3] === action[1]\" >\r\n                  {{ action[1] }}\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!(!action[3] || action[3] === action[1])\" >\r\n                  {{ action[3] }} (default: {{ action[1] }})\r\n                </ng-container>\r\n              </td>\r\n\r\n              <td class=\"p-1\">\r\n              </td>\r\n\r\n            </tr>\r\n\r\n          </ng-container>\r\n          </ng-container>\r\n\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n      </p-accordionTab>\r\n    </ng-container>\r\n  </p-accordion>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/scenes/scene-list/scenes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/scenes/scene-list/scenes.component.ts ***!
  \*******************************************************/
/*! exports provided: ScenesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScenesComponent", function() { return ScenesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_services_scenes_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/scenes-api.service */ "./src/app/common/services/scenes-api.service.ts");






var ScenesComponent = /** @class */ (function () {
    function ScenesComponent(http, translate, messageService, dataService) {
        this.http = http;
        this.translate = translate;
        this.messageService = messageService;
        this.dataService = dataService;
        this.systeminfo = {};
    }
    ScenesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ScenesComponent.ngOnInit');
        this.dataService.getScenes()
            .subscribe(function (response) {
            _this.sceneList = response;
            //          this.schedulerinfo.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)});
            console.log('getScenes', { response: response });
        });
    };
    ScenesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scenes',
            template: __webpack_require__(/*! ./scenes.component.html */ "./src/app/scenes/scene-list/scenes.component.html"),
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
            styles: [__webpack_require__(/*! ./scenes.component.css */ "./src/app/scenes/scene-list/scenes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _common_services_scenes_api_service__WEBPACK_IMPORTED_MODULE_5__["ScenesApiService"]])
    ], ScenesComponent);
    return ScenesComponent;
}());



/***/ }),

/***/ "./src/app/schedulers/schedulers.component.css":
/*!*****************************************************!*\
  !*** ./src/app/schedulers/schedulers.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2NoZWR1bGVycy9zY2hlZHVsZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3NjaGVkdWxlcnMvc2NoZWR1bGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/schedulers/schedulers.component.html":
/*!******************************************************!*\
  !*** ./src/app/schedulers/schedulers.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SCHEDULERS.ITEM SCHEDULERS'|translate }}\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th style=\"width: 280px; border-top: 0\">{{ 'SCHEDULERS.SCHEDULER'|translate }}</th>\r\n          <th style=\"width: 250px; border-top: 0\">{{ 'SCHEDULERS.NEXT EXECUTION'|translate }}</th>\r\n          <th style=\"width: 130px; border-top: 0\">{{ 'SCHEDULERS.CYCLE'|translate }}</th>\r\n          <th style=\"border-top: 0\">{{ 'SCHEDULERS.CRONTAB'|translate }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <ng-container  *ngFor=\"let scheduler of schedulerinfo\">\r\n          <tr *ngIf=\"scheduler.group === 'item'\">\r\n            <td class=\"py-1\">{{ scheduler.name }}</td>\r\n            <td class=\"py-1\">{{ scheduler.next }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cycle }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cron }}</td>\r\n          </tr>\r\n        </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SCHEDULERS.LOGIC SCHEDULERS'|translate }}\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th style=\"width: 280px; border-top: 0\">{{ 'SCHEDULERS.SCHEDULER'|translate }}</th>\r\n          <th style=\"width: 250px; border-top: 0\">{{ 'SCHEDULERS.NEXT EXECUTION'|translate }}</th>\r\n          <th style=\"width: 130px; border-top: 0\">{{ 'SCHEDULERS.CYCLE'|translate }}</th>\r\n          <th style=\"border-top: 0\">{{ 'SCHEDULERS.CRONTAB'|translate }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <ng-container  *ngFor=\"let scheduler of schedulerinfo\">\r\n          <tr *ngIf=\"scheduler.group === 'logic'\">\r\n            <td class=\"py-1\">{{ scheduler.name }}</td>\r\n            <td class=\"py-1\">{{ scheduler.next }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cycle }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cron }}</td>\r\n          </tr>\r\n        </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SCHEDULERS.PLUGIN SCHEDULERS'|translate }}\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th style=\"width: 280px; border-top: 0\">{{ 'SCHEDULERS.SCHEDULER'|translate }}</th>\r\n          <th style=\"width: 250px; border-top: 0\">{{ 'SCHEDULERS.NEXT EXECUTION'|translate }}</th>\r\n          <th style=\"width: 130px; border-top: 0\">{{ 'SCHEDULERS.CYCLE'|translate }}</th>\r\n          <th style=\"border-top: 0\">{{ 'SCHEDULERS.CRONTAB'|translate }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <ng-container  *ngFor=\"let scheduler of schedulerinfo\">\r\n          <tr *ngIf=\"scheduler.group === 'plugin'\">\r\n            <td class=\"py-1\">{{ scheduler.name }}</td>\r\n            <td class=\"py-1\">{{ scheduler.next }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cycle }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cron }}</td>\r\n          </tr>\r\n        </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SCHEDULERS.OTHER SCHEDULERS'|translate }}\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th style=\"width: 280px; border-top: 0\">{{ 'SCHEDULERS.SCHEDULER'|translate }}</th>\r\n          <th style=\"width: 250px; border-top: 0\">{{ 'SCHEDULERS.NEXT EXECUTION'|translate }}</th>\r\n          <th style=\"width: 130px; border-top: 0\">{{ 'SCHEDULERS.CYCLE'|translate }}</th>\r\n          <th style=\"border-top: 0\">{{ 'SCHEDULERS.CRONTAB'|translate }}</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <ng-container  *ngFor=\"let scheduler of schedulerinfo\">\r\n          <tr *ngIf=\"scheduler.group === 'other'\">\r\n            <td class=\"py-1\">{{ scheduler.name }}</td>\r\n            <td class=\"py-1\">{{ scheduler.next }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cycle }}</td>\r\n            <td class=\"py-1\">{{ scheduler.cron }}</td>\r\n          </tr>\r\n        </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n  </tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/schedulers/schedulers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/schedulers/schedulers.component.ts ***!
  \****************************************************/
/*! exports provided: SchedulersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulersComponent", function() { return SchedulersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _common_services_schedulers_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/services/schedulers-api.service */ "./src/app/common/services/schedulers-api.service.ts");




var SchedulersComponent = /** @class */ (function () {
    function SchedulersComponent(http, dataService) {
        this.http = http;
        this.dataService = dataService;
    }
    SchedulersComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('SchedulersComponent.ngOnInit');
        this.dataService.getSchedulers()
            .subscribe(function (response) {
            _this.schedulerinfo = response;
            //          this.schedulerinfo.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)});
            console.log('getSchedulers', { response: response });
        });
    };
    SchedulersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-schedulers',
            template: __webpack_require__(/*! ./schedulers.component.html */ "./src/app/schedulers/schedulers.component.html"),
            styles: [__webpack_require__(/*! ./schedulers.component.css */ "./src/app/schedulers/schedulers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _common_services_schedulers_api_service__WEBPACK_IMPORTED_MODULE_3__["SchedulersApiService"]])
    ], SchedulersComponent);
    return SchedulersComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n*/\r\n\r\n.tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n.CodeMirror {\r\n  width:48vw;\r\n  height:70vh;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0NBTUM7O0FBRUQ7RUFDRSw4QkFBOEI7RUFDOUIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFHQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuOjpuZy1kZWVwIC50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuKi9cclxuXHJcbi50YWItc2huZyA+IGF7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcclxuICBjb2xvcjpyZ2IoMTYwLCAxNjAsIDE2MCk7XHJcbn1cclxuXHJcblxyXG4uQ29kZU1pcnJvciB7XHJcbiAgd2lkdGg6NDh2dztcclxuICBoZWlnaHQ6NzB2aDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SERVICES.SERVICES'|translate }}\">\r\n      <div class=\"container-fluid\"style=\"margin-top: 0px; margin-left: 10px; margin-right: 10px;\"></div>\r\n      <div style=\"margin-left: 10px; margin-right: 10px;\">\r\n        <div class=\"table-responsive\">\r\n          <table class=\"table table-striped\">\r\n            <thead border=\"0\">\r\n              <tr class=\"shng_heading\">\r\n                <th width=\"70\" style=\"border: 0px;\"></th>\r\n                <th style=\"width:350px; border: 0px;\">{{'SERVICES.SERVICE'|translate}}</th>\r\n                <th style=\"width:300px; border: 0px;\">{{'SERVICES.STATUS'|translate}}</th>\r\n                <th style=\"border: 0px;\">{{'SERVICES.ACTION'|translate}}</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td><img src=\"assets/img/languages.svg\" alt=\"Icon languages\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">{{'SERVICES.LANGUAGE_UI'|translate}}</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{this.default_language}}</strong></td>\r\n                <td style=\"padding-top:21px;\">\r\n                  <p-dropdown [style]=\"{'width':'150px'}\" [options]=\"valid_languagelist\" [showClear]=\"false\" placeholder=\"{{valid_default_language}}\" (onChange)=\"setLanguage()\" [(ngModel)]=\"selected_language\" (ngModelChange)=\"selected_language = $event\"></p-dropdown>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td><img src=\"assets/img/logo_small_76x76.png\" alt=\"SmartHomeNG logo\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">SmartHomeNG</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{shng_status}}</strong></td>\r\n                <td style=\"padding-top:22px;\">\r\n                  <button pButton type=\"button\" icon=\"fa fa-circle-notch\" [disabled]=\"(shng_statuscode !== 20)\" (click)=\"this.restartShng()\" label=\"{{'BUTTON.RESTART_SHNG'|translate}}\" class=\"ui-button-success\"></button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td><img src=\"assets/img/backup.svg\" alt=\"SmartHomeNG logo\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">{{'SERVICES.BACKUP_CONFIG'|translate}}</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{' '}}</strong></td>\r\n                <td style=\"padding-top:22px;\">\r\n                  <button pButton type=\"button\" icon=\"fa fa-download\" [disabled]=\"backup_disabled\" (click)=\"this.downloadBackup()\" label=\"{{'BUTTON.DOWNLOAD'|translate}}\" class=\"ui-button-success\"></button>\r\n                </td>\r\n              </tr>\r\n              <tr>\r\n                <td><img src=\"assets/img/plugin_gateway.svg\" alt=\"Icon knxd\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">{{'SERVICES.KNX_SUPPORT'|translate}}</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{serverInfo.daemon_knx|translate}}</strong></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                <td><img src=\"assets/img/pins_and_ribbon.svg\" alt=\"Icon 1-wire\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">{{'SERVICES.OW_SUPPORT'|translate}}</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{serverInfo.daemon_ow|translate}}</strong></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                <td><img src=\"assets/img/mqtt_logo.png\" alt=\"Icon mqtt\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">{{'SERVICES.MQTT_SUPPORT'|translate}}</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{serverInfo.daemon_mqtt|translate}}</strong></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                <td><img src=\"assets/img/node-red.png\" alt=\"Icon node_red\" width=\"48\" height=\"48\"></td>\r\n                <td style=\"padding-top:23px;\">{{'SERVICES.NODE_RED_SUPPORT'|translate}}</td>\r\n                <td style=\"padding-top:23px;\"><strong>{{serverInfo.daemon_node_red|translate}}</strong></td>\r\n                <td></td>\r\n              </tr>\r\n              <tr>\r\n                <td>\r\n                  <img src=\"assets/img/password.svg\" alt=\"Icon password\" width=\"48\" height=\"48\">\r\n                  <div id=\"hash_value\" style=\"margin-top: 15px; width:70px;\">{{ pwd_hash }}</div>\r\n                </td>\r\n                <td style=\"padding-top:23px;\">\r\n                  {{'SERVICES.PASSWORD_HASH'|translate}}\r\n                </td>\r\n                <td style=\"padding-top:13px;\">\r\n                  <input class=\"form-control\" [(ngModel)]=\"pwd_clear\" [type]=\"pwd_show ? 'text' : 'password'\" id=\"plainpass\" size=\"20\" maxlength=\"50\" style=\"width: 250px;\"/>\r\n                  <input type=\"checkbox\" [(ngModel)]=\"pwd_show\" style=\"...\" id=\"showtext\"  onclick=\"this.pwd_show = true;\"> {{ 'Passwort anzeigen' }}\r\n                </td>\r\n                <td style=\"padding-top:22px;\">\r\n                  <button pButton type=\"button\" icon=\"fa fa-toolbox\" (click)=\"createPwdHash()\" label=\"{{'BUTTON.CREATE_HASH'|translate}}\" class=\"ui-button-success\"></button>\r\n                </td>\r\n              </tr>\r\n\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n    </tab>\r\n\r\n\r\n    <!-- ------------------------------------------------------------------------------------\r\n          Eval checker\r\n    ------------------------------------------------------------------------------------- -->\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SERVICES.EVAL CHECKER'|translate }}\">\r\n      <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n      </div>\r\n\r\n      <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n        {{ 'SERVICES.EVAL_CHECK_SOURCE'|translate }}\r\n        <ngx-codemirror #evalcodeeditor\r\n                        [options]=\"cmEvalOptions\"\r\n                        [(ngModel)]=\"myEvalTextarea\"\r\n                        [autoFocus]=\"true\"\r\n        ></ngx-codemirror>\r\n      </div>\r\n\r\n      <br>\r\n      <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n        {{ 'SERVICES.EVAL_RELATIVE_TO'|translate }}: &nbsp;\r\n        <input type=\"text\" pInputText style=\"width: 400px\" [(ngModel)]=\"myRelativeTo\"/>\r\n        <button pButton label=\"{{ 'BUTTON.CHECK'|translate }}\" type=\"button\" style=\"margin-right: 0px;\" (click)=\"checkEval()\" class=\"float-sm-right ui-button-success\"></button>\r\n      </div>\r\n\r\n      <br>\r\n      <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n        {{ 'SERVICES.EVAL_CHECK_EXPANDED'|translate }}\r\n        <ngx-codemirror #evalcodeeditor2\r\n                        [options]=\"cmEvalOptionsOutput\"\r\n                        [ngModel]=\"myEvalTextOutput\"\r\n                        [autoFocus]=\"true\"\r\n                        [disabled]=\"true\"\r\n        ></ngx-codemirror>\r\n      </div>\r\n\r\n\r\n      <br>\r\n      <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n        <table>\r\n          <tr>\r\n            <td>{{ 'SERVICES.EVAL_CHECK_RESULT'|translate }}: &nbsp;</td>\r\n            <td><strong>{{ myEvalResult }}</strong></td>\r\n          </tr>\r\n          <tr>\r\n            <td>{{ 'SERVICES.EVAL_RESULT_TYPE'|translate }}: &nbsp;</td>\r\n            <td><strong>{{ myResultType }}</strong></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n    </tab>\r\n\r\n\r\n    <!-- ------------------------------------------------------------------------------------\r\n          YAML Syntax checker\r\n    ------------------------------------------------------------------------------------- -->\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SERVICES.YAML CHECKER'|translate }}\">\r\n      <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n      </div>\r\n\r\n      <table style=\"width: 100%\">\r\n      <tbody>\r\n      <td style=\"min-width: 50%\">\r\n        <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n          {{ 'SERVICES.YAML_CHECK_SOURCE'|translate }}\r\n          <button pButton label=\"{{ 'BUTTON.CHECK'|translate }}\" type=\"button\" style=\"margin-right: 0px;\" (click)=\"checkYaml()\" class=\"float-sm-right ui-button-success\"></button>\r\n        </div>\r\n      </td>\r\n      <td style=\"min-width: 50%\">\r\n        <div style=\"font-weight: normal; padding-top: 10px; padding-left: 0px;\">\r\n          {{ 'SERVICES.YAML_CHECK_RESULT'|translate }}\r\n        </div>\r\n      </td>\r\n      <tr>\r\n        <td>\r\n        <div style=\"height: 100px; margin-top: 10px; padding-left: 10px; padding-right: 5px; width: 100%\">\r\n          <ngx-codemirror #codeeditor\r\n            [options]=\"cmOptions\"\r\n            [(ngModel)]=\"myTextarea\"\r\n            [autoFocus]=\"true\"\r\n          ></ngx-codemirror>\r\n        </div>\r\n        </td>\r\n        <td>\r\n        <div style=\"height: 100px; margin-top: 10px; padding-left: 0px; padding-right: 15px; width: 100%\">\r\n          <ngx-codemirror #codeeditor2\r\n            [options]=\"cmOptionsOutput\"\r\n            [ngModel]=\"myTextOutput\"\r\n            [autoFocus]=\"true\"\r\n            [disabled]=\"true\"\r\n          ></ngx-codemirror>\r\n        </div>\r\n        </td>\r\n      </tr>\r\n      </tbody></table>\r\n    </tab>\r\n\r\n\r\n    <!-- ------------------------------------------------------------------------------------\r\n           CONF to YAML converter\r\n    ------------------------------------------------------------------------------------- -->\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SERVICES.CONF TO YAML'|translate }}\">\r\n      <div class=\"container-fluid\" style=\"margin-top: 10px; margin-left: 10px; margin-right: 10px;\">\r\n      </div>\r\n\r\n      <table style=\"width: 100%\">\r\n        <tbody>\r\n        <td style=\"min-width: 50%\">\r\n          <div style=\"font-weight: normal; padding-top: 10px; padding-left: 10px; padding-right: 5px;\">\r\n            {{ 'SERVICES.YAML_CONVERTER_SOURCE'|translate }}\r\n            <button pButton label=\"{{ 'BUTTON.CHECK'|translate }}\" type=\"button\" style=\"margin-right: 0px;\" (click)=\"convertYaml()\" class=\"float-sm-right ui-button-success\"></button>\r\n          </div>\r\n        </td>\r\n        <td style=\"min-width: 50%\">\r\n          <div style=\"font-weight: normal; padding-top: 10px; padding-left: 0px;\">\r\n            {{ 'SERVICES.YAML_CONVERTER_RESULT'|translate }}\r\n          </div>\r\n        </td>\r\n        <tr>\r\n          <td>\r\n            <div style=\"height: 100px; margin-top: 10px; padding-left: 10px; padding-right: 5px; width: 100%\">\r\n              <ngx-codemirror #convertercodeeditor\r\n                              [options]=\"cmConveterOptions\"\r\n                              [(ngModel)]=\"myConverterTextarea\"\r\n                              [autoFocus]=\"true\"\r\n              ></ngx-codemirror>\r\n            </div>\r\n          </td>\r\n          <td>\r\n            <div style=\"height: 100px; margin-top: 10px; padding-left: 0px; padding-right: 15px; width: 100%\">\r\n              <ngx-codemirror #convertercodeeditor2\r\n                              [options]=\"cmConverterOptionsOutput\"\r\n                              [ngModel]=\"myConverterTextOutput\"\r\n                              [autoFocus]=\"true\"\r\n                              [disabled]=\"true\"\r\n              ></ngx-codemirror>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        </tbody></table>\r\n    </tab>\r\n\r\n\r\n    <!-- ------------------------------------------------------------------------------------\r\n          Cache Checker\r\n    ------------------------------------------------------------------------------------- -->\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SERVICES.CACHE_CHECKER'|translate }}\">\r\n      <div class=\"container-fluid\" style=\"margin-top: 30px;\">\r\n        {{ 'SERVICES.FILES_WITHOUT_ITEM'|translate }} /var/cache: <strong>{{ cacheInfo.length }}</strong>\r\n        <br>&nbsp;\r\n        <table class=\"table table-striped\" style=\"border: 1px solid #ccc;\">\r\n          <thead><tr>\r\n            <th><input [(ngModel)]=\"cacheAllChecked\" (change)=\"cacheCheckAll()\" type=\"checkbox\"/></th>\r\n            <th style=\"width: 550px;\">{{ 'SERVICES.FILENAME'|translate }}</th>\r\n            <th style=\"min-width:200px;\">{{ 'SERVICES.LAST_MODIFICATION'|translate }}</th>\r\n            <th style=\"min-width:200px;\">{{ 'SERVICES.CREATION_DATE'|translate }}</th>\r\n            <th>{{ 'SERVICES.ACTIONS'|translate }}</th>\r\n          </tr></thead>\r\n\r\n          <tbody>\r\n            <ng-container *ngFor=\"let cacheEntry of cacheInfo; index as i\">\r\n              <tr>\r\n                <td><input [(ngModel)]=\"cacheEntry.checked\" type=\"checkbox\"/></td>\r\n                <td>{{ cacheEntry.filename }}</td>\r\n                <td>{{ cacheEntry.last_modified }}</td>\r\n                <td>{{ cacheEntry.created }}</td>\r\n                <td>\r\n                  <button pButton type=\"button\" (click)=\"deleteCacheEntry(i)\" label=\"{{'BUTTON.DELETE'|translate}}\" class=\"ui-button-success\"></button>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n\r\n        <ng-container *ngIf=\"cacheInfo.length !== 0\">\r\n          <button pButton type=\"button\" (click)=\"deleteCacheSelected()\" label=\"{{'BUTTON.DELETE_SELECTED'|translate}}\" class=\"ui-button-success\"></button>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"cacheInfo.length === 0\">\r\n          <button pButton type=\"button\" (click)=\"loadCacheOrphans()\" label=\"{{'BUTTON.UPDATE'|translate}}\" class=\"ui-button-success\"></button>\r\n        </ng-container>\r\n        <br>&nbsp;\r\n      </div>\r\n\r\n    </tab>\r\n\r\n  </tabset>\r\n</div>\r\n\r\n\r\n<p-dialog header=\"{{'SERVICES.BACKUP_DONE_TITLE'|translate}}\" [(visible)]=\"show_backup_confirm\" [modal]=\"true\" [responsive]=\"true\" [style]=\"{width: '400px', minWidth: '200px'}\" [minY]=\"70\"\r\n          [baseZIndex]=\"10000\">\r\n    <span>{{'SERVICES.BACKUP_DONE'|translate}}</span>\r\n  <p-footer>\r\n    <button type=\"button\" pButton icon=\"pi pi-check\" (click)=\"show_backup_confirm = false\" label=\"{{'BUTTON.OK'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/services/services-api.service */ "./src/app/common/services/services-api.service.ts");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/services/shared.service */ "./src/app/common/services/shared.service.ts");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_8__);









var ServicesComponent = /** @class */ (function () {
    //  schedulerinfo: SchedulerInfo[];
    function ServicesComponent(http, translate, shared, dataService, dataServiceServer) {
        this.http = http;
        this.translate = translate;
        this.shared = shared;
        this.dataService = dataService;
        this.dataServiceServer = dataServiceServer;
        this.serverInfo = {};
        this.status_errorcount = 0;
        this.valid_languagelist = [];
        this.valid_default_language = '          ';
        this.selected_language = null;
        this.shng_statuscode = 0;
        this.pwd_clear = '';
        this.backup_disabled = false;
        this.show_backup_confirm = false;
        // -----------------------------------------------------------------
        //  Vars for the codemirror components
        //
        this.rulers = [];
        this.myEvalTextarea = '';
        this.myRelativeTo = '';
        this.myEvalResult = '';
        this.myResultType = '';
        this.cmEvalOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess'
            },
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'python',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
        };
        this.myEvalTextOutput = '';
        this.cmEvalOptionsOutput = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess'
            },
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'python',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
        };
        this.myTextarea = '';
        this.cmOptions = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess'
            },
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
        };
        this.myTextOutput = '';
        this.cmOptionsOutput = {
            indentWithTabs: false,
            indentUnit: 4,
            tabSize: 4,
            extraKeys: {
                'Tab': 'insertSoftTab',
                'Shift-Tab': 'indentLess'
            },
            lineNumbers: true,
            readOnly: false,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            autorefresh: true,
            fixedGutter: true,
        };
        this.myConverterTextarea = '';
        this.cmConveterOptions = {
            lineNumbers: true,
            readOnly: false,
            indentUnit: 4,
            lineSeparator: '\n',
            rulers: this.rulers,
            // mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            indentWithTabs: false,
            autorefresh: true,
            fixedGutter: true,
        };
        this.myConverterTextOutput = '';
        this.cmConverterOptionsOutput = {
            lineNumbers: true,
            readOnly: false,
            indentUnit: 4,
            lineSeparator: '\n',
            rulers: this.rulers,
            mode: 'yaml',
            lineWrapping: false,
            firstLineNumber: 1,
            indentWithTabs: false,
            autorefresh: true,
            fixedGutter: true,
        };
        this.cacheInfo = [];
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ServicesComponent.ngOnInit');
        for (var i = 1; i <= 100; i++) {
            this.rulers.push({ color: '#eee', column: i * 4, lineStyle: 'dashed' });
        }
        this.shng_status = '?';
        this.default_language = sessionStorage.getItem('default_language');
        this.dataServiceServer.getServerinfo()
            .subscribe(function (response) {
            _this.serverInfo = response;
            _this.getShngStatus();
            //          this.valid_languagelist = [{label: 'English', value: 'en'}, {label: 'Deutsch', value: 'de'}, {label: 'Français', value: 'fr'},
            //          {label: 'Polski', value: 'pl'}];
            _this.valid_languagelist = [
                { label: 'English', value: 'en' },
                { label: 'Deutsch', value: 'de' },
                { label: 'Français', value: 'fr' }
            ];
            // this.valid_default_language = 'Deutsch';
            _this.selected_language = _this.default_language;
            _this.loadCacheOrphans();
        });
    };
    ServicesComponent.prototype.loadCacheOrphans = function () {
        var _this = this;
        this.dataService.getCacheOrphans()
            .subscribe(function (response) {
            _this.cacheInfo = response;
            _this.cacheAllChecked = false;
            // console.log('loadChacheOrphans', this.cacheInfo);
        });
    };
    ServicesComponent.prototype.deleteCacheEntry = function (entryNr) {
        var _this = this;
        // console.log('deleteCacheEntry', this.cacheInfo[entryNr].filename);
        this.dataService.deleteCacheFile(this.cacheInfo[entryNr].filename)
            .subscribe(function (response) {
            _this.loadCacheOrphans();
        });
    };
    ServicesComponent.prototype.deleteCacheSelected = function () {
        var _this = this;
        var filelist = [];
        for (var i = 0; i < this.cacheInfo.length; i++) {
            if (this.cacheInfo[i].checked) {
                filelist.push(this.cacheInfo[i].filename);
            }
        }
        this.dataService.deleteCacheFile(JSON.stringify(filelist))
            .subscribe(function (response) {
            _this.loadCacheOrphans();
        });
    };
    ServicesComponent.prototype.cacheCheckAll = function () {
        for (var i = 0; i < this.cacheInfo.length; i++) {
            this.cacheInfo[i].checked = this.cacheAllChecked;
        }
    };
    ServicesComponent.prototype.ngAfterViewChecked = function () {
        var evalEditor1 = this.evalCodeEditor.codeMirror;
        var evalEditor2 = this.evalCodeEditor2.codeMirror;
        var h = evalEditor1.getViewport();
        evalEditor1.setSize('100%', 160);
        evalEditor1.refresh();
        evalEditor2.setSize('100%', 160);
        evalEditor2.refresh();
        var editor1 = this.codeEditor.codeMirror;
        var editor2 = this.codeEditor2.codeMirror;
        editor1.refresh();
        editor2.refresh();
        var editor3 = this.converterCodeEditor.codeMirror;
        var editor4 = this.converterCodeEditor2.codeMirror;
        editor3.refresh();
        editor4.refresh();
    };
    ServicesComponent.prototype.createPwdHash = function () {
        console.log('createPwdHash');
        this.pwd_hash = Object(js_sha512__WEBPACK_IMPORTED_MODULE_8__["sha512"])(this.pwd_clear);
    };
    ServicesComponent.prototype.checkYaml = function () {
        // this.myTextoutput = this.myTextarea;
        var _this = this;
        this.dataService.CheckYamlText(this.myTextarea)
            .subscribe(function (response) {
            _this.myTextOutput = response;
            _this.cmOptionsOutput.lineNumbers = true;
            if (_this.myTextOutput.startsWith('ERROR:')) {
                _this.cmOptionsOutput.lineNumbers = false;
            }
            var editor2 = _this.codeEditor2.codeMirror;
            editor2.refresh();
        });
    };
    ServicesComponent.prototype.checkEval = function () {
        var _this = this;
        var evalData = { 'expression': this.myEvalTextarea, 'relative_to': this.myRelativeTo };
        this.dataService.CheckEvalData(evalData)
            .subscribe(function (response) {
            var myResponse = response;
            _this.myEvalTextOutput = myResponse.expression;
            _this.myResultType = myResponse.type;
            if (_this.myResultType === 'list' || _this.myResultType === 'dict') {
                _this.myEvalResult = JSON.stringify(myResponse.result);
            }
            else {
                _this.myEvalResult = myResponse.result;
            }
        });
    };
    ServicesComponent.prototype.convertYaml = function () {
        // this.myTextoutput = this.myTextarea;
        var _this = this;
        this.dataService.ConvertToYamlText(this.myConverterTextarea)
            .subscribe(function (response) {
            _this.myConverterTextOutput = response;
            _this.cmConverterOptionsOutput.lineNumbers = true;
            //          if (this.myConverterTextOutput.startsWith('ERROR:')) {
            //            this.cmConverterOptionsOutput.lineNumbers = false;
            //          }
            //          const editor4 = this.converterCodeEditor2.codeMirror;
            //          editor4.refresh();
        });
    };
    ServicesComponent.prototype.setLanguage = function () {
        console.log('setLanguage', this.selected_language);
        sessionStorage.setItem('default_language', this.selected_language);
        this.shared.setGuiLanguage();
        this.default_language = sessionStorage.getItem('default_language');
    };
    // -------------------------------------------------------
    // translate status text of SmartHomeNG
    //
    ServicesComponent.prototype.translate_shngStatus = function (text) {
        var translated_text = this.translate.instant('SHNG_STATE.' + text);
        //    if (translated_text.startsWith('SHNG_STATE.')) {
        //      return text;
        //    }
        return translated_text;
    };
    // -------------------------------------------------------
    // poll the status of SmartHomeNG and schedule next poll
    //
    ServicesComponent.prototype.getShngStatus = function () {
        var _this = this;
        // duration in seconds
        var interval1 = 5000; // standard polling: every 5 seconds
        var interval2 = 1000; // polling while (re)starting: every second
        var interval3 = 2000; // polling while in error state (shng not running)
        this.dataServiceServer.getShngServerStatus()
            .subscribe(function (response) {
            var res = response;
            if (res.code === undefined) {
                // shng is not running
                _this.status_errorcount += 1;
                console.log('getShngStatus', 'SmartHomeNG not running');
                _this.shng_status = '';
            }
            else {
                // console.log('getShngStatus', res.code, res.text);
                _this.shng_statuscode = res.code;
                _this.shng_status = _this.translate_shngStatus(res.text);
                _this.status_errorcount = 0;
            }
            if (_this.status_errorcount < 10) {
                // schedule next status check
                var interval = interval1;
                if (res.code !== 20) {
                    // code = 20 -> status running
                    if (_this.status_errorcount === 0) {
                        interval = interval2;
                    }
                    else {
                        interval = interval3;
                    }
                }
                _this.sleep(interval).then(function () {
                    _this.getShngStatus();
                });
            }
            else {
                console.warn('getShngStatus', 'Statuspolling aborted');
                _this.shng_status = _this.translate_shngStatus('not active');
                _this.shng_statuscode = -1;
            }
        });
    };
    ServicesComponent.prototype.sleep = function (time) {
        // https://davidwalsh.name/javascript-sleep-function
        return new Promise(function (resolve) { return setTimeout(resolve, time); });
    };
    // -------------------------------------------------------
    // restart SmartHomeNG server application
    //
    ServicesComponent.prototype.restartShng = function () {
        var _this = this;
        this.dataServiceServer.restartShngServer()
            .subscribe(function (response) {
            var res = response;
            console.log('restartShng', res.result);
            _this.shng_status = _this.translate_shngStatus('Restart clicked');
            _this.shng_statuscode = -1;
        });
    };
    ServicesComponent.prototype.downloadBackup = function () {
        var _this = this;
        var todayDate = new Date();
        var dd = String(todayDate.getDate()).padStart(2, '0');
        var mm = String(todayDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = todayDate.getFullYear();
        var today = yyyy + '-' + mm + '-' + dd;
        this.backup_disabled = true;
        this.dataServiceServer.downloadConfigBackup()
            .subscribe(function (response) {
            var res = response;
            Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(res, 'shng_config_backup_' + today + '.zip');
            _this.show_backup_confirm = true;
            _this.backup_disabled = false;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('evalcodeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServicesComponent.prototype, "evalCodeEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('evalcodeeditor2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServicesComponent.prototype, "evalCodeEditor2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServicesComponent.prototype, "codeEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeeditor2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServicesComponent.prototype, "codeEditor2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('convertercodeeditor'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServicesComponent.prototype, "converterCodeEditor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('convertercodeeditor2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ServicesComponent.prototype, "converterCodeEditor2", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            providers: [],
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"],
            _common_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _common_services_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ServicesApiService"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_5__["ServerApiService"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/system/system-config/system-config.component.css":
/*!******************************************************************!*\
  !*** ./src/app/system/system-config/system-config.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3N5c3RlbS1jb25maWcvc3lzdGVtLWNvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHFCQUFxQjtFQUNyQix3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zeXN0ZW0vc3lzdGVtLWNvbmZpZy9zeXN0ZW0tY29uZmlnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLnRhYi1zaG5nID4gYXtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOnJnYigxNjAsIDE2MCwgMTYwKTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/system/system-config/system-config.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/system/system-config/system-config.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <h3 style=\"color: #707070; margin-left: 5px;\">\r\n    {{'SYSTEM.CONFIGURATION'|translate}}\r\n  </h3>\r\n\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.COMMON_SETTINGS'|translate }}\">\r\n\r\n      <p-table [columns]=\"common_parameter_cols\" [value]=\"common_parameters\" selectionMode=\"single\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngStyle]=\"{'width': col.width}\">\r\n              {{col.header|translate}}\r\n              <p-sortIcon *ngIf=\"col.sfield !== ''\" [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n            <td *ngFor=\"let col of columns\">\r\n\r\n              <ng-container *ngIf=\"dialog_readonly === false && col.field === 'value'\">\r\n                <ng-container *ngIf=\"rowData.valid_list.length > 0\">\r\n                  <p-dropdown [options]=\"rowData.valid_list\" [showClear]=\"true\" placeholder=\"{{rowData.q21_09Bad}}\" [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"rowData[col.field] = $event; check_values()\"></p-dropdown>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"(['int','num','float','scene'].indexOf(rowData.type) > -1) && rowData.valid_list.length === 0\">\r\n                  <input [(ngModel)]=\"rowData[col.field]\" type=\"number\" (ngModelChange)=\"check_values()\" min=\"{{rowData.valid_min}}\" max=\"{{rowData.valid_max}}\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" pInputText name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"rowData.type !== 'bool' && ['int','num','float','scene'].indexOf(rowData.type) === -1 && rowData.valid_list.length === 0\">\r\n                  <input [(ngModel)]=\"rowData[col.field]\" type=\"text\" (ngModelChange)=\"check_values()\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"dialog_readonly === true || col.field !== 'value'\">\r\n                {{rowData[col.field]}}\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </tab>\r\n\r\n\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.HTTP_SETTINGS'|translate }}\">\r\n\r\n      <p-table [columns]=\"http_parameter_cols\" [value]=\"http_parameters\" selectionMode=\"single\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngStyle]=\"{'width': col.width}\">\r\n              {{col.header|translate}}\r\n              <p-sortIcon *ngIf=\"col.sfield !== ''\" [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n            <td *ngFor=\"let col of columns\">\r\n\r\n              <ng-container *ngIf=\"dialog_readonly === false && col.field === 'value'\">\r\n                <ng-container *ngIf=\"rowData.valid_list.length > 0\">\r\n                  <p-dropdown [options]=\"rowData.valid_list\" [showClear]=\"true\" placeholder=\"{{rowData.q21_09Bad}}\" [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"rowData[col.field] = $event; check_values()\"></p-dropdown>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"(['int','num','float','scene'].indexOf(rowData.type) > -1) && rowData.valid_list.length === 0\">\r\n                  <input [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"check_values()\" type=\"number\" min=\"{{rowData.valid_min}}\" max=\"{{rowData.valid_max}}\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" pInputText name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"rowData.type !== 'bool' && ['int','num','float','scene', 'password'].indexOf(rowData.type) === -1 && rowData.valid_list.length === 0\">\r\n                  <input [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"check_values()\" type=\"text\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"rowData.type === 'password' && rowData[col.field] === null\">\r\n                  <button pButton type=\"button\" class=\"float-sm-left btn-shng btn btn-sm ui-button-secondary\" (click)=\"change_password_dialog($event, rowData, col.field)\" style=\"margin-left: 5px;\" label=\"{{ 'SYSTEM.SET_PASSWORD'|translate }}\"></button>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"rowData.type === 'password' && rowData[col.field] !== null\">\r\n                  <button pButton type=\"button\" class=\"float-sm-left btn-shng btn btn-sm ui-button-secondary\" (click)=\"change_password_dialog($event, rowData, col.field)\" style=\"margin-left: 5px;\" label=\"{{ 'SYSTEM.CHANGE_PASSWORD'|translate }}\"></button>\r\n                </ng-container>\r\n\r\n              </ng-container>\r\n              <ng-container *ngIf=\"dialog_readonly === true || col.field !== 'value'\">\r\n                {{rowData[col.field]}}\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </tab>\r\n\r\n\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.ADMIN_SETTINGS'|translate }}\">\r\n\r\n      <p-table [columns]=\"admin_parameter_cols\" [value]=\"admin_parameters\" selectionMode=\"single\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngStyle]=\"{'width': col.width}\">\r\n              {{col.header|translate}}\r\n              <p-sortIcon *ngIf=\"col.sfield !== ''\" [field]=\"col.field\" ariaLabel=\"Activate to sort\" ariaLabelDesc=\"Activate to sort in descending order\" ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n          <tr>\r\n            <td *ngFor=\"let col of columns\">\r\n\r\n              <ng-container *ngIf=\"dialog_readonly === false && col.field === 'value'\">\r\n                <ng-container *ngIf=\"rowData.valid_list.length > 0\">\r\n                  <p-dropdown [options]=\"rowData.valid_list\" [showClear]=\"true\" placeholder=\"{{rowData.q21_09Bad}}\" [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"rowData[col.field] = $event; check_values()\"></p-dropdown>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"(['int','num','float','scene'].indexOf(rowData.type) > -1) && rowData.valid_list.length === 0\">\r\n                  <input [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"check_values()\" type=\"number\" min=\"{{rowData.valid_min}}\" max=\"{{rowData.valid_max}}\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" pInputText name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"rowData.type !== 'bool' && ['int','num','float','scene'].indexOf(rowData.type) === -1 && rowData.valid_list.length === 0\">\r\n                  <input [(ngModel)]=\"rowData[col.field]\" (ngModelChange)=\"check_values()\" type=\"text\" pInputText placeholder=\"{{rowData.q21_09Bad}}\" name=\"{{col.field}}\" [ngStyle]=\"{'width': col.iwidth}\"/>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"dialog_readonly === true || col.field !== 'value'\">\r\n                {{rowData[col.field]}}\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n    </tab>\r\n\r\n  </tabset>\r\n\r\n  <ng-container *ngIf=\"dialog_readonly === false && restart_core_button\">\r\n    <a style=\"font-size: small\">{{ 'RESTART FOR CHANGES'|translate }}</a>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"dialog_readonly === false && !restart_core_button\">\r\n    <a style=\"font-size: small\">&nbsp;</a>\r\n  </ng-container>\r\n  <br>\r\n  <button pButton type=\"button\" class=\"float-sm-right btn-shng btn btn-sm\" style=\"float: left; margin-left: 0px; margin-top: 5px; margin-bottom: 10px; font-size: medium;\" [disabled]=\"!restart_core_button\" (click)=\"restartShng()\" icon=\"fa fa-circle-notch\" label=\"{{'BUTTON.RESTART_SHNG'|translate}}\" class=\"ui-button-success\"></button>\r\n  <button pbutton type=\"button\" tabindex=\"1\" autofocus=\"autofocus\" class=\"btn btn-primary btn-sm btn-shng\" style=\"float: right;\" [disabled]=\"!this.data_changed\" (click)=\"saveSettings()\"><i class=\"fas fa-check\"></i> {{'BUTTON.SAVE_SETTINGS'|translate}}</button>\r\n\r\n</div>\r\n\r\n\r\n\r\n<!--\r\n  -- Validation dialog, showing information about the error, if from validation fails\r\n  -->\r\n\r\n<p-dialog header=\"\" [(visible)]=\"validation_dialog_display\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    {{'PLUGIN.CONFIGURATION_ERRORS'|translate}}\r\n  </p-header>\r\n\r\n  <ng-container *ngFor=\"let l of this.validation_dialog_text\">\r\n    <li>\r\n      {{ l }}\r\n    </li>\r\n  </ng-container>\r\n\r\n  <p-footer>\r\n    <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"validation_dialog_display=false\" label=\"{{'BUTTON.CLOSE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n\r\n\r\n<!--\r\n  -- Password change dialog, showing information about the error, if from validation fails\r\n  -->\r\n\r\n<p-dialog header=\"\" [(visible)]=\"pwd_change_dialog_display\" [modal]=\"true\" blockScroll=\"true\">\r\n  <p-header>\r\n    <ng-container *ngIf=\"pwd_hash_old === null\">\r\n      {{'SYSTEM.SET_PASSWORD'|translate}}\r\n    </ng-container>\r\n    <ng-container *ngIf=\"pwd_hash_old !== null\">\r\n      {{'SYSTEM.CHANGE_PASSWORD'|translate}}\r\n    </ng-container>\r\n  </p-header>\r\n\r\n  <div *ngIf=\"pwd_old_is_empty\" class=\"alert alert-warning\">{{ 'SYSTEM.OLDPWD_EMPTY'|translate }}</div>\r\n  <div *ngIf=\"pwd_old_is_wrong\" class=\"alert alert-danger\">{{ 'SYSTEM.OLDPWD_WRONG'|translate }}</div>\r\n  <div *ngIf=\"pwd_new_not_identical\" class=\"alert alert-danger\">{{ 'SYSTEM.NEWPWDS_DIFFER'|translate }}</div>\r\n\r\n  <table>\r\n    <ng-container *ngIf=\"pwd_hash_old !== null\">\r\n      <tr>\r\n        <td style=\"padding-right: 10px\">{{'SYSTEM.OLD_PASSWORD'|translate}}</td>\r\n        <td><input [(ngModel)]=\"pwd_old\" tabindex=\"1\" autofocus style=\"width: 250px\" [type]=\"pwd_show ? 'text' : 'password'\" pInputText name=\"pwd_old\"/></td>\r\n      </tr>\r\n      <tr><td>&nbsp;</td></tr>\r\n    </ng-container>\r\n    <tr>\r\n      <td style=\"padding-right: 10px\">{{'SYSTEM.NEW_PASSWORD'|translate}}</td>\r\n      <td><input [(ngModel)]=\"pwd_new1\" tabindex=\"2\" style=\"width: 250px\" [type]=\"pwd_show ? 'text' : 'password'\" pInputText name=\"pwd_new1\"/></td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"padding-right: 10px\">{{'SYSTEM.NEW_PASSWORD_REPEAT'|translate}}</td>\r\n      <td><input [(ngModel)]=\"pwd_new2\" tabindex=\"3\" style=\"width: 250px\" [type]=\"pwd_show ? 'text' : 'password'\" pInputText name=\"pwd_new2\"/></td>\r\n    </tr>\r\n    <tr>\r\n      <td style=\"padding-right: 10px\"></td>\r\n      <td><input [(ngModel)]=\"pwd_show\" type=\"checkbox\" style=\"font-size: small\" id=\"showtext\">{{'SYSTEM.SHOW_PASSWORDS'|translate}}</td>\r\n    </tr>\r\n  </table>\r\n\r\n\r\n  <p-footer>\r\n    <p style=\"text-align: left; font-size: small\">{{ 'SYSTEM.REMEMBER TO SAVE CHANGES'|translate }}</p>\r\n    <button pButton type=\"button\" icon=\"pi pi-times\" (click)=\"pwd_change_dialog_display=false\" label=\"{{'BUTTON.ABORT'|translate}}\" class=\"ui-button-secondary\"></button>\r\n    <button pButton type=\"button\" tabindex=\"4\" icon=\"pi pi-check\" (click)=\"change_password($event)\" label=\"{{'BUTTON.CHANGE'|translate}}\" class=\"ui-button-success\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n\r\n"

/***/ }),

/***/ "./src/app/system/system-config/system-config.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/system/system-config/system-config.component.ts ***!
  \*****************************************************************/
/*! exports provided: SystemConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemConfigComponent", function() { return SystemConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _common_services_config_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/config-api.service */ "./src/app/common/services/config-api.service.ts");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");
/* harmony import */ var _common_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/shared.service */ "./src/app/common/services/shared.service.ts");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-sha512 */ "./node_modules/js-sha512/src/sha512.js");
/* harmony import */ var js_sha512__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_sha512__WEBPACK_IMPORTED_MODULE_6__);







var SystemConfigComponent = /** @class */ (function () {
    function SystemConfigComponent(dataService, dataServiceServer, shared, translate) {
        this.dataService = dataService;
        this.dataServiceServer = dataServiceServer;
        this.shared = shared;
        this.translate = translate;
        this.data_changed = false;
        this.restart_core_button = false;
        this.rowclicked_foredit = false;
        this.dialog_readonly = false;
        this.pwd_change_dialog_display = false;
        this.pwd_old = null;
        this.pwd_new1 = null;
        this.pwd_new2 = null;
        this.pwd_hash_old = null;
        this.pwd_hash_new = null;
        this.validation_dialog_display = false;
    }
    SystemConfigComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('SystemConfigComponent.ngOnInit');
        this.dataService.getConfig()
            .subscribe(function (response) {
            _this.config = response;
            //          this.schedulerinfo.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)});
            console.log('getConfig', { response: response });
            _this.fillDialodData();
        });
    };
    SystemConfigComponent.prototype.fillDialodData = function () {
        this.fillCommonDialogData();
        this.fillHttpDialogData();
        this.fillAdminDialogData();
    };
    // ---------------------------------------------------------
    // Fill the mask with core parameter data
    //
    SystemConfigComponent.prototype.fillCommonDialogData = function () {
        this.lang = sessionStorage.getItem('default_language');
        this.common_parameter_cols = [
            { field: 'name', sfield: 'confname', header: 'PLUGIN.PARAMETER', width: '190px', iwidth: '186px' },
            { field: 'value', sfield: 'paramvalue', header: 'PLUGIN.VALUE', width: '200px', iwidth: '196px' },
            { field: 'type', sfield: 'conftype', header: 'PLUGIN.TYPE', width: '100px', iwidth: '96px' },
            { field: 'desc', sfield: '', header: 'PLUGIN.DESCRIPTION', width: '', iwidth: '' }
        ];
        this.common_parameters = [];
        var meta = this.config.common.meta;
        var data = this.config.common.data;
        for (var param in meta.parameters) {
            if (meta.parameters.hasOwnProperty(param)) {
                // fill valuelist
                var vl = [];
                if (meta['parameters'][param]['valid_list'] !== undefined) {
                    var wrk = {};
                    for (var i = 0; i < meta['parameters'][param]['valid_list'].length; i++) {
                        wrk = { label: String(meta['parameters'][param]['valid_list'][i]), value: meta['parameters'][param]['valid_list'][i] };
                        vl.push(wrk);
                    }
                }
                // generate a valid_list for bool parameters
                if (meta['parameters'][param]['type'] === 'bool') {
                    var wrk = {};
                    wrk = { label: 'true', value: true };
                    vl.push(wrk);
                    wrk = { label: 'false', value: false };
                    vl.push(wrk);
                }
                // fill description with active language
                var paramdesc = '';
                if (meta['parameters'][param]['description'] !== undefined) {
                    paramdesc = meta['parameters'][param]['description'][this.lang];
                    if (paramdesc === '' || paramdesc === undefined) {
                        paramdesc = meta['parameters'][param]['description']['en'];
                    }
                }
                var paramdata = {
                    'name': param,
                    'type': meta['parameters'][param]['type'],
                    'valid_list': vl,
                    'valid_min': meta['parameters'][param]['valid_min'],
                    'valid_max': meta['parameters'][param]['valid_max'],
                    'default': meta['parameters'][param]['q21_09Bad.txt'],
                    'mandatory': meta['parameters'][param]['mandatory'],
                    'value': data[param],
                    'desc': paramdesc
                };
                if (paramdata.value === undefined) {
                    paramdata.value = null;
                }
                // add to the table of configured plugins
                this.common_parameters.push(paramdata);
            }
        }
        // deepcopy form data
        this.common_parameters_beforeEdit = JSON.parse(JSON.stringify(this.common_parameters));
    };
    // ---------------------------------------------------------
    // Fill the mask with http parameter data
    //
    SystemConfigComponent.prototype.fillHttpDialogData = function () {
        this.lang = sessionStorage.getItem('default_language');
        this.http_parameter_cols = [
            { field: 'name', sfield: 'confname', header: 'PLUGIN.PARAMETER', width: '190px', iwidth: '186px' },
            { field: 'value', sfield: 'paramvalue', header: 'PLUGIN.VALUE', width: '200px', iwidth: '196px' },
            { field: 'type', sfield: 'conftype', header: 'PLUGIN.TYPE', width: '100px', iwidth: '96px' },
            { field: 'desc', sfield: '', header: 'PLUGIN.DESCRIPTION', width: '', iwidth: '' }
        ];
        this.http_parameters = [];
        var meta = this.config.http.meta;
        var data = this.config.http.data;
        // if plain password is defined, create a hashed password and delete the plain password
        if (data.password !== undefined && data.password !== null) {
            if (data.password !== '') {
                if (data.hashed_password === undefined || data.hashed_password === null || data.hashed_password === '') {
                    data.hashed_password = Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(data.password);
                    data.password = null;
                }
            }
        }
        // if plain service-password is defined, create a hashed service-password and delete the plain service-password
        if (data.service_password !== undefined && data.service_password !== null) {
            if (data.service_password !== '') {
                if (data.service_hashed_password === undefined || data.service_hashed_password === null || data.service_hashed_password === '') {
                    data.service_hashed_password = Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(data.service_password);
                    data.service_password = null;
                }
            }
        }
        for (var param in meta.parameters) {
            if (meta.parameters.hasOwnProperty(param)) {
                // ignore plain text password fields
                if (['password', 'service_password'].indexOf(param) === -1) {
                    // fill valuelist
                    var vl = [];
                    if (meta['parameters'][param]['valid_list'] !== undefined) {
                        for (var i = 0; i < meta['parameters'][param]['valid_list'].length; i++) {
                            var wrk = { label: String(meta['parameters'][param]['valid_list'][i]), value: meta['parameters'][param]['valid_list'][i] };
                            vl.push(wrk);
                        }
                    }
                    // generate a valid_list for bool parameters
                    if (meta['parameters'][param]['type'] === 'bool') {
                        var wrk = {};
                        wrk = { label: 'true', value: true };
                        vl.push(wrk);
                        wrk = { label: 'false', value: false };
                        vl.push(wrk);
                    }
                    // fill description with active language
                    var paramdesc = '';
                    if (meta['parameters'][param]['description'] !== undefined) {
                        paramdesc = meta['parameters'][param]['description'][this.lang];
                        if (paramdesc === '' || paramdesc === undefined) {
                            paramdesc = meta['parameters'][param]['description']['en'];
                        }
                    }
                    var paramdata = {
                        'name': param,
                        'type': meta['parameters'][param]['type'],
                        'valid_list': vl,
                        'valid_min': meta['parameters'][param]['valid_min'],
                        'valid_max': meta['parameters'][param]['valid_max'],
                        'default': meta['parameters'][param]['q21_09Bad.txt'],
                        'mandatory': meta['parameters'][param]['mandatory'],
                        'value': data[param],
                        'desc': paramdesc
                    };
                    if (paramdata.value === undefined) {
                        paramdata.value = null;
                    }
                    // add to the table of configured plugins
                    this.http_parameters.push(paramdata);
                }
            }
        }
        // deepcopy form data
        this.http_parameters_beforeEdit = JSON.parse(JSON.stringify(this.http_parameters));
    };
    // ---------------------------------------------------------
    // Fill the mask with http parameter data
    //
    SystemConfigComponent.prototype.fillAdminDialogData = function () {
        this.lang = sessionStorage.getItem('default_language');
        this.admin_parameter_cols = [
            { field: 'name', sfield: 'confname', header: 'PLUGIN.PARAMETER', width: '190px', iwidth: '186px' },
            { field: 'value', sfield: 'paramvalue', header: 'PLUGIN.VALUE', width: '200px', iwidth: '196px' },
            { field: 'type', sfield: 'conftype', header: 'PLUGIN.TYPE', width: '100px', iwidth: '96px' },
            { field: 'desc', sfield: '', header: 'PLUGIN.DESCRIPTION', width: '', iwidth: '' }
        ];
        this.admin_parameters = [];
        var meta = this.config.admin.meta;
        var data = this.config.admin.data;
        for (var param in meta.parameters) {
            if (meta.parameters.hasOwnProperty(param)) {
                // fill valuelist
                var vl = [];
                if (meta['parameters'][param]['valid_list'] !== undefined) {
                    for (var i = 0; i < meta['parameters'][param]['valid_list'].length; i++) {
                        var wrk = { label: String(meta['parameters'][param]['valid_list'][i]), value: meta['parameters'][param]['valid_list'][i] };
                        vl.push(wrk);
                    }
                }
                // generate a valid_list for bool parameters
                if (meta['parameters'][param]['type'] === 'bool') {
                    var wrk = {};
                    wrk = { label: 'true', value: true };
                    vl.push(wrk);
                    wrk = { label: 'false', value: false };
                    vl.push(wrk);
                }
                // fill description with active language
                var paramdesc = '';
                if (meta['parameters'][param]['description'] !== undefined) {
                    paramdesc = meta['parameters'][param]['description'][this.lang];
                    if (paramdesc === '' || paramdesc === undefined) {
                        paramdesc = meta['parameters'][param]['description']['en'];
                    }
                }
                var paramdata = {
                    'name': param,
                    'type': meta['parameters'][param]['type'],
                    'valid_list': vl,
                    'valid_min': meta['parameters'][param]['valid_min'],
                    'valid_max': meta['parameters'][param]['valid_max'],
                    'default': meta['parameters'][param]['q21_09Bad.txt'],
                    'mandatory': meta['parameters'][param]['mandatory'],
                    'value': data[param],
                    'desc': paramdesc
                };
                if (paramdata.value === undefined) {
                    paramdata.value = null;
                }
                // add to the table of configured plugins
                this.admin_parameters.push(paramdata);
            }
        }
        // deepcopy form data
        this.admin_parameters_beforeEdit = JSON.parse(JSON.stringify(this.admin_parameters));
    };
    // ---------------------------------------------------------
    // change password
    //
    SystemConfigComponent.prototype.change_password_dialog = function ($event, rowData, col_field) {
        console.log('change_password_dialog()');
        console.log('hash', rowData[col_field]);
        this.pwd_hash_old = rowData[col_field];
        this.pwd_rowData = rowData;
        this.pwd_col = col_field;
        this.pwd_old = null;
        this.pwd_new1 = null;
        this.pwd_new2 = null;
        this.pwd_old_is_wrong = false;
        this.pwd_change_dialog_display = true;
    };
    SystemConfigComponent.prototype.change_password = function ($event) {
        console.log('change_password()');
        this.pwd_old_is_empty = false;
        this.pwd_old_is_wrong = false;
        this.pwd_new_not_identical = false;
        if (this.pwd_hash_old !== null) {
            if (this.pwd_old === null || this.pwd_old === '') {
                this.pwd_old_is_empty = true;
                return;
            }
            // const wrk = sha512(this.pwd_old);
            if (this.pwd_hash_old !== Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(this.pwd_old)) {
                this.pwd_old_is_wrong = true;
                return;
            }
        }
        if (this.pwd_new1 !== this.pwd_new2) {
            this.pwd_new_not_identical = true;
            return;
        }
        console.log('pwd_new1', this.pwd_new1);
        console.log('pwd_new2', this.pwd_new2);
        this.pwd_hash_new = null;
        if (this.pwd_new1 !== null) {
            this.pwd_hash_new = Object(js_sha512__WEBPACK_IMPORTED_MODULE_6__["sha512"])(this.pwd_new1);
        }
        console.log('pwd_hash_new', this.pwd_hash_new);
        this.pwd_rowData[this.pwd_col] = this.pwd_hash_new;
        this.pwd_change_dialog_display = false;
        this.check_values();
    };
    SystemConfigComponent.prototype.check_values = function () {
        this.data_changed = false;
        for (var p in this.common_parameters) {
            if (this.common_parameters.hasOwnProperty(p)) {
                if (this.common_parameters[p].value !== this.common_parameters_beforeEdit[p].value) {
                    this.data_changed = true;
                    // console.log(this.common_parameters[p]);
                }
            }
        }
        for (var p in this.http_parameters) {
            if (this.http_parameters.hasOwnProperty(p)) {
                if (this.http_parameters[p].value !== this.http_parameters_beforeEdit[p].value) {
                    this.data_changed = true;
                    // console.log(this.http_parameters[p]);
                }
            }
        }
        for (var p in this.admin_parameters) {
            if (this.admin_parameters.hasOwnProperty(p)) {
                if (this.admin_parameters[p].value !== this.admin_parameters_beforeEdit[p].value) {
                    this.data_changed = true;
                    // console.log(this.admin_parameters[p]);
                }
            }
        }
    };
    SystemConfigComponent.prototype.check_value_restrictions = function (parameter) {
        var error_found = false;
        var error_text = '';
        console.log('check_value_restrictions', { parameter: parameter });
        if (parameter['value'] === undefined) {
            parameter['value'] = null;
        }
        // checking data types
        if (parameter['value'] !== null && parameter['value'] !== '') {
            error_text = '\'' + parameter['value'] + '\' ';
            if (parameter['type'].toLowerCase() === 'knx_ga' && !this.shared.is_knx_groupaddress(parameter['value'])) {
                error_found = true;
                error_text += this.translate.instant('PLUGIN.INVALID_KNX_ADDRESS');
            }
            if (parameter['type'].toLowerCase() === 'mac' && !this.shared.is_mac(parameter['value'])) {
                error_found = true;
                error_text += this.translate.instant('PLUGIN.INVALID_MAC_ADDRESS');
            }
            if (parameter['type'].toLowerCase() === 'ipv4' && !this.shared.is_ipv4(parameter['value'])) {
                error_found = true;
                error_text += this.translate.instant('PLUGIN.INVALID_IP_ADDRESS') + ' (v4)';
            }
            if (parameter['type'].toLowerCase() === 'ipv6' && !this.shared.is_ipv6(parameter['value'])) {
                error_found = true;
                error_text += this.translate.instant('PLUGIN.INVALID_IP_ADDRESS') + ' (v6)';
            }
            if (parameter['type'].toLowerCase() === 'ip') {
                if (!this.shared.is_ipv4(parameter['value']) && !this.shared.is_ipv6(parameter['value'])) {
                    if (!this.shared.is_hostname(parameter['value'])) {
                        error_found = true;
                        error_text += this.translate.instant('PLUGIN.INVALID_HOSTNAME');
                    }
                }
            }
        }
        // check valid minimum and maximum value
        if ((parameter['value'] !== null) && (parameter['value'] < parameter['valid_min'])) {
            error_found = true;
            error_text = this.translate.instant('PLUGIN.DEFINED_MIN') + ' \'' + parameter['valid_min'] + '\'';
            error_text += ', ' + this.translate.instant('PLUGIN.ACTUAL_VALUE') + ' \'' + parameter['value'] + '\'';
        }
        if ((parameter['value'] !== null) && (parameter['value'] > parameter['valid_max'])) {
            error_found = true;
            error_text = this.translate.instant('PLUGIN.DEFINED_MAX') + ' \'' + parameter['valid_max'] + '\'';
            error_text += ', ' + this.translate.instant('PLUGIN.ACTUAL_VALUE') + ' \'' + parameter['value'] + '\'';
        }
        // check if value is mandantory
        if ((parameter['value'] === null || parameter['value'] === '') && parameter['mandatory']) {
            error_found = true;
            error_text = this.translate.instant('PLUGIN.MANDATORY_VALUE');
        }
        if (error_found) {
            this.validation_dialog_text.push(this.translate.instant('PLUGIN.PARAMETER') + ' \'' + parameter['name'] + '\': ' + error_text);
            this.validation_dialog_parameter = parameter['name'];
            this.validation_dialog_display = true;
            console.warn('Parameter ' + '\'' + parameter['name'] + '\'', error_text);
            return false;
        }
        return true;
    };
    SystemConfigComponent.prototype.saveSettings = function () {
        var _this = this;
        var errors_found = false;
        this.validation_dialog_text = [];
        for (var p in this.common_parameters) {
            if (this.common_parameters.hasOwnProperty(p)) {
                if (!this.check_value_restrictions(this.common_parameters[p])) {
                    errors_found = true;
                }
            }
        }
        for (var p in this.http_parameters) {
            if (this.http_parameters.hasOwnProperty(p)) {
                if (!this.check_value_restrictions(this.http_parameters[p])) {
                    errors_found = true;
                }
            }
        }
        for (var p in this.admin_parameters) {
            if (this.admin_parameters.hasOwnProperty(p)) {
                if (!this.check_value_restrictions(this.admin_parameters[p])) {
                    errors_found = true;
                }
            }
        }
        if (errors_found) {
            return false;
        }
        var data = {};
        data['common'] = {};
        data['common']['data'] = {};
        for (var p in this.common_parameters) {
            if (this.common_parameters.hasOwnProperty(p)) {
                data['common']['data'][this.common_parameters[p].name] = this.common_parameters[p].value;
            }
        }
        data['http'] = {};
        data['http']['data'] = {};
        for (var p in this.http_parameters) {
            if (this.http_parameters.hasOwnProperty(p)) {
                data['http']['data'][this.http_parameters[p].name] = this.http_parameters[p].value;
            }
        }
        // remove plain passwords
        data['http']['data']['password'] = null;
        data['http']['data']['service_password'] = null;
        data['admin'] = {};
        data['admin']['data'] = {};
        for (var p in this.admin_parameters) {
            if (this.common_parameters.hasOwnProperty(p)) {
                data['admin']['data'][this.admin_parameters[p].name] = this.admin_parameters[p].value;
            }
        }
        this.dataService.saveConfig(data)
            .subscribe(function (result) {
            if (result) {
                console.log('saveSettings', 'success');
                _this.common_parameters_beforeEdit = JSON.parse(JSON.stringify(_this.common_parameters));
                _this.http_parameters_beforeEdit = JSON.parse(JSON.stringify(_this.http_parameters));
                _this.admin_parameters_beforeEdit = JSON.parse(JSON.stringify(_this.admin_parameters));
                _this.data_changed = false;
                _this.restart_core_button = true;
            }
            else {
                console.warn('saveSettings', 'fail');
            }
        });
    };
    SystemConfigComponent.prototype.restartShng = function () {
        this.dataServiceServer.restartShngServer()
            .subscribe(function (response) {
            var res = response;
            console.log('restartShng', res.result);
        });
        this.restart_core_button = false;
    };
    SystemConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system-config',
            template: __webpack_require__(/*! ./system-config.component.html */ "./src/app/system/system-config/system-config.component.html"),
            styles: [__webpack_require__(/*! ./system-config.component.css */ "./src/app/system/system-config/system-config.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_config_api_service__WEBPACK_IMPORTED_MODULE_3__["ConfigApiService"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_4__["ServerApiService"],
            _common_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], SystemConfigComponent);
    return SystemConfigComponent;
}());



/***/ }),

/***/ "./src/app/system/system-overview/system.component.css":
/*!*************************************************************!*\
  !*** ./src/app/system/system-overview/system.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .tab-shng > a{\r\n  border-bottom: none !important;\r\n  outline: 0 !important;\r\n  color:rgb(160, 160, 160);\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3lzdGVtL3N5c3RlbS1vdmVydmlldy9zeXN0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsd0JBQXdCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvc3lzdGVtL3N5c3RlbS1vdmVydmlldy9zeXN0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAudGFiLXNobmcgPiBhe1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6cmdiKDE2MCwgMTYwLCAxNjApO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/system/system-overview/system.component.html":
/*!**************************************************************!*\
  !*** ./src/app/system/system-overview/system.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <tabset #staticTabs>\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.SYSTEMINFO'|translate }}\">\r\n      <table class=\"table table-striped table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th scope=\"col\" style=\"width: 100px; border-top: 0\"></th>\r\n          <th scope=\"col\" style=\"width: 280px; border-top: 0\" translate>SYSTEM.PROPERTY</th>\r\n          <th scope=\"col\" style=\"border-top: 0\" translate>SYSTEM.STATE</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/logo_small_76x76.png\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{'SYSTEM.SHNG_VERSION'|translate}}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ systeminfo.sh_vers }}&nbsp;{{ 'SYSTEM.IN'|translate }}&nbsp;{{ systeminfo.sh_dir }}&nbsp;&nbsp;-&nbsp;&nbsp; {{ systeminfo.sh_desc }}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/logo_small_76x76.png\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{'SYSTEM.SHNG_PLG_VERSION'|translate}}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ systeminfo.plg_vers }}&nbsp;{{ 'SYSTEM.IN'|translate }}&nbsp;{{ systeminfo.sh_dir }}/plugins&nbsp;&nbsp;-&nbsp;&nbsp; {{ systeminfo.plg_desc }}\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/terminal-server.svg\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.HOST'|translate }}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ systeminfo.node }}&nbsp;&nbsp;-&nbsp;&nbsp;IPv4: {{ systeminfo.ip }}\r\n            <!--\r\n                      {% if ipv6 != '::1' %}&nbsp;&nbsp;-&nbsp;&nbsp;IPv6: {{ ipv6 }}{% endif %}\r\n            -->\r\n          </td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/tux_hdd.svg\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.OS'|translate }}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ systeminfo.system }} {{ systeminfo.vers }}&nbsp;&nbsp;-&nbsp;&nbsp;{{ 'SYSTEM.ARCHITECTURE'|translate }}:&nbsp;{{ systeminfo.arch }}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/user.svg\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{'SYSTEM.USER'|translate}}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ systeminfo.user }}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/python.png\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.PYTHON VERSION'|translate }}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ systeminfo.pyversion }}</td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/hd.svg\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.FREE DISC SPACE'|translate }}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ (systeminfo.freespace)|number:'1.0-0' }} MByte</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/clock.svg\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.DATE'|translate }} / {{ 'SYSTEM.TIME'|translate }}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ shared.displayDateTime(systeminfo.now) }}</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/terminal-server.svg\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.UPTIME'|translate }} {{ 'SYSTEM.HOST'|translate }}:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ os_uptime }}</td>\r\n        </tr>\r\n        <tr>\r\n          <td class=\"py-1\"><img src=\"assets/img/logo_small_76x76.png\" style=\"width: 36px; height: 36px; margin-left: 40px;\"></td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ 'SYSTEM.UPTIME'|translate }} smartHomeNG:</td>\r\n          <td class=\"py-1\" style=\"vertical-align: middle;\">{{ sh_uptime }}</td>\r\n        </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.CHARTS'|translate }}\">\r\n        <table align=\"center\" style=\"margin-top: 20px;\" margin>\r\n          <tr>\r\n            <td>\r\n              <p-chart type=\"line\" width=\"400px\" height=\"250px\" (click)=\"updateSystemloadData(chartSystemload)\" #chartSystemload id=\"chartSystemload\" [data]=\"chartdataLoad\"></p-chart>\r\n            </td>\r\n            <td width=\"20px\">\r\n            </td>\r\n            <td>\r\n              <p-chart type=\"line\" width=\"400px\" height=\"250px\" (click)=\"updateThreadsData(chartThreads)\" #chartThreads [data]=\"chartdataThreads\" [options]=\"chartoptions1\"></p-chart>\r\n              <!--\r\n                          <p-chart type=\"line\" width=\"450px\" height=\"250px\" [data]=\"chartdata1\" [options]=\"chartoptions1\"></p-chart>\r\n              -->\r\n            </td>\r\n          </tr>\r\n          <tr><td>&nbsp;</td></tr>\r\n          <tr>\r\n            <td>\r\n              <p-chart type=\"line\" width=\"400px\" height=\"250px\" (click)=\"updateMemoryData(chartMemory)\" #chartMemory [data]=\"chartdataMemory\"></p-chart>\r\n            </td>\r\n            <td width=\"20px\">\r\n            </td>\r\n            <td>\r\n              <p-chart type=\"line\" width=\"400px\" height=\"250px\" (click)=\"updateDiskData(chartDisk)\" #chartDisk [data]=\"chartdataDisk\" [options]=\"chartoptions1\"></p-chart>\r\n              <!--\r\n                          <p-chart type=\"line\" width=\"450px\" height=\"250px\" [data]=\"chartdata1\" [options]=\"chartoptions1\"></p-chart>\r\n              -->\r\n            </td>\r\n          </tr>\r\n        </table>\r\n\r\n<!--\r\n      <div style=\"width: 50%\">\r\n        <p-chart type=\"line\" [data]=\"chartdata3\"></p-chart>\r\n      </div>\r\n-->\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.PYPI CHECK'|translate }}\">\r\n      <table id=\"package_check\" class=\"table table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th scope=\"col\" style=\"min-width: 250px; border-top: 0\">Python {{ 'SYSTEM.PACKAGE'|translate }}</th>\r\n          <th scope=\"col\" style=\"min-width: 150px; border-top: 0\">{{ 'SYSTEM.MINIMUM VERSION'|translate }}</th>\r\n          <th scope=\"col\" style=\"min-width: 150px; border-top: 0; background-color: #f7f7f7;\">{{ 'SYSTEM.INSTALLED VERSION'|translate }}</th>\r\n          <th scope=\"col\" style=\"min-width: 150px; border-top: 0\">{{ 'SYSTEM.MAXIMUM VERSION'|translate }}</th>\r\n<!--      <th scope=\"col\" style=\"width: 25%; border-top: 0\">{{ 'SYSTEM.REQUIREMENTS'|translate }}</th> -->\r\n          <th scope=\"col\" style=\"min-width: 150px; border-top: 0\">{{ 'SYSTEM.NEWEST VERSION'|translate }} (PyPI)</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n\r\n        <ng-container *ngIf=\"loading\">\r\n          <tr><td  colspan=\"5\">\r\n            <p style=\"padding-top: 100px; text-align: center; font-size: x-large\">Loading...</p>\r\n          </td></tr>\r\n        </ng-container>\r\n\r\n        <!-- is required (BASE) -->\r\n\r\n        <ng-container  *ngFor=\"let pypipackage of pypiinfo\">\r\n          <tr *ngIf=\"pypipackage.is_required === true\">\r\n            <ng-container *ngIf=\"pypipackage.pypi_doc_url === ''\">\r\n              <td class=\"py-1\">{{ pypipackage.name }}</td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"pypipackage.pypi_doc_url !== ''\">\r\n              <td class=\"py-1\"><a target=\"_blank\" class=\"text-shng-bold pypi_link\" href=\"{{ pypipackage.pypi_doc_url }}\">{{ pypipackage.name }}</a></td>\r\n            </ng-container>\r\n            <td class=\"py-1\">{{ pypipackage.vers_req_min || '*' }}</td>\r\n\r\n            <ng-container *ngIf=\"pypipackage.vers_ok && pypipackage.vers_recent\">\r\n              <td class=\"py-1\" style=\"background-color: #f7f7f7; color: green; font-weight: bold;\">{{ pypipackage.vers_installed }} <i class=\"fa fa-check-circle\"></i></td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"pypipackage.vers_ok && !pypipackage.vers_recent\">\r\n              <td class=\"py-1\" style=\"background-color: #f7f7f7;\">{{ pypipackage.vers_installed }} <i class=\"far fa-check-circle\"></i></td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed === '-'\">\r\n              <td class=\"py-1\" style=\"background-color: #f7f7f7; color: red; font-weight: bold;\">{{ 'SYSTEM.MISSING'|translate }} <i class=\"fa fa-times-circle\"></i></td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed !== '-'\">\r\n              <td class=\"py-1\" style=\"background-color: #f7f7f7; color: red;\">{{ pypipackage.vers_installed }}</td>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"pypipackage.pypi_version_ok || pypipackage.vers_recent\">\r\n              <td class=\"py-1\">{{ pypipackage.vers_req_max || '*' }}</td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n              <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.vers_req_max || '*' }} <i class=\"fa fa-check-circle\"></i></td>\r\n            </ng-container>\r\n<!--        <td class=\"py-1\">{{ reqinfodisplay[pypipackage.name] }}</td> -->\r\n\r\n            <ng-container *ngIf=\"pypipackage.pypi_version_ok && (pypipackage.vers_recent)\">\r\n              <td class=\"py-1\">{{ pypipackage.pypi_version }}</td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n              <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.pypi_version }} <i class=\"fa fa-check-circle\"></i></td>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!pypipackage.pypi_version_ok\">\r\n              <td class=\"py-1\" style=\"color: red;\">{{ pypipackage.pypi_version || 'SYSTEM.UNKNOWN'|translate }} <i class=\"far fa-times-circle\"></i></td>\r\n            </ng-container>\r\n\r\n          </tr>\r\n        </ng-container>\r\n        </tbody>\r\n\r\n<!--\r\n        /* Link package PyPi URL */\r\n        var packageName = element['name'];\r\n        if (element['pypi_doc_url'] != '') {\r\n        packageName = \"<a target=\\\"_blank\\\" class=\\\"text-shng pypi_link\\\" href=\\\"\"+element['pypi_doc_url']+\"\\\">\"+packageName+\"</a>\";\r\n        }\r\n-->\r\n\r\n        <!-- is required (PLUGINS) -->\r\n\r\n        <ng-container *ngIf=\"plugincount > 0\">\r\n          <thead>\r\n          <tr class=\"shng_heading\">\r\n            <th class=\"py-1\" style=\"background:#eee;\" colspan=\"5\">{{ 'SYSTEM.PACKAGES_REQ_PLUGINS'|translate }}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <ng-container  *ngFor=\"let pypipackage of pypiinfo\">\r\n            <tr *ngIf=\"pypipackage.is_required_for_plugins === true\">\r\n              <ng-container *ngIf=\"pypipackage.pypi_doc_url === ''\">\r\n                <td class=\"py-1\">{{ pypipackage.name }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.pypi_doc_url !== ''\">\r\n                <td class=\"py-1\"><a target=\"_blank\" class=\"text-shng pypi_link\" href=\"{{ pypipackage.pypi_doc_url }}\">{{ pypipackage.name }}</a></td>\r\n              </ng-container>\r\n              <td class=\"py-1\">{{ pypipackage.vers_req_min || '*' }}</td>\r\n\r\n              <ng-container *ngIf=\"pypipackage.vers_ok && pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"background-color: #f7f7f7; color: green; font-weight: bold;\">{{ pypipackage.vers_installed }} <i class=\"fa fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.vers_ok && !pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"background-color: #f7f7f7;\">{{ pypipackage.vers_installed }} <i class=\"far fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed === '-'\">\r\n                <td class=\"py-1\" style=\"background-color: #f7f7f7; color: red; font-weight: bold;\">{{ 'SYSTEM.MISSING'|translate }} <i class=\"fa fa-times-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed !== '-'\">\r\n                <td class=\"py-1\" style=\"background-color: #f7f7f7; color: red;\">{{ pypipackage.vers_installed }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"pypipackage.pypi_version_ok || pypipackage.vers_recent\">\r\n                <td class=\"py-1\">{{ pypipackage.vers_req_max || '*' }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.vers_req_max || '*' }} <i class=\"fa fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <!--        <td class=\"py-1\">{{ reqinfodisplay[pypipackage.name] }}</td> -->\r\n\r\n              <ng-container *ngIf=\"pypipackage.pypi_version_ok && (pypipackage.vers_recent)\">\r\n                <td class=\"py-1\">{{ pypipackage.pypi_version }} <i class=\"far fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.pypi_version }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.pypi_version_ok\">\r\n                <td class=\"py-1\" style=\"color: red;\">{{ pypipackage.pypi_version || 'SYSTEM.UNKNOWN'|translate }} <i class=\"far fa-times-circle\"></i></td>\r\n              </ng-container>\r\n\r\n            </tr>\r\n          </ng-container>\r\n          </tbody>\r\n        </ng-container>\r\n\r\n        <!-- is required (DOCUMENTAION) -->\r\n\r\n        <ng-container *ngIf=\"documentationcount > 0\">\r\n          <thead>\r\n            <tr class=\"shng_heading\">\r\n              <th class=\"py-1\" style=\"background:#eee;\" colspan=\"5\">{{ 'SYSTEM.PACKAGES_REQ_DOCUMENTATION'|translate }}</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n          <ng-container  *ngFor=\"let pypipackage of pypiinfo\">\r\n            <tr *ngIf=\"pypipackage.is_required_for_docbuild === true\">\r\n              <ng-container *ngIf=\"pypipackage.pypi_doc_url === ''\">\r\n                <td class=\"py-1\">{{ pypipackage.name }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.pypi_doc_url !== ''\">\r\n                <td class=\"py-1\"><a target=\"_blank\" class=\"text-shng pypi_link\" href=\"{{ pypipackage.pypi_doc_url }}\">{{ pypipackage.name }}</a></td>\r\n              </ng-container>\r\n              <td class=\"py-1\">{{ pypipackage.vers_req_min || '*' }}</td>\r\n\r\n              <ng-container *ngIf=\"pypipackage.vers_ok && pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.vers_installed }} <i class=\"fa fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.vers_ok && !pypipackage.vers_recent\">\r\n                <td class=\"py-1\">{{ pypipackage.vers_installed }} <i class=\"far fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed === '-'\">\r\n                <td class=\"py-1\" style=\"color: red; font-weight: bold;\">{{ 'SYSTEM.MISSING'|translate }} <i class=\"fa fa-times-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed !== '-'\">\r\n                <td class=\"py-1\" style=\"color: red;\">{{ pypipackage.vers_installed }}</td>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"pypipackage.pypi_version_ok || pypipackage.vers_recent\">\r\n                <td class=\"py-1\">{{ pypipackage.vers_req_max || '*' }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.vers_req_max || '*' }} <i class=\"fa fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <!--        <td class=\"py-1\">{{ reqinfodisplay[pypipackage.name] }}</td> -->\r\n\r\n              <ng-container *ngIf=\"pypipackage.pypi_version_ok && (pypipackage.vers_recent)\">\r\n                <td class=\"py-1\">{{ pypipackage.pypi_version }} <i class=\"far fa-check-circle\"></i></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n                <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.pypi_version }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!pypipackage.pypi_version_ok\">\r\n                <td class=\"py-1\" style=\"color: red;\">{{ pypipackage.pypi_version || 'SYSTEM.UNKNOWN'|translate }} <i class=\"far fa-times-circle\"></i></td>\r\n              </ng-container>\r\n\r\n            </tr>\r\n        </ng-container>\r\n        </tbody>\r\n        </ng-container>\r\n\r\n        <!-- is required (TESTSUITE) -->\r\n\r\n        <ng-container *ngIf=\"testsuitecount > 0\">\r\n          <thead>\r\n          <tr class=\"shng_heading\">\r\n            <th class=\"py-1\" style=\"background:#eee;\" colspan=\"5\">{{ 'SYSTEM.PACKAGES_REQ_TESTSUITE'|translate }}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container  *ngFor=\"let pypipackage of pypiinfo\">\r\n              <tr *ngIf=\"pypipackage.is_required_for_testsuite === true\">\r\n                <ng-container *ngIf=\"pypipackage.pypi_doc_url === ''\">\r\n                  <td class=\"py-1\">{{ pypipackage.name }}</td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"pypipackage.pypi_doc_url !== ''\">\r\n                  <td class=\"py-1\"><a target=\"_blank\" class=\"text-shng pypi_link\" href=\"{{ pypipackage.pypi_doc_url }}\">{{ pypipackage.name }}</a></td>\r\n                </ng-container>\r\n                <td class=\"py-1\">{{ pypipackage.vers_req_min || '*' }}</td>\r\n\r\n                <ng-container *ngIf=\"pypipackage.vers_ok && pypipackage.vers_recent\">\r\n                  <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.vers_installed }} <i class=\"fa fa-check-circle\"></i></td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"pypipackage.vers_ok && !pypipackage.vers_recent\">\r\n                  <td class=\"py-1\">{{ pypipackage.vers_installed }} <i class=\"far fa-check-circle\"></i></td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed === '-'\">\r\n                  <td class=\"py-1\" style=\"color: red; font-weight: bold;\">{{ 'SYSTEM.MISSING'|translate }} <i class=\"fa fa-times-circle\"></i></td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!pypipackage.vers_ok && pypipackage.vers_installed !== '-'\">\r\n                  <td class=\"py-1\" style=\"color: red;\">{{ pypipackage.vers_installed }}</td>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"pypipackage.pypi_version_ok || pypipackage.vers_recent\">\r\n                  <td class=\"py-1\">{{ pypipackage.vers_req_max || '*' }}</td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n                  <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.vers_req_max || '*' }} <i class=\"fa fa-check-circle\"></i></td>\r\n                </ng-container>\r\n                <!--        <td class=\"py-1\">{{ reqinfodisplay[pypipackage.name] }}</td> -->\r\n\r\n                <ng-container *ngIf=\"pypipackage.pypi_version_ok && (pypipackage.vers_recent)\">\r\n                  <td class=\"py-1\">{{ pypipackage.pypi_version }} <i class=\"far fa-check-circle\"></i></td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"pypipackage.pypi_version_ok && !pypipackage.vers_recent\">\r\n                  <td class=\"py-1\" style=\"color: green; font-weight: bold;\">{{ pypipackage.pypi_version }}</td>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!pypipackage.pypi_version_ok\">\r\n                  <td class=\"py-1\" style=\"color: red;\">{{ pypipackage.pypi_version || 'SYSTEM.UNKNOWN'|translate }} <i class=\"far fa-times-circle\"></i></td>\r\n                </ng-container>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </ng-container>\r\n\r\n        <!-- is NOT required -->\r\n\r\n        <ng-container *ngIf=\"norequirementcount > 0\">\r\n          <thead>\r\n          <tr class=\"shng_heading\">\r\n            <th class=\"py-1\" style=\"background:#eee;\" colspan=\"5\">{{ 'SYSTEM.PACKAGES_WO_REQ'|translate }}</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <ng-container  *ngFor=\"let pypipackage of pypiinfo\">\r\n            <tr *ngIf=\"pypipackage.is_required === false && pypipackage.is_required_for_plugins === false && pypipackage.is_required_for_docbuild === false && pypipackage.is_required_for_testsuite === false\">\r\n              <ng-container *ngIf=\"pypipackage.pypi_doc_url === ''\">\r\n                <td class=\"py-1\">{{ pypipackage.name }}</td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"pypipackage.pypi_doc_url !== ''\">\r\n                <td class=\"py-1\"><a target=\"_blank\" class=\"text-shng pypi_link\" href=\"{{ pypipackage.pypi_doc_url }}\">{{ pypipackage.name }}</a></td>\r\n              </ng-container>\r\n              <td class=\"py-1\">{{ pypipackage.vers_req_min || '-' }}</td>\r\n\r\n              <td class=\"py-1\">{{ pypipackage.vers_installed }}</td>\r\n\r\n              <td class=\"py-1\">{{ pypipackage.vers_req_max || '-' }}</td>\r\n<!--          <td class=\"py-1\">{{ reqinfodisplay[pypipackage.name] }}</td> -->\r\n              <td class=\"py-1\">{{ pypipackage.pypi_version }}</td>\r\n            </tr>\r\n          </ng-container>\r\n          </tbody>\r\n        </ng-container>\r\n      </table>\r\n\r\n      <!--\r\n            if (element['is_required_for_testsuite']) {\r\n            <tr class=\\\"shng_heading\\\"><td class=\\\"py-1\\\" style=\\\"background:#eee;\\\" colspan=\\\"5\\\">{{ _('Pakete für die Testsuite') }}</td></tr>\");\r\n            } else if (element['is_required_for_docbuild']) {\r\n            <tr class=\\\"shng_heading\\\"><td class=\\\"py-1\\\" style=\\\"background:#eee;\\\" colspan=\\\"5\\\">{{ _('Pakete für den Bau der Dokumentation') }}</td></tr>\");\r\n            } else {\r\n            <tr class=\\\"shng_heading\\\"><td class=\\\"py-1\\\" style=\\\"background:#eee;\\\" colspan=\\\"5\\\">{{ _('Pakete ohne Requirements') }}</td></tr>\");\r\n            }\r\n      -->\r\n    </tab>\r\n\r\n    <tab customClass=\"tab-shng\" heading=\"{{ 'SYSTEM.DISCLOSURES'|translate }}\">\r\n      <div class=\"container-fluid navBorder\" style=\"overflow: hidden; border-top: 0;\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\" style=\"max-width: 100%;\">\r\n            <div class=\"card\">\r\n              <div class=\"card-body p-1\">\r\n                <div id=\"disclosuretext\" style=\"overflow-y: scroll; white-space: pre-wrap;\">\r\n\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </tab>\r\n  </tabset>\r\n</div>\r\n\r\n\r\n<!--\r\n<div class=\"container-fluid navBorder\" style=\"margin-top: 5px;\">\r\n  <ul id=\"system_tabs\" class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\"><a class=\"text-dark nav-link active\" data-toggle=\"tab\" href=\"system/systemproperties\" translate>SYSTEM.SYSTEMINFO</a></li>\r\n    <li id=\"tab_pypi\" class=\"nav-item\">\r\n      <a id=\"tab_pypi_link\" class=\"nav-link disabled\" data-toggle=\"tab\" href=\"#pypi\">\r\n        {{'SYSTEM.PYPI CHECK'|translate}}\r\n        <i id=\"spinner\" class=\"fas fa-circle-notch fa-spin fa-fw\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n-->\r\n<!--\r\n<!DOCTYPE html>\r\n{% with active_page=\"system\" %}\r\n\r\n{% block title %}\r\n{{ _('Systeminfo', 'menu') }} - SmartHomeNG\r\n{% endblock title %}\r\n\r\n{% block content %}\r\n<div class=\"container-fluid navBorder\">\r\n  <ul id=\"system_tabs\" class=\"nav nav-tabs\">\r\n    <li class=\"nav-item\"><a class=\"text-dark nav-link active\" data-toggle=\"tab\" href=\"#systemproperties\">{{ _('Systemeigenschaften') }}</a></li>\r\n    <li id=\"tab_pypi\" class=\"nav-item\">\r\n      <a id=\"tab_pypi_link\" class=\"nav-link disabled\" data-toggle=\"tab\" href=\"#pypi\">\r\n        {{ _('PyPI Check') }}\r\n        <i id=\"spinner\" class=\"fas fa-circle-notch fa-spin fa-fw\"></i>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<div style=\"margin-left: 10px; margin-right: 10px;\" class=\"tab-content\">\r\n  <div id=\"pypi\" class=\"tab-pane\" role=\"tabpanel\">\r\n    <div class=\"table-responsive\" >\r\n      <table id=\"package_check\" class=\"table table-hover\">\r\n        <thead>\r\n        <tr class=\"shng_heading\">\r\n          <th scope=\"col\" style=\"width: 25%;\">Python Package</th>\r\n          <th scope=\"col\" style=\"width: 25%;\">{{ _('installierte Version') }}</th>\r\n          <th scope=\"col\" style=\"width: 25%;\">{{ _('Anforderungen') }}</th>\r\n          <th scope=\"col\" style=\"width: 25%;\">{{ _('Neuste Version') }} (PyPI)</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n<script>\r\n  $(\".disabled\").click(function (e) {\r\n    e.preventDefault();\r\n    return false;\r\n  });\r\n\r\n  function activateTab(selector) {\r\n    $(selector).on('click.twbstab',function() { $(this).tab('show'); })\r\n      .closest('.disabled').removeClass('disabled');\r\n  }\r\n\r\n  $.getJSON('pypi.json', function(result) {\r\n    $.each(result, function(index, element) {\r\n      if (index == 0) {\r\n        oldSort = element['sort'].substr(0,1);\r\n        newSort = element['sort'].substr(0,1);\r\n      } else {\r\n        oldSort = newSort;\r\n        newSort = newSort = element['sort'].substr(0,1);\r\n      }\r\n      if (oldSort != newSort) {\r\n        if (element['is_required_for_testsuite']) {\r\n          $('#package_check').find(\"tbody\").append(\"<tr class=\\\"shng_heading\\\"><td class=\\\"py-1\\\" style=\\\"background:#eee;\\\" colspan=\\\"5\\\">{{ _('Pakete für die Testsuite') }}</td></tr>\");\r\n        } else if (element['is_required_for_docbuild']) {\r\n          $('#package_check').find(\"tbody\").append(\"<tr class=\\\"shng_heading\\\"><td class=\\\"py-1\\\" style=\\\"background:#eee;\\\" colspan=\\\"5\\\">{{ _('Pakete für den Bau der Dokumentation') }}</td></tr>\");\r\n        } else {\r\n          $('#package_check').find(\"tbody\").append(\"<tr class=\\\"shng_heading\\\"><td class=\\\"py-1\\\" style=\\\"background:#eee;\\\" colspan=\\\"5\\\">{{ _('Pakete ohne Requirements') }}</td></tr>\");\r\n        }\r\n      }\r\n\r\n\r\n      fontWeight = '';\r\n      if (element['is_required']) {\r\n        fontWeight = \"font-weight: bold;\";\r\n      }\r\n\r\n      var fontColorPyPi = \"black\";\r\n      var fontColorInstalled = \"\";\r\n      var versionInstalledIcon = \"\";\r\n      var versionInstalledText = \"{{ _('Version nicht zulässig!') }}\";\r\n\r\n      /* color codes and icons */\r\n      if (element['is_required'] || element['is_required_for_docbuild'] || element['is_required_for_testsuite'] ) {\r\n        if (element['vers_ok']) {\r\n          versionInstalledIcon = \"fa-check-square\";\r\n          versionInstalledText = \"{{ _('Version unterstützt!') }}\";\r\n          if (element['vers_recent']) {\r\n            fontColorInstalled = \"green\";\r\n            if (element['pypi_version_ok']) {\r\n              fontColorPyPi = \"black\";\r\n            } else {\r\n              fontColorPyPi = \"red\";\r\n            }\r\n          } else {\r\n            fontColorInstalled = \"black\";\r\n            fontColorPyPi = \"green\";\r\n          }\r\n        } else {\r\n          fontColorInstalled = \"red\";\r\n          if (!element['pypi_version_ok']) {\r\n            fontColorPyPi = \"red\";\r\n          }\r\n          var versionInstalledIcon = \"fa-times-circle\";\r\n        }\r\n      } else {\r\n        fontColorPyPi = \"black\";\r\n        if (element['vers_recent']) {\r\n          fontColorInstalled = \"green\";\r\n        } else {\r\n          fontColorInstalled = \"black\";\r\n        }\r\n      }\r\n\r\n      /* Build String for requirements column */\r\n      var reqString = '';\r\n      var reqTextString = '';\r\n      /* MIN and MAX filled, MIN != MAX */\r\n      if (element['is_required'] || element['is_required_for_docbuild'] || element['is_required_for_testsuite'] ) {\r\n        if (element['vers_req_min'] != '' && element['vers_req_max'] != '' && (element['vers_req_min'] != element['vers_req_max'])) {\r\n          reqString += element['vers_req_min']+\" <= <i class=\\\"far \"+versionInstalledIcon+\"\\\" title=\\\"{{ _('installierte Version') }}\\\"></i>\"\r\n          if (reqString == \"\") {\r\n            reqString += \"<i class=\\\"far \"+versionInstalledIcon+\"\\\" title=\\\"\"+versionInstalledText+\"\\\" style=\\\"color: \"+fontColorInstalled+\"\\\"></i>\";\r\n          }\r\n          reqString += \" <= \"+element['vers_req_max'];\r\n        }\r\n        /* ELSE: MIN and MAX filled, MIN == MAX */\r\n        else if (element['vers_req_min'] != '' && element['vers_req_max'] != '' && (element['vers_req_min'] == element['vers_req_max'])) {\r\n          reqString += \"<i class=\\\"far \"+versionInstalledIcon+\"\\\" title=\\\"\"+versionInstalledText+\"\\\"></i> == \"+element['vers_req_min'];\r\n        }\r\n        /* ELSE: MIN or MAX filled */\r\n        else {\r\n          if (element['vers_req_min'] != '') {\r\n            reqString += \"<i class=\\\"far \"+versionInstalledIcon+\"\\\" title=\\\"\"+versionInstalledText+\"\\\"></i> \"+\" >= \"+element['vers_req_min'];\r\n          } else if (element['vers_req_max'] != '') {\r\n            reqString += \"<i class=\\\"far \"+versionInstalledIcon+\"\\\" title=\\\"\"+versionInstalledText+\"\\\"></i> \"+\"<= \"+element['vers_req_max'];\r\n          }\r\n        }\r\n        /* Element required due to Doku, Testsuite or SmartHomeNG in general, but no MIN and MAX version -> all versions valid */\r\n        if (reqString == '') {\r\n          reqString = \"<i class=\\\"far \"+versionInstalledIcon+\"\\\" title=\\\"\"+versionInstalledText+\"\\\"></i> == *\";\r\n        }\r\n        if (element['vers_req_source'] != '') {\r\n          reqTextString = element['vers_req_source'];\r\n        } else {\r\n          reqTextString = \"\";\r\n        }\r\n      }\r\n      /* Element not required, requirements unclear, set \"-\" */\r\n      else {\r\n        reqString = \"-\"\r\n      }\r\n\r\n      /* If there is detailed content, set folding layout */\r\n      var foldingElement = '';\r\n      var foldingStyle = '';\r\n      if (reqTextString != '') {\r\n        foldingStyle = \"cursor: pointer;\";\r\n      }\r\n\r\n      /* Link package PyPi URL */\r\n      var packageName = element['name'];\r\n      if (element['pypi_doc_url'] != '') {\r\n        packageName = \"<a target=\\\"_blank\\\" class=\\\"text-shng pypi_link\\\" href=\\\"\"+element['pypi_doc_url']+\"\\\">\"+packageName+\"</a>\";\r\n      }\r\n\r\n      /* Build row for normal content */\r\n      var table_row = '';\r\n      table_row =  \"<tr style=\\\"\"+foldingStyle+\"\\\" id=\\\"\"+index+\"_unfold\"+\"\\\">\"+\r\n        \"<td class=\\\"py-1\\\" style=\\\"\"+fontWeight+\"\\\">\"+packageName+\"</td>\"+\r\n        \"<td class=\\\"py-1\\\" style=\\\"color: \"+fontColorInstalled+\"\\\">\"+element['vers_installed']+\"</td>\"+\r\n        \"<td class=\\\"py-1\\\">\"+reqString+\"</td>\"+\r\n        \"<td class=\\\"py-1\\\" style=\\\"color: \"+fontColorPyPi+\"\\\">\"+element['pypi_version'];\r\n\r\n      /* Checks for icon next to PyPi Version */\r\n      if (element['vers_recent'] != true && element['pypi_version_ok']) {\r\n        if ((element['pypi_version'] != '') && (element['pypi_version'] != element['vers_installed'])) {\r\n          /* Element not required? Don't set that the PyPi version is supported */\r\n          if (!element['is_required'] && !element['is_required_for_docbuild'] && !element['is_required_for_testsuite'] ) {\r\n            table_row += \"&nbsp;<i class=\\\"fas fa-info-circle\\\" title=\\\"{{ _('Neuste Version!') }}\\\"></i>\";\r\n          } else {\r\n            table_row += \"&nbsp;<i class=\\\"fas fa-check-circle\\\" title=\\\"{{ _('Version unterstützt!') }}\\\"></i>\";\r\n          }\r\n        }\r\n      } else if (element['pypi_version'] != '-' && !element['pypi_version_ok']) {\r\n        table_row += \"&nbsp;<i class=\\\"fas fa-exclamation-circle\\\" title=\\\"{{ _('Version nicht zulässig!') }}\\\"></i>\";\r\n      }\r\n\r\n      /* Close table row */\r\n      table_row += \"</td></tr>\"\r\n\r\n      /* Build row for foldable content */\r\n      var table_row_requirements_detail = '';\r\n      if (reqTextString != '') {\r\n        table_row_requirements_detail =\r\n          \"<tr id=\\\"\"+index+\"_requirements_detail\\\" \"+\r\n          \"style=\\\"display: none; \"+foldingStyle+\"\\\">\";\r\n        table_row_requirements_detail +=\r\n          \"<td class=\\\"py-1\\\" colspan=\\\"4\\\">\";\r\n        table_row_requirements_detail +=\r\n          \"<div class=\\\"panel panel-default\\\" style=\\\"margin-bottom: 5px;\\\">\"+\r\n          \"<div class=\\\"panel-heading\\\">{{ _('Anforderungen') }} (requirements.txt)</div>\"+\r\n          \"<div class=\\\"panel-body\\\">\"+reqTextString+\"</div></div>\";\r\n        table_row_requirements_detail +=\r\n          \"</td></tr>\";\r\n      }\r\n\r\n      /* Append assembled content */\r\n      $('#package_check').find(\"tbody\").append(table_row + table_row_requirements_detail);\r\n\r\n      /* If foldable content: add onclick for table row, stop unfolding when clicking pypi link inside. */\r\n      if (reqTextString != '') {\r\n        $('#'+index+'_unfold').click(function(){\r\n          $('#'+index+'_requirements_detail').toggle();\r\n        });\r\n        $('#'+index+'_requirements_detail').click(function(){\r\n          $('#'+index+'_requirements_detail').toggle();\r\n        });\r\n        $('#'+index+'_unfold .pypi_link').click(function(e){\r\n          e.stopPropagation();\r\n        });\r\n      }\r\n    });\r\n\r\n    /* Hide spinner, activate tab, show DIV with content */\r\n    $('#spinner').hide();\r\n    $('#tab_pypi_link').addClass(\"text-dark\");\r\n    $('#tab_pypi').removeClass(\"disabled\");\r\n    activateTab('#system_tabs a[href=\"#pypi\"]');\r\n  });\r\n</script>\r\n{% endblock %}\r\n-->\r\n"

/***/ }),

/***/ "./src/app/system/system-overview/system.component.ts":
/*!************************************************************!*\
  !*** ./src/app/system/system-overview/system.component.ts ***!
  \************************************************************/
/*! exports provided: SystemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemComponent", function() { return SystemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/olddata.service */ "./src/app/common/services/olddata.service.ts");
/* harmony import */ var _common_services_websocket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/websocket.service */ "./src/app/common/services/websocket.service.ts");
/* harmony import */ var _common_services_websocket_plugin_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/services/websocket-plugin.service */ "./src/app/common/services/websocket-plugin.service.ts");
/* harmony import */ var _common_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/services/shared.service */ "./src/app/common/services/shared.service.ts");
/* harmony import */ var _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/services/server-api.service */ "./src/app/common/services/server-api.service.ts");












var SystemComponent = /** @class */ (function () {
    function SystemComponent(http, dataService, dataServiceServer, translate, websocketPluginService, shared) {
        this.http = http;
        this.dataService = dataService;
        this.dataServiceServer = dataServiceServer;
        this.translate = translate;
        this.websocketPluginService = websocketPluginService;
        this.shared = shared;
        this.faCheckCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCheckCircle"];
        this.loading = true;
        this.systeminfo = {};
        this.plugincount = 0;
        this.documentationcount = 0;
        this.testsuitecount = 0;
        this.norequirementcount = 0;
        this.os_uptime = '';
        this.sh_uptime = '';
        this.systemloadUpdateSubscription = null;
        this.memoryUpdateSubscription = null;
        this.threadsUpdateSubscription = null;
        this.diskUpdateSubscription = null;
        this.systemloadChartInitialized = false;
        this.memoryChartInitialized = false;
        this.threadsChartInitialized = false;
        this.diskChartInitialized = false;
    }
    SystemComponent_1 = SystemComponent;
    SystemComponent.resizeDisclosure = function () {
        var browserHeight = jquery__WEBPACK_IMPORTED_MODULE_6__(window).height();
        var disclosure = jquery__WEBPACK_IMPORTED_MODULE_6__('#disclosuretext');
        // const offsetTop = disclosure.offset().top;
        // initially offsetTop is off by a number of pixels. Correction: a fixed offset
        var offsetTop = 110;
        var height = String(Math.round((-1) * (offsetTop) - 35 + browserHeight) + 'px');
        disclosure.css('height', height);
        disclosure.css('maxHeight', height);
    };
    SystemComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('SystemComponent.ngOnInit:');
        this.dataServiceServer.getServerinfo()
            .subscribe(function (response) {
            _this.initSystemInfo();
        });
    };
    SystemComponent.prototype.initSystemInfo = function () {
        var _this = this;
        // ---------------------------------------------
        // Initialize system info (from OlddataService)
        //
        this.dataService.getSysteminfo()
            .subscribe(function (response) {
            _this.systeminfo = response;
            _this.os_uptime = _this.shared.ageToString(_this.systeminfo.uptime);
            _this.sh_uptime = _this.shared.ageToString(_this.systeminfo.sh_uptime);
        }, function (error) {
            console.log('SystemComponent: dataService.getSysteminfo():');
            console.log(error);
        });
        // -----------------------------------
        // Initialize Pypi info
        //
        this.dataService.getPypiinfo()
            .subscribe(function (response) {
            _this.pypiinfo = response;
            _this.loading = false;
            // count if documentation requirements exist
            _this.plugincount = 0;
            for (var i = 0; i < _this.pypiinfo.length; ++i) {
                if (_this.pypiinfo[i].is_required_for_plugins === true) {
                    _this.plugincount++;
                }
            }
            // count if documentation requirements exist
            _this.documentationcount = 0;
            for (var i = 0; i < _this.pypiinfo.length; ++i) {
                if (_this.pypiinfo[i].is_required_for_docbuild === true) {
                    _this.documentationcount++;
                }
            }
            // count if testsuite requirements exist
            _this.testsuitecount = 0;
            for (var i = 0; i < _this.pypiinfo.length; ++i) {
                if (_this.pypiinfo[i].is_required_for_testsuite === true) {
                    _this.testsuitecount++;
                }
            }
            // count if package without requirements exist
            _this.norequirementcount = 0;
            for (var i = 0; i < _this.pypiinfo.length; ++i) {
                if (_this.pypiinfo[i].is_required === false && _this.pypiinfo[i].is_required_for_docbuild === false &&
                    _this.pypiinfo[i].is_required_for_testsuite === false) {
                    _this.norequirementcount++;
                }
            }
            _this.reqinfodisplay = {};
            for (var i = 0; i < _this.pypiinfo.length; ++i) {
                _this.reqinfodisplay[_this.pypiinfo[i].name] = _this.buildreqinfostring(_this.pypiinfo[i]);
            }
        }, function (error) { return console.log('SystemComponent: dataService.getPypiinfo():' + error); });
        // -----------------------------------
        // Initialize info for the graph-tab
        //
        this.initCharts();
        window.addEventListener('resize', SystemComponent_1.resizeDisclosure, false);
        SystemComponent_1.resizeDisclosure();
        var filepath = '/3rdpartylicenses.txt';
        var hostip = sessionStorage.getItem('hostIp');
        if (hostip !== 'localhost') {
            filepath = '/admin' + filepath;
        }
        this.http.get(filepath, { responseType: 'text' })
            .subscribe(function (response) {
            var message = response.toString();
            jquery__WEBPACK_IMPORTED_MODULE_6__('#disclosuretext').text(message);
        }, function (error) {
            jquery__WEBPACK_IMPORTED_MODULE_6__('#disclosuretext').text('\nERROR ' + error.status + ':\n\n    ' + error.url + '   ' + error.statusText);
        });
    };
    // ===================================
    // methods for the Pypi check tab
    // -----------------------------------
    //
    SystemComponent.prototype.buildreqinfostring = function (element) {
        /* Build String for requirements column */
        var reqString = '';
        if (element['vers_req_min'] !== '' && element['vers_req_max'] !== '' && (element['vers_req_min'] !== element['vers_req_max'])) {
            // MIN and MAX filled, MIN != MAX
            reqString += element['vers_req_min'] + ' <= ';
        }
        else {
            if (element['vers_req_min'] !== '' && element['vers_req_max'] != '' && (element['vers_req_min'] == element['vers_req_max'])) {
                // ELSE: MIN and MAX filled, MIN == MAX
                reqString += ' == ' + element['vers_req_min'];
            }
            else {
                // ELSE: MIN or MAX filled * /
                if (element['vers_req_min'] !== '') {
                    reqString += ' >= ' + element['vers_req_min'];
                }
                else if (element['vers_req_max'] !== '') {
                    reqString += '<= ' + element['vers_req_max'];
                }
            }
            if (reqString === '') {
                // Element required due to Doku, Testsuite or SmartHomeNG in general, but no MIN and MAX version -> all versions valid * /
                reqString = ' == *';
            }
        }
        return reqString;
    };
    // ===================================
    // methods for the graph tab
    // -----------------------------------
    //
    SystemComponent.prototype.initCharts = function () {
        var _this = this;
        this.chartoptions1 = {
            scales: {
                xAxes: [{
                        //          type: 'time',
                        distribution: 'linear',
                        time: {
                            unit: 'minute'
                        },
                    }]
            }
        };
        this.chartdataLoad = {
            labels: [],
            datasets: [
                {
                    label: 'System Load',
                    data: [],
                    fill: false,
                    backgroundColor: '#709cc2',
                    borderColor: '#709cc2',
                    pointRadius: 0,
                }
            ]
        };
        this.chartdataThreads = {
            labels: [],
            datasets: [
                {
                    label: 'Threads',
                    data: [],
                    fill: false,
                    backgroundColor: '#709cc2',
                    borderColor: '#709cc2',
                    pointRadius: 0,
                }
            ]
        };
        this.chartdataMemory = {
            labels: [],
            datasets: [
                {
                    label: 'Memory (MByte)',
                    data: [],
                    fill: false,
                    backgroundColor: '#709cc2',
                    borderColor: '#709cc2',
                    pointRadius: 0,
                }
            ]
        };
        this.chartdataDisk = {
            labels: [],
            datasets: [
                {
                    label: 'Disk (% usage)',
                    data: [],
                    fill: false,
                    backgroundColor: '#709cc2',
                    borderColor: '#709cc2',
                    pointRadius: 0,
                }
            ]
        };
        //    this.setSystemloadData(undefined);
        //    this.setMemoryData(undefined);
        //    this.setThreadsData(undefined);
        //    this.setDiskData(undefined);
        this.websocketPluginService.connect();
        this.websocketPluginService.getSeriesLoad();
        this.websocketPluginService.getSeriesMemory();
        this.websocketPluginService.getSeriesThreads();
        this.websocketPluginService.getSeriesDisk();
        this.systemloadUpdateSubscription = this.websocketPluginService.systemloadUpdate$.subscribe(function () {
            //      console.error('systemloadUpdate$');
            _this.updateSystemloadData(_this.chartSystemload);
        });
        this.memoryUpdateSubscription = this.websocketPluginService.memoryUpdate$.subscribe(function () {
            //      console.error('memoryUpdate$');
            _this.updateMemoryData(_this.chartMemory);
        });
        this.threadsUpdateSubscription = this.websocketPluginService.threadsUpdate$.subscribe(function () {
            //      console.error('threadsUpdate$');
            _this.updateThreadsData(_this.chartThreads);
        });
        this.diskUpdateSubscription = this.websocketPluginService.diskUpdate$.subscribe(function () {
            //      console.error('diskUpdate$');
            _this.updateDiskData(_this.chartDisk);
        });
    };
    SystemComponent.prototype.updateSystemloadData = function (chart) {
        this.chartdataLoad.labels = [];
        this.chartdataLoad.datasets[0].data = [];
        // console.log('Load - Datapoints: ' + String(this.websocketPluginService.systemload.series.length));
        //    console.log(this.websocketPluginService.systemload.series);
        for (var i = 0; i < this.websocketPluginService.systemload.series.length; i++) {
            this.chartdataLoad.labels.push(String(this.websocketPluginService.systemload.series[i][2].time.substr(0, 5)));
            this.chartdataLoad.datasets[0].data.push(this.websocketPluginService.systemload.series[i][1]);
        }
        //    console.log({chart});
        if (this.systemloadChartInitialized) {
            // console.warn('updateSystemloadData: Chart-Refresh');
            //      chart.refresh();
        }
        this.systemloadChartInitialized = true;
    };
    SystemComponent.prototype.updateMemoryData = function (chart) {
        this.chartdataMemory.labels = [];
        this.chartdataMemory.datasets[0].data = [];
        // console.log('Memory - Datapoints: ' + String(this.websocketPluginService.memory.series.length));
        //    console.log(this.websocketPluginService.memory.series);
        for (var i = 0; i < this.websocketPluginService.memory.series.length; i++) {
            this.chartdataMemory.labels.push(String(this.websocketPluginService.memory.series[i][2].time.substr(0, 5)));
            //      this.chartdataMemory.labels.push(String(this.websocketPluginService.MemorySeriesData[i][0]));
            this.chartdataMemory.datasets[0].data.push(this.websocketPluginService.memory.series[i][1]);
        }
        //    console.log({chart});
        if (this.memoryChartInitialized) {
            // console.warn('updateMemoryData: Chart-Refresh');
            //      chart.refresh();
        }
        this.memoryChartInitialized = true;
    };
    SystemComponent.prototype.updateThreadsData = function (chart) {
        this.chartdataThreads.labels = [];
        this.chartdataThreads.datasets[0].data = [];
        // console.log('Threads - Datapoints: ' + String(this.websocketPluginService.threads.series.length));
        //    console.log(this.websocketPluginService.threads.series);
        for (var i = 0; i < this.websocketPluginService.threads.series.length; i++) {
            //      this.chartdataThreads.labels.push(String(this.websocketPluginService.ThreadsSeriesData[i][2].time.substr(0,5)));
            this.chartdataThreads.labels.push(this.websocketPluginService.threads.series[i][2].date.substr(0, 5) + ' ' + String(this.websocketPluginService.threads.series[i][2].time.substr(0, 5)));
            //      this.chartdataMemory.labels.push(String(this.websocketPluginService.MemorySeriesData[i][0]));
            this.chartdataThreads.datasets[0].data.push(this.websocketPluginService.threads.series[i][1]);
        }
        //    console.log({chart});
        if (this.threadsChartInitialized) {
            // console.warn('updateThreadsData: Chart-Refresh');
            //      chart.refresh();
        }
        this.threadsChartInitialized = true;
    };
    SystemComponent.prototype.updateDiskData = function (chart) {
        this.chartdataDisk.labels = [];
        this.chartdataDisk.datasets[0].data = [];
        // console.log('Disk - Datapoints: ' + String(this.websocketPluginService.disk.series.length));
        //    console.log(this.websocketPluginService.disk.series);
        for (var i = 0; i < this.websocketPluginService.disk.series.length; i++) {
            //      this.chartdataDisk.labels.push(String(this.websocketPluginService.DiskSeriesData[i][2].time.substr(0,5)));
            this.chartdataDisk.labels.push(this.websocketPluginService.disk.series[i][2].date.substr(0, 5) + ' ' + String(this.websocketPluginService.disk.series[i][2].time.substr(0, 5)));
            //      this.chartdataMemory.labels.push(String(this.websocketPluginService.MemorySeriesData[i][0]));
            this.chartdataDisk.datasets[0].data.push(this.websocketPluginService.disk.series[i][1]);
        }
        //    console.log({chart});
        if (this.diskChartInitialized) {
            console.warn('updateDiskData: Chart-Refresh');
            //      chart.refresh();
        }
        this.diskChartInitialized = true;
    };
    SystemComponent.prototype.updateSystemloadChart = function (chart) {
        chart.refresh();
    };
    SystemComponent.prototype.setSystemloadData = function (loadData) {
        this.chartdataLoad = {
            labels: [],
            datasets: [
                {
                    label: 'System Load',
                    data: [],
                    fill: false,
                    backgroundColor: '#709cc2',
                    borderColor: '#709cc2',
                    pointRadius: 0,
                }
            ]
        };
        if (loadData === undefined) {
        }
        else {
            console.log('setSystemloadData (callback)');
            console.log(loadData);
            this.loadData = loadData;
            this.chartdataLoad.labels = [];
            this.chartdataLoad.datasets[0].data = [];
            console.log('Datapoints: ' + String(loadData.length));
            for (var i = 0; i < loadData.length; i++) {
                this.chartdataLoad.datasets[0].data.push(loadData[i][1]);
            }
            console.log(this.chartdataLoad.labels);
            console.log(this.chartdataLoad.datasets[0].data);
        }
    };
    var SystemComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('chrtSystemload'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["UIChart"])
    ], SystemComponent.prototype, "chartSystemload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('chrtMemory'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["UIChart"])
    ], SystemComponent.prototype, "chartMemory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('chrtThreads'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["UIChart"])
    ], SystemComponent.prototype, "chartThreads", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('chrtDisk'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", primeng_primeng__WEBPACK_IMPORTED_MODULE_5__["UIChart"])
    ], SystemComponent.prototype, "chartDisk", void 0);
    SystemComponent = SystemComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-system',
            template: __webpack_require__(/*! ./system.component.html */ "./src/app/system/system-overview/system.component.html"),
            providers: [_common_services_websocket_service__WEBPACK_IMPORTED_MODULE_8__["WebsocketService"], _common_services_websocket_plugin_service__WEBPACK_IMPORTED_MODULE_9__["WebsocketPluginService"]],
            styles: [__webpack_require__(/*! ./system.component.css */ "./src/app/system/system-overview/system.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _common_services_olddata_service__WEBPACK_IMPORTED_MODULE_7__["OlddataService"],
            _common_services_server_api_service__WEBPACK_IMPORTED_MODULE_11__["ServerApiService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"],
            _common_services_websocket_plugin_service__WEBPACK_IMPORTED_MODULE_9__["WebsocketPluginService"],
            _common_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]])
    ], SystemComponent);
    return SystemComponent;
}());



/***/ }),

/***/ "./src/app/threads/threads.component.css":
/*!***********************************************!*\
  !*** ./src/app/threads/threads.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RocmVhZHMvdGhyZWFkcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/threads/threads.component.html":
/*!************************************************!*\
  !*** ./src/app/threads/threads.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin-left: 10px; margin-right: 10px; margin-top: 55px;\">\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n      <tr class=\"shng_heading\">\r\n        <th>{{ 'THREADS.THREAD'|translate }} ({{ 'THREADS.TOTAL'|translate }}: {{ threads_count }})</th>\r\n        <th>{{ 'THREADS.THREAD-ID'|translate }}</th>\r\n        <th>{{ 'THREADS.ACTIVE'|translate }}</th>\r\n        <th></th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <ng-container *ngFor=\"let thread of threadsList\">\r\n        <tr>\r\n          <td class=\"py-1\">{{ thread.name }}</td>\r\n          <td class=\"py-1\">{{ thread.id }}</td>\r\n          <td class=\"py-1\">{{ thread.alive|translate }}</td>\r\n          <td class=\"py-1\" width=\"200px\"></td>\r\n        </tr>\r\n      </ng-container>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/threads/threads.component.ts":
/*!**********************************************!*\
  !*** ./src/app/threads/threads.component.ts ***!
  \**********************************************/
/*! exports provided: ThreadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadsComponent", function() { return ThreadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_services_threads_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/services/threads-api.service */ "./src/app/common/services/threads-api.service.ts");



var ThreadsComponent = /** @class */ (function () {
    function ThreadsComponent(dataService) {
        this.dataService = dataService;
    }
    ThreadsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ThreadsComponent.ngOnInit');
        this.dataService.getThreads()
            .subscribe(function (response) {
            _this.threadsList = response[1];
            _this.threads_count = response[0];
            //          this.schedulerinfo.sort(function (a, b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)});
            console.log('getThreads', { response: response });
        });
    };
    ThreadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-threads',
            template: __webpack_require__(/*! ./threads.component.html */ "./src/app/threads/threads.component.html"),
            styles: [__webpack_require__(/*! ./threads.component.css */ "./src/app/threads/threads.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_common_services_threads_api_service__WEBPACK_IMPORTED_MODULE_2__["ThreadsApiService"]])
    ], ThreadsComponent);
    return ThreadsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror/mode/python/python */ "./node_modules/codemirror/mode/python/python.js");
/* harmony import */ var codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_python_python__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! codemirror/mode/yaml/yaml */ "./node_modules/codemirror/mode/yaml/yaml.js");
/* harmony import */ var codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_yaml_yaml__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! codemirror/mode/xml/xml */ "./node_modules/codemirror/mode/xml/xml.js");
/* harmony import */ var codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_xml_xml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var codemirror_addon_fold_foldcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! codemirror/addon/fold/foldcode */ "./node_modules/codemirror/addon/fold/foldcode.js");
/* harmony import */ var codemirror_addon_fold_foldcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldcode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! codemirror/addon/fold/foldgutter */ "./node_modules/codemirror/addon/fold/foldgutter.js");
/* harmony import */ var codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_foldgutter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var codemirror_addon_fold_comment_fold__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! codemirror/addon/fold/comment-fold */ "./node_modules/codemirror/addon/fold/comment-fold.js");
/* harmony import */ var codemirror_addon_fold_comment_fold__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_comment_fold__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! codemirror/addon/fold/brace-fold */ "./node_modules/codemirror/addon/fold/brace-fold.js");
/* harmony import */ var codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_brace_fold__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var codemirror_addon_fold_xml_fold__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! codemirror/addon/fold/xml-fold */ "./node_modules/codemirror/addon/fold/xml-fold.js");
/* harmony import */ var codemirror_addon_fold_xml_fold__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_xml_fold__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var codemirror_addon_fold_indent_fold__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! codemirror/addon/fold/indent-fold */ "./node_modules/codemirror/addon/fold/indent-fold.js");
/* harmony import */ var codemirror_addon_fold_indent_fold__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_fold_indent_fold__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var codemirror_addon_display_fullscreen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! codemirror/addon/display/fullscreen */ "./node_modules/codemirror/addon/display/fullscreen.js");
/* harmony import */ var codemirror_addon_display_fullscreen__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_fullscreen__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var codemirror_addon_display_rulers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! codemirror/addon/display/rulers */ "./node_modules/codemirror/addon/display/rulers.js");
/* harmony import */ var codemirror_addon_display_rulers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_rulers__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var codemirror_addon_display_autorefresh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! codemirror/addon/display/autorefresh */ "./node_modules/codemirror/addon/display/autorefresh.js");
/* harmony import */ var codemirror_addon_display_autorefresh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_display_autorefresh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! codemirror/addon/hint/show-hint */ "./node_modules/codemirror/addon/hint/show-hint.js");
/* harmony import */ var codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_show_hint__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var codemirror_addon_hint_anyword_hint__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! codemirror/addon/hint/anyword-hint */ "./node_modules/codemirror/addon/hint/anyword-hint.js");
/* harmony import */ var codemirror_addon_hint_anyword_hint__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_hint_anyword_hint__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var codemirror_addon_dialog_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! codemirror/addon/dialog/dialog */ "./node_modules/codemirror/addon/dialog/dialog.js");
/* harmony import */ var codemirror_addon_dialog_dialog__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_dialog_dialog__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var codemirror_addon_search_searchcursor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! codemirror/addon/search/searchcursor */ "./node_modules/codemirror/addon/search/searchcursor.js");
/* harmony import */ var codemirror_addon_search_searchcursor__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_searchcursor__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var codemirror_addon_search_search__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! codemirror/addon/search/search */ "./node_modules/codemirror/addon/search/search.js");
/* harmony import */ var codemirror_addon_search_search__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_search__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var codemirror_addon_scroll_annotatescrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! codemirror/addon/scroll/annotatescrollbar */ "./node_modules/codemirror/addon/scroll/annotatescrollbar.js");
/* harmony import */ var codemirror_addon_scroll_annotatescrollbar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_scroll_annotatescrollbar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var codemirror_addon_search_matchesonscrollbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! codemirror/addon/search/matchesonscrollbar */ "./node_modules/codemirror/addon/search/matchesonscrollbar.js");
/* harmony import */ var codemirror_addon_search_matchesonscrollbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_matchesonscrollbar__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var codemirror_addon_search_jump_to_line__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! codemirror/addon/search/jump-to-line */ "./node_modules/codemirror/addon/search/jump-to-line.js");
/* harmony import */ var codemirror_addon_search_jump_to_line__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(codemirror_addon_search_jump_to_line__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! codemirror/mode/javascript/javascript */ "./node_modules/codemirror/mode/javascript/javascript.js");
/* harmony import */ var codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_javascript_javascript__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! codemirror/mode/markdown/markdown */ "./node_modules/codemirror/mode/markdown/markdown.js");
/* harmony import */ var codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(codemirror_mode_markdown_markdown__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");


























if (_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_22__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_23__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_24__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workspace\shngadmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map