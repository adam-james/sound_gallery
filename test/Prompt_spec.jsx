import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithTag
} from 'react-addons-test-utils';
import Prompt from '../src/components/Prompt';
import { expect } from 'chai';

describe('Prompt Component', function() {

  it('renders prompt message', function() {
    const component = renderIntoDocument(
      <Prompt />
    );
    const prompt = findRenderedDOMComponentWithTag(component, 'h1');

    expect(prompt.textContent).to.equal('What do you want to see and hear?');
  });
});
