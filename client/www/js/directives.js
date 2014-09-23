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

