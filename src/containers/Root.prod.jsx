import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';

const Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store} >
        <h1>{`IN PRODUCTION`}</h1>
      </Provider>      
    );
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
