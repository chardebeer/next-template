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

/***/ "(app-pages-browser)/./components/example/faq.jsx":
/*!************************************!*\
  !*** ./components/example/faq.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faq; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _nextui_org_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nextui-org/accordion */ \"(app-pages-browser)/./node_modules/@nextui-org/accordion/dist/chunk-JVJMGBL6.mjs\");\n/* harmony import */ var _nextui_org_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nextui-org/accordion */ \"(app-pages-browser)/./node_modules/@nextui-org/accordion/dist/chunk-LDUMD4XQ.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nfunction Faq() {\n    const defaultContent = \"Here is the content of the accordion. You can put any elements here.\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"relative max-w-screen-xl mx-auto px-4 py-28 gap-12 md:px-8 flex flex-col justify-center items-center bg-backgroung-500 text-background\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                initial: {\n                    y: 5,\n                    opacity: 0\n                },\n                whileInView: {\n                    y: 0,\n                    opacity: 1\n                },\n                viewport: {\n                    once: true\n                },\n                transition: {\n                    duration: 1,\n                    delay: 0.5\n                },\n                className: \"flex flex-col gap-3 justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-2xl font-bold sm:text-3xl bg-gradient-to-b from-foreground to-foreground/70 text-transparent bg-clip-text\",\n                        children: \"FAQ\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"max-w-xl text-foreground/80 text-center\",\n                        children: \"Here are some of our frequently asked questions. If you have any other questions you’d like answered please feel free to email us.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n                initial: {\n                    y: 5,\n                    opacity: 0\n                },\n                whileInView: {\n                    y: 0,\n                    opacity: 1\n                },\n                viewport: {\n                    once: true\n                },\n                transition: {\n                    duration: 1,\n                    delay: 1\n                },\n                className: \"max-w-2xl w-full border border-foreground/50 rounded-md p-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_accordion__WEBPACK_IMPORTED_MODULE_2__.accordion_default, {\n                    motionProps: {\n                        variants: {\n                            enter: {\n                                y: 0,\n                                opacity: 1,\n                                height: \"auto\",\n                                transition: {\n                                    height: {\n                                        type: \"spring\",\n                                        stiffness: 500,\n                                        damping: 30,\n                                        duration: 1\n                                    },\n                                    opacity: {\n                                        easings: \"ease\",\n                                        duration: 1\n                                    }\n                                }\n                            },\n                            exit: {\n                                y: -10,\n                                opacity: 0,\n                                height: 0,\n                                transition: {\n                                    height: {\n                                        easings: \"ease\",\n                                        duration: 0.25\n                                    },\n                                    opacity: {\n                                        easings: \"ease\",\n                                        duration: 0.3\n                                    }\n                                }\n                            }\n                        }\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_accordion__WEBPACK_IMPORTED_MODULE_3__.accordion_item_base_default, {\n                            \"aria-label\": \"\\xbfWhy NextUI?\",\n                            title: \"\\xbfWhy NextUI\",\n                            children: defaultContent\n                        }, \"1\", false, {\n                            fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_accordion__WEBPACK_IMPORTED_MODULE_3__.accordion_item_base_default, {\n                            \"aria-label\": \"\\xbfWhy NextUI?\",\n                            title: \"\\xbfWhy NextUI?\",\n                            children: defaultContent\n                        }, \"2\", false, {\n                            fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_accordion__WEBPACK_IMPORTED_MODULE_3__.accordion_item_base_default, {\n                            \"aria-label\": \"\\xbfWhy NextUI?\",\n                            title: \"\\xbfWhy NextUI?\",\n                            children: defaultContent\n                        }, \"3\", false, {\n                            fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-40 h-40 border bg-light -left-28 top-0 blur-[200px]\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Portals/nextjs-frontend-template/components/example/faq.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Faq;\nvar _c;\n$RefreshReg$(_c, \"Faq\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZXhhbXBsZS9mYXEuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpRTtBQUMxQjtBQUV4QixTQUFTRztJQUN0QixNQUFNQyxpQkFDSjtJQUNGLHFCQUNFLDhEQUFDQztRQUFRQyxXQUFVOzswQkFDakIsOERBQUNKLGlEQUFNQSxDQUFDSyxHQUFHO2dCQUNUQyxTQUFTO29CQUFFQyxHQUFHO29CQUFHQyxTQUFTO2dCQUFFO2dCQUM1QkMsYUFBYTtvQkFDWEYsR0FBRztvQkFDSEMsU0FBUztnQkFDWDtnQkFDQUUsVUFBVTtvQkFBRUMsTUFBTTtnQkFBSztnQkFDdkJDLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUdDLE9BQU87Z0JBQUk7Z0JBQ3RDVixXQUFVOztrQ0FFViw4REFBQ1c7d0JBQUdYLFdBQVU7a0NBQWlIOzs7Ozs7a0NBRy9ILDhEQUFDWTt3QkFBRVosV0FBVTtrQ0FBMEM7Ozs7Ozs7Ozs7OzswQkFLekQsOERBQUNKLGlEQUFNQSxDQUFDSyxHQUFHO2dCQUNUQyxTQUFTO29CQUFFQyxHQUFHO29CQUFHQyxTQUFTO2dCQUFFO2dCQUM1QkMsYUFBYTtvQkFDWEYsR0FBRztvQkFDSEMsU0FBUztnQkFDWDtnQkFDQUUsVUFBVTtvQkFBRUMsTUFBTTtnQkFBSztnQkFDdkJDLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUdDLE9BQU87Z0JBQUU7Z0JBQ3BDVixXQUFVOzBCQUVWLDRFQUFDTixvRUFBU0E7b0JBQ1JtQixhQUFhO3dCQUNYQyxVQUFVOzRCQUNSQyxPQUFPO2dDQUNMWixHQUFHO2dDQUNIQyxTQUFTO2dDQUNUWSxRQUFRO2dDQUNSUixZQUFZO29DQUNWUSxRQUFRO3dDQUNOQyxNQUFNO3dDQUNOQyxXQUFXO3dDQUNYQyxTQUFTO3dDQUNUVixVQUFVO29DQUNaO29DQUNBTCxTQUFTO3dDQUNQZ0IsU0FBUzt3Q0FDVFgsVUFBVTtvQ0FDWjtnQ0FDRjs0QkFDRjs0QkFDQVksTUFBTTtnQ0FDSmxCLEdBQUcsQ0FBQztnQ0FDSkMsU0FBUztnQ0FDVFksUUFBUTtnQ0FDUlIsWUFBWTtvQ0FDVlEsUUFBUTt3Q0FDTkksU0FBUzt3Q0FDVFgsVUFBVTtvQ0FDWjtvQ0FDQUwsU0FBUzt3Q0FDUGdCLFNBQVM7d0NBQ1RYLFVBQVU7b0NBQ1o7Z0NBQ0Y7NEJBQ0Y7d0JBQ0Y7b0JBQ0Y7O3NDQUVBLDhEQUFDZCw4RUFBYUE7NEJBQVMyQixjQUFXOzRCQUFlQyxPQUFNO3NDQUNwRHpCOzJCQURnQjs7Ozs7c0NBR25CLDhEQUFDSCw4RUFBYUE7NEJBQVMyQixjQUFXOzRCQUFlQyxPQUFNO3NDQUNwRHpCOzJCQURnQjs7Ozs7c0NBR25CLDhEQUFDSCw4RUFBYUE7NEJBQVMyQixjQUFXOzRCQUFlQyxPQUFNO3NDQUNwRHpCOzJCQURnQjs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdkIsOERBQUNHO2dCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7QUFHckI7S0FyRndCSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2V4YW1wbGUvZmFxLmpzeD81Mzc1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25JdGVtIH0gZnJvbSBcIkBuZXh0dWktb3JnL2FjY29yZGlvblwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmFxKCkge1xuICBjb25zdCBkZWZhdWx0Q29udGVudCA9XG4gICAgXCJIZXJlIGlzIHRoZSBjb250ZW50IG9mIHRoZSBhY2NvcmRpb24uIFlvdSBjYW4gcHV0IGFueSBlbGVtZW50cyBoZXJlLlwiO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIG1heC13LXNjcmVlbi14bCBteC1hdXRvIHB4LTQgcHktMjggZ2FwLTEyIG1kOnB4LTggZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgYmctYmFja2dyb3VuZy01MDAgdGV4dC1iYWNrZ3JvdW5kXCI+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXt7IHk6IDUsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZGVsYXk6IDAuNSB9fVxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0zIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgc206dGV4dC0zeGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWZvcmVncm91bmQgdG8tZm9yZWdyb3VuZC83MCB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dFwiPlxuICAgICAgICAgIEZBUVxuICAgICAgICA8L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy14bCB0ZXh0LWZvcmVncm91bmQvODAgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBIZXJlIGFyZSBzb21lIG9mIG91ciBmcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9ucy4gSWYgeW91IGhhdmUgYW55IG90aGVyXG4gICAgICAgICAgcXVlc3Rpb25zIHlvdeKAmWQgbGlrZSBhbnN3ZXJlZCBwbGVhc2UgZmVlbCBmcmVlIHRvIGVtYWlsIHVzLlxuICAgICAgICA8L3A+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBpbml0aWFsPXt7IHk6IDUsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICB5OiAwLFxuICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIH19XG4gICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZGVsYXk6IDEgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctMnhsIHctZnVsbCBib3JkZXIgYm9yZGVyLWZvcmVncm91bmQvNTAgcm91bmRlZC1tZCBwLTFcIlxuICAgICAgPlxuICAgICAgICA8QWNjb3JkaW9uXG4gICAgICAgICAgbW90aW9uUHJvcHM9e3tcbiAgICAgICAgICAgIHZhcmlhbnRzOiB7XG4gICAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0aWZmbmVzczogNTAwLFxuICAgICAgICAgICAgICAgICAgICBkYW1waW5nOiAzMCxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgICAgICBlYXNpbmdzOiBcImVhc2VcIixcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4aXQ6IHtcbiAgICAgICAgICAgICAgICB5OiAtMTAsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgICAgIGVhc2luZ3M6IFwiZWFzZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgICAgIGVhc2luZ3M6IFwiZWFzZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW0ga2V5PVwiMVwiIGFyaWEtbGFiZWw9XCLCv1doeSBOZXh0VUk/XCIgdGl0bGU9XCLCv1doeSBOZXh0VUlcIj5cbiAgICAgICAgICAgIHtkZWZhdWx0Q29udGVudH1cbiAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgPEFjY29yZGlvbkl0ZW0ga2V5PVwiMlwiIGFyaWEtbGFiZWw9XCLCv1doeSBOZXh0VUk/XCIgdGl0bGU9XCLCv1doeSBOZXh0VUk/XCI+XG4gICAgICAgICAgICB7ZGVmYXVsdENvbnRlbnR9XG4gICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxuICAgICAgICAgIDxBY2NvcmRpb25JdGVtIGtleT1cIjNcIiBhcmlhLWxhYmVsPVwiwr9XaHkgTmV4dFVJP1wiIHRpdGxlPVwiwr9XaHkgTmV4dFVJP1wiPlxuICAgICAgICAgICAge2RlZmF1bHRDb250ZW50fVxuICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctNDAgaC00MCBib3JkZXIgYmctbGlnaHQgLWxlZnQtMjggdG9wLTAgYmx1ci1bMjAwcHhdXCI+PC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufSJdLCJuYW1lcyI6WyJBY2NvcmRpb24iLCJBY2NvcmRpb25JdGVtIiwibW90aW9uIiwiRmFxIiwiZGVmYXVsdENvbnRlbnQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwiaW5pdGlhbCIsInkiLCJvcGFjaXR5Iiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImg0IiwicCIsIm1vdGlvblByb3BzIiwidmFyaWFudHMiLCJlbnRlciIsImhlaWdodCIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiZWFzaW5ncyIsImV4aXQiLCJhcmlhLWxhYmVsIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/example/faq.jsx\n"));

/***/ })

});