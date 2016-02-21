import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Prompt from './Prompt';

const SearchForm = React.createClass({
  render: function() {
    const { name, inputId, placeholder, defaultValue, prompt } = this.props;
    return (
      <form name={name} onSubmit={ e => this.handleSubmit(e) }>
        <p>{prompt}</p>

        <input id={inputId}
               type='text'
               placeholder={placeholder}
               onChange={this.handleChange}
               ref='input'
               defaultValue={defaultValue} >
        </input>
        <button type='submit'>Submit</button>
      </form>
    );
  },

  handleSubmit: function(e) {
    e.preventDefault();

    this.props.onFormSubmit(this.refs.input.value);
    this.refs.input.value = '';
  }
});

SearchForm.propTypes = {
  prompt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputId: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired
};

export default SearchForm;
