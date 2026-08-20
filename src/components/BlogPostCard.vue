<script setup lang="ts">
import { computed, onUnmounted, ref, watch } from 'vue'
import type { BlogPost } from '../data/posts'
import { useLocale } from '../composables/useLocale'

const props = defineProps<{
  post: BlogPost
  index: number
}>()

const { t } = useLocale()
const open = ref(false)
const hasNotes = computed(() => props.post.highlights.length > 0)
const delay = computed(() => 40 + Math.min(props.index, 12) * 40)
const webpSrc = computed(() => props.post.image?.replace(/\.(png|jpe?g|webp)$/i, '.webp') ?? '')
const jpgSrc = computed(() => props.post.image?.replace(/\.(png|jpe?g|webp)$/i, '.jpg') ?? '')

const openDialog = () => {
  open.value = true
}

const closeDialog = () => {
  open.value = false
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') closeDialog()
}

watch(open, (visible) => {
  if (visible) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
  } else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
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
      <picture v-if="post.image">
        <source :srcset="webpSrc" type="image/webp" />
        <img
          :src="jpgSrc"
          :alt="post.blogTitle"
          width="480"
          height="360"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div v-else class="post__placeholder">
        <span class="post__no">{{ post.no ?? String(index + 1).padStart(2, '0') }}</span>
        <span class="post__placeholder-label">{{ t.blog.projectExperience }}</span>
      </div>
    </div>

    <div class="post__main">
      <h2 class="post__title">
        <span v-if="post.no" class="post__index">{{ post.no }}.</span>
        {{ post.blogTitle }}
      </h2>

      <div class="post__top">
        <span class="post__category">{{ post.category }}</span>
        <time class="post__date">{{ post.publishedAt }}</time>
        <span class="post__read">{{ t.blog.readMinutes(post.readingMinutes) }}</span>
      </div>

      <p class="post__excerpt">{{ post.summary }}</p>

      <ul class="post__tags">
        <li v-for="tag in post.stack" :key="tag">{{ tag }}</li>
      </ul>

      <button v-if="hasNotes" class="post__more" type="button" @click="openDialog">
        {{ t.blog.expandDetails }}
        <span aria-hidden="true">↗</span>
      </button>
    </div>
  </article>

  <Teleport to="body">
    <Transition name="dialog">
      <div v-if="open" class="dialog-backdrop" @click.self="closeDialog">
        <div
          class="dialog"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`dialog-title-${post.id}`"
          :style="{ '--accent': post.accent }"
        >
          <header class="dialog__header">
            <div class="dialog__meta">
              <span class="dialog__category">{{ post.category }}</span>
              <time class="dialog__date">{{ post.publishedAt }}</time>
              <span class="dialog__read">{{ t.blog.readMinutes(post.readingMinutes) }}</span>
            </div>
            <h2 :id="`dialog-title-${post.id}`" class="dialog__title">{{ post.blogTitle }}</h2>
            <button
              class="dialog__close"
              type="button"
              :aria-label="t.blog.closeDialog"
              @click="closeDialog"
            >
              ×
            </button>
          </header>

          <div class="dialog__body">
            <p class="dialog__summary">{{ post.summary }}</p>

            <ul v-if="post.stack.length" class="dialog__tags">
              <li v-for="tag in post.stack" :key="tag">{{ tag }}</li>
            </ul>

            <ul class="dialog__notes">
              <li v-for="(item, i) in post.highlights" :key="i">{{ item }}</li>
            </ul>
          </div>

          <footer class="dialog__footer">
            <button class="dialog__btn" type="button" @click="closeDialog">
              {{ t.blog.closeDialog }}
            </button>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.post {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid var(--blog-line);
  border-left: 3px solid var(--accent);
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 8px 26px rgba(28, 36, 48, 0.06);
  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease,
    border-color 0.28s ease;
}

.post:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(28, 36, 48, 0.1);
  border-color: color-mix(in srgb, var(--accent) 22%, var(--blog-line));
}

.post__cover {
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 16 / 10;
  background: #d7dde5;
  box-shadow: 0 6px 18px rgba(28, 36, 48, 0.08);
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
  gap: 0.55rem;
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
  font-size: 0.96rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.35;
  color: var(--blog-ink);
  text-align: left;
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
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
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

.dialog-backdrop {
  --dialog-ink: #1c2430;
  --dialog-muted: #4a5564;
  --dialog-soft: #6d7786;
  --dialog-line: rgba(28, 36, 48, 0.12);

  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 1.25rem;
  background: rgba(20, 28, 38, 0.45);
  backdrop-filter: blur(6px);
}

.dialog {
  position: relative;
  width: min(640px, 100%);
  max-height: min(82vh, 760px);
  display: grid;
  grid-template-rows: auto 1fr auto;
  border-radius: 18px;
  border: 1px solid var(--dialog-line);
  background: linear-gradient(180deg, #fafbfc 0%, #f2f5f8 100%);
  box-shadow:
    0 24px 64px rgba(20, 28, 38, 0.18),
    0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  overflow: hidden;
}

.dialog__header {
  position: relative;
  padding: 1.35rem 3.2rem 1rem 1.45rem;
  border-bottom: 1px solid var(--dialog-line);
  background: rgba(255, 255, 255, 0.72);
}

.dialog__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem 0.75rem;
  font-size: 0.78rem;
  color: var(--dialog-soft);
}

.dialog__category {
  color: var(--accent);
  font-weight: 700;
  letter-spacing: 0.04em;
}

.dialog__title {
  margin: 0.55rem 0 0;
  font-family: var(--font-display);
  font-size: clamp(1.2rem, 3vw, 1.55rem);
  font-weight: 400;
  letter-spacing: 0.03em;
  line-height: 1.45;
  color: var(--dialog-ink);
}

.dialog__close {
  position: absolute;
  top: 0.85rem;
  right: 0.85rem;
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border: 0;
  border-radius: 999px;
  background: rgba(28, 36, 48, 0.06);
  color: var(--dialog-soft);
  font-size: 1.35rem;
  line-height: 1;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease, color 0.2s ease;
}

.dialog__close:hover {
  background: rgba(28, 36, 48, 0.1);
  color: var(--dialog-ink);
}

.dialog__body {
  padding: 1.25rem 1.45rem;
  overflow-y: auto;
}

.dialog__summary {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--dialog-muted);
}

.dialog__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
}

.dialog__tags li {
  font-size: 0.72rem;
  color: var(--dialog-soft);
  border: 1px solid var(--dialog-line);
  border-radius: 999px;
  padding: 0.18rem 0.5rem;
  background: rgba(255, 255, 255, 0.7);
}

.dialog__notes {
  margin: 1.15rem 0 0;
  padding: 0.95rem 1.05rem;
  list-style: none;
  display: grid;
  gap: 0.65rem;
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--dialog-line);
  border-radius: 12px;
}

.dialog__notes li {
  position: relative;
  padding-left: 0.95rem;
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--dialog-muted);
}

.dialog__notes li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.58em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.dialog__footer {
  display: flex;
  justify-content: flex-end;
  padding: 0.85rem 1.45rem 1.15rem;
  border-top: 1px solid var(--dialog-line);
  background: rgba(255, 255, 255, 0.72);
}

.dialog__btn {
  padding: 0.48rem 1.15rem;
  border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 10%, white);
  color: var(--accent);
  font-size: 0.86rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition: background 0.2s ease, opacity 0.2s ease;
}

.dialog__btn:hover {
  background: color-mix(in srgb, var(--accent) 16%, white);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.25s ease;
}

.dialog-enter-active .dialog,
.dialog-leave-active .dialog {
  transition:
    transform 0.28s ease,
    opacity 0.28s ease;
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-from .dialog,
.dialog-leave-to .dialog {
  opacity: 0;
  transform: translateY(16px) scale(0.98);
}

@media (min-width: 721px) {
  .post {
    grid-template-columns: minmax(200px, 240px) minmax(0, 1fr);
    gap: 1.35rem;
    padding: 1.15rem 1.25rem;
    align-items: stretch;
  }

  .post__cover {
    aspect-ratio: auto;
    min-height: 168px;
    align-self: stretch;
  }

  .post__main {
    padding: 0.15rem 0;
  }
}

@media (min-width: 1280px) {
  .post {
    grid-template-columns: minmax(148px, 172px) minmax(0, 1fr);
    gap: 1rem;
    padding: 1rem 1.05rem;
  }

  .post__title {
    font-size: 0.92rem;
  }

  .post__excerpt {
    -webkit-line-clamp: 2;
    font-size: 0.88rem;
  }

  .post__tags li {
    font-size: 0.68rem;
  }
}

@media (max-width: 720px) {
  .post__cover {
    max-width: none;
  }

  .dialog-backdrop {
    padding: 0.75rem;
    align-items: end;
  }

  .dialog {
    max-height: 88vh;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
</style>
