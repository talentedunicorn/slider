<template>
  <div class="slides-wrapper">
    <ul class="slides">
      <li class="slide" v-for="(slide, index) in slides" :key="index">
        <img class="slide-image" :src="slide.url" :alt="slide.text"/>
      </li>
    </ul>

    <div class="slides-control">
      <a href="#" @click="prev">Prev</a>
      <a href="#" @click="next">Next</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Slider',
    props: ['slides'],
    data() {
      return {
        current: 0,
      };
    },
    methods: {
      prev() {
        console.log('Show previous'); // eslint-disable-line
      },
      next() {
        console.log('Show next'); // eslint-disable-line
      },
    },
  };
</script>

<style lang="scss" scoped>
  .slides {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-flow: row nowrap;

    &-wrapper {
      width: 50vw;
      overflow: hidden;
    }
  }
</style>
