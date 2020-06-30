import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createReducer  from './bugs';


//const store = createStore(reducer);
const store = configureStore({
  reducer: createReducer
})
export default store;