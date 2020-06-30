import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'project',
  initialState: [],
  reducers:{
    createProject: (projects, action) => {
      console.log(action)
      projects.push({
        id: ++lastId,
        name: action.payload.name
      })
    },
    updateProject: (projects, action) => {
      const index = projects.findIndex( project => project.id === action.payload.id)
      projects[index].name = action.payload.name;
    },
    deleteProject: (projects, action) => {
      const index = projects.findIndex( project => project.id === action.payload.id)
      projects.splice(index, 1);
    }
  }
})


export const { createProject, updateProject, deleteProject} = slice.actions;

export default slice.reducer;