// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.

// A silly little validator function. Just an example.
define(function(require, exports) {
	"use strict";

	var constants = require("./constants");

	exports.validateTextField = function validateTextField(field) {
		if (field.value) {
			field.removeAttribute("class");
		}
		else {
			field.setAttribute("class", constants.REQUIRED_FIELD_CLASS);
		}
	};

});
