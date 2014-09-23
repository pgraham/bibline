"use strict";

angular.module('biblineDirectives', [])
	.directive('bibSessionList', function factory() {

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
