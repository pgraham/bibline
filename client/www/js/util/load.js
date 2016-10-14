define(function (require) {

	var q = require('q');
	var $ = require('jquery');

	return function (url) {
		return q($.ajax(url));
	};

});
