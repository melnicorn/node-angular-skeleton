// Defines two example methods which get mapped to get and post requests 
// in ../api.js

module.exports = {
	getMethod: function (req, res) {
		return res.send({
			response: 'success',
			message: 'This was a get request'
		});
	},
	postMethod: function (req, res) {
		return res.send({
			response: 'success',
			message: 'This was a post request. You sent: "' + req.body.message + '"'
		});
	} 
};