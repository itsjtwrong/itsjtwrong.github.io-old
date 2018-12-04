<template>
<div class="apparelheader">
  <ul class="items">
      <div> <router-link to='/apparel/admin'>admin</router-link></div>
      <div> <router-link to='/apparel'>WRONG DESIGN APPAREL</router-link></div>
      <div> <router-link to='/apparel/cart'>cart</router-link></div>
    </ul>
</div>
</template>

<script>
export default {
  name: 'apparelheader',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .apparelheader {
    width:inherit;
    display:flex;
    justify-content:center;
  }
  .items {
    display: flex;
    justify-content:space-between;
    width:100%;
    max-width:1400px;
    padding-left:0px;
  }
</style>

<style>
 html body{
   background:white;
 }

 #app {
   justify-content:center;
 }
</style>
