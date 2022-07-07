<!-- Баги -->
<!--  [х] Routing - проблема перехода с Cart на Catalog -->
<!--  [x] нет данных в price    -->
<!--  [x] не сохраняются данные commitом    -->
<!--  [x] не сохраняются данные в localstorage    -->
<!--  [х] При удалении элемента из корзины удаляются все товары или некоторые -->
<!--  [х] При покупке Два одинаковых товара должны схлопываться в корзине в одну позицию -->
<!--  [x]  Число позиций в корзине должно всегда показываться в углу   -->

<!--  [ ] Возможно что то не так в Promise.all -->
<!--  [ ] иногда при переходах зависает приложение    -->

<!--  [ ] В корзине нужен $ в столбцах Price и Total и subtotal  -->
<!--  [ ] При изменении Qty не пересчитывается total и subtotal    -->
<!--  [ ] При увеличении(уменьшении) qty товара в корзине менять    -->
<!--  значение в хранилище -->
<!--  [ ]     -->
<!--  [ ]     -->
<template>
  <div id="nav">
    <router-link to="/">Catalog</router-link> |
    <router-link to="/cart">Cart</router-link>
  </div>
  <my-header :basket_goods="this.getGoodsAmount"></my-header>
  <router-view/>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
export default {
  components: {
    MyHeader
  },
  computed: {
    getGoodsAmount(){
      return this.$store.getters.goodsAmount ?
          this.$store.getters.goodsAmount : 0;
    }
  },
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body{
  margin: 0;
  background: #FFFFFF;
}

.red{
  color:#9b2020;
}
</style>
