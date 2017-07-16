import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import rootReducer from './reducers';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(initialState) {
  if (process.env.NODE_ENV !== 'production') {
  	return createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension());
  } else {
  	return createStoreWithMiddleware(rootReducer, initialState);
  }
}
