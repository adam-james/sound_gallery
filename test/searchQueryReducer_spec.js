import searchQuery from '../src/reducers/searchQuery';
import { SET_SEARCH_QUERY, CLEAR_SEARCH_QUERY } from '../src/constants';
import { expect } from 'chai';

describe('searchQuery reducer', function() {

  it('SET_SEARCH_QUERY', function() {
    const state = '';
    const nextState = searchQuery(state, {
      type: SET_SEARCH_QUERY,
      payload: {
        searchQuery: 'test'
      }
    });

    expect(nextState).to.eql('test');
  });

  it('CLEAR_SEARCH_QUERY', function() {
    const state = 'test';
    const nextState = searchQuery(state, {
      type: CLEAR_SEARCH_QUERY
    });

    expect(nextState).to.eql('');
  });
});
