import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from 'providers/app/modules/context'
import { useJoinBattlepassMutation } from 'src/queries'
import { useGetBattlepassForUserQuery } from 'src/queries'
import { Button, Typography } from '@mui/material'
import { signIn } from 'next-auth/react'

import { BaseDialog } from 'components/BaseDialog/baseDialog'
// import { Checkout } from 'components/checkout'

export enum MemberState {
	VIEWER,
	FREEMIUM,
	PREMIUM,
	ADMIN,
}

type TArgs = { id: string }
type TProps = { args: TArgs }

export const BPBuyBtn = ({ args }: TProps) => {
	const { push } = useRouter()
	const { id } = args
	const { uuid } = useAppContext()
	const { data } = useGetBattlepassForUserQuery({ variables: { uuid: uuid } })

	const [open, setOpen] = useState(false)
	const onClose = () => {
		setOpen(false)
	}

	const [memberState, setMemberState] = useState(MemberState.VIEWER)
	const [enableBuy, setEnable] = useState(false)
	const [isMember, setIsMember] = useState(false)
	const [isPremium, setIsPremium] = useState(false)

	useEffect(() => {
		if (!data) return
		console.log('buy', data)
		if (!data?.BattlepassBot?.BattlepassIdentities) return

		const memberships = data?.BattlepassBot?.BattlepassIdentities[0]?.members
			?.map((b) => b.battlepass.chainId)
			.filter((i) => i === id)[0]
		const member = memberships === id
		console.log('memberships', memberships, member)
		setIsMember(member)
	}, [data?.BattlepassBot?.BattlepassIdentities])

	const [joinBattlepassMutation] = useJoinBattlepassMutation({
		variables: { battlepass: id, uuid: uuid },
	})

	const handleJoinBattlepass = () => {
		console.log('join battlepass:', id, uuid)
		const connect = async () => {
			const response = await joinBattlepassMutation().then((res) => {
				try {
					const _uuid = res?.data?.BattlepassBot?.join?.uuid
					console.log('join', 'uuid ->', _uuid)
					setIsMember(true)
				} catch (e) {
					console.log(e)
				}
			})
		}
		connect()
	}

	const handleBuyBattlepass = () => {
		console.log('buy battlepass:', id, uuid)
		push('/buy')
	}

	if (!uuid)
		return (
			<Button onClick={() => signIn('discord')} variant="outlined">
				{' '}
				Connect with Discord{' '}
			</Button>
		)
	if (!isMember)
		return (
			<Button onClick={() => handleJoinBattlepass()} variant="lemon">
				Join Battlepass
			</Button>
		)
	return (
		<Button onClick={() => handleBuyBattlepass()} variant="pink">
			{' '}
			Go Premium{' '}
		</Button>
		// <Fragment>
		// 	<BaseDialog title="Go Premium" open={open} onClose={onClose}>
		// 		{/* <Typography
		// 			variant="h3"
		// 			sx={{
		// 				background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
		// 				WebkitBackgroundClip: 'text',
		// 				WebkitTextFillColor: 'transparent',
		// 				fontWeight: 800,
		// 			}}
		// 		>
		// 			Buy a Battlepass now and get premium!
		// 		</Typography> */}

		// 		<Checkout/>

		// 	</BaseDialog>
		// </Fragment>
	)
}
