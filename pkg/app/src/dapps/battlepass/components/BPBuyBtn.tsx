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

	const [purchaseInProgess, setPurchaseInProgess] = useState(false)

	const [open, setOpen] = useState(false)
	const onClose = () => {
		setOpen(false)
	}

	const { data } = useGetBattlepassForUserQuery({ variables: { uuid: uuid } })

	const [passes, setPasses] = useState({ total: 0, claimed: 0, free: 0, price: 0 })
	const { data: battlepass } = useBattlepassSubscription({ variables: { id: id } })

	const [isPremium, setPremium] = useState(false)
	const { data: scoreData } = useScoreSubscription({ variables: { id: id, uuid: uuid } })

	useEffect(() => {
		if (!scoreData?.BattlepassParticipants.length) return
		if (scoreData.BattlepassParticipants) {
			setPremium(scoreData?.BattlepassParticipants[0].premium === true)
		}
	}, [scoreData?.BattlepassParticipants])

	useEffect(() => {
		if (!battlepass || !battlepass?.Battlepasses.length) return
		const pass = battlepass?.Battlepasses[0]
		console.log('price', pass.price)
		console.log(
			'buy',
			pass,
			'total/available/claimed',
			pass.freePasses,
			pass.freePasses - pass.passesClaimed,
			pass.passesClaimed,
		)
		setPasses({
			total: pass.freePasses,
			claimed: pass.passesClaimed,
			free: pass.freePasses - pass.passesClaimed,
			price: pass.price,
		})
	}, [battlepass])

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
		// console.log('memberships', memberships, member)
		setIsMember(member)
	}, [data, data?.BattlepassBot])

	const [joinBattlepassMutation] = useJoinBattlepassMutation({
		variables: { battlepass: id, uuid: uuid },
	})
	const [claimBattlepassFreemiumMutation] = useClaimBattlepassFreemiumMutation({
		variables: { battlepass: id, uuid: uuid },
	})
	const handleJoinBattlepass = () => {
		console.log('join', 'battlepass', id, uuid)
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

	const handleClaimBattlepass = () => {
		if (processing) return

		console.log('claim battlepass', passes.free, id, user.uuid, user.address)
		if (passes.free === 0) {
			setProcessing(true)
			setPurchaseInProgess(true)
			setOpen(true)
		} else {
			const connect = async () => {
				const response = await claimBattlepassFreemiumMutation({
					variables: { battlepass: id, uuid: uuid },
				}).then((res) => {
					try {
						const _uuid = res?.data?.BattlepassBot?.joinPremium?.uuid
						console.log('buy', 'claim', 'uuid ->', _uuid)
						// setPurchaseInProgess(false)
						setOpen(false)
					} catch (e) {
						console.log(e)
					}
				})
			}
			connect()
		}
	}

	const handleBuyBattlepass = () => {
		if (processing) return
		setProcessing(true)
		setPurchaseInProgess(true)
		console.log('buy battlepass', passes.free, id, uuid)
		// setPurchaseInProgess(false)
		setOpen(true)
	}

	//

	// if (processing)
	// 	return (
	// 		<Button variant="pink" size="large" sx={{ opacity: 0.75 }}>
	// 			Processing...
	// 		</Button>
	// 	)

	if (!uuid)
		return (
			<Button onClick={() => signIn('discord')} variant="outlined">
				Connect with Discord
			</Button>
		)
	if (uuid && !isMember)
		return (
			<Button disabled={purchaseInProgess ? true : false} onClick={() => handleJoinBattlepass()} variant="lemon">
				Join Battlepass
			</Button>
		)

	if (uuid && isMember && !isPremium && !user.address)
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

	if (uuid && isMember && !isPremium && user.address)
		return passes.free > 0 ? (
			<Fragment>
				<Button onClick={() => handleClaimBattlepass()} variant="pink">
					{passes.free > 0 ? `Get 1 of ${passes.free}` : `Ended`}
				</Button>
			</Fragment>
		) : (
			<Fragment>
				<Button onClick={() => handleBuyBattlepass()} variant="pink">
					Buy Now
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

	if (uuid && isMember && isPremium)
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

	return null
}
