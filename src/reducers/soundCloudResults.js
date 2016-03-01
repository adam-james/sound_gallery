import {
  SOUNDCLOUD_API_REQUEST,
  SOUNDCLOUD_API_SUCCESS,
  SOUNDCLOUD_API_FAILURE,
} from '../constants';

export default function soundcloudResults(state = {
  trackUrl: '',
  areLoading: false,
  items: [],
  errorMessage: ''
}, action) {
  switch(action.type) {
    case SOUNDCLOUD_API_REQUEST:
      return Object.assign({}, state, {
        areLoading: true
      });
    case SOUNDCLOUD_API_SUCCESS:
      return Object.assign({}, state, {
        trackUrl: action.payload.json[0].permalink_url,
        areLoading: false,
        errorMessage: '',
        items: action.payload.json
      });
    case SOUNDCLOUD_API_FAILURE:
      return Object.assign({}, state, {
        areLoading: false,
        errorMessage: action.payload.errorMessage
      });
    default:
      return state;
  }
};
