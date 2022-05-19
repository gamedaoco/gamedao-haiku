import { Avatar, Box, Card, CardContent, Divider, List, ListItem, ListItemText, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import React from 'react'
import ShieldIcon from '@mui/icons-material/Shield'

const MyAchievementsCard = () => {
	return (
		<Card sx={{ borderRadius: '16px', height: '336px' }}>
			<CardContent>
				<Typography fontWeight="700" variant="h5">
					My Achievements
				</Typography>
				<Typography variant="caption">
					Level up by using our protocols and collaborating with the community.
				</Typography>
				<Box sx={{ mt: 2.5, display: 'flex', flexDirection: 'column', gap: 3 }}>
					<Box sx={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: 2 }}>
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
