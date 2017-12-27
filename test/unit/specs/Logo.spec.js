import {
  shallow
} from 'vue-test-utils';

import Logo from '@/components/Logo';

describe('Logo.vue', () => {
  it('should render correctly', () => {
    const wrapper = shallow(Logo);
    expect(wrapper.classes()).toContain('logo');
  });
});
