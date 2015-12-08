var React = require('react');
var ReactDOM = require('react-dom');
var Widgets = require('./widgets.jsx');
// var Autocomplete = require('./autocomplete.jsx');

// var MyComponent = React.createClass({
//   render: function () {
//     return(
//       <div>Hello World</div>
//     );
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Widgets/>, document.getElementById('root'));
});
