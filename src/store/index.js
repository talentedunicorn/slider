import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: 1,
    slides: [
      { url: '//picsum.photos/800/600?image=11', text: 'Image 1' },
      { url: '//picsum.photos/800/500?image=12', text: 'Image 2' },
      { url: '//picsum.photos/800/600?image=13', text: 'Image 3' },
      { url: '//picsum.photos/1200/600?image=14', text: 'Image 4' },
      { url: '//picsum.photos/1200/800?image=15', text: 'Image 5' },
    ],
  },
  mutations: {
    prev(state) {
      const total = state.slides.length;

      state.current = state.current > 1 ? state.current - 1 : total;
    },
    next(state) {
      const total = state.slides.length;
      state.current = state.current < total ? state.current + 1 : 1;
    },
  },
});
