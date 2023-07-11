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
	orgId: Yup.string(),
	name: Yup.string(),
	cid: Yup.string(),
	// org_type: Yup.string().required(),
	// access: Yup.string().required(),
	// fee_model: Yup.string().required(),
	// fee: Yup.string().required(),
	// member_limit: Yup.number().required().min(0),
	// Is actually a number but with 18 digits and yum has no support for big number
	// deposit: Yup.string().required(),
	// gov_currency: Yup.mixed().required(),
	// pay_currency: Yup.mixed().required(),
})

// xtr: updateOrg(orgId, name, cid, primeId, orgType, accessModel, memberLimit, feeModel, membershipFee)

type TArgs = {
	orgId?: string
	name?: string
	cid?: string
	primeId?: string
	orgType?: string
	accessModel?: string
	memberLimit?: number
	feeModel?: string
	membershipFee?: string
}
type TProps = { args: TArgs }

export function useUpdateOrgTransaction({ args }: TProps): TransactionData {
	const [txState, setTxState] = useState<TransactionData>(null)
	const { t } = useTranslation()
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()

	const data = useTmpOrganization()
	const logger = useLogger('useCreateOrgTransaction')

	useEffect(() => {
		if (!args.orgId) return

		if (selectedApiProvider?.apiProvider && args && address) {
			try {
				// map

				const payload = {
					orgId: args?.orgId,
					name: utf8Encode(args.name),
					cid: args.cid,

					// member_limit: data.memberLimit,
					// org_type: selectedApiProvider.apiProvider.createType('GamedaoControlOrgType', data.type),
					// access: selectedApiProvider.apiProvider.createType('GamedaoControlAccessModel', data.mode),
					// fee_model: selectedApiProvider.apiProvider.createType('GamedaoControlFeeModel', data.feeMode),
					// fee: fromUnit(
					// 	data.feeAmount,
					// 	selectedApiProvider.systemProperties.tokenDecimals[
					// 		selectedApiProvider.systemProperties.governanceCurrency
					// 	],
					// ),
					// gov_currency: createTokenType(
					// 	selectedApiProvider.apiProvider,
					// 	selectedApiProvider.systemProperties.tokenSymbol[
					// 		selectedApiProvider.systemProperties.governanceCurrency
					// 	],
					// ),
					// pay_currency: createTokenType(
					// 	selectedApiProvider.apiProvider,
					// 	selectedApiProvider.systemProperties.tokenSymbol[
					// 		selectedApiProvider.systemProperties.paymentCurrencies
					// 	],
					// ),
					// deposit: fromUnit(
					// 	data.deposit,
					// 	selectedApiProvider.systemProperties.tokenDecimals[
					// 		selectedApiProvider.systemProperties.governanceCurrency
					// 	],
					// ),
				}

				// Data validation
				validation.validateSync(payload)

				const tx = selectedApiProvider.apiProvider.tx.control.updateOrg(
					payload.orgId,
					payload.name,
					payload.cid,
					// mappedData.org_type,
					// mappedData.access,
					// mappedData.fee_model,
					// mappedData.member_limit,
					// mappedData.fee,
					// mappedData.gov_currency,
					// mappedData.pay_currency,
					// mappedData.deposit,
				) as SubmittableExtrinsic

				setTxState({
					tx,
					currencyId: selectedApiProvider.systemProperties.governanceCurrency,
					// deposit: mappedData.deposit,
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
