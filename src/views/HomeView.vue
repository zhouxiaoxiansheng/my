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

    <div
      class="home__intro"
      v-motion
      :initial="{ opacity: 0, y: 28 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 750, delay: 80 } }"
    >
      <span class="home__intro-glow" aria-hidden="true" />
      <p class="home__hello">你好，我叫</p>
      <h1 class="home__name">周玉佂</h1>
      <p class="home__role">热爱前端开发 · 专注架构设计与体验打磨</p>
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
  align-items: center;
  justify-content: center;
  gap: clamp(2rem, 5vh, 3.5rem);
  padding: clamp(5rem, 12vh, 7rem) clamp(1.25rem, 6vw, 5rem) 3rem;
  overflow: hidden;
  text-align: center;
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

.home__intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(100%, 560px);
  padding: clamp(1.6rem, 4vw, 2.4rem) clamp(1.4rem, 4vw, 2.2rem);
  border-radius: 28px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.92);
  box-shadow: 0 18px 50px rgba(22, 53, 47, 0.08);
  backdrop-filter: blur(14px);
}

.home__intro-glow {
  position: absolute;
  inset: auto -25% -55% 15%;
  height: 85%;
  background: radial-gradient(
    circle,
    color-mix(in srgb, var(--accent) 22%, transparent),
    transparent 70%
  );
  pointer-events: none;
}

.home__hello {
  position: relative;
  margin: 0 0 0.5rem;
  letter-spacing: 0.18em;
  color: var(--ink-muted);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
}

.home__name {
  position: relative;
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 8vw, 4.6rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  line-height: 1.1;
  color: var(--ink);
}

.home__role {
  position: relative;
  margin: 0.85rem 0 0;
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  font-weight: 600;
  color: var(--accent);
}

.home__cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 1.6rem);
  width: min(100%, 560px);
  margin-inline: auto;
  text-align: left;
}

.entry {
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding: clamp(1.15rem, 3vw, 1.55rem);
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
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 16px;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 1.4rem;
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
  gap: 0.4rem;
  flex: 1;
  align-content: end;
}

.entry__title {
  font-size: clamp(1.2rem, 2.2vw, 1.45rem);
  font-weight: 700;
  color: var(--ink);
}

.entry__desc {
  font-size: 0.88rem;
  line-height: 1.5;
  color: var(--ink-soft);
}

.entry__arrow {
  position: absolute;
  top: clamp(1.15rem, 3vw, 1.55rem);
  right: clamp(1.15rem, 3vw, 1.55rem);
  font-size: 1.25rem;
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: min(100%, 420px);
  }

  .entry {
    border-radius: 18px;
    padding: 1rem;
  }

  .entry__icon {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 12px;
    font-size: 1.15rem;
  }

  .entry__desc {
    font-size: 0.78rem;
  }
}

@media (max-width: 420px) {
  .home__cards {
    grid-template-columns: 1fr;
    width: min(100%, 240px);
  }
}
</style>
