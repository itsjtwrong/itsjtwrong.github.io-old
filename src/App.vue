<template>
  <div id="app">
    <router-view/>
    <div class="overlay" v-show="showLoader">
      <div class="loading-spinner">
        Loading...
      </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  computed: {
    cartItemsCount () {
      // Cart count
      return this.cartItems.length
    },
    showLoader () {
      // Loading spinner
      return this.$store.state.showLoader
    }
  }
};
</script>

<style>
body {
  margin:0px;
  min-height:100vh;
  padding:0px;
  display:flex;
  width:inherit;
}

#app {
  font-family: monospace;
  padding: 0;
  display:flex;
  width:100%;
  min-height:100%;
}

html {
  min-height:100%;
}
</style>
