import React, { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useConfig } from 'hooks/useConfig'
import { useCurrentAccountAddress } from 'hooks/useCurrentAccountAddress'
import { useTmpOrganisationState } from 'hooks/useTmpOrganisationState'
import { useJoinBattlePassTX } from 'hooks/tx/useJoinBattlePassTX'

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
	const { id } = args
	const theme = useTheme()
	const joinBattlePassTX = useJoinBattlePassTX(id)
	const address = useCurrentAccountAddress()

	const level = 7
	const max = 10000
	const points = Math.round(Math.random() * max)

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

export default XPBar
