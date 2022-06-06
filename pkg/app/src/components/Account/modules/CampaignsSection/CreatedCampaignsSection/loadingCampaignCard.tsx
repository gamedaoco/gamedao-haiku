import React, { FC } from 'react'

import { Box, Card, CardContent, Skeleton } from '@mui/material'

const LoadingCampaignCard: FC = () => {
	return (
		<Card sx={{ minHeight: 388 }}>
			<Skeleton height={200} sx={{ position: 'relative', bottom: 5 }} variant="rectangular" />
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Skeleton
					sx={{
						width: '20%',
						height: '100px',
						borderRadius: '100%',
						position: 'relative',
						top: -55,
					}}
				/>
			</Box>
			<CardContent sx={{ pt: 0, mt: -7 }}>
				<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Skeleton height={20} width={100} />
					<Skeleton height={15} width={90} />
					<Skeleton height={15} width={250} sx={{ mt: 3 }} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						pt: 3,
						alignContent: 'center',
						justifyContent: 'center',
						gap: '10%',
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
						<Skeleton height={20} width={80} />
						<Skeleton height={20} width={80} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyItems: 'center',
						}}
					>
						<Skeleton height={20} width={80} />
						<Skeleton height={20} width={80} />
					</Box>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyItems: 'center',
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
