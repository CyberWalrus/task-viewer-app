import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { reducer } from './store/store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};
const reducers = persistReducer(persistConfig, reducer);
const middlewares = [thunk];

const store = createStore(reducers, undefined, compose(applyMiddleware(...middlewares)));
const persistor = persistStore(store);

export { store, persistor };
