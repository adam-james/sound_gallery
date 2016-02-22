import fetch from 'isomorphic-fetch';
import * as R from 'ramda';
import {
  EUROPEANA_API_ROOT,
  EUROPEANA_API_REQUEST,
  EUROPEANA_API_SUCCESS,
  EUROPEANA_API_FAILURE
} from '../constants';
import { EUROPEANA_API_KEY } from '../config';

function europeanaApiRequest() {
  return {
    type: EUROPEANA_API_REQUEST
  };
}

function europeanaApiSuccess(json) {
  return {
    type: EUROPEANA_API_SUCCESS,
    payload: {
      json
    }
  };
}

function europeanaApiFailure(errorMessage) {
  return {
    type: EUROPEANA_API_FAILURE,
    payload: {
      errorMessage
    }
  };
}

export default function loadImages() {

  return function(dispatch, getState) {
    const searchQuery = getState().searchQuery;

    const append = R.flip(R.concat);
    const wrap = (left, right) => (middle) => left + middle + right;
    const wrapWithQuotes = wrap('"', '"');

    const makeUrl = R.compose(
      R.concat(EUROPEANA_API_ROOT),
      append('&reusability=open&media=true'),
      R.concat(R.concat('?wskey=', EUROPEANA_API_KEY)),
      R.concat('&query='),
      wrapWithQuotes,
      R.replace(/\s+/g, '+')
    );

    const url = makeUrl(searchQuery);

    dispatch(europeanaApiRequest());

    console.log(url);

    return fetch(url)
        .then(function(response) {
          if (response.status >= 400) {
            return dispatch(europeanaApiFailure('Something went wrong!'));
          }
          if (response.success === false) {
            return dispatch(europeanaApiFailure('Something went wrong!'));
          }
          return response.json();
        })
        .then(function(data) {
          if (!data.items) {
            return dispatch(europeanaApiFailure('No results found!'));
          }
          dispatch(europeanaApiSuccess(data));
        });
  };
};
