"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_sizeme_1 = require("react-sizeme");
var Grid = (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            columnCount: 4,
            gutterWidth: 10,
            gutterHeight: 10
        };
        return _this;
    }
    Grid.getDerivedStateFromProps = function (props, state) {
        return props;
    };
    Grid.prototype.render = function () {
        var _this = this;
        return (React.createElement(react_sizeme_1.SizeMe, null, function (_a) {
            var size = _a.size;
            var gridcalc = _this.calculate(size);
            return (React.createElement("div", { style: {} },
                gridcalc,
                React.createElement("div", { style: { clear: "both" } })));
        }));
    };
    Grid.prototype.calculate = function (size) {
        if (!size.width) {
            return [];
        }
        var rows = [];
        var numrows = Math.ceil(this.props.children.length / this.state.columnCount);
        var currow = [];
        for (var c = 0; c < this.props.children.length; c++) {
            var rownum = Math.floor(c / this.state.columnCount);
            var column = c % this.state.columnCount;
            var lastcolumn = (column == (this.state.columnCount - 1)) ? true : false;
            var lastrow = (rownum == (numrows - 1)) ? true : false;
            if (((c / this.state.columnCount) % 1) != 0) {
                currow.push(React.createElement("div", { key: c + "margin", style: { width: this.state.gutterWidth, height: "100%" } }));
            }
            var width = (size.width - (this.state.gutterWidth * (this.state.columnCount - 1))) / this.state.columnCount;
            var style = __assign(__assign({}, this.props.children[c].props.style), { width: width });
            currow.push(React.cloneElement(this.props.children[c], { style: style, key: c }));
            if ((c == this.props.children.length - 1) || (column == (this.state.columnCount - 1))) {
                var style = { display: "flex", flexDirection: "row" };
                if (lastrow == false) {
                    style.marginBottom = this.state.gutterHeight;
                }
                rows.push(React.createElement("div", { key: Math.random(), style: style }, currow));
                currow = [];
            }
        }
        return rows;
    };
    return Grid;
}(React.Component));
exports.Grid = Grid;
