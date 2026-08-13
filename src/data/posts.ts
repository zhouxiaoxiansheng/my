import { projects } from './projects'

export interface BlogPost {
  id: string
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

const featuredMeta: Record<
  string,
  Pick<BlogPost, 'category' | 'blogTitle' | 'publishedAt' | 'readingMinutes'>
> = {
  'mind-camera': {
    category: '项目手记',
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

const featuredPosts: BlogPost[] = projects.map((project) => ({
  id: project.id,
  summary: project.summary,
  stack: project.stack,
  highlights: project.highlights,
  image: project.image,
  accent: project.accent,
  ...featuredMeta[project.id],
}))

/** 医疗 / 认知相关项目清单（绘慧脑期间） */
const medicalProjects: Array<{
  no: number
  title: string
  category: string
  summary: string
  stack: string[]
  highlights: string[]
}> = [
    {
      no: 12,
      title: '注意力认知效能测评系统',
      category: '认知测评',
      summary: '面向注意力与认知效能的测评系统，覆盖任务编排、数据采集与结果可视化。',
      stack: ['Vue 3', 'Electron', 'ECharts'],
      highlights: [
        '搭建注意力相关测评任务流程与结果报告页',
        '完成测评数据可视化与导出能力',
      ],
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
      highlights: [
        '搭建干预流程与任务状态管理',
        '完成调适相关业务页面与结果汇总',
      ],
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
      highlights: [
        '交付心理测评小程序核心流程',
        '完成心迹营地相关页面与交互',
      ],
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
      highlights: [
        '实现量表作答与计分流程',
        '完成评估报告页面与导出能力',
      ],
    },
  ]

const accents = ['#2f5d7a', '#3a6ea5', '#0f7a6e', '#5b6b8c', '#4a6f8c', '#2f8f7a']

const medicalPosts: BlogPost[] = medicalProjects.map((item, index) => ({
  id: `medical-${item.no}`,
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

export const blogPosts: BlogPost[] = [...featuredPosts, ...medicalPosts]
