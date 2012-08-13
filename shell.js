//
//
//

var exec = require('child_process').exec;

module.exports = function (cmd, cb) {
  var data = "";
  var proc = exec(cmd, function (err) {
    if (cb) {
      cb(err, data.slice(0,-1));
    }
  });
  proc.stdout.on("data", function (d) { data += d });
  proc.stderr.on("data", function (d) { data += d });
}
