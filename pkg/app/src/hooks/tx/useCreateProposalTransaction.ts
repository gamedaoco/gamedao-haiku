import * as Yup from 'yup'
import { SubmittableExtrinsic } from '@polkadot/api/promise/types'
import { useState } from 'react'
import { useNetworkContext } from 'provider/network/modules/context'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisation } from 'hooks/useTmpOrganisation'

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
