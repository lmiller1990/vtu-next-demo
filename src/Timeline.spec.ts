import flushPromises from 'flush-promises'
import { mount } from '@vue/test-utils'

import Timeline from './Timeline.vue'

describe('Timeline', () => {
  it('changes the tab when filtered', async () => {
    const wrapper = mount(Timeline)
    await flushPromises()

    const $today = wrapper.find('[data-test="today"]')
    expect($today.classes()).toContain('is-active')

    const $thisWeek = wrapper.find('[data-test="this week"]')
    await $thisWeek.trigger('click')

    expect($today.classes()).not.toContain('is-active')
    expect($thisWeek.classes()).toContain('is-active')
  })

  it('renders today posts by default', () =>  {
    const wrapper = mount(Timeline)

    expect(wrapper.findAll('[data-test="post"]')).toHaveLength(1)
  })
})
