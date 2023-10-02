import { Clear, ClearAll } from '@mui/icons-material'
import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormControlLabel,
	FormGroup,
	IconButton,
	Typography,
} from '@mui/material'
import React, { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { Campaign_Bool_Exp, DisplayValueEntryString } from 'src/queries'

interface ComponentProps {
	handleDrawerNavigation: () => void
	setFilters: (p: (prev) => any) => void
	filters: Campaign_Bool_Exp[]
	filtersOptions: DisplayValueEntryString[]
}

export function CampaignFiltersTab({ handleDrawerNavigation, setFilters, filters, filtersOptions }: ComponentProps) {
	const updateFilters = useCallback(
		(e) => {
			if (e.target.checked) {
				setFilters((prev) => ({ ...prev, filters: [...prev.filters, JSON.parse(e.target.value)] }))
			} else {
				setFilters((prev) => ({
					...prev,
					filters: prev.filters.filter((item) => JSON.stringify(item) !== e.target.value),
				}))
			}
		},
		[setFilters],
	)
	const checkIfSelected = useCallback<(x) => boolean>(
		(x) => {
			return filters.filter((e) => JSON.stringify(e) === JSON.stringify(x.value)).length > 0
		},
		[filters],
	)
	const { t } = useTranslation()
	return (
		<Box sx={{ width: 280 }} role="presentation">
			<Box sx={{ my: 2, px: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Typography fontWeight="700" variant={'body1'}>
					{t('label:filters')}
				</Typography>
				<IconButton aria-label="filters" onClick={handleDrawerNavigation} color="inherit">
					<Clear fontSize={'small'} />
				</IconButton>
			</Box>
			<Divider />
			<Box sx={{ px: 4, mt: 2 }}>
				<Typography fontWeight="700" variant={'body1'}>
					{t('page:campaigns:filters:status')}
				</Typography>
				<Box sx={{ px: 2 }}>
					<FormControl>
						<FormGroup>
							{filtersOptions?.map((x, index) => (
								<FormControlLabel
									key={index}
									checked={checkIfSelected(x)}
									value={JSON.stringify(x?.value)}
									control={<Checkbox />}
									label={x.text}
									onChange={updateFilters}
								/>
							))}
						</FormGroup>
					</FormControl>
				</Box>
			</Box>
			<Box
				mt={3}
				position="absolute"
				bottom="0px"
				sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', py: 3 }}
			>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '60%' }}>
					<Button
						variant="outlined"
						fullWidth
						startIcon={<ClearAll />}
						onClick={() => setFilters((prev) => ({ ...prev, filters: [] }))}
					>
						{t('button:ui:clear')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}
