var express = require('express');

// Create the app
var app = express();
app.use(express.static('public'));

//start the server
app.listen(3000, function () {
	console.log('Express server is up on port 3k');
});