import { SET_SEARCH_QUERY, CLEAR_SEARCH_QUERY } from '../constants';
import loadFlickrImages from './loadFlickrImages';
import loadSound from './loadSound';

function setSearchQuery(searchQuery) {
  return {
    type: SET_SEARCH_QUERY,
    payload: {
      searchQuery
    }
  };
};

export function clearSearchQuery() {
  return {
    type: CLEAR_SEARCH_QUERY
  };
};

export function getMedia(searchQuery) {

  return function(dispatch, getState) {
    dispatch(setSearchQuery(searchQuery));

    dispatch(loadFlickrImages());

    dispatch(loadSound());
  };
}
