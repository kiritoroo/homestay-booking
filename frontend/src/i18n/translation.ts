import i18n from "@i18n/index"
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"
import { nextTick } from "vue"

const Trans = {
  get defaultLocale () {
    return import.meta.env.VITE_DEFAULT_LOCALE
  },

  get supportedLocales () {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(',')
  },

  get currentLocale () {
    return i18n.global.locale.value
  },

  set currentLocale (_newLocale: any) {
    i18n.global.locale.value = _newLocale
  },

  i18nRoute (to: any) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params
      }
    }
  },

  async loadLocaleMessages (_locale: any) {
    if (!i18n.global.availableLocales.includes(_locale)) {
      const messages = await import (`@i18n/locales/${_locale}.json`)
      i18n.global.setLocaleMessage(_locale, messages.default)
    }
    return nextTick()
  },

  async switchLanguage (_newLocale: any) {
    await Trans.loadLocaleMessages(_newLocale)

    Trans.currentLocale = _newLocale
    document.querySelector("html")?.setAttribute("lang", _newLocale)
    localStorage.setItem("user-locale", _newLocale)
  },

  isLocaleSupported (locale: any) {
    return Trans.supportedLocales.includes(locale)
  },

  getUserLocale () {
    const _locale = window.navigator.language || Trans.defaultLocale
    return {
      locale: _locale,
      localeNoRegion: localStorage.split('-')[0]
    }
  },

  getPersistedLocale () {
    const _persistedLocale = localStorage.getItem("user-locale")
    if (Trans.isLocaleSupported(_persistedLocale)) {
      return _persistedLocale
    }  else {
      return null
    }
  },

  guessDefaultLocale () {
    const _userPersistedLocale = Trans.getPersistedLocale()
    if (_userPersistedLocale) {
      return _userPersistedLocale
    }

    const _userPreferredLocale = Trans.getUserLocale()

    if (Trans.isLocaleSupported(_userPreferredLocale.locale)) {
      return _userPreferredLocale.locale
    }

    if (Trans.isLocaleSupported(_userPreferredLocale.localeNoRegion)) {
      return _userPreferredLocale.localeNoRegion
    }

    return Trans.defaultLocale
  },

  async routeMiddleware (to: RouteLocationNormalized, _from: RouteLocationNormalized, next: NavigationGuardNext) {
    const _paramLocale = to.params.locale

    if (!Trans.isLocaleSupported(_paramLocale)) {
      return next(Trans.guessDefaultLocale())
    }

    await Trans.switchLanguage(_paramLocale)

    return next()
  }
}

export default Trans