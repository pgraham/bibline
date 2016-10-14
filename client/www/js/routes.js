define(function (require) {

	var path = require('path');

	var React = require('react');

	var SessionList = require('jsx!views/session/SessionList');

	path.map('/').to(function () {
		React.render(
			React.createElement(SessionList, null),
			document.getElementById('page')
		);
	});

	return {
		init: function () {
			Path.history.listen();
			Path.history.popState();
		}
	};

});
