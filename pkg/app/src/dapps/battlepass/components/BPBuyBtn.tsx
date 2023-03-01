import { Fragment, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

import { useAppContext } from 'providers/app/modules/context'
import {
	useJoinBattlepassMutation,
	useGetBattlepassForUserQuery,
	useBattlepassSubscription,
	useClaimBattlepassPremiumMutation,
	useClaimBattlepassFreemiumMutation,
	useScoreSubscription,
} from 'src/queries'

import { Button, Typography } from '@mui/material'
import { BaseDialog } from 'components/BaseDialog/baseDialog'
import { Checkout } from 'components/commerce'

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
	const { uuid, user } = useAppContext()

	const { data } = useGetBattlepassForUserQuery({ variables: { uuid: uuid } })

	const [passes, setPasses] = useState({ total: 0, claimed: 0, free: 0 })
	const { data: freePasses } = useBattlepassSubscription({ variables: { id: id } })

	const [isPremium, setPremium] = useState(false)
	const { data: scoreData } = useScoreSubscription({ variables: { id: id, uuid: uuid } })

	const [claiming, setClaiming] = useState(false)

	useEffect(() => {
		if (!scoreData?.BattlepassParticipants.length) return
		if (scoreData.BattlepassParticipants) {
			setPremium(scoreData?.BattlepassParticipants[0].premium === true)
		}
	}, [scoreData?.BattlepassParticipants])

	useEffect(() => {
		if (!freePasses || !freePasses?.Battlepasses.length) return
		const pass = freePasses?.Battlepasses[0]
		// console.log('buy',
		// 	pass,
		// 	'total/available/claimed',
		// 	pass.freePasses,
		// 	pass.freePasses - pass.passesClaimed,
		// 	pass.passesClaimed,
		// )
		setPasses({
			total: pass.freePasses,
			claimed: pass.passesClaimed,
			free: pass.freePasses - pass.passesClaimed,
		})
	}, [freePasses])

	const [memberState, setMemberState] = useState(MemberState.VIEWER)
	const [enableBuy, setEnable] = useState(false)
	const [isMember, setIsMember] = useState(false)

	useEffect(() => {
		if (!data) return
		if (!data?.BattlepassBot?.BattlepassIdentities) return
		const memberships = data?.BattlepassBot?.BattlepassIdentities[0]?.members
			?.map((b) => b.battlepass.chainId)
			.filter((i) => i === id)[0]
		const member = memberships === id
		console.log('memberships', memberships, member)
		setIsMember(member)
	}, [data, data?.BattlepassBot])

	const [joinBattlepassMutation] = useJoinBattlepassMutation({
		variables: { battlepass: id, uuid: uuid },
	})

	const [open, setOpen] = useState(false)
	const onClose = () => {
		setOpen(false)
	}

	const handleJoinBattlepass = () => {
		console.log('buy', 'join battlepass:', id, uuid)
		const connect = async () => {
			const response = await joinBattlepassMutation().then((res) => {
				try {
					const _uuid = res?.data?.BattlepassBot?.join?.uuid
					console.log('buy', 'join', 'uuid ->', _uuid)
					setIsMember(true)
				} catch (e) {
					console.log(e)
				}
			})
		}
		connect()
	}

	const [claimBattlepassFreemiumMutation] = useClaimBattlepassFreemiumMutation({
		variables: { battlepass: id, uuid: uuid },
	})

	const handleClaimBattlepass = () => {
		console.log(passes.free, id, uuid)

		// buy
		if (passes.free === 0) {
			setOpen(true)
		} else {
			const connect = async () => {
				const response = await claimBattlepassFreemiumMutation({
					variables: { battlepass: id, uuid: uuid },
				}).then((res) => {
					try {
						const _uuid = res?.data?.BattlepassBot?.joinPremium?.uuid
						console.log('buy', 'claim', 'uuid ->', _uuid)
					} catch (e) {
						console.log(e)
					}
				})
			}
			connect()
		}
	}

	const handleBuyBattlepass = () => {
		console.log(passes.free, id, uuid)

		// buy
		if (passes.free === 0) {
			setOpen(true)
		} else {
			const connect = async () => {
				const response = await claimBattlepassFreemiumMutation({
					variables: { battlepass: id, uuid: uuid },
				}).then((res) => {
					try {
						const _uuid = res?.data?.BattlepassBot?.joinPremium?.uuid
						console.log('buy', 'claim', 'uuid ->', _uuid)
					} catch (e) {
						console.log(e)
					}
				})
			}
			connect()
		}
	}

	if (uuid && isPremium)
		return (
			<Fragment>
				<Typography
					variant="header1"
					sx={{
						background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontWeight: 800,
						transitionDuration: '1s',
						WebkitFilter: 'drop-shadow( 0 2px 10px rgba(255,255,0,0.2) )',
						filter: 'drop-shadow( 0 2px 10px rgba(255,255,0,0.2) )',
						'&:hover': {
							WebkitFilter: 'drop-shadow( 0 2px 10px rgba(255,255,0,1) )',
							filter: 'drop-shadow( 0 2px 10px rgba(255,255,0,1) )',
						},
					}}
				>
					PREMIUM
				</Typography>
			</Fragment>
		)

	if (uuid && !isPremium && passes.free > 0)
		return (
			<Fragment>
				<Button onClick={() => handleClaimBattlepass()} variant="pink" disabled={passes.free < 1}>
					{passes.free > 0 ? `Get 1 of ${passes.free}` : `Ended`}
				</Button>
			</Fragment>
		)

	if (uuid && isMember && !isPremium)
		return (
			<Fragment>
				<Button onClick={() => handleBuyBattlepass()} variant="pink" disabled={claiming}>
					Buy Now
				</Button>
				<BaseDialog title="Go Premium" open={open} onClose={onClose}>
					<Typography
						variant="h3"
						sx={{
							background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							fontWeight: 800,
						}}
					>
						Buy a Battlepass now and go premium!
					</Typography>
					<Checkout />
				</BaseDialog>
			</Fragment>
		)

	if (!isMember)
		return (
			<Button onClick={() => handleJoinBattlepass()} variant="lemon">
				Join Battlepass
			</Button>
		)

	if (!uuid)
		return (
			<Button onClick={() => signIn('discord')} variant="outlined">
				Connect with Discord
			</Button>
		)

	return null
}
