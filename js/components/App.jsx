import React from 'react';
import Cards from './Cards.jsx';

class App extends React.Component {
  render () {
    return (
      <div className="page" data-page="home">
        <img src="img/logo.png" width="320" alt="Planning poker" />
      
        <Cards />
      </div>
    );
  }
}

export default App;