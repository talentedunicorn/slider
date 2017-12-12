<template>
  <div>
    <div class="slides-wrapper">
      <ul class="slides">
        <li class="slide" v-for="(slide, index) in slides" :key="index" :class="{ 'active': current === index }">
          <img class="slide-image" :src="slide.url" :alt="slide.text"/>
        </li>
      </ul>
    </div>
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
        this.current = this.current > 0 ? this.current - 1 : this.slides.length - 1;
      },
      next() {
        this.current = this.current < this.slides.length - 1 ? this.current + 1 : 0;
      },
    },
  };
</script>

<style lang="scss" scoped>
  $max-width: 60rem;

  .slides {
    list-style: none;
    padding: 0;
    margin: 0;

    img {
      max-width: 100%;
    }

    &-wrapper {
      margin: 2em 0;
      max-width: $max-width;
    }

    .slide {
      display: none;

      &.active {
        display: block;
      }
    }
  }
</style>
