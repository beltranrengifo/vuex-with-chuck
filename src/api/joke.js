import http from './http'
import logError from './logger'

export const JokeService = {
  _urls({ param = '' } = {}) {
    return {
      CATEGORIES: '/categories',
      RANDOM: '/random',
      RANDOM_BY_CAT: `/random?category=${param}`,
      SEARCH: `/search?query=${param}`,
    }
  },

  fetch({ url, method = 'GET', param = '' }) {
    return http({
      url: this._urls({ param })[url],
      method,
    })
      .then(({ data }) => data)
      .catch(`ERROR :: ${url} :: AXIOS CALL`, logError)
  },
}
