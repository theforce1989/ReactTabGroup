"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({

	displayName: "Tab",

	propTypes: {
		tabHeader: _react2.default.PropTypes.node.isRequired,
		className: _react2.default.PropTypes.string,
		children: _react2.default.PropTypes.node
	},

	getDefaultProps: function getDefaultProps() {
		return {
			className: ""
		};
	},
	render: function render() {
		var _props = this.props,
		    className = _props.className,
		    children = _props.children;

		var tabClass = ["tab-inner"].concat(className.split(" ")).filter(function (x) {
			return x.length;
		}).join(" ");

		return _react2.default.createElement(
			"div",
			{ className: tabClass },
			children
		);
	}
});

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, "default", "src/Tab.js");
}();

;
//# sourceMappingURL=Tab.js.map