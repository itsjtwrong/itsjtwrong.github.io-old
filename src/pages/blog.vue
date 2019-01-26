<template>
<div class="main">
    <router-link v-for="post in posts" class="posts" v-bind:key="post.id" v-bind:to="`blog/post/${post.id}`">
      <h1>{{post.name}}</h1>
    </router-link>
</div>
</template>

<script>

export default {

  name: 'blog',
  data() {
    return {
      posts: this.$store.state.posts
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .posts {
    display:inline;
    text-decoration: none;
    color:black;
  }
</style>
