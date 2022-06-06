import React, { FC } from 'react'
import { Box, TableBody, TableCell, TableRow, Skeleton } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const LoadingCampaignTable: FC = () => {
	const theme = useTheme()
	return (
		<TableBody>
			{[1, 2, 3, 4, 5]?.map((index) => (
				<TableRow key={index}>
					<TableCell>
						<Box display="flex" gap={3} justifyItems="center" alignItems="center">
							<Skeleton width={64} height={64} sx={{ borderRadius: theme.shape.borderRadiusSm }} />
							<Box display="flex" flexDirection="column">
								<Box sx={{ width: 70, height: 1 }}>
									<Skeleton />
								</Box>
								<Box sx={{ width: 70, height: 1 }}>
									<Skeleton />
								</Box>
							</Box>
						</Box>
					</TableCell>
					<TableCell>
						<Skeleton width={100} height={20} />
					</TableCell>
					<TableCell>
						<Skeleton />
					</TableCell>
					<TableCell>
						<Box display="flex" flexDirection="column" sx={{ mt: 2 }}>
							<Skeleton />
							<Skeleton />
						</Box>
					</TableCell>
					<TableCell>
						<Skeleton />
					</TableCell>
					<TableCell>
						<Skeleton />
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	)
}

export default LoadingCampaignTable
