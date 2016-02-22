import { combineReducers } from 'redux';
import searchQuery from './searchQuery';
import europeanaResults from './europeanaResults';

const rootReducer = combineReducers({
  searchQuery,
  europeanaResults
});

export default rootReducer;
