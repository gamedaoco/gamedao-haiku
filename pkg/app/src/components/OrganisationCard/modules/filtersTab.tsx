import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import FilterListIcon from '@mui/icons-material/FilterList'
import Box from '@mui/material/Box'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
	paper: {
		background: '#212B36',
	},
})
const FiltersTab = () => {
	const classes = useStyles()
	const [openDrawer, setOpenDrawer] = useState(false)
	const handleDrawerNavigation = () => setOpenDrawer((prevState) => !prevState)
	const ListTab = () => (
		<Box
			sx={{ width: 250 }}
			role="presentation"
			onClick={() => setOpenDrawer(false)}
			onKeyDown={() => setOpenDrawer(false)}
		>
			<List>
				{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
					<ListItem key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text, index) => (
					<ListItem key={text}>
						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
			</List>
		</Box>
	)
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}
		>
			<Drawer
				anchor={'right'}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
				classes={{ paper: classes.paper }}
			>
				<ListTab />
			</Drawer>
			<Typography sx={{ fontWeight: '700' }} variant={'body2'}>
				Filters
			</Typography>
			<FilterListIcon fontSize={'small'} sx={{ ml: 1 }} onClick={handleDrawerNavigation} />
		</Box>
	)
}

export default FiltersTab
