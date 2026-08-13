<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Project } from '../data/projects'

const props = defineProps<{
  project: Project
  index: number
}>()

const cardRef = ref<HTMLElement | null>(null)
const tilt = ref({ x: 0, y: 0 })

const delay = computed(() => 80 + props.index * 90)
const webpSrc = computed(() => props.project.image.replace(/\.(png|jpe?g|webp)$/i, '.webp'))
const jpgSrc = computed(() => props.project.image.replace(/\.(png|jpe?g|webp)$/i, '.jpg'))

const onMove = (e: MouseEvent) => {
  const el = cardRef.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width
  const py = (e.clientY - rect.top) / rect.height
  tilt.value = {
    x: (py - 0.5) * -8,
    y: (px - 0.5) * 10,
  }
}

const onLeave = () => {
  tilt.value = { x: 0, y: 0 }
}
</script>

<template>
  <article
    ref="cardRef"
    class="card"
    :style="{
      '--accent': project.accent,
      transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
    }"
    v-motion
    :initial="{ opacity: 0, y: 56 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: { duration: 750, delay, ease: 'easeOut' },
    }"
    @mousemove="onMove"
    @mouseleave="onLeave"
  >
    <div class="card__media">
      <picture>
        <source :srcset="webpSrc" type="image/webp" />
        <img
          :src="jpgSrc"
          :alt="`${project.title} 登录界面`"
          width="960"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </picture>
      <div class="card__media-glow" />
    </div>

    <div class="card__body">
      <div class="card__meta">
        <h3 class="card__title">{{ project.title }}</h3>
        <time class="card__period">{{ project.period }}</time>
      </div>

      <p class="card__summary">{{ project.summary }}</p>

      <ul class="card__tags">
        <li v-for="tag in project.stack" :key="tag">{{ tag }}</li>
      </ul>

      <ul class="card__highlights">
        <li v-for="(item, i) in project.highlights" :key="i">{{ item }}</li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-rows: auto 1fr;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 24px;
  overflow: hidden;
  backdrop-filter: blur(14px);
  box-shadow:
    0 18px 50px rgba(22, 53, 47, 0.08),
    0 1px 0 rgba(255, 255, 255, 0.9) inset;
  transition:
    transform 0.25s ease,
    box-shadow 0.35s ease;
  will-change: transform;
}

.card:hover {
  box-shadow:
    0 28px 70px rgba(22, 53, 47, 0.14),
    0 0 0 1px color-mix(in srgb, var(--accent) 28%, transparent);
}

.card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: #dfe8e4;
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

.card:hover .card__media img {
  transform: scale(1.06);
}

.card__media-glow {
  position: absolute;
  inset: auto 0 0;
  height: 42%;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.55), transparent);
  pointer-events: none;
}

.card__body {
  display: grid;
  gap: 0.95rem;
  padding: 1.35rem 1.35rem 1.5rem;
}

.card__meta {
  display: grid;
  gap: 0.35rem;
}

.card__title {
  margin: 0;
  font-family: var(--font-body);
  font-size: clamp(1.15rem, 2vw, 1.35rem);
  font-weight: 700;
  color: var(--ink);
  line-height: 1.35;
}

.card__period {
  font-size: 0.82rem;
  letter-spacing: 0.04em;
  color: var(--accent);
  font-weight: 600;
}

.card__summary {
  margin: 0;
  font-size: 0.94rem;
  line-height: 1.7;
  color: var(--ink-soft);
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.card__tags li {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--ink);
  background: color-mix(in srgb, var(--accent) 12%, white);
  border: 1px solid color-mix(in srgb, var(--accent) 22%, transparent);
  border-radius: 999px;
  padding: 0.28rem 0.65rem;
}

.card__highlights {
  margin: 0.15rem 0 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.55rem;
}

.card__highlights li {
  position: relative;
  padding-left: 0.95rem;
  font-size: 0.86rem;
  line-height: 1.65;
  color: var(--ink-muted);
}

.card__highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 18%, transparent);
}
</style>
