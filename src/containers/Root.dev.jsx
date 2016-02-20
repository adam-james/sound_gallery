import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import App from './App.jsx'; // this doesn't resolve without ext. WHY?

const Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store} >
        <div>
          <App />
          <DevTools />
        </div>
      </Provider>
    );
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
