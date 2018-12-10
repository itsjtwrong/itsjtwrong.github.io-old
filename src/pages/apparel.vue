<template>
    <div id="apparel">
      <apparelheader />
      <router-view/>
    </div>
</template>

<script>
import apparelheader from '@/components/apparelheader';

export default {
  name: 'apparel',
  components: {
    apparelheader,
  },
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
  #apparel {
    width:100%;
    display:flex;
    justify-content:center;
    max-width:1400px;
    margin-right:auto;
    margin-left:auto;
    flex-wrap:wrap;
    align-content:start;
    justify-content: start;
  }
</style>
