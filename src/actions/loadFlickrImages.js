import { getJSON } from 'jquery';
import * as R from 'ramda';
import {
  FLICKR_BASE_URL,
  FLICKR_API_REQUEST,
  FLICKR_API_SUCCESS,
  FLICKR_API_FAILURE
} from '../constants';

function flickrApiRequest() {
  return {
    type: FLICKR_API_REQUEST
  };
}

function flickrApiSuccess(json) {
  return {
    type: FLICKR_API_SUCCESS,
    payload: {
      json
    }
  };
}

function flickrApiFailure(errorMessage) {
  return {
    type: FLICKR_API_FAILURE,
    payload: {
      errorMessage
    }
  };
}

export default function loadFlickrImages() {

  return function(dispatch, getState) {
    const searchQuery = getState().searchQuery;

    const append = R.flip(R.concat);
    const wrap = (left, right) => (middle) => left + middle + right;
    const wrapWithQuotes = wrap('"', '"');

    const formatQueryString = R.compose(
      append('&format=json&jsoncallback=?'),
      R.concat('?tags='),
      wrapWithQuotes,
      R.replace(/\s+/g, '+')
    );

    const queryString = formatQueryString(searchQuery);
    const url = R.concat(FLICKR_BASE_URL, queryString);

    dispatch(flickrApiRequest());

    console.log(url);

    return getJSON(url, function(data) {
      if (data.items.length < 1) {
        return dispatch(flickrApiFailure('No results found!'));
      }
      dispatch(flickrApiSuccess(data));
    });
    
  };
};
