import type { Project } from './projects'

export const projectsEn: Project[] = [
  {
    id: 'mind-camera',
    title: 'Mind Camera',
    period: 'Sep 2024 — Present',
    stack: ['Vue 3', 'Element UI', 'Vant UI', 'Axios', 'Pinia'],
    summary:
      'Mental health and assessment platform covering scale testing, comprehensive psychological evaluation, institutional billing, and cognitive tasks across Web / H5 / Mini Program.',
    highlights: [
      'Led smooth Vue 2 → Vue 3 upgrade; reduced codebase by ~25% with smoother component responsiveness',
      'Dual UI strategy: Element on PC admin + Vant on mobile, with Flex and media queries for full responsive coverage',
      'Built AI psychological assessment assistant with SSE streaming Q&A and intelligent report interpretation',
    ],
    image: '/projects/mind-camera.webp',
    accent: '#0f7a6e',
  },
  {
    id: 'shanzhidao',
    title: 'Shanzhidao AI Health Management Mini Program',
    period: 'Jun 2026 — Present',
    stack: ['uni-app', 'Vue 3', 'TypeScript', 'Doubao AI', 'SSE', 'Tailwind CSS'],
    summary:
      'Doubao LLM-powered health recipe recommendation and diet management mini program with AI dietary diagnosis, conversational meal planning, and health metric tracking.',
    highlights: [
      'Integrated Volcengine Doubao API with SSE typewriter streaming; frontend buffering and incremental DOM updates to eliminate stutter',
      'Pinia unified session state: history persistence, prompt context stitching, retry on failure for stable interaction',
      'Subpackage preloading + CDN kept main bundle under 1.5MB; cold start time reduced by ~40%',
    ],
    image: '/projects/shanzhidao.webp',
    accent: '#2f8f5b',
  },
  {
    id: 'cognitive-rehab',
    title: 'Medical Cognitive Rehabilitation Assessment Desktop System',
    period: 'Aug 2024 — Present',
    stack: ['Electron', 'Vue 3', 'Element Plus', 'ECharts', 'Node.js'],
    summary:
      'Offline desktop workstation for hospital diagnosis and rehabilitation training, integrating frontend UI, embedded Java services, and local database for cognitive impairment assessment.',
    highlights: [
      'Electron dual-screen: doctor main display + patient secondary display with storage event sync loop for low-latency task coordination',
      'Node.js child process manages JAR and local DB with one-click start/stop; full offline operation without network',
    ],
    image: '/projects/cognitive-rehab.webp',
    accent: '#3a6ea5',
  },
  {
    id: 'consistency-check',
    title: 'Business Consistency Verification Center & Data Deviation Platform',
    period: 'Nov 2021 — Aug 2024',
    stack: ['Vue 2 / Vue 3', 'Element UI', 'Vant', 'ECharts', 'Webpack'],
    summary:
      'Real-time transaction stream verification and reconciliation with single-order tracking, rule configuration, and complex exception detail management.',
    highlights: [
      'Axios wrapper with silent token refresh and unified error code interception to reduce page crash rate',
      'Dynamic ECharts charts and rich text component encapsulation; keep-alive multi-tab caching doubled revisit load speed',
      'Route guards + dynamic routes for button-level fine-grained permission control',
    ],
    image: '/projects/consistency-check.webp',
    accent: '#5b6b8c',
  },
]
