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
    <Slider :slides="slides"/>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import Slider from '@/components/Slider';

  export default {
    data() {
      return {
        slides: [
          { url: '//picsum.photos/800/600?image=11', text: 'Image 1' },
          { url: '//picsum.photos/800/600?image=12', text: 'Image 2' },
          { url: '//picsum.photos/800/600?image=13', text: 'Image 3' },
          { url: '//picsum.photos/800/600?image=14', text: 'Image 4' },
          { url: '//picsum.photos/800/600?image=15', text: 'Image 5' },
        ],
      };
    },
    components: {
      Logo,
      Slider,
    },
  };
</script>
