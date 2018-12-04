<template>
  <div class="hello" :style='{background:"#eee"}'>
    <box title='Wrong Design' isFirst='true'/>
    <box />
      <div
      is='box'
       v-for='project in projects'
       v-bind:title='project.name'
       v-bind:imgSrc='project.src'
       v-bind:key='project.id'
       v-bind:page='project.page'
       ></div>
  </div>
</template>

<script>
import box from '@/components/box';

export default {
  name: 'HelloWorld',
  data() {
    return {
      projects: [
        { id: 1, name: 'Incorrect Thoughts', src: 'incorrectThoughts.png', page: 'blog' },
        { id: 0, name: 'Wrong Design Apparel', src: 'noCoastBlues.jpg', page: 'apparel' },
      ],
    };
  },
  components: {
    box,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    width:100%;
    display:flex;
    flex-wrap: wrap;
    padding:50px;
  }
  @media (max-width:500px) {
    .hello {
    padding:1vw;
    width:98vw;
  }
  }
</style>

<style>
</style>
