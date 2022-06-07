import i18n, { i18n as I18nType } from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

async function fetchLang() {
	try {
		const response = await fetch(`/api/translation`)
		return await response.json()
	} catch (error) {
		console.error('The translations files could not be loaded.', 'error', error)
	}

	return null
}

export async function getI18next(): Promise<I18nType> {
	await i18n
		.use(initReactI18next)
		.use(LanguageDetector)
		.init({
			resources: (await fetchLang()) ?? {},
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
