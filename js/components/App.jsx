import React from 'react';
import Cards from './Cards.jsx';

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
      <div className="page" data-page="cards">
        <img src="img/logo.png" width="320" alt="Planning poker" />
        <Cards cards={cards} />
      </div>
    );
  }
}

export default App;