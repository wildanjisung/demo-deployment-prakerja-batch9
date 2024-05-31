const state = () => ({
  angka: 0
});

const mutations = {
  setAngka(state, params) {
    state.angka = params;
  }
};

const actions = {
  changeAngkaValue(store, params) {
    if (params > 0) {
      store.commit('setAngka', params)
    }
  }
};

export default {
  state, mutations, actions
}