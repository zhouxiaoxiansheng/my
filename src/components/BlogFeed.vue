<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { getProjectPosts, getTechArticles } from '../data/posts'
import type { BlogPostType } from '../data/posts'
import { useLocale } from '../composables/useLocale'
import BlogPostCard from './BlogPostCard.vue'

const { locale, t } = useLocale()
const activeTab = ref<BlogPostType>('project')

const projectPosts = computed(() => getProjectPosts(locale.value))
const techArticles = computed(() => getTechArticles(locale.value))
const activePosts = computed(() =>
  activeTab.value === 'project' ? projectPosts.value : techArticles.value,
)
const feedDesc = computed(() =>
  activeTab.value === 'project'
    ? t.value.blog.feedDescProjects(projectPosts.value.length)
    : t.value.blog.feedDescArticles(techArticles.value.length),
)

const tabFromHash = (): BlogPostType => {
  const hash = window.location.hash.replace('#', '')
  return hash === 'articles' ? 'article' : 'project'
}

const setActiveTab = (tab: BlogPostType) => {
  activeTab.value = tab
  const hash = tab === 'article' ? '#articles' : '#projects'
  if (window.location.hash !== hash) {
    history.replaceState(null, '', hash)
  }
}

const syncTabFromHash = () => {
  activeTab.value = tabFromHash()
}

onMounted(() => {
  syncTabFromHash()
  window.addEventListener('hashchange', syncTabFromHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', syncTabFromHash)
})
</script>

<template>
  <section id="posts" class="feed">
    <div class="feed__head">
      <div class="feed__head-row">
        <div class="feed__head-text">
          <h2>{{ t.blog.recentUpdates }}</h2>
          <p>{{ feedDesc }}</p>
        </div>

        <div class="feed__tabs" role="tablist">
        <button
          type="button"
          role="tab"
          class="feed__tab"
          :class="{ 'feed__tab--active': activeTab === 'project' }"
          :aria-selected="activeTab === 'project'"
          @click="setActiveTab('project')"
        >
          {{ t.blog.tabs.projects }}
          <span class="feed__tab-count">{{ projectPosts.length }}</span>
        </button>
        <button
          type="button"
          role="tab"
          class="feed__tab"
          :class="{ 'feed__tab--active': activeTab === 'article' }"
          :aria-selected="activeTab === 'article'"
          @click="setActiveTab('article')"
        >
          {{ t.blog.tabs.articles }}
          <span class="feed__tab-count">{{ techArticles.length }}</span>
        </button>
        </div>
      </div>
    </div>

    <div v-if="activePosts.length" class="feed__list">
      <BlogPostCard
        v-for="(post, index) in activePosts"
        :key="post.id"
        :post="post"
        :index="index"
      />
    </div>

    <p v-else class="feed__empty">{{ t.blog.emptyArticles }}</p>
  </section>
</template>

<style scoped>
.feed {
  max-width: min(1240px, 100%);
  margin: 0 auto;
  padding: 2rem clamp(1.25rem, 5vw, 3rem) 4rem;
}

.feed__head {
  margin-bottom: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--blog-line);
}

.feed__head-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem 1.5rem;
}

.feed__head-text {
  min-width: 0;
}

.feed__head-text h2 {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--blog-ink);
}

.feed__head-text p {
  margin: 0.35rem 0 0;
  font-size: 0.84rem;
  color: var(--blog-soft);
}

.feed__tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  flex-shrink: 0;
}

.feed__tab {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.95rem;
  border: 1px solid var(--blog-line);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.55);
  color: var(--blog-soft);
  font-size: 0.86rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;
}

.feed__tab:hover {
  background: rgba(255, 255, 255, 0.9);
  color: var(--blog-accent);
}

.feed__tab--active {
  background: rgba(47, 93, 122, 0.1);
  border-color: color-mix(in srgb, var(--blog-accent) 35%, transparent);
  color: var(--blog-accent);
}

.feed__tab-count {
  min-width: 1.25rem;
  padding: 0.05rem 0.35rem;
  border-radius: 999px;
  background: rgba(28, 36, 48, 0.06);
  font-size: 0.72rem;
  font-weight: 700;
  text-align: center;
}

.feed__tab--active .feed__tab-count {
  background: rgba(47, 93, 122, 0.14);
}

@media (max-width: 720px) {
  .feed__head-row {
    flex-direction: column;
    gap: 0.85rem;
  }

  .feed__tabs {
    justify-content: flex-start;
  }
}

.feed__list {
  display: grid;
  gap: 1.25rem;
  margin-top: 1.35rem;
}

@media (min-width: 1280px) {
  .feed__list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.35rem;
  }
}

.feed__empty {
  margin: 2rem 0 0;
  padding: 2.5rem 1.5rem;
  border: 1px dashed var(--blog-line);
  border-radius: 14px;
  text-align: center;
  font-size: 0.92rem;
  color: var(--blog-soft);
  background: rgba(255, 255, 255, 0.45);
}
</style>
