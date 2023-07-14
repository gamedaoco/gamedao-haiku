import { Box, TableBody, TableCell, TableRow } from '@mui/material'
import Skeleton from '@mui/material/Skeleton'
import React, { FC } from 'react'

const LoadingTable: FC = () => {
	return (
		<TableBody>
			{new Array(3).map((index) => (
				<TableRow hover key={index}>
					<TableCell>
						<Box sx={{ alignItems: 'center', display: 'flex' }}>
							<Skeleton variant="circular" width={40} height={40} />
							<Box sx={{ ml: 1, width: 300 }}>
								<Skeleton animation="wave" />
							</Box>
						</Box>
					</TableCell>
					<TableCell>
						{' '}
						<Skeleton />{' '}
					</TableCell>
					<TableCell>
						{' '}
						<Skeleton width={300} />{' '}
					</TableCell>
					<TableCell>
						{' '}
						<Skeleton />
					</TableCell>
					<TableCell align="right">
						{' '}
						<Skeleton width={20} />{' '}
					</TableCell>
				</TableRow>
			))}
		</TableBody>
	)
}

export default LoadingTable
