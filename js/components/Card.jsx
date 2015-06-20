import React from 'react';

class Card extends React.Component {
  render () {
    return (
      <li className="card">
        <span>{this.props.text}</span>
      </li>
    );
  }
}

export default Card;