<template>
  <header class="header">
<!--    <img alt="logo" src="assets/images/logo.png">-->

    <div class="band">
      Clothes Market
    </div>
    getters - {{ $store.getters.goodsInCartStore }}

    <button class="basket" @click="">
      <img alt="basket" src="/assets/images/my/basket.png">
      <h3 style="font-size:150%;margin-top: -50px;">{{ basket_goods }}</h3>
<!--      margin-right: -33px;-->
    </button>
  </header>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    basket_goods:[Number]
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
/*Шапка*/
header {
  display: flex;
  justify-content: space-between;
  position: sticky; /* Липкое позиционирование */
  top: 0; /* Положение сверху */
  background-color: #2D5580;
  padding: 10px;
  z-index: 2;
  color: #F8F7FB;
}

.logo {
  margin-left: 2%;
  margin-top: 1%;
}

.band {
  margin-top: 1%;
  font-size: 18pt;
}

.basket {
  background-image: url('/assets/images/my/basket.png');
  width: 50px;
  height: 50px;
  padding: 0;
}

.basket > img {
  width: 40px;
  height: 40px;
}

</style>