import { createStore,applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";
import reducers from './reducers/index'
const persistConfig = {
  key: 'authType',
  storage: storage,
};
const pReducer = persistReducer(persistConfig, reducers);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer, middleware);
const persistor = persistStore(store)
export { persistor, store };













  




// import { createStore } from "redux";
// import reducers from "./reducers/index";
// // import { persistStore, persistReducer } from 'redux-persist'


// const store = createStore(
//   reducers,
//   {},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;