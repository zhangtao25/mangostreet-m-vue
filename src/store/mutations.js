const mutation = {
  controlLoginPopup(state,payload){
    state.isShowLogin = payload
  },
  changeTransitionName(state,payload){
    state.transitionName = payload
  }
}

export default mutation
