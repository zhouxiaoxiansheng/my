<script setup lang="ts">
import { useLocale, type Locale } from '../composables/useLocale'

const { locale, setLocale } = useLocale()

const options: { value: Locale; label: string }[] = [
  { value: 'zh', label: '中' },
  { value: 'en', label: 'EN' },
]
</script>

<template>
  <div class="lang-switch" role="group" aria-label="Language">
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      class="lang-switch__btn"
      :class="{ 'lang-switch__btn--active': locale === option.value }"
      :aria-pressed="locale === option.value"
      @click="setLocale(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<style scoped>
.lang-switch {
  display: inline-flex;
  align-items: center;
  padding: 0.18rem;
  border-radius: 999px;
  border: 1px solid rgba(16, 47, 42, 0.1);
  background: rgba(255, 255, 255, 0.8);
}

.lang-switch__btn {
  min-width: 2.1rem;
  padding: 0.32rem 0.55rem;
  border: 0;
  border-radius: 999px;
  background: transparent;
  color: var(--ink-soft, #4a5564);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.lang-switch__btn--active {
  background: color-mix(in srgb, var(--accent, #0f7a6e) 12%, white);
  color: var(--accent, #0f7a6e);
}

.lang-switch__btn:hover:not(.lang-switch__btn--active) {
  color: var(--ink, #1c2430);
}
</style>
