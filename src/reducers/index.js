import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import flickrResults from './flickrResults';
import soundCloudResults from './soundCloudResults';

const rootReducer = combineReducers({
  searchQuery,
  flickrResults,
  soundCloudResults
});

export default rootReducer;
