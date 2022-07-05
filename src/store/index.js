import {createStore} from "vuex";

export default createStore({
  state: () => ({
    // goodsInCartStore: [],
    goodsInCartStore: JSON.parse(localStorage.getItem("goodsInCart")),
    goods: JSON.parse(localStorage.getItem("goods")),
  }),
  getters: {
    goods(state){
      return state.goods;
    },
    goodsInCartStore(state){
      return state.goodsInCartStore;
    },
    goodsLength(state){
      return state.goodsInCartStore.length;
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