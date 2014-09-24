"use strict";

var bibline = angular.module('bibline', [
	'biblineControllers',
	'biblineDirectives',
	'biblineFilters',
	'biblineServices',
	'ngRoute'
]);

angular.module('biblineServices', []);

bibline.config([ '$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'session-list-view.html',
			controller: 'SessionListCtrl'
		})
		.when('/session/:sessionId', {
			templateUrl: 'session-details-view.html',
			controller: 'SessionCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});

} ]);
