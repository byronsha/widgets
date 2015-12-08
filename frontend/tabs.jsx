var React = require('react');

var Tabs = React.createClass({
  getInitialState: function(){
    return { currentTabIndex: 0 };
  },
  selectTab: function(idx, e){
    e.preventDefault();
    this.setState({ currentTabIndex: idx});
  },
  render: function(){
    var that = this;
    var tabStyle = {
      listStyleType: 'none',
      color: 'darkblue'
    }
    return (
      <div>
        <ul style={tabStyle}>
          {
            this.props.tabObjects.map(function(tabObject, idx){
              if (idx === this.state.currentTabIndex) {
                return <li key={idx} onClick={that.selectTab.bind(that, idx)}><b>{tabObject.title}</b></li>;
              } else {
                return <li key={idx} onClick={that.selectTab.bind(that, idx)}>{tabObject.title}</li>;
              }
            }.bind(this))
          }
        </ul>
        <article>
          <h4>Content:</h4>
          {this.props.tabObjects[this.state.currentTabIndex].content}
        </article>
      </div>
    );
  }
});

module.exports = Tabs;
