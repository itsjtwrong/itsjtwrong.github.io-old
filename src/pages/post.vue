<template>
    <div id="post">
        <h1>{{post.name}}</h1>
        {{post.post}}
    </div>
</template>

<script>
let id = window.location.href.split('/')
id = id[id.length-1]
console.log(id)
export default {

  name: 'blog',
  data() {
    return {
      post: this.$store.state.posts[id]
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #post {
        white-space: pre-line;
        margin:18px;
        font-size:18px;
    }
</style>
