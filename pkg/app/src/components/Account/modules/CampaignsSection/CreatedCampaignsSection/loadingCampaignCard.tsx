import React from 'react'

import { Box, Card, CardContent, Skeleton } from '@mui/material'

const LoadingCampaignCard = () => {
	return (
		<Card sx={{ maxHeight: 433 }}>
			<Skeleton height={200} sx={{ position: 'relative', bottom: 5 }} variant="rectangular" />
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Card sx={{ top: -35 }} variant="mask" />
			</Box>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Skeleton variant="circle" />
			</Box>
			<CardContent sx={{ pt: 0, mt: -10 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Skeleton height={20} width={100} />
					<Skeleton height={15} width={90} />
					<Skeleton height={15} width={250} sx={{ mt: 3 }} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						gap: '10%',
						pt: 3,
					}}
				>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Skeleton height={20} width={80} />
						<Skeleton height={20} width={80} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Skeleton height={20} width={80} />
						<Skeleton height={20} width={80} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Skeleton height={20} width={80} />
						<Skeleton height={20} width={80} />
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}

export default LoadingCampaignCard
