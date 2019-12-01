const action = {
  openLoginPopup({commit},payload){
    commit("controlLoginPopup",true)
  },
  closeLoginPopup({commit},payload){
    commit("controlLoginPopup",false)
  },
  changeTransitionName({commit},payload){
    commit("changeTransitionName",payload)
  }
}
export default action
