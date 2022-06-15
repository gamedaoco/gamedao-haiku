import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'

interface LineupProps {
	firstTitle: string
	secondTitle: string
	thirdTitle: string
	firstSubhead: number
	secondSubhead: number
	thirdSubhead: number
	gap: string
}

const Lineup: FC<LineupProps> = ({
	firstTitle,
	secondTitle,
	thirdTitle,
	firstSubhead,
	secondSubhead,
	thirdSubhead,
	gap,
}) => {
	return (
		<Box
			sx={{
				display: 'flex',
				pt: 3,
				alignContent: 'center',
				justifyContent: 'center',
				gap: { gap },
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyItems: 'center',
				}}
			>
				<Typography variant="caption">{firstTitle}</Typography>
				<Typography variant="body1">{firstSubhead}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyItems: 'center',
				}}
			>
				<Typography variant="caption">{secondTitle}</Typography>
				<Typography variant="body1">{secondSubhead}</Typography>
			</Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyItems: 'center',
				}}
			>
				<Typography variant="caption">{thirdTitle}</Typography>
				<Typography variant="body1">{thirdSubhead}</Typography>
			</Box>
		</Box>
	)
}

export default Lineup
