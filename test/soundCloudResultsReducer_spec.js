import soundCloudResults from '../src/reducers/soundCloudResults';
import {
  SOUNDCLOUD_API_REQUEST,
  SOUNDCLOUD_API_SUCCESS,
  SOUNDCLOUD_API_FAILURE
} from '../src/constants';
import { expect } from 'chai';

describe('soundCloudResults reducer', function() {

  it('SOUNDCLOUD_API_REQUEST', function() {
    const state = {
      areLoading: false,
      errorMessage: '',
      items: []
    };
    const nextState = soundCloudResults(state, {
      type: SOUNDCLOUD_API_REQUEST
    });

    expect(nextState).to.eql({
      areLoading: true,
      errorMessage: '',
      items: []
    });
  });

  it('SOUNDCLOUD_API_SUCCESS', function() {
    const state = {
      areLoading: true,
      errorMessage: '',
      items: []
    };
    const nextState = soundCloudResults(state, {
      type: SOUNDCLOUD_API_SUCCESS,
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

  it('SOUNDCLOUD_API_FAILURE', function() {
    const state = {
      areLoading: true,
      errorMessage: '',
      items: []
    };
    const nextState = soundCloudResults(state, {
      type: SOUNDCLOUD_API_FAILURE,
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
