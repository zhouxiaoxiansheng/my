<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BlogMasthead from '../components/BlogMasthead.vue'
import BlogFeed from '../components/BlogFeed.vue'
</script>

<template>
  <div class="blog">
    <nav class="nav">
      <RouterLink class="nav__brand" to="/blog">周玉佂的博客</RouterLink>
      <div class="nav__links">
        <RouterLink class="nav__link" to="/">首页</RouterLink>
        <RouterLink class="nav__link" to="/resume">简历</RouterLink>
        <a class="nav__link" href="#posts">文章</a>
        <a
          class="nav__link"
          href="https://github.com/zhouxiaoxiansheng/my"
          rel="noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </nav>

    <BlogMasthead />
    <BlogFeed />
  </div>
</template>

<style scoped>
.blog {
  --blog-ink: #1c2430;
  --blog-muted: #4a5564;
  --blog-soft: #6d7786;
  --blog-accent: #2f5d7a;
  --blog-line: rgba(28, 36, 48, 0.1);
  --blog-bg: #eef1f5;

  position: relative;
  min-height: 100svh;
  color: var(--blog-ink);
  background:
    radial-gradient(900px 420px at 12% -8%, #d9e4ef 0%, transparent 55%),
    radial-gradient(700px 380px at 92% 8%, #e4e0d8 0%, transparent 50%),
    linear-gradient(180deg, #f4f6f8 0%, var(--blog-bg) 48%, #e8ecf1 100%);
}

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem clamp(1.25rem, 5vw, 3rem);
  background: rgba(244, 246, 248, 0.86);
  border-bottom: 1px solid var(--blog-line);
  backdrop-filter: blur(10px);
}

.nav__brand {
  font-family: var(--font-display);
  font-size: 1.05rem;
  letter-spacing: 0.1em;
  color: var(--blog-ink);
  text-decoration: none;
}

.nav__links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.75rem 1rem;
}

.nav__link {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--blog-soft);
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav__link:hover,
.nav__link.router-link-active {
  color: var(--blog-accent);
}
</style>
