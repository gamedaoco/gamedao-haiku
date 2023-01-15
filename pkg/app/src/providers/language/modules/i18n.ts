import { enUS } from '@gamedao/translations'
import i18n, { i18n as I18nType } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

export async function getI18next(): Promise<I18nType> {
	await i18n
		.use(initReactI18next)
		.use(LanguageDetector)
		.init({
			resources: { en: enUS },
			fallbackLng: 'en',
			interpolation: {
				escapeValue: false,
			},
			// LanguageDetector
			detection: {
				order: ['querystring', 'cookie', 'navigator', 'path', 'localStorage', 'sessionStorage', 'htmlTag'],
			},
		})

	return i18n
}
