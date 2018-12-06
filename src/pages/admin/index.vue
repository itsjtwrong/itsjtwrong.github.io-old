<template>
  <div class="admin">
    <div class="admin-header">
      <ul class="items">
        <div>
          <router-link to="/apparel/admin/new">new products</router-link>
        </div>
        <div>
          <router-link to="/apparel/admin">view products</router-link>
        </div>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'admin',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-header {
    width:inherit;
    display:flex;
    justify-content:center;
    height:100px;
  }
  .items {
    display: flex;
    justify-content:space-between;
    width:100%;
    max-width:1400px;
    padding-left:0px;
  }

  a {
    text-decoration:none;
    color:black;
    font-size:20px;
    margin-top:18px;
  }
  .admin {
    width:100%;
  }
</style>

