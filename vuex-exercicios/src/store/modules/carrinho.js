export default {
  namespaced: true,
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos.map(produto => produto.quantidade * produto.preco)
             .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    // payload representa o produto
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    }
  },
  actions: {
    adicionarProduto(context, payload){
      setTimeout(() => {
        context.commit('adicionarProduto', payload);
      }, 1000);
    }
    // adicionarProduto: {
    //   root: true,
    //   handler({ commit }, payload) {
    //     setTimeout(() => {
    //       commit('adicionarProduto', payload)
    //     }, 1000);
    //   }
    // }
  }
}