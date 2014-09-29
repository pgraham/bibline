/**
 * Data service to store conference session objects.
 */
"use strict";

var services = angular.module('biblineServices');

services.factory('sessionSrvc', function ($http) {

	var sessions;

	$http.get('data/sessions.json').success(function (data) {
		// A user's registered status would likely be loaded from a remote data
		// source along with the rest of the session data
		for (var i = 0, len = data.length; i < len; i++) {
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
