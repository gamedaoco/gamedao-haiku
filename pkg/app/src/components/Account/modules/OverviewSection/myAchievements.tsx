import React from 'react'

import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShieldIcon from '@mui/icons-material/Shield'
import { Avatar, Box, Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'

const MyAchievementsCard = () => {
	return (
		<Card sx={{ borderRadius: '16px', height: '100%' }}>
			<CardContent>
				<Typography fontWeight="700" variant="h5">
					My Achievements
				</Typography>
				<Typography variant="caption">
					Level up by using our protocols and collaborating with the community.
				</Typography>
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
