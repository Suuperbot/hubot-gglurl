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
	robot.respond(/gglurl decode (.*)/i, function(msg) {
		gglurl.decode(function(err, res) {
			if (!err && res.longUrl) {
				msg.send('gglurl decode: ' + res.longUrl);
			} else if (err) {
				console.log(err);
			}
		}, msg.match[1]);
	});

	robot.respond(/gglurl encode (.*)/i, function(msg) {
		gglurl.encode(function(err, res) {
			if (!err && res.id) {
				msg.send('gglurl encode: ' + res.id);
			} else if (err) {
				console.log(err);
			}
		}, msg.match[1]);
	});
};
