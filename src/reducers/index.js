import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import flickrResults from './flickrResults';
import soundcloudResults from './soundCloudResults';

const rootReducer = combineReducers({
  searchQuery,
  flickrResults,
  soundcloudResults
});

export default rootReducer;
