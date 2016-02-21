import { SET_SEARCH_QUERY, CLEAR_SEARCH_QUERY } from '../constants';

export function setSearchQuery(searchQuery) {
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
