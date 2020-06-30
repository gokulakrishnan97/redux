
import { createAction, createReducer } from '@reduxjs/toolkit';
let lastId = 0;

export const bugAdd = createAction('bugAdded');
export const bugDelete = createAction('bugDeleted');
export const bugUpdate = createAction('bugUpdated');

export default createReducer([], {
  [bugAdd.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false
    })
  },
  [bugDelete.type]: (bugs, action) => {
    const index = bugs.findIndex( bug => bug.id === action.payload.id);
    bugs.splice(index, 1)
  },
  [bugUpdate.type]: (bugs, action) =>{
    const index = bugs.findIndex( bug => bug.id === action.payload.id);
    bugs[index].resolved = true;
  }
})



// export function bugAdded(description){
//   return{
//     type: 'bugAdded',
//     payload: {
//       description: description
//     }
//   }
// }


// export function reducer(state =[], action){
//   if(action.type === 'bugAdded'){
//     let updatedState = [...state, {
//       id: ++lastId,
//       description: action.payload.description
//     }]
//     return updatedState;
//   }
// }