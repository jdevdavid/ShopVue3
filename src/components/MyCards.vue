<template>
  <div class="card-demo"
       v-for="card in cards"
       :key="card.id">
    <img class="img-card" :src="'assets/'+card.image">

    <div class="card_text" style="display: flex;">
      <div>
        <b>{{ card.title }}</b>
        <p>{{ card.brandTitle }}</p>
        <p>{{ formatCurrency(card.regular_price.currency) }} {{ card.regular_price.value }}</p>
      </div>
      <my-button @click="buy(card.id)">Add to cart</my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
  name: "MyCards",
  components: {
    MyButton
  },
  props: {
    cards: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      basket_goods: 0
    }
  },
  methods: {
    buy(id){
      this.basket_goods++;
      // console.log(id + ' ' + this.basket_goods);
      this.$emit('buy_item', {
        id: id,
        basket_goods: this.basket_goods
      });
    },
    formatCurrency(value) {
      value === 'USD' ? value = '$' : value;
      return value;
    }
  }
}
</script>

<style scoped>

.card-demo {
  flex: 30%;
  box-shadow: 1px 5px 15px 2px rgb(0 0 0 / 13%);
  -webkit-box-shadow: 1px 5px 15px 2px rgb(0 0 0 / 13%);
  -moz-box-shadow: 1px 5px 15px 2px rgba(0, 0, 0, 0.13);
  margin: 10px;
  border-radius: 30px;
}

.card-demo:hover {
  transition: 0.5s;
}

.img-card {
  width: 300px;
}

.card_text {
  padding: 18px;
  color: #222;
  line-height: 0.4;

  display: flex;
  flex-direction: column;
}

.card > img {
  width: 300px;
  height: 200px;
}

.card_text > b {
  font-size: 110%;
}
</style>