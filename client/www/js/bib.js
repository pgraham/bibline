var BIB = angular.module('bibline', []);

BIB.controller('EventListCtrl', function ($scope, $http) {
	$http.get('data/events.json').success(function (data) {
		$scope.events = data;
	});
});

BIB.directive('bibSession', function () {

	return {
		restrict: 'E',
		template: '<div class="session"><h2 class="ellipsis">{{event.title}}</h2>' +
			'<div class="presenter">{{event.presenter}}</div>' +
			'<div class="time">{{event.startTime}}</div>' +
			'<p class="ellipsis">{{event.description}}</p></div>',
		link: function (scope, element, attrs) {
			setTimeout(function () {
				element.find('.ellipsis').dotdotdot();
			});
		}
	};

});
