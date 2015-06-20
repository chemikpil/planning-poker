import React from 'react';
import App from './components/App.jsx';

var data = ['XS', 'S', 'M', 'L', 'XL', '?'];

React.render(
  <App data={data} />,
  document.body
);