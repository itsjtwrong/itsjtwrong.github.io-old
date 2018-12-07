<template>
  <div class="home">
      <div class="collections">
          {{products}}
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

</style>
