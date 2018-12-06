<template>
  <div class="new">
    <productform 
    @save-product="addProduct" 
    :piece="piece" 
    >
  </productform>
  </div>
</template>

<script>
import productform from '@/components/productform';

export default {
  name: 'new',
  data() {
    return {
      piece: {}
    }
  },
  components: {
    productform
  },
  methods: {
      addProduct (piece) {
        console.log('piece', piece);
      },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

