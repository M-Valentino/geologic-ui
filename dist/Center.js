"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Center = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Center = function Center(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginRight: "auto",
      marginLeft: "auto",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      width: "100%"
    }
  }, children);
};
exports.Center = Center;