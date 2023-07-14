import EmojiEventsIcon from '@mui/icons-material/EmojiEventsOutlined'
import FavoriteIcon from '@mui/icons-material/FavoriteBorder'
import ShieldIcon from '@mui/icons-material/ShieldOutlined'
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const MyAchievements = () => {
	const theme = useTheme()
	const { t } = useTranslation()

	return (
		<Card sx={{ display: 'flex' }} variant={'glass'}>
			<CardContent>
				<Typography variant="h5">{t('page:account:achievements:title')}</Typography>
				<Typography variant="caption">{t('page:account:achievements:description')}</Typography>

				<Box sx={{ mt: 3.5, display: 'flex', flexDirection: 'column', gap: 3.5 }}>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2.5 }}>
						<Avatar variant="achievement">
							<EmojiEventsIcon />
						</Avatar>
						<Typography fontWeight="700">9000 XP</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2 }}>
						<Avatar variant="achievement">
							<FavoriteIcon />
						</Avatar>
						<Typography fontWeight="700">1337 Reputation</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 3 }}>
						<Avatar variant="achievement">
							<ShieldIcon />
						</Avatar>
						<Typography fontWeight="700">42 Trust</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}
