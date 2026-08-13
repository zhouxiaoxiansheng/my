<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="home">
    <div class="home__atmosphere" aria-hidden="true">
      <span class="orb orb--a" />
      <span class="orb orb--b" />
      <span class="orb orb--c" />
    </div>

    <div class="home__intro">
      <p
        class="home__hello"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 650, delay: 60 } }"
      >
        你好，我叫
      </p>
      <h1
        class="home__name"
        v-motion
        :initial="{ opacity: 0, y: 36, filter: 'blur(8px)' }"
        :enter="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 850, delay: 160 },
        }"
      >
        周玉佂
      </h1>
      <p
        class="home__role"
        v-motion
        :initial="{ opacity: 0, y: 18 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 650, delay: 320 } }"
      >
        前端开发工程师 · 请选择进入
      </p>
    </div>

    <div class="home__cards">
      <RouterLink
        class="entry"
        to="/resume"
        v-motion
        :initial="{ opacity: 0, y: 42 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 750, delay: 420 } }"
      >
        <span class="entry__glow" aria-hidden="true" />
        <span class="entry__icon" aria-hidden="true">简</span>
        <span class="entry__body">
          <span class="entry__title">个人简历</span>
          <span class="entry__desc">工作经历、项目亮点与求职信息</span>
        </span>
        <span class="entry__arrow" aria-hidden="true">→</span>
      </RouterLink>

      <RouterLink
        class="entry entry--blog"
        to="/blog"
        v-motion
        :initial="{ opacity: 0, y: 42 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 750, delay: 540 } }"
      >
        <span class="entry__glow" aria-hidden="true" />
        <span class="entry__icon" aria-hidden="true">博</span>
        <span class="entry__body">
          <span class="entry__title">个人博客</span>
          <span class="entry__desc">项目手记与工程实践，阅读向更新</span>
        </span>
        <span class="entry__arrow" aria-hidden="true">→</span>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.home {
  position: relative;
  min-height: calc(100svh - 5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: clamp(2rem, 5vh, 3.5rem);
  padding: clamp(5rem, 12vh, 7rem) clamp(1.25rem, 6vw, 5rem) 3rem;
  overflow: hidden;
}

.home__atmosphere {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(48px);
  opacity: 0.55;
  animation: drift 14s ease-in-out infinite;
}

.orb--a {
  width: min(48vw, 480px);
  height: min(48vw, 480px);
  top: -10%;
  left: -6%;
  background: radial-gradient(circle, #9fd6c8 0%, transparent 70%);
}

.orb--b {
  width: min(38vw, 400px);
  height: min(38vw, 400px);
  right: 4%;
  top: 20%;
  background: radial-gradient(circle, #f0c9a8 0%, transparent 70%);
  animation-delay: -4s;
}

.orb--c {
  width: min(34vw, 360px);
  height: min(34vw, 360px);
  bottom: -8%;
  left: 40%;
  background: radial-gradient(circle, #a8c4e0 0%, transparent 70%);
  animation-delay: -8s;
}

.home__intro,
.home__cards {
  position: relative;
  z-index: 1;
}

.home__hello {
  margin: 0 0 0.5rem;
  letter-spacing: 0.18em;
  color: var(--ink-muted);
  font-size: clamp(1rem, 2vw, 1.15rem);
}

.home__name {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 10vw, 6.2rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.05;
  color: var(--ink);
}

.home__role {
  margin: 0.9rem 0 0;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: var(--accent);
}

.home__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 1.6rem);
  max-width: 920px;
}

.entry {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 1rem;
  min-height: 160px;
  padding: 1.4rem 1.35rem;
  text-decoration: none;
  color: inherit;
  border-radius: 24px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 50px rgba(22, 53, 47, 0.08);
  backdrop-filter: blur(14px);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease;
}

.entry:hover {
  transform: translateY(-6px);
  box-shadow: 0 28px 64px rgba(22, 53, 47, 0.14);
}

.entry__glow {
  position: absolute;
  inset: auto -20% -40% 20%;
  height: 70%;
  background: radial-gradient(circle, color-mix(in srgb, var(--accent) 28%, transparent), transparent 70%);
  pointer-events: none;
}

.entry--blog .entry__glow {
  background: radial-gradient(circle, rgba(196, 122, 74, 0.28), transparent 70%);
}

.entry__icon {
  position: relative;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 1.45rem;
  color: #f4faf8;
  background: linear-gradient(145deg, #1a6f64, #0d4f47);
  box-shadow: 0 10px 24px rgba(15, 79, 71, 0.28);
}

.entry--blog .entry__icon {
  background: linear-gradient(145deg, #c47a4a, #8f5230);
  box-shadow: 0 10px 24px rgba(143, 82, 48, 0.25);
}

.entry__body {
  position: relative;
  display: grid;
  gap: 0.35rem;
}

.entry__title {
  font-size: clamp(1.25rem, 2.4vw, 1.55rem);
  font-weight: 700;
  color: var(--ink);
}

.entry__desc {
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--ink-soft);
}

.entry__arrow {
  position: relative;
  font-size: 1.35rem;
  color: var(--accent);
  transition: transform 0.3s ease;
}

.entry:hover .entry__arrow {
  transform: translateX(4px);
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(20px, -16px, 0) scale(1.05);
  }
}

@media (max-width: 720px) {
  .home__cards {
    grid-template-columns: 1fr;
  }

  .entry {
    min-height: 132px;
  }
}
</style>
