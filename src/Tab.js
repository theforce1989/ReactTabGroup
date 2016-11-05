import React from "react";

export default React.createClass({

	displayName: "Tab",

	propTypes: {
		tabHeader: React.PropTypes.node.isRequired,
		className: React.PropTypes.string,
		children:  React.PropTypes.node
	},

	getDefaultProps() {
		return {
			className: ""
		};
	},

	render() {
		const { className, children } = this.props;
		const tabClass = ["tab-inner"]
			.concat(className.split(" "))
			.filter(x => x.length)
			.join(" ");

		return (
			<div className={ tabClass }>
				{ children }
			</div>
		);
	}
});
