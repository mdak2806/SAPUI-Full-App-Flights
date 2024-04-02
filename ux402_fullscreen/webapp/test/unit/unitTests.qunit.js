/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mohamaddakdoukcomsaptrainingux402fullscreen/ux402_fullscreen/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
