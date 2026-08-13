<script setup lang="ts">
import { experiences } from '../data/experiences'
</script>

<template>
  <section id="experience" class="experience">
    <div class="experience__head">
      <p
        class="eyebrow"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        Experience
      </p>
      <h2
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
      >
        工作经历
      </h2>
      <p
        class="lead"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 180 } }"
      >
        从金融级中后台到医疗多端产品，公司名称与职责如下。
      </p>
    </div>

    <ol class="timeline">
      <li
        v-for="(item, index) in experiences"
        :key="item.id"
        class="timeline__item"
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visibleOnce="{
          opacity: 1,
          y: 0,
          transition: { duration: 700, delay: 80 + index * 90 },
        }"
      >
        <div class="timeline__dot" aria-hidden="true" />
        <article class="job">
          <div class="job__head">
            <div>
              <h3 class="job__company">{{ item.company }}</h3>
              <p class="job__role">{{ item.role }}</p>
            </div>
            <time class="job__period">{{ item.period }}</time>
          </div>
          <ul class="job__points">
            <li v-for="(point, i) in item.highlights" :key="i">{{ point }}</li>
          </ul>
        </article>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.experience {
  position: relative;
  padding: clamp(2.5rem, 6vh, 4.5rem) clamp(1.25rem, 6vw, 5rem) 1rem;
}

.experience__head {
  max-width: 40rem;
  margin-bottom: clamp(1.8rem, 4vw, 2.8rem);
}

.eyebrow {
  margin: 0 0 0.7rem;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

.experience__head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 400;
  letter-spacing: 0.06em;
  color: var(--ink);
}

.lead {
  margin: 0.9rem 0 0;
  font-size: 1rem;
  line-height: 1.75;
  color: var(--ink-soft);
}

.timeline {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1.15rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0.55rem;
  top: 0.4rem;
  bottom: 0.4rem;
  width: 2px;
  background: linear-gradient(
    180deg,
    color-mix(in srgb, var(--accent) 55%, transparent),
    color-mix(in srgb, var(--accent) 8%, transparent)
  );
}

.timeline__item {
  position: relative;
  padding-left: 2rem;
}

.timeline__dot {
  position: absolute;
  left: 0.28rem;
  top: 1.35rem;
  width: 0.72rem;
  height: 0.72rem;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px color-mix(in srgb, var(--accent) 16%, white);
  z-index: 1;
}

.job {
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 1.25rem 1.35rem 1.35rem;
  backdrop-filter: blur(14px);
  box-shadow: 0 14px 40px rgba(22, 53, 47, 0.07);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.job:hover {
  transform: translateY(-3px);
  box-shadow: 0 20px 48px rgba(22, 53, 47, 0.11);
}

.job__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem 1.2rem;
  align-items: baseline;
  margin-bottom: 0.85rem;
}

.job__company {
  margin: 0;
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  font-weight: 700;
  color: var(--ink);
  line-height: 1.4;
}

.job__role {
  margin: 0.25rem 0 0;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--accent);
}

.job__period {
  font-size: 0.85rem;
  color: var(--ink-muted);
  font-weight: 600;
  white-space: nowrap;
}

.job__points {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.5rem;
}

.job__points li {
  position: relative;
  padding-left: 0.95rem;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--ink-soft);
}

.job__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}
</style>
