<template>
  <div class="indicator">
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      v-for="i in steps"
      :class="{ 'active': i === current }"
      :key="i"
      @click="selectSlide(i)">
      <circle cx="10" cy="10" r="10"></circle>
    </svg>
  </div>
</template>

<script>
  export default {
    name: 'Indicator',
    props: {
      steps: {
        type: Number,
        required: true,
      },
      current: {
        type: Number,
        default: 1,
      },
    },
    methods: {
      selectSlide(i) {
        this.$store.commit('selectSlide', i);
      },
    },
  };
</script>

<style scoped>
  .indicator {
    display: flex;
    flex-flow: row no-wrap;
    justify-content: center;
  }

  .active {
    fill: rgba(0, 0, 0, .8);
  }

  svg {
    margin: 1em .5em;
    fill: rgba(0, 0, 0, .3);
  }
</style>
