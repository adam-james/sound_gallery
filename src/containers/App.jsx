import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, Footer, Gallery, SoundCloud } from '../components';
import { getMedia, clearSearchQuery } from '../actions';

const App = React.createClass({
  render: function() {
    const { dispatch, searchQuery, flickrResults, soundcloudResults } = this.props;

    return (
      <div className='container'>
        <Header onSearch={ inputValue =>
          dispatch(getMedia(inputValue))
        }/>
        <main>
          <SoundCloud url={soundcloudResults.trackUrl} />
          <Gallery errorMessage={flickrResults.errorMessage}
                   imagesData={flickrResults.items} />
        </main>
        <Footer />
      </div>
    );
  }
});

function mapStateToProps(state) {
  const { searchQuery, flickrResults, soundcloudResults } = state;

  return { searchQuery, flickrResults, soundcloudResults };
}

export default connect(mapStateToProps)(App);
