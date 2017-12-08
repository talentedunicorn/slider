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
  </div>
</template>

<script>
  import Logo from '@/components/Logo';

  export default {
    name: 'Slider',
    components: {
      Logo,
    },
  };
</script>
