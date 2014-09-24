"use strict";

var controllers = angular.module('biblineControllers', []);

controllers.controller('MainCtrl', function ($scope) {

});

controllers.controller('SessionListCtrl', function ($scope, $location, sessionSrvc) {
	$scope.dateFormat = 'MMMM Do, YYYY';
	$scope.currentEvent = null;

	$scope.openSession = function (session) {
		$location.path('/session/' + session.id)
	};

	$scope.$watch(
		function () { return sessionSrvc.getSessions();  },
		function (sessions) {
			$scope.sessions = sessions;
			if (sessions) {
				$scope.currentSession = sessions[0];
			} else {
				$scope.currentSession = null;
			}
		}
	);
});

controllers.controller('SessionCtrl', function ($scope, $routeParams, sessionSrvc) {

	$scope.$watch(
		function () { return $routeParams['sessionId']; },
		function (sessionId) {
			$scope.session = sessionSrvc.getSession(sessionId);
		}
	);

});
