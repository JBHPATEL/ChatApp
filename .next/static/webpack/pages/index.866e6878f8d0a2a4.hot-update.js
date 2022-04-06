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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var chatContainer = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        message: \"\",\n        name: \"\"\n    }), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), chat = ref1[0], setChat = ref1[1];\n    var socketRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var scrollToMyRef = function() {\n        var scroll = chatContainer.current.scrollHeight - chatContainer.current.clientHeight;\n        chatContainer.current.scrollTo(0, scroll);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        socketRef.current = socket_io_client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect(\"http://localhost:8000\");\n        socketRef.current.on(\"message\", function(param) {\n            var name = param.name, message = param.message;\n            setChat(_toConsumableArray(chat).concat([\n                {\n                    name: name,\n                    message: message\n                }\n            ]));\n        });\n        return function() {\n            return socketRef.current.disconnect();\n        };\n    }, [\n        chat\n    ]);\n    var onTextChange = function(e) {\n        setState(_objectSpread({}, state, _defineProperty({}, e.target.name, e.target.value)));\n        scrollToMyRef();\n    };\n    var onMessageSubmit = function(e) {\n        var name = state.name, message = state.message;\n        socketRef.current.emit(\"message\", {\n            name: name,\n            message: message\n        });\n        e.preventDefault();\n        setState({\n            message: \"\",\n            name: name\n        });\n    };\n    var renderChat = function() {\n        var _this1 = _this;\n        return chat.map(function(param, index) {\n            var name = param.name, message = param.message;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\",\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this1)\n            }, index, false, {\n                fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this1);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                ref: chatContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: onMessageSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"users\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"user\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaUserCircle, {\n                                            className: \"icon\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"User Chat\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaListUl, {}, void 0, false, {\n                                    fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"render-chat\",\n                            children: renderChat()\n                        }, void 0, false, {\n                            fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                            lineNumber: 59,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mess\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    name: \"message\",\n                                    onChange: function(e) {\n                                        return onTextChange(e);\n                                    },\n                                    value: state.message,\n                                    id: \"outlined-multiline-static\",\n                                    placeholder: \"Aa\"\n                                }, void 0, false, {\n                                    fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaRegPaperPlane, {}, void 0, false, {\n                                        fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                    lineNumber: 51,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/ts/Documents/chat-app/client/pages/index.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Home, \"vRK9IPEaIwmr2dsFKc9+JYeAvog=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuaW1wb3J0IHsgRmFSZWdQYXBlclBsYW5lLCBGYVVzZXJDaXJjbGUsIEZhTGlzdFVsIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGNoYXRDb250YWluZXIgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7IG1lc3NhZ2U6IFwiXCIsIG5hbWU6IFwiXCIgfSk7XG4gIGNvbnN0IFtjaGF0LCBzZXRDaGF0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3Qgc29ja2V0UmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3Qgc2Nyb2xsVG9NeVJlZiA9ICgpID0+IHtcbiAgICBjb25zdCBzY3JvbGwgPVxuICAgICAgY2hhdENvbnRhaW5lci5jdXJyZW50LnNjcm9sbEhlaWdodCAtIGNoYXRDb250YWluZXIuY3VycmVudC5jbGllbnRIZWlnaHQ7XG4gICAgY2hhdENvbnRhaW5lci5jdXJyZW50LnNjcm9sbFRvKDAsIHNjcm9sbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzb2NrZXRSZWYuY3VycmVudCA9IGlvLmNvbm5lY3QoXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIiApO1xuICAgIHNvY2tldFJlZi5jdXJyZW50Lm9uKFwibWVzc2FnZVwiLCAoeyBuYW1lLCBtZXNzYWdlIH0pID0+IHtcbiAgICAgIHNldENoYXQoWy4uLmNoYXQsIHsgbmFtZSwgbWVzc2FnZSB9XSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHNvY2tldFJlZi5jdXJyZW50LmRpc2Nvbm5lY3QoKTtcbiAgfSwgW2NoYXRdKTtcblxuICBjb25zdCBvblRleHRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgc2Nyb2xsVG9NeVJlZigpXG4gIH07XG5cbiAgY29uc3Qgb25NZXNzYWdlU3VibWl0ID0gKGUpID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIG1lc3NhZ2UgfSA9IHN0YXRlO1xuICAgIHNvY2tldFJlZi5jdXJyZW50LmVtaXQoXCJtZXNzYWdlXCIsIHsgbmFtZSwgbWVzc2FnZSB9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0U3RhdGUoeyBtZXNzYWdlOiBcIlwiLCBuYW1lIH0pO1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlckNoYXQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGNoYXQubWFwKCh7IG5hbWUsIG1lc3NhZ2UgfSwgaW5kZXgpID0+IChcbiAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57bWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICApKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiByZWY9e2NoYXRDb250YWluZXJ9PlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvbk1lc3NhZ2VTdWJtaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2Vyc1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICA8RmFVc2VyQ2lyY2xlIGNsYXNzTmFtZT1cImljb25cIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPlVzZXIgQ2hhdDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxGYUxpc3RVbCAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbmRlci1jaGF0XCI+e3JlbmRlckNoYXQoKX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc1wiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBuYW1lPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblRleHRDaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0YXRlLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgaWQ9XCJvdXRsaW5lZC1tdWx0aWxpbmUtc3RhdGljXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFhXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8RmFSZWdQYXBlclBsYW5lIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJpbyIsIkZhUmVnUGFwZXJQbGFuZSIsIkZhVXNlckNpcmNsZSIsIkZhTGlzdFVsIiwiSG9tZSIsImNoYXRDb250YWluZXIiLCJjcmVhdGVSZWYiLCJtZXNzYWdlIiwibmFtZSIsInN0YXRlIiwic2V0U3RhdGUiLCJjaGF0Iiwic2V0Q2hhdCIsInNvY2tldFJlZiIsInNjcm9sbFRvTXlSZWYiLCJzY3JvbGwiLCJjdXJyZW50Iiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsVG8iLCJjb25uZWN0Iiwib24iLCJkaXNjb25uZWN0Iiwib25UZXh0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwib25NZXNzYWdlU3VibWl0IiwiZW1pdCIsInByZXZlbnREZWZhdWx0IiwicmVuZGVyQ2hhdCIsIm1hcCIsImluZGV4IiwiZGl2IiwiaDMiLCJzcGFuIiwiY2xhc3NOYW1lIiwicmVmIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsImlkIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});