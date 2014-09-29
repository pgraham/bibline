/**
 * Data session to store conference session objects.
 */
"use strict";

var services = angular.module('biblineServices');

services.factory('sessionSrvc', function ($http) {

	var sessions;

	$http.get('data/sessions.json').success(function (data) {
		// Assign an ID to each session. The index of the session in the array is
		// used as the id. Normally this would be specified by a remote data source.
		for (var i = 0, len = data.length; i < len; i++) {
			data[i].id = i;
			data[i].registered = false;
		}

		// Sort the array by start time in reverse order
		data.sort(function (a, b) {
			var aSt = a.timeslot.startTime;
			var bSt = b.timeslot.startTime;

			if (aSt < bSt) {
				return 1;
			} else if (aSt > bSt) {
				return -1;
			} else {
				return 0;
			}
		});
		sessions = data;
	});

	return {
		getSession: function (id) {
			var sess = null;
			for (var i = 0, len = sessions.length; i < len; i++) {
				if (sessions[i].id === id) {
					sess = sessions[i];
					break;
				}
			}
			return sess;
		},
		getSessions: function () {
			return sessions;
		}
	};

});
