var React = require('react');
var Autocomplete = require('./autocomplete.jsx');
var WeatherClock = require('./weather_clock.jsx');
var Tabs = require('./tabs.jsx');


var names = [
  "Samuel",
  "Byron",
  "Byrona",
  "Samson",
  "Athena",
  "Shakira",
  "Breakfast",
  "Sam"
].sort();

var tabObjects = [
  {title: "Byron", content: "Byron is a real chill bro."},
  {title: "Sam", content: "Sam is a less chill but still kinda chill bro."},
  {title: "Astrid", content: "Astrid should probably lay off the ice cream."}
];

var Widgets = React.createClass({
  render: function(){
    return (
      <div>
        <Autocomplete names={names}/>
        <WeatherClock/>
        <Tabs tabObjects={tabObjects}/>
      </div>
    );
  }
});

module.exports = Widgets;
