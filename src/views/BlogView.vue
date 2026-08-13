<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BlogMasthead from '../components/BlogMasthead.vue'
import BlogFeed from '../components/BlogFeed.vue'
</script>

<template>
  <div class="blog">
    <nav class="nav">
      <div class="nav__left">
        <RouterLink class="nav__back" to="/">← 返回</RouterLink>
      </div>
      <div class="nav__links">
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

.nav__left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
}

.nav__back {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  flex-shrink: 0;
  padding: 0.38rem 0.78rem;
  border-radius: 999px;
  border: 1px solid var(--blog-line);
  background: rgba(255, 255, 255, 0.7);
  color: var(--blog-ink);
  font-size: 0.84rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.nav__back:hover {
  background: rgba(255, 255, 255, 0.95);
  border-color: color-mix(in srgb, var(--blog-accent) 35%, transparent);
  color: var(--blog-accent);
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
