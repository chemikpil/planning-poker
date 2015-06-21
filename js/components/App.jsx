import React from 'react';
import Cards from './Cards.jsx';
import Settings from './Settings.jsx';

class App extends React.Component {
  constructor (props) {
    super();
    this.state = {
      type: props.data.type
    };
  }
  
  render () {
    var cards = this.props.data.cards[this.state.type];
    return (
      <div className="app">
        <div className="page" data-page="cards">
          <img src="img/logo.png" width="320" alt="Planning poker" />
          <Cards cards={cards} />
        </div>
        <Settings />
      </div>
    );
  }
}

export default App;