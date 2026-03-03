import { ref } from 'vue'

const lang = ref('en')

export function useLang() {
  const t = (obj) => lang.value === 'en' ? obj.en : obj.fr
  return { lang, t }
}
