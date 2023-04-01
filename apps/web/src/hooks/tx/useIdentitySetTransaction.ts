import { useEffect, useState } from 'react'

import { useLogger } from 'src/hooks/useLogger'
import { useNetworkContext } from 'src/providers/network/modules/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import * as Yup from 'yup'

const webRegularExpression =
	/^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
// const webRegularExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi

export const validation = Yup.object({
	display: Yup.string().max(32, 'Max of 32 characters').required('Display Name is Required'),
	legal: Yup.string().max(32, 'Max of 32 characters'),
	email: Yup.string().email('Must be a valid email').max(255),
	web: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(webRegularExpression, 'Must be a valid website'),
	twitter: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(/@(\w){2,15}(:|)/, 'Must be a valid twitter account'),
	riot: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr))
		.matches(/@(\w){2,15}.*:(\w){2,15}/, 'Must be a valid riot account'),
	web3name: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr)),
	discord: Yup.string()
		.notRequired()
		.nullable()
		.transform((curr, orig) => (orig === '' ? null : curr)),
})

export function useIdentitySetTransaction(identity): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { selectedApiProvider } = useNetworkContext()
	const logger = useLogger('useIdentitySetTransaction')
	const { t } = useTranslation()

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && identity) {
			try {
				// Data mapping
				const mappedData = {
					display: identity.display,
					legal: identity.legal,
					email: identity.email,
					riot: identity.riot,
					twitter: identity.twitter,
					web: identity.web,
					web3name: identity.web3name,
					discord: identity.discord,
				}

				// Data validation
				validation.validateSync(mappedData)
				const tx = selectedApiProvider.apiProvider.tx.identity.setIdentity(
					selectedApiProvider?.apiProvider.createType('IdentityInfo', {
						additional: [],
						display: mappedData.display ? { raw: mappedData.display } : { none: null },
						legal: mappedData.legal ? { raw: mappedData.legal } : { none: null },
						web: mappedData.web ? { raw: mappedData.web } : { none: null },
						riot: mappedData.riot ? { raw: mappedData.riot } : { none: null },
						email: mappedData.email ? { raw: mappedData.email } : { none: null },
						image: { none: null },
						twitter: mappedData.twitter ? { raw: mappedData.twitter } : { none: null },
						web3name: mappedData.web3name ? { raw: mappedData.web3name } : { none: null },
						discord: mappedData.discord ? { raw: mappedData.discord } : { none: null },
					}),
				)

				setTxState({
					tx,
					currencyId: selectedApiProvider?.systemProperties?.networkCurrency,
					deposit: '1000000000000000',
					title: t('transactions:setIdentity:title'),
					description: t('transactions:setIdentity:description'),
					actionSubTitle: t('transactions:setIdentity:action_subtitle'),
					actionSubLine: t('transactions:setIdentity:action_sub_line'),
					txMsg: {
						pending: t('notification:transactions:setIdentity:pending'),
						success: t('notification:transactions:setIdentity:success'),
						error: t('notification:transactions:setIdentity:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, identity])

	return txState
}
