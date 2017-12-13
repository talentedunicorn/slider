<template>
  <div class="slides-wrapper">
    <Indicator
      class="slides-indicator"
      :steps="slides.length"
      :current="current + 1"/>
    <button
      class="slides-control"
      title= "previous"
      @click="prev"
      v-html="prevButton || arrowLeft"/>
    <ul class="slides">
      <li class="slide" v-for="(slide, index) in slides" :key="index" :class="{ 'active': current === index }">
        <img class="slide-image" :src="slide.url" :alt="slide.text"/>
      </li>
    </ul>
    <button
      class="slides-control"
      title="next"
      @click="next"
      v-html="nextButton || arrowRight"/>
  </div>
</template>

<script>
  import Indicator from './Indicator';

  export default {
    name: 'Slider',
    props: ['slides', 'prevButton', 'nextButton'],
    components: {
      Indicator,
    },
    data() {
      return {
        current: 0,
        arrowLeft: '<svg viewBox="0 0 20 20" width="1em" height="1em"><path d="M13.891 17.418c0.268 0.272 0.268 0.709 0 0.979s-0.701 0.271-0.969 0l-7.83-7.908c-0.268-0.27-0.268-0.707 0-0.979l7.83-7.908c0.268-0.27 0.701-0.27 0.969 0s0.268 0.709 0 0.979l-7.141 7.419 7.141 7.418z"></path></svg>',
        arrowRight: '<svg viewBox="0 0 20 20" width="1em" height="1em"><path d="M13.25 10l-7.141-7.42c-0.268-0.27-0.268-0.707 0-0.979 0.268-0.27 0.701-0.27 0.969 0l7.83 7.908c0.268 0.271 0.268 0.709 0 0.979l-7.83 7.908c-0.268 0.271-0.701 0.27-0.969 0s-0.268-0.707 0-0.979l7.141-7.417z"></path></svg>',
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
  .slides {
    list-style: none;
    padding: 0;
    margin: 0;

    img {
      max-width: 100%;
    }

    &-wrapper {
      margin: 2em 0;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      position: relative;
    }

    &-indicator {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    &-control {
      background: rgba(#aaa, .2);
      border: none;
      outline: none;
      font-size: 2em;
      flex: 0 1 auto;
      display: flex;
      align-items: center;
    }

    .slide {
      display: none;

      &.active {
        display: flex;
        flex-flow: column nowrap;
      }
    }
  }
</style>
