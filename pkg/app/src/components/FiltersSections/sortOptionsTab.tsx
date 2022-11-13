import React, { useCallback, useEffect, useState } from 'react'

import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	sortOptions: any
	setFilters: (x: (prev) => any) => void
	defaultOption?: string
}
export function SortOptionsTab({ sortOptions, setFilters, defaultOption }: ComponentProps) {
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
	useEffect(() => {
		if (sortOptions && defaultOption && !keyState) {
			setKeyState(sortOptions?.filter(({ key }) => key === defaultOption)?.[0]?.key)
			setFilters((prev) => ({
				...prev,
				sortOption: eval(`(${sortOptions?.filter(({ key }) => key === defaultOption)?.[0]?.value ?? 'null'})`),
			}))
		}
	}, [defaultOption, sortOptions, keyState, setFilters])
	const handleChange = useCallback(
		(event: SelectChangeEvent) => {
			setKeyState(event.target.value)
			setFilters((prev) => ({
				...prev,
				sortOption: eval(`(${mappingState[event.target.value]?.value ?? 'null'})`),
			}))
		},
		[setFilters, mappingState],
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
				{t('label:sort_by')}
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
