import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage as storage } from 'react-native';

import reducers from './ducks';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['podcasts', 'app'],
};

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
