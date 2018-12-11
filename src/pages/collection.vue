<template>
  <div class="products">
    <div class="product" :key="product.id" v-for="product in products.pieceList">
      <img :src="product.img" alt class="productImg">
      <h1>{{product.name}}</h1>
      <h3>${{product.price}}</h3>
      <p>{{product.desc}}</p>
      <div class="buy" v-if="isAdding(product.id)" @click="addToCart(product.id)">Add to Cart</div>
      <div class="buy" v-else @click="removeFromCart(product.id)">Remove from Cart</div>
    </div>
  </div>
</template>

<script>
import { ADD_TO_CART, REMOVE_FROM_CART } from '../store/mutation-types';

export default {
  name: 'collection',
  props: ['product'],
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  computed: {
    products() {
      return this.$store.getters.productById(this.$route.params.id);
    },
  },
  methods: {
    addToCart(id) {
      this.$store.commit(ADD_TO_CART, this.products.pieceList[id]);
    },
    removeFromCart(id) {
      this.$store.commit(REMOVE_FROM_CART, id);
    },
    isAdding(id) {
      return this.cart.indexOf(this.products.pieceList[id]) < 0;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
}

.product {
  max-width: 300px;
  padding: 10px;
  margin: 10px;
  border: 1px solid black;
}
.productImg {
  width: 100%;
}

.buy {
  background: black;
  display: inline-block;
  color: white;
  padding: 10px;
}

.buy:hover {
  background: white;
  color: black;
  border: 1px solid black;
  padding: 9px;
}
</style>
