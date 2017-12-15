<style scoped>
  .logo {
    font-size: 2em;
  }

  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
</style>
<template>
  <div class="wrapper">
    <Logo class="logo"/>
    <h1>Slider</h1>
    <span>A simple slider with VueJs</span>
    <Slider :slides="this.$store.state.slides">
      <template slot-scope="props">
        <img :src="props.slide.url" :alt="props.slide.text">
      </template>
    </Slider>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import Slider from '@/components/Slider';

  export default {
    components: {
      Logo,
      Slider,
    },
  };
</script>
