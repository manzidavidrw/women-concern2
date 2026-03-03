import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  const check = () => {
    document.querySelectorAll('.reveal').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight - 60) {
        el.classList.add('in')
      }
    })
  }

  onMounted(() => {
    window.addEventListener('scroll', check, { passive: true })
    check()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', check)
  })
}
