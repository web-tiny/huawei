const getters = {
  type: state => state.home.type,
  position: state => state.position.position,
  currLocation: state => state.position.currLocation,
  timeResult: state => state.timePick.timeResult,
  isShow: state => state.timePick.isShow
}

export default getters
