import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import { setSearchQuery, clearSearchQuery } from '../actions';

const App = React.createClass({
  render: function() {
    const { dispatch, searchQuery } = this.props;
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
                      dispatch(setSearchQuery(inputValue))
                    }
                    />
      </main>
    );
  }
});

function mapStateToProps(state) {
  const { searchQuery } = state;

  return { searchQuery };
}

export default connect(mapStateToProps)(App);
