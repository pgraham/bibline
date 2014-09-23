"use strict";

angular.module('biblineControllers', [])

	.controller('EventListCtrl', function ($scope, $http) {
		$http.get('data/events.json').success(function (data) {
			$scope.events = data;
		});
	});

