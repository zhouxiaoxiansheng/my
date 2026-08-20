<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import LanguageSwitcher from '../components/LanguageSwitcher.vue'
import { getExperiences, getProfile, getProjects } from '../data/localized'
import { useLocale } from '../composables/useLocale'

const { locale, t } = useLocale()
const profile = computed(() => getProfile(locale.value))
const experiences = computed(() => getExperiences(locale.value))
const projects = computed(() => getProjects(locale.value))
</script>

<template>
  <div class="resume-page">
    <nav class="nav">
      <div class="nav__left">
        <RouterLink class="nav__back" to="/">{{ t.nav.back }}</RouterLink>
      </div>
      <div class="nav__links">
        <RouterLink class="nav__link" to="/blog">{{ t.nav.blog }}</RouterLink>
        <a class="nav__link" :href="profile.github" rel="noreferrer" target="_blank">GitHub</a>
        <LanguageSwitcher />
      </div>
    </nav>

    <div class="sheet">
      <header class="header">
        <h1>{{ profile.name }}</h1>
        <div class="base-info">
          <span>
            {{ profile.gender }} · {{ profile.age }}{{ t.resume.ageSuffix }} ·
            {{ t.resume.hometownPrefix }}{{ profile.hometown }}
          </span>
          <span>
            📱
            <a :href="`tel:${profile.phone}`">{{ profile.phone }}</a>
          </span>
          <span>
            ✉
            <a :href="`mailto:${profile.email}`">{{ profile.email }}</a>
          </span>
          <span>
            🌐
            <a :href="profile.blog" rel="noreferrer" target="_blank">{{ t.resume.personalBlog }}</a>
          </span>
          <span>
            💻
            <a :href="profile.github" rel="noreferrer" target="_blank">GitHub</a>
          </span>
        </div>
        <div class="intent">
          <span class="pill">{{ profile.years }}</span>
          <span class="pill">{{ t.resume.intentLabel }}{{ profile.intent }}</span>
          <span class="pill">{{ t.resume.salaryLabel }}{{ profile.salary }}</span>
          <span class="pill">{{ t.resume.cityLabel }}{{ profile.city }}</span>
        </div>
      </header>

      <div class="content">
        <section>
          <h2 class="sec-title">{{ t.resume.about }}</h2>
          <div class="card-grid card-grid--about">
            <article
              v-for="(item, index) in profile.advantages"
              :key="item.title"
              class="info-card"
            >
              <span class="info-card__index" aria-hidden="true">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <h3 class="info-card__title">{{ item.title }}</h3>
              <p class="info-card__text">{{ item.text }}</p>
            </article>
          </div>
        </section>

        <section>
          <h2 class="sec-title">{{ t.resume.experience }}</h2>
          <div class="card-grid card-grid--exp">
            <article v-for="job in experiences" :key="job.id" class="exp-card">
              <div class="exp-card__head">
                <div>
                  <h3 class="exp-card__company">{{ job.company }}</h3>
                  <p class="exp-card__role">{{ job.role }}</p>
                </div>
                <time class="exp-card__period">{{ job.period }}</time>
              </div>
              <ul class="exp-card__list">
                <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
              </ul>
            </article>
          </div>
        </section>

        <section>
          <h2 class="sec-title">{{ t.resume.projects }}</h2>
          <div class="card-grid card-grid--projects">
            <article v-for="project in projects" :key="project.id" class="project-card">
              <div class="project-card__head">
                <h3>{{ project.title }}</h3>
                <time>{{ project.period }}</time>
              </div>
              <div class="stack">{{ project.stack.join(' · ') }}</div>
              <p class="desc">{{ project.summary }}</p>
              <ul class="list">
                <li v-for="(point, i) in project.highlights" :key="i">{{ point }}</li>
              </ul>
            </article>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-page {
  padding: 5rem clamp(1rem, 4vw, 2rem) 2rem;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.25rem, 5vw, 3.5rem);
  background: linear-gradient(to bottom, rgba(236, 242, 239, 0.92), rgba(236, 242, 239, 0));
  backdrop-filter: blur(8px);
}

.nav__left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.nav__back {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--ink) 14%, transparent);
  background: rgba(255, 255, 255, 0.72);
  color: var(--ink);
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.nav__back:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: color-mix(in srgb, var(--accent) 40%, transparent);
  color: var(--accent);
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.nav__link {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--ink-soft);
  text-decoration: none;
}

.nav__link:hover,
.nav__link.router-link-active {
  color: var(--accent);
}

.sheet {
  max-width: 920px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(255, 255, 255, 0.95);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 50px rgba(22, 53, 47, 0.1);
}

.header {
  padding: 1.8rem 2rem 1.4rem;
  background: linear-gradient(135deg, #0d4f47 0%, #1a6f64 55%, #2f8f7a 100%);
  color: #fff;
}

.header h1 {
  margin: 0 0 0.7rem;
  font-family: var(--font-display);
  font-size: clamp(1.9rem, 4vw, 2.4rem);
  letter-spacing: 0.08em;
  font-weight: 400;
}

.base-info {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem 1.1rem;
  font-size: 0.9rem;
  opacity: 0.95;
}

.base-info a {
  color: inherit;
  text-decoration: none;
}

.base-info a:hover {
  text-decoration: underline;
}

.intent {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.pill {
  display: inline-flex;
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.22);
  font-size: 0.8rem;
}

.content {
  padding: 0.4rem 2rem 2rem;
}

section {
  margin-top: 1.4rem;
}

.sec-title {
  margin: 0 0 0.95rem;
  padding-bottom: 0.55rem;
  border-bottom: 2px solid var(--accent);
  font-size: 1.05rem;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.card-grid {
  display: grid;
  gap: 0.9rem;
}

.card-grid--about {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card-grid--exp,
.card-grid--projects {
  grid-template-columns: 1fr;
}

.info-card,
.exp-card,
.project-card {
  position: relative;
  padding: 1.15rem 1.2rem;
  border-radius: 16px;
  background: color-mix(in srgb, var(--accent) 4%, white);
  border: 1px solid color-mix(in srgb, var(--ink) 8%, transparent);
  box-shadow: 0 8px 24px rgba(22, 53, 47, 0.05);
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.info-card:hover,
.exp-card:hover,
.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 32px rgba(22, 53, 47, 0.1);
}

.info-card__index {
  display: inline-block;
  margin-bottom: 0.55rem;
  font-family: var(--font-display);
  font-size: 0.95rem;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.info-card__title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--ink);
  line-height: 1.4;
}

.info-card__text {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--ink-soft);
}

.exp-card__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.45rem 1rem;
  align-items: baseline;
  margin-bottom: 0.75rem;
}

.exp-card__company {
  margin: 0;
  font-size: 1.02rem;
  color: var(--ink);
  line-height: 1.4;
}

.exp-card__role {
  margin: 0.3rem 0 0;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
}

.exp-card__period {
  color: var(--ink-muted);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.exp-card__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.45rem;
}

.exp-card__list li {
  position: relative;
  padding-left: 0.95rem;
  color: var(--ink-soft);
  line-height: 1.7;
  font-size: 0.9rem;
}

.exp-card__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
}

.project-card__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.4rem 1rem;
  align-items: baseline;
  margin-bottom: 0.55rem;
}

.project-card__head h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--ink);
}

.project-card__head time {
  color: var(--ink-muted);
  font-size: 0.85rem;
  white-space: nowrap;
}

.stack {
  display: inline-block;
  margin: 0 0 0.55rem;
  padding: 0.2rem 0.65rem;
  background: color-mix(in srgb, var(--accent) 12%, white);
  color: var(--accent);
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
}

.desc {
  margin: 0 0 0.55rem;
  color: var(--ink-muted);
  font-size: 0.9rem;
  line-height: 1.65;
}

.list {
  margin: 0;
  padding-left: 1.1em;
}

.list li {
  margin: 0.35rem 0;
  color: var(--ink-soft);
  line-height: 1.7;
  font-size: 0.92rem;
}

@media (max-width: 720px) {
  .content,
  .header {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  .card-grid--about {
    grid-template-columns: 1fr;
  }
}
</style>
