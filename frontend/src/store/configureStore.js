import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import axiosApi from "../axiosApi";
import usersReducer from "./reducers/usersReducer";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";
import developmentsReducer from "./reducers/developmentsReducer";
import rootSagas from "./rootSagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: usersReducer,
  developments: developmentsReducer
});

const persistedState = loadFromLocalStorage();
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware
];

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSagas);

store.subscribe(() => {
  saveToLocalStorage({
    users: store.getState().users,
  })
});


axiosApi.interceptors.request.use(config => {
  try {
    config.headers['Authorization'] = store.getState().users.user.token;
  } catch (e) {}

  return config;
});

export default store;