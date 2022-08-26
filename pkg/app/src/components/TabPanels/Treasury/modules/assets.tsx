// libs
import { Grid, Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// modules
import { Asset } from './asset'

interface ComponentProps {}

export function Assets({}: ComponentProps) {
	const { t } = useTranslation()
	const assetsData = [
		{
			name: 'ZERO',
			quantity: 714000064,
			image: 'zero.png',
		},
		{
			name: 'PLAY',
			quantity: 1350000197,
			image: 'play.png',
		},
		{
			name: 'GAME',
			quantity: 1720000361,
			image: 'game.png',
		},
		{
			name: 'aUSD',
			quantity: 2.6566,
			image: 'ausd.png',
		},
	]

	return (
		<>
			<Box py={3}>
				<Typography variant="h5">{t('page:organisations:treasury:assets')}</Typography>
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
