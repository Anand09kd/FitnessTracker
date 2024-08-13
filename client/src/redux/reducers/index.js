// src/reducers/index.js
import { combineReducers } from 'redux';
import someReducer from './someReducer';

const rootReducer = combineReducers({
  someReducer, // Add your reducers here
});

export default rootReducer;
