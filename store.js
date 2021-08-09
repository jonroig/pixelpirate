import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pixelPirateApi from './api/pixelpirate-api';
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers(pixelPirateApi.reducers);
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware()),
  applyMiddleware(thunk)
);

export default store;