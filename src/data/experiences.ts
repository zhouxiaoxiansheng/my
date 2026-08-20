export interface Experience {
  id: string
  company: string
  role: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 'huihuinao',
    company: '河南绘慧脑医疗科技有限公司',
    role: '前端负责人 / 资深前端开发',
    period: '2024.08 — 至今',
    highlights: [
      '主导全线医疗产品前端架构升级，核心项目 Vue 2 → Vue 3 + TypeScript，迁移 30+ 业务模块，迭代效率提升约 35%',
      '负责 Electron + Vue 医疗认知康复桌面系统，攻克医生主屏 + 患者副屏双屏实时交互与状态同步',
      '独立交付 Android（uni-app）、微信小程序与 Web 后台，制定代码规范、组件库与 CI/CD 流程',
    ],
  },
  {
    id: 'nantian',
    company: '云南南天电子信息产业股份有限公司',
    role: '前端开发工程师、运维',
    period: '2021.10 — 2024.08',
    highlights: [
      '驻场工行数据中心，带领 4 人前端小组负责需求拆解、技术攻坚与版本交付',
      '主导业务一致性核对中心与持续交付平台，封装 10+ 高复用图表与表格组件',
      '封装 Axios 无感刷新与权限拦截，配合安全基线修复 13 项前端漏洞（XSS/CSRF 等）',
      '独立配置 Nginx 代理，推动多环境构建部署自动化',
    ],
  },
  {
    id: 'yeyun',
    company: '河南烨云网络科技有限公司',
    role: '前端开发工程师',
    period: '2020.06 — 2021.09',
    highlights: [
      '独立负责管理系统与商城前端页面与交互，协作完成接口对接与性能优化',
    ],
  },
]
