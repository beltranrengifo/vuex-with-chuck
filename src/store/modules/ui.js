const state = () => ({
  modalContent: null,
  // currentTheme: 'light', TODO THEME SWITCHER
})

const getters = {}

const actions = {
  handleModalContent({ commit }, { content }) {
    commit('SET_MODAL_CONTENT', content)
  },
}

const mutations = {
  SET_MODAL_CONTENT(state, content) {
    state.modalContent = content
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
