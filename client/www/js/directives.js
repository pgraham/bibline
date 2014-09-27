"use strict";
var directives = angular.module('biblineDirectives', []);

directives.directive('sessionDate', function factory() {
	return {
		restrict: 'C',
		link: function post(scope, element, attrs) {
			scope.$watch('current', function (value) {
				var eventDate = moment();
				if (value) {
					eventDate = moment(value.timeslot.startTime);
				}
				element.text(eventDate.format(scope.dateFormat));
			});
		}
	};
});

directives.directive('sessionList', function factory($timeout) {

	function applyAnimationClasses(element, directionClass) {
		element.addClass('list-animate ' + directionClass);

		$timeout(function () {
			element.addClass('list-animate-active');
		}, 10)
		.then(function () {
			$timeout(function () {
				element.removeClass('list-animate list-animate-active ' + directionClass);

				// Prevent animation flicker by detaching in the same execution thread
				// as the animation classes are removed.
				element.find('.ng-leave').detach();

				// Prevent animating the new list element when it changes position in
				// the list by removing the ng-enter class which defines the css
				// animation duration
				element.find('.ng-enter:nth-child(7)').removeClass('ng-enter');
			}, 180);
		});
	}

	return {
		restrict: 'C',
		link: function post(scope, element, attrs) {

			// NOTE: Device swipe events are registered in the template
			if (!isRunningPhonegap()) {
				element.bind('mousewheel', function (e) {
					if (e.originalEvent.deltaY > 0) {
						scope.next();
					} else {
						scope.prev();
					}
					scope.$apply();
				});
			}

			scope.$on('moveNext', function () {
				applyAnimationClasses(element, 'animate-next');
			});

			scope.$on('movePrev', function () {
				applyAnimationClasses(element, 'animate-prev');
			});

		}
	};
})
