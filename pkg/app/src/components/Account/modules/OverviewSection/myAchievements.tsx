import React from 'react'

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShieldIcon from '@mui/icons-material/Shield'
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

const MyAchievementsCard = () => {
	const { t } = useTranslation()
	return (
		<Card sx={{ borderRadius: '16px', height: '100%' }}>
			<CardContent>
				<Typography fontWeight="700" variant="h5">
					{t('page:account:achievements:title')}
				</Typography>
				<Typography variant="caption">{t('page:account:achievements:description')}</Typography>
				<Box sx={{ mt: 3.5, display: 'flex', flexDirection: 'column', gap: 3.5 }}>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2.5 }}>
						<Avatar>
							<FavoriteIcon color="primary" />
						</Avatar>
						<Typography fontWeight="700">9000 XP</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2 }}>
						<Avatar>
							<EmojiEventsIcon color="primary" />
						</Avatar>
						<Typography fontWeight="700">1337 Reputation</Typography>
					</Box>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 3 }}>
						<Avatar>
							<ShieldIcon color="primary" />
						</Avatar>
						<Typography fontWeight="700">42 Trust</Typography>
					</Box>
				</Box>
			</CardContent>
		</Card>
	)
}

export default MyAchievementsCard
