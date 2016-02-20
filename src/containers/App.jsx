import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Prompt from '../components/Prompt';

const App = React.createClass({
  render: function() {
    return (
      <Prompt />
    );
  }
});

export default App;
