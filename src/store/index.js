import Vue from 'vue'
import Vuex from 'vuex'
import about from './about'
import privacy from './privacy'
import pokemon from './pokemon'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

const persistedDataState = createPersistedState({
  path: ["about", "privacy"]
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    about: {
      namespaced: true,
      ...about
    },
    privacy: {
      namespaced: true,
      ...privacy
    },
    pokemon: {
      namespaced: true,
      ...pokemon
    },
  }
})
