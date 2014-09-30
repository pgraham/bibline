/**
 * Presenter data source.
 */
"use strict";

var services = angular.module('biblineServices');

services.factory('presenterSrvc', function ($http, $rootScope) {

	var presenters;

	$http.get('data/presenters.json').success(function (data) {
		presenters = data;

		$rootScope.$broadcast('presenterModel::update');
	});

	return {
		getPresenter: function (id) {
			if (!presenters) {
				return;
			}

			var presenter = null;
			for (var i = 0, len = presenters.length; i < len; i++) {
				if (presenters[i].id === id) {
					presenter = presenters[i];
					break;
				}
			}
			return presenter;
		}
	};
});
