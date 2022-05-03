import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import FilterListIcon from '@mui/icons-material/FilterList'
import Box from '@mui/material/Box'
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { makeStyles } from '@mui/styles'
import ClearIcon from '@mui/icons-material/Clear'
import ClearAllIcon from '@mui/icons-material/ClearAll'
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
			sx={{ width: 280 }}
			role="presentation"
			onClick={() => setOpenDrawer(false)}
			onKeyDown={() => setOpenDrawer(false)}
		>
			<Box sx={{ my: 2, px: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Typography fontWeight="700" variant={'body1'}>
					Filters
				</Typography>
				<IconButton aria-label="filters" onClick={handleDrawerNavigation} color="inherit">
					<ClearIcon fontSize={'small'} />
				</IconButton>
			</Box>
			<Divider />
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
						startIcon={<ClearAllIcon />}
						sx={{ color: 'white', border: 'white 0.7px solid' }}
					>
						Clear
					</Button>
				</Box>
			</Box>
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
			<IconButton aria-label="filters" onClick={handleDrawerNavigation} color="inherit" sx={{ ml: 1 }}>
				<FilterListIcon fontSize={'small'} />
			</IconButton>
		</Box>
	)
}

export default FiltersTab
