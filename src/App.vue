<!-- Баги -->
<!--  [х] Routing - проблема перехода с Cart на Catalog -->
<!--  [ ] иногда при переходах зависает приложение    -->
<!--  [x] нет данных в price    -->
<!--  [x] не сохраняются данные commitом    -->
<!--  [x] не сохраняются данные в localstorage    -->
<!--  [ ] В корзине нужен $ в столбцах Price и Total  -->
<!--  [ ] При удалении элемента из корзины удаляются все товары или некоторые -->
<!--  [ ] При покупке Два одинаковых товара должны схлопываться в корзине в одну позицию -->
<!--  [ ] При изменении Qty не пересчитывается total и subtotal    -->
<!--  [ ]     -->
<!--  [ ]     -->
<template>
  <div id="nav">
    <router-link to="/">Catalog</router-link> |
    <router-link to="/cart">Cart</router-link>
<!--    {{ $store.state.goods  }}-->
  </div>
  <my-header :basket_goods="this.$store.state.goods"></my-header>
  <router-view/>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
export default {
  components: {
    MyHeader
  }
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
