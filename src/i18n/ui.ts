import type { Locale } from '../composables/useLocale'

type UiCopy = {
  nav: {
    home: string
    resume: string
    blog: string
    back: string
    articles: string
    homeAria: string
  }
  home: {
    hello: string
    avatarAltSuffix: string
    about: string
    experience: string
    skills: string
    projectsBadge: string
    projectsTitle: string
    projectsLead: string
    contactEyebrow: string
    contactTitle: string
    contactDesc: string
  }
  resume: {
    ageSuffix: string
    hometownPrefix: string
    personalBlog: string
    yearsLabel: string
    intentLabel: string
    salaryLabel: string
    cityLabel: string
    about: string
    experience: string
    projects: string
  }
  blog: {
    label: string
    title: string
    bio: string
    role: string
    seeking: string
    readLatest: string
    recentUpdates: string
    tabs: {
      projects: string
      articles: string
    }
    feedDescProjects: (count: number) => string
    feedDescArticles: (count: number) => string
    emptyArticles: string
    projectExperience: string
    readMinutes: (minutes: number) => string
    expandDetails: string
    closeDialog: string
  }
  footer: {
    copyright: string
  }
  meta: {
    homeTitle: string
    resumeTitle: string
    blogTitle: string
  }
}

export const ui: Record<Locale, UiCopy> = {
  zh: {
    nav: {
      home: '个人作品集',
      resume: '个人简历',
      blog: '博客',
      back: '← 返回',
      articles: '文章',
      homeAria: '首页',
    },
    home: {
      hello: '你好，我是',
      avatarAltSuffix: '的头像',
      about: '关于我',
      experience: '工作经历',
      skills: '技能',
      projectsBadge: '项目经历',
      projectsTitle: '看看我最近的作品',
      projectsLead: '从医疗多端产品到金融中后台，这里挑选了近期最有代表性的项目。',
      contactEyebrow: '保持联系',
      contactTitle: '期待与你取得联系',
      contactDesc: '欢迎通过电话或邮箱沟通合作机会与技术交流。',
    },
    resume: {
      ageSuffix: '岁',
      hometownPrefix: '籍贯：',
      personalBlog: '个人博客',
      yearsLabel: '',
      intentLabel: '求职意向：',
      salaryLabel: '期望薪资：',
      cityLabel: '期望城市：',
      about: '关于我',
      experience: '我的经历',
      projects: '项目经历',
    },
    blog: {
      label: 'Personal Blog',
      title: '周玉佂的博客',
      bio: '记录前端工程里的取舍与落地：Vue / 跨端 / Electron / AI 流式交互。这里不是简历墙，而是一份持续更新的项目经历与技术沉淀。',
      role: '前端开发工程师',
      seeking: '郑州求职中',
      readLatest: '阅读最近更新',
      recentUpdates: '最近更新',
      tabs: {
        projects: '项目经历',
        articles: '技术文章',
      },
      feedDescProjects: (count) =>
        `共 ${count} 个项目经历，含医疗认知相关交付与核心作品实践。`,
      feedDescArticles: (count) => `共 ${count} 篇技术文章，记录工程实践与思考。`,
      emptyArticles: '暂无技术文章，敬请期待。',
      projectExperience: '项目经历',
      readMinutes: (minutes) => `约 ${minutes} 分钟`,
      expandDetails: '展开详情',
      closeDialog: '关闭',
    },
    footer: {
      copyright: '© 2026 什邡市周玉佂百货商行 版权所有',
    },
    meta: {
      homeTitle: '周玉佂 · 个人主页',
      resumeTitle: '周玉佂 · 个人简历',
      blogTitle: '周玉佂 · 个人博客',
    },
  },
  en: {
    nav: {
      home: 'Portfolio',
      resume: 'Resume',
      blog: 'Blog',
      back: '← Back',
      articles: 'Posts',
      homeAria: 'Home',
    },
    home: {
      hello: "Hi, I'm",
      avatarAltSuffix: "'s avatar",
      about: 'About Me',
      experience: 'Experience',
      skills: 'Skills',
      projectsBadge: 'Projects',
      projectsTitle: 'Recent Work',
      projectsLead:
        'From multi-platform healthcare products to financial back-office systems, here are my most representative recent projects.',
      contactEyebrow: 'Get in Touch',
      contactTitle: 'Looking Forward to Connecting',
      contactDesc:
        'Feel free to reach out by phone or email for collaboration and technical discussions.',
    },
    resume: {
      ageSuffix: ' yrs',
      hometownPrefix: 'From ',
      personalBlog: 'Personal Blog',
      yearsLabel: '',
      intentLabel: 'Role: ',
      salaryLabel: 'Expected Salary: ',
      cityLabel: 'Preferred City: ',
      about: 'About Me',
      experience: 'Experience',
      projects: 'Projects',
    },
    blog: {
      label: 'Personal Blog',
      title: "Zhou Yuzheng's Blog",
      bio: 'Notes on frontend engineering trade-offs and delivery: Vue, cross-platform apps, Electron, and AI streaming UX. Less of a resume wall, more of an evolving project portfolio and technical writing.',
      role: 'Frontend Developer',
      seeking: 'Open to roles in Zhengzhou',
      readLatest: 'Read latest updates',
      recentUpdates: 'Recent Updates',
      tabs: {
        projects: 'Projects',
        articles: 'Technical Articles',
      },
      feedDescProjects: (count) =>
        `${count} project experiences covering healthcare/cognitive delivery and core portfolio work.`,
      feedDescArticles: (count) =>
        `${count} technical articles on engineering practice and insights.`,
      emptyArticles: 'No technical articles yet. Stay tuned.',
      projectExperience: 'Projects',
      readMinutes: (minutes) => `${minutes} min read`,
      expandDetails: 'Show details',
      closeDialog: 'Close',
    },
    footer: {
      copyright: '© 2026 Zhou Yuzheng. All rights reserved.',
    },
    meta: {
      homeTitle: 'Zhou Yuzheng · Portfolio',
      resumeTitle: 'Zhou Yuzheng · Resume',
      blogTitle: 'Zhou Yuzheng · Blog',
    },
  },
}
