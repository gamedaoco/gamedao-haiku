import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TransactionData } from 'src/@types/transactionData'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useLogger } from 'src/hooks/useLogger'
import { useTmpOrganization } from 'src/hooks/useTmpOrganization'
import { useNetworkContext } from 'src/providers/network/modules/context'
import { createTokenType, fromUnit } from 'src/utils/token'
import { encode as utf8Encode } from 'utf8'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	name: Yup.string().required(),
	cid: Yup.string().required(),
	org_type: Yup.string().required(),
	access: Yup.string().required(),
	feeModel: Yup.string().required(),
	fee: Yup.string().required(),
	memberLimit: Yup.number().required().min(0),
	// Is actually a number but with 18 digits and yum has no support for big number
	deposit: Yup.string().required(),
	gov_currency: Yup.mixed().required(),
	pay_currency: Yup.mixed().required(),
})

export function useCreateOrgTransaction(): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTmpOrganization()
	const logger = useLogger('useCreateOrgTransaction')

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && data && address) {
			try {
				// Data mapping
				const mappedData = {
					name: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
					cid: data.metaDataCID,
					org_type: selectedApiProvider.apiProvider.createType('GamedaoControlOrgType', data.type),
					access: selectedApiProvider.apiProvider.createType('GamedaoControlAccessModel', data.mode),
					feeModel: selectedApiProvider.apiProvider.createType('GamedaoControlFeeModel', data.feeMode),
					memberLimit: data.memberLimit,
					fee: fromUnit(
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
					mappedData.name,
					mappedData.cid,
					mappedData.org_type,
					mappedData.access,
					mappedData.feeModel,
					mappedData.memberLimit,
					mappedData.fee,
					mappedData.gov_currency,
					mappedData.pay_currency,
					mappedData.deposit,
				) as SubmittableExtrinsic

				setTxState({
					tx,
					currencyId: selectedApiProvider.systemProperties.governanceCurrency,
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
