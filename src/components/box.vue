<template>
  <div class="box">
    <img class='shot' @click='goToPage(page)' v-if='imgSrc' :src="require('../assets/'+imgSrc)">
    <h1 class="title">{{title}}</h1>
    <p v-if='isFirst'>—</p>
    <p v-if='isFirst'>The crackpot hub for JT Wright's design work.
        A college student figuring out his place in this place.
         A solarpunk, brutalist, diy or die kinda human.
        All in the hopes of one day opening a tea shop.</p>
    <p v-if='isFirst'>—</p>
    <a v-if='isFirst' href="mailto:jtwright@knox.edu">jtwright@knox.edu</a>
  </div>
</template>

<script>
export default {
  name: 'box',
  props: ['title', 'isFirst', 'imgSrc', 'page'],
  methods: {
    goToPage(page) {
      this.$router.push({ name: page });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box {
    margin: 0 40px 80px 0;
    width:400px;
    height:250px;
  }
  h1 {
      all:unset;
  }
  p {
      margin:0px;
  }
  .shot {
      width:400px;
      height:250px;
      object-fit:contain;
      object-position: left;
  }

  .shot:hover {
    cursor:crosshair;
  }
  @media (max-width:500px) {
  .box {
    width:100%;
    height:auto;
  }
  .shot {
    width:90vw;
  }
  }
</style>

<style>

</style>