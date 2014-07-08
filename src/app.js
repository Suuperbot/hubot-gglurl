// Description:
//   for try google shorturl.
//
// Dependencies:
//    "node-gglurl": "0.0.2"
//
// Configuration:
//   None
//
// Commands:
//   :gglurl encode <url> - to encode.
//   :gglurl decode <url> - to decode.
var gglurl= require('node-gglurl');

module.exports = function(robot) {
	robot.hear(/:gglurl decode (.*)/i, function(msg) {
		gglurl.decode(function(err, res) {
			if (!err && res.longUrl) {
				msg.send(res.longUrl);
			} else if (err) {
				console.log(err);
			}
		}, msg.match[1]);
	});

	robot.hear(/:gglurl encode (.*)/i, function(msg) {
		gglurl.encode(function(err, res) {
			if (!err && res.id) {
				msg.send(res.id);
			} else if (err) {
				console.log(err);
			}
		}, msg.match[1]);
	});
};
