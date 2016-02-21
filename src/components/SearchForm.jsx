import React, { PropTypes } from 'react';
import classnames from 'classnames';

const SearchForm = React.createClass({
  render: function() {
    const { name, inputId, placeholder, defaultValue, prompt } = this.props;
    return (
      <form name={name} onSubmit={ e => this.handleSubmit(e) }>
        <input id={inputId}
               type='text'
               placeholder={placeholder}
               onChange={this.handleChange}
               ref='input'
               defaultValue={defaultValue} >
        </input>
        <button type='submit'>
          Submit
        </button>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    const inputValue = this.refs.input.value.trim();
    this.props.onFormSubmit(inputValue);
    this.refs.input.value = '';
  }
});

SearchForm.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default SearchForm;
