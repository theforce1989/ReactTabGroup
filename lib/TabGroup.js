"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("./TabGroup.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createClass({

	displayName: "TabGroup",

	propTypes: {
		children: _react2.default.PropTypes.node
	},

	getInitialState: function getInitialState() {
		var tabs = this.props.children;
		if (!Array.isArray(tabs)) {
			tabs = [tabs];
		}

		return {
			selectedTab: tabs[0].props.tabName
		};
	},
	render: function render() {
		var _this = this;

		var children = this.props.children;

		if (!Array.isArray(children)) {
			children = [children];
		}

		var headers = children.map(function (c, i) {
			var headerClass = "tabHeader";
			if (c.props.tabName === _this.state.selectedTab) {
				headerClass += " active";
			}
			return _react2.default.createElement(
				"div",
				{ className: headerClass, key: i, onClick: function onClick() {
						return _this.setState({ selectedTab: c.props.tabName });
					} },
				c.props.tabHeader
			);
		});

		var currentTab = children.find(function (c) {
			return c.props.tabName === _this.state.selectedTab;
		});

		return _react2.default.createElement(
			"div",
			{ className: "tabGroup" },
			_react2.default.createElement(
				"div",
				{ className: "tabHeaders" },
				headers
			),
			_react2.default.createElement(
				"div",
				{ className: "tabContent" },
				currentTab
			)
		);
	}
});

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, "default", "src/TabGroup.js");
}();

;
//# sourceMappingURL=TabGroup.js.map