"use strict";
var directives = angular.module('biblineDirectives', []);

directives.directive('bibSessionList', [ '$timeout' , function factory($timeout) {
	return {
		retrict: 'E',
		templateUrl: 'session-list.html',
		link: function post(scope, element, attrs) {
			$timeout(function () {
				element.find('.ellipsis').dotdotdot();
				element.removeClass('out');
			}, 100);
		}
	};

} ]);

directives.directive('sessionDate', function factory() {

	return {
		restrict: 'C',
		link: function post(scope, element, attrs) {
			scope.$watch('currentSession', function (value) {
				var eventDate = moment();
				if (value) {
					eventDate = moment(value.timeslot.startTime);
				}
				element.text(eventDate.format(scope.dateFormat));
			});
		}
	};

});
