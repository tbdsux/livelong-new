import { mount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

const wrapper = mount(Header, {
  stubs: {
    NuxtLink: true,
    Container: true,
  },
})

describe('Header', () => {
  test('is a Vue instance', () => {
    expect(wrapper.vm).toBeTruthy()
  })

  test('has logo image', () => {
    expect(wrapper.find('img')).toBeTruthy()
    expect(wrapper.find('h1').text()).toBe('Live Long')
  })
})
