import React, { PropTypes } from 'react';
import SC from 'soundcloud';

const SoundCloud = React.createClass({
  componentDidUpdate: function() {
    if (this.props.url) {
      SC.oEmbed(this.props.url, {
        element: document.getElementById('soundCloudWidget')
      });
    }
  },

  render: function() {
    return <div id='soundCloudWidget'></div>;
  }
});

SoundCloud.propTypes = {
  url: PropTypes.string,
};

export default SoundCloud;
