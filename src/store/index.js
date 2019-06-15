import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import handleLoadQuakes from './sagas';

import {
  cheapFlights,
  businessFlights
} from './reducer';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  cheapFlights,
  businessFlights
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(handleLoadQuakes);

export default store;