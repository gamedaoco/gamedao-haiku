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
		console.log(data)

		const memberships = data?.BattlepassBot?.BattlepassIdentities[0].members

		if (!memberships.length) {
			setIsMember(false)
			return
		}

		console.log('buy', memberships.length, 'entries', memberships)

		const pass = memberships.filter((i) => i.battlepass.chainId === id)[0].battlepass.chainId === id

		console.log('pass', pass)

		// setEnable(!pass)
		setIsMember(pass)
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
