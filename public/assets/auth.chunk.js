(self["webpackChunkringtone"] = self["webpackChunkringtone"] || []).push([["auth"],{

/***/ "./src/modules/auth/index.js":
/*!***********************************!*\
  !*** ./src/modules/auth/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/modules/auth/login.js");
var _jsxFileName = "/Users/liuyang/projects/ringtone_new/src/modules/auth/index.js",
    _this = undefined;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", [{
            path: '',
            action: function () {
              var _action = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", {
                          component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_login__WEBPACK_IMPORTED_MODULE_1__.default, {
                            __self: _this,
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 7,
                              columnNumber: 16
                            }
                          })
                        });

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              function action() {
                return _action.apply(this, arguments);
              }

              return action;
            }()
          }]);

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
})));

/***/ }),

/***/ "./src/modules/auth/layout.js":
/*!************************************!*\
  !*** ./src/modules/auth/layout.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __filename = "src/modules/auth/layout.js";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ "./node_modules/isomorphic-style-loader/useStyles.js");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/layout/footer */ "./src/shared/components/layout/footer.js");
/* harmony import */ var shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/layout/global_.less */ "./src/shared/components/layout/global_.less");
/* harmony import */ var shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.less */ "./src/modules/auth/layout.less");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_less__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/liuyang/projects/ringtone_new/src/modules/auth/layout.js",
    _this = undefined;




 // eslint-disable-next-line css-modules/no-unused-class




var result = function result(_ref) {
  var children = _ref.children,
      className = _ref.className;
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default()((shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4___default()), (_layout_less__WEBPACK_IMPORTED_MODULE_5___default()));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Root),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Top),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Header),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Title),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "\u94C3\u58F0\u58C1\u7EB8\u7BA1\u7406\u7CFB\u7EDF"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(shared_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Footer),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
};

result.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1__.node,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1__.string
};
result.displayName = __filename;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);

/***/ }),

/***/ "./src/modules/auth/login.js":
/*!***********************************!*\
  !*** ./src/modules/auth/login.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __filename = "src/modules/auth/login.js";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/lib/message */ "./node_modules/antd/lib/message/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ "./node_modules/isomorphic-style-loader/useStyles.js");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/UserOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LockOutlined.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var relient_actions_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! relient/actions/history */ "./node_modules/relient/actions/history.js");
/* harmony import */ var relient_admin_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! relient-admin/hooks */ "./node_modules/relient-admin/hooks/index.js");
/* harmony import */ var shared_hooks_use_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared/hooks/use-rules */ "./src/shared/hooks/use-rules.js");
/* harmony import */ var shared_actions_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! shared/actions/auth */ "./src/shared/actions/auth.js");
/* harmony import */ var shared_constants_features__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! shared/constants/features */ "./src/shared/constants/features.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout */ "./src/modules/auth/layout.js");
/* harmony import */ var _base_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base.less */ "./src/modules/auth/base.less");
/* harmony import */ var _base_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_base_less__WEBPACK_IMPORTED_MODULE_9__);





var _jsxFileName = "/Users/liuyang/projects/ringtone_new/src/modules/auth/login.js",
    _this = undefined;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







 // import { login as loginAction } from 'shared/actions/auth';


 // import getPreloader from 'shared/utils/preloader';



var Item = antd_lib_form__WEBPACK_IMPORTED_MODULE_10__.default.Item;
var layout = {
  wrapperCol: {
    span: 24
  },
  labelCol: {
    span: 0
  }
};

var result = function result() {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_1___default()((_base_less__WEBPACK_IMPORTED_MODULE_9___default()));
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var _useForm = (0,relient_admin_hooks__WEBPACK_IMPORTED_MODULE_4__.useForm)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const { account } = await dispatch(loginAction({ ...values }));
            // await Promise.all(getPreloader(account, dispatch));
            dispatch((0,shared_actions_auth__WEBPACK_IMPORTED_MODULE_6__.setAuthorization)('placeholder'));

            antd_lib_message__WEBPACK_IMPORTED_MODULE_11__.default.success('登录成功');

            dispatch((0,relient_actions_history__WEBPACK_IMPORTED_MODULE_3__.push)(shared_constants_features__WEBPACK_IMPORTED_MODULE_7__.RINGTONE));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }))),
      submit = _useForm.submit,
      submitting = _useForm.submitting;

  var _useRules = (0,shared_hooks_use_rules__WEBPACK_IMPORTED_MODULE_5__.default)(),
      password = _useRules.password;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_layout__WEBPACK_IMPORTED_MODULE_8__.default, {
    className: (_base_less__WEBPACK_IMPORTED_MODULE_9___default().Root),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd_lib_form__WEBPACK_IMPORTED_MODULE_10__.default, {
    onFinish: submit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Item, {
    rules: [{
      required: true
    }],
    layout: layout,
    name: "username",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_12__.default, {
    placeholder: "\u5E10\u53F7",
    type: "text",
    size: "large",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__.default, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 68
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Item, {
    rules: [password],
    layout: layout,
    name: "password",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_12__.default, {
    placeholder: "\u5BC6\u7801",
    type: "password",
    size: "large",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__.default, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 72
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Item, {
    className: (_base_less__WEBPACK_IMPORTED_MODULE_9___default().Operation),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_15__.default, {
    size: "large",
    loading: submitting,
    className: (_base_less__WEBPACK_IMPORTED_MODULE_9___default().Submit),
    type: "primary",
    htmlType: "submit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\u767B\u5F55"))));
};

result.displayName = __filename;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (result);

/***/ }),

/***/ "./src/shared/hooks/use-rules.js":
/*!***************************************!*\
  !*** ./src/shared/hooks/use-rules.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! relient-admin/form/rules */ "./node_modules/relient-admin/form/rules.js");
/* harmony import */ var relient_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! relient/i18n */ "./node_modules/relient/i18n.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var i18n = (0,relient_i18n__WEBPACK_IMPORTED_MODULE_1__.useI18N)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return {
      sameAsRule: (0,relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0__.createSameAsRule)(i18n)('输入与之前不同'),
      positiveNumberRule: (0,relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0__.createPositiveNumberRule)(i18n)('请输入正数'),
      priceRule: (0,relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0__.createPriceRule)(i18n)('价格输入有误'),
      phoneNumber: {
        min: 11,
        type: 'string'
      },
      password: {
        min: 6,
        type: 'string'
      }
    };
  }, [i18n]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./src/modules/auth/base.less":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./src/modules/auth/base.less ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-modules-auth-base__Root{margin:0 auto;width:368px}.src-modules-auth-base__Root .ant-form-item{margin-bottom:24px}.src-modules-auth-base__Operation{text-align:left}.src-modules-auth-base__Operation .src-modules-auth-base__Submit{width:100%}.src-modules-auth-base__Operation .ant-form-item-control{line-height:22px}", "",{"version":3,"sources":["webpack://./src/modules/auth/base.less"],"names":[],"mappings":"AAEA,6BAEE,aAAA,CADA,WAIF,CALA,4CAMM,kBAEN,CAGA,kCACE,eADF,CAAA,iEAII,UADJ,CAHA,yDASM,gBAHN","sourcesContent":["@import '~antd/lib/style/themes/default.less';\n\n.Root {\n  width: 368px;\n  margin: 0 auto;\n\n  :global {\n    .ant-form-item {\n      margin-bottom: 24px;\n    }\n  }\n}\n\n.Operation {\n  text-align: left;\n\n  .Submit {\n    width: 100%;\n  }\n\n  :global {\n    .ant-form-item-control {\n      line-height: 22px;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Root": "src-modules-auth-base__Root",
	"Operation": "src-modules-auth-base__Operation",
	"Submit": "src-modules-auth-base__Submit"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./src/modules/auth/layout.less":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./src/modules/auth/layout.less ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".src-modules-auth-layout__Root{background:#f0f2f5 url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg) no-repeat 50%;background-size:100%;min-height:100%;padding:110px 0 144px;position:relative;width:100%}.src-modules-auth-layout__Top{text-align:center}.src-modules-auth-layout__Header{height:44px;line-height:44px;margin-bottom:80px}.src-modules-auth-layout__Header img{height:80px;margin-right:20px}.src-modules-auth-layout__Header a{text-decoration:none}.src-modules-auth-layout__Title{color:rgba(0,0,0,.85);font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;font-size:33px;font-weight:600;position:relative;top:2px}.src-modules-auth-layout__Footer{bottom:0;position:absolute;width:100%}", "",{"version":3,"sources":["webpack://./src/modules/auth/layout.less"],"names":[],"mappings":"AAEA,+BAGE,yGAAA,CACA,oBAAA,CAFA,eAAA,CAGA,qBAAA,CACA,iBAAA,CALA,UAQF,CAAA,8BACE,iBAEF,CACA,iCACE,WAAA,CACA,gBAAA,CACA,kBACF,CAJA,qCAMI,WAAA,CACA,iBACJ,CARA,mCAWI,oBAAJ,CAIA,gCAEE,qBAAA,CACA,gEAAA,CAFA,cAAA,CAGA,eAAA,CACA,iBAAA,CACA,OAFF,CAKA,iCAGE,QAAA,CAFA,iBAAA,CACA,UAFF","sourcesContent":["@import '~antd/lib/style/themes/default.less';\n\n.Root {\n  width: 100%;\n  min-height: 100%;\n  background: #f0f2f5 url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg') no-repeat center;\n  background-size: 100%;\n  padding: 110px 0 144px;\n  position: relative;\n}\n\n.Top {\n  text-align: center;\n}\n\n.Header {\n  height: 44px;\n  line-height: 44px;\n  margin-bottom: 80px;\n\n  img {\n    height: 80px;\n    margin-right: 20px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n}\n\n.Title {\n  font-size: 33px;\n  color: @heading-color;\n  font-family: 'Myriad Pro', 'Helvetica Neue', Arial, Helvetica, sans-serif;\n  font-weight: 600;\n  position: relative;\n  top: 2px;\n}\n\n.Footer {\n  position: absolute;\n  width: 100%;\n  bottom: 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Root": "src-modules-auth-layout__Root",
	"Top": "src-modules-auth-layout__Top",
	"Header": "src-modules-auth-layout__Header",
	"Title": "src-modules-auth-layout__Title",
	"Footer": "src-modules-auth-layout__Footer"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/modules/auth/base.less":
/*!************************************!*\
  !*** ./src/modules/auth/base.less ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./base.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./src/modules/auth/base.less");
    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ }),

/***/ "./src/modules/auth/layout.less":
/*!**************************************!*\
  !*** ./src/modules/auth/layout.less ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {


    var refs = 0;
    var css = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!../../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!../../../node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./layout.less */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].rules[3]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].rules[4]!./node_modules/less-loader/dist/cjs.js??ruleSet[1].rules[1].rules[5]!./src/modules/auth/layout.less");
    var insertCss = __webpack_require__(/*! !../../../node_modules/isomorphic-style-loader/insertCss.js */ "./node_modules/isomorphic-style-loader/insertCss.js");
    var content = typeof css === 'string' ? [[module.id, css, '']] : css;

    exports = module.exports = css.locals || {};
    exports._getContent = function() { return content; };
    exports._getCss = function() { return '' + css; };
    exports._insertCss = function(options) { return insertCss(content, options) };

    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) { var removeCss; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jaHVuay5qcyIsInNvdXJjZXMiOlsiL1VzZXJzL2xpdXlhbmcvcHJvamVjdHMvcmluZ3RvbmVfbmV3L3NyYy9tb2R1bGVzL2F1dGgvaW5kZXguanMiLCIvVXNlcnMvbGl1eWFuZy9wcm9qZWN0cy9yaW5ndG9uZV9uZXcvc3JjL21vZHVsZXMvYXV0aC9sYXlvdXQuanMiLCIvVXNlcnMvbGl1eWFuZy9wcm9qZWN0cy9yaW5ndG9uZV9uZXcvc3JjL21vZHVsZXMvYXV0aC9sb2dpbi5qcyIsIi9Vc2Vycy9saXV5YW5nL3Byb2plY3RzL3Jpbmd0b25lX25ldy9zcmMvc2hhcmVkL2hvb2tzL3VzZS1ydWxlcy5qcyIsIi9Vc2Vycy9saXV5YW5nL3Byb2plY3RzL3Jpbmd0b25lX25ldy9zcmMvbW9kdWxlcy9hdXRoL2Jhc2UubGVzcyIsIi9Vc2Vycy9saXV5YW5nL3Byb2plY3RzL3Jpbmd0b25lX25ldy9zcmMvbW9kdWxlcy9hdXRoL2xheW91dC5sZXNzIiwid2VicGFjazovL3Jpbmd0b25lLy4vc3JjL21vZHVsZXMvYXV0aC9iYXNlLmxlc3M/MGMyZiIsIndlYnBhY2s6Ly9yaW5ndG9uZS8uL3NyYy9tb2R1bGVzL2F1dGgvbGF5b3V0Lmxlc3M/Y2ZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vbG9naW4nO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoKSA9PiBbe1xuICBwYXRoOiAnJyxcbiAgYWN0aW9uOiBhc3luYyAoKSA9PiAoe1xuICAgIGNvbXBvbmVudDogPExvZ2luIC8+LFxuICB9KSxcbn1dO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG5vZGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHVzZVN0eWxlcyBmcm9tICdpc29tb3JwaGljLXN0eWxlLWxvYWRlci91c2VTdHlsZXMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdzaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjc3MtbW9kdWxlcy9uby11bnVzZWQtY2xhc3NcbmltcG9ydCBnbG9iYWxTdHlsZSBmcm9tICdzaGFyZWQvY29tcG9uZW50cy9sYXlvdXQvZ2xvYmFsXy5sZXNzJztcbmltcG9ydCBzIGZyb20gJy4vbGF5b3V0Lmxlc3MnO1xuXG5jb25zdCByZXN1bHQgPSAoe1xuICBjaGlsZHJlbixcbiAgY2xhc3NOYW1lLFxufSkgPT4ge1xuICB1c2VTdHlsZXMoZ2xvYmFsU3R5bGUsIHMpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3MuUm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17cy5Ub3B9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5IZWFkZXJ9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17cy5UaXRsZX0+6ZOD5aOw5aOB57q4566h55CG57O757ufPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciBjbGFzc05hbWU9e3MuRm9vdGVyfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxucmVzdWx0LnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IG5vZGUsXG4gIGNsYXNzTmFtZTogc3RyaW5nLFxufTtcblxucmVzdWx0LmRpc3BsYXlOYW1lID0gX19maWxlbmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgbWVzc2FnZSwgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IFVzZXJPdXRsaW5lZCwgTG9ja091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBwdXNoIGFzIHB1c2hBY3Rpb24gfSBmcm9tICdyZWxpZW50L2FjdGlvbnMvaGlzdG9yeSc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVsaWVudC1hZG1pbi9ob29rcyc7XG5pbXBvcnQgdXNlUnVsZXMgZnJvbSAnc2hhcmVkL2hvb2tzL3VzZS1ydWxlcyc7XG4vLyBpbXBvcnQgeyBsb2dpbiBhcyBsb2dpbkFjdGlvbiB9IGZyb20gJ3NoYXJlZC9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgc2V0QXV0aG9yaXphdGlvbiB9IGZyb20gJ3NoYXJlZC9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgUklOR1RPTkUgfSBmcm9tICdzaGFyZWQvY29uc3RhbnRzL2ZlYXR1cmVzJztcbi8vIGltcG9ydCBnZXRQcmVsb2FkZXIgZnJvbSAnc2hhcmVkL3V0aWxzL3ByZWxvYWRlcic7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4vbGF5b3V0JztcblxuaW1wb3J0IHMgZnJvbSAnLi9iYXNlLmxlc3MnO1xuXG5jb25zdCB7IEl0ZW0gfSA9IEZvcm07XG5jb25zdCBsYXlvdXQgPSB7XG4gIHdyYXBwZXJDb2w6IHsgc3BhbjogMjQgfSxcbiAgbGFiZWxDb2w6IHsgc3BhbjogMCB9LFxufTtcblxuY29uc3QgcmVzdWx0ID0gKCkgPT4ge1xuICB1c2VTdHlsZXMocyk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgeyBzdWJtaXQsIHN1Ym1pdHRpbmcgfSA9IHVzZUZvcm0oYXN5bmMgKCkgPT4ge1xuICAgIC8vIGNvbnN0IHsgYWNjb3VudCB9ID0gYXdhaXQgZGlzcGF0Y2gobG9naW5BY3Rpb24oeyAuLi52YWx1ZXMgfSkpO1xuICAgIC8vIGF3YWl0IFByb21pc2UuYWxsKGdldFByZWxvYWRlcihhY2NvdW50LCBkaXNwYXRjaCkpO1xuICAgIGRpc3BhdGNoKHNldEF1dGhvcml6YXRpb24oJ3BsYWNlaG9sZGVyJykpO1xuICAgIG1lc3NhZ2Uuc3VjY2Vzcygn55m75b2V5oiQ5YqfJyk7XG4gICAgZGlzcGF0Y2gocHVzaEFjdGlvbihSSU5HVE9ORSkpO1xuICB9KTtcblxuICBjb25zdCB7IHBhc3N3b3JkIH0gPSB1c2VSdWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBjbGFzc05hbWU9e3MuUm9vdH0+XG4gICAgICA8Rm9ybSBvbkZpbmlzaD17c3VibWl0fT5cbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUgfV19XG4gICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuW4kOWPt1wiIHR5cGU9XCJ0ZXh0XCIgc2l6ZT1cImxhcmdlXCIgcHJlZml4PXs8VXNlck91dGxpbmVkIC8+fSAvPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgcnVsZXM9e1twYXNzd29yZF19XG4gICAgICAgICAgbGF5b3V0PXtsYXlvdXR9XG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIuWvhueggVwiIHR5cGU9XCJwYXNzd29yZFwiIHNpemU9XCJsYXJnZVwiIHByZWZpeD17PExvY2tPdXRsaW5lZCAvPn0gLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbSBjbGFzc05hbWU9e3MuT3BlcmF0aW9ufT5cbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsYXJnZVwiIGxvYWRpbmc9e3N1Ym1pdHRpbmd9IGNsYXNzTmFtZT17cy5TdWJtaXR9IHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIOeZu+W9lVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0l0ZW0+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5yZXN1bHQuZGlzcGxheU5hbWUgPSBfX2ZpbGVuYW1lO1xuXG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJpbXBvcnQgeyBjcmVhdGVQcmljZVJ1bGUsIGNyZWF0ZVBvc2l0aXZlTnVtYmVyUnVsZSwgY3JlYXRlU2FtZUFzUnVsZSB9IGZyb20gJ3JlbGllbnQtYWRtaW4vZm9ybS9ydWxlcyc7XG5pbXBvcnQgeyB1c2VJMThOIH0gZnJvbSAncmVsaWVudC9pMThuJztcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgaTE4biA9IHVzZUkxOE4oKTtcbiAgcmV0dXJuIHVzZU1lbW8oKCkgPT4gKHtcbiAgICBzYW1lQXNSdWxlOiBjcmVhdGVTYW1lQXNSdWxlKGkxOG4pKCfovpPlhaXkuI7kuYvliY3kuI3lkIwnKSxcbiAgICBwb3NpdGl2ZU51bWJlclJ1bGU6IGNyZWF0ZVBvc2l0aXZlTnVtYmVyUnVsZShpMThuKSgn6K+36L6T5YWl5q2j5pWwJyksXG4gICAgcHJpY2VSdWxlOiBjcmVhdGVQcmljZVJ1bGUoaTE4bikoJ+S7t+agvOi+k+WFpeacieivrycpLFxuICAgIHBob25lTnVtYmVyOiB7IG1pbjogMTEsIHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgcGFzc3dvcmQ6IHsgbWluOiA2LCB0eXBlOiAnc3RyaW5nJyB9LFxuICB9KSwgW2kxOG5dKTtcbn07XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtbW9kdWxlcy1hdXRoLWJhc2VfX1Jvb3R7bWFyZ2luOjAgYXV0bzt3aWR0aDozNjhweH0uc3JjLW1vZHVsZXMtYXV0aC1iYXNlX19Sb290IC5hbnQtZm9ybS1pdGVte21hcmdpbi1ib3R0b206MjRweH0uc3JjLW1vZHVsZXMtYXV0aC1iYXNlX19PcGVyYXRpb257dGV4dC1hbGlnbjpsZWZ0fS5zcmMtbW9kdWxlcy1hdXRoLWJhc2VfX09wZXJhdGlvbiAuc3JjLW1vZHVsZXMtYXV0aC1iYXNlX19TdWJtaXR7d2lkdGg6MTAwJX0uc3JjLW1vZHVsZXMtYXV0aC1iYXNlX19PcGVyYXRpb24gLmFudC1mb3JtLWl0ZW0tY29udHJvbHtsaW5lLWhlaWdodDoyMnB4fVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2F1dGgvYmFzZS5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLDZCQUVFLGFBQUEsQ0FEQSxXQUlGLENBTEEsNENBTU0sa0JBRU4sQ0FHQSxrQ0FDRSxlQURGLENBQUEsaUVBSUksVUFESixDQUhBLHlEQVNNLGdCQUhOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ35hbnRkL2xpYi9zdHlsZS90aGVtZXMvZGVmYXVsdC5sZXNzJztcXG5cXG4uUm9vdCB7XFxuICB3aWR0aDogMzY4cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG5cXG4gIDpnbG9iYWwge1xcbiAgICAuYW50LWZvcm0taXRlbSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uT3BlcmF0aW9uIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuXFxuICAuU3VibWl0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxuICA6Z2xvYmFsIHtcXG4gICAgLmFudC1mb3JtLWl0ZW0tY29udHJvbCB7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiUm9vdFwiOiBcInNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fUm9vdFwiLFxuXHRcIk9wZXJhdGlvblwiOiBcInNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fT3BlcmF0aW9uXCIsXG5cdFwiU3VibWl0XCI6IFwic3JjLW1vZHVsZXMtYXV0aC1iYXNlX19TdWJtaXRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fUm9vdHtiYWNrZ3JvdW5kOiNmMGYyZjUgdXJsKGh0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UVllUYkFYV2hlUXBSY1dEYURNdS5zdmcpIG5vLXJlcGVhdCA1MCU7YmFja2dyb3VuZC1zaXplOjEwMCU7bWluLWhlaWdodDoxMDAlO3BhZGRpbmc6MTEwcHggMCAxNDRweDtwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlfS5zcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fVG9we3RleHQtYWxpZ246Y2VudGVyfS5zcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fSGVhZGVye2hlaWdodDo0NHB4O2xpbmUtaGVpZ2h0OjQ0cHg7bWFyZ2luLWJvdHRvbTo4MHB4fS5zcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fSGVhZGVyIGltZ3toZWlnaHQ6ODBweDttYXJnaW4tcmlnaHQ6MjBweH0uc3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX0hlYWRlciBhe3RleHQtZGVjb3JhdGlvbjpub25lfS5zcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fVGl0bGV7Y29sb3I6cmdiYSgwLDAsMCwuODUpO2ZvbnQtZmFtaWx5Ok15cmlhZCBQcm8sSGVsdmV0aWNhIE5ldWUsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC1zaXplOjMzcHg7Zm9udC13ZWlnaHQ6NjAwO3Bvc2l0aW9uOnJlbGF0aXZlO3RvcDoycHh9LnNyYy1tb2R1bGVzLWF1dGgtbGF5b3V0X19Gb290ZXJ7Ym90dG9tOjA7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTAwJX1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9hdXRoL2xheW91dC5sZXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBLCtCQUdFLHlHQUFBLENBQ0Esb0JBQUEsQ0FGQSxlQUFBLENBR0EscUJBQUEsQ0FDQSxpQkFBQSxDQUxBLFVBUUYsQ0FBQSw4QkFDRSxpQkFFRixDQUNBLGlDQUNFLFdBQUEsQ0FDQSxnQkFBQSxDQUNBLGtCQUNGLENBSkEscUNBTUksV0FBQSxDQUNBLGlCQUNKLENBUkEsbUNBV0ksb0JBQUosQ0FJQSxnQ0FFRSxxQkFBQSxDQUNBLGdFQUFBLENBRkEsY0FBQSxDQUdBLGVBQUEsQ0FDQSxpQkFBQSxDQUNBLE9BRkYsQ0FLQSxpQ0FHRSxRQUFBLENBRkEsaUJBQUEsQ0FDQSxVQUZGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ35hbnRkL2xpYi9zdHlsZS90aGVtZXMvZGVmYXVsdC5sZXNzJztcXG5cXG4uUm9vdCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMmY1IHVybCgnaHR0cHM6Ly9ndy5hbGlwYXlvYmplY3RzLmNvbS96b3Mvcm1zcG9ydGFsL1RWWVRiQVhXaGVRcFJjV0RhRE11LnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBwYWRkaW5nOiAxMTBweCAwIDE0NHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uVG9wIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLkhlYWRlciB7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBsaW5lLWhlaWdodDogNDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XFxuXFxuICBpbWcge1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIH1cXG5cXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB9XFxufVxcblxcbi5UaXRsZSB7XFxuICBmb250LXNpemU6IDMzcHg7XFxuICBjb2xvcjogQGhlYWRpbmctY29sb3I7XFxuICBmb250LWZhbWlseTogJ015cmlhZCBQcm8nLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG5cXG4uRm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJSb290XCI6IFwic3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX1Jvb3RcIixcblx0XCJUb3BcIjogXCJzcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fVG9wXCIsXG5cdFwiSGVhZGVyXCI6IFwic3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX0hlYWRlclwiLFxuXHRcIlRpdGxlXCI6IFwic3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX1RpdGxlXCIsXG5cdFwiRm9vdGVyXCI6IFwic3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX0Zvb3RlclwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s1XSEuL2Jhc2UubGVzc1wiKTtcbiAgICB2YXIgaW5zZXJ0Q3NzID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvaW5zZXJ0Q3NzLmpzXCIpO1xuICAgIHZhciBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuXG4gICAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gY3NzLmxvY2FscyB8fCB7fTtcbiAgICBleHBvcnRzLl9nZXRDb250ZW50ID0gZnVuY3Rpb24oKSB7IHJldHVybiBjb250ZW50OyB9O1xuICAgIGV4cG9ydHMuX2dldENzcyA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gJycgKyBjc3M7IH07XG4gICAgZXhwb3J0cy5faW5zZXJ0Q3NzID0gZnVuY3Rpb24ob3B0aW9ucykgeyByZXR1cm4gaW5zZXJ0Q3NzKGNvbnRlbnQsIG9wdGlvbnMpIH07XG5cbiAgICAvLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG4gICAgLy8gaHR0cHM6Ly93ZWJwYWNrLmdpdGh1Yi5pby9kb2NzL2hvdC1tb2R1bGUtcmVwbGFjZW1lbnRcbiAgICAvLyBPbmx5IGFjdGl2YXRlZCBpbiBicm93c2VyIGNvbnRleHRcbiAgICBpZiAobW9kdWxlLmhvdCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHtcbiAgICAgIHZhciByZW1vdmVDc3MgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNV0hLi9iYXNlLmxlc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNV0hLi9iYXNlLmxlc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIiwiXG4gICAgdmFyIHJlZnMgPSAwO1xuICAgIHZhciBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzVdIS4vbGF5b3V0Lmxlc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzVdIS4vbGF5b3V0Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNV0hLi9sYXlvdXQubGVzc1wiKTtcbiAgICAgICAgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcbiAgICAgICAgcmVtb3ZlQ3NzID0gaW5zZXJ0Q3NzKGNvbnRlbnQsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgIH0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyByZW1vdmVDc3MoKTsgfSk7XG4gICAgfVxuICAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQUE7QUFPQTtBQUNBO0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QTs7QSIsInNvdXJjZVJvb3QiOiIifQ==