angular.module('biblineFilters', [])
	.filter('sessionTime', function factory() {

		// TODO Times should be assumed to be defined in UTC and converted to local
		// time
		return function (input) {
			var now = moment();
			var start = moment(input.startTime);
			var end = moment(input.endTime);

			if (now.isAfter(start) && now.isBefore(end)) {
				return 'now';
			} else {
				return start.format('h:mm A');
			}
		};

	});
