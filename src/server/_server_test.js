// Copyright (c) 2012-2014 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function () {
	"use strict";

	var fs = require("fs");
	var expect = require("expect.js");
	var server = require("./server.js");
	var httpUtil = require("../__http_util.js");
	var dirs = require("../../build/config/dirs.js");

	var TEST_FILE = dirs.test + "/file.txt";
	var TEST_DATA = "Hello Test";

	describe("Server", function() {

		beforeEach(function(done) {
			fs.writeFile(TEST_FILE, TEST_DATA, function(err) {
				server.start(5000, dirs.test, function() {
					done(err);
				});
			});
		});

		afterEach(function(done) {
			server.stop(function() {
				fs.unlink(TEST_FILE, function(err) {
					done(err);
				});
			});
		});

		it("responds to requests", function(done) {
			httpUtil.getPage("http://localhost:5000/file.txt", function(error, response, responseText) {
				//try {
					expect(response.statusCode).to.equal(200);
					expect(responseText).to.equal(TEST_DATA);
					done(error);
				//}
				//catch (exc) {
				//	done(exc);
				//}
			});
		});

	});

}());
