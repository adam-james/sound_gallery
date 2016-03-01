import React, { PropTypes } from 'react';
import SearchForm from './SearchForm.jsx';

const Header = React.createClass({
  handleSearch: function(inputValue) {
    this.props.onSearch(inputValue);
  },

  render: function() {
    return (
      <header id='header' className='row'>
        <h1 id='title' className='six columns'>Sound Gallery</h1>
        <SearchForm id='search-form'
                    className='six columns'
                    name='SearchForm'
                    prompt='What do you want to see and hear?'
                    inputId='searchFormInput'
                    defaultValue=''
                    onFormSubmit={this.handleSearch} />
      </header>
    );
  }
});

Header.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Header;
