import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

// Redux-thunk looks at every action that passes through the system, and if it’s a function, it calls that function.
// Redux-thunk converts the "action-objects" of React to "action-functions" that can be called.



// I - 
// O -
// C -
// E - 

const store = createStore(
    rootReducer,
    exampleVideoData,
    applyMiddleware(thunk)
);
  
export default store;