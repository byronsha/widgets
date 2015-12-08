var React = require('react');

var WeatherClock = React.createClass({
  getInitialState: function(){
    return { time: new Date(), weather: "", temperature: "" };
  },
  componentDidMount: function(){
    this.timer = setInterval(this.tick, 1000);
    navigator.geolocation.getCurrentPosition(function(position){
      this.getWeatherData(position.coords.longitude, position.coords.latitude);
    }.bind(this));
  },
  getWeatherData: function(long, lat){
    var apiKey = "645c5d39c7603f17e23fcaffcea1a3c1";
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=" + apiKey;
    var myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function(){
      if (myRequest.readyState == XMLHttpRequest.DONE){
        if(myRequest.status == 200){
          var weatherArray = [];
          var weatherResponse = JSON.parse(myRequest.responseText).weather;
          for (var i = 0; i < weatherResponse.length; i++) {
            weatherArray.push(weatherResponse[i].main);
          }
          this.setState({ weather: weatherArray.join(", ") });

          var weatherTemperature = JSON.parse(myRequest.responseText).main.temp;
          this.setState({ temperature: weatherTemperature + " K" });

        } else if (myRequest.status == 400){
          alert('There was a 400 error');
        } else {
          alert('Something else other than 200 was returned');
        }
      }
    }.bind(this);

    myRequest.open('GET', url, true);
    myRequest.send();
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  tick: function(){
    this.setState({ time: new Date() });
  },
  render: function(){
    var ulStyle = {
      listStyleType: 'none',
      color: 'darkgreen'
    };
    return(
      <div>
        <ul style={ulStyle}>
          <li>Time: {this.state.time.toTimeString().slice(0,9)}</li>
          <li>Weather: {this.state.weather}</li>
          <li>Temperature: {this.state.temperature}</li>
        </ul>
      </div>
    );
  }
});

module.exports = WeatherClock;
