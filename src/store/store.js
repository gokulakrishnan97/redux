//import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createReducer  from './bugs';
import reducer from './projects';
console.log(createReducer)
console.log(reducer);



//const store = createStore(reducer);
const store = configureStore({
  reducer
})
export default store;