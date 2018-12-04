<template>
  <div class="apparel-top">
    <apparelheader />
  </div>
</template>

<script>
import apparelheader from '@/components/apparelheader';

export default {
  name: 'apparel',
  components: {
    apparelheader
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .apparel-top {
    width:100%;
    max-width:1400px;
  }
</style>
