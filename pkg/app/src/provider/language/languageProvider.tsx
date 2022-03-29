import React, { useEffect, useState } from 'react'
import { LanguageContext } from './modules/context'
import axios from 'axios'
import { useRouter } from 'next/router'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export function LanguageProvider({ children }) {
	const router = useRouter()
	const { locale, defaultLocale } = router
	const [languageData, setLanguageData] = useState()
	const provider = {
		languageData,
	}

	i18n.use(initReactI18next) // passes i18n down to react-i18next
		.init({
			resources: {
				en: {
					translation: {
						button: {
							navigation: {
								governance: 'Governance',
								campaigns: 'Campaigns',
								dao: 'Dao',
								dashboard: 'Dashboard',
								wallet: 'Wallet',
							},
						},
					},
				},
			},
			lng: 'en', // if you're using a language detector, do not define the lng option
			fallbackLng: 'en',
			interpolation: {
				escapeValue: false,
			},
		})

	useEffect(() => {
		async function fetchData() {
			const { data } = await axios.get(`/api/translation?locale=${locale}`)
			setLanguageData(data)
			console.log('language data: ', data)
		}
		fetchData()
	}, [locale])

	return <LanguageContext.Provider value={provider}>{children}</LanguageContext.Provider>
}
