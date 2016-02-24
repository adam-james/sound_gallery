import React, { PropTypes } from 'react';
import SC from 'soundcloud';

const SoundCloud = React.createClass({
  componentDidMount: function() {
    SC.get('/tracks', {
      q: 'buskers', license: 'cc-by-sa'
    }).then(function(tracks) {
      console.log(tracks);
    });
    SC.oEmbed(this.props.url, {
      element: document.getElementById('soundCloudWidget')
    });
  },

  render: function() {
    return (
      <div id='soundCloudWidget'></div>
    );
  }
});

SoundCloud.propTypes = {
  url: PropTypes.string
};

export default SoundCloud;
