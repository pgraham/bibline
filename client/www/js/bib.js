var BIB = angular.module('bibline', []);

BIB.controller('EventListCtrl', function ($scope, $http) {
	$http.get('data/events.json').success(function (data) {
		$scope.events = data;
	});
});

BIB.directive('bibSessionList', function factory() {

	return {
		retrict: 'E',
		scope: {
			events: '=sessions'
		},
		templateUrl: 'session-list.html',
		link: function post(scope, element, attrs) {
			setTimeout(function () {
				element.find('.ellipsis').dotdotdot();
				element.removeClass('out');
			}, 100);
		}
	};
});
