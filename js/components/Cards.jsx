import React from 'react';
import Card from './Card.jsx';

class Cards extends React.Component {
  render () {
    var cards = this.props.cards.map(function (card) {
      return (
        <Card text={card} />
      )
    });
    
    return (
      <ul className="cards">
        {cards}
      </ul>
    );
  }
}

export default Cards;