An async shell command executor

Usage:

shell = require("shell");
shell("ls -alh", function (data) {
	console.log(data);
});