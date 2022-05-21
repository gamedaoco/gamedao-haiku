import * as Yup from 'yup'
import { useNetworkContext } from 'provider/network/modules/context'
import { useEffect, useState } from 'react'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useTmpOrganisation } from 'hooks/useTmpOrganisation'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { fromUnit } from 'src/utils/token'
import { encode as utf8Encode } from 'utf8'

const validation = Yup.object().shape({
	controller_id: Yup.string().required(),
	name: Yup.string().required(),
	cid: Yup.string().required(),
	org_type: Yup.number().required().min(0).max(3),
	access: Yup.number().required().min(0).max(2),
	fee_model: Yup.number().required().min(0).max(2),
	// Is actually a number but with 18 digits and yum has no support for big number
	fee: Yup.string().required(),
	gov_asset: Yup.number().required().min(0),
	pay_asset: Yup.number().required().min(0),
	member_limit: Yup.number().required().min(0),
	// Is actually a number but with 18 digits and yum has no support for big number
	deposit: Yup.string().required(),
})

export function useCreateOrgTransaction(): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTmpOrganisation()

	useEffect(() => {
		if (selectedApiProvider?.apiProvider && data && address) {
			try {
				// Data mapping
				const mappedData = {
					controller_id: address,
					name: typeof data.name === 'string' ? utf8Encode(data.name) : data.name,
					cid: data.metaDataCID,
					org_type: data.type,
					access: data.mode,
					fee_model: data.feeMode,
					fee: fromUnit(data.feeAmount, selectedApiProvider.systemProperties.tokenDecimals),
					gov_asset: 2, // TODO
					pay_asset: 0, // TODO
					member_limit: data.memberLimit,
					deposit: fromUnit(data.deposit, selectedApiProvider.systemProperties.tokenDecimals),
				}

				// Data validation
				validation.validateSync(mappedData)

				const tx = selectedApiProvider.apiProvider.tx.control.createOrg(
					mappedData.controller_id,
					mappedData.name,
					mappedData.cid,
					mappedData.org_type,
					mappedData.access,
					mappedData.fee_model,
					mappedData.fee,
					mappedData.gov_asset,
					mappedData.pay_asset,
					mappedData.member_limit,
					mappedData.deposit,
				)
				setTxState(tx)
			} catch (e) {
				console.warn('CreateOrgTransaction', e)
			}
		}
	}, [selectedApiProvider, address, data])

	return txState
}
