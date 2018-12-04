<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background: #eee;
  margin:25px;
  display:flex;
}

#app {
  font-family: monospace;
  margin: 25px;
  display:flex;
}

@media (max-width:500px) {
  body {
    margin:5px;
  }
  #app {
    margin:0px;
  }
}
</style>
