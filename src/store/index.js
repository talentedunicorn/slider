import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const state = {
  current: 1,
  slides: [
  ],
};

export const mutations = {
  prev(state) {
    const total = state.slides.length;

    state.current = state.current > 1 ? state.current - 1 : total;
  },
  next(state) {
    const total = state.slides.length;
    state.current = state.current < total ? state.current + 1 : 1;
  },
  selectSlide(state, slide) {
    state.current = slide;
  },
  imageSlides(state) {
    state.slides = [
      { url: '//picsum.photos/800/600?image=11', text: 'Image 1' },
      { url: '//picsum.photos/800/600?image=12', text: 'Image 2' },
      { url: '//picsum.photos/800/600?image=13', text: 'Image 3' },
      { url: '//picsum.photos/800/600?image=14', text: 'Image 4' },
      { url: '//picsum.photos/800/600?image=15', text: 'Image 5' },
    ];
  },
  htmlSlides(state) {
    state.slides = [
      { title: 'Hi', content: '<p>I am <strong>Slider</strong>; a VueJs slide (carousel) component</p>' },
      { title: '', content: '<h2>You can add images</h2><img src="//picsum.photos/500/500?random" alt="Image" /><p>with support for <strong>HTML format</strong></p><p>Everything here is <code>html code</code></p>' },
    ];
  },
};

export default new Vuex.Store({
  state,
  mutations
});
