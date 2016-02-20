import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from '../containers/DevTools';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', function() {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
