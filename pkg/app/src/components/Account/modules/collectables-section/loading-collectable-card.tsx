import { Box, Card, CardContent, CardMedia, Skeleton } from '@mui/material'
import React, { FC } from 'react'

const LoadingCollectableCard: FC = () => {
	return (
		//TODO: Change the static color to fetch from theme once the last pull request is merged
		<Card sx={{ maxWidth: '95%', height: '100%', borderRadius: '12px', backgroundColor: '#161C24' }}>
			<CardMedia sx={{ padding: 0.7 }}>
				<Skeleton sx={{ height: 190, borderRadius: '10px' }} animation="wave" variant="rectangular" />
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
