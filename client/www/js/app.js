require.config({
	paths: {
		'q': '../lib/bower_components/q/q.js',
		'path': '../lib/bower_components/pathjs/path',

		'domReady': '../lib/domReady',
		'jquery': '../lib/jquery-2.1.3.min',

		'react': '../lib/react-with-addons-0.12.2',
		'JSXTransformer': '../lib/JSXTransformer-custom-require',
		'jsx': '../lib/jsx',
		'text': '../lib/text'
	},
	shim: {
		'path': {
			exports: 'Path'
		}
	},
	jsx: {
		fileExtension: '.jsx'
	}
});

require([ 'routes', 'domReady' ], function (routes, domReady) {

	function isRunningPhonegap() {
		return (window.cordova || window.PhoneGap || window.phonegap)
		&& /^file:\/{3}[^\/]/i.test(window.location.href)
		&& /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent);
	}

	// Pop and render the initial route
	if (isRunningPhonegap()) {
		document.addEventListener('deviceready', routes.init, false);
	} else {
		domReady(routes.init);
	}

});
