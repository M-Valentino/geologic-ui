"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Blink = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Blink = function Blink(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n.blink {\n  animation: blink-animation 1s steps(5, start) infinite;\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\n}\n@keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n"), /*#__PURE__*/_react["default"].createElement("span", {
    "class": "blink"
  }, children));
};
exports.Blink = Blink;