<template>
  <div id="nav">
    <router-link to="/">Catalog</router-link> |
    <router-link to="/cart">Cart</router-link>
<!--    {{ $store.state.goods  }}-->
  </div>
  <my-header :basket_goods="$store.state.goods"></my-header>
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
