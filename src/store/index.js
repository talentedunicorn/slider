import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current: 1,
    slides: [
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
    imageSlides(state) {
      state.slides = [
        { url: '//picsum.photos/800/600?image=11', text: 'Image 1' },
        { url: '//picsum.photos/800/500?image=12', text: 'Image 2' },
        { url: '//picsum.photos/800/600?image=13', text: 'Image 3' },
        { url: '//picsum.photos/1200/600?image=14', text: 'Image 4' },
        { url: '//picsum.photos/1200/800?image=15', text: 'Image 5' },
      ];
    },
    presentationSlides(state) {
      state.slides = [
        { title: 'Hi', content: '<p>I am Slider...a VueJs powered slide component</p>' },
        { title: '', content: '<h2>Apart from images</h2><img src="//picsum.photos/500/500?random" alt="Image" /><h3 style="font-weight: 100;">i support <strong>Rich Text</strong></h3>' },
      ];
    },
  },
});