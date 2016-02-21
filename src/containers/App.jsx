import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';

const App = React.createClass({
  render: function() {
    return (
      <main>
        <h1>Sound Gallery</h1>
        <SearchForm name='SearchForm'
                    inputId='searchFormInput'
                    prompt='What do you want to see and hear?'
                    defaultValue=''
                    onFormSubmit={ inputValue => console.log(inputValue) }
                    />
      </main>
    );
  }
});

export default App;
