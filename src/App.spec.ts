import { mount, shallowMount } from '@vue/test-utils'
import App from './App.vue'
import Hello from './Hello.vue'

test('uses mounts', async () => {
  const wrapper = mount(App)
  expect(wrapper.html()).toContain('Vue app')
  expect(wrapper.html()).toContain('Hello world')
  expect(wrapper.html()).toContain('Count: 0')

  await wrapper.find('button').trigger('click')
  expect(wrapper.html()).toContain('Count: 1')
})

test('uses shallowMount', async () => {
  const wrapper = shallowMount(App)
  expect(wrapper.html()).toContain('Vue app')
  expect(wrapper.html()).not.toContain('Hello world')
  expect(wrapper.html()).toContain('Count: 0')

  // @ts-ignore TODO: Improve types for `findComponent`
  await wrapper.findComponent(Hello).vm.$emit('greet')
  expect(wrapper.html()).toContain('Count: 1')
})
