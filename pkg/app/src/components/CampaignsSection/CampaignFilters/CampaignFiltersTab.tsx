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
import { useNetworkContext } from 'provider/network/modules/context'
import { useTranslation } from 'react-i18next'
import { Campaign_Bool_Exp } from 'src/queries'
import { fromUnit } from 'src/utils/token'

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
	const { selectedApiProvider } = useNetworkContext()

	const fundingTargets = useMemo<FiltersInterface[]>(
		() => [
			{
				text: '< 1,000 $',
				value: {
					target: {
						_lt: fromUnit(
							1000,
							selectedApiProvider.systemProperties.tokenDecimals[
								selectedApiProvider.systemProperties.networkCurrency
							],
						),
					},
				},
			},
			{
				text: '1,000 $ - 9,999 $',
				value: {
					_and: [
						{
							target: {
								_gte: fromUnit(
									1000,
									selectedApiProvider.systemProperties.tokenDecimals[
										selectedApiProvider.systemProperties.networkCurrency
									],
								),
							},
						},
						{
							target: {
								_lte: fromUnit(
									9999,
									selectedApiProvider.systemProperties.tokenDecimals[
										selectedApiProvider.systemProperties.networkCurrency
									],
								),
							},
						},
					],
				},
			},
			{
				text: '10,000 $ - 99,999 $',
				value: {
					_and: [
						{
							target: {
								_gte: fromUnit(
									10000,
									selectedApiProvider.systemProperties.tokenDecimals[
										selectedApiProvider.systemProperties.networkCurrency
									],
								),
							},
						},
						{
							target: {
								_lte: fromUnit(
									99999,
									selectedApiProvider.systemProperties.tokenDecimals[
										selectedApiProvider.systemProperties.networkCurrency
									],
								),
							},
						},
					],
				},
			},
			{
				text: '100,000 $ - 499,999 $',
				value: {
					_and: [
						{
							target: {
								_gte: fromUnit(
									100000,
									selectedApiProvider.systemProperties.tokenDecimals[
										selectedApiProvider.systemProperties.networkCurrency
									],
								),
							},
						},
						{
							target: {
								_lte: fromUnit(
									49999,
									selectedApiProvider.systemProperties.tokenDecimals[
										selectedApiProvider.systemProperties.networkCurrency
									],
								),
							},
						},
					],
				},
			},
			{
				text: '> 500,000 $',
				value: {
					target: {
						_gt: fromUnit(
							500000,
							selectedApiProvider.systemProperties.tokenDecimals[
								selectedApiProvider.systemProperties.networkCurrency
							],
						),
					},
				},
			},
		],
		[selectedApiProvider.systemProperties.networkCurrency, selectedApiProvider.systemProperties.tokenDecimals],
	)
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
					{t('page:campaigns:filters:funding_target')}
				</Typography>
				<Box sx={{ px: 2 }}>
					<FormControl>
						<FormGroup>
							{fundingTargets.map((x, index) => (
								<FormControlLabel key={index} control={<Checkbox />} label={x.text} />
							))}
						</FormGroup>
					</FormControl>
				</Box>
			</Box>
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
