<script setup lang="ts">
import { blogPosts } from '../data/posts'
import BlogPostCard from './BlogPostCard.vue'
</script>

<template>
  <section id="posts" class="feed">
    <div class="feed__head">
      <h2>最近更新</h2>
      <p>共 {{ blogPosts.length }} 篇项目手记，含医疗认知相关交付与核心作品实践。</p>
    </div>

    <div class="feed__list">
      <BlogPostCard
        v-for="(post, index) in blogPosts"
        :key="post.id"
        :post="post"
        :index="index"
      />
    </div>
  </section>
</template>

<style scoped>
.feed {
  max-width: 860px;
  margin: 0 auto;
  padding: 2rem clamp(1.25rem, 5vw, 3rem) 4rem;
}

.feed__head {
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--blog-line);
}

.feed__head h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: var(--blog-ink);
}

.feed__head p {
  margin: 0.45rem 0 0;
  font-size: 0.92rem;
  color: var(--blog-soft);
}

.feed__list {
  display: grid;
}
</style>
