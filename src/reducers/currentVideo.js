import Redux from 'redux';

// I - a state and an action
// O - a new state
// C - none
// E - none

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  // The 'action' parameter above will be the action object created in currentVideo.js, which is:
  // { type: 'CHANGE_VIDEO', v`ideo: video }
  switch(action.type) {
    case 'CHANGE_VIDEO':
    return  action.video
    default:
    return state;
  }
}

export default currentVideoReducer;


// var changeVideo = (video) => {

//   return { type: 'CHANGE_VIDEO', video: video }
// }
