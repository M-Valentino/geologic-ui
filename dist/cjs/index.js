'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var calculateBorderColor = function (baseColor, borders) {
    var colorSubS = baseColor.substring(1);
    var r = parseInt(colorSubS[0], 16);
    var g = parseInt(colorSubS[1], 16);
    var b = parseInt(colorSubS[2], 16);
    var calcColorChannel = function (val) {
        var result = borders === "light" ? val + 3 : val - 4;
        if (result < 0) {
            return "0";
        }
        return Math.min(15, result).toString(16);
    };
    var newR = calcColorChannel(r);
    var newG = calcColorChannel(g);
    var newB = calcColorChannel(b);
    return "#".concat(newR).concat(newG).concat(newB);
};

var Button = function (props) {
    var baseColor = props.color || "#ccc";
    var _a = React.useState(false), isMouseDown = _a[0], setIsMouseDown = _a[1];
    var getTextSize = function () {
        switch (props.size || "") {
            case "sm":
                return 12;
            case "md":
                return 16;
            case "lg":
                return 20;
            case "xl":
                return 24;
            // If there is no size passed in props
            default:
                return 12;
        }
    };
    var calcMouseDownBGColor = function () {
        var colorSubS = baseColor.substring(1);
        var r = parseInt(colorSubS[0], 16);
        var g = parseInt(colorSubS[1], 16);
        var b = parseInt(colorSubS[2], 16);
        var calcColorChannel = function (val) {
            var result = Math.min(15, val - 1);
            if (result < 0) {
                return "0";
            }
            return result.toString(16);
        };
        var newR = calcColorChannel(r);
        var newG = calcColorChannel(g);
        var newB = calcColorChannel(b);
        return "#".concat(newR).concat(newG).concat(newB);
    };
    return (React__default["default"].createElement("button", { onMouseDown: function () { return setIsMouseDown(true); }, onMouseUp: function () { return setIsMouseDown(false); }, onMouseLeave: function () { return setIsMouseDown(false); }, style: {
            cursor: "pointer",
            borderTop: "2px solid ".concat(calculateBorderColor(baseColor, isMouseDown ? "dark" : "light")),
            borderRight: "2px solid ".concat(calculateBorderColor(baseColor, isMouseDown ? "light" : "dark")),
            borderBottom: "2px solid ".concat(calculateBorderColor(baseColor, isMouseDown ? "light" : "dark")),
            borderLeft: "2px solid ".concat(calculateBorderColor(baseColor, isMouseDown ? "dark" : "light")),
            backgroundColor: isMouseDown ? calcMouseDownBGColor() : baseColor,
            fontSize: getTextSize(),
            color: props.labelColor || "#000",
            paddingLeft: getTextSize(),
            paddingRight: getTextSize(),
            paddingTop: getTextSize() / 3,
            paddingBottom: getTextSize() / 3,
        } }, props.label));
};

var Center = function (props) {
    var children = props.children;
    return (React__default["default"].createElement("div", { style: {
            marginRight: "auto",
            marginLeft: "auto",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            width: "100%"
        } }, children));
};

var Blink = function (props) {
    var children = props.children;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement("style", null, "\n.blink {\n  animation: blink-animation 1s steps(5, start) infinite;\n  -webkit-animation: blink-animation 1s steps(5, start) infinite;\n}\n@keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n"),
        React__default["default"].createElement("span", { className: "blink" }, children)));
};

var HR = function (props) {
    var baseColor = props.color || "#ccc";
    var getHeight = function () {
        switch (props.size || "") {
            case "sm":
                return "initial";
            case "md":
                return 2;
            case "lg":
                return 4;
            case "xl":
                return 8;
            default:
                return "initial";
        }
    };
    return (React__default["default"].createElement("hr", { style: {
            borderTop: "2px solid ".concat(calculateBorderColor(baseColor, "dark")),
            borderRight: "2px solid ".concat(calculateBorderColor(baseColor, "light")),
            borderBottom: "2px solid ".concat(calculateBorderColor(baseColor, "light")),
            borderLeft: "2px solid ".concat(calculateBorderColor(baseColor, "dark")),
            backgroundColor: baseColor,
            height: getHeight(),
        } }));
};

exports.Blink = Blink;
exports.Button = Button;
exports.Center = Center;
exports.HR = HR;
//# sourceMappingURL=index.js.map
