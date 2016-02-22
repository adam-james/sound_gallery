import {
  EUROPEANA_API_REQUEST,
  EUROPEANA_API_SUCCESS,
  EUROPEANA_API_FAILURE
} from '../constants';

export default function europeanaResults(state = {
  areLoading: false,
  items: [],
  errorMessage: ''
}, action) {
  switch (action.type) {
    case EUROPEANA_API_REQUEST:
      return Object.assign({}, state, {
        areLoading: true
      });
    case EUROPEANA_API_SUCCESS:
      return Object.assign({}, state, {
        areLoading: false,
        errorMessage: '',
        items: [...action.payload.json.items]
      });
    case EUROPEANA_API_FAILURE:
      return Object.assign({}, state, {
        areLoading: false,
        errorMessage: action.payload.errorMessage
      });
    default:
      return state;
  }
};
