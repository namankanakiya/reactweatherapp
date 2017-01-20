var React = require('react');

var About = (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p>This is a weather application build using the React framework</p>
			<p>Some of the tools used:</p>
			<ul>
				<li>
					<a href="https://facebook.github.io/react">React</a> JS Framework used.
				</li>
				<li>
					<a href="http://openweathermap.org">Weather service used</a> - Open Weather Map
				</li>
			</ul>
		</div>
	);
}

module.exports = About;