<script setup lang="ts">
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <section id="projects" class="projects">
    <div class="projects__head">
      <p
        class="eyebrow"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
      >
        Selected Work
      </p>
      <h2
        v-motion
        :initial="{ opacity: 0, y: 28 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 100 } }"
      >
        我最近做的项目
      </h2>
      <p
        class="lead"
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 700, delay: 180 } }"
      >
        从心理健康平台到 AI 膳食助手，再到医疗桌面与金融核对系统——卡片内是登录页预览与核心技术亮点。
      </p>
    </div>

    <div class="projects__grid">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>

<style scoped>
.projects {
  position: relative;
  padding: clamp(3.5rem, 8vh, 6rem) clamp(1.25rem, 6vw, 5rem) 5rem;
}

.projects__head {
  max-width: 40rem;
  margin-bottom: clamp(2rem, 5vw, 3.2rem);
}

.eyebrow {
  margin: 0 0 0.7rem;
  font-size: 0.8rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 700;
}

.projects__head h2 {
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

.projects__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1.1rem, 2.5vw, 1.75rem);
}

@media (max-width: 860px) {
  .projects__grid {
    grid-template-columns: 1fr;
  }
}
</style>
