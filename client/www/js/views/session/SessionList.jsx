define(function (require) {

	var React = require('react');
	var Session = require('jsx!views/session/Session.jsx');

	var load = require('util/load');

	return React.createClass({

		getInitialState: function () {
			return { sessions: [] };
		},

		componentDidMount: function () {
			load('data/sessions.json')
			.then(function (data) {
				this.setState(data)
			});
		},

		render: function () {
			var sessions = this.state.sessions.map(function (session) {
				return (<Session {...session}/>);
			});

			return (
				<div className="session-list-page">
					<div className="session-list">
						{sessions}
					</div>

					<div className="current-date">
					</div>
				</div>
			);
		}
	});

});
