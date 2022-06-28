import React, { useCallback } from 'react'

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { Organization_Order_By } from 'src/queries'

export function SortOptionsTab({ sortOption, sortOptions, setSortOption }) {
	const { t } = useTranslation()

	const handleChange = useCallback(
		(event: SelectChangeEvent) => {
			setSortOption(eval(`(${event.target.value ?? 'null'})`) as Organization_Order_By)
		},
		[setSortOption],
	)

	if (!sortOptions) return null

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				marginLeft: 2,
				minWidth: 400,
			}}
		>
			<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
				Sort By:
			</Typography>
			<Box>
				<FormControl
					fullWidth
					sx={{
						m: 1,
						'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
							border: 'none',
						},
					}}
					size="small"
				>
					<Select value={sortOption || ''} onChange={handleChange}>
						{sortOptions.map((x) => (
							<MenuItem value={x.value} key={x.key}>
								{t(x.text)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</Box>
	)
}
