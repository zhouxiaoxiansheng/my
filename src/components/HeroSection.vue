<script setup lang="ts">
const scrollToProjects = () => {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="hero">
    <div class="hero__atmosphere" aria-hidden="true">
      <span class="orb orb--a" />
      <span class="orb orb--b" />
      <span class="orb orb--c" />
      <span class="grid-fade" />
    </div>

    <div class="hero__content">
      <p
        class="hero__hello"
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 80 } }"
      >
        你好，我叫
      </p>

      <h1
        class="hero__name"
        v-motion
        :initial="{ opacity: 0, y: 48, filter: 'blur(8px)' }"
        :enter="{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 900, delay: 220 },
        }"
      >
        周玉佂
      </h1>

      <p
        class="hero__role"
        v-motion
        :initial="{ opacity: 0, y: 24 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 420 } }"
      >
        前端开发工程师
      </p>

      <p
        class="hero__tagline"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 560 } }"
      >
        专注 Vue 生态、AI 流式交互与跨端体验，把复杂产品做成流畅可感知的界面。
      </p>

      <div
        class="hero__actions"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 700 } }"
      >
        <button type="button" class="cta" @click="scrollToProjects">
          查看最近项目
          <span class="cta__arrow" aria-hidden="true">↓</span>
        </button>
        <a
          class="cta cta--ghost"
          href="https://github.com/zhouxiaoxiansheng/my"
          rel="noreferrer"
          target="_blank"
        >
          GitHub 源码
        </a>
      </div>
    </div>

    <div class="hero__visual" aria-hidden="true">
      <div class="visual-plane">
        <div class="visual-plane__shine" />
        <div class="code-lines">
          <span /><span /><span /><span /><span />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: clamp(2rem, 5vw, 4rem);
  padding: clamp(4rem, 10vh, 7rem) clamp(1.25rem, 6vw, 5rem);
  overflow: hidden;
}

.hero__atmosphere {
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
  width: min(48vw, 520px);
  height: min(48vw, 520px);
  top: -12%;
  left: -8%;
  background: radial-gradient(circle, #9fd6c8 0%, transparent 70%);
}

.orb--b {
  width: min(40vw, 420px);
  height: min(40vw, 420px);
  right: 8%;
  top: 18%;
  background: radial-gradient(circle, #f0c9a8 0%, transparent 70%);
  animation-delay: -4s;
}

.orb--c {
  width: min(36vw, 380px);
  height: min(36vw, 380px);
  bottom: -10%;
  left: 35%;
  background: radial-gradient(circle, #a8c4e0 0%, transparent 70%);
  animation-delay: -8s;
}

.grid-fade {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(15, 47, 42, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(15, 47, 42, 0.04) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse at 40% 40%, black 20%, transparent 75%);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 38rem;
}

.hero__hello {
  margin: 0 0 0.6rem;
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  letter-spacing: 0.18em;
  color: var(--ink-muted);
}

.hero__name {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.6rem, 11vw, 7.2rem);
  font-weight: 400;
  line-height: 1.05;
  letter-spacing: 0.08em;
  color: var(--ink);
  text-shadow: 0 12px 40px rgba(15, 47, 42, 0.08);
}

.hero__role {
  margin: 1.1rem 0 0;
  font-family: var(--font-body);
  font-size: clamp(1.15rem, 2.4vw, 1.45rem);
  font-weight: 600;
  color: var(--accent);
}

.hero__tagline {
  margin: 1.1rem 0 0;
  max-width: 32rem;
  font-size: clamp(0.95rem, 1.6vw, 1.05rem);
  line-height: 1.75;
  color: var(--ink-soft);
}

.hero__actions {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.45rem;
  background: var(--ink);
  color: #f4f7f5;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.35s ease,
    background 0.25s ease, color 0.25s ease;
  box-shadow: 0 14px 34px rgba(15, 47, 42, 0.22);
}

.cta:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(15, 47, 42, 0.28);
}

.cta--ghost {
  background: transparent;
  color: var(--ink);
  border: 1.5px solid color-mix(in srgb, var(--ink) 22%, transparent);
  box-shadow: none;
}

.cta--ghost:hover {
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 10px 28px rgba(15, 47, 42, 0.08);
}

.cta__arrow {
  display: inline-block;
  animation: bounce 1.8s ease-in-out infinite;
}

.hero__visual {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.visual-plane {
  position: relative;
  width: min(100%, 420px);
  aspect-ratio: 4 / 5;
  border-radius: 28px;
  background:
    linear-gradient(160deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.28)),
    linear-gradient(140deg, #d9efe8, #e8d7c4 55%, #c9d9ea);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow:
    0 30px 80px rgba(22, 53, 47, 0.14),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  overflow: hidden;
  animation: float-plane 7s ease-in-out infinite;
}

.visual-plane__shine {
  position: absolute;
  inset: -40% -20%;
  background: linear-gradient(
    115deg,
    transparent 30%,
    rgba(255, 255, 255, 0.45) 48%,
    transparent 62%
  );
  animation: shine 5.5s ease-in-out infinite;
}

.code-lines {
  position: absolute;
  left: 12%;
  right: 12%;
  top: 18%;
  display: grid;
  gap: 0.85rem;
}

.code-lines span {
  display: block;
  height: 10px;
  border-radius: 999px;
  background: rgba(15, 47, 42, 0.12);
  transform-origin: left center;
  animation: grow-line 2.8s ease-in-out infinite;
}

.code-lines span:nth-child(1) {
  width: 72%;
  animation-delay: 0s;
}
.code-lines span:nth-child(2) {
  width: 92%;
  animation-delay: 0.2s;
}
.code-lines span:nth-child(3) {
  width: 58%;
  animation-delay: 0.4s;
}
.code-lines span:nth-child(4) {
  width: 80%;
  animation-delay: 0.6s;
}
.code-lines span:nth-child(5) {
  width: 45%;
  animation-delay: 0.8s;
}

@keyframes drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(24px, -18px, 0) scale(1.06);
  }
}

@keyframes float-plane {
  0%,
  100% {
    transform: translateY(0) rotate(-1.5deg);
  }
  50% {
    transform: translateY(-14px) rotate(1deg);
  }
}

@keyframes shine {
  0%,
  100% {
    transform: translateX(-18%) rotate(8deg);
  }
  50% {
    transform: translateX(18%) rotate(8deg);
  }
}

@keyframes grow-line {
  0%,
  100% {
    transform: scaleX(0.92);
    opacity: 0.55;
  }
  50% {
    transform: scaleX(1);
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 5.5rem;
    padding-bottom: 3rem;
  }

  .hero__visual {
    order: -1;
  }

  .visual-plane {
    width: min(72vw, 280px);
    aspect-ratio: 1 / 1.05;
  }
}
</style>
