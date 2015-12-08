var React = require('react');

var Autocomplete = React.createClass({
  getInitialState: function(){
    return { searchString: "" };
  },
  handleChange: function(e){
    this.setState({ searchString: e.target.value });
  },
  selectSubString: function(e){
    e.preventDefault();
    this.setState({ searchString: e.target.parentNode.firstChild.innerHTML });
  },
  render: function(){
    var that = this;
    var searchResults = [];
    for (var i = 0; i < this.props.names.length; i++){
      if (this.props.names[i].toLowerCase().match(this.state.searchString.toLowerCase())){
        if (this.state.searchString.length > 0){
          searchResults.push(this.props.names[i]);
        }
      }
    }
    return (
      <div>
        <input
          type="text"
          value={this.state.searchString}
          onChange={this.handleChange}/>
        <ul>
          {
            searchResults.map(function(searchResult, idx){
              return <li key={idx}>
                {searchResult}
                <button onClick={that.selectSubString} subStringValue={searchResult}>Choose me!</button>
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = Autocomplete;
