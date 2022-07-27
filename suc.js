`(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require('react'), require('react-dom'));
  else if (typeof define === 'function' && define.amd)
    define('@alipay/suc-debugger', ['react', 'react-dom'], factory);
  else if (typeof exports === 'object')
    exports['@alipay/suc-debugger'] = factory(
      require('react'),
      require('react-dom')
    );
  else
    root['_component_suc-debugger'] = factory(root['React'], root['ReactDOM']);
})(
  this,
  function (
    __WEBPACK_EXTERNAL_MODULE_cDcd__,
    __WEBPACK_EXTERNAL_MODULE_faye__,
    __WEBPACK_EXTERNAL_MODULE_l0fj__
  ) {
    return /******/ (function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/ var installedModules = {};
      /******/
      /******/ // The require function
      /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
          /******/ return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
          /******/ i: moduleId,
          /******/ l: false,
          /******/ exports: {},
          /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(
          module.exports,
          module,
          module.exports,
          __webpack_require__
        );
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/ __webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/ __webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
          /******/ Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter,
          });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module',
          });
          /******/
        }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
          mode & 4 &&
          typeof value === 'object' &&
          value &&
          value.__esModule
        )
          return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value,
        });
        /******/ if (mode & 2 && typeof value != 'string')
          for (var key in value)
            __webpack_require__.d(
              ns,
              key,
              function (key) {
                return value[key];
              }.bind(null, key)
            );
        /******/ return ns;
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
          module && module.__esModule
            ? /******/ function getDefault() {
                return module['default'];
              }
            : /******/ function getModuleExports() {
                return module;
              };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/ __webpack_require__.p = '/';
      /******/
      /******/
      /******/ // Load entry module and return exports
      /******/ return __webpack_require__((__webpack_require__.s = 0));
      /******/
    })(
      /************************************************************************/
      /******/ {
        /***/ 0: /***/ function (module, exports, __webpack_require__) {
          module.exports = __webpack_require__('dEr7');

          /***/
        },

        /***/ cDcd: /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

          /***/
        },

        /***/ dEr7: /***/ function (
          module,
          __webpack_exports__,
          __webpack_require__
        ) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);

          // EXTERNAL MODULE: external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"}
          var external_root_React_commonjs2_react_commonjs_react_amd_react_ =
            __webpack_require__('cDcd');
          var external_root_React_commonjs2_react_commonjs_react_amd_react_default =
            /*#__PURE__*/ __webpack_require__.n(
              external_root_React_commonjs2_react_commonjs_react_amd_react_
            );

          // EXTERNAL MODULE: external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"}
          var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_ =
            __webpack_require__('faye');
          var external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default =
            /*#__PURE__*/ __webpack_require__.n(
              external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_
            );

          // CONCATENATED MODULE: ./node_modules/_@alipay_morpho-component-hoc@2.7.1@@alipay/morpho-component-hoc/src/common/helpers.js
          function createComponent(Component) {
            var _ref =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {},
              ctx = _ref.ctx,
              plugins = _ref.plugins;

            return plugins.reduce(function (memo, plugin) {
              return plugin(memo, ctx);
            }, Component);
          }
          // CONCATENATED MODULE: ./node_modules/_@alipay_morpho-component-hoc@2.7.1@@alipay/morpho-component-hoc/src/react/index.js
          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? Object(arguments[i]) : {};
              var ownKeys = Object.keys(source);
              if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function (sym) {
                    return Object.getOwnPropertyDescriptor(
                      source,
                      sym
                    ).enumerable;
                  })
                );
              }
              ownKeys.forEach(function (key) {
                _defineProperty(target, key, source[key]);
              });
            }
            return target;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          var plugins = [];
          function hoc(Component) {
            window.$morpho = {
              utils: {
                getComponentById: () => {},
              },
            };
            return function innner(id) {
              var morphoComponent = window.$morpho.utils?.getComponentById(id);
              var WrappedComponent = createComponent(Component, {
                ctx: morphoComponent,
                plugins: plugins,
              });
              morphoComponent.rawComponent = Component;
              morphoComponent.wrappedComponent = WrappedComponent;
              morphoComponent.mount = function () {
                external_root_ReactDOM_commonjs2_react_dom_commonjs_react_dom_amd_react_dom_default.a.render(
                  external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                    WrappedComponent,
                    _objectSpread({}, morphoComponent.schemaData, {
                      __id: id, // morpho component id
                    })
                  ),
                  document.querySelector(
                    '#'.concat(id, ' .component-mounted-node')
                  )
                );
              };
            };
          }
          // EXTERNAL MODULE: external {"commonjs":"@alipay/signalike","commonjs2":"@alipay/signalike","amd":"@alipay/signalike","root":"Signalike"}
          var signalike_root_Signalike_ = {
            hub: function () {},
          };

          // CONCATENATED MODULE: ./src/index.tsx

          signalike_root_Signalike_['hub'].debug = true;

          var sig = function sig(s) {
            return (s || '').split(',');
          };

          var src_Debugger = function Debugger(_a) {
            var id = _a.id,
              input = _a.input,
              output = _a.output;
            Object(
              external_root_React_commonjs2_react_commonjs_react_amd_react_[
                'useEffect'
              ]
            )(function () {
              var _a;

              var tapInSignals = sig(
                (_a = input) === null || _a === void 0 ? void 0 : _a.tap
              );
              tapInSignals.forEach(function (tis) {
                signalike_root_Signalike_['hub'].on(tis, function (arg) {
                  var _a;

                  console.log('[suc-debugger ' + id + '] Received:', tis, arg);
                  signalike_root_Signalike_['hub'].emit(
                    sig(
                      (_a = output) === null || _a === void 0 ? void 0 : _a.tap
                    ),
                    arg
                  );
                });
              });
            }, []);
            var onClick = Object(
              external_root_React_commonjs2_react_commonjs_react_amd_react_[
                'useCallback'
              ]
            )(
              function (btnName) {
                var _a;

                var signals = sig(
                  (_a = output) === null || _a === void 0 ? void 0 : _a[btnName]
                );
                signalike_root_Signalike_['hub'].emit(signals);
                console.log(
                  '[suc-debugger ' + id + '] Transmits ' + btnName + ':',
                  signals
                );
              },
              [output]
            );
            var alphabet = ['a', 'b', 'c', 'd'].filter(function (x) {
              return !!output[x];
            });
            return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
              'div',
              null,
              alphabet.map(function (x) {
                return external_root_React_commonjs2_react_commonjs_react_amd_react_default.a.createElement(
                  'button',
                  {
                    onClick: onClick.bind(null, x),
                    key: x,
                  },
                  x
                );
              })
            );
          };

          /* harmony default export */ var src = src_Debugger;
          // CONCATENATED MODULE: /tmp/d-2021218-463-1l6czif.qemy/2/1616033948037.js

          /* harmony default export */ var _1616033948037 =
            (__webpack_exports__['default'] = hoc(src));

          /***/
        },

        /***/ faye: /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

          /***/
        },

        /***/ l0fj: /***/ function (module, exports) {
          module.exports = __WEBPACK_EXTERNAL_MODULE_l0fj__;

          /***/
        },

        /******/
      }
    )['default'];
  }
);`;
