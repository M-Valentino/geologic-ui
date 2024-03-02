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
        var result = borders === "light" ? val + 4 : val - 4;
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

var Icon = function (props) {
    var iconSRCs = {
        // alien.png
        alien: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNpi/P//PwO9ABMDHQELLglGRkYMscLHk7AGQ79sHoZibCHGiCsYkS3zXJT5X8NRk8FQxhLMP//kOJhG5t/Yf51he9x0Roosg1kEAzALYABmMQggW0iyZegWEQNgFmIzF2cCMUh0JDuZ4tI7OFIjDExRrQXTObebiVLnMiuKsnwGsgg9YSADkBwhxxDlM2RXY/MhshzFJQi+YCFVLV6fPd9/g0HSUQNsCCgLgJI1LHnD+CCfwsRhekj22YX5+xnR8w/MAmw0skXoeokuQUB5BuQ7ZLAnbRnWYANZBrOIpEyNbgg11BBVEMNKBHQfoluEHHxk+wxmCDbXE4onkn1GqMzDZhE2c1lIKdsePXw7dJoFRAcjoSoHPSjJTiAwAEuNuGiqBCMsY8OKL3Sa2MqWqDYIKb7H1wbBmRpJtQSLPkaifUYLABBgAKKC14JaBypSAAAAAElFTkSuQmCC",
        // beaker.png
        beaker: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAjVJREFUeNq8lj9IAlEcx39XbjUEBS5JSC0NgoJDi9LgUuBQuAThtbTULG3t5VwNDqEFDUlBDi1BgUuDoOBaSNgQqOBg0CBc933xjrvzvbtnUF84fnfv7vf7vN/v/bmnGYZB/6WAu0HTNMdzNptV7k2pVNJE7TyhgMyRQzKZDKXTace7SqUic5N1jHVCc5cRmQEECCQCoc0DaKlcLrNspZklEgmj1WpZIB6cSwUECGJUq1VHWSdEH+dyOcrn86TrujQzGQQXr4rvBLEDIQBFQUWSQXxh9vEaY4J4asKr7qKS2dvMMbGs6F45M5SEjwEUDAatdwi2s3xMZlha7KaZdSscDo9AR6Z+Mpk0MF4I8lu9zlWsaW9f1MIyAnT0pP8aJuuosIwL80QHq0UH0F5GCGWUCf5KMNT65p5oc43odLtIb+/qGXEI/MeaIHuXOqVmiwyqKhnEE9ZvDCgVLdJDT6eHS3EZI0N5GeFPoTEXdbx9QjPR6Z+HoX9mgPDv+f6qtKiRlaOnCtZ9r5wZsqqF9ol6xEoSDJhljBO12Uvzqh2yLBD8a+2MPsymTqDDfEPmO+Xtql6/ZXbyLsWgsAjQLUQsCz2eX5CXvxIsFtug6+E6s3D0syJ/4e9atF0tNXfZ/Uuk4Fh/diFbL8GX/zw9t6vGZ43ZwXOMAIZF8ObVjGXt38msb2Y4g+BoAABXdCrOAqja6ZW640jAGUIYP4vw7FQV2eoLzx6+MPsBSBXmhvjC/lLfAgwArzRRb7PhGkYAAAAASUVORK5CYII=",
        // beer.png
        beer: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAURJREFUeNq8lk0OgjAQhVvCUhMXmrjkAsawd9X76BWMV/AC3MIlK/dovIBLE12YeABMwcFpaem0JH0JAYZmPt7M8MPrumaxlMIB53xUovpz7O6aT3ddMmyGw4kNZk3yi8sYXqOvJcOUJI8ZY8u3NTleg4F+MJlACiXpxTSIosm2S5x4NwdAWDaQXlqfnvnKq4xSz1sWBFus7n4DIoRoLh7WJdvkbeyVZ8qaeXVv9ufqH9tfBSvLsgdLTXcFEJckSMIB6FJCBemOIEYF9WAYJMsApcDlMjkLgmEQxZ3uDPrqhFH6pLvTneEhITmzubI5De6ZK/FQz1wlVGDgyFZOkwPszFXCsHfjQM/IA0Jx5+pZ8IBIoAs6ypnvRI52ZnuDUJyRf3iGdLq0W6NCm8rC8JzxwI+nz8CY2mD8nsVQwiIqKuwrwACbatRdGptw5AAAAABJRU5ErkJggg==",
        // burger.png
        burger: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdZJREFUeNrslr1KA0EQx2eDL2AZsNDO8lIexCKCQgQfwMKAKSzSWXqFhUUsLOxSWES4FD6AkICCKRRS3nWmsxFS6husmT3H24/ZnEkRUBwIe7s3O7+d3f/ORUgpYVlWgiXa34Wt2ANCCNbx6QTU4VYr5vhzYva3roANgNoozOy0BpIFhTFwcPTFOXNtI07A314wDdiKnaAwahiZoU8RdGZmCNIDUzbOM0I7mU8/BWhfx6p1jsi+Z3hmlBG3Tb7zwsyi44ZaIIKoRbsYZpwSt30/UZYtDB9Ij+lkBj1hDujbRdu5iB1K4cDClpDN87w/GGRtve6OTUYA5dB8r/vjM/qodXakYAXSPfMv0IZTMBrX/ehddBvwArlbrcj2Qb7htHLbMFBvfGSMvSQJ6HN10P57Ilg1xgHIzhRyWc/fVcsPEHZ3zavWvM8FM9lxFrR+I2D4CtBIs6QcWK+SCaS2kfXXNgN4G6eq/T7Xj9QAGSr9giIIDWFKHwkjEIIVATkjH2zJdJgjEEzZduSCzAOimE5m0bZwq4dVmnz3zb7o+sVuP3qk79Q1PfgCIO/3jHNWGc6oHgjqp8VFxFuInco/w4pAVIhZ2DwFucgQRF9q8f9X7tfBPgUYAEke+rRnF+0NAAAAAElFTkSuQmCC",
        // car.png
        car: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdBJREFUeNpi/P//PwO9ABMDHcGoZaOW4QUsIIKRkZGgwkSBRUTlkfkf4rAaBspiLMQYALLoQWAkQ2ARRPn6vj8MCuuXMzwwjEUoUvgDUbue4T8uC5nItggoBrMATgMByAG4QoER5D1cwYjPosAHPyBiChwIDQ8QAfXt/GKGk0g+BNsDIiY7ffkvYMCD03cfLnyBs8+fXw+mDQ0D4fxrQFoLST2Mfw3KB1kKsgccjIYGvAyKDJi+A4mBcOQkXbjByJbALEY2GJkPc4A5NFjBNr65ogjmKJi/R7HswUlBMC2q+4BxkuPn/8gWwixC9w26GAyceB/LCLZMSUkLHqH3718He5Gbi/+/mLgUXHGhwimwBSv+FMLFIlj6cVoGUwdScw3ZsqqqKoJ5SPJEFUP5aQUwW0JUjOHF61coFiJbBrIIpAYEQOpA7Hv3rjHCU6OioiZBC2EaIyICGFas2ADng4DY+0qGV4LtGOomTJ7F8OfPH4Zf3z8wwtPqk+fPSC5+QIbA9D1hyGVgeA4tlliwlxUo+YyVgx/Dd79/fIQnU5i8jKQUQceB1MB8+f3LW0Z4PkPO1Jw8wmADQQqwGQKTx6cGmzlwy0brs1HLRp5lAAEGALJm9DScIccJAAAAAElFTkSuQmCC",
        // cat and dog.png
        cat_and_dog: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAndJREFUeNq8VkFIFGEU/mbaS7S0kqmBXQo8uJoHEdKDSMcCodil6OClU2wnUQ+eylOHzkV0VDwYLq5IEngIj4EnVywKXBSj0ghFveSWzTfjW//55591ds0++Jk3771533vvf/+/a8GAsXs4MOn7JmDhBLDCSC5cDTr/XDkZqR2VSE9q+Ia5ehPE1yXrbY5GJLblDaC9swdRCOkjvrZufJnzVlR9OULdZrOqu23ey+tF4G0hgal80ReYMnW00Wfpm6dnxiKbQBt9RI4JkWDl5jbOxmuR6z/SPbwNV0db5mP06WVixgERXL4D/Hq1HfiQOtpUjObm0XopvDLa6CM4U/yDJy0NR1kkLgKff3hyQ2Ma8fNJ7O0suzquhcPKfm+toj4OJOvDyerOOWfLOSRf11exsatVxpbKWSKRQGTa1LZnaoAH0wncHy8GiKijjT6lNs58gKX3VoJ3Dc65SyfXwf2MoitVRlI+m7vDg4pN9kn2N2yP1X3mN4HrilU+fmQmHHk+6baRh1r2irLgOF1gGhmMQSW4Kqv7pQYkmr4D+3lvUVYhvr7K3gzjQAZErdBElHq2UHrPDnUglUpj8YWXWFsmjWx2MuBTIuNNwsNLMga73nPLl937+VnfmNPnmnNk8k4VJCIKXzbd55XGOo/AIRSfp+9g2SpRJeD14xIdZk8iknAJKW30kSstsGemqvTey5PBCtkBXzWqTJskw0s5xqrKXTkCJsBWqoMx0teBzvZk6Def1jYx6vgIYup4VgsGreiXWq6jsBb+C9j4j7BNAxAV5fbL5GPr/5yOG5JqwfG3o4y86cOq21hp+6pFTM10aWL2VMn+CjAApX0bVj8ijOoAAAAASUVORK5CYII=",
        // cd.png
        cd: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAi9JREFUeNq8lq9vAjEUx18JYhK5CRKQp5YpRrIJDgUCyxRjAj0siswMOfT2Dwy3IEDdYZYAiiwTyLEgtgSDnLvt9XiX0mtLEeMl/Opx/fR7/b73yoIggENFEt8YYzv/6LqudlW+7++cAEUlbSG5XE553XEcPpcNNLkLcnfq898DyGknqdfrkQATNGECeXUfLs70K92o4pFKpaDZbBofeUIHuur5W+Pln44WiiAKEzChU9QYAjyVwnGVOlGVHL1eTwmMKcM9ep2F30WgjSqMfD4P4/E4UqiE4SpExxFw116JEAKJxhHVxZQNjlpbQFKHj1LeN1JFEBG0Xq9jC2KYbMViMVDlEU2OIAQ69wCXDxDZut/vB7IaGTKfz2E6nYLnecyY1JHKWQcauDIBhFGpVBgCdRCrPFNBWQ2UiYpAEYQQFchYQWxtblKyF8wGYgvSPkaEEAgdh6/VaqUsQTfvy2ByUrZvMbpaJ+YQuQ/3iMYfV1h40wCFJUxGIfD8a6CFcetjP8PkwyRUVQQM2d7ZWS1KCX79e8k/F6PFFhRtj10g1s9sQBQfo01JgxCYP05zYKaQ4eOklME0vmdI73a7MZAcqEo2BFYZfs8fkAKh7KW91dtiBkGgCFKp4g4stbg6sWiLwM/ba7MbaRXValUJUqkSizYBCSR37ITu8ELAfeO56moPQZEbdR2b+pJOlTPsQLYQfm+/6UHG05VwQyAdamJhglgp+49zIzvkifhXgAEAjikrV9kZf3wAAAAASUVORK5CYII=",
        // clock.png
        clock: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdFJREFUeNq8lj1Ow0AQhddRjmC6FCkpoYwEBZRIiSUKOpBCUiOFKuQAyFVygUiRKCmQ7EhcACSXQeICKeicOyy8dRbGm9m1HaI8yYp/xvvt2xlP1pNSin2pJvaouj7xPK8w+G0g5OFtM3fPXyyFdyMKX8YKenoZXTBA8Pv6wT9/7K4n7ICCU3fNJv1sKsj4bqmu759T4fv+RtzoPGPIp2xSViiIXJEA9HAm1JGmqaTq9XqSk47XUJPDwjQojuNfEAXYziHEc0AWhiANwrGNOCAYztJvtVrs/fl8/v/vDDMZzX4gg1hdD4fDygP2+31VRCgmjEXd5arxfZF31W63K8Om06mwjVmjrvAdaVe7ENxhTO1uq3Z1POvsrjdGUbRVvmjeuPfr3NoGQaBytlqt2I4BfV3+NYlFN1t6neMwDN2N2FSSJNbSb7zkm0CjwCmMnFyXyBncVRHibSnIdX10d1qRyJ1eEttyuiY2vjoQF0dCnE4yjrPrI3fmQBy0rPuN/zPTnattuURdleqNtFhcnwJ9hlgcpZzZ3JkNGgBa4hSQTDo5V4XbAg1UgzNQFA/NqYZAJqjUHsTce9icUghkgna64XFBKsNMqCkXhIXtQ98CDABi9a5E6Ds4ogAAAABJRU5ErkJggg==",
        // construction hat.png
        construction_hat: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUZJREFUeNrslr0NwjAQhc9RRmCAlJSkh4KWLWAACjoYAEokBoAtaGnooaTMAOwQ9EAXzo4d2ySiQDwpCsrPfX535wuqLEv6lhL6olL+oZQKemE5Ji0VmxM1vigzl8YCFrvsee5diipeCDQIBtBkQNSfZbV75wtRdW9eeKGpD7SevoJKwRWuyQXgOXbqAirOqVkzgJCy277QgkqQSGXlFDpe3w5lzaK6EcHvea1mGii69blONhCcDnNyguDK1rVRzgAy3bhAwc7kimRwmcJQkOkuiakVzmYKOx1XHNyWQp/MuidND4V0WKfOmoDs2qwXFotjtNU3t7apeSNDaPE24o1tHcQSBPGE4MZwtb6p1eHDQRwDQrplOm3zMW1bdDkPfVPfWTPXPouFyJrVpr4PyI0T4sQLcw1RUyFfZifs5/5d/WGd6CHAALH4xm20zvzpAAAAAElFTkSuQmCC",
        // cookie.png
        cookie: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZFJREFUeNrcVqtSBEEMnJk6xSfgsCjwGCwKPoF/OAEIBAIMGssngMJi8KDO4vgE7FJdc13Xl0mW4bWCVG3ldm8nnXQ6O5OHYUhTWUkT2qRgM73JOYcvnu6nkO+rxxQu1DbltRsHzANZvFY/P1o9e3jxQbvBFOjyuPrD8+o3N6q/OUnp6TkG1PilhzYCqb291wu2t9tHd/lqf+4vVr9JIys72Blf39DIF7kQ1HiVEcAa3lfhaPyZt4BApAeBlSr2zYrkW3OG7BhcAXGpQHBd37VVMdnROSOFkDaDRplDHFQkErJ9W3rEy2FlnCEvcw/QVmV9WFmPoVJNAOo8u12nzgMaBdOsrSqVNngAqYAiwIbG7a22Ek/+DG6DqlI/rQxZ2kwjWmx/QC/7bJNuKtPvmtLUYwAEAOgnkP1Oju5nCgQReP+BBVBMgXgVhWCWMr0HIIcbz+3wRsMc9mxZ+hB9wgDCWeQzj2pvbys9O69mrEMfDXy0c5eerd5To53Dsd36V44FVgw/Ohb86YHnX50bPwQYAKQxzmp5sse4AAAAAElFTkSuQmCC",
        // dollar.png
        dollar: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARVJREFUeNpi/P//PwO9ABMDHcGoZUPPMhYQ0d3NSNMkWVr6nxFuGQjsP08bixwN0XwGsmjbrEk4Nbx50IdTTkShCK9lXml5DKXIlsFA9/Q8VO9nTkKxaP72B2A60VMBxSEgC9H1wvRjxBkuSWQAswjGRrYQn16MYCQUfNgMRxaD+Y7kpI8tOLD5DBcA6cdlBhM2i9AVw3wAsgRbvGFzKDYLmbCFO764o2oJgs0i9DgDsbEFJbJebObgLa5AkQ4zFFciQc9rIEuQLUIuLEgqG2EW4ksgRAcjckqC0ejBgW4RzFeg5A/LKiAaWwJhBDULvKIY/+MrrrClMGITEUgPrCAGWwYq9WlZEKNYNlpTj1o2KCwDCDAAcumS9Is73qUAAAAASUVORK5CYII=",
        // earth.png
        earth: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAfNJREFUeNq8lrFuwjAQhuOIIWMZu8FGt/YRiNRKLJVYkFiQOtKtT9KtjJVYKrEgdUFqJXiEdmu2sHWkY7aU3+XSs31xEgYshYjEvu+/32c7Ks/z4FSthR+lVGXHwXxaqmo1mVUGQFJK/3hgPkgTqBfWBFIHCk5YO5voxbwfYbkD6wVveToZuqBsbN4lAUwI4nhhvEMBlAA2WBIiAEOfHdnzU5DNdq51FNi2WA8al1odcp+786XYKUp2+nKAkoj9pQUK89eyAwMIC8/71/r/Wf8guNc253Zw5YhKVh8FCOOju3t3URvVs1fWXZjq6kDIgYz3HSZBsuxRfFU6Z5evcZGVFnQhwwHCO3pPYzCegGR36FPfeYjN9bMPSFn4GoEq1xm3Zfu4rgwMYasvcz4/b9c1YYeSpgE/m7/Hm+VxQO6EAUMV4qLiAAhzwIFlVgKIiqW+UoahXfZo35v34lkToN0QB8LT0eIfVnUepWnsAMvsjKZttwaCG1VaIFiQUIVr14kdIOyS1pudFcVxbER29m5Puwhae7vWIEm5tIPYWekvAn548l2aVHF13cXImw2B+DiCgdOyVQAogXiWZSDel4PEzPg5xIG8Qnl2PBMuSAJ5v0E40A4EIJWz/c6ep0ZfV9LxbtvqgzSCVUGrIA7sVO1XgAEA+BZfBhU/mn0AAAAASUVORK5CYII=",
        // envelope.png
        envelope: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAASBJREFUeNrsVssNgkAQnSUeLABvVkMHUAMxsQgvWoQJoQZLoBm9QQHeRh4yOLtiFBdITHzJ/ubwXnbezIJhZpoLAc2Iv9iPilVVxRiXxHDfPjmQd7xRQ+mXZcnnmBiru4/3PEq8aTFMEpwCipsMJlzzulnR+sQURc+5Lor3fqRpap3zPKfWImq5TVcgy6z0LgAIiIiGcC8wbY4hZdvq41sMgeZuboYDgr5AKt10au7OMxzCMBy9t+BZy333DAa6qHulGz6wuHWfCdArGu55CBT3Q0z6TIhfrd+ISZ8FUjEuTjt79alG623sq0bxytczi9tN4xSeWc8VXmZ0uS59fSOfVNbc1HKb3mocEy+rcazPSV/cEptSyPLs/8Pji5sAAwDb4q80VK6cqwAAAABJRU5ErkJggg==",
        // eyeball.png
        eyeball: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNq8lj1qw0AQhb3CjSGQIp2O4EqBNIK0aVKocZlrxIUKVylUJCfIHdKo9QHUKKBTqHdrAgprM2Y8Oz+7CWjAeNFK79s3OzuSm6ZpMVdkixljCQPnnHlz27ZsGqqqMh/2GXSQRg0GkDzPg7lxHKOgJkyDpEJVGAYVRXE1NwxDMtBzMittFOSDu0YzwO1vAKvrWgWlAEErqEaIsixFwO7p+vbNe6/uI9XKJFcWyMfX9iHJ3TLGlQe97X9O49XN3en/tTxcgJpDrJlJ+YWqw44A5OOjuzUdUm2zXT0X5x8GccCkdiXF4729mH81Ynw4IY6fh6hr0vNRafxe96w4jL3z1Uuf7qzrOnZ1FIiheI5zhTUvsKZpnJYOKhoDotpBgfiV4LPhBeCQckANhF0FaeTcgZC0am2OarKlT91ZaZI0zGqElXA3p4JopsSXJ25f2ptAckNB5mcB7ZcSlGaB2/voDx6uSVvF8GeYBdUgLGyO+BVgAHJa8nk3EHPtAAAAAElFTkSuQmCC",
        // fire.png
        fire: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWdJREFUeNrcls2NwjAQhe0oBwrY4yJBB0sJlEADWwoHCqAIKIASKGHpACT2SAHcjF7Eg/EwThzF4sBcnB9lPr/58cSHENy7rHJvtJoX3vvBzjY/LgrT78E1Thm9YspSIFNZKZAFGZQzOCcgF9RbWR/Hg5QBNJ/GIJ2nIjCC9sd0QeTAqz6KuGqnfF60qaUyDcoB9oJpx1i/FwVzpquOAAL/d/nATth5EecHjjUA98VzBsBlNnkAdT67WiIJCxsXpCqCvv5OkTJAJIjfWMAqBYJjCYJJEFZWpwThGfJpnTCVBbJCB5Mh1EUBJQRZLdKMMc4azjMrdDQow/11eXrpO1bpdv0E6nlWtxUDFIxmMQiru7+TjUylBDXvDh3KGMq2/iHUKhgqG++eOXswLJgEtoVTA2VELFidamS5WwmylOnQZxWILg4CNUwqlCcIN6fb4uWHR4Ngo9Wk9UTBJixQahz5j/1JvQkwAHfl8yZKu6V2AAAAAElFTkSuQmCC",
        // floppy disk.png
        floppy_disk: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARJJREFUeNpi/P//PwO9ABMDPQHIZzBsENj0H4QpNRPdDJj5LMiCgo6OYNrpoxNWC83NzRksLS3BGB8IW36DwYCh6f+F9XWMVA/G8PBwMEZ3OLoPWWgZRWALGcAWMtIlgcCihu6pkSrBuHLlStpYdvz4cWICj3jL/gc0YlV8AkY/GAIlCM5gfL9/P8WpjyjLYBZ9WG9AkkUCgRfAenFZiNNnIIsmCdSRZFne+iawhSTFmdDHA2THCz69eJO+7+ki0nymSmE+q5p3nSiL2pI0Kc/UxBhCteJq1GcD4rN3/A7gYnh/ni24wnScdBheWzMiN+UMg5r/I2fq+7c/kOQzRVUBrHL3//syYlg2rNqNdLUMIMAAoEBtLGqQ30YAAAAASUVORK5CYII=",
        // folder.png
        folder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKpJREFUeNpi/P//PwO9ABMDHQELjMHIyMhQ6ciA15vt+xkYSbUAOeQGxmfEAEI+xwEYybIMG/AyGOwJhFzX0izObPr+U8ey/4vwR/6R85T7jBGeDxYz0qYoif3POCAJZNSyUcuIswyWj6hNY7XMxhCigNo01kx9pIg2mRpYxGHP1Nsu0IbGsAwkASrtqU1jDcYqJ9oEY9u+gS4byWk5EQLoZjIO20YqQIABALwHeXra/70iAAAAAElFTkSuQmCC",
        // gaming handheld.png
        gaming_handheld: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZ9JREFUeNpi/P//PwO9ABMDHQFdLWMBEYyMjGCOk5MT1cN03759YMNB0cUCEwRZZG5uTgsP/YdZyIIuc/LkSTD9bJ8GmP7B4EG0qRwMO8C0lNMNMI3ueKxxBrMIBoou+4IxsQBdP1bLNDU1MRQoJnqC6fV9f1D4uGh85hFMjffnb4fTIAPx0RQnfUI+weezwZ+pz5+H0AqOLHhpbCAhIQGef5lgeQwkiA2ADHqw/w9RNMk+w2ZpYBELyT7DZg5W53QJHAPTZR+sUIKRGADT+4HBAiPfYfhMIK8PbAkIwzSSYhFML8gcvD6DWSSZOBHis/n5DF15hgwfJhURtAi73j4UvSzEunrBggUYxRCsDITFDzgk1ptCbcc0gxFU9Ds7O8NTI8yFMM3E+AoG2uJOwH32HOizqkUWcPHr/6cyssAjEJp4QIZ3QcMb2SJifAYyXCAP4rMPi4qw+wxUeWowZP2HuQQ9+LBVF9iqJWzJHeSrGwzTGFEqT5BAWxzDf3SXwyo+UCWInIxhvkKujUFq0H0PMhfFZ6Otq1HLcAGAAAMAm77TagBxTAMAAAAASUVORK5CYII=",
        // gear.png
        gear: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAapJREFUeNq8lr/Ng0AMxTnECih1anpETc8UWYIRWCJTpKdmAWpqxBD3fQ/xImPuH00soSTOnX+2750TY63NfmWF/GCMiW7o+/6U3TAM0U0sKL+TmQb5fD7LY8HvBIutz1OqSAGmrHfCXq/XZXHbtl6g6zsXsPAF2LYtK8vy4v98PqfPXdd59yfBlmXJns/nybeu6w7SwTWcIMTQZuQ9k9JHawBEdQjYNM3+PlQxEiFoHEejpe+FEYiKNEi/SuDj8TiBJKyIHSzbJAHIHE9d1xcgfP+PdV36IgZCVfosROYWwaVY9LkeSjVBNfqEI1t0vP+e7a0Jgszlow3n5/KxvSHZXypzyVXa0VI7z/NeXVVVlgpMAV7UqKcB1ShtmiYJ/4LghxqlodVJ0sfYQgAN850nE3u/3+bWTwznIzJlJTEQq3LNVm9lXMyxxWCydbqlAHEtRx0r9F5qKRS9WQanyTOSyenZGr1nujIE1gKgiOjnHlfrnWcmLy5BlLsLhO/kHQTItd4rEAJDIGkEhtYHpa8Nl1i3MSWZoEBC2WOvw5dk5pd/UvPsh/YnwAAIIH4dYG3CNQAAAABJRU5ErkJggg==",
        // heart.png
        heart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZdJREFUeNrclrFKBDEQhhNJscUWcohg4wuo4GFhI5ZXyVWCz+ITCD6GnWB1WF1pZyEKamthYycWh2yxEPnVWWaTSTIn3BUOLMklM/NlJpPhrPfeLEtWzBLl/8Ic/2Gt7W2+rB1EF/rUzsz446FTnKzu+ud2s6dzOpvY0A61YXmBcBiBNoY7PaO3+8cOeFaP/ZZ77fa2Xd3NL5tBDwqOmMYINNr/+X7X4BQRcRsOgpxU7waHyd6ZCIIcHUZADsJamIUQqC+Q6xtxmUAkITAZ2XE1il/49FaeK4VH51QWBQiKhiLCfO53ljOiPVQiKpPWJBvs37WNDCPjFJDWuB6fp3yJacSFQ4mqLXVaaY1XqKQTPWoUyXn9GRmXokjJRbNurprpN8elwqcIF9qIcQqchkBh3ysJ6WOkqLLVCAUo40PFcQelketzkHhnXMLeRo5SY67zZ7s+7yp7rlKnEW8qjCjb9cOU0qPUjBJIlUYpQjhMjTmQKo3FRs0ykLNVpVHjsAT68x+e0LEW1IVH3zySS6nqzhYtXwIMAJGkNIW5vRQHAAAAAElFTkSuQmCC",
        // monitor.png
        monitor: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUBJREFUeNpi/P//PwO9ABMDHQELnHVnMe28qBLLOIA+g4KNe85TzXB/F0P8loFAw6kLFFvUYGZA2GcwUDQpEc7uy5uPIgbiI8ujqyM6GIkFhAwmKekvX38cbCCIBgFJRw0MPj6aaJ+BNETGJjEwxAItXTyPoWheF8QBDPMYnu+/AZYnRDN8pUKmJuQjkn0G9gXQR9jYNCmuQMEIwhqOmihsECCWJsoyXIopsQhvMJ5/chwrmybBaChjCcbobKqWjbT0GVbLHM8rUGzwP4b7xFn27+l++lQxyNWCc/oChr0zEwiyQQAXHxkwwtsgdKipWQhVmhd2TifaTAP3TOyVqEosqs8YGRmxV4IBHET7uGHDD6yGwO3AZtn/24soDlJG1ThGdMuwpkbkIEVvR+ADhNoveIORlCDEF5wYwUgPABBgAM7Cn3/x6kGlAAAAAElFTkSuQmCC",
        // paper clip.png
        paper_clip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNrsloEJxCAMRWvpIi7RAVylSziCS3SVrtJRPFIIeJ/oJSUU7jhBarTJQ/NtGmqt01Ntnh5svwtbeBBCMDmmlGqM8Rrv+/7m3NNB4AULjEHneV42QruiowWLIgmUc644R33bttrGxG6CSSBcJ2APNlt2tK7rVEq5joqC8k5c1SiBKF/UEch5vAVDENkU8DiOIIkG59UwCUTPUcBh6wkExcCKY7vNWatEsxrRWQKxje+aYBjYClLDPEAqmBdIDdMc5SeQW840IJecaUEj2DJy4svLXwesW7eLJ96z1vYAicWzBfUqseYYh7D/39XXwF4CDACJdc23oCRJDgAAAABJRU5ErkJggg==",
        // peace.png
        peace: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAl1JREFUeNq8lr9LAzEUx5PSoYKCgkPHdnQotKCD0KWCq9BBRIRCHR0K/gE66OZQoQhuCoqIk1BHwQ4KDg4VHBztKCgoONgt3jf64muaS87FB/Fe0nfv837deVIpJf5L0vgjpQwa1o+UKpV+992uENg3CuGbKSEJxQertK7V1eyn1lcf54UNJDmsxTshWCrO4O5jS2FBn7sd0Wed2oUBNAsX+gr4wdSlDgrLl2EqDsT3T403kZ/pD2UEOEEh1fOiaFU+VGLYy0NO5XoHWl8cK2oQSU8syLXqttHpHIFwu7gMUzZIO8qtahCHkHMEwoEc2ux0zD2uDNN8AwhlZEfvExOIaCsA89UJfxl5+UIgbueC7tQ7zt6bsVRHQmlgFJ0vC9hQuWODiXwARHZgYKUJ9FrKicluL1iyJDY8+5/eSZPZ9Xp0iYChrCgwrCAs8gUQshvIrBw9mDfdZO+3pHaQ5VYhfvRD04cKuHTfsAzBEG255I+SnL8dfj8WuLbHi17gaeNBLxL9IhbHUgEIBwvv99IFIshE/d4ASVz3oF+z7V2tT49uSJNZvtbWDuDIV7qT/rNw6a4MAZo+3xx4Ew29G/mNlBEWOedZ0RmCtPsJkLNnaGbjfWvAEaC0J6dn/WdTLtJ5hhyItqBifFCc/2IAopK6QPQbne3tZ0WSKU3xUeVl4aWzQbwCLiDt7fFP23QAVn6crWSy5ND7WMCOD5cNdpbR1Qc4QVlpcOy+2ucE4tUYeM7sD56lTFbxqJMID9AGBb+uONAHPbFK7Moo8aecDY0TF+TPsBDUB7FhXwIMAGRUngi0+r78AAAAAElFTkSuQmCC",
        // plane.png
        plane: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAa9JREFUeNq8lr9thTAQxu3IbVagYoBI1DRIGSAVBRXFG4GUkUgZRkhNQZUiZSQaajagYoUM4PAhDp14xth5JFdhOPzjvvtjpNZaSCmFqxVFoem6qirnF8FRwtOG+ze2qrze9YI9vWqdP3yKMAzFMAxCTOuPF3dZ7nxg4fezdX0qbBxH6/pUWBAE1vVpsDRNtSky3D+lQKIomjdCQexFRsC5YCbr+17+OrIkSUSWZVYfPIffTZFhgziOnSQivykyt5xBNpIOk4I2IBl3W2J5Dn+aMHwva2QEOoKsU2XKFzX68oG6bdtjGUm6dUq4jrFroNgClSvIBEYl8vsE5MZzqLh0eZ5fbVzX9bo2lT6elWU5Q1CV5Mugmk4HRQ0LEId0XbfKgN5BsvfG1dJbGlBSh0c5+aFQpNrKtIUcjStDM8/FQX3HZVUmuUxTgL6e9x023fpuoUYYQLZR42scSkDp81uA3EK6+P1LdJfHOWdN0zi9DI7XEcN7iIrgz86zW81ZRpQ+aY9+QkH55HrmuMD4Acml45V2lDsnGIFMbbE9XG1A5//GPalM5X2Ys/+yHwEGAFsDMNjem9iWAAAAAElFTkSuQmCC",
        // puzzle.png
        puzzle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAR5JREFUeNpiZCAROHBn/kcXO/B1OiM+Pf//Q7QwkmrRbLMfGOKppzjwWgizjIlSi0AAJI7Nx+iAiYGOgK6WMRKbCHAFIXrcYUs8OBMIvrghB4AcsP/LNMbhHWcj0LLr589ThUYGLNiSO0ihpqEhVWgGBkvUfAayqIj1OFUsQM9rKPkMZhGlAGYRtgKZ5IKYmMxLqKoZzWcEASjeCdVpTKBw7vttyXD4NySJUkLDLETGWKsYZAlTILYFagQZgI0GpTxkMAuYOHCpPw2Uh5X6WKsYUzxBkQasftDzEqhKmoWlLgMBZMtYSIkXmEXoSTz1FKQOxGUhWQkEV14CiaUSsIjuSZ8FV3BhDX8CrsemD1kP0Q0eYlq+uFrLsLIRIMAAzqX3Gg1N1PcAAAAASUVORK5CYII=",
        // recycle.png
        recycle: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAV9JREFUeNq8VbsRwjAMtXQZgJYNYAwKqJkDdqBgB5iDmhQZAzagZYOALhFRHPmjBPBd7gUT6fnpZ6jr2v1rgeXjhbtGT3Z3m6g/TDmXD+/PV2sVU4fBuIpL+6tDcvyoShXpiRFCmGz3Ntq2RBo2imYr556V6+HtUKohhTBRLDdnIAXL4/qzx0T8Tmr9XMIYIhlqSegvXyH+qsy1UJrCyKq4CEKqTDnTSGX4Un3HRGQv7SBWqiGjdPP3I8O2EEp0KBQWEp8QQxVFe6mJYKnir1ZjKsx0GJRNqaFFXYoQZfdLpAlgzVl2GKUiSZRDKNV36rbORyRnco61RBNzORzcxAPWvPhqc23JpuAXK2HOIJY9q5T+JRMbIr6hQ5XMyHbYD03sspTYONAuzuFFuv8UDeq5SCvLUdQpa1YxaWJU7h3Kk/r/o9oPGr3Qr/ydqVjYsWWajFp0MOvhJhPmfPcSYABhdeq+Zzm9lQAAAABJRU5ErkJggg==",
        // rocket.png
        rocket: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPhJREFUeNpi/P//PwO9ABMDHQELPklGRkas4o8DGcDBIbueAasCXKFFss9AFsloGKBYSrNghFlE8zjD5pNFBsT7jqIEsv8+jXyGzwfE+o6FWMuue1YyCFhaMnAAMQicP36cQQBIHwfS229wMjBcqKNNMIIssIRaSvNMDbIIZCFdLBv12ajPRojP0IsjbD4jpshiIsai64KEfQZSQ8hCvGXjJgGD/wwPgAzBC0TFmcADA6AesIWMVI0zqrdBCFlCqqVEW9be3g4Omv+VBuB42TwdGJxA2u/DBbC4pyMRdRqoJYQLg+Ks0pH4ah+kFoRxmcc4bBupAAEGAMImlvrykUAUAAAAAElFTkSuQmCC",
        // serial cable.png
        serial_cable: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAalJREFUeNrsliFPAzEUx1sywUcAA2Nkw05NIrCQoG5qIQgEJFgQMwwBAiwJCBRg4Cx8AeSpKRK2AAcGPgKu3L/hlbbrtbcsmSB7SdO3rvd+93999+64EIKNy6bYGO3/wkrkcM5HDvb80DEKYGm1I4NSXXDljAAjSK1WUWu93qsCDg0T/Su5kVc3jI0n0bKhZn1zRc5J90mttdq33EhjCOJTodtp+5LN1mek/9n9Mv7LVWZDKC0+kA4k248fFaMUUkIQ13n4oIDYa4YyHVQkoL1HLwpDgKtAro+aotVckxeFUhVSrxdSbhpv7u4LnUtIPbJkV66hrFJviMOozKCOoPCHgRQqEIBe4l22GJ1lgD+IDh0G4rIBZdvVafl773jLmV6XUhfk7f2DLczPGcoGnjN0hIv+NysCzVNCIMznSaoYzq6PdAKIgYB6UD29+o0gsA3C7Oz6+oFmEEFQnKG0X6Ct1AUgRSxJw+8zQGAEIqWk6CBOcxXhZiXI2WizfOZ9h+BZQdHQwHlipnXMO42yHN5mTgwfzIbS6wQ+uo3dR0MwPvm6msB89iPAAFPdSiYCYoqUAAAAAElFTkSuQmCC",
        // smiley sunglasses.png
        smiley_with_sunglasses: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAahJREFUeNpi/P//PwO9ABMDHQELjMHIyIhX4eFCBpxBYNvPgFczLPQY4QwcliFbYmOIKnfkPHGWEmUZzCJ0S9ABsqXYLCRoGcgimCVvDBXg4iLnHxC0FN1CmB1MuIIOm0XY+MgApgdX/DLhiyNcBuOzEF+CQrGs0hERR4QMxCWPHL8w87Ba5mWAqlHK9D0Ym+pOYgjruw2mQXyYHFsaPxgrxm1icNr/G4xBbFzmwRMIG6cA1nCW/rGYQTHRk+H+/O0MTzliccqDAC41v75/YETJ1CWWH8EugQUDyMW4LHp2WhDsM3wW7cv8CKa3XcBSgpDiI1Dyl/6xiaCPiC4bcVn0axbExfcX+cHFiLEIq89AGRMUlPscWRkYHPFrBqsBAUf8xRhBn4HijByATx+KZbDIxOUyUgFy4kCxrH0/ankGihtSfQdSD0uF2MxlwuUaSn2H7iuspT6siIHlfqfp/CipEF88oectmK/wVjHoFuKyFN0SbBYRVZ9hsxDZUnRLcFlEdE2NXGqjW4orftAtIqkNgl5N4APYLCLJMmIsxWUJTsuGXSMVIMAAbdb8HPsCKlEAAAAASUVORK5CYII=",
        // smiley.png
        smiley: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAVlJREFUeNrclq1ywkAQx3M3TGwMmKo+QiNwIKjsg3SmshJRhUAimeFBkK0ATx8BX2YYLCadiA2bzf737qCD6Jp8bPL/3X5kL66qquxe5rM7Wo9OnHPmg5v3DKZgvMjMlyl7rjkBMA4ZlW3fdhcHjYIRSEKkcagGDMJqEEEO5WNzv7/bB6ESSAyPUqeBtGtu9A6qr7dqhIQtoNVQLdh0cqlRSBD5eX1JT4W9POnCD8OjCc5fC/W+1PNaVBJ0/plBYA2q/RyIooMThHddPvhI9iePK9TmVvv/6Wy8FqTC5Ag6r07NUQNxP9IIRsYLzoU0437UmR3Y+tteWaqRXgc2/2rPs3q11ipRNj7f2lnguh6t5tboZFTq1KePkL7+52URrBtlgKIiEEVlbjESiKASooGi9jMNyKESgkDROzWfa2hIy/pIUNI/iNwmLNNASbAYKIJA2L/7Sf0VYAALvtIDdTY/CQAAAABJRU5ErkJggg==",
        // snowflake.png
        snowflake: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAbFJREFUSInNlsGNgzAQRb9X5J4SSAkpwQUkkhuIRAspIAcKyIEGkNwAUvawR0rIIQUkJUTiCNLsAQ0ZHJsNkF3tSBHx4PnPYw8DwH+3xBLFONHYuI/fWMxsmE7qYCZTsnwKdEUYmFiixBINzfHd62UW40TaboIrLfOF0klN63U7NinRDVvlm6uTelCrA3IBhLYuuzwy80KSmnxF9HRmN2xVufuEthssV1HnN2krzteQb7mKEOsIt7KBm3VvwCtZp5s2MAbut/ZecVDKpETFQansQnQ+A/nu4WOgNkBZAPdr0+mW+cK71T0zKVF2IXKz4W30+aVvtPlELFVkqXoviAvEpESWqk5Mwtx7k4AM8gEZFgKNArogFyh/IdBsIJ/LWzPzAWUBMET+nwWSQF/5u9UogbNA8sz4ml2et85SFWxxABDJgUmJ5JNv9hGKY9M1YNkpeL7sLPdrTWYfAegDBzuIm5EUdzNz54RiAU8jjnGiWLcZuVYclAJ+7nvFsUGso9dfL75Vs29o9exztYJAN9Ad8/tqaI6rNcqkiISNEX35g2eookKfBpNh0q7515Swv7Vv0PIb3RwWqcAAAAAASUVORK5CYII=",
        // star.png
        star: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATRJREFUeNrclr0RwjAMha0cIzAAI5AeCijZAe4YgRIGgJIdMgQtBfRhBAZgB3FKThfb8Z9CkgI1vnNif36S/BJARDVWZGrMIGVSdY+Dwi4MsTIC3V5y4E9pJOCgMFbFcVzJ1GVDq+kEI1WbeXteoi4Ztsjr0QXsFYZFfXofMFUd8B07rQHPe/Phs6wBn3ympuXbmPfV0N6jii2CAQOA6oT6qQnUBajvsbw2DCONl7sCfTGDaCQQAVNqyHsQKFizvoA2qJXGkAemppQO6/LGKEwKdKnRYcHWp4aRpDRmzpnUplJqKIbZFzUVyAbQqxGHgFEH0RskZD96t1GNfE0Du+a9YDfa3y0b4vNOCgYmwfSO8t2bGNQGMmPiW+i7M8Ga8ObFG6MNwqq6gNxQs/bwtz+pXwEGAGeQ8A9Jrhw7AAAAAElFTkSuQmCC",
        // stop.png
        stop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWJJREFUeNrElj1ywjAQhZGGA3CJFHShdElBmzI9l8ghcpSUtDlAStJRcAQ33MDkeeYxz2uvpCTC7IwtS5b32z97HbquW8wlcTGjLHEKIbgbDqvnYtdfLt+uIkQw9CcHRlBz/syCvp52SWASpqDL61sWtvp4TwLBiTmPSkAQ7GMEvNDHGqBSYKwFKgHGmqAcMNYGJYGoEkzatu0wnrf7/npqrut2bvdhrnpH1bjebPoShlW07HQ83rzFiPLGPn23OOcaDujR9VGBQLGOVKTrNIhQKp4S1TOC0RIC4AkBFsxr3rOKrce3b+PAkh9LEb5GwoT1xihUbxtRrJ823kt6xtzwQfXME8LxnM2tmzMWRS6XKfH2x1SMvRyo1xgZ7uKcUYEqskqspbnWo52g75tsMfoV8Sz9jagetJzBS80epJ7VAk3mrAbQA032s/8AUyD37+ovwBxoUCAP/eG526/cXHIVYACtTITKekFBEAAAAABJRU5ErkJggg==",
        // tv.png
        tv: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAARVJREFUeNpi/P//PwO9AAuIYGRkZKisrKSZre3t7YwgT4GJ0NBQmntv9erVjGCfvXv3Di54//5zqlmgqCiJGYzo4P/9TootYlQsxxBjYqAjwGqZYqInQ9FlXzCG8cmhibLs/vztKBaD+KTSWIMWlBqdnZ3/IycQBYdLDIFFkOhc3/eHrCB7cEAPJYHs3buXceDjDAbI9RVZltHFZwqOLFShsZaNGJG7/w9YCkSDNJJDD7jPcMaZoSGdUyPdLDt/foj7DFxcKSlp0bzyvHfvGqTyRC7DzM3NSTbo5MmTGGIgc9DFmQgZQIhGNhyG8TZ4sAGYJkI0Pt9hjTNQ60pRUZMm8Xb//nVGcFMD1roaFFXMkLYMIMAAvj6d2AverZAAAAAASUVORK5CYII=",
        // telephone.png
        telephone: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXNJREFUeNq8lUHOREAQhbVYWjmARMIVbCXuzQGcQSJxACt7f2pRUsqr7h5j/k7EzGA+71W9anccR/JfK+MPzrnLhb7vL28xjqPTD9d1fd4zz7PzgUhUii5oEPqNQATgQ4LlZ7lS60/XdU30WQK1EgbySyBgaskuyxKeYxaDNDC1aoCUxSxpralMv8UTZdI+ZOfNRkvRJ8q0jXx2nLOmaY6iKJJt20wlqP1RvZCFxLnB8jyHKkI5smrPz5o567rulYmhM5jJC23bHrJB9n0/bf1EFbvAEP6e/XIWausvNmoVVD+qo28EWd3IhwmjG8m6ZVmSqqoeqZE2BnP2zUIgaeUNNk2Ti21pX6BRzc6cyf2MupLqRQt1ZChzCHgJtd48nwDRPshTxwuTQF/eGIpAEmhOEFk/AskIIMvYttDw9iqT9hAUZTF2+xmGwUW1vpz2lsLXlMkaWtPGpy6qZqiGBKEDKXxVWSjgvg032PrfwnWo/wQYANvHaz6/8MIMAAAAAElFTkSuQmCC",
        // trash can.png
        trash_can: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPNJREFUeNrsVjEOhCAQBOMD6GxteQKtD+EfvsB/0PgLWp5Aa0vnD7wsCYYTRDxPL7kwzRLY3dlhxSxelgU9hXq7gTFOBgghguo457tBvpjqTGUxotR+IGR7jXvK+r5fHYdhwEf7MWVRMj8BpdRaQkhQwDzP61prHZwDefIau67L/mL8AlxRqVxRZWcIU5BSvuWvY05N0yBjjLWAtm3RNE3WMsaQUspaAKwB7hysH+ujulK5T5qDS2RO5SNkX1Pm+va4Mtf0lDI4B7/Ss98oG8cRf6rMPehYjtKz+5UdPezyb/x/ZVnT1ZkxAUaB7OnqTrwEGABZFKkJiCegGQAAAABJRU5ErkJggg==",
        // tree.png
        tree: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAZFJREFUeNq8laFSxDAQhjedGwYJisEdFoUEiTwMUx4Aj+cx0OBBIDtnOHmySBSWc0iQuHA/nZ3upbtN0unxz3TSJt39sptN4rz3xHLOUZ/KR/Jaf3VNqqH0/ec/BSYh0/K8M76qlio0hBUUUQwk+63Ik2ApoBxgkbM+nK6hQBP2WW86AYhbTbJf2kZhpzfkD89aIwnSgLIfNrCFj6zIUoDht7RJhrFRDBhGyjaa1H3GKQiBlhMrG/W9d9HIXh+azamB2JHWShD7kJr0zXT/m+hnsW6VmVttnzppxB7h/cLVBSi0O0sDcFS9Z+PVk/PhSQEgomN97dlZwJhMX/RslJWlbWA41R5rnUyYLHEGISrMePFsO8LYTk1RddaMy55nC9DBGjhfNbDLaXsyyD5+z77P5FGD1DDg+Ijo/aNpL06I7qpN6CiXp4wIIIhhFmjQ5RmmDJENVZHzc18Uo8M4lUjh1mHQbdm+Y/1kdY4Cg0M8XBzQy1s34pgmsZTJKJA+CZHVieKLrasLy3ObKugf9SvAAJGNGxMdRRGbAAAAAElFTkSuQmCC",
        // trophyu.png
        trophy: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdhJREFUeNq8lb9Ow0AMxn1RR4YOXdjChpiaHYauDKA+AjwAEhULCwMLCwKJBwCJF+DPwMpA93RCbM0DdKgEe+h3kVvn6kuuRNRSesnl6t99tnM2eZ7TuqyFH2NMafIwpnxni2i/S7SbFHOTJLbj131mx7dR2RHWYu5zTPSSUckhCzK48cH+YlWwlpw871GOHV4/FTuFSWWdeEDDixNV2eAutqoB+zilHO+v3svQSAOxM4CGafEM0CS7oe3jeAnkGm8WPpdgEsQhwDNAc2UzEIDYPav2GXxowMhdxPdNlLm+VJhbXaHKOF915oU1VRYMQwhQVavmTObcC+MSRcm66gDE1UkzC9TKXjP2Jcs/ko59xupkPqVBrfZ/dy4KiTWrk04Y6I5BOYNcOGH5nDfenVSnOZb5qj1BNKCrTgupGy4fSA2jBmRnKBLtpA8BLR3EEojD+qy/OCu1YuGWAsPaKpC3xWiGtoPx+XIR0rrvym0xtGqnBpTBoQaGFRWqjLuDrMa9WzKhMG/OqrqwHFe1YGXc89wKrSoIV1nQCXLUfsw36ZvGsyjyhWdceNfo1P8vqw1jTK9BO8/owDQukF57asck6VO7uzGfn45+7JimxVf/MA1Uti77FWAAcEAtztNGoEsAAAAASUVORK5CYII=",
        // warning.png
        warning: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAR5JREFUeNrMltENwiAQQIGwQR2gKzSdQL8cQxfQpH86QP13ARMH0QU0frhA/+0OKEb0POGAJsWSkCu9yx3vDi5wpRRLNQRLObqQrcZMdYoTG0wHul1zFRtQxxluGg2VmTF0wyXDVLF0ncmms6w/MkhVluV7xtAlr5kIoaq2OWmj9SF0wyELoYqh85KNLs2XjNXDIX1U7WvdFnZC81/Lqnh8LBq1OTL+dzJBUWkHcOfYoU1P1U5QRDAAdAxTiPUUobRR1fOPIywZy6wbgrJmz4A/tZOuort2fFqewzKwa+jeaHqg2rsl7I2UHe6Z1t6IT1fsaaTsBa4Vc9wr1z2j7LU/SCd99wuvcc189nBwncv1hPf+Uq0PivOUL+K7AAMA9JYywOW04o8AAAAASUVORK5CYII=",
        // wrench.png
        wrench: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMxJREFUeNrs1lEKwyAMBuBmeCffPYlH8yS+ewKP4zAsEGyyDo2FjQVK2xc/fzWl0Fo77qrHcWP9Lub4CwBMDRJCEDc+5wz8TLjV2XYoxojPtVa8l1IQMl1GDlFpkEkyDWJLC8vJKFVKCS9aQi2xSTLvvTgJji8l4zPvS9cvKoKkvXOzEM18TKZBuHm8D676bIR4orG/6HmqzyRIO+JLnysL6CPMCrrELKG3mDWkYjsgEdsFnbCdkJhsF3Rq6tfgbfwKWBX8f+W+DnsKMADREcC+KC2JWQAAAABJRU5ErkJggg==",
    };
    var getScale = function () {
        switch (props.size || "") {
            case "sm":
                return 1;
            case "md":
                return 2;
            case "lg":
                return 3;
            case "xl":
                return 4;
            // If there is no size passed in props
            default:
                return 1;
        }
    };
    return (React__default["default"].createElement("img", { src: iconSRCs[props.name], alt: props.name.replace("_", " "), style: { imageRendering: "pixelated" }, width: 27 * getScale(), height: 27 * getScale() }));
};

var UnderConstruction = function (props) {
    var getHeight = function () {
        switch (props.size || "") {
            case "sm":
                return 10;
            case "md":
                return 20;
            case "lg":
                return 30;
            case "xl":
                return 40;
            default:
                return 10;
        }
    };
    return (React__default["default"].createElement("div", { style: {
            width: "100%",
            height: getHeight(),
            background: "repeating-linear-gradient(135deg, #fe0 0px, #fe0 24px, #000 24px, #000 48px)",
        } }));
};

exports.Blink = Blink;
exports.Button = Button;
exports.Center = Center;
exports.HR = HR;
exports.Icon = Icon;
exports.UnderConstruction = UnderConstruction;
//# sourceMappingURL=index.js.map
