<script setup lang="ts">
import { computed, ref } from 'vue'
import type { BlogPost } from '../data/posts'

const props = defineProps<{
  post: BlogPost
  index: number
}>()

const open = ref(false)
const hasNotes = computed(() => props.post.highlights.length > 0)
const delay = computed(() => 40 + Math.min(props.index, 12) * 40)
</script>

<template>
  <article
    class="post"
    :style="{ '--accent': post.accent }"
    v-motion
    :initial="{ opacity: 0, y: 28 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: { duration: 650, delay, ease: 'easeOut' },
    }"
  >
    <div class="post__cover">
      <img v-if="post.image" :src="post.image" :alt="post.blogTitle" loading="lazy" />
      <div v-else class="post__placeholder">
        <span class="post__no">{{ post.no ?? String(index + 1).padStart(2, '0') }}</span>
        <span class="post__placeholder-label">项目手记</span>
      </div>
    </div>

    <div class="post__main">
      <div class="post__top">
        <span class="post__category">{{ post.category }}</span>
        <time class="post__date">{{ post.publishedAt }}</time>
        <span class="post__read">约 {{ post.readingMinutes }} 分钟</span>
      </div>

      <h2 class="post__title">
        <span v-if="post.no" class="post__index">{{ post.no }}.</span>
        {{ post.blogTitle }}
      </h2>
      <p class="post__excerpt">{{ post.summary }}</p>

      <ul class="post__tags">
        <li v-for="tag in post.stack" :key="tag">{{ tag }}</li>
      </ul>

      <template v-if="hasNotes">
        <button class="post__more" type="button" @click="open = !open">
          {{ open ? '收起手记' : '展开手记' }}
          <span aria-hidden="true">{{ open ? '↑' : '↓' }}</span>
        </button>

        <ul v-show="open" class="post__notes">
          <li v-for="(item, i) in post.highlights" :key="i">{{ item }}</li>
        </ul>
      </template>
    </div>
  </article>
</template>

<style scoped>
.post {
  display: grid;
  grid-template-columns: minmax(120px, 200px) 1fr;
  gap: 1.1rem 1.35rem;
  padding: 1.35rem 0;
  border-bottom: 1px solid var(--blog-line);
}

.post__cover {
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: #d7dde5;
  box-shadow: 0 10px 28px rgba(28, 36, 48, 0.08);
}

.post__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.55s ease;
}

.post:hover .post__cover img {
  transform: scale(1.04);
}

.post__placeholder {
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  gap: 0.35rem;
  text-align: center;
  background:
    linear-gradient(145deg, color-mix(in srgb, var(--accent) 22%, #eef2f6), #e7ecf2);
  color: var(--accent);
}

.post__no {
  font-family: var(--font-display);
  font-size: 2rem;
  letter-spacing: 0.06em;
  line-height: 1;
}

.post__placeholder-label {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  opacity: 0.75;
}

.post__main {
  min-width: 0;
  display: grid;
  align-content: start;
  gap: 0.6rem;
}

.post__top {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem 0.75rem;
  font-size: 0.78rem;
  color: var(--blog-soft);
}

.post__category {
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.post__title {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.15rem, 2.4vw, 1.45rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.4;
  color: var(--blog-ink);
}

.post__index {
  margin-right: 0.2rem;
  color: var(--blog-soft);
}

.post__excerpt {
  margin: 0;
  font-size: 0.93rem;
  line-height: 1.75;
  color: var(--blog-muted);
}

.post__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.post__tags li {
  font-size: 0.72rem;
  color: var(--blog-soft);
  border: 1px solid var(--blog-line);
  border-radius: 999px;
  padding: 0.18rem 0.5rem;
  background: rgba(255, 255, 255, 0.55);
}

.post__more {
  justify-self: start;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 0;
  background: none;
  padding: 0;
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

.post__more:hover {
  opacity: 0.8;
}

.post__notes {
  margin: 0.15rem 0 0;
  padding: 0.8rem 0.95rem;
  list-style: none;
  display: grid;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid var(--blog-line);
  border-radius: 12px;
}

.post__notes li {
  position: relative;
  padding-left: 0.9rem;
  font-size: 0.86rem;
  line-height: 1.7;
  color: var(--blog-muted);
}

.post__notes li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

@media (max-width: 720px) {
  .post {
    grid-template-columns: 1fr;
  }

  .post__cover {
    max-width: 240px;
  }
}
</style>
