import { useState } from 'react'

import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisation } from 'hooks/useTmpOrganisation'
import { useNetworkContext } from 'provider/network/modules/context'
import * as Yup from 'yup'

const validation = Yup.object().shape({
	title: Yup.string().required(),
	cid: Yup.string().required(),
	start: Yup.date().required(),
	expiry: Yup.date().required(),
})

function useCreateProposalTransaction(): SubmittableExtrinsic {
	const [txState, setTxState] = useState<SubmittableExtrinsic>(null)
	const { selectedApiProvider } = useNetworkContext()
	const address = useCurrentAccountAddress()
	const data = useTmpOrganisation()

	return txState
}
