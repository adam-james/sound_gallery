import React, { PropTypes } from 'react';
import SC from 'soundcloud';

const SoundCloud = React.createClass({
  render: function() {
    if (this.props.url) {
      SC.oEmbed(this.props.url, {
        element: document.getElementById('soundCloudWidget')
      });
    }
    return (
      <div id='soundCloudWidget'></div>
    );
  }
});

SoundCloud.propTypes = {
  url: PropTypes.string
};

export default SoundCloud;
