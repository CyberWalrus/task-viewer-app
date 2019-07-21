import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { reducer } from './store/store';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks', 'taskCount'],
};
const reducers = persistReducer(persistConfig, reducer);
const middlewares = [thunk];

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export { store, persistor };
