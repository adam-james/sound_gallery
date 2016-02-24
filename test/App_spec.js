import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import App from '../src/containers/App';
import SearchForm from '../src/components/SearchForm';
import { expect } from 'chai';

describe('App Container', function() {

  it('renders prompt when no searchQuery', function() {
    const store = {
      dispatch: function() {},
      subscribe: function() {},
      getState: function() {
        return {
          searchQuery: ''
        };
      }
    };
    const component = renderIntoDocument(
      <App store={store} />
    );
    const prompt = findRenderedDOMComponentWithTag(component, 'p');

    expect(prompt.textContent).to.equal('What do you want to see and hear?')
  });

  it('renders searchQuery message when searchQuery', function() {
    const store = {
      dispatch: function() {},
      subscribe: function() {},
      getState: function() {
        return {
          searchQuery: 'test'
        };
      }
    };
    const component = renderIntoDocument(
      <App store={store} />
    );
    const prompt = findRenderedDOMComponentWithTag(component, 'p');

    expect(prompt.textContent).to.equal('You want to see and hear test!')
  });
});
