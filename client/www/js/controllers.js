"use strict";

angular.module('biblineControllers', [])

	.controller('EventListCtrl', function ($scope, $http) {
		$scope.dateFormat = 'MMMM Do, YYYY';
		$scope.currentEvent = null;

		$http.get('data/events.json').success(function (data) {
			// TODO Sort events by timeslot.startTime in reverse order
			$scope.currentEvent = data[0];
			$scope.events = data;
		});
	});

