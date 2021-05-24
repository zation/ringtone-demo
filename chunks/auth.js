exports.id = "auth";
exports.ids = ["auth"];
exports.modules = {

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login */ "./src/modules/auth/login.js");
var _jsxFileName = "/Users/liuyang/projects/ringtone_new/src/modules/auth/index.js";


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => [{
  path: '',
  action: async () => ({
    component: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_login__WEBPACK_IMPORTED_MODULE_1__.default, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 16
      }
    })
  })
}]);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ "isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared/components/layout/footer */ "./src/shared/components/layout/footer.js");
/* harmony import */ var shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! shared/components/layout/global_.less */ "./src/shared/components/layout/global_.less");
/* harmony import */ var shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.less */ "./src/modules/auth/layout.less");
/* harmony import */ var _layout_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_layout_less__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/liuyang/projects/ringtone_new/src/modules/auth/layout.js";



 // eslint-disable-next-line css-modules/no-unused-class




const result = ({
  children,
  className
}) => {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_2___default()((shared_components_layout_global_less__WEBPACK_IMPORTED_MODULE_4___default()), (_layout_less__WEBPACK_IMPORTED_MODULE_5___default()));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Root),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Top),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Header),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "\u94C3\u58F0\u58C1\u7EB8\u7BA1\u7406\u7CFB\u7EDF"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(shared_components_layout_footer__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: (_layout_less__WEBPACK_IMPORTED_MODULE_5___default().Footer),
    __self: undefined,
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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-style-loader/useStyles */ "isomorphic-style-loader/useStyles");
/* harmony import */ var isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var relient_actions_history__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! relient/actions/history */ "relient/actions/history");
/* harmony import */ var relient_actions_history__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(relient_actions_history__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var relient_admin_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! relient-admin/hooks */ "relient-admin/hooks");
/* harmony import */ var relient_admin_hooks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(relient_admin_hooks__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_hooks_use_rules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! shared/hooks/use-rules */ "./src/shared/hooks/use-rules.js");
/* harmony import */ var shared_actions_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shared/actions/auth */ "./src/shared/actions/auth.js");
/* harmony import */ var shared_constants_features__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! shared/constants/features */ "./src/shared/constants/features.js");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout */ "./src/modules/auth/layout.js");
/* harmony import */ var _base_less__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./base.less */ "./src/modules/auth/base.less");
/* harmony import */ var _base_less__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_base_less__WEBPACK_IMPORTED_MODULE_14__);




var _jsxFileName = "/Users/liuyang/projects/ringtone_new/src/modules/auth/login.js";






 // import { login as loginAction } from 'shared/actions/auth';


 // import getPreloader from 'shared/utils/preloader';



const {
  Item
} = (antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default());
const layout = {
  wrapperCol: {
    span: 24
  },
  labelCol: {
    span: 0
  }
};

const result = () => {
  isomorphic_style_loader_useStyles__WEBPACK_IMPORTED_MODULE_5___default()((_base_less__WEBPACK_IMPORTED_MODULE_14___default()));
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  const {
    submit,
    submitting
  } = (0,relient_admin_hooks__WEBPACK_IMPORTED_MODULE_9__.useForm)(async () => {
    // const { account } = await dispatch(loginAction({ ...values }));
    // await Promise.all(getPreloader(account, dispatch));
    dispatch((0,shared_actions_auth__WEBPACK_IMPORTED_MODULE_11__.setAuthorization)('placeholder'));

    antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('登录成功');

    dispatch((0,relient_actions_history__WEBPACK_IMPORTED_MODULE_8__.push)(shared_constants_features__WEBPACK_IMPORTED_MODULE_12__.RINGTONE));
  });
  const {
    password
  } = (0,shared_hooks_use_rules__WEBPACK_IMPORTED_MODULE_10__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_layout__WEBPACK_IMPORTED_MODULE_13__.default, {
    className: (_base_less__WEBPACK_IMPORTED_MODULE_14___default().Root),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default()), {
    onFinish: submit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Item, {
    rules: [{
      required: true
    }],
    layout: layout,
    name: "username",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
    placeholder: "\u5E10\u53F7",
    type: "text",
    size: "large",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.UserOutlined, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 68
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Item, {
    rules: [password],
    layout: layout,
    name: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
    placeholder: "\u5BC6\u7801",
    type: "password",
    size: "large",
    prefix: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.LockOutlined, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 72
      }
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Item, {
    className: (_base_less__WEBPACK_IMPORTED_MODULE_14___default().Operation),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
    size: "large",
    loading: submitting,
    className: (_base_less__WEBPACK_IMPORTED_MODULE_14___default().Submit),
    type: "primary",
    htmlType: "submit",
    __self: undefined,
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
/* harmony import */ var relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! relient-admin/form/rules */ "relient-admin/form/rules");
/* harmony import */ var relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(relient_admin_form_rules__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var relient_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! relient/i18n */ "relient/i18n");
/* harmony import */ var relient_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(relient_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
  const i18n = (0,relient_i18n__WEBPACK_IMPORTED_MODULE_1__.useI18N)();
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => ({
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
  }), [i18n]);
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

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2h1bmtzL2F1dGguanMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9saXV5YW5nL3Byb2plY3RzL3Jpbmd0b25lX25ldy9zcmMvbW9kdWxlcy9hdXRoL2luZGV4LmpzIiwiL1VzZXJzL2xpdXlhbmcvcHJvamVjdHMvcmluZ3RvbmVfbmV3L3NyYy9tb2R1bGVzL2F1dGgvbGF5b3V0LmpzIiwiL1VzZXJzL2xpdXlhbmcvcHJvamVjdHMvcmluZ3RvbmVfbmV3L3NyYy9tb2R1bGVzL2F1dGgvbG9naW4uanMiLCIvVXNlcnMvbGl1eWFuZy9wcm9qZWN0cy9yaW5ndG9uZV9uZXcvc3JjL3NoYXJlZC9ob29rcy91c2UtcnVsZXMuanMiLCIvVXNlcnMvbGl1eWFuZy9wcm9qZWN0cy9yaW5ndG9uZV9uZXcvc3JjL21vZHVsZXMvYXV0aC9iYXNlLmxlc3MiLCIvVXNlcnMvbGl1eWFuZy9wcm9qZWN0cy9yaW5ndG9uZV9uZXcvc3JjL21vZHVsZXMvYXV0aC9sYXlvdXQubGVzcyIsIndlYnBhY2s6Ly9yaW5ndG9uZS8uL3NyYy9tb2R1bGVzL2F1dGgvYmFzZS5sZXNzPzBjMmYiLCJ3ZWJwYWNrOi8vcmluZ3RvbmUvLi9zcmMvbW9kdWxlcy9hdXRoL2xheW91dC5sZXNzP2NmZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuL2xvZ2luJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKCkgPT4gW3tcbiAgcGF0aDogJycsXG4gIGFjdGlvbjogYXN5bmMgKCkgPT4gKHtcbiAgICBjb21wb25lbnQ6IDxMb2dpbiAvPixcbiAgfSksXG59XTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBub2RlLCBzdHJpbmcgfSBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSAnaXNvbW9ycGhpYy1zdHlsZS1sb2FkZXIvdXNlU3R5bGVzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlcic7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY3NzLW1vZHVsZXMvbm8tdW51c2VkLWNsYXNzXG5pbXBvcnQgZ2xvYmFsU3R5bGUgZnJvbSAnc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L2dsb2JhbF8ubGVzcyc7XG5pbXBvcnQgcyBmcm9tICcuL2xheW91dC5sZXNzJztcblxuY29uc3QgcmVzdWx0ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbn0pID0+IHtcbiAgdXNlU3R5bGVzKGdsb2JhbFN0eWxlLCBzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLlJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3MuVG9wfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuSGVhZGVyfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3MuVGl0bGV9PumTg+WjsOWjgee6uOeuoeeQhuezu+e7nzwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgY2xhc3NOYW1lPXtzLkZvb3Rlcn0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbnJlc3VsdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLFxuICBjbGFzc05hbWU6IHN0cmluZyxcbn07XG5cbnJlc3VsdC5kaXNwbGF5TmFtZSA9IF9fZmlsZW5hbWU7XG5cbmV4cG9ydCBkZWZhdWx0IHJlc3VsdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gJ2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL3VzZVN0eWxlcyc7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIG1lc3NhZ2UsIElucHV0IH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgeyBVc2VyT3V0bGluZWQsIExvY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgcHVzaCBhcyBwdXNoQWN0aW9uIH0gZnJvbSAncmVsaWVudC9hY3Rpb25zL2hpc3RvcnknO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlbGllbnQtYWRtaW4vaG9va3MnO1xuaW1wb3J0IHVzZVJ1bGVzIGZyb20gJ3NoYXJlZC9ob29rcy91c2UtcnVsZXMnO1xuLy8gaW1wb3J0IHsgbG9naW4gYXMgbG9naW5BY3Rpb24gfSBmcm9tICdzaGFyZWQvYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHNldEF1dGhvcml6YXRpb24gfSBmcm9tICdzaGFyZWQvYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IFJJTkdUT05FIH0gZnJvbSAnc2hhcmVkL2NvbnN0YW50cy9mZWF0dXJlcyc7XG4vLyBpbXBvcnQgZ2V0UHJlbG9hZGVyIGZyb20gJ3NoYXJlZC91dGlscy9wcmVsb2FkZXInO1xuaW1wb3J0IExheW91dCBmcm9tICcuL2xheW91dCc7XG5cbmltcG9ydCBzIGZyb20gJy4vYmFzZS5sZXNzJztcblxuY29uc3QgeyBJdGVtIH0gPSBGb3JtO1xuY29uc3QgbGF5b3V0ID0ge1xuICB3cmFwcGVyQ29sOiB7IHNwYW46IDI0IH0sXG4gIGxhYmVsQ29sOiB7IHNwYW46IDAgfSxcbn07XG5cbmNvbnN0IHJlc3VsdCA9ICgpID0+IHtcbiAgdXNlU3R5bGVzKHMpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgc3VibWl0LCBzdWJtaXR0aW5nIH0gPSB1c2VGb3JtKGFzeW5jICgpID0+IHtcbiAgICAvLyBjb25zdCB7IGFjY291bnQgfSA9IGF3YWl0IGRpc3BhdGNoKGxvZ2luQWN0aW9uKHsgLi4udmFsdWVzIH0pKTtcbiAgICAvLyBhd2FpdCBQcm9taXNlLmFsbChnZXRQcmVsb2FkZXIoYWNjb3VudCwgZGlzcGF0Y2gpKTtcbiAgICBkaXNwYXRjaChzZXRBdXRob3JpemF0aW9uKCdwbGFjZWhvbGRlcicpKTtcbiAgICBtZXNzYWdlLnN1Y2Nlc3MoJ+eZu+W9leaIkOWKnycpO1xuICAgIGRpc3BhdGNoKHB1c2hBY3Rpb24oUklOR1RPTkUpKTtcbiAgfSk7XG5cbiAgY29uc3QgeyBwYXNzd29yZCB9ID0gdXNlUnVsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgY2xhc3NOYW1lPXtzLlJvb3R9PlxuICAgICAgPEZvcm0gb25GaW5pc2g9e3N1Ym1pdH0+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlIH1dfVxuICAgICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLluJDlj7dcIiB0eXBlPVwidGV4dFwiIHNpemU9XCJsYXJnZVwiIHByZWZpeD17PFVzZXJPdXRsaW5lZCAvPn0gLz5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgICA8SXRlbVxuICAgICAgICAgIHJ1bGVzPXtbcGFzc3dvcmRdfVxuICAgICAgICAgIGxheW91dD17bGF5b3V0fVxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCLlr4bnoIFcIiB0eXBlPVwicGFzc3dvcmRcIiBzaXplPVwibGFyZ2VcIiBwcmVmaXg9ezxMb2NrT3V0bGluZWQgLz59IC8+XG4gICAgICAgIDwvSXRlbT5cbiAgICAgICAgPEl0ZW0gY2xhc3NOYW1lPXtzLk9wZXJhdGlvbn0+XG4gICAgICAgICAgPEJ1dHRvbiBzaXplPVwibGFyZ2VcIiBsb2FkaW5nPXtzdWJtaXR0aW5nfSBjbGFzc05hbWU9e3MuU3VibWl0fSB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICDnmbvlvZVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9JdGVtPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxucmVzdWx0LmRpc3BsYXlOYW1lID0gX19maWxlbmFtZTtcblxuZXhwb3J0IGRlZmF1bHQgcmVzdWx0O1xuIiwiaW1wb3J0IHsgY3JlYXRlUHJpY2VSdWxlLCBjcmVhdGVQb3NpdGl2ZU51bWJlclJ1bGUsIGNyZWF0ZVNhbWVBc1J1bGUgfSBmcm9tICdyZWxpZW50LWFkbWluL2Zvcm0vcnVsZXMnO1xuaW1wb3J0IHsgdXNlSTE4TiB9IGZyb20gJ3JlbGllbnQvaTE4bic7XG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IGkxOG4gPSB1c2VJMThOKCk7XG4gIHJldHVybiB1c2VNZW1vKCgpID0+ICh7XG4gICAgc2FtZUFzUnVsZTogY3JlYXRlU2FtZUFzUnVsZShpMThuKSgn6L6T5YWl5LiO5LmL5YmN5LiN5ZCMJyksXG4gICAgcG9zaXRpdmVOdW1iZXJSdWxlOiBjcmVhdGVQb3NpdGl2ZU51bWJlclJ1bGUoaTE4bikoJ+ivt+i+k+WFpeato+aVsCcpLFxuICAgIHByaWNlUnVsZTogY3JlYXRlUHJpY2VSdWxlKGkxOG4pKCfku7fmoLzovpPlhaXmnInor68nKSxcbiAgICBwaG9uZU51bWJlcjogeyBtaW46IDExLCB0eXBlOiAnc3RyaW5nJyB9LFxuICAgIHBhc3N3b3JkOiB7IG1pbjogNiwgdHlwZTogJ3N0cmluZycgfSxcbiAgfSksIFtpMThuXSk7XG59O1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLW1vZHVsZXMtYXV0aC1iYXNlX19Sb290e21hcmdpbjowIGF1dG87d2lkdGg6MzY4cHh9LnNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fUm9vdCAuYW50LWZvcm0taXRlbXttYXJnaW4tYm90dG9tOjI0cHh9LnNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fT3BlcmF0aW9ue3RleHQtYWxpZ246bGVmdH0uc3JjLW1vZHVsZXMtYXV0aC1iYXNlX19PcGVyYXRpb24gLnNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fU3VibWl0e3dpZHRoOjEwMCV9LnNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fT3BlcmF0aW9uIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2x7bGluZS1oZWlnaHQ6MjJweH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9hdXRoL2Jhc2UubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSw2QkFFRSxhQUFBLENBREEsV0FJRixDQUxBLDRDQU1NLGtCQUVOLENBR0Esa0NBQ0UsZUFERixDQUFBLGlFQUlJLFVBREosQ0FIQSx5REFTTSxnQkFITlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd+YW50ZC9saWIvc3R5bGUvdGhlbWVzL2RlZmF1bHQubGVzcyc7XFxuXFxuLlJvb3Qge1xcbiAgd2lkdGg6IDM2OHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuXFxuICA6Z2xvYmFsIHtcXG4gICAgLmFudC1mb3JtLWl0ZW0ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLk9wZXJhdGlvbiB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgLlN1Ym1pdCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcblxcbiAgOmdsb2JhbCB7XFxuICAgIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wge1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIlJvb3RcIjogXCJzcmMtbW9kdWxlcy1hdXRoLWJhc2VfX1Jvb3RcIixcblx0XCJPcGVyYXRpb25cIjogXCJzcmMtbW9kdWxlcy1hdXRoLWJhc2VfX09wZXJhdGlvblwiLFxuXHRcIlN1Ym1pdFwiOiBcInNyYy1tb2R1bGVzLWF1dGgtYmFzZV9fU3VibWl0XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX1Jvb3R7YmFja2dyb3VuZDojZjBmMmY1IHVybChodHRwczovL2d3LmFsaXBheW9iamVjdHMuY29tL3pvcy9ybXNwb3J0YWwvVFZZVGJBWFdoZVFwUmNXRGFETXUuc3ZnKSBuby1yZXBlYXQgNTAlO2JhY2tncm91bmQtc2l6ZToxMDAlO21pbi1oZWlnaHQ6MTAwJTtwYWRkaW5nOjExMHB4IDAgMTQ0cHg7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJX0uc3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX1RvcHt0ZXh0LWFsaWduOmNlbnRlcn0uc3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX0hlYWRlcntoZWlnaHQ6NDRweDtsaW5lLWhlaWdodDo0NHB4O21hcmdpbi1ib3R0b206ODBweH0uc3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX0hlYWRlciBpbWd7aGVpZ2h0OjgwcHg7bWFyZ2luLXJpZ2h0OjIwcHh9LnNyYy1tb2R1bGVzLWF1dGgtbGF5b3V0X19IZWFkZXIgYXt0ZXh0LWRlY29yYXRpb246bm9uZX0uc3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX1RpdGxle2NvbG9yOnJnYmEoMCwwLDAsLjg1KTtmb250LWZhbWlseTpNeXJpYWQgUHJvLEhlbHZldGljYSBOZXVlLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO2ZvbnQtc2l6ZTozM3B4O2ZvbnQtd2VpZ2h0OjYwMDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6MnB4fS5zcmMtbW9kdWxlcy1hdXRoLWxheW91dF9fRm9vdGVye2JvdHRvbTowO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEwMCV9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvYXV0aC9sYXlvdXQubGVzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSwrQkFHRSx5R0FBQSxDQUNBLG9CQUFBLENBRkEsZUFBQSxDQUdBLHFCQUFBLENBQ0EsaUJBQUEsQ0FMQSxVQVFGLENBQUEsOEJBQ0UsaUJBRUYsQ0FDQSxpQ0FDRSxXQUFBLENBQ0EsZ0JBQUEsQ0FDQSxrQkFDRixDQUpBLHFDQU1JLFdBQUEsQ0FDQSxpQkFDSixDQVJBLG1DQVdJLG9CQUFKLENBSUEsZ0NBRUUscUJBQUEsQ0FDQSxnRUFBQSxDQUZBLGNBQUEsQ0FHQSxlQUFBLENBQ0EsaUJBQUEsQ0FDQSxPQUZGLENBS0EsaUNBR0UsUUFBQSxDQUZBLGlCQUFBLENBQ0EsVUFGRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd+YW50ZC9saWIvc3R5bGUvdGhlbWVzL2RlZmF1bHQubGVzcyc7XFxuXFxuLlJvb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2YwZjJmNSB1cmwoJ2h0dHBzOi8vZ3cuYWxpcGF5b2JqZWN0cy5jb20vem9zL3Jtc3BvcnRhbC9UVllUYkFYV2hlUXBSY1dEYURNdS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgcGFkZGluZzogMTEwcHggMCAxNDRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLlRvcCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5IZWFkZXIge1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xcblxcbiAgaW1nIHtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICB9XFxuXFxuICBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgfVxcbn1cXG5cXG4uVGl0bGUge1xcbiAgZm9udC1zaXplOiAzM3B4O1xcbiAgY29sb3I6IEBoZWFkaW5nLWNvbG9yO1xcbiAgZm9udC1mYW1pbHk6ICdNeXJpYWQgUHJvJywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuXFxuLkZvb3RlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvdHRvbTogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiUm9vdFwiOiBcInNyYy1tb2R1bGVzLWF1dGgtbGF5b3V0X19Sb290XCIsXG5cdFwiVG9wXCI6IFwic3JjLW1vZHVsZXMtYXV0aC1sYXlvdXRfX1RvcFwiLFxuXHRcIkhlYWRlclwiOiBcInNyYy1tb2R1bGVzLWF1dGgtbGF5b3V0X19IZWFkZXJcIixcblx0XCJUaXRsZVwiOiBcInNyYy1tb2R1bGVzLWF1dGgtbGF5b3V0X19UaXRsZVwiLFxuXHRcIkZvb3RlclwiOiBcInNyYy1tb2R1bGVzLWF1dGgtbGF5b3V0X19Gb290ZXJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICB2YXIgcmVmcyA9IDA7XG4gICAgdmFyIGNzcyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzNdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s0XSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNV0hLi9iYXNlLmxlc3NcIik7XG4gICAgdmFyIGluc2VydENzcyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2lzb21vcnBoaWMtc3R5bGUtbG9hZGVyL2luc2VydENzcy5qc1wiKTtcbiAgICB2YXIgY29udGVudCA9IHR5cGVvZiBjc3MgPT09ICdzdHJpbmcnID8gW1ttb2R1bGUuaWQsIGNzcywgJyddXSA6IGNzcztcblxuICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGNzcy5sb2NhbHMgfHwge307XG4gICAgZXhwb3J0cy5fZ2V0Q29udGVudCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gY29udGVudDsgfTtcbiAgICBleHBvcnRzLl9nZXRDc3MgPSBmdW5jdGlvbigpIHsgcmV0dXJuICcnICsgY3NzOyB9O1xuICAgIGV4cG9ydHMuX2luc2VydENzcyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHsgcmV0dXJuIGluc2VydENzcyhjb250ZW50LCBvcHRpb25zKSB9O1xuXG4gICAgLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuICAgIC8vIGh0dHBzOi8vd2VicGFjay5naXRodWIuaW8vZG9jcy9ob3QtbW9kdWxlLXJlcGxhY2VtZW50XG4gICAgLy8gT25seSBhY3RpdmF0ZWQgaW4gYnJvd3NlciBjb250ZXh0XG4gICAgaWYgKG1vZHVsZS5ob3QgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50KSB7XG4gICAgICB2YXIgcmVtb3ZlQ3NzID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzVdIS4vYmFzZS5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzVdIS4vYmFzZS5sZXNzXCIpO1xuICAgICAgICBjb250ZW50ID0gdHlwZW9mIGNzcyA9PT0gJ3N0cmluZycgPyBbW21vZHVsZS5pZCwgY3NzLCAnJ11dIDogY3NzO1xuICAgICAgICByZW1vdmVDc3MgPSBpbnNlcnRDc3MoY29udGVudCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgICAgfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHJlbW92ZUNzcygpOyB9KTtcbiAgICB9XG4gICIsIlxuICAgIHZhciByZWZzID0gMDtcbiAgICB2YXIgY3NzID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s1XSEuL2xheW91dC5sZXNzXCIpO1xuICAgIHZhciBpbnNlcnRDc3MgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9pc29tb3JwaGljLXN0eWxlLWxvYWRlci9pbnNlcnRDc3MuanNcIik7XG4gICAgdmFyIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG5cbiAgICBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjc3MubG9jYWxzIHx8IHt9O1xuICAgIGV4cG9ydHMuX2dldENvbnRlbnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbnRlbnQ7IH07XG4gICAgZXhwb3J0cy5fZ2V0Q3NzID0gZnVuY3Rpb24oKSB7IHJldHVybiAnJyArIGNzczsgfTtcbiAgICBleHBvcnRzLl9pbnNlcnRDc3MgPSBmdW5jdGlvbihvcHRpb25zKSB7IHJldHVybiBpbnNlcnRDc3MoY29udGVudCwgb3B0aW9ucykgfTtcblxuICAgIC8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbiAgICAvLyBodHRwczovL3dlYnBhY2suZ2l0aHViLmlvL2RvY3MvaG90LW1vZHVsZS1yZXBsYWNlbWVudFxuICAgIC8vIE9ubHkgYWN0aXZhdGVkIGluIGJyb3dzZXIgY29udGV4dFxuICAgIGlmIChtb2R1bGUuaG90ICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCkge1xuICAgICAgdmFyIHJlbW92ZUNzcyA9IGZ1bmN0aW9uKCkge307XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbM10hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzRdIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1s1XSEuL2xheW91dC5sZXNzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjc3MgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5ydWxlc1szXSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ucnVsZXNbNF0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnJ1bGVzWzVdIS4vbGF5b3V0Lmxlc3NcIik7XG4gICAgICAgIGNvbnRlbnQgPSB0eXBlb2YgY3NzID09PSAnc3RyaW5nJyA/IFtbbW9kdWxlLmlkLCBjc3MsICcnXV0gOiBjc3M7XG4gICAgICAgIHJlbW92ZUNzcyA9IGluc2VydENzcyhjb250ZW50LCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgcmVtb3ZlQ3NzKCk7IH0pO1xuICAgIH1cbiAgIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBQ0E7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFDQTtBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBOzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QTs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBU0E7QUFDQTtBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFTQTtBQUNBO0E7OztBIiwic291cmNlUm9vdCI6IiJ9