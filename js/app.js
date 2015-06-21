import React from 'react';
import App from './components/App.jsx';

var config = {
  "type": "tshirt",
  "cards": {
    "tshirt": ['XS', 'S', 'M', 'L', 'XL', '?'],
    "fibonacci": ['0', '0.5', '1', '2', '3', '5', '8', '13', '21', '40', '100', '?']
  }
}

React.render(
  <App data={config} />,
  document.body
);