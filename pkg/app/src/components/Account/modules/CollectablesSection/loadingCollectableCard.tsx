import React, { FC } from 'react'

import { Box, Card, CardContent, CardMedia, Skeleton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const LoadingCollectableCard: FC = () => {
	const theme = useTheme()

	return (
		<Card sx={{ maxWidth: '95%', height: '100%', backgroundColor: theme.palette.grey[700] }}>
			<CardMedia sx={{ padding: 0.7 }}>
				<Skeleton
					sx={{ height: 190, borderRadius: theme.shape.borderRadiusMd }}
					animation="wave"
					variant="rectangular"
				/>
			</CardMedia>

			<CardContent sx={{ pt: 2 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
					<Skeleton animation="wave" height={10} width="90%" />
					<Skeleton animation="wave" height={10} width="40%" />
				</Box>
			</CardContent>
		</Card>
	)
}

export default LoadingCollectableCard
