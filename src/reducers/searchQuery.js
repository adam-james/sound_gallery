import { SET_SEARCH_QUERY, CLEAR_SEARCH_QUERY } from '../constants';

export default function searchQuery(state = '', action) {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return action.payload.searchQuery;
    case CLEAR_SEARCH_QUERY:
      return '';
    default:
      return state;
  }
};
