import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';

const Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store} >
        <div>
          <h1>{'IN DEVELOPMENT'}</h1>
          <p>{'We are working on it.'}</p>
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
