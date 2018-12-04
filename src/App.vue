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
