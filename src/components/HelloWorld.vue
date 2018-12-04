<template>
  <div class="hello">
    <box title='Wrong Design' isFirst='true'/>
    <box />
      <div
      is='box'
       v-for='project in projects'
       v-bind:title='project.name'
       v-bind:imgSrc='project.src'
       v-bind:key='project.id'
       ></div>
  </div>
</template>

<script>
import box from './box';

export default {
  name: 'HelloWorld',
  data() {
    return {
      projects: [
        { id: 1, name: 'Incorrect Thoughts', src: 'incorrectThoughts.png' },
        { id: 0, name: 'Wrong Design Apparel', src: 'noCoastBlues.jpg' },
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
    margin:25px;
  }
  @media (max-width:500px) {
    .hello {
    margin:10px;
  }
  }
</style>
