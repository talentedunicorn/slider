import {
  shallow,
  createLocalVue
} from 'vue-test-utils';

import Vuex from 'vuex';
import Indicator from '@/components/Indicator';

describe('Indicator.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  let mutations
  let store

  beforeEach(() => {
    mutations = {
      selectSlide: jest.fn()
    }

    store = new Vuex.Store({
      state: {},
      mutations
    })
  })

  it('should render the indicator with steps', () => {
    const wrapper = shallow(Indicator, {
      propsData: { steps: 5 }
    })
    expect(wrapper.findAll('.step')).toHaveLength(5);
  });

  it('should commit a "selectSlide" mutation on step on click', () => {
    const wrapper = shallow(Indicator, {
      store,
      propsData: { steps: 6 },
      localVue
    })

    wrapper.find('.active + .step').trigger('click');
    expect(mutations.selectSlide).toHaveBeenCalled();
  });
});
