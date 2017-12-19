<style scoped>
  .content {
    padding: 2.5em;
    min-height: 50vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
</style>
<template>
  <div>
    <h1>HTML support</h1>
    <Slider :slides="this.$store.state.slides">
      <template slot-scope="props">
        <div class="content">
          <h1 v-if="props.slide.title" class="slide-title">{{ props.slide.title }}</h1>
          <div v-html="props.slide.content"></div>
        </div>
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
    async mounted() {
      this.$store.commit('selectSlide', 1);
      await this.$store.commit('htmlSlides');
    },
  };
</script>
