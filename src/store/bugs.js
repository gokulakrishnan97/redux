
let lastId = 0;

export function reducer(state =[], action){
  console.log(action);
  if(action.type === 'bugAdded'){
    let updatedState = [...state, {
      id: ++lastId,
      description: action.payload.description
    }]
    return updatedState;
  }
}