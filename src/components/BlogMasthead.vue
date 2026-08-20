<script setup lang="ts">
import { useLocale } from '../composables/useLocale'

const { t } = useLocale()

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
      <p class="masthead__label">{{ t.blog.label }}</p>
      <h1 class="masthead__title">{{ t.blog.title }}</h1>
      <p class="masthead__bio">
        {{ t.blog.bio }}
      </p>
      <div class="masthead__meta">
        <span>{{ t.blog.role }}</span>
        <span class="dot" aria-hidden="true">·</span>
        <span>{{ t.blog.seeking }}</span>
        <span class="dot" aria-hidden="true">·</span>
        <button type="button" class="masthead__link" @click="scrollToPosts">
          {{ t.blog.readLatest }}
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.masthead {
  padding: clamp(4rem, 8vh, 5rem) clamp(1.25rem, 5vw, 3rem) 1.75rem;
  border-bottom: 1px solid var(--blog-line);
}

.masthead__inner {
  max-width: min(1240px, 100%);
  margin: 0;
}

.masthead__label {
  margin: 0 0 0.45rem;
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--blog-accent);
  font-weight: 700;
}

.masthead__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.2vw, 1.65rem);
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--blog-ink);
  line-height: 1.3;
}

.masthead__bio {
  margin: 0.65rem 0 0;
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--blog-muted);
  max-width: 42rem;
}

.masthead__meta {
  margin-top: 0.85rem;
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
