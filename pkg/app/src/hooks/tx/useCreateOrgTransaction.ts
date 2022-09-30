import { useEffect, useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useLogger } from 'hooks/useLogger'
import { useTmpOrganisation } from 'hooks/useTmpOrganisation'
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import { createTokenType, fromUnit } from 'src/utils/token'
import { encode as utf8Encode } from 'utf8'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	controller_id: Yup.string().required(),
	name: Yup.string().required(),
	cid: Yup.string().required(),
	org_type: Yup.number().required().min(0).max(3),
	access_model: Yup.number().required().min(0).max(2),
	fee_model: Yup.number().required().min(0).max(2),
	// Is actually a number but with 18 digits and yum has no support for big number
	fee_model: Yup.string().required(),
	gov_currency: Yup.object().required(),
	pay_currency: Yup.object().required(),
	member_limit: Yup.number().required().min(0),
	// Is actually a number but with 18 digits and yum has no support for big number
	deposit: Yup.string().required(),
})

export function useCreateOrgTransaction(): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTmpOrganisation()
	const logger = useLogger('useCreateOrgTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && data && address) {
			try {
				// Data mapping
				const mappedData = {
					controller_id: address,
					name: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
					cid: data.metaDataCID,
					org_type: data.type,
					access_model: data.mode,
					fee_model: data.feeMode,
					fee_model: fromUnit(
						data.feeAmount,
						selectedApiProvider.systemProperties.tokenDecimals[
							selectedApiProvider.systemProperties.governanceCurrency
						],
					),
					gov_currency: createTokenType(
						selectedApiProvider.apiProvider,
						selectedApiProvider.systemProperties.tokenSymbol[
							selectedApiProvider.systemProperties.governanceCurrency
						],
					),
					pay_currency: createTokenType(
						selectedApiProvider.apiProvider,
						selectedApiProvider.systemProperties.tokenSymbol[
							selectedApiProvider.systemProperties.paymentCurrencies
						],
					),
					member_limit: data.memberLimit,
					deposit: fromUnit(
						data.deposit,
						selectedApiProvider.systemProperties.tokenDecimals[
							selectedApiProvider.systemProperties.governanceCurrency
						],
					),
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.control.createOrg(
					mappedData.controller_id,
					mappedData.name,
					mappedData.cid,
					mappedData.org_type,
					mappedData.access_model,
					mappedData.fee_model,
					mappedData.fee_model,
					mappedData.gov_currency,
					mappedData.pay_currency,
					mappedData.member_limit,
					mappedData.deposit,
				) as SubmittableExtrinsic

				setTxState({
					tx,
					currencyId: mappedData.gov_currency,
					deposit: mappedData.deposit,
					title: t('transactions:createOrganization:title'),
					description: t('transactions:createOrganization:description'),
					actionSubLine: t('transactions:createOrganization:action_sub_line'),
					actionSubTitle: t('transactions:createOrganization:action_subtitle'),
					txMsg: {
						pending: t('notification:transactions:createOrganization:pending'),
						success: t('notification:transactions:createOrganization:success'),
						error: t('notification:transactions:createOrganization:error'),
					},
				})
			} catch (e) {
				logger.trace(e)
				if (txState) {
					setTxState(null)
				}
			}
		}
	}, [selectedApiProvider, address, data])

	return txState
}
