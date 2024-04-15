"use strict";
(self["webpackChunkteamproject"] = self["webpackChunkteamproject"] || []).push([["src_main_webapp_app_admin_docs_docs_module_ts"],{

/***/ 37293:
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/admin/docs/docs.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsComponent": () => (/* binding */ DocsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class DocsComponent {
}
DocsComponent.ɵfac = function DocsComponent_Factory(t) { return new (t || DocsComponent)(); };
DocsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocsComponent, selectors: [["jhi-docs"]], decls: 2, vars: 0, consts: [["src", "swagger-ui/index.html", "width", "100%", "height", "900", "seamless", "", "target", "_top", "title", "Swagger UI", "data-cy", "swagger-frame", 1, "border-0"]], template: function DocsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "iframe", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n");
    } }, styles: ["iframe[_ngcontent-%COMP%] {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvY3MuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFRlYW0lMjBQcm9qZWN0XFxHaXRcXHNyY1xcbWFpblxcd2ViYXBwXFxhcHBcXGFkbWluXFxkb2NzXFxkb2NzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsaUJBQUE7QUNIRiIsImZpbGUiOiJkb2NzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnfmJvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucyc7XHJcbkBpbXBvcnQgJ35ib290c3dhdGNoL2Rpc3QvZmxhdGx5L3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJ35ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMnO1xyXG5cclxuaWZyYW1lIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iLCJpZnJhbWUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */"] });


/***/ }),

/***/ 38159:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/admin/docs/docs.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocsModule": () => (/* binding */ DocsModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/shared.module */ 92267);
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs.component */ 37293);
/* harmony import */ var _docs_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs.route */ 4371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);






class DocsModule {
}
DocsModule.ɵfac = function DocsModule_Factory(t) { return new (t || DocsModule)(); };
DocsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DocsModule });
DocsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild([_docs_route__WEBPACK_IMPORTED_MODULE_2__.docsRoute])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DocsModule, { declarations: [_docs_component__WEBPACK_IMPORTED_MODULE_1__.DocsComponent], imports: [app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 4371:
/*!******************************************************!*\
  !*** ./src/main/webapp/app/admin/docs/docs.route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "docsRoute": () => (/* binding */ docsRoute)
/* harmony export */ });
/* harmony import */ var _docs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs.component */ 37293);

const docsRoute = {
    path: '',
    component: _docs_component__WEBPACK_IMPORTED_MODULE_0__.DocsComponent,
    data: {
        pageTitle: 'API',
    },
};


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_admin_docs_docs_module_ts.js.map