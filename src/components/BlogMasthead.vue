<script setup lang="ts">
const scrollToPosts = () => {
  document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="masthead">
    <div
      class="masthead__inner"
      v-motion
      :initial="{ opacity: 0, y: 28 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 80 } }"
    >
      <p class="masthead__label">Personal Blog</p>
      <h1 class="masthead__title">周玉佂的博客</h1>
      <p class="masthead__bio">
        记录前端工程里的取舍与落地：Vue / 跨端 / Electron / AI 流式交互。
        这里不是简历墙，而是一份持续更新的项目手记。
      </p>
      <div class="masthead__meta">
        <span>前端开发工程师</span>
        <span class="dot" aria-hidden="true">·</span>
        <span>杭州求职中</span>
        <span class="dot" aria-hidden="true">·</span>
        <button type="button" class="masthead__link" @click="scrollToPosts">
          阅读最近文章
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.masthead {
  padding: clamp(5.5rem, 12vh, 7.5rem) clamp(1.25rem, 5vw, 3rem) 2.2rem;
  border-bottom: 1px solid var(--blog-line);
}

.masthead__inner {
  max-width: 720px;
  margin: 0 auto;
}

.masthead__label {
  margin: 0 0 0.7rem;
  font-size: 0.75rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--blog-accent);
  font-weight: 700;
}

.masthead__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2.4rem, 7vw, 3.6rem);
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--blog-ink);
  line-height: 1.15;
}

.masthead__bio {
  margin: 1rem 0 0;
  font-size: 1.02rem;
  line-height: 1.85;
  color: var(--blog-muted);
  max-width: 38rem;
}

.masthead__meta {
  margin-top: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.35rem 0.45rem;
  font-size: 0.88rem;
  color: var(--blog-soft);
}

.dot {
  opacity: 0.5;
}

.masthead__link {
  border: 0;
  background: none;
  padding: 0;
  color: var(--blog-accent);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.masthead__link:hover {
  opacity: 0.8;
}
</style>
