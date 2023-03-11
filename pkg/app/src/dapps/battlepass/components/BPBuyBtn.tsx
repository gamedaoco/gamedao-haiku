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
	const { uuid, user, linkBpid, processing, setProcessing } = useAppContext()

	useEffect(() => {
		linkBpid(id)
	}, [id])

	const [open, setOpen] = useState(false)
	const onClose = () => setOpen(false)

	const { loading: loadingBattlepassData, data: battlepassData } = useGetBattlepassForUserQuery({
		variables: { uuid: uuid ? uuid : null },
	})

	// BATTLEPASS STATE FOR USER
	// free = member
	// pendingpayment =

	const [txState, setTxState] = useState(null)
	const [isPremium, setPremium] = useState(false)
	const { loading: loadingMembership, data: membershipData } = useScoreSubscription({
		variables: { id: id, uuid: uuid },
	})
	// console.log(loadingMembership,membershipData)
	useEffect(() => {
		if (loadingMembership) return
		if (membershipData?.BattlepassParticipants?.length === 0) {
			console.log('-->', 'not a member')
			setTxState('unknown')
			setPremium(false)
		}
		if (membershipData?.BattlepassParticipants?.length > 0) {
			const membership = membershipData?.BattlepassParticipants[0]
			console.log('---->', 'membership', membership)
			setTxState(membership.status)
			setPremium(membership.premium === true)
		}
	}, [id, uuid, loadingMembership, membershipData])

	// BATTLEPASS COMMERCIALS

	const [passes, setPasses] = useState({ total: 0, claimed: 0, free: 0, price: 0 })
	const { data: battlepass } = useBattlepassSubscription({ variables: { id: id } })
	useEffect(() => {
		if (!battlepass || !battlepass?.Battlepasses.length) return
		const pass = battlepass?.Battlepasses[0]
		// console.log('price', pass.price)
		// console.log(
		// 	'buy',
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
			price: pass.price,
		})
	}, [battlepass])

	// MEMBERSHIP

	const [memberState, setMemberState] = useState(MemberState.VIEWER)
	const [isMember, setIsMember] = useState(false)

	useEffect(() => {
		if (loadingBattlepassData) return
		if (!battlepassData) return
		if (!battlepassData?.BattlepassBot?.BattlepassIdentities) return
		const memberships = battlepassData?.BattlepassBot?.BattlepassIdentities[0]?.members
			?.map((b) => b.battlepass.chainId)
			.filter((i) => i === id)[0]
		const member = memberships === id
		// console.log('memberships', memberships, member)
		setIsMember(member)
	}, [uuid, loadingBattlepassData, battlepassData?.BattlepassBot])

	// JOIN TO PARTICIPATE

	const [joinBattlepassMutation] = useJoinBattlepassMutation({
		variables: { battlepass: id, uuid: uuid },
	})
	const handleJoinBattlepass = () => {
		console.log('join', 'battlepass', id, uuid)
		const connect = async () => {
			const response = await joinBattlepassMutation().then((res) => {
				try {
					const _uuid = res?.data?.BattlepassBot?.join?.id
					console.log('join', 'id ->', id)
					setIsMember(true)
				} catch (e) {
					console.log(e)
				}
			})
		}
		connect()
	}

	// CLAIM + BUY

	const [claimBattlepassFreemiumMutation] = useClaimBattlepassFreemiumMutation({
		variables: { battlepass: id, uuid: uuid },
	})
	const handleClaimBattlepass = () => {
		const connect = async () => {
			const response = await claimBattlepassFreemiumMutation({
				variables: { battlepass: id, uuid: uuid },
			}).then((res) => {
				try {
					const txs = res?.data?.BattlepassBot?.joinPremium?.status
					console.log('-->', 'tx status', txs)
					setTxState(txs)
					if (txs === 'pendingPayment') setOpen(true)
					if (txs === 'pending') console.log('success! waiting for confirmation.')
				} catch (e) {
					console.log(e)
				}
			})
		}
		connect()
	}

	//
	//
	//

	// no discord connection
	if (!uuid)
		return (
			<Button onClick={() => signIn('discord')} variant="outlined">
				Connect with Discord
			</Button>
		)

	// not a member or awaiting payment
	if (txState === 'unknown')
		return (
			<Fragment>
				<Button onClick={() => handleJoinBattlepass()} variant="lemon">
					Join Battlepass
				</Button>
			</Fragment>
		)

	// waiting for stripe payment
	// if (txState==='pendingPayment')
	// 	return (<Fragment>
	// 		<Button variant="pink" size="large" sx={{ opacity: 0.75 }}>
	// 			Awaiting Payment
	// 		</Button>

	// 		</Fragment>)

	// waiting for on chain tx confirmation
	if (txState === 'pending')
		return (
			<Button variant="glass" size="large" sx={{ opacity: 0.75 }}>
				Confirming Transaction
			</Button>
		)

	// a member but no connected wallet address
	if (!user.address && txState === 'free')
		return (
			<Fragment>
				<Typography
					variant="header1"
					sx={{
						background: '-webkit-linear-gradient(45deg, #ff00cc 30%, #ff99ff 90%)',
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
						fontWeight: 800,
						transitionDuration: '1s',
						WebkitFilter: 'drop-shadow( 0 2px 10px rgba(255,0,255,0.2) )',
						filter: 'drop-shadow( 0 2px 10px rgba(255,0,255,0.2) )',
						'&:hover': {
							WebkitFilter: 'drop-shadow( 0 2px 10px rgba(255,0,255,1) )',
							filter: 'drop-shadow( 0 2px 10px rgba(255,0,255,1) )',
						},
					}}
				>
					MEMBER
				</Typography>
			</Fragment>
		)

	// a member with a connected wallet
	if (user.address && (txState === 'free' || txState === 'pendingPayment'))
		return (
			<Fragment>
				<Button
					onClick={() => (txState === 'pendingPayment' ? setOpen(true) : handleClaimBattlepass())}
					variant="pink"
				>
					{txState === 'pendingPayment' ? `Pay Now` : passes.free > 0 ? `Get 1 of ${passes.free}` : `Buy Now`}
				</Button>
				<BaseDialog title="GameDAO Battlepass" open={open} onClose={onClose}>
					<Typography
						variant="h2"
						sx={{
							background: '-webkit-linear-gradient(45deg, #ffcc00 30%, #ffff99 90%)',
							WebkitBackgroundClip: 'text',
							WebkitTextFillColor: 'transparent',
							fontWeight: 800,
						}}
					>
						Get early access and go premium!
					</Typography>
					<Checkout args={{ price: passes.price }} />
				</BaseDialog>
			</Fragment>
		)

	// a premium member
	if (txState === 'synced')
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

	return <Fragment></Fragment>
}
