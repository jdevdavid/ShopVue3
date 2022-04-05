<template>
  <div class="cart-page">
    <div class="about"></div>
<!--    <my-header/>-->
    <main-cart>
      <h2>Shopping Cart {{ $store.state.goods  }}</h2>

      <div class="shoppingCart">
        <h4></h4>
        <h4>Item</h4>
        <h4>Price</h4>
        <h4>Qty</h4>
        <h4>Total</h4><h4></h4>

        <img src="" alt="">
        <label>{{ brand }} / {{ Item }}</label>
        <label>$88</label>
<!--    <input type="number" style="width: 40px; height: 30px;">-->
        <my-input></my-input>
        <label>$88</label>
        <my-button></my-button>

        Subtotal: {{ subtotal }}
      </div>

      <my-button style="right: 10%;">Checkout</my-button>
    </main-cart>
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
}
</script>

<style scoped>
main-cart{
  width: 1100px;
  margin-left: 10%;
  padding: 10px;
  /*display: flex;*/
  /*flex-direction: row;*/
  /*justify-content: space-between;*/
}
.cart-page {
  /*display: flex;*/
  margin: 0 10%;
}

.shoppingCart {
  display: grid;
  grid-template-rows: auto;
  /*grid-template-columns: 1fr 3fr 1fr 1fr 1fr 1fr;*/
  grid-template-columns: 15% 50% 10% 10% 10% 5%;

  /*grid-gap: 2vw;*/
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  /*-webkit-appearance: "Always Show Up/Down Arrows";*/
  opacity: 1;
}
</style>