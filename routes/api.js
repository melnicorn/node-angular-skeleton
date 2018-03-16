const express = require('express');
const router = express.Router();

// This API file defines the routes to the downstream API method
// Example of importing another library and mapping methods to a 
// GET and POST API call

const template = require('./api/template');

// Mappings for API methods
router.get('/api', function (req, res){
	res.send({
		message: 'Hello world',
		status: 'success'
	});
});

router.get('/api/template', template.getMethod);
router.post('/api/template', template.postMethod);

module.exports = router;