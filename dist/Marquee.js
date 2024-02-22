"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Marquee = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Marquee = function Marquee(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("style", null, "\n.elements {\n  -moz-animation: marquee 10s linear infinite;\n  -webkit-animation: marquee 10s linear infinite;\n  animation: marquee 10s linear infinite;\n}\n@-moz-keyframes marquee {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@-webkit-keyframes marquee {\n  0% {\n    transform: translateX(100%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@keyframes marquee {\n  0% {\n    -moz-transform: translateX(100%);\n    -webkit-transform: translateX(100%);\n    transform: translateX(100%)\n  }\n  100% {\n    -moz-transform: translateX(-100%);\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n  }\n}\n"), /*#__PURE__*/_react["default"].createElement("div", {
    "class": "elements"
  }, children));
};
exports.Marquee = Marquee;