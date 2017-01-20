var axios = require('axios');

//http://api.openweathermap.org/data/2.5/weather?q=Atlanta&appid=f16d344feb967a4b379ba59dcd45a21c&units=imperial
//f16d344feb967a4b379ba59dcd45a21c


const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=f16d344feb967a4b379ba59dcd45a21c&units=imperial';

module.exports = {
	getTemp : function (location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
		return axios.get(requestUrl).then(function(res) {
			if (res.data.cod && res.data.message) {
				throw new Error("Unable to fetch weather for that location");
			} else {
				return res.data.main.temp;
			}
		}, function(res) {
			throw new Error('Error, not found city');
		});
	}
}