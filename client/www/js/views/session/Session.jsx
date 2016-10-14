define(function (require) {

	var React = require('react');

	var

	return React.createClass({
		componentDidMount: function () {

		},
		render: function () {
			var presenters = this.props.presenters.map(function (presenterId) {
				var refId = 'presenter' + presenterId;
				return (<span className="presenter" ref={refId}/>);
			});

			return (
				<div className="session">
					<h2 className="session-title">{this.props.title}</h2>
					<div className="session-presenters">{}

				</div>
			)
		}
	});

});
