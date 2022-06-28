import React, { useCallback, useEffect, useState } from 'react'

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { Organization_Order_By } from 'src/queries'

export function SortOptionsTab({ sortOptions, setSortOption }) {
	const { t } = useTranslation()
	const [keyState, setKeyState] = useState<string>('')
	const [mappingState, setMappingState] = useState({})

	useEffect(() => {
		if (sortOptions) {
			const mapping = {}
			sortOptions.forEach((option) => {
				mapping[option.key] = option
			})
			setMappingState(mapping)
		}
	}, [sortOptions])

	const handleChange = useCallback(
		(event: SelectChangeEvent) => {
			setKeyState(event.target.value)
			setSortOption(eval(`(${mappingState[event.target.value]?.value ?? 'null'})`) as Organization_Order_By)
		},
		[setSortOption, mappingState],
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
					<Select value={keyState} onChange={handleChange}>
						{sortOptions.map((x) => (
							<MenuItem value={x.key} key={x.key}>
								{t(x.text)}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</Box>
	)
}
