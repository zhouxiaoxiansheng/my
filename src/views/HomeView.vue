<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { getExperiences, getProfile, getProjects } from '../data/localized'
import { useLocale } from '../composables/useLocale'

const { locale, t } = useLocale()
const profile = computed(() => getProfile(locale.value))
const experiences = computed(() => getExperiences(locale.value))
const projects = computed(() => getProjects(locale.value))

const openExp = ref<string | null>(null)

const syncOpenExp = () => {
  openExp.value = experiences.value[0]?.id ?? null
}

syncOpenExp()

const toggleExp = (id: string) => {
  openExp.value = openExp.value === id ? null : id
}

watch(locale, syncOpenExp)

const companyInitial = (name: string) => name.slice(0, 1)

const imageSrc = (path: string, ext: 'webp' | 'jpg') =>
  path.replace(/\.(png|jpe?g|webp)$/i, `.${ext}`)
</script>

<template>
  <main id="top" class="home">
    <section
      class="hero panel"
      v-motion
      :initial="{ opacity: 0, y: 24 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 700, delay: 60 } }"
    >
      <div class="hero__copy">
        <p class="hero__status">
          <span class="hero__dot" aria-hidden="true" />
          {{ profile.status }}
        </p>
        <h1 class="hero__title">
          {{ t.home.hello }}
          <span class="hero__name">{{ profile.name }}</span>
        </h1>
        <p class="hero__tagline">{{ profile.tagline }}</p>
      </div>
      <div class="hero__avatar">
        <div class="hero__avatar-clip">
          <img
            class="hero__avatar-face"
            src="/avatar.png"
            :alt="`${profile.name}${t.home.avatarAltSuffix}`"
            width="140"
            height="140"
          />
        </div>
      </div>
    </section>

    <section
      class="panel about"
      v-motion
      :initial="{ opacity: 0, y: 28 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 650 } }"
    >
      <h2 class="section-title">{{ t.home.about }}</h2>
      <p class="about__text">{{ profile.about }}</p>
    </section>

    <section class="block">
      <h2 class="section-title">{{ t.home.experience }}</h2>
      <div class="exp-list">
        <article
          v-for="(job, index) in experiences"
          :key="job.id"
          class="exp-card"
          :class="{ 'exp-card--open': openExp === job.id }"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 600, delay: index * 70 },
          }"
        >
          <button class="exp-card__toggle" type="button" @click="toggleExp(job.id)">
            <span class="exp-card__logo" aria-hidden="true">{{ companyInitial(job.company) }}</span>
            <span class="exp-card__meta">
              <span class="exp-card__company">{{ job.company }}</span>
              <span class="exp-card__role">{{ job.role }}</span>
              <span class="exp-card__period">{{ job.period }}</span>
            </span>
            <span class="exp-card__chevron" aria-hidden="true">⌃</span>
          </button>
          <ul v-show="openExp === job.id" class="exp-card__points">
            <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="block">
      <h2 class="section-title">{{ t.home.skills }}</h2>
      <ul class="skills">
        <li v-for="skill in profile.skills" :key="skill">{{ skill }}</li>
      </ul>
    </section>

    <section id="projects" class="projects">
      <p class="projects__badge">{{ t.home.projectsBadge }}</p>
      <h2 class="projects__title">{{ t.home.projectsTitle }}</h2>
      <p class="projects__lead">
        {{ t.home.projectsLead }}
      </p>

      <div class="projects__grid">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="project-card"
          :style="{ '--accent': project.accent }"
          v-motion
          :initial="{ opacity: 0, y: 36 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 700, delay: index * 80 },
          }"
        >
          <div class="project-card__media">
            <picture>
              <source :srcset="imageSrc(project.image, 'webp')" type="image/webp" />
              <img
                :src="imageSrc(project.image, 'jpg')"
                :alt="project.title"
                width="960"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
          <div class="project-card__body">
            <h3>{{ project.title }}</h3>
            <time>{{ project.period }}</time>
            <p>{{ project.summary }}</p>
            <ul class="project-card__tags">
              <li v-for="tag in project.stack" :key="tag">{{ tag }}</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section
      class="contact"
      v-motion
      :initial="{ opacity: 0, y: 28 }"
      :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700 } }"
    >
      <div class="contact__copy">
        <p class="contact__eyebrow">{{ t.home.contactEyebrow }}</p>
        <h2>{{ t.home.contactTitle }}</h2>
        <p>{{ t.home.contactDesc }}</p>
      </div>
      <div class="contact__actions">
        <a class="contact__btn" :href="`tel:${profile.phone}`">
          <span class="contact__icon" aria-hidden="true">☎</span>
          <span>{{ profile.phone }}</span>
          <span class="contact__arrow" aria-hidden="true">→</span>
        </a>
        <a class="contact__btn" :href="`mailto:${profile.email}`">
          <span class="contact__icon" aria-hidden="true">✉</span>
          <span>{{ profile.email }}</span>
          <span class="contact__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
.home {
  width: min(100% - 2rem, 980px);
  margin: 0 auto;
  padding: 1.25rem 0 2.5rem;
  display: grid;
  gap: 1.15rem;
}

.panel {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.98);
  border-radius: 28px;
  box-shadow: 0 16px 40px rgba(22, 53, 47, 0.06);
}

.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.8fr;
  align-items: center;
  gap: 1.5rem;
  padding: clamp(1.5rem, 4vw, 2.4rem);
  overflow: hidden;
}

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin: 0 0 1rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 8%, white);
  color: var(--ink-soft);
  font-size: 0.82rem;
  font-weight: 600;
}

.hero__dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: #22a06b;
  box-shadow: 0 0 0 4px rgba(34, 160, 107, 0.16);
}

.hero__title {
  margin: 0;
  font-size: clamp(1.85rem, 4.5vw, 2.6rem);
  font-weight: 700;
  line-height: 1.25;
  color: var(--ink);
}

.hero__name {
  background: linear-gradient(105deg, #0f7a6e 0%, #2f8f7a 45%, #3a6ea5 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero__tagline {
  margin: 0.9rem 0 0;
  max-width: 34rem;
  font-size: clamp(0.95rem, 1.8vw, 1.05rem);
  line-height: 1.75;
  color: var(--ink-soft);
}

.hero__avatar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__avatar-clip {
  width: 132px;
  height: 132px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow:
    0 0 0 5px rgba(255, 255, 255, 0.95),
    0 0 0 7px color-mix(in srgb, var(--accent) 18%, transparent),
    0 14px 32px rgba(15, 122, 110, 0.14);
}

.hero__avatar-face {
  width: 100%;
  height: 100%;
  max-width: none;
  object-fit: cover;
  object-position: center 8%;
  transform: scale(1.35);
  transform-origin: center 18%;
}

.about {
  padding: clamp(1.3rem, 3vw, 1.8rem);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  margin: 0 0 0.9rem;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--ink);
}

.section-title::after {
  content: '';
  width: 2.2rem;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #0f7a6e, #3a6ea5);
}

.about__text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--ink-soft);
}

.block {
  padding: 0.35rem 0.15rem 0;
}

.exp-list {
  display: grid;
  gap: 0.75rem;
}

.exp-card {
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(16, 47, 42, 0.06);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(22, 53, 47, 0.05);
}

.exp-card__toggle {
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem 1.1rem;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: pointer;
  font: inherit;
  color: inherit;
}

.exp-card__logo {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.85rem;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(145deg, #1a6f64, #0d4f47);
}

.exp-card__meta {
  display: grid;
  gap: 0.18rem;
  min-width: 0;
}

.exp-card__company {
  font-size: 1rem;
  font-weight: 700;
  color: var(--ink);
}

.exp-card__role {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--accent);
}

.exp-card__period {
  font-size: 0.8rem;
  color: var(--ink-muted);
}

.exp-card__chevron {
  color: var(--ink-muted);
  font-size: 1rem;
  transition: transform 0.25s ease;
}

.exp-card--open .exp-card__chevron {
  transform: rotate(0deg);
}

.exp-card:not(.exp-card--open) .exp-card__chevron {
  transform: rotate(180deg);
}

.exp-card__points {
  margin: 0;
  padding: 0 1.1rem 1.1rem 4.6rem;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.exp-card__points li {
  position: relative;
  padding-left: 0.85rem;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--ink-soft);
}

.exp-card__points li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.skills li {
  padding: 0.42rem 0.8rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 10%, white);
  border: 1px solid color-mix(in srgb, var(--accent) 16%, transparent);
  color: #1a4f55;
  font-size: 0.84rem;
  font-weight: 600;
}

.projects {
  margin-top: 1.2rem;
  padding: 1rem 0 0.4rem;
  text-align: center;
}

.projects__badge {
  display: inline-flex;
  margin: 0 0 0.7rem;
  padding: 0.28rem 0.75rem;
  border-radius: 999px;
  background: color-mix(in srgb, var(--accent) 12%, white);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
}

.projects__title {
  margin: 0;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: var(--ink);
}

.projects__lead {
  margin: 0.7rem auto 1.4rem;
  max-width: 34rem;
  color: var(--ink-soft);
  font-size: 0.95rem;
  line-height: 1.7;
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  text-align: left;
}

.project-card {
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(16, 47, 42, 0.06);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 36px rgba(22, 53, 47, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 48px rgba(22, 53, 47, 0.1);
}

.project-card__media {
  aspect-ratio: 16 / 10;
  background: #dfe8e4;
  overflow: hidden;
}

.project-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.project-card:hover .project-card__media img {
  transform: scale(1.04);
}

.project-card__body {
  display: grid;
  gap: 0.45rem;
  padding: 1.1rem 1.15rem 1.25rem;
}

.project-card__body h3 {
  margin: 0;
  font-size: 1.05rem;
  color: var(--ink);
}

.project-card__body time {
  font-size: 0.82rem;
  color: var(--accent);
  font-weight: 600;
}

.project-card__body p {
  margin: 0.15rem 0 0;
  font-size: 0.88rem;
  line-height: 1.65;
  color: var(--ink-soft);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.35rem 0 0;
  padding: 0;
  list-style: none;
}

.project-card__tags li {
  padding: 0.25rem 0.55rem;
  border-radius: 999px;
  background: #eef2f4;
  color: var(--ink-soft);
  font-size: 0.74rem;
  font-weight: 600;
}

.contact {
  margin-top: 0.6rem;
  display: grid;
  grid-template-columns: 1.2fr 0.9fr;
  gap: 1.4rem;
  align-items: center;
  padding: clamp(1.4rem, 3.5vw, 2rem);
  border-radius: 28px;
  color: #f4faf8;
  background:
    radial-gradient(500px 220px at 85% 20%, rgba(255, 255, 255, 0.14), transparent 60%),
    linear-gradient(125deg, #0d4f47 0%, #145f6e 48%, #1f4d78 100%);
  box-shadow: 0 20px 50px rgba(13, 79, 71, 0.22);
}

.contact__eyebrow {
  margin: 0 0 0.45rem;
  font-size: 0.85rem;
  opacity: 0.78;
}

.contact h2 {
  margin: 0;
  font-size: clamp(1.35rem, 3vw, 1.8rem);
}

.contact__copy p:last-child {
  margin: 0.55rem 0 0;
  opacity: 0.82;
  font-size: 0.92rem;
  line-height: 1.6;
}

.contact__actions {
  display: grid;
  gap: 0.7rem;
}

.contact__btn {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 0.75rem;
  padding: 0.9rem 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.14);
  color: inherit;
  text-decoration: none;
  transition: background 0.25s ease;
}

.contact__btn:hover {
  background: rgba(255, 255, 255, 0.16);
}

.contact__icon {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.16);
  font-size: 0.85rem;
}

.contact__arrow {
  opacity: 0.7;
}

@media (max-width: 820px) {
  .hero,
  .contact {
    grid-template-columns: 1fr;
  }

  .hero__avatar {
    order: -1;
  }

  .hero__avatar-clip {
    width: 112px;
    height: 112px;
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }

  .exp-card__points {
    padding-left: 1.1rem;
  }
}
</style>
