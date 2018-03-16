const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const api = require('./routes/api');
const oneDay = 86400000;

app.use(bodyParser.json());

// Map routes for API calls
app.use(api);

// Map static content (client side HTML, javascript, and content) to the public folder
app.use(express.static(__dirname + '/routes/public', { maxAge: oneDay }));

const port = +process.env.PORT || 5000;

const server = app.listen(port, function() {
	console.log("Listening on " + port);
});

process.on('SIGINT', function() {
	console.log('\nCleaning up resources...');
	server.close();
	
	console.log('Exiting...');
	process.exit();
});