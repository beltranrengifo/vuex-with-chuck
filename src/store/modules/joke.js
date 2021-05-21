import { JokeService } from '@/api/joke'

const state = () => ({
  categories: null,
  currentJoke: null,
  error: null,
  // userJokeCount: 0, TODO CLICKED JOKES COUNT
})

const getters = {}

const actions = {
  async getJokesCategories({ commit }) {
    const categories = await JokeService.fetch({ url: 'CATEGORIES' })

    commit('SET_CATEGORIES', categories)
  },

  async getJokeByCategory({ commit }, { category }) {
    const joke = await JokeService.fetch({
      url: 'RANDOM_BY_CAT',
      param: category,
    })

    commit('SET_CURRENT_JOKE', joke)
  },

  handleApiError({ commit }, error) {
    commit('SET_API_ERROR', error)
  },
}

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },

  SET_API_ERROR(state, error) {
    state.error = error
  },

  SET_CURRENT_JOKE(state, joke) {
    state.currentJoke = joke
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
