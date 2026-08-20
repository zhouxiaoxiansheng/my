import type { Locale } from '../composables/useLocale'
import { getProjects } from './localized'

export type BlogPostType = 'project' | 'article'

export interface BlogPost {
  id: string
  type: BlogPostType
  blogTitle: string
  category: string
  publishedAt: string
  readingMinutes: number
  summary: string
  stack: string[]
  highlights: string[]
  image?: string
  accent: string
  no?: number
}

type FeaturedMeta = Record<
  string,
  Pick<BlogPost, 'category' | 'blogTitle' | 'publishedAt' | 'readingMinutes'>
>

type MedicalProject = {
  no: number
  title: string
  category: string
  summary: string
  stack: string[]
  highlights: string[]
}

const featuredMetaZh: FeaturedMeta = {
  'mind-camera': {
    category: '项目经历',
    blogTitle: '心灵照相机：Vue 3 升级与 AI 流式测评助手',
    publishedAt: '2024.09',
    readingMinutes: 6,
  },
  shanzhidao: {
    category: 'AI 实践',
    blogTitle: '膳智道：豆包 SSE 流式对话与小程序性能优化',
    publishedAt: '2026.06',
    readingMinutes: 7,
  },
  'cognitive-rehab': {
    category: '桌面端',
    blogTitle: '认知康复桌面系统：Electron 双屏同步与离线打包',
    publishedAt: '2024.08',
    readingMinutes: 5,
  },
  'consistency-check': {
    category: '工程实践',
    blogTitle: '业务一致性核对中心：金融中后台组件化与权限体系',
    publishedAt: '2021.11',
    readingMinutes: 6,
  },
}

const featuredMetaEn: FeaturedMeta = {
  'mind-camera': {
    category: 'Projects',
    blogTitle: 'Mind Camera: Vue 3 Upgrade & AI Streaming Assessment Assistant',
    publishedAt: '2024.09',
    readingMinutes: 6,
  },
  shanzhidao: {
    category: 'AI Practice',
    blogTitle: 'Shanzhidao: Doubao SSE Streaming Chat & Mini Program Performance',
    publishedAt: '2026.06',
    readingMinutes: 7,
  },
  'cognitive-rehab': {
    category: 'Desktop',
    blogTitle: 'Cognitive Rehab Desktop: Electron Dual-Screen Sync & Offline Packaging',
    publishedAt: '2024.08',
    readingMinutes: 5,
  },
  'consistency-check': {
    category: 'Engineering',
    blogTitle: 'Consistency Verification Center: Financial Back-Office Components & Permissions',
    publishedAt: '2021.11',
    readingMinutes: 6,
  },
}

const medicalProjectsZh: MedicalProject[] = [
  {
    no: 12,
    title: '注意力认知效能测评系统',
    category: '认知测评',
    summary: '面向注意力与认知效能的测评系统，覆盖任务编排、数据采集与结果可视化。',
    stack: ['Vue 3', 'Electron', 'ECharts'],
    highlights: ['搭建注意力相关测评任务流程与结果报告页', '完成测评数据可视化与导出能力'],
  },
  {
    no: 13,
    title: '靶向-认知灵活性',
    category: '靶向训练',
    summary: '认知灵活性靶向训练模块，支持训练任务配置、过程记录与效果评估。',
    stack: ['Vue 3', 'TypeScript'],
    highlights: ['实现认知灵活性训练任务交互与进度记录'],
  },
  {
    no: 14,
    title: '靶向-神经振荡',
    category: '靶向训练',
    summary: '神经振荡相关靶向训练能力，结合训练反馈与数据沉淀。',
    stack: ['Vue 3', 'Electron'],
    highlights: ['完成神经振荡训练场景前端交互与状态同步'],
  },
  {
    no: 15,
    title: '飞行人因',
    category: '人因工程',
    summary: '飞行人因相关评估与训练系统前端，服务专业场景下的认知与操作测评。',
    stack: ['Vue 3', 'Electron', 'ECharts'],
    highlights: ['落地飞行人因测评页面与结果展示链路'],
  },
  {
    no: 16,
    title: '北6项目',
    category: '项目交付',
    summary: '北6 项目前端交付，按客户场景完成业务页面与测评流程定制。',
    stack: ['Vue 3', 'Element Plus'],
    highlights: ['完成定制化业务页面开发与联调交付'],
  },
  {
    no: 17,
    title: '心理与认知干预系统（空特）异常精神状态调适系统',
    category: '心理干预',
    summary: '面向空特场景的心理与认知干预系统，支持异常精神状态调适相关流程与数据呈现。',
    stack: ['Vue 3', 'Electron', 'Pinia'],
    highlights: ['搭建干预流程与任务状态管理', '完成调适相关业务页面与结果汇总'],
  },
  {
    no: 18,
    title: '勇芯戒指项目',
    category: '软硬件联动',
    summary: '勇芯戒指相关前端对接与展示，覆盖设备数据呈现与业务页面交互。',
    stack: ['Vue 3', 'uni-app'],
    highlights: ['完成戒指设备相关数据展示与业务联动页面'],
  },
  {
    no: 19,
    title: '筛查任务',
    category: '心理筛查',
    summary: '心理筛查任务系统，支持量表/任务配置、作答流程与筛查结果汇总。',
    stack: ['Vue 3', 'Vant', 'Pinia'],
    highlights: ['实现筛查任务流程、作答页与结果汇总'],
  },
  {
    no: 20,
    title: '手持 APK',
    category: '移动端',
    summary: '手持设备 APK 端业务页面与交互实现，适配移动端测评与采集场景。',
    stack: ['uni-app', 'Vue 3'],
    highlights: ['完成手持端页面适配与测评业务交互'],
  },
  {
    no: 21,
    title: '心理测评小程序、心迹营地',
    category: '小程序',
    summary: '心理测评微信小程序与心迹营地相关功能，覆盖测评入口、作答与营地场景页面。',
    stack: ['uni-app', 'Vue 3', '微信小程序'],
    highlights: ['交付心理测评小程序核心流程', '完成心迹营地相关页面与交互'],
  },
  {
    no: 22,
    title: '顺德',
    category: '项目交付',
    summary: '顺德项目定制化前端交付，按客户需求完成测评与管理端页面。',
    stack: ['Vue 3', 'Element Plus'],
    highlights: ['完成顺德项目业务页面开发与上线支持'],
  },
  {
    no: 23,
    title: '表情识别（心理行为预测系统）',
    category: 'AI 识别',
    summary: '表情识别与心理行为预测系统前端，支持采集、识别结果展示与行为预测呈现。',
    stack: ['Vue 3', 'ECharts'],
    highlights: ['对接表情识别结果展示与行为预测可视化'],
  },
  {
    no: 24,
    title: '航心安（数字化认知行为疗法）',
    category: '数字疗愈',
    summary: '航心安数字化认知行为疗法产品前端，覆盖疗程任务、内容呈现与进度管理。',
    stack: ['Vue 3', 'uni-app', 'Pinia'],
    highlights: ['实现数字化 CBT 任务流与疗程进度页面'],
  },
  {
    no: 25,
    title: 'VR 生理信号采集',
    category: '生理采集',
    summary: 'VR 场景下的生理信号采集前端能力，支持采集状态监控与数据展示。',
    stack: ['Vue 3', 'Electron'],
    highlights: ['完成 VR 生理信号采集状态页与数据联动'],
  },
  {
    no: 26,
    title: '脑电生物反馈',
    category: '生物反馈',
    summary: '脑电生物反馈训练与监测相关前端，呈现反馈曲线与训练过程。',
    stack: ['Vue 3', 'ECharts', 'Electron'],
    highlights: ['实现脑电反馈可视化与训练过程页面'],
  },
  {
    no: 27,
    title: '心情探索（与筛查任务合并版）',
    category: '心情探索',
    summary: '心情探索与筛查任务合并版本，统一入口、流程与结果管理。',
    stack: ['Vue 3', 'uni-app'],
    highlights: ['合并筛查与心情探索流程，统一状态与结果页'],
  },
  {
    no: 28,
    title: '心情探索（单视频采集及十大指标）',
    category: '心情探索',
    summary: '支持单视频采集与十大情绪/心理指标分析展示的心情探索版本。',
    stack: ['Vue 3', 'ECharts'],
    highlights: ['完成单视频采集流程与十大指标结果呈现'],
  },
  {
    no: 29,
    title: '心情探索-客户版',
    category: '心情探索',
    summary: '面向客户交付的心情探索定制版，按客户品牌与流程做前端适配。',
    stack: ['Vue 3', 'uni-app'],
    highlights: ['完成客户版 UI 与业务流程定制交付'],
  },
  {
    no: 30,
    title: '原始听觉记忆',
    category: '认知测评',
    summary: '原始听觉记忆测评模块，覆盖听觉任务交互、作答记录与结果分析。',
    stack: ['Vue 3', 'Electron'],
    highlights: ['实现听觉记忆任务交互与结果统计'],
  },
  {
    no: 31,
    title: '儿童脑智发育综合测试',
    category: '儿童测评',
    summary: '儿童脑智发育综合测试系统，支持多维度测评任务与报告输出。',
    stack: ['Vue 3', 'ECharts', 'Element Plus'],
    highlights: ['搭建儿童综合测试任务流与报告页'],
  },
  {
    no: 32,
    title: '感觉统合小程序',
    category: '感觉统合',
    summary: '感觉统合相关微信小程序，面向家长/用户侧测评与训练入口。',
    stack: ['uni-app', 'Vue 3', '微信小程序'],
    highlights: ['交付感觉统合小程序核心页面与流程'],
  },
  {
    no: 33,
    title: '感觉统合管理端适配小程序',
    category: '感觉统合',
    summary: '感觉统合管理端能力向小程序侧适配，支持管理与查看相关业务。',
    stack: ['uni-app', 'Vue 3'],
    highlights: ['完成管理端能力在小程序端的适配与联调'],
  },
  {
    no: 34,
    title: '心理量表评估软件',
    category: '量表评估',
    summary: '心理量表评估软件前端，覆盖量表配置、作答、计分与报告展示。',
    stack: ['Vue 3', 'Element Plus', 'Pinia'],
    highlights: ['实现量表作答与计分流程', '完成评估报告页面与导出能力'],
  },
]

const medicalProjectsEn: MedicalProject[] = [
  {
    no: 12,
    title: 'Attention & Cognitive Performance Assessment System',
    category: 'Cognitive Assessment',
    summary:
      'Assessment system for attention and cognitive performance covering task orchestration, data collection, and result visualization.',
    stack: ['Vue 3', 'Electron', 'ECharts'],
    highlights: [
      'Built attention assessment task flows and result report pages',
      'Delivered assessment data visualization and export capabilities',
    ],
  },
  {
    no: 13,
    title: 'Targeted Cognitive Flexibility Training',
    category: 'Targeted Training',
    summary:
      'Cognitive flexibility targeted training module with task configuration, progress logging, and outcome evaluation.',
    stack: ['Vue 3', 'TypeScript'],
    highlights: ['Implemented cognitive flexibility training interactions and progress tracking'],
  },
  {
    no: 14,
    title: 'Targeted Neural Oscillation Training',
    category: 'Targeted Training',
    summary: 'Neural oscillation targeted training with feedback loops and data persistence.',
    stack: ['Vue 3', 'Electron'],
    highlights: ['Delivered neural oscillation training UI and state synchronization'],
  },
  {
    no: 15,
    title: 'Aviation Human Factors',
    category: 'Human Factors',
    summary:
      'Frontend for aviation human factors assessment and training in specialized cognitive and operational scenarios.',
    stack: ['Vue 3', 'Electron', 'ECharts'],
    highlights: ['Shipped aviation human factors assessment pages and result display flow'],
  },
  {
    no: 16,
    title: 'North 6 Project',
    category: 'Delivery',
    summary: 'Custom frontend delivery for North 6 with tailored business pages and assessment workflows.',
    stack: ['Vue 3', 'Element Plus'],
    highlights: ['Completed customized business pages and integration delivery'],
  },
  {
    no: 17,
    title: 'Psychological & Cognitive Intervention System (Air Force Special)',
    category: 'Psychological Intervention',
    summary:
      'Intervention system for abnormal mental state adjustment in Air Force special scenarios with workflow and data presentation.',
    stack: ['Vue 3', 'Electron', 'Pinia'],
    highlights: [
      'Built intervention workflows and task state management',
      'Delivered adjustment-related business pages and result aggregation',
    ],
  },
  {
    no: 18,
    title: 'Yongxin Ring Project',
    category: 'Hardware Integration',
    summary: 'Frontend integration and display for Yongxin ring device data and business interactions.',
    stack: ['Vue 3', 'uni-app'],
    highlights: ['Delivered ring device data display and linked business pages'],
  },
  {
    no: 19,
    title: 'Screening Tasks',
    category: 'Psychological Screening',
    summary:
      'Psychological screening task system with scale/task configuration, response flow, and result aggregation.',
    stack: ['Vue 3', 'Vant', 'Pinia'],
    highlights: ['Implemented screening task flow, response pages, and result summary'],
  },
  {
    no: 20,
    title: 'Handheld APK',
    category: 'Mobile',
    summary: 'Handheld device APK business pages and interactions for mobile assessment and data collection.',
    stack: ['uni-app', 'Vue 3'],
    highlights: ['Completed handheld page adaptation and assessment business interactions'],
  },
  {
    no: 21,
    title: 'Psychological Assessment Mini Program & Heart Trail Camp',
    category: 'Mini Program',
    summary:
      'WeChat mini program for psychological assessment and Heart Trail Camp features covering entry, response, and camp scenarios.',
    stack: ['uni-app', 'Vue 3', 'WeChat Mini Program'],
    highlights: [
      'Delivered core psychological assessment mini program flow',
      'Completed Heart Trail Camp pages and interactions',
    ],
  },
  {
    no: 22,
    title: 'Shunde Project',
    category: 'Delivery',
    summary: 'Custom frontend delivery for Shunde with assessment and admin pages per client requirements.',
    stack: ['Vue 3', 'Element Plus'],
    highlights: ['Completed Shunde business pages, development, and launch support'],
  },
  {
    no: 23,
    title: 'Expression Recognition (Psychological Behavior Prediction)',
    category: 'AI Recognition',
    summary:
      'Frontend for expression recognition and psychological behavior prediction with capture, result display, and prediction visualization.',
    stack: ['Vue 3', 'ECharts'],
    highlights: ['Integrated expression recognition display and behavior prediction visualization'],
  },
  {
    no: 24,
    title: 'Hangxin An (Digital CBT)',
    category: 'Digital Therapy',
    summary:
      'Digital cognitive behavioral therapy product frontend covering session tasks, content presentation, and progress management.',
    stack: ['Vue 3', 'uni-app', 'Pinia'],
    highlights: ['Implemented digital CBT task flow and session progress pages'],
  },
  {
    no: 25,
    title: 'VR Physiological Signal Collection',
    category: 'Physiological Collection',
    summary: 'VR-scene physiological signal collection frontend with monitoring status and data display.',
    stack: ['Vue 3', 'Electron'],
    highlights: ['Completed VR physiological signal collection status pages and data linkage'],
  },
  {
    no: 26,
    title: 'EEG Biofeedback',
    category: 'Biofeedback',
    summary: 'EEG biofeedback training and monitoring frontend with feedback curves and training process display.',
    stack: ['Vue 3', 'ECharts', 'Electron'],
    highlights: ['Implemented EEG feedback visualization and training process pages'],
  },
  {
    no: 27,
    title: 'Mood Explorer (Merged with Screening Tasks)',
    category: 'Mood Explorer',
    summary: 'Merged Mood Explorer and screening tasks with unified entry, flow, and result management.',
    stack: ['Vue 3', 'uni-app'],
    highlights: ['Merged screening and mood exploration flows with unified state and results'],
  },
  {
    no: 28,
    title: 'Mood Explorer (Single Video & Ten Metrics)',
    category: 'Mood Explorer',
    summary:
      'Mood Explorer version with single video capture and ten emotional/psychological metric analysis display.',
    stack: ['Vue 3', 'ECharts'],
    highlights: ['Completed single video capture flow and ten-metric result presentation'],
  },
  {
    no: 29,
    title: 'Mood Explorer (Client Edition)',
    category: 'Mood Explorer',
    summary: 'Client-delivered Mood Explorer custom edition with brand and workflow frontend adaptation.',
    stack: ['Vue 3', 'uni-app'],
    highlights: ['Delivered client edition UI and customized business workflow'],
  },
  {
    no: 30,
    title: 'Primary Auditory Memory Assessment',
    category: 'Cognitive Assessment',
    summary:
      'Primary auditory memory assessment module covering auditory task interaction, response logging, and result analysis.',
    stack: ['Vue 3', 'Electron'],
    highlights: ['Implemented auditory memory task interaction and result statistics'],
  },
  {
    no: 31,
    title: 'Children Brain Development Comprehensive Test',
    category: 'Pediatric Assessment',
    summary:
      'Comprehensive children brain development test system with multi-dimensional tasks and report output.',
    stack: ['Vue 3', 'ECharts', 'Element Plus'],
    highlights: ['Built children comprehensive test task flow and report pages'],
  },
  {
    no: 32,
    title: 'Sensory Integration Mini Program',
    category: 'Sensory Integration',
    summary:
      'WeChat mini program for sensory integration assessment and training entry for parents and users.',
    stack: ['uni-app', 'Vue 3', 'WeChat Mini Program'],
    highlights: ['Delivered core sensory integration mini program pages and flow'],
  },
  {
    no: 33,
    title: 'Sensory Integration Admin Mini Program Adaptation',
    category: 'Sensory Integration',
    summary: 'Adaptation of sensory integration admin capabilities to mini program for management and viewing.',
    stack: ['uni-app', 'Vue 3'],
    highlights: ['Completed admin capability adaptation and integration on mini program'],
  },
  {
    no: 34,
    title: 'Psychological Scale Assessment Software',
    category: 'Scale Assessment',
    summary:
      'Psychological scale assessment frontend covering scale configuration, response, scoring, and report display.',
    stack: ['Vue 3', 'Element Plus', 'Pinia'],
    highlights: [
      'Implemented scale response and scoring flow',
      'Completed assessment report pages and export capabilities',
    ],
  },
]

const accents = ['#2f5d7a', '#3a6ea5', '#0f7a6e', '#5b6b8c', '#4a6f8c', '#2f8f7a']

type TechArticle = Omit<BlogPost, 'type' | 'no' | 'image'>

const techArticlesZh: TechArticle[] = [
  {
    id: 'vue3-composition-patterns',
    blogTitle: 'Vue 3 组合式 API 实战：从 Options API 迁移到可维护的业务逻辑',
    category: 'Vue 3',
    publishedAt: '2025.03',
    readingMinutes: 8,
    summary:
      '大型 Vue 2 项目升级到 Vue 3 时，组合式 API 不只是语法替换，更是逻辑复用与模块边界的重新划分。本文总结我在医疗多端项目中的迁移策略与踩坑经验。',
    stack: ['Vue 3', 'TypeScript', 'Composition API'],
    highlights: [
      '按「领域」而非「生命周期」拆分 composable：如 useAssessmentFlow、useScaleScoring，每个 composable 只负责一条业务链路，避免 setup 函数膨胀成新的 Options API 怪物',
      'ref 与 reactive 的选择原则：基本类型和需要整体替换的对象用 ref；表单、配置等固定结构的对象用 reactive；跨组件共享的状态一律进 Pinia，composable 只做局部 UI 状态',
      'watch 与 watchEffect 的边界：副作用依赖外部参数变化时用 watch 并显式声明 deps；纯响应式推导用 computed，避免在 watchEffect 里写异步请求导致重复触发',
      '迁移顺序建议：先改纯展示组件（零风险）→ 再改 composable 抽取（可单测）→ 最后改路由级页面（影响面最大）；每步保持可回滚，不要一次性全量替换',
      'TypeScript 配合：为 composable 返回值定义明确 interface，props 用 defineProps<{...}>() 而非运行时声明，能在编译期捕获 80% 的迁移遗漏',
    ],
    accent: '#42b883',
  },
  {
    id: 'sse-streaming-frontend',
    blogTitle: '前端 SSE 流式渲染：AI 对话打字机效果的工程化实现',
    category: 'AI 交互',
    publishedAt: '2025.06',
    readingMinutes: 7,
    summary:
      '接入大模型 SSE 流式接口时，直接 append 文本会导致页面卡顿和滚动跳动。分享我在膳智道小程序与心理测评助手中落地的缓冲、渲染与容错方案。',
    stack: ['SSE', 'Fetch API', 'Vue 3', 'TypeScript'],
    highlights: [
      '用 fetch + ReadableStream 替代 EventSource：EventSource 只支持 GET 且无法自定义 Header，POST + Bearer Token 场景必须用 fetch 手动解析 text/event-stream',
      '双层缓冲架构：网络层 buffer 按 chunk 拼接，渲染层 buffer 按帧（requestAnimationFrame）批量写入 DOM，将 50+ 次/秒的 DOM 更新降到 16ms 一帧，消除打字卡顿',
      '增量 Markdown 渲染：流式输出中途不能等完整段落再渲染，采用「已闭合语法块立即渲染 + 未闭合块暂存」策略，配合 marked 的 lexer 分段处理',
      '中断与重连：AbortController 绑定组件生命周期，用户切换会话或离开页面时立即 abort；网络断开后保留已收内容，重连时携带 last_event_id 续传上下文',
      'Pinia 会话状态设计：messages 数组存完整记录，streamingMessage 存当前流式片段，isStreaming 控制 UI 禁用态；三态分离避免流式更新触发历史列表重渲染',
    ],
    accent: '#6366f1',
  },
  {
    id: 'uniapp-performance',
    blogTitle: 'uni-app 小程序性能优化：从 2.4s 冷启动到 1.4s 的五个关键动作',
    category: '跨端开发',
    publishedAt: '2025.08',
    readingMinutes: 6,
    summary:
      '微信小程序主包 2MB 限制和冷启动耗时是跨端项目的硬约束。记录我在健康类小程序中将主包从 1.8MB 压到 1.4MB、冷启动提速 40% 的具体手段。',
    stack: ['uni-app', 'Vue 3', '微信小程序', 'Vite'],
    highlights: [
      '分包策略：按用户路径拆分——首页 + 登录进主包，AI 对话 / 测评 / 个人中心各为独立分包；preloadRule 预下载高频分包，首屏不加载低频模块',
      '静态资源 CDN 化：图片、字体、大体积 JSON 配置走 CDN + lazy-load，主包只保留 tabBar 图标和首屏必需资源；webp 格式比 png 平均节省 35% 体积',
      '组件按需引入：Vant 用 easycom 自动按需 + unplugin-vue-components，避免全量打包；ECharts 改用 echarts-for-weixin 的自定义 build，只引入用到的图表类型',
      'setData 优化：列表页避免一次性 setData 整棵数据树，改为分页加载 + 虚拟列表；WXML 节点数控制在 1000 以内，复杂表单拆成子组件隔离更新域',
      '启动链路Profiling：用微信开发者工具 Audits 定位瓶颈，发现 App.onLaunch 里同步读 storage 阻塞 200ms，改为异步初始化 + skeleton 占位后冷启动从 2.4s 降到 1.4s',
    ],
    accent: '#07c160',
  },
  {
    id: 'pinia-state-design',
    blogTitle: 'Pinia 状态设计：多端共享会话状态的边界与持久化策略',
    category: '状态管理',
    publishedAt: '2025.10',
    readingMinutes: 6,
    summary:
      'Web、H5、小程序共用一套 Pinia store 时，持久化、权限和跨端差异容易互相污染。总结一套在医疗多端产品中验证过的 store 分层方案。',
    stack: ['Pinia', 'Vue 3', 'TypeScript', 'uni-app'],
    highlights: [
      'Store 按职责拆分：useAuthStore（token / 用户信息）、useSessionStore（当前测评会话）、useUIStore（主题 / 语言 / 弹窗），禁止一个 store 包打天下',
      '持久化白名单：只 persist token、用户偏好、草稿数据三类；测评过程中的临时状态（当前题号、计时器）不持久化，避免恢复后状态不一致',
      '跨端 storage 适配：抽象 createStorageAdapter() 接口，Web 用 localStorage，小程序用 uni.setStorageSync，Electron 用 electron-store；store 层无感知',
      'Action 里处理副作用：组件只 dispatch action，不在组件里直接调 API；action 内统一 try/catch + 错误码映射，组件通过 store 的 error 字段展示反馈',
      'Store 间通信：禁止 store A 直接 import store B，通过 action 参数传递或在组件层 orchestrate；需要联动时用 pinia 的 $subscribe 监听特定字段变化',
    ],
    accent: '#ffd859',
  },
  {
    id: 'pinia-vs-vuex',
    blogTitle: 'Vue 3 中 Pinia 与 Vuex 的性能与使用区别：该选哪个？',
    category: '状态管理',
    publishedAt: '2026.02',
    readingMinutes: 9,
    summary:
      'Vue 3 官方推荐 Pinia 作为默认状态管理方案，Vuex 4 虽兼容但已进入维护模式。结合金融中后台与医疗多端项目的迁移实践，从性能、API 设计、TypeScript 支持三个维度对比两者差异，并给出选型建议。',
    stack: ['Pinia', 'Vuex 4', 'Vue 3', 'TypeScript'],
    highlights: [
      '包体积与运行时：Pinia 核心约 1.5KB（gzip），Vuex 4 约 2.5KB；Pinia 去掉了 mutations 层，状态变更路径更短，少一次函数调用与 DevTools 事件派发，高频更新场景（如 SSE 流式消息）中组件重渲染次数相当，但 Pinia 的 storeToRefs 能更精确地解构响应式，避免 whole-store 订阅带来的多余渲染',
      'API 设计差异：Vuex 强制 dispatch → commit 两阶段（actions 异步、mutations 同步改 state），Pinia 直接在 actions 里改 state，代码量减少约 30%；Vuex 的 modules/namespaced 嵌套在大型项目中 namespace 字符串容易写错，Pinia 每个 store 是独立 composable（useXxxStore），天然模块化且支持按需 import',
      'TypeScript 体验：Vuex 4 需要大量手动声明 State、Getters、Actions 类型，module 嵌套后类型推导经常断裂；Pinia 用 defineStore 时 state/getters/actions 一体定义，类型自动推导，组件里 store.count 直接有类型提示，重构改名时编译器能全局报错——这是 Vue 3 + TS 项目选 Pinia 的最大理由',
      'DevTools 与调试：两者均支持 Vue DevTools 时间旅行，Vuex 的 mutation 日志更清晰（每次变更都有 type 标识），Pinia 则按 store 分组展示，action 名称即变更标识；Pinia 额外支持 HMR 热更新 store 定义，开发态修改 store 不需要刷新页面',
      '迁移成本评估：Vuex 3 → Pinia 可用官方迁移指南逐步替换，核心映射关系为 state → state、getters → getters、mutations + actions → actions；不需要 mutations 这一层是最大的简化点；若项目仍在 Vue 2，Vuex 3 继续用即可，等升 Vue 3 时一并切 Pinia',
      '选型建议：新项目（Vue 3）直接 Pinia，无需考虑 Vuex；老项目 Vuex 模块 < 5 个且团队熟悉可暂不迁移；Vuex 模块 > 10 个、TS 类型维护成本高、或需要跨项目复用 store 逻辑时，优先迁移 Pinia；SSR/Nuxt 3 场景 Pinia 是一等公民，Vuex 需额外适配',
    ],
    accent: '#ffd859',
  },
  {
    id: 'electron-dual-screen',
    blogTitle: 'Electron 双屏同步：医生端与患者端的低延迟状态协调',
    category: 'Electron',
    publishedAt: '2025.12',
    readingMinutes: 7,
    summary:
      '认知康复桌面系统需要在医生主屏和患者副屏之间实时同步测评任务。分享基于 BrowserWindow + storage event 的双屏通信方案与踩过的坑。',
    stack: ['Electron', 'Vue 3', 'Node.js', 'TypeScript'],
    highlights: [
      '窗口架构：主进程 createWindow 时通过 screen.getAllDisplays() 定位副屏，主窗口 primary、副窗口 secondary 各加载独立 renderer 入口，共享 preload 脚本暴露 IPC 桥',
      '通信选型：尝试过 IPC broadcast 和 SharedWorker，最终选用 localStorage + storage event——实现简单、延迟 < 16ms，适合「主屏推送任务 → 副屏响应」的单向广播场景',
      '状态协议设计：定义 { type, payload, timestamp, seq } 消息格式，seq 递增防乱序；副屏收到后 ack 回主屏，超时 3s 未 ack 则重发，保证测评流程不丢步',
      '进程管理：Node.js child_process 启动嵌入式 JAR 和本地数据库，主进程监听 renderer 的 ready 信号后再 spawn，避免服务未就绪时前端白屏',
      '打包注意：electron-builder 配置 extraResources 打包 JRE 和业务 JAR，asarUnpack 排除 native 模块；Windows 下用 NSIS 一键安装，首次启动自动检测并初始化本地 DB',
    ],
    accent: '#3a6ea5',
  },
  {
    id: 'axios-interceptor-design',
    blogTitle: 'Axios 拦截器设计：金融级项目的 Token 刷新与错误码统一处理',
    category: '工程化',
    publishedAt: '2026.01',
    readingMinutes: 5,
    summary:
      '在工行数据中心项目中，统一的 HTTP 层是减少页面崩溃率和重复代码的关键。梳理请求/响应拦截、静默刷新和无感重试的完整链路。',
    stack: ['Axios', 'TypeScript', 'Vue 3', 'JWT'],
    highlights: [
      '双层拦截：request 拦截器注入 token + traceId + 时间戳；response 拦截器先过业务码（code !== 0 统一 reject），再过 HTTP 状态码，避免组件层写重复的 if/else',
      'Token 静默刷新：401 时不立即跳登录，用 refreshToken 换新 accessToken 并重放原请求；刷新期间其他请求进 pending 队列，刷新成功后批量重放，用户无感知',
      '防重复刷新：用 isRefreshing 标志位 + 单例 Promise，避免并发 401 触发多次 refresh 导致 token 互相覆盖；refresh 本身 401 则清 storage 跳登录',
      '错误码映射表：维护 ERROR_CODE_MAP 将后端码映射为用户友好文案，401/403/500 各走不同 UI 策略（toast / modal / 静默重试），组件只需 catch 最终 message',
      '取消重复请求：列表页搜索用 AbortController 或 axios CancelToken，新请求发出时 cancel 上一次，避免慢网络下旧响应覆盖新结果',
    ],
    accent: '#5b6b8c',
  },
]

const techArticlesEn: TechArticle[] = [
  {
    id: 'vue3-composition-patterns',
    blogTitle: 'Vue 3 Composition API in Practice: Migrating from Options API to Maintainable Logic',
    category: 'Vue 3',
    publishedAt: '2025.03',
    readingMinutes: 8,
    summary:
      'Upgrading a large Vue 2 codebase to Vue 3 is more than syntax replacement — it is a chance to redraw module boundaries and logic reuse. Migration strategies and lessons from multi-platform healthcare projects.',
    stack: ['Vue 3', 'TypeScript', 'Composition API'],
    highlights: [
      'Split composables by domain, not lifecycle: e.g. useAssessmentFlow, useScaleScoring — each owns one business flow, preventing setup functions from becoming bloated Options API monsters',
      'ref vs reactive: use ref for primitives and objects that get fully replaced; reactive for fixed-shape forms and configs; shared cross-component state always goes to Pinia, composables handle local UI state only',
      'watch vs watchEffect boundaries: use watch with explicit deps when side effects depend on external parameter changes; use computed for pure derivations; avoid async requests inside watchEffect to prevent duplicate triggers',
      'Migration order: pure display components first (zero risk) → composable extraction (unit-testable) → route-level pages last (highest blast radius); keep each step revertible',
      'TypeScript pairing: define explicit return interfaces for composables, use defineProps<{...}>() instead of runtime declarations — catches ~80% of migration gaps at compile time',
    ],
    accent: '#42b883',
  },
  {
    id: 'sse-streaming-frontend',
    blogTitle: 'Frontend SSE Streaming: Engineering a Smooth AI Typewriter Effect',
    category: 'AI UX',
    publishedAt: '2025.06',
    readingMinutes: 7,
    summary:
      'Naively appending SSE chunks to the DOM causes jank and scroll jumps. Buffering, rendering, and fault-tolerance patterns from health mini programs and psychological assessment assistants.',
    stack: ['SSE', 'Fetch API', 'Vue 3', 'TypeScript'],
    highlights: [
      'Use fetch + ReadableStream instead of EventSource: EventSource only supports GET with no custom headers; POST + Bearer Token requires manual text/event-stream parsing via fetch',
      'Double-buffer architecture: network buffer concatenates chunks, render buffer flushes to DOM per frame (requestAnimationFrame), reducing 50+ DOM updates/sec to one per 16ms frame',
      'Incremental Markdown rendering: cannot wait for complete paragraphs during streaming; render closed syntax blocks immediately, hold unclosed blocks, use marked lexer for segment processing',
      'Abort and reconnect: bind AbortController to component lifecycle; preserve received content on disconnect, carry last_event_id on reconnect for context continuation',
      'Pinia session design: messages array for full history, streamingMessage for current chunk, isStreaming for UI disabled state — three-state separation avoids re-rendering history on every chunk',
    ],
    accent: '#6366f1',
  },
  {
    id: 'uniapp-performance',
    blogTitle: 'uni-app Mini Program Performance: Five Moves from 2.4s to 1.4s Cold Start',
    category: 'Cross-Platform',
    publishedAt: '2025.08',
    readingMinutes: 6,
    summary:
      'The 2MB main bundle limit and cold start time are hard constraints for WeChat mini programs. Concrete steps that compressed a health app main bundle from 1.8MB to 1.4MB and cut cold start by 40%.',
    stack: ['uni-app', 'Vue 3', 'WeChat Mini Program', 'Vite'],
    highlights: [
      'Subpackage strategy: home + login in main bundle, AI chat / assessment / profile as independent subpackages; preloadRule for high-frequency subpackages, skip low-frequency modules on first paint',
      'CDN for static assets: images, fonts, large JSON configs on CDN + lazy-load; main bundle keeps only tabBar icons and first-screen essentials; webp saves ~35% vs png on average',
      'On-demand components: Vant via easycom auto-import + unplugin-vue-components; ECharts via echarts-for-weixin custom build with only needed chart types',
      'setData optimization: paginate lists + virtual scroll instead of setting entire data trees; keep WXML nodes under 1000, split complex forms into child components to isolate update scopes',
      'Launch profiling: WeChat DevTools Audits found synchronous storage reads in App.onLaunch blocking 200ms; async init + skeleton placeholder dropped cold start from 2.4s to 1.4s',
    ],
    accent: '#07c160',
  },
  {
    id: 'pinia-state-design',
    blogTitle: 'Pinia State Design: Boundaries and Persistence for Multi-Platform Sessions',
    category: 'State Management',
    publishedAt: '2025.10',
    readingMinutes: 6,
    summary:
      'Sharing Pinia stores across Web, H5, and mini programs makes persistence, permissions, and platform differences easy to contaminate each other. A store layering scheme validated in multi-platform healthcare products.',
    stack: ['Pinia', 'Vue 3', 'TypeScript', 'uni-app'],
    highlights: [
      'Split stores by responsibility: useAuthStore (token / user), useSessionStore (current assessment session), useUIStore (theme / locale / modals) — no monolithic store',
      'Persistence whitelist: only persist token, user preferences, and draft data; temporary assessment state (current question, timer) is not persisted to avoid inconsistent recovery',
      'Cross-platform storage adapter: abstract createStorageAdapter() — localStorage on Web, uni.setStorageSync on mini programs, electron-store on Electron; stores stay platform-agnostic',
      'Side effects in actions: components dispatch actions only, never call APIs directly; actions handle try/catch + error code mapping, components read store.error for feedback',
      'Inter-store communication: no direct store A imports store B; pass data via action params or orchestrate in components; use pinia $subscribe for specific field change reactions',
    ],
    accent: '#ffd859',
  },
  {
    id: 'pinia-vs-vuex',
    blogTitle: 'Pinia vs Vuex in Vue 3: Performance and Usage Differences — Which Should You Choose?',
    category: 'State Management',
    publishedAt: '2026.02',
    readingMinutes: 9,
    summary:
      'Vue 3 officially recommends Pinia as the default state management solution; Vuex 4 is compatible but in maintenance mode. A practical comparison from financial back-office and multi-platform healthcare migration experience across performance, API design, and TypeScript support.',
    stack: ['Pinia', 'Vuex 4', 'Vue 3', 'TypeScript'],
    highlights: [
      'Bundle size and runtime: Pinia core ~1.5KB gzip, Vuex 4 ~2.5KB; Pinia removes the mutations layer for a shorter state change path — one fewer function call and DevTools event dispatch; in high-frequency updates (e.g. SSE streaming messages) re-render counts are similar, but Pinia storeToRefs enables precise reactive destructuring, avoiding extra renders from whole-store subscriptions',
      'API design: Vuex enforces dispatch → commit two-phase flow (async actions, sync mutations for state); Pinia mutates state directly in actions, ~30% less boilerplate; Vuex modules/namespaced nesting leads to typo-prone namespace strings in large projects — Pinia stores are independent composables (useXxxStore), naturally modular with on-demand imports',
      'TypeScript experience: Vuex 4 requires extensive manual State/Getters/Actions typing, type inference breaks with nested modules; Pinia defineStore defines state/getters/actions together with automatic inference — store.count has type hints in components, renames trigger global compile errors; this is the strongest reason to choose Pinia in Vue 3 + TS projects',
      'DevTools and debugging: both support Vue DevTools time-travel; Vuex mutation logs are clearer (every change has a type label), Pinia groups by store with action names as change identifiers; Pinia additionally supports HMR for store definitions — edit stores in dev without page refresh',
      'Migration cost: Vuex 3 → Pinia follows official migration guide — state → state, getters → getters, mutations + actions → actions; removing mutations is the biggest simplification; if still on Vue 2, keep Vuex 3 and switch to Pinia when upgrading to Vue 3',
      'Selection guide: new Vue 3 projects — use Pinia directly; legacy projects with < 5 Vuex modules and team familiarity — migration optional; > 10 modules, high TS maintenance cost, or cross-project store reuse — prioritize Pinia migration; SSR/Nuxt 3 treats Pinia as first-class, Vuex needs extra adaptation',
    ],
    accent: '#ffd859',
  },
  {
    id: 'electron-dual-screen',
    blogTitle: 'Electron Dual-Screen Sync: Low-Latency Coordination Between Doctor and Patient Displays',
    category: 'Electron',
    publishedAt: '2025.12',
    readingMinutes: 7,
    summary:
      'A cognitive rehabilitation desktop system needs real-time task sync between a doctor main screen and patient secondary display. BrowserWindow + storage event communication patterns and pitfalls.',
    stack: ['Electron', 'Vue 3', 'Node.js', 'TypeScript'],
    highlights: [
      'Window architecture: main process uses screen.getAllDisplays() to locate secondary display; primary and secondary BrowserWindows load separate renderer entries sharing one preload IPC bridge',
      'Communication choice: tried IPC broadcast and SharedWorker; settled on localStorage + storage event — simple implementation, < 16ms latency, fits one-way broadcast (main pushes task → secondary responds)',
      'State protocol: { type, payload, timestamp, seq } message format with incrementing seq against reordering; secondary acks to primary, retry after 3s timeout, ensuring assessment flow never skips steps',
      'Process management: Node.js child_process launches embedded JAR and local DB; main process waits for renderer ready signal before spawn, preventing white screen when services are not ready',
      'Packaging notes: electron-builder extraResources bundles JRE and business JAR, asarUnpack excludes native modules; NSIS one-click install on Windows with auto DB initialization on first launch',
    ],
    accent: '#3a6ea5',
  },
  {
    id: 'axios-interceptor-design',
    blogTitle: 'Axios Interceptor Design: Silent Token Refresh and Unified Error Handling for Financial-Grade Apps',
    category: 'Engineering',
    publishedAt: '2026.01',
    readingMinutes: 5,
    summary:
      'In ICBC data center projects, a unified HTTP layer was key to reducing page crash rates and duplicate code. The full chain of request/response interceptors, silent refresh, and seamless retry.',
    stack: ['Axios', 'TypeScript', 'Vue 3', 'JWT'],
    highlights: [
      'Two-layer interceptors: request injects token + traceId + timestamp; response checks business code (code !== 0 unified reject) before HTTP status, eliminating repetitive if/else in components',
      'Silent token refresh: on 401, use refreshToken to get new accessToken and replay original request; queue concurrent requests during refresh, batch replay on success — user never notices',
      'Prevent duplicate refresh: isRefreshing flag + singleton Promise avoids concurrent 401s triggering multiple refreshes that overwrite each other; refresh 401 clears storage and redirects to login',
      'Error code map: ERROR_CODE_MAP maps backend codes to user-friendly messages; 401/403/500 each follow different UI strategies (toast / modal / silent retry), components only catch final message',
      'Cancel duplicate requests: use AbortController or axios CancelToken on search pages; cancel previous request when new one fires, preventing stale responses from overwriting fresh results on slow networks',
    ],
    accent: '#5b6b8c',
  },
]

function buildFeaturedPosts(locale: Locale): BlogPost[] {
  const projectList = getProjects(locale)
  const meta = locale === 'en' ? featuredMetaEn : featuredMetaZh

  return projectList.map((project) => ({
    id: project.id,
    type: 'project' as const,
    summary: project.summary,
    stack: project.stack,
    highlights: project.highlights,
    image: project.image,
    accent: project.accent,
    ...meta[project.id],
  }))
}

function buildMedicalPosts(locale: Locale): BlogPost[] {
  const medicalProjects = locale === 'en' ? medicalProjectsEn : medicalProjectsZh

  return medicalProjects.map((item, index) => ({
    id: `medical-${item.no}`,
    type: 'project' as const,
    no: item.no,
    blogTitle: item.title,
    category: item.category,
    publishedAt: '2024.08+',
    readingMinutes: Math.max(3, item.highlights.length + 2),
    summary: item.summary,
    stack: item.stack,
    highlights: item.highlights,
    accent: accents[index % accents.length],
  }))
}

export function getProjectPosts(locale: Locale): BlogPost[] {
  return [...buildFeaturedPosts(locale), ...buildMedicalPosts(locale)]
}

export function getTechArticles(locale: Locale): BlogPost[] {
  const articles = locale === 'en' ? techArticlesEn : techArticlesZh
  return articles.map((article) => ({ ...article, type: 'article' as const }))
}

export function getBlogPosts(locale: Locale): BlogPost[] {
  return [...getProjectPosts(locale), ...getTechArticles(locale)]
}

export const blogPosts = getBlogPosts('zh')
