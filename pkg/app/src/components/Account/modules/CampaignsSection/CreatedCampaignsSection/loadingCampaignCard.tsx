import { Box, Card, CardContent, CardMedia, LinearProgress, Skeleton, Typography } from '@mui/material'
import React, { FC } from 'react'

const LoadingCampaignCard: FC = () => {
	return (
		<Card sx={{ minHeight: 388 }}>
			<Skeleton
				sx={{
					width: '100%',
					position: 'relative',
					bottom: 5,
				}}
				animation="wave"
				variant="rectangular"
			/>
		</Card>
	)
}

export default LoadingCampaignCard
