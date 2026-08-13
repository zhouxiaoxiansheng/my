export interface Project {
  id: string
  title: string
  period: string
  stack: string[]
  summary: string
  highlights: string[]
  image: string
  accent: string
}

export const projects: Project[] = [
  {
    id: 'mind-camera',
    title: '心灵照相机',
    period: '2024.09 — 至今',
    stack: ['Vue 3', 'Element UI', 'Vant UI', 'Axios', 'Pinia'],
    summary:
      '心理健康与量表测评平台，覆盖量表测试、综合心理评估、机构付费与认知任务，支持 Web / H5 / 小程序多端。',
    highlights: [
      '主导 Vue 2 → Vue 3 平滑升级，代码量下降约 25%，组件响应更流畅',
      'PC 管理端 Element + 移动端 Vant 双 UI 方案，结合 Flex 与媒体查询实现全端适配',
      '基于 SSE 构建 AI 心理评估助手，实现流式问答与报告智能解读',
    ],
    image: '/projects/mind-camera.png',
    accent: '#0f7a6e',
  },
  {
    id: 'shanzhidao',
    title: '膳智道 AI 智能健康管理小程序',
    period: '2026.06 — 至今',
    stack: ['uni-app', 'Vue 3', 'TypeScript', '豆包 AI', 'SSE', 'Tailwind CSS'],
    summary:
      '基于豆包大模型的智能健康食谱推荐与膳食管理小程序，提供 AI 膳食诊断、对话式膳食规划与健康指标追踪。',
    highlights: [
      '接入火山引擎豆包 API，SSE 打字机流式输出，前端缓冲防抖与 DOM 增量更新消除卡顿',
      'Pinia 统一会话状态：历史持久化、Prompt 上下文拼接、失败重试，提升交互稳定性',
      '分包预加载 + CDN，主包控制在 1.5MB 内，冷启动时间下降约 40%',
    ],
    image: '/projects/shanzhidao.png',
    accent: '#2f8f5b',
  },
  {
    id: 'cognitive-rehab',
    title: '医疗版认知康复评估桌面系统',
    period: '2024.08 — 至今',
    stack: ['Electron', 'Vue 3', 'Element Plus', 'ECharts', 'Node.js'],
    summary:
      '面向医院诊断与康复训练的离线桌面工作站，整合前端界面、内置 Java 服务与本地数据库，支持认知障碍评估。',
    highlights: [
      'Electron 双屏：医生主屏 + 患者副屏，storage 事件闭环同步，低延迟任务联动',
      'Node.js 子进程托管 JAR 与本地库，一键启停，无网环境下可完整离线运行',
    ],
    image: '/projects/cognitive-rehab.png',
    accent: '#3a6ea5',
  },
  {
    id: 'consistency-check',
    title: '业务一致性核对中心 & 数据偏差平台',
    period: '2021.11 — 2024.08',
    stack: ['Vue 2 / Vue 3', 'Element UI', 'Vant', 'ECharts', 'Webpack'],
    summary:
      '实时接入交易数据流进行规则核对与对账，支持单笔订单追踪、规则配置与复杂异常明细管理。',
    highlights: [
      'Axios 二次封装：Token 无感刷新与错误码统一拦截，降低页面崩溃率',
      'ECharts 动态图表与富文本组件封装，keep-alive 多标签缓存，回访加载提速约一倍',
      '路由守卫 + 动态路由，实现按钮级细粒度权限控制',
    ],
    image: '/projects/consistency-check.png',
    accent: '#5b6b8c',
  },
]
