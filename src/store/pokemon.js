import axios from 'axios';

const state = () => ({
  list: []
});

const mutations = {
  setList(state, params) {
    state.list = params;
  }
};

const actions = {
  fetchPokemon(store) {
    axios.get('https://pokeapi.co/api/v2/pokemon', {
      params: {
        limit: 5,
        offset: store.state.list.length
      }
    }).then((response) => {
      store.commit("setList", [
        ...store.state.list,
        ...response.data.results
      ])
    })
  }
};

export default {
  state, mutations, actions
}