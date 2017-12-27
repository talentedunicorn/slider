import {
  shallow,
  mount,
  createLocalVue
} from 'vue-test-utils';

import Vuex from 'vuex';
import Slider from '@/components/Slider';

describe('Slider.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let state
  let mutations
  let store

  beforeEach(() => {
    state = {
      slides: [
        { title: 'Title', content: '<p>Hello</p>'},
        { title: '', content: '<p>World</p>'},
      ]
    }

    mutations = {
      selectSlide: jest.fn(),
      prev: jest.fn(),
      next: jest.fn()
    }

    store = new Vuex.Store({
      state,
      mutations
    })
  })

  it('should render the slides', () => {
    const wrapper = mount(Slider, {
      store,
      localVue,
      propsData: {
        slides: state.slides
      },
    });

    expect(wrapper.findAll('.slide')).toHaveLength(2);
  })

  it('should commit "prev" and "next"', () => {
    const wrapper = shallow(Slider, {
      store,
      localVue,
      propsData: {
        slides: state.slides
      }
    })
    
    wrapper.find('[title=previous]').trigger('click');
    expect(mutations.prev).toHaveBeenCalled();

    wrapper.find('[title=next]').trigger('click');
    expect(mutations.next).toHaveBeenCalled();

  })
})
