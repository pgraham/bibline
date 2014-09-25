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
		if (isRunningPhonegap()) {
			$('base').attr('href', '/android_asset/www/');
		}
		$routeProvider
			.when('/', {
				templateUrl: 'tmpl/session-list-view.html',
				controller: 'SessionListCtrl'
			})
			.when('/session/:sessionId', {
				templateUrl: 'tmpl/session-details-view.html',
				controller: 'SessionCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	}
]);
