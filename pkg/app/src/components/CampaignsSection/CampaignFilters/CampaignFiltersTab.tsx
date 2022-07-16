import React, { useMemo } from 'react'

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
import { useTranslation } from 'react-i18next'
import { Campaign_Bool_Exp } from 'src/queries'

interface ComponentProps {
	handleDrawerNavigation: () => void
	setFilters: () => void
	filters: Campaign_Bool_Exp[]
}

interface FiltersInterface {
	text: string
	value: Campaign_Bool_Exp
}
export function CampaignFiltersTab({ handleDrawerNavigation, setFilters, filters }: ComponentProps) {
	const campaignStatuses = useMemo<FiltersInterface[]>(
		() => [
			{
				text: 'Success',
				value: {
					state: {
						_eq: 'Success',
					},
				},
			},
			{
				text: 'Failed',
				value: {
					state: {
						_eq: 'Failed',
					},
				},
			},
			{
				text: 'Locked',
				value: {
					state: {
						_eq: 'Locked',
					},
				},
			},
			{
				text: 'Reverting',
				value: {
					state: {
						_eq: 'Reverting',
					},
				},
			},
			{
				text: 'Init',
				value: {
					state: {
						_eq: 'Init',
					},
				},
			},
			{
				text: 'Active',
				value: {
					state: {
						_eq: 'Active',
					},
				},
			},
			{
				text: 'Paused',
				value: {
					state: {
						_eq: 'Paused',
					},
				},
			},
			{
				text: 'Finalizing',
				value: {
					state: {
						_eq: 'Finalizing',
					},
				},
			},
		],
		[],
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
							{campaignStatuses.map((x, index) => (
								<FormControlLabel key={index} control={<Checkbox />} label={x.text} />
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
					<Button variant="outlined" fullWidth startIcon={<ClearAll />}>
						{t('button:ui:clear')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}
