"use strict";

var controllers = angular.module('biblineControllers', []);

controllers.controller('MainCtrl', function ($scope) { });

controllers.controller('SessionListCtrl', function ($scope, $location, sessionSrvc) {
	$scope.dateFormat = 'MMMM Do, YYYY';
	$scope.current = null;
	$scope.listView = [];

	$scope.openSession = function (session) {
		if (session.id === -1) {
			return;
		}
		$location.path('/session/' + session.id)
	};

	$scope.next = function () {
		if ($scope.curIdx === 0) {
			return;
		}
		$scope.curIdx -= 1;
		$scope.current = $scope.sessions[$scope.curIdx];
		if ($scope.curIdx >= 5) {
			$scope.listView.unshift($scope.sessions[$scope.curIdx - 5]);
		} else {
			$scope.listView.unshift({ id: -1 });
		}

		if ($scope.listView.length > 7) {
			$scope.listView.pop();
		}

		$scope.$emit('moveNext');
	};

	$scope.prev = function () {
		if ($scope.curIdx === $scope.sessions.length - 1) {
			return;
		}
		$scope.curIdx += 1;
		$scope.current = $scope.sessions[$scope.curIdx];
		if ($scope.curIdx + 1 < $scope.sessions.length) {
			$scope.listView.push($scope.sessions[$scope.curIdx + 1]);
		} else {
			$scope.listView.push({ id: -1 });
		}

		if ($scope.listView.length > 7) {
			$scope.listView.shift();
		}

		$scope.$emit('movePrev');
	}

	$scope.$watch(
		function () { return sessionSrvc.getSessions();  },
		function (sessions) {
			$scope.sessions = sessions;

			var view = [];
			var cIdx = null;
			if (sessions) {
				cIdx = sessions.length >= 6 ? 5 : sessions.length - 1;
				for (var i = cIdx - 5, end = cIdx + 1; i <= end; i++) {
					if (i < 0 || i >= sessions.length) {
						view.push({ id: -1 });
					} else {
						view.push(sessions[i]);
					}
				}
			}
			
			$scope.listView = view;
			$scope.curIdx = cIdx;
			if (cIdx !== null) {
				$scope.current = sessions[$scope.curIdx];
			}
		}
	);
});

controllers.controller('SessionCtrl', function ($scope, $routeParams, sessionSrvc) {

	$scope.toggleRegister = function (session) {
		// TODO Save registration state somehow
		session.registered = !session.registered;
	};

	$scope.$watch(
		function () { return $routeParams['sessionId']; },
		function (sessionId) {
			$scope.session = sessionSrvc.getSession(parseInt(sessionId, 10));
		}
	);

});
