import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

const Root = React.createClass({
  render: function() {
    return (
      <Provider store={this.props.store} >
        <div>
          <App />
        </div>
      </Provider>
    );
  }
});

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
