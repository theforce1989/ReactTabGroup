import React from "react";

import "./TabGroup.less";

export default React.createClass({

	displayName: "TabGroup",

	propTypes: {
		children: React.PropTypes.node
	},

	getInitialState() {
		let tabs = this.props.children;
		if (!Array.isArray(tabs)) {
			tabs = [tabs];
		}

		return {
			selectedTab: tabs[0].props.tabName
		};
	},

	render() {

		let { children } = this.props;
		if (!Array.isArray(children)) {
			children = [children];
		}

		const headers = children.map((c, i) => {
			let headerClass = "tabHeader";
			if (c.props.tabName === this.state.selectedTab) {
				headerClass += " active";
			}
			return (
				<div className={ headerClass } key={i} onClick={() => this.setState({ selectedTab: c.props.tabName })}>
					{ c.props.tabHeader }
				</div>
			);
		});

		const currentTab = children.find(c => c.props.tabName === this.state.selectedTab);

		return (
			<div className="tabGroup">
				<div className="tabHeaders">
					{ headers }
				</div>

				<div className="tabContent">
					{ currentTab }
				</div>
			</div>
		);
	}
});
