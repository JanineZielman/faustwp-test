/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Posts/index.js":
/*!***********************************!*\
  !*** ./components/Posts/index.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* reexport safe */ _Container__WEBPACK_IMPORTED_MODULE_0__.Container; },\n/* harmony export */   \"ContentWrapper\": function() { return /* reexport safe */ _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__.ContentWrapper; },\n/* harmony export */   \"EntryHeader\": function() { return /* reexport safe */ _EntryHeader__WEBPACK_IMPORTED_MODULE_2__.EntryHeader; },\n/* harmony export */   \"FeaturedImage\": function() { return /* reexport safe */ _FeaturedImage__WEBPACK_IMPORTED_MODULE_3__.FeaturedImage; },\n/* harmony export */   \"Footer\": function() { return /* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_4__.Footer; },\n/* harmony export */   \"FormatDate\": function() { return /* reexport safe */ _FormatDate__WEBPACK_IMPORTED_MODULE_5__.FormatDate; },\n/* harmony export */   \"Header\": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_6__.Header; },\n/* harmony export */   \"Heading\": function() { return /* reexport safe */ _Heading__WEBPACK_IMPORTED_MODULE_7__.Heading; },\n/* harmony export */   \"Hero\": function() { return /* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_12__.Hero; },\n/* harmony export */   \"Main\": function() { return /* reexport safe */ _Main__WEBPACK_IMPORTED_MODULE_8__.Main; },\n/* harmony export */   \"NavigationMenu\": function() { return /* reexport safe */ _NavigationMenu__WEBPACK_IMPORTED_MODULE_9__.NavigationMenu; },\n/* harmony export */   \"Post\": function() { return /* reexport safe */ _Post__WEBPACK_IMPORTED_MODULE_13__.Post; },\n/* harmony export */   \"PostInfo\": function() { return /* reexport safe */ _PostInfo__WEBPACK_IMPORTED_MODULE_10__.PostInfo; },\n/* harmony export */   \"Posts\": function() { return /* reexport safe */ _Posts__WEBPACK_IMPORTED_MODULE_15__.Posts; },\n/* harmony export */   \"SEO\": function() { return /* reexport safe */ _SEO__WEBPACK_IMPORTED_MODULE_14__.SEO; },\n/* harmony export */   \"SkipNavigationLink\": function() { return /* reexport safe */ _SkipNavigationLink__WEBPACK_IMPORTED_MODULE_11__.SkipNavigationLink; }\n/* harmony export */ });\n/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Container */ \"./components/Container/index.js\");\n/* harmony import */ var _ContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContentWrapper */ \"./components/ContentWrapper/index.js\");\n/* harmony import */ var _EntryHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EntryHeader */ \"./components/EntryHeader/index.js\");\n/* harmony import */ var _FeaturedImage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FeaturedImage */ \"./components/FeaturedImage/index.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ \"./components/Footer/index.js\");\n/* harmony import */ var _FormatDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormatDate */ \"./components/FormatDate/index.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Header */ \"./components/Header/index.js\");\n/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Heading */ \"./components/Heading/index.js\");\n/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Main */ \"./components/Main/index.js\");\n/* harmony import */ var _NavigationMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NavigationMenu */ \"./components/NavigationMenu/index.js\");\n/* harmony import */ var _PostInfo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./PostInfo */ \"./components/PostInfo/index.js\");\n/* harmony import */ var _SkipNavigationLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SkipNavigationLink */ \"./components/SkipNavigationLink/index.js\");\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Hero */ \"./components/Hero/index.js\");\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Post */ \"./components/Post/index.js\");\n/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./SEO */ \"./components/SEO/index.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Posts */ \"./components/Posts/index.js\");\n/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_Posts__WEBPACK_IMPORTED_MODULE_15__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNVO0FBQ047QUFDSTtBQUNkO0FBQ1E7QUFDUjtBQUNFO0FBQ047QUFDb0I7QUFDWjtBQUNvQjtBQUM1QjtBQUNBO0FBQ0Y7QUFDSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9Db250YWluZXInO1xuZXhwb3J0IHsgQ29udGVudFdyYXBwZXIgfSBmcm9tICcuL0NvbnRlbnRXcmFwcGVyJztcbmV4cG9ydCB7IEVudHJ5SGVhZGVyIH0gZnJvbSAnLi9FbnRyeUhlYWRlcic7XG5leHBvcnQgeyBGZWF0dXJlZEltYWdlIH0gZnJvbSAnLi9GZWF0dXJlZEltYWdlJztcbmV4cG9ydCB7IEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJztcbmV4cG9ydCB7IEZvcm1hdERhdGUgfSBmcm9tICcuL0Zvcm1hdERhdGUnO1xuZXhwb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9IZWFkZXInO1xuZXhwb3J0IHsgSGVhZGluZyB9IGZyb20gJy4vSGVhZGluZyc7XG5leHBvcnQgeyBNYWluIH0gZnJvbSAnLi9NYWluJztcbmV4cG9ydCB7IE5hdmlnYXRpb25NZW51IH0gZnJvbSAnLi9OYXZpZ2F0aW9uTWVudSc7XG5leHBvcnQgeyBQb3N0SW5mbyB9IGZyb20gJy4vUG9zdEluZm8nO1xuZXhwb3J0IHsgU2tpcE5hdmlnYXRpb25MaW5rIH0gZnJvbSAnLi9Ta2lwTmF2aWdhdGlvbkxpbmsnO1xuZXhwb3J0IHsgSGVybyB9IGZyb20gJy4vSGVybyc7XG5leHBvcnQgeyBQb3N0IH0gZnJvbSAnLi9Qb3N0JztcbmV4cG9ydCB7IFNFTyB9IGZyb20gJy4vU0VPJztcbmV4cG9ydCB7IFBvc3RzIH0gZnJvbSAnLi9Qb3N0cyc7Il0sIm5hbWVzIjpbIkNvbnRhaW5lciIsIkNvbnRlbnRXcmFwcGVyIiwiRW50cnlIZWFkZXIiLCJGZWF0dXJlZEltYWdlIiwiRm9vdGVyIiwiRm9ybWF0RGF0ZSIsIkhlYWRlciIsIkhlYWRpbmciLCJNYWluIiwiTmF2aWdhdGlvbk1lbnUiLCJQb3N0SW5mbyIsIlNraXBOYXZpZ2F0aW9uTGluayIsIkhlcm8iLCJQb3N0IiwiU0VPIiwiUG9zdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});