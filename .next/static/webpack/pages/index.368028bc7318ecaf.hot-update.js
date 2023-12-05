"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ui/catalog/CatalogPagination.tsx":
/*!*********************************************************!*\
  !*** ./src/components/ui/catalog/CatalogPagination.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _api_api_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/api.helper */ \"./src/api/api.helper.ts\");\n/* harmony import */ var _services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/product/product.service */ \"./src/services/product/product.service.ts\");\n/* harmony import */ var _services_product_product_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/product/product.types */ \"./src/services/product/product.types.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/Button */ \"./src/components/ui/button/Button.tsx\");\n/* harmony import */ var _heading_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../heading/Heading */ \"./src/components/ui/heading/Heading.tsx\");\n/* harmony import */ var _CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CatalogPagination.module.css */ \"./src/components/ui/catalog/CatalogPagination.module.css\");\n/* harmony import */ var _CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _product_items_product_item_ProductItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-items/product-item/ProductItem */ \"./src/components/ui/catalog/product-items/product-item/ProductItem.tsx\");\n/* harmony import */ var _sort_drop_down_SortDropDown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sort-drop-down/SortDropDown */ \"./src/components/ui/catalog/sort-drop-down/SortDropDown.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst CatalogPagination = (param)=>{\n    let { data, title } = param;\n    var _response_products;\n    _s();\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);\n    const [sortType, setSortType] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_services_product_product_types__WEBPACK_IMPORTED_MODULE_3__.EnumProductSort.NEWEST);\n    const { data: response, isLoading, error, refetch } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery)([\n        \"products\",\n        sortType,\n        page\n    ], ()=>_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__.ProductService.getAll({\n            page,\n            perPage: 4,\n            sort: sortType\n        }), {\n        initialData: data,\n        onError: (error)=>(0,_api_api_helper__WEBPACK_IMPORTED_MODULE_1__.errorCatch)(error)\n    });\n    const onClickButton = ()=>{\n        setPage(page + 1);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        children: [\n            title && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heading_Heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                size: \"3xl\",\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                lineNumber: 48,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sort_drop_down_SortDropDown__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                sortType: sortType,\n                setSortType: setSortType\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                lineNumber: 49,\n                columnNumber: 4\n            }, undefined),\n            (response === null || response === void 0 ? void 0 : (_response_products = response.products) === null || _response_products === void 0 ? void 0 : _response_products.length) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_10___default().container),\n                        children: response.products.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product_items_product_item_ProductItem__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                product: product\n                            }, product.id, false, {\n                                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 8\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_CatalogPagination_module_css__WEBPACK_IMPORTED_MODULE_10___default().btn_center),\n                        children: Array.from({\n                            length: response.length / 3\n                        }).map((_, index)=>{\n                            const pageNumber = index + 1;\n                            const onClickButton = ()=>{\n                                setPage(pageNumber);\n                            };\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button_Button__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                onClickButton: onClickButton,\n                                variant: \"orange\",\n                                size: \"small\",\n                                children: pageNumber\n                            }, index, false, {\n                                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 9\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 6\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heading_Heading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                size: \"3xl\",\n                children: \"There is no products\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n                lineNumber: 77,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\Amazon\\\\front-end-v2\\\\my-app\\\\src\\\\components\\\\ui\\\\catalog\\\\CatalogPagination.tsx\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, undefined);\n};\n_s(CatalogPagination, \"G6s4UvX4XQkRQvr6IBdjfWuXWQk=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_9__.useQuery\n    ];\n});\n_c = CatalogPagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CatalogPagination);\nvar _c;\n$RefreshReg$(_c, \"CatalogPagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91aS9jYXRhbG9nL0NhdGFsb2dQYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNzQjtBQUNEO0FBRWxCO0FBQ1o7QUFDQztBQUNHO0FBQ007QUFDb0I7QUFDVjtBQU94RCxNQUFNVSxvQkFBNEM7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRTtRQWdDOURDOztJQS9CSCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDWSxVQUFVQyxZQUFZLEdBQUdiLCtDQUFRQSxDQUN2Q0YsNEVBQWVBLENBQUNnQixNQUFNO0lBR3ZCLE1BQU0sRUFDTFAsTUFBTUUsUUFBUSxFQUNkTSxTQUFTLEVBQ1RDLEtBQUssRUFDTEMsT0FBTyxFQUNQLEdBQUdsQiwrREFBUUEsQ0FDWDtRQUFDO1FBQVlhO1FBQVVGO0tBQUssRUFDNUIsSUFDQ2IsNkVBQWNBLENBQUNxQixNQUFNLENBQUM7WUFDckJSO1lBQ0FTLFNBQVM7WUFDVEMsTUFBTVI7UUFDUCxJQUNEO1FBQ0NTLGFBQWFkO1FBQ2JlLFNBQVNOLENBQUFBLFFBQVNwQiwyREFBVUEsQ0FBQ29CO0lBQzlCO0lBR0QsTUFBTU8sZ0JBQWdCO1FBQ3JCWixRQUFRRCxPQUFPO0lBQ2hCO0lBQ0EscUJBQ0MsOERBQUNjOztZQUNDaEIsdUJBQVMsOERBQUNOLHdEQUFPQTtnQkFBQ3VCLE1BQUs7MEJBQU9qQjs7Ozs7OzBCQUMvQiw4REFBQ0gsb0VBQVlBO2dCQUFDTyxVQUFVQTtnQkFBVUMsYUFBYUE7Ozs7OztZQUM5Q0osQ0FBQUEscUJBQUFBLGdDQUFBQSxxQkFBQUEsU0FBVWlCLFFBQVEsY0FBbEJqQix5Q0FBQUEsbUJBQW9Ca0IsTUFBTSxrQkFDMUI7O2tDQUNDLDhEQUFDQzt3QkFBSUMsV0FBVzFCLGlGQUFXO2tDQUN6Qk0sU0FBU2lCLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDQyxDQUFBQSx3QkFDdEIsOERBQUM1QiwrRUFBV0E7Z0NBQUM0QixTQUFTQTsrQkFBY0EsUUFBUUMsRUFBRTs7Ozs7Ozs7OztrQ0FHaEQsOERBQUNMO3dCQUFJQyxXQUFXMUIsa0ZBQVk7a0NBQzFCZ0MsTUFBTUMsSUFBSSxDQUFDOzRCQUFFVCxRQUFRbEIsU0FBU2tCLE1BQU0sR0FBRzt3QkFBRSxHQUFHSSxHQUFHLENBQUMsQ0FBQ00sR0FBR0M7NEJBQ3BELE1BQU1DLGFBQWFELFFBQVE7NEJBQzNCLE1BQU1mLGdCQUFnQjtnQ0FDckJaLFFBQVE0Qjs0QkFDVDs0QkFDQSxxQkFDQyw4REFBQ3RDLHNEQUFNQTtnQ0FFTnNCLGVBQWVBO2dDQUNmaUIsU0FBUTtnQ0FDUmYsTUFBSzswQ0FFSmM7K0JBTElEOzs7Ozt3QkFRUjs7Ozs7Ozs2Q0FJRiw4REFBQ3BDLHdEQUFPQTtnQkFBQ3VCLE1BQUs7MEJBQU07Ozs7Ozs7Ozs7OztBQUl4QjtHQS9ETW5COztRQVdEUCwyREFBUUE7OztLQVhQTztBQWlFTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VpL2NhdGFsb2cvQ2F0YWxvZ1BhZ2luYXRpb24udHN4PzhkNTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXJyb3JDYXRjaCB9IGZyb20gJ0AvYXBpL2FwaS5oZWxwZXInXHJcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnQC9zZXJ2aWNlcy9wcm9kdWN0L3Byb2R1Y3Quc2VydmljZSdcclxuaW1wb3J0IHsgRW51bVByb2R1Y3RTb3J0IH0gZnJvbSAnQC9zZXJ2aWNlcy9wcm9kdWN0L3Byb2R1Y3QudHlwZXMnXHJcbmltcG9ydCB7IFR5cGVQcm9kdWN0UGFnaW5hdGlvbiB9IGZyb20gJ0AvdHlwZXMvcHJvZHVjdC5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J1xyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9idXR0b24vQnV0dG9uJ1xyXG5pbXBvcnQgSGVhZGluZyBmcm9tICcuLi9oZWFkaW5nL0hlYWRpbmcnXHJcbmltcG9ydCBzIGZyb20gJy4vQ2F0YWxvZ1BhZ2luYXRpb24ubW9kdWxlLmNzcydcclxuaW1wb3J0IFByb2R1Y3RJdGVtIGZyb20gJy4vcHJvZHVjdC1pdGVtcy9wcm9kdWN0LWl0ZW0vUHJvZHVjdEl0ZW0nXHJcbmltcG9ydCBTb3J0RHJvcERvd24gZnJvbSAnLi9zb3J0LWRyb3AtZG93bi9Tb3J0RHJvcERvd24nXHJcblxyXG5pbnRlcmZhY2UgSUNhdGFsb2dQYWdpbmF0aW9uIHtcclxuXHRkYXRhOiBUeXBlUHJvZHVjdFBhZ2luYXRpb25cclxuXHR0aXRsZT86IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBDYXRhbG9nUGFnaW5hdGlvbjogRkM8SUNhdGFsb2dQYWdpbmF0aW9uPiA9ICh7IGRhdGEsIHRpdGxlIH0pID0+IHtcclxuXHRjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG5cdGNvbnN0IFtzb3J0VHlwZSwgc2V0U29ydFR5cGVdID0gdXNlU3RhdGU8RW51bVByb2R1Y3RTb3J0PihcclxuXHRcdEVudW1Qcm9kdWN0U29ydC5ORVdFU1RcclxuXHQpXHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdGRhdGE6IHJlc3BvbnNlLFxyXG5cdFx0aXNMb2FkaW5nLFxyXG5cdFx0ZXJyb3IsXHJcblx0XHRyZWZldGNoLFxyXG5cdH0gPSB1c2VRdWVyeShcclxuXHRcdFsncHJvZHVjdHMnLCBzb3J0VHlwZSwgcGFnZV0sXHJcblx0XHQoKSA9PlxyXG5cdFx0XHRQcm9kdWN0U2VydmljZS5nZXRBbGwoe1xyXG5cdFx0XHRcdHBhZ2UsXHJcblx0XHRcdFx0cGVyUGFnZTogNCxcclxuXHRcdFx0XHRzb3J0OiBzb3J0VHlwZSxcclxuXHRcdFx0fSksXHJcblx0XHR7XHJcblx0XHRcdGluaXRpYWxEYXRhOiBkYXRhLFxyXG5cdFx0XHRvbkVycm9yOiBlcnJvciA9PiBlcnJvckNhdGNoKGVycm9yKSxcclxuXHRcdH1cclxuXHQpXHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tCdXR0b24gPSAoKSA9PiB7XHJcblx0XHRzZXRQYWdlKHBhZ2UgKyAxKVxyXG5cdH1cclxuXHRyZXR1cm4gKFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdHt0aXRsZSAmJiA8SGVhZGluZyBzaXplPSczeGwnPnt0aXRsZX08L0hlYWRpbmc+fVxyXG5cdFx0XHQ8U29ydERyb3BEb3duIHNvcnRUeXBlPXtzb3J0VHlwZX0gc2V0U29ydFR5cGU9e3NldFNvcnRUeXBlfSAvPlxyXG5cdFx0XHR7cmVzcG9uc2U/LnByb2R1Y3RzPy5sZW5ndGggPyAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmNvbnRhaW5lcn0+XHJcblx0XHRcdFx0XHRcdHtyZXNwb25zZS5wcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PFByb2R1Y3RJdGVtIHByb2R1Y3Q9e3Byb2R1Y3R9IGtleT17cHJvZHVjdC5pZH0gLz5cclxuXHRcdFx0XHRcdFx0KSl9XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzLmJ0bl9jZW50ZXJ9PlxyXG5cdFx0XHRcdFx0XHR7QXJyYXkuZnJvbSh7IGxlbmd0aDogcmVzcG9uc2UubGVuZ3RoIC8gMyB9KS5tYXAoKF8sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgcGFnZU51bWJlciA9IGluZGV4ICsgMVxyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IG9uQ2xpY2tCdXR0b24gPSAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRQYWdlKHBhZ2VOdW1iZXIpXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17aW5kZXh9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2tCdXR0b249e29uQ2xpY2tCdXR0b259XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J29yYW5nZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc21hbGwnXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHtwYWdlTnVtYmVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHR9KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxIZWFkaW5nIHNpemU9JzN4bCc+VGhlcmUgaXMgbm8gcHJvZHVjdHM8L0hlYWRpbmc+XHJcblx0XHRcdCl9XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRhbG9nUGFnaW5hdGlvblxyXG4iXSwibmFtZXMiOlsiZXJyb3JDYXRjaCIsIlByb2R1Y3RTZXJ2aWNlIiwiRW51bVByb2R1Y3RTb3J0IiwidXNlUXVlcnkiLCJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkhlYWRpbmciLCJzIiwiUHJvZHVjdEl0ZW0iLCJTb3J0RHJvcERvd24iLCJDYXRhbG9nUGFnaW5hdGlvbiIsImRhdGEiLCJ0aXRsZSIsInJlc3BvbnNlIiwicGFnZSIsInNldFBhZ2UiLCJzb3J0VHlwZSIsInNldFNvcnRUeXBlIiwiTkVXRVNUIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwiZ2V0QWxsIiwicGVyUGFnZSIsInNvcnQiLCJpbml0aWFsRGF0YSIsIm9uRXJyb3IiLCJvbkNsaWNrQnV0dG9uIiwic2VjdGlvbiIsInNpemUiLCJwcm9kdWN0cyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1hcCIsInByb2R1Y3QiLCJpZCIsImJ0bl9jZW50ZXIiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJwYWdlTnVtYmVyIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ui/catalog/CatalogPagination.tsx\n"));

/***/ })

});