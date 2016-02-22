import {
  FLICKR_API_REQUEST,
  FLICKR_API_SUCCESS,
  FLICKR_API_FAILURE
} from '../constants';

export default function flickrResults(state = {
  areLoading: false,
  items: [],
  errorMessage: ''
}, action) {
  switch (action.type) {
    case FLICKR_API_REQUEST:
      return Object.assign({}, state, {
        areLoading: true
      });
    case FLICKR_API_SUCCESS:
      return Object.assign({}, state, {
        areLoading: false,
        errorMessage: '',
        items: [...action.payload.json.items]
      });
    case FLICKR_API_FAILURE:
      return Object.assign({}, state, {
        areLoading: false,
        errorMessage: action.payload.errorMessage
      });
    default:
      return state;
  }
};
