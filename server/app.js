var colours = require('colors/safe');

var express = require('express');
var app = express();

var sessions = require('./data/sessions.json');
var presenters = require('./data/presenters.json');

app.set('title', 'Bibline Server');
var server = app.listen(6644, function () {

	var title = app.get('title');
	var host = server.address().address;
	var port = server.address().port;

	console.log(
		'%s listening at http://%s:%s',
		colours.green(title),
		colours.grey(host),
		colours.red(port)
	);
});
