import React, { FC } from 'react'

import { Box, Card, CardContent, CardMedia, Skeleton } from '@mui/material'

const LoadingCollectableCard: FC = () => {
	return (
		<Card variant="glass" sx={{ minHeight: '300px' }}>
			<CardMedia sx={{ padding: 0.75 }}>
				<Skeleton variant="primary" sx={{ height: 190 }} animation="wave" />
			</CardMedia>

			<CardContent sx={{ pt: 4 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
					<Skeleton animation="wave" height={15} width="90%" />
					<Skeleton animation="wave" height={15} width="40%" />
				</Box>
			</CardContent>
		</Card>
	)
}

export default LoadingCollectableCard
