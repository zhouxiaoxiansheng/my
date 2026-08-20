import { computed, ref, watch } from 'vue'
import { ui } from '../i18n/ui'

export type Locale = 'zh' | 'en'

const STORAGE_KEY = 'site-locale'

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved === 'zh' || saved === 'en') return saved
  return navigator.language.startsWith('zh') ? 'zh' : 'en'
}

const locale = ref<Locale>(detectLocale())

watch(
  locale,
  (value) => {
    localStorage.setItem(STORAGE_KEY, value)
    document.documentElement.lang = value === 'zh' ? 'zh-CN' : 'en'
  },
  { immediate: true },
)

export function useLocale() {
  const t = computed(() => ui[locale.value])

  const setLocale = (next: Locale) => {
    locale.value = next
  }

  const toggleLocale = () => {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
  }

  return { locale, t, setLocale, toggleLocale }
}
