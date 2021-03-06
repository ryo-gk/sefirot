import { mount, createLocalVue } from '@vue/test-utils'
import Vue from 'vue'
import VCalendar from 'v-calendar'
import SInputDate from 'sefirot/components/SInputDate'

window.matchMedia = window.matchMedia || function () {
  return {
    matches: false,
    addListener: () => {},
    removeListener: () => {}
  }
}

Vue.use(VCalendar, {
  firstDayOfWeek: 1
})

const localVue = createLocalVue()

describe('Components - Inputs - SInputDate', () => {
  test('it emits `input` event when a user inputs the value', () => {
    const wrapper = mount(SInputDate, {
      localVue,
      propsData: { value: null }
    })

    wrapper.vm.emitInput('stub')

    expect(wrapper.emitted('input')[0][0]).toBe('stub')
  })
})
