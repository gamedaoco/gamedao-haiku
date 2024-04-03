import { useEffect, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { UnityView } from 'constants/unity'
import { useCurrentAccountAddress } from 'src/hooks/useCurrentAccountAddress'
import { useCurrentAccountState } from 'src/hooks/useCurrentAccountState'
import { Organization, useOrganizationByIdSubscription } from 'src/queries'

import { Layout } from 'src/layouts/v2'
import { Loader } from 'components/atoms/Loader'
import { NoWalletConnected } from 'components/molecules/NoWalletConnected'
import { TransactionDialog } from 'components/molecules/TransactionDialog/transactionDialog'
import { Unity } from 'dapps/unity/views/Unity'

export type TArgs = {
	id: string
	view?: UnityView
	isCreator?: boolean
	isMember?: boolean
	isPrime?: boolean
	treasury?: string
	organization?: Organization
	loading?: boolean
	openTx?: Function
}
export function Page() {
	const { query, push } = useRouter()
	const id = query?.id as string
	const view = query?.view as UnityView

	const walletGate = false
	const address = useCurrentAccountAddress()
	const accountState = useCurrentAccountState()

	const [args, setArgs] = useState<TArgs>({
		id: id,
		view: view,
	})
	const { loading, data, error } = useOrganizationByIdSubscription({ variables: { orgId: id } })

	//
	// get org data
	//

	useEffect(() => {
		if (loading || !data) return
		if (data?.organization?.length === 0) push('/unity') // 404
		else setArgs({ ...args, organization: data?.organization[0] as Organization })
	}, [loading, data])

	useEffect(() => {
		if (!args.organization || !address) return
		const isCreator = args.organization.creator === address
		const isMember = args.organization.organization_members.some((member) => member.address === address)
		const isPrime = args.organization.prime === address
		const treasury = args.organization.treasury
		setArgs({ ...args, isMember, isPrime, isCreator, treasury })
	}, [args.organization, address])

	//
	//	tx modal
	//

	const [tx, setTx] = useState()
	const [showTxModalType, setShowTxModalType] = useState(true)
	const handleOpenTxModal = useCallback(() => {
		setShowTxModalType(true)
	}, [setShowTxModalType])
	const handleCloseTxModal = useCallback(() => {
		setShowTxModalType(false)
	}, [setShowTxModalType])
	const openTx = useCallback(
		(tx) => {
			setTx(tx)
			handleOpenTxModal()
		},
		[setTx, handleOpenTxModal],
	)

	//
	//
	//

	if (loading) return <Loader />
	if (walletGate && !accountState) return <NoWalletConnected />

	return (
		<Layout showHeader showFooter noContainer>
			<Unity
				args={{
					id: id,
					view: view,
					loading: loading,
					organization: data?.organization[0] as Organization,
					openTx: (tx) => openTx(tx),
				}}
			/>
			<TransactionDialog
				open={showTxModalType}
				onClose={handleCloseTxModal}
				txData={tx}
				txCallback={handleCloseTxModal}
			/>
		</Layout>
	)
}

export default Page
