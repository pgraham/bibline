"use strict";
var directives = angular.module('biblineDirectives', []);

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
