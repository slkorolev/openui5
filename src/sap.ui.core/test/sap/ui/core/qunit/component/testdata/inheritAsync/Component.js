sap.ui.define(['jquery.sap.global', './parentB/Component'],
	function(jQuery, ComponentB) {
		"use strict";

		var Component = ComponentB.extend("sap.ui.test.inheritAsync.Component", {
			metadata: {
				manifest: "json"
			}
		});

		return Component;
	});
