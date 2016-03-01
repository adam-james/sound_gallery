import SC from 'soundcloud';
import * as R from 'ramda';
import {
  SOUNDCLOUD_API_REQUEST,
  SOUNDCLOUD_API_SUCCESS,
  SOUNDCLOUD_API_FAILURE,
} from '../constants';

function soundCloudApiRequest() {
  return {
    type: SOUNDCLOUD_API_REQUEST
  };
}

function soundCloudApiSuccess(json) {
  return {
    type: SOUNDCLOUD_API_SUCCESS,
    payload: {
      json
    }
  };
}

function soundCloudApiFailure(errorMessage) {
  return {
    type: SOUNDCLOUD_API_FAILURE,
    payload: {
      errorMessage
    }
  };
}

export default function loadSound() {

  return function(dispatch, getState) {
    const searchQuery = getState().searchQuery;
    const getFirstWord = R.compose(
      R.head,
      R.split(' ')
    );
    const q = getFirstWord(searchQuery);

    dispatch(soundCloudApiRequest());

    return SC.get('/tracks', {
      q
    }).then(function(tracks) {
      if (tracks.length === 0) {
        return dispatch(soundCloudApiFailure('No music results found!'));
      }
      dispatch(soundCloudApiSuccess(tracks));
    }).catch(function(err) {
      console.log(err);
      dispatch(soundCloudApiFailure('Something went wrong with the sound!'));
    });
  };
};
