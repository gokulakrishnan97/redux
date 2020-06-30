// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import 'node_modules/bootstrap/dist/css'
import store from './store/store';
//import { bugAdd, bugDelete, bugUpdate } from './store/bugs';
import { createProject, updateProject, deleteProject} from './store/projects';

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
})

// store.dispatch(bugAdd({description: 'bug1'}));
// store.dispatch(bugAdd({description: 'bug2'}));
// store.dispatch(bugAdd({description: 'bug3'}));
// store.dispatch(bugAdd({description: 'bug4'}));
// store.dispatch(bugUpdate({id:3}));
// store.dispatch(bugDelete({id:2}));

store.dispatch(createProject({name: 'project1'}));
store.dispatch(createProject({name: 'project2'}));
store.dispatch(createProject({name: 'project3'}));
store.dispatch(updateProject({id:3, name:'updated project'}));
store.dispatch(deleteProject({id:2}));

console.log(store.getState());

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
