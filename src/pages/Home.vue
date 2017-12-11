<style scoped>
  .logo {
    font-size: 2em;
  }
</style>
<template>
  <div>
    <Logo class="logo"/>
    <h1>Slider</h1>
    <span>A simple slider with VueJs</span>
    <Slider/>
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
