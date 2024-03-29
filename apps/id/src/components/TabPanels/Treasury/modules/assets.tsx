// libs
// modules
import { Asset } from './asset'
// Subscriptions
import { getAssetsSubscription, TreasuryAsset } from './mock-data'
import { Grid, Box, Typography } from '@mui/material'
import React, { useState, useMemo, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	address: string
}

export function Assets({ address }: ComponentProps) {
	const { t } = useTranslation()

	const [assetsData, setAssetsData] = useState<TreasuryAsset[]>([])

	useEffect(() => {
		const data = getAssetsSubscription()
		setAssetsData(data)
	}, [])

	return (
		<>
			<Box py={3}>
				<Typography variant="h5">{t('page:organizations:treasury:assets')}</Typography>
			</Box>
			<Grid container spacing={3}>
				{assetsData.map(({ name, quantity, image }) => (
					<Grid item xs={3} key={name}>
						<Asset name={name} quantity={quantity} image={image}></Asset>
					</Grid>
				))}
			</Grid>
		</>
	)
}
