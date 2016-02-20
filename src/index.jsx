import React from 'react';
import { render } from 'react-dom';

const Greeting = React.createClass({
  render: function() {
    return <h1>{`Hello, it's me...`}</h1>;
  }
});

render(
  <Greeting />,
  document.getElementById('root')
);
