import type { Locale } from '../composables/useLocale'
import { profile as profileZh } from './profile'
import { profileEn } from './profile.en'
import { experiences as experiencesZh } from './experiences'
import { experiencesEn } from './experiences.en'
import { projects as projectsZh } from './projects'
import { projectsEn } from './projects.en'

export const getProfile = (locale: Locale) => (locale === 'en' ? profileEn : profileZh)

export const getExperiences = (locale: Locale) =>
  locale === 'en' ? experiencesEn : experiencesZh

export const getProjects = (locale: Locale) => (locale === 'en' ? projectsEn : projectsZh)
