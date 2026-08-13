<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isHome = computed(() => route.name === 'home')
</script>

<template>
  <div class="page">
    <nav v-if="isHome" class="nav">
      <div class="nav__links">
        <a
          class="nav__link"
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
        <span>&copy; 2026 什邡市周玉佂百货商行 版权所有</span>
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem clamp(1.25rem, 5vw, 3.5rem);
  background: linear-gradient(to bottom, rgba(236, 242, 239, 0.88), rgba(236, 242, 239, 0));
  backdrop-filter: blur(8px);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.nav__link {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav__link:hover {
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
</style>
