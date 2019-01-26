<template>
    <div id="post">
        <h1>{{content.name}}</h1>
        {{content.content}}
    </div>
</template>

<script>
function findId() {
    let id = window.location.href.split('/')
    return id = id[id.length-1]
    console.log(id)
}

export default {
  name: 'blog',
  data() {
    return {
      post: this.$store.state.posts
    }
  },
  computed: {
    content() {
    let id = findId()
      return this.$store.getters.postById(id);
    },
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
