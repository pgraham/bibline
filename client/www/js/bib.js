var BIB = angular.module('bibline', []);

BIB.controller('EventListCtrl', function ($scope, $http) {
	$http.get('data/events.json').success(function (data) {
		$scope.events = data;
	});
});

BIB.directive('bibSession', function () {

	return {
		restrict: 'E',
		templateUrl: 'session.html',
		link: function (scope, element, attrs) {
			setTimeout(function () {
				element.find('.ellipsis').dotdotdot();
			});
		}
	};

});
