import {createStore} from "vuex";

export default createStore({
  state: () => ({
    vuexWork: "Vuex - Work",
    goods: 0,
    goodsInCartStore: []
    // goodsInCartStore: readLocalStorage
  }),
  getters: {
    doubleLikes(state) {
      return state.likes * 2
    },
    // readLocalStorage(state, commit) {
    //   // this.goodsInCartStore = localStorage.getItem("goodsInCart");
    //   // return localStorage.getItem("goodsInCart")
    //   const cart = localStorage.getItem("goodsInCart");
    //   commit('setGoodsInCartStore', cart);
    //   // mutations.setGoodsInCartStore(cart);
    //   console.log("cart - " + cart);
    //   return cart;
    // }
  },
  mutations: {
    setGoodsInCartStore(state, goodsInCartStore) {
      // JSON.stringify(CartStore)
      // state.goodsInCartStore = JSON.stringify(goodsInCartStore);
      state.goodsInCartStore = goodsInCartStore;
    },
    incrementLikes(state) {
      state.likes += 1
    },
    decrementLikes(state) {
      state.likes -= 1
    },
    incrementGoods(state) {
      state.goods += 1
    },
    decrementGoods(state) {
      state.goods -= 1
    }
  },
  actions: {

  },
  modules: {

  }
})