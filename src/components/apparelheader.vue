<template>
  <div class="apparelheader">
    <ul class="items">
      <div>
        <router-link to="/apparel/about">about</router-link>
      </div>
      <div>
        <router-link to="/apparel">WRONG DESIGN APPAREL</router-link>
      </div>
      <div>
        <router-link to="/apparel/cart">cart</router-link>
      </div>
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
  width: inherit;
  display: flex;
  justify-content: center;
  height: 100px;
}
.items {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  padding-left: 0px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-top: 18px;
}

@media (max-width: 450px) {
  a {
    font-size: 12px;
  }
  .items {
    margin: 10px 10px 0 10px;
  }
}
</style>

