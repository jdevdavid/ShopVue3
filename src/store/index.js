import {createStore} from "vuex";

export default createStore({
  state: () => ({
    goodsInCartStore: JSON.parse(localStorage.getItem("goodsInCart")),
    goodsAmount: JSON.parse(localStorage.getItem("goodsAmount")),
  }),
  getters: {
    goodsAmount(state){
      return state.goodsAmount;
    },
    goodsInCartStore(state){
      return state.goodsInCartStore;
    },
    // goodsLength(state){
    //   return state.goodsInCartStore.length;
    // },
  },
  mutations: {
    setGoodsInCartStore(state, goodsInCartStore) {
      state.goodsInCartStore = goodsInCartStore;
    },
    incrementGoods(state) {
      state.goodsAmount += 1;
      localStorage.setItem('goodsAmount', JSON.stringify(state.goodsAmount));
    },
    decrementGoods(state) {
      state.goodsAmount -= 1;
      localStorage.setItem('goodsAmount', JSON.stringify(state.goodsAmount));
    }
  },
  actions: {

  },
  modules: {

  }
})