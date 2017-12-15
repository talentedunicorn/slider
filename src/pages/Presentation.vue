<template>
  <div class="wrapper">
    <h1>Presentation support</h1>
    <Slider :slides="this.$store.state.slides">
      <template slot-scope="props">
        <h1 v-if="props.slide.title" class="slide-title">{{ props.slide.title }}</h1>
        <div v-html="props.slide.content"></div>
      </template>
    </Slider>
  </div>
</template>

<script>
  import Slider from '@/components/Slider';

  export default {
    components: {
      Slider,
    },
    mounted() {
      this.$store.commit('presentationSlides');
    },
  };
</script>
