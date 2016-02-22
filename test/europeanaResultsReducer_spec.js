import europeanaResults from '../src/reducers/europeanaResults';
import {
  EUROPEANA_API_REQUEST,
  EUROPEANA_API_SUCCESS,
  EUROPEANA_API_FAILURE
} from '../src/constants';
import { expect } from 'chai';

describe('europeanaResults reducer', function() {

  it('EUROPEANA_API_REQUEST', function() {
    const state = {
      areLoading: false,
      errorMessage: '',
      items: []
    };
    const nextState = europeanaResults(state, {
      type: EUROPEANA_API_REQUEST
    });

    expect(nextState).to.eql({
      areLoading: true,
      errorMessage: '',
      items: []
    });
  });

  it('EUROPEANA_API_SUCCESS', function() {
    const state = {
      areLoading: true,
      errorMessage: '',
      items: []
    };
    const nextState = europeanaResults(state, {
      type: EUROPEANA_API_SUCCESS,
      payload: {
        json: [{test: 'data'}, {test: 'more data'}]
      }
    });

    expect(nextState).to.eql({
      areLoading: false,
      errorMessage: '',
      items: [{test: 'data'}, {test: 'more data'}]
    });
  });

  it('EUROPEANA_API_FAILURE', function() {
    const state = {
      areLoading: true,
      errorMessage: '',
      items: []
    };
    const nextState = europeanaResults(state, {
      type: EUROPEANA_API_FAILURE,
      payload: {
        errorMessage: 'Something went wrong!'
      }
    });

    expect(nextState).to.eql({
      areLoading: false,
      errorMessage: 'Something went wrong!',
      items: []
    });
  });
});
