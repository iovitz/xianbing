import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
// import Backend from 'i18next-http-backend'
import translation_zh from './zh.json'

const resources = {
  zh: {
    translation: translation_zh
  }
}

i18n
  // 使用接口返回的文案
  // .use(Backend)
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  .init({
    lng: 'zh',
    resources,
    // supportedLngs: Object.keys(resources),
    // fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
;(window as any).t = function t(key: string) {
  return i18n.t(key)
}

export default i18n
