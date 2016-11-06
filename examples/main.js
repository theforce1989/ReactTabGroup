import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";

import TabGroup from "../src/TabGroup.js";
import Tab from "../src/Tab.js";

import "./custom.less";

$(() => {
	$("body").append("<div id='viewport'></div>");
	const node = $("#viewport")[0];

	const tabs = (
		<div className="custom">
			<TabGroup>
				<Tab tabName="TAB1" tabHeader={ "TAB 1" }>
					<div>
						<h1>TABCONTENT 1</h1>
					</div>
				</Tab>
				<Tab tabName="TAB2" tabHeader={ "TAB 2" }>
					<div>
						<h1>TABCONTENT 2</h1>
					</div>
				</Tab>
			</TabGroup>
		</div>
	);

	ReactDOM.render(tabs, node);
});
