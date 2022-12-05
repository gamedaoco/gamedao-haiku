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
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 1,
		backgroundColor: 'yellow',
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
	const points = 1337
	const progress = 50

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
						{points} / 10000 BP
					</Typography>
				</Stack>
			</Stack>
			<BorderLinearProgress variant="determinate" value={progress} />
		</Stack>
	)
}

export default XPBar
