import { JokeService } from '@/api/joke'

const state = () => ({
  categories: null,
  currentJoke: null,
  error: null,
})

const getters = {}

const actions = {
  //handleApiError
  //getJokesCategories
  //getJokeByCategory
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true,
}
