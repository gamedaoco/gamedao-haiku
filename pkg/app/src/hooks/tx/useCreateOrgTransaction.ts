import * as Yup from 'yup'
import { useNetworkContext } from 'provider/network/modules/context'
import { useEffect, useState } from 'react'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'

const validation = Yup.object().shape({
	controller: Yup.string().required(),
	// Treasury param will be dropped
	treasury: Yup.string().required(),
	name: Yup.string().required(),
	cid: Yup.string().required(),
	body: Yup.number().required().min(0).max(3),
	access: Yup.number().required().min(0).max(2),
	fee_model: Yup.number().required().min(0).max(2),
	// Is actually a number but with 18 digits and yum has no support for big number
	fee: Yup.string().required(),
	gov_asset: Yup.number().required().min(0),
	pay_asset: Yup.number().required().min(0),
	member_limit: Yup.number().required().min(0),
})

// TODO: Remove
function useTmpData() {
	const [state] = useState<any>({})
	return state
}

// Currently, only as a example. The data from create organization branch are needed.
export function useCreateOrgTransaction(): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const { selectedApiProvider } = useNetworkContext()

	// ToDo use real tmpDao
	const data = useTmpData()

	useEffect(() => {
		if (selectedApiProvider.apiProvider && data) {
			try {
				const mappedData = data

				// Data validation
				validation.validateSync(mappedData)

				// TODO: add real params
				const tx = selectedApiProvider.apiProvider.tx.control.createOrg([])
				setTxState(tx)
			} catch (e) {
				console.warn('CreateOrgTransaction', e)
			}
		}
	}, [selectedApiProvider, data])

	return txState
}
