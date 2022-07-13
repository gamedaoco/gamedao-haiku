import React, { useState } from 'react'

import ClearIcon from '@mui/icons-material/Clear'
import ClearAllIcon from '@mui/icons-material/ClearAll'
import FilterListIcon from '@mui/icons-material/FilterList'
import {
	Button,
	Checkbox,
	Divider,
	Drawer,
	FormControl,
	FormControlLabel,
	FormGroup,
	IconButton,
	Radio,
	RadioGroup,
} from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function FiltersTab() {
	const [openDrawer, setOpenDrawer] = useState(false)
	const handleDrawerNavigation = () => setOpenDrawer((prevState) => !prevState)
	const ListTab = () => (
		<Box sx={{ width: 280 }} role="presentation">
			<Box sx={{ my: 2, px: 4, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
				<Typography fontWeight="700" variant={'body1'}>
					Filters
				</Typography>
				<IconButton aria-label="filters" onClick={handleDrawerNavigation} color="inherit">
					<ClearIcon fontSize={'small'} />
				</IconButton>
			</Box>
			<Divider />
			<Box sx={{ px: 4, mt: 2 }}>
				<Typography fontWeight="700" variant={'body1'}>
					Filter Checkbox
				</Typography>
				<Box sx={{ px: 2 }}>
					<FormControl>
						<FormGroup>
							<FormControlLabel control={<Checkbox defaultChecked />} label="Checkbox 1" />
							<FormControlLabel control={<Checkbox />} label="Checkbox 2" />
							<FormControlLabel control={<Checkbox />} label="Checkbox 3" />
						</FormGroup>
					</FormControl>
				</Box>
			</Box>
			<Box sx={{ px: 4, mt: 2 }}>
				<Typography fontWeight="700" variant={'body1'}>
					Filter Radio Button
				</Typography>
				<Box sx={{ px: 2 }}>
					<FormControl>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="female"
							name="radio-buttons-group"
						>
							<FormControlLabel value="female" control={<Radio />} label="Option 1" />
							<FormControlLabel value="male" control={<Radio />} label="Option 2" />
							<FormControlLabel value="other" control={<Radio />} label="Option 3" />
						</RadioGroup>
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
					<Button variant="outlined" fullWidth startIcon={<ClearAllIcon />}>
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
			<Drawer anchor={'right'} open={openDrawer} onClose={() => setOpenDrawer(false)}>
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
