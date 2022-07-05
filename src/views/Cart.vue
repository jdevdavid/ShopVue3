<template>
  <div class="cart-page">
    <div class="about"></div>
<!--    <my-header/>-->
    <div class="main-cart">
<!--      <h2>Shopping Cart {{ $store.state.goods  }}</h2>-->
      <h2>Shopping Cart {{ getGoods.length  }} items </h2>

      <div class="shoppingCart">
        <div class="head-cart">
          <h4 style="flex-grow: 3;">Item</h4>
          <h4 style="flex-grow: 1;">Price</h4>
          <h4 style="flex-grow: 1;">Qty</h4>
          <h4 style="flex-grow: 1;">Total</h4>
          <h4 style="flex-grow: 0;"></h4>
        </div>

        <div v-for="good in getGoods"
             :key="good.id"
             class="list-item-cart"
        >
<!--          <div class="item-cart">-->
            <div class="item"
                 style="flex-grow: 2;">
              <img
                  width="80"
                  height="80"
                  :src="'assets/'+good.image"
                  alt="">
              <label style="">
                {{ good.title }} / {{ good.brandTitle }}
              </label>
            </div>

            <label style="flex-grow: 1;">
              {{ good.price }}
            </label>
            <div style="display:flex; justify-content: center;">
              <input
                  type="number"
                  style="width: 40px; height: 30px; margin: 0 10px;"
                  :value="good.amount"
                  @change="this.someChangeInput"
              >
              <!--                  v-model.number="qty"-->
<!--              :value="good.amount"  qty[good.id]  -->
            </div>
            <label style="flex-grow: 1;">
              {{ (good.price * good.amount).toFixed(2) }}
            </label>

            <my-button
                @click="this.delete(good.id)"
                style="flex-grow: 0;">
              Delete
            </my-button>
            <hr>
<!--          </div>-->
        </div>
      </div>

      <div class="total-block">
        <b>Subtotal: {{ subTotal }}</b>
        <my-button>Checkout</my-button>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyButton from "@/components/UI/MyButton";
import MyCards from "@/components/MyCards";
import MyInput from "@/components/UI/MyInput";

export default {
  name: 'Cart',
  components: {
    MyButton, MyCards, MyInput
  },
  data() {
    return {
      // qty: [],
      // subtotal: 0,
      // goods: this.$store.getters.goodsInCartStore
    }
  },
  computed: {
    getGoods(){
      return this.$store.getters.goodsInCartStore;
    },
    subTotal(){
      let CartStore = this.getGoods;
      let total = 0;
      for(let i = 0; i < CartStore.length ;i++){
        console.log(i);
        total += CartStore[i].price * CartStore[i].amount;
      }
      return total.toFixed(2);
    }
  },
  methods: {
    someChangeInput(){

    },
    delete(id){
      console.log('id - ', id);
      let CartStore = this.getGoods;
      console.log('CartStore - ', CartStore);
      CartStore.splice(0, id);
      console.log('CartStore2 - ', CartStore);

      this.$store.commit('decrementGoods');
      this.$store.commit('setGoodsInCartStore', CartStore);
      localStorage.setItem('goodsInCart', JSON.stringify(CartStore));
    }
  }
}
</script>

<style scoped>
.list-item-cart{
  display: flex;
  align-items: center;
}
.list-item-cart > * {
  /*display: flex;*/
  /*align-items: center;*/
  /*justify-content: center;*/
}
.item {
  display: flex;
  align-items: center;
}
.item-cart{
  /*height: 5em;*/
  /*line-height: 5em;*/
}
.head-cart{
  display: flex;
  flex-direction: row;
  text-align: center;
}
.head-cart > * {
  margin: 10px;
}
.main-cart{
  /*width: 1100px;*/
  /*margin-left: 10%;*/
  padding: 10px;

  display: flex;
  flex-direction: column;
  /*justify-content: space-between;*/
}
.cart-page {
  /*display: flex;*/
  margin: 0 10%;
}

.shoppingCart {
  display: flex;
  flex-direction: column;
  /*display: grid;*/
  /*  grid-template-rows: auto;*/
  /*grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;*/
  /*grid-template-columns: 15% 50% 10% 10% 10% 5%;*/
  /*grid-gap: 2vw;*/
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  /*-webkit-appearance: "Always Show Up/Down Arrows";*/
  opacity: 1;
}
.total-block{
  display:flex;
  flex-direction:column;
  align-items: flex-end;
}
.total-block > b{
  margin: 10px;
}
</style>