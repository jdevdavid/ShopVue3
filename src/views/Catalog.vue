<template>
  <main>
    <nav class="nav">
      <my-button @click="this.fixBrands()">
        <h4>All Brands</h4>
      </my-button>

      <div v-for="card in brands" :key="card.id">

        <my-button style="margin-top: 15px;" @click="filterBrand(card.id)">
          {{ card.title }}
        </my-button>

      </div>
    </nav>

    <div class="catalog">
      <h2>Сatalog</h2>

      <div
          class="cards-container"
          v-if="productsFilter.length > 0">
        <my-cards
            :cards="productsFilter"
            @buy_item="onBuy"
        />
      </div>

      <h2 v-else class="red">Список товаров пуст. Возможно данные с сервера не были загружены.</h2>
    </div>

  </main>
</template>

<script>
// @ is an alias to /src
import MyButton from '@/components/UI/MyButton.vue';
import MyCards from '@/components/MyCards.vue';

import axios from 'axios';

export default {
  name: 'Catalog',
  components: {
    MyButton, MyCards
  },
  data() {
    return {
      brands: [],
      products: [],
      productsFilter: [],
      goodsInCart: []
    }
  },
  computed: {
    getGoods(){
      return this.$store.getters.goodsInCartStore ?
          this.$store.getters.goodsInCartStore : 0;
    }
  },
  methods: {
    // Добавления товара в корзину
    onBuy (data) {
      console.log('child component said basket', data);
      let CartStore = this.$store.state.goodsInCartStore;

      // console.log('CartStore - ', CartStore);
      // console.log('CartStore - ', CartStore[0].id);

  //Проверяем надо ли создавать новую запись или добавляем в старую
        let AmountPlus = false;
        for (let i=0; i < CartStore.length; i++){

          // Добавляем в старую
          if (data.id === CartStore[i].id){
            CartStore[i].amount++;
            i = CartStore.length;
            AmountPlus = true;
          }
        }
      //Если НеПрибавляем, значит добавляем.
      // !AmountPlus ? CartStore.push(data) : true;
      if(!AmountPlus){
        CartStore.push(data);
        this.$store.commit('incrementGoods');
      }

      this.$store.commit('setGoodsInCartStore', CartStore);
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
  },
  watch(){  },
  mounted() {
    this.run();
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