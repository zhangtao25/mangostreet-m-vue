const action = {
  openLoginPopup({commit},payload){
    commit("controlLoginPopup",true)
  },
  closeLoginPopup({commit},payload){
    commit("controlLoginPopup",false)
  }
}
export default action
