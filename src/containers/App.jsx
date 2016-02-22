import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SearchForm, Gallery } from '../components';
import { getMedia, clearSearchQuery } from '../actions';

const App = React.createClass({
  render: function() {
    const { dispatch, searchQuery, flickrResults } = this.props;
    return (
      <main>
        <h1>Sound Gallery</h1>
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
        <Gallery errorMessage={flickrResults.errorMessage}
                 imagesData={flickrResults.items} />
      </main>
    );
  }
});

function mapStateToProps(state) {
  const { searchQuery, flickrResults } = state;

  return { searchQuery, flickrResults };
}

export default connect(mapStateToProps)(App);
