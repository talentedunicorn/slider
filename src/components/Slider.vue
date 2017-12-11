<template>
  <div>
    <div class="slides-wrapper">
      <ul class="slides" :style="{ height: slideHeight, width: slideWidth }">
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
        slideHeight: 0,
        slideWidth: 0,
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
    mounted() {
      const currentEl = document.getElementsByClassName('active')[0].firstElementChild;
      this.slideHeight = `${currentEl.offsetHeight}px`;
      this.slideWidth = `${currentEl.offsetWidth}px`;
    },
  };
</script>

<style lang="scss" scoped>
  $max-width: 60rem;

  .slides {
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;

    @media screen and (min-width: $max-width) {
      max-width: 100% !important;
    }

    &-wrapper {
      margin: 2em 0;
    }

    .slide {
      visibility: hidden;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      &.active {
        z-index: 3;
        visibility: visible;
      }
    }

  }
</style>
