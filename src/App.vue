<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed, watch } from 'vue'
import LanguageSwitcher from './components/LanguageSwitcher.vue'
import { useLocale } from './composables/useLocale'

const route = useRoute()
const { t } = useLocale()
const isHome = computed(() => route.name === 'home')

watch(
  () => [route.name, t.value.meta] as const,
  () => {
    const titles: Record<string, string> = {
      home: t.value.meta.homeTitle,
      resume: t.value.meta.resumeTitle,
      blog: t.value.meta.blogTitle,
    }
    document.title = titles[String(route.name)] ?? 'Zhou Yuzheng'
  },
  { immediate: true },
)
</script>

<template>
  <div class="page">
    <nav v-if="isHome" class="nav">
      <div class="nav__brand-group">
        <RouterLink class="nav__mark" to="/" :aria-label="t.nav.homeAria">ZY</RouterLink>
        <div class="nav__menu">
          <a class="nav__item nav__item--active" href="#top">{{ t.nav.home }}</a>
          <RouterLink class="nav__item" to="/resume">{{ t.nav.resume }}</RouterLink>
          <RouterLink class="nav__item" to="/blog">{{ t.nav.blog }}</RouterLink>
        </div>
      </div>
      <div class="nav__actions">
        <LanguageSwitcher />
        <a
          class="nav__github"
          href="https://github.com/zhouxiaoxiansheng/my"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </nav>

    <RouterView />

    <footer v-if="isHome" class="footer">
      <p class="footer__line">
        <a href="https://beian.miit.gov.cn/" rel="noreferrer" target="_blank">
          蜀ICP备2026023839号-1
        </a>
        <span class="footer__sep" aria-hidden="true">|</span>
        <a
          class="footer__police"
          href="https://beian.mps.gov.cn/#/query/webSearch?code=51068202000299"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/beian.png" alt="" width="12" height="12" />
          川公网安备51068202000299号
        </a>
        <span class="footer__sep" aria-hidden="true">|</span>
        <a href="https://github.com/zhouxiaoxiansheng/my" rel="noreferrer" target="_blank">
          GitHub
        </a>
        <span class="footer__sep" aria-hidden="true">|</span>
        <span>{{ t.footer.copyright }}</span>
      </p>
    </footer>
  </div>
</template>

<style scoped>
.page {
  position: relative;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.85rem clamp(1.25rem, 5vw, 3.5rem);
  background: rgba(244, 247, 249, 0.88);
  border-bottom: 1px solid rgba(16, 47, 42, 0.06);
  backdrop-filter: blur(12px);
}

.nav__brand-group {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
}

.nav__mark {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.55rem;
  background: linear-gradient(145deg, #1a6f64, #0d4f47);
  color: #f4faf8;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-decoration: none;
  flex-shrink: 0;
}

.nav__menu {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.15rem 0.15rem;
}

.nav__item {
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav__item:hover,
.nav__item--active {
  color: var(--accent);
  background: color-mix(in srgb, var(--accent) 10%, white);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  flex-shrink: 0;
}

.nav__github {
  flex-shrink: 0;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  border: 1px solid rgba(16, 47, 42, 0.1);
  background: rgba(255, 255, 255, 0.8);
  color: var(--ink);
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.nav__github:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  color: var(--accent);
}

.footer {
  margin-top: auto;
  padding: 1.25rem clamp(1.25rem, 5vw, 3.5rem) 1.75rem;
  text-align: center;
  color: var(--ink-muted);
  font-size: 0.68rem;
}

.footer__line {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.3rem 0.45rem;
  line-height: 1.5;
}

.footer a {
  color: inherit;
  text-decoration: none;
  transition: color 0.25s ease;
}

.footer a:hover {
  color: var(--accent);
}

.footer__police {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
}

.footer__police img {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

.footer__sep {
  opacity: 0.45;
}

@media (max-width: 640px) {
  .nav__item {
    padding: 0.35rem 0.5rem;
    font-size: 0.82rem;
  }
}
</style>
