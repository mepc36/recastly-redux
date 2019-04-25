//TODO:  Return some action object to change the currently playing video.
//I: Object
//O:action object {type: video, payload: data}
//C: none
//E: none

var changeVideo = (video) => {

  return { type: 'CHANGE_VIDEO', video: video }
}

export default changeVideo;
