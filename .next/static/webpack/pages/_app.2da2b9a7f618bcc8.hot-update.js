"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/NavigationMenu/NavigationMenu.js":
/*!*****************************************************!*\
  !*** ./components/NavigationMenu/NavigationMenu.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavigationMenu; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavigationMenu_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./NavigationMenu.module.scss */ \"./components/NavigationMenu/NavigationMenu.module.scss\");\n/* harmony import */ var _NavigationMenu_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_NavigationMenu_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _NavigationMenuClassesFromWP_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavigationMenuClassesFromWP.module.scss */ \"./components/NavigationMenu/NavigationMenuClassesFromWP.module.scss\");\n/* harmony import */ var _NavigationMenuClassesFromWP_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_NavigationMenuClassesFromWP_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _faustwp_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @faustwp/core */ \"./node_modules/@faustwp/core/dist/mjs/index.js\");\n\nfunction _templateObject() {\n    var data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    fragment NavigationMenuItemFragment on MenuItem {\\n      id\\n      path\\n      label\\n      parentId\\n      cssClasses\\n      menu {\\n        node {\\n          name\\n        }\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\n\n\nvar cx = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_NavigationMenu_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nvar cxFromWp = classnames_bind__WEBPACK_IMPORTED_MODULE_2___default().bind((_NavigationMenuClassesFromWP_module_scss__WEBPACK_IMPORTED_MODULE_6___default()));\nfunction NavigationMenu(param) {\n    var menuItems = param.menuItems, className = param.className;\n    var ref, ref1, ref2;\n    if (!menuItems) {\n        return null;\n    }\n    // Based on https://www.wpgraphql.com/docs/menus/#hierarchical-data\n    // const hierarchicalMenuItems = flatListToHierarchical(menuItems);\n    function renderMenu(items) {\n        var _this = this;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            className: cx(\"menu\"),\n            children: items.map(function(item) {\n                var id = item.id, path = item.path, label = item.label, children = item.children, cssClasses = item.cssClasses;\n                // @TODO - Remove guard clause after ghost menu items are no longer appended to array.\n                if (!item.hasOwnProperty(\"__typename\")) {\n                    return null;\n                }\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    className: cxFromWp(cssClasses),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: path !== null && path !== void 0 ? path : \"\",\n                            children: label !== null && label !== void 0 ? label : \"\"\n                        }, void 0, false, {\n                            fileName: \"/Users/janinezielman/Documents/Sites/Wordpress/faustwp-getting-started/components/NavigationMenu/NavigationMenu.js\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, _this),\n                        children.length ? renderMenu(children) : null\n                    ]\n                }, id, true, {\n                    fileName: \"/Users/janinezielman/Documents/Sites/Wordpress/faustwp-getting-started/components/NavigationMenu/NavigationMenu.js\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/janinezielman/Documents/Sites/Wordpress/faustwp-getting-started/components/NavigationMenu/NavigationMenu.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n        className: cx([\n            \"component\",\n            className\n        ]),\n        role: \"navigation\",\n        \"aria-label\": \"\".concat((ref = menuItems[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.menu) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.node) === null || ref2 === void 0 ? void 0 : ref2.name, \" menu\"),\n        children: renderMenu(hierarchicalMenuItems)\n    }, void 0, false, {\n        fileName: \"/Users/janinezielman/Documents/Sites/Wordpress/faustwp-getting-started/components/NavigationMenu/NavigationMenu.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_c = NavigationMenu;\nNavigationMenu.fragments = {\n    entry: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject())\n};\nvar _c;\n$RefreshReg$(_c, \"NavigationMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdmlnYXRpb25NZW51L05hdmlnYXRpb25NZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0o7QUFDUjtBQUNxQjtBQUNtQjtBQUNkO0FBRXZELElBQUlNLEVBQUUsR0FBR04sMkRBQWUsQ0FBQ0csb0VBQU0sQ0FBQztBQUNoQyxJQUFJSyxRQUFRLEdBQUdSLDJEQUFlLENBQUNJLGlGQUFZLENBQUM7QUFFN0IsU0FBU0ssY0FBYyxDQUFDLEtBQXdCLEVBQUU7UUFBeEJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7UUFrQ3hDRCxHQUFZO0lBakMvQixJQUFJLENBQUNBLFNBQVMsRUFBRTtRQUNkLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxtRUFBbUU7SUFFbkUsU0FBU0UsVUFBVSxDQUFDQyxLQUFLLEVBQUU7O1FBQ3pCLHFCQUNFLDhEQUFDQyxJQUFFO1lBQUNILFNBQVMsRUFBRUwsRUFBRSxDQUFDLE1BQU0sQ0FBQztzQkFDdEJPLEtBQUssQ0FBQ0UsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztnQkFDbkIsSUFBUUMsRUFBRSxHQUF3Q0QsSUFBSSxDQUE5Q0MsRUFBRSxFQUFFQyxJQUFJLEdBQWtDRixJQUFJLENBQTFDRSxJQUFJLEVBQUVDLEtBQUssR0FBMkJILElBQUksQ0FBcENHLEtBQUssRUFBRUMsUUFBUSxHQUFpQkosSUFBSSxDQUE3QkksUUFBUSxFQUFFQyxVQUFVLEdBQUtMLElBQUksQ0FBbkJLLFVBQVU7Z0JBRTdDLHNGQUFzRjtnQkFDdEYsSUFBSSxDQUFDTCxJQUFJLENBQUNNLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFBRTtvQkFDdEMsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkFFRCxxQkFDRSw4REFBQ0MsSUFBRTtvQkFBVVosU0FBUyxFQUFFSCxRQUFRLENBQUNhLFVBQVUsQ0FBQzs7c0NBQzFDLDhEQUFDbkIsa0RBQUk7NEJBQUNzQixJQUFJLEVBQUVOLElBQUksYUFBSkEsSUFBSSxjQUFKQSxJQUFJLEdBQUksRUFBRTtzQ0FBR0MsS0FBSyxhQUFMQSxLQUFLLGNBQUxBLEtBQUssR0FBSSxFQUFFOzs7OztpQ0FBUTt3QkFDM0NDLFFBQVEsQ0FBQ0ssTUFBTSxHQUFHYixVQUFVLENBQUNRLFFBQVEsQ0FBQyxHQUFHLElBQUk7O21CQUZ2Q0gsRUFBRTs7Ozt5QkFHTixDQUNMO1lBQ0osQ0FBQyxDQUFDOzs7OztnQkFDQyxDQUNMO0lBQ0osQ0FBQztJQUVELHFCQUNFLDhEQUFDUyxLQUFHO1FBQ0ZmLFNBQVMsRUFBRUwsRUFBRSxDQUFDO1lBQUMsV0FBVztZQUFFSyxTQUFTO1NBQUMsQ0FBQztRQUN2Q2dCLElBQUksRUFBQyxZQUFZO1FBQ2pCQyxZQUFVLEVBQUUsRUFBQyxDQUFpQyxNQUFLLENBQXBDbEIsQ0FBQUEsR0FBWSxHQUFaQSxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQVpBLEdBQVksV0FBTSxHQUFsQkEsS0FBQUEsQ0FBa0IsR0FBbEJBLFFBQUFBLEdBQVksQ0FBRW1CLElBQUksZ0NBQWxCbkIsS0FBQUEsQ0FBa0IsR0FBbEJBLGFBQW9Cb0IsSUFBSSw2QkFBTixHQUFsQnBCLEtBQUFBLENBQWtCLFFBQVFxQixJQUFJLEVBQUMsT0FBSyxDQUFDO2tCQUNuRG5CLFVBQVUsQ0FBQ29CLHFCQUFxQixDQUFDOzs7OztZQUM5QixDQUNOO0FBQ0osQ0FBQztBQXRDdUJ2QixLQUFBQSxjQUFjO0FBd0N0Q0EsY0FBYyxDQUFDd0IsU0FBUyxHQUFHO0lBQ3pCQyxLQUFLLEVBQUVqQyxtREFBRztDQWNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZpZ2F0aW9uTWVudS9OYXZpZ2F0aW9uTWVudS5qcz84OTJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMvYmluZCc7XG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb25NZW51Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBzdHlsZXNGcm9tV1AgZnJvbSAnLi9OYXZpZ2F0aW9uTWVudUNsYXNzZXNGcm9tV1AubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgZmxhdExpc3RUb0hpZXJhcmNoaWNhbCB9IGZyb20gJ0BmYXVzdHdwL2NvcmUnO1xuXG5sZXQgY3ggPSBjbGFzc05hbWVzLmJpbmQoc3R5bGVzKTtcbmxldCBjeEZyb21XcCA9IGNsYXNzTmFtZXMuYmluZChzdHlsZXNGcm9tV1ApO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uTWVudSh7IG1lbnVJdGVtcywgY2xhc3NOYW1lIH0pIHtcbiAgaWYgKCFtZW51SXRlbXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIEJhc2VkIG9uIGh0dHBzOi8vd3d3LndwZ3JhcGhxbC5jb20vZG9jcy9tZW51cy8jaGllcmFyY2hpY2FsLWRhdGFcbiAgLy8gY29uc3QgaGllcmFyY2hpY2FsTWVudUl0ZW1zID0gZmxhdExpc3RUb0hpZXJhcmNoaWNhbChtZW51SXRlbXMpO1xuXG4gIGZ1bmN0aW9uIHJlbmRlck1lbnUoaXRlbXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT17Y3goJ21lbnUnKX0+XG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGlkLCBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIGNzc0NsYXNzZXMgfSA9IGl0ZW07XG5cbiAgICAgICAgICAvLyBAVE9ETyAtIFJlbW92ZSBndWFyZCBjbGF1c2UgYWZ0ZXIgZ2hvc3QgbWVudSBpdGVtcyBhcmUgbm8gbG9uZ2VyIGFwcGVuZGVkIHRvIGFycmF5LlxuICAgICAgICAgIGlmICghaXRlbS5oYXNPd25Qcm9wZXJ0eSgnX190eXBlbmFtZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpIGtleT17aWR9IGNsYXNzTmFtZT17Y3hGcm9tV3AoY3NzQ2xhc3Nlcyl9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwYXRoID8/ICcnfT57bGFiZWwgPz8gJyd9PC9MaW5rPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW4ubGVuZ3RoID8gcmVuZGVyTWVudShjaGlsZHJlbikgOiBudWxsfVxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG5hdlxuICAgICAgY2xhc3NOYW1lPXtjeChbJ2NvbXBvbmVudCcsIGNsYXNzTmFtZV0pfVxuICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgYXJpYS1sYWJlbD17YCR7bWVudUl0ZW1zWzBdPy5tZW51Py5ub2RlPy5uYW1lfSBtZW51YH0+XG4gICAgICB7cmVuZGVyTWVudShoaWVyYXJjaGljYWxNZW51SXRlbXMpfVxuICAgIDwvbmF2PlxuICApO1xufVxuXG5OYXZpZ2F0aW9uTWVudS5mcmFnbWVudHMgPSB7XG4gIGVudHJ5OiBncWxgXG4gICAgZnJhZ21lbnQgTmF2aWdhdGlvbk1lbnVJdGVtRnJhZ21lbnQgb24gTWVudUl0ZW0ge1xuICAgICAgaWRcbiAgICAgIHBhdGhcbiAgICAgIGxhYmVsXG4gICAgICBwYXJlbnRJZFxuICAgICAgY3NzQ2xhc3Nlc1xuICAgICAgbWVudSB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgIG5hbWVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYCxcbn07XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsImdxbCIsIkxpbmsiLCJzdHlsZXMiLCJzdHlsZXNGcm9tV1AiLCJmbGF0TGlzdFRvSGllcmFyY2hpY2FsIiwiY3giLCJiaW5kIiwiY3hGcm9tV3AiLCJOYXZpZ2F0aW9uTWVudSIsIm1lbnVJdGVtcyIsImNsYXNzTmFtZSIsInJlbmRlck1lbnUiLCJpdGVtcyIsInVsIiwibWFwIiwiaXRlbSIsImlkIiwicGF0aCIsImxhYmVsIiwiY2hpbGRyZW4iLCJjc3NDbGFzc2VzIiwiaGFzT3duUHJvcGVydHkiLCJsaSIsImhyZWYiLCJsZW5ndGgiLCJuYXYiLCJyb2xlIiwiYXJpYS1sYWJlbCIsIm1lbnUiLCJub2RlIiwibmFtZSIsImhpZXJhcmNoaWNhbE1lbnVJdGVtcyIsImZyYWdtZW50cyIsImVudHJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavigationMenu/NavigationMenu.js\n"));

/***/ })

});