<template>
  <div id="app" class="wrapper">
    <router-link to="/" class="logo"><Logo/></router-link>
    <router-view/>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';

  export default {
    components: {
      Logo,
    },
  };
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.wrapper {
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100vh;
  padding: 2.5rem 0;
}

a {
  color: #9e2d1c;
  text-decoration: none;
}

img {
  max-width: 100%;
}

.logo {
  font-size: 2em;
  color: #333;
}
</style>
