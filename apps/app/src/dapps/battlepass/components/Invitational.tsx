import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

import { useCountdown } from 'hooks/useCountdown'
import { useGetLeaderboardQuery } from 'src/queries'
import { useGetBattlepassUsersQuery } from 'src/queries'

import { useTheme } from '@mui/material/styles'
import { Button, Grid, Typography, Paper, Stack, useMediaQuery } from '@mui/material'
import { Loader } from 'components/atoms/Loader'

const DateTimeDisplay = ({ value, type = null, suffix = null, isDanger }) => {
	return isDanger ? null : (
		<Stack direction="row">
			<Typography variant="hero1">{value}</Typography>
			{type && <Typography variant="hero1">{type}</Typography>}
			{suffix && (
				<Typography variant="hero1" px={1}>
					{suffix}
				</Typography>
			)}
		</Stack>
	)
}

const Counter = ({ days, hours, minutes, seconds }) => {
	return (
		<Stack direction="row" alignContent="center" justifyContent="center">
			<DateTimeDisplay value={days} type={'D'} suffix={':'} isDanger={days < 1} />
			<DateTimeDisplay value={hours} type={'H'} suffix={':'} isDanger={days < 1 && hours < 1} />
			<DateTimeDisplay value={minutes} type={'M'} suffix={':'} isDanger={false} />
			<DateTimeDisplay value={seconds} type={'S'} isDanger={false} />
		</Stack>
	)
}

const Registration = () => {
	return (
		<Stack direction="row">
			<Typography variant="hero1">Registration Form</Typography>
		</Stack>
	)
}

const Countdown = ({ targetDate }) => {
	const [days, hours, minutes, seconds] = useCountdown(targetDate)
	return days + hours + minutes + seconds <= 0 ? (
		<Typography variant="hero1">Expired</Typography>
	) : (
		<Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
	)
}

const Box = (props) => {
	// This reference gives us direct access to the THREE.Mesh object
	const ref = useRef(null)

	// Hold state for hovered and clicked events
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)

	// Subscribe this component to the render-loop, rotate the mesh every frame
	useFrame((state, delta) => (ref.current.rotation.x += delta))

	// Return the view, these are regular Threejs elements expressed in JSX

	return (
		<mesh
			{...props}
			ref={ref}
			scale={clicked ? 1.5 : 1}
			onClick={(event) => click(!clicked)}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

export type TArgs = {
	id?: string
	items?: object
}

type TProps = {
	args?: TArgs
}

const getDateDiff = (start: Date, end: Date) => {
	return end.getTime() - start.getTime()
}

export function Invitational({ args }: TProps) {
	const { id, items } = args
	const theme = useTheme()
	const isMd = useMediaQuery(theme.breakpoints.up('md'), {
		defaultMatches: true,
	})

	const deadline = new Date('2023-06-01 00:00')
	const requiredCount = 1337
	const bpid = '0x60134570092f28b3d3500152e7bfded8348521e46a83e24d664e2af0b63c6532'

	const [memberCount, setMemberCount] = useState(0)

	const { loading, data: members } = useGetBattlepassUsersQuery({ variables: { id: bpid } })
	useEffect(() => {
		if (!members) return
		const _memberCount = members?.battlepassBot?.battlepasses[0]?.members.length || 0
		if (_memberCount === 0) return
		setMemberCount(_memberCount)
	}, [members])

	const handleJoin = (e) => {}

	const [remainingTime, setRemainingTime] = useState(null)

	useEffect(() => {
		if (remainingTime) return
		const t = new Date().getTime() + getDateDiff(new Date(), deadline)
		setRemainingTime(t)
	}, [])

	if (loading) return <Loader />

	return (
		<Grid container alignItems="center" justifyContent="space-between" spacing={theme.spacing(2)} pb={[2, 2]}>
			<Grid item xs={12}>
				<Paper sx={{ p: 2, height: '100%' }} variant="glass">
					<Stack direction="column" justifyContent="space-between">
						<Typography variant="teaserTitle" pb={2}>
							WAVEPASS CASH CUP
						</Typography>
						<Typography variant="teaserText" pb={2}>
							Join top players from around the globe in this first invitational on Fortnite. To take part
							make sure to join WAVEPASS Beta, which will close end of April and put you on the shortlist.
							This invitational will only take place if we reach {requiredCount} members. Join now!
						</Typography>

						{remainingTime && (
							<Stack direction="column" spacing={0} alignItems="center" justifyContent="center">
								<Typography variant="caption" sx={{ borderBottom: `1px solid white` }}>
									remaining slots
								</Typography>
								<Typography variant="hero1" sx={{}}>
									{requiredCount - memberCount} of {requiredCount}
								</Typography>
								<Typography variant="caption" pt={2} sx={{ borderBottom: `1px solid white` }}>
									remaining time
								</Typography>
								<Countdown targetDate={remainingTime} />
							</Stack>
						)}

						<Stack direction="row" justifyContent="end">
							{/* <Button color="secondary">Learn More</Button> */}
							{/* <Button variant="lemon" onClick={handleJoin}> Join </Button> */}
						</Stack>
					</Stack>
				</Paper>
			</Grid>
		</Grid>
	)
}
