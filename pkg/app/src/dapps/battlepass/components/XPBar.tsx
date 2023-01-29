import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

import { useGetScoreQuery } from 'src/queries'

import { styled, useTheme } from '@mui/material/styles'
import { Box, Button, Stack, Typography } from '@mui/material'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		borderRadius: 1,
		backgroundColor: theme.palette.grey[700],
		boxShadow: '0 0 10px #ee469399',
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 1,
		background: 'linear-gradient( to right, #ee4693, #ee4693 90%, #ffffff 100% )',
		boxShadow: '0 0 10px #ee4693',
	},
}))

// eslint-disable-next-line @next/next/no-img-element
const Shield = () => <img src="/bp/shield-default.svg" height="45px" alt="GameDAO" />

export type TArgs = {
	id?: string
	isBattlePass?: boolean
}

type TProps = {
	args?: TArgs
}

export const XPBar = ({ args }: TProps) => {
	const theme = useTheme()

	const { id } = args
	const { data: session } = useSession()

	const [level, setLevel] = useState(7)
	const [max, setMax] = useState(10000)
	const [points, setPoints] = useState(Math.round(Math.random() * max))

	const where = { battlepass: id, uuid: session.user.uuid }
	const { loading, data } = useGetScoreQuery({ where })

	// const joinBattlePassTX = useJoinBattlePassTX(id)
	// const address = useCurrentAccountAddress()

	return (
		<Stack sx={{ width: '100%' }} spacing={1}>
			<Stack direction="row" spacing={theme.spacing(2)} alignItems="center">
				<Button
					sx={{
						height: '64px',
						width: 'auto',
						backgroundImage: 'url(/bp/shield-default.svg)',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center center',
						backgroundSize: 'contain',
					}}
				>
					<Typography variant="shield" color="white">
						{level}
					</Typography>
				</Button>
				<Stack direction="column" alignItems="bottom">
					<Typography variant="body1" color="white">
						Your current Score
					</Typography>
					<Typography variant="h5" color="white">
						{points} / {max} BP
					</Typography>
				</Stack>
			</Stack>
			<BorderLinearProgress variant="determinate" value={points / 100} />
		</Stack>
	)
}
