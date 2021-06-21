import { mount } from '@vue/test-utils'
import Bill from '../index.vue'

describe('Bill.vue', () => {
  test('render', () => {
    const wrapper = mount(Bill, {
      props: {
        name: 'scan',
      },
    })
    expect(wrapper.classes()).toContain('md-bill')
  })

  test('props title should be wrok', () => {
    const wrapper = mount(Bill, {
      props: {
        title: 'this is title',
      },
    })
    expect(wrapper.text()).toContain('this is title')
  })
})
