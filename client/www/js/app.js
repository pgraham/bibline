"use strict";

var bibline = angular.module('bibline', [
	'biblineControllers',
	'biblineDirectives',
	'biblineFilters',
	'biblineServices',
	'ngRoute',
	'ngAnimate'
]);

angular.module('biblineServices', []);

bibline.config([
	'$routeProvider',
	'$locationProvider',
	function ($routeProvider, $locationProvider) {
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

		$locationProvider.html5Mode(true);
	}
]);
