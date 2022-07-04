import React, { useMemo } from 'react'

import { Key, Person } from '@mui/icons-material'
import { Box, Card, CardContent, CardHeader } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import { useTheme } from '@mui/material/styles'

export function LoadingTileCard() {
	const theme = useTheme()

	const SubHeader = useMemo(() => {
		return (
			<Box
				sx={{
					display: 'flex',
					gap: '1.25rem',
					flexWrap: 'wrap',
					justifyContent: 'flex-start',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '.25rem',
					}}
				>
					<Person fontSize={'small'} />
					<Skeleton animation="wave" height={8} width="40px" />
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: '.25rem',
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							flexDirection: 'row',
							gap: '0.25rem',
							alignItems: 'center',
						}}
					>
						<Key fontSize={'small'} />
						<Skeleton animation="wave" height={8} width="30px" />
					</Box>
				</Box>
			</Box>
		)
	}, [])

	return (
		<Card
			sx={{
				minHeight: '164px',
				maxWidth: '344px',
				cursor: 'pointer',
			}}
		>
			<CardHeader
				avatar={<Skeleton variant="circular" width={64} height={64} />}
				title={<Skeleton animation="wave" height={13} width="80%" />}
				subheader={SubHeader}
			/>
			<CardContent>
				<>
					<Skeleton animation="wave" height={8} width="90%" />
					<Skeleton animation="wave" height={8} width="90%" />
					<Skeleton animation="wave" height={8} width="90%" />
				</>
			</CardContent>
		</Card>
	)
}
