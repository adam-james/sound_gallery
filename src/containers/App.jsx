import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Gallery, SoundCloud } from '../components';
import { getMedia, clearSearchQuery } from '../actions';

const App = React.createClass({
  render: function() {
    const { dispatch, searchQuery, flickrResults, soundcloudResults } = this.props;

    let soundcloudUrl;
    if (soundcloudResults.items.length > 0) {
      soundcloudUrl = soundcloudResults.items[0].permalink_url;
    } else {
      soundcloudUrl = '';
    }

    return (
      <div className='container'>
        <Header onSearch={ inputValue =>
          dispatch(getMedia(inputValue))
        }/>
        <main>
          <SoundCloud url={soundcloudUrl} />
          <Gallery errorMessage={flickrResults.errorMessage}
                   imagesData={flickrResults.items} />
        </main>
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { searchQuery, flickrResults, soundcloudResults } = state;

  return { searchQuery, flickrResults, soundcloudResults };
}

export default connect(mapStateToProps)(App);
