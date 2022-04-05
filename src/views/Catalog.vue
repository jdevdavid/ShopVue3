<template>
  <main>
    <nav class="nav">
      <my-button @click="this.fixBrands()">
        <h4>All Brands</h4>
      </my-button>

      <div v-for="card in brands" :key="card.id">

        <my-button @click="filterBrand(card.id)">
          {{ card.title }}
        </my-button>

      </div>
    </nav>

    <div class="catalog">
      <h2>Сatalog</h2>

      <div class="cards-container" v-if="productsFilter.length > 0">
        <my-cards :cards="productsFilter" @buy_item="onBuy"/>
      </div>

      <h2 v-else class="red">Список товаров пуст. Возможно данные с сервера не были загружены.</h2>
    </div>

  </main>
</template>

<script>
// @ is an alias to /src
// import MyHeader from '@/components/MyHeader.vue';
import MyButton from '@/components/UI/MyButton.vue';
import MyCards from '@/components/MyCards.vue';

import axios from 'axios';

export default {
  name: 'Catalog',
  components: {
    // MyHeader,
    MyButton, MyCards
  },
  data() {
    return {
      brands: [],
      products: [],
      productsFilter: [],
      goodsInCart: []
      // basket_goods: 0
    }
  },
  methods: {
    // Добавления товара в корзину ???
    onBuy (data) {
      console.log('child component said basket', data)
      this.$store.commit('incrementGoods');

      let CartStore = this.$store.state.goodsInCartStore;
      console.log('CartStore - ', CartStore)
      CartStore.push(data);

      this.$store.commit('setGoodsInCartStore', CartStore);

      // console.log("this.goodsInCart - " + JSON.stringify(CartStore));
      localStorage.setItem('goodsInCart', JSON.stringify(CartStore));
    },
    // Фильтрация по брендам
    filterBrand(val) {
      this.productsFilter = this.products.filter(p => p.brand === val);
    },
    // Корректирование данных по брендам из-за того что данные разнесены в двух файлах
    fixBrands() {
      for (let i = 0; i < this.products.length; i++) {
        for (let y = 0; y < this.brands.length; y++) {
          if (this.products[i].brand === this.brands[y].id) {
            this.products[i].brandTitle = this.brands[y].title;
          }
        }
      }
      this.productsFilter = this.products;
    },
    // Загрузка данных по брендам
    async fetchBrands() {
      try {
        const response = await axios.get('assets/brands.json');
        // console.log(response.data);
        this.brands = response.data;
      } catch (e) {
        alert('Ошибка');
      }
    },
    // Загрузка данных по продуктам
    async fetchProducts() {
      try {
        const response = await axios.get('assets/products.json');
        // console.log(response.data);
        this.products = response.data;
      } catch (e) {
        alert('Ошибка');
      }
    },
    //Одновременная загрузка файлов с данными
    async run() {
      const allPromise = Promise.all([
        this.fetchBrands(),
        this.fetchProducts()
      ]);

      const lists = await allPromise;

      this.fixBrands();
    },
    readLocalStorage() {
      // this.goodsInCartStore = localStorage.getItem("goodsInCart");
      // return localStorage.getItem("goodsInCart")
      const cart = localStorage.getItem("goodsInCart");
      this.$store.commit('setGoodsInCartStore', cart);
      console.log("cart - " + cart);
      // return cart;
    }
  },
  watch(){
    // this.$store.getters.readLocalStorage;
  },
  mounted() {
    this.run();
    // if (localStorage.getItem("goodsInCart")){
      // goodsInCart = JSON.parse(localStorage.getItem("goodsInCart"))
      // console.log(this.goodsInCart);
    // }
    // this.goodsInCart = localStorage.getItem("goodsInCart")
    // console.log(this.goodsInCart);
    // this.$store.getters.readLocalStorage;
    this.readLocalStorage();
  }
}
</script>


<style scoped>
main {
  width: 1100px;
  margin-left: 10%;
  padding: 10px;
  display: flex;
  flex-direction: row;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.nav {
  width: 100px;
  padding: 5px;
  margin-right: 20px;
  flex-wrap: wrap;
  white-space: nowrap;
}

.nav > select {
  margin-right: 40px;
}
</style>