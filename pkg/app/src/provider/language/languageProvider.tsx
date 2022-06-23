import React, { ReactNode, useEffect, useState } from 'react'

import type { i18n as I18nType } from 'i18next'
import { getI18next } from 'provider/language/modules/i18n'
import { I18nextProvider } from 'react-i18next'

interface ComponentProps {
	children: ReactNode
}

export function LanguageProvider({ children }: ComponentProps) {
	const [i18n, setI18n] = useState<I18nType>()

	useEffect(() => {
		if (!i18n) {
			getI18next().then(setI18n)
		}
	}, [])

	if (!i18n) {
		return null
	}

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
