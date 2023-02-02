import { Fragment, useCallback, useEffect, useState } from 'react'
import { useAppContext } from 'providers/app/modules/context'
import { useJoinBattlepassMutation } from 'src/queries'
import { useGetBattlepassForUserQuery } from 'src/queries'
import { Button } from '@mui/material'
import { signIn } from 'next-auth/react'

export enum MemberState {
	VIEWER,
	FREEMIUM,
	PREMIUM,
	ADMIN,
}

type TArgs = { id: string }
type TProps = { args: TArgs }

export const BPBuyBtn = ({ args }: TProps) => {
	const { id } = args
	const { uuid } = useAppContext()
	const { data } = useGetBattlepassForUserQuery({ variables: { uuid: uuid } })

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
		const res = joinBattlepassMutation()

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
		// const res = joinBattlepassMutation()
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
			Go Premium
		</Button>
	)
}
