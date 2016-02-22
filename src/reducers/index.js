import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import flickrResults from './flickrResults';

const rootReducer = combineReducers({
  searchQuery,
  flickrResults
});

export default rootReducer;
