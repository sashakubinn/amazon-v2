"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/catalog/Catalog.tsx":
/*!***********************************************!*\
  !*** ./src/components/ui/catalog/Catalog.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heading_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heading/Heading */ \"(app-pages-browser)/./src/components/ui/heading/Heading.tsx\");\n/* harmony import */ var _product_items_product_item_ProductItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-items/product-item/ProductItem */ \"(app-pages-browser)/./src/components/ui/catalog/product-items/product-item/ProductItem.tsx\");\n/* harmony import */ var _CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CatalogPagination.module.css */ \"(app-pages-browser)/./src/components/ui/catalog/CatalogPagination.module.css\");\n/* harmony import */ var _CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/Button */ \"(app-pages-browser)/./src/components/ui/button/Button.tsx\");\n/* harmony import */ var _services_product_product_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/product/product.types */ \"(app-pages-browser)/./src/services/product/product.types.ts\");\n/* harmony import */ var _hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePagination */ \"(app-pages-browser)/./src/hooks/usePagination.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Catalog = (param)=>{\n    let { products, isLoading, title, isPagination = false } = param;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [sortType, setSortType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_services_product_product_types__WEBPACK_IMPORTED_MODULE_5__.EnumProductSort.NEWEST);\n    const { response } = (0,_hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__.usePagination)({\n        page,\n        products,\n        sortType\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heading_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                size: \"3xl\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\Catalog.tsx\",\n                lineNumber: 36,\n                columnNumber: 14\n            }, undefined),\n            products.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_items_product_item_ProductItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\Catalog.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 8\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\Catalog.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 6\n                    }, undefined),\n                    isPagination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        variant: \"orange\",\n                        children: \" Load more \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\Catalog.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 23\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heading_Heading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                size: \"3xl\",\n                children: \"There is no products\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\Catalog.tsx\",\n                lineNumber: 47,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\Catalog.tsx\",\n        lineNumber: 35,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Catalog, \"Npra9N6XcthOjilNoSGZPvrZGGY=\", false, function() {\n    return [\n        _hooks_usePagination__WEBPACK_IMPORTED_MODULE_6__.usePagination\n    ];\n});\n_c = Catalog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Catalog);\nvar _c;\n$RefreshReg$(_c, \"Catalog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL2NhdGFsb2cvQ2F0YWxvZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNJO0FBQzBCO0FBQ3BCO0FBRVQ7QUFDNkI7QUFDYjtBQVNyRCxNQUFNTyxVQUF3QjtRQUFDLEVBQzlCQyxRQUFRLEVBQ1JDLFNBQVMsRUFDVEMsS0FBSyxFQUNMQyxlQUFlLEtBQUssRUFDcEI7O0lBQ0EsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2MsVUFBVUMsWUFBWSxHQUFHZiwrQ0FBUUEsQ0FDdkNLLDRFQUFlQSxDQUFDVyxNQUFNO0lBRXZCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdYLG1FQUFhQSxDQUFDO1FBQ2xDTTtRQUNBSjtRQUNBTTtJQUNEO0lBQ0EscUJBQ0MsOERBQUNJOztZQUNDUix1QkFBUyw4REFBQ1Qsd0RBQU9BO2dCQUFDa0IsTUFBSzswQkFBT1Q7Ozs7OztZQUM5QkYsU0FBU1ksTUFBTSxpQkFDZjs7a0NBQ0MsOERBQUNDO3dCQUFJQyxXQUFXbkIsZ0ZBQVc7a0NBQ3pCSyxTQUFTZ0IsR0FBRyxDQUFDQyxDQUFBQSx3QkFDYiw4REFBQ3ZCLCtFQUFXQTtnQ0FBQ3VCLFNBQVNBOytCQUFjQSxRQUFRQyxFQUFFOzs7Ozs7Ozs7O29CQUcvQ2YsOEJBQWdCLDhEQUFDUCxzREFBTUE7d0JBQUN1QixTQUFRO2tDQUFTOzs7Ozs7OzZDQUczQyw4REFBQzFCLHdEQUFPQTtnQkFBQ2tCLE1BQUs7MEJBQU07Ozs7Ozs7Ozs7OztBQUl4QjtHQWhDTVo7O1FBVWdCRCwrREFBYUE7OztLQVY3QkM7QUFrQ04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdWkvY2F0YWxvZy9DYXRhbG9nLnRzeD8wOTdiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gJ0AvdHlwZXMvcHJvZHVjdC5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9oZWFkaW5nL0hlYWRpbmcnXHJcbmltcG9ydCBQcm9kdWN0SXRlbSBmcm9tICcuL3Byb2R1Y3QtaXRlbXMvcHJvZHVjdC1pdGVtL1Byb2R1Y3RJdGVtJ1xyXG5pbXBvcnQgcyBmcm9tICcuL0NhdGFsb2dQYWdpbmF0aW9uLm1vZHVsZS5jc3MnXHJcbmltcG9ydCBTb3J0RHJvcERvd24gZnJvbSAnLi9zb3J0LWRyb3AtZG93bi9Tb3J0RHJvcERvd24nXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vYnV0dG9uL0J1dHRvbidcclxuaW1wb3J0IHsgRW51bVByb2R1Y3RTb3J0IH0gZnJvbSAnQC9zZXJ2aWNlcy9wcm9kdWN0L3Byb2R1Y3QudHlwZXMnXHJcbmltcG9ydCB7IHVzZVBhZ2luYXRpb24gfSBmcm9tICdAL2hvb2tzL3VzZVBhZ2luYXRpb24nXHJcblxyXG5pbnRlcmZhY2UgSUNhdGFsb2cge1xyXG5cdHByb2R1Y3RzOiBJUHJvZHVjdFtdXHJcblx0aXNMb2FkaW5nPzogYm9vbGVhblxyXG5cdHRpdGxlPzogc3RyaW5nXHJcblx0aXNQYWdpbmF0aW9uPzogYm9vbGVhblxyXG59XHJcblxyXG5jb25zdCBDYXRhbG9nOiBGQzxJQ2F0YWxvZz4gPSAoe1xyXG5cdHByb2R1Y3RzLFxyXG5cdGlzTG9hZGluZyxcclxuXHR0aXRsZSxcclxuXHRpc1BhZ2luYXRpb24gPSBmYWxzZSxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpXHJcblx0Y29uc3QgW3NvcnRUeXBlLCBzZXRTb3J0VHlwZV0gPSB1c2VTdGF0ZTxFbnVtUHJvZHVjdFNvcnQ+KFxyXG5cdFx0RW51bVByb2R1Y3RTb3J0Lk5FV0VTVFxyXG5cdClcclxuXHRjb25zdCB7IHJlc3BvbnNlIH0gPSB1c2VQYWdpbmF0aW9uKHtcclxuXHRcdHBhZ2UsXHJcblx0XHRwcm9kdWN0cyxcclxuXHRcdHNvcnRUeXBlLFxyXG5cdH0pXHJcblx0cmV0dXJuIChcclxuXHRcdDxzZWN0aW9uPlxyXG5cdFx0XHR7dGl0bGUgJiYgPEhlYWRpbmcgc2l6ZT0nM3hsJz57dGl0bGV9PC9IZWFkaW5nPn1cclxuXHRcdFx0e3Byb2R1Y3RzLmxlbmd0aCA/IChcclxuXHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cclxuXHRcdFx0XHRcdFx0e3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuXHRcdFx0XHRcdFx0XHQ8UHJvZHVjdEl0ZW0gcHJvZHVjdD17cHJvZHVjdH0ga2V5PXtwcm9kdWN0LmlkfSAvPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0e2lzUGFnaW5hdGlvbiAmJiA8QnV0dG9uIHZhcmlhbnQ9J29yYW5nZSc+IExvYWQgbW9yZSA8L0J1dHRvbj59XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PEhlYWRpbmcgc2l6ZT0nM3hsJz5UaGVyZSBpcyBubyBwcm9kdWN0czwvSGVhZGluZz5cclxuXHRcdFx0KX1cclxuXHRcdDwvc2VjdGlvbj5cclxuXHQpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGFsb2dcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGluZyIsIlByb2R1Y3RJdGVtIiwicyIsIkJ1dHRvbiIsIkVudW1Qcm9kdWN0U29ydCIsInVzZVBhZ2luYXRpb24iLCJDYXRhbG9nIiwicHJvZHVjdHMiLCJpc0xvYWRpbmciLCJ0aXRsZSIsImlzUGFnaW5hdGlvbiIsInBhZ2UiLCJzZXRQYWdlIiwic29ydFR5cGUiLCJzZXRTb3J0VHlwZSIsIk5FV0VTVCIsInJlc3BvbnNlIiwic2VjdGlvbiIsInNpemUiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYXAiLCJwcm9kdWN0IiwiaWQiLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/catalog/Catalog.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/hooks/usePagination.ts":
/*!************************************!*\
  !*** ./src/hooks/usePagination.ts ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   usePagination: function() { return /* binding */ usePagination; }\n/* harmony export */ });\n/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services/product/product.service */ \"(app-pages-browser)/./src/services/product/product.service.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useQuery.js\");\n\n\nconst usePagination = (param)=>{\n    let { sortType, page, products } = param;\n    const { data: response, isLoading, error, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"products\",\n            sortType,\n            page\n        ],\n        queryFn: ()=>_services_product_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService.getAll({\n                page,\n                perPage: 4,\n                sort: sortType,\n                ratings: \"\"\n            }),\n        initialData: products\n    });\n    return {\n        response,\n        isLoading,\n        refetch\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9ob29rcy91c2VQYWdpbmF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRTtBQUVuQjtBQVN6QyxNQUFNRSxnQkFBZ0I7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFrQjtJQUN6RSxNQUFNLEVBQ0xDLE1BQU1DLFFBQVEsRUFDZEMsU0FBUyxFQUNUQyxLQUFLLEVBQ0xDLE9BQU8sRUFDUCxHQUFHVCwrREFBUUEsQ0FBQztRQUNaVSxVQUFVO1lBQUM7WUFBWVI7WUFBVUM7U0FBSztRQUN0Q1EsU0FBUyxJQUNSWiw2RUFBY0EsQ0FBQ2EsTUFBTSxDQUFDO2dCQUNyQlQ7Z0JBQ0FVLFNBQVM7Z0JBQ1RDLE1BQU1aO2dCQUNOYSxTQUFTO1lBQ1Y7UUFDREMsYUFBYVo7SUFDZDtJQUNBLE9BQU87UUFBRUU7UUFBVUM7UUFBV0U7SUFBUTtBQUN2QyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VQYWdpbmF0aW9uLnRzP2M2NGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZVByb2R1Y3RQYWdpbmF0aW9uIH0gZnJvbSAnLi8uLi90eXBlcy9wcm9kdWN0LmludGVyZmFjZSdcclxuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICdAL3NlcnZpY2VzL3Byb2R1Y3QvcHJvZHVjdC5zZXJ2aWNlJ1xyXG5pbXBvcnQgeyBFbnVtUHJvZHVjdFNvcnQgfSBmcm9tICdAL3NlcnZpY2VzL3Byb2R1Y3QvcHJvZHVjdC50eXBlcydcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknXHJcbmltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbnRlcmZhY2UgSVVzZVBhZ2luYXRpb24ge1xyXG5cdHNvcnRUeXBlOiBFbnVtUHJvZHVjdFNvcnRcclxuXHRwYWdlOiBudW1iZXJcclxuXHRwcm9kdWN0czogVHlwZVByb2R1Y3RQYWdpbmF0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdpbmF0aW9uID0gKHsgc29ydFR5cGUsIHBhZ2UsIHByb2R1Y3RzIH06IElVc2VQYWdpbmF0aW9uKSA9PiB7XHJcblx0Y29uc3Qge1xyXG5cdFx0ZGF0YTogcmVzcG9uc2UsXHJcblx0XHRpc0xvYWRpbmcsXHJcblx0XHRlcnJvcixcclxuXHRcdHJlZmV0Y2gsXHJcblx0fSA9IHVzZVF1ZXJ5KHtcclxuXHRcdHF1ZXJ5S2V5OiBbJ3Byb2R1Y3RzJywgc29ydFR5cGUsIHBhZ2VdLFxyXG5cdFx0cXVlcnlGbjogKCkgPT5cclxuXHRcdFx0UHJvZHVjdFNlcnZpY2UuZ2V0QWxsKHtcclxuXHRcdFx0XHRwYWdlLFxyXG5cdFx0XHRcdHBlclBhZ2U6IDQsXHJcblx0XHRcdFx0c29ydDogc29ydFR5cGUsXHJcblx0XHRcdFx0cmF0aW5nczogJycsXHJcblx0XHRcdH0pLFxyXG5cdFx0aW5pdGlhbERhdGE6IHByb2R1Y3RzLFxyXG5cdH0pXHJcblx0cmV0dXJuIHsgcmVzcG9uc2UsIGlzTG9hZGluZywgcmVmZXRjaCB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlByb2R1Y3RTZXJ2aWNlIiwidXNlUXVlcnkiLCJ1c2VQYWdpbmF0aW9uIiwic29ydFR5cGUiLCJwYWdlIiwicHJvZHVjdHMiLCJkYXRhIiwicmVzcG9uc2UiLCJpc0xvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJnZXRBbGwiLCJwZXJQYWdlIiwic29ydCIsInJhdGluZ3MiLCJpbml0aWFsRGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/hooks/usePagination.ts\n"));

/***/ })

});