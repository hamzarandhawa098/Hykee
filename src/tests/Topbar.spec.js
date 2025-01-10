import { mount } from '@vue/test-utils';
import Topbar from '@/components/global/TopBar.vue';

describe('Topbar', () => {
  it('renders the provided topbarText', () => {
    const topbarText = '<span>Welcome to the website!</span>';
    const wrapper = mount(Topbar, {
      props: { topbarText },
    });

    expect(wrapper.html()).toContain(topbarText);
  });

  it('is hidden on smaller screens', () => {
    const wrapper = mount(Topbar, {
      props: { topbarText: '<span>Testing hidden behavior</span>' },
    });

    expect(wrapper.classes('hidden')).toBe(true);
  });
});
