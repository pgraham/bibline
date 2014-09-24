/**
 * Data session to store conference session objects.
 */
"use strict";

var services = angular.module('biblineServices');

services.factory('sessionSrvc', [ '$http', function ($http) {

	var sessions;

	$http.get('data/events.json').success(function (data) {
		// TODO Sort events by timeslot.startTime in reverse order
		var indexed = {};
		angular.forEach(data, function (val, idx) {
			val.id = idx;
			indexed[idx] = val;
		})
		sessions = indexed;
	});

	return {
		setSessions: function (s) {
			sessions = s;
		},
		getSessions: function () {
			return sessions;
		},
		getSession: function (id) {
			return sessions[id];
		}
	};

} ]);
