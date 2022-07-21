import { debounce } from 'lodash'

export default {
  mounted(el, binding) {
    const { name: animateClass, delay = '0.9s' } = binding.value
    const { top } = el.getBoundingClientRect()
    el.__PageScroll__ = debounce(
      () => {
        let measureH = window.innerHeight + window.scrollY
        if (top <= measureH) {
          el.classList.add('animate__animated')
          el.classList.add(`animate__${animateClass}`)
          el.style.setProperty('--animate-duration', delay)
          document.removeEventListener('scroll', el.__PageScroll__)
        }
      },
      10,
      { leading: true }
    )
    document.addEventListener('scroll', el.__PageScroll__)
  },
}
