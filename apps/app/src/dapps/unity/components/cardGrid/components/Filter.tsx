import React from 'react'

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
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

interface ComponentProps {
	handleDrawerNavigation: () => void
	filters: any
}
export function Filter({ handleDrawerNavigation, filters }: ComponentProps) {
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
					<Button variant="outlined" fullWidth startIcon={<ClearAll />}>
						{t('button:ui:clear')}
					</Button>
				</Box>
			</Box>
		</Box>
	)
}
