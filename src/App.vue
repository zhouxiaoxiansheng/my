<script setup lang="ts">
import HeroSection from './components/HeroSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
</script>

<template>
  <div class="page">
    <nav class="nav">
      <span class="nav__brand">周玉佂</span>
      <div class="nav__links">
        <a class="nav__link" href="#projects">项目</a>
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

    <HeroSection />
    <ProjectsSection />

    <footer class="footer">
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
          <img src="/beian.png" alt="" width="16" height="16" />
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
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.25rem, 5vw, 3.5rem);
  background: linear-gradient(to bottom, rgba(236, 242, 239, 0.88), rgba(236, 242, 239, 0));
  backdrop-filter: blur(8px);
}

.nav__brand {
  font-family: var(--font-display);
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  color: var(--ink);
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
  padding: 2rem clamp(1.25rem, 5vw, 3.5rem) 2.75rem;
  text-align: center;
  color: var(--ink-muted);
  font-size: 0.82rem;
}

.footer__line {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.45rem 0.65rem;
  line-height: 1.6;
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
  gap: 0.3rem;
}

.footer__police img {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.footer__sep {
  opacity: 0.45;
}
</style>
