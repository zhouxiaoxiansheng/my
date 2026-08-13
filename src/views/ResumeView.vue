<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { profile } from '../data/profile'
import { experiences } from '../data/experiences'
import { projects } from '../data/projects'
</script>

<template>
  <div class="resume-page">
    <nav class="nav">
      <RouterLink class="nav__brand" to="/">周玉佂</RouterLink>
      <div class="nav__links">
        <RouterLink class="nav__link" to="/">首页</RouterLink>
        <RouterLink class="nav__link" to="/blog">博客</RouterLink>
        <a class="nav__link" :href="profile.github" rel="noreferrer" target="_blank">GitHub</a>
      </div>
    </nav>

    <div class="sheet">
      <header class="header">
        <h1>{{ profile.name }}</h1>
        <div class="base-info">
          <span>{{ profile.gender }} · {{ profile.age }}岁 · 籍贯：{{ profile.hometown }}</span>
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
            <a :href="profile.blog" rel="noreferrer" target="_blank">个人博客</a>
          </span>
          <span>
            💻
            <a :href="profile.github" rel="noreferrer" target="_blank">GitHub</a>
          </span>
        </div>
        <div class="intent">
          <span class="pill">{{ profile.years }}</span>
          <span class="pill">求职意向：{{ profile.intent }}</span>
          <span class="pill">期望薪资：{{ profile.salary }}</span>
          <span class="pill">期望城市：{{ profile.city }}</span>
        </div>
      </header>

      <div class="content">
        <section>
          <h2 class="sec-title">个人优势</h2>
          <ul class="list">
            <li v-for="item in profile.advantages" :key="item.title">
              <strong>{{ item.title }}：</strong>{{ item.text }}
            </li>
          </ul>
        </section>

        <section>
          <h2 class="sec-title">工作经历</h2>
          <article v-for="job in experiences" :key="job.id" class="block">
            <div class="block__head">
              <h3>
                {{ job.company }}
                <span class="role">{{ job.role }}</span>
              </h3>
              <time>{{ job.period }}</time>
            </div>
            <ul class="list">
              <li v-for="(point, i) in job.highlights" :key="i">{{ point }}</li>
            </ul>
          </article>
        </section>

        <section>
          <h2 class="sec-title">项目经历</h2>
          <article v-for="project in projects" :key="project.id" class="block">
            <div class="block__head">
              <h3>{{ project.title }}</h3>
              <time>{{ project.period }}</time>
            </div>
            <div class="stack">{{ project.stack.join(' · ') }}</div>
            <p class="desc">{{ project.summary }}</p>
            <ul class="list">
              <li v-for="(point, i) in project.highlights" :key="i">{{ point }}</li>
            </ul>
          </article>
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

.nav__brand {
  font-family: var(--font-display);
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  color: var(--ink);
  text-decoration: none;
}

.nav__links {
  display: flex;
  gap: 1.1rem;
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
  margin: 0 0 0.85rem;
  padding-bottom: 0.55rem;
  border-bottom: 2px solid var(--accent);
  font-size: 1.05rem;
  color: var(--accent);
  letter-spacing: 0.04em;
}

.block {
  padding: 0.9rem 0;
  border-bottom: 1px dashed color-mix(in srgb, var(--ink) 12%, transparent);
}

.block:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.block__head {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.4rem 1rem;
  align-items: baseline;
  margin-bottom: 0.55rem;
}

.block__head h3 {
  margin: 0;
  font-size: 1rem;
  color: var(--ink);
}

.role {
  margin-left: 0.45rem;
  color: var(--accent);
  font-weight: 600;
  font-size: 0.9rem;
}

.block__head time {
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

.list strong {
  color: var(--ink);
}

@media (max-width: 720px) {
  .content,
  .header {
    padding-left: 1.1rem;
    padding-right: 1.1rem;
  }

  .role {
    display: block;
    margin-left: 0;
    margin-top: 0.25rem;
  }
}
</style>
