<style lang="scss" scoped>
  a {
    color: #9e2d1c;
    text-decoration: none;
  }

  .github-link {
    color: #333;
    font-size: 1.3em;
  }
</style>
<template>
  <div>
    <h1>Slider</h1>
    <p>A simple slider with VueJs
      <a class="github-link" target="blank" href="https://github.com/talentedunicorn/slider">
        <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 32 32">
          <path d="M16 0c-8.84 0-16 7.164-16 16 0 7.070 4.584 13.066 10.94 15.18 0.8 0.15 1.094-0.344 1.094-0.77 0-0.38-0.014-1.386-0.020-2.72-4.452 0.966-5.39-2.146-5.39-2.146-0.728-1.848-1.78-2.34-1.78-2.34-1.45-0.992 0.112-0.972 0.112-0.972 1.606 0.112 2.45 1.648 2.45 1.648 1.428 2.446 3.746 1.74 4.66 1.33 0.144-1.034 0.556-1.74 1.014-2.14-3.554-0.4-7.288-1.776-7.288-7.906 0-1.746 0.62-3.174 1.646-4.294-0.18-0.404-0.72-2.030 0.14-4.234 0 0 1.34-0.43 4.4 1.64 1.28-0.356 2.64-0.532 4-0.54 1.36 0.008 2.72 0.184 4 0.54 3.040-2.070 4.38-1.64 4.38-1.64 0.86 2.204 0.32 3.83 0.16 4.234 1.020 1.12 1.64 2.548 1.64 4.294 0 6.146-3.74 7.5-7.3 7.894 0.56 0.48 1.080 1.46 1.080 2.96 0 2.14-0.020 3.86-0.020 4.38 0 0.42 0.28 0.92 1.1 0.76 6.402-2.098 10.982-8.098 10.982-15.158 0-8.836-7.164-16-16-16z"></path>
        </svg>
      </a>
    </p>
    <Slider :slides="this.$store.state.slides">
      <template slot-scope="props">
        <img :src="props.slide.url" :alt="props.slide.text">
      </template>
    </Slider>

    <router-link to="/html">Check out HTML slides</router-link>
  </div>
</template>

<script>
  import Slider from '@/components/Slider';

  export default {
    components: {
      Slider,
    },
    async mounted() {
      this.$store.commit('selectSlide', 1);
      await this.$store.commit('imageSlides');
    },
  };
</script>
