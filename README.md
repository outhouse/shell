An async shell command executor for nodejs

Usage:

	shell = require("shell");
	shell("ls -alh", function (data) {
		console.log(data);
	});