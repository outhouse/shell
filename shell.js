//
//
//

var exec = require('child_process').exec;

module.exports = function (cmd, cb) {
	var wait = true;
	var data = "";
	var proc = exec(cmd);
	proc.stdout.on("data", function (d) { data += d });
	proc.on("exit", function () { cb(data.slice(0,-1)) });
}