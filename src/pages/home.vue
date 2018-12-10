<template>
  <div class="home">
      <div class="collections">
          <router-link v-bind:to="`collection/${product._id}`" class="collection" :key='product._id' v-for="product in products">
            <div class="text">
            <h1>{{product.name}}</h1>
            <h3>In stock: {{product.quantity}}</h3>
            <p>{{product.desc}}</p>
        </div>
            <img class="productImg" :src="product.img" alt="">
          </router-link>
      </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  props: ['product'],
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .collection {
    display:grid;
    grid-template-columns: 1fr 1fr;
    border-bottom: 1px solid black;
    align-items:end;
    text-decoration: none;
    color:black;
  }

  .collection:hover {
    color:rgb(0, 255, 136);
    transition: 0.25s ease;
  }
  h1 {
    font-size:4em;
    margin-bottom:0px;
  }
  .productImg {
    width:100%;
    padding:10px 10px 10px 0;
  }
  .text {
    margin-left:10px;
  }

  @media (max-width:820px) {
    .collection {
      grid-template-columns: 1fr;
      grid-template-rows:1fr 1fr;
      width:100%;
    }
    .productImg {
      grid-row: 1/2;
      padding:0px;
    }
    .text {
      align-self:start;
    }
  }
</style>
