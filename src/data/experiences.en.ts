import type { Experience } from './experiences'

export const experiencesEn: Experience[] = [
  {
    id: 'huihuinao',
    company: 'Henan Huihuinao Medical Technology Co., Ltd.',
    role: 'Frontend Lead / Senior Frontend Developer',
    period: 'Aug 2024 — Present',
    highlights: [
      'Led frontend architecture upgrades across medical product lines; migrated core projects from Vue 2 to Vue 3 + TypeScript across 30+ modules, improving iteration efficiency by ~35%',
      'Built Electron + Vue cognitive rehabilitation desktop system with dual-screen real-time interaction and state sync between doctor and patient displays',
      'Independently delivered Android (uni-app), WeChat Mini Program, and Web admin; established code standards, component library, and CI/CD workflow',
    ],
  },
  {
    id: 'nantian',
    company: 'Yunnan Nantian Electronic Information Industry Co., Ltd.',
    role: 'Frontend Developer & DevOps',
    period: 'Oct 2021 — Aug 2024',
    highlights: [
      'On-site at ICBC Data Center; led a 4-person frontend team for requirement breakdown, technical challenges, and release delivery',
      'Led business consistency verification center and continuous delivery platform; built 10+ reusable chart and table components',
      'Encapsulated Axios silent token refresh and permission interceptors; fixed 13 frontend security issues (XSS/CSRF, etc.) per security baseline',
      'Configured Nginx proxy independently and drove multi-environment build and deployment automation',
    ],
  },
  {
    id: 'yeyun',
    company: 'Henan Yeyun Network Technology Co., Ltd.',
    role: 'Frontend Developer',
    period: 'Jun 2020 — Sep 2021',
    highlights: [
      'Independently owned admin system and e-commerce frontend pages and interactions; collaborated on API integration and performance optimization',
    ],
  },
]
