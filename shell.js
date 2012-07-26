//
//
//

var exec = require('child_process').exec;

module.exports = function (cmd, cb) {
  var data = "";
  var proc = exec(cmd);
  proc.stdout.on("data", recorder);
  proc.stderr.on("data", recorder);
  proc.on("exit", function () { cb(data.slice(0,-1)) });
}

function recorder (d) { 
  data += d
}