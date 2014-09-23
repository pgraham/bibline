"use strict";
var directives = angular.module('biblineDirectives', []);

directives.directive('bibSessionList', function factory() {
	return {
		retrict: 'E',
		templateUrl: 'session-list.html',
		link: function post(scope, element, attrs) {
			setTimeout(function () {
				element.find('.ellipsis').dotdotdot();
				element.removeClass('out');
			}, 100);
		}
	};

});

directives.directive('sessionDate', function factory() {

	return {
		restrict: 'A',
		link: function post(scope, element, attrs) {
			scope.$watch(attrs.sessionDate, function (value) {
				var eventDate = moment();
				if (value) {
					eventDate = moment(value.timeslot.startTime);
				}
				element.text(eventDate.format(scope.dateFormat));
			});
		}
	};

});
