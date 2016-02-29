import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SearchForm, Gallery, SoundCloud } from '../components';
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
      <main className='container'>
        <h1 className='six columns'>Sound Gallery</h1>
        { searchQuery ?
            <section>
              <p>{`You want to see and hear ${searchQuery}!`}</p>
              <button onClick={e => dispatch(clearSearchQuery())}>Reset</button>
            </section>
            : <p>{`What do you want to see and hear?`}</p>
        }
        <SearchForm name='SearchForm'
                    inputId='searchFormInput'
                    defaultValue=''
                    onFormSubmit={ inputValue =>
                      dispatch(getMedia(inputValue))
                    }
                    />
        <hr style={{marginTop: '75px'}}></hr>
        <SoundCloud url={soundcloudUrl}/>
        <Gallery errorMessage={flickrResults.errorMessage}
                 imagesData={flickrResults.items} />
      </main>
    );
  }
});

function mapStateToProps(state) {
  const { searchQuery, flickrResults, soundcloudResults } = state;

  return { searchQuery, flickrResults, soundcloudResults };
}

export default connect(mapStateToProps)(App);
